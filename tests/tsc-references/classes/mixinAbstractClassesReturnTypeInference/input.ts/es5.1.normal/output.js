function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var AbstractBase = function AbstractBase() {
    "use strict";
    _classCallCheck(this, AbstractBase);
};
function Mixin2(baseClass1) {
    var MixinClass = // must be `abstract` because we cannot know *all* of the possible abstract members that need to be
    // implemented for this to be concrete.
    /*#__PURE__*/ function(baseClass) {
        "use strict";
        _inherits(MixinClass, baseClass);
        function MixinClass() {
            _classCallCheck(this, MixinClass);
            return _possibleConstructorReturn(this, _getPrototypeOf(MixinClass).apply(this, arguments));
        }
        _createClass(MixinClass, [
            {
                key: "mixinMethod",
                value: function mixinMethod() {
                }
            }
        ], [
            {
                key: "staticMixinMethod",
                value: function staticMixinMethod() {
                }
            }
        ]);
        return MixinClass;
    }(baseClass1);
    return MixinClass;
}
var DerivedFromAbstract2 = /*#__PURE__*/ function(_super) {
    "use strict";
    _inherits(DerivedFromAbstract2, _super);
    function DerivedFromAbstract2() {
        _classCallCheck(this, DerivedFromAbstract2);
        return _possibleConstructorReturn(this, _getPrototypeOf(DerivedFromAbstract2).apply(this, arguments));
    }
    _createClass(DerivedFromAbstract2, [
        {
            key: "abstractBaseMethod",
            value: function abstractBaseMethod() {
            }
        }
    ]);
    return DerivedFromAbstract2;
}(Mixin2(AbstractBase));
