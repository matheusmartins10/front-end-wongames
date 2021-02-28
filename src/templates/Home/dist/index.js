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
var Highlight_1 = require("components/Highlight");
var Container_1 = require("components/Container");
var Footer_1 = require("components/Footer");
var Heading_1 = require("components/Heading");
var Menu_1 = require("components/Menu");
var GameCardSlider_1 = require("components/GameCardSlider");
var BannerSlider_1 = require("components/BannerSlider");
var Home = function (_a) {
    var banners = _a.banners, newGames = _a.newGames, mostPopularHighlight = _a.mostPopularHighlight, mostPopularGames = _a.mostPopularGames, upcommingGames = _a.upcommingGames, upcommingHighligth = _a.upcommingHighligth, upcommingMoreGames = _a.upcommingMoreGames, freeGames = _a.freeGames, freeHighligth = _a.freeHighligth;
    return (React.createElement("section", null,
        React.createElement(Container_1.Container, null,
            React.createElement(Menu_1["default"], null),
            React.createElement(BannerSlider_1["default"], { items: banners })),
        React.createElement(Container_1.Container, null,
            React.createElement(Heading_1["default"], { lineLeft: true, lineColor: "secondary", color: "black" }, "News"),
            React.createElement(GameCardSlider_1["default"], { items: newGames, color: "black" })),
        React.createElement(Container_1.Container, null,
            React.createElement(Heading_1["default"], { lineLeft: true, lineColor: "secondary" }, "Most Popular"),
            React.createElement(Highlight_1["default"], __assign({}, mostPopularHighlight)),
            React.createElement(GameCardSlider_1["default"], { items: mostPopularGames })),
        React.createElement(Container_1.Container, null,
            React.createElement(Heading_1["default"], { lineLeft: true, lineColor: "secondary" }, "Upcomming"),
            React.createElement(GameCardSlider_1["default"], { items: upcommingGames }),
            React.createElement(Highlight_1["default"], __assign({}, upcommingHighligth)),
            React.createElement(GameCardSlider_1["default"], { items: upcommingMoreGames })),
        React.createElement(Container_1.Container, null,
            React.createElement(Heading_1["default"], { lineLeft: true, lineColor: "secondary" }, "Free Games"),
            React.createElement(Highlight_1["default"], __assign({}, freeHighligth)),
            React.createElement(GameCardSlider_1["default"], { items: freeGames })),
        React.createElement(Container_1.Container, null,
            React.createElement(Footer_1["default"], null))));
};
exports["default"] = Home;
