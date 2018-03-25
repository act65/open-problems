Symbolic versus learned?

#### Zero-shot

If one-shot learning is: "Learning from a single example" then zero-shot learning would be: "making a damn good guess".

Given examples about X, can we learn about Y?

A possible hypothesis for how we manage this is that we hypothesise about causes, we create models/explanations, which are occasionally accurate and generalise wonderfully.

#### Transferability

Not only do we care if a problem is learnable from a given function class, but we care if the learned function is transferrable to a different domain that the one it was trained on.

#### When to generalise knowledge

Irregular verbs are an interesting example of something humans seem to learn easily, yet seems to be a very hard problem.

There is an underlying pattern to regular verbs, add a suffix to modify the tense (walk, walked), but irregular very break this rule and must be memorised individually (run, ran).

This is a hard problem. If we are trying to learn a rule with exceptions, from noisy data, how can we know whether a data point represents an exception or noise? When should we try to learna more general model of a subset of the data and when should we memorise inputs?
