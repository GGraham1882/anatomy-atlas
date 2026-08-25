// Additional detail views. Same shape as everything in details.js: each region
// declares its own viewBox and a flat list of structures.

// ===========================================================================
// SKULL — lateral view, facing left
// ===========================================================================

// Drawn from the front rather than the side: an anterior skull is symmetric,
// so the paired bones can be authored once and mirrored, and the landmarks
// people actually recognise — orbits, nasal aperture, jaw — read clearly.
const SKULL = [
  {
    id: "frontal", name: "Frontal bone", latin: "Os frontale",
    d: "M200 44 C256 44 298 88 298 144 C298 162 296 176 292 188 L200 196 L108 188 C104 176 102 162 102 144 C102 88 144 44 200 44 Z",
    label: [200, 110],
    text: "The forehead, and the roof of both eye sockets. It begins life as two bones joined by a suture down the middle, which normally fuses before the age of two."
  },
  {
    id: "parietal", name: "Parietal bone", latin: "Os parietale", mirror: true,
    d: "M106 132 C97 142 93 158 95 174 C97 188 101 198 108 204 L122 198 C114 182 112 158 117 138 Z",
    label: [84, 168],
    text: "A paired bone forming most of the roof and sides of the cranial vault. Seen from the front only its outer edge shows; the two meet along the top of the head at the sagittal suture."
  },
  {
    id: "temporal", name: "Temporal bone", latin: "Os temporale", mirror: true,
    d: "M110 206 C100 214 96 232 99 250 C102 266 112 278 126 280 L138 256 C130 244 126 224 128 210 Z",
    label: [84, 250],
    text: "Houses the entire hearing and balance apparatus — the middle and inner ear sit inside it. Its mastoid process is the bump you can feel behind the ear."
  },
  {
    id: "orbit", name: "Orbit", latin: "Orbita", mirror: true,
    d: "M114 214 C114 196 130 184 152 184 C174 184 190 196 190 214 C190 232 174 244 152 244 C130 244 114 232 114 214 Z",
    label: [152, 214],
    text: "The eye socket — a cavity rather than a bone, built from seven bones meeting around it. It holds the eyeball in a cushion of fat, along with the muscles and nerves that move it."
  },
  {
    id: "nasal", name: "Nasal bone", latin: "Os nasale",
    d: "M188 198 L212 198 L215 240 L185 240 Z",
    label: [200, 220],
    text: "The paired bones forming the bridge of the nose. Everything below them is cartilage, which is why the nose is soft at the tip — and why these are the most commonly broken bones in the face."
  },
  {
    id: "nasal-aperture", name: "Nasal aperture", latin: "Apertura piriformis",
    d: "M200 244 C211 244 223 258 225 274 C227 291 214 300 200 300 C186 300 173 291 175 274 C177 258 189 244 200 244 Z",
    label: [200, 276],
    text: "The pear-shaped opening of the nasal cavity. In life it is largely filled by cartilage, which is why the skull's nose looks so much smaller than a living one."
  },
  {
    id: "vomer", name: "Vomer", latin: "Vomer",
    d: "M196 252 L204 252 L204 296 L196 296 Z",
    label: [200, 296],
    text: "A thin plough-shaped bone forming the lower part of the nasal septum. A deviated septum is usually a bend where this bone meets the cartilage in front of it."
  },
  {
    id: "zygomatic", name: "Zygomatic bone", latin: "Os zygomaticum", mirror: true,
    d: "M112 250 C130 244 152 246 164 256 C170 266 166 280 154 284 C134 290 116 286 108 276 C104 268 106 254 112 250 Z",
    label: [96, 282],
    text: "The cheekbone. It forms the outer rim of the eye socket and joins the temporal bone to complete the zygomatic arch, the bridge you can feel across your temple."
  },
  {
    id: "maxilla", name: "Maxilla", latin: "Maxilla",
    d: "M144 270 C168 260 232 260 256 270 C266 286 266 316 256 330 C230 342 170 342 144 330 C134 316 134 286 144 270 Z",
    label: [200, 324],
    text: "The upper jaw, formed from two fused bones. It carries the upper teeth, forms the floor of the eye sockets and most of the hard palate, and contains the largest sinuses in the face."
  },
  {
    id: "mandible-skull", name: "Mandible", latin: "Mandibula",
    d: "M136 338 C168 328 232 328 264 338 C272 354 268 380 252 390 C228 400 172 400 148 390 C132 380 128 354 136 338 Z",
    label: [200, 396],
    text: "The lower jaw — the only skull bone that moves, and the strongest bone in the face. It hinges at the temporomandibular joint just in front of the ear."
  },
  {
    id: "coronal-suture", name: "Coronal suture", latin: "Sutura coronalis",
    d: "M106 150 C140 120 180 108 200 108 C220 108 260 120 294 150", stroke: true,
    label: [200, 100],
    text: "The joint running across the top of the skull between the frontal and parietal bones. In an infant the soft spot at the front sits where this suture meets the sagittal suture."
  },
  {
    id: "frontonasal-suture", name: "Frontonasal suture", latin: "Sutura frontonasalis",
    d: "M186 198 L214 198", stroke: true,
    label: [232, 194],
    text: "The joint where the nasal bones meet the frontal bone, at the top of the bridge of the nose. Its midpoint is the landmark anatomists call the nasion."
  }
];

