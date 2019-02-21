import * as React from 'react';
import HouseInfo from '../components/views/houseInfo/HouseInfo';
import HouseExposureInfo from '../components/views/houseExposureInfo/HouseExposureInfo';
import AddRoomInfo from '../components/views/addRoomInfo/AddRoomInfo';

import Col from '../components/ui/column/Col';

import ImageOnly from '../components/ui/imgs/ImageOnly';


class House extends React.Component<any, any> {


    public render() {
        return(
            <div className="house-admin">
                <div className="row">
                    <Col col={7}>
                        <HouseInfo/>
                    </Col>
                    <Col col={5}>
                        <HouseExposureInfo/>
                    </Col>
                </div>
                <AddRoomInfo/>
            </div>
        )
    }
}


export default House;