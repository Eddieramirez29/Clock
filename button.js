document.getElementById("toggleButton").addEventListener("click", function() {
    var text = document.getElementById("toggleText");
    var icon = document.getElementById("toggleIcon");
  
    if (text.innerHTML === "More") {
      text.innerHTML = "Less";
      icon.classList.add("rotated");
    } else {
      text.innerHTML = "More";
      icon.classList.remove("rotated");
    }
  });
  
  
  
