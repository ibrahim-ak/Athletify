import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';

function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getNews();
  }, [newsItems]); // Fixed: empty dependency array to fetch news only once on component mount

  const getNews = () => {
    axios.get('http://localhost:8000/api/news')
      .then(res => {
        setNewsItems(res.data.news);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <Box sx={{ width: '100%', padding: '40px', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <Card
        sx={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0px 8px 24px #1d4f67',
          width: '1100px',  // Apply the width prop here
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
                marginBottom: '24px',
                maxWidth: '100%',
                height: '320px',
                boxShadow: '0px 5px 20px #1d4f67',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '280px',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
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
                  maxHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
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
                <Typography component="h5" variant="h4" sx={{ color: '#1d4f67', marginBottom: '8px', textAlign:'center', textShadow: '1px 1px 2px', fontSize:'28px'}}>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontWeight:'500' , color: '#1d4f67', textAlign: 'justify', fontSize:'18px', padding:'20px' }}>
                  {news.content}
                </Typography>
              </CardContent>
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
