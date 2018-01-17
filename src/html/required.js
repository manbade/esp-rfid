/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
;
! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (!l.ownFirst) {
                for (b in a) {
                    return k.call(a, b)
                }
            }
            for (b in a) {}
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            } else {
                for (d in a) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) {
                    return h.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a)) {
                for (d = a.length; d > g; g++) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            } else {
                for (g in a) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            }
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) {
                return d
            }
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) {
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) {
                                return d
                            }
                            if (j.id === f) {
                                return d.push(j), d
                            }
                        } else {
                            if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
                                return d.push(j), d
                            }
                        }
                    } else {
                        if (o[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    }
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) {
                        w = b, s = a
                    } else {
                        if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + qa(r[h])
                            }
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                    }
                    if (s) {
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return ka(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                while (g[d] === h[d]) {
                    d++
                }
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                                }
                            } else {
                                if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) {
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            d.pseudos[b] = la(b)
        }
        for (b in {
                submit: !0,
                reset: !0
            }) {
            d.pseudos[b] = ma(b)
        }

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return k[2] = h[2]
                            }
                            if (i[d] = k, k[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fa(a, b[d], c)
            }
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)))
            }
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ra(sa(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || 0.1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++]) {
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) {
                            q(t, u, g, h)
                        }
                        if (f) {
                            if (r > 0) {
                                while (s--) {
                                    t[s] || u[s] || (u[s] = F.call(i))
                                }
                            }
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = wa(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) {
                        break
                    }
                    d.push(a)
                }
            }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (y.test(b)) {
                return n.filter(b, a, c)
            }
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++) {
                        if (n.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                n.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) {
                return this
            }
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) {
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
                        }
                    }
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) {
                        return A.find(a)
                    }
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) {
                    if (n.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) {
                        f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) {
                            f.splice(c, 1), h >= c && h--
                        }
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1) {
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I) {
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) {
                a.setTimeout(n.ready)
            } else {
                if (d.addEventListener) {
                    d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K)
                } else {
                    d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                    var c = !1;
                    try {
                        c = null == a.frameElement && d.documentElement
                    } catch (e) {}
                    c && c.doScroll && ! function f() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (b) {
                                return a.setTimeout(f, 50)
                            }
                            J(), n.ready()
                        }
                    }()
                }
            }
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) {
        break
    }
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a) {
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c ? !Q(d) : !n.isEmptyObject(d)) {
                        return
                    }
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) {
                            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])))
                        }
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) {
                    c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
                }
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) {
                    return a
                }
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) {
                    Y(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b))
            }
        }
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
            if (g = a[r], g || 0 === g) {
                if ("object" === n.type(g)) {
                    n.merge(q, g.nodeType ? [g] : g)
                } else {
                    if (ga.test(g)) {
                        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                        while (f--) {
                            i = i.lastChild
                        }
                        if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                            g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                            while (f--) {
                                n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                            }
                        }
                        n.merge(q, i.childNodes), i.textContent = "";
                        while (i.firstChild) {
                            i.removeChild(i.firstChild)
                        }
                        i = p.lastChild
                    } else {
                        q.push(b.createTextNode(g))
                    }
                }
            }
        }
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++]) {
            if (d && n.inArray(g, d) > -1) {
                e && e.push(g)
            } else {
                if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                    f = 0;
                    while (g = i[f++]) {
                        _.test(g.type || "") && c.push(g)
                    }
                }
            }
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1)
        }
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) {
                sa(a, h, c, d, b[h], f)
            }
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) {
            e = qa
        } else {
            if (!e) {
                return a
            }
        }
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) {
                    f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--) {
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) {
                            g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            n.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
                        p.push(i), m = i
                    }
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) {
                    b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault())
                }
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) {
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f)
                        }
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a
            }
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) {
                c = e[b], a[c] = g[c]
            }
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        n.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) {
                    n.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) {
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            })
        }
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
                g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m)
            }
            if (h) {
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
                    g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")))
                }
            }
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d))
        }
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
                    d[g] && Ga(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
                        Fa(e, d[g])
                    }
                } else {
                    Fa(a, f)
                }
            }
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
            }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0
                }
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) {
                g[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.apply(a, d || []);
            for (f in b) {
                a.style[f] = g[f]
            }
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) {
            return a
        }
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--) {
            if (a = _a[c] + b, a in ab) {
                return a
            }
        }
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)))
        }
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) {
                return e
            }
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                    try {
                        i[b] = c
                    } catch (j) {}
                }
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = V[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) {
                        continue
                    }
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else {
                j = void 0
            }
        }
        if (n.isEmptyObject(o)) {
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j)
        } else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) {
                    n.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++) {
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) {
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d
            }
        }
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
                }
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && kb.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }!b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) {
                a = b[c], a() || b[c] !== a || b.splice(c--, 1)
            }
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) {
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) {
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected = !1
                        }
                    }
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
                }
            }
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                })
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ")
                        }
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ")
                            }
                        }
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) {
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) {
                                    k[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > u) {
                                for (b in a) {
                                    r[b] = [r[b], a[b]]
                                }
                            } else {
                                w.always(a[w.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) {
                return w
            }
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) {
                w.setRequestHeader(e, l.headers[e])
            }
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) {
                return w.abort()
            }
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                w[e](l[e])
            }
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) {
                    return w
                }
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) {
                        throw x
                    }
                    y(-1, x)
                }
            } else {
                y(-1, "No Transport")
            }

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) {
            return !0
        }
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) {
                return !0
            }
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== n.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    dc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                dc(c, a[c], b, e)
            }
        }
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) {
            fc[a](void 0, !0)
        }
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) {
                        for (f in b.xhrFields) {
                            g[f] = b.xhrFields[f]
                        }
                    }
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) {
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "")
                    }
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState)) {
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) {
                                4 !== g.readyState && g.abort()
                            } else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) {
            return lc.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
} + function(d) {
    var c = d.fn.jquery.split(" ")[0].split(".");
    if (c[0] < 2 && c[1] < 9 || 1 == c[0] && 9 == c[1] && c[2] < 1 || c[0] > 3) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }
}(jQuery), + function(d) {
    function c() {
        var f = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var g in e) {
            if (void 0 !== f.style[g]) {
                return {
                    end: e[g]
                }
            }
        }
        return !1
    }
    d.fn.emulateTransitionEnd = function(a) {
        var h = !1,
            g = this;
        d(this).one("bsTransitionEnd", function() {
            h = !0
        });
        var f = function() {
            h || d(g).trigger(d.support.transition.end)
        };
        return setTimeout(f, a), this
    }, d(function() {
        d.support.transition = c(), d.support.transition && (d.event.special.bsTransitionEnd = {
            bindType: d.support.transition.end,
            delegateType: d.support.transition.end,
            handle: function(a) {
                if (d(a.target).is(this)) {
                    return a.handleObj.handler.apply(this, arguments)
                }
            }
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var d = g(this),
                b = d.data("bs.alert");
            b || d.data("bs.alert", b = new i(this)), "string" == typeof a && b[a].call(d)
        })
    }
    var j = '[data-dismiss="alert"]',
        i = function(a) {
            g(a).on("click", j, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(a) {
        function m() {
            d.detach().trigger("closed.bs.alert").remove()
        }
        var l = g(this),
            k = l.attr("data-target");
        k || (k = l.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
        var d = g("#" === k ? [] : k);
        a && a.preventDefault(), d.length || (d = l.closest(".alert")), d.trigger(a = g.Event("close.bs.alert")), a.isDefaultPrevented() || (d.removeClass("in"), g.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m())
    };
    var h = g.fn.alert;
    g.fn.alert = f, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function() {
        return g.fn.alert = h, this
    }, g(document).on("click.bs.alert.data-api", j, i.prototype.close)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.button"),
                b = "object" == typeof a && a;
            c || i.data("bs.button", c = new h(this, b)), "toggle" == a ? c.toggle() : a && c.setState(a)
        })
    }
    var h = function(a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.isLoading = !1
    };
    h.VERSION = "3.3.7", h.DEFAULTS = {
        loadingText: "loading..."
    }, h.prototype.setState = function(a) {
        var l = "disabled",
            k = this.$element,
            j = k.is("input") ? "val" : "html",
            i = k.data();
        a += "Text", null == i.resetText && k.data("resetText", k[j]()), setTimeout(f.proxy(function() {
            k[j](null == i[a] ? this.options[a] : i[a]), "loadingText" == a ? (this.isLoading = !0, k.addClass(l).attr(l, l).prop(l, !0)) : this.isLoading && (this.isLoading = !1, k.removeClass(l).removeAttr(l).prop(l, !1))
        }, this), 0)
    }, h.prototype.toggle = function() {
        var i = !0,
            d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var j = this.$element.find("input");
            "radio" == j.prop("type") ? (j.prop("checked") && (i = !1), d.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == j.prop("type") && (j.prop("checked") !== this.$element.hasClass("active") && (i = !1), this.$element.toggleClass("active")), j.prop("checked", this.$element.hasClass("active")), i && j.trigger("change")
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        }
    };
    var g = f.fn.button;
    f.fn.button = e, f.fn.button.Constructor = h, f.fn.button.noConflict = function() {
        return f.fn.button = g, this
    }, f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        var a = f(b.target).closest(".btn");
        e.call(a, "toggle"), f(b.target).is('input[type="radio"], input[type="checkbox"]') || (b.preventDefault(), a.is("input,button") ? a.trigger("focus") : a.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(a) {
        f(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var l = g(this),
                k = l.data("bs.carousel"),
                c = g.extend({}, j.DEFAULTS, l.data(), "object" == typeof a && a),
                b = "string" == typeof a ? a : c.slide;
            k || l.data("bs.carousel", k = new j(this, c)), "number" == typeof a ? k.to(a) : b ? k[b]() : c.interval && k.pause().cycle()
        })
    }
    var j = function(a, d) {
        this.$element = g(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", g.proxy(this.pause, this)).on("mouseleave.bs.carousel", g.proxy(this.cycle, this))
    };
    j.VERSION = "3.3.7", j.TRANSITION_DURATION = 600, j.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, j.prototype.keydown = function(b) {
        if (!/input|textarea/i.test(b.target.tagName)) {
            switch (b.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            b.preventDefault()
        }
    }, j.prototype.cycle = function(a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(g.proxy(this.next, this), this.options.interval)), this
    }, j.prototype.getItemIndex = function(b) {
        return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
    }, j.prototype.getItemForDirection = function(l, k) {
        var p = this.getItemIndex(k),
            o = "prev" == l && 0 === p || "next" == l && p == this.$items.length - 1;
        if (o && !this.options.wrap) {
            return k
        }
        var n = "prev" == l ? -1 : 1,
            m = (p + n) % this.$items.length;
        return this.$items.eq(m)
    }, j.prototype.to = function(e) {
        var d = this,
            k = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) {
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                d.to(e)
            }) : k == e ? this.pause().cycle() : this.slide(e > k ? "next" : "prev", this.$items.eq(e))
        }
    }, j.prototype.pause = function(a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && g.support.transition && (this.$element.trigger(g.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, j.prototype.next = function() {
        if (!this.sliding) {
            return this.slide("next")
        }
    }, j.prototype.prev = function() {
        if (!this.sliding) {
            return this.slide("prev")
        }
    }, j.prototype.slide = function(v, u) {
        var t = this.$element.find(".item.active"),
            s = u || this.getItemForDirection(v, t),
            r = this.interval,
            q = "next" == v ? "left" : "right",
            p = this;
        if (s.hasClass("active")) {
            return this.sliding = !1
        }
        var o = s[0],
            n = g.Event("slide.bs.carousel", {
                relatedTarget: o,
                direction: q
            });
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = g(this.$indicators.children()[this.getItemIndex(s)]);
                c && c.addClass("active")
            }
            var a = g.Event("slid.bs.carousel", {
                relatedTarget: o,
                direction: q
            });
            return g.support.transition && this.$element.hasClass("slide") ? (s.addClass(v), s[0].offsetWidth, t.addClass(q), s.addClass(q), t.one("bsTransitionEnd", function() {
                s.removeClass([v, q].join(" ")).addClass("active"), t.removeClass(["active", q].join(" ")), p.sliding = !1, setTimeout(function() {
                    p.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(j.TRANSITION_DURATION)) : (t.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(a)), r && this.cycle(), this
        }
    };
    var i = g.fn.carousel;
    g.fn.carousel = f, g.fn.carousel.Constructor = j, g.fn.carousel.noConflict = function() {
        return g.fn.carousel = i, this
    };
    var h = function(n) {
        var m, l = g(this),
            k = g(l.attr("data-target") || (m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, ""));
        if (k.hasClass("carousel")) {
            var b = g.extend({}, k.data(), l.data()),
                a = l.attr("data-slide-to");
            a && (b.interval = !1), f.call(k, b), a && k.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    g(document).on("click.bs.carousel.data-api", "[data-slide]", h).on("click.bs.carousel.data-api", "[data-slide-to]", h), g(window).on("load", function() {
        g('[data-ride="carousel"]').each(function() {
            var a = g(this);
            f.call(a, a.data())
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        var k, e = a.attr("data-target") || (k = a.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "");
        return g(e)
    }

    function j(a) {
        return this.each(function() {
            var k = g(this),
                d = k.data("bs.collapse"),
                b = g.extend({}, i.DEFAULTS, k.data(), "object" == typeof a && a);
            !d && b.toggle && /show|hide/.test(a) && (b.toggle = !1), d || k.data("bs.collapse", d = new i(this, b)), "string" == typeof a && d[a]()
        })
    }
    var i = function(a, d) {
        this.$element = g(a), this.options = g.extend({}, i.DEFAULTS, d), this.$trigger = g('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var b = this.$element.hasClass("width");
        return b ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, m = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(m && m.length && (a = m.data("bs.collapse"), a && a.transitioning))) {
                var l = g.Event("show.bs.collapse");
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    m && m.length && (j.call(m, "hide"), a || m.data("bs.collapse", null));
                    var k = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var d = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[k](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!g.support.transition) {
                        return d.call(this)
                    }
                    var c = g.camelCase(["scroll", k].join("-"));
                    this.$element.one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = g.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                var k = this.dimension();
                this.$element[k](this.$element[k]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return g.support.transition ? void this.$element[k](0).one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : d.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return g(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(g.proxy(function(k, b) {
            var a = g(b);
            this.addAriaAndCollapsedClass(f(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, d) {
        var k = e.hasClass("in");
        e.attr("aria-expanded", k), d.toggleClass("collapsed", !k).attr("aria-expanded", k)
    };
    var h = g.fn.collapse;
    g.fn.collapse = j, g.fn.collapse.Constructor = i, g.fn.collapse.noConflict = function() {
        return g.fn.collapse = h, this
    }, g(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(l) {
        var k = g(this);
        k.attr("data-target") || l.preventDefault();
        var c = f(k),
            b = c.data("bs.collapse"),
            a = b ? "toggle" : k.data();
        j.call(c, a)
    })
}(jQuery), + function(j) {
    function i(a) {
        var f = a.attr("data-target");
        f || (f = a.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var e = f && j(f);
        return e && e.length ? e : a.parent()
    }

    function p(a) {
        a && 3 === a.which || (j(n).remove(), j(m).each(function() {
            var g = j(this),
                c = i(g),
                b = {
                    relatedTarget: this
                };
            c.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && j.contains(c[0], a.target) || (c.trigger(a = j.Event("hide.bs.dropdown", b)), a.isDefaultPrevented() || (g.attr("aria-expanded", "false"), c.removeClass("open").trigger(j.Event("hidden.bs.dropdown", b)))))
        }))
    }

    function o(a) {
        return this.each(function() {
            var e = j(this),
                b = e.data("bs.dropdown");
            b || e.data("bs.dropdown", b = new l(this)), "string" == typeof a && b[a].call(e)
        })
    }
    var n = ".dropdown-backdrop",
        m = '[data-toggle="dropdown"]',
        l = function(a) {
            j(a).on("click.bs.dropdown", this.toggle)
        };
    l.VERSION = "3.3.7", l.prototype.toggle = function(r) {
        var q = j(this);
        if (!q.is(".disabled, :disabled")) {
            var c = i(q),
                b = c.hasClass("open");
            if (p(), !b) {
                "ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click", p);
                var a = {
                    relatedTarget: this
                };
                if (c.trigger(r = j.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) {
                    return
                }
                q.trigger("focus").attr("aria-expanded", "true"), c.toggleClass("open").trigger(j.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, l.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var s = j(this);
            if (t.preventDefault(), t.stopPropagation(), !s.is(".disabled, :disabled")) {
                var r = i(s),
                    q = r.hasClass("open");
                if (!q && 27 != t.which || q && 27 == t.which) {
                    return 27 == t.which && r.find(m).trigger("focus"), s.trigger("click")
                }
                var f = " li:not(.disabled):visible a",
                    b = r.find(".dropdown-menu" + f);
                if (b.length) {
                    var a = b.index(t.target);
                    38 == t.which && a > 0 && a--, 40 == t.which && a < b.length - 1 && a++, ~a || (a = 0), b.eq(a).trigger("focus")
                }
            }
        }
    };
    var k = j.fn.dropdown;
    j.fn.dropdown = o, j.fn.dropdown.Constructor = l, j.fn.dropdown.noConflict = function() {
        return j.fn.dropdown = k, this
    }, j(document).on("click.bs.dropdown.data-api", p).on("click.bs.dropdown.data-api", ".dropdown form", function(b) {
        b.stopPropagation()
    }).on("click.bs.dropdown.data-api", m, l.prototype.toggle).on("keydown.bs.dropdown.data-api", m, l.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", l.prototype.keydown)
}(jQuery), + function(f) {
    function e(a, c) {
        return this.each(function() {
            var i = f(this),
                d = i.data("bs.modal"),
                b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            d || i.data("bs.modal", d = new h(this, b)), "string" == typeof a ? d[a](c) : b.show && d.show(c)
        })
    }
    var h = function(a, d) {
        this.options = d, this.$body = f(document.body), this.$element = f(a), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, f.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    h.VERSION = "3.3.7", h.TRANSITION_DURATION = 300, h.BACKDROP_TRANSITION_DURATION = 150, h.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, h.prototype.toggle = function(b) {
        return this.isShown ? this.hide() : this.show(b)
    }, h.prototype.show = function(a) {
        var i = this,
            c = f.Event("show.bs.modal", {
                relatedTarget: a
            });
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', f.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(d) {
                f(d.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var d = f.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), d && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var b = f.Event("shown.bs.modal", {
                relatedTarget: a
            });
            d ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(b)
            }).emulateTransitionEnd(h.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(b)
        }))
    }, h.prototype.hide = function(a) {
        a && a.preventDefault(), a = f.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), f(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), f.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", f.proxy(this.hideModal, this)).emulateTransitionEnd(h.TRANSITION_DURATION) : this.hideModal())
    }, h.prototype.enforceFocus = function() {
        f(document).off("focusin.bs.modal").on("focusin.bs.modal", f.proxy(function(b) {
            document === b.target || this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
        }, this))
    }, h.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", f.proxy(function(b) {
            27 == b.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, h.prototype.resize = function() {
        this.isShown ? f(window).on("resize.bs.modal", f.proxy(this.handleUpdate, this)) : f(window).off("resize.bs.modal")
    }, h.prototype.hideModal = function() {
        var b = this;
        this.$element.hide(), this.backdrop(function() {
            b.$body.removeClass("modal-open"), b.resetAdjustments(), b.resetScrollbar(), b.$element.trigger("hidden.bs.modal")
        })
    }, h.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, h.prototype.backdrop = function(a) {
        var k = this,
            j = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = f.support.transition && j;
            if (this.$backdrop = f(document.createElement("div")).addClass("modal-backdrop " + j).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", f.proxy(function(b) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
                return
            }
            i ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : a()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var c = function() {
                    k.removeBackdrop(), a && a()
                };
                f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : c()
            } else {
                a && a()
            }
        }
    }, h.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, h.prototype.adjustDialog = function() {
        var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
        })
    }, h.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, h.prototype.checkScrollbar = function() {
        var d = window.innerWidth;
        if (!d) {
            var c = document.documentElement.getBoundingClientRect();
            d = c.right - Math.abs(c.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < d, this.scrollbarWidth = this.measureScrollbar()
    }, h.prototype.setScrollbar = function() {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", b + this.scrollbarWidth)
    }, h.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, h.prototype.measureScrollbar = function() {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure", this.$body.append(d);
        var c = d.offsetWidth - d.clientWidth;
        return this.$body[0].removeChild(d), c
    };
    var g = f.fn.modal;
    f.fn.modal = e, f.fn.modal.Constructor = h, f.fn.modal.noConflict = function() {
        return f.fn.modal = g, this
    }, f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(k) {
        var j = f(this),
            i = j.attr("href"),
            b = f(j.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = b.data("bs.modal") ? "toggle" : f.extend({
                remote: !/#/.test(i) && i
            }, b.data(), j.data());
        j.is("a") && k.preventDefault(), b.one("show.bs.modal", function(c) {
            c.isDefaultPrevented() || b.one("hidden.bs.modal", function() {
                j.is(":visible") && j.trigger("focus")
            })
        }), e.call(b, a, this)
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.tooltip"),
                b = "object" == typeof a && a;
            !c && /destroy|hide/.test(a) || (c || i.data("bs.tooltip", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function(d, c) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", d, c)
    };
    h.VERSION = "3.3.7", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, h.prototype.init = function(a, p, o) {
        if (this.enabled = !0, this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.$viewport = this.options.viewport && f(f.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
        }
        for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
            var l = n[m];
            if ("click" == l) {
                this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this))
            } else {
                if ("manual" != l) {
                    var k = "hover" == l ? "mouseenter" : "focusin",
                        j = "hover" == l ? "mouseleave" : "focusout";
                    this.$element.on(k + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, f.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = f.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.getOptions = function(a) {
        return a = f.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, h.prototype.getDelegateOptions = function() {
        var a = {},
            d = this.getDefaults();
        return this._options && f.each(this._options, function(b, c) {
            d[b] != c && (a[b] = c)
        }), a
    }, h.prototype.enter = function(a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusin" == a.type ? "focus" : "hover"] = !0), d.tip().hasClass("in") || "in" == d.hoverState ? void(d.hoverState = "in") : (clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void(d.timeout = setTimeout(function() {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show())
    }, h.prototype.isInStateTrue = function() {
        for (var b in this.inState) {
            if (this.inState[b]) {
                return !0
            }
        }
        return !1
    }, h.prototype.leave = function(a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        if (d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusout" == a.type ? "focus" : "hover"] = !1), !d.isInStateTrue()) {
            return clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void(d.timeout = setTimeout(function() {
                "out" == d.hoverState && d.hide()
            }, d.options.delay.hide)) : d.hide()
        }
    }, h.prototype.show = function() {
        var D = f.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(D);
            var C = f.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (D.isDefaultPrevented() || !C) {
                return
            }
            var B = this,
                A = this.tip(),
                z = this.getUID(this.type);
            this.setContent(), A.attr("id", z), this.$element.attr("aria-describedby", z), this.options.animation && A.addClass("fade");
            var y = "function" == typeof this.options.placement ? this.options.placement.call(this, A[0], this.$element[0]) : this.options.placement,
                x = /\s?auto?\s?/i,
                w = x.test(y);
            w && (y = y.replace(x, "") || "top"), A.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(y).data("bs." + this.type, this), this.options.container ? A.appendTo(this.options.container) : A.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var v = this.getPosition(),
                u = A[0].offsetWidth,
                t = A[0].offsetHeight;
            if (w) {
                var s = y,
                    r = this.getPosition(this.$viewport);
                y = "bottom" == y && v.bottom + t > r.bottom ? "top" : "top" == y && v.top - t < r.top ? "bottom" : "right" == y && v.right + u > r.width ? "left" : "left" == y && v.left - u < r.left ? "right" : y, A.removeClass(s).addClass(y)
            }
            var c = this.getCalculatedOffset(y, v, u, t);
            this.applyPlacement(c, y);
            var a = function() {
                var b = B.hoverState;
                B.$element.trigger("shown.bs." + B.type), B.hoverState = null, "out" == b && B.leave(B)
            };
            f.support.transition && this.$tip.hasClass("fade") ? A.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()
        }
    }, h.prototype.applyPlacement = function(z, y) {
        var x = this.tip(),
            w = x[0].offsetWidth,
            v = x[0].offsetHeight,
            u = parseInt(x.css("margin-top"), 10),
            t = parseInt(x.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(t) && (t = 0), z.top += u, z.left += t, f.offset.setOffset(x[0], f.extend({
            using: function(b) {
                x.css({
                    top: Math.round(b.top),
                    left: Math.round(b.left)
                })
            }
        }, z), 0), x.addClass("in");
        var s = x[0].offsetWidth,
            r = x[0].offsetHeight;
        "top" == y && r != v && (z.top = z.top + v - r);
        var q = this.getViewportAdjustedDelta(y, z, s, r);
        q.left ? z.left += q.left : z.top += q.top;
        var p = /top|bottom/.test(y),
            o = p ? 2 * q.left - w + s : 2 * q.top - v + r,
            a = p ? "offsetWidth" : "offsetHeight";
        x.offset(z), this.replaceArrow(o, x[0][a], p)
    }, h.prototype.replaceArrow = function(i, d, j) {
        this.arrow().css(j ? "left" : "top", 50 * (1 - i / d) + "%").css(j ? "top" : "left", "")
    }, h.prototype.setContent = function() {
        var d = this.tip(),
            c = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](c), d.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function(a) {
        function k() {
            "in" != j.hoverState && i.detach(), j.$element && j.$element.removeAttr("aria-describedby").trigger("hidden.bs." + j.type), a && a()
        }
        var j = this,
            i = f(this.$tip),
            c = f.Event("hide.bs." + this.type);
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            return i.removeClass("in"), f.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", k).emulateTransitionEnd(h.TRANSITION_DURATION) : k(), this.hoverState = null, this
        }
    }, h.prototype.fixTitle = function() {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function() {
        return this.getTitle()
    }, h.prototype.getPosition = function(a) {
        a = a || this.$element;
        var p = a[0],
            o = "BODY" == p.tagName,
            n = p.getBoundingClientRect();
        null == n.width && (n = f.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var m = window.SVGElement && p instanceof window.SVGElement,
            l = o ? {
                top: 0,
                left: 0
            } : m ? null : a.offset(),
            k = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()
            },
            j = o ? {
                width: f(window).width(),
                height: f(window).height()
            } : null;
        return f.extend({}, n, k, j, l)
    }, h.prototype.getCalculatedOffset = function(j, i, l, k) {
        return "bottom" == j ? {
            top: i.top + i.height,
            left: i.left + i.width / 2 - l / 2
        } : "top" == j ? {
            top: i.top - k,
            left: i.left + i.width / 2 - l / 2
        } : "left" == j ? {
            top: i.top + i.height / 2 - k / 2,
            left: i.left - l
        } : {
            top: i.top + i.height / 2 - k / 2,
            left: i.left + i.width
        }
    }, h.prototype.getViewportAdjustedDelta = function(v, u, t, s) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return r
        }
        var q = this.options.viewport && this.options.viewport.padding || 0,
            p = this.getPosition(this.$viewport);
        if (/right|left/.test(v)) {
            var o = u.top - q - p.scroll,
                n = u.top + q - p.scroll + s;
            o < p.top ? r.top = p.top - o : n > p.top + p.height && (r.top = p.top + p.height - n)
        } else {
            var m = u.left - q,
                l = u.left + q + t;
            m < p.left ? r.left = p.left - m : l > p.right && (r.left = p.left + p.width - l)
        }
        return r
    }, h.prototype.getTitle = function() {
        var i, d = this.$element,
            j = this.options;
        return i = d.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(d[0]) : j.title)
    }, h.prototype.getUID = function(b) {
        do {
            b += ~~(1000000 * Math.random())
        } while (document.getElementById(b));
        return b
    }, h.prototype.tip = function() {
        if (!this.$tip && (this.$tip = f(this.options.template), 1 != this.$tip.length)) {
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
        }
        return this.$tip
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function() {
        this.enabled = !0
    }, h.prototype.disable = function() {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function(a) {
        var d = this;
        a && (d = f(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d))), a ? (d.inState.click = !d.inState.click, d.isInStateTrue() ? d.enter(d) : d.leave(d)) : d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, h.prototype.destroy = function() {
        var b = this;
        clearTimeout(this.timeout), this.hide(function() {
            b.$element.off("." + b.type).removeData("bs." + b.type), b.$tip && b.$tip.detach(), b.$tip = null, b.$arrow = null, b.$viewport = null, b.$element = null
        })
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = e, f.fn.tooltip.Constructor = h, f.fn.tooltip.noConflict = function() {
        return f.fn.tooltip = g, this
    }
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.popover"),
                b = "object" == typeof a && a;
            !c && /destroy|hide/.test(a) || (c || i.data("bs.popover", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function(d, c) {
        this.init("popover", d, c)
    };
    if (!f.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    h.VERSION = "3.3.7", h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype), h.prototype.constructor = h, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.setContent = function() {
        var i = this.tip(),
            d = this.getTitle(),
            j = this.getContent();
        i.find(".popover-title")[this.options.html ? "html" : "text"](d), i.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof j ? "html" : "append" : "text"](j), i.removeClass("fade top bottom left right in"), i.find(".popover-title").html() || i.find(".popover-title").hide()
    }, h.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, h.prototype.getContent = function() {
        var d = this.$element,
            c = this.options;
        return d.attr("data-content") || ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var g = f.fn.popover;
    f.fn.popover = e, f.fn.popover.Constructor = h, f.fn.popover.noConflict = function() {
        return f.fn.popover = g, this
    }
}(jQuery), + function(f) {
    function e(b, a) {
        this.$body = f(document.body), this.$scrollElement = f(f(b).is(document.body) ? window : b), this.options = f.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", f.proxy(this.process, this)), this.refresh(), this.process()
    }

    function h(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.scrollspy"),
                b = "object" == typeof a && a;
            c || i.data("bs.scrollspy", c = new e(this, b)), "string" == typeof a && c[a]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var a = this,
            j = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), f.isWindow(this.$scrollElement[0]) || (j = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var c = f(this),
                k = c.data("target") || c.attr("href"),
                d = /^#./.test(k) && f(k);
            return d && d.length && d.is(":visible") && [
                [d[j]().top + i, k]
            ] || null
        }).sort(function(d, c) {
            return d[0] - c[0]
        }).each(function() {
            a.offsets.push(this[0]), a.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var j, i = this.$scrollElement.scrollTop() + this.options.offset,
            o = this.getScrollHeight(),
            n = this.options.offset + o - this.$scrollElement.height(),
            m = this.offsets,
            l = this.targets,
            k = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), i >= n) {
            return k != (j = l[l.length - 1]) && this.activate(j)
        }
        if (k && i < m[0]) {
            return this.activeTarget = null, this.clear()
        }
        for (j = m.length; j--;) {
            k != l[j] && i >= m[j] && (void 0 === m[j + 1] || i < m[j + 1]) && this.activate(l[j])
        }
    }, e.prototype.activate = function(a) {
        this.activeTarget = a, this.clear();
        var j = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]',
            i = f(j).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        f(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = h, f.fn.scrollspy.Constructor = e, f.fn.scrollspy.noConflict = function() {
        return f.fn.scrollspy = g, this
    }, f(window).on("load.bs.scrollspy.data-api", function() {
        f('[data-spy="scroll"]').each(function() {
            var a = f(this);
            h.call(a, a.data())
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var c = g(this),
                b = c.data("bs.tab");
            b || c.data("bs.tab", b = new j(this)), "string" == typeof a && b[a]()
        })
    }
    var j = function(a) {
        this.element = g(a)
    };
    j.VERSION = "3.3.7", j.TRANSITION_DURATION = 150, j.prototype.show = function() {
        var a = this.element,
            p = a.closest("ul:not(.dropdown-menu)"),
            o = a.data("target");
        if (o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var n = p.find(".active:last a"),
                m = g.Event("hide.bs.tab", {
                    relatedTarget: a[0]
                }),
                l = g.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(m), a.trigger(l), !l.isDefaultPrevented() && !m.isDefaultPrevented()) {
                var k = g(o);
                this.activate(a.closest("li"), p), this.activate(k, k.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: a[0]
                    }), a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, j.prototype.activate = function(a, n, m) {
        function l() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), c ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), m && m()
        }
        var k = n.find("> .active"),
            c = m && g.support.transition && (k.length && k.hasClass("fade") || !!n.find("> .fade").length);
        k.length && c ? k.one("bsTransitionEnd", l).emulateTransitionEnd(j.TRANSITION_DURATION) : l(), k.removeClass("in")
    };
    var i = g.fn.tab;
    g.fn.tab = f, g.fn.tab.Constructor = j, g.fn.tab.noConflict = function() {
        return g.fn.tab = i, this
    };
    var h = function(a) {
        a.preventDefault(), f.call(g(this), "show")
    };
    g(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', h).on("click.bs.tab.data-api", '[data-toggle="pill"]', h)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.affix"),
                b = "object" == typeof a && a;
            c || i.data("bs.affix", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }
    var h = function(a, c) {
        this.options = f.extend({}, h.DEFAULTS, c), this.$target = f(this.options.target).on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", f.proxy(this.checkPositionWithEventLoop, this)), this.$element = f(a), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.3.7", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function(t, s, r, q) {
        var p = this.$target.scrollTop(),
            o = this.$element.offset(),
            n = this.$target.height();
        if (null != r && "top" == this.affixed) {
            return p < r && "top"
        }
        if ("bottom" == this.affixed) {
            return null != r ? !(p + this.unpin <= o.top) && "bottom" : !(p + n <= t - q) && "bottom"
        }
        var m = null == this.affixed,
            l = m ? p : o.top,
            k = m ? n : s;
        return null != r && p <= r ? "top" : null != q && l + k >= t - q && "bottom"
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(h.RESET).addClass("affix");
        var d = this.$target.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - d
    }, h.prototype.checkPositionWithEventLoop = function() {
        setTimeout(f.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(),
                p = this.options.offset,
                o = p.top,
                n = p.bottom,
                m = Math.max(f(document).height(), f(document.body).height());
            "object" != typeof p && (n = o = p), "function" == typeof o && (o = p.top(this.$element)), "function" == typeof n && (n = p.bottom(this.$element));
            var l = this.getState(m, a, o, n);
            if (this.affixed != l) {
                null != this.unpin && this.$element.css("top", "");
                var k = "affix" + (l ? "-" + l : ""),
                    c = f.Event(k + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) {
                    return
                }
                this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == l && this.$element.offset({
                top: m - a - n
            })
        }
    };
    var g = f.fn.affix;
    f.fn.affix = e, f.fn.affix.Constructor = h, f.fn.affix.noConflict = function() {
        return f.fn.affix = g, this
    }, f(window).on("load", function() {
        f('[data-spy="affix"]').each(function() {
            var b = f(this),
                a = b.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(b, a)
        })
    })
}(jQuery);
! function(e, d) {
    window.console = window.console || {
        log: function() {},
        error: function() {}
    }, e.fn.footable = function(b, g) {
        return b = b || {}, this.filter("table").each(function(c, a) {
            d.init(a, b, g)
        })
    };
    var f = {
        events: []
    };
    d.__debug__ = JSON.parse(localStorage.getItem("footable_debug")) || !1, d.__debug_options__ = JSON.parse(localStorage.getItem("footable_debug_options")) || f, d.debug = function(b, a) {
        return d.is["boolean"](b) ? (d.__debug__ = b, void(d.__debug__ ? (localStorage.setItem("footable_debug", JSON.stringify(d.__debug__)), d.__debug_options__ = e.extend(!0, {}, f, a || {}), d.is.hash(a) && localStorage.setItem("footable_debug_options", JSON.stringify(d.__debug_options__))) : (localStorage.removeItem("footable_debug"), localStorage.removeItem("footable_debug_options")))) : d.__debug__
    }, d.get = function(a) {
        return e(a).first().data("__FooTable__")
    }, d.init = function(b, i, h) {
        var g = d.get(b);
        return g instanceof d.Table && g.destroy(), new d.Table(b, i, h)
    }, d.getRow = function(a) {
        var g = e(a).closest("tr");
        return g.hasClass("footable-detail-row") && (g = g.prev()), g.data("__FooTableRow__")
    }
}(jQuery, FooTable = window.FooTable || {}),
function(d) {
    var c = function() {
        return !0
    };
    d.arr = {}, d.arr.each = function(a, h) {
        if (d.is.array(a) && d.is.fn(h)) {
            for (var g = 0, f = a.length; f > g && h(a[g], g) !== !1; g++) {}
        }
    }, d.arr.get = function(a, j) {
        var i = [];
        if (!d.is.array(a)) {
            return i
        }
        if (!d.is.fn(j)) {
            return a
        }
        for (var h = 0, g = a.length; g > h; h++) {
            j(a[h], h) && i.push(a[h])
        }
        return i
    }, d.arr.any = function(h, g) {
        if (!d.is.array(h)) {
            return !1
        }
        g = d.is.fn(g) ? g : c;
        for (var b = 0, a = h.length; a > b; b++) {
            if (g(h[b], b)) {
                return !0
            }
        }
        return !1
    }, d.arr.contains = function(a, h) {
        if (!d.is.array(a) || d.is.undef(h)) {
            return !1
        }
        for (var g = 0, f = a.length; f > g; g++) {
            if (a[g] == h) {
                return !0
            }
        }
        return !1
    }, d.arr.first = function(h, g) {
        if (!d.is.array(h)) {
            return null
        }
        g = d.is.fn(g) ? g : c;
        for (var b = 0, a = h.length; a > b; b++) {
            if (g(h[b], b)) {
                return h[b]
            }
        }
        return null
    }, d.arr.map = function(a, l) {
        var k = [],
            j = null;
        if (!d.is.array(a) || !d.is.fn(l)) {
            return k
        }
        for (var i = 0, h = a.length; h > i; i++) {
            null != (j = l(a[i], i)) && k.push(j)
        }
        return k
    }, d.arr.remove = function(a, n) {
        var m = [],
            l = [];
        if (!d.is.array(a) || !d.is.fn(n)) {
            return l
        }
        for (var k = 0, j = a.length; j > k; k++) {
            n(a[k], k, l) && (m.push(k), l.push(a[k]))
        }
        for (m.sort(function(f, e) {
                return e - f
            }), k = 0, j = m.length; j > k; k++) {
            var i = m[k] - k;
            a.splice(i, 1)
        }
        return l
    }, d.arr["delete"] = function(a, l) {
        var k = -1,
            j = null;
        if (!d.is.array(a) || d.is.undef(l)) {
            return j
        }
        for (var i = 0, h = a.length; h > i; i++) {
            if (a[i] == l) {
                k = i, j = a[i];
                break
            }
        }
        return -1 != k && a.splice(k, 1), j
    }, d.arr.replace = function(f, e, h) {
        var g = f.indexOf(e); - 1 !== g && (f[g] = h)
    }
}(FooTable),
function(b) {
    b.is = {}, b.is.type = function(d, c) {
        return typeof d === c
    }, b.is.defined = function(c) {
        return "undefined" != typeof c
    }, b.is.undef = function(c) {
        return "undefined" == typeof c
    }, b.is.array = function(c) {
        return "[object Array]" === Object.prototype.toString.call(c)
    }, b.is.date = function(c) {
        return "[object Date]" === Object.prototype.toString.call(c) && !isNaN(c.getTime())
    }, b.is["boolean"] = function(c) {
        return "[object Boolean]" === Object.prototype.toString.call(c)
    }, b.is.string = function(c) {
        return "[object String]" === Object.prototype.toString.call(c)
    }, b.is.number = function(c) {
        return "[object Number]" === Object.prototype.toString.call(c) && !isNaN(c)
    }, b.is.fn = function(a) {
        return b.is.defined(window) && a === window.alert || "[object Function]" === Object.prototype.toString.call(a)
    }, b.is.error = function(c) {
        return "[object Error]" === Object.prototype.toString.call(c)
    }, b.is.object = function(c) {
        return "[object Object]" === Object.prototype.toString.call(c)
    }, b.is.hash = function(a) {
        return b.is.object(a) && a.constructor === Object && !a.nodeType && !a.setInterval
    }, b.is.element = function(c) {
        return "object" == typeof HTMLElement ? c instanceof HTMLElement : c && "object" == typeof c && null !== c && 1 === c.nodeType && "string" == typeof c.nodeName
    }, b.is.promise = function(a) {
        return b.is.object(a) && b.is.fn(a.then) && b.is.fn(a.promise)
    }, b.is.jq = function(a) {
        return b.is.defined(window.jQuery) && a instanceof jQuery && a.length > 0
    }, b.is.moment = function(a) {
        return b.is.defined(window.moment) && b.is.object(a) && b.is["boolean"](a._isAMomentObject)
    }, b.is.emptyObject = function(a) {
        if (!b.is.hash(a)) {
            return !1
        }
        for (var d in a) {
            if (a.hasOwnProperty(d)) {
                return !1
            }
        }
        return !0
    }, b.is.emptyArray = function(a) {
        return b.is.array(a) ? 0 === a.length : !0
    }, b.is.emptyString = function(a) {
        return b.is.string(a) ? 0 === a.length : !0
    }
}(FooTable),
function(b) {
    b.str = {}, b.str.contains = function(a, f, e) {
        return b.is.emptyString(a) || b.is.emptyString(f) ? !1 : f.length <= a.length && -1 !== (e ? a.toUpperCase().indexOf(f.toUpperCase()) : a.indexOf(f))
    }, b.str.containsExact = function(a, f, e) {
        return b.is.emptyString(a) || b.is.emptyString(f) || f.length > a.length ? !1 : new RegExp("\\b" + b.str.escapeRegExp(f) + "\\b", e ? "i" : "").test(a)
    }, b.str.containsWord = function(a, l, k) {
        if (b.is.emptyString(a) || b.is.emptyString(l) || a.length < l.length) {
            return !1
        }
        for (var j = a.split(/\W/), i = 0, h = j.length; h > i; i++) {
            if (k ? j[i].toUpperCase() == l.toUpperCase() : j[i] == l) {
                return !0
            }
        }
        return !1
    }, b.str.from = function(a, d) {
        return b.is.emptyString(a) ? a : b.str.contains(a, d) ? a.substring(a.indexOf(d) + 1) : a
    }, b.str.startsWith = function(a, d) {
        return b.is.emptyString(a) ? a == d : a.slice(0, d.length) == d
    }, b.str.toCamelCase = function(a) {
        return b.is.emptyString(a) ? a : a.toUpperCase() === a ? a.toLowerCase() : a.replace(/^([A-Z])|[-\s_](\w)/g, function(e, g, f) {
            return b.is.string(f) ? f.toUpperCase() : g.toLowerCase()
        })
    }, b.str.random = function(a) {
        return a = b.is.emptyString(a) ? "" : a, a + Math.random().toString(36).substr(2, 9)
    }, b.str.escapeRegExp = function(a) {
        return b.is.emptyString(a) ? a : a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
}(FooTable),
function(e) {
    function d() {}
    Object.create || (Object.create = function() {
        var a = function() {};
        return function(g) {
            if (arguments.length > 1) {
                throw Error("Second argument not supported")
            }
            if (!e.is.object(g)) {
                throw TypeError("Argument must be an object")
            }
            a.prototype = g;
            var b = new a;
            return a.prototype = null, b
        }
    }());
    var f = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/ : /.*/;
    d.__extend__ = function(a, h, g, c) {
        a[h] = e.is.fn(c) && f.test(g) ? function(j, i) {
            return function() {
                var b, k;
                return b = this._super, this._super = c, k = i.apply(this, arguments), this._super = b, k
            }
        }(h, g) : g
    }, d.extend = function(p, o) {
        function n(g, j, i, h) {
            g[j] = e.is.fn(h) && f.test(i) ? function(q, k, r) {
                return function() {
                    var s, t;
                    return s = this._super, this._super = r, t = k.apply(this, arguments), this._super = s, t
                }
            }(j, i, h) : i
        }
        var m = Array.prototype.slice.call(arguments);
        if (p = m.shift(), o = m.shift(), e.is.hash(p)) {
            var l = Object.create(this.prototype),
                c = this.prototype;
            for (var b in p) {
                "__ctor__" !== b && n(l, b, p[b], c[b])
            }
            var a = e.is.fn(l.__ctor__) ? l.__ctor__ : function() {
                if (!e.is.fn(this.construct)) {
                    throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.')
                }
                this.construct.apply(this, arguments)
            };
            return l.construct = e.is.fn(l.construct) ? l.construct : function() {}, a.prototype = l, l.constructor = a, a.extend = d.extend, a
        }
        e.is.string(p) && e.is.fn(o) && n(this.prototype, p, o, this.prototype[p])
    }, e.Class = d, e.ClassFactory = e.Class.extend({
        construct: function() {
            this.registered = {}
        },
        contains: function(a) {
            return e.is.defined(this.registered[a])
        },
        names: function() {
            var g, c = [];
            for (g in this.registered) {
                this.registered.hasOwnProperty(g) && c.push(g)
            }
            return c
        },
        register: function(a, i, h) {
            if (e.is.string(a) && e.is.fn(i)) {
                var g = this.registered[a];
                this.registered[a] = {
                    name: a,
                    klass: i,
                    priority: e.is.number(h) ? h : e.is.defined(g) ? g.priority : 0
                }
            }
        },
        load: function(t, s, r) {
            var q, p, o = this,
                n = Array.prototype.slice.call(arguments),
                m = [],
                l = [];
            t = n.shift() || {};
            for (q in o.registered) {
                if (o.registered.hasOwnProperty(q)) {
                    var a = o.registered[q];
                    t.hasOwnProperty(q) && (p = t[q], e.is.string(p) && (p = e.getFnPointer(t[q])), e.is.fn(p) && (a = {
                        name: q,
                        klass: p,
                        priority: o.registered[q].priority
                    })), m.push(a)
                }
            }
            for (q in t) {
                t.hasOwnProperty(q) && !o.registered.hasOwnProperty(q) && (p = t[q], e.is.string(p) && (p = e.getFnPointer(t[q])), e.is.fn(p) && m.push({
                    name: q,
                    klass: p,
                    priority: 0
                }))
            }
            return m.sort(function(g, c) {
                return c.priority - g.priority
            }), e.arr.each(m, function(c) {
                e.is.fn(c.klass) && l.push(o._make(c.klass, n))
            }), l
        },
        make: function(a, l, k) {
            var j, i = this,
                h = Array.prototype.slice.call(arguments);
            return a = h.shift(), j = i.registered[a], e.is.fn(j.klass) ? i._make(j.klass, h) : null
        },
        _make: function(h, g) {
            function i() {
                return h.apply(this, g)
            }
            return i.prototype = h.prototype, new i
        }
    })
}(FooTable),
function(d, c) {
    c.css2json = function(p) {
        if (c.is.emptyString(p)) {
            return {}
        }
        for (var o, n, m, l = {}, k = p.split(";"), b = 0, a = k.length; a > b; b++) {
            c.is.emptyString(k[b]) || (o = k[b].split(":"), c.is.emptyString(o[0]) || c.is.emptyString(o[1]) || (n = c.str.toCamelCase(d.trim(o[0])), m = d.trim(o[1]), l[n] = m))
        }
        return l
    }, c.getFnPointer = function(b) {
        if (c.is.emptyString(b)) {
            return null
        }
        var f = window,
            e = b.split(".");
        return c.arr.each(e, function(g) {
            f[g] && (f = f[g])
        }), c.is.fn(f) ? f : null
    }, c.checkFnValue = function(b, h, g) {
        function f(e, j, i) {
            return c.is.fn(j) ? function() {
                return j.apply(e, arguments)
            } : i
        }
        return g = c.is.fn(g) ? g : null, c.is.fn(h) ? f(b, h, g) : c.is.type(h, "string") ? f(b, c.getFnPointer(h), g) : g
    }
}(jQuery, FooTable),
function(d, c) {
    c.Cell = c.Class.extend({
        construct: function(f, e, h, g) {
            this.ft = f, this.row = e, this.column = h, this.created = !1, this.define(g)
        },
        define: function(b) {
            this.$el = c.is.element(b) || c.is.jq(b) ? d(b) : null, this.$detail = null;
            var a = c.is.hash(b) && c.is.hash(b.options) && c.is.defined(b.value);
            this.value = this.column.parser.call(this.column, c.is.jq(this.$el) ? this.$el : a ? b.value : b, this.ft.o), this.o = d.extend(!0, {
                classes: null,
                style: null
            }, a ? b.options : {}), this.classes = c.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : c.is.array(this.o.classes) ? this.o.classes : c.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = c.is.jq(this.$el) && this.$el.attr("style") ? c.css2json(this.$el.attr("style")) : c.is.hash(this.o.style) ? this.o.style : c.is.string(this.o.style) ? c.css2json(this.o.style) : {}
        },
        $create: function() {
            this.created || ((this.$el = c.is.jq(this.$el) ? this.$el : d("<td/>")).data("value", this.value).contents().detach().end().append(this.format(this.value)), this._setClasses(this.$el), this._setStyle(this.$el), this.$detail = d("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__", this).append(d("<th/>")).append(d("<td/>")), this.created = !0)
        },
        collapse: function() {
            this.created && (this.$detail.children("th").html(this.column.title), this.$el.clone().attr("id", this.$el.attr("id") ? this.$el.attr("id") + "-detail" : void 0).css("display", "table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()), c.is.jq(this.$detail.parent()) || this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))
        },
        restore: function() {
            if (this.created) {
                if (c.is.jq(this.$detail.parent())) {
                    var b = this.$detail.children("td").first();
                    this.$el.attr("class", b.attr("class")).attr("style", b.attr("style")).css("display", this.column.hidden || !this.column.visible ? "none" : "table-cell").append(b.contents().detach())
                }
                this.$detail.detach()
            }
        },
        parse: function() {
            return this.column.parser.call(this.column, this.$el, this.ft.o)
        },
        format: function(b) {
            return this.column.formatter.call(this.column, b, this.ft.o, this.row.value)
        },
        val: function(n, m, l) {
            if (c.is.undef(n)) {
                return this.value
            }
            var k = this,
                j = c.is.hash(n) && c.is.hash(n.options) && c.is.defined(n.value);
            if (this.o = d.extend(!0, {
                    classes: k.classes,
                    style: k.style
                }, j ? n.options : {}), this.value = j ? n.value : n, this.classes = c.is.array(this.o.classes) ? this.o.classes : c.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = c.is.hash(this.o.style) ? this.o.style : c.is.string(this.o.style) ? c.css2json(this.o.style) : {}, l = c.is["boolean"](l) ? l : !0, this.created && l) {
                this.$el.data("value", this.value).empty();
                var b = this.$detail.children("td").first().empty(),
                    a = c.is.jq(this.$detail.parent()) ? b : this.$el;
                a.append(this.format(this.value)), this._setClasses(a), this._setStyle(a), (c.is["boolean"](m) ? m : !0) && this.row.draw()
            }
        },
        _setClasses: function(b) {
            var h = !c.is.emptyArray(this.column.classes),
                g = !c.is.emptyArray(this.classes),
                f = null;
            b.removeAttr("class"), (h || g) && (h && g ? f = this.classes.concat(this.column.classes).join(" ") : h ? f = this.column.classes.join(" ") : g && (f = this.classes.join(" ")), c.is.emptyString(f) || b.addClass(f))
        },
        _setStyle: function(h) {
            var g = !c.is.emptyObject(this.column.style),
                b = !c.is.emptyObject(this.style),
                a = null;
            h.removeAttr("style"), (g || b) && (g && b ? a = d.extend({}, this.column.style, this.style) : g ? a = this.column.style : b && (a = this.style), c.is.hash(a) && h.css(a))
        }
    })
}(jQuery, FooTable),
function(d, c) {
    c.Column = c.Class.extend({
        construct: function(b, f, e) {
            this.ft = b, this.type = c.is.emptyString(e) ? "text" : e, this.virtual = c.is["boolean"](f.virtual) ? f.virtual : !1, this.$el = c.is.jq(f.$el) ? f.$el : null, this.index = c.is.number(f.index) ? f.index : -1, this.internal = !1, this.define(f), this.$create()
        },
        define: function(b) {
            this.hidden = c.is["boolean"](b.hidden) ? b.hidden : !1, this.visible = c.is["boolean"](b.visible) ? b.visible : !0, this.name = c.is.string(b.name) ? b.name : null, null == this.name && (this.name = "col" + (b.index + 1)), this.title = c.is.string(b.title) ? b.title : null, !this.virtual && null == this.title && c.is.jq(this.$el) && (this.title = this.$el.html()), null == this.title && (this.title = "Column " + (b.index + 1)), this.style = c.is.hash(b.style) ? b.style : c.is.string(b.style) ? c.css2json(b.style) : {}, this.classes = c.is.array(b.classes) ? b.classes : c.is.string(b.classes) ? b.classes.match(/\S+/g) : [], this.parser = c.checkFnValue(this, b.parser, this.parser), this.formatter = c.checkFnValue(this, b.formatter, this.formatter)
        },
        $create: function() {
            (this.$el = !this.virtual && c.is.jq(this.$el) ? this.$el : d("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style)
        },
        parser: function(b) {
            if (c.is.element(b) || c.is.jq(b)) {
                var a = d(b).data("value");
                return c.is.defined(a) ? a : d(b).html()
            }
            return c.is.defined(b) && null != b ? b + "" : null
        },
        formatter: function(f, e, g) {
            return null == f ? "" : f
        },
        createCell: function(b) {
            var f = c.is.jq(b.$el) ? b.$el.children("td,th").get(this.index) : null,
                e = c.is.hash(b.value) ? b.value[this.name] : null;
            return new c.Cell(this.ft, b, this, f || e)
        }
    }), c.columns = new c.ClassFactory, c.columns.register("text", c.Column)
}(jQuery, FooTable),
function(d, c) {
    c.Component = c.Class.extend({
        construct: function(b, e) {
            if (!(b instanceof c.Table)) {
                throw new TypeError("The instance parameter must be an instance of FooTable.Table.")
            }
            this.ft = b, this.enabled = c.is["boolean"](e) ? e : !1
        },
        preinit: function(b) {},
        init: function() {},
        destroy: function() {},
        predraw: function() {},
        draw: function() {},
        postdraw: function() {}
    }), c.components = new c.ClassFactory
}(jQuery, FooTable),
function(d, c) {
    c.Defaults = function() {
        this.stopPropagation = !1, this.on = null
    }, c.defaults = new c.Defaults
}(jQuery, FooTable),
function(d, c) {
    c.Row = c.Class.extend({
        construct: function(f, e, g) {
            this.ft = f, this.columns = e, this.created = !1, this.define(g)
        },
        define: function(h) {
            this.$el = c.is.element(h) || c.is.jq(h) ? d(h) : null, this.$toggle = d("<span/>", {
                "class": "footable-toggle fooicon fooicon-plus"
            });
            var g = c.is.hash(h),
                b = g && c.is.hash(h.options) && c.is.hash(h.value);
            this.value = g ? b ? h.value : h : null, this.o = d.extend(!0, {
                expanded: !1,
                classes: null,
                style: null
            }, b ? h.options : {}), this.expanded = c.is.jq(this.$el) ? this.$el.data("expanded") || this.o.expanded : this.o.expanded, this.classes = c.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : c.is.array(this.o.classes) ? this.o.classes : c.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = c.is.jq(this.$el) && this.$el.attr("style") ? c.css2json(this.$el.attr("style")) : c.is.hash(this.o.style) ? this.o.style : c.is.string(this.o.style) ? c.css2json(this.o.style) : {}, this.cells = this.createCells();
            var a = this;
            a.value = {}, c.arr.each(a.cells, function(e) {
                a.value[e.column.name] = e.val()
            })
        },
        $create: function() {
            if (!this.created) {
                (this.$el = c.is.jq(this.$el) ? this.$el : d("<tr/>")).data("__FooTableRow__", this), this._setClasses(this.$el), this._setStyle(this.$el), "last" == this.ft.rows.toggleColumn && this.$toggle.addClass("last-column"), this.$details = d("<tr/>", {
                    "class": "footable-detail-row"
                }).append(d("<td/>", {
                    colspan: this.ft.columns.visibleColspan
                }).append(d("<table/>", {
                    "class": "footable-details " + this.ft.classes.join(" ")
                }).append("<tbody/>")));
                var a = this;
                c.arr.each(a.cells, function(b) {
                    b.created || b.$create(), a.$el.append(b.$el)
                }), a.$el.off("click.ft.row").on("click.ft.row", {
                    self: a
                }, a._onToggle), this.created = !0
            }
        },
        createCells: function() {
            var b = this;
            return c.arr.map(b.columns, function(a) {
                return a.createCell(b)
            })
        },
        val: function(n, m, l) {
            var k = this;
            if (!c.is.hash(n)) {
                return c.is.hash(this.value) && !c.is.emptyObject(this.value) || (this.value = {}, c.arr.each(this.cells, function(e) {
                    e.column.internal || (k.value[e.column.name] = e.val())
                })), this.value
            }
            this.collapse(!1);
            var j = c.is.hash(n),
                b = j && c.is.hash(n.options) && c.is.hash(n.value);
            if (this.o = d.extend(!0, {
                    expanded: k.expanded,
                    classes: k.classes,
                    style: k.style
                }, b ? n.options : {}), this.expanded = this.o.expanded, this.classes = c.is.array(this.o.classes) ? this.o.classes : c.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = c.is.hash(this.o.style) ? this.o.style : c.is.string(this.o.style) ? c.css2json(this.o.style) : {}, j) {
                if (b && (n = n.value), c.is.hash(this.value)) {
                    for (var a in n) {
                        n.hasOwnProperty(a) && (this.value[a] = n[a])
                    }
                } else {
                    this.value = n
                }
            } else {
                this.value = null
            }
            l = c.is["boolean"](l) ? l : !0, c.arr.each(this.cells, function(e) {
                !e.column.internal && c.is.defined(k.value[e.column.name]) && e.val(k.value[e.column.name], !1, l)
            }), this.created && l && (this._setClasses(this.$el), this._setStyle(this.$el), (c.is["boolean"](m) ? m : !0) && this.draw())
        },
        _setClasses: function(b) {
            var f = !c.is.emptyArray(this.classes),
                e = null;
            b.removeAttr("class"), f && (e = this.classes.join(" "), c.is.emptyString(e) || b.addClass(e))
        },
        _setStyle: function(b) {
            var f = !c.is.emptyObject(this.style),
                e = null;
            b.removeAttr("style"), f && (e = this.style, c.is.hash(e) && b.css(e))
        },
        expand: function() {
            if (this.created) {
                var b = this;
                b.ft.raise("expand.ft.row", [b]).then(function() {
                    b.__hidden__ = c.arr.map(b.cells, function(e) {
                        return e.column.hidden && e.column.visible ? e : null
                    }), b.__hidden__.length > 0 && (b.$details.insertAfter(b.$el).children("td").first().attr("colspan", b.ft.columns.visibleColspan), c.arr.each(b.__hidden__, function(e) {
                        e.collapse()
                    })), b.$el.attr("data-expanded", !0), b.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"), b.expanded = !0, b.ft.raise("expanded.ft.row", [b])
                })
            }
        },
        collapse: function(b) {
            if (this.created) {
                var e = this;
                e.ft.raise("collapse.ft.row", [e]).then(function() {
                    c.arr.each(e.__hidden__, function(f) {
                        f.restore()
                    }), e.$details.detach(), e.$el.removeAttr("data-expanded"), e.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"), (c.is["boolean"](b) ? b : !0) && (e.expanded = !1), e.ft.raise("collapsed.ft.row", [e])
                })
            }
        },
        predraw: function(b) {
            this.created && (this.expanded && this.collapse(!1), this.$toggle.detach(), b = c.is["boolean"](b) ? b : !0, b && this.$el.detach())
        },
        draw: function(b) {
            this.created || this.$create(), c.is.jq(b) && b.append(this.$el);
            var e = this;
            c.arr.each(e.cells, function(f) {
                f.$el.css("display", f.column.hidden || !f.column.visible ? "none" : "table-cell"), e.ft.rows.showToggle && e.ft.columns.hasHidden && ("first" == e.ft.rows.toggleColumn && f.column.index == e.ft.columns.firstVisibleIndex || "last" == e.ft.rows.toggleColumn && f.column.index == e.ft.columns.lastVisibleIndex) && f.$el.prepend(e.$toggle), f.$el.add(f.column.$el).removeClass("footable-first-visible footable-last-visible"), f.column.index == e.ft.columns.firstVisibleIndex && f.$el.add(f.column.$el).addClass("footable-first-visible"), f.column.index == e.ft.columns.lastVisibleIndex && f.$el.add(f.column.$el).addClass("footable-last-visible")
            }), this.expanded && this.expand()
        },
        toggle: function() {
            this.created && this.ft.columns.hasHidden && (this.expanded ? this.collapse() : this.expand())
        },
        _onToggle: function(a) {
            var e = a.data.self;
            d(a.target).is(e.ft.rows.toggleSelector) && e.toggle()
        }
    })
}(jQuery, FooTable),
function(d, c) {
    c.instances = [], c.Table = c.Class.extend({
        construct: function(f, b, a) {
            this._resizeTimeout = null, this.id = c.instances.push(this), this.initialized = !1, this.$el = (c.is.jq(f) ? f : d(f)).first(), this.$loader = d("<div/>", {
                "class": "footable-loader"
            }).append(d("<span/>", {
                "class": "fooicon fooicon-loader"
            })), this.o = d.extend(!0, {}, c.defaults, b), this.data = this.$el.data() || {}, this.classes = [], this.components = c.components.load(c.is.hash(this.data.components) ? this.data.components : this.o.components, this), this.breakpoints = this.use(FooTable.Breakpoints), this.columns = this.use(FooTable.Columns), this.rows = this.use(FooTable.Rows), this._construct(a)
        },
        _construct: function(b) {
            var e = this;
            return this._preinit().then(function() {
                return e._init().then(function() {
                    return e.raise("ready.ft.table").then(function() {
                        c.is.fn(b) && b.call(e, e)
                    })
                })
            }).always(function(f) {
                e.$el.show(), c.is.error(f) && console.error("FooTable: unhandled error thrown during initialization.", f)
            })
        },
        _preinit: function() {
            var b = this;
            return this.raise("preinit.ft.table", [b.data]).then(function() {
                var g = (b.$el.attr("class") || "").match(/\S+/g) || [];
                b.o.ajax = c.checkFnValue(b, b.data.ajax, b.o.ajax), b.o.stopPropagation = c.is["boolean"](b.data.stopPropagation) ? b.data.stopPropagation : b.o.stopPropagation;
                for (var f = 0, a = g.length; a > f; f++) {
                    c.str.startsWith(g[f], "footable") || b.classes.push(g[f])
                }
                return b.$el.hide().after(b.$loader), b.execute(!1, !1, "preinit", b.data)
            })
        },
        _init: function() {
            var a = this;
            return a.raise("init.ft.table").then(function() {
                var h = a.$el.children("thead"),
                    g = a.$el.children("tbody"),
                    b = a.$el.children("tfoot");
                return a.$el.addClass("footable footable-" + a.id), c.is.hash(a.o.on) && a.$el.on(a.o.on), 0 == b.length && a.$el.append(b = d("<tfoot/>")), 0 == g.length && a.$el.append("<tbody/>"), 0 == h.length && a.$el.prepend(h = d("<thead/>")), a.execute(!1, !0, "init").then(function() {
                    return a.$el.data("__FooTable__", a), 0 == b.children("tr").length && b.remove(), 0 == h.children("tr").length && h.remove(), a.raise("postinit.ft.table").then(function() {
                        return a.draw()
                    }).always(function() {
                        d(window).off("resize.ft" + a.id, a._onWindowResize).on("resize.ft" + a.id, {
                            self: a
                        }, a._onWindowResize), a.initialized = !0
                    })
                })
            })
        },
        destroy: function() {
            var a = this;
            return a.raise("destroy.ft.table").then(function() {
                return a.execute(!0, !0, "destroy").then(function() {
                    a.$el.removeData("__FooTable__").removeClass("footable-" + a.id), c.is.hash(a.o.on) && a.$el.off(a.o.on), d(window).off("resize.ft" + a.id, a._onWindowResize), a.initialized = !1, c.instances[a.id] = null
                })
            }).fail(function(b) {
                c.is.error(b) && console.error("FooTable: unhandled error thrown while destroying the plugin.", b)
            })
        },
        raise: function(h, g) {
            var b = this,
                a = c.__debug__ && (c.is.emptyArray(c.__debug_options__.events) || c.arr.any(c.__debug_options__.events, function(e) {
                    return c.str.contains(h, e)
                }));
            return g = g || [], g.unshift(this), d.Deferred(function(e) {
                var f = d.Event(h);
                1 == b.o.stopPropagation && b.$el.one(h, function(i) {
                    i.stopPropagation()
                }), a && console.log("FooTable:" + h + ": ", g), b.$el.trigger(f, g), f.isDefaultPrevented() ? (a && console.log('FooTable: default prevented for the "' + h + '" event.'), e.reject(f)) : e.resolve(f)
            })
        },
        use: function(f) {
            for (var e = 0, g = this.components.length; g > e; e++) {
                if (this.components[e] instanceof f) {
                    return this.components[e]
                }
            }
            return null
        },
        draw: function() {
            var b = this,
                e = b.$el.clone().insertBefore(b.$el);
            return b.$el.detach(), b.execute(!1, !0, "predraw").then(function() {
                return b.raise("predraw.ft.table").then(function() {
                    return b.execute(!1, !0, "draw").then(function() {
                        return b.raise("draw.ft.table").then(function() {
                            return b.execute(!1, !0, "postdraw").then(function() {
                                return b.raise("postdraw.ft.table")
                            })
                        })
                    })
                })
            }).fail(function(f) {
                c.is.error(f) && console.error("FooTable: unhandled error thrown during a draw operation.", f)
            }).always(function() {
                e.replaceWith(b.$el), b.$loader.remove()
            })
        },
        execute: function(b, p, o, n, m) {
            var l = this,
                k = Array.prototype.slice.call(arguments);
            b = k.shift(), p = k.shift();
            var j = p ? c.arr.get(l.components, function(e) {
                return e.enabled
            }) : l.components.slice(0);
            return k.unshift(b ? j.reverse() : j), l._execute.apply(l, k)
        },
        _execute: function(n, m, l, k) {
            if (!n || !n.length) {
                return d.when()
            }
            var j, b = this,
                a = Array.prototype.slice.call(arguments);
            return n = a.shift(), m = a.shift(), j = n.shift(), c.is.fn(j[m]) ? d.Deferred(function(f) {
                try {
                    var h = j[m].apply(j, a);
                    if (c.is.promise(h)) {
                        return h.then(f.resolve, f.reject)
                    }
                    f.resolve(h)
                } catch (g) {
                    f.reject(g)
                }
            }).then(function() {
                return b._execute.apply(b, [n, m].concat(a))
            }) : b._execute.apply(b, [n, m].concat(a))
        },
        _onWindowResize: function(f) {
            var e = f.data.self;
            null != e._resizeTimeout && clearTimeout(e._resizeTimeout), e._resizeTimeout = setTimeout(function() {
                e._resizeTimeout = null, e.raise("resize.ft.table").then(function() {
                    e.breakpoints.check()
                })
            }, 300)
        }
    })
}(jQuery, FooTable),
function(d, c) {
    c.ArrayColumn = c.Column.extend({
        construct: function(f, e) {
            this._super(f, e, "array")
        },
        parser: function(h) {
            if (c.is.element(h) || c.is.jq(h)) {
                var g = d(h),
                    b = g.data("value");
                if (c.is.array(b)) {
                    return b
                }
                b = g.html();
                try {
                    b = JSON.parse(b)
                } catch (a) {
                    b = null
                }
                return c.is.array(b) ? b : null
            }
            return c.is.array(h) ? h : null
        },
        formatter: function(b, f, e) {
            return c.is.array(b) ? JSON.stringify(b) : ""
        }
    }), c.columns.register("array", c.ArrayColumn)
}(jQuery, FooTable),
function(d, c) {
    c.is.undef(window.moment) || (c.DateColumn = c.Column.extend({
        construct: function(b, e) {
            this._super(b, e, "date"), this.formatString = c.is.string(e.formatString) ? e.formatString : "MM-DD-YYYY"
        },
        parser: function(b) {
            if (c.is.element(b) || c.is.jq(b)) {
                var a = d(b).data("value");
                b = c.is.defined(a) ? a : d(b).text(), c.is.string(b) && (b = isNaN(b) ? b : +b)
            }
            if (c.is.date(b)) {
                return moment(b)
            }
            if (c.is.object(b) && c.is["boolean"](b._isAMomentObject)) {
                return b
            }
            if (c.is.string(b)) {
                if (isNaN(b)) {
                    return moment(b, this.formatString)
                }
                b = +b
            }
            return c.is.number(b) ? moment(b) : null
        },
        formatter: function(b, f, e) {
            return c.is.object(b) && c.is["boolean"](b._isAMomentObject) && b.isValid() ? b.format(this.formatString) : ""
        },
        filterValue: function(a) {
            if ((c.is.element(a) || c.is.jq(a)) && (a = d(a).data("filterValue") || d(a).text()), c.is.hash(a) && c.is.hash(a.options) && (c.is.string(a.options.filterValue) && (a = a.options.filterValue), c.is.defined(a.value) && (a = a.value)), c.is.object(a) && c.is["boolean"](a._isAMomentObject)) {
                return a.format(this.formatString)
            }
            if (c.is.string(a)) {
                if (isNaN(a)) {
                    return a
                }
                a = +a
            }
            return c.is.number(a) || c.is.date(a) ? moment(a).format(this.formatString) : c.is.defined(a) && null != a ? a + "" : ""
        }
    }), c.columns.register("date", c.DateColumn))
}(jQuery, FooTable),
function(d, c) {
    c.HTMLColumn = c.Column.extend({
        construct: function(f, e) {
            this._super(f, e, "html")
        },
        parser: function(f) {
            if (c.is.string(f) && (f = d(d.trim(f))), c.is.element(f) && (f = d(f)), c.is.jq(f)) {
                var b = f.prop("tagName").toLowerCase();
                if ("td" == b || "th" == b) {
                    var a = f.data("value");
                    return c.is.defined(a) ? a : f.contents()
                }
                return f
            }
            return null
        }
    }), c.columns.register("html", c.HTMLColumn)
}(jQuery, FooTable),
function(d, c) {
    c.NumberColumn = c.Column.extend({
        construct: function(b, e) {
            this._super(b, e, "number"), this.decimalSeparator = c.is.string(e.decimalSeparator) ? e.decimalSeparator : ".", this.thousandSeparator = c.is.string(e.thousandSeparator) ? e.thousandSeparator : ",", this.decimalSeparatorRegex = new RegExp(c.str.escapeRegExp(this.decimalSeparator), "g"), this.thousandSeparatorRegex = new RegExp(c.str.escapeRegExp(this.thousandSeparator), "g"), this.cleanRegex = new RegExp("[^-0-9" + c.str.escapeRegExp(this.decimalSeparator) + "]", "g")
        },
        parser: function(b) {
            if (c.is.element(b) || c.is.jq(b)) {
                var a = d(b).data("value");
                b = c.is.defined(a) ? a : d(b).text().replace(this.cleanRegex, "")
            }
            return c.is.string(b) && (b = b.replace(this.thousandSeparatorRegex, "").replace(this.decimalSeparatorRegex, "."), b = parseFloat(b)), c.is.number(b) ? b : null
        },
        formatter: function(f, e, h) {
            if (null == f) {
                return ""
            }
            var g = (f + "").split(".");
            return 2 == g.length && g[0].length > 3 && (g[0] = g[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator)), g.join(this.decimalSeparator)
        }
    }), c.columns.register("number", c.NumberColumn)
}(jQuery, FooTable),
function(d, c) {
    c.ObjectColumn = c.Column.extend({
        construct: function(f, e) {
            this._super(f, e, "object")
        },
        parser: function(h) {
            if (c.is.element(h) || c.is.jq(h)) {
                var g = d(h),
                    b = g.data("value");
                if (c.is.object(b)) {
                    return b
                }
                b = g.html();
                try {
                    b = JSON.parse(b)
                } catch (a) {
                    b = null
                }
                return c.is.object(b) ? b : null
            }
            return c.is.object(h) ? h : null
        },
        formatter: function(b, f, e) {
            return c.is.object(b) ? JSON.stringify(b) : ""
        }
    }), c.columns.register("object", c.ObjectColumn)
}(jQuery, FooTable),
function(d, c) {
    c.Breakpoint = c.Class.extend({
        construct: function(f, e) {
            this.name = f, this.width = e
        }
    })
}(jQuery, FooTable),
function(d, c) {
    c.Breakpoints = c.Component.extend({
        construct: function(b) {
            this._super(b, !0), this.o = b.o, this.current = null, this.array = [], this.cascade = this.o.cascade, this.useParentWidth = this.o.useParentWidth, this.hidden = null, this._classNames = "", this.getWidth = c.checkFnValue(this, this.o.getWidth, this.getWidth)
        },
        preinit: function(b) {
            var e = this;
            return this.ft.raise("preinit.ft.breakpoints", [b]).then(function() {
                e.cascade = c.is["boolean"](b.cascade) ? b.cascade : e.cascade, e.o.breakpoints = c.is.hash(b.breakpoints) ? b.breakpoints : e.o.breakpoints, e.getWidth = c.checkFnValue(e, b.getWidth, e.getWidth), null == e.o.breakpoints && (e.o.breakpoints = {
                    xs: 480,
                    sm: 768,
                    md: 992,
                    lg: 1200
                });
                for (var a in e.o.breakpoints) {
                    e.o.breakpoints.hasOwnProperty(a) && (e.array.push(new c.Breakpoint(a, e.o.breakpoints[a])), e._classNames += "breakpoint-" + a + " ")
                }
                e.array.sort(function(g, f) {
                    return f.width - g.width
                })
            })
        },
        init: function() {
            var b = this;
            return this.ft.raise("init.ft.breakpoints").then(function() {
                b.current = b.get()
            })
        },
        draw: function() {
            this.ft.$el.removeClass(this._classNames).addClass("breakpoint-" + this.current.name)
        },
        calculate: function() {
            for (var b, p = this, o = null, n = [], m = null, l = p.getWidth(), k = 0, j = p.array.length; j > k; k++) {
                b = p.array[k], (!o && k == j - 1 || l >= b.width && (m instanceof c.Breakpoint ? l < m.width : !0)) && (o = b), o || n.push(b.name), m = b
            }
            return n.push(o.name), p.hidden = n.join(" "), o
        },
        visible: function(b) {
            if (c.is.emptyString(b)) {
                return !0
            }
            if ("all" === b) {
                return !1
            }
            for (var h = b.split(" "), g = 0, f = h.length; f > g; g++) {
                if (this.cascade ? c.str.containsWord(this.hidden, h[g]) : h[g] == this.current.name) {
                    return !1
                }
            }
            return !0
        },
        check: function() {
            var b = this,
                e = b.get();
            e instanceof c.Breakpoint && e != b.current && b.ft.raise("before.ft.breakpoints", [b.current, e]).then(function() {
                var a = b.current;
                return b.current = e, b.ft.draw().then(function() {
                    b.ft.raise("after.ft.breakpoints", [b.current, a])
                })
            })
        },
        get: function(b) {
            return c.is.undef(b) ? this.calculate() : b instanceof c.Breakpoint ? b : c.is.string(b) ? c.arr.first(this.array, function(a) {
                return a.name == b
            }) : c.is.number(b) && b >= 0 && b < this.array.length ? this.array[b] : null
        },
        getWidth: function() {
            return c.is.fn(this.o.getWidth) ? this.o.getWidth(this.ft) : 1 == this.useParentWidth ? this.getParentWidth() : this.getViewportWidth()
        },
        getParentWidth: function() {
            return this.ft.$el.parent().width()
        },
        getViewportWidth: function() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth, 0)
        }
    }), c.components.register("breakpoints", c.Breakpoints, 1000)
}(jQuery, FooTable),
function(b) {
    b.Column.prototype.breakpoints = null, b.Column.prototype.__breakpoints_define__ = function(a) {
        this.breakpoints = b.is.emptyString(a.breakpoints) ? null : a.breakpoints
    }, b.Column.extend("define", function(c) {
        this._super(c), this.__breakpoints_define__(c)
    })
}(FooTable),
function(b) {
    b.Defaults.prototype.breakpoints = null, b.Defaults.prototype.cascade = !1, b.Defaults.prototype.useParentWidth = !1, b.Defaults.prototype.getWidth = null
}(FooTable),
function(d, c) {
    c.Columns = c.Component.extend({
        construct: function(b) {
            this._super(b, !0), this.o = b.o, this.array = [], this.$header = null, this.showHeader = b.o.showHeader, this._fromHTML = c.is.emptyArray(b.o.columns) && !c.is.promise(b.o.columns)
        },
        parse: function(b) {
            var a = this;
            return d.Deferred(function(s) {
                function r(x, w) {
                    var v = [];
                    if (0 == x.length || 0 == w.length) {
                        v = x.concat(w)
                    } else {
                        var u = 0;
                        c.arr.each(x.concat(w), function(e) {
                            e.index > u && (u = e.index)
                        }), u++;
                        for (var t, k, j = 0; u > j; j++) {
                            t = {}, c.arr.each(x, function(e) {
                                return e.index == j ? (t = e, !1) : void 0
                            }), k = {}, c.arr.each(w, function(e) {
                                return e.index == j ? (k = e, !1) : void 0
                            }), v.push(d.extend(!0, {}, t, k))
                        }
                    }
                    return v
                }
                var q, p, o = [],
                    n = [],
                    m = a.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();
                if (m.length > 0) {
                    var l = m.parent().is("tbody") && m.children().length == m.children("td").length;
                    l || (a.$header = m.addClass("footable-header")), m.children("td,th").each(function(e, f) {
                        q = d(f), p = q.data(), p.index = e, p.$el = q, p.virtual = l, n.push(p)
                    }), l && (a.showHeader = !1)
                }
                c.is.array(a.o.columns) && !c.is.emptyArray(a.o.columns) ? (c.arr.each(a.o.columns, function(f, e) {
                    f.index = e, o.push(f)
                }), a.parseFinalize(s, r(o, n))) : c.is.promise(a.o.columns) ? a.o.columns.then(function(e) {
                    c.arr.each(e, function(g, f) {
                        g.index = f, o.push(g)
                    }), a.parseFinalize(s, r(o, n))
                }, function(e) {
                    s.reject(Error("Columns ajax request error: " + e.status + " (" + e.statusText + ")"))
                }) : a.parseFinalize(s, r(o, n))
            })
        },
        parseFinalize: function(b, j) {
            var i, h = this,
                g = [];
            c.arr.each(j, function(e) {
                (i = c.columns.contains(e.type) ? c.columns.make(e.type, h.ft, e) : new c.Column(h.ft, e)) && g.push(i)
            }), c.is.emptyArray(g) ? b.reject(Error("No columns supplied.")) : (g.sort(function(f, e) {
                return f.index - e.index
            }), b.resolve(g))
        },
        preinit: function(b) {
            var e = this;
            return e.ft.raise("preinit.ft.columns", [b]).then(function() {
                return e.parse(b).then(function(a) {
                    e.array = a, e.showHeader = c.is["boolean"](b.showHeader) ? b.showHeader : e.showHeader
                })
            })
        },
        init: function() {
            var b = this;
            return this.ft.raise("init.ft.columns", [b.array]).then(function() {
                b.$create()
            })
        },
        destroy: function() {
            var b = this;
            this.ft.raise("destroy.ft.columns").then(function() {
                b._fromHTML || b.$header.remove()
            })
        },
        predraw: function() {
            var b = this,
                e = !0;
            b.visibleColspan = 0, b.firstVisibleIndex = 0, b.lastVisibleIndex = 0, b.hasHidden = !1, c.arr.each(b.array, function(a) {
                a.hidden = !b.ft.breakpoints.visible(a.breakpoints), !a.hidden && a.visible && (e && (b.firstVisibleIndex = a.index, e = !1), b.lastVisibleIndex = a.index, b.visibleColspan++), a.hidden && (b.hasHidden = !0)
            }), b.ft.$el.toggleClass("breakpoint", b.hasHidden)
        },
        draw: function() {
            c.arr.each(this.array, function(b) {
                b.$el.css("display", b.hidden || !b.visible ? "none" : "table-cell")
            }), !this.showHeader && c.is.jq(this.$header.parent()) && this.$header.detach()
        },
        $create: function() {
            var a = this;
            a.$header = c.is.jq(a.$header) ? a.$header : d("<tr/>", {
                "class": "footable-header"
            }), a.$header.children("th,td").detach(), c.arr.each(a.array, function(b) {
                a.$header.append(b.$el)
            }), a.showHeader && !c.is.jq(a.$header.parent()) && a.ft.$el.children("thead").append(a.$header)
        },
        get: function(b) {
            return b instanceof c.Column ? b : c.is.string(b) ? c.arr.first(this.array, function(a) {
                return a.name == b
            }) : c.is.number(b) ? c.arr.first(this.array, function(a) {
                return a.index == b
            }) : c.is.fn(b) ? c.arr.get(this.array, b) : null
        },
        ensure: function(b) {
            var f = this,
                e = [];
            return c.is.array(b) ? (c.arr.each(b, function(g) {
                e.push(f.get(g))
            }), e) : e
        }
    }), c.components.register("columns", c.Columns, 900)
}(jQuery, FooTable),
function(b) {
    b.Defaults.prototype.columns = [], b.Defaults.prototype.showHeader = !0
}(FooTable),
function(d, c) {
    c.Rows = c.Component.extend({
        construct: function(b) {
            this._super(b, !0), this.o = b.o, this.array = [], this.all = [], this.showToggle = b.o.showToggle, this.toggleSelector = b.o.toggleSelector, this.toggleColumn = b.o.toggleColumn, this.emptyString = b.o.empty, this.expandFirst = b.o.expandFirst, this.expandAll = b.o.expandAll, this.$empty = null, this._fromHTML = c.is.emptyArray(b.o.rows) && !c.is.promise(b.o.rows)
        },
        parse: function() {
            var a = this;
            return d.Deferred(function(b) {
                var e = a.ft.$el.children("tbody").children("tr");
                c.is.array(a.o.rows) && a.o.rows.length > 0 ? a.parseFinalize(b, a.o.rows) : c.is.promise(a.o.rows) ? a.o.rows.then(function(f) {
                    a.parseFinalize(b, f)
                }, function(f) {
                    b.reject(Error("Rows ajax request error: " + f.status + " (" + f.statusText + ")"))
                }) : c.is.jq(e) ? (a.parseFinalize(b, e), e.detach()) : a.parseFinalize(b, [])
            })
        },
        parseFinalize: function(h, g) {
            var b = this,
                a = d.map(g, function(e) {
                    return new c.Row(b.ft, b.ft.columns.array, e)
                });
            h.resolve(a)
        },
        preinit: function(b) {
            var e = this;
            return e.ft.raise("preinit.ft.rows", [b]).then(function() {
                return e.parse().then(function(a) {
                    e.all = a, e.array = e.all.slice(0), e.showToggle = c.is["boolean"](b.showToggle) ? b.showToggle : e.showToggle, e.toggleSelector = c.is.string(b.toggleSelector) ? b.toggleSelector : e.toggleSelector, e.toggleColumn = c.is.string(b.toggleColumn) ? b.toggleColumn : e.toggleColumn, "first" != e.toggleColumn && "last" != e.toggleColumn && (e.toggleColumn = "first"), e.emptyString = c.is.string(b.empty) ? b.empty : e.emptyString, e.expandFirst = c.is["boolean"](b.expandFirst) ? b.expandFirst : e.expandFirst, e.expandAll = c.is["boolean"](b.expandAll) ? b.expandAll : e.expandAll
                })
            })
        },
        init: function() {
            var b = this;
            return b.ft.raise("init.ft.rows", [b.all]).then(function() {
                b.$create()
            })
        },
        destroy: function() {
            var b = this;
            this.ft.raise("destroy.ft.rows").then(function() {
                c.arr.each(b.array, function(a) {
                    a.predraw(!b._fromHTML)
                }), b.all = b.array = []
            })
        },
        predraw: function() {
            c.arr.each(this.array, function(b) {
                b.predraw()
            }), this.array = this.all.slice(0)
        },
        $create: function() {
            this.$empty = d("<tr/>", {
                "class": "footable-empty"
            }).append(d("<td/>").text(this.emptyString))
        },
        draw: function() {
            var b = this,
                f = b.ft.$el.children("tbody"),
                e = !0;
            b.array.length > 0 ? (b.$empty.detach(), c.arr.each(b.array, function(a) {
                (b.expandFirst && e || b.expandAll) && (a.expanded = !0, e = !1), a.draw(f)
            })) : (b.$empty.children("td").attr("colspan", b.ft.columns.visibleColspan), f.append(b.$empty))
        },
        load: function(h, g) {
            var b = this,
                a = d.map(h, function(e) {
                    return new c.Row(b.ft, b.ft.columns.array, e)
                });
            c.arr.each(this.array, function(e) {
                e.predraw()
            }), this.all = (c.is["boolean"](g) ? g : !1) ? this.all.concat(a) : a, this.array = this.all.slice(0), this.ft.draw()
        },
        expand: function() {
            c.arr.each(this.array, function(b) {
                b.expand()
            })
        },
        collapse: function() {
            c.arr.each(this.array, function(b) {
                b.collapse()
            })
        }
    }), c.components.register("rows", c.Rows, 800)
}(jQuery, FooTable),
function(b) {
    b.Defaults.prototype.rows = [], b.Defaults.prototype.empty = "No results", b.Defaults.prototype.showToggle = !0, b.Defaults.prototype.toggleSelector = "tr,td,.footable-toggle", b.Defaults.prototype.toggleColumn = "first", b.Defaults.prototype.expandFirst = !1, b.Defaults.prototype.expandAll = !1
}(FooTable),
function(b) {
    b.Table.prototype.loadRows = function(d, c) {
        this.rows.load(d, c)
    }
}(FooTable),
function(b) {
    b.Filter = b.Class.extend({
        construct: function(a, n, m, l, k, j, i) {
            this.name = a, this.space = !b.is.string(l) || "OR" != l && "AND" != l ? "AND" : l, this.connectors = b.is["boolean"](k) ? k : !0, this.ignoreCase = b.is["boolean"](j) ? j : !0, this.hidden = b.is["boolean"](i) ? i : !1, this.query = n instanceof b.Query ? n : new b.Query(n, this.space, this.connectors, this.ignoreCase), this.columns = m
        },
        match: function(a) {
            return b.is.string(a) ? (b.is.string(this.query) && (this.query = new b.Query(this.query, this.space, this.connectors, this.ignoreCase)), this.query instanceof b.Query ? this.query.match(a) : !1) : !1
        },
        matchRow: function(a) {
            var f = this,
                e = b.arr.map(a.cells, function(c) {
                    return b.arr.contains(f.columns, c.column) ? c.filterValue : null
                }).join(" ");
            return f.match(e)
        }
    })
}(FooTable),
function(d, c) {
    c.Filtering = c.Component.extend({
        construct: function(b) {
            this._super(b, b.o.filtering.enabled), this.filters = b.o.filtering.filters, this.delay = b.o.filtering.delay, this.min = b.o.filtering.min, this.space = b.o.filtering.space, this.connectors = b.o.filtering.connectors, this.ignoreCase = b.o.filtering.ignoreCase, this.exactMatch = b.o.filtering.exactMatch, this.placeholder = b.o.filtering.placeholder, this.dropdownTitle = b.o.filtering.dropdownTitle, this.position = b.o.filtering.position, this.focus = b.o.filtering.focus, this.container = b.o.filtering.container, this.$container = null, this.$row = null, this.$cell = null, this.$form = null, this.$dropdown = null, this.$input = null, this.$button = null, this._filterTimeout = null, this._exactRegExp = /^"(.*?)"$/
        },
        preinit: function(b) {
            var e = this;
            return e.ft.raise("preinit.ft.filtering").then(function() {
                e.ft.$el.hasClass("footable-filtering") && (e.enabled = !0), e.enabled = c.is["boolean"](b.filtering) ? b.filtering : e.enabled, e.enabled && (e.space = c.is.string(b.filterSpace) ? b.filterSpace : e.space, e.min = c.is.number(b.filterMin) ? b.filterMin : e.min, e.connectors = c.is["boolean"](b.filterConnectors) ? b.filterConnectors : e.connectors, e.ignoreCase = c.is["boolean"](b.filterIgnoreCase) ? b.filterIgnoreCase : e.ignoreCase, e.exactMatch = c.is["boolean"](b.filterExactMatch) ? b.filterExactMatch : e.exactMatch, e.focus = c.is["boolean"](b.filterFocus) ? b.filterFocus : e.focus, e.delay = c.is.number(b.filterDelay) ? b.filterDelay : e.delay, e.placeholder = c.is.string(b.filterPlaceholder) ? b.filterPlaceholder : e.placeholder, e.dropdownTitle = c.is.string(b.filterDropdownTitle) ? b.filterDropdownTitle : e.dropdownTitle, e.container = c.is.string(b.filterContainer) ? b.filterContainer : e.container, e.filters = c.is.array(b.filterFilters) ? e.ensure(b.filterFilters) : e.ensure(e.filters), e.ft.$el.hasClass("footable-filtering-left") && (e.position = "left"), e.ft.$el.hasClass("footable-filtering-center") && (e.position = "center"), e.ft.$el.hasClass("footable-filtering-right") && (e.position = "right"), e.position = c.is.string(b.filterPosition) ? b.filterPosition : e.position)
            }, function() {
                e.enabled = !1
            })
        },
        init: function() {
            var b = this;
            return b.ft.raise("init.ft.filtering").then(function() {
                b.$create()
            }, function() {
                b.enabled = !1
            })
        },
        destroy: function() {
            var b = this;
            return b.ft.raise("destroy.ft.filtering").then(function() {
                b.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove()
            })
        },
        $create: function() {
            var l, k = this,
                j = d("<div/>", {
                    "class": "form-group footable-filtering-search"
                }).append(d("<label/>", {
                    "class": "sr-only",
                    text: "Search"
                })),
                i = d("<div/>", {
                    "class": "input-group"
                }).appendTo(j),
                b = d("<div/>", {
                    "class": "input-group-btn"
                }),
                a = d("<button/>", {
                    type: "button",
                    "class": "btn btn-default dropdown-toggle"
                }).on("click", {
                    self: k
                }, k._onDropdownToggleClicked).append(d("<span/>", {
                    "class": "caret"
                }));
            switch (k.position) {
                case "left":
                    l = "footable-filtering-left";
                    break;
                case "center":
                    l = "footable-filtering-center";
                    break;
                default:
                    l = "footable-filtering-right"
            }
            k.ft.$el.addClass("footable-filtering").addClass(l), k.$container = null === k.container ? d() : d(k.container).first(), k.$container.length ? k.$container.addClass("footable-filtering-external").addClass(l) : (k.$row = d("<tr/>", {
                "class": "footable-filtering"
            }).prependTo(k.ft.$el.children("thead")), k.$cell = d("<th/>").attr("colspan", k.ft.columns.visibleColspan).appendTo(k.$row), k.$container = k.$cell), k.$form = d("<form/>", {
                "class": "form-inline"
            }).append(j).appendTo(k.$container), k.$input = d("<input/>", {
                type: "text",
                "class": "form-control",
                placeholder: k.placeholder
            }), k.$button = d("<button/>", {
                type: "button",
                "class": "btn btn-primary"
            }).on("click", {
                self: k
            }, k._onSearchButtonClicked).append(d("<span/>", {
                "class": "fooicon fooicon-search"
            })), k.$dropdown = d("<ul/>", {
                "class": "dropdown-menu dropdown-menu-right"
            }), c.is.emptyString(k.dropdownTitle) || k.$dropdown.append(d("<li/>", {
                "class": "dropdown-header",
                text: k.dropdownTitle
            })), k.$dropdown.append(c.arr.map(k.ft.columns.array, function(e) {
                return e.filterable ? d("<li/>").append(d("<a/>", {
                    "class": "checkbox"
                }).append(d("<label/>", {
                    html: e.title
                }).prepend(d("<input/>", {
                    type: "checkbox",
                    checked: !0
                }).data("__FooTableColumn__", e)))) : null
            })), k.delay > 0 && (k.$input.on("keypress keyup paste", {
                self: k
            }, k._onSearchInputChanged), k.$dropdown.on("click", 'input[type="checkbox"]', {
                self: k
            }, k._onSearchColumnClicked)), b.append(k.$button, a, k.$dropdown), i.append(k.$input, b)
        },
        predraw: function() {
            if (!c.is.emptyArray(this.filters)) {
                var a = this;
                a.ft.rows.array = d.grep(a.ft.rows.array, function(b) {
                    return b.filtered(a.filters)
                })
            }
        },
        draw: function() {
            c.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan);
            var b = this.find("search");
            if (b instanceof c.Filter) {
                var e = b.query.val();
                this.exactMatch && this._exactRegExp.test(e) && (e = e.replace(this._exactRegExp, "$1")), this.$input.val(e)
            } else {
                this.$input.val(null)
            }
            this.setButton(!c.arr.any(this.filters, function(f) {
                return !f.hidden
            }))
        },
        addFilter: function(b, p, o, n, m, l, k) {
            var j = this.createFilter(b, p, o, n, m, l, k);
            j instanceof c.Filter && (this.removeFilter(j.name), this.filters.push(j))
        },
        removeFilter: function(b) {
            c.arr.remove(this.filters, function(a) {
                return a.name == b
            })
        },
        filter: function(f) {
            var e = this;
            return e.filters = e.ensure(e.filters), e.ft.raise("before.ft.filtering", [e.filters]).then(function() {
                if (e.filters = e.ensure(e.filters), f) {
                    var b = e.$input.prop("selectionStart"),
                        a = e.$input.prop("selectionEnd")
                }
                return e.ft.draw().then(function() {
                    f && e.$input.focus().prop({
                        selectionStart: b,
                        selectionEnd: a
                    }), e.ft.raise("after.ft.filtering", [e.filters])
                })
            })
        },
        clear: function() {
            return this.filters = c.arr.get(this.filters, function(b) {
                return b.hidden
            }), this.filter(this.focus)
        },
        setButton: function(b) {
            b ? this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search") : this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove")
        },
        find: function(b) {
            return c.arr.first(this.filters, function(a) {
                return a.name == b
            })
        },
        columns: function() {
            return c.is.jq(this.$dropdown) ? this.$dropdown.find("input:checked").map(function() {
                return d(this).data("__FooTableColumn__")
            }).get() : this.ft.columns.get(function(b) {
                return b.filterable
            })
        },
        ensure: function(b) {
            var h = this,
                g = [],
                f = h.columns();
            return c.is.emptyArray(b) || c.arr.each(b, function(e) {
                e = h._ensure(e, f), e instanceof c.Filter && g.push(e)
            }), g
        },
        createFilter: function(b, n, m, l, k, j, i) {
            return c.is.string(b) && (b = {
                name: b,
                query: n,
                columns: m,
                ignoreCase: l,
                connectors: k,
                space: j,
                hidden: i
            }), this._ensure(b, this.columns())
        },
        _ensure: function(b, e) {
            return (c.is.hash(b) || b instanceof c.Filter) && !c.is.emptyString(b.name) && (!c.is.emptyString(b.query) || b.query instanceof c.Query) ? (b.columns = c.is.emptyArray(b.columns) ? e : this.ft.columns.ensure(b.columns), b.ignoreCase = c.is["boolean"](b.ignoreCase) ? b.ignoreCase : this.ignoreCase, b.connectors = c.is["boolean"](b.connectors) ? b.connectors : this.connectors, b.hidden = c.is["boolean"](b.hidden) ? b.hidden : !1, b.space = !c.is.string(b.space) || "AND" !== b.space && "OR" !== b.space ? this.space : b.space, b.query = c.is.string(b.query) ? new c.Query(b.query, b.space, b.connectors, b.ignoreCase) : b.query, b instanceof c.Filter ? b : new c.Filter(b.name, b.query, b.columns, b.space, b.connectors, b.ignoreCase, b.hidden)) : null
        },
        _onSearchInputChanged: function(b) {
            var j = b.data.self,
                i = "keypress" == b.type && !c.is.emptyString(String.fromCharCode(b.charCode)),
                h = "keyup" == b.type && (8 == b.which || 46 == b.which),
                g = "paste" == b.type;
            (i || h || g) && (13 == b.which && b.preventDefault(), null != j._filterTimeout && clearTimeout(j._filterTimeout), j._filterTimeout = setTimeout(function() {
                j._filterTimeout = null;
                var e = j.$input.val();
                e.length >= j.min ? (j.exactMatch && !j._exactRegExp.test(e) && (e = '"' + e + '"'), j.addFilter("search", e), j.filter(j.focus)) : c.is.emptyString(e) && j.clear()
            }, j.delay))
        },
        _onSearchButtonClicked: function(f) {
            f.preventDefault();
            var e = f.data.self;
            null != e._filterTimeout && clearTimeout(e._filterTimeout);
            var h = e.$button.children(".fooicon");
            if (h.hasClass("fooicon-remove")) {
                e.clear()
            } else {
                var g = e.$input.val();
                g.length >= e.min && (e.exactMatch && !e._exactRegExp.test(g) && (g = '"' + g + '"'), e.addFilter("search", g), e.filter(e.focus))
            }
        },
        _onSearchColumnClicked: function(f) {
            var e = f.data.self;
            null != e._filterTimeout && clearTimeout(e._filterTimeout), e._filterTimeout = setTimeout(function() {
                e._filterTimeout = null;
                var b = e.$button.children(".fooicon");
                b.hasClass("fooicon-remove") && (b.removeClass("fooicon-remove").addClass("fooicon-search"), e.addFilter("search", e.$input.val()), e.filter())
            }, e.delay)
        },
        _onDropdownToggleClicked: function(a) {
            a.preventDefault(), a.stopPropagation();
            var e = a.data.self;
            e.$dropdown.parent().toggleClass("open"), e.$dropdown.parent().hasClass("open") ? d(document).on("click.footable", {
                self: e
            }, e._onDocumentClicked) : d(document).off("click.footable", e._onDocumentClicked)
        },
        _onDocumentClicked: function(a) {
            if (0 == d(a.target).closest(".dropdown-menu").length) {
                a.preventDefault();
                var e = a.data.self;
                e.$dropdown.parent().removeClass("open"), d(document).off("click.footable", e._onDocumentClicked)
            }
        }
    }), c.components.register("filtering", c.Filtering, 500)
}(jQuery, FooTable),
function(b) {
    b.Query = b.Class.extend({
        construct: function(a, h, g, f) {
            this._original = null, this._value = null, this.space = !b.is.string(h) || "OR" != h && "AND" != h ? "AND" : h, this.connectors = b.is["boolean"](g) ? g : !0, this.ignoreCase = b.is["boolean"](f) ? f : !0, this.left = null, this.right = null, this.parts = [], this.operator = null, this.val(a)
        },
        val: function(a) {
            if (b.is.emptyString(a)) {
                return this._value
            }
            if (b.is.emptyString(this._original)) {
                this._original = a
            } else {
                if (this._original == a) {
                    return
                }
            }
            this._value = a, this._parse()
        },
        match: function(a) {
            return b.is.emptyString(this.operator) || "OR" === this.operator ? this._left(a, !1) || this._match(a, !1) || this._right(a, !1) : "AND" === this.operator ? this._left(a, !0) && this._match(a, !0) && this._right(a, !0) : void 0
        },
        _match: function(a, j) {
            var i = this,
                h = !1,
                g = b.is.emptyString(a);
            return b.is.emptyArray(i.parts) && i.left instanceof b.Query ? j : b.is.emptyArray(i.parts) ? h : ("OR" === i.space ? b.arr.each(i.parts, function(e) {
                if (e.empty && g) {
                    if (h = !0, e.negate) {
                        return h = !1
                    }
                } else {
                    var d = (e.exact ? b.str.containsExact : b.str.contains)(a, e.query, i.ignoreCase);
                    if (d && !e.negate && (h = !0), d && e.negate) {
                        return h = !1
                    }
                }
            }) : (h = !0, b.arr.each(i.parts, function(e) {
                if (e.empty) {
                    return (!g && !e.negate || g && e.negate) && (h = !1), h
                }
                var d = (e.exact ? b.str.containsExact : b.str.contains)(a, e.query, i.ignoreCase);
                return (!d && !e.negate || d && e.negate) && (h = !1), h
            })), h)
        },
        _left: function(a, d) {
            return this.left instanceof b.Query ? this.left.match(a) : d
        },
        _right: function(a, d) {
            return this.right instanceof b.Query ? this.right.match(a) : d
        },
        _parse: function() {
            if (!b.is.emptyString(this._value)) {
                if (/\sOR\s/.test(this._value)) {
                    this.operator = "OR";
                    var a = this._value.split(/(?:\sOR\s)(.*)?/);
                    this.left = new b.Query(a[0], this.space, this.connectors, this.ignoreCase), this.right = new b.Query(a[1], this.space, this.connectors, this.ignoreCase)
                } else {
                    if (/\sAND\s/.test(this._value)) {
                        this.operator = "AND";
                        var f = this._value.split(/(?:\sAND\s)(.*)?/);
                        this.left = new b.Query(f[0], this.space, this.connectors, this.ignoreCase), this.right = new b.Query(f[1], this.space, this.connectors, this.ignoreCase)
                    } else {
                        var e = this;
                        this.parts = b.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function(c) {
                            return e._part(c)
                        })
                    }
                }
            }
        },
        _part: function(a) {
            var d = {
                query: a,
                negate: !1,
                phrase: !1,
                exact: !1,
                empty: !1
            };
            return b.str.startsWith(d.query, "-") && (d.query = b.str.from(d.query, "-"), d.negate = !0), /^"(.*?)"$/.test(d.query) ? (d.query = d.query.replace(/^"(.*?)"$/, "$1"), d.phrase = !0, d.exact = !0) : this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(d.query) && (d.query = d.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function(e, c) {
                return e.replace(c, " ")
            }), d.phrase = !0), d.empty = d.phrase && b.is.emptyString(d.query), d
        }
    })
}(FooTable),
function(b) {
    b.Cell.prototype.filterValue = null, b.Cell.prototype.__filtering_define__ = function(c) {
        this.filterValue = this.column.filterValue.call(this.column, c)
    }, b.Cell.prototype.__filtering_val__ = function(a) {
        b.is.defined(a) && (this.filterValue = this.column.filterValue.call(this.column, a))
    }, b.Cell.extend("define", function(c) {
        this._super(c), this.__filtering_define__(c)
    }), b.Cell.extend("val", function(f, e, h) {
        var g = this._super(f, e, h);
        return this.__filtering_val__(f), g
    })
}(FooTable),
function(d, c) {
    c.Column.prototype.filterable = !0, c.Column.prototype.filterValue = function(b) {
        if (c.is.element(b) || c.is.jq(b)) {
            var a = d(b).data("filterValue");
            return c.is.defined(a) ? "" + a : d(b).text()
        }
        if (c.is.hash(b) && c.is.hash(b.options)) {
            if (c.is.string(b.options.filterValue)) {
                return b.options.filterValue
            }
            c.is.defined(b.value) && (b = b.value)
        }
        return c.is.defined(b) && null != b ? b + "" : ""
    }, c.Column.prototype.__filtering_define__ = function(b) {
        this.filterable = c.is["boolean"](b.filterable) ? b.filterable : this.filterable, this.filterValue = c.checkFnValue(this, b.filterValue, this.filterValue)
    }, c.Column.extend("define", function(b) {
        this._super(b), this.__filtering_define__(b)
    })
}(jQuery, FooTable),
function(b) {
    b.Defaults.prototype.filtering = {
        enabled: !1,
        filters: [],
        delay: 1200,
        min: 1,
        space: "AND",
        placeholder: "Search",
        dropdownTitle: null,
        position: "right",
        connectors: !0,
        ignoreCase: !0,
        exactMatch: !1,
        focus: !0,
        container: null
    }
}(FooTable),
function(b) {
    b.Row.prototype.filtered = function(a) {
        var f = !0,
            e = this;
        return b.arr.each(a, function(c) {
            return 0 == (f = c.matchRow(e)) ? !1 : void 0
        }), f
    }
}(FooTable),
function(d, c) {
    c.Sorter = c.Class.extend({
        construct: function(f, e) {
            this.column = f, this.direction = e
        }
    })
}(jQuery, FooTable),
function(d, c) {
    c.Sorting = c.Component.extend({
        construct: function(b) {
            this._super(b, b.o.sorting.enabled), this.o = b.o.sorting, this.column = null, this.allowed = !0, this.initial = null
        },
        preinit: function(b) {
            var e = this;
            this.ft.raise("preinit.ft.sorting", [b]).then(function() {
                e.ft.$el.hasClass("footable-sorting") && (e.enabled = !0), e.enabled = c.is["boolean"](b.sorting) ? b.sorting : e.enabled, e.enabled && (e.column = c.arr.first(e.ft.columns.array, function(f) {
                    return f.sorted
                }))
            }, function() {
                e.enabled = !1
            })
        },
        init: function() {
            var a = this;
            this.ft.raise("init.ft.sorting").then(function() {
                if (!a.initial) {
                    var b = !!a.column;
                    a.initial = {
                        isset: b,
                        rows: a.ft.rows.all.slice(0),
                        column: b ? a.column.name : null,
                        direction: b ? a.column.direction : null
                    }
                }
                c.arr.each(a.ft.columns.array, function(e) {
                    e.sortable && e.$el.addClass("footable-sortable").append(d("<span/>", {
                        "class": "fooicon fooicon-sort"
                    }))
                }), a.ft.$el.on("click.footable", ".footable-sortable", {
                    self: a
                }, a._onSortClicked)
            }, function() {
                a.enabled = !1
            })
        },
        destroy: function() {
            var b = this;
            this.ft.raise("destroy.ft.paging").then(function() {
                b.ft.$el.off("click.footable", ".footable-sortable", b._onSortClicked), b.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove()
            })
        },
        predraw: function() {
            if (this.column) {
                var f = this,
                    e = f.column;
                f.ft.rows.array.sort(function(b, g) {
                    return "DESC" == e.direction ? e.sorter(g.cells[e.index].sortValue, b.cells[e.index].sortValue) : e.sorter(b.cells[e.index].sortValue, g.cells[e.index].sortValue)
                })
            }
        },
        draw: function() {
            if (this.column) {
                var f = this,
                    e = f.ft.$el.find("thead > tr > .footable-sortable"),
                    g = f.column.$el;
                e.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"), e.not(g).children(".fooicon").addClass("fooicon-sort"), g.addClass("DESC" == f.column.direction ? "footable-desc" : "footable-asc").children(".fooicon").addClass("DESC" == f.column.direction ? "fooicon-sort-desc" : "fooicon-sort-asc")
            }
        },
        sort: function(f, e) {
            return this._sort(f, e)
        },
        toggleAllowed: function(b) {
            b = c.is["boolean"](b) ? b : !this.allowed, this.allowed = b, this.ft.$el.toggleClass("footable-sorting-disabled", !this.allowed)
        },
        hasChanged: function() {
            return !(!this.initial || !this.column || this.column.name === this.initial.column && (this.column.direction === this.initial.direction || null === this.initial.direction && "ASC" === this.column.direction))
        },
        reset: function() {
            this.initial && (this.initial.isset ? this.sort(this.initial.column, this.initial.direction) : (this.column && (this.column.$el.removeClass("footable-asc footable-desc"), this.column = null), this.ft.rows.all = this.initial.rows, this.ft.draw()))
        },
        _sort: function(h, g) {
            if (!this.allowed) {
                return d.Deferred().reject("sorting disabled")
            }
            var b = this,
                a = new c.Sorter(b.ft.columns.get(h), c.Sorting.dir(g));
            return b.ft.raise("before.ft.sorting", [a]).then(function() {
                return c.arr.each(b.ft.columns.array, function(e) {
                    e != b.column && (e.direction = null)
                }), b.column = b.ft.columns.get(a.column), b.column && (b.column.direction = c.Sorting.dir(a.direction)), b.ft.draw().then(function() {
                    b.ft.raise("after.ft.sorting", [a])
                })
            })
        },
        _onSortClicked: function(a) {
            var h = a.data.self,
                g = d(this).closest("th,td"),
                f = g.is(".footable-asc, .footable-desc") ? g.hasClass("footable-desc") ? "ASC" : "DESC" : "ASC";
            h._sort(g.index(), f)
        }
    }), c.Sorting.dir = function(b) {
        return !c.is.string(b) || "ASC" != b && "DESC" != b ? "ASC" : b
    }, c.components.register("sorting", c.Sorting, 600)
}(jQuery, FooTable),
function(b) {
    b.Cell.prototype.sortValue = null, b.Cell.prototype.__sorting_define__ = function(c) {
        this.sortValue = this.column.sortValue.call(this.column, c)
    }, b.Cell.prototype.__sorting_val__ = function(a) {
        b.is.defined(a) && (this.sortValue = this.column.sortValue.call(this.column, a))
    }, b.Cell.extend("define", function(c) {
        this._super(c), this.__sorting_define__(c)
    }), b.Cell.extend("val", function(f, e, h) {
        var g = this._super(f, e, h);
        return this.__sorting_val__(f), g
    })
}(FooTable),
function(d, c) {
    c.Column.prototype.direction = null, c.Column.prototype.sortable = !0, c.Column.prototype.sorted = !1, c.Column.prototype.sorter = function(f, e) {
        return "string" == typeof f && (f = f.toLowerCase()), "string" == typeof e && (e = e.toLowerCase()), f === e ? 0 : e > f ? -1 : 1
    }, c.Column.prototype.sortValue = function(b) {
        if (c.is.element(b) || c.is.jq(b)) {
            var a = d(b).data("sortValue");
            return c.is.defined(a) ? a : this.parser(b)
        }
        if (c.is.hash(b) && c.is.hash(b.options)) {
            if (c.is.string(b.options.sortValue)) {
                return b.options.sortValue
            }
            c.is.defined(b.value) && (b = b.value)
        }
        return c.is.defined(b) && null != b ? b : null
    }, c.Column.prototype.__sorting_define__ = function(b) {
        this.sorter = c.checkFnValue(this, b.sorter, this.sorter), this.direction = c.is.type(b.direction, "string") ? c.Sorting.dir(b.direction) : null, this.sortable = c.is["boolean"](b.sortable) ? b.sortable : !0, this.sorted = c.is["boolean"](b.sorted) ? b.sorted : !1, this.sortValue = c.checkFnValue(this, b.sortValue, this.sortValue)
    }, c.Column.extend("define", function(b) {
        this._super(b), this.__sorting_define__(b)
    })
}(jQuery, FooTable),
function(b) {
    b.Defaults.prototype.sorting = {
        enabled: !1
    }
}(FooTable),
function(d, c) {
    c.HTMLColumn.extend("__sorting_define__", function(a) {
        this._super(a), this.sortUse = c.is.string(a.sortUse) && -1 !== d.inArray(a.sortUse, ["html", "text"]) ? a.sortUse : "html"
    }), c.HTMLColumn.prototype.sortValue = function(b) {
        if (c.is.element(b) || c.is.jq(b)) {
            var a = d(b).data("sortValue");
            return c.is.defined(a) ? a : this.parser(b)
        }
        if (c.is.hash(b) && c.is.hash(b.options)) {
            if (c.is.string(b.options.sortValue)) {
                return b.options.sortValue
            }
            c.is.defined(b.value) && (b = b.value)
        }
        return c.is.defined(b) && null != b ? b : null
    }
}(jQuery, FooTable),
function(d, c) {
    c.NumberColumn.prototype.sortValue = function(b) {
        if (c.is.element(b) || c.is.jq(b)) {
            var a = d(b).data("sortValue");
            return c.is.number(a) ? a : this.parser(b)
        }
        if (c.is.hash(b) && c.is.hash(b.options)) {
            if (c.is.string(b.options.sortValue)) {
                return this.parser(b)
            }
            if (c.is.number(b.options.sortValue)) {
                return b.options.sortValue
            }
            if (c.is.number(b.value)) {
                return b.value
            }
        }
        return c.is.string(b) ? this.parser(b) : c.is.number(b) ? b : null
    }
}(jQuery, FooTable),
function(b) {
    b.Table.prototype.sort = function(a, d) {
        return this.use(b.Sorting).sort(a, d)
    }
}(FooTable),
function(d, c) {
    c.Pager = c.Class.extend({
        construct: function(g, f, j, i, h) {
            this.total = g, this.current = f, this.size = j, this.page = i, this.forward = h
        }
    })
}(jQuery, FooTable),
function(d, c) {
    c.Paging = c.Component.extend({
        construct: function(b) {
            this._super(b, b.o.paging.enabled), this.strings = b.o.paging.strings, this.current = b.o.paging.current, this.size = b.o.paging.size, this.limit = b.o.paging.limit, this.position = b.o.paging.position, this.countFormat = b.o.paging.countFormat, this.container = b.o.paging.container, this.total = -1, this.totalRows = 0, this.previous = -1, this.formattedCount = null, this.$container = null, this.$wrapper = null, this.$row = null, this.$cell = null, this.$pagination = null, this.$count = null, this.detached = !0, this._createdLinks = 0
        },
        preinit: function(b) {
            var e = this;
            this.ft.raise("preinit.ft.paging", [b]).then(function() {
                e.ft.$el.hasClass("footable-paging") && (e.enabled = !0), e.enabled = c.is["boolean"](b.paging) ? b.paging : e.enabled, e.enabled && (e.size = c.is.number(b.pagingSize) ? b.pagingSize : e.size, e.current = c.is.number(b.pagingCurrent) ? b.pagingCurrent : e.current, e.limit = c.is.number(b.pagingLimit) ? b.pagingLimit : e.limit, e.ft.$el.hasClass("footable-paging-left") && (e.position = "left"), e.ft.$el.hasClass("footable-paging-center") && (e.position = "center"), e.ft.$el.hasClass("footable-paging-right") && (e.position = "right"), e.position = c.is.string(b.pagingPosition) ? b.pagingPosition : e.position, e.countFormat = c.is.string(b.pagingCountFormat) ? b.pagingCountFormat : e.countFormat, e.container = c.is.string(b.pagingContainer) ? b.pagingContainer : e.container, e.total = Math.ceil(e.ft.rows.all.length / e.size))
            }, function() {
                e.enabled = !1
            })
        },
        init: function() {
            var b = this;
            this.ft.raise("init.ft.paging").then(function() {
                b.$create()
            }, function() {
                b.enabled = !1
            })
        },
        destroy: function() {
            var b = this;
            this.ft.raise("destroy.ft.paging").then(function() {
                b.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(), b.detached = !0, b._createdLinks = 0
            })
        },
        predraw: function() {
            this.total = Math.ceil(this.ft.rows.array.length / this.size), this.current = this.current > this.total ? this.total : this.current < 1 ? 1 : this.current, this.totalRows = this.ft.rows.array.length, this.totalRows > this.size && (this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size)), this.formattedCount = this.format(this.countFormat)
        },
        draw: function() {
            if (this.total <= 1) {
                this.detached || (this.$row ? this.$row.detach() : this.$wrapper.detach(), this.detached = !0)
            } else {
                if (this.detached) {
                    if (this.$row) {
                        var a = this.ft.$el.children("tfoot");
                        0 == a.length && (a = d("<tfoot/>"), this.ft.$el.append(a)), this.$row.appendTo(a)
                    } else {
                        this.$wrapper.appendTo(this.$container)
                    }
                    this.detached = !1
                }
                c.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan), this._createLinks(), this._setVisible(this.current, this.current > this.previous), this._setNavigation(!0), this.$count.text(this.formattedCount)
            }
        },
        $create: function() {
            this._createdLinks = 0;
            var b = "footable-paging-center";
            switch (this.position) {
                case "left":
                    b = "footable-paging-left";
                    break;
                case "right":
                    b = "footable-paging-right"
            }
            if (this.ft.$el.addClass("footable-paging").addClass(b), this.$container = null === this.container ? null : d(this.container).first(), c.is.jq(this.$container)) {
                this.$container.addClass("footable-paging-external").addClass(b)
            } else {
                var a = this.ft.$el.children("tfoot");
                0 == a.length && (a = d("<tfoot/>"), this.ft.$el.append(a)), this.$row = d("<tr/>", {
                    "class": "footable-paging"
                }).prependTo(a), this.$container = this.$cell = d("<td/>").attr("colspan", this.ft.columns.visibleColspan).appendTo(this.$row)
            }
            this.$wrapper = d("<div/>", {
                "class": "footable-pagination-wrapper"
            }).appendTo(this.$container), this.$pagination = d("<ul/>", {
                "class": "pagination"
            }).on("click.footable", "a.footable-page-link", {
                self: this
            }, this._onPageClicked), this.$count = d("<span/>", {
                "class": "label label-default"
            }), this.$wrapper.append(this.$pagination, d("<div/>", {
                "class": "divider"
            }), this.$count), this.detached = !1
        },
        format: function(f) {
            var e = this.size * (this.current - 1) + 1,
                g = this.size * this.current;
            return 0 == this.ft.rows.array.length ? (e = 0, g = 0) : g = g > this.totalRows ? this.totalRows : g, f.replace(/\{CP}/g, this.current).replace(/\{TP}/g, this.total).replace(/\{PF}/g, e).replace(/\{PL}/g, g).replace(/\{TR}/g, this.totalRows)
        },
        first: function() {
            return this._set(1)
        },
        prev: function() {
            return this._set(this.current - 1 > 0 ? this.current - 1 : 1)
        },
        next: function() {
            return this._set(this.current + 1 < this.total ? this.current + 1 : this.total)
        },
        last: function() {
            return this._set(this.total)
        },
        "goto": function(b) {
            return this._set(b > this.total ? this.total : 1 > b ? 1 : b)
        },
        prevPages: function() {
            var b = this.$pagination.children("li.footable-page.visible:first").data("page") - 1;
            this._setVisible(b, !0), this._setNavigation(!1)
        },
        nextPages: function() {
            var b = this.$pagination.children("li.footable-page.visible:last").data("page") + 1;
            this._setVisible(b, !1), this._setNavigation(!1)
        },
        pageSize: function(b) {
            return b = parseInt(b), isNaN(b) ? this.size : (this.size = b, this.total = Math.ceil(this.ft.rows.all.length / this.size), c.is.jq(this.$wrapper) && (this.$container.is("td") ? this.$row.remove() : this.$wrapper.remove()), this.$create(), void this.ft.draw())
        },
        _set: function(f) {
            var b = this,
                a = new c.Pager(b.total, b.current, b.size, f, f > b.current);
            return b.ft.raise("before.ft.paging", [a]).then(function() {
                return a.page = a.page > a.total ? a.total : a.page, a.page = a.page < 1 ? 1 : a.page, b.current == f ? d.when() : (b.previous = b.current, b.current = a.page, b.ft.draw().then(function() {
                    b.ft.raise("after.ft.paging", [a])
                }))
            })
        },
        _createLinks: function() {
            if (this._createdLinks !== this.total) {
                var a = this,
                    j = a.total > 1,
                    i = function(e, k, f) {
                        return d("<li/>", {
                            "class": f
                        }).attr("data-page", e).append(d("<a/>", {
                            "class": "footable-page-link",
                            href: "#"
                        }).data("page", e).html(k))
                    };
                a.$pagination.empty(), j && (a.$pagination.append(i("first", a.strings.first, "footable-page-nav")), a.$pagination.append(i("prev", a.strings.prev, "footable-page-nav")), a.limit > 0 && a.limit < a.total && a.$pagination.append(i("prev-limit", a.strings.prevPages, "footable-page-nav")));
                for (var h, g = 0; g < a.total; g++) {
                    h = i(g + 1, g + 1, "footable-page"), a.$pagination.append(h)
                }
                j && (a.limit > 0 && a.limit < a.total && a.$pagination.append(i("next-limit", a.strings.nextPages, "footable-page-nav")), a.$pagination.append(i("next", a.strings.next, "footable-page-nav")), a.$pagination.append(i("last", a.strings.last, "footable-page-nav"))), a._createdLinks = a.total
            }
        },
        _setNavigation: function(b) {
            1 == this.current ? this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled") : this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"), this.current == this.total ? this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled") : this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"), 1 == (this.$pagination.children("li.footable-page.visible:first").data("page") || 1) ? this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"), (this.$pagination.children("li.footable-page.visible:last").data("page") || this.limit) == this.total ? this.$pagination.children('li[data-page="next-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"), this.limit > 0 && this.total < this.limit ? this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", "none") : this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", ""), b && this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="' + this.current + '"]').addClass("active")
        },
        _setVisible: function(f, e) {
            if (this.limit > 0 && this.total > this.limit) {
                if (!this.$pagination.children('li.footable-page[data-page="' + f + '"]').hasClass("visible")) {
                    var h = 0,
                        g = 0;
                    1 == e ? (g = f > this.total ? this.total : f, h = g - this.limit) : (h = 1 > f ? 0 : f - 1, g = h + this.limit), 0 > h && (h = 0, g = this.limit > this.total ? this.total : this.limit), g > this.total && (g = this.total, h = this.total - this.limit < 0 ? 0 : this.total - this.limit), this.$pagination.children("li.footable-page").removeClass("visible").slice(h, g).addClass("visible")
                }
            } else {
                this.$pagination.children("li.footable-page").removeClass("visible").slice(0, this.total).addClass("visible")
            }
        },
        _onPageClicked: function(a) {
            if (a.preventDefault(), !d(a.target).closest("li").is(".active,.disabled")) {
                var f = a.data.self,
                    e = d(this).data("page");
                switch (e) {
                    case "first":
                        return void f.first();
                    case "prev":
                        return void f.prev();
                    case "next":
                        return void f.next();
                    case "last":
                        return void f.last();
                    case "prev-limit":
                        return void f.prevPages();
                    case "next-limit":
                        return void f.nextPages();
                    default:
                        return void f._set(e)
                }
            }
        }
    }), c.components.register("paging", c.Paging, 400)
}(jQuery, FooTable),
function(b) {
    b.Defaults.prototype.paging = {
        enabled: !1,
        countFormat: "{CP} of {TP}",
        current: 1,
        limit: 5,
        position: "center",
        size: 10,
        container: null,
        strings: {
            first: "&laquo;",
            prev: "&lsaquo;",
            next: "&rsaquo;",
            last: "&raquo;",
            prevPages: "...",
            nextPages: "..."
        }
    }
}(FooTable),
function(b) {
    b.Table.prototype.gotoPage = function(a) {
        return this.use(b.Paging)["goto"](a)
    }, b.Table.prototype.nextPage = function() {
        return this.use(b.Paging).next()
    }, b.Table.prototype.prevPage = function() {
        return this.use(b.Paging).prev()
    }, b.Table.prototype.firstPage = function() {
        return this.use(b.Paging).first()
    }, b.Table.prototype.lastPage = function() {
        return this.use(b.Paging).last()
    }, b.Table.prototype.nextPages = function() {
        return this.use(b.Paging).nextPages()
    }, b.Table.prototype.prevPages = function() {
        return this.use(b.Paging).prevPages()
    }, b.Table.prototype.pageSize = function(a) {
        return this.use(b.Paging).pageSize(a)
    }
}(FooTable),
function(d, c) {
    c.Editing = c.Component.extend({
        construct: function(a) {
            this._super(a, a.o.editing.enabled), this.pageToNew = a.o.editing.pageToNew, this.alwaysShow = a.o.editing.alwaysShow, this.column = d.extend(!0, {}, a.o.editing.column, {
                visible: this.alwaysShow
            }), this.position = a.o.editing.position, this.showText = a.o.editing.showText, this.hideText = a.o.editing.hideText, this.addText = a.o.editing.addText, this.editText = a.o.editing.editText, this.deleteText = a.o.editing.deleteText, this.viewText = a.o.editing.viewText, this.allowAdd = a.o.editing.allowAdd, this.allowEdit = a.o.editing.allowEdit, this.allowDelete = a.o.editing.allowDelete, this.allowView = a.o.editing.allowView, this._$buttons = null, this.callbacks = {
                addRow: c.checkFnValue(this, a.o.editing.addRow),
                editRow: c.checkFnValue(this, a.o.editing.editRow),
                deleteRow: c.checkFnValue(this, a.o.editing.deleteRow),
                viewRow: c.checkFnValue(this, a.o.editing.viewRow)
            }
        },
        preinit: function(b) {
            var a = this;
            this.ft.raise("preinit.ft.editing", [b]).then(function() {
                if (a.ft.$el.hasClass("footable-editing") && (a.enabled = !0), a.enabled = c.is["boolean"](b.editing) ? b.editing : a.enabled, a.enabled) {
                    if (a.pageToNew = c.is["boolean"](b.editingPageToNew) ? b.editingPageToNew : a.pageToNew, a.alwaysShow = c.is["boolean"](b.editingAlwaysShow) ? b.editingAlwaysShow : a.alwaysShow, a.position = c.is.string(b.editingPosition) ? b.editingPosition : a.position, a.showText = c.is.string(b.editingShowText) ? b.editingShowText : a.showText, a.hideText = c.is.string(b.editingHideText) ? b.editingHideText : a.hideText, a.addText = c.is.string(b.editingAddText) ? b.editingAddText : a.addText, a.editText = c.is.string(b.editingEditText) ? b.editingEditText : a.editText, a.deleteText = c.is.string(b.editingDeleteText) ? b.editingDeleteText : a.deleteText, a.viewText = c.is.string(b.editingViewText) ? b.editingViewText : a.viewText, a.allowAdd = c.is["boolean"](b.editingAllowAdd) ? b.editingAllowAdd : a.allowAdd, a.allowEdit = c.is["boolean"](b.editingAllowEdit) ? b.editingAllowEdit : a.allowEdit, a.allowDelete = c.is["boolean"](b.editingAllowDelete) ? b.editingAllowDelete : a.allowDelete, a.allowView = c.is["boolean"](b.editingAllowView) ? b.editingAllowView : a.allowView, a.column = new c.EditingColumn(a.ft, a, d.extend(!0, {}, a.column, b.editingColumn, {
                            visible: a.alwaysShow
                        })), a.ft.$el.hasClass("footable-editing-left") && (a.position = "left"), a.ft.$el.hasClass("footable-editing-right") && (a.position = "right"), "right" === a.position) {
                        a.column.index = a.ft.columns.array.length
                    } else {
                        a.column.index = 0;
                        for (var h = 0, g = a.ft.columns.array.length; g > h; h++) {
                            a.ft.columns.array[h].index += 1
                        }
                    }
                    a.ft.columns.array.push(a.column), a.ft.columns.array.sort(function(f, e) {
                        return f.index - e.index
                    }), a.callbacks.addRow = c.checkFnValue(a, b.editingAddRow, a.callbacks.addRow), a.callbacks.editRow = c.checkFnValue(a, b.editingEditRow, a.callbacks.editRow), a.callbacks.deleteRow = c.checkFnValue(a, b.editingDeleteRow, a.callbacks.deleteRow), a.callbacks.viewRow = c.checkFnValue(a, b.editingViewRow, a.callbacks.viewRow)
                }
            }, function() {
                a.enabled = !1
            })
        },
        init: function() {
            var b = this;
            this.ft.raise("init.ft.editing").then(function() {
                b.$create()
            }, function() {
                b.enabled = !1
            })
        },
        destroy: function() {
            var b = this;
            this.ft.raise("destroy.ft.editing").then(function() {
                b.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove()
            })
        },
        $create: function() {
            var a = this,
                f = "right" === a.position ? "footable-editing-right" : "footable-editing-left";
            a.ft.$el.addClass("footable-editing").addClass(f).on("click.ft.editing", ".footable-show", {
                self: a
            }, a._onShowClick).on("click.ft.editing", ".footable-hide", {
                self: a
            }, a._onHideClick).on("click.ft.editing", ".footable-edit", {
                self: a
            }, a._onEditClick).on("click.ft.editing", ".footable-delete", {
                self: a
            }, a._onDeleteClick).on("click.ft.editing", ".footable-view", {
                self: a
            }, a._onViewClick).on("click.ft.editing", ".footable-add", {
                self: a
            }, a._onAddClick), a.$cell = d("<td/>").attr("colspan", a.ft.columns.visibleColspan).append(a.$buttonShow()), a.allowAdd && a.$cell.append(a.$buttonAdd()), a.$cell.append(a.$buttonHide()), a.alwaysShow && a.ft.$el.addClass("footable-editing-always-show"), a.allowAdd || a.ft.$el.addClass("footable-editing-no-add"), a.allowEdit || a.ft.$el.addClass("footable-editing-no-edit"), a.allowDelete || a.ft.$el.addClass("footable-editing-no-delete"), a.allowView || a.ft.$el.addClass("footable-editing-no-view");
            var e = a.ft.$el.children("tfoot");
            0 == e.length && (e = d("<tfoot/>"), a.ft.$el.append(e)), a.$row = d("<tr/>", {
                "class": "footable-editing"
            }).append(a.$cell).appendTo(e)
        },
        $buttonShow: function() {
            return '<button type="button" class="btn btn-primary footable-show">' + this.showText + "</button>"
        },
        $buttonHide: function() {
            return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + "</button>"
        },
        $buttonAdd: function() {
            return '<button type="button" class="btn btn-primary footable-add">' + this.addText + "</button> "
        },
        $buttonEdit: function() {
            return '<button type="button" class="btn btn-default footable-edit">' + this.editText + "</button> "
        },
        $buttonDelete: function() {
            return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + "</button>"
        },
        $buttonView: function() {
            return '<button type="button" class="btn btn-default footable-view">' + this.viewText + "</button> "
        },
        $rowButtons: function() {
            return c.is.jq(this._$buttons) ? this._$buttons.clone() : (this._$buttons = d('<div class="btn-group btn-group-xs" role="group"></div>'), this.allowView && this._$buttons.append(this.$buttonView()), this.allowEdit && this._$buttons.append(this.$buttonEdit()), this.allowDelete && this._$buttons.append(this.$buttonDelete()), this._$buttons)
        },
        draw: function() {
            this.$cell.attr("colspan", this.ft.columns.visibleColspan)
        },
        _onEditClick: function(f) {
            f.preventDefault();
            var b = f.data.self,
                a = d(this).closest("tr").data("__FooTableRow__");
            a instanceof c.Row && b.ft.raise("edit.ft.editing", [a]).then(function() {
                b.callbacks.editRow.call(b.ft, a)
            })
        },
        _onDeleteClick: function(f) {
            f.preventDefault();
            var b = f.data.self,
                a = d(this).closest("tr").data("__FooTableRow__");
            a instanceof c.Row && b.ft.raise("delete.ft.editing", [a]).then(function() {
                b.callbacks.deleteRow.call(b.ft, a)
            })
        },
        _onViewClick: function(f) {
            f.preventDefault();
            var b = f.data.self,
                a = d(this).closest("tr").data("__FooTableRow__");
            a instanceof c.Row && b.ft.raise("view.ft.editing", [a]).then(function() {
                b.callbacks.viewRow.call(b.ft, a)
            })
        },
        _onAddClick: function(f) {
            f.preventDefault();
            var e = f.data.self;
            e.ft.raise("add.ft.editing").then(function() {
                e.callbacks.addRow.call(e.ft)
            })
        },
        _onShowClick: function(f) {
            f.preventDefault();
            var e = f.data.self;
            e.ft.raise("show.ft.editing").then(function() {
                e.ft.$el.addClass("footable-editing-show"), e.column.visible = !0, e.ft.draw()
            })
        },
        _onHideClick: function(f) {
            f.preventDefault();
            var e = f.data.self;
            e.ft.raise("hide.ft.editing").then(function() {
                e.ft.$el.removeClass("footable-editing-show"), e.column.visible = !1, e.ft.draw()
            })
        }
    }), c.components.register("editing", c.Editing, 850)
}(jQuery, FooTable),
function(d, c) {
    c.EditingColumn = c.Column.extend({
        construct: function(f, e, g) {
            this._super(f, g, "editing"), this.editing = e, this.internal = !0
        },
        $create: function() {
            (this.$el = !this.virtual && c.is.jq(this.$el) ? this.$el : d("<th/>", {
                "class": "footable-editing"
            })).html(this.title)
        },
        parser: function(b) {
            if (c.is.string(b) && (b = d(d.trim(b))), c.is.element(b) && (b = d(b)), c.is.jq(b)) {
                var a = b.prop("tagName").toLowerCase();
                return "td" == a || "th" == a ? b.data("value") || b.contents() : b
            }
            return null
        },
        createCell: function(f) {
            var b = this.editing.$rowButtons(),
                a = d("<td/>").append(b);
            return c.is.jq(f.$el) && (0 === this.index ? a.prependTo(f.$el) : a.insertAfter(f.$el.children().eq(this.index - 1))), new c.Cell(this.ft, f, this, a || a.html())
        }
    }), c.columns.register("editing", c.EditingColumn)
}(jQuery, FooTable),
function(d, c) {
    c.Defaults.prototype.editing = {
        enabled: !1,
        pageToNew: !0,
        position: "right",
        alwaysShow: !1,
        addRow: function() {},
        editRow: function(b) {},
        deleteRow: function(b) {},
        viewRow: function(b) {},
        showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit Users',
        hideText: "Cancel",
        addText: "New User",
        editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
        deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
        viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
        allowAdd: !0,
        allowEdit: !0,
        allowDelete: !0,
        allowView: !1,
        column: {
            classes: "footable-editing",
            name: "editing",
            title: "",
            filterable: !1,
            sortable: !1
        }
    }
}(jQuery, FooTable),
function(d, c) {
    c.is.defined(c.Paging) && (c.Paging.prototype.unpaged = [], c.Paging.extend("predraw", function() {
        this.unpaged = this.ft.rows.array.slice(0), this._super()
    }))
}(jQuery, FooTable),
function(d, c) {
    c.Row.prototype.add = function(b) {
        b = c.is["boolean"](b) ? b : !0;
        var a = this;
        return d.Deferred(function(f) {
            var e = a.ft.rows.all.push(a) - 1;
            return b ? a.ft.draw().then(function() {
                f.resolve(e)
            }) : void f.resolve(e)
        })
    }, c.Row.prototype["delete"] = function(b) {
        b = c.is["boolean"](b) ? b : !0;
        var a = this;
        return d.Deferred(function(f) {
            var g = a.ft.rows.all.indexOf(a);
            return c.is.number(g) && g >= 0 && g < a.ft.rows.all.length && (a.ft.rows.all.splice(g, 1), b) ? a.ft.draw().then(function() {
                f.resolve(a)
            }) : void f.resolve(a)
        })
    }, c.is.defined(c.Paging) && c.Row.extend("add", function(b) {
        b = c.is["boolean"](b) ? b : !0;
        var j, i = this,
            h = this._super(b),
            g = i.ft.use(c.Editing);
        return g && g.pageToNew && (j = i.ft.use(c.Paging)) && b ? h.then(function() {
            var f = j.unpaged.indexOf(i),
                e = Math.ceil((f + 1) / j.size);
            return j.current !== e ? j["goto"](e) : void 0
        }) : h
    }), c.is.defined(c.Sorting) && c.Row.extend("val", function(b, h) {
        h = c.is["boolean"](h) ? h : !0;
        var g = this._super(b);
        if (!c.is.hash(b)) {
            return g
        }
        var f = this;
        return h && f.ft.draw().then(function() {
            var e, k = f.ft.use(c.Editing);
            if (c.is.defined(c.Paging) && k && k.pageToNew && (e = f.ft.use(c.Paging))) {
                var j = e.unpaged.indexOf(f),
                    i = Math.ceil((j + 1) / e.size);
                if (e.current !== i) {
                    return e["goto"](i)
                }
            }
        }), g
    })
}(jQuery, FooTable),
function(b) {
    b.Rows.prototype.add = function(a, f) {
        var e = a;
        b.is.hash(a) && (e = new FooTable.Row(this.ft, this.ft.columns.array, a)), e instanceof FooTable.Row && e.add(f)
    }, b.Rows.prototype.update = function(a, j, i) {
        var h = this.ft.rows.all.length,
            g = a;
        b.is.number(a) && a >= 0 && h > a && (g = this.ft.rows.all[a]), g instanceof FooTable.Row && b.is.hash(j) && g.val(j, i)
    }, b.Rows.prototype["delete"] = function(a, h) {
        var g = this.ft.rows.all.length,
            f = a;
        b.is.number(a) && a >= 0 && g > a && (f = this.ft.rows.all[a]), f instanceof FooTable.Row && f["delete"](h)
    }
}(FooTable),
function(f, e) {
    var h = 0,
        g = function(j) {
            var i, l, k = 2166136261;
            for (i = 0, l = j.length; l > i; i++) {
                k ^= j.charCodeAt(i), k += (k << 1) + (k << 4) + (k << 7) + (k << 8) + (k << 24)
            }
            return k >>> 0
        }(location.origin + location.pathname);
    e.State = e.Component.extend({
        construct: function(b) {
            this._super(b, b.o.state.enabled), this._key = "1", this.key = this._key + (e.is.string(b.o.state.key) ? b.o.state.key : this._uid()), this.filtering = e.is["boolean"](b.o.state.filtering) ? b.o.state.filtering : !0, this.paging = e.is["boolean"](b.o.state.paging) ? b.o.state.paging : !0, this.sorting = e.is["boolean"](b.o.state.sorting) ? b.o.state.sorting : !0
        },
        preinit: function(b) {
            var d = this;
            this.ft.raise("preinit.ft.state", [b]).then(function() {
                d.enabled = e.is["boolean"](b.state) ? b.state : d.enabled, d.enabled && (d.key = d._key + (e.is.string(b.stateKey) ? b.stateKey : d.key), d.filtering = e.is["boolean"](b.stateFiltering) ? b.stateFiltering : d.filtering, d.paging = e.is["boolean"](b.statePaging) ? b.statePaging : d.paging, d.sorting = e.is["boolean"](b.stateSorting) ? b.stateSorting : d.sorting)
            }, function() {
                d.enabled = !1
            })
        },
        get: function(b) {
            return JSON.parse(localStorage.getItem(this.key + ":" + b))
        },
        set: function(d, c) {
            localStorage.setItem(this.key + ":" + d, JSON.stringify(c))
        },
        remove: function(b) {
            localStorage.removeItem(this.key + ":" + b)
        },
        read: function() {
            this.ft.execute(!1, !0, "readState")
        },
        write: function() {
            this.ft.execute(!1, !0, "writeState")
        },
        clear: function() {
            this.ft.execute(!1, !0, "clearState")
        },
        _uid: function() {
            var b = this.ft.$el.attr("id");
            return g + "_" + (e.is.string(b) ? b : ++h)
        }
    }), e.components.register("state", e.State, 700)
}(jQuery, FooTable),
function(b) {
    b.Component.prototype.readState = function() {}, b.Component.prototype.writeState = function() {}, b.Component.prototype.clearState = function() {}
}(FooTable),
function(b) {
    b.Defaults.prototype.state = {
        enabled: !1,
        filtering: !0,
        paging: !0,
        sorting: !0,
        key: null
    }
}(FooTable),
function(b) {
    b.Filtering && (b.Filtering.prototype.readState = function() {
        if (this.ft.state.filtering) {
            var a = this.ft.state.get("filtering");
            b.is.hash(a) && !b.is.emptyArray(a.filters) && (this.filters = this.ensure(a.filters))
        }
    }, b.Filtering.prototype.writeState = function() {
        if (this.ft.state.filtering) {
            var a = b.arr.map(this.filters, function(c) {
                return {
                    name: c.name,
                    query: c.query instanceof b.Query ? c.query.val() : c.query,
                    columns: b.arr.map(c.columns, function(d) {
                        return d.name
                    }),
                    hidden: c.hidden,
                    space: c.space,
                    connectors: c.connectors,
                    ignoreCase: c.ignoreCase
                }
            });
            this.ft.state.set("filtering", {
                filters: a
            })
        }
    }, b.Filtering.prototype.clearState = function() {
        this.ft.state.filtering && this.ft.state.remove("filtering")
    })
}(FooTable),
function(b) {
    b.Paging && (b.Paging.prototype.readState = function() {
        if (this.ft.state.paging) {
            var a = this.ft.state.get("paging");
            b.is.hash(a) && (this.current = a.current, this.size = a.size)
        }
    }, b.Paging.prototype.writeState = function() {
        this.ft.state.paging && this.ft.state.set("paging", {
            current: this.current,
            size: this.size
        })
    }, b.Paging.prototype.clearState = function() {
        this.ft.state.paging && this.ft.state.remove("paging")
    })
}(FooTable),
function(b) {
    b.Sorting && (b.Sorting.prototype.readState = function() {
        if (this.ft.state.sorting) {
            var a = this.ft.state.get("sorting");
            if (b.is.hash(a)) {
                var d = this.ft.columns.get(a.column);
                d instanceof b.Column && (this.column = d, this.column.direction = a.direction)
            }
        }
    }, b.Sorting.prototype.writeState = function() {
        this.ft.state.sorting && this.column instanceof b.Column && this.ft.state.set("sorting", {
            column: this.column.name,
            direction: this.column.direction
        })
    }, b.Sorting.prototype.clearState = function() {
        this.ft.state.sorting && this.ft.state.remove("sorting")
    })
}(FooTable),
function(b) {
    b.Table.extend("_construct", function(c) {
        return this.state = this.use(FooTable.State), this._super(c)
    }), b.Table.extend("_preinit", function() {
        var c = this;
        return c._super().then(function() {
            c.state.enabled && c.state.read()
        })
    }), b.Table.extend("draw", function() {
        var c = this;
        return c._super().then(function() {
            c.state.enabled && c.state.write()
        })
    })
}(FooTable),
function(d, c) {
    c.Export = c.Component.extend({
        construct: function(b) {
            this._super(b, !0), this.snapshot = []
        },
        predraw: function() {
            this.snapshot = this.ft.rows.array.slice(0)
        },
        columns: function() {
            var b = [];
            return c.arr.each(this.ft.columns.array, function(a) {
                a.internal || b.push({
                    type: a.type,
                    name: a.name,
                    title: a.title,
                    visible: a.visible,
                    hidden: a.hidden,
                    classes: a.classes,
                    style: a.style
                })
            }), b
        },
        rows: function(b) {
            b = c.is["boolean"](b) ? b : !1;
            var f = b ? this.ft.rows.all : this.snapshot,
                e = [];
            return c.arr.each(f, function(g) {
                e.push(g.val())
            }), e
        },
        json: function(b) {
            return JSON.parse(JSON.stringify({
                columns: this.columns(),
                rows: this.rows(b)
            }))
        },
        csv: function(b) {
            var l, k, j = "",
                i = this.columns();
            c.arr.each(i, function(f, e) {
                k = '"' + f.title.replace(/"/g, '""') + '"', j += 0 === e ? k : "," + k
            }), j += "\n";
            var h = b ? this.ft.rows.all : this.snapshot;
            return c.arr.each(h, function(e) {
                c.arr.each(e.cells, function(g, f) {
                    g.column.internal || (l = g.column.stringify.call(g.column, g.value, g.ft.o, g.row.value), k = '"' + l.replace(/"/g, '""') + '"', j += 0 === f ? k : "," + k)
                }), j += "\n"
            }), j
        }
    }), c.components.register("export", c.Export, 490)
}(jQuery, FooTable),
function(b) {
    b.Column.prototype.__export_define__ = function(a) {
        this.stringify = b.checkFnValue(this, a.stringify, this.stringify)
    }, b.Column.extend("define", function(c) {
        this._super(c), this.__export_define__(c)
    }), b.Column.prototype.stringify = function(e, d, f) {
        return e + ""
    }, b.is.defined(b.DateColumn) && (b.DateColumn.prototype.stringify = function(a, f, e) {
        return b.is.object(a) && b.is["boolean"](a._isAMomentObject) && a.isValid() ? a.format(this.formatString) : ""
    }), b.ObjectColumn.prototype.stringify = function(a, f, e) {
        return b.is.object(a) ? JSON.stringify(a) : ""
    }, b.ArrayColumn.prototype.stringify = function(a, f, e) {
        return b.is.array(a) ? JSON.stringify(a) : ""
    }
}(FooTable),
function(b) {
    b.Table.prototype.toJSON = function(a) {
        return this.use(b.Export).json(a)
    }, b.Table.prototype.toCSV = function(a) {
        return this.use(b.Export).csv(a)
    }
}(FooTable);