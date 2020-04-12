import { chunk } from 'lodash'

import { IBoard, ISpace } from '../types'

export const initializeBoard = (): IBoard => [
  { index: 0, value: null },
  { index: 1, value: null },
  { index: 2, value: null },
  { index: 3, value: null },
  { index: 4, value: null },
  { index: 5, value: null },
  { index: 6, value: null },
  { index: 7, value: null },
  { index: 8, value: null },
]

export const getRows = (board: IBoard) => chunk(board, Math.sqrt(board.length))

export const getColumns = (board: IBoard) => {
  const columns: ISpace[][] = []

  board.forEach(space => {
    const columnIndex = space.index % Math.sqrt(board.length)
    columns[columnIndex] ? columns[columnIndex].push(space) : columns[columnIndex] = [space]
  })

  return columns
}

export const getDiagonals = (board: IBoard) => {
  const diagonals: ISpace[][] = [[], []]

  board.forEach(space => {
    const centerIndex = Math.floor(board.length / 2)
    if (space.index === centerIndex) {
      diagonals[0].push(space)
      diagonals[1].push(space)
    } else if (space.index % centerIndex === 0) {
      diagonals[0].push(space)
    } else if (space.index % centerIndex === 2) {
      diagonals[1].push(space)
    }
  })

  return diagonals
}

export const sequences = (board: IBoard) => [
  ...getRows(board),
  ...getColumns(board),
  ...getDiagonals(board),
]
