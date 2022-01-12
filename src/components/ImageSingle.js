import React, { useEffect, useState } from 'react';
import {Card, Typography, makeStyles, Button} from '@material-ui/core';
import Image from 'material-ui-image';
import { FcLike } from "react-icons/fc";
import { VscHeart } from "react-icons/vsc";

const useStyles = makeStyles({
    card:{
        padding:'1rem',
        margin:'1rem'
    },
    button:{
        marginTop: '2rem'
    }
})
const ImageSingle = ({image}) => {
    const [like, setLike] = useState(false);
    const classes = useStyles();

    const handleLike = (e) => {
        e.preventDefault();
        setLike(true);
    }
    const handleUnlike = (e) => {
        e.preventDefault();
        setLike(false);
    }

    return <>
        <Card className={classes.card}>
            <Image src={image.img_src} />
            <Typography>{image.rover.name} - {image.camera.full_name}</Typography>
            <Typography>{image.earth_date}</Typography>
            <Typography className={classes.button}> 
                {
                    like ?
                    <Button variant='outlined' onClick={handleUnlike}><FcLike /></Button> :
                    <Button variant='outlined' onClick={handleLike}><VscHeart /></Button>
                }
            </Typography>
        </Card>
    </>
}

export default ImageSingle;