"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 TomTom International B.V
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

var INVALID_VERSION = 0;
var INVALID_OFFSET = 1;
var UNKNOWN_LOCATION_TYPE = 2;
var MISSING_DATA = 3;
var NOT_ENOUGH_BYTES = 4;
var READING_HEADER_FAILURE = 5;
var INVALID_BYTE_SIZE = 6;
var INVALID_HEADER = 7;
var INVALID_RADIUS = 8;
var INVALID_BINARY_DATA = 9;

exports.default = {
  INVALID_VERSION: INVALID_VERSION,
  INVALID_OFFSET: INVALID_OFFSET,
  UNKNOWN_LOCATION_TYPE: UNKNOWN_LOCATION_TYPE,
  MISSING_DATA: MISSING_DATA,
  NOT_ENOUGH_BYTES: NOT_ENOUGH_BYTES,
  READING_HEADER_FAILURE: READING_HEADER_FAILURE,
  INVALID_BYTE_SIZE: INVALID_BYTE_SIZE,
  INVALID_HEADER: INVALID_HEADER,
  INVALID_RADIUS: INVALID_RADIUS,
  INVALID_BINARY_DATA: INVALID_BINARY_DATA,
  getId: function getId(returnCode) {
    return returnCode;
  }
};