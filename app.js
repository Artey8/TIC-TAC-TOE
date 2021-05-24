///////////////////GAME STATE/////////////////////////////
var state = {
  XWins: 0,
  OWins: 0,
  turn: 'X',
  game: 'stopped',
  ///////////////////HANDLES STATE CHANGES/////////////////
  change: (change1) => {
    if (change1 === 'CATSGAME') {
      state.game = 'CATSGAME';
      app.victory();
    }
    if (change1 === 'OWINS') {
      state.game = 'OWINS';
      state.OWins++;
      app.victory();
    }
    if (change1 === 'XWINS') {
      state.game = 'XWINS';
      state.XWins++;
      app.victory();
    }
    if (change1 === 'O') {
      state.turn = 'X';
      app.displayTurn();
      app.updateMatrix();
      app.checkForWin();
    }
    if (change1 === 'X') {
      state.turn = 'O';
      app.displayTurn();
      app.updateMatrix();
      app.checkForWin();
    }
    if (change1 === 'playing') {
      document.getElementById('startButton').style.display = 'none';
      document.getElementById('endButton').style.display = '';
      board.initialize();
      app.displayTurn();
      state.game = change1;
    }
    if (change1 === 'stopped') {
      document.getElementById('startButton').style.display = '';
      document.getElementById('endButton').style.display = 'none';
      if (document.getElementById('boardDiv')) {
        document.getElementById('boardDiv').remove();
        app.victory('off');
        app.displayTurn('off');
      }
      state.game = change1;
    }
  }
};
////////////////////APP OBJ///////////////////////////////////////
////////////////////APP OBJ///////////////////////////////////////
////////////////////APP OBJ///////////////////////////////////////
var app = {
  Oplayer: '',
  Xplayer: '',
  ///////////////////INITIALIZE FUNCTION//////////////////////
  initialize: () => {
    console.log('Game_Started');
    //This will make it so the game can only start once
    state.change('playing');
    vsBanner = document.getElementById('vsBanner').innerHTML;
    app.Xplayer = vsBanner.split(':')[0] || '';
    app.Oplayer = vsBanner.split('|')[2].slice(0, vsBanner.split('|')[2].indexOf(':')) || '';
    renderCount();
  },
  //////////////////////DISPLAY WHOS TURN IT IS////////////////
  displayTurn: (off) => {
    if (off) {
      document.getElementById('turnTitle').remove();
      return;
    }
    var oldTurnTitle = document.getElementById('turnTitle');
    if (oldTurnTitle) {
      oldTurnTitle.remove();
    }
    var turnTitle = document.createElement('h1');
    turnTitle.id = 'turnTitle';
    turnTitle.innerHTML = state.turn + '\'s Turn';
    document.getElementById('app').prepend(turnTitle);
  },
  ////////////////////CHECK FOR WIN FUNCTION/////////////////
  checkForWin: () => {
    for (var k in app.matrix) {
      var currentTally = '';
      for (var i = 0; i < app.matrix[k].length; i++) {
        currentTally += app.matrix[k][i];

      }
      if (currentTally === 'OOO') {
        state.change('OWINS');
      } else if (currentTally === 'XXX') {
        state.change('XWINS')
      }
    }
  },
  //////////////////MATRIX OBJECT/////////////////////////
  matrix: {
    row1: [],
    row2: [],
    row3: [],
    col1: [],
    col2: [],
    col3: [],
    diag1: [],
    diag2: [],
  },
  /////////////////////UPDATE MATRIX FUNCITONS////////////////
  updateMatrix: () => {
    //HANDLES ROWS//
    var catsGame = true;
    var y = 1;
    var x = 1;
    while (y < 4) {
      var cur = document.getElementById(`r${y}s${x}`).innerHTML
      if (cur === '') {
        catsGame = false;
      }
      app.matrix[`row${y}`][x - 1] = cur;
      if (x === 3) {
        y++;
        x = 1;
      } else {
        x++;
      }
    }
    //HANDLES COLULMS//
    y = 1;
    x = 1;
    while (x < 4) {
      var cur = document.getElementById(`r${y}s${x}`).innerHTML
      app.matrix[`col${x}`][y - 1] = cur;
      if (y === 3) {
        x++;
        y = 1;
      } else {
        y++;
      }
    }
   app.updateDiags();
   //HANDLES CATSGAMES//
   if (catsGame) {
    state.change('CATSGAME');
   }
  },
  //////////////////UPDATE DIAGNOLS IN MATRIX////////////////////////
  updateDiags: () => {
    var dx = 1;
    var dy = 1;
    while (dx < 4) {
      var cur = document.getElementById(`r${dy}s${dx}`)
      app.matrix.diag1[dx - 1] = cur.innerHTML;
      dx++;
      dy++;
    }
    dx = 1;
    dy = 3;
    while (dy > 0) {
      var cur = document.getElementById(`r${dy}s${dx}`)
      app.matrix.diag2[dx - 1] = cur.innerHTML;
      dx++;
      dy--;
    }
  },
  ///////////////////FUNCTION FOR HANDLING VICTORY/////////////////////
  victory: (off) => {
    if (off && document.getElementById('victoryBanner')) {
      document.getElementById('victoryBanner').remove();
      return;
    } else {
      if (off) {
        return;
      }
    }
    var victoryBanner = document.createElement('h1');
    var winningPlayer = app[`${state.game[0]}player`];
    console.log(winningPlayer);
    victoryBanner.innerHTML = `${state.game[0]}:${winningPlayer} WINS`;
    victoryBanner.id = "victoryBanner";
    document.getElementById('app').appendChild(victoryBanner);
    state.turn = state.game[0];
    renderCount();
    setTimeout(state.change.bind(null, 'stopped'), 1500)
  }

};
state.change('stopped')