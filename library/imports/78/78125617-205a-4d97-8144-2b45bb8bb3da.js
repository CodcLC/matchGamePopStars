"use strict";
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