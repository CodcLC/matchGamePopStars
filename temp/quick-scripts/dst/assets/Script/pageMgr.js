
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/pageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1bb7xaDvtHXLTuIo0MRIEu', 'pageMgr');
// Script/pageMgr.js

"use strict";

/**
 * @author uu
 * @file  通用页面控制器和适配
 */
var AC = require('action');

cc.Class({
  "extends": cc.Component,
  properties: {
    status: 0,
    //页面状态
    pages: [cc.Node]
  },
  // 0 开始游戏页面
  // 1 游戏页面
  // 2 UI页面
  // 3 过关页面
  // 4 失败页面
  // 5 复活页面
  // 6 排行榜页面
  start: function start() {
    this.lateStart();
  },
  lateStart: function lateStart() {
    this.width = cc.director.getWinSizeInPixels().width;
    window.width = this.width;
    this.height = cc.director.getWinSizeInPixels().height;
    window.height = this.height; // 存为全局变量

    this.adoptCanvas();
  },
  // 适配解决方案
  adoptCanvas: function adoptCanvas() {
    var canvas = cc.director.getScene().getChildByName('Canvas').getComponent(cc.Canvas); // 设计分辨率比

    var rateR = canvas.designResolution.height / canvas.designResolution.width; // 显示分辨率比

    var rateV = this.height / this.width;

    if (rateV > rateR) {
      canvas.fitHeight = false;
      canvas.fitWidth = true;
    } else {
      canvas.fitHeight = true;
      canvas.fitWidth = false;
    }
  },
  onOpenPage: function onOpenPage(num, callFun) {
    this.closeAllPages();
    this.pages[num].active = true; // if (callFun) {
    //   this.callFun();
    // }
  },
  addPage: function addPage(num, callFun) {
    this.pages[num].scale = 0.5;
    this.pages[num].active = true;
    this.pages[num].runAction(AC.popOut(0.5)); // if (callFun) {
    //   this.callFun();
    // }
  },
  removePage: function removePage(num, callFun) {
    var _this = this;

    this.pages[num].runAction(cc.sequence(AC.popIn(0.5), cc.callFunc(function () {
      _this.pages[num].active = false;
    }, this))); // if (callFun) {
    //   this.callFun();
    // }
  },
  onButtonOpenPage: function onButtonOpenPage(event, cust) {
    this.onOpenPage(cust);
  },
  onButtonAddPage: function onButtonAddPage(event, cust) {
    this.addPage(cust);
  },
  onButtonRemovePage: function onButtonRemovePage(event, cust) {
    this.removePage(cust);
  },
  closeAllPages: function closeAllPages() {
    this.pages.forEach(function (element) {
      element.active = false;
    });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYWdlTWdyLmpzIl0sIm5hbWVzIjpbIkFDIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhdHVzIiwicGFnZXMiLCJOb2RlIiwic3RhcnQiLCJsYXRlU3RhcnQiLCJ3aWR0aCIsImRpcmVjdG9yIiwiZ2V0V2luU2l6ZUluUGl4ZWxzIiwid2luZG93IiwiaGVpZ2h0IiwiYWRvcHRDYW52YXMiLCJjYW52YXMiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiQ2FudmFzIiwicmF0ZVIiLCJkZXNpZ25SZXNvbHV0aW9uIiwicmF0ZVYiLCJmaXRIZWlnaHQiLCJmaXRXaWR0aCIsIm9uT3BlblBhZ2UiLCJudW0iLCJjYWxsRnVuIiwiY2xvc2VBbGxQYWdlcyIsImFjdGl2ZSIsImFkZFBhZ2UiLCJzY2FsZSIsInJ1bkFjdGlvbiIsInBvcE91dCIsInJlbW92ZVBhZ2UiLCJzZXF1ZW5jZSIsInBvcEluIiwiY2FsbEZ1bmMiLCJvbkJ1dHRvbk9wZW5QYWdlIiwiZXZlbnQiLCJjdXN0Iiwib25CdXR0b25BZGRQYWdlIiwib25CdXR0b25SZW1vdmVQYWdlIiwiZm9yRWFjaCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxFQUFFLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQWhCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsTUFBTSxFQUFFLENBREU7QUFDQztBQUNYQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKO0FBRkcsR0FGTDtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLEVBQUFBLEtBZE8sbUJBY0M7QUFDTixT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UEUsRUFBQUEsa0JBdEVPLDhCQXNFWUgsS0F0RVosRUFzRW1CQyxJQXRFbkIsRUFzRXlCO0FBQzlCLFNBQUtOLFVBQUwsQ0FBZ0JNLElBQWhCO0FBQ0QsR0F4RU07QUF5RVBaLEVBQUFBLGFBekVPLDJCQXlFUztBQUNkLFNBQUt2QixLQUFMLENBQVdzQyxPQUFYLENBQW1CLFVBQUFDLE9BQU8sRUFBSTtBQUM1QkEsTUFBQUEsT0FBTyxDQUFDZixNQUFSLEdBQWlCLEtBQWpCO0FBQ0QsS0FGRDtBQUdEO0FBN0VNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciB1dVxuICogQGZpbGUgIOmAmueUqOmhtemdouaOp+WItuWZqOWSjOmAgumFjVxuICovXG52YXIgQUMgPSByZXF1aXJlKCdhY3Rpb24nKVxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBzdGF0dXM6IDAsIC8v6aG16Z2i54q25oCBXG4gICAgcGFnZXM6IFtjYy5Ob2RlXSxcbiAgfSxcbiAgLy8gMCDlvIDlp4vmuLjmiI/pobXpnaJcbiAgLy8gMSDmuLjmiI/pobXpnaJcbiAgLy8gMiBVSemhtemdolxuICAvLyAzIOi/h+WFs+mhtemdolxuICAvLyA0IOWksei0pemhtemdolxuICAvLyA1IOWkjea0u+mhtemdolxuICAvLyA2IOaOkuihjOamnOmhtemdolxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMubGF0ZVN0YXJ0KClcbiAgfSxcbiAgbGF0ZVN0YXJ0KCkge1xuICAgIHRoaXMud2lkdGggPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplSW5QaXhlbHMoKS53aWR0aFxuICAgIHdpbmRvdy53aWR0aCA9IHRoaXMud2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGNjLmRpcmVjdG9yLmdldFdpblNpemVJblBpeGVscygpLmhlaWdodFxuICAgIHdpbmRvdy5oZWlnaHQgPSB0aGlzLmhlaWdodFxuICAgIC8vIOWtmOS4uuWFqOWxgOWPmOmHj1xuICAgIHRoaXMuYWRvcHRDYW52YXMoKVxuICB9LFxuICAvLyDpgILphY3op6PlhrPmlrnmoYhcbiAgYWRvcHRDYW52YXMoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5DYW52YXMpXG4gICAgLy8g6K6+6K6h5YiG6L6o546H5q+UXG4gICAgbGV0IHJhdGVSID0gY2FudmFzLmRlc2lnblJlc29sdXRpb24uaGVpZ2h0IC8gY2FudmFzLmRlc2lnblJlc29sdXRpb24ud2lkdGg7XG4gICAgLy8g5pi+56S65YiG6L6o546H5q+UXG4gICAgbGV0IHJhdGVWID0gdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoO1xuICAgIGlmIChyYXRlViA+IHJhdGVSKSB7XG4gICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBvbk9wZW5QYWdlKG51bSwgY2FsbEZ1bikge1xuICAgIHRoaXMuY2xvc2VBbGxQYWdlcygpXG4gICAgdGhpcy5wYWdlc1tudW1dLmFjdGl2ZSA9IHRydWVcbiAgICAvLyBpZiAoY2FsbEZ1bikge1xuICAgIC8vICAgdGhpcy5jYWxsRnVuKCk7XG4gICAgLy8gfVxuICB9LFxuICBhZGRQYWdlKG51bSwgY2FsbEZ1bikge1xuICAgIHRoaXMucGFnZXNbbnVtXS5zY2FsZSA9IDAuNVxuICAgIHRoaXMucGFnZXNbbnVtXS5hY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5wYWdlc1tudW1dLnJ1bkFjdGlvbihBQy5wb3BPdXQoMC41KSlcbiAgICAvLyBpZiAoY2FsbEZ1bikge1xuICAgIC8vICAgdGhpcy5jYWxsRnVuKCk7XG4gICAgLy8gfVxuICB9LFxuICByZW1vdmVQYWdlKG51bSwgY2FsbEZ1bikge1xuICAgIHRoaXMucGFnZXNbbnVtXS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoQUMucG9wSW4oMC41KSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgdGhpcy5wYWdlc1tudW1dLmFjdGl2ZSA9IGZhbHNlXG4gICAgfSx0aGlzKSkpXG4gICAgLy8gaWYgKGNhbGxGdW4pIHtcbiAgICAvLyAgIHRoaXMuY2FsbEZ1bigpO1xuICAgIC8vIH1cbiAgfSxcbiAgb25CdXR0b25PcGVuUGFnZShldmVudCwgY3VzdCkge1xuICAgIHRoaXMub25PcGVuUGFnZShjdXN0KTtcbiAgfSxcbiAgb25CdXR0b25BZGRQYWdlKGV2ZW50LCBjdXN0KSB7XG4gICAgdGhpcy5hZGRQYWdlKGN1c3QpO1xuICB9LFxuICBvbkJ1dHRvblJlbW92ZVBhZ2UoZXZlbnQsIGN1c3QpIHtcbiAgICB0aGlzLnJlbW92ZVBhZ2UoY3VzdCk7XG4gIH0sXG4gIGNsb3NlQWxsUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZVxuICAgIH0pO1xuICB9LFxufSk7Il19