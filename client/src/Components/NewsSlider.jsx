import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Import Swiper styles
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Material UI arrow icon
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';

const arrowMove = keyframes`
  0% {
    transform: translateX(0);
    color: grey;
  }
  50% {
    transform: translateX(10px);
    color: #FF5722;
  }
  100% {
    transform: translateX(0);
    color: grey;
  }
`;

function NewsSlider() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch all news items from the API
    axios.get('http://localhost:8000/api/news')
      .then(response => {
        const allNews = response.data.news;
        // Slice the last 4 news items
        const latestNews = allNews.slice(-4).reverse(); // Reverse to get the latest first
        setNewsItems(latestNews);
      })
      .catch(error => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);

  return (
    <Box sx={{ width: '100%', marginTop: 10, marginBottom: 10, position: 'relative', backgroundColor: "#E6F0FF", padding: "20px", borderRadius: 2 }}>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        grabCursor={true} // Allows dragging with cursor
        style={{ cursor: 'grab' }} // Change cursor style on hover
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index}>
           <Card
  key={index}
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '16px',
    maxWidth: '70%',
    height: '320px',
    boxShadow: '4px 4px 10px orange',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    position: 'relative',
    marginLeft: '250px', // Maintain margin-left if required
  }}
>
  <CardMedia
    component="img"
    sx={{
      width: '50%',
      height: '100%',
      objectFit: 'cover', // Ensure the image covers the container proportionally
    }}
    image={news.Image}
    alt={news.Title}
  />
  <CardContent
    sx={{
      width: '50%', // Ensure the content takes the remaining space
      paddingLeft: '16px',
      paddingRight: '16px',
      // textAlign: 'center',
      height: '100%',
      overflowY: 'auto', // Ensure scrollability if content overflows
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }}
  >
    <Typography component="h5" variant="h6" sx={{ color: '#1d4f67' }}>
      {news.Title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
      {news.Content}
    </Typography>
  </CardContent>
</Card>

          </SwiperSlide>
        ))}
      </Swiper>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
        <Typography variant="body1" sx={{ color: 'grey', marginRight: 1 }}>
          Drag to see more
        </Typography>
        <ArrowForwardIosIcon 
          sx={{
            fontSize: '1.5rem',  // Size of the arrow
            animation: `${arrowMove} 1.5s infinite`,  // Apply the animation with color change
          }}
        />
      </Box>
    </Box>
  );
}

export default NewsSlider;
