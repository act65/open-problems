In deep learning all information is represented in finite dimensional vectors spaces/arrays. Can we generalise this to graphs (where an array is just
 a uniform grid graph)?

Why bother? Graphs allow us to represent relations, between nodes. This extra layer of information allows us to represent .

#### Composition

If we have two graphs representing idea __1__ and __2__, then how can we efficiently compose these to integrate their knowledge?
Trivially, we could just join where they share similar nodes? But what if we are working with nodes embedded in some real space, where it is non trivial to check similarity? Or, ? what if __1__ and __2__ are not embedded in the same space, how is it possible to integrate them (it's not?)?

#### Compression

What about compressing a graph? Are there more general connectivity and signal patterns at some lower resoultion? Alternatively, can we generate higher resolution graphs from lower resolution ones? 

How is compressing a graph the same/different to clustering it?

#### Hierarchical

What if we could sketch a graph with a fixed length vector? We could imagine a graph where each node contains an embedding of some other graph. 

Can we construct hierarchical graph, graphs within graphs.
  
#### Construction

How can leared systems interact with, output, read from, ... graph structures. Adjacency matrix feels hack. Want to build into computational primitives, need better libraries?

#### Graph signal processing

?