// ===========================================================================
// BRAIN — lateral view, facing left
// ===========================================================================

const BRAIN = [
  {
    id: "frontal-lobe", name: "Frontal lobe", latin: "Lobus frontalis",
    d: "M186 54 C142 52 100 74 78 108 C64 132 66 158 82 172 L134 174 L186 160 Z",
    label: [110, 106],
    text: "The largest lobe, running planning, judgement, personality, and voluntary movement. It is the last part of the brain to finish maturing, typically in the mid twenties."
  },
  {
    id: "parietal-lobe", name: "Parietal lobe", latin: "Lobus parietalis",
    d: "M186 54 C226 52 264 62 286 82 C298 94 300 114 294 130 L192 148 Z",
    label: [248, 88],
    text: "Processes touch, temperature, and pain, and builds the sense of where your body is in space. Damage here can make a person unable to recognise one whole side of the world."
  },
  {
    id: "occipital-lobe", name: "Occipital lobe", latin: "Lobus occipitalis",
    d: "M294 130 C316 132 336 146 340 164 C344 184 332 200 312 202 L288 176 Z",
    label: [344, 168],
    text: "Almost entirely dedicated to vision. Signals from the eyes travel all the way to the back of the head before they are interpreted, which is why a blow there can make you see flashes."
  },
  {
    id: "temporal-lobe", name: "Temporal lobe", latin: "Lobus temporalis",
    d: "M134 178 C120 184 114 200 122 212 C138 228 180 236 220 230 C258 224 282 210 286 192 L288 176 L190 164 Z",
    label: [186, 226],
    text: "Handles hearing, language comprehension, and the formation of new memories. The hippocampus sits inside it, which is why damage here can stop new memories forming at all."
  },
  {
    id: "cerebellum", name: "Cerebellum", latin: "Cerebellum",
    d: "M292 206 C318 204 342 218 344 236 C346 254 328 268 304 266 C282 264 268 250 270 234 C272 218 280 208 292 206 Z",
    label: [350, 244],
    text: "Holds over half the neurons in the brain inside a tenth of its volume. It coordinates timing and balance, which is why damage here makes movement clumsy rather than weak."
  },
  {
    id: "midbrain", name: "Midbrain", latin: "Mesencephalon",
    d: "M232 200 C246 198 258 203 260 212 C260 220 252 226 242 226 C232 226 226 218 227 210 C228 204 229 201 232 200 Z",
    label: [222, 206],
    text: "The top of the brainstem, relaying vision and hearing and controlling eye movement. It also contains the substantia nigra, the dopamine centre lost in Parkinson's disease."
  },
  {
    id: "pons", name: "Pons", latin: "Pons",
    d: "M230 228 C246 226 260 230 263 240 C265 252 258 262 246 262 L234 262 C224 258 222 236 230 228 Z",
    label: [218, 246],
    text: "A bulging bridge of fibres carrying signals between the cerebrum and cerebellum. It also holds the centres that set breathing rhythm and trigger REM sleep."
  },
  {
    id: "medulla", name: "Medulla oblongata", latin: "Medulla oblongata",
    d: "M234 264 L256 264 C256 278 254 290 250 300 L240 300 C236 290 234 276 234 264 Z",
    label: [224, 288],
    text: "Where the brainstem becomes the spinal cord. It runs heart rate, blood pressure, breathing, swallowing, and vomiting — functions you cannot survive losing."
  },
  {
    id: "central-sulcus", name: "Central sulcus", latin: "Sulcus centralis",
    d: "M196 56 C190 84 184 116 186 152", stroke: true,
    label: [196, 100],
    text: "The groove dividing the frontal lobe from the parietal. The strip of cortex just in front of it controls movement; the strip just behind it receives sensation."
  },
  {
    id: "lateral-sulcus", name: "Lateral sulcus", latin: "Sulcus lateralis",
    d: "M126 176 C168 168 232 166 288 176", stroke: true,
    label: [140, 164],
    text: "The deep fissure separating the temporal lobe from the frontal and parietal lobes above it. Also called the Sylvian fissure."
  }
];

