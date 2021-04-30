import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const SocalMediaLink = ({type, source}) => {
    let socalIcon;
    let backgroundColor;

    if(type === 'twitter'){
        socalIcon = faTwitter;
        backgroundColor = '#1DA1F2';
    } else if(type === 'facebook'){
        socalIcon = faFacebookF;
        backgroundColor = '#3B5998';
    } else {
        socalIcon = faYoutube;
        backgroundColor = '#FF0000';
    }

    const iconStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        marginLeft: '15px',
    }

    return (
        <div style={iconStyle}>
            <a href={`https://${source}`} target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={socalIcon} style={{fontSize: '30px', color: 'white'}} /></a>
        </div>
    );
};

export default SocalMediaLink;