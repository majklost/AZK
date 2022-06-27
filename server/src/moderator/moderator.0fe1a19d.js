function t(t, e, r, i) {
  Object.defineProperty(t, e, {
    get: r,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  i = {},
  s = e.parcelRequire0b11;
null == s &&
  (((s = function (t) {
    if (t in r) return r[t].exports;
    if (t in i) {
      var e = i[t];
      delete i[t];
      var s = { id: t, exports: {} };
      return (r[t] = s), e.call(s.exports, s, s.exports), s.exports;
    }
    var n = new Error("Cannot find module '" + t + "'");
    throw ((n.code = "MODULE_NOT_FOUND"), n);
  }).register = function (t, e) {
    i[t] = e;
  }),
  (e.parcelRequire0b11 = s)),
  s.register("27Lyk", function (e, r) {
    var i, s;
    t(
      e.exports,
      "register",
      () => i,
      (t) => (i = t)
    ),
      t(
        e.exports,
        "resolve",
        () => s,
        (t) => (s = t)
      );
    var n = {};
    (i = function (t) {
      for (var e = Object.keys(t), r = 0; r < e.length; r++) n[e[r]] = t[e[r]];
    }),
      (s = function (t) {
        var e = n[t];
        if (null == e) throw new Error("Could not resolve bundle with id " + t);
        return e;
      });
  }),
  s.register("cYnQv", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("8juzN"),
      import.meta.url
    ).toString();
  }),
  s.register("iaZd9", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("3ECAR"),
      import.meta.url
    ).toString();
  }),
  s.register("73TyW", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("jcDXA"),
      import.meta.url
    ).toString();
  }),
  s.register("83c5G", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("lcWkq"),
      import.meta.url
    ).toString();
  }),
  s.register("jnpdw", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("dIXsb"),
      import.meta.url
    ).toString();
  }),
  s.register("k4aEt", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("3Qci8"),
      import.meta.url
    ).toString();
  }),
  s.register("4Yw34", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("hnPBt"),
      import.meta.url
    ).toString();
  }),
  s.register("fmV2E", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("fcwDH"),
      import.meta.url
    ).toString();
  }),
  s.register("bpGew", function (t, e) {
    t.exports = new URL(
      s("27Lyk").resolve("77F2q"),
      import.meta.url
    ).toString();
  }),
  s("27Lyk").register(
    JSON.parse(
      '{"gYRnX":"moderator.0fe1a19d.js","8juzN":"right_button.02539b6f.png","3ECAR":"false_button.7ee004e0.png","jcDXA":"basic_tile.60975693.png","lcWkq":"red_tile.31afee64.png","dIXsb":"blue_tile.7f533cf0.png","3Qci8":"grey_tile.e275c97a.png","hnPBt":"switchToBlue.c53b199a.png","fcwDH":"switchToOrange.0be3409c.png","77F2q":"Replay_button.e3343c07.png"}'
    )
  );
const n = Phaser.Utils.Objects.GetValue;
var o = function (t, e, r) {
    return void 0 === t
      ? { x: e, y: r }
      : "number" == typeof t
      ? { x: t, y: t }
      : t;
  },
  h = function (t, e) {
    "number" == typeof e
      ? ((t.x = e), (t.y = e))
      : ((t.x = n(e, "x", 0)), (t.y = n(e, "y", 0)));
  },
  a = class {
    constructor(t, e, r, i, s) {
      (this.cornerRadius = {}),
        (this._width = 0),
        (this._height = 0),
        this.setTo(t, e, r, i, s);
    }
    setTo(t, e, r, i, s) {
      return (
        this.setPosition(t, e), this.setRadius(s), this.setSize(r, i), this
      );
    }
    setPosition(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = t),
        (this.x = t),
        (this.y = e),
        this
      );
    }
    setRadius(t) {
      return void 0 === t && (t = 0), (this.radius = t), this;
    }
    setSize(t, e) {
      return (this.width = t), (this.height = e), this;
    }
    get minWidth() {
      var t = this.cornerRadius;
      return Math.max(t.tl.x + t.tr.x, t.bl.x + t.br.x);
    }
    get minHeight() {
      var t = this.cornerRadius;
      return Math.max(t.tl.y + t.bl.y, t.tr.y + t.br.y);
    }
    get width() {
      return this._width;
    }
    set width(t) {
      null == t && (t = 0), (this._width = Math.max(t, this.minWidth));
    }
    get height() {
      return this._height;
    }
    set height(t) {
      null == t && (t = 0), (this._height = Math.max(t, this.minHeight));
    }
    get radius() {
      var t = this.cornerRadius;
      return Math.max(
        t.tl.x,
        t.tl.y,
        t.tr.x,
        t.tr.y,
        t.bl.x,
        t.bl.y,
        t.br.x,
        t.br.y
      );
    }
    set radius(t) {
      var e, r;
      "number" == typeof t
        ? ((e = t), (r = t))
        : ((e = n(t, "x", 0)), (r = n(t, "y", 0)));
      var i = this.cornerRadius;
      (i.tl = o(n(t, "tl", void 0), e, r)),
        (i.tr = o(n(t, "tr", void 0), e, r)),
        (i.bl = o(n(t, "bl", void 0), e, r)),
        (i.br = o(n(t, "br", void 0), e, r));
    }
    get radiusTL() {
      var t = this.cornerRadius.tl;
      return Math.max(t.x, t.y);
    }
    set radiusTL(t) {
      h(this.cornerRadius.tl, t);
    }
    get radiusTR() {
      var t = this.cornerRadius.tr;
      return Math.max(t.x, t.y);
    }
    set radiusTR(t) {
      h(this.cornerRadius.tr, t);
    }
    get radiusBL() {
      var t = this.cornerRadius.bl;
      return Math.max(t.x, t.y);
    }
    set radiusBL(t) {
      h(this.cornerRadius.bl, t);
    }
    get radiusBR() {
      var t = this.cornerRadius.br;
      return Math.max(t.x, t.y);
    }
    set radiusBR(t) {
      h(this.cornerRadius.br, t);
    }
  },
  c = function (t, e, r) {
    var i = r.length;
    if (i >= 2) {
      var s = r[i - 2],
        n = r[i - 1];
      if (t === s && e === n) return r;
    }
    return r.push(t, e), r;
  };
const u = Phaser.Math.DegToRad;
var l = function (t, e, r, i, s, n, o, h, a) {
    o && n > s ? (n -= 360) : !o && n < s && (n += 360);
    var l = u(n - s) / h;
    s = u(s);
    for (var f = 0; f <= h; f++) {
      var p = s + l * f,
        d = t + r * Math.cos(p),
        g = e + i * Math.sin(p);
      c(d, g, a);
    }
    return a;
  },
  f = Phaser.Renderer.WebGL.Utils,
  p = function (t, e, r, i, s, n) {
    for (
      var o = f.getTintAppendFloatAlpha(r.fillColor, r.fillAlpha * i),
        h = r.pathData,
        a = r.pathIndexes,
        c = 0;
      c < a.length;
      c += 3
    ) {
      var u = 2 * a[c],
        l = 2 * a[c + 1],
        p = 2 * a[c + 2],
        d = h[u + 0] - s,
        g = h[u + 1] - n,
        y = h[l + 0] - s,
        m = h[l + 1] - n,
        b = h[p + 0] - s,
        w = h[p + 1] - n,
        v = e.getX(d, g),
        E = e.getY(d, g),
        R = e.getX(y, m),
        B = e.getY(y, m),
        T = e.getX(b, w),
        A = e.getY(b, w);
      t.batchTri(r, v, E, R, B, T, A, 0, 0, 1, 1, o, o, o, 2);
    }
  },
  d = Phaser.Renderer.WebGL.Utils,
  g = function (t, e, r, i, s) {
    var n = t.strokeTint,
      o = d.getTintAppendFloatAlpha(e.strokeColor, e.strokeAlpha * r);
    (n.TL = o), (n.TR = o), (n.BL = o), (n.BR = o);
    var h = e.pathData,
      a = h.length - 1,
      c = e.lineWidth,
      u = c / 2,
      l = h[0] - i,
      f = h[1] - s;
    e.closePath || (a -= 2);
    for (var p = 2; p < a; p += 2) {
      var g = h[p] - i,
        y = h[p + 1] - s;
      t.batchLine(l, f, g, y, u, u, c, p - 2, !!e.closePath && p === a - 1),
        (l = g),
        (f = y);
    }
  };
const y = Phaser.GameObjects.GetCalcMatrix;
var m = function (t, e, r, i) {
    e.dirty && (e.updateData(), (e.dirty = !1)), r.addToRenderList(e);
    var s = t.pipelines.set(e.pipeline),
      n = y(e, r, i),
      o = s.calcMatrix.copyFrom(n.calc),
      h = e._displayOriginX,
      a = e._displayOriginY,
      c = r.alpha * e.alpha;
    t.pipelines.preBatch(e),
      e.isFilled && p(s, o, e, c, h, a),
      e.isStroked && g(s, e, c, h, a),
      t.pipelines.postBatch(e);
  },
  b = function (t, e, r, i) {
    var s = r || e.fillColor,
      n = i || e.fillAlpha,
      o = (16711680 & s) >>> 16,
      h = (65280 & s) >>> 8,
      a = 255 & s;
    t.fillStyle = "rgba(" + o + "," + h + "," + a + "," + n + ")";
  },
  w = function (t, e, r, i) {
    var s = r || e.strokeColor,
      n = i || e.strokeAlpha,
      o = (16711680 & s) >>> 16,
      h = (65280 & s) >>> 8,
      a = 255 & s;
    (t.strokeStyle = "rgba(" + o + "," + h + "," + a + "," + n + ")"),
      (t.lineWidth = e.lineWidth);
  };
const v = Phaser.Renderer.Canvas.SetTransform;
var E = {
  renderWebGL: m,
  renderCanvas: function (t, e, r, i) {
    e.dirty && (e.updateData(), (e.dirty = !1)), r.addToRenderList(e);
    var s = t.currentContext;
    if (v(t, s, e, r, i)) {
      var n = e._displayOriginX,
        o = e._displayOriginY,
        h = e.pathData,
        a = h.length - 1,
        c = h[0] - n,
        u = h[1] - o;
      s.beginPath(), s.moveTo(c, u), e.closePath || (a -= 2);
      for (var l = 2; l < a; l += 2) {
        var f = h[l] - n,
          p = h[l + 1] - o;
        s.lineTo(f, p);
      }
      s.closePath(),
        e.isFilled && (b(s, e), s.fill()),
        e.isStroked && (w(s, e), s.stroke()),
        s.restore();
    }
  },
};
const R = Phaser.GameObjects.Shape,
  B = Phaser.Utils.Objects.GetValue,
  T = Phaser.Geom.Polygon.Earcut;
class A extends R {
  constructor(t, e, r, i, s, n, o, h) {
    void 0 === e && (e = 0), void 0 === r && (r = 0);
    var c = new a();
    super(t, "rexRoundRectangleShape", c);
    var u = B(n, "radius", n);
    c.setTo(0, 0, i, s, u);
    var l = B(n, "iteration", void 0);
    this.setIteration(l),
      this.setPosition(e, r),
      void 0 !== o && this.setFillStyle(o, h),
      this.updateDisplayOrigin(),
      (this.dirty = !0);
  }
  updateData() {
    var t = this.geom,
      e = this.pathData;
    e.length = 0;
    var r,
      i = t.cornerRadius,
      s = this.iteration + 1;
    if (((r = i.br), x(r))) {
      var n = t.width - r.x,
        o = t.height - r.y;
      l(n, o, r.x, r.y, 0, 90, !1, s, e);
    } else c(t.width, t.height, e);
    if (((r = i.bl), x(r))) {
      (n = r.x), (o = t.height - r.y);
      l(n, o, r.x, r.y, 90, 180, !1, s, e);
    } else c(0, t.height, e);
    if (((r = i.tl), x(r))) {
      (n = r.x), (o = r.y);
      l(n, o, r.x, r.y, 180, 270, !1, s, e);
    } else c(0, 0, e);
    if (((r = i.tr), x(r))) {
      (n = t.width - r.x), (o = r.y);
      l(n, o, r.x, r.y, 270, 360, !1, s, e);
    } else c(t.width, 0, e);
    return e.push(e[0], e[1]), (this.pathIndexes = T(e)), this;
  }
  get width() {
    return this.geom.width;
  }
  set width(t) {
    this.resize(t, this.height);
  }
  get height() {
    return this.geom.height;
  }
  set height(t) {
    this.resize(this.width, t);
  }
  setSize(t, e) {
    if (
      (void 0 === e && (e = t), this.geom.width === t && this.geom.height === e)
    )
      return this;
    this.geom.setSize(t, e), this.updateDisplayOrigin(), (this.dirty = !0);
    var r = this.input;
    return (
      r && !r.customHitArea && ((r.hitArea.width = t), (r.hitArea.height = e)),
      this
    );
  }
  resize(t, e) {
    return this.setSize(t, e), this;
  }
  get iteration() {
    return this._iteration;
  }
  set iteration(t) {
    void 0 !== this._iteration
      ? this._iteration !== t && ((this._iteration = t), (this.dirty = !0))
      : (this._iteration = t);
  }
  setIteration(t) {
    return void 0 === t && (t = 6), (this.iteration = t), this;
  }
  get radius() {
    return this.geom.radius;
  }
  set radius(t) {
    this.geom.setRadius(t), this.updateDisplayOrigin(), (this.dirty = !0);
  }
  get radiusTL() {
    return this.geom.radiusTL;
  }
  set radiusTL(t) {
    (this.geom.radiusTL = t), (this.dirty = !0);
  }
  get radiusTR() {
    return this.geom.radiusTR;
  }
  set radiusTR(t) {
    (this.geom.radiusTR = t), (this.dirty = !0);
  }
  get radiusBL() {
    return this.geom.radiusBL;
  }
  set radiusBL(t) {
    (this.geom.radiusBL = t), (this.dirty = !0);
  }
  get radiusBR() {
    return this.geom.radiusBR;
  }
  set radiusBR(t) {
    (this.geom.radiusBR = t), (this.dirty = !0);
  }
  setRadius(t) {
    return void 0 === t && (t = 0), (this.radius = t), this;
  }
  setRadiusTL(t) {
    return void 0 === t && (t = 0), (this.radiusTL = t), this;
  }
  setRadiusTR(t) {
    return void 0 === t && (t = 0), (this.radiusTR = t), this;
  }
  setRadiusBL(t) {
    return void 0 === t && (t = 0), (this.radiuBL = t), this;
  }
  setRadiusBR(t) {
    return void 0 === t && (t = 0), (this.radiusBR = t), this;
  }
  get cornerRadius() {
    return this.geom.cornerRadius;
  }
  set cornerRadius(t) {
    this.radius = t;
  }
  setCornerRadius(t) {
    return this.setRadius(t);
  }
}
var x = function (t) {
  return 0 !== t.x && 0 !== t.y;
};
Object.assign(A.prototype, E);
var k = A;
Phaser.Utils.Objects.GetAdvancedValue,
  Phaser.Utils.Objects.GetValue,
  Phaser.GameObjects.BuildGameObject;
