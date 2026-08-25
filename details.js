// Detail views: zoomed diagrams for regions where the full-body figure cannot
// carry enough resolution. Each has its own viewBox and its own structures,
// which behave exactly like the ones on the main figure — clickable, labelled,
// and quizzable.

// Crown outlines, drawn centred on the origin with the biting edge at +y.
// Each tooth is then translated onto the arch and rotated to face the midline.
const CROWN = {
  incisor: "M-7 -12 L7 -12 L6 7 Q0 12 -6 7 Z",
  lateral: "M-6 -11 L6 -11 L5 6 Q0 11 -5 6 Z",
  canine: "M-7 -14 L7 -14 L5 5 Q0 14 -5 5 Z",
  premolar: "M-8 -12 L8 -12 L7 5 Q4 10 0 7 Q-4 10 -7 5 Z",
  molar: "M-11 -13 L11 -13 L10 5 Q7 10 4 7 Q0 11 -4 7 Q-7 10 -10 5 Z"
};

// Each quadrant runs midline outward: two incisors, a canine, two premolars,
// three molars.
const TOOTH_SEQUENCE = [
  { kind: "incisor", label: "central incisor" },
  { kind: "lateral", label: "lateral incisor" },
  { kind: "canine", label: "canine" },
  { kind: "premolar", label: "first premolar" },
  { kind: "premolar", label: "second premolar" },
  { kind: "molar", label: "first molar" },
  { kind: "molar", label: "second molar" },
  { kind: "molar", label: "third molar" }
];

const TOOTH_TEXT = {
  "central incisor": "The front teeth, with a single chisel edge built for cutting. The upper central incisors are the widest teeth at the front of the mouth and the ones most often chipped.",
  "lateral incisor": "Sitting either side of the central incisors and slightly narrower. These are among the most common teeth to be congenitally missing or undersized.",
  "canine": "The cornerstone of the arch. Canines have the longest root of any tooth, which is why they are usually the last to be lost, and their single point is built for tearing.",
  "first premolar": "A transitional tooth with two cusps, bridging the tearing canine and the grinding molars. Upper first premolars are commonly removed to create space in orthodontic treatment.",
  "second premolar": "The second of the two-cusped teeth, doing the first stage of grinding before food reaches the molars.",
  "first molar": "The six-year molar — the first permanent tooth to erupt, arriving behind the baby teeth rather than replacing one. It carries more chewing load than any other tooth.",
  "second molar": "The twelve-year molar, sitting behind the first and taking a share of the grinding load.",
  "third molar": "The wisdom tooth, erupting between roughly 17 and 25 if it erupts at all. There is frequently not enough jaw for it, which is why these are the teeth most often extracted."
};

// Quadrants in Universal Numbering order (1-32). Because the figure faces the
// viewer, the patient's right side is drawn on the viewer's left.
function buildDentition() {
  const teeth = [];
  const quadrants = [
    { arch: "upper", side: "right", startNumber: 8, step: -1, from: Math.PI / 2, to: 0 },
    { arch: "upper", side: "left", startNumber: 9, step: 1, from: Math.PI / 2, to: Math.PI },
    { arch: "lower", side: "left", startNumber: 24, step: -1, from: Math.PI / 2, to: Math.PI },
    { arch: "lower", side: "right", startNumber: 25, step: 1, from: Math.PI / 2, to: 0 }
  ];

  quadrants.forEach(({ arch, side, startNumber, step, from, to }) => {
    TOOTH_SEQUENCE.forEach((tooth, i) => {
      // Spread the eight teeth of a quadrant evenly along the quarter arch.
      const t = i / (TOOTH_SEQUENCE.length - 1);
      const theta = from + (to - from) * t;

      const rx = 150;
      const ry = 120;
      const x = 200 - rx * Math.cos(theta);
      const y = arch === "upper" ? 30 + ry * Math.sin(theta) : 330 - ry * Math.sin(theta);

      // Point every tooth back toward the midline of its own arch.
      let rotation = (theta * 180) / Math.PI - 90;
      if (arch === "lower") rotation = -rotation;

      const number = startNumber + step * i;
      const quadrant = arch === "upper" ? "Upper " + side : "Lower " + side;

      teeth.push({
        id: "tooth-" + number,
        name: quadrant + " " + tooth.label,
        latin: "Tooth " + number,
        system: "skeletal",
        d: CROWN[tooth.kind],
        transform: "translate(" + x.toFixed(1) + " " + y.toFixed(1) + ") rotate(" + rotation.toFixed(1) + ")",
        label: [x, y],
        text: TOOTH_TEXT[tooth.label] +
          " This is tooth " + number + " in the Universal Numbering System, in the " +
          quadrant.toLowerCase() + " quadrant."
      });
    });
  });

  return teeth;
}

