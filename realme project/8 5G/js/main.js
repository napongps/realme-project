!(function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { exports: {}, id: r, loaded: !1 });
        return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
    }
    var n = {};
    (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
    function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var o = n(1),
            i = r(o),
            a = n(54),
            s = r(a),
            u = n(56),
            l = r(u),
            c = n(57),
            f = r(c),
            d = n(58),
            p = r(d),
            h = n(59),
            v = n(66),
            m = r(v),
            g = n(67),
            y = r(g);
        (0, l.default)(function () {
            function t() {
                switch ((/(\w{2,}-\w{2,})|(\w{2,})/.exec(window.location.pathname) && /(\w{2,}-\w{2,})|(\w{2,})/.exec(window.location.pathname)[0]) || "cn") {
                    case "cn":
                        return "æŠ±æ­‰ï¼Œæš‚åªæ”¯æŒæ¨ªå±æµè§ˆ";
                    case "id":
                        return "Maaf, hanya mendukung dalam horizontal ";
                    default:
                        return "Sorry, only horizontal viewing is supported temporarily";
                }
            }
            function n() {
                a.setCookie("hadViewApp", !0, 365), (0, l.default)(".toApp-header").hide(), (0, l.default)("html").removeClass("header-app-visable");
            }
            (0, f.default)();
            var r = {
                    scroll: function () {
                        (0, l.default)(window).scrollTop() > 0
                            ? ((0, l.default)(".header").addClass("header-fixed"),
                              (0, l.default)(".product-nav").length > 0 &&
                                  ((0, l.default)(".product-nav").addClass("fixed"),
                                  (window.navigator.userAgent.indexOf("realmeLink") > -1 || window.navigator.userAgent.indexOf("realmeCommunity") > -1 || window.navigator.userAgent.indexOf("oppostore") > -1) &&
                                      (0, l.default)(".product-nav").css("top", "0px"),
                                  (0, l.default)(window).width() > 768 ? (0, l.default)(".header").hide() : (0, l.default)(".header").show()),
                              (0, l.default)("html").removeClass("header-notify-visible"))
                            : ((0, l.default)(".header").removeClass("header-fixed"), (0, l.default)(".product-nav").removeClass("fixed"), (0, l.default)(".header").show(), r.getProductNavTop());
                    },
                    getProductNavTop: function () {
                        window.innerWidth;
                    },
                    logoAnimate: function () {
                        (0, l.default)(".logo-dist").addClass("animate"), (0, l.default)(".logo-src").addClass("animate");
                    },
                    logoAnimateRemove: function () {
                        (0, l.default)(".logo-src").removeClass("animate"),
                            setTimeout(function () {
                                (0, l.default)(".logo-dist").removeClass("animate");
                            }, 300);
                    },
                    formatPrice: function (e) {
                        var t = /it|es|fr|eu/i,
                            n = e.toString();
                        return t.test(u)
                            ? n
                                  .replace(/\b(\.\d)\b/g, "$10")
                                  .replace(/\./g, ",")
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                            : "id" === u
                            ? n.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                            : "cn" === u
                            ? n
                            : n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    },
                    getSpuPrice: function (e, t) {
                        l.default.ajax({
                            url: e,
                            timeout: 8e3,
                            xhrFields: { withCredentials: !0 },
                            data: (0, s.default)(t),
                            crossDomain: !0,
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function (e) {
                                if (200 === e.code) {
                                    var t = e.data;
                                    (0, l.default)(".tag-product-price").map(function (e, n) {
                                        var o = (0, l.default)(n).attr("data-id"),
                                            i = t[o];
                                        if (i) {
                                            var a = i.minPrice,
                                                s = i.showPrice,
                                                u = r.formatPrice(a),
                                                c = r.formatPrice(s);
                                            (0, l.default)(n).text(u), c && c > u && (0, l.default)(n).siblings("del").show().find("span").text(c);
                                        }
                                    });
                                }
                            },
                        });
                    },
                    displaySpuPrice: function (e) {
                        var t = [];
                        (0, l.default)(".tag-product-price").map(function (e, n) {
                            var r = Number((0, l.default)(n).attr("data-id"));
                            t.some(function (e) {
                                return e === r;
                            }) || t.push(r);
                        }),
                            t.length && this.getSpuPrice(e, { spuIdList: t });
                    },
                    showNavSubMenu: function (e) {
                        (0, l.default)(".nav-submenu").removeClass("visible"),
                            (0, l.default)(e).parent().find(".nav-submenu").addClass("visible"),
                            l.default.each((0, l.default)(e).parent().find(".nav-submenu").find("img.nav-lazyload"), function (e, t) {
                                (0, l.default)(t)
                                    .attr("src", (0, l.default)(t).data("src"))
                                    .removeClass("nav-lazyload");
                            });
                    },
                    removeNavSubMenu: function () {
                        (0, l.default)(".nav-submenu").removeClass("visible"),
                            (0, l.default)(".nav-submenu .submenu-tabs .secondary-menu").map(function (e, t) {
                                (0, l.default)(t).removeClass("visible"), 0 === e && ((0, l.default)(t).mouseover(), (0, l.default)(t).addClass("visible"));
                            });
                    },
                    showAcount: function () {
                        (0, l.default)(".header-account").addClass("visible"), r.removeNavMenu();
                    },
                    removeAccount: function () {
                        (0, l.default)(".header-account").removeClass("visible");
                    },
                    showNavMenu: function () {
                        (0, l.default)(".menu-fold").find(".icon-menu").addClass("icon-menu-open"), (0, l.default)(".nav").addClass("visible"), (0, l.default)(".nav-submenu-panel").addClass("visible"), r.removeAccount();
                    },
                    removeNavMenu: function () {
                        (0, l.default)(".menu-fold").find(".icon-menu").removeClass("icon-menu-open"), (0, l.default)(".nav").removeClass("visible"), (0, l.default)(".nav-submenu-panel").removeClass("visible");
                    },
                    mobileListener: function () {
                        (0, l.default)(".nav-group").on("click", function () {
                            var e = (0, l.default)(this).parent().find(".nav-submenu"),
                                t = (0, l.default)(this).find(".icon");
                            (0, l.default)(e).hasClass("visible")
                                ? ((0, l.default)(e).removeClass("visible"), (0, l.default)(t).removeClass("icon-rotate-180"))
                                : ((0, l.default)(e).addClass("visible"),
                                  (0, l.default)(t).addClass("icon-rotate-180"),
                                  l.default.each((0, l.default)(this).parent().find(".nav-submenu").find("img.nav-lazyload"), function (e, t) {
                                      (0, l.default)(t)
                                          .attr("src", (0, l.default)(t).data("src"))
                                          .removeClass("nav-lazyload");
                                  }));
                        }),
                            (0, l.default)(".menu-fold").on("click", function () {
                                (0, l.default)(this).find(".icon-menu").hasClass("icon-menu-open")
                                    ? (r.removeNavMenu(), (0, l.default)("#search-bar").hide(), (0, l.default)(".hot-search").hide(), a.isMobile && ((document.body.style.overflow = ""), (document.body.style.height = "")))
                                    : (r.showNavMenu(), (0, l.default)("#search-bar").css("display", "flex"), a.isMobile && ((document.body.style.overflow = "hidden"), (document.body.style.height = "100%")));
                            }),
                            (0, l.default)(".submenu-container").on("click", function (e) {
                                e.target.scrollIntoView(!1);
                                var t = (0, l.default)(this).find(".icon").hasClass("icon-rotate-180");
                                (0, l.default)(this).siblings(".submenu-container").find(".icon").removeClass("icon-rotate-180"),
                                    (0, l.default)(this).siblings(".submenu-container").children("ul.secondary-products").removeClass("visible"),
                                    t
                                        ? ((0, l.default)(this).find(".icon").removeClass("icon-rotate-180"), (0, l.default)(this).children("ul.secondary-products").removeClass("visible"))
                                        : ((0, l.default)(this).find(".icon").addClass("icon-rotate-180"), (0, l.default)(this).children("ul.secondary-products").addClass("visible"));
                            }),
                            r.scroll(),
                            (0, l.default)(window).scroll(r.scroll);
                    },
                    pcListener: function () {
                        (0, l.default)(".nav-menu > li > a").on("mouseover", function () {
                            (0, l.default)(this).hasClass("nav-group") ? r.showNavSubMenu(this) : r.removeNavSubMenu();
                        }),
                            r.scroll(),
                            (0, l.default)(window).scroll(r.scroll),
                            (0, l.default)(".nav").on("mouseleave", function () {
                                r.removeNavSubMenu();
                            }),
                            (0, l.default)(".secondary-menu").mouseover(function () {
                                var e = (0, l.default)(this).attr("data-index");
                                (0, l.default)(this).siblings(".secondary-menu").removeClass("active"),
                                    (0, l.default)(this).addClass("active"),
                                    (0, l.default)(this)
                                        .parent()
                                        .siblings(".submenu-container")
                                        .map(function (t, n) {
                                            var r = (0, l.default)(n).attr("data-menu") == e;
                                            (0, l.default)(n).removeClass("visible"), r && (0, l.default)(n).addClass("visible");
                                        });
                            }),
                            (0, l.default)(".header-account-panel").on("mouseleave", function () {
                                r.removeAccount();
                            }),
                            (0, l.default)(".logo").on("mouseover", function () {
                                r.logoAnimate();
                            }),
                            (0, l.default)(".logo").on("mouseleave", function () {
                                r.logoAnimateRemove();
                            });
                    },
                    listen: function () {
                        a.isMobile ? r.mobileListener() : (r.pcListener(), r.horizontalScreenPrompt(), r.orientationchange()),
                            (0, l.default)(".nav-user").on("mouseover, click", function () {
                                (0, l.default)(".header-account").hasClass("visible")
                                    ? (r.removeAccount(), a.isMobile && ((0, l.default)("html,body").css("overflow-y", "auto"), (0, l.default)("html,body").css("height", "")))
                                    : (r.showAcount(), a.isMobile && ((0, l.default)("html,body").css("overflow-y", "hidden"), (0, l.default)("html,body").css("height", "100%")));
                            }),
                            (0, l.default)(".header-account").on("mouseover", function () {
                                r.showAcount(), (0, l.default)("#username").find(".icon").addClass("icon-rotate-180");
                            }),
                            (0, l.default)(".header-plus #username").on("mouseover", function () {
                                r.showAcount(), (0, l.default)(".header-account").addClass("plus-account-list"), (0, l.default)("#username").find(".icon").addClass("icon-rotate-180");
                            }),
                            (0, l.default)(".header-plus #username, .header-account").on("mouseleave", function () {
                                (0, l.default)("#username").find(".icon").removeClass("icon-rotate-180"), r.removeAccount();
                            }),
                            (0, l.default)(".mask").on("click", function () {
                                (0, l.default)(".cookie-manage-container").removeClass("visible"), r.removeAccount(), (0, l.default)(".mask").removeClass("visible");
                            }),
                            (0, l.default)(".header-account").click(function () {
                                r.removeAccount();
                            }),
                            (0, l.default)(".footer-region a").click(function () {
                                (0, l.default)("html,body").css("overflow-y", "hidden"), (0, l.default)(".region-select").addClass("visible");
                            }),
                            (0, l.default)(".region-select-close").click(function () {
                                (0, l.default)("html,body").css("overflow-y", "auto"), (0, l.default)(".region-select").removeClass("visible");
                            }),
                            (0, l.default)(".product-nav .product-nav-btn").click(function () {
                                (0, l.default)("html,body").css("overflow-y", "hidden"), (0, l.default)(".purchase-box").addClass("visible");
                            }),
                            (0, l.default)(".purchase-site-close-icon").click(function () {
                                (0, l.default)("html,body").css("overflow-y", "auto"), (0, l.default)(".purchase-box").removeClass("visible");
                            }),
                            (0, l.default)(".icon-notify-close").click(function (e) {
                                e.preventDefault(), (0, l.default)(".header-notify").css("display", "none"), r.getProductNavTop(), p.default.set("headerNotifyVisible", (0, l.default)(".header-notify").attr("href"), { expires: 1 });
                            }),
                            (0, l.default)(".icon-notify-container").click(function (e) {
                                e.preventDefault(), (0, l.default)(".header-notify").css("display", "none"), r.getProductNavTop(), p.default.set("headerNotifyVisible", (0, l.default)(".header-notify").attr("href"), { expires: 1 });
                            });
                    },
                    init: function () {},
                    horizontalScreenPrompt: function () {
                        (0, l.default)("#horizontal-screen .horizontal-screen-tips").text(t()),
                            window.addEventListener("orientationchange", function () {
                                if (!a.isMobile) {
                                    var e = (0, l.default)(window).width();
                                    (0 === Math.abs(window.orientation) || 180 === Math.abs(window.orientation)) && e < 1200
                                        ? ((0, l.default)("#horizontal-screen").addClass("fiexd"),
                                          (0, l.default)("body").addClass("horizontal-screen-fixed"),
                                          document.documentElement.addEventListener(
                                              "touchstart",
                                              function (e) {
                                                  e.touches.length > 1 && e.preventDefault();
                                              },
                                              { passive: !1 }
                                          ),
                                          document.documentElement.addEventListener(
                                              "touchend",
                                              function (e) {
                                                  var t = Date.now();
                                                  t - lastTouchEnd <= 300 && e.preventDefault(), (lastTouchEnd = t);
                                              },
                                              { passive: !1 }
                                          ))
                                        : ((0, l.default)("#horizontal-screen").removeClass("fiexd"),
                                          (0, l.default)("body").removeClass("horizontal-screen-fixed"),
                                          document.documentElement.removeEventListener("touchstart", function () {}, { passive: !1 }),
                                          document.documentElement.removeEventListener("touchend", function () {}, { passive: !1 })),
                                        (location.href = location.href);
                                }
                            });
                    },
                    orientationchange: function () {
                        if (!a.isMobile) {
                            var e = (0, l.default)(window).width();
                            (0 === Math.abs(window.orientation) || 180 === Math.abs(window.orientation)) && e < 1200
                                ? ((0, l.default)("#horizontal-screen").addClass("fiexd"),
                                  (0, l.default)("body").addClass("horizontal-screen-fixed"),
                                  document.documentElement.addEventListener(
                                      "touchstart",
                                      function (e) {
                                          e.touches.length > 1 && e.preventDefault();
                                      },
                                      { passive: !1 }
                                  ),
                                  document.documentElement.addEventListener(
                                      "touchend",
                                      function (e) {
                                          var t = Date.now();
                                          t - lastTouchEnd <= 300 && e.preventDefault(), (lastTouchEnd = t);
                                      },
                                      { passive: !1 }
                                  ))
                                : ((0, l.default)("#horizontal-screen").removeClass("fiexd"),
                                  (0, l.default)("body").removeClass("horizontal-screen-fixed"),
                                  document.documentElement.removeEventListener("touchstart", function () {}, { passive: !1 }),
                                  document.documentElement.removeEventListener("touchend", function () {}, { passive: !1 }));
                        }
                    },
                },
                o = {
                    showSubMenu: function (e) {
                        (0, l.default)(e).parent().addClass("visible");
                    },
                    removeSubMenu: function (e) {
                        (0, l.default)(e).parent().removeClass("visible");
                    },
                    listen: function () {
                        a.isMobile &&
                            (0, l.default)(".footer-menu-title").click(function () {
                                (0, l.default)(this).parent().hasClass("visible") ? o.removeSubMenu(this) : o.showSubMenu(this);
                            });
                    },
                },
                a = {
                    isMobile: (0, l.default)(window).width() < 769,
                    init: function () {
                        a.listen(), r.init(), a.stopBodyScroll(), a.informationdialog();
                    },
                    stopBodyScroll: function () {
                        (0, l.default)(".mask-untouch").hasClass("fixed")
                            ? ((document.body.style.overflow = "hidden"), (document.body.style.height = "100%"), (document.body.style.top = 0))
                            : ((document.body.style.overflow = ""), (document.body.style.height = ""));
                    },
                    dialogVideoPlay: function (e) {
                        var t =
                            '<div class="dialog-video">\n                      <div class="dialog-video-container">\n                        <a href="javascript:;" class="dialog-video-close" title="Close Video"></a>\n                        <video src="' +
                            e +
                            '" autoplay loop></video>\n                      </div>\n                    </div>';
                        (0, l.default)("body").append(t),
                            (0, l.default)(".dialog-video-container").find("video")[0].play(),
                            (0, l.default)(".dialog-video-close").click(function () {
                                (0, l.default)(".dialog-video").remove();
                            });
                    },
                    getUrl: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = [],
                            n = [],
                            r = {};
                        if ((e && ((t = e.split("?")), (t = t && t[1])), t)) {
                            n = t.split("&");
                            var o = !0,
                                a = !1,
                                s = void 0;
                            try {
                                for (var u, l = (0, i.default)(n); !(o = (u = l.next()).done); o = !0) {
                                    var c = u.value,
                                        f = c.split("=");
                                    r[f[0]] = f[1];
                                }
                            } catch (e) {
                                (a = !0), (s = e);
                            } finally {
                                try {
                                    !o && l.return && l.return();
                                } finally {
                                    if (a) throw s;
                                }
                            }
                        }
                        return r;
                    },
                    informationdialog: function () {
                        a.isMobile
                            ? ((0, l.default)(".informationdialog-icon-play").on("click", function () {
                                  (0, l.default)(".informationdialog").css("display", "flex"), (0, l.default)("html,body").css("overflow-y", "hidden"), (0, l.default)("html,body").css("height", "100%");
                              }),
                              (0, l.default)(".informationdialog").on("click", function (e) {
                                  "informationdialog" === e.target.className &&
                                      ((0, l.default)(".informationdialog").css("display", "none"), (0, l.default)("html,body").css("overflow-y", "auto"), (0, l.default)("html,body").css("height", ""));
                              }))
                            : ((0, l.default)(".informationdialog-icon-play").on("mouseover", function () {
                                  (0, l.default)(".informationdialog").css("display", "block");
                              }),
                              (0, l.default)(".informationdialog").on("mouseleave", function () {
                                  (0, l.default)(".informationdialog").css("display", "none");
                              }));
                    },
                };
            (a.listen = function () {
                r.listen(),
                    o.listen(),
                    (0, l.default)("body").on("click", ".dialog-video-play", function () {
                        var e = (0, l.default)(this).data("video");
                        return e && a.dialogVideoPlay(e), !1;
                    }),
                    (0, l.default)("body").on("click", ".gtag", function () {
                        var e = (0, l.default)(this).data("gtag");
                        if (e && e.split("|").length > 1 && gtag) {
                            var t = e.split("|");
                            gtag("event", t[0] + "_" + t[1], { event_category: t[0] });
                        }
                        var n = (0, l.default)(this).data("gtagads");
                        n && gtag("event", "conversion", { send_to: n, transaction_id: "" });
                    });
                var e = navigator.userAgent.toLowerCase();
                if (
                    ((-1 == e.indexOf("realmeStore") && -1 == e.indexOf("realmestore")) ||
                        ((0, l.default)("body").css({ padding: "0" }),
                        (0, l.default)(".footer").css({ display: "none" }),
                        (0, l.default)(".header").css({ display: "none" }),
                        (0, l.default)(".support-category").length >= 1 &&
                            ((0, l.default)(".user-guid").css({ display: "none" }), (0, l.default)(".service-software-upgrade").css({ display: "none" }), (0, l.default)(".support-contact-email a").attr("href", "javascript:;"))),
                    (0, l.default)(".r-btn--primary"))
                ) {
                    (0, l.default)(".r-btn--primary").on("click", function () {
                        a.setCookie("hadAccept", !0, 365),
                            (0, l.default)(".mask-untouch").removeClass("fixed"),
                            (document.body.style.overflow = ""),
                            (document.body.style.height = ""),
                            (0, l.default)(".r-cookie").css("display", "none"),
                            (0, l.default)(".footer").removeClass("r-cookie-footer");
                    });
                    ((0, l.default)(".r-cookie").css("display", "initial"), (0, l.default)(".footer").addClass("r-cookie-footer"), (0, l.default)(".mask-untouch").addClass("fixed"));
                }
            }),
                a.init(),
                (0, l.default)("#cart").click(function () {
                    (0, l.default)(".header .nav-user span").removeClass("red-point");
                }),
                (window.eventEmmiter = {
                    combineCart: function () {
                        if (!(window.location.pathname.indexOf("/cart") > -1)) {
                            var e = m.default.getJson("realmeCart");
                            if (e && e.length) {
                                var t = { addItems: [] };
                                e.map(function (e) {
                                    t.addItems.push(e.addItem);
                                });
                                var n = { url: "/cart/auto/merge", data: t, type: "post" };
                                (0, h._Http)(n).done(function (e) {
                                    200 === e.code && (m.default.remove("realmeCart"), window.eventEmmiter.addToCart(e.data.cartTotalCount, !0));
                                });
                            } else {
                                var r = { url: "/cart/info" };
                                (0, h._Http)(r).done(function (e) {
                                    200 === e.code && window.eventEmmiter.addToCart(e.data.totalCount);
                                });
                            }
                        }
                    },
                    addToCart: function (e, t) {
                        if (e) {
                            t && (0, l.default)(".header .nav-user span").addClass("red-point");
                            var n = "(" + e + ")";
                            (0, l.default)("#account-cart").text(n), (0, l.default)(".header-cart-count").show().text(e);
                        } else (0, l.default)("#account-cart").text(""), (0, l.default)(".header-cart-count").hide();
                    },
                });
            var A = !1;
            (0, l.default)(".product-btn").click(function () {
                A
                    ? ((A = !1), (0, l.default)(".purchase-site-overlay").hide())
                    : ((0, l.default)("span.pop-ups-lazyload").length >= 1 &&
                          l.default.each((0, l.default)("span.pop-ups-lazyload"), function (e, t) {
                              (0, l.default)(t).replaceWith('<picture class="pop-ups-lazyloaded">' + (0, l.default)(t).html() + "</picture>");
                          }),
                      (A = !0),
                      (0, l.default)(".purchase-site-overlay").css("display", "flex"));
            }),
                (0, l.default)(".purchase-site-close-icon").click(function () {
                    (A = !1), (0, l.default)(".purchase-site-overlay").hide();
                });
            (0, l.default)(".open-app").click(function () {
                e();
            }),
                (0, l.default)(".close-icon--app").click(function () {
                    n(), r.getProductNavTop();
                });
            if (window.innerWidth < 769) {
                var T = window.location.pathname.split("/")[2];
                if (window.location.hostname.indexOf("buy") > -1 && "cart" !== T && "channel-aiot" !== T) return void (0, l.default)(".app-tabs").hide();
                (0, l.default)(".app-tab.active").removeClass("active").find(".icon").removeClass("active"),
                    "mine" === T
                        ? (0, l.default)(".app-tab.app-me").addClass("active").find(".icon").addClass("active")
                        : "cart" === T
                        ? (0, l.default)(".app-tab.app-cart").addClass("active").find(".icon").addClass("active")
                        : "realme-phones" === T
                        ? (0, l.default)(".app-tab.app-categories").addClass("active").find(".icon").addClass("active")
                        : (T && "home" !== T && "channel-aiot" !== T) || (0, l.default)(".app-tab.app-home").addClass("active").find(".icon").addClass("active");
            }
            var k = (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = [],
                        n = [],
                        r = {};
                    if ((e && ((t = e.split("?")), (t = t && t[1])), t)) {
                        n = t.split("&");
                        var o = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var u, l = (0, i.default)(n); !(o = (u = l.next()).done); o = !0) {
                                var c = u.value,
                                    f = c.split("=");
                                r[f[0]] = f[1];
                            }
                        } catch (e) {
                            (a = !0), (s = e);
                        } finally {
                            try {
                                !o && l.return && l.return();
                            } finally {
                                if (a) throw s;
                            }
                        }
                    }
                    return r;
                })(window.location.href),
                S = k.inviteId;
            S &&
                (console.log((0, l.default)("a")),
                (0, l.default)("body a").each(function () {
                    var e = (0, l.default)(this)[0].href;
                    e && (e.indexOf("myoas.net") > -1 || e.indexOf("realme.com")) && ((e += "?inviteId=" + S), ((0, l.default)(this)[0].href = e));
                }));
        });
    },
    function (e, t, n) {
        e.exports = { default: n(2), __esModule: !0 };
    },
    function (e, t, n) {
        n(3), n(49), (e.exports = n(51));
    },
    function (e, t, n) {
        n(4);
        for (
            var r = n(15),
                o = n(19),
                i = n(7),
                a = n(46)("toStringTag"),
                s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                    ","
                ),
                u = 0;
            u < s.length;
            u++
        ) {
            var l = s[u],
                c = r[l],
                f = c && c.prototype;
            f && !f[a] && o(f, a, l), (i[l] = i.Array);
        }
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            o = n(6),
            i = n(7),
            a = n(8);
        (e.exports = n(12)(
            Array,
            "Array",
            function (e, t) {
                (this._t = a(e)), (this._i = 0), (this._k = t);
            },
            function () {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? ((this._t = void 0), o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]]);
            },
            "values"
        )),
            (i.Arguments = i.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    function (e, t) {
        e.exports = function () {};
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { value: t, done: !!e };
        };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t, n) {
        var r = n(9),
            o = n(11);
        e.exports = function (e) {
            return r(o(e));
        };
    },
    function (e, t, n) {
        var r = n(10);
        e.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return "String" == r(e) ? e.split("") : Object(e);
              };
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(13),
            o = n(14),
            i = n(30),
            a = n(19),
            s = n(7),
            u = n(31),
            l = n(45),
            c = n(47),
            f = n(46)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function () {
                return this;
            };
        e.exports = function (e, t, n, h, v, m, g) {
            u(n, t, h);
            var y,
                b,
                x,
                w = function (e) {
                    if (!d && e in k) return k[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this, e);
                    };
                },
                C = t + " Iterator",
                A = "values" == v,
                T = !1,
                k = e.prototype,
                S = k[f] || k["@@iterator"] || (v && k[v]),
                E = S || w(v),
                j = v ? (A ? w("entries") : E) : void 0,
                L = "Array" == t ? k.entries || S : S;
            if (
                (L && (x = c(L.call(new e()))) !== Object.prototype && x.next && (l(x, C, !0), r || "function" == typeof x[f] || a(x, f, p)),
                A &&
                    S &&
                    "values" !== S.name &&
                    ((T = !0),
                    (E = function () {
                        return S.call(this);
                    })),
                (r && !g) || (!d && !T && k[f]) || a(k, f, E),
                (s[t] = E),
                (s[C] = p),
                v)
            )
                if (((y = { values: A ? E : w("values"), keys: m ? E : w("keys"), entries: j }), g)) for (b in y) b in k || i(k, b, y[b]);
                else o(o.P + o.F * (d || T), t, y);
            return y;
        };
    },
    function (e, t) {
        e.exports = !0;
    },
    function (e, t, n) {
        var r = n(15),
            o = n(16),
            i = n(17),
            a = n(19),
            s = n(29),
            u = function (e, t, n) {
                var l,
                    c,
                    f,
                    d = e & u.F,
                    p = e & u.G,
                    h = e & u.S,
                    v = e & u.P,
                    m = e & u.B,
                    g = e & u.W,
                    y = p ? o : o[t] || (o[t] = {}),
                    b = y.prototype,
                    x = p ? r : h ? r[t] : (r[t] || {}).prototype;
                p && (n = t);
                for (l in n)
                    ((c = !d && x && void 0 !== x[l]) && s(y, l)) ||
                        ((f = c ? x[l] : n[l]),
                        (y[l] =
                            p && "function" != typeof x[l]
                                ? n[l]
                                : m && c
                                ? i(f, r)
                                : g && x[l] == f
                                ? (function (e) {
                                      var t = function (t, n, r) {
                                          if (this instanceof e) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new e();
                                                  case 1:
                                                      return new e(t);
                                                  case 2:
                                                      return new e(t, n);
                                              }
                                              return new e(t, n, r);
                                          }
                                          return e.apply(this, arguments);
                                      };
                                      return (t.prototype = e.prototype), t;
                                  })(f)
                                : v && "function" == typeof f
                                ? i(Function.call, f)
                                : f),
                        v && (((y.virtual || (y.virtual = {}))[l] = f), e & u.R && b && !b[l] && a(b, l, f)));
            };
        (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (e.exports = u);
    },
    function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (e, t) {
        var n = (e.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
    },
    function (e, t, n) {
        var r = n(18);
        e.exports = function (e, t, n) {
            if ((r(e), void 0 === t)) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    function (e, t, n) {
        var r = n(20),
            o = n(28);
        e.exports = n(24)
            ? function (e, t, n) {
                  return r.f(e, t, o(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var r = n(21),
            o = n(23),
            i = n(27),
            a = Object.defineProperty;
        t.f = n(24)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((r(e), (t = i(t, !0)), r(n), o))
                      try {
                          return a(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t, n) {
        var r = n(22);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t, n) {
        e.exports =
            !n(24) &&
            !n(25)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(26)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        e.exports = !n(25)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t, n) {
        var r = n(22),
            o = n(15).document,
            i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var r = n(22);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
            if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
            if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t, n) {
        e.exports = n(19);
    },
    function (e, t, n) {
        "use strict";
        var r = n(32),
            o = n(28),
            i = n(45),
            a = {};
        n(19)(a, n(46)("iterator"), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator");
            });
    },
    function (e, t, n) {
        var r = n(21),
            o = n(33),
            i = n(43),
            a = n(40)("IE_PROTO"),
            s = function () {},
            u = function () {
                var e,
                    t = n(26)("iframe"),
                    r = i.length;
                for (t.style.display = "none", n(44).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object</script>"), e.close(), u = e.F; r--; ) delete u.prototype[i[r]];
                return u();
            };
        e.exports =
            Object.create ||
            function (e, t) {
                var n;
                return null !== e ? ((s.prototype = r(e)), (n = new s()), (s.prototype = null), (n[a] = e)) : (n = u()), void 0 === t ? n : o(n, t);
            };
    },
    function (e, t, n) {
        var r = n(20),
            o = n(21),
            i = n(34);
        e.exports = n(24)
            ? Object.defineProperties
            : function (e, t) {
                  o(e);
                  for (var n, a = i(t), s = a.length, u = 0; s > u; ) r.f(e, (n = a[u++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var r = n(35),
            o = n(43);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t, n) {
        var r = n(29),
            o = n(8),
            i = n(36)(!1),
            a = n(40)("IE_PROTO");
        e.exports = function (e, t) {
            var n,
                s = o(e),
                u = 0,
                l = [];
            for (n in s) n != a && r(s, n) && l.push(n);
            for (; t.length > u; ) r(s, (n = t[u++])) && (~i(l, n) || l.push(n));
            return l;
        };
    },
    function (e, t, n) {
        var r = n(8),
            o = n(37),
            i = n(39);
        e.exports = function (e) {
            return function (t, n, a) {
                var s,
                    u = r(t),
                    l = o(u.length),
                    c = i(a, l);
                if (e && n != n) {
                    for (; l > c; ) if ((s = u[c++]) != s) return !0;
                } else for (; l > c; c++) if ((e || c in u) && u[c] === n) return e || c || 0;
                return !e && -1;
            };
        };
    },
    function (e, t, n) {
        var r = n(38),
            o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    },
    function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
        };
    },
    function (e, t, n) {
        var r = n(38),
            o = Math.max,
            i = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)), e < 0 ? o(e + t, 0) : i(e, t);
        };
    },
    function (e, t, n) {
        var r = n(41)("keys"),
            o = n(42);
        e.exports = function (e) {
            return r[e] || (r[e] = o(e));
        };
    },
    function (e, t, n) {
        var r = n(16),
            o = n(15),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: r.version, mode: n(13) ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" });
    },
    function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    },
    function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (e, t, n) {
        var r = n(15).document;
        e.exports = r && r.documentElement;
    },
    function (e, t, n) {
        var r = n(20).f,
            o = n(29),
            i = n(46)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
        };
    },
    function (e, t, n) {
        var r = n(41)("wks"),
            o = n(42),
            i = n(15).Symbol,
            a = "function" == typeof i;
        (e.exports = function (e) {
            return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e));
        }).store = r;
    },
    function (e, t, n) {
        var r = n(29),
            o = n(48),
            i = n(40)("IE_PROTO"),
            a = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = o(e)), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
            };
    },
    function (e, t, n) {
        var r = n(11);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(50)(!0);
        n(12)(
            String,
            "String",
            function (e) {
                (this._t = String(e)), (this._i = 0);
            },
            function () {
                var e,
                    t = this._t,
                    n = this._i;
                return n >= t.length ? { value: void 0, done: !0 } : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
            }
        );
    },
    function (e, t, n) {
        var r = n(38),
            o = n(11);
        e.exports = function (e) {
            return function (t, n) {
                var i,
                    a,
                    s = String(o(t)),
                    u = r(n),
                    l = s.length;
                return u < 0 || u >= l
                    ? e
                        ? ""
                        : void 0
                    : ((i = s.charCodeAt(u)), i < 55296 || i > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? (e ? s.charAt(u) : i) : e ? s.slice(u, u + 2) : a - 56320 + ((i - 55296) << 10) + 65536);
            };
        };
    },
    function (e, t, n) {
        var r = n(21),
            o = n(52);
        e.exports = n(16).getIterator = function (e) {
            var t = o(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e));
        };
    },
    function (e, t, n) {
        var r = n(53),
            o = n(46)("iterator"),
            i = n(7);
        e.exports = n(16).getIteratorMethod = function (e) {
            if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)];
        };
    },
    function (e, t, n) {
        var r = n(10),
            o = n(46)("toStringTag"),
            i =
                "Arguments" ==
                r(
                    (function () {
                        return arguments;
                    })()
                ),
            a = function (e, t) {
                try {
                    return e[t];
                } catch (e) {}
            };
        e.exports = function (e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a((t = Object(e)), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s;
        };
    },
    function (e, t, n) {
        e.exports = { default: n(55), __esModule: !0 };
    },
    function (e, t, n) {
        var r = n(16),
            o = r.JSON || (r.JSON = { stringify: JSON.stringify });
        e.exports = function (e) {
            return o.stringify.apply(o, arguments);
        };
    },
    function (e, t, n) {
        var r, o;
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
        })("undefined" != typeof window ? window : this, function (n, i) {
            "use strict";
            function a(e, t, n) {
                n = n || ke;
                var r,
                    o,
                    i = n.createElement("script");
                if (((i.text = e), t)) for (r in Se) (o = t[r] || (t.getAttribute && t.getAttribute(r))) && i.setAttribute(r, o);
                n.head.appendChild(i).parentNode.removeChild(i);
            }
            function s(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ge[ye.call(e)] || "object" : typeof e;
            }
            function u(e) {
                var t = !!e && "length" in e && e.length,
                    n = s(e);
                return !Ae(e) && !Te(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
            }
            function l(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            function c(e, t, n) {
                return Ae(t)
                    ? Ee.grep(e, function (e, r) {
                          return !!t.call(e, r, e) !== n;
                      })
                    : t.nodeType
                    ? Ee.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? Ee.grep(e, function (e) {
                          return me.call(t, e) > -1 !== n;
                      })
                    : Ee.filter(t, e, n);
            }
            function f(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            function d(e) {
                var t = {};
                return (
                    Ee.each(e.match(Re) || [], function (e, n) {
                        t[n] = !0;
                    }),
                    t
                );
            }
            function p(e) {
                return e;
            }
            function h(e) {
                throw e;
            }
            function v(e, t, n, r) {
                var o;
                try {
                    e && Ae((o = e.promise)) ? o.call(e).done(t).fail(n) : e && Ae((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            function m() {
                ke.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), Ee.ready();
            }
            function g(e, t) {
                return t.toUpperCase();
            }
            function y(e) {
                return e.replace(Be, "ms-").replace(Fe, g);
            }
            function b() {
                this.expando = Ee.expando + b.uid++;
            }
            function x(e) {
                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ve.test(e) ? JSON.parse(e) : e));
            }
            function w(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (((r = "data-" + t.replace(Ge, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                        try {
                            n = x(n);
                        } catch (e) {}
                        Ue.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            function C(e, t, n, r) {
                var o,
                    i,
                    a = 20,
                    s = r
                        ? function () {
                              return r.cur();
                          }
                        : function () {
                              return Ee.css(e, t, "");
                          },
                    u = s(),
                    l = (n && n[3]) || (Ee.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (Ee.cssNumber[t] || ("px" !== l && +u)) && Qe.exec(Ee.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--; ) Ee.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0), (c /= i);
                    (c *= 2), Ee.style(e, t, c + l), (n = n || []);
                }
                return n && ((c = +c || +u || 0), (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = o))), o;
            }
            function A(e) {
                var t,
                    n = e.ownerDocument,
                    r = e.nodeName,
                    o = tt[r];
                return o || ((t = n.body.appendChild(n.createElement(r))), (o = Ee.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (tt[r] = o), o);
            }
            function T(e, t) {
                for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                    (r = e[i]),
                        r.style &&
                            ((n = r.style.display),
                            t ? ("none" === n && ((o[i] = $e.get(r, "display") || null), o[i] || (r.style.display = "")), "" === r.style.display && et(r) && (o[i] = A(r))) : "none" !== n && ((o[i] = "none"), $e.set(r, "display", n)));
                for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                return e;
            }
            function k(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && l(e, t)) ? Ee.merge([e], n) : n;
            }
            function S(e, t) {
                for (var n = 0, r = e.length; n < r; n++) $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval"));
            }
            function E(e, t, n, r, o) {
                for (var i, a, u, l, c, f, d = t.createDocumentFragment(), p = [], h = 0, v = e.length; h < v; h++)
                    if ((i = e[h]) || 0 === i)
                        if ("object" === s(i)) Ee.merge(p, i.nodeType ? [i] : i);
                        else if (at.test(i)) {
                            for (a = a || d.appendChild(t.createElement("div")), u = (rt.exec(i) || ["", ""])[1].toLowerCase(), l = it[u] || it._default, a.innerHTML = l[1] + Ee.htmlPrefilter(i) + l[2], f = l[0]; f--; ) a = a.lastChild;
                            Ee.merge(p, a.childNodes), (a = d.firstChild), (a.textContent = "");
                        } else p.push(t.createTextNode(i));
                for (d.textContent = "", h = 0; (i = p[h++]); )
                    if (r && Ee.inArray(i, r) > -1) o && o.push(i);
                    else if (((c = Ke(i)), (a = k(d.appendChild(i), "script")), c && S(a), n)) for (f = 0; (i = a[f++]); ) ot.test(i.type || "") && n.push(i);
                return d;
            }
            function j() {
                return !0;
            }
            function L() {
                return !1;
            }
            function D(e, t) {
                return (e === N()) == ("focus" === t);
            }
            function N() {
                try {
                    return ke.activeElement;
                } catch (e) {}
            }
            function O(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && ((r = r || n), (n = void 0));
                    for (s in t) O(e, s, n, r, t[s], i);
                    return e;
                }
                if ((null == r && null == o ? ((o = n), (r = n = void 0)) : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))), !1 === o)) o = L;
                else if (!o) return e;
                return (
                    1 === i &&
                        ((a = o),
                        (o = function (e) {
                            return Ee().off(e), a.apply(this, arguments);
                        }),
                        (o.guid = a.guid || (a.guid = Ee.guid++))),
                    e.each(function () {
                        Ee.event.add(this, t, o, r, n);
                    })
                );
            }
            function M(e, t, n) {
                if (!n) return void (void 0 === $e.get(e, t) && Ee.event.add(e, t, j));
                $e.set(e, t, !1),
                    Ee.event.add(e, t, {
                        namespace: !1,
                        handler: function (e) {
                            var r,
                                o,
                                i = $e.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (i.length) (Ee.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (((i = pe.call(arguments)), $e.set(this, t, i), (r = n(this, t)), this[t](), (o = $e.get(this, t)), i !== o || r ? $e.set(this, t, !1) : (o = {}), i !== o))
                                    return e.stopImmediatePropagation(), e.preventDefault(), o.value;
                            } else i.length && ($e.set(this, t, { value: Ee.event.trigger(Ee.extend(i[0], Ee.Event.prototype), i.slice(1), this) }), e.stopImmediatePropagation());
                        },
                    });
            }
            function P(e, t) {
                return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ee(e).children("tbody")[0] || e : e;
            }
            function q(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function I(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function R(e, t) {
                var n, r, o, i, a, s, u;
                if (1 === t.nodeType) {
                    if ($e.hasData(e) && ((i = $e.get(e)), (u = i.events))) {
                        $e.remove(t, "handle events");
                        for (o in u) for (n = 0, r = u[o].length; n < r; n++) Ee.event.add(t, o, u[o][n]);
                    }
                    Ue.hasData(e) && ((a = Ue.access(e)), (s = Ee.extend({}, a)), Ue.set(t, s));
                }
            }
            function H(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && nt.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
            }
            function _(e, t, n, r) {
                t = he(t);
                var o,
                    i,
                    s,
                    u,
                    l,
                    c,
                    f = 0,
                    d = e.length,
                    p = d - 1,
                    h = t[0],
                    v = Ae(h);
                if (v || (d > 1 && "string" == typeof h && !Ce.checkClone && ft.test(h)))
                    return e.each(function (o) {
                        var i = e.eq(o);
                        v && (t[0] = h.call(this, o, i.html())), _(i, t, n, r);
                    });
                if (d && ((o = E(t, e[0].ownerDocument, !1, e, r)), (i = o.firstChild), 1 === o.childNodes.length && (o = i), i || r)) {
                    for (s = Ee.map(k(o, "script"), q), u = s.length; f < d; f++) (l = o), f !== p && ((l = Ee.clone(l, !0, !0)), u && Ee.merge(s, k(l, "script"))), n.call(e[f], l, f);
                    if (u)
                        for (c = s[s.length - 1].ownerDocument, Ee.map(s, I), f = 0; f < u; f++)
                            (l = s[f]),
                                ot.test(l.type || "") &&
                                    !$e.access(l, "globalEval") &&
                                    Ee.contains(c, l) &&
                                    (l.src && "module" !== (l.type || "").toLowerCase() ? Ee._evalUrl && !l.noModule && Ee._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : a(l.textContent.replace(dt, ""), l, c));
                }
                return e;
            }
            function z(e, t, n) {
                for (var r, o = t ? Ee.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || Ee.cleanData(k(r)), r.parentNode && (n && Ke(r) && S(k(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            function B(e, t, n) {
                var r,
                    o,
                    i,
                    a,
                    s = e.style;
                return (
                    (n = n || ht(e)),
                    n &&
                        ((a = n.getPropertyValue(t) || n[t]),
                        "" !== a || Ke(e) || (a = Ee.style(e, t)),
                        !Ce.pixelBoxStyles() && pt.test(a) && mt.test(t) && ((r = s.width), (o = s.minWidth), (i = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = o), (s.maxWidth = i))),
                    void 0 !== a ? a + "" : a
                );
            }
            function F(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                    },
                };
            }
            function W(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; ) if ((e = gt[n] + t) in yt) return e;
            }
            function $(e) {
                var t = Ee.cssProps[e] || bt[e];
                return t || (e in yt ? e : (bt[e] = W(e) || e));
            }
            function U(e, t, n) {
                var r = Qe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function V(e, t, n, r, o, i) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (u += Ee.css(e, n + Je[a], !0, o)),
                        r
                            ? ("content" === n && (u -= Ee.css(e, "padding" + Je[a], !0, o)), "margin" !== n && (u -= Ee.css(e, "border" + Je[a] + "Width", !0, o)))
                            : ((u += Ee.css(e, "padding" + Je[a], !0, o)), "padding" !== n ? (u += Ee.css(e, "border" + Je[a] + "Width", !0, o)) : (s += Ee.css(e, "border" + Je[a] + "Width", !0, o)));
                return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - 0.5)) || 0), u;
            }
            function G(e, t, n) {
                var r = ht(e),
                    o = !Ce.boxSizingReliable() || n,
                    i = o && "border-box" === Ee.css(e, "boxSizing", !1, r),
                    a = i,
                    s = B(e, t, r),
                    u = "offset" + t[0].toUpperCase() + t.slice(1);
                if (pt.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (
                    ((!Ce.boxSizingReliable() && i) || (!Ce.reliableTrDimensions() && l(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === Ee.css(e, "display", !1, r))) &&
                        e.getClientRects().length &&
                        ((i = "border-box" === Ee.css(e, "boxSizing", !1, r)), (a = u in e) && (s = e[u])),
                    (s = parseFloat(s) || 0) + V(e, t, n || (i ? "border" : "content"), a, r, s) + "px"
                );
            }
            function X(e, t, n, r, o) {
                return new X.prototype.init(e, t, n, r, o);
            }
            function Q() {
                kt && (!1 === ke.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(Q) : n.setTimeout(Q, Ee.fx.interval), Ee.fx.tick());
            }
            function J() {
                return (
                    n.setTimeout(function () {
                        Tt = void 0;
                    }),
                    (Tt = Date.now())
                );
            }
            function Y(e, t) {
                var n,
                    r = 0,
                    o = { height: e };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) (n = Je[r]), (o["margin" + n] = o["padding" + n] = e);
                return t && (o.opacity = o.width = e), o;
            }
            function K(e, t, n) {
                for (var r, o = (te.tweeners[t] || []).concat(te.tweeners["*"]), i = 0, a = o.length; i < a; i++) if ((r = o[i].call(n, t, e))) return r;
            }
            function Z(e, t, n) {
                var r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    v = e.nodeType && et(e),
                    m = $e.get(e, "fxshow");
                n.queue ||
                    ((a = Ee._queueHooks(e, "fx")),
                    null == a.unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            a.unqueued--, Ee.queue(e, "fx").length || a.empty.fire();
                        });
                    }));
                for (r in t)
                    if (((o = t[r]), St.test(o))) {
                        if ((delete t[r], (i = i || "toggle" === o), o === (v ? "hide" : "show"))) {
                            if ("show" !== o || !m || void 0 === m[r]) continue;
                            v = !0;
                        }
                        p[r] = (m && m[r]) || Ee.style(e, r);
                    }
                if ((u = !Ee.isEmptyObject(t)) || !Ee.isEmptyObject(p)) {
                    f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        (l = m && m.display),
                        null == l && (l = $e.get(e, "display")),
                        (c = Ee.css(e, "display")),
                        "none" === c && (l ? (c = l) : (T([e], !0), (l = e.style.display || l), (c = Ee.css(e, "display")), T([e]))),
                        ("inline" === c || ("inline-block" === c && null != l)) &&
                            "none" === Ee.css(e, "float") &&
                            (u ||
                                (d.done(function () {
                                    h.display = l;
                                }),
                                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                        n.overflow &&
                            ((h.overflow = "hidden"),
                            d.always(function () {
                                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                            })),
                        (u = !1);
                    for (r in p)
                        u ||
                            (m ? "hidden" in m && (v = m.hidden) : (m = $e.access(e, "fxshow", { display: l })),
                            i && (m.hidden = !v),
                            v && T([e], !0),
                            d.done(function () {
                                v || T([e]), $e.remove(e, "fxshow");
                                for (r in p) Ee.style(e, r, p[r]);
                            })),
                            (u = K(v ? m[r] : 0, r, d)),
                            r in m || ((m[r] = u.start), v && ((u.end = u.start), (u.start = 0)));
                }
            }
            function ee(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (((r = y(n)), (o = t[r]), (i = e[n]), Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])), n !== r && ((e[r] = i), delete e[n]), (a = Ee.cssHooks[r]) && "expand" in a)) {
                        (i = a.expand(i)), delete e[r];
                        for (n in i) n in e || ((e[n] = i[n]), (t[n] = o));
                    } else t[r] = o;
            }
            function te(e, t, n) {
                var r,
                    o,
                    i = 0,
                    a = te.prefilters.length,
                    s = Ee.Deferred().always(function () {
                        delete u.elem;
                    }),
                    u = function () {
                        if (o) return !1;
                        for (var t = Tt || J(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(i);
                        return s.notifyWith(e, [l, i, n]), i < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
                    },
                    l = s.promise({
                        elem: e,
                        props: Ee.extend({}, t),
                        opts: Ee.extend(!0, { specialEasing: {}, easing: Ee.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Tt || J(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = Ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r;
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                        },
                    }),
                    c = l.props;
                for (ee(c, l.opts.specialEasing); i < a; i++) if ((r = te.prefilters[i].call(l, e, c, l.opts))) return Ae(r.stop) && (Ee._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return (
                    Ee.map(c, K, l),
                    Ae(l.opts.start) && l.opts.start.call(e, l),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                    Ee.fx.timer(Ee.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
                    l
                );
            }
            function ne(e) {
                return (e.match(Re) || []).join(" ");
            }
            function re(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function oe(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(Re) || [] : [];
            }
            function ie(e, t, n, r) {
                var o;
                if (Array.isArray(t))
                    Ee.each(t, function (t, o) {
                        n || Ht.test(e) ? r(e, o) : ie(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
                    });
                else if (n || "object" !== s(t)) r(e, t);
                else for (o in t) ie(e + "[" + o + "]", t[o], n, r);
            }
            function ae(e) {
                return function (t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var r,
                        o = 0,
                        i = t.toLowerCase().match(Re) || [];
                    if (Ae(n)) for (; (r = i[o++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                };
            }
            function se(e, t, n, r) {
                function o(s) {
                    var u;
                    return (
                        (i[s] = !0),
                        Ee.each(e[s] || [], function (e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || a || i[l] ? (a ? !(u = l) : void 0) : (t.dataTypes.unshift(l), o(l), !1);
                        }),
                        u
                    );
                }
                var i = {},
                    a = e === Jt;
                return o(t.dataTypes[0]) || (!i["*"] && o("*"));
            }
            function ue(e, t) {
                var n,
                    r,
                    o = Ee.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && Ee.extend(!0, e, r), e;
            }
            function le(e, t, n) {
                for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (o in s)
                        if (s[o] && s[o].test(r)) {
                            u.unshift(o);
                            break;
                        }
                if (u[0] in n) i = u[0];
                else {
                    for (o in n) {
                        if (!u[0] || e.converters[o + " " + u[0]]) {
                            i = o;
                            break;
                        }
                        a || (a = o);
                    }
                    i = i || a;
                }
                if (i) return i !== u[0] && u.unshift(i), n[i];
            }
            function ce(e, t, n, r) {
                var o,
                    i,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                for (i = c.shift(); i; )
                    if ((e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = i), (i = c.shift())))
                        if ("*" === i) i = u;
                        else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                                for (o in l)
                                    if (((s = o.split(" ")), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]]))) {
                                        !0 === a ? (a = l[o]) : !0 !== l[o] && ((i = s[0]), c.unshift(s[1]));
                                        break;
                                    }
                            if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else
                                    try {
                                        t = a(t);
                                    } catch (e) {
                                        return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + i };
                                    }
                        }
                return { state: "success", data: t };
            }
            var fe = [],
                de = Object.getPrototypeOf,
                pe = fe.slice,
                he = fe.flat
                    ? function (e) {
                          return fe.flat.call(e);
                      }
                    : function (e) {
                          return fe.concat.apply([], e);
                      },
                ve = fe.push,
                me = fe.indexOf,
                ge = {},
                ye = ge.toString,
                be = ge.hasOwnProperty,
                xe = be.toString,
                we = xe.call(Object),
                Ce = {},
                Ae = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                },
                Te = function (e) {
                    return null != e && e === e.window;
                },
                ke = n.document,
                Se = { type: !0, src: !0, nonce: !0, noModule: !0 },
                Ee = function (e, t) {
                    return new Ee.fn.init(e, t);
                };
            (Ee.fn = Ee.prototype = {
                jquery: "3.5.1",
                constructor: Ee,
                length: 0,
                toArray: function () {
                    return pe.call(this);
                },
                get: function (e) {
                    return null == e ? pe.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = Ee.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return Ee.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        Ee.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(pe.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        Ee.grep(this, function (e, t) {
                            return (t + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        Ee.grep(this, function (e, t) {
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
                sort: fe.sort,
                splice: fe.splice,
            }),
                (Ee.extend = Ee.fn.extend = function () {
                    var e,
                        t,
                        n,
                        r,
                        o,
                        i,
                        a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || Ae(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                (r = e[t]),
                                    "__proto__" !== t &&
                                        a !== r &&
                                        (l && r && (Ee.isPlainObject(r) || (o = Array.isArray(r)))
                                            ? ((n = a[t]), (i = o && !Array.isArray(n) ? [] : o || Ee.isPlainObject(n) ? n : {}), (o = !1), (a[t] = Ee.extend(l, i, r)))
                                            : void 0 !== r && (a[t] = r));
                    return a;
                }),
                Ee.extend({
                    expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== ye.call(e)) && (!(t = de(e)) || ("function" == typeof (n = be.call(t, "constructor") && t.constructor) && xe.call(n) === we));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t, n) {
                        a(e, { nonce: t && t.nonce }, n);
                    },
                    each: function (e, t) {
                        var n,
                            r = 0;
                        if (u(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (u(Object(e)) ? Ee.merge(n, "string" == typeof e ? [e] : e) : ve.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : me.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                        return (e.length = o), e;
                    },
                    grep: function (e, t, n) {
                        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                        return r;
                    },
                    map: function (e, t, n) {
                        var r,
                            o,
                            i = 0,
                            a = [];
                        if (u(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                        else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                        return he(a);
                    },
                    guid: 1,
                    support: Ce,
                }),
                "function" == typeof Symbol && (Ee.fn[Symbol.iterator] = fe[Symbol.iterator]),
                Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    ge["[object " + t + "]"] = t.toLowerCase();
                });
            var je = (function (e) {
                function t(e, t, n, r) {
                    var o,
                        i,
                        a,
                        s,
                        u,
                        c,
                        d,
                        p = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (((n = n || []), "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
                    if (!r && (D(t), (t = t || N), M)) {
                        if (11 !== h && (u = ge.exec(e)))
                            if ((o = u[1])) {
                                if (9 === h) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n;
                                } else if (p && (a = p.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n;
                            } else {
                                if (u[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n;
                            }
                        if (x.qsa && !U[e + " "] && (!P || !P.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                            if (((d = e), (p = t), 1 === h && (le.test(e) || ue.test(e)))) {
                                for (p = (ye.test(e) && l(t.parentNode)) || t, (p === t && x.scope) || ((s = t.getAttribute("id")) ? (s = s.replace(we, Ce)) : t.setAttribute("id", (s = H))), c = T(e), i = c.length; i--; )
                                    c[i] = (s ? "#" + s : ":scope") + " " + f(c[i]);
                                d = c.join(",");
                            }
                            try {
                                return Y.apply(n, p.querySelectorAll(d)), n;
                            } catch (t) {
                                U(e, !0);
                            } finally {
                                s === H && t.removeAttribute("id");
                            }
                        }
                    }
                    return S(e.replace(ae, "$1"), t, n, r);
                }
                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], (e[n + " "] = r);
                    }
                    var t = [];
                    return e;
                }
                function r(e) {
                    return (e[H] = !0), e;
                }
                function o(e) {
                    var t = N.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                }
                function i(e, t) {
                    for (var n = e.split("|"), r = n.length; r--; ) w.attrHandle[n[r]] = t;
                }
                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function s(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && Te(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function u(e) {
                    return r(function (t) {
                        return (
                            (t = +t),
                            r(function (n, r) {
                                for (var o, i = e([], n.length, t), a = i.length; a--; ) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                            })
                        );
                    });
                }
                function l(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                function c() {}
                function f(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r;
                }
                function d(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        a = n && "parentNode" === i,
                        s = B++;
                    return t.first
                        ? function (t, n, o) {
                              for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, o);
                              return !1;
                          }
                        : function (t, n, u) {
                              var l,
                                  c,
                                  f,
                                  d = [z, s];
                              if (u) {
                                  for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                              } else
                                  for (; (t = t[r]); )
                                      if (1 === t.nodeType || a)
                                          if (((f = t[H] || (t[H] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[r] || t;
                                          else {
                                              if ((l = c[i]) && l[0] === z && l[1] === s) return (d[2] = l[2]);
                                              if (((c[i] = d), (d[2] = e(t, n, u)))) return !0;
                                          }
                              return !1;
                          };
                }
                function p(e) {
                    return e.length > 1
                        ? function (t, n, r) {
                              for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function h(e, n, r) {
                    for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
                    return r;
                }
                function v(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
                    return a;
                }
                function m(e, t, n, o, i, a) {
                    return (
                        o && !o[H] && (o = m(o)),
                        i && !i[H] && (i = m(i, a)),
                        r(function (r, a, s, u) {
                            var l,
                                c,
                                f,
                                d = [],
                                p = [],
                                m = a.length,
                                g = r || h(t || "*", s.nodeType ? [s] : s, []),
                                y = !e || (!r && t) ? g : v(g, d, e, s, u),
                                b = n ? (i || (r ? e : m || o) ? [] : a) : y;
                            if ((n && n(y, b, s, u), o)) for (l = v(b, p), o(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                            if (r) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], c = b.length; c--; ) (f = b[c]) && l.push((y[c] = f));
                                        i(null, (b = []), l, u);
                                    }
                                    for (c = b.length; c--; ) (f = b[c]) && (l = i ? Z(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f));
                                }
                            } else (b = v(b === a ? b.splice(m, b.length) : b)), i ? i(null, a, b, u) : Y.apply(a, b);
                        })
                    );
                }
                function g(e) {
                    for (
                        var t,
                            n,
                            r,
                            o = e.length,
                            i = w.relative[e[0].type],
                            a = i || w.relative[" "],
                            s = i ? 1 : 0,
                            u = d(
                                function (e) {
                                    return e === t;
                                },
                                a,
                                !0
                            ),
                            l = d(
                                function (e) {
                                    return Z(t, e) > -1;
                                },
                                a,
                                !0
                            ),
                            c = [
                                function (e, n, r) {
                                    var o = (!i && (r || n !== E)) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                                    return (t = null), o;
                                },
                            ];
                        s < o;
                        s++
                    )
                        if ((n = w.relative[e[s].type])) c = [d(p(c), n)];
                        else {
                            if (((n = w.filter[e[s].type].apply(null, e[s].matches)), n[H])) {
                                for (r = ++s; r < o && !w.relative[e[r].type]; r++);
                                return m(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ae, "$1"), n, s < r && g(e.slice(s, r)), r < o && g((e = e.slice(r))), r < o && f(e));
                            }
                            c.push(n);
                        }
                    return p(c);
                }
                function y(e, n) {
                    var o = n.length > 0,
                        i = e.length > 0,
                        a = function (r, a, s, u, l) {
                            var c,
                                f,
                                d,
                                p = 0,
                                h = "0",
                                m = r && [],
                                g = [],
                                y = E,
                                b = r || (i && w.find.TAG("*", l)),
                                x = (z += null == y ? 1 : Math.random() || 0.1),
                                C = b.length;
                            for (l && (E = a == N || a || l); h !== C && null != (c = b[h]); h++) {
                                if (i && c) {
                                    for (f = 0, a || c.ownerDocument == N || (D(c), (s = !M)); (d = e[f++]); )
                                        if (d(c, a || N, s)) {
                                            u.push(c);
                                            break;
                                        }
                                    l && (z = x);
                                }
                                o && ((c = !d && c) && p--, r && m.push(c));
                            }
                            if (((p += h), o && h !== p)) {
                                for (f = 0; (d = n[f++]); ) d(m, g, a, s);
                                if (r) {
                                    if (p > 0) for (; h--; ) m[h] || g[h] || (g[h] = Q.call(u));
                                    g = v(g);
                                }
                                Y.apply(u, g), l && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                            }
                            return l && ((z = x), (E = y)), m;
                        };
                    return o ? r(a) : a;
                }
                var b,
                    x,
                    w,
                    C,
                    A,
                    T,
                    k,
                    S,
                    E,
                    j,
                    L,
                    D,
                    N,
                    O,
                    M,
                    P,
                    q,
                    I,
                    R,
                    H = "sizzle" + 1 * new Date(),
                    _ = e.document,
                    z = 0,
                    B = 0,
                    F = n(),
                    W = n(),
                    $ = n(),
                    U = n(),
                    V = function (e, t) {
                        return e === t && (L = !0), 0;
                    },
                    G = {}.hasOwnProperty,
                    X = [],
                    Q = X.pop,
                    J = X.push,
                    Y = X.push,
                    K = X.slice,
                    Z = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    te = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
                    oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    ie = new RegExp(te + "+", "g"),
                    ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                    se = new RegExp("^" + te + "*," + te + "*"),
                    ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                    le = new RegExp(te + "|>"),
                    ce = new RegExp(oe),
                    fe = new RegExp("^" + ne + "$"),
                    de = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ee + ")$", "i"),
                        needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    pe = /HTML$/i,
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
                    Ce = function (e, t) {
                        return t ? ("\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                    },
                    Ae = function () {
                        D();
                    },
                    Te = d(
                        function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    Y.apply((X = K.call(_.childNodes)), _.childNodes), X[_.childNodes.length].nodeType;
                } catch (e) {
                    Y = {
                        apply: X.length
                            ? function (e, t) {
                                  J.apply(e, K.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                (x = t.support = {}),
                    (A = t.isXML = function (e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !pe.test(t || (n && n.nodeName) || "HTML");
                    }),
                    (D = t.setDocument = function (e) {
                        var t,
                            n,
                            r = e ? e.ownerDocument || e : _;
                        return r != N && 9 === r.nodeType && r.documentElement
                            ? ((N = r),
                              (O = N.documentElement),
                              (M = !A(N)),
                              _ != N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ae, !1) : n.attachEvent && n.attachEvent("onunload", Ae)),
                              (x.scope = o(function (e) {
                                  return O.appendChild(e).appendChild(N.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                              })),
                              (x.attributes = o(function (e) {
                                  return (e.className = "i"), !e.getAttribute("className");
                              })),
                              (x.getElementsByTagName = o(function (e) {
                                  return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length;
                              })),
                              (x.getElementsByClassName = me.test(N.getElementsByClassName)),
                              (x.getById = o(function (e) {
                                  return (O.appendChild(e).id = H), !N.getElementsByName || !N.getElementsByName(H).length;
                              })),
                              x.getById
                                  ? ((w.filter.ID = function (e) {
                                        var t = e.replace(be, xe);
                                        return function (e) {
                                            return e.getAttribute("id") === t;
                                        };
                                    }),
                                    (w.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && M) {
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
                                        if (void 0 !== t.getElementById && M) {
                                            var n,
                                                r,
                                                o,
                                                i = t.getElementById(e);
                                            if (i) {
                                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                                for (o = t.getElementsByName(e), r = 0; (i = o[r++]); ) if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
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
                                            r = [],
                                            o = 0,
                                            i = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                                            return r;
                                        }
                                        return i;
                                    }),
                              (w.find.CLASS =
                                  x.getElementsByClassName &&
                                  function (e, t) {
                                      if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e);
                                  }),
                              (q = []),
                              (P = []),
                              (x.qsa = me.test(N.querySelectorAll)) &&
                                  (o(function (e) {
                                      var t;
                                      (O.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + te + "*(?:''|\"\")"),
                                          e.querySelectorAll("[selected]").length || P.push("\\[" + te + "*(?:value|" + ee + ")"),
                                          e.querySelectorAll("[id~=" + H + "-]").length || P.push("~="),
                                          (t = N.createElement("input")),
                                          t.setAttribute("name", ""),
                                          e.appendChild(t),
                                          e.querySelectorAll("[name='']").length || P.push("\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"),
                                          e.querySelectorAll(":checked").length || P.push(":checked"),
                                          e.querySelectorAll("a#" + H + "+*").length || P.push(".#.+[+~]"),
                                          e.querySelectorAll("\\\f"),
                                          P.push("[\\r\\n\\f]");
                                  }),
                                  o(function (e) {
                                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var t = N.createElement("input");
                                      t.setAttribute("type", "hidden"),
                                          e.appendChild(t).setAttribute("name", "D"),
                                          e.querySelectorAll("[name=d]").length && P.push("name" + te + "*[*^$|!~]?="),
                                          2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                                          (O.appendChild(e).disabled = !0),
                                          2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                                          e.querySelectorAll("*,:x"),
                                          P.push(",.*:");
                                  })),
                              (x.matchesSelector = me.test((I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector))) &&
                                  o(function (e) {
                                      (x.disconnectedMatch = I.call(e, "*")), I.call(e, "[s!='']:x"), q.push("!=", oe);
                                  }),
                              (P = P.length && new RegExp(P.join("|"))),
                              (q = q.length && new RegExp(q.join("|"))),
                              (t = me.test(O.compareDocumentPosition)),
                              (R =
                                  t || me.test(O.contains)
                                      ? function (e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement : e,
                                                r = t && t.parentNode;
                                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                        }
                                      : function (e, t) {
                                            if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                            return !1;
                                        }),
                              (V = t
                                  ? function (e, t) {
                                        if (e === t) return (L = !0), 0;
                                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                        return (
                                            n ||
                                            ((n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                            1 & n || (!x.sortDetached && t.compareDocumentPosition(e) === n)
                                                ? e == N || (e.ownerDocument == _ && R(_, e))
                                                    ? -1
                                                    : t == N || (t.ownerDocument == _ && R(_, t))
                                                    ? 1
                                                    : j
                                                    ? Z(j, e) - Z(j, t)
                                                    : 0
                                                : 4 & n
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (e, t) {
                                        if (e === t) return (L = !0), 0;
                                        var n,
                                            r = 0,
                                            o = e.parentNode,
                                            i = t.parentNode,
                                            s = [e],
                                            u = [t];
                                        if (!o || !i) return e == N ? -1 : t == N ? 1 : o ? -1 : i ? 1 : j ? Z(j, e) - Z(j, t) : 0;
                                        if (o === i) return a(e, t);
                                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                                        for (n = t; (n = n.parentNode); ) u.unshift(n);
                                        for (; s[r] === u[r]; ) r++;
                                        return r ? a(s[r], u[r]) : s[r] == _ ? -1 : u[r] == _ ? 1 : 0;
                                    }),
                              N)
                            : N;
                    }),
                    (t.matches = function (e, n) {
                        return t(e, null, null, n);
                    }),
                    (t.matchesSelector = function (e, n) {
                        if ((D(e), x.matchesSelector && M && !U[n + " "] && (!q || !q.test(n)) && (!P || !P.test(n))))
                            try {
                                var r = I.call(e, n);
                                if (r || x.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                            } catch (e) {
                                U(n, !0);
                            }
                        return t(n, N, null, [e]).length > 0;
                    }),
                    (t.contains = function (e, t) {
                        return (e.ownerDocument || e) != N && D(e), R(e, t);
                    }),
                    (t.attr = function (e, t) {
                        (e.ownerDocument || e) != N && D(e);
                        var n = w.attrHandle[t.toLowerCase()],
                            r = n && G.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                        return void 0 !== r ? r : x.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                    }),
                    (t.escape = function (e) {
                        return (e + "").replace(we, Ce);
                    }),
                    (t.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }),
                    (t.uniqueSort = function (e) {
                        var t,
                            n = [],
                            r = 0,
                            o = 0;
                        if (((L = !x.detectDuplicates), (j = !x.sortStable && e.slice(0)), e.sort(V), L)) {
                            for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                            for (; r--; ) e.splice(n[r], 1);
                        }
                        return (j = null), e;
                    }),
                    (C = t.getText = function (e) {
                        var t,
                            n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                            } else if (3 === o || 4 === o) return e.nodeValue;
                        } else for (; (t = e[r++]); ) n += C(t);
                        return n;
                    }),
                    (w = t.selectors = {
                        cacheLength: 50,
                        createPseudo: r,
                        match: de,
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
                                return de.CHILD.test(e[0])
                                    ? null
                                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
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
                            ATTR: function (e, n, r) {
                                return function (o) {
                                    var i = t.attr(o, e);
                                    return null == i
                                        ? "!=" === n
                                        : !n ||
                                              ((i += ""),
                                              "=" === n
                                                  ? i === r
                                                  : "!=" === n
                                                  ? i !== r
                                                  : "^=" === n
                                                  ? r && 0 === i.indexOf(r)
                                                  : "*=" === n
                                                  ? r && i.indexOf(r) > -1
                                                  : "$=" === n
                                                  ? r && i.slice(-r.length) === r
                                                  : "~=" === n
                                                  ? (" " + i.replace(ie, " ") + " ").indexOf(r) > -1
                                                  : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"));
                                };
                            },
                            CHILD: function (e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o
                                    ? function (e) {
                                          return !!e.parentNode;
                                      }
                                    : function (t, n, u) {
                                          var l,
                                              c,
                                              f,
                                              d,
                                              p,
                                              h,
                                              v = i !== a ? "nextSibling" : "previousSibling",
                                              m = t.parentNode,
                                              g = s && t.nodeName.toLowerCase(),
                                              y = !u && !s,
                                              b = !1;
                                          if (m) {
                                              if (i) {
                                                  for (; v; ) {
                                                      for (d = t; (d = d[v]); ) if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                                      h = v = "only" === e && !h && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                                                  for (
                                                      d = m, f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === z && l[1], b = p && l[2], d = p && m.childNodes[p];
                                                      (d = (++p && d && d[v]) || (b = p = 0) || h.pop());

                                                  )
                                                      if (1 === d.nodeType && ++b && d === t) {
                                                          c[e] = [z, p, b];
                                                          break;
                                                      }
                                              } else if ((y && ((d = t), (f = d[H] || (d[H] = {})), (c = f[d.uniqueID] || (f[d.uniqueID] = {})), (l = c[e] || []), (p = l[0] === z && l[1]), (b = p)), !1 === b))
                                                  for (
                                                      ;
                                                      (d = (++p && d && d[v]) || (b = p = 0) || h.pop()) &&
                                                      ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && ((f = d[H] || (d[H] = {})), (c = f[d.uniqueID] || (f[d.uniqueID] = {})), (c[e] = [z, b])), d !== t));

                                                  );
                                              return (b -= o) === r || (b % r == 0 && b / r >= 0);
                                          }
                                      };
                            },
                            PSEUDO: function (e, n) {
                                var o,
                                    i = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return i[H]
                                    ? i(n)
                                    : i.length > 1
                                    ? ((o = [e, e, "", n]),
                                      w.setFilters.hasOwnProperty(e.toLowerCase())
                                          ? r(function (e, t) {
                                                for (var r, o = i(e, n), a = o.length; a--; ) (r = Z(e, o[a])), (e[r] = !(t[r] = o[a]));
                                            })
                                          : function (e) {
                                                return i(e, 0, o);
                                            })
                                    : i;
                            },
                        },
                        pseudos: {
                            not: r(function (e) {
                                var t = [],
                                    n = [],
                                    o = k(e.replace(ae, "$1"));
                                return o[H]
                                    ? r(function (e, t, n, r) {
                                          for (var i, a = o(e, null, r, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                                      })
                                    : function (e, r, i) {
                                          return (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop();
                                      };
                            }),
                            has: r(function (e) {
                                return function (n) {
                                    return t(e, n).length > 0;
                                };
                            }),
                            contains: r(function (e) {
                                return (
                                    (e = e.replace(be, xe)),
                                    function (t) {
                                        return (t.textContent || C(t)).indexOf(e) > -1;
                                    }
                                );
                            }),
                            lang: r(function (e) {
                                return (
                                    fe.test(e || "") || t.error("unsupported lang: " + e),
                                    (e = e.replace(be, xe).toLowerCase()),
                                    function (t) {
                                        var n;
                                        do {
                                            if ((n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
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
                                return e === O;
                            },
                            focus: function (e) {
                                return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: s(!1),
                            disabled: s(!0),
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
                            first: u(function () {
                                return [0];
                            }),
                            last: u(function (e, t) {
                                return [t - 1];
                            }),
                            eq: u(function (e, t, n) {
                                return [n < 0 ? n + t : n];
                            }),
                            even: u(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            odd: u(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            lt: u(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                return e;
                            }),
                            gt: u(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
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
                    (T = t.tokenize = function (e, n) {
                        var r,
                            o,
                            i,
                            a,
                            s,
                            u,
                            l,
                            c = W[e + " "];
                        if (c) return n ? 0 : c.slice(0);
                        for (s = e, u = [], l = w.preFilter; s; ) {
                            (r && !(o = se.exec(s))) || (o && (s = s.slice(o[0].length) || s), u.push((i = []))), (r = !1), (o = ue.exec(s)) && ((r = o.shift()), i.push({ value: r, type: o[0].replace(ae, " ") }), (s = s.slice(r.length)));
                            for (a in w.filter) !(o = de[a].exec(s)) || (l[a] && !(o = l[a](o))) || ((r = o.shift()), i.push({ value: r, type: a, matches: o }), (s = s.slice(r.length)));
                            if (!r) break;
                        }
                        return n ? s.length : s ? t.error(e) : W(e, u).slice(0);
                    }),
                    (k = t.compile = function (e, t) {
                        var n,
                            r = [],
                            o = [],
                            i = $[e + " "];
                        if (!i) {
                            for (t || (t = T(e)), n = t.length; n--; ) (i = g(t[n])), i[H] ? r.push(i) : o.push(i);
                            (i = $(e, y(o, r))), (i.selector = e);
                        }
                        return i;
                    }),
                    (S = t.select = function (e, t, n, r) {
                        var o,
                            i,
                            a,
                            s,
                            u,
                            c = "function" == typeof e && e,
                            d = !r && T((e = c.selector || e));
                        if (((n = n || []), 1 === d.length)) {
                            if (((i = d[0] = d[0].slice(0)), i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && M && w.relative[i[1].type])) {
                                if (!(t = (w.find.ID(a.matches[0].replace(be, xe), t) || [])[0])) return n;
                                c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                            }
                            for (o = de.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !w.relative[(s = a.type)]); )
                                if ((u = w.find[s]) && (r = u(a.matches[0].replace(be, xe), (ye.test(i[0].type) && l(t.parentNode)) || t))) {
                                    if ((i.splice(o, 1), !(e = r.length && f(i)))) return Y.apply(n, r), n;
                                    break;
                                }
                        }
                        return (c || k(e, d))(r, t, !M, n, !t || (ye.test(e) && l(t.parentNode)) || t), n;
                    }),
                    (x.sortStable = H.split("").sort(V).join("") === H),
                    (x.detectDuplicates = !!L),
                    D(),
                    (x.sortDetached = o(function (e) {
                        return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
                    })),
                    o(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        i("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (x.attributes &&
                        o(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        i("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    o(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        i(ee, function (e, t, n) {
                            var r;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                        }),
                    t
                );
            })(n);
            (Ee.find = je),
                (Ee.expr = je.selectors),
                (Ee.expr[":"] = Ee.expr.pseudos),
                (Ee.uniqueSort = Ee.unique = je.uniqueSort),
                (Ee.text = je.getText),
                (Ee.isXMLDoc = je.isXML),
                (Ee.contains = je.contains),
                (Ee.escapeSelector = je.escape);
            var Le = function (e, t, n) {
                    for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (o && Ee(e).is(n)) break;
                            r.push(e);
                        }
                    return r;
                },
                De = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                Ne = Ee.expr.match.needsContext,
                Oe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            (Ee.filter = function (e, t, n) {
                var r = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType
                        ? Ee.find.matchesSelector(r, e)
                            ? [r]
                            : []
                        : Ee.find.matches(
                              e,
                              Ee.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                Ee.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            r = this.length,
                            o = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                Ee(e).filter(function () {
                                    for (t = 0; t < r; t++) if (Ee.contains(o[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < r; t++) Ee.find(e, o[t], n);
                        return r > 1 ? Ee.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(c(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(c(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!c(this, "string" == typeof e && Ne.test(e) ? Ee(e) : e || [], !1).length;
                    },
                });
            var Me,
                Pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((Ee.fn.init = function (e, t, n) {
                var r, o;
                if (!e) return this;
                if (((n = n || Me), "string" == typeof e)) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Pe.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (((t = t instanceof Ee ? t[0] : t), Ee.merge(this, Ee.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ke, !0)), Oe.test(r[1]) && Ee.isPlainObject(t)))
                            for (r in t) Ae(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this;
                    }
                    return (o = ke.getElementById(r[2])), o && ((this[0] = o), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : Ae(e) ? (void 0 !== n.ready ? n.ready(e) : e(Ee)) : Ee.makeArray(e, this);
            }).prototype = Ee.fn),
                (Me = Ee(ke));
            var qe = /^(?:parents|prev(?:Until|All))/,
                Ie = { children: !0, contents: !0, next: !0, prev: !0 };
            Ee.fn.extend({
                has: function (e) {
                    var t = Ee(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (Ee.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        r = 0,
                        o = this.length,
                        i = [],
                        a = "string" != typeof e && Ee(e);
                    if (!Ne.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break;
                                }
                    return this.pushStack(i.length > 1 ? Ee.uniqueSort(i) : i);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? me.call(Ee(e), this[0]) : me.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                Ee.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return Le(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return Le(e, "parentNode", n);
                        },
                        next: function (e) {
                            return f(e, "nextSibling");
                        },
                        prev: function (e) {
                            return f(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return Le(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return Le(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return Le(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return Le(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return De((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return De(e.firstChild);
                        },
                        contents: function (e) {
                            return null != e.contentDocument && de(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e), Ee.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        Ee.fn[e] = function (n, r) {
                            var o = Ee.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Ee.filter(r, o)), this.length > 1 && (Ie[e] || Ee.uniqueSort(o), qe.test(e) && o.reverse()), this.pushStack(o);
                        };
                    }
                );
            var Re = /[^\x20\t\r\n\f]+/g;
            (Ee.Callbacks = function (e) {
                e = "string" == typeof e ? d(e) : Ee.extend({}, e);
                var t,
                    n,
                    r,
                    o,
                    i = [],
                    a = [],
                    u = -1,
                    l = function () {
                        for (o = o || e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < i.length; ) !1 === i[u].apply(n[0], n[1]) && e.stopOnFalse && ((u = i.length), (n = !1));
                        e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                i &&
                                    (n && !t && ((u = i.length - 1), a.push(n)),
                                    (function t(n) {
                                        Ee.each(n, function (n, r) {
                                            Ae(r) ? (e.unique && c.has(r)) || i.push(r) : r && r.length && "string" !== s(r) && t(r);
                                        });
                                    })(arguments),
                                    n && !t && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                Ee.each(arguments, function (e, t) {
                                    for (var n; (n = Ee.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= u && u--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? Ee.inArray(e, i) > -1 : i.length > 0;
                        },
                        empty: function () {
                            return i && (i = []), this;
                        },
                        disable: function () {
                            return (o = a = []), (i = n = ""), this;
                        },
                        disabled: function () {
                            return !i;
                        },
                        lock: function () {
                            return (o = a = []), n || t || (i = n = ""), this;
                        },
                        locked: function () {
                            return !!o;
                        },
                        fireWith: function (e, n) {
                            return o || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), a.push(n), t || l()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!r;
                        },
                    };
                return c;
            }),
                Ee.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", Ee.Callbacks("memory"), Ee.Callbacks("memory"), 2],
                                ["resolve", "done", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 1, "rejected"],
                            ],
                            r = "pending",
                            o = {
                                state: function () {
                                    return r;
                                },
                                always: function () {
                                    return i.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return o.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return Ee.Deferred(function (n) {
                                        Ee.each(t, function (t, r) {
                                            var o = Ae(e[r[4]]) && e[r[4]];
                                            i[r[1]](function () {
                                                var e = o && o.apply(this, arguments);
                                                e && Ae(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    }).promise();
                                },
                                then: function (e, r, o) {
                                    function i(e, t, r, o) {
                                        return function () {
                                            var s = this,
                                                u = arguments,
                                                l = function () {
                                                    var n, l;
                                                    if (!(e < a)) {
                                                        if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        (l = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            Ae(l)
                                                                ? o
                                                                    ? l.call(n, i(a, t, p, o), i(a, t, h, o))
                                                                    : (a++, l.call(n, i(a, t, p, o), i(a, t, h, o), i(a, t, p, t.notifyWith)))
                                                                : (r !== p && ((s = void 0), (u = [n])), (o || t.resolveWith)(s, u));
                                                    }
                                                },
                                                c = o
                                                    ? l
                                                    : function () {
                                                          try {
                                                              l();
                                                          } catch (n) {
                                                              Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= a && (r !== h && ((s = void 0), (u = [n])), t.rejectWith(s, u));
                                                          }
                                                      };
                                            e ? c() : (Ee.Deferred.getStackHook && (c.stackTrace = Ee.Deferred.getStackHook()), n.setTimeout(c));
                                        };
                                    }
                                    var a = 0;
                                    return Ee.Deferred(function (n) {
                                        t[0][3].add(i(0, n, Ae(o) ? o : p, n.notifyWith)), t[1][3].add(i(0, n, Ae(e) ? e : p)), t[2][3].add(i(0, n, Ae(r) ? r : h));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? Ee.extend(e, o) : o;
                                },
                            },
                            i = {};
                        return (
                            Ee.each(t, function (e, n) {
                                var a = n[2],
                                    s = n[5];
                                (o[n[1]] = a.add),
                                    s &&
                                        a.add(
                                            function () {
                                                r = s;
                                            },
                                            t[3 - e][2].disable,
                                            t[3 - e][3].disable,
                                            t[0][2].lock,
                                            t[0][3].lock
                                        ),
                                    a.add(n[3].fire),
                                    (i[n[0]] = function () {
                                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
                                    }),
                                    (i[n[0] + "With"] = a.fireWith);
                            }),
                            o.promise(i),
                            e && e.call(i, i),
                            i
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            o = pe.call(arguments),
                            i = Ee.Deferred(),
                            a = function (e) {
                                return function (n) {
                                    (r[e] = this), (o[e] = arguments.length > 1 ? pe.call(arguments) : n), --t || i.resolveWith(r, o);
                                };
                            };
                        if (t <= 1 && (v(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || Ae(o[n] && o[n].then))) return i.then();
                        for (; n--; ) v(o[n], a(n), i.reject);
                        return i.promise();
                    },
                });
            var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (Ee.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && He.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (Ee.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
            var _e = Ee.Deferred();
            (Ee.fn.ready = function (e) {
                return (
                    _e.then(e).catch(function (e) {
                        Ee.readyException(e);
                    }),
                    this
                );
            }),
                Ee.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --Ee.readyWait : Ee.isReady) || ((Ee.isReady = !0), (!0 !== e && --Ee.readyWait > 0) || _e.resolveWith(ke, [Ee]));
                    },
                }),
                (Ee.ready.then = _e.then),
                "complete" === ke.readyState || ("loading" !== ke.readyState && !ke.documentElement.doScroll) ? n.setTimeout(Ee.ready) : (ke.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
            var ze = function (e, t, n, r, o, i, a) {
                    var u = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === s(n)) {
                        o = !0;
                        for (u in n) ze(e, t, u, n[u], !0, i, a);
                    } else if (
                        void 0 !== r &&
                        ((o = !0),
                        Ae(r) || (a = !0),
                        c &&
                            (a
                                ? (t.call(e, r), (t = null))
                                : ((c = t),
                                  (t = function (e, t, n) {
                                      return c.call(Ee(e), n);
                                  }))),
                        t)
                    )
                        for (; u < l; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
                    return o ? e : c ? t.call(e) : l ? t(e[0], n) : i;
                },
                Be = /^-ms-/,
                Fe = /-([a-z])/g,
                We = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
            (b.uid = 1),
                (b.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), We(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var r,
                            o = this.cache(e);
                        if ("string" == typeof t) o[y(t)] = n;
                        else for (r in t) o[y(r)] = t[r];
                        return o;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][y(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                Array.isArray(t) ? (t = t.map(y)) : ((t = y(t)), (t = t in r ? [t] : t.match(Re) || [])), (n = t.length);
                                for (; n--; ) delete r[t[n]];
                            }
                            (void 0 === t || Ee.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !Ee.isEmptyObject(t);
                    },
                });
            var $e = new b(),
                Ue = new b(),
                Ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ge = /[A-Z]/g;
            Ee.extend({
                hasData: function (e) {
                    return Ue.hasData(e) || $e.hasData(e);
                },
                data: function (e, t, n) {
                    return Ue.access(e, t, n);
                },
                removeData: function (e, t) {
                    Ue.remove(e, t);
                },
                _data: function (e, t, n) {
                    return $e.access(e, t, n);
                },
                _removeData: function (e, t) {
                    $e.remove(e, t);
                },
            }),
                Ee.fn.extend({
                    data: function (e, t) {
                        var n,
                            r,
                            o,
                            i = this[0],
                            a = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && ((o = Ue.get(i)), 1 === i.nodeType && !$e.get(i, "hasDataAttrs"))) {
                                for (n = a.length; n--; ) a[n] && ((r = a[n].name), 0 === r.indexOf("data-") && ((r = y(r.slice(5))), w(i, r, o[r])));
                                $e.set(i, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof e
                            ? this.each(function () {
                                  Ue.set(this, e);
                              })
                            : ze(
                                  this,
                                  function (t) {
                                      var n;
                                      if (i && void 0 === t) {
                                          if (void 0 !== (n = Ue.get(i, e))) return n;
                                          if (void 0 !== (n = w(i, e))) return n;
                                      } else
                                          this.each(function () {
                                              Ue.set(this, e, t);
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
                            Ue.remove(this, e);
                        });
                    },
                }),
                Ee.extend({
                    queue: function (e, t, n) {
                        var r;
                        if (e) return (t = (t || "fx") + "queue"), (r = $e.get(e, t)), n && (!r || Array.isArray(n) ? (r = $e.access(e, t, Ee.makeArray(n))) : r.push(n)), r || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = Ee.queue(e, t),
                            r = n.length,
                            o = n.shift(),
                            i = Ee._queueHooks(e, t),
                            a = function () {
                                Ee.dequeue(e, t);
                            };
                        "inprogress" === o && ((o = n.shift()), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            $e.get(e, n) ||
                            $e.access(e, n, {
                                empty: Ee.Callbacks("once memory").add(function () {
                                    $e.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                Ee.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? Ee.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = Ee.queue(this, e, t);
                                      Ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            Ee.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            r = 1,
                            o = Ee.Deferred(),
                            i = this,
                            a = this.length,
                            s = function () {
                                --r || o.resolveWith(i, [i]);
                            };
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = $e.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), o.promise(t);
                    },
                });
            var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Qe = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
                Je = ["Top", "Right", "Bottom", "Left"],
                Ye = ke.documentElement,
                Ke = function (e) {
                    return Ee.contains(e.ownerDocument, e);
                },
                Ze = { composed: !0 };
            Ye.getRootNode &&
                (Ke = function (e) {
                    return Ee.contains(e.ownerDocument, e) || e.getRootNode(Ze) === e.ownerDocument;
                });
            var et = function (e, t) {
                    return (e = t || e), "none" === e.style.display || ("" === e.style.display && Ke(e) && "none" === Ee.css(e, "display"));
                },
                tt = {};
            Ee.fn.extend({
                show: function () {
                    return T(this, !0);
                },
                hide: function () {
                    return T(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              et(this) ? Ee(this).show() : Ee(this).hide();
                          });
                },
            });
            var nt = /^(?:checkbox|radio)$/i,
                rt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ot = /^$|^module$|\/(?:java|ecma)script/i;
            !(function () {
                var e = ke.createDocumentFragment(),
                    t = e.appendChild(ke.createElement("div")),
                    n = ke.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    (Ce.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (t.innerHTML = "<textarea>x</textarea>"),
                    (Ce.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
                    (t.innerHTML = "<option></option>"),
                    (Ce.option = !!t.lastChild);
            })();
            var it = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            (it.tbody = it.tfoot = it.colgroup = it.caption = it.thead), (it.th = it.td), Ce.option || (it.optgroup = it.option = [1, "<select multiple='multiple'>", "</select>"]);
            var at = /<|&#?\w+;/,
                st = /^key/,
                ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                lt = /^([^.]*)(?:\.(.+)|)/;
            (Ee.event = {
                global: {},
                add: function (e, t, n, r, o) {
                    var i,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        v,
                        m = $e.get(e);
                    if (We(e))
                        for (
                            n.handler && ((i = n), (n = i.handler), (o = i.selector)),
                                o && Ee.find.matchesSelector(Ye, o),
                                n.guid || (n.guid = Ee.guid++),
                                (u = m.events) || (u = m.events = Object.create(null)),
                                (a = m.handle) ||
                                    (a = m.handle = function (t) {
                                        return void 0 !== Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                t = (t || "").match(Re) || [""],
                                l = t.length;
                            l--;

                        )
                            (s = lt.exec(t[l]) || []),
                                (p = v = s[1]),
                                (h = (s[2] || "").split(".").sort()),
                                p &&
                                    ((f = Ee.event.special[p] || {}),
                                    (p = (o ? f.delegateType : f.bindType) || p),
                                    (f = Ee.event.special[p] || {}),
                                    (c = Ee.extend({ type: p, origType: v, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && Ee.expr.match.needsContext.test(o), namespace: h.join(".") }, i)),
                                    (d = u[p]) || ((d = u[p] = []), (d.delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
                                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                    o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                    (Ee.event.global[p] = !0));
                },
                remove: function (e, t, n, r, o) {
                    var i,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        v,
                        m = $e.hasData(e) && $e.get(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match(Re) || [""], l = t.length; l--; )
                            if (((s = lt.exec(t[l]) || []), (p = v = s[1]), (h = (s[2] || "").split(".").sort()), p)) {
                                for (f = Ee.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--; )
                                    (c = d[i]),
                                        (!o && v !== c.origType) ||
                                            (n && n.guid !== c.guid) ||
                                            (s && !s.test(c.namespace)) ||
                                            (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                            (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) || Ee.removeEvent(e, p, m.handle), delete u[p]);
                            } else for (p in u) Ee.event.remove(e, p + t[l], n, r, !0);
                        Ee.isEmptyObject(u) && $e.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        s = new Array(arguments.length),
                        u = Ee.event.fix(e),
                        l = ($e.get(this, "events") || Object.create(null))[u.type] || [],
                        c = Ee.event.special[u.type] || {};
                    for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                        for (a = Ee.event.handlers.call(this, u, l), t = 0; (o = a[t++]) && !u.isPropagationStopped(); )
                            for (u.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                                (u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace)) ||
                                    ((u.handleObj = i), (u.data = i.data), void 0 !== (r = ((Ee.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, u), u.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a,
                        s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (i = [], a = {}, n = 0; n < u; n++) (r = t[n]), (o = r.selector + " "), void 0 === a[o] && (a[o] = r.needsContext ? Ee(o, this).index(l) > -1 : Ee.find(o, this, null, [l]).length), a[o] && i.push(r);
                                i.length && s.push({ elem: l, handlers: i });
                            }
                    return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
                },
                addProp: function (e, t) {
                    Object.defineProperty(Ee.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: Ae(t)
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
                    return e[Ee.expando] ? e : new Ee.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return nt.test(t.type) && t.click && l(t, "input") && M(t, "click", j), !1;
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return nt.test(t.type) && t.click && l(t, "input") && M(t, "click"), !0;
                        },
                        _default: function (e) {
                            var t = e.target;
                            return (nt.test(t.type) && t.click && l(t, "input") && $e.get(t, "click")) || l(t, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (Ee.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (Ee.Event = function (e, t) {
                    if (!(this instanceof Ee.Event)) return new Ee.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? j : L),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && Ee.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[Ee.expando] = !0);
                }),
                (Ee.Event.prototype = {
                    constructor: Ee.Event,
                    isDefaultPrevented: L,
                    isPropagationStopped: L,
                    isImmediatePropagationStopped: L,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = j), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = j), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = j), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                Ee.each(
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
                            return null == e.which && st.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ut.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    Ee.event.addProp
                ),
                Ee.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    Ee.event.special[e] = {
                        setup: function () {
                            return M(this, e, D), !1;
                        },
                        trigger: function () {
                            return M(this, e), !0;
                        },
                        delegateType: t,
                    };
                }),
                Ee.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    Ee.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                r = this,
                                o = e.relatedTarget,
                                i = e.handleObj;
                            return (o && (o === r || Ee.contains(r, o))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                Ee.fn.extend({
                    on: function (e, t, n, r) {
                        return O(this, e, t, n, r);
                    },
                    one: function (e, t, n, r) {
                        return O(this, e, t, n, r, 1);
                    },
                    off: function (e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), Ee(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = L),
                            this.each(function () {
                                Ee.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var ct = /<script|<style|<link/i,
                ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
                dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            Ee.extend({
                htmlPrefilter: function (e) {
                    return e;
                },
                clone: function (e, t, n) {
                    var r,
                        o,
                        i,
                        a,
                        s = e.cloneNode(!0),
                        u = Ke(e);
                    if (!(Ce.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || Ee.isXMLDoc(e))) for (a = k(s), i = k(e), r = 0, o = i.length; r < o; r++) H(i[r], a[r]);
                    if (t)
                        if (n) for (i = i || k(e), a = a || k(s), r = 0, o = i.length; r < o; r++) R(i[r], a[r]);
                        else R(e, s);
                    return (a = k(s, "script")), a.length > 0 && S(a, !u && k(e, "script")), s;
                },
                cleanData: function (e) {
                    for (var t, n, r, o = Ee.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (We(n)) {
                            if ((t = n[$e.expando])) {
                                if (t.events) for (r in t.events) o[r] ? Ee.event.remove(n, r) : Ee.removeEvent(n, r, t.handle);
                                n[$e.expando] = void 0;
                            }
                            n[Ue.expando] && (n[Ue.expando] = void 0);
                        }
                },
            }),
                Ee.fn.extend({
                    detach: function (e) {
                        return z(this, e, !0);
                    },
                    remove: function (e) {
                        return z(this, e);
                    },
                    text: function (e) {
                        return ze(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? Ee.text(this)
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
                        return _(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                P(this, e).appendChild(e);
                            }
                        });
                    },
                    prepend: function () {
                        return _(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = P(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return _(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return _(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ee.cleanData(k(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return Ee.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return ze(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !ct.test(e) && !it[(rt.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = Ee.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) (t = this[n] || {}), 1 === t.nodeType && (Ee.cleanData(k(t, !1)), (t.innerHTML = e));
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
                        return _(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                Ee.inArray(this, e) < 0 && (Ee.cleanData(k(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                Ee.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    Ee.fn[e] = function (e) {
                        for (var n, r = [], o = Ee(e), i = o.length - 1, a = 0; a <= i; a++) (n = a === i ? this : this.clone(!0)), Ee(o[a])[t](n), ve.apply(r, n.get());
                        return this.pushStack(r);
                    };
                });
            var pt = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
                ht = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                },
                vt = function (e, t, n) {
                    var r,
                        o,
                        i = {};
                    for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
                    r = n.call(e);
                    for (o in t) e.style[o] = i[o];
                    return r;
                },
                mt = new RegExp(Je.join("|"), "i");
            !(function () {
                function e() {
                    if (c) {
                        (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            Ye.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        (r = "1%" !== e.top),
                            (u = 12 === t(e.marginLeft)),
                            (c.style.right = "60%"),
                            (a = 36 === t(e.right)),
                            (o = 36 === t(e.width)),
                            (c.style.position = "absolute"),
                            (i = 12 === t(c.offsetWidth / 3)),
                            Ye.removeChild(l),
                            (c = null);
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l = ke.createElement("div"),
                    c = ke.createElement("div");
                c.style &&
                    ((c.style.backgroundClip = "content-box"),
                    (c.cloneNode(!0).style.backgroundClip = ""),
                    (Ce.clearCloneStyle = "content-box" === c.style.backgroundClip),
                    Ee.extend(Ce, {
                        boxSizingReliable: function () {
                            return e(), o;
                        },
                        pixelBoxStyles: function () {
                            return e(), a;
                        },
                        pixelPosition: function () {
                            return e(), r;
                        },
                        reliableMarginLeft: function () {
                            return e(), u;
                        },
                        scrollboxSize: function () {
                            return e(), i;
                        },
                        reliableTrDimensions: function () {
                            var e, t, r, o;
                            return (
                                null == s &&
                                    ((e = ke.createElement("table")),
                                    (t = ke.createElement("tr")),
                                    (r = ke.createElement("div")),
                                    (e.style.cssText = "position:absolute;left:-11111px"),
                                    (t.style.height = "1px"),
                                    (r.style.height = "9px"),
                                    Ye.appendChild(e).appendChild(t).appendChild(r),
                                    (o = n.getComputedStyle(t)),
                                    (s = parseInt(o.height) > 3),
                                    Ye.removeChild(e)),
                                s
                            );
                        },
                    }));
            })();
            var gt = ["Webkit", "Moz", "ms"],
                yt = ke.createElement("div").style,
                bt = {},
                xt = /^(none|table(?!-c[ea]).+)/,
                wt = /^--/,
                Ct = { position: "absolute", visibility: "hidden", display: "block" },
                At = { letterSpacing: "0", fontWeight: "400" };
            Ee.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = B(e, "opacity");
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
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o,
                            i,
                            a,
                            s = y(t),
                            u = wt.test(t),
                            l = e.style;
                        if ((u || (t = $(s)), (a = Ee.cssHooks[t] || Ee.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                        (i = typeof n),
                            "string" === i && (o = Qe.exec(n)) && o[1] && ((n = C(e, t, o)), (i = "number")),
                            null != n &&
                                n === n &&
                                ("number" !== i || u || (n += (o && o[3]) || (Ee.cssNumber[s] ? "" : "px")),
                                Ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
                    }
                },
                css: function (e, t, n, r) {
                    var o,
                        i,
                        a,
                        s = y(t);
                    return (
                        wt.test(t) || (t = $(s)),
                        (a = Ee.cssHooks[t] || Ee.cssHooks[s]),
                        a && "get" in a && (o = a.get(e, !0, n)),
                        void 0 === o && (o = B(e, t, r)),
                        "normal" === o && t in At && (o = At[t]),
                        "" === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
                    );
                },
            }),
                Ee.each(["height", "width"], function (e, t) {
                    Ee.cssHooks[t] = {
                        get: function (e, n, r) {
                            if (n)
                                return !xt.test(Ee.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? G(e, t, r)
                                    : vt(e, Ct, function () {
                                          return G(e, t, r);
                                      });
                        },
                        set: function (e, n, r) {
                            var o,
                                i = ht(e),
                                a = !Ce.scrollboxSize() && "absolute" === i.position,
                                s = a || r,
                                u = s && "border-box" === Ee.css(e, "boxSizing", !1, i),
                                l = r ? V(e, t, r, u, i) : 0;
                            return (
                                u && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - V(e, t, "border", !1, i) - 0.5)),
                                l && (o = Qe.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = Ee.css(e, t))),
                                U(e, n, l)
                            );
                        },
                    };
                }),
                (Ee.cssHooks.marginLeft = F(Ce.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(B(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    vt(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                Ee.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (Ee.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + Je[r] + t] = i[r] || i[r - 2] || i[0];
                            return o;
                        },
                    }),
                        "margin" !== e && (Ee.cssHooks[e + t].set = U);
                }),
                Ee.fn.extend({
                    css: function (e, t) {
                        return ze(
                            this,
                            function (e, t, n) {
                                var r,
                                    o,
                                    i = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (r = ht(e), o = t.length; a < o; a++) i[t[a]] = Ee.css(e, t[a], !1, r);
                                    return i;
                                }
                                return void 0 !== n ? Ee.style(e, t, n) : Ee.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (Ee.Tween = X),
                (X.prototype = {
                    constructor: X,
                    init: function (e, t, n, r, o, i) {
                        (this.elem = e), (this.prop = n), (this.easing = o || Ee.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = i || (Ee.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = X.propHooks[this.prop];
                        return e && e.get ? e.get(this) : X.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = X.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : X.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (X.prototype.init.prototype = X.prototype),
                (X.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : ((t = Ee.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                        },
                        set: function (e) {
                            Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!Ee.cssHooks[e.prop] && null == e.elem.style[$(e.prop)]) ? (e.elem[e.prop] = e.now) : Ee.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (X.propHooks.scrollTop = X.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (Ee.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (Ee.fx = X.prototype.init),
                (Ee.fx.step = {});
            var Tt,
                kt,
                St = /^(?:toggle|show|hide)$/,
                Et = /queueHooks$/;
            (Ee.Animation = Ee.extend(te, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return C(n.elem, e, Qe.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    Ae(e) ? ((t = e), (e = ["*"])) : (e = e.match(Re));
                    for (var n, r = 0, o = e.length; r < o; r++) (n = e[r]), (te.tweeners[n] = te.tweeners[n] || []), te.tweeners[n].unshift(t);
                },
                prefilters: [Z],
                prefilter: function (e, t) {
                    t ? te.prefilters.unshift(e) : te.prefilters.push(e);
                },
            })),
                (Ee.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? Ee.extend({}, e) : { complete: n || (!n && t) || (Ae(e) && e), duration: e, easing: (n && t) || (t && !Ae(t) && t) };
                    return (
                        Ee.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in Ee.fx.speeds ? (r.duration = Ee.fx.speeds[r.duration]) : (r.duration = Ee.fx.speeds._default)),
                        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                        (r.old = r.complete),
                        (r.complete = function () {
                            Ae(r.old) && r.old.call(this), r.queue && Ee.dequeue(this, r.queue);
                        }),
                        r
                    );
                }),
                Ee.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(et).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                    },
                    animate: function (e, t, n, r) {
                        var o = Ee.isEmptyObject(e),
                            i = Ee.speed(t, n, r),
                            a = function () {
                                var t = te(this, Ee.extend({}, e), i);
                                (o || $e.get(this, "finish")) && t.stop(!0);
                            };
                        return (a.finish = a), o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    o = null != e && e + "queueHooks",
                                    i = Ee.timers,
                                    a = $e.get(this);
                                if (o) a[o] && a[o].stop && r(a[o]);
                                else for (o in a) a[o] && a[o].stop && Et.test(o) && r(a[o]);
                                for (o = i.length; o--; ) i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                                (!t && n) || Ee.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = $e.get(this),
                                    r = n[e + "queue"],
                                    o = n[e + "queueHooks"],
                                    i = Ee.timers,
                                    a = r ? r.length : 0;
                                for (n.finish = !0, Ee.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                Ee.each(["toggle", "show", "hide"], function (e, t) {
                    var n = Ee.fn[t];
                    Ee.fn[t] = function (e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Y(t, !0), e, r, o);
                    };
                }),
                Ee.each({ slideDown: Y("show"), slideUp: Y("hide"), slideToggle: Y("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    Ee.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r);
                    };
                }),
                (Ee.timers = []),
                (Ee.fx.tick = function () {
                    var e,
                        t = 0,
                        n = Ee.timers;
                    for (Tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || Ee.fx.stop(), (Tt = void 0);
                }),
                (Ee.fx.timer = function (e) {
                    Ee.timers.push(e), Ee.fx.start();
                }),
                (Ee.fx.interval = 13),
                (Ee.fx.start = function () {
                    kt || ((kt = !0), Q());
                }),
                (Ee.fx.stop = function () {
                    kt = null;
                }),
                (Ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (Ee.fn.delay = function (e, t) {
                    return (
                        (e = Ee.fx ? Ee.fx.speeds[e] || e : e),
                        (t = t || "fx"),
                        this.queue(t, function (t, r) {
                            var o = n.setTimeout(t, e);
                            r.stop = function () {
                                n.clearTimeout(o);
                            };
                        })
                    );
                }),
                (function () {
                    var e = ke.createElement("input"),
                        t = ke.createElement("select"),
                        n = t.appendChild(ke.createElement("option"));
                    (e.type = "checkbox"), (Ce.checkOn = "" !== e.value), (Ce.optSelected = n.selected), (e = ke.createElement("input")), (e.value = "t"), (e.type = "radio"), (Ce.radioValue = "t" === e.value);
                })();
            var jt,
                Lt = Ee.expr.attrHandle;
            Ee.fn.extend({
                attr: function (e, t) {
                    return ze(this, Ee.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        Ee.removeAttr(this, e);
                    });
                },
            }),
                Ee.extend({
                    attr: function (e, t, n) {
                        var r,
                            o,
                            i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return void 0 === e.getAttribute
                                ? Ee.prop(e, t, n)
                                : ((1 === i && Ee.isXMLDoc(e)) || (o = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? jt : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void Ee.removeAttr(e, t)
                                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                                          ? r
                                          : (e.setAttribute(t, n + ""), n)
                                      : o && "get" in o && null !== (r = o.get(e, t))
                                      ? r
                                      : ((r = Ee.find.attr(e, t)), null == r ? void 0 : r));
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!Ce.radioValue && "radio" === t && l(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            r = 0,
                            o = t && t.match(Re);
                        if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
                    },
                }),
                (jt = {
                    set: function (e, t, n) {
                        return !1 === t ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = Lt[t] || Ee.find.attr;
                    Lt[t] = function (e, t, r) {
                        var o,
                            i,
                            a = t.toLowerCase();
                        return r || ((i = Lt[a]), (Lt[a] = o), (o = null != n(e, t, r) ? a : null), (Lt[a] = i)), o;
                    };
                });
            var Dt = /^(?:input|select|textarea|button)$/i,
                Nt = /^(?:a|area)$/i;
            Ee.fn.extend({
                prop: function (e, t) {
                    return ze(this, Ee.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[Ee.propFix[e] || e];
                    });
                },
            }),
                Ee.extend({
                    prop: function (e, t, n) {
                        var r,
                            o,
                            i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return (
                                (1 === i && Ee.isXMLDoc(e)) || ((t = Ee.propFix[t] || t), (o = Ee.propHooks[t])),
                                void 0 !== n ? (o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e[t] = n)) : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = Ee.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Dt.test(e.nodeName) || (Nt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                Ce.optSelected ||
                    (Ee.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                Ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    Ee.propFix[this.toLowerCase()] = this;
                }),
                Ee.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s,
                            u = 0;
                        if (Ae(e))
                            return this.each(function (t) {
                                Ee(this).addClass(e.call(this, t, re(this)));
                            });
                        if (((t = oe(e)), t.length))
                            for (; (n = this[u++]); )
                                if (((o = re(n)), (r = 1 === n.nodeType && " " + ne(o) + " "))) {
                                    for (a = 0; (i = t[a++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                    (s = ne(r)), o !== s && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s,
                            u = 0;
                        if (Ae(e))
                            return this.each(function (t) {
                                Ee(this).removeClass(e.call(this, t, re(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if (((t = oe(e)), t.length))
                            for (; (n = this[u++]); )
                                if (((o = re(n)), (r = 1 === n.nodeType && " " + ne(o) + " "))) {
                                    for (a = 0; (i = t[a++]); ) for (; r.indexOf(" " + i + " ") > -1; ) r = r.replace(" " + i + " ", " ");
                                    (s = ne(r)), o !== s && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : Ae(e)
                            ? this.each(function (n) {
                                  Ee(this).toggleClass(e.call(this, n, re(this), t), t);
                              })
                            : this.each(function () {
                                  var t, o, i, a;
                                  if (r) for (o = 0, i = Ee(this), a = oe(e); (t = a[o++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                  else (void 0 !== e && "boolean" !== n) || ((t = re(this)), t && $e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $e.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            r = 0;
                        for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + ne(re(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
            var Ot = /\r/g;
            Ee.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        r,
                        o = this[0];
                    {
                        if (arguments.length)
                            return (
                                (r = Ae(e)),
                                this.each(function (n) {
                                    var o;
                                    1 === this.nodeType &&
                                        ((o = r ? e.call(this, n, Ee(this).val()) : e),
                                        null == o
                                            ? (o = "")
                                            : "number" == typeof o
                                            ? (o += "")
                                            : Array.isArray(o) &&
                                              (o = Ee.map(o, function (e) {
                                                  return null == e ? "" : e + "";
                                              })),
                                        ((t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                                })
                            );
                        if (o)
                            return (t = Ee.valHooks[o.type] || Ee.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : ((n = o.value), "string" == typeof n ? n.replace(Ot, "") : null == n ? "" : n);
                    }
                },
            }),
                Ee.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = Ee.find.attr(e, "value");
                                return null != t ? t : ne(Ee.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    r,
                                    o = e.options,
                                    i = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    u = a ? i + 1 : o.length;
                                for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                                    if (((n = o[r]), (n.selected || r === i) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup")))) {
                                        if (((t = Ee(n).val()), a)) return t;
                                        s.push(t);
                                    }
                                return s;
                            },
                            set: function (e, t) {
                                for (var n, r, o = e.options, i = Ee.makeArray(t), a = o.length; a--; ) (r = o[a]), (r.selected = Ee.inArray(Ee.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), i;
                            },
                        },
                    },
                }),
                Ee.each(["radio", "checkbox"], function () {
                    (Ee.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = Ee.inArray(Ee(e).val(), t) > -1);
                        },
                    }),
                        Ce.checkOn ||
                            (Ee.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (Ce.focusin = "onfocusin" in n);
            var Mt = /^(?:focusinfocus|focusoutblur)$/,
                Pt = function (e) {
                    e.stopPropagation();
                };
            Ee.extend(Ee.event, {
                trigger: function (e, t, r, o) {
                    var i,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        d,
                        p = [r || ke],
                        h = be.call(e, "type") ? e.type : e,
                        v = be.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((a = d = s = r = r || ke),
                        3 !== r.nodeType &&
                            8 !== r.nodeType &&
                            !Mt.test(h + Ee.event.triggered) &&
                            (h.indexOf(".") > -1 && ((v = h.split(".")), (h = v.shift()), v.sort()),
                            (l = h.indexOf(":") < 0 && "on" + h),
                            (e = e[Ee.expando] ? e : new Ee.Event(h, "object" == typeof e && e)),
                            (e.isTrigger = o ? 2 : 3),
                            (e.namespace = v.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = r),
                            (t = null == t ? [e] : Ee.makeArray(t, [e])),
                            (f = Ee.event.special[h] || {}),
                            o || !f.trigger || !1 !== f.trigger.apply(r, t)))
                    ) {
                        if (!o && !f.noBubble && !Te(r)) {
                            for (u = f.delegateType || h, Mt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (s = a);
                            s === (r.ownerDocument || ke) && p.push(s.defaultView || s.parentWindow || n);
                        }
                        for (i = 0; (a = p[i++]) && !e.isPropagationStopped(); )
                            (d = a),
                                (e.type = i > 1 ? u : f.bindType || h),
                                (c = ($e.get(a, "events") || Object.create(null))[e.type] && $e.get(a, "handle")),
                                c && c.apply(a, t),
                                (c = l && a[l]) && c.apply && We(a) && ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = h),
                            o ||
                                e.isDefaultPrevented() ||
                                (f._default && !1 !== f._default.apply(p.pop(), t)) ||
                                !We(r) ||
                                (l &&
                                    Ae(r[h]) &&
                                    !Te(r) &&
                                    ((s = r[l]),
                                    s && (r[l] = null),
                                    (Ee.event.triggered = h),
                                    e.isPropagationStopped() && d.addEventListener(h, Pt),
                                    r[h](),
                                    e.isPropagationStopped() && d.removeEventListener(h, Pt),
                                    (Ee.event.triggered = void 0),
                                    s && (r[l] = s))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var r = Ee.extend(new Ee.Event(), n, { type: e, isSimulated: !0 });
                    Ee.event.trigger(r, null, t);
                },
            }),
                Ee.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            Ee.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return Ee.event.trigger(e, t, n, !0);
                    },
                }),
                Ce.focusin ||
                    Ee.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            Ee.event.simulate(t, e.target, Ee.event.fix(e));
                        };
                        Ee.event.special[t] = {
                            setup: function () {
                                var r = this.ownerDocument || this.document || this,
                                    o = $e.access(r, t);
                                o || r.addEventListener(e, n, !0), $e.access(r, t, (o || 0) + 1);
                            },
                            teardown: function () {
                                var r = this.ownerDocument || this.document || this,
                                    o = $e.access(r, t) - 1;
                                o ? $e.access(r, t, o) : (r.removeEventListener(e, n, !0), $e.remove(r, t));
                            },
                        };
                    });
            var qt = n.location,
                It = { guid: Date.now() },
                Rt = /\?/;
            Ee.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new n.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                    t = void 0;
                }
                return (t && !t.getElementsByTagName("parsererror").length) || Ee.error("Invalid XML: " + e), t;
            };
            var Ht = /\[\]$/,
                _t = /\r?\n/g,
                zt = /^(?:submit|button|image|reset|file)$/i,
                Bt = /^(?:input|select|textarea|keygen)/i;
            (Ee.param = function (e, t) {
                var n,
                    r = [],
                    o = function (e, t) {
                        var n = Ae(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !Ee.isPlainObject(e)))
                    Ee.each(e, function () {
                        o(this.name, this.value);
                    });
                else for (n in e) ie(n, e[n], t, o);
                return r.join("&");
            }),
                Ee.fn.extend({
                    serialize: function () {
                        return Ee.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = Ee.prop(this, "elements");
                            return e ? Ee.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !Ee(this).is(":disabled") && Bt.test(this.nodeName) && !zt.test(e) && (this.checked || !nt.test(e));
                            })
                            .map(function (e, t) {
                                var n = Ee(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? Ee.map(n, function (e) {
                                          return { name: t.name, value: e.replace(_t, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(_t, "\r\n") };
                            })
                            .get();
                    },
                });
            var Ft = /%20/g,
                Wt = /#.*$/,
                $t = /([?&])_=[^&]*/,
                Ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Gt = /^(?:GET|HEAD)$/,
                Xt = /^\/\//,
                Qt = {},
                Jt = {},
                Yt = "*/".concat("*"),
                Kt = ke.createElement("a");
            (Kt.href = qt.href),
                Ee.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: qt.href,
                        type: "GET",
                        isLocal: Vt.test(qt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Yt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Ee.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? ue(ue(e, Ee.ajaxSettings), t) : ue(Ee.ajaxSettings, e);
                    },
                    ajaxPrefilter: ae(Qt),
                    ajaxTransport: ae(Jt),
                    ajax: function (e, t) {
                        function r(e, t, r, s) {
                            var l,
                                d,
                                p,
                                x,
                                w,
                                C = t;
                            c ||
                                ((c = !0),
                                u && n.clearTimeout(u),
                                (o = void 0),
                                (a = s || ""),
                                (A.readyState = e > 0 ? 4 : 0),
                                (l = (e >= 200 && e < 300) || 304 === e),
                                r && (x = le(h, A, r)),
                                !l && Ee.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}),
                                (x = ce(h, x, A, l)),
                                l
                                    ? (h.ifModified && ((w = A.getResponseHeader("Last-Modified")), w && (Ee.lastModified[i] = w), (w = A.getResponseHeader("etag")) && (Ee.etag[i] = w)),
                                      204 === e || "HEAD" === h.type ? (C = "nocontent") : 304 === e ? (C = "notmodified") : ((C = x.state), (d = x.data), (p = x.error), (l = !p)))
                                    : ((p = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                                (A.status = e),
                                (A.statusText = (t || C) + ""),
                                l ? g.resolveWith(v, [d, C, A]) : g.rejectWith(v, [A, C, p]),
                                A.statusCode(b),
                                (b = void 0),
                                f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [A, h, l ? d : p]),
                                y.fireWith(v, [A, C]),
                                f && (m.trigger("ajaxComplete", [A, h]), --Ee.active || Ee.event.trigger("ajaxStop")));
                        }
                        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var o,
                            i,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            d,
                            p,
                            h = Ee.ajaxSetup({}, t),
                            v = h.context || h,
                            m = h.context && (v.nodeType || v.jquery) ? Ee(v) : Ee.event,
                            g = Ee.Deferred(),
                            y = Ee.Callbacks("once memory"),
                            b = h.statusCode || {},
                            x = {},
                            w = {},
                            C = "canceled",
                            A = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (c) {
                                        if (!s) for (s = {}; (t = Ut.exec(a)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = s[e.toLowerCase() + " "];
                                    }
                                    return null == t ? null : t.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return c ? a : null;
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
                                        if (c) A.always(e[A.status]);
                                        else for (t in e) b[t] = [b[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || C;
                                    return o && o.abort(t), r(0, t), this;
                                },
                            };
                        if (
                            (g.promise(A),
                            (h.url = ((e || h.url || qt.href) + "").replace(Xt, qt.protocol + "//")),
                            (h.type = t.method || t.type || h.method || h.type),
                            (h.dataTypes = (h.dataType || "*").toLowerCase().match(Re) || [""]),
                            null == h.crossDomain)
                        ) {
                            l = ke.createElement("a");
                            try {
                                (l.href = h.url), (l.href = l.href), (h.crossDomain = Kt.protocol + "//" + Kt.host != l.protocol + "//" + l.host);
                            } catch (e) {
                                h.crossDomain = !0;
                            }
                        }
                        if ((h.data && h.processData && "string" != typeof h.data && (h.data = Ee.param(h.data, h.traditional)), se(Qt, h, t, A), c)) return A;
                        (f = Ee.event && h.global),
                            f && 0 == Ee.active++ && Ee.event.trigger("ajaxStart"),
                            (h.type = h.type.toUpperCase()),
                            (h.hasContent = !Gt.test(h.type)),
                            (i = h.url.replace(Wt, "")),
                            h.hasContent
                                ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+"))
                                : ((p = h.url.slice(i.length)),
                                  h.data && (h.processData || "string" == typeof h.data) && ((i += (Rt.test(i) ? "&" : "?") + h.data), delete h.data),
                                  !1 === h.cache && ((i = i.replace($t, "$1")), (p = (Rt.test(i) ? "&" : "?") + "_=" + It.guid++ + p)),
                                  (h.url = i + p)),
                            h.ifModified && (Ee.lastModified[i] && A.setRequestHeader("If-Modified-Since", Ee.lastModified[i]), Ee.etag[i] && A.setRequestHeader("If-None-Match", Ee.etag[i])),
                            ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && A.setRequestHeader("Content-Type", h.contentType),
                            A.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : h.accepts["*"]);
                        for (d in h.headers) A.setRequestHeader(d, h.headers[d]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(v, A, h) || c)) return A.abort();
                        if (((C = "abort"), y.add(h.complete), A.done(h.success), A.fail(h.error), (o = se(Jt, h, t, A)))) {
                            if (((A.readyState = 1), f && m.trigger("ajaxSend", [A, h]), c)) return A;
                            h.async &&
                                h.timeout > 0 &&
                                (u = n.setTimeout(function () {
                                    A.abort("timeout");
                                }, h.timeout));
                            try {
                                (c = !1), o.send(x, r);
                            } catch (e) {
                                if (c) throw e;
                                r(-1, e);
                            }
                        } else r(-1, "No Transport");
                        return A;
                    },
                    getJSON: function (e, t, n) {
                        return Ee.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return Ee.get(e, void 0, t, "script");
                    },
                }),
                Ee.each(["get", "post"], function (e, t) {
                    Ee[t] = function (e, n, r, o) {
                        return Ae(n) && ((o = o || r), (r = n), (n = void 0)), Ee.ajax(Ee.extend({ url: e, type: t, dataType: o, data: n, success: r }, Ee.isPlainObject(e) && e));
                    };
                }),
                Ee.ajaxPrefilter(function (e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                }),
                (Ee._evalUrl = function (e, t, n) {
                    return Ee.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (e) {
                            Ee.globalEval(e, t, n);
                        },
                    });
                }),
                Ee.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (Ae(e) && (e = e.call(this[0])),
                                (t = Ee(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                        return Ae(e)
                            ? this.each(function (t) {
                                  Ee(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = Ee(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = Ae(e);
                        return this.each(function (n) {
                            Ee(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    Ee(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (Ee.expr.pseudos.hidden = function (e) {
                    return !Ee.expr.pseudos.visible(e);
                }),
                (Ee.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (Ee.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var Zt = { 0: 200, 1223: 204 },
                en = Ee.ajaxSettings.xhr();
            (Ce.cors = !!en && "withCredentials" in en),
                (Ce.ajax = en = !!en),
                Ee.ajaxTransport(function (e) {
                    var t, r;
                    if (Ce.cors || (en && !e.crossDomain))
                        return {
                            send: function (o, i) {
                                var a,
                                    s = e.xhr();
                                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                                for (a in o) s.setRequestHeader(a, o[a]);
                                (t = function (e) {
                                    return function () {
                                        t &&
                                            ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                            "abort" === e
                                                ? s.abort()
                                                : "error" === e
                                                ? "number" != typeof s.status
                                                    ? i(0, "error")
                                                    : i(s.status, s.statusText)
                                                : i(
                                                      Zt[s.status] || s.status,
                                                      s.statusText,
                                                      "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                      s.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (s.onload = t()),
                                    (r = s.onerror = s.ontimeout = t("error")),
                                    void 0 !== s.onabort
                                        ? (s.onabort = r)
                                        : (s.onreadystatechange = function () {
                                              4 === s.readyState &&
                                                  n.setTimeout(function () {
                                                      t && r();
                                                  });
                                          }),
                                    (t = t("abort"));
                                try {
                                    s.send((e.hasContent && e.data) || null);
                                } catch (e) {
                                    if (t) throw e;
                                }
                            },
                            abort: function () {
                                t && t();
                            },
                        };
                }),
                Ee.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                Ee.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (e) {
                            return Ee.globalEval(e), e;
                        },
                    },
                }),
                Ee.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                Ee.ajaxTransport("script", function (e) {
                    if (e.crossDomain || e.scriptAttrs) {
                        var t, n;
                        return {
                            send: function (r, o) {
                                (t = Ee("<script>")
                                    .attr(e.scriptAttrs || {})
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function (e) {
                                            t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    ke.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                    }
                });
            var tn = [],
                nn = /(=)\?(?=&|$)|\?\?/;
            Ee.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = tn.pop() || Ee.expando + "_" + It.guid++;
                    return (this[e] = !0), e;
                },
            }),
                Ee.ajaxPrefilter("json jsonp", function (e, t, r) {
                    var o,
                        i,
                        a,
                        s = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])
                        return (
                            (o = e.jsonpCallback = Ae(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            s ? (e[s] = e[s].replace(nn, "$1" + o)) : !1 !== e.jsonp && (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                            (e.converters["script json"] = function () {
                                return a || Ee.error(o + " was not called"), a[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (i = n[o]),
                            (n[o] = function () {
                                a = arguments;
                            }),
                            r.always(function () {
                                void 0 === i ? Ee(n).removeProp(o) : (n[o] = i), e[o] && ((e.jsonpCallback = t.jsonpCallback), tn.push(o)), a && Ae(i) && i(a[0]), (a = i = void 0);
                            }),
                            "script"
                        );
                }),
                (Ce.createHTMLDocument = (function () {
                    var e = ke.implementation.createHTMLDocument("").body;
                    return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
                })()),
                (Ee.parseHTML = function (e, t, n) {
                    if ("string" != typeof e) return [];
                    "boolean" == typeof t && ((n = t), (t = !1));
                    var r, o, i;
                    return (
                        t || (Ce.createHTMLDocument ? ((t = ke.implementation.createHTMLDocument("")), (r = t.createElement("base")), (r.href = ke.location.href), t.head.appendChild(r)) : (t = ke)),
                        (o = Oe.exec(e)),
                        (i = !n && []),
                        o ? [t.createElement(o[1])] : ((o = E([e], t, i)), i && i.length && Ee(i).remove(), Ee.merge([], o.childNodes))
                    );
                }),
                (Ee.fn.load = function (e, t, n) {
                    var r,
                        o,
                        i,
                        a = this,
                        s = e.indexOf(" ");
                    return (
                        s > -1 && ((r = ne(e.slice(s))), (e = e.slice(0, s))),
                        Ae(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                        a.length > 0 &&
                            Ee.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                                .done(function (e) {
                                    (i = arguments), a.html(r ? Ee("<div>").append(Ee.parseHTML(e)).find(r) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            a.each(function () {
                                                n.apply(this, i || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                (Ee.expr.pseudos.animated = function (e) {
                    return Ee.grep(Ee.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (Ee.offset = {
                    setOffset: function (e, t, n) {
                        var r,
                            o,
                            i,
                            a,
                            s,
                            u,
                            l,
                            c = Ee.css(e, "position"),
                            f = Ee(e),
                            d = {};
                        "static" === c && (e.style.position = "relative"),
                            (s = f.offset()),
                            (i = Ee.css(e, "top")),
                            (u = Ee.css(e, "left")),
                            (l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1),
                            l ? ((r = f.position()), (a = r.top), (o = r.left)) : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                            Ae(t) && (t = t.call(e, n, Ee.extend({}, s))),
                            null != t.top && (d.top = t.top - s.top + a),
                            null != t.left && (d.left = t.left - s.left + o),
                            "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), f.css(d));
                    },
                }),
                Ee.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      Ee.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            r = this[0];
                        if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                r = this[0],
                                o = { top: 0, left: 0 };
                            if ("fixed" === Ee.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ee.css(e, "position"); ) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((o = Ee(e).offset()), (o.top += Ee.css(e, "borderTopWidth", !0)), (o.left += Ee.css(e, "borderLeftWidth", !0)));
                            }
                            return { top: t.top - o.top - Ee.css(r, "marginTop", !0), left: t.left - o.left - Ee.css(r, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === Ee.css(e, "position"); ) e = e.offsetParent;
                            return e || Ye;
                        });
                    },
                }),
                Ee.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    Ee.fn[e] = function (r) {
                        return ze(
                            this,
                            function (e, r, o) {
                                var i;
                                if ((Te(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === o)) return i ? i[t] : e[r];
                                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o);
                            },
                            e,
                            r,
                            arguments.length
                        );
                    };
                }),
                Ee.each(["top", "left"], function (e, t) {
                    Ee.cssHooks[t] = F(Ce.pixelPosition, function (e, n) {
                        if (n) return (n = B(e, t)), pt.test(n) ? Ee(e).position()[t] + "px" : n;
                    });
                }),
                Ee.each({ Height: "height", Width: "width" }, function (e, t) {
                    Ee.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                        Ee.fn[r] = function (o, i) {
                            var a = arguments.length && (n || "boolean" != typeof o),
                                s = n || (!0 === o || !0 === i ? "margin" : "border");
                            return ze(
                                this,
                                function (t, n, o) {
                                    var i;
                                    return Te(t)
                                        ? 0 === r.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                        : void 0 === o
                                        ? Ee.css(t, n, s)
                                        : Ee.style(t, n, o, s);
                                },
                                t,
                                a ? o : void 0,
                                a
                            );
                        };
                    });
                }),
                Ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    Ee.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                Ee.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    Ee.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                });
            var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (Ee.proxy = function (e, t) {
                var n, r, o;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), Ae(e)))
                    return (
                        (r = pe.call(arguments, 2)),
                        (o = function () {
                            return e.apply(t || this, r.concat(pe.call(arguments)));
                        }),
                        (o.guid = e.guid = e.guid || Ee.guid++),
                        o
                    );
            }),
                (Ee.holdReady = function (e) {
                    e ? Ee.readyWait++ : Ee.ready(!0);
                }),
                (Ee.isArray = Array.isArray),
                (Ee.parseJSON = JSON.parse),
                (Ee.nodeName = l),
                (Ee.isFunction = Ae),
                (Ee.isWindow = Te),
                (Ee.camelCase = y),
                (Ee.type = s),
                (Ee.now = Date.now),
                (Ee.isNumeric = function (e) {
                    var t = Ee.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                (Ee.trim = function (e) {
                    return null == e ? "" : (e + "").replace(rn, "");
                }),
                (r = []),
                void 0 !==
                    (o = function () {
                        return Ee;
                    }.apply(t, r)) && (e.exports = o);
            var on = n.jQuery,
                an = n.$;
            return (
                (Ee.noConflict = function (e) {
                    return n.$ === Ee && (n.$ = an), e && n.jQuery === Ee && (n.jQuery = on), Ee;
                }),
                void 0 === i && (n.jQuery = n.$ = Ee),
                Ee
            );
        });
    },
    function (e, t, n) {
        var r;
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
                            r = function (e) {
                                var t,
                                    r,
                                    o = e.parentNode;
                                "PICTURE" === o.nodeName.toUpperCase()
                                    ? ((t = n.cloneNode()),
                                      o.insertBefore(t, o.firstElementChild),
                                      setTimeout(function () {
                                          o.removeChild(t);
                                      }))
                                    : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) &&
                                      ((e._pfLastSize = e.offsetWidth),
                                      (r = e.sizes),
                                      (e.sizes += ",100vw"),
                                      setTimeout(function () {
                                          e.sizes = r;
                                      }));
                            },
                            o = function () {
                                var e,
                                    t = document.querySelectorAll("picture > img, img[srcset][sizes]");
                                for (e = 0; e < t.length; e++) r(t[e]);
                            },
                            i = function () {
                                clearTimeout(t), (t = setTimeout(o, 99));
                            },
                            a = e.matchMedia && matchMedia("(orientation: landscape)"),
                            s = function () {
                                i(), a && a.addListener && a.addListener(i);
                            };
                        return (n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), /^[c|i]|d$/.test(document.readyState || "") ? s() : document.addEventListener("DOMContentLoaded", s), i;
                    })()
                );
        })(window),
            (function (o, i, a) {
                "use strict";
                function s(e) {
                    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
                }
                function u() {
                    (R = !1),
                        (z = o.devicePixelRatio),
                        (H = {}),
                        (_ = {}),
                        (x.DPR = z || 1),
                        (B.width = Math.max(o.innerWidth || 0, E.clientWidth)),
                        (B.height = Math.max(o.innerHeight || 0, E.clientHeight)),
                        (B.vw = B.width / 100),
                        (B.vh = B.height / 100),
                        (b = [B.height, B.width, z].join("-")),
                        (B.em = x.getEmValue()),
                        (B.rem = B.em);
                }
                function l(e, t, n, r) {
                    var o, i, a, s;
                    return "saveData" === L.algorithm ? (e > 2.7 ? (s = n + 1) : ((i = t - n), (o = Math.pow(e - 0.6, 1.5)), (a = i * o), r && (a += 0.1 * o), (s = e + a))) : (s = n > 1 ? Math.sqrt(e * t) : e), s > n;
                }
                function c(e) {
                    var t,
                        n = x.getSet(e),
                        r = !1;
                    "pending" !== n && ((r = b), n && ((t = x.setRes(n)), x.applySetCandidate(t, e))), (e[x.ns].evaled = r);
                }
                function f(e, t) {
                    return e.res - t.res;
                }
                function d(e, t, n) {
                    var r;
                    return !n && t && ((n = e[x.ns].sets), (n = n && n[n.length - 1])), (r = p(t, n)), r && ((t = x.makeUrl(t)), (e[x.ns].curSrc = t), (e[x.ns].curCan = r), r.res || Z(r, r.set.sizes)), r;
                }
                function p(e, t) {
                    var n, r, o;
                    if (e && t)
                        for (o = x.parseSet(t), e = x.makeUrl(e), n = 0; n < o.length; n++)
                            if (e === x.makeUrl(o[n].url)) {
                                r = o[n];
                                break;
                            }
                    return r;
                }
                function h(e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a = e.getElementsByTagName("source");
                    for (n = 0, r = a.length; n < r; n++) (o = a[n]), (o[x.ns] = !0), (i = o.getAttribute("srcset")) && t.push({ srcset: i, media: o.getAttribute("media"), type: o.getAttribute("type"), sizes: o.getAttribute("sizes") });
                }
                function v(e, t) {
                    function n(t) {
                        var n,
                            r = t.exec(e.substring(f));
                        if (r) return (n = r[0]), (f += n.length), n;
                    }
                    function r() {
                        var e,
                            n,
                            r,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p = !1,
                            h = {};
                        for (a = 0; a < i.length; a++)
                            (s = i[a]),
                                (u = s[s.length - 1]),
                                (l = s.substring(0, s.length - 1)),
                                (c = parseInt(l, 10)),
                                (f = parseFloat(l)),
                                X.test(l) && "w" === u
                                    ? ((e || n) && (p = !0), 0 === c ? (p = !0) : (e = c))
                                    : Q.test(l) && "x" === u
                                    ? ((e || n || r) && (p = !0), f < 0 ? (p = !0) : (n = f))
                                    : X.test(l) && "h" === u
                                    ? ((r || n) && (p = !0), 0 === c ? (p = !0) : (r = c))
                                    : (p = !0);
                        p || ((h.url = o), e && (h.w = e), n && (h.d = n), r && (h.h = r), r || n || e || (h.d = 1), 1 === h.d && (t.has1x = !0), (h.set = t), d.push(h));
                    }
                    for (var o, i, a, u, l, c = e.length, f = 0, d = []; ; ) {
                        if ((n(U), f >= c)) return d;
                        (o = n(V)),
                            (i = []),
                            "," === o.slice(-1)
                                ? ((o = o.replace(G, "")), r())
                                : (function () {
                                      for (n($), a = "", u = "in descriptor"; ; ) {
                                          if (((l = e.charAt(f)), "in descriptor" === u))
                                              if (s(l)) a && (i.push(a), (a = ""), (u = "after descriptor"));
                                              else {
                                                  if ("," === l) return (f += 1), a && i.push(a), void r();
                                                  if ("(" === l) (a += l), (u = "in parens");
                                                  else {
                                                      if ("" === l) return a && i.push(a), void r();
                                                      a += l;
                                                  }
                                              }
                                          else if ("in parens" === u)
                                              if (")" === l) (a += l), (u = "in descriptor");
                                              else {
                                                  if ("" === l) return i.push(a), void r();
                                                  a += l;
                                              }
                                          else if ("after descriptor" === u)
                                              if (s(l));
                                              else {
                                                  if ("" === l) return void r();
                                                  (u = "in descriptor"), (f -= 1);
                                              }
                                          f += 1;
                                      }
                                  })();
                    }
                }
                function m(e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                        l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                    for (
                        n = (function (e) {
                            function t() {
                                o && (i.push(o), (o = ""));
                            }
                            function n() {
                                i[0] && (a.push(i), (i = []));
                            }
                            for (var r, o = "", i = [], a = [], u = 0, l = 0, c = !1; ; ) {
                                if ("" === (r = e.charAt(l))) return t(), n(), a;
                                if (c) {
                                    if ("*" === r && "/" === e[l + 1]) {
                                        (c = !1), (l += 2), t();
                                        continue;
                                    }
                                    l += 1;
                                } else {
                                    if (s(r)) {
                                        if ((e.charAt(l - 1) && s(e.charAt(l - 1))) || !o) {
                                            l += 1;
                                            continue;
                                        }
                                        if (0 === u) {
                                            t(), (l += 1);
                                            continue;
                                        }
                                        r = " ";
                                    } else if ("(" === r) u += 1;
                                    else if (")" === r) u -= 1;
                                    else {
                                        if ("," === r) {
                                            t(), n(), (l += 1);
                                            continue;
                                        }
                                        if ("/" === r && "*" === e.charAt(l + 1)) {
                                            (c = !0), (l += 2);
                                            continue;
                                        }
                                    }
                                    (o += r), (l += 1);
                                }
                            }
                        })(e),
                            r = n.length,
                            t = 0;
                        t < r;
                        t++
                    )
                        if (
                            ((o = n[t]),
                            (i = o[o.length - 1]),
                            (function (e) {
                                return !!(u.test(e) && parseFloat(e) >= 0) || !!l.test(e) || "0" === e || "-0" === e || "+0" === e;
                            })(i))
                        ) {
                            if (((a = i), o.pop(), 0 === o.length)) return a;
                            if (((o = o.join(" ")), x.matchesMedia(o))) return a;
                        }
                    return "100vw";
                }
                i.createElement("picture");
                var g,
                    y,
                    b,
                    x = {},
                    w = !1,
                    C = function () {},
                    A = i.createElement("img"),
                    T = A.getAttribute,
                    k = A.setAttribute,
                    S = A.removeAttribute,
                    E = i.documentElement,
                    j = {},
                    L = { algorithm: "" },
                    D = navigator.userAgent,
                    N = /rident/.test(D) || (/ecko/.test(D) && D.match(/rv\:(\d+)/) && RegExp.$1 > 35),
                    O = "currentSrc",
                    M = /\s+\+?\d+(e\d+)?w/,
                    P = /(\([^)]+\))?\s*(.+)/,
                    q = o.picturefillCFG,
                    I = "font-size:100%!important;",
                    R = !0,
                    H = {},
                    _ = {},
                    z = o.devicePixelRatio,
                    B = { px: 1, in: 96 },
                    F = i.createElement("a"),
                    W = !1,
                    $ = /^[ \t\n\r\u000c]+/,
                    U = /^[, \t\n\r\u000c]+/,
                    V = /^[^ \t\n\r\u000c]+/,
                    G = /[,]+$/,
                    X = /^\d+$/,
                    Q = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                    J = function (e, t, n, r) {
                        e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
                    },
                    Y = function (e) {
                        var t = {};
                        return function (n) {
                            return n in t || (t[n] = e(n)), t[n];
                        };
                    },
                    K = (function () {
                        var e = /^([\d\.]+)(em|vw|px)$/,
                            t = function () {
                                for (var e = arguments, t = 0, n = e[0]; ++t in e; ) n = n.replace(e[t], e[++t]);
                                return n;
                            },
                            n = Y(function (e) {
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
                        return function (t, r) {
                            var o;
                            if (!(t in H))
                                if (((H[t] = !1), r && (o = t.match(e)))) H[t] = o[1] * B[o[2]];
                                else
                                    try {
                                        H[t] = new Function("e", n(t))(B);
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
                                r,
                                o = e || {};
                            if (
                                (o.elements && 1 === o.elements.nodeType && ("IMG" === o.elements.nodeName.toUpperCase() ? (o.elements = [o.elements]) : ((o.context = o.elements), (o.elements = null))),
                                (t = o.elements || x.qsa(o.context || i, o.reevaluate || o.reselect ? x.sel : x.selShort)),
                                (r = t.length))
                            ) {
                                for (x.setupRun(o), W = !0, n = 0; n < r; n++) x.fillImg(t[n], o);
                                x.teardownRun(o);
                            }
                        }
                    };
                o.console && console.warn,
                    O in A || (O = "src"),
                    (j["image/jpeg"] = !0),
                    (j["image/gif"] = !0),
                    (j["image/png"] = !0),
                    (j["image/svg+xml"] = i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")),
                    (x.ns = ("pf" + new Date().getTime()).substr(0, 9)),
                    (x.supSrcset = "srcset" in A),
                    (x.supSizes = "sizes" in A),
                    (x.supPicture = !!o.HTMLPictureElement),
                    x.supSrcset &&
                        x.supPicture &&
                        !x.supSizes &&
                        (function (e) {
                            (A.srcset = "data:,a"), (e.src = "data:,a"), (x.supSrcset = A.complete === e.complete), (x.supPicture = x.supSrcset && x.supPicture);
                        })(i.createElement("img")),
                    x.supSrcset && !x.supSizes
                        ? (function () {
                              var e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                                  t = i.createElement("img"),
                                  n = function () {
                                      2 === t.width && (x.supSizes = !0), (y = x.supSrcset && !x.supSizes), (w = !0), setTimeout(ee);
                                  };
                              (t.onload = n), (t.onerror = n), t.setAttribute("sizes", "9px"), (t.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w"), (t.src = e);
                          })()
                        : (w = !0),
                    (x.selShort = "picture>img,img[srcset]"),
                    (x.sel = x.selShort),
                    (x.cfg = L),
                    (x.DPR = z || 1),
                    (x.u = B),
                    (x.types = j),
                    (x.setSize = C),
                    (x.makeUrl = Y(function (e) {
                        return (F.href = e), F.href;
                    })),
                    (x.qsa = function (e, t) {
                        return "querySelector" in e ? e.querySelectorAll(t) : [];
                    }),
                    (x.matchesMedia = function () {
                        return (
                            o.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
                                ? (x.matchesMedia = function (e) {
                                      return !e || matchMedia(e).matches;
                                  })
                                : (x.matchesMedia = x.mMQ),
                            x.matchesMedia.apply(this, arguments)
                        );
                    }),
                    (x.mMQ = function (e) {
                        return !e || K(e);
                    }),
                    (x.calcLength = function (e) {
                        var t = K(e, !0) || !1;
                        return t < 0 && (t = !1), t;
                    }),
                    (x.supportsType = function (e) {
                        return !e || j[e];
                    }),
                    (x.parseSize = Y(function (e) {
                        var t = (e || "").match(P);
                        return { media: t && t[1], length: t && t[2] };
                    })),
                    (x.parseSet = function (e) {
                        return e.cands || (e.cands = v(e.srcset, e)), e.cands;
                    }),
                    (x.getEmValue = function () {
                        var e;
                        if (!g && (e = i.body)) {
                            var t = i.createElement("div"),
                                n = E.style.cssText,
                                r = e.style.cssText;
                            (t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
                                (E.style.cssText = I),
                                (e.style.cssText = I),
                                e.appendChild(t),
                                (g = t.offsetWidth),
                                e.removeChild(t),
                                (g = parseFloat(g, 10)),
                                (E.style.cssText = n),
                                (e.style.cssText = r);
                        }
                        return g || 16;
                    }),
                    (x.calcListLength = function (e) {
                        if (!(e in _) || L.uT) {
                            var t = x.calcLength(m(e));
                            _[e] = t || B.width;
                        }
                        return _[e];
                    }),
                    (x.setRes = function (e) {
                        var t;
                        if (e) {
                            t = x.parseSet(e);
                            for (var n = 0, r = t.length; n < r; n++) Z(t[n], e.sizes);
                        }
                        return t;
                    }),
                    (x.setRes.res = Z),
                    (x.applySetCandidate = function (e, t) {
                        if (e.length) {
                            var n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                u,
                                c,
                                p,
                                h = t[x.ns],
                                v = x.DPR;
                            if (((s = h.curSrc || t[O]), (u = h.curCan || d(t, s, e[0].set)), u && u.set === e[0].set && ((p = N && !t.complete && u.res - 0.1 > v) || ((u.cached = !0), u.res >= v && (a = u))), !a))
                                for (e.sort(f), i = e.length, a = e[i - 1], r = 0; r < i; r++)
                                    if (((n = e[r]), n.res >= v)) {
                                        (o = r - 1), (a = e[o] && (p || s !== x.makeUrl(n.url)) && l(e[o].res, n.res, v, e[o].cached) ? e[o] : n);
                                        break;
                                    }
                            a && ((c = x.makeUrl(a.url)), (h.curSrc = c), (h.curCan = a), c !== s && x.setSrc(t, a), x.setSize(t));
                        }
                    }),
                    (x.setSrc = function (e, t) {
                        var n;
                        (e.src = t.url), "image/svg+xml" === t.set.type && ((n = e.style.width), (e.style.width = e.offsetWidth + 1 + "px"), e.offsetWidth + 1 && (e.style.width = n));
                    }),
                    (x.getSet = function (e) {
                        var t,
                            n,
                            r,
                            o = !1,
                            i = e[x.ns].sets;
                        for (t = 0; t < i.length && !o; t++)
                            if (((n = i[t]), n.srcset && x.matchesMedia(n.media) && (r = x.supportsType(n.type)))) {
                                "pending" === r && (n = r), (o = n);
                                break;
                            }
                        return o;
                    }),
                    (x.parseSets = function (e, t, n) {
                        var r,
                            o,
                            i,
                            a,
                            s = t && "PICTURE" === t.nodeName.toUpperCase(),
                            u = e[x.ns];
                        (void 0 === u.src || n.src) && ((u.src = T.call(e, "src")), u.src ? k.call(e, "data-pfsrc", u.src) : S.call(e, "data-pfsrc")),
                            (void 0 === u.srcset || n.srcset || !x.supSrcset || e.srcset) && ((r = T.call(e, "srcset")), (u.srcset = r), (a = !0)),
                            (u.sets = []),
                            s && ((u.pic = !0), h(t, u.sets)),
                            u.srcset
                                ? ((o = { srcset: u.srcset, sizes: T.call(e, "sizes") }),
                                  u.sets.push(o),
                                  (i = (y || u.src) && M.test(u.srcset || "")) || !u.src || p(u.src, o) || o.has1x || ((o.srcset += ", " + u.src), o.cands.push({ url: u.src, d: 1, set: o })))
                                : u.src && u.sets.push({ srcset: u.src, sizes: null }),
                            (u.curCan = null),
                            (u.curSrc = void 0),
                            (u.supported = !(s || (o && !x.supSrcset) || (i && !x.supSizes))),
                            a && x.supSrcset && !u.supported && (r ? (k.call(e, "data-pfsrcset", r), (e.srcset = "")) : S.call(e, "data-pfsrcset")),
                            u.supported && !u.srcset && ((!u.src && e.src) || e.src !== x.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : (e.src = u.src)),
                            (u.parsed = !0);
                    }),
                    (x.fillImg = function (e, t) {
                        var n,
                            r = t.reselect || t.reevaluate;
                        e[x.ns] || (e[x.ns] = {}), (n = e[x.ns]), (r || n.evaled !== b) && ((n.parsed && !t.reevaluate) || x.parseSets(e, e.parentNode, t), n.supported ? (n.evaled = b) : c(e));
                    }),
                    (x.setupRun = function () {
                        (W && !R && z === o.devicePixelRatio) || u();
                    }),
                    x.supPicture
                        ? ((ee = C), (x.fillImg = C))
                        : (function () {
                              var e,
                                  t = o.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                                  n = function () {
                                      var o = i.readyState || "";
                                      (r = setTimeout(n, "loading" === o ? 200 : 999)), i.body && (x.fillImgs(), (e = e || t.test(o)) && clearTimeout(r));
                                  },
                                  r = setTimeout(n, i.body ? 9 : 99),
                                  a = E.clientHeight,
                                  s = function () {
                                      (R = Math.max(o.innerWidth || 0, E.clientWidth) !== B.width || E.clientHeight !== a), (a = E.clientHeight), R && x.fillImgs();
                                  };
                              J(
                                  o,
                                  "resize",
                                  (function (e, t) {
                                      var n,
                                          r,
                                          o = function () {
                                              var i = new Date() - r;
                                              i < t ? (n = setTimeout(o, t - i)) : ((n = null), e());
                                          };
                                      return function () {
                                          (r = new Date()), n || (n = setTimeout(o, t));
                                      };
                                  })(s, 99)
                              ),
                                  J(i, "readystatechange", n);
                          })(),
                    (x.picturefill = ee),
                    (x.fillImgs = ee),
                    (x.teardownRun = C),
                    (ee._ = x),
                    (o.picturefillCFG = {
                        pf: x,
                        push: function (e) {
                            var t = e.shift();
                            "function" == typeof x[t] ? x[t].apply(x, e) : ((L[t] = e[0]), W && x.fillImgs({ reselect: !0 }));
                        },
                    });
                for (; q && q.length; ) o.picturefillCFG.push(q.shift());
                (o.picturefill = ee),
                    "object" == typeof e && "object" == typeof e.exports
                        ? (e.exports = ee)
                        : void 0 !==
                              (r = function () {
                                  return ee;
                              }.call(t, n, t, e)) && (e.exports = r),
                    x.supPicture ||
                        (j["image/webp"] = (function (e, t) {
                            var n = new o.Image();
                            return (
                                (n.onerror = function () {
                                    (j[e] = !1), ee();
                                }),
                                (n.onload = function () {
                                    (j[e] = 1 === n.width), ee();
                                }),
                                (n.src = t),
                                "pending"
                            );
                        })("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
            })(window, document);
    },
    function (e, t, n) {
        var r, o;
        !(function (i) {
            var a;
            if (((r = i), void 0 !== (o = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = o), (a = !0), (e.exports = i()), (a = !0), !a)) {
                var s = window.Cookies,
                    u = (window.Cookies = i());
                u.noConflict = function () {
                    return (window.Cookies = s), u;
                };
            }
        })(function () {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) t[r] = n[r];
                }
                return t;
            }
            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            }
            function n(r) {
                function o() {}
                function i(t, n, i) {
                    if ("undefined" != typeof document) {
                        (i = e({ path: "/" }, o.defaults, i)), "number" == typeof i.expires && (i.expires = new Date(1 * new Date() + 864e5 * i.expires)), (i.expires = i.expires ? i.expires.toUTCString() : "");
                        try {
                            var a = JSON.stringify(n);
                            /^[\{\[]/.test(a) && (n = a);
                        } catch (e) {}
                        (n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
                            (t = encodeURIComponent(String(t))
                                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[\(\)]/g, escape));
                        var s = "";
                        for (var u in i) i[u] && ((s += "; " + u), !0 !== i[u] && (s += "=" + i[u].split(";")[0]));
                        return (document.cookie = t + "=" + n + s);
                    }
                }
                function a(e, n) {
                    if ("undefined" != typeof document) {
                        for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                            var s = i[a].split("="),
                                u = s.slice(1).join("=");
                            n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                            try {
                                var l = t(s[0]);
                                if (((u = (r.read || r)(u, l) || t(u)), n))
                                    try {
                                        u = JSON.parse(u);
                                    } catch (e) {}
                                if (((o[l] = u), e === l)) break;
                            } catch (e) {}
                        }
                        return e ? o[e] : o;
                    }
                }
                return (
                    (o.set = i),
                    (o.get = function (e) {
                        return a(e, !1);
                    }),
                    (o.getJSON = function (e) {
                        return a(e, !0);
                    }),
                    (o.remove = function (t, n) {
                        i(t, "", e(n, { expires: -1 }));
                    }),
                    (o.defaults = {}),
                    (o.withConverter = n),
                    o
                );
            }
            return n(function () {});
        });
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
            return a(e, g().apiBaseUrl);
        }
        function i(e) {
            return a(e, y().apiBaseUrl);
        }
        function a(e, t) {
            (e.type = e.type || "get"), "POST" !== e.type.toUpperCase() || e.json || ((e.contentType = "application/json"), (e.data = (0, h.default)(e.data))), -1 == e.url.indexOf("http") && (e.url = "" + t + e.url);
            var n = { timeout: 8e3, xhrFields: { withCredentials: !0 }, crossDomain: !0 },
                r = (0, d.default)({}, n, e);
            return m.default.ajax(r);
        }
        function u(e) {
            return new Date(e)
                .toLocaleDateString()
                .replace(/\//g, ".")
                .replace(/(\b\d\b)/, "0$1");
        }
        function l(e) {
            (0, m.default)(e).on(
                "touchmove",
                function (e) {
                    e.preventDefault();
                },
                !1
            );
        }
        function c(e) {
            (0, m.default)(e).off(
                "touchmove",
                function (e) {
                    e.preventDefault();
                },
                !1
            );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEnvApiActvitiy = t.getEnvConst = t.gtagLandmine = void 0);
        var f = n(60),
            d = r(f),
            p = n(54),
            h = r(p);
        (t._Http = o), (t._HttpForActivity = i), (t.timeFormat = u), (t.preventTouchScroll = l), (t.dropTouchScroll = c);
        var v = n(56),
            m = r(v);
    },
    function (e, t, n) {
        e.exports = { default: n(61), __esModule: !0 };
    },
    function (e, t, n) {
        n(62), (e.exports = n(16).Object.assign);
    },
    function (e, t, n) {
        var r = n(14);
        r(r.S + r.F, "Object", { assign: n(63) });
    },
    function (e, t, n) {
        "use strict";
        var r = n(24),
            o = n(34),
            i = n(64),
            a = n(65),
            s = n(48),
            u = n(9),
            l = Object.assign;
        e.exports =
            !l ||
            n(25)(function () {
                var e = {},
                    t = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return (
                    (e[n] = 7),
                    r.split("").forEach(function (e) {
                        t[e] = e;
                    }),
                    7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
                );
            })
                ? function (e, t) {
                      for (var n = s(e), l = arguments.length, c = 1, f = i.f, d = a.f; l > c; )
                          for (var p, h = u(arguments[c++]), v = f ? o(h).concat(f(h)) : o(h), m = v.length, g = 0; m > g; ) (p = v[g++]), (r && !d.call(h, p)) || (n[p] = h[p]);
                      return n;
                  }
                : l;
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t) {
        t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
        "use strict";
        function r(e, t) {
            window.localStorage.setItem(e, (0, u.default)(t));
        }
        function o(e) {
            window.localStorage.getItem(e);
        }
        function i(e) {
            var t = window.localStorage.getItem(e);
            return t ? JSON.parse(t) : null;
        }
        function a(e) {
            window.localStorage.removeItem(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(54),
            u = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(s);
        t.default = { set: r, get: o, remove: a, getJson: i };
    },
    function (e, t, n) {
        "use strict";
        function r() {
            (0, u.default)(".nav-search").click(function () {
                o(), (0, u.default)("#search-bar").css("display", "flex");
            }),
                (0, u.default)(".search-input").keyup(function () {
                    if (13 === (event.which || event.keyCode)) return void (0, u.default)(".to-search").click();
                    (0, u.default)(this).val() ? ((0, u.default)(".search-input-container .icon-close").show(), (0, u.default)(".hot-item").hide()) : (0, u.default)(".hot-item").show();
                }),
                (0, u.default)(".search-input-container .icon-close").click(function () {
                    (0, u.default)(".search-input").val(""), i(window.keywords), (0, u.default)(this).hide();
                }),
                (0, u.default)(".search-input").focus(function () {
                    window.innerWidth < 768 && o(), (0, u.default)(".hot-search").show();
                }),
                (0, u.default)(".to-search").click(function () {
                    var e = (0, u.default)(".search-input").val();
                    if (e) {
                        var t = (0, u.default)(".search-input-container .search-input").attr("data-domain");
                        window.location = t + "/search?keyword=" + e;
                    }
                }),
                (0, u.default)("body").on("click", ".hot-search ul li", function () {
                    var e = (0, u.default)(this).text(),
                        t = (0, u.default)(".search-input-container .search-input").attr("data-domain");
                    window.location = t + "/search?keyword=" + e;
                });
        }
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = [];
            e &&
                e.map(function (e) {
                    t.push("<li>" + e + "</li>");
                });
            var n = t.join("");
            (0, u.default)(".hot-search .hot-item").show(), (0, u.default)(".hot-search ul").html(n);
        }
        function a() {
            (0, u.default)("body").click(function (e) {
                var t = window.innerWidth < 769,
                    n = (0, u.default)(e.target).closest("#search-bar").length,
                    r = (0, u.default)(e.target).closest(".nav-search").length,
                    o = "none" !== (0, u.default)("#search-bar").css("display");
                n || !o || r || t || (0, u.default)("#search-bar").hide();
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(56),
            u = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(s);
        n(59);
        t.default = { getSearchTab: r, closeSearchTab: a };
    },
]);
