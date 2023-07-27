import { styled } from 'styled-components';


export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const Header = styled.div({
  height: '60px',
  display: 'flex',
  alignItems: 'center',
   justifyContent: 'center'
})

export const Content = styled.div({
  display: 'flex',
  flexGrow: 1,
  margin: '20px',
  flexDirection:'column'
})

export const Footer = styled.div({
  height: '100px',
  verticalAlign: 'middle',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly'
})

export const CardContainer = styled.div({
  height: '70px',
  width:'100%',
  backgroundColor: '#424242',
  marginTop: '10px',
  color: 'white',
  verticalAlign: 'center',
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
})