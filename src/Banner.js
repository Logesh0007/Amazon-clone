import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

export default function SimpleSlider() {
    // const prevStyle = {
    //     top: 'auto',
    //     transform: 'none',
    // };

    // function SampleNextArrow(props) {
    //     const { onClick } = props;
    //     return (
    //         // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    //         <svg className="left-arrow slick-arrow" onClick={onClick} width="50" height="80" viewBox="0 0 392 743" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M382.461 734.117C388.043 728.402 391.168 720.73 391.168 712.741C391.168 704.752 388.043 697.08 382.461 691.365L70.5887 371.429L382.461 51.5572C388.043 45.8421 391.168 38.1702 391.168 30.1812C391.168 22.1923 388.043 14.5202 382.461 8.80518C379.747 6.0184 376.503 3.80343 372.92 2.29102C369.336 0.778612 365.486 -0.000543322 361.597 -0.000543322C357.707 -0.000543322 353.857 0.778612 350.274 2.29102C346.69 3.80343 343.446 6.0184 340.733 8.80518L9.08469 349.093C3.2598 355.069 -0.000215332 363.084 -0.000215332 371.429C-0.000215332 379.774 3.2598 387.789 9.08469 393.765L340.733 734.053C343.446 736.84 346.69 739.055 350.274 740.568C353.857 742.08 357.707 742.859 361.597 742.859C365.486 742.859 369.336 742.08 372.92 740.568C376.503 739.055 379.747 736.84 382.461 734.053V734.117Z" fill="black" fillOpacity="0.3" />
    //         </svg>
    //     );
    // }

    // function SamplePrevArrow(props) {
    //     const { style, onClick } = props;
    //     return (
    //         <svg className="right-arrow slick-arrow" style={{ ...style, ...prevStyle }} onClick={onClick} width="50" height="80" viewBox="0 0 392 743" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M8.7074 8.74176C3.12516 14.4568 0 22.1288 0 30.1178C0 38.1067 3.12516 45.7787 8.7074 51.4938L320.579 371.43L8.7074 691.302C3.12516 697.017 0 704.689 0 712.678C0 720.667 3.12516 728.339 8.7074 734.054C11.4207 736.841 14.6649 739.056 18.2483 740.568C21.8318 742.08 25.6819 742.859 29.5714 742.859C33.4609 742.859 37.311 742.08 40.8945 740.568C44.4779 739.056 47.722 736.841 50.4354 734.054L382.083 393.766C387.908 387.79 391.168 379.775 391.168 371.43C391.168 363.085 387.908 355.07 382.083 349.094L50.4354 8.80577C47.722 6.01899 44.4779 3.80402 40.8945 2.29161C37.311 0.7792 33.4609 0 29.5714 0C25.6819 0 21.8318 0.7792 18.2483 2.29161C14.6649 3.80402 11.4207 6.01899 8.7074 8.80577V8.74176Z" fill="black" fillOpacity="0.3" />
    //         </svg>
    //     );
    // }
    
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        // nextArrow: <SamplePrevArrow />,
        // prevArrow: <SampleNextArrow />
    };
    return (
        <Slider {...settings} className="banner__cont">
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/PD/SPark/D1/D50039684_PC_Hero_3000x1200._CB631773683_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/2022/Jul/PD/GW/Cam_Tallhero_3000x1200._CB631888271_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/PD22/Graphics/Hero/Coupon/Unrec/New/PC_Hero_3000x1200._CB631881513_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irshad/GW/Appliances2-Hero-3000x1200._CB631881162_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/PD/GW/Herotator/SkinCare/PC_Hero_3000x1200._CB631770828_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Prime-22/D50443905_PC_Hero_noflap_3000x1200._CB631817934_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD22/GW/endstodayprime2._CB632192369_.jpg" alt="" />
            </div>
        </Slider>
    );
}