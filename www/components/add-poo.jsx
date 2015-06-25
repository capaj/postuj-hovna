import React from 'react';

import GoogleMap from './google-map.jsx!';
import Marker from './marker.jsx!';

export default class AddPoo extends React.Component {
	constructor(...props) {
		super(...props);
        this.state = {
            GPS: []
        }

	}
    onFilesSelected(ev){
        
    }
    submit(){
        console.log('submit');
    }
	render() {
		return <div className="container add-form">
            <div className="post item">
                <GoogleMap
                    center={this.props.center}
                    zoom={this.props.zoom}>
                    <Marker lat={59.955413} lng={30.337844} text={'A'} style={{}}/>
                </GoogleMap>
            </div>
            <div className="post item">
                <img src="img/bin-plain.svg" className="big-icon img-responsive" width="160px" />
                <span className="glyphicon glyphicon-camera clickable" onClick={this.clickInput} />
                <input className="glyphicon glyphicon-camera" type="file" accept="image/*;capture=camera" name="images"
                       onChange={this.onFilesSelected} multiple />
                <div id="canvas-container">
                </div>
            </div>
            <div className="post button ok clickable" onClick={this.submit}>
                <span className="glyphicon glyphicon-ok" />
            </div>
            <div className="alert">
                {this.state.error}
            </div>
        </div>;
	}
};

AddPoo.defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};