function showImage() {
    var image = document.querySelector(".myImg");
    if (image.style["display"] = "block"){
        console.log(image.style["display"]+"ihihih")
        image.style["display"] = "none";}
    else if (image.style["display"] = "none"){
        console.log(image.style["display"]+"ahahahah")
        image.style["display"] = "block";
    }
  }
  
  // add event listener to text
  var el = document.querySelector("#item");
  el.addEventListener("click", showImage, false);