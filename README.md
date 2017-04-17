

* [Real time prediction](#real-time-prediction-and-learning)
* [Distributed learning](#distributed-learning)
* [Understanding representations](#understanding-representations)
* [Flexible credit assignment](#flexible-credit-assignment)
* [Learning complex functions](#learning-complex-functions)
* [Structured learning](#structured-learning)
* [Better priors](#better-priors)
* [Will it differentiate?](#will-it-differentiate)
* [Learning to learn](#learning-to-learn)

***
<!--
- Why is it important? What is it? Why is it a problem? Motivation!
- Related work.
- Settings

Want;
- motivations to be super succint and clear
- related work to be comprehensive and its analysis insightful.
-->

# Real time prediction and learning

Humans evolved in a world where we needed to make predictions quickly, given little information and resources.
Having to learn and predict with the same set of minimal resources. Use for prediction now, and use for consolidation later?


- Aligning delayed signals with each other and rewards.
- Sharing resources for learning and inference.
- Predictive processing. Error correcting (surfing uncertainty)
-

# Distributed learning

Fundamentally, learning must be distributed. This is because; computation and storage are fundamentally distributed. Typically, a GPUs architecture abstracts away the need to consider this. However, ...

Federated optimisation.

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

# Understanding representations

Why are neural networks better than SVMs, or RBFs, or ...? Are NNs best for every application?
What are their downfalls? How can we make them more efficient? What is it that they are doing that is important?

- Adversarial examples.
- Interpreting learned ...


# Flexible credit assignment




# Learning complex functions

- Curriculum,
- long-term and deep,
-

# Structured learning

Extending learning to different data types, espeically data types with more
structure. Graphs,
