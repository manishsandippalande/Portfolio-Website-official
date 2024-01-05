document.addEventListener("DOMContentLoaded", function() {
  
  const lineicon =  document.querySelector(".linemenu svg")
  const navoptions = document.getElementById("nav-options")
  const left = document.getElementById("left")
  const poster = document.querySelector(".poster img")
  const closebtn = document.getElementById("close")
  
  
  
  lineicon.addEventListener("click" , function(){
    
    navoptions.style.display="flex"
    closebtn.style.display="block"
    left.style.margin = "9vh 0vh 0vh 0vh"
  })
  closebtn.addEventListener("click", function(){
    closebtn.style.display="none"
    navoptions.style.display="none"
    left.style.margin = "0vh"
    poster.style.margin = "0vh";
  })
});
