// Anatomical structures, grouped by system.
//
// Coordinates are drawn against a 400 x 900 viewBox showing a figure in
// standard anatomical position, facing the viewer. Structures marked
// `mirror: true` are bilateral: they are authored once on one side and
// reflected across the midline at x = 200.

export const SYSTEMS = [
  { id: "skeletal", name: "Skeletal", blurb: "206 bones giving the body its frame, protecting organs, and anchoring every muscle." },
  { id: "muscular", name: "Muscular", blurb: "Over 600 skeletal muscles that move the body, hold it upright, and generate heat." },
  { id: "circulatory", name: "Circulatory", blurb: "A closed loop that moves blood, oxygen, and nutrients through roughly 60,000 miles of vessels." },
  { id: "respiratory", name: "Respiratory", blurb: "The airway and lungs, exchanging oxygen for carbon dioxide about 20,000 times a day." },
  { id: "digestive", name: "Digestive & urinary", blurb: "A nine-metre tract that breaks food into molecules the body can absorb, alongside the kidneys that filter the blood." },
  { id: "nervous", name: "Nervous", blurb: "The brain, spinal cord, and nerves — the body's signalling network." }
];

export const STRUCTURES = [
  // ---------- SKELETAL ----------
  {
    id: "cranium", name: "Cranium", latin: "Cranium", system: "skeletal",
    // Orbits and the nasal aperture are drawn as reversed subpaths so the
    // even-odd fill rule punches them out as holes.
    type: "path", d: "M200 32 C222 32 236 52 236 80 C236 96 231 110 224 119 L176 119 C169 110 164 96 164 80 C164 52 178 32 200 32 Z " +
      "M181 92 a8 6.5 0 1 0 16 0 a8 6.5 0 1 0 -16 0 Z " +
      "M203 92 a8 6.5 0 1 0 16 0 a8 6.5 0 1 0 -16 0 Z " +
      "M200 100 L194 114 L206 114 Z",
    label: [200, 72],
    text: "Eight fused bones forming a rigid vault around the brain. The joints between them, called sutures, are fixed in adults but flexible at birth so the skull can pass through the birth canal."
  },
  {
    id: "mandible", name: "Mandible", latin: "Mandibula", system: "skeletal",
    type: "path", d: "M177 120 L223 120 L225 131 C225 143 214 150 200 150 C186 150 175 143 175 131 Z",
    label: [200, 138],
    text: "The jawbone — the largest and strongest bone of the face, and the only skull bone that moves. It carries the lower teeth and hinges at the temporomandibular joint."
  },
  {
    id: "clavicle", name: "Clavicle", latin: "Clavicula", system: "skeletal", mirror: true,
    type: "path", d: "M196 186 C176 180 152 182 136 190 C133 192 134 198 138 198 C154 192 176 191 196 195 Z",
    label: [162, 188],
    text: "The collarbone. It struts the shoulder away from the ribcage, and because it transmits force from arm to trunk it is one of the most frequently broken bones in the body."
  },
  {
    id: "scapula", name: "Scapula", latin: "Scapula", system: "skeletal", mirror: true,
    type: "path", d: "M132 196 C118 200 112 216 116 236 C119 252 130 262 142 258 C150 254 152 236 148 218 C145 204 140 196 132 196 Z",
    label: [130, 228],
    text: "The shoulder blade. It floats on the back of the ribcage held almost entirely by muscle, which is what gives the shoulder its enormous range of motion."
  },
  {
    id: "sternum", name: "Sternum", latin: "Sternum", system: "skeletal",
    type: "path", d: "M192 196 L208 196 L206 258 C206 268 194 268 194 258 Z",
    label: [200, 228],
    text: "The breastbone. Ribs attach to it through costal cartilage, completing the protective cage around the heart and lungs. It is the landmark used for chest compressions in CPR."
  },
  {
    id: "ribs", name: "Ribcage", latin: "Costae", system: "skeletal", mirror: true,
    type: "path", d: "M188 204 C166 202 146 212 140 228 C134 246 136 274 146 292 C152 304 168 312 186 310 L186 302 C172 303 158 297 153 288 C145 272 143 248 148 233 C153 220 168 212 188 213 Z M186 226 C170 226 158 234 155 246 M186 250 C170 250 158 258 156 268 M186 274 C172 274 160 280 158 288",
    label: [156, 258],
    text: "Twelve pairs of ribs. The upper seven attach directly to the sternum, three attach indirectly through cartilage, and the lowest two float free — protecting the kidneys rather than the lungs."
  },
  {
    id: "vertebral-column", name: "Vertebral column", latin: "Columna vertebralis", system: "skeletal",
    type: "path", d: "M194 166 L206 166 L205 200 L204 240 L203 290 L202 340 L206 390 L194 390 L198 340 L197 290 L196 240 L195 200 Z",
    label: [200, 350],
    text: "Thirty-three vertebrae stacked into a shock-absorbing column with four curves. It carries the body's weight while shielding the spinal cord running through its centre."
  },
  {
    id: "humerus", name: "Humerus", latin: "Humerus", system: "skeletal", mirror: true,
    type: "path", d: "M128 202 C118 204 112 214 113 228 L104 302 C103 314 106 324 112 326 C120 328 126 320 127 308 L134 234 C136 216 136 204 128 202 Z",
    label: [118, 270],
    text: "The upper arm bone, running from shoulder to elbow. The radial nerve spirals around its shaft, which is why a mid-shaft fracture can leave the hand unable to extend."
  },
  {
    id: "radius-ulna", name: "Radius & ulna", latin: "Radius et ulna", system: "skeletal", mirror: true,
    type: "path", d: "M108 330 C102 332 99 342 98 354 L92 426 C91 438 94 446 100 447 C106 448 110 440 111 428 L117 356 C118 342 114 330 108 330 Z " +
      "M120 332 C126 334 128 344 127 356 L122 426 C121 436 118 442 113 442 L116 358 C117 344 116 334 120 332 Z",
    label: [102, 390],
    text: "The two forearm bones. The radius rotates around the fixed ulna, which is what lets you turn your palm up and down without moving your elbow."
  },
  {
    id: "pelvis", name: "Pelvis", latin: "Pelvis", system: "skeletal",
    type: "path", d: "M158 386 C146 392 142 412 148 430 C154 446 168 456 180 452 L186 434 C176 432 168 424 166 414 L234 414 C232 424 224 432 214 434 L220 452 C232 456 246 446 252 430 C258 412 254 392 242 386 C228 396 172 396 158 386 Z",
    label: [200, 424],
    text: "A basin of fused bone transferring the weight of the upper body into the legs. Its shape differs measurably between sexes — the female pelvis is broader to accommodate childbirth."
  },
  {
    id: "femur", name: "Femur", latin: "Femur", system: "skeletal", mirror: true,
    type: "path", d: "M176 448 C168 452 165 466 167 482 L172 596 C173 610 178 618 185 617 C192 616 195 608 194 594 L189 484 C188 464 184 448 176 448 Z",
    label: [180, 534],
    text: "The thigh bone — the longest, heaviest, and strongest bone in the body. It can carry roughly 30 times a person's body weight in compression."
  },
  {
    id: "patella", name: "Patella", latin: "Patella", system: "skeletal", mirror: true,
    type: "path", d: "M186 624 C176 624 170 632 171 642 C172 652 179 658 187 657 C194 656 198 648 197 638 C196 630 192 624 186 624 Z",
    label: [184, 641],
    text: "The kneecap, the largest sesamoid bone — one that forms inside a tendon. It acts as a pulley, increasing the leverage the quadriceps have on the lower leg."
  },
  {
    id: "tibia-fibula", name: "Tibia & fibula", latin: "Tibia et fibula", system: "skeletal", mirror: true,
    type: "path", d: "M184 662 C176 664 173 676 174 690 L178 806 C179 818 183 824 189 823 C195 822 197 814 196 802 L192 690 C191 674 190 662 184 662 Z M170 668 C165 670 163 680 164 692 L167 798 C168 808 171 812 175 811 L171 692 C170 680 173 670 170 668 Z",
    label: [180, 742],
    text: "The tibia, or shinbone, carries nearly all the weight of the lower leg. The slender fibula alongside it bears almost none — it exists mainly as an anchor for muscle and to stabilise the ankle."
  },

  // ---------- MUSCULAR ----------
  {
    id: "trapezius", name: "Trapezius", system: "muscular", mirror: true,
    type: "path", d: "M198 168 C176 172 152 182 138 194 C134 198 136 206 142 206 C158 196 178 190 198 188 Z",
    label: [166, 186],
    text: "A broad diamond across the upper back and neck. It shrugs and rotates the shoulder blade, and it is the muscle that tightens first when you are stressed at a desk."
  },
  {
    id: "deltoid", name: "Deltoid", system: "muscular", mirror: true,
    type: "path", d: "M140 192 C124 196 114 212 114 232 C114 250 122 260 134 258 C144 256 150 242 150 224 C150 206 148 194 140 192 Z",
    label: [126, 226],
    text: "The rounded cap of the shoulder, named for the Greek letter delta. Its three heads lift the arm forward, out to the side, and backward."
  },
  {
    id: "pectoralis", name: "Pectoralis major", system: "muscular", mirror: true,
    type: "path", d: "M196 198 C176 196 156 202 148 214 C142 226 146 244 156 252 C168 260 186 258 196 250 Z",
    label: [170, 228],
    text: "The large fan of the chest. It pulls the arm across the body — the motion in a bench press, a push-up, or a swimming stroke."
  },
  {
    id: "biceps", name: "Biceps brachii", system: "muscular", mirror: true,
    type: "path", d: "M120 256 C112 258 108 274 110 292 C112 308 118 318 126 316 C133 314 135 300 133 284 C131 268 127 256 120 256 Z",
    label: [118, 288],
    text: "Two heads crossing both shoulder and elbow. It bends the elbow, but its more powerful job is supination — twisting the forearm, which is why it works hardest turning a screwdriver."
  },
  {
    id: "triceps", name: "Triceps brachii", system: "muscular", mirror: true,
    type: "path", d: "M136 258 C142 262 144 278 142 294 C140 308 135 316 130 314 L133 286 C135 270 132 260 136 258 Z",
    label: [141, 290],
    text: "The three-headed muscle on the back of the arm. It straightens the elbow and makes up roughly two-thirds of upper arm mass — more than the biceps."
  },
  {
    id: "rectus-abdominis", name: "Rectus abdominis", system: "muscular",
    type: "path", d: "M180 262 L220 262 C224 262 226 266 226 272 L224 350 C224 358 220 362 214 362 L186 362 C180 362 176 358 176 350 L174 272 C174 266 176 262 180 262 Z M176 288 L224 288 M176 312 L224 312 M176 336 L224 336 M200 262 L200 362",
    label: [200, 312],
    text: "The abdominal wall's front sheet. The visible six-pack comes from fibrous bands crossing it, not from separate muscles — and the number of bands is inherited, not trained."
  },
  {
    id: "obliques", name: "External obliques", system: "muscular", mirror: true,
    type: "path", d: "M172 268 C162 272 156 288 156 308 C156 330 162 348 172 356 L176 348 C168 340 164 326 164 308 C164 292 168 278 176 274 Z",
    label: [162, 312],
    text: "Wrapping the waist diagonally, like hands in pockets. They twist the trunk and bend it sideways, and they are the muscles that fire hardest in a golf or baseball swing."
  },
  {
    id: "quadriceps", name: "Quadriceps femoris", system: "muscular", mirror: true,
    type: "path", d: "M178 452 C166 458 161 480 164 508 L170 590 C172 606 178 614 186 613 C194 612 197 602 196 588 L192 500 C190 470 187 452 178 452 Z",
    label: [180, 528],
    text: "Four muscles on the front of the thigh converging into one tendon over the kneecap. As a group they are the body's most powerful extensor — they straighten the knee for every step, jump, and stair."
  },
  {
    id: "hamstrings", name: "Hamstrings", system: "muscular", mirror: true,
    type: "path", d: "M164 460 C156 468 154 488 157 512 L163 588 C165 602 170 610 176 608 L170 512 C167 486 168 468 172 460 Z",
    label: [162, 530],
    text: "Three muscles running down the back of the thigh, crossing both hip and knee. Because they work across two joints under high speed, they are the most commonly torn muscle group in sprinting sports."
  },
  {
    id: "gastrocnemius", name: "Gastrocnemius", system: "muscular", mirror: true,
    type: "path", d: "M176 668 C166 674 162 694 165 716 C168 736 176 748 185 746 C193 744 196 730 194 712 C191 690 185 668 176 668 Z",
    label: [178, 708],
    text: "The calf's two visible heads. With the soleus beneath it, it drives the ankle down through the Achilles tendon — the thickest and strongest tendon in the body."
  },

  // ---------- CIRCULATORY ----------
  {
    id: "heart", name: "Heart", latin: "Cor", system: "circulatory",
    type: "path", d: "M200 238 C194 226 178 224 172 234 C166 244 170 258 180 270 C188 280 196 288 200 292 C204 288 214 278 221 268 C230 256 233 242 227 233 C221 224 206 226 200 238 Z",
    label: [200, 258],
    text: "A four-chambered pump beating around 100,000 times a day. The right side sends blood to the lungs, the left side sends it to the rest of the body — which is why the left ventricle's wall is roughly three times thicker."
  },
  {
    id: "aorta", name: "Aorta", latin: "Aorta", system: "circulatory",
    type: "path", d: "M200 236 C200 218 194 208 186 206 C178 204 172 210 172 220 L172 232 M200 236 C200 250 202 262 204 280 L206 340 L206 400",
    label: [190, 214], stroke: true,
    text: "The body's largest artery, arching off the top of the heart. Blood leaves it at around 1.3 metres per second, and every artery in the body ultimately branches from it."
  },
  {
    id: "carotid", name: "Carotid arteries", latin: "Arteriae carotides", system: "circulatory", mirror: true,
    type: "path", d: "M190 206 L188 176 C187 160 186 146 186 136",
    label: [180, 168], stroke: true,
    text: "The main arteries of the neck, delivering blood to the brain. Their walls contain baroreceptors that sense blood pressure and signal the brain to adjust heart rate."
  },
  {
    id: "subclavian", name: "Subclavian artery", system: "circulatory", mirror: true,
    type: "path", d: "M186 208 C172 208 156 214 144 224 L130 248 L124 300 L118 380 L112 430",
    label: [136, 300], stroke: true,
    text: "The artery passing beneath the collarbone to supply the arm, where it becomes the brachial artery — the vessel a blood pressure cuff compresses."
  },
  {
    id: "femoral", name: "Femoral artery", system: "circulatory", mirror: true,
    type: "path", d: "M188 408 L182 460 L178 540 L176 620 L178 700 L180 790",
    label: [178, 560], stroke: true,
    text: "The major artery of the leg, running from the groin to behind the knee. Its size and shallow position at the groin make it the standard access point for cardiac catheterisation."
  },
  {
    id: "jugular", name: "Jugular veins", latin: "Venae jugulares", system: "circulatory", mirror: true,
    type: "path", d: "M196 208 L194 178 C193 162 192 148 192 138",
    label: [206, 168], stroke: true, vein: true,
    text: "The veins draining blood from the head and neck back to the heart. Their visible pulsation in the neck is used clinically to estimate pressure in the right side of the heart."
  },

  // ---------- RESPIRATORY ----------
  {
    id: "trachea", name: "Trachea", latin: "Trachea", system: "respiratory",
    type: "path", d: "M194 140 L206 140 L206 208 L194 208 Z M194 152 L206 152 M194 164 L206 164 M194 176 L206 176 M194 188 L206 188",
    label: [200, 176],
    text: "The windpipe, held open by around 20 C-shaped rings of cartilage. The gap in each C faces the oesophagus behind it, so swallowed food can bulge forward without being blocked."
  },
  {
    id: "bronchi", name: "Bronchi", latin: "Bronchi", system: "respiratory", mirror: true,
    type: "path", d: "M197 206 C188 212 178 222 172 234 M180 222 C174 226 170 232 168 240",
    label: [180, 224], stroke: true,
    text: "The two branches carrying air into each lung, dividing again some 23 times down to the alveoli. The right bronchus is wider and steeper, so inhaled objects usually land in the right lung."
  },
  {
    id: "lungs", name: "Lungs", latin: "Pulmones", system: "respiratory", mirror: true,
    type: "path", d: "M186 214 C168 212 152 224 146 242 C140 262 142 292 152 308 C158 318 172 322 186 318 Z",
    label: [164, 266],
    text: "Spongy organs holding roughly 300 million alveoli — a gas-exchange surface of about 70 square metres, close to the area of a tennis court, folded into the chest."
  },
  {
    id: "diaphragm", name: "Diaphragm", latin: "Diaphragma", system: "respiratory",
    type: "path", d: "M148 316 C168 336 232 336 252 316 C246 330 232 340 200 340 C168 340 154 330 148 316 Z",
    label: [200, 330],
    text: "The dome of muscle beneath the lungs and the primary muscle of breathing. When it contracts and flattens, it lowers pressure in the chest and air is pulled in — you do not push air into your lungs, you make room for it."
  },

  // ---------- DIGESTIVE ----------
  {
    id: "esophagus", name: "Oesophagus", latin: "Oesophagus", system: "digestive",
    type: "path", d: "M195 152 L205 152 L207 300 L193 300 Z",
    label: [200, 230],
    text: "A muscular tube moving food from throat to stomach by peristalsis — rhythmic waves of contraction. Because it does not rely on gravity, swallowing works upside down."
  },
  {
    // The stomach sits on the body's left, which is the viewer's right.
    id: "stomach", name: "Stomach", latin: "Gaster", system: "digestive",
    type: "path", d: "M206 302 C220 298 236 308 240 324 C244 340 237 356 224 360 C210 364 199 355 200 343 C201 331 209 325 215 321 C219 317 214 307 205 303 Z",
    label: [228, 336],
    text: "A muscular bag holding around 1.5 litres. Its lining secretes hydrochloric acid at roughly pH 2 — strong enough to dissolve metal — and replaces itself every few days to avoid digesting itself."
  },
  {
    // The liver occupies the body's right side — the viewer's left.
    id: "liver", name: "Liver", latin: "Hepar", system: "digestive",
    type: "path", d: "M150 300 C170 295 191 300 199 311 C204 320 201 334 192 341 C179 350 159 349 151 341 C143 333 143 310 150 300 Z",
    label: [162, 320],
    text: "The largest internal organ, running over 500 known functions — filtering toxins, storing glycogen, producing bile and clotting factors. It is also the only human organ that can regenerate substantial lost mass."
  },
  {
    id: "pancreas", name: "Pancreas", latin: "Pancreas", system: "digestive",
    type: "path", d: "M176 354 C194 348 218 350 233 357 C237 359 236 366 231 365 C215 359 194 357 178 361 C172 362 171 355 176 354 Z",
    label: [200, 360],
    text: "Both a digestive and a hormonal organ. It releases enzymes into the small intestine, and insulin and glucagon into the blood — the pair that hold blood sugar in balance."
  },
  {
    id: "small-intestine", name: "Small intestine", latin: "Intestinum tenue", system: "digestive",
    type: "path", d: "M178 392 C202 384 224 392 221 403 C218 414 190 411 180 405 " +
      "M180 416 C204 409 226 416 223 427 C220 438 192 435 182 428 " +
      "M182 440 C206 433 226 440 223 449",
    label: [200, 420], stroke: true,
    text: "Around seven metres of coiled tube where most absorption happens. Its lining is folded into villi and microvilli, multiplying its surface area roughly a hundredfold."
  },
  {
    id: "large-intestine", name: "Large intestine", latin: "Intestinum crassum", system: "digestive",
    type: "path", d: "M158 452 L158 382 C158 372 165 366 175 366 L225 366 C235 366 242 372 242 382 L242 452",
    label: [154, 396], stroke: true,
    text: "The final 1.5 metres, reclaiming water and salts from what the small intestine leaves. It also houses most of the gut microbiome — trillions of bacteria that synthesise vitamin K and several B vitamins."
  },
  {
    id: "kidneys", name: "Kidneys", latin: "Renes", system: "digestive", mirror: true,
    type: "path", d: "M156 358 C148 358 143 367 143 381 C143 395 148 404 156 404 C163 404 166 395 166 381 C166 367 163 358 156 358 Z",
    label: [138, 382],
    text: "Strictly urinary rather than digestive, but they sit among these organs. A pair of filters processing about 180 litres of blood a day to produce roughly 1.5 litres of urine. They also regulate blood pressure and signal the marrow to make red blood cells."
  },

  // ---------- NERVOUS ----------
  {
    id: "cerebrum", name: "Cerebrum", latin: "Cerebrum", system: "nervous",
    type: "path", d: "M200 38 C221 38 233 55 233 76 C233 88 229 98 222 104 L178 104 C171 98 167 88 167 76 C167 55 179 38 200 38 Z",
    label: [200, 68],
    text: "The largest part of the brain, split into two hemispheres joined by the corpus callosum. Its folded cortex packs roughly 16 billion neurons into the space the skull allows."
  },
  {
    id: "cerebellum", name: "Cerebellum", latin: "Cerebellum", system: "nervous",
    type: "path", d: "M182 105 C173 106 168 112 169 119 C171 127 180 130 190 128 C197 126 200 120 199 114 C197 108 190 104 182 105 Z",
    label: [174, 120],
    text: "The 'little brain' beneath the cerebrum. It holds over half the body's neurons in a tenth of its volume, and it coordinates timing and balance — the reason damage here produces clumsy rather than weak movement."
  },
  {
    id: "brainstem", name: "Brainstem", latin: "Truncus encephali", system: "nervous",
    type: "path", d: "M194 104 L208 104 L206 150 L196 150 Z",
    label: [214, 130],
    text: "The stalk connecting brain to spinal cord, running breathing, heart rate, and consciousness. Every signal between body and brain passes through it, which is why injuries here are so often fatal."
  },
  {
    id: "spinal-cord", name: "Spinal cord", latin: "Medulla spinalis", system: "nervous",
    type: "path", d: "M196 152 L204 152 L203 240 L202 320 L201 400 L197 400 L198 320 L197 240 Z",
    label: [200, 300],
    text: "A bundle of nerve fibres about 45 cm long carrying signals between brain and body. It also acts independently: reflexes such as pulling from heat are processed here before the brain is even informed."
  },
  {
    id: "brachial-plexus", name: "Brachial plexus", system: "nervous", mirror: true,
    type: "path", d: "M196 200 C180 202 162 212 148 226 L134 260 L126 320 L118 390 L112 436",
    label: [140, 280], stroke: true,
    text: "A web of nerves at the base of the neck supplying the entire arm. Stretching it — as in a heavy fall onto the shoulder — produces the burning arm pain athletes call a stinger."
  },
  {
    id: "sciatic", name: "Sciatic nerve", latin: "Nervus ischiadicus", system: "nervous", mirror: true,
    type: "path", d: "M186 424 L180 470 L174 540 L170 620 L172 700 L174 790",
    label: [172, 560], stroke: true,
    text: "The body's longest and widest nerve, roughly the diameter of a finger where it leaves the pelvis. It runs from the lower back to the foot, and compression anywhere along it causes sciatica."
  }
];

