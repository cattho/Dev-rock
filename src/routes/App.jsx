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
  background: '#222222',
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
  const [valueBtn, setValueBtn] = useState('Activar tema oscuro')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') || setValueBtn('Activar tema claro') : setTheme('light') || setValueBtn('Activar tema oscuro')
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <UseContexto>
            <Header />
            <input type='button' onClick={toggleTheme} className='btn-theme' value={valueBtn}></input>
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