---
layout: post
title: Better priors
category: openproblem
---

Progress in learning (especially in unsupervised settings or semi-supervised learning) is likely to be made through our ability to specify and incorporate domain specific priors. This is because it is not possible to have a universally efficient algorithms. What we want is a flexible and efficient method (a language) to specify arbitrary priors.


> __Q1__ What different 'types' of prior are there?

> __Q2__ How are they specified?

What different types of prior are there?
Can be in many forms. Transfer, a model, ... ??? How are they specified?


Why do we care? Priors allow us to forgo having to learn potentially complicated relationships and take the priors as given. Assumptions to build on. Thus we should expect better efficiency, in data, in compute, in errors, ... assuming our priors are correct. But, what about when our priors are not correct? How will we know?

## Examples

What domains do we really care about and need to find better priors?
Some examples of priors for learning.

- Chemical priors
- Heirarchical priors
- Local priors
- Smoothness priors
- ?


## Specifying a prior

Want a unified language. But for now we have...

- optimizers
- initialisations
- ?

### Optimisers
(which priors to include in optimisation)

> __Q3__ Which priors can help us avoid poor minima and find minima that generalise well?

Another way of asking the same question, what is the right geometry for learning?
When we update the parameters of a model, how should we do it? Should they be projected onto some manifold which only includes nice solutions? [online learning ref](?)
<!-- Pics of vector fields ![]() -->

> What priors does stochastic gradient descent embody?

[Implicit regularisation in deep learning](https://arxiv.org/abs/1709.01953)

## Case study
> What priors do neural networks embody?

A neural network is the combination of a few distinct ideas.

* Hierarchical composition of layers
* Connectionist
* Linear parameterisation

Why are neural networks better than SVMs, or RBFs, or ...? Are NNs best for every application?
Why is it that (convolutional) neural networks work so well? Hierarchical, local, discontinuous, ?.
Current wisdom hints that local and hierarchical function approximations are better, but we need to make this more rigorous.

## Data
(which priors are visible in the data)

- How is my data structured and which priors are sensible?
- How transferable are priors between different settings?

## A language a-priori?

Above we consider priors in optimisation and priors in approximation separately, but we really want to be able to reason about the priors of our model and training algorithm together.

If we have $p_{model}$ and $p_{train}$ then we could like to be able to compose the such that:
* if they have contradicting priors then ??
* ?

## What is a priors worth?


> How much does a single prior of (say) a DNN explain its ability compared to another DNN without that same prior?


***

Closely related to {{site.baseurl}}/specifying_goals.

> __Q6__ How much does a single prior of (say) a DNN explain its ability compared to another DNN without that same prior?

How can we evaluate a prior? We could propagate error back to the prior and measure its cumulative magnitide?


## Occam's razor

To build from simple to complex. To test simple first. ...
