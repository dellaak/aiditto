import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import S from "../../elements/styledComponents/"
import Button from '../../components/button/Button';
import Search from "../../components/search/Search";

const StartPage = () => {
  const searchText = useSelector(state => state.search.text);

  return (
    <>
      <Search />
      {searchText ? <p>{searchText}</p> : <S.StartPageWrapper>
        <section>
          <h2>We are here to help</h2>
          <p>Request resources or provide resource to aid in times of trouble</p>
          <Button>Begin now</Button>
        </section>
        <S.StartLogo src="/images/startlogo.jpg" alt="aiditto-logo" />
      </S.StartPageWrapper>}

    </>
  )
}

export default StartPage;