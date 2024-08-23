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
// the old one first 
// function NewsSlider() {
//   const [newsItems, setNewsItems] = useState([]);

//   useEffect(() => {
//     // Fetch all news items from the API
//     axios.get('http://localhost:8000/api/news')
//       .then(response => {
//         const allNews = response.data.news;
//         // Slice the last 4 news items
//         const latestNews = allNews.slice(-4).reverse(); // Reverse to get the latest first
//         setNewsItems(latestNews);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the news!", error);
//       });
//   }, []);

//   return (
//     <Box sx={{ width: '100%', marginTop: 10, marginBottom: 10, position: 'relative', backgroundColor: "#E6F0FF", padding: "20px", borderRadius: 2 }}>
//       <Swiper
//         spaceBetween={16}
//         slidesPerView={1}
//         grabCursor={true} // Allows dragging with cursor
//         style={{ cursor: 'grab' }} // Change cursor style on hover
//       >
//         {newsItems.map((news, index) => (
//           <SwiperSlide key={index}>
//            <Card
//   key={index}
//   sx={{
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: '16px',
//     maxWidth: '70%',
//     height: '320px',
//     boxShadow: '4px 4px 10px orange',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//     position: 'relative',
//     marginLeft: '250px', // Maintain margin-left if required
//   }}
// >
//   <CardMedia
//     component="img"
//     sx={{
//       width: '50%',
//       height: '100%',
//       objectFit: 'cover', // Ensure the image covers the container proportionally
//     }}
//     image={news.Image}
//     alt={news.Title}
//   />
//   <CardContent
//     sx={{
//       width: '50%', // Ensure the content takes the remaining space
//       paddingLeft: '16px',
//       paddingRight: '16px',
//       // textAlign: 'center',
//       height: '100%',
//       overflowY: 'auto', // Ensure scrollability if content overflows
//       '&::-webkit-scrollbar': {
//         width: '8px',
//       },
//       '&::-webkit-scrollbar-track': {
//         background: '#f1f1f1',
//       },
//       '&::-webkit-scrollbar-thumb': {
//         background: '#888',
//       },
//       '&::-webkit-scrollbar-thumb:hover': {
//         background: '#555',
//       },
//     }}
//   >
//     <Typography component="h5" variant="h6" sx={{ color: '#1d4f67' }}>
//       {news.Title}
//     </Typography>
//     <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
//       {news.Content}
//     </Typography>
//   </CardContent>
// </Card>

//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
//         <Typography variant="body1" sx={{ color: 'grey', marginRight: 1 }}>
//           Drag to see more
//         </Typography>
//         <ArrowForwardIosIcon 
//           sx={{
//             fontSize: '1.5rem',  // Size of the arrow
//             animation: `${arrowMove} 1.5s infinite`,  // Apply the animation with color change
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }

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
                  boxShadow: '0px 3px 0px 0px #f6cb99',
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
                    objectFit: 'cover',
                  }}
                  image={news.Image}
                  alt={news.Title}
                />
                <CardContent
                  sx={{
                    width: '50%',
                    padding: '70px',
                    height: '100%',
                    overflow: 'hidden', // Keep overflow hidden
                  }}
                >
                  <Typography component="h5" variant="h6" sx={{ color: '#1d4f67', fontSize: '1.2rem' }}>
                    {news.Title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ marginTop: '8px', fontSize: '1rem' }}>
                    {news.Content ? news.Content.substring(0, 150) : 'No content available'}...  {/* Shorten the content */}
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
            fontSize: '1.5rem',  // Size of the arrow
            animation: 'arrowMove 1.5s infinite',  // Apply the animation with color change
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
            maxHeight: '80%', // Limit the height of the modal
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            borderRadius: '8px',
            overflow: 'auto', // Ensure the modal itself is scrollable
          }}
        >
          {selectedNews && (
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack image and content vertically
                alignItems: 'center',
                height: 'auto', // Allow the card height to expand as needed
                maxHeight: '450px', // Limit the maximum height of the card
                // boxShadow: '0px 4px 0px 0px orange',
                borderRadius: '8px',
                overflow: 'auto', // Enable scrolling for the card
                backgroundColor: '#f9f9f9',
                position: 'relative',
                overflowY: 'auto', // Use 'auto' instead of 'scroll' to hide the scrollbar when not needed
                maxHeight: '69.74vh',
                '&::-webkit-scrollbar': {
                  width: '8px', // Adjust the width of the scrollbar
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#888', // Scrollbar thumb color
                  borderRadius: '7px', // Rounded corners for the scrollbar thumb
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: '#555', // Darker color when hovering over the scrollbar thumb
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#f1f1f1', // Background color of the scrollbar track
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '100%', // Image takes full width
                  height: 'auto', // Height adjusts to keep aspect ratio
                  maxHeight: '50%', // Limit the height of the image
                  objectFit: 'cover',
                }}
                image={selectedNews.Image}
                alt={selectedNews.Title}
              />
              <CardContent
                sx={{
                  width: '100%', // Content takes full width
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  height: 'auto', // Content height adjusts as needed
                }}
              >
                <Typography component="h5" variant="h6" sx={{ color: '#1d4f67' }}>
                  {selectedNews.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                  {selectedNews.Content}
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
// export default NewsSlider;
