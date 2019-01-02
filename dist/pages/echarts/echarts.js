"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _echarts = require("../../components/ec-canvas/echarts.js");

var echarts = _interopRequireWildcard(_echarts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initChart(canvas, width, height) {
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var model = {
    yCates: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
    // [yCateIndex, xCateIndex, value]
    [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2], [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2], [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7], [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6], [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9], [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7], [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]]
  };

  var data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  var option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 60,
      top: 10,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F']
      }
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

var Echarts = function (_BaseComponent) {
  _inherits(Echarts, _BaseComponent);

  function Echarts() {
    var _ref, _this$config;

    var _temp, _this, _ret;

    _classCallCheck(this, Echarts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Echarts.__proto__ || Object.getPrototypeOf(Echarts)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["ec"], _this.config = (_this$config = {
      navigationBarTitleText: 'echarts-for-weixin 示例项目',
      navigationBarTextStyle: 'black'
    }, _defineProperty(_this$config, "navigationBarTitleText", 'WxParse 使用示例'), _defineProperty(_this$config, "backgroundColor", '#eeeeee'), _defineProperty(_this$config, "backgroundTextStyle", 'light'), _defineProperty(_this$config, "usingComponents", {
      'ec-canvas': '../../components/ec-canvas/ec-canvas' // 书写第三方组件的相对路径
    }), _this$config), _this.state = {
      ec: {
        onInit: initChart
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Echarts, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Echarts.prototype.__proto__ || Object.getPrototypeOf(Echarts.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Echarts;
}(_index.Component);

Echarts.properties = {};
Echarts.$$events = [];
exports.default = Echarts;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Echarts, true));