var _ = function (t) {
    return null == t || "" === t || 0 === t.length;
  },
  S = function (t, e, r, i) {
    if ((void 0 === i && (i = "."), "object" == typeof t)) {
      if (_(e)) {
        if (null == r) return;
        "object" == typeof r && (t = r);
      } else {
        "string" == typeof e && (e = e.split(i));
        var s = e.pop(),
          n = (function (t, e, r) {
            var i = t;
            if (_(e));
            else {
              var s;
              "string" == typeof e && (e = e.split("."));
              for (var n = 0, o = e.length; n < o; n++) {
                var h;
                (null != i[(s = e[n])] && "object" == typeof i[s]) ||
                  ((h = n === o - 1 ? (void 0 === r ? {} : r) : {}),
                  (i[s] = h)),
                  (i = i[s]);
              }
            }
            return i;
          })(t, e);
        n[s] = r;
      }
      return t;
    }
  };
Phaser.Plugins.BasePlugin;
S(window, "RexPlugins.GameObjects.RoundRectangle", k);
var O = new Phaser.Events.EventEmitter();
const L = Object.create(null);
(L.open = "0"),
  (L.close = "1"),
  (L.ping = "2"),
  (L.pong = "3"),
  (L.message = "4"),
  (L.upgrade = "5"),
  (L.noop = "6");
const C = Object.create(null);
Object.keys(L).forEach((t) => {
  C[L[t]] = t;
});
const I = { type: "error", data: "parser error" },
  P =
    "function" == typeof Blob ||
    ("undefined" != typeof Blob &&
      "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
  N = "function" == typeof ArrayBuffer,
  U = (t, e) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const t = r.result.split(",")[1];
        e("b" + t);
      }),
      r.readAsDataURL(t)
    );
  };