// ===========================================================================
// HEART — anterior view. The patient's right side is on the viewer's left.
// ===========================================================================

const HEART = [
  {
    id: "right-atrium", name: "Right atrium", latin: "Atrium dextrum",
    d: "M186 158 C158 150 128 158 118 180 C108 204 116 232 138 244 L186 236 Z", blue: true,
    label: [110, 196],
    text: "Receives oxygen-poor blood returning from the whole body through the two venae cavae, then passes it into the right ventricle. It also holds the sinoatrial node, the heart's natural pacemaker."
  },
  {
    id: "right-ventricle", name: "Right ventricle", latin: "Ventriculus dexter",
    d: "M138 246 C132 280 142 316 166 336 C186 352 210 350 220 336 L212 250 L186 238 Z", blue: true,
    label: [140, 306],
    text: "Pumps blood the short distance to the lungs. Because that circuit is low-pressure, its wall is roughly a third the thickness of the left ventricle's."
  },
  {
    id: "left-atrium", name: "Left atrium", latin: "Atrium sinistrum",
    d: "M206 150 C232 142 262 150 272 170 C280 190 272 210 254 216 L212 212 Z",
    label: [286, 172],
    text: "Receives oxygen-rich blood from the four pulmonary veins. It sits mostly at the back of the heart, so only a sliver of it is visible from the front."
  },
  {
    id: "left-ventricle", name: "Left ventricle", latin: "Ventriculus sinister",
    d: "M216 218 C244 216 268 232 274 258 C280 292 264 328 236 344 C222 352 212 346 214 330 Z",
    label: [288, 288],
    text: "The engine of the circulation, driving blood to the entire body. Its wall is the thickest in the heart, and it forms the apex you feel beating against the chest wall."
  },
  {
    id: "septum", name: "Interventricular septum", latin: "Septum interventriculare",
    d: "M212 250 C210 282 216 316 226 340", stroke: true,
    label: [232, 300],
    text: "The muscular wall dividing the two ventricles. A hole in it is the most common congenital heart defect, and it carries the electrical bundle that triggers both ventricles to contract together."
  },
  {
    id: "aorta", name: "Aorta", latin: "Aorta",
    d: "M214 172 C214 130 202 106 182 100 C160 94 144 108 144 130 L144 152", stroke: true, wide: true,
    label: [176, 88],
    text: "The body's largest artery, arching off the left ventricle. Every artery in the body ultimately branches from it, and blood leaves it at around 1.3 metres per second."
  },
  {
    id: "pulmonary-trunk", name: "Pulmonary trunk", latin: "Truncus pulmonalis",
    d: "M190 240 C186 200 192 168 208 150 C222 134 244 134 254 148", stroke: true, wide: true, blue: true,
    label: [216, 128],
    text: "Carries oxygen-poor blood from the right ventricle to the lungs. It is the only artery in the body that carries deoxygenated blood."
  },
  {
    id: "svc", name: "Superior vena cava", latin: "Vena cava superior",
    d: "M150 160 L148 118 C148 100 152 88 158 82", stroke: true, wide: true, blue: true,
    label: [128, 100],
    text: "Returns blood from the head, neck, and arms into the right atrium. It is the vein a central line is usually threaded into."
  },
  {
    id: "ivc", name: "Inferior vena cava", latin: "Vena cava inferior",
    d: "M142 242 L140 290 C140 312 144 330 150 344", stroke: true, wide: true, blue: true,
    label: [118, 312],
    text: "The largest vein in the body, returning blood from everything below the diaphragm. It passes through a dedicated opening in the diaphragm to reach the heart."
  },
  {
    id: "pulmonary-veins", name: "Pulmonary veins", latin: "Venae pulmonales",
    d: "M266 166 L296 152 M268 186 L300 182", stroke: true,
    label: [312, 160],
    text: "Four veins returning oxygen-rich blood from the lungs to the left atrium. They are the only veins in the body carrying oxygenated blood."
  },
  {
    id: "tricuspid", name: "Tricuspid valve", latin: "Valva tricuspidalis",
    d: "M150 240 L196 236", stroke: true, valve: true,
    label: [150, 232],
    text: "The three-flapped valve between the right atrium and right ventricle. It snaps shut as the ventricle contracts, producing part of the first heart sound."
  },
  {
    id: "mitral", name: "Mitral valve", latin: "Valva mitralis",
    d: "M218 216 L256 214", stroke: true, valve: true,
    label: [262, 208],
    text: "The two-flapped valve between the left atrium and left ventricle, named for its resemblance to a bishop's mitre. It is the valve most often needing repair or replacement."
  },
  {
    id: "aortic-valve", name: "Aortic valve", latin: "Valva aortae",
    d: "M200 186 L222 178", stroke: true, valve: true,
    label: [206, 172],
    text: "Three cup-shaped cusps guarding the exit from the left ventricle. Their closure produces part of the second heart sound, and narrowing of this valve is the commonest valve disease of older age."
  },
  {
    id: "pulmonary-valve", name: "Pulmonary valve", latin: "Valva trunci pulmonalis",
    d: "M182 200 L202 194", stroke: true, valve: true,
    label: [166, 190],
    text: "Guards the exit from the right ventricle into the pulmonary trunk, stopping blood falling back into the heart between beats."
  },
  {
    id: "apex", name: "Apex", latin: "Apex cordis",
    d: "M216 330 C226 330 234 338 232 346 C228 354 216 354 212 346 C210 338 212 331 216 330 Z",
    label: [244, 348],
    text: "The blunt point of the left ventricle, aimed down and to the left. It taps against the chest wall at roughly the fifth rib — the beat you can feel with a hand."
  }
];

