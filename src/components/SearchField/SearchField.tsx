import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"

const SearchField = ({ onSearch }) => {
  const [term, setTerm] = useState(``)

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel style={{ backgroundColor: `#FFF` }} htmlFor="standard-adornment-password">
        Pesquisar
      </InputLabel>
      <OutlinedInput
        id="standard-adornment-password"
        type="text"
        onChange={e => setTerm(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <Button aria-label="toggle password visibility" onClick={() => onSearch(term)}>
              <Search />
            </Button>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchField
