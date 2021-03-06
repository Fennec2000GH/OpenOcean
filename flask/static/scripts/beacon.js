! function(e) {
    function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 0)
}([function(e, t, n) {
    "use strict";

    function i(e) {
        var t = "";
        if (t = window.location.origin ? window.location.origin : window.location.protocol + "://" + window.location.host, e && "string" == typeof e)
            if (0 === e.indexOf("/")) t += e;
            else try { var n = new URL(e); return n.protocol + "://" + n.host + n.pathname } catch (e) {} else {
                var i = window.location.pathname;
                i && i.length > 0 && (t += i)
            }
        return t
    }

    function r(e) { return Object.keys(e).forEach(function(t) { "number" == typeof e[t] && (e[t] = String(e[t])) }), e }

    function o(e) { if ("function" == typeof performance.getEntriesByType) { var t = performance.getEntriesByType("paint").filter(function(t) { return t.name === e })[0]; return t ? t.startTime : 0 } return 0 }

    function a() {
        var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (!e) return !1;
        var t = parseInt(e[2], 10),
            n = navigator.connection;
        return t >= 55 && !!n && "cellular" === n.type && n.downlinkMax <= .115
    }

    function c(e) { return null == e ? void 0 : Math.round(1e3 * e) / 1e3 }

    function s(e, t) {
        for (var n in e) {
            var i = e[n];
            void 0 === t || "number" != typeof i && "string" != typeof i || (t[n] = i)
        }
    }
    var u = this && this.__assign || function() { return u = Object.assign || function(e) { for (var t, n = 1, i = arguments.length; n < i; n++) { t = arguments[n]; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]) } return e }, u.apply(this, arguments) };
    t.__esModule = !0;
    var f = n(1),
        d = n(2),
        l = n(3),
        p = n(4);
    ! function() {
        function e() {
            var e = n.timing,
                t = "";
            try { t = "function" == typeof n.getEntriesByType ? new URL(n.getEntriesByType("navigation")[0].name).pathname : h ? new URL(h).pathname : window.location.pathname } catch (e) {}
            var r = { referrer: document.referrer || "", eventType: f.EventType.WebVitalsV2, lcp: { value: -1, path: void 0 }, cls: { value: -1, path: void 0 }, fid: { value: -1, path: void 0 }, si: g ? g.si : 0, versions: { js: "2021.5.3" }, pageloadId: m, location: i(), landingPath: t, startTime: n.timeOrigin || (e ? e.navigationStart : 0) };
            return g && g.version && (r.versions.fl = g.version), b && (r.lcp = b.lcp && void 0 !== b.lcp.value ? b.lcp : r.lcp, r.fid = b.fid && void 0 !== b.fid.value ? b.fid : r.fid, r.cls = b.cls && void 0 !== b.cls.value ? b.cls : r.cls), R && g && (r.siteToken = g.token), r
        }

        function t(e, t) {
            void 0 === t && (t = f.EventType.Load);
            var u = n.timing,
                d = n.memory,
                l = e || i(),
                p = document.referrer || "",
                v = y[2] || y[1] || y[0],
                h = { abTestId: g ? g.abTestId : "", memory: {}, timings: {}, resources: [], tempResources: [], referrer: R && B && T && v ? v.url : p, documentWriteIntervention: !1, errorCount: 0, eventType: t, firstPaint: 0, firstContentfulPaint: 0, largestContentfulPaint: -1, firstInputDelay: -1, cumulativeLayoutShift: -1, si: g ? g.si : 0, startTime: n.timeOrigin || (u ? u.navigationStart : 0), versions: { fl: g ? g.version : "", js: "2021.5.3", timings: 1 }, pageloadId: m, location: l };
            if (void 0 == w) {
                if ("function" == typeof n.getEntriesByType) {
                    var S = n.getEntriesByType("navigation");
                    S && Array.isArray(S) && S.length > 0 && (h.timingsV2 = {}, h.versions.timings = 2, delete h.timings, s(S[0], h.timingsV2))
                }
                1 === h.versions.timings && s(u, h.timings), s(d, h.memory)
            }
            if (h.documentWriteIntervention = a(), h.firstPaint = o("first-paint"), h.firstContentfulPaint = o("first-contentful-paint"), h.errorCount = window.__cfErrCount || 0, b && (h.largestContentfulPaint = b.lcp && void 0 !== b.lcp.value ? b.lcp.value : -1, h.firstInputDelay = b.fid && void 0 !== b.fid.value ? b.fid.value : -1, h.cumulativeLayoutShift = b.cls && void 0 !== b.cls.value ? b.cls.value : -1), R && g && (h.siteToken = g.token, T = !0), "function" == typeof n.getEntriesByType) {
                var E = n.getEntriesByType("resource"),
                    _ = 0,
                    L = 0;
                E.forEach(function(e) {
                    var t = { n: e.name, s: c(e.startTime), d: c(e.duration), i: e.initiatorType, p: e.nextHopProtocol, rs: c(e.redirectStart), re: c(e.redirectEnd), fs: c(e.fetchStart), ds: c(e.domainLookupStart), de: c(e.domainLookupEnd), cs: c(e.connectStart), ce: c(e.connectEnd), qs: c(e.requestStart), ps: c(e.responseStart), pe: c(e.responseEnd), ws: c(e.workerStart), ss: c(e.secureConnectionStart), ts: e.transferSize, ec: e.encodedBodySize, dc: e.decodedBodySize };
                    window.__cfBeaconCustomTag && (("object" != typeof window.__cfBeaconCustomTag || Array.isArray(window.__cfBeaconCustomTag)) && console.warn('Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }'), t.ct = r(window.__cfBeaconCustomTag)), h.tempResources && void 0 === h.tempResources[L] && (h.tempResources[L] = []);
                    var n = JSON.stringify(t).length;
                    _ + n < 62e3 && h.tempResources ? (_ += n, h.tempResources[L].push(t)) : (L++, _ = 0)
                })
            }
            return JSON.stringify(h).length >= 64e3 && (h.resources = []), R && 1 === h.eventType && (void 0 !== w && (delete h.timings, delete h.memory, delete h.errorCount, delete h.documentWriteIntervention), delete h.firstPaint, delete h.firstContentfulPaint, delete h.largestContentfulPaint, delete h.firstInputDelay, delete h.cumulativeLayoutShift), h
        }
        var n = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
            v = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[data-cf-beacon]") : void 0),
            m = p(),
            y = [],
            g = window.__cfBeacon ? window.__cfBeacon : {};
        if (!g || "single" !== g.load) {
            var w, h, S = !1,
                T = !1;
            document.addEventListener("visibilitychange", function() { R && B && 0 === y.filter(function(e) { return e.id === m }).length && k(), "hidden" === document.visibilityState && !S && T && (S = !0, A(B && R)) });
            var b = { lcp: void 0, cls: void 0, fid: void 0 },
                E = function(e) { var t = window.location.pathname; "CLS" === e.name ? b.cls = { value: e.value, path: t } : "FID" === e.name ? b.fid = { value: e.value, path: t } : "LCP" === e.name && (b.lcp = { value: e.value, path: t }) };
            if ("function" == typeof PerformanceObserver && (l.getLCP(E, !0), l.getFID(E), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && l.getCLS(E, !0)), v) {
                var _ = v.getAttribute("data-cf-beacon");
                if (_) try { g = u(u({}, g), JSON.parse(_)) } catch (e) {} else {
                    var L = v.getAttribute("src");
                    if (L && "function" == typeof URLSearchParams) {
                        var C = new URLSearchParams(L.replace(/^[^\?]+\??/, "")),
                            P = C.get("token");
                        P && (g.token = P);
                        var O = C.get("spa");
                        g.spa = null === O || "true" === O
                    }
                }
                g && "multi" !== g.load && (g.load = "single"), window.__cfBeacon = g
            }
            var R = !(!g || !g.token),
                B = g && (void 0 === g.spa || !0 === g.spa);
            if (n && g && (g.rayId || g.token)) {
                var I = R ? g.send && g.send.to ? g.send.to : void 0 === g.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null : null,
                    k = function(e) {
                        var n = function(e, t, n) { i.resources = e, 0 != t && (i.bypassTiming = !0), g && (1 === g.r && (i.resources = []), R && B && 0 === t && (y.push({ id: i.pageloadId, url: i.location }), y.length > 3 && y.shift()), d.sendObjectBeacon(n, i, function() {}, !1, I), void 0 !== g.forward && void 0 !== g.forward.url && d.sendObjectBeacon(n, i, function() {}, !1, g.forward.url)) },
                            i = t(e);
                        if (i && g) {
                            var r = "req_id=" + g.rayId,
                                o = i.tempResources;
                            if (delete i.tempResources, R && B && o && 0 === o.length && n([], 0, r), !o) return;
                            o.forEach(function(e, t) { n(e, t, r) })
                        }
                    },
                    A = function(n) {
                        var i = n ? e() : t(void 0, f.EventType.Additional);
                        n || (i.resources = [], delete i.tempResources), g && d.sendObjectBeacon("req_id=" + g.rayId, i, function() {}, !0, I)
                    },
                    j = function() {
                        T = !0;
                        var e = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
                        e ? e.then(k) : k()
                    };
                "complete" === window.document.readyState ? j() : window.addEventListener("load", function() { window.setTimeout(j) }), B && R && (h = i(), function(e) {
                    var t = e.pushState;
                    if (t) {
                        var r = function() { m = p(), "function" == typeof n.clearResourceTimings && n.clearResourceTimings() };
                        e.pushState = function(n, o, a) { return w = i(a), 0 === y.filter(function(e) { return e.id === m }).length && k(i()), r(), t.apply(e, [n, o, a]) }, window.addEventListener("popstate", function(e) { 0 === y.filter(function(e) { return e.id === m }).length && k(w), w = i(), r() })
                    }
                }(window.history))
            }
        }
    }()
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    ! function(e) { e[e.Load = 1] = "Load", e[e.Additional = 2] = "Additional", e[e.WebVitalsV2 = 3] = "WebVitalsV2" }(t.EventType || (t.EventType = {}))
}, function(e, t, n) {
    "use strict";

    function i(e, t, n, i, r) {
        void 0 === i && (i = !1), void 0 === r && (r = null);
        var o = r || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?" + e : "/cdn-cgi/beacon/performance?" + e),
            a = !0;
        if (navigator && "string" == typeof navigator.userAgent) try {
            var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
            c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
        } catch (e) {}
        if (navigator && "function" == typeof navigator.sendBeacon && a && i) {
            t.st = 1;
            var s = JSON.stringify(t),
                u = { type: "application/json" };
            navigator.sendBeacon(o, new Blob([s], u))
        } else {
            t.st = 2;
            var s = JSON.stringify(t),
                f = new XMLHttpRequest;
            n && (f.onreadystatechange = function() { 4 == this.readyState && 204 == this.status && n() }), f.open("POST", o, !0), f.setRequestHeader("content-type", "application/json"), f.send(s)
        }
    }
    t.__esModule = !0, t.sendObjectBeacon = i
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i, r, o, a, c = function(e, t) { return { name: e, value: void 0 === t ? -1 : t, delta: 0, entries: [], id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12) } },
        s = function(e, t) { try { if (PerformanceObserver.supportedEntryTypes.includes(e)) { var n = new PerformanceObserver(function(e) { return e.getEntries().map(t) }); return n.observe({ type: e, buffered: !0 }), n } } catch (e) {} },
        u = !1,
        f = function(e, t) { u || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", function() {}), u = !0), addEventListener("visibilitychange", function n(i) { "hidden" === document.visibilityState && (e(i), t && removeEventListener("visibilitychange", n, !0)) }, !0) },
        d = function(e) { addEventListener("pageshow", function(t) { t.persisted && e(t) }, !0) },
        l = "function" == typeof WeakSet ? new WeakSet : new Set,
        p = function(e, t, n) { var i; return function() { t.value >= 0 && (n || l.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t))) } },
        v = function(e, t) {
            var n, i = c("CLS", 0),
                r = function(e) { e.hadRecentInput || (i.value += e.value, i.entries.push(e), n()) },
                o = s("layout-shift", r);
            o && (n = p(e, i, t), f(function() { o.takeRecords().map(r), n() }), d(function() { i = c("CLS", 0), n = p(e, i, t) }))
        },
        m = -1,
        y = function() { return "hidden" === document.visibilityState ? 0 : 1 / 0 },
        g = function() {
            f(function(e) {
                var t = e.timeStamp;
                m = t
            }, !0)
        },
        w = function() { return m < 0 && (m = y(), g(), d(function() { setTimeout(function() { m = y(), g() }, 0) })), {get timeStamp() { return m } } },
        h = function(e, t) {
            var n, i = w(),
                r = c("FCP"),
                o = s("paint", function(e) { "first-contentful-paint" === e.name && (o && o.disconnect(), e.startTime < i.timeStamp && (r.value = e.startTime, r.entries.push(e), l.add(r), n())) });
            o && (n = p(e, r, t), d(function(i) { r = c("FCP"), n = p(e, r, t), requestAnimationFrame(function() { requestAnimationFrame(function() { r.value = performance.now() - i.timeStamp, l.add(r), n() }) }) }))
        },
        S = { passive: !0, capture: !0 },
        T = new Date,
        b = function(e, t) { i || (i = t, r = e, o = new Date, L(removeEventListener), E()) },
        E = function() {
            if (r >= 0 && r < o - T) {
                var e = { entryType: "first-input", name: i.type, target: i.target, cancelable: i.cancelable, startTime: i.timeStamp, processingStart: i.timeStamp + r };
                a.forEach(function(t) { t(e) }), a = []
            }
        },
        _ = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() { b(e, t), r() },
                        i = function() { r() },
                        r = function() { removeEventListener("pointerup", n, S), removeEventListener("pointercancel", i, S) };
                    addEventListener("pointerup", n, S), addEventListener("pointercancel", i, S)
                }(t, e) : b(t, e)
            }
        },
        L = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) { return e(t, _, S) })
        },
        C = function(e, t) {
            var n, o = w(),
                u = c("FID"),
                v = function(e) { e.startTime < o.timeStamp && (u.value = e.processingStart - e.startTime, u.entries.push(e), l.add(u), n()) },
                m = s("first-input", v);
            n = p(e, u, t), m && f(function() { m.takeRecords().map(v), m.disconnect() }, !0), m && d(function() {
                var o;
                u = c("FID"), n = p(e, u, t), a = [], r = -1, i = null, L(addEventListener), o = v, a.push(o), E()
            })
        },
        P = function(e, t) {
            var n, i = w(),
                r = c("LCP"),
                o = function(e) {
                    var t = e.startTime;
                    t < i.timeStamp && (r.value = t, r.entries.push(e)), n()
                },
                a = s("largest-contentful-paint", o);
            if (a) {
                n = p(e, r, t);
                var u = function() { l.has(r) || (a.takeRecords().map(o), a.disconnect(), l.add(r), n()) };
                ["keydown", "click"].forEach(function(e) { addEventListener(e, u, { once: !0, capture: !0 }) }), f(u, !0), d(function(i) { r = c("LCP"), n = p(e, r, t), requestAnimationFrame(function() { requestAnimationFrame(function() { r.value = performance.now() - i.timeStamp, l.add(r), n() }) }) })
            }
        },
        O = function(e) {
            var t, n = c("TTFB");
            t = function() {
                try {
                    var t = performance.getEntriesByType("navigation")[0] || function() {
                        var e = performance.timing,
                            t = { entryType: "navigation", startTime: 0 };
                        for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                        return t
                    }();
                    n.value = n.delta = t.responseStart, n.entries = [t], e(n)
                } catch (e) {}
            }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
        };
    t.getCLS = v, t.getFCP = h, t.getFID = C, t.getLCP = P, t.getTTFB = O
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        var i = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), e = e || {};
        var a = e.random || (e.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
            for (var c = 0; c < 16; ++c) t[i + c] = a[c];
        return t || o(a)
    }
    var r = n(5),
        o = n(6);
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (i) {
        var r = new Uint8Array(16);
        e.exports = function() { return i(r), r }
    } else {
        var o = new Array(16);
        e.exports = function() { for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255; return o }
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n = t || 0,
            i = r;
        return [i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]]].join("")
    }
    for (var r = [], o = 0; o < 256; ++o) r[o] = (o + 256).toString(16).substr(1);
    e.exports = i
}]);