import * as React from 'react';

interface IColProps {
    col? : number
}


class Col extends React.Component<any, any> {


    public render() {
        return(
            <div className={this.props.col ? `col-md-${this.props.col}` : "col"} >
                {this.props.children}
            </div>
        )
    }
}


export default Col;