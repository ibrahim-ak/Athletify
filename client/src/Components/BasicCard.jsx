import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';

function CardDisplay() {
  return (
    <div style={{ marginTop: '50px', marginBottom: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', marginTop: '100px' }}>
        {/* Card 1 */}
        <Card
          sx={{
            width: 320,
            marginLeft: '50px',
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
                src="client/src/media/Logo-1@4x (1).png"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="Card Image 1"
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
              Card Title 1
            </Typography>
          </Box>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            width: 320,
            marginLeft: '50px',
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
                src="client/src/media/Logo-1@4x (2).png"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="Card Image 2"
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
              Card Title 2
            </Typography>
          </Box>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            width: 320,
            marginLeft: '50px',
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
                src="client/src/media/Logo-1@4x (3).png"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="Card Image 3"
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
              Card Title 3
            </Typography>
          </Box>
        </Card>

        {/* Card 4 */}
        <Card
          sx={{
            width: 320,
            marginLeft: '50px',
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
                src="client/src/media/Logo-1@4x (4).png"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="Card Image 4"
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
              Card Title 4
            </Typography>
          </Box>
        </Card>

        {/* Card 5 */}
        <Card
          sx={{
            width: 320,
            marginLeft: '50px',
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
                src="client/src/media/Logo-1@4x (5).png"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="Card Image 5"
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
              Card Title 5
            </Typography>
          </Box>
        </Card>

        {/* Card 6 */}
        <Card
          sx={{
            width: 320,
            marginLeft: '50px',
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
                src="client/src/media/Logo-1@4x (6).png"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="Card Image 6"
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
              Card Title 6
            </Typography>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default CardDisplay;
