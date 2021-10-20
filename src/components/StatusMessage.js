import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noLeftMoves = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noLeftMoves &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noLeftMoves && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
