import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SearchOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top:0;
  background-color: ${({theme}) => theme.bgLighter};
  height:56px;
`

const Wrapper = styled.div`
  display:flex;
  align-item: center;
  justify-content: flex-end;
  height:100%;
  padding: 0px 20px;
  position: relative;
`

const SearchContainer = styled.div`
  position: absolute;
  width:50%;
  left:0px;
  right:0px;
  top:10px;
  margin: auto; 
  display:flex;
  align-item:center;
  justify-content:space-between;
  padding:5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`

const Input = styled.input`
  border: none;
  width:100%;
  background-color:transparent;
  color: ${({theme}) => theme.text};
  :focus {
    outline:none;
  }

`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin: 10px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;



export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input placeholder="Search"></Input>
          <SearchOutlined></SearchOutlined>
        </SearchContainer>
        <Link to="signin" style={{ textDecoration: "none"}}>
          <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
        </Link>

      </Wrapper>
    </Container>
  )
}
