//////////////////FUNCTIONALITY/////////////////////
var startHandler = (event) => {
  selectNames();
  app.initialize();
};
////////////////START BUTTON//////////////////////
var startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.innerHTML = 'START_GAME';
startButton.onclick = startHandler;
//////////////////APPEND//////////////////////////
document.getElementById('app').appendChild(startButton);