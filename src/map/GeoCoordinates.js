import GeometryUtils from './utils/GeometryUtils';

export default class GeoCoordinates {
    /** The longitude. */
    _longitude;

    /** The latitude. */
    _latitude;

    static fromValues(longitude, latitude) {
        if (!GeometryUtils.checkCoordinateBounds(longitude, latitude)) {
            throw new Error('Coordinates out of bounds');
        }
        const geoCoordinates = new GeoCoordinates();
        geoCoordinates._longitude = longitude;
        geoCoordinates._latitude = latitude;
        return geoCoordinates;
    }

    getLatitudeDeg() {
        return this._latitude;
    }

    getLongitudeDeg() {
        return this._longitude;
    }
};
