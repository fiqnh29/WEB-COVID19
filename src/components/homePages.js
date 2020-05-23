import React from 'react';
import './styles/homePages.css'
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import CasesCard from './casesCard';
import Recommendations from './Recommendations'
class Home extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className='Header-Container' style={{backgroundImage:`url('https://ncovid.themetags.com/img/bg-illustration.svg')`}}>
                    <div className='Header-Box d-flex justify-content-center'>
                        <MDBContainer className='m-auto'>
                        <MDBRow>
                            <MDBCol md='7'>
                                <div className='Header-Box-Text'>
                                    <div className='Header-Title'>
                                        Be Informed About The Corona Virus <span style={{color:'orange'}}>(COVID-19)</span>
                                    </div>
                                    <div className='Header-Subtitle'>
                                        Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.
                                    </div>
                                    <div>
                                        <button className='Button-HT-Protect'>How to protect</button>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md='5'>
                                <div className='Header-Box-Img'>
                                    <img width='100%' src='https://ncovid.themetags.com/img/hero-animation-03.svg'/>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
                <div className='CasesCard-Container'>
                    <CasesCard/>
                </div>
                <div className='Recommendations-Container'>
                    <Recommendations/>
                </div>
                <div className='Hotline-Container' style={{backgroundImage:`url('https://ncovid.themetags.com/img/blog/1.jpg')`}}>
                    ff
                </div>
                <div style={{height:'1000px'}}>

                </div>
            </div>
        );
    }
}
 
export default Home;