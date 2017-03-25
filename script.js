document.getElementById("begin").addEventListener("click", function(){
  document.getElementById("header").className = "disappear";
  document.getElementById("query").className = "disappear"
  document.getElementById("query").style.display = "block";
  setTimeout(function(){
    document.getElementById("header").className = "disappear offScreen";

    document.getElementById("query").className = "appear";

  }, 1200);
})



document.getElementById("start").addEventListener("click", function(){
  var text = document.getElementById("theQuestion").value;
  console.log(text);
  document.getElementById("question").textContent = text;
  document.getElementById("board").style.display = "block";
  document.getElementById("query").className = "disappear";
  setTimeout(function(){
    document.getElementById("query").style.display = "none";
    document.getElementById("query").style.transform = "translateX(1600px)";
    document.getElementById("board").className = "moveup";
  },1800);
  setTimeout(function(){
    document.getElementById("board").className = "appear moveup";
  }, 2800)
  return text;
})
