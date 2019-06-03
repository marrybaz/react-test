import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'
// import SimpleExample from './SimpleExample';
import Map from './Map'

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

function Footer() {
    return (
        <StrictMode>
            <footer>
                <Map />
                {/* <SimpleExample /> */}
            </footer>
        </StrictMode>
    )
}

export default Footer