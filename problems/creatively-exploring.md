When we are searching for a plausible solution what are some good heuristics?
A kind of non-local diversity seems like a good idea. But how should these diverse queries be generated? This is what I would define as creativity; the ability to cheaply generate plausible and diverse canidates.

Efficient search comes very close to the explore-exploit tradeoff. Recently we have seen some work achieving efficient exploration through curiosity (and in some sense suprise) guided actions (see [this](https://pathak22.github.io/noreward-rl/)). 

Given this, an alternative definition of creativity could be the generation of new queries that were considered, a priori, to be inplausiable/not thought of, but in hindsight are effective (aka a good guess? what more is guiding this?)
