import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Modal } from '@mui/material';
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
  const [open, setOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

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

  const handleOpen = (news) => {
    setSelectedNews(news);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
            <div onClick={() => handleOpen(news)} style={{ cursor: 'pointer' }}>
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: '16px',
                  maxWidth: '70%',
                  height: '320px',
                  boxShadow: '1px 1px 1px 1px #1d4f67',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#f9f9f9',
                  position: 'relative',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  image={news.image}
                  alt={news.title}
                />
                <CardContent
                  sx={{
                    width: '50%',
                    padding: '16px',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Typography component="h5" variant="h6" sx={{ color: '#1d4f67', fontSize: '24px' }}>
                    {news.title}
                  </Typography>


                  <Typography variant="body1" color="text.secondary" sx={{ marginTop: '8px', fontSize: '1.1rem' , textAlign: 'justify', color:'#1d4f67'}}>
  {news.content ? news.content.substring(0, 270) : 'No content available'}...  {/* Shorten the content */}

                  {/* <Typography variant="body1" color="text.secondary" sx={{ marginTop: '8px', fontSize: '1rem' }}> */}


  <Link href="#" sx={{ marginLeft: '8px', color: '#1d4f67', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '2rem' }}>
    Read more
  </Link>
</Typography>


                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
        <Typography variant="body1" sx={{ color: 'grey', marginRight: 1 }}>
          Drag to see more
        </Typography>
        <ArrowForwardIosIcon
          sx={{
            fontSize: '1.5rem',
            animation: `${arrowMove} 1.5s infinite`,
          }}
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            maxHeight: '80%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            borderRadius: '8px',
            overflow: 'auto',
          }}
        >
          {selectedNews && (
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'auto',
                maxHeight: '450px',
                borderRadius: '8px',
                overflow: 'auto',
                backgroundColor: '#f9f9f9',
                position: 'relative',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '50%',
                  objectFit: 'cover',
                }}
                image={selectedNews.image}
                alt={selectedNews.title}
              />
              <CardContent
                sx={{
                  width: '100%',
                  padding: '16px',
                  height: 'auto',
                }}
              >
                <Typography component="h5" variant="h6" sx={{ color: '#1d4f67', fontSize: '28px' }}>
                  {selectedNews.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px', fontSize: '18px', color: '#1d4f67', textAlign: 'justify' }}>
                  {selectedNews.content}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default NewsSlider;
