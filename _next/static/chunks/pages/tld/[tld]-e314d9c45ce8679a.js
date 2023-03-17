(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [733, 389], {
        42682: function(e, t, l) {
            "use strict";
            var s, i, n = l(67294);

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return n.createElement("svg", c({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), s || (s = n.createElement("g", {
                    clipPath: "url(#ic-star-home_svg__a)"
                }, n.createElement("path", {
                    d: "m15.18 5.463-4.369-.637L8.858.866c-.35-.706-1.363-.715-1.716 0l-1.953 3.96-4.37.637A.957.957 0 0 0 .29 7.096l3.161 3.08-.747 4.351a.956.956 0 0 0 1.387 1.008L8 13.481l3.909 2.054c.694.365 1.522-.221 1.387-1.008l-.747-4.351 3.16-3.08a.957.957 0 0 0-.528-1.633Z",
                    fill: "#0085FF"
                }), n.createElement("path", {
                    d: "m15.18 5.463-4.369-.637L8.858.866c-.35-.706-1.363-.715-1.716 0l-1.953 3.96-4.37.637A.957.957 0 0 0 .29 7.096l3.161 3.08-.747 4.351a.956.956 0 0 0 1.387 1.008L8 13.481l3.909 2.054c.694.365 1.522-.221 1.387-1.008l-.747-4.351 3.16-3.08a.957.957 0 0 0-.528-1.633Z",
                    fill: "url(#ic-star-home_svg__b)"
                }))), i || (i = n.createElement("defs", null, n.createElement("linearGradient", {
                    id: "ic-star-home_svg__b",
                    x1: 8,
                    y1: .333,
                    x2: 8,
                    y2: 15.647,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "#1EEFA4",
                    stopOpacity: 0
                }), n.createElement("stop", {
                    offset: 1,
                    stopColor: "#1EEFA4"
                })), n.createElement("clipPath", {
                    id: "ic-star-home_svg__a"
                }, n.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z"
                })))))
            }
        },
        68320: function(e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/tld/[tld]", function() {
                return l(93822)
            }])
        },
        93822: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                __N_SSP: function() {
                    return H
                },
                default: function() {
                    return Q
                }
            });
            var s, i, n, c, a, r = l(85893),
                o = l(34205),
                d = l(90927),
                x = l(11299),
                m = l(18051),
                h = l(94184),
                f = l.n(h),
                u = l(42407),
                p = l(67294),
                j = l(73359),
                g = l(74764),
                v = l(88329),
                w = l(64173),
                N = l(51859),
                b = l(61455),
                y = l(4042),
                k = l(93478),
                F = l(34811),
                E = l(25675),
                _ = l.n(E),
                C = l(41664),
                I = l.n(C),
                T = l(965);
            l(21082);
            var A = l(30719),
                L = l(25854);

            function Z(e) {
                let t, {
                    title: l,
                    value: s,
                    tokenType: i
                } = e;
                return t = void 0 != i ? (0, r.jsx)(g.Jc, {
                    className: "relative text-sm lg:text-lg font-semibold text-white",
                    price: s,
                    tokenType: i,
                    size: 16
                }) : (0, r.jsx)("div", {
                    className: "text-sm lg:text-lg font-semibold text-white",
                    children: s
                }), (0, r.jsxs)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [t, (0, r.jsx)("div", {
                        className: "text-xxs lg:text-sm",
                        children: l
                    })]
                })
            }

            function O(e) {
                let {
                    chainInfo: t
                } = e, l = (0, w.Z)("(min-width: 1024px)");
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "w-full h-px bg-[#344B57A6] mt-3 mb-2 lg:hidden"
                    }), (0, r.jsx)("div", {
                        className: "flex flex-row justify-between items-center lg:justify-start lg:mt-4 gap-2 lg:gap-4 text-center xl:gap-6",
                        children: (0, r.jsxs)(A.tq, {
                            slidesPerView: "auto",
                            spaceBetween: 8,
                            freeMode: !0,
                            pagination: {
                                clickable: !0
                            },
                            modules: [T.Rv],
                            style: {
                                width: l ? "100%" : "100vw",
                                marginLeft: l ? "0px" : "-16px",
                                height: "48px"
                            },
                            children: [(0, r.jsx)(A.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(Z, {
                                    title: "Total Volume",
                                    value: t.summary.totalVolume,
                                    tokenType: t.summary.tokenType
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6] lg:hidden"
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(Z, {
                                    title: "24h Volume",
                                    value: t.summary.dayVolume,
                                    tokenType: t.summary.tokenType
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6] lg:hidden"
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(Z, {
                                    title: "Floor Price",
                                    value: t.summary.floorPrice,
                                    tokenType: t.summary.tokenType
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6] lg:hidden"
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(Z, {
                                    title: "Domains",
                                    value: (0, F.KO)(t.summary.totalDomains)
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6] lg:hidden"
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(Z, {
                                    title: "Owners",
                                    value: (0, F.KO)(t.summary.owners)
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6] lg:hidden"
                                })
                            }), (0, r.jsx)(A.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(Z, {
                                    title: "Listed",
                                    value: (0, F.KO)(t.summary.listedNum)
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "w-full h-px bg-[#344B57A6] mt-2 lg:hidden"
                    })]
                })
            }

            function B(e) {
                let {
                    chainInfo: t
                } = e, l = (0, w.Z)("(min-width: 1024px)");
                return (0, r.jsxs)("div", {
                    className: "flex flex-row items-center mt-2 lg:mt-4 gap-[6px] lg:gap-4",
                    children: [(0, r.jsx)(I(), {
                        href: encodeURI(t.info.twitterLink),
                        target: "_blank",
                        children: l ? (0, r.jsx)(y.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        }) : (0, r.jsx)("div", {
                            className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                            children: (0, r.jsx)(y.Z, {
                                width: 16,
                                height: 16,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    }), t.info.discordLink ? (0, r.jsx)(I(), {
                        href: encodeURI(t.info.discordLink),
                        target: "_blank",
                        children: l ? (0, r.jsx)(b.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        }) : (0, r.jsx)("div", {
                            className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                            children: (0, r.jsx)(b.Z, {
                                width: 16,
                                height: 16,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    }) : null, (0, r.jsx)(I(), {
                        href: encodeURI(t.info.appLink),
                        target: "_blank",
                        children: l ? (0, r.jsx)(k.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        }) : (0, r.jsx)("div", {
                            className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                            children: (0, r.jsx)(k.Z, {
                                width: 16,
                                height: 16,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    }), l ? (0, r.jsx)(v.Z, {
                        text: document.location.toString(),
                        className: "flex flex-row items-center",
                        children: (0, r.jsx)(N.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        })
                    }) : (0, r.jsx)("div", {
                        className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                        children: (0, r.jsx)(v.Z, {
                            text: document.location.toString(),
                            className: "flex flex-row items-center",
                            children: (0, r.jsx)(N.Z, {
                                width: 16,
                                height: 16,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    })]
                })
            }

            function D(e) {
                let {
                    tld: t
                } = e, [l, s] = (0, p.useState)(!1), [i, n] = (0, p.useState)(void 0), [c, {
                    loading: a,
                    error: o,
                    data: d
                }] = (0, j.t)(L.IV);
                return ((0, p.useEffect)(() => {
                    c({
                        variables: {
                            network: t
                        }
                    })
                }, [t, c]), (0, p.useEffect)(() => {
                    (null == d ? void 0 : d.tldSummary) && n(d.tldSummary)
                }, [d]), a) ? (0, r.jsx)("div", {
                    className: "flex flex-row items-center justify-center gap-4 2xl:gap-6"
                }) : o || void 0 == i ? null : (0, r.jsxs)("div", {
                    className: "flex flex-col items-start lg:items-center",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-row items-start lg:items-center justify-center gap-6",
                        children: [(0, r.jsx)("div", {
                            className: "hidden lg:block min-w-[128px] h-[128px]",
                            children: (0, r.jsx)(_(), {
                                src: i.info.logoLink,
                                width: 128,
                                height: 128,
                                className: "rounded-[50%]",
                                alt: ""
                            })
                        }), (0, r.jsx)("div", {
                            className: "block lg:hidden min-w-[48px] h-[48px]",
                            children: (0, r.jsx)(_(), {
                                src: i.info.logoLink,
                                width: 48,
                                height: 48,
                                className: "rounded-[50%]",
                                alt: ""
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col justify-center items-left",
                            children: [(0, r.jsx)("div", {
                                className: "text-base lg:text-5xl font-bold text-white",
                                children: i.info.name
                            }), (0, r.jsxs)("div", {
                                className: f()("w-full lg:max-w-[90%] text-sm lg:mt-2", {
                                    flex: !l
                                }),
                                children: [(0, r.jsx)("span", {
                                    className: f()("w-full text-xs lg:text-base text-quarternary", {
                                        "line-clamp-1": !l
                                    }),
                                    children: i.info.description
                                }), !l && (0, r.jsx)("div", {
                                    className: "text-primary cursor-pointer mt-[-1px]",
                                    onClick: () => s(!0),
                                    children: "more"
                                }), l && (0, r.jsx)("span", {
                                    className: "text-primary cursor-pointer",
                                    onClick: () => s(!1),
                                    children: "\xa0 \xa0 less"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "block lg:hidden",
                                children: (0, r.jsx)(B, {
                                    chainInfo: i
                                })
                            }), (0, r.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0, r.jsx)(O, {
                                    chainInfo: i
                                })
                            }), (0, r.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0, r.jsx)(B, {
                                    chainInfo: i
                                })
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "block lg:hidden",
                        children: (0, r.jsx)(O, {
                            chainInfo: i
                        })
                    })]
                })
            }
            var P = l(44949),
                S = l(56148),
                V = l(6850);

            function U() {
                return (U = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var M = function(e) {
                    return p.createElement("svg", U({
                        width: 12,
                        height: 12,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), s || (s = p.createElement("path", {
                        d: "M11.25.75 4.53 7.47",
                        stroke: "#0085FF",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })), i || (i = p.createElement("path", {
                        d: "M11.25.75 4.53 7.47",
                        stroke: "url(#ic-jump-home_svg__a)",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })), n || (n = p.createElement("path", {
                        d: "M5.37.75h5.88v5.88",
                        stroke: "#0085FF",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })), c || (c = p.createElement("path", {
                        d: "M5.37.75h5.88v5.88",
                        stroke: "url(#ic-jump-home_svg__b)",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })), a || (a = p.createElement("defs", null, p.createElement("linearGradient", {
                        id: "ic-jump-home_svg__a",
                        x1: 7.89,
                        y1: .75,
                        x2: 7.89,
                        y2: 7.47,
                        gradientUnits: "userSpaceOnUse"
                    }, p.createElement("stop", {
                        stopColor: "#1EEFA4",
                        stopOpacity: 0
                    }), p.createElement("stop", {
                        offset: 1,
                        stopColor: "#1EEFA4"
                    })), p.createElement("linearGradient", {
                        id: "ic-jump-home_svg__b",
                        x1: 8.31,
                        y1: .75,
                        x2: 8.31,
                        y2: 6.63,
                        gradientUnits: "userSpaceOnUse"
                    }, p.createElement("stop", {
                        stopColor: "#1EEFA4",
                        stopOpacity: 0
                    }), p.createElement("stop", {
                        offset: 1,
                        stopColor: "#1EEFA4"
                    })))))
                },
                z = l(42682),
                J = l(41287),
                R = l(3940);

            function W(e) {
                let {
                    collectionInfo: t,
                    tld: l
                } = e;
                return (0, r.jsx)(I(), {
                    href: "/collection/".concat(l, "/").concat(t.collectionInfo.collectionId),
                    className: "w-[210px] h-[84px]",
                    children: (0, r.jsxs)("div", {
                        className: "w-[210px] h-[84px] flex gap-3 bg-[#1F2A2E99] rounded border-[#042d360D] p-3 backdrop-blur",
                        children: [(0, r.jsx)("div", {
                            className: "w-[60px] h-[60px] shrink-0",
                            children: (0, r.jsx)(_(), {
                                src: t.collectionInfo.logoLink,
                                width: 60,
                                height: 60,
                                className: "rounded-sm",
                                alt: ""
                            })
                        }), (0, r.jsxs)("div", {
                            className: "w-full flex flex-col items-start justify-center",
                            children: [(0, r.jsx)("div", {
                                className: "text-base text-white font-bold line-clamp-1",
                                children: t.collectionInfo.collectionName
                            }), (0, r.jsxs)("div", {
                                className: "w-full flex justify-between text-accent-content",
                                children: [(0, r.jsx)("div", {
                                    className: "text-xs",
                                    children: "24h Vol"
                                }), (0, r.jsx)(g.Jc, {
                                    className: "text-xs font-semibold",
                                    price: t.collectionInfo.totalVolume,
                                    tokenType: t.collectionInfo.tokenType,
                                    fractionDigits: 2,
                                    size: 12
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "w-full flex justify-between text-accent-content",
                                children: [(0, r.jsx)("div", {
                                    className: "text-xs",
                                    children: "Floor"
                                }), (0, r.jsx)(g.Jc, {
                                    className: "text-xs font-semibold",
                                    price: t.collectionInfo.floorPrice,
                                    tokenType: t.collectionInfo.tokenType,
                                    fractionDigits: 2,
                                    size: 12
                                })]
                            })]
                        })]
                    })
                })
            }

            function q(e) {
                let {
                    className: t,
                    collectionInfo: l,
                    tld: s
                } = e;

                function i(e) {
                    let {
                        name: t,
                        price: l,
                        tokenType: i,
                        tokenId: n,
                        className: c
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: f()("flex flex-row text-center justify-between", c),
                        children: [(0, r.jsx)(I(), {
                            href: (0, J.FE)(n, s),
                            children: (0, r.jsx)(P.Z, {
                                domain: t,
                                network: s,
                                maxWidth: 100
                            })
                        }), (0, r.jsx)(g.Jc, {
                            className: "relative text-sm font-semibold text-white",
                            price: l,
                            tokenType: i,
                            size: 12
                        })]
                    })
                }
                if (void 0 == l || void 0 == l.collectionInfo || void 0 == l.domainInfos || null == l.domainInfos) return null;
                let n = l.domainInfos.slice(0, 5),
                    c = l.collectionInfo;
                return (0, r.jsxs)("div", {
                    className: f()("flex flex-col items-center justify-center gap-5", t),
                    children: [(0, r.jsx)("div", {
                        className: "w-[187px] h-[232px] bg-[#1C2D3680] opacity-75 rounded-xl shadow-[0_0_16px_0_rgba(0,0,0,0.45)]"
                    }), (0, r.jsxs)("div", {
                        className: "w-[187px] h-[232px] bg-[#1C2D3680] rounded-xl tld-top-collection-card-bg shadow-[0_4px_16px_4px_rgba(0,0,0,0.36)] backdrop-blur",
                        children: [(0, r.jsx)("div", {
                            className: "absolute bottom-0 right-0 text-[96px] font-bold collection-detail-card-bg-text select-none",
                            children: c.collectionName.substring(0, 3)
                        }), (0, r.jsxs)("div", {
                            className: "relative flex flex-col items-start justify-center p-3",
                            children: [(0, r.jsx)("div", {
                                className: "w-full text-2xl text-white font-bold overflow-hidden whitespace-nowrap text-ellipsis",
                                children: (0, r.jsx)(I(), {
                                    href: "/collection/".concat(s, "/").concat(c.collectionId),
                                    children: c.collectionName
                                })
                            }), (0, r.jsxs)("div", {
                                className: "w-full flex flex-col text-center justify-center",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-row text-center justify-between",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-sm text-accent-content font-semibold",
                                        children: "Volume"
                                    }), (0, r.jsx)(g.Jc, {
                                        className: "relative text-sm font-semibold text-accent-content",
                                        price: c.totalVolume,
                                        tokenType: c.tokenType,
                                        size: 12
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-row text-center justify-between",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-sm text-accent-content font-semibold",
                                        children: "Floor"
                                    }), (0, r.jsx)(g.Jc, {
                                        className: "relative text-sm font-semibold text-accent-content",
                                        price: c.floorPrice,
                                        tokenType: c.tokenType,
                                        size: 12
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "w-full h-px bg-[#BECFCD] my-2 opacity-25"
                                }), n.map((e, t) => {
                                    if (null == e) return null;
                                    let l = "";
                                    switch (t) {
                                        case 2:
                                            l = "opacity-75";
                                            break;
                                        case 3:
                                            l = "opacity-50";
                                            break;
                                        case 4:
                                            l = "opacity-25"
                                    }
                                    return (0, r.jsx)(i, {
                                        name: e.domain,
                                        tokenType: c.tokenType,
                                        tokenId: e.tokenId,
                                        price: e.price,
                                        className: f()(l)
                                    }, t)
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex flex-col text-center justify-center"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "w-[187px] h-[232px] bg-[#1C2D3680] opacity-75 rounded-xl shadow-[0_0_16px_0_rgba(0,0,0,0.45)]"
                    })]
                })
            }

            function K(e) {
                let {
                    tld: t
                } = e, [l, s] = (0, p.useState)(0), [i, n] = (0, p.useState)([]), [c, {
                    loading: a,
                    error: o,
                    data: d
                }] = (0, j.t)(L.E8);
                return ((0, p.useEffect)(() => {
                    c({
                        variables: {
                            network: t,
                            timeDimension: R.ku[l].toBackend
                        }
                    })
                }, [t, l, c]), (0, p.useEffect)(() => {
                    d && null != d.tldTopCollections && d.tldTopCollections.length && n(d.tldTopCollections.slice(0, 4))
                }, [d]), a) ? (0, r.jsx)("div", {
                    className: "h-full relative"
                }) : o || void 0 == d ? null : null == d.tldTopCollections || 0 == d.tldTopCollections.length ? (0, r.jsx)(r.Fragment, {
                    children: "no collections"
                }) : (0, r.jsxs)("div", {
                    className: "h-[130px] w-full lg:w-auto lg:h-full relative",
                    children: [(0, r.jsx)("div", {
                        className: "hidden h-full lg:flex flex-row items-center justify-center gap-6 relative overflow-y-clip",
                        children: i.map((e, l) => {
                            if (null == e) return null;
                            let s = "";
                            switch (l) {
                                case 1:
                                    s = "mt-[-24px]";
                                    break;
                                case 2:
                                    s = "mt-[24px] hidden 3xl:flex";
                                    break;
                                case 3:
                                    s = "hidden 4xl:flex"
                            }
                            return (0, r.jsx)(q, {
                                collectionInfo: e,
                                tld: t,
                                className: f()(s)
                            }, l)
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative lg:hidden mt-[46px]",
                        children: (0, r.jsx)(A.tq, {
                            slidesPerView: "auto",
                            spaceBetween: 12,
                            freeMode: !0,
                            pagination: {
                                clickable: !0
                            },
                            modules: [T.Rv],
                            style: {
                                width: "100vw",
                                marginLeft: "-16px"
                            },
                            children: i.map((e, l) => null == e ? null : (0, r.jsx)(A.o5, {
                                style: {
                                    width: "210px"
                                },
                                children: (0, r.jsx)(W, {
                                    collectionInfo: e,
                                    tld: t
                                }, l)
                            }, l))
                        })
                    }), (0, r.jsxs)("div", {
                        className: "absolute left-0 top-3 flex justify-center items-center",
                        children: [(0, r.jsx)("i", {
                            className: "mr-2 hidden lg:block",
                            children: (0, r.jsx)(z.Z, {})
                        }), (0, r.jsxs)("span", {
                            className: "font-bold text-white lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-b from-gradient-1 to-gradient-2",
                            children: ["Top Collections", (0, r.jsx)("span", {
                                className: "lg:hidden text-[#8A9B9E] text-xs font-normal pl-2",
                                children: "in 24 hours"
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute right-0 top-3 h-6 flex flex-row items-center justify-center gap-6",
                        children: [(0, r.jsxs)("div", {
                            className: "dropdown dropdown-hover hidden lg:block",
                            children: [(0, r.jsxs)("button", {
                                className: "btn btn-accent btn-sm",
                                children: [(0, r.jsx)("span", {
                                    className: "w-8",
                                    children: R.ku[l].text
                                }), (0, r.jsx)("i", {
                                    className: "ml-1",
                                    children: (0, r.jsx)(S.Z, {
                                        width: 12,
                                        height: 12
                                    })
                                })]
                            }), (0, r.jsx)("ul", {
                                tabIndex: 0,
                                className: "dropdown-content menu menu-compact text-accent-content w-[74px] font-semibold",
                                children: R.ku.map(e => (0, r.jsx)("li", {
                                    onClick: () => s(e.value),
                                    children: (0, r.jsxs)("a", {
                                        children: [" ", e.text]
                                    })
                                }, e.value))
                            })]
                        }), (0, r.jsx)(I(), {
                            href: "/collection?tld=".concat(t),
                            className: "hidden lg:block",
                            children: (0, r.jsx)("button", {
                                className: "btn btn-accent btn-sm",
                                children: (0, r.jsxs)("div", {
                                    className: "bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2",
                                    children: ["View more", (0, r.jsx)("i", {
                                        children: (0, r.jsx)(M, {})
                                    })]
                                })
                            })
                        }), (0, r.jsx)(I(), {
                            href: "/collection?tld=".concat(t),
                            className: "lg:hidden",
                            children: (0, r.jsxs)("button", {
                                className: "flex items-center justify-center gap-1",
                                children: [(0, r.jsx)("div", {
                                    className: "text-accent-content text-xs font-semibold",
                                    children: "More"
                                }), (0, r.jsx)(V.Z, {
                                    width: 12,
                                    height: 12
                                })]
                            })
                        })]
                    })]
                })
            }
            let G = [{
                    type: "domains",
                    text: "Domains"
                }, {
                    type: "activity",
                    text: "Activity"
                }],
                X = e => {
                    let {
                        query: t,
                        tld: l
                    } = e, {
                        exactMatchList: s,
                        domainList: i,
                        pageInfo: n,
                        loading: c
                    } = (0, u.q)({
                        query: t,
                        tld: l,
                        orderBy: m.Kp.ListPriceAsc
                    }), [a, h] = (0, p.useState)(G[0].type), j = (0, p.useCallback)(() => (0, r.jsx)(o.default, {
                        contentList: [...s, ...i],
                        layout: 1,
                        loading: c,
                        pageInfo: n
                    }), [i, s, c, n]);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col gap-2 lg:gap-4 items-center w-full",
                            children: [l ? (0, r.jsxs)("div", {
                                className: "relative h-auto lg:h-[336px] w-full ",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute lg:h-auto lg:max-h-full top-0 left-0 right-0 bottom-[51px] lg:bottom-0 tld-header-bg"
                                }), (0, r.jsxs)("div", {
                                    className: "relative lg:h-full flex flex-col lg:flex-row gap-3 lg:gap-4 justify-between items-start lg:items-center mx-4 lg:mx-16 pt-4 lg:pt-0",
                                    children: [(0, r.jsx)(D, {
                                        tld: l
                                    }), (0, r.jsx)(K, {
                                        tld: l
                                    })]
                                })]
                            }) : null, (0, r.jsxs)("div", {
                                className: "w-full lg:flex flex-row items-start justify-center px-16 hidden",
                                children: [(0, r.jsx)(d.Z, {}), (0, r.jsx)("div", {
                                    className: "grow",
                                    children: (0, r.jsx)(j, {})
                                }), l ? (0, r.jsx)(x.Z, {
                                    tld: l
                                }) : null]
                            }), (0, r.jsxs)("div", {
                                className: "relative w-full flex flex-col gap-3 lg:hidden justify-center",
                                children: [(0, r.jsx)("div", {
                                    className: "w-full tabs font-semibold gap-2 flex justify-center items-center",
                                    children: G.map(e => (0, r.jsx)("div", {
                                        className: "grow flex justify-center",
                                        onClick() {
                                            h(e.type)
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: f()("tab w-full text-base pb-[6px] h-[31px] border-b-[1px]", e.type === a ? "text-primary" : "border-b-transparent"),
                                            children: e.text
                                        })
                                    }, e.type))
                                }), (0, r.jsx)("div", {
                                    className: "absolute top-[31px] left-0 right-0 h-px bg-[#344B57A6]"
                                }), a === G[0].type && (0, r.jsx)("div", {
                                    children: (0, r.jsx)(j, {})
                                }), a === G[1].type && (0, r.jsx)("div", {
                                    children: l ? (0, r.jsx)(x.Z, {
                                        tld: l
                                    }) : null
                                })]
                            })]
                        })
                    })
                };
            var H = !0,
                Q = X
        }
    },
    function(e) {
        e.O(0, [896, 760, 608, 740, 905, 449, 752, 205, 957, 774, 888, 179], function() {
            return e(e.s = 68320)
        }), _N_E = e.O()
    }
]);