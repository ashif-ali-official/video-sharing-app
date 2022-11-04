import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/thumbnail.png'
import Profile from '../img/Ashif.jpeg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: ${ (props) => props.type !== "sm" && "360px" };
    margin-bottom: ${ (props) => props.type === "sm" ? "20px" : "45px"};
    cursor:pointer;
    gap:10px;

    display: ${ (props) => props.type === "sm" && "flex"};
`

const Image = styled.img`
    width: 100%;
    height: ${ (props) => props.type === "sm" ? "110px" : "202px"};
    background-color:transparent;
    cursor:pointer;
    flex: ${ (props) => props.type === "sm" && "1"};

`

const Details = styled.div`
    display:flex;
    margin-top: ${ (props) => props.type === "sm" ? "0" : "16px"};
    gap:12px;
    flex: ${ (props) => props.type === "sm" && "1"};
`

const ChannelImage = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color:#999;

    display: ${ (props) => props.type === "sm" && "none"};
`
const Texts = styled.div``

const Title = styled.h1`
    font-size:16px;
    font-weight:500;
    color: ${({theme}) => theme.text};
`

const ChannelName = styled.h2`
    font-size:12px;
    font-weight:400;
    color: ${({theme}) => theme.textSoft};
    margin: 5px 0px;
`

const Info = styled.div`
    font-size:12px;
    font-weight:300;
    color: ${({theme}) => theme.textSoft};
`

export default function Card( {type} ) {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container type={ type } >
            <Image src={Thumbnail} type={ type }/>
            <Details type={ type }>
                <ChannelImage src={Profile} type={ type }/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>WHOISASHIF</ChannelName>
                    <Info>660,908 views - 1 day ago</Info>
                </Texts>
            </Details>    
        </Container>
    </Link>
  )
}
