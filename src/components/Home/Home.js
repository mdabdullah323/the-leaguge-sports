import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { LeaguesContext } from '../../App';
import League from '../League/League';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    const allLeagues = useContext(LeaguesContext);

    return (
        <div style={{backgroundColor: 'white'}}>
            <TopBanner>
                <h1>The League Sports</h1>
            </TopBanner>
            <Container>
                <Row>
                    {
                        allLeagues.map(league => <League idLeague={league.idLeague} key={league.idLeague}></League>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;