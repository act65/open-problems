---
layout: post
title: Specifying goals
category: openproblem
---

How to teach.

- Designing curriculums.
- Reward shaping.
- ?

Approximating the oracle.
Getting training signal.
Formalising what we want.
Communicating it to a computer.

## Learning by example

Insert pic of lion.

How do you determine if the image you are looking at is a lion?
Ok, write that process down as a program. Oh... That's really hard.

If we can write what we want down as a clear function/equation, then we can probably optimise it. If not. Hmm.

Machine learning allows an alternative approach to specifying what we want. It allows us to 'show' the computer what we want by example. Pairs for images and their labels, ...

It is not always possible to use examples to show the computer what we want, for examples learning p(x). GANs? Allow us to extend this ...
<!-- What about generators of goals? (that RL stuff?) -->

In RL our goal is some game state/set of states. It seems reasonable to be able to compress this set of game states into some sort of hidden representation that we can compare against. Or communicate to others.
<!-- But if you set the goal as a game state, then how does improvement make sense? Once the state has been achieved there is nothing left to do...? -->

However. What about when the goal is some process or function or algorithm? How can we represent sets of these? By their input/output? ...??


<!-- This is closely related to learning loss functions! -->

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

A type of algebra that makes it easy to specify goals.

Loss fns as first class fns that can be composed, passed around, traded, ...
Imagine some system, where agents cooperate and compete. Cooperation of competition can be organised by communicating loss functions.

The composition of two loss functions is ?

My goal is A, your goal is B, A and B are similar, let's make babies.
My goal is X, your goal is Y, Y is orthogonal to my X, stay out of my way.
