(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeActions = (function () {
  function HomeActions() {
    _classCallCheck(this, HomeActions);

    this.generateActions('getProductsSuccess', 'getProductsFail', 'updateIdInfo');
  }

  _createClass(HomeActions, [{
    key: 'getProducts',
    value: function getProducts() {
      var _this = this;

      /** Version of origin javascript
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
          xhr.addEventListener("readystatechange", function (){
          if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            getProductsSuccess(this.responseText);
          }
          if (this.readyState === 4 && this.status !== 200) {
            console.log(this.responseText);
            getProductsFail(this.responseText);
          }
        });
        xhr.open("GET", "/api/product");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send();
      */
      //Jquery
      $.ajax({ url: '/api/product' }).done(function (data) {
        _this.actions.getProductsSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getProductsFail(jqXhr);
      });
    }
  }]);

  return HomeActions;
})();

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var NavbarActions = (function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);
  }

  _createClass(NavbarActions, [{
    key: 'updateOnlineUsers',
    value: function updateOnlineUsers(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'updateAjaxAnimation',
    value: function updateAjaxAnimation(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'updateSearchQuery',
    value: function updateSearchQuery(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'getCharacterCountSuccess',
    value: function getCharacterCountSuccess(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'getCharacterCountFail',
    value: function getCharacterCountFail(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'findCharacterSuccess',
    value: function findCharacterSuccess(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'findCharacterFail',
    value: function findCharacterFail(payload) {
      this.dispatch(payload);
    }
  }, {
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api',
        data: {
          name: payload.searchQuery
        }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }, {
    key: 'getCharacterCount',
    value: function getCharacterCount() {
      var _this2 = this;

      $.ajax({
        url: '/api'
      }).done(function (data) {
        _this2.actions.getCharacterCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getCharacterCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
})();

exports['default'] = _alt2['default'].createActions(NavbarActions);
module.exports = exports['default'];

},{"../alt":3,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Navbar2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Footer":7,"./Navbar":9,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Cell = (function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell(props) {
    _classCallCheck(this, Cell);

    _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Cell, [{
    key: 'handleImgClick',
    value: function handleImgClick() {
      document.getElementById('btn' + this.props.index).click();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-4 col-lg-4' },
        _react2['default'].createElement(
          'div',
          { className: 'thumbnail' },
          _react2['default'].createElement('img', { src: this.props.img, onClick: this.handleImgClick.bind(this) }),
          _react2['default'].createElement(
            'div',
            { className: 'caption' },
            _react2['default'].createElement(
              'h3',
              null,
              this.props.title
            ),
            _react2['default'].createElement(
              'p',
              null,
              this.props.dsc
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-lg', 'data-toggle': 'modal', id: 'btn' + this.props.index, key: this.props.index, 'data-target': '#myModal', 'data-id': this.props.index, onClick: this.props.handleClick },
                'Detail'
              )
            )
          )
        )
      );
    }
  }]);

  return Cell;
})(_react2['default'].Component);

exports['default'] = Cell;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Detail = (function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail(props) {
    _classCallCheck(this, Detail);

    _get(Object.getPrototypeOf(Detail.prototype), "constructor", this).call(this, props);
  }

  _createClass(Detail, [{
    key: "render",
    value: function render() {
      var img = "https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCrmIDYlgEQ0AIYmAIyCBdlCWLN5Mlq";
      if (this.props.data) {
        img = this.props.data.imgs[0];
      }
      return _react2["default"].createElement(
        "div",
        { className: "modal fade", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true" },
        _react2["default"].createElement(
          "div",
          { className: "modal-dialog" },
          _react2["default"].createElement(
            "div",
            { className: "modal-content" },
            _react2["default"].createElement(
              "div",
              { className: "modal-header" },
              _react2["default"].createElement(
                "button",
                { type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
                "×"
              ),
              _react2["default"].createElement(
                "h4",
                { className: "modal-title", id: "myModalLabel" },
                "Title"
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "modal-body" },
              _react2["default"].createElement(
                "div",
                { id: "myCarousel", className: "carousel slide" },
                _react2["default"].createElement(
                  "ol",
                  { className: "carousel-indicators" },
                  _react2["default"].createElement("li", { "data-target": "#myCarousel", "data-slide-to": "0", className: "active" }),
                  _react2["default"].createElement("li", { "data-target": "#myCarousel", "data-slide-to": "1" }),
                  _react2["default"].createElement("li", { "data-target": "#myCarousel", "data-slide-to": "2" })
                ),
                _react2["default"].createElement(
                  "div",
                  { className: "carousel-inner" },
                  _react2["default"].createElement(
                    "div",
                    { className: "item active" },
                    _react2["default"].createElement("img", { src: img })
                  ),
                  _react2["default"].createElement(
                    "div",
                    { className: "item" },
                    _react2["default"].createElement("img", { src: img })
                  ),
                  _react2["default"].createElement(
                    "div",
                    { className: "item" },
                    _react2["default"].createElement("img", { src: img })
                  )
                ),
                _react2["default"].createElement(
                  "a",
                  { className: "carousel-control left", href: "#myCarousel",
                    "data-slide": "prev" },
                  "‹"
                ),
                _react2["default"].createElement(
                  "a",
                  { className: "carousel-control right", href: "#myCarousel",
                    "data-slide": "next" },
                  "›"
                )
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "modal-footer" },
              _react2["default"].createElement(
                "button",
                { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                "Close"
              ),
              _react2["default"].createElement(
                "button",
                { type: "button", className: "btn btn-primary" },
                "Submit"
              )
            )
          )
        )
      );
    }
  }]);

  return Detail;
})(_react2["default"].Component);

exports["default"] = Detail;
module.exports = exports["default"];

},{"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'footer',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-5 hidden-xs' },
              _react2['default'].createElement(
                'h3',
                { className: 'lead' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Information'
                ),
                ' and ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Copyright'
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Copyright © 2017-2018 Bubble'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-2 hidden-xs' },
              _react2['default'].createElement(
                'h3',
                { className: 'lead' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  '联系我们'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-3 hidden-xs' },
              _react2['default'].createElement(
                'ul',
                { className: 'list-inline' },
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement('img', { className: 'thumb-md', src: '/img/contact.png' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _Detail = require('./Detail');

var _Detail2 = _interopRequireDefault(_Detail);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = _storesHomeStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHomeStore2['default'].listen(this.onChange);
      _actionsHomeActions2['default'].getProducts();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesHomeStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      _actionsHomeActions2['default'].updateIdInfo(e.target.getAttribute("data-id"));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var allProducts = this.state.products.map(function (product, index) {
        return _react2['default'].createElement(_Cell2['default'], { img: product.imgs[0], dsc: product.description, key: index, title: product.name, index: index, handleClick: _this.handleClick.bind(_this) });
      });

      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          allProducts
        ),
        _react2['default'].createElement(_Detail2['default'], { data: this.state.currentItem })
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeActions":1,"../stores/HomeStore":12,"./Cell":5,"./Detail":6,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesNavbarStore = require('../stores/NavbarStore');

var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
    this.state = _storesNavbarStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesNavbarStore2['default'].listen(this.onChange);
      _actionsNavbarActions2['default'].getCharacterCount();

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _actionsNavbarActions2['default'].updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _actionsNavbarActions2['default'].updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _actionsNavbarActions2['default'].updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesNavbarStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _actionsNavbarActions2['default'].findCharacter({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm.getDOMNode(),
          router: this.context.router
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2['default'].createElement(
          'div',
          { className: 'navbar-header' },
          _react2['default'].createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2['default'].createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2['default'].createElement('span', { className: 'icon-bar' }),
            _react2['default'].createElement('span', { className: 'icon-bar' }),
            _react2['default'].createElement('span', { className: 'icon-bar' })
          ),
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2['default'].createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri' }),
              _react2['default'].createElement('div', { className: 'tri invert' })
            ),
            'Shop',
            _react2['default'].createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2['default'].createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2['default'].createElement(
              'div',
              { className: 'input-group' },
              _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: '想买点什么吗？', value: this.state.searchQuery, onChange: _actionsNavbarActions2['default'].updateSearchQuery }),
              _react2['default'].createElement(
                'span',
                { className: 'input-group-btn' },
                _react2['default'].createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2['default'].createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'Index'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/stats' },
                '1'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'dropdown' },
              _react2['default'].createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '2 ',
                _react2['default'].createElement('span', { className: 'caret' })
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top' },
                    'Top Overall'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top/caldari' },
                    'Caldari'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        'Achura'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top/gallente' },
                    'Gallente'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/gallente' },
                        'Gallente'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top/minmatar' },
                    'Minmatar'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/minmatar/brutor' },
                        'Brutor'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top/amarr' },
                    'Amarr'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/amarr/amarr' },
                        'Amarr'
                      )
                    )
                  )
                ),
                _react2['default'].createElement('li', { className: 'divider' }),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/shame' },
                    'Hall of Shame'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'XXXXXX'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'XXXXXX'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'XXXXXX'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'XXXXXX'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'XXXXXX'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'XXXXXX'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
})(_react2['default'].Component);

Navbar.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Navbar;
module.exports = exports['default'];

},{"../actions/NavbarActions":2,"../stores/NavbarStore":13,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":11,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":4,"./components/Home":8,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var HomeStore = (function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_actionsHomeActions2['default']);
    this.products = [];
    this.currentItem = null;
  }

  _createClass(HomeStore, [{
    key: 'onGetProductsSuccess',
    value: function onGetProductsSuccess(data) {
      this.products = data;
      toastr.options.positionClass = "toast-bottom-right";
      toastr.options.closeButton = true;
      toastr.success("Successed");
    }
  }, {
    key: 'onGetProductsFail',
    value: function onGetProductsFail(jqXhr) {
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }, {
    key: 'onUpdateIdInfo',
    value: function onUpdateIdInfo(data) {
      this.currentItem = this.products[parseInt(data)];
    }
  }]);

  return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeActions":1,"../alt":3}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var NavbarStore = (function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_actionsNavbarActions2['default']);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindCharacterSuccess',
    value: function onFindCharacterSuccess(payload) {
      payload.router.transitionTo('/characters/' + payload.characterId);
    }
  }, {
    key: 'onFindCharacterFail',
    value: function onFindCharacterFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetCharacterCountSuccess',
    value: function onGetCharacterCountSuccess(data) {
      this.totalCharacters = data.count;
    }
  }, {
    key: 'onGetCharacterCountFail',
    value: function onGetCharacterCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
})();

exports['default'] = _alt2['default'].createStore(NavbarStore);
module.exports = exports['default'];

},{"../actions/NavbarActions":2,"../alt":3}]},{},[10]);
