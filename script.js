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
window.addEventListener('keypress', function (e) {
  let k = e.key;
  // let k = String.fromCharCode(e.keyCode);
  string1.innerHTML += k;
  document.getElementById('blr').focus();
}, false);