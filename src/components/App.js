import React, {Component} from 'react';
import Schools from './Schools';
import Nav from './Nav';
import { Hashouter, Route } from 'react-router-dom';

export default class App extends Component {
    
    render(){
        return <Hashouter></Hashouter>
        return ( 
            
            <Hashouter>
                <Route path = '/' component = { Nav } />
                <Route exact path = '/schools' component = { Schools } />
            </Hashouter>
        )
    }
}
