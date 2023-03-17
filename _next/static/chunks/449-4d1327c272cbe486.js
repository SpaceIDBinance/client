"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [449], {
        60092: function(e, n, i) {
            i.d(n, {
                Z: function() {
                    return C
                }
            });
            var l = i(85893),
                a = i(73359),
                t = i(32663),
                s = i(4739),
                d = i(797),
                o = i(91842),
                r = i(74764);

            function c() {
                return (0, l.jsxs)("div", {
                    className: "flex gap-6 font-semibold h-[242px]",
                    children: [(0, l.jsx)("div", {
                        className: "flex-none w-[242px] h-[242px] skeleton rounded-lg"
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col w-full text-sm",
                        children: [(0, l.jsx)("p", {
                            className: "mb-4",
                            children: "Owned by"
                        }), (0, l.jsx)("p", {
                            className: "mb-4",
                            children: " Expires on "
                        }), (0, l.jsxs)("div", {
                            className: "flex gap-4 grow",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-col gap-4 basis-2/5",
                                children: [(0, l.jsx)("div", {
                                    className: "px-3 py-2 bg-accent rounded-xl flex-1 skeleton"
                                }), (0, l.jsx)("div", {
                                    className: "px-3 py-2 bg-accent rounded-xl flex-1 skeleton",
                                    children: (0, l.jsx)("div", {
                                        className: "text-xs text-accent-content flex gap-2"
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "px-3 py-2 bg-accent rounded-xl text-accent-content basis-3/5 flex gap-1 flex-col skeleton",
                                children: (0, l.jsx)("div", {
                                    className: "text-xs text-accent-content",
                                    children: "Properties"
                                })
                            })]
                        })]
                    })]
                })
            }
            var u = i(996),
                m = i(18051),
                x = i(34557),
                v = i(42021),
                h = i(86341),
                p = i(41287),
                f = i(76227),
                g = i(78346),
                j = i(25854),
                w = i(91740),
                N = i(41664),
                k = i.n(N),
                b = i(11163),
                D = i(67294),
                y = i(55587);

            function C(e) {
                var n, i, N, C, P, S, Z, O, M, E, I, R, A, z, U, T, V, q, J, L;
                let {
                    expanded: _,
                    initData: B,
                    children: F
                } = e, {
                    getDomainName: Q
                } = (0, x.ay)(), [H, W] = (0, D.useState)(""), K = (0, b.useRouter)(), [X, {
                    loading: Y,
                    data: G
                }] = (0, a.t)(j.bZ, {
                    variables: {
                        network: w.pt[B.network],
                        tokenId: B.tokenId
                    }
                }), $ = (0, D.useMemo)(() => null == G ? void 0 : G.domainDetailPageData, [G]), ee = null !== (A = null == $ ? void 0 : null === (n = $.domainDetail) || void 0 === n ? void 0 : n.expiration) && void 0 !== A ? A : 0, en = (0, g.l6)(ee), ei = (0, v.Z)(null == $ ? void 0 : null === (i = $.domainDetail) || void 0 === i ? void 0 : i.expiration, en), el = (0, D.useMemo)(() => (0, g.dd)(B.name, w.pt[B.network]), [B.name, B.network]);
                (0, D.useEffect)(() => {
                    _ && !G && X()
                }, [_, X, G]);
                let ea = (0, D.useMemo)(() => G ? G.domainDetailPageData.metadata : null, [G]),
                    et = (0, u.J)(j.b3, null == G ? void 0 : G.domainDetailPageData.listings),
                    es = (0, u.J)(j.b3, null == G ? void 0 : G.domainDetailPageData.offers);
                (0, D.useEffect)(() => {
                    var e, n;
                    _ && (null == $ ? void 0 : null === (e = $.domainDetail) || void 0 === e ? void 0 : e.owner) && Q(null == $ ? void 0 : null === (n = $.domainDetail) || void 0 === n ? void 0 : n.owner).then(e => {
                        W(e)
                    })
                }, [null == $ ? void 0 : null === (N = $.domainDetail) || void 0 === N ? void 0 : N.owner, _, Q]);
                let ed = (0, D.useMemo)(() => w.s8[B.network], [B.network]),
                    eo = (0, D.useCallback)(() => en === h.O.gracePeriod ? (0, l.jsxs)("span", {
                        className: "text-warning",
                        children: ["Expires on ", (0, f.Vv)(ee)]
                    }) : en === h.O.premium ? (0, l.jsxs)("span", {
                        children: ["Expires on ", (0, f.Vv)(null != ee ? ee : 0)]
                    }) : (0, l.jsxs)("span", {
                        children: ["Expires on ", (0, f.Vv)(ee)]
                    }), [en, ee]);
                return Y || !G ? (0, l.jsx)(c, {}) : (0, l.jsx)("div", {
                    children: (0, l.jsxs)("div", {
                        className: "flex gap-6 font-semibold",
                        children: [(0, l.jsx)("div", {
                            className: "min-w-[100px]",
                            children: (0, l.jsx)("div", {
                                className: "rounded-lg overflow-hidden",
                                children: en === h.O.unExpired && (null == ea ? void 0 : ea.image) ? (0, l.jsx)(o.Z, {
                                    url: null == ea ? void 0 : ea.image,
                                    size: 242
                                }) : (0, l.jsx)(o.b, {
                                    size: 242,
                                    name: B.name,
                                    network: w.pt[B.network]
                                })
                            })
                        }), (0, l.jsxs)("section", {
                            className: "flex flex-col grow",
                            children: [(0, l.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, l.jsxs)("div", {
                                    className: "grow",
                                    children: [(0, l.jsx)("div", {
                                        className: "mb-4 text-sm overflow-visible font-semibold",
                                        children: (0, l.jsx)("div", {
                                            children: en !== h.O.unRegistered ? (0, l.jsxs)("p", {
                                                className: "truncate max-w-[200px] text-ellipsis",
                                                children: [(0, l.jsx)("span", {
                                                    className: "text-white",
                                                    children: " Owned by "
                                                }), " ", (0, l.jsx)(k(), {
                                                    href: "/profile/domains/".concat(null == $ ? void 0 : null === (C = $.domainDetail) || void 0 === C ? void 0 : C.owner),
                                                    children: (0, l.jsx)("span", {
                                                        className: "cursor-pointer text-primary",
                                                        children: H || (null == $ ? void 0 : null === (P = $.domainDetail) || void 0 === P ? void 0 : null === (S = P.owner) || void 0 === S ? void 0 : S.substring(0, 8))
                                                    })
                                                })]
                                            }) : (0, l.jsxs)("p", {
                                                className: "text-white",
                                                children: [(0, l.jsx)("span", {
                                                    className: "text-primary",
                                                    children: "Available "
                                                }), (0, l.jsx)("span", {
                                                    children: "for registration"
                                                })]
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "mb-4 text-sm truncate",
                                        children: en !== h.O.unRegistered ? (0, l.jsx)(eo, {}) : "/"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "h-[76px] flex flex-col items-end gap-1",
                                    children: [(0, l.jsxs)("button", {
                                        className: "btn btn-ghost btn-xs w-[120px] h-7 p-0 text-primary",
                                        onClick: function() {
                                            en !== h.O.unExpired ? K.push({
                                                pathname: (0, p.gK)(B.tokenId, B.network),
                                                query: {
                                                    name: B.name
                                                }
                                            }) : K.push((0, p.gK)(B.tokenId, B.network))
                                        },
                                        children: [(0, l.jsx)("span", {
                                            children: " View in full page"
                                        }), (0, l.jsx)(s.IY, {
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, l.jsx)(y.Z, {
                                        data: G.domainDetailPageData.domainDetail ? G.domainDetailPageData : {
                                            domainDetail: {
                                                name: B.name,
                                                network: w.pt[B.network],
                                                expiration: 0
                                            },
                                            metadata: null,
                                            listings: []
                                        },
                                        showAddToCart: !1
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex gap-4 grow",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col gap-4 basis-2/5 min-w-fit",
                                    children: [(0, l.jsxs)("div", {
                                        className: "px-3 py-2 bg-accent rounded-xl flex-1",
                                        children: [(0, l.jsxs)("div", {
                                            className: "text-xs text-accent-content flex gap-2",
                                            children: [(0, l.jsx)("span", {
                                                children: " Current Price "
                                            }), (0, l.jsx)("div", {
                                                children: (0, l.jsx)(d.Z, {
                                                    className: "gap-3",
                                                    size: 20,
                                                    name: null !== (z = null == $ ? void 0 : null === (Z = $.domainDetail) || void 0 === Z ? void 0 : Z.name) && void 0 !== z ? z : "",
                                                    list: et
                                                })
                                            })]
                                        }), en === h.O.premium ? (0, l.jsx)("p", {
                                            className: "text-2xl font-bold text-primary",
                                            children: null == ei ? void 0 : ei.getAmountNow().toLocaleString("en-US", {
                                                currency: "USD",
                                                maximumFractionDigits: 2,
                                                style: "currency"
                                            })
                                        }) : en === h.O.unRegistered ? (0, l.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [(0, l.jsx)("span", {
                                                children: (0, l.jsx)(r.Jc, {
                                                    tokenType: m.iv.Usd,
                                                    className: "text-2xl",
                                                    price: B.listPrice
                                                })
                                            }), (0, l.jsx)("span", {
                                                className: "text-2xl",
                                                children: "/year"
                                            })]
                                        }) : (0, l.jsx)(r.hA, {
                                            price: null !== (U = null == et ? void 0 : null === (O = et[0]) || void 0 === O ? void 0 : O.tokenAmount) && void 0 !== U ? U : 0,
                                            tokenType: null !== (T = null == et ? void 0 : null === (M = et[0]) || void 0 === M ? void 0 : M.tokenType) && void 0 !== T ? T : m.iv.Bnb,
                                            className: "text-white"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "px-3 py-2 bg-accent rounded-xl flex-1",
                                        children: [(0, l.jsxs)("div", {
                                            className: "text-xs text-accent-content flex gap-2",
                                            children: [(0, l.jsx)("span", {
                                                children: "Top Offer"
                                            }), es && es.length ? (0, l.jsx)(d.g, {
                                                className: "gap-3",
                                                size: 20,
                                                market: null !== (V = null == es ? void 0 : null === (E = es[0]) || void 0 === E ? void 0 : E.orderSource) && void 0 !== V ? V : m.Qz.Spaceid
                                            }) : null]
                                        }), (0, l.jsx)(r.hA, {
                                            price: null !== (q = null == es ? void 0 : null === (I = es[0]) || void 0 === I ? void 0 : I.tokenAmount) && void 0 !== q ? q : "0",
                                            tokenType: ed,
                                            className: "text-white",
                                            usd: "120"
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "px-3 py-2 bg-accent rounded-xl text-accent-content basis-3/5 min-w-0 flex gap-1 flex-col",
                                    children: [(0, l.jsx)("div", {
                                        className: "text-xs text-accent-content",
                                        children: "Properties"
                                    }), (null == $ ? void 0 : $.collections) && $.collections.length ? (0, l.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, l.jsx)("div", {
                                            className: "min-w-[96px] font-normal text-quarternary",
                                            children: "Collection"
                                        }), (0, l.jsx)("div", {
                                            className: "flex gap-1 flex-wrap",
                                            children: null == $ ? void 0 : $.collections.map((e, n) => {
                                                var i;
                                                return (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(k(), {
                                                        href: "/collection/".concat(null === (i = $.domainDetail) || void 0 === i ? void 0 : i.network, "/").concat(e.id),
                                                        children: (0, l.jsxs)("div", {
                                                            className: "bg-divider rounded cursor-pointer px-[6px] flex whitespace-nowrap",
                                                            children: [e.tagName, "↗"]
                                                        })
                                                    })
                                                }, n)
                                            })
                                        })]
                                    }) : null, (0, l.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, l.jsx)("div", {
                                            className: "w-24 font-normal text-quarternary",
                                            children: "Character"
                                        }), (0, l.jsx)("div", {
                                            className: "capitalize",
                                            children: null !== (J = null == ea ? void 0 : ea.characterSet) && void 0 !== J ? J : el.characterSet
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, l.jsx)("div", {
                                            className: "w-24 font-normal text-quarternary",
                                            children: "Length"
                                        }), (0, l.jsxs)("div", {
                                            children: [null !== (L = null == ea ? void 0 : ea.length) && void 0 !== L ? L : el.length, " characters"]
                                        })]
                                    }), ed === m.iv.Bnb && _ ? (0, l.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, l.jsx)("div", {
                                            className: "w-24 font-normal text-quarternary",
                                            children: "Referral"
                                        }), (0, l.jsx)(t.Z, {
                                            domain: null == $ ? void 0 : null === (R = $.domainDetail) || void 0 === R ? void 0 : R.name
                                        })]
                                    }) : null, ed === m.iv.Bnb ? (0, l.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, l.jsx)("div", {
                                            className: "w-24 font-normal text-quarternary",
                                            children: "Skin"
                                        }), (0, l.jsx)("div", {
                                            className: "truncate",
                                            children: null == ea ? void 0 : ea.skinName
                                        })]
                                    }) : null]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        55587: function(e, n, i) {
            i.d(n, {
                Z: function() {
                    return N
                }
            });
            var l = i(85893),
                a = i(50287),
                t = i(26580),
                s = i(9037),
                d = i(4739),
                o = i(996),
                r = i(18051),
                c = i(20956),
                u = i(65789),
                m = i(58992),
                x = i(47441),
                v = i(86341),
                h = i(78346),
                p = i(25854),
                f = i(94184),
                g = i.n(f),
                j = i(11163),
                w = i(67294);

            function N(e) {
                var n;
                let {
                    data: i,
                    showAddToCart: f
                } = e, g = (0, j.useRouter)(), {
                    isOwnerTest: N
                } = (0, c.aC)(), b = (0, w.useMemo)(() => i.domainDetail, [i.domainDetail]), D = (0, w.useMemo)(() => N(null !== (n = b.owner) && void 0 !== n ? n : ""), [N, b.owner]), y = (0, o.J)(p.b3, null == i ? void 0 : i.listings), {
                    addToCart: C
                } = (0, u.Z)(), P = (0, m.Z)(t.Z), S = (0, w.useMemo)(() => g.asPath.startsWith("/profile/listing") || g.asPath.startsWith("/profile/offers"), [g.asPath]), Z = (0, w.useMemo)(() => {
                    var e, n;
                    return (0, h.Co)(null === (e = i.domainDetail) || void 0 === e ? void 0 : e.owner, null === (n = i.domainDetail) || void 0 === n ? void 0 : n.expiration)
                }, [i]), O = (0, w.useMemo)(() => {
                    let e = i.listings;
                    return e && e.length && -1 !== y.findIndex(e => e.orderSource === r.Qz.Spaceid)
                }, [i.listings, y]), M = (0, w.useMemo)(() => !(D || Z === v.O.gracePeriod || Z === v.O.unExpired && i.domainDetail.listPrice <= 0), [Z, i.domainDetail.listPrice, D]), {
                    showMakeOfferDialog: E,
                    showListingDialog: I,
                    showBuyNowDialog: R,
                    showEditListingDialog: A
                } = (0, m.E)(), z = (0, m.Z)(a.Z), U = (0, m.Z)(s.Z), T = (0, w.useMemo)(() => {
                    var e, n, a, t;
                    let s = [];
                    if (f && M && s.push((0, l.jsxs)(k, {
                            className: "btn-accent text-primary",
                            onClick: () => C({
                                tokenId: b.tokenId,
                                network: b.network,
                                name: b.name,
                                tokenAmount: i.listings[0].tokenAmount,
                                image: i.metadata.image
                            }, b.expiration),
                            children: [(0, l.jsx)(x.Z, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "Add to Cart"
                            })]
                        })), (Z === v.O.premium || Z === v.O.unRegistered) && s.push((0, l.jsxs)(k, {
                            className: "btn-secondary",
                            onClick() {
                                var e, n, l, a;
                                return P({
                                    name: null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name,
                                    network: null === (n = i.domainDetail) || void 0 === n ? void 0 : n.network,
                                    expiration: null === (l = i.domainDetail) || void 0 === l ? void 0 : l.expiration,
                                    owner: null === (a = i.domainDetail) || void 0 === a ? void 0 : a.owner
                                })
                            },
                            children: [(0, l.jsx)(d.CM, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "Register"
                            })]
                        })), D || (i.listings && i.listings.length && s.push((0, l.jsxs)(k, {
                            className: "text-dark ",
                            onClick() {
                                var l, a, t;
                                return R.show({
                                    order: null == i ? void 0 : i.listings[0],
                                    domain: null !== (e = null == i ? void 0 : null === (l = i.domainDetail) || void 0 === l ? void 0 : l.name) && void 0 !== e ? e : "",
                                    imageUrl: null !== (n = null == i ? void 0 : null === (a = i.metadata) || void 0 === a ? void 0 : a.image) && void 0 !== n ? n : "",
                                    network: null === (t = i.domainDetail) || void 0 === t ? void 0 : t.network
                                })
                            },
                            children: [(0, l.jsx)(d.ib, {
                                width: 21,
                                height: 16
                            }), (0, l.jsx)("div", {
                                children: "Buy Now"
                            })]
                        })), Z !== v.O.premium && Z !== v.O.unRegistered && s.push((0, l.jsxs)(k, {
                            className: "btn-secondary text-white",
                            onClick() {
                                var e, n, l, a, t;
                                E.show({
                                    domain: null !== (a = null == i ? void 0 : null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : "",
                                    network: null === (n = i.domainDetail) || void 0 === n ? void 0 : n.network,
                                    imageUrl: null !== (t = null === (l = i.metadata) || void 0 === l ? void 0 : l.image) && void 0 !== t ? t : ""
                                })
                            },
                            children: [(0, l.jsx)(d.fX, {
                                width: 20
                            }), (0, l.jsx)("span", {
                                children: "Make Offer"
                            })]
                        }))), D) {
                        if (S) return s;
                        if (Z === v.O.gracePeriod) return s.push((0, l.jsxs)(k, {
                            className: "btn-primary",
                            onClick() {
                                var e, n, l;
                                return z({
                                    name: null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name,
                                    image: null === (n = i.metadata) || void 0 === n ? void 0 : n.image,
                                    network: null === (l = i.domainDetail) || void 0 === l ? void 0 : l.network
                                })
                            },
                            children: [(0, l.jsx)(d.CM, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "Extend"
                            })]
                        })), s;
                        s.push(O ? (0, l.jsxs)(k, {
                            className: "btn-primary",
                            onClick() {
                                var e, n, l, a, t;
                                y.find(e => e.orderSource === r.Qz.Spaceid), A.show({
                                    domain: null !== (a = null == i ? void 0 : null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : "",
                                    imageUrl: null !== (t = null == i ? void 0 : null === (n = i.metadata) || void 0 === n ? void 0 : n.image) && void 0 !== t ? t : "",
                                    network: null === (l = i.domainDetail) || void 0 === l ? void 0 : l.network
                                })
                            },
                            children: [(0, l.jsx)(d.t_, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "Edit Listing"
                            })]
                        }) : (0, l.jsxs)(k, {
                            className: "btn-secondary",
                            onClick() {
                                var e, n, l;
                                return I.show({
                                    domain: null !== (a = null == i ? void 0 : null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : "",
                                    network: null === (n = i.domainDetail) || void 0 === n ? void 0 : n.network,
                                    imageUrl: null !== (t = null === (l = i.metadata) || void 0 === l ? void 0 : l.image) && void 0 !== t ? t : ""
                                })
                            },
                            children: [(0, l.jsx)(d.CM, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "List Now"
                            })]
                        })), g.asPath.startsWith("/profile/domains") && (s.push((0, l.jsxs)(k, {
                            className: "btn-primary",
                            onClick() {
                                var e, n, l;
                                return z({
                                    name: null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name,
                                    image: null === (n = i.metadata) || void 0 === n ? void 0 : n.image,
                                    network: null === (l = i.domainDetail) || void 0 === l ? void 0 : l.network
                                })
                            },
                            children: [(0, l.jsx)(d.Oy, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "Extend"
                            })]
                        })), s.push((0, l.jsxs)(k, {
                            className: "btn-primary",
                            onClick() {
                                var e, n, l;
                                return U({
                                    name: null === (e = i.domainDetail) || void 0 === e ? void 0 : e.name,
                                    image: null === (n = i.metadata) || void 0 === n ? void 0 : n.image,
                                    network: null === (l = i.domainDetail) || void 0 === l ? void 0 : l.network
                                })
                            },
                            children: [(0, l.jsx)(d.sg, {
                                width: 12,
                                height: 12
                            }), (0, l.jsx)("span", {
                                children: "Transfer"
                            })]
                        })))
                    }
                    return s
                }, [Z, D, i, b, S, O, g.asPath, y]);
                return (0, l.jsx)("div", {
                    className: "flex gap-2 w-full items-stretch",
                    children: T.map((e, n) => (0, l.jsx)("div", {
                        className: "flex-1",
                        children: e
                    }, n))
                })
            }

            function k(e) {
                let {
                    className: n,
                    onClick: i,
                    children: a
                } = e;
                return (0, l.jsx)("button", {
                    className: g()("btn btn-xs btn-primary w-full h-10 lg:w-[120px] lg:h-7", n),
                    onClick: i,
                    children: (0, l.jsx)("div", {
                        className: "flex flex-col lg:flex-row lg:gap-[6px] items-center",
                        children: a
                    })
                })
            }
        },
        45808: function(e, n, i) {
            i.d(n, {
                R: function() {
                    return v
                }
            });
            var l = i(85893),
                a = i(4739),
                t = i(56149),
                s = i(25362),
                d = i(64173),
                o = i(4480),
                r = i(91601),
                c = i(90927);

            function u() {
                let [e, n] = (0, o.FV)(r.eH), i = (0, d.Z)("(min-width: 1024px)");
                return i ? null : (0, l.jsx)(t.Z, {
                    className: "p-5 pb-0 text-left max-h-[95vh] overflow-y-scroll",
                    onClose: () => n(!1),
                    children: (0, l.jsx)(c.S, {
                        wrapperClassName: "",
                        setMinimized: n,
                        children: (0, l.jsx)("div", {
                            className: "flex-1",
                            children: (0, l.jsx)("button", {
                                className: "btn btn-primary w-full h-8",
                                onClick: () => n(!e),
                                children: (0, l.jsx)("div", {
                                    className: "",
                                    children: "Show Results"
                                })
                            })
                        })
                    })
                })
            }
            var m = s.ZP.create(() => (0, l.jsx)(u, {})),
                x = i(67294);

            function v() {
                let [e, n] = (0, o.FV)(r.eH), i = (0, s.dd)(m);
                return (0, x.useEffect)(() => {
                    e ? i.show() : i.hide()
                }, [e]), (0, l.jsxs)("button", {
                    className: "btn btn-primary h-9 w-[120px] bg-white/5 lg:btn-outline text-xs lg:text-sm shadow sticky lg:fixed lg:bottom-0 mb-6 2xl:hidden backdrop-blur-sm text-primary border-divider-bright lg:border",
                    onClick: () => n(!e),
                    children: [(0, l.jsx)(a.OE, {
                        width: "1em",
                        height: "1em"
                    }), (0, l.jsx)("p", {
                        className: "ml-[6px]",
                        children: "Filter"
                    })]
                })
            }
        },
        32663: function(e, n, i) {
            i.d(n, {
                Z: function() {
                    return s
                }
            });
            var l = i(85893),
                a = i(27645);
            let t = ["-", "Regular", "Premium I", "Premium II", "Premium III"];

            function s(e) {
                let {
                    domain: n
                } = e, {
                    isPartner: i,
                    referralLevel: s
                } = (0, a.r)(null != n ? n : "");
                return (0, l.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: (0, l.jsx)("p", {
                        children: i ? "VIP" : t[Math.min(s, t.length)]
                    })
                })
            }
        },
        996: function(e, n, i) {
            i.d(n, {
                J: function() {
                    return l
                }
            });

            function l(e, n) {
                return n
            }
        },
        95931: function(e, n, i) {
            i.d(n, {
                HQ: function() {
                    return r
                },
                IU: function() {
                    return m
                },
                J2: function() {
                    return x
                },
                Pn: function() {
                    return s
                },
                Pu: function() {
                    return t
                },
                cX: function() {
                    return d
                },
                ce: function() {
                    return c
                },
                jS: function() {
                    return o
                },
                kn: function() {
                    return u
                }
            });
            var l = i(4480),
                a = i(78346);
            let t = (0, l.cn)({
                    key: "domainParamState",
                    default: void 0
                }),
                s = (0, l.cn)({
                    key: "isDomainOwnerState",
                    default: !1
                }),
                d = (0, l.cn)({
                    key: "domainDetailPageDataState",
                    default: void 0
                }),
                o = (0, l.nZ)({
                    key: "domainDetailState",
                    get(e) {
                        var n;
                        let {
                            get: i
                        } = e, l = i(d);
                        return null !== (n = null == l ? void 0 : l.domainDetail) && void 0 !== n ? n : void 0
                    }
                }),
                r = (0, l.nZ)({
                    key: "domainListingsState",
                    get(e) {
                        var n;
                        let {
                            get: i
                        } = e, l = i(d);
                        return null !== (n = null == l ? void 0 : l.listings) && void 0 !== n ? n : []
                    }
                }),
                c = (0, l.cn)({
                    key: "domainMetadataState",
                    default: void 0
                }),
                u = (0, l.nZ)({
                    key: "domainOffersState",
                    get(e) {
                        var n;
                        let {
                            get: i
                        } = e, l = i(d);
                        return null !== (n = null == l ? void 0 : l.offers) && void 0 !== n ? n : []
                    }
                }),
                m = (0, l.nZ)({
                    key: "domainCollectionsState",
                    get(e) {
                        var n;
                        let {
                            get: i
                        } = e, l = i(d);
                        return null !== (n = null == l ? void 0 : l.collections) && void 0 !== n ? n : []
                    }
                }),
                x = (0, l.nZ)({
                    key: "domainAvailableState",
                    get(e) {
                        let {
                            get: n
                        } = e, i = n(o);
                        return (0, a.Co)(null == i ? void 0 : i.owner, null == i ? void 0 : i.expiration)
                    }
                })
        }
    }
]);