// The body outline the systems are drawn against. Written as five subpaths —
// head with torso, two arms, two legs — so the limbs read as separate from the
// trunk rather than merging into one blob.
// Arms and legs are authored once and mirrored across the midline by the
// renderer, the same way bilateral structures are.
export const SILHOUETTE = {
  trunk:
    "M200 26 C224 26 242 48 242 78 C242 104 236 126 228 140 L228 162 " +
    "C254 170 270 184 274 206 C280 236 280 272 278 306 C276 342 272 376 268 404 " +
    "C264 434 262 452 260 470 C240 480 160 480 140 470 C138 452 136 434 132 404 " +
    "C128 376 124 342 122 306 C120 272 120 236 126 206 C130 184 146 170 172 162 " +
    "L172 140 C164 126 158 104 158 78 C158 48 176 26 200 26 Z",

  arm:
    "M148 190 C142 212 139 238 138 264 C137 290 134 312 131 334 " +
    "C128 360 124 382 121 404 C118 428 115 446 114 464 " +
    "C113 480 107 496 98 498 C89 500 83 493 83 481 " +
    "C83 466 85 450 86 436 C88 412 90 390 92 366 " +
    "C94 338 93 314 94 290 C95 258 97 222 106 190 Z",

  leg:
    "M146 466 L197 466 C197 520 195 562 193 606 C191 650 189 702 188 750 " +
    "C187 792 187 824 189 846 C190 858 184 864 170 864 C154 864 146 858 147 846 " +
    "C149 824 150 792 149 750 C148 702 147 650 145 606 C143 562 142 520 146 466 Z"
};
