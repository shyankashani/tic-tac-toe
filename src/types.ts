export enum Piece {
  X = 'X',
  O = 'O',
}

export interface ISpace {
  index: Index
  value: Piece | null
}

export type IBoard = [
  ISpace,
  ISpace,
  ISpace,
  ISpace,
  ISpace,
  ISpace,
  ISpace,
  ISpace,
  ISpace,
]

export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
