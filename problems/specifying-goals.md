Insert pic of lion.

How do you determine if the image you are looking at is a lion?
Ok, write that process down as a program. Oh... That's really hard.

If we can write what we want down as a clear function/equation, then we can probably optimise it. (how?) If not. Hmm.

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

More abstractly, how can two agents (that work differently) communicate their goals/processes?
