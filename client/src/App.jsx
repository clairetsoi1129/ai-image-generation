import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets';
import {Home, MuiCreatePost} from './pages';
import { Box,  Stack } from '@mui/material';
import {Add} from '@mui/icons-material';
import {CustomButton} from './components'

const App = () => {

  return (
    <BrowserRouter>
    <Box mt={0} >
      <Box mt={2.5} sx={{pl: 4, pr: 4}}>
        <Stack direction="row" sx={{ justifyContent: 'space-between'}} >
        
          <Link to="/">
            <img src={logo} alt="logo" width="145" height="28"/>
          </Link>

          <Link to="create-post/"><CustomButton 
            title="Create" 
            backgroundColor="#475be8" 
            color="#fcfcfc"
            icon={<Add/>} />
          </Link>
        </Stack>
      </Box>

      </Box>
      <Box mt={2.5} sx={{pl: 2, pr: 2, bgcolor: '#e6ebf4'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<MuiCreatePost />} />
        </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
