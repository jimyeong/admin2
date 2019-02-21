import * as React from 'react';


interface IImageOnlyProps {
    imgSrc: string;
    imgAlt: string; 

}

class ImageOnly extends React.Component<any, any> {


    public render() {
        return(
            
            <div className="thumb__wrap">
                <img 
                    src={this.props.imgSrc}
                    alt={this.props.imgAlt} />
            </div>
        )
    }
}


export default ImageOnly;