// The 27 bones of the hand. Carpals are drawn individually; metacarpals and
// phalanges are generated along each digit's ray so proportions stay consistent.
const CARPALS = [
  {
    id: "scaphoid", name: "Scaphoid",
    d: "M176 386 C168 384 163 392 165 402 C167 412 176 416 183 412 C190 408 189 396 185 390 C183 387 180 386 176 386 Z",
    text: "The most frequently fractured carpal bone, usually from falling onto an outstretched hand. Its blood supply enters from one end, so a break across the middle can starve the far half and fail to heal."
  },
  {
    id: "lunate", name: "Lunate",
    d: "M188 384 C196 382 205 386 206 396 C207 406 200 412 192 411 C185 410 181 402 182 394 C183 388 185 385 188 384 Z",
    text: "A crescent-shaped bone in the proximal row, named for its moon-like profile. It is the carpal most commonly dislocated."
  },
  {
    id: "triquetrum", name: "Triquetrum",
    d: "M210 388 C218 386 226 392 226 401 C226 410 219 415 212 413 C205 411 202 403 204 395 C205 391 207 389 210 388 Z",
    text: "A pyramid-shaped bone on the little-finger side of the proximal row, articulating with the pisiform that sits on top of it."
  },
  {
    id: "pisiform", name: "Pisiform",
    d: "M224 408 C231 407 236 412 235 418 C234 424 228 427 223 425 C218 423 217 416 219 411 C220 409 222 408 224 408 Z",
    text: "A pea-sized bone sitting on the triquetrum inside a tendon. It is the smallest bone of the wrist and the only carpal that develops within a tendon."
  },
  {
    id: "trapezium", name: "Trapezium",
    d: "M170 360 C163 358 158 365 160 374 C162 383 170 387 177 384 C184 381 184 370 180 364 C178 361 174 360 170 360 Z",
    text: "The saddle-shaped bone at the base of the thumb. Its joint with the first metacarpal is what gives humans an opposable thumb, and it is a common site of arthritis."
  },
  {
    id: "trapezoid", name: "Trapezoid",
    d: "M186 360 C193 358 200 363 200 371 C200 379 194 384 187 382 C181 380 179 372 181 365 C182 362 184 361 186 360 Z",
    text: "The smallest bone of the distal carpal row, wedged between the trapezium and the capitate. It is rarely injured because of how well it is protected."
  },
  {
    id: "capitate", name: "Capitate",
    d: "M206 356 C214 354 222 361 222 372 C222 383 215 389 207 387 C199 385 195 375 197 366 C199 360 202 357 206 356 Z",
    text: "The largest carpal bone, at the centre of the wrist. Every other carpal articulates around it, and it forms the axis the hand rotates about."
  },
  {
    id: "hamate", name: "Hamate",
    d: "M228 362 C236 360 243 367 243 377 C243 387 236 392 229 390 C222 388 219 379 221 370 C222 366 225 363 228 362 Z",
    text: "A wedge-shaped bone with a hook projecting from its palm side. That hook forms one wall of the tunnel carrying the ulnar nerve, and cyclists and golfers sometimes fracture it."
  }
];

const DIGITS = [
  { name: "Thumb", ordinal: "first", baseX: 162, baseY: 352, angle: -128, metacarpal: 46, phalanges: [30, 24] },
  { name: "Index finger", ordinal: "second", baseX: 184, baseY: 348, angle: -100, metacarpal: 62, phalanges: [40, 26, 20] },
  { name: "Middle finger", ordinal: "third", baseX: 202, baseY: 346, angle: -92, metacarpal: 64, phalanges: [44, 30, 20] },
  { name: "Ring finger", ordinal: "fourth", baseX: 220, baseY: 348, angle: -84, metacarpal: 60, phalanges: [40, 28, 20] },
  { name: "Little finger", ordinal: "fifth", baseX: 238, baseY: 354, angle: -74, metacarpal: 52, phalanges: [32, 20, 18] }
];

const PHALANX_NAMES = ["proximal phalanx", "middle phalanx", "distal phalanx"];

