import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Home } from '../containers/Home'
import '../assest/css/index.css';
import { Producto } from '../containers/Producto';
import { Carrito } from '../containers/Carrito';
import UseContexto from '../context/UseContexto';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


const lightTheme = {
  background: '#fff',
  color: '#666',
};

const darkTheme = {
  background: '#071330',
  color: '#fff'
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }
`;

function App() {

  const [theme, setTheme] = useState('light');
  const [valueBtn, setValueBtn] = useState('🌚')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') || setValueBtn('🌞') : setTheme('light') || setValueBtn('🌚')
    localStorage.setItem('tema', theme)
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <UseContexto>
            <input type='button' onClick={toggleTheme} className='btn-theme' value={valueBtn}></input>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/producto' element={<Producto />} />
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
            <Footer />
          </UseContexto>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App