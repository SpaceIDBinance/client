(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [205], {
        76539: function(e, t, s) {
            "use strict";
            var n, l = s(67294);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return l.createElement("svg", a({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), n || (n = l.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6.255a6.972 6.972 0 0 1-.965-2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5c.695 0 1.366.101 2 .29V6a4 4 0 0 0-4-4H6Zm1 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H8Zm15 3a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.212-2.3a1 1 0 0 1 .2 1.4l-2.625 3.5a1 1 0 0 1-1.4.2l-1.75-1.313a1 1 0 0 1 1.2-1.6l.95.713 2.024-2.7a1 1 0 0 1 1.4-.2Z",
                    fill: "currentColor"
                })))
            }
        },
        34205: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return e4
                }
            });
            var n, l, a, i, r = s(85893),
                d = s(45808),
                c = s(18051),
                o = s(9903),
                x = s(11163),
                m = s.n(x),
                h = s(67294),
                u = s(3888),
                p = s(65701),
                v = s.n(p);

            function j(e) {
                let {
                    isOpen: t,
                    onClose: s,
                    header: n,
                    children: l,
                    snapPoints: a,
                    disableDrag: i = !1
                } = e, d = null != a ? a : [.95, .8, 400];
                return (0, r.jsxs)(u.Z, {
                    snapPoints: d,
                    initialSnap: d.length - 1,
                    isOpen: t,
                    onClose: () => s(),
                    className: "lg:hidden",
                    style: {
                        zIndex: 5
                    },
                    disableDrag: i,
                    children: [(0, r.jsxs)(u.Z.Container, {
                        className: v()["react-modal-sheet-container"],
                        children: [(0, r.jsx)(u.Z.Header, {
                            className: v()["react-modal-sheet-header "],
                            children: n
                        }), (0, r.jsx)(u.Z.Content, {
                            children: l
                        })]
                    }), (0, r.jsx)(u.Z.Backdrop, {
                        onTap: s
                    })]
                })
            }
            var g = s(26580),
                f = s(72389),
                w = s(86341),
                b = s(41287),
                N = s(76227),
                k = s(78346),
                y = s(27484),
                C = s.n(y);

            function Z(e) {
                let {
                    timestamp: t
                } = e, s = C().unix(t), n = C()(), l = (0, k.l6)(t);
                return s.isBefore(n) ? l === w.O.gracePeriod ? (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("p", {
                        className: "text-warning",
                        children: "Grace Period"
                    }), (0, r.jsxs)("p", {
                        className: "text-warning text-xs font-normal",
                        children: ["(", (0, b.At)(s.add(90, "day").diff(n)), ")"]
                    })]
                }) : l === w.O.premium ? (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("span", {
                        className: "text-primary",
                        children: "Premium Period"
                    }), (0, r.jsxs)("p", {
                        className: "text-primary text-xs font-normal",
                        children: ["(", (0, b.At)(s.add(111, "day").diff(n)), ")"]
                    })]
                }) : (0, r.jsx)("span", {
                    className: "text-white",
                    children: "Unregistered"
                }) : (0, r.jsx)("span", {
                    children: (0, N.NE)(s.unix())
                })
            }
            var D = s(4739),
                I = s(797),
                P = s(74764),
                S = s(91740),
                O = s(20956),
                E = s(58992),
                L = s(64173),
                T = s(13289),
                M = s(76539),
                _ = s(94184),
                A = s.n(_),
                B = s(25675),
                F = s.n(B),
                z = s(4480),
                V = s(89418),
                Q = s(73359),
                H = s(44949),
                R = s(32663),
                q = s(88673),
                J = s(91842),
                K = s(996),
                U = s(34557),
                Y = s(42021),
                W = s(25854),
                G = s(41664),
                X = s.n(G),
                $ = s(55587);

            function ee(e) {
                var t, s, n, l, a, i, d, o, m, u, p, v, j, g, f, y, C, Z, O, E;
                let {
                    expanded: L,
                    initData: T,
                    children: M
                } = e, {
                    getDomainName: _
                } = (0, U.ay)(), [A, B] = (0, h.useState)(""), F = (0, x.useRouter)(), z = (0, h.useMemo)(() => S.pt[T.network], [T.network]), [V, {
                    loading: G,
                    data: ee
                }] = (0, Q.t)(W.bZ, {
                    variables: {
                        network: S.pt[T.network],
                        tokenId: T.tokenId
                    }
                }), et = (0, h.useMemo)(() => null == ee ? void 0 : ee.domainDetailPageData, [ee]), es = null !== (j = null == et ? void 0 : null === (t = et.domainDetail) || void 0 === t ? void 0 : t.expiration) && void 0 !== j ? j : 0, en = (0, k.l6)(es), el = (0, Y.Z)(null == et ? void 0 : null === (s = et.domainDetail) || void 0 === s ? void 0 : s.expiration, en), ea = (0, h.useMemo)(() => (0, k.dd)(T.name, S.pt[T.network]), [T.name, T.network]);
                (0, h.useEffect)(() => {
                    L && !ee && V()
                }, [L, V, ee]);
                let ei = (0, h.useMemo)(() => ee ? ee.domainDetailPageData.metadata : null, [ee]),
                    er = (0, K.J)(W.b3, null == ee ? void 0 : ee.domainDetailPageData.listings),
                    ed = (0, K.J)(W.b3, null == ee ? void 0 : ee.domainDetailPageData.offers);
                (0, h.useEffect)(() => {
                    var e, t;
                    L && (null == et ? void 0 : null === (e = et.domainDetail) || void 0 === e ? void 0 : e.owner) && _(null == et ? void 0 : null === (t = et.domainDetail) || void 0 === t ? void 0 : t.owner).then(e => {
                        B(e)
                    })
                }, [null == et ? void 0 : null === (n = et.domainDetail) || void 0 === n ? void 0 : n.owner, L, _]);
                let ec = (0, h.useMemo)(() => S.s8[T.network], [T.network]),
                    eo = (0, h.useCallback)(() => en === w.O.gracePeriod ? (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            className: "text-warning font-normal text-xxs",
                            children: "Expires on "
                        }), (0, r.jsx)("div", {
                            children: (0, N.Vv)(es)
                        })]
                    }) : (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            className: "font-normal text-xxs text-quarternary",
                            children: "Expires on "
                        }), (0, r.jsx)("div", {
                            children: (0, N.Vv)(es)
                        })]
                    }), [en, es]);
                return G || !ee ? (0, r.jsx)("div", {
                    className: "flex",
                    children: (0, r.jsx)(q.Z, {})
                }) : (0, r.jsxs)("main", {
                    className: "flex flex-col font-semibold px-5",
                    children: [(0, r.jsxs)("header", {
                        className: "flex items-center",
                        children: [(0, r.jsx)("div", {
                            className: "rounded-xs",
                            children: en === w.O.unExpired && (null == ei ? void 0 : ei.image) ? (0, r.jsx)(J.Z, {
                                url: null == ei ? void 0 : ei.image,
                                size: 40,
                                className: "rounded-sm"
                            }) : (0, r.jsx)(J.b, {
                                size: 40,
                                name: T.name,
                                network: S.pt[T.network]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col ml-3",
                            children: [(0, r.jsx)(H.Z, {
                                domain: T.name,
                                network: z,
                                className: "text-base font-bold"
                            }), (0, r.jsx)("p", {
                                className: "text-xs text-primary font-normal",
                                children: S.lS[z]
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "divider h-px mb-2 mt-4"
                    }), (0, r.jsxs)("section", {
                        className: "flex flex-col gap-2",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, r.jsx)("div", {
                                className: "text-sm overflow-visible font-semibold",
                                children: (0, r.jsx)("div", {
                                    children: en !== w.O.unRegistered ? (0, r.jsxs)("div", {
                                        className: "truncate max-w-[200px] text-ellipsis",
                                        children: [(0, r.jsx)("div", {
                                            className: "text-quarternary text-xxs font-normal",
                                            children: " Owned by "
                                        }), " ", (0, r.jsx)(X(), {
                                            href: "/profile/domains/".concat(null == et ? void 0 : null === (l = et.domainDetail) || void 0 === l ? void 0 : l.owner),
                                            children: (0, r.jsx)("span", {
                                                className: "cursor-pointer text-primary",
                                                children: A || (null == et ? void 0 : null === (a = et.domainDetail) || void 0 === a ? void 0 : null === (i = a.owner) || void 0 === i ? void 0 : i.substring(0, 8))
                                            })
                                        })]
                                    }) : (0, r.jsxs)("p", {
                                        className: "text-white",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-primary",
                                            children: "Available "
                                        }), (0, r.jsx)("span", {
                                            children: "for registration"
                                        })]
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "divider divider-horizontal w-px m-0"
                            }), (0, r.jsx)("div", {
                                className: "text-sm truncate",
                                children: en !== w.O.unRegistered ? (0, r.jsx)(eo, {}) : "/"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "divider h-px m-0"
                        }), (0, r.jsxs)("div", {
                            className: "flex-1 flex justify-between text-xs",
                            children: [(0, r.jsxs)("div", {
                                className: "flex gap-2 text-quarternary",
                                children: [(0, r.jsx)("span", {
                                    children: "Top Offer"
                                }), ed && ed.length ? (0, r.jsx)(I.g, {
                                    className: "gap-3",
                                    size: 20,
                                    market: null !== (g = null == ed ? void 0 : null === (d = ed[0]) || void 0 === d ? void 0 : d.orderSource) && void 0 !== g ? g : c.Qz.Spaceid
                                }) : null]
                            }), (0, r.jsx)(P.Jc, {
                                price: null !== (f = null == ed ? void 0 : null === (o = ed[0]) || void 0 === o ? void 0 : o.tokenAmount) && void 0 !== f ? f : "0",
                                tokenType: ec,
                                className: "text-white"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "divider h-px m-0"
                        }), (0, r.jsxs)("div", {
                            className: "flex-1 flex justify-between",
                            children: [(0, r.jsxs)("div", {
                                className: "text-md text-white flex gap-1 items-center",
                                children: [(0, r.jsx)("span", {
                                    children: " Current Price "
                                }), (0, r.jsx)("div", {
                                    children: (0, r.jsx)(I.Z, {
                                        className: "gap-3",
                                        size: 20,
                                        name: null !== (y = null == et ? void 0 : null === (m = et.domainDetail) || void 0 === m ? void 0 : m.name) && void 0 !== y ? y : "",
                                        list: er
                                    })
                                })]
                            }), en === w.O.premium ? (0, r.jsx)("p", {
                                className: "text-2xl font-bold text-primary",
                                children: null == el ? void 0 : el.getAmountNow().toLocaleString("en-US", {
                                    currency: "USD",
                                    maximumFractionDigits: 2,
                                    style: "currency"
                                })
                            }) : en === w.O.unRegistered ? (0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("span", {
                                    children: (0, r.jsx)(P.Jc, {
                                        tokenType: c.iv.Usd,
                                        className: "text-2xl",
                                        price: T.listPrice
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "text-2xl",
                                    children: "/year"
                                })]
                            }) : (0, r.jsx)(P.hA, {
                                price: null !== (C = null == er ? void 0 : null === (u = er[0]) || void 0 === u ? void 0 : u.tokenAmount) && void 0 !== C ? C : 0,
                                tokenType: null !== (Z = null == er ? void 0 : null === (p = er[0]) || void 0 === p ? void 0 : p.tokenType) && void 0 !== Z ? Z : c.iv.Bnb,
                                className: "text-white flex-col gap-0 items-end text-lg"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col-reverse items-stretch gap-3 py-3",
                            children: [(0, r.jsxs)("button", {
                                className: "btn btn-ghost bg-button01 btn-xs w-full h-8 p-0 text-primary",
                                onClick: function() {
                                    en !== w.O.unExpired ? F.push({
                                        pathname: (0, b.gK)(T.tokenId, T.network),
                                        query: {
                                            name: T.name
                                        }
                                    }) : F.push((0, b.gK)(T.tokenId, T.network))
                                },
                                children: [(0, r.jsx)("span", {
                                    children: " View in full page"
                                }), (0, r.jsx)(D.IY, {
                                    width: 12,
                                    height: 12
                                })]
                            }), (0, r.jsx)($.Z, {
                                data: ee.domainDetailPageData.domainDetail ? ee.domainDetailPageData : {
                                    domainDetail: {
                                        name: T.name,
                                        network: S.pt[T.network],
                                        expiration: 0
                                    },
                                    metadata: null,
                                    listings: []
                                },
                                showAddToCart: !0
                            })]
                        }), (0, r.jsx)("div", {
                            className: "divider h-px m-0"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col text-xs",
                            children: [(0, r.jsx)("div", {
                                className: "text-sm text-white py-3",
                                children: "Properties"
                            }), (0, r.jsx)("div", {
                                className: "divider h-px mb-2 mt-0"
                            }), (null == et ? void 0 : et.collections) && et.collections.length ? (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)("div", {
                                    className: "min-w-[96px] font-normal text-quarternary",
                                    children: "Collection"
                                }), (0, r.jsx)("div", {
                                    className: "flex gap-1 flex-wrap",
                                    children: null == et ? void 0 : et.collections.map((e, t) => {
                                        var s;
                                        return (0, r.jsx)("div", {
                                            children: (0, r.jsx)(X(), {
                                                href: "/collection/".concat(null === (s = et.domainDetail) || void 0 === s ? void 0 : s.network, "/").concat(e.id),
                                                children: (0, r.jsxs)("div", {
                                                    className: "bg-divider rounded cursor-pointer px-[6px] flex whitespace-nowrap",
                                                    children: [e.tagName, "↗"]
                                                })
                                            })
                                        }, t)
                                    })
                                })]
                            }) : null, (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)("div", {
                                    className: "w-24 font-normal text-quarternary",
                                    children: "Character"
                                }), (0, r.jsx)("div", {
                                    className: "capitalize",
                                    children: null !== (O = null == ei ? void 0 : ei.characterSet) && void 0 !== O ? O : ea.characterSet
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)("div", {
                                    className: "w-24 font-normal text-quarternary",
                                    children: "Length"
                                }), (0, r.jsxs)("div", {
                                    children: [null !== (E = null == ei ? void 0 : ei.length) && void 0 !== E ? E : ea.length, " characters"]
                                })]
                            }), ec === c.iv.Bnb && L ? (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)("div", {
                                    className: "w-24 font-normal text-quarternary",
                                    children: "Referral"
                                }), (0, r.jsx)(R.Z, {
                                    domain: null == et ? void 0 : null === (v = et.domainDetail) || void 0 === v ? void 0 : v.name
                                })]
                            }) : null, ec === c.iv.Bnb ? (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)("div", {
                                    className: "w-24 font-normal text-quarternary",
                                    children: "Skin"
                                }), (0, r.jsx)("div", {
                                    className: "truncate",
                                    children: null == ei ? void 0 : ei.skinName
                                })]
                            }) : null]
                        })]
                    })]
                })
            }
            var et = s(60092),
                es = s(65789),
                en = s(47441),
                el = s(69077);

            function ea(e) {
                let {
                    item: t
                } = e, {
                    address: s
                } = (0, el.mA)(), {
                    addToCart: n,
                    isInCart: l
                } = (0, es.Z)(), a = (0, z.sJ)(V.n_), i = (0, h.useMemo)(() => "".concat(s).toLowerCase() === t.owner, [s, t.owner]), d = (0, h.useMemo)(() => (0, k.l6)(t.expirationDate), [t.expirationDate]);
                return i && a && d !== w.O.gracePeriod ? (0, r.jsx)("div", {
                    className: "w-10",
                    children: (0, r.jsx)(er, {
                        item: t
                    })
                }) : i || d === w.O.gracePeriod || d === w.O.unExpired && t.listPrice <= 0 ? (0, r.jsx)("div", {
                    className: "w-10"
                }) : (0, r.jsx)("div", {
                    className: A()("cursor-pointer btn btn-sqaure btn-md btn-ghost h-9 lg:w-9 p-0 mr-1", l(t.tokenId, t.network, t.name) ? "text-primary" : "text-white"),
                    onClick: () => n({
                        tokenId: t.tokenId,
                        network: S.pt[t.network],
                        name: t.name,
                        tokenAmount: t.listPrice,
                        image: t.image
                    }, t.expirationDate),
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(en.Z, {
                            width: 14,
                            height: 14
                        })
                    })
                })
            }

            function ei(e) {
                let {
                    item: t
                } = e, {
                    address: s
                } = (0, el.mA)(), n = (0, z.sJ)(V.n_), l = (0, h.useMemo)(() => "".concat(s).toLowerCase() === t.owner, [s, t.owner]), a = (0, h.useMemo)(() => (0, k.l6)(t.expirationDate), [t.expirationDate]);
                return l && n && a !== w.O.gracePeriod ? (0, r.jsx)("div", {
                    className: "w-9 pl-1",
                    children: (0, r.jsx)(er, {
                        item: t
                    })
                }) : null
            }

            function er(e) {
                let {
                    item: t
                } = e, [s, n] = (0, z.FV)(V.xL), l = (0, h.useMemo)(() => s.some(e => e.tokenId === t.tokenId && t.network === e.network), [t.network, t.tokenId, s]), a = (0, h.useCallback)(() => {
                    if (l) {
                        let e = s.filter(e => e.tokenId !== t.tokenId || t.network !== e.network);
                        n(e)
                    } else n([...s, t])
                }, [l, t, s, n]);
                return (0, r.jsx)("input", {
                    type: "checkbox",
                    checked: l,
                    className: "checkbox w-10",
                    onChange: a
                })
            }

            function ed(e) {
                var t, s, n, l, a;
                let {
                    item: i,
                    dense: d = !1,
                    index: o,
                    showEditListingAction: x
                } = e, [m, u] = (0, h.useState)(!1), p = (0, h.useMemo)(() => d ? 6 : 14, [d]), v = (0, z.sJ)(V.Zl), [g, w] = (0, z.FV)(V.xL), b = (0, z.sJ)(V.n_), {
                    showBuyNowDialog: N,
                    showEditListingDialog: y,
                    showListingDialog: C
                } = (0, E.E)(), {
                    isOwnerTest: D
                } = (0, O.aC)(), I = (0, h.useMemo)(() => D(null !== (t = i.owner) && void 0 !== t ? t : ""), [D, i.owner]), L = (0, h.useMemo)(() => S.s8[i.network], [i]), T = () => {
                    N.show({
                        domain: i.name,
                        imageUrl: "",
                        network: S.pt[i.network]
                    })
                }, M = () => {
                    var e;
                    y.show({
                        domain: i.name,
                        imageUrl: null !== (e = i.image) && void 0 !== e ? e : "",
                        network: S.pt[i.network]
                    })
                }, _ = () => {
                    C.show({
                        domain: i.name,
                        imageUrl: "",
                        network: S.pt[i.network]
                    })
                }, B = () => {
                    if (b) {
                        let e = g.some(e => e.tokenId === i.tokenId && i.network === e.network);
                        if (e) {
                            let t = g.filter(e => e.tokenId !== i.tokenId || i.network !== e.network);
                            w(t)
                        } else w([...g, i])
                    } else u(!m)
                }, F = (0, k.ub)(i.name, S.pt[i.network]), Q = (0, h.useMemo)(() => o < v || g.some(e => e.tokenId === i.tokenId && e.network === i.network), [v, g, o, i.network, i.tokenId]);
                return (null == F ? void 0 : F.valid) ? (0, r.jsxs)("div", {
                    className: A()(m ? "border-y border-accent" : ""),
                    children: [(0, r.jsxs)("div", {
                        className: A()("hidden lg:flex w-full px-6 hover:bg-accent rounded-lg items-center", Q ? "bg-divider-bright rounded-none" : ""),
                        children: [(0, r.jsx)(ea, {
                            item: i
                        }), (0, r.jsxs)("div", {
                            className: "flex gap-3 items-center w-full cursor-pointer",
                            style: {
                                paddingTop: p,
                                paddingBottom: p
                            },
                            onClick: B,
                            children: [(0, r.jsx)(ex, {
                                network: i.network
                            }), (0, r.jsx)("div", {
                                className: "grow",
                                children: (0, r.jsxs)("div", {
                                    className: "font-bold max-w-[200px] 3xl:max-w-[300px] flex",
                                    children: [(0, r.jsx)("div", {
                                        className: "shrink text-ellipsis truncate",
                                        children: null !== (s = i.name) && void 0 !== s ? s : i.domainName
                                    }), (0, r.jsxs)("div", {
                                        children: [".", S.VC[i.network]]
                                    }), (0, r.jsx)(f.Z, {
                                        name: null !== (n = i.name) && void 0 !== n ? n : i.domainName,
                                        size: 12
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-6",
                                children: [(0, r.jsx)("div", {
                                    className: "w-[108px] font-bold",
                                    children: (0, r.jsx)(Z, {
                                        timestamp: i.expirationDate
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "w-24 font-semibold text-sm",
                                    children: (0, r.jsx)(ec, {
                                        price: i.listPrice,
                                        tokenType: L,
                                        expiration: i.expirationDate,
                                        showBuyDialog: T,
                                        orderSource: i.orderSource,
                                        item: i
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "w-[72px]",
                                    children: (0, r.jsx)(P.Jc, {
                                        price: "".concat(i.lastSalePrice),
                                        tokenType: L
                                    })
                                }), x && i.orderSource === c.Qz.Spaceid ? (0, r.jsx)("button", {
                                    className: "btn btn-primary btn-outline btn-xs h-7 w-[120px] border-disable",
                                    onClick(e) {
                                        e.stopPropagation(), M()
                                    },
                                    children: "Edit Listing"
                                }) : null, x && i.orderSource !== c.Qz.Spaceid ? (0, r.jsx)("button", {
                                    className: "btn btn-primary btn-outline btn-xs h-7 w-[120px] border-disable",
                                    onClick(e) {
                                        e.stopPropagation(), _()
                                    },
                                    children: "List Now"
                                }) : null]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: A()("lg:hidden flex flex-col px-4 pt-3 items-center justify-center border-t border-divider-bright", Q ? "bg-divider-bright rounded-none" : ""),
                        onClick: B,
                        children: [(0, r.jsxs)("div", {
                            className: "w-full flex items-center",
                            children: [(0, r.jsx)(ei, {
                                item: i
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col items-start gap-1 grow",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, r.jsx)(ex, {
                                        network: i.network
                                    }), (0, r.jsx)("div", {
                                        className: "grow",
                                        children: (0, r.jsxs)("div", {
                                            className: "font-bold flex text-white",
                                            children: [(0, r.jsx)("div", {
                                                className: "shrink text-ellipsis truncate",
                                                style: {
                                                    maxWidth: "calc(100vw - 180px)"
                                                },
                                                children: null !== (l = i.name) && void 0 !== l ? l : i.domainName
                                            }), (0, r.jsxs)("div", {
                                                children: [".", S.VC[i.network]]
                                            }), (0, r.jsx)(f.Z, {
                                                name: null !== (a = i.name) && void 0 !== a ? a : i.domainName,
                                                size: 12
                                            })]
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex text-xs text-[#8A9B9E]",
                                    children: ["Expires In \xa0", (0, r.jsx)(Z, {
                                        timestamp: i.expirationDate
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex flex-col items-end gap-1",
                                children: (0, r.jsx)("div", {
                                    className: "text-white text-lg",
                                    children: (0, r.jsx)(ec, {
                                        price: i.listPrice,
                                        tokenType: L,
                                        expiration: i.expirationDate,
                                        showBuyDialog: T,
                                        orderSource: i.orderSource,
                                        item: i
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "w-full mt-1 mb-2",
                            children: (0, r.jsx)(eo, {
                                isOwner: I,
                                item: i,
                                showBuyDialog: T
                            })
                        })]
                    }), (0, r.jsxs)("section", {
                        className: A()("pl-16 pr-9 overflow-hidden ease-in-out duration-500 py-0", m ? "lg:py-4" : "h-0"),
                        children: [(0, r.jsx)("div", {
                            className: "hidden lg:block",
                            children: (0, r.jsx)(et.Z, {
                                expanded: m,
                                initData: i
                            })
                        }), (0, r.jsx)(j, {
                            isOpen: m,
                            onClose: () => u(!1),
                            children: (0, r.jsx)(ee, {
                                expanded: !0,
                                initData: i
                            })
                        })]
                    })]
                }) : null
            }

            function ec(e) {
                var t;
                let {
                    price: s,
                    tokenType: n,
                    expiration: l,
                    orderSource: a,
                    showBuyDialog: i,
                    item: d
                } = e, c = (0, k.Co)(d.owner, l), o = (0, E.Z)(g.Z), x = (0, L.Z)("(min-width: 1024px)"), {
                    isOwnerTest: m
                } = (0, O.aC)(), u = (0, h.useMemo)(() => m(null !== (t = d.owner) && void 0 !== t ? t : ""), [m, d.owner]);
                if (c === w.O.unRegistered) {
                    let p = [(0, r.jsx)(D.zn, {
                        width: 20,
                        height: 20
                    }, "0"), (0, r.jsx)(D.wd, {
                        width: 20,
                        height: 20
                    }, "1"), (0, r.jsx)(D.BS, {
                        width: 20,
                        height: 20
                    }, "2")][d.network];
                    return (0, r.jsxs)("div", {
                        className: A()("rounded lg:p-1 lg:pr-2 border-disable w-fit select-none flex gap-2 items-center hover:bg-opacity-20 hover:border-white text-lg lg:text-sm", u ? "" : "lg:border", x ? "active:scale-95 hover:bg-accent-content" : ""),
                        onClick(e) {
                            x && (e.stopPropagation(), o({
                                name: d.name,
                                network: S.pt[d.network],
                                expiration: null == d ? void 0 : d.expirationDate,
                                owner: null == d ? void 0 : d.owner
                            }))
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "hidden lg:block",
                            children: [" ", p]
                        }), (0, r.jsxs)("p", {
                            children: ["$", s.toFixed(0), "/yr"]
                        })]
                    })
                }
                return s <= 0 || c === w.O.gracePeriod || c === w.O.premium ? (0, r.jsx)("p", {
                    children: "/"
                }) : (0, r.jsxs)("div", {
                    className: A()("rounded lg:p-1 lg:pr-2 border-disable w-fit select-none flex gap-2 items-center hover:bg-opacity-20 hover:border-white", u ? "" : "lg:border", x ? "active:scale-95 hover:bg-accent-content" : ""),
                    onClick(e) {
                        x && (e.stopPropagation(), u || i())
                    },
                    children: [(0, r.jsx)("div", {
                        className: "hidden lg:block",
                        children: a ? (0, r.jsx)(I.g, {
                            market: a,
                            size: 20
                        }) : null
                    }), (0, r.jsx)(P.Jc, {
                        price: "".concat(s),
                        tokenType: n,
                        size: x ? void 0 : 14,
                        className: "text-lg lg:text-sm"
                    })]
                })
            }

            function eo(e) {
                let {
                    item: t,
                    isOwner: s,
                    showBuyDialog: n
                } = e, l = (0, k.Co)(t.owner, t.expirationDate), a = (0, E.Z)(g.Z);
                return s || l === w.O.gracePeriod || l === w.O.premium ? null : l === w.O.unRegistered ? (0, r.jsxs)("div", {
                    className: "w-full flex justify-between items-center",
                    children: [(0, r.jsx)(ea, {
                        item: t
                    }), (0, r.jsx)("div", {
                        className: "flex",
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center gap-1 text-arb text-sm font-semibold cursor-pointer",
                            onClick(e) {
                                e.stopPropagation(), a({
                                    name: t.name,
                                    network: S.pt[t.network],
                                    expiration: null == t ? void 0 : t.expirationDate,
                                    owner: null == t ? void 0 : t.owner
                                })
                            },
                            children: [(0, r.jsx)(M.Z, {
                                width: 16,
                                height: 16
                            }), "Register"]
                        })
                    })]
                }) : (0, r.jsxs)("div", {
                    className: "w-full flex justify-between items-center",
                    children: [(0, r.jsx)(ea, {
                        item: t
                    }), (0, r.jsx)("div", {
                        className: "flex",
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center gap-1 text-primary text-sm font-semibold cursor-pointer",
                            onClick(e) {
                                e.stopPropagation(), n()
                            },
                            children: [(0, r.jsx)(T.Z, {
                                width: 16,
                                height: 16
                            }), "Buy Now"]
                        })
                    })]
                })
            }

            function ex(e) {
                let {
                    network: t
                } = e;
                switch (t) {
                    case 0:
                        return (0, r.jsx)(F(), {
                            width: 24,
                            height: 24,
                            src: "/assets/svg/logos/ic-ens-rect.svg",
                            alt: ""
                        });
                    case 1:
                        return (0, r.jsx)(D.Bw, {});
                    case 2:
                        return (0, r.jsx)(D.BS, {
                            width: 24,
                            height: 24
                        });
                    default:
                        return null
                }
            }

            function em(e) {
                let {
                    contentList: t,
                    dense: s,
                    loading: n
                } = e, l = (0, h.memo)(ed), a = (0, x.useRouter)(), {
                    filter: i,
                    visible: d
                } = (0, o.Z)(), m = (0, h.useMemo)(() => "/profile/listings" === a.asPath, [a.asPath]);
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: "hidden lg:flex px-6 py-3 border-b gap-0 text-quarternary border-divider text-sm font-semibold",
                        children: [(0, r.jsx)("div", {
                            className: "w-[38px]"
                        }), (0, r.jsx)("div", {
                            className: "grow",
                            children: "Domains"
                        }), (0, r.jsxs)("div", {
                            className: "flex gap-6",
                            children: [(0, r.jsx)("div", {
                                className: "w-[108px]",
                                children: " Expiration"
                            }), (0, r.jsx)("div", {
                                className: "w-24",
                                children: a.asPath.startsWith("/profile") ? "Listed Price" : "Buy Now"
                            }), (0, r.jsx)("div", {
                                className: "w-[72px]",
                                children: " Last Sale"
                            }), m ? (0, r.jsx)("div", {
                                className: "w-[120px]",
                                children: "Action"
                            }) : null]
                        })]
                    }), n && (0, r.jsx)("div", {
                        className: "w-full flex flex-col items-center",
                        children: Array.from(Array(20).keys()).map((e, t) => (0, r.jsxs)("div", {
                            className: "w-full",
                            children: [(0, r.jsxs)("div", {
                                className: "hidden lg:flex h-[60px] items-center gap-0 px-6",
                                children: [(0, r.jsx)("div", {
                                    className: "w-[38px] h-[32px]"
                                }), (0, r.jsxs)("div", {
                                    className: "h-[32px] grow flex gap-1 items-center",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-6 h-6 rounded-[50%] bg-[#29383D99] animate-pulse"
                                    }), (0, r.jsx)("div", {
                                        className: "w-1/3 h-full bg-[#29383D99] rounded animate-pulse"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-[108px] h-[32px] bg-[#29383D99] rounded animate-pulse"
                                    }), (0, r.jsx)("div", {
                                        className: "w-24 h-[32px] bg-[#29383D99] rounded animate-pulse"
                                    }), (0, r.jsx)("div", {
                                        className: "w-[72px] h-[32px] bg-[#29383D99] rounded animate-pulse"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "lg:hidden w-full flex flex-col px-4 pt-3 border-t border-divider-bright",
                                children: [(0, r.jsxs)("div", {
                                    className: "w-full flex justify-between items-center",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col items-start gap-1",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex gap-2",
                                            children: (0, r.jsx)("div", {
                                                className: "w-24 h-6 rounded bg-[#29383D99] animate-pulse"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "w-28 h-5 rounded bg-[#29383D99] animate-pulse"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "flex flex-col items-end gap-1",
                                        children: (0, r.jsx)("div", {
                                            className: "w-24 h-[26px] rounded bg-[#29383D99] animate-pulse"
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "w-full h-9 mt-1 mb-2 flex justify-between items-center",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-6 h-6 rounded bg-[#29383D99] animate-pulse"
                                    }), (0, r.jsx)("div", {
                                        className: "w-20 h-6 rounded bg-[#29383D99] animate-pulse"
                                    })]
                                })]
                            })]
                        }, e))
                    }), t.map((e, t) => (0, r.jsx)(l, {
                        item: e,
                        dense: s,
                        index: t,
                        showEditListingAction: m
                    }, t)), !n && (0, r.jsx)("div", {
                        className: "w-full text-lg text-quarternary text-center",
                        children: t.length ? null : d.manageList ? d.hideListing ? (0, r.jsx)("p", {
                            className: "py-16",
                            children: "No listing data "
                        }) : (0, r.jsxs)("div", {
                            className: "py-16",
                            children: ["This address does not have any", " ", i.tld ? i.tld === c.Zc.Eth ? (0, r.jsx)("span", {
                                className: "text-eth",
                                children: ".ens"
                            }) : i.tld === c.Zc.Arb ? (0, r.jsx)("span", {
                                className: "text-arb",
                                children: ".arb"
                            }) : (0, r.jsx)("span", {
                                className: "text-bnb",
                                children: ".bnb"
                            }) : (0, r.jsx)(r.Fragment, {}), " ", "domain"]
                        }) : (0, r.jsx)("p", {
                            className: "py-16",
                            children: "No result"
                        })
                    })]
                })
            }

            function eh(e) {
                let {
                    onClick: t,
                    children: s,
                    className: n
                } = e;
                return (0, r.jsx)("button", {
                    className: A()("btn btn-accent btn-square rounded w-9 h-9", n),
                    onClick: t,
                    children: s
                })
            }
            var eu = s(87225),
                ep = s(71441),
                ev = s(56148);

            function ej() {
                return (ej = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eg = function(e) {
                return h.createElement("svg", ej({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), n || (n = h.createElement("g", {
                    clipPath: "url(#ic-hightolow_svg__a)",
                    fill: "currentColor"
                }, h.createElement("path", {
                    d: "M11.333 20.5h4.334c.733 0 1.333-.6 1.333-1.333 0-.734-.6-1.334-1.333-1.334h-4.334c-.733 0-1.333.6-1.333 1.334 0 .733.6 1.333 1.333 1.333ZM8 3.833c0 .734.6 1.334 1.333 1.334h13.334c.733 0 1.333-.6 1.333-1.334C24 3.1 23.4 2.5 22.667 2.5H9.333C8.6 2.5 8 3.1 8 3.833Zm1.333 9H19c.733 0 1.333-.6 1.333-1.333s-.6-1.333-1.333-1.333H9.333C8.6 10.167 8 10.767 8 11.5s.6 1.333 1.333 1.333ZM5.233 18.037h2.549c.224 0 .348.254.211.424l-3.756 4.625a.266.266 0 0 1-.211.1.275.275 0 0 1-.211-.1L.059 18.461c-.14-.17-.013-.424.211-.424H2.82V.761c0-.144.12-.261.268-.261h1.878c.147 0 .268.117.268.26v17.277Z"
                }))), l || (l = h.createElement("defs", null, h.createElement("clipPath", {
                    id: "ic-hightolow_svg__a"
                }, h.createElement("path", {
                    fill: "currentColor",
                    transform: "translate(0 .5)",
                    d: "M0 0h24v22.686H0z"
                })))))
            };

            function ef() {
                return (ef = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ew = function(e) {
                    return h.createElement("svg", ef({
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), a || (a = h.createElement("g", {
                        clipPath: "url(#ic-lowtohigh_svg__a)"
                    }, h.createElement("path", {
                        d: "M9.333 20.5h6.334c.733 0 1.333-.6 1.333-1.333 0-.734-.6-1.334-1.333-1.334H9.333c-.733 0-1.333.6-1.333 1.334 0 .733.6 1.333 1.333 1.333ZM10 3.833c0 .734.6 1.334 1.333 1.334h11.334c.733 0 1.333-.6 1.333-1.334C24 3.1 23.4 2.5 22.667 2.5H11.333C10.6 2.5 10 3.1 10 3.833Zm-.667 9H19c.733 0 1.333-.6 1.333-1.333s-.6-1.333-1.333-1.333H9.333C8.6 10.167 8 10.767 8 11.5s.6 1.333 1.333 1.333Z",
                        fill: "#fff"
                    }), h.createElement("path", {
                        d: "M2.817 5.65H.27c-.225 0-.349-.255-.211-.424L3.813.6a.267.267 0 0 1 .212-.1.275.275 0 0 1 .21.1l3.757 4.626c.14.169.013.423-.212.423H5.232v17.277c0 .143-.121.26-.269.26H3.086a.265.265 0 0 1-.269-.26V5.649Z",
                        fill: "currentColor"
                    }))), i || (i = h.createElement("defs", null, h.createElement("clipPath", {
                        id: "ic-lowtohigh_svg__a"
                    }, h.createElement("path", {
                        fill: "currentColor",
                        transform: "translate(0 .5)",
                        d: "M0 0h24v22.686H0z"
                    })))))
                },
                eb = s(65634),
                eN = s(91601);
            let ek = [{
                value: 0,
                text: "Related"
            }, {
                value: 1,
                text: "Price"
            }, {
                value: 2,
                text: "Length"
            }, {
                value: 3,
                text: "Expiration Date"
            }, {
                value: 4,
                text: "Last Sale"
            }];

            function ey(e) {
                let {
                    keyword: t,
                    layout: s,
                    setLayout: n
                } = e, {
                    filter: l,
                    setOrderBy: a,
                    visible: i
                } = (0, o.Z)(), [d, m] = (0, z.FV)(eN.eH), [u, p] = (0, z.FV)(eN.C6), v = (0, x.useRouter)(), j = (0, h.useMemo)(() => {
                    if (!l.orderByType && (i.hideTld || i.manageList)) return 1;
                    switch (l.orderByType) {
                        case c.Kp.ListPriceAsc:
                        case c.Kp.ListPriceDesc:
                            return 1;
                        case c.Kp.LengthAsc:
                        case c.Kp.LengthDesc:
                            return 2;
                        case c.Kp.ExpirationAsc:
                        case c.Kp.ExpirationDesc:
                            return 3;
                        case c.Kp.LastSalePriceAsc:
                        case c.Kp.LastSalePriceDesc:
                            return 4;
                        default:
                            return 0
                    }
                }, [l.orderByType, i.hideTld, i.manageList]), g = (0, h.useMemo)(() => (!!l.orderByType || !i.hideTld && !i.manageList) && (!l.orderByType || "related" === l.orderByType || [c.Kp.ExpirationDesc, c.Kp.LastSalePriceDesc, c.Kp.LengthDesc, c.Kp.ListPriceDesc].includes(l.orderByType)), [l.orderByType, i.hideTld, i.manageList]);
                return (0, r.jsxs)("div", {
                    className: "w-full flex flex-col items-center justify-center",
                    children: [t && (0, r.jsx)("div", {
                        className: "lg:hidden w-full h-14 flex items-center border-b border-divider-bright",
                        children: (0, r.jsxs)("div", {
                            className: "text-lg font-bold ml-4 max-w-[320px] truncate text-white",
                            children: ["Search for ", (0, r.jsxs)("span", {
                                className: "text-primary",
                                children: [t, " "]
                            })]
                        })
                    }), (0, r.jsxs)("nav", {
                        className: "navbar h-9 min-h-0 mt-3 lg:mt-0 mb-3 lg:mb-4 gap-2 lg:gap-4",
                        children: [(0, r.jsx)("div", {
                            className: A()("text-primary", d ? "block" : "block 2xl:hidden", "hidden lg:block"),
                            children: (0, r.jsx)(eh, {
                                className: "text-primary btn-ghost lg:btn-accent",
                                onClick: () => m(!d),
                                children: (0, r.jsx)(ep.Z, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        }), (0, r.jsx)(eh, {
                            onClick: () => v.reload(),
                            className: "btn-ghost lg:btn-accent",
                            children: (0, r.jsx)(eb.Z, {
                                width: 16,
                                height: 16
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex-1 hidden lg:flex",
                            children: t ? (0, r.jsxs)("h3", {
                                className: "text-2xl font-bold ml-2 whitespace-nowrap max-w-[400px] truncate",
                                children: ["Search for ", (0, r.jsxs)("span", {
                                    className: "text-primary",
                                    children: [t, " "]
                                })]
                            }) : (0, r.jsx)("div", {
                                className: "h-[36px] w-full flex",
                                children: (0, r.jsx)(eu.E, {
                                    toSearch: !1
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "lg:hidden flex-1",
                            children: (0, r.jsx)("div", {
                                className: "h-[36px] w-full flex",
                                children: (0, r.jsx)(eu.E, {
                                    toSearch: !1
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            tabIndex: 0,
                            className: "flex-none dropdown lg:dropdown-hover h-9 text-sm",
                            children: [(0, r.jsx)("label", {
                                tabIndex: 0,
                                className: "btn btn-accent w-20 lg:w-40 px-1 lg:px-3 max-w-40 text-sm h-9",
                                children: (0, r.jsxs)("div", {
                                    className: "flex items-center justify-between w-full truncate text-clip",
                                    children: [(0, r.jsx)("div", {
                                        className: "flex-1 text-left",
                                        children: ek[j].text
                                    }), (0, r.jsx)("div", {
                                        className: "text-right",
                                        children: (0, r.jsx)(ev.Z, {
                                            width: 12,
                                            height: 12
                                        })
                                    })]
                                })
                            }), (0, r.jsx)("ul", {
                                tabIndex: 0,
                                className: "dropdown-content menu max-w-40",
                                children: ek.map(e => (0, r.jsx)("li", {
                                    onClick: () => a(e.value, g),
                                    children: (0, r.jsxs)("a", {
                                        children: [" ", e.text]
                                    })
                                }, e.value))
                            })]
                        }), (0, r.jsx)("div", {
                            className: "text-accent-content",
                            onClick: () => a(j, !g),
                            children: (0, r.jsx)(eh, {
                                className: "btn-ghost lg:btn-accent",
                                children: g ? (0, r.jsx)(eg, {
                                    width: 16,
                                    height: 16
                                }) : (0, r.jsx)(ew, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        }), i.hideTld && (0, r.jsx)("div", {
                            className: A()(u ? "text-primary" : "", "block lg:hidden"),
                            children: (0, r.jsx)(eh, {
                                className: " btn-ghost lg:btn-accent",
                                onClick: () => p(!u),
                                children: (0, r.jsx)(D.TZ, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        })]
                    })]
                })
            }
            var eC = s(3940);

            function eZ(e) {
                var t;
                let {
                    pageInfo: s
                } = e, n = (0, h.useMemo)(() => Math.ceil(parseInt(null !== (t = null == s ? void 0 : s.endCursor) && void 0 !== t ? t : "0") / eC.IV) || 1, [null == s ? void 0 : s.endCursor]), {
                    nextPage: l,
                    previousPage: a
                } = (0, o.Z)();
                return !s || parseInt(s.endCursor) < eC.IV - 1 ? null : (0, r.jsxs)("div", {
                    className: "w-full flex items-center justify-center h-[46px] text-sm gap-4",
                    children: [(0, r.jsx)("button", {
                        className: "btn btn-ghost disabled:bg-transparent",
                        disabled: 1 === n,
                        onClick: () => a(null == s ? void 0 : s.startCursor),
                        children: (0, r.jsx)("div", {
                            className: "rotate-90",
                            children: (0, r.jsx)(D.o8, {
                                width: 12,
                                height: 12
                            })
                        })
                    }), (0, r.jsx)("button", {
                        className: "btn btn-ghost disabled:bg-transparent",
                        disabled: !(null == s ? void 0 : s.hasNextPage),
                        onClick: () => l(null == s ? void 0 : s.endCursor),
                        children: (0, r.jsx)("div", {
                            className: "-rotate-90",
                            children: (0, r.jsx)(D.o8, {
                                width: 12,
                                height: 12
                            })
                        })
                    })]
                })
            }
            var eD = s(69543),
                eI = s(36129),
                eP = s.n(eI);

            function eS(e) {
                let {
                    max: t,
                    onAddToCart: s
                } = e, [n, l] = (0, z.FV)(V.Zl), [a, i] = (0, z.FV)(eN.C6);

                function d(e) {
                    let s = parseInt(e.target.value);
                    s <= t && s >= 0 && l(parseInt(e.target.value)), s || l(0)
                }

                function c() {
                    s(n), l(0), i(!1)
                }
                return (0, h.useEffect)(() => {
                    l(0)
                }, [l]), (0, r.jsxs)("div", {
                    className: A()("w-full bg-accent/60 p-3 lg:p-4 lg:rounded-t flex flex-col items-stretch lg:flex-row lg:items-center gap-2 backdrop-blur", a ? "" : "hidden lg:flex"),
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-1",
                        children: [(0, r.jsxs)("div", {
                            className: "bg-button01 flex items-center rounded-[5px] pr-4 gap-2 h-9 flex-1 lg:flex-none",
                            children: [(0, r.jsx)("div", {
                                className: A()("p-3", n > 0 ? "text-primary" : ""),
                                children: (0, r.jsx)(eD.Z, {})
                            }), (0, r.jsx)("div", {
                                className: eP().InputRange,
                                children: (0, r.jsx)("input", {
                                    step: 1,
                                    type: "range",
                                    id: "sweeper",
                                    min: 0,
                                    max: t,
                                    value: n,
                                    autoFocus: !0,
                                    onChange: d
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "w-9 h-9 ml-2 hidden lg:block bg-button01 rounded-[5px] justify-center items-center text-center",
                            children: (0, r.jsx)("input", {
                                className: "w-full h-full text-center bg-transparent",
                                value: n,
                                type: "number",
                                onChange: d
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: "hidden lg:block",
                        children: n > 0 ? (0, r.jsxs)("button", {
                            className: "btn btn-primary btn-outline",
                            onClick: c,
                            children: ["Add ", n > 1 ? "".concat(n, " items") : "".concat(n, " item"), " to cart"]
                        }) : (0, r.jsx)("p", {
                            className: "text-disable py-2",
                            children: " Sweep to select items"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "lg:hidden flex justify-between",
                        children: [(0, r.jsxs)("p", {
                            className: "text-accent-content py-2",
                            children: [" ", n, " items selected"]
                        }), (0, r.jsx)("button", {
                            className: "btn btn-primary btn-outline",
                            disabled: n <= 0,
                            onClick: c,
                            children: "Add to cart"
                        })]
                    })]
                })
            }
            var eO = s(22193),
                eE = s(13130),
                eL = s(74102),
                eT = s(64717),
                eM = s(93589),
                e_ = s(84539),
                eA = s(20728),
                eB = s(44831),
                eF = s(51173),
                ez = s(1242),
                eV = s(75557),
                eQ = s(96046),
                eH = s(55005),
                eR = s(74652),
                eq = s(89926),
                eJ = s(30675),
                eK = s(18851),
                eU = s(55352),
                eY = s(14333),
                eW = s(45023),
                eG = s(34811);

            function eX(e) {
                let {
                    priceList: t,
                    onChangePrice: s,
                    onSubmit: n,
                    loading: l,
                    isApproved: a
                } = e, [i, d] = (0, h.useState)(C()().add(7, "days").valueOf()), o = (0, h.useRef)(null), x = (0, z.sJ)(V.Db), m = (0, O.Wz)(x), u = (0, z.sJ)(V.FC), p = (0, h.useMemo)(() => t.reduce((e, t) => e + t, 0), [t]), v = (0, z.sJ)(eN.vT), j = (0, h.useMemo)(() => v[S.DI[x]] * p, [x, p, v]), g = (0, h.useMemo)(() => (0, b.F8)(C()(i).unix()), [i]), f = (0, h.useMemo)(() => !p || p <= 0 || t.some(e => 0 === e), [p, t]);
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("section", {
                        className: "flex gap-[10px]",
                        children: [(0, r.jsxs)("div", {
                            className: "grow",
                            children: [(0, r.jsx)("p", {
                                className: "font-semibold text-sm mb-2",
                                children: "Set price for all"
                            }), (0, r.jsx)("label", {
                                className: "",
                                children: u ? (0, r.jsx)(eL.q, {
                                    network: x,
                                    placeholder: u ? "Mixed" : void 0,
                                    value: "",
                                    setValue: s
                                }) : (0, r.jsx)(eL.q, {
                                    network: x,
                                    placeholder: u ? "Mixed" : void 0,
                                    setValue: s
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("p", {
                                className: "font-semibold text-sm mb-2",
                                children: "Listing Duration"
                            }), (0, r.jsx)(eW.Z, {
                                hideText: !0,
                                ref: o,
                                dropDownClassName: "dropdown-top",
                                onChange: function(e) {
                                    d(e)
                                }
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "divider my-2 lg:my-3 h-px"
                    }), (0, r.jsx)("div", {
                        className: "flex",
                        children: (0, r.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-col justify-center",
                                children: [(0, r.jsx)("div", {
                                    children: "You will receive"
                                }), (0, r.jsxs)("div", {
                                    className: "gap-1 flex items-center text-xs text-accent-content",
                                    children: [(0, r.jsx)(I.g, {
                                        market: c.Qz.Spaceid,
                                        size: 14
                                    }), "Service Fee ", (0, r.jsx)("span", {
                                        className: "font-semibold",
                                        children: "0%"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "grow items-end flex flex-col",
                                children: [(0, r.jsx)(P.Jc, {
                                    price: p,
                                    tokenType: S.DI[x],
                                    className: "font-bold text-2xl",
                                    size: 16
                                }), (0, r.jsx)("p", {
                                    className: "text-accent-content text-sm",
                                    children: (0, eG.gC)(j || 0, "symbol")
                                })]
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "divider my-2 lg:my-3 h-px"
                    }), (0, r.jsxs)("div", {
                        className: "flex justify-between text-xs text-accent-content",
                        children: [(0, r.jsx)("p", {
                            children: "Ends in "
                        }), (0, r.jsxs)("p", {
                            className: "font-semibold",
                            children: [g, " "]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "divider my-2 lg:my-3 h-px"
                    }), m ? (0, r.jsx)(e$, {
                        loading: l,
                        onClick: () => n(i),
                        disabled: f,
                        isApproved: a
                    }) : (0, r.jsx)(eY.Z, {
                        network: x
                    })]
                })
            }

            function e$(e) {
                let {
                    loading: t,
                    disabled: s,
                    onClick: n,
                    isApproved: l
                } = e;
                return t === eE.Q.success ? (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center justify-center p-2 font-bold text-primary gap-2",
                        children: [(0, r.jsx)(D.$P, {}), "Successful listing"]
                    }), (0, r.jsx)("button", {
                        className: "btn btn-primary btn-block",
                        onClick: n,
                        children: "OK"
                    })]
                }) : t === eE.Q.error ? (0, r.jsxs)("div", {
                    className: "text-warning",
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center justify-center p-2 font-bold gap-2",
                        children: [(0, r.jsx)(D.LQ, {}), "Incomplete Listing"]
                    }), (0, r.jsx)("button", {
                        className: "btn btn-warning btn-block",
                        onClick: n,
                        children: "Retry"
                    })]
                }) : t === eE.Q.loading ? (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: A()("flex items-center gap-3 py-2 px-3 font-semibold text-sm", l ? "text-primary" : "text-white"),
                        children: [l ? (0, r.jsx)(D.gU, {}) : (0, r.jsx)(eT.Z, {}), (0, r.jsx)("div", {
                            children: " Approve domains for sale"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: A()("flex items-center gap-3 py-2 px-3 font-semibold text-sm", l ? "text-white" : "text-disable"),
                        children: [l ? (0, r.jsx)(eT.Z, {}) : (0, r.jsx)(D.OU, {}), (0, r.jsxs)("div", {
                            children: ["Sign listings ", (0, r.jsx)("br", {}), " (You may be required to cancel previous orders)"]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "divider my-3 h-px"
                    }), (0, r.jsxs)("div", {
                        className: "flex items-center justify-center p-2 font-bold text-primary gap-2",
                        children: ["TX Pending", (0, r.jsx)(eT.Z, {})]
                    })]
                }) : (0, r.jsx)("button", {
                    className: "btn btn-block btn-primary font-bold text-base",
                    onClick: n,
                    disabled: s,
                    children: "List"
                })
            }

            function e0(e) {
                var t, s, n;
                let {
                    isOpen: l,
                    actionType: a,
                    onClose: i
                } = e, {
                    makeOrder: d,
                    bulkList: o
                } = (0, ez.E)(eU.Q.LISTING), [x, u] = (0, z.FV)(V.hF), [p, v] = (0, h.useState)(eE.Q.idle), {
                    fetchOrderStatus: j
                } = (0, eF.zh)(), {
                    cancelOrder: g
                } = (0, eV.Y)(), {
                    address: f
                } = (0, el.mA)(), {
                    setSingleStatus: w,
                    clearSuccessfulListings: b
                } = function() {
                    let [e, t] = (0, z.FV)(V.hF), [s, n] = (0, z.FV)(V.xL), l = (e, s, n, l) => {
                        let a = e.map((e, t) => s <= t && t < n ? { ...e,
                            status: l
                        } : e);
                        return t(() => a), a
                    }, a = (e, t) => {
                        if (!e.length) return;
                        let l = s.filter(s => s.network !== t || !e.includes(s.tokenId));
                        n(l)
                    };
                    return {
                        setAllStatus: function(s) {
                            let n = e.map(e => ({ ...e,
                                status: s
                            }));
                            t(n)
                        },
                        setSingleStatus: l,
                        clearSuccessfulListings: a
                    }
                }(), N = (0, z.Zl)(V.FC), k = (0, h.useRef)([]), {
                    setErc721Approval: y
                } = (0, eB.Z)(S.pt[null !== (n = null == x ? void 0 : null === (t = x[0]) || void 0 === t ? void 0 : null === (s = t.domainItem) || void 0 === s ? void 0 : s.network) && void 0 !== n ? n : 0]), [C, Z] = (0, h.useState)(!1), [D, I] = (0, z.FV)(eN.Lm), [P] = (0, Q.t)(W.m, {
                    fetchPolicy: "network-only"
                });

                function O() {
                    i(), u([]), b(k.current, x[0].domainItem.network), k.current = [], v(eE.Q.idle), D && m().reload()
                }
                async function E(e) {
                    if (p === eE.Q.success) {
                        O();
                        return
                    }
                    v(eE.Q.loading);
                    let t = [...x];
                    w(t, 0, t.length, eE.Q.loading);
                    try {
                        await y(), Z(!0), await L(e);
                        let s = await o(x.map(t => ({
                            price: t.price,
                            network: S.pt[t.domainItem.network],
                            domainName: t.domainItem.name,
                            offerer: "".concat(f),
                            tokenId: t.domainItem.tokenId,
                            endTime: e
                        })));
                        await d({
                            variables: {
                                orders: s
                            }
                        }), w(t, 0, t.length, eE.Q.success), v(eE.Q.success), I(!0)
                    } catch (n) {
                        console.error(n), v(eE.Q.error), w(t, 0, t.length, eE.Q.error), "".concat(n).includes("user rejected") && (0, eM.Eo)("Error: user rejected approval");
                        return
                    }
                }
                async function L(e) {
                    let t = [...x],
                        s = [],
                        n = [];
                    for (let l of t) {
                        let a = await T(l, e);
                        s.push(...a.seaport11Orders), n.push(...a.seaport14Orders)
                    }
                    await g(s, "1.1"), await M(s.map(e => e.orderHash)), await g(n, "1.4"), await M(n.map(e => e.orderHash))
                }
                async function T(e, t) {
                    let s = e.domainItem;
                    try {
                        var n, l, a, i;
                        let {
                            data: r
                        } = await P({
                            variables: {
                                network: S.pt[s.network],
                                tokenId: s.tokenId,
                                addr: s.owner,
                                side: c.MF.Sell
                            }
                        });
                        if (null == r ? void 0 : null === (n = r.getUserOrders) || void 0 === n ? void 0 : n.length) {
                            let d = null == r ? void 0 : null === (l = r.getUserOrders) || void 0 === l ? void 0 : l.map(e => ({ ...e
                                })),
                                o = null !== (i = null === (a = null == d ? void 0 : d.filter(e => e.orderSource === c.Qz.Spaceid)) || void 0 === a ? void 0 : a.sort((e, t) => parseFloat(e.tokenAmount) - parseFloat(t.tokenAmount))) && void 0 !== i ? i : [],
                                x = o.length && e.price > parseFloat(o[0].tokenAmount);
                            if (x) {
                                let m = [],
                                    h = [];
                                return o.forEach(e => {
                                    let t = { ...e
                                        },
                                        s = (0, eK.l6)(JSON.parse(t.protocolData));
                                    t.protocol === c.Jl.Seaport ? m.push({ ...s,
                                        orderHash: t.orderHash
                                    }) : h.push({ ...s,
                                        orderHash: t.orderHash
                                    })
                                }), {
                                    seaport11Orders: m,
                                    seaport14Orders: h
                                }
                            }
                        }
                        return {
                            seaport11Orders: [],
                            seaport14Orders: []
                        }
                    } catch (u) {
                        return console.error(u), "".concat(u).includes("user rejected") && (0, eM.Eo)("Error: user rejected"), {
                            seaport11Orders: [],
                            seaport14Orders: []
                        }
                    }
                }

                function M(e) {
                    return new Promise(t => {
                        let s = setInterval(async () => {
                            var n, l;
                            (null === (n = (await j({
                                variables: {
                                    orderHashes: e
                                }
                            })).data) || void 0 === n ? void 0 : null === (l = n.ordersStatus) || void 0 === l ? void 0 : l.every(e => e.orderStatus === c.iF.Cancelled)) && (clearInterval(s), t(!0))
                        }, 1e3)
                    })
                }
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(e_.u, {
                        appear: !0,
                        show: l,
                        as: h.Fragment,
                        children: (0, r.jsxs)(eA.V, {
                            as: "div",
                            className: "relative z-10",
                            onClose: O,
                            children: [(0, r.jsx)(e_.u.Child, {
                                as: h.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, r.jsx)("div", {
                                    className: "fixed inset-0 bg-black bg-opacity-25"
                                })
                            }), (0, r.jsx)("div", {
                                children: (0, r.jsx)(e_.u.Child, {
                                    as: h.Fragment,
                                    enter: "ease-out duration-200",
                                    enterFrom: "opacity-0 right-[-458px]",
                                    enterTo: "opacity-100 right-0",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 right-0",
                                    leaveTo: "opacity-0 right-[-458px]",
                                    children: (0, r.jsxs)(eA.V.Panel, {
                                        className: "bg-boxBg w-full lg:w-[458px] overflow-hidden transition-all fixed top-[] lg:top-0 right-0 bottom-0 rounded-t-lg lg:rounded-none flex flex-col items-start pt-5 border border-divider",
                                        children: [(0, r.jsxs)("header", {
                                            className: "flex px-6 w-full items-center lg:text-2xl text-primary font-bold",
                                            children: [(0, r.jsx)(e3, {
                                                actionType: eO.A.list
                                            }), (0, r.jsx)("button", {
                                                className: "p-2 h-7 w-7 text-accent-content",
                                                onClick: O,
                                                children: (0, r.jsx)(eH.Z, {})
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "divider my-3 h-px px-6"
                                        }), (0, r.jsx)("div", {
                                            className: "flex justify-between text-accent-content font-semibold text-sm mx-6",
                                            children: (0, r.jsxs)("p", {
                                                children: [x.length, " items"]
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "w-full flex flex-col flex-1 gap-3 pt-3 overflow-y-auto px-6 max-h-[200px] lg:max-h-full",
                                            children: x.map((e, t) => (0, r.jsx)(e1, {
                                                tokenId: e.domainItem.tokenId,
                                                loading: p,
                                                setPrice: s => (function(e, t, s) {
                                                    let n = [...x];
                                                    n.splice(t, 1, { ...s,
                                                        price: e
                                                    }), u(n), N(!0)
                                                })(s, t, e),
                                                onRemove: () => (function(e) {
                                                    let t = x.filter(t => t.domainItem.tokenId !== e.tokenId || t.domainItem.network !== e.network);
                                                    u(t)
                                                })(e.domainItem)
                                            }, t))
                                        }), (0, r.jsx)("div", {
                                            className: "divider my-0 h-px px-6"
                                        }), (0, r.jsx)("section", {
                                            className: "pt-3 px-6 pb-4 lg:pb-6 w-full text-white",
                                            children: (0, r.jsx)(eX, {
                                                priceList: x.map(e => e.price),
                                                loading: p,
                                                isApproved: C,
                                                onChangePrice: function(e) {
                                                    let t = e;
                                                    (!e || e < 0) && (t = 0);
                                                    let s = x.map(e => ({
                                                        domainItem: e.domainItem,
                                                        price: Number(t),
                                                        status: e.status
                                                    }));
                                                    u(s), N(!1)
                                                },
                                                onSubmit: E
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            }

            function e1(e) {
                var t;
                let {
                    tokenId: s,
                    setPrice: n,
                    onRemove: l,
                    price: a,
                    loading: i
                } = e, d = (0, z.sJ)((0, V.u5)(s)), c = d.domainItem, o = S.pt[c.network];
                return (0, r.jsxs)("div", {
                    className: "flex items-center w-full",
                    children: [(0, r.jsxs)("div", {
                        className: A()("relative overflow-hidden"),
                        children: [(0, r.jsx)("div", {
                            className: "w-9 h-9 lg:w-[52px] lg:h-[52px]",
                            children: (0, r.jsx)(J.Z, {
                                url: null !== (t = c.image) && void 0 !== t ? t : "",
                                size: 52,
                                className: "rounded-md"
                            })
                        }), (0, r.jsx)("div", {
                            className: A()("flex items-center justify-center inset-0 absolute rounded-md", d.status !== eE.Q.idle || i === eE.Q.loading ? "bg-black/60" : ""),
                            children: d.status === eE.Q.loading ? (0, r.jsx)("div", {
                                children: (0, r.jsx)(eT.Z, {})
                            }) : d.status === eE.Q.error ? (0, r.jsx)("div", {
                                children: (0, r.jsx)(D.bB, {
                                    className: "text-warning",
                                    width: 16
                                })
                            }) : d.status === eE.Q.success ? (0, r.jsx)("div", {
                                children: (0, r.jsx)(D.gU, {})
                            }) : i === eE.Q.loading ? (0, r.jsx)(D.OU, {}) : null
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "grow mx-2",
                        children: [(0, r.jsx)(H.Z, {
                            className: "text-sm lg:text-base font-semibold text-quarternary",
                            domain: c.name,
                            network: S.pt[c.network],
                            useTldColor: !1
                        }), (0, r.jsxs)("div", {
                            className: "text-xs text-quarternary flex items-center",
                            children: [(0, r.jsx)("span", {
                                children: "Last Sale: "
                            }), " ", (0, r.jsx)(P.Jc, {
                                size: 12,
                                className: "text-xs font-normal text-quarternary ml-1",
                                tokenType: S.s8[c.network],
                                price: "".concat(c.lastSalePrice)
                            })]
                        })]
                    }), i === eE.Q.loading ? (0, r.jsx)(P.Jc, {
                        size: 12,
                        className: "text-end",
                        tokenType: S.s8[c.network],
                        price: "".concat(d.price)
                    }) : (0, r.jsx)("label", {
                        className: "w-[120px] font-normal",
                        children: (0, r.jsx)(eL.q, {
                            network: o,
                            value: d.price,
                            setValue: e => n(e)
                        }, c.name)
                    }), i === eE.Q.loading ? null : (0, r.jsx)("div", {
                        className: "w-4 lg:w-8 flex justify-center ml-1",
                        children: (0, r.jsx)("button", {
                            className: "hover:text-white text-disable w-8 h-8 btn p-0 btn-square btn-ghost hover:bg-transparent",
                            onClick: l,
                            children: (0, r.jsx)(eR.Z, {
                                width: 16
                            })
                        })
                    })]
                })
            }

            function e3(e) {
                let {
                    actionType: t = eO.A.list
                } = e, s = (0, eO.a)(t);
                return (0, r.jsxs)("div", {
                    className: "mr-auto flex items-center",
                    children: [t === eO.A.transfer ? (0, r.jsx)(eQ.Z, {
                        width: "1em",
                        height: "1em"
                    }) : t === eO.A.list ? (0, r.jsx)(eq.Z, {
                        width: "1em",
                        height: "1em"
                    }) : (0, r.jsx)(eJ.Z, {
                        width: "1em",
                        height: "1em"
                    }), (0, r.jsxs)("p", {
                        className: "ml-2 mr-auto",
                        children: ["Bulk ", s]
                    })]
                })
            }

            function e2(e) {
                let {
                    contentList: t
                } = e, [s, n] = (0, h.useState)(0), [l, a] = (0, z.FV)(V.xL), [i, d] = (0, z.FV)(V.DA), o = (0, z.Zl)(V.Db), x = (0, z.Zl)(V.hF), m = (0, z.Zl)(V.n_);

                function u(e) {
                    let s = parseInt(e.target.value);
                    s <= t.length && s >= 0 && (n(s), a(s > 0 ? t.slice(0, s) : [])), s || (n(0), a([]))
                }

                function p(e) {
                    d(!0), x(l.filter(t => e === S.pt[t.network] && (0, k.l6)(t.expirationDate) !== w.O.gracePeriod).map(e => ({
                        domainItem: e,
                        status: eE.Q.idle,
                        price: 0
                    }))), o(e)
                }(0, h.useEffect)(() => {
                    n(0), a([])
                }, [n, a]);
                let v = (0, h.useMemo)(() => [c.Zc.Bnb, c.Zc.Eth, c.Zc.Arb].map(e => ({
                    network: e,
                    list: l.filter(t => e === S.pt[t.network] && (0, k.l6)(t.expirationDate) !== w.O.gracePeriod)
                })), [l]);
                return (0, r.jsxs)("div", {
                    className: "sticky bottom-0 w-full bg-accent/60 p-4 rounded-t shadow flex flex-col lg:flex-row gap-2 backdrop-blur items-stretch lg:items-center",
                    children: [(0, r.jsx)(e0, {
                        isOpen: i,
                        onClose: () => d(!1),
                        actionType: eO.A.list
                    }), (0, r.jsxs)("div", {
                        className: "flex grow gap-2 items-center",
                        children: [(0, r.jsxs)("div", {
                            className: "bg-button01 flex w-full lg:w-[280px] items-center rounded-[5px] pr-4 gap-2 h-9",
                            children: [(0, r.jsx)("div", {
                                className: A()("p-3", s > 0 ? "text-primary" : ""),
                                children: (0, r.jsx)(eD.Z, {})
                            }), (0, r.jsx)("div", {
                                className: eP().InputRange,
                                children: (0, r.jsx)("input", {
                                    step: 1,
                                    type: "range",
                                    id: "sweeper",
                                    min: 0,
                                    max: t.length,
                                    value: s,
                                    autoFocus: !0,
                                    onChange: u
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "w-9 h-9 bg-button01 rounded-[5px] justify-center items-center text-center hidden lg:flex",
                            children: (0, r.jsx)("input", {
                                className: "w-full h-full text-center bg-transparent",
                                value: s,
                                type: "number",
                                onChange: u
                            })
                        }), (0, r.jsx)("div", {
                            className: "py-2 pl-2 h-8",
                            onClick: () => m(!1),
                            children: (0, r.jsx)(D.Ui, {
                                width: 16
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex justify-between items-center lg:hidden",
                        children: [(0, r.jsxs)("p", {
                            className: "text-accent-content text-xs",
                            children: [l.length, " items selected"]
                        }), (0, r.jsxs)("div", {
                            tabIndex: 0,
                            className: "dropdown dropdown-top z-20",
                            children: [(0, r.jsx)("button", {
                                tabIndex: 0,
                                className: "btn w-40 h-10 btn-secondary disabled:bg-disable",
                                disabled: l.length <= 0,
                                children: "List"
                            }), (0, r.jsx)("ul", {
                                tabIndex: 0,
                                className: "dropdown-content menu text-sm",
                                children: v.map(e => {
                                    let t = e.list.length;
                                    return t ? (0, r.jsxs)("li", {
                                        className: "p-3",
                                        onClick: () => p(e.network),
                                        children: ["List", " ", t > 1 ? "".concat(t, " .").concat(S.kB[e.network], " domains") : "".concat(t, " .").concat(S.kB[e.network], " domain")]
                                    }, e.network) : null
                                })
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "hidden lg:flex",
                        children: [(0, r.jsx)("div", {
                            className: "btn-group",
                            children: v.map(e => {
                                let t = e.list.length;
                                return t ? (0, r.jsxs)("button", {
                                    className: "btn btn-primary btn-outline",
                                    onClick: () => p(e.network),
                                    children: ["List", " ", t > 1 ? "".concat(t, " .").concat(S.kB[e.network], " domains") : "".concat(t, " .").concat(S.kB[e.network], " domain")]
                                }, e.network) : null
                            })
                        }), l.length > 0 ? null : (0, r.jsx)("p", {
                            className: "text-disable py-2",
                            children: " Sweep to select items"
                        })]
                    })]
                })
            }(0, z.cn)({
                key: "filter",
                default: {
                    tld: void 0
                }
            });
            let e6 = (0, z.cn)({
                key: "liststyle",
                default: 1
            });

            function e4(e) {
                let {
                    keyword: t,
                    contentList: s,
                    pageInfo: n,
                    children: l,
                    loading: a
                } = e, [i, c] = (0, z.FV)(e6), {
                    sweepToCart: x
                } = (0, es.Z)(), {
                    visible: m
                } = (0, o.Z)(), u = (0, z.sJ)(V.n_), p = (0, h.useMemo)(() => m.hideTld && s.length > 0, [s.length, m.hideTld]);
                return (0, r.jsxs)("div", {
                    className: "relative pb-20 lg:p-0",
                    children: [(0, r.jsx)(ey, {
                        keyword: t,
                        layout: i,
                        setLayout: e => c(e)
                    }), l, (0, r.jsx)(em, {
                        contentList: s,
                        dense: !1,
                        loading: a
                    }), (0, r.jsxs)("div", {
                        className: "fixed lg:sticky inset-0 top-auto flex flex-col items-center",
                        children: [(0, r.jsx)("div", {
                            className: "lg:hidden",
                            children: (0, r.jsx)(d.R, {})
                        }), p && (0, r.jsx)(eS, {
                            max: s.length,
                            onAddToCart: function(e) {
                                x(s.slice(0, e))
                            }
                        }), u && (0, r.jsx)(e2, {
                            contentList: s,
                            max: s.length
                        })]
                    }), (0, r.jsx)(eZ, {
                        pageInfo: n
                    })]
                })
            }
        },
        65701: function(e) {
            e.exports = {
                "react-modal-sheet-backdrop": "BottomSheetModal_react-modal-sheet-backdrop__NufPd",
                "react-modal-sheet-container": "BottomSheetModal_react-modal-sheet-container__kW07L",
                "react-modal-sheet-header": "BottomSheetModal_react-modal-sheet-header__zoS07",
                "react-modal-sheet-drag-indicator": "BottomSheetModal_react-modal-sheet-drag-indicator__gfOts",
                "react-modal-sheet-content": "BottomSheetModal_react-modal-sheet-content__O4Xge"
            }
        },
        36129: function(e) {
            e.exports = {
                InputRange: "InputRange_InputRange__t_R6Y"
            }
        }
    }
]);