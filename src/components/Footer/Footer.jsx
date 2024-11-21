import * as React from 'react'
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material'
import { Facebook, Grade, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import AdbIcon from '@mui/icons-material/Adb'
//import style from './Footer.module.css'

function Footer() {
    return (
      <>
        <Box 
            sx={{ 
                backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.grey[800]), 
                padding: { xs: 4, sm: 6 },
                color: 'white',
                mt: 4,
                textAlign: 'center'
            }} 
            component="footer"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="primary.main">
                                Piscinas Increíbles
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <IconButton href="#header" sx={{ mr: 0, mt: '-5px', color: 'white' }}>
                                    <AdbIcon  />
                                </IconButton>

                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="#header"
                                    sx={{
                                        mr: 2,
                                        display: 'flex',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LOGO
                                </Typography>
                            </Box>

                            <Typography variant="body1" color="white" mt={2}>
                                Diseño y construcción de piscinas personalizadas de alta calidad. Tu proyecto, nuestra pasión.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="primary.main" mb={2}>
                                Enlaces rápidos
                            </Typography>

                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Link href="#services" color="inherit" variant="body1" sx={{ textDecoration: 'none' }}>Nuestros Servicios</Link>
                                </Grid>

                                <Grid item>
                                    <Link href="#header" color="inherit" variant="body1" sx={{ textDecoration: 'none' }}>Sobre Nosotros</Link>
                                </Grid>

                                <Grid item>
                                    <Link href="#contact" color="inherit" variant="body1" sx={{ textDecoration: 'none' }}>Contacto</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="primary.main" mb={2}>
                                Síguenos
                            </Typography>

                            <Box>
                                <IconButton color="inherit" href="https://facebook.com" target="_blank" aria-label="Facebook">
                                    <Facebook />
                                </IconButton>
                                <IconButton color="inherit" href="https://instagram.com" target="_blank" aria-label="Instagram">
                                    <Instagram />
                                </IconButton>
                                <IconButton color="inherit" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                    <LinkedIn />
                                </IconButton>
                                <IconButton color="inherit" href="https://twitter.com" target="_blank" aria-label="Twitter">
                                    <Twitter />
                                </IconButton>
                            </Box>

                            <Typography variant="body1" color="white" mt={2}>
                                Tel: <Link href="tel:+123456789" color="inherit">+1 234 567 89</Link>
                            </Typography>

                            <Typography variant="body1" color="white">
                                Email: <Link href="mailto:info@piscinaselegantes.com" color="inherit">info@piscinasincreibles.com</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box textAlign="center" mt={4}>
                    <Typography variant="body1" color="white">
                        Copyright © {new Date().getFullYear()} Piscinas Increíbles. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
      </>
    )
}

export default Footer