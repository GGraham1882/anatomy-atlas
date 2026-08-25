import { SYSTEMS, STRUCTURES, SILHOUETTE } from "./data.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const MIDLINE = 200;

const el = {
  systems: document.getElementById("systems"),
  structures: document.getElementById("structures"),
  labels: document.getElementById("labels"),
  silhouette: document.getElementById("silhouette"),
  panel: document.getElementById("panelInner"),
  quizToggle: document.getElementById("quizToggle")
};

let currentSystem = SYSTEMS[0].id;
let selectedId = null;
let quiz = null;

drawSilhouette();

function drawSilhouette() {
  const parts = [
    { d: SILHOUETTE.trunk, mirror: false },
    { d: SILHOUETTE.arm, mirror: true },
    { d: SILHOUETTE.leg, mirror: true }
  ];

  parts.forEach(({ d, mirror }) => {
    (mirror ? ["left", "right"] : ["single"]).forEach((side) => {
      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("class", "silhouette-part");
      if (side === "right") {
        path.setAttribute("transform", `translate(${MIDLINE * 2} 0) scale(-1 1)`);
      }
      el.silhouette.appendChild(path);
    });
  });
}

// ---------- System tabs ----------

SYSTEMS.forEach((system) => {
  const tab = document.createElement("button");
  tab.className = "system-tab";
  tab.type = "button";
  tab.textContent = system.name;
  tab.setAttribute("role", "tab");
  tab.dataset.system = system.id;
  tab.addEventListener("click", () => selectSystem(system.id));
  el.systems.appendChild(tab);
});

function selectSystem(id, { updateHash = true } = {}) {
  currentSystem = id;
  selectedId = null;
  [...el.systems.children].forEach((tab) =>
    tab.setAttribute("aria-selected", String(tab.dataset.system === id))
  );
  if (updateHash && window.location.hash.slice(1) !== id) {
    history.replaceState(null, "", `#${id}`);
  }
  drawSystem();
  if (quiz) startQuestion();
  else showSystemPanel();
}

// Deep links: /anatomy/#nervous opens straight to that system.
function systemFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  return SYSTEMS.some((s) => s.id === id) ? id : null;
}

window.addEventListener("hashchange", () => {
  const id = systemFromHash();
  if (id && id !== currentSystem) selectSystem(id, { updateHash: false });
});

// ---------- Drawing ----------

function visibleStructures() {
  return STRUCTURES.filter((s) => s.system === currentSystem);
}

// Solid organs are painted first so vessels, nerves, and airways drawn as
// strokes stay visible on top of them.
function drawOrder(list) {
  return [...list].sort((a, b) => Number(Boolean(a.stroke)) - Number(Boolean(b.stroke)));
}

function drawSystem() {
  el.structures.replaceChildren();
  el.labels.replaceChildren();

  drawOrder(visibleStructures()).forEach((structure) => {
    // Bilateral structures are authored once and reflected across the midline.
    const sides = structure.mirror ? ["left", "right"] : ["single"];

    sides.forEach((side) => {
      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", structure.d);
      path.dataset.id = structure.id;
      path.classList.add("structure", `sys-${structure.system}`);
      if (structure.stroke) path.classList.add("stroked");
      if (structure.stroke && structure.system === "circulatory") {
        path.classList.add(structure.vein ? "vein" : "artery");
      }
      if (side === "right") {
        path.setAttribute("transform", `translate(${MIDLINE * 2} 0) scale(-1 1)`);
      }

      const title = document.createElementNS(SVG_NS, "title");
      title.textContent = structure.name;
      path.appendChild(title);

      path.addEventListener("click", () => handleClick(structure.id));
      el.structures.appendChild(path);
    });
  });
}

function drawLabel(structure) {
  el.labels.replaceChildren();
  if (!structure || !structure.label) return;

  const [x, y] = structure.label;
  const toLeft = x < MIDLINE;
  const endX = toLeft ? 34 : 366;

  const line = document.createElementNS(SVG_NS, "line");
  line.setAttribute("x1", x);
  line.setAttribute("y1", y);
  line.setAttribute("x2", endX);
  line.setAttribute("y2", y);
  line.classList.add("label-line");

  const text = document.createElementNS(SVG_NS, "text");
  text.setAttribute("x", endX);
  text.setAttribute("y", y - 6);
  text.setAttribute("text-anchor", toLeft ? "start" : "end");
  text.classList.add("label-text");
  text.textContent = structure.name;

  el.labels.append(line, text);
}

function setActive(id) {
  [...el.structures.children].forEach((path) =>
    path.classList.toggle("active", path.dataset.id === id)
  );
}

// ---------- Explore mode ----------

