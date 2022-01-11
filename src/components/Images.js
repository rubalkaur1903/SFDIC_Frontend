import React, { useEffect, useState } from 'react';


const Images = () => {
    const [images, setImages] = useState('');
    console.log("images: ", images)

    const fetchImages = async () => {
        const resp = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=SH821rGsuCxpudVgbEJHKWgFGtimLAobSOSKGacp');
        const result = await resp.json();
        console.log("result: ", result);
        if (result) setImages(result.photos)
    }
    useEffect(() => {
        try {
            fetchImages()
        } catch (error) {
            console.error(error)
        }
    }, [])

    return <>
        <h1>Welcome to NASA Image Library</h1>
        {
            images && images.map(image => <div key={image.id}>
                <img src={image.img_src} />
            </div>)
        }
    </>
}

export default Images;