import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import StartPage from "./views/startPage/startPage"
import S from "./elements/styledComponents"
import Navbar from "./components/navbar/Navbar"


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
