# Atlas

An interactive guide to human anatomy. Six body systems, seven zoomed detail
views, and around two hundred individually named structures, with a quiz mode
that asks you to find them. Everything is drawn as hand-authored or generated
SVG — no images, no libraries, no build step.

Built by [Graham Connell](https://grahamconnell.net) with Claude Code.

## Why

I studied biology at the University of Georgia. Anatomy is one of those subjects
that is genuinely hard to learn from a static textbook plate, because the thing
you are trying to memorise is spatial — where a structure sits relative to
everything around it. Clicking on it and being told what it does is a better fit
for how the material actually works.

So this is the study tool I would have wanted: pick a system, explore it, then
switch to quiz mode and find out what you actually know.

## Features

- **Six systems** — skeletal, muscular, circulatory, respiratory, digestive and
  urinary, and nervous — each drawn over the same figure and tinted the way a
  printed anatomical plate would be.
- **Seven detail views** for regions the full-body figure cannot resolve:

  | View | Contents |
  | --- | --- |
  | Dentition | All 32 permanent teeth, numbered in the Universal system |
  | Hand & wrist | All 27 bones, carpals through distal phalanges |
  | Foot & ankle | All 26 bones, tarsals through phalanges |
  | Skull | 12 bones and sutures, anterior view |
  | Spine | 24 vertebrae named C1–L5, plus sacrum and coccyx |
  | Brain | Four lobes, cerebellum, and the three-part brainstem |
  | Heart | Four chambers, four valves, and the great vessels |

- **Blood is coloured by oxygenation** in the heart view, so the right side and
  the pulmonary trunk are blue and the left side and pulmonary veins are red —
  the pulmonary trunk being the artery that carries spent blood.
- **Click any structure** for its name, Latin name where it has one, and a short
  explanation of what it does and why it matters.
- **Quiz mode** names a structure and asks you to find it, marking your answer
  and tracking running accuracy.
- **Deep links** — `#nervous` opens a system, `#skeletal/dentition` opens a
  detail view.
- Bilateral structures are authored once and mirrored across the midline, so the
  data stays about half the size it would otherwise be.

## Running it

Any static file server works:

```
python -m http.server
```

Then open `/anatomy/`.

## Accuracy

The figure is diagrammatic rather than dissection-accurate — structures are
simplified and slightly separated so they can be told apart and clicked. Sidedness
is correct: the figure faces you, so the liver sits on your left and the stomach
on your right, as they would on a person standing opposite you.

It is a study aid, not a clinical reference, and it is not medical advice.
