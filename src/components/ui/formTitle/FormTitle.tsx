import * as React from 'react';
import "./formtitle.less"


interface IFromTitleProps {
    titleName: string;
}

class FormTitle extends React.Component<IFromTitleProps, any> {


    public render() {
        return(
            <p className="form-txt1">
                {this.props.titleName}
            </p>
        )
    }
}


export default FormTitle;