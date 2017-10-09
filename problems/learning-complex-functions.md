Most real world problems are a little more complicated than differentiating between pictures of cats and dogs. 
How can we learn complex functions (while remaining efficient?).

What make a function complex? 
* The inter-relatedness of its input variables? So a function with many independent/separable components is not complex? 
* the length of dependencies,
* the raw amount of possible cases/knowledge/information
* ?

Firstly, we will need to construct learnable classes of complex function, however, this is the problem! To capture many different types of complex function we need ... ??? exponentially large space. Thus complex functions are harder to approximate as there are more candidates to search through. We need more priors to help constrain this...

There are some approaches to this problem and they largely boil down to something related to Occam's razor. Start simple and build on that.

* Curriculum, (two types? target and capacity?)
* long-term and deep,
* Constructing more complex fns from simple ones. Starting with the simplest hypotheses.
