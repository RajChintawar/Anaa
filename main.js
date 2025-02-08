onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


const nobtn = document.getElementById("No")
function fx()
{
  const x = Math.floor(Math.random()*300)+1
  const y = Math.floor(Math.random()*300)+1
  nobtn.style.top = x+"px"
  nobtn.style.left = y+"px"

}
