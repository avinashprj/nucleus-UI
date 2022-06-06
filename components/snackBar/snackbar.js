const snackBarBtn=document.querySelector('#snackBarBtn');
snackBarBtn.addEventListener("click",()=>{
  showSnackBar()
})

function showSnackBar(){
  const snackBarDiv = document.querySelector(".snackbar");
  console.log(snackBarBtn,snackBarDiv)
  snackBarDiv.classList.add("show")
  setTimeout(function(){ snackBarDiv.className = snackBarDiv.className.replace("show", ""); }, 3000);
}
