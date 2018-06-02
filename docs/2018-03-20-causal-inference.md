---
layout: post
title: Historical experiments
category: openproblem
---

In economics ... by chance we see a natural experiment.

The conditions necessary for this are

A counterfactual.

Both A and B start at some 'similar' state, S, but then a single cause, X, acts in only A (but we can assume the cause of A is not linked to any effects). Thus, any effects we see, Y, are caused by X.


Similar in the sense that all the ways A and B are dissimilar are independent of any effects due to X.


For example.

Someone calls a big white feathery thing in the middle of a lake a 'swan'. Ok, so know I know what swans are. Another day, I see a big black feathery thing flying over head and I ask what it is. 'Oh, that is a swan'.



Consider a controlled experiment. We have a population of people, they they are split into two groups, A, B. A receives an intervention and B receives nothing. We make the assumption that A and B differ only by the intervention. That is to say, before the intervention, sim(A, B) ~= 1. Now this isn't true, as different people are participating in A and B. And this hints at a deeper problem with testing causality in reality. It is not possible to create the same environment twice, we cannot run two realities in parallel and see the result of any intervention we make, unless the many-worlds interpretation is correct (unlikely if you ask me).

<!--
We also assume that the act of doing the experiment is independent from any effects we see?!
People knowing they are in an experiment.
People being disrupted from their daily routine to participate in the experiment.

Also assume that the delivery on the control/intervention is independent w.r.t any effects.
 -->

So, what if we could further weaken this measure of similarity? The requirements for A and B to be similar with respect to a given intervention, X, are;
* any differences between A and B, defined as C (= A - B) are independent from any effects, Y (= A' - B' - C = A' - A + B' - B = dA/dX - dB/dX). (need to include their natural rate of change? dA/dt?)
* ?

So in what cases in this could this help?
* Take A and B to be Auckland and Wellington.





Causality still doesn't make sense to me!? F = ma is not a casual statement. It does not say that acceleration of a mass causes force anymore than a force on a mass causes acceleration. What is a social/economic/political version of this? Well educated people in parliament causes good governance is the same thing as good governance by parliament ...???


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
