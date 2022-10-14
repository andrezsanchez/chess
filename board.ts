/**
 * A position on the board. The first number is the X position, starting from the left-most column and from the bottom-most row (from
 * White's perspective). Each value is expected to be an integer in [1,8].
 */
export type Position = [number, number];

export type King = {
  type: 'King';
  position: Position;
  hasMoved: boolean;
};

export type Rook = {
  type: 'Rook';
  position: Position;
  hasMoved: boolean;
};

export type Pawn = {
  type: 'Pawn';
  position: Position;
  lastMoveWasDoubleAdvance: boolean;
};

export type Queen = {
  type: 'Queen';
  position: Position;
};

export type Bishop = {
  type: 'Bishop';
  position: Position;
};

export type Knight = {
  type: 'Knight';
  position: Position;
};

export type Piece = King | Queen | Bishop | Knight | Rook | Pawn;

export type ChessPlayer = {
  /**
   * There can only be one king, and it cannot be captured.
   */
  king: King;

  // There can be 0 or more of any other piece, including queens.
  queen: Queen[];
  bishops: Piece[];
  rooks: Rook[];
  knights: Piece[];
  pawns: Pawn[];
};

export type ChessConfiguration = {
  white: ChessPlayer;
  black: ChessPlayer;
};

function createPawn(x: number, y: number): Pawn {
  return {
    type: 'Pawn',
    position: [x, y],
    lastMoveWasDoubleAdvance: false,
  };
}

function createKing(x: number, y: number): King {
  return {
    type: 'King',
    position: [x, y],
    hasMoved: false,
  };
}

function createQueen(x: number, y: number): Queen {
  return {
    type: 'Queen',
    position: [x, y],
  };
}

function createBishop(x: number, y: number): Bishop {
  return {
    type: 'Bishop',
    position: [x, y],
  };
}

function createKnight(x: number, y: number): Knight {
  return {
    type: 'Knight',
    position: [x, y],
  };
}

function createRook(x: number, y: number): Rook {
  return {
    type: 'Rook',
    position: [x, y],
    hasMoved: false,
  };
}

export function createChessConfiguration(): ChessConfiguration {
  const white: ChessPlayer = {
    king: createKing(5, 1),
    queen: [createQueen(4, 1)],
    bishops: [createBishop(3, 1), createBishop(6, 1)],
    knights: [createKnight(2, 1), createKnight(7, 1)],
    rooks: [
      createRook(1, 1),
      createRook(8, 1),
    ],
    pawns: [
      createPawn(1, 2),
      createPawn(2, 2),
      createPawn(3, 2),
      createPawn(4, 2),
      createPawn(5, 2),
      createPawn(6, 2),
      createPawn(7, 2),
      createPawn(8, 2),
    ],
  };
  const black: ChessPlayer = {
    king: createKing(5, 8),
    queen: [createQueen(4, 8)],
    bishops: [createBishop(3, 8), createBishop(6, 8)],
    knights: [createKnight(2, 8), createKnight(7, 8)],
    rooks: [
      createRook(1, 8),
      createRook(8, 8),
    ],
    pawns: [
      createPawn(1, 7),
      createPawn(2, 7),
      createPawn(3, 7),
      createPawn(4, 7),
      createPawn(5, 7),
      createPawn(6, 7),
      createPawn(7, 7),
      createPawn(8, 7),
    ],
  };
  return {
    white,
    black,
  };
}
