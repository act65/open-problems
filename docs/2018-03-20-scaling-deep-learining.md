---
layout: post
title: Generalising deep learning
category: openproblem
---

Deep learning is really a meta algorithm.

- Take a set of differentiable layers, compose them together into a hierarchy or some sort of topology.
- Use automatic differentiation to efficiently compute gradients w.r.t each layer
- Finally use stochastic gradient descent to update each layer.

Long story short, it works (as long as you have a lot of labelled data and patience).

So let's apply this approach to as many domains as possible. What is holding us back from scaling this to more problems?

<!-- What do you do with a model once it is trained? How can you compose it with others? -->


## Non-differentiable functions

there are functions that are not differentiable;

- random variables
- discrete variables
- trees (diff boundary trees), graphs
- unknown (ie RL setting)
- logic
- specialist algorithms

<!-- Examples; MuProp, ?

differentiable indexing.
differentiable sparse gating -->


These only make sense in light of adding better priors to make learning cheaper/more interpretable/?


## Differentiable logic / symbols / language

What is reasoning? How does it improve learning?

Allows access to other structured knowledge?

#### Reasoning with learned concepts

Computers can easily reason about symbols. (With the advent of deep learning -- not true...) Computers can learn concepts and attach them to symbols. Thus computers can reason about learned concepts.

[Differentiable ILP](?)

#### Learning to reason

If reasoning is the manipulation of learned concepts, then learning to reason would be: learning different operations/functions to compose, reduce, add, intersect, ... learned concepts. See [SCAN](https://arxiv.org/abs/1707.03389) for the possible solution.

(Learning a model! To get from A to B. [TreeQN](?))




## Big data

Given that we are seeing DL massively scaled across the internet, small wins in efficiency can make a big deal.

Machine learning is about finding patterns in data. Over the last few years datasets have been rapidly increasing in size, and for good reason. The larger the dataset, the more robust and accurate the learned algorithm. However, as these datasets increase in size we start to encounter new problems. Requiring $$$ for electricity, ...
Making ML only for the rich and powerful. We need ...

Dont want to have to train on multi epochs when the size of the dataset is large.
Want sublinear costs in; memory, compute, data,

- Mixture of experts
- Active learning


When you have a lot of data... Unsupervised/reinforcement!

## Graph representations

In deep learning all information is represented in finite dimensional vectors spaces/arrays. Can we generalise this to graphs (where an array is just
 a uniform grid graph)?

Why bother? Graphs allow us to represent relations, between nodes. This extra layer of information allows us to represent .

#### Composition

If we have two graphs representing idea __1__ and __2__, then how can we efficiently compose these to integrate their knowledge?
Trivially, we could just join where they share similar nodes? But what if we are working with nodes embedded in some real space, where it is non trivial to check similarity? Or, ? what if __1__ and __2__ are not embedded in the same space, how is it possible to integrate them (it's not?)?

#### Compression

What about compressing a graph? Are there more general connectivity and signal patterns at some lower resolution? Alternatively, can we generate higher resolution graphs from lower resolution ones?

How is compressing a graph the same/different to clustering it?

#### Hierarchical

What if we could sketch a graph with a fixed length vector? We could imagine a graph where each node contains an embedding of some other graph.

Can we construct hierarchical graph, graphs within graphs.

#### Construction

How can learned systems interact with, output, read from, ... graph structures. Adjacency matrix feels hack. Want to build into computational primitives, need better libraries?

## Metalearning

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

## Hyper parameter optimisation?


Remembering memory
Optimising optimisers
