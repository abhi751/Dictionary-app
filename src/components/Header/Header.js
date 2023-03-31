import React from 'react'
import { TextField, ThemeProvider, createTheme, MenuItem } from "@mui/material"
import "../Header/Header.css"
import categories from '../../data/Category';
function Header({category,setCategory,word,setWord,LightTheme}) {
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: LightTheme ? "#000" : "#fff",
          },
          type: LightTheme ? "light" : "dark",
        },
      });
    const handlChange=(e)=>{
        setCategory(e.target.value)
        setWord("")
    }
    return (
        <div className='header'>
            <span className='title'>{word?word:"Word Hunt"}</span>
            <div className='input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' id="standard-basic" label="Search a word" variant="standard" value={word} onChange={(e)=>setWord(e.target.value)} />
                    <TextField
                    className='select'
                        label="Language"
                        id="standard-select-currency"
                        select
                        defaultValue="EUR"
                        helperText="Please select your Language"
                        variant="standard"
                        value={category}
                        onChange={handlChange}
                    >

                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header