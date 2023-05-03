import React from 'react'
import {Typography, Card, CardMedia, CardContent, CardHeader, Avatar, CardActions,IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


import { downloadImage } from '../utils';

const ImgCard = ({ _id, name, prompt, photo }) => (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
    <Card id={_id}
    sx={{
      maxWidth: '345px',
      padding: '5px',
      '&:hover':{
        boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)'
      },
      cursor: 'pointer',
    }}
    elevation={5}>
        <CardHeader
            avatar={
            <Avatar>
                {name[0]}
            </Avatar>
            }
            title={name}
        />
        <CardMedia component="img" width="100%" height={210} image={photo} alt={prompt} sx={{borderRadius:'10px'}} />
        <CardContent sx={{display: 'flex', flexDirection: 'row', gap: '5px', justifyContent: 'space-between', paddingX: '5px'}}>
            <Typography variant="body2" color="text.secondary" fontSize={12} fontWeight={500} >{prompt}</Typography>
        </CardContent>
        <CardActions>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <IconButton onClick={() => downloadImage(_id, photo)}><DownloadIcon/></IconButton>
        </CardActions>
    </Card>
    </div>
  );


export default ImgCard;