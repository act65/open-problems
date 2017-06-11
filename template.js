var baseurl = "https://github.com/act65/open-problems/tree/master/problems/";
// want to read these from the file...
// and ther text content...
var array = ["better-priors", "falsifying-hypotheses",
             "priors-for-learing", "trade-offs",
             "big-data", "identifying-structure",
             "real-time-prediction", "understanding-representations",
             "creative-exploration", "learning-complex-functions",
             "sketching-models", "deep-learning",
             "learning-to-learn", "specifying-goals",
             "distributed-learning", "multi-agent-systems",
             "structured-learning"];

for(i = 0; i < array.length; i++)
{
  var para = document.createElement("P");
  var hyperlink = document.createElement("a");
  var text = document.createTextNode(array[i]);
  hyperlink.href = baseurl+array[i]+".md";
  hyperlink.appendChild(text)
  para.appendChild(hyperlink);
  document.body.appendChild(para);
}
