# Phrase 2.0 - personal English grammar trainer

Ukrainian interface, American English, static HTML/CSS/vanilla JavaScript. No backend, framework, AI service, build step, account, paid dependency or CDN. Local Lucide SVG assets are retained.

## Run locally

From this directory:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open [the local trainer](http://localhost:8765/). Use the same scheme, hostname and port each time: browser storage belongs to that exact origin. Opening `index.html` directly can have browser-specific storage limitations. Use HTTP locally or HTTPS on Pages for reliable IndexedDB and UUID support.

The development review instance uses [port 8766](http://127.0.0.1:8766/). It has a separate origin from the original trainer; export/import transfers progress between these addresses. Do not interpret an empty account on a different origin as lost progress.

## Learning modes

The default remains multiple choice. Enable **"Хочу складати речення сам"** on the home screen to include writing, blocks, transformations and recall. Changing this setting never deletes old results or bookmarks.

- **Present Simple / Continuous:** context makes habit/current/temporary meaning explicit. Separate links practice either tense; both affirmative and negative forms are included.
- **Sentence Construction Lab:** meaning, subject, auxiliary, verb form, blocks, transformation into a question, recall. Both Simple and Continuous have authored grammar metadata. Start from step 1, step 5 or step 7. Steps 1-4 and recall immediately following scaffolding are learning attempts without independent-score credit. Start directly at step 7 or use Recall to demonstrate unassisted recall.
- **Transform:** questions, negatives, person changes and tense changes. The original sentence and transformation diagram remain visible.
- **Questions:** Do/Does, Am/Is/Are, Can, states and actions, then WH questions. Automatic practice gates WH questions on at least eight question attempts with 80% accuracy and the appropriate difficulty level. Manual difficulty overrides the gate.
- **The -ING Problem:** continuous, enjoy, like/love with either construction, want + infinitive, prepositions, stop doing/to do, and seven spelling contrasts. British `travelling` is explained as a valid British spelling; the task explicitly requests American spelling.
- **Grammar Anatomy:** 18 authored examples, clickable words, visible role labels and distinct borders. `He is boring.` and `He is boring everyone.` have different annotations. The same distinction is shown for interesting, annoying, confusing, exciting and tiring. `I like swimming.` is not labelled Continuous.
- **Recall / Complete:** optional translations and legacy fill/chunk tasks. Legacy block tasks are also available in mixed practice when production is enabled.
- All legacy contrast, real-life, mixed, weak-area, review, rapid, daily, saved, history, cheat-sheet, theme and backup features remain available.

No speed requirement. Choose 5, 10 or 20 questions; the classic daily plan always uses 20. In the lab, the count refers to sentence journeys, which may each contain seven steps.

## Content

475 stable exercise records across 21 categories: 315 legacy records plus 160 new records. There are 256 choice records and 219 optional production records before difficulty filtering. Lab steps reuse source IDs and do not artificially increase these counts.

| New category | Count |
| --- | ---: |
| Present Continuous | 50 |
| Simple / Continuous contrasts | 40 |
| Questions | 25 |
| -ing / infinitive | 20 |
| Transformations | 15 |
| Integrated real-life challenges | 10 |
| Total added | 160 |

The Continuous set includes 20 auxiliary decisions, 15 block constructions and 15 independent translations. All 50 can be practiced through the lab. Eight Simple contrast records also support the complete lab. Developer work, deployments, bugs, calls, home, travel and a skeptical cat supply distinct situations and vocabulary.

`exercises.js` retains every old ID. Repairs remove the duplicate `ex-0271` alternative and correct copied Ukrainian context fields in ex-0286/0287, 0288/0289, 0290/0291, 0298/0299, 0300/0301, 0302/0303, 0304/0305, 0306/0307, 0308/0309, 0311 and 0312. Tests compare all other legacy fields against the pre-upgrade fixture.

The authored new curriculum lives in `scripts/build-v2-content.py`; the checked-in `exercises-v2.js` is the static runtime asset. Regenerate only when editing content:

```powershell
python scripts/build-v2-content.py
node tests.cjs
```

Legacy detailed lessons attach before new data loads. New records carry their own explanations. There is no generated content at runtime.

## Feedback and grading

Feedback gives the result, complete sentence, a short rule, specific authored error label and optional detailed explanation. A mistake also gives another example and one optional, unscored follow-up question. Related exercises are queued for daily practice: easier, similar, question/negative and next-day review. Not every old chunk has all four compatible formats; unavailable stages are omitted instead of manufacturing unrelated questions. Hints are shown only on demand.

Accepted answers are the union of `correctAnswer` and explicit `alternatives`. Matching normalizes case, whitespace, final sentence punctuation, apostrophe style and common contractions. Meaningful interior punctuation, articles, auxiliaries, word order and verb forms are retained. `its` is never treated as `it's`.

Choice/block errors and exact authored `knownWrong` answers can receive a negative score. Other free text is **uncertain and unscored**, even when it may actually be wrong. The UI says that another valid variant is possible, shows known answers, and offers an unscored skip. This is a conservative whitelist, not an English parser. It cannot prove that an arbitrary sentence is grammatical or equivalent. Contractions using `'s` are supported for the taught `is` forms and explicit `has been`, not arbitrary perfect constructions.

All user/imported text is escaped. Detailed explanations remain available in the history. Guided lab steps, follow-up checks, hints, skips and unknown free text do not inflate independent accuracy.

## Learning evidence and repetition

Existing aggregate counts stay intact. New lane metrics start from new attempts, since legacy aggregates cannot reconstruct answer modality or distinct successful dates.

- Recognition, construction/transformation, question formation and recall are tracked separately, with successful source IDs and calendar days.
- Simple and Continuous accuracy are additional overlapping views, not extra attempts.
- "Well recognized": at least three successes, 80% accuracy and two distinct exercises.
- "Mastered": recognized plus successful construction, unassisted recall and successes on at least two dates, while production is enabled. Choice-only users never receive a production-mastery claim.
- Automatic level 2: at least 20 recognition attempts, 75% accuracy and two successful dates. Level 3: 60 attempts, 85% and four successful dates. Manual levels use the chosen ceiling and allow WH practice.
- Review deadlines use local calendar days, with intervals of 1, 3, 7, 14 and 30 days according to distinct successful dates. Same-minute repetition does not extend an interval. Errors schedule next-day review and immediate related practice.
- Selection weights prioritize weaknesses and due work, and exclude every already-used source ID in the current session. A small filtered pool ends early instead of repeating a question.
- Adaptive daily plan: approximately 20% easy warm-up, 30% weak areas, 30% chosen topic, 20% production when enabled (otherwise topic choices). Remediation takes precedence. Empty groups fall back to eligible unseen exercises. The classic plan retains four equal weak/contrast/real-life/review sections.

These are transparent learning heuristics, not a scientifically validated proficiency score. Recognition evidence cannot stand in for independent production.

## Persistence and migration

The key remains `phrase-progress-v1`; the stored JSON schema becomes version 2. On first reading valid schema 1, the original string is copied once to `phrase-progress-v1-backup`. Only after that backup succeeds can normal writes save the migrated state. Counters, patterns, question history, days, bookmarks and theme survive; new settings/evidence/errors/remediation fields receive defaults.

Invalid JSON, invalid nested fields, unknown schema versions or read/backup failures activate a write block. The application does not overwrite the original with an empty state. It shows a warning, permits temporary practice, and exposes an original-data recovery download in Statistics. Normal export is refused in this condition to avoid exporting misleading empty progress. A valid import or explicitly requested reset can recover normal operation.

Detailed attempts remain in the existing `phrase-history-v1` IndexedDB database, store `attempts`, version 1. The new `uncertain` outcome is unscored. Existing history is neither cleared nor trimmed during upgrade.

Export contains schema-2 progress plus the actual history snapshots. Import validates nested progress, calendar dates, counters, history shapes and dangerous object keys before writing. It accepts schema 1 and 2. An old backup without history preserves current IndexedDB history. Combined history restoration uses a single transaction; if it fails, the previous aggregate string is restored. An additional `phrase-progress-before-import` copy retains the previous aggregate state. Cross-storage crash atomicity is not possible between localStorage and IndexedDB; export a combined backup before release or import.

There is no cross-device synchronization. Export/import is the transfer mechanism. Browser clearing, private browsing and disk/storage restrictions still affect retention. An old app version cannot read schema 2; do not roll back app assets without restoring a compatible backup if progress access is required.

## Files and responsibilities

- `index.html`, `styles.css`: relative local assets and responsive presentation.
- `app.js`: shared helpers, routes and retained legacy views.
- `sessions.js`: session lifecycle, keyboard/click answers, block undo/clear, short feedback and inline follow-ups.
- `learning-ui.js`: settings, mode entry points, anatomy, learning dashboard and expanded cheat sheet.
- `exercises.js`, `learning.js`: legacy data and detailed explanations, with bounded data repairs.
- `exercises-v2.js`, `scripts/build-v2-content.py`: authored new curriculum and reproducible static data output.
- `construction.js`, `anatomy.js`: lab stages and explicit sentence roles.
- `grading.js`: whitelist grading, normalization, error labels.
- `persistence.js`: schema validation, defaults, migration and backup protection.
- `engine.js`: pool eligibility, adaptive selection, evidence, repetition and mastery.
- `history.js`, `history-ui.js`: IndexedDB snapshots, filtering, recurring mistakes and combined backup import/export.
- `tests.cjs`, `tests.learning.cjs`, `tests.history.cjs`, `tests.v2.cjs`: deterministic Node regression suites.
- `tests.browser.cjs`: isolated-context browser smoke/integration checks.
- `tests/fixtures/legacy-exercises.js`: immutable baseline data for compatibility assertions.
- `docs/PHRASE-2-ACCEPTANCE.md`: implementation and verification ledger.
- `vendor/lucide/`: unchanged official local SVG assets, ISC license and provenance.

## Automated verification

```powershell
node tests.cjs
```

This invokes all four Node suites, including legacy content, explanations, real submit/hint handlers, history backup rollback, 475 data contracts, 160 additions, contractions, transforms, -ing, explicit anatomy, hostile imports, corruption/quota protection, migration, mastery, progression, calendar-day repetition, no-repeat selection and relative assets.

Optional browser suite requires Playwright in your development environment and a running local server. The application itself has no Playwright dependency:

```powershell
node tests.browser.cjs
```

Optional environment variables: `PLAYWRIGHT_MODULE` (absolute module path), `CHROMIUM_PATH` (installed browser executable), `PHRASE_URL` (server base URL, including final slash), `PHRASE_SCREENSHOTS` (artifact directory).

The suite launches a fresh browser context. It never opens a personal profile or modifies real learner progress. It checks all routes, choices, hints, short follow-ups, transforms, uncertain text, seven lab stages, block undo/clear, IndexedDB, actual download/import, v1 migration, light/dark rendering and viewport widths 1440, 390 and 320. It fails on horizontal overflow, runtime errors and external asset requests.

## Manual release checklist

- Export a combined backup from the existing public origin before upgrading.
- Open Home and check the production toggle defaults off. Choose session length and a manual level.
- Practice both tenses, a question and a negative. Verify that the Ukrainian situation makes the intended meaning clear.
- Choose an incorrect answer, inspect the short diagnosis, answer the unscored follow-up, and expand details only when wanted.
- Enable production. Complete a lab journey, use undo/clear, transform a sentence with a contraction, and try an alternative translation absent from the whitelist.
- Check `boring` adjective vs action and `like swimming` in Anatomy.
- Check history filters, bookmarks, statistics, export and import on a disposable profile.
- Check phone layout, keyboard Tab/Space/1-4/Enter, dark mode and reduced-motion preference.
- After deployment, visit the project URL including its repository segment; check console/network for missing assets. Do not use only the account root URL.
- Import the combined backup on a new origin if needed. Confirm previous counters, bookmarks and history before discarding any backup.

## GitHub Pages deployment

The Phrase 2.0 release was authorized on 2026-11-07. GitHub Pages publishes approved commits from `main`; use the workflow below for subsequent updates.

1. Run the Node and browser suites and export progress from the current site.
2. Review the diff, commit the tested files, and merge `feature/phrase-2` into `main` through the chosen review workflow.
3. Push the approved `main` branch to `ihoryar-maker/phrase-english-trainer`.
4. In repository Settings > Pages select **Deploy from a branch**, **main**, **/(root)**, and save. `index.html` must be at that source root.
5. Wait for the Pages build/deployment in Actions to succeed. Open [the project URL](https://ihoryar-maker.github.io/phrase-english-trainer/), including the trailing project path. Refresh once if cached assets remain.
6. Verify all relative JS/CSS/SVG files return successfully. A 404 at `https://ihoryar-maker.github.io/` alone does not test the project site. If the correct project path is 404, inspect the deployment run and source settings before changing application routes.

No build output directory, server rewrite, secret, environment variable or API key is needed. Navigation uses hashes, so Pages serves the same entry page for every mode.

## Educational references

Rules were cross-checked against [Cambridge: Present Simple or Continuous](https://dictionary.cambridge.org/uk/grammar/british-grammar/present-simple-or-present-continuous), [Present Continuous forms](https://dictionary.cambridge.org/grammar/british-grammar/present-continuous), [like/love with -ing or infinitive](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/verbs-followed-ing-or-infinitive), [stative meanings](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/stative-verbs), and [interest someone in something](https://dictionary.cambridge.org/dictionary/english/interest-in). These general grammar references do not change the application's American spelling policy. Lessons are local; opening a source is optional.

## Remaining boundaries

No arbitrary sentence parser, voice input, pronunciation scoring, account sync or backend is provided. Anatomy is an authored set rather than a tool for analysing any pasted English sentence. The lab covers Simple and Continuous statements; other grammar families use legacy blocks, transformations or recall. Remediation stages depend on available compatible records. A browser test does not substitute for testing on physical iOS/Android devices or checking a future Pages deployment.
