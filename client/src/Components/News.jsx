import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios.get('http://localhost:8000/api/news')
      .then(res => {
        setNewsItems(res.data.news);
        setLoaded(true);
      })
      .catch(err => console.error('Error fetching news:', err));
  };

  const handleDelete = (id) => {
    // Optimistic UI Update
    const updatedNewsItems = newsItems.filter(news => news._id !== id);
    setNewsItems(updatedNewsItems);

    axios.delete(`http://localhost:8000/api/news/${id}`)
      .then(res => {
        // Confirm successful deletion
      })
      .catch(err => {
        console.error('Error deleting news:', err);
        // Revert optimistic UI update in case of an error
        setNewsItems(newsItems);
      });
  };

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <Card
        sx={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0px 8px 24px rgba(255, 165, 0, 0.4)', // Orange shadow for the container card
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {loaded && Array.isArray(newsItems) && newsItems.length > 0 ? (
          [...newsItems].reverse().map((news, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '24px',  // Moderate spacing between cards
                maxWidth: '100%',
                height: '320px',  // Increased height for the card
                boxShadow: '0px 10px 20px rgba(255, 165, 0, 0.6)',  // Prominent orange shadow
                borderRadius: '12px',  // Border radius for smoother corners
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out', // Smooth hover effect
                '&:hover': {
                  transform: 'scale(1.03)', // Slight zoom on hover to make it stand out
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '280px',  // Increased width for the image
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',  // Border radius for the image
                  marginLeft: '16px',
                }}
                image={news.image}
                alt={news.title}
              />
              <CardContent
                sx={{
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  overflowY: 'auto',
                  height: '100%',
                  maxHeight: '220px',  // Smaller height for content with scroll
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',  // Align content to start
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
                <Typography component="h5" variant="h6" sx={{ color: '#1d4f67', marginBottom: '8px' }}>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.content}
                </Typography>
              </CardContent>
              <IconButton
                onClick={() => handleDelete(news._id)}
                sx={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 0, 0, 0.7)',  // Red background
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 0, 0, 0.9)', // Darker red on hover
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            No news available.
          </Typography>
        )}
      </Card>
    </Box>
  );
}

export default News;
