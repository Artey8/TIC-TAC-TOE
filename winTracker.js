var xWins = document.createElement('h1');
xWins.className = 'winCount';
xWins.id = 'XWins';
xWins.innerHTML = 'X WINS: ';
document.getElementById('app').appendChild(xWins)
var oWins = document.createElement('h1');
oWins.className = 'winCount';
oWins.id = 'OWins';
oWins.innerHTML = 'O WINS: ';
document.getElementById('app').appendChild(oWins);


var xWinCount;
var oWinCount;
var renderCount = () => {
  if (!document.getElementById('xWinCount')) {
    xWinCount = document.createElement('h1');
    xWinCount.id = 'xWinCount'
    xWinCount.innerHTML = String(state.XWins);
    xWins.appendChild(xWinCount);

    oWinCount = document.createElement('h1');
    oWinCount.id = 'oWinCount'
    oWinCount.innerHTML = String(state.OWins);
    oWins.appendChild(oWinCount);
  } else {
    xWinCount.innerHTML = String(state.XWins);
    oWinCount.innerHTML = String(state.OWins);
  }

}
