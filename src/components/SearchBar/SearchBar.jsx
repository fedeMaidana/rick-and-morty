import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import searchBarStyle from './searchBar.module.css'

const SearchBar = (props) => {
   const {onSearch} = props
   const [searchQuery, setSearchQuery] = useState('')

   const handleSearch = () => {
      onSearch(searchQuery)
   }

   return (
      <div className={searchBarStyle.searchBarContainer}>
         <input type='search' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder='Search'/>
         <button onClick={handleSearch}><AiOutlineSearch fill='rgb(250, 250, 250)' /></button>
      </div>
   );
}

export default SearchBar 
