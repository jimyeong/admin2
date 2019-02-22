import * as React from 'react';
import { Router } from 'react-router';
import {createBrowserHistory} from 'history';
import House from './pages/House'
import "./common/reset.less"
import RoomList from './components/views/roomList/RoomList'
import HouseList from './components/views/houseList/HouseList';


interface IRootState {
    houseData : any[];
    roomData: any[];
}

const history = createBrowserHistory();

class App extends React.Component<any, IRootState> {

    state = {
        houseData: [],
        roomData: []
    }

    componentDidMount() {

    }

    public render() {

        return(
            <Router history={ history }>
                <React.Fragment>
                    <HouseList houseData={this.state.houseData}/>
                    <RoomList roomData={this.state.roomData}/>

                </React.Fragment>
            </Router>
        )
    }
}

export default App;