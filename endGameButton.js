var endHandler = (event) => {
  console.log('Game_Ended')
  state.change('stopped');
}
var endButton = document.createElement('button');
endButton.id = 'endButton';
endButton.innerHTML = 'END_GAME';
endButton.onclick = endHandler;

document.getElementById('app').appendChild(endButton);