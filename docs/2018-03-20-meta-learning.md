---
layout: post
title: Meta learning
category: openproblem
---

What do we mean by metalearning? Learning at a higher level of abstraction?
Something more general? That doesnt sound like a strong definition.

What is the problem!?
> Anywhere we use heuristics we can apply meta learning (Jeff Dean)

When applied to learning, this paradigm looks like; learning to learn, learning to teach, learning hyperparameters, but when applied elsewhere ...?

<!-- Closely related to better-priors? Except now we are trying to learn the priors? -->

The general approach seems to be, learn across many domains and distill into a single model.

[Distral](https://deepmind.com/research/publications/distral-robust-multitask-reinforcement-learning/), [Impala](https://deepmind.com/blog/impala-scalable-distributed-deeprl-dmlab-30/), ... which achieve generality by mixing gradients or batches.

## Learning to learn

If computers are ever going to take over the world, they will need to be able to learn to learn. This kind of self-optimisation, is what I hold dear and I believe that makes us 'intelligent'.
Learning is great, as we are currently finding out, however, there have been a few different learning algorithms over the years. First nature started out with natural selection, but it is incredibly slow O(billions of years...). Evolution then learned to be more efficient at learning, it invented malleable nervous systems to handle the faster adaptation needed to survive.

All it really means is understanding a given learning problem in more depth so we can include 'better' inductive biases in the optimiser.

* [Automated Curriculum Learning for Neural Networks](https://arxiv.org/abs/1704.03003)
* [Meta Networks](https://arxiv.org/pdf/1703.00837.pdf)
* [Learning to optimize](https://doi.org/10.3200/JMBR.36.3.339-351)
* [Learning to reinforcement learn](http://arxiv.org/abs/1611.05763)
* [Learning to learn by gradient descent by gradient descent](http://arxiv.org/abs/1606.04474)
* [Learning to learn without gradient descent by gradient descent](http://proceedings.mlr.press/v70/chen17e.htm)

## Learning to teach

??

## Hyper parameter optimisation?


Remembering memory
Optimising optimisers

#### One-shot

We (seem to) have the ability to learn from a single example. How is this possible? Can we get computers to do it?

Trivially, this is just memorisation. The interesting part comes from trying to achieve a sub-linear memory footprint, aka some sort of online compression. And this is where we get back to deep learning. We need to pick some method to compress these examples we are shooting, and deep learning seems like a decent candidate, except for its data complexity.

Most definitions of learning (e.g. PAC) include some guarantee that a single example should not change the output of the learning algorithm by more than epsilon. This seems to preclude the ability to do one-shot learning?
