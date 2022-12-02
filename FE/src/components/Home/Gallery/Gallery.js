import React from 'react'
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import images from '../../../constants/images';
import './Gallery.css';

const galleryImages = [images.gallery1, images.gallery2];

const Gallery = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left'){
            current.scrollLeft -= 1200;
        } else {
            current.scrollLeft += 1200;
        }
    }

    return (
        <div className='home__gallery flex__center'>
            <div className='home__gallery-images'>
                <div className='home__gallery-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className='home__gallery-images_card flex__center' key={`gallery_image-${index + 1}`} >
                            <img src={image} alt="gallery" />
                        </div>
                    ))}
                </div>
                <div className='home__gallery-images_arrows'>
                    <VscChevronLeft className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    <VscChevronRight className='gallery__arrow-icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    );

}

export default Gallery;