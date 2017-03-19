/**
 * Created by steph on 2017-03-18.
 */
import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
    lat: 51.5258541,
    lng: -0.08040660000006028
};

const params = {v: '3.exp', key: 'AIzaSyA-iAz-lZ5xOZf4jYL94bgHqoLGZjPVHDE'};


const Map = React.createClass({

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    },

    onDragEnd(e) {
        console.log('onDragEnd', e);
    },

    onCloseClick() {
        console.log('onCloseClick');
    },

    onClick(e) {
        console.log('onClick', e);
    },

    render() {
        let userLocation = this.props.location;
        return (
            <Gmaps
                width={'800px'}
                height={'600px'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={12}
                loadingMessage={'Be happy'}
                params={params}
                onMapCreated={this.onMapCreated}>
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd} />
                <InfoWindow
                    lat={coords.lat}
                    lng={coords.lng}
                    content={'Hello, React :)'}
                    onCloseClick={this.onCloseClick} />
                <Circle
                    lat={coords.lat}
                    lng={coords.lng}
                    radius={500}
                    onClick={this.onClick} />
            </Gmaps>
        );
    }

});

export default Map;