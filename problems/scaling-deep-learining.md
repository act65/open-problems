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
