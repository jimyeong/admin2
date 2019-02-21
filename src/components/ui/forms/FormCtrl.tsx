import * as React from 'react';
import "./form.less"
import Btn from '../btn/Btn'

interface IPropsFromCtrl {
    labelName: string;
    inputType: string;
    placeHolder: string;
    labelClass: string;
    btnClass? : string;
    btnName? : string;
    btnType? : string;
}
class FormCtrl extends React.Component<IPropsFromCtrl, any> {

    render() {
        return (
            <div className="input-group">
                <label 
                    className={this.props.labelClass}
                    htmlFor="basic-url">{this.props.labelName}</label>
                <div className="input-group">
                    <input 
                    type={this.props.inputType} 
                    className="form-control" 
                    placeholder={this.props.placeHolder}
                    aria-describedby="basic-addon3"/>
                    <Btn
                        btnClass={this.props.btnClass}
                        btnName={this.props.btnName}
                        btnType={this.props.btnType}
                    />
                </div>
            </div>
        )
    }
}

export default FormCtrl;