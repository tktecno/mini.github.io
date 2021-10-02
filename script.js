let button = document.querySelectorAll('button');
let string = document.getElementById('pdd');

for(intem of button)
{
  intem.addEventListener('click',(e)=>{
    string.innerHTML += e.target.innerText;
    document.getElementById('blr').focus();
  });
}
function doWhichKey(e) {
  e = e || window.event;
  let charCode = e.keyCode || e.which;
  return String.fromCharCode(charCode);
}
window.addEventListener('keydown', function (e) {
  if(e.key=='Backspace')
  {
    string.innerText = string.innerText.substring(0,string.innerText.length-1);
    // console.log(string1.innerText.length);
  }
  else if(e.key==" ")
  {
    string.innerHTML += " ";
  }
  else if(e.keyCode>=65)
  {
    let k = e.key;
    string.innerHTML += k;
  }
  console.log(e);
  document.getElementById('blr').focus();
}, false);
