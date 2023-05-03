import { CircularProgress, Backdrop, Typography, Box, FormControl, FormHelperText, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import {CustomButton} from '../components';


const MuiCreatePost = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };


  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${baseUrl}/dalle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };
  return (
      <Box mt={2.5} borderRadius="15px" padding="20px">
        <Typography fontSize={32} fontWeight={700} color="#11142d">Create</Typography>
        <Typography fontSize={14} fontWeight={400} color="#11142d">Generate an imaginative image through DALL-E AI and share it with the community</Typography>

        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap:'20px'}}
        onSubmit={handleSubmit}>
          <FormControl>
            <FormHelperText sx={{fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>Enter your name</FormHelperText>
            <TextField required id="name" name="name" color="info" variant="outlined" placeholder="Ex., Joe Lee" onChange={handleChange}/>
          </FormControl>
          <FormControl>
            <FormHelperText sx={{fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>Enter prompt</FormHelperText>
            <TextField required id="prompt" name="prompt" color="info" variant="outlined" placeholder="A working hard farmer" onChange={handleChange}/>
          </FormControl>

        

          <FormControl>
          <Box component="div" sx={{ display: 'flex' }}>
            { form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                width="40%"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                width="40%"
              />
            )}

            {generatingImg && (
              <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={generatingImg}
            >
              <CircularProgress color="inherit" />
            </Backdrop>

            )}
            </Box>
            </FormControl>

            <Box >

                <CustomButton 
                  title={generatingImg ? 'Generating...' : 'Generate'}
                  backgroundColor="#227733" 
                  handleClick={generateImage}
                  color="#fcfcfc" />


            </Box>

            <Box>
                <Typography fontSize={16} fontWeight={400} >** Once you have created the image you want, you can share it with others in the community **</Typography>


                <CustomButton 
                  title={loading ? 'Sharing...' : 'Share with the Community'}
                  backgroundColor="#475be8" 
                  type="submit"
                  color="#fcfcfc" />
            </Box>

        </form>
      </Box>

  )
}

export default MuiCreatePost