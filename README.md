# Atlas

An interactive guide to human anatomy. Six body systems, two zoomed detail
views, over a hundred structures, and a quiz mode that asks you to find them.
Everything is drawn as hand-authored SVG — no images, no libraries, no build
step.

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
- **Detail views** for regions the full-body figure cannot resolve. The
  dentition view carries all 32 permanent teeth, individually clickable and
  numbered in the Universal system; the hand view carries all 27 bones of the
  hand and wrist by name.
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
