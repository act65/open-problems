There are tradeoffs everywhere in machine learning.
You can trade compute for accuracy (quality of gradient estimates, or even compute second order info), or time and memory (recompute vs remember in BPTT), or XX for sanity...
For each given application, the requirements will be different. Sometimes memory is more imporant than time, sometimes vice versa.
Ultimately we would like to tune performance given the requirement of the application.

<!-- Could like to my own work on conserved quantities -->

#### New resources to trade

Tradeoff between;
* number of parameters and "findability" of a good configuration.
* how much compute do I (the learned algorithm) need to spend to achieve a given level of accuracy.

#### Marketplace

Most interestingly, can we let algorithms find their own optimal tradeoffs, by giving them these tradeoffs as regularisers? Like [Adaptive computation time](https://arxiv.org/abs/1603.08983). 
It would be cool to frame this as some sort of marketplace, where resources are traded according to some currency.

#### A conserved quantity?

Is there some underlying quantity that is being conserved while we tradeoff the resouces? Similar to have gravitational poential energy can be traded for kinetic energy, ... What is traded when we trade accuracy for speed?
