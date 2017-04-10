import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Match from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

let About = () => {
    return <div> About </div>;
}

let Home = () => {
    return <div> Homes </div>;
}


class App extends Component {

    render() {
        return (
            <Router>
            <div>
            <Switch>
                <Route path="/pyrush/login/about" component={About} />
                <Route path="/pyrush/login/" exact component={Home} />
            
            </Switch>
            </div>
            </Router>
            ); 
    }
}

export default App;
