import React from 'react';
import StartPage from "./views/startPage/startPage";
import S from "./elements/styledComponents";
import Navbar from "./components/navbar/Navbar";


const App = () => {

  return (
    <>
      <S.AppContainer>
        <Navbar />
        <StartPage />
      </S.AppContainer>
    </>
  );
};

export default App;
