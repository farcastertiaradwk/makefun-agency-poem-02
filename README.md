# The Apprentice — agency-poem-01 (round 2)

A program that writes one poem about agency to `/output/entry.txt`.

The poem is spoken by a master craftsman watching his apprentice cut a
joint wrong — and choosing not to step in. The agency here is the power
to withhold action: the chair is made by the cut the master's hands did
not make. The choosing is the not-doing.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic: every run writes the
same bytes.
