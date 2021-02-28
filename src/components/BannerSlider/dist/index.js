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
var Banner_1 = require("components/Banner");
var Slider_1 = require("components/Slider");
var S = require("./styles");
var settings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }
    ]
};
var BannerSlider = function (_a) {
    var items = _a.items;
    return (React.createElement(S.Wrapper, null,
        React.createElement(Slider_1["default"], { settings: settings }, items.map(function (item) { return (React.createElement(Banner_1["default"], __assign({ key: item.title }, item))); }))));
};
exports["default"] = BannerSlider;
