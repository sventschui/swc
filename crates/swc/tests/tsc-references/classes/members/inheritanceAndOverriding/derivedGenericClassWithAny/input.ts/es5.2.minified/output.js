function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var e, _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}, C = function() {
    "use strict";
    function C() {
        _classCallCheck(this, C);
    }
    return _createClass(C, [
        {
            key: "X",
            get: function() {
                return null;
            }
        },
        {
            key: "foo",
            value: function() {
                return null;
            }
        }
    ]), C;
}(), D = function(C) {
    "use strict";
    function D() {
        return _classCallCheck(this, D), _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
    }
    return _inherits(D, C), _createClass(D, [
        {
            key: "X",
            get: function() {
                return null;
            }
        },
        {
            key: "foo",
            value: function() {
                return 1;
            }
        }
    ], [
        {
            key: "Y",
            get: function() {
                return null;
            }
        },
        {
            key: "bar",
            value: function() {
                return null;
            }
        }
    ]), D;
}(C), E = function(D) {
    "use strict";
    function E() {
        return _classCallCheck(this, E), _possibleConstructorReturn(this, _getPrototypeOf(E).apply(this, arguments));
    }
    return _inherits(E, D), _createClass(E, [
        {
            key: "X",
            get: function() {
                return "";
            }
        },
        {
            key: "foo",
            value: function() {
                return "";
            }
        }
    ]), E;
}(D);
e.foo();