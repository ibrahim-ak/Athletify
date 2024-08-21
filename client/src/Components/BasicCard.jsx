import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';

function CardDisplay() {
  return (
    <div style={{ marginTop: '50px', marginBottom: "100px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', marginTop: "100px" }}>
        {Array(6).fill(0).map((_, index) => (
          <Card
            key={index}
            sx={{
              width: 320,
              marginLeft: "50px",
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                '& .overlay': {
                  opacity: 1,
                },
                '& .partner-name': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Box sx={{ position: 'relative', height: '100%' }}>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt="Yosemite National Park"
                />
              </AspectRatio>
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              />
              <Typography
                className="partner-name"
                variant="h6"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) translateY(20px)',
                  color: '#fff',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                  textAlign: 'center',
                }}
              >
                Yosemite National Park
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default CardDisplay;
