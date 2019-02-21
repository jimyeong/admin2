import * as React from 'react';
import "./imageCard.less"


interface IAddRooInfoProps {
    imgSrc: string;
    mainTit: string;
    subTit?: string;
    badgeName: string;
}

interface IStyleInterFace {
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
    height: string;
}

class ImageCard extends React.Component<IAddRooInfoProps, any> {


    styles: IStyleInterFace ={
        backgroundImage: `url(${this.props.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        height:"100%"
    }

    public render() {
        return(
            <li className="imgDesign1__item">
                <div className="imgDesign1__inner">
                    <div className="imgDesign1__thumb">
                        <div className="imgDesign1__img" style={this.styles}></div>
                        <div className="centered__txt-box">
                            <h3 className="centered__tit">{this.props.mainTit}</h3>
                            <h4 className={this.props.subTit ? "centered__sub" : "none"}>
                                {this.props.subTit} 
                                {/* <span className="dib">(신청금지)</span> */}
                            </h4>
                            <div className="badge badge-light">{this.props.badgeName}</div>
                        </div>  
                    </div>      
                </div>
            </li>   
        )
    }
}


export default ImageCard;