How does the symmetry in a dataset/problem get reflected in the functions learned that solve said problem?

Why do we even care about invariance? A definition of a high level representation is could be that the more signals (except for the one we care about) a variable is invariant to, the higher level it is.

#### Weight sharing and invariance

Are there clever ways to share weights so that our networks are invariant to other transforms? Which transforms do we even want to be invariant to?

Given that [relation networks](https://arxiv.org/abs/1706.01427) share weights across each relation, what is it we are invariant to?

#### A toolkit for different problems

If we knew the symmetries present in our data, rotational, translational, ?,
and we had different 'layers' that were invariant to these operations we could easily tailor deep networks to our problem.

#### Approximate invariance

Rather that building invariance into our network, eg avg pooled cnns -> local translational invariance, how can we make it easier to learn these invariances from the data?

#### Jacobians

Invariance is invariably a statement about the jacobian of a function. If a function is invariant to x the we know that df/dy = 0. So can we find structure and/or symmetry in the jacobians of our neural networkds that helps us understand what they have learned? Alternatively, can we impose structure on the jacobian to regularise for different invariances?

#### Noether's theorem

Noether's theorem states (roughly and with a few caveats) that if a functional is invariant to some transform then there is some underlying conserved quantity.
Can this logic be applied to weight sharing in neural networks? What does a convolutional neural network conserve?
