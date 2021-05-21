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
  grid-auto-rows: 35%;
  grid-gap: 15px;
  padding: 6%;
  border-radius: 2%;
  overflow-y: scroll;
`
export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background: ${setLightness(0.2, '#121214')};

  h1 {
    align-self: flex-start;
    margin-bottom: 5px;
  }
  h3 {
    margin-bottom: 10px;
  }
  p {
  }
`
