import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dinner extends Component {
    state = {
        dinnerList: []
    }
    componentDidMount = () => {
        this.getAllDinner();
    }

    getAllDinner = () => {
        axios.get('api/v1/dinner')
            .then((res) => {
                const dinnerList = res.data;
                this.setState({ dinnerList: dinnerList })
            });
    };
    render() {
        return (
            <div>
                {this.state.dinnerList.map((dinner) => {
                    return (<Link to={`dinner/${dinner.id}`}>
                        <div>{dinner.name}</div>
                    </Link>)
                })}
            </div>
        )
    }
}

