
//////////////////GET ALL BOXES///////////////
var allBoxes;

var board = {
  addClick: (arrayOfElements) => {
    for (var i = 0; i < arrayOfElements.length; i++) {
      var cur = arrayOfElements[i];
      cur.onclick = (event) => {
        if (event.target.innerHTML === '') {
          event.target.innerHTML = state.turn;
          state.change(state.turn);
        } else {
          alert('Already Taken')
        }
      }
    }
  },

  initialize: () => {
    ////////////////ROW ONE///////////////////
    var row1 = document.createElement('tr');
    row1.id = "row1";
    var r1s1 = document.createElement('th');
    r1s1.id = "r1s1";
    r1s1.className = "box";
    var r1s2 = document.createElement('th');
    r1s2.id = "r1s2";
    r1s2.className = "box";
    var r1s3 = document.createElement('th');
    r1s3.id = "r1s3";
    r1s3.className = "box";
    row1.appendChild(r1s1);
    row1.appendChild(r1s2);
    row1.appendChild(r1s3);
    ////////////////ROW TWO/////////////////////
    var row2 = document.createElement('tr');
    row2.id = "row2";
    var r2s1 = document.createElement('th');
    r2s1.id = "r2s1";
    r2s1.className = "box";
    var r2s2 = document.createElement('th');
    r2s2.id = "r2s2";
    r2s2.className = "box";
    var r2s3 = document.createElement('th');
    r2s3.id = "r2s3";
    r2s3.className = "box";
    row2.appendChild(r2s1);
    row2.appendChild(r2s2);
    row2.appendChild(r2s3);
    ////////////////ROW THREE///////////////////
    var row3 = document.createElement('tr');
    row3.id = "row3";
    var r3s1 = document.createElement('th');
    r3s1.id = "r3s1";
    r3s1.className = "box";
    var r3s2 = document.createElement('th');
    r3s2.id = "r3s2";
    r3s2.className = "box";
    var r3s3 = document.createElement('th');
    r3s3.id = "r3s3";
    r3s3.className = "box";
    row3.appendChild(r3s1);
    row3.appendChild(r3s2);
    row3.appendChild(r3s3);

    /////////////////GAME BOARD//////////////////
    var gameBoard = document.createElement('table');
    gameBoard.style.width = '900px';
    gameBoard.id = "gameBoard";
    gameBoard.appendChild(row1);
    gameBoard.appendChild(row2);
    gameBoard.appendChild(row3);


    ////////////BOARD///////////////////
    var boardDiv = document.createElement("div");
    boardDiv.id = "boardDiv";
    boardDiv.appendChild(gameBoard);
    ////////////APPEND///////////////////
    document.getElementById('app').appendChild(boardDiv);
    allBoxes = document.getElementsByClassName('box')
    board.addClick(allBoxes);
  },

  place: (target, piece) => {
    target.innerHTML = piece;
  }
}