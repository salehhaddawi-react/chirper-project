import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import LoadingBar from "react-redux-loading";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Nav from './Nav'
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>

                    <div className="container">
                        <Nav />
                        {this.props.loading ? null : <div>
                            <Route path="/" exact component={Dashboard}/>
                            <Route path="/tweet/:id" component={TweetPage}/>
                            <Route path="/new" component={NewTweet}/>
                        </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
