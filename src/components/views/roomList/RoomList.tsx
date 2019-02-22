import * as React from 'react';
import { string } from 'prop-types';

 
interface IRoomListProps {
    horizon?: boolean;
    contentWidth?: number;
    alignCenter?: boolean;
}

interface IStylesRoomList {
    display: string;
    justifyContent: string;
    width?: string;
}

class RoomList extends React.Component<IRoomListProps, any> {

    styles: IStylesRoomList={
        display: `${this.props.horizon ? "flex" : "block"}`,
        justifyContent: `${this.props.alignCenter ? "space-between" : "flex-start" }`,
        width: `${this.props.horizon ? `${this.props.contentWidth}%` : "100%"}`,
    }

    public render() {
        return(
            <ul className="room__list" style={this.styles}>
                {this.props.children}
            </ul>
        )
    }
}


export default RoomList;