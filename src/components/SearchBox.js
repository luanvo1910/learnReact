import { useContext, useState } from "react";
import {AmiiboContext} from '../context/amiiboContext'

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const { searchAmiibos, setSearchString } = useContext(AmiiboContext)
  return (
    <div>
        <form className="d-flex" role="search">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search product" 
            aria-label="Search"
            onChange={(e) => {setSearchString(e.target.value)}}/>
      	</form>
    </div>
  )
}

export default SearchBox