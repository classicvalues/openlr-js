/**
 * Copyright 2017 TomTom International B.V
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import RawPointLocationReference from './RawPointLocationReference';
import LocationType from '../LocationType';

export default class RawPointAlongLineLocationReference extends RawPointLocationReference {
    static fromValues(id, lrp1, lrp2, offsets, sideOfRoad, orientation) {
        const rawPointAlongLineLocationReference = new RawPointAlongLineLocationReference();
        rawPointAlongLineLocationReference._id = id;
        rawPointAlongLineLocationReference._locationType = LocationType.POINT_ALONG_LINE;
        rawPointAlongLineLocationReference._returnCode = null;
        rawPointAlongLineLocationReference._points = [lrp1, lrp2];
        rawPointAlongLineLocationReference._offsets = offsets;
        rawPointAlongLineLocationReference._orientation = orientation;
        rawPointAlongLineLocationReference._sideOfRoad = sideOfRoad;
        return rawPointAlongLineLocationReference;
    }
};
