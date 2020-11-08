import React from 'react';
import './styles/allCountry.css'
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

class AllCountry extends React.Component {
    state = { 
        data : []
     }

    componentDidMount(){
        this.getAllData()
        this.getData()
    }

    getAllData = async () => {
        try{
            console.log('.....')
            let res = await Axios.get('https://api.covid19api.com/all')
            console.log(res.data.length)
        }catch(err){
            console.log(err)
        }
    }

    getData = async () => {
        try{
            let res = await Axios.get('https://api.covid19api.com/summary')
            this.setState({data : res.data.Countries})
        }catch(err){
            console.log(err)
        }
    }


    renderData = () => {
        return this.state.data.map((val, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{val.Date.split('T').map((item) => " " +  item.split('Z')[0])}</td>
                    <td>{val.Country}</td>
                    <td style={{color : 'orange'}}>{val.NewConfirmed}</td>
                    <td style={{color : 'orange'}}>{val.TotalConfirmed}</td>
                    <td style={{color : 'red'}}>{val.NewDeaths}</td>
                    <td style={{color : 'red'}}>{val.TotalDeaths}</td>
                    <td style={{color : 'green'}}>{val.NewRecovered}</td>
                    <td style={{color : 'green'}}>{val.TotalRecovered}</td>
                </tr>
            )
        })
    }

    render() { 
        return (  
            <div style={{height: "500px", overflow: "auto"}}>
                <MDBContainer fluid>
                {/* <div>All Country</div> */}
                <MDBTable responsiveXl striped className='AC-Table'>
                    <MDBTableHead>
                        <tr>
                            <th>No.</th>
                            <th>Date</th>
                            <th>Country</th>
                            <th>New Confirmed</th>
                            <th>Total Confirmed</th>
                            <th>New deaths</th>
                            <th>Total Deaths</th>
                            <th>New Recovered</th>
                            <th>Total Recovered</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody >
                        {this.renderData()}
                    </MDBTableBody>
                </MDBTable>
                </MDBContainer>

            </div>
        );
    }
}
 
export default AllCountry;