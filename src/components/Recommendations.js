import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './styles/Recommendations.css';
import {MdCheckCircle} from 'react-icons/md'
class Recomendations extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl='6'>
                            <div style={{background : 'red'}}>
                                <img className='Rec-Img' width='100%' src='https://ncovid.themetags.com/img/recommendation.svg'/>
                            </div>   
                        </MDBCol>
                        <MDBCol xl='6'>
                            <div className='Rec-Text-Box'>
                                <div className='Rec-Title'>
                                    Recommendations to Prevent Infection Spread
                                </div>
                                <div className='Rec-Subtitle'>
                                    Professionally implement transparent e-business and backward-compatible opportunities. Authoritatively evisculate impactful models via effective services. Enthusiastically plagiarize innovative outsourcing through sustainable "outside the box" thinking.
                                </div>
                                <div className='Rec-List'>
                                    <ul>
                                        <li>
                                            <span style={{fontWeight : 'bold', color :'#222'}}>Wash your hands – </span>often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.
                                        </li>
                                        <li>
                                            <span style={{fontWeight : 'bold', color :'#222'}}>Distance between yourself and other people – </span>if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick.
                                        </li>
                                        <li>
                                            <span style={{fontWeight : 'bold', color :'#222'}}>Cover your mouth and nose – </span>with a tissue when you cough or sneeze or use the inside of your elbow.
                                        </li>
                                        <li>
                                            <span style={{fontWeight : 'bold', color :'#222'}}>Clean AND disinfect frequently touched surfaces daily – </span> This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, and sinks.
                                        </li>
                                        <li>
                                            <span style={{fontWeight : 'bold', color :'#222'}}>Clean the dirty surfaces – </span> Use detergent or soap and water prior to disinfection.
                                        </li>
                                    </ul>
                                </div>
                            </div>   
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        );
    }
}
 
export default Recomendations;