---
layout: post
title: Sharing and symmetry
category: openproblem
---

> __Q1__ How do the symmetries in a problem get reflected in the solutions to that problem?
What does the symmetry in a dataset, $(x, y)$, imply about the architectures that will efficiently learn the data?

At the heart of symmetry is the idea of invariance. We say that an object $o$ has symmetry under a transform $t: X \rightarrow X$ if the transform preserves some 'essence' of the object.

Why do we even care about invariance? A definition of a high level representation is could be that the more signals (except for the one we care about) a variable is invariant to, the higher level it is.

The problem is;
* one of efficiency? The more symmetry a network has (do CNNs have more symmetry than NNs) the less data required to train it (assuming the symmetry is also represented in that data).
* Interpretability.

## Symmetry and weight sharing in neural networks

 or $f(t \circ x) = f(x) \circ f(t)$. What about homomorphisms!?!?

Define equivariance as $f(t(x)) = t(f(x))$. Applying a CNN to a leftward shift of an image is the same as applying the CNN and then shifting the resulting fmap.
<side>(this is really just the definition of !?)</side>

Neural networks can capture symmetry by sharing weights over a dimension of the input. This gives equivariance as defined above.

To get invariance we can sum over that dimension.

<side>(_For example, convolutional neural networks embody symmetry under spatial translations because they share parameters across space_).</side>

> __Q__ Are there clever ways to share weights so that our networks are invariant to other transforms? Which transforms do we even want to be invariant to?

> __Q__ How can we build rotational symmetry into (convolutional) neural networks?

Cite some work here. Super parctial question. Maybe go into why it is computational difficult.

> __Q__ Given that [relation networks](https://arxiv.org/abs/1706.01427) share weights across each relation, what is it we are invariant to?
#### A toolkit for different problems

If we knew the symmetries present in our data, rotational, translational, ?,
and we had different 'layers' that were invariant to these operations we could easily tailor deep networks to our problem.

#### Approximate invariance

Rather that building invariance into the structure of our network (for example average pooled cnns across spatial dimensions to give (local) translational invariance).

> __Q__ How can we learn symmetries from data? How can we construct functions with these symmetries.

While vanilla CNNs do not have rotational symmetry built into their architecture, they learn to be approximately invariant to rotation (citation!).   

## Noether's theorem

Noether's theorem states (roughly and with a few caveats) that if a functional is invariant to some transform then there is some underlying conserved quantity.

> __Q__ Can this concept of conserviation under symmetry be applied to weight sharing in neural networks? What does a convolutional neural network conserve? p(y)?

## Representations, information, homomorphisms, ...

Want our representation to be as simple as possible, while capturing all the 'important' aspects of the data.

Info bottleneck. ?. ?.

#### Jacobians

Invariance is a statement about the jacobian of a function. If a function is invariant to x the we know that df/dx = 0. So can we find structure and/or symmetry in the jacobians of our neural networks that helps us understand what they have learned? Alternatively, can we impose structure on the jacobian to regularise for different invariances?
