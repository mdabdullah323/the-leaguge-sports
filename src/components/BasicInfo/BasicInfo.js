import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './BasicInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import malePlayerImage from '../../images/male.png';
import femalePlayerImage from '../../images/female.png';

const BasicInfo = ({name, founded, country, sportsType, gender}) => {
    let playerImage;
    if(gender){
        playerImage = gender.toLowerCase() === 'male' ? malePlayerImage : femalePlayerImage;
    }
    
    return (
        <Col md={12} className='basic-info-area'>
            <Row>
                <Col md={6} sm={12}>
                    <h3 className="league-name">{name}</h3>
                    <h6><FontAwesomeIcon icon={faMapMarkerAlt} className="infoLogo" /> Founded: {founded}</h6>
                    <h6><FontAwesomeIcon icon={faFlag} className="infoLogo" /> Country: {country}</h6>
                    <h6><FontAwesomeIcon icon={faFutbol} className="infoLogo" /> Sport Type: {sportsType}</h6>
                    <h6><FontAwesomeIcon icon={faVenusMars} className="infoLogo" /> Gender: {gender}</h6>
                </Col>
                <Col md={6} sm={12}>
                    <Image src={playerImage} fluid />
                </Col>
            </Row>
        </Col>
    );
};

export default BasicInfo;