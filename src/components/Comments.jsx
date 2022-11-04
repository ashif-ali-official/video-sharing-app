import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import Ashif from '../img/Ashif.jpeg'

const Container = styled.div``

const NewComment = styled.div`
  display:flex;
  align-item:center;
  gap:10px;
`

const Avatar = styled.img`
  height:50px;
  width:50px;
  border-radius:50%;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color:transparent;
  outline: none;
  padding:5px;
  width:100%;
`

export default function Comments() {
  return (
    <Container>
        <NewComment>
            <Avatar src={Ashif}/>
            <Input placeholder='Add a commnet'></Input>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}
