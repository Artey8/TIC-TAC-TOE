///////////CLICK HANDLER////////////////
var endHandler = (event) => {
  console.log('Game_Ended')
  state.change('stopped');
}
//////////////ELEMENT//////////////////////
var endButton = document.createElement('button');
endButton.id = 'endButton';
endButton.innerHTML = 'END_GAME';
endButton.onclick = endHandler;
///////////////APPEND////////////////////////
document.getElementById('app').appendChild(endButton);