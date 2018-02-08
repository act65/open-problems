Extrapolation...


## Known unknowns

How do we become aware of ignorance?

It seems like the scientific method (gather data, hypothesise, falsify, reproduce, repeat) is about taking something we know we don't know and attempting to understand it. But how can we optimally draw attention to the things we don't understand, so we can later apply the 'scientific method'.

Some mixture of tracking prediction error and a skeptical view of explanations? Reminds me of (curiosity guided exploration in agent-based settings).
I have vaguely heard of people talk about surprise and attention to details as being good heuristics for spotting ignorance.

First need to identify what we do know. Knowledge about knowledge.

## Creative exploration

When we are searching for a plausible solution what are some good heuristics?
A kind of non-local diversity seems like a good idea. But how should these diverse queries be generated? This is what I would define as creativity; the ability to cheaply generate plausible and diverse candidates.

Efficient search comes very close to the explore-exploit tradeoff. Recently we have seen some work achieving efficient exploration through curiosity (and in some sense surprise) guided actions (see [this](https://pathak22.github.io/noreward-rl/)).

Given this, an alternative definition of creativity could be the generation of new queries that were considered, a priori, to be implausible/not thought of, but in hindsight are effective (aka a good guess? what more is guiding this?)
