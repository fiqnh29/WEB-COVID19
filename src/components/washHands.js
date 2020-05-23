import React from 'react';
import './styles/washHands.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const washArr = [
    {
        pic : 'https://ncovid.themetags.com/img/h1.svg',
        txt : 'Wet Hands'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h2.svg',
        txt : 'Apply Shop'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h3.svg',
        txt : 'Rub Hands Palm to Palm'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h4.svg',
        txt : 'Lather The Back of Hands'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h5.svg',
        txt : 'Scrub Between Your Fingers'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h6.svg',
        txt : 'Rub The Back of Fingers'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h7.svg',
        txt : 'Clean Thumbs'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h8.svg',
        txt : 'Wash Fingernails'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h9.svg',
        txt : 'Rinse Hands'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h10.svg',
        txt : 'Dry with a Single Use Towel'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h11.svg',
        txt : 'Use The Towel to Turn off'
    },
    {
        pic : 'https://ncovid.themetags.com/img/h12.svg',
        txt : 'Your Hands Are Clean'
    }

]

class wasshHands extends React.Component {
    state = {  }

    renderWashHands =  () => {
        return washArr.map((val)=> {
            return(
                <MDBCol sm='3'>
                    <div className='WH-Card'>
                        <div className='WH-Card-Box-Img'>
                            <img className='WH-Img' src={val.pic}/>
                        </div>
                        <div className='WH-Card-Txt'>{val.txt}</div>
                    </div>
                </MDBCol>
            )
        })

    }

    render() { 
        return (  
            <div>
                <MDBContainer>
                <div className='WH-Title'>
                    How to Wash Your Hands
                </div>
                <div className='WH-Subtitle'>
                    Get Immediate Activation or Express Transfer service free of charge. Enthusiastically enhance plug-and-play testing procedures and cross.
                </div>
                <div style={{padding:'50px 0'}}>
                    <MDBRow>
                        {this.renderWashHands()}
                    </MDBRow>
                </div>
                </MDBContainer>

            </div>
        );
    }
}
 
export default wasshHands;