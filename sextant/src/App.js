import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Cisco Sextant" />
                <Exhibit name="Exhibit">content</Exhibit>
                <Exhibit name="Exhibit">content</Exhibit>
                <Exhibit name="Exhibit">content</Exhibit>
            </div>
        );
    }
}

export default App;