// ===========================================================================
// SPINE — lateral view, facing left. Generated along the natural curves.
// ===========================================================================

// Cervical and lumbar curve forward, thoracic and sacral curve back. Offsets
// are in view units from a straight vertical reference at x = 118.
const SPINE_PLAN = [
  { region: "Cervical", prefix: "C", count: 7, top: 40, height: 112, width: 26, lean: -16 },
  { region: "Thoracic", prefix: "T", count: 12, top: 156, height: 216, width: 34, lean: 14 },
  { region: "Lumbar", prefix: "L", count: 5, top: 376, height: 120, width: 44, lean: -12 }
];

const REGION_TEXT = {
  Cervical: "The seven neck vertebrae, the smallest and most mobile in the spine. C1 and C2 are shaped unlike any others: C1 carries the skull, and C2 provides the peg it rotates around when you shake your head.",
  Thoracic: "The twelve vertebrae of the upper back, each carrying a pair of ribs. Their rib attachments make this the least mobile region of the spine.",
  Lumbar: "The five vertebrae of the lower back, and the largest in the spine because they carry the most weight. This is where most disc herniations happen."
};

function buildSpine() {
  const vertebrae = [];

  SPINE_PLAN.forEach(({ region, prefix, count, top, height, width, lean }) => {
    const gap = height / count;

    for (let i = 0; i < count; i++) {
      // A sine bow across the region produces the natural curve.
      const t = (i + 0.5) / count;
      const x = 118 + lean * Math.sin(Math.PI * t);
      const y = top + gap * (i + 0.5);
      const h = gap * 0.62;
      const w = width;

      const body =
        "M" + (x - w / 2).toFixed(1) + " " + (y - h / 2).toFixed(1) +
        " h" + w.toFixed(1) + " a4 4 0 0 1 4 4" +
        " v" + (h - 8).toFixed(1) + " a4 4 0 0 1 -4 4" +
        " h-" + w.toFixed(1) + " a4 4 0 0 1 -4 -4" +
        " v-" + (h - 8).toFixed(1) + " a4 4 0 0 1 4 -4 Z";

      // Spinous process, pointing backwards to the right.
      const spineLen = region === "Thoracic" ? 30 : 22;
      const tipY = region === "Thoracic" ? y + h * 0.55 : y + 2;
      const process =
        "M" + (x + w / 2).toFixed(1) + " " + (y - 3).toFixed(1) +
        " L" + (x + w / 2 + spineLen).toFixed(1) + " " + tipY.toFixed(1) +
        " L" + (x + w / 2).toFixed(1) + " " + (y + 5).toFixed(1) + " Z";

      vertebrae.push({
        id: prefix + (i + 1),
        name: prefix + (i + 1),
        latin: region + " vertebra " + (i + 1),
        d: body + " " + process,
        label: [x - w / 2, y],
        text: REGION_TEXT[region]
      });
    }
  });

  vertebrae.push({
    id: "sacrum", name: "Sacrum", latin: "Os sacrum",
    d: "M96 500 L146 500 C150 520 148 546 140 566 C132 582 116 586 108 578 C98 560 94 528 96 500 Z",
    label: [88, 536],
    text: "Five vertebrae fused into a single wedge that locks the spine into the pelvis. Fusion completes in the mid twenties; before then they are separate bones."
  });

  vertebrae.push({
    id: "coccyx", name: "Coccyx", latin: "Os coccygis",
    d: "M112 580 C122 578 130 586 128 598 C126 610 118 616 110 612 C104 606 104 586 112 580 Z",
    label: [98, 602],
    text: "The tailbone, three to five small fused vertebrae. It is vestigial as a tail but still anchors the pelvic floor muscles, which is why fracturing it is so uncomfortable."
  });

  return vertebrae;
}

