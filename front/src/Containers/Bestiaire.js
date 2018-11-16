import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDatas } from '../Actions/FetchData'


const MapStateToProps = state => {
    return { Bestiaire : state.Bestiaire}
}


class Bestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        this.props.dispatch(fetchDatas())
    }

    render() {
    const { Bestiaire } = this.props
    console.log('mon bestiaire from Redux', Bestiaire)
     return (
            <div>Bestiaire from Reducers is working !!</div>
        );
    }
}

export default connect(MapStateToProps)(Bestiaire);