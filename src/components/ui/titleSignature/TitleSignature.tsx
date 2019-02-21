import * as React from 'react';
import Btn from '../btn/Btn';
import './titleSignature.less'

interface ITitleSignatureProps {
    titleName: string;
}

class TitleSignature extends React.Component<ITitleSignatureProps, any> {


    public render() {
        return(
            <div className="box__design1">
                <div className="title-area">
                    <h3 className="">{this.props.titleName}</h3>
                    <Btn
                        btnClass="btn btn-primary"
                        btnName="수정"
                        btnType="button"
                    />
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default TitleSignature;