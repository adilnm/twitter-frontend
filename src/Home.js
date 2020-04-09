import React, { Component } from 'react'
import { connect } from 'react-redux';
import getTweets from './actions/getTweets';


class Home extends Component {

   
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null,{getTweets})(Home)
