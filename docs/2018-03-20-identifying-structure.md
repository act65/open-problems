---
layout: post
title: Identifying structure
category: openproblem
---

Learning is an iterative process, mistakes are made and lessons are learned. As we learn we will want to adapt to/exploit this new knowledge.

## Disentangled features

In the ideal case we could apply unsupervised learning to a dataset and get back a model of the true generative process.

However, our current best approach, DL, can only learn correlations. So we are left with finding the patterns

Possible to learn more than correlations without interference? Possibly, if we have ??? (Bernhards thingy -- ternary relations).


Want this to be somewhat modeled after grammaticalization and related to compositionality/merge.

## Identifying structure

Can we adapt our computations to manipulate structure in our data?
We could adaptively choose the hardware/representations we are using based upon operations we are calculating.

For example: online optimisation of the processing of a NN to make it more efficient. Writing often used processes into hardware.

Structural adaptation of a model based on structure/patterns in the data.

For example;

* we are learning a linear model. It turns out the linear transform can accurately (within some tolerance, or at least more so that other factorisations) be factorised with a cholesky decomposition. So replace the linear transform with a cholseky decomposition.
* our cloud service is being queried with millions of cosine similarity computations, write X cosine computations into hardware and use them.

<!-- Problem this runs into is 'over' specialisation? What if we were wrong? How can we undo the decision? -->

In general, an oracle looks at the operations being done in our network (multi resolution low level -- addition, exp, ... _hardware_ -- and high level -- svd, QP, ... _software_) and replaces approximations with the closest op. Error of that op could still be tracked.
