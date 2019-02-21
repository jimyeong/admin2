import * as React from 'react';
import Btn from '../../ui/btn/Btn';
import FromCtrl from '../../ui/forms/FormCtrl';
import TextArea from '../../ui/textArea/TextArea';
import TitleSignature from '../../ui/titleSignature/TitleSignature';
import FormTitle from '../../ui/formTitle/formTitle';
import Col from '../../ui/column/Col'
import ImageOnly from '../../ui/imgs/ImageOnly'

import "./houseExposureInfo.less"


class HouseExposureInfo extends React.Component<any, any> {

    public render() {
        return(
            <React.Fragment>
                <div className="Exposure-info">
                    <TitleSignature
                        titleName="하우스 노출정보">
                        <div className="content-area">
                            <FormTitle
                                titleName="하우스 노출여부"
                            />
                            <div className="btn__wrap">
                                <Btn
                                    btnName="노출"
                                    btnType="button"
                                    btnClass="btn btn-success"
                                />
                                <Btn
                                    btnName="비노출"
                                    btnType="button"
                                    btnClass="btn btn-light"
                                />
                                <FormTitle
                                    titleName="하우스 프로모션"
                                />
                                <div className="notice">
                                    <h4 className="notice__tit">
                                        하우스 프로모션 혜택
                                    </h4>
                                    <p className="notice__txt1">1. 다른 일반 하우스들 보다 위에 노출됩니다.</p>
                                    <p className="notice__txt1">2. 하우스 목록에 "공실"로 홍보할 수 있습니다</p>
                                    <p className="notice__txt1">3. 입주문의, 견학문의 등 사용자와 소통할 수 있는 채널이 열립니다.</p>
                                </div>
                            </div>
                        </div>
                    </TitleSignature>  
                </div>
            </React.Fragment>
        )
    }
}


export default HouseExposureInfo;