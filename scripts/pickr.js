! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Pickr = e() : t.Pickr = e()
}(window, function() {
    return function(t) {
        var e = {};

        function o(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
        }
        return o.m = t, o.c = e, o.d = function(t, e, n) {
            o.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) o.d(n, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return n
        }, o.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return o.d(e, "a", e), e
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.p = "dist/", o(o.s = 1)
    }([function(t, e, o) {}, function(t, e, o) {
        "use strict";
        o.r(e);
        o(0);

        function n(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t
        }
        const i = s.bind(null, "addEventListener"),
            r = s.bind(null, "removeEventListener");

        function s(t, e, o, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return e instanceof HTMLCollection || e instanceof NodeList ? e = Array.from(e) : Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]), e.forEach(e => o.forEach(o => e[t](o, i, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable
                    }))), i.forEach(function(e) {
                        n(t, e, o[e])
                    })
                }
                return t
            }({
                capture: !1
            }, r)))), Array.prototype.slice.call(arguments, 1)
        }

        function a(t) {
            const e = document.createElement("div");
            return e.innerHTML = t.trim(), e.firstElementChild
        }

        function c(t, e) {
            const o = t.getAttribute(e);
            return t.removeAttribute(e), o
        }

        function l(t) {
            return function t(e) {
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = c(e, "data-con"),
                    i = c(e, "data-key");
                i && (o[i] = e);
                const r = Array.from(e.children),
                    s = n ? o[n] = {} : o;
                for (let e of r) {
                    const o = c(e, "data-arr");
                    o ? (s[o] || (s[o] = [])).push(e) : t(e, s)
                }
                return o
            }(a(t))
        }

        function p(t) {
            let e = t.path || t.composedPath && t.composedPath();
            if (e) return e;
            let o = t.target.parentElement;
            for (e = [t.target, o]; o = o.parentElement;) e.push(o);
            return e.push(document, window), e
        }

        function u(t) {
            let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const o = t => t >= "0" && t <= "9" || "-" === t || "." === t;

            function n(n) {
                const i = t.value,
                    r = t.selectionStart;
                let s = r,
                    a = "";
                for (let t = r - 1; t > 0 && o(i[t]); t--) a = i[t] + a, s--;
                for (let t = r, e = i.length; t < e && o(i[t]); t++) a += i[t];
                if (a.length > 0 && !isNaN(a) && isFinite(a)) {
                    const o = n.deltaY < 0 ? 1 : -1,
                        r = n.ctrlKey ? 5 * o : o;
                    let c = Number(a) + r;
                    !e && c < 0 && (c = 0);
                    const l = i.substr(0, s) + c + i.substring(s + a.length, i.length),
                        p = s + String(c).length;
                    t.value = l, t.focus(), t.setSelectionRange(p, p)
                }
                n.preventDefault(), t.dispatchEvent(new Event("input"))
            }
            i(t, "focus", () => i(window, "wheel", n)), i(t, "blur", () => r(window, "wheel", n))
        }

        function d(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var o = [],
                    n = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
                } catch (t) {
                    i = !0, r = t
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        const h = Math.min,
            f = Math.max;

        function v(t, e, o) {
            t = t / 360 * 6, e /= 100, o /= 100;
            let n = Math.floor(t),
                i = t - n,
                r = o * (1 - e),
                s = o * (1 - i * e),
                a = o * (1 - (1 - i) * e),
                c = n % 6;
            return [255 * [o, s, r, r, a, o][c], 255 * [a, o, o, s, r, r][c], 255 * [r, r, a, o, o, s][c]]
        }

        function g(t, e, o) {
            let n, i, r;
            const s = h(t /= 255, e /= 255, o /= 255),
                a = f(t, e, o),
                c = a - s;
            if (0 === c) n = i = 0;
            else {
                i = c / a;
                let r = ((a - t) / 6 + c / 2) / c,
                    s = ((a - e) / 6 + c / 2) / c,
                    l = ((a - o) / 6 + c / 2) / c;
                t === a ? n = l - s : e === a ? n = 1 / 3 + r - l : o === a && (n = 2 / 3 + s - r), n < 0 ? n += 1 : n > 1 && (n -= 1)
            }
            return [360 * n, 100 * i, 100 * (r = a)]
        }

        function y(t, e, o, n) {
            return e /= 100, o /= 100, [...g(255 * (1 - h(1, (t /= 100) * (1 - (n /= 100)) + n)), 255 * (1 - h(1, e * (1 - n) + n)), 255 * (1 - h(1, o * (1 - n) + n)))]
        }

        function m(t, e, o) {
            return e /= 100, [t, 2 * (e *= (o /= 100) < .5 ? o : 1 - o) / (o + e) * 100, 100 * (o + e)]
        }

        function b(t) {
            return g(...t.match(/.{2}/g).map(t => parseInt(t, 16)))
        }

        function w(t) {
            const e = {
                    cmyk: /^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,
                    rgba: /^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
                    hsla: /^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
                    hsva: /^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
                    hex: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i
                },
                o = t => t.map(t => /^(|\d+)\.\d+|\d+$/.test(t) ? Number(t) : void 0);
            let n;
            for (let s in e)
                if (n = e[s].exec(t)) switch (s) {
                    case "cmyk": {
                        let t = d(o(n), 5),
                            e = t[1],
                            i = t[2],
                            r = t[3],
                            a = t[4];
                        if (e > 100 || i > 100 || r > 100 || a > 100) break;
                        return {
                            values: [...y(e, i, r, a), 1],
                            type: s
                        }
                    }
                    case "rgba": {
                        let t = d(o(n), 6),
                            e = t[2],
                            i = t[3],
                            r = t[4],
                            a = t[5],
                            c = void 0 === a ? 1 : a;
                        if (e > 255 || i > 255 || r > 255 || c < 0 || c > 1) break;
                        return {
                            values: [...g(e, i, r), c],
                            type: s
                        }
                    }
                    case "hex": {
                        const t = (t, e) => [t.substring(0, e), t.substring(e, t.length)];
                        let e, o = d(n, 2)[1];
                        if (3 === o.length ? o += "F" : 6 === o.length && (o += "FF"), 4 === o.length) {
                            var i = d(t(o, 3).map(t => t + t), 2);
                            o = i[0], e = i[1]
                        } else if (8 === o.length) {
                            var r = d(t(o, 6), 2);
                            o = r[0], e = r[1]
                        }
                        return e = parseInt(e, 16) / 255, {
                            values: [...b(o), e],
                            type: s
                        }
                    }
                    case "hsla": {
                        let t = d(o(n), 6),
                            e = t[2],
                            i = t[3],
                            r = t[4],
                            a = t[5],
                            c = void 0 === a ? 1 : a;
                        if (e > 360 || i > 100 || r > 100 || c < 0 || c > 1) break;
                        return {
                            values: [...m(e, i, r), c],
                            type: s
                        }
                    }
                    case "hsva": {
                        let t = d(o(n), 6),
                            e = t[2],
                            i = t[3],
                            r = t[4],
                            a = t[5],
                            c = void 0 === a ? 1 : a;
                        if (e > 360 || i > 100 || r > 100 || c < 0 || c > 1) break;
                        return {
                            values: [e, i, r, c],
                            type: s
                        }
                    }
                }
            return {
                values: null,
                type: null
            }
        }

        function _() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            const i = Math.ceil,
                r = {
                    h: t,
                    s: e,
                    v: o,
                    a: n,
                    toHSVA() {
                        const t = [r.h, r.s, r.v],
                            e = t.map(i);
                        return t.push(r.a), t.toString = (() => `hsva(${e[0]}, ${e[1]}%, ${e[2]}%, ${r.a.toFixed(1)})`), t
                    },
                    toHSLA() {
                        const t = function(t, e, o) {
                                let n = (2 - (e /= 100)) * (o /= 100) / 2;
                                return 0 !== n && (e = 1 === n ? 0 : n < .5 ? e * o / (2 * n) : e * o / (2 - 2 * n)), [t, 100 * e, 100 * n]
                            }(r.h, r.s, r.v),
                            e = t.map(i);
                        return t.push(r.a), t.toString = (() => `hsla(${e[0]}, ${e[1]}%, ${e[2]}%, ${r.a.toFixed(1)})`), t
                    },
                    toRGBA() {
                        const t = v(r.h, r.s, r.v),
                            e = t.map(i);
                        return t.push(r.a), t.toString = (() => `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${r.a.toFixed(1)})`), t
                    },
                    toCMYK() {
                        const t = function(t, e, o) {
                                const n = v(t, e, o),
                                    i = n[0] / 255,
                                    r = n[1] / 255,
                                    s = n[2] / 255;
                                let a, c, l, p;
                                return [100 * (c = 1 === (a = h(1 - i, 1 - r, 1 - s)) ? 0 : (1 - i - a) / (1 - a)), 100 * (l = 1 === a ? 0 : (1 - r - a) / (1 - a)), 100 * (p = 1 === a ? 0 : (1 - s - a) / (1 - a)), 100 * a]
                            }(r.h, r.s, r.v),
                            e = t.map(i);
                        return t.toString = (() => `cmyk(${e[0]}%, ${e[1]}%, ${e[2]}%, ${e[3]}%)`), t
                    },
                    toHEX() {
                        const t = function(t, e, o) {
                            return v(t, e, o).map(t => Math.round(t).toString(16).padStart(2, "0"))
                        }(...[r.h, r.s, r.v]);
                        return t.toString = (() => {
                            const e = r.a >= 1 ? "" : Number((255 * r.a).toFixed(0)).toString(16).toUpperCase().padStart(2, "0");
                            return `#${t.join("").toUpperCase()+e}`
                        }), t
                    },
                    clone: () => _(r.h, r.s, r.v, r.a)
                };
            return r
        }

        function k(t) {
            const e = {
                options: Object.assign({
                    lockX: !1,
                    lockY: !1,
                    onchange: () => 0
                }, t),
                _tapstart(t) {
                    i(document, ["mouseup", "touchend", "touchcancel"], e._tapstop), i(document, ["mousemove", "touchmove"], e._tapmove), t.preventDefault(), e.wrapperRect = e.options.wrapper.getBoundingClientRect(), e._tapmove(t)
                },
                _tapmove(t) {
                    const o = e.options,
                        n = e.cache,
                        i = o.element,
                        r = e.wrapperRect;
                    let s = 0,
                        a = 0;
                    if (t) {
                        const e = t && t.touches && t.touches[0];
                        s = t ? (e || t).clientX : 0, a = t ? (e || t).clientY : 0, s < r.left ? s = r.left : s > r.left + r.width && (s = r.left + r.width), a < r.top ? a = r.top : a > r.top + r.height && (a = r.top + r.height), s -= r.left, a -= r.top
                    } else n && (s = n.x, a = n.y);
                    o.lockX || (i.style.left = s - i.offsetWidth / 2 + "px"), o.lockY || (i.style.top = a - i.offsetHeight / 2 + "px"), e.cache = {
                        x: s,
                        y: a
                    }, o.onchange(s, a)
                },
                _tapstop() {
                    r(document, ["mouseup", "touchend", "touchcancel"], e._tapstop), r(document, ["mousemove", "touchmove"], e._tapmove)
                },
                trigger() {
                    e.wrapperRect = e.options.wrapper.getBoundingClientRect(), e._tapmove()
                },
                update() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.wrapperRect = e.options.wrapper.getBoundingClientRect(), e._tapmove({
                        clientX: e.wrapperRect.left + t,
                        clientY: e.wrapperRect.top + o
                    })
                },
                destroy() {
                    const t = e.options,
                        o = e._tapstart;
                    r([t.wrapper, t.element], "mousedown", o), r([t.wrapper, t.element], "touchstart", o, {
                        passive: !1
                    })
                }
            };
            e.wrapperRect = e.options.wrapper.getBoundingClientRect();
            const o = e.options,
                n = e._tapstart;
            return i([o.wrapper, o.element], "mousedown", n), i([o.wrapper, o.element], "touchstart", n, {
                passive: !1
            }), e
        }

        function A() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const e = {
                options: Object.assign({
                    onchange: () => 0,
                    className: "",
                    elements: []
                }, t),
                _ontap(t) {
                    const o = e.options;
                    o.elements.forEach(e => e.classList[t.target === e ? "add" : "remove"](o.className)), o.onchange(t)
                },
                destroy() {
                    r(e.options.elements, "click", this._ontap)
                }
            };
            return i(e.options.elements, "click", e._ontap), e
        }
        class C {
            constructor(t) {
                this.options = Object.assign({
                    useAsButton: !1,
                    disabled: !1,
                    comparison: !0,
                    components: {
                        interaction: {}
                    },
                    strings: {},
                    swatches: null,
                    default: "fff",
                    defaultRepresentation: "HEX",
                    position: "middle",
                    adjustableNumbers: !0,
                    showAlways: !1,
                    parent: void 0,
                    closeWithKey: "Escape",
                    onChange: () => 0,
                    onSave: () => 0,
                    onSwatchSelect: () => 0
                }, t), this.options.components.interaction || (this.options.components.interaction = {}), this._initializingActive = !0, this._recalc = !0, this._color = new _, this._lastColor = new _, this.options.swatches = this.options.swatches || [], this.options.swatches && (this.options.swatches = this.options.swatches.map(t => {
                    const e = w(t).values;
                    return e && new _(...e)
                }).filter(t => t)), this._preBuild(), this._buildComponents(), this._bindEvents(), this._representation = this.options.defaultRepresentation, this.setColorRepresentation(this._representation), this._finalBuild(), this._rePositioningPicker(), requestAnimationFrame(function t() {
                    if (!this._root.app.offsetParent) return requestAnimationFrame(t.bind(this));
                    this._initializingActive = !1, this.setColor(this.options.default)
                }.bind(this))
            }
            _preBuild() {
                const t = this.options;
                "string" == typeof t.el && (t.el = document.querySelector(t.el)), this._root = function(t) {
                    const e = t.components,
                        o = t.strings,
                        n = t.useAsButton,
                        i = t.swatches,
                        r = t => t ? "" : 'style="display:none" hidden',
                        s = l(`\n        <div data-key="root" class="pickr">\n        \n            ${n?"":'<div data-key="button" class="pcr-button"></div>'}\n\n            <div data-key="app" class="pcr-app">\n                <div class="pcr-selection">\n                    <div data-con="preview" class="pcr-color-preview" ${r(e.preview)}>\n                        <div data-key="lastColor" class="pcr-last-color"></div>\n                        <div data-key="currentColor" class="pcr-current-color"></div>\n                    </div>\n\n                    <div data-con="palette" class="pcr-color-palette">\n                        <div data-key="picker" class="pcr-picker"></div>\n                        <div data-key="palette" class="pcr-palette"></div>\n                    </div>\n\n                    <div data-con="hue" class="pcr-color-chooser" ${r(e.hue)}>\n                        <div data-key="picker" class="pcr-picker"></div>\n                        <div data-key="slider" class="pcr-hue pcr-slider"></div>\n                    </div>\n\n                    <div data-con="opacity" class="pcr-color-opacity" ${r(e.opacity)}>\n                        <div data-key="picker" class="pcr-picker"></div>\n                        <div data-key="slider" class="pcr-opacity pcr-slider"></div>\n                    </div>\n                </div>\n                \n                ${i&&i.length?`\n                <div class="swatches">\n                   ${i.map((t,e)=>`<div data-arr="swatches" data-color-index="${e}" style="color: ${t.toRGBA()}"></div>`).join("")}\n                </div> \n                `:""}\n\n                <div data-con="interaction" class="pcr-interaction" ${r(Object.keys(e.interaction).length)}>\n                    <input data-key="result" class="pcr-result" type="text" spellcheck="false" ${r(e.interaction.input)}>\n\n                    <input data-arr="options" class="pcr-type" data-type="HEX" value="HEX" type="button" ${r(e.interaction.hex)}>\n                    <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBa" type="button" ${r(e.interaction.rgba)}>\n                    <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLa" type="button" ${r(e.interaction.hsla)}>\n                    <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVa" type="button" ${r(e.interaction.hsva)}>\n                    <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${r(e.interaction.cmyk)}>\n\n                    <input data-key="save" class="pcr-save" value="${o.save||"Save"}" type="button" ${r(e.interaction.save)}>\n                    <input data-key="clear" class="pcr-clear" value="${o.clear||"Clear"}" type="button" ${r(e.interaction.clear)}>\n                </div>\n            </div>\n        </div>\n    `),
                        a = s.interaction;
                    return a.options.find(t => !t.hidden && !t.classList.add("active")), a.type = (() => a.options.find(t => t.classList.contains("active"))), s
                }(t), t.useAsButton && (t.parent || (t.parent = "body"), this._root.button = t.el), document.body.appendChild(this._root.root)
            }
            _finalBuild() {
                const t = this.options,
                    e = this._root;
                document.body.removeChild(e.root), t.parent && ("string" == typeof t.parent && (t.parent = document.querySelector(t.parent)), t.parent.appendChild(e.app)), t.useAsButton || t.el.parentElement.replaceChild(e.root, t.el), t.disabled && this.disable(), t.comparison || (e.button.style.transition = "none", t.useAsButton || (e.preview.lastColor.style.transition = "none")), t.showAlways ? e.app.classList.add("visible") : this.hide()
            }
            _buildComponents() {
                const t = this,
                    e = this.options.components,
                    o = {
                        palette: k({
                            element: t._root.palette.picker,
                            wrapper: t._root.palette.palette,
                            onchange(e, o) {
                                const n = t._color,
                                    i = t._root,
                                    r = t.options;
                                n.s = e / this.wrapper.offsetWidth * 100, n.v = 100 - o / this.wrapper.offsetHeight * 100, n.v < 0 && (n.v = 0);
                                const s = n.toRGBA().toString();
                                this.element.style.background = s, this.wrapper.style.background = `\n                        linear-gradient(to top, rgba(0, 0, 0, ${n.a}), transparent), \n                        linear-gradient(to left, hsla(${n.h}, 100%, 50%, ${n.a}), rgba(255, 255, 255, ${n.a}))\n                    `, r.comparison || (i.button.style.background = s, r.useAsButton || (i.preview.lastColor.style.background = s)), i.preview.currentColor.style.background = s, t._recalc && t._updateOutput(), i.button.classList.remove("clear")
                            }
                        }),
                        hue: k({
                            lockX: !0,
                            element: t._root.hue.picker,
                            wrapper: t._root.hue.slider,
                            onchange(n, i) {
                                e.hue && (t._color.h = i / this.wrapper.offsetHeight * 360, this.element.style.backgroundColor = `hsl(${t._color.h}, 100%, 50%)`, o.palette.trigger())
                            }
                        }),
                        opacity: k({
                            lockX: !0,
                            element: t._root.opacity.picker,
                            wrapper: t._root.opacity.slider,
                            onchange(o, n) {
                                e.opacity && (t._color.a = Math.round(n / this.wrapper.offsetHeight * 100) / 100, this.element.style.background = `rgba(0, 0, 0, ${t._color.a})`, t.components.palette.trigger())
                            }
                        }),
                        selectable: A({
                            elements: t._root.interaction.options,
                            className: "active",
                            onchange(e) {
                                t._representation = e.target.getAttribute("data-type").toUpperCase(), t._updateOutput()
                            }
                        })
                    };
                this.components = o
            }
            _bindEvents() {
                const t = this._root,
                    e = this.options,
                    o = [i(t.interaction.clear, "click", () => this._clearColor()), i(t.preview.lastColor, "click", () => this.setHSVA(...this._lastColor.toHSVA())), i(t.interaction.save, "click", () => {
                        !this.applyColor() && !e.showAlways && this.hide()
                    }), i(t.interaction.result, ["keyup", "input"], t => {
                        this._recalc = !1, this.setColor(t.target.value, !0) && !this._initializingActive && this.options.onChange(this._color, this), t.stopImmediatePropagation()
                    }), i([t.palette.palette, t.palette.picker, t.hue.slider, t.hue.picker, t.opacity.slider, t.opacity.picker], ["mousedown", "touchstart"], () => this._recalc = !0), i(window, "resize", () => this._rePositioningPicker)];
                if (t.swatches && o.push(i(t.swatches, "click", t => {
                        let o = t.target;
                        const n = e.swatches[Number(o.getAttribute("data-color-index"))];
                        n && (this.setHSVA(...n.toHSVA(), !0), e.onSwatchSelect(n, this))
                    })), !e.showAlways) {
                    const n = e.closeWithKey;
                    o.push(i(t.button, "click", () => this.isOpen() ? this.hide() : this.show()), i(document, "keyup", t => this.isOpen() && (t.key === n || t.code === n) && this.hide()), i(document, ["touchstart", "mousedown"], e => {
                        this.isOpen() && !p(e).some(e => e === t.app || e === t.button) && this.hide()
                    }, {
                        capture: !0
                    }))
                }
                e.adjustableNumbers && u(t.interaction.result, !1), this._eventBindings = o
            }
            _rePositioningPicker() {
                const t = this._root,
                    e = this._root.app;
                if (this.options.parent) {
                    const o = t.button.getBoundingClientRect();
                    e.style.position = "fixed", e.style.marginLeft = `${o.left}px`, e.style.marginTop = `${o.top}px`
                }
                const o = t.button.getBoundingClientRect(),
                    n = e.getBoundingClientRect(),
                    i = e.style;
                n.bottom > window.innerHeight ? i.top = `${-n.height-5}px` : o.bottom + n.height < window.innerHeight && (i.top = `${o.height+5}px`);
                const r = {
                        left: -n.width + o.width,
                        middle: -n.width / 2 + o.width / 2,
                        right: 0
                    },
                    s = parseInt(getComputedStyle(e).left, 10);
                let a = r[this.options.position];
                const c = n.left - s + a,
                    l = n.left - s + a + n.width;
                "middle" !== this.options.position && (c < 0 && -c < n.width / 2 || l > window.innerWidth && l - window.innerWidth < n.width / 2) ? a = r.middle : c < 0 ? a = r.right : l > window.innerWidth && (a = r.left), i.left = `${a}px`
            }
            _updateOutput() {
                this._root.interaction.type() && (this._root.interaction.result.value = (() => {
                    const t = "to" + this._root.interaction.type().getAttribute("data-type");
                    return "function" == typeof this._color[t] ? this._color[t]().toString() : ""
                })()), this._initializingActive || this.options.onChange(this._color, this)
            }
            applyColor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const e = this._root,
                    o = e.preview,
                    n = e.button,
                    i = this._color.toRGBA().toString();
                o.lastColor.style.background = i, this.options.useAsButton || (n.style.background = i), n.classList.remove("clear"), this._lastColor = this._color.clone(), this._initializingActive || t || this.options.onSave(this._color, this)
            }
            _clearColor() {
                const t = this._root,
                    e = this.options;
                e.useAsButton || (t.button.style.background = "rgba(255, 255, 255, 0.4)"), t.button.classList.add("clear"), e.showAlways || this.hide(), e.onChange(null, this)
            }
            destroy() {
                this._eventBindings.forEach(t => r(...t)), Object.keys(this.components).forEach(t => this.components[t].destroy())
            }
            destroyAndRemove() {
                this.destroy();
                const t = this._root.root;
                t.parentElement.removeChild(t)
            }
            hide() {
                return this._root.app.classList.remove("visible"), this
            }
            show() {
                if (!this.options.disabled) return this._root.app.classList.add("visible"), this._rePositioningPicker(), this
            }
            isOpen() {
                return this._root.app.classList.contains("visible")
            }
            setHSVA() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 360,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                const r = this._recalc;
                if (this._recalc = !1, t < 0 || t > 360 || e < 0 || e > 100 || o < 0 || o > 100 || n < 0 || n > 1) return !1;
                const s = this.components,
                    a = s.hue,
                    c = s.opacity,
                    l = s.palette,
                    p = a.options.wrapper.offsetHeight * (t / 360);
                a.update(0, p);
                const u = c.options.wrapper.offsetHeight * n;
                c.update(0, u);
                const d = l.options.wrapper,
                    h = d.offsetWidth * (e / 100),
                    f = d.offsetHeight * (1 - o / 100);
                return l.update(h, f), this._color = new _(t, e, o, n), this._recalc = r, this._recalc && this._updateOutput(), i || this.applyColor(), !0
            }
            setColor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null === t) return this._clearColor(), !0;
                const o = w(t),
                    n = o.values,
                    i = o.type;
                if (n) {
                    const t = i.toUpperCase(),
                        o = this._root.interaction.options,
                        r = o.find(e => e.getAttribute("data-type") === t);
                    if (!r.hidden)
                        for (const t of o) t.classList[t === r ? "add" : "remove"]("active");
                    return this.setHSVA(...n, e)
                }
            }
            setColorRepresentation(t) {
                return t = t.toUpperCase(), !!this._root.interaction.options.find(e => e.getAttribute("data-type") === t && !e.click())
            }
            getColorRepresentation() {
                return this._representation
            }
            getColor() {
                return this._color
            }
            getRoot() {
                return this._root
            }
            disable() {
                return this.hide(), this.options.disabled = !0, this._root.button.classList.add("disabled"), this
            }
            enable() {
                return this.options.disabled = !1, this._root.button.classList.remove("disabled"), this
            }
        }
        C.utils = {
            once: (t, e, o, n) => i(t, e, function t() {
                o.apply(this, arguments), this.removeEventListener(e, t)
            }, n),
            on: i,
            off: r,
            eventPath: p,
            createElementFromString: a,
            adjustableInputNumbers: u,
            removeAttribute: c,
            createFromTemplate: l
        }, C.create = (t => new C(t)), C.version = "0.3.6";
        e.default = C
    }]).default
});