// ===========================================================================
// FOOT — dorsal view, right foot, toes upward
// ===========================================================================

const TARSALS = [
  {
    id: "calcaneus", name: "Calcaneus", latin: "Calcaneus",
    d: "M176 372 C158 370 146 384 146 404 C146 426 158 442 178 444 C198 446 212 434 212 412 C212 390 198 374 176 372 Z",
    text: "The heel bone, and the largest bone in the foot. It takes the first impact of every step and anchors the Achilles tendon, and it is usually broken by falling from a height."
  },
  {
    id: "talus", name: "Talus", latin: "Talus",
    d: "M178 336 C162 336 152 348 153 364 C155 378 168 386 184 384 C199 382 208 370 206 356 C204 344 192 336 178 336 Z",
    text: "The bone that carries the entire weight of the body into the foot, forming the ankle joint with the tibia and fibula. No muscle attaches to it at all."
  },
  {
    id: "navicular", name: "Navicular", latin: "Os naviculare",
    d: "M166 312 C154 312 147 320 148 332 C150 342 160 348 172 346 C183 344 189 334 187 324 C185 316 176 312 166 312 Z",
    text: "A boat-shaped bone on the inner side of the midfoot, forming the keystone of the medial arch."
  },
  {
    id: "cuboid", name: "Cuboid", latin: "Os cuboideum",
    d: "M206 320 C196 320 190 328 191 340 C193 350 202 356 212 354 C222 352 227 342 225 332 C223 324 215 320 206 320 Z",
    text: "A cube-shaped bone on the outer side of the midfoot, carrying the tendon of the peroneus longus in a groove on its underside."
  },
  {
    id: "cuneiform-medial", name: "Medial cuneiform", latin: "Os cuneiforme mediale",
    d: "M160 286 C150 286 144 294 145 304 C147 313 156 318 165 316 C175 314 180 305 178 296 C176 289 168 286 160 286 Z",
    text: "The largest of the three wedge-shaped bones, sitting behind the big toe's metatarsal."
  },
  {
    id: "cuneiform-intermediate", name: "Intermediate cuneiform", latin: "Os cuneiforme intermedium",
    d: "M182 288 C173 288 168 295 169 304 C171 312 179 316 187 314 C195 312 199 304 197 297 C195 291 189 288 182 288 Z",
    text: "The smallest cuneiform, wedged between the other two. Its shape helps lock the midfoot into a rigid arch when you push off."
  },
  {
    id: "cuneiform-lateral", name: "Lateral cuneiform", latin: "Os cuneiforme laterale",
    d: "M202 292 C193 292 188 299 189 308 C191 316 199 320 207 318 C215 316 219 308 217 301 C215 295 209 292 202 292 Z",
    text: "The outermost wedge bone, sitting between the intermediate cuneiform and the cuboid."
  }
];

const TOES = [
  { name: "Great toe", ordinal: "first", baseX: 160, baseY: 280, angle: -96, metatarsal: 62, phalanges: [28, 22] },
  { name: "Second toe", ordinal: "second", baseX: 182, baseY: 282, angle: -92, metatarsal: 70, phalanges: [22, 14, 12] },
  { name: "Third toe", ordinal: "third", baseX: 202, baseY: 286, angle: -88, metatarsal: 68, phalanges: [20, 13, 11] },
  { name: "Fourth toe", ordinal: "fourth", baseX: 220, baseY: 292, angle: -84, metatarsal: 64, phalanges: [18, 12, 10] },
  { name: "Fifth toe", ordinal: "fifth", baseX: 236, baseY: 300, angle: -80, metatarsal: 58, phalanges: [15, 10, 9] }
];

