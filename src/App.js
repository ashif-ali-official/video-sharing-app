import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Video from "./pages/Video";
import { darkTheme, lightTheme } from "./utils/Theme"

const Container = styled.div`
  display:flex;
`
const Main = styled.div`
  flex:7;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
  padding:22px 76px;
`


function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}></Menu>
          <Main>
            <Navbar></Navbar>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>}/>
                  <Route path="signin" element={<Login/>}/>
                  <Route path="video">
                    <Route path=":id" element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

