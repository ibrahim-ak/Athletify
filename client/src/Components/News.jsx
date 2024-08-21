import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const newsItems = [
  {
    title: 'Exciting News 1',
    description: 'This is the full descriptThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingion of news 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscingThis is the full description of news 1. Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Exciting News 2',
    description: 'This is the full description of news 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Exciting News 3',
    description: 'This is the full description of news 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more news items as needed
];

function News() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Latest News
      </Typography>
      <Card className='parent-card'
        sx={{ 
          padding: '20px', 
          backgroundColor: '#fff', 
          borderRadius: '8px', 
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth:'800px',
          margin: '0 auto',
        }}
      >
        {newsItems.map((news, index) => (
          <Card className='inner-card'
            key={index}
            sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center',
              marginBottom: '16px',
              maxWidth:'100%',
              height: '250px',  // Increased the height
              overflowY: 'scroll', // Enable vertical scrolling for each inner card
              scrollbarWidth: 'thin', // For Firefox
              '&::-webkit-scrollbar': {
                width: '12px', // For Chrome, Safari, and other WebKit browsers
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1', 
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888', 
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555', 
              }
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 200, height: '100%', objectFit: 'cover' }}  // Increased the width of the image
              image={news.image}
              alt={news.title}
            />
            <CardContent sx={{ paddingLeft: '16px' }}>
              <Typography component="h5" variant="h6">
                {news.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                {news.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Card>
    </Box>
  );
}

export default News;
