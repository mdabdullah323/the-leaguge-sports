import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './League.css';

const League = ({ idLeague }) => {
    const [leagueInfo, setLeagueInfo] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeagueInfo(data.leagues[0]))
    }, [idLeague]);

    const { strBadge, strLeague, strSport, strPoster } = leagueInfo;
    const cardStyle = {
        background: `url(${strPoster}), rgba(0, 0, 0, 0.7)`,
        backgroundBlendMode: 'overlay',
        boxShadow: '5px 5px 5px gray',
        color: 'white',
    }

    return (
        <Col lg={4} md={6} sm={12} className="single-league-area">
            <Card style={cardStyle}>
                <Card.Img as={Image} fluid variant="top" src={strBadge} className="league-badge"/>
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>Sports Type: {strSport}</Card.Text>
                    <Button as={Link} to={`/league/${idLeague}`} variant="primary">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default League;