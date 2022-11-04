import React from 'react'
import styled from 'styled-components'
import Ashif from '../img/Ashif.jpeg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { BookmarkBorderOutlined, Share, ThumbDownOffAlt } from '@mui/icons-material';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
  display:flex;
  gap:24px;
`

const Content = styled.div`
  flex:5;
`
const VideoWrapper = styled.div`
  
`
const Title = styled.h1`
  font-size:20px;
  font-weight:400;
  margin-top:20px;
  margin-bottom:10px;
  color:${({theme}) => theme.text};
`
const Details = styled.div`
  display:flex;
  align-item:center;
  justify-content: space-between;
`
const Info = styled.span`
  color:${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
  display:flex;
  gap:20px;
  color:${({theme}) => theme.text};
`

const Button = styled.div`
  display:flex;
  align-item:center;
  gap:5px;
  cursor:pointer;
`

const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
  margin: 15px 0px;
`
const Channel = styled.div`
  display:flex;
  justify-content:space-between;
`

const ChannelInfo = styled.div`
  display:flex;
  gap:20px;
`

const Image = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
`

const ChannelDetail = styled.div`
  display:flex;
  flex-direction:column;
  color:${({theme}) => theme.text};
`

const ChannelName = styled.span`
  font-weight:500;
`

const ChannelCounter = styled.span`
  margin-top:5px;
  margin-bottom:20px;
  color:${({theme}) => theme.textSoft};
  font-size:12px;

`

const Description = styled.p`
  font-size:14px;
`

const Subscribe = styled.button`
  background-color:red;
  font-weight:500;
  color:white;
  border:none;
  border-radius:5px;
  height: max-content;
  padding:10px 20px;
  cursor:pointer;
`



const Recommendation = styled.div`
  flex:2;
`

export default function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe 
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
              title="Youtube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picuture"
              allowfullscreen
            ></iframe> 
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,984,134 views - Jun 22, 2022</Info>
          <Buttons>
            <Button><ThumbUpOffAltIcon /> 4,593 Like</Button>
            <Button><ThumbDownOffAlt />Dislike</Button>
            <Button><Share />Share</Button>
            <Button><BookmarkBorderOutlined />Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src={Ashif}/>
            <ChannelDetail>
              <ChannelName>WHOISASHIF</ChannelName>
              <ChannelCounter>51.3K subscribers</ChannelCounter>
              <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam fugit atque, beatae libero eum fuga impedit molestias dicta ex omnis natus dolore, iusto ipsum totam recusandae laudantium nesciunt nobis dolor?</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments></Comments>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}
