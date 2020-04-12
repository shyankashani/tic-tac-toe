import 'bootstrap/dist/css/bootstrap.min.css'

import { countBy } from 'lodash'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { Container } from './App.styles'
import Board from './components/Board'
import Console from './components/Console'
import { IBoard, Index, Piece } from './types'
import { initializeBoard } from './utils/board'
import { computerMoveSpace } from './utils/computer'

const App = () => {
  let oTurn: ReturnType<typeof setTimeout>

  const [board, setBoard] = React.useState<IBoard>(initializeBoard())
  const [turn, setTurn] = React.useState<Piece>(Piece.X)

  const updateTurn = () => {
    const { X, O } = { X: 0, O: 0, ...countBy(board, ({ value }) => value) }
    setTurn(X > O ? Piece.O : Piece.X)
  }

  const handleTurn = () => {
    if (turn === Piece.O) {
      oTurn = setTimeout(() => {
        const space = computerMoveSpace(board, Piece.O)

        if (space) {
          const newBoard = board.slice() as IBoard
          newBoard.splice(space.index, 1, { ...space, value: Piece.O })
          setBoard(newBoard)
        }
      }, 1000)
    }
  }

  const handleMove = (index: Index) => {
    if (turn === Piece.X && board[index].value === null) {
      const newBoard = board.slice() as IBoard
      newBoard.splice(index, 1, { index, value: Piece.X })

      setBoard(newBoard)
    }
  }

  const handleRestart = () => {
    clearTimeout(oTurn)
    setBoard(initializeBoard())
  }

  React.useEffect(updateTurn, [board])
  React.useEffect(handleTurn, [turn])

  return (
    <Container>
      <Row>
        <Col>
          <Console piece={Piece.O} />
        </Col>
        <Col>
          <Board board={board} onMove={handleMove} />
        </Col>
        <Col>
          <Console piece={Piece.X} onRestart={handleRestart} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
