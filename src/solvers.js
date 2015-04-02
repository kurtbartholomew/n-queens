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
  var outcomes = [];
  var board = new Board({'n':n});
  var solutionsNum = 0;

  var solutions = function(row) {
    if (row === n) {
      solutionsNum++;
      outcomes.push(board.rows());
      return true;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);
      if(!board.hasAnyRooksConflicts()) {
        if(solutions(row+1) === true) {
          return true;
        }
      }
      board.togglePiece(row,i);
    }
    return false;
  };
  solutions(0);
  return outcomes[0];
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var factorials = [];

  // n-Rooks is just number of permutations so we calculate number
  // of permutations quickly and return that value
  var factorial = function(number) {
    if (factorials[number] === undefined) {
      var product = number;
      for (var i = 1; i < number; i++) {
        product *= i;
      }
      factorials[number] = product;
    }
    return factorials[number];
  };

  solutionCount = factorial(n);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  n = n || 4;
  // var outcomes = [];
  // var board = new Board({'n':n});
  // var solutionsNum = 0;

  // var solutions = function(row) {
  //   if (row === n) {
  //     solutionsNum++;
  //     outcomes.push(board.rows());
  //     return true;
  //   }
  //   for(var i = 0; i < n; i++) {
  //     board.togglePiece(row,i);
  //     if(!board.hasAnyQueensConflicts()) {
  //       if(solutions(row+1) === true) {
  //         return true;
  //       }
  //     }
  //     board.togglePiece(row,i);
  //   }
  //   return false;
  // };
  // solutions(0);
  // return outcomes[0];

  var outcomes = [];
  var board = new Board({'n':n});
  var solutionsNum = 0;
  var solutions = function(row) {
    if (row === n) {
      solutionsNum++;
      console.log(JSON.stringify(board.rows()));
      console.log("\n");
      console.log("solution found: ",solutionsNum);
      outcomes.push(board.rows());
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);
      if(!board.hasAnyQueensConflicts()) {
        solutions(row+1);
      }
      board.togglePiece(row,i);
    }
    return false;
  };
  solutions(0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(outcomes[0]));
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(outcomes[0]));
  return outcomes[0];
  // return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  // var outcomes = [];
  var board = new Board({'n':n});
  var solutions = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);
      if(!board.hasAnyQueensConflicts()) {
        solutions(row+1);
      }
      board.togglePiece(row,i);
    }
    return false;
  };
  solutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
