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
  document.getElementById("board").style.display = "flex";
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

var board = document.getElementById("board");

board.addEventListener("click", function(e){
  if (e.target.classList.contains("sign")){
    console.log("Yes")
    addingLiItem(e);
  }
})



function addingLiItem(part){
  board.style.filter="blur(5px)";
  var boardInput = document.getElementById("boardInput");
  boardInput.style.display="block";
  console.log(part)
  var trait = part.target.parentNode.parentNode.id;
  boardInput.children[0].textContent = "What would you like to add to the " + trait + " box?";
  var place = part.target.parentNode.nextElementSibling;
  var length = place.children.length;

  function submission(){
    if (this.textContent == "Cancel"){
      board.style.filter="";
      document.getElementById("boardInput").style.display="none";
      return;
    }else{
      board.style.filter="";
      var item = document.getElementById("inputText").value;
      document.getElementById("boardInput").style.display="none";
      var li = document.createElement("li");
      li.setAttribute("class", "traitItem");
      li.textContent = item;
      place.appendChild(li);
      document.getElementById("inputText").value = "";
    }
  }
  document.getElementById("cancel").addEventListener("click", submission);
  document.getElementById("add").addEventListener("click", submission);



}
