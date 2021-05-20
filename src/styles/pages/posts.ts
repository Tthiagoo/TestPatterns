import { setLightness } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 30px;
`
export const GridPost = styled.div`
  background: ${setLightness(0.1, '#121214')};
  overflow-y: scroll;
  display: grid;
  height: 100%;
  grid-auto-flow: row;
  grid-auto-rows: 25%;
  grid-gap: 15px;
  padding: 6%;
  border-radius: 2%;
  overflow-y: scroll;
`
export const PostItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`
