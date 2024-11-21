import React from 'react'
import { Grid, Typography, Paper, Avatar } from '@mui/material'
import style from './Testimonials.module.css'

const testimonials = [ 
    { 
        name: 'María Camila Gómez', 
        image: '/images/customer1.jpg', 
        comment: 'El servicio fue excelente y mi piscina quedó espectacular.' 
    },
    {
        name: 'Juan Rodriguez', 
        image: '/images/customer2.jpg', 
        comment: 'Profesionales y rápidos. Muy recomendados.' 
    } ,
    { 
        name: 'Camilo Pérez', 
        image: '/images/customer3.jpg', 
        comment: '¡Una experiencia maravillosa! Excelente diseño, elegante y moderno.' 
    } ,
];

function Testimonials() {
    return (
        <>
            <section id="testimonials" className={ style.section }> 
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
                    Testimonios
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}> 
                    {testimonials.map((testimonial, index) => ( 
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    borderRadius: 2,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 8,
                                        backgroundColor: 'primary.light',
                                        '& .testimonial-comment': {
                                            color: '#f9f9f9',
                                        },
                                        '& .testimonial-name': {
                                            color: '#f9f9f9',
                                        },
                                    },
                                }}
                            >
                                <Avatar 
                                    src={testimonial.image}
                                    alt={`Testimonio de ${testimonial.name}`}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        mb: 2,
                                        border: '2px solid #fff',
                                        boxShadow: 3,
                                    }}
                                />

                                <Typography
                                    variant="body1"
                                    className="testimonial-comment"
                                    sx={{
                                        fontStyle: 'italic',
                                        mb: 2,
                                        color: 'text.secondary',
                                        fontSize: '1.1rem',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    "{testimonial.comment}"
                                </Typography>

                                <Typography
                                    variant="h6"
                                    className="testimonial-name"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main',
                                    }}
                                >
                                    {testimonial.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    )
}

export default Testimonials