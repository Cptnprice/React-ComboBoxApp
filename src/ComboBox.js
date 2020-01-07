import React, { Component } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import "./ComboBox.css";

class ComboBox extends Component {
    state = {
        valueField: 0,
        title: "",
        textField: "",
        disabled: false,
        placeholder: 'Select item',
        searchResult: {}
    }

    onSelectedItemChange = (event) => {
        let item = this.props.data.filter(x => x.title == event.target.value)[0];
        if (typeof (item) != "undefined") {
            this.setState({
                valueField: item.valueField,
                title: item.title,
                textField: item.textField
            });
        }
        else{
            this.setState({
                valueField : 0,
                title : '',
                textField : ''
            })
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            disabled: !this.state.disabled
        })
    }

    handleSearch = (event) => {
        const item = this.props.data.filter(x => x.title == event.target.value)[0];
        if (typeof (item) != "undefined") {
            this.setState({
                searchResult: item
            });
        }
    }

    render() {
        return (
            <div className="main">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div className="test">
                                    <select disabled={this.state.disabled} name="item" className="SelectClass form-control mr-2" id="item" onChange={this.onSelectedItemChange} required>
                                        <option value="" defaultValue>{this.state.placeholder}</option>
                                        {
                                            this.props.data.map((e, i) => {
                                                return (
                                                    <option key={e.valueField} value={e.title}>{e.title}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <input type="text" disabled={this.state.disabled} className="form-control ml-2" placeholder="Search by title" onChange={this.handleSearch} />
                                    <button type="submit" className="btn btn-primary" onClick={this.handleClick}>{this.state.disabled ? 'Enable' : 'Disable'}</button>
                                </div>
                                {
                                    Object.entries(this.state.searchResult).length !== 0 && this.state.searchResult.constructor === Object ?
                                        <div className="content">
                                            <ul className="list-group-item" style={{ marginBottom: "5px" }}>
                                                <li>ValueField : {this.state.searchResult.valueField}</li>
                                                <li>Title : {this.state.searchResult.title}</li>
                                                <li>TextField : {this.state.searchResult.textField}</li>
                                            </ul>
                                        </div> : (this.state.valueField ?
                                            <div className="content">
                                                <ul className="list-group-item" style={{ marginBottom: "5px" }}>
                                                    <li>ValueField : {this.state.valueField}</li>
                                                    <li>Title : {this.state.title}</li>
                                                    <li>TextField : {this.state.textField}</li>
                                                </ul>
                                            </div> : <div></div>)
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ComboBox;