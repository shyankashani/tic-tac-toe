import styled from '@emotion/styled'
import {
  Col as BootstrapCol,
  Container as BootstrapContainer,
  Row as BootstrapRow,
} from 'react-bootstrap'

export const Container = styled(BootstrapContainer)`
  width: 300px;
  height: 300px;
`
export const Row = styled(BootstrapRow)`
  background-color: #F2F2F2;
`

export const Space = styled(BootstrapCol)`
  padding: 0;
  width: 100px;
  height: 100px;
  border: 4px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`
