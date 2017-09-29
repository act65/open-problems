How can we adapt to structure in the data?
Online optimisation of the processing of a NN to make it more efficient? Writing often used processes into hardware.

Structural adaptation of a model based on structure/patterns in the data.

An example could be; we are learning a linear model and the linear transform can accurately (within some tolerance, or at least more so that other factorisations) be factorised with a cholesky decompoisition. So factorise the linear transform with a cholseky.

<!-- Problem this runs into is 'over' specialisation? What if we were wrong? How can we undo the decision? -->


Or, an oracle looks through the operations being done in our network (multi resolution low level -- addition, exp, ... -- and high level -- svd, QP, ...) and replaces approximations with the closest op. Error of that op still tracked.
