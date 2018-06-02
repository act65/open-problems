---
layout: post
title:  Gradients in games
category: openproblem
---

__Q__ How will multiple agents interact as they learn? What are the dynamics of a system with with many goals being optimised?
__Q__ How to learn in a changing environment.

## Dynamics

[Gradients in games](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxkYmFsZHV6eml8Z3g6MWEyNzI0ZTcyNzEzMzA5ZQ), [The Mechanics of n-Player Differentiable Games](https://arxiv.org/abs/1802.05642)

## Motivation

### Neuroscience

* Bootstrapping loss functions (term from [Integration of DL and NS](https://arxiv.org/abs/1606.03813)
* [PFC as meta-RL](https://deepmind.com/blog/prefrontal-cortex-meta-reinforcement-learning-system/). An expensive loss function is used to construct a heuristic version that has been fit to data. How does the parent loss fn relate to the child loss fn?
* [Ultrafast neuronal imaging of dopamine dynamics with designed genetically encoded sensors](http://science.sciencemag.org/content/early/2018/05/30/science.aat4422.full)

### Economics

* ?

### AI

* [Compsing neural networks for QAs](https://arxiv.org/abs/1601.01705), [Predicting parameters](https://arxiv.org/abs/1306.0543)
* [Decoupled neural interfaces](http://arxiv.org/abs/1608.05343) decompose a global loss function into local loss functions (the functions learnt by the synthetic gradient predictors — the $M_i$s)