function handleClick(id) {
  if (quiz) return answer(id);
  selectedId = id;
  setActive(id);
  const structure = STRUCTURES.find((s) => s.id === id);
  drawLabel(structure);
  showStructurePanel(structure);
}

function showSystemPanel() {
  const system = SYSTEMS.find((s) => s.id === currentSystem);
  const list = visibleStructures();

  el.panel.replaceChildren();
  el.panel.append(
    node("p", "panel-kicker", "System"),
    node("h2", null, system.name),
    node("p", "body", system.blurb),
    node("p", "hint", "Select any structure on the figure, or choose one below.")
  );

  const ul = document.createElement("ul");
  list.forEach((structure) => {
    const li = document.createElement("li");
    li.textContent = structure.name;
    li.addEventListener("click", () => handleClick(structure.id));
    ul.appendChild(li);
  });
  el.panel.appendChild(ul);
}

function showStructurePanel(structure) {
  el.panel.replaceChildren();
  el.panel.append(
    node("p", "panel-kicker", SYSTEMS.find((s) => s.id === structure.system).name)
  );
  el.panel.append(node("h2", null, structure.name));
  if (structure.latin) el.panel.append(node("p", "latin", structure.latin));
  el.panel.append(node("p", "body", structure.text));

  const ul = document.createElement("ul");
  visibleStructures().forEach((other) => {
    const li = document.createElement("li");
    li.textContent = other.name;
    if (other.id === structure.id) li.style.color = "var(--amber-bright)";
    li.addEventListener("click", () => handleClick(other.id));
    ul.appendChild(li);
  });
  el.panel.appendChild(ul);
}

// ---------- Quiz mode ----------

el.quizToggle.addEventListener("click", () => (quiz ? endQuiz() : startQuiz()));

function startQuiz() {
  quiz = { asked: 0, correct: 0, target: null, answered: false };
  el.quizToggle.classList.add("active");
  el.quizToggle.textContent = "Exit quiz";
  startQuestion();
}

function endQuiz() {
  quiz = null;
  el.quizToggle.classList.remove("active");
  el.quizToggle.textContent = "Test yourself";
  clearMarks();
  el.labels.replaceChildren();
  showSystemPanel();
}

function startQuestion() {
  clearMarks();
  el.labels.replaceChildren();
  const pool = visibleStructures();
  if (pool.length === 0) return;

  quiz.target = pool[Math.floor(Math.random() * pool.length)];
  quiz.answered = false;
  renderQuizPanel();
}

function answer(id) {
  if (quiz.answered) return startQuestion();

  quiz.answered = true;
  quiz.asked++;
  const right = id === quiz.target.id;
  if (right) quiz.correct++;

  [...el.structures.children].forEach((path) => {
    if (path.dataset.id === quiz.target.id) path.classList.add("correct");
    else if (path.dataset.id === id && !right) path.classList.add("wrong");
  });

  drawLabel(quiz.target);
  renderQuizPanel(right ? "good" : "bad", id);
}

function renderQuizPanel(result, guessedId) {
  el.panel.replaceChildren();

  const score = document.createElement("div");
  score.className = "score";
  score.append(
    scoreCell(quiz.correct, "Correct"),
    scoreCell(quiz.asked, "Asked"),
    scoreCell(quiz.asked ? Math.round((quiz.correct / quiz.asked) * 100) + "%" : "—", "Accuracy")
  );
  el.panel.appendChild(score);

  el.panel.append(node("p", "prompt", "Find this structure"));
  el.panel.append(node("h2", null, quiz.target.name));
  if (quiz.target.latin) el.panel.append(node("p", "latin", quiz.target.latin));

  if (result) {
    const guessed = STRUCTURES.find((s) => s.id === guessedId);
    const message =
      result === "good"
        ? "Correct."
        : `Not quite — that is the ${guessed ? guessed.name.toLowerCase() : "wrong structure"}. The answer is highlighted.`;
    el.panel.append(node("p", `feedback ${result}`, message));
    el.panel.append(node("p", "body", quiz.target.text));
    el.panel.append(node("p", "hint", "Click anywhere on the figure for the next question."));
  } else {
    el.panel.append(node("p", "hint", "Click it on the figure."));
  }
}

function scoreCell(value, label) {
  const wrap = document.createElement("div");
  const v = document.createElement("span");
  v.textContent = value;
  const l = document.createElement("small");
  l.textContent = label;
  wrap.append(v, l);
  return wrap;
}

function clearMarks() {
  [...el.structures.children].forEach((path) =>
    path.classList.remove("correct", "wrong", "active")
  );
}

// ---------- Helpers ----------

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

selectSystem(systemFromHash() || SYSTEMS[0].id);
