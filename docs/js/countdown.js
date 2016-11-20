/*! Countdown - v5.1.0 - 2015-12-24 */
Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        if (null == this) throw new TypeError;
        var b = Object(this),
            c = b.length >>> 0;
        if (0 === c) return -1;
        var d = 0;
        if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
            if (e in b && b[e] === a) return e;
        return -1
    }), Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function() {},
            e = function() {
                return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            };
        return d.prototype = this.prototype, e.prototype = new d, e
    }), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function() {},
            b = (Array.prototype.indexOf, Object.prototype.toString),
            c = String.prototype.trim;
        a.link = function(a, b, c) {
            c = c || {};
            var d = b || "_blank",
                e = [];
            for (var f in c) f = f.toLowerCase(), "width" == f || "height" == f || "left" == f ? e.push(f + "=" + c[f]) : ("location" == f || "menubar" == f || "resizable" == f || "scrollbars" == f || "status" == f || "titlebar" == f || "toolbar" == f) && e.push(f + "=1");
            var g = null;
            e.length > 0 && (g = e.join(",")), window.open(a, d, g)
        }, a.isArray = function(a) {
            return Array.isArray ? Array.isArray(a) : "[object Array]" === b.call(a)
        }, a.isEmpty = function(b) {
            var c = typeof b;
            if ("undefined" == c) return !0;
            if (null === b) return !0;
            if ("object" == c) {
                if (b == {} || b == []) return !0;
                var d = !0;
                for (var e in b)
                    if (!a.isEmpty(b[e])) {
                        d = !1;
                        break
                    }
                return d
            }
            return "string" == c && "" == b ? !0 : !1
        }, a.isNumber = function(a) {
            return "[object Number]" === b.call(a) && isFinite(a)
        }, a.isInteger = function(a) {
            return parseFloat(a) == parseInt(a) && !isNaN(a) && isFinite(a)
        }, a.isString = function(a) {
            return "[object String]" === b.call(a)
        }, a.isNull = function(a) {
            return "" === a || null === a || void 0 === a || "undefined" == typeof a || "undefined" == a || "null" == a ? !0 : !1
        }, a.clone = function(b) {
            if (null === b || "object" != typeof b) return b;
            if (b.init) return b;
            var c = b.constructor;
            if (c) {
                var d = new c;
                for (var e in b) d[e] = a.clone(b[e])
            }
            return d
        }, a.sortOn = function(a, b) {
            return b && a ? void a.sort(function(a, c) {
                return a[b] < c[b] ? -1 : a[b] > c[b] ? 1 : 0
            }) : a
        }, a.arrayShuffle = function(a) {
            if (a) {
                for (var b, c, d = a.length; d;) c = Math.floor(Math.random() * d--), b = a[d], a[d] = a[c], a[c] = b;
                return a
            }
            return []
        }, a.arrayMove = function(a, b, c) {
            a.splice(c, 0, a.splice(b, 1)[0])
        }, a.arrayInsertAt = function(a, b, c) {
            return Array.prototype.splice.apply(a, [b, 0].concat(c)), a
        }, a.rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, a.trim = c && !c.call("\ufeff ") ? function(a) {
            return null == a ? "" : c.call(a)
        } : function(b) {
            return null == b ? "" : (b + "").replace(a.rtrim, "")
        }, a.alphanumeric = function(a, b) {
            return b ? a.replace(/[^A-Za-z0-9]/g, "") : a.replace(/[^A-Za-z0-9_\-\.]/g, "")
        }, a.parseJSON = function(a) {
            if ("string" != typeof a) return null;
            try {
                return JSON.parse(a)
            } catch (b) {
                return a || null
            }
        }, a.hexToRgb = function(a) {
            if (!a) return "";
            var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
        }, a.makeColor = function(b, c) {
            if (!b) return "";
            var d = a.hexToRgb(b);
            return a.isNumber(c) && jbeeb.Browser.rgba ? (c > 1 && (c /= 100), c = "," + c, "rgba(" + d.join(",") + c + ")") : b
        }, a.getXYWH = function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = 0;
            if (a) {
                d = a.offsetWidth, e = a.offsetHeight;
                for (var f = jbeeb.Browser.touch; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) f ? (b += (a.offsetLeft || 0) - (a.scrollLeft || 0), c += (a.offsetTop || 0) - (a.scrollTop || 0)) : (b += a.offsetLeft || 0, c += a.offsetTop || 0), a = a.offsetParent;
                if (f) {
                    var g = null != window.scrollX ? window.scrollX : window.pageXOffset,
                        h = null != window.scrollY ? window.scrollY : window.pageYOffset;
                    b += g, c += h
                }
            }
            return {
                x: b,
                y: c,
                w: d,
                h: e,
                xMax: b + d,
                yMax: c + e
            }
        }, a.getWindowSize = function() {
            var a = window,
                b = document,
                c = b.documentElement,
                d = b.getElementsByTagName("body")[0];
            return {
                w: a.innerWidth || c.clientWidth || d.clientWidth,
                h: a.innerHeight || c.clientHeight || d.clientHeight
            }
        }, a.contains = function(a, b) {
            var c = {},
                d = {
                    x: a.x,
                    y: a.y,
                    w: a.width,
                    h: a.height
                },
                e = {
                    x: b.x,
                    y: b.y,
                    w: b.width,
                    h: b.height
                };
            d.xMax = d.x + d.w, d.yMax = d.y + d.h, e.xMax = e.x + e.w, e.yMax = e.y + e.h;
            for (var f in d) c[f] = d[f] >= e[f] ? !0 : !1;
            var g = !c.x && !c.y && c.xMax && c.yMax ? !0 : !1;
            return g
        }, a.getTimestamp = function() {
            var a = new Date;
            return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()).valueOf()
        }, a.bindEvent = function(a, b, c) {
            a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1)
        }, a.unbindEvent = function(a, b, c) {
            a.attachEvent ? a.detachEvent("on" + b, c) : a.addEventListener && a.removeEventListener(b, c, !1)
        }, a.getAttributes = function(a) {
            var b = {},
                c = a.attributes;
            if (c) {
                for (var d = c.length, e = 0; d > e; e++) jbeeb.Browser.ie ? c[e].specified && (b[c[e].nodeName] = c[e].nodeValue.toString()) : c[e].value ? b[c[e].nodeName] = c[e].value.toString() : b[c[e].nodeName] = c[e].nodeValue.toString();
                return b
            }
            return {}
        }, jbeeb.Utils = a
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function() {
                this.initialize()
            },
            b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.removeEventListener = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent
        }, b.q = null, b.initialize = function() {}, b.addEventListener = function(a, b, c, d) {
            var e = this.q;
            e ? this.removeEventListener(a, b, c) : e = this.q = {};
            var f = e[a];
            return f || (f = e[a] = []), f.push({
                fn: b,
                arg: d,
                scope: c
            }), b
        }, b.removeEventListener = function(a, b, c) {
            var d = this.q;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = e.length; f--;) {
                        var g = e[f];
                        g.scope == c && g.fn == b && e.splice(f, 1)
                    }
            }
        }, b.removeAllEventListeners = function(a) {
            a ? this.q && delete this.q[a] : this.q = null
        }, b.dispatchEvent = function(a) {
            var b = "undefined",
                c = this.q;
            if (a && c) {
                var d = c[a];
                if (d) {
                    var e = [].slice.call(arguments);
                    e.splice(0, 1);
                    for (var f = 0; f < d.length; f++) {
                        var g = d[f];
                        if (g.fn) {
                            var h = e,
                                i = g.arg;
                            typeof i !== b && h.push(i), h.length ? g.scope ? g.fn.apply(g.scope, h) : g.fn.apply(null, h) : g.scope ? g.fn.call(g.scope) : g.fn()
                        }
                    }
                }
            }
        }, b.hasEventListener = function(a) {
            var b = this.q;
            return !(!b || !b[a])
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, jbeeb.EventDispatcher || (jbeeb.EventDispatcher = a)
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        var a = function() {
            var a, b, c, d = [],
                e = !1,
                f = document,
                g = f.documentElement,
                h = g.doScroll,
                i = "DOMContentLoaded",
                j = "addEventListener",
                k = "onreadystatechange",
                l = "readyState",
                m = h ? /^loaded|^c/ : /^loaded|c/,
                n = m.test(f[l]);
            return b = function(a) {
                try {
                    a = f.getElementsByTagName("body")[0].appendChild(f.createElement("span")), a.parentNode.removeChild(a)
                } catch (c) {
                    return setTimeout(function() {
                        b()
                    }, 50)
                }
                for (n = 1; a = d.shift();) a()
            }, f[j] && (c = function() {
                f.removeEventListener(i, c, e), b()
            }, f[j](i, c, e), a = function(a) {
                n ? a() : d.push(a)
            }), h && (c = function() {
                /^c/.test(f[l]) && (f.detachEvent(k, c), b())
            }, f.attachEvent(k, c), a = function(b) {
                if (self != top) n ? b() : d.push(b);
                else {
                    try {
                        g.doScroll("left")
                    } catch (c) {
                        return setTimeout(function() {
                            a(b)
                        }, 50)
                    }
                    b()
                }
            }), a
        };
        jbeeb.ready || (jbeeb.ready = a())
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        function a() {
            return c && c.call(performance) || (new Date).getTime()
        }
        var b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
            c = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow),
            d = function(a) {
                return this.init(a), this
            },
            e = d.prototype;
        e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, jbeeb.EventDispatcher.initialize(e), e.r = 50, e.v = 0, e.A = null, e.B = null, e.C = null, e.D = !1, e.state = 0, e.init = function(a) {
            a.fps ? (this.D = a.animation && b || !1, this.r = 1e3 / (a.fps || 60)) : this.r = a.interval || 50, a.startNow && this.start()
        }, e.stop = function() {
            this.state = 0, this.E(this.F)
        }, e.getInterval = function() {
            return this.r
        }, e.setInterval = function(a) {
            this.r = a
        }, e.start = function() {
            this.state || (this.state = 1, this.A = [], this.A.push(this.v = a()), this.D ? this.E(this.G) : this.E(this.H), this.I())
        }, e.getFPS = function() {
            var a = this.A.length - 1;
            if (2 > a) return this.r;
            var b = (this.A[0] - this.A[a]) / a;
            return 1e3 / b
        }, e.G = function() {
            this.B = null, this.I(), a() - this.v >= .97 * (this.r - 1) && this.J()
        }, e.H = function() {
            this.B = null, this.I(), this.J()
        }, e.F = function() {
            this.B = null
        }, e.I = function() {
            if (null == this.B) {
                if (this.D) return b(this.C), void(this.B = !0);
                this.B && clearTimeout(this.B), this.B = setTimeout(this.C, this.r)
            }
        }, e.E = function(a) {
            this.C = a.bind(this)
        }, e.J = function() {
            var b = a(),
                c = b - this.v;
            for (this.v = b, this.dispatchEvent("tick", {
                    delta: c,
                    time: b
                }), this.A.unshift(b); this.A.length > 100;) this.A.pop()
        }, e.toString = function() {
            return "[Ticker]"
        }, jbeeb.Ticker || (jbeeb.Ticker = d)
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        if (!jbeeb.Browser) {
            var a = {};
            a.ie = null, a.ios = null, a.mac = null, a.webkit = null, a.oldWebkit = !1, a.flash = 0, a.touch = !1;
            var b = function(a) {
                    a = a.toLowerCase();
                    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                c = b(navigator.userAgent);
            a.version = parseFloat(c.version);
            var d = c.browser;
            a.agent = d;
            var e = !1;
            "chrome" == d ? e = !0 : "webkit" == d && (e = !0), a.webkit = e, a.chrome = /chrome/.test(d) || /chromium/.test(d), a.moz = /mozilla/.test(d), a.opera = /opera/.test(d), a.safari = /webkit/.test(d), a.ie = /msie/.test(d) && !/opera/.test(d), a.android = /android/.test(d);
            var f = navigator,
                g = f.platform.toLowerCase();
            a.platform = g, a.ios = /iphone/.test(g) || /ipod/.test(g) || /ipad/.test(g), a.win = a.windows = g ? /win/.test(g) : /win/.test(d), a.mac = g ? /mac/.test(g) : /mac/.test(d), a.cssPrefix = "", a.chrome || a.safari ? (a.cssPrefix = "webkit", a.chrome && a.version < 10 ? a.oldWebkit = !0 : a.safari && a.version < 5.1 && (a.oldWebkit = !0)) : a.opera ? a.cssPrefix = "o" : a.moz ? a.cssPrefix = "moz" : a.ie && a.version > 8 && (a.cssPrefix = "ms"), (a.chrome || a.ios || a.android) && (a.flash = 0);
            var h = !1,
                i = "animation",
                j = "",
                k = "Webkit Moz O ms Khtml".split(" "),
                l = "",
                m = document.createElement("div");
            if (m.style.animationName && (h = !0), h === !1)
                for (var n = 0; n < k.length; n++)
                    if (void 0 !== m.style[k[n] + "AnimationName"]) {
                        l = k[n], i = l + "Animation", j = "-" + l.toLowerCase() + "-", h = !0;
                        break
                    }
            m = null, a.animation = h, a.modern = !1, a.moz && a.version > 3 && (a.modern = !0), a.opera && a.version > 9 && (a.modern = !0), a.ie && a.version > 9 && (a.modern = !0), (a.chrome || a.safari || a.ios || a.android) && (a.modern = !0), a.rgba = !0, a.quirks = "CSS1Compat" == document.compatMode ? !1 : !0, a.ie ? a.version < 9 ? a.rgba = !1 : a.quirks && (a.rgba = !1, a.version = 8, a.modern = !1) : a.moz && a.version < 3 ? a.rgba = !1 : a.safari && a.version < 3 ? a.rgba = !1 : a.opera && a.version < 10 && (a.rgba = !1), a.touch = "undefined" == typeof window.ontouchstart ? !1 : !0, jbeeb.Browser = a
        }
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function(a, b) {
            function c(a, b) {
                var d, e, f, g, h, l, m, n, o, p, q, r, s, t;
                a = a || "";
                var u = a.replace(/\\/g, "/");
                if (!u.match(/:\//)) {
                    var v = "";
                    v = b ? j : k;
                    var w = c(v, !1);
                    if ("/" == u.substr(0, 1)) u = w.host + (i ? "" : "/") + u;
                    else if ("../" == u.substr(0, 3)) {
                        var x = w.parenturl.split("/"),
                            y = u.split("../"),
                            z = y.pop();
                        x.splice(x.length - y.length, y.length, z), u = x.join("/")
                    } else u = w.pathurl + (i ? "" : "/") + u
                }
                "/" == u.substr(-1) && (u = u.substr(0, u.length - 1));
                var A = u.split("://");
                if (e = A.shift(), n = (A.shift() || "").replace("//", "/"), n = n.split("/"), f = n.shift() || "", f.indexOf("@") > -1) {
                    A = f.split("@");
                    var B = A[0].split(":");
                    r = B[0], s = B[1], f = A[1]
                }
                f.indexOf(":") > -1 && (A = f.split(":"), g = A[1], f = A[0]), n = n.join("/"), -1 != n.indexOf("#") && (A = n.split("#"), q = A[1], n = A[0]), -1 != n.indexOf("?") && (A = n.split("?"), p = A[1], n = A[0]), A = n.split("/"), m = A.pop(), n = A.join("/"), ".." == m && (m = "");
                var C = m.split(".");
                C.length > 1 && (l = C.pop().toLowerCase(), h = C.join(".")), t = e + "://" + f + (g ? ":" + g : ""), n = "/" + n + (n.length > 0 ? "/" : ""), o = t + n, d = t + n + m + (p ? "?" + p : "") + (q ? "#" + q : "");
                var D = n,
                    E = o;
                return l ? (n += m, o += m) : (n += m + ("" != m ? "/" : ""), o += m + ("" != m ? "/" : ""), h = m, p || q || "/" == d.substr(-1) || (d += "/")), i === !1 && ("/" == D.substr(-1) && (D = D.substr(0, D.length - 1)), "/" == E.substr(-1) && (E = E.substr(0, E.length - 1)), l || ("/" == n.substr(-1) && (n = n.substr(0, n.length - 1)), "/" == o.substr(-1) && (o = o.substr(0, o.length - 1)), "/" == d.substr(-1) && (d = d.substr(0, d.length - 1)))), {
                    source: a || null,
                    url: d || null,
                    protocol: e || null,
                    domain: f || null,
                    port: g || null,
                    basename: h || null,
                    ext: l || null,
                    filename: m || null,
                    path: n || null,
                    pathurl: o || null,
                    parent: D || null,
                    parenturl: E || null,
                    query: p || null,
                    fragment: q || null,
                    username: r || null,
                    password: s || null,
                    host: t || null
                }
            }

            function d(a) {
                return a = a || "", a.split("?")[0].split("/").pop()
            }

            function e(a) {
                var b = d(a),
                    c = b.split(".");
                return c.pop(), c.join(".")
            }

            function f(a) {
                a = a || "";
                var b = a.split("?")[0].split("/").pop(),
                    c = b.split(".");
                return c.pop().toLowerCase()
            }

            function g(a) {
                var b = a.split("/");
                return b.pop(), b.join("/").toString() + (b.length > 0 ? "/" : "")
            }

            function h(a) {
                var b, c = document.getElementsByTagName("script"),
                    d = c[c.length - 1],
                    e = d.getAttribute("src");
                return b = e ? a ? e.split("?")[0] : g(e.split("?")[0]) : ""
            }
            var i = !0,
                j = h(),
                k = g(window.location.href);
            return {
                parse: c,
                filename: d,
                basename: e,
                basepath: g,
                scriptPath: j,
                getScriptPath: h,
                pagePath: k,
                ext: f
            }
        };
        jbeeb.PathInfo = a()
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        jbeeb.Base || (jbeeb.amReady = !1, jbeeb.ticker = null, jbeeb.tickerInterval = 80, jbeeb.scriptPath = null, jbeeb.pagePath = "", jbeeb.assetsBasePath = "", jbeeb.focus = null, jbeeb.binit = 0), jbeeb.unfocus = function() {
            if (jbeeb.focus) {
                var a = jbeeb.focus;
                a.element && a.element.blur(), jbeeb.focus = null
            }
        };
        var a = function() {};
        a.K = 0, a.L = [], a.M = [], a.scriptPath = null, a.N = function(b) {
            return "jbeeb_" + a.K++
        }, a.O = function(b) {
            a.M.push(b), jbeeb.amReady && a.P()
        }, a.P = function() {
            var b = a.M.length;
            if (b > 0)
                for (var c = b; c--;) {
                    var d = a.M.splice(c, 1)[0];
                    d && d.init && d.init.call(d)
                }
        }, a.init = function() {
            if (!jbeeb.amReady) {
                jbeeb.ticker = new jbeeb.Ticker({
                    interval: jbeeb.tickerInterval,
                    startNow: 1
                }), jbeeb.assetsBasePath || (jbeeb.assetsBasePath = "");
                var b = window.location.href;
                "http" != b.substr(0, 4) ? (jbeeb.pagePath || (jbeeb.pagePath = ""), jbeeb.scriptPath || (jbeeb.scriptPath = "")) : (jbeeb.pagePath || (jbeeb.pagePath = jbeeb.PathInfo.pagePath), jbeeb.scriptPath || (jbeeb.scriptPath = jbeeb.PathInfo.scriptPath)), jbeeb.FlashDetect && jbeeb.FlashDetect.run(), jbeeb.amReady = !0, a.P()
            }
        }, jbeeb.Base || (jbeeb.Base = a, jbeeb.register = a.O, jbeeb.getUID = a.N)
    }(), jbeeb.binit || (jbeeb.binit = 1, jbeeb.ready(function() {
        jbeeb.Base.init()
    })), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function(a) {
                this.init(a)
            },
            b = a.prototype;
        b.addEventListener = null, b.removeEventListener = null, b.removeAllEventListeners = null, b.dispatchEvent = null, b.hasEventListener = null, jbeeb.EventDispatcher.initialize(b), b.amStage = null, b.element = null, b.style = null, b.Q = null, b.alpha = 1, b.id = null, b.name = null, b.parent = null, b.stage = null, b.rotation = 0, b.scale = 1, b.scaleX = 1, b.scaleY = 1, b.stretchX = 1, b.stretchY = 1, b.skewX = 0, b.skewY = 0, b.origin = null, b.originX = 0, b.originY = 0, b.originType = "px", b.shadow = null, b.bevel = null, b.outline = null, b.inset = null, b.visible = !0, b.overflow = "visible", b.autoCenter = null, b.x = 0, b.y = 0, b.width = 0, b.height = 0, b.flex = "wh", b.R = 1, b.S = 1, b.pin = null, b.T = null, b.U = null, b.z = 0, b.temp = null, b.rounded = null, b.fill = null, b.stroke = null, b.image = null, b.gradient = null, b.V = null, b.init = function(a) {
            this.temp = {}, this.style = null, this.alpha = 1, this.id = null, this.name = null, this.parent = null, this.rotation = 0, this.scale = 1, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.visible = !0, this.overflow = "visible", this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.flex = "wh", this.R = 1, this.S = 1, this.pin = null, this.T = null, this.U = null, this.z = 0, this.autoCenter = null, this.stroke = {}, this.fill = {}, this.shadow = null, this.inset = null, this.gradient = {}, this.rounded = null, jbeeb.storeCSS ? this.Q = {} : this.Q = null;
            var a = a || {},
                b = jbeeb.getUID();
            this.id = b, a.element ? this.element = a.element : (this.element = document.createElement("div"), this.element.id = b, this.element.style.position = "absolute", this.element.style.overflow = "visible", this.Q && (this.Q.position = "absolute", this.Q.overflow = "visible")), a.standalone && (this.amStage = 1), a.inline ? this.V = "inline-block" : this.V = "block", a.name && (this.name = a.name), this.element.id = this.type + "_" + this.element.id;
            var c = this.style = this.element.style;
            if (c.padding = "0px", c.margin = "0px", c.border = "0px", c.fontSize = "100%", c.verticalAlign = "baseline", c.outline = "0px", c.background = "transparent", c.WebkitTextSizeAdjust = "100%", c.msTextSizeAdjust = "100%", c.WebkitBoxSizing = c.MozBoxSizing = c.boxSizing = "padding-box", c.backgroundClip = "padding-box", this.Q) {
                var d = this.Q;
                d.padding = "0px", d.margin = "0px", d.border = "0px", d.fontSize = "100%", d.verticalAlign = "baseline", d.outline = "0px", d.background = "transparent", d.WebkitTextSizeAdjust = "100%", d.msTextSizeAdjust = "100%", d.boxSizing = "padding-box", d.backgroundClip = "padding-box"
            }
            a.editable || this.setSelectable(!1), this.setCursor("inherit"), a && (this.autoCenter = a.center, "undefined" != typeof a.flex && this.setFlex(a.flex), "undefined" != typeof a.pin && this.setPin(a.pin), "undefined" != typeof a.overflow && this.setOverflow(a.pin)), this.setOrigin(0, 0, "px"), this.applySkin(a, !1)
        }, b.setSelectable = function(a) {
            var b = this.style,
                c = "none",
                d = "-moz-none";
            a && (c = "text", d = "text"), b.userSelect = b.WebkitUserSelect = b.MozUserSelect = b.OUserSelect = c, b.MozUserSelect = d, this.Q && (this.Q.userSelect = c, this.Q.MozUserSelect = d)
        }, b.setBorderRender = function(a) {
            var b, c = this.style;
            b = "outside" == a ? "content-box" : "border-box", c.WebkitBoxSizing = c.MozBoxSizing = c.boxSizing = b, this.Q && (this.Q.boxSizing = b)
        }, b.applySkin = function(a, b) {
            if (this.stroke = {}, this.fill = {}, this.gradient = null, this.rounded = 0, this.image = null, this.shadow = null, this.bevel = null, this.outline = null, this.inset = null, b = 1 == b ? b : !1, !b) {
                var c = jbeeb.Utils.isNumber(a.x) ? a.x : 0,
                    d = jbeeb.Utils.isNumber(a.y) ? a.y : 0;
                this.setXY(c, d), a.height && this.setHeight(a.height), a.width && this.setWidth(a.width), a.h && this.setHeight(a.h), a.w && this.setWidth(a.w)
            }
            this.setRounded(a.rounded);
            var e, f, g = a.fill;
            if (g) {
                var g = g;
                "string" == typeof g ? (e = g, f = 1) : (e = g.color, f = g.alpha)
            }
            this.setFill(e, f);
            var g = a.stroke;
            e = null, f = null;
            var h = null,
                i = null;
            g && ("string" == typeof g ? (e = g, f = 1, h = 1, i = "solid") : null != g.color && (e = g.color || "#000000", f = jbeeb.Utils.isNumber(g.alpha) ? g.alpha : 1, h = g.weight || 1, i = g.style || "solid")), this.setStroke(h, e, f, i), this.setStrokeStyle(i);
            var j, k, g = a.image;
            a.image && ("string" == typeof g ? (j = g, k = null) : (j = g.url, k = g.mode)), this.setImage(j, k), this.setShadow(a.shadow), this.setBevel(a.bevel), this.setOutline(a.outline), this.setInset(a.inset)
        }, b.W = function() {
            var a = this.style;
            if (a) {
                var b = "",
                    c = "",
                    d = "",
                    e = "",
                    f = "",
                    g = 0,
                    h = this.fill;
                if (h && (jbeeb.Utils.isArray(h.color) ? g = 1 : h.color && (c = jbeeb.Utils.makeColor(h.color, h.alpha))), this.image && this.image.url) {
                    b = 'url("' + this.image.url + '")';
                    var i = this.image.mode || "center";
                    "pattern" == i || ("fit" == i ? d = "100% 100%" : ("contain" == i || "cover" == i) && (d = "contain"), e = "no-repeat", f = "center center"), g = 0
                }
                if (g) {
                    var j = h.color;
                    this.Q && (this.Q.gradient = 1);
                    for (var k = h.alpha || "v", l = jbeeb.Browser, m = [], n = [], o = j.length, p = l.oldWebkit, q = 0; o > q; q += 3) {
                        var r = jbeeb.Utils.makeColor(j[q], j[q + 1]),
                            s = j[q + 2];
                        s > 100 ? s = 100 : 0 > s && (s = 0), p ? n.push("color-stop(" + s + "%, " + r + ")") : m.push(r + " " + s + "%")
                    }
                    if (l.modern) {
                        var t, u, v = l.cssPrefix;
                        if ("" == v) t = "linear-", u = ("v" == k ? "to bottom, " : "to right, ") + m.join(",");
                        else if ("webkit" == v && p) {
                            var w = n.join(",");
                            t = "-webkit-", u = "v" == k ? "linear, left top, left bottom, " + w : "linear, left top, right top, " + w
                        } else t = "-" + v + "-linear-", u = ("v" == k ? "top, " : "left, ") + m.join(",");
                        b = t + "gradient(" + u + ")"
                    } else if (l.ie && l.version < 9) {
                        var x = "v" == k ? "0" : "1",
                            y = "progid:DXImageTransform.Microsoft.gradient( gradientType=" + x + ", startColorstr='" + j[0] + "', endColorstr='" + j[j.length - 3] + "')";
                        if (this.style.filter = y, this.style.msFilter = '"' + y + '"', this.Q) {
                            var z = this.Q;
                            z.filter = y, z.msFilter = '"' + y + '"'
                        }
                    } else {
                        for (var A = "", q = 0; o > q; q += 3) {
                            var r = jbeeb.Utils.makeColor(j[q], j[q + 1]);
                            A += '<stop offset="' + j[q + 2] + '%" stop-color="' + j[q] + '" stop-opacity="' + j[q + 1] + '"/>'
                        }
                        var B = "0",
                            C = "100";
                        "h" == k && (B = "100", C = "0");
                        var D = "jbeeb-grad-" + this.id,
                            E = "";
                        E += '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">', E += '  <linearGradient id="' + D + '" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="' + B + '%" y2="' + C + '%">', E += A, E += "  </linearGradient>", E += '  <rect x="0" y="0" width="1" height="1" fill="url(#' + D + ')" />', E += "</svg>", b = 'url("data:image/svg+xml;base64,' + jbeeb.Base64.encode(E) + '")'
                    }
                } else this.Q && (this.Q.gradient = 0);
                if (a.backgroundColor = c || "", a.backgroundImage = b || "none", a.backgroundSize = d || "", a.backgroundRepeat = e || "", a.backgroundPosition = f || "", this.Q) {
                    var z = this.Q;
                    z.backgroundColor = c || "", z.backgroundImage = b || "none", z.backgroundSize = d || "", z.backgroundRepeat = e || "", z.backgroundPosition = f || ""
                }
            }
        }, b.setFill = function(a, b) {
            this.fill || (this.fill = {}), this.fill.color = a, this.fill.alpha = b, this.W()
        }, b.setImage = function(a, b) {
            a ? (this.image || (this.image = {}), this.image.url = a, this.image.mode = b) : this.image = null, this.W()
        }, b.setImageSizing = function(a) {
            this.image && (this.image.mode = a, this.W())
        }, b.setStroke = function(a, b, c, d) {
            this.stroke || (this.stroke = {}), "string" == typeof a && (b = a, a = 1), a > 0 && (a = Math.round(a));
            var e = c || 1,
                f = d || "solid";
            null == b && (a = null, e = null, f = null);
            var g = this.stroke;
            g.weight = a, g.color = b, g.alpha = e, g.style = f;
            var f, h, i, j, k, l = this.style;
            if (a ? (f = f, h = a + "px", i = jbeeb.Utils.makeColor(b, e), j = -a + "px", k = -a + "px") : (f = "", h = "", i = "", j = "", k = ""), l.borderStyle = f, l.borderWidth = h, l.borderColor = i, l.marginLeft = j, l.marginTop = k, this.Q) {
                var m = this.Q;
                m.borderStyle = f, m.borderWidth = h, m.borderColor = i, m.marginLeft = j, m.marginTop = k
            }
            this.X()
        }, b.setStrokeStyle = function(a) {
            var b = a || "";
            this.style.borderStyle = b, this.Q && (this.Q.borderStyle = b)
        }, b.setCursor = function(a) {
            this.style.cursor = a, this.Q && (this.Q.cursor = a)
        }, b.setWidth = function(a) {
            var b = this.style;
            b && a > 0 && (this.width = a, b.width = a + "px", this.autoCenter && this.center(this.autoCenter), this.rounded && this.X(), this.Q && (this.Q.width = a + "px"))
        }, b.setHeight = function(a) {
            var b = this.style;
            b && a > 0 && (this.height = a, b.height = a + "px", this.autoCenter && this.center(this.autoCenter), this.rounded && this.X(), this.Q && (this.Q.height = a + "px"))
        }, b.measure = function() {
            var a = this.element,
                b = a.clientWidth,
                c = a.clientHeight;
            return this.width = b, this.height = c, [b, c]
        }, b.setSize = function(a, b) {
            var c = this.style;
            c && a > 0 && b > 0 && (this.width = a, this.height = b, c.width = a + "px", c.height = b + "px", this.autoCenter && this.center(this.autoCenter), this.rounded && this.X(), this.Q && (this.Q.width = a + "px", this.Q.height = b + "px"))
        }, b.setXY = function(a, b) {
            this.x = a, this.y = b;
            var c = this.style;
            c.left = a + "px", c.top = b + "px", this.Q && (this.Q.left = a + "px", this.Q.top = b + "px")
        }, b.setBaseXY = function(a, b) {
            this.setXY(a, b), this.Y = a, this.Z = b
        }, b.setXYWH = function(a, b, c, d) {
            this.width = c, this.height = d, this.x = a, this.y = b;
            var e = this.style;
            if (e.width = (c || 0) + "px", e.height = (d || 0) + "px", e.left = (a || 0) + "px", e.top = (b || 0) + "px", this.Q) {
                var f = this.Q;
                f.width = (c || 0) + "px", f.height = (d || 0) + "px", f.left = (a || 0) + "px", f.top = (b || 0) + "px"
            }
        }, b.setX = function(a) {
            this.x = a, this.style.left = (a || 0) + "px", this.Q && (this.Q.left = (a || 0) + "px")
        }, b.setY = function(a) {
            this.y = a, this.style.top = (a || 0) + "px", this.Q && (this.Q.top = (a || 0) + "px")
        }, b.setTop = function(a) {
            this.y = a, this.style.top = a + "px", this.Q && (this.Q.top = (a || 0) + "px")
        }, b.setBottom = function(a) {
            this.y = a - this.height, this.style.bottom = a + "px", this.Q && (this.Q.bottom = (a || 0) + "px")
        }, b.setLeft = function(a) {
            this.x = a, this.style.left = (a || 0) + "px", this.Q && (this.Q.left = (a || 0) + "px")
        }, b.setRight = function(a) {
            var b = (a || 0) - this.width;
            this.x = b, this.style.right = b + "px", this.Q && (this.Q.right = b + "px")
        }, b.setZ = function(a) {
            0 > a && (a = 0), this.z = a;
            var b = this.style;
            b || (this.style = b = this.element.style), b.zIndex = a, this.Q && (this.Q.zIndex = a)
        }, b.setScale = function(a) {
            this.scale = a, this.scaleX = a, this.scaleY = a;
            var b = "scale(" + a + "," + a + ")";
            this._(b)
        }, b.setScaleX = function(a) {
            this.scaleX = a;
            var b = "scale(" + this.scaleX + "," + a + ")";
            this._(b)
        }, b.setScaleY = function(a) {
            this.scaleY = a;
            var b = "scale(" + a + "," + this.scaleY + ")";
            this._(b)
        }, b.stretch = function(a, b) {
            if (this.stretchX = a, this.stretchY = b, a > 0 && b > 0) {
                this.R && this.setWidth(this.width * a), this.S && this.setHeight(this.height * b);
                var c = this.x,
                    d = this.y;
                if (this.T) {
                    if ("r" == this.T && this.parent) {
                        null == this.aa && (this.aa = this.parent.width - this.x);
                        var e = this.parent.width - this.aa;
                        this.setX(e)
                    }
                } else if (this.originX) {
                    var f = this.originX;
                    this.setX(f + (c - f) * a)
                } else this.setX(c * a);
                if (this.U) {
                    if ("b" == this.U && this.parent) {
                        null == this.ab && (this.ab = this.parent.height - this.y);
                        var e = this.parent.height - this.ab;
                        this.setY(e)
                    }
                } else if (this.originY) {
                    var f = this.originY;
                    this.setY(f + (d - f) * b)
                } else this.setY(d * b)
            }
            this.dispatchEvent("stretch", this.width, this.height)
        }, b.aa = null, b.ab = null, b.setPin = function(a) {
            this.pin = a, this.T = 0, this.U = 0, a && (a = a.toLowerCase(), a.match(/r/) && (this.T = "r"), a.match(/l/) && (this.T = "l"), a.match(/t/) && (this.U = "t"), a.match(/b/) && (this.U = "b"), a.match(/s/) && (this.T = "s", this.U = "s"))
        }, b.setFlex = function(a) {
            this.R = 0, this.S = 0, a && (a.toLowerCase(), a.match(/w/) ? this.R = 1 : this.R = 0, a.match(/h/) ? this.S = 1 : this.S = 0), this.flex = a
        }, b.setRotation = function(a) {
            this.rotation = a;
            var b = "rotate(" + a + "deg)";
            this._(b)
        }, b.setSkew = function(a, b) {
            this.skewX = a, this.skewY = b;
            var c = "skew(" + a + "deg," + b + "deg)";
            this._(c)
        }, b.setOrigin = function(a, b, c) {
            this.originX = a, this.originY = b, this.originType = c;
            var d = c ? c : "px",
                e = a + d + " " + b + d,
                f = this.style;
            f.transformOrigin = f.WebkitTransformOrigin = f.msTransformOrigin = f.MozTransformOrigin = f.OTransformOrigin = e, this.Q && (this.Q.transformOrigin = e)
        }, b._ = function(a) {
            var b = this.style;
            b.transform = b.transform = b.msTransform = b.WebkitTransform = b.MozTransform = a, this.Q && (this.Q.transform = a)
        }, b.center = function(a, b) {
            if ((this.parent || this.amStage) && this.width && this.height) {
                var c, d, e, f = this.x,
                    g = this.y;
                this.amStage ? (c = jbeeb.Utils.getXYWH(this.element.parentNode), d = .5 * c.w, e = .5 * c.h) : (c = this.parent, c.width || c.measure(), d = .5 * c.width, e = .5 * c.height);
                var h = .5 * this.width,
                    i = .5 * this.height;
                "v" == a ? g = e - i : "h" == a ? f = d - h : (f = d - h, g = e - i), this.setXY(f, g), c = null
            }
        }, b.setOverflow = function(a) {
            this.overflow = a;
            var b = "",
                c = "";
            if ("x" != a && "y" != a && a || ("x" == a ? (b = "auto", c = "hidden") : "y" == a && (b = "hidden", c = "auto", jbeeb.Browser.ie && this.setWidth(this.width + 20)), this.style.overflowX = b, this.style.overflowY = c), this.style.overflow = a, this.Q) {
                var d = this.Q;
                d.overflow = a, d.overflowX = b, d.overflowY = c
            }
        }, b.setVisible = function(a) {
            this.visible = a;
            var b, c = this.style;
            b = a ? this.V : "none", c.display = b, this.Q && (this.Q.display = b)
        }, b.show = function() {
            this.setVisible(!0)
        }, b.hide = function() {
            this.setVisible(!1)
        }, b.setAlpha = function(a) {
            this.alpha = a, null !== a && (this.style.opacity = "" + a), this.Q && (this.Q.opacity = "" + a)
        }, b.setRounded = function(a) {
            this.rounded = a, this.X()
        }, b.X = function() {
            var a = "",
                b = this.rounded;
            if (b) {
                var c = this.width,
                    d = this.height,
                    e = 0,
                    f = this.stroke;
                if (f) {
                    var g = f.weight;
                    jbeeb.Utils.isNumber(g) && (e = 2 * g)
                }
                var h = .5 * ((d > c ? c : d) + e);
                jbeeb.Utils.isNumber(b) ? a = h * b + "px" : b && "object" == typeof b && (a += (h * b.tl || 0) + "px " + (h * b.tr || 0) + "px " + (h * b.br || 0) + "px " + (h * b.bl || 0) + "px")
            }
            var i = this.style;
            i.borderRadius = i.MozBorderRadius = i.WebkitBorderRadius = i.OBorderRadius = i.msBorderRadius = a, this.Q && (this.Q.borderRadius = a)
        }, b.onAdded = function() {
            this.autoCenter && this.center(this.autoCenter), this.dispatchEvent("added", this)
        }, b.toFront = function() {
            this.parent && this.parent.toFront(this)
        }, b.toBack = function() {
            this.parent && this.parent.toBack(this)
        }, b.ac = function() {
            var a = this.style,
                b = this.ad(),
                c = this.ae(),
                d = this.af(),
                e = this.ag(),
                f = "none";
            if (b == [] && c == [] && d == [] && e == []);
            else {
                for (var g = c.concat(d, e, b), h = g.length, i = [], j = [], k = 0, l = 0; h > l; l++) 0 == k ? 1 == g[l] && j.push("inset") : 4 > k ? j.push(g[l] + "px") : (j.push(jbeeb.Utils.makeColor(g[l], g[l + 1])), i.push(j.join(" ")), j = [], ++l, k = -1), k++;
                i.length > 0 && (f = i.join(","))
            }
            a.boxShadow = a.MozBoxShadow = a.WebkitBoxShadow = a.OBoxShadow = a.msBoxShadow = f, this.Q && (this.Q.boxShadow = f)
        }, b.ad = function() {
            var a = this.shadow;
            return a ? [0, a.x || 0, a.y || 0, a.s, a.c || "#000000", a.a || .4] : []
        }, b.setShadow = function(a) {
            this.shadow = a, this.ac()
        }, b.ag = function() {
            var a = this.inset;
            return a ? [1, a.x || 0, a.y || 0, a.s, a.c || "#000000", a.a || .4] : []
        }, b.setInset = function(a) {
            this.inset = a, this.ac()
        }, b.ae = function() {
            var a = this.bevel;
            return a ? [1, -a.x, -a.y, a.s1, a.c1 || "#FFFFFF", a.a1, 1, a.x, a.y, a.s2, a.c2 || "#000000", a.a2] : []
        }, b.setBevel = function(a) {
            a && (jbeeb.Utils.isNumber(a) ? a = {
                x: -a,
                y: -a,
                s1: 0,
                s2: 0,
                c1: "#FFFFFF",
                c2: "#000000",
                a1: 1,
                a2: 1
            } : (a.c1 = a.c1 || "#FFFFFF", a.c2 = a.c2 || "#000000")), this.bevel = a, this.ac()
        }, b.af = function() {
            if (this.outline) {
                var a = this.outline;
                return [0, -a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha || 1, 0, a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha || 1, 0, -a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha || 1, 0, a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha || 1]
            }
            return []
        }, b.setOutline = function(a) {
            this.outline = a, this.ac()
        }, b.setMouseEnabled = function(a) {
            var b = this.style,
                c = 0 === a || a === !1 ? "none" : "auto";
            b.pointerEvents = c, this.Q && (this.Q.pointerEvents = c)
        }, b.ah = null, b.MELbubble = !1, b.addMEL = function(a, b, c, d, e) {
            this.MELbubble = d, this.ah || (this.ah = new jbeeb.MouseEventListener(this)), ("mouseOver" == a || "mouseOut" == a || "mouseMove" == a) && this.ah.enableMouseOver(1), this.addEventListener(a, b, c, e)
        }, b.removeMEL = function(a, b) {
            this.removeEventListener(a, b), "mouseOver" == a && this.ah.enableMouseOver(0)
        }, b.setFloat = function(a) {
            this.style.position = "relative", this.style.left = "", this.style.top = "", this.style.cssFloat = a, this.style.display = "inline-block", this.Q && (this.Q.position = "relative", this.Q.left = null, this.Q.top = null, this.Q.cssFloat = a, this.Q.display = "inline-block")
        }, b.destroy = function() {
            this.removeAllEventListeners(), this.ah && (this.ah.destroy(), this.ah = null), this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), this.element = null), this.parent && (this.parent.removeChild(this), this.parent = null), this.temp = null, this.stroke = null, this.fill = null, this.gradient = null, this.bevel = null, this.outline = null, this.shadow = null, this.inset = null, this.image = null, this.element = null, this.Q = null
        }, b.getCSS = function() {
            return this.Q
        }, b.toString = function() {
            return "[Box (name=" + this.name + ")]"
        }, b.type = "Box", jbeeb.Box = a
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function(a) {
                this.init(a)
            },
            b = a.prototype = new jbeeb.Box(null);
        b.textFit = null, b.text = "", b.ai = "", b.textSize = null, b.textColor = null, b.shadowText = null, b.bevelText = null, b.outlineText = null, b.insetText = null, b.font = null, b.align = null, b.textScale = null, b.selectable = null, b.bold = null, b.padding = null, b.editable = null, b.aj = null, b.multiline = null, b.baselineShift = null, b.ak = null, b.al = null, b.am = !1, b.an = b.init, b.init = function(a) {
            if (a) {
                if (a.editable) {
                    var b;
                    b = a.multiline ? document.createElement("textarea") : document.createElement("input"), this.aj = 1, b.id = jbeeb.getUID(), b.style.position = "absolute", b.style.overflow = "visible", this.Q && (this.Q.position = "absolute", this.Q.overflow = "visible"), a.multiline || (b.type = "text"), a.element = b
                }
                this.an(a), a.element = null;
                var c = this.style;
                if (c.textDecoration = "none", c.zoom = 1, c.size = a.h, this.text = a.text || "", this.Q) {
                    var d = this.Q;
                    d.fontSmooth = "always", d.WebkitFontSmoothing = "antialiased", d.textDecoration = "none", d.zoom = 1, d.size = a.h
                }
                this.applySkin(a, !0)
            }
        }, b.ao = b.applySkin, b.applySkin = function(a, b) {
            if (this.am = !0, a.editable) {
                var c = null;
                a.fill && (c = "object" == typeof a.fill ? a.fill.color : a.fill), a.stroke = a.stroke || c || {
                    weight: 1,
                    color: "#000000",
                    alpha: 1
                }
            }
            this.ao(a, b);
            this.style;
            if (this.textFit = a.textFit || null, this.font = a.font || "Arial, Helvetica, sans-serif", this.align = a.align || "left", this.textScale = a.textScale || 1, this.bold = a.bold || 0, this.selectable = a.selectable || 0, this.editable = a.editable || 0, this.multiline = a.multiline || 0, this.baselineShift = a.baselineShift || 0, b || (this.text = a.text || ""), this.ai = "", this.textColor = {}, a.textSize && (this.textSize = a.textSize), 1 == a.editable && this.setEditable(1), this.setMultiline(this.multiline, !0), this.setText(this.text), a.textColor) {
                var d = a.textColor,
                    e = {};
                "string" == typeof d ? e = {
                    color: d,
                    alpha: 1
                } : (e = d, e.color || (e.color = null, e.alpha = null)), this.setTextColor(e.color || "#000000", e.alpha || 1)
            }
            a.shadowText && (this.shadowText = a.shadowText), a.insetText && (this.insetText = a.insetText), a.bevelText && (this.bevelText = a.bevelText), a.outlineText && (this.outlineText = a.outlineText), a.shadow && (this.shadow = a.shadow), a.inset && (this.insetText = a.inset), a.bevel && (this.bevel = a.bevel), a.outline && (this.outline = a.outline), a.padding && this.setPadding(a.padding), a.alphaNumeric && (this.alphaNumeric = 1), a.numeric && (this.numeric = 1), this.setBaselineShift(this.baselineShift), this.am = !1, this.ap(), this.aq()
        }, b.setMultiline = function(a, b) {
            this.multiline = a;
            var c, d = this.style;
            a ? (this.textSize || (this.textSize = 12), c = "normal") : c = "nowrap", d.whiteSpace = c, this.Q && (this.Q.whiteSpace = c), this.ar()
        }, b.aj = 0, b.setEditable = function(a) {
            1 === a ? (this.amSM || this.setCursor("text"), this.al ? this.al.removeAllEventListeners() : this.al = new jbeeb.Keyboard(this.element), this.al.addEventListener("keydown", this.keyHandler, this),
                this.al.addEventListener("keyup", this.keyHandler, this), this.setOverflow("hidden"), jbeeb.Utils.bindEvent(this.element, "focus", this.setFocus.bind(this)), jbeeb.Utils.bindEvent(this.element, "blur", this.as.bind(this)), this.addMEL("mouseUp", this.setFocus, this)) : (this.amSM || this.setCursor("default"), this.al && this.al.removeAllEventListeners(), jbeeb.Utils.unbindEvent(this.element, "focus", this.setFocus.bind(this))), this.editable = a
        }, b.numeric = null, b.alphaNumeric = null, b.keyHandler = function(a, b, c) {
            var d = !0;
            this.alphaNumeric ? d = this.al.alphaNumeric(b) : this.numeric && (d = this.al.numeric(b)), 0 == this.multiline && (108 == b || 13 == b) && (d = !1, "keyup" == c && this.dispatchEvent("enter", this, this.text)), 9 == b && (d = !1, "keyup" == c && this.dispatchEvent("tab", this, this.text)), d ? (this.aj && !this.multiline ? this.text = this.element.value : this.text = this.at.text, "keyup" == c && this.dispatchEvent("change", this, this.text)) : this.al.block(a)
        }, b.as = function() {
            this.dispatchEvent("change", this, this.text)
        }, b.setPadding = function(a) {
            this.padding = a;
            var b;
            b = this.at ? this.at.style : this.style;
            var c = "",
                d = "",
                e = "",
                f = "";
            if (this.multiline ? (c = a + "px", d = a + "px", e = a + "px", f = a + "px") : "left" == this.align ? a && (c = a + "px") : "right" == this.align && a && (d = a + "px"), b.paddingLeft = c, b.paddingRight = d, b.paddingTop = e, b.paddingBottom = f, this.Q) {
                var g = this.Q;
                g.paddingLeft = c, g.paddingRight = d, g.paddingTop = e, g.paddingBottom = f
            }
        }, b.au = function() {
            var a = this.font,
                b = this.textColor || {},
                c = jbeeb.Utils.makeColor(b.color, b.alpha),
                d = this.bold ? "bold" : "normal",
                e = this.style;
            if (e.fontFamily = a, e.color = c, e.textAlign = this.align, e.fontWeight = d, this.Q) {
                var f = this.Q;
                f.fontFamily = a, f.color = c, f.textAlign = this.align, f.fontWeight = d
            }
        }, b.setFont = function(a) {
            this.font = a, this.style.fontFamily = a, this.at && (this.at.style.fontFamily = this.font), this.Q && (this.Q.fontFamily = a), this.ap()
        }, b.setAlign = function(a) {
            this.align = a, this.style.textAlign = a, "center" == a && this.setPadding(0), this.Q && (this.Q.textAlign = a)
        }, b.setBold = function(a) {
            this.bold = a ? "bold" : "", this.style.fontWeight = this.bold, this.Q && (this.Q.fontWeight = this.bold), this.ap()
        }, b.setBaselineShift = function(a) {
            this.baselineShift = a, a ? a > 1 ? a = 1 : -1 > a && (a = -1) : a = 0, a = -1 * a, this.ak = 1 + a, this.ap()
        }, b.measureText = function(a) {
            if (this.text || a) {
                var b = document.createElement("div");
                document.body.appendChild(b);
                var c = b.style;
                c.fontSize = this.height * this.textScale + "px", c.fontFamily = this.font, c.fontWeight = this.bold ? "bold" : "normal", c.position = "absolute", c.left = -1e3, c.top = -1e3, b.innerHTML = a || this.text;
                var d = b.clientWidth,
                    e = b.clientHeight,
                    f = {
                        w: d,
                        h: e
                    };
                return document.body.removeChild(b), b = null, f
            }
            return 0
        }, b.setTextColor = function(a, b) {
            this.textColor || (this.textColor = {}), this.textColor.color = a, this.textColor.alpha = b;
            var c = jbeeb.Utils.makeColor(a, b);
            this.style.color = c, this.Q && (this.Q.color = c)
        }, b.setText = function(a) {
            if (this.element) {
                if (a = "" != a && a ? String(a) : "", this.text = a, this.aj && !this.multiline) this.element.value = a;
                else {
                    if (!this.at) {
                        var b = document.createElement("span");
                        b.style.fontFamily = this.font, this.element.appendChild(b), this.at = b
                    }
                    this.at.innerHTML = a
                }
                this.ai != a && this.ap(), this.ai = a
            }
        }, b.selectAll = function() {
            this.aj && (jbeeb.focus = this, this.element.focus(), this.element.select())
        }, b.av = b.setWidth, b.setWidth = function(a) {
            a != this.width && (this.av(a), this.ar())
        }, b.aw = b.setHeight, b.setHeight = function(a) {
            a != this.height && (this.aw(a), this.ar())
        }, b.ax = b.setSize, b.setSize = function(a, b) {
            (a != this.width || b != this.height) && (this.ax(a, b), this.ar())
        }, b.setTextScale = function(a) {
            this.textScale = a || 1, this.ar()
        }, b.setTextSize = function(a) {
            this.textSize = a, this.ar()
        }, b.setTextFit = function(a) {
            this.textFit = a, this.ar()
        }, b.ay = b.onAdded, b.onAdded = function() {
            this.ay(), this.ap()
        }, b.setFocus = function(a) {
            jbeeb.focus = this, this.element.focus()
        }, b.ar = function() {
            if ("" != this.text) {
                var a = null,
                    b = null,
                    c = null;
                if (this.textSize) a = this.textSize, b = "1em", c = a + "px";
                else {
                    var d = this.width,
                        e = this.height;
                    if (d > 0 && e > 0)
                        if ("wh" == this.textFit) {
                            var f = e > d ? d : e;
                            a = this.textScale > 0 ? f * this.textScale : f
                        } else if ("w" == this.textFit) {
                        var g = this.measureText(),
                            h = this.width / g.w / 2;
                        jbeeb.Utils.isNumber(h) && h > 0 && (this.textScale = h, a = e * h)
                    } else a = e * this.textScale;
                    else a = 0
                }
                a && (b = this.height * this.ak / a + "em", c = a + "px");
                var i = this.style;
                i.lineHeight = b, i.fontSize = c, this.Q && (this.Q.lineHeight = b, this.Q.fontSize = c)
            }
        }, b.getTextSize = function() {
            return this.style.fontSize || null
        }, b.ap = function() {
            this.am || (this.ar(), this.au())
        }, b.aq = function() {
            var a = this.az(),
                b = this.aA(),
                c = this.aB(),
                d = this.aC(),
                e = "none";
            if (a == [] && b == [] && c == [] && d == []);
            else {
                for (var f = b.concat(c, a, d), g = f.length, h = [], i = [], j = 0, k = 0; g > k; k++) 0 == j ? 1 == f[k] && i.push("inset") : 4 > j ? i.push(f[k] + "px") : (i.push(jbeeb.Utils.makeColor(f[k], f[k + 1])), h.push(i.join(" ")), i = [], ++k, j = -1), j++;
                h.length > 0 && (e = h.join(","))
            }
            var l = this.style;
            l.textShadow = l.MozTextShadow = l.WebkitTextShadow = l.OTextShadow = l.msTextShadow = e, this.Q && (this.Q.textShadow = e)
        }, b.az = function() {
            var a = this.shadowText;
            return a ? [0, a.x, a.y, a.s, a.c, a.a] : []
        }, b.setShadowText = function(a) {
            this.shadowText = a, this.aq()
        }, b.aC = function() {
            var a = this.insetText;
            return a ? [1, a.x, a.y, a.s, a.c, a.a] : []
        }, b.setInsetText = function(a) {
            this.insetText = a, this.aq()
        }, b.aA = function() {
            if (this.bevelText) {
                var a = this.bevelText,
                    b = [];
                return a.c1 && a.a1 > 0 && (b = [0, -a.x, -a.y, a.s1, a.c1 || "#000000", a.a1]), a.c2 && a.a2 > 0 && (b = b.concat([0, a.x, a.y, a.s2, a.c2 || "#FFFFFF", a.a2])), b
            }
            return []
        }, b.setBevelText = function(a) {
            this.bevelText = a, this.aq()
        }, b.aB = function() {
            if (this.outlineText) {
                var a = this.outlineText;
                return [0, -a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, -a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha]
            }
            return []
        }, b.setOutlineText = function(a) {
            this.outlineText = a, this.aq()
        }, b.toString = function() {
            return "[TextBox (name=" + this.name + ")]"
        }, b.type = "TextBox", jbeeb.TextBox = a
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function(a) {
                this.init(a)
            },
            b = a.prototype = new jbeeb.Box(null);
        b.aD = [], b.addChild = function(a) {
            if (null == a) return a;
            var b = arguments.length;
            if (b > 0)
                for (var c = 0; b > c; c++) {
                    var d = arguments[c];
                    d.parent && d.parent.removeChild(d), d.parent = this, d.stage = 1 == this.amStage ? this : this.stage, d.setZ(this.aD.length), this.element.appendChild(d.element), d.onAdded && d.onAdded.call(d), this.aD.push(d)
                }
        }, b.removeChild = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = !0, d = b; d--;) c = c && this.removeChild(arguments[d]);
                return c
            }
            return this.removeChildAt(this.aD.indexOf(a))
        }, b.removeChildAt = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
                c.sort(function(a, b) {
                    return b - a
                });
                for (var e = !0, d = 0; b > d; d++) e = e && this.removeChildAt(c[d]);
                return e
            }
            if (0 > a || a > this.aD.length - 1) return !1;
            var f = this.aD[a];
            return f && (f.element && f.element.parentNode && f.element.parentNode.removeChild(f.element), f.parent = null), this.aD.splice(a, 1), this.aE(), !0
        }, b.removeAllChildren = function() {
            for (var a = this.aD; a.length;) this.removeChildAt(0)
        }, b.aE = function() {
            for (var a = this.aD.length, b = 0; a > b; b++) {
                var c = this.aD[b];
                c && c.setZ(b + 1)
            }
        }, b.toFront = function(a) {
            if (a) {
                for (var b = this.aD.length, c = 0, d = b; d--;)
                    if (this.aD[d] == a) {
                        c = d;
                        break
                    }
                jbeeb.Utils.arrayMove(this.aD, c, b - 1), this.aE()
            } else this.parent && this.parent.toFront(this)
        }, b.toBack = function(a) {
            if (a) {
                for (var b = this.aD.length, c = 0, d = b; d--;)
                    if (this.aD[d] == a) {
                        c = d;
                        break
                    }
                jbeeb.Utils.arrayMove(this.aD, c, 0), this.aE()
            } else this.parent && this.parent.toBack(this)
        }, b.aF = b.init, b.init = function(a) {
            this.aF(a), a && (this.stage = 1 == this.amStage ? this : this.stage, this.aD = [])
        }, b.aG = b.stretch, b.stretch = function(a, b) {
            var c = a,
                d = b,
                e = this.flex;
            e && (e.match(/w/) || (c = 1), e.match(/h/) || (d = 1));
            for (var f = this.aD.length; f--;) {
                var g = this.aD[f];
                g && g.stretch(c, d)
            }
            this.aG(a, b)
        }, b.aH = b.setFlex, b.setFlex = function(a) {
            for (var b = this.aD.length; b--;) this.aD[b].setFlex(a);
            this.aH(a)
        }, b.aI = b.destroy, b.destroy = function() {
            if (this.aD)
                for (var a = this.aD.length; a--;) this.aD[a] && (this.aD[a].destroy(), this.removeChild(this.aD[a]), this.aD[a] = null);
            this.aD = null, this.aI()
        }, b.destroyChildren = function() {
            if (this.aD)
                for (var a = this.aD.length; a--;) this.aD[a] && (this.aD[a].destroy(), this.removeChild(this.aD[a]), this.aD[a] = null);
            this.aD.length = 0, this.aD = null, this.aD = []
        }, b.getChildren = function() {
            return this.aD
        }, b.toString = function() {
            return "[Container (name=" + this.name + ")]"
        }, b.type = "Container", jbeeb.Container = a
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        "use strict";
        var a = function(a) {
                return this.aJ(a), this
            },
            b = a.prototype = new jbeeb.Container;
        b.amReady = null, b.M = null, b.aJ = function(a) {
            if (a)
                if (this.amReady = 0, a.onReady && (this.M = [], this.M.push(a.onReady)), this.id = jbeeb.getUID(), a.stage) this.amStage = 0, this.aK(a), jbeeb.register(this);
                else {
                    this.amStage = 1, this.parent = this, this.stage = this;
                    var b = a.target,
                        c = null,
                        d = 0;
                    b && (c = "string" == typeof b ? document.getElementById(b) : b, c && 1 === c.nodeType ? (this.element = document.createElement("div"), this.element.id = this.id, c.appendChild(this.element)) : d = 1), (!b || d) && (document.write('<div id="' + this.id + '"></div>'), this.element = document.getElementById(this.id)), a.element = this.element, this.aK(a), this.style = this.element.style, this.style.position = "relative", this.style.display = a.inline === !0 || "true" == a.inline || 1 === a.inline ? "inline-block" : "block", this.style.verticalAlign = "top", this.style.clear = "both", this.style.zoom = 1;
                    var e = this.width || a.w || 1,
                        f = this.height || a.h || 1;
                    this.setSize(e, f), this.setOverflow(a.overflow || "visible"), this.setCursor("default"), jbeeb.register(this)
                }
        }, b.aK = b.init, b.init = function() {
            var a = jbeeb.Utils.getXYWH(this.element);
            this.x = a.x, this.y = a.y, this.width = a.width, this.height = a.height;
            setTimeout(this.aL.bind(this), 50)
        }, b.aL = function() {
            if (this.amReady = 1, this.M)
                for (var a = 0; a < this.M.length; a++) this.M.pop()()
        }, b.onReady = function(a) {
            this.amReady ? a() : (this.M || (this.M = []), this.M.push(a))
        }, b.toString = function() {
            return "[Stage (name=" + this.name + ")]"
        }, b.type = "Stage", jbeeb.Stage = a
    }(), this.jbeeb = this.jbeeb || {},
    function() {
        var a = function(b) {
            return b = b || {}, this.aM = b.onComplete, this.aN = b.timezone, this.aO = b.digits || 2, this.aP = b.truncate || 0, a.aQ[b.rangeHi] ? this.aR = a.aQ[b.rangeHi] : this.aR = a.aS, a.aQ[b.rangeLo] ? this.aT = a.aQ[b.rangeLo] : this.aT = a.aU, b.end && this.aV(b.end), this
        };
        a.aW = 6e4, a.aX = 36e5, a.aY = 864e5, a.aZ = 0, a.aU = 1, a.a_ = 2, a.a3 = 3, a.a4 = 4, a.a5 = 5, a.aS = 6, a.aQ = {
            ms: a.aZ,
            second: a.aU,
            minute: a.a_,
            hour: a.a3,
            day: a.a4,
            month: a.a5,
            year: a.aS
        };
        var b = a.prototype;
        b.a6 = !1, b.a7 = !1, b.aM = null, b.a8 = null, b.aN = 0, b.aO = 0, b.aR = a.aS, b.aT = a.aZ, b.aP = 0, b.aV = function(b, c) {
            var d, e = new Date,
                f = 0;
            if (b instanceof Date) d = new Date(b.getTime());
            else if ("object" == typeof b) {
                var g = b.year ? parseInt(b.year) : e.getFullYear(),
                    h = b.month ? parseInt(b.month) - 1 : 0,
                    i = b.day ? parseInt(b.day) : 0,
                    j = b.hour ? parseInt(b.hour) : 0,
                    k = b.minute ? parseInt(b.minute) : 0,
                    l = b.second ? parseInt(b.second) : 0,
                    m = (b.ampm ? b.ampm : "am").toLowerCase();
                12 > j && /p/.test(m) && (j += 12), d = new Date(Date.UTC(g, h, i, j, k, l))
            } else f = 1, d = new Date(e.getTime() + 1e3 * (parseInt(b) + 1));
            if (!f && !c) {
                var n = 0,
                    o = 0;
                if (n = -(new Date).getTimezoneOffset() * a.aW, "undefined" != typeof this.aN) {
                    var p = this.aN,
                        q = parseInt(p);
                    o = p == q ? p * a.aX : n
                } else o = n;
                var r = Math.abs(o - n);
                o > n && (r *= -1);
                var s = d.getTime() + r - n;
                d = new Date(s)
            }
            this.a8 = d, this.a6 = !1, this.a7 = !1
        }, b.update = function() {
            return this.a9(new Date)
        }, b.diff = function(a, b) {
            return b && this.aV(b, !0), this.a9(a)
        }, b.a9 = function(b) {
            var c = 0,
                d = 0,
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0,
                j = this.a8,
                k = j.getTime() - b.getTime(),
                l = Math.floor,
                m = !1;
            if (k > 0) {
                var n = 3600,
                    o = a.aX,
                    p = (a.aY, this.aT),
                    q = this.aR;
                this.aP && (p = -1, q = 10);
                var r = a.aZ,
                    s = a.aU,
                    t = a.a_,
                    u = a.a3,
                    v = a.a4,
                    w = a.a5,
                    x = (a.aS, k / 1e3),
                    y = x / 60,
                    z = y / 60,
                    A = z / 24;
                v > p && (q >= r && (c = l(q == r ? k : k % 1e3)), q >= s && (d = l(q == s ? x : x % 60)), q >= t && (e = l(q == t ? y : y % 60)), q >= u && (f = l(q == u ? z : z % 24)));
                var B = b.getUTCFullYear(),
                    C = b.getUTCMonth(),
                    D = b.getUTCDate(),
                    E = j.getUTCFullYear(),
                    F = j.getUTCMonth(),
                    G = j.getUTCDate(),
                    H = D,
                    I = G,
                    J = 0;
                if (q >= v)
                    if (q == v) g = l(A);
                    else {
                        var K = b.getUTCHours(),
                            L = b.getUTCMinutes(),
                            M = b.getUTCSeconds(),
                            N = j.getUTCHours(),
                            O = j.getUTCMinutes(),
                            P = j.getUTCSeconds(),
                            Q = F == C ? 0 : -1,
                            R = F + Q;
                        0 > R && (R += 12);
                        var S = a.getMonthDays(R, E);
                        S = D > S ? a.getMonthDays(R - 1, E) : S, S = G > S ? G : S;
                        var T = 0;
                        G > D ? T = G - D - 1 : D > G && (T = D - G - 1);
                        var U = a.aY - 1e3 * (M + 60 * L + K * n),
                            V = 1e3 * (P + 60 * O + N * n);
                        J = (U + V) / o, 24 > J && D++, D += T;
                        var W = (S - D + G + T) % S;
                        g = l(W)
                    }
                if (q >= w) {
                    var X = 0,
                        Y = 12 * (E - B);
                    if (0 > Y || B == E && C == F) Y = 0;
                    else {
                        C++, F++;
                        var T = 0;
                        F == C ? I >= H && T-- : F > C ? T = F - C - 1 : C > F && (T = 12 - C + F, X--), 24 > J && H++, C >= F && H > I ? T-- : F >= C && I >= H && T++, Y += T, 0 > Y && (Y = 0), Y > 11 && (X += l(Y / 12), Y %= 12), q == w && (Y += 12 * X, X = 0)
                    }
                    h = Y, i = X
                }
            } else m = !0;
            var Z = {
                ms: c,
                second: d,
                minute: e,
                hour: f,
                day: g,
                month: h,
                year: i
            };
            return a.pad(Z, this.aO), m && !this.a7 && this.aM && (this.a6 = !0, this.a7 = !0, this.aM(this.a8)), Z
        }, a.a0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], a.getMonthDays = function(b, c) {
            return 1 == b ? c % 400 == 0 || c % 4 == 0 && c % 100 != 0 ? 29 : 28 : a.a0[b]
        }, a.pad = function(a, b) {
            if (b)
                for (var c in a) {
                    for (var d = String(a[c]), e = "ms" == c ? 3 : b; d.length < e;) d = "0" + d;
                    a[c] = d
                }
        }, Object.defineProperty(b, "rangeHi", {
            get: function() {
                return this.aR
            },
            set: function(b) {
                a.aQ[b] ? this.aR = a.aQ[b] : this.aR = a.aS
            }
        }), Object.defineProperty(b, "rangeLo", {
            get: function() {
                return this.aT
            },
            set: function(b) {
                a.aQ[b] ? this.aT = a.aQ[b] : this.aT = a.aU
            }
        }), jbeeb.TimeDiff = a
    }();
