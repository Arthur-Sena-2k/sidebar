// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assets/style-components/searchbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { InputAdornment, FormControl,  InputLabel,  OutlinedInput} from '@mui/material';

const Searchbar = () => {
  return (
    <div className='header'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5vh 1vw' }} >
            <FormControl sx={{ width: '20vw'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Pesquisar</InputLabel>
                <OutlinedInput
                endAdornment={
                    <InputAdornment position="end">
                    <SearchOutlinedIcon/>
                    </InputAdornment>
                }
                label= 'none'
                />
            </FormControl>
            <NotificationsNoneOutlinedIcon/>
          </div>
    </div>
  )
}

export default Searchbar
