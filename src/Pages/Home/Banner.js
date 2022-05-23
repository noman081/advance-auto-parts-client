import React from 'react';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-5/6">
                <img src={banner1} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle my-auto">❮</a>
                    <div className='text-white'>
                        <h2 className="lg:text-5xl lg:mt-52 sm:text-2xl font-semibold">Get you best car parts</h2>
                        <p className='lg:mt-8'>Our main products are Building materials, Water Technology, Auto Parts and Accessories. If you are interested in our products, please do not hesitate to contact us now！</p>
                        <button className="btn btn-primary text-white mt-3">Get Started</button>
                    </div>
                    <a href="#slide2" className="btn btn-circle my-auto">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-5/6">
                <img src={banner2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle my-auto">❮</a>
                    <div className='text-white'>
                        <h2 className="lg:text-5xl lg:mt-52 sm:text-2xl font-semibold">Get you best car parts</h2>
                        <p className='lg:mt-8'>Our main products are Building materials, Water Technology, Auto Parts and Accessories. If you are interested in our products, please do not hesitate to contact us now！</p>
                        <button className="btn btn-primary text-white mt-3">Get Started</button>
                    </div>
                    <a href="#slide3" className="btn btn-circle my-auto">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-full">
                <img src={banner3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle my-auto">❮</a>
                    <div className='text-white'>
                        <h2 className="lg:text-5xl lg:mt-52 sm:text-2xl font-semibold">Get you best car parts</h2>
                        <p className='lg:mt-8'>Our main products are Building materials, Water Technology, Auto Parts and Accessories. If you are interested in our products, please do not hesitate to contact us now！</p>
                        <button className="btn btn-primary text-white mt-3">Get Started</button>
                    </div>
                    <a href="#slide1" className="btn btn-circle my-auto">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;