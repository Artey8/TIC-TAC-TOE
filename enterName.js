////////////////O USER INPUT ELEMENT/////////////////
var oUserName = document.createElement('input');
oUserName.className = 'textBox';
oUserName.id = 'oUserName';
oUserName.placeholder = 'PLAYER O NAME';
oUserName.type = 'text';
oUserName.maxLength = '12';
////////////////X USER INPUT ELEMENT/////////////////
var xUserName = document.createElement('input');
xUserName.className = 'textBox';
xUserName.id = 'xUserName';
xUserName.placeholder = 'PLAYER X NAME';
xUserName.type = 'text';
xUserName.maxLength = '12';
/////////////////////APPEND/////////////////////////
document.getElementById('app').appendChild(oUserName);
document.getElementById('app').appendChild(xUserName);
//////////////FUNCTIONALITY////////////////////////
selectNames = () => {
  var vsBanner = document.createElement('h1');
  vsBanner.id = 'vsBanner';
  vsBanner.innerHTML = `${xUserName.value}:X |VS| ${oUserName.value}:O`
  document.body.prepend(vsBanner);
  oUserName.remove();
  xUserName.remove();
}