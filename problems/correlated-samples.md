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
