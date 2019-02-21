import * as React from 'react';
import "./addbtn.less"

interface IAddCardProps {
    mainTit: string;
}

class AddCard extends React.Component<IAddCardProps, any> {
    render() {
        return(
            <li className="imgDesign1__item">
                <div className="imgDesign1__screen"/>
                <div className="imgDesign1__inner">
                    <div className="centered__txt-box">
                    <h3 className="centered__tit">룸 등록</h3>
                        <span className="card-icon">
                                <i className="cui-circle-x z cui-icon"/>
                        </span>
                    </div>        
                </div>
            </li>
        )
    }
}

export default AddCard;