import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './styles/safeImportant.css'
class SafeImportant extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl='6'>
                            <div>
                                <div className='SF-Title'> 
                                    How to Stay Safe Important Precautions
                                </div>
                                <div className='SF-Subtitle'>
                                    Professionally implement transparent e-business and backward-compatible opportunities. Authoritatively evisculate impactful models via effective services. Enthusiastically plagiarize innovative outsourcing through sustainable "outside the box" thinking.
                                </div>
                                <div>
                                    <div className='SF-Title-List'>Things we should do</div>
                                    <ul className='SF-UL'>
                                        <li>Clean your hands often</li>
                                        <li>Cover coughs and sneezes</li>
                                        <li>Clean and disinfect</li>
                                        <li>Stay home if you’re sick</li>
                                        <li>Cover your cough tissue paper</li>
                                        <li>Check your body regulerly</li>
                                    </ul>
                                    <div className='SF-Title-List'>Things we shouldn't do</div>
                                    <ul className='SF-UL'>
                                        <li>Avoid contact with sick people</li>
                                        <li>Avoid contact sick people</li>
                                        <li>Avoid crowded places</li>
                                        <li>Avoid large groups of people</li>
                                        <li>Do not share your stuffs</li>
                                        <li>Avoid contact animals</li>
                                    </ul>

                                </div>

                            </div>
                        </MDBCol>
                        <MDBCol xl='6'>
                            <div className='SF-Box-Img'>
                                <img className='SF-Image' src='https://ncovid.themetags.com/img/recommendations-2.svg'/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
 
export default SafeImportant;