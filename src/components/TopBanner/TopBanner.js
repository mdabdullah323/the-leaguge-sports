import React from 'react';
import './TopBanner.css';
import defaultBannerImg from '../../images/banner.png';

const TopBanner = (props) => {
    const {banner} = props;
    const bannerImage = banner ? banner : defaultBannerImg;
    return (
        <div className="banner-area" style={{backgroundImage: `url(${bannerImage})`}}>
            {
                props.children
            }
        </div>
    );
};

export default TopBanner;