What if there was a high level language for describing what a NN does/has learn? It could then make sense to efficiently communicate this, or to store it in compressed form, or ...?

Passing around models as a first class function. WHat about composing different learned models?

Given enough trained models, and their respective data. I could make sense to learn a sketch of each!?


More related to first class models/nets.

## Meta-cognitive nets. 

Each networks/predictor should have;

* a callable fn f:x->y.
* a sketch of the inputs, x that it was trained on.
* some belief/knwledge about which labels is it good at. and which data is requires to get better at others.
* some descrption of what it uses to label a input, the method, how. what it pays attention to and how it processes it.
* ?