var EXTRACT_START = 1,
    CountdownImageFolder = "images/",
    CountdownImageBasename = "flipper",
    CountdownImageExt = "png",
    CountdownImagePhysicalWidth = 41,
    CountdownImagePhysicalHeight = 60,
    CountdownWidth = 400,
    CountdownHeight = 60,
    CountdownLabels = {
        ms: "MS",
        second: "SECONDS",
        minute: "MINUTES",
        hour: "HOURS",
        day: "DAYS",
        month: "MONTHS",
        year: "YEARS"
    },
    CountdownInterval = 76,
    EXTRACT_END = 1;
! function() {
    var a = function(a) {
            this.imageFolder = CountdownImageFolder, this.imageBasename = CountdownImageBasename, this.imageExt = CountdownImageExt, this.imagePhysicalWidth = CountdownImagePhysicalWidth, this.imagePhysicalHeight = CountdownImagePhysicalHeight, this.totalFlipDigits = 2, this.ba = a || {};
            var b, c, d, e;
            if (a.bkgd) {
                var f = a.bkgd;
                f.color && (b = f.color), f.stroke && f.strokeColor && (c = {
                    weight: f.stroke || 1,
                    color: f.strokeColor,
                    alpha: f.strokeAlpha
                }), f.shadow && (d = f.shadow), f.rounded && (e = f.rounded)
            }
            this.bb = new jbeeb.Stage({
                target: a.target,
                inline: a.inline || !1,
                w: a.w || a.width || CountdownWidth,
                h: a.h || a.height || CountdownHeight,
                rounded: e || null,
                fill: b || null,
                stroke: c || null,
                shadow: d || null
            }), jbeeb.register(this)
        },
        b = a.prototype;
    b.ba = null, b.bb = null, b.a6 = !1, b.aM = null, b.id = null, b.bc = !1, b.bd = null, b.totalFlipDigits = null, b.imageFolder = null, b.imageBasename = "flipper", b.imageExt = "png", b.be = null, b.bf = null, b.bg = "second", b.bh = !1, b.bi = null, b.bj = !1, b.bk = 0, b.bm = 0, b.bn = 0, b.bo = 0, b.bp = [], b.bq = {}, b.r = 0, b.bs = 0, b.bt = null, b.init = function() {
        this.id = jbeeb.getUID();
        var a = this.ba;
        this.a6 = !1, this.bc = !1, this.bd = a.style || "boring", this.width = a.w || a.width || CountdownWidth, this.height = a.h || a.height || CountdownHeight, this.aM = a.onComplete, this.bh = a.hideLabels, this.bj = a.hideLine, this.bi = a.labelText || CountdownLabels, this.r = a.interval || CountdownInterval, this.bs = 0, this.bt = {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            ms: 0
        };
        var b = "";
        if ("flip" == this.bd) {
            var c = "";
            "/" != this.imageFolder.substr(1) && "http" != this.imageFolder.substr(4) && (c = jbeeb.scriptPath, "" != c && "http" == c.substr(4) && "/" != c.substr(-1) && (c += "/")), "/" != this.imageFolder.substr(-1) && (this.imageFolder += "/"), b = c + this.imageFolder + this.imageBasename
        }
        this.bf = {
            ms: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            second: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            minute: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            hour: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            day: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            month: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            },
            year: {
                use: !1,
                prev: [null, null],
                ani: [null, null],
                aniCount: [null, null]
            }
        };
        var d = ["ms", "second", "minute", "hour", "day", "month", "year"],
            e = a.rangeLo ? a.rangeLo : "second",
            f = a.rangeHi ? a.rangeHi : "year";
        e = "ms" != e && "s" == e.substr(-1) ? e.substr(0, e.length - 1) : e, f = "ms" != f && "s" == f.substr(-1) ? f.substr(0, f.length - 1) : f;
        for (var g = e, h = f, i = 0; i < d.length; i++) {
            var j = d[i];
            j == e && (e = i), j == f && (f = i)
        }
        for (var i = 0; i < d.length; i++)
            if (i >= e && f >= i) {
                var k = d[i];
                this.bf[k].use = !0, this.bg = k
            }
        var l;
        l = 0 === a.padding ? 0 : a.padding ? a.padding : "flip" == this.bd ? 0 : .8, "flip" == this.bd && (l /= 2);
        var m = f - e + 1,
            n = this.height,
            o = this.width / m,
            p = this.bh ? 0 : .25 * o,
            q = .1 * o,
            r = o - q,
            s = n - p,
            t = r * l;
        "flip" == this.bd && (t = r * (l / this.totalFlipDigits));
        var u = r - t,
            v = this.height - 2 * p;
        this.bm = r / this.totalFlipDigits, this.bn = q;
        var w = 0;
        "flip" == this.bd && (v = this.height - p, w = .03 * n), this.bk = r, this.bm = u * this.totalFlipDigits, this.bn = q, this.bo = t / 2 / this.totalFlipDigits / 2;
        var x = {
            numbers: {
                font: "Arial, _sans",
                color: "#FFFFFF",
                weight: "normal",
                bkgd: "flip" == this.bd ? null : {
                    color: ["#000000", 1, 0, "#686868", 1, 50, "#000000", 1, 50, "#535050", 1, 100],
                    alpha: "v"
                },
                rounded: "flip" == this.bd ? null : .18,
                shadow: null
            },
            labels: {
                font: "Arial, _sans",
                color: "#303030",
                weight: "bold",
                textScale: 1,
                offset: 0
            }
        };
        if (a.numbers)
            for (var y in x.numbers) a.numbers[y] && (x.numbers[y] = a.numbers[y]);
        if (a.labels)
            for (var y in x.labels) a.labels[y] && (x.labels[y] = a.labels[y]);
        d.reverse(), this.be = {}, this.bp = [];
        for (var z = 0, i = 0; i < d.length; i++) {
            var A = d[i];
            if (this.bf[A].use) {
                this.be[A] = new jbeeb.Container({
                    x: z + q / 2,
                    y: 0,
                    w: r,
                    h: s,
                    rounded: x.numbers.rounded || null,
                    fill: jbeeb.Utils.clone(x.numbers.bkgd) || null,
                    shadow: x.numbers.shadow || null
                });
                var B = this.be[A];
                if (B.store = {
                        name: A
                    }, this.bq[A] = r, "flip" == this.bd) {
                    var C = (u - 2 * w - 2 * t) / this.totalFlipDigits,
                        D = this.imagePhysicalWidth * (C / this.imagePhysicalWidth),
                        E = this.imagePhysicalHeight * (v / this.imagePhysicalHeight);
                    B.time = new jbeeb.Container({
                        x: 0,
                        y: 0,
                        w: D * this.totalFlipDigits,
                        h: E
                    });
                    for (var F = [], G = 0; G < this.totalFlipDigits; G++) {
                        for (var H = new jbeeb.Container({
                                x: D * G + w * G,
                                y: 0,
                                w: D,
                                h: E
                            }), I = [], J = 0; 10 > J; J++) {
                            for (var K = new jbeeb.Container({
                                    x: 0,
                                    y: 0,
                                    w: D,
                                    h: E
                                }), L = [], M = 0; 3 > M; M++) {
                                var N = "" + J + M,
                                    O = new jbeeb.Box({
                                        x: 0,
                                        y: 0,
                                        w: D,
                                        h: E,
                                        image: {
                                            url: b + N + "." + this.imageExt,
                                            mode: "fit"
                                        }
                                    });
                                L[M] = O, K.addChild(O)
                            }
                            K.img = L, I[J] = K, H.addChild(K)
                        }
                        H.num = I, F[G] = H, B.time.addChild(H)
                    }
                    B.time.slot = F, B.addChild(B.time)
                } else if (B.time = new jbeeb.TextBox({
                        x: 0,
                        y: 0,
                        w: r,
                        h: s,
                        text: "00",
                        textScale: l,
                        font: x.numbers.font,
                        textColor: x.numbers.color,
                        align: "center"
                    }), B.addChild(B.time), !this.bj) {
                    var P = .03 * n;
                    B.line = new jbeeb.Box({
                        x: 0,
                        y: 0,
                        w: r,
                        h: P,
                        fill: "#000000"
                    }), B.addChild(B.line), B.line.center()
                }
                if (this.bb.addChild(B), !this.bh) {
                    var Q = this.bi[A],
                        R = n - .7 * p + x.labels.offset;
                    B.labels = new jbeeb.TextBox({
                        x: z,
                        y: R,
                        w: o,
                        h: .7 * p,
                        font: x.labels.font,
                        textScale: x.labels.textScale,
                        textColor: x.labels.color,
                        bold: 1,
                        align: "center",
                        text: Q
                    }), this.bb.addChild(B.labels)
                }
                this.bp.push(B), B.time.center(), a.numberMarginTop && B.time.setY(a.numberMarginTop), z += o
            }
        }
        var B = this.be;
        "flip" == this.bd ? (B.year && this.bu("year", "00"), B.month && this.bu("month", "00"), B.day && this.bu("day", "00"), B.hour && this.bu("hour", "00"), B.minute && this.bu("minute", "00"), B.second && this.bu("second", "00"), B.ms && this.bu("ms", "000")) : (B.year && B.year.time.setText("00"), B.month && B.month.time.setText("00"), B.day && B.day.time.setText("00"), B.hour && B.hour.time.setText("00"), B.minute && B.minute.time.setText("00"), B.second && B.second.time.setText("00"), B.ms && B.ms.time.setText("000"), this.bv());
        var S;
        S = a.time ? a.time : {
            year: a.year || a.years,
            month: a.month || a.months,
            day: a.day || a.days,
            hour: a.hour || a.hours,
            minute: a.minute || a.minutes,
            second: a.second || a.seconds,
            ms: a.second || a.ms,
            ampm: a.ampm || ""
        }, this.bw = new jbeeb.TimeDiff({
            end: S,
            rangeHi: h,
            rangeLo: g,
            timezone: a.timezone || 0,
            onComplete: this.bx.bind(this),
            truncate: a.truncate || 0
        }), this.bc = !0, jbeeb.ticker.addEventListener("tick", this.tick, this)
    }, b.tick = function() {
        this.bc === !0 && this.by()
    }, b.bx = function(a) {
        this.aM && this.aM(a)
    }, b.bz = function(a) {
        return a.toString().length * this.bm
    }, b.bv = function() {
        for (var a = !1, b = 0; b < this.bp.length; b++) {
            var c = this.bp[b],
                d = c.store.name,
                e = c.time.text,
                f = this.bz(e);
            f >= this.bk && f != this.bq[d] && (c.setWidth(f + this.bo), this.bq[d] = f + this.bo, a = !0)
        }
        if (a)
            for (var g = 0, b = 0; b < this.bp.length; b++) {
                var c = this.bp[b],
                    e = c.time.text,
                    f = this.bz(e);
                c.setX(g), c.time.setWidth(c.width), c.time.center(), c.labels && (c.labels.setX(g), c.labels.setWidth(c.width)), c.line && (c.line.setWidth(c.width), c.line.center()), g += c.width + this.bn
            }
    }, b.by = function() {
        this.bs += jbeeb.ticker.getInterval(), this.bs > this.r && (this.bt = this.bw.update(), this.bs = 0);
        var a = this.be,
            b = this.bt;
        "flip" == this.bd ? (a.year && this.bu("year", b.year), a.month && this.bu("month", b.month), a.day && this.bu("day", b.day), a.hour && this.bu("hour", b.hour), a.minute && this.bu("minute", b.minute), a.second && this.bu("second", b.second), a.ms && this.bu("ms", b.ms)) : (a.year && a.year.time.setText(b.year), a.month && a.month.time.setText(b.month), a.day && a.day.time.setText(b.day), a.hour && a.hour.time.setText(b.hour), a.minute && a.minute.time.setText(b.minute), a.second && a.second.time.setText(b.second), a.ms && a.ms.time.setText(b.ms), this.bv())
    }, b.bu = function(a, b) {
        for (var c = 0; c < this.totalFlipDigits; c++) {
            var d = this.be[a].time.slot[c],
                e = this.bf[a],
                f = String(b).substr(c, 1),
                g = d.num[f];
            if (g) {
                if (e.prev[c] != f) {
                    for (var h = 0; 10 > h; h++) d.num[h].hide();
                    g.show(), e.ani[c] = !0, e.aniCount[c] = 0
                }
                if (e.ani[c]) {
                    for (var h = 0; 3 > h; h++) g.img[h].hide();
                    this.a6 ? g.img[2].show() : (g.img[e.aniCount[c]].show(), e.aniCount[c]++, e.aniCount[c] > 2 && (e.ani[c] = !1))
                }
                e.prev[c] = f
            }
        }
    }, window.Countdown = a
}();
