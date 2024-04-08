document.getElementById("toggleButton").addEventListener("click", function() {
  let text = document.getElementById("toggleText");
  let icon = document.getElementById("toggleIcon");

  if (text.innerHTML === "More") {
    text.innerHTML = "Less";
    icon.innerHTML = "&#9650;"; 
  } else {
    text.innerHTML = "More";
    icon.innerHTML = "&#9660;";
  }

  let box = document.getElementById("box");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});

  
  
  
