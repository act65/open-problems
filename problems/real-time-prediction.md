Humans evolved in a world where we needed to make predictions quickly, given little information and resources. Main problems;

#### Aligning delayed signals/rewards

Image that the vision system might process info within 0.1ms, but the auditory system processed it in 0.5ms. How can we align these two pieces of information, to build a full model of our environment?
And, given that there was a delay in when; we percived, and acted, recieved (/percieved) a reward how can we assign credit to act single choice we made in between?

#### Shared resources

Imagine a system that has to learn and predict with the same set of minimal resources.
An obvious strategy might be to: predict now, consolidate/learn later? Which seems familiar?

#### Complex functions

Processing complex functions cause a delay in response. A way around this is to attempt to predict the future and your next step (do the computation early rather than reactively).
This also allows correction/response to happen faster, as we dont need to percieve what is going on (if we are right), we can just focus on where we predicted wrong and allocate attention/compute there.
