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
exports.getServerSideProps = void 0;
var Home_1 = require("templates/Home");
var mock_1 = require("components/BannerSlider/mock");
var mock_2 = require("components/GameCardSlider/mock");
var mock_3 = require("components/Highlight/mock");
function Index(props) {
    return React.createElement(Home_1["default"], __assign({}, props));
}
exports["default"] = Index;
function getServerSideProps() {
    return {
        props: {
            banners: mock_1["default"],
            newGames: mock_2["default"],
            mostPopularHighlight: mock_3["default"],
            mostPopularGames: mock_2["default"],
            upcommingGames: mock_2["default"],
            upcommingHighligth: mock_3["default"],
            upcommingMoreGames: mock_2["default"],
            freeGames: mock_2["default"],
            freeHighligth: mock_3["default"]
        }
    };
}
exports.getServerSideProps = getServerSideProps;
