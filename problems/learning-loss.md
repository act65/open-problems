Loss functions are usually given to us or tailored for a specific job. Is there some new representation of loss functions that allows;

#### Learning the loss function.

Sometimes it can be hard to write down what we want to optimise, if we could just show some examples of our metric then we could learn that and optimise it? [GANs](https://arxiv.org/abs/1406.2661) seem to be an example of this.

#### Decomposition.

Decomposing a loss function into many ([dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming)). [DNIs](https://arxiv.org/abs/1608.05343) seem to do this.
The ability to reduce a complex goal into smaller achievable steps is the goal of XXX.

Doing so would allow;
* parallel learning of the different tasks,
* specialisation,
*

Also related to [Feudal nets](https://arxiv.org/pdf/1703.01161.pdf).
The important/cool part is having an actual handle to the subproblems.

#### First class losses.

Loss fns as first class fns that can be composed, passed around, traded, ...
Imagine some system, where agents cooperate and compete. Cooperation of competition can be organised by communicating loss functions.

The composition of two loss functions is ?

My goal is A, your goal is B, A and B are similar, let's make babies.
My goal is X, your goal is Y, Y is orthogonal to my X, stay out of my way.
