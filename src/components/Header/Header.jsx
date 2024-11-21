import React from 'react'
import { Button, Box, Typography } from '@mui/material'
//import style from './Header.module.css'

function Header() {
    return (
      <>
        <Box 
          id="header" 
          sx={{ 
            backgroundImage: 'url(/images/fondo2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            textAlign: 'center',
            padding: { xs: 6, md: 10 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <Typography 
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              fontWeight: 'bold',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              mb: 2,
          }}
          >
            Diseño y Construcción de Piscinas de Ensueño
          </Typography>

          <Typography 
            variant="h4"
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontWeight: '300',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
              mb: 4,
          }}
          >
            Tu oasis personalizado en casa
          </Typography>

          <Button 
            variant="contained" 
            color="primary"
            size="large"
            sx={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '12px 24px',
                fontSize: { xs: '0.8rem', md: '1rem' },
                borderRadius: '30px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                    backgroundColor: '#0056b3',
                },
            }}
            href="#contact"
          >
            Cotizar Ahora
          </Button>
        </Box>
      </>
    )
}

export default Header