import { React, useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';

function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getNews();
  }, [newsItems]); // Notice the empty dependency array, this ensures the effect runs only once when the component mounts

  const getNews = () => {
    axios.get('http://localhost:8000/api/news')
      .then(res => {
        // console.log(res.data); // This should print the entire object with a `news` property
        setNewsItems(res.data.news); // Access the `news` property from the response object
        setLoaded(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <Card
        sx={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {loaded && Array.isArray(newsItems) && newsItems.length > 0 ? (
          newsItems.map((news, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '16px',
                maxWidth: '100%',
                height: '250px',
                boxShadow: '4px 4px 10px orange',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#f9f9f9',
                position: 'relative',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                image={news.Image}
                alt={news.Title}
              />
              <CardContent
                sx={{
                  paddingLeft: '220px',
                  paddingRight: '16px',
                  overflowY: 'auto',
                  height: '100%',
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
