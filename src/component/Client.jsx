import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

export const Client = ({data}) => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:8,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:8,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                },
            },
        ],
    };

    // Array of image paths
    const clientImages = [
        { url: require('../assets/images/client/01.jpg') },
        { url: require('../assets/images/client/02.jpg') },
        { url: require('../assets/images/client/03.jpg') },
        { url: require('../assets/images/client/04.jpg') },
        { url: require('../assets/images/client/05.jpg') },
        { url: require('../assets/images/client/06.jpg') },
        { url: require('../assets/images/client/07.jpg') },
        { url: require('../assets/images/client/08.jpg') },
        { url: require('../assets/images/client/09.jpg') },
        { url: require('../assets/images/client/10.jpg') },
        { url: require('../assets/images/client/11.jpg') },
    ];

    console.log(data)
    return (
        <>
        <div className="title-link-wrapper title-underline title-post after-none mb-4 ">
            <h2 className="title font-secondary ls-normal mb-0">Our Valuable Clients</h2>
            <a href="#" className="font-weight-bold font-size-normal mb-0">
                View All Clients
                <i className="w-icon-long-arrow-right"></i>
            </a>
            </div>
            <div>
        
            <div className="swiper-container swiper-theme brands-wrapper br-sm mb-10">
                <Slider {...settings}>
                    {data.map((imageName, index) => (
                        <div className="swiper-slide" key={index}>
                            <figure >
                                <img  src={`${process.env.REACT_APP_API_URL}/${imageName.logo}`} alt="Brand" />
                            </figure>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    );
};
