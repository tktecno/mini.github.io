let button = document.querySelectorAll('button');
// let string = document.getElementById('padd');
let string1 = document.getElementById('pdd');

for(intem of button)
{
  intem.addEventListener('click',(e)=>{
    string1.innerHTML += e.target.innerText;
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
    string1.innerText = string1.innerText.substring(0,string1.innerText.length-1);
    // console.log(string1.innerText.length);
  }
  else if(e.key==" ")
  {
    string1.innerHTML += " ";
  }
  else if(e.keyCode>=65)
  {
    let k = e.key;
    string1.innerHTML += k;
  }
  console.log(e);
  document.getElementById('blr').focus();
}, false);