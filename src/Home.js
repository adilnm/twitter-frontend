import React, { Component } from 'react'
import { connect } from 'react-redux';
import getTweets from './actions/getTweets';


class Home extends Component {


    render() {
        return (
            <div>
                <ul>
                    {this.props.tweets.map((item, index)=><li>{item.body}</li>)}
                </ul>
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        tweets: state.tweets
    }
}
export default connect(mstp, { getTweets })(Home)
