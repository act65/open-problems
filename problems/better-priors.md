Progress in learning (especially in unsupervised settings) is likely to be made through our ability to specify domain specific priors. This is because it is not possible to have a universally efficient algorithms.

What we need is better, more flexible and efficient, ways to specify arbitrary priors on our models. [Adversarial autoencoders](https://arxiv.org/abs/1511.05644) are an example of this, where we are able to specify priors by example. 

Why do we care? Priors allow us to forgo having to learn potentially complicated relationships and take the priors as given. Assumptions to build on. Thus we should expect better efficiency, in data, in compute, in errors, ... assuming our priors are correct. But, what about when our priors are not correct? How will we know?

What domains do we really care about and need to find better priors? How transferable are priors between different settings?

