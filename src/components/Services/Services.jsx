import React from 'react' 
import { Grid, Box, Typography, Paper, Button} from '@mui/material'
import PoolIcon from '@mui/icons-material/Pool'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import PlumbingIcon from '@mui/icons-material/Plumbing'
import BuildIcon from '@mui/icons-material/Build'
import EngineeringIcon from '@mui/icons-material/Engineering'
import SmartToyIcon from '@mui/icons-material/SmartToy'
// import style from './Services.module.css'

const services = [ 
    { 
        name: 'Construcción de Piscinas', 
        icon: <PoolIcon sx={{ fontSize: '3.3rem' }} />, 
        description: 'Construímos piscinas de alta calidad, adaptadas a cualquier espacio y necesidad, asegurando una durabilidad excepcional y un acabado impecable.' 
    },
    { 
        name: 'Diseño Personalizado', 
        icon: <DesignServicesIcon sx={{ fontSize: '3.3rem' }} />, 
        description: 'Ofrecemos diseños personalizados para que cada piscina sea única, reflejando el estilo y las preferencias individuales de nuestros clientes con creatividad e innovación.' 
    }, 
    { 
        name: 'Remodelación', 
        icon: <BuildIcon sx={{ fontSize: '3.3rem' }} />, 
        description: 'Transformamos y mejoramos piscinas existentes con proyectos de remodelación que incorporan las últimas tendencias y tecnologías, revitalizando su funcionalidad y estética.' 
    },
    { 
        name: 'Mantenimiento', 
        icon: <PlumbingIcon sx={{ fontSize: '3.3rem' }} />, 
        description: 'Proveemos servicios integrales de mantenimiento para conservar su piscina en perfectas condiciones, asegurando un funcionamiento óptimo y prolongando su vida útil.' 
    },
    { 
        name: 'Asesoría Técnica', 
        icon: <EngineeringIcon sx={{ fontSize: '3.3rem' }} />, 
        description: 'Brindamos asesoría técnica especializada para la correcta instalación, mantenimiento y optimización de piscinas, garantizando soluciones eficientes y efectivas.' 
    },
    { 
        name: 'Piscinas Inteligentes', 
        icon: <SmartToyIcon sx={{ fontSize: '3.3rem' }} />, 
        description: 'Implementamos tecnología avanzada en el diseño y construcción de piscinas inteligentes, ofreciendo sistemas automatizados de control y monitoreo para una experiencia de uso moderna y cómoda.' 
    },
];

function Services() {
    return (
      <>
        <section id="services">
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
                Nuestros Servicios
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}> 
                {services.map((service, index) => ( 
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%', 
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                  transform: 'scale(1.05)',
                                  boxShadow: 8,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 2,
                                    color: 'primary.main',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                      transform: 'scale(1.2)',
                                    },
                                }}
                            >
                                {service.icon}
                            </Box>

                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    mb: 1, 
                                    color: 'text.primary' 
                                }}
                            >
                                {service.name}
                            </Typography>

                            <Typography 
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.5,
                                    mt: 'auto',
                                }}
                            >
                                {service.description}
                            </Typography>

                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                Más información
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </section>
      </>
    )
}

export default Services