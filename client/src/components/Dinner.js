import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
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
                this.setState({
                    dinnerList: res.data,
                });
            });
    }
    render() {
        const dinnerList = this.state.dinnerList.map((dinner) => {
            return (
                <div key={dinner.id}>
                    <Link to={`/dinner/${dinner.id}`}>
                        <h2>{dinner.name}</h2>
                    </Link>

                </div>
            )
        })
        return (
            <div>
                {dinnerList}
            </div>
        )
    }
}
