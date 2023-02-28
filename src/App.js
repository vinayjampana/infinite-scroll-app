import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: white;
    --color-background: #001f40;
    --color-primary: rebeccapurple;
    --color-primary-border: #61dafb;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
