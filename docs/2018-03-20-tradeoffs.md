---
layout: post
title: Tradeoffs
category: openproblem
---

There are tradeoffs everywhere in machine learning.
You can trade compute for accuracy, or deep learning for sanity... (for example; you can trade the quality of gradient estimates -- batch size -- for a lower memory footprint. Or trade time and memory as in recompute vs remember in BPTT).
For each given application, the requirements will be different. Sometimes memory is more imporant than time, sometimes vice versa.
Ultimately we would like to tune performance given the requirement of the application.

__Q__ What would an interface for doing this look like?

$$
Loss = resource1 + resource2 + ...\\
Loss = \alpha_1 resource1 + \alpha_2 resource2 + ...
$$

Solution. Pick some hyperparameters $\alpha$ according to how you care about the resources and let the optimisation find a soluion.

Not ideal in a few ways:

- No guarantees.
- Want to be able to do this in one shot. Rather than having to retrain given a new setting.

#### New resources to trade

Tradeoff between;
* number of parameters and "findability" of a good configuration.
* how much compute do I (the learned algorithm) need to spend to achieve a given level of accuracy.

#### Marketplace

Most interestingly, can we let algorithms find their own optimal tradeoffs, by giving them these tradeoffs as regularisers? Like [Adaptive computation time](https://arxiv.org/abs/1603.08983).
It would be cool to frame this as some sort of marketplace, where resources are traded according to some currency.

#### A conserved quantity?

Is there some underlying quantity that is being conserved while we tradeoff the resouces? Similar to have gravitational poential energy can be traded for kinetic energy, ... What is traded when we trade accuracy for speed?
