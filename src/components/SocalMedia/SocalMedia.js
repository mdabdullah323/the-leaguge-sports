import React from 'react';
import { Col } from 'react-bootstrap';
import SocalMediaLink from '../SocalMediaLink/SocalMediaLink';
import './SocalMedia.css';

const SocalMedia = ({ twitter, facebook, youtube }) => {
    return (
        <Col md={12} sm={12} className='socal-media-area'>
            <SocalMediaLink type='twitter' source={twitter} />
            <SocalMediaLink type='facebook' source={facebook} />
            <SocalMediaLink type='youtube' source={youtube} />
        </Col>
    );
};

export default SocalMedia;