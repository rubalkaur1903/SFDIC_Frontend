import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { ImageSingle } from '.';


const Images = () => {
    const [images, setImages] = useState('');

    const fetchImages = async () => {
        const resp = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=SH821rGsuCxpudVgbEJHKWgFGtimLAobSOSKGacp');
        const result = await resp.json();
        if (result) setImages(result.photos)
    }
    useEffect(() => {
        try {
            fetchImages()
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
    <>
        <h1>Photos of Mars</h1>
        <Grid container columnspacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                images && images.map(image => {
                    return (
                        <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
                            <ImageSingle image={image} key={image.id} />
                        </Grid>
                    )
                })
            }
        </Grid>
    </>
    )
}

export default Images;