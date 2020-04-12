import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Circle as O, HardDrive, User, X } from 'react-feather'

import { Piece } from '../../types'

interface IProps {
  piece: Piece
  onRestart?: () => void
}

const Console = ({ piece, onRestart }: IProps) => (
  <Card style={{ width: '200px' }}>
    <Card.Header>
      {piece === Piece.O && (<><HardDrive /> Computer</>)}
      {piece === Piece.X && (<><User /> Player one</>)}
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {piece === Piece.X && <X color="#0000FF" />}
        {piece === Piece.O && <O color="#FF0000" />}
      </Card.Title>
    </Card.Body>
    {!!onRestart && (
      <Card.Footer>
        <Button block onClick={onRestart}>
          Restart game
        </Button>
      </Card.Footer>
    )}
  </Card>
)

export default Console
