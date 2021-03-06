---
layout: post
title: Specifying goals
category: openproblem
---


<img src=https://images.sciencedaily.com/2016/09/160922124408_1_900x600.jpg height=200 width=300 align="middle"></img>

How to teach.

- Designing curriculums.
- Reward shaping.
- ?

Approximating the oracle.
Getting training signal.
Formalising what we want.
Communicating it to a computer.

How do you determine if the image you are looking at is a lion? Go ahead, ... explain. Ok, now write that process down as a program. Oh... That's really hard.

If we can write what we want down as a clear function/equation (aka formalise), then we can probably optimise it <side>(the constraints being computational)</side>. If not. Hmm.

> __Q__ How can we communicate our goals and technical knowledge more efficiently, while still ensuring we get what we asked for and we are understood?

## Learning by example

Machine learning, specifically supervised learning, allows an alternative approach to specifying what we want. It allows us to 'show' the computer what we want by example. Pairs for images and their labels, ...

Taking this idea further, if we could show some examples of our metric then we could learn that and optimise it? [GANs](https://arxiv.org/abs/1406.2661) seem to be an example of this. I would call this an example of learning the loss function.

## Efficient specification of goals

* Examples take space, equations do not.
* Label complexity
* ?

## Safe specification of goals

> __Q__ Given that natural language is often ambiguous, how can we guarantee safety when the specificatons are ambiguous?

Will need [good priors](?). (this relates to how humans can communicate their goals/knowledge)
https://arxiv.org/abs/1606.06565

## Narrowing search space

Different ways to specify a goal/function:

<!-- What do we mean by specify?
- Choose,
- narrow down,
-

so it is a way to reduce search space.
what about falsification?
-->

* can show by example, (but what if we only know the goal, and not how that relates to inputs? that is just RL, as opposed to SL, where we have pairs.)
* have a function, f, that tells us (true, false, ...) whether y is the goal (where f may or may not be differentiable). UL or SL.
* Reducing possible options. eg. can only pick from some set of functions (e.g. linear, ...).
* randomly...

## Unspecified goals

What about if we dont know what we want? Then we must either;

* specify a process for finding new things,
* simulate all possible goals and then pick out the ones we like.


What if we could specify goals using natural language.

What about the efficient specification of goals? Examples take space, equations do not.

#### Learning the loss function.

Sometimes it can be hard to write down what we want to optimise, if we could just show some examples of our metric then we could learn that and optimise it? [GANs](https://arxiv.org/abs/1406.2661) seem to be an example of this.


## Label complexity

Supervised learning requires annotated data!

Possible (half) solution?
A cheaper way to annotate data. Hierarchical label structures? Interactive exploration of data (that is also fun)?

New and clever ways of extracting annotations from existing datasets. Something like the how unsupervised methods extract labels from the existing data. Train on context, recontruction, ?, real/fake, ...

Projects that satisfy these wants;
* Interactive tensorboard visualisations. Ability to add meta data while viewing the [projector](http://projector.tensorflow.org/).
* ?


Loss functions are usually given to us or tailored for a specific job. Is there some new representation of loss functions that allows;

## First class

A type of algebra that makes it easy to specify goals.

Loss fns as first class fns that can be composed, passed around, traded, ...
Imagine some system, where agents cooperate and compete. Cooperation of competition can be organised by communicating loss functions.

The composition of two loss functions is ?

My goal is A, your goal is B, A and B are similar, let's make babies.
My goal is X, your goal is Y, Y is orthogonal to my X, stay out of my way.

Is there some language that can take loss functions as [first class](https://en.wikipedia.org/wiki/First-class_function) objects which can be passed around, transformed, composed, … ? Thus allowing for [high order](https://en.wikipedia.org/wiki/Higher-order_function) loss functions. Much like functions can be in functional programming (interestingly, we could make a recursive loss functions).

Can we make this into a more general framework, where we can reason about how to compose and decompose parameterised (loss) functions?

<!-- We can do this with tf in some senses? Connecting nets together. We just dont have ideas about what the result will be-->

Problem. How the loss acts on a model is dependent on;

* the variables it is allowed to control,
* the optimiser used, learning rate, momentum, ...
* the data provided,
* ?

##### Transformation

$$
f, g \in \mathcal L \\
\mathcal T: f \rightarrow g \\
$$


$$
\begin{align}
\mathcal A_{\mathcal D}(f) = g \tag{loss fn generates loss fn give a dataset}\\
f \sim g ??? \tag{how are they related}\\
\end{align}
$$


##### Composition

$$
f, g, h \in \mathcal L \\
\circ: f \times g \rightarrow h \\
$$

Maybe $y = P(cat)$? So we reverse the label for $f_{-1}$, thus training on both we would expect the gradients to cancel each other out.


$$
\begin{align}
f(y, t) &= -t \cdot log(y) - (1-t) \cdot log(1-y)  \\
f^{-1}(y, t) &= -t \cdot log(1-y) - (1-t) \cdot log(y)  \\
f \circ f^{-1} &= \mathbb 0  \tag{} \\
\end{align}
$$

* What do we mean when we say we want X and Y? Does that mean we can simply add the loss fns?
* What does the product of two loss fns mean? What if they are applied to different parameters?
* What we really want to know. How will my model/system evolve given the interaction of these loss fns?
* What guarantees are there for finding minima when composing loss fns? Do no harm to each other?!?


* Loss1 of Loss2 ( Loss1(Loss2) )
* Loss1 and Loss2 ( Loss1 + Loss2 )
* ?



## Decomposition.

Decomposing a loss function into many ([dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming)). [DNIs](https://arxiv.org/abs/1608.05343) seem to do this.
The ability to reduce a complex goal into smaller achievable steps is the goal of XXX.

Doing so would allow;
* parallel learning of the different tasks,
* specialisation,
*

Also related to [Feudal nets](https://arxiv.org/pdf/1703.01161.pdf).
The important/cool part is having an actual handle to the subproblems.


## First class losses.

A type of algebra that makes it easy to specify goals.

Loss fns as first class fns that can be composed, passed around, traded, ...
Imagine some system, where agents cooperate and compete. Cooperation of competition can be organised by communicating loss functions.

The composition of two loss functions is ?

* My goal is A, your goal is B, A and B are similar, let's work together for now.
* My goal is X, your goal is Y, Y is orthogonal to my X, stay out of my way.
