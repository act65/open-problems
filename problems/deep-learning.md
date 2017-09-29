Deep learning is really a meta algorithm. Take a set of differentiable layers, compose them together into a hierarchy, use automatic differentiation to efficiently compute gradients w.r.t each layer and stochastic gradient descent to update each layer.
Long story short, it works (as long as you have a lot of labelled data).

So let's apply this approach to as many domains as possible. But, there are some functions that are not differentiable,

- random variables
- discrete variables
- trees (diff boundary trees), graphs
- unknown (ie RL setting)

<!-- Examples; MuProp, ?

differentiable indexing.
differentiable sparse gating -->
