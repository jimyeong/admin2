import * as React from 'react';
import { Router } from 'react-router';
import {createBrowserHistory} from 'history';
import House from './pages/House'
import "./common/reset.less"


const history = createBrowserHistory();

class App extends React.Component<any> {

    componentDidMount() {

    }

    public render() {

        return(
            <Router history={ history }>
                <React.Fragment>
                    <House/>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;