"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Default = void 0;
var _1 = require(".");
exports["default"] = {
    title: 'Checkbox',
    component: _1["default"]
};
exports.Default = function (args) { return React.createElement(_1["default"], __assign({}, args)); };
