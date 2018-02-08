Deep learning is really a meta algorithm. Take a set of differentiable layers, compose them together into a hierarchy, use automatic differentiation to efficiently compute gradients w.r.t each layer and finally use stochastic gradient descent to update each layer.
Long story short, it works (as long as you have a lot of labelled data, compute and patience).

So let's apply this approach to as many domains as possible. But, there are functions that are not differentiable;

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



## Big data

Given that we are seeing DL massively scaled across the internet, small wins in efficiency can make a big deal.

Machine learning is about finding patterns in data. Over the last few years datasets have been rapidly increasing in size, and for good reason. The larger the dataset, the more robust and accurate the learned algorithm. However, as these datasets increase in size we start to encounter new problems. Requiring $$$ for electricity, ...
Making ML only for the rich and powerful. We need ...

Dont want to have to train on multi epochs when the size of the dataset is large.
Want sublinear costs in; memory, compute, data,

- Mixture of experts
- Active learning


When you have a lot of data... Unsupervised/reinforcement!
