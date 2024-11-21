import React, { useState } from 'react'
import { Grid, Box, Typography, TextField, Button, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import Swal from 'sweetalert2'
//import style from './Contact.module.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        message: '', 
        phone: '' ,
        service: ''
    })

    const [errors, setErrors] = useState({})

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'El nombre es obligatorio.'
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido.'
        }
        if (!formData.phone) newErrors.phone = 'El teléfono es obligatorio.'
        if (!formData.service) newErrors.service = 'Selecciona un servicio.'
        if (!formData.message) newErrors.message = 'El mensaje es obligatorio.'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    };

    const handleChange = (e) => { 
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        if (validateForm()) {
            Swal.fire({
                icon: 'success',
                title: '¡Formulario enviado!',
                text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
                confirmButtonColor: '#3085d6',
            });
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })
            console.log('Datos formulario:', formData)
        }
    }

    return (
      <>
        <section id="contact">
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
                Contáctanos
            </Typography>

            <Grid container justifyContent="center" sx={{ padding: 4 }}>
                <Grid item xs={12} sm={8} md={4}>
                    <Paper
                        elevation={6}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            backgroundColor: '#fff',
                            boxShadow: 10,
                            '&:hover': {
                                boxShadow: 16,
                            },
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Box display="flex" flexDirection="column" gap={3}>
                                <TextField 
                                    label="Nombre"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                        },
                                    }}
                                />

                                <TextField 
                                    label="Correo Electrónico"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                        },
                                    }}
                                />

                                <TextField 
                                    label="Teléfono"
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                        },
                                    }}
                                />

                                <FormControl fullWidth error={!!errors.service}>
                                    <InputLabel id="service-label">Servicio</InputLabel>
                                    <Select
                                        labelId="service-label"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        sx={{
                                            borderRadius: 2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    >
                                        <MenuItem value="Construcción de Piscinas">Construcción de Piscinas</MenuItem>
                                        <MenuItem value="Diseño Personalizado">Diseño Personalizado</MenuItem>
                                        <MenuItem value="Remodelación">Remodelación</MenuItem>
                                        <MenuItem value="Mantenimiento">Mantenimiento</MenuItem>
                                        <MenuItem value="Asesoría Técnica">Asesoría Técnica</MenuItem>
                                        <MenuItem value="Piscinas Inteligentes">Asesoría Técnica</MenuItem>
                                    </Select>
                                    <Typography 
                                        variant="caption" 
                                        color="error" 
                                        sx={{ mt: 1 }}
                                    >
                                        {errors.service}
                                    </Typography>
                                </FormControl>    

                                <TextField 
                                    label="Mensaje"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={6}
                                    error={!!errors.message}
                                    helperText={errors.message}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                        },
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        borderRadius: 2,
                                        padding: '12px 24px',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                        },
                                    }}
                                >
                                    Enviar
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </section>
      </>
    )
}

export default Contact