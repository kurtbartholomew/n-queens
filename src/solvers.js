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
  // n = n || 4;
  // var board = new Board({'n':n});
  // var rooks = _.range(n);

  // var solutions = function(rooks) {
  //   if (rooks.length === 0) {
  //     return board.rows()
  //   } else {
  //     for (var i = 0; i < n; i++) {
  //       board.togglePiece(rooks[0], i);
  //       if (board.hasRookConflicts()) {
  //         board.togglePiece(rooks[0], i);
  //       } else {
  //         rooks.pop();
  //       }
  //     }

  //   }
  // };



  // return board.rows();

  var outcomes = [];
  var board = new Board({'n':n});
  var solutionsNum = 0;

  var solutions = function(row) {
    console.log(JSON.stringify(board.rows()));
    console.log("\n");
    if (row === n) {
      solutionsNum++;
      console.log("solution found: ",solutionsNum);
      outcomes.push(board.rows().slice());
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);

      if(!board.hasAnyRooksConflicts()) {
        solutions(row+1)
      }
      board.togglePiece(row,i);
      
    }
    return false;
  };
  solutions(0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(outcomes[0]));
  return outcomes[0];
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

  var outcomes = [];
  var board = new Board({'n':n});
  var solutionsNum = 0;

  var solutions = function(row) {
    console.log(JSON.stringify(board.rows()));
    console.log("\n");
    if (row === n) {
      solutionsNum++;
      console.log("solution found: ",solutionsNum);
      outcomes.push(board.rows().slice());
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);

      if(!board.hasAnyQueensConflicts()) {
        solutions(row+1)
      }
      board.togglePiece(row,i);
      
    }
    return false;
  };
  solutions(0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(outcomes[0]));
  return outcomes[0];


  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
