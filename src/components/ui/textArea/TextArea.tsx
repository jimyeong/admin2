import * as React from 'react';


interface IPropsFromTextArea {
    cols: number;  // textarea 태그 의 col 갯수를 설정
    rows: number;  // textareae 태그 의 row 갯수를 설정
    labelName: string;  
    labelClass: string;
    textClass?: string;
    id: string;
}

class TextArea extends React.Component<IPropsFromTextArea, any> {


    public render() {
        return(
            <div className="form-group">
                <label 
                    className={this.props.labelClass} 
                    htmlFor={this.props.id}>
                    {this.props.labelName}
                </label>
                <textarea
                    className={this.props.textClass} 
                    id={this.props.id} 
                    cols={this.props.cols} 
                    rows={this.props.rows} />
            </div>
        )
    }
}


export default TextArea;