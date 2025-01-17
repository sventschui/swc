function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
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
var OnlyDerived, WithBase, _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
};
!function(OnlyDerived) {
    var t, t2, b, Base1 = function() {
        "use strict";
        _classCallCheck(this, Base1);
    }, Derived = function(Base) {
        "use strict";
        function Derived() {
            return _classCallCheck(this, Derived), _possibleConstructorReturn(this, _getPrototypeOf(Derived).apply(this, arguments));
        }
        return _inherits(Derived, Base), Derived;
    }(Base1), Derived2 = function(Base) {
        "use strict";
        function Derived2() {
            return _classCallCheck(this, Derived2), _possibleConstructorReturn(this, _getPrototypeOf(Derived2).apply(this, arguments));
        }
        return _inherits(Derived2, Base), Derived2;
    }(Base1), S = function() {
        "use strict";
        _classCallCheck(this, S);
    }, T = function() {
        "use strict";
        _classCallCheck(this, T);
    }, a2 = {
        foo: new Derived()
    }, b2 = {
        foo: new Derived2()
    };
    t2 = t2, b = b, b2 = b2, t = t;
}(OnlyDerived || (OnlyDerived = {
})), (function(WithBase) {
    var t, t2, b, Base2 = function() {
        "use strict";
        _classCallCheck(this, Base2);
    }, Derived = function(Base) {
        "use strict";
        function Derived() {
            return _classCallCheck(this, Derived), _possibleConstructorReturn(this, _getPrototypeOf(Derived).apply(this, arguments));
        }
        return _inherits(Derived, Base), Derived;
    }(Base2), Derived2 = function(Base) {
        "use strict";
        function Derived2() {
            return _classCallCheck(this, Derived2), _possibleConstructorReturn(this, _getPrototypeOf(Derived2).apply(this, arguments));
        }
        return _inherits(Derived2, Base), Derived2;
    }(Base2), S = function() {
        "use strict";
        _classCallCheck(this, S);
    }, T = function() {
        "use strict";
        _classCallCheck(this, T);
    }, a2 = {
        foo: new Base2()
    }, b2 = {
        foo: new Derived2()
    };
    t2 = t2, b = b, b2 = b2, t = t;
})(WithBase || (WithBase = {
}));
