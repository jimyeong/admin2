import * as React from 'react';
import HouseExposureInfo from '../houseExposureInfo/HouseExposureInfo'
import FromCtrl from '../../ui/forms/FormCtrl';
import TextArea from '../../ui/textArea/TextArea';
import TitleSignature from '../../ui/titleSignature/TitleSignature';
import Col from '../../ui/column/Col'
import ImageOnly from '../../ui/imgs/ImageOnly'

import "./houseInfo.less"


class HouseInfo extends React.Component<any> {


    public render() {
        return (
            <React.Fragment>
                <div className="House-info">
                    <TitleSignature
                        titleName="하우스 정보">
                        <div className="content-area">
                            <div className="row">
                                <Col col={7}>
                                    <div className="box__wrap">
                                        <FromCtrl
                                            labelClass="label"
                                            labelName="하우스 이름"
                                            inputType="text"
                                            placeHolder="houseName"
                                            btnClass="none" />
                                        <FromCtrl
                                            labelClass="label"
                                            labelName="하우스 소재지"
                                            inputType="text"
                                            placeHolder="houseName"
                                            btnClass="none" />
                                        <TextArea
                                            cols={8}
                                            rows={4}
                                            labelName="하우스 소개"
                                            labelClass="label-textarea"
                                            id="house-intro-text"
                                            textClass="textArea" />
                                    </div>
                                </Col>
                                <Col col={5}>
                                    <ImageOnly
                                        imgSrc="http://sharekim.com/data/image/c53b6b7f80d8e969f1b236bf1058e1af.jpg"
                                        imgArt="집이미지" 
                                    /> 
                                </Col>
                            </div>
                        </div>
                    </TitleSignature>  
                </div>
            </React.Fragment>
        )
    }
}


export default HouseInfo;