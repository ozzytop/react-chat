import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';

export default class RoomChat extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Room</th>
                                    <th>Join</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Programming</td>
                                    <td><button  outline color="success">Join Room</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>ReacJs</td>
                                    <td><button  outline color="success">Join Room</button></td>
                                </tr>
                            </tbody>
                        </Table>                        
                    </Col>
                    <Col xs="6">
                        <input field="text"></input>
                        <button  outline color="success">Create Room</button>
                    </Col>
                </Row>
            </Container>

        )
    }
}