var j = ({ type: t, data: e }, r, i) => {
  return P && e instanceof Blob
    ? r
      ? i(e)
      : U(e, i)
    : N &&
      (e instanceof ArrayBuffer ||
        ((s = e),
        "function" == typeof ArrayBuffer.isView
          ? ArrayBuffer.isView(s)
          : s && s.buffer instanceof ArrayBuffer))
    ? r
      ? i(e)
      : U(new Blob([e]), i)
    : i(L[t] + (e || ""));
  var s;
};
const F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  D = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
for (let t = 0; t < F.length; t++) D[F.charCodeAt(t)] = t;
const M = "function" == typeof ArrayBuffer,
  q = (t, e) => {
    if (M) {
      const r = ((t) => {
        let e,
          r,
          i,
          s,
          n,
          o = 0.75 * t.length,
          h = t.length,
          a = 0;
        "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
        const c = new ArrayBuffer(o),
          u = new Uint8Array(c);
        for (e = 0; e < h; e += 4)
          (r = D[t.charCodeAt(e)]),
            (i = D[t.charCodeAt(e + 1)]),
            (s = D[t.charCodeAt(e + 2)]),
            (n = D[t.charCodeAt(e + 3)]),
            (u[a++] = (r << 2) | (i >> 4)),
            (u[a++] = ((15 & i) << 4) | (s >> 2)),
            (u[a++] = ((3 & s) << 6) | (63 & n));
        return c;
      })(t);
      return H(r, e);
    }
    return { base64: !0, data: t };
  },
  H = (t, e) => ("blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t);
var $ = (t, e) => {
  if ("string" != typeof t) return { type: "message", data: H(t, e) };
  const r = t.charAt(0);
  if ("b" === r) return { type: "message", data: q(t.substring(1), e) };
  return C[r]
    ? t.length > 1
      ? { type: C[r], data: t.substring(1) }
      : { type: C[r] }
    : I;
};
const z = String.fromCharCode(30);
function G(t) {
  if (t)
    return (function (t) {
      for (var e in G.prototype) t[e] = G.prototype[e];
      return t;
    })(t);
}
(G.prototype.on = G.prototype.addEventListener =
  function (t, e) {
    return (
      (this._callbacks = this._callbacks || {}),
      (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
      this
    );
  }),
  (G.prototype.once = function (t, e) {
    function r() {
      this.off(t, r), e.apply(this, arguments);
    }
    return (r.fn = e), this.on(t, r), this;
  }),
  (G.prototype.off =
    G.prototype.removeListener =
    G.prototype.removeAllListeners =
    G.prototype.removeEventListener =
      function (t, e) {
        if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
          return (this._callbacks = {}), this;
        var r,
          i = this._callbacks["$" + t];
        if (!i) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var s = 0; s < i.length; s++)
          if ((r = i[s]) === e || r.fn === e) {
            i.splice(s, 1);
            break;
          }
        return 0 === i.length && delete this._callbacks["$" + t], this;
      }),
  (G.prototype.emit = function (t) {
    this._callbacks = this._callbacks || {};
    for (
      var e = new Array(arguments.length - 1),
        r = this._callbacks["$" + t],
        i = 1;
      i < arguments.length;
      i++
    )
      e[i - 1] = arguments[i];
    if (r) {
      i = 0;
      for (var s = (r = r.slice(0)).length; i < s; ++i) r[i].apply(this, e);
    }
    return this;
  }),
  (G.prototype.emitReserved = G.prototype.emit),
  (G.prototype.listeners = function (t) {
    return (
      (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || []
    );
  }),
  (G.prototype.hasListeners = function (t) {
    return !!this.listeners(t).length;
  });
const W =
  "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : Function("return this")();
function Y(t, ...e) {
  return e.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const V = setTimeout,
  Q = clearTimeout;
function X(t, e) {
  e.useNativeTimers
    ? ((t.setTimeoutFn = V.bind(W)), (t.clearTimeoutFn = Q.bind(W)))
    : ((t.setTimeoutFn = setTimeout.bind(W)),
      (t.clearTimeoutFn = clearTimeout.bind(W)));
}
class K extends Error {
  constructor(t, e, r) {
    super(t),
      (this.description = e),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class J extends G {
  constructor(t) {
    super(),
      (this.writable = !1),
      X(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.readyState = ""),
      (this.socket = t.socket);
  }
  onError(t, e, r) {
    return super.emitReserved("error", new K(t, e, r)), this;
  }
  open() {
    return (
      ("closed" !== this.readyState && "" !== this.readyState) ||
        ((this.readyState = "opening"), this.doOpen()),
      this
    );
  }
  close() {
    return (
      ("opening" !== this.readyState && "open" !== this.readyState) ||
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    "open" === this.readyState && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const e = $(t, this.socket.binaryType);
    this.onPacket(e);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
}
const Z =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  tt = {};
let et,
  rt = 0,
  it = 0;
function st(t) {
  let e = "";
  do {
    (e = Z[t % 64] + e), (t = Math.floor(t / 64));
  } while (t > 0);
  return e;
}
function nt() {
  const t = st(+new Date());
  return t !== et ? ((rt = 0), (et = t)) : t + "." + st(rt++);
}
for (; it < 64; it++) tt[Z[it]] = it;
function ot(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) &&
      (e.length && (e += "&"),
      (e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r])));
  return e;
}
let ht = !1;
try {
  ht =
    "undefined" != typeof XMLHttpRequest &&
    "withCredentials" in new XMLHttpRequest();
} catch (t) {}
const at = ht;
function ct(t) {
  const e = t.xdomain;
  try {
    if ("undefined" != typeof XMLHttpRequest && (!e || at))
      return new XMLHttpRequest();
  } catch (t) {}
  if (!e)
    try {
      return new W[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (t) {}
}
function ut() {}
const lt = null != new ct({ xdomain: !1 }).responseType;
class ft extends G {
  constructor(t, e) {
    super(),
      X(this, e),
      (this.opts = e),
      (this.method = e.method || "GET"),
      (this.uri = t),
      (this.async = !1 !== e.async),
      (this.data = void 0 !== e.data ? e.data : null),
      this.create();
  }
  create() {
    const t = Y(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
    const e = (this.xhr = new ct(t));
    try {
      e.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
          for (let t in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(t) &&
              e.setRequestHeader(t, this.opts.extraHeaders[t]);
        }
      } catch (t) {}
      if ("POST" === this.method)
        try {
          e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (t) {}
      try {
        e.setRequestHeader("Accept", "*/*");
      } catch (t) {}
      "withCredentials" in e && (e.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout),
        (e.onreadystatechange = () => {
          4 === e.readyState &&
            (200 === e.status || 1223 === e.status
              ? this.onLoad()
              : this.setTimeoutFn(() => {
                  this.onError("number" == typeof e.status ? e.status : 0);
                }, 0));
        }),
        e.send(this.data);
    } catch (t) {
      return void this.setTimeoutFn(() => {
        this.onError(t);
      }, 0);
    }
    "undefined" != typeof document &&
      ((this.index = ft.requestsCount++), (ft.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (void 0 !== this.xhr && null !== this.xhr) {
      if (((this.xhr.onreadystatechange = ut), t))
        try {
          this.xhr.abort();
        } catch (t) {}
      "undefined" != typeof document && delete ft.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    null !== t &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
if (
  ((ft.requestsCount = 0), (ft.requests = {}), "undefined" != typeof document)
)
  if ("function" == typeof attachEvent) attachEvent("onunload", pt);
  else if ("function" == typeof addEventListener) {
    addEventListener("onpagehide" in W ? "pagehide" : "unload", pt, !1);
  }
function pt() {
  for (let t in ft.requests)
    ft.requests.hasOwnProperty(t) && ft.requests[t].abort();
}
const dt =
    "function" == typeof Promise && "function" == typeof Promise.resolve
      ? (t) => Promise.resolve().then(t)
      : (t, e) => e(t, 0),
  gt = W.WebSocket || W.MozWebSocket;
var yt, mt;
(yt = function (t) {
  var e,
    r,
    i = xt(t),
    s = i[0],
    n = i[1],
    o = new Rt(
      (function (t, e, r) {
        return (3 * (e + r)) / 4 - r;
      })(0, s, n)
    ),
    h = 0,
    a = n > 0 ? s - 4 : s;
  for (r = 0; r < a; r += 4)
    (e =
      (Et[t.charCodeAt(r)] << 18) |
      (Et[t.charCodeAt(r + 1)] << 12) |
      (Et[t.charCodeAt(r + 2)] << 6) |
      Et[t.charCodeAt(r + 3)]),
      (o[h++] = (e >> 16) & 255),
      (o[h++] = (e >> 8) & 255),
      (o[h++] = 255 & e);
  2 === n &&
    ((e = (Et[t.charCodeAt(r)] << 2) | (Et[t.charCodeAt(r + 1)] >> 4)),
    (o[h++] = 255 & e));
  1 === n &&
    ((e =
      (Et[t.charCodeAt(r)] << 10) |
      (Et[t.charCodeAt(r + 1)] << 4) |
      (Et[t.charCodeAt(r + 2)] >> 2)),
    (o[h++] = (e >> 8) & 255),
    (o[h++] = 255 & e));
  return o;
}),
  (mt = function (t) {
    for (
      var e, r = t.length, i = r % 3, s = [], n = 16383, o = 0, h = r - i;
      o < h;
      o += n
    )
      s.push(kt(t, o, o + n > h ? h : o + n));
    1 === i
      ? ((e = t[r - 1]), s.push(vt[e >> 2] + vt[(e << 4) & 63] + "=="))
      : 2 === i &&
        ((e = (t[r - 2] << 8) + t[r - 1]),
        s.push(vt[e >> 10] + vt[(e >> 4) & 63] + vt[(e << 2) & 63] + "="));
    return s.join("");
  });
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
for (
  var bt,
    wt,
    vt = [],
    Et = [],
    Rt = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    Bt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Tt = 0,
    At = Bt.length;
  Tt < At;
  ++Tt
)
  (vt[Tt] = Bt[Tt]), (Et[Bt.charCodeAt(Tt)] = Tt);
function xt(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
}
function kt(t, e, r) {
  for (var i, s, n = [], o = e; o < r; o += 3)
    (i =
      ((t[o] << 16) & 16711680) + ((t[o + 1] << 8) & 65280) + (255 & t[o + 2])),
      n.push(
        vt[((s = i) >> 18) & 63] +
          vt[(s >> 12) & 63] +
          vt[(s >> 6) & 63] +
          vt[63 & s]
      );
  return n.join("");
}
(Et["-".charCodeAt(0)] = 62),
  (Et["_".charCodeAt(0)] = 63),
  (bt = function (t, e, r, i, s) {
    var n,
      o,
      h = 8 * s - i - 1,
      a = (1 << h) - 1,
      c = a >> 1,
      u = -7,
      l = r ? s - 1 : 0,
      f = r ? -1 : 1,
      p = t[e + l];
    for (
      l += f, n = p & ((1 << -u) - 1), p >>= -u, u += h;
      u > 0;
      n = 256 * n + t[e + l], l += f, u -= 8
    );
    for (
      o = n & ((1 << -u) - 1), n >>= -u, u += i;
      u > 0;
      o = 256 * o + t[e + l], l += f, u -= 8
    );
    if (0 === n) n = 1 - c;
    else {
      if (n === a) return o ? NaN : (1 / 0) * (p ? -1 : 1);
      (o += Math.pow(2, i)), (n -= c);
    }
    return (p ? -1 : 1) * o * Math.pow(2, n - i);
  }),
  (wt = function (t, e, r, i, s, n) {
    var o,
      h,
      a,
      c = 8 * n - s - 1,
      u = (1 << c) - 1,
      l = u >> 1,
      f = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = i ? 0 : n - 1,
      d = i ? 1 : -1,
      g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
    for (
      e = Math.abs(e),
        isNaN(e) || e === 1 / 0
          ? ((h = isNaN(e) ? 1 : 0), (o = u))
          : ((o = Math.floor(Math.log(e) / Math.LN2)),
            e * (a = Math.pow(2, -o)) < 1 && (o--, (a *= 2)),
            (e += o + l >= 1 ? f / a : f * Math.pow(2, 1 - l)) * a >= 2 &&
              (o++, (a /= 2)),
            o + l >= u
              ? ((h = 0), (o = u))
              : o + l >= 1
              ? ((h = (e * a - 1) * Math.pow(2, s)), (o += l))
              : ((h = e * Math.pow(2, l - 1) * Math.pow(2, s)), (o = 0)));
      s >= 8;
      t[r + p] = 255 & h, p += d, h /= 256, s -= 8
    );
    for (
      o = (o << s) | h, c += s;
      c > 0;
      t[r + p] = 255 & o, p += d, o /= 256, c -= 8
    );
    t[r + p - d] |= 128 * g;
  });
const _t =
  "function" == typeof Symbol && "function" == typeof Symbol.for
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
function St(t) {
  if (t > 2147483647)
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
  const e = new Uint8Array(t);
  return Object.setPrototypeOf(e, Ot.prototype), e;
}
function Ot(t, e, r) {
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      );
    return It(t);
  }
  return Lt(t, e, r);
}
function Lt(t, e, r) {
  if ("string" == typeof t)
    return (function (t, e) {
      ("string" == typeof e && "" !== e) || (e = "utf8");
      if (!Ot.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
      const r = 0 | jt(t, e);
      let i = St(r);
      const s = i.write(t, e);
      s !== r && (i = i.slice(0, s));
      return i;
    })(t, e);
  if (ArrayBuffer.isView(t))
    return (function (t) {
      if (ye(t, Uint8Array)) {
        const e = new Uint8Array(t);
        return Nt(e.buffer, e.byteOffset, e.byteLength);
      }
      return Pt(t);
    })(t);
  if (null == t)
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof t
    );
  if (ye(t, ArrayBuffer) || (t && ye(t.buffer, ArrayBuffer)))
    return Nt(t, e, r);
  if (
    "undefined" != typeof SharedArrayBuffer &&
    (ye(t, SharedArrayBuffer) || (t && ye(t.buffer, SharedArrayBuffer)))
  )
    return Nt(t, e, r);
  if ("number" == typeof t)
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    );
  const i = t.valueOf && t.valueOf();
  if (null != i && i !== t) return Ot.from(i, e, r);
  const s = (function (t) {
    if (Ot.isBuffer(t)) {
      const e = 0 | Ut(t.length),
        r = St(e);
      return 0 === r.length || t.copy(r, 0, 0, e), r;
    }
    if (void 0 !== t.length)
      return "number" != typeof t.length || me(t.length) ? St(0) : Pt(t);
    if ("Buffer" === t.type && Array.isArray(t.data)) return Pt(t.data);
  })(t);
  if (s) return s;
  if (
    "undefined" != typeof Symbol &&
    null != Symbol.toPrimitive &&
    "function" == typeof t[Symbol.toPrimitive]
  )
    return Ot.from(t[Symbol.toPrimitive]("string"), e, r);
  throw new TypeError(
    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
      typeof t
  );
}
function Ct(t) {
  if ("number" != typeof t)
    throw new TypeError('"size" argument must be of type number');
  if (t < 0)
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
}
function It(t) {
  return Ct(t), St(t < 0 ? 0 : 0 | Ut(t));
}
function Pt(t) {
  const e = t.length < 0 ? 0 : 0 | Ut(t.length),
    r = St(e);
  for (let i = 0; i < e; i += 1) r[i] = 255 & t[i];
  return r;
}
function Nt(t, e, r) {
  if (e < 0 || t.byteLength < e)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < e + (r || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let i;
  return (
    (i =
      void 0 === e && void 0 === r
        ? new Uint8Array(t)
        : void 0 === r
        ? new Uint8Array(t, e)
        : new Uint8Array(t, e, r)),
    Object.setPrototypeOf(i, Ot.prototype),
    i
  );
}
function Ut(t) {
  if (t >= 2147483647)
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        (2147483647).toString(16) +
        " bytes"
    );
  return 0 | t;
}
function jt(t, e) {
  if (Ot.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || ye(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t)
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
        typeof t
    );
  const r = t.length,
    i = arguments.length > 2 && !0 === arguments[2];
  if (!i && 0 === r) return 0;
  let s = !1;
  for (;;)
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
        return pe(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r;
      case "hex":
        return r >>> 1;
      case "base64":
        return de(t).length;
      default:
        if (s) return i ? -1 : pe(t).length;
        (e = ("" + e).toLowerCase()), (s = !0);
    }
}
function Ft(t, e, r) {
  let i = !1;
  if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
    return "";
  if ((r >>>= 0) <= (e >>>= 0)) return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return Kt(this, e, r);
      case "utf8":
      case "utf-8":
        return Vt(this, e, r);
      case "ascii":
        return Qt(this, e, r);
      case "latin1":
      case "binary":
        return Xt(this, e, r);
      case "base64":
        return Yt(this, e, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Jt(this, e, r);
      default:
        if (i) throw new TypeError("Unknown encoding: " + t);
        (t = (t + "").toLowerCase()), (i = !0);
    }
}
function Dt(t, e, r) {
  const i = t[e];
  (t[e] = t[r]), (t[r] = i);
}
function Mt(t, e, r, i, s) {
  if (0 === t.length) return -1;
  if (
    ("string" == typeof r
      ? ((i = r), (r = 0))
      : r > 2147483647
      ? (r = 2147483647)
      : r < -2147483648 && (r = -2147483648),
    me((r = +r)) && (r = s ? 0 : t.length - 1),
    r < 0 && (r = t.length + r),
    r >= t.length)
  ) {
    if (s) return -1;
    r = t.length - 1;
  } else if (r < 0) {
    if (!s) return -1;
    r = 0;
  }
  if (("string" == typeof e && (e = Ot.from(e, i)), Ot.isBuffer(e)))
    return 0 === e.length ? -1 : qt(t, e, r, i, s);
  if ("number" == typeof e)
    return (
      (e &= 255),
      "function" == typeof Uint8Array.prototype.indexOf
        ? s
          ? Uint8Array.prototype.indexOf.call(t, e, r)
          : Uint8Array.prototype.lastIndexOf.call(t, e, r)
        : qt(t, [e], r, i, s)
    );
  throw new TypeError("val must be string, number or Buffer");
}
function qt(t, e, r, i, s) {
  let n,
    o = 1,
    h = t.length,
    a = e.length;
  if (
    void 0 !== i &&
    ("ucs2" === (i = String(i).toLowerCase()) ||
      "ucs-2" === i ||
      "utf16le" === i ||
      "utf-16le" === i)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (o = 2), (h /= 2), (a /= 2), (r /= 2);
  }
  function c(t, e) {
    return 1 === o ? t[e] : t.readUInt16BE(e * o);
  }
  if (s) {
    let i = -1;
    for (n = r; n < h; n++)
      if (c(t, n) === c(e, -1 === i ? 0 : n - i)) {
        if ((-1 === i && (i = n), n - i + 1 === a)) return i * o;
      } else -1 !== i && (n -= n - i), (i = -1);
  } else
    for (r + a > h && (r = h - a), n = r; n >= 0; n--) {
      let r = !0;
      for (let i = 0; i < a; i++)
        if (c(t, n + i) !== c(e, i)) {
          r = !1;
          break;
        }
      if (r) return n;
    }
  return -1;
}
function Ht(t, e, r, i) {
  r = Number(r) || 0;
  const s = t.length - r;
  i ? (i = Number(i)) > s && (i = s) : (i = s);
  const n = e.length;
  let o;
  for (i > n / 2 && (i = n / 2), o = 0; o < i; ++o) {
    const i = parseInt(e.substr(2 * o, 2), 16);
    if (me(i)) return o;
    t[r + o] = i;
  }
  return o;
}
function $t(t, e, r, i) {
  return ge(pe(e, t.length - r), t, r, i);
}
function zt(t, e, r, i) {
  return ge(
    (function (t) {
      const e = [];
      for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
      return e;
    })(e),
    t,
    r,
    i
  );
}
function Gt(t, e, r, i) {
  return ge(de(e), t, r, i);
}
function Wt(t, e, r, i) {
  return ge(
    (function (t, e) {
      let r, i, s;
      const n = [];
      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
        (r = t.charCodeAt(o)),
          (i = r >> 8),
          (s = r % 256),
          n.push(s),
          n.push(i);
      return n;
    })(e, t.length - r),
    t,
    r,
    i
  );
}
function Yt(t, e, r) {
  return 0 === e && r === t.length ? mt(t) : mt(t.slice(e, r));
}
function Vt(t, e, r) {
  r = Math.min(t.length, r);
  const i = [];
  let s = e;
  for (; s < r; ) {
    const e = t[s];
    let n = null,
      o = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
    if (s + o <= r) {
      let r, i, h, a;
      switch (o) {
        case 1:
          e < 128 && (n = e);
          break;
        case 2:
          (r = t[s + 1]),
            128 == (192 & r) &&
              ((a = ((31 & e) << 6) | (63 & r)), a > 127 && (n = a));
          break;
        case 3:
          (r = t[s + 1]),
            (i = t[s + 2]),
            128 == (192 & r) &&
              128 == (192 & i) &&
              ((a = ((15 & e) << 12) | ((63 & r) << 6) | (63 & i)),
              a > 2047 && (a < 55296 || a > 57343) && (n = a));
          break;
        case 4:
          (r = t[s + 1]),
            (i = t[s + 2]),
            (h = t[s + 3]),
            128 == (192 & r) &&
              128 == (192 & i) &&
              128 == (192 & h) &&
              ((a =
                ((15 & e) << 18) |
                ((63 & r) << 12) |
                ((63 & i) << 6) |
                (63 & h)),
              a > 65535 && a < 1114112 && (n = a));
      }
    }
    null === n
      ? ((n = 65533), (o = 1))
      : n > 65535 &&
        ((n -= 65536),
        i.push(((n >>> 10) & 1023) | 55296),
        (n = 56320 | (1023 & n))),
      i.push(n),
      (s += o);
  }
  return (function (t) {
    const e = t.length;
    if (e <= 4096) return String.fromCharCode.apply(String, t);
    let r = "",
      i = 0;
    for (; i < e; )
      r += String.fromCharCode.apply(String, t.slice(i, (i += 4096)));
    return r;
  })(i);
}
(Ot.TYPED_ARRAY_SUPPORT = (function () {
  try {
    const t = new Uint8Array(1),
      e = {
        foo: function () {
          return 42;
        },
      };
    return (
      Object.setPrototypeOf(e, Uint8Array.prototype),
      Object.setPrototypeOf(t, e),
      42 === t.foo()
    );
  } catch (t) {
    return !1;
  }
})()),
  Ot.TYPED_ARRAY_SUPPORT ||
    "undefined" == typeof console ||
    "function" != typeof console.error ||
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    ),
  Object.defineProperty(Ot.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (Ot.isBuffer(this)) return this.buffer;
    },
  }),
  Object.defineProperty(Ot.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (Ot.isBuffer(this)) return this.byteOffset;
    },
  }),
  (Ot.poolSize = 8192),
  (Ot.from = function (t, e, r) {
    return Lt(t, e, r);
  }),
  Object.setPrototypeOf(Ot.prototype, Uint8Array.prototype),
  Object.setPrototypeOf(Ot, Uint8Array),
  (Ot.alloc = function (t, e, r) {
    return (function (t, e, r) {
      return (
        Ct(t),
        t <= 0
          ? St(t)
          : void 0 !== e
          ? "string" == typeof r
            ? St(t).fill(e, r)
            : St(t).fill(e)
          : St(t)
      );
    })(t, e, r);
  }),
  (Ot.allocUnsafe = function (t) {
    return It(t);
  }),
  (Ot.allocUnsafeSlow = function (t) {
    return It(t);
  }),
  (Ot.isBuffer = function (t) {
    return null != t && !0 === t._isBuffer && t !== Ot.prototype;
  }),
  (Ot.compare = function (t, e) {
    if (
      (ye(t, Uint8Array) && (t = Ot.from(t, t.offset, t.byteLength)),
      ye(e, Uint8Array) && (e = Ot.from(e, e.offset, e.byteLength)),
      !Ot.isBuffer(t) || !Ot.isBuffer(e))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let r = t.length,
      i = e.length;
    for (let s = 0, n = Math.min(r, i); s < n; ++s)
      if (t[s] !== e[s]) {
        (r = t[s]), (i = e[s]);
        break;
      }
    return r < i ? -1 : i < r ? 1 : 0;
  }),
  (Ot.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (Ot.concat = function (t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return Ot.alloc(0);
    let r;
    if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
    const i = Ot.allocUnsafe(e);
    let s = 0;
    for (r = 0; r < t.length; ++r) {
      let e = t[r];
      if (ye(e, Uint8Array))
        s + e.length > i.length
          ? (Ot.isBuffer(e) || (e = Ot.from(e)), e.copy(i, s))
          : Uint8Array.prototype.set.call(i, e, s);
      else {
        if (!Ot.isBuffer(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        e.copy(i, s);
      }
      s += e.length;
    }
    return i;
  }),
  (Ot.byteLength = jt),
  (Ot.prototype._isBuffer = !0),
  (Ot.prototype.swap16 = function () {
    const t = this.length;
    if (t % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) Dt(this, e, e + 1);
    return this;
  }),
  (Ot.prototype.swap32 = function () {
    const t = this.length;
    if (t % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) Dt(this, e, e + 3), Dt(this, e + 1, e + 2);
    return this;
  }),
  (Ot.prototype.swap64 = function () {
    const t = this.length;
    if (t % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      Dt(this, e, e + 7),
        Dt(this, e + 1, e + 6),
        Dt(this, e + 2, e + 5),
        Dt(this, e + 3, e + 4);
    return this;
  }),
  (Ot.prototype.toString = function () {
    const t = this.length;
    return 0 === t
      ? ""
      : 0 === arguments.length
      ? Vt(this, 0, t)
      : Ft.apply(this, arguments);
  }),
  (Ot.prototype.toLocaleString = Ot.prototype.toString),
  (Ot.prototype.equals = function (t) {
    if (!Ot.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === Ot.compare(this, t);
  }),
  (Ot.prototype.inspect = function () {
    let t = "";
    return (
      (t = this.toString("hex", 0, 50)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > 50 && (t += " ... "),
      "<Buffer " + t + ">"
    );
  }),
  _t && (Ot.prototype[_t] = Ot.prototype.inspect),
  (Ot.prototype.compare = function (t, e, r, i, s) {
    if (
      (ye(t, Uint8Array) && (t = Ot.from(t, t.offset, t.byteLength)),
      !Ot.isBuffer(t))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (void 0 === e && (e = 0),
      void 0 === r && (r = t ? t.length : 0),
      void 0 === i && (i = 0),
      void 0 === s && (s = this.length),
      e < 0 || r > t.length || i < 0 || s > this.length)
    )
      throw new RangeError("out of range index");
    if (i >= s && e >= r) return 0;
    if (i >= s) return -1;
    if (e >= r) return 1;
    if (this === t) return 0;
    let n = (s >>>= 0) - (i >>>= 0),
      o = (r >>>= 0) - (e >>>= 0);
    const h = Math.min(n, o),
      a = this.slice(i, s),
      c = t.slice(e, r);
    for (let t = 0; t < h; ++t)
      if (a[t] !== c[t]) {
        (n = a[t]), (o = c[t]);
        break;
      }
    return n < o ? -1 : o < n ? 1 : 0;
  }),
  (Ot.prototype.includes = function (t, e, r) {
    return -1 !== this.indexOf(t, e, r);
  }),
  (Ot.prototype.indexOf = function (t, e, r) {
    return Mt(this, t, e, r, !0);
  }),
  (Ot.prototype.lastIndexOf = function (t, e, r) {
    return Mt(this, t, e, r, !1);
  }),
  (Ot.prototype.write = function (t, e, r, i) {
    if (void 0 === e) (i = "utf8"), (r = this.length), (e = 0);
    else if (void 0 === r && "string" == typeof e)
      (i = e), (r = this.length), (e = 0);
    else {
      if (!isFinite(e))
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      (e >>>= 0),
        isFinite(r)
          ? ((r >>>= 0), void 0 === i && (i = "utf8"))
          : ((i = r), (r = void 0));
    }
    const s = this.length - e;
    if (
      ((void 0 === r || r > s) && (r = s),
      (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let n = !1;
    for (;;)
      switch (i) {
        case "hex":
          return Ht(this, t, e, r);
        case "utf8":
        case "utf-8":
          return $t(this, t, e, r);
        case "ascii":
        case "latin1":
        case "binary":
          return zt(this, t, e, r);
        case "base64":
          return Gt(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Wt(this, t, e, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (n = !0);
      }
  }),
  (Ot.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  });
function Qt(t, e, r) {
  let i = "";
  r = Math.min(t.length, r);
  for (let s = e; s < r; ++s) i += String.fromCharCode(127 & t[s]);
  return i;
}
function Xt(t, e, r) {
  let i = "";
  r = Math.min(t.length, r);
  for (let s = e; s < r; ++s) i += String.fromCharCode(t[s]);
  return i;
}
function Kt(t, e, r) {
  const i = t.length;
  (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
  let s = "";
  for (let i = e; i < r; ++i) s += be[t[i]];
  return s;
}
function Jt(t, e, r) {
  const i = t.slice(e, r);
  let s = "";
  for (let t = 0; t < i.length - 1; t += 2)
    s += String.fromCharCode(i[t] + 256 * i[t + 1]);
  return s;
}
function Zt(t, e, r) {
  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
}
function te(t, e, r, i, s, n) {
  if (!Ot.isBuffer(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > s || e < n) throw new RangeError('"value" argument is out of bounds');
  if (r + i > t.length) throw new RangeError("Index out of range");
}
function ee(t, e, r, i, s) {
  ce(e, i, s, t, r, 7);
  let n = Number(e & BigInt(4294967295));
  (t[r++] = n),
    (n >>= 8),
    (t[r++] = n),
    (n >>= 8),
    (t[r++] = n),
    (n >>= 8),
    (t[r++] = n);
  let o = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    r
  );
}
function re(t, e, r, i, s) {
  ce(e, i, s, t, r, 7);
  let n = Number(e & BigInt(4294967295));
  (t[r + 7] = n),
    (n >>= 8),
    (t[r + 6] = n),
    (n >>= 8),
    (t[r + 5] = n),
    (n >>= 8),
    (t[r + 4] = n);
  let o = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[r + 3] = o),
    (o >>= 8),
    (t[r + 2] = o),
    (o >>= 8),
    (t[r + 1] = o),
    (o >>= 8),
    (t[r] = o),
    r + 8
  );
}
function ie(t, e, r, i, s, n) {
  if (r + i > t.length) throw new RangeError("Index out of range");
  if (r < 0) throw new RangeError("Index out of range");
}
function se(t, e, r, i, s) {
  return (
    (e = +e), (r >>>= 0), s || ie(t, 0, r, 4), wt(t, e, r, i, 23, 4), r + 4
  );
}
function ne(t, e, r, i, s) {
  return (
    (e = +e), (r >>>= 0), s || ie(t, 0, r, 8), wt(t, e, r, i, 52, 8), r + 8
  );
}
(Ot.prototype.slice = function (t, e) {
  const r = this.length;
  (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
    (e = void 0 === e ? r : ~~e) < 0
      ? (e += r) < 0 && (e = 0)
      : e > r && (e = r),
    e < t && (e = t);
  const i = this.subarray(t, e);
  return Object.setPrototypeOf(i, Ot.prototype), i;
}),
  (Ot.prototype.readUintLE = Ot.prototype.readUIntLE =
    function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || Zt(t, e, this.length);
      let i = this[t],
        s = 1,
        n = 0;
      for (; ++n < e && (s *= 256); ) i += this[t + n] * s;
      return i;
    }),
  (Ot.prototype.readUintBE = Ot.prototype.readUIntBE =
    function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || Zt(t, e, this.length);
      let i = this[t + --e],
        s = 1;
      for (; e > 0 && (s *= 256); ) i += this[t + --e] * s;
      return i;
    }),
  (Ot.prototype.readUint8 = Ot.prototype.readUInt8 =
    function (t, e) {
      return (t >>>= 0), e || Zt(t, 1, this.length), this[t];
    }),
  (Ot.prototype.readUint16LE = Ot.prototype.readUInt16LE =
    function (t, e) {
      return (
        (t >>>= 0), e || Zt(t, 2, this.length), this[t] | (this[t + 1] << 8)
      );
    }),
  (Ot.prototype.readUint16BE = Ot.prototype.readUInt16BE =
    function (t, e) {
      return (
        (t >>>= 0), e || Zt(t, 2, this.length), (this[t] << 8) | this[t + 1]
      );
    }),
  (Ot.prototype.readUint32LE = Ot.prototype.readUInt32LE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || Zt(t, 4, this.length),
        (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
          16777216 * this[t + 3]
      );
    }),
  (Ot.prototype.readUint32BE = Ot.prototype.readUInt32BE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || Zt(t, 4, this.length),
        16777216 * this[t] +
          ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
      );
    }),
  (Ot.prototype.readBigUInt64LE = we(function (t) {
    ue((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || le(t, this.length - 8);
    const i = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
      s = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
    return BigInt(i) + (BigInt(s) << BigInt(32));
  })),
  (Ot.prototype.readBigUInt64BE = we(function (t) {
    ue((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || le(t, this.length - 8);
    const i = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
      s = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
    return (BigInt(i) << BigInt(32)) + BigInt(s);
  })),
  (Ot.prototype.readIntLE = function (t, e, r) {
    (t >>>= 0), (e >>>= 0), r || Zt(t, e, this.length);
    let i = this[t],
      s = 1,
      n = 0;
    for (; ++n < e && (s *= 256); ) i += this[t + n] * s;
    return (s *= 128), i >= s && (i -= Math.pow(2, 8 * e)), i;
  }),
  (Ot.prototype.readIntBE = function (t, e, r) {
    (t >>>= 0), (e >>>= 0), r || Zt(t, e, this.length);
    let i = e,
      s = 1,
      n = this[t + --i];
    for (; i > 0 && (s *= 256); ) n += this[t + --i] * s;
    return (s *= 128), n >= s && (n -= Math.pow(2, 8 * e)), n;
  }),
  (Ot.prototype.readInt8 = function (t, e) {
    return (
      (t >>>= 0),
      e || Zt(t, 1, this.length),
      128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    );
  }),
  (Ot.prototype.readInt16LE = function (t, e) {
    (t >>>= 0), e || Zt(t, 2, this.length);
    const r = this[t] | (this[t + 1] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (Ot.prototype.readInt16BE = function (t, e) {
    (t >>>= 0), e || Zt(t, 2, this.length);
    const r = this[t + 1] | (this[t] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (Ot.prototype.readInt32LE = function (t, e) {
    return (
      (t >>>= 0),
      e || Zt(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (Ot.prototype.readInt32BE = function (t, e) {
    return (
      (t >>>= 0),
      e || Zt(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (Ot.prototype.readBigInt64LE = we(function (t) {
    ue((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || le(t, this.length - 8);
    const i = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
    );
  })),
  (Ot.prototype.readBigInt64BE = we(function (t) {
    ue((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || le(t, this.length - 8);
    const i = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
    );
  })),
  (Ot.prototype.readFloatLE = function (t, e) {
    return (t >>>= 0), e || Zt(t, 4, this.length), bt(this, t, !0, 23, 4);
  }),
  (Ot.prototype.readFloatBE = function (t, e) {
    return (t >>>= 0), e || Zt(t, 4, this.length), bt(this, t, !1, 23, 4);
  }),
  (Ot.prototype.readDoubleLE = function (t, e) {
    return (t >>>= 0), e || Zt(t, 8, this.length), bt(this, t, !0, 52, 8);
  }),
  (Ot.prototype.readDoubleBE = function (t, e) {
    return (t >>>= 0), e || Zt(t, 8, this.length), bt(this, t, !1, 52, 8);
  }),
  (Ot.prototype.writeUintLE = Ot.prototype.writeUIntLE =
    function (t, e, r, i) {
      if (((t = +t), (e >>>= 0), (r >>>= 0), !i)) {
        te(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      }
      let s = 1,
        n = 0;
      for (this[e] = 255 & t; ++n < r && (s *= 256); )
        this[e + n] = (t / s) & 255;
      return e + r;
    }),
  (Ot.prototype.writeUintBE = Ot.prototype.writeUIntBE =
    function (t, e, r, i) {
      if (((t = +t), (e >>>= 0), (r >>>= 0), !i)) {
        te(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      }
      let s = r - 1,
        n = 1;
      for (this[e + s] = 255 & t; --s >= 0 && (n *= 256); )
        this[e + s] = (t / n) & 255;
      return e + r;
    }),
  (Ot.prototype.writeUint8 = Ot.prototype.writeUInt8 =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || te(this, t, e, 1, 255, 0),
        (this[e] = 255 & t),
        e + 1
      );
    }),
  (Ot.prototype.writeUint16LE = Ot.prototype.writeUInt16LE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || te(this, t, e, 2, 65535, 0),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        e + 2
      );
    }),
  (Ot.prototype.writeUint16BE = Ot.prototype.writeUInt16BE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || te(this, t, e, 2, 65535, 0),
        (this[e] = t >>> 8),
        (this[e + 1] = 255 & t),
        e + 2
      );
    }),
  (Ot.prototype.writeUint32LE = Ot.prototype.writeUInt32LE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || te(this, t, e, 4, 4294967295, 0),
        (this[e + 3] = t >>> 24),
        (this[e + 2] = t >>> 16),
        (this[e + 1] = t >>> 8),
        (this[e] = 255 & t),
        e + 4
      );
    }),
  (Ot.prototype.writeUint32BE = Ot.prototype.writeUInt32BE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || te(this, t, e, 4, 4294967295, 0),
        (this[e] = t >>> 24),
        (this[e + 1] = t >>> 16),
        (this[e + 2] = t >>> 8),
        (this[e + 3] = 255 & t),
        e + 4
      );
    }),
  (Ot.prototype.writeBigUInt64LE = we(function (t, e = 0) {
    return ee(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Ot.prototype.writeBigUInt64BE = we(function (t, e = 0) {
    return re(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Ot.prototype.writeIntLE = function (t, e, r, i) {
    if (((t = +t), (e >>>= 0), !i)) {
      const i = Math.pow(2, 8 * r - 1);
      te(this, t, e, r, i - 1, -i);
    }
    let s = 0,
      n = 1,
      o = 0;
    for (this[e] = 255 & t; ++s < r && (n *= 256); )
      t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
        (this[e + s] = (((t / n) >> 0) - o) & 255);
    return e + r;
  }),
  (Ot.prototype.writeIntBE = function (t, e, r, i) {
    if (((t = +t), (e >>>= 0), !i)) {
      const i = Math.pow(2, 8 * r - 1);
      te(this, t, e, r, i - 1, -i);
    }
    let s = r - 1,
      n = 1,
      o = 0;
    for (this[e + s] = 255 & t; --s >= 0 && (n *= 256); )
      t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
        (this[e + s] = (((t / n) >> 0) - o) & 255);
    return e + r;
  }),
  (Ot.prototype.writeInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || te(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (Ot.prototype.writeInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || te(this, t, e, 2, 32767, -32768),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  }),
  (Ot.prototype.writeInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || te(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = 255 & t),
      e + 2
    );
  }),
  (Ot.prototype.writeInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || te(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  }),
  (Ot.prototype.writeInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || te(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = 255 & t),
      e + 4
    );
  }),
  (Ot.prototype.writeBigInt64LE = we(function (t, e = 0) {
    return ee(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (Ot.prototype.writeBigInt64BE = we(function (t, e = 0) {
    return re(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (Ot.prototype.writeFloatLE = function (t, e, r) {
    return se(this, t, e, !0, r);
  }),
  (Ot.prototype.writeFloatBE = function (t, e, r) {
    return se(this, t, e, !1, r);
  }),
  (Ot.prototype.writeDoubleLE = function (t, e, r) {
    return ne(this, t, e, !0, r);
  }),
  (Ot.prototype.writeDoubleBE = function (t, e, r) {
    return ne(this, t, e, !1, r);
  }),
  (Ot.prototype.copy = function (t, e, r, i) {
    if (!Ot.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      i || 0 === i || (i = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      i > 0 && i < r && (i = r),
      i === r)
    )
      return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      t.length - e < i - r && (i = t.length - e + r);
    const s = i - r;
    return (
      this === t && "function" == typeof Uint8Array.prototype.copyWithin
        ? this.copyWithin(e, r, i)
        : Uint8Array.prototype.set.call(t, this.subarray(r, i), e),
      s
    );
  }),
  (Ot.prototype.fill = function (t, e, r, i) {
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((i = e), (e = 0), (r = this.length))
          : "string" == typeof r && ((i = r), (r = this.length)),
        void 0 !== i && "string" != typeof i)
      )
        throw new TypeError("encoding must be a string");
      if ("string" == typeof i && !Ot.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (1 === t.length) {
        const e = t.charCodeAt(0);
        (("utf8" === i && e < 128) || "latin1" === i) && (t = e);
      }
    } else
      "number" == typeof t
        ? (t &= 255)
        : "boolean" == typeof t && (t = Number(t));
    if (e < 0 || this.length < e || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= e) return this;
    let s;
    if (
      ((e >>>= 0),
      (r = void 0 === r ? this.length : r >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (s = e; s < r; ++s) this[s] = t;
    else {
      const n = Ot.isBuffer(t) ? t : Ot.from(t, i),
        o = n.length;
      if (0 === o)
        throw new TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (s = 0; s < r - e; ++s) this[s + e] = n[s % o];
    }
    return this;
  });
const oe = {};
function he(t, e, r) {
  oe[t] = class extends r {
    constructor() {
      super(),
        Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0,
        }),
        (this.name = `${this.name} [${t}]`),
        this.stack,
        delete this.name;
    }
    get code() {
      return t;
    }
    set code(t) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      });
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  };
}
function ae(t) {
  let e = "",
    r = t.length;
  const i = "-" === t[0] ? 1 : 0;
  for (; r >= i + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
  return `${t.slice(0, r)}${e}`;
}
function ce(t, e, r, i, s, n) {
  if (t > r || t < e) {
    const i = "bigint" == typeof e ? "n" : "";
    let s;
    throw (
      ((s =
        n > 3
          ? 0 === e || e === BigInt(0)
            ? `>= 0${i} and < 2${i} ** ${8 * (n + 1)}${i}`
            : `>= -(2${i} ** ${8 * (n + 1) - 1}${i}) and < 2 ** ${
                8 * (n + 1) - 1
              }${i}`
          : `>= ${e}${i} and <= ${r}${i}`),
      new oe.ERR_OUT_OF_RANGE("value", s, t))
    );
  }
  !(function (t, e, r) {
    ue(e, "offset"),
      (void 0 !== t[e] && void 0 !== t[e + r]) || le(e, t.length - (r + 1));
  })(i, s, n);
}
function ue(t, e) {
  if ("number" != typeof t) throw new oe.ERR_INVALID_ARG_TYPE(e, "number", t);
}
function le(t, e, r) {
  if (Math.floor(t) !== t)
    throw (ue(t, r), new oe.ERR_OUT_OF_RANGE(r || "offset", "an integer", t));
  if (e < 0) throw new oe.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new oe.ERR_OUT_OF_RANGE(
    r || "offset",
    `>= ${r ? 1 : 0} and <= ${e}`,
    t
  );
}
he(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (t) {
    return t
      ? `${t} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  },
  RangeError
),
  he(
    "ERR_INVALID_ARG_TYPE",
    function (t, e) {
      return `The "${t}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ),
  he(
    "ERR_OUT_OF_RANGE",
    function (t, e, r) {
      let i = `The value of "${t}" is out of range.`,
        s = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (s = ae(String(r)))
          : "bigint" == typeof r &&
            ((s = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (s = ae(s)),
            (s += "n")),
        (i += ` It must be ${e}. Received ${s}`),
        i
      );
    },
    RangeError
  );
const fe = /[^+/0-9A-Za-z-_]/g;
function pe(t, e) {
  let r;
  e = e || 1 / 0;
  const i = t.length;
  let s = null;
  const n = [];
  for (let o = 0; o < i; ++o) {
    if (((r = t.charCodeAt(o)), r > 55295 && r < 57344)) {
      if (!s) {
        if (r > 56319) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        }
        if (o + 1 === i) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        }
        s = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && n.push(239, 191, 189), (s = r);
        continue;
      }
      r = 65536 + (((s - 55296) << 10) | (r - 56320));
    } else s && (e -= 3) > -1 && n.push(239, 191, 189);
    if (((s = null), r < 128)) {
      if ((e -= 1) < 0) break;
      n.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0) break;
      n.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0) break;
      n.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else {
      if (!(r < 1114112)) throw new Error("Invalid code point");
      if ((e -= 4) < 0) break;
      n.push(
        (r >> 18) | 240,
        ((r >> 12) & 63) | 128,
        ((r >> 6) & 63) | 128,
        (63 & r) | 128
      );
    }
  }
  return n;
}
function de(t) {
  return yt(
    (function (t) {
      if ((t = (t = t.split("=")[0]).trim().replace(fe, "")).length < 2)
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t)
  );
}
function ge(t, e, r, i) {
  let s;
  for (s = 0; s < i && !(s + r >= e.length || s >= t.length); ++s)
    e[s + r] = t[s];
  return s;
}
function ye(t, e) {
  return (
    t instanceof e ||
    (null != t &&
      null != t.constructor &&
      null != t.constructor.name &&
      t.constructor.name === e.name)
  );
}
function me(t) {
  return t != t;
}
const be = (function () {
  const t = "0123456789abcdef",
    e = new Array(256);
  for (let r = 0; r < 16; ++r) {
    const i = 16 * r;
    for (let s = 0; s < 16; ++s) e[i + s] = t[r] + t[s];
  }
  return e;
})();
function we(t) {
  return "undefined" == typeof BigInt ? ve : t;
}
function ve() {
  throw new Error("BigInt not supported");
}
const Ee =
  "undefined" != typeof navigator &&
  "string" == typeof navigator.product &&
  "reactnative" === navigator.product.toLowerCase();
const Re = {
    websocket: class extends J {
      constructor(t) {
        super(t), (this.supportsBinary = !t.forceBase64);
      }
      get name() {
        return "websocket";
      }
      doOpen() {
        if (!this.check()) return;
        const t = this.uri(),
          e = this.opts.protocols,
          r = Ee
            ? {}
            : Y(
                this.opts,
                "agent",
                "perMessageDeflate",
                "pfx",
                "key",
                "passphrase",
                "cert",
                "ca",
                "ciphers",
                "rejectUnauthorized",
                "localAddress",
                "protocolVersion",
                "origin",
                "maxPayload",
                "family",
                "checkServerIdentity"
              );
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
          this.ws = Ee ? new gt(t, e, r) : e ? new gt(t, e) : new gt(t);
        } catch (t) {
          return this.emitReserved("error", t);
        }
        (this.ws.binaryType = this.socket.binaryType || "arraybuffer"),
          this.addEventListeners();
      }
      addEventListeners() {
        (this.ws.onopen = () => {
          this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
          (this.ws.onclose = (t) =>
            this.onClose({
              description: "websocket connection closed",
              context: t,
            })),
          (this.ws.onmessage = (t) => this.onData(t.data)),
          (this.ws.onerror = (t) => this.onError("websocket error", t));
      }
      write(t) {
        this.writable = !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e],
            i = e === t.length - 1;
          j(r, this.supportsBinary, (t) => {
            try {
              this.ws.send(t);
            } catch (t) {}
            i &&
              dt(() => {
                (this.writable = !0), this.emitReserved("drain");
              }, this.setTimeoutFn);
          });
        }
      }
      doClose() {
        void 0 !== this.ws && (this.ws.close(), (this.ws = null));
      }
      uri() {
        let t = this.query || {};
        const e = this.opts.secure ? "wss" : "ws";
        let r = "";
        this.opts.port &&
          (("wss" === e && 443 !== Number(this.opts.port)) ||
            ("ws" === e && 80 !== Number(this.opts.port))) &&
          (r = ":" + this.opts.port),
          this.opts.timestampRequests && (t[this.opts.timestampParam] = nt()),
          this.supportsBinary || (t.b64 = 1);
        const i = ot(t);
        return (
          e +
          "://" +
          (-1 !== this.opts.hostname.indexOf(":")
            ? "[" + this.opts.hostname + "]"
            : this.opts.hostname) +
          r +
          this.opts.path +
          (i.length ? "?" + i : "")
        );
      }
      check() {
        return !!gt;
      }
    },
    polling: class extends J {
      constructor(t) {
        if ((super(t), (this.polling = !1), "undefined" != typeof location)) {
          const e = "https:" === location.protocol;
          let r = location.port;
          r || (r = e ? "443" : "80"),
            (this.xd =
              ("undefined" != typeof location &&
                t.hostname !== location.hostname) ||
              r !== t.port),
            (this.xs = t.secure !== e);
        }
        const e = t && t.forceBase64;
        this.supportsBinary = lt && !e;
      }
      get name() {
        return "polling";
      }
      doOpen() {
        this.poll();
      }
      pause(t) {
        this.readyState = "pausing";
        const e = () => {
          (this.readyState = "paused"), t();
        };
        if (this.polling || !this.writable) {
          let t = 0;
          this.polling &&
            (t++,
            this.once("pollComplete", function () {
              --t || e();
            })),
            this.writable ||
              (t++,
              this.once("drain", function () {
                --t || e();
              }));
        } else e();
      }
      poll() {
        (this.polling = !0), this.doPoll(), this.emitReserved("poll");
      }
      onData(t) {
        ((t, e) => {
          const r = t.split(z),
            i = [];
          for (let t = 0; t < r.length; t++) {
            const s = $(r[t], e);
            if ((i.push(s), "error" === s.type)) break;
          }
          return i;
        })(t, this.socket.binaryType).forEach((t) => {
          if (
            ("opening" === this.readyState &&
              "open" === t.type &&
              this.onOpen(),
            "close" === t.type)
          )
            return (
              this.onClose({ description: "transport closed by the server" }),
              !1
            );
          this.onPacket(t);
        }),
          "closed" !== this.readyState &&
            ((this.polling = !1),
            this.emitReserved("pollComplete"),
            "open" === this.readyState && this.poll());
      }
      doClose() {
        const t = () => {
          this.write([{ type: "close" }]);
        };
        "open" === this.readyState ? t() : this.once("open", t);
      }
      write(t) {
        (this.writable = !1),
          ((t, e) => {
            const r = t.length,
              i = new Array(r);
            let s = 0;
            t.forEach((t, n) => {
              j(t, !1, (t) => {
                (i[n] = t), ++s === r && e(i.join(z));
              });
            });
          })(t, (t) => {
            this.doWrite(t, () => {
              (this.writable = !0), this.emitReserved("drain");
            });
          });
      }
      uri() {
        let t = this.query || {};
        const e = this.opts.secure ? "https" : "http";
        let r = "";
        !1 !== this.opts.timestampRequests &&
          (t[this.opts.timestampParam] = nt()),
          this.supportsBinary || t.sid || (t.b64 = 1),
          this.opts.port &&
            (("https" === e && 443 !== Number(this.opts.port)) ||
              ("http" === e && 80 !== Number(this.opts.port))) &&
            (r = ":" + this.opts.port);
        const i = ot(t);
        return (
          e +
          "://" +
          (-1 !== this.opts.hostname.indexOf(":")
            ? "[" + this.opts.hostname + "]"
            : this.opts.hostname) +
          r +
          this.opts.path +
          (i.length ? "?" + i : "")
        );
      }
      request(t = {}) {
        return (
          Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
          new ft(this.uri(), t)
        );
      }
      doWrite(t, e) {
        const r = this.request({ method: "POST", data: t });
        r.on("success", e),
          r.on("error", (t, e) => {
            this.onError("xhr post error", t, e);
          });
      }
      doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
          t.on("error", (t, e) => {
            this.onError("xhr poll error", t, e);
          }),
          (this.pollXhr = t);
      }
    },
  },
  Be =
    /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Te = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Ae(t) {
  const e = t,
    r = t.indexOf("["),
    i = t.indexOf("]");
  -1 != r &&
    -1 != i &&
    (t =
      t.substring(0, r) +
      t.substring(r, i).replace(/:/g, ";") +
      t.substring(i, t.length));
  let s = Be.exec(t || ""),
    n = {},
    o = 14;
  for (; o--; ) n[Te[o]] = s[o] || "";
  return (
    -1 != r &&
      -1 != i &&
      ((n.source = e),
      (n.host = n.host.substring(1, n.host.length - 1).replace(/;/g, ":")),
      (n.authority = n.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (n.ipv6uri = !0)),
    (n.pathNames = (function (t, e) {
      const r = /\/{2,9}/g,
        i = e.replace(r, "/").split("/");
      ("/" != e.substr(0, 1) && 0 !== e.length) || i.splice(0, 1);
      "/" == e.substr(e.length - 1, 1) && i.splice(i.length - 1, 1);
      return i;
    })(0, n.path)),
    (n.queryKey = (function (t, e) {
      const r = {};
      return (
        e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, i) {
          e && (r[e] = i);
        }),
        r
      );
    })(0, n.query)),
    n
  );
}
class xe extends G {
  constructor(t, e = {}) {
    super(),
      t && "object" == typeof t && ((e = t), (t = null)),
      t
        ? ((t = Ae(t)),
          (e.hostname = t.host),
          (e.secure = "https" === t.protocol || "wss" === t.protocol),
          (e.port = t.port),
          t.query && (e.query = t.query))
        : e.host && (e.hostname = Ae(e.host).host),
      X(this, e),
      (this.secure =
        null != e.secure
          ? e.secure
          : "undefined" != typeof location && "https:" === location.protocol),
      e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
      (this.hostname =
        e.hostname ||
        ("undefined" != typeof location ? location.hostname : "localhost")),
      (this.port =
        e.port ||
        ("undefined" != typeof location && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = e.transports || ["polling", "websocket"]),
      (this.readyState = ""),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !0,
        },
        e
      )),
      (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
      "string" == typeof this.opts.query &&
        (this.opts.query = (function (t) {
          let e = {},
            r = t.split("&");
          for (let t = 0, i = r.length; t < i; t++) {
            let i = r[t].split("=");
            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          }
          return e;
        })(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      "function" == typeof addEventListener &&
        (this.opts.closeOnBeforeunload &&
          addEventListener(
            "beforeunload",
            () => {
              this.transport &&
                (this.transport.removeAllListeners(), this.transport.close());
            },
            !1
          ),
        "localhost" !== this.hostname &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const e = Object.assign({}, this.opts.query);
    (e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id);
    const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: e,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port,
    });
    return new Re[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      xe.priorWebsocketSuccess &&
      -1 !== this.transports.indexOf("websocket")
    )
      t = "websocket";
    else {
      if (0 === this.transports.length)
        return void this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
      t = this.transports[0];
    }
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch (t) {
      return this.transports.shift(), void this.open();
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (t) => this.onClose("transport close", t));
  }
  probe(t) {
    let e = this.createTransport(t),
      r = !1;
    xe.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (e.send([{ type: "ping", data: "probe" }]),
        e.once("packet", (t) => {
          if (!r)
            if ("pong" === t.type && "probe" === t.data) {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", e), !e)
              )
                return;
              (xe.priorWebsocketSuccess = "websocket" === e.name),
                this.transport.pause(() => {
                  r ||
                    ("closed" !== this.readyState &&
                      (c(),
                      this.setTransport(e),
                      e.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", e),
                      (e = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const t = new Error("probe error");
              (t.transport = e.name), this.emitReserved("upgradeError", t);
            }
        }));
    };
    function s() {
      r || ((r = !0), c(), e.close(), (e = null));
    }
    const n = (t) => {
      const r = new Error("probe error: " + t);
      (r.transport = e.name), s(), this.emitReserved("upgradeError", r);
    };
    function o() {
      n("transport closed");
    }
    function h() {
      n("socket closed");
    }
    function a(t) {
      e && t.name !== e.name && s();
    }
    const c = () => {
      e.removeListener("open", i),
        e.removeListener("error", n),
        e.removeListener("close", o),
        this.off("close", h),
        this.off("upgrading", a);
    };
    e.once("open", i),
      e.once("error", n),
      e.once("close", o),
      this.once("close", h),
      this.once("upgrading", a),
      e.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (xe.priorWebsocketSuccess = "websocket" === this.transport.name),
      this.emitReserved("open"),
      this.flush(),
      "open" === this.readyState && this.opts.upgrade && this.transport.pause)
    ) {
      let t = 0;
      const e = this.upgrades.length;
      for (; t < e; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      "opening" === this.readyState ||
      "open" === this.readyState ||
      "closing" === this.readyState
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.resetPingTimeout(),
            this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const e = new Error("server error");
          (e.code = t.data), this.onError(e);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      "closed" !== this.readyState && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      "closed" !== this.readyState &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        "polling" === this.transport.name &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let t = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if (
        (i &&
          (t +=
            "string" == typeof (e = i)
              ? (function (t) {
                  let e = 0,
                    r = 0;
                  for (let i = 0, s = t.length; i < s; i++)
                    (e = t.charCodeAt(i)),
                      e < 128
                        ? (r += 1)
                        : e < 2048
                        ? (r += 2)
                        : e < 55296 || e >= 57344
                        ? (r += 3)
                        : (i++, (r += 4));
                  return r;
                })(e)
              : Math.ceil(1.33 * (e.byteLength || e.size))),
        r > 0 && t > this.maxPayload)
      )
        return this.writeBuffer.slice(0, r);
      t += 2;
    }
    var e;
    return this.writeBuffer;
  }
  write(t, e, r) {
    return this.sendPacket("message", t, e, r), this;
  }
  send(t, e, r) {
    return this.sendPacket("message", t, e, r), this;
  }
  sendPacket(t, e, r, i) {
    if (
      ("function" == typeof e && ((i = e), (e = void 0)),
      "function" == typeof r && ((i = r), (r = null)),
      "closing" === this.readyState || "closed" === this.readyState)
    )
      return;
    (r = r || {}).compress = !1 !== r.compress;
    const s = { type: t, data: e, options: r };
    this.emitReserved("packetCreate", s),
      this.writeBuffer.push(s),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      e = () => {
        this.off("upgrade", e), this.off("upgradeError", e), t();
      },
      r = () => {
        this.once("upgrade", e), this.once("upgradeError", e);
      };
    return (
      ("opening" !== this.readyState && "open" !== this.readyState) ||
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (xe.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, e) {
    ("opening" !== this.readyState &&
      "open" !== this.readyState &&
      "closing" !== this.readyState) ||
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      "function" == typeof removeEventListener &&
        removeEventListener("offline", this.offlineEventListener, !1),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, e),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const e = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && e.push(t[r]);
    return e;
  }
}
xe.protocol = 4;
xe.protocol;
var ke = {};
t(ke, "protocol", () => Fe),
  t(ke, "PacketType", () => De),
  t(ke, "Encoder", () => Me),
  t(ke, "Decoder", () => qe);
const _e = "function" == typeof ArrayBuffer,
  Se = Object.prototype.toString,
  Oe =
    "function" == typeof Blob ||
    ("undefined" != typeof Blob &&
      "[object BlobConstructor]" === Se.call(Blob)),
  Le =
    "function" == typeof File ||
    ("undefined" != typeof File &&
      "[object FileConstructor]" === Se.call(File));
function Ce(t) {
  return (
    (_e &&
      (t instanceof ArrayBuffer ||
        ((t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t.buffer instanceof ArrayBuffer)(t))) ||
    (Oe && t instanceof Blob) ||
    (Le && t instanceof File)
  );
}
function Ie(t, e) {
  if (!t || "object" != typeof t) return !1;
  if (Array.isArray(t)) {
    for (let e = 0, r = t.length; e < r; e++) if (Ie(t[e])) return !0;
    return !1;
  }
  if (Ce(t)) return !0;
  if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length)
    return Ie(t.toJSON(), !0);
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && Ie(t[e])) return !0;
  return !1;
}
function Pe(t) {
  const e = [],
    r = t.data,
    i = t;
  return (
    (i.data = Ne(r, e)), (i.attachments = e.length), { packet: i, buffers: e }
  );
}
function Ne(t, e) {
  if (!t) return t;
  if (Ce(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  }
  if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let i = 0; i < t.length; i++) r[i] = Ne(t[i], e);
    return r;
  }
  if ("object" == typeof t && !(t instanceof Date)) {
    const r = {};
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (r[i] = Ne(t[i], e));
    return r;
  }
  return t;
}
function Ue(t, e) {
  return (t.data = je(t.data, e)), (t.attachments = void 0), t;
}
function je(t, e) {
  if (!t) return t;
  if (t && t._placeholder) return e[t.num];
  if (Array.isArray(t)) for (let r = 0; r < t.length; r++) t[r] = je(t[r], e);
  else if ("object" == typeof t)
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = je(t[r], e));
  return t;
}
const Fe = 5;
var De;
!(function (t) {
  (t[(t.CONNECT = 0)] = "CONNECT"),
    (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
    (t[(t.EVENT = 2)] = "EVENT"),
    (t[(t.ACK = 3)] = "ACK"),
    (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
})(De || (De = {}));
class Me {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type !== De.EVENT && t.type !== De.ACK) || !Ie(t)
      ? [this.encodeAsString(t)]
      : ((t.type = t.type === De.EVENT ? De.BINARY_EVENT : De.BINARY_ACK),
        this.encodeAsBinary(t));
  }
  encodeAsString(t) {
    let e = "" + t.type;
    return (
      (t.type !== De.BINARY_EVENT && t.type !== De.BINARY_ACK) ||
        (e += t.attachments + "-"),
      t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
      null != t.id && (e += t.id),
      null != t.data && (e += JSON.stringify(t.data, this.replacer)),
      e
    );
  }
  encodeAsBinary(t) {
    const e = Pe(t),
      r = this.encodeAsString(e.packet),
      i = e.buffers;
    return i.unshift(r), i;
  }
}
class qe extends G {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let e;
    if ("string" == typeof t)
      (e = this.decodeString(t)),
        e.type === De.BINARY_EVENT || e.type === De.BINARY_ACK
          ? ((this.reconstructor = new He(e)),
            0 === e.attachments && super.emitReserved("decoded", e))
          : super.emitReserved("decoded", e);
    else {
      if (!Ce(t) && !t.base64) throw new Error("Unknown type: " + t);
      if (!this.reconstructor)
        throw new Error("got binary data when not reconstructing a packet");
      (e = this.reconstructor.takeBinaryData(t)),
        e && ((this.reconstructor = null), super.emitReserved("decoded", e));
    }
  }
  decodeString(t) {
    let e = 0;
    const r = { type: Number(t.charAt(0)) };
    if (void 0 === De[r.type]) throw new Error("unknown packet type " + r.type);
    if (r.type === De.BINARY_EVENT || r.type === De.BINARY_ACK) {
      const i = e + 1;
      for (; "-" !== t.charAt(++e) && e != t.length; );
      const s = t.substring(i, e);
      if (s != Number(s) || "-" !== t.charAt(e))
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if ("/" === t.charAt(e + 1)) {
      const i = e + 1;
      for (; ++e; ) {
        if ("," === t.charAt(e)) break;
        if (e === t.length) break;
      }
      r.nsp = t.substring(i, e);
    } else r.nsp = "/";
    const i = t.charAt(e + 1);
    if ("" !== i && Number(i) == i) {
      const i = e + 1;
      for (; ++e; ) {
        const r = t.charAt(e);
        if (null == r || Number(r) != r) {
          --e;
          break;
        }
        if (e === t.length) break;
      }
      r.id = Number(t.substring(i, e + 1));
    }
    if (t.charAt(++e)) {
      const i = this.tryParse(t.substr(e));
      if (!qe.isPayloadValid(r.type, i)) throw new Error("invalid payload");
      r.data = i;
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch (t) {
      return !1;
    }
  }
  static isPayloadValid(t, e) {
    switch (t) {
      case De.CONNECT:
        return "object" == typeof e;
      case De.DISCONNECT:
        return void 0 === e;
      case De.CONNECT_ERROR:
        return "string" == typeof e || "object" == typeof e;
      case De.EVENT:
      case De.BINARY_EVENT:
        return Array.isArray(e) && e.length > 0;
      case De.ACK:
      case De.BINARY_ACK:
        return Array.isArray(e);
    }
  }
  destroy() {
    this.reconstructor && this.reconstructor.finishedReconstruction();
  }
}
class He {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const t = Ue(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
function $e(t, e, r) {
  return (
    t.on(e, r),
    function () {
      t.off(e, r);
    }
  );
}
const ze = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Ge extends G {
  constructor(t, e, r) {
    super(),
      (this.connected = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = e),
      r && r.auth && (this.auth = r.auth),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      $e(t, "open", this.onopen.bind(this)),
      $e(t, "packet", this.onpacket.bind(this)),
      $e(t, "error", this.onerror.bind(this)),
      $e(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return (
      this.connected ||
        (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        "open" === this.io._readyState && this.onopen()),
      this
    );
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...e) {
    if (ze.hasOwnProperty(t))
      throw new Error('"' + t + '" is a reserved event name');
    e.unshift(t);
    const r = { type: De.EVENT, data: e, options: {} };
    if (
      ((r.options.compress = !1 !== this.flags.compress),
      "function" == typeof e[e.length - 1])
    ) {
      const t = this.ids++,
        i = e.pop();
      this._registerAckCallback(t, i), (r.id = t);
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, e) {
    const r = this.flags.timeout;
    if (void 0 === r) return void (this.acks[t] = e);
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let e = 0; e < this.sendBuffer.length; e++)
        this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
      e.call(this, new Error("operation has timed out"));
    }, r);
    this.acks[t] = (...t) => {
      this.io.clearTimeoutFn(i), e.apply(this, [null, ...t]);
    };
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    "function" == typeof this.auth
      ? this.auth((t) => {
          this.packet({ type: De.CONNECT, data: t });
        })
      : this.packet({ type: De.CONNECT, data: this.auth });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, e) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, e);
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case De.CONNECT:
          if (t.data && t.data.sid) {
            const e = t.data.sid;
            this.onconnect(e);
          } else
            this.emitReserved(
              "connect_error",
              new Error(
                "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
              )
            );
          break;
        case De.EVENT:
        case De.BINARY_EVENT:
          this.onevent(t);
          break;
        case De.ACK:
        case De.BINARY_ACK:
          this.onack(t);
          break;
        case De.DISCONNECT:
          this.ondisconnect();
          break;
        case De.CONNECT_ERROR:
          this.destroy();
          const e = new Error(t.data.message);
          (e.data = t.data.data), this.emitReserved("connect_error", e);
      }
  }
  onevent(t) {
    const e = t.data || [];
    null != t.id && e.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(e)
        : this.receiveBuffer.push(Object.freeze(e));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const e = this._anyListeners.slice();
      for (const r of e) r.apply(this, t);
    }
    super.emit.apply(this, t);
  }
  ack(t) {
    const e = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), e.packet({ type: De.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const e = this.acks[t.id];
    "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]);
  }
  onconnect(t) {
    (this.id = t),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: De.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const e = this._anyListeners;
      for (let r = 0; r < e.length; r++)
        if (t === e[r]) return e.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const e = this._anyOutgoingListeners;
      for (let r = 0; r < e.length; r++)
        if (t === e[r]) return e.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const e = this._anyOutgoingListeners.slice();
      for (const r of e) r.apply(this, t.data);
    }
  }
}
function We(t) {
  (t = t || {}),
    (this.ms = t.min || 100),
    (this.max = t.max || 1e4),
    (this.factor = t.factor || 2),
    (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
    (this.attempts = 0);
}
(We.prototype.duration = function () {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(),
      r = Math.floor(e * this.jitter * t);
    t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
  }
  return 0 | Math.min(t, this.max);
}),
  (We.prototype.reset = function () {
    this.attempts = 0;
  }),
  (We.prototype.setMin = function (t) {
    this.ms = t;
  }),
  (We.prototype.setMax = function (t) {
    this.max = t;
  }),
  (We.prototype.setJitter = function (t) {
    this.jitter = t;
  });
class Ye extends G {
  constructor(t, e) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && "object" == typeof t && ((e = t), (t = void 0)),
      ((e = e || {}).path = e.path || "/socket.io"),
      (this.opts = e),
      X(this, e),
      this.reconnection(!1 !== e.reconnection),
      this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(e.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        null !== (r = e.randomizationFactor) && void 0 !== r ? r : 0.5
      ),
      (this.backoff = new We({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(null == e.timeout ? 2e4 : e.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = e.parser || ke;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = !1 !== e.autoConnect),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return void 0 === t
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var e;
    return void 0 === t
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        null === (e = this.backoff) || void 0 === e || e.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var e;
    return void 0 === t
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        null === (e = this.backoff) || void 0 === e || e.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var e;
    return void 0 === t
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        null === (e = this.backoff) || void 0 === e || e.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      0 === this.backoff.attempts &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new xe(this.uri, this.opts);
    const e = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = $e(e, "open", function () {
        r.onopen(), t && t();
      }),
      s = $e(e, "error", (e) => {
        r.cleanup(),
          (r._readyState = "closed"),
          this.emitReserved("error", e),
          t ? t(e) : r.maybeReconnectOnOpen();
      });
    if (!1 !== this._timeout) {
      const t = this._timeout;
      0 === t && i();
      const r = this.setTimeoutFn(() => {
        i(), e.close(), e.emit("error", new Error("timeout"));
      }, t);
      this.opts.autoUnref && r.unref(),
        this.subs.push(function () {
          clearTimeout(r);
        });
    }
    return this.subs.push(i), this.subs.push(s), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      $e(t, "ping", this.onping.bind(this)),
      $e(t, "data", this.ondata.bind(this)),
      $e(t, "error", this.onerror.bind(this)),
      $e(t, "close", this.onclose.bind(this)),
      $e(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    this.decoder.add(t);
  }
  ondecoded(t) {
    this.emitReserved("packet", t);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, e) {
    let r = this.nsps[t];
    return r || ((r = new Ge(this, t, e)), (this.nsps[t] = r)), r;
  }
  _destroy(t) {
    const e = Object.keys(this.nsps);
    for (const t of e) {
      if (this.nsps[t].active) return;
    }
    this._close();
  }
  _packet(t) {
    const e = this.encoder.encode(t);
    for (let r = 0; r < e.length; r++) this.engine.write(e[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, e) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, e),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const e = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          t.skipReconnect ||
            t.open((e) => {
              e
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", e))
                : t.onreconnect();
            }));
      }, e);
      this.opts.autoUnref && r.unref(),
        this.subs.push(function () {
          clearTimeout(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Ve = {};
function Qe(t, e) {
  "object" == typeof t && ((e = t), (t = void 0));
  const r = (function (t, e = "", r) {
      let i = t;
      (r = r || ("undefined" != typeof location && location)),
        null == t && (t = r.protocol + "//" + r.host),
        "string" == typeof t &&
          ("/" === t.charAt(0) &&
            (t = "/" === t.charAt(1) ? r.protocol + t : r.host + t),
          /^(https?|wss?):\/\//.test(t) ||
            (t = void 0 !== r ? r.protocol + "//" + t : "https://" + t),
          (i = Ae(t))),
        i.port ||
          (/^(http|ws)$/.test(i.protocol)
            ? (i.port = "80")
            : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
        (i.path = i.path || "/");
      const s = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
      return (
        (i.id = i.protocol + "://" + s + ":" + i.port + e),
        (i.href =
          i.protocol +
          "://" +
          s +
          (r && r.port === i.port ? "" : ":" + i.port)),
        i
      );
    })(t, (e = e || {}).path || "/socket.io"),
    i = r.source,
    s = r.id,
    n = r.path,
    o = Ve[s] && n in Ve[s].nsps;
  let h;
  return (
    e.forceNew || e["force new connection"] || !1 === e.multiplex || o
      ? (h = new Ye(i, e))
      : (Ve[s] || (Ve[s] = new Ye(i, e)), (h = Ve[s])),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
  );
}
Object.assign(Qe, { Manager: Ye, Socket: Ge, io: Qe, connect: Qe });
const Xe = Qe("http://localhost:8080");
Xe.on("connect", () => {
  console.log(`You connected with id ${Xe.id}`);
}),
  Xe.on("GiveQuestion", (t, e) => {
    console.log(t), console.log(e);
  }),
  window.addEventListener("unload", (t) => {
    t.preventDefault();
  });
class Ke {
  constructor(t, e, r, i, s) {
    (this.ctx = t),
      (this.x = e),
      (this.y = r),
      (this.duration = i),
      (this.elapsedTime = 1),
      (this.releaseButtons = s);
  }
  timerRender() {
    (this.timer = this.ctx.add.circle(this.x, this.y, 70, 16711680)),
      (this.timerText = this.ctx.add
        .text(this.x, this.y, "Timer", {
          fontFamily: "Arial",
          fontSize: "24px",
          color: "#000000",
          align: "center",
        })
        .setOrigin(0.5)),
      this.timer.setInteractive();
    const t = {
      delay: 1e3,
      callback: this.updateTimer.bind(this),
      repeat: this.duration / 1e3,
    };
    this.timer.once("pointerdown", () => {
      O.emit("timerStart"),
        this.releaseButtons(),
        this.timerText.setText(7),
        (this.elapsedTime = 1),
        (this.clockTimer = this.ctx.time.addEvent(t)),
        this.ctx.tweens.add({
          targets: this.timerAngle,
          duration: this.duration,
          max: 0,
        }),
        this.ctx.tweens.add({
          targets: [this.timerAngle, this.timerText, this.timer],
          alpha: 0,
          duration: 500,
          delay: this.duration,
        });
    });
  }
  updateTimer() {
    const t = this.duration / 1e3 + 1;
    this.elapsedTime++,
      this.elapsedTime < t
        ? this.timerText.setText(t - this.elapsedTime)
        : this.timerText.setText("END");
  }
  createArc() {
    (this.graphics = this.ctx.add.graphics()), (this.timerAngle = { max: 360 });
  }
  updateArc() {
    this.graphics.clear(),
      this.graphics.lineStyle(15, 16711935),
      this.graphics.beginPath(),
      this.graphics.arc(
        this.x,
        this.y,
        50,
        Phaser.Math.DegToRad(0),
        Phaser.Math.DegToRad(this.timerAngle.max),
        !1
      ),
      this.graphics.strokePath();
  }
  hide() {
    (this.graphics.visible = !1),
      (this.timerText.visible = !1),
      (this.timer.visible = !1);
  }
}
class Je extends Phaser.Scene {
  constructor() {
    super("NormalQuestion"),
      O.on("newQuestion", this.loadDataFromBoard.bind(this)),
      O.on("playerSwitch", this.switchPlayerAndRerender.bind(this)),
      (this.timer = new Ke(
        this,
        400,
        120,
        7e3,
        this.releaseRFButtons.bind(this)
      )),
      this.switchHandler;
  }
  create() {
    this.renderQuestionAndAnswer(),
      this.timer.timerRender(),
      this.timer.createArc(),
      this.renderRightFalseButtons(),
      this.renderSwitchButton();
  }
  update() {
    this.timer.updateArc();
  }
  loadDataFromBoard(t, e, r, i, s, n) {
    this.scene.restart(),
      (this.switchHandler = i),
      this.data.set("BoardData", {
        number: t,
        question: e,
        actualPlayer: r,
        isTF: n,
      }),
      (this.answerHandler = s);
  }
  renderQuestionAndAnswer() {
    const t = {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
        align: "center",
      },
      e = this.data.get("BoardData").question.question;
    this.questionText = this.add.text(400, 300, e, {
      ...t,
      wordWrap: { width: 400 },
    });
    const r = this.data.get("BoardData").actualPlayer;
    this.questionText.setDepth(2),
      this.questionText.setOrigin(0.5),
      (this.questionLabel = this.add.rexRoundRectangle(
        400,
        300,
        400,
        200,
        20,
        "B" == r ? 1684990 : 16753920
      )),
      this.questionLabel.setStrokeStyle(10, 16777215, 1);
    const i = this.data.get("BoardData").question.answer;
    (this.answerText = this.add.text(400, 460, i, {
      ...t,
      wordWrap: { width: 200 },
    })),
      this.answerText.setDepth(2),
      this.answerText.setOrigin(0.5),
      (this.answerLabel = this.add.rexRoundRectangle(
        400,
        460,
        200,
        100,
        20,
        12051223
      ));
  }
  renderRightFalseButtons() {
    (this.right = this.add.sprite(200, 500, "right_button")),
      (this.false = this.add.sprite(600, 500, "false_button")),
      (this.right.scale = this.false.scale = 2 / 3),
      this.right.setTint(6710886),
      this.false.setTint(6710886);
  }
  releaseRFButtons() {
    this.right.clearTint(), this.false.clearTint();
    const t = this.data.get("BoardData").isTF;
    this.right.setInteractive(),
      this.false.setInteractive(),
      this.right.on("pointerdown", () => {
        this.answerHandler(!0, t), this.scene.switch("GameScene");
      }),
      this.false.on("pointerdown", () => {
        this.answerHandler(!1, t), this.scene.switch("GameScene");
      });
  }
  renderSwitchButton() {
    function t(t) {
      const e = this.add.sprite(400, 120, t);
      return (e.scale = 2 / 3), e.setDepth(-1), e;
    }
    const e = this.data.get("BoardData").actualPlayer;
    "B" == e && (this.switch = t.call(this, "switchToOrange")),
      "O" == e && (this.switch = t.call(this, "switchToBlue")),
      this.switch.setInteractive(),
      this.switch.on("pointerdown", this.switchHandler);
  }
  switchPlayerAndRerender(t) {
    (this.data.get("BoardData").actualPlayer = t),
      (this.questionLabel.fillColor = "B" == t ? 1684990 : 16753920),
      (this.switch.visible = !1),
      this.timer.hide();
  }
}
class Ze {
  constructor(t) {
    this.ctx,
      this.x,
      this.y,
      this.spriteTile,
      (this.number = t),
      (this.pyramidCoords = { x: void 0, y: void 0 }),
      this.numberHolder,
      (this.tileState = void 0),
      (this.border = { left: !1, right: !1, bottom: !1 });
  }
  init(t, e) {
    (this.ctx = t), (this.boardHandler = e);
  }
  render(t, e, r) {
    (this.x = t),
      (this.y = e),
      (this.spriteTile = this.ctx.add.sprite(t, e, "base_tile"));
    const i = this.spriteTile.width,
      s = this.spriteTile.height;
    this.spriteTile.setInteractive(
      new Phaser.Geom.Polygon([
        [i / 2, 0],
        [i, s / 4],
        [i, (3 * s) / 4],
        [i / 2, s],
        [0, (3 * s) / 4],
        [0, s / 4],
      ]),
      Phaser.Geom.Polygon.Contains
    ),
      this.spriteTile.on("pointerdown", () => {
        this.clickHandler();
      }),
      this.spriteTile.setScale(0.5),
      this._renderNumber();
  }
  _renderNumber() {
    this.numberHolder = this.ctx.add
      .text(this.x, this.y, `${this.number}`, {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
      })
      .setOrigin(0.5);
  }
  clickHandler() {
    this.boardHandler(this);
  }
  setColor() {
    "B" == this.tileState
      ? (this.numberHolder.destroy(), this.spriteTile.setTexture("blue_tile"))
      : "O" == this.tileState
      ? (this.numberHolder.destroy(), this.spriteTile.setTexture("red_tile"))
      : "G" == this.tileState && this.spriteTile.setTexture("grey_tile");
  }
  setState(t = this.tileState.status) {
    (this.tileState = t),
      ("B" != this.tileState && "O" != this.tileState) ||
        this.spriteTile.removeListener("pointerdown"),
      this.setColor();
  }
  setBorder(t) {
    this.border[t] = !0;
  }
}
class tr {
  constructor(t = "Trivia") {
    (this.api =
      "https://opentdb.com/api.php?amount=28&type=multiple&encode=base64"),
      (this.mode = t),
      (this.questions = []),
      (this.TFQuestions = []),
      this.pin,
      this.backup,
      O.on("killSession", () => {
        localStorage.removeItem("pin"), location.reload();
      });
  }
  async getPin() {
    if (localStorage.getItem("pin")) {
      const t = localStorage.getItem("pin");
      (await this.checkSession(t))
        ? ((this.pin = t), O.emit("oldSessionFound"))
        : (localStorage.removeItem("pin"), await this.getNewPin());
    } else await this.getNewPin();
    O.emit("gotPin", this.pin),
      console.log(this.pin),
      Xe.emit("join-room-moderator", this.pin),
      console.log(this.pin);
  }
  async getNewPin() {
    try {
      const t = await fetch("http://localhost:8080/moderator");
      console.log(t);
      const { pin: e } = await t.json();
      localStorage.removeItem("pin"),
        localStorage.setItem("pin", e),
        (this.pin = e);
    } catch (t) {
      console.error("Unable to get Pin", t);
    }
  }
  async checkSession(t) {
    try {
      const e = await fetch(`http://localhost:8080/get-session/?pin=${t}`),
        r = await e.json();
      return !(!r.pin || !r.pin.numOfSaves) && ((this.backup = r.pin), !0);
    } catch (t) {
      return !1;
    }
  }
  async getQuestions() {
    try {
      const t = await fetch(
          "https://opentdb.com/api.php?amount=28&type=multiple&encode=base64",
          { mode: "cors" }
        ),
        { results: e } = await t.json();
      e.forEach((t) => {
        const e = {
          question: atob(t.question),
          answer: atob(t.correct_answer),
        };
        this.questions.push(e);
      });
    } catch (t) {
      console.error(t), this.getQuestions();
    }
  }
  async getTFQuestions() {
    for (let t = 0; t < 28; t++) {
      const e = {
        question: `Je toto vzorová true false otázka s číslem ${t + 1}?`,
        answer: "ANO",
      };
      this.TFQuestions.push(e);
    }
  }
}
class er {
  constructor(t = 7) {
    this.chosenTile,
      (this.boardModel = (function (t) {
        let e = 1,
          r = 1;
        const i = [];
        for (let s = 0; s < t; s++) {
          const t = [];
          for (let i = 0; i < e; i++) t.push(new Ze(r)), r++;
          (e += 1), i.push(t);
        }
        return i;
      })(t)),
      this.ctx,
      (this.player = "B"),
      (this.network = new tr()),
      O.on("restoreSession", (t) => {
        rr(this.boardModel, (t, e, r) => {
          (t.tileState = this.network.backup.boardModel[e][r]), t.setState();
        }),
          (this.player = this.network.backup.nextPlayer),
          t();
      }),
      O.on("timerStart", () => {
        Xe.emit("timerStart", this.network.pin);
      });
  }
  init(t) {
    (this.ctx = t),
      rr(this.boardModel, (t) => {
        t.init(this.ctx, this.boardHandler.bind(this));
      }),
      this.network.getQuestions(),
      this.network.getTFQuestions(),
      this.network.getPin(),
      rr(this.boardModel, this.setBorder);
  }
  render(t, e) {
    const r = { width: 140, height: 160 };
    let i = t,
      s = e;
    this.boardModel.forEach((t, e) => {
      !(function (t, e, r, i, s) {
        let n = t;
        r.forEach((t, r) => {
          t.render(n, e, 1),
            (t.pyramidCoords = { x: r, y: s }),
            (n += i.width / 2);
        });
      })(i, s, t, r, e),
        (i -= r.width / 4),
        (s += (3 * r.height) / 8);
    });
  }
  boardHandler(t) {
    (this.chosenTile = t), console.log(this.chosenTile);
    const e = this.chosenTile.tileState
      ? this.network.TFQuestions[t.number - 1]
      : this.network.questions[t.number - 1];
    Xe.emit(
      "QuestionPick",
      this.network.pin,
      this.chosenTile.number,
      this.chosenTile.pyramidCoords,
      (function (t) {
        let e = "";
        return (
          t.split(" ").forEach((t) => {
            e += t[0];
          }),
          e
        );
      })(e.answer)
    ),
      e &&
        (this.ctx.scene.switch("NormalQuestion"),
        O.emit(
          "newQuestion",
          t.number,
          e,
          this.player,
          this.switchPlayer.bind(this),
          this.questionAnsweredRight.bind(this),
          !!this.chosenTile.tileState
        ));
  }
  switchPlayer() {
    console.log("SWITCHED"),
      "B" == this.player
        ? (this.player = "O")
        : "O" == this.player && (this.player = "B"),
      Xe.emit("playerSwitch", this.network.pin, this.player),
      O.emit("playerSwitch", this.player);
  }
  questionAnsweredRight(t, e = !1) {
    let r;
    t
      ? (r = this.player)
      : e
      ? (this.switchPlayer(), (r = this.player))
      : (r = "G"),
      Xe.emit(
        "tileResolved",
        this.network.pin,
        r,
        this.chosenTile.pyramidCoords,
        this.player,
        this.network.pin
      ),
      this.chosenTile.setState(r),
      this.checkWin(),
      this.switchPlayer();
  }
  checkWin() {
    const t = { right: !1, left: !1, bottom: !1 },
      e = [],
      r = [
        [-1, -1],
        [0, -1],
        [-1, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ];
    function i() {
      e.forEach((e) => {
        e.border.left && (t.left = !0),
          e.border.right && (t.right = !0),
          e.border.bottom && (t.bottom = !0);
      }),
        t.left &&
          t.right &&
          t.bottom &&
          (console.log(this.player, " WINS!"),
          this.ctx.renderWinner(this.player));
    }
    (function t(s) {
      r.forEach((r) => {
        const n = s.pyramidCoords.x + r[0],
          o = s.pyramidCoords.y + r[1];
        if (!this.boardModel[o] || !this.boardModel[o][n]) return;
        const h = this.boardModel[o][n];
        h.tileState != this.player ||
          e.includes(h) ||
          (e.push(h), i.call(this), t.call(this, h));
      });
    }.call(this, this.chosenTile),
      console.log(e));
  }
  setBorder(t, e, r, i) {
    0 == r && t.setBorder("left"),
      r == e && t.setBorder("right"),
      e == i - 1 && t.setBorder("bottom");
  }
}
function rr(t, e, r = 7) {
  let i = 1;
  for (let s = 0; s < r; s++) {
    for (let n = 0; n < i; n++) e(t[s][n], s, n, r);
    i += 1;
  }
}
class ir extends Phaser.Scene {
  constructor() {
    super("GameScene"),
      (this.board = new er()),
      O.on("oldSessionFound", () => {
        this.load.on("complete", this.askRestoreSession.bind(this));
      }),
      O.on("gotPin", (t) => {
        this.hideOverlay(),
          this.renderOverlay(`Pin is ${t} \nPlease connect the player`);
      }),
      Xe.on("player-joined", () => {
        this.hideOverlay();
      }),
      (this.elements = []);
  }
  preload() {
    this.load.image("right_button", s("cYnQv")),
      this.load.image("false_button", s("iaZd9")),
      this.load.image("base_tile", s("73TyW")),
      this.load.image("red_tile", s("83c5G")),
      this.load.image("blue_tile", s("jnpdw")),
      this.load.image("grey_tile", s("k4aEt")),
      this.load.image("switchToBlue", s("4Yw34")),
      this.load.image("switchToOrange", s("fmV2E")),
      this.load.image("button", s("bpGew")),
      this.board.init(this);
  }
  create() {
    this.board.render(400, 100);
  }
  renderWinner(t) {
    Xe.emit("win", this.board.network.pin, t);
    const e = ("O" == t ? "Orange" : "Blue") + " player wins";
    this.renderOverlay(e);
    const r = this.add.image(400, 370, "button");
    r.setScale(0.4),
      r.setDepth(8),
      r.setInteractive(),
      r.on("pointerdown", () => {
        location.reload();
      });
  }
  renderOverlay(t) {
    const e = this.add.container(400, 300),
      r = this.add.rectangle(0, 0, 1600, 1200, 65280, 0.1);
    r.setInteractive();
    const i = this.add.text(0, 0, t, {
        color: 16777215,
        fontFamily: "Arial",
        fontSize: "40px",
        fontStyle: "bold",
        wordWrap: { width: 700 },
        align: "center",
      }),
      s = this.add.rectangle(i.x, i.y, i.width, i.height, 4613998);
    e.add(r),
      e.add(s),
      e.add(i),
      i.setOrigin(0.5),
      s.setDepth(3),
      e.setDepth(4),
      this.elements.push(e);
  }
  askRestoreSession() {
    this.renderOverlay(
      "There was found unfinished game, would you like to restore it?"
    );
    const t = this.add.sprite(300, 400, "right_button"),
      e = this.add.sprite(500, 400, "false_button");
    t.setScale(0.5),
      t.setDepth(8),
      e.setDepth(8),
      t.setInteractive(),
      e.setInteractive(),
      e.setScale(0.5),
      this.elements.push(t, e),
      t.on("pointerdown", () => {
        O.emit("restoreSession", this.hideOverlay.bind(this));
      }),
      e.on("pointerdown", () => {
        O.emit("killSession");
      });
  }
  hideOverlay() {
    this.elements.forEach((t) => {
      t.destroy();
    });
  }
}
const sr = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: { default: "arcade", arcade: {} },
  scale: { autoCenter: Phaser.Scale.CENTER_BOTH, mode: Phaser.Scale.FIT },
  resolution: window.devicePixelRatio,
  backgroundColor: "#23a4c4",
  scene: [ir, Je],
};
new Phaser.Game(sr);
//# sourceMappingURL=moderator.0fe1a19d.js.map
