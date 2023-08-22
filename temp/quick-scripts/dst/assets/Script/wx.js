
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/wx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78125YXIFpNl4FEK0W7i7Pa', 'wx');
// Script/wx.js

"use strict";

var env = {
  USER_DATA_PATH: ""
};

var FileSystemManager = /*#__PURE__*/function () {
  function FileSystemManager() {}

  var _proto = FileSystemManager.prototype;

  _proto.stat = function stat() {
    return {};
  };

  return FileSystemManager;
}();

var WXColl = /*#__PURE__*/function () {
  function WXColl() {}

  var _proto2 = WXColl.prototype;

  _proto2.get = function get() {
    return new Promise(function () {}, function () {});
  };

  return WXColl;
}();

var WXDB = /*#__PURE__*/function () {
  function WXDB() {}

  var _proto3 = WXDB.prototype;

  _proto3.collection = function collection() {
    return new WXColl();
  };

  return WXDB;
}();

var WXClcoud = /*#__PURE__*/function () {
  function WXClcoud() {}

  var _proto4 = WXClcoud.prototype;

  _proto4.database = function database() {
    return new WXDB();
  };

  return WXClcoud;
}();

var wechat = /*#__PURE__*/function () {
  function wechat() {
    this.env = env;
    this.cloud = new WXClcoud();
  }

  var _proto5 = wechat.prototype;

  _proto5.createInnerAudioContext = function createInnerAudioContext() {
    return {
      stop: function stop() {},
      play: function play() {},
      onSeeked: function onSeeked() {}
    };
  };

  _proto5.getSystemInfoSync = function getSystemInfoSync() {
    return {};
  };

  _proto5.showShareMenu = function showShareMenu() {};

  _proto5.updateShareMenu = function updateShareMenu() {};

  _proto5.onShareAppMessage = function onShareAppMessage() {};

  _proto5.shareAppMessage = function shareAppMessage() {};

  _proto5.createRewardedVideoAd = function createRewardedVideoAd() {
    return {
      onLoad: function onLoad() {},
      onError: function onError() {},
      onClose: function onClose() {},
      load: function load() {
        return new Promise(function () {}, function () {});
      }
    };
  };

  _proto5.vibrateShort = function vibrateShort() {};

  _proto5.createBannerAd = function createBannerAd() {
    return {
      onLoad: function onLoad() {},
      onResize: function onResize() {},
      onError: function onError() {},
      show: function show() {},
      hide: function hide() {},
      destroy: function destroy() {}
    };
  };

  _proto5.getFileSystemManager = function getFileSystemManager() {
    if (!this.fs) {
      this.fs = new FileSystemManager();
    }

    return this.fs;
  };

  _proto5.login = function login() {};

  _proto5.getSystemInfo = function getSystemInfo() {};

  _proto5.onShow = function onShow() {};

  _proto5.postMessage = function postMessage() {};

  _proto5.request = function request(e) {};

  _proto5.onAudioInterruptionEnd = function onAudioInterruptionEnd() {};

  _proto5.onHide = function onHide() {};

  _proto5.getStorageSync = function getStorageSync() {
    return "";
  };

  return wechat;
}();

