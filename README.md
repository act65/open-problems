<!--
- Why is it important? What is it? Why is it a problem? Motivation!
- Related work.
- Settings

Want;
- motivations to be super succint and clear
- related work to be comprehensive and its analysis insightful.
-->

* [Real time prediction](#real-world-prediction-and-learning)
* [Distributed learning](#distributed-learning)
* [Understanding representations](#understanding-representations)
* [Flexible credit assignment](#flexible-credit-assignment)
* [Learning complex functions](#learning-complex-functions)
* [Structured learning](#structured-learning)
* [Better priors](#better-priors)
* [Will it differentiate?](#will-it-differentiate)
* [Learning to learn](#learning-to-learn)



# Real world prediction and learning

Humans evolved in a world where we needed to make predictions quickly, given little information and resources.
Having to learn and predict with the same set of minimal resources. Use for prediction now, and use for consolidation later?


- Aligning delayed signals with each other and rewards.
- Sharing resources for learning and inference.
- Predictive processing. Error correcting (surfing uncertainty)
-

# Distributed learning

Fundamentally, learning must be distributed. This is because; computation and storage are fundamentally distributed. Physics tells us there is a universal limit to information density.
Typically, a computers architecture abstracts away the need to consider this. However, ... we could be smarter in designing our system to reflect the computations done in learning.

<!-- distributed in space or time or ?? -->

- Federated optimisation.
- TPU, GPU,
- neuromorphic computing

What if;
- inhomogenous compute, how can each node contribute most effectively? (seems close to multi-learner-systems?)
- low communication bandwidth,

# Multi learner systems

Why is this important?
We want modular learning system, this means we need multiple loss fns with different learners.
But how should learners interact to minimize a loss. What happens if some learner want to maximise the loss as well.


- Dynamical systems
- Mechanism design
- Mutli-objective optimisation
- Type systems(?)

<!-- how does this relate to reasoning??? -->

# Understanding representations

Why are neural networks better than SVMs, or RBFs, or ...? Are NNs best for every application?
What are their downfalls? How can we make them more efficient? What is it that they are doing that is important? Answers to these questions should help us build better learners.

- Adversarial examples.
- Interpreting learned ...


# Flexible credit assignment




# Learning complex functions

Most real world problems are a little more complicated than differentiating between pictures of cats and dogs. And as such the require far more knowledge (/intelligence).
How can we design

- Curriculum,
- long-term and deep,
-

# Structured learning

Extending learning to different data types, espeically data types with more
structure. Graphs,


# Better priors



# Will it differentiate?
<!-- this seems close to flexible credit assignment? and structured learning? -->

There are many functions that are not currently differentiable,
What does differentiability buy us?

- trees (diff boundary trees)
- Graphs

differentiable indexing.
differentiable sparse gating


# Learning to learn

If computers are ever going to take over the world, they will need to be able to learn to learn. This kind of self-optimisation, is what I hold dear and I believe that makes us 'intelligent'.
Learning is great, as we are currently finding out, however, there have been a few different learning algorithms over the years. First nature started out with natural selection, but it is incredibly slow O(billions of years...).

All it really means is understanding a given learning problem in more depth so we can include 'better' inductive biases in the optimiser.

[Automated Curriculum Learning for Neural Networks](https://arxiv.org/abs/1704.03003)
[Meta Networks](https://arxiv.org/pdf/1703.00837.pdf)
[Learning to optimize](https://doi.org/10.3200/JMBR.36.3.339-351)
[Learning to reinforcement learn](http://arxiv.org/abs/1611.05763)
[Learning to learn by gradient descent by gradient descent](http://arxiv.org/abs/1606.04474)

Remembering memory
Optimising optimisers

<!-- and some level this is related to better priors -->

# Scaling machine learning (BIG DATA)

Machine learning is about finding patterns in data. Over the last few years datasets have been rapidly increasing in size, and for good reason. The larger the dataset, the more robust and accurate the learned algorithm. However, as these datasets increase in size we start to encounter new problems. Requiring $$$ for electricity, ...
making ML only for the rich and powerful. We need ...

Dont want to have to train on multi epochs when the size of the dataset is large.
Want sublinear costs in; memory, compute, data,

- Mixture of experts
- Active learning
-

# Trade-offs

It is well known that you can trade compute for accuracy (quality of gradient estimates, or even compute second order info), or time and memory (recompute vs remember in BPTT), or ...
For each given application the requirements will be different. Sometimes memory is more imporant than time, sometimes vice versa.
Ultimately we would like to learn the most efficient behaviour given the requirement of the application.

- [adaptive computation time]()
-


# Privacy

Probably the most practical problem to solve.


# Question asking

The ability to generate informative queries can save a lot of compute (ref?).



- creativity
- experiment design
- hypothesis generation
- active learning
