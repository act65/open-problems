---
layout: post
title: Identifying structure
category: openproblem
---

## Occam's razor

Related to symmetry, compression, ...?

Learning is an iterative process, mistakes are made and lessons are learned. As we learn we will want to adapt to/exploit this new knowledge.

## Disentangled features

In the ideal case we could apply unsupervised learning to a dataset and get back a model of the true generative process.

However, our current best approach, DL, can only learn correlations. So we are left with finding the patterns

Possible to learn more than correlations without interference? Possibly, if we have ??? (Bernhards thingy -- ternary relations).


Want this to be somewhat modeled after grammaticalization and related to compositionality/merge.

In the ideal case we could apply unsupervised learning to a dataset and get back a model of the true generative process.

However, our current best approach, DL, can only learn correlations. So we are left with finding the patterns

Possible to learn more than correlations without interference? Possibly, if we have ??? (Bernhards thingy -- ternary relations).


Want this to be somewhat modeled after grammaticalization and related to compositionality/merge.

### Idependent features

Can


## Identifying structure

This is a subsetting of online learning!?

We build neural networks using existing priors about how the network should be structured

## Weight sharing

Convolutional and recurrent neural networks

Learning a convolution.!!!


#### Weight sharing and invariance

Are there clever ways to share weights so that our networks are invariant to other transforms? Which transforms do we even want to be invariant to?

Given that [relation networks](https://arxiv.org/abs/1706.01427) share weights across each relation, what is it we are invariant to?


How does the symmetry in a dataset/problem get reflected in the functions learned that solve said problem?

Why do we even care about invariance? A definition of a high level representation is could be that the more signals (except for the one we care about) a variable is invariant to, the higher level it is.

#### Approximate invariance

Rather that building invariance into our network, eg avg pooled cnns across spatial dimensions -> (local) translational invariance, how can we make it easier to learn these invariances from the data?

#### Jacobians

Invariance is a statement about the jacobian of a function. If a function is invariant to x the we know that df/dx = 0. So can we find structure and/or symmetry in the jacobians of our neural networks that helps us understand what they have learned? Alternatively, can we impose structure on the jacobian to regularise for different invariances?


## ?

Can we adapt our computations to manipulate structure in our data?
We could adaptively choose the hardware/representations we are using based upon operations we are calculating.

For example: online optimisation of the processing of a NN to make it more efficient. Writing often used processes into hardware.

Structural adaptation of a model based on structure/patterns in the data.

For example;

* we are learning a linear model. It turns out the linear transform can accurately (within some tolerance, or at least more so that other factorisations) be factorised with a cholesky decomposition. So replace the linear transform with a cholseky decomposition.
* our cloud service is being queried with millions of cosine similarity computations, write X cosine computations into hardware and use them.

<!-- Problem this runs into is 'over' specialisation? What if we were wrong? How can we undo the decision? -->

## Efficient compute

In general, an oracle looks at the operations being done in our network (multi resolution low level -- addition, exp, ... _hardware_ -- and high level -- svd, QP, ... _software_) and replaces approximations with the closest op. Error of that op could still be tracked.

Scheduler that is also allowed to design new ops!?

## Dynamic programming

Have three functions;
- $\mathcal T:$ the applied function
- $S:$ the decompose or split function
- $M:$ the compose or merge functions
- (also need should_split and should_merge)?!

$$
\begin{align}
\mathcal T: X &\rightarrow Y \tag{often X = Y}\\
S: X &\rightarrow \{x_i ... x_n: x_i \in X\} \\
\text{s.t.} \; X_i &\cap X_j = \{\} \tag{must be a partition}\\
M: Y &\rightarrow \{Y\} \\
\end{align}
$$

A relaxed definition of dynamic programming.
Without the partition and self-mapping conditions.

$$
\begin{align}
X, Y &= ? \\
A, B &= ?? \\
\mathcal T: X &\rightarrow Y \\
S: A &\rightarrow X \\
M: Y &\rightarrow B \\
\end{align}
$$
https://arxiv.org/abs/1611.02401

With this relaxed definition we could !??!?

| Algol | fn | Decompose | Merge |
|:-:|:-:|:-:|:-:|
| CNN | filter | extract_patches | concat |
| fibonacci | id | fib(n-1), fib(n-2) | add |
| merge sort | id | split | sort $\circ$ concat |
| belmans eqn | ? | ? | ? |

BUT, how can we learn to do this!?!?
