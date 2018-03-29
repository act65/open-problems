---
layout: post
title: Learning in the real world
category: openproblem
---

In the real world, data is messy, complicated, ... and it doesn't come how you want it.

## Complexity

Most real world problems are a little more complicated than differentiating between pictures of cats and dogs.
How can we learn complex functions (while remaining efficient?).

What make a function complex?

* The inter-relatedness of its input variables? So a function with many independent/separable components is not complex?
* the length of dependencies,
* the raw amount of possible cases/knowledge/information
* ?

Firstly, we will need to construct learnable classes of complex function, however, this is the problem! To capture many different types of complex function we need ... ??? exponentially large space. Thus complex functions are harder to approximate as there are more candidates to search through. We need more priors to help constrain this...

There are some approaches to this problem and they largely boil down to something related to Occam's razor. Start simple and build on that.

* Curriculum, (two types? target and capacity?)
* long-term and deep,
* Constructing more complex fns from simple ones. Starting with the simplest hypotheses.

## Correlated samples

Pretty much every ML algorithm you come across has an often over looked assumption, that the dataset has been constructed from IID samples from the true data distribution. This is pretty much impossible to achieve in practice and there will always be some bias in the dataset (possibly just from the sampling, but more likely due to how it was constructed).

Game playing (typically with RL) ... this problem as ...?

Another setting where we see this is [Federated optimisation](https://arxiv.org/abs/1511.03575). (but not correlated in time, but in source?)

Related to life-long-learning?

<!-- However, people seem to be good at learning from highly correlated inputs (I actually dont think this is true). I think we use a trick to help us out, we generally have some idea of the space of plausible inputs-outputs and thus we can simulate/imagine the other inputs we are not seeing. -->



When the input distribution is a moving target, samples are correlated in time or ?.

Multi-agent learning
Online learning
Reinforcement learning

Self-play. Only explore subspace (related to diversity)


## Noise



## Privacy

...


## Aggregated/siloed data

...
Need standards?
