import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";

class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path='/pathfinder'  component={Pathfinder}/>
                    <Route path='/prime' component={Seive}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/convexhull' component={ConvexHull}/>
                    <Route path='/binarysearch' component={BinarySearch}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/' component={Home}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
