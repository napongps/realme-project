!(function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = (n[i] = { exports: {}, id: i, loaded: !1 });
        return e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
    }
    var n = {};
    (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
    function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var r = n(1),
            a = i(r),
            s = n(2),
            o = i(s),
            l = n(3),
            u = i(l);
        n(4);
        (0, a.default)(function () {
            var e = {
                isMobile: window.innerWidth < 769,
                init: function () {},
                event: function () {},
                secVisible: function () {
                    var t = (0, a.default)(window).height();
                    a.default.each((0, a.default)(".sec").not(".sec-visible"), function (n, i) {
                        var r = (0, a.default)(i).data("ratio") ? (0, a.default)(i).data("ratio") : 0.5,
                            s = (0, a.default)(i)[0].getBoundingClientRect().top;
                        s < t * r &&
                            s > -t * r &&
                            ((0, a.default)(i).addClass("sec-visible"),
                            e.secLazyload(i),
                            (0, a.default)(i).hasClass("sec-specs-banner") &&
                                ((e.specSwiper = new o.default("#secSpecsSwiper", { speed: 300, simulateTouch: !1, allowTouchMove: !1, effect: "fade" })),
                                (0, a.default)(".sec-specs-color a").click(function () {
                                    var t = (0, a.default)(this),
                                        n = t.data("index");
                                    e.specSwiper.slideTo(n), (0, a.default)(".sec-specs-color a").removeClass("selected"), t.addClass("selected");
                                }))),
                            s < 1.5 * t && s > 1.5 * -t && (e.secLazyload(i), (0, a.default)(i).hasClass("sec-product") && e.secProductVideo(), (0, a.default)(i).hasClass("sec-detail-two") && e.detailSwipers());
                    });
                },
                secLazyload: function (e) {
                    (0, a.default)(e).hasClass("sec-lazyload") ||
                        ((0, a.default)(e).addClass("sec-lazyload"),
                        a.default.each((0, a.default)(e).find(".pic-lazyload"), function (e, t) {
                            (0, a.default)(t).replaceWith('<picture class="pic-lazyloaded">' + (0, a.default)(t).html() + "</picture>"), (0, u.default)();
                        }));
                },
                secProductVideo: function () {
                    if (!e.isMobile) {
                        var t = (0, a.default)(".sec-product"),
                            n = (0, a.default)(t).find(".sec-video").data("video");
                        (0, a.default)(t)
                            .find(".sec-video")
                            .html('<video src="' + n + '" autoplay="true" muted="muted" id="productVideo" loop></video>');
                        document.getElementById("productVideo").play();
                    }
                },
                secSwipers: function () {
                    (e.colorDesignSwiper = new o.default("#colorDesignSwiper", {
                        speed: 800,
                        effect: "fade",
                        fadeEffect: { crossFade: !0 },
                        autoplay: { disableOnInteraction: !1, delay: 2e3 },
                        on: {
                            slideChange: function () {
                                (0, a.default)(".sec-btn p").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
                            },
                        },
                    })),
                        (0, a.default)(".sec-btn p").click(function () {
                            var t = (0, a.default)(this).data("index");
                            e.colorDesignSwiper.slideTo(t), (0, a.default)(".sec-btn p").eq(t).addClass("active").siblings().removeClass("active");
                        });
                },
                secBanner: function (t) {
                    if (e.isMobile)
                        setTimeout(function () {
                            (0, a.default)(t).find(".sec-content").css({ transform: "translate(0, 0)", opacity: "1" });
                        }, 200);
                    else {
                        var n = (0, a.default)(t).find(".sec-video").data("video");
                        (0, a.default)(t)
                            .find(".sec-video")
                            .html('<video src="' + n + '" autoplay="true" muted="muted" id="bannerVideo"></video>');
                        var i = document.getElementById("bannerVideo");
                        i.play(),
                            i.addEventListener("timeupdate", function () {
                                var e = i.currentTime;
                                Number(e) > 6 && (0, a.default)(t).find(".sec-content").css({ transform: "translate(0, 0)", opacity: "1" });
                            });
                    }
                },
                uisVideoPlayer: function () {
                    if (!e.isMobile) {
                        var t = (0, a.default)(".sec-stabilization"),
                            n = (0, a.default)(t).find(".sec-video").data("video");
                        (0, a.default)(t)
                            .find(".sec-video")
                            .html('<video class="animate-opacity animate-200" src="' + n + '" autoplay="true" muted="muted" id="stabilizationVideo" loop></video>');
                        document.getElementById("stabilizationVideo").play();
                    }
                },
                detailSwipers: function () {
                    e.fourmodeSwiper = new o.default("#detail-swiper", {
                        speed: 800,
                        effect: "fade",
                        fadeEffect: { crossFade: !0 },
                        pagination: { el: ".swiper-pagination", clickable: !0 },
                        autoplay: { disableOnInteraction: !1, delay: 2e3 },
                        on: { slideChange: function () {} },
                    });
                },
            };
            (e.homeInit = function () {
                e.secVisible();
            }),
                (e.event = function () {
                    (0, a.default)(window).scroll(function () {
                        e.homeInit();
                    });
                }),
                (e.init = function () {
                    e.event(), e.homeInit();
                }),
                e.init(),
                (0, u.default)(),
                e.secSwipers();
        });
    },
    function (e, t, n) {
        var i, r;
        !(function (t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports
                ? (e.exports = t.document
                      ? n(t, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return n(e);
                        })
                : n(t);
        })("undefined" != typeof window ? window : this, function (n, a) {
            "use strict";
            function s(e, t, n) {
                n = n || Ce;
                var i,
                    r,
                    a = n.createElement("script");
                if (((a.text = e), t)) for (i in ke) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && a.setAttribute(i, r);
                n.head.appendChild(a).parentNode.removeChild(a);
            }
            function o(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ge[ye.call(e)] || "object" : typeof e;
            }
            function l(e) {
                var t = !!e && "length" in e && e.length,
                    n = o(e);
                return !Ee(e) && !Se(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
            }
            function u(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            function c(e, t, n) {
                return Ee(t)
                    ? Ae.grep(e, function (e, i) {
                          return !!t.call(e, i, e) !== n;
                      })
                    : t.nodeType
                    ? Ae.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? Ae.grep(e, function (e) {
                          return me.call(t, e) > -1 !== n;
                      })
                    : Ae.filter(t, e, n);
            }
            function d(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            function p(e) {
                var t = {};
                return (
                    Ae.each(e.match(Ne) || [], function (e, n) {
                        t[n] = !0;
                    }),
                    t
                );
            }
            function f(e) {
                return e;
            }
            function h(e) {
                throw e;
            }
            function v(e, t, n, i) {
                var r;
                try {
                    e && Ee((r = e.promise)) ? r.call(e).done(t).fail(n) : e && Ee((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            function m() {
                Ce.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), Ae.ready();
            }
            function g(e, t) {
                return t.toUpperCase();
            }
            function y(e) {
                return e.replace(Re, "ms-").replace(Fe, g);
            }
            function b() {
                this.expando = Ae.expando + b.uid++;
            }
            function x(e) {
                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Xe.test(e) ? JSON.parse(e) : e));
            }
            function w(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (((i = "data-" + t.replace(Ye, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                        try {
                            n = x(n);
                        } catch (e) {}
                        We.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            function T(e, t, n, i) {
                var r,
                    a,
                    s = 20,
                    o = i
                        ? function () {
                              return i.cur();
                          }
                        : function () {
                              return Ae.css(e, t, "");
                          },
                    l = o(),
                    u = (n && n[3]) || (Ae.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (Ae.cssNumber[t] || ("px" !== u && +l)) && Ue.exec(Ae.css(e, t));
                if (c && c[3] !== u) {
                    for (l /= 2, u = u || c[3], c = +l || 1; s--; ) Ae.style(e, t, c + u), (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (s = 0), (c /= a);
                    (c *= 2), Ae.style(e, t, c + u), (n = n || []);
                }
                return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
            }
            function E(e) {
                var t,
                    n = e.ownerDocument,
                    i = e.nodeName,
                    r = tt[i];
                return r || ((t = n.body.appendChild(n.createElement(i))), (r = Ae.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (tt[i] = r), r);
            }
            function S(e, t) {
                for (var n, i, r = [], a = 0, s = e.length; a < s; a++)
                    (i = e[a]),
                        i.style &&
                            ((n = i.style.display),
                            t ? ("none" === n && ((r[a] = Ge.get(i, "display") || null), r[a] || (i.style.display = "")), "" === i.style.display && et(i) && (r[a] = E(i))) : "none" !== n && ((r[a] = "none"), Ge.set(i, "display", n)));
                for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
                return e;
            }
            function C(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && u(e, t)) ? Ae.merge([e], n) : n;
            }
            function k(e, t) {
                for (var n = 0, i = e.length; n < i; n++) Ge.set(e[n], "globalEval", !t || Ge.get(t[n], "globalEval"));
            }
            function A(e, t, n, i, r) {
                for (var a, s, l, u, c, d, p = t.createDocumentFragment(), f = [], h = 0, v = e.length; h < v; h++)
                    if ((a = e[h]) || 0 === a)
                        if ("object" === o(a)) Ae.merge(f, a.nodeType ? [a] : a);
                        else if (st.test(a)) {
                            for (s = s || p.appendChild(t.createElement("div")), l = (it.exec(a) || ["", ""])[1].toLowerCase(), u = at[l] || at._default, s.innerHTML = u[1] + Ae.htmlPrefilter(a) + u[2], d = u[0]; d--; ) s = s.lastChild;
                            Ae.merge(f, s.childNodes), (s = p.firstChild), (s.textContent = "");
                        } else f.push(t.createTextNode(a));
                for (p.textContent = "", h = 0; (a = f[h++]); )
                    if (i && Ae.inArray(a, i) > -1) r && r.push(a);
                    else if (((c = Je(a)), (s = C(p.appendChild(a), "script")), c && k(s), n)) for (d = 0; (a = s[d++]); ) rt.test(a.type || "") && n.push(a);
                return p;
            }
            function M() {
                return !0;
            }
            function P() {
                return !1;
            }
            function L(e, t) {
                return (e === z()) == ("focus" === t);
            }
            function z() {
                try {
                    return Ce.activeElement;
                } catch (e) {}
            }
            function D(e, t, n, i, r, a) {
                var s, o;
                if ("object" == typeof t) {
                    "string" != typeof n && ((i = i || n), (n = void 0));
                    for (o in t) D(e, o, n, i, t[o], a);
                    return e;
                }
                if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = P;
                else if (!r) return e;
                return (
                    1 === a &&
                        ((s = r),
                        (r = function (e) {
                            return Ae().off(e), s.apply(this, arguments);
                        }),
                        (r.guid = s.guid || (s.guid = Ae.guid++))),
                    e.each(function () {
                        Ae.event.add(this, t, r, i, n);
                    })
                );
            }
            function I(e, t, n) {
                if (!n) return void (void 0 === Ge.get(e, t) && Ae.event.add(e, t, M));
                Ge.set(e, t, !1),
                    Ae.event.add(e, t, {
                        namespace: !1,
                        handler: function (e) {
                            var i,
                                r,
                                a = Ge.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (a.length) (Ae.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (((a = fe.call(arguments)), Ge.set(this, t, a), (i = n(this, t)), this[t](), (r = Ge.get(this, t)), a !== r || i ? Ge.set(this, t, !1) : (r = {}), a !== r))
                                    return e.stopImmediatePropagation(), e.preventDefault(), r.value;
                            } else a.length && (Ge.set(this, t, { value: Ae.event.trigger(Ae.extend(a[0], Ae.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
                        },
                    });
            }
            function O(e, t) {
                return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ae(e).children("tbody")[0] || e : e;
            }
            function $(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function j(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function N(e, t) {
                var n, i, r, a, s, o, l;
                if (1 === t.nodeType) {
                    if (Ge.hasData(e) && ((a = Ge.get(e)), (l = a.events))) {
                        Ge.remove(t, "handle events");
                        for (r in l) for (n = 0, i = l[r].length; n < i; n++) Ae.event.add(t, r, l[r][n]);
                    }
                    We.hasData(e) && ((s = We.access(e)), (o = Ae.extend({}, s)), We.set(t, o));
                }
            }
            function H(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && nt.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
            }
            function B(e, t, n, i) {
                t = he(t);
                var r,
                    a,
                    o,
                    l,
                    u,
                    c,
                    d = 0,
                    p = e.length,
                    f = p - 1,
                    h = t[0],
                    v = Ee(h);
                if (v || (p > 1 && "string" == typeof h && !Te.checkClone && dt.test(h)))
                    return e.each(function (r) {
                        var a = e.eq(r);
                        v && (t[0] = h.call(this, r, a.html())), B(a, t, n, i);
                    });
                if (p && ((r = A(t, e[0].ownerDocument, !1, e, i)), (a = r.firstChild), 1 === r.childNodes.length && (r = a), a || i)) {
                    for (o = Ae.map(C(r, "script"), $), l = o.length; d < p; d++) (u = r), d !== f && ((u = Ae.clone(u, !0, !0)), l && Ae.merge(o, C(u, "script"))), n.call(e[d], u, d);
                    if (l)
                        for (c = o[o.length - 1].ownerDocument, Ae.map(o, j), d = 0; d < l; d++)
                            (u = o[d]),
                                rt.test(u.type || "") &&
                                    !Ge.access(u, "globalEval") &&
                                    Ae.contains(c, u) &&
                                    (u.src && "module" !== (u.type || "").toLowerCase() ? Ae._evalUrl && !u.noModule && Ae._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : s(u.textContent.replace(pt, ""), u, c));
                }
                return e;
            }
            function q(e, t, n) {
                for (var i, r = t ? Ae.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || Ae.cleanData(C(i)), i.parentNode && (n && Je(i) && k(C(i, "script")), i.parentNode.removeChild(i));
                return e;
            }
            function R(e, t, n) {
                var i,
                    r,
                    a,
                    s,
                    o = e.style;
                return (
                    (n = n || ht(e)),
                    n &&
                        ((s = n.getPropertyValue(t) || n[t]),
                        "" !== s || Je(e) || (s = Ae.style(e, t)),
                        !Te.pixelBoxStyles() && ft.test(s) && mt.test(t) && ((i = o.width), (r = o.minWidth), (a = o.maxWidth), (o.minWidth = o.maxWidth = o.width = s), (s = n.width), (o.width = i), (o.minWidth = r), (o.maxWidth = a))),
                    void 0 !== s ? s + "" : s
                );
            }
            function F(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                    },
                };
            }
            function V(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; ) if ((e = gt[n] + t) in yt) return e;
            }
            function G(e) {
                var t = Ae.cssProps[e] || bt[e];
                return t || (e in yt ? e : (bt[e] = V(e) || e));
            }
            function W(e, t, n) {
                var i = Ue.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
            }
            function X(e, t, n, i, r, a) {
                var s = "width" === t ? 1 : 0,
                    o = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (l += Ae.css(e, n + Ke[s], !0, r)),
                        i
                            ? ("content" === n && (l -= Ae.css(e, "padding" + Ke[s], !0, r)), "margin" !== n && (l -= Ae.css(e, "border" + Ke[s] + "Width", !0, r)))
                            : ((l += Ae.css(e, "padding" + Ke[s], !0, r)), "padding" !== n ? (l += Ae.css(e, "border" + Ke[s] + "Width", !0, r)) : (o += Ae.css(e, "border" + Ke[s] + "Width", !0, r)));
                return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - 0.5)) || 0), l;
            }
            function Y(e, t, n) {
                var i = ht(e),
                    r = !Te.boxSizingReliable() || n,
                    a = r && "border-box" === Ae.css(e, "boxSizing", !1, i),
                    s = a,
                    o = R(e, t, i),
                    l = "offset" + t[0].toUpperCase() + t.slice(1);
                if (ft.test(o)) {
                    if (!n) return o;
                    o = "auto";
                }
                return (
                    ((!Te.boxSizingReliable() && a) || (!Te.reliableTrDimensions() && u(e, "tr")) || "auto" === o || (!parseFloat(o) && "inline" === Ae.css(e, "display", !1, i))) &&
                        e.getClientRects().length &&
                        ((a = "border-box" === Ae.css(e, "boxSizing", !1, i)), (s = l in e) && (o = e[l])),
                    (o = parseFloat(o) || 0) + X(e, t, n || (a ? "border" : "content"), s, i, o) + "px"
                );
            }
            function _(e, t, n, i, r) {
                return new _.prototype.init(e, t, n, i, r);
            }
            function U() {
                Ct && (!1 === Ce.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(U) : n.setTimeout(U, Ae.fx.interval), Ae.fx.tick());
            }
            function K() {
                return (
                    n.setTimeout(function () {
                        St = void 0;
                    }),
                    (St = Date.now())
                );
            }
            function Q(e, t) {
                var n,
                    i = 0,
                    r = { height: e };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) (n = Ke[i]), (r["margin" + n] = r["padding" + n] = e);
                return t && (r.opacity = r.width = e), r;
            }
            function J(e, t, n) {
                for (var i, r = (te.tweeners[t] || []).concat(te.tweeners["*"]), a = 0, s = r.length; a < s; a++) if ((i = r[a].call(n, t, e))) return i;
            }
            function Z(e, t, n) {
                var i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    v = e.nodeType && et(e),
                    m = Ge.get(e, "fxshow");
                n.queue ||
                    ((s = Ae._queueHooks(e, "fx")),
                    null == s.unqueued &&
                        ((s.unqueued = 0),
                        (o = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || o();
                        })),
                    s.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            s.unqueued--, Ae.queue(e, "fx").length || s.empty.fire();
                        });
                    }));
                for (i in t)
                    if (((r = t[i]), kt.test(r))) {
                        if ((delete t[i], (a = a || "toggle" === r), r === (v ? "hide" : "show"))) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            v = !0;
                        }
                        f[i] = (m && m[i]) || Ae.style(e, i);
                    }
                if ((l = !Ae.isEmptyObject(t)) || !Ae.isEmptyObject(f)) {
                    d &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        (u = m && m.display),
                        null == u && (u = Ge.get(e, "display")),
                        (c = Ae.css(e, "display")),
                        "none" === c && (u ? (c = u) : (S([e], !0), (u = e.style.display || u), (c = Ae.css(e, "display")), S([e]))),
                        ("inline" === c || ("inline-block" === c && null != u)) &&
                            "none" === Ae.css(e, "float") &&
                            (l ||
                                (p.done(function () {
                                    h.display = u;
                                }),
                                null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                        n.overflow &&
                            ((h.overflow = "hidden"),
                            p.always(function () {
                                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                            })),
                        (l = !1);
                    for (i in f)
                        l ||
                            (m ? "hidden" in m && (v = m.hidden) : (m = Ge.access(e, "fxshow", { display: u })),
                            a && (m.hidden = !v),
                            v && S([e], !0),
                            p.done(function () {
                                v || S([e]), Ge.remove(e, "fxshow");
                                for (i in f) Ae.style(e, i, f[i]);
                            })),
                            (l = J(v ? m[i] : 0, i, p)),
                            i in m || ((m[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
                }
            }
            function ee(e, t) {
                var n, i, r, a, s;
                for (n in e)
                    if (((i = y(n)), (r = t[i]), (a = e[n]), Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])), n !== i && ((e[i] = a), delete e[n]), (s = Ae.cssHooks[i]) && "expand" in s)) {
                        (a = s.expand(a)), delete e[i];
                        for (n in a) n in e || ((e[n] = a[n]), (t[n] = r));
                    } else t[i] = r;
            }
            function te(e, t, n) {
                var i,
                    r,
                    a = 0,
                    s = te.prefilters.length,
                    o = Ae.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var t = St || K(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(a);
                        return o.notifyWith(e, [u, a, n]), a < 1 && l ? n : (l || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1);
                    },
                    u = o.promise({
                        elem: e,
                        props: Ae.extend({}, t),
                        opts: Ae.extend(!0, { specialEasing: {}, easing: Ae.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: St || K(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = Ae.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(i), i;
                        },
                        stop: function (t) {
                            var n = 0,
                                i = t ? u.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) u.tweens[n].run(1);
                            return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this;
                        },
                    }),
                    c = u.props;
                for (ee(c, u.opts.specialEasing); a < s; a++) if ((i = te.prefilters[a].call(u, e, c, u.opts))) return Ee(i.stop) && (Ae._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                return (
                    Ae.map(c, J, u),
                    Ee(u.opts.start) && u.opts.start.call(e, u),
                    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                    Ae.fx.timer(Ae.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
                    u
                );
            }
            function ne(e) {
                return (e.match(Ne) || []).join(" ");
            }
            function ie(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function re(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ne) || [] : [];
            }
            function ae(e, t, n, i) {
                var r;
                if (Array.isArray(t))
                    Ae.each(t, function (t, r) {
                        n || Ht.test(e) ? i(e, r) : ae(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
                    });
                else if (n || "object" !== o(t)) i(e, t);
                else for (r in t) ae(e + "[" + r + "]", t[r], n, i);
            }
            function se(e) {
                return function (t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var i,
                        r = 0,
                        a = t.toLowerCase().match(Ne) || [];
                    if (Ee(n)) for (; (i = a[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                };
            }
            function oe(e, t, n, i) {
                function r(o) {
                    var l;
                    return (
                        (a[o] = !0),
                        Ae.each(e[o] || [], function (e, o) {
                            var u = o(t, n, i);
                            return "string" != typeof u || s || a[u] ? (s ? !(l = u) : void 0) : (t.dataTypes.unshift(u), r(u), !1);
                        }),
                        l
                    );
                }
                var a = {},
                    s = e === Kt;
                return r(t.dataTypes[0]) || (!a["*"] && r("*"));
            }
            function le(e, t) {
                var n,
                    i,
                    r = Ae.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && Ae.extend(!0, e, i), e;
            }
            function ue(e, t, n) {
                for (var i, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (r in o)
                        if (o[r] && o[r].test(i)) {
                            l.unshift(r);
                            break;
                        }
                if (l[0] in n) a = l[0];
                else {
                    for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                            a = r;
                            break;
                        }
                        s || (s = r);
                    }
                    a = a || s;
                }
                if (a) return a !== l[0] && l.unshift(a), n[a];
            }
            function ce(e, t, n, i) {
                var r,
                    a,
                    s,
                    o,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                for (a = c.shift(); a; )
                    if ((e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = c.shift())))
                        if ("*" === a) a = l;
                        else if ("*" !== l && l !== a) {
                            if (!(s = u[l + " " + a] || u["* " + a]))
                                for (r in u)
                                    if (((o = r.split(" ")), o[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]]))) {
                                        !0 === s ? (s = u[r]) : !0 !== u[r] && ((a = o[0]), c.unshift(o[1]));
                                        break;
                                    }
                            if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else
                                    try {
                                        t = s(t);
                                    } catch (e) {
                                        return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a };
                                    }
                        }
                return { state: "success", data: t };
            }
            var de = [],
                pe = Object.getPrototypeOf,
                fe = de.slice,
                he = de.flat
                    ? function (e) {
                          return de.flat.call(e);
                      }
                    : function (e) {
                          return de.concat.apply([], e);
                      },
                ve = de.push,
                me = de.indexOf,
                ge = {},
                ye = ge.toString,
                be = ge.hasOwnProperty,
                xe = be.toString,
                we = xe.call(Object),
                Te = {},
                Ee = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                },
                Se = function (e) {
                    return null != e && e === e.window;
                },
                Ce = n.document,
                ke = { type: !0, src: !0, nonce: !0, noModule: !0 },
                Ae = function (e, t) {
                    return new Ae.fn.init(e, t);
                };
            (Ae.fn = Ae.prototype = {
                jquery: "3.5.1",
                constructor: Ae,
                length: 0,
                toArray: function () {
                    return fe.call(this);
                },
                get: function (e) {
                    return null == e ? fe.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = Ae.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return Ae.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        Ae.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(fe.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        Ae.grep(this, function (e, t) {
                            return (t + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        Ae.grep(this, function (e, t) {
                            return t % 2;
                        })
                    );
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: ve,
                sort: de.sort,
                splice: de.splice,
            }),
                (Ae.extend = Ae.fn.extend = function () {
                    var e,
                        t,
                        n,
                        i,
                        r,
                        a,
                        s = arguments[0] || {},
                        o = 1,
                        l = arguments.length,
                        u = !1;
                    for ("boolean" == typeof s && ((u = s), (s = arguments[o] || {}), o++), "object" == typeof s || Ee(s) || (s = {}), o === l && ((s = this), o--); o < l; o++)
                        if (null != (e = arguments[o]))
                            for (t in e)
                                (i = e[t]),
                                    "__proto__" !== t &&
                                        s !== i &&
                                        (u && i && (Ae.isPlainObject(i) || (r = Array.isArray(i)))
                                            ? ((n = s[t]), (a = r && !Array.isArray(n) ? [] : r || Ae.isPlainObject(n) ? n : {}), (r = !1), (s[t] = Ae.extend(u, a, i)))
                                            : void 0 !== i && (s[t] = i));
                    return s;
                }),
                Ae.extend({
                    expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== ye.call(e)) && (!(t = pe(e)) || ("function" == typeof (n = be.call(t, "constructor") && t.constructor) && xe.call(n) === we));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t, n) {
                        s(e, { nonce: t && t.nonce }, n);
                    },
                    each: function (e, t) {
                        var n,
                            i = 0;
                        if (l(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                        return e;
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (l(Object(e)) ? Ae.merge(n, "string" == typeof e ? [e] : e) : ve.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : me.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                        return (e.length = r), e;
                    },
                    grep: function (e, t, n) {
                        for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]);
                        return i;
                    },
                    map: function (e, t, n) {
                        var i,
                            r,
                            a = 0,
                            s = [];
                        if (l(e)) for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
                        else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                        return he(s);
                    },
                    guid: 1,
                    support: Te,
                }),
                "function" == typeof Symbol && (Ae.fn[Symbol.iterator] = de[Symbol.iterator]),
                Ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    ge["[object " + t + "]"] = t.toLowerCase();
                });
            var Me = (function (e) {
                function t(e, t, n, i) {
                    var r,
                        a,
                        s,
                        o,
                        l,
                        c,
                        p,
                        f = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (((n = n || []), "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
                    if (!i && (L(t), (t = t || z), I)) {
                        if (11 !== h && (l = ge.exec(e)))
                            if ((r = l[1])) {
                                if (9 === h) {
                                    if (!(s = t.getElementById(r))) return n;
                                    if (s.id === r) return n.push(s), n;
                                } else if (f && (s = f.getElementById(r)) && N(t, s) && s.id === r) return n.push(s), n;
                            } else {
                                if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n;
                            }
                        if (x.qsa && !W[e + " "] && (!O || !O.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                            if (((p = e), (f = t), 1 === h && (ue.test(e) || le.test(e)))) {
                                for (f = (ye.test(e) && u(t.parentNode)) || t, (f === t && x.scope) || ((o = t.getAttribute("id")) ? (o = o.replace(we, Te)) : t.setAttribute("id", (o = H))), c = S(e), a = c.length; a--; )
                                    c[a] = (o ? "#" + o : ":scope") + " " + d(c[a]);
                                p = c.join(",");
                            }
                            try {
                                return Q.apply(n, f.querySelectorAll(p)), n;
                            } catch (t) {
                                W(e, !0);
                            } finally {
                                o === H && t.removeAttribute("id");
                            }
                        }
                    }
                    return k(e.replace(se, "$1"), t, n, i);
                }
                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], (e[n + " "] = i);
                    }
                    var t = [];
                    return e;
                }
                function i(e) {
                    return (e[H] = !0), e;
                }
                function r(e) {
                    var t = z.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                }
                function a(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
                }
                function s(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function o(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && Se(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function l(e) {
                    return i(function (t) {
                        return (
                            (t = +t),
                            i(function (n, i) {
                                for (var r, a = e([], n.length, t), s = a.length; s--; ) n[(r = a[s])] && (n[r] = !(i[r] = n[r]));
                            })
                        );
                    });
                }
                function u(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                function c() {}
                function d(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i;
                }
                function p(e, t, n) {
                    var i = t.dir,
                        r = t.next,
                        a = r || i,
                        s = n && "parentNode" === a,
                        o = R++;
                    return t.first
                        ? function (t, n, r) {
                              for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
                              return !1;
                          }
                        : function (t, n, l) {
                              var u,
                                  c,
                                  d,
                                  p = [q, o];
                              if (l) {
                                  for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                              } else
                                  for (; (t = t[i]); )
                                      if (1 === t.nodeType || s)
                                          if (((d = t[H] || (t[H] = {})), (c = d[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                          else {
                                              if ((u = c[a]) && u[0] === q && u[1] === o) return (p[2] = u[2]);
                                              if (((c[a] = p), (p[2] = e(t, n, l)))) return !0;
                                          }
                              return !1;
                          };
                }
                function f(e) {
                    return e.length > 1
                        ? function (t, n, i) {
                              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function h(e, n, i) {
                    for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
                    return i;
                }
                function v(e, t, n, i, r) {
                    for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++) (a = e[o]) && ((n && !n(a, i, r)) || (s.push(a), u && t.push(o)));
                    return s;
                }
                function m(e, t, n, r, a, s) {
                    return (
                        r && !r[H] && (r = m(r)),
                        a && !a[H] && (a = m(a, s)),
                        i(function (i, s, o, l) {
                            var u,
                                c,
                                d,
                                p = [],
                                f = [],
                                m = s.length,
                                g = i || h(t || "*", o.nodeType ? [o] : o, []),
                                y = !e || (!i && t) ? g : v(g, p, e, o, l),
                                b = n ? (a || (i ? e : m || r) ? [] : s) : y;
                            if ((n && n(y, b, o, l), r)) for (u = v(b, f), r(u, [], o, l), c = u.length; c--; ) (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                            if (i) {
                                if (a || e) {
                                    if (a) {
                                        for (u = [], c = b.length; c--; ) (d = b[c]) && u.push((y[c] = d));
                                        a(null, (b = []), u, l);
                                    }
                                    for (c = b.length; c--; ) (d = b[c]) && (u = a ? Z(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d));
                                }
                            } else (b = v(b === s ? b.splice(m, b.length) : b)), a ? a(null, s, b, l) : Q.apply(s, b);
                        })
                    );
                }
                function g(e) {
                    for (
                        var t,
                            n,
                            i,
                            r = e.length,
                            a = w.relative[e[0].type],
                            s = a || w.relative[" "],
                            o = a ? 1 : 0,
                            l = p(
                                function (e) {
                                    return e === t;
                                },
                                s,
                                !0
                            ),
                            u = p(
                                function (e) {
                                    return Z(t, e) > -1;
                                },
                                s,
                                !0
                            ),
                            c = [
                                function (e, n, i) {
                                    var r = (!a && (i || n !== A)) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                                    return (t = null), r;
                                },
                            ];
                        o < r;
                        o++
                    )
                        if ((n = w.relative[e[o].type])) c = [p(f(c), n)];
                        else {
                            if (((n = w.filter[e[o].type].apply(null, e[o].matches)), n[H])) {
                                for (i = ++o; i < r && !w.relative[e[i].type]; i++);
                                return m(o > 1 && f(c), o > 1 && d(e.slice(0, o - 1).concat({ value: " " === e[o - 2].type ? "*" : "" })).replace(se, "$1"), n, o < i && g(e.slice(o, i)), i < r && g((e = e.slice(i))), i < r && d(e));
                            }
                            c.push(n);
                        }
                    return f(c);
                }
                function y(e, n) {
                    var r = n.length > 0,
                        a = e.length > 0,
                        s = function (i, s, o, l, u) {
                            var c,
                                d,
                                p,
                                f = 0,
                                h = "0",
                                m = i && [],
                                g = [],
                                y = A,
                                b = i || (a && w.find.TAG("*", u)),
                                x = (q += null == y ? 1 : Math.random() || 0.1),
                                T = b.length;
                            for (u && (A = s == z || s || u); h !== T && null != (c = b[h]); h++) {
                                if (a && c) {
                                    for (d = 0, s || c.ownerDocument == z || (L(c), (o = !I)); (p = e[d++]); )
                                        if (p(c, s || z, o)) {
                                            l.push(c);
                                            break;
                                        }
                                    u && (q = x);
                                }
                                r && ((c = !p && c) && f--, i && m.push(c));
                            }
                            if (((f += h), r && h !== f)) {
                                for (d = 0; (p = n[d++]); ) p(m, g, s, o);
                                if (i) {
                                    if (f > 0) for (; h--; ) m[h] || g[h] || (g[h] = U.call(l));
                                    g = v(g);
                                }
                                Q.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                            }
                            return u && ((q = x), (A = y)), m;
                        };
                    return r ? i(s) : s;
                }
                var b,
                    x,
                    w,
                    T,
                    E,
                    S,
                    C,
                    k,
                    A,
                    M,
                    P,
                    L,
                    z,
                    D,
                    I,
                    O,
                    $,
                    j,
                    N,
                    H = "sizzle" + 1 * new Date(),
                    B = e.document,
                    q = 0,
                    R = 0,
                    F = n(),
                    V = n(),
                    G = n(),
                    W = n(),
                    X = function (e, t) {
                        return e === t && (P = !0), 0;
                    },
                    Y = {}.hasOwnProperty,
                    _ = [],
                    U = _.pop,
                    K = _.push,
                    Q = _.push,
                    J = _.slice,
                    Z = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    te = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    ie = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
                    re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                    ae = new RegExp(te + "+", "g"),
                    se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                    oe = new RegExp("^" + te + "*," + te + "*"),
                    le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                    ue = new RegExp(te + "|>"),
                    ce = new RegExp(re),
                    de = new RegExp("^" + ne + "$"),
                    pe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne + "|[*])"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ee + ")$", "i"),
                        needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    fe = /HTML$/i,
                    he = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ye = /[+~]/,
                    be = new RegExp("\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])", "g"),
                    xe = function (e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                    },
                    we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Te = function (e, t) {
                        return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                    },
                    Ee = function () {
                        L();
                    },
                    Se = p(
                        function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    Q.apply((_ = J.call(B.childNodes)), B.childNodes), _[B.childNodes.length].nodeType;
                } catch (e) {
                    Q = {
                        apply: _.length
                            ? function (e, t) {
                                  K.apply(e, J.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                (x = t.support = {}),
                    (E = t.isXML = function (e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !fe.test(t || (n && n.nodeName) || "HTML");
                    }),
                    (L = t.setDocument = function (e) {
                        var t,
                            n,
                            i = e ? e.ownerDocument || e : B;
                        return i != z && 9 === i.nodeType && i.documentElement
                            ? ((z = i),
                              (D = z.documentElement),
                              (I = !E(z)),
                              B != z && (n = z.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)),
                              (x.scope = r(function (e) {
                                  return D.appendChild(e).appendChild(z.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                              })),
                              (x.attributes = r(function (e) {
                                  return (e.className = "i"), !e.getAttribute("className");
                              })),
                              (x.getElementsByTagName = r(function (e) {
                                  return e.appendChild(z.createComment("")), !e.getElementsByTagName("*").length;
                              })),
                              (x.getElementsByClassName = me.test(z.getElementsByClassName)),
                              (x.getById = r(function (e) {
                                  return (D.appendChild(e).id = H), !z.getElementsByName || !z.getElementsByName(H).length;
                              })),
                              x.getById
                                  ? ((w.filter.ID = function (e) {
                                        var t = e.replace(be, xe);
                                        return function (e) {
                                            return e.getAttribute("id") === t;
                                        };
                                    }),
                                    (w.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && I) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : [];
                                        }
                                    }))
                                  : ((w.filter.ID = function (e) {
                                        var t = e.replace(be, xe);
                                        return function (e) {
                                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t;
                                        };
                                    }),
                                    (w.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && I) {
                                            var n,
                                                i,
                                                r,
                                                a = t.getElementById(e);
                                            if (a) {
                                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                                for (r = t.getElementsByName(e), i = 0; (a = r[i++]); ) if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                            }
                                            return [];
                                        }
                                    })),
                              (w.find.TAG = x.getElementsByTagName
                                  ? function (e, t) {
                                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
                                    }
                                  : function (e, t) {
                                        var n,
                                            i = [],
                                            r = 0,
                                            a = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; (n = a[r++]); ) 1 === n.nodeType && i.push(n);
                                            return i;
                                        }
                                        return a;
                                    }),
                              (w.find.CLASS =
                                  x.getElementsByClassName &&
                                  function (e, t) {
                                      if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e);
                                  }),
                              ($ = []),
                              (O = []),
                              (x.qsa = me.test(z.querySelectorAll)) &&
                                  (r(function (e) {
                                      var t;
                                      (D.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"),
                                          e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"),
                                          e.querySelectorAll("[id~=" + H + "-]").length || O.push("~="),
                                          (t = z.createElement("input")),
                                          t.setAttribute("name", ""),
                                          e.appendChild(t),
                                          e.querySelectorAll("[name='']").length || O.push("\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"),
                                          e.querySelectorAll(":checked").length || O.push(":checked"),
                                          e.querySelectorAll("a#" + H + "+*").length || O.push(".#.+[+~]"),
                                          e.querySelectorAll("\\\f"),
                                          O.push("[\\r\\n\\f]");
                                  }),
                                  r(function (e) {
                                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var t = z.createElement("input");
                                      t.setAttribute("type", "hidden"),
                                          e.appendChild(t).setAttribute("name", "D"),
                                          e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="),
                                          2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
                                          (D.appendChild(e).disabled = !0),
                                          2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
                                          e.querySelectorAll("*,:x"),
                                          O.push(",.*:");
                                  })),
                              (x.matchesSelector = me.test((j = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector))) &&
                                  r(function (e) {
                                      (x.disconnectedMatch = j.call(e, "*")), j.call(e, "[s!='']:x"), $.push("!=", re);
                                  }),
                              (O = O.length && new RegExp(O.join("|"))),
                              ($ = $.length && new RegExp($.join("|"))),
                              (t = me.test(D.compareDocumentPosition)),
                              (N =
                                  t || me.test(D.contains)
                                      ? function (e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement : e,
                                                i = t && t.parentNode;
                                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                        }
                                      : function (e, t) {
                                            if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                            return !1;
                                        }),
                              (X = t
                                  ? function (e, t) {
                                        if (e === t) return (P = !0), 0;
                                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                        return (
                                            n ||
                                            ((n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                            1 & n || (!x.sortDetached && t.compareDocumentPosition(e) === n)
                                                ? e == z || (e.ownerDocument == B && N(B, e))
                                                    ? -1
                                                    : t == z || (t.ownerDocument == B && N(B, t))
                                                    ? 1
                                                    : M
                                                    ? Z(M, e) - Z(M, t)
                                                    : 0
                                                : 4 & n
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (e, t) {
                                        if (e === t) return (P = !0), 0;
                                        var n,
                                            i = 0,
                                            r = e.parentNode,
                                            a = t.parentNode,
                                            o = [e],
                                            l = [t];
                                        if (!r || !a) return e == z ? -1 : t == z ? 1 : r ? -1 : a ? 1 : M ? Z(M, e) - Z(M, t) : 0;
                                        if (r === a) return s(e, t);
                                        for (n = e; (n = n.parentNode); ) o.unshift(n);
                                        for (n = t; (n = n.parentNode); ) l.unshift(n);
                                        for (; o[i] === l[i]; ) i++;
                                        return i ? s(o[i], l[i]) : o[i] == B ? -1 : l[i] == B ? 1 : 0;
                                    }),
                              z)
                            : z;
                    }),
                    (t.matches = function (e, n) {
                        return t(e, null, null, n);
                    }),
                    (t.matchesSelector = function (e, n) {
                        if ((L(e), x.matchesSelector && I && !W[n + " "] && (!$ || !$.test(n)) && (!O || !O.test(n))))
                            try {
                                var i = j.call(e, n);
                                if (i || x.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                            } catch (e) {
                                W(n, !0);
                            }
                        return t(n, z, null, [e]).length > 0;
                    }),
                    (t.contains = function (e, t) {
                        return (e.ownerDocument || e) != z && L(e), N(e, t);
                    }),
                    (t.attr = function (e, t) {
                        (e.ownerDocument || e) != z && L(e);
                        var n = w.attrHandle[t.toLowerCase()],
                            i = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                        return void 0 !== i ? i : x.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                    }),
                    (t.escape = function (e) {
                        return (e + "").replace(we, Te);
                    }),
                    (t.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }),
                    (t.uniqueSort = function (e) {
                        var t,
                            n = [],
                            i = 0,
                            r = 0;
                        if (((P = !x.detectDuplicates), (M = !x.sortStable && e.slice(0)), e.sort(X), P)) {
                            for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                            for (; i--; ) e.splice(n[i], 1);
                        }
                        return (M = null), e;
                    }),
                    (T = t.getText = function (e) {
                        var t,
                            n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                            } else if (3 === r || 4 === r) return e.nodeValue;
                        } else for (; (t = e[i++]); ) n += T(t);
                        return n;
                    }),
                    (w = t.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: pe,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: {
                            ATTR: function (e) {
                                return (e[1] = e[1].replace(be, xe)), (e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                            },
                            CHILD: function (e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
                                    e
                                );
                            },
                            PSEUDO: function (e) {
                                var t,
                                    n = !e[6] && e[2];
                                return pe.CHILD.test(e[0])
                                    ? null
                                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(be, xe).toLowerCase();
                                return "*" === e
                                    ? function () {
                                          return !0;
                                      }
                                    : function (e) {
                                          return e.nodeName && e.nodeName.toLowerCase() === t;
                                      };
                            },
                            CLASS: function (e) {
                                var t = F[e + " "];
                                return (
                                    t ||
                                    ((t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) &&
                                        F(e, function (e) {
                                            return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                        }))
                                );
                            },
                            ATTR: function (e, n, i) {
                                return function (r) {
                                    var a = t.attr(r, e);
                                    return null == a
                                        ? "!=" === n
                                        : !n ||
                                              ((a += ""),
                                              "=" === n
                                                  ? a === i
                                                  : "!=" === n
                                                  ? a !== i
                                                  : "^=" === n
                                                  ? i && 0 === a.indexOf(i)
                                                  : "*=" === n
                                                  ? i && a.indexOf(i) > -1
                                                  : "$=" === n
                                                  ? i && a.slice(-i.length) === i
                                                  : "~=" === n
                                                  ? (" " + a.replace(ae, " ") + " ").indexOf(i) > -1
                                                  : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"));
                                };
                            },
                            CHILD: function (e, t, n, i, r) {
                                var a = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    o = "of-type" === t;
                                return 1 === i && 0 === r
                                    ? function (e) {
                                          return !!e.parentNode;
                                      }
                                    : function (t, n, l) {
                                          var u,
                                              c,
                                              d,
                                              p,
                                              f,
                                              h,
                                              v = a !== s ? "nextSibling" : "previousSibling",
                                              m = t.parentNode,
                                              g = o && t.nodeName.toLowerCase(),
                                              y = !l && !o,
                                              b = !1;
                                          if (m) {
                                              if (a) {
                                                  for (; v; ) {
                                                      for (p = t; (p = p[v]); ) if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                                      h = v = "only" === e && !h && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                                                  for (
                                                      p = m, d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === q && u[1], b = f && u[2], p = f && m.childNodes[f];
                                                      (p = (++f && p && p[v]) || (b = f = 0) || h.pop());

                                                  )
                                                      if (1 === p.nodeType && ++b && p === t) {
                                                          c[e] = [q, f, b];
                                                          break;
                                                      }
                                              } else if ((y && ((p = t), (d = p[H] || (p[H] = {})), (c = d[p.uniqueID] || (d[p.uniqueID] = {})), (u = c[e] || []), (f = u[0] === q && u[1]), (b = f)), !1 === b))
                                                  for (
                                                      ;
                                                      (p = (++f && p && p[v]) || (b = f = 0) || h.pop()) &&
                                                      ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((d = p[H] || (p[H] = {})), (c = d[p.uniqueID] || (d[p.uniqueID] = {})), (c[e] = [q, b])), p !== t));

                                                  );
                                              return (b -= r) === i || (b % i == 0 && b / i >= 0);
                                          }
                                      };
                            },
                            PSEUDO: function (e, n) {
                                var r,
                                    a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return a[H]
                                    ? a(n)
                                    : a.length > 1
                                    ? ((r = [e, e, "", n]),
                                      w.setFilters.hasOwnProperty(e.toLowerCase())
                                          ? i(function (e, t) {
                                                for (var i, r = a(e, n), s = r.length; s--; ) (i = Z(e, r[s])), (e[i] = !(t[i] = r[s]));
                                            })
                                          : function (e) {
                                                return a(e, 0, r);
                                            })
                                    : a;
                            },
                        },
                        pseudos: {
                            not: i(function (e) {
                                var t = [],
                                    n = [],
                                    r = C(e.replace(se, "$1"));
                                return r[H]
                                    ? i(function (e, t, n, i) {
                                          for (var a, s = r(e, null, i, []), o = e.length; o--; ) (a = s[o]) && (e[o] = !(t[o] = a));
                                      })
                                    : function (e, i, a) {
                                          return (t[0] = e), r(t, null, a, n), (t[0] = null), !n.pop();
                                      };
                            }),
                            has: i(function (e) {
                                return function (n) {
                                    return t(e, n).length > 0;
                                };
                            }),
                            contains: i(function (e) {
                                return (
                                    (e = e.replace(be, xe)),
                                    function (t) {
                                        return (t.textContent || T(t)).indexOf(e) > -1;
                                    }
                                );
                            }),
                            lang: i(function (e) {
                                return (
                                    de.test(e || "") || t.error("unsupported lang: " + e),
                                    (e = e.replace(be, xe).toLowerCase()),
                                    function (t) {
                                        var n;
                                        do {
                                            if ((n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id;
                            },
                            root: function (e) {
                                return e === D;
                            },
                            focus: function (e) {
                                return e === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: o(!1),
                            disabled: o(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (e) {
                                return !w.pseudos.empty(e);
                            },
                            header: function (e) {
                                return ve.test(e.nodeName);
                            },
                            input: function (e) {
                                return he.test(e.nodeName);
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && "button" === e.type) || "button" === t;
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                            },
                            first: l(function () {
                                return [0];
                            }),
                            last: l(function (e, t) {
                                return [t - 1];
                            }),
                            eq: l(function (e, t, n) {
                                return [n < 0 ? n + t : n];
                            }),
                            even: l(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            odd: l(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            lt: l(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                                return e;
                            }),
                            gt: l(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                                return e;
                            }),
                        },
                    }),
                    (w.pseudos.nth = w.pseudos.eq);
                for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                    w.pseudos[b] = (function (e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e;
                        };
                    })(b);
                for (b in { submit: !0, reset: !0 })
                    w.pseudos[b] = (function (e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e;
                        };
                    })(b);
                return (
                    (c.prototype = w.filters = w.pseudos),
                    (w.setFilters = new c()),
                    (S = t.tokenize = function (e, n) {
                        var i,
                            r,
                            a,
                            s,
                            o,
                            l,
                            u,
                            c = V[e + " "];
                        if (c) return n ? 0 : c.slice(0);
                        for (o = e, l = [], u = w.preFilter; o; ) {
                            (i && !(r = oe.exec(o))) || (r && (o = o.slice(r[0].length) || o), l.push((a = []))), (i = !1), (r = le.exec(o)) && ((i = r.shift()), a.push({ value: i, type: r[0].replace(se, " ") }), (o = o.slice(i.length)));
                            for (s in w.filter) !(r = pe[s].exec(o)) || (u[s] && !(r = u[s](r))) || ((i = r.shift()), a.push({ value: i, type: s, matches: r }), (o = o.slice(i.length)));
                            if (!i) break;
                        }
                        return n ? o.length : o ? t.error(e) : V(e, l).slice(0);
                    }),
                    (C = t.compile = function (e, t) {
                        var n,
                            i = [],
                            r = [],
                            a = G[e + " "];
                        if (!a) {
                            for (t || (t = S(e)), n = t.length; n--; ) (a = g(t[n])), a[H] ? i.push(a) : r.push(a);
                            (a = G(e, y(r, i))), (a.selector = e);
                        }
                        return a;
                    }),
                    (k = t.select = function (e, t, n, i) {
                        var r,
                            a,
                            s,
                            o,
                            l,
                            c = "function" == typeof e && e,
                            p = !i && S((e = c.selector || e));
                        if (((n = n || []), 1 === p.length)) {
                            if (((a = p[0] = p[0].slice(0)), a.length > 2 && "ID" === (s = a[0]).type && 9 === t.nodeType && I && w.relative[a[1].type])) {
                                if (!(t = (w.find.ID(s.matches[0].replace(be, xe), t) || [])[0])) return n;
                                c && (t = t.parentNode), (e = e.slice(a.shift().value.length));
                            }
                            for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && ((s = a[r]), !w.relative[(o = s.type)]); )
                                if ((l = w.find[o]) && (i = l(s.matches[0].replace(be, xe), (ye.test(a[0].type) && u(t.parentNode)) || t))) {
                                    if ((a.splice(r, 1), !(e = i.length && d(a)))) return Q.apply(n, i), n;
                                    break;
                                }
                        }
                        return (c || C(e, p))(i, t, !I, n, !t || (ye.test(e) && u(t.parentNode)) || t), n;
                    }),
                    (x.sortStable = H.split("").sort(X).join("") === H),
                    (x.detectDuplicates = !!P),
                    L(),
                    (x.sortDetached = r(function (e) {
                        return 1 & e.compareDocumentPosition(z.createElement("fieldset"));
                    })),
                    r(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        a("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (x.attributes &&
                        r(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        a("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    r(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        a(ee, function (e, t, n) {
                            var i;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                        }),
                    t
                );
            })(n);
            (Ae.find = Me),
                (Ae.expr = Me.selectors),
                (Ae.expr[":"] = Ae.expr.pseudos),
                (Ae.uniqueSort = Ae.unique = Me.uniqueSort),
                (Ae.text = Me.getText),
                (Ae.isXMLDoc = Me.isXML),
                (Ae.contains = Me.contains),
                (Ae.escapeSelector = Me.escape);
            var Pe = function (e, t, n) {
                    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (r && Ae(e).is(n)) break;
                            i.push(e);
                        }
                    return i;
                },
                Le = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                ze = Ae.expr.match.needsContext,
                De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            (Ae.filter = function (e, t, n) {
                var i = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType
                        ? Ae.find.matchesSelector(i, e)
                            ? [i]
                            : []
                        : Ae.find.matches(
                              e,
                              Ae.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                Ae.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            i = this.length,
                            r = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                Ae(e).filter(function () {
                                    for (t = 0; t < i; t++) if (Ae.contains(r[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < i; t++) Ae.find(e, r[t], n);
                        return i > 1 ? Ae.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(c(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(c(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!c(this, "string" == typeof e && ze.test(e) ? Ae(e) : e || [], !1).length;
                    },
                });
            var Ie,
                Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((Ae.fn.init = function (e, t, n) {
                var i, r;
                if (!e) return this;
                if (((n = n || Ie), "string" == typeof e)) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Oe.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (((t = t instanceof Ae ? t[0] : t), Ae.merge(this, Ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Ce, !0)), De.test(i[1]) && Ae.isPlainObject(t)))
                            for (i in t) Ee(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    return (r = Ce.getElementById(i[2])), r && ((this[0] = r), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : Ee(e) ? (void 0 !== n.ready ? n.ready(e) : e(Ae)) : Ae.makeArray(e, this);
            }).prototype = Ae.fn),
                (Ie = Ae(Ce));
            var $e = /^(?:parents|prev(?:Until|All))/,
                je = { children: !0, contents: !0, next: !0, prev: !0 };
            Ae.fn.extend({
                has: function (e) {
                    var t = Ae(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (Ae.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        i = 0,
                        r = this.length,
                        a = [],
                        s = "string" != typeof e && Ae(e);
                    if (!ze.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Ae.find.matchesSelector(n, e))) {
                                    a.push(n);
                                    break;
                                }
                    return this.pushStack(a.length > 1 ? Ae.uniqueSort(a) : a);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? me.call(Ae(e), this[0]) : me.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(Ae.uniqueSort(Ae.merge(this.get(), Ae(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                Ae.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return Pe(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return Pe(e, "parentNode", n);
                        },
                        next: function (e) {
                            return d(e, "nextSibling");
                        },
                        prev: function (e) {
                            return d(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return Pe(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return Pe(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return Pe(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return Pe(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return Le((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return Le(e.firstChild);
                        },
                        contents: function (e) {
                            return null != e.contentDocument && pe(e.contentDocument) ? e.contentDocument : (u(e, "template") && (e = e.content || e), Ae.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        Ae.fn[e] = function (n, i) {
                            var r = Ae.map(this, t, n);
                            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Ae.filter(i, r)), this.length > 1 && (je[e] || Ae.uniqueSort(r), $e.test(e) && r.reverse()), this.pushStack(r);
                        };
                    }
                );
            var Ne = /[^\x20\t\r\n\f]+/g;
            (Ae.Callbacks = function (e) {
                e = "string" == typeof e ? p(e) : Ae.extend({}, e);
                var t,
                    n,
                    i,
                    r,
                    a = [],
                    s = [],
                    l = -1,
                    u = function () {
                        for (r = r || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < a.length; ) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && ((l = a.length), (n = !1));
                        e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                a &&
                                    (n && !t && ((l = a.length - 1), s.push(n)),
                                    (function t(n) {
                                        Ae.each(n, function (n, i) {
                                            Ee(i) ? (e.unique && c.has(i)) || a.push(i) : i && i.length && "string" !== o(i) && t(i);
                                        });
                                    })(arguments),
                                    n && !t && u()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                Ae.each(arguments, function (e, t) {
                                    for (var n; (n = Ae.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= l && l--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? Ae.inArray(e, a) > -1 : a.length > 0;
                        },
                        empty: function () {
                            return a && (a = []), this;
                        },
                        disable: function () {
                            return (r = s = []), (a = n = ""), this;
                        },
                        disabled: function () {
                            return !a;
                        },
                        lock: function () {
                            return (r = s = []), n || t || (a = n = ""), this;
                        },
                        locked: function () {
                            return !!r;
                        },
                        fireWith: function (e, n) {
                            return r || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), s.push(n), t || u()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!i;
                        },
                    };
                return c;
            }),
                Ae.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", Ae.Callbacks("memory"), Ae.Callbacks("memory"), 2],
                                ["resolve", "done", Ae.Callbacks("once memory"), Ae.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", Ae.Callbacks("once memory"), Ae.Callbacks("once memory"), 1, "rejected"],
                            ],
                            i = "pending",
                            r = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return a.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return r.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return Ae.Deferred(function (n) {
                                        Ae.each(t, function (t, i) {
                                            var r = Ee(e[i[4]]) && e[i[4]];
                                            a[i[1]](function () {
                                                var e = r && r.apply(this, arguments);
                                                e && Ee(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    }).promise();
                                },
                                then: function (e, i, r) {
                                    function a(e, t, i, r) {
                                        return function () {
                                            var o = this,
                                                l = arguments,
                                                u = function () {
                                                    var n, u;
                                                    if (!(e < s)) {
                                                        if ((n = i.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        (u = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            Ee(u)
                                                                ? r
                                                                    ? u.call(n, a(s, t, f, r), a(s, t, h, r))
                                                                    : (s++, u.call(n, a(s, t, f, r), a(s, t, h, r), a(s, t, f, t.notifyWith)))
                                                                : (i !== f && ((o = void 0), (l = [n])), (r || t.resolveWith)(o, l));
                                                    }
                                                },
                                                c = r
                                                    ? u
                                                    : function () {
                                                          try {
                                                              u();
                                                          } catch (n) {
                                                              Ae.Deferred.exceptionHook && Ae.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= s && (i !== h && ((o = void 0), (l = [n])), t.rejectWith(o, l));
                                                          }
                                                      };
                                            e ? c() : (Ae.Deferred.getStackHook && (c.stackTrace = Ae.Deferred.getStackHook()), n.setTimeout(c));
                                        };
                                    }
                                    var s = 0;
                                    return Ae.Deferred(function (n) {
                                        t[0][3].add(a(0, n, Ee(r) ? r : f, n.notifyWith)), t[1][3].add(a(0, n, Ee(e) ? e : f)), t[2][3].add(a(0, n, Ee(i) ? i : h));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? Ae.extend(e, r) : r;
                                },
                            },
                            a = {};
                        return (
                            Ae.each(t, function (e, n) {
                                var s = n[2],
                                    o = n[5];
                                (r[n[1]] = s.add),
                                    o &&
                                        s.add(
                                            function () {
                                                i = o;
                                            },
                                            t[3 - e][2].disable,
                                            t[3 - e][3].disable,
                                            t[0][2].lock,
                                            t[0][3].lock
                                        ),
                                    s.add(n[3].fire),
                                    (a[n[0]] = function () {
                                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this;
                                    }),
                                    (a[n[0] + "With"] = s.fireWith);
                            }),
                            r.promise(a),
                            e && e.call(a, a),
                            a
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            i = Array(n),
                            r = fe.call(arguments),
                            a = Ae.Deferred(),
                            s = function (e) {
                                return function (n) {
                                    (i[e] = this), (r[e] = arguments.length > 1 ? fe.call(arguments) : n), --t || a.resolveWith(i, r);
                                };
                            };
                        if (t <= 1 && (v(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || Ee(r[n] && r[n].then))) return a.then();
                        for (; n--; ) v(r[n], s(n), a.reject);
                        return a.promise();
                    },
                });
            var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (Ae.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && He.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (Ae.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
            var Be = Ae.Deferred();
            (Ae.fn.ready = function (e) {
                return (
                    Be.then(e).catch(function (e) {
                        Ae.readyException(e);
                    }),
                    this
                );
            }),
                Ae.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --Ae.readyWait : Ae.isReady) || ((Ae.isReady = !0), (!0 !== e && --Ae.readyWait > 0) || Be.resolveWith(Ce, [Ae]));
                    },
                }),
                (Ae.ready.then = Be.then),
                "complete" === Ce.readyState || ("loading" !== Ce.readyState && !Ce.documentElement.doScroll) ? n.setTimeout(Ae.ready) : (Ce.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
            var qe = function (e, t, n, i, r, a, s) {
                    var l = 0,
                        u = e.length,
                        c = null == n;
                    if ("object" === o(n)) {
                        r = !0;
                        for (l in n) qe(e, t, l, n[l], !0, a, s);
                    } else if (
                        void 0 !== i &&
                        ((r = !0),
                        Ee(i) || (s = !0),
                        c &&
                            (s
                                ? (t.call(e, i), (t = null))
                                : ((c = t),
                                  (t = function (e, t, n) {
                                      return c.call(Ae(e), n);
                                  }))),
                        t)
                    )
                        for (; l < u; l++) t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
                    return r ? e : c ? t.call(e) : u ? t(e[0], n) : a;
                },
                Re = /^-ms-/,
                Fe = /-([a-z])/g,
                Ve = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
            (b.uid = 1),
                (b.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), Ve(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var i,
                            r = this.cache(e);
                        if ("string" == typeof t) r[y(t)] = n;
                        else for (i in t) r[y(i)] = t[i];
                        return r;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][y(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== t) {
                                Array.isArray(t) ? (t = t.map(y)) : ((t = y(t)), (t = t in i ? [t] : t.match(Ne) || [])), (n = t.length);
                                for (; n--; ) delete i[t[n]];
                            }
                            (void 0 === t || Ae.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !Ae.isEmptyObject(t);
                    },
                });
            var Ge = new b(),
                We = new b(),
                Xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ye = /[A-Z]/g;
            Ae.extend({
                hasData: function (e) {
                    return We.hasData(e) || Ge.hasData(e);
                },
                data: function (e, t, n) {
                    return We.access(e, t, n);
                },
                removeData: function (e, t) {
                    We.remove(e, t);
                },
                _data: function (e, t, n) {
                    return Ge.access(e, t, n);
                },
                _removeData: function (e, t) {
                    Ge.remove(e, t);
                },
            }),
                Ae.fn.extend({
                    data: function (e, t) {
                        var n,
                            i,
                            r,
                            a = this[0],
                            s = a && a.attributes;
                        if (void 0 === e) {
                            if (this.length && ((r = We.get(a)), 1 === a.nodeType && !Ge.get(a, "hasDataAttrs"))) {
                                for (n = s.length; n--; ) s[n] && ((i = s[n].name), 0 === i.indexOf("data-") && ((i = y(i.slice(5))), w(a, i, r[i])));
                                Ge.set(a, "hasDataAttrs", !0);
                            }
                            return r;
                        }
                        return "object" == typeof e
                            ? this.each(function () {
                                  We.set(this, e);
                              })
                            : qe(
                                  this,
                                  function (t) {
                                      var n;
                                      if (a && void 0 === t) {
                                          if (void 0 !== (n = We.get(a, e))) return n;
                                          if (void 0 !== (n = w(a, e))) return n;
                                      } else
                                          this.each(function () {
                                              We.set(this, e, t);
                                          });
                                  },
                                  null,
                                  t,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            We.remove(this, e);
                        });
                    },
                }),
                Ae.extend({
                    queue: function (e, t, n) {
                        var i;
                        if (e) return (t = (t || "fx") + "queue"), (i = Ge.get(e, t)), n && (!i || Array.isArray(n) ? (i = Ge.access(e, t, Ae.makeArray(n))) : i.push(n)), i || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = Ae.queue(e, t),
                            i = n.length,
                            r = n.shift(),
                            a = Ae._queueHooks(e, t),
                            s = function () {
                                Ae.dequeue(e, t);
                            };
                        "inprogress" === r && ((r = n.shift()), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, s, a)), !i && a && a.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            Ge.get(e, n) ||
                            Ge.access(e, n, {
                                empty: Ae.Callbacks("once memory").add(function () {
                                    Ge.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                Ae.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? Ae.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = Ae.queue(this, e, t);
                                      Ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ae.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            Ae.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            i = 1,
                            r = Ae.Deferred(),
                            a = this,
                            s = this.length,
                            o = function () {
                                --i || r.resolveWith(a, [a]);
                            };
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Ge.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                        return o(), r.promise(t);
                    },
                });
            var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ue = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
                Ke = ["Top", "Right", "Bottom", "Left"],
                Qe = Ce.documentElement,
                Je = function (e) {
                    return Ae.contains(e.ownerDocument, e);
                },
                Ze = { composed: !0 };
            Qe.getRootNode &&
                (Je = function (e) {
                    return Ae.contains(e.ownerDocument, e) || e.getRootNode(Ze) === e.ownerDocument;
                });
            var et = function (e, t) {
                    return (e = t || e), "none" === e.style.display || ("" === e.style.display && Je(e) && "none" === Ae.css(e, "display"));
                },
                tt = {};
            Ae.fn.extend({
                show: function () {
                    return S(this, !0);
                },
                hide: function () {
                    return S(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              et(this) ? Ae(this).show() : Ae(this).hide();
                          });
                },
            });
            var nt = /^(?:checkbox|radio)$/i,
                it = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                rt = /^$|^module$|\/(?:java|ecma)script/i;
            !(function () {
                var e = Ce.createDocumentFragment(),
                    t = e.appendChild(Ce.createElement("div")),
                    n = Ce.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    (Te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (t.innerHTML = "<textarea>x</textarea>"),
                    (Te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
                    (t.innerHTML = "<option></option>"),
                    (Te.option = !!t.lastChild);
            })();
            var at = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            (at.tbody = at.tfoot = at.colgroup = at.caption = at.thead), (at.th = at.td), Te.option || (at.optgroup = at.option = [1, "<select multiple='multiple'>", "</select>"]);
            var st = /<|&#?\w+;/,
                ot = /^key/,
                lt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ut = /^([^.]*)(?:\.(.+)|)/;
            (Ae.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f,
                        h,
                        v,
                        m = Ge.get(e);
                    if (Ve(e))
                        for (
                            n.handler && ((a = n), (n = a.handler), (r = a.selector)),
                                r && Ae.find.matchesSelector(Qe, r),
                                n.guid || (n.guid = Ae.guid++),
                                (l = m.events) || (l = m.events = Object.create(null)),
                                (s = m.handle) ||
                                    (s = m.handle = function (t) {
                                        return void 0 !== Ae && Ae.event.triggered !== t.type ? Ae.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                t = (t || "").match(Ne) || [""],
                                u = t.length;
                            u--;

                        )
                            (o = ut.exec(t[u]) || []),
                                (f = v = o[1]),
                                (h = (o[2] || "").split(".").sort()),
                                f &&
                                    ((d = Ae.event.special[f] || {}),
                                    (f = (r ? d.delegateType : d.bindType) || f),
                                    (d = Ae.event.special[f] || {}),
                                    (c = Ae.extend({ type: f, origType: v, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && Ae.expr.match.needsContext.test(r), namespace: h.join(".") }, a)),
                                    (p = l[f]) || ((p = l[f] = []), (p.delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
                                    d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                    r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                    (Ae.event.global[f] = !0));
                },
                remove: function (e, t, n, i, r) {
                    var a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f,
                        h,
                        v,
                        m = Ge.hasData(e) && Ge.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Ne) || [""], u = t.length; u--; )
                            if (((o = ut.exec(t[u]) || []), (f = v = o[1]), (h = (o[2] || "").split(".").sort()), f)) {
                                for (d = Ae.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--; )
                                    (c = p[a]),
                                        (!r && v !== c.origType) ||
                                            (n && n.guid !== c.guid) ||
                                            (o && !o.test(c.namespace)) ||
                                            (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                            (p.splice(a, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                                s && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || Ae.removeEvent(e, f, m.handle), delete l[f]);
                            } else for (f in l) Ae.event.remove(e, f + t[u], n, i, !0);
                        Ae.isEmptyObject(l) && Ge.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        i,
                        r,
                        a,
                        s,
                        o = new Array(arguments.length),
                        l = Ae.event.fix(e),
                        u = (Ge.get(this, "events") || Object.create(null))[l.type] || [],
                        c = Ae.event.special[l.type] || {};
                    for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
                    if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                        for (s = Ae.event.handlers.call(this, l, u), t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                            for (l.currentTarget = r.elem, n = 0; (a = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                (l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace)) ||
                                    ((l.handleObj = a), (l.data = a.data), void 0 !== (i = ((Ae.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, l), l.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        i,
                        r,
                        a,
                        s,
                        o = [],
                        l = t.delegateCount,
                        u = e.target;
                    if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                for (a = [], s = {}, n = 0; n < l; n++) (i = t[n]), (r = i.selector + " "), void 0 === s[r] && (s[r] = i.needsContext ? Ae(r, this).index(u) > -1 : Ae.find(r, this, null, [u]).length), s[r] && a.push(i);
                                a.length && o.push({ elem: u, handlers: a });
                            }
                    return (u = this), l < t.length && o.push({ elem: u, handlers: t.slice(l) }), o;
                },
                addProp: function (e, t) {
                    Object.defineProperty(Ae.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: Ee(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[Ae.expando] ? e : new Ae.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return nt.test(t.type) && t.click && u(t, "input") && I(t, "click", M), !1;
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return nt.test(t.type) && t.click && u(t, "input") && I(t, "click"), !0;
                        },
                        _default: function (e) {
                            var t = e.target;
                            return (nt.test(t.type) && t.click && u(t, "input") && Ge.get(t, "click")) || u(t, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (Ae.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (Ae.Event = function (e, t) {
                    if (!(this instanceof Ae.Event)) return new Ae.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? M : P),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && Ae.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[Ae.expando] = !0);
                }),
                (Ae.Event.prototype = {
                    constructor: Ae.Event,
                    isDefaultPrevented: P,
                    isPropagationStopped: P,
                    isImmediatePropagationStopped: P,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = M), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = M), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = M), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                Ae.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && ot.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && lt.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    Ae.event.addProp
                ),
                Ae.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    Ae.event.special[e] = {
                        setup: function () {
                            return I(this, e, L), !1;
                        },
                        trigger: function () {
                            return I(this, e), !0;
                        },
                        delegateType: t,
                    };
                }),
                Ae.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    Ae.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                i = this,
                                r = e.relatedTarget,
                                a = e.handleObj;
                            return (r && (r === i || Ae.contains(i, r))) || ((e.type = a.origType), (n = a.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                Ae.fn.extend({
                    on: function (e, t, n, i) {
                        return D(this, e, t, n, i);
                    },
                    one: function (e, t, n, i) {
                        return D(this, e, t, n, i, 1);
                    },
                    off: function (e, t, n) {
                        var i, r;
                        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), Ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof e) {
                            for (r in e) this.off(r, t, e[r]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = P),
                            this.each(function () {
                                Ae.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var ct = /<script|<style|<link/i,
                dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            Ae.extend({
                htmlPrefilter: function (e) {
                    return e;
                },
                clone: function (e, t, n) {
                    var i,
                        r,
                        a,
                        s,
                        o = e.cloneNode(!0),
                        l = Je(e);
                    if (!(Te.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || Ae.isXMLDoc(e))) for (s = C(o), a = C(e), i = 0, r = a.length; i < r; i++) H(a[i], s[i]);
                    if (t)
                        if (n) for (a = a || C(e), s = s || C(o), i = 0, r = a.length; i < r; i++) N(a[i], s[i]);
                        else N(e, o);
                    return (s = C(o, "script")), s.length > 0 && k(s, !l && C(e, "script")), o;
                },
                cleanData: function (e) {
                    for (var t, n, i, r = Ae.event.special, a = 0; void 0 !== (n = e[a]); a++)
                        if (Ve(n)) {
                            if ((t = n[Ge.expando])) {
                                if (t.events) for (i in t.events) r[i] ? Ae.event.remove(n, i) : Ae.removeEvent(n, i, t.handle);
                                n[Ge.expando] = void 0;
                            }
                            n[We.expando] && (n[We.expando] = void 0);
                        }
                },
            }),
                Ae.fn.extend({
                    detach: function (e) {
                        return q(this, e, !0);
                    },
                    remove: function (e) {
                        return q(this, e);
                    },
                    text: function (e) {
                        return qe(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? Ae.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return B(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                O(this, e).appendChild(e);
                            }
                        });
                    },
                    prepend: function () {
                        return B(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = O(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return B(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return B(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ae.cleanData(C(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return Ae.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return qe(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !ct.test(e) && !at[(it.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = Ae.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++) (t = this[n] || {}), 1 === t.nodeType && (Ae.cleanData(C(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return B(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                Ae.inArray(this, e) < 0 && (Ae.cleanData(C(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                Ae.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    Ae.fn[e] = function (e) {
                        for (var n, i = [], r = Ae(e), a = r.length - 1, s = 0; s <= a; s++) (n = s === a ? this : this.clone(!0)), Ae(r[s])[t](n), ve.apply(i, n.get());
                        return this.pushStack(i);
                    };
                });
            var ft = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
                ht = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                },
                vt = function (e, t, n) {
                    var i,
                        r,
                        a = {};
                    for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
                    i = n.call(e);
                    for (r in t) e.style[r] = a[r];
                    return i;
                },
                mt = new RegExp(Ke.join("|"), "i");
            !(function () {
                function e() {
                    if (c) {
                        (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            Qe.appendChild(u).appendChild(c);
                        var e = n.getComputedStyle(c);
                        (i = "1%" !== e.top),
                            (l = 12 === t(e.marginLeft)),
                            (c.style.right = "60%"),
                            (s = 36 === t(e.right)),
                            (r = 36 === t(e.width)),
                            (c.style.position = "absolute"),
                            (a = 12 === t(c.offsetWidth / 3)),
                            Qe.removeChild(u),
                            (c = null);
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u = Ce.createElement("div"),
                    c = Ce.createElement("div");
                c.style &&
                    ((c.style.backgroundClip = "content-box"),
                    (c.cloneNode(!0).style.backgroundClip = ""),
                    (Te.clearCloneStyle = "content-box" === c.style.backgroundClip),
                    Ae.extend(Te, {
                        boxSizingReliable: function () {
                            return e(), r;
                        },
                        pixelBoxStyles: function () {
                            return e(), s;
                        },
                        pixelPosition: function () {
                            return e(), i;
                        },
                        reliableMarginLeft: function () {
                            return e(), l;
                        },
                        scrollboxSize: function () {
                            return e(), a;
                        },
                        reliableTrDimensions: function () {
                            var e, t, i, r;
                            return (
                                null == o &&
                                    ((e = Ce.createElement("table")),
                                    (t = Ce.createElement("tr")),
                                    (i = Ce.createElement("div")),
                                    (e.style.cssText = "position:absolute;left:-11111px"),
                                    (t.style.height = "1px"),
                                    (i.style.height = "9px"),
                                    Qe.appendChild(e).appendChild(t).appendChild(i),
                                    (r = n.getComputedStyle(t)),
                                    (o = parseInt(r.height) > 3),
                                    Qe.removeChild(e)),
                                o
                            );
                        },
                    }));
            })();
            var gt = ["Webkit", "Moz", "ms"],
                yt = Ce.createElement("div").style,
                bt = {},
                xt = /^(none|table(?!-c[ea]).+)/,
                wt = /^--/,
                Tt = { position: "absolute", visibility: "hidden", display: "block" },
                Et = { letterSpacing: "0", fontWeight: "400" };
            Ae.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = R(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r,
                            a,
                            s,
                            o = y(t),
                            l = wt.test(t),
                            u = e.style;
                        if ((l || (t = G(o)), (s = Ae.cssHooks[t] || Ae.cssHooks[o]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                        (a = typeof n),
                            "string" === a && (r = Ue.exec(n)) && r[1] && ((n = T(e, t, r)), (a = "number")),
                            null != n &&
                                n === n &&
                                ("number" !== a || l || (n += (r && r[3]) || (Ae.cssNumber[o] ? "" : "px")),
                                Te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)));
                    }
                },
                css: function (e, t, n, i) {
                    var r,
                        a,
                        s,
                        o = y(t);
                    return (
                        wt.test(t) || (t = G(o)),
                        (s = Ae.cssHooks[t] || Ae.cssHooks[o]),
                        s && "get" in s && (r = s.get(e, !0, n)),
                        void 0 === r && (r = R(e, t, i)),
                        "normal" === r && t in Et && (r = Et[t]),
                        "" === n || n ? ((a = parseFloat(r)), !0 === n || isFinite(a) ? a || 0 : r) : r
                    );
                },
            }),
                Ae.each(["height", "width"], function (e, t) {
                    Ae.cssHooks[t] = {
                        get: function (e, n, i) {
                            if (n)
                                return !xt.test(Ae.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? Y(e, t, i)
                                    : vt(e, Tt, function () {
                                          return Y(e, t, i);
                                      });
                        },
                        set: function (e, n, i) {
                            var r,
                                a = ht(e),
                                s = !Te.scrollboxSize() && "absolute" === a.position,
                                o = s || i,
                                l = o && "border-box" === Ae.css(e, "boxSizing", !1, a),
                                u = i ? X(e, t, i, l, a) : 0;
                            return (
                                l && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - X(e, t, "border", !1, a) - 0.5)),
                                u && (r = Ue.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = Ae.css(e, t))),
                                W(e, n, u)
                            );
                        },
                    };
                }),
                (Ae.cssHooks.marginLeft = F(Te.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(R(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    vt(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                Ae.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (Ae.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ke[i] + t] = a[i] || a[i - 2] || a[0];
                            return r;
                        },
                    }),
                        "margin" !== e && (Ae.cssHooks[e + t].set = W);
                }),
                Ae.fn.extend({
                    css: function (e, t) {
                        return qe(
                            this,
                            function (e, t, n) {
                                var i,
                                    r,
                                    a = {},
                                    s = 0;
                                if (Array.isArray(t)) {
                                    for (i = ht(e), r = t.length; s < r; s++) a[t[s]] = Ae.css(e, t[s], !1, i);
                                    return a;
                                }
                                return void 0 !== n ? Ae.style(e, t, n) : Ae.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (Ae.Tween = _),
                (_.prototype = {
                    constructor: _,
                    init: function (e, t, n, i, r, a) {
                        (this.elem = e), (this.prop = n), (this.easing = r || Ae.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = a || (Ae.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = _.propHooks[this.prop];
                        return e && e.get ? e.get(this) : _.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = _.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = Ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : _.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (_.prototype.init.prototype = _.prototype),
                (_.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : ((t = Ae.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                        },
                        set: function (e) {
                            Ae.fx.step[e.prop] ? Ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!Ae.cssHooks[e.prop] && null == e.elem.style[G(e.prop)]) ? (e.elem[e.prop] = e.now) : Ae.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (_.propHooks.scrollTop = _.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (Ae.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (Ae.fx = _.prototype.init),
                (Ae.fx.step = {});
            var St,
                Ct,
                kt = /^(?:toggle|show|hide)$/,
                At = /queueHooks$/;
            (Ae.Animation = Ae.extend(te, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return T(n.elem, e, Ue.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    Ee(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ne));
                    for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (te.tweeners[n] = te.tweeners[n] || []), te.tweeners[n].unshift(t);
                },
                prefilters: [Z],
                prefilter: function (e, t) {
                    t ? te.prefilters.unshift(e) : te.prefilters.push(e);
                },
            })),
                (Ae.speed = function (e, t, n) {
                    var i = e && "object" == typeof e ? Ae.extend({}, e) : { complete: n || (!n && t) || (Ee(e) && e), duration: e, easing: (n && t) || (t && !Ee(t) && t) };
                    return (
                        Ae.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in Ae.fx.speeds ? (i.duration = Ae.fx.speeds[i.duration]) : (i.duration = Ae.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function () {
                            Ee(i.old) && i.old.call(this), i.queue && Ae.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                Ae.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(et).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                    },
                    animate: function (e, t, n, i) {
                        var r = Ae.isEmptyObject(e),
                            a = Ae.speed(t, n, i),
                            s = function () {
                                var t = te(this, Ae.extend({}, e), a);
                                (r || Ge.get(this, "finish")) && t.stop(!0);
                            };
                        return (s.finish = s), r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s);
                    },
                    stop: function (e, t, n) {
                        var i = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    r = null != e && e + "queueHooks",
                                    a = Ae.timers,
                                    s = Ge.get(this);
                                if (r) s[r] && s[r].stop && i(s[r]);
                                else for (r in s) s[r] && s[r].stop && At.test(r) && i(s[r]);
                                for (r = a.length; r--; ) a[r].elem !== this || (null != e && a[r].queue !== e) || (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
                                (!t && n) || Ae.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = Ge.get(this),
                                    i = n[e + "queue"],
                                    r = n[e + "queueHooks"],
                                    a = Ae.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, Ae.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                Ae.each(["toggle", "show", "hide"], function (e, t) {
                    var n = Ae.fn[t];
                    Ae.fn[t] = function (e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Q(t, !0), e, i, r);
                    };
                }),
                Ae.each({ slideDown: Q("show"), slideUp: Q("hide"), slideToggle: Q("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    Ae.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i);
                    };
                }),
                (Ae.timers = []),
                (Ae.fx.tick = function () {
                    var e,
                        t = 0,
                        n = Ae.timers;
                    for (St = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || Ae.fx.stop(), (St = void 0);
                }),
                (Ae.fx.timer = function (e) {
                    Ae.timers.push(e), Ae.fx.start();
                }),
                (Ae.fx.interval = 13),
                (Ae.fx.start = function () {
                    Ct || ((Ct = !0), U());
                }),
                (Ae.fx.stop = function () {
                    Ct = null;
                }),
                (Ae.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (Ae.fn.delay = function (e, t) {
                    return (
                        (e = Ae.fx ? Ae.fx.speeds[e] || e : e),
                        (t = t || "fx"),
                        this.queue(t, function (t, i) {
                            var r = n.setTimeout(t, e);
                            i.stop = function () {
                                n.clearTimeout(r);
                            };
                        })
                    );
                }),
                (function () {
                    var e = Ce.createElement("input"),
                        t = Ce.createElement("select"),
                        n = t.appendChild(Ce.createElement("option"));
                    (e.type = "checkbox"), (Te.checkOn = "" !== e.value), (Te.optSelected = n.selected), (e = Ce.createElement("input")), (e.value = "t"), (e.type = "radio"), (Te.radioValue = "t" === e.value);
                })();
            var Mt,
                Pt = Ae.expr.attrHandle;
            Ae.fn.extend({
                attr: function (e, t) {
                    return qe(this, Ae.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        Ae.removeAttr(this, e);
                    });
                },
            }),
                Ae.extend({
                    attr: function (e, t, n) {
                        var i,
                            r,
                            a = e.nodeType;
                        if (3 !== a && 8 !== a && 2 !== a)
                            return void 0 === e.getAttribute
                                ? Ae.prop(e, t, n)
                                : ((1 === a && Ae.isXMLDoc(e)) || (r = Ae.attrHooks[t.toLowerCase()] || (Ae.expr.match.bool.test(t) ? Mt : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void Ae.removeAttr(e, t)
                                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                          ? i
                                          : (e.setAttribute(t, n + ""), n)
                                      : r && "get" in r && null !== (i = r.get(e, t))
                                      ? i
                                      : ((i = Ae.find.attr(e, t)), null == i ? void 0 : i));
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!Te.radioValue && "radio" === t && u(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            i = 0,
                            r = t && t.match(Ne);
                        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                    },
                }),
                (Mt = {
                    set: function (e, t, n) {
                        return !1 === t ? Ae.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                Ae.each(Ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = Pt[t] || Ae.find.attr;
                    Pt[t] = function (e, t, i) {
                        var r,
                            a,
                            s = t.toLowerCase();
                        return i || ((a = Pt[s]), (Pt[s] = r), (r = null != n(e, t, i) ? s : null), (Pt[s] = a)), r;
                    };
                });
            var Lt = /^(?:input|select|textarea|button)$/i,
                zt = /^(?:a|area)$/i;
            Ae.fn.extend({
                prop: function (e, t) {
                    return qe(this, Ae.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[Ae.propFix[e] || e];
                    });
                },
            }),
                Ae.extend({
                    prop: function (e, t, n) {
                        var i,
                            r,
                            a = e.nodeType;
                        if (3 !== a && 8 !== a && 2 !== a)
                            return (
                                (1 === a && Ae.isXMLDoc(e)) || ((t = Ae.propFix[t] || t), (r = Ae.propHooks[t])),
                                void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = Ae.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Lt.test(e.nodeName) || (zt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                Te.optSelected ||
                    (Ae.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                Ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    Ae.propFix[this.toLowerCase()] = this;
                }),
                Ae.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a,
                            s,
                            o,
                            l = 0;
                        if (Ee(e))
                            return this.each(function (t) {
                                Ae(this).addClass(e.call(this, t, ie(this)));
                            });
                        if (((t = re(e)), t.length))
                            for (; (n = this[l++]); )
                                if (((r = ie(n)), (i = 1 === n.nodeType && " " + ne(r) + " "))) {
                                    for (s = 0; (a = t[s++]); ) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                                    (o = ne(i)), r !== o && n.setAttribute("class", o);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a,
                            s,
                            o,
                            l = 0;
                        if (Ee(e))
                            return this.each(function (t) {
                                Ae(this).removeClass(e.call(this, t, ie(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if (((t = re(e)), t.length))
                            for (; (n = this[l++]); )
                                if (((r = ie(n)), (i = 1 === n.nodeType && " " + ne(r) + " "))) {
                                    for (s = 0; (a = t[s++]); ) for (; i.indexOf(" " + a + " ") > -1; ) i = i.replace(" " + a + " ", " ");
                                    (o = ne(i)), r !== o && n.setAttribute("class", o);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            i = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && i
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : Ee(e)
                            ? this.each(function (n) {
                                  Ae(this).toggleClass(e.call(this, n, ie(this), t), t);
                              })
                            : this.each(function () {
                                  var t, r, a, s;
                                  if (i) for (r = 0, a = Ae(this), s = re(e); (t = s[r++]); ) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                                  else (void 0 !== e && "boolean" !== n) || ((t = ie(this)), t && Ge.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ge.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            i = 0;
                        for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + ne(ie(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
            var Dt = /\r/g;
            Ae.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        i,
                        r = this[0];
                    {
                        if (arguments.length)
                            return (
                                (i = Ee(e)),
                                this.each(function (n) {
                                    var r;
                                    1 === this.nodeType &&
                                        ((r = i ? e.call(this, n, Ae(this).val()) : e),
                                        null == r
                                            ? (r = "")
                                            : "number" == typeof r
                                            ? (r += "")
                                            : Array.isArray(r) &&
                                              (r = Ae.map(r, function (e) {
                                                  return null == e ? "" : e + "";
                                              })),
                                        ((t = Ae.valHooks[this.type] || Ae.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                                })
                            );
                        if (r)
                            return (t = Ae.valHooks[r.type] || Ae.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : ((n = r.value), "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n);
                    }
                },
            }),
                Ae.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = Ae.find.attr(e, "value");
                                return null != t ? t : ne(Ae.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    i,
                                    r = e.options,
                                    a = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    o = s ? null : [],
                                    l = s ? a + 1 : r.length;
                                for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                                    if (((n = r[i]), (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup")))) {
                                        if (((t = Ae(n).val()), s)) return t;
                                        o.push(t);
                                    }
                                return o;
                            },
                            set: function (e, t) {
                                for (var n, i, r = e.options, a = Ae.makeArray(t), s = r.length; s--; ) (i = r[s]), (i.selected = Ae.inArray(Ae.valHooks.option.get(i), a) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), a;
                            },
                        },
                    },
                }),
                Ae.each(["radio", "checkbox"], function () {
                    (Ae.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = Ae.inArray(Ae(e).val(), t) > -1);
                        },
                    }),
                        Te.checkOn ||
                            (Ae.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (Te.focusin = "onfocusin" in n);
            var It = /^(?:focusinfocus|focusoutblur)$/,
                Ot = function (e) {
                    e.stopPropagation();
                };
            Ae.extend(Ae.event, {
                trigger: function (e, t, i, r) {
                    var a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f = [i || Ce],
                        h = be.call(e, "type") ? e.type : e,
                        v = be.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((s = p = o = i = i || Ce),
                        3 !== i.nodeType &&
                            8 !== i.nodeType &&
                            !It.test(h + Ae.event.triggered) &&
                            (h.indexOf(".") > -1 && ((v = h.split(".")), (h = v.shift()), v.sort()),
                            (u = h.indexOf(":") < 0 && "on" + h),
                            (e = e[Ae.expando] ? e : new Ae.Event(h, "object" == typeof e && e)),
                            (e.isTrigger = r ? 2 : 3),
                            (e.namespace = v.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = i),
                            (t = null == t ? [e] : Ae.makeArray(t, [e])),
                            (d = Ae.event.special[h] || {}),
                            r || !d.trigger || !1 !== d.trigger.apply(i, t)))
                    ) {
                        if (!r && !d.noBubble && !Se(i)) {
                            for (l = d.delegateType || h, It.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), (o = s);
                            o === (i.ownerDocument || Ce) && f.push(o.defaultView || o.parentWindow || n);
                        }
                        for (a = 0; (s = f[a++]) && !e.isPropagationStopped(); )
                            (p = s),
                                (e.type = a > 1 ? l : d.bindType || h),
                                (c = (Ge.get(s, "events") || Object.create(null))[e.type] && Ge.get(s, "handle")),
                                c && c.apply(s, t),
                                (c = u && s[u]) && c.apply && Ve(s) && ((e.result = c.apply(s, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = h),
                            r ||
                                e.isDefaultPrevented() ||
                                (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                                !Ve(i) ||
                                (u &&
                                    Ee(i[h]) &&
                                    !Se(i) &&
                                    ((o = i[u]),
                                    o && (i[u] = null),
                                    (Ae.event.triggered = h),
                                    e.isPropagationStopped() && p.addEventListener(h, Ot),
                                    i[h](),
                                    e.isPropagationStopped() && p.removeEventListener(h, Ot),
                                    (Ae.event.triggered = void 0),
                                    o && (i[u] = o))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var i = Ae.extend(new Ae.Event(), n, { type: e, isSimulated: !0 });
                    Ae.event.trigger(i, null, t);
                },
            }),
                Ae.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            Ae.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return Ae.event.trigger(e, t, n, !0);
                    },
                }),
                Te.focusin ||
                    Ae.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            Ae.event.simulate(t, e.target, Ae.event.fix(e));
                        };
                        Ae.event.special[t] = {
                            setup: function () {
                                var i = this.ownerDocument || this.document || this,
                                    r = Ge.access(i, t);
                                r || i.addEventListener(e, n, !0), Ge.access(i, t, (r || 0) + 1);
                            },
                            teardown: function () {
                                var i = this.ownerDocument || this.document || this,
                                    r = Ge.access(i, t) - 1;
                                r ? Ge.access(i, t, r) : (i.removeEventListener(e, n, !0), Ge.remove(i, t));
                            },
                        };
                    });
            var $t = n.location,
                jt = { guid: Date.now() },
                Nt = /\?/;
            Ae.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new n.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                    t = void 0;
                }
                return (t && !t.getElementsByTagName("parsererror").length) || Ae.error("Invalid XML: " + e), t;
            };
            var Ht = /\[\]$/,
                Bt = /\r?\n/g,
                qt = /^(?:submit|button|image|reset|file)$/i,
                Rt = /^(?:input|select|textarea|keygen)/i;
            (Ae.param = function (e, t) {
                var n,
                    i = [],
                    r = function (e, t) {
                        var n = Ee(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !Ae.isPlainObject(e)))
                    Ae.each(e, function () {
                        r(this.name, this.value);
                    });
                else for (n in e) ae(n, e[n], t, r);
                return i.join("&");
            }),
                Ae.fn.extend({
                    serialize: function () {
                        return Ae.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = Ae.prop(this, "elements");
                            return e ? Ae.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !Ae(this).is(":disabled") && Rt.test(this.nodeName) && !qt.test(e) && (this.checked || !nt.test(e));
                            })
                            .map(function (e, t) {
                                var n = Ae(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? Ae.map(n, function (e) {
                                          return { name: t.name, value: e.replace(Bt, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(Bt, "\r\n") };
                            })
                            .get();
                    },
                });
            var Ft = /%20/g,
                Vt = /#.*$/,
                Gt = /([?&])_=[^&]*/,
                Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Yt = /^(?:GET|HEAD)$/,
                _t = /^\/\//,
                Ut = {},
                Kt = {},
                Qt = "*/".concat("*"),
                Jt = Ce.createElement("a");
            (Jt.href = $t.href),
                Ae.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: $t.href,
                        type: "GET",
                        isLocal: Xt.test($t.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Qt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Ae.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? le(le(e, Ae.ajaxSettings), t) : le(Ae.ajaxSettings, e);
                    },
                    ajaxPrefilter: se(Ut),
                    ajaxTransport: se(Kt),
                    ajax: function (e, t) {
                        function i(e, t, i, o) {
                            var u,
                                p,
                                f,
                                x,
                                w,
                                T = t;
                            c ||
                                ((c = !0),
                                l && n.clearTimeout(l),
                                (r = void 0),
                                (s = o || ""),
                                (E.readyState = e > 0 ? 4 : 0),
                                (u = (e >= 200 && e < 300) || 304 === e),
                                i && (x = ue(h, E, i)),
                                !u && Ae.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}),
                                (x = ce(h, x, E, u)),
                                u
                                    ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")), w && (Ae.lastModified[a] = w), (w = E.getResponseHeader("etag")) && (Ae.etag[a] = w)),
                                      204 === e || "HEAD" === h.type ? (T = "nocontent") : 304 === e ? (T = "notmodified") : ((T = x.state), (p = x.data), (f = x.error), (u = !f)))
                                    : ((f = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                                (E.status = e),
                                (E.statusText = (t || T) + ""),
                                u ? g.resolveWith(v, [p, T, E]) : g.rejectWith(v, [E, T, f]),
                                E.statusCode(b),
                                (b = void 0),
                                d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? p : f]),
                                y.fireWith(v, [E, T]),
                                d && (m.trigger("ajaxComplete", [E, h]), --Ae.active || Ae.event.trigger("ajaxStop")));
                        }
                        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var r,
                            a,
                            s,
                            o,
                            l,
                            u,
                            c,
                            d,
                            p,
                            f,
                            h = Ae.ajaxSetup({}, t),
                            v = h.context || h,
                            m = h.context && (v.nodeType || v.jquery) ? Ae(v) : Ae.event,
                            g = Ae.Deferred(),
                            y = Ae.Callbacks("once memory"),
                            b = h.statusCode || {},
                            x = {},
                            w = {},
                            T = "canceled",
                            E = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (c) {
                                        if (!o) for (o = {}; (t = Wt.exec(s)); ) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = o[e.toLowerCase() + " "];
                                    }
                                    return null == t ? null : t.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return c ? s : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == c && (h.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (c) E.always(e[E.status]);
                                        else for (t in e) b[t] = [b[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || T;
                                    return r && r.abort(t), i(0, t), this;
                                },
                            };
                        if (
                            (g.promise(E),
                            (h.url = ((e || h.url || $t.href) + "").replace(_t, $t.protocol + "//")),
                            (h.type = t.method || t.type || h.method || h.type),
                            (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""]),
                            null == h.crossDomain)
                        ) {
                            u = Ce.createElement("a");
                            try {
                                (u.href = h.url), (u.href = u.href), (h.crossDomain = Jt.protocol + "//" + Jt.host != u.protocol + "//" + u.host);
                            } catch (e) {
                                h.crossDomain = !0;
                            }
                        }
                        if ((h.data && h.processData && "string" != typeof h.data && (h.data = Ae.param(h.data, h.traditional)), oe(Ut, h, t, E), c)) return E;
                        (d = Ae.event && h.global),
                            d && 0 == Ae.active++ && Ae.event.trigger("ajaxStart"),
                            (h.type = h.type.toUpperCase()),
                            (h.hasContent = !Yt.test(h.type)),
                            (a = h.url.replace(Vt, "")),
                            h.hasContent
                                ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+"))
                                : ((f = h.url.slice(a.length)),
                                  h.data && (h.processData || "string" == typeof h.data) && ((a += (Nt.test(a) ? "&" : "?") + h.data), delete h.data),
                                  !1 === h.cache && ((a = a.replace(Gt, "$1")), (f = (Nt.test(a) ? "&" : "?") + "_=" + jt.guid++ + f)),
                                  (h.url = a + f)),
                            h.ifModified && (Ae.lastModified[a] && E.setRequestHeader("If-Modified-Since", Ae.lastModified[a]), Ae.etag[a] && E.setRequestHeader("If-None-Match", Ae.etag[a])),
                            ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : h.accepts["*"]);
                        for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(v, E, h) || c)) return E.abort();
                        if (((T = "abort"), y.add(h.complete), E.done(h.success), E.fail(h.error), (r = oe(Kt, h, t, E)))) {
                            if (((E.readyState = 1), d && m.trigger("ajaxSend", [E, h]), c)) return E;
                            h.async &&
                                h.timeout > 0 &&
                                (l = n.setTimeout(function () {
                                    E.abort("timeout");
                                }, h.timeout));
                            try {
                                (c = !1), r.send(x, i);
                            } catch (e) {
                                if (c) throw e;
                                i(-1, e);
                            }
                        } else i(-1, "No Transport");
                        return E;
                    },
                    getJSON: function (e, t, n) {
                        return Ae.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return Ae.get(e, void 0, t, "script");
                    },
                }),
                Ae.each(["get", "post"], function (e, t) {
                    Ae[t] = function (e, n, i, r) {
                        return Ee(n) && ((r = r || i), (i = n), (n = void 0)), Ae.ajax(Ae.extend({ url: e, type: t, dataType: r, data: n, success: i }, Ae.isPlainObject(e) && e));
                    };
                }),
                Ae.ajaxPrefilter(function (e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                }),
                (Ae._evalUrl = function (e, t, n) {
                    return Ae.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (e) {
                            Ae.globalEval(e, t, n);
                        },
                    });
                }),
                Ae.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (Ee(e) && (e = e.call(this[0])),
                                (t = Ae(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return Ee(e)
                            ? this.each(function (t) {
                                  Ae(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = Ae(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = Ee(e);
                        return this.each(function (n) {
                            Ae(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    Ae(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (Ae.expr.pseudos.hidden = function (e) {
                    return !Ae.expr.pseudos.visible(e);
                }),
                (Ae.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (Ae.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var Zt = { 0: 200, 1223: 204 },
                en = Ae.ajaxSettings.xhr();
            (Te.cors = !!en && "withCredentials" in en),
                (Te.ajax = en = !!en),
                Ae.ajaxTransport(function (e) {
                    var t, i;
                    if (Te.cors || (en && !e.crossDomain))
                        return {
                            send: function (r, a) {
                                var s,
                                    o = e.xhr();
                                if ((o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) o[s] = e.xhrFields[s];
                                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                                for (s in r) o.setRequestHeader(s, r[s]);
                                (t = function (e) {
                                    return function () {
                                        t &&
                                            ((t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                                            "abort" === e
                                                ? o.abort()
                                                : "error" === e
                                                ? "number" != typeof o.status
                                                    ? a(0, "error")
                                                    : a(o.status, o.statusText)
                                                : a(
                                                      Zt[o.status] || o.status,
                                                      o.statusText,
                                                      "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? { binary: o.response } : { text: o.responseText },
                                                      o.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (o.onload = t()),
                                    (i = o.onerror = o.ontimeout = t("error")),
                                    void 0 !== o.onabort
                                        ? (o.onabort = i)
                                        : (o.onreadystatechange = function () {
                                              4 === o.readyState &&
                                                  n.setTimeout(function () {
                                                      t && i();
                                                  });
                                          }),
                                    (t = t("abort"));
                                try {
                                    o.send((e.hasContent && e.data) || null);
                                } catch (e) {
                                    if (t) throw e;
                                }
                            },
                            abort: function () {
                                t && t();
                            },
                        };
                }),
                Ae.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                Ae.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (e) {
                            return Ae.globalEval(e), e;
                        },
                    },
                }),
                Ae.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                Ae.ajaxTransport("script", function (e) {
                    if (e.crossDomain || e.scriptAttrs) {
                        var t, n;
                        return {
                            send: function (i, r) {
                                (t = Ae("<script>")
                                    .attr(e.scriptAttrs || {})
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function (e) {
                                            t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    Ce.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                    }
                });
            var tn = [],
                nn = /(=)\?(?=&|$)|\?\?/;
            Ae.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = tn.pop() || Ae.expando + "_" + jt.guid++;
                    return (this[e] = !0), e;
                },
            }),
                Ae.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var r,
                        a,
                        s,
                        o = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                    if (o || "jsonp" === e.dataTypes[0])
                        return (
                            (r = e.jsonpCallback = Ee(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            o ? (e[o] = e[o].replace(nn, "$1" + r)) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                            (e.converters["script json"] = function () {
                                return s || Ae.error(r + " was not called"), s[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (a = n[r]),
                            (n[r] = function () {
                                s = arguments;
                            }),
                            i.always(function () {
                                void 0 === a ? Ae(n).removeProp(r) : (n[r] = a), e[r] && ((e.jsonpCallback = t.jsonpCallback), tn.push(r)), s && Ee(a) && a(s[0]), (s = a = void 0);
                            }),
                            "script"
                        );
                }),
                (Te.createHTMLDocument = (function () {
                    var e = Ce.implementation.createHTMLDocument("").body;
                    return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
                })()),
                (Ae.parseHTML = function (e, t, n) {
                    if ("string" != typeof e) return [];
                    "boolean" == typeof t && ((n = t), (t = !1));
                    var i, r, a;
                    return (
                        t || (Te.createHTMLDocument ? ((t = Ce.implementation.createHTMLDocument("")), (i = t.createElement("base")), (i.href = Ce.location.href), t.head.appendChild(i)) : (t = Ce)),
                        (r = De.exec(e)),
                        (a = !n && []),
                        r ? [t.createElement(r[1])] : ((r = A([e], t, a)), a && a.length && Ae(a).remove(), Ae.merge([], r.childNodes))
                    );
                }),
                (Ae.fn.load = function (e, t, n) {
                    var i,
                        r,
                        a,
                        s = this,
                        o = e.indexOf(" ");
                    return (
                        o > -1 && ((i = ne(e.slice(o))), (e = e.slice(0, o))),
                        Ee(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                        s.length > 0 &&
                            Ae.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                .done(function (e) {
                                    (a = arguments), s.html(i ? Ae("<div>").append(Ae.parseHTML(e)).find(i) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            s.each(function () {
                                                n.apply(this, a || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                (Ae.expr.pseudos.animated = function (e) {
                    return Ae.grep(Ae.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (Ae.offset = {
                    setOffset: function (e, t, n) {
                        var i,
                            r,
                            a,
                            s,
                            o,
                            l,
                            u,
                            c = Ae.css(e, "position"),
                            d = Ae(e),
                            p = {};
                        "static" === c && (e.style.position = "relative"),
                            (o = d.offset()),
                            (a = Ae.css(e, "top")),
                            (l = Ae.css(e, "left")),
                            (u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1),
                            u ? ((i = d.position()), (s = i.top), (r = i.left)) : ((s = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
                            Ee(t) && (t = t.call(e, n, Ae.extend({}, o))),
                            null != t.top && (p.top = t.top - o.top + s),
                            null != t.left && (p.left = t.left - o.left + r),
                            "using" in t ? t.using.call(e, p) : ("number" == typeof p.top && (p.top += "px"), "number" == typeof p.left && (p.left += "px"), d.css(p));
                    },
                }),
                Ae.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      Ae.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            i = this[0];
                        if (i) return i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                i = this[0],
                                r = { top: 0, left: 0 };
                            if ("fixed" === Ae.css(i, "position")) t = i.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ae.css(e, "position"); ) e = e.parentNode;
                                e && e !== i && 1 === e.nodeType && ((r = Ae(e).offset()), (r.top += Ae.css(e, "borderTopWidth", !0)), (r.left += Ae.css(e, "borderLeftWidth", !0)));
                            }
                            return { top: t.top - r.top - Ae.css(i, "marginTop", !0), left: t.left - r.left - Ae.css(i, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === Ae.css(e, "position"); ) e = e.offsetParent;
                            return e || Qe;
                        });
                    },
                }),
                Ae.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    Ae.fn[e] = function (i) {
                        return qe(
                            this,
                            function (e, i, r) {
                                var a;
                                if ((Se(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView), void 0 === r)) return a ? a[t] : e[i];
                                a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : (e[i] = r);
                            },
                            e,
                            i,
                            arguments.length
                        );
                    };
                }),
                Ae.each(["top", "left"], function (e, t) {
                    Ae.cssHooks[t] = F(Te.pixelPosition, function (e, n) {
                        if (n) return (n = R(e, t)), ft.test(n) ? Ae(e).position()[t] + "px" : n;
                    });
                }),
                Ae.each({ Height: "height", Width: "width" }, function (e, t) {
                    Ae.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                        Ae.fn[i] = function (r, a) {
                            var s = arguments.length && (n || "boolean" != typeof r),
                                o = n || (!0 === r || !0 === a ? "margin" : "border");
                            return qe(
                                this,
                                function (t, n, r) {
                                    var a;
                                    return Se(t)
                                        ? 0 === i.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((a = t.documentElement), Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e]))
                                        : void 0 === r
                                        ? Ae.css(t, n, o)
                                        : Ae.style(t, n, r, o);
                                },
                                t,
                                s ? r : void 0,
                                s
                            );
                        };
                    });
                }),
                Ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    Ae.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                Ae.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, i) {
                        return this.on(t, e, n, i);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                Ae.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    Ae.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                });
            var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (Ae.proxy = function (e, t) {
                var n, i, r;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), Ee(e)))
                    return (
                        (i = fe.call(arguments, 2)),
                        (r = function () {
                            return e.apply(t || this, i.concat(fe.call(arguments)));
                        }),
                        (r.guid = e.guid = e.guid || Ae.guid++),
                        r
                    );
            }),
                (Ae.holdReady = function (e) {
                    e ? Ae.readyWait++ : Ae.ready(!0);
                }),
                (Ae.isArray = Array.isArray),
                (Ae.parseJSON = JSON.parse),
                (Ae.nodeName = u),
                (Ae.isFunction = Ee),
                (Ae.isWindow = Se),
                (Ae.camelCase = y),
                (Ae.type = o),
                (Ae.now = Date.now),
                (Ae.isNumeric = function (e) {
                    var t = Ae.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                (Ae.trim = function (e) {
                    return null == e ? "" : (e + "").replace(rn, "");
                }),
                (i = []),
                void 0 !==
                    (r = function () {
                        return Ae;
                    }.apply(t, i)) && (e.exports = r);
            var an = n.jQuery,
                sn = n.$;
            return (
                (Ae.noConflict = function (e) {
                    return n.$ === Ae && (n.$ = sn), e && n.jQuery === Ae && (n.jQuery = an), Ae;
                }),
                void 0 === a && (n.jQuery = n.$ = Ae),
                Ae
            );
        });
    },
    function (e, t, n) {
        !(function (t, n) {
            e.exports = n();
        })(0, function () {
            "use strict";
            function e(e, t) {
                var n = [],
                    i = 0;
                if (e && !t && e instanceof $e) return e;
                if (e)
                    if ("string" == typeof e) {
                        var r,
                            a,
                            s = e.trim();
                        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                            var o = "div";
                            for (
                                0 === s.indexOf("<li") && (o = "ul"),
                                    0 === s.indexOf("<tr") && (o = "tbody"),
                                    (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (o = "tr"),
                                    0 === s.indexOf("<tbody") && (o = "table"),
                                    0 === s.indexOf("<option") && (o = "select"),
                                    a = Ie.createElement(o),
                                    a.innerHTML = s,
                                    i = 0;
                                i < a.childNodes.length;
                                i += 1
                            )
                                n.push(a.childNodes[i]);
                        } else for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || Ie).querySelectorAll(e.trim()) : [Ie.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i]);
                    } else if (e.nodeType || e === Oe || e === Ie) n.push(e);
                    else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) n.push(e[i]);
                return new $e(n);
            }
            function t(e) {
                for (var t = [], n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            }
            function n(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
                return this;
            }
            function i(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
                return this;
            }
            function r(e) {
                return !!this[0] && this[0].classList.contains(e);
            }
            function a(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
                return this;
            }
            function s(e, t) {
                var n = arguments;
                {
                    if (1 !== arguments.length || "string" != typeof e) {
                        for (var i = 0; i < this.length; i += 1)
                            if (2 === n.length) this[i].setAttribute(e, t);
                            else for (var r in e) (this[i][r] = e[r]), this[i].setAttribute(r, e[r]);
                        return this;
                    }
                    if (this[0]) return this[0].getAttribute(e);
                }
            }
            function o(e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            }
            function l(e, t) {
                var n;
                {
                    if (void 0 !== t) {
                        for (var i = 0; i < this.length; i += 1) (n = this[i]), n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), (n.dom7ElementDataStorage[e] = t);
                        return this;
                    }
                    if ((n = this[0])) {
                        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                        var r = n.getAttribute("data-" + e);
                        if (r) return r;
                        return;
                    }
                }
            }
            function u(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var n = this[t].style;
                    (n.webkitTransform = e), (n.transform = e);
                }
                return this;
            }
            function c(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var n = this[t].style;
                    (n.webkitTransitionDuration = e), (n.transitionDuration = e);
                }
                return this;
            }
            function d() {
                function t(t) {
                    var n = t.target;
                    if (n) {
                        var i = t.target.dom7EventData || [];
                        if ((i.indexOf(t) < 0 && i.unshift(t), e(n).is(o))) l.apply(n, i);
                        else for (var r = e(n).parents(), a = 0; a < r.length; a += 1) e(r[a]).is(o) && l.apply(r[a], i);
                    }
                }
                function n(e) {
                    var t = e && e.target ? e.target.dom7EventData || [] : [];
                    t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t);
                }
                for (var i, r = [], a = arguments.length; a--; ) r[a] = arguments[a];
                var s = r[0],
                    o = r[1],
                    l = r[2],
                    u = r[3];
                "function" == typeof r[1] && ((i = r), (s = i[0]), (l = i[1]), (u = i[2]), (o = void 0)), u || (u = !1);
                for (var c, d = s.split(" "), p = 0; p < this.length; p += 1) {
                    var f = this[p];
                    if (o)
                        for (c = 0; c < d.length; c += 1) {
                            var h = d[c];
                            f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[h] || (f.dom7LiveListeners[h] = []), f.dom7LiveListeners[h].push({ listener: l, proxyListener: t }), f.addEventListener(h, t, u);
                        }
                    else
                        for (c = 0; c < d.length; c += 1) {
                            var v = d[c];
                            f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[v] || (f.dom7Listeners[v] = []), f.dom7Listeners[v].push({ listener: l, proxyListener: n }), f.addEventListener(v, n, u);
                        }
                }
                return this;
            }
            function p() {
                for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                var i = t[0],
                    r = t[1],
                    a = t[2],
                    s = t[3];
                "function" == typeof t[1] && ((e = t), (i = e[0]), (a = e[1]), (s = e[2]), (r = void 0)), s || (s = !1);
                for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                    for (var u = o[l], c = 0; c < this.length; c += 1) {
                        var d = this[c],
                            p = void 0;
                        if ((!r && d.dom7Listeners ? (p = d.dom7Listeners[u]) : r && d.dom7LiveListeners && (p = d.dom7LiveListeners[u]), p && p.length))
                            for (var f = p.length - 1; f >= 0; f -= 1) {
                                var h = p[f];
                                a && h.listener === a
                                    ? (d.removeEventListener(u, h.proxyListener, s), p.splice(f, 1))
                                    : a && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === a
                                    ? (d.removeEventListener(u, h.proxyListener, s), p.splice(f, 1))
                                    : a || (d.removeEventListener(u, h.proxyListener, s), p.splice(f, 1));
                            }
                    }
                return this;
            }
            function f() {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
                    for (var a = n[r], s = 0; s < this.length; s += 1) {
                        var o = this[s],
                            l = void 0;
                        try {
                            l = new Oe.CustomEvent(a, { detail: i, bubbles: !0, cancelable: !0 });
                        } catch (e) {
                            (l = Ie.createEvent("Event")), l.initEvent(a, !0, !0), (l.detail = i);
                        }
                        (o.dom7EventData = e.filter(function (e, t) {
                            return t > 0;
                        })),
                            o.dispatchEvent(l),
                            (o.dom7EventData = []),
                            delete o.dom7EventData;
                    }
                return this;
            }
            function h(e) {
                function t(a) {
                    if (a.target === this) for (e.call(this, a), n = 0; n < i.length; n += 1) r.off(i[n], t);
                }
                var n,
                    i = ["webkitTransitionEnd", "transitionend"],
                    r = this;
                if (e) for (n = 0; n < i.length; n += 1) r.on(i[n], t);
                return this;
            }
            function v(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            }
            function m(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            }
            function g() {
                if (this.length > 0) {
                    var e = this[0],
                        t = e.getBoundingClientRect(),
                        n = Ie.body,
                        i = e.clientTop || n.clientTop || 0,
                        r = e.clientLeft || n.clientLeft || 0,
                        a = e === Oe ? Oe.scrollY : e.scrollTop,
                        s = e === Oe ? Oe.scrollX : e.scrollLeft;
                    return { top: t.top + a - i, left: t.left + s - r };
                }
                return null;
            }
            function y() {
                return this[0] ? Oe.getComputedStyle(this[0], null) : {};
            }
            function b(e, t) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1) for (var i in e) this[n].style[i] = e[i];
                        return this;
                    }
                    if (this[0]) return Oe.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                    return this;
                }
                return this;
            }
            function x(e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
                return this;
            }
            function w(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            }
            function T(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            }
            function E(t) {
                var n,
                    i,
                    r = this[0];
                if (!r || void 0 === t) return !1;
                if ("string" == typeof t) {
                    if (r.matches) return r.matches(t);
                    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                    if (r.msMatchesSelector) return r.msMatchesSelector(t);
                    for (n = e(t), i = 0; i < n.length; i += 1) if (n[i] === r) return !0;
                    return !1;
                }
                if (t === Ie) return r === Ie;
                if (t === Oe) return r === Oe;
                if (t.nodeType || t instanceof $e) {
                    for (n = t.nodeType ? [t] : t, i = 0; i < n.length; i += 1) if (n[i] === r) return !0;
                    return !1;
                }
                return !1;
            }
            function S() {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            }
            function C(e) {
                if (void 0 === e) return this;
                var t,
                    n = this.length;
                return e > n - 1 ? new $e([]) : e < 0 ? ((t = n + e), new $e(t < 0 ? [] : [this[t]])) : new $e([this[e]]);
            }
            function k() {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var n, i = 0; i < e.length; i += 1) {
                    n = e[i];
                    for (var r = 0; r < this.length; r += 1)
                        if ("string" == typeof n) {
                            var a = Ie.createElement("div");
                            for (a.innerHTML = n; a.firstChild; ) this[r].appendChild(a.firstChild);
                        } else if (n instanceof $e) for (var s = 0; s < n.length; s += 1) this[r].appendChild(n[s]);
                        else this[r].appendChild(n);
                }
                return this;
            }
            function A(e) {
                var t, n;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var i = Ie.createElement("div");
                        for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
                    } else if (e instanceof $e) for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            }
            function M(t) {
                return new $e(this.length > 0 ? (t ? (this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : []) : this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : []);
            }
            function P(t) {
                var n = [],
                    i = this[0];
                if (!i) return new $e([]);
                for (; i.nextElementSibling; ) {
                    var r = i.nextElementSibling;
                    t ? e(r).is(t) && n.push(r) : n.push(r), (i = r);
                }
                return new $e(n);
            }
            function L(t) {
                if (this.length > 0) {
                    var n = this[0];
                    return new $e(t ? (n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : []) : n.previousElementSibling ? [n.previousElementSibling] : []);
                }
                return new $e([]);
            }
            function z(t) {
                var n = [],
                    i = this[0];
                if (!i) return new $e([]);
                for (; i.previousElementSibling; ) {
                    var r = i.previousElementSibling;
                    t ? e(r).is(t) && n.push(r) : n.push(r), (i = r);
                }
                return new $e(n);
            }
            function D(n) {
                for (var i = [], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (n ? e(this[r].parentNode).is(n) && i.push(this[r].parentNode) : i.push(this[r].parentNode));
                return e(t(i));
            }
            function I(n) {
                for (var i = [], r = 0; r < this.length; r += 1) for (var a = this[r].parentNode; a; ) n ? e(a).is(n) && i.push(a) : i.push(a), (a = a.parentNode);
                return e(t(i));
            }
            function O(e) {
                var t = this;
                return void 0 === e ? new $e([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            }
            function $(e) {
                for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
                return new $e(t);
            }
            function j(n) {
                for (var i = [], r = 0; r < this.length; r += 1) for (var a = this[r].childNodes, s = 0; s < a.length; s += 1) n ? 1 === a[s].nodeType && e(a[s]).is(n) && i.push(a[s]) : 1 === a[s].nodeType && i.push(a[s]);
                return new $e(t(i));
            }
            function N() {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            }
            function H() {
                for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                var i,
                    r,
                    a = this;
                for (i = 0; i < t.length; i += 1) {
                    var s = e(t[i]);
                    for (r = 0; r < s.length; r += 1) (a[a.length] = s[r]), (a.length += 1);
                }
                return a;
            }
            function B() {
                var e,
                    t,
                    n = this,
                    i = n.$el;
                (e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth),
                    (t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight),
                    (0 === e && n.isHorizontal()) ||
                        (0 === t && n.isVertical()) ||
                        ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                        (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                        Ne.extend(n, { width: e, height: t, size: n.isHorizontal() ? e : t }));
            }
            function q() {
                var e = this,
                    t = e.params,
                    n = e.$wrapperEl,
                    i = e.size,
                    r = e.rtlTranslate,
                    a = e.wrongRTL,
                    s = e.virtual && t.virtual.enabled,
                    o = s ? e.virtual.slides.length : e.slides.length,
                    l = n.children("." + e.params.slideClass),
                    u = s ? e.virtual.slides.length : l.length,
                    c = [],
                    d = [],
                    p = [],
                    f = t.slidesOffsetBefore;
                "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
                var h = t.slidesOffsetAfter;
                "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
                var v = e.snapGrid.length,
                    m = e.snapGrid.length,
                    g = t.spaceBetween,
                    y = -f,
                    b = 0,
                    x = 0;
                if (void 0 !== i) {
                    "string" == typeof g && g.indexOf("%") >= 0 && (g = (parseFloat(g.replace("%", "")) / 100) * i), (e.virtualSize = -g), r ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" });
                    var w;
                    t.slidesPerColumn > 1 &&
                        ((w = Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
                    for (var T, E = t.slidesPerColumn, S = w / E, C = Math.floor(u / t.slidesPerColumn), k = 0; k < u; k += 1) {
                        T = 0;
                        var A = l.eq(k);
                        if (t.slidesPerColumn > 1) {
                            var M = void 0,
                                P = void 0,
                                L = void 0;
                            if ("column" === t.slidesPerColumnFill || ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1)) {
                                if ("column" === t.slidesPerColumnFill) (P = Math.floor(k / E)), (L = k - P * E), (P > C || (P === C && L === E - 1)) && (L += 1) >= E && ((L = 0), (P += 1));
                                else {
                                    var z = Math.floor(k / t.slidesPerGroup);
                                    (L = Math.floor(k / t.slidesPerView) - z * t.slidesPerColumn), (P = k - L * t.slidesPerView - z * t.slidesPerView);
                                }
                                (M = P + (L * w) / E), A.css({ "-webkit-box-ordinal-group": M, "-moz-box-ordinal-group": M, "-ms-flex-order": M, "-webkit-order": M, order: M });
                            } else (L = Math.floor(k / S)), (P = k - L * S);
                            A.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px")
                                .attr("data-swiper-column", P)
                                .attr("data-swiper-row", L);
                        }
                        if ("none" !== A.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var D = Oe.getComputedStyle(A[0], null),
                                    I = A[0].style.transform,
                                    O = A[0].style.webkitTransform;
                                if ((I && (A[0].style.transform = "none"), O && (A[0].style.webkitTransform = "none"), t.roundLengths)) T = e.isHorizontal() ? A.outerWidth(!0) : A.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    var $ = parseFloat(D.getPropertyValue("width")),
                                        j = parseFloat(D.getPropertyValue("padding-left")),
                                        N = parseFloat(D.getPropertyValue("padding-right")),
                                        H = parseFloat(D.getPropertyValue("margin-left")),
                                        B = parseFloat(D.getPropertyValue("margin-right")),
                                        q = D.getPropertyValue("box-sizing");
                                    T = q && "border-box" === q && !Be.isIE ? $ + H + B : $ + j + N + H + B;
                                } else {
                                    var R = parseFloat(D.getPropertyValue("height")),
                                        F = parseFloat(D.getPropertyValue("padding-top")),
                                        V = parseFloat(D.getPropertyValue("padding-bottom")),
                                        G = parseFloat(D.getPropertyValue("margin-top")),
                                        W = parseFloat(D.getPropertyValue("margin-bottom")),
                                        X = D.getPropertyValue("box-sizing");
                                    T = X && "border-box" === X && !Be.isIE ? R + G + W : R + F + V + G + W;
                                }
                                I && (A[0].style.transform = I), O && (A[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T));
                            } else (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView), t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? (l[k].style.width = T + "px") : (l[k].style.height = T + "px"));
                            l[k] && (l[k].swiperSlideSize = T),
                                p.push(T),
                                t.centeredSlides
                                    ? ((y = y + T / 2 + b / 2 + g),
                                      0 === b && 0 !== k && (y = y - i / 2 - g),
                                      0 === k && (y = y - i / 2 - g),
                                      Math.abs(y) < 0.001 && (y = 0),
                                      t.roundLengths && (y = Math.floor(y)),
                                      x % t.slidesPerGroup == 0 && c.push(y),
                                      d.push(y))
                                    : (t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && c.push(y), d.push(y), (y = y + T + g)),
                                (e.virtualSize += T + g),
                                (b = T),
                                (x += 1);
                        }
                    }
                    e.virtualSize = Math.max(e.virtualSize, i) + h;
                    var Y;
                    if (
                        (r && a && ("slide" === t.effect || "coverflow" === t.effect) && n.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                        (He.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? n.css({ width: e.virtualSize + t.spaceBetween + "px" }) : n.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                        t.slidesPerColumn > 1 &&
                            ((e.virtualSize = (T + t.spaceBetween) * w),
                            (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                            e.isHorizontal() ? n.css({ width: e.virtualSize + t.spaceBetween + "px" }) : n.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                            t.centeredSlides))
                    ) {
                        Y = [];
                        for (var _ = 0; _ < c.length; _ += 1) {
                            var U = c[_];
                            t.roundLengths && (U = Math.floor(U)), c[_] < e.virtualSize + c[0] && Y.push(U);
                        }
                        c = Y;
                    }
                    if (!t.centeredSlides) {
                        Y = [];
                        for (var K = 0; K < c.length; K += 1) {
                            var Q = c[K];
                            t.roundLengths && (Q = Math.floor(Q)), c[K] <= e.virtualSize - i && Y.push(Q);
                        }
                        (c = Y), Math.floor(e.virtualSize - i) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - i);
                    }
                    if ((0 === c.length && (c = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? (r ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" })) : l.css({ marginBottom: g + "px" })), t.centerInsufficientSlides)) {
                        var J = 0;
                        if (
                            (p.forEach(function (e) {
                                J += e + (t.spaceBetween ? t.spaceBetween : 0);
                            }),
                            (J -= t.spaceBetween) < i)
                        ) {
                            var Z = (i - J) / 2;
                            c.forEach(function (e, t) {
                                c[t] = e - Z;
                            }),
                                d.forEach(function (e, t) {
                                    d[t] = e + Z;
                                });
                        }
                    }
                    Ne.extend(e, { slides: l, snapGrid: c, slidesGrid: d, slidesSizesGrid: p }),
                        u !== o && e.emit("slidesLengthChange"),
                        c.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                        d.length !== m && e.emit("slidesGridLengthChange"),
                        (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
                }
            }
            function R(e) {
                var t,
                    n = this,
                    i = [],
                    r = 0;
                if (("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && n.params.slidesPerView > 1))
                    for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                        var a = n.activeIndex + t;
                        if (a > n.slides.length) break;
                        i.push(n.slides.eq(a)[0]);
                    }
                else i.push(n.slides.eq(n.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if (void 0 !== i[t]) {
                        var s = i[t].offsetHeight;
                        r = s > r ? s : r;
                    }
                r && n.$wrapperEl.css("height", r + "px");
            }
            function F() {
                for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop;
            }
            function V(t) {
                void 0 === t && (t = (this && this.translate) || 0);
                var n = this,
                    i = n.params,
                    r = n.slides,
                    a = n.rtlTranslate;
                if (0 !== r.length) {
                    void 0 === r[0].swiperSlideOffset && n.updateSlidesOffset();
                    var s = -t;
                    a && (s = t), r.removeClass(i.slideVisibleClass), (n.visibleSlidesIndexes = []), (n.visibleSlides = []);
                    for (var o = 0; o < r.length; o += 1) {
                        var l = r[o],
                            u = (s + (i.centeredSlides ? n.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility) {
                            var c = -(s - l.swiperSlideOffset),
                                d = c + n.slidesSizesGrid[o];
                            ((c >= 0 && c < n.size - 1) || (d > 1 && d <= n.size) || (c <= 0 && d >= n.size)) && (n.visibleSlides.push(l), n.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass));
                        }
                        l.progress = a ? -u : u;
                    }
                    n.visibleSlides = e(n.visibleSlides);
                }
            }
            function G(e) {
                void 0 === e && (e = (this && this.translate) || 0);
                var t = this,
                    n = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    r = t.progress,
                    a = t.isBeginning,
                    s = t.isEnd,
                    o = a,
                    l = s;
                0 === i ? ((r = 0), (a = !0), (s = !0)) : ((r = (e - t.minTranslate()) / i), (a = r <= 0), (s = r >= 1)),
                    Ne.extend(t, { progress: r, isBeginning: a, isEnd: s }),
                    (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e),
                    a && !o && t.emit("reachBeginning toEdge"),
                    s && !l && t.emit("reachEnd toEdge"),
                    ((o && !a) || (l && !s)) && t.emit("fromEdge"),
                    t.emit("progress", r);
            }
            function W() {
                var e = this,
                    t = e.slides,
                    n = e.params,
                    i = e.$wrapperEl,
                    r = e.activeIndex,
                    a = e.realIndex,
                    s = e.virtual && n.virtual.enabled;
                t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
                var o;
                (o = s ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)),
                    o.addClass(n.slideActiveClass),
                    n.loop &&
                        (o.hasClass(n.slideDuplicateClass)
                            ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass)
                            : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
                var l = o
                    .nextAll("." + n.slideClass)
                    .eq(0)
                    .addClass(n.slideNextClass);
                n.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(n.slideNextClass));
                var u = o
                    .prevAll("." + n.slideClass)
                    .eq(0)
                    .addClass(n.slidePrevClass);
                n.loop && 0 === u.length && ((u = t.eq(-1)), u.addClass(n.slidePrevClass)),
                    n.loop &&
                        (l.hasClass(n.slideDuplicateClass)
                            ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass)
                            : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass),
                        u.hasClass(n.slideDuplicateClass)
                            ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass)
                            : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass));
            }
            function X(e) {
                var t,
                    n = this,
                    i = n.rtlTranslate ? n.translate : -n.translate,
                    r = n.slidesGrid,
                    a = n.snapGrid,
                    s = n.params,
                    o = n.activeIndex,
                    l = n.realIndex,
                    u = n.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? (i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? (c = d) : i >= r[d] && i < r[d + 1] && (c = d + 1)) : i >= r[d] && (c = d);
                    s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                }
                if (((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(c / s.slidesPerGroup)), t >= a.length && (t = a.length - 1), c === o)) return void (t !== u && ((n.snapIndex = t), n.emit("snapIndexChange")));
                var p = parseInt(n.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                Ne.extend(n, { snapIndex: t, realIndex: p, previousIndex: o, activeIndex: c }),
                    n.emit("activeIndexChange"),
                    n.emit("snapIndexChange"),
                    l !== p && n.emit("realIndexChange"),
                    (n.initialized || n.runCallbacksOnInit) && n.emit("slideChange");
            }
            function Y(t) {
                var n = this,
                    i = n.params,
                    r = e(t.target).closest("." + i.slideClass)[0],
                    a = !1;
                if (r) for (var s = 0; s < n.slides.length; s += 1) n.slides[s] === r && (a = !0);
                if (!r || !a) return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
                (n.clickedSlide = r),
                    n.virtual && n.params.virtual.enabled ? (n.clickedIndex = parseInt(e(r).attr("data-swiper-slide-index"), 10)) : (n.clickedIndex = e(r).index()),
                    i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
            }
            function _(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this,
                    n = t.params,
                    i = t.rtlTranslate,
                    r = t.translate,
                    a = t.$wrapperEl;
                if (n.virtualTranslate) return i ? -r : r;
                var s = Ne.getTranslate(a[0], e);
                return i && (s = -s), s || 0;
            }
            function U(e, t) {
                var n = this,
                    i = n.rtlTranslate,
                    r = n.params,
                    a = n.$wrapperEl,
                    s = n.progress,
                    o = 0,
                    l = 0;
                n.isHorizontal() ? (o = i ? -e : e) : (l = e),
                    r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                    r.virtualTranslate || (He.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")),
                    (n.previousTranslate = n.translate),
                    (n.translate = n.isHorizontal() ? o : l);
                var u,
                    c = n.maxTranslate() - n.minTranslate();
                (u = 0 === c ? 0 : (e - n.minTranslate()) / c), u !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
            }
            function K() {
                return -this.snapGrid[0];
            }
            function Q() {
                return -this.snapGrid[this.snapGrid.length - 1];
            }
            function J(e, t) {
                var n = this;
                n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
            }
            function Z(e, t) {
                void 0 === e && (e = !0);
                var n = this,
                    i = n.activeIndex,
                    r = n.params,
                    a = n.previousIndex;
                r.autoHeight && n.updateAutoHeight();
                var s = t;
                if ((s || (s = i > a ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a)) {
                    if ("reset" === s) return void n.emit("slideResetTransitionStart");
                    n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart");
                }
            }
            function ee(e, t) {
                void 0 === e && (e = !0);
                var n = this,
                    i = n.activeIndex,
                    r = n.previousIndex;
                (n.animating = !1), n.setTransition(0);
                var a = t;
                if ((a || (a = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r)) {
                    if ("reset" === a) return void n.emit("slideResetTransitionEnd");
                    n.emit("slideChangeTransitionEnd"), "next" === a ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd");
                }
            }
            function te(e, t, n, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                var r = this,
                    a = e;
                a < 0 && (a = 0);
                var s = r.params,
                    o = r.snapGrid,
                    l = r.slidesGrid,
                    u = r.previousIndex,
                    c = r.activeIndex,
                    d = r.rtlTranslate;
                if (r.animating && s.preventInteractionOnTransition) return !1;
                var p = Math.floor(a / s.slidesPerGroup);
                p >= o.length && (p = o.length - 1), (c || s.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart");
                var f = -o[p];
                if ((r.updateProgress(f), s.normalizeSlideIndex)) for (var h = 0; h < l.length; h += 1) -Math.floor(100 * f) >= Math.floor(100 * l[h]) && (a = h);
                if (r.initialized && a !== c) {
                    if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (c || 0) !== a) return !1;
                }
                var v;
                return (
                    (v = a > c ? "next" : a < c ? "prev" : "reset"),
                    (d && -f === r.translate) || (!d && f === r.translate)
                        ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(f), "reset" !== v && (r.transitionStart(n, v), r.transitionEnd(n, v)), !1)
                        : (0 !== t && He.transition
                              ? (r.setTransition(t),
                                r.setTranslate(f),
                                r.updateActiveIndex(a),
                                r.updateSlidesClasses(),
                                r.emit("beforeTransitionStart", t, i),
                                r.transitionStart(n, v),
                                r.animating ||
                                    ((r.animating = !0),
                                    r.onSlideToWrapperTransitionEnd ||
                                        (r.onSlideToWrapperTransitionEnd = function (e) {
                                            r &&
                                                !r.destroyed &&
                                                e.target === this &&
                                                (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                                (r.onSlideToWrapperTransitionEnd = null),
                                                delete r.onSlideToWrapperTransitionEnd,
                                                r.transitionEnd(n, v));
                                        }),
                                    r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                    r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)))
                              : (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, v), r.transitionEnd(n, v)),
                          !0)
                );
            }
            function ne(e, t, n, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                var r = this,
                    a = e;
                return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i);
            }
            function ie(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    r = i.params,
                    a = i.animating;
                return r.loop ? !a && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n);
            }
            function re(e, t, n) {
                function i(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var r = this,
                    a = r.params,
                    s = r.animating,
                    o = r.snapGrid,
                    l = r.slidesGrid,
                    u = r.rtlTranslate;
                if (a.loop) {
                    if (s) return !1;
                    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
                }
                var c,
                    d = u ? r.translate : -r.translate,
                    p = i(d),
                    f = o.map(function (e) {
                        return i(e);
                    }),
                    h =
                        (l.map(function (e) {
                            return i(e);
                        }),
                        o[f.indexOf(p)],
                        o[f.indexOf(p) - 1]);
                return void 0 !== h && (c = l.indexOf(h)) < 0 && (c = r.activeIndex - 1), r.slideTo(c, e, t, n);
            }
            function ae(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this;
                return i.slideTo(i.activeIndex, e, t, n);
            }
            function se(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    r = i.activeIndex,
                    a = Math.floor(r / i.params.slidesPerGroup);
                if (a < i.snapGrid.length - 1) {
                    var s = i.rtlTranslate ? i.translate : -i.translate,
                        o = i.snapGrid[a];
                    s - o > (i.snapGrid[a + 1] - o) / 2 && (r = i.params.slidesPerGroup);
                }
                return i.slideTo(r, e, t, n);
            }
            function oe() {
                var t,
                    n = this,
                    i = n.params,
                    r = n.$wrapperEl,
                    a = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView,
                    s = n.clickedIndex;
                if (i.loop) {
                    if (n.animating) return;
                    (t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        i.centeredSlides
                            ? s < n.loopedSlides - a / 2 || s > n.slides.length - n.loopedSlides + a / 2
                                ? (n.loopFix(),
                                  (s = r
                                      .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                      .eq(0)
                                      .index()),
                                  Ne.nextTick(function () {
                                      n.slideTo(s);
                                  }))
                                : n.slideTo(s)
                            : s > n.slides.length - a
                            ? (n.loopFix(),
                              (s = r
                                  .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                  .eq(0)
                                  .index()),
                              Ne.nextTick(function () {
                                  n.slideTo(s);
                              }))
                            : n.slideTo(s);
                } else n.slideTo(s);
            }
            function le() {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl;
                i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                var r = i.children("." + n.slideClass);
                if (n.loopFillGroupWithBlank) {
                    var a = n.slidesPerGroup - (r.length % n.slidesPerGroup);
                    if (a !== n.slidesPerGroup) {
                        for (var s = 0; s < a; s += 1) {
                            var o = e(Ie.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                            i.append(o);
                        }
                        r = i.children("." + n.slideClass);
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length),
                    (t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10)),
                    (t.loopedSlides += n.loopAdditionalSlides),
                    t.loopedSlides > r.length && (t.loopedSlides = r.length);
                var l = [],
                    u = [];
                r.each(function (n, i) {
                    var a = e(i);
                    n < t.loopedSlides && u.push(i), n < r.length && n >= r.length - t.loopedSlides && l.push(i), a.attr("data-swiper-slide-index", n);
                });
                for (var c = 0; c < u.length; c += 1) i.append(e(u[c].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (var d = l.length - 1; d >= 0; d -= 1) i.prepend(e(l[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
            }
            function ue() {
                var e,
                    t = this,
                    n = t.params,
                    i = t.activeIndex,
                    r = t.slides,
                    a = t.loopedSlides,
                    s = t.allowSlidePrev,
                    o = t.allowSlideNext,
                    l = t.snapGrid,
                    u = t.rtlTranslate;
                (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
                var c = -l[i],
                    d = c - t.getTranslate();
                if (i < a) {
                    (e = r.length - 3 * a + i), (e += a);
                    t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((u ? -t.translate : t.translate) - d);
                } else if (("auto" === n.slidesPerView && i >= 2 * a) || i >= r.length - a) {
                    (e = -r.length + i + a), (e += a);
                    var p = t.slideTo(e, 0, !1, !0);
                    p && 0 !== d && t.setTranslate((u ? -t.translate : t.translate) - d);
                }
                (t.allowSlidePrev = s), (t.allowSlideNext = o);
            }
            function ce() {
                var e = this,
                    t = e.$wrapperEl,
                    n = e.params,
                    i = e.slides;
                t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
            }
            function de(e) {
                var t = this;
                if (!(He.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked))) {
                    var n = t.el;
                    (n.style.cursor = "move"), (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (n.style.cursor = e ? "grabbing" : "grab");
                }
            }
            function pe() {
                var e = this;
                He.touch || (e.params.watchOverflow && e.isLocked) || (e.el.style.cursor = "");
            }
            function fe(e) {
                var t = this,
                    n = t.$wrapperEl,
                    i = t.params;
                if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
                else n.append(e);
                i.loop && t.loopCreate(), (i.observer && He.observer) || t.update();
            }
            function he(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    r = t.activeIndex;
                n.loop && t.loopDestroy();
                var a = r + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                    a = r + e.length;
                } else i.prepend(e);
                n.loop && t.loopCreate(), (n.observer && He.observer) || t.update(), t.slideTo(a, 0, !1);
            }
            function ve(e, t) {
                var n = this,
                    i = n.$wrapperEl,
                    r = n.params,
                    a = n.activeIndex,
                    s = a;
                r.loop && ((s -= n.loopedSlides), n.loopDestroy(), (n.slides = i.children("." + r.slideClass)));
                var o = n.slides.length;
                if (e <= 0) return void n.prependSlide(t);
                if (e >= o) return void n.appendSlide(t);
                for (var l = s > e ? s + 1 : s, u = [], c = o - 1; c >= e; c -= 1) {
                    var d = n.slides.eq(c);
                    d.remove(), u.unshift(d);
                }
                if ("object" == typeof t && "length" in t) {
                    for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                    l = s > e ? s + t.length : s;
                } else i.append(t);
                for (var f = 0; f < u.length; f += 1) i.append(u[f]);
                r.loop && n.loopCreate(), (r.observer && He.observer) || n.update(), r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
            }
            function me(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    r = t.activeIndex,
                    a = r;
                n.loop && ((a -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children("." + n.slideClass)));
                var s,
                    o = a;
                if ("object" == typeof e && "length" in e) {
                    for (var l = 0; l < e.length; l += 1) (s = e[l]), t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1);
                    o = Math.max(o, 0);
                } else (s = e), t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1), (o = Math.max(o, 0));
                n.loop && t.loopCreate(), (n.observer && He.observer) || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
            }
            function ge() {
                for (var e = this, t = [], n = 0; n < e.slides.length; n += 1) t.push(n);
                e.removeSlide(t);
            }
            function ye(t) {
                var n = this,
                    i = n.touchEventsData,
                    r = n.params,
                    a = n.touches;
                if (!n.animating || !r.preventInteractionOnTransition) {
                    var s = t;
                    if (
                        (s.originalEvent && (s = s.originalEvent),
                        (i.isTouchEvent = "touchstart" === s.type),
                        (i.isTouchEvent || !("which" in s) || 3 !== s.which) && !((!i.isTouchEvent && "button" in s && s.button > 0) || (i.isTouched && i.isMoved)))
                    ) {
                        if (r.noSwiping && e(s.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) return void (n.allowClick = !0);
                        if (!r.swipeHandler || e(s).closest(r.swipeHandler)[0]) {
                            (a.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX), (a.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY);
                            var o = a.currentX,
                                l = a.currentY,
                                u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                            if (!u || !(o <= c || o >= Oe.screen.width - c)) {
                                if (
                                    (Ne.extend(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                    (a.startX = o),
                                    (a.startY = l),
                                    (i.touchStartTime = Ne.now()),
                                    (n.allowClick = !0),
                                    n.updateSize(),
                                    (n.swipeDirection = void 0),
                                    r.threshold > 0 && (i.allowThresholdMove = !1),
                                    "touchstart" !== s.type)
                                ) {
                                    var d = !0;
                                    e(s.target).is(i.formElements) && (d = !1), Ie.activeElement && e(Ie.activeElement).is(i.formElements) && Ie.activeElement !== s.target && Ie.activeElement.blur();
                                    var p = d && n.allowTouchMove && r.touchStartPreventDefault;
                                    (r.touchStartForcePreventDefault || p) && s.preventDefault();
                                }
                                n.emit("touchStart", s);
                            }
                        }
                    }
                }
            }
            function be(t) {
                var n = this,
                    i = n.touchEventsData,
                    r = n.params,
                    a = n.touches,
                    s = n.rtlTranslate,
                    o = t;
                if ((o.originalEvent && (o = o.originalEvent), !i.isTouched)) return void (i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o));
                if (!i.isTouchEvent || "mousemove" !== o.type) {
                    var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                        u = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    if (o.preventedByNestedSwiper) return (a.startX = l), void (a.startY = u);
                    if (!n.allowTouchMove) return (n.allowClick = !1), void (i.isTouched && (Ne.extend(a, { startX: l, startY: u, currentX: l, currentY: u }), (i.touchStartTime = Ne.now())));
                    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                        if (n.isVertical()) {
                            if ((u < a.startY && n.translate <= n.maxTranslate()) || (u > a.startY && n.translate >= n.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                        } else if ((l < a.startX && n.translate <= n.maxTranslate()) || (l > a.startX && n.translate >= n.minTranslate())) return;
                    if (i.isTouchEvent && Ie.activeElement && o.target === Ie.activeElement && e(o.target).is(i.formElements)) return (i.isMoved = !0), void (n.allowClick = !1);
                    if ((i.allowTouchCallbacks && n.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                        (a.currentX = l), (a.currentY = u);
                        var c = a.currentX - a.startX,
                            d = a.currentY - a.startY;
                        if (!(n.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) < n.params.threshold)) {
                            if (void 0 === i.isScrolling) {
                                var p;
                                (n.isHorizontal() && a.currentY === a.startY) || (n.isVertical() && a.currentX === a.startX)
                                    ? (i.isScrolling = !1)
                                    : c * c + d * d >= 25 && ((p = (180 * Math.atan2(Math.abs(d), Math.abs(c))) / Math.PI), (i.isScrolling = n.isHorizontal() ? p > r.touchAngle : 90 - p > r.touchAngle));
                            }
                            if ((i.isScrolling && n.emit("touchMoveOpposite", o), void 0 === i.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (i.startMoving = !0)), i.isScrolling)) return void (i.isTouched = !1);
                            if (i.startMoving) {
                                (n.allowClick = !1),
                                    o.preventDefault(),
                                    r.touchMoveStopPropagation && !r.nested && o.stopPropagation(),
                                    i.isMoved ||
                                        (r.loop && n.loopFix(),
                                        (i.startTranslate = n.getTranslate()),
                                        n.setTransition(0),
                                        n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        (i.allowMomentumBounce = !1),
                                        !r.grabCursor || (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) || n.setGrabCursor(!0),
                                        n.emit("sliderFirstMove", o)),
                                    n.emit("sliderMove", o),
                                    (i.isMoved = !0);
                                var f = n.isHorizontal() ? c : d;
                                (a.diff = f), (f *= r.touchRatio), s && (f = -f), (n.swipeDirection = f > 0 ? "prev" : "next"), (i.currentTranslate = f + i.startTranslate);
                                var h = !0,
                                    v = r.resistanceRatio;
                                if (
                                    (r.touchReleaseOnEdges && (v = 0),
                                    f > 0 && i.currentTranslate > n.minTranslate()
                                        ? ((h = !1), r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + f, v)))
                                        : f < 0 && i.currentTranslate < n.maxTranslate() && ((h = !1), r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - f, v))),
                                    h && (o.preventedByNestedSwiper = !0),
                                    !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    r.threshold > 0)
                                ) {
                                    if (!(Math.abs(f) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove)
                                        return (
                                            (i.allowThresholdMove = !0),
                                            (a.startX = a.currentX),
                                            (a.startY = a.currentY),
                                            (i.currentTranslate = i.startTranslate),
                                            void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                        );
                                }
                                r.followFinger &&
                                    ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()),
                                    r.freeMode &&
                                        (0 === i.velocities.length && i.velocities.push({ position: a[n.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                        i.velocities.push({ position: a[n.isHorizontal() ? "currentX" : "currentY"], time: Ne.now() })),
                                    n.updateProgress(i.currentTranslate),
                                    n.setTranslate(i.currentTranslate));
                            }
                        }
                    }
                }
            }
            function xe(e) {
                var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    r = t.touches,
                    a = t.rtlTranslate,
                    s = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    u = e;
                if ((u.originalEvent && (u = u.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", u), (n.allowTouchCallbacks = !1), !n.isTouched))
                    return n.isMoved && i.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), void (n.startMoving = !1);
                i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c = Ne.now(),
                    d = c - n.touchStartTime;
                if (
                    (t.allowClick &&
                        (t.updateClickedSlide(u),
                        t.emit("tap", u),
                        d < 300 &&
                            c - n.lastClickTime > 300 &&
                            (n.clickTimeout && clearTimeout(n.clickTimeout),
                            (n.clickTimeout = Ne.nextTick(function () {
                                t && !t.destroyed && t.emit("click", u);
                            }, 300))),
                        d < 300 && c - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", u))),
                    (n.lastClickTime = Ne.now()),
                    Ne.nextTick(function () {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate)
                )
                    return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
                (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
                var p;
                if (((p = i.followFinger ? (a ? t.translate : -t.translate) : -n.currentTranslate), i.freeMode)) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (n.velocities.length > 1) {
                            var f = n.velocities.pop(),
                                h = n.velocities.pop(),
                                v = f.position - h.position,
                                m = f.time - h.time;
                            (t.velocity = v / m), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || Ne.now() - f.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= i.freeModeMomentumVelocityRatio), (n.velocities.length = 0);
                        var g = 1e3 * i.freeModeMomentumRatio,
                            y = t.velocity * g,
                            b = t.translate + y;
                        a && (b = -b);
                        var x,
                            w,
                            T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate())
                            i.freeModeMomentumBounce ? (b + t.maxTranslate() < -E && (b = t.maxTranslate() - E), (x = t.maxTranslate()), (T = !0), (n.allowMomentumBounce = !0)) : (b = t.maxTranslate()),
                                i.loop && i.centeredSlides && (w = !0);
                        else if (b > t.minTranslate())
                            i.freeModeMomentumBounce ? (b - t.minTranslate() > E && (b = t.minTranslate() + E), (x = t.minTranslate()), (T = !0), (n.allowMomentumBounce = !0)) : (b = t.minTranslate()),
                                i.loop && i.centeredSlides && (w = !0);
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -b) {
                                    S = C;
                                    break;
                                }
                            (b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === t.swipeDirection ? l[S] : l[S - 1]), (b = -b);
                        }
                        if (
                            (w &&
                                t.once("transitionEnd", function () {
                                    t.loopFix();
                                }),
                            0 !== t.velocity)
                        )
                            g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && T
                            ? (t.updateProgress(x),
                              t.setTransition(g),
                              t.setTranslate(b),
                              t.transitionStart(!0, t.swipeDirection),
                              (t.animating = !0),
                              s.transitionEnd(function () {
                                  t &&
                                      !t.destroyed &&
                                      n.allowMomentumBounce &&
                                      (t.emit("momentumBounce"),
                                      t.setTransition(i.speed),
                                      t.setTranslate(x),
                                      s.transitionEnd(function () {
                                          t && !t.destroyed && t.transitionEnd();
                                      }));
                              }))
                            : t.velocity
                            ? (t.updateProgress(b),
                              t.setTransition(g),
                              t.setTranslate(b),
                              t.transitionStart(!0, t.swipeDirection),
                              t.animating ||
                                  ((t.animating = !0),
                                  s.transitionEnd(function () {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : t.updateProgress(b),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    return void ((!i.freeModeMomentum || d >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
                }
                for (var k = 0, A = t.slidesSizesGrid[0], M = 0; M < o.length; M += i.slidesPerGroup)
                    void 0 !== o[M + i.slidesPerGroup] ? p >= o[M] && p < o[M + i.slidesPerGroup] && ((k = M), (A = o[M + i.slidesPerGroup] - o[M])) : p >= o[M] && ((k = M), (A = o[o.length - 1] - o[o.length - 2]));
                var P = (p - o[k]) / A;
                if (d > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k));
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(k + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k);
                }
            }
            function we() {
                var e = this,
                    t = e.params,
                    n = e.el;
                if (!n || 0 !== n.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var i = e.allowSlideNext,
                        r = e.allowSlidePrev,
                        a = e.snapGrid;
                    if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                        var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
                    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), (e.allowSlidePrev = r), (e.allowSlideNext = i), e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
                }
            }
            function Te(e) {
                var t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }
            function Ee() {
                var e = this,
                    t = e.params,
                    n = e.touchEvents,
                    i = e.el,
                    r = e.wrapperEl;
                (e.onTouchStart = ye.bind(e)), (e.onTouchMove = be.bind(e)), (e.onTouchEnd = xe.bind(e)), (e.onClick = Te.bind(e));
                var a = "container" === t.touchEventsTarget ? i : r,
                    s = !!t.nested;
                if (He.touch || (!He.pointerEvents && !He.prefixedPointerEvents)) {
                    if (He.touch) {
                        var o = !("touchstart" !== n.start || !He.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                        a.addEventListener(n.start, e.onTouchStart, o), a.addEventListener(n.move, e.onTouchMove, He.passiveListener ? { passive: !1, capture: s } : s), a.addEventListener(n.end, e.onTouchEnd, o);
                    }
                    ((t.simulateTouch && !Ue.ios && !Ue.android) || (t.simulateTouch && !He.touch && Ue.ios)) &&
                        (a.addEventListener("mousedown", e.onTouchStart, !1), Ie.addEventListener("mousemove", e.onTouchMove, s), Ie.addEventListener("mouseup", e.onTouchEnd, !1));
                } else a.addEventListener(n.start, e.onTouchStart, !1), Ie.addEventListener(n.move, e.onTouchMove, s), Ie.addEventListener(n.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on(Ue.ios || Ue.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we, !0);
            }
            function Se() {
                var e = this,
                    t = e.params,
                    n = e.touchEvents,
                    i = e.el,
                    r = e.wrapperEl,
                    a = "container" === t.touchEventsTarget ? i : r,
                    s = !!t.nested;
                if (He.touch || (!He.pointerEvents && !He.prefixedPointerEvents)) {
                    if (He.touch) {
                        var o = !("onTouchStart" !== n.start || !He.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                        a.removeEventListener(n.start, e.onTouchStart, o), a.removeEventListener(n.move, e.onTouchMove, s), a.removeEventListener(n.end, e.onTouchEnd, o);
                    }
                    ((t.simulateTouch && !Ue.ios && !Ue.android) || (t.simulateTouch && !He.touch && Ue.ios)) &&
                        (a.removeEventListener("mousedown", e.onTouchStart, !1), Ie.removeEventListener("mousemove", e.onTouchMove, s), Ie.removeEventListener("mouseup", e.onTouchEnd, !1));
                } else a.removeEventListener(n.start, e.onTouchStart, !1), Ie.removeEventListener(n.move, e.onTouchMove, s), Ie.removeEventListener(n.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off(Ue.ios || Ue.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we);
            }
            function Ce() {
                var e = this,
                    t = e.activeIndex,
                    n = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var r = e.params,
                    a = r.breakpoints;
                if (a && (!a || 0 !== Object.keys(a).length)) {
                    var s = e.getBreakpoint(a);
                    if (s && e.currentBreakpoint !== s) {
                        var o = s in a ? a[s] : void 0;
                        o &&
                            ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                            });
                        var l = o || e.originalParams,
                            u = l.direction && l.direction !== r.direction,
                            c = r.loop && (l.slidesPerView !== r.slidesPerView || u);
                        u && n && e.changeDirection(),
                            Ne.extend(e.params, l),
                            Ne.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                            (e.currentBreakpoint = s),
                            c && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", l);
                    }
                }
            }
            function ke(e) {
                var t = this;
                if (e) {
                    var n = !1,
                        i = [];
                    Object.keys(e).forEach(function (e) {
                        i.push(e);
                    }),
                        i.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10);
                        });
                    for (var r = 0; r < i.length; r += 1) {
                        var a = i[r];
                        t.params.breakpointsInverse ? a <= Oe.innerWidth && (n = a) : a >= Oe.innerWidth && !n && (n = a);
                    }
                    return n || "max";
                }
            }
            function Ae() {
                var e = this,
                    t = e.classNames,
                    n = e.params,
                    i = e.rtl,
                    r = e.$el,
                    a = [];
                a.push("initialized"),
                    a.push(n.direction),
                    n.freeMode && a.push("free-mode"),
                    He.flexbox || a.push("no-flexbox"),
                    n.autoHeight && a.push("autoheight"),
                    i && a.push("rtl"),
                    n.slidesPerColumn > 1 && a.push("multirow"),
                    Ue.android && a.push("android"),
                    Ue.ios && a.push("ios"),
                    (Be.isIE || Be.isEdge) && (He.pointerEvents || He.prefixedPointerEvents) && a.push("wp8-" + n.direction),
                    a.forEach(function (e) {
                        t.push(n.containerModifierClass + e);
                    }),
                    r.addClass(t.join(" "));
            }
            function Me() {
                var e = this,
                    t = e.$el,
                    n = e.classNames;
                t.removeClass(n.join(" "));
            }
            function Pe(e, t, n, i, r, a) {
                function s() {
                    a && a();
                }
                var o;
                e.complete && r ? s() : t ? ((o = new Oe.Image()), (o.onload = s), (o.onerror = s), i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : s();
            }
            function Le() {
                function e() {
                    void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
                }
                var t = this;
                t.imagesToLoad = t.$el.find("img");
                for (var n = 0; n < t.imagesToLoad.length; n += 1) {
                    var i = t.imagesToLoad[n];
                    t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e);
                }
            }
            function ze() {
                var e = this,
                    t = e.isLocked;
                (e.isLocked = 1 === e.snapGrid.length),
                    (e.allowSlideNext = !e.isLocked),
                    (e.allowSlidePrev = !e.isLocked),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                    t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
            }
            function De() {
                var e = "onwheel" in Ie;
                if (!e) {
                    var t = Ie.createElement("div");
                    t.setAttribute("onwheel", "return;"), (e = "function" == typeof t.onwheel);
                }
                return !e && Ie.implementation && Ie.implementation.hasFeature && !0 !== Ie.implementation.hasFeature("", "") && (e = Ie.implementation.hasFeature("Events.wheel", "3.0")), e;
            }
            var Ie =
                    "undefined" == typeof document
                        ? {
                              body: {},
                              addEventListener: function () {},
                              removeEventListener: function () {},
                              activeElement: { blur: function () {}, nodeName: "" },
                              querySelector: function () {
                                  return null;
                              },
                              querySelectorAll: function () {
                                  return [];
                              },
                              getElementById: function () {
                                  return null;
                              },
                              createEvent: function () {
                                  return { initEvent: function () {} };
                              },
                              createElement: function () {
                                  return {
                                      children: [],
                                      childNodes: [],
                                      style: {},
                                      setAttribute: function () {},
                                      getElementsByTagName: function () {
                                          return [];
                                      },
                                  };
                              },
                              location: { hash: "" },
                          }
                        : document,
                Oe =
                    "undefined" == typeof window
                        ? {
                              document: Ie,
                              navigator: { userAgent: "" },
                              location: {},
                              history: {},
                              CustomEvent: function () {
                                  return this;
                              },
                              addEventListener: function () {},
                              removeEventListener: function () {},
                              getComputedStyle: function () {
                                  return {
                                      getPropertyValue: function () {
                                          return "";
                                      },
                                  };
                              },
                              Image: function () {},
                              Date: function () {},
                              screen: {},
                              setTimeout: function () {},
                              clearTimeout: function () {},
                          }
                        : window,
                $e = function (e) {
                    for (var t = this, n = 0; n < e.length; n += 1) t[n] = e[n];
                    return (t.length = e.length), this;
                };
            (e.fn = $e.prototype), (e.Class = $e), (e.Dom7 = $e);
            var je = {
                addClass: n,
                removeClass: i,
                hasClass: r,
                toggleClass: a,
                attr: s,
                removeAttr: o,
                data: l,
                transform: u,
                transition: c,
                on: d,
                off: p,
                trigger: f,
                transitionEnd: h,
                outerWidth: v,
                outerHeight: m,
                offset: g,
                css: b,
                each: x,
                html: w,
                text: T,
                is: E,
                index: S,
                eq: C,
                append: k,
                prepend: A,
                next: M,
                nextAll: P,
                prev: L,
                prevAll: z,
                parent: D,
                parents: I,
                closest: O,
                find: $,
                children: j,
                remove: N,
                add: H,
                styles: y,
            };
            Object.keys(je).forEach(function (t) {
                e.fn[t] = e.fn[t] || je[t];
            });
            var Ne = {
                    deleteProps: function (e) {
                        var t = e;
                        Object.keys(t).forEach(function (e) {
                            try {
                                t[e] = null;
                            } catch (e) {}
                            try {
                                delete t[e];
                            } catch (e) {}
                        });
                    },
                    nextTick: function (e, t) {
                        return void 0 === t && (t = 0), setTimeout(e, t);
                    },
                    now: function () {
                        return Date.now();
                    },
                    getTranslate: function (e, t) {
                        void 0 === t && (t = "x");
                        var n,
                            i,
                            r,
                            a = Oe.getComputedStyle(e, null);
                        return (
                            Oe.WebKitCSSMatrix
                                ? ((i = a.transform || a.webkitTransform),
                                  i.split(",").length > 6 &&
                                      (i = i
                                          .split(", ")
                                          .map(function (e) {
                                              return e.replace(",", ".");
                                          })
                                          .join(", ")),
                                  (r = new Oe.WebKitCSSMatrix("none" === i ? "" : i)))
                                : ((r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (n = r.toString().split(","))),
                            "x" === t && (i = Oe.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                            "y" === t && (i = Oe.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                            i || 0
                        );
                    },
                    parseUrlQuery: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a = {},
                            s = e || Oe.location.href;
                        if ("string" == typeof s && s.length)
                            for (
                                s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "",
                                    n = s.split("&").filter(function (e) {
                                        return "" !== e;
                                    }),
                                    r = n.length,
                                    t = 0;
                                t < r;
                                t += 1
                            )
                                (i = n[t].replace(/#\S+/g, "").split("=")), (a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
                        return a;
                    },
                    isObject: function (e) {
                        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
                    },
                    extend: function () {
                        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                        for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                            var r = e[i];
                            if (void 0 !== r && null !== r)
                                for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                                    var l = a[s],
                                        u = Object.getOwnPropertyDescriptor(r, l);
                                    void 0 !== u && u.enumerable && (Ne.isObject(n[l]) && Ne.isObject(r[l]) ? Ne.extend(n[l], r[l]) : !Ne.isObject(n[l]) && Ne.isObject(r[l]) ? ((n[l] = {}), Ne.extend(n[l], r[l])) : (n[l] = r[l]));
                                }
                        }
                        return n;
                    },
                },
                He = (function () {
                    var e = Ie.createElement("div");
                    return {
                        touch:
                            (Oe.Modernizr && !0 === Oe.Modernizr.touch) ||
                            (function () {
                                return !!(Oe.navigator.maxTouchPoints > 0 || "ontouchstart" in Oe || (Oe.DocumentTouch && Ie instanceof Oe.DocumentTouch));
                            })(),
                        pointerEvents: !!(Oe.navigator.pointerEnabled || Oe.PointerEvent || ("maxTouchPoints" in Oe.navigator && Oe.navigator.maxTouchPoints > 0)),
                        prefixedPointerEvents: !!Oe.navigator.msPointerEnabled,
                        transition: (function () {
                            var t = e.style;
                            return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
                        })(),
                        transforms3d:
                            (Oe.Modernizr && !0 === Oe.Modernizr.csstransforms3d) ||
                            (function () {
                                var t = e.style;
                                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
                            })(),
                        flexbox: (function () {
                            for (
                                var t = e.style, n = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0;
                                i < n.length;
                                i += 1
                            )
                                if (n[i] in t) return !0;
                            return !1;
                        })(),
                        observer: (function () {
                            return "MutationObserver" in Oe || "WebkitMutationObserver" in Oe;
                        })(),
                        passiveListener: (function () {
                            var e = !1;
                            try {
                                var t = Object.defineProperty({}, "passive", {
                                    get: function () {
                                        e = !0;
                                    },
                                });
                                Oe.addEventListener("testPassiveListener", null, t);
                            } catch (e) {}
                            return e;
                        })(),
                        gestures: (function () {
                            return "ongesturestart" in Oe;
                        })(),
                    };
                })(),
                Be = (function () {
                    return {
                        isIE: !!Oe.navigator.userAgent.match(/Trident/g) || !!Oe.navigator.userAgent.match(/MSIE/g),
                        isEdge: !!Oe.navigator.userAgent.match(/Edge/g),
                        isSafari: (function () {
                            var e = Oe.navigator.userAgent.toLowerCase();
                            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                        })(),
                        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Oe.navigator.userAgent),
                    };
                })(),
                qe = function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    (t.params = e),
                        (t.eventsListeners = {}),
                        t.params &&
                            t.params.on &&
                            Object.keys(t.params.on).forEach(function (e) {
                                t.on(e, t.params.on[e]);
                            });
                },
                Re = { components: { configurable: !0 } };
            (qe.prototype.on = function (e, t, n) {
                var i = this;
                if ("function" != typeof t) return i;
                var r = n ? "unshift" : "push";
                return (
                    e.split(" ").forEach(function (e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
                    }),
                    i
                );
            }),
                (qe.prototype.once = function (e, t, n) {
                    function i() {
                        for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
                        t.apply(r, n), r.off(e, i), i.f7proxy && delete i.f7proxy;
                    }
                    var r = this;
                    return "function" != typeof t ? r : ((i.f7proxy = t), r.on(e, i, n));
                }),
                (qe.prototype.off = function (e, t) {
                    var n = this;
                    return n.eventsListeners
                        ? (e.split(" ").forEach(function (e) {
                              void 0 === t
                                  ? (n.eventsListeners[e] = [])
                                  : n.eventsListeners[e] &&
                                    n.eventsListeners[e].length &&
                                    n.eventsListeners[e].forEach(function (i, r) {
                                        (i === t || (i.f7proxy && i.f7proxy === t)) && n.eventsListeners[e].splice(r, 1);
                                    });
                          }),
                          n)
                        : n;
                }),
                (qe.prototype.emit = function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    var n = this;
                    if (!n.eventsListeners) return n;
                    var i, r, a;
                    return (
                        "string" == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (r = e.slice(1, e.length)), (a = n)) : ((i = e[0].events), (r = e[0].data), (a = e[0].context || n)),
                        (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
                            if (n.eventsListeners && n.eventsListeners[e]) {
                                var t = [];
                                n.eventsListeners[e].forEach(function (e) {
                                    t.push(e);
                                }),
                                    t.forEach(function (e) {
                                        e.apply(a, r);
                                    });
                            }
                        }),
                        n
                    );
                }),
                (qe.prototype.useModulesParams = function (e) {
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (n) {
                            var i = t.modules[n];
                            i.params && Ne.extend(e, i.params);
                        });
                }),
                (qe.prototype.useModules = function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (n) {
                            var i = t.modules[n],
                                r = e[n] || {};
                            i.instance &&
                                Object.keys(i.instance).forEach(function (e) {
                                    var n = i.instance[e];
                                    t[e] = "function" == typeof n ? n.bind(t) : n;
                                }),
                                i.on &&
                                    t.on &&
                                    Object.keys(i.on).forEach(function (e) {
                                        t.on(e, i.on[e]);
                                    }),
                                i.create && i.create.bind(t)(r);
                        });
                }),
                (Re.components.set = function (e) {
                    var t = this;
                    t.use && t.use(e);
                }),
                (qe.installModule = function (e) {
                    for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                    var i = this;
                    i.prototype.modules || (i.prototype.modules = {});
                    var r = e.name || Object.keys(i.prototype.modules).length + "_" + Ne.now();
                    return (
                        (i.prototype.modules[r] = e),
                        e.proto &&
                            Object.keys(e.proto).forEach(function (t) {
                                i.prototype[t] = e.proto[t];
                            }),
                        e.static &&
                            Object.keys(e.static).forEach(function (t) {
                                i[t] = e.static[t];
                            }),
                        e.install && e.install.apply(i, t),
                        i
                    );
                }),
                (qe.use = function (e) {
                    for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                    var i = this;
                    return Array.isArray(e)
                        ? (e.forEach(function (e) {
                              return i.installModule(e);
                          }),
                          i)
                        : i.installModule.apply(i, [e].concat(t));
                }),
                Object.defineProperties(qe, Re);
            var Fe = { updateSize: B, updateSlides: q, updateAutoHeight: R, updateSlidesOffset: F, updateSlidesProgress: V, updateProgress: G, updateSlidesClasses: W, updateActiveIndex: X, updateClickedSlide: Y },
                Ve = { getTranslate: _, setTranslate: U, minTranslate: K, maxTranslate: Q },
                Ge = { setTransition: J, transitionStart: Z, transitionEnd: ee },
                We = { slideTo: te, slideToLoop: ne, slideNext: ie, slidePrev: re, slideReset: ae, slideToClosest: se, slideToClickedSlide: oe },
                Xe = { loopCreate: le, loopFix: ue, loopDestroy: ce },
                Ye = { setGrabCursor: de, unsetGrabCursor: pe },
                _e = { appendSlide: fe, prependSlide: he, addSlide: ve, removeSlide: me, removeAllSlides: ge },
                Ue = (function () {
                    var e = Oe.navigator.userAgent,
                        t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: Oe.cordova || Oe.phonegap, phonegap: Oe.cordova || Oe.phonegap },
                        n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                        r = e.match(/(iPad).*OS\s([\d_]+)/),
                        a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                        s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                    if (
                        (n && ((t.os = "windows"), (t.osVersion = n[2]), (t.windows = !0)),
                        i && !n && ((t.os = "android"), (t.osVersion = i[2]), (t.android = !0), (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
                        (r || s || a) && ((t.os = "ios"), (t.ios = !0)),
                        s && !a && ((t.osVersion = s[2].replace(/_/g, ".")), (t.iphone = !0)),
                        r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
                        a && ((t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                        t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                        (t.desktop = !(t.os || t.android || t.webView)),
                        (t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                        t.os && "ios" === t.os)
                    ) {
                        var o = t.osVersion.split("."),
                            l = Ie.querySelector('meta[name="viewport"]');
                        t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0;
                    }
                    return (t.pixelRatio = Oe.devicePixelRatio || 1), t;
                })(),
                Ke = { attachEvents: Ee, detachEvents: Se },
                Qe = { setBreakpoint: Ce, getBreakpoint: ke },
                Je = { addClasses: Ae, removeClasses: Me },
                Ze = { loadImage: Pe, preloadImages: Le },
                et = { checkOverflow: ze },
                tt = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: 0.02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    breakpointsInverse: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: 0.85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0,
                },
                nt = { update: Fe, translate: Ve, transition: Ge, slide: We, loop: Xe, grabCursor: Ye, manipulation: _e, events: Ke, breakpoints: Qe, checkOverflow: et, classes: Je, images: Ze },
                it = {},
                rt = (function (t) {
                    function n() {
                        for (var i, r = [], a = arguments.length; a--; ) r[a] = arguments[a];
                        var s, o;
                        1 === r.length && r[0].constructor && r[0].constructor === Object ? (o = r[0]) : ((i = r), (s = i[0]), (o = i[1])),
                            o || (o = {}),
                            (o = Ne.extend({}, o)),
                            s && !o.el && (o.el = s),
                            t.call(this, o),
                            Object.keys(nt).forEach(function (e) {
                                Object.keys(nt[e]).forEach(function (t) {
                                    n.prototype[t] || (n.prototype[t] = nt[e][t]);
                                });
                            });
                        var l = this;
                        void 0 === l.modules && (l.modules = {}),
                            Object.keys(l.modules).forEach(function (e) {
                                var t = l.modules[e];
                                if (t.params) {
                                    var n = Object.keys(t.params)[0],
                                        i = t.params[n];
                                    if ("object" != typeof i || null === i) return;
                                    if (!(n in o && "enabled" in i)) return;
                                    !0 === o[n] && (o[n] = { enabled: !0 }), "object" != typeof o[n] || "enabled" in o[n] || (o[n].enabled = !0), o[n] || (o[n] = { enabled: !1 });
                                }
                            });
                        var u = Ne.extend({}, tt);
                        l.useModulesParams(u), (l.params = Ne.extend({}, u, it, o)), (l.originalParams = Ne.extend({}, l.params)), (l.passedParams = Ne.extend({}, o)), (l.$ = e);
                        var c = e(l.params.el);
                        if ((s = c[0])) {
                            if (c.length > 1) {
                                var d = [];
                                return (
                                    c.each(function (e, t) {
                                        var i = Ne.extend({}, o, { el: t });
                                        d.push(new n(i));
                                    }),
                                    d
                                );
                            }
                            (s.swiper = l), c.data("swiper", l);
                            var p = c.children("." + l.params.wrapperClass);
                            return (
                                Ne.extend(l, {
                                    $el: c,
                                    el: s,
                                    $wrapperEl: p,
                                    wrapperEl: p[0],
                                    classNames: [],
                                    slides: e(),
                                    slidesGrid: [],
                                    snapGrid: [],
                                    slidesSizesGrid: [],
                                    isHorizontal: function () {
                                        return "horizontal" === l.params.direction;
                                    },
                                    isVertical: function () {
                                        return "vertical" === l.params.direction;
                                    },
                                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                                    wrongRTL: "-webkit-box" === p.css("display"),
                                    activeIndex: 0,
                                    realIndex: 0,
                                    isBeginning: !0,
                                    isEnd: !1,
                                    translate: 0,
                                    previousTranslate: 0,
                                    progress: 0,
                                    velocity: 0,
                                    animating: !1,
                                    allowSlideNext: l.params.allowSlideNext,
                                    allowSlidePrev: l.params.allowSlidePrev,
                                    touchEvents: (function () {
                                        var e = ["touchstart", "touchmove", "touchend"],
                                            t = ["mousedown", "mousemove", "mouseup"];
                                        return (
                                            He.pointerEvents ? (t = ["pointerdown", "pointermove", "pointerup"]) : He.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                            (l.touchEventsTouch = { start: e[0], move: e[1], end: e[2] }),
                                            (l.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                            He.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
                                        );
                                    })(),
                                    touchEventsData: {
                                        isTouched: void 0,
                                        isMoved: void 0,
                                        allowTouchCallbacks: void 0,
                                        touchStartTime: void 0,
                                        isScrolling: void 0,
                                        currentTranslate: void 0,
                                        startTranslate: void 0,
                                        allowThresholdMove: void 0,
                                        formElements: "input, select, option, textarea, button, video",
                                        lastClickTime: Ne.now(),
                                        clickTimeout: void 0,
                                        velocities: [],
                                        allowMomentumBounce: void 0,
                                        isTouchEvent: void 0,
                                        startMoving: void 0,
                                    },
                                    allowClick: !0,
                                    allowTouchMove: l.params.allowTouchMove,
                                    touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                                    imagesToLoad: [],
                                    imagesLoaded: 0,
                                }),
                                l.useModules(),
                                l.params.init && l.init(),
                                l
                            );
                        }
                    }
                    t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)), (n.prototype.constructor = n);
                    var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
                    return (
                        (n.prototype.slidesPerViewDynamic = function () {
                            var e = this,
                                t = e.params,
                                n = e.slides,
                                i = e.slidesGrid,
                                r = e.size,
                                a = e.activeIndex,
                                s = 1;
                            if (t.centeredSlides) {
                                for (var o, l = n[a].swiperSlideSize, u = a + 1; u < n.length; u += 1) n[u] && !o && ((l += n[u].swiperSlideSize), (s += 1), l > r && (o = !0));
                                for (var c = a - 1; c >= 0; c -= 1) n[c] && !o && ((l += n[c].swiperSlideSize), (s += 1), l > r && (o = !0));
                            } else for (var d = a + 1; d < n.length; d += 1) i[d] - i[a] < r && (s += 1);
                            return s;
                        }),
                        (n.prototype.update = function () {
                            function e() {
                                var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                                    n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                                t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
                            }
                            var t = this;
                            if (t && !t.destroyed) {
                                var n = t.snapGrid,
                                    i = t.params;
                                i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                                t.params.freeMode
                                    ? (e(), t.params.autoHeight && t.updateAutoHeight())
                                    : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                                    i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
                                    t.emit("update");
                            }
                        }),
                        (n.prototype.changeDirection = function (e, t) {
                            void 0 === t && (t = !0);
                            var n = this,
                                i = n.params.direction;
                            return (
                                e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                                e === i || ("horizontal" !== e && "vertical" !== e)
                                    ? n
                                    : (n.$el.removeClass("" + n.params.containerModifierClass + i + " wp8-" + i).addClass("" + n.params.containerModifierClass + e),
                                      (Be.isIE || Be.isEdge) && (He.pointerEvents || He.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + "wp8-" + e),
                                      (n.params.direction = e),
                                      n.slides.each(function (t, n) {
                                          "vertical" === e ? (n.style.width = "") : (n.style.height = "");
                                      }),
                                      n.emit("changeDirection"),
                                      t && n.update(),
                                      n)
                            );
                        }),
                        (n.prototype.init = function () {
                            var e = this;
                            e.initialized ||
                                (e.emit("beforeInit"),
                                e.params.breakpoints && e.setBreakpoint(),
                                e.addClasses(),
                                e.params.loop && e.loopCreate(),
                                e.updateSize(),
                                e.updateSlides(),
                                e.params.watchOverflow && e.checkOverflow(),
                                e.params.grabCursor && e.setGrabCursor(),
                                e.params.preloadImages && e.preloadImages(),
                                e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                                e.attachEvents(),
                                (e.initialized = !0),
                                e.emit("init"));
                        }),
                        (n.prototype.destroy = function (e, t) {
                            void 0 === e && (e = !0), void 0 === t && (t = !0);
                            var n = this,
                                i = n.params,
                                r = n.$el,
                                a = n.$wrapperEl,
                                s = n.slides;
                            return void 0 === n.params || n.destroyed
                                ? null
                                : (n.emit("beforeDestroy"),
                                  (n.initialized = !1),
                                  n.detachEvents(),
                                  i.loop && n.loopDestroy(),
                                  t &&
                                      (n.removeClasses(),
                                      r.removeAttr("style"),
                                      a.removeAttr("style"),
                                      s &&
                                          s.length &&
                                          s
                                              .removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" "))
                                              .removeAttr("style")
                                              .removeAttr("data-swiper-slide-index")
                                              .removeAttr("data-swiper-column")
                                              .removeAttr("data-swiper-row")),
                                  n.emit("destroy"),
                                  Object.keys(n.eventsListeners).forEach(function (e) {
                                      n.off(e);
                                  }),
                                  !1 !== e && ((n.$el[0].swiper = null), n.$el.data("swiper", null), Ne.deleteProps(n)),
                                  (n.destroyed = !0),
                                  null);
                        }),
                        (n.extendDefaults = function (e) {
                            Ne.extend(it, e);
                        }),
                        (i.extendedDefaults.get = function () {
                            return it;
                        }),
                        (i.defaults.get = function () {
                            return tt;
                        }),
                        (i.Class.get = function () {
                            return t;
                        }),
                        (i.$.get = function () {
                            return e;
                        }),
                        Object.defineProperties(n, i),
                        n
                    );
                })(qe),
                at = { name: "device", proto: { device: Ue }, static: { device: Ue } },
                st = { name: "support", proto: { support: He }, static: { support: He } },
                ot = { name: "browser", proto: { browser: Be }, static: { browser: Be } },
                lt = {
                    name: "resize",
                    create: function () {
                        var e = this;
                        Ne.extend(e, {
                            resize: {
                                resizeHandler: function () {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                                },
                                orientationChangeHandler: function () {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange");
                                },
                            },
                        });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            Oe.addEventListener("resize", e.resize.resizeHandler), Oe.addEventListener("orientationchange", e.resize.orientationChangeHandler);
                        },
                        destroy: function () {
                            var e = this;
                            Oe.removeEventListener("resize", e.resize.resizeHandler), Oe.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                        },
                    },
                },
                ut = {
                    func: Oe.MutationObserver || Oe.WebkitMutationObserver,
                    attach: function (e, t) {
                        void 0 === t && (t = {});
                        var n = this,
                            i = ut.func,
                            r = new i(function (e) {
                                if (1 === e.length) return void n.emit("observerUpdate", e[0]);
                                var t = function () {
                                    n.emit("observerUpdate", e[0]);
                                };
                                Oe.requestAnimationFrame ? Oe.requestAnimationFrame(t) : Oe.setTimeout(t, 0);
                            });
                        r.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.observer.observers.push(r);
                    },
                    init: function () {
                        var e = this;
                        if (He.observer && e.params.observer) {
                            if (e.params.observeParents) for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                            e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                        }
                    },
                    destroy: function () {
                        var e = this;
                        e.observer.observers.forEach(function (e) {
                            e.disconnect();
                        }),
                            (e.observer.observers = []);
                    },
                },
                ct = {
                    name: "observer",
                    params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { observer: { init: ut.init.bind(e), attach: ut.attach.bind(e), destroy: ut.destroy.bind(e), observers: [] } });
                    },
                    on: {
                        init: function () {
                            this.observer.init();
                        },
                        destroy: function () {
                            this.observer.destroy();
                        },
                    },
                },
                dt = {
                    update: function (e) {
                        function t() {
                            n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load();
                        }
                        var n = this,
                            i = n.params,
                            r = i.slidesPerView,
                            a = i.slidesPerGroup,
                            s = i.centeredSlides,
                            o = n.params.virtual,
                            l = o.addSlidesBefore,
                            u = o.addSlidesAfter,
                            c = n.virtual,
                            d = c.from,
                            p = c.to,
                            f = c.slides,
                            h = c.slidesGrid,
                            v = c.renderSlide,
                            m = c.offset;
                        n.updateActiveIndex();
                        var g,
                            y = n.activeIndex || 0;
                        g = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top";
                        var b, x;
                        s ? ((b = Math.floor(r / 2) + a + l), (x = Math.floor(r / 2) + a + u)) : ((b = r + (a - 1) + l), (x = a + u));
                        var w = Math.max((y || 0) - x, 0),
                            T = Math.min((y || 0) + b, f.length - 1),
                            E = (n.slidesGrid[w] || 0) - (n.slidesGrid[0] || 0);
                        if ((Ne.extend(n.virtual, { from: w, to: T, offset: E, slidesGrid: n.slidesGrid }), d === w && p === T && !e)) return n.slidesGrid !== h && E !== m && n.slides.css(g, E + "px"), void n.updateProgress();
                        if (n.params.virtual.renderExternal)
                            return (
                                n.params.virtual.renderExternal.call(n, {
                                    offset: E,
                                    from: w,
                                    to: T,
                                    slides: (function () {
                                        for (var e = [], t = w; t <= T; t += 1) e.push(f[t]);
                                        return e;
                                    })(),
                                }),
                                void t()
                            );
                        var S = [],
                            C = [];
                        if (e) n.$wrapperEl.find("." + n.params.slideClass).remove();
                        else for (var k = d; k <= p; k += 1) (k < w || k > T) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                        for (var A = 0; A < f.length; A += 1) A >= w && A <= T && (void 0 === p || e ? C.push(A) : (A > p && C.push(A), A < d && S.push(A)));
                        C.forEach(function (e) {
                            n.$wrapperEl.append(v(f[e], e));
                        }),
                            S.sort(function (e, t) {
                                return t - e;
                            }).forEach(function (e) {
                                n.$wrapperEl.prepend(v(f[e], e));
                            }),
                            n.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
                            t();
                    },
                    renderSlide: function (t, n) {
                        var i = this,
                            r = i.params.virtual;
                        if (r.cache && i.virtual.cache[n]) return i.virtual.cache[n];
                        var a = e(r.renderSlide ? r.renderSlide.call(i, t, n) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
                        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", n), r.cache && (i.virtual.cache[n] = a), a;
                    },
                    appendSlide: function (e) {
                        var t = this;
                        if ("object" == typeof e && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]);
                        else t.virtual.slides.push(e);
                        t.virtual.update(!0);
                    },
                    prependSlide: function (e) {
                        var t = this,
                            n = t.activeIndex,
                            i = n + 1,
                            r = 1;
                        if (Array.isArray(e)) {
                            for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
                            (i = n + e.length), (r = e.length);
                        } else t.virtual.slides.unshift(e);
                        if (t.params.virtual.cache) {
                            var s = t.virtual.cache,
                                o = {};
                            Object.keys(s).forEach(function (e) {
                                o[parseInt(e, 10) + r] = s[e];
                            }),
                                (t.virtual.cache = o);
                        }
                        t.virtual.update(!0), t.slideTo(i, 0);
                    },
                    removeSlide: function (e) {
                        var t = this;
                        if (void 0 !== e && null !== e) {
                            var n = t.activeIndex;
                            if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), (n = Math.max(n, 0));
                            else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), (n = Math.max(n, 0));
                            t.virtual.update(!0), t.slideTo(n, 0);
                        }
                    },
                    removeAllSlides: function () {
                        var e = this;
                        (e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
                    },
                },
                pt = {
                    name: "virtual",
                    params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, {
                            virtual: {
                                update: dt.update.bind(e),
                                appendSlide: dt.appendSlide.bind(e),
                                prependSlide: dt.prependSlide.bind(e),
                                removeSlide: dt.removeSlide.bind(e),
                                removeAllSlides: dt.removeAllSlides.bind(e),
                                renderSlide: dt.renderSlide.bind(e),
                                slides: e.params.virtual.slides,
                                cache: {},
                            },
                        });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            if (e.params.virtual.enabled) {
                                e.classNames.push(e.params.containerModifierClass + "virtual");
                                var t = { watchSlidesProgress: !0 };
                                Ne.extend(e.params, t), Ne.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                            }
                        },
                        setTranslate: function () {
                            var e = this;
                            e.params.virtual.enabled && e.virtual.update();
                        },
                    },
                },
                ft = {
                    handle: function (e) {
                        var t = this,
                            n = t.rtlTranslate,
                            i = e;
                        i.originalEvent && (i = i.originalEvent);
                        var r = i.keyCode || i.charCode;
                        if (!t.allowSlideNext && ((t.isHorizontal() && 39 === r) || (t.isVertical() && 40 === r) || 34 === r)) return !1;
                        if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === r) || (t.isVertical() && 38 === r) || 33 === r)) return !1;
                        if (
                            !(
                                i.shiftKey ||
                                i.altKey ||
                                i.ctrlKey ||
                                i.metaKey ||
                                (Ie.activeElement && Ie.activeElement.nodeName && ("input" === Ie.activeElement.nodeName.toLowerCase() || "textarea" === Ie.activeElement.nodeName.toLowerCase()))
                            )
                        ) {
                            if (t.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                                var a = !1;
                                if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                                var s = Oe.innerWidth,
                                    o = Oe.innerHeight,
                                    l = t.$el.offset();
                                n && (l.left -= t.$el[0].scrollLeft);
                                for (
                                    var u = [
                                            [l.left, l.top],
                                            [l.left + t.width, l.top],
                                            [l.left, l.top + t.height],
                                            [l.left + t.width, l.top + t.height],
                                        ],
                                        c = 0;
                                    c < u.length;
                                    c += 1
                                ) {
                                    var d = u[c];
                                    d[0] >= 0 && d[0] <= s && d[1] >= 0 && d[1] <= o && (a = !0);
                                }
                                if (!a) return;
                            }
                            t.isHorizontal()
                                ? ((33 !== r && 34 !== r && 37 !== r && 39 !== r) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                                  (((34 !== r && 39 !== r) || n) && ((33 !== r && 37 !== r) || !n)) || t.slideNext(),
                                  (((33 !== r && 37 !== r) || n) && ((34 !== r && 39 !== r) || !n)) || t.slidePrev())
                                : ((33 !== r && 34 !== r && 38 !== r && 40 !== r) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), (34 !== r && 40 !== r) || t.slideNext(), (33 !== r && 38 !== r) || t.slidePrev()),
                                t.emit("keyPress", r);
                        }
                    },
                    enable: function () {
                        var t = this;
                        t.keyboard.enabled || (e(Ie).on("keydown", t.keyboard.handle), (t.keyboard.enabled = !0));
                    },
                    disable: function () {
                        var t = this;
                        t.keyboard.enabled && (e(Ie).off("keydown", t.keyboard.handle), (t.keyboard.enabled = !1));
                    },
                },
                ht = {
                    name: "keyboard",
                    params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { keyboard: { enabled: !1, enable: ft.enable.bind(e), disable: ft.disable.bind(e), handle: ft.handle.bind(e) } });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.keyboard.enabled && e.keyboard.enable();
                        },
                        destroy: function () {
                            var e = this;
                            e.keyboard.enabled && e.keyboard.disable();
                        },
                    },
                },
                vt = {
                    lastScrollTime: Ne.now(),
                    event: (function () {
                        return Oe.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : De() ? "wheel" : "mousewheel";
                    })(),
                    normalize: function (e) {
                        var t = 0,
                            n = 0,
                            i = 0,
                            r = 0;
                        return (
                            "detail" in e && (n = e.detail),
                            "wheelDelta" in e && (n = -e.wheelDelta / 120),
                            "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
                            (i = 10 * t),
                            (r = 10 * n),
                            "deltaY" in e && (r = e.deltaY),
                            "deltaX" in e && (i = e.deltaX),
                            (i || r) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (r *= 40)) : ((i *= 800), (r *= 800))),
                            i && !t && (t = i < 1 ? -1 : 1),
                            r && !n && (n = r < 1 ? -1 : 1),
                            { spinX: t, spinY: n, pixelX: i, pixelY: r }
                        );
                    },
                    handleMouseEnter: function () {
                        this.mouseEntered = !0;
                    },
                    handleMouseLeave: function () {
                        this.mouseEntered = !1;
                    },
                    handle: function (e) {
                        var t = e,
                            n = this,
                            i = n.params.mousewheel;
                        if (!n.mouseEntered && !i.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        var r = 0,
                            a = n.rtlTranslate ? -1 : 1,
                            s = vt.normalize(t);
                        if (i.forceToAxis)
                            if (n.isHorizontal()) {
                                if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
                                r = s.pixelX * a;
                            } else {
                                if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
                                r = s.pixelY;
                            }
                        else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
                        if (0 === r) return !0;
                        if ((i.invert && (r = -r), n.params.freeMode)) {
                            n.params.loop && n.loopFix();
                            var o = n.getTranslate() + r * i.sensitivity,
                                l = n.isBeginning,
                                u = n.isEnd;
                            if (
                                (o >= n.minTranslate() && (o = n.minTranslate()),
                                o <= n.maxTranslate() && (o = n.maxTranslate()),
                                n.setTransition(0),
                                n.setTranslate(o),
                                n.updateProgress(),
                                n.updateActiveIndex(),
                                n.updateSlidesClasses(),
                                ((!l && n.isBeginning) || (!u && n.isEnd)) && n.updateSlidesClasses(),
                                n.params.freeModeSticky &&
                                    (clearTimeout(n.mousewheel.timeout),
                                    (n.mousewheel.timeout = Ne.nextTick(function () {
                                        n.slideToClosest();
                                    }, 300))),
                                n.emit("scroll", t),
                                n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(),
                                o === n.minTranslate() || o === n.maxTranslate())
                            )
                                return !0;
                        } else {
                            if (Ne.now() - n.mousewheel.lastScrollTime > 60)
                                if (r < 0)
                                    if ((n.isEnd && !n.params.loop) || n.animating) {
                                        if (i.releaseOnEdges) return !0;
                                    } else n.slideNext(), n.emit("scroll", t);
                                else if ((n.isBeginning && !n.params.loop) || n.animating) {
                                    if (i.releaseOnEdges) return !0;
                                } else n.slidePrev(), n.emit("scroll", t);
                            n.mousewheel.lastScrollTime = new Oe.Date().getTime();
                        }
                        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                    },
                    enable: function () {
                        var t = this;
                        if (!vt.event) return !1;
                        if (t.mousewheel.enabled) return !1;
                        var n = t.$el;
                        return (
                            "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
                            n.on("mouseenter", t.mousewheel.handleMouseEnter),
                            n.on("mouseleave", t.mousewheel.handleMouseLeave),
                            n.on(vt.event, t.mousewheel.handle),
                            (t.mousewheel.enabled = !0),
                            !0
                        );
                    },
                    disable: function () {
                        var t = this;
                        if (!vt.event) return !1;
                        if (!t.mousewheel.enabled) return !1;
                        var n = t.$el;
                        return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.off(vt.event, t.mousewheel.handle), (t.mousewheel.enabled = !1), !0;
                    },
                },
                mt = {
                    name: "mousewheel",
                    params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, {
                            mousewheel: {
                                enabled: !1,
                                enable: vt.enable.bind(e),
                                disable: vt.disable.bind(e),
                                handle: vt.handle.bind(e),
                                handleMouseEnter: vt.handleMouseEnter.bind(e),
                                handleMouseLeave: vt.handleMouseLeave.bind(e),
                                lastScrollTime: Ne.now(),
                            },
                        });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.mousewheel.enabled && e.mousewheel.enable();
                        },
                        destroy: function () {
                            var e = this;
                            e.mousewheel.enabled && e.mousewheel.disable();
                        },
                    },
                },
                gt = {
                    update: function () {
                        var e = this,
                            t = e.params.navigation;
                        if (!e.params.loop) {
                            var n = e.navigation,
                                i = n.$nextEl,
                                r = n.$prevEl;
                            r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                                i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
                        }
                    },
                    onPrevClick: function (e) {
                        var t = this;
                        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
                    },
                    onNextClick: function (e) {
                        var t = this;
                        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
                    },
                    init: function () {
                        var t = this,
                            n = t.params.navigation;
                        if (n.nextEl || n.prevEl) {
                            var i, r;
                            n.nextEl && ((i = e(n.nextEl)), t.params.uniqueNavElements && "string" == typeof n.nextEl && i.length > 1 && 1 === t.$el.find(n.nextEl).length && (i = t.$el.find(n.nextEl))),
                                n.prevEl && ((r = e(n.prevEl)), t.params.uniqueNavElements && "string" == typeof n.prevEl && r.length > 1 && 1 === t.$el.find(n.prevEl).length && (r = t.$el.find(n.prevEl))),
                                i && i.length > 0 && i.on("click", t.navigation.onNextClick),
                                r && r.length > 0 && r.on("click", t.navigation.onPrevClick),
                                Ne.extend(t.navigation, { $nextEl: i, nextEl: i && i[0], $prevEl: r, prevEl: r && r[0] });
                        }
                    },
                    destroy: function () {
                        var e = this,
                            t = e.navigation,
                            n = t.$nextEl,
                            i = t.$prevEl;
                        n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)),
                            i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
                    },
                },
                yt = {
                    name: "navigation",
                    params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { navigation: { init: gt.init.bind(e), update: gt.update.bind(e), destroy: gt.destroy.bind(e), onNextClick: gt.onNextClick.bind(e), onPrevClick: gt.onPrevClick.bind(e) } });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.navigation.init(), e.navigation.update();
                        },
                        toEdge: function () {
                            this.navigation.update();
                        },
                        fromEdge: function () {
                            this.navigation.update();
                        },
                        destroy: function () {
                            this.navigation.destroy();
                        },
                        click: function (t) {
                            var n = this,
                                i = n.navigation,
                                r = i.$nextEl,
                                a = i.$prevEl;
                            if (n.params.navigation.hideOnClick && !e(t.target).is(a) && !e(t.target).is(r)) {
                                var s;
                                r ? (s = r.hasClass(n.params.navigation.hiddenClass)) : a && (s = a.hasClass(n.params.navigation.hiddenClass)),
                                    !0 === s ? n.emit("navigationShow", n) : n.emit("navigationHide", n),
                                    r && r.toggleClass(n.params.navigation.hiddenClass),
                                    a && a.toggleClass(n.params.navigation.hiddenClass);
                            }
                        },
                    },
                },
                bt = {
                    update: function () {
                        var t = this,
                            n = t.rtl,
                            i = t.params.pagination;
                        if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                            var r,
                                a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                                s = t.pagination.$el,
                                o = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                            if (
                                (t.params.loop
                                    ? ((r = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)),
                                      r > a - 1 - 2 * t.loopedSlides && (r -= a - 2 * t.loopedSlides),
                                      r > o - 1 && (r -= o),
                                      r < 0 && "bullets" !== t.params.paginationType && (r = o + r))
                                    : (r = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                                "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                            ) {
                                var l,
                                    u,
                                    c,
                                    d = t.pagination.bullets;
                                if (
                                    (i.dynamicBullets &&
                                        ((t.pagination.bulletSize = d.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                        s.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"),
                                        i.dynamicMainBullets > 1 &&
                                            void 0 !== t.previousIndex &&
                                            ((t.pagination.dynamicBulletIndex += r - t.previousIndex),
                                            t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                                                ? (t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1)
                                                : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)),
                                        (l = r - t.pagination.dynamicBulletIndex),
                                        (u = l + (Math.min(d.length, i.dynamicMainBullets) - 1)),
                                        (c = (u + l) / 2)),
                                    d.removeClass(
                                        i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"
                                    ),
                                    s.length > 1)
                                )
                                    d.each(function (t, n) {
                                        var a = e(n),
                                            s = a.index();
                                        s === r && a.addClass(i.bulletActiveClass),
                                            i.dynamicBullets &&
                                                (s >= l && s <= u && a.addClass(i.bulletActiveClass + "-main"),
                                                s === l &&
                                                    a
                                                        .prev()
                                                        .addClass(i.bulletActiveClass + "-prev")
                                                        .prev()
                                                        .addClass(i.bulletActiveClass + "-prev-prev"),
                                                s === u &&
                                                    a
                                                        .next()
                                                        .addClass(i.bulletActiveClass + "-next")
                                                        .next()
                                                        .addClass(i.bulletActiveClass + "-next-next"));
                                    });
                                else {
                                    if ((d.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets)) {
                                        for (var p = d.eq(l), f = d.eq(u), h = l; h <= u; h += 1) d.eq(h).addClass(i.bulletActiveClass + "-main");
                                        p
                                            .prev()
                                            .addClass(i.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(i.bulletActiveClass + "-prev-prev"),
                                            f
                                                .next()
                                                .addClass(i.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(i.bulletActiveClass + "-next-next");
                                    }
                                }
                                if (i.dynamicBullets) {
                                    var v = Math.min(d.length, i.dynamicMainBullets + 4),
                                        m = (t.pagination.bulletSize * v - t.pagination.bulletSize) / 2 - c * t.pagination.bulletSize,
                                        g = n ? "right" : "left";
                                    d.css(t.isHorizontal() ? g : "top", m + "px");
                                }
                            }
                            if (("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type)) {
                                var y;
                                y = i.progressbarOpposite ? (t.isHorizontal() ? "vertical" : "horizontal") : t.isHorizontal() ? "horizontal" : "vertical";
                                var b = (r + 1) / o,
                                    x = 1,
                                    w = 1;
                                "horizontal" === y ? (x = b) : (w = b),
                                    s
                                        .find("." + i.progressbarFillClass)
                                        .transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + w + ")")
                                        .transition(t.params.speed);
                            }
                            "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(t, r + 1, o)), t.emit("paginationRender", t, s[0])) : t.emit("paginationUpdate", t, s[0]),
                                s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass);
                        }
                    },
                    render: function () {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                i = e.pagination.$el,
                                r = "";
                            if ("bullets" === t.type) {
                                for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1)
                                    t.renderBullet ? (r += t.renderBullet.call(e, s, t.bulletClass)) : (r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                                i.html(r), (e.pagination.bullets = i.find("." + t.bulletClass));
                            }
                            "fraction" === t.type && ((r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(r)),
                                "progressbar" === t.type && ((r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(r)),
                                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                        }
                    },
                    init: function () {
                        var t = this,
                            n = t.params.pagination;
                        if (n.el) {
                            var i = e(n.el);
                            0 !== i.length &&
                                (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)),
                                "bullets" === n.type && n.clickable && i.addClass(n.clickableClass),
                                i.addClass(n.modifierClass + n.type),
                                "bullets" === n.type && n.dynamicBullets && (i.addClass("" + n.modifierClass + n.type + "-dynamic"), (t.pagination.dynamicBulletIndex = 0), n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)),
                                "progressbar" === n.type && n.progressbarOpposite && i.addClass(n.progressbarOppositeClass),
                                n.clickable &&
                                    i.on("click", "." + n.bulletClass, function (n) {
                                        n.preventDefault();
                                        var i = e(this).index() * t.params.slidesPerGroup;
                                        t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                                    }),
                                Ne.extend(t.pagination, { $el: i, el: i[0] }));
                        }
                    },
                    destroy: function () {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var n = e.pagination.$el;
                            n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass);
                        }
                    },
                },
                xt = {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (e) {
                                return e;
                            },
                            formatFractionTotal: function (e) {
                                return e;
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock",
                        },
                    },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { pagination: { init: bt.init.bind(e), render: bt.render.bind(e), update: bt.update.bind(e), destroy: bt.destroy.bind(e), dynamicBulletIndex: 0 } });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.pagination.init(), e.pagination.render(), e.pagination.update();
                        },
                        activeIndexChange: function () {
                            var e = this;
                            e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
                        },
                        snapIndexChange: function () {
                            var e = this;
                            e.params.loop || e.pagination.update();
                        },
                        slidesLengthChange: function () {
                            var e = this;
                            e.params.loop && (e.pagination.render(), e.pagination.update());
                        },
                        snapGridLengthChange: function () {
                            var e = this;
                            e.params.loop || (e.pagination.render(), e.pagination.update());
                        },
                        destroy: function () {
                            this.pagination.destroy();
                        },
                        click: function (t) {
                            var n = this;
                            if (n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass)) {
                                !0 === n.pagination.$el.hasClass(n.params.pagination.hiddenClass) ? n.emit("paginationShow", n) : n.emit("paginationHide", n), n.pagination.$el.toggleClass(n.params.pagination.hiddenClass);
                            }
                        },
                    },
                },
                wt = {
                    setTranslate: function () {
                        var e = this;
                        if (e.params.scrollbar.el && e.scrollbar.el) {
                            var t = e.scrollbar,
                                n = e.rtlTranslate,
                                i = e.progress,
                                r = t.dragSize,
                                a = t.trackSize,
                                s = t.$dragEl,
                                o = t.$el,
                                l = e.params.scrollbar,
                                u = r,
                                c = (a - r) * i;
                            n ? ((c = -c), c > 0 ? ((u = r - c), (c = 0)) : -c + r > a && (u = a + c)) : c < 0 ? ((u = r + c), (c = 0)) : c + r > a && (u = a - c),
                                e.isHorizontal()
                                    ? (He.transforms3d ? s.transform("translate3d(" + c + "px, 0, 0)") : s.transform("translateX(" + c + "px)"), (s[0].style.width = u + "px"))
                                    : (He.transforms3d ? s.transform("translate3d(0px, " + c + "px, 0)") : s.transform("translateY(" + c + "px)"), (s[0].style.height = u + "px")),
                                l.hide &&
                                    (clearTimeout(e.scrollbar.timeout),
                                    (o[0].style.opacity = 1),
                                    (e.scrollbar.timeout = setTimeout(function () {
                                        (o[0].style.opacity = 0), o.transition(400);
                                    }, 1e3)));
                        }
                    },
                    setTransition: function (e) {
                        var t = this;
                        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
                    },
                    updateSize: function () {
                        var e = this;
                        if (e.params.scrollbar.el && e.scrollbar.el) {
                            var t = e.scrollbar,
                                n = t.$dragEl,
                                i = t.$el;
                            (n[0].style.width = ""), (n[0].style.height = "");
                            var r,
                                a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                                s = e.size / e.virtualSize,
                                o = s * (a / e.size);
                            (r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10)),
                                e.isHorizontal() ? (n[0].style.width = r + "px") : (n[0].style.height = r + "px"),
                                (i[0].style.display = s >= 1 ? "none" : ""),
                                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                                Ne.extend(t, { trackSize: a, divider: s, moveDivider: o, dragSize: r }),
                                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
                        }
                    },
                    getPointerPosition: function (e) {
                        return this.isHorizontal()
                            ? "touchstart" === e.type || "touchmove" === e.type
                                ? e.targetTouches[0].pageX
                                : e.pageX || e.clientX
                            : "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageY
                            : e.pageY || e.clientY;
                    },
                    setDragPosition: function (e) {
                        var t,
                            n = this,
                            i = n.scrollbar,
                            r = n.rtlTranslate,
                            a = i.$el,
                            s = i.dragSize,
                            o = i.trackSize,
                            l = i.dragStartPos;
                        (t = (i.getPointerPosition(e) - a.offset()[n.isHorizontal() ? "left" : "top"] - (null !== l ? l : s / 2)) / (o - s)), (t = Math.max(Math.min(t, 1), 0)), r && (t = 1 - t);
                        var u = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
                        n.updateProgress(u), n.setTranslate(u), n.updateActiveIndex(), n.updateSlidesClasses();
                    },
                    onDragStart: function (e) {
                        var t = this,
                            n = t.params.scrollbar,
                            i = t.scrollbar,
                            r = t.$wrapperEl,
                            a = i.$el,
                            s = i.$dragEl;
                        (t.scrollbar.isTouched = !0),
                            (t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
                            e.preventDefault(),
                            e.stopPropagation(),
                            r.transition(100),
                            s.transition(100),
                            i.setDragPosition(e),
                            clearTimeout(t.scrollbar.dragTimeout),
                            a.transition(0),
                            n.hide && a.css("opacity", 1),
                            t.emit("scrollbarDragStart", e);
                    },
                    onDragMove: function (e) {
                        var t = this,
                            n = t.scrollbar,
                            i = t.$wrapperEl,
                            r = n.$el,
                            a = n.$dragEl;
                        t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), n.setDragPosition(e), i.transition(0), r.transition(0), a.transition(0), t.emit("scrollbarDragMove", e));
                    },
                    onDragEnd: function (e) {
                        var t = this,
                            n = t.params.scrollbar,
                            i = t.scrollbar,
                            r = i.$el;
                        t.scrollbar.isTouched &&
                            ((t.scrollbar.isTouched = !1),
                            n.hide &&
                                (clearTimeout(t.scrollbar.dragTimeout),
                                (t.scrollbar.dragTimeout = Ne.nextTick(function () {
                                    r.css("opacity", 0), r.transition(400);
                                }, 1e3))),
                            t.emit("scrollbarDragEnd", e),
                            n.snapOnRelease && t.slideToClosest());
                    },
                    enableDraggable: function () {
                        var e = this;
                        if (e.params.scrollbar.el) {
                            var t = e.scrollbar,
                                n = e.touchEventsTouch,
                                i = e.touchEventsDesktop,
                                r = e.params,
                                a = t.$el,
                                s = a[0],
                                o = !(!He.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                                l = !(!He.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                            He.touch
                                ? (s.addEventListener(n.start, e.scrollbar.onDragStart, o), s.addEventListener(n.move, e.scrollbar.onDragMove, o), s.addEventListener(n.end, e.scrollbar.onDragEnd, l))
                                : (s.addEventListener(i.start, e.scrollbar.onDragStart, o), Ie.addEventListener(i.move, e.scrollbar.onDragMove, o), Ie.addEventListener(i.end, e.scrollbar.onDragEnd, l));
                        }
                    },
                    disableDraggable: function () {
                        var e = this;
                        if (e.params.scrollbar.el) {
                            var t = e.scrollbar,
                                n = e.touchEventsTouch,
                                i = e.touchEventsDesktop,
                                r = e.params,
                                a = t.$el,
                                s = a[0],
                                o = !(!He.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                                l = !(!He.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                            He.touch
                                ? (s.removeEventListener(n.start, e.scrollbar.onDragStart, o), s.removeEventListener(n.move, e.scrollbar.onDragMove, o), s.removeEventListener(n.end, e.scrollbar.onDragEnd, l))
                                : (s.removeEventListener(i.start, e.scrollbar.onDragStart, o), Ie.removeEventListener(i.move, e.scrollbar.onDragMove, o), Ie.removeEventListener(i.end, e.scrollbar.onDragEnd, l));
                        }
                    },
                    init: function () {
                        var t = this;
                        if (t.params.scrollbar.el) {
                            var n = t.scrollbar,
                                i = t.$el,
                                r = t.params.scrollbar,
                                a = e(r.el);
                            t.params.uniqueNavElements && "string" == typeof r.el && a.length > 1 && 1 === i.find(r.el).length && (a = i.find(r.el));
                            var s = a.find("." + t.params.scrollbar.dragClass);
                            0 === s.length && ((s = e('<div class="' + t.params.scrollbar.dragClass + '"></div>')), a.append(s)), Ne.extend(n, { $el: a, el: a[0], $dragEl: s, dragEl: s[0] }), r.draggable && n.enableDraggable();
                        }
                    },
                    destroy: function () {
                        this.scrollbar.disableDraggable();
                    },
                },
                Tt = {
                    name: "scrollbar",
                    params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, {
                            scrollbar: {
                                init: wt.init.bind(e),
                                destroy: wt.destroy.bind(e),
                                updateSize: wt.updateSize.bind(e),
                                setTranslate: wt.setTranslate.bind(e),
                                setTransition: wt.setTransition.bind(e),
                                enableDraggable: wt.enableDraggable.bind(e),
                                disableDraggable: wt.disableDraggable.bind(e),
                                setDragPosition: wt.setDragPosition.bind(e),
                                getPointerPosition: wt.getPointerPosition.bind(e),
                                onDragStart: wt.onDragStart.bind(e),
                                onDragMove: wt.onDragMove.bind(e),
                                onDragEnd: wt.onDragEnd.bind(e),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null,
                            },
                        });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                        },
                        update: function () {
                            this.scrollbar.updateSize();
                        },
                        resize: function () {
                            this.scrollbar.updateSize();
                        },
                        observerUpdate: function () {
                            this.scrollbar.updateSize();
                        },
                        setTranslate: function () {
                            this.scrollbar.setTranslate();
                        },
                        setTransition: function (e) {
                            this.scrollbar.setTransition(e);
                        },
                        destroy: function () {
                            this.scrollbar.destroy();
                        },
                    },
                },
                Et = {
                    setTransform: function (t, n) {
                        var i = this,
                            r = i.rtl,
                            a = e(t),
                            s = r ? -1 : 1,
                            o = a.attr("data-swiper-parallax") || "0",
                            l = a.attr("data-swiper-parallax-x"),
                            u = a.attr("data-swiper-parallax-y"),
                            c = a.attr("data-swiper-parallax-scale"),
                            d = a.attr("data-swiper-parallax-opacity");
                        if (
                            (l || u ? ((l = l || "0"), (u = u || "0")) : i.isHorizontal() ? ((l = o), (u = "0")) : ((u = o), (l = "0")),
                            (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n * s + "%" : l * n * s + "px"),
                            (u = u.indexOf("%") >= 0 ? parseInt(u, 10) * n + "%" : u * n + "px"),
                            void 0 !== d && null !== d)
                        ) {
                            var p = d - (d - 1) * (1 - Math.abs(n));
                            a[0].style.opacity = p;
                        }
                        if (void 0 === c || null === c) a.transform("translate3d(" + l + ", " + u + ", 0px)");
                        else {
                            var f = c - (c - 1) * (1 - Math.abs(n));
                            a.transform("translate3d(" + l + ", " + u + ", 0px) scale(" + f + ")");
                        }
                    },
                    setTranslate: function () {
                        var t = this,
                            n = t.$el,
                            i = t.slides,
                            r = t.progress,
                            a = t.snapGrid;
                        n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, n) {
                            t.parallax.setTransform(n, r);
                        }),
                            i.each(function (n, i) {
                                var s = i.progress;
                                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(n / 2) - r * (a.length - 1)),
                                    (s = Math.min(Math.max(s, -1), 1)),
                                    e(i)
                                        .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                        .each(function (e, n) {
                                            t.parallax.setTransform(n, s);
                                        });
                            });
                    },
                    setTransition: function (t) {
                        void 0 === t && (t = this.params.speed),
                            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (n, i) {
                                var r = e(i),
                                    a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                                0 === t && (a = 0), r.transition(a);
                            });
                    },
                },
                St = {
                    name: "parallax",
                    params: { parallax: { enabled: !1 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { parallax: { setTransform: Et.setTransform.bind(e), setTranslate: Et.setTranslate.bind(e), setTransition: Et.setTransition.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                        },
                        init: function () {
                            var e = this;
                            e.params.parallax.enabled && e.parallax.setTranslate();
                        },
                        setTranslate: function () {
                            var e = this;
                            e.params.parallax.enabled && e.parallax.setTranslate();
                        },
                        setTransition: function (e) {
                            var t = this;
                            t.params.parallax.enabled && t.parallax.setTransition(e);
                        },
                    },
                },
                Ct = {
                    getDistanceBetweenTouches: function (e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX,
                            n = e.targetTouches[0].pageY,
                            i = e.targetTouches[1].pageX,
                            r = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2));
                    },
                    onGestureStart: function (t) {
                        var n = this,
                            i = n.params.zoom,
                            r = n.zoom,
                            a = r.gesture;
                        if (((r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1), !He.gestures)) {
                            if ("touchstart" !== t.type || ("touchstart" === t.type && t.targetTouches.length < 2)) return;
                            (r.fakeGestureTouched = !0), (a.scaleStart = Ct.getDistanceBetweenTouches(t));
                        }
                        if (
                            !(
                                (a.$slideEl && a.$slideEl.length) ||
                                ((a.$slideEl = e(t.target).closest(".swiper-slide")),
                                0 === a.$slideEl.length && (a.$slideEl = n.slides.eq(n.activeIndex)),
                                (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
                                (a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)),
                                (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                                0 !== a.$imageWrapEl.length)
                            )
                        )
                            return void (a.$imageEl = void 0);
                        a.$imageEl.transition(0), (n.zoom.isScaling = !0);
                    },
                    onGestureChange: function (e) {
                        var t = this,
                            n = t.params.zoom,
                            i = t.zoom,
                            r = i.gesture;
                        if (!He.gestures) {
                            if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                            (i.fakeGestureMoved = !0), (r.scaleMove = Ct.getDistanceBetweenTouches(e));
                        }
                        r.$imageEl &&
                            0 !== r.$imageEl.length &&
                            (He.gestures ? (i.scale = e.scale * i.currentScale) : (i.scale = (r.scaleMove / r.scaleStart) * i.currentScale),
                            i.scale > r.maxRatio && (i.scale = r.maxRatio - 1 + Math.pow(i.scale - r.maxRatio + 1, 0.5)),
                            i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, 0.5)),
                            r.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
                    },
                    onGestureEnd: function (e) {
                        var t = this,
                            n = t.params.zoom,
                            i = t.zoom,
                            r = i.gesture;
                        if (!He.gestures) {
                            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                            if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !Ue.android)) return;
                            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                        }
                        r.$imageEl &&
                            0 !== r.$imageEl.length &&
                            ((i.scale = Math.max(Math.min(i.scale, r.maxRatio), n.minRatio)),
                            r.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                            (i.currentScale = i.scale),
                            (i.isScaling = !1),
                            1 === i.scale && (r.$slideEl = void 0));
                    },
                    onTouchStart: function (e) {
                        var t = this,
                            n = t.zoom,
                            i = n.gesture,
                            r = n.image;
                        i.$imageEl &&
                            0 !== i.$imageEl.length &&
                            (r.isTouched ||
                                (Ue.android && e.preventDefault(),
                                (r.isTouched = !0),
                                (r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                (r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
                    },
                    onTouchMove: function (e) {
                        var t = this,
                            n = t.zoom,
                            i = n.gesture,
                            r = n.image,
                            a = n.velocity;
                        if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), r.isTouched && i.$slideEl)) {
                            r.isMoved ||
                                ((r.width = i.$imageEl[0].offsetWidth),
                                (r.height = i.$imageEl[0].offsetHeight),
                                (r.startX = Ne.getTranslate(i.$imageWrapEl[0], "x") || 0),
                                (r.startY = Ne.getTranslate(i.$imageWrapEl[0], "y") || 0),
                                (i.slideWidth = i.$slideEl[0].offsetWidth),
                                (i.slideHeight = i.$slideEl[0].offsetHeight),
                                i.$imageWrapEl.transition(0),
                                t.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
                            var s = r.width * n.scale,
                                o = r.height * n.scale;
                            if (!(s < i.slideWidth && o < i.slideHeight)) {
                                if (
                                    ((r.minX = Math.min(i.slideWidth / 2 - s / 2, 0)),
                                    (r.maxX = -r.minX),
                                    (r.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                                    (r.maxY = -r.minY),
                                    (r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                    (r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                                    !r.isMoved && !n.isScaling)
                                ) {
                                    if (t.isHorizontal() && ((Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x) || (Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)))
                                        return void (r.isTouched = !1);
                                    if (!t.isHorizontal() && ((Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y) || (Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)))
                                        return void (r.isTouched = !1);
                                }
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    (r.isMoved = !0),
                                    (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX),
                                    (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY),
                                    r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
                                    r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
                                    r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
                                    r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
                                    a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x),
                                    a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y),
                                    a.prevTime || (a.prevTime = Date.now()),
                                    (a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
                                    (a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
                                    Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                                    Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                                    (a.prevPositionX = r.touchesCurrent.x),
                                    (a.prevPositionY = r.touchesCurrent.y),
                                    (a.prevTime = Date.now()),
                                    i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)");
                            }
                        }
                    },
                    onTouchEnd: function () {
                        var e = this,
                            t = e.zoom,
                            n = t.gesture,
                            i = t.image,
                            r = t.velocity;
                        if (n.$imageEl && 0 !== n.$imageEl.length) {
                            if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                            (i.isTouched = !1), (i.isMoved = !1);
                            var a = 300,
                                s = 300,
                                o = r.x * a,
                                l = i.currentX + o,
                                u = r.y * s,
                                c = i.currentY + u;
                            0 !== r.x && (a = Math.abs((l - i.currentX) / r.x)), 0 !== r.y && (s = Math.abs((c - i.currentY) / r.y));
                            var d = Math.max(a, s);
                            (i.currentX = l), (i.currentY = c);
                            var p = i.width * t.scale,
                                f = i.height * t.scale;
                            (i.minX = Math.min(n.slideWidth / 2 - p / 2, 0)),
                                (i.maxX = -i.minX),
                                (i.minY = Math.min(n.slideHeight / 2 - f / 2, 0)),
                                (i.maxY = -i.minY),
                                (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                                (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                                n.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
                        }
                    },
                    onTransitionEnd: function () {
                        var e = this,
                            t = e.zoom,
                            n = t.gesture;
                        n.$slideEl &&
                            e.previousIndex !== e.activeIndex &&
                            (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), (t.scale = 1), (t.currentScale = 1), (n.$slideEl = void 0), (n.$imageEl = void 0), (n.$imageWrapEl = void 0));
                    },
                    toggle: function (e) {
                        var t = this,
                            n = t.zoom;
                        n.scale && 1 !== n.scale ? n.out() : n.in(e);
                    },
                    in: function (t) {
                        var n = this,
                            i = n.zoom,
                            r = n.params.zoom,
                            a = i.gesture,
                            s = i.image;
                        if (
                            (a.$slideEl || ((a.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex)), (a.$imageEl = a.$slideEl.find("img, svg, canvas")), (a.$imageWrapEl = a.$imageEl.parent("." + r.containerClass))),
                            a.$imageEl && 0 !== a.$imageEl.length)
                        ) {
                            a.$slideEl.addClass("" + r.zoomedSlideClass);
                            var o, l, u, c, d, p, f, h, v, m, g, y, b, x, w, T, E, S;
                            void 0 === s.touchesStart.x && t
                                ? ((o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX), (l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
                                : ((o = s.touchesStart.x), (l = s.touchesStart.y)),
                                (i.scale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
                                (i.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
                                t
                                    ? ((E = a.$slideEl[0].offsetWidth),
                                      (S = a.$slideEl[0].offsetHeight),
                                      (u = a.$slideEl.offset().left),
                                      (c = a.$slideEl.offset().top),
                                      (d = u + E / 2 - o),
                                      (p = c + S / 2 - l),
                                      (v = a.$imageEl[0].offsetWidth),
                                      (m = a.$imageEl[0].offsetHeight),
                                      (g = v * i.scale),
                                      (y = m * i.scale),
                                      (b = Math.min(E / 2 - g / 2, 0)),
                                      (x = Math.min(S / 2 - y / 2, 0)),
                                      (w = -b),
                                      (T = -x),
                                      (f = d * i.scale),
                                      (h = p * i.scale),
                                      f < b && (f = b),
                                      f > w && (f = w),
                                      h < x && (h = x),
                                      h > T && (h = T))
                                    : ((f = 0), (h = 0)),
                                a.$imageWrapEl.transition(300).transform("translate3d(" + f + "px, " + h + "px,0)"),
                                a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")");
                        }
                    },
                    out: function () {
                        var t = this,
                            n = t.zoom,
                            i = t.params.zoom,
                            r = n.gesture;
                        r.$slideEl || ((r.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex)), (r.$imageEl = r.$slideEl.find("img, svg, canvas")), (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass))),
                            r.$imageEl &&
                                0 !== r.$imageEl.length &&
                                ((n.scale = 1),
                                (n.currentScale = 1),
                                r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                                r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                                r.$slideEl.removeClass("" + i.zoomedSlideClass),
                                (r.$slideEl = void 0));
                    },
                    enable: function () {
                        var e = this,
                            t = e.zoom;
                        if (!t.enabled) {
                            t.enabled = !0;
                            var n = !("touchstart" !== e.touchEvents.start || !He.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                            He.gestures
                                ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n),
                                  e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n),
                                  e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n))
                                : "touchstart" === e.touchEvents.start &&
                                  (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n),
                                  e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n),
                                  e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)),
                                e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
                        }
                    },
                    disable: function () {
                        var e = this,
                            t = e.zoom;
                        if (t.enabled) {
                            e.zoom.enabled = !1;
                            var n = !("touchstart" !== e.touchEvents.start || !He.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                            He.gestures
                                ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n),
                                  e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n),
                                  e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n))
                                : "touchstart" === e.touchEvents.start &&
                                  (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n),
                                  e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n),
                                  e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)),
                                e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
                        }
                    },
                },
                kt = {
                    name: "zoom",
                    params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                    create: function () {
                        var e = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (n) {
                            t[n] = Ct[n].bind(e);
                        }),
                            Ne.extend(e, { zoom: t });
                        var n = 1;
                        Object.defineProperty(e.zoom, "scale", {
                            get: function () {
                                return n;
                            },
                            set: function (t) {
                                if (n !== t) {
                                    var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                        r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                    e.emit("zoomChange", t, i, r);
                                }
                                n = t;
                            },
                        });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.zoom.enabled && e.zoom.enable();
                        },
                        destroy: function () {
                            this.zoom.disable();
                        },
                        touchStart: function (e) {
                            var t = this;
                            t.zoom.enabled && t.zoom.onTouchStart(e);
                        },
                        touchEnd: function (e) {
                            var t = this;
                            t.zoom.enabled && t.zoom.onTouchEnd(e);
                        },
                        doubleTap: function (e) {
                            var t = this;
                            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
                        },
                        transitionEnd: function () {
                            var e = this;
                            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                        },
                    },
                },
                At = {
                    loadInSlide: function (t, n) {
                        void 0 === n && (n = !0);
                        var i = this,
                            r = i.params.lazy;
                        if (void 0 !== t && 0 !== i.slides.length) {
                            var a = i.virtual && i.params.virtual.enabled,
                                s = a ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                                o = s.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                            !s.hasClass(r.elementClass) || s.hasClass(r.loadedClass) || s.hasClass(r.loadingClass) || (o = o.add(s[0])),
                                0 !== o.length &&
                                    o.each(function (t, a) {
                                        var o = e(a);
                                        o.addClass(r.loadingClass);
                                        var l = o.attr("data-background"),
                                            u = o.attr("data-src"),
                                            c = o.attr("data-srcset"),
                                            d = o.attr("data-sizes");
                                        i.loadImage(o[0], u || l, c, d, !1, function () {
                                            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                                if (
                                                    (l
                                                        ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background"))
                                                        : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), u && (o.attr("src", u), o.removeAttr("data-src"))),
                                                    o.addClass(r.loadedClass).removeClass(r.loadingClass),
                                                    s.find("." + r.preloaderClass).remove(),
                                                    i.params.loop && n)
                                                ) {
                                                    var e = s.attr("data-swiper-slide-index");
                                                    if (s.hasClass(i.params.slideDuplicateClass)) {
                                                        var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                        i.lazy.loadInSlide(t.index(), !1);
                                                    } else {
                                                        var a = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                        i.lazy.loadInSlide(a.index(), !1);
                                                    }
                                                }
                                                i.emit("lazyImageReady", s[0], o[0]);
                                            }
                                        }),
                                            i.emit("lazyImageLoad", s[0], o[0]);
                                    });
                        }
                    },
                    load: function () {
                        function t(e) {
                            if (l) {
                                if (r.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                            } else if (s[e]) return !0;
                            return !1;
                        }
                        function n(t) {
                            return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
                        }
                        var i = this,
                            r = i.$wrapperEl,
                            a = i.params,
                            s = i.slides,
                            o = i.activeIndex,
                            l = i.virtual && a.virtual.enabled,
                            u = a.lazy,
                            c = a.slidesPerView;
                        if (("auto" === c && (c = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                            r.children("." + a.slideVisibleClass).each(function (t, n) {
                                var r = l ? e(n).attr("data-swiper-slide-index") : e(n).index();
                                i.lazy.loadInSlide(r);
                            });
                        else if (c > 1) for (var d = o; d < o + c; d += 1) t(d) && i.lazy.loadInSlide(d);
                        else i.lazy.loadInSlide(o);
                        if (u.loadPrevNext)
                            if (c > 1 || (u.loadPrevNextAmount && u.loadPrevNextAmount > 1)) {
                                for (var p = u.loadPrevNextAmount, f = c, h = Math.min(o + f + Math.max(p, f), s.length), v = Math.max(o - Math.max(f, p), 0), m = o + c; m < h; m += 1) t(m) && i.lazy.loadInSlide(m);
                                for (var g = v; g < o; g += 1) t(g) && i.lazy.loadInSlide(g);
                            } else {
                                var y = r.children("." + a.slideNextClass);
                                y.length > 0 && i.lazy.loadInSlide(n(y));
                                var b = r.children("." + a.slidePrevClass);
                                b.length > 0 && i.lazy.loadInSlide(n(b));
                            }
                    },
                },
                Mt = {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader",
                        },
                    },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { lazy: { initialImageLoaded: !1, load: At.load.bind(e), loadInSlide: At.loadInSlide.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                        },
                        init: function () {
                            var e = this;
                            e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
                        },
                        scroll: function () {
                            var e = this;
                            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                        },
                        resize: function () {
                            var e = this;
                            e.params.lazy.enabled && e.lazy.load();
                        },
                        scrollbarDragMove: function () {
                            var e = this;
                            e.params.lazy.enabled && e.lazy.load();
                        },
                        transitionStart: function () {
                            var e = this;
                            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                        },
                        transitionEnd: function () {
                            var e = this;
                            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                        },
                    },
                },
                Pt = {
                    LinearSpline: function (e, t) {
                        var n = (function () {
                            var e, t, n;
                            return function (i, r) {
                                for (t = -1, e = i.length; e - t > 1; ) (n = (e + t) >> 1), i[n] <= r ? (t = n) : (e = n);
                                return e;
                            };
                        })();
                        (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                        var i, r;
                        return (
                            (this.interpolate = function (e) {
                                return e ? ((r = n(this.x, e)), (i = r - 1), ((e - this.x[i]) * (this.y[r] - this.y[i])) / (this.x[r] - this.x[i]) + this.y[i]) : 0;
                            }),
                            this
                        );
                    },
                    getInterpolateFunction: function (e) {
                        var t = this;
                        t.controller.spline || (t.controller.spline = t.params.loop ? new Pt.LinearSpline(t.slidesGrid, e.slidesGrid) : new Pt.LinearSpline(t.snapGrid, e.snapGrid));
                    },
                    setTranslate: function (e, t) {
                        function n(e) {
                            var t = a.rtlTranslate ? -a.translate : a.translate;
                            "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), (r = -a.controller.spline.interpolate(-t))),
                                (r && "container" !== a.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate())), (r = (t - a.minTranslate()) * i + e.minTranslate())),
                                a.params.controller.inverse && (r = e.maxTranslate() - r),
                                e.updateProgress(r),
                                e.setTranslate(r, a),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses();
                        }
                        var i,
                            r,
                            a = this,
                            s = a.controller.control;
                        if (Array.isArray(s)) for (var o = 0; o < s.length; o += 1) s[o] !== t && s[o] instanceof rt && n(s[o]);
                        else s instanceof rt && t !== s && n(s);
                    },
                    setTransition: function (e, t) {
                        function n(t) {
                            t.setTransition(e, r),
                                0 !== e &&
                                    (t.transitionStart(),
                                    t.params.autoHeight &&
                                        Ne.nextTick(function () {
                                            t.updateAutoHeight();
                                        }),
                                    t.$wrapperEl.transitionEnd(function () {
                                        a && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd());
                                    }));
                        }
                        var i,
                            r = this,
                            a = r.controller.control;
                        if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof rt && n(a[i]);
                        else a instanceof rt && t !== a && n(a);
                    },
                },
                Lt = {
                    name: "controller",
                    params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: Pt.getInterpolateFunction.bind(e), setTranslate: Pt.setTranslate.bind(e), setTransition: Pt.setTransition.bind(e) } });
                    },
                    on: {
                        update: function () {
                            var e = this;
                            e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                        },
                        resize: function () {
                            var e = this;
                            e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                        },
                        observerUpdate: function () {
                            var e = this;
                            e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                        },
                        setTranslate: function (e, t) {
                            var n = this;
                            n.controller.control && n.controller.setTranslate(e, t);
                        },
                        setTransition: function (e, t) {
                            var n = this;
                            n.controller.control && n.controller.setTransition(e, t);
                        },
                    },
                },
                zt = {
                    makeElFocusable: function (e) {
                        return e.attr("tabIndex", "0"), e;
                    },
                    addElRole: function (e, t) {
                        return e.attr("role", t), e;
                    },
                    addElLabel: function (e, t) {
                        return e.attr("aria-label", t), e;
                    },
                    disableEl: function (e) {
                        return e.attr("aria-disabled", !0), e;
                    },
                    enableEl: function (e) {
                        return e.attr("aria-disabled", !1), e;
                    },
                    onEnterKey: function (t) {
                        var n = this,
                            i = n.params.a11y;
                        if (13 === t.keyCode) {
                            var r = e(t.target);
                            n.navigation && n.navigation.$nextEl && r.is(n.navigation.$nextEl) && ((n.isEnd && !n.params.loop) || n.slideNext(), n.isEnd ? n.a11y.notify(i.lastSlideMessage) : n.a11y.notify(i.nextSlideMessage)),
                                n.navigation &&
                                    n.navigation.$prevEl &&
                                    r.is(n.navigation.$prevEl) &&
                                    ((n.isBeginning && !n.params.loop) || n.slidePrev(), n.isBeginning ? n.a11y.notify(i.firstSlideMessage) : n.a11y.notify(i.prevSlideMessage)),
                                n.pagination && r.is("." + n.params.pagination.bulletClass) && r[0].click();
                        }
                    },
                    notify: function (e) {
                        var t = this,
                            n = t.a11y.liveRegion;
                        0 !== n.length && (n.html(""), n.html(e));
                    },
                    updateNavigation: function () {
                        var e = this;
                        if (!e.params.loop) {
                            var t = e.navigation,
                                n = t.$nextEl,
                                i = t.$prevEl;
                            i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n));
                        }
                    },
                    updatePagination: function () {
                        var t = this,
                            n = t.params.a11y;
                        t.pagination &&
                            t.params.pagination.clickable &&
                            t.pagination.bullets &&
                            t.pagination.bullets.length &&
                            t.pagination.bullets.each(function (i, r) {
                                var a = e(r);
                                t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, n.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
                            });
                    },
                    init: function () {
                        var e = this;
                        e.$el.append(e.a11y.liveRegion);
                        var t,
                            n,
                            i = e.params.a11y;
                        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                            t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)),
                            n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)),
                            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
                    },
                    destroy: function () {
                        var e = this;
                        e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                        var t, n;
                        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                            t && t.off("keydown", e.a11y.onEnterKey),
                            n && n.off("keydown", e.a11y.onEnterKey),
                            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
                    },
                },
                Dt = {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                        },
                    },
                    create: function () {
                        var t = this;
                        Ne.extend(t, { a11y: { liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                            Object.keys(zt).forEach(function (e) {
                                t.a11y[e] = zt[e].bind(t);
                            });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                        },
                        toEdge: function () {
                            var e = this;
                            e.params.a11y.enabled && e.a11y.updateNavigation();
                        },
                        fromEdge: function () {
                            var e = this;
                            e.params.a11y.enabled && e.a11y.updateNavigation();
                        },
                        paginationUpdate: function () {
                            var e = this;
                            e.params.a11y.enabled && e.a11y.updatePagination();
                        },
                        destroy: function () {
                            var e = this;
                            e.params.a11y.enabled && e.a11y.destroy();
                        },
                    },
                },
                It = {
                    init: function () {
                        var e = this;
                        if (e.params.history) {
                            if (!Oe.history || !Oe.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                            var t = e.history;
                            (t.initialized = !0),
                                (t.paths = It.getPathValues()),
                                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Oe.addEventListener("popstate", e.history.setHistoryPopState));
                        }
                    },
                    destroy: function () {
                        var e = this;
                        e.params.history.replaceState || Oe.removeEventListener("popstate", e.history.setHistoryPopState);
                    },
                    setHistoryPopState: function () {
                        var e = this;
                        (e.history.paths = It.getPathValues()), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
                    },
                    getPathValues: function () {
                        var e = Oe.location.pathname
                                .slice(1)
                                .split("/")
                                .filter(function (e) {
                                    return "" !== e;
                                }),
                            t = e.length;
                        return { key: e[t - 2], value: e[t - 1] };
                    },
                    setHistory: function (e, t) {
                        var n = this;
                        if (n.history.initialized && n.params.history.enabled) {
                            var i = n.slides.eq(t),
                                r = It.slugify(i.attr("data-history"));
                            Oe.location.pathname.includes(e) || (r = e + "/" + r);
                            var a = Oe.history.state;
                            (a && a.value === r) || (n.params.history.replaceState ? Oe.history.replaceState({ value: r }, null, r) : Oe.history.pushState({ value: r }, null, r));
                        }
                    },
                    slugify: function (e) {
                        return e
                            .toString()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]+/g, "")
                            .replace(/--+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, "");
                    },
                    scrollToSlide: function (e, t, n) {
                        var i = this;
                        if (t)
                            for (var r = 0, a = i.slides.length; r < a; r += 1) {
                                var s = i.slides.eq(r),
                                    o = It.slugify(s.attr("data-history"));
                                if (o === t && !s.hasClass(i.params.slideDuplicateClass)) {
                                    var l = s.index();
                                    i.slideTo(l, e, n);
                                }
                            }
                        else i.slideTo(0, e, n);
                    },
                },
                Ot = {
                    name: "history",
                    params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { history: { init: It.init.bind(e), setHistory: It.setHistory.bind(e), setHistoryPopState: It.setHistoryPopState.bind(e), scrollToSlide: It.scrollToSlide.bind(e), destroy: It.destroy.bind(e) } });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.history.enabled && e.history.init();
                        },
                        destroy: function () {
                            var e = this;
                            e.params.history.enabled && e.history.destroy();
                        },
                        transitionEnd: function () {
                            var e = this;
                            e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                        },
                    },
                },
                $t = {
                    onHashCange: function () {
                        var e = this,
                            t = Ie.location.hash.replace("#", "");
                        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                            var n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                            if (void 0 === n) return;
                            e.slideTo(n);
                        }
                    },
                    setHash: function () {
                        var e = this;
                        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                            if (e.params.hashNavigation.replaceState && Oe.history && Oe.history.replaceState) Oe.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                            else {
                                var t = e.slides.eq(e.activeIndex),
                                    n = t.attr("data-hash") || t.attr("data-history");
                                Ie.location.hash = n || "";
                            }
                    },
                    init: function () {
                        var t = this;
                        if (!(!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled))) {
                            t.hashNavigation.initialized = !0;
                            var n = Ie.location.hash.replace("#", "");
                            if (n)
                                for (var i = 0, r = t.slides.length; i < r; i += 1) {
                                    var a = t.slides.eq(i),
                                        s = a.attr("data-hash") || a.attr("data-history");
                                    if (s === n && !a.hasClass(t.params.slideDuplicateClass)) {
                                        var o = a.index();
                                        t.slideTo(o, 0, t.params.runCallbacksOnInit, !0);
                                    }
                                }
                            t.params.hashNavigation.watchState && e(Oe).on("hashchange", t.hashNavigation.onHashCange);
                        }
                    },
                    destroy: function () {
                        var t = this;
                        t.params.hashNavigation.watchState && e(Oe).off("hashchange", t.hashNavigation.onHashCange);
                    },
                },
                jt = {
                    name: "hash-navigation",
                    params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { hashNavigation: { initialized: !1, init: $t.init.bind(e), destroy: $t.destroy.bind(e), setHash: $t.setHash.bind(e), onHashCange: $t.onHashCange.bind(e) } });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.hashNavigation.enabled && e.hashNavigation.init();
                        },
                        destroy: function () {
                            var e = this;
                            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                        },
                        transitionEnd: function () {
                            var e = this;
                            e.hashNavigation.initialized && e.hashNavigation.setHash();
                        },
                    },
                },
                Nt = {
                    run: function () {
                        var e = this,
                            t = e.slides.eq(e.activeIndex),
                            n = e.params.autoplay.delay;
                        t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                            clearTimeout(e.autoplay.timeout),
                            (e.autoplay.timeout = Ne.nextTick(function () {
                                e.params.autoplay.reverseDirection
                                    ? e.params.loop
                                        ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                        : e.isBeginning
                                        ? e.params.autoplay.stopOnLastSlide
                                            ? e.autoplay.stop()
                                            : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                        : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                    : e.params.loop
                                    ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                                    : e.isEnd
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                                    : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                            }, n));
                    },
                    start: function () {
                        var e = this;
                        return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
                    },
                    stop: function () {
                        var e = this;
                        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
                    },
                    pause: function (e) {
                        var t = this;
                        t.autoplay.running &&
                            (t.autoplay.paused ||
                                (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                                (t.autoplay.paused = !0),
                                0 !== e && t.params.autoplay.waitForTransition
                                    ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd))
                                    : ((t.autoplay.paused = !1), t.autoplay.run())));
                    },
                },
                Ht = {
                    name: "autoplay",
                    params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: Nt.run.bind(e),
                                start: Nt.start.bind(e),
                                stop: Nt.stop.bind(e),
                                pause: Nt.pause.bind(e),
                                onTransitionEnd: function (t) {
                                    e &&
                                        !e.destroyed &&
                                        e.$wrapperEl &&
                                        t.target === this &&
                                        (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                        (e.autoplay.paused = !1),
                                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                                },
                            },
                        });
                    },
                    on: {
                        init: function () {
                            var e = this;
                            e.params.autoplay.enabled && e.autoplay.start();
                        },
                        beforeTransitionStart: function (e, t) {
                            var n = this;
                            n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop());
                        },
                        sliderFirstMove: function () {
                            var e = this;
                            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                        },
                        destroy: function () {
                            var e = this;
                            e.autoplay.running && e.autoplay.stop();
                        },
                    },
                },
                Bt = {
                    setTranslate: function () {
                        for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                            var i = e.slides.eq(n),
                                r = i[0].swiperSlideOffset,
                                a = -r;
                            e.params.virtualTranslate || (a -= e.translate);
                            var s = 0;
                            e.isHorizontal() || ((s = a), (a = 0));
                            var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                            i.css({ opacity: o }).transform("translate3d(" + a + "px, " + s + "px, 0px)");
                        }
                    },
                    setTransition: function (e) {
                        var t = this,
                            n = t.slides,
                            i = t.$wrapperEl;
                        if ((n.transition(e), t.params.virtualTranslate && 0 !== e)) {
                            var r = !1;
                            n.transitionEnd(function () {
                                if (!r && t && !t.destroyed) {
                                    (r = !0), (t.animating = !1);
                                    for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n]);
                                }
                            });
                        }
                    },
                },
                qt = {
                    name: "effect-fade",
                    params: { fadeEffect: { crossFade: !1 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { fadeEffect: { setTranslate: Bt.setTranslate.bind(e), setTransition: Bt.setTransition.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            if ("fade" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "fade");
                                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                                Ne.extend(e.params, t), Ne.extend(e.originalParams, t);
                            }
                        },
                        setTranslate: function () {
                            var e = this;
                            "fade" === e.params.effect && e.fadeEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            var t = this;
                            "fade" === t.params.effect && t.fadeEffect.setTransition(e);
                        },
                    },
                },
                Rt = {
                    setTranslate: function () {
                        var t,
                            n = this,
                            i = n.$el,
                            r = n.$wrapperEl,
                            a = n.slides,
                            s = n.width,
                            o = n.height,
                            l = n.rtlTranslate,
                            u = n.size,
                            c = n.params.cubeEffect,
                            d = n.isHorizontal(),
                            p = n.virtual && n.params.virtual.enabled,
                            f = 0;
                        c.shadow &&
                            (d
                                ? ((t = r.find(".swiper-cube-shadow")), 0 === t.length && ((t = e('<div class="swiper-cube-shadow"></div>')), r.append(t)), t.css({ height: s + "px" }))
                                : ((t = i.find(".swiper-cube-shadow")), 0 === t.length && ((t = e('<div class="swiper-cube-shadow"></div>')), i.append(t))));
                        for (var h = 0; h < a.length; h += 1) {
                            var v = a.eq(h),
                                m = h;
                            p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                            var g = 90 * m,
                                y = Math.floor(g / 360);
                            l && ((g = -g), (y = Math.floor(-g / 360)));
                            var b = Math.max(Math.min(v[0].progress, 1), -1),
                                x = 0,
                                w = 0,
                                T = 0;
                            m % 4 == 0 ? ((x = 4 * -y * u), (T = 0)) : (m - 1) % 4 == 0 ? ((x = 0), (T = 4 * -y * u)) : (m - 2) % 4 == 0 ? ((x = u + 4 * y * u), (T = u)) : (m - 3) % 4 == 0 && ((x = -u), (T = 3 * u + 4 * u * y)),
                                l && (x = -x),
                                d || ((w = x), (x = 0));
                            var E = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + x + "px, " + w + "px, " + T + "px)";
                            if ((b <= 1 && b > -1 && ((f = 90 * m + 90 * b), l && (f = 90 * -m - 90 * b)), v.transform(E), c.slideShadows)) {
                                var S = d ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                    C = d ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                                0 === S.length && ((S = e('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>')), v.append(S)),
                                    0 === C.length && ((C = e('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>')), v.append(C)),
                                    S.length && (S[0].style.opacity = Math.max(-b, 0)),
                                    C.length && (C[0].style.opacity = Math.max(b, 0));
                            }
                        }
                        if (
                            (r.css({
                                "-webkit-transform-origin": "50% 50% -" + u / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + u / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + u / 2 + "px",
                                "transform-origin": "50% 50% -" + u / 2 + "px",
                            }),
                            c.shadow)
                        )
                            if (d) t.transform("translate3d(0px, " + (s / 2 + c.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
                            else {
                                var k = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                    A = 1.5 - (Math.sin((2 * k * Math.PI) / 360) / 2 + Math.cos((2 * k * Math.PI) / 360) / 2),
                                    M = c.shadowScale,
                                    P = c.shadowScale / A,
                                    L = c.shadowOffset;
                                t.transform("scale3d(" + M + ", 1, " + P + ") translate3d(0px, " + (o / 2 + L) + "px, " + -o / 2 / P + "px) rotateX(-90deg)");
                            }
                        var z = Be.isSafari || Be.isUiWebView ? -u / 2 : 0;
                        r.transform("translate3d(0px,0," + z + "px) rotateX(" + (n.isHorizontal() ? 0 : f) + "deg) rotateY(" + (n.isHorizontal() ? -f : 0) + "deg)");
                    },
                    setTransition: function (e) {
                        var t = this,
                            n = t.$el;
                        t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e);
                    },
                },
                Ft = {
                    name: "effect-cube",
                    params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { cubeEffect: { setTranslate: Rt.setTranslate.bind(e), setTransition: Rt.setTransition.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            if ("cube" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                                Ne.extend(e.params, t), Ne.extend(e.originalParams, t);
                            }
                        },
                        setTranslate: function () {
                            var e = this;
                            "cube" === e.params.effect && e.cubeEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            var t = this;
                            "cube" === t.params.effect && t.cubeEffect.setTransition(e);
                        },
                    },
                },
                Vt = {
                    setTranslate: function () {
                        for (var t = this, n = t.slides, i = t.rtlTranslate, r = 0; r < n.length; r += 1) {
                            var a = n.eq(r),
                                s = a[0].progress;
                            t.params.flipEffect.limitRotation && (s = Math.max(Math.min(a[0].progress, 1), -1));
                            var o = a[0].swiperSlideOffset,
                                l = -180 * s,
                                u = l,
                                c = 0,
                                d = -o,
                                p = 0;
                            if ((t.isHorizontal() ? i && (u = -u) : ((p = d), (d = 0), (c = -u), (u = 0)), (a[0].style.zIndex = -Math.abs(Math.round(s)) + n.length), t.params.flipEffect.slideShadows)) {
                                var f = t.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                    h = t.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === f.length && ((f = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>')), a.append(f)),
                                    0 === h.length && ((h = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>')), a.append(h)),
                                    f.length && (f[0].style.opacity = Math.max(-s, 0)),
                                    h.length && (h[0].style.opacity = Math.max(s, 0));
                            }
                            a.transform("translate3d(" + d + "px, " + p + "px, 0px) rotateX(" + c + "deg) rotateY(" + u + "deg)");
                        }
                    },
                    setTransition: function (e) {
                        var t = this,
                            n = t.slides,
                            i = t.activeIndex,
                            r = t.$wrapperEl;
                        if ((n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                            var a = !1;
                            n.eq(i).transitionEnd(function () {
                                if (!a && t && !t.destroyed) {
                                    (a = !0), (t.animating = !1);
                                    for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n]);
                                }
                            });
                        }
                    },
                },
                Gt = {
                    name: "effect-flip",
                    params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { flipEffect: { setTranslate: Vt.setTranslate.bind(e), setTransition: Vt.setTransition.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            if ("flip" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                                Ne.extend(e.params, t), Ne.extend(e.originalParams, t);
                            }
                        },
                        setTranslate: function () {
                            var e = this;
                            "flip" === e.params.effect && e.flipEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            var t = this;
                            "flip" === t.params.effect && t.flipEffect.setTransition(e);
                        },
                    },
                },
                Wt = {
                    setTranslate: function () {
                        for (
                            var t = this,
                                n = t.width,
                                i = t.height,
                                r = t.slides,
                                a = t.$wrapperEl,
                                s = t.slidesSizesGrid,
                                o = t.params.coverflowEffect,
                                l = t.isHorizontal(),
                                u = t.translate,
                                c = l ? n / 2 - u : i / 2 - u,
                                d = l ? o.rotate : -o.rotate,
                                p = o.depth,
                                f = 0,
                                h = r.length;
                            f < h;
                            f += 1
                        ) {
                            var v = r.eq(f),
                                m = s[f],
                                g = v[0].swiperSlideOffset,
                                y = ((c - g - m / 2) / m) * o.modifier,
                                b = l ? d * y : 0,
                                x = l ? 0 : d * y,
                                w = -p * Math.abs(y),
                                T = l ? 0 : o.stretch * y,
                                E = l ? o.stretch * y : 0;
                            Math.abs(E) < 0.001 && (E = 0), Math.abs(T) < 0.001 && (T = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(x) < 0.001 && (x = 0);
                            var S = "translate3d(" + E + "px," + T + "px," + w + "px)  rotateX(" + x + "deg) rotateY(" + b + "deg)";
                            if ((v.transform(S), (v[0].style.zIndex = 1 - Math.abs(Math.round(y))), o.slideShadows)) {
                                var C = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                    k = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                                0 === C.length && ((C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>')), v.append(C)),
                                    0 === k.length && ((k = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>')), v.append(k)),
                                    C.length && (C[0].style.opacity = y > 0 ? y : 0),
                                    k.length && (k[0].style.opacity = -y > 0 ? -y : 0);
                            }
                        }
                        if (He.pointerEvents || He.prefixedPointerEvents) {
                            a[0].style.perspectiveOrigin = c + "px 50%";
                        }
                    },
                    setTransition: function (e) {
                        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                    },
                },
                Xt = {
                    name: "effect-coverflow",
                    params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { coverflowEffect: { setTranslate: Wt.setTranslate.bind(e), setTransition: Wt.setTransition.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this;
                            "coverflow" === e.params.effect &&
                                (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                        },
                        setTranslate: function () {
                            var e = this;
                            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            var t = this;
                            "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
                        },
                    },
                },
                Yt = {
                    init: function () {
                        var e = this,
                            t = e.params,
                            n = t.thumbs,
                            i = e.constructor;
                        n.swiper instanceof i
                            ? ((e.thumbs.swiper = n.swiper),
                              Ne.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                              Ne.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                            : Ne.isObject(n.swiper) && ((e.thumbs.swiper = new i(Ne.extend({}, n.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
                    },
                    onThumbClick: function () {
                        var t = this,
                            n = t.thumbs.swiper;
                        if (n) {
                            var i = n.clickedIndex,
                                r = n.clickedSlide;
                            if (!((r && e(r).hasClass(t.params.thumbs.slideThumbActiveClass)) || void 0 === i || null === i)) {
                                var a;
                                if (((a = n.params.loop ? parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10) : i), t.params.loop)) {
                                    var s = t.activeIndex;
                                    t.slides.eq(s).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (s = t.activeIndex));
                                    var o = t.slides
                                            .eq(s)
                                            .prevAll('[data-swiper-slide-index="' + a + '"]')
                                            .eq(0)
                                            .index(),
                                        l = t.slides
                                            .eq(s)
                                            .nextAll('[data-swiper-slide-index="' + a + '"]')
                                            .eq(0)
                                            .index();
                                    a = void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o;
                                }
                                t.slideTo(a);
                            }
                        }
                    },
                    update: function (e) {
                        var t = this,
                            n = t.thumbs.swiper;
                        if (n) {
                            var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                            if (t.realIndex !== n.realIndex) {
                                var r,
                                    a = n.activeIndex;
                                if (n.params.loop) {
                                    n.slides.eq(a).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft), (a = n.activeIndex));
                                    var s = n.slides
                                            .eq(a)
                                            .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                            .eq(0)
                                            .index(),
                                        o = n.slides
                                            .eq(a)
                                            .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                            .eq(0)
                                            .index();
                                    r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s;
                                } else r = t.realIndex;
                                n.visibleSlidesIndexes &&
                                    n.visibleSlidesIndexes.indexOf(r) < 0 &&
                                    (n.params.centeredSlides ? (r = r > a ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1) : r > a && (r = r - i + 1), n.slideTo(r, e ? 0 : void 0));
                            }
                            var l = 1,
                                u = t.params.thumbs.slideThumbActiveClass;
                            if ((t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView), n.slides.removeClass(u), n.params.loop || n.params.virtual))
                                for (var c = 0; c < l; c += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(u);
                            else for (var d = 0; d < l; d += 1) n.slides.eq(t.realIndex + d).addClass(u);
                        }
                    },
                },
                _t = {
                    name: "thumbs",
                    params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                    create: function () {
                        var e = this;
                        Ne.extend(e, { thumbs: { swiper: null, init: Yt.init.bind(e), update: Yt.update.bind(e), onThumbClick: Yt.onThumbClick.bind(e) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this,
                                t = e.params,
                                n = t.thumbs;
                            n && n.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                        },
                        slideChange: function () {
                            var e = this;
                            e.thumbs.swiper && e.thumbs.update();
                        },
                        update: function () {
                            var e = this;
                            e.thumbs.swiper && e.thumbs.update();
                        },
                        resize: function () {
                            var e = this;
                            e.thumbs.swiper && e.thumbs.update();
                        },
                        observerUpdate: function () {
                            var e = this;
                            e.thumbs.swiper && e.thumbs.update();
                        },
                        setTransition: function (e) {
                            var t = this,
                                n = t.thumbs.swiper;
                            n && n.setTransition(e);
                        },
                        beforeDestroy: function () {
                            var e = this,
                                t = e.thumbs.swiper;
                            t && e.thumbs.swiperCreated && t && t.destroy();
                        },
                    },
                },
                Ut = [at, st, ot, lt, ct, pt, ht, mt, yt, xt, Tt, St, kt, Mt, Lt, Dt, Ot, jt, Ht, qt, Ft, Gt, Xt, _t];
            return void 0 === rt.use && ((rt.use = rt.Class.use), (rt.installModule = rt.Class.installModule)), rt.use(Ut), rt;
        });
    },
    function (e, t, n) {
        var i;
        !(function (e) {
            var t = navigator.userAgent;
            e.HTMLPictureElement &&
                /ecko/.test(t) &&
                t.match(/rv\:(\d+)/) &&
                RegExp.$1 < 45 &&
                addEventListener(
                    "resize",
                    (function () {
                        var t,
                            n = document.createElement("source"),
                            i = function (e) {
                                var t,
                                    i,
                                    r = e.parentNode;
                                "PICTURE" === r.nodeName.toUpperCase()
                                    ? ((t = n.cloneNode()),
                                      r.insertBefore(t, r.firstElementChild),
                                      setTimeout(function () {
                                          r.removeChild(t);
                                      }))
                                    : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) &&
                                      ((e._pfLastSize = e.offsetWidth),
                                      (i = e.sizes),
                                      (e.sizes += ",100vw"),
                                      setTimeout(function () {
                                          e.sizes = i;
                                      }));
                            },
                            r = function () {
                                var e,
                                    t = document.querySelectorAll("picture > img, img[srcset][sizes]");
                                for (e = 0; e < t.length; e++) i(t[e]);
                            },
                            a = function () {
                                clearTimeout(t), (t = setTimeout(r, 99));
                            },
                            s = e.matchMedia && matchMedia("(orientation: landscape)"),
                            o = function () {
                                a(), s && s.addListener && s.addListener(a);
                            };
                        return (n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), /^[c|i]|d$/.test(document.readyState || "") ? o() : document.addEventListener("DOMContentLoaded", o), a;
                    })()
                );
        })(window),
            (function (r, a, s) {
                "use strict";
                function o(e) {
                    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
                }
                function l() {
                    (N = !1),
                        (q = r.devicePixelRatio),
                        (H = {}),
                        (B = {}),
                        (x.DPR = q || 1),
                        (R.width = Math.max(r.innerWidth || 0, A.clientWidth)),
                        (R.height = Math.max(r.innerHeight || 0, A.clientHeight)),
                        (R.vw = R.width / 100),
                        (R.vh = R.height / 100),
                        (b = [R.height, R.width, q].join("-")),
                        (R.em = x.getEmValue()),
                        (R.rem = R.em);
                }
                function u(e, t, n, i) {
                    var r, a, s, o;
                    return "saveData" === P.algorithm ? (e > 2.7 ? (o = n + 1) : ((a = t - n), (r = Math.pow(e - 0.6, 1.5)), (s = a * r), i && (s += 0.1 * r), (o = e + s))) : (o = n > 1 ? Math.sqrt(e * t) : e), o > n;
                }
                function c(e) {
                    var t,
                        n = x.getSet(e),
                        i = !1;
                    "pending" !== n && ((i = b), n && ((t = x.setRes(n)), x.applySetCandidate(t, e))), (e[x.ns].evaled = i);
                }
                function d(e, t) {
                    return e.res - t.res;
                }
                function p(e, t, n) {
                    var i;
                    return !n && t && ((n = e[x.ns].sets), (n = n && n[n.length - 1])), (i = f(t, n)), i && ((t = x.makeUrl(t)), (e[x.ns].curSrc = t), (e[x.ns].curCan = i), i.res || Z(i, i.set.sizes)), i;
                }
                function f(e, t) {
                    var n, i, r;
                    if (e && t)
                        for (r = x.parseSet(t), e = x.makeUrl(e), n = 0; n < r.length; n++)
                            if (e === x.makeUrl(r[n].url)) {
                                i = r[n];
                                break;
                            }
                    return i;
                }
                function h(e, t) {
                    var n,
                        i,
                        r,
                        a,
                        s = e.getElementsByTagName("source");
                    for (n = 0, i = s.length; n < i; n++) (r = s[n]), (r[x.ns] = !0), (a = r.getAttribute("srcset")) && t.push({ srcset: a, media: r.getAttribute("media"), type: r.getAttribute("type"), sizes: r.getAttribute("sizes") });
                }
                function v(e, t) {
                    function n(t) {
                        var n,
                            i = t.exec(e.substring(d));
                        if (i) return (n = i[0]), (d += n.length), n;
                    }
                    function i() {
                        var e,
                            n,
                            i,
                            s,
                            o,
                            l,
                            u,
                            c,
                            d,
                            f = !1,
                            h = {};
                        for (s = 0; s < a.length; s++)
                            (o = a[s]),
                                (l = o[o.length - 1]),
                                (u = o.substring(0, o.length - 1)),
                                (c = parseInt(u, 10)),
                                (d = parseFloat(u)),
                                _.test(u) && "w" === l
                                    ? ((e || n) && (f = !0), 0 === c ? (f = !0) : (e = c))
                                    : U.test(u) && "x" === l
                                    ? ((e || n || i) && (f = !0), d < 0 ? (f = !0) : (n = d))
                                    : _.test(u) && "h" === l
                                    ? ((i || n) && (f = !0), 0 === c ? (f = !0) : (i = c))
                                    : (f = !0);
                        f || ((h.url = r), e && (h.w = e), n && (h.d = n), i && (h.h = i), i || n || e || (h.d = 1), 1 === h.d && (t.has1x = !0), (h.set = t), p.push(h));
                    }
                    for (var r, a, s, l, u, c = e.length, d = 0, p = []; ; ) {
                        if ((n(W), d >= c)) return p;
                        (r = n(X)),
                            (a = []),
                            "," === r.slice(-1)
                                ? ((r = r.replace(Y, "")), i())
                                : (function () {
                                      for (n(G), s = "", l = "in descriptor"; ; ) {
                                          if (((u = e.charAt(d)), "in descriptor" === l))
                                              if (o(u)) s && (a.push(s), (s = ""), (l = "after descriptor"));
                                              else {
                                                  if ("," === u) return (d += 1), s && a.push(s), void i();
                                                  if ("(" === u) (s += u), (l = "in parens");
                                                  else {
                                                      if ("" === u) return s && a.push(s), void i();
                                                      s += u;
                                                  }
                                              }
                                          else if ("in parens" === l)
                                              if (")" === u) (s += u), (l = "in descriptor");
                                              else {
                                                  if ("" === u) return a.push(s), void i();
                                                  s += u;
                                              }
                                          else if ("after descriptor" === l)
                                              if (o(u));
                                              else {
                                                  if ("" === u) return void i();
                                                  (l = "in descriptor"), (d -= 1);
                                              }
                                          d += 1;
                                      }
                                  })();
                    }
                }
                function m(e) {
                    var t,
                        n,
                        i,
                        r,
                        a,
                        s,
                        l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                        u = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                    for (
                        n = (function (e) {
                            function t() {
                                r && (a.push(r), (r = ""));
                            }
                            function n() {
                                a[0] && (s.push(a), (a = []));
                            }
                            for (var i, r = "", a = [], s = [], l = 0, u = 0, c = !1; ; ) {
                                if ("" === (i = e.charAt(u))) return t(), n(), s;
                                if (c) {
                                    if ("*" === i && "/" === e[u + 1]) {
                                        (c = !1), (u += 2), t();
                                        continue;
                                    }
                                    u += 1;
                                } else {
                                    if (o(i)) {
                                        if ((e.charAt(u - 1) && o(e.charAt(u - 1))) || !r) {
                                            u += 1;
                                            continue;
                                        }
                                        if (0 === l) {
                                            t(), (u += 1);
                                            continue;
                                        }
                                        i = " ";
                                    } else if ("(" === i) l += 1;
                                    else if (")" === i) l -= 1;
                                    else {
                                        if ("," === i) {
                                            t(), n(), (u += 1);
                                            continue;
                                        }
                                        if ("/" === i && "*" === e.charAt(u + 1)) {
                                            (c = !0), (u += 2);
                                            continue;
                                        }
                                    }
                                    (r += i), (u += 1);
                                }
                            }
                        })(e),
                            i = n.length,
                            t = 0;
                        t < i;
                        t++
                    )
                        if (
                            ((r = n[t]),
                            (a = r[r.length - 1]),
                            (function (e) {
                                return !!(l.test(e) && parseFloat(e) >= 0) || !!u.test(e) || "0" === e || "-0" === e || "+0" === e;
                            })(a))
                        ) {
                            if (((s = a), r.pop(), 0 === r.length)) return s;
                            if (((r = r.join(" ")), x.matchesMedia(r))) return s;
                        }
                    return "100vw";
                }
                a.createElement("picture");
                var g,
                    y,
                    b,
                    x = {},
                    w = !1,
                    T = function () {},
                    E = a.createElement("img"),
                    S = E.getAttribute,
                    C = E.setAttribute,
                    k = E.removeAttribute,
                    A = a.documentElement,
                    M = {},
                    P = { algorithm: "" },
                    L = navigator.userAgent,
                    z = /rident/.test(L) || (/ecko/.test(L) && L.match(/rv\:(\d+)/) && RegExp.$1 > 35),
                    D = "currentSrc",
                    I = /\s+\+?\d+(e\d+)?w/,
                    O = /(\([^)]+\))?\s*(.+)/,
                    $ = r.picturefillCFG,
                    j = "font-size:100%!important;",
                    N = !0,
                    H = {},
                    B = {},
                    q = r.devicePixelRatio,
                    R = { px: 1, in: 96 },
                    F = a.createElement("a"),
                    V = !1,
                    G = /^[ \t\n\r\u000c]+/,
                    W = /^[, \t\n\r\u000c]+/,
                    X = /^[^ \t\n\r\u000c]+/,
                    Y = /[,]+$/,
                    _ = /^\d+$/,
                    U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                    K = function (e, t, n, i) {
                        e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n);
                    },
                    Q = function (e) {
                        var t = {};
                        return function (n) {
                            return n in t || (t[n] = e(n)), t[n];
                        };
                    },
                    J = (function () {
                        var e = /^([\d\.]+)(em|vw|px)$/,
                            t = function () {
                                for (var e = arguments, t = 0, n = e[0]; ++t in e; ) n = n.replace(e[t], e[++t]);
                                return n;
                            },
                            n = Q(function (e) {
                                return (
                                    "return " +
                                    t(
                                        (e || "").toLowerCase(),
                                        /\band\b/g,
                                        "&&",
                                        /,/g,
                                        "||",
                                        /min-([a-z-\s]+):/g,
                                        "e.$1>=",
                                        /max-([a-z-\s]+):/g,
                                        "e.$1<=",
                                        /calc([^)]+)/g,
                                        "($1)",
                                        /(\d+[\.]*[\d]*)([a-z]+)/g,
                                        "($1 * e.$2)",
                                        /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                                        ""
                                    ) +
                                    ";"
                                );
                            });
                        return function (t, i) {
                            var r;
                            if (!(t in H))
                                if (((H[t] = !1), i && (r = t.match(e)))) H[t] = r[1] * R[r[2]];
                                else
                                    try {
                                        H[t] = new Function("e", n(t))(R);
                                    } catch (e) {}
                            return H[t];
                        };
                    })(),
                    Z = function (e, t) {
                        return e.w ? ((e.cWidth = x.calcListLength(t || "100vw")), (e.res = e.w / e.cWidth)) : (e.res = e.d), e;
                    },
                    ee = function (e) {
                        if (w) {
                            var t,
                                n,
                                i,
                                r = e || {};
                            if (
                                (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? (r.elements = [r.elements]) : ((r.context = r.elements), (r.elements = null))),
                                (t = r.elements || x.qsa(r.context || a, r.reevaluate || r.reselect ? x.sel : x.selShort)),
                                (i = t.length))
                            ) {
                                for (x.setupRun(r), V = !0, n = 0; n < i; n++) x.fillImg(t[n], r);
                                x.teardownRun(r);
                            }
                        }
                    };
                r.console && console.warn,
                    D in E || (D = "src"),
                    (M["image/jpeg"] = !0),
                    (M["image/gif"] = !0),
                    (M["image/png"] = !0),
                    (M["image/svg+xml"] = a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")),
                    (x.ns = ("pf" + new Date().getTime()).substr(0, 9)),
                    (x.supSrcset = "srcset" in E),
                    (x.supSizes = "sizes" in E),
                    (x.supPicture = !!r.HTMLPictureElement),
                    x.supSrcset &&
                        x.supPicture &&
                        !x.supSizes &&
                        (function (e) {
                            (E.srcset = "data:,a"), (e.src = "data:,a"), (x.supSrcset = E.complete === e.complete), (x.supPicture = x.supSrcset && x.supPicture);
                        })(a.createElement("img")),
                    x.supSrcset && !x.supSizes
                        ? (function () {
                              var e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                                  t = a.createElement("img"),
                                  n = function () {
                                      2 === t.width && (x.supSizes = !0), (y = x.supSrcset && !x.supSizes), (w = !0), setTimeout(ee);
                                  };
                              (t.onload = n), (t.onerror = n), t.setAttribute("sizes", "9px"), (t.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w"), (t.src = e);
                          })()
                        : (w = !0),
                    (x.selShort = "picture>img,img[srcset]"),
                    (x.sel = x.selShort),
                    (x.cfg = P),
                    (x.DPR = q || 1),
                    (x.u = R),
                    (x.types = M),
                    (x.setSize = T),
                    (x.makeUrl = Q(function (e) {
                        return (F.href = e), F.href;
                    })),
                    (x.qsa = function (e, t) {
                        return "querySelector" in e ? e.querySelectorAll(t) : [];
                    }),
                    (x.matchesMedia = function () {
                        return (
                            r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
                                ? (x.matchesMedia = function (e) {
                                      return !e || matchMedia(e).matches;
                                  })
                                : (x.matchesMedia = x.mMQ),
                            x.matchesMedia.apply(this, arguments)
                        );
                    }),
                    (x.mMQ = function (e) {
                        return !e || J(e);
                    }),
                    (x.calcLength = function (e) {
                        var t = J(e, !0) || !1;
                        return t < 0 && (t = !1), t;
                    }),
                    (x.supportsType = function (e) {
                        return !e || M[e];
                    }),
                    (x.parseSize = Q(function (e) {
                        var t = (e || "").match(O);
                        return { media: t && t[1], length: t && t[2] };
                    })),
                    (x.parseSet = function (e) {
                        return e.cands || (e.cands = v(e.srcset, e)), e.cands;
                    }),
                    (x.getEmValue = function () {
                        var e;
                        if (!g && (e = a.body)) {
                            var t = a.createElement("div"),
                                n = A.style.cssText,
                                i = e.style.cssText;
                            (t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
                                (A.style.cssText = j),
                                (e.style.cssText = j),
                                e.appendChild(t),
                                (g = t.offsetWidth),
                                e.removeChild(t),
                                (g = parseFloat(g, 10)),
                                (A.style.cssText = n),
                                (e.style.cssText = i);
                        }
                        return g || 16;
                    }),
                    (x.calcListLength = function (e) {
                        if (!(e in B) || P.uT) {
                            var t = x.calcLength(m(e));
                            B[e] = t || R.width;
                        }
                        return B[e];
                    }),
                    (x.setRes = function (e) {
                        var t;
                        if (e) {
                            t = x.parseSet(e);
                            for (var n = 0, i = t.length; n < i; n++) Z(t[n], e.sizes);
                        }
                        return t;
                    }),
                    (x.setRes.res = Z),
                    (x.applySetCandidate = function (e, t) {
                        if (e.length) {
                            var n,
                                i,
                                r,
                                a,
                                s,
                                o,
                                l,
                                c,
                                f,
                                h = t[x.ns],
                                v = x.DPR;
                            if (((o = h.curSrc || t[D]), (l = h.curCan || p(t, o, e[0].set)), l && l.set === e[0].set && ((f = z && !t.complete && l.res - 0.1 > v) || ((l.cached = !0), l.res >= v && (s = l))), !s))
                                for (e.sort(d), a = e.length, s = e[a - 1], i = 0; i < a; i++)
                                    if (((n = e[i]), n.res >= v)) {
                                        (r = i - 1), (s = e[r] && (f || o !== x.makeUrl(n.url)) && u(e[r].res, n.res, v, e[r].cached) ? e[r] : n);
                                        break;
                                    }
                            s && ((c = x.makeUrl(s.url)), (h.curSrc = c), (h.curCan = s), c !== o && x.setSrc(t, s), x.setSize(t));
                        }
                    }),
                    (x.setSrc = function (e, t) {
                        var n;
                        (e.src = t.url), "image/svg+xml" === t.set.type && ((n = e.style.width), (e.style.width = e.offsetWidth + 1 + "px"), e.offsetWidth + 1 && (e.style.width = n));
                    }),
                    (x.getSet = function (e) {
                        var t,
                            n,
                            i,
                            r = !1,
                            a = e[x.ns].sets;
                        for (t = 0; t < a.length && !r; t++)
                            if (((n = a[t]), n.srcset && x.matchesMedia(n.media) && (i = x.supportsType(n.type)))) {
                                "pending" === i && (n = i), (r = n);
                                break;
                            }
                        return r;
                    }),
                    (x.parseSets = function (e, t, n) {
                        var i,
                            r,
                            a,
                            s,
                            o = t && "PICTURE" === t.nodeName.toUpperCase(),
                            l = e[x.ns];
                        (void 0 === l.src || n.src) && ((l.src = S.call(e, "src")), l.src ? C.call(e, "data-pfsrc", l.src) : k.call(e, "data-pfsrc")),
                            (void 0 === l.srcset || n.srcset || !x.supSrcset || e.srcset) && ((i = S.call(e, "srcset")), (l.srcset = i), (s = !0)),
                            (l.sets = []),
                            o && ((l.pic = !0), h(t, l.sets)),
                            l.srcset
                                ? ((r = { srcset: l.srcset, sizes: S.call(e, "sizes") }),
                                  l.sets.push(r),
                                  (a = (y || l.src) && I.test(l.srcset || "")) || !l.src || f(l.src, r) || r.has1x || ((r.srcset += ", " + l.src), r.cands.push({ url: l.src, d: 1, set: r })))
                                : l.src && l.sets.push({ srcset: l.src, sizes: null }),
                            (l.curCan = null),
                            (l.curSrc = void 0),
                            (l.supported = !(o || (r && !x.supSrcset) || (a && !x.supSizes))),
                            s && x.supSrcset && !l.supported && (i ? (C.call(e, "data-pfsrcset", i), (e.srcset = "")) : k.call(e, "data-pfsrcset")),
                            l.supported && !l.srcset && ((!l.src && e.src) || e.src !== x.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : (e.src = l.src)),
                            (l.parsed = !0);
                    }),
                    (x.fillImg = function (e, t) {
                        var n,
                            i = t.reselect || t.reevaluate;
                        e[x.ns] || (e[x.ns] = {}), (n = e[x.ns]), (i || n.evaled !== b) && ((n.parsed && !t.reevaluate) || x.parseSets(e, e.parentNode, t), n.supported ? (n.evaled = b) : c(e));
                    }),
                    (x.setupRun = function () {
                        (V && !N && q === r.devicePixelRatio) || l();
                    }),
                    x.supPicture
                        ? ((ee = T), (x.fillImg = T))
                        : (function () {
                              var e,
                                  t = r.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                                  n = function () {
                                      var r = a.readyState || "";
                                      (i = setTimeout(n, "loading" === r ? 200 : 999)), a.body && (x.fillImgs(), (e = e || t.test(r)) && clearTimeout(i));
                                  },
                                  i = setTimeout(n, a.body ? 9 : 99),
                                  s = A.clientHeight,
                                  o = function () {
                                      (N = Math.max(r.innerWidth || 0, A.clientWidth) !== R.width || A.clientHeight !== s), (s = A.clientHeight), N && x.fillImgs();
                                  };
                              K(
                                  r,
                                  "resize",
                                  (function (e, t) {
                                      var n,
                                          i,
                                          r = function () {
                                              var a = new Date() - i;
                                              a < t ? (n = setTimeout(r, t - a)) : ((n = null), e());
                                          };
                                      return function () {
                                          (i = new Date()), n || (n = setTimeout(r, t));
                                      };
                                  })(o, 99)
                              ),
                                  K(a, "readystatechange", n);
                          })(),
                    (x.picturefill = ee),
                    (x.fillImgs = ee),
                    (x.teardownRun = T),
                    (ee._ = x),
                    (r.picturefillCFG = {
                        pf: x,
                        push: function (e) {
                            var t = e.shift();
                            "function" == typeof x[t] ? x[t].apply(x, e) : ((P[t] = e[0]), V && x.fillImgs({ reselect: !0 }));
                        },
                    });
                for (; $ && $.length; ) r.picturefillCFG.push($.shift());
                (r.picturefill = ee),
                    "object" == typeof e && "object" == typeof e.exports
                        ? (e.exports = ee)
                        : void 0 !==
                              (i = function () {
                                  return ee;
                              }.call(t, n, t, e)) && (e.exports = i),
                    x.supPicture ||
                        (M["image/webp"] = (function (e, t) {
                            var n = new r.Image();
                            return (
                                (n.onerror = function () {
                                    (M[e] = !1), ee();
                                }),
                                (n.onload = function () {
                                    (M[e] = 1 === n.width), ee();
                                }),
                                (n.src = t),
                                "pending"
                            );
                        })("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
            })(window, document);
    },
    function (e, t, n) {
        (function (e, n, i, r) {
            !(function (e, n) {
                n(t);
            })(0, function (t) {
                "use strict";
                function a(e, t) {
                    t |= 0;
                    for (var n = Math.max(e.length - t, 0), i = Array(n), r = 0; r < n; r++) i[r] = e[t + r];
                    return i;
                }
                function s(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t);
                }
                function o(e) {
                    setTimeout(e, 0);
                }
                function l(e) {
                    return function (t) {
                        var n = a(arguments, 1);
                        e(function () {
                            t.apply(null, n);
                        });
                    };
                }
                function u(e) {
                    return ot(function (t, n) {
                        var i;
                        try {
                            i = e.apply(this, t);
                        } catch (e) {
                            return n(e);
                        }
                        s(i) && "function" == typeof i.then
                            ? i.then(
                                  function (e) {
                                      c(n, null, e);
                                  },
                                  function (e) {
                                      c(n, e.message ? e : new Error(e));
                                  }
                              )
                            : n(null, i);
                    });
                }
                function c(e, t, n) {
                    try {
                        e(t, n);
                    } catch (e) {
                        ct(d, e);
                    }
                }
                function d(e) {
                    throw e;
                }
                function p(e) {
                    return dt && "AsyncFunction" === e[Symbol.toStringTag];
                }
                function f(e) {
                    return p(e) ? u(e) : e;
                }
                function h(e) {
                    return function (t) {
                        var n = a(arguments, 1),
                            i = ot(function (n, i) {
                                var r = this;
                                return e(
                                    t,
                                    function (e, t) {
                                        f(e).apply(r, n.concat(t));
                                    },
                                    i
                                );
                            });
                        return n.length ? i.apply(this, n) : i;
                    };
                }
                function v(e) {
                    var t = gt.call(e, bt),
                        n = e[bt];
                    try {
                        e[bt] = void 0;
                        var i = !0;
                    } catch (e) {}
                    var r = yt.call(e);
                    return i && (t ? (e[bt] = n) : delete e[bt]), r;
                }
                function m(e) {
                    return wt.call(e);
                }
                function g(e) {
                    return null == e ? (void 0 === e ? Et : Tt) : St && St in Object(e) ? v(e) : m(e);
                }
                function y(e) {
                    if (!s(e)) return !1;
                    var t = g(e);
                    return t == kt || t == At || t == Ct || t == Mt;
                }
                function b(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Pt;
                }
                function x(e) {
                    return null != e && b(e.length) && !y(e);
                }
                function w() {}
                function T(e) {
                    return function () {
                        if (null !== e) {
                            var t = e;
                            (e = null), t.apply(this, arguments);
                        }
                    };
                }
                function E(e, t) {
                    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
                    return i;
                }
                function S(e) {
                    return null != e && "object" == typeof e;
                }
                function C(e) {
                    return S(e) && g(e) == It;
                }
                function k() {
                    return !1;
                }
                function A(e, t) {
                    var n = typeof e;
                    return !!(t = null == t ? Wt : t) && ("number" == n || ("symbol" != n && Xt.test(e))) && e > -1 && e % 1 == 0 && e < t;
                }
                function M(e) {
                    return S(e) && b(e.length) && !!Yt[g(e)];
                }
                function P(e, t) {
                    var n = Ht(e),
                        i = !n && Nt(e),
                        r = !n && !i && Gt(e),
                        a = !n && !i && !r && en(e),
                        s = n || i || r || a,
                        o = s ? E(e.length, String) : [],
                        l = o.length;
                    for (var u in e) (!t && !nn.call(e, u)) || (s && ("length" == u || (r && ("offset" == u || "parent" == u)) || (a && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) || A(u, l))) || o.push(u);
                    return o;
                }
                function L(e) {
                    var t = e && e.constructor;
                    return e === (("function" == typeof t && t.prototype) || rn);
                }
                function z(e) {
                    if (!L(e)) return an(e);
                    var t = [];
                    for (var n in Object(e)) on.call(e, n) && "constructor" != n && t.push(n);
                    return t;
                }
                function D(e) {
                    return x(e) ? P(e) : z(e);
                }
                function I(e) {
                    var t = -1,
                        n = e.length;
                    return function () {
                        return ++t < n ? { value: e[t], key: t } : null;
                    };
                }
                function O(e) {
                    var t = -1;
                    return function () {
                        var n = e.next();
                        return n.done ? null : (t++, { value: n.value, key: t });
                    };
                }
                function $(e) {
                    var t = D(e),
                        n = -1,
                        i = t.length;
                    return function () {
                        var r = t[++n];
                        return n < i ? { value: e[r], key: r } : null;
                    };
                }
                function j(e) {
                    if (x(e)) return I(e);
                    var t = Dt(e);
                    return t ? O(t) : $(e);
                }
                function N(e) {
                    return function () {
                        if (null === e) throw new Error("Callback was already called.");
                        var t = e;
                        (e = null), t.apply(this, arguments);
                    };
                }
                function H(e) {
                    return function (t, n, i) {
                        function r(e, t) {
                            if (((l -= 1), e)) (o = !0), i(e);
                            else {
                                if (t === Lt || (o && l <= 0)) return (o = !0), i(null);
                                u || a();
                            }
                        }
                        function a() {
                            for (u = !0; l < e && !o; ) {
                                var t = s();
                                if (null === t) return (o = !0), void (l <= 0 && i(null));
                                (l += 1), n(t.value, t.key, N(r));
                            }
                            u = !1;
                        }
                        if (((i = T(i || w)), e <= 0 || !t)) return i(null);
                        var s = j(t),
                            o = !1,
                            l = 0,
                            u = !1;
                        a();
                    };
                }
                function B(e, t, n, i) {
                    H(t)(e, f(n), i);
                }
                function q(e, t) {
                    return function (n, i, r) {
                        return e(n, t, i, r);
                    };
                }
                function R(e, t, n) {
                    function i(e, t) {
                        e ? n(e) : (++a !== s && t !== Lt) || n(null);
                    }
                    n = T(n || w);
                    var r = 0,
                        a = 0,
                        s = e.length;
                    for (0 === s && n(null); r < s; r++) t(e[r], r, N(i));
                }
                function F(e) {
                    return function (t, n, i) {
                        return e(un, t, f(n), i);
                    };
                }
                function V(e, t, n, i) {
                    (i = i || w), (t = t || []);
                    var r = [],
                        a = 0,
                        s = f(n);
                    e(
                        t,
                        function (e, t, n) {
                            var i = a++;
                            s(e, function (e, t) {
                                (r[i] = t), n(e);
                            });
                        },
                        function (e) {
                            i(e, r);
                        }
                    );
                }
                function G(e) {
                    return function (t, n, i, r) {
                        return e(H(n), t, f(i), r);
                    };
                }
                function W(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i && !1 !== t(e[n], n, e); );
                    return e;
                }
                function X(e, t) {
                    return e && vn(e, t, D);
                }
                function Y(e, t, n, i) {
                    for (var r = e.length, a = n + (i ? 1 : -1); i ? a-- : ++a < r; ) if (t(e[a], a, e)) return a;
                    return -1;
                }
                function _(e) {
                    return e !== e;
                }
                function U(e, t, n) {
                    for (var i = n - 1, r = e.length; ++i < r; ) if (e[i] === t) return i;
                    return -1;
                }
                function K(e, t, n) {
                    return t === t ? U(e, t, n) : Y(e, _, n);
                }
                function Q(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i; ) r[n] = t(e[n], n, e);
                    return r;
                }
                function J(e) {
                    return "symbol" == typeof e || (S(e) && g(e) == gn);
                }
                function Z(e) {
                    if ("string" == typeof e) return e;
                    if (Ht(e)) return Q(e, Z) + "";
                    if (J(e)) return xn ? xn.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -yn ? "-0" : t;
                }
                function ee(e, t, n) {
                    var i = -1,
                        r = e.length;
                    t < 0 && (t = -t > r ? 0 : r + t), (n = n > r ? r : n), n < 0 && (n += r), (r = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
                    for (var a = Array(r); ++i < r; ) a[i] = e[i + t];
                    return a;
                }
                function te(e, t, n) {
                    var i = e.length;
                    return (n = void 0 === n ? i : n), !t && n >= i ? e : ee(e, t, n);
                }
                function ne(e, t) {
                    for (var n = e.length; n-- && K(t, e[n], 0) > -1; );
                    return n;
                }
                function ie(e, t) {
                    for (var n = -1, i = e.length; ++n < i && K(t, e[n], 0) > -1; );
                    return n;
                }
                function re(e) {
                    return e.split("");
                }
                function ae(e) {
                    return wn.test(e);
                }
                function se(e) {
                    return e.match(Ln) || [];
                }
                function oe(e) {
                    return ae(e) ? se(e) : re(e);
                }
                function le(e) {
                    return null == e ? "" : Z(e);
                }
                function ue(e, t, n) {
                    if ((e = le(e)) && (n || void 0 === t)) return e.replace(zn, "");
                    if (!e || !(t = Z(t))) return e;
                    var i = oe(e),
                        r = oe(t);
                    return te(i, ie(i, r), ne(i, r) + 1).join("");
                }
                function ce(e) {
                    return (
                        (e = e.toString().replace($n, "")),
                        (e = e.match(Dn)[2].replace(" ", "")),
                        (e = e ? e.split(In) : []),
                        (e = e.map(function (e) {
                            return ue(e.replace(On, ""));
                        }))
                    );
                }
                function de(e, t) {
                    var n = {};
                    X(e, function (e, t) {
                        function i(t, n) {
                            var i = Q(r, function (e) {
                                return t[e];
                            });
                            i.push(n), f(e).apply(null, i);
                        }
                        var r,
                            a = p(e),
                            s = (!a && 1 === e.length) || (a && 0 === e.length);
                        if (Ht(e)) (r = e.slice(0, -1)), (e = e[e.length - 1]), (n[t] = r.concat(r.length > 0 ? i : e));
                        else if (s) n[t] = e;
                        else {
                            if (((r = ce(e)), 0 === e.length && !a && 0 === r.length)) throw new Error("autoInject task functions require explicit parameters.");
                            a || r.pop(), (n[t] = r.concat(i));
                        }
                    }),
                        mn(n, t);
                }
                function pe() {
                    (this.head = this.tail = null), (this.length = 0);
                }
                function fe(e, t) {
                    (e.length = 1), (e.head = e.tail = t);
                }
                function he(e, t, n) {
                    function i(e, t, n) {
                        if (null != n && "function" != typeof n) throw new Error("task callback must be a function");
                        if (((c.started = !0), Ht(e) || (e = [e]), 0 === e.length && c.idle()))
                            return ct(function () {
                                c.drain();
                            });
                        for (var i = 0, r = e.length; i < r; i++) {
                            var a = { data: e[i], callback: n || w };
                            t ? c._tasks.unshift(a) : c._tasks.push(a);
                        }
                        l ||
                            ((l = !0),
                            ct(function () {
                                (l = !1), c.process();
                            }));
                    }
                    function r(e) {
                        return function (t) {
                            s -= 1;
                            for (var n = 0, i = e.length; n < i; n++) {
                                var r = e[n],
                                    a = K(o, r, 0);
                                0 === a ? o.shift() : a > 0 && o.splice(a, 1), r.callback.apply(r, arguments), null != t && c.error(t, r.data);
                            }
                            s <= c.concurrency - c.buffer && c.unsaturated(), c.idle() && c.drain(), c.process();
                        };
                    }
                    if (null == t) t = 1;
                    else if (0 === t) throw new Error("Concurrency must not be zero");
                    var a = f(e),
                        s = 0,
                        o = [],
                        l = !1,
                        u = !1,
                        c = {
                            _tasks: new pe(),
                            concurrency: t,
                            payload: n,
                            saturated: w,
                            unsaturated: w,
                            buffer: t / 4,
                            empty: w,
                            drain: w,
                            error: w,
                            started: !1,
                            paused: !1,
                            push: function (e, t) {
                                i(e, !1, t);
                            },
                            kill: function () {
                                (c.drain = w), c._tasks.empty();
                            },
                            unshift: function (e, t) {
                                i(e, !0, t);
                            },
                            remove: function (e) {
                                c._tasks.remove(e);
                            },
                            process: function () {
                                if (!u) {
                                    for (u = !0; !c.paused && s < c.concurrency && c._tasks.length; ) {
                                        var e = [],
                                            t = [],
                                            n = c._tasks.length;
                                        c.payload && (n = Math.min(n, c.payload));
                                        for (var i = 0; i < n; i++) {
                                            var l = c._tasks.shift();
                                            e.push(l), o.push(l), t.push(l.data);
                                        }
                                        (s += 1), 0 === c._tasks.length && c.empty(), s === c.concurrency && c.saturated();
                                        var d = N(r(e));
                                        a(t, d);
                                    }
                                    u = !1;
                                }
                            },
                            length: function () {
                                return c._tasks.length;
                            },
                            running: function () {
                                return s;
                            },
                            workersList: function () {
                                return o;
                            },
                            idle: function () {
                                return c._tasks.length + s === 0;
                            },
                            pause: function () {
                                c.paused = !0;
                            },
                            resume: function () {
                                !1 !== c.paused && ((c.paused = !1), ct(c.process));
                            },
                        };
                    return c;
                }
                function ve(e, t) {
                    return he(e, 1, t);
                }
                function me(e, t, n, i) {
                    i = T(i || w);
                    var r = f(n);
                    Nn(
                        e,
                        function (e, n, i) {
                            r(t, e, function (e, n) {
                                (t = n), i(e);
                            });
                        },
                        function (e) {
                            i(e, t);
                        }
                    );
                }
                function ge() {
                    var e = Q(arguments, f);
                    return function () {
                        var t = a(arguments),
                            n = this,
                            i = t[t.length - 1];
                        "function" == typeof i ? t.pop() : (i = w),
                            me(
                                e,
                                t,
                                function (e, t, i) {
                                    t.apply(
                                        n,
                                        e.concat(function (e) {
                                            var t = a(arguments, 1);
                                            i(e, t);
                                        })
                                    );
                                },
                                function (e, t) {
                                    i.apply(n, [e].concat(t));
                                }
                            );
                    };
                }
                function ye(e) {
                    return e;
                }
                function be(e, t) {
                    return function (n, i, r, a) {
                        a = a || w;
                        var s,
                            o = !1;
                        n(
                            i,
                            function (n, i, a) {
                                r(n, function (i, r) {
                                    i ? a(i) : e(r) && !s ? ((o = !0), (s = t(!0, n)), a(null, Lt)) : a();
                                });
                            },
                            function (e) {
                                e ? a(e) : a(null, o ? s : t(!1));
                            }
                        );
                    };
                }
                function xe(e, t) {
                    return t;
                }
                function we(e) {
                    return function (t) {
                        var n = a(arguments, 1);
                        n.push(function (t) {
                            var n = a(arguments, 1);
                            "object" == typeof console &&
                                (t
                                    ? console.error && console.error(t)
                                    : console[e] &&
                                      W(n, function (t) {
                                          console[e](t);
                                      }));
                        }),
                            f(t).apply(null, n);
                    };
                }
                function Te(e, t, n) {
                    function i(e) {
                        if (e) return n(e);
                        var t = a(arguments, 1);
                        t.push(r), o.apply(this, t);
                    }
                    function r(e, t) {
                        return e ? n(e) : t ? void s(i) : n(null);
                    }
                    n = N(n || w);
                    var s = f(e),
                        o = f(t);
                    r(null, !0);
                }
                function Ee(e, t, n) {
                    n = N(n || w);
                    var i = f(e),
                        r = function (e) {
                            if (e) return n(e);
                            var s = a(arguments, 1);
                            if (t.apply(this, s)) return i(r);
                            n.apply(null, [null].concat(s));
                        };
                    i(r);
                }
                function Se(e, t, n) {
                    Ee(
                        e,
                        function () {
                            return !t.apply(this, arguments);
                        },
                        n
                    );
                }
                function Ce(e, t, n) {
                    function i(e) {
                        if (e) return n(e);
                        s(r);
                    }
                    function r(e, t) {
                        return e ? n(e) : t ? void a(i) : n(null);
                    }
                    n = N(n || w);
                    var a = f(t),
                        s = f(e);
                    s(r);
                }
                function ke(e) {
                    return function (t, n, i) {
                        return e(t, i);
                    };
                }
                function Ae(e, t, n) {
                    un(e, ke(f(t)), n);
                }
                function Me(e, t, n, i) {
                    H(t)(e, ke(f(n)), i);
                }
                function Pe(e) {
                    return p(e)
                        ? e
                        : ot(function (t, n) {
                              var i = !0;
                              t.push(function () {
                                  var e = arguments;
                                  i
                                      ? ct(function () {
                                            n.apply(null, e);
                                        })
                                      : n.apply(null, e);
                              }),
                                  e.apply(this, t),
                                  (i = !1);
                          });
                }
                function Le(e) {
                    return !e;
                }
                function ze(e) {
                    return function (t) {
                        return null == t ? void 0 : t[e];
                    };
                }
                function De(e, t, n, i) {
                    var r = new Array(t.length);
                    e(
                        t,
                        function (e, t, i) {
                            n(e, function (e, n) {
                                (r[t] = !!n), i(e);
                            });
                        },
                        function (e) {
                            if (e) return i(e);
                            for (var n = [], a = 0; a < t.length; a++) r[a] && n.push(t[a]);
                            i(null, n);
                        }
                    );
                }
                function Ie(e, t, n, i) {
                    var r = [];
                    e(
                        t,
                        function (e, t, i) {
                            n(e, function (n, a) {
                                n ? i(n) : (a && r.push({ index: t, value: e }), i());
                            });
                        },
                        function (e) {
                            e
                                ? i(e)
                                : i(
                                      null,
                                      Q(
                                          r.sort(function (e, t) {
                                              return e.index - t.index;
                                          }),
                                          ze("value")
                                      )
                                  );
                        }
                    );
                }
                function Oe(e, t, n, i) {
                    (x(t) ? De : Ie)(e, t, f(n), i || w);
                }
                function $e(e, t) {
                    function n(e) {
                        if (e) return i(e);
                        r(n);
                    }
                    var i = N(t || w),
                        r = f(Pe(e));
                    n();
                }
                function je(e, t, n, i) {
                    i = T(i || w);
                    var r = {},
                        a = f(n);
                    B(
                        e,
                        t,
                        function (e, t, n) {
                            a(e, t, function (e, i) {
                                if (e) return n(e);
                                (r[t] = i), n();
                            });
                        },
                        function (e) {
                            i(e, r);
                        }
                    );
                }
                function Ne(e, t) {
                    return t in e;
                }
                function He(e, t) {
                    var n = Object.create(null),
                        i = Object.create(null);
                    t = t || ye;
                    var r = f(e),
                        s = ot(function (e, s) {
                            var o = t.apply(null, e);
                            Ne(n, o)
                                ? ct(function () {
                                      s.apply(null, n[o]);
                                  })
                                : Ne(i, o)
                                ? i[o].push(s)
                                : ((i[o] = [s]),
                                  r.apply(
                                      null,
                                      e.concat(function () {
                                          var e = a(arguments);
                                          n[o] = e;
                                          var t = i[o];
                                          delete i[o];
                                          for (var r = 0, s = t.length; r < s; r++) t[r].apply(null, e);
                                      })
                                  ));
                        });
                    return (s.memo = n), (s.unmemoized = e), s;
                }
                function Be(e, t, n) {
                    n = n || w;
                    var i = x(t) ? [] : {};
                    e(
                        t,
                        function (e, t, n) {
                            f(e)(function (e, r) {
                                arguments.length > 2 && (r = a(arguments, 1)), (i[t] = r), n(e);
                            });
                        },
                        function (e) {
                            n(e, i);
                        }
                    );
                }
                function qe(e, t) {
                    Be(un, e, t);
                }
                function Re(e, t, n) {
                    Be(H(t), e, n);
                }
                function Fe(e, t) {
                    if (((t = T(t || w)), !Ht(e))) return t(new TypeError("First argument to race must be an array of functions"));
                    if (!e.length) return t();
                    for (var n = 0, i = e.length; n < i; n++) f(e[n])(t);
                }
                function Ve(e, t, n, i) {
                    me(a(e).reverse(), t, n, i);
                }
                function Ge(e) {
                    var t = f(e);
                    return ot(function (e, n) {
                        return (
                            e.push(function (e, t) {
                                if (e) n(null, { error: e });
                                else {
                                    var i;
                                    (i = arguments.length <= 2 ? t : a(arguments, 1)), n(null, { value: i });
                                }
                            }),
                            t.apply(this, e)
                        );
                    });
                }
                function We(e) {
                    var t;
                    return (
                        Ht(e)
                            ? (t = Q(e, Ge))
                            : ((t = {}),
                              X(e, function (e, n) {
                                  t[n] = Ge.call(this, e);
                              })),
                        t
                    );
                }
                function Xe(e, t, n, i) {
                    Oe(
                        e,
                        t,
                        function (e, t) {
                            n(e, function (e, n) {
                                t(e, !n);
                            });
                        },
                        i
                    );
                }
                function Ye(e) {
                    return function () {
                        return e;
                    };
                }
                function _e(e, t, n) {
                    function i() {
                        o(function (e) {
                            e && l++ < s.times && ("function" != typeof s.errorFilter || s.errorFilter(e)) ? setTimeout(i, s.intervalFunc(l)) : n.apply(null, arguments);
                        });
                    }
                    var r = 5,
                        a = 0,
                        s = { times: r, intervalFunc: Ye(a) };
                    if (
                        (arguments.length < 3 && "function" == typeof e
                            ? ((n = t || w), (t = e))
                            : (!(function (e, t) {
                                  if ("object" == typeof t) (e.times = +t.times || r), (e.intervalFunc = "function" == typeof t.interval ? t.interval : Ye(+t.interval || a)), (e.errorFilter = t.errorFilter);
                                  else {
                                      if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid arguments for async.retry");
                                      e.times = +t || r;
                                  }
                              })(s, e),
                              (n = n || w)),
                        "function" != typeof t)
                    )
                        throw new Error("Invalid arguments for async.retry");
                    var o = f(t),
                        l = 1;
                    i();
                }
                function Ue(e, t) {
                    Be(Nn, e, t);
                }
                function Ke(e, t, n) {
                    function i(e, t) {
                        var n = e.criteria,
                            i = t.criteria;
                        return n < i ? -1 : n > i ? 1 : 0;
                    }
                    var r = f(t);
                    cn(
                        e,
                        function (e, t) {
                            r(e, function (n, i) {
                                if (n) return t(n);
                                t(null, { value: e, criteria: i });
                            });
                        },
                        function (e, t) {
                            if (e) return n(e);
                            n(null, Q(t.sort(i), ze("value")));
                        }
                    );
                }
                function Qe(e, t, n) {
                    var i = f(e);
                    return ot(function (r, a) {
                        function s() {
                            var t = e.name || "anonymous",
                                i = new Error('Callback function "' + t + '" timed out.');
                            (i.code = "ETIMEDOUT"), n && (i.info = n), (l = !0), a(i);
                        }
                        var o,
                            l = !1;
                        r.push(function () {
                            l || (a.apply(null, arguments), clearTimeout(o));
                        }),
                            (o = setTimeout(s, t)),
                            i.apply(null, r);
                    });
                }
                function Je(e, t, n, i) {
                    for (var r = -1, a = yi(gi((t - e) / (n || 1)), 0), s = Array(a); a--; ) (s[i ? a : ++r] = e), (e += n);
                    return s;
                }
                function Ze(e, t, n, i) {
                    var r = f(n);
                    pn(Je(0, e, 1), t, r, i);
                }
                function et(e, t, n, i) {
                    arguments.length <= 3 && ((i = n), (n = t), (t = Ht(e) ? [] : {})), (i = T(i || w));
                    var r = f(n);
                    un(
                        e,
                        function (e, n, i) {
                            r(t, e, n, i);
                        },
                        function (e) {
                            i(e, t);
                        }
                    );
                }
                function tt(e, t) {
                    var n,
                        i = null;
                    (t = t || w),
                        _n(
                            e,
                            function (e, t) {
                                f(e)(function (e, r) {
                                    (n = arguments.length > 2 ? a(arguments, 1) : r), (i = e), t(!e);
                                });
                            },
                            function () {
                                t(i, n);
                            }
                        );
                }
                function nt(e) {
                    return function () {
                        return (e.unmemoized || e).apply(null, arguments);
                    };
                }
                function it(e, t, n) {
                    n = N(n || w);
                    var i = f(t);
                    if (!e()) return n(null);
                    var r = function (t) {
                        if (t) return n(t);
                        if (e()) return i(r);
                        var s = a(arguments, 1);
                        n.apply(null, [null].concat(s));
                    };
                    i(r);
                }
                function rt(e, t, n) {
                    it(
                        function () {
                            return !e.apply(this, arguments);
                        },
                        t,
                        n
                    );
                }
                var at,
                    st = function (e) {
                        var t = a(arguments, 1);
                        return function () {
                            var n = a(arguments);
                            return e.apply(null, t.concat(n));
                        };
                    },
                    ot = function (e) {
                        return function () {
                            var t = a(arguments),
                                n = t.pop();
                            e.call(this, t, n);
                        };
                    },
                    lt = "function" == typeof e && e,
                    ut = "object" == typeof n && "function" == typeof n.nextTick;
                at = lt ? e : ut ? n.nextTick : o;
                var ct = l(at),
                    dt = "function" == typeof Symbol,
                    pt = "object" == typeof i && i && i.Object === Object && i,
                    ft = "object" == typeof self && self && self.Object === Object && self,
                    ht = pt || ft || Function("return this")(),
                    vt = ht.Symbol,
                    mt = Object.prototype,
                    gt = mt.hasOwnProperty,
                    yt = mt.toString,
                    bt = vt ? vt.toStringTag : void 0,
                    xt = Object.prototype,
                    wt = xt.toString,
                    Tt = "[object Null]",
                    Et = "[object Undefined]",
                    St = vt ? vt.toStringTag : void 0,
                    Ct = "[object AsyncFunction]",
                    kt = "[object Function]",
                    At = "[object GeneratorFunction]",
                    Mt = "[object Proxy]",
                    Pt = 9007199254740991,
                    Lt = {},
                    zt = "function" == typeof Symbol && Symbol.iterator,
                    Dt = function (e) {
                        return zt && e[zt] && e[zt]();
                    },
                    It = "[object Arguments]",
                    Ot = Object.prototype,
                    $t = Ot.hasOwnProperty,
                    jt = Ot.propertyIsEnumerable,
                    Nt = C(
                        (function () {
                            return arguments;
                        })()
                    )
                        ? C
                        : function (e) {
                              return S(e) && $t.call(e, "callee") && !jt.call(e, "callee");
                          },
                    Ht = Array.isArray,
                    Bt = "object" == typeof t && t && !t.nodeType && t,
                    qt = Bt && "object" == typeof r && r && !r.nodeType && r,
                    Rt = qt && qt.exports === Bt,
                    Ft = Rt ? ht.Buffer : void 0,
                    Vt = Ft ? Ft.isBuffer : void 0,
                    Gt = Vt || k,
                    Wt = 9007199254740991,
                    Xt = /^(?:0|[1-9]\d*)$/,
                    Yt = {};
                (Yt["[object Float32Array]"] = Yt["[object Float64Array]"] = Yt["[object Int8Array]"] = Yt["[object Int16Array]"] = Yt["[object Int32Array]"] = Yt["[object Uint8Array]"] = Yt["[object Uint8ClampedArray]"] = Yt[
                    "[object Uint16Array]"
                ] = Yt["[object Uint32Array]"] = !0),
                    (Yt["[object Arguments]"] = Yt["[object Array]"] = Yt["[object ArrayBuffer]"] = Yt["[object Boolean]"] = Yt["[object DataView]"] = Yt["[object Date]"] = Yt["[object Error]"] = Yt["[object Function]"] = Yt[
                        "[object Map]"
                    ] = Yt["[object Number]"] = Yt["[object Object]"] = Yt["[object RegExp]"] = Yt["[object Set]"] = Yt["[object String]"] = Yt["[object WeakMap]"] = !1);
                var _t = "object" == typeof t && t && !t.nodeType && t,
                    Ut = _t && "object" == typeof r && r && !r.nodeType && r,
                    Kt = Ut && Ut.exports === _t,
                    Qt = Kt && pt.process,
                    Jt = (function () {
                        try {
                            var e = Ut && Ut.require && Ut.require("util").types;
                            return e || (Qt && Qt.binding && Qt.binding("util"));
                        } catch (e) {}
                    })(),
                    Zt = Jt && Jt.isTypedArray,
                    en = Zt
                        ? (function (e) {
                              return function (t) {
                                  return e(t);
                              };
                          })(Zt)
                        : M,
                    tn = Object.prototype,
                    nn = tn.hasOwnProperty,
                    rn = Object.prototype,
                    an = (function (e, t) {
                        return function (n) {
                            return e(t(n));
                        };
                    })(Object.keys, Object),
                    sn = Object.prototype,
                    on = sn.hasOwnProperty,
                    ln = q(B, 1 / 0),
                    un = function (e, t, n) {
                        (x(e) ? R : ln)(e, f(t), n);
                    },
                    cn = F(V),
                    dn = h(cn),
                    pn = G(V),
                    fn = q(pn, 1),
                    hn = h(fn),
                    vn = (function (e) {
                        return function (t, n, i) {
                            for (var r = -1, a = Object(t), s = i(t), o = s.length; o--; ) {
                                var l = s[e ? o : ++r];
                                if (!1 === n(a[l], l, a)) break;
                            }
                            return t;
                        };
                    })(),
                    mn = function (e, t, n) {
                        function i(e, t) {
                            g.push(function () {
                                l(e, t);
                            });
                        }
                        function r() {
                            if (0 === g.length && 0 === h) return n(null, p);
                            for (; g.length && h < t; ) {
                                g.shift()();
                            }
                        }
                        function s(e, t) {
                            var n = m[e];
                            n || (n = m[e] = []), n.push(t);
                        }
                        function o(e) {
                            W(m[e] || [], function (e) {
                                e();
                            }),
                                r();
                        }
                        function l(e, t) {
                            if (!v) {
                                var i = N(function (t, i) {
                                    if ((h--, arguments.length > 2 && (i = a(arguments, 1)), t)) {
                                        var r = {};
                                        X(p, function (e, t) {
                                            r[t] = e;
                                        }),
                                            (r[e] = i),
                                            (v = !0),
                                            (m = Object.create(null)),
                                            n(t, r);
                                    } else (p[e] = i), o(e);
                                });
                                h++;
                                var r = f(t[t.length - 1]);
                                t.length > 1 ? r(p, i) : r(i);
                            }
                        }
                        function u(t) {
                            var n = [];
                            return (
                                X(e, function (e, i) {
                                    Ht(e) && K(e, t, 0) >= 0 && n.push(i);
                                }),
                                n
                            );
                        }
                        "function" == typeof t && ((n = t), (t = null)), (n = T(n || w));
                        var c = D(e),
                            d = c.length;
                        if (!d) return n(null);
                        t || (t = d);
                        var p = {},
                            h = 0,
                            v = !1,
                            m = Object.create(null),
                            g = [],
                            y = [],
                            b = {};
                        X(e, function (t, n) {
                            if (!Ht(t)) return i(n, [t]), void y.push(n);
                            var r = t.slice(0, t.length - 1),
                                a = r.length;
                            if (0 === a) return i(n, t), void y.push(n);
                            (b[n] = a),
                                W(r, function (o) {
                                    if (!e[o]) throw new Error("async.auto task `" + n + "` has a non-existent dependency `" + o + "` in " + r.join(", "));
                                    s(o, function () {
                                        0 === --a && i(n, t);
                                    });
                                });
                        }),
                            (function () {
                                for (var e, t = 0; y.length; )
                                    (e = y.pop()),
                                        t++,
                                        W(u(e), function (e) {
                                            0 == --b[e] && y.push(e);
                                        });
                                if (t !== d) throw new Error("async.auto cannot execute tasks due to a recursive dependency");
                            })(),
                            r();
                    },
                    gn = "[object Symbol]",
                    yn = 1 / 0,
                    bn = vt ? vt.prototype : void 0,
                    xn = bn ? bn.toString : void 0,
                    wn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
                    Tn = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                    En = "\\ud83c[\\udffb-\\udfff]",
                    Sn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    Cn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    kn = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                    An = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", Sn, Cn].join("|") + ")[\\ufe0e\\ufe0f]?" + kn + ")*",
                    Mn = "[\\ufe0e\\ufe0f]?" + kn + An,
                    Pn = "(?:" + ["[^\\ud800-\\udfff]" + Tn + "?", Tn, Sn, Cn, "[\\ud800-\\udfff]"].join("|") + ")",
                    Ln = RegExp(En + "(?=" + En + ")|" + Pn + Mn, "g"),
                    zn = /^\s+|\s+$/g,
                    Dn = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,
                    In = /,/,
                    On = /(=.+)?(\s*)$/,
                    $n = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
                (pe.prototype.removeLink = function (e) {
                    return e.prev ? (e.prev.next = e.next) : (this.head = e.next), e.next ? (e.next.prev = e.prev) : (this.tail = e.prev), (e.prev = e.next = null), (this.length -= 1), e;
                }),
                    (pe.prototype.empty = function () {
                        for (; this.head; ) this.shift();
                        return this;
                    }),
                    (pe.prototype.insertAfter = function (e, t) {
                        (t.prev = e), (t.next = e.next), e.next ? (e.next.prev = t) : (this.tail = t), (e.next = t), (this.length += 1);
                    }),
                    (pe.prototype.insertBefore = function (e, t) {
                        (t.prev = e.prev), (t.next = e), e.prev ? (e.prev.next = t) : (this.head = t), (e.prev = t), (this.length += 1);
                    }),
                    (pe.prototype.unshift = function (e) {
                        this.head ? this.insertBefore(this.head, e) : fe(this, e);
                    }),
                    (pe.prototype.push = function (e) {
                        this.tail ? this.insertAfter(this.tail, e) : fe(this, e);
                    }),
                    (pe.prototype.shift = function () {
                        return this.head && this.removeLink(this.head);
                    }),
                    (pe.prototype.pop = function () {
                        return this.tail && this.removeLink(this.tail);
                    }),
                    (pe.prototype.toArray = function () {
                        for (var e = Array(this.length), t = this.head, n = 0; n < this.length; n++) (e[n] = t.data), (t = t.next);
                        return e;
                    }),
                    (pe.prototype.remove = function (e) {
                        for (var t = this.head; t; ) {
                            var n = t.next;
                            e(t) && this.removeLink(t), (t = n);
                        }
                        return this;
                    });
                var jn,
                    Nn = q(B, 1),
                    Hn = function () {
                        return ge.apply(null, a(arguments).reverse());
                    },
                    Bn = Array.prototype.concat,
                    qn = function (e, t, n, i) {
                        i = i || w;
                        var r = f(n);
                        pn(
                            e,
                            t,
                            function (e, t) {
                                r(e, function (e) {
                                    return e ? t(e) : t(null, a(arguments, 1));
                                });
                            },
                            function (e, t) {
                                for (var n = [], r = 0; r < t.length; r++) t[r] && (n = Bn.apply(n, t[r]));
                                return i(e, n);
                            }
                        );
                    },
                    Rn = q(qn, 1 / 0),
                    Fn = q(qn, 1),
                    Vn = function () {
                        var e = a(arguments),
                            t = [null].concat(e);
                        return function () {
                            return arguments[arguments.length - 1].apply(this, t);
                        };
                    },
                    Gn = F(be(ye, xe)),
                    Wn = G(be(ye, xe)),
                    Xn = q(Wn, 1),
                    Yn = we("dir"),
                    _n = q(Me, 1),
                    Un = F(be(Le, Le)),
                    Kn = G(be(Le, Le)),
                    Qn = q(Kn, 1),
                    Jn = F(Oe),
                    Zn = G(Oe),
                    ei = q(Zn, 1),
                    ti = function (e, t, n, i) {
                        i = i || w;
                        var r = f(n);
                        pn(
                            e,
                            t,
                            function (e, t) {
                                r(e, function (n, i) {
                                    return n ? t(n) : t(null, { key: i, val: e });
                                });
                            },
                            function (e, t) {
                                for (var n = {}, r = Object.prototype.hasOwnProperty, a = 0; a < t.length; a++)
                                    if (t[a]) {
                                        var s = t[a].key,
                                            o = t[a].val;
                                        r.call(n, s) ? n[s].push(o) : (n[s] = [o]);
                                    }
                                return i(e, n);
                            }
                        );
                    },
                    ni = q(ti, 1 / 0),
                    ii = q(ti, 1),
                    ri = we("log"),
                    ai = q(je, 1 / 0),
                    si = q(je, 1);
                jn = ut ? n.nextTick : lt ? e : o;
                var oi = l(jn),
                    li = function (e, t) {
                        var n = f(e);
                        return he(
                            function (e, t) {
                                n(e[0], t);
                            },
                            t,
                            1
                        );
                    },
                    ui = function (e, t) {
                        var n = li(e, t);
                        return (
                            (n.push = function (e, t, i) {
                                if ((null == i && (i = w), "function" != typeof i)) throw new Error("task callback must be a function");
                                if (((n.started = !0), Ht(e) || (e = [e]), 0 === e.length))
                                    return ct(function () {
                                        n.drain();
                                    });
                                t = t || 0;
                                for (var r = n._tasks.head; r && t >= r.priority; ) r = r.next;
                                for (var a = 0, s = e.length; a < s; a++) {
                                    var o = { data: e[a], priority: t, callback: i };
                                    r ? n._tasks.insertBefore(r, o) : n._tasks.push(o);
                                }
                                ct(n.process);
                            }),
                            delete n.unshift,
                            n
                        );
                    },
                    ci = F(Xe),
                    di = G(Xe),
                    pi = q(di, 1),
                    fi = function (e, t) {
                        t || ((t = e), (e = null));
                        var n = f(t);
                        return ot(function (t, i) {
                            function r(e) {
                                n.apply(null, t.concat(e));
                            }
                            e ? _e(e, r, i) : _e(r, i);
                        });
                    },
                    hi = F(be(Boolean, ye)),
                    vi = G(be(Boolean, ye)),
                    mi = q(vi, 1),
                    gi = Math.ceil,
                    yi = Math.max,
                    bi = q(Ze, 1 / 0),
                    xi = q(Ze, 1),
                    wi = function (e, t) {
                        function n(t) {
                            var n = f(e[r++]);
                            t.push(N(i)), n.apply(null, t);
                        }
                        function i(i) {
                            if (i || r === e.length) return t.apply(null, arguments);
                            n(a(arguments, 1));
                        }
                        if (((t = T(t || w)), !Ht(e))) return t(new Error("First argument to waterfall must be an array of functions"));
                        if (!e.length) return t();
                        var r = 0;
                        n([]);
                    },
                    Ti = {
                        apply: st,
                        applyEach: dn,
                        applyEachSeries: hn,
                        asyncify: u,
                        auto: mn,
                        autoInject: de,
                        cargo: ve,
                        compose: Hn,
                        concat: Rn,
                        concatLimit: qn,
                        concatSeries: Fn,
                        constant: Vn,
                        detect: Gn,
                        detectLimit: Wn,
                        detectSeries: Xn,
                        dir: Yn,
                        doDuring: Te,
                        doUntil: Se,
                        doWhilst: Ee,
                        during: Ce,
                        each: Ae,
                        eachLimit: Me,
                        eachOf: un,
                        eachOfLimit: B,
                        eachOfSeries: Nn,
                        eachSeries: _n,
                        ensureAsync: Pe,
                        every: Un,
                        everyLimit: Kn,
                        everySeries: Qn,
                        filter: Jn,
                        filterLimit: Zn,
                        filterSeries: ei,
                        forever: $e,
                        groupBy: ni,
                        groupByLimit: ti,
                        groupBySeries: ii,
                        log: ri,
                        map: cn,
                        mapLimit: pn,
                        mapSeries: fn,
                        mapValues: ai,
                        mapValuesLimit: je,
                        mapValuesSeries: si,
                        memoize: He,
                        nextTick: oi,
                        parallel: qe,
                        parallelLimit: Re,
                        priorityQueue: ui,
                        queue: li,
                        race: Fe,
                        reduce: me,
                        reduceRight: Ve,
                        reflect: Ge,
                        reflectAll: We,
                        reject: ci,
                        rejectLimit: di,
                        rejectSeries: pi,
                        retry: _e,
                        retryable: fi,
                        seq: ge,
                        series: Ue,
                        setImmediate: ct,
                        some: hi,
                        someLimit: vi,
                        someSeries: mi,
                        sortBy: Ke,
                        timeout: Qe,
                        times: bi,
                        timesLimit: Ze,
                        timesSeries: xi,
                        transform: et,
                        tryEach: tt,
                        unmemoize: nt,
                        until: rt,
                        waterfall: wi,
                        whilst: it,
                        all: Un,
                        allLimit: Kn,
                        allSeries: Qn,
                        any: hi,
                        anyLimit: vi,
                        anySeries: mi,
                        find: Gn,
                        findLimit: Wn,
                        findSeries: Xn,
                        forEach: Ae,
                        forEachSeries: _n,
                        forEachLimit: Me,
                        forEachOf: un,
                        forEachOfSeries: Nn,
                        forEachOfLimit: B,
                        inject: me,
                        foldl: me,
                        foldr: Ve,
                        select: Jn,
                        selectLimit: Zn,
                        selectSeries: ei,
                        wrapSync: u,
                    };
                (t.default = Ti),
                    (t.apply = st),
                    (t.applyEach = dn),
                    (t.applyEachSeries = hn),
                    (t.asyncify = u),
                    (t.auto = mn),
                    (t.autoInject = de),
                    (t.cargo = ve),
                    (t.compose = Hn),
                    (t.concat = Rn),
                    (t.concatLimit = qn),
                    (t.concatSeries = Fn),
                    (t.constant = Vn),
                    (t.detect = Gn),
                    (t.detectLimit = Wn),
                    (t.detectSeries = Xn),
                    (t.dir = Yn),
                    (t.doDuring = Te),
                    (t.doUntil = Se),
                    (t.doWhilst = Ee),
                    (t.during = Ce),
                    (t.each = Ae),
                    (t.eachLimit = Me),
                    (t.eachOf = un),
                    (t.eachOfLimit = B),
                    (t.eachOfSeries = Nn),
                    (t.eachSeries = _n),
                    (t.ensureAsync = Pe),
                    (t.every = Un),
                    (t.everyLimit = Kn),
                    (t.everySeries = Qn),
                    (t.filter = Jn),
                    (t.filterLimit = Zn),
                    (t.filterSeries = ei),
                    (t.forever = $e),
                    (t.groupBy = ni),
                    (t.groupByLimit = ti),
                    (t.groupBySeries = ii),
                    (t.log = ri),
                    (t.map = cn),
                    (t.mapLimit = pn),
                    (t.mapSeries = fn),
                    (t.mapValues = ai),
                    (t.mapValuesLimit = je),
                    (t.mapValuesSeries = si),
                    (t.memoize = He),
                    (t.nextTick = oi),
                    (t.parallel = qe),
                    (t.parallelLimit = Re),
                    (t.priorityQueue = ui),
                    (t.queue = li),
                    (t.race = Fe),
                    (t.reduce = me),
                    (t.reduceRight = Ve),
                    (t.reflect = Ge),
                    (t.reflectAll = We),
                    (t.reject = ci),
                    (t.rejectLimit = di),
                    (t.rejectSeries = pi),
                    (t.retry = _e),
                    (t.retryable = fi),
                    (t.seq = ge),
                    (t.series = Ue),
                    (t.setImmediate = ct),
                    (t.some = hi),
                    (t.someLimit = vi),
                    (t.someSeries = mi),
                    (t.sortBy = Ke),
                    (t.timeout = Qe),
                    (t.times = bi),
                    (t.timesLimit = Ze),
                    (t.timesSeries = xi),
                    (t.transform = et),
                    (t.tryEach = tt),
                    (t.unmemoize = nt),
                    (t.until = rt),
                    (t.waterfall = wi),
                    (t.whilst = it),
                    (t.all = Un),
                    (t.allLimit = Kn),
                    (t.allSeries = Qn),
                    (t.any = hi),
                    (t.anyLimit = vi),
                    (t.anySeries = mi),
                    (t.find = Gn),
                    (t.findLimit = Wn),
                    (t.findSeries = Xn),
                    (t.forEach = Ae),
                    (t.forEachSeries = _n),
                    (t.forEachLimit = Me),
                    (t.forEachOf = un),
                    (t.forEachOfSeries = Nn),
                    (t.forEachOfLimit = B),
                    (t.inject = me),
                    (t.foldl = me),
                    (t.foldr = Ve),
                    (t.select = Jn),
                    (t.selectLimit = Zn),
                    (t.selectSeries = ei),
                    (t.wrapSync = u),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            });
        }.call(
            t,
            n(5).setImmediate,
            n(7),
            (function () {
                return this;
            })(),
            n(8)(e)
        ));
    },
    function (e, t, n) {
        (function (e) {
            function i(e, t) {
                (this._id = e), (this._clearFn = t);
            }
            var r = (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
                a = Function.prototype.apply;
            (t.setTimeout = function () {
                return new i(a.call(setTimeout, r, arguments), clearTimeout);
            }),
                (t.setInterval = function () {
                    return new i(a.call(setInterval, r, arguments), clearInterval);
                }),
                (t.clearTimeout = t.clearInterval = function (e) {
                    e && e.close();
                }),
                (i.prototype.unref = i.prototype.ref = function () {}),
                (i.prototype.close = function () {
                    this._clearFn.call(r, this._id);
                }),
                (t.enroll = function (e, t) {
                    clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                }),
                (t.unenroll = function (e) {
                    clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                }),
                (t._unrefActive = t.active = function (e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 &&
                        (e._idleTimeoutId = setTimeout(function () {
                            e._onTimeout && e._onTimeout();
                        }, t));
                }),
                n(6),
                (t.setImmediate = ("undefined" != typeof self && self.setImmediate) || (void 0 !== e && e.setImmediate) || (this && this.setImmediate)),
                (t.clearImmediate = ("undefined" != typeof self && self.clearImmediate) || (void 0 !== e && e.clearImmediate) || (this && this.clearImmediate));
        }.call(
            t,
            (function () {
                return this;
            })()
        ));
    },
    function (e, t, n) {
        (function (e, t) {
            !(function (e, n) {
                "use strict";
                function i(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var i = { callback: e, args: t };
                    return (u[l] = i), o(l), l++;
                }
                function r(e) {
                    delete u[e];
                }
                function a(e) {
                    var t = e.callback,
                        i = e.args;
                    switch (i.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(i[0]);
                            break;
                        case 2:
                            t(i[0], i[1]);
                            break;
                        case 3:
                            t(i[0], i[1], i[2]);
                            break;
                        default:
                            t.apply(n, i);
                    }
                }
                function s(e) {
                    if (c) setTimeout(s, 0, e);
                    else {
                        var t = u[e];
                        if (t) {
                            c = !0;
                            try {
                                a(t);
                            } finally {
                                r(e), (c = !1);
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var o,
                        l = 1,
                        u = {},
                        c = !1,
                        d = e.document,
                        p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    (p = p && p.setTimeout ? p : e),
                        "[object process]" === {}.toString.call(e.process)
                            ? (function () {
                                  o = function (e) {
                                      t.nextTick(function () {
                                          s(e);
                                      });
                                  };
                              })()
                            : (function () {
                                  if (e.postMessage && !e.importScripts) {
                                      var t = !0,
                                          n = e.onmessage;
                                      return (
                                          (e.onmessage = function () {
                                              t = !1;
                                          }),
                                          e.postMessage("", "*"),
                                          (e.onmessage = n),
                                          t
                                      );
                                  }
                              })()
                            ? (function () {
                                  var t = "setImmediate$" + Math.random() + "$",
                                      n = function (n) {
                                          n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && s(+n.data.slice(t.length));
                                      };
                                  e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                                      (o = function (n) {
                                          e.postMessage(t + n, "*");
                                      });
                              })()
                            : e.MessageChannel
                            ? (function () {
                                  var e = new MessageChannel();
                                  (e.port1.onmessage = function (e) {
                                      s(e.data);
                                  }),
                                      (o = function (t) {
                                          e.port2.postMessage(t);
                                      });
                              })()
                            : d && "onreadystatechange" in d.createElement("script")
                            ? (function () {
                                  var e = d.documentElement;
                                  o = function (t) {
                                      var n = d.createElement("script");
                                      (n.onreadystatechange = function () {
                                          s(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
                                      }),
                                          e.appendChild(n);
                                  };
                              })()
                            : (function () {
                                  o = function (e) {
                                      setTimeout(s, 0, e);
                                  };
                              })(),
                        (p.setImmediate = i),
                        (p.clearImmediate = r);
                }
            })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
        }.call(
            t,
            (function () {
                return this;
            })(),
            n(7)
        ));
    },
    function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined");
        }
        function i() {
            throw new Error("clearTimeout has not been defined");
        }
        function r(e) {
            if (c === setTimeout) return setTimeout(e, 0);
            if ((c === n || !c) && setTimeout) return (c = setTimeout), setTimeout(e, 0);
            try {
                return c(e, 0);
            } catch (t) {
                try {
                    return c.call(null, e, 0);
                } catch (t) {
                    return c.call(this, e, 0);
                }
            }
        }
        function a(e) {
            if (d === clearTimeout) return clearTimeout(e);
            if ((d === i || !d) && clearTimeout) return (d = clearTimeout), clearTimeout(e);
            try {
                return d(e);
            } catch (t) {
                try {
                    return d.call(null, e);
                } catch (t) {
                    return d.call(this, e);
                }
            }
        }
        function s() {
            v && f && ((v = !1), f.length ? (h = f.concat(h)) : (m = -1), h.length && o());
        }
        function o() {
            if (!v) {
                var e = r(s);
                v = !0;
                for (var t = h.length; t; ) {
                    for (f = h, h = []; ++m < t; ) f && f[m].run();
                    (m = -1), (t = h.length);
                }
                (f = null), (v = !1), a(e);
            }
        }
        function l(e, t) {
            (this.fun = e), (this.array = t);
        }
        function u() {}
        var c,
            d,
            p = (e.exports = {});
        !(function () {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
                c = n;
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
                d = i;
            }
        })();
        var f,
            h = [],
            v = !1,
            m = -1;
        (p.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            h.push(new l(e, t)), 1 !== h.length || v || r(o);
        }),
            (l.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (p.title = "browser"),
            (p.browser = !0),
            (p.env = {}),
            (p.argv = []),
            (p.version = ""),
            (p.versions = {}),
            (p.on = u),
            (p.addListener = u),
            (p.once = u),
            (p.off = u),
            (p.removeListener = u),
            (p.removeAllListeners = u),
            (p.emit = u),
            (p.prependListener = u),
            (p.prependOnceListener = u),
            (p.listeners = function (e) {
                return [];
            }),
            (p.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (p.cwd = function () {
                return "/";
            }),
            (p.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (p.umask = function () {
                return 0;
            });
    },
    function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || ((e.deprecate = function () {}), (e.paths = []), (e.children = []), (e.webpackPolyfill = 1)), e;
        };
    },
]);
