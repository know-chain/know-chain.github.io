! function (n) {
  var e = {};

  function t(o) {
    if (e[o]) return e[o].exports;
    var r = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return n[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  t.m = n, t.c = e, t.d = function (n, e, o) {
    t.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: o
    })
  }, t.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    })
  }, t.t = function (n, e) {
    if (1 & e && (n = t(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: n
      }), 2 & e && "string" != typeof n)
      for (var r in n) t.d(o, r, function (e) {
        return n[e]
      }.bind(null, r));
    return o
  }, t.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n.default
    } : function () {
      return n
    };
    return t.d(e, "a", e), e
  }, t.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e)
  }, t.p = "https://codesandbox.io/", t(t.s = "./src/watermark-button.js")
}({
  "./src/watermark-button.js": function (n, e) {
    var t;
    var o = function n() {
      if ("undefined" === typeof window || window.location && window.location.href.indexOf("?standalone") > -1 || !window.opener && window.parent === window) {
        var e = document.createElement("iframe"),
          o = "sb__open-sandbox".concat(Math.floor(100 * Math.random()));
        e.setAttribute("id", o), clearInterval(t), t = setInterval((function () {
          document.getElementById(o) || n()
        }), 1e3);
        var r = document.createElement("a");
        ! function (n) {
          n.setAttribute("style", "\n      position: fixed;\n      margin: 0;\n      padding: 0;\n      bottom: 16px;\n      right: 16px;\n      border: none;\n      width: 118px;\n      height: 36px;\n      z-index: 9999999999999;\n    "), n.addEventListener("load", (function () {
            n.contentDocument.body.setAttribute("style", "margin: 0;")
          }))
        }(e), e.onload = function () {
          e.contentDocument.body.appendChild(r)
          //, r.setAttribute("style", "\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n  padding: 0 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: white;\n  background-color: rgb(21, 21, 21);\n  cursor: pointer;\n  border: 1px solid rgb(52,52,52);\n  border-radius: 4px;\n  text-decoration: none;\n  font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: antialiased;\n  z-index: 99999999999;\n"),
          // r.innerText = "Open Sandbox", r.href = "https://codesandbox.io/s/" + document.location.host.split(".")[0], r.target = "_blank", r.rel = "noopener noreferrer"
          ;
          var t = new MutationObserver((function () {
            document.body.removeChild(e), t.disconnect(), n()
          }));
          t.observe(e, {
            attributes: !0,
            childList: !0,
            subtree: !0
          })
        }, document.body.appendChild(e)
      }
    };
    try {
      setTimeout((function () {
        o()
      }), 250)
    } catch (r) {
      console.error(r)
    }
  }
});
//# sourceMappingURL=watermark-button.be960f43b.js.map
