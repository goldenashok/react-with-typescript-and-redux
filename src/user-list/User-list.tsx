import React, { Component } from "react";
import axios from 'axios';
import { USERLIST } from "../helpers/constants";
import { Userlist, Activity_objects } from "./model/user.model";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { connect } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators, Dispatch } from "redux";
import { incrementCounter, decrementCounter, getUserData } from "./UserListAction";

export interface UserListProps {
    count?: any;
    userData?: any;
    incrementCounter?: () => void;
    decrementCounter?: () => void;
    getUserData?: () => void;
}

class UserList extends Component<UserListProps, Userlist> {
    constructor(props: UserListProps) {
        super(props);
        this.state = {
            members: [],
            show: false,
            activity_periods: []
        }
    }

    componentDidMount() {
        // this.getuserDetails();
    }

    static getDerivedStateFromProps(nextProps: any, prevState: any): any | null {
        // console.log('nextProps', nextProps);
        // console.log('prevState', prevState);
        return null;
    }


    showUserDetail(periods: Activity_objects): void {
        this.setState({ show: true, activity_periods: periods.activity_periods });
    }

    showUser = () => {
        const { userData } = this.props;
        return (
            userData.map((user: Activity_objects) =>
                <tr key={user.id}>
                    <td>{user.real_name}</td>
                    <td>{user.tz}</td>
                    <td><a href='#' onClick={() => this.showUserDetail(user)}>view</a></td>
                </tr>
            )

        )
    }

    showModel = () => {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showuserDetails()}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )

    }

    showuserDetails() {
        return (
            (this.state.activity_periods|| []).map((udetails, index) =>
                <tr key={index}>
                    <td>{udetails.start_time}</td>
                    <td>{udetails.end_time}</td>
                </tr>
            )
        )
    }

    handleClose = () => { this.setState({ show: false }) }

    render() {
        const { incrementCounter, decrementCounter, getUserData, count } = this.props;
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <button className="btn btn-primary" onClick={getUserData}>Get User Data</button>
                            <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
                            <button className="btn btn-primary" onClick={decrementCounter}>Decrement</button>
                            <p>Click Count : {count}</p>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Time Zone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showUser()}
                                </tbody>
                            </Table>
                            {this.showModel()}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps: any = ({ UserListReducer }: any) => {
    return {
        count: UserListReducer.count,
        userData: UserListReducer.userData
    }
}

const mapDispatchToProps: ((dispatch: Dispatch) => ActionCreatorsMapObject) = (dispatch) => {
    return bindActionCreators({ incrementCounter, decrementCounter, getUserData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);