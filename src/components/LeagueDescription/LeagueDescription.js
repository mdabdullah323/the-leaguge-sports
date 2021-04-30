import React from 'react';
import { Col } from 'react-bootstrap';
import './LeagueDescription.css';

const LeagueDescription = ({description}) => {
    return (
        <Col md={12} sm={12} className="description-area">
            <p>{description}</p>
        </Col>
    );
};

export default LeagueDescription;