function buildHand() {
  const bones = CARPALS.map((carpal) => ({
    id: "carpal-" + carpal.id,
    name: carpal.name,
    system: "skeletal",
    d: carpal.d,
    label: boneCentre(carpal.d),
    text: carpal.text
  }));

  DIGITS.forEach((digit, index) => {
    const radians = (digit.angle * Math.PI) / 180;
    const dx = Math.cos(radians);
    const dy = Math.sin(radians);

    let x = digit.baseX;
    let y = digit.baseY;
    const widths = [7, 6, 5.5, 5];

    const segments = [{ name: digit.name + " metacarpal", length: digit.metacarpal, width: widths[0] }];

    digit.phalanges.forEach((length, i) => {
      // A thumb has no middle phalanx, so its second segment is the distal one.
      const phalanxName =
        digit.phalanges.length === 2 && i === 1 ? PHALANX_NAMES[2] : PHALANX_NAMES[i];
      segments.push({
        name: digit.name + " " + phalanxName,
        length,
        width: widths[i + 1] || 5
      });
    });

    segments.forEach((segment, i) => {
      const x2 = x + dx * segment.length;
      const y2 = y + dy * segment.length;

      bones.push({
        id: "hand-" + index + "-" + i,
        name: segment.name,
        system: "skeletal",
        d: capsule(x, y, x2, y2, segment.width),
        label: [(x + x2) / 2, (y + y2) / 2],
        text: describeHandBone(digit, i, segments.length)
      });

      // Leave a small joint space before the next bone begins.
      x = x2 + dx * 3;
      y = y2 + dy * 3;
    });
  });

  return bones;
}

function describeHandBone(digit, index, total) {
  if (index === 0) {
    return digit.name === "Thumb"
      ? "The thumb's metacarpal is short and set at an angle to the others. Its saddle joint with the trapezium is what lets the thumb swing across the palm to meet the fingers."
      : "The " + digit.ordinal + " metacarpal forms the body of the palm. Its head is the knuckle you see when you make a fist, and a fracture there is the classic boxer's fracture.";
  }
  if (index === total - 1) {
    return "The distal phalanx carries the nail bed and the fingertip pulp, which is among the most densely innervated tissue in the body.";
  }
  if (index === 1) {
    return "The proximal phalanx, the longest bone of the digit, hinging at the knuckle against the metacarpal head.";
  }
  return "The middle phalanx, present in every digit except the thumb — which is why the thumb has two phalanges where the fingers have three.";
}

// A rounded bone shaft drawn between two points.
function capsule(x1, y1, x2, y2, w) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const nx = Math.cos(angle + Math.PI / 2) * w;
  const ny = Math.sin(angle + Math.PI / 2) * w;
  const f = (n) => n.toFixed(1);
  return (
    "M" + f(x1 + nx) + " " + f(y1 + ny) +
    " L" + f(x2 + nx) + " " + f(y2 + ny) +
    " A" + f(w) + " " + f(w) + " 0 0 0 " + f(x2 - nx) + " " + f(y2 - ny) +
    " L" + f(x1 - nx) + " " + f(y1 - ny) +
    " A" + f(w) + " " + f(w) + " 0 0 0 " + f(x1 + nx) + " " + f(y1 + ny) + " Z"
  );
}

// Rough centre of a path, good enough to hang a leader line from.
function boneCentre(d) {
  const numbers = d.match(/-?\d+(\.\d+)?/g).map(Number);
  const xs = numbers.filter((_, i) => i % 2 === 0);
  const ys = numbers.filter((_, i) => i % 2 === 1);
  const mean = (list) => list.reduce((a, b) => a + b, 0) / list.length;
  return [mean(xs), mean(ys)];
}

export const DETAILS = [
  {
    id: "dentition",
    name: "Dentition",
    system: "skeletal",
    viewBox: "0 0 400 360",
    caption:
      "The adult mouth holds 32 permanent teeth in four quadrants of eight. Numbering follows the Universal system used in the United States, running from the upper right third molar round to the lower right third molar.",
    structures: buildDentition()
  },
  {
    id: "hand",
    name: "Hand & wrist",
    system: "skeletal",
    viewBox: "130 100 150 330",
    caption:
      "Twenty-seven bones in each hand — eight carpals in the wrist, five metacarpals in the palm, and fourteen phalanges. Roughly a quarter of the bones in the human body are in the hands.",
    structures: buildHand()
  }
];
