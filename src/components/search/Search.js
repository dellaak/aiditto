import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { InputAdornment } from '@material-ui/core'
import S from "../../elements/styledComponents"
import { searchAction } from "../../store/actions/searchActions"

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.SearchBar
        id="outlined-textarea"
        placeholder="Search for supply that you're in need of..."
        variant="outlined"
        multiline
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => { dispatch(searchAction(e.target.value)) }}
      />
    </>
  )
}

export default Search;