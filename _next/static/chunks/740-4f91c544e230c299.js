"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [740], {
        3888: function(e, n, i) {
            i.d(n, {
                Z: function() {
                    return s$
                }
            });
            var r, s, o = i(67294),
                a = i(73935);
            let l = {
                    delta: 0,
                    timestamp: 0
                },
                u = 1 / 60 * 1e3,
                h = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                c = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(h()), u),
                d = !0,
                p = !1,
                f = !1,
                m = ["read", "update", "preRender", "render", "postRender"],
                g = m.reduce((e, n) => (e[n] = function(e) {
                    let n = [],
                        i = [],
                        r = 0,
                        s = !1,
                        o = !1,
                        a = new WeakSet,
                        l = {
                            schedule(e, o = !1, l = !1) {
                                let u = l && s,
                                    h = u ? n : i;
                                return o && a.add(e), -1 === h.indexOf(e) && (h.push(e), u && s && (r = n.length)), e
                            },
                            cancel(e) {
                                let n = i.indexOf(e); - 1 !== n && i.splice(n, 1), a.delete(e)
                            },
                            process(u) {
                                if (s) {
                                    o = !0;
                                    return
                                }
                                if (s = !0, [n, i] = [i, n], i.length = 0, r = n.length)
                                    for (let h = 0; h < r; h++) {
                                        let c = n[h];
                                        c(u), a.has(c) && (l.schedule(c), e())
                                    }
                                s = !1, o && (o = !1, l.process(u))
                            }
                        };
                    return l
                }(() => p = !0), e), {}),
                y = m.reduce((e, n) => {
                    let i = g[n];
                    return e[n] = (e, n = !1, r = !1) => (p || P(), i.schedule(e, n, r)), e
                }, {}),
                v = m.reduce((e, n) => (e[n] = g[n].cancel, e), {}),
                x = m.reduce((e, n) => (e[n] = () => g[n].process(l), e), {}),
                b = e => g[e].process(l),
                w = e => {
                    p = !1, l.delta = d ? u : Math.max(Math.min(e - l.timestamp, 40), 1), l.timestamp = e, f = !0, m.forEach(b), f = !1, p && (d = !1, c(w))
                },
                P = () => {
                    p = !0, d = !0, f || c(w)
                };

            function E(e, n) {
                -1 === e.indexOf(n) && e.push(n)
            }

            function T(e, n) {
                let i = e.indexOf(n);
                i > -1 && e.splice(i, 1)
            }
            class S {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return E(this.subscriptions, e), () => T(this.subscriptions, e)
                }
                notify(e, n, i) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](e, n, i);
                        else
                            for (let s = 0; s < r; s++) {
                                let o = this.subscriptions[s];
                                o && o(e, n, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }

            function A(e, n) {
                return n ? e * (1e3 / n) : 0
            }
            let C = e => !isNaN(parseFloat(e));
            class V {
                constructor(e, n = {}) {
                    this.version = "10.2.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, n = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: i,
                            timestamp: r
                        } = l;
                        this.lastUpdated !== r && (this.timeDelta = i, this.lastUpdated = r, y.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), n && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => y.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = C(this.current), this.owner = n.owner
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, n) {
                    this.events[e] || (this.events[e] = new S);
                    let i = this.events[e].add(n);
                    return "change" === e ? () => {
                        i(), y.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, n) {
                    this.passiveEffect = e, this.stopPassiveEffect = n
                }
                set(e, n = !0) {
                    n && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, n)
                }
                setWithVelocity(e, n, i) {
                    this.set(n), this.prev = e, this.timeDelta = i
                }
                jump(e) {
                    this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? A(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(), new Promise(n => {
                        this.hasAnimated = !0, this.animation = e(n) || null, this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    this.animation = null
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function M(e, n) {
                return new V(e, n)
            }
            let R = (0, o.createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            });

            function k(e) {
                let n = (0, o.useRef)(null);
                return null === n.current && (n.current = e()), n.current
            }

            function L(e) {
                let n = k(() => M(e)),
                    {
                        isStatic: i
                    } = (0, o.useContext)(R);
                if (i) {
                    let [, r] = (0, o.useState)(e);
                    (0, o.useEffect)(() => n.on("change", r), [])
                }
                return n
            }
            let D = "undefined" != typeof document,
                B = {
                    current: null
                },
                j = {
                    current: !1
                };

            function F() {
                if (j.current = !0, D) {
                    if (window.matchMedia) {
                        let e = window.matchMedia("(prefers-reduced-motion)"),
                            n = () => B.current = e.matches;
                        e.addListener(n), n()
                    } else B.current = !1
                }
            }
            let O = e => e,
                I = e => 1e3 * e,
                N = {
                    current: !1
                },
                U = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
                $ = e => n => 1 - e(1 - n),
                H = e => e * e,
                z = $(H),
                W = U(H),
                Y = e => Math.round(1e5 * e) / 1e5,
                X = /(-)?([\d]*\.?[\d])+/g,
                q = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                G = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Z(e) {
                return "string" == typeof e
            }
            let _ = (e, n, i) => Math.min(Math.max(i, e), n),
                K = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                J = { ...K,
                    transform: e => _(0, 1, e)
                },
                Q = { ...K,
                    default: 1
                },
                tt = (e, n) => i => Boolean(Z(i) && G.test(i) && i.startsWith(e) || n && Object.prototype.hasOwnProperty.call(i, n)),
                te = (e, n, i) => r => {
                    if (!Z(r)) return r;
                    let [s, o, a, l] = r.match(X);
                    return {
                        [e]: parseFloat(s),
                        [n]: parseFloat(o),
                        [i]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                },
                tn = e => _(0, 255, e),
                ti = { ...K,
                    transform: e => Math.round(tn(e))
                },
                tr = {
                    test: tt("rgb", "red"),
                    parse: te("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: n,
                        blue: i,
                        alpha: r = 1
                    }) => "rgba(" + ti.transform(e) + ", " + ti.transform(n) + ", " + ti.transform(i) + ", " + Y(J.transform(r)) + ")"
                },
                ts = {
                    test: tt("#"),
                    parse: function(e) {
                        let n = "",
                            i = "",
                            r = "",
                            s = "";
                        return e.length > 5 ? (n = e.substring(1, 3), i = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (n = e.substring(1, 2), i = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), n += n, i += i, r += r, s += s), {
                            red: parseInt(n, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(r, 16),
                            alpha: s ? parseInt(s, 16) / 255 : 1
                        }
                    },
                    transform: tr.transform
                },
                to = e => ({
                    test: n => Z(n) && n.endsWith(e) && 1 === n.split(" ").length,
                    parse: parseFloat,
                    transform: n => `${n}${e}`
                }),
                ta = to("deg"),
                tl = to("%"),
                tu = to("px"),
                th = to("vh"),
                tc = to("vw"),
                td = { ...tl,
                    parse: e => tl.parse(e) / 100,
                    transform: e => tl.transform(100 * e)
                },
                tp = {
                    test: tt("hsl", "hue"),
                    parse: te("hue", "saturation", "lightness"),
                    transform: ({
                        hue: e,
                        saturation: n,
                        lightness: i,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(e) + ", " + tl.transform(Y(n)) + ", " + tl.transform(Y(i)) + ", " + Y(J.transform(r)) + ")"
                },
                tf = {
                    test: e => tr.test(e) || ts.test(e) || tp.test(e),
                    parse: e => tr.test(e) ? tr.parse(e) : tp.test(e) ? tp.parse(e) : ts.parse(e),
                    transform: e => Z(e) ? e : e.hasOwnProperty("red") ? tr.transform(e) : tp.transform(e)
                },
                tm = (e, n, i) => -i * e + i * n + e;

            function tg(e, n, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (n - e) * 6 * i : i < .5 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e
            }
            let ty = (e, n, i) => {
                    let r = e * e;
                    return Math.sqrt(Math.max(0, i * (n * n - r) + r))
                },
                tv = [ts, tr, tp],
                tx = e => tv.find(n => n.test(e));

            function tb(e) {
                let n = tx(e);
                O(Boolean(n), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let i = n.parse(e);
                return n === tp && (i = function({
                    hue: e,
                    saturation: n,
                    lightness: i,
                    alpha: r
                }) {
                    e /= 360, i /= 100;
                    let s = 0,
                        o = 0,
                        a = 0;
                    if (n /= 100) {
                        let l = i < .5 ? i * (1 + n) : i + n - i * n,
                            u = 2 * i - l;
                        s = tg(u, l, e + 1 / 3), o = tg(u, l, e), a = tg(u, l, e - 1 / 3)
                    } else s = o = a = i;
                    return {
                        red: Math.round(255 * s),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * a),
                        alpha: r
                    }
                }(i)), i
            }
            let tw = (e, n) => {
                    let i = tb(e),
                        r = tb(n),
                        s = { ...i
                        };
                    return e => (s.red = ty(i.red, r.red, e), s.green = ty(i.green, r.green, e), s.blue = ty(i.blue, r.blue, e), s.alpha = tm(i.alpha, r.alpha, e), tr.transform(s))
                },
                tP = (e, n) => i => n(e(i)),
                tE = (...e) => e.reduce(tP),
                tT = "${c}",
                tS = "${n}";

            function tA(e) {
                "number" == typeof e && (e = `${e}`);
                let n = [],
                    i = 0,
                    r = 0,
                    s = e.match(q);
                s && (i = s.length, e = e.replace(q, tT), n.push(...s.map(tf.parse)));
                let o = e.match(X);
                return o && (r = o.length, e = e.replace(X, tS), n.push(...o.map(K.parse))), {
                    values: n,
                    numColors: i,
                    numNumbers: r,
                    tokenised: e
                }
            }

            function tC(e) {
                return tA(e).values
            }

            function tV(e) {
                let {
                    values: n,
                    numColors: i,
                    tokenised: r
                } = tA(e), s = n.length;
                return e => {
                    let n = r;
                    for (let o = 0; o < s; o++) n = n.replace(o < i ? tT : tS, o < i ? tf.transform(e[o]) : Y(e[o]));
                    return n
                }
            }
            let tM = e => "number" == typeof e ? 0 : e,
                tR = {
                    test: function(e) {
                        var n, i;
                        return isNaN(e) && Z(e) && ((null === (n = e.match(X)) || void 0 === n ? void 0 : n.length) || 0) + ((null === (i = e.match(q)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: tC,
                    createTransformer: tV,
                    getAnimatableNone: function(e) {
                        let n = tC(e),
                            i = tV(e);
                        return i(n.map(tM))
                    }
                };

            function tk(e, n) {
                return "number" == typeof e ? i => tm(e, n, i) : tf.test(e) ? tw(e, n) : tB(e, n)
            }
            let tL = (e, n) => {
                    let i = [...e],
                        r = i.length,
                        s = e.map((e, i) => tk(e, n[i]));
                    return e => {
                        for (let n = 0; n < r; n++) i[n] = s[n](e);
                        return i
                    }
                },
                tD = (e, n) => {
                    let i = { ...e,
                            ...n
                        },
                        r = {};
                    for (let s in i) void 0 !== e[s] && void 0 !== n[s] && (r[s] = tk(e[s], n[s]));
                    return e => {
                        for (let n in r) i[n] = r[n](e);
                        return i
                    }
                },
                tB = (e, n) => {
                    let i = tR.createTransformer(n),
                        r = tA(e),
                        s = tA(n),
                        o = r.numColors === s.numColors && r.numNumbers >= s.numNumbers;
                    return o ? tE(tL(r.values, s.values), i) : (O(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), i => `${i>0?n:e}`)
                },
                tj = (e, n, i) => {
                    let r = n - e;
                    return 0 === r ? 1 : (i - e) / r
                },
                tF = (e, n) => i => tm(e, n, i);

            function tO(e, n, {
                clamp: i = !0,
                ease: r,
                mixer: s
            } = {}) {
                let o = e.length;
                O(o === n.length, "Both input and output ranges must be the same length"), O(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[o - 1] && (e = [...e].reverse(), n = [...n].reverse());
                let a = function(e, n, i) {
                        let r = [],
                            s = i || function(e) {
                                if ("number" == typeof e);
                                else if ("string" == typeof e) return tf.test(e) ? tw : tB;
                                else if (Array.isArray(e)) return tL;
                                else if ("object" == typeof e) return tD;
                                return tF
                            }(e[0]),
                            o = e.length - 1;
                        for (let a = 0; a < o; a++) {
                            let l = s(e[a], e[a + 1]);
                            if (n) {
                                let u = Array.isArray(n) ? n[a] : n;
                                l = tE(u, l)
                            }
                            r.push(l)
                        }
                        return r
                    }(n, r, s),
                    l = a.length,
                    u = n => {
                        let i = 0;
                        if (l > 1)
                            for (; i < e.length - 2 && !(n < e[i + 1]); i++);
                        let r = tj(e[i], e[i + 1], n);
                        return a[i](r)
                    };
                return i ? n => u(_(e[0], e[o - 1], n)) : u
            }
            let tI = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e;

            function tN(e, n, i, r) {
                if (e === n && i === r) return O;
                let s = n => (function(e, n, i, r, s) {
                    let o, a;
                    let l = 0;
                    do(o = tI(a = n + (i - n) / 2, r, s) - e) > 0 ? i = a : n = a; while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(n, 0, 1, e, i);
                return e => 0 === e || 1 === e ? e : tI(s(e), n, r)
            }
            let tU = e => 1 - Math.sin(Math.acos(e)),
                t$ = $(tU),
                tH = U(t$),
                tz = tN(.33, 1.53, .69, .99),
                tW = $(tz),
                tY = U(tW),
                tX = e => (e *= 2) < 1 ? .5 * tW(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                tq = {
                    linear: O,
                    easeIn: H,
                    easeInOut: W,
                    easeOut: z,
                    circIn: tU,
                    circInOut: tH,
                    circOut: t$,
                    backIn: tW,
                    backInOut: tY,
                    backOut: tz,
                    anticipate: tX
                },
                tG = e => {
                    if (Array.isArray(e)) {
                        O(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [n, i, r, s] = e;
                        return tN(n, i, r, s)
                    }
                    return "string" == typeof e ? (O(void 0 !== tq[e], `Invalid easing type '${e}'`), tq[e]) : e
                },
                tZ = e => Array.isArray(e) && "number" != typeof e[0];

            function t_({
                keyframes: e,
                ease: n = W,
                times: i,
                duration: r = 300
            }) {
                e = [...e];
                let s = tZ(n) ? n.map(tG) : tG(n),
                    o = {
                        done: !1,
                        value: e[0]
                    },
                    a = (i && i.length === e.length ? i : function(e) {
                        let n = [0];
                        return function(e, n) {
                            let i = e[e.length - 1];
                            for (let r = 1; r <= n; r++) {
                                let s = tj(0, n, r);
                                e.push(tm(i, 1, s))
                            }
                        }(n, e.length - 1), n
                    }(e)).map(e => e * r);

                function l() {
                    var n;
                    return tO(a, e, {
                        ease: Array.isArray(s) ? s : (n = e).map(() => s || W).splice(0, n.length - 1)
                    })
                }
                let u = l();
                return {
                    next: e => (o.value = u(e), o.done = e >= r, o),
                    flipTarget() {
                        e.reverse(), u = l()
                    }
                }
            }

            function tK(e, n) {
                return e * Math.sqrt(1 - n * n)
            }
            let tJ = ["duration", "bounce"],
                tQ = ["stiffness", "damping", "mass"];

            function t0(e, n) {
                return n.some(n => void 0 !== e[n])
            }

            function t1({
                keyframes: e,
                restDelta: n,
                restSpeed: i,
                ...r
            }) {
                let s = e[0],
                    o = e[e.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: p
                    } = function(e) {
                        let n = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!t0(e, tQ) && t0(e, tJ)) {
                            let i = function({
                                duration: e = 800,
                                bounce: n = .25,
                                velocity: i = 0,
                                mass: r = 1
                            }) {
                                let s, o;
                                O(e <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - n;
                                a = _(.05, 1, a), e = _(.01, 10, e / 1e3), a < 1 ? (s = n => {
                                    let r = n * a,
                                        s = r * e,
                                        o = tK(n, a);
                                    return .001 - (r - i) / o * Math.exp(-s)
                                }, o = n => {
                                    let r = n * a,
                                        o = r * e,
                                        l = Math.pow(a, 2) * Math.pow(n, 2) * e,
                                        u = tK(Math.pow(n, 2), a),
                                        h = -s(n) + .001 > 0 ? -1 : 1;
                                    return h * ((o * i + i - l) * Math.exp(-o)) / u
                                }) : (s = n => {
                                    let r = Math.exp(-n * e),
                                        s = (n - i) * e + 1;
                                    return -.001 + r * s
                                }, o = n => {
                                    let r = Math.exp(-n * e),
                                        s = (i - n) * (e * e);
                                    return r * s
                                });
                                let l = 5 / e,
                                    u = function(e, n, i) {
                                        let r = i;
                                        for (let s = 1; s < 12; s++) r -= e(r) / n(r);
                                        return r
                                    }(s, o, l);
                                if (e *= 1e3, isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let h = Math.pow(u, 2) * r;
                                    return {
                                        stiffness: h,
                                        damping: 2 * a * Math.sqrt(r * h),
                                        duration: e
                                    }
                                }
                            }(e);
                            (n = { ...n,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return n
                    }(r),
                    f = t5,
                    m = c ? -(c / 1e3) : 0,
                    g = u / (2 * Math.sqrt(l * h));

                function y() {
                    let e = o - s,
                        r = Math.sqrt(l / h) / 1e3,
                        a = 5 > Math.abs(e);
                    if (i || (i = a ? .01 : 2), n || (n = a ? .005 : .5), g < 1) {
                        let u = tK(r, g);
                        f = n => o - Math.exp(-g * r * n) * ((m + g * r * e) / u * Math.sin(u * n) + e * Math.cos(u * n))
                    } else if (1 === g) f = n => o - Math.exp(-r * n) * (e + (m + r * e) * n);
                    else {
                        let c = r * Math.sqrt(g * g - 1);
                        f = n => {
                            let i = Math.min(c * n, 300);
                            return o - Math.exp(-g * r * n) * ((m + g * r * e) * Math.sinh(i) + c * e * Math.cosh(i)) / c
                        }
                    }
                }
                return y(), {
                    next(e) {
                        let r = f(e);
                        if (p) a.done = e >= d;
                        else {
                            let s = m;
                            if (0 !== e) {
                                if (g < 1) {
                                    let l = Math.max(0, e - 5);
                                    s = A(r - f(l), e - l)
                                } else s = 0
                            }
                            let u = Math.abs(s) <= i,
                                h = Math.abs(o - r) <= n;
                            a.done = u && h
                        }
                        return a.value = a.done ? o : r, a
                    },
                    flipTarget() {
                        m = -m, [s, o] = [o, s], y()
                    }
                }
            }
            t1.needsInterpolation = (e, n) => "string" == typeof e || "string" == typeof n;
            let t5 = e => 0,
                t2 = {
                    decay: function({
                        keyframes: e = [0],
                        velocity: n = 0,
                        power: i = .8,
                        timeConstant: r = 350,
                        restDelta: s = .5,
                        modifyTarget: o
                    }) {
                        let a = e[0],
                            l = {
                                done: !1,
                                value: a
                            },
                            u = i * n,
                            h = a + u,
                            c = void 0 === o ? h : o(h);
                        return c !== h && (u = c - a), {
                            next(e) {
                                let n = -u * Math.exp(-e / r);
                                return l.done = !(n > s || n < -s), l.value = l.done ? c : c + n, l
                            },
                            flipTarget() {}
                        }
                    },
                    keyframes: t_,
                    tween: t_,
                    spring: t1
                };

            function t3(e, n, i = 0) {
                return e - n - i
            }
            let t9 = e => {
                let n = ({
                    delta: n
                }) => e(n);
                return {
                    start: () => y.update(n, !0),
                    stop: () => v.update(n)
                }
            };

            function t4({
                duration: e,
                driver: n = t9,
                elapsed: i = 0,
                repeat: r = 0,
                repeatType: s = "loop",
                repeatDelay: o = 0,
                keyframes: a,
                autoplay: l = !0,
                onPlay: u,
                onStop: h,
                onComplete: c,
                onRepeat: d,
                onUpdate: p,
                type: f = "keyframes",
                ...m
            }) {
                let g, y;
                let v = i,
                    x = 0,
                    b = e,
                    w = !1,
                    P = !0,
                    E = t2[a.length > 2 ? "keyframes" : f] || t_,
                    T = a[0],
                    S = a[a.length - 1],
                    A = {
                        done: !1,
                        value: T
                    },
                    {
                        needsInterpolation: C
                    } = E;
                C && C(T, S) && (y = tO([0, 100], [T, S], {
                    clamp: !1
                }), a = [0, 100]);
                let V = E({ ...m,
                    duration: e,
                    keyframes: a
                });

                function M(e) {
                    if (P || (e = -e), i += e, w || (A = V.next(Math.max(0, i)), y && (A.value = y(A.value)), w = P ? A.done : i <= 0), p && p(A.value), w) {
                        if (0 === x && (b = void 0 !== b ? b : i), x < r) {
                            var n, a;
                            n = i, a = b, (P ? n >= a + o : n <= -o) && (x++, "reverse" === s ? i = function(e, n = 0, i = 0, r = !0) {
                                return r ? t3(n + -e, n, i) : n - (e - n) + i
                            }(i, b, o, P = x % 2 == 0) : (i = t3(i, b, o), "mirror" === s && V.flipTarget()), w = !1, d && d())
                        } else g && g.stop(), c && c()
                    }
                }
                return l && (u && u(), (g = n(M)).start()), {
                    stop() {
                        h && h(), g && g.stop()
                    },
                    set currentTime(t) {
                        i = v, M(t)
                    },
                    sample(n, r = !1) {
                        if (i = v, r) return M(n), A;
                        let s = e && "number" == typeof e ? Math.max(.5 * e, 50) : 50,
                            o = 0;
                        for (M(0); o <= n;) {
                            let a = n - o;
                            M(Math.min(a, s)), o += s
                        }
                        return A
                    }
                }
            }
            let t6 = ([e, n, i, r]) => `cubic-bezier(${e}, ${n}, ${i}, ${r})`,
                t8 = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: t6([0, .65, .55, 1]),
                    circOut: t6([.55, 0, 1, .45]),
                    backIn: t6([.31, .01, .66, -.59]),
                    backOut: t6([.33, 1.53, .69, .99])
                },
                t7 = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                et = {},
                ee = {};
            for (let en in t7) ee[en] = () => (void 0 === et[en] && (et[en] = t7[en]()), et[en]);
            let ei = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                er = (e, n) => {
                    var i;
                    return "spring" === n.type || "backgroundColor" === e || !(!(i = n.ease) || Array.isArray(i) || "string" == typeof i && t8[i])
                };

            function es(e, n) {
                let i = performance.now(),
                    r = ({
                        timestamp: s
                    }) => {
                        let o = s - i;
                        o >= n && (v.read(r), e(o - n))
                    };
                return y.read(r, !0), () => v.read(r)
            }
            let eo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                ea = new Set(eo),
                el = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                eu = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                eh = {
                    type: "keyframes",
                    duration: .8
                },
                ec = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                ed = (e, {
                    keyframes: n
                }) => n.length > 2 ? eh : ea.has(e) ? e.startsWith("scale") ? eu(n[1]) : el : ec,
                ep = (e, n) => "zIndex" !== e && !!("number" == typeof n || Array.isArray(n) || "string" == typeof n && tR.test(n) && !n.startsWith("url(")),
                ef = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function em(e) {
                let [n, i] = e.slice(0, -1).split("(");
                if ("drop-shadow" === n) return e;
                let [r] = i.match(X) || [];
                if (!r) return e;
                let s = i.replace(r, ""),
                    o = ef.has(n) ? 1 : 0;
                return r !== i && (o *= 100), n + "(" + o + s + ")"
            }
            let eg = /([a-z-]*)\(.*?\)/g,
                ey = { ...tR,
                    getAnimatableNone(e) {
                        let n = e.match(eg);
                        return n ? n.map(em).join(" ") : e
                    }
                },
                ev = { ...K,
                    transform: Math.round
                },
                ex = {
                    borderWidth: tu,
                    borderTopWidth: tu,
                    borderRightWidth: tu,
                    borderBottomWidth: tu,
                    borderLeftWidth: tu,
                    borderRadius: tu,
                    radius: tu,
                    borderTopLeftRadius: tu,
                    borderTopRightRadius: tu,
                    borderBottomRightRadius: tu,
                    borderBottomLeftRadius: tu,
                    width: tu,
                    maxWidth: tu,
                    height: tu,
                    maxHeight: tu,
                    size: tu,
                    top: tu,
                    right: tu,
                    bottom: tu,
                    left: tu,
                    padding: tu,
                    paddingTop: tu,
                    paddingRight: tu,
                    paddingBottom: tu,
                    paddingLeft: tu,
                    margin: tu,
                    marginTop: tu,
                    marginRight: tu,
                    marginBottom: tu,
                    marginLeft: tu,
                    rotate: ta,
                    rotateX: ta,
                    rotateY: ta,
                    rotateZ: ta,
                    scale: Q,
                    scaleX: Q,
                    scaleY: Q,
                    scaleZ: Q,
                    skew: ta,
                    skewX: ta,
                    skewY: ta,
                    distance: tu,
                    translateX: tu,
                    translateY: tu,
                    translateZ: tu,
                    x: tu,
                    y: tu,
                    z: tu,
                    perspective: tu,
                    transformPerspective: tu,
                    opacity: J,
                    originX: td,
                    originY: td,
                    originZ: tu,
                    zIndex: ev,
                    fillOpacity: J,
                    strokeOpacity: J,
                    numOctaves: ev
                },
                eb = { ...ex,
                    color: tf,
                    backgroundColor: tf,
                    outlineColor: tf,
                    fill: tf,
                    stroke: tf,
                    borderColor: tf,
                    borderTopColor: tf,
                    borderRightColor: tf,
                    borderBottomColor: tf,
                    borderLeftColor: tf,
                    filter: ey,
                    WebkitFilter: ey
                },
                ew = e => eb[e];

            function eP(e, n) {
                let i = ew(e);
                return i !== ey && (i = tR), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0
            }

            function eE(e) {
                return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function eT(e) {
                return "number" == typeof e ? 0 : eP("", e)
            }

            function eS(e, n) {
                return e[n] || e.default || e
            }
            let eA = (e, n, i, r = {}) => s => {
                    let o = eS(r, e) || {},
                        a = o.delay || r.delay || 0,
                        {
                            elapsed: u = 0
                        } = r;
                    u -= I(a);
                    let h = function(e, n, i, r) {
                            let s = ep(n, i),
                                o = void 0 !== r.from ? r.from : e.get();
                            return ("none" === o && s && "string" == typeof i ? o = eP(n, i) : eE(o) && "string" == typeof i ? o = eT(i) : !Array.isArray(i) && eE(i) && "string" == typeof o && (i = eT(o)), Array.isArray(i)) ? (null === i[0] && (i[0] = o), i) : [o, i]
                        }(n, e, i, o),
                        c = h[0],
                        d = h[h.length - 1],
                        p = ep(e, c),
                        f = ep(e, d);
                    O(p === f, `You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);
                    let m = {
                        keyframes: h,
                        velocity: n.getVelocity(),
                        ...o,
                        elapsed: u,
                        onUpdate(e) {
                            n.set(e), o.onUpdate && o.onUpdate(e)
                        },
                        onComplete() {
                            s(), o.onComplete && o.onComplete()
                        }
                    };
                    if (!p || !f || N.current || !1 === o.type) return function({
                        keyframes: e,
                        elapsed: n,
                        onUpdate: i,
                        onComplete: r
                    }) {
                        let s = () => {
                            i && i(e[e.length - 1]), r && r()
                        };
                        return n ? {
                            stop: es(s, -n)
                        } : s()
                    }(m);
                    if ("inertia" === o.type) return function({
                        keyframes: e,
                        velocity: n = 0,
                        min: i,
                        max: r,
                        power: s = .8,
                        timeConstant: o = 750,
                        bounceStiffness: a = 500,
                        bounceDamping: u = 10,
                        restDelta: h = 1,
                        modifyTarget: c,
                        driver: d,
                        onUpdate: p,
                        onComplete: f,
                        onStop: m
                    }) {
                        let g;
                        let y = e[0];

                        function v(e) {
                            return void 0 !== i && e < i || void 0 !== r && e > r
                        }

                        function x(e) {
                            return void 0 === i ? r : void 0 === r ? i : Math.abs(i - e) < Math.abs(r - e) ? i : r
                        }

                        function b(e) {
                            g && g.stop(), g = t4({
                                keyframes: [0, 1],
                                velocity: 0,
                                ...e,
                                driver: d,
                                onUpdate(n) {
                                    p && p(n), e.onUpdate && e.onUpdate(n)
                                },
                                onComplete: f,
                                onStop: m
                            })
                        }

                        function w(e) {
                            b({
                                type: "spring",
                                stiffness: a,
                                damping: u,
                                restDelta: h,
                                ...e
                            })
                        }
                        if (v(y)) w({
                            velocity: n,
                            keyframes: [y, x(y)]
                        });
                        else {
                            let P, E, T = s * n + y;
                            void 0 !== c && (T = c(T));
                            let S = x(T),
                                C = S === i ? -1 : 1,
                                V = e => {
                                    P = E, E = e, n = A(e - P, l.delta), (1 === C && e > S || -1 === C && e < S) && w({
                                        keyframes: [e, S],
                                        velocity: n
                                    })
                                };
                            b({
                                type: "decay",
                                keyframes: [y, 0],
                                velocity: n,
                                timeConstant: o,
                                power: s,
                                restDelta: h,
                                modifyTarget: c,
                                onUpdate: v(T) ? V : void 0
                            })
                        }
                        return {
                            stop: () => g && g.stop()
                        }
                    }(m);
                    if (! function({
                            when: e,
                            delay: n,
                            delayChildren: i,
                            staggerChildren: r,
                            staggerDirection: s,
                            repeat: o,
                            repeatType: a,
                            repeatDelay: l,
                            from: u,
                            elapsed: h,
                            ...c
                        }) {
                            return !!Object.keys(c).length
                        }(o) && (m = { ...m,
                            ...ed(e, m)
                        }), m.duration && (m.duration = I(m.duration)), m.repeatDelay && (m.repeatDelay = I(m.repeatDelay)), n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate) {
                        let g = function(e, n, {
                            onUpdate: i,
                            onComplete: r,
                            ...s
                        }) {
                            let o = ee.waapi() && ei.has(n) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping;
                            if (!o) return !1;
                            let {
                                keyframes: a,
                                duration: l = 300,
                                elapsed: u = 0,
                                ease: h
                            } = s;
                            if (er(n, s)) {
                                let c = t4({ ...s,
                                        repeat: 0,
                                        elapsed: 0
                                    }),
                                    d = {
                                        done: !1,
                                        value: a[0]
                                    },
                                    p = [],
                                    f = 0;
                                for (; !d.done && f < 2e4;) p.push((d = c.sample(f, !0)).value), f += 10;
                                a = p, l = f - 10, h = "linear"
                            }
                            let m = function(e, n, i, {
                                delay: r = 0,
                                duration: s,
                                repeat: o = 0,
                                repeatType: a = "loop",
                                ease: l,
                                times: u
                            } = {}) {
                                let h = {
                                    [n]: i
                                };
                                return u && (h.offset = u), e.animate(h, {
                                    delay: r,
                                    duration: s,
                                    easing: function(e) {
                                        if (e) return Array.isArray(e) ? t6(e) : t8[e]
                                    }(l),
                                    fill: "both",
                                    iterations: o + 1,
                                    direction: "reverse" === a ? "alternate" : "normal"
                                })
                            }(e.owner.current, n, a, { ...s,
                                delay: -u,
                                duration: l,
                                ease: h
                            });
                            return m.onfinish = () => {
                                e.set(function(e, {
                                    repeat: n,
                                    repeatType: i = "loop"
                                }) {
                                    let r = n && "loop" !== i && n % 2 == 1 ? 0 : e.length - 1;
                                    return e[r]
                                }(a, s)), y.update(() => m.cancel()), r && r()
                            }, {
                                get currentTime() {
                                    return m.currentTime || 0
                                },
                                set currentTime(t) {
                                    m.currentTime = t
                                },
                                stop() {
                                    let {
                                        currentTime: n
                                    } = m;
                                    if (n) {
                                        let i = t4({ ...s,
                                            autoplay: !1
                                        });
                                        e.setWithVelocity(i.sample(n - 10).value, i.sample(n).value, 10)
                                    }
                                    y.update(() => m.cancel())
                                }
                            }
                        }(n, e, m);
                        if (g) return g
                    }
                    return t4(m)
                },
                eC = e => Boolean(e && e.getVelocity);

            function eV(e, n, i = {}) {
                let r = eC(e) ? e : M(e);
                return r.start(eA("", r, n, i)), {
                    stop: () => r.stop()
                }
            }
            let eM = D ? o.useLayoutEffect : o.useEffect;

            function eR() {
                let e = (0, o.useRef)(!1);
                return eM(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            let ek = (0, o.createContext)(null);
            class eL extends o.Component {
                getSnapshotBeforeUpdate(e) {
                    let n = this.props.childRef.current;
                    if (n && e.isPresent && !this.props.isPresent) {
                        let i = this.props.sizeRef.current;
                        i.height = n.offsetHeight || 0, i.width = n.offsetWidth || 0, i.top = n.offsetTop, i.left = n.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function eD({
                children: e,
                isPresent: n
            }) {
                let i = (0, o.useId)(),
                    r = (0, o.useRef)(null),
                    s = (0, o.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, o.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: o,
                        top: a,
                        left: l
                    } = s.current;
                    if (n || !r.current || !e || !o) return;
                    r.current.dataset.motionPopId = i;
                    let u = document.createElement("style");
                    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
                        document.head.removeChild(u)
                    }
                }, [n]), o.createElement(eL, {
                    isPresent: n,
                    childRef: r,
                    sizeRef: s
                }, o.cloneElement(e, {
                    ref: r
                }))
            }
            let eB = ({
                children: e,
                initial: n,
                isPresent: i,
                onExitComplete: r,
                custom: s,
                presenceAffectsLayout: a,
                mode: l
            }) => {
                let u = k(ej),
                    h = (0, o.useId)(),
                    c = (0, o.useMemo)(() => ({
                        id: h,
                        initial: n,
                        isPresent: i,
                        custom: s,
                        onExitComplete(e) {
                            for (let n of (u.set(e, !0), u.values()))
                                if (!n) return;
                            r && r()
                        },
                        register: e => (u.set(e, !1), () => u.delete(e))
                    }), a ? void 0 : [i]);
                return (0, o.useMemo)(() => {
                    u.forEach((e, n) => u.set(n, !1))
                }, [i]), o.useEffect(() => {
                    i || u.size || !r || r()
                }, [i]), "popLayout" === l && (e = o.createElement(eD, {
                    isPresent: i
                }, e)), o.createElement(ek.Provider, {
                    value: c
                }, e)
            };

            function ej() {
                return new Map
            }
            let eF = (0, o.createContext)({}),
                eO = e => e.key || "",
                eI = ({
                    children: e,
                    custom: n,
                    initial: i = !0,
                    onExitComplete: r,
                    exitBeforeEnter: s,
                    presenceAffectsLayout: a = !0,
                    mode: l = "sync"
                }) => {
                    var u;
                    O(!s, "Replace exitBeforeEnter with mode='wait'");
                    let [h] = function() {
                        let e = eR(),
                            [n, i] = (0, o.useState)(0),
                            r = (0, o.useCallback)(() => {
                                e.current && i(n + 1)
                            }, [n]),
                            s = (0, o.useCallback)(() => y.postRender(r), [r]);
                        return [s, n]
                    }(), c = (0, o.useContext)(eF).forceRender;
                    c && (h = c);
                    let d = eR(),
                        p = function(e) {
                            let n = [];
                            return o.Children.forEach(e, e => {
                                (0, o.isValidElement)(e) && n.push(e)
                            }), n
                        }(e),
                        f = p,
                        m = new Set,
                        g = (0, o.useRef)(f),
                        v = (0, o.useRef)(new Map).current,
                        x = (0, o.useRef)(!0);
                    if (eM(() => {
                            x.current = !1,
                                function(e, n) {
                                    e.forEach(e => {
                                        let i = eO(e);
                                        n.set(i, e)
                                    })
                                }(p, v), g.current = f
                        }), u = () => {
                            x.current = !0, v.clear(), m.clear()
                        }, (0, o.useEffect)(() => () => u(), []), x.current) return o.createElement(o.Fragment, null, f.map(e => o.createElement(eB, {
                        key: eO(e),
                        isPresent: !0,
                        initial: !!i && void 0,
                        presenceAffectsLayout: a,
                        mode: l
                    }, e)));
                    f = [...f];
                    let b = g.current.map(eO),
                        w = p.map(eO),
                        P = b.length;
                    for (let E = 0; E < P; E++) {
                        let T = b[E]; - 1 === w.indexOf(T) && m.add(T)
                    }
                    return "wait" === l && m.size && (f = []), m.forEach(e => {
                        if (-1 !== w.indexOf(e)) return;
                        let i = v.get(e);
                        if (!i) return;
                        let s = b.indexOf(e),
                            u = () => {
                                v.delete(e), m.delete(e);
                                let n = g.current.findIndex(n => n.key === e);
                                if (g.current.splice(n, 1), !m.size) {
                                    if (g.current = p, !1 === d.current) return;
                                    h(), r && r()
                                }
                            };
                        f.splice(s, 0, o.createElement(eB, {
                            key: eO(i),
                            isPresent: !1,
                            onExitComplete: u,
                            custom: n,
                            presenceAffectsLayout: a,
                            mode: l
                        }, i))
                    }), f = f.map(e => {
                        let n = e.key;
                        return m.has(n) ? e : o.createElement(eB, {
                            key: eO(e),
                            isPresent: !0,
                            presenceAffectsLayout: a,
                            mode: l
                        }, e)
                    }), o.createElement(o.Fragment, null, m.size ? f : f.map(e => (0, o.cloneElement)(e)))
                },
                eN = (0, o.createContext)({}),
                eU = (0, o.createContext)({
                    strict: !1
                });

            function e$(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function eH(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function ez(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let eW = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                eY = ["initial", ...eW];

            function eX(e) {
                return ez(e.animate) || eY.some(n => eH(e[n]))
            }

            function eq(e) {
                return Boolean(eX(e) || e.variants)
            }

            function eG(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            let eZ = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                e_ = {};
            for (let eK in eZ) e_[eK] = {
                isEnabled: e => eZ[eK].some(n => !!e[n])
            };
            let eJ = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                eQ = 1,
                e0 = (0, o.createContext)({}),
                e1 = Symbol.for("motionComponentSymbol"),
                e5 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function e2(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (e5.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
                return !1
            }
            let e3 = {};

            function e9(e, {
                layout: n,
                layoutId: i
            }) {
                return ea.has(e) || e.startsWith("origin") || (n || void 0 !== i) && (!!e3[e] || "opacity" === e)
            }
            let e4 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                e6 = eo.length,
                e8 = e => n => "string" == typeof n && n.startsWith(e),
                e7 = e8("--"),
                nt = e8("var(--"),
                ne = (e, n) => n && "number" == typeof e ? n.transform(e) : e;

            function nn(e, n, i, r) {
                let {
                    style: s,
                    vars: o,
                    transform: a,
                    transformOrigin: l
                } = e, u = !1, h = !1, c = !0;
                for (let d in n) {
                    let p = n[d];
                    if (e7(d)) {
                        o[d] = p;
                        continue
                    }
                    let f = ex[d],
                        m = ne(p, f);
                    if (ea.has(d)) {
                        if (u = !0, a[d] = m, !c) continue;
                        p !== (f.default || 0) && (c = !1)
                    } else d.startsWith("origin") ? (h = !0, l[d] = m) : s[d] = m
                }
                if (!n.transform && (u || r ? s.transform = function(e, {
                        enableHardwareAcceleration: n = !0,
                        allowTransformNone: i = !0
                    }, r, s) {
                        let o = "";
                        for (let a = 0; a < e6; a++) {
                            let l = eo[a];
                            if (void 0 !== e[l]) {
                                let u = e4[l] || l;
                                o += `${u}(${e[l]}) `
                            }
                        }
                        return n && !e.z && (o += "translateZ(0)"), o = o.trim(), s ? o = s(e, r ? "" : o) : i && r && (o = "none"), o
                    }(e.transform, i, c, r) : s.transform && (s.transform = "none")), h) {
                    let {
                        originX: g = "50%",
                        originY: y = "50%",
                        originZ: v = 0
                    } = l;
                    s.transformOrigin = `${g} ${y} ${v}`
                }
            }
            let ni = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function nr(e, n, i) {
                for (let r in n) eC(n[r]) || e9(r, i) || (e[r] = n[r])
            }

            function ns(e, n, i) {
                let r = {},
                    s = function(e, n, i) {
                        let r = e.style || {},
                            s = {};
                        return nr(s, r, e), Object.assign(s, function({
                            transformTemplate: e
                        }, n, i) {
                            return (0, o.useMemo)(() => {
                                let r = ni();
                                return nn(r, n, {
                                    enableHardwareAcceleration: !i
                                }, e), Object.assign({}, r.vars, r.style)
                            }, [n])
                        }(e, n, i)), e.transformValues ? e.transformValues(s) : s
                    }(e, n, i);
                return e.drag && !1 !== e.dragListener && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = s, r
            }
            let no = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function na(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || no.has(e)
            }
            let nl = e => !na(e);
            try {
                (r = require("@emotion/is-prop-valid").default) && (nl = e => e.startsWith("on") ? !na(e) : r(e))
            } catch (nu) {}

            function nh(e, n, i) {
                return "string" == typeof e ? e : tu.transform(n + i * e)
            }
            let nc = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                nd = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function np(e, {
                attrX: n,
                attrY: i,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (nn(e, u, h, d), c) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: p,
                    style: f,
                    dimensions: m
                } = e;
                p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== r || void 0 !== s || f.transform) && (f.transformOrigin = function(e, n, i) {
                    let r = nh(n, e.x, e.width),
                        s = nh(i, e.y, e.height);
                    return `${r} ${s}`
                }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== n && (p.x = n), void 0 !== i && (p.y = i), void 0 !== o && function(e, n, i = 1, r = 0, s = !0) {
                    e.pathLength = 1;
                    let o = s ? nc : nd;
                    e[o.offset] = tu.transform(-r);
                    let a = tu.transform(n),
                        l = tu.transform(i);
                    e[o.array] = `${a} ${l}`
                }(p, o, a, l, !1)
            }
            let nf = () => ({ ...ni(),
                    attrs: {}
                }),
                nm = e => "string" == typeof e && "svg" === e.toLowerCase();

            function ng(e, n, i, r) {
                let s = (0, o.useMemo)(() => {
                    let i = nf();
                    return np(i, n, {
                        enableHardwareAcceleration: !1
                    }, nm(r), e.transformTemplate), { ...i.attrs,
                        style: { ...i.style
                        }
                    }
                }, [n]);
                if (e.style) {
                    let a = {};
                    nr(a, e.style, e), s.style = { ...a,
                        ...s.style
                    }
                }
                return s
            }
            let ny = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function nv(e, {
                style: n,
                vars: i
            }, r, s) {
                for (let o in Object.assign(e.style, n, s && s.getProjectionStyles(r)), i) e.style.setProperty(o, i[o])
            }
            let nx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function nb(e, n, i, r) {
                for (let s in nv(e, n, void 0, r), n.attrs) e.setAttribute(nx.has(s) ? s : ny(s), n.attrs[s])
            }

            function nw(e, n) {
                let {
                    style: i
                } = e, r = {};
                for (let s in i)(eC(i[s]) || n.style && eC(n.style[s]) || e9(s, e)) && (r[s] = i[s]);
                return r
            }

            function nP(e, n) {
                let i = nw(e, n);
                for (let r in e)
                    if (eC(e[r]) || eC(n[r])) {
                        let s = "x" === r || "y" === r ? "attr" + r.toUpperCase() : r;
                        i[s] = e[r]
                    }
                return i
            }

            function nE(e, n, i, r = {}, s = {}) {
                return "function" == typeof n && (n = n(void 0 !== i ? i : e.custom, r, s)), "string" == typeof n && (n = e.variants && e.variants[n]), "function" == typeof n && (n = n(void 0 !== i ? i : e.custom, r, s)), n
            }
            let nT = e => Array.isArray(e),
                nS = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                nA = e => nT(e) ? e[e.length - 1] || 0 : e;

            function nC(e) {
                let n = eC(e) ? e.get() : e;
                return nS(n) ? n.toValue() : n
            }
            let nV = e => (n, i) => {
                    let r = (0, o.useContext)(eN),
                        s = (0, o.useContext)(ek),
                        a = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: n,
                            onMount: i
                        }, r, s, o) {
                            let a = {
                                latestValues: function(e, n, i, r) {
                                    let s = {},
                                        o = r(e, {});
                                    for (let a in o) s[a] = nC(o[a]);
                                    let {
                                        initial: l,
                                        animate: u
                                    } = e, h = eX(e), c = eq(e);
                                    n && c && !h && !1 !== e.inherit && (void 0 === l && (l = n.initial), void 0 === u && (u = n.animate));
                                    let d = !!i && !1 === i.initial;
                                    d = d || !1 === l;
                                    let p = d ? u : l;
                                    if (p && "boolean" != typeof p && !ez(p)) {
                                        let f = Array.isArray(p) ? p : [p];
                                        f.forEach(n => {
                                            let i = nE(e, n);
                                            if (!i) return;
                                            let {
                                                transitionEnd: r,
                                                transition: o,
                                                ...a
                                            } = i;
                                            for (let l in a) {
                                                let u = a[l];
                                                if (Array.isArray(u)) {
                                                    let h = d ? u.length - 1 : 0;
                                                    u = u[h]
                                                }
                                                null !== u && (s[l] = u)
                                            }
                                            for (let c in r) s[c] = r[c]
                                        })
                                    }
                                    return s
                                }(r, s, o, e),
                                renderState: n()
                            };
                            return i && (a.mount = e => i(r, e, a)), a
                        })(e, n, r, s);
                    return i ? a() : k(a)
                },
                nM = {
                    useVisualState: nV({
                        scrapeMotionValuesFromProps: nP,
                        createRenderState: nf,
                        onMount(e, n, {
                            renderState: i,
                            latestValues: r
                        }) {
                            try {
                                i.dimensions = "function" == typeof n.getBBox ? n.getBBox() : n.getBoundingClientRect()
                            } catch (s) {
                                i.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            np(i, r, {
                                enableHardwareAcceleration: !1
                            }, nm(n.tagName), e.transformTemplate), nb(n, i)
                        }
                    })
                },
                nR = {
                    useVisualState: nV({
                        scrapeMotionValuesFromProps: nw,
                        createRenderState: ni
                    })
                };

            function nk(e, n, i, r = {
                passive: !0
            }) {
                return e.addEventListener(n, i, r), () => e.removeEventListener(n, i)
            }
            let nL = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

            function nD(e, n = "page") {
                return {
                    point: {
                        x: e[n + "X"],
                        y: e[n + "Y"]
                    }
                }
            }
            let nB = e => n => nL(n) && e(n, nD(n));

            function nj(e, n, i, r) {
                return nk(e, n, nB(i), r)
            }

            function nF(e) {
                let n = null;
                return () => {
                    let i = () => {
                        n = null
                    };
                    return null === n && (n = e, i)
                }
            }
            let nO = nF("dragHorizontal"),
                nI = nF("dragVertical");

            function nN(e) {
                let n = !1;
                if ("y" === e) n = nI();
                else if ("x" === e) n = nO();
                else {
                    let i = nO(),
                        r = nI();
                    i && r ? n = () => {
                        i(), r()
                    } : (i && i(), r && r())
                }
                return n
            }

            function nU() {
                let e = nN(!0);
                return !e || (e(), !1)
            }
            class n$ {
                constructor(e) {
                    this.isMounted = !1, this.node = e
                }
                update() {}
            }

            function nH(e, n) {
                let i = "onHover" + (n ? "Start" : "End"),
                    r = (r, s) => {
                        if ("touch" === r.type || nU()) return;
                        let o = e.getProps();
                        e.animationState && o.whileHover && e.animationState.setActive("whileHover", n), o[i] && y.update(() => o[i](r, s))
                    };
                return nj(e.current, "pointer" + (n ? "enter" : "leave"), r, {
                    passive: !e.getProps()[i]
                })
            }
            let nz = (e, n) => !!n && (e === n || nz(e, n.parentElement));

            function nW(e, n) {
                if (!n) return;
                let i = new PointerEvent("pointer" + e);
                n(i, nD(i))
            }
            let nY = new WeakMap,
                nX = new WeakMap,
                nq = e => {
                    let n = nY.get(e.target);
                    n && n(e)
                },
                nG = e => {
                    e.forEach(nq)
                },
                nZ = {
                    some: 0,
                    all: 1
                };

            function n_(e, n) {
                if (!Array.isArray(n)) return !1;
                let i = n.length;
                if (i !== e.length) return !1;
                for (let r = 0; r < i; r++)
                    if (n[r] !== e[r]) return !1;
                return !0
            }
            let nK = e => /^\-?\d*\.?\d+$/.test(e),
                nJ = e => /^0[^.\s]+$/.test(e),
                nQ = e => n => n.test(e),
                n0 = [K, tu, tl, ta, tc, th, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                n1 = e => n0.find(nQ(e)),
                n5 = [...n0, tf, tR],
                n2 = e => n5.find(nQ(e));

            function n3(e, n, i) {
                let r = e.getProps();
                return nE(r, n, void 0 !== i ? i : r.custom, function(e) {
                    let n = {};
                    return e.values.forEach((e, i) => n[i] = e.get()), n
                }(e), function(e) {
                    let n = {};
                    return e.values.forEach((e, i) => n[i] = e.getVelocity()), n
                }(e))
            }

            function n9(e) {
                return Boolean(eC(e) && e.add)
            }
            let n4 = "data-" + ny("framerAppearId");

            function n6(e, n, i = {}) {
                let r = n3(e, n, i.custom),
                    {
                        transition: s = e.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = r ? () => n8(e, r, i) : () => Promise.resolve(),
                    a = e.variantChildren && e.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: o = 0,
                            staggerChildren: a,
                            staggerDirection: l
                        } = s;
                        return function(e, n, i = 0, r = 0, s = 1, o) {
                            let a = [],
                                l = (e.variantChildren.size - 1) * r,
                                u = 1 === s ? (e = 0) => e * r : (e = 0) => l - e * r;
                            return Array.from(e.variantChildren).sort(n7).forEach((e, r) => {
                                e.notify("AnimationStart", n), a.push(n6(e, n, { ...o,
                                    delay: i + u(r)
                                }).then(() => e.notify("AnimationComplete", n)))
                            }), Promise.all(a)
                        }(e, n, o + r, a, l, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]); {
                    let [u, h] = "beforeChildren" === l ? [o, a] : [a, o];
                    return u().then(h)
                }
            }

            function n8(e, n, {
                delay: i = 0,
                transitionOverride: r,
                type: s
            } = {}) {
                let {
                    transition: o = e.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e.makeTargetAnimatable(n), u = e.getValue("willChange");
                r && (o = r);
                let h = [],
                    c = s && e.animationState && e.animationState.getState()[s];
                for (let d in l) {
                    let p = e.getValue(d),
                        f = l[d];
                    if (!p || void 0 === f || c && function({
                            protectedKeys: e,
                            needsAnimating: n
                        }, i) {
                            let r = e.hasOwnProperty(i) && !0 !== n[i];
                            return n[i] = !1, r
                        }(c, d)) continue;
                    let m = {
                        delay: i,
                        elapsed: 0,
                        ...o
                    };
                    if (window.HandoffAppearAnimations && !p.hasAnimated) {
                        let g = e.getProps()[n4];
                        g && (m.elapsed = window.HandoffAppearAnimations(g, d, p, y))
                    }
                    let v = p.start(eA(d, p, f, e.shouldReduceMotion && ea.has(d) ? {
                        type: !1
                    } : m));
                    n9(u) && (u.add(d), v = v.then(() => u.remove(d))), h.push(v)
                }
                return Promise.all(h).then(() => {
                    a && function(e, n) {
                        let i = n3(e, n),
                            {
                                transitionEnd: r = {},
                                transition: s = {},
                                ...o
                            } = i ? e.makeTargetAnimatable(i, !1) : {};
                        for (let a in o = { ...o,
                                ...r
                            }) {
                            var l;
                            let u = nA(o[a]);
                            l = a, e.hasValue(l) ? e.getValue(l).set(u) : e.addValue(l, M(u))
                        }
                    }(e, a)
                })
            }

            function n7(e, n) {
                return e.sortNodePosition(n)
            }
            let it = [...eW].reverse(),
                ie = eW.length;

            function ii(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let ir = 0,
                is = (e, n) => Math.abs(e - n);
            class io {
                constructor(e, n, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = iu(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                i = function(e, n) {
                                    let i = is(e.x, n.x),
                                        r = is(e.y, n.y);
                                    return Math.sqrt(i ** 2 + r ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!n && !i) return;
                            let {
                                point: r
                            } = e, {
                                timestamp: s
                            } = l;
                            this.history.push({ ...r,
                                timestamp: s
                            });
                            let {
                                onStart: o,
                                onMove: a
                            } = this.handlers;
                            n || (o && o(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, n) => {
                            this.lastMoveEvent = e, this.lastMoveEventInfo = ia(n, this.transformPagePoint), y.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, n) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: r
                            } = this.handlers, s = iu("pointercancel" === e.type ? this.lastMoveEventInfo : ia(n, this.transformPagePoint), this.history);
                            this.startEvent && i && i(e, s), r && r(e, s)
                        }, !nL(e)) return;
                    this.handlers = n, this.transformPagePoint = i;
                    let r = nD(e),
                        s = ia(r, this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = l;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: u
                    } = n;
                    u && u(e, iu(s, this.history)), this.removeListeners = tE(nj(window, "pointermove", this.handlePointerMove), nj(window, "pointerup", this.handlePointerUp), nj(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), v.update(this.updatePoint)
                }
            }

            function ia(e, n) {
                return n ? {
                    point: n(e.point)
                } : e
            }

            function il(e, n) {
                return {
                    x: e.x - n.x,
                    y: e.y - n.y
                }
            }

            function iu({
                point: e
            }, n) {
                return {
                    point: e,
                    delta: il(e, ih(n)),
                    offset: il(e, n[0]),
                    velocity: function(e, n) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = e.length - 1,
                            r = null,
                            s = ih(e);
                        for (; i >= 0 && (r = e[i], !(s.timestamp - r.timestamp > I(.1)));) i--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let o = (s.timestamp - r.timestamp) / 1e3;
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (s.x - r.x) / o,
                            y: (s.y - r.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(n, 0)
                }
            }

            function ih(e) {
                return e[e.length - 1]
            }

            function ic(e) {
                return e.max - e.min
            }

            function id(e, n = 0, i = .01) {
                return Math.abs(e - n) <= i
            }

            function ip(e, n, i, r = .5) {
                e.origin = r, e.originPoint = tm(n.min, n.max, e.origin), e.scale = ic(i) / ic(n), (id(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = tm(i.min, i.max, e.origin) - e.originPoint, (id(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function im(e, n, i, r) {
                ip(e.x, n.x, i.x, r ? r.originX : void 0), ip(e.y, n.y, i.y, r ? r.originY : void 0)
            }

            function ig(e, n, i) {
                e.min = i.min + n.min, e.max = e.min + ic(n)
            }

            function iy(e, n, i) {
                e.min = n.min - i.min, e.max = e.min + ic(n)
            }

            function iv(e, n, i) {
                iy(e.x, n.x, i.x), iy(e.y, n.y, i.y)
            }

            function ix(e, n, i) {
                return {
                    min: void 0 !== n ? e.min + n : void 0,
                    max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0
                }
            }

            function ib(e, n) {
                let i = n.min - e.min,
                    r = n.max - e.max;
                return n.max - n.min < e.max - e.min && ([i, r] = [r, i]), {
                    min: i,
                    max: r
                }
            }

            function iw(e, n, i) {
                return {
                    min: iP(e, n),
                    max: iP(e, i)
                }
            }

            function iP(e, n) {
                return "number" == typeof e ? e : e[n] || 0
            }
            let iE = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                iT = () => ({
                    x: iE(),
                    y: iE()
                }),
                iS = () => ({
                    min: 0,
                    max: 0
                }),
                iA = () => ({
                    x: iS(),
                    y: iS()
                });

            function iC(e) {
                return [e("x"), e("y")]
            }

            function iV({
                top: e,
                left: n,
                right: i,
                bottom: r
            }) {
                return {
                    x: {
                        min: n,
                        max: i
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function iM(e) {
                return void 0 === e || 1 === e
            }

            function iR({
                scale: e,
                scaleX: n,
                scaleY: i
            }) {
                return !iM(e) || !iM(n) || !iM(i)
            }

            function ik(e) {
                return iR(e) || iL(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function iL(e) {
                var n, i;
                return (n = e.x) && "0%" !== n || (i = e.y) && "0%" !== i
            }

            function iD(e, n, i, r, s) {
                return void 0 !== s && (e = r + s * (e - r)), r + i * (e - r) + n
            }

            function iB(e, n = 0, i = 1, r, s) {
                e.min = iD(e.min, n, i, r, s), e.max = iD(e.max, n, i, r, s)
            }

            function ij(e, {
                x: n,
                y: i
            }) {
                iB(e.x, n.translate, n.scale, n.originPoint), iB(e.y, i.translate, i.scale, i.originPoint)
            }

            function iF(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function iO(e, n) {
                e.min = e.min + n, e.max = e.max + n
            }

            function iI(e, n, [i, r, s]) {
                let o = void 0 !== n[s] ? n[s] : .5,
                    a = tm(e.min, e.max, o);
                iB(e, n[i], n[r], a, n.scale)
            }
            let iN = ["x", "scaleX", "originX"],
                iU = ["y", "scaleY", "originY"];

            function i$(e, n) {
                iI(e.x, n, iN), iI(e.y, n, iU)
            }

            function iH(e, n) {
                return iV(function(e, n) {
                    if (!n) return e;
                    let i = n({
                            x: e.left,
                            y: e.top
                        }),
                        r = n({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), n))
            }
            let iz = new WeakMap;
            class iW {
                constructor(e) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iA(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: n = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let r = e => {
                            this.stopAnimation(), n && this.snapToCursor(nD(e, "page").point)
                        },
                        s = (e, n) => {
                            let {
                                drag: i,
                                dragPropagation: r,
                                onDragStart: s
                            } = this.getProps();
                            if (i && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = nN(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), iC(e => {
                                let n = this.getAxisMotionValue(e).get() || 0;
                                if (tl.test(n)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let r = i.layout.layoutBox[e];
                                        if (r) {
                                            let s = ic(r);
                                            n = s * (parseFloat(n) / 100)
                                        }
                                    }
                                }
                                this.originPoint[e] = n
                            }), s && y.update(() => s(e, n));
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        o = (e, n) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: r,
                                onDirectionLock: s,
                                onDrag: o
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = n;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(e, n = 10) {
                                    let i = null;
                                    return Math.abs(e.y) > n ? i = "y" : Math.abs(e.x) > n && (i = "x"), i
                                }(a), null !== this.currentDirection && s && s(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", n.point, a), this.updateAxis("y", n.point, a), this.visualElement.render(), o && o(e, n)
                        },
                        a = (e, n) => this.stop(e, n);
                    this.panSession = new io(e, {
                        onSessionStart: r,
                        onStart: s,
                        onMove: o,
                        onSessionEnd: a
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(e, n) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: r
                    } = n;
                    this.startAnimation(r);
                    let {
                        onDragEnd: s
                    } = this.getProps();
                    s && y.update(() => s(e, n))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: e,
                        animationState: n
                    } = this.visualElement;
                    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
                }
                updateAxis(e, n, i) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!i || !iY(e, r, this.currentDirection)) return;
                    let s = this.getAxisMotionValue(e),
                        o = this.originPoint[e] + i[e];
                    this.constraints && this.constraints[e] && (o = function(e, {
                        min: n,
                        max: i
                    }, r) {
                        return void 0 !== n && e < n ? e = r ? tm(n, e, r.min) : Math.max(e, n) : void 0 !== i && e > i && (e = r ? tm(i, e, r.max) : Math.min(e, i)), e
                    }(o, this.constraints[e], this.elastic[e])), s.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: e,
                        dragElastic: n
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, r = this.constraints;
                    e && e$(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = function(e, {
                        top: n,
                        left: i,
                        bottom: r,
                        right: s
                    }) {
                        return {
                            x: ix(e.x, i, s),
                            y: ix(e.y, n, r)
                        }
                    }(i.layoutBox, e) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: iw(e, "left", "right"),
                            y: iw(e, "top", "bottom")
                        }
                    }(n), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && iC(e => {
                        this.getAxisMotionValue(e) && (this.constraints[e] = function(e, n) {
                            let i = {};
                            return void 0 !== n.min && (i.min = n.min - e.min), void 0 !== n.max && (i.max = n.max - e.min), i
                        }(i.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: n,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!n || !e$(n)) return !1;
                    let r = n.current;
                    O(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: s
                    } = this.visualElement;
                    if (!s || !s.layout) return !1;
                    let o = function(e, n, i) {
                            let r = iH(e, i),
                                {
                                    scroll: s
                                } = n;
                            return s && (iO(r.x, s.offset.x), iO(r.y, s.offset.y)), r
                        }(r, s.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: ib((e = s.layout.layoutBox).x, o.x),
                            y: ib(e.y, o.y)
                        };
                    if (i) {
                        let l = i(function({
                            x: e,
                            y: n
                        }) {
                            return {
                                top: n.min,
                                right: e.max,
                                bottom: n.max,
                                left: e.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!l, l && (a = iV(l))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: n,
                        dragMomentum: i,
                        dragElastic: r,
                        dragTransition: s,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: a
                    } = this.getProps(), l = this.constraints || {}, u = iC(a => {
                        if (!iY(a, n, this.currentDirection)) return;
                        let u = l && l[a] || {};
                        o && (u = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? e[a] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...s,
                            ...u
                        };
                        return this.startAxisValueAnimation(a, h)
                    });
                    return Promise.all(u).then(a)
                }
                startAxisValueAnimation(e, n) {
                    let i = this.getAxisMotionValue(e);
                    return i.start(eA(e, i, 0, n))
                }
                stopAnimation() {
                    iC(e => this.getAxisMotionValue(e).stop())
                }
                getAxisMotionValue(e) {
                    let n = "_drag" + e.toUpperCase(),
                        i = this.visualElement.getProps(),
                        r = i[n];
                    return r || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
                }
                snapToCursor(e) {
                    iC(n => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!iY(n, i, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, s = this.getAxisMotionValue(n);
                        if (r && r.layout) {
                            let {
                                min: o,
                                max: a
                            } = r.layout.layoutBox[n];
                            s.set(e[n] - tm(o, a, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: e,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!e$(n) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    iC(e => {
                        let n = this.getAxisMotionValue(e);
                        if (n) {
                            let i = n.get();
                            r[e] = function(e, n) {
                                let i = .5,
                                    r = ic(e),
                                    s = ic(n);
                                return s > r ? i = tj(n.min, n.max - r, e.min) : r > s && (i = tj(e.min, e.max - s, n.min)), _(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: s
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), iC(n => {
                        if (!iY(n, e, null)) return;
                        let i = this.getAxisMotionValue(n),
                            {
                                min: s,
                                max: o
                            } = this.constraints[n];
                        i.set(tm(s, o, r[n]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    iz.set(this.visualElement, this);
                    let e = this.visualElement.current,
                        n = nj(e, "pointerdown", e => {
                            let {
                                drag: n,
                                dragListener: i = !0
                            } = this.getProps();
                            n && i && this.start(e)
                        }),
                        i = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            e$(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        s = r.addEventListener("measure", i);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), i();
                    let o = nk(window, "resize", () => this.scalePositionWithinConstraints()),
                        a = r.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: n
                        }) => {
                            this.isDragging && n && (iC(n => {
                                let i = this.getAxisMotionValue(n);
                                i && (this.originPoint[n] += e[n].translate, i.set(i.get() + e[n].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        o(), n(), s(), a && a()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: n = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: r = !1,
                            dragConstraints: s = !1,
                            dragElastic: o = .35,
                            dragMomentum: a = !0
                        } = e;
                    return { ...e,
                        drag: n,
                        dragDirectionLock: i,
                        dragPropagation: r,
                        dragConstraints: s,
                        dragElastic: o,
                        dragMomentum: a
                    }
                }
            }

            function iY(e, n, i) {
                return (!0 === n || n === e) && (null === i || i === e)
            }
            let iX = e => (n, i) => {
                e && y.update(() => e(n, i))
            };

            function iq(e, n) {
                return n.max === n.min ? 0 : e / (n.max - n.min) * 100
            }
            let iG = {
                    correct(e, n) {
                        if (!n.target) return e;
                        if ("string" == typeof e) {
                            if (!tu.test(e)) return e;
                            e = parseFloat(e)
                        }
                        let i = iq(e, n.target.x),
                            r = iq(e, n.target.y);
                        return `${i}% ${r}%`
                    }
                },
                iZ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function i_(e, n, i = 1) {
                O(i <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [r, s] = function(e) {
                    let n = iZ.exec(e);
                    if (!n) return [, ];
                    let [, i, r] = n;
                    return [i, r]
                }(e);
                if (!r) return;
                let o = window.getComputedStyle(n).getPropertyValue(r);
                return o ? o.trim() : nt(s) ? i_(s, n, i + 1) : s
            }
            let iK = "_$css";
            class iJ extends o.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: n,
                        switchLayoutGroup: i,
                        layoutId: r
                    } = this.props, {
                        projection: s
                    } = e;
                    Object.assign(e3, i0), s && (n.group && n.group.add(s), i && i.register && r && i.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), s.setOptions({ ...s.options,
                        onExitComplete: () => this.safeToRemove()
                    })), eJ.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: n,
                        visualElement: i,
                        drag: r,
                        isPresent: s
                    } = this.props, o = i.projection;
                    return o && (o.isPresent = s, r || e.layoutDependency !== n || void 0 === n ? o.willUpdate() : this.safeToRemove(), e.isPresent === s || (s ? o.promote() : o.relegate() || y.postRender(() => {
                        let e = o.getStack();
                        e && e.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: n,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: r
                    } = e;
                    r && (r.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(r), i && i.deregister && i.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    e && e()
                }
                render() {
                    return null
                }
            }

            function iQ(e) {
                let [n, i] = function() {
                    let e = (0, o.useContext)(ek);
                    if (null === e) return [!0, null];
                    let {
                        isPresent: n,
                        onExitComplete: i,
                        register: r
                    } = e, s = (0, o.useId)();
                    (0, o.useEffect)(() => r(s), []);
                    let a = () => i && i(s);
                    return !n && i ? [!1, a] : [!0]
                }(), r = (0, o.useContext)(eF);
                return o.createElement(iJ, { ...e,
                    layoutGroup: r,
                    switchLayoutGroup: (0, o.useContext)(e0),
                    isPresent: n,
                    safeToRemove: i
                })
            }
            let i0 = {
                    borderRadius: { ...iG,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: iG,
                    borderTopRightRadius: iG,
                    borderBottomLeftRadius: iG,
                    borderBottomRightRadius: iG,
                    boxShadow: {
                        correct(e, {
                            treeScale: n,
                            projectionDelta: i
                        }) {
                            let r = e,
                                s = e.includes("var("),
                                o = [];
                            s && (e = e.replace(iZ, e => (o.push(e), iK)));
                            let a = tR.parse(e);
                            if (a.length > 5) return r;
                            let l = tR.createTransformer(e),
                                u = "number" != typeof a[0] ? 1 : 0,
                                h = i.x.scale * n.x,
                                c = i.y.scale * n.y;
                            a[0 + u] /= h, a[1 + u] /= c;
                            let d = tm(h, c, .5);
                            "number" == typeof a[2 + u] && (a[2 + u] /= d), "number" == typeof a[3 + u] && (a[3 + u] /= d);
                            let p = l(a);
                            if (s) {
                                let f = 0;
                                p = p.replace(iK, () => {
                                    let e = o[f];
                                    return f++, e
                                })
                            }
                            return p
                        }
                    }
                },
                i1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                i5 = i1.length,
                i2 = e => "string" == typeof e ? parseFloat(e) : e,
                i3 = e => "number" == typeof e || tu.test(e);

            function i9(e, n) {
                return void 0 !== e[n] ? e[n] : e.borderRadius
            }
            let i4 = i8(0, .5, t$),
                i6 = i8(.5, .95, O);

            function i8(e, n, i) {
                return r => r < e ? 0 : r > n ? 1 : i(tj(e, n, r))
            }

            function i7(e, n) {
                e.min = n.min, e.max = n.max
            }

            function rt(e, n) {
                i7(e.x, n.x), i7(e.y, n.y)
            }

            function re(e, n, i, r, s) {
                return e -= n, e = r + 1 / i * (e - r), void 0 !== s && (e = r + 1 / s * (e - r)), e
            }

            function rn(e, n, [i, r, s], o, a) {
                ! function(e, n = 0, i = 1, r = .5, s, o = e, a = e) {
                    if (tl.test(n)) {
                        n = parseFloat(n);
                        let l = tm(a.min, a.max, n / 100);
                        n = l - a.min
                    }
                    if ("number" != typeof n) return;
                    let u = tm(o.min, o.max, r);
                    e === o && (u -= n), e.min = re(e.min, n, i, u, s), e.max = re(e.max, n, i, u, s)
                }(e, n[i], n[r], n[s], n.scale, o, a)
            }
            let ri = ["x", "scaleX", "originX"],
                rr = ["y", "scaleY", "originY"];

            function rs(e, n, i, r) {
                rn(e.x, n, ri, i ? i.x : void 0, r ? r.x : void 0), rn(e.y, n, rr, i ? i.y : void 0, r ? r.y : void 0)
            }

            function ro(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function ra(e) {
                return ro(e.x) && ro(e.y)
            }

            function rl(e, n) {
                return e.x.min === n.x.min && e.x.max === n.x.max && e.y.min === n.y.min && e.y.max === n.y.max
            }

            function ru(e) {
                return ic(e.x) / ic(e.y)
            }
            class rh {
                constructor() {
                    this.members = []
                }
                add(e) {
                    E(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if (T(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let n = this.members[this.members.length - 1];
                        n && this.promote(n)
                    }
                }
                relegate(e) {
                    let n;
                    let i = this.members.findIndex(n => e === n);
                    if (0 === i) return !1;
                    for (let r = i; r >= 0; r--) {
                        let s = this.members[r];
                        if (!1 !== s.isPresent) {
                            n = s;
                            break
                        }
                    }
                    return !!n && (this.promote(n), !0)
                }
                promote(e, n) {
                    let i = this.lead;
                    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
                        i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = e.options;
                        !1 === r && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        let {
                            options: n,
                            resumingFrom: i
                        } = e;
                        n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function rc(e, n, i) {
                let r = "",
                    s = e.x.translate / n.x,
                    o = e.y.translate / n.y;
                if ((s || o) && (r = `translate3d(${s}px, ${o}px, 0) `), (1 !== n.x || 1 !== n.y) && (r += `scale(${1/n.x}, ${1/n.y}) `), i) {
                    let {
                        rotate: a,
                        rotateX: l,
                        rotateY: u
                    } = i;
                    a && (r += `rotate(${a}deg) `), l && (r += `rotateX(${l}deg) `), u && (r += `rotateY(${u}deg) `)
                }
                let h = e.x.scale * n.x,
                    c = e.y.scale * n.y;
                return (1 !== h || 1 !== c) && (r += `scale(${h}, ${c})`), r || "none"
            }
            let rd = (e, n) => e.depth - n.depth;
            class rp {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    E(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    T(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(rd), this.isDirty = !1, this.children.forEach(e)
                }
            }
            let rf = ["", "X", "Y", "Z"],
                rm = 0,
                rg = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function ry({
                attachResizeListener: e,
                defaultParent: n,
                measureScroll: i,
                checkIsScrollRoot: r,
                resetTransform: s
            }) {
                return class {
                    constructor(e, i = {}, r = null == n ? void 0 : n()) {
                        this.id = rm++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            rg.totalNodes = rg.resolvedTargetDeltas = rg.recalculatedProjection = 0, this.nodes.forEach(rb), this.nodes.forEach(rA), this.nodes.forEach(rC), this.nodes.forEach(rw), window.MotionDebug && window.MotionDebug.record(rg)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = i, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                        for (let s = 0; s < this.path.length; s++) this.path[s].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rp)
                    }
                    addEventListener(e, n) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new S), this.eventHandlers.get(e).add(n)
                    }
                    notifyListeners(e, ...n) {
                        let i = this.eventHandlers.get(e);
                        i && i.notify(...n)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    registerPotentialNode(e, n) {
                        this.potentialNodes.set(e, n)
                    }
                    mount(n, i = !1) {
                        if (this.instance) return;
                        this.isSVG = n instanceof SVGElement && "svg" !== n.tagName, this.instance = n;
                        let {
                            layoutId: r,
                            layout: s,
                            visualElement: o
                        } = this.options;
                        if (o && !o.current && o.mount(n), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), i && (s || r) && (this.isLayoutDirty = !0), e) {
                            let a;
                            let l = () => this.root.updateBlockedByResize = !1;
                            e(n, () => {
                                this.root.updateBlockedByResize = !0, a && a(), a = es(l, 250), eJ.hasAnimatedSinceResize && (eJ.hasAnimatedSinceResize = !1, this.nodes.forEach(rS))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && o && (r || s) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: n,
                            hasRelativeTargetChanged: i,
                            layout: r
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let s = this.options.transition || o.getDefaultTransition() || rD,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: l
                                } = o.getProps(),
                                u = !this.targetLayout || !rl(this.targetLayout, r) || i,
                                h = !n && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || n && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, h);
                                let c = { ...eS(s, "layout"),
                                    onPlay: a,
                                    onComplete: l
                                };
                                (o.shouldReduceMotion || this.options.layoutRoot) && (c.delay = 0, c.type = !1), this.startAnimation(c)
                            } else n || 0 !== this.animationProgress || rS(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let e = this.getStack();
                        e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, v.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(rV), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: e
                        } = this.options;
                        return e && e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        if (this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let n = 0; n < this.path.length; n++) {
                            let i = this.path[n];
                            i.shouldResetTransform = !0, i.updateScroll("snapshot"), i.options.layoutRoot && i.willUpdate(!1)
                        }
                        let {
                            layoutId: r,
                            layout: s
                        } = this.options;
                        if (void 0 === r && !s) return;
                        let o = this.getTransformTemplate();
                        this.prevTransformTemplateValue = o ? o(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rE);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(rB), this.potentialNodes.clear()), this.nodes.forEach(rT), this.nodes.forEach(rv), this.nodes.forEach(rx), this.clearAllSnapshots(), x.update(), x.preRender(), x.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(rP), this.sharedNodes.forEach(rM)
                    }
                    scheduleUpdateProjection() {
                        y.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        y.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let n = this.path[e];
                                n.updateScroll()
                            }
                        let i = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = iA(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: r
                        } = this.options;
                        r && r.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
                    }
                    updateScroll(e = "measure") {
                        let n = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (n = !1), n && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: r(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!s) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !ra(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            r = i ? i(this.latestValues, "") : void 0,
                            o = r !== this.prevTransformTemplateValue;
                        e && (n || ik(this.latestValues) || o) && (s(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var n;
                        let i = this.measurePageBox(),
                            r = this.removeElementScroll(i);
                        return e && (r = this.removeTransform(r)), rj((n = r).x), rj(n.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return iA();
                        let n = e.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (iO(n.x, i.offset.x), iO(n.y, i.offset.y)), n
                    }
                    removeElementScroll(e) {
                        let n = iA();
                        rt(n, e);
                        for (let i = 0; i < this.path.length; i++) {
                            let r = this.path[i],
                                {
                                    scroll: s,
                                    options: o
                                } = r;
                            if (r !== this.root && s && o.layoutScroll) {
                                if (s.isRoot) {
                                    rt(n, e);
                                    let {
                                        scroll: a
                                    } = this.root;
                                    a && (iO(n.x, -a.offset.x), iO(n.y, -a.offset.y))
                                }
                                iO(n.x, s.offset.x), iO(n.y, s.offset.y)
                            }
                        }
                        return n
                    }
                    applyTransform(e, n = !1) {
                        let i = iA();
                        rt(i, e);
                        for (let r = 0; r < this.path.length; r++) {
                            let s = this.path[r];
                            !n && s.options.layoutScroll && s.scroll && s !== s.root && i$(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), ik(s.latestValues) && i$(i, s.latestValues)
                        }
                        return ik(this.latestValues) && i$(i, this.latestValues), i
                    }
                    removeTransform(e) {
                        let n = iA();
                        rt(n, e);
                        for (let i = 0; i < this.path.length; i++) {
                            let r = this.path[i];
                            if (!r.instance || !ik(r.latestValues)) continue;
                            iR(r.latestValues) && r.updateSnapshot();
                            let s = iA(),
                                o = r.measurePageBox();
                            rt(s, o), rs(n, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, s)
                        }
                        return ik(this.latestValues) && rs(n, this.latestValues), n
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(e) {
                        this.options = { ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var e, n, i, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = Boolean(this.resumingFrom) || this !== s,
                            a = !(o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: l,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (l || u)) {
                            if (!this.targetDelta && !this.relativeTarget) {
                                let h = this.getClosestProjectingParent();
                                h && h.layout ? (this.relativeParent = h, this.relativeTarget = iA(), this.relativeTargetOrigin = iA(), iv(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = iA(), this.targetWithTransforms = iA()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (n = this.target, i = this.relativeTarget, r = this.relativeParent.target, ig(n.x, i.x, r.x), ig(n.y, i.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : rt(this.target, this.layout.layoutBox), ij(this.target, this.targetDelta)) : rt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let c = this.getClosestProjectingParent();
                                    c && Boolean(c.resumingFrom) === Boolean(this.resumingFrom) && !c.options.layoutScroll && c.target ? (this.relativeParent = c, this.relativeTarget = iA(), this.relativeTargetOrigin = iA(), iv(this.relativeTargetOrigin, this.target, c.target), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                rg.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || iR(this.parent.latestValues) || iL(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var e;
                        let n = this.getLead(),
                            i = Boolean(this.resumingFrom) || this !== n,
                            r = !0;
                        if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), r) return;
                        let {
                            layout: s,
                            layoutId: o
                        } = this.options;
                        if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || o)) return;
                        rt(this.layoutCorrected, this.layout.layoutBox),
                            function(e, n, i, r = !1) {
                                let s, o;
                                let a = i.length;
                                if (a) {
                                    n.x = n.y = 1;
                                    for (let l = 0; l < a; l++) {
                                        o = (s = i[l]).projectionDelta;
                                        let u = s.instance;
                                        (!u || !u.style || "contents" !== u.style.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && i$(e, {
                                            x: -s.scroll.offset.x,
                                            y: -s.scroll.offset.y
                                        }), o && (n.x *= o.x.scale, n.y *= o.y.scale, ij(e, o)), r && ik(s.latestValues) && i$(e, s.latestValues))
                                    }
                                    n.x = iF(n.x), n.y = iF(n.y)
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, i);
                        let {
                            target: a
                        } = n;
                        if (!a) return;
                        this.projectionDelta || (this.projectionDelta = iT(), this.projectionDeltaWithTransform = iT());
                        let l = this.treeScale.x,
                            u = this.treeScale.y,
                            h = this.projectionTransform;
                        im(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.projectionTransform = rc(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== l || this.treeScale.y !== u) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), rg.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), e) {
                            let n = this.getStack();
                            n && n.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, n = !1) {
                        let i;
                        let r = this.snapshot,
                            s = r ? r.latestValues : {},
                            o = { ...this.latestValues
                            },
                            a = iT();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !n;
                        let l = iA(),
                            u = r ? r.source : void 0,
                            h = this.layout ? this.layout.source : void 0,
                            c = u !== h,
                            d = this.getStack(),
                            p = !d || d.members.length <= 1,
                            f = Boolean(c && !p && !0 === this.options.crossfade && !this.path.some(rL));
                        this.animationProgress = 0, this.mixTargetDelta = n => {
                            var r, u;
                            let h = n / 1e3;
                            rR(a.x, e.x, h), rR(a.y, e.y, h), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (iv(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, u = this.relativeTargetOrigin, rk(r.x, u.x, l.x, h), rk(r.y, u.y, l.y, h), i && rl(this.relativeTarget, i) && (this.isProjectionDirty = !1), i || (i = iA()), rt(i, this.relativeTarget)), c && (this.animationValues = o, function(e, n, i, r, s, o) {
                                s ? (e.opacity = tm(0, void 0 !== i.opacity ? i.opacity : 1, i4(r)), e.opacityExit = tm(void 0 !== n.opacity ? n.opacity : 1, 0, i6(r))) : o && (e.opacity = tm(void 0 !== n.opacity ? n.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                                for (let a = 0; a < i5; a++) {
                                    let l = `border${i1[a]}Radius`,
                                        u = i9(n, l),
                                        h = i9(i, l);
                                    if (void 0 === u && void 0 === h) continue;
                                    u || (u = 0), h || (h = 0);
                                    let c = 0 === u || 0 === h || i3(u) === i3(h);
                                    c ? (e[l] = Math.max(tm(i2(u), i2(h), r), 0), (tl.test(h) || tl.test(u)) && (e[l] += "%")) : e[l] = h
                                }(n.rotate || i.rotate) && (e.rotate = tm(n.rotate || 0, i.rotate || 0, r))
                            }(o, s, this.latestValues, h, f, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = h
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (v.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = y.update(() => {
                            eJ.hasAnimatedSinceResize = !0, this.currentAnimation = eV(0, 1e3, { ...e,
                                onUpdate: n => {
                                    this.mixTargetDelta(n), e.onUpdate && e.onUpdate(n)
                                },
                                onComplete: () => {
                                    e.onComplete && e.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let e = this.getStack();
                        e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: n,
                                target: i,
                                layout: r,
                                latestValues: s
                            } = e;
                        if (n && i && r) {
                            if (this !== e && this.layout && r && rF(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                i = this.target || iA();
                                let o = ic(this.layout.layoutBox.x);
                                i.x.min = e.target.x.min, i.x.max = i.x.min + o;
                                let a = ic(this.layout.layoutBox.y);
                                i.y.min = e.target.y.min, i.y.max = i.y.min + a
                            }
                            rt(n, i), i$(n, s), im(this.projectionDeltaWithTransform, this.layoutCorrected, n, s)
                        }
                    }
                    registerSharedNode(e, n) {
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new rh);
                        let i = this.sharedNodes.get(e);
                        i.add(n);
                        let r = n.options.initialPromotionConfig;
                        n.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(n) : void 0
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: n
                        } = this.options;
                        return n && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: n
                        } = this.options;
                        return n ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: n,
                        preserveFollowOpacity: i
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, i), e && (this.projectionDelta = void 0, this.needsReset = !0), n && this.setOptions({
                            transition: n
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let n = !1,
                            {
                                latestValues: i
                            } = e;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (n = !0), !n) return;
                        let r = {};
                        for (let s = 0; s < rf.length; s++) {
                            let o = "rotate" + rf[s];
                            i[o] && (r[o] = i[o], e.setStaticValue(o, 0))
                        }
                        for (let a in e.render(), r) e.setStaticValue(a, r[a]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e = {}) {
                        var n, i;
                        let r = {};
                        if (!this.instance || this.isSVG) return r;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        r.visibility = "";
                        let s = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = nC(e.pointerEvents) || "", r.transform = s ? s(this.latestValues, "") : "none", r;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let a = {};
                            return this.options.layoutId && (a.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, a.pointerEvents = nC(e.pointerEvents) || ""), this.hasProjected && !ik(this.latestValues) && (a.transform = s ? s({}, "") : "none", this.hasProjected = !1), a
                        }
                        let l = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), r.transform = rc(this.projectionDeltaWithTransform, this.treeScale, l), s && (r.transform = s(l, r.transform));
                        let {
                            x: u,
                            y: h
                        } = this.projectionDelta;
                        for (let c in r.transformOrigin = `${100*u.origin}% ${100*h.origin}% 0`, o.animationValues ? r.opacity = o === this ? null !== (i = null !== (n = l.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : r.opacity = o === this ? void 0 !== l.opacity ? l.opacity : "" : void 0 !== l.opacityExit ? l.opacityExit : 0, e3) {
                            if (void 0 === l[c]) continue;
                            let {
                                correct: d,
                                applyTo: p
                            } = e3[c], f = "none" === r.transform ? l[c] : d(l[c], o);
                            if (p) {
                                let m = p.length;
                                for (let g = 0; g < m; g++) r[p[g]] = f
                            } else r[c] = f
                        }
                        return this.options.layoutId && (r.pointerEvents = o === this ? nC(e.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var n;
                            return null === (n = e.currentAnimation) || void 0 === n ? void 0 : n.stop()
                        }), this.root.nodes.forEach(rE), this.root.sharedNodes.clear()
                    }
                }
            }

            function rv(e) {
                e.updateLayout()
            }

            function rx(e) {
                var n;
                let i = (null === (n = e.resumeFrom) || void 0 === n ? void 0 : n.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: r,
                        measuredBox: s
                    } = e.layout, {
                        animationType: o
                    } = e.options, a = i.source !== e.layout.source;
                    "size" === o ? iC(e => {
                        let n = a ? i.measuredBox[e] : i.layoutBox[e],
                            s = ic(n);
                        n.min = r[e].min, n.max = n.min + s
                    }) : rF(o, i.layoutBox, r) && iC(e => {
                        let n = a ? i.measuredBox[e] : i.layoutBox[e],
                            s = ic(r[e]);
                        n.max = n.min + s
                    });
                    let l = iT();
                    im(l, r, i.layoutBox);
                    let u = iT();
                    a ? im(u, e.applyTransform(s, !0), i.measuredBox) : im(u, r, i.layoutBox);
                    let h = !ra(l),
                        c = !1;
                    if (!e.resumeFrom) {
                        let d = e.getClosestProjectingParent();
                        if (d && !d.resumeFrom) {
                            let {
                                snapshot: p,
                                layout: f
                            } = d;
                            if (p && f) {
                                let m = iA();
                                iv(m, i.layoutBox, p.layoutBox);
                                let g = iA();
                                iv(g, r, f.layoutBox), rl(m, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = m, e.relativeParent = d)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: r,
                        snapshot: i,
                        delta: u,
                        layoutDelta: l,
                        hasLayoutChanged: h,
                        hasRelativeTargetChanged: c
                    })
                } else if (e.isLead()) {
                    let {
                        onExitComplete: y
                    } = e.options;
                    y && y()
                }
                e.options.transition = void 0
            }

            function rb(e) {
                rg.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
            }

            function rw(e) {
                e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
            }

            function rP(e) {
                e.clearSnapshot()
            }

            function rE(e) {
                e.clearMeasurements()
            }

            function rT(e) {
                let {
                    visualElement: n
                } = e.options;
                n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function rS(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function rA(e) {
                e.resolveTargetDelta()
            }

            function rC(e) {
                e.calcProjection()
            }

            function rV(e) {
                e.resetRotation()
            }

            function rM(e) {
                e.removeLeadSnapshot()
            }

            function rR(e, n, i) {
                e.translate = tm(n.translate, 0, i), e.scale = tm(n.scale, 1, i), e.origin = n.origin, e.originPoint = n.originPoint
            }

            function rk(e, n, i, r) {
                e.min = tm(n.min, i.min, r), e.max = tm(n.max, i.max, r)
            }

            function rL(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let rD = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function rB(e, n) {
                let i = e.root;
                for (let r = e.path.length - 1; r >= 0; r--)
                    if (Boolean(e.path[r].instance)) {
                        i = e.path[r];
                        break
                    }
                let s = i && i !== e.root ? i.instance : document,
                    o = s.querySelector(`[data-projection-id="${n}"]`);
                o && e.mount(o, !0)
            }

            function rj(e) {
                e.min = Math.round(e.min), e.max = Math.round(e.max)
            }

            function rF(e, n, i) {
                return "position" === e || "preserve-aspect" === e && !id(ru(n), ru(i), .2)
            }
            let rO = ry({
                    attachResizeListener: (e, n) => nk(e, "resize", n),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                rI = {
                    current: void 0
                },
                rN = ry({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent() {
                        if (!rI.current) {
                            let e = new rO(0, {});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), rI.current = e
                        }
                        return rI.current
                    },
                    resetTransform(e, n) {
                        e.style.transform = void 0 !== n ? n : "none"
                    },
                    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                }),
                rU = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                r$ = e => rU.has(e),
                rH = e => Object.keys(e).some(r$),
                rz = e => e === K || e === tu,
                rW = (e, n) => parseFloat(e.split(", ")[n]),
                rY = (e, n) => (i, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let s = r.match(/^matrix3d\((.+)\)$/);
                    if (s) return rW(s[1], n); {
                        let o = r.match(/^matrix\((.+)\)$/);
                        return o ? rW(o[1], e) : 0
                    }
                },
                rX = new Set(["x", "y", "z"]),
                rq = eo.filter(e => !rX.has(e)),
                rG = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: n = "0",
                        paddingRight: i = "0"
                    }) => e.max - e.min - parseFloat(n) - parseFloat(i),
                    height: ({
                        y: e
                    }, {
                        paddingTop: n = "0",
                        paddingBottom: i = "0"
                    }) => e.max - e.min - parseFloat(n) - parseFloat(i),
                    top: (e, {
                        top: n
                    }) => parseFloat(n),
                    left: (e, {
                        left: n
                    }) => parseFloat(n),
                    bottom: ({
                        y: e
                    }, {
                        top: n
                    }) => parseFloat(n) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: n
                    }) => parseFloat(n) + (e.max - e.min),
                    x: rY(4, 13),
                    y: rY(5, 14)
                },
                rZ = (e, n, i) => {
                    let r = n.measureViewportBox(),
                        s = n.current,
                        o = getComputedStyle(s),
                        {
                            display: a
                        } = o,
                        l = {};
                    "none" === a && n.setStaticValue("display", e.display || "block"), i.forEach(e => {
                        l[e] = rG[e](r, o)
                    }), n.render();
                    let u = n.measureViewportBox();
                    return i.forEach(i => {
                        let r = n.getValue(i);
                        r && r.jump(l[i]), e[i] = rG[i](u, o)
                    }), e
                },
                r_ = (e, n, i = {}, r = {}) => {
                    n = { ...n
                    }, r = { ...r
                    };
                    let s = Object.keys(n).filter(r$),
                        o = [],
                        a = !1,
                        l = [];
                    if (s.forEach(s => {
                            let u;
                            let h = e.getValue(s);
                            if (!e.hasValue(s)) return;
                            let c = i[s],
                                d = n1(c),
                                p = n[s];
                            if (nT(p)) {
                                let f = p.length,
                                    m = null === p[0] ? 1 : 0;
                                d = n1(c = p[m]);
                                for (let g = m; g < f; g++) u ? O(n1(p[g]) === u, "All keyframes must be of the same type") : O((u = n1(p[g])) === d || rz(d) && rz(u), "Keyframes must be of the same dimension as the current value")
                            } else u = n1(p);
                            if (d !== u) {
                                if (rz(d) && rz(u)) {
                                    let y = h.get();
                                    "string" == typeof y && h.set(parseFloat(y)), "string" == typeof p ? n[s] = parseFloat(p) : Array.isArray(p) && u === tu && (n[s] = p.map(parseFloat))
                                } else(null == d ? void 0 : d.transform) && (null == u ? void 0 : u.transform) && (0 === c || 0 === p) ? 0 === c ? h.set(u.transform(c)) : n[s] = d.transform(p) : (a || (o = function(e) {
                                    let n = [];
                                    return rq.forEach(i => {
                                        let r = e.getValue(i);
                                        void 0 !== r && (n.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
                                    }), n.length && e.render(), n
                                }(e), a = !0), l.push(s), r[s] = void 0 !== r[s] ? r[s] : n[s], h.jump(p))
                            }
                        }), !l.length) return {
                        target: n,
                        transitionEnd: r
                    }; {
                        let u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            h = rZ(n, e, l);
                        return o.length && o.forEach(([n, i]) => {
                            e.getValue(n).set(i)
                        }), e.render(), D && null !== u && window.scrollTo({
                            top: u
                        }), {
                            target: h,
                            transitionEnd: r
                        }
                    }
                },
                rK = (e, n, i, r) => {
                    var s, o;
                    let a = function(e, { ...n
                    }, i) {
                        let r = e.current;
                        if (!(r instanceof Element)) return {
                            target: n,
                            transitionEnd: i
                        };
                        for (let s in i && (i = { ...i
                            }), e.values.forEach(e => {
                                let n = e.get();
                                if (!nt(n)) return;
                                let i = i_(n, r);
                                i && e.set(i)
                            }), n) {
                            let o = n[s];
                            if (!nt(o)) continue;
                            let a = i_(o, r);
                            a && (n[s] = a, i && void 0 === i[s] && (i[s] = o))
                        }
                        return {
                            target: n,
                            transitionEnd: i
                        }
                    }(e, n, r);
                    return n = a.target, r = a.transitionEnd, s = n, o = r, rH(s) ? r_(e, s, i, o) : {
                        target: s,
                        transitionEnd: o
                    }
                },
                rJ = Object.keys(e_),
                rQ = rJ.length,
                r0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                r1 = eY.length;
            class r5 {
                constructor({
                    parent: e,
                    props: n,
                    presenceContext: i,
                    reducedMotionConfig: r,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => y.render(this.render, !1, !0);
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = n.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.isControllingVariants = eX(n), this.isVariantNode = eq(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(n, {});
                    for (let c in h) {
                        let d = h[c];
                        void 0 !== a[c] && eC(d) && (d.set(a[c], !1), n9(u) && u.add(c))
                    }
                }
                scrapeMotionValuesFromProps(e, n) {
                    return {}
                }
                mount(e) {
                    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, n) => this.bindToMotionValue(n, e)), j.current || F(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || B.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in this.projection && this.projection.unmount(), v.update(this.notifyUpdate), v.render(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
                    for (let n in this.features) this.features[n].unmount();
                    this.current = null
                }
                bindToMotionValue(e, n) {
                    let i = ea.has(e),
                        r = n.on("change", n => {
                            this.latestValues[e] = n, this.props.onUpdate && y.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = n.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        r(), s()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures({
                    children: e,
                    ...n
                }, i, r, s, o) {
                    let a, l;
                    for (let u = 0; u < rQ; u++) {
                        let h = rJ[u],
                            {
                                isEnabled: c,
                                Feature: d,
                                ProjectionNode: p,
                                MeasureLayout: f
                            } = e_[h];
                        p && (a = p), c(n) && (!this.features[h] && d && (this.features[h] = new d(this)), f && (l = f))
                    }
                    if (!this.projection && a) {
                        this.projection = new a(s, this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: m,
                            layout: g,
                            drag: y,
                            dragConstraints: v,
                            layoutScroll: x,
                            layoutRoot: b
                        } = n;
                        this.projection.setOptions({
                            layoutId: m,
                            layout: g,
                            alwaysMeasureLayout: Boolean(y) || v && e$(v),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof g ? g : "both",
                            initialPromotionConfig: o,
                            layoutScroll: x,
                            layoutRoot: b
                        })
                    }
                    return l
                }
                updateFeatures() {
                    for (let e in this.features) {
                        let n = this.features[e];
                        n.isMounted ? n.update(this.props, this.prevProps) : (n.mount(), n.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iA()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, n) {
                    this.latestValues[e] = n
                }
                makeTargetAnimatable(e, n = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, n)
                }
                update(e, n) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
                    for (let i = 0; i < r0.length; i++) {
                        let r = r0[i];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let s = e["on" + r];
                        s && (this.propEventSubscriptions[r] = this.on(r, s))
                    }
                    this.prevMotionValues = function(e, n, i) {
                        let {
                            willChange: r
                        } = n;
                        for (let s in n) {
                            let o = n[s],
                                a = i[s];
                            if (eC(o)) e.addValue(s, o), n9(r) && r.add(s);
                            else if (eC(a)) e.addValue(s, M(o, {
                                owner: e
                            })), n9(r) && r.remove(s);
                            else if (a !== o) {
                                if (e.hasValue(s)) {
                                    let l = e.getValue(s);
                                    l.hasAnimated || l.set(o)
                                } else {
                                    let u = e.getStaticValue(s);
                                    e.addValue(s, M(void 0 !== u ? u : o, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let h in i) void 0 === n[h] && e.removeValue(h);
                        return n
                    }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(e = !1) {
                    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let n = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (n.initial = this.props.initial), n
                    }
                    let i = {};
                    for (let r = 0; r < r1; r++) {
                        let s = eY[r],
                            o = this.props[s];
                        (eH(o) || !1 === o) && (i[s] = o)
                    }
                    return i
                }
                addVariantChild(e) {
                    let n = this.getClosestVariantNode();
                    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
                }
                addValue(e, n) {
                    n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)), this.values.set(e, n), this.latestValues[e] = n.get()
                }
                removeValue(e) {
                    this.values.delete(e);
                    let n = this.valueSubscriptions.get(e);
                    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, n) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let i = this.values.get(e);
                    return void 0 === i && void 0 !== n && (i = M(n, {
                        owner: this
                    }), this.addValue(e, i)), i
                }
                readValue(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, n) {
                    this.baseTarget[e] = n
                }
                getBaseTarget(e) {
                    var n;
                    let {
                        initial: i
                    } = this.props, r = "string" == typeof i || "object" == typeof i ? null === (n = nE(this.props, i)) || void 0 === n ? void 0 : n[e] : void 0;
                    if (i && void 0 !== r) return r;
                    let s = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === s || eC(s) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : s
                }
                on(e, n) {
                    return this.events[e] || (this.events[e] = new S), this.events[e].add(n)
                }
                notify(e, ...n) {
                    this.events[e] && this.events[e].notify(...n)
                }
            }
            class r2 extends r5 {
                sortInstanceNodePosition(e, n) {
                    return 2 & e.compareDocumentPosition(n) ? 1 : -1
                }
                getBaseTargetFromProps(e, n) {
                    return e.style ? e.style[n] : void 0
                }
                removeValueFromRenderState(e, {
                    vars: n,
                    style: i
                }) {
                    delete n[e], delete i[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: n,
                    ...i
                }, {
                    transformValues: r
                }, s) {
                    let o = function(e, n, i) {
                        let r = {};
                        for (let s in e) {
                            let o = function(e, n) {
                                if (!n) return;
                                let i = n[e] || n.default || n;
                                return i.from
                            }(s, n);
                            if (void 0 !== o) r[s] = o;
                            else {
                                let a = i.getValue(s);
                                a && (r[s] = a.get())
                            }
                        }
                        return r
                    }(i, e || {}, this);
                    if (r && (n && (n = r(n)), i && (i = r(i)), o && (o = r(o))), s) {
                        ! function(e, n, i) {
                            var r, s;
                            let o = Object.keys(n).filter(n => !e.hasValue(n)),
                                a = o.length;
                            if (a)
                                for (let l = 0; l < a; l++) {
                                    let u = o[l],
                                        h = n[u],
                                        c = null;
                                    Array.isArray(h) && (c = h[0]), null === c && (c = null !== (s = null !== (r = i[u]) && void 0 !== r ? r : e.readValue(u)) && void 0 !== s ? s : n[u]), null != c && ("string" == typeof c && (nK(c) || nJ(c)) ? c = parseFloat(c) : !n2(c) && tR.test(h) && (c = eP(u, h)), e.addValue(u, M(c, {
                                        owner: e
                                    })), void 0 === i[u] && (i[u] = c), null !== c && e.setBaseTarget(u, c))
                                }
                        }(this, i, o);
                        let a = rK(this, i, o, n);
                        n = a.transitionEnd, i = a.target
                    }
                    return {
                        transition: e,
                        transitionEnd: n,
                        ...i
                    }
                }
            }
            class r3 extends r2 {
                readValueFromInstance(e, n) {
                    if (ea.has(n)) {
                        let i = ew(n);
                        return i && i.default || 0
                    } {
                        let r = window.getComputedStyle(e),
                            s = (e7(n) ? r.getPropertyValue(n) : r[n]) || 0;
                        return "string" == typeof s ? s.trim() : s
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: n
                }) {
                    return iH(e, n)
                }
                build(e, n, i, r) {
                    nn(e, n, i, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, n) {
                    return nw(e, n)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    eC(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
                renderInstance(e, n, i, r) {
                    nv(e, n, i, r)
                }
            }
            class r9 extends r2 {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, n) {
                    return e[n]
                }
                readValueFromInstance(e, n) {
                    if (ea.has(n)) {
                        let i = ew(n);
                        return i && i.default || 0
                    }
                    return n = nx.has(n) ? n : ny(n), e.getAttribute(n)
                }
                measureInstanceViewportBox() {
                    return iA()
                }
                scrapeMotionValuesFromProps(e, n) {
                    return nP(e, n)
                }
                build(e, n, i, r) {
                    np(e, n, i, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(e, n, i, r) {
                    nb(e, n, i, r)
                }
                mount(e) {
                    this.isSVGTag = nm(e.tagName), super.mount(e)
                }
            }
            let r4 = (e, n) => e2(e) ? new r9(n, {
                    enableHardwareAcceleration: !1
                }) : new r3(n, {
                    enableHardwareAcceleration: !0
                }),
                r6 = {
                    animation: {
                        Feature: class extends n$ {
                            constructor(e) {
                                super(e), e.animationState || (e.animationState = function(e) {
                                    let n = n => Promise.all(n.map(({
                                            animation: n,
                                            options: i
                                        }) => (function(e, n, i = {}) {
                                            let r;
                                            if (e.notify("AnimationStart", n), Array.isArray(n)) {
                                                let s = n.map(n => n6(e, n, i));
                                                r = Promise.all(s)
                                            } else if ("string" == typeof n) r = n6(e, n, i);
                                            else {
                                                let o = "function" == typeof n ? n3(e, n, i.custom) : n;
                                                r = n8(e, o, i)
                                            }
                                            return r.then(() => e.notify("AnimationComplete", n))
                                        })(e, n, i))),
                                        i = {
                                            animate: ii(!0),
                                            whileInView: ii(),
                                            whileHover: ii(),
                                            whileTap: ii(),
                                            whileDrag: ii(),
                                            whileFocus: ii(),
                                            exit: ii()
                                        },
                                        r = !0,
                                        s = (n, i) => {
                                            let r = n3(e, i);
                                            if (r) {
                                                let {
                                                    transition: s,
                                                    transitionEnd: o,
                                                    ...a
                                                } = r;
                                                n = { ...n,
                                                    ...a,
                                                    ...o
                                                }
                                            }
                                            return n
                                        };

                                    function o(o, a) {
                                        let l = e.getProps(),
                                            u = e.getVariantContext(!0) || {},
                                            h = [],
                                            c = new Set,
                                            d = {},
                                            p = 1 / 0;
                                        for (let f = 0; f < ie; f++) {
                                            var m;
                                            let g = it[f],
                                                y = i[g],
                                                v = void 0 !== l[g] ? l[g] : u[g],
                                                x = eH(v),
                                                b = g === a ? y.isActive : null;
                                            !1 === b && (p = f);
                                            let w = v === u[g] && v !== l[g] && x;
                                            if (w && r && e.manuallyAnimateOnMount && (w = !1), y.protectedKeys = { ...d
                                                }, !y.isActive && null === b || !v && !y.prevProp || ez(v) || "boolean" == typeof v) continue;
                                            let P = (m = y.prevProp, "string" == typeof v ? v !== m : !!Array.isArray(v) && !n_(v, m)),
                                                E = P || g === a && y.isActive && !w && x || f > p && x,
                                                T = Array.isArray(v) ? v : [v],
                                                S = T.reduce(s, {});
                                            !1 === b && (S = {});
                                            let {
                                                prevResolvedValues: A = {}
                                            } = y, C = { ...A,
                                                ...S
                                            }, V = e => {
                                                E = !0, c.delete(e), y.needsAnimating[e] = !0
                                            };
                                            for (let M in C) {
                                                let R = S[M],
                                                    k = A[M];
                                                d.hasOwnProperty(M) || (R !== k ? nT(R) && nT(k) ? !n_(R, k) || P ? V(M) : y.protectedKeys[M] = !0 : void 0 !== R ? V(M) : c.add(M) : void 0 !== R && c.has(M) ? V(M) : y.protectedKeys[M] = !0)
                                            }
                                            y.prevProp = v, y.prevResolvedValues = S, y.isActive && (d = { ...d,
                                                ...S
                                            }), r && e.blockInitialAnimation && (E = !1), E && !w && h.push(...T.map(e => ({
                                                animation: e,
                                                options: {
                                                    type: g,
                                                    ...o
                                                }
                                            })))
                                        }
                                        if (c.size) {
                                            let L = {};
                                            c.forEach(n => {
                                                let i = e.getBaseTarget(n);
                                                void 0 !== i && (L[n] = i)
                                            }), h.push({
                                                animation: L
                                            })
                                        }
                                        let D = Boolean(h.length);
                                        return r && !1 === l.initial && !e.manuallyAnimateOnMount && (D = !1), r = !1, D ? n(h) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: o,
                                        setActive: function(n, r, s) {
                                            var a;
                                            if (i[n].isActive === r) return Promise.resolve();
                                            null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                                                var i;
                                                return null === (i = e.animationState) || void 0 === i ? void 0 : i.setActive(n, r)
                                            }), i[n].isActive = r;
                                            let l = o(s, n);
                                            for (let u in i) i[u].protectedKeys = {};
                                            return l
                                        },
                                        setAnimateFunction: function(i) {
                                            n = i(e)
                                        },
                                        getState: () => i
                                    }
                                }(e))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: e
                                } = this.node.getProps();
                                this.unmount(), ez(e) && (this.unmount = e.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: e
                                } = this.node.getProps(), {
                                    animate: n
                                } = this.node.prevProps || {};
                                e !== n && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends n$ {
                            constructor() {
                                super(...arguments), this.id = ir++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: e,
                                    onExitComplete: n,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: r
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || e === r) return;
                                let s = this.node.animationState.setActive("exit", !e, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                n && !e && s.then(() => n(this.id))
                            }
                            mount() {
                                let {
                                    register: e
                                } = this.node.presenceContext || {};
                                e && (this.unmount = e(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends n$ {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: e = {}
                                } = this.node.getProps(), {
                                    root: n,
                                    margin: i,
                                    amount: r = "some",
                                    once: s
                                } = e, o = {
                                    root: n ? n.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof r ? r : nZ[r]
                                }, a = e => {
                                    let {
                                        isIntersecting: n
                                    } = e;
                                    if (this.isInView === n || (this.isInView = n, s && !n && this.hasEnteredView)) return;
                                    n && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", n);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: r
                                    } = this.node.getProps(), o = n ? i : r;
                                    o && o(e)
                                };
                                return function(e, n, i) {
                                    let r = function({
                                        root: e,
                                        ...n
                                    }) {
                                        let i = e || document;
                                        nX.has(i) || nX.set(i, {});
                                        let r = nX.get(i),
                                            s = JSON.stringify(n);
                                        return r[s] || (r[s] = new IntersectionObserver(nG, {
                                            root: e,
                                            ...n
                                        })), r[s]
                                    }(n);
                                    return nY.set(e, i), r.observe(e), () => {
                                        nY.delete(e), r.unobserve(e)
                                    }
                                }(this.node.current, o, a)
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: e,
                                    prevProps: n
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: e = {}
                                }, {
                                    viewport: n = {}
                                } = {}) {
                                    return i => e[i] !== n[i]
                                }(e, n));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends n$ {
                            constructor() {
                                super(...arguments), this.removeStartListeners = O, this.removeEndListeners = O, this.removeAccessibleListeners = O, this.startPointerPress = (e, n) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        r = (e, n) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: r
                                            } = this.node.getProps();
                                            y.update(() => {
                                                nz(this.node.current, e.target) ? i && i(e, n) : r && r(e, n)
                                            })
                                        },
                                        s = nj(window, "pointerup", r, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        o = nj(window, "pointercancel", (e, n) => this.cancelPress(e, n), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = tE(s, o), this.startPress(e, n)
                                }, this.startAccessiblePress = () => {
                                    let e = e => {
                                            if ("Enter" !== e.key || this.isPressing) return;
                                            let n = e => {
                                                "Enter" === e.key && this.checkPressEnd() && nW("up", (e, n) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && y.update(() => i(e, n))
                                                })
                                            };
                                            this.removeEndListeners(), this.removeEndListeners = nk(this.node.current, "keyup", n), nW("down", (e, n) => {
                                                this.startPress(e, n)
                                            })
                                        },
                                        n = nk(this.node.current, "keydown", e),
                                        i = () => {
                                            this.isPressing && nW("cancel", (e, n) => this.cancelPress(e, n))
                                        },
                                        r = nk(this.node.current, "blur", i);
                                    this.removeAccessibleListeners = tE(n, r)
                                }
                            }
                            startPress(e, n) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: r
                                } = this.node.getProps();
                                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && y.update(() => i(e, n))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let e = this.node.getProps();
                                return e.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !nU()
                            }
                            cancelPress(e, n) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && y.update(() => i(e, n))
                            }
                            mount() {
                                let e = this.node.getProps(),
                                    n = nj(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(e.onTapStart || e.onPointerStart)
                                    }),
                                    i = nk(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = tE(n, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends n$ {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let e = !1;
                                try {
                                    e = this.node.current.matches(":focus-visible")
                                } catch (n) {
                                    e = !0
                                }
                                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = tE(nk(this.node.current, "focus", () => this.onFocus()), nk(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends n$ {
                            mount() {
                                this.unmount = tE(nH(this.node, !0), nH(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends n$ {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = O
                            }
                            onPointerDown(e) {
                                this.session = new io(e, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: e,
                                    onPanStart: n,
                                    onPan: i,
                                    onPanEnd: r
                                } = this.node.getProps();
                                return {
                                    onSessionStart: iX(e),
                                    onStart: iX(n),
                                    onMove: i,
                                    onEnd: (e, n) => {
                                        delete this.session, r && y.update(() => r(e, n))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = nj(this.node.current, "pointerdown", e => this.onPointerDown(e))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends n$ {
                            constructor(e) {
                                super(e), this.removeGroupControls = O, this.removeListeners = O, this.controls = new iW(e)
                            }
                            mount() {
                                let {
                                    dragControls: e
                                } = this.node.getProps();
                                e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || O
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: rN,
                        MeasureLayout: iQ
                    },
                    layout: {
                        ProjectionNode: rN,
                        MeasureLayout: iQ
                    }
                },
                r8 = function(e) {
                    function n(n, i = {}) {
                        return function({
                            preloadedFeatures: e,
                            createVisualElement: n,
                            useRender: i,
                            useVisualState: r,
                            Component: s
                        }) {
                            e && function(e) {
                                for (let n in e) e_[n] = { ...e_[n],
                                    ...e[n]
                                }
                            }(e);
                            let a = (0, o.forwardRef)(function(a, l) {
                                var u, h;
                                let c;
                                let d = { ...(0, o.useContext)(R),
                                        ...a,
                                        layoutId: function({
                                            layoutId: e
                                        }) {
                                            let n = (0, o.useContext)(eF).id;
                                            return n && void 0 !== e ? n + "-" + e : e
                                        }(a)
                                    },
                                    {
                                        isStatic: p
                                    } = d,
                                    f = function(e) {
                                        let {
                                            initial: n,
                                            animate: i
                                        } = function(e, n) {
                                            if (eX(e)) {
                                                let {
                                                    initial: i,
                                                    animate: r
                                                } = e;
                                                return {
                                                    initial: !1 === i || eH(i) ? i : void 0,
                                                    animate: eH(r) ? r : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? n : {}
                                        }(e, (0, o.useContext)(eN));
                                        return (0, o.useMemo)(() => ({
                                            initial: n,
                                            animate: i
                                        }), [eG(n), eG(i)])
                                    }(a),
                                    m = p ? void 0 : k(() => {
                                        if (eJ.hasEverUpdated) return eQ++
                                    }),
                                    g = r(a, p);
                                if (!p && D) {
                                    f.visualElement = function(e, n, i, r) {
                                        let {
                                            visualElement: s
                                        } = (0, o.useContext)(eN), a = (0, o.useContext)(eU), l = (0, o.useContext)(ek), u = (0, o.useContext)(R).reducedMotion, h = (0, o.useRef)();
                                        r = r || a.renderer, !h.current && r && (h.current = r(e, {
                                            visualState: n,
                                            parent: s,
                                            props: i,
                                            presenceContext: l,
                                            blockInitialAnimation: !!l && !1 === l.initial,
                                            reducedMotionConfig: u
                                        }));
                                        let c = h.current;
                                        (0, o.useInsertionEffect)(() => {
                                            c && c.update(i, l)
                                        }), eM(() => {
                                            c && c.render()
                                        }), (0, o.useEffect)(() => {
                                            c && c.updateFeatures()
                                        });
                                        let d = window.HandoffAppearAnimations ? eM : o.useEffect;
                                        return d(() => {
                                            c && c.animationState && c.animationState.animateChanges()
                                        }), c
                                    }(s, g, d, n);
                                    let y = (0, o.useContext)(e0),
                                        v = (0, o.useContext)(eU).strict;
                                    f.visualElement && (c = f.visualElement.loadFeatures(d, v, e, m, y))
                                }
                                return o.createElement(eN.Provider, {
                                    value: f
                                }, c && f.visualElement ? o.createElement(c, {
                                    visualElement: f.visualElement,
                                    ...d
                                }) : null, i(s, a, m, (u = f.visualElement, h = l, (0, o.useCallback)(e => {
                                    e && g.mount && g.mount(e), u && (e ? u.mount(e) : u.unmount()), h && ("function" == typeof h ? h(e) : e$(h) && (h.current = e))
                                }, [u])), g, p, f.visualElement))
                            });
                            return a[e1] = s, a
                        }(e(n, i))
                    }
                    if ("undefined" == typeof Proxy) return n;
                    let i = new Map;
                    return new Proxy(n, {
                        get: (e, r) => (i.has(r) || i.set(r, n(r)), i.get(r))
                    })
                }((e, n) => (function(e, {
                    forwardMotionProps: n = !1
                }, i, r) {
                    let s = e2(e) ? nM : nR;
                    return { ...s,
                        preloadedFeatures: i,
                        useRender: function(e = !1) {
                            let n = (n, i, r, s, {
                                latestValues: a
                            }, l) => {
                                let u = e2(n) ? ng : ns,
                                    h = u(i, a, l, n),
                                    c = function(e, n, i) {
                                        let r = {};
                                        for (let s in e)("values" !== s || "object" != typeof e.values) && (nl(s) || !0 === i && na(s) || !n && !na(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
                                        return r
                                    }(i, "string" == typeof n, e),
                                    d = { ...c,
                                        ...h,
                                        ref: s
                                    },
                                    {
                                        children: p
                                    } = i,
                                    f = (0, o.useMemo)(() => eC(p) ? p.get() : p, [p]);
                                return r && (d["data-projection-id"] = r), (0, o.createElement)(n, { ...d,
                                    children: f
                                })
                            };
                            return n
                        }(n),
                        createVisualElement: r,
                        Component: e
                    }
                })(e, n, r6, r4)),
                r7 = e => "object" == typeof e && e.mix,
                st = e => r7(e) ? e.mix : void 0;

            function se(e, n, i, r) {
                let s = "function" == typeof n ? n : function(...e) {
                    let n = !Array.isArray(e[0]),
                        i = n ? 0 : -1,
                        r = e[0 + i],
                        s = e[1 + i],
                        o = e[2 + i],
                        a = e[3 + i],
                        l = tO(s, o, {
                            mixer: st(o[0]),
                            ...a
                        });
                    return n ? l(r) : l
                }(n, i, r);
                return Array.isArray(e) ? sn(e, s) : sn([e], ([e]) => s(e))
            }

            function sn(e, n) {
                let i = k(() => []);
                return function(e, n) {
                    let i = L(n()),
                        r = () => i.set(n());
                    return r(), eM(() => {
                        let n = () => y.update(r, !1, !0),
                            i = e.map(e => e.on("change", n));
                        return () => {
                            i.forEach(e => e()), v.update(r)
                        }
                    }), i
                }(e, () => {
                    i.length = 0;
                    let r = e.length;
                    for (let s = 0; s < r; s++) i[s] = e[s].get();
                    return n(i)
                })
            }
            let si = "undefined" != typeof window ? o.useLayoutEffect : () => {};

            function sr(...e) {
                return (...n) => {
                    for (let i of e) "function" == typeof i && i(...n)
                }
            }
            let ss = new Map,
                so = new Set;

            function sa() {
                if ("undefined" == typeof window) return;
                let e = e => {
                        let i = ss.get(e.target);
                        i || (i = new Set, ss.set(e.target, i), e.target.addEventListener("transitioncancel", n)), i.add(e.propertyName)
                    },
                    n = e => {
                        let i = ss.get(e.target);
                        if (i && (i.delete(e.propertyName), 0 === i.size && (e.target.removeEventListener("transitioncancel", n), ss.delete(e.target)), 0 === ss.size)) {
                            for (let r of so) r();
                            so.clear()
                        }
                    };
                document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", n)
            }

            function sl(e) {
                var n;
                let i;
                for (; e && (n = e, i = window.getComputedStyle(n), !/(auto|scroll)/.test(i.overflow + i.overflowX + i.overflowY));) e = e.parentElement;
                return e || document.scrollingElement || document.documentElement
            }

            function su(e) {
                var n;
                return "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform)
            }

            function sh() {
                return (sh = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function sc(e, n) {
                if (null == e) return {};
                var i, r, s = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) i = o[r], n.indexOf(i) >= 0 || (s[i] = e[i]);
                return s
            }
            "undefined" != typeof document && ("loading" !== document.readyState ? sa() : document.addEventListener("DOMContentLoaded", sa)), "undefined" != typeof window && window.visualViewport;
            var sd = "calc(100% - env(safe-area-inset-top) - 34px)",
                sp = "undefined" == typeof window,
                sf = {
                    stiffness: 300,
                    damping: 30,
                    mass: .2
                };

            function sm(e, n) {
                return e.reduce(function(e, i) {
                    return Math.abs(i - n) < Math.abs(e - n) ? i : e
                })
            }
            var sg = "react-modal-sheet-highlight";

            function sy(e) {
                var n = document.querySelector("body"),
                    i = document.getElementById(e),
                    r = document.getElementById(sg);
                i && r && (i.style.removeProperty("border-top-right-radius"), i.style.removeProperty("border-top-left-radius"), i.style.removeProperty("transform"), r.style.opacity = "0", i.addEventListener("transitionend", function e() {
                    var s;
                    i.style.removeProperty("overflow"), i.style.removeProperty("will-change"), i.style.removeProperty("transition"), n.style.removeProperty("background-color"), i.removeEventListener("transitionend", e), null == (s = r.parentNode) || s.removeChild(r)
                }))
            }

            function sv(e) {
                var n = e.snapTo,
                    i = e.sheetHeight;
                return n < 0 && console.warn("Snap point is out of bounds. Sheet height is " + i + " but snap point is " + (i + Math.abs(n)) + "."), Math.max(Math.round(n), 0)
            }
            var sx = sp ? o.useEffect : o.useLayoutEffect,
                sb = function(e, n) {
                    var i = sP(e);
                    (0, o.useEffect)(function() {
                        n && !i && e ? function(e) {
                            var n = document.querySelector("body"),
                                i = document.querySelector("#" + e);
                            if (i) {
                                var r = window.innerHeight;
                                n.style.backgroundColor = "#000", i.style.overflow = "hidden", i.style.willChange = "transform", i.style.transition = "transform 200ms linear", i.style.transform = "translateY(calc(env(safe-area-inset-top) + 12px)) scale(" + (r - 24) / r + ")", i.style.borderTopRightRadius = "10px", i.style.borderTopLeftRadius = "10px";
                                var s = document.createElement("div");
                                s.setAttribute("aria-hidden", "true"), s.id = sg, s.style.position = "absolute", s.style.top = "0px", s.style.left = "0px", s.style.bottom = "0px", s.style.right = "0px", s.style.opacity = "0", s.style.transition = "opacity 200ms linear", s.style.backgroundColor = "rgba(150, 150, 150, 0.1)", i.appendChild(s), requestAnimationFrame(function() {
                                    return s.style.opacity = "1"
                                })
                            }
                        }(n) : n && !e && i && sy(n)
                    }, [e, i]), (0, o.useEffect)(function() {
                        return function() {
                            n && e && sy(n)
                        }
                    }, [e])
                },
                sw = function(e, n) {
                    var i = sP(e),
                        r = (0, o.useRef)(!1),
                        s = (0, o.useCallback)(function() {
                            r.current ? (null == n.current.onCloseEnd || n.current.onCloseEnd(), r.current = !1) : (null == n.current.onOpenEnd || n.current.onOpenEnd(), r.current = !0)
                        }, [e, i]);
                    return (0, o.useEffect)(function() {
                        !i && e ? null == n.current.onOpenStart || n.current.onOpenStart() : !e && i && (null == n.current.onCloseStart || n.current.onCloseStart())
                    }, [e, i]), {
                        handleAnimationComplete: s
                    }
                };

            function sP(e) {
                var n = (0, o.useRef)();
                return (0, o.useEffect)(function() {
                    n.current = e
                }), n.current
            }

            function sE(e) {
                var n = (0, o.useRef)();
                return sx(function() {
                    n.current = e
                }), (0, o.useCallback)(function() {
                    for (var e = n.current, i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return null == e ? void 0 : e.apply(void 0, r)
                }, [])
            }
            var sT = (0, o.createContext)(void 0),
                sS = function() {
                    var e = (0, o.useContext)(sT);
                    if (!e) throw Error("Sheet context error");
                    return e
                },
                sA = "undefined" != typeof window && window.visualViewport,
                sC = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                sV = 0;

            function sM(e, n, i) {
                var r = e.style[n];
                return e.style[n] = i,
                    function() {
                        e.style[n] = r
                    }
            }

            function sR(e, n, i, r) {
                return e.addEventListener(n, i, r),
                    function() {
                        e.removeEventListener(n, i, r)
                    }
            }

            function sk(e) {
                for (var n = document.scrollingElement || document.documentElement; e && e !== n;) {
                    var i = sl(e);
                    if (i !== document.documentElement && i !== document.body && i !== e) {
                        var r = i.getBoundingClientRect().top,
                            s = e.getBoundingClientRect().top;
                        s > r + e.clientHeight && (i.scrollTop += s - r)
                    }
                    e = i.parentElement
                }
            }

            function sL(e) {
                return e instanceof HTMLInputElement && !sC.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
            }
            var sD = {
                    wrapper: {
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 9999999,
                        overflow: "hidden",
                        pointerEvents: "none"
                    },
                    backdrop: {
                        zIndex: 1,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(51, 51, 51, 0.5)",
                        touchAction: "none",
                        border: "none"
                    },
                    container: {
                        zIndex: 2,
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        backgroundColor: "#fff",
                        borderTopRightRadius: "8px",
                        borderTopLeftRadius: "8px",
                        boxShadow: "0px -2px 16px rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flexDirection: "column",
                        pointerEvents: "auto"
                    },
                    headerWrapper: {
                        width: "100%"
                    },
                    header: {
                        height: "40px",
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    indicator: {
                        width: "18px",
                        height: "4px",
                        borderRadius: "99px",
                        backgroundColor: "#ddd"
                    },
                    content: {
                        flex: 1,
                        overflow: "auto",
                        position: "relative"
                    }
                },
                sB = (0, o.forwardRef)(function(e, n) {
                    var i, r, l, u, h = e.onOpenStart,
                        c = e.onOpenEnd,
                        d = e.onClose,
                        p = e.onCloseStart,
                        f = e.onCloseEnd,
                        m = e.onSnap,
                        g = e.children,
                        y = e.isOpen,
                        v = e.snapPoints,
                        x = e.rootId,
                        b = e.mountPoint,
                        w = e.style,
                        P = e.detent,
                        E = void 0 === P ? "full-height" : P,
                        T = e.initialSnap,
                        S = void 0 === T ? 0 : T,
                        A = e.springConfig,
                        C = e.disableDrag,
                        V = void 0 !== C && C,
                        M = e.prefersReducedMotion,
                        R = sc(e, ["onOpenStart", "onOpenEnd", "onClose", "onCloseStart", "onCloseEnd", "onSnap", "children", "isOpen", "snapPoints", "rootId", "mountPoint", "style", "detent", "initialSnap", "springConfig", "disableDrag", "prefersReducedMotion"]),
                        k = (0, o.useRef)(null),
                        D = L(0),
                        O = (r = (i = (0, o.useState)(0))[0], l = i[1], sx(function() {
                            var e = function() {
                                return l(window.innerHeight)
                            };
                            return window.addEventListener("resize", e), e(),
                                function() {
                                    return window.removeEventListener("resize", e)
                                }
                        }, []), r),
                        I = function() {
                            j.current || F();
                            let [e] = (0, o.useState)(B.current);
                            return e
                        }(),
                        N = Boolean(void 0 !== M && M || I),
                        U = N ? {
                            type: "tween",
                            duration: .01
                        } : sh({
                            type: "spring"
                        }, void 0 === A ? sf : A),
                        $ = L(0),
                        H = (0, o.useRef)({
                            onOpenStart: h,
                            onOpenEnd: c,
                            onCloseStart: p,
                            onCloseEnd: f
                        });
                    sx(function() {
                        H.current = {
                            onOpenStart: h,
                            onOpenEnd: c,
                            onCloseStart: p,
                            onCloseEnd: f
                        }
                    }), v && console.assert(function(e) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n + 1] > e[n]) return !1;
                        return !0
                    }(v = v.map(function(e) {
                        return e > 0 && e <= 1 ? Math.round(e * O) : e < 0 ? O + e : e
                    })) || 0 === O, "Snap points need to be in descending order got: [" + v + "]");
                    var z = sE(function(e, n) {
                            var i = n.delta,
                                r = $.getVelocity();
                            r > 0 && D.set(10), r < 0 && D.set(-10), $.set(Math.max($.get() + i.y, 0))
                        }),
                        W = sE(function(e, n) {
                            if (n.velocity.y > 500) d();
                            else {
                                var i = k.current.getBoundingClientRect().height,
                                    r = $.get(),
                                    s = 0;
                                if (v) {
                                    var o = v.map(function(e) {
                                        return i - e
                                    }).filter(function(e) {
                                        return e >= 0
                                    });
                                    "content-height" !== E || o.includes(0) || o.unshift(0), s = sm(o, r)
                                } else r / i > .6 && (s = i);
                                if (eV($, s = sv({
                                        snapTo: s,
                                        sheetHeight: i
                                    }), U), v && m) {
                                    var a = Math.abs(Math.round(v[0] - s));
                                    m(v.indexOf(sm(v, a)))
                                }
                                s >= i && d()
                            }
                            D.set(0)
                        });
                    (0, o.useEffect)(function() {
                        v && m && m(y ? S : v.length - 1)
                    }, [y]), (0, o.useImperativeHandle)(n, function() {
                        return {
                            y: $,
                            snapTo: function(e) {
                                var n = k.current;
                                if (v && void 0 !== v[e] && null !== n) {
                                    var i = n.getBoundingClientRect().height,
                                        r = sv({
                                            snapTo: i - v[e],
                                            sheetHeight: i
                                        });
                                    eV($, r, U), m && m(e), r >= i && d()
                                }
                            }
                        }
                    }), sb(y, x), si(function() {
                        if (!u) {
                            var e, n, i, r, o, a;
                            return 1 == ++sV && (s = su(/^iPhone/i) || su(/^iPad/i) || su(/^Mac/i) && navigator.maxTouchPoints > 1 ? (n = 0, i = window.pageXOffset, r = window.pageYOffset, o = sr(sM(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), sM(document.documentElement, "overflow", "hidden"), sM(document.body, "marginTop", "-" + r + "px")), window.scrollTo(0, 0), a = sr(sR(document, "touchstart", function(i) {
                                    ((e = sl(i.target)) !== document.documentElement || e !== document.body) && (n = i.changedTouches[0].pageY)
                                }, {
                                    passive: !1,
                                    capture: !0
                                }), sR(document, "touchmove", function(i) {
                                    if (e === document.documentElement || e === document.body) {
                                        i.preventDefault();
                                        return
                                    }
                                    var r = i.changedTouches[0].pageY,
                                        s = e.scrollTop,
                                        o = e.scrollHeight - e.clientHeight;
                                    0 !== o && ((s <= 0 && r > n || s >= o && r < n) && i.preventDefault(), n = r)
                                }, {
                                    passive: !1,
                                    capture: !0
                                }), sR(document, "touchend", function(e) {
                                    var n = e.target;
                                    sL(n) && n !== document.activeElement && (e.preventDefault(), n.style.transform = "translateY(-2000px)", n.focus(), requestAnimationFrame(function() {
                                        n.style.transform = ""
                                    }))
                                }, {
                                    passive: !1,
                                    capture: !0
                                }), sR(document, "focus", function(e) {
                                    var n = e.target;
                                    sL(n) && (n.style.transform = "translateY(-2000px)", requestAnimationFrame(function() {
                                        n.style.transform = "", sA && (sA.height < window.innerHeight ? requestAnimationFrame(function() {
                                            sk(n)
                                        }) : sA.addEventListener("resize", function() {
                                            return sk(n)
                                        }, {
                                            once: !0
                                        }))
                                    }))
                                }, !0), sR(window, "scroll", function() {
                                    window.scrollTo(0, 0)
                                })), function() {
                                    o(), a(), window.scrollTo(i, r)
                                }) : sr(sM(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), sM(document.documentElement, "overflow", "hidden"))),
                                function() {
                                    0 == --sV && s()
                                }
                        }
                    }, [u = !y]);
                    var Y = (0, o.useMemo)(function() {
                            return V ? void 0 : {
                                drag: "y",
                                dragElastic: 0,
                                dragConstraints: {
                                    top: 0,
                                    bottom: 0
                                },
                                dragMomentum: !1,
                                dragPropagation: !1,
                                onDrag: z,
                                onDragEnd: W
                            }
                        }, [V]),
                        X = {
                            y: $,
                            sheetRef: k,
                            isOpen: y,
                            initialSnap: S,
                            snapPoints: v,
                            detent: E,
                            indicatorRotation: D,
                            callbacks: H,
                            dragProps: Y,
                            windowHeight: O,
                            animationOptions: U,
                            reduceMotion: N
                        },
                        q = (0, o.createElement)(sT.Provider, {
                            value: X
                        }, (0, o.createElement)("div", Object.assign({}, R, {
                            ref: n,
                            style: sh({}, sD.wrapper, w)
                        }), (0, o.createElement)(eI, null, y ? o.Children.map(g, function(e, n) {
                            return (0, o.cloneElement)(e, {
                                key: "sheet-child-" + n
                            })
                        }) : null)));
                    return sp ? q : (0, a.createPortal)(q, null != b ? b : document.body)
                }),
                sj = (0, o.forwardRef)(function(e, n) {
                    var i, r = e.children,
                        s = e.style,
                        a = e.className,
                        l = sc(e, ["children", "style", "className"]),
                        u = sS(),
                        h = u.y,
                        c = u.isOpen,
                        d = u.callbacks,
                        p = u.snapPoints,
                        f = u.initialSnap,
                        m = u.sheetRef,
                        g = u.windowHeight,
                        y = u.detent,
                        v = u.animationOptions,
                        x = u.reduceMotion,
                        b = sw(c, d).handleAnimationComplete,
                        w = p ? p[0] - p[void 0 === f ? 0 : f] : 0,
                        P = p ? p[0] : null,
                        E = null !== P ? "min(" + P + "px, " + sd + ")" : sd;
                    return (0, o.createElement)(r8.div, Object.assign({}, l, {
                        ref: (i = [m, n], function(e) {
                            i.forEach(function(n) {
                                "function" == typeof n ? n(e) : n && (n.current = e)
                            })
                        }),
                        className: "react-modal-sheet-container " + (void 0 === a ? "" : a),
                        style: sh({}, sD.container, void 0 === s ? {} : s, "full-height" === y && {
                            height: E
                        }, "content-height" === y && {
                            maxHeight: E
                        }, {
                            y: h
                        }),
                        initial: !x && {
                            y: g
                        },
                        animate: {
                            y: w,
                            transition: v
                        },
                        exit: {
                            y: g,
                            transition: v
                        },
                        onAnimationComplete: b
                    }), r)
                }),
                sF = (0, o.forwardRef)(function(e, n) {
                    var i = e.children,
                        r = e.style,
                        s = e.disableDrag,
                        a = e.className,
                        l = sc(e, ["children", "style", "disableDrag", "className"]),
                        u = sS().dragProps;
                    return (0, o.createElement)(r8.div, Object.assign({}, l, {
                        ref: n,
                        className: "react-modal-sheet-content " + (void 0 === a ? "" : a),
                        style: sh({}, sD.content, r)
                    }, s ? void 0 : u), i)
                }),
                sO = (0, o.forwardRef)(function(e, n) {
                    var i = e.children,
                        r = e.style,
                        s = e.disableDrag,
                        a = sc(e, ["children", "style", "disableDrag"]),
                        l = sS(),
                        u = l.indicatorRotation,
                        h = l.dragProps,
                        c = se(u, function(e) {
                            return "translateX(2px) rotate(" + e + "deg)"
                        }),
                        d = se(u, function(e) {
                            return "translateX(-2px) rotate(" + -1 * e + "deg)"
                        });
                    return (0, o.createElement)(r8.div, Object.assign({}, a, {
                        ref: n,
                        style: sh({}, sD.headerWrapper, r)
                    }, s ? void 0 : h), i || (0, o.createElement)("div", {
                        className: "react-modal-sheet-header",
                        style: sD.header
                    }, (0, o.createElement)(r8.span, {
                        className: "react-modal-sheet-drag-indicator",
                        style: sh({}, sD.indicator, {
                            transform: c
                        })
                    }), (0, o.createElement)(r8.span, {
                        className: "react-modal-sheet-drag-indicator",
                        style: sh({}, sD.indicator, {
                            transform: d
                        })
                    })))
                }),
                sI = function(e) {
                    return !!e.onClick || !!e.onTap
                },
                sN = (0, o.forwardRef)(function(e, n) {
                    var i = e.style,
                        r = e.className,
                        s = sc(e, ["style", "className"]),
                        a = sI(s) ? r8.button : r8.div,
                        l = sI(s) ? "auto" : "none";
                    return (0, o.createElement)(a, Object.assign({}, s, {
                        ref: n,
                        className: "react-modal-sheet-backdrop " + (void 0 === r ? "" : r),
                        style: sh({}, sD.backdrop, void 0 === i ? {} : i, {
                            pointerEvents: l
                        }),
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        }
                    }))
                }),
                sU = sB;
            sU.Container = sj, sU.Header = sO, sU.Content = sF, sU.Backdrop = sN;
            var s$ = sU
        }
    }
]);