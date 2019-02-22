import * as React from 'react';
import HouseInfo from '../components/views/houseInfo/HouseInfo';
import HouseExposureInfo from '../components/views/houseExposureInfo/HouseExposureInfo';
import AddRoomInfo from '../components/views/addRoomInfo/AddRoomInfo';
import Col from '../components/ui/column/Col';
import RoomList from '../components/views/roomList/RoomList';
import ImageCard from '../components/ui/imageCard/ImageCard'
import ImageOnly from '../components/ui/imgs/ImageOnly';


interface IRoomListState {
    data: IShareHouseData[]
}

interface IShareHouseData {
    id: number;
    brandTitle: string;
    houseTitle: string;
    srcImg: string;
    status: string;
}

class House extends React.Component<any, IRoomListState> {


    state: IRoomListState = {
        data : [
            {id:0, brandTitle: "shareKim", houseTitle:"houseTitle: h1", srcImg:"http://sharekim.com/data/thumb/29060a4f76186f118acdf14aaccbe5d8.jpg", status:"sold out"},
            {id:1, brandTitle: "blueMoon", houseTitle:"houseTitle: o2", srcImg:"http://www.countryhome.co.kr/images_atl/000/000/005/000000005207/000000005207-0017.jpg", status:"on seiling"},
            {id:2, brandTitle: "redOcean", houseTitle:"houseTitle: c1", srcImg:"http://www.bandinabi.com/bizdemo16480/component/board/board_5/u_image/8/1358679768_c_28p118-12529EBB098EB9494EB8298EBB984_-008.jpg", status:"sold out"},
            {id:3, brandTitle: "docation", houseTitle:"houseTitle: f1", srcImg:"http://img.seoul.co.kr/img/upload/2018/02/02/SSI_20180202112710.jpg", status:"on seiling"},
            {id:4, brandTitle: "HomeStay", houseTitle:"houseTitle: f2", srcImg:"https://img.heypik.com/58pic/21/57/62/14b58PICcN7_1024.jpg?x-oss-process=image/resize,w_264/sharpen,100/quality,q_80", status:"sold out"},
        ]
    }

    renderImgCard = () => {
        const ImageCard1 = this.state.data.map((item, i) => {
            return <ImageCard
                imgSrc={item.srcImg}
                mainTit={item.brandTitle}
                subTit={item.houseTitle}
                key={i}
                badgeName={item.status}
            />
        })
        return ImageCard1
    }


    public render() {
        return(
            <div className="house-admin">
                <AddRoomInfo/>
                <RoomList
                    horizon={true}
                    alignCenter={false}
                    contentWidth={80}
                >
                    {this.renderImgCard()}
                </RoomList>

            </div>
        )
    }
}


export default House;