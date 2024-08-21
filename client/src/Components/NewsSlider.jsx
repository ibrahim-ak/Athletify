import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Import Swiper styles
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Material UI arrow icon
import { keyframes } from '@mui/system';

const newsItems = [
  {
    title: 'Breaking News 1',
    description: 'This is a short description of the news article.',
    image: 'https://via.placeholder.com/300x200',  // Updated to wider image
  },
  {
    title: 'Breaking News 2',
    description: 'This is a short description of the news article.',
    image: 'https://via.placeholder.com/300x200',  // Updated to wider image
  },
  {
    title: 'Breaking News 3',
    description: 'This is a short description of the news article.',
    image: 'https://via.placeholder.com/300x200',  // Updated to wider image
  },
  {
    title: 'Breaking News 4',
    description: 'This is a short description of the news article.',
    image: 'https://via.placeholder.com/300x200',  // Updated to wider image
  },
];

// Keyframe animation for the arrow icon (movement and color change)
const arrowMove = keyframes`
  0% {
    transform: translateX(0);
    color: grey;
  }
  50% {
    transform: translateX(10px);
    color: #FF5722;  // Example color change to a vibrant orange
  }
  100% {
    transform: translateX(0);
    color: grey;
  }
`;

function NewsSlider() {
  return (
    <Box sx={{ width: '100%', marginTop: 10,  marginBottom: 10, position: 'relative', backgroundColor: "#E6F0FF", padding: "20px", borderRadius: 2 }}>
      {/* Header for the news section */}
   

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        grabCursor={true} // Allows dragging with cursor
        style={{ cursor: 'grab' }} // Change cursor style on hover
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                height: 350, 
                maxWidth: 900, 
                margin: '0 auto', 
                borderRadius: 2, 
                boxShadow: 3, 
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 300, objectFit: 'cover' }}  // Ensure the image covers the space
                image={news.image}
                alt={news.title}
              />
              <CardContent sx={{ flex: '1 0 auto', padding: 3 }}>
                <Typography component="div" variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Drag indication with arrow icon and text */}
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
