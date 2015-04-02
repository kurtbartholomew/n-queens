/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  n = n || 4;
  var results = [];
  for (var i = 0; i < n; i++) {
    results.push([]);
    for (var j = 0; j < n; j++) {
      if (i === j) {
        results[i][j] = 1;
      } else {
        results[i][j] = 0;
      }
    }
  }

  /* DEREK'S MESS
  // var board = new Array(n * n);
  // var tracker = _.range(n * n);
  // for (var rook = 0; rook < n; rook++) {
  //   var current = tracker[Math.floor(Math.random() * tracker.length)];
  //   board[current] = 1;
  //   tracker.splice(current, 1);
  //   var column = current % n;
  //   var rowStart = current - column;
  //   for (var i = rowStart; i < rowStart + n; i++) {
  //     if (i !== current) {
  //       board[i] = 0;
  //       tracker.splice(i, 1);
  //     }
  //   }
  //   for (var i = column; i < board.length; i += n) {
  //     if (i !== current) {
  //       board[i] = 0;
  //       tracker.splice(i, 1);
  //     }
  //   }
  //   console.log(board);
  // }
  // var results = [];
  // for (var i = 0; i < n; i++) {
  //   results[i] = [];
  //   for (var j = 0; j < n; j++) {
  //     results[i].push(board[i * n + j]);
  //   }
  // }
  // console.log(board);
  // return results;
  ******************/



  // function checkCurrentSolution (row){

  //   if (row === n) {
  //     return this.rows();
  //   }
  //   for(var i = 0; i < row.length; i++) {
  //     this.rows()[row][i] = 1;
  //     if(this.hasAnyRooksConflicts()) {
  //       if(checkCurrentSolution(row+1) === true) {
  //         return true;
  //       }
  //       this.rows()[row][i] = 0;
  //     }
  //   }
  //   return false;

  // }


  // if(checkCurrentSolution(0)){
  //   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //   return solution;
  // }
  // return null;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
