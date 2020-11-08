import React from 'react';
import Axios from 'axios';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import './styles/casesCard.css'
class Card extends React.Component {
    state = {  
        activeCases : 0,
        recoveredCases : 0,
        deathCases : 0
    }

    componentDidMount(){
        this.getdata()
    }

    getdata = async () => {
        try{
            let res = await Axios.get('https://api.covid19api.com/world/total')
            console.log(res.data)
            this.setState({
                activeCases : res.data.TotalConfirmed,
                recoveredCases : res.data.TotalRecovered,
                deathCases : res.data.TotalDeaths
            })
        }catch(err) {
            console.log(err)
        }
    }
    render() { 
        return (  
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md='4'>
                        <div className='CaseCard-Container'>
                            <div className='CaseCard-Total' style={{color :'orange'}}>
                                {this.state.activeCases.toLocaleString()}
                            </div>
                            <div className='CaseCard-Title'>
                                Active Cases
                            </div>
                            <div className='CaseCard-Subtitle'>
                                Compellingly benchmark superior opportunities and functional technologies credibly communicate.
                            </div>
                        </div>
                        <br/>
                    </MDBCol>
                    <MDBCol md='4'>
                        <div className='CaseCard-Container'>
                            <div className='CaseCard-Total' style={{color :'green'}}>
                                {this.state.recoveredCases.toLocaleString()}
                            </div>
                            <div className='CaseCard-Title'>
                                Recovered Cases
                            </div>
                            <div className='CaseCard-Subtitle'>
                                Distinctively reconceptualize real-time partnerships with business markets extend sustainable.
                            </div>
                        </div>
                        <br/>
                    </MDBCol>
                    <MDBCol md='4'>
                        <div className='CaseCard-Container'>
                            <div className='CaseCard-Total' style={{color :'red'}}>
                                {this.state.deathCases.toLocaleString()}
                            </div>
                            <div className='CaseCard-Title'>
                                Deaths
                            </div>
                            <div className='CaseCard-Subtitle'>
                                Synergistically aggregate installed base growth strategies through an expanded functionalities.
                            </div>
                        </div>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        )
    }
}
 
export default Card;