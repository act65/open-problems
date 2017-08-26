Deep learning is a meta algorithm for learning. Take a set of differentiable layers, compose them together into a hierarchy, use automatic differentiation to efficiently compute gradients w.r.t each layer and stochastic gradient descent to update each layer.
Long story short, it works. So let's apply this approach to as many domains as possible.

There are many functions that are not currently differentiable,

- random variables
- discrete variables
- trees (diff boundary trees), Graphs
- unknown (ie RL setting)

Examples; OptNet, MuProp, ?

differentiable indexing.
differentiable sparse gating

What does differentiability buy us?
