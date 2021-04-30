import React, { useEffect, useState } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import BasicInfo from '../BasicInfo/BasicInfo';
import LeagueDescription from '../LeagueDescription/LeagueDescription';
import LoadingData from '../LoadingData/LoadingData';
import SocalMedia from '../SocalMedia/SocalMedia';
import TopBanner from '../TopBanner/TopBanner';

const LeagueInfo = () => {
    const {idLeague} = useParams();
    const [leagueInfo, setLeagueInfo] = useState({});

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeagueInfo(data.leagues[0]))
    }, [idLeague]);

    const {
        strBanner, strLogo, strLeague, intFormedYear,
        strCountry, strSport, strGender, strDescriptionEN,
        strFacebook, strTwitter, strYoutube
    } = leagueInfo;
    const otherLeagueInfo = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore, minima delectus id harum voluptatibus. Molestias, veritatis recusandae quia error illum culpa iusto repudiandae vel assumenda, laudantium eligendi dolor eum? Perspiciatis, ratione excepturi at tempora est voluptate veniam iusto quos atque cupiditate, doloribus similique vitae pariatur hic soluta iste quaerat quis harum numquam aut saepe? Sequi dolorum vitae maiores quaerat facere ipsa tenetur ducimus omnis ut corrupti alias, iste suscipit esse quae itaque id minus tempore libero dolorem dolores amet sint similique.';
    return (
        <div style={{backgroundColor: 'rgb(233, 232, 232)'}}>
            <TopBanner banner={strBanner}>
                <Image src={strLogo} fluid style={{maxWidth: "10rem"}}></Image>
            </TopBanner>
            <Container>
                {
                    strLogo
                    ? <Row>
                        <BasicInfo name={strLeague} founded={intFormedYear} country={strCountry} sportsType={strSport} gender={strGender} ></BasicInfo>
                        <LeagueDescription description={strDescriptionEN} />
                        <LeagueDescription description={otherLeagueInfo} />
                        <SocalMedia twitter={strTwitter} facebook={strFacebook} youtube={strYoutube} />
                      </Row>
                    : <LoadingData />
                }
                
            </Container>
        </div>
    );
};

export default LeagueInfo;