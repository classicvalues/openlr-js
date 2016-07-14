'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BinaryInformation2 = require('./BinaryInformation');

var _BinaryInformation3 = _interopRequireDefault(_BinaryInformation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

var Attr2 = function (_BinaryInformation) {
    _inherits(Attr2, _BinaryInformation);

    function Attr2() {
        _classCallCheck(this, Attr2);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Attr2).apply(this, arguments));
    }

    _createClass(Attr2, [{
        key: 'put',
        value: function put(bitStreamOutput) {
            bitStreamOutput.putBits(this._lfrcnp, Attr2._LFRCNP_BITS);
            bitStreamOutput.putBits(this._bear, Attr2._BEAR_BITS);
        }
    }, {
        key: 'lfrcnp',
        get: function get() {
            return this._lfrcnp;
        }
    }, {
        key: 'bear',
        get: function get() {
            return this._bear;
        }
    }], [{
        key: 'fromValues',


        /** The lowest functional road class information. */

        /** Number of bits used for lfrcnp */
        value: function fromValues(lfrcnp, bear) {
            var attr2 = new Attr2();
            attr2._lfrcnp = lfrcnp;
            attr2._bear = bear;
            return attr2;
        }

        /** The bearing information. */


        /** Number of bits used for bear */

    }, {
        key: 'fromBitStreamInput',
        value: function fromBitStreamInput(bitStreamInput) {
            var attr2 = new Attr2();
            attr2._lfrcnp = bitStreamInput.getBits(Attr2._LFRCNP_BITS);
            attr2._bear = bitStreamInput.getBits(Attr2._BEAR_BITS);
            return attr2;
        }
    }]);

    return Attr2;
}(_BinaryInformation3.default);

Attr2._LFRCNP_BITS = 3;
Attr2._BEAR_BITS = 5;
exports.default = Attr2;
;