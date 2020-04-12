import React from 'react'
import { Card } from 'react-bootstrap'
import { Circle as O, Grid, X } from 'react-feather'

import { IBoard, Index, Piece } from '../../types'
import { getRows } from '../../utils/board'

import { Container, Row, Space } from './Board.styles'

interface IProps {
  board: IBoard
  onMove: (index: Index) => void
}

const Board = ({ board, onMove }: IProps) => (
  <Card>
    <Card.Header>
      <Grid /> Tic tac toe
    </Card.Header>
    <Card.Body>
      <Container>
        {getRows(board).map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((space, spaceIndex) => (
              <Space key={spaceIndex} onClick={() => onMove(space.index)}>
                {space.value === Piece.X && <X color="#0000FF" size={64} />}
                {space.value === Piece.O && <O color="#FF0000" size={64} />}
              </Space>
            ))}
          </Row>
        ))}
      </Container>
    </Card.Body>
  </Card>
)

export default Board
