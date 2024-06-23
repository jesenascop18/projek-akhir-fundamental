;(() => {
    var n = {
            267: (n) => {
                'use strict'
                n.exports = function (n) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var e = '',
                                    r = void 0 !== t[5]
                                return (
                                    t[4] &&
                                        (e += '@supports ('.concat(
                                            t[4],
                                            ') {'
                                        )),
                                    t[2] && (e += '@media '.concat(t[2], ' {')),
                                    r &&
                                        (e += '@layer'.concat(
                                            t[5].length > 0
                                                ? ' '.concat(t[5])
                                                : '',
                                            ' {'
                                        )),
                                    (e += n(t)),
                                    r && (e += '}'),
                                    t[2] && (e += '}'),
                                    t[4] && (e += '}'),
                                    e
                                )
                            }).join('')
                        }),
                        (t.i = function (n, e, r, o, i) {
                            'string' == typeof n && (n = [[null, n, void 0]])
                            var c = {}
                            if (r)
                                for (var u = 0; u < this.length; u++) {
                                    var a = this[u][0]
                                    null != a && (c[a] = !0)
                                }
                            for (var f = 0; f < n.length; f++) {
                                var l = [].concat(n[f])
                                ;(r && c[l[0]]) ||
                                    (void 0 !== i &&
                                        (void 0 === l[5] ||
                                            (l[1] = '@layer'
                                                .concat(
                                                    l[5].length > 0
                                                        ? ' '.concat(l[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(l[1], '}')),
                                        (l[5] = i)),
                                    e &&
                                        (l[2]
                                            ? ((l[1] = '@media '
                                                  .concat(l[2], ' {')
                                                  .concat(l[1], '}')),
                                              (l[2] = e))
                                            : (l[2] = e)),
                                    o &&
                                        (l[4]
                                            ? ((l[1] = '@supports ('
                                                  .concat(l[4], ') {')
                                                  .concat(l[1], '}')),
                                              (l[4] = o))
                                            : (l[4] = ''.concat(o))),
                                    t.push(l))
                            }
                        }),
                        t
                    )
                }
            },
            978: (n) => {
                'use strict'
                n.exports = function (n) {
                    return n[1]
                }
            },
            706: () => {
                function n(t) {
                    return (
                        (n =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (n) {
                                      return typeof n
                                  }
                                : function (n) {
                                      return n &&
                                          'function' == typeof Symbol &&
                                          n.constructor === Symbol &&
                                          n !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof n
                                  }),
                        n(t)
                    )
                }
                function t(n, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r]
                        ;(o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(n, e(o.key), o)
                    }
                }
                function e(t) {
                    var e = (function (t, e) {
                        if ('object' != n(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var o = r.call(t, 'string')
                            if ('object' != n(o)) return o
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            )
                        }
                        return String(t)
                    })(t)
                    return 'symbol' == n(e) ? e : e + ''
                }
                function r(n) {
                    var t = 'function' == typeof Map ? new Map() : void 0
                    return (
                        (r = function (n) {
                            if (
                                null === n ||
                                !(function (n) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(n)
                                                .indexOf('[native code]')
                                        )
                                    } catch (t) {
                                        return 'function' == typeof n
                                    }
                                })(n)
                            )
                                return n
                            if ('function' != typeof n)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            if (void 0 !== t) {
                                if (t.has(n)) return t.get(n)
                                t.set(n, e)
                            }
                            function e() {
                                return (function (n, t, e) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        )
                                    var r = [null]
                                    r.push.apply(r, t)
                                    var c = new (n.bind.apply(n, r))()
                                    return e && i(c, e.prototype), c
                                })(n, arguments, c(this).constructor)
                            }
                            return (
                                (e.prototype = Object.create(n.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(e, n)
                            )
                        }),
                        r(n)
                    )
                }
                function o() {
                    try {
                        var n = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        )
                    } catch (n) {}
                    return (o = function () {
                        return !!n
                    })()
                }
                function i(n, t) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (n, t) {
                                  return (n.__proto__ = t), n
                              }),
                        i(n, t)
                    )
                }
                function c(n) {
                    return (
                        (c = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (n) {
                                  return n.__proto__ || Object.getPrototypeOf(n)
                              }),
                        c(n)
                    )
                }
                var u = (function (e) {
                    function r() {
                        return (
                            (function (n, t) {
                                if (!(n instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    )
                            })(this, r),
                            (function (t, e, r) {
                                return (
                                    (e = c(e)),
                                    (function (t, e) {
                                        if (
                                            e &&
                                            ('object' == n(e) ||
                                                'function' == typeof e)
                                        )
                                            return e
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            )
                                        return (function (n) {
                                            if (void 0 === n)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                )
                                            return n
                                        })(t)
                                    })(
                                        t,
                                        o()
                                            ? Reflect.construct(
                                                  e,
                                                  r || [],
                                                  c(t).constructor
                                              )
                                            : e.apply(t, r)
                                    )
                                )
                            })(this, r)
                        )
                    }
                    return (
                        (function (n, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            ;(n.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: n,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(n, 'prototype', {
                                    writable: !1,
                                }),
                                t && i(n, t)
                        })(r, e),
                        (u = r),
                        (a = [
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.innerHTML =
                                        '\n        <div class="footer">    \n            <p> Notes App Jeasen </p>\n        </div>'
                                },
                            },
                        ]) && t(u.prototype, a),
                        Object.defineProperty(u, 'prototype', { writable: !1 }),
                        u
                    )
                    var u, a
                })(r(HTMLElement))
                customElements.define('footer-custom', u)
            },
            356: () => {
                function n(t) {
                    return (
                        (n =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (n) {
                                      return typeof n
                                  }
                                : function (n) {
                                      return n &&
                                          'function' == typeof Symbol &&
                                          n.constructor === Symbol &&
                                          n !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof n
                                  }),
                        n(t)
                    )
                }
                function t(n, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r]
                        ;(o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(n, e(o.key), o)
                    }
                }
                function e(t) {
                    var e = (function (t, e) {
                        if ('object' != n(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var o = r.call(t, 'string')
                            if ('object' != n(o)) return o
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            )
                        }
                        return String(t)
                    })(t)
                    return 'symbol' == n(e) ? e : e + ''
                }
                function r(n) {
                    var t = 'function' == typeof Map ? new Map() : void 0
                    return (
                        (r = function (n) {
                            if (
                                null === n ||
                                !(function (n) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(n)
                                                .indexOf('[native code]')
                                        )
                                    } catch (t) {
                                        return 'function' == typeof n
                                    }
                                })(n)
                            )
                                return n
                            if ('function' != typeof n)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            if (void 0 !== t) {
                                if (t.has(n)) return t.get(n)
                                t.set(n, e)
                            }
                            function e() {
                                return (function (n, t, e) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        )
                                    var r = [null]
                                    r.push.apply(r, t)
                                    var c = new (n.bind.apply(n, r))()
                                    return e && i(c, e.prototype), c
                                })(n, arguments, c(this).constructor)
                            }
                            return (
                                (e.prototype = Object.create(n.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(e, n)
                            )
                        }),
                        r(n)
                    )
                }
                function o() {
                    try {
                        var n = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        )
                    } catch (n) {}
                    return (o = function () {
                        return !!n
                    })()
                }
                function i(n, t) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (n, t) {
                                  return (n.__proto__ = t), n
                              }),
                        i(n, t)
                    )
                }
                function c(n) {
                    return (
                        (c = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (n) {
                                  return n.__proto__ || Object.getPrototypeOf(n)
                              }),
                        c(n)
                    )
                }
                var u = (function (e) {
                    function r() {
                        return (
                            (function (n, t) {
                                if (!(n instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    )
                            })(this, r),
                            (function (t, e, r) {
                                return (
                                    (e = c(e)),
                                    (function (t, e) {
                                        if (
                                            e &&
                                            ('object' == n(e) ||
                                                'function' == typeof e)
                                        )
                                            return e
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            )
                                        return (function (n) {
                                            if (void 0 === n)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                )
                                            return n
                                        })(t)
                                    })(
                                        t,
                                        o()
                                            ? Reflect.construct(
                                                  e,
                                                  r || [],
                                                  c(t).constructor
                                              )
                                            : e.apply(t, r)
                                    )
                                )
                            })(this, r)
                        )
                    }
                    return (
                        (function (n, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            ;(n.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: n,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(n, 'prototype', {
                                    writable: !1,
                                }),
                                t && i(n, t)
                        })(r, e),
                        (u = r),
                        (a = [
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.innerHTML =
                                        '\n        <input class=\'input-form\' name="submit-button" type="submit" value="Submit">\n        '
                                },
                            },
                        ]) && t(u.prototype, a),
                        Object.defineProperty(u, 'prototype', { writable: !1 }),
                        u
                    )
                    var u, a
                })(r(HTMLElement))
                customElements.define('submit-button', u)
            },
            897: () => {
                function n(t) {
                    return (
                        (n =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (n) {
                                      return typeof n
                                  }
                                : function (n) {
                                      return n &&
                                          'function' == typeof Symbol &&
                                          n.constructor === Symbol &&
                                          n !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof n
                                  }),
                        n(t)
                    )
                }
                function t(n, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r]
                        ;(o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(n, e(o.key), o)
                    }
                }
                function e(t) {
                    var e = (function (t, e) {
                        if ('object' != n(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var o = r.call(t, 'string')
                            if ('object' != n(o)) return o
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.'
                            )
                        }
                        return String(t)
                    })(t)
                    return 'symbol' == n(e) ? e : e + ''
                }
                function r(n) {
                    var t = 'function' == typeof Map ? new Map() : void 0
                    return (
                        (r = function (n) {
                            if (
                                null === n ||
                                !(function (n) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(n)
                                                .indexOf('[native code]')
                                        )
                                    } catch (t) {
                                        return 'function' == typeof n
                                    }
                                })(n)
                            )
                                return n
                            if ('function' != typeof n)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            if (void 0 !== t) {
                                if (t.has(n)) return t.get(n)
                                t.set(n, e)
                            }
                            function e() {
                                return (function (n, t, e) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments
                                        )
                                    var r = [null]
                                    r.push.apply(r, t)
                                    var c = new (n.bind.apply(n, r))()
                                    return e && i(c, e.prototype), c
                                })(n, arguments, c(this).constructor)
                            }
                            return (
                                (e.prototype = Object.create(n.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(e, n)
                            )
                        }),
                        r(n)
                    )
                }
                function o() {
                    try {
                        var n = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        )
                    } catch (n) {}
                    return (o = function () {
                        return !!n
                    })()
                }
                function i(n, t) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (n, t) {
                                  return (n.__proto__ = t), n
                              }),
                        i(n, t)
                    )
                }
                function c(n) {
                    return (
                        (c = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (n) {
                                  return n.__proto__ || Object.getPrototypeOf(n)
                              }),
                        c(n)
                    )
                }
                var u = (function (e) {
                    function r() {
                        return (
                            (function (n, t) {
                                if (!(n instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    )
                            })(this, r),
                            (function (t, e, r) {
                                return (
                                    (e = c(e)),
                                    (function (t, e) {
                                        if (
                                            e &&
                                            ('object' == n(e) ||
                                                'function' == typeof e)
                                        )
                                            return e
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            )
                                        return (function (n) {
                                            if (void 0 === n)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                )
                                            return n
                                        })(t)
                                    })(
                                        t,
                                        o()
                                            ? Reflect.construct(
                                                  e,
                                                  r || [],
                                                  c(t).constructor
                                              )
                                            : e.apply(t, r)
                                    )
                                )
                            })(this, r)
                        )
                    }
                    return (
                        (function (n, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            ;(n.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: n,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(n, 'prototype', {
                                    writable: !1,
                                }),
                                t && i(n, t)
                        })(r, e),
                        (u = r),
                        (a = [
                            {
                                key: 'connectedCallback',
                                value: function () {
                                    this.innerHTML =
                                        '\n        <h1>Notes App</h1>\n        '
                                },
                            },
                        ]) && t(u.prototype, a),
                        Object.defineProperty(u, 'prototype', { writable: !1 }),
                        u
                    )
                    var u, a
                })(r(HTMLElement))
                customElements.define('title-bar', u)
            },
            106: (n, t, e) => {
                'use strict'
                e.d(t, { A: () => u })
                var r = e(978),
                    o = e.n(r),
                    i = e(267),
                    c = e.n(i)()(o())
                c.push([
                    n.id,
                    "html,\nbody {\n    margin: 0px;\n    padding: 0px;\n    background-color: #e9f4f6;\n    height: 100%;\n}\n\n.loading-screen {\n    display: none;\n    position: fixed;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: white;\n    text-align: center;\n    font-size: 2em;\n    line-height: 100vh;\n}\n\nmain {\n    flex: 1;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nnav {\n    background-color: #43567f;\n    color: #e9f4f6;\n    font-family: 'Outfit';\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input-form {\n    width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 15px;\n}\n\ninput[name='note-title'],\ntextarea[name='note-text'] {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\n/* Style for the submit button */\ninput[name='submit-button'] {\n    background-color: #77d4e4;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 4px;\n    margin-top: 30px;\n    cursor: pointer;\n}\n\n/* Add focus styles for input fields */\ninput[name='note-title']:focus,\ntextarea[name='note-text']:focus {\n    outline: none;\n    border-color: #3cbc8d;\n    box-shadow: 0 0 5px rgba(60, 188, 141, 0.5);\n}\n\n#listNote {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: auto;\n    flex: 2;\n    justify-content: center;\n    justify-items: center;\n    align-items: baseline;\n    background-color: #e9f4f6;\n}\n\n.note-item {\n    width: 200px;\n    height: 150px;\n    margin: 10px;\n    padding: 10px;\n    background-color: #43567f;\n    border-radius: 10px;\n    color: white;\n}\n\n.button-delete {\n    background-color: red;\n    color: white;\n    padding: 8px 12px;\n    border: none;\n    border-radius: 4px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.button-delete:hover {\n    background-color: darkred;\n}\n\n.button-archive {\n    background-color: greenyellow;\n    color: white;\n    padding: 8px 12px;\n    border: none;\n    border-radius: 4px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.button-archive:hover {\n    background-color: green;\n}\n\nmain {\n    display: flex;\n    flex-direction: row;\n}\n\nmain .new-note {\n    min-width: 200px;\n}\n\nmain .note-list .note-item {\n    width: 200px;\n    height: 150px;\n    margin: 10px;\n    padding: 10px;\n    background-color: #43567f;\n    border-radius: 10px;\n    color: white;\n}\n\nmain .new-note .note-form {\n    padding: 15px;\n    margin: 20px 20px;\n    display: flex;\n    flex-direction: column;\n    background-color: #43567f;\n    border-radius: 10px;\n    color: white;\n}\n\nnav h1 {\n    margin: 0px;\n    padding: 10px;\n}\n\nfooter {\n    background-color: #43567f;\n    color: #e9f4f6;\n    font-family: 'Outfit';\n    font-size: 0.8em;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    bottom: 0;\n    width: 100%;\n}\n",
                    '',
                ])
                const u = c
            },
            72: (n) => {
                'use strict'
                var t = []
                function e(n) {
                    for (var e = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === n) {
                            e = r
                            break
                        }
                    return e
                }
                function r(n, r) {
                    for (var i = {}, c = [], u = 0; u < n.length; u++) {
                        var a = n[u],
                            f = r.base ? a[0] + r.base : a[0],
                            l = i[f] || 0,
                            s = ''.concat(f, ' ').concat(l)
                        i[f] = l + 1
                        var p = e(s),
                            d = {
                                css: a[1],
                                media: a[2],
                                sourceMap: a[3],
                                supports: a[4],
                                layer: a[5],
                            }
                        if (-1 !== p) t[p].references++, t[p].updater(d)
                        else {
                            var y = o(d, r)
                            ;(r.byIndex = u),
                                t.splice(u, 0, {
                                    identifier: s,
                                    updater: y,
                                    references: 1,
                                })
                        }
                        c.push(s)
                    }
                    return c
                }
                function o(n, t) {
                    var e = t.domAPI(t)
                    return (
                        e.update(n),
                        function (t) {
                            if (t) {
                                if (
                                    t.css === n.css &&
                                    t.media === n.media &&
                                    t.sourceMap === n.sourceMap &&
                                    t.supports === n.supports &&
                                    t.layer === n.layer
                                )
                                    return
                                e.update((n = t))
                            } else e.remove()
                        }
                    )
                }
                n.exports = function (n, o) {
                    var i = r((n = n || []), (o = o || {}))
                    return function (n) {
                        n = n || []
                        for (var c = 0; c < i.length; c++) {
                            var u = e(i[c])
                            t[u].references--
                        }
                        for (var a = r(n, o), f = 0; f < i.length; f++) {
                            var l = e(i[f])
                            0 === t[l].references &&
                                (t[l].updater(), t.splice(l, 1))
                        }
                        i = a
                    }
                }
            },
            659: (n) => {
                'use strict'
                var t = {}
                n.exports = function (n, e) {
                    var r = (function (n) {
                        if (void 0 === t[n]) {
                            var e = document.querySelector(n)
                            if (
                                window.HTMLIFrameElement &&
                                e instanceof window.HTMLIFrameElement
                            )
                                try {
                                    e = e.contentDocument.head
                                } catch (n) {
                                    e = null
                                }
                            t[n] = e
                        }
                        return t[n]
                    })(n)
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    r.appendChild(e)
                }
            },
            540: (n) => {
                'use strict'
                n.exports = function (n) {
                    var t = document.createElement('style')
                    return (
                        n.setAttributes(t, n.attributes),
                        n.insert(t, n.options),
                        t
                    )
                }
            },
            56: (n, t, e) => {
                'use strict'
                n.exports = function (n) {
                    var t = e.nc
                    t && n.setAttribute('nonce', t)
                }
            },
            825: (n) => {
                'use strict'
                n.exports = function (n) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        }
                    var t = n.insertStyleElement(n)
                    return {
                        update: function (e) {
                            !(function (n, t, e) {
                                var r = ''
                                e.supports &&
                                    (r += '@supports ('.concat(
                                        e.supports,
                                        ') {'
                                    )),
                                    e.media &&
                                        (r += '@media '.concat(e.media, ' {'))
                                var o = void 0 !== e.layer
                                o &&
                                    (r += '@layer'.concat(
                                        e.layer.length > 0
                                            ? ' '.concat(e.layer)
                                            : '',
                                        ' {'
                                    )),
                                    (r += e.css),
                                    o && (r += '}'),
                                    e.media && (r += '}'),
                                    e.supports && (r += '}')
                                var i = e.sourceMap
                                i &&
                                    'undefined' != typeof btoa &&
                                    (r +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(i)
                                                    )
                                                )
                                            ),
                                            ' */'
                                        )),
                                    t.styleTagTransform(r, n, t.options)
                            })(t, n, e)
                        },
                        remove: function () {
                            !(function (n) {
                                if (null === n.parentNode) return !1
                                n.parentNode.removeChild(n)
                            })(t)
                        },
                    }
                }
            },
            113: (n) => {
                'use strict'
                n.exports = function (n, t) {
                    if (t.styleSheet) t.styleSheet.cssText = n
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild)
                        t.appendChild(document.createTextNode(n))
                    }
                }
            },
        },
        t = {}
    function e(r) {
        var o = t[r]
        if (void 0 !== o) return o.exports
        var i = (t[r] = { id: r, exports: {} })
        return n[r](i, i.exports, e), i.exports
    }
    ;(e.n = (n) => {
        var t = n && n.__esModule ? () => n.default : () => n
        return e.d(t, { a: t }), t
    }),
        (e.d = (n, t) => {
            for (var r in t)
                e.o(t, r) &&
                    !e.o(n, r) &&
                    Object.defineProperty(n, r, { enumerable: !0, get: t[r] })
        }),
        (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
        (e.nc = void 0),
        (() => {
            'use strict'
            var n,
                t,
                r,
                o,
                i,
                c,
                u = e(72),
                a = e.n(u),
                f = e(825),
                l = e.n(f),
                s = e(659),
                p = e.n(s),
                d = e(56),
                y = e.n(d),
                b = e(540),
                m = e.n(b),
                v = e(113),
                h = e.n(v),
                g = e(106),
                w = {}
            ;(w.styleTagTransform = h()),
                (w.setAttributes = y()),
                (w.insert = p().bind(null, 'head')),
                (w.domAPI = l()),
                (w.insertStyleElement = m()),
                a()(g.A, w),
                g.A && g.A.locals && g.A.locals,
                e(356),
                e(897),
                e(706),
                (n = 'https://notes-api.dicoding.dev/v2'),
                (t = function () {
                    fetch(''.concat(n, '/notes'), { method: 'GET' })
                        .then(function (n) {
                            return n.json()
                        })
                        .then(function (n) {
                            n.error ? o(n.message) : r(n.data)
                        })
                        .catch(function (n) {
                            o(n)
                        })
                }),
                (r = function (e) {
                    console.log('Rendering notes:', e)
                    var r = document.querySelector('#listNote')
                    ;(r.innerHTML = ''),
                        e.forEach(function (n) {
                            var t = document.createElement('div')
                            ;(t.innerHTML =
                                '\n            <div class="note-item">\n                <h5>'
                                    .concat(
                                        n.title,
                                        '</h5>\n                <p>'
                                    )
                                    .concat(
                                        n.body,
                                        '</p>\n                <button type="button" class="button-delete" id="'
                                    )
                                    .concat(
                                        n.id,
                                        '">Hapus</button>\n                <button type="button" class="button-archive" id="'
                                    )
                                    .concat(
                                        n.id,
                                        '">Archive</button>\n\n            </div>\n                '
                                    )),
                                r.appendChild(t)
                        }),
                        document
                            .querySelectorAll('.button-delete')
                            .forEach(function (e) {
                                e.addEventListener('click', function (e) {
                                    var r = e.target.id
                                    i(),
                                        setTimeout(function () {
                                            !(function (e) {
                                                fetch(
                                                    ''
                                                        .concat(n, '/notes/')
                                                        .concat(e),
                                                    { method: 'DELETE' }
                                                )
                                                    .then(function (n) {
                                                        return n.json()
                                                    })
                                                    .then(function (n) {
                                                        o(n.message), t()
                                                    })
                                                    .catch(function (n) {
                                                        o(n)
                                                    })
                                            })(r),
                                                c()
                                        }, 2e3)
                                })
                            }),
                        document
                            .querySelectorAll('.button-archive')
                            .forEach(function (e) {
                                e.addEventListener('click', function (e) {
                                    var r = e.target.id
                                    i(),
                                        setTimeout(function () {
                                            !(function (e) {
                                                fetch(
                                                    ''
                                                        .concat(n, '/notes/')
                                                        .concat(e, '/archive'),
                                                    { method: 'POST' }
                                                )
                                                    .then(function (n) {
                                                        return n.json()
                                                    })
                                                    .then(function (n) {
                                                        o(n.message), t()
                                                    })
                                                    .catch(function (n) {
                                                        o(n)
                                                    })
                                            })(r),
                                                c()
                                        }, 2e3)
                                })
                            })
                }),
                (o = function () {
                    alert(
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'Check your internet connection'
                    )
                }),
                (i = function () {
                    document.getElementById('loading').style.display = 'block'
                }),
                (c = function () {
                    document.getElementById('loading').style.display = 'none'
                }),
                document.addEventListener('DOMContentLoaded', function () {
                    var e = document.querySelector('#title'),
                        r = document.querySelector('#note-text')
                    document
                        .querySelector('#submit')
                        .addEventListener('click', function (u) {
                            u.preventDefault()
                            var a = e.value.trim(),
                                f = r.value.trim()
                            if (a && f) {
                                var l = { title: a, body: f }
                                console.log('Creating note:', l),
                                    i(),
                                    setTimeout(function () {
                                        !(function (e) {
                                            fetch(''.concat(n, '/notes'), {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type':
                                                        'application/json',
                                                },
                                                body: JSON.stringify(e),
                                            })
                                                .then(function (n) {
                                                    return n.json()
                                                })
                                                .then(function (n) {
                                                    o(n.message),
                                                        n.error ||
                                                            (t(),
                                                            (document.querySelector(
                                                                '#title'
                                                            ).value = ''),
                                                            (document.querySelector(
                                                                '#note-text'
                                                            ).value = ''))
                                                })
                                                .catch(function (n) {
                                                    o(n)
                                                })
                                        })(l),
                                            c()
                                    }, 2e3)
                            } else o('Title and body cannot be empty')
                        }),
                        t()
                })
        })()
})()
