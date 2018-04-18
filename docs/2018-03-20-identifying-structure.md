---
layout: post
title: Identifying structure
category: openproblem
---

Learning is an iterative process, mistakes are made and lessons are learned. As we learn we will want to adapt to/exploit this new knowledge.

This is a subsetting of online learning!?

We build neural networks using existing priors about how the network should be structured

## Weight sharing

Convolutional and recurrent neural networks

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
