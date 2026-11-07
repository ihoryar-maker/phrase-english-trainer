# Phrase 2.0 acceptance ledger

Baseline: commit 808a5af, including detailed explanations and IndexedDB history.
Implementation stays in the existing static application. No framework, backend, AI service or CDN.

## Inspection findings

- All modes currently filter out production tasks; no Present Simple/Continuous curriculum exists.
- Three same-minute correct responses incorrectly imply mastery.
- Pattern explanations can reveal the answer before an attempt.
- Normalization conflates some contractions; unknown typed alternatives are counted as errors.
- Persistence/import assume schema 1 and do not validate all nested data.
- The daily sequence is hard-coded to 20 questions and can repeat exact questions.
- Newer upstream commits add valuable detailed explanations and IndexedDB attempt history. Preserve both.
- Legacy ex-0271 duplicates an alternative. Later generated blanks copied unrelated Ukrainian contexts.

## Required acceptance checks

- [x] Preserve all 315 legacy IDs, history, bookmarks and readable version-1 exports.
- [x] Default remains choice-only; production requires explicit opt-in.
- [x] Add 160 authored exercises: 50 continuous, 40 contrasts, 25 questions, 20 ing, 15 transformations, 10 integrated.
- [x] Seven-stage construction lab; transformation, recall and legacy fill/block modes.
- [x] Interactive anatomy distinguishes participial adjectives from progressive verbs.
- [x] Precise error tags, short micro-lessons, related follow-ups and delayed review.
- [x] Evidence-based recognition/production/question/recall statistics and mastery across days.
- [x] Manual and gradual automatic difficulty; 5/10/20 sessions; no identical repeats.
- [x] Safe migration and validated export/import including existing IndexedDB history.
- [x] Deterministic tests and browser checks; preserve local SVG assets and relative paths.
- [x] English delivery documentation, counts, limitations and GitHub Pages instructions.

## Release boundary

The upgrade was developed and validated locally on feature/phrase-2. The user explicitly authorized publishing this version to GitHub and updating the public trainer on 2026-11-07.

## Verification result - 2026-11-07

- `node tests.cjs`: PASS. Runs legacy engine/data, detailed-learning/UI handlers, history/import and v2 suites together.
- `node tests.browser.cjs`: PASS in an isolated headless Chromium context. All routes, default choice mode, production toggle, short follow-up, transformations, unknown free text, complete lab flow, undo/clear, actual IndexedDB history and combined file download/import were exercised.
- Real-browser schema-1 fixture upgrade retained four aggregate answers, both bookmarks, dark theme and the exact original backup.
- Viewports 1440x1000, 390x844 and 320x844: no horizontal overflow. Home, anatomy and mobile lab screenshots were visually inspected, including dark mode.
- No uncaught browser exceptions or external asset requests. Relative entry asset contracts passed.
- `git diff --check`: PASS.
- Dataset: 475 records, 256 choice / 219 optional production. New content is exactly 50 + 40 + 25 + 20 + 15 + 10 = 160.
- Legacy compatibility fixture compares every field other than the specifically documented duplicate/context repairs. No historical IDs were removed.
- At the initial local validation checkpoint, no public push or deployment had been performed. Publication was authorized in the subsequent request.

The in-app browser automation kernel was unavailable, so browser validation used the installed headless Chromium with a fresh profile. This was not a test on physical mobile devices. The screenshots and disposable test backup are under the workspace `work/phrase-2-qa` directory, outside the repository; they contain only synthetic test attempts.

## Bounds made explicit

Unknown typed answers are never certified as correct or incorrect. New lane evidence does not fabricate historical modality. Guided lab recall does not count as independent recall. Full mastery requires production plus two successful dates; repeated recognition alone cannot earn it. Old chunk rules may lack enough authored variants to fill every remediation stage. The README includes the manual checklist, all changed/new file responsibilities, data counts, migration behavior and Pages release instructions.
