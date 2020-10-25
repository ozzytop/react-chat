import React, { Component } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios';

import openSocket from 'socket.io-client';

const socket = openSocket("http://localhost:6600");

export default class LiveVisitors extends Component {
    
    state = {
        visitors:[]
    }
    
    componentDidMount(){
        axios.get("http://www.geoplugin.net/json.gp").then(res => {
            const {
                geoplugin_request,
                geoplugin_countryCode,
                geoplugin_city,
                geoplugin_region,
                geoplugin_countryName
            } = res.data;
            
            const visitor = {
                ip: geoplugin_request,
                countryCode: geoplugin_countryCode,
                city: geoplugin_city,
                state: geoplugin_region,
                country: geoplugin_countryName
            };
            
            socket.emit("new_visitor", visitor);
            
            socket.on("visitors", visitors => {
                this.setState({
                    visitors: visitors
                });               
            });

        });
    }
    
    getCountryFlag = (countryCode) => `https://www.countryflags.io/${countryCode}/flat/64.png`;
    
    renderTableBody = () => {
        const { visitors } = this.state;
        return visitors.map( (v, index) => {
           return (
               <tr key={index}>
                   <td>{index + 1 }</td>
                   <td>{v.ip}</td>
                   <td><img width="30px" src={this.getCountryFlag(v.countryCode)} /></td>
                   <td>{v.city}</td>
                   <td>{v.state}</td>
                   <td>{v.country}</td>
               </tr>
           ); 
        });
    }

    render() {
        return (
            <React.Fragment>            
                <h2>Live Visitors</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>IP</th>
                            <th>Flag</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderTableBody() }
                    </tbody>
                </Table>
            </React.Fragment>
          );
    }
}
