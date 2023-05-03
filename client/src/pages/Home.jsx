import React, { useEffect, useState } from 'react';

import { ImgCard } from '../components';
import { CircularProgress, Typography, Box, FormControl, FormHelperText, TextField, Stack } from '@mui/material';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <ImgCard key={post._id} {...post} />)
    );
  }

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        
        <Typography fontSize={25} fontWeight={700} color="#11142D">{title}</Typography>
    </Stack>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

    try {
      const response = await fetch(`${baseUrl}/post`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (

    <Box>
      <Box component="div" mt={2.5} borderRadius="15px" padding="20px" >
          <Typography fontSize={32} fontWeight={700} color="#11142d">The Community Showcase</Typography>
          <Typography fontSize={14} fontWeight={400} color="#11142d">Browse through a collection of AI generated images by Open AI</Typography>
      </Box>

      <Box component="div" mt={2.5} borderRadius="15px" padding="20px">
        <FormControl fullWidth>
          <FormHelperText sx={{fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>Search posts</FormHelperText>  
          <TextField required id="text" name="text" color="info" variant="outlined" placeholder="Search something..." onChange={handleSearchChange}/>
        </FormControl>
      </Box>

      <Box component="div" mt={0.5} borderRadius="15px" padding="20px">
        {loading ? (
            <Box sx={{ display: 'flex' }}>
              <Stack justifyContent="center">
                <CircularProgress />
              </Stack>
            </Box>
        ) : (
          <Box component="div" mt={0.5}>
            {searchText && (
             <Box component="div" mt={0.5}>
                <Typography fontSize={24} fontWeight={500} color="#11142d">Showing Resuls for {searchText}</Typography>  
              </Box>
            )}
              <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {searchText ? (
                  <RenderCards
                    data={searchedResults}
                    title="No Results Found"
                  />
                ) : (
                  <RenderCards
                    data={allPosts}
                    title="No Posts Yet"
                  />
                )}
                
              </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;