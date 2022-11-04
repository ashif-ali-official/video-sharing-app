import React from 'react'
import styled from 'styled-components'
import Ashif from '../img/Ashif.jpeg'

const Container = styled.div`
  display:flex;
  gap:10px;
  margin:30px 0px;
`

const Avatar = styled.img`
  height:36px;
  width:36px;
  border-radius:50%;
`
const Details = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px
`

const Header = styled.div`
  display:flex;
  gap:5px;
`
const Name = styled.span`
  font-size:14px;
  font-weight:500;
  color: ${({theme}) => theme.text};
`
const Time = styled.span`
  font-size:12px;
  font-weight:400;
  margin-left:5px;
  color: ${({theme}) => theme.textSoft};
`

const Text = styled.div`
  font-size:14px;
  color: ${({theme}) => theme.text};
`

export default function Comment() {
  return (
    <Container>
      <Avatar src={Ashif}/>
      <Details>
        <Header>
          <Name>Ashif Ali</Name>
          <Time>3 days ago</Time> 
        </Header>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique dolor, placeat qui vel nihil sequi vitae eveniet et cupiditate quod exercitationem ullam. Ipsa iste reprehenderit totam voluptatem officia ab?</Text>
      </Details>
    </Container>
  )
}
