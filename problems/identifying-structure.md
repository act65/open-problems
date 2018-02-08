Can we adapt our computations to manipulate structure in our data?
We could adaptively choose the hardware/representations we are using based upon operations we are calculating.

For example: online optimisation of the processing of a NN to make it more efficient. Writing often used processes into hardware.

Structural adaptation of a model based on structure/patterns in the data.

For example;

* we are learning a linear model. It turns out the linear transform can accurately (within some tolerance, or at least more so that other factorisations) be factorised with a cholesky decomposition. So replace the linear transform with a cholseky decomposition.
* our cloud service is being queried with millions of cosine similarity computations, write X cosine computations into hardware and use them.

<!-- Problem this runs into is 'over' specialisation? What if we were wrong? How can we undo the decision? -->

In general, an oracle looks at the operations being done in our network (multi resolution low level -- addition, exp, ... _hardware_ -- and high level -- svd, QP, ... _software_) and replaces approximations with the closest op. Error of that op could still be tracked.
