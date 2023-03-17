(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [760], {
        21082: function() {},
        30719: function(e, t, i) {
            "use strict";
            i.d(t, {
                tq: function() {
                    return T
                },
                o5: function() {
                    return b
                }
            });
            var s = i(67294),
                r = i(965);

            function n(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function l(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : l(e[i], t[i]) : e[i] = t[i]
                })
            }

            function a(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function u(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let c = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
                p = (e, t) => {
                    let i = t.slidesPerView;
                    if (t.breakpoints) {
                        let s = r.ZP.prototype.getBreakpoint(t.breakpoints),
                            n = s in t.breakpoints ? t.breakpoints[s] : void 0;
                        n && n.slidesPerView && (i = n.slidesPerView)
                    }
                    let l = Math.ceil(parseFloat(t.loopedSlides || i, 10));
                    return (l += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (l = e.length), l
                };

            function h(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let f = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function m(e, t) {
                return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
            }
            let g = (0, s.createContext)(null),
                v = (0, s.createContext)(null);

            function w() {
                return (w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            let T = (0, s.forwardRef)(function(e, t) {
                let {
                    className: i,
                    tag: g = "div",
                    wrapperTag: T = "div",
                    children: S,
                    onSwiper: b,
                    ...y
                } = void 0 === e ? {} : e, E = !1, [x, C] = (0, s.useState)("swiper"), [M, P] = (0, s.useState)(null), [k, O] = (0, s.useState)(!1), L = (0, s.useRef)(!1), _ = (0, s.useRef)(null), $ = (0, s.useRef)(null), z = (0, s.useRef)(null), A = (0, s.useRef)(null), D = (0, s.useRef)(null), I = (0, s.useRef)(null), N = (0, s.useRef)(null), B = (0, s.useRef)(null), {
                    params: G,
                    passedParams: j,
                    rest: R,
                    events: V
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        a = {};
                    l(i, r.ZP.defaults), l(i, r.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let o = {},
                        d = c.map(e => e.replace(/_/, "")),
                        u = Object.assign({}, e);
                    return Object.keys(u).forEach(r => {
                        void 0 !== e[r] && (d.indexOf(r) >= 0 ? n(e[r]) ? (i[r] = {}, a[r] = {}, l(i[r], e[r]), l(a[r], e[r])) : (i[r] = e[r], a[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r] ? t ? s[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : o[r] = e[r])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: a,
                        rest: o,
                        events: s
                    }
                }(y), {
                    slides: F,
                    slots: H
                } = function(e) {
                    let t = [],
                        i = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return s.Children.toArray(e).forEach(e => {
                        if (h(e)) t.push(e);
                        else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let r = function e(t) {
                                let i = [];
                                return s.Children.toArray(t).forEach(t => {
                                    h(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                }), i
                            }(e.props.children);
                            r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: i
                    }
                }(S), W = () => {
                    O(!k)
                };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        C(t)
                    }
                });
                let q = () => {
                    if (Object.assign(G.on, V), E = !0, $.current = new r.ZP(G), $.current.loopCreate = () => {}, $.current.loopDestroy = () => {}, G.loop && ($.current.loopedSlides = p(F, G)), $.current.virtual && $.current.params.virtual.enabled) {
                        $.current.virtual.slides = F;
                        let e = {
                            cache: !1,
                            slides: F,
                            renderExternal: P,
                            renderExternalUpdate: !1
                        };
                        l($.current.params.virtual, e), l($.current.originalParams.virtual, e)
                    }
                };
                _.current || q(), $.current && $.current.on("_beforeBreakpoint", W);
                let X = () => {
                        !E && V && $.current && Object.keys(V).forEach(e => {
                            $.current.on(e, V[e])
                        })
                    },
                    Y = () => {
                        V && $.current && Object.keys(V).forEach(e => {
                            $.current.off(e, V[e])
                        })
                    };
                return (0, s.useEffect)(() => () => {
                    $.current && $.current.off("_beforeBreakpoint", W)
                }), (0, s.useEffect)(() => {
                    !L.current && $.current && ($.current.emitSlidesClasses(), L.current = !0)
                }), m(() => {
                    if (t && (t.current = _.current), _.current) return $.current.destroyed && q(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: i,
                            paginationEl: s,
                            scrollbarEl: r,
                            swiper: n
                        }, l) {
                            a(l) && t && i && (n.params.navigation.nextEl = t, n.originalParams.navigation.nextEl = t, n.params.navigation.prevEl = i, n.originalParams.navigation.prevEl = i), o(l) && s && (n.params.pagination.el = s, n.originalParams.pagination.el = s), d(l) && r && (n.params.scrollbar.el = r, n.originalParams.scrollbar.el = r), n.init(e)
                        }({
                            el: _.current,
                            nextEl: D.current,
                            prevEl: I.current,
                            paginationEl: N.current,
                            scrollbarEl: B.current,
                            swiper: $.current
                        }, G), b && b($.current), () => {
                            $.current && !$.current.destroyed && $.current.destroy(!0, !1)
                        }
                }, []), m(() => {
                    X();
                    let e = function(e, t, i, s, r) {
                        let l = [];
                        if (!t) return l;
                        let a = e => {
                            0 > l.indexOf(e) && l.push(e)
                        };
                        if (i && s) {
                            let o = s.map(r),
                                d = i.map(r);
                            o.join("") !== d.join("") && a("children"), s.length !== i.length && a("children")
                        }
                        let u = c.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return u.forEach(i => {
                            if (i in e && i in t) {
                                if (n(e[i]) && n(t[i])) {
                                    let s = Object.keys(e[i]),
                                        r = Object.keys(t[i]);
                                    s.length !== r.length ? a(i) : (s.forEach(s => {
                                        e[i][s] !== t[i][s] && a(i)
                                    }), r.forEach(s => {
                                        e[i][s] !== t[i][s] && a(i)
                                    }))
                                } else e[i] !== t[i] && a(i)
                            }
                        }), l
                    }(j, z.current, F, A.current, e => e.key);
                    return z.current = j, A.current = F, e.length && $.current && !$.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: i,
                        changedParams: s,
                        nextEl: r,
                        prevEl: a,
                        scrollbarEl: o,
                        paginationEl: d
                    }) {
                        let u, c, p, h, f;
                        let m = s.filter(e => "children" !== e && "direction" !== e),
                            {
                                params: g,
                                pagination: v,
                                navigation: w,
                                scrollbar: T,
                                virtual: S,
                                thumbs: b
                            } = e;
                        s.includes("thumbs") && i.thumbs && i.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (u = !0), s.includes("controller") && i.controller && i.controller.control && g.controller && !g.controller.control && (c = !0), s.includes("pagination") && i.pagination && (i.pagination.el || d) && (g.pagination || !1 === g.pagination) && v && !v.el && (p = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (g.scrollbar || !1 === g.scrollbar) && T && !T.el && (h = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || r) && (g.navigation || !1 === g.navigation) && w && !w.prevEl && !w.nextEl && (f = !0);
                        let y = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (g[t].prevEl = void 0, g[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (g[t].el = void 0, e[t].el = void 0))
                        };
                        if (m.forEach(e => {
                                if (n(g[e]) && n(i[e])) l(g[e], i[e]);
                                else {
                                    let t = i[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && y(e): g[e] = i[e]
                                }
                            }), m.includes("controller") && !c && e.controller && e.controller.control && g.controller && g.controller.control && (e.controller.control = g.controller.control), s.includes("children") && t && S && g.virtual.enabled ? (S.slides = t, S.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), u) {
                            let E = b.init();
                            E && b.update(!0)
                        }
                        c && (e.controller.control = g.controller.control), p && (d && (g.pagination.el = d), v.init(), v.render(), v.update()), h && (o && (g.scrollbar.el = o), T.init(), T.updateSize(), T.setTranslate()), f && (r && (g.navigation.nextEl = r), a && (g.navigation.prevEl = a), w.init(), w.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), e.update()
                    }({
                        swiper: $.current,
                        slides: F,
                        passedParams: j,
                        changedParams: e,
                        nextEl: D.current,
                        prevEl: I.current,
                        scrollbarEl: B.current,
                        paginationEl: N.current
                    }), () => {
                        Y()
                    }
                }), m(() => {
                    f($.current)
                }, [M]), s.createElement(g, w({
                    ref: _,
                    className: u(`${x}${i?` ${i}`:""}`)
                }, R), s.createElement(v.Provider, {
                    value: $.current
                }, H["container-start"], s.createElement(T, {
                    className: "swiper-wrapper"
                }, H["wrapper-start"], G.virtual ? function(e, t, i) {
                    if (!i) return null;
                    let r = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                    } : {
                        top: `${i.offset}px`
                    };
                    return t.filter((e, t) => t >= i.from && t <= i.to).map(t => s.cloneElement(t, {
                        swiper: e,
                        style: r
                    }))
                }($.current, F, M) : !G.loop || $.current && $.current.destroyed ? F.map(e => s.cloneElement(e, {
                    swiper: $.current
                })) : function(e, t, i) {
                    let r = t.map((t, i) => s.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": i
                    }));

                    function n(e, t, r) {
                        return s.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${r}`,
                            className: `${e.props.className||""} ${i.slideDuplicateClass}`
                        })
                    }
                    if (i.loopFillGroupWithBlank) {
                        let l = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (l !== i.slidesPerGroup)
                            for (let a = 0; a < l; a += 1) {
                                let o = s.createElement("div", {
                                    className: `${i.slideClass} ${i.slideBlankClass}`
                                });
                                r.push(o)
                            }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length);
                    let d = p(r, i),
                        u = [],
                        c = [];
                    for (let h = 0; h < d; h += 1) {
                        let f = h - Math.floor(h / r.length) * r.length;
                        c.push(n(r[f], h, "append")), u.unshift(n(r[r.length - f - 1], h, "prepend"))
                    }
                    return e && (e.loopedSlides = d), [...u, ...r, ...c]
                }($.current, F, G), H["wrapper-end"]), a(G) && s.createElement(s.Fragment, null, s.createElement("div", {
                    ref: I,
                    className: "swiper-button-prev"
                }), s.createElement("div", {
                    ref: D,
                    className: "swiper-button-next"
                })), d(G) && s.createElement("div", {
                    ref: B,
                    className: "swiper-scrollbar"
                }), o(G) && s.createElement("div", {
                    ref: N,
                    className: "swiper-pagination"
                }), H["container-end"]))
            });

            function S() {
                return (S = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            T.displayName = "Swiper";
            let b = (0, s.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: r,
                    className: n = "",
                    swiper: l,
                    zoom: a,
                    virtualIndex: o,
                    ...d
                } = void 0 === e ? {} : e, c = (0, s.useRef)(null), [p, h] = (0, s.useState)("swiper-slide");

                function f(e, t, i) {
                    t === c.current && h(i)
                }
                m(() => {
                    if (t && (t.current = c.current), c.current && l) {
                        if (l.destroyed) {
                            "swiper-slide" !== p && h("swiper-slide");
                            return
                        }
                        return l.on("_slideClass", f), () => {
                            l && l.off("_slideClass", f)
                        }
                    }
                }), m(() => {
                    l && c.current && !l.destroyed && h(l.getSlideClasses(c.current))
                }, [l]);
                let v = {
                        isActive: p.indexOf("swiper-slide-active") >= 0 || p.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: p.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: p.indexOf("swiper-slide-prev") >= 0 || p.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: p.indexOf("swiper-slide-next") >= 0 || p.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    w = () => "function" == typeof r ? r(v) : r;
                return s.createElement(i, S({
                    ref: c,
                    className: u(`${p}${n?` ${n}`:""}`),
                    "data-swiper-slide-index": o
                }, d), s.createElement(g.Provider, {
                    value: v
                }, a ? s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof a ? a : void 0
                }, w()) : w()))
            });
            b.displayName = "SwiperSlide"
        },
        965: function(e, t, i) {
            "use strict";
            let s, r, n;

            function l(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function a(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i])
                })
            }
            i.d(t, {
                pt: function() {
                    return V
                },
                Rv: function() {
                    return F
                },
                ZP: function() {
                    return R
                }
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                let e = "undefined" != typeof document ? document : {};
                return a(e, o), e
            }
            let u = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function c() {
                let e = "undefined" != typeof window ? window : {};
                return a(e, u), e
            }
            class p extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                        let t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function h(e = []) {
                let t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...h(e)) : t.push(e)
                }), t
            }

            function f(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function m(e, t) {
                let i = c(),
                    s = d(),
                    r = [];
                if (!t && e instanceof p) return e;
                if (!e) return new p(r);
                if ("string" == typeof e) {
                    let n = e.trim();
                    if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                        let l = "div";
                        0 === n.indexOf("<li") && (l = "ul"), 0 === n.indexOf("<tr") && (l = "tbody"), (0 === n.indexOf("<td") || 0 === n.indexOf("<th")) && (l = "tr"), 0 === n.indexOf("<tbody") && (l = "table"), 0 === n.indexOf("<option") && (l = "select");
                        let a = s.createElement(l);
                        a.innerHTML = n;
                        for (let o = 0; o < a.childNodes.length; o += 1) r.push(a.childNodes[o])
                    } else r = function(e, t) {
                        if ("string" != typeof e) return [e];
                        let i = [],
                            s = t.querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1) i.push(s[r]);
                        return i
                    }(e.trim(), t || s)
                } else if (e.nodeType || e === i || e === s) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof p) return e;
                    r = e
                }
                return new p(function(e) {
                    let t = [];
                    for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }(r))
            }
            m.fn = p.prototype;
            let g = "resize scroll".split(" ");

            function v(e) {
                return function(...t) {
                    if (void 0 === t[0]) {
                        for (let i = 0; i < this.length; i += 1) 0 > g.indexOf(e) && (e in this[i] ? this[i][e]() : m(this[i]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            v("click"), v("blur"), v("focus"), v("focusin"), v("focusout"), v("keyup"), v("keydown"), v("keypress"), v("submit"), v("change"), v("mousedown"), v("mousemove"), v("mouseup"), v("mouseenter"), v("mouseleave"), v("mouseout"), v("mouseover"), v("touchstart"), v("touchend"), v("touchmove"), v("resize"), v("scroll");
            let w = {
                addClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...t)
                    }), this
                },
                removeClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...t)
                    }), this
                },
                hasClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    return f(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
                },
                toggleClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    this.forEach(e => {
                        t.forEach(t => {
                            e.classList.toggle(t)
                        })
                    })
                },
                attr: function(e, t) {
                    if (1 == arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 == arguments.length) this[i].setAttribute(e, t);
                        else
                            for (let s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let t, [i, s, r, n] = e;

                    function l(e) {
                        let t = e.target;
                        if (!t) return;
                        let i = e.target.dom7EventData || [];
                        if (0 > i.indexOf(e) && i.unshift(e), m(t).is(s)) r.apply(t, i);
                        else {
                            let n = m(t).parents();
                            for (let l = 0; l < n.length; l += 1) m(n[l]).is(s) && r.apply(n[l], i)
                        }
                    }

                    function a(e) {
                        let t = e && e.target && e.target.dom7EventData || [];
                        0 > t.indexOf(e) && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof e[1] && ([i, r, n] = e, s = void 0), n || (n = !1);
                    let o = i.split(" ");
                    for (let d = 0; d < this.length; d += 1) {
                        let u = this[d];
                        if (s)
                            for (t = 0; t < o.length; t += 1) {
                                let c = o[t];
                                u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
                                    listener: r,
                                    proxyListener: l
                                }), u.addEventListener(c, l, n)
                            } else
                                for (t = 0; t < o.length; t += 1) {
                                    let p = o[t];
                                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[p] || (u.dom7Listeners[p] = []), u.dom7Listeners[p].push({
                                        listener: r,
                                        proxyListener: a
                                    }), u.addEventListener(p, a, n)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, i, s, r] = e;
                    "function" == typeof e[1] && ([t, s, r] = e, i = void 0), r || (r = !1);
                    let n = t.split(" ");
                    for (let l = 0; l < n.length; l += 1) {
                        let a = n[l];
                        for (let o = 0; o < this.length; o += 1) {
                            let d;
                            let u = this[o];
                            if (!i && u.dom7Listeners ? d = u.dom7Listeners[a] : i && u.dom7LiveListeners && (d = u.dom7LiveListeners[a]), d && d.length)
                                for (let c = d.length - 1; c >= 0; c -= 1) {
                                    let p = d[c];
                                    s && p.listener === s ? (u.removeEventListener(a, p.proxyListener, r), d.splice(c, 1)) : s && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === s ? (u.removeEventListener(a, p.proxyListener, r), d.splice(c, 1)) : s || (u.removeEventListener(a, p.proxyListener, r), d.splice(c, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    let t = c(),
                        i = e[0].split(" "),
                        s = e[1];
                    for (let r = 0; r < i.length; r += 1) {
                        let n = i[r];
                        for (let l = 0; l < this.length; l += 1) {
                            let a = this[l];
                            if (t.CustomEvent) {
                                let o = new t.CustomEvent(n, {
                                    detail: s,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                a.dom7EventData = e.filter((e, t) => t > 0), a.dispatchEvent(o), a.dom7EventData = [], delete a.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    let t = this;
                    return e && t.on("transitionend", function i(s) {
                        s.target === this && (e.call(this, s), t.off("transitionend", i))
                    }), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let e = c();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let e = c(),
                            t = d(),
                            i = this[0],
                            s = i.getBoundingClientRect(),
                            r = t.body,
                            n = i.clientTop || r.clientTop || 0,
                            l = i.clientLeft || r.clientLeft || 0,
                            a = i === e ? e.scrollY : i.scrollTop,
                            o = i === e ? e.scrollX : i.scrollLeft;
                        return {
                            top: s.top + a - n,
                            left: s.left + o - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    let s = c();
                    if (1 == arguments.length) {
                        if ("string" == typeof e) {
                            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                        } else {
                            for (i = 0; i < this.length; i += 1)
                                for (let r in e) this[i].style[r] = e[r];
                            return this
                        }
                    }
                    if (2 == arguments.length && "string" == typeof e)
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                },
                each: function(e) {
                    return e && this.forEach((t, i) => {
                        e.apply(t, [t, i])
                    }), this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    let t, i;
                    let s = c(),
                        r = d(),
                        n = this[0];
                    if (!n || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (i = 0, t = m(e); i < t.length; i += 1)
                            if (t[i] === n) return !0;
                        return !1
                    }
                    if (e === r) return n === r;
                    if (e === s) return n === s;
                    if (e.nodeType || e instanceof p) {
                        for (i = 0, t = e.nodeType ? [e] : e; i < t.length; i += 1)
                            if (t[i] === n) return !0
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    let t = this.length;
                    if (e > t - 1) return m([]);
                    if (e < 0) {
                        let i = t + e;
                        return i < 0 ? m([]) : m([this[i]])
                    }
                    return m([this[e]])
                },
                append: function(...e) {
                    let t;
                    let i = d();
                    for (let s = 0; s < e.length; s += 1) {
                        t = e[s];
                        for (let r = 0; r < this.length; r += 1)
                            if ("string" == typeof t) {
                                let n = i.createElement("div");
                                for (n.innerHTML = t; n.firstChild;) this[r].appendChild(n.firstChild)
                            } else if (t instanceof p)
                            for (let l = 0; l < t.length; l += 1) this[r].appendChild(t[l]);
                        else this[r].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let t, i;
                    let s = d();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            let r = s.createElement("div");
                            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(r.childNodes[i], this[t].childNodes[0])
                        } else if (e instanceof p)
                        for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    if (this.length > 0) {
                        if (e) return this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]);
                        if (this[0].nextElementSibling) return m([this[0].nextElementSibling])
                    }
                    return m([])
                },
                nextAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return m([]);
                    for (; i.nextElementSibling;) {
                        let s = i.nextElementSibling;
                        e ? m(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return m(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]);
                        if (t.previousElementSibling) return m([t.previousElementSibling])
                    }
                    return m([])
                },
                prevAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return m([]);
                    for (; i.previousElementSibling;) {
                        let s = i.previousElementSibling;
                        e ? m(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return m(t)
                },
                parent: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return m(t)
                },
                parents: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].parentNode;
                        for (; s;) e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                    }
                    return m(t)
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1) t.push(s[r])
                    }
                    return m(t)
                },
                children: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].children;
                        for (let r = 0; r < s.length; r += 1)(!e || m(s[r]).is(e)) && t.push(s[r])
                    }
                    return m(t)
                },
                filter: function(e) {
                    let t = f(this, e);
                    return m(t)
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };

            function T(e, t = 0) {
                return setTimeout(e, t)
            }

            function S() {
                return Date.now()
            }

            function b(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function y(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                        let n = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let l = 0, a = n.length; l < a; l += 1) {
                            let o = n[l],
                                d = Object.getOwnPropertyDescriptor(r, o);
                            void 0 !== d && d.enumerable && (b(t[o]) && b(r[o]) ? r[o].__swiper__ ? t[o] = r[o] : y(t[o], r[o]) : !b(t[o]) && b(r[o]) ? (t[o] = {}, r[o].__swiper__ ? t[o] = r[o] : y(t[o], r[o])) : t[o] = r[o])
                        }
                    }
                }
                return t
            }

            function E(e, t, i) {
                e.style.setProperty(t, i)
            }

            function x({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s;
                let r = c(),
                    n = -e.translate,
                    l = null,
                    a = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > n ? "next" : "prev",
                    d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    u = () => {
                        s = new Date().getTime(), null === l && (l = s);
                        let o = Math.max(Math.min((s - l) / a, 1), 0),
                            c = n + (.5 - Math.cos(o * Math.PI) / 2) * (t - n);
                        if (d(c, t) && (c = t), e.wrapperEl.scrollTo({
                                [i]: c
                            }), d(c, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: c
                                })
                            }), r.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(u)
                    };
                u()
            }

            function C() {
                return s || (s = function() {
                    let e = c(),
                        t = d();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                let i = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, i)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), s
            }

            function M({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: n
                } = e, l = i;
                if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== n) {
                    if ("reset" === l) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === l ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function P(e) {
                let t = this,
                    i = d(),
                    s = c(),
                    r = t.touchEventsData,
                    {
                        params: n,
                        touches: l,
                        enabled: a
                    } = t;
                if (!a || t.animating && n.preventInteractionOnTransition) return;
                !t.animating && n.cssMode && n.loop && t.loopFix();
                let o = e;
                o.originalEvent && (o = o.originalEvent);
                let u = m(o.target);
                if ("wrapper" === n.touchEventsTarget && !u.closest(t.wrapperEl).length || (r.isTouchEvent = "touchstart" === o.type, !r.isTouchEvent && "which" in o && 3 === o.which || !r.isTouchEvent && "button" in o && o.button > 0 || r.isTouched && r.isMoved)) return;
                let p = !!n.noSwipingClass && "" !== n.noSwipingClass,
                    h = e.composedPath ? e.composedPath() : e.path;
                p && o.target && o.target.shadowRoot && h && (u = m(h[0]));
                let f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
                    g = !!(o.target && o.target.shadowRoot);
                if (n.noSwiping && (g ? function(e, t = this) {
                        return function t(i) {
                            if (!i || i === d() || i === c()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            let s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                    }(f, u[0]) : u.closest(f)[0])) {
                    t.allowClick = !0;
                    return
                }
                if (n.swipeHandler && !u.closest(n.swipeHandler)[0]) return;
                l.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, l.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                let v = l.currentX,
                    w = l.currentY,
                    T = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    b = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (T && (v <= b || v >= s.innerWidth - b)) {
                    if ("prevent" !== T) return;
                    e.preventDefault()
                }
                if (Object.assign(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = v, l.startY = w, r.touchStartTime = S(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== o.type) {
                    let y = !0;
                    u.is(r.focusableElements) && (y = !1, "SELECT" === u[0].nodeName && (r.isTouched = !1)), i.activeElement && m(i.activeElement).is(r.focusableElements) && i.activeElement !== u[0] && i.activeElement.blur();
                    let E = y && t.allowTouchMove && n.touchStartPreventDefault;
                    (n.touchStartForcePreventDefault || E) && !u[0].isContentEditable && o.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
            }

            function k(e) {
                let t = d(),
                    i = this,
                    s = i.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: l,
                        enabled: a
                    } = i;
                if (!a) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
                    return
                }
                if (s.isTouchEvent && "touchmove" !== o.type) return;
                let u = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                    c = "touchmove" === o.type ? u.pageX : o.pageX,
                    p = "touchmove" === o.type ? u.pageY : o.pageY;
                if (o.preventedByNestedSwiper) {
                    n.startX = c, n.startY = p;
                    return
                }
                if (!i.allowTouchMove) {
                    m(o.target).is(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(n, {
                        startX: c,
                        startY: p,
                        currentX: c,
                        currentY: p
                    }), s.touchStartTime = S());
                    return
                }
                if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
                    if (i.isVertical()) {
                        if (p < n.startY && i.translate <= i.maxTranslate() || p > n.startY && i.translate >= i.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (c < n.startX && i.translate <= i.maxTranslate() || c > n.startX && i.translate >= i.minTranslate()) return
                }
                if (s.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(s.focusableElements)) {
                    s.isMoved = !0, i.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && i.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
                n.currentX = c, n.currentY = p;
                let h = n.currentX - n.startX,
                    f = n.currentY - n.startY;
                if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let g;
                    i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (g = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = i.isHorizontal() ? g > r.touchAngle : 90 - g > r.touchAngle)
                }
                if (s.isScrolling && i.emit("touchMoveOpposite", o), void 0 === s.startMoving && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                i.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), s.isMoved || (r.loop && !r.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, r.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), s.isMoved = !0;
                let v = i.isHorizontal() ? h : f;
                n.diff = v, v *= r.touchRatio, l && (v = -v), i.swipeDirection = v > 0 ? "prev" : "next", s.currentTranslate = v + s.startTranslate;
                let w = !0,
                    T = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (T = 0), v > 0 && s.currentTranslate > i.minTranslate() ? (w = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** T)) : v < 0 && s.currentTranslate < i.maxTranslate() && (w = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** T)), w && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                    if (Math.abs(v) > r.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    }
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
            }

            function O(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: l,
                        slidesGrid: a,
                        enabled: o
                    } = i;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && r.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                r.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let u = S(),
                    c = u - s.touchStartTime;
                if (i.allowClick) {
                    let p = d.path || d.composedPath && d.composedPath();
                    i.updateClickedSlide(p && p[0] || d.target), i.emit("tap click", d), c < 300 && u - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", d)
                }
                if (s.lastClickTime = S(), T(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = r.followFinger ? l ? i.translate : -i.translate : -s.currentTranslate, r.cssMode) return;
                if (i.params.freeMode && r.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let h = 0,
                    f = i.slidesSizesGrid[0];
                for (let m = 0; m < a.length; m += m < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    let g = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    void 0 !== a[m + g] ? t >= a[m] && t < a[m + g] && (h = m, f = a[m + g] - a[m]) : t >= a[m] && (h = m, f = a[a.length - 1] - a[a.length - 2])
                }
                let v = null,
                    w = null;
                r.rewind && (i.isBeginning ? w = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
                let b = (t - a[h]) / f,
                    y = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (c > r.longSwipesMs) {
                    if (!r.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (b >= r.longSwipesRatio ? i.slideTo(r.rewind && i.isEnd ? v : h + y) : i.slideTo(h)), "prev" === i.swipeDirection && (b > 1 - r.longSwipesRatio ? i.slideTo(h + y) : null !== w && b < 0 && Math.abs(b) > r.longSwipesRatio ? i.slideTo(w) : i.slideTo(h))
                } else {
                    if (!r.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let E = i.navigation && (d.target === i.navigation.nextEl || d.target === i.navigation.prevEl);
                    E ? d.target === i.navigation.nextEl ? i.slideTo(h + y) : i.slideTo(h) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : h + y), "prev" === i.swipeDirection && i.slideTo(null !== w ? w : h))
                }
            }

            function L() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: n
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
            }

            function _(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function $() {
                let e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: s
                    } = e;
                if (!s) return;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                let r = e.maxTranslate() - e.minTranslate();
                (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            Object.keys(w).forEach(e => {
                Object.defineProperty(m.fn, e, {
                    value: w[e],
                    writable: !0
                })
            });
            let z = !1;

            function A() {}
            let D = (e, t) => {
                    let i = d(),
                        {
                            params: s,
                            touchEvents: r,
                            el: n,
                            wrapperEl: l,
                            device: a,
                            support: o
                        } = e,
                        u = !!s.nested,
                        c = "on" === t ? "addEventListener" : "removeEventListener";
                    if (o.touch) {
                        let p = "touchstart" === r.start && !!o.passiveListener && !!s.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        n[c](r.start, e.onTouchStart, p), n[c](r.move, e.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: u
                        } : u), n[c](r.end, e.onTouchEnd, p), r.cancel && n[c](r.cancel, e.onTouchEnd, p)
                    } else n[c](r.start, e.onTouchStart, !1), i[c](r.move, e.onTouchMove, u), i[c](r.end, e.onTouchEnd, !1);
                    (s.preventClicks || s.preventClicksPropagation) && n[c]("click", e.onClick, !0), s.cssMode && l[c]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L, !0) : e[t]("observerUpdate", L, !0)
                },
                I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var N = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
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
                _emitClasses: !1
            };
            let B = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r(...i) {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(s, i)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t, i, s;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s);
                            let n = Array.isArray(t) ? t : t.split(" ");
                            return n.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                                    t.apply(s, [e, ...i])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, i)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.$el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function s(e, t) {
                                return parseFloat(e.getPropertyValue(i(t)) || 0)
                            }
                            let r = t.params,
                                {
                                    $wrapperEl: n,
                                    size: l,
                                    rtlTranslate: a,
                                    wrongRTL: o
                                } = t,
                                d = t.virtual && r.virtual.enabled,
                                u = d ? t.virtual.slides.length : t.slides.length,
                                c = n.children(`.${t.params.slideClass}`),
                                p = d ? t.virtual.slides.length : c.length,
                                h = [],
                                f = [],
                                m = [],
                                g = r.slidesOffsetBefore;
                            "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
                            let v = r.slidesOffsetAfter;
                            "function" == typeof v && (v = r.slidesOffsetAfter.call(t));
                            let w = t.snapGrid.length,
                                T = t.slidesGrid.length,
                                S = r.spaceBetween,
                                b = -g,
                                y = 0,
                                x = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 && (S = parseFloat(S.replace("%", "")) / 100 * l), t.virtualSize = -S, a ? c.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : c.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), r.centeredSlides && r.cssMode && (E(t.wrapperEl, "--swiper-centered-offset-before", ""), E(t.wrapperEl, "--swiper-centered-offset-after", ""));
                            let C = r.grid && r.grid.rows > 1 && t.grid;
                            C && t.grid.initSlides(p);
                            let M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let P = 0; P < p; P += 1) {
                                e = 0;
                                let k = c.eq(P);
                                if (C && t.grid.updateSlide(P, k, p, i), "none" !== k.css("display")) {
                                    if ("auto" === r.slidesPerView) {
                                        M && (c[P].style[i("width")] = "");
                                        let O = getComputedStyle(k[0]),
                                            L = k[0].style.transform,
                                            _ = k[0].style.webkitTransform;
                                        if (L && (k[0].style.transform = "none"), _ && (k[0].style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
                                        else {
                                            let $ = s(O, "width"),
                                                z = s(O, "padding-left"),
                                                A = s(O, "padding-right"),
                                                D = s(O, "margin-left"),
                                                I = s(O, "margin-right"),
                                                N = O.getPropertyValue("box-sizing");
                                            if (N && "border-box" === N) e = $ + D + I;
                                            else {
                                                let {
                                                    clientWidth: B,
                                                    offsetWidth: G
                                                } = k[0];
                                                e = $ + z + A + D + I + (G - B)
                                            }
                                        }
                                        L && (k[0].style.transform = L), _ && (k[0].style.webkitTransform = _), r.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), c[P] && (c[P].style[i("width")] = `${e}px`);
                                    c[P] && (c[P].swiperSlideSize = e), m.push(e), r.centeredSlides ? (b = b + e / 2 + y / 2 + S, 0 === y && 0 !== P && (b = b - l / 2 - S), 0 === P && (b = b - l / 2 - S), .001 > Math.abs(b) && (b = 0), r.roundLengths && (b = Math.floor(b)), x % r.slidesPerGroup == 0 && h.push(b), f.push(b)) : (r.roundLengths && (b = Math.floor(b)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && h.push(b), f.push(b), b = b + e + S), t.virtualSize += e + S, y = e, x += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + v, a && o && ("slide" === r.effect || "coverflow" === r.effect) && n.css({
                                    width: `${t.virtualSize+r.spaceBetween}px`
                                }), r.setWrapperSize && n.css({
                                    [i("width")]: `${t.virtualSize+r.spaceBetween}px`
                                }), C && t.grid.updateWrapperSize(e, h, i), !r.centeredSlides) {
                                let j = [];
                                for (let R = 0; R < h.length; R += 1) {
                                    let V = h[R];
                                    r.roundLengths && (V = Math.floor(V)), h[R] <= t.virtualSize - l && j.push(V)
                                }
                                h = j, Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - l)
                            }
                            if (0 === h.length && (h = [0]), 0 !== r.spaceBetween) {
                                let F = t.isHorizontal() && a ? "marginLeft" : i("marginRight");
                                c.filter((e, t) => !r.cssMode || t !== c.length - 1).css({
                                    [F]: `${S}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let H = 0;
                                m.forEach(e => {
                                    H += e + (r.spaceBetween ? r.spaceBetween : 0)
                                }), H -= r.spaceBetween;
                                let W = H - l;
                                h = h.map(e => e < 0 ? -g : e > W ? W + v : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let q = 0;
                                if (m.forEach(e => {
                                        q += e + (r.spaceBetween ? r.spaceBetween : 0)
                                    }), (q -= r.spaceBetween) < l) {
                                    let X = (l - q) / 2;
                                    h.forEach((e, t) => {
                                        h[t] = e - X
                                    }), f.forEach((e, t) => {
                                        f[t] = e + X
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: c,
                                    snapGrid: h,
                                    slidesGrid: f,
                                    slidesSizesGrid: m
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                E(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`), E(t.wrapperEl, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
                                let Y = -t.snapGrid[0],
                                    U = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(e => e + Y), t.slidesGrid = t.slidesGrid.map(e => e + U)
                            }
                            if (p !== u && t.emit("slidesLengthChange"), h.length !== w && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== T && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), !d && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let Z = `${r.containerModifierClass}backface-hidden`,
                                    K = t.$el.hasClass(Z);
                                p <= r.maxBackfaceHiddenSlides ? K || t.$el.addClass(Z) : K && t.$el.removeClass(Z)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                n = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides.eq(e)[0];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || m([])).each(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let a = i.activeIndex + t;
                                        if (a > i.slides.length && !r) break;
                                        s.push(l(a))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let o = s[t].offsetHeight;
                                    n = o > n ? o : n
                                }(n || 0 === n) && i.$wrapperEl.css("height", `${n}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this,
                                i = t.params,
                                {
                                    slides: s,
                                    rtlTranslate: r,
                                    snapGrid: n
                                } = t;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                            let l = -e;
                            r && (l = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let a = 0; a < s.length; a += 1) {
                                let o = s[a],
                                    d = o.swiperSlideOffset;
                                i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                                let u = (l + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
                                    c = (l - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
                                    p = -(l - d),
                                    h = p + t.slidesSizesGrid[a],
                                    f = p >= 0 && p < t.size - 1 || h > 1 && h <= t.size || p <= 0 && h >= t.size;
                                f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(a), s.eq(a).addClass(i.slideVisibleClass)), o.progress = r ? -u : u, o.originalProgress = r ? -c : c
                            }
                            t.visibleSlides = m(t.visibleSlides)
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let i = this.params,
                                s = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: r,
                                    isBeginning: n,
                                    isEnd: l
                                } = this,
                                a = n,
                                o = l;
                            0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - this.minTranslate()) / s) <= 0, l = r >= 1), Object.assign(this, {
                                progress: r,
                                isBeginning: n,
                                isEnd: l
                            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), n && !a && this.emit("reachBeginning toEdge"), l && !o && this.emit("reachEnd toEdge"), (a && !n || o && !l) && this.emit("fromEdge"), this.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                $wrapperEl: s,
                                activeIndex: r,
                                realIndex: n
                            } = this, l = this.virtual && i.virtual.enabled;
                            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (e = l ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(i.slideDuplicateActiveClass));
                            let a = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                            i.loop && 0 === a.length && (a = t.eq(0)).addClass(i.slideNextClass);
                            let o = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                            i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t;
                            let i = this,
                                s = i.rtlTranslate ? i.translate : -i.translate,
                                {
                                    slidesGrid: r,
                                    snapGrid: n,
                                    params: l,
                                    activeIndex: a,
                                    realIndex: o,
                                    snapIndex: d
                                } = i,
                                u = e;
                            if (void 0 === u) {
                                for (let c = 0; c < r.length; c += 1) void 0 !== r[c + 1] ? s >= r[c] && s < r[c + 1] - (r[c + 1] - r[c]) / 2 ? u = c : s >= r[c] && s < r[c + 1] && (u = c + 1) : s >= r[c] && (u = c);
                                l.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                            }
                            if (n.indexOf(s) >= 0) t = n.indexOf(s);
                            else {
                                let p = Math.min(l.slidesPerGroupSkip, u);
                                t = p + Math.floor((u - p) / l.slidesPerGroup)
                            }
                            if (t >= n.length && (t = n.length - 1), u === a) {
                                t !== d && (i.snapIndex = t, i.emit("snapIndexChange"));
                                return
                            }
                            let h = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                            Object.assign(i, {
                                snapIndex: t,
                                realIndex: h,
                                previousIndex: a,
                                activeIndex: u
                            }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), o !== h && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let i = this,
                                s = i.params,
                                r = m(e).closest(`.${s.slideClass}`)[0],
                                n = !1;
                            if (r) {
                                for (let l = 0; l < i.slides.length; l += 1)
                                    if (i.slides[l] === r) {
                                        n = !0, t = l;
                                        break
                                    }
                            }
                            if (r && n) i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(m(r).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t;
                            else {
                                i.clickedSlide = void 0, i.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                $wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let n = function(e, t = "x") {
                                let i, s, r;
                                let n = c(),
                                    l = function(e) {
                                        let t;
                                        let i = c();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return n.WebKitCSSMatrix ? ((s = l.transform || l.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r[0], e);
                            return i && (n = -n), n || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: s,
                                    params: r,
                                    $wrapperEl: n,
                                    wrapperEl: l,
                                    progress: a
                                } = i,
                                o = 0,
                                d = 0;
                            i.isHorizontal() ? o = s ? -e : e : d = e, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), r.cssMode ? l[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : r.virtualTranslate || n.transform(`translate3d(${o}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d;
                            let u = i.maxTranslate() - i.minTranslate();
                            (0 === u ? 0 : (e - i.minTranslate()) / u) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let n;
                            let l = this,
                                {
                                    params: a,
                                    wrapperEl: o
                                } = l;
                            if (l.animating && a.preventInteractionOnTransition) return !1;
                            let d = l.minTranslate(),
                                u = l.maxTranslate();
                            if (n = s && e > d ? d : s && e < u ? u : e, l.updateProgress(n), a.cssMode) {
                                let c = l.isHorizontal();
                                if (0 === t) o[c ? "scrollLeft" : "scrollTop"] = -n;
                                else {
                                    if (!l.support.smoothScroll) return x({
                                        swiper: l,
                                        targetPosition: -n,
                                        side: c ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [c ? "left" : "top"]: -n,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(n), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(n), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, i && l.emit("transitionEnd"))
                            }), l.$wrapperEl[0].addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), M({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let i = this,
                                {
                                    params: s
                                } = i;
                            i.animating = !1, s.cssMode || (i.setTransition(0), M({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            let n;
                            if ("number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" == typeof e) {
                                let l = parseInt(e, 10),
                                    a = isFinite(l);
                                if (!a) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = l
                            }
                            let o = this,
                                d = e;
                            d < 0 && (d = 0);
                            let {
                                params: u,
                                snapGrid: c,
                                slidesGrid: p,
                                previousIndex: h,
                                activeIndex: f,
                                rtlTranslate: m,
                                wrapperEl: g,
                                enabled: v
                            } = o;
                            if (o.animating && u.preventInteractionOnTransition || !v && !s && !r) return !1;
                            let w = Math.min(o.params.slidesPerGroupSkip, d),
                                T = w + Math.floor((d - w) / o.params.slidesPerGroup);
                            T >= c.length && (T = c.length - 1);
                            let S = -c[T];
                            if (u.normalizeSlideIndex)
                                for (let b = 0; b < p.length; b += 1) {
                                    let y = -Math.floor(100 * S),
                                        E = Math.floor(100 * p[b]),
                                        C = Math.floor(100 * p[b + 1]);
                                    void 0 !== p[b + 1] ? y >= E && y < C - (C - E) / 2 ? d = b : y >= E && y < C && (d = b + 1) : y >= E && (d = b)
                                }
                            if (o.initialized && d !== f && (!o.allowSlideNext && S < o.translate && S < o.minTranslate() || !o.allowSlidePrev && S > o.translate && S > o.maxTranslate() && (f || 0) !== d)) return !1;
                            if (d !== (h || 0) && i && o.emit("beforeSlideChangeStart"), o.updateProgress(S), n = d > f ? "next" : d < f ? "prev" : "reset", m && -S === o.translate || !m && S === o.translate) return o.updateActiveIndex(d), u.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== u.effect && o.setTranslate(S), "reset" !== n && (o.transitionStart(i, n), o.transitionEnd(i, n)), !1;
                            if (u.cssMode) {
                                let M = o.isHorizontal(),
                                    P = m ? S : -S;
                                if (0 === t) {
                                    let k = o.virtual && o.params.virtual.enabled;
                                    k && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), g[M ? "scrollLeft" : "scrollTop"] = P, k && requestAnimationFrame(() => {
                                        o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!o.support.smoothScroll) return x({
                                        swiper: o,
                                        targetPosition: P,
                                        side: M ? "left" : "top"
                                    }), !0;
                                    g.scrollTo({
                                        [M ? "left" : "top"]: P,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return o.setTransition(t), o.setTranslate(S), o.updateActiveIndex(d), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, s), o.transitionStart(i, n), 0 === t ? o.transitionEnd(i, n) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                                o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(i, n))
                            }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let r = parseInt(e, 10),
                                    n = isFinite(r);
                                if (!n) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = r
                            }
                            let l = e;
                            return this.params.loop && (l += this.loopedSlides), this.slideTo(l, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    animating: r,
                                    enabled: n,
                                    params: l
                                } = s;
                            if (!n) return s;
                            let a = l.slidesPerGroup;
                            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < l.slidesPerGroupSkip ? 1 : a;
                            if (l.loop) {
                                if (r && l.loopPreventsSlide) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            return l.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: r,
                                    animating: n,
                                    snapGrid: l,
                                    slidesGrid: a,
                                    rtlTranslate: o,
                                    enabled: d
                                } = s;
                            if (!d) return s;
                            if (r.loop) {
                                if (n && r.loopPreventsSlide) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            let u = o ? s.translate : -s.translate;

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let p = c(u),
                                h = l.map(e => c(e)),
                                f = l[h.indexOf(p) - 1];
                            if (void 0 === f && r.cssMode) {
                                let m;
                                l.forEach((e, t) => {
                                    p >= e && (m = t)
                                }), void 0 !== m && (f = l[m > 0 ? m - 1 : m])
                            }
                            let g = 0;
                            if (void 0 !== f && ((g = a.indexOf(f)) < 0 && (g = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let v = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(v, e, t, i)
                            }
                            return s.slideTo(g, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                n = Math.min(this.params.slidesPerGroupSkip, r),
                                l = n + Math.floor((r - n) / this.params.slidesPerGroup),
                                a = this.rtlTranslate ? this.translate : -this.translate;
                            if (a >= this.snapGrid[l]) {
                                let o = this.snapGrid[l],
                                    d = this.snapGrid[l + 1];
                                a - o > (d - o) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let u = this.snapGrid[l - 1],
                                    c = this.snapGrid[l];
                                a - u <= (c - u) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    $wrapperEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                n = t.clickedIndex;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), T(() => {
                                    t.slideTo(n)
                                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), T(() => {
                                    t.slideTo(n)
                                })) : t.slideTo(n)
                            } else t.slideTo(n)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let e = this,
                                t = d(),
                                {
                                    params: i,
                                    $wrapperEl: s
                                } = e,
                                r = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
                            r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                            let n = r.children(`.${i.slideClass}`);
                            if (i.loopFillGroupWithBlank) {
                                let l = i.slidesPerGroup - n.length % i.slidesPerGroup;
                                if (l !== i.slidesPerGroup) {
                                    for (let a = 0; a < l; a += 1) {
                                        let o = m(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                        r.append(o)
                                    }
                                    n = r.children(`.${i.slideClass}`)
                                }
                            }
                            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
                            let u = [],
                                c = [];
                            n.each((e, t) => {
                                let i = m(e);
                                i.attr("data-swiper-slide-index", t)
                            });
                            for (let p = 0; p < e.loopedSlides; p += 1) {
                                let h = p - Math.floor(p / n.length) * n.length;
                                c.push(n.eq(h)[0]), u.unshift(n.eq(n.length - h - 1)[0])
                            }
                            for (let f = 0; f < c.length; f += 1) r.append(m(c[f].cloneNode(!0)).addClass(i.slideDuplicateClass));
                            for (let g = u.length - 1; g >= 0; g -= 1) r.prepend(m(u[g].cloneNode(!0)).addClass(i.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let e;
                            let t = this;
                            t.emit("beforeLoopFix");
                            let {
                                activeIndex: i,
                                slides: s,
                                loopedSlides: r,
                                allowSlidePrev: n,
                                allowSlideNext: l,
                                snapGrid: a,
                                rtlTranslate: o
                            } = t;
                            t.allowSlidePrev = !0, t.allowSlideNext = !0;
                            let d = -a[i],
                                u = d - t.getTranslate();
                            if (i < r) {
                                e = s.length - 3 * r + i + r;
                                let c = t.slideTo(e, 0, !1, !0);
                                c && 0 !== u && t.setTranslate((o ? -t.translate : t.translate) - u)
                            } else if (i >= s.length - r) {
                                e = -s.length + i + r + r;
                                let p = t.slideTo(e, 0, !1, !0);
                                p && 0 !== u && t.setTranslate((o ? -t.translate : t.translate) - u)
                            }
                            t.allowSlidePrev = n, t.allowSlideNext = l, t.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: e,
                                params: t,
                                slides: i
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                t = d(),
                                {
                                    params: i,
                                    support: s
                                } = e;
                            e.onTouchStart = P.bind(e), e.onTouchMove = k.bind(e), e.onTouchEnd = O.bind(e), i.cssMode && (e.onScroll = $.bind(e)), e.onClick = _.bind(e), s.touch && !z && (t.addEventListener("touchstart", A), z = !0), D(e, "on")
                        },
                        detachEvents: function() {
                            D(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    activeIndex: t,
                                    initialized: i,
                                    loopedSlides: s = 0,
                                    params: r,
                                    $el: n
                                } = e,
                                l = r.breakpoints;
                            if (!l || l && 0 === Object.keys(l).length) return;
                            let a = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                            if (!a || e.currentBreakpoint === a) return;
                            let o = a in l ? l[a] : void 0,
                                d = o || e.originalParams,
                                u = I(e, r),
                                c = I(e, d),
                                p = r.enabled;
                            u && !c ? (n.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && c && (n.addClass(`${r.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && n.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let i = r[t] && r[t].enabled,
                                    s = d[t] && d[t].enabled;
                                i && !s && e[t].disable(), !i && s && e[t].enable()
                            });
                            let h = d.direction && d.direction !== r.direction,
                                f = r.loop && (d.slidesPerView !== r.slidesPerView || h);
                            h && i && e.changeDirection(), y(e.params, d);
                            let m = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", d), f && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = c(),
                                n = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: n * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let a = 0; a < l.length; a += 1) {
                                let {
                                    point: o,
                                    value: d
                                } = l[a];
                                "window" === t ? r.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= i.clientWidth && (s = o)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                {
                                    isLocked: t,
                                    params: i
                                } = e,
                                {
                                    slidesOffsetBefore: s
                                } = i;
                            if (s) {
                                let r = e.slides.length - 1,
                                    n = e.slidesGrid[r] + e.slidesSizesGrid[r] + 2 * s;
                                e.isLocked = e.size > n
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                $el: s,
                                device: r,
                                support: n
                            } = this, l = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "pointer-events": !n.touch
                            }, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...l), s.addClass([...e].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, i, s, r, n) {
                            let l;
                            let a = c();

                            function o() {
                                n && n()
                            }
                            let d = m(e).parent("picture")[0];
                            d || e.complete && r ? o() : t ? ((l = new a.Image).onload = o, l.onerror = o, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : o()
                        },
                        preloadImages: function() {
                            let e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                let s = e.imagesToLoad[i];
                                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                G = {};
            class j {
                constructor(...e) {
                    let t, i;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = y({}, i), t && !i.el && (i.el = t), i.el && m(i.el).length > 1) {
                        let s = [];
                        return m(i.el).each(e => {
                            let t = y({}, i, {
                                el: e
                            });
                            s.push(new j(t))
                        }), s
                    }
                    let l = this;
                    l.__swiper__ = !0, l.support = C(), l.device = function(e = {}) {
                        return r || (r = function({
                            userAgent: e
                        } = {}) {
                            let t = C(),
                                i = c(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                n = {
                                    ios: !1,
                                    android: !1
                                },
                                l = i.screen.width,
                                a = i.screen.height,
                                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = r.match(/(iPad).*OS\s([\d_]+)/),
                                u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                h = "MacIntel" === s;
                            return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${a}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), o && "Win32" !== s && (n.os = "android", n.android = !0), (d || p || u) && (n.os = "ios", n.ios = !0), n
                        }(e)), r
                    }({
                        userAgent: i.userAgent
                    }), l.browser = (n || (n = function() {
                        let e = c();
                        return {
                            isSafari: function() {
                                let t = e.navigator.userAgent.toLowerCase();
                                return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), n), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
                    let a = {};
                    l.modules.forEach(e => {
                        var t;
                        e({
                            swiper: l,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    y(a, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), y(a, e)
                            }),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    });
                    let o = y({}, N, a);
                    return l.params = y({}, o, G, i), l.originalParams = y({}, l.params), l.passedParams = y({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                        l.on(e, l.params.on[e])
                    }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, Object.assign(l, {
                        enabled: l.params.enabled,
                        el: t,
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
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
                        touchEvents: (l.touchEventsTouch = {
                            start: "touchstart",
                            move: "touchmove",
                            end: "touchend",
                            cancel: "touchcancel"
                        }, l.touchEventsDesktop = {
                            start: "pointerdown",
                            move: "pointermove",
                            end: "pointerup"
                        }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: S(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                enable() {
                    let e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    let e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.each(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: n,
                        size: l,
                        activeIndex: a
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let d, u = s[a].swiperSlideSize;
                        for (let c = a + 1; c < s.length; c += 1) s[c] && !d && (u += s[c].swiperSlideSize, o += 1, u > l && (d = !0));
                        for (let p = a - 1; p >= 0; p -= 1) s[p] && !d && (u += s[p].swiperSlideSize, o += 1, u > l && (d = !0))
                    } else if ("current" === e)
                        for (let h = a + 1; h < s.length; h += 1) {
                            let f = t ? r[h] + n[h] - r[a] < l : r[h] - r[a] < l;
                            f && (o += 1)
                        } else
                            for (let m = a - 1; m >= 0; m -= 1) {
                                let g = r[a] - r[m] < l;
                                g && (o += 1)
                            }
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    let t = this;
                    (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = m(e || t.params.el);
                    if (!(e = i[0])) return !1;
                    e.swiper = t;
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                let t = m(e.shadowRoot.querySelector(s()));
                                return t.children = e => i.children(e), t
                            }
                            return i.children ? i.children(s()) : m(i).children(s())
                        })();
                    if (0 === r.length && t.params.createElements) {
                        let n = d(),
                            l = n.createElement("div");
                        r = m(l), l.className = t.params.wrapperClass, i.append(l), i.children(`.${t.params.slideClass}`).each(e => {
                            r.append(e)
                        })
                    }
                    return Object.assign(t, {
                        $el: i,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            $el: r,
                            $wrapperEl: n,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, function(e) {
                        let t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (i) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    y(G, e)
                }
                static get extendedDefaults() {
                    return G
                }
                static get defaults() {
                    return N
                }
                static installModule(e) {
                    j.prototype.__modules__ || (j.prototype.__modules__ = []);
                    let t = j.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => j.installModule(e)), j) : (j.installModule(e), j)
                }
            }
            Object.keys(B).forEach(e => {
                Object.keys(B[e]).forEach(t => {
                    j.prototype[t] = B[e][t]
                })
            }), j.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = c(),
                    r = null,
                    n = null,
                    l = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    a = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            n = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, n = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, n = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || n !== s) && l()
                            })
                        })).observe(e.el)
                    },
                    o = () => {
                        n && s.cancelAnimationFrame(n), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    d = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        a();
                        return
                    }
                    s.addEventListener("resize", l), s.addEventListener("orientationchange", d)
                }), t("destroy", () => {
                    o(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    n = c(),
                    l = (e, t = {}) => {
                        let i = n.MutationObserver || n.WebkitMutationObserver,
                            l = new i(e => {
                                if (1 === e.length) {
                                    s("observerUpdate", e[0]);
                                    return
                                }
                                let t = function() {
                                    s("observerUpdate", e[0])
                                };
                                n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                            });
                        l.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.push(l)
                    },
                    a = () => {
                        if (e.params.observer) {
                            if (e.params.observeParents) {
                                let t = e.$el.parents();
                                for (let i = 0; i < t.length; i += 1) l(t[i])
                            }
                            l(e.$el[0], {
                                childList: e.params.observeSlideChildren
                            }), l(e.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    o = () => {
                        r.forEach(e => {
                            e.disconnect()
                        }), r.splice(0, r.length)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", a), i("destroy", o)
            }]);
            var R = j;

            function V({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r;

                function n() {
                    if (!e.size) {
                        e.autoplay.running = !1, e.autoplay.paused = !1;
                        return
                    }
                    let t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = T(() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? a() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? a() : (t = e.slideTo(0, e.params.speed, !0, !0), s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), s("autoplay")), e.params.cssMode && e.autoplay.running ? n() : !1 === t && n()
                    }, i)
                }

                function l() {
                    return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, s("autoplayStart"), n(), !0)
                }

                function a() {
                    return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, s("autoplayStop"), !0)
                }

                function o(t) {
                    e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].addEventListener(t, c)
                    }) : (e.autoplay.paused = !1, n())))
                }

                function u() {
                    let t = d();
                    "hidden" === t.visibilityState && e.autoplay.running && o(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1)
                }

                function c(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, c)
                    }), e.autoplay.paused = !1, e.autoplay.running ? n() : a())
                }

                function p() {
                    e.params.autoplay.disableOnInteraction ? a() : (s("autoplayPause"), o()), ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, c)
                    })
                }

                function h() {
                    e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, s("autoplayResume"), n())
                }
                e.autoplay = {
                    running: !1,
                    paused: !1
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), i("init", () => {
                    if (e.params.autoplay.enabled) {
                        l();
                        let t = d();
                        t.addEventListener("visibilitychange", u), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", p), e.$el.on("mouseleave", h))
                    }
                }), i("beforeTransitionStart", (t, i, s) => {
                    e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(i) : a())
                }), i("sliderFirstMove", () => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? a() : o())
                }), i("touchEnd", () => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
                }), i("destroy", () => {
                    e.$el.off("mouseenter", p), e.$el.off("mouseleave", h), e.autoplay.running && a();
                    let t = d();
                    t.removeEventListener("visibilitychange", u)
                }), Object.assign(e.autoplay, {
                    pause: o,
                    run: n,
                    start: l,
                    stop: a
                })
            }

            function F({
                swiper: e,
                extendParams: t,
                emit: i,
                once: s
            }) {
                t({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(e, {
                    freeMode: {
                        onTouchStart: function() {
                            let t = e.getTranslate();
                            e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                                currentPos: e.rtl ? e.translate : -e.translate
                            })
                        },
                        onTouchMove: function() {
                            let {
                                touchEventsData: t,
                                touches: i
                            } = e;
                            0 === t.velocities.length && t.velocities.push({
                                position: i[e.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }), t.velocities.push({
                                position: i[e.isHorizontal() ? "currentX" : "currentY"],
                                time: S()
                            })
                        },
                        onTouchEnd: function({
                            currentPos: t
                        }) {
                            let {
                                params: r,
                                $wrapperEl: n,
                                rtlTranslate: l,
                                snapGrid: a,
                                touchEventsData: o
                            } = e, d = S(), u = d - o.touchStartTime;
                            if (t < -e.minTranslate()) {
                                e.slideTo(e.activeIndex);
                                return
                            }
                            if (t > -e.maxTranslate()) {
                                e.slides.length < a.length ? e.slideTo(a.length - 1) : e.slideTo(e.slides.length - 1);
                                return
                            }
                            if (r.freeMode.momentum) {
                                let c, p;
                                if (o.velocities.length > 1) {
                                    let h = o.velocities.pop(),
                                        f = o.velocities.pop(),
                                        m = h.position - f.position,
                                        g = h.time - f.time;
                                    e.velocity = m / g, e.velocity /= 2, Math.abs(e.velocity) < r.freeMode.minimumVelocity && (e.velocity = 0), (g > 150 || S() - h.time > 300) && (e.velocity = 0)
                                } else e.velocity = 0;
                                e.velocity *= r.freeMode.momentumVelocityRatio, o.velocities.length = 0;
                                let v = 1e3 * r.freeMode.momentumRatio,
                                    w = e.velocity * v,
                                    T = e.translate + w;
                                l && (T = -T);
                                let b = !1,
                                    y = 20 * Math.abs(e.velocity) * r.freeMode.momentumBounceRatio;
                                if (T < e.maxTranslate()) r.freeMode.momentumBounce ? (T + e.maxTranslate() < -y && (T = e.maxTranslate() - y), c = e.maxTranslate(), b = !0, o.allowMomentumBounce = !0) : T = e.maxTranslate(), r.loop && r.centeredSlides && (p = !0);
                                else if (T > e.minTranslate()) r.freeMode.momentumBounce ? (T - e.minTranslate() > y && (T = e.minTranslate() + y), c = e.minTranslate(), b = !0, o.allowMomentumBounce = !0) : T = e.minTranslate(), r.loop && r.centeredSlides && (p = !0);
                                else if (r.freeMode.sticky) {
                                    let E;
                                    for (let x = 0; x < a.length; x += 1)
                                        if (a[x] > -T) {
                                            E = x;
                                            break
                                        }
                                    T = -(T = Math.abs(a[E] - T) < Math.abs(a[E - 1] - T) || "next" === e.swipeDirection ? a[E] : a[E - 1])
                                }
                                if (p && s("transitionEnd", () => {
                                        e.loopFix()
                                    }), 0 !== e.velocity) {
                                    if (v = l ? Math.abs((-T - e.translate) / e.velocity) : Math.abs((T - e.translate) / e.velocity), r.freeMode.sticky) {
                                        let C = Math.abs((l ? -T : T) - e.translate),
                                            M = e.slidesSizesGrid[e.activeIndex];
                                        v = C < M ? r.speed : C < 2 * M ? 1.5 * r.speed : 2.5 * r.speed
                                    }
                                } else if (r.freeMode.sticky) {
                                    e.slideToClosest();
                                    return
                                }
                                r.freeMode.momentumBounce && b ? (e.updateProgress(c), e.setTransition(v), e.setTranslate(T), e.transitionStart(!0, e.swipeDirection), e.animating = !0, n.transitionEnd(() => {
                                    e && !e.destroyed && o.allowMomentumBounce && (i("momentumBounce"), e.setTransition(r.speed), setTimeout(() => {
                                        e.setTranslate(c), n.transitionEnd(() => {
                                            e && !e.destroyed && e.transitionEnd()
                                        })
                                    }, 0))
                                })) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(T), e.setTransition(v), e.setTranslate(T), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, n.transitionEnd(() => {
                                    e && !e.destroyed && e.transitionEnd()
                                }))) : e.updateProgress(T), e.updateActiveIndex(), e.updateSlidesClasses()
                            } else if (r.freeMode.sticky) {
                                e.slideToClosest();
                                return
                            } else r.freeMode && i("_freeModeNoMomentumRelease");
                            (!r.freeMode.momentum || u >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                        }
                    }
                })
            }
        }
    }
]);