function buildFoot(capsule) {
  const bones = TARSALS.map((tarsal) => ({
    id: "tarsal-" + tarsal.id,
    name: tarsal.name,
    latin: tarsal.latin,
    d: tarsal.d,
    label: pathCentre(tarsal.d),
    text: tarsal.text
  }));

  TOES.forEach((toe, index) => {
    const radians = (toe.angle * Math.PI) / 180;
    const dx = Math.cos(radians);
    const dy = Math.sin(radians);

    let x = toe.baseX;
    let y = toe.baseY;

    const segments = [{ name: toe.name + " metatarsal", length: toe.metatarsal, width: 6 }];
    const names = ["proximal phalanx", "middle phalanx", "distal phalanx"];

    toe.phalanges.forEach((length, i) => {
      // The great toe has no middle phalanx, like the thumb.
      const label = toe.phalanges.length === 2 && i === 1 ? names[2] : names[i];
      segments.push({ name: toe.name + " " + label, length, width: 5 - i * 0.5 });
    });

    segments.forEach((segment, i) => {
      const x2 = x + dx * segment.length;
      const y2 = y + dy * segment.length;

      bones.push({
        id: "foot-" + index + "-" + i,
        name: segment.name,
        d: capsule(x, y, x2, y2, segment.width),
        label: [(x + x2) / 2, (y + y2) / 2],
        text: describeFootBone(toe, i, segments.length)
      });

      x = x2 + dx * 2.5;
      y = y2 + dy * 2.5;
    });
  });

  return bones;
}

function describeFootBone(toe, index, total) {
  if (index === 0) {
    return toe.name === "Great toe"
      ? "The first metatarsal is the shortest and by far the thickest, because the big toe carries most of the load when you push off."
      : "The " + toe.ordinal + " metatarsal. These are the long bones of the midfoot, and repeated running loads them enough to cause the classic march fracture.";
  }
  if (index === total - 1) return "The distal phalanx, carrying the toenail.";
  if (index === 1) return "The proximal phalanx, the longest bone of the toe.";
  return "The middle phalanx, present in every toe except the great toe.";
}

function pathCentre(d) {
  const numbers = d.match(/-?\d+(\.\d+)?/g).map(Number);
  const xs = numbers.filter((_, i) => i % 2 === 0);
  const ys = numbers.filter((_, i) => i % 2 === 1);
  const mean = (list) => list.reduce((a, b) => a + b, 0) / list.length;
  return [mean(xs), mean(ys)];
}

// ---------------------------------------------------------------------------

export function buildRegions(capsule) {
  const tag = (list, system) => list.map((s) => ({ ...s, system }));

  return [
    {
      id: "skull",
      name: "Skull",
      system: "skeletal",
      viewBox: "60 20 280 400",
      caption:
        "Twenty-two bones, of which only the mandible moves. Shown from the front, so the paired bones — orbits, cheekbones, temporals — are mirrored across the midline.",
      structures: tag(SKULL, "skeletal")
    },
    {
      id: "spine",
      name: "Spine",
      system: "skeletal",
      viewBox: "50 20 160 620",
      caption:
        "Twenty-four moving vertebrae plus the fused sacrum and coccyx, shown from the side. The four alternating curves act as a spring, which is why a spine absorbs load far better than a straight column would.",
      structures: tag(buildSpine(), "skeletal")
    },
    {
      id: "foot",
      name: "Foot & ankle",
      system: "skeletal",
      viewBox: "120 130 160 340",
      caption:
        "Twenty-six bones — seven tarsals, five metatarsals, and fourteen phalanges — arranged into two arches that carry and then release the body's weight with every step.",
      structures: tag(buildFoot(capsule), "skeletal")
    },
    {
      id: "brain",
      name: "Brain",
      system: "nervous",
      viewBox: "50 30 320 280",
      caption:
        "The brain from the side, facing left. Four lobes of cerebral cortex, the cerebellum beneath, and the three-part brainstem carrying everything down to the spinal cord.",
      structures: tag(BRAIN, "nervous")
    },
    {
      id: "heart",
      name: "Heart",
      system: "circulatory",
      viewBox: "90 60 240 320",
      caption:
        "The heart from the front, so the patient's right side appears on your left. Four chambers, four valves, and the great vessels — blood moves right atrium, right ventricle, lungs, left atrium, left ventricle, body.",
      structures: tag(HEART, "circulatory")
    }
  ];
}
