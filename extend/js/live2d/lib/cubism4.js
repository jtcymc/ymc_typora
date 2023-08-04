! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("@pixi/math"), require("@pixi/utils"), require("@pixi/core"), require("@pixi/text"), require("@pixi/display"), require("@pixi/graphics")) : "function" == typeof define && define.amd ? define(["@pixi/math", "@pixi/utils", "@pixi/core", "@pixi/text", "@pixi/display", "@pixi/graphics"], e) : "object" == typeof exports ? exports.live2d = e(require("@pixi/math"), require("@pixi/utils"), require("@pixi/core"), require("@pixi/text"), require("@pixi/display"), require("@pixi/graphics")) : (t.PIXI = t.PIXI || {}, t.PIXI.live2d = e(t.PIXI, t.PIXI.utils, t.PIXI, t.PIXI, t.PIXI, t.PIXI))
}(window, (function(t, e, i, r, s, n) {
    return function(t) {
        var e = {};

        function i(r) {
            if (e[r]) return e[r].exports;
            var s = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var s in t) i.d(r, s, function(e) {
                    return t[e]
                }.bind(null, s));
            return r
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 167)
    }([function(t, e, i) {
        "use strict";
        i.d(e, "f", (function() {
            return r
        })), i.d(e, "b", (function() {
            return o
        })), i.d(e, "g", (function() {
            return a
        })), i.d(e, "d", (function() {
            return l
        })), i.d(e, "c", (function() {
            return u
        })), i.d(e, "a", (function() {
            return h
        })), i.d(e, "e", (function() {
            return d
        }));
        var r, s, n = i(1);

        function o(t, e, i) {
            return t < e ? e : t > i ? i : t
        }

        function a(t, e) {
            return Math.random() * (e - t) + t
        }

        function l(t, e, i, r, s) {
            const n = e[r];
            null !== n && typeof n === t && (i[s] = n)
        }

        function u(t, e, i, r, s) {
            const n = e[r];
            Array.isArray(n) && (i[s] = n.filter(e => null !== e && typeof e === t))
        }

        function h(t, e) {
            e.forEach(e => {
                Object.getOwnPropertyNames(e.prototype).forEach(i => {
                    "constructor" !== i && Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e.prototype, i))
                })
            })
        }

        function d(t) {
            let e = t.lastIndexOf("/");
            return -1 != e && (t = t.slice(0, e)), e = t.lastIndexOf("/"), -1 !== e && (t = t.slice(e + 1)), t
        }(s = r || (r = {})).log = function(t, ...e) {
            n.b.logLevel <= n.b.LOG_LEVEL_VERBOSE && console.log(`[${t}]`, ...e)
        }, s.warn = function(t, ...e) {
            n.b.logLevel <= n.b.LOG_LEVEL_WARNING && console.warn(`[${t}]`, ...e)
        }, s.error = function(t, ...e) {
            n.b.logLevel <= n.b.LOG_LEVEL_ERROR && console.error(`[${t}]`, ...e)
        }
    }, function(t, e, i) {
        "use strict";
        var r;
        i.d(e, "b", (function() {
                return r
            })), i.d(e, "a", (function() {
                return s
            })),
            function(t) {
                t.LOG_LEVEL_VERBOSE = 0, t.LOG_LEVEL_WARNING = 1, t.LOG_LEVEL_ERROR = 2, t.LOG_LEVEL_NONE = 999, t.logLevel = t.LOG_LEVEL_WARNING, t.sound = !0, t.motionSync = !0, t.motionFadingDuration = 500, t.idleMotionFadingDuration = 2e3, t.expressionFadingDuration = 500
            }(r || (r = {}));
        const s = "0.3.1"
    }, function(e, i) {
        e.exports = t
    }, function(t, i) {
        t.exports = e
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return n
        }));
        var r = i(18),
            s = i(19);
        class n {
            static load(t) {
                return Object(s.a)(this.middlewares, t).then(() => t.result)
            }
        }
        n.middlewares = [r.a.loader]
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return _
        }));
        var r = i(6),
            s = i(4),
            n = i(0),
            o = i(19),
            a = i(20);
        var l = function(t, e, i, r) {
            return new(i || (i = Promise))((function(s, n) {
                function o(t) {
                    try {
                        l(r.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function a(t) {
                    try {
                        l(r.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                        t(e)
                    }))).then(o, a)
                }
                l((r = r.apply(t, e || [])).next())
            }))
        };
        const u = "Live2DFactory",
            h = (t, e) => l(void 0, void 0, void 0, (function*() {
                if ("string" == typeof t.source) {
                    const e = yield s.a.load({
                        url: t.source,
                        type: "json",
                        target: t.live2dModel
                    });
                    e.url = t.source, t.source = e, t.live2dModel.emit("settingsJSONLoaded", e)
                }
                return e()
            })),
            d = (t, e) => l(void 0, void 0, void 0, (function*() {
                if (t.source instanceof r.f) return t.settings = t.source, e();
                if ("object" == typeof t.source) {
                    const i = _.findRuntime(t.source);
                    if (i) {
                        const r = i.createModelSettings(t.source);
                        return t.settings = r, t.live2dModel.emit("settingsLoaded", r), e()
                    }
                }
                throw new TypeError("Unknown settings format.")
            })),
            c = (t, e) => {
                if (t.settings) {
                    const i = _.findRuntime(t.settings);
                    if (i) return i.ready().then(e)
                }
                return e()
            },
            g = (t, e) => l(void 0, void 0, void 0, (function*() {
                yield e();
                const i = t.internalModel;
                if (i) {
                    const e = t.settings,
                        r = _.findRuntime(e);
                    if (r) {
                        const o = [];
                        e.pose && o.push(s.a.load({
                            settings: e,
                            url: e.pose,
                            type: "json",
                            target: i
                        }).then(e => {
                            i.pose = r.createPose(i.coreModel, e), t.live2dModel.emit("poseLoaded", i.pose)
                        }).catch(t => n.f.warn(u, "Failed to load pose.\n", t))), e.physics && o.push(s.a.load({
                            settings: e,
                            url: e.physics,
                            type: "json",
                            target: i
                        }).then(e => {
                            i.physics = r.createPhysics(i.coreModel, e), t.live2dModel.emit("physicsLoaded", i.physics)
                        }).catch(t => n.f.warn(u, "Failed to load physics.\n", t))), o.length && (yield Promise.all(o))
                    }
                }
            })),
            p = (t, e) => l(void 0, void 0, void 0, (function*() {
                if (!t.settings) throw new TypeError("Missing settings."); {
                    const i = t.live2dModel,
                        r = t.settings.textures.map(e => function(t, e = {}) {
                            var i;
                            const r = {
                                resourceOptions: {
                                    crossorigin: e.crossOrigin
                                }
                            };
                            if (a.Texture.fromURL) return a.Texture.fromURL(t, r).catch(t => {
                                if (t instanceof Error) throw t;
                                const e = new Error("Texture loading error");
                                throw e.event = t, e
                            });
                            r.resourceOptions.autoLoad = !1;
                            const s = a.Texture.from(t, r);
                            if (s.baseTexture.valid) return Promise.resolve(s);
                            const n = s.baseTexture.resource;
                            return null !== (i = n._live2d_load) && void 0 !== i || (n._live2d_load = new Promise((t, e) => {
                                const i = t => {
                                    n.source.removeEventListener("error", i);
                                    const r = new Error("Texture loading error");
                                    r.event = t, e(r)
                                };
                                n.source.addEventListener("error", i), n.load().then(() => t(s)).catch(i)
                            })), n._live2d_load
                        }(t.settings.resolveURL(e), {
                            crossOrigin: t.options.crossOrigin
                        }));
                    if (yield e(), !t.internalModel) throw new TypeError("Missing internal model.");
                    i.internalModel = t.internalModel, i.emit("modelLoaded", t.internalModel), i.textures = yield Promise.all(r), i.emit("textureLoaded", i.textures)
                }
            })),
            m = (t, e) => l(void 0, void 0, void 0, (function*() {
                const i = t.settings;
                if (i instanceof r.f) {
                    const r = _.findRuntime(i);
                    if (!r) throw new TypeError("Unknown model settings.");
                    const n = yield s.a.load({
                        settings: i,
                        url: i.moc,
                        type: "arraybuffer",
                        target: t.live2dModel
                    });
                    if (!r.isValidMoc(n)) throw new Error("Invalid moc data");
                    const o = r.createCoreModel(n);
                    return t.internalModel = r.createInternalModel(o, i, t.options), e()
                }
                throw new TypeError("Missing settings.")
            }));
        var f = function(t, e, i, r) {
            return new(i || (i = Promise))((function(s, n) {
                function o(t) {
                    try {
                        l(r.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function a(t) {
                    try {
                        l(r.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                        t(e)
                    }))).then(o, a)
                }
                l((r = r.apply(t, e || [])).next())
            }))
        };
        class _ {
            static registerRuntime(t) {
                _.runtimes.push(t), _.runtimes.sort((t, e) => e.version - t.version)
            }
            static findRuntime(t) {
                for (const e of _.runtimes)
                    if (e.test(t)) return e
            }
            static setupLive2DModel(t, e, i) {
                return f(this, void 0, void 0, (function*() {
                    const r = new Promise(e => t.once("textureLoaded", e)),
                        s = new Promise(e => t.once("modelLoaded", e)),
                        n = Promise.all([r, s]).then(() => t.emit("ready"));
                    yield Object(o.a)(_.live2DModelMiddlewares, {
                        live2dModel: t,
                        source: e,
                        options: i || {}
                    }), yield n, t.emit("load")
                }))
            }
            static loadMotion(t, e, i) {
                var r, o;
                const a = r => t.emit("motionLoadError", e, i, r);
                try {
                    const l = null === (r = t.definitions[e]) || void 0 === r ? void 0 : r[i];
                    if (!l) return Promise.resolve(void 0);
                    t.listeners("destroy").includes(_.releaseTasks) || t.once("destroy", _.releaseTasks);
                    let u = _.motionTasksMap.get(t);
                    u || (u = {}, _.motionTasksMap.set(t, u));
                    let h = u[e];
                    h || (h = [], u[e] = h);
                    const d = t.getMotionFile(l);
                    return null !== (o = h[i]) && void 0 !== o || (h[i] = s.a.load({
                        url: d,
                        settings: t.settings,
                        type: t.motionDataType,
                        target: t
                    }).then(r => {
                        var s;
                        const n = null === (s = _.motionTasksMap.get(t)) || void 0 === s ? void 0 : s[e];
                        n && delete n[i];
                        const o = t.createMotion(r, e, l);
                        return t.emit("motionLoaded", e, i, o), o
                    }).catch(e => {
                        n.f.warn(t.tag, `Failed to load motion: ${d}\n`, e), a(e)
                    })), h[i]
                } catch (r) {
                    n.f.warn(t.tag, `Failed to load motion at "${e}"[${i}]\n`, r), a(r)
                }
                return Promise.resolve(void 0)
            }
            static loadExpression(t, e) {
                var i;
                const r = i => t.emit("expressionLoadError", e, i);
                try {
                    const o = t.definitions[e];
                    if (!o) return Promise.resolve(void 0);
                    t.listeners("destroy").includes(_.releaseTasks) || t.once("destroy", _.releaseTasks);
                    let a = _.expressionTasksMap.get(t);
                    a || (a = [], _.expressionTasksMap.set(t, a));
                    const l = t.getExpressionFile(o);
                    return null !== (i = a[e]) && void 0 !== i || (a[e] = s.a.load({
                        url: l,
                        settings: t.settings,
                        type: "json",
                        target: t
                    }).then(i => {
                        const r = _.expressionTasksMap.get(t);
                        r && delete r[e];
                        const s = t.createExpression(i, o);
                        return t.emit("expressionLoaded", e, s), s
                    }).catch(e => {
                        n.f.warn(t.tag, `Failed to load expression: ${l}\n`, e), r(e)
                    })), a[e]
                } catch (i) {
                    n.f.warn(t.tag, `Failed to load expression at [${e}]\n`, i), r(i)
                }
                return Promise.resolve(void 0)
            }
            static releaseTasks() {
                this instanceof r.g ? _.motionTasksMap.delete(this) : _.expressionTasksMap.delete(this)
            }
        }
        _.runtimes = [], _.urlToJSON = h, _.jsonToSettings = d, _.waitUntilReady = c, _.setupOptionals = g, _.setupEssentials = p, _.createInternalModel = m, _.live2DModelMiddlewares = [h, d, c, g, p, m], _.motionTasksMap = new WeakMap, _.expressionTasksMap = new WeakMap, r.g.prototype._loadMotion = function(t, e) {
            return _.loadMotion(this, t, e)
        }, r.a.prototype._loadExpression = function(t) {
            return _.loadExpression(this, t)
        }
    }, function(t, e, i) {
        "use strict";
        var r = i(8);
        i.d(e, "d", (function() {
            return r.a
        })), i.d(e, "e", (function() {
            return r.b
        }));
        var s = i(13);
        i.d(e, "a", (function() {
            return s.a
        }));
        var n = i(17);
        i.d(e, "b", (function() {
            return n.a
        }));
        var o = i(14);
        i.d(e, "f", (function() {
            return o.a
        }));
        var a = i(10);
        i.d(e, "i", (function() {
            return a.a
        })), i.d(e, "j", (function() {
            return a.b
        }));
        var l = i(15);
        i.d(e, "g", (function() {
            return l.a
        })), i.d(e, "h", (function() {
            return l.b
        }));
        var u = i(7);
        i.d(e, "k", (function() {
            return u.a
        }));
        var h = i(16);
        i.d(e, "c", (function() {
            return h.a
        }))
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return o
        }));
        var r = i(0),
            s = i(33),
            n = i.n(s);
        class o {
            static get volume() {
                return this._volume
            }
            static set volume(t) {
                this._volume = (t > 1 ? 1 : t < 0 ? 0 : t) || 0, this.audios.forEach(t => t.volume = this._volume)
            }
            static add(t, e, i) {
                const s = new Audio(t);
                return s.volume = this._volume, s.preload = "auto", s.addEventListener("ended", () => {
                    this.dispose(s), null == e || e()
                }), s.addEventListener("error", e => {
                    this.dispose(s), r.f.warn("SoundManager", `Error occurred on "${t}"`, e.error), null == i || i(e.error)
                }), this.audios.push(s), s
            }
            static play(t) {
                return new Promise((e, i) => {
                    var r;
                    null === (r = t.play()) || void 0 === r || r.catch(e => {
                        t.dispatchEvent(new ErrorEvent("error", {
                            error: e
                        })), i(e)
                    }), t.readyState === t.HAVE_ENOUGH_DATA ? e() : t.addEventListener("canplaythrough", e)
                })
            }
            static dispose(t) {
                t.pause(), t.removeAttribute("src"), n()(this.audios, t)
            }
            static destroy() {
                for (let t = this.audios.length - 1; t >= 0; t--) this.dispose(this.audios[t])
            }
        }
        o.audios = [], o._volume = .5
    }, function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return r
        })), i.d(e, "a", (function() {
            return s
        }));
        const r = 2,
            s = 2
    }, function(t, e, i) {
        var r = i(38),
            s = "object" == typeof self && self && self.Object === Object && self,
            n = r || s || Function("return this")();
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return r
        })), i.d(e, "b", (function() {
            return n
        }));
        var r, s = i(0);
        ! function(t) {
            t[t.NONE = 0] = "NONE", t[t.IDLE = 1] = "IDLE", t[t.NORMAL = 2] = "NORMAL", t[t.FORCE = 3] = "FORCE"
        }(r || (r = {}));
        class n {
            constructor() {
                this.debug = !1, this.currentPriority = r.NONE, this.reservePriority = r.NONE
            }
            reserve(t, e, i) {
                if (i <= r.NONE) return s.f.log(this.tag, "Cannot start a motion with MotionPriority.NONE."), !1;
                if (t === this.currentGroup && e === this.currentIndex) return s.f.log(this.tag, "Motion is already playing.", this.dump(t, e)), !1;
                if (t === this.reservedGroup && e === this.reservedIndex || t === this.reservedIdleGroup && e === this.reservedIdleIndex) return s.f.log(this.tag, "Motion is already reserved.", this.dump(t, e)), !1;
                if (i === r.IDLE) {
                    if (this.currentPriority !== r.NONE) return s.f.log(this.tag, "Cannot start idle motion because another motion is playing.", this.dump(t, e)), !1;
                    if (void 0 !== this.reservedIdleGroup) return s.f.log(this.tag, "Cannot start idle motion because another idle motion has reserved.", this.dump(t, e)), !1;
                    this.setReservedIdle(t, e)
                } else {
                    if (i < r.FORCE) {
                        if (i <= this.currentPriority) return s.f.log(this.tag, "Cannot start motion because another motion is playing as an equivalent or higher priority.", this.dump(t, e)), !1;
                        if (i <= this.reservePriority) return s.f.log(this.tag, "Cannot start motion because another motion has reserved as an equivalent or higher priority.", this.dump(t, e)), !1
                    }
                    this.setReserved(t, e, i)
                }
                return !0
            }
            start(t, e, i, n) {
                if (n === r.IDLE) {
                    if (this.setReservedIdle(void 0, void 0), this.currentPriority !== r.NONE) return s.f.log(this.tag, "Cannot start idle motion because another motion is playing.", this.dump(e, i)), !1
                } else {
                    if (e !== this.reservedGroup || i !== this.reservedIndex) return s.f.log(this.tag, "Cannot start motion because another motion has taken the place.", this.dump(e, i)), !1;
                    this.setReserved(void 0, void 0, r.NONE)
                }
                return !!t && (this.setCurrent(e, i, n), !0)
            }
            complete() {
                this.setCurrent(void 0, void 0, r.NONE)
            }
            setCurrent(t, e, i) {
                this.currentPriority = i, this.currentGroup = t, this.currentIndex = e
            }
            setReserved(t, e, i) {
                this.reservePriority = i, this.reservedGroup = t, this.reservedIndex = e
            }
            setReservedIdle(t, e) {
                this.reservedIdleGroup = t, this.reservedIdleIndex = e
            }
            isActive(t, e) {
                return t === this.currentGroup && e === this.currentIndex || t === this.reservedGroup && e === this.reservedIndex || t === this.reservedIdleGroup && e === this.reservedIdleIndex
            }
            reset() {
                this.setCurrent(void 0, void 0, r.NONE), this.setReserved(void 0, void 0, r.NONE), this.setReservedIdle(void 0, void 0)
            }
            shouldRequestIdleMotion() {
                return void 0 === this.currentGroup && void 0 === this.reservedIdleGroup
            }
            shouldOverrideExpression() {
                return this.currentPriority > r.IDLE
            }
            dump(t, e) {
                if (this.debug) {
                    return `\n<Requested> group = "${t}", index = ${e}\n` + ["currentPriority", "reservePriority", "currentGroup", "currentIndex", "reservedGroup", "reservedIndex", "reservedIdleGroup", "reservedIdleIndex"].map(t => "[" + t + "] " + this[t]).join("\n")
                }
                return ""
            }
        }
    }, function(t, e, i) {
        var r = i(54),
            s = i(60);
        t.exports = function(t, e) {
            var i = s(t, e);
            return r(i) ? i : void 0
        }
    }, function(t, e) {
        var i = Array.isArray;
        t.exports = i
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return o
        }));
        var r = i(0),
            s = i(3),
            n = function(t, e, i, r) {
                return new(i || (i = Promise))((function(s, n) {
                    function o(t) {
                        try {
                            l(r.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(r.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(o, a)
                    }
                    l((r = r.apply(t, e || [])).next())
                }))
            };
        class o extends s.EventEmitter {
            constructor(t, e) {
                super(), this.expressions = [], this.reserveExpressionIndex = -1, this.destroyed = !1, this.settings = t, this.tag = `ExpressionManager(${t.name})`
            }
            init() {
                this.defaultExpression = this.createExpression({}, void 0), this.currentExpression = this.defaultExpression, this.stopAllExpressions()
            }
            loadExpression(t) {
                return n(this, void 0, void 0, (function*() {
                    if (!this.definitions[t]) return void r.f.warn(this.tag, `Undefined expression at [${t}]`);
                    if (null === this.expressions[t]) return void r.f.warn(this.tag, `Cannot set expression at [${t}] because it's already failed in loading.`);
                    if (this.expressions[t]) return this.expressions[t];
                    const e = yield this._loadExpression(t);
                    return this.expressions[t] = e, e
                }))
            }
            _loadExpression(t) {
                throw new Error("Not implemented.")
            }
            setRandomExpression() {
                return n(this, void 0, void 0, (function*() {
                    if (this.definitions.length) {
                        const t = [];
                        for (let e = 0; e < this.definitions.length; e++) null !== this.expressions[e] && this.expressions[e] !== this.currentExpression && e !== this.reserveExpressionIndex && t.push(e);
                        if (t.length) {
                            const e = Math.floor(Math.random() * t.length);
                            return this.setExpression(e)
                        }
                    }
                    return !1
                }))
            }
            resetExpression() {
                this._setExpression(this.defaultExpression)
            }
            restoreExpression() {
                this._setExpression(this.currentExpression)
            }
            setExpression(t) {
                return n(this, void 0, void 0, (function*() {
                    if ("number" != typeof t && (t = this.getExpressionIndex(t)), !(t > -1 && t < this.definitions.length)) return !1;
                    if (t === this.expressions.indexOf(this.currentExpression)) return !1;
                    this.reserveExpressionIndex = t;
                    const e = yield this.loadExpression(t);
                    return !(!e || this.reserveExpressionIndex !== t) && (this.reserveExpressionIndex = -1, this.currentExpression = e, this._setExpression(e), !0)
                }))
            }
            update(t, e) {
                return !this.isFinished() && this.updateParameters(t, e)
            }
            destroy() {
                this.destroyed = !0, this.emit("destroy");
                this.definitions = void 0, this.expressions = void 0
            }
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return n
        }));
        var r = i(0),
            s = i(3);
        class n {
            constructor(t) {
                this.json = t;
                let e = t.url;
                if ("string" != typeof e) throw new TypeError("The `url` field in settings JSON must be defined as a string.");
                this.url = e, this.name = Object(r.e)(this.url)
            }
            resolveURL(t) {
                return s.url.resolve(this.url, t)
            }
            replaceFiles(t) {
                this.moc = t(this.moc, "moc"), void 0 !== this.pose && (this.pose = t(this.pose, "pose")), void 0 !== this.physics && (this.physics = t(this.physics, "physics"));
                for (let e = 0; e < this.textures.length; e++) this.textures[e] = t(this.textures[e], `textures[${e}]`)
            }
            getDefinedFiles() {
                const t = [];
                return this.replaceFiles(e => (t.push(e), e)), t
            }
            validateFiles(t) {
                const e = (e, i) => {
                    const r = this.resolveURL(e);
                    if (!t.includes(r)) {
                        if (i) throw new Error(`File "${e}" is defined in settings, but doesn't exist in given files`);
                        return !1
                    }
                    return !0
                };
                return [this.moc, ...this.textures].forEach(t => e(t, !0)), this.getDefinedFiles().filter(t => e(t, !1))
            }
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return r
        })), i.d(e, "a", (function() {
            return h
        }));
        var r, s = i(1),
            n = i(10),
            o = i(7),
            a = i(0),
            l = i(3),
            u = function(t, e, i, r) {
                return new(i || (i = Promise))((function(s, n) {
                    function o(t) {
                        try {
                            l(r.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(r.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(o, a)
                    }
                    l((r = r.apply(t, e || [])).next())
                }))
            };
        ! function(t) {
            t.ALL = "ALL", t.IDLE = "IDLE", t.NONE = "NONE"
        }(r || (r = {}));
        class h extends l.EventEmitter {
            constructor(t, e) {
                super(), this.motionGroups = {}, this.state = new n.b, this.playing = !1, this.destroyed = !1, this.settings = t, this.tag = `MotionManager(${t.name})`, this.state.tag = this.tag
            }
            init(t) {
                (null == t ? void 0 : t.idleMotionGroup) && (this.groups.idle = t.idleMotionGroup), this.setupMotions(t), this.stopAllMotions()
            }
            setupMotions(t) {
                for (const t of Object.keys(this.definitions)) this.motionGroups[t] = [];
                let e;
                switch (null == t ? void 0 : t.motionPreload) {
                    case r.NONE:
                        return;
                    case r.ALL:
                        e = Object.keys(this.definitions);
                        break;
                    case r.IDLE:
                    default:
                        e = [this.groups.idle]
                }
                for (const t of e)
                    if (this.definitions[t])
                        for (let e = 0; e < this.definitions[t].length; e++) this.loadMotion(t, e).then()
            }
            loadMotion(t, e) {
                var i;
                return u(this, void 0, void 0, (function*() {
                    if (!(null === (i = this.definitions[t]) || void 0 === i ? void 0 : i[e])) return void a.f.warn(this.tag, `Undefined motion at "${t}"[${e}]`);
                    if (null === this.motionGroups[t][e]) return void a.f.warn(this.tag, `Cannot start motion at "${t}"[${e}] because it's already failed in loading.`);
                    if (this.motionGroups[t][e]) return this.motionGroups[t][e];
                    const r = yield this._loadMotion(t, e);
                    return this.destroyed ? void 0 : (this.motionGroups[t][e] = null != r ? r : null, r)
                }))
            }
            _loadMotion(t, e) {
                throw new Error("Not implemented.")
            }
            startMotion(t, e, i = n.a.NORMAL) {
                var r;
                return u(this, void 0, void 0, (function*() {
                    if (!this.state.reserve(t, e, i)) return !1;
                    const n = null === (r = this.definitions[t]) || void 0 === r ? void 0 : r[e];
                    if (!n) return !1;
                    let l;
                    if (this.currentAudio && o.a.dispose(this.currentAudio), s.b.sound) {
                        const t = this.getSoundFile(n);
                        if (t) try {
                            l = o.a.add(this.settings.resolveURL(t), () => this.currentAudio = void 0, () => this.currentAudio = void 0), this.currentAudio = l
                        } catch (e) {
                            a.f.warn(this.tag, "Failed to create audio", t, e)
                        }
                    }
                    const u = yield this.loadMotion(t, e);
                    if (l) {
                        const t = o.a.play(l).catch(t => a.f.warn(this.tag, "Failed to play audio", l.src, t));
                        s.b.motionSync && (yield t)
                    }
                    return this.state.start(u, t, e, i) ? (a.f.log(this.tag, "Start motion:", this.getMotionName(n)), this.emit("motionStart", t, e, l), this.state.shouldOverrideExpression() && this.expressionManager && this.expressionManager.resetExpression(), this.playing = !0, this._startMotion(u), !0) : (l && (o.a.dispose(l), this.currentAudio = void 0), !1)
                }))
            }
            startRandomMotion(t, e) {
                return u(this, void 0, void 0, (function*() {
                    const i = this.definitions[t];
                    if (null == i ? void 0 : i.length) {
                        const r = [];
                        for (let e = 0; e < i.length; e++) null === this.motionGroups[t][e] || this.state.isActive(t, e) || r.push(e);
                        if (r.length) {
                            const i = Math.floor(Math.random() * r.length);
                            return this.startMotion(t, r[i], e)
                        }
                    }
                    return !1
                }))
            }
            stopAllMotions() {
                this._stopAllMotions(), this.state.reset(), this.currentAudio && (o.a.dispose(this.currentAudio), this.currentAudio = void 0)
            }
            update(t, e) {
                var i, r;
                this.isFinished() && (this.playing && (this.playing = !1, this.emit("motionFinish")), this.state.shouldOverrideExpression() && (null === (i = this.expressionManager) || void 0 === i || i.restoreExpression()), this.state.complete(), this.state.shouldRequestIdleMotion() && this.startRandomMotion(this.groups.idle, n.a.IDLE));
                let s = this.updateParameters(t, e);
                return s = (null === (r = this.expressionManager) || void 0 === r ? void 0 : r.update(t, e)) || s, s
            }
            destroy() {
                var t;
                this.destroyed = !0, this.emit("destroy"), this.stopAllMotions(), null === (t = this.expressionManager) || void 0 === t || t.destroy();
                this.definitions = void 0, this.motionGroups = void 0
            }
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return l
        }));
        var r = i(8),
            s = i(17),
            n = i(2),
            o = i(3);
        const a = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        class l extends o.EventEmitter {
            constructor() {
                super(...arguments), this.focusController = new s.a, this.originalWidth = 0, this.originalHeight = 0, this.width = 0, this.height = 0, this.localTransform = new n.Matrix, this.drawingMatrix = new n.Matrix, this.hitAreas = {}, this.textureFlipY = !1, this.viewport = [0, 0, 0, 0], this.destroyed = !1
            }
            init() {
                this.setupLayout(), this.setupHitAreas()
            }
            setupLayout() {
                const t = this.getSize();
                this.originalWidth = t[0], this.originalHeight = t[1];
                const e = Object.assign({
                    width: r.b,
                    height: r.a
                }, this.getLayout());
                this.localTransform.scale(e.width / r.b, e.height / r.a), this.width = this.originalWidth * this.localTransform.a, this.height = this.originalHeight * this.localTransform.d;
                const i = void 0 !== e.x && e.x - e.width / 2 || void 0 !== e.centerX && e.centerX || void 0 !== e.left && e.left - e.width / 2 || void 0 !== e.right && e.right + e.width / 2 || 0,
                    s = void 0 !== e.y && e.y - e.height / 2 || void 0 !== e.centerY && e.centerY || void 0 !== e.top && e.top - e.height / 2 || void 0 !== e.bottom && e.bottom + e.height / 2 || 0;
                this.localTransform.translate(this.width * i, -this.height * s)
            }
            setupHitAreas() {
                const t = this.getHitAreaDefs().filter(t => t.index >= 0);
                for (const e of t) this.hitAreas[e.name] = e
            }
            hitTest(t, e) {
                return Object.keys(this.hitAreas).filter(i => this.isHit(i, t, e))
            }
            isHit(t, e, i) {
                if (!this.hitAreas[t]) return !1;
                const r = this.hitAreas[t].index,
                    s = this.getDrawableBounds(r, a);
                return s.x <= e && e <= s.x + s.width && s.y <= i && i <= s.y + s.height
            }
            getDrawableBounds(t, e) {
                const i = this.getDrawableVertices(t);
                let r = i[0],
                    s = i[0],
                    n = i[1],
                    o = i[1];
                for (let t = 0; t < i.length; t += 2) {
                    const e = i[t],
                        a = i[t + 1];
                    r = Math.min(e, r), s = Math.max(e, s), n = Math.min(a, n), o = Math.max(a, o)
                }
                return null != e || (e = {}), e.x = r, e.y = n, e.width = s - r, e.height = o - n, e
            }
            updateTransform(t) {
                this.drawingMatrix.copyFrom(t).append(this.localTransform)
            }
            update(t, e) {
                this.focusController.update(t)
            }
            destroy() {
                this.destroyed = !0, this.emit("destroy"), this.motionManager.destroy(), this.motionManager = void 0
            }
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return s
        }));
        var r = i(0);
        class s {
            constructor() {
                this.targetX = 0, this.targetY = 0, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0
            }
            focus(t, e, i = !1) {
                this.targetX = Object(r.b)(t, -1, 1), this.targetY = Object(r.b)(e, -1, 1), i && (this.x = this.targetX, this.y = this.targetY)
            }
            update(t) {
                const e = this.targetX - this.x,
                    i = this.targetY - this.y;
                if (Math.abs(e) < .01 && Math.abs(i) < .01) return;
                const r = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)),
                    s = 40 / 7.5 / (1e3 / t);
                let n = s * (e / r) - this.vx,
                    o = s * (i / r) - this.vy;
                const a = Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)),
                    l = s * (1 / 150) * t;
                a > l && (n *= l / a, o *= l / a), this.vx += n, this.vy += o;
                const u = Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2)),
                    h = .5 * (Math.sqrt(Math.pow(l, 2) + 8 * l * r) - l);
                u > h && (this.vx *= h / u, this.vy *= h / u), this.x += this.vx, this.y += this.vy
            }
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return n
        }));
        var r = i(0);
        class s extends Error {
            constructor(t, e, i, r = !1) {
                super(t), this.url = e, this.status = i, this.aborted = r
            }
        }
        class n {
            static createXHR(t, e, i, o, a) {
                const l = new XMLHttpRequest;
                if (n.allXhrSet.add(l), t) {
                    let e = n.xhrMap.get(t);
                    e ? e.add(l) : (e = new Set([l]), n.xhrMap.set(t, e)), t.listeners("destroy").includes(n.cancelXHRs) || t.once("destroy", n.cancelXHRs)
                }
                return l.open("GET", e), l.responseType = i, l.onload = () => {
                    200 !== l.status && 0 !== l.status || !l.response ? l.onerror() : o(l.response)
                }, l.onerror = () => {
                    r.f.warn("XHRLoader", `Failed to load resource as ${l.responseType} (Status ${l.status}): ${e}`), a(new s("Network error.", e, l.status))
                }, l.onabort = () => a(new s("Aborted.", e, l.status, !0)), l.onloadend = () => {
                    var e;
                    n.allXhrSet.delete(l), t && (null === (e = n.xhrMap.get(t)) || void 0 === e || e.delete(l))
                }, l
            }
            static cancelXHRs() {
                var t;
                null === (t = n.xhrMap.get(this)) || void 0 === t || t.forEach(t => {
                    t.abort(), n.allXhrSet.delete(t)
                }), n.xhrMap.delete(this)
            }
            static release() {
                n.allXhrSet.forEach(t => t.abort()), n.allXhrSet.clear(), n.xhrMap = new WeakMap
            }
        }
        n.xhrMap = new WeakMap, n.allXhrSet = new Set, n.loader = (t, e) => new Promise((e, i) => {
            n.createXHR(t.target, t.settings ? t.settings.resolveURL(t.url) : t.url, t.type, i => {
                t.result = i, e()
            }, i).send()
        })
    }, function(t, e, i) {
        "use strict";

        function r(t, e) {
            let i = -1;
            return function r(s, n) {
                if (n) return Promise.reject(n);
                if (s <= i) return Promise.reject(new Error("next() called multiple times"));
                i = s;
                const o = t[s];
                if (!o) return Promise.resolve();
                try {
                    return Promise.resolve(o(e, r.bind(null, s + 1)))
                } catch (n) {
                    return Promise.reject(n)
                }
            }(0)
        }
        i.d(e, "a", (function() {
            return r
        }))
    }, function(t, e) {
        t.exports = i
    }, function(t, e, i) {
        var r = i(22),
            s = i(56),
            n = i(57),
            o = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? s(t) : n(t)
        }
    }, function(t, e, i) {
        var r = i(9).Symbol;
        t.exports = r
    }, function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    }, function(t, e) {
        t.exports = r
    }, function(t, e) {
        t.exports = function(t) {
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }, function(t, e, i) {
        var r = i(107),
            s = i(108),
            n = i(109),
            o = i(110),
            a = i(111);

        function l(t) {
            var e = -1,
                i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        l.prototype.clear = r, l.prototype.delete = s, l.prototype.get = n, l.prototype.has = o, l.prototype.set = a, t.exports = l
    }, function(t, e, i) {
        var r = i(77);
        t.exports = function(t, e) {
            for (var i = t.length; i--;)
                if (r(t[i][0], e)) return i;
            return -1
        }
    }, function(t, e, i) {
        var r = i(11)(Object, "create");
        t.exports = r
    }, function(t, e, i) {
        var r = i(125);
        t.exports = function(t, e) {
            var i = t.__data__;
            return r(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
        }
    }, function(t, e, i) {
        var r = i(47);
        t.exports = function(t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "h", (function() {
            return r.e
        })), i.d(e, "g", (function() {
            return r.d
        })), i.d(e, "a", (function() {
            return r.a
        })), i.d(e, "c", (function() {
            return r.b
        })), i.d(e, "m", (function() {
            return r.f
        })), i.d(e, "p", (function() {
            return r.i
        })), i.d(e, "q", (function() {
            return r.j
        })), i.d(e, "o", (function() {
            return r.h
        })), i.d(e, "n", (function() {
            return r.g
        })), i.d(e, "r", (function() {
            return r.k
        })), i.d(e, "f", (function() {
            return r.c
        })), i.d(e, "k", (function() {
            return f
        })), i.d(e, "l", (function() {
            return h
        })), i.d(e, "e", (function() {
            return a
        })), i.d(e, "x", (function() {
            return _.b
        })), i.d(e, "s", (function() {
            return _.a
        })), i.d(e, "i", (function() {
            return s.a
        })), i.d(e, "j", (function() {
            return v.a
        })), i.d(e, "t", (function() {
            return x.a
        })), i.d(e, "b", (function() {
            return M
        })), i.d(e, "u", (function() {
            return P
        })), i.d(e, "B", (function() {
            return c.f
        })), i.d(e, "w", (function() {
            return c.b
        })), i.d(e, "C", (function() {
            return c.g
        })), i.d(e, "z", (function() {
            return c.d
        })), i.d(e, "y", (function() {
            return c.c
        })), i.d(e, "v", (function() {
            return c.a
        })), i.d(e, "A", (function() {
            return c.e
        })), i.d(e, "d", (function() {
            return T
        }));
        var r = i(6),
            s = i(5),
            n = i(34),
            o = i(2);
        class a {
            constructor() {
                this._autoInteract = !1
            }
            get autoInteract() {
                return this._autoInteract
            }
            set autoInteract(t) {
                t !== this._autoInteract && (t ? this.on("pointertap", l, this) : this.off("pointertap", l, this), this._autoInteract = t)
            }
            registerInteraction(t) {
                t !== this.interactionManager && (this.unregisterInteraction(), this._autoInteract && t && (this.interactionManager = t, t.on("pointermove", u, this)))
            }
            unregisterInteraction() {
                var t;
                this.interactionManager && (null === (t = this.interactionManager) || void 0 === t || t.off("pointermove", u, this), this.interactionManager = void 0)
            }
        }

        function l(t) {
            this.tap(t.data.global.x, t.data.global.y)
        }

        function u(t) {
            this.focus(t.data.global.x, t.data.global.y)
        }
        class h extends o.Transform {}
        var d, c = i(0);
        const g = new o.Point,
            p = new o.Matrix;
        let m = null === (d = window.PIXI) || void 0 === d ? void 0 : d.Ticker;
        class f extends n.Container {
            constructor(t) {
                super(), this.tag = "Live2DModel(uninitialized)", this.textures = [], this.transform = new h, this.anchor = new o.ObservablePoint(this.onAnchorChange, this, 0, 0), this.glContextID = -1, this.elapsedTime = performance.now(), this.deltaTime = 0, this._autoUpdate = !1, this.once("modelLoaded", () => this.init(t))
            }
            static from(t, e) {
                const i = new this(e);
                return s.a.setupLive2DModel(i, t, e).then(() => i)
            }
            static fromSync(t, e) {
                const i = new this(e);
                return s.a.setupLive2DModel(i, t, e).then(null == e ? void 0 : e.onLoad).catch(null == e ? void 0 : e.onError), i
            }
            static registerTicker(t) {
                m = t
            }
            get autoUpdate() {
                return this._autoUpdate
            }
            set autoUpdate(t) {
                t ? this._destroyed || (m ? (m.shared.add(this.onTickerUpdate, this), this._autoUpdate = !0) : c.f.warn(this.tag, "No Ticker registered, please call Live2DModel.registerTicker(Ticker).")) : (null == m || m.shared.remove(this.onTickerUpdate, this), this._autoUpdate = !1)
            }
            init(t) {
                this.tag = `Live2DModel(${this.internalModel.settings.name})`;
                const e = Object.assign({
                    autoUpdate: !0,
                    autoInteract: !0
                }, t);
                e.autoInteract && (this.interactive = !0), this.autoInteract = e.autoInteract, this.autoUpdate = e.autoUpdate
            }
            onAnchorChange() {
                this.pivot.set(this.anchor.x * this.internalModel.width, this.anchor.y * this.internalModel.height)
            }
            motion(t, e, i) {
                return void 0 === e ? this.internalModel.motionManager.startRandomMotion(t, i) : this.internalModel.motionManager.startMotion(t, e, i)
            }
            expression(t) {
                return this.internalModel.motionManager.expressionManager ? void 0 === t ? this.internalModel.motionManager.expressionManager.setRandomExpression() : this.internalModel.motionManager.expressionManager.setExpression(t) : Promise.resolve(!1)
            }
            focus(t, e, i = !1) {
                g.x = t, g.y = e, this.toModelPosition(g, g, !0), this.internalModel.focusController.focus(g.x / this.internalModel.originalWidth * 2 - 1, -(g.y / this.internalModel.originalHeight * 2 - 1), i)
            }
            tap(t, e) {
                const i = this.hitTest(t, e);
                i.length && (c.f.log(this.tag, "Hit", i), this.emit("hit", i))
            }
            hitTest(t, e) {
                return g.x = t, g.y = e, this.toModelPosition(g, g), this.internalModel.hitTest(g.x, g.y)
            }
            toModelPosition(t, e = t.clone(), i) {
                return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.transform.worldTransform.applyInverse(t, e), this.internalModel.localTransform.applyInverse(e, e), e
            }
            containsPoint(t) {
                return this.getBounds(!0).contains(t.x, t.y)
            }
            _calculateBounds() {
                this._bounds.addFrame(this.transform, 0, 0, this.internalModel.width, this.internalModel.height)
            }
            onTickerUpdate() {
                this.update(m.shared.deltaMS)
            }
            update(t) {
                this.deltaTime += t, this.elapsedTime += t
            }
            _render(t) {
                this.registerInteraction(t.plugins.interaction), t.batch.reset(), t.geometry.reset(), t.shader.reset(), t.state.reset();
                let e = !1;
                this.glContextID !== t.CONTEXT_UID && (this.glContextID = t.CONTEXT_UID, this.internalModel.updateWebGLContext(t.gl, this.glContextID), e = !0);
                for (let i = 0; i < this.textures.length; i++) {
                    const r = this.textures[i];
                    r.valid && (!e && r.baseTexture._glTextures[this.glContextID] || (t.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, this.internalModel.textureFlipY), t.texture.bind(r.baseTexture, 0)), this.internalModel.bindTexture(i, r.baseTexture._glTextures[this.glContextID].texture), r.baseTexture.touched = t.textureGC.count)
                }
                const i = t.framebuffer.viewport;
                this.internalModel.viewport = [i.x, i.y, i.width, i.height], this.deltaTime && (this.internalModel.update(this.deltaTime, this.elapsedTime), this.deltaTime = 0);
                const r = p.copyFrom(t.globalUniforms.uniforms.projectionMatrix).append(this.worldTransform);
                this.internalModel.updateTransform(r), this.internalModel.draw(t.gl), t.state.reset(), t.texture.reset()
            }
            destroy(t) {
                this.emit("destroy"), this.autoUpdate = !1, this.unregisterInteraction(), (null == t ? void 0 : t.texture) && this.textures.forEach(e => e.destroy(t.baseTexture)), this.internalModel.destroy(), super.destroy(t)
            }
        }
        Object(c.a)(f, [a]);
        var _ = i(1),
            v = i(4),
            x = i(18),
            y = i(3),
            b = function(t, e, i, r) {
                return new(i || (i = Promise))((function(s, n) {
                    function o(t) {
                        try {
                            l(r.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(r.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(o, a)
                    }
                    l((r = r.apply(t, e || [])).next())
                }))
            };
        class M {
            static resolveURL(t, e) {
                var i;
                const r = null === (i = M.filesMap[t]) || void 0 === i ? void 0 : i[e];
                if (void 0 === r) throw new Error("Cannot find this file from uploaded files: " + e);
                return r
            }
            static upload(t, e) {
                return b(this, void 0, void 0, (function*() {
                    const i = {};
                    for (const r of e.getDefinedFiles()) {
                        const s = decodeURI(y.url.resolve(e.url, r)),
                            n = t.find(t => t.webkitRelativePath === s);
                        n && (i[r] = URL.createObjectURL(n))
                    }
                    M.filesMap[e._objectURL] = i
                }))
            }
            static createSettings(t) {
                return b(this, void 0, void 0, (function*() {
                    const e = t.find(t => t.name.endsWith("model.json") || t.name.endsWith("model3.json"));
                    if (!e) throw new TypeError("Settings file not found");
                    const i = yield M.readText(e), r = JSON.parse(i);
                    r.url = e.webkitRelativePath;
                    const n = s.a.findRuntime(r);
                    if (!n) throw new Error("Unknown settings JSON");
                    const o = n.createModelSettings(r);
                    return o._objectURL = URL.createObjectURL(e), o
                }))
            }
            static readText(t) {
                return b(this, void 0, void 0, (function*() {
                    return new Promise((e, i) => {
                        const r = new FileReader;
                        r.onload = () => e(r.result), r.onerror = i, r.readAsText(t, "utf8")
                    })
                }))
            }
        }
        M.filesMap = {}, M.factory = (t, e) => b(void 0, void 0, void 0, (function*() {
            if (Array.isArray(t.source) && t.source[0] instanceof File) {
                const e = t.source;
                let i = e.settings;
                if (i) {
                    if (!i._objectURL) throw new Error('"_objectURL" must be specified in ModelSettings')
                } else i = yield M.createSettings(e);
                i.validateFiles(e.map(t => encodeURI(t.webkitRelativePath))), yield M.upload(e, i), i.resolveURL = function(t) {
                    return M.resolveURL(this._objectURL, t)
                }, t.source = i, t.live2dModel.once("modelLoaded", t => {
                    t.once("destroy", (function() {
                        const t = this.settings._objectURL;
                        if (URL.revokeObjectURL(t), M.filesMap[t])
                            for (const e of Object.values(M.filesMap[t])) URL.revokeObjectURL(e);
                        delete M.filesMap[t]
                    }))
                })
            }
            return e()
        })), s.a.live2DModelMiddlewares.unshift(M.factory);
        var S = function(t, e, i, r) {
            return new(i || (i = Promise))((function(s, n) {
                function o(t) {
                    try {
                        l(r.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function a(t) {
                    try {
                        l(r.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                        t(e)
                    }))).then(o, a)
                }
                l((r = r.apply(t, e || [])).next())
            }))
        };
        class P {
            static unzip(t, e) {
                return S(this, void 0, void 0, (function*() {
                    const i = yield P.getFilePaths(t), r = [];
                    for (const t of e.getDefinedFiles()) {
                        const s = decodeURI(y.url.resolve(e.url, t));
                        i.includes(s) && r.push(s)
                    }
                    const s = yield P.getFiles(t, r);
                    for (let t = 0; t < s.length; t++) {
                        const e = r[t],
                            i = s[t];
                        Object.defineProperty(i, "webkitRelativePath", {
                            value: e
                        })
                    }
                    return s
                }))
            }
            static createSettings(t) {
                return S(this, void 0, void 0, (function*() {
                    const e = (yield P.getFilePaths(t)).find(t => t.endsWith("model.json") || t.endsWith("model3.json"));
                    if (!e) throw new Error("Settings file not found");
                    const i = yield P.readText(t, e);
                    if (!i) throw new Error("Empty settings file: " + e);
                    const r = JSON.parse(i);
                    r.url = e;
                    const n = s.a.findRuntime(r);
                    if (!n) throw new Error("Unknown settings JSON");
                    return n.createModelSettings(r)
                }))
            }
            static zipReader(t, e) {
                return S(this, void 0, void 0, (function*() {
                    throw new Error("Not implemented")
                }))
            }
            static getFilePaths(t) {
                return S(this, void 0, void 0, (function*() {
                    throw new Error("Not implemented")
                }))
            }
            static getFiles(t, e) {
                return S(this, void 0, void 0, (function*() {
                    throw new Error("Not implemented")
                }))
            }
            static readText(t, e) {
                return S(this, void 0, void 0, (function*() {
                    throw new Error("Not implemented")
                }))
            }
            static releaseReader(t) {}
        }
        P.ZIP_PROTOCOL = "zip://", P.uid = 0, P.factory = (t, e) => S(void 0, void 0, void 0, (function*() {
            const i = t.source;
            let r, s, n;
            if ("string" == typeof i && (i.endsWith(".zip") || i.startsWith(P.ZIP_PROTOCOL)) ? (r = i.startsWith(P.ZIP_PROTOCOL) ? i.slice(P.ZIP_PROTOCOL.length) : i, s = yield v.a.load({
                    url: r,
                    type: "blob",
                    target: t.live2dModel
                })) : Array.isArray(i) && 1 === i.length && i[0] instanceof File && i[0].name.endsWith(".zip") && (s = i[0], r = URL.createObjectURL(s), n = i.settings), s) {
                if (!s.size) throw new Error("Empty zip file");
                const e = yield P.zipReader(s, r);
                n || (n = yield P.createSettings(e)), n._objectURL = P.ZIP_PROTOCOL + P.uid + "/" + n.url;
                const i = yield P.unzip(e, n);
                i.settings = n, t.source = i, r.startsWith("blob:") && t.live2dModel.once("modelLoaded", t => {
                    t.once("destroy", (function() {
                        URL.revokeObjectURL(r)
                    }))
                }), P.releaseReader(e)
            }
            return e()
        })), s.a.live2DModelMiddlewares.unshift(P.factory);
        var C = i(35),
            w = i(24);
        const I = new o.Rectangle;
        class T extends C.Graphics {
            constructor() {
                super(), this.initialized = !1, this.texts = [], this.strokeWidth = 4, this.normalColor = 14883354, this.activeColor = 2017330, this.interactive = !0, this.on("added", this.init).on("pointermove", this.onPointerMove)
            }
            init() {
                const t = this.parent.internalModel,
                    e = new w.TextStyle({
                        fontSize: 24,
                        fill: "#ffffff",
                        stroke: "#000000",
                        strokeThickness: 4
                    });
                this.texts = Object.keys(t.hitAreas).map(t => {
                    const i = new w.Text(t, e);
                    return i.visible = !1, this.addChild(i), i
                })
            }
            onPointerMove(t) {
                const e = this.parent.hitTest(t.data.global.x, t.data.global.y);
                this.texts.forEach(t => {
                    t.visible = e.includes(t.text)
                })
            }
            _render(t) {
                const e = this.parent.internalModel,
                    i = 1 / Math.sqrt(Math.pow(this.transform.worldTransform.a, 2) + Math.pow(this.transform.worldTransform.b, 2));
                this.texts.forEach(t => {
                    this.lineStyle({
                        width: this.strokeWidth * i,
                        color: t.visible ? this.activeColor : this.normalColor
                    });
                    const r = e.getDrawableBounds(e.hitAreas[t.text].index, I),
                        s = e.localTransform;
                    r.x = r.x * s.a + s.tx, r.y = r.y * s.d + s.ty, r.width = r.width * s.a, r.height = r.height * s.d, this.drawRect(r.x, r.y, r.width, r.height), t.x = r.x + this.strokeWidth * i, t.y = r.y + this.strokeWidth * i, t.scale.set(i)
                }), super._render(t), this.clear()
            }
        }
    }, function(t, e, i) {
        var r = i(48)(i(62));
        t.exports = r
    }, function(t, e) {
        t.exports = s
    }, function(t, e) {
        t.exports = n
    }, function(t, e, i) {
        var r = i(11),
            s = function() {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }();
        t.exports = s
    }, function(t, e, i) {
        var r = i(21),
            s = i(26);
        t.exports = function(t) {
            if (!s(t)) return !1;
            var e = r(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        }
    }, function(t, e, i) {
        (function(e) {
            var i = "object" == typeof e && e && e.Object === Object && e;
            t.exports = i
        }).call(this, i(55))
    }, function(t, e) {
        var i = Function.prototype.toString;
        t.exports = function(t) {
            if (null != t) {
                try {
                    return i.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, r = null == t ? 0 : t.length, s = Array(r); ++i < r;) s[i] = e(t[i], i, t);
            return s
        }
    }, function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return t(e)
            }
        }
    }, function(t, e, i) {
        var r = i(93),
            s = i(99),
            n = i(103);
        t.exports = function(t) {
            return n(t) ? r(t) : s(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
    }, function(t, e, i) {
        var r = i(11)(i(9), "Map");
        t.exports = r
    }, function(t, e, i) {
        var r = i(117),
            s = i(124),
            n = i(126),
            o = i(127),
            a = i(128);

        function l(t) {
            var e = -1,
                i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        l.prototype.clear = r, l.prototype.delete = s, l.prototype.get = n, l.prototype.has = o, l.prototype.set = a, t.exports = l
    }, function(t, e, i) {
        var r = i(12),
            s = i(47),
            n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            o = /^\w*$/;
        t.exports = function(t, e) {
            if (r(t)) return !1;
            var i = typeof t;
            return !("number" != i && "symbol" != i && "boolean" != i && null != t && !s(t)) || (o.test(t) || !n.test(t) || null != e && t in Object(e))
        }
    }, function(t, e, i) {
        var r = i(21),
            s = i(23);
        t.exports = function(t) {
            return "symbol" == typeof t || s(t) && "[object Symbol]" == r(t)
        }
    }, function(t, e, i) {
        var r = i(25),
            s = i(49),
            n = i(51);
        t.exports = function(t, e) {
            return n(s(t, e, r), t + "")
        }
    }, function(t, e, i) {
        var r = i(50),
            s = Math.max;
        t.exports = function(t, e, i) {
            return e = s(void 0 === e ? t.length - 1 : e, 0),
                function() {
                    for (var n = arguments, o = -1, a = s(n.length - e, 0), l = Array(a); ++o < a;) l[o] = n[e + o];
                    o = -1;
                    for (var u = Array(e + 1); ++o < e;) u[o] = n[o];
                    return u[e] = i(l), r(t, this, u)
                }
        }
    }, function(t, e) {
        t.exports = function(t, e, i) {
            switch (i.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, i[0]);
                case 2:
                    return t.call(e, i[0], i[1]);
                case 3:
                    return t.call(e, i[0], i[1], i[2])
            }
            return t.apply(e, i)
        }
    }, function(t, e, i) {
        var r = i(52),
            s = i(61)(r);
        t.exports = s
    }, function(t, e, i) {
        var r = i(53),
            s = i(36),
            n = i(25),
            o = s ? function(t, e) {
                return s(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(e),
                    writable: !0
                })
            } : n;
        t.exports = o
    }, function(t, e) {
        t.exports = function(t) {
            return function() {
                return t
            }
        }
    }, function(t, e, i) {
        var r = i(37),
            s = i(58),
            n = i(26),
            o = i(39),
            a = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            u = Object.prototype,
            h = l.toString,
            d = u.hasOwnProperty,
            c = RegExp("^" + h.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function(t) {
            return !(!n(t) || s(t)) && (r(t) ? c : a).test(o(t))
        }
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        var r = i(22),
            s = Object.prototype,
            n = s.hasOwnProperty,
            o = s.toString,
            a = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = n.call(t, a),
                i = t[a];
            try {
                t[a] = void 0;
                var r = !0
            } catch (t) {}
            var s = o.call(t);
            return r && (e ? t[a] = i : delete t[a]), s
        }
    }, function(t, e) {
        var i = Object.prototype.toString;
        t.exports = function(t) {
            return i.call(t)
        }
    }, function(t, e, i) {
        var r, s = i(59),
            n = (r = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function(t) {
            return !!n && n in t
        }
    }, function(t, e, i) {
        var r = i(9)["__core-js_shared__"];
        t.exports = r
    }, function(t, e) {
        t.exports = function(t, e) {
            return null == t ? void 0 : t[e]
        }
    }, function(t, e) {
        var i = Date.now;
        t.exports = function(t) {
            var e = 0,
                r = 0;
            return function() {
                var s = i(),
                    n = 16 - (s - r);
                if (r = s, n > 0) {
                    if (++e >= 800) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }
    }, function(t, e, i) {
        var r = i(63);
        t.exports = function(t, e) {
            return t && t.length && e && e.length ? r(t, e) : t
        }
    }, function(t, e, i) {
        var r = i(40),
            s = i(64),
            n = i(68),
            o = i(41),
            a = i(69),
            l = Array.prototype.splice;
        t.exports = function(t, e, i, u) {
            var h = u ? n : s,
                d = -1,
                c = e.length,
                g = t;
            for (t === e && (e = a(e)), i && (g = r(t, o(i))); ++d < c;)
                for (var p = 0, m = e[d], f = i ? i(m) : m;
                    (p = h(g, f, p, u)) > -1;) g !== t && l.call(g, p, 1), l.call(t, p, 1);
            return t
        }
    }, function(t, e, i) {
        var r = i(65),
            s = i(66),
            n = i(67);
        t.exports = function(t, e, i) {
            return e == e ? n(t, e, i) : r(t, s, i)
        }
    }, function(t, e) {
        t.exports = function(t, e, i, r) {
            for (var s = t.length, n = i + (r ? 1 : -1); r ? n-- : ++n < s;)
                if (e(t[n], n, t)) return n;
            return -1
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t != t
        }
    }, function(t, e) {
        t.exports = function(t, e, i) {
            for (var r = i - 1, s = t.length; ++r < s;)
                if (t[r] === e) return r;
            return -1
        }
    }, function(t, e) {
        t.exports = function(t, e, i, r) {
            for (var s = i - 1, n = t.length; ++s < n;)
                if (r(t[s], e)) return s;
            return -1
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            var i = -1,
                r = t.length;
            for (e || (e = Array(r)); ++i < r;) e[i] = t[i];
            return e
        }
    }, , function(t, e, i) {
        var r = i(95),
            s = i(23),
            n = Object.prototype,
            o = n.hasOwnProperty,
            a = n.propertyIsEnumerable,
            l = r(function() {
                return arguments
            }()) ? r : function(t) {
                return s(t) && o.call(t, "callee") && !a.call(t, "callee")
            };
        t.exports = l
    }, function(t, e, i) {
        (function(t) {
            var r = i(9),
                s = i(96),
                n = e && !e.nodeType && e,
                o = n && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === n ? r.Buffer : void 0,
                l = (a ? a.isBuffer : void 0) || s;
            t.exports = l
        }).call(this, i(73)(t))
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e) {
        var i = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) {
            var r = typeof t;
            return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && i.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    }, function(t, e, i) {
        var r = i(97),
            s = i(41),
            n = i(98),
            o = n && n.isTypedArray,
            a = o ? s(o) : r;
        t.exports = a
    }, function(t, e, i) {
        var r = i(27),
            s = i(112),
            n = i(113),
            o = i(114),
            a = i(115),
            l = i(116);

        function u(t) {
            var e = this.__data__ = new r(t);
            this.size = e.size
        }
        u.prototype.clear = s, u.prototype.delete = n, u.prototype.get = o, u.prototype.has = a, u.prototype.set = l, t.exports = u
    }, function(t, e) {
        t.exports = function(t, e) {
            return t === e || t != t && e != e
        }
    }, function(t, e, i) {
        var r = i(129),
            s = i(23);
        t.exports = function t(e, i, n, o, a) {
            return e === i || (null == e || null == i || !s(e) && !s(i) ? e != e && i != i : r(e, i, n, o, t, a))
        }
    }, function(t, e, i) {
        var r = i(130),
            s = i(133),
            n = i(134);
        t.exports = function(t, e, i, o, a, l) {
            var u = 1 & i,
                h = t.length,
                d = e.length;
            if (h != d && !(u && d > h)) return !1;
            var c = l.get(t),
                g = l.get(e);
            if (c && g) return c == e && g == t;
            var p = -1,
                m = !0,
                f = 2 & i ? new r : void 0;
            for (l.set(t, e), l.set(e, t); ++p < h;) {
                var _ = t[p],
                    v = e[p];
                if (o) var x = u ? o(v, _, p, e, t, l) : o(_, v, p, t, e, l);
                if (void 0 !== x) {
                    if (x) continue;
                    m = !1;
                    break
                }
                if (f) {
                    if (!s(e, (function(t, e) {
                            if (!n(f, e) && (_ === t || a(_, t, i, o, l))) return f.push(e)
                        }))) {
                        m = !1;
                        break
                    }
                } else if (_ !== v && !a(_, v, i, o, l)) {
                    m = !1;
                    break
                }
            }
            return l.delete(t), l.delete(e), m
        }
    }, function(t, e, i) {
        var r = i(26);
        t.exports = function(t) {
            return t == t && !r(t)
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return function(i) {
                return null != i && (i[t] === e && (void 0 !== e || t in Object(i)))
            }
        }
    }, function(t, e, i) {
        var r = i(83),
            s = i(31);
        t.exports = function(t, e) {
            for (var i = 0, n = (e = r(e, t)).length; null != t && i < n;) t = t[s(e[i++])];
            return i && i == n ? t : void 0
        }
    }, function(t, e, i) {
        var r = i(12),
            s = i(46),
            n = i(154),
            o = i(157);
        t.exports = function(t, e) {
            return r(t) ? t : s(t, e) ? [t] : n(o(t))
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return T
        })), i.d(e, "c", (function() {
            return F
        })), i.d(e, "d", (function() {
            return Z
        })), i.d(e, "b", (function() {
            return Pt
        })), i.d(e, "e", (function() {
            return It
        })), i.d(e, "f", (function() {
            return Tt
        }));
        i(88);
        var r, s = i(13);
        class n {
            constructor(t, e) {
                this.x = t || 0, this.y = e || 0
            }
            add(t) {
                const e = new n(0, 0);
                return e.x = this.x + t.x, e.y = this.y + t.y, e
            }
            substract(t) {
                const e = new n(0, 0);
                return e.x = this.x - t.x, e.y = this.y - t.y, e
            }
            multiply(t) {
                const e = new n(0, 0);
                return e.x = this.x * t.x, e.y = this.y * t.y, e
            }
            multiplyByScaler(t) {
                return this.multiply(new n(t, t))
            }
            division(t) {
                const e = new n(0, 0);
                return e.x = this.x / t.x, e.y = this.y / t.y, e
            }
            divisionByScalar(t) {
                return this.division(new n(t, t))
            }
            getLength() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            getDistanceWith(t) {
                return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y))
            }
            dot(t) {
                return this.x * t.x + this.y * t.y
            }
            normalize() {
                const t = Math.pow(this.x * this.x + this.y * this.y, .5);
                this.x = this.x / t, this.y = this.y / t
            }
            isEqual(t) {
                return this.x == t.x && this.y == t.y
            }
            isNotEqual(t) {
                return !this.isEqual(t)
            }
        }
        class o {
            static range(t, e, i) {
                return t < e ? t = e : t > i && (t = i), t
            }
            static sin(t) {
                return Math.sin(t)
            }
            static cos(t) {
                return Math.cos(t)
            }
            static abs(t) {
                return Math.abs(t)
            }
            static sqrt(t) {
                return Math.sqrt(t)
            }
            static getEasingSine(t) {
                return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * this.cos(t * Math.PI)
            }
            static max(t, e) {
                return t > e ? t : e
            }
            static min(t, e) {
                return t > e ? e : t
            }
            static degreesToRadian(t) {
                return t / 180 * Math.PI
            }
            static radianToDegrees(t) {
                return 180 * t / Math.PI
            }
            static directionToRadian(t, e) {
                let i = Math.atan2(e.y, e.x) - Math.atan2(t.y, t.x);
                for (; i < -Math.PI;) i += 2 * Math.PI;
                for (; i > Math.PI;) i -= 2 * Math.PI;
                return i
            }
            static directionToDegrees(t, e) {
                const i = this.directionToRadian(t, e);
                let r = this.radianToDegrees(i);
                return e.x - t.x > 0 && (r = -r), r
            }
            static radianToDirection(t) {
                const e = new n;
                return e.x = this.sin(t), e.y = this.cos(t), e
            }
            constructor() {}
        }
        class a {
            constructor() {
                this._tr = new Float32Array(16), this.loadIdentity()
            }
            static multiply(t, e, i) {
                const r = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                for (let i = 0; i < 4; ++i)
                    for (let s = 0; s < 4; ++s)
                        for (let n = 0; n < 4; ++n) r[s + 4 * i] += t[n + 4 * i] * e[s + 4 * n];
                for (let t = 0; t < 16; ++t) i[t] = r[t]
            }
            loadIdentity() {
                const t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                this.setMatrix(t)
            }
            setMatrix(t) {
                for (let e = 0; e < 16; ++e) this._tr[e] = t[e]
            }
            getArray() {
                return this._tr
            }
            getScaleX() {
                return this._tr[0]
            }
            getScaleY() {
                return this._tr[5]
            }
            getTranslateX() {
                return this._tr[12]
            }
            getTranslateY() {
                return this._tr[13]
            }
            transformX(t) {
                return this._tr[0] * t + this._tr[12]
            }
            transformY(t) {
                return this._tr[5] * t + this._tr[13]
            }
            invertTransformX(t) {
                return (t - this._tr[12]) / this._tr[0]
            }
            invertTransformY(t) {
                return (t - this._tr[13]) / this._tr[5]
            }
            translateRelative(t, e) {
                const i = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]);
                a.multiply(i, this._tr, this._tr)
            }
            translate(t, e) {
                this._tr[12] = t, this._tr[13] = e
            }
            translateX(t) {
                this._tr[12] = t
            }
            translateY(t) {
                this._tr[13] = t
            }
            scaleRelative(t, e) {
                const i = new Float32Array([t, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                a.multiply(i, this._tr, this._tr)
            }
            scale(t, e) {
                this._tr[0] = t, this._tr[5] = e
            }
            multiplyByMatrix(t) {
                a.multiply(t.getArray(), this._tr, this._tr)
            }
            clone() {
                const t = new a;
                for (let e = 0; e < this._tr.length; e++) t._tr[e] = this._tr[e];
                return t
            }
        }
        class l {
            constructor() {
                this._isCulling = !1, this._isPremultipliedAlpha = !1, this._anisortopy = 0, this._modelColor = new u, this._mvpMatrix4x4 = new a, this._mvpMatrix4x4.loadIdentity()
            }
            initialize(t) {
                this._model = t
            }
            drawModel() {
                null != this.getModel() && this.doDrawModel()
            }
            setMvpMatrix(t) {
                this._mvpMatrix4x4.setMatrix(t.getArray())
            }
            getMvpMatrix() {
                return this._mvpMatrix4x4
            }
            setModelColor(t, e, i, r) {
                t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._modelColor.R = t, this._modelColor.G = e, this._modelColor.B = i, this._modelColor.A = r
            }
            getModelColor() {
                return Object.assign({}, this._modelColor)
            }
            setIsPremultipliedAlpha(t) {
                this._isPremultipliedAlpha = t
            }
            isPremultipliedAlpha() {
                return this._isPremultipliedAlpha
            }
            setIsCulling(t) {
                this._isCulling = t
            }
            isCulling() {
                return this._isCulling
            }
            setAnisotropy(t) {
                this._anisortopy = t
            }
            getAnisotropy() {
                return this._anisortopy
            }
            getModel() {
                return this._model
            }
        }! function(t) {
            t[t.CubismBlendMode_Normal = 0] = "CubismBlendMode_Normal", t[t.CubismBlendMode_Additive = 1] = "CubismBlendMode_Additive", t[t.CubismBlendMode_Multiplicative = 2] = "CubismBlendMode_Multiplicative"
        }(r || (r = {}));
        class u {
            constructor() {
                this.R = 1, this.G = 1, this.B = 1, this.A = 1
            }
        }
        let h = !1,
            d = !1,
            c = void 0;
        var g, p;
        ! function(t) {
            t.vertexOffset = 0, t.vertexStep = 2
        }(g || (g = {}));
        class m {
            static startUp(t) {
                if (h) return v("CubismFramework.startUp() is already done."), h;
                if (Live2DCubismCore._isStarted) return h = !0, !0;
                if (Live2DCubismCore._isStarted = !0, c = t, c && Live2DCubismCore.Logging.csmSetLogFunction(c.logFunction), h = !0, h) {
                    const t = Live2DCubismCore.Version.csmGetVersion(),
                        e = (16711680 & t) >> 16,
                        i = 65535 & t,
                        r = t;
                    v("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ("00" + ((4278190080 & t) >> 24)).slice(-2), ("00" + e).slice(-2), ("0000" + i).slice(-4), r)
                }
                return v("CubismFramework.startUp() is complete."), h
            }
            static cleanUp() {
                h = !1, d = !1, c = void 0
            }
            static initialize() {
                h ? d ? x("CubismFramework.initialize() skipped, already initialized.") : (d = !0, v("CubismFramework.initialize() is complete.")) : x("CubismFramework is not started.")
            }
            static dispose() {
                h ? d ? (l.staticRelease(), d = !1, v("CubismFramework.dispose() is complete.")) : x("CubismFramework.dispose() skipped, not initialized.") : x("CubismFramework is not started.")
            }
            static isStarted() {
                return h
            }
            static isInitialized() {
                return d
            }
            static coreLogFunction(t) {
                Live2DCubismCore.Logging.csmGetLogFunction() && Live2DCubismCore.Logging.csmGetLogFunction()(t)
            }
            static getLoggingLevel() {
                return null != c ? c.loggingLevel : p.LogLevel_Off
            }
            constructor() {}
        }! function(t) {
            t[t.LogLevel_Verbose = 0] = "LogLevel_Verbose", t[t.LogLevel_Debug = 1] = "LogLevel_Debug", t[t.LogLevel_Info = 2] = "LogLevel_Info", t[t.LogLevel_Warning = 3] = "LogLevel_Warning", t[t.LogLevel_Error = 4] = "LogLevel_Error", t[t.LogLevel_Off = 5] = "LogLevel_Off"
        }(p || (p = {}));
        const f = () => {};

        function _(t, ...e) {
            b.print(p.LogLevel_Debug, "[CSM][D]" + t + "\n", e)
        }

        function v(t, ...e) {
            b.print(p.LogLevel_Info, "[CSM][I]" + t + "\n", e)
        }

        function x(t, ...e) {
            b.print(p.LogLevel_Warning, "[CSM][W]" + t + "\n", e)
        }

        function y(t, ...e) {
            b.print(p.LogLevel_Error, "[CSM][E]" + t + "\n", e)
        }
        class b {
            static print(t, e, i) {
                if (t < m.getLoggingLevel()) return;
                const r = m.coreLogFunction;
                r && r(e.replace(/{(\d+)}/g, (t, e) => i[e]))
            }
            static dumpBytes(t, e, i) {
                for (let r = 0; r < i; r++) r % 16 == 0 && r > 0 ? this.print(t, "\n") : r % 8 == 0 && r > 0 && this.print(t, "  "), this.print(t, "{0} ", [255 & e[r]]);
                this.print(t, "\n")
            }
            constructor() {}
        }
        class M {
            constructor() {
                this._fadeInSeconds = -1, this._fadeOutSeconds = -1, this._weight = 1, this._offsetSeconds = 0, this._firedEventValues = []
            }
            release() {
                this._weight = 0
            }
            updateParameters(t, e, i) {
                if (!e.isAvailable() || e.isFinished()) return;
                if (!e.isStarted()) {
                    e.setIsStarted(!0), e.setStartTime(i - this._offsetSeconds), e.setFadeInStartTime(i);
                    const t = this.getDuration();
                    e.getEndTime() < 0 && e.setEndTime(t <= 0 ? -1 : e.getStartTime() + t)
                }
                let r = this._weight;
                r = r * (0 == this._fadeInSeconds ? 1 : o.getEasingSine((i - e.getFadeInStartTime()) / this._fadeInSeconds)) * (0 == this._fadeOutSeconds || e.getEndTime() < 0 ? 1 : o.getEasingSine((e.getEndTime() - i) / this._fadeOutSeconds)), e.setState(i, r), f(0 <= r && r <= 1), this.doUpdateParameters(t, i, r, e), e.getEndTime() > 0 && e.getEndTime() < i && e.setIsFinished(!0)
            }
            setFadeInTime(t) {
                this._fadeInSeconds = t
            }
            setFadeOutTime(t) {
                this._fadeOutSeconds = t
            }
            getFadeOutTime() {
                return this._fadeOutSeconds
            }
            getFadeInTime() {
                return this._fadeInSeconds
            }
            setWeight(t) {
                this._weight = t
            }
            getWeight() {
                return this._weight
            }
            getDuration() {
                return -1
            }
            getLoopDuration() {
                return -1
            }
            setOffsetTime(t) {
                this._offsetSeconds = t
            }
            getFiredEvent(t, e) {
                return this._firedEventValues
            }
            setFinishedMotionHandler(t) {
                this._onFinishedMotion = t
            }
            getFinishedMotionHandler() {
                return this._onFinishedMotion
            }
        }
        class S extends M {
            constructor() {
                super(), this._parameters = []
            }
            static create(t) {
                const e = new S,
                    i = t.FadeInTime,
                    r = t.FadeOutTime;
                e.setFadeInTime(void 0 !== i ? i : 1), e.setFadeOutTime(void 0 !== r ? r : 1);
                const s = t.Parameters || [];
                for (let t = 0; t < s.length; ++t) {
                    const i = s[t],
                        r = i.Id,
                        n = i.Value;
                    let o;
                    switch (i.Blend) {
                        case "Multiply":
                            o = P.ExpressionBlendType_Multiply;
                            break;
                        case "Overwrite":
                            o = P.ExpressionBlendType_Overwrite;
                            break;
                        case "Add":
                        default:
                            o = P.ExpressionBlendType_Add
                    }
                    const a = {
                        parameterId: r,
                        blendType: o,
                        value: n
                    };
                    e._parameters.push(a)
                }
                return e
            }
            doUpdateParameters(t, e, i, r) {
                for (let e = 0; e < this._parameters.length; ++e) {
                    const r = this._parameters[e];
                    switch (r.blendType) {
                        case P.ExpressionBlendType_Add:
                            t.addParameterValueById(r.parameterId, r.value, i);
                            break;
                        case P.ExpressionBlendType_Multiply:
                            t.multiplyParameterValueById(r.parameterId, r.value, i);
                            break;
                        case P.ExpressionBlendType_Overwrite:
                            t.setParameterValueById(r.parameterId, r.value, i)
                    }
                }
            }
        }
        var P;
        ! function(t) {
            t[t.ExpressionBlendType_Add = 0] = "ExpressionBlendType_Add", t[t.ExpressionBlendType_Multiply = 1] = "ExpressionBlendType_Multiply", t[t.ExpressionBlendType_Overwrite = 2] = "ExpressionBlendType_Overwrite"
        }(P || (P = {}));
        class C {
            constructor() {
                this._autoDelete = !1, this._available = !0, this._finished = !1, this._started = !1, this._startTimeSeconds = -1, this._fadeInStartTimeSeconds = 0, this._endTimeSeconds = -1, this._stateTimeSeconds = 0, this._stateWeight = 0, this._lastEventCheckSeconds = 0, this._motionQueueEntryHandle = this, this._fadeOutSeconds = 0, this._isTriggeredFadeOut = !1
            }
            release() {
                this._autoDelete && this._motion && this._motion.release()
            }
            setFadeOut(t) {
                this._fadeOutSeconds = t, this._isTriggeredFadeOut = !0
            }
            startFadeOut(t, e) {
                const i = e + t;
                this._isTriggeredFadeOut = !0, (this._endTimeSeconds < 0 || i < this._endTimeSeconds) && (this._endTimeSeconds = i)
            }
            isFinished() {
                return this._finished
            }
            isStarted() {
                return this._started
            }
            getStartTime() {
                return this._startTimeSeconds
            }
            getFadeInStartTime() {
                return this._fadeInStartTimeSeconds
            }
            getEndTime() {
                return this._endTimeSeconds
            }
            setStartTime(t) {
                this._startTimeSeconds = t
            }
            setFadeInStartTime(t) {
                this._fadeInStartTimeSeconds = t
            }
            setEndTime(t) {
                this._endTimeSeconds = t
            }
            setIsFinished(t) {
                this._finished = t
            }
            setIsStarted(t) {
                this._started = t
            }
            isAvailable() {
                return this._available
            }
            setIsAvailable(t) {
                this._available = t
            }
            setState(t, e) {
                this._stateTimeSeconds = t, this._stateWeight = e
            }
            getStateTime() {
                return this._stateTimeSeconds
            }
            getStateWeight() {
                return this._stateWeight
            }
            getLastCheckEventSeconds() {
                return this._lastEventCheckSeconds
            }
            setLastCheckEventSeconds(t) {
                this._lastEventCheckSeconds = t
            }
            isTriggeredFadeOut() {
                return this._isTriggeredFadeOut && this._endTimeSeconds < 0
            }
            getFadeOutSeconds() {
                return this._fadeOutSeconds
            }
        }
        class w {
            constructor() {
                this._userTimeSeconds = 0, this._eventCustomData = null, this._motions = []
            }
            release() {
                for (let t = 0; t < this._motions.length; ++t) this._motions[t] && this._motions[t].release();
                this._motions = void 0
            }
            startMotion(t, e, i) {
                if (null == t) return I;
                let r;
                for (let t = 0; t < this._motions.length; ++t) r = this._motions[t], null != r && r.setFadeOut(r._motion.getFadeOutTime());
                return r = new C, r._autoDelete = e, r._motion = t, this._motions.push(r), r._motionQueueEntryHandle
            }
            isFinished() {
                let t = 0;
                for (; t < this._motions.length;) {
                    const e = this._motions[t];
                    if (null != e)
                        if (null != e._motion) {
                            if (!e.isFinished()) return !1;
                            t++
                        } else e.release(), this._motions.splice(t, 1);
                    else this._motions.splice(t, 1)
                }
                return !0
            }
            isFinishedByHandle(t) {
                for (let e = 0; e < this._motions.length; e++) {
                    const i = this._motions[e];
                    if (null != i && (i._motionQueueEntryHandle == t && !i.isFinished())) return !1
                }
                return !0
            }
            stopAllMotions() {
                for (let t = 0; t < this._motions.length; t++) {
                    const e = this._motions[t];
                    null != e && e.release()
                }
                this._motions = []
            }
            getCubismMotionQueueEntry(t) {
                return this._motions.find(e => null != e && e._motionQueueEntryHandle == t)
            }
            setEventCallback(t, e = null) {
                this._eventCallBack = t, this._eventCustomData = e
            }
            doUpdateMotion(t, e) {
                let i = !1,
                    r = 0;
                for (; r < this._motions.length;) {
                    const s = this._motions[r];
                    if (null == s) {
                        this._motions.splice(r, 1);
                        continue
                    }
                    const n = s._motion;
                    if (null == n) {
                        s.release(), this._motions.splice(r, 1);
                        continue
                    }
                    n.updateParameters(t, s, e), i = !0;
                    const o = n.getFiredEvent(s.getLastCheckEventSeconds() - s.getStartTime(), e - s.getStartTime());
                    for (let t = 0; t < o.length; ++t) this._eventCallBack(this, o[t], this._eventCustomData);
                    s.setLastCheckEventSeconds(e), s.isFinished() ? (s.release(), this._motions.splice(r, 1)) : (s.isTriggeredFadeOut() && s.startFadeOut(s.getFadeOutSeconds(), e), r++)
                }
                return i
            }
        }
        const I = -1;
        class T extends s.a {
            constructor(t, e) {
                var i;
                super(t, e), this.queueManager = new w, this.definitions = null !== (i = t.expressions) && void 0 !== i ? i : [], this.init()
            }
            isFinished() {
                return this.queueManager.isFinished()
            }
            getExpressionIndex(t) {
                return this.definitions.findIndex(e => e.Name === t)
            }
            getExpressionFile(t) {
                return t.File
            }
            createExpression(t, e) {
                return S.create(t)
            }
            _setExpression(t) {
                return this.queueManager.startMotion(t, !1, performance.now())
            }
            stopAllExpressions() {
                this.queueManager.stopAllMotions()
            }
            updateParameters(t, e) {
                return this.queueManager.doUpdateMotion(t, e)
            }
        }
        var L = i(14),
            E = i(0);
        class D {
            constructor(t) {
                this.groups = t.Groups, this.hitAreas = t.HitAreas, this.layout = t.Layout, this.moc = t.FileReferences.Moc, this.expressions = t.FileReferences.Expressions, this.motions = t.FileReferences.Motions, this.textures = t.FileReferences.Textures, this.physics = t.FileReferences.Physics, this.pose = t.FileReferences.Pose
            }
            getEyeBlinkParameters() {
                var t, e;
                return null === (e = null === (t = this.groups) || void 0 === t ? void 0 : t.find(t => "EyeBlink" === t.Name)) || void 0 === e ? void 0 : e.Ids
            }
            getLipSyncParameters() {
                var t, e;
                return null === (e = null === (t = this.groups) || void 0 === t ? void 0 : t.find(t => "LipSync" === t.Name)) || void 0 === e ? void 0 : e.Ids
            }
        }
        class F extends L.a {
            constructor(t) {
                if (super(t), !F.isValidJSON(t)) throw new TypeError("Invalid JSON.");
                Object.assign(this, new D(t))
            }
            static isValidJSON(t) {
                var e;
                return !!(null == t ? void 0 : t.FileReferences) && "string" == typeof t.FileReferences.Moc && (null === (e = t.FileReferences.Textures) || void 0 === e ? void 0 : e.length) > 0 && t.FileReferences.Textures.every(t => "string" == typeof t)
            }
            replaceFiles(t) {
                if (super.replaceFiles(t), this.motions)
                    for (const [e, i] of Object.entries(this.motions))
                        for (let r = 0; r < i.length; r++) i[r].File = t(i[r].File, `motions.${e}[${r}].File`), void 0 !== i[r].Sound && (i[r].Sound = t(i[r].Sound, `motions.${e}[${r}].Sound`));
                if (this.expressions)
                    for (let e = 0; e < this.expressions.length; e++) this.expressions[e].File = t(this.expressions[e].File, `expressions[${e}].File`)
            }
        }
        Object(E.a)(F, [D]);
        var A, O, B = i(15);
        ! function(t) {
            t[t.CubismMotionCurveTarget_Model = 0] = "CubismMotionCurveTarget_Model", t[t.CubismMotionCurveTarget_Parameter = 1] = "CubismMotionCurveTarget_Parameter", t[t.CubismMotionCurveTarget_PartOpacity = 2] = "CubismMotionCurveTarget_PartOpacity"
        }(A || (A = {})),
        function(t) {
            t[t.CubismMotionSegmentType_Linear = 0] = "CubismMotionSegmentType_Linear", t[t.CubismMotionSegmentType_Bezier = 1] = "CubismMotionSegmentType_Bezier", t[t.CubismMotionSegmentType_Stepped = 2] = "CubismMotionSegmentType_Stepped", t[t.CubismMotionSegmentType_InverseStepped = 3] = "CubismMotionSegmentType_InverseStepped"
        }(O || (O = {}));
        class R {
            constructor(t = 0, e = 0) {
                this.time = t, this.value = e
            }
        }
        class k {
            constructor() {
                this.basePointIndex = 0, this.segmentType = 0
            }
        }
        class U {
            constructor() {
                this.id = "", this.type = A.CubismMotionCurveTarget_Model, this.segmentCount = 0, this.baseSegmentIndex = 0, this.fadeInTime = 0, this.fadeOutTime = 0
            }
        }
        class j {
            constructor() {
                this.fireTime = 0, this.value = ""
            }
        }
        class N {
            constructor() {
                this.duration = 0, this.loop = !1, this.curveCount = 0, this.eventCount = 0, this.fps = 0, this.curves = [], this.segments = [], this.points = [], this.events = []
            }
        }
        class V {
            constructor(t) {
                this._json = t
            }
            release() {
                this._json = void 0
            }
            getMotionDuration() {
                return this._json.Meta.Duration
            }
            isMotionLoop() {
                return this._json.Meta.Loop || !1
            }
            getMotionCurveCount() {
                return this._json.Meta.CurveCount
            }
            getMotionFps() {
                return this._json.Meta.Fps
            }
            getMotionTotalSegmentCount() {
                return this._json.Meta.TotalSegmentCount
            }
            getMotionTotalPointCount() {
                return this._json.Meta.TotalPointCount
            }
            getMotionFadeInTime() {
                return this._json.Meta.FadeInTime
            }
            getMotionFadeOutTime() {
                return this._json.Meta.FadeOutTime
            }
            getMotionCurveTarget(t) {
                return this._json.Curves[t].Target
            }
            getMotionCurveId(t) {
                return this._json.Curves[t].Id
            }
            getMotionCurveFadeInTime(t) {
                return this._json.Curves[t].FadeInTime
            }
            getMotionCurveFadeOutTime(t) {
                return this._json.Curves[t].FadeOutTime
            }
            getMotionCurveSegmentCount(t) {
                return this._json.Curves[t].Segments.length
            }
            getMotionCurveSegment(t, e) {
                return this._json.Curves[t].Segments[e]
            }
            getEventCount() {
                return this._json.Meta.UserDataCount || 0
            }
            getTotalEventValueSize() {
                return this._json.Meta.TotalUserDataSize
            }
            getEventTime(t) {
                return this._json.UserData[t].Time
            }
            getEventValue(t) {
                return this._json.UserData[t].Value
            }
        }

        function z(t, e, i) {
            const r = new R;
            return r.time = t.time + (e.time - t.time) * i, r.value = t.value + (e.value - t.value) * i, r
        }

        function G(t, e) {
            let i = (e - t[0].time) / (t[1].time - t[0].time);
            return i < 0 && (i = 0), t[0].value + (t[1].value - t[0].value) * i
        }

        function X(t, e) {
            let i = (e - t[0].time) / (t[3].time - t[0].time);
            i < 0 && (i = 0);
            const r = z(t[0], t[1], i),
                s = z(t[1], t[2], i),
                n = z(t[2], t[3], i),
                o = z(r, s, i),
                a = z(s, n, i);
            return z(o, a, i).value
        }

        function W(t, e) {
            return t[0].value
        }

        function Y(t, e) {
            return t[1].value
        }

        function q(t, e, i) {
            const r = t.curves[e];
            let s = -1;
            const n = r.baseSegmentIndex + r.segmentCount;
            let o = 0;
            for (let e = r.baseSegmentIndex; e < n; ++e)
                if (o = t.segments[e].basePointIndex + (t.segments[e].segmentType == O.CubismMotionSegmentType_Bezier ? 3 : 1), t.points[o].time > i) {
                    s = e;
                    break
                } if (-1 == s) return t.points[o].value;
            const a = t.segments[s];
            return a.evaluate(t.points.slice(a.basePointIndex), i)
        }
        class H extends M {
            constructor() {
                super(), this._eyeBlinkParameterIds = [], this._lipSyncParameterIds = [], this._sourceFrameRate = 30, this._loopDurationSeconds = -1, this._isLoop = !1, this._isLoopFadeIn = !0, this._lastWeight = 0
            }
            static create(t, e) {
                const i = new H;
                return i.parse(t), i._sourceFrameRate = i._motionData.fps, i._loopDurationSeconds = i._motionData.duration, i._onFinishedMotion = e, i
            }
            doUpdateParameters(t, e, i, r) {
                null == this._modelCurveIdEyeBlink && (this._modelCurveIdEyeBlink = "EyeBlink"), null == this._modelCurveIdLipSync && (this._modelCurveIdLipSync = "LipSync");
                let s = e - r.getStartTime();
                s < 0 && (s = 0);
                let n = Number.MAX_VALUE,
                    a = Number.MAX_VALUE;
                let l = 0,
                    u = 0;
                this._eyeBlinkParameterIds.length > 64 && _("too many eye blink targets : {0}", this._eyeBlinkParameterIds.length), this._lipSyncParameterIds.length > 64 && _("too many lip sync targets : {0}", this._lipSyncParameterIds.length);
                const h = this._fadeInSeconds <= 0 ? 1 : o.getEasingSine((e - r.getFadeInStartTime()) / this._fadeInSeconds),
                    d = this._fadeOutSeconds <= 0 || r.getEndTime() < 0 ? 1 : o.getEasingSine((r.getEndTime() - e) / this._fadeOutSeconds);
                let c, g, p, m = s;
                if (this._isLoop)
                    for (; m > this._motionData.duration;) m -= this._motionData.duration;
                const f = this._motionData.curves;
                for (g = 0; g < this._motionData.curveCount && f[g].type == A.CubismMotionCurveTarget_Model; ++g) c = q(this._motionData, g, m), f[g].id == this._modelCurveIdEyeBlink ? a = c : f[g].id == this._modelCurveIdLipSync && (n = c);
                for (; g < this._motionData.curveCount && f[g].type == A.CubismMotionCurveTarget_Parameter; ++g) {
                    if (p = t.getParameterIndex(f[g].id), -1 == p) continue;
                    const s = t.getParameterValueByIndex(p);
                    if (c = q(this._motionData, g, m), a != Number.MAX_VALUE)
                        for (let t = 0; t < this._eyeBlinkParameterIds.length && t < 64; ++t)
                            if (this._eyeBlinkParameterIds[t] == f[g].id) {
                                c *= a, u |= 1 << t;
                                break
                            } if (n != Number.MAX_VALUE)
                        for (let t = 0; t < this._lipSyncParameterIds.length && t < 64; ++t)
                            if (this._lipSyncParameterIds[t] == f[g].id) {
                                c += n, l |= 1 << t;
                                break
                            } let _;
                    if (f[g].fadeInTime < 0 && f[g].fadeOutTime < 0) _ = s + (c - s) * i;
                    else {
                        let t, i;
                        t = f[g].fadeInTime < 0 ? h : 0 == f[g].fadeInTime ? 1 : o.getEasingSine((e - r.getFadeInStartTime()) / f[g].fadeInTime), i = f[g].fadeOutTime < 0 ? d : 0 == f[g].fadeOutTime || r.getEndTime() < 0 ? 1 : o.getEasingSine((r.getEndTime() - e) / f[g].fadeOutTime), _ = s + (c - s) * (this._weight * t * i)
                    }
                    t.setParameterValueByIndex(p, _, 1)
                }
                if (a != Number.MAX_VALUE)
                    for (let e = 0; e < this._eyeBlinkParameterIds.length && e < 64; ++e) {
                        const r = t.getParameterValueById(this._eyeBlinkParameterIds[e]);
                        if (u >> e & 1) continue;
                        const s = r + (a - r) * i;
                        t.setParameterValueById(this._eyeBlinkParameterIds[e], s)
                    }
                if (n != Number.MAX_VALUE)
                    for (let e = 0; e < this._lipSyncParameterIds.length && e < 64; ++e) {
                        const r = t.getParameterValueById(this._lipSyncParameterIds[e]);
                        if (l >> e & 1) continue;
                        const s = r + (n - r) * i;
                        t.setParameterValueById(this._lipSyncParameterIds[e], s)
                    }
                for (; g < this._motionData.curveCount && f[g].type == A.CubismMotionCurveTarget_PartOpacity; ++g) p = t.getParameterIndex(f[g].id), -1 != p && (c = q(this._motionData, g, m), t.setParameterValueByIndex(p, c));
                s >= this._motionData.duration && (this._isLoop ? (r.setStartTime(e), this._isLoopFadeIn && r.setFadeInStartTime(e)) : (this._onFinishedMotion && this._onFinishedMotion(this), r.setIsFinished(!0))), this._lastWeight = i
            }
            setIsLoop(t) {
                this._isLoop = t
            }
            isLoop() {
                return this._isLoop
            }
            setIsLoopFadeIn(t) {
                this._isLoopFadeIn = t
            }
            isLoopFadeIn() {
                return this._isLoopFadeIn
            }
            getDuration() {
                return this._isLoop ? -1 : this._loopDurationSeconds
            }
            getLoopDuration() {
                return this._loopDurationSeconds
            }
            setParameterFadeInTime(t, e) {
                const i = this._motionData.curves;
                for (let r = 0; r < this._motionData.curveCount; ++r)
                    if (t == i[r].id) return void(i[r].fadeInTime = e)
            }
            setParameterFadeOutTime(t, e) {
                const i = this._motionData.curves;
                for (let r = 0; r < this._motionData.curveCount; ++r)
                    if (t == i[r].id) return void(i[r].fadeOutTime = e)
            }
            getParameterFadeInTime(t) {
                const e = this._motionData.curves;
                for (let i = 0; i < this._motionData.curveCount; ++i)
                    if (t == e[i].id) return e[i].fadeInTime;
                return -1
            }
            getParameterFadeOutTime(t) {
                const e = this._motionData.curves;
                for (let i = 0; i < this._motionData.curveCount; ++i)
                    if (t == e[i].id) return e[i].fadeOutTime;
                return -1
            }
            setEffectIds(t, e) {
                this._eyeBlinkParameterIds = t, this._lipSyncParameterIds = e
            }
            release() {
                this._motionData = void 0
            }
            parse(t) {
                this._motionData = new N;
                let e = new V(t);
                this._motionData.duration = e.getMotionDuration(), this._motionData.loop = e.isMotionLoop(), this._motionData.curveCount = e.getMotionCurveCount(), this._motionData.fps = e.getMotionFps(), this._motionData.eventCount = e.getEventCount();
                const i = e.getMotionFadeInTime(),
                    r = e.getMotionFadeOutTime();
                this._fadeInSeconds = void 0 !== i ? i < 0 ? 1 : i : 1, this._fadeOutSeconds = void 0 !== r ? r < 0 ? 1 : r : 1, this._motionData.curves = Array.from({
                    length: this._motionData.curveCount
                }).map(() => new U), this._motionData.segments = Array.from({
                    length: e.getMotionTotalSegmentCount()
                }).map(() => new k), this._motionData.events = Array.from({
                    length: this._motionData.eventCount
                }).map(() => new j), this._motionData.points = [];
                let s = 0,
                    n = 0;
                for (let t = 0; t < this._motionData.curveCount; ++t) {
                    const i = this._motionData.curves[t];
                    switch (e.getMotionCurveTarget(t)) {
                        case "Model":
                            i.type = A.CubismMotionCurveTarget_Model;
                            break;
                        case "Parameter":
                            i.type = A.CubismMotionCurveTarget_Parameter;
                            break;
                        case "PartOpacity":
                            i.type = A.CubismMotionCurveTarget_PartOpacity
                    }
                    i.id = e.getMotionCurveId(t), i.baseSegmentIndex = n;
                    const r = e.getMotionCurveFadeInTime(t),
                        o = e.getMotionCurveFadeOutTime(t);
                    i.fadeInTime = void 0 !== r ? r : -1, i.fadeOutTime = void 0 !== o ? o : -1;
                    for (let r = 0; r < e.getMotionCurveSegmentCount(t);) {
                        switch (0 == r ? (this._motionData.segments[n].basePointIndex = s, this._motionData.points[s] = new R(e.getMotionCurveSegment(t, r), e.getMotionCurveSegment(t, r + 1)), s += 1, r += 2) : this._motionData.segments[n].basePointIndex = s - 1, e.getMotionCurveSegment(t, r)) {
                            case O.CubismMotionSegmentType_Linear:
                                this._motionData.segments[n].segmentType = O.CubismMotionSegmentType_Linear, this._motionData.segments[n].evaluate = G, this._motionData.points[s] = new R(e.getMotionCurveSegment(t, r + 1), e.getMotionCurveSegment(t, r + 2)), s += 1, r += 3;
                                break;
                            case O.CubismMotionSegmentType_Bezier:
                                this._motionData.segments[n].segmentType = O.CubismMotionSegmentType_Bezier, this._motionData.segments[n].evaluate = X, this._motionData.points[s] = new R(e.getMotionCurveSegment(t, r + 1), e.getMotionCurveSegment(t, r + 2)), this._motionData.points[s + 1] = new R(e.getMotionCurveSegment(t, r + 3), e.getMotionCurveSegment(t, r + 4)), this._motionData.points[s + 2] = new R(e.getMotionCurveSegment(t, r + 5), e.getMotionCurveSegment(t, r + 6)), s += 3, r += 7;
                                break;
                            case O.CubismMotionSegmentType_Stepped:
                                this._motionData.segments[n].segmentType = O.CubismMotionSegmentType_Stepped, this._motionData.segments[n].evaluate = W, this._motionData.points[s] = new R(e.getMotionCurveSegment(t, r + 1), e.getMotionCurveSegment(t, r + 2)), s += 1, r += 3;
                                break;
                            case O.CubismMotionSegmentType_InverseStepped:
                                this._motionData.segments[n].segmentType = O.CubismMotionSegmentType_InverseStepped, this._motionData.segments[n].evaluate = Y, this._motionData.points[s] = new R(e.getMotionCurveSegment(t, r + 1), e.getMotionCurveSegment(t, r + 2)), s += 1, r += 3;
                                break;
                            default:
                                f(0)
                        }++i.segmentCount, ++n
                    }
                    this._motionData.curves.push(i)
                }
                for (let t = 0; t < e.getEventCount(); ++t) this._motionData.events[t].fireTime = e.getEventTime(t), this._motionData.events[t].value = e.getEventValue(t);
                e.release()
            }
            getFiredEvent(t, e) {
                this._firedEventValues.length = 0;
                for (let i = 0; i < this._motionData.eventCount; ++i) this._motionData.events[i].fireTime > t && this._motionData.events[i].fireTime <= e && this._firedEventValues.push(this._motionData.events[i].value);
                return this._firedEventValues
            }
        }
        var $ = i(1);
        class Z extends B.a {
            constructor(t, e) {
                var i;
                super(t, e), this.groups = {
                    idle: "Idle"
                }, this.motionDataType = "json", this.queueManager = new w, this.definitions = null !== (i = t.motions) && void 0 !== i ? i : {}, this.eyeBlinkIds = t.getEyeBlinkParameters() || [], this.lipSyncIds = t.getLipSyncParameters() || [], this.init(e)
            }
            init(t) {
                super.init(t), this.settings.expressions && (this.expressionManager = new T(this.settings, t)), this.queueManager.setEventCallback((t, e, i) => {
                    this.emit("motion:" + e)
                })
            }
            isFinished() {
                return this.queueManager.isFinished()
            }
            _startMotion(t, e) {
                return t.setFinishedMotionHandler(e), this.queueManager.stopAllMotions(), this.queueManager.startMotion(t, !1, performance.now())
            }
            _stopAllMotions() {
                this.queueManager.stopAllMotions()
            }
            createMotion(t, e, i) {
                const r = H.create(t),
                    s = (e === this.groups.idle ? $.b.idleMotionFadingDuration : $.b.motionFadingDuration) / 1e3;
                return r.setFadeInTime(i.FadeInTime > 0 ? i.FadeInTime : s), r.setFadeOutTime(i.FadeOutTime > 0 ? i.FadeOutTime : s), r.setEffectIds(this.eyeBlinkIds, this.lipSyncIds), r
            }
            getMotionFile(t) {
                return t.File
            }
            getMotionName(t) {
                return t.File
            }
            getSoundFile(t) {
                return t.Sound
            }
            updateParameters(t, e) {
                return this.queueManager.doUpdateMotion(t, e)
            }
            destroy() {
                super.destroy(), this.queueManager.release(), this.queueManager = void 0
            }
        }
        var J = i(16);
        class Q {
            constructor() {
                this._breathParameters = [], this._currentTime = 0
            }
            static create() {
                return new Q
            }
            setParameters(t) {
                this._breathParameters = t
            }
            getParameters() {
                return this._breathParameters
            }
            updateParameters(t, e) {
                this._currentTime += e;
                const i = 2 * this._currentTime * 3.14159;
                for (let e = 0; e < this._breathParameters.length; ++e) {
                    const r = this._breathParameters[e];
                    t.addParameterValueById(r.parameterId, r.offset + r.peak * Math.sin(i / r.cycle), r.weight)
                }
            }
        }
        class K {
            constructor(t, e, i, r, s) {
                this.parameterId = null == t ? void 0 : t, this.offset = null == e ? 0 : e, this.peak = null == i ? 0 : i, this.cycle = null == r ? 0 : r, this.weight = null == s ? 0 : s
            }
        }
        class tt {
            constructor(t) {
                var e, i;
                this._blinkingState = et.EyeState_First, this._nextBlinkingTime = 0, this._stateStartTimeSeconds = 0, this._blinkingIntervalSeconds = 4, this._closingSeconds = .1, this._closedSeconds = .05, this._openingSeconds = .15, this._userTimeSeconds = 0, this._parameterIds = [], null != t && (this._parameterIds = null !== (i = null === (e = t.getEyeBlinkParameters()) || void 0 === e ? void 0 : e.slice()) && void 0 !== i ? i : this._parameterIds)
            }
            static create(t) {
                return new tt(t)
            }
            setBlinkingInterval(t) {
                this._blinkingIntervalSeconds = t
            }
            setBlinkingSetting(t, e, i) {
                this._closingSeconds = t, this._closedSeconds = e, this._openingSeconds = i
            }
            setParameterIds(t) {
                this._parameterIds = t
            }
            getParameterIds() {
                return this._parameterIds
            }
            updateParameters(t, e) {
                let i;
                this._userTimeSeconds += e;
                let r = 0;
                switch (this._blinkingState) {
                    case et.EyeState_Closing:
                        r = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds, r >= 1 && (r = 1, this._blinkingState = et.EyeState_Closed, this._stateStartTimeSeconds = this._userTimeSeconds), i = 1 - r;
                        break;
                    case et.EyeState_Closed:
                        r = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds, r >= 1 && (this._blinkingState = et.EyeState_Opening, this._stateStartTimeSeconds = this._userTimeSeconds), i = 0;
                        break;
                    case et.EyeState_Opening:
                        r = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds, r >= 1 && (r = 1, this._blinkingState = et.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming()), i = r;
                        break;
                    case et.EyeState_Interval:
                        this._nextBlinkingTime < this._userTimeSeconds && (this._blinkingState = et.EyeState_Closing, this._stateStartTimeSeconds = this._userTimeSeconds), i = 1;
                        break;
                    case et.EyeState_First:
                    default:
                        this._blinkingState = et.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming(), i = 1
                }
                tt.CloseIfZero || (i = -i);
                for (let e = 0; e < this._parameterIds.length; ++e) t.setParameterValueById(this._parameterIds[e], i)
            }
            determinNextBlinkingTiming() {
                const t = Math.random();
                return this._userTimeSeconds + t * (2 * this._blinkingIntervalSeconds - 1)
            }
        }
        var et, it;
        tt.CloseIfZero = !0,
            function(t) {
                t[t.EyeState_First = 0] = "EyeState_First", t[t.EyeState_Interval = 1] = "EyeState_Interval", t[t.EyeState_Closing = 2] = "EyeState_Closing", t[t.EyeState_Closed = 3] = "EyeState_Closed", t[t.EyeState_Opening = 4] = "EyeState_Opening"
            }(et || (et = {}));
        class rt {
            constructor(t = 0, e = 0, i = 0, r = 0) {
                this.x = t, this.y = e, this.width = i, this.height = r
            }
            getCenterX() {
                return this.x + .5 * this.width
            }
            getCenterY() {
                return this.y + .5 * this.height
            }
            getRight() {
                return this.x + this.width
            }
            getBottom() {
                return this.y + this.height
            }
            setRect(t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }
            expand(t, e) {
                this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
            }
        }! function(t) {
            t.supportMoreMaskDivisions = !0
        }(it || (it = {}));
        let st, nt, ot;
        class at {
            constructor() {
                this._maskRenderTexture = null, this._colorBuffer = null, this._currentFrameNo = 0, this._clippingMaskBufferSize = 256, this._clippingContextListForMask = [], this._clippingContextListForDraw = [], this._channelColors = [], this._tmpBoundsOnModel = new rt, this._tmpMatrix = new a, this._tmpMatrixForMask = new a, this._tmpMatrixForDraw = new a;
                let t = new u;
                t.R = 1, t.G = 0, t.B = 0, t.A = 0, this._channelColors.push(t), t = new u, t.R = 0, t.G = 1, t.B = 0, t.A = 0, this._channelColors.push(t), t = new u, t.R = 0, t.G = 0, t.B = 1, t.A = 0, this._channelColors.push(t), t = new u, t.R = 0, t.G = 0, t.B = 0, t.A = 1, this._channelColors.push(t)
            }
            getChannelFlagAsColor(t) {
                return this._channelColors[t]
            }
            getMaskRenderTexture() {
                let t = 0;
                if (this._maskTexture && 0 != this._maskTexture.texture && (this._maskTexture.frameNo = this._currentFrameNo, t = this._maskTexture.texture), 0 == t) {
                    const e = this._clippingMaskBufferSize;
                    this._colorBuffer = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, e, e, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.bindTexture(this.gl.TEXTURE_2D, null), t = this.gl.createFramebuffer(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ot), this._maskTexture = new lt(this._currentFrameNo, t)
                }
                return t
            }
            setGL(t) {
                this.gl = t
            }
            calcClippedDrawTotalBounds(t, e) {
                let i = Number.MAX_VALUE,
                    r = Number.MAX_VALUE,
                    s = Number.MIN_VALUE,
                    n = Number.MIN_VALUE;
                const o = e._clippedDrawableIndexList.length;
                for (let a = 0; a < o; a++) {
                    const o = e._clippedDrawableIndexList[a],
                        l = t.getDrawableVertexCount(o),
                        u = t.getDrawableVertices(o);
                    let h = Number.MAX_VALUE,
                        d = Number.MAX_VALUE,
                        c = Number.MIN_VALUE,
                        p = Number.MIN_VALUE;
                    const m = l * g.vertexStep;
                    for (let t = g.vertexOffset; t < m; t += g.vertexStep) {
                        const e = u[t],
                            i = u[t + 1];
                        e < h && (h = e), e > c && (c = e), i < d && (d = i), i > p && (p = i)
                    }
                    if (h != Number.MAX_VALUE)
                        if (h < i && (i = h), d < r && (r = d), c > s && (s = c), p > n && (n = p), i == Number.MAX_VALUE) e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = !1;
                        else {
                            e._isUsing = !0;
                            const t = s - i,
                                o = n - r;
                            e._allClippedDrawRect.x = i, e._allClippedDrawRect.y = r, e._allClippedDrawRect.width = t, e._allClippedDrawRect.height = o
                        }
                }
            }
            release() {
                var t, e, i;
                const r = this;
                for (let e = 0; e < this._clippingContextListForMask.length; e++) this._clippingContextListForMask[e] && (null === (t = this._clippingContextListForMask[e]) || void 0 === t || t.release());
                r._clippingContextListForMask = void 0, r._clippingContextListForDraw = void 0, this._maskTexture && (null === (e = this.gl) || void 0 === e || e.deleteFramebuffer(this._maskTexture.texture), r._maskTexture = void 0), r._channelColors = void 0, null === (i = this.gl) || void 0 === i || i.deleteTexture(this._colorBuffer), this._colorBuffer = null
            }
            initialize(t, e, i, r) {
                for (let t = 0; t < e; t++) {
                    if (r[t] <= 0) {
                        this._clippingContextListForDraw.push(null);
                        continue
                    }
                    let e = this.findSameClip(i[t], r[t]);
                    null == e && (e = new ut(this, i[t], r[t]), this._clippingContextListForMask.push(e)), e.addClippedDrawable(t), this._clippingContextListForDraw.push(e)
                }
            }
            setupClippingContext(t, e) {
                this._currentFrameNo++;
                let i = 0;
                for (let e = 0; e < this._clippingContextListForMask.length; e++) {
                    const r = this._clippingContextListForMask[e];
                    this.calcClippedDrawTotalBounds(t, r), r._isUsing && i++
                }
                if (i > 0) {
                    this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize), this._maskRenderTexture = this.getMaskRenderTexture();
                    e.getMvpMatrix();
                    e.preDraw(), this.setupLayoutBounds(i), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                    for (let i = 0; i < this._clippingContextListForMask.length; i++) {
                        const s = this._clippingContextListForMask[i],
                            n = s._allClippedDrawRect,
                            o = s._layoutBounds,
                            a = .05;
                        this._tmpBoundsOnModel.setRect(n), this._tmpBoundsOnModel.expand(n.width * a, n.height * a);
                        const l = o.width / this._tmpBoundsOnModel.width,
                            u = o.height / this._tmpBoundsOnModel.height;
                        this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(-1, -1), this._tmpMatrix.scaleRelative(2, 2), this._tmpMatrix.translateRelative(o.x, o.y), this._tmpMatrix.scaleRelative(l, u), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()), this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(o.x, o.y), this._tmpMatrix.scaleRelative(l, u), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray()), s._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), s._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                        const h = s._clippingIdCount;
                        for (let i = 0; i < h; i++) {
                            const n = s._clippingIdList[i];
                            t.getDrawableDynamicFlagVertexPositionsDidChange(n) && (e.setIsCulling(0 != t.getDrawableCulling(n)), e.setClippingContextBufferForMask(s), e.drawMesh(t.getDrawableTextureIndices(n), t.getDrawableVertexIndexCount(n), t.getDrawableVertexCount(n), t.getDrawableVertexIndices(n), t.getDrawableVertices(n), t.getDrawableVertexUvs(n), t.getDrawableOpacity(n), r.CubismBlendMode_Normal, !1))
                        }
                    }
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ot), e.setClippingContextBufferForMask(null), this.gl.viewport(nt[0], nt[1], nt[2], nt[3])
                }
            }
            findSameClip(t, e) {
                for (let i = 0; i < this._clippingContextListForMask.length; i++) {
                    const r = this._clippingContextListForMask[i],
                        s = r._clippingIdCount;
                    if (s != e) continue;
                    let n = 0;
                    for (let e = 0; e < s; e++) {
                        const i = r._clippingIdList[e];
                        for (let e = 0; e < s; e++)
                            if (t[e] == i) {
                                n++;
                                break
                            }
                    }
                    if (n == s) return r
                }
                return null
            }
            setupLayoutBounds(t) {
                let e = t / 4,
                    i = t % 4;
                e = ~~e, i = ~~i;
                let r = 0;
                for (let t = 0; t < 4; t++) {
                    const s = e + (t < i ? 1 : 0);
                    if (0 == s);
                    else if (1 == s) {
                        const e = this._clippingContextListForMask[r++];
                        e._layoutChannelNo = t, e._layoutBounds.x = 0, e._layoutBounds.y = 0, e._layoutBounds.width = 1, e._layoutBounds.height = 1
                    } else if (2 == s)
                        for (let e = 0; e < s; e++) {
                            let i = e % 2;
                            i = ~~i;
                            const s = this._clippingContextListForMask[r++];
                            s._layoutChannelNo = t, s._layoutBounds.x = .5 * i, s._layoutBounds.y = 0, s._layoutBounds.width = .5, s._layoutBounds.height = 1
                        } else if (s <= 4)
                            for (let e = 0; e < s; e++) {
                                let i = e % 2,
                                    s = e / 2;
                                i = ~~i, s = ~~s;
                                const n = this._clippingContextListForMask[r++];
                                n._layoutChannelNo = t, n._layoutBounds.x = .5 * i, n._layoutBounds.y = .5 * s, n._layoutBounds.width = .5, n._layoutBounds.height = .5
                            } else if (s <= 9)
                                for (let e = 0; e < s; e++) {
                                    let i = e % 3,
                                        s = e / 3;
                                    i = ~~i, s = ~~s;
                                    const n = this._clippingContextListForMask[r++];
                                    n._layoutChannelNo = t, n._layoutBounds.x = i / 3, n._layoutBounds.y = s / 3, n._layoutBounds.width = 1 / 3, n._layoutBounds.height = 1 / 3
                                } else if (it.supportMoreMaskDivisions && s <= 16)
                                    for (let e = 0; e < s; e++) {
                                        let i = e % 4,
                                            s = e / 4;
                                        i = ~~i, s = ~~s;
                                        const n = this._clippingContextListForMask[r++];
                                        n._layoutChannelNo = t, n._layoutBounds.x = i / 4, n._layoutBounds.y = s / 4, n._layoutBounds.width = 1 / 4, n._layoutBounds.height = 1 / 4
                                    } else y("not supported mask count : {0}", s)
                }
            }
            getColorBuffer() {
                return this._colorBuffer
            }
            getClippingContextListForDraw() {
                return this._clippingContextListForDraw
            }
            setClippingMaskBufferSize(t) {
                this._clippingMaskBufferSize = t
            }
            getClippingMaskBufferSize() {
                return this._clippingMaskBufferSize
            }
        }
        class lt {
            constructor(t, e) {
                this.frameNo = t, this.texture = e
            }
        }
        class ut {
            constructor(t, e, i) {
                this._isUsing = !1, this._owner = t, this._clippingIdList = e, this._clippingIdCount = i, this._allClippedDrawRect = new rt, this._layoutBounds = new rt, this._clippedDrawableIndexList = [], this._matrixForMask = new a, this._matrixForDraw = new a
            }
            release() {
                this._layoutBounds = void 0, this._allClippedDrawRect = void 0, this._clippedDrawableIndexList = void 0
            }
            addClippedDrawable(t) {
                this._clippedDrawableIndexList.push(t)
            }
            getClippingManager() {
                return this._owner
            }
            setGl(t) {
                this._owner.setGL(t)
            }
        }
        class ht {
            constructor() {
                this._shaderSets = []
            }
            static getInstance() {
                return null == st ? (st = new ht, st) : st
            }
            static deleteInstance() {
                st && (st.release(), st = void 0)
            }
            release() {
                this.releaseShaderProgram()
            }
            setupShaderProgram(t, e, i, s, n, o, a, l, u, h, d, c, g) {
                let p, m, f, _;
                d || y("NoPremultipliedAlpha is not allowed"), 0 == this._shaderSets.length && this.generateShaders();
                const v = t.getClippingContextBufferForMask();
                if (null != v) {
                    const t = this._shaderSets[dt.ShaderNames_SetupMask];
                    this.gl.useProgram(t.shaderProgram), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(t.samplerTexture0Location, 0), null == a.vertex && (a.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, s, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(t.attributePositionLocation), this.gl.vertexAttribPointer(t.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == a.uv && (a.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(t.attributeTexCoordLocation), this.gl.vertexAttribPointer(t.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0);
                    const i = v._layoutChannelNo,
                        r = v.getClippingManager().getChannelFlagAsColor(i);
                    this.gl.uniform4f(t.uniformChannelFlagLocation, r.R, r.G, r.B, r.A), this.gl.uniformMatrix4fv(t.uniformClipMatrixLocation, !1, v._matrixForMask.getArray());
                    const n = v._layoutBounds;
                    this.gl.uniform4f(t.uniformBaseColorLocation, 2 * n.x - 1, 2 * n.y - 1, 2 * n.getRight() - 1, 2 * n.getBottom() - 1), p = this.gl.ZERO, m = this.gl.ONE_MINUS_SRC_COLOR, f = this.gl.ZERO, _ = this.gl.ONE_MINUS_SRC_ALPHA
                } else {
                    const i = t.getClippingContextBufferForDraw(),
                        n = null != i ? g ? 2 : 1 : 0;
                    let l;
                    switch (u) {
                        case r.CubismBlendMode_Normal:
                        default:
                            l = this._shaderSets[dt.ShaderNames_NormalPremultipliedAlpha + n], p = this.gl.ONE, m = this.gl.ONE_MINUS_SRC_ALPHA, f = this.gl.ONE, _ = this.gl.ONE_MINUS_SRC_ALPHA;
                            break;
                        case r.CubismBlendMode_Additive:
                            l = this._shaderSets[dt.ShaderNames_AddPremultipliedAlpha + n], p = this.gl.ONE, m = this.gl.ONE, f = this.gl.ZERO, _ = this.gl.ONE;
                            break;
                        case r.CubismBlendMode_Multiplicative:
                            l = this._shaderSets[dt.ShaderNames_MultPremultipliedAlpha + n], p = this.gl.DST_COLOR, m = this.gl.ONE_MINUS_SRC_ALPHA, f = this.gl.ZERO, _ = this.gl.ONE
                    }
                    if (this.gl.useProgram(l.shaderProgram), null == a.vertex && (a.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, s, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(l.attributePositionLocation), this.gl.vertexAttribPointer(l.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == a.uv && (a.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(l.attributeTexCoordLocation), this.gl.vertexAttribPointer(l.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0), null != i) {
                        this.gl.activeTexture(this.gl.TEXTURE1);
                        const t = i.getClippingManager().getColorBuffer();
                        this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.uniform1i(l.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(l.uniformClipMatrixLocation, !1, i._matrixForDraw.getArray());
                        const e = i._layoutChannelNo,
                            r = i.getClippingManager().getChannelFlagAsColor(e);
                        this.gl.uniform4f(l.uniformChannelFlagLocation, r.R, r.G, r.B, r.A)
                    }
                    this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(l.samplerTexture0Location, 0), this.gl.uniformMatrix4fv(l.uniformMatrixLocation, !1, c.getArray()), this.gl.uniform4f(l.uniformBaseColorLocation, h.R, h.G, h.B, h.A)
                }
                null == a.index && (a.index = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, a.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, n, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(p, m, f, _)
            }
            releaseShaderProgram() {
                for (let t = 0; t < this._shaderSets.length; t++) this.gl.deleteProgram(this._shaderSets[t].shaderProgram), this._shaderSets[t].shaderProgram = 0;
                this._shaderSets = []
            }
            generateShaders() {
                for (let t = 0; t < 10; t++) this._shaderSets.push({});
                this._shaderSets[0].shaderProgram = this.loadShaderProgram(ct, gt), this._shaderSets[1].shaderProgram = this.loadShaderProgram(pt, ft), this._shaderSets[2].shaderProgram = this.loadShaderProgram(mt, _t), this._shaderSets[3].shaderProgram = this.loadShaderProgram(mt, vt), this._shaderSets[4].shaderProgram = this._shaderSets[1].shaderProgram, this._shaderSets[5].shaderProgram = this._shaderSets[2].shaderProgram, this._shaderSets[6].shaderProgram = this._shaderSets[3].shaderProgram, this._shaderSets[7].shaderProgram = this._shaderSets[1].shaderProgram, this._shaderSets[8].shaderProgram = this._shaderSets[2].shaderProgram, this._shaderSets[9].shaderProgram = this._shaderSets[3].shaderProgram, this._shaderSets[0].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, "a_position"), this._shaderSets[0].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, "a_texCoord"), this._shaderSets[0].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "s_texture0"), this._shaderSets[0].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_clipMatrix"), this._shaderSets[0].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_channelFlag"), this._shaderSets[0].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_baseColor"), this._shaderSets[1].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, "a_position"), this._shaderSets[1].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, "a_texCoord"), this._shaderSets[1].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "s_texture0"), this._shaderSets[1].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_matrix"), this._shaderSets[1].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_baseColor"), this._shaderSets[2].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, "a_position"), this._shaderSets[2].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, "a_texCoord"), this._shaderSets[2].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "s_texture0"), this._shaderSets[2].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "s_texture1"), this._shaderSets[2].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_matrix"), this._shaderSets[2].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_clipMatrix"), this._shaderSets[2].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_channelFlag"), this._shaderSets[2].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_baseColor"), this._shaderSets[3].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, "a_position"), this._shaderSets[3].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, "a_texCoord"), this._shaderSets[3].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "s_texture0"), this._shaderSets[3].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "s_texture1"), this._shaderSets[3].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_matrix"), this._shaderSets[3].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_clipMatrix"), this._shaderSets[3].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_channelFlag"), this._shaderSets[3].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_baseColor"), this._shaderSets[4].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, "a_position"), this._shaderSets[4].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, "a_texCoord"), this._shaderSets[4].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "s_texture0"), this._shaderSets[4].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_matrix"), this._shaderSets[4].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_baseColor"), this._shaderSets[5].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, "a_position"), this._shaderSets[5].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, "a_texCoord"), this._shaderSets[5].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "s_texture0"), this._shaderSets[5].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "s_texture1"), this._shaderSets[5].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_matrix"), this._shaderSets[5].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_clipMatrix"), this._shaderSets[5].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_channelFlag"), this._shaderSets[5].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_baseColor"), this._shaderSets[6].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, "a_position"), this._shaderSets[6].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, "a_texCoord"), this._shaderSets[6].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "s_texture0"), this._shaderSets[6].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "s_texture1"), this._shaderSets[6].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_matrix"), this._shaderSets[6].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_clipMatrix"), this._shaderSets[6].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_channelFlag"), this._shaderSets[6].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_baseColor"), this._shaderSets[7].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, "a_position"), this._shaderSets[7].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, "a_texCoord"), this._shaderSets[7].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "s_texture0"), this._shaderSets[7].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_matrix"), this._shaderSets[7].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_baseColor"), this._shaderSets[8].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, "a_position"), this._shaderSets[8].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, "a_texCoord"), this._shaderSets[8].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "s_texture0"), this._shaderSets[8].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "s_texture1"), this._shaderSets[8].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_matrix"), this._shaderSets[8].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_clipMatrix"), this._shaderSets[8].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_channelFlag"), this._shaderSets[8].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_baseColor"), this._shaderSets[9].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, "a_position"), this._shaderSets[9].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, "a_texCoord"), this._shaderSets[9].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "s_texture0"), this._shaderSets[9].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "s_texture1"), this._shaderSets[9].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_matrix"), this._shaderSets[9].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_clipMatrix"), this._shaderSets[9].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_channelFlag"), this._shaderSets[9].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_baseColor")
            }
            loadShaderProgram(t, e) {
                let i = this.gl.createProgram(),
                    r = this.compileShaderSource(this.gl.VERTEX_SHADER, t);
                if (!r) return y("Vertex shader compile error!"), 0;
                let s = this.compileShaderSource(this.gl.FRAGMENT_SHADER, e);
                if (!s) return y("Vertex shader compile error!"), 0;
                return this.gl.attachShader(i, r), this.gl.attachShader(i, s), this.gl.linkProgram(i), this.gl.getProgramParameter(i, this.gl.LINK_STATUS) ? (this.gl.deleteShader(r), this.gl.deleteShader(s), i) : (y("Failed to link program: {0}", i), this.gl.deleteShader(r), this.gl.deleteShader(s), i && this.gl.deleteProgram(i), 0)
            }
            compileShaderSource(t, e) {
                const i = e,
                    r = this.gl.createShader(t);
                if (this.gl.shaderSource(r, i), this.gl.compileShader(r), !r) {
                    y("Shader compile log: {0} ", this.gl.getShaderInfoLog(r))
                }
                return this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (this.gl.deleteShader(r), null)
            }
            setGl(t) {
                this.gl = t
            }
        }
        var dt;
        ! function(t) {
            t[t.ShaderNames_SetupMask = 0] = "ShaderNames_SetupMask", t[t.ShaderNames_NormalPremultipliedAlpha = 1] = "ShaderNames_NormalPremultipliedAlpha", t[t.ShaderNames_NormalMaskedPremultipliedAlpha = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha", t[t.ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha", t[t.ShaderNames_AddPremultipliedAlpha = 4] = "ShaderNames_AddPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlpha = 5] = "ShaderNames_AddMaskedPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlphaInverted = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted", t[t.ShaderNames_MultPremultipliedAlpha = 7] = "ShaderNames_MultPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlpha = 8] = "ShaderNames_MultMaskedPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlphaInverted = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted"
        }(dt || (dt = {}));
        const ct = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}",
            gt = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}",
            pt = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}",
            mt = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}",
            ft = "precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;void main(){   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;}",
            _t = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;void main(){   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}",
            vt = "precision mediump float;varying vec2 v_texCoord;varying vec4 v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4 u_channelFlag;uniform vec4 u_baseColor;void main(){vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;col_formask = col_formask * (1.0 - maskVal);gl_FragColor = col_formask;}";
        class xt extends l {
            constructor() {
                super(), this._clippingContextBufferForMask = null, this._clippingContextBufferForDraw = null, this._clippingManager = new at, this.firstDraw = !0, this._textures = {}, this._sortedDrawableIndexList = [], this._bufferData = {
                    vertex: null,
                    uv: null,
                    index: null
                }
            }
            initialize(t) {
                t.isUsingMasking() && (this._clippingManager = new at, this._clippingManager.initialize(t, t.getDrawableCount(), t.getDrawableMasks(), t.getDrawableMaskCounts()));
                for (let e = t.getDrawableCount() - 1; e >= 0; e--) this._sortedDrawableIndexList[e] = 0;
                super.initialize(t)
            }
            bindTexture(t, e) {
                this._textures[t] = e
            }
            getBindedTextures() {
                return this._textures
            }
            setClippingMaskBufferSize(t) {
                this._clippingManager.release(), this._clippingManager = new at, this._clippingManager.setClippingMaskBufferSize(t), this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts())
            }
            getClippingMaskBufferSize() {
                return this._clippingManager.getClippingMaskBufferSize()
            }
            release() {
                var t, e, i;
                this._clippingManager.release(), this._clippingManager = void 0, null === (t = this.gl) || void 0 === t || t.deleteBuffer(this._bufferData.vertex), this._bufferData.vertex = null, null === (e = this.gl) || void 0 === e || e.deleteBuffer(this._bufferData.uv), this._bufferData.uv = null, null === (i = this.gl) || void 0 === i || i.deleteBuffer(this._bufferData.index), this._bufferData.index = null, this._bufferData = void 0, this._textures = void 0
            }
            doDrawModel() {
                this.preDraw(), null != this._clippingManager && this._clippingManager.setupClippingContext(this.getModel(), this);
                const t = this.getModel().getDrawableCount(),
                    e = this.getModel().getDrawableRenderOrders();
                for (let i = 0; i < t; ++i) {
                    const t = e[i];
                    this._sortedDrawableIndexList[t] = i
                }
                for (let e = 0; e < t; ++e) {
                    const t = this._sortedDrawableIndexList[e];
                    this.getModel().getDrawableDynamicFlagIsVisible(t) && (this.setClippingContextBufferForDraw(null != this._clippingManager ? this._clippingManager.getClippingContextListForDraw()[t] : null), this.setIsCulling(this.getModel().getDrawableCulling(t)), this.drawMesh(this.getModel().getDrawableTextureIndices(t), this.getModel().getDrawableVertexIndexCount(t), this.getModel().getDrawableVertexCount(t), this.getModel().getDrawableVertexIndices(t), this.getModel().getDrawableVertices(t), this.getModel().getDrawableVertexUvs(t), this.getModel().getDrawableOpacity(t), this.getModel().getDrawableBlendMode(t), this.getModel().getDrawableInvertedMaskBit(t)))
                }
            }
            drawMesh(t, e, i, r, s, n, o, a, l) {
                this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW);
                const u = this.getModelColor();
                null == this.getClippingContextBufferForMask() && (u.A *= o, this.isPremultipliedAlpha() && (u.R *= u.A, u.G *= u.A, u.B *= u.A));
                let h = null;
                null != this._textures[t] && (h = this._textures[t]), ht.getInstance().setupShaderProgram(this, h, i, s, r, n, this._bufferData, o, a, u, this.isPremultipliedAlpha(), this.getMvpMatrix(), l), this.gl.drawElements(this.gl.TRIANGLES, e, this.gl.UNSIGNED_SHORT, 0), this.gl.useProgram(null), this.setClippingContextBufferForDraw(null), this.setClippingContextBufferForMask(null)
            }
            static doStaticRelease() {
                ht.deleteInstance()
            }
            setRenderState(t, e) {
                ot = t, nt = e
            }
            preDraw() {
                this.firstDraw && (this.firstDraw = !1, this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")), this.gl.disable(this.gl.SCISSOR_TEST), this.gl.disable(this.gl.STENCIL_TEST), this.gl.disable(this.gl.DEPTH_TEST), this.gl.frontFace(this.gl.CW), this.gl.enable(this.gl.BLEND), this.gl.colorMask(!0, !0, !0, !0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
            }
            setClippingContextBufferForMask(t) {
                this._clippingContextBufferForMask = t
            }
            getClippingContextBufferForMask() {
                return this._clippingContextBufferForMask
            }
            setClippingContextBufferForDraw(t) {
                this._clippingContextBufferForDraw = t
            }
            getClippingContextBufferForDraw() {
                return this._clippingContextBufferForDraw
            }
            startUp(t) {
                this.gl = t, this._clippingManager.setGL(t), ht.getInstance().setGl(t)
            }
        }
        l.staticRelease = () => {
            xt.doStaticRelease()
        };
        var yt = i(2),
            bt = i(86),
            Mt = i.n(bt);
        const St = new a;
        class Pt extends J.a {
            constructor(t, e, i) {
                super(), this.lipSync = !0, this.breath = Q.create(), this.renderer = new xt, this.idParamAngleX = "ParamAngleX", this.idParamAngleY = "ParamAngleY", this.idParamAngleZ = "ParamAngleZ", this.idParamEyeBallX = "ParamEyeBallX", this.idParamEyeBallY = "ParamEyeBallY", this.idParamBodyAngleX = "ParamBodyAngleX", this.idParamBreath = "ParamBreath", this.pixelsPerUnit = 1, this.centeringTransform = new yt.Matrix, this.coreModel = t, this.settings = e, this.motionManager = new Z(e, i), this.init()
            }
            init() {
                var t;
                super.init(), (null === (t = this.settings.getEyeBlinkParameters()) || void 0 === t ? void 0 : t.length) > 0 && (this.eyeBlink = tt.create(this.settings)), this.breath.setParameters([new K(this.idParamAngleX, 0, 15, 6.5345, .5), new K(this.idParamAngleY, 0, 8, 3.5345, .5), new K(this.idParamAngleZ, 0, 10, 5.5345, .5), new K(this.idParamBodyAngleX, 0, 4, 15.5345, .5), new K(this.idParamBreath, 0, .5, 3.2345, .5)]), this.renderer.initialize(this.coreModel), this.renderer.setIsPremultipliedAlpha(!0)
            }
            getSize() {
                return [this.coreModel.getModel().canvasinfo.CanvasWidth, this.coreModel.getModel().canvasinfo.CanvasHeight]
            }
            getLayout() {
                return Mt()(Object.assign({}, this.settings.layout), (t, e) => e.charAt(0).toLowerCase() + e.slice(1))
            }
            setupLayout() {
                super.setupLayout(), this.pixelsPerUnit = this.coreModel.getModel().canvasinfo.PixelsPerUnit, this.centeringTransform.scale(this.pixelsPerUnit, this.pixelsPerUnit).translate(this.originalWidth / 2, this.originalHeight / 2)
            }
            updateWebGLContext(t, e) {
                this.renderer.firstDraw = !0, this.renderer._bufferData = {
                    vertex: null,
                    uv: null,
                    index: null
                }, this.renderer.startUp(t), this.renderer._clippingManager._currentFrameNo = e, this.renderer._clippingManager._maskTexture = void 0, ht.getInstance()._shaderSets = []
            }
            bindTexture(t, e) {
                this.renderer.bindTexture(t, e)
            }
            getHitAreaDefs() {
                var t, e;
                return null !== (e = null === (t = this.settings.hitAreas) || void 0 === t ? void 0 : t.map(t => ({
                    id: t.Id,
                    name: t.Name,
                    index: this.coreModel.getDrawableIndex(t.Id)
                }))) && void 0 !== e ? e : []
            }
            getDrawableIDs() {
                return this.coreModel.getDrawableIds()
            }
            getDrawableIndex(t) {
                return this.coreModel.getDrawableIndex(t)
            }
            getDrawableVertices(t) {
                if ("string" == typeof t && -1 === (t = this.coreModel.getDrawableIndex(t))) throw new TypeError("Unable to find drawable ID: " + t);
                const e = this.coreModel.getDrawableVertices(t).slice();
                for (let t = 0; t < e.length; t += 2) e[t] = e[t] * this.pixelsPerUnit + this.originalWidth / 2, e[t + 1] = -e[t + 1] * this.pixelsPerUnit + this.originalHeight / 2;
                return e
            }
            updateTransform(t) {
                this.drawingMatrix.copyFrom(this.centeringTransform).prepend(this.localTransform).prepend(t)
            }
            update(t, e) {
                var i, r, s;
                super.update(t, e), t /= 1e3, e /= 1e3;
                const n = this.coreModel;
                this.emit("beforeMotionUpdate");
                const o = this.motionManager.update(this.coreModel, e);
                this.emit("afterMotionUpdate"), n.saveParameters(), o || null === (i = this.eyeBlink) || void 0 === i || i.updateParameters(n, t), this.updateFocus(), this.updateNaturalMovements(1e3 * t, 1e3 * e), null === (r = this.physics) || void 0 === r || r.evaluate(n, t), null === (s = this.pose) || void 0 === s || s.updateParameters(n, t), this.emit("beforeModelUpdate"), n.update(), n.loadParameters()
            }
            updateFocus() {
                this.coreModel.addParameterValueById(this.idParamEyeBallX, this.focusController.x), this.coreModel.addParameterValueById(this.idParamEyeBallY, this.focusController.y), this.coreModel.addParameterValueById(this.idParamAngleX, 30 * this.focusController.x), this.coreModel.addParameterValueById(this.idParamAngleY, 30 * this.focusController.y), this.coreModel.addParameterValueById(this.idParamAngleZ, this.focusController.x * this.focusController.y * -30), this.coreModel.addParameterValueById(this.idParamBodyAngleX, 10 * this.focusController.x)
            }
            updateNaturalMovements(t, e) {
                var i;
                null === (i = this.breath) || void 0 === i || i.updateParameters(this.coreModel, t / 1e3)
            }
            draw(t) {
                const e = this.drawingMatrix,
                    i = St.getArray();
                i[0] = e.a, i[1] = e.b, i[4] = -e.c, i[5] = -e.d, i[12] = e.tx, i[13] = e.ty, this.renderer.setMvpMatrix(St), this.renderer.setRenderState(t.getParameter(t.FRAMEBUFFER_BINDING), this.viewport), this.renderer.drawModel()
            }
            destroy() {
                super.destroy(), this.renderer.release(), this.coreModel.release(), this.renderer = void 0, this.coreModel = void 0
            }
        }
        let Ct, wt = 20;

        function It() {
            return m.isStarted() ? Promise.resolve() : (null != Ct || (Ct = new Promise((t, e) => {
                ! function i() {
                    try {
                        Tt(), t()
                    } catch (t) {
                        if (wt--, wt < 0) {
                            const i = new Error("Failed to start up Cubism 4 framework.");
                            return i.cause = t, void e(i)
                        }
                        E.f.log("Cubism4", "Startup failed, retrying 10ms later..."), setTimeout(i, 10)
                    }
                }()
            })), Ct)
        }

        function Tt(t) {
            t = Object.assign({
                logFunction: console.log,
                loggingLevel: p.LogLevel_Verbose
            }, t), m.startUp(t), m.initialize()
        }
        var Lt = i(5);
        class Et {
            constructor() {
                this._fadeTimeSeconds = .5, this._lastModel = void 0, this._partGroups = [], this._partGroupCounts = []
            }
            static create(t) {
                const e = new Et;
                "number" == typeof t.FadeInTime && (e._fadeTimeSeconds = t.FadeInTime, e._fadeTimeSeconds <= 0 && (e._fadeTimeSeconds = .5));
                const i = t.Groups,
                    r = i.length;
                for (let t = 0; t < r; ++t) {
                    const r = i[t],
                        s = r.length;
                    let n = 0;
                    for (let t = 0; t < s; ++t) {
                        const i = r[t],
                            s = new Dt;
                        s.partId = i.Id;
                        const o = i.Link;
                        if (o) {
                            const t = o.length;
                            for (let e = 0; e < t; ++e) {
                                const t = new Dt;
                                t.partId = o[e], s.link.push(t)
                            }
                        }
                        e._partGroups.push(s), ++n
                    }
                    e._partGroupCounts.push(n)
                }
                return e
            }
            updateParameters(t, e) {
                t != this._lastModel && this.reset(t), this._lastModel = t, e < 0 && (e = 0);
                let i = 0;
                for (let r = 0; r < this._partGroupCounts.length; r++) {
                    const s = this._partGroupCounts[r];
                    this.doFade(t, e, i, s), i += s
                }
                this.copyPartOpacities(t)
            }
            reset(t) {
                let e = 0;
                for (let i = 0; i < this._partGroupCounts.length; ++i) {
                    const r = this._partGroupCounts[i];
                    for (let i = e; i < e + r; ++i) {
                        this._partGroups[i].initialize(t);
                        const r = this._partGroups[i].partIndex,
                            s = this._partGroups[i].parameterIndex;
                        if (!(r < 0)) {
                            t.setPartOpacityByIndex(r, i == e ? 1 : 0), t.setParameterValueByIndex(s, i == e ? 1 : 0);
                            for (let e = 0; e < this._partGroups[i].link.length; ++e) this._partGroups[i].link[e].initialize(t)
                        }
                    }
                    e += r
                }
            }
            copyPartOpacities(t) {
                for (let e = 0; e < this._partGroups.length; ++e) {
                    const i = this._partGroups[e];
                    if (0 == i.link.length) continue;
                    const r = this._partGroups[e].partIndex,
                        s = t.getPartOpacityByIndex(r);
                    for (let e = 0; e < i.link.length; ++e) {
                        const r = i.link[e].partIndex;
                        r < 0 || t.setPartOpacityByIndex(r, s)
                    }
                }
            }
            doFade(t, e, i, r) {
                let s = -1,
                    n = 1;
                for (let o = i; o < i + r; ++o) {
                    const i = this._partGroups[o].partIndex,
                        r = this._partGroups[o].parameterIndex;
                    if (t.getParameterValueByIndex(r) > .001) {
                        if (s >= 0) break;
                        s = o, n = t.getPartOpacityByIndex(i), n += e / this._fadeTimeSeconds, n > 1 && (n = 1)
                    }
                }
                s < 0 && (s = 0, n = 1);
                for (let e = i; e < i + r; ++e) {
                    const i = this._partGroups[e].partIndex;
                    if (s == e) t.setPartOpacityByIndex(i, n);
                    else {
                        let e, r = t.getPartOpacityByIndex(i);
                        e = n < .5 ? -.5 * n / .5 + 1 : .5 * (1 - n) / .5, (1 - e) * (1 - n) > .15 && (e = 1 - .15 / (1 - n)), r > e && (r = e), t.setPartOpacityByIndex(i, r)
                    }
                }
            }
        }
        class Dt {
            constructor(t) {
                this.parameterIndex = 0, this.partIndex = 0, this.partId = "", this.link = [], null != t && this.assignment(t)
            }
            assignment(t) {
                return this.partId = t.partId, this.link = t.link.map(t => t.clone()), this
            }
            initialize(t) {
                this.parameterIndex = t.getParameterIndex(this.partId), this.partIndex = t.getPartIndex(this.partId), t.setParameterValueByIndex(this.parameterIndex, 1)
            }
            clone() {
                const t = new Dt;
                return t.partId = this.partId, t.parameterIndex = this.parameterIndex, t.partIndex = this.partIndex, t.link = this.link.map(t => t.clone()), t
            }
        }
        class Ft {
            constructor(t) {
                this._model = t, this._savedParameters = [], this._parameterIds = [], this._drawableIds = [], this._partIds = [], this._notExistPartId = {}, this._notExistParameterId = {}, this._notExistParameterValues = {}, this._notExistPartOpacities = {}, this.initialize()
            }
            update() {
                this._model.update(), this._model.drawables.resetDynamicFlags()
            }
            getCanvasWidth() {
                return null == this._model ? 0 : this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit
            }
            getCanvasHeight() {
                return null == this._model ? 0 : this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit
            }
            saveParameters() {
                const t = this._model.parameters.count,
                    e = this._savedParameters.length;
                for (let i = 0; i < t; ++i) i < e ? this._savedParameters[i] = this._parameterValues[i] : this._savedParameters.push(this._parameterValues[i])
            }
            getModel() {
                return this._model
            }
            getPartIndex(t) {
                let e;
                const i = this._model.parts.count;
                for (e = 0; e < i; ++e)
                    if (t == this._partIds[e]) return e;
                return t in this._notExistPartId ? this._notExistPartId[t] : (e = i + this._notExistPartId.length, this._notExistPartId[t] = e, this._notExistPartOpacities[e] = 0, e)
            }
            getPartCount() {
                return this._model.parts.count
            }
            setPartOpacityByIndex(t, e) {
                t in this._notExistPartOpacities ? this._notExistPartOpacities[t] = e : (f(0 <= t && t < this.getPartCount()), this._partOpacities[t] = e)
            }
            setPartOpacityById(t, e) {
                const i = this.getPartIndex(t);
                i < 0 || this.setPartOpacityByIndex(i, e)
            }
            getPartOpacityByIndex(t) {
                return t in this._notExistPartOpacities ? this._notExistPartOpacities[t] : (f(0 <= t && t < this.getPartCount()), this._partOpacities[t])
            }
            getPartOpacityById(t) {
                const e = this.getPartIndex(t);
                return e < 0 ? 0 : this.getPartOpacityByIndex(e)
            }
            getParameterIndex(t) {
                let e;
                const i = this._model.parameters.count;
                for (e = 0; e < i; ++e)
                    if (t == this._parameterIds[e]) return e;
                return t in this._notExistParameterId ? this._notExistParameterId[t] : (e = this._model.parameters.count + Object.keys(this._notExistParameterId).length, this._notExistParameterId[t] = e, this._notExistParameterValues[e] = 0, e)
            }
            getParameterCount() {
                return this._model.parameters.count
            }
            getParameterMaximumValue(t) {
                return this._model.parameters.maximumValues[t]
            }
            getParameterMinimumValue(t) {
                return this._model.parameters.minimumValues[t]
            }
            getParameterDefaultValue(t) {
                return this._model.parameters.defaultValues[t]
            }
            getParameterValueByIndex(t) {
                return t in this._notExistParameterValues ? this._notExistParameterValues[t] : (f(0 <= t && t < this.getParameterCount()), this._parameterValues[t])
            }
            getParameterValueById(t) {
                const e = this.getParameterIndex(t);
                return this.getParameterValueByIndex(e)
            }
            setParameterValueByIndex(t, e, i = 1) {
                t in this._notExistParameterValues ? this._notExistParameterValues[t] = 1 == i ? e : this._notExistParameterValues[t] * (1 - i) + e * i : (f(0 <= t && t < this.getParameterCount()), this._model.parameters.maximumValues[t] < e && (e = this._model.parameters.maximumValues[t]), this._model.parameters.minimumValues[t] > e && (e = this._model.parameters.minimumValues[t]), this._parameterValues[t] = 1 == i ? e : this._parameterValues[t] = this._parameterValues[t] * (1 - i) + e * i)
            }
            setParameterValueById(t, e, i = 1) {
                const r = this.getParameterIndex(t);
                this.setParameterValueByIndex(r, e, i)
            }
            addParameterValueByIndex(t, e, i = 1) {
                this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) + e * i)
            }
            addParameterValueById(t, e, i = 1) {
                const r = this.getParameterIndex(t);
                this.addParameterValueByIndex(r, e, i)
            }
            multiplyParameterValueById(t, e, i = 1) {
                const r = this.getParameterIndex(t);
                this.multiplyParameterValueByIndex(r, e, i)
            }
            multiplyParameterValueByIndex(t, e, i = 1) {
                this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) * (1 + (e - 1) * i))
            }
            getDrawableIds() {
                return this._drawableIds.slice()
            }
            getDrawableIndex(t) {
                const e = this._model.drawables.count;
                for (let i = 0; i < e; ++i)
                    if (this._drawableIds[i] == t) return i;
                return -1
            }
            getDrawableCount() {
                return this._model.drawables.count
            }
            getDrawableId(t) {
                return this._model.drawables.ids[t]
            }
            getDrawableRenderOrders() {
                return this._model.drawables.renderOrders
            }
            getDrawableTextureIndices(t) {
                return this._model.drawables.textureIndices[t]
            }
            getDrawableDynamicFlagVertexPositionsDidChange(t) {
                const e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t])
            }
            getDrawableVertexIndexCount(t) {
                return this._model.drawables.indexCounts[t]
            }
            getDrawableVertexCount(t) {
                return this._model.drawables.vertexCounts[t]
            }
            getDrawableVertices(t) {
                return this.getDrawableVertexPositions(t)
            }
            getDrawableVertexIndices(t) {
                return this._model.drawables.indices[t]
            }
            getDrawableVertexPositions(t) {
                return this._model.drawables.vertexPositions[t]
            }
            getDrawableVertexUvs(t) {
                return this._model.drawables.vertexUvs[t]
            }
            getDrawableOpacity(t) {
                return this._model.drawables.opacities[t]
            }
            getDrawableCulling(t) {
                const e = this._model.drawables.constantFlags;
                return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t])
            }
            getDrawableBlendMode(t) {
                const e = this._model.drawables.constantFlags;
                return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t]) ? r.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t]) ? r.CubismBlendMode_Multiplicative : r.CubismBlendMode_Normal
            }
            getDrawableInvertedMaskBit(t) {
                const e = this._model.drawables.constantFlags;
                return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t])
            }
            getDrawableMasks() {
                return this._model.drawables.masks
            }
            getDrawableMaskCounts() {
                return this._model.drawables.maskCounts
            }
            isUsingMasking() {
                for (let t = 0; t < this._model.drawables.count; ++t)
                    if (!(this._model.drawables.maskCounts[t] <= 0)) return !0;
                return !1
            }
            getDrawableDynamicFlagIsVisible(t) {
                const e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasIsVisibleBit(e[t])
            }
            getDrawableDynamicFlagVisibilityDidChange(t) {
                const e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t])
            }
            getDrawableDynamicFlagOpacityDidChange(t) {
                const e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t])
            }
            getDrawableDynamicFlagRenderOrderDidChange(t) {
                const e = this._model.drawables.dynamicFlags;
                return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t])
            }
            loadParameters() {
                let t = this._model.parameters.count;
                const e = this._savedParameters.length;
                t > e && (t = e);
                for (let e = 0; e < t; ++e) this._parameterValues[e] = this._savedParameters[e]
            }
            initialize() {
                this._parameterValues = this._model.parameters.values, this._partOpacities = this._model.parts.opacities, this._parameterMaximumValues = this._model.parameters.maximumValues, this._parameterMinimumValues = this._model.parameters.minimumValues; {
                    const t = this._model.parameters.ids,
                        e = this._model.parameters.count;
                    for (let i = 0; i < e; ++i) this._parameterIds.push(t[i])
                } {
                    const t = this._model.parts.ids,
                        e = this._model.parts.count;
                    for (let i = 0; i < e; ++i) this._partIds.push(t[i])
                } {
                    const t = this._model.drawables.ids,
                        e = this._model.drawables.count;
                    for (let i = 0; i < e; ++i) this._drawableIds.push(t[i])
                }
            }
            release() {
                this._model.release(), this._model = void 0
            }
        }
        class At {
            constructor(t) {
                this._moc = t, this._modelCount = 0
            }
            static create(t) {
                const e = Live2DCubismCore.Moc.fromArrayBuffer(t);
                if (e) return new At(e);
                throw new Error("Unknown error")
            }
            createModel() {
                let t;
                const e = Live2DCubismCore.Model.fromMoc(this._moc);
                if (e) return t = new Ft(e), ++this._modelCount, t;
                throw new Error("Unknown error")
            }
            deleteModel(t) {
                null != t && --this._modelCount
            }
            release() {
                this._moc._release(), this._moc = void 0
            }
        }
        var Ot, Bt;
        ! function(t) {
            t[t.CubismPhysicsTargetType_Parameter = 0] = "CubismPhysicsTargetType_Parameter"
        }(Ot || (Ot = {})),
        function(t) {
            t[t.CubismPhysicsSource_X = 0] = "CubismPhysicsSource_X", t[t.CubismPhysicsSource_Y = 1] = "CubismPhysicsSource_Y", t[t.CubismPhysicsSource_Angle = 2] = "CubismPhysicsSource_Angle"
        }(Bt || (Bt = {}));
        class Rt {
            constructor() {
                this.initialPosition = new n(0, 0), this.position = new n(0, 0), this.lastPosition = new n(0, 0), this.lastGravity = new n(0, 0), this.force = new n(0, 0), this.velocity = new n(0, 0)
            }
        }
        class kt {
            constructor() {
                this.normalizationPosition = {}, this.normalizationAngle = {}
            }
        }
        class Ut {
            constructor() {
                this.source = {}
            }
        }
        class jt {
            constructor() {
                this.destination = {}, this.translationScale = new n(0, 0)
            }
        }
        class Nt {
            constructor() {
                this.settings = [], this.inputs = [], this.outputs = [], this.particles = [], this.gravity = new n(0, 0), this.wind = new n(0, 0)
            }
        }
        class Vt {
            constructor(t) {
                this._json = t
            }
            release() {
                this._json = void 0
            }
            getGravity() {
                const t = new n(0, 0);
                return t.x = this._json.Meta.EffectiveForces.Gravity.X, t.y = this._json.Meta.EffectiveForces.Gravity.Y, t
            }
            getWind() {
                const t = new n(0, 0);
                return t.x = this._json.Meta.EffectiveForces.Wind.X, t.y = this._json.Meta.EffectiveForces.Wind.Y, t
            }
            getSubRigCount() {
                return this._json.Meta.PhysicsSettingCount
            }
            getTotalInputCount() {
                return this._json.Meta.TotalInputCount
            }
            getTotalOutputCount() {
                return this._json.Meta.TotalOutputCount
            }
            getVertexCount() {
                return this._json.Meta.VertexCount
            }
            getNormalizationPositionMinimumValue(t) {
                return this._json.PhysicsSettings[t].Normalization.Position.Minimum
            }
            getNormalizationPositionMaximumValue(t) {
                return this._json.PhysicsSettings[t].Normalization.Position.Maximum
            }
            getNormalizationPositionDefaultValue(t) {
                return this._json.PhysicsSettings[t].Normalization.Position.Default
            }
            getNormalizationAngleMinimumValue(t) {
                return this._json.PhysicsSettings[t].Normalization.Angle.Minimum
            }
            getNormalizationAngleMaximumValue(t) {
                return this._json.PhysicsSettings[t].Normalization.Angle.Maximum
            }
            getNormalizationAngleDefaultValue(t) {
                return this._json.PhysicsSettings[t].Normalization.Angle.Default
            }
            getInputCount(t) {
                return this._json.PhysicsSettings[t].Input.length
            }
            getInputWeight(t, e) {
                return this._json.PhysicsSettings[t].Input[e].Weight
            }
            getInputReflect(t, e) {
                return this._json.PhysicsSettings[t].Input[e].Reflect
            }
            getInputType(t, e) {
                return this._json.PhysicsSettings[t].Input[e].Type
            }
            getInputSourceId(t, e) {
                return this._json.PhysicsSettings[t].Input[e].Source.Id
            }
            getOutputCount(t) {
                return this._json.PhysicsSettings[t].Output.length
            }
            getOutputVertexIndex(t, e) {
                return this._json.PhysicsSettings[t].Output[e].VertexIndex
            }
            getOutputAngleScale(t, e) {
                return this._json.PhysicsSettings[t].Output[e].Scale
            }
            getOutputWeight(t, e) {
                return this._json.PhysicsSettings[t].Output[e].Weight
            }
            getOutputDestinationId(t, e) {
                return this._json.PhysicsSettings[t].Output[e].Destination.Id
            }
            getOutputType(t, e) {
                return this._json.PhysicsSettings[t].Output[e].Type
            }
            getOutputReflect(t, e) {
                return this._json.PhysicsSettings[t].Output[e].Reflect
            }
            getParticleCount(t) {
                return this._json.PhysicsSettings[t].Vertices.length
            }
            getParticleMobility(t, e) {
                return this._json.PhysicsSettings[t].Vertices[e].Mobility
            }
            getParticleDelay(t, e) {
                return this._json.PhysicsSettings[t].Vertices[e].Delay
            }
            getParticleAcceleration(t, e) {
                return this._json.PhysicsSettings[t].Vertices[e].Acceleration
            }
            getParticleRadius(t, e) {
                return this._json.PhysicsSettings[t].Vertices[e].Radius
            }
            getParticlePosition(t, e) {
                const i = new n(0, 0);
                return i.x = this._json.PhysicsSettings[t].Vertices[e].Position.X, i.y = this._json.PhysicsSettings[t].Vertices[e].Position.Y, i
            }
        }
        class zt {
            constructor() {
                this._options = new Gt, this._options.gravity.y = -1, this._options.gravity.x = 0, this._options.wind.x = 0, this._options.wind.y = 0
            }
            static create(t) {
                const e = new zt;
                return e.parse(t), e._physicsRig.gravity.y = 0, e
            }
            evaluate(t, e) {
                let i, r, s, a;
                const l = new n;
                let u, h, d, c, g, p, m, f;
                g = t.getModel().parameters.values, p = t.getModel().parameters.maximumValues, m = t.getModel().parameters.minimumValues, f = t.getModel().parameters.defaultValues;
                for (let _ = 0; _ < this._physicsRig.subRigCount; ++_) {
                    i = {
                        angle: 0
                    }, l.x = 0, l.y = 0, u = this._physicsRig.settings[_], h = this._physicsRig.inputs.slice(u.baseInputIndex), d = this._physicsRig.outputs.slice(u.baseOutputIndex), c = this._physicsRig.particles.slice(u.baseParticleIndex);
                    for (let e = 0; e < u.inputCount; ++e) r = h[e].weight / 100, -1 == h[e].sourceParameterIndex && (h[e].sourceParameterIndex = t.getParameterIndex(h[e].source.id)), h[e].getNormalizedParameterValue(l, i, g[h[e].sourceParameterIndex], m[h[e].sourceParameterIndex], p[h[e].sourceParameterIndex], f[h[e].sourceParameterIndex], u.normalizationPosition, u.normalizationAngle, h[e].reflect, r);
                    s = o.degreesToRadian(-i.angle), l.x = l.x * o.cos(s) - l.y * o.sin(s), l.y = l.x * o.sin(s) + l.y * o.cos(s), te(c, u.particleCount, l, i.angle, this._options.wind, .001 * u.normalizationPosition.maximum, e, 5);
                    for (let e = 0; e < u.outputCount; ++e) {
                        const i = d[e].vertexIndex;
                        if (i < 1 || i >= u.particleCount) break; - 1 == d[e].destinationParameterIndex && (d[e].destinationParameterIndex = t.getParameterIndex(d[e].destination.id));
                        const r = new n;
                        r.x = c[i].position.x - c[i - 1].position.x, r.y = c[i].position.y - c[i - 1].position.y, a = d[e].getValue(r, c, i, d[e].reflect, this._options.gravity);
                        const s = d[e].destinationParameterIndex,
                            o = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(g.subarray(s))) : g.slice(s);
                        ee(o, m[s], p[s], a, d[e]);
                        for (let t = s, e = 0; t < g.length; t++, e++) g[t] = o[e]
                    }
                }
            }
            setOptions(t) {
                this._options = t
            }
            getOption() {
                return this._options
            }
            release() {
                this._physicsRig = void 0
            }
            parse(t) {
                this._physicsRig = new Nt;
                let e = new Vt(t);
                this._physicsRig.gravity = e.getGravity(), this._physicsRig.wind = e.getWind(), this._physicsRig.subRigCount = e.getSubRigCount();
                let i = 0,
                    r = 0,
                    s = 0;
                for (let t = 0; t < this._physicsRig.subRigCount; ++t) {
                    const n = new kt;
                    n.normalizationPosition.minimum = e.getNormalizationPositionMinimumValue(t), n.normalizationPosition.maximum = e.getNormalizationPositionMaximumValue(t), n.normalizationPosition.defalut = e.getNormalizationPositionDefaultValue(t), n.normalizationAngle.minimum = e.getNormalizationAngleMinimumValue(t), n.normalizationAngle.maximum = e.getNormalizationAngleMaximumValue(t), n.normalizationAngle.defalut = e.getNormalizationAngleDefaultValue(t), n.inputCount = e.getInputCount(t), n.baseInputIndex = i, i += n.inputCount;
                    for (let i = 0; i < n.inputCount; ++i) {
                        const r = new Ut;
                        switch (r.sourceParameterIndex = -1, r.weight = e.getInputWeight(t, i), r.reflect = e.getInputReflect(t, i), e.getInputType(t, i)) {
                            case "X":
                                r.type = Bt.CubismPhysicsSource_X, r.getNormalizedParameterValue = Xt;
                                break;
                            case "Y":
                                r.type = Bt.CubismPhysicsSource_Y, r.getNormalizedParameterValue = Wt;
                                break;
                            case "Angle":
                                r.type = Bt.CubismPhysicsSource_Angle, r.getNormalizedParameterValue = Yt
                        }
                        r.source.targetType = Ot.CubismPhysicsTargetType_Parameter, r.source.id = e.getInputSourceId(t, i), this._physicsRig.inputs.push(r)
                    }
                    n.outputCount = e.getOutputCount(t), n.baseOutputIndex = r, r += n.outputCount;
                    for (let i = 0; i < n.outputCount; ++i) {
                        const r = new jt;
                        switch (r.destinationParameterIndex = -1, r.vertexIndex = e.getOutputVertexIndex(t, i), r.angleScale = e.getOutputAngleScale(t, i), r.weight = e.getOutputWeight(t, i), r.destination.targetType = Ot.CubismPhysicsTargetType_Parameter, r.destination.id = e.getOutputDestinationId(t, i), e.getOutputType(t, i)) {
                            case "X":
                                r.type = Bt.CubismPhysicsSource_X, r.getValue = qt, r.getScale = Jt;
                                break;
                            case "Y":
                                r.type = Bt.CubismPhysicsSource_Y, r.getValue = Ht, r.getScale = Qt;
                                break;
                            case "Angle":
                                r.type = Bt.CubismPhysicsSource_Angle, r.getValue = $t, r.getScale = Kt
                        }
                        r.reflect = e.getOutputReflect(t, i), this._physicsRig.outputs.push(r)
                    }
                    n.particleCount = e.getParticleCount(t), n.baseParticleIndex = s, s += n.particleCount;
                    for (let i = 0; i < n.particleCount; ++i) {
                        const r = new Rt;
                        r.mobility = e.getParticleMobility(t, i), r.delay = e.getParticleDelay(t, i), r.acceleration = e.getParticleAcceleration(t, i), r.radius = e.getParticleRadius(t, i), r.position = e.getParticlePosition(t, i), this._physicsRig.particles.push(r)
                    }
                    this._physicsRig.settings.push(n)
                }
                this.initialize(), e.release()
            }
            initialize() {
                let t, e, i;
                for (let r = 0; r < this._physicsRig.subRigCount; ++r) {
                    e = this._physicsRig.settings[r], t = this._physicsRig.particles.slice(e.baseParticleIndex), t[0].initialPosition = new n(0, 0), t[0].lastPosition = new n(t[0].initialPosition.x, t[0].initialPosition.y), t[0].lastGravity = new n(0, -1), t[0].lastGravity.y *= -1, t[0].velocity = new n(0, 0), t[0].force = new n(0, 0);
                    for (let r = 1; r < e.particleCount; ++r) i = new n(0, 0), i.y = t[r].radius, t[r].initialPosition = new n(t[r - 1].initialPosition.x + i.x, t[r - 1].initialPosition.y + i.y), t[r].position = new n(t[r].initialPosition.x, t[r].initialPosition.y), t[r].lastPosition = new n(t[r].initialPosition.x, t[r].initialPosition.y), t[r].lastGravity = new n(0, -1), t[r].lastGravity.y *= -1, t[r].velocity = new n(0, 0), t[r].force = new n(0, 0)
                }
            }
        }
        class Gt {
            constructor() {
                this.gravity = new n(0, 0), this.wind = new n(0, 0)
            }
        }

        function Xt(t, e, i, r, s, n, o, a, l, u) {
            t.x += ie(i, r, s, n, o.minimum, o.maximum, o.defalut, l) * u
        }

        function Wt(t, e, i, r, s, n, o, a, l, u) {
            t.y += ie(i, r, s, n, o.minimum, o.maximum, o.defalut, l) * u
        }

        function Yt(t, e, i, r, s, n, o, a, l, u) {
            e.angle += ie(i, r, s, n, a.minimum, a.maximum, a.defalut, l) * u
        }

        function qt(t, e, i, r, s) {
            let n = t.x;
            return r && (n *= -1), n
        }

        function Ht(t, e, i, r, s) {
            let n = t.y;
            return r && (n *= -1), n
        }

        function $t(t, e, i, r, s) {
            let n;
            return s = i >= 2 ? e[i - 1].position.substract(e[i - 2].position) : s.multiplyByScaler(-1), n = o.directionToRadian(s, t), r && (n *= -1), n
        }

        function Zt(t, e) {
            return Math.min(t, e) + function(t, e) {
                return Math.abs(Math.max(t, e) - Math.min(t, e))
            }(t, e) / 2
        }

        function Jt(t, e) {
            return t.x
        }

        function Qt(t, e) {
            return t.y
        }

        function Kt(t, e) {
            return e
        }

        function te(t, e, i, r, s, a, l, u) {
            let h, d, c, g, p = new n(0, 0),
                m = new n(0, 0),
                f = new n(0, 0),
                _ = new n(0, 0);
            t[0].position = new n(i.x, i.y), h = o.degreesToRadian(r), g = o.radianToDirection(h), g.normalize();
            for (let i = 1; i < e; ++i) t[i].force = g.multiplyByScaler(t[i].acceleration).add(s), t[i].lastPosition = new n(t[i].position.x, t[i].position.y), d = t[i].delay * l * 30, p = t[i].position.substract(t[i - 1].position), c = o.directionToRadian(t[i].lastGravity, g) / u, p.x = o.cos(c) * p.x - p.y * o.sin(c), p.y = o.sin(c) * p.x + p.y * o.cos(c), t[i].position = t[i - 1].position.add(p), m = t[i].velocity.multiplyByScaler(d), f = t[i].force.multiplyByScaler(d).multiplyByScaler(d), t[i].position = t[i].position.add(m).add(f), _ = t[i].position.substract(t[i - 1].position), _.normalize(), t[i].position = t[i - 1].position.add(_.multiplyByScaler(t[i].radius)), o.abs(t[i].position.x) < a && (t[i].position.x = 0), 0 != d && (t[i].velocity = t[i].position.substract(t[i].lastPosition), t[i].velocity = t[i].velocity.divisionByScalar(d), t[i].velocity = t[i].velocity.multiplyByScaler(t[i].mobility)), t[i].force = new n(0, 0), t[i].lastGravity = new n(g.x, g.y)
        }

        function ee(t, e, i, r, s) {
            let n, o, a;
            n = s.getScale(s.translationScale, s.angleScale), o = r * n, o < e ? (o < s.valueBelowMinimum && (s.valueBelowMinimum = o), o = e) : o > i && (o > s.valueExceededMaximum && (s.valueExceededMaximum = o), o = i), a = s.weight / 100, a >= 1 || (o = t[0] * (1 - a) + o * a), t[0] = o
        }

        function ie(t, e, i, r, s, n, a, l) {
            let u = 0;
            const h = o.max(i, e);
            h < t && (t = h);
            const d = o.min(i, e);
            d > t && (t = d);
            const c = o.min(s, n),
                g = o.max(s, n),
                p = a,
                m = Zt(d, h),
                f = t - m;
            switch (Math.sign(f)) {
                case 1: {
                    const t = g - p,
                        e = h - m;
                    0 != e && (u = f * (t / e), u += p);
                    break
                }
                case -1: {
                    const t = c - p,
                        e = d - m;
                    0 != e && (u = f * (t / e), u += p);
                    break
                }
                case 0:
                    u = p
            }
            return l ? u : -1 * u
        }

        function re() {
            var t;
            null === (t = this.__moc) || void 0 === t || t.release()
        }
        $.b.cubism4 = it, Lt.a.registerRuntime({
            version: 4,
            ready: It,
            test: t => t instanceof F || F.isValidJSON(t),
            isValidMoc(t) {
                if (t.byteLength < 4) return !1;
                const e = new Int8Array(t, 0, 4);
                return "MOC3" === String.fromCharCode(...e)
            },
            createModelSettings: t => new F(t),
            createCoreModel(t) {
                const e = At.create(t);
                try {
                    const t = e.createModel();
                    return t.__moc = e, t
                } catch (t) {
                    try {
                        e.release()
                    } catch (t) {}
                    throw t
                }
            },
            createInternalModel(t, e, i) {
                const r = new Pt(t, e, i),
                    s = t;
                return s.__moc && (r.__moc = s.__moc, delete s.__moc, r.once("destroy", re)), r
            },
            createPhysics: (t, e) => zt.create(e),
            createPose: (t, e) => Et.create(e)
        })
    }, , function(t, e, i) {
        var r = i(89),
            s = i(90),
            n = i(104);
        t.exports = function(t, e) {
            var i = {};
            return e = n(e, 3), s(t, (function(t, s, n) {
                r(i, e(t, s, n), t)
            })), i
        }
    }, , function(t, e, i) {
        "use strict";
        if (!window.Live2DCubismCore) throw new Error("Cannot find Cubism 4 runtime. Did you forget to include the live2dcubismcore.min.js?")
    }, function(t, e, i) {
        var r = i(36);
        t.exports = function(t, e, i) {
            "__proto__" == e && r ? r(t, e, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0
            }) : t[e] = i
        }
    }, function(t, e, i) {
        var r = i(91),
            s = i(42);
        t.exports = function(t, e) {
            return t && r(t, e, s)
        }
    }, function(t, e, i) {
        var r = i(92)();
        t.exports = r
    }, function(t, e) {
        t.exports = function(t) {
            return function(e, i, r) {
                for (var s = -1, n = Object(e), o = r(e), a = o.length; a--;) {
                    var l = o[t ? a : ++s];
                    if (!1 === i(n[l], l, n)) break
                }
                return e
            }
        }
    }, function(t, e, i) {
        var r = i(94),
            s = i(71),
            n = i(12),
            o = i(72),
            a = i(74),
            l = i(75),
            u = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            var i = n(t),
                h = !i && s(t),
                d = !i && !h && o(t),
                c = !i && !h && !d && l(t),
                g = i || h || d || c,
                p = g ? r(t.length, String) : [],
                m = p.length;
            for (var f in t) !e && !u.call(t, f) || g && ("length" == f || d && ("offset" == f || "parent" == f) || c && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || a(f, m)) || p.push(f);
            return p
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, r = Array(t); ++i < t;) r[i] = e(i);
            return r
        }
    }, function(t, e, i) {
        var r = i(21),
            s = i(23);
        t.exports = function(t) {
            return s(t) && "[object Arguments]" == r(t)
        }
    }, function(t, e) {
        t.exports = function() {
            return !1
        }
    }, function(t, e, i) {
        var r = i(21),
            s = i(43),
            n = i(23),
            o = {};
        o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, t.exports = function(t) {
            return n(t) && s(t.length) && !!o[r(t)]
        }
    }, function(t, e, i) {
        (function(t) {
            var r = i(38),
                s = e && !e.nodeType && e,
                n = s && "object" == typeof t && t && !t.nodeType && t,
                o = n && n.exports === s && r.process,
                a = function() {
                    try {
                        var t = n && n.require && n.require("util").types;
                        return t || o && o.binding && o.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
        }).call(this, i(73)(t))
    }, function(t, e, i) {
        var r = i(100),
            s = i(101),
            n = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t)) return s(t);
            var e = [];
            for (var i in Object(t)) n.call(t, i) && "constructor" != i && e.push(i);
            return e
        }
    }, function(t, e) {
        var i = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || i)
        }
    }, function(t, e, i) {
        var r = i(102)(Object.keys, Object);
        t.exports = r
    }, function(t, e) {
        t.exports = function(t, e) {
            return function(i) {
                return t(e(i))
            }
        }
    }, function(t, e, i) {
        var r = i(37),
            s = i(43);
        t.exports = function(t) {
            return null != t && s(t.length) && !r(t)
        }
    }, function(t, e, i) {
        var r = i(105),
            s = i(152),
            n = i(25),
            o = i(12),
            a = i(162);
        t.exports = function(t) {
            return "function" == typeof t ? t : null == t ? n : "object" == typeof t ? o(t) ? s(t[0], t[1]) : r(t) : a(t)
        }
    }, function(t, e, i) {
        var r = i(106),
            s = i(151),
            n = i(81);
        t.exports = function(t) {
            var e = s(t);
            return 1 == e.length && e[0][2] ? n(e[0][0], e[0][1]) : function(i) {
                return i === t || r(i, t, e)
            }
        }
    }, function(t, e, i) {
        var r = i(76),
            s = i(78);
        t.exports = function(t, e, i, n) {
            var o = i.length,
                a = o,
                l = !n;
            if (null == t) return !a;
            for (t = Object(t); o--;) {
                var u = i[o];
                if (l && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
            }
            for (; ++o < a;) {
                var h = (u = i[o])[0],
                    d = t[h],
                    c = u[1];
                if (l && u[2]) {
                    if (void 0 === d && !(h in t)) return !1
                } else {
                    var g = new r;
                    if (n) var p = n(d, c, h, t, e, g);
                    if (!(void 0 === p ? s(c, d, 3, n, g) : p)) return !1
                }
            }
            return !0
        }
    }, function(t, e) {
        t.exports = function() {
            this.__data__ = [], this.size = 0
        }
    }, function(t, e, i) {
        var r = i(28),
            s = Array.prototype.splice;
        t.exports = function(t) {
            var e = this.__data__,
                i = r(e, t);
            return !(i < 0) && (i == e.length - 1 ? e.pop() : s.call(e, i, 1), --this.size, !0)
        }
    }, function(t, e, i) {
        var r = i(28);
        t.exports = function(t) {
            var e = this.__data__,
                i = r(e, t);
            return i < 0 ? void 0 : e[i][1]
        }
    }, function(t, e, i) {
        var r = i(28);
        t.exports = function(t) {
            return r(this.__data__, t) > -1
        }
    }, function(t, e, i) {
        var r = i(28);
        t.exports = function(t, e) {
            var i = this.__data__,
                s = r(i, t);
            return s < 0 ? (++this.size, i.push([t, e])) : i[s][1] = e, this
        }
    }, function(t, e, i) {
        var r = i(27);
        t.exports = function() {
            this.__data__ = new r, this.size = 0
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = this.__data__,
                i = e.delete(t);
            return this.size = e.size, i
        }
    }, function(t, e) {
        t.exports = function(t) {
            return this.__data__.get(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t)
        }
    }, function(t, e, i) {
        var r = i(27),
            s = i(44),
            n = i(45);
        t.exports = function(t, e) {
            var i = this.__data__;
            if (i instanceof r) {
                var o = i.__data__;
                if (!s || o.length < 199) return o.push([t, e]), this.size = ++i.size, this;
                i = this.__data__ = new n(o)
            }
            return i.set(t, e), this.size = i.size, this
        }
    }, function(t, e, i) {
        var r = i(118),
            s = i(27),
            n = i(44);
        t.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new r,
                map: new(n || s),
                string: new r
            }
        }
    }, function(t, e, i) {
        var r = i(119),
            s = i(120),
            n = i(121),
            o = i(122),
            a = i(123);

        function l(t) {
            var e = -1,
                i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        l.prototype.clear = r, l.prototype.delete = s, l.prototype.get = n, l.prototype.has = o, l.prototype.set = a, t.exports = l
    }, function(t, e, i) {
        var r = i(29);
        t.exports = function() {
            this.__data__ = r ? r(null) : {}, this.size = 0
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
    }, function(t, e, i) {
        var r = i(29),
            s = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            if (r) {
                var i = e[t];
                return "__lodash_hash_undefined__" === i ? void 0 : i
            }
            return s.call(e, t) ? e[t] : void 0
        }
    }, function(t, e, i) {
        var r = i(29),
            s = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : s.call(e, t)
        }
    }, function(t, e, i) {
        var r = i(29);
        t.exports = function(t, e) {
            var i = this.__data__;
            return this.size += this.has(t) ? 0 : 1, i[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
        }
    }, function(t, e, i) {
        var r = i(30);
        t.exports = function(t) {
            var e = r(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
    }, function(t, e, i) {
        var r = i(30);
        t.exports = function(t) {
            return r(this, t).get(t)
        }
    }, function(t, e, i) {
        var r = i(30);
        t.exports = function(t) {
            return r(this, t).has(t)
        }
    }, function(t, e, i) {
        var r = i(30);
        t.exports = function(t, e) {
            var i = r(this, t),
                s = i.size;
            return i.set(t, e), this.size += i.size == s ? 0 : 1, this
        }
    }, function(t, e, i) {
        var r = i(76),
            s = i(79),
            n = i(135),
            o = i(139),
            a = i(146),
            l = i(12),
            u = i(72),
            h = i(75),
            d = "[object Object]",
            c = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, i, g, p, m) {
            var f = l(t),
                _ = l(e),
                v = f ? "[object Array]" : a(t),
                x = _ ? "[object Array]" : a(e),
                y = (v = "[object Arguments]" == v ? d : v) == d,
                b = (x = "[object Arguments]" == x ? d : x) == d,
                M = v == x;
            if (M && u(t)) {
                if (!u(e)) return !1;
                f = !0, y = !1
            }
            if (M && !y) return m || (m = new r), f || h(t) ? s(t, e, i, g, p, m) : n(t, e, v, i, g, p, m);
            if (!(1 & i)) {
                var S = y && c.call(t, "__wrapped__"),
                    P = b && c.call(e, "__wrapped__");
                if (S || P) {
                    var C = S ? t.value() : t,
                        w = P ? e.value() : e;
                    return m || (m = new r), p(C, w, i, g, m)
                }
            }
            return !!M && (m || (m = new r), o(t, e, i, g, p, m))
        }
    }, function(t, e, i) {
        var r = i(45),
            s = i(131),
            n = i(132);

        function o(t) {
            var e = -1,
                i = null == t ? 0 : t.length;
            for (this.__data__ = new r; ++e < i;) this.add(t[e])
        }
        o.prototype.add = o.prototype.push = s, o.prototype.has = n, t.exports = o
    }, function(t, e) {
        t.exports = function(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this
        }
    }, function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t)
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, r = null == t ? 0 : t.length; ++i < r;)
                if (e(t[i], i, t)) return !0;
            return !1
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return t.has(e)
        }
    }, function(t, e, i) {
        var r = i(22),
            s = i(136),
            n = i(77),
            o = i(79),
            a = i(137),
            l = i(138),
            u = r ? r.prototype : void 0,
            h = u ? u.valueOf : void 0;
        t.exports = function(t, e, i, r, u, d, c) {
            switch (i) {
                case "[object DataView]":
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case "[object ArrayBuffer]":
                    return !(t.byteLength != e.byteLength || !d(new s(t), new s(e)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return n(+t, +e);
                case "[object Error]":
                    return t.name == e.name && t.message == e.message;
                case "[object RegExp]":
                case "[object String]":
                    return t == e + "";
                case "[object Map]":
                    var g = a;
                case "[object Set]":
                    var p = 1 & r;
                    if (g || (g = l), t.size != e.size && !p) return !1;
                    var m = c.get(t);
                    if (m) return m == e;
                    r |= 2, c.set(t, e);
                    var f = o(g(t), g(e), r, u, d, c);
                    return c.delete(t), f;
                case "[object Symbol]":
                    if (h) return h.call(t) == h.call(e)
            }
            return !1
        }
    }, function(t, e, i) {
        var r = i(9).Uint8Array;
        t.exports = r
    }, function(t, e) {
        t.exports = function(t) {
            var e = -1,
                i = Array(t.size);
            return t.forEach((function(t, r) {
                i[++e] = [r, t]
            })), i
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = -1,
                i = Array(t.size);
            return t.forEach((function(t) {
                i[++e] = t
            })), i
        }
    }, function(t, e, i) {
        var r = i(140),
            s = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, i, n, o, a) {
            var l = 1 & i,
                u = r(t),
                h = u.length;
            if (h != r(e).length && !l) return !1;
            for (var d = h; d--;) {
                var c = u[d];
                if (!(l ? c in e : s.call(e, c))) return !1
            }
            var g = a.get(t),
                p = a.get(e);
            if (g && p) return g == e && p == t;
            var m = !0;
            a.set(t, e), a.set(e, t);
            for (var f = l; ++d < h;) {
                var _ = t[c = u[d]],
                    v = e[c];
                if (n) var x = l ? n(v, _, c, e, t, a) : n(_, v, c, t, e, a);
                if (!(void 0 === x ? _ === v || o(_, v, i, n, a) : x)) {
                    m = !1;
                    break
                }
                f || (f = "constructor" == c)
            }
            if (m && !f) {
                var y = t.constructor,
                    b = e.constructor;
                y == b || !("constructor" in t) || !("constructor" in e) || "function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b || (m = !1)
            }
            return a.delete(t), a.delete(e), m
        }
    }, function(t, e, i) {
        var r = i(141),
            s = i(143),
            n = i(42);
        t.exports = function(t) {
            return r(t, n, s)
        }
    }, function(t, e, i) {
        var r = i(142),
            s = i(12);
        t.exports = function(t, e, i) {
            var n = e(t);
            return s(t) ? n : r(n, i(t))
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, r = e.length, s = t.length; ++i < r;) t[s + i] = e[i];
            return t
        }
    }, function(t, e, i) {
        var r = i(144),
            s = i(145),
            n = Object.prototype.propertyIsEnumerable,
            o = Object.getOwnPropertySymbols,
            a = o ? function(t) {
                return null == t ? [] : (t = Object(t), r(o(t), (function(e) {
                    return n.call(t, e)
                })))
            } : s;
        t.exports = a
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var i = -1, r = null == t ? 0 : t.length, s = 0, n = []; ++i < r;) {
                var o = t[i];
                e(o, i, t) && (n[s++] = o)
            }
            return n
        }
    }, function(t, e) {
        t.exports = function() {
            return []
        }
    }, function(t, e, i) {
        var r = i(147),
            s = i(44),
            n = i(148),
            o = i(149),
            a = i(150),
            l = i(21),
            u = i(39),
            h = u(r),
            d = u(s),
            c = u(n),
            g = u(o),
            p = u(a),
            m = l;
        (r && "[object DataView]" != m(new r(new ArrayBuffer(1))) || s && "[object Map]" != m(new s) || n && "[object Promise]" != m(n.resolve()) || o && "[object Set]" != m(new o) || a && "[object WeakMap]" != m(new a)) && (m = function(t) {
            var e = l(t),
                i = "[object Object]" == e ? t.constructor : void 0,
                r = i ? u(i) : "";
            if (r) switch (r) {
                case h:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case c:
                    return "[object Promise]";
                case g:
                    return "[object Set]";
                case p:
                    return "[object WeakMap]"
            }
            return e
        }), t.exports = m
    }, function(t, e, i) {
        var r = i(11)(i(9), "DataView");
        t.exports = r
    }, function(t, e, i) {
        var r = i(11)(i(9), "Promise");
        t.exports = r
    }, function(t, e, i) {
        var r = i(11)(i(9), "Set");
        t.exports = r
    }, function(t, e, i) {
        var r = i(11)(i(9), "WeakMap");
        t.exports = r
    }, function(t, e, i) {
        var r = i(80),
            s = i(42);
        t.exports = function(t) {
            for (var e = s(t), i = e.length; i--;) {
                var n = e[i],
                    o = t[n];
                e[i] = [n, o, r(o)]
            }
            return e
        }
    }, function(t, e, i) {
        var r = i(78),
            s = i(153),
            n = i(159),
            o = i(46),
            a = i(80),
            l = i(81),
            u = i(31);
        t.exports = function(t, e) {
            return o(t) && a(e) ? l(u(t), e) : function(i) {
                var o = s(i, t);
                return void 0 === o && o === e ? n(i, t) : r(e, o, 3)
            }
        }
    }, function(t, e, i) {
        var r = i(82);
        t.exports = function(t, e, i) {
            var s = null == t ? void 0 : r(t, e);
            return void 0 === s ? i : s
        }
    }, function(t, e, i) {
        var r = i(155),
            s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            n = /\\(\\)?/g,
            o = r((function(t) {
                var e = [];
                return 46 === t.charCodeAt(0) && e.push(""), t.replace(s, (function(t, i, r, s) {
                    e.push(r ? s.replace(n, "$1") : i || t)
                })), e
            }));
        t.exports = o
    }, function(t, e, i) {
        var r = i(156);
        t.exports = function(t) {
            var e = r(t, (function(t) {
                    return 500 === i.size && i.clear(), t
                })),
                i = e.cache;
            return e
        }
    }, function(t, e, i) {
        var r = i(45);

        function s(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
            var i = function() {
                var r = arguments,
                    s = e ? e.apply(this, r) : r[0],
                    n = i.cache;
                if (n.has(s)) return n.get(s);
                var o = t.apply(this, r);
                return i.cache = n.set(s, o) || n, o
            };
            return i.cache = new(s.Cache || r), i
        }
        s.Cache = r, t.exports = s
    }, function(t, e, i) {
        var r = i(158);
        t.exports = function(t) {
            return null == t ? "" : r(t)
        }
    }, function(t, e, i) {
        var r = i(22),
            s = i(40),
            n = i(12),
            o = i(47),
            a = r ? r.prototype : void 0,
            l = a ? a.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (n(e)) return s(e, t) + "";
            if (o(e)) return l ? l.call(e) : "";
            var i = e + "";
            return "0" == i && 1 / e == -1 / 0 ? "-0" : i
        }
    }, function(t, e, i) {
        var r = i(160),
            s = i(161);
        t.exports = function(t, e) {
            return null != t && s(t, e, r)
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return null != t && e in Object(t)
        }
    }, function(t, e, i) {
        var r = i(83),
            s = i(71),
            n = i(12),
            o = i(74),
            a = i(43),
            l = i(31);
        t.exports = function(t, e, i) {
            for (var u = -1, h = (e = r(e, t)).length, d = !1; ++u < h;) {
                var c = l(e[u]);
                if (!(d = null != t && i(t, c))) break;
                t = t[c]
            }
            return d || ++u != h ? d : !!(h = null == t ? 0 : t.length) && a(h) && o(c, h) && (n(t) || s(t))
        }
    }, function(t, e, i) {
        var r = i(163),
            s = i(164),
            n = i(46),
            o = i(31);
        t.exports = function(t) {
            return n(t) ? r(o(t)) : s(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
    }, function(t, e, i) {
        var r = i(82);
        t.exports = function(t) {
            return function(e) {
                return r(e, t)
            }
        }
    }, , , function(t, e, i) {
        "use strict";
        i.r(e);
        var r = i(32);
        i.d(e, "LOGICAL_WIDTH", (function() {
            return r.h
        })), i.d(e, "LOGICAL_HEIGHT", (function() {
            return r.g
        })), i.d(e, "ExpressionManager", (function() {
            return r.a
        })), i.d(e, "FocusController", (function() {
            return r.c
        })), i.d(e, "ModelSettings", (function() {
            return r.m
        })), i.d(e, "MotionPriority", (function() {
            return r.p
        })), i.d(e, "MotionState", (function() {
            return r.q
        })), i.d(e, "MotionPreloadStrategy", (function() {
            return r.o
        })), i.d(e, "MotionManager", (function() {
            return r.n
        })), i.d(e, "SoundManager", (function() {
            return r.r
        })), i.d(e, "InternalModel", (function() {
            return r.f
        })), i.d(e, "Live2DModel", (function() {
            return r.k
        })), i.d(e, "Live2DTransform", (function() {
            return r.l
        })), i.d(e, "InteractionMixin", (function() {
            return r.e
        })), i.d(e, "config", (function() {
            return r.x
        })), i.d(e, "VERSION", (function() {
            return r.s
        })), i.d(e, "Live2DFactory", (function() {
            return r.i
        })), i.d(e, "Live2DLoader", (function() {
            return r.j
        })), i.d(e, "XHRLoader", (function() {
            return r.t
        })), i.d(e, "FileLoader", (function() {
            return r.b
        })), i.d(e, "ZipLoader", (function() {
            return r.u
        })), i.d(e, "logger", (function() {
            return r.B
        })), i.d(e, "clamp", (function() {
            return r.w
        })), i.d(e, "rand", (function() {
            return r.C
        })), i.d(e, "copyProperty", (function() {
            return r.z
        })), i.d(e, "copyArray", (function() {
            return r.y
        })), i.d(e, "applyMixins", (function() {
            return r.v
        })), i.d(e, "folderName", (function() {
            return r.A
        })), i.d(e, "HitAreaFrames", (function() {
            return r.d
        }));
        var s = i(84);
        i.d(e, "Cubism4ExpressionManager", (function() {
            return s.a
        })), i.d(e, "Cubism4ModelSettings", (function() {
            return s.c
        })), i.d(e, "Cubism4MotionManager", (function() {
            return s.d
        })), i.d(e, "Cubism4InternalModel", (function() {
            return s.b
        })), i.d(e, "cubism4Ready", (function() {
            return s.e
        })), i.d(e, "startUpCubism4", (function() {
            return s.f
        }))
    }])
}));
//# sourceMappingURL=cubism4.min.js.map
