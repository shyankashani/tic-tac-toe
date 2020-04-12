import { chain, partition } from 'lodash'

import { IBoard, Index, ISpace, Piece } from '../types'
import { getDiagonals, sequences } from './board'

export const computerMoveSpace = (board: IBoard, piece: Piece): ISpace | undefined => (
  winningSpace(board, piece)
  || blockingSpace(board, piece)
  || forkingSpace(board, piece)
  || forkBlockingSpace(board, piece)
  || centerSpace(board)
  || oppositeCornerSpace(board, piece)
  || cornerSpace(board)
  || sideSpace(board)
)

const winningSpace = (board: IBoard, piece: Piece): ISpace | undefined => {
  for (const sequence of sequences(board)) {
    const [nullSpaces, pieces] = partition(sequence, ({ value }) => value === null)

    if (nullSpaces.length === 1 && pieces.every(({ value }) => value === piece)) {
      return nullSpaces[0]
    }
  }
}

const blockingSpace = (board: IBoard, piece: Piece): ISpace | undefined => (
  winningSpace(board, piece === Piece.X ? Piece.O : Piece.X)
)

const forkingSpace = (board: IBoard, piece: Piece): ISpace | undefined => {
  const forkingSequences = sequences(board).filter(sequence => {
    const [nullSpaces, pieces] = partition(sequence, ({ value }) => value === null)
    return nullSpaces.length === 2 && pieces.every(({ value }) => value === piece)
  })

  return chain(forkingSequences)
    .flatten()
    .filter(space => space.index === null)
    .groupBy(space => space.index)
    .pickBy(spaces => spaces.length > 1)
    .values()
    .flatten()
    .first()
    .value()
}

const forkBlockingSpace = (board: IBoard, piece: Piece): ISpace | undefined => (
  forkingSpace(board, piece === Piece.X ? Piece.O : Piece.X)
)

const centerSpace = (board: IBoard): ISpace | undefined => {
  const index = Math.floor(board.length / 2) as Index

  if (board[index].value === null) {
    return board[index]
  }
}

const oppositeCornerSpace = (board: IBoard, piece: Piece): ISpace | undefined => {
  const opponentPiece = piece === Piece.X ? Piece.O : Piece.X

  const [
    [topLeftSpace, bottomRightSpace],
    [topRightSpace, bottomLeftSpace]
  ] = getDiagonals(board).map(sequence => sequence.filter(space => space.index !== 4))

  if (topLeftSpace.value === opponentPiece && bottomRightSpace.value === null) {
    return bottomRightSpace
  }

  if (bottomRightSpace.value === opponentPiece && topLeftSpace.value === null) {
    return topLeftSpace
  }

  if (topRightSpace.value === opponentPiece && bottomLeftSpace.value === null) {
    return bottomLeftSpace
  }

  if (bottomLeftSpace.value === opponentPiece && topRightSpace.value === null) {
    return topRightSpace
  }
}

const cornerSpace = (board: IBoard): ISpace | undefined => {
  const [
    [topLeftSpace, bottomRightSpace],
    [topRightSpace, bottomLeftSpace]
  ] = getDiagonals(board).map(sequence => sequence.filter(space => space.index !== 4))

  if (topLeftSpace.value === null) {
    return topLeftSpace
  }

  if (bottomRightSpace.value === null) {
    return bottomRightSpace
  }

  if (topRightSpace.value === null) {
    return topRightSpace
  }

  if (bottomLeftSpace.value === null) {
    return bottomLeftSpace
  }
}

const sideSpace = (board: IBoard): ISpace => {
  const spaces = board.filter(space => space.value === null)
  return spaces[Math.floor(Math.random() * spaces.length)]
}
