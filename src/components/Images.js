import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { ImageSingle } from '.';
import FadeLoader from "react-spinners/FadeLoader";

const useStyles = makeStyles({
    heading:{
        fontFamily: 'Ariel'
    }
});
const Images = () => {
    const [images, setImages] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();

    const fetchImages = async () => {
        const resp = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=SH821rGsuCxpudVgbEJHKWgFGtimLAobSOSKGacp');
        const result = await resp.json();
        if (result) setImages(result.photos)
    }
    useEffect(async () => {
        try {
            setIsLoading(true);
            await fetchImages();
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }, []);

    return (<>
    {
        isLoading ?
        <FadeLoader size={50} color='black' loading={isLoading} /> :
        <div>
            <Typography variant='h3' align='center' className={classes.heading} >Photos of Mars</Typography>
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
        </div>
    }
    </>)
}

export default Images;