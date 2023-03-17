(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [383, 389], {
        37372: function(e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/collection/[tld]/[id]", function() {
                return l(86769)
            }])
        },
        86769: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                __N_SSP: function() {
                    return V
                },
                default: function() {
                    return P
                }
            });
            var s = l(85893),
                i = l(34205),
                n = l(90927),
                r = l(11299),
                a = l(18051),
                c = l(42407),
                o = l(94184),
                x = l.n(o),
                d = l(9008),
                m = l.n(d),
                u = l(67294),
                h = l(37887),
                f = l(74764),
                j = l(88329),
                g = l(44949),
                p = l(64173),
                y = l(51859),
                w = l(61455),
                v = l(4042),
                N = l(93478),
                b = l(34811),
                k = l(25675),
                F = l.n(k),
                T = l(41664),
                _ = l.n(T),
                A = l(965);
            l(21082);
            var Z = l(30719),
                B = l(25854);

            function E(e) {
                let t, {
                    title: l,
                    value: i,
                    tokenType: n,
                    bgText: r
                } = e;
                return t = n ? (0, s.jsx)(f.Jc, {
                    className: "relative text-2xl font-semibold text-white",
                    price: i,
                    tokenType: n,
                    size: 14
                }) : (0, s.jsx)("div", {
                    className: "relative text-2xl font-semibold text-white",
                    children: i
                }), (0, s.jsxs)("div", {
                    className: "w-40 h-[60px] flex flex-col justify-center items-start rounded pl-2 relative",
                    style: {
                        background: "linear-gradient(180deg, rgba(21, 43, 50, 0.6) 0%, rgba(27, 38, 41, 0.25) 100%)"
                    },
                    children: [(0, s.jsx)("div", {
                        className: "absolute right-2 text-7xl font-bold collection-detail-card-bg-text select-none",
                        children: r
                    }), t, (0, s.jsx)("div", {
                        className: "relative text-sm font-semibold text-quarternary",
                        children: l
                    })]
                })
            }

            function C(e) {
                let t, {
                    title: l,
                    value: i,
                    tokenType: n
                } = e;
                return t = void 0 != n ? (0, s.jsx)(f.Jc, {
                    className: "relative text-sm lg:text-lg font-semibold text-white",
                    price: i,
                    tokenType: n,
                    size: 16
                }) : (0, s.jsx)("div", {
                    className: "text-sm lg:text-lg font-semibold text-white",
                    children: i
                }), (0, s.jsxs)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [t, (0, s.jsx)("div", {
                        className: "text-xxs lg:text-sm",
                        children: l
                    })]
                })
            }

            function L(e) {
                let {
                    collectionInfo: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: "w-full",
                    children: [(0, s.jsxs)("div", {
                        className: "hidden lg:flex flex-col items-center justify-center gap-6",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-row items-center justify-center gap-6",
                            children: [(0, s.jsx)(E, {
                                title: "Total Volume",
                                value: t.summary.totalVolume,
                                tokenType: t.summary.tokenType,
                                bgText: "Vol"
                            }), (0, s.jsx)(E, {
                                title: "24h Volume",
                                value: t.summary.dayVolume,
                                tokenType: t.summary.tokenType,
                                bgText: "Vol"
                            }), (0, s.jsx)(E, {
                                title: "Floor Price",
                                value: t.summary.floorPrice,
                                tokenType: t.summary.tokenType,
                                bgText: "Flr"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-row items-center justify-center gap-6",
                            children: [(0, s.jsx)(E, {
                                title: "Domains",
                                value: (0, b.KO)(t.summary.totalDomains),
                                bgText: "Dom"
                            }), (0, s.jsx)(E, {
                                title: "Owners",
                                value: (0, b.KO)(t.summary.owners),
                                bgText: "Own"
                            }), (0, s.jsx)(E, {
                                title: "Listed",
                                value: (0, b.KO)(t.summary.listedNum),
                                bgText: "List"
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "w-full lg:hidden",
                        children: [(0, s.jsx)("div", {
                            className: "w-full h-px bg-[#344B57A6] mt-3 mb-2"
                        }), (0, s.jsxs)(Z.tq, {
                            slidesPerView: "auto",
                            spaceBetween: 12,
                            freeMode: !0,
                            pagination: {
                                clickable: !0
                            },
                            modules: [A.Rv],
                            style: {
                                width: "90vw",
                                height: "36px"
                            },
                            children: [(0, s.jsx)(Z.o5, {
                                style: {
                                    width: "auto"
                                },
                                className: "flex items-center justify-center",
                                children: (0, s.jsx)(C, {
                                    title: "Total Volume",
                                    value: t.summary.totalVolume,
                                    tokenType: t.summary.tokenType
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, s.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6]"
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "auto"
                                },
                                children: (0, s.jsx)(C, {
                                    title: "24h Volume",
                                    value: t.summary.dayVolume,
                                    tokenType: t.summary.tokenType
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, s.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6]"
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "auto"
                                },
                                children: (0, s.jsx)(C, {
                                    title: "Floor Price",
                                    value: t.summary.floorPrice,
                                    tokenType: t.summary.tokenType
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, s.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6]"
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "auto"
                                },
                                children: (0, s.jsx)(C, {
                                    title: "Domains",
                                    value: (0, b.KO)(t.summary.totalDomains)
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, s.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6]"
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "auto"
                                },
                                children: (0, s.jsx)(C, {
                                    title: "Owners",
                                    value: (0, b.KO)(t.summary.owners)
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "1px"
                                },
                                className: "flex items-center justify-center",
                                children: (0, s.jsx)("div", {
                                    className: "w-px h-6 bg-[#344B57A6]"
                                })
                            }), (0, s.jsx)(Z.o5, {
                                style: {
                                    width: "auto"
                                },
                                children: (0, s.jsx)(C, {
                                    title: "Listed",
                                    value: (0, b.KO)(t.summary.listedNum)
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "w-full h-px bg-[#344B57A6] mt-2 lg:hidden"
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    collectionInfo: t
                } = e, l = (0, p.Z)("(min-width: 1024px)");
                return (0, s.jsxs)("div", {
                    className: "flex flex-row items-center mt-2 lg:mt-4 gap-[6px] lg:gap-4",
                    children: [t.info.twitterLink.length > 0 && (0, s.jsx)(_(), {
                        href: encodeURI(t.info.twitterLink),
                        target: "_blank",
                        children: l ? (0, s.jsx)(v.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        }) : (0, s.jsx)("div", {
                            className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                            children: (0, s.jsx)(v.Z, {
                                width: 20,
                                height: 20,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    }), t.info.discordLink.length > 0 && (0, s.jsx)(_(), {
                        href: encodeURI(t.info.discordLink),
                        target: "_blank",
                        children: l ? (0, s.jsx)(w.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        }) : (0, s.jsx)("div", {
                            className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                            children: (0, s.jsx)(w.Z, {
                                width: 20,
                                height: 20,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    }), t.info.appLink.length > 0 && (0, s.jsx)(_(), {
                        href: encodeURI(t.info.appLink),
                        target: "_blank",
                        children: l ? (0, s.jsx)(N.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        }) : (0, s.jsx)("div", {
                            className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                            children: (0, s.jsx)(N.Z, {
                                width: 20,
                                height: 20,
                                color: "#BECFCD",
                                className: "cursor-pointer"
                            })
                        })
                    }), l ? (0, s.jsx)(j.Z, {
                        text: document.location.toString(),
                        className: "flex flex-row items-center",
                        children: (0, s.jsx)(y.Z, {
                            width: 20,
                            height: 20,
                            color: "#042d36",
                            className: "cursor-pointer"
                        })
                    }) : (0, s.jsx)("div", {
                        className: "w-8 h-8 flex items-center justify-center rounded bg-[#1F2A2E99]",
                        children: (0, s.jsx)(j.Z, {
                            text: document.location.toString(),
                            className: "flex flex-row items-center",
                            children: (0, s.jsx)(y.Z, {
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
                    collectionId: t
                } = e, {
                    loading: l,
                    error: i,
                    data: n
                } = (0, h.a)(B.ul, {
                    variables: {
                        collectionId: t
                    }
                });
                if (l) return (0, s.jsx)("div", {
                    className: "h-full relative"
                });
                if (i) return null;
                if (void 0 == n) return (0, s.jsx)("div", {
                    className: "h-full relative"
                });
                if (null == n.collectionSummary) return null;
                let r = n.collectionSummary;
                return (0, s.jsxs)("div", {
                    className: "relative w-full flex flex-row justify-between items-start lg:items-center mx-4 lg:mx-16",
                    children: [(0, s.jsxs)("div", {
                        className: "w-full lg:w-auto flex flex-col items-center",
                        children: [(0, s.jsxs)("div", {
                            className: "w-full flex flex-row items-start lg:items-center justify-start lg:justify-center gap-4 lg:gap-6 ",
                            children: [(0, s.jsx)("div", {
                                className: "hidden lg:block min-w-[128px] h-[128px]",
                                children: (0, s.jsx)(F(), {
                                    src: r.info.logoLink,
                                    width: 128,
                                    height: 128,
                                    className: "rounded-xl",
                                    alt: ""
                                })
                            }), (0, s.jsx)("div", {
                                className: "block lg:hidden min-w-[48px] h-[48px]",
                                children: (0, s.jsx)(F(), {
                                    src: r.info.logoLink,
                                    width: 48,
                                    height: 48,
                                    className: "rounded-lg",
                                    alt: ""
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col justify-center items-left",
                                children: [(0, s.jsxs)("div", {
                                    className: "text-base lg:text-5xl font-bold text-white flex gap-2 truncate",
                                    children: [(0, s.jsx)(g.Z, {
                                        domain: "",
                                        network: r.info.network,
                                        className: "text-base lg:text-5xl font-bold"
                                    }), r.info.name]
                                }), (0, s.jsx)("div", {
                                    className: "text-xs lg:text-sm lg:mt-2 text-quarternary",
                                    children: r.info.description
                                }), (0, s.jsx)("div", {
                                    className: "block lg:hidden",
                                    children: (0, s.jsx)(I, {
                                        collectionInfo: r
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "hidden lg:block",
                                    children: (0, s.jsx)(I, {
                                        collectionInfo: r
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "block lg:hidden w-full",
                            children: (0, s.jsx)(L, {
                                collectionInfo: r
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: "hidden lg:block",
                        children: (0, s.jsx)(L, {
                            collectionInfo: r
                        })
                    })]
                })
            }
            let O = [{
                type: "domains",
                text: "Domains"
            }, {
                type: "activity",
                text: "Activity"
            }];
            var V = !0;

            function P(e) {
                let {
                    query: t,
                    collectionId: l
                } = e, {
                    domainList: o,
                    pageInfo: d,
                    loading: h
                } = (0, c.q)({
                    query: t,
                    collectionId: l,
                    orderBy: a.Kp.ListPriceAsc
                }), [f, j] = (0, u.useState)(O[0].type), g = (0, u.useCallback)(() => (0, s.jsx)(i.default, {
                    contentList: o,
                    layout: 1,
                    pageInfo: d,
                    loading: h
                }), [o, h, d]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(m(), {
                        children: (0, s.jsx)("title", {
                            children: "SPACE ID"
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-2 lg:gap-4 items-center w-full",
                        children: [(0, s.jsxs)("div", {
                            className: "h-[187px] lg:h-[218px] relative w-full flex justify-center pt-4 lg:pt-0",
                            children: [(0, s.jsx)("div", {
                                className: "absolute lg:h-auto lg:max-h-full top-0 left-0 right-0 bottom-[-40px] lg:bottom-0 bg-banner bg-cover"
                            }), (0, s.jsx)(D, {
                                collectionId: l
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "w-full lg:flex flex-row items-start px-16 hidden",
                            children: [(0, s.jsx)(n.Z, {}), (0, s.jsx)("div", {
                                className: "w-full",
                                children: (0, s.jsx)(g, {})
                            }), (0, s.jsx)(r.Z, {
                                collectionId: l
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative w-full flex flex-col gap-3 lg:hidden justify-center px-0 lg:px-4",
                            children: [(0, s.jsx)("div", {
                                className: "w-full tabs font-semibold gap-2 flex justify-center items-center",
                                children: O.map(e => (0, s.jsx)("div", {
                                    className: "grow flex justify-center",
                                    onClick() {
                                        j(e.type)
                                    },
                                    children: (0, s.jsx)("div", {
                                        className: x()("tab w-full text-base pb-[6px] h-[31px] border-b-[1px]", e.type === f ? "text-primary" : "border-b-transparent"),
                                        children: e.text
                                    })
                                }, e.type))
                            }), (0, s.jsx)("div", {
                                className: "absolute top-[31px] left-0 right-0 h-px bg-[#344B57A6]"
                            }), f === O[0].type && (0, s.jsx)("div", {
                                children: (0, s.jsx)(g, {})
                            }), f === O[1].type && (0, s.jsx)("div", {
                                children: (0, s.jsx)(r.Z, {
                                    collectionId: l
                                })
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [896, 760, 608, 740, 905, 449, 752, 205, 957, 774, 888, 179], function() {
            return e(e.s = 37372)
        }), _N_E = e.O()
    }
]);