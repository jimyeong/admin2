import * as React from 'react';
import './addRoomInfo.less';
import ImageCard from '../../ui/imageCard/ImageCard'

interface IAddRoomInfo {
    styles : IStyleInterFace

}

interface IStyleInterFace {
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
    height: string;
}

class AddRoomInfo extends React.Component<any, any> {

    styles ={
        backgroundImage: `url(http://sharekim.com/data/thumb/29060a4f76186f118acdf14aaccbe5d8.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        height:"100%"
    }

    public render() {
        return(
            <React.Fragment>
                <div className="AddRoomInfo">
                    <ul className="imgDesign1__list">
                        <ImageCard
                            imgSrc="http://sharekim.com/data/thumb/29060a4f76186f118acdf14aaccbe5d8.jpg"
                            mainTit="집전체"
                            badgeName="신청금지"
                         />



                        <li className="imgDesign1__item">
                            <div className="imgDesign1__inner">
                                <div className="imgDesign1__thumb">
                                    <div className="imgDesign1__img" style={this.styles}></div>
                                    <div className="centered__txt-box">
                                        <h3 className="centered__tit">집전체</h3>
                                        <h4 className="centered__sub">
                                            테스트하우스 
                                            <span className="dib">(신청금지)</span>
                                        </h4>
                                        <div className="badge badge-light">신청금지</div>
                                    </div>  
                                </div>      
                            </div>
                        </li>


                    </ul>   
                </div>
            </React.Fragment>
        )
    }
}


export default AddRoomInfo;