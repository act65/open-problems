

## Falsifying hypotheses

Imagine that we have some oracle (maybe physics for experiment design, a database for query generation, ...) that is expensive to call. Given what we (the learner) know, our next call to the oracle should be to falsify our leading hypothesis. <!-- (about ???) -->

Falsification is at the very heart of good science: generate plausible and testable hypotheses, try your hardest to prove them wrong. Keep the remaining hypotheses and repeat.
In machine learning this process also seems to go by another name, __active learning__: How can you generate maximally informative queries.

## As fast as possible

Queries, q_i, to the oracle take varying amounts of time, t_i, depending on their 'complexity'. Want to learn while minimising total time taken, T. (allow queries to be asked in parallel?)

This setting is motivated by our search for, say, medicine. We want to find a cure to Alzheimers and some experiments take a long time. We want to find the solution as soon as possible.

## Too big to know

There exists a causal graph -- n vertices and m edges -- and we want to recover its structure. We can observe the values of all vertices, but none of the edges. (this is harder than what we deal with in the real world as we have extra info about edges via knowing the proximity -- in space or sector or ... -- of two vertices.)

There are also some restrictions on the types of query that can be made. Interventions must be local -- an intervention can only control k variables, where k << n and k < average degree of the vertices.



Measure of accuracy. (Is there an approximate graph isomorphism? That might say G and H are 75% the same but edges a,b are different. Dont need graph isomorphism as we know the nodes are the same. Total number of correct edges/total number of edges...)

Motivation

Want to capture the idea of how much organisation/energy it takes to do proper experiments/controls in the real world.

Extensions

(what about imperfect/approximate controls??)
