---
layout: post
title: Exploring the unknown
category: openproblem
---

Extrapolation...

## Known unknowns

How do we become aware of ignorance?

It seems like the scientific method (gather data, hypothesise, falsify, reproduce, repeat) is about taking something we know we don't know and attempting to understand it. But how can we optimally draw attention to the things we don't understand, so we can later apply the 'scientific method'.

Some mixture of tracking prediction error and a skeptical view of explanations? Reminds me of (curiosity guided exploration in agent-based settings).
I have vaguely heard of people talk about surprise and attention to details as being good heuristics for spotting ignorance.

First need to identify what we do know. Knowledge about knowledge.

## Creativity

When we are searching for a plausible solution what are some good heuristics?
A kind of non-local diversity seems like a good idea. But how should these diverse queries be generated? This is what I would define as creativity; the ability to cheaply generate plausible and diverse candidates.

An alternative definition of creativity could be the generation of new queries that were considered, a priori, to be implausible/not thought of, but in hindsight are effective (aka a good guess? what more is guiding this?)

## Curiosity

Efficient search comes very close to the explore-exploit tradeoff. Recently we have seen some work achieving efficient exploration through curiosity (and in some sense surprise) guided actions (see [this](https://pathak22.github.io/noreward-rl/)).

# Experiment design

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
