import React from 'react';
import styles from './Search.module.scss';
import clear from '../../icons/clear.svg';
import {useSelector,useDispatch} from 'react-redux'
import { setSearchValue, clearSearchValue } from '../../redux/slices/searchSlice';


const Search = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
 
  return (
    <div className='style.root'>
      <input
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        value={searchValue}
        className={styles.input}
        placeholder="Поиск.."
      />
      { searchValue &&
      <img onClick={() => dispatch(clearSearchValue())}
       className={styles.clearIcon}
        src={clear} />
}
    </div>
  );
};

export default Search;
