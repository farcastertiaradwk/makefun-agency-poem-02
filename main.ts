// agency-poem-01 round 2 entry (Node 22, standard library only).
// The program writes one fixed poem to /output/entry.txt and nothing else.
// It is deterministic: the same bytes on every run, no network, no clock,
// no randomness. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "The Apprentice" — a poem about agency as the power to withhold action.
// A master watches his apprentice cut a joint wrong and does not step in:
// the choosing is the not-doing, and the chair is made by the cut the
// master's hands did not make. The restraint is the agency.
const STANZAS: string[][] = [
  [
    'He cut the dovetail wrong. I saw it',
    'from the doorway, hands behind my back,',
    'the way my master stood for me.',
  ],
  [
    'I could have stepped in. I did not.',
    'The saw went on. The joint went in',
    'a fraction out — and held.',
  ],
  [
    'The chair stood. It was not my chair.',
    'I watched the thing I love go wrong',
    'and let it stand.',
  ],
  [
    'I made the chair by not making it.',
    'My hands learned, at last, the one cut',
    'that matters: the cut I did not make.',
  ],
];

const POEM = STANZAS.map((stanza) => stanza.join('\n')).join('\n\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