if (!window.wx) {
  window.wx = new wechat();
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx3eC5qcyJdLCJuYW1lcyI6WyJlbnYiLCJVU0VSX0RBVEFfUEFUSCIsIkZpbGVTeXN0ZW1NYW5hZ2VyIiwic3RhdCIsIldYQ29sbCIsImdldCIsIlByb21pc2UiLCJXWERCIiwiY29sbGVjdGlvbiIsIldYQ2xjb3VkIiwiZGF0YWJhc2UiLCJ3ZWNoYXQiLCJjbG91ZCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0Iiwic3RvcCIsInBsYXkiLCJvblNlZWtlZCIsImdldFN5c3RlbUluZm9TeW5jIiwic2hvd1NoYXJlTWVudSIsInVwZGF0ZVNoYXJlTWVudSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwic2hhcmVBcHBNZXNzYWdlIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwib25Mb2FkIiwib25FcnJvciIsIm9uQ2xvc2UiLCJsb2FkIiwidmlicmF0ZVNob3J0IiwiY3JlYXRlQmFubmVyQWQiLCJvblJlc2l6ZSIsInNob3ciLCJoaWRlIiwiZGVzdHJveSIsImdldEZpbGVTeXN0ZW1NYW5hZ2VyIiwiZnMiLCJsb2dpbiIsImdldFN5c3RlbUluZm8iLCJvblNob3ciLCJwb3N0TWVzc2FnZSIsInJlcXVlc3QiLCJlIiwib25BdWRpb0ludGVycnVwdGlvbkVuZCIsIm9uSGlkZSIsImdldFN0b3JhZ2VTeW5jIiwid2luZG93Iiwid3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsR0FBRyxHQUFHO0FBQ05DLEVBQUFBLGNBQWMsRUFBRTtBQURWLENBQVY7O0lBSU1DOzs7OztTQUNGQyxPQUFBLGdCQUFPO0FBQ0gsV0FBTyxFQUFQO0FBQ0g7Ozs7O0lBR0NDOzs7OztVQUNGQyxNQUFBLGVBQU07QUFDRixXQUFPLElBQUlDLE9BQUosQ0FBWSxZQUFJLENBQUUsQ0FBbEIsRUFBb0IsWUFBSSxDQUFFLENBQTFCLENBQVA7QUFDSDs7Ozs7SUFHQ0M7Ozs7O1VBQ0ZDLGFBQUEsc0JBQWE7QUFDVCxXQUFPLElBQUlKLE1BQUosRUFBUDtBQUNIOzs7OztJQUdDSztBQUNGLHNCQUFjLENBQ2I7Ozs7VUFFREMsV0FBQSxvQkFBVztBQUNQLFdBQU8sSUFBSUgsSUFBSixFQUFQO0FBQ0g7Ozs7O0lBR0NJO0FBQ0Ysb0JBQWM7QUFDVixTQUFLWCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLWSxLQUFMLEdBQWEsSUFBSUgsUUFBSixFQUFiO0FBQ0g7Ozs7VUFFREksMEJBQUEsbUNBQTJCO0FBQ3ZCLFdBQU87QUFDSEMsTUFBQUEsSUFERyxrQkFDSSxDQUFFLENBRE47QUFFSEMsTUFBQUEsSUFGRyxrQkFFSSxDQUFFLENBRk47QUFHSEMsTUFBQUEsUUFIRyxzQkFHUSxDQUFFO0FBSFYsS0FBUDtBQUtIOztVQUNEQyxvQkFBQSw2QkFBcUI7QUFDakIsV0FBTyxFQUFQO0FBQ0g7O1VBRURDLGdCQUFBLHlCQUFnQixDQUVmOztVQUVEQyxrQkFBQSwyQkFBa0IsQ0FFakI7O1VBRURDLG9CQUFBLDZCQUFvQixDQUVuQjs7VUFDREMsa0JBQUEsMkJBQWtCLENBRWpCOztVQUNEQyx3QkFBQSxpQ0FBd0I7QUFDcEIsV0FBTztBQUNIQyxNQUFBQSxNQURHLG9CQUNNLENBQUUsQ0FEUjtBQUVIQyxNQUFBQSxPQUZHLHFCQUVPLENBQUUsQ0FGVDtBQUdIQyxNQUFBQSxPQUhHLHFCQUdPLENBQUUsQ0FIVDtBQUlIQyxNQUFBQSxJQUpHLGtCQUlJO0FBQ0gsZUFBTyxJQUFJcEIsT0FBSixDQUFZLFlBQUksQ0FBRSxDQUFsQixFQUFvQixZQUFJLENBQUUsQ0FBMUIsQ0FBUDtBQUNIO0FBTkUsS0FBUDtBQVFIOztVQUNEcUIsZUFBQSx3QkFBZSxDQUFFOztVQUVqQkMsaUJBQUEsMEJBQWlCO0FBQ2IsV0FBTztBQUNITCxNQUFBQSxNQURHLG9CQUNNLENBQUUsQ0FEUjtBQUVITSxNQUFBQSxRQUZHLHNCQUVRLENBQUUsQ0FGVjtBQUdITCxNQUFBQSxPQUhHLHFCQUdPLENBQUUsQ0FIVDtBQUlITSxNQUFBQSxJQUpHLGtCQUlJLENBQUUsQ0FKTjtBQUtIQyxNQUFBQSxJQUxHLGtCQUtJLENBQUUsQ0FMTjtBQU1IQyxNQUFBQSxPQU5HLHFCQU1PLENBQUU7QUFOVCxLQUFQO0FBUUg7O1VBRURDLHVCQUFBLGdDQUF1QjtBQUNuQixRQUFJLENBQUMsS0FBS0MsRUFBVixFQUFjO0FBQ1YsV0FBS0EsRUFBTCxHQUFVLElBQUloQyxpQkFBSixFQUFWO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLZ0MsRUFBWjtBQUNIOztVQUVEQyxRQUFBLGlCQUFRLENBRVA7O1VBRURDLGdCQUFBLHlCQUFnQixDQUVmOztVQUVEQyxTQUFBLGtCQUFTLENBRVI7O1VBQ0RDLGNBQUEsdUJBQWMsQ0FFYjs7VUFFREMsVUFBQSxpQkFBUUMsQ0FBUixFQUFXLENBQ1Y7O1VBRURDLHlCQUFBLGtDQUEwQixDQUV6Qjs7VUFFREMsU0FBQSxrQkFBUyxDQUVSOztVQUVEQyxpQkFBQSwwQkFBaUI7QUFDYixXQUFPLEVBQVA7QUFDSDs7Ozs7QUFHTCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsRUFBWixFQUFnQjtBQUNaRCxFQUFBQSxNQUFNLENBQUNDLEVBQVAsR0FBWSxJQUFJbEMsTUFBSixFQUFaO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBlbnYgPSB7XG4gICAgVVNFUl9EQVRBX1BBVEg6IFwiXCIsXG59XG5cbmNsYXNzIEZpbGVTeXN0ZW1NYW5hZ2VyIHtcbiAgICBzdGF0KCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9XG59XG5cbmNsYXNzIFdYQ29sbCB7XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9LCAoKT0+e30pXG4gICAgfVxufVxuXG5jbGFzcyBXWERCIHtcbiAgICBjb2xsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IFdYQ29sbFxuICAgIH1cbn1cblxuY2xhc3MgV1hDbGNvdWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGRhdGFiYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFdYREJcbiAgICB9XG59XG5cbmNsYXNzIHdlY2hhdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW52ID0gZW52XG4gICAgICAgIHRoaXMuY2xvdWQgPSBuZXcgV1hDbGNvdWQoKVxuICAgIH1cblxuICAgIGNyZWF0ZUlubmVyQXVkaW9Db250ZXh0ICgpIHsgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9wKCkge30sXG4gICAgICAgICAgICBwbGF5KCkge30sXG4gICAgICAgICAgICBvblNlZWtlZCgpIHt9LFxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFN5c3RlbUluZm9TeW5jICgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgc2hvd1NoYXJlTWVudSgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZVNoYXJlTWVudSgpIHtcblxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgc2hhcmVBcHBNZXNzYWdlKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgY3JlYXRlUmV3YXJkZWRWaWRlb0FkKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Mb2FkKCkge30sXG4gICAgICAgICAgICBvbkVycm9yKCkge30sXG4gICAgICAgICAgICBvbkNsb3NlKCkge30sXG4gICAgICAgICAgICBsb2FkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e30sICgpPT57fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWJyYXRlU2hvcnQoKSB7fVxuXG4gICAgY3JlYXRlQmFubmVyQWQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkxvYWQoKSB7fSxcbiAgICAgICAgICAgIG9uUmVzaXplKCkge30sXG4gICAgICAgICAgICBvbkVycm9yKCkge30sXG4gICAgICAgICAgICBzaG93KCkge30sXG4gICAgICAgICAgICBoaWRlKCkge30sXG4gICAgICAgICAgICBkZXN0cm95KCkge30sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGaWxlU3lzdGVtTWFuYWdlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZzKSB7XG4gICAgICAgICAgICB0aGlzLmZzID0gbmV3IEZpbGVTeXN0ZW1NYW5hZ2VyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZnNcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcblxuICAgIH1cblxuICAgIGdldFN5c3RlbUluZm8oKSB7XG5cbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICBwb3N0TWVzc2FnZSgpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJlcXVlc3QoZSkge1xuICAgIH1cblxuICAgIG9uQXVkaW9JbnRlcnJ1cHRpb25FbmQgKCkge1xuXG4gICAgfVxuXG4gICAgb25IaWRlKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0U3RvcmFnZVN5bmMoKSB7XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgfVxufVxuXG5pZiAoIXdpbmRvdy53eCkge1xuICAgIHdpbmRvdy53eCA9IG5ldyB3ZWNoYXRcbn1cblxuIl19