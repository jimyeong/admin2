import * as React from 'react';

interface IBtnsProps {
    btnName?: string;
    btnType?: string;
    btnClass?: string;
    onClick?(): void;
}

class Btn extends React.Component<IBtnsProps, any> {

    render() {
        return (
            <button type={this.props.btnType} className={this.props.btnClass}>
                {this.props.btnName}
            </button>
        )
    }
}

export default Btn;