import React, { useState } from 'react'
import { Typography, Box, Grid, Modal } from '@mui/material'
import style from './Gallery.module.css'

const images = [
    { src: '/images/piscina1.jpg', title: 'Cabo de la Vela - Colombia' },
    { src: '/images/piscina2.jpg', title: 'Santiago de Cali - Colombia' },
    { src: '/images/piscina3.jpg', title: 'Punta Centinela - Ecuador' },
    { src: '/images/piscina4.jpg', title: 'Mompiche - Ecuador' },
    { src: '/images/piscina5.jpeg', title: 'Tumaco - Colombia' },
    { src: '/images/piscina6.jpeg', title: 'Medellín - Colombia' },
];

function Gallery() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleOpen = (image) => {
      setSelectedImage(image)
      setOpen(true)
    };
  
    const handleClose = () => {
      setOpen(false)
      setSelectedImage(null)
    };

    return (
      <>
        <section id="gallery" className={ style.section }>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    textTransform: 'uppercase',
                    color: 'primary.main',
                    paddingTop: '100px'
                }}
            >
                Nuestras Piscinas
            </Typography>

            <Box sx={{ padding: 4 }}>
                <Grid container spacing={2}>
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box 
                                component="img"
                                src={image.src}
                                alt={image.title}
                                onClick={() => handleOpen(image)}
                                sx={{
                                  width: '100%',
                                  height: '300px',
                                  objectFit: 'cover',
                                  borderRadius: 2,
                                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                  transition: 'transform 0.3s, box-shadow 0.3s',
                                  cursor: 'pointer',
                                  '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                                  },
                                }}
                            />
                            <Typography variant="h7" display="block" align="center" mt={1}>
                                {image.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: '600px',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    {selectedImage && (
                        <>
                            <Box
                                component="img"
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                sx={{
                                    width: '100%',
                                    maxWidth: '950px', 
                                    maxHeight: '90vh', 
                                    objectFit: 'cover', 
                                    borderRadius: 2,
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
                                    mb: 2,
                                }}
                            />
                            <Typography variant="h6" align="center">
                                {selectedImage.title}
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </section>
      </>
    )
}

export default Gallery