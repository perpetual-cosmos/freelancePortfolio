var dx = Object.defineProperty;
var Cf = (e) => {
  throw TypeError(e);
};
var fx = (e, t, n) =>
  t in e
    ? dx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var dn = (e, t, n) => fx(e, typeof t != "symbol" ? t + "" : t, n),
  _l = (e, t, n) => t.has(e) || Cf("Cannot " + n);
var P = (e, t, n) => (
    _l(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ne = (e, t, n) =>
    t.has(e)
      ? Cf("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  Y = (e, t, n, r) => (
    _l(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  ze = (e, t, n) => (_l(e, t, "access private method"), n);
var bs = (e, t, n, r) => ({
  set _(o) {
    Y(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function px(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ym = { exports: {} },
  Xa = {},
  Xm = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = Symbol.for("react.element"),
  mx = Symbol.for("react.portal"),
  hx = Symbol.for("react.fragment"),
  gx = Symbol.for("react.strict_mode"),
  vx = Symbol.for("react.profiler"),
  yx = Symbol.for("react.provider"),
  xx = Symbol.for("react.context"),
  wx = Symbol.for("react.forward_ref"),
  bx = Symbol.for("react.suspense"),
  Sx = Symbol.for("react.memo"),
  Ex = Symbol.for("react.lazy"),
  kf = Symbol.iterator;
function Cx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kf && e[kf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zm = Object.assign,
  eh = {};
function Uo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || Jm));
}
Uo.prototype.isReactComponent = {};
Uo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Uo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function th() {}
th.prototype = Uo.prototype;
function Qu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || Jm));
}
var Gu = (Qu.prototype = new th());
Gu.constructor = Qu;
Zm(Gu, Uo.prototype);
Gu.isPureReactComponent = !0;
var Nf = Array.isArray,
  nh = Object.prototype.hasOwnProperty,
  qu = { current: null },
  rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function oh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      nh.call(t, r) && !rh.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: is,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: qu.current,
  };
}
function kx(e, t) {
  return {
    $$typeof: is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function Nx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Tf = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Nx("" + e.key)
    : t.toString(36);
}
function qs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case is:
          case mx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Il(s, 0) : r),
      Nf(o)
        ? ((n = ""),
          e != null && (n = e.replace(Tf, "$&/") + "/"),
          qs(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Yu(o) &&
            (o = kx(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Tf, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Nf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Il(i, a);
      s += qs(i, t, n, l, o);
    }
  else if (((l = Cx(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + Il(i, a++)), (s += qs(i, t, n, l, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function Ss(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    qs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Tx(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ze = { current: null },
  Ys = { transition: null },
  jx = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: Ys,
    ReactCurrentOwner: qu,
  };
function ih() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Ss,
  forEach: function (e, t, n) {
    Ss(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ss(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ss(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
J.Component = Uo;
J.Fragment = hx;
J.Profiler = vx;
J.PureComponent = Qu;
J.StrictMode = gx;
J.Suspense = bx;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jx;
J.act = ih;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Zm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = qu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      nh.call(t, l) &&
        !rh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: is, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: xx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yx, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = oh;
J.createFactory = function (e) {
  var t = oh.bind(null, e);
  return ((t.type = e), t);
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: wx, render: e };
};
J.isValidElement = Yu;
J.lazy = function (e) {
  return { $$typeof: Ex, _payload: { _status: -1, _result: e }, _init: Tx };
};
J.memo = function (e, t) {
  return { $$typeof: Sx, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = Ys.transition;
  Ys.transition = {};
  try {
    e();
  } finally {
    Ys.transition = t;
  }
};
J.unstable_act = ih;
J.useCallback = function (e, t) {
  return Ze.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ze.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ze.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ze.current.useEffect(e, t);
};
J.useId = function () {
  return Ze.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ze.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ze.current.useRef(e);
};
J.useState = function (e) {
  return Ze.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ze.current.useTransition();
};
J.version = "18.3.1";
Xm.exports = J;
var y = Xm.exports;
const I = os(y),
  Xu = px({ __proto__: null, default: I }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Px = y,
  Rx = Symbol.for("react.element"),
  Ax = Symbol.for("react.fragment"),
  Ox = Object.prototype.hasOwnProperty,
  _x = Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ix = { key: !0, ref: !0, __self: !0, __source: !0 };
function sh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) Ox.call(t, r) && !Ix.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rx,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: _x.current,
  };
}
Xa.Fragment = Ax;
Xa.jsx = sh;
Xa.jsxs = sh;
Ym.exports = Xa;
var u = Ym.exports,
  ah = { exports: {} },
  vt = {},
  lh = { exports: {} },
  ch = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, j) {
    var M = T.length;
    T.push(j);
    e: for (; 0 < M; ) {
      var U = (M - 1) >>> 1,
        $ = T[U];
      if (0 < o($, j)) ((T[U] = j), (T[M] = $), (M = U));
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var j = T[0],
      M = T.pop();
    if (M !== j) {
      T[0] = M;
      e: for (var U = 0, $ = T.length, K = $ >>> 1; U < K; ) {
        var Q = 2 * (U + 1) - 1,
          ae = T[Q],
          we = Q + 1,
          q = T[we];
        if (0 > o(ae, M))
          we < $ && 0 > o(q, ae)
            ? ((T[U] = q), (T[we] = M), (U = we))
            : ((T[U] = ae), (T[Q] = M), (U = Q));
        else if (we < $ && 0 > o(q, M)) ((T[U] = q), (T[we] = M), (U = we));
        else break e;
      }
    }
    return j;
  }
  function o(T, j) {
    var M = T.sortIndex - j.sortIndex;
    return M !== 0 ? M : T.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    m = 3,
    p = !1,
    b = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(T) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= T)
        (r(c), (j.sortIndex = j.expirationTime), t(l, j));
      else break;
      j = n(c);
    }
  }
  function S(T) {
    if (((g = !1), w(T), !b))
      if (n(l) !== null) ((b = !0), B(E));
      else {
        var j = n(c);
        j !== null && V(S, j.startTime - T);
      }
  }
  function E(T, j) {
    ((b = !1), g && ((g = !1), h(N), (N = -1)), (p = !0));
    var M = m;
    try {
      for (
        w(j), f = n(l);
        f !== null && (!(f.expirationTime > j) || (T && !D()));
      ) {
        var U = f.callback;
        if (typeof U == "function") {
          ((f.callback = null), (m = f.priorityLevel));
          var $ = U(f.expirationTime <= j);
          ((j = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(l) && r(l),
            w(j));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var K = !0;
      else {
        var Q = n(c);
        (Q !== null && V(S, Q.startTime - j), (K = !1));
      }
      return K;
    } finally {
      ((f = null), (m = M), (p = !1));
    }
  }
  var C = !1,
    k = null,
    N = -1,
    R = 5,
    A = -1;
  function D() {
    return !(e.unstable_now() - A < R);
  }
  function L() {
    if (k !== null) {
      var T = e.unstable_now();
      A = T;
      var j = !0;
      try {
        j = k(!0, T);
      } finally {
        j ? W() : ((C = !1), (k = null));
      }
    } else C = !1;
  }
  var W;
  if (typeof v == "function")
    W = function () {
      v(L);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      H = O.port2;
    ((O.port1.onmessage = L),
      (W = function () {
        H.postMessage(null);
      }));
  } else
    W = function () {
      x(L, 0);
    };
  function B(T) {
    ((k = T), C || ((C = !0), W()));
  }
  function V(T, j) {
    N = x(function () {
      T(e.unstable_now());
    }, j);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || p || ((b = !0), B(E));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var M = m;
      m = j;
      try {
        return T();
      } finally {
        m = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, j) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = m;
      m = T;
      try {
        return j();
      } finally {
        m = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, j, M) {
      var U = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? U + M : U))
          : (M = U),
        T)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = M + $),
        (T = {
          id: d++,
          callback: j,
          priorityLevel: T,
          startTime: M,
          expirationTime: $,
          sortIndex: -1,
        }),
        M > U
          ? ((T.sortIndex = M),
            t(c, T),
            n(l) === null &&
              T === n(c) &&
              (g ? (h(N), (N = -1)) : (g = !0), V(S, M - U)))
          : ((T.sortIndex = $), t(l, T), b || p || ((b = !0), B(E))),
        T
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (T) {
      var j = m;
      return function () {
        var M = m;
        m = j;
        try {
          return T.apply(this, arguments);
        } finally {
          m = M;
        }
      };
    }));
})(ch);
lh.exports = ch;
var Lx = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mx = y,
  gt = Lx;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var uh = new Set(),
  Pi = {};
function Vr(e, t) {
  (_o(e, t), _o(e + "Capture", t));
}
function _o(e, t) {
  for (Pi[e] = t, e = 0; e < t.length; e++) uh.add(t[e]);
}
var wn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Tc = Object.prototype.hasOwnProperty,
  Dx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jf = {},
  Pf = {};
function Fx(e) {
  return Tc.call(Pf, e)
    ? !0
    : Tc.call(jf, e)
      ? !1
      : Dx.test(e)
        ? (Pf[e] = !0)
        : ((jf[e] = !0), !1);
}
function zx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $x(e, t, n, r) {
  if (t === null || typeof t > "u" || zx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function et(e, t, n, r, o, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new et(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new et(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new et(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new et(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new et(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new et(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ju = /[\-:]([a-z])/g;
function Zu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ju, Zu);
    Fe[t] = new et(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ju, Zu);
    Fe[t] = new et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ju, Zu);
  Fe[t] = new et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new et(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ed(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($x(t, n, o, r) && (n = null),
    r || o === null
      ? Fx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tn = Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Es = Symbol.for("react.element"),
  to = Symbol.for("react.portal"),
  no = Symbol.for("react.fragment"),
  td = Symbol.for("react.strict_mode"),
  jc = Symbol.for("react.profiler"),
  dh = Symbol.for("react.provider"),
  fh = Symbol.for("react.context"),
  nd = Symbol.for("react.forward_ref"),
  Pc = Symbol.for("react.suspense"),
  Rc = Symbol.for("react.suspense_list"),
  rd = Symbol.for("react.memo"),
  zn = Symbol.for("react.lazy"),
  ph = Symbol.for("react.offscreen"),
  Rf = Symbol.iterator;
function ei(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rf && e[Rf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  Ll;
function fi(e) {
  if (Ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ll = (t && t[1]) || "";
    }
  return (
    `
` +
    Ll +
    e
  );
}
var Ml = !1;
function Dl(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ml = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? fi(e) : "";
}
function Bx(e) {
  switch (e.tag) {
    case 5:
      return fi(e.type);
    case 16:
      return fi("Lazy");
    case 13:
      return fi("Suspense");
    case 19:
      return fi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Dl(e.type, !1)), e);
    case 11:
      return ((e = Dl(e.type.render, !1)), e);
    case 1:
      return ((e = Dl(e.type, !0)), e);
    default:
      return "";
  }
}
function Ac(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case no:
      return "Fragment";
    case to:
      return "Portal";
    case jc:
      return "Profiler";
    case td:
      return "StrictMode";
    case Pc:
      return "Suspense";
    case Rc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fh:
        return (e.displayName || "Context") + ".Consumer";
      case dh:
        return (e._context.displayName || "Context") + ".Provider";
      case nd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case rd:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ac(e.type) || "Memo"
        );
      case zn:
        ((t = e._payload), (e = e._init));
        try {
          return Ac(e(t));
        } catch {}
    }
  return null;
}
function Ux(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ac(t);
    case 8:
      return t === td ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function lr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vx(e) {
  var t = mh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Cs(e) {
  e._valueTracker || (e._valueTracker = Vx(e));
}
function hh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ha(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oc(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = lr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function gh(e, t) {
  ((t = t.checked), t != null && ed(e, "checked", t, !1));
}
function _c(e, t) {
  gh(e, t);
  var n = lr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ic(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ic(e, t.type, lr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Of(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ic(e, t, n) {
  (t !== "number" || ha(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pi = Array.isArray;
function mo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + lr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _f(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (pi(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: lr(n) };
}
function vh(e, t) {
  var n = lr(t.value),
    r = lr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function If(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ks,
  xh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ks = ks || document.createElement("div"),
          ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ks.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ri(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hx = ["Webkit", "ms", "Moz", "O"];
Object.keys(yi).forEach(function (e) {
  Hx.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yi[t] = yi[e]));
  });
});
function wh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yi.hasOwnProperty(e) && yi[e])
      ? ("" + t).trim()
      : t + "px";
}
function bh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = wh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var Wx = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Dc(e, t) {
  if (t) {
    if (Wx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Fc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zc = null;
function od(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $c = null,
  ho = null,
  go = null;
function Lf(e) {
  if ((e = ls(e))) {
    if (typeof $c != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = nl(t)), $c(e.stateNode, e.type, t));
  }
}
function Sh(e) {
  ho ? (go ? go.push(e) : (go = [e])) : (ho = e);
}
function Eh() {
  if (ho) {
    var e = ho,
      t = go;
    if (((go = ho = null), Lf(e), t)) for (e = 0; e < t.length; e++) Lf(t[e]);
  }
}
function Ch(e, t) {
  return e(t);
}
function kh() {}
var Fl = !1;
function Nh(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Ch(e, t, n);
  } finally {
    ((Fl = !1), (ho !== null || go !== null) && (kh(), Eh()));
  }
}
function Ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Bc = !1;
if (wn)
  try {
    var ti = {};
    (Object.defineProperty(ti, "passive", {
      get: function () {
        Bc = !0;
      },
    }),
      window.addEventListener("test", ti, ti),
      window.removeEventListener("test", ti, ti));
  } catch {
    Bc = !1;
  }
function Kx(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var xi = !1,
  ga = null,
  va = !1,
  Uc = null,
  Qx = {
    onError: function (e) {
      ((xi = !0), (ga = e));
    },
  };
function Gx(e, t, n, r, o, i, s, a, l) {
  ((xi = !1), (ga = null), Kx.apply(Qx, arguments));
}
function qx(e, t, n, r, o, i, s, a, l) {
  if ((Gx.apply(this, arguments), xi)) {
    if (xi) {
      var c = ga;
      ((xi = !1), (ga = null));
    } else throw Error(_(198));
    va || ((va = !0), (Uc = c));
  }
}
function Hr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Th(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mf(e) {
  if (Hr(e) !== e) throw Error(_(188));
}
function Yx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hr(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Mf(o), e);
        if (i === r) return (Mf(o), t);
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          ((s = !0), (n = o), (r = i));
          break;
        }
        if (a === r) {
          ((s = !0), (r = o), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((s = !0), (n = i), (r = o));
            break;
          }
          if (a === r) {
            ((s = !0), (r = i), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function jh(e) {
  return ((e = Yx(e)), e !== null ? Ph(e) : null);
}
function Ph(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ph(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rh = gt.unstable_scheduleCallback,
  Df = gt.unstable_cancelCallback,
  Xx = gt.unstable_shouldYield,
  Jx = gt.unstable_requestPaint,
  Ce = gt.unstable_now,
  Zx = gt.unstable_getCurrentPriorityLevel,
  id = gt.unstable_ImmediatePriority,
  Ah = gt.unstable_UserBlockingPriority,
  ya = gt.unstable_NormalPriority,
  ew = gt.unstable_LowPriority,
  Oh = gt.unstable_IdlePriority,
  Ja = null,
  on = null;
function tw(e) {
  if (on && typeof on.onCommitFiberRoot == "function")
    try {
      on.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : ow,
  nw = Math.log,
  rw = Math.LN2;
function ow(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((nw(e) / rw) | 0)) | 0);
}
var Ns = 64,
  Ts = 4194304;
function mi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = mi(a)) : ((i &= s), i !== 0 && (r = mi(i)));
  } else ((s = n & ~o), s !== 0 ? (r = mi(s)) : i !== 0 && (r = mi(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Vt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function iw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - Vt(i),
      a = 1 << s,
      l = o[s];
    (l === -1
      ? (!(a & n) || a & r) && (o[s] = iw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Vc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _h() {
  var e = Ns;
  return ((Ns <<= 1), !(Ns & 4194240) && (Ns = 64), e);
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ss(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n));
}
function aw(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Vt(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function sd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var ie = 0;
function Ih(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Lh,
  ad,
  Mh,
  Dh,
  Fh,
  Hc = !1,
  js = [],
  Zn = null,
  er = null,
  tr = null,
  Oi = new Map(),
  _i = new Map(),
  Bn = [],
  lw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ff(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zn = null;
      break;
    case "dragenter":
    case "dragleave":
      er = null;
      break;
    case "mouseover":
    case "mouseout":
      tr = null;
      break;
    case "pointerover":
    case "pointerout":
      Oi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function ni(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ls(t)), t !== null && ad(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function cw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Zn = ni(Zn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((er = ni(er, e, t, n, r, o)), !0);
    case "mouseover":
      return ((tr = ni(tr, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (Oi.set(i, ni(Oi.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        _i.set(i, ni(_i.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function zh(e) {
  var t = Er(e.target);
  if (t !== null) {
    var n = Hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Th(n)), t !== null)) {
          ((e.blockedOn = t),
            Fh(e.priority, function () {
              Mh(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((zc = r), n.target.dispatchEvent(r), (zc = null));
    } else return ((t = ls(n)), t !== null && ad(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function zf(e, t, n) {
  Xs(e) && n.delete(t);
}
function uw() {
  ((Hc = !1),
    Zn !== null && Xs(Zn) && (Zn = null),
    er !== null && Xs(er) && (er = null),
    tr !== null && Xs(tr) && (tr = null),
    Oi.forEach(zf),
    _i.forEach(zf));
}
function ri(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Hc ||
      ((Hc = !0),
      gt.unstable_scheduleCallback(gt.unstable_NormalPriority, uw)));
}
function Ii(e) {
  function t(o) {
    return ri(o, e);
  }
  if (0 < js.length) {
    ri(js[0], e);
    for (var n = 1; n < js.length; n++) {
      var r = js[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zn !== null && ri(Zn, e),
      er !== null && ri(er, e),
      tr !== null && ri(tr, e),
      Oi.forEach(t),
      _i.forEach(t),
      n = 0;
    n < Bn.length;
    n++
  )
    ((r = Bn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Bn.length && ((n = Bn[0]), n.blockedOn === null); )
    (zh(n), n.blockedOn === null && Bn.shift());
}
var vo = Tn.ReactCurrentBatchConfig,
  wa = !0;
function dw(e, t, n, r) {
  var o = ie,
    i = vo.transition;
  vo.transition = null;
  try {
    ((ie = 1), ld(e, t, n, r));
  } finally {
    ((ie = o), (vo.transition = i));
  }
}
function fw(e, t, n, r) {
  var o = ie,
    i = vo.transition;
  vo.transition = null;
  try {
    ((ie = 4), ld(e, t, n, r));
  } finally {
    ((ie = o), (vo.transition = i));
  }
}
function ld(e, t, n, r) {
  if (wa) {
    var o = Wc(e, t, n, r);
    if (o === null) (ql(e, t, r, ba, n), Ff(e, r));
    else if (cw(o, e, t, n, r)) r.stopPropagation();
    else if ((Ff(e, r), t & 4 && -1 < lw.indexOf(e))) {
      for (; o !== null; ) {
        var i = ls(o);
        if (
          (i !== null && Lh(i),
          (i = Wc(e, t, n, r)),
          i === null && ql(e, t, r, ba, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var ba = null;
function Wc(e, t, n, r) {
  if (((ba = null), (e = od(r)), (e = Er(e)), e !== null))
    if (((t = Hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Th(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ba = e), null);
}
function $h(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zx()) {
        case id:
          return 1;
        case Ah:
          return 4;
        case ya:
        case ew:
          return 16;
        case Oh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gn = null,
  cd = null,
  Js = null;
function Bh() {
  if (Js) return Js;
  var e,
    t = cd,
    n = t.length,
    r,
    o = "value" in Gn ? Gn.value : Gn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Js = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Zs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ps() {
  return !0;
}
function $f() {
  return !1;
}
function yt(e) {
  function t(n, r, o, i, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ps
        : $f),
      (this.isPropagationStopped = $f),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ps));
      },
      persist: function () {},
      isPersistent: Ps,
    }),
    t
  );
}
var Vo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ud = yt(Vo),
  as = xe({}, Vo, { view: 0, detail: 0 }),
  pw = yt(as),
  $l,
  Bl,
  oi,
  Za = xe({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== oi &&
            (oi && e.type === "mousemove"
              ? (($l = e.screenX - oi.screenX), (Bl = e.screenY - oi.screenY))
              : (Bl = $l = 0),
            (oi = e)),
          $l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  Bf = yt(Za),
  mw = xe({}, Za, { dataTransfer: 0 }),
  hw = yt(mw),
  gw = xe({}, as, { relatedTarget: 0 }),
  Ul = yt(gw),
  vw = xe({}, Vo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yw = yt(vw),
  xw = xe({}, Vo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ww = yt(xw),
  bw = xe({}, Vo, { data: 0 }),
  Uf = yt(bw),
  Sw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ew = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Cw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function kw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cw[e]) ? !!t[e] : !1;
}
function dd() {
  return kw;
}
var Nw = xe({}, as, {
    key: function (e) {
      if (e.key) {
        var t = Sw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Ew[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dd,
    charCode: function (e) {
      return e.type === "keypress" ? Zs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Tw = yt(Nw),
  jw = xe({}, Za, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vf = yt(jw),
  Pw = xe({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dd,
  }),
  Rw = yt(Pw),
  Aw = xe({}, Vo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ow = yt(Aw),
  _w = xe({}, Za, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Iw = yt(_w),
  Lw = [9, 13, 27, 32],
  fd = wn && "CompositionEvent" in window,
  wi = null;
wn && "documentMode" in document && (wi = document.documentMode);
var Mw = wn && "TextEvent" in window && !wi,
  Uh = wn && (!fd || (wi && 8 < wi && 11 >= wi)),
  Hf = " ",
  Wf = !1;
function Vh(e, t) {
  switch (e) {
    case "keyup":
      return Lw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ro = !1;
function Dw(e, t) {
  switch (e) {
    case "compositionend":
      return Hh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wf = !0), Hf);
    case "textInput":
      return ((e = t.data), e === Hf && Wf ? null : e);
    default:
      return null;
  }
}
function Fw(e, t) {
  if (ro)
    return e === "compositionend" || (!fd && Vh(e, t))
      ? ((e = Bh()), (Js = cd = Gn = null), (ro = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Uh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zw[e.type] : t === "textarea";
}
function Wh(e, t, n, r) {
  (Sh(r),
    (t = Sa(t, "onChange")),
    0 < t.length &&
      ((n = new ud("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var bi = null,
  Li = null;
function $w(e) {
  ng(e, 0);
}
function el(e) {
  var t = so(e);
  if (hh(t)) return e;
}
function Bw(e, t) {
  if (e === "change") return t;
}
var Kh = !1;
if (wn) {
  var Vl;
  if (wn) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Qf = document.createElement("div");
      (Qf.setAttribute("oninput", "return;"),
        (Hl = typeof Qf.oninput == "function"));
    }
    Vl = Hl;
  } else Vl = !1;
  Kh = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Gf() {
  bi && (bi.detachEvent("onpropertychange", Qh), (Li = bi = null));
}
function Qh(e) {
  if (e.propertyName === "value" && el(Li)) {
    var t = [];
    (Wh(t, Li, e, od(e)), Nh($w, t));
  }
}
function Uw(e, t, n) {
  e === "focusin"
    ? (Gf(), (bi = t), (Li = n), bi.attachEvent("onpropertychange", Qh))
    : e === "focusout" && Gf();
}
function Vw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return el(Li);
}
function Hw(e, t) {
  if (e === "click") return el(t);
}
function Ww(e, t) {
  if (e === "input" || e === "change") return el(t);
}
function Kw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Kt = typeof Object.is == "function" ? Object.is : Kw;
function Mi(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Tc.call(t, o) || !Kt(e[o], t[o])) return !1;
  }
  return !0;
}
function qf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yf(e, t) {
  var n = qf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qf(n);
  }
}
function Gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function qh() {
  for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ha(e.document);
  }
  return t;
}
function pd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qw(e) {
  var t = qh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Yf(n, i)));
        var s = Yf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Gw = wn && "documentMode" in document && 11 >= document.documentMode,
  oo = null,
  Kc = null,
  Si = null,
  Qc = !1;
function Xf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qc ||
    oo == null ||
    oo !== ha(r) ||
    ((r = oo),
    "selectionStart" in r && pd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Si && Mi(Si, r)) ||
      ((Si = r),
      (r = Sa(Kc, "onSelect")),
      0 < r.length &&
        ((t = new ud("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = oo))));
}
function Rs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var io = {
    animationend: Rs("Animation", "AnimationEnd"),
    animationiteration: Rs("Animation", "AnimationIteration"),
    animationstart: Rs("Animation", "AnimationStart"),
    transitionend: Rs("Transition", "TransitionEnd"),
  },
  Wl = {},
  Yh = {};
wn &&
  ((Yh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete io.animationend.animation,
    delete io.animationiteration.animation,
    delete io.animationstart.animation),
  "TransitionEvent" in window || delete io.transitionend.transition);
function tl(e) {
  if (Wl[e]) return Wl[e];
  if (!io[e]) return e;
  var t = io[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yh) return (Wl[e] = t[n]);
  return e;
}
var Xh = tl("animationend"),
  Jh = tl("animationiteration"),
  Zh = tl("animationstart"),
  eg = tl("transitionend"),
  tg = new Map(),
  Jf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function mr(e, t) {
  (tg.set(e, t), Vr(t, [e]));
}
for (var Kl = 0; Kl < Jf.length; Kl++) {
  var Ql = Jf[Kl],
    qw = Ql.toLowerCase(),
    Yw = Ql[0].toUpperCase() + Ql.slice(1);
  mr(qw, "on" + Yw);
}
mr(Xh, "onAnimationEnd");
mr(Jh, "onAnimationIteration");
mr(Zh, "onAnimationStart");
mr("dblclick", "onDoubleClick");
mr("focusin", "onFocus");
mr("focusout", "onBlur");
mr(eg, "onTransitionEnd");
_o("onMouseEnter", ["mouseout", "mouseover"]);
_o("onMouseLeave", ["mouseout", "mouseover"]);
_o("onPointerEnter", ["pointerout", "pointerover"]);
_o("onPointerLeave", ["pointerout", "pointerover"]);
Vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var hi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Xw = new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));
function Zf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), qx(r, t, void 0, e), (e.currentTarget = null));
}
function ng(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          (Zf(o, a, c), (i = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          (Zf(o, a, c), (i = l));
        }
    }
  }
  if (va) throw ((e = Uc), (va = !1), (Uc = null), e);
}
function fe(e, t) {
  var n = t[Jc];
  n === void 0 && (n = t[Jc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rg(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  (t && (r |= 4), rg(n, e, r, t));
}
var As = "_reactListening" + Math.random().toString(36).slice(2);
function Di(e) {
  if (!e[As]) {
    ((e[As] = !0),
      uh.forEach(function (n) {
        n !== "selectionchange" && (Xw.has(n) || Gl(n, !1, e), Gl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[As] || ((t[As] = !0), Gl("selectionchange", !1, t));
  }
}
function rg(e, t, n, r) {
  switch ($h(t)) {
    case 1:
      var o = dw;
      break;
    case 4:
      o = fw;
      break;
    default:
      o = ld;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Bc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function ql(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Er(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Nh(function () {
    var c = i,
      d = od(n),
      f = [];
    e: {
      var m = tg.get(e);
      if (m !== void 0) {
        var p = ud,
          b = e;
        switch (e) {
          case "keypress":
            if (Zs(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Tw;
            break;
          case "focusin":
            ((b = "focus"), (p = Ul));
            break;
          case "focusout":
            ((b = "blur"), (p = Ul));
            break;
          case "beforeblur":
          case "afterblur":
            p = Ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = hw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Rw;
            break;
          case Xh:
          case Jh:
          case Zh:
            p = yw;
            break;
          case eg:
            p = Ow;
            break;
          case "scroll":
            p = pw;
            break;
          case "wheel":
            p = Iw;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = ww;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Vf;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          h = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var v = c, w; v !== null; ) {
          w = v;
          var S = w.stateNode;
          if (
            (w.tag === 5 &&
              S !== null &&
              ((w = S),
              h !== null && ((S = Ai(v, h)), S != null && g.push(Fi(v, S, w)))),
            x)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((m = new p(m, b, null, n, d)), f.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          m &&
            n !== zc &&
            (b = n.relatedTarget || n.fromElement) &&
            (Er(b) || b[bn]))
        )
          break e;
        if (
          (p || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          p
            ? ((b = n.relatedTarget || n.toElement),
              (p = c),
              (b = b ? Er(b) : null),
              b !== null &&
                ((x = Hr(b)), b !== x || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((p = null), (b = c)),
          p !== b)
        ) {
          if (
            ((g = Bf),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Vf),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (v = "pointer")),
            (x = p == null ? m : so(p)),
            (w = b == null ? m : so(b)),
            (m = new g(S, v + "leave", p, n, d)),
            (m.target = x),
            (m.relatedTarget = w),
            (S = null),
            Er(d) === c &&
              ((g = new g(h, v + "enter", b, n, d)),
              (g.target = w),
              (g.relatedTarget = x),
              (S = g)),
            (x = S),
            p && b)
          )
            t: {
              for (g = p, h = b, v = 0, w = g; w; w = qr(w)) v++;
              for (w = 0, S = h; S; S = qr(S)) w++;
              for (; 0 < v - w; ) ((g = qr(g)), v--);
              for (; 0 < w - v; ) ((h = qr(h)), w--);
              for (; v--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                ((g = qr(g)), (h = qr(h)));
              }
              g = null;
            }
          else g = null;
          (p !== null && ep(f, m, p, g, !1),
            b !== null && x !== null && ep(f, x, b, g, !0));
        }
      }
      e: {
        if (
          ((m = c ? so(c) : window),
          (p = m.nodeName && m.nodeName.toLowerCase()),
          p === "select" || (p === "input" && m.type === "file"))
        )
          var E = Bw;
        else if (Kf(m))
          if (Kh) E = Ww;
          else {
            E = Vw;
            var C = Uw;
          }
        else
          (p = m.nodeName) &&
            p.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Hw);
        if (E && (E = E(e, c))) {
          Wh(f, E, n, d);
          break e;
        }
        (C && C(e, m, c),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Ic(m, "number", m.value));
      }
      switch (((C = c ? so(c) : window), e)) {
        case "focusin":
          (Kf(C) || C.contentEditable === "true") &&
            ((oo = C), (Kc = c), (Si = null));
          break;
        case "focusout":
          Si = Kc = oo = null;
          break;
        case "mousedown":
          Qc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Qc = !1), Xf(f, n, d));
          break;
        case "selectionchange":
          if (Gw) break;
        case "keydown":
        case "keyup":
          Xf(f, n, d);
      }
      var k;
      if (fd)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        ro
          ? Vh(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      (N &&
        (Uh &&
          n.locale !== "ko" &&
          (ro || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && ro && (k = Bh())
            : ((Gn = d),
              (cd = "value" in Gn ? Gn.value : Gn.textContent),
              (ro = !0))),
        (C = Sa(c, N)),
        0 < C.length &&
          ((N = new Uf(N, e, null, n, d)),
          f.push({ event: N, listeners: C }),
          k ? (N.data = k) : ((k = Hh(n)), k !== null && (N.data = k)))),
        (k = Mw ? Dw(e, n) : Fw(e, n)) &&
          ((c = Sa(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Uf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = k))));
    }
    ng(f, t);
  });
}
function Fi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Sa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ai(e, n)),
      i != null && r.unshift(Fi(e, i, o)),
      (i = Ai(e, t)),
      i != null && r.push(Fi(e, i, o))),
      (e = e.return));
  }
  return r;
}
function qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ep(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((l = Ai(n, i)), l != null && s.unshift(Fi(n, l, a)))
        : o || ((l = Ai(n, i)), l != null && s.push(Fi(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Jw = /\r\n?/g,
  Zw = /\u0000|\uFFFD/g;
function tp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jw,
      `
`,
    )
    .replace(Zw, "");
}
function Os(e, t, n) {
  if (((t = tp(t)), tp(e) !== t && n)) throw Error(_(425));
}
function Ea() {}
var Gc = null,
  qc = null;
function Yc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xc = typeof setTimeout == "function" ? setTimeout : void 0,
  e1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  np = typeof Promise == "function" ? Promise : void 0,
  t1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof np < "u"
        ? function (e) {
            return np.resolve(null).then(e).catch(n1);
          }
        : Xc;
function n1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Ii(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ii(t);
}
function nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ho = Math.random().toString(36).slice(2),
  nn = "__reactFiber$" + Ho,
  zi = "__reactProps$" + Ho,
  bn = "__reactContainer$" + Ho,
  Jc = "__reactEvents$" + Ho,
  r1 = "__reactListeners$" + Ho,
  o1 = "__reactHandles$" + Ho;
function Er(e) {
  var t = e[nn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bn] || n[nn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rp(e); e !== null; ) {
          if ((n = e[nn])) return n;
          e = rp(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ls(e) {
  return (
    (e = e[nn] || e[bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function so(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function nl(e) {
  return e[zi] || null;
}
var Zc = [],
  ao = -1;
function hr(e) {
  return { current: e };
}
function pe(e) {
  0 > ao || ((e.current = Zc[ao]), (Zc[ao] = null), ao--);
}
function ce(e, t) {
  (ao++, (Zc[ao] = e.current), (e.current = t));
}
var cr = {},
  We = hr(cr),
  it = hr(!1),
  Lr = cr;
function Io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function st(e) {
  return ((e = e.childContextTypes), e != null);
}
function Ca() {
  (pe(it), pe(We));
}
function op(e, t, n) {
  if (We.current !== cr) throw Error(_(168));
  (ce(We, t), ce(it, n));
}
function og(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, Ux(e) || "Unknown", o));
  return xe({}, n, r);
}
function ka(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cr),
    (Lr = We.current),
    ce(We, e),
    ce(it, it.current),
    !0
  );
}
function ip(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  (n
    ? ((e = og(e, t, Lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(it),
      pe(We),
      ce(We, e))
    : pe(it),
    ce(it, n));
}
var hn = null,
  rl = !1,
  Xl = !1;
function ig(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function i1(e) {
  ((rl = !0), ig(e));
}
function gr() {
  if (!Xl && hn !== null) {
    Xl = !0;
    var e = 0,
      t = ie;
    try {
      var n = hn;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((hn = null), (rl = !1));
    } catch (o) {
      throw (hn !== null && (hn = hn.slice(e + 1)), Rh(id, gr), o);
    } finally {
      ((ie = t), (Xl = !1));
    }
  }
  return null;
}
var lo = [],
  co = 0,
  Na = null,
  Ta = 0,
  bt = [],
  St = 0,
  Mr = null,
  vn = 1,
  yn = "";
function wr(e, t) {
  ((lo[co++] = Ta), (lo[co++] = Na), (Na = e), (Ta = t));
}
function sg(e, t, n) {
  ((bt[St++] = vn), (bt[St++] = yn), (bt[St++] = Mr), (Mr = e));
  var r = vn;
  e = yn;
  var o = 32 - Vt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - Vt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (vn = (1 << (32 - Vt(t) + o)) | (n << o) | r),
      (yn = i + e));
  } else ((vn = (1 << i) | (n << o) | r), (yn = e));
}
function md(e) {
  e.return !== null && (wr(e, 1), sg(e, 1, 0));
}
function hd(e) {
  for (; e === Na; )
    ((Na = lo[--co]), (lo[co] = null), (Ta = lo[--co]), (lo[co] = null));
  for (; e === Mr; )
    ((Mr = bt[--St]),
      (bt[St] = null),
      (yn = bt[--St]),
      (bt[St] = null),
      (vn = bt[--St]),
      (bt[St] = null));
}
var mt = null,
  pt = null,
  me = !1,
  Bt = null;
function ag(e, t) {
  var n = Et(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function sp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (mt = e), (pt = nr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (mt = e), (pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mr !== null ? { id: vn, overflow: yn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (mt = e),
            (pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tu(e) {
  if (me) {
    var t = pt;
    if (t) {
      var n = t;
      if (!sp(e, t)) {
        if (eu(e)) throw Error(_(418));
        t = nr(n.nextSibling);
        var r = mt;
        t && sp(e, t)
          ? ag(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (mt = e));
      }
    } else {
      if (eu(e)) throw Error(_(418));
      ((e.flags = (e.flags & -4097) | 2), (me = !1), (mt = e));
    }
  }
}
function ap(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  mt = e;
}
function _s(e) {
  if (e !== mt) return !1;
  if (!me) return (ap(e), (me = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Yc(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if (eu(e)) throw (lg(), Error(_(418)));
    for (; t; ) (ag(e, t), (t = nr(t.nextSibling)));
  }
  if ((ap(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = nr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = mt ? nr(e.stateNode.nextSibling) : null;
  return !0;
}
function lg() {
  for (var e = pt; e; ) e = nr(e.nextSibling);
}
function Lo() {
  ((pt = mt = null), (me = !1));
}
function gd(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
var s1 = Tn.ReactCurrentBatchConfig;
function ii(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Is(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function lp(e) {
  var t = e._init;
  return t(e._payload);
}
function cg(e) {
  function t(h, v) {
    if (e) {
      var w = h.deletions;
      w === null ? ((h.deletions = [v]), (h.flags |= 16)) : w.push(v);
    }
  }
  function n(h, v) {
    if (!e) return null;
    for (; v !== null; ) (t(h, v), (v = v.sibling));
    return null;
  }
  function r(h, v) {
    for (h = new Map(); v !== null; )
      (v.key !== null ? h.set(v.key, v) : h.set(v.index, v), (v = v.sibling));
    return h;
  }
  function o(h, v) {
    return ((h = sr(h, v)), (h.index = 0), (h.sibling = null), h);
  }
  function i(h, v, w) {
    return (
      (h.index = w),
      e
        ? ((w = h.alternate),
          w !== null
            ? ((w = w.index), w < v ? ((h.flags |= 2), v) : w)
            : ((h.flags |= 2), v))
        : ((h.flags |= 1048576), v)
    );
  }
  function s(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function a(h, v, w, S) {
    return v === null || v.tag !== 6
      ? ((v = oc(w, h.mode, S)), (v.return = h), v)
      : ((v = o(v, w)), (v.return = h), v);
  }
  function l(h, v, w, S) {
    var E = w.type;
    return E === no
      ? d(h, v, w.props.children, S, w.key)
      : v !== null &&
          (v.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === zn &&
              lp(E) === v.type))
        ? ((S = o(v, w.props)), (S.ref = ii(h, v, w)), (S.return = h), S)
        : ((S = sa(w.type, w.key, w.props, null, h.mode, S)),
          (S.ref = ii(h, v, w)),
          (S.return = h),
          S);
  }
  function c(h, v, w, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== w.containerInfo ||
      v.stateNode.implementation !== w.implementation
      ? ((v = ic(w, h.mode, S)), (v.return = h), v)
      : ((v = o(v, w.children || [])), (v.return = h), v);
  }
  function d(h, v, w, S, E) {
    return v === null || v.tag !== 7
      ? ((v = Ir(w, h.mode, S, E)), (v.return = h), v)
      : ((v = o(v, w)), (v.return = h), v);
  }
  function f(h, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((v = oc("" + v, h.mode, w)), (v.return = h), v);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Es:
          return (
            (w = sa(v.type, v.key, v.props, null, h.mode, w)),
            (w.ref = ii(h, null, v)),
            (w.return = h),
            w
          );
        case to:
          return ((v = ic(v, h.mode, w)), (v.return = h), v);
        case zn:
          var S = v._init;
          return f(h, S(v._payload), w);
      }
      if (pi(v) || ei(v))
        return ((v = Ir(v, h.mode, w, null)), (v.return = h), v);
      Is(h, v);
    }
    return null;
  }
  function m(h, v, w, S) {
    var E = v !== null ? v.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return E !== null ? null : a(h, v, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Es:
          return w.key === E ? l(h, v, w, S) : null;
        case to:
          return w.key === E ? c(h, v, w, S) : null;
        case zn:
          return ((E = w._init), m(h, v, E(w._payload), S));
      }
      if (pi(w) || ei(w)) return E !== null ? null : d(h, v, w, S, null);
      Is(h, w);
    }
    return null;
  }
  function p(h, v, w, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((h = h.get(w) || null), a(v, h, "" + S, E));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Es:
          return (
            (h = h.get(S.key === null ? w : S.key) || null),
            l(v, h, S, E)
          );
        case to:
          return (
            (h = h.get(S.key === null ? w : S.key) || null),
            c(v, h, S, E)
          );
        case zn:
          var C = S._init;
          return p(h, v, w, C(S._payload), E);
      }
      if (pi(S) || ei(S)) return ((h = h.get(w) || null), d(v, h, S, E, null));
      Is(v, S);
    }
    return null;
  }
  function b(h, v, w, S) {
    for (
      var E = null, C = null, k = v, N = (v = 0), R = null;
      k !== null && N < w.length;
      N++
    ) {
      k.index > N ? ((R = k), (k = null)) : (R = k.sibling);
      var A = m(h, k, w[N], S);
      if (A === null) {
        k === null && (k = R);
        break;
      }
      (e && k && A.alternate === null && t(h, k),
        (v = i(A, v, N)),
        C === null ? (E = A) : (C.sibling = A),
        (C = A),
        (k = R));
    }
    if (N === w.length) return (n(h, k), me && wr(h, N), E);
    if (k === null) {
      for (; N < w.length; N++)
        ((k = f(h, w[N], S)),
          k !== null &&
            ((v = i(k, v, N)),
            C === null ? (E = k) : (C.sibling = k),
            (C = k)));
      return (me && wr(h, N), E);
    }
    for (k = r(h, k); N < w.length; N++)
      ((R = p(k, h, N, w[N], S)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? N : R.key),
          (v = i(R, v, N)),
          C === null ? (E = R) : (C.sibling = R),
          (C = R)));
    return (
      e &&
        k.forEach(function (D) {
          return t(h, D);
        }),
      me && wr(h, N),
      E
    );
  }
  function g(h, v, w, S) {
    var E = ei(w);
    if (typeof E != "function") throw Error(_(150));
    if (((w = E.call(w)), w == null)) throw Error(_(151));
    for (
      var C = (E = null), k = v, N = (v = 0), R = null, A = w.next();
      k !== null && !A.done;
      N++, A = w.next()
    ) {
      k.index > N ? ((R = k), (k = null)) : (R = k.sibling);
      var D = m(h, k, A.value, S);
      if (D === null) {
        k === null && (k = R);
        break;
      }
      (e && k && D.alternate === null && t(h, k),
        (v = i(D, v, N)),
        C === null ? (E = D) : (C.sibling = D),
        (C = D),
        (k = R));
    }
    if (A.done) return (n(h, k), me && wr(h, N), E);
    if (k === null) {
      for (; !A.done; N++, A = w.next())
        ((A = f(h, A.value, S)),
          A !== null &&
            ((v = i(A, v, N)),
            C === null ? (E = A) : (C.sibling = A),
            (C = A)));
      return (me && wr(h, N), E);
    }
    for (k = r(h, k); !A.done; N++, A = w.next())
      ((A = p(k, h, N, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? N : A.key),
          (v = i(A, v, N)),
          C === null ? (E = A) : (C.sibling = A),
          (C = A)));
    return (
      e &&
        k.forEach(function (L) {
          return t(h, L);
        }),
      me && wr(h, N),
      E
    );
  }
  function x(h, v, w, S) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === no &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Es:
          e: {
            for (var E = w.key, C = v; C !== null; ) {
              if (C.key === E) {
                if (((E = w.type), E === no)) {
                  if (C.tag === 7) {
                    (n(h, C.sibling),
                      (v = o(C, w.props.children)),
                      (v.return = h),
                      (h = v));
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === zn &&
                    lp(E) === C.type)
                ) {
                  (n(h, C.sibling),
                    (v = o(C, w.props)),
                    (v.ref = ii(h, C, w)),
                    (v.return = h),
                    (h = v));
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            w.type === no
              ? ((v = Ir(w.props.children, h.mode, S, w.key)),
                (v.return = h),
                (h = v))
              : ((S = sa(w.type, w.key, w.props, null, h.mode, S)),
                (S.ref = ii(h, v, w)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case to:
          e: {
            for (C = w.key; v !== null; ) {
              if (v.key === C)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === w.containerInfo &&
                  v.stateNode.implementation === w.implementation
                ) {
                  (n(h, v.sibling),
                    (v = o(v, w.children || [])),
                    (v.return = h),
                    (h = v));
                  break e;
                } else {
                  n(h, v);
                  break;
                }
              else t(h, v);
              v = v.sibling;
            }
            ((v = ic(w, h.mode, S)), (v.return = h), (h = v));
          }
          return s(h);
        case zn:
          return ((C = w._init), x(h, v, C(w._payload), S));
      }
      if (pi(w)) return b(h, v, w, S);
      if (ei(w)) return g(h, v, w, S);
      Is(h, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        v !== null && v.tag === 6
          ? (n(h, v.sibling), (v = o(v, w)), (v.return = h), (h = v))
          : (n(h, v), (v = oc(w, h.mode, S)), (v.return = h), (h = v)),
        s(h))
      : n(h, v);
  }
  return x;
}
var Mo = cg(!0),
  ug = cg(!1),
  ja = hr(null),
  Pa = null,
  uo = null,
  vd = null;
function yd() {
  vd = uo = Pa = null;
}
function xd(e) {
  var t = ja.current;
  (pe(ja), (e._currentValue = t));
}
function nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yo(e, t) {
  ((Pa = e),
    (vd = uo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ot = !0), (e.firstContext = null)));
}
function kt(e) {
  var t = e._currentValue;
  if (vd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), uo === null)) {
      if (Pa === null) throw Error(_(308));
      ((uo = e), (Pa.dependencies = { lanes: 0, firstContext: e }));
    } else uo = uo.next = e;
  return t;
}
var Cr = null;
function wd(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function dg(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), wd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Sn(e, r)
  );
}
function Sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var $n = !1;
function bd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fg(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function xn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Sn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), wd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Sn(e, n)
  );
}
function ea(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), sd(e, n));
  }
}
function cp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ra(e, t, n, r) {
  var o = e.updateQueue;
  $n = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), s === null ? (i = c) : (s.next = c), (s = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    ((s = 0), (d = c = l = null), (a = i));
    do {
      var m = a.lane,
        p = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            g = a;
          switch (((m = t), (p = n), g.tag)) {
            case 1:
              if (((b = g.payload), typeof b == "function")) {
                f = b.call(p, f, m);
                break e;
              }
              f = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = g.payload),
                (m = typeof b == "function" ? b.call(p, f, m) : b),
                m == null)
              )
                break e;
              f = xe({}, f, m);
              break e;
            case 2:
              $n = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [a]) : m.push(a));
      } else
        ((p = {
          eventTime: p,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = p), (l = f)) : (d = d.next = p),
          (s |= m));
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        ((m = a),
          (a = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((Fr |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function up(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var cs = {},
  sn = hr(cs),
  $i = hr(cs),
  Bi = hr(cs);
function kr(e) {
  if (e === cs) throw Error(_(174));
  return e;
}
function Sd(e, t) {
  switch ((ce(Bi, t), ce($i, e), ce(sn, cs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mc(t, e)));
  }
  (pe(sn), ce(sn, t));
}
function Do() {
  (pe(sn), pe($i), pe(Bi));
}
function pg(e) {
  kr(Bi.current);
  var t = kr(sn.current),
    n = Mc(t, e.type);
  t !== n && (ce($i, e), ce(sn, n));
}
function Ed(e) {
  $i.current === e && (pe(sn), pe($i));
}
var ge = hr(0);
function Aa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Jl = [];
function Cd() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var ta = Tn.ReactCurrentDispatcher,
  Zl = Tn.ReactCurrentBatchConfig,
  Dr = 0,
  ye = null,
  Re = null,
  _e = null,
  Oa = !1,
  Ei = !1,
  Ui = 0,
  a1 = 0;
function $e() {
  throw Error(_(321));
}
function kd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Kt(e[n], t[n])) return !1;
  return !0;
}
function Nd(e, t, n, r, o, i) {
  if (
    ((Dr = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ta.current = e === null || e.memoizedState === null ? d1 : f1),
    (e = n(r, o)),
    Ei)
  ) {
    i = 0;
    do {
      if (((Ei = !1), (Ui = 0), 25 <= i)) throw Error(_(301));
      ((i += 1),
        (_e = Re = null),
        (t.updateQueue = null),
        (ta.current = p1),
        (e = n(r, o)));
    } while (Ei);
  }
  if (
    ((ta.current = _a),
    (t = Re !== null && Re.next !== null),
    (Dr = 0),
    (_e = Re = ye = null),
    (Oa = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Td() {
  var e = Ui !== 0;
  return ((Ui = 0), e);
}
function Jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (_e === null ? (ye.memoizedState = _e = e) : (_e = _e.next = e), _e);
}
function Nt() {
  if (Re === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = _e === null ? ye.memoizedState : _e.next;
  if (t !== null) ((_e = t), (Re = e));
  else {
    if (e === null) throw Error(_(310));
    ((Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      _e === null ? (ye.memoizedState = _e = e) : (_e = _e.next = e));
  }
  return _e;
}
function Vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ec(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = i.next), (i.next = s));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      c = i;
    do {
      var d = c.lane;
      if ((Dr & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (ye.lanes |= d),
          (Fr |= d));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (l === null ? (s = r) : (l.next = a),
      Kt(r, t.memoizedState) || (ot = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (ye.lanes |= i), (Fr |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tc(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== o);
    (Kt(i, t.memoizedState) || (ot = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function mg() {}
function hg(e, t) {
  var n = ye,
    r = Nt(),
    o = t(),
    i = !Kt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ot = !0)),
    (r = r.queue),
    jd(yg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Hi(9, vg.bind(null, n, r, o, t), void 0, null),
      Ie === null)
    )
      throw Error(_(349));
    Dr & 30 || gg(n, t, o);
  }
  return o;
}
function gg(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function vg(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), xg(t) && wg(e));
}
function yg(e, t, n) {
  return n(function () {
    xg(t) && wg(e);
  });
}
function xg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kt(e, n);
  } catch {
    return !0;
  }
}
function wg(e) {
  var t = Sn(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function dp(e) {
  var t = Jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = u1.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Hi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bg() {
  return Nt().memoizedState;
}
function na(e, t, n, r) {
  var o = Jt();
  ((ye.flags |= e),
    (o.memoizedState = Hi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ol(e, t, n, r) {
  var o = Nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var s = Re.memoizedState;
    if (((i = s.destroy), r !== null && kd(r, s.deps))) {
      o.memoizedState = Hi(t, n, i, r);
      return;
    }
  }
  ((ye.flags |= e), (o.memoizedState = Hi(1 | t, n, i, r)));
}
function fp(e, t) {
  return na(8390656, 8, e, t);
}
function jd(e, t) {
  return ol(2048, 8, e, t);
}
function Sg(e, t) {
  return ol(4, 2, e, t);
}
function Eg(e, t) {
  return ol(4, 4, e, t);
}
function Cg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ol(4, 4, Cg.bind(null, t, e), n)
  );
}
function Pd() {}
function Ng(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tg(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jg(e, t, n) {
  return Dr & 21
    ? (Kt(n, t) || ((n = _h()), (ye.lanes |= n), (Fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ot = !0)), (e.memoizedState = n));
}
function l1(e, t) {
  var n = ie;
  ((ie = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Zl.transition;
  Zl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ie = n), (Zl.transition = r));
  }
}
function Pg() {
  return Nt().memoizedState;
}
function c1(e, t, n) {
  var r = ir(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rg(e))
  )
    Ag(t, n);
  else if (((n = dg(e, t, n, r)), n !== null)) {
    var o = Xe();
    (Ht(n, e, r, o), Og(n, t, r));
  }
}
function u1(e, t, n) {
  var r = ir(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rg(e)) Ag(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Kt(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((o.next = o), wd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = dg(e, t, o, r)),
      n !== null && ((o = Xe()), Ht(n, e, r, o), Og(n, t, r)));
  }
}
function Rg(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Ag(e, t) {
  Ei = Oa = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Og(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), sd(e, n));
  }
}
var _a = {
    readContext: kt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1,
  },
  d1 = {
    readContext: kt,
    useCallback: function (e, t) {
      return ((Jt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: kt,
    useEffect: fp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        na(4194308, 4, Cg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return na(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return na(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = c1.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: dp,
    useDebugValue: Pd,
    useDeferredValue: function (e) {
      return (Jt().memoizedState = e);
    },
    useTransition: function () {
      var e = dp(!1),
        t = e[0];
      return ((e = l1.bind(null, e[1])), (Jt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = Jt();
      if (me) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(_(349));
        Dr & 30 || gg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        fp(yg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Hi(9, vg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jt(),
        t = Ie.identifierPrefix;
      if (me) {
        var n = yn,
          r = vn;
        ((n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ui++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = a1++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  f1 = {
    readContext: kt,
    useCallback: Ng,
    useContext: kt,
    useEffect: jd,
    useImperativeHandle: kg,
    useInsertionEffect: Sg,
    useLayoutEffect: Eg,
    useMemo: Tg,
    useReducer: ec,
    useRef: bg,
    useState: function () {
      return ec(Vi);
    },
    useDebugValue: Pd,
    useDeferredValue: function (e) {
      var t = Nt();
      return jg(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = ec(Vi)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: mg,
    useSyncExternalStore: hg,
    useId: Pg,
    unstable_isNewReconciler: !1,
  },
  p1 = {
    readContext: kt,
    useCallback: Ng,
    useContext: kt,
    useEffect: jd,
    useImperativeHandle: kg,
    useInsertionEffect: Sg,
    useLayoutEffect: Eg,
    useMemo: Tg,
    useReducer: tc,
    useRef: bg,
    useState: function () {
      return tc(Vi);
    },
    useDebugValue: Pd,
    useDeferredValue: function (e) {
      var t = Nt();
      return Re === null ? (t.memoizedState = e) : jg(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = tc(Vi)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: mg,
    useSyncExternalStore: hg,
    useId: Pg,
    unstable_isNewReconciler: !1,
  };
function Mt(e, t) {
  if (e && e.defaultProps) {
    ((t = xe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ru(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      o = ir(e),
      i = xn(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = rr(e, i, o)),
      t !== null && (Ht(t, e, o, r), ea(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      o = ir(e),
      i = xn(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = rr(e, i, o)),
      t !== null && (Ht(t, e, o, r), ea(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xe(),
      r = ir(e),
      o = xn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = rr(e, o, r)),
      t !== null && (Ht(t, e, r, n), ea(t, e, r)));
  },
};
function pp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Mi(n, r) || !Mi(o, i)
        : !0
  );
}
function _g(e, t, n) {
  var r = !1,
    o = cr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = kt(i))
      : ((o = st(t) ? Lr : We.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Io(e, o) : cr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = il),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function mp(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && il.enqueueReplaceState(t, t.state, null));
}
function ou(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), bd(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = kt(i))
    : ((i = st(t) ? Lr : We.current), (o.context = Io(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ru(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && il.enqueueReplaceState(o, o.state, null),
      Ra(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Fo(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Bx(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var m1 = typeof WeakMap == "function" ? WeakMap : Map;
function Ig(e, t, n) {
  ((n = xn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (La || ((La = !0), (hu = r)), iu(e, t));
    }),
    n
  );
}
function Lg(e, t, n) {
  ((n = xn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        iu(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (iu(e, t),
          typeof r != "function" &&
            (or === null ? (or = new Set([this])) : or.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function hp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new m1();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = j1.bind(null, e, t, n)), t.then(e, e));
}
function gp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xn(-1, 1)), (t.tag = 2), rr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var h1 = Tn.ReactCurrentOwner,
  ot = !1;
function qe(e, t, n, r) {
  t.child = e === null ? ug(t, null, n, r) : Mo(t, e.child, n, r);
}
function yp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    yo(t, o),
    (r = Nd(e, t, n, r, i, o)),
    (n = Td()),
    e !== null && !ot
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        En(e, t, o))
      : (me && n && md(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  );
}
function xp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Dd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Mg(e, t, i, r, o))
      : ((e = sa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mi), n(s, r) && e.ref === t.ref)
    )
      return En(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = sr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mi(i, r) && e.ref === t.ref)
      if (((ot = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ot = !0);
      else return ((t.lanes = e.lanes), En(e, t, o));
  }
  return su(e, t, n, r, o);
}
function Dg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(po, ut),
        (ut |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(po, ut),
          (ut |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ce(po, ut),
        (ut |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(po, ut),
      (ut |= r));
  return (qe(e, t, o, n), t.child);
}
function Fg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function su(e, t, n, r, o) {
  var i = st(n) ? Lr : We.current;
  return (
    (i = Io(t, i)),
    yo(t, o),
    (n = Nd(e, t, n, r, i, o)),
    (r = Td()),
    e !== null && !ot
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        En(e, t, o))
      : (me && r && md(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  );
}
function wp(e, t, n, r, o) {
  if (st(n)) {
    var i = !0;
    ka(t);
  } else i = !1;
  if ((yo(t, o), t.stateNode === null))
    (ra(e, t), _g(t, n, r), ou(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = kt(c))
      : ((c = st(n) ? Lr : We.current), (c = Io(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && mp(t, s, r, c)),
      ($n = !1));
    var m = t.memoizedState;
    ((s.state = m),
      Ra(t, r, s, o),
      (l = t.memoizedState),
      a !== r || m !== l || it.current || $n
        ? (typeof d == "function" && (ru(t, n, d, r), (l = t.memoizedState)),
          (a = $n || pp(t, n, a, r, m, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      fg(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Mt(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (m = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = kt(l))
        : ((l = st(n) ? Lr : We.current), (l = Io(t, l))));
    var p = n.getDerivedStateFromProps;
    ((d =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || m !== l) && mp(t, s, r, l)),
      ($n = !1),
      (m = t.memoizedState),
      (s.state = m),
      Ra(t, r, s, o));
    var b = t.memoizedState;
    a !== f || m !== b || it.current || $n
      ? (typeof p == "function" && (ru(t, n, p, r), (b = t.memoizedState)),
        (c = $n || pp(t, n, c, r, m, b, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, b, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, b, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (s.props = r),
        (s.state = b),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return au(e, t, n, r, i, o);
}
function au(e, t, n, r, o, i) {
  Fg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && ip(t, n, !1), En(e, t, i));
  ((r = t.stateNode), (h1.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Mo(t, e.child, null, i)), (t.child = Mo(t, null, a, i)))
      : qe(e, t, a, i),
    (t.memoizedState = r.state),
    o && ip(t, n, !0),
    t.child
  );
}
function zg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? op(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && op(e, t.context, !1),
    Sd(e, t.containerInfo));
}
function bp(e, t, n, r, o) {
  return (Lo(), gd(o), (t.flags |= 256), qe(e, t, n, r), t.child);
}
var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $g(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ce(ge, o & 1),
    e === null)
  )
    return (
      tu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ll(s, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = cu(n)),
              (t.memoizedState = lu),
              e)
            : Rd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return g1(e, t, s, r, a, o, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = sr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = sr(a, i)) : ((i = Ir(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? cu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = lu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = sr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Rd(e, t) {
  return (
    (t = ll({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ls(e, t, n, r) {
  return (
    r !== null && gd(r),
    Mo(t, e.child, null, n),
    (e = Rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function g1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = nc(Error(_(422)))), Ls(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ll({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Ir(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Mo(t, e.child, null, s),
          (t.child.memoizedState = cu(s)),
          (t.memoizedState = lu),
          i);
  if (!(t.mode & 1)) return Ls(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(_(419))),
      (r = nc(i, r, void 0)),
      Ls(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), ot || a)) {
    if (((r = Ie), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Sn(e, o), Ht(r, e, o, -1)));
    }
    return (Md(), (r = nc(Error(_(421)))), Ls(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = P1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (pt = nr(o.nextSibling)),
      (mt = t),
      (me = !0),
      (Bt = null),
      e !== null &&
        ((bt[St++] = vn),
        (bt[St++] = yn),
        (bt[St++] = Mr),
        (vn = e.id),
        (yn = e.overflow),
        (Mr = t)),
      (t = Rd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), nu(e.return, t, n));
}
function rc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Bg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((qe(e, t, r.children, n), (r = ge.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sp(e, n, t);
        else if (e.tag === 19) Sp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ce(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Aa(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          rc(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Aa(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        rc(t, !0, n, null, i);
        break;
      case "together":
        rc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ra(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function En(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = sr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function v1(e, t, n) {
  switch (t.tag) {
    case 3:
      (zg(t), Lo());
      break;
    case 5:
      pg(t);
      break;
    case 1:
      st(t.type) && ka(t);
      break;
    case 4:
      Sd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (ce(ja, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? $g(e, t, n)
            : (ce(ge, ge.current & 1),
              (e = En(e, t, n)),
              e !== null ? e.sibling : null);
      ce(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ce(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Dg(e, t, n));
  }
  return En(e, t, n);
}
var Ug, uu, Vg, Hg;
Ug = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
uu = function () {};
Vg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), kr(sn.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = Oc(e, o)), (r = Oc(e, r)), (i = []));
        break;
      case "select":
        ((o = xe({}, o, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = Lc(e, o)), (r = Lc(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ea);
    }
    Dc(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Pi.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (i || (i = []), i.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Pi.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && fe("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Hg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function si(e, t) {
  if (!me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function y1(e, t, n) {
  var r = t.pendingProps;
  switch ((hd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Be(t), null);
    case 1:
      return (st(t.type) && Ca(), Be(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Do(),
        pe(it),
        pe(We),
        Cd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (yu(Bt), (Bt = null)))),
        uu(e, t),
        Be(t),
        null
      );
    case 5:
      Ed(t);
      var o = kr(Bi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Vg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return (Be(t), null);
        }
        if (((e = kr(sn.current)), _s(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[nn] = t), (r[zi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (fe("cancel", r), fe("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < hi.length; o++) fe(hi[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (fe("error", r), fe("load", r));
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              (Af(r, i), fe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                fe("invalid", r));
              break;
            case "textarea":
              (_f(r, i), fe("invalid", r));
          }
          (Dc(n, i), (o = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Os(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Os(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Pi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              (Cs(r), Of(r, i, !0));
              break;
            case "textarea":
              (Cs(r), If(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ea);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nn] = t),
            (e[zi] = r),
            Ug(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = Fc(n, r)), n)) {
              case "dialog":
                (fe("cancel", e), fe("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (fe("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < hi.length; o++) fe(hi[o], e);
                o = r;
                break;
              case "source":
                (fe("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (fe("error", e), fe("load", e), (o = r));
                break;
              case "details":
                (fe("toggle", e), (o = r));
                break;
              case "input":
                (Af(e, r), (o = Oc(e, r)), fe("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = xe({}, r, { value: void 0 })),
                  fe("invalid", e));
                break;
              case "textarea":
                (_f(e, r), (o = Lc(e, r)), fe("invalid", e));
                break;
              default:
                o = r;
            }
            (Dc(n, o), (a = o));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? bh(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && xh(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ri(e, l)
                        : typeof l == "number" && Ri(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Pi.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && fe("scroll", e)
                          : l != null && ed(e, i, l, s));
              }
            switch (n) {
              case "input":
                (Cs(e), Of(e, r, !1));
                break;
              case "textarea":
                (Cs(e), If(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + lr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? mo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      mo(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ea);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Be(t), null);
    case 6:
      if (e && t.stateNode != null) Hg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = kr(Bi.current)), kr(sn.current), _s(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nn] = t),
            (i = r.nodeValue !== n) && ((e = mt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Os(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Os(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nn] = t),
            (t.stateNode = r));
      }
      return (Be(t), null);
    case 13:
      if (
        (pe(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && pt !== null && t.mode & 1 && !(t.flags & 128))
          (lg(), Lo(), (t.flags |= 98560), (i = !1));
        else if (((i = _s(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[nn] = t;
          } else
            (Lo(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Be(t), (i = !1));
        } else (Bt !== null && (yu(Bt), (Bt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Ae === 0 && (Ae = 3) : Md())),
          t.updateQueue !== null && (t.flags |= 4),
          Be(t),
          null);
    case 4:
      return (
        Do(),
        uu(e, t),
        e === null && Di(t.stateNode.containerInfo),
        Be(t),
        null
      );
    case 10:
      return (xd(t.type._context), Be(t), null);
    case 17:
      return (st(t.type) && Ca(), Be(t), null);
    case 19:
      if ((pe(ge), (i = t.memoizedState), i === null)) return (Be(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) si(i, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Aa(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    si(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ce(ge, (ge.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ce() > zo &&
            ((t.flags |= 128), (r = !0), si(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Aa(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              si(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !me)
            )
              return (Be(t), null);
          } else
            2 * Ce() - i.renderingStartTime > zo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), si(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ge.current),
          ce(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Be(t), null);
    case 22:
    case 23:
      return (
        Ld(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ut & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function x1(e, t) {
  switch ((hd(t), t.tag)) {
    case 1:
      return (
        st(t.type) && Ca(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Do(),
        pe(it),
        pe(We),
        Cd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ed(t), null);
    case 13:
      if (
        (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        Lo();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (pe(ge), null);
    case 4:
      return (Do(), null);
    case 10:
      return (xd(t.type._context), null);
    case 22:
    case 23:
      return (Ld(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ms = !1,
  Ve = !1,
  w1 = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function fo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function du(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Ep = !1;
function b1(e, t) {
  if (((Gc = wa), (e = qh()), pd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;
            )
              ((m = f), (f = p));
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++c === o && (a = s),
                m === i && ++d === r && (l = s),
                (p = f.nextSibling) !== null)
              )
                break;
              ((f = m), (m = f.parentNode));
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qc = { focusedElem: e, selectionRange: n }, wa = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (F = e));
    else
      for (; F !== null; ) {
        t = F;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var g = b.memoizedProps,
                    x = b.memoizedState,
                    h = t.stateNode,
                    v = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Mt(t.type, g),
                      x,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (S) {
          Ee(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (F = e));
          break;
        }
        F = t.return;
      }
  return ((b = Ep), (Ep = !1), b);
}
function Ci(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && du(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wg(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Wg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nn], delete t[zi], delete t[Jc], delete t[r1], delete t[o1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Kg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ea)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pu(e, t, n), e = e.sibling; e !== null; )
      (pu(e, t, n), (e = e.sibling));
}
function mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mu(e, t, n), e = e.sibling; e !== null; )
      (mu(e, t, n), (e = e.sibling));
}
var Le = null,
  $t = !1;
function In(e, t, n) {
  for (n = n.child; n !== null; ) (Qg(e, t, n), (n = n.sibling));
}
function Qg(e, t, n) {
  if (on && typeof on.onCommitFiberUnmount == "function")
    try {
      on.onCommitFiberUnmount(Ja, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || fo(n, t);
    case 6:
      var r = Le,
        o = $t;
      ((Le = null),
        In(e, t, n),
        (Le = r),
        ($t = o),
        Le !== null &&
          ($t
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode)));
      break;
    case 18:
      Le !== null &&
        ($t
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            Ii(e))
          : Yl(Le, n.stateNode));
      break;
    case 4:
      ((r = Le),
        (o = $t),
        (Le = n.stateNode.containerInfo),
        ($t = !0),
        In(e, t, n),
        (Le = r),
        ($t = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && du(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      In(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (fo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Ee(n, t, a);
        }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), In(e, t, n), (Ve = r))
        : In(e, t, n);
      break;
    default:
      In(e, t, n);
  }
}
function kp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new w1()),
      t.forEach(function (r) {
        var o = R1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function It(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Le = a.stateNode), ($t = !1));
              break e;
            case 3:
              ((Le = a.stateNode.containerInfo), ($t = !0));
              break e;
            case 4:
              ((Le = a.stateNode.containerInfo), ($t = !0));
              break e;
          }
          a = a.return;
        }
        if (Le === null) throw Error(_(160));
        (Qg(i, s, o), (Le = null), ($t = !1));
        var l = o.alternate;
        (l !== null && (l.return = null), (o.return = null));
      } catch (c) {
        Ee(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Gg(t, e), (t = t.sibling));
}
function Gg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((It(t, e), Xt(e), r & 4)) {
        try {
          (Ci(3, e, e.return), sl(3, e));
        } catch (g) {
          Ee(e, e.return, g);
        }
        try {
          Ci(5, e, e.return);
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 1:
      (It(t, e), Xt(e), r & 512 && n !== null && fo(n, n.return));
      break;
    case 5:
      if (
        (It(t, e),
        Xt(e),
        r & 512 && n !== null && fo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ri(o, "");
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && gh(o, i),
              Fc(a, s));
            var c = Fc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                f = l[s + 1];
              d === "style"
                ? bh(o, f)
                : d === "dangerouslySetInnerHTML"
                  ? xh(o, f)
                  : d === "children"
                    ? Ri(o, f)
                    : ed(o, d, f, c);
            }
            switch (a) {
              case "input":
                _c(o, i);
                break;
              case "textarea":
                vh(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? mo(o, !!i.multiple, p, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? mo(o, !!i.multiple, i.defaultValue, !0)
                      : mo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[zi] = i;
          } catch (g) {
            Ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((It(t, e), Xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (It(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ii(t.containerInfo);
        } catch (g) {
          Ee(e, e.return, g);
        }
      break;
    case 4:
      (It(t, e), Xt(e));
      break;
    case 13:
      (It(t, e),
        Xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (_d = Ce())),
        r & 4 && kp(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (c = Ve) || d), It(t, e), (Ve = c)) : It(t, e),
        Xt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (f = F = d; F !== null; ) {
              switch (((m = F), (p = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ci(4, m, m.return);
                  break;
                case 1:
                  fo(m, m.return);
                  var b = m.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount());
                    } catch (g) {
                      Ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  fo(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Tp(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = m), (F = p)) : Tp(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((o = f.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = wh("display", s))));
              } catch (g) {
                Ee(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                Ee(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (It(t, e), Xt(e), r & 4 && kp(e));
      break;
    case 21:
      break;
    default:
      (It(t, e), Xt(e));
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ri(o, ""), (r.flags &= -33));
          var i = Cp(e);
          mu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Cp(e);
          pu(e, a, s);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      Ee(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function S1(e, t, n) {
  ((F = e), qg(e));
}
function qg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ms;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ve;
        a = Ms;
        var c = Ve;
        if (((Ms = s), (Ve = l) && !c))
          for (F = o; F !== null; )
            ((s = F),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? jp(o)
                : l !== null
                  ? ((l.return = s), (F = l))
                  : jp(o));
        for (; i !== null; ) ((F = i), qg(i), (i = i.sibling));
        ((F = o), (Ms = a), (Ve = c));
      }
      Np(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Np(e);
  }
}
function Np(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && up(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                up(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ii(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Ve || (t.flags & 512 && fu(t));
      } catch (m) {
        Ee(t, t.return, m);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function Tp(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function jp(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            sl(4, t);
          } catch (l) {
            Ee(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ee(t, o, l);
            }
          }
          var i = t.return;
          try {
            fu(t);
          } catch (l) {
            Ee(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            fu(t);
          } catch (l) {
            Ee(t, s, l);
          }
      }
    } catch (l) {
      Ee(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (F = a));
      break;
    }
    F = t.return;
  }
}
var E1 = Math.ceil,
  Ia = Tn.ReactCurrentDispatcher,
  Ad = Tn.ReactCurrentOwner,
  Ct = Tn.ReactCurrentBatchConfig,
  ee = 0,
  Ie = null,
  je = null,
  De = 0,
  ut = 0,
  po = hr(0),
  Ae = 0,
  Wi = null,
  Fr = 0,
  al = 0,
  Od = 0,
  ki = null,
  rt = null,
  _d = 0,
  zo = 1 / 0,
  mn = null,
  La = !1,
  hu = null,
  or = null,
  Ds = !1,
  qn = null,
  Ma = 0,
  Ni = 0,
  gu = null,
  oa = -1,
  ia = 0;
function Xe() {
  return ee & 6 ? Ce() : oa !== -1 ? oa : (oa = Ce());
}
function ir(e) {
  return e.mode & 1
    ? ee & 2 && De !== 0
      ? De & -De
      : s1.transition !== null
        ? (ia === 0 && (ia = _h()), ia)
        : ((e = ie),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $h(e.type))),
          e)
    : 1;
}
function Ht(e, t, n, r) {
  if (50 < Ni) throw ((Ni = 0), (gu = null), Error(_(185)));
  (ss(e, n, r),
    (!(ee & 2) || e !== Ie) &&
      (e === Ie && (!(ee & 2) && (al |= n), Ae === 4 && Un(e, De)),
      at(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((zo = Ce() + 500), rl && gr())));
}
function at(e, t) {
  var n = e.callbackNode;
  sw(e, t);
  var r = xa(e, e === Ie ? De : 0);
  if (r === 0)
    (n !== null && Df(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Df(n), t === 1))
      (e.tag === 0 ? i1(Pp.bind(null, e)) : ig(Pp.bind(null, e)),
        t1(function () {
          !(ee & 6) && gr();
        }),
        (n = null));
    else {
      switch (Ih(r)) {
        case 1:
          n = id;
          break;
        case 4:
          n = Ah;
          break;
        case 16:
          n = ya;
          break;
        case 536870912:
          n = Oh;
          break;
        default:
          n = ya;
      }
      n = rv(n, Yg.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Yg(e, t) {
  if (((oa = -1), (ia = 0), ee & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (xo() && e.callbackNode !== n) return null;
  var r = xa(e, e === Ie ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Da(e, r);
  else {
    t = r;
    var o = ee;
    ee |= 2;
    var i = Jg();
    (Ie !== e || De !== t) && ((mn = null), (zo = Ce() + 500), _r(e, t));
    do
      try {
        N1();
        break;
      } catch (a) {
        Xg(e, a);
      }
    while (!0);
    (yd(),
      (Ia.current = i),
      (ee = o),
      je !== null ? (t = 0) : ((Ie = null), (De = 0), (t = Ae)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Vc(e)), o !== 0 && ((r = o), (t = vu(e, o)))), t === 1)
    )
      throw ((n = Wi), _r(e, 0), Un(e, r), at(e, Ce()), n);
    if (t === 6) Un(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !C1(o) &&
          ((t = Da(e, r)),
          t === 2 && ((i = Vc(e)), i !== 0 && ((r = i), (t = vu(e, i)))),
          t === 1))
      )
        throw ((n = Wi), _r(e, 0), Un(e, r), at(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          br(e, rt, mn);
          break;
        case 3:
          if (
            (Un(e, r), (r & 130023424) === r && ((t = _d + 500 - Ce()), 10 < t))
          ) {
            if (xa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Xe(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Xc(br.bind(null, e, rt, mn), t);
            break;
          }
          br(e, rt, mn);
          break;
        case 4:
          if ((Un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Vt(r);
            ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
          }
          if (
            ((r = o),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * E1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xc(br.bind(null, e, rt, mn), r);
            break;
          }
          br(e, rt, mn);
          break;
        case 5:
          br(e, rt, mn);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return (at(e, Ce()), e.callbackNode === n ? Yg.bind(null, e) : null);
}
function vu(e, t) {
  var n = ki;
  return (
    e.current.memoizedState.isDehydrated && (_r(e, t).flags |= 256),
    (e = Da(e, t)),
    e !== 2 && ((t = rt), (rt = n), t !== null && yu(t)),
    e
  );
}
function yu(e) {
  rt === null ? (rt = e) : rt.push.apply(rt, e);
}
function C1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Kt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Un(e, t) {
  for (
    t &= ~Od,
      t &= ~al,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Pp(e) {
  if (ee & 6) throw Error(_(327));
  xo();
  var t = xa(e, 0);
  if (!(t & 1)) return (at(e, Ce()), null);
  var n = Da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vc(e);
    r !== 0 && ((t = r), (n = vu(e, r)));
  }
  if (n === 1) throw ((n = Wi), _r(e, 0), Un(e, t), at(e, Ce()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    br(e, rt, mn),
    at(e, Ce()),
    null
  );
}
function Id(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ((ee = n), ee === 0 && ((zo = Ce() + 500), rl && gr()));
  }
}
function zr(e) {
  qn !== null && qn.tag === 0 && !(ee & 6) && xo();
  var t = ee;
  ee |= 1;
  var n = Ct.transition,
    r = ie;
  try {
    if (((Ct.transition = null), (ie = 1), e)) return e();
  } finally {
    ((ie = r), (Ct.transition = n), (ee = t), !(ee & 6) && gr());
  }
}
function Ld() {
  ((ut = po.current), pe(po));
}
function _r(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), e1(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((hd(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Ca());
          break;
        case 3:
          (Do(), pe(it), pe(We), Cd());
          break;
        case 5:
          Ed(r);
          break;
        case 4:
          Do();
          break;
        case 13:
          pe(ge);
          break;
        case 19:
          pe(ge);
          break;
        case 10:
          xd(r.type._context);
          break;
        case 22:
        case 23:
          Ld();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (je = e = sr(e.current, null)),
    (De = ut = t),
    (Ae = 0),
    (Wi = null),
    (Od = al = Fr = 0),
    (rt = ki = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = o), (r.next = s));
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function Xg(e, t) {
  do {
    var n = je;
    try {
      if ((yd(), (ta.current = _a), Oa)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Oa = !1;
      }
      if (
        ((Dr = 0),
        (_e = Re = ye = null),
        (Ei = !1),
        (Ui = 0),
        (Ad.current = null),
        n === null || n.return === null)
      ) {
        ((Ae = 1), (Wi = t), (je = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = gp(s);
          if (p !== null) {
            ((p.flags &= -257),
              vp(p, s, a, i, t),
              p.mode & 1 && hp(i, c, t),
              (t = p),
              (l = c));
            var b = t.updateQueue;
            if (b === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else b.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (hp(i, c, t), Md());
              break e;
            }
            l = Error(_(426));
          }
        } else if (me && a.mode & 1) {
          var x = gp(s);
          if (x !== null) {
            (!(x.flags & 65536) && (x.flags |= 256),
              vp(x, s, a, i, t),
              gd(Fo(l, a)));
            break e;
          }
        }
        ((i = l = Fo(l, a)),
          Ae !== 4 && (Ae = 2),
          ki === null ? (ki = [i]) : ki.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var h = Ig(i, l, t);
              cp(i, h);
              break e;
            case 1:
              a = l;
              var v = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (or === null || !or.has(w))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var S = Lg(i, a, t);
                cp(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ev(n);
    } catch (E) {
      ((t = E), je === n && n !== null && (je = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Jg() {
  var e = Ia.current;
  return ((Ia.current = _a), e === null ? _a : e);
}
function Md() {
  ((Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Ie === null || (!(Fr & 268435455) && !(al & 268435455)) || Un(Ie, De));
}
function Da(e, t) {
  var n = ee;
  ee |= 2;
  var r = Jg();
  (Ie !== e || De !== t) && ((mn = null), _r(e, t));
  do
    try {
      k1();
      break;
    } catch (o) {
      Xg(e, o);
    }
  while (!0);
  if ((yd(), (ee = n), (Ia.current = r), je !== null)) throw Error(_(261));
  return ((Ie = null), (De = 0), Ae);
}
function k1() {
  for (; je !== null; ) Zg(je);
}
function N1() {
  for (; je !== null && !Xx(); ) Zg(je);
}
function Zg(e) {
  var t = nv(e.alternate, e, ut);
  ((e.memoizedProps = e.pendingProps),
    t === null ? ev(e) : (je = t),
    (Ad.current = null));
}
function ev(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = x1(n, t)), n !== null)) {
        ((n.flags &= 32767), (je = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Ae = 6), (je = null));
        return;
      }
    } else if (((n = y1(n, t, ut)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function br(e, t, n) {
  var r = ie,
    o = Ct.transition;
  try {
    ((Ct.transition = null), (ie = 1), T1(e, t, n, r));
  } finally {
    ((Ct.transition = o), (ie = r));
  }
  return null;
}
function T1(e, t, n, r) {
  do xo();
  while (qn !== null);
  if (ee & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (aw(e, i),
    e === Ie && ((je = Ie = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ds ||
      ((Ds = !0),
      rv(ya, function () {
        return (xo(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Ct.transition), (Ct.transition = null));
    var s = ie;
    ie = 1;
    var a = ee;
    ((ee |= 4),
      (Ad.current = null),
      b1(e, n),
      Gg(n, e),
      Qw(qc),
      (wa = !!Gc),
      (qc = Gc = null),
      (e.current = n),
      S1(n),
      Jx(),
      (ee = a),
      (ie = s),
      (Ct.transition = i));
  } else e.current = n;
  if (
    (Ds && ((Ds = !1), (qn = e), (Ma = o)),
    (i = e.pendingLanes),
    i === 0 && (or = null),
    tw(n.stateNode),
    at(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (La) throw ((La = !1), (e = hu), (hu = null), e);
  return (
    Ma & 1 && e.tag !== 0 && xo(),
    (i = e.pendingLanes),
    i & 1 ? (e === gu ? Ni++ : ((Ni = 0), (gu = e))) : (Ni = 0),
    gr(),
    null
  );
}
function xo() {
  if (qn !== null) {
    var e = Ih(Ma),
      t = Ct.transition,
      n = ie;
    try {
      if (((Ct.transition = null), (ie = 16 > e ? 16 : e), qn === null))
        var r = !1;
      else {
        if (((e = qn), (qn = null), (Ma = 0), ee & 6)) throw Error(_(331));
        var o = ee;
        for (ee |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child;
          if (F.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (F = c; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (F = f));
                  else
                    for (; F !== null; ) {
                      d = F;
                      var m = d.sibling,
                        p = d.return;
                      if ((Wg(d), d === c)) {
                        F = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = p), (F = m));
                        break;
                      }
                      F = p;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var g = b.child;
                if (g !== null) {
                  b.child = null;
                  do {
                    var x = g.sibling;
                    ((g.sibling = null), (g = x));
                  } while (g !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (F = s));
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ci(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                ((h.return = i.return), (F = h));
                break e;
              }
              F = i.return;
            }
        }
        var v = e.current;
        for (F = v; F !== null; ) {
          s = F;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) ((w.return = s), (F = w));
          else
            e: for (s = v; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sl(9, a);
                  }
                } catch (E) {
                  Ee(a, a.return, E);
                }
              if (a === s) {
                F = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (F = S));
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((ee = o), gr(), on && typeof on.onPostCommitFiberRoot == "function")
        )
          try {
            on.onPostCommitFiberRoot(Ja, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ie = n), (Ct.transition = t));
    }
  }
  return !1;
}
function Rp(e, t, n) {
  ((t = Fo(n, t)),
    (t = Ig(e, t, 1)),
    (e = rr(e, t, 1)),
    (t = Xe()),
    e !== null && (ss(e, 1, t), at(e, t)));
}
function Ee(e, t, n) {
  if (e.tag === 3) Rp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (or === null || !or.has(r)))
        ) {
          ((e = Fo(n, e)),
            (e = Lg(t, e, 1)),
            (t = rr(t, e, 1)),
            (e = Xe()),
            t !== null && (ss(t, 1, e), at(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function j1(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (De & n) === n &&
      (Ae === 4 || (Ae === 3 && (De & 130023424) === De && 500 > Ce() - _d)
        ? _r(e, 0)
        : (Od |= n)),
    at(e, t));
}
function tv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ts), (Ts <<= 1), !(Ts & 130023424) && (Ts = 4194304))
      : (t = 1));
  var n = Xe();
  ((e = Sn(e, t)), e !== null && (ss(e, t, n), at(e, n)));
}
function P1(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), tv(e, n));
}
function R1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  (r !== null && r.delete(t), tv(e, n));
}
var nv;
nv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || it.current) ot = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ot = !1), v1(e, t, n));
      ot = !!(e.flags & 131072);
    }
  else ((ot = !1), me && t.flags & 1048576 && sg(t, Ta, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ra(e, t), (e = t.pendingProps));
      var o = Io(t, We.current);
      (yo(t, n), (o = Nd(null, t, r, e, o, n)));
      var i = Td();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            st(r) ? ((i = !0), ka(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            bd(t),
            (o.updater = il),
            (t.stateNode = o),
            (o._reactInternals = t),
            ou(t, r, e, n),
            (t = au(null, t, r, !0, i, n)))
          : ((t.tag = 0), me && i && md(t), qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ra(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = O1(r)),
          (e = Mt(r, e)),
          o)
        ) {
          case 0:
            t = su(null, t, r, e, n);
            break e;
          case 1:
            t = wp(null, t, r, e, n);
            break e;
          case 11:
            t = yp(null, t, r, e, n);
            break e;
          case 14:
            t = xp(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Mt(r, o)),
        su(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Mt(r, o)),
        wp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((zg(t), e === null)) throw Error(_(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          fg(e, t),
          Ra(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = Fo(Error(_(423)), t)), (t = bp(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Fo(Error(_(424)), t)), (t = bp(e, t, r, n, o)));
            break e;
          } else
            for (
              pt = nr(t.stateNode.containerInfo.firstChild),
                mt = t,
                me = !0,
                Bt = null,
                n = ug(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Lo(), r === o)) {
            t = En(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pg(t),
        e === null && tu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Yc(r, o) ? (s = null) : i !== null && Yc(r, i) && (t.flags |= 32),
        Fg(e, t),
        qe(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && tu(t), null);
    case 13:
      return $g(e, t, n);
    case 4:
      return (
        Sd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mo(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Mt(r, o)),
        yp(e, t, r, o, n)
      );
    case 7:
      return (qe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (qe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (qe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ce(ja, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Kt(i.value, s)) {
            if (i.children === o.children && !it.current) {
              t = En(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = xn(-1, n & -n)), (l.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      nu(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(_(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  nu(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (qe(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        yo(t, n),
        (o = kt(o)),
        (r = r(o)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Mt(r, t.pendingProps)),
        (o = Mt(r.type, o)),
        xp(e, t, r, o, n)
      );
    case 15:
      return Mg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Mt(r, o)),
        ra(e, t),
        (t.tag = 1),
        st(r) ? ((e = !0), ka(t)) : (e = !1),
        yo(t, n),
        _g(t, r, o),
        ou(t, r, o, n),
        au(null, t, r, !0, e, n)
      );
    case 19:
      return Bg(e, t, n);
    case 22:
      return Dg(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function rv(e, t) {
  return Rh(e, t);
}
function A1(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Et(e, t, n, r) {
  return new A1(e, t, n, r);
}
function Dd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function O1(e) {
  if (typeof e == "function") return Dd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nd)) return 11;
    if (e === rd) return 14;
  }
  return 2;
}
function sr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function sa(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Dd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case no:
        return Ir(n.children, o, i, t);
      case td:
        ((s = 8), (o |= 8));
        break;
      case jc:
        return (
          (e = Et(12, n, t, o | 2)),
          (e.elementType = jc),
          (e.lanes = i),
          e
        );
      case Pc:
        return ((e = Et(13, n, t, o)), (e.elementType = Pc), (e.lanes = i), e);
      case Rc:
        return ((e = Et(19, n, t, o)), (e.elementType = Rc), (e.lanes = i), e);
      case ph:
        return ll(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dh:
              s = 10;
              break e;
            case fh:
              s = 9;
              break e;
            case nd:
              s = 11;
              break e;
            case rd:
              s = 14;
              break e;
            case zn:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Et(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Ir(e, t, n, r) {
  return ((e = Et(7, e, r, t)), (e.lanes = n), e);
}
function ll(e, t, n, r) {
  return (
    (e = Et(22, e, r, t)),
    (e.elementType = ph),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oc(e, t, n) {
  return ((e = Et(6, e, null, t)), (e.lanes = n), e);
}
function ic(e, t, n) {
  return (
    (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _1(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Fd(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new _1(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Et(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    bd(i),
    e
  );
}
function I1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: to,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ov(e) {
  if (!e) return cr;
  e = e._reactInternals;
  e: {
    if (Hr(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (st(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (st(n)) return og(e, n, t);
  }
  return t;
}
function iv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Fd(n, r, !0, e, o, i, s, a, l)),
    (e.context = ov(null)),
    (n = e.current),
    (r = Xe()),
    (o = ir(n)),
    (i = xn(r, o)),
    (i.callback = t ?? null),
    rr(n, i, o),
    (e.current.lanes = o),
    ss(e, o, r),
    at(e, r),
    e
  );
}
function cl(e, t, n, r) {
  var o = t.current,
    i = Xe(),
    s = ir(o);
  return (
    (n = ov(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rr(o, t, s)),
    e !== null && (Ht(e, o, s, i), ea(e, o, s)),
    s
  );
}
function Fa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ap(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zd(e, t) {
  (Ap(e, t), (e = e.alternate) && Ap(e, t));
}
function L1() {
  return null;
}
var sv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $d(e) {
  this._internalRoot = e;
}
ul.prototype.render = $d.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  cl(e, t, null, null);
};
ul.prototype.unmount = $d.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (zr(function () {
      cl(null, e, null, null);
    }),
      (t[bn] = null));
  }
};
function ul(e) {
  this._internalRoot = e;
}
ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Dh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bn.length && t !== 0 && t < Bn[n].priority; n++);
    (Bn.splice(n, 0, e), n === 0 && zh(e));
  }
};
function Bd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Op() {}
function M1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Fa(s);
        i.call(c);
      };
    }
    var s = iv(t, r, e, 0, null, !1, !1, "", Op);
    return (
      (e._reactRootContainer = s),
      (e[bn] = s.current),
      Di(e.nodeType === 8 ? e.parentNode : e),
      zr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Fa(l);
      a.call(c);
    };
  }
  var l = Fd(e, 0, !1, null, null, !1, !1, "", Op);
  return (
    (e._reactRootContainer = l),
    (e[bn] = l.current),
    Di(e.nodeType === 8 ? e.parentNode : e),
    zr(function () {
      cl(t, l, n, r);
    }),
    l
  );
}
function fl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Fa(s);
        a.call(l);
      };
    }
    cl(t, s, e, o);
  } else s = M1(n, t, e, o, r);
  return Fa(s);
}
Lh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mi(t.pendingLanes);
        n !== 0 &&
          (sd(t, n | 1), at(t, Ce()), !(ee & 6) && ((zo = Ce() + 500), gr()));
      }
      break;
    case 13:
      (zr(function () {
        var r = Sn(e, 1);
        if (r !== null) {
          var o = Xe();
          Ht(r, e, 1, o);
        }
      }),
        zd(e, 1));
  }
};
ad = function (e) {
  if (e.tag === 13) {
    var t = Sn(e, 134217728);
    if (t !== null) {
      var n = Xe();
      Ht(t, e, 134217728, n);
    }
    zd(e, 134217728);
  }
};
Mh = function (e) {
  if (e.tag === 13) {
    var t = ir(e),
      n = Sn(e, t);
    if (n !== null) {
      var r = Xe();
      Ht(n, e, t, r);
    }
    zd(e, t);
  }
};
Dh = function () {
  return ie;
};
Fh = function (e, t) {
  var n = ie;
  try {
    return ((ie = e), t());
  } finally {
    ie = n;
  }
};
$c = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_c(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = nl(r);
            if (!o) throw Error(_(90));
            (hh(r), _c(r, o));
          }
        }
      }
      break;
    case "textarea":
      vh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && mo(e, !!n.multiple, t, !1));
  }
};
Ch = Id;
kh = zr;
var D1 = { usingClientEntryPoint: !1, Events: [ls, so, nl, Sh, Eh, Id] },
  ai = {
    findFiberByHostInstance: Er,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  F1 = {
    bundleType: ai.bundleType,
    version: ai.version,
    rendererPackageName: ai.rendererPackageName,
    rendererConfig: ai.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = jh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ai.findFiberByHostInstance || L1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fs.isDisabled && Fs.supportsFiber)
    try {
      ((Ja = Fs.inject(F1)), (on = Fs));
    } catch {}
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D1;
vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bd(t)) throw Error(_(200));
  return I1(e, t, null, n);
};
vt.createRoot = function (e, t) {
  if (!Bd(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = sv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fd(e, 1, !1, null, null, n, !1, r, o)),
    (e[bn] = t.current),
    Di(e.nodeType === 8 ? e.parentNode : e),
    new $d(t)
  );
};
vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return ((e = jh(t)), (e = e === null ? null : e.stateNode), e);
};
vt.flushSync = function (e) {
  return zr(e);
};
vt.hydrate = function (e, t, n) {
  if (!dl(t)) throw Error(_(200));
  return fl(null, e, t, !0, n);
};
vt.hydrateRoot = function (e, t, n) {
  if (!Bd(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = sv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = iv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[bn] = t.current),
    Di(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new ul(t);
};
vt.render = function (e, t, n) {
  if (!dl(t)) throw Error(_(200));
  return fl(null, e, t, !1, n);
};
vt.unmountComponentAtNode = function (e) {
  if (!dl(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (zr(function () {
        fl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[bn] = null));
        });
      }),
      !0)
    : !1;
};
vt.unstable_batchedUpdates = Id;
vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!dl(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return fl(e, t, n, !1, r);
};
vt.version = "18.3.1-next-f1338f8080-20240426";
function av() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av);
    } catch (e) {
      console.error(e);
    }
}
(av(), (ah.exports = vt));
var us = ah.exports;
const lv = os(us);
var cv,
  _p = us;
((cv = _p.createRoot), _p.hydrateRoot);
var z1 = typeof Element < "u",
  $1 = typeof Map == "function",
  B1 = typeof Set == "function",
  U1 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function aa(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!aa(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if ($1 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!aa(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (B1 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (U1 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (z1 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !aa(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var V1 = function (t, n) {
  try {
    return aa(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return (
        console.warn("react-fast-compare cannot handle circular refs"),
        !1
      );
    throw r;
  }
};
const H1 = os(V1);
var W1 = function (e, t, n, r, o, i, s, a) {
    if (!e) {
      var l;
      if (t === void 0)
        l = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var c = [n, r, o, i, s, a],
          d = 0;
        ((l = new Error(
          t.replace(/%s/g, function () {
            return c[d++];
          }),
        )),
          (l.name = "Invariant Violation"));
      }
      throw ((l.framesToPop = 1), l);
    }
  },
  K1 = W1;
const Ip = os(K1);
var Q1 = function (t, n, r, o) {
  var i = r ? r.call(o, t, n) : void 0;
  if (i !== void 0) return !!i;
  if (t === n) return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
  var s = Object.keys(t),
    a = Object.keys(n);
  if (s.length !== a.length) return !1;
  for (
    var l = Object.prototype.hasOwnProperty.bind(n), c = 0;
    c < s.length;
    c++
  ) {
    var d = s[c];
    if (!l(d)) return !1;
    var f = t[d],
      m = n[d];
    if (
      ((i = r ? r.call(o, f, m, d) : void 0),
      i === !1 || (i === void 0 && f !== m))
    )
      return !1;
  }
  return !0;
};
const G1 = os(Q1);
var uv = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(uv || {}),
  sc = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  Lp = Object.values(uv),
  Ud = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  q1 = Object.entries(Ud).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  Ut = "data-rh",
  wo = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  bo = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  Y1 = (e) => {
    let t = bo(e, "title");
    const n = bo(e, wo.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), n && t))
      return n.replace(/%s/g, () => t);
    const r = bo(e, wo.DEFAULT_TITLE);
    return t || r || void 0;
  },
  X1 = (e) => bo(e, wo.ON_CHANGE_CLIENT_STATE) || (() => {}),
  ac = (e, t) =>
    t
      .filter((n) => typeof n[e] < "u")
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  J1 = (e, t) =>
    t
      .filter((n) => typeof n.base < "u")
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const o = Object.keys(r);
          for (let i = 0; i < o.length; i += 1) {
            const a = o[i].toLowerCase();
            if (e.indexOf(a) !== -1 && r[a]) return n.concat(r);
          }
        }
        return n;
      }, []),
  Z1 = (e) => console && typeof console.warn == "function" && console.warn(e),
  li = (e, t, n) => {
    const r = {};
    return n
      .filter((o) =>
        Array.isArray(o[e])
          ? !0
          : (typeof o[e] < "u" &&
              Z1(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`,
              ),
            !1),
      )
      .map((o) => o[e])
      .reverse()
      .reduce((o, i) => {
        const s = {};
        i.filter((l) => {
          let c;
          const d = Object.keys(l);
          for (let m = 0; m < d.length; m += 1) {
            const p = d[m],
              b = p.toLowerCase();
            (t.indexOf(b) !== -1 &&
              !(c === "rel" && l[c].toLowerCase() === "canonical") &&
              !(b === "rel" && l[b].toLowerCase() === "stylesheet") &&
              (c = b),
              t.indexOf(p) !== -1 &&
                (p === "innerHTML" || p === "cssText" || p === "itemprop") &&
                (c = p));
          }
          if (!c || !l[c]) return !1;
          const f = l[c].toLowerCase();
          return (
            r[c] || (r[c] = {}),
            s[c] || (s[c] = {}),
            r[c][f] ? !1 : ((s[c][f] = !0), !0)
          );
        })
          .reverse()
          .forEach((l) => o.push(l));
        const a = Object.keys(s);
        for (let l = 0; l < a.length; l += 1) {
          const c = a[l],
            d = { ...r[c], ...s[c] };
          r[c] = d;
        }
        return o;
      }, [])
      .reverse();
  },
  eb = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  tb = (e) => ({
    baseTag: J1(["href"], e),
    bodyAttributes: ac("bodyAttributes", e),
    defer: bo(e, wo.DEFER),
    encode: bo(e, wo.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: ac("htmlAttributes", e),
    linkTags: li("link", ["rel", "href"], e),
    metaTags: li(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e,
    ),
    noscriptTags: li("noscript", ["innerHTML"], e),
    onChangeClientState: X1(e),
    scriptTags: li("script", ["src", "innerHTML"], e),
    styleTags: li("style", ["cssText"], e),
    title: Y1(e),
    titleAttributes: ac("titleAttributes", e),
    prioritizeSeoTags: eb(e, wo.PRIORITIZE_SEO_TAGS),
  }),
  dv = (e) => (Array.isArray(e) ? e.join("") : e),
  nb = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  lc = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (n, r) => (nb(r, t) ? n.priority.push(r) : n.default.push(r), n),
          { priority: [], default: [] },
        )
      : { default: e, priority: [] },
  Mp = (e, t) => ({ ...e, [t]: void 0 }),
  rb = ["noscript", "script", "style"],
  xu = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  fv = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ""),
  ob = (e, t, n, r) => {
    const o = fv(n),
      i = dv(t);
    return o
      ? `<${e} ${Ut}="true" ${o}>${xu(i, r)}</${e}>`
      : `<${e} ${Ut}="true">${xu(i, r)}</${e}>`;
  },
  ib = (e, t, n = !0) =>
    t.reduce((r, o) => {
      const i = o,
        s = Object.keys(i)
          .filter((c) => !(c === "innerHTML" || c === "cssText"))
          .reduce((c, d) => {
            const f = typeof i[d] > "u" ? d : `${d}="${xu(i[d], n)}"`;
            return c ? `${c} ${f}` : f;
          }, ""),
        a = i.innerHTML || i.cssText || "",
        l = rb.indexOf(e) === -1;
      return `${r}<${e} ${Ut}="true" ${s}${l ? "/>" : `>${a}</${e}>`}`;
    }, ""),
  pv = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const o = Ud[r];
      return ((n[o || r] = e[r]), n);
    }, t),
  sb = (e, t, n) => {
    const r = { key: t, [Ut]: !0 },
      o = pv(n, r);
    return [I.createElement("title", o, t)];
  },
  la = (e, t) =>
    t.map((n, r) => {
      const o = { key: r, [Ut]: !0 };
      return (
        Object.keys(n).forEach((i) => {
          const a = Ud[i] || i;
          if (a === "innerHTML" || a === "cssText") {
            const l = n.innerHTML || n.cssText;
            o.dangerouslySetInnerHTML = { __html: l };
          } else o[a] = n[i];
        }),
        I.createElement(e, o)
      );
    }),
  xt = (e, t, n = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => sb(e, t.title, t.titleAttributes),
          toString: () => ob(e, t.title, t.titleAttributes, n),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => pv(t), toString: () => fv(t) };
      default:
        return { toComponent: () => la(e, t), toString: () => ib(e, t, n) };
    }
  },
  ab = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const o = lc(e, sc.meta),
      i = lc(t, sc.link),
      s = lc(n, sc.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...la("meta", o.priority),
          ...la("link", i.priority),
          ...la("script", s.priority),
        ],
        toString: () =>
          `${xt("meta", o.priority, r)} ${xt("link", i.priority, r)} ${xt("script", s.priority, r)}`,
      },
      metaTags: o.default,
      linkTags: i.default,
      scriptTags: s.default,
    };
  },
  lb = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: o,
      noscriptTags: i,
      styleTags: s,
      title: a = "",
      titleAttributes: l,
      prioritizeSeoTags: c,
    } = e;
    let { linkTags: d, metaTags: f, scriptTags: m } = e,
      p = { toComponent: () => {}, toString: () => "" };
    return (
      c &&
        ({
          priorityMethods: p,
          linkTags: d,
          metaTags: f,
          scriptTags: m,
        } = ab(e)),
      {
        priority: p,
        base: xt("base", t, r),
        bodyAttributes: xt("bodyAttributes", n, r),
        htmlAttributes: xt("htmlAttributes", o, r),
        link: xt("link", d, r),
        meta: xt("meta", f, r),
        noscript: xt("noscript", i, r),
        script: xt("script", m, r),
        style: xt("style", s, r),
        title: xt("title", { title: a, titleAttributes: l }, r),
      }
    );
  },
  wu = lb,
  zs = [],
  mv = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  bu = class {
    constructor(e, t) {
      dn(this, "instances", []);
      dn(this, "canUseDOM", mv);
      dn(this, "context");
      dn(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? zs : this.instances),
          add: (e) => {
            (this.canUseDOM ? zs : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? zs : this.instances).indexOf(e);
            (this.canUseDOM ? zs : this.instances).splice(t, 1);
          },
        },
      });
      ((this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = wu({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          })));
    }
  },
  cb = {},
  hv = I.createContext(cb),
  Nr,
  gv =
    ((Nr = class extends y.Component {
      constructor(n) {
        super(n);
        dn(this, "helmetData");
        this.helmetData = new bu(this.props.context || {}, Nr.canUseDOM);
      }
      render() {
        return I.createElement(
          hv.Provider,
          { value: this.helmetData.value },
          this.props.children,
        );
      }
    }),
    dn(Nr, "canUseDOM", mv),
    Nr),
  Yr = (e, t) => {
    const n = document.head || document.querySelector("head"),
      r = n.querySelectorAll(`${e}[${Ut}]`),
      o = [].slice.call(r),
      i = [];
    let s;
    return (
      t &&
        t.length &&
        t.forEach((a) => {
          const l = document.createElement(e);
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c))
              if (c === "innerHTML") l.innerHTML = a.innerHTML;
              else if (c === "cssText")
                l.styleSheet
                  ? (l.styleSheet.cssText = a.cssText)
                  : l.appendChild(document.createTextNode(a.cssText));
              else {
                const d = c,
                  f = typeof a[d] > "u" ? "" : a[d];
                l.setAttribute(c, f);
              }
          (l.setAttribute(Ut, "true"),
            o.some((c, d) => ((s = d), l.isEqualNode(c)))
              ? o.splice(s, 1)
              : i.push(l));
        }),
      o.forEach((a) => {
        var l;
        return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
      }),
      i.forEach((a) => n.appendChild(a)),
      { oldTags: o, newTags: i }
    );
  },
  Su = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(Ut),
      o = r ? r.split(",") : [],
      i = [...o],
      s = Object.keys(t);
    for (const a of s) {
      const l = t[a] || "";
      (n.getAttribute(a) !== l && n.setAttribute(a, l),
        o.indexOf(a) === -1 && o.push(a));
      const c = i.indexOf(a);
      c !== -1 && i.splice(c, 1);
    }
    for (let a = i.length - 1; a >= 0; a -= 1) n.removeAttribute(i[a]);
    o.length === i.length
      ? n.removeAttribute(Ut)
      : n.getAttribute(Ut) !== s.join(",") && n.setAttribute(Ut, s.join(","));
  },
  ub = (e, t) => {
    (typeof e < "u" && document.title !== e && (document.title = dv(e)),
      Su("title", t));
  },
  Dp = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: o,
      linkTags: i,
      metaTags: s,
      noscriptTags: a,
      onChangeClientState: l,
      scriptTags: c,
      styleTags: d,
      title: f,
      titleAttributes: m,
    } = e;
    (Su("body", r), Su("html", o), ub(f, m));
    const p = {
        baseTag: Yr("base", n),
        linkTags: Yr("link", i),
        metaTags: Yr("meta", s),
        noscriptTags: Yr("noscript", a),
        scriptTags: Yr("script", c),
        styleTags: Yr("style", d),
      },
      b = {},
      g = {};
    (Object.keys(p).forEach((x) => {
      const { newTags: h, oldTags: v } = p[x];
      (h.length && (b[x] = h), v.length && (g[x] = p[x].oldTags));
    }),
      t && t(),
      l(e, b, g));
  },
  ci = null,
  db = (e) => {
    (ci && cancelAnimationFrame(ci),
      e.defer
        ? (ci = requestAnimationFrame(() => {
            Dp(e, () => {
              ci = null;
            });
          }))
        : (Dp(e), (ci = null)));
  },
  fb = db,
  Fp = class extends y.Component {
    constructor() {
      super(...arguments);
      dn(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !G1(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      (t.remove(this), this.emitChange());
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const o = tb(
        t.get().map((i) => {
          const s = { ...i.props };
          return (delete s.context, s);
        }),
      );
      (gv.canUseDOM ? fb(o) : wu && (r = wu(o)), n(r));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      (t.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  Nc,
  pb =
    ((Nc = class extends y.Component {
      shouldComponentUpdate(e) {
        return !H1(Mp(this.props, "helmetData"), Mp(e, "helmetData"));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...n, ...this.mapNestedChildrenToProps(e, r) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case "body":
            return { ...t, bodyAttributes: { ...n } };
          case "html":
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          Ip(
            Lp.some((n) => e.type === n),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Lp.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`,
          ),
          Ip(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((n) => typeof n != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          I.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: o, ...i } = r.props,
              s = Object.keys(i).reduce(
                (l, c) => ((l[q1[c] || c] = i[c]), l),
                {},
              );
            let { type: a } = r;
            switch (
              (typeof a == "symbol"
                ? (a = a.toString())
                : this.warnOnInvalidChildren(r, o),
              a)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(o, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                n = this.flattenArrayTypeChildren(r, n, s, o);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, s, o);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if (
          (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof bu))
        ) {
          const o = r;
          ((r = new bu(o.context, !0)), delete n.helmetData);
        }
        return r
          ? I.createElement(Fp, { ...n, context: r.value })
          : I.createElement(hv.Consumer, null, (o) =>
              I.createElement(Fp, { ...n, context: o }),
            );
      }
    }),
    dn(Nc, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    Nc);
const mb = 1,
  hb = 1e6;
let cc = 0;
function gb() {
  return ((cc = (cc + 1) % Number.MAX_SAFE_INTEGER), cc.toString());
}
const uc = new Map(),
  zp = (e) => {
    if (uc.has(e)) return;
    const t = setTimeout(() => {
      (uc.delete(e), Ti({ type: "REMOVE_TOAST", toastId: e }));
    }, hb);
    uc.set(e, t);
  },
  vb = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, mb) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? zp(n)
            : e.toasts.forEach((r) => {
                zp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  ca = [];
let ua = { toasts: [] };
function Ti(e) {
  ((ua = vb(ua, e)),
    ca.forEach((t) => {
      t(ua);
    }));
}
function yb({ ...e }) {
  const t = gb(),
    n = (o) => Ti({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Ti({ type: "DISMISS_TOAST", toastId: t });
  return (
    Ti({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Vd() {
  const [e, t] = y.useState(ua);
  return (
    y.useEffect(
      () => (
        ca.push(t),
        () => {
          const n = ca.indexOf(t);
          n > -1 && ca.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: yb,
      dismiss: (n) => Ti({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function $p(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function vv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = $p(o, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : $p(e[o], null);
        }
      };
  };
}
function Je(...e) {
  return y.useCallback(vv(...e), e);
}
function xb(e, t) {
  const n = y.createContext(t),
    r = (i) => {
      const { children: s, ...a } = i,
        l = y.useMemo(() => a, Object.values(a));
      return u.jsx(n.Provider, { value: l, children: s });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = y.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function ds(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = y.createContext(s),
      l = n.length;
    n = [...n, s];
    const c = (f) => {
      var h;
      const { scope: m, children: p, ...b } = f,
        g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[l]) || a,
        x = y.useMemo(() => b, Object.values(b));
      return u.jsx(g.Provider, { value: x, children: p });
    };
    c.displayName = i + "Provider";
    function d(f, m) {
      var g;
      const p = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || a,
        b = y.useContext(p);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, wb(o, ...t)]);
}
function wb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(i)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Ki(e) {
  const t = Sb(e),
    n = y.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = y.Children.toArray(i),
        l = a.find(Cb);
      if (l) {
        const c = l.props.children,
          d = a.map((f) =>
            f === l
              ? y.Children.count(c) > 1
                ? y.Children.only(null)
                : y.isValidElement(c)
                  ? c.props.children
                  : null
              : f,
          );
        return u.jsx(t, {
          ...s,
          ref: o,
          children: y.isValidElement(c) ? y.cloneElement(c, void 0, d) : null,
        });
      }
      return u.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var bb = Ki("Slot");
function Sb(e) {
  const t = y.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (y.isValidElement(o)) {
      const s = Nb(o),
        a = kb(i, o.props);
      return (
        o.type !== y.Fragment && (a.ref = r ? vv(r, s) : s),
        y.cloneElement(o, a)
      );
    }
    return y.Children.count(o) > 1 ? y.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var yv = Symbol("radix.slottable");
function Eb(e) {
  const t = ({ children: n }) => u.jsx(u.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = yv), t);
}
function Cb(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === yv
  );
}
function kb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Nb(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Tb(e) {
  const t = e + "CollectionProvider",
    [n, r] = ds(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: x, children: h } = g,
        v = I.useRef(null),
        w = I.useRef(new Map()).current;
      return u.jsx(o, { scope: x, itemMap: w, collectionRef: v, children: h });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Ki(a),
    c = I.forwardRef((g, x) => {
      const { scope: h, children: v } = g,
        w = i(a, h),
        S = Je(x, w.collectionRef);
      return u.jsx(l, { ref: S, children: v });
    });
  c.displayName = a;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    m = Ki(d),
    p = I.forwardRef((g, x) => {
      const { scope: h, children: v, ...w } = g,
        S = I.useRef(null),
        E = Je(x, S),
        C = i(d, h);
      return (
        I.useEffect(
          () => (
            C.itemMap.set(S, { ref: S, ...w }),
            () => void C.itemMap.delete(S)
          ),
        ),
        u.jsx(m, { [f]: "", ref: E, children: v })
      );
    });
  p.displayName = d;
  function b(g) {
    const x = i(e + "CollectionConsumer", g);
    return I.useCallback(() => {
      const v = x.collectionRef.current;
      if (!v) return [];
      const w = Array.from(v.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort(
        (C, k) => w.indexOf(C.ref.current) - w.indexOf(k.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: c, ItemSlot: p }, b, r];
}
var jb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ne = jb.reduce((e, t) => {
    const n = Ki(`Primitive.${t}`),
      r = y.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function xv(e, t) {
  e && us.flushSync(() => e.dispatchEvent(t));
}
function an(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Pb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = an(e);
  y.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Rb = "DismissableLayer",
  Eu = "dismissableLayer.update",
  Ab = "dismissableLayer.pointerDownOutside",
  Ob = "dismissableLayer.focusOutside",
  Bp,
  wv = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  pl = y.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      c = y.useContext(wv),
      [d, f] = y.useState(null),
      m =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = y.useState({}),
      b = Je(t, (k) => f(k)),
      g = Array.from(c.layers),
      [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = g.indexOf(x),
      v = d ? g.indexOf(d) : -1,
      w = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = v >= h,
      E = Ib((k) => {
        const N = k.target,
          R = [...c.branches].some((A) => A.contains(N));
        !S ||
          R ||
          (o == null || o(k),
          s == null || s(k),
          k.defaultPrevented || a == null || a());
      }, m),
      C = Lb((k) => {
        const N = k.target;
        [...c.branches].some((A) => A.contains(N)) ||
          (i == null || i(k),
          s == null || s(k),
          k.defaultPrevented || a == null || a());
      }, m);
    return (
      Pb((k) => {
        v === c.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, m),
      y.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Bp = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Up(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Bp);
            }
          );
      }, [d, m, n, c]),
      y.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            Up());
        },
        [d, c],
      ),
      y.useEffect(() => {
        const k = () => p({});
        return (
          document.addEventListener(Eu, k),
          () => document.removeEventListener(Eu, k)
        );
      }, []),
      u.jsx(Ne.div, {
        ...l,
        ref: b,
        style: {
          pointerEvents: w ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: he(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
pl.displayName = Rb;
var _b = "DismissableLayerBranch",
  bv = y.forwardRef((e, t) => {
    const n = y.useContext(wv),
      r = y.useRef(null),
      o = Je(t, r);
    return (
      y.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      u.jsx(Ne.div, { ...e, ref: o })
    );
  });
bv.displayName = _b;
function Ib(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = an(e),
    r = y.useRef(!1),
    o = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Sv(Ab, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Lb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = an(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Sv(Ob, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Up() {
  const e = new CustomEvent(Eu);
  document.dispatchEvent(e);
}
function Sv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? xv(o, i) : o.dispatchEvent(i));
}
var Mb = pl,
  Db = bv,
  Cn = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  Fb = "Portal",
  Hd = y.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = y.useState(!1);
    Cn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? lv.createPortal(u.jsx(Ne.div, { ...r, ref: t }), s) : null;
  });
Hd.displayName = Fb;
function zb(e, t) {
  return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var Wo = (e) => {
  const { present: t, children: n } = e,
    r = $b(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n),
    i = Je(r.ref, Bb(o));
  return typeof n == "function" || r.isPresent
    ? y.cloneElement(o, { ref: i })
    : null;
};
Wo.displayName = "Presence";
function $b(e) {
  const [t, n] = y.useState(),
    r = y.useRef(null),
    o = y.useRef(e),
    i = y.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = zb(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const c = $s(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    Cn(() => {
      const c = r.current,
        d = o.current;
      if (d !== e) {
        const m = i.current,
          p = $s(c);
        (e
          ? l("MOUNT")
          : p === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(d && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, l]),
    Cn(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          f = (p) => {
            const g = $s(r.current).includes(p.animationName);
            if (p.target === t && g && (l("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                })));
            }
          },
          m = (p) => {
            p.target === t && (i.current = $s(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (d.clearTimeout(c),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: y.useCallback((c) => {
        ((r.current = c ? getComputedStyle(c) : null), n(c));
      }, []),
    }
  );
}
function $s(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Bb(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Ub = Xu[" useInsertionEffect ".trim().toString()] || Cn;
function Ev({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = Vb({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : o;
  {
    const d = y.useRef(e !== void 0);
    y.useEffect(() => {
      const f = d.current;
      (f !== a &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (d.current = a));
    }, [a, r]);
  }
  const c = y.useCallback(
    (d) => {
      var f;
      if (a) {
        const m = Hb(d) ? d(e) : d;
        m !== e && ((f = s.current) == null || f.call(s, m));
      } else i(d);
    },
    [a, e, i, s],
  );
  return [l, c];
}
function Vb({ defaultProp: e, onChange: t }) {
  const [n, r] = y.useState(e),
    o = y.useRef(n),
    i = y.useRef(t);
  return (
    Ub(() => {
      i.current = t;
    }, [t]),
    y.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function Hb(e) {
  return typeof e == "function";
}
var Wb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Kb = "VisuallyHidden",
  ml = y.forwardRef((e, t) =>
    u.jsx(Ne.span, { ...e, ref: t, style: { ...Wb, ...e.style } }),
  );
ml.displayName = Kb;
var Qb = ml,
  Wd = "ToastProvider",
  [Kd, Gb, qb] = Tb("Toast"),
  [Cv, $P] = ds("Toast", [qb]),
  [Yb, hl] = Cv(Wd),
  kv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [a, l] = y.useState(null),
      [c, d] = y.useState(0),
      f = y.useRef(!1),
      m = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Wd}\`. Expected non-empty \`string\`.`,
        ),
      u.jsx(Kd.Provider, {
        scope: t,
        children: u.jsx(Yb, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: c,
          viewport: a,
          onViewportChange: l,
          onToastAdd: y.useCallback(() => d((p) => p + 1), []),
          onToastRemove: y.useCallback(() => d((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: m,
          children: s,
        }),
      })
    );
  };
kv.displayName = Wd;
var Nv = "ToastViewport",
  Xb = ["F8"],
  Cu = "toast.viewportPause",
  ku = "toast.viewportResume",
  Tv = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Xb,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = hl(Nv, n),
      a = Gb(n),
      l = y.useRef(null),
      c = y.useRef(null),
      d = y.useRef(null),
      f = y.useRef(null),
      m = Je(t, f, s.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      b = s.toastCount > 0;
    (y.useEffect(() => {
      const x = (h) => {
        var w;
        r.length !== 0 &&
          r.every((S) => h[S] || h.code === S) &&
          ((w = f.current) == null || w.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      y.useEffect(() => {
        const x = l.current,
          h = f.current;
        if (b && x && h) {
          const v = () => {
              if (!s.isClosePausedRef.current) {
                const C = new CustomEvent(Cu);
                (h.dispatchEvent(C), (s.isClosePausedRef.current = !0));
              }
            },
            w = () => {
              if (s.isClosePausedRef.current) {
                const C = new CustomEvent(ku);
                (h.dispatchEvent(C), (s.isClosePausedRef.current = !1));
              }
            },
            S = (C) => {
              !x.contains(C.relatedTarget) && w();
            },
            E = () => {
              x.contains(document.activeElement) || w();
            };
          return (
            x.addEventListener("focusin", v),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", v),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", v),
            window.addEventListener("focus", w),
            () => {
              (x.removeEventListener("focusin", v),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", v),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", w));
            }
          );
        }
      }, [b, s.isClosePausedRef]));
    const g = y.useCallback(
      ({ tabbingDirection: x }) => {
        const v = a().map((w) => {
          const S = w.ref.current,
            E = [S, ...uS(S)];
          return x === "forwards" ? E : E.reverse();
        });
        return (x === "forwards" ? v.reverse() : v).flat();
      },
      [a],
    );
    return (
      y.useEffect(() => {
        const x = f.current;
        if (x) {
          const h = (v) => {
            var E, C, k;
            const w = v.altKey || v.ctrlKey || v.metaKey;
            if (v.key === "Tab" && !w) {
              const N = document.activeElement,
                R = v.shiftKey;
              if (v.target === x && R) {
                (E = c.current) == null || E.focus();
                return;
              }
              const L = g({ tabbingDirection: R ? "backwards" : "forwards" }),
                W = L.findIndex((O) => O === N);
              dc(L.slice(W + 1))
                ? v.preventDefault()
                : R
                  ? (C = c.current) == null || C.focus()
                  : (k = d.current) == null || k.focus();
            }
          };
          return (
            x.addEventListener("keydown", h),
            () => x.removeEventListener("keydown", h)
          );
        }
      }, [a, g]),
      u.jsxs(Db, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b &&
            u.jsx(Nu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "forwards" });
                dc(x);
              },
            }),
          u.jsx(Kd.Slot, {
            scope: n,
            children: u.jsx(Ne.ol, { tabIndex: -1, ...i, ref: m }),
          }),
          b &&
            u.jsx(Nu, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "backwards" });
                dc(x);
              },
            }),
        ],
      })
    );
  });
Tv.displayName = Nv;
var jv = "ToastFocusProxy",
  Nu = y.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = hl(jv, n);
    return u.jsx(ml, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var c;
        const a = s.relatedTarget;
        !((c = i.viewport) != null && c.contains(a)) && r();
      },
    });
  });
Nu.displayName = jv;
var fs = "Toast",
  Jb = "toast.swipeStart",
  Zb = "toast.swipeMove",
  eS = "toast.swipeCancel",
  tS = "toast.swipeEnd",
  Pv = y.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [a, l] = Ev({ prop: r, defaultProp: o ?? !0, onChange: i, caller: fs });
    return u.jsx(Wo, {
      present: n || a,
      children: u.jsx(oS, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: an(e.onPause),
        onResume: an(e.onResume),
        onSwipeStart: he(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: he(e.onSwipeMove, (c) => {
          const { x: d, y: f } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            ));
        }),
        onSwipeCancel: he(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: he(e.onSwipeEnd, (c) => {
          const { x: d, y: f } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
Pv.displayName = fs;
var [nS, rS] = Cv(fs, { onClose() {} }),
  oS = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: c,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: m,
        onSwipeEnd: p,
        ...b
      } = e,
      g = hl(fs, n),
      [x, h] = y.useState(null),
      v = Je(t, (O) => h(O)),
      w = y.useRef(null),
      S = y.useRef(null),
      E = o || g.duration,
      C = y.useRef(0),
      k = y.useRef(E),
      N = y.useRef(0),
      { onToastAdd: R, onToastRemove: A } = g,
      D = an(() => {
        var H;
        ((x == null ? void 0 : x.contains(document.activeElement)) &&
          ((H = g.viewport) == null || H.focus()),
          s());
      }),
      L = y.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(N.current),
            (C.current = new Date().getTime()),
            (N.current = window.setTimeout(D, O)));
        },
        [D],
      );
    (y.useEffect(() => {
      const O = g.viewport;
      if (O) {
        const H = () => {
            (L(k.current), c == null || c());
          },
          B = () => {
            const V = new Date().getTime() - C.current;
            ((k.current = k.current - V),
              window.clearTimeout(N.current),
              l == null || l());
          };
        return (
          O.addEventListener(Cu, B),
          O.addEventListener(ku, H),
          () => {
            (O.removeEventListener(Cu, B), O.removeEventListener(ku, H));
          }
        );
      }
    }, [g.viewport, E, l, c, L]),
      y.useEffect(() => {
        i && !g.isClosePausedRef.current && L(E);
      }, [i, E, g.isClosePausedRef, L]),
      y.useEffect(() => (R(), () => A()), [R, A]));
    const W = y.useMemo(() => (x ? Mv(x) : null), [x]);
    return g.viewport
      ? u.jsxs(u.Fragment, {
          children: [
            W &&
              u.jsx(iS, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: W,
              }),
            u.jsx(nS, {
              scope: n,
              onClose: D,
              children: us.createPortal(
                u.jsx(Kd.ItemSlot, {
                  scope: n,
                  children: u.jsx(Mb, {
                    asChild: !0,
                    onEscapeKeyDown: he(a, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || D(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: u.jsx(Ne.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...b,
                      ref: v,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: he(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            D()));
                      }),
                      onPointerDown: he(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (w.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: he(e.onPointerMove, (O) => {
                        if (!w.current) return;
                        const H = O.clientX - w.current.x,
                          B = O.clientY - w.current.y,
                          V = !!S.current,
                          T = ["left", "right"].includes(g.swipeDirection),
                          j = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          M = T ? j(0, H) : 0,
                          U = T ? 0 : j(0, B),
                          $ = O.pointerType === "touch" ? 10 : 2,
                          K = { x: M, y: U },
                          Q = { originalEvent: O, delta: K };
                        V
                          ? ((S.current = K), Bs(Zb, f, Q, { discrete: !1 }))
                          : Vp(K, g.swipeDirection, $)
                            ? ((S.current = K),
                              Bs(Jb, d, Q, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(H) > $ || Math.abs(B) > $) &&
                              (w.current = null);
                      }),
                      onPointerUp: he(e.onPointerUp, (O) => {
                        const H = S.current,
                          B = O.target;
                        if (
                          (B.hasPointerCapture(O.pointerId) &&
                            B.releasePointerCapture(O.pointerId),
                          (S.current = null),
                          (w.current = null),
                          H)
                        ) {
                          const V = O.currentTarget,
                            T = { originalEvent: O, delta: H };
                          (Vp(H, g.swipeDirection, g.swipeThreshold)
                            ? Bs(tS, p, T, { discrete: !0 })
                            : Bs(eS, m, T, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (j) => j.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  iS = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = hl(fs, t),
      [i, s] = y.useState(!1),
      [a, l] = y.useState(!1);
    return (
      lS(() => s(!0)),
      y.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : u.jsx(Hd, {
            asChild: !0,
            children: u.jsx(ml, {
              ...r,
              children:
                i && u.jsxs(u.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  sS = "ToastTitle",
  Rv = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return u.jsx(Ne.div, { ...r, ref: t });
  });
Rv.displayName = sS;
var aS = "ToastDescription",
  Av = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return u.jsx(Ne.div, { ...r, ref: t });
  });
Av.displayName = aS;
var Ov = "ToastAction",
  _v = y.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? u.jsx(Lv, {
          altText: n,
          asChild: !0,
          children: u.jsx(Qd, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Ov}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
_v.displayName = Ov;
var Iv = "ToastClose",
  Qd = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = rS(Iv, n);
    return u.jsx(Lv, {
      asChild: !0,
      children: u.jsx(Ne.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: he(e.onClick, o.onClose),
      }),
    });
  });
Qd.displayName = Iv;
var Lv = y.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return u.jsx(Ne.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Mv(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        cS(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Mv(r));
      }
    }),
    t
  );
}
function Bs(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? xv(o, i) : o.dispatchEvent(i));
}
var Vp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function lS(e = () => {}) {
  const t = an(e);
  Cn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function cS(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function uS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function dc(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var dS = kv,
  Dv = Tv,
  Fv = Pv,
  zv = Rv,
  $v = Av,
  Bv = _v,
  Uv = Qd;
function Vv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Vv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Hv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Vv(e)) && (r && (r += " "), (r += t));
  return r;
}
const Hp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Wp = Hv,
  gl = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Wp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((c) => {
        const d = n == null ? void 0 : n[c],
          f = i == null ? void 0 : i[c];
        if (d === null) return null;
        const m = Hp(d) || Hp(f);
        return o[c][m];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [f, m] = d;
          return (m === void 0 || (c[f] = m), c);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: f, className: m, ...p } = d;
              return Object.entries(p).every((b) => {
                let [g, x] = b;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...a }[g])
                  : { ...i, ...a }[g] === x;
              })
                ? [...c, f, m]
                : c;
            }, []);
    return Wp(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  pS = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase(),
    ),
  Kp = (e) => {
    const t = pS(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Wv = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  mS = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var hS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gS = y.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    y.createElement(
      "svg",
      {
        ref: l,
        ...hS,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Wv("lucide", o),
        ...(!i && !mS(a) && { "aria-hidden": "true" }),
        ...a,
      },
      [
        ...s.map(([c, d]) => y.createElement(c, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const re = (e, t) => {
  const n = y.forwardRef(({ className: r, ...o }, i) =>
    y.createElement(gS, {
      ref: i,
      iconNode: t,
      className: Wv(`lucide-${fS(Kp(e))}`, `lucide-${e}`, r),
      ...o,
    }),
  );
  return ((n.displayName = Kp(e)), n);
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vS = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  Kv = re("arrow-left", vS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yS = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  xS = re("arrow-right", yS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wS = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  Qv = re("award", wS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bS = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  SS = re("calendar", bS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ES = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  CS = re("check", ES);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kS = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  NS = re("circle-check-big", kS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TS = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  jS = re("circle-check", TS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PS = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  RS = re("clock", PS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AS = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  da = re("code", AS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OS = [
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M14 2v2", key: "6buw04" }],
    [
      "path",
      {
        d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
        key: "pwadti",
      },
    ],
    ["path", { d: "M6 2v2", key: "colzsn" }],
  ],
  _S = re("coffee", OS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IS = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  za = re("external-link", IS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LS = [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
  ],
  MS = re("git-branch", LS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DS = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  FS = re("github", DS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zS = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  $S = re("globe", zS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BS = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  US = re("info", BS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VS = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  HS = re("layers", VS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WS = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  KS = re("linkedin", WS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QS = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Gv = re("mail", QS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GS = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  qS = re("map-pin", GS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YS = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  XS = re("menu", YS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JS = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  ZS = re("message-circle", JS);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eE = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
  ],
  Qp = re("palette", eE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tE = [
    ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
    ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  nE = re("phone-call", tE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rE = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  oE = re("phone", rE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iE = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  Tu = re("send", iE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sE = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  aE = re("star", sE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lE = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  cE = re("target", lE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uE = [
    [
      "path",
      {
        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
        key: "1n3hpd",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
        key: "rfe1zi",
      },
    ],
    ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    [
      "path",
      {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq",
      },
    ],
    ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
  ],
  dE = re("trophy", uE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fE = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  pE = re("user", fE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mE = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  qv = re("users", mE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hE = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Gd = re("x", hE);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gE = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  $a = re("zap", gE),
  qd = "-",
  vE = (e) => {
    const t = xE(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(qd);
        return (a[0] === "" && a.length !== 1 && a.shift(), Yv(a, t) || yE(s));
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  Yv = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Yv(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(qd);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Gp = /^\[(.+)\]$/,
  yE = (e) => {
    if (Gp.test(e)) {
      const t = Gp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  xE = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      bE(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        ju(s, r, i, t);
      }),
      r
    );
  },
  ju = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : qp(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (wE(o)) {
          ju(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        ju(s, qp(t, i), n, r);
      });
    });
  },
  qp = (e, t) => {
    let n = e;
    return (
      t.split(qd).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  wE = (e) => e.isThemeGetter,
  bE = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  SE = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      (n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return (o(i, s), s);
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Xv = "!",
  EE = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let c = 0,
          d = 0,
          f;
        for (let x = 0; x < a.length; x++) {
          let h = a[x];
          if (c === 0) {
            if (h === o && (r || a.slice(x, x + i) === t)) {
              (l.push(a.slice(d, x)), (d = x + i));
              continue;
            }
            if (h === "/") {
              f = x;
              continue;
            }
          }
          h === "[" ? c++ : h === "]" && c--;
        }
        const m = l.length === 0 ? a : a.substring(d),
          p = m.startsWith(Xv),
          b = p ? m.substring(1) : m,
          g = f && f > d ? f - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: p,
          baseClassName: b,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  CE = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  kE = (e) => ({ cache: SE(e.cacheSize), parseClassName: EE(e), ...vE(e) }),
  NE = /\s+/,
  TE = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(NE);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const c = s[l],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: p,
        } = n(c);
      let b = !!p,
        g = r(b ? m.substring(0, p) : m);
      if (!g) {
        if (!b) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(m)), !g)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        b = !1;
      }
      const x = CE(d).join(":"),
        h = f ? x + Xv : x,
        v = h + g;
      if (i.includes(v)) continue;
      i.push(v);
      const w = o(g, b);
      for (let S = 0; S < w.length; ++S) {
        const E = w[S];
        i.push(h + E);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function jE() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Jv(t)) && (r && (r += " "), (r += n));
  return r;
}
const Jv = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Jv(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function PE(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const c = t.reduce((d, f) => f(d), e());
    return ((n = kE(c)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const d = TE(l, n);
    return (o(l, d), d);
  }
  return function () {
    return i(jE.apply(null, arguments));
  };
}
const de = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Zv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  RE = /^\d+\/\d+$/,
  AE = new Set(["px", "full", "screen"]),
  OE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  _E =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  IE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  LE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ME =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  fn = (e) => So(e) || AE.has(e) || RE.test(e),
  Ln = (e) => Ko(e, "length", HE),
  So = (e) => !!e && !Number.isNaN(Number(e)),
  fc = (e) => Ko(e, "number", So),
  ui = (e) => !!e && Number.isInteger(Number(e)),
  DE = (e) => e.endsWith("%") && So(e.slice(0, -1)),
  X = (e) => Zv.test(e),
  Mn = (e) => OE.test(e),
  FE = new Set(["length", "size", "percentage"]),
  zE = (e) => Ko(e, FE, ey),
  $E = (e) => Ko(e, "position", ey),
  BE = new Set(["image", "url"]),
  UE = (e) => Ko(e, BE, KE),
  VE = (e) => Ko(e, "", WE),
  di = () => !0,
  Ko = (e, t, n) => {
    const r = Zv.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  HE = (e) => _E.test(e) && !IE.test(e),
  ey = () => !1,
  WE = (e) => LE.test(e),
  KE = (e) => ME.test(e),
  QE = () => {
    const e = de("colors"),
      t = de("spacing"),
      n = de("blur"),
      r = de("brightness"),
      o = de("borderColor"),
      i = de("borderRadius"),
      s = de("borderSpacing"),
      a = de("borderWidth"),
      l = de("contrast"),
      c = de("grayscale"),
      d = de("hueRotate"),
      f = de("invert"),
      m = de("gap"),
      p = de("gradientColorStops"),
      b = de("gradientColorStopPositions"),
      g = de("inset"),
      x = de("margin"),
      h = de("opacity"),
      v = de("padding"),
      w = de("saturate"),
      S = de("scale"),
      E = de("sepia"),
      C = de("skew"),
      k = de("space"),
      N = de("translate"),
      R = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", X, t],
      L = () => [X, t],
      W = () => ["", fn, Ln],
      O = () => ["auto", So, X],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      B = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      j = () => ["", "0", X],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [So, X];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [di],
        spacing: [fn, Ln],
        blur: ["none", "", Mn, X],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Mn, X],
        borderSpacing: L(),
        borderWidth: W(),
        contrast: U(),
        grayscale: j(),
        hueRotate: U(),
        invert: j(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [DE, Ln],
        inset: D(),
        margin: D(),
        opacity: U(),
        padding: L(),
        saturate: U(),
        scale: U(),
        sepia: j(),
        skew: U(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", X] }],
        container: ["container"],
        columns: [{ columns: [Mn] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), X] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: R() }],
        "overscroll-x": [{ "overscroll-x": R() }],
        "overscroll-y": [{ "overscroll-y": R() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ui, X] }],
        basis: [{ basis: D() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", X] }],
        grow: [{ grow: j() }],
        shrink: [{ shrink: j() }],
        order: [{ order: ["first", "last", "none", ui, X] }],
        "grid-cols": [{ "grid-cols": [di] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ui, X] }, X] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [di] }],
        "row-start-end": [{ row: ["auto", { span: [ui, X] }, X] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [v] }],
        px: [{ px: [v] }],
        py: [{ py: [v] }],
        ps: [{ ps: [v] }],
        pe: [{ pe: [v] }],
        pt: [{ pt: [v] }],
        pr: [{ pr: [v] }],
        pb: [{ pb: [v] }],
        pl: [{ pl: [v] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
        "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              X,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Mn] },
              Mn,
            ],
          },
        ],
        h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Mn, Ln] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              fc,
            ],
          },
        ],
        "font-family": [{ font: [di] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              X,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", So, fc] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              fn,
              X,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", X] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", fn, Ln] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", fn, X] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", X] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), $E] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", zE] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              UE,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...B(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: B() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...B()] }],
        "outline-offset": [{ "outline-offset": [fn, X] }],
        "outline-w": [{ outline: [fn, Ln] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: W() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [fn, Ln] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Mn, VE] }],
        "shadow-color": [{ shadow: [di] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Mn, X] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              X,
            ],
          },
        ],
        duration: [{ duration: U() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
        delay: [{ delay: U() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [ui, X] }],
        "translate-x": [{ "translate-x": [N] }],
        "translate-y": [{ "translate-y": [N] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              X,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              X,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", X] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [fn, Ln, fc] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  GE = PE(QE);
function se(...e) {
  return GE(Hv(e));
}
const qE = dS,
  ty = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(Dv, {
      ref: n,
      className: se(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
ty.displayName = Dv.displayName;
const YE = gl(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  ny = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    u.jsx(Fv, { ref: r, className: se(YE({ variant: t }), e), ...n }),
  );
ny.displayName = Fv.displayName;
const XE = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(Bv, {
    ref: n,
    className: se(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
XE.displayName = Bv.displayName;
const ry = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(Uv, {
    ref: n,
    className: se(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: u.jsx(Gd, { className: "h-4 w-4" }),
  }),
);
ry.displayName = Uv.displayName;
const oy = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(zv, { ref: n, className: se("text-sm font-semibold", e), ...t }),
);
oy.displayName = zv.displayName;
const iy = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx($v, { ref: n, className: se("text-sm opacity-90", e), ...t }),
);
iy.displayName = $v.displayName;
function JE() {
  const { toasts: e } = Vd();
  return u.jsxs(qE, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return u.jsxs(
          ny,
          {
            ...i,
            children: [
              u.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && u.jsx(oy, { children: n }),
                  r && u.jsx(iy, { children: r }),
                ],
              }),
              o,
              u.jsx(ry, {}),
            ],
          },
          t,
        );
      }),
      u.jsx(ty, {}),
    ],
  });
}
var Yp = ["light", "dark"],
  ZE = "(prefers-color-scheme: dark)",
  eC = y.createContext(void 0),
  tC = { setTheme: (e) => {}, themes: [] },
  nC = () => {
    var e;
    return (e = y.useContext(eC)) != null ? e : tC;
  };
y.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let c = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((b) => `'${b}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? Yp.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      m = (b, g = !1, x = !0) => {
        let h = s ? s[b] : b,
          v = g ? b + "|| ''" : `'${h}'`,
          w = "";
        return (
          o &&
            x &&
            !g &&
            Yp.includes(b) &&
            (w += `d.style.colorScheme = '${b}';`),
          n === "class"
            ? g || h
              ? (w += `c.add(${v})`)
              : (w += "null")
            : h && (w += `d[s](n,${v})`),
          w
        );
      },
      p = e
        ? `!function(){${d}${m(e)}}()`
        : r
          ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${ZE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + m(i, !1, !1) + "}"}${f}}catch(e){}}()`
          : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(i, !1, !1)};}${f}}catch(t){}}();`;
    return y.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var rC = (e) => {
    switch (e) {
      case "success":
        return sC;
      case "info":
        return lC;
      case "warning":
        return aC;
      case "error":
        return cC;
      default:
        return null;
    }
  },
  oC = Array(12).fill(0),
  iC = ({ visible: e, className: t }) =>
    I.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      I.createElement(
        "div",
        { className: "sonner-spinner" },
        oC.map((n, r) =>
          I.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  sC = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  aC = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  lC = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  cC = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  uC = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    I.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    I.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  dC = () => {
    let [e, t] = I.useState(document.hidden);
    return (
      I.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Pu = 1,
  fC = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Pu++,
            i = this.toasts.find((a) => a.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: s, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (l) => {
                if (((i = ["resolve", l]), I.isValidElement(l)))
                  ((o = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (mC(l) && !l.ok) {
                  o = !1;
                  let c =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let c =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: c,
                    description: d,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  o = !1;
                  let c =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var l;
                (o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, c) =>
                s.then(() => (i[0] === "reject" ? c(i[1]) : l(i[1]))).catch(c),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Pu++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  nt = new fC(),
  pC = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Pu++;
    return (nt.addToast({ title: e, ...t, id: n }), n);
  },
  mC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  hC = pC,
  gC = () => nt.toasts,
  vC = () => nt.getActiveToasts();
Object.assign(
  hC,
  {
    success: nt.success,
    info: nt.info,
    warning: nt.warning,
    error: nt.error,
    custom: nt.custom,
    message: nt.message,
    promise: nt.promise,
    dismiss: nt.dismiss,
    loading: nt.loading,
  },
  { getHistory: gC, getToasts: vC },
);
function yC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
yC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Us(e) {
  return e.label !== void 0;
}
var xC = 3,
  wC = "32px",
  bC = "16px",
  Xp = 4e3,
  SC = 356,
  EC = 14,
  CC = 20,
  kC = 200;
function Lt(...e) {
  return e.filter(Boolean).join(" ");
}
function NC(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var TC = (e) => {
  var t, n, r, o, i, s, a, l, c, d, f;
  let {
      invert: m,
      toast: p,
      unstyled: b,
      interacting: g,
      setHeights: x,
      visibleToasts: h,
      heights: v,
      index: w,
      toasts: S,
      expanded: E,
      removeToast: C,
      defaultRichColors: k,
      closeButton: N,
      style: R,
      cancelButtonStyle: A,
      actionButtonStyle: D,
      className: L = "",
      descriptionClassName: W = "",
      duration: O,
      position: H,
      gap: B,
      loadingIcon: V,
      expandByDefault: T,
      classNames: j,
      icons: M,
      closeButtonAriaLabel: U = "Close toast",
      pauseWhenPageIsHidden: $,
    } = e,
    [K, Q] = I.useState(null),
    [ae, we] = I.useState(null),
    [q, be] = I.useState(!1),
    [Oe, Te] = I.useState(!1),
    [te, z] = I.useState(!1),
    [Z, ue] = I.useState(!1),
    [Pe, Ke] = I.useState(!1),
    [lt, ct] = I.useState(0),
    [Qe, Yt] = I.useState(0),
    Tt = I.useRef(p.duration || O || Xp),
    Kr = I.useRef(null),
    jt = I.useRef(null),
    gs = w === 0,
    vs = w + 1 <= h,
    tt = p.type,
    un = p.dismissible !== !1,
    Pl = p.className || "",
    Xo = p.descriptionClassName || "",
    Pt = I.useMemo(
      () => v.findIndex((G) => G.toastId === p.id) || 0,
      [v, p.id],
    ),
    Jo = I.useMemo(() => {
      var G;
      return (G = p.closeButton) != null ? G : N;
    }, [p.closeButton, N]),
    Qr = I.useMemo(() => p.duration || O || Xp, [p.duration, O]),
    Pn = I.useRef(0),
    Rn = I.useRef(0),
    ys = I.useRef(0),
    An = I.useRef(null),
    [Rl, Al] = H.split("-"),
    Zo = I.useMemo(
      () => v.reduce((G, oe, le) => (le >= Pt ? G : G + oe.height), 0),
      [v, Pt],
    ),
    xs = dC(),
    ws = p.invert || m,
    Gr = tt === "loading";
  ((Rn.current = I.useMemo(() => Pt * B + Zo, [Pt, Zo])),
    I.useEffect(() => {
      Tt.current = Qr;
    }, [Qr]),
    I.useEffect(() => {
      be(!0);
    }, []),
    I.useEffect(() => {
      let G = jt.current;
      if (G) {
        let oe = G.getBoundingClientRect().height;
        return (
          Yt(oe),
          x((le) => [
            { toastId: p.id, height: oe, position: p.position },
            ...le,
          ]),
          () => x((le) => le.filter((At) => At.toastId !== p.id))
        );
      }
    }, [x, p.id]),
    I.useLayoutEffect(() => {
      if (!q) return;
      let G = jt.current,
        oe = G.style.height;
      G.style.height = "auto";
      let le = G.getBoundingClientRect().height;
      ((G.style.height = oe),
        Yt(le),
        x((At) =>
          At.find((Ot) => Ot.toastId === p.id)
            ? At.map((Ot) => (Ot.toastId === p.id ? { ...Ot, height: le } : Ot))
            : [{ toastId: p.id, height: le, position: p.position }, ...At],
        ));
    }, [q, p.title, p.description, x, p.id]));
  let Rt = I.useCallback(() => {
    (Te(!0),
      ct(Rn.current),
      x((G) => G.filter((oe) => oe.toastId !== p.id)),
      setTimeout(() => {
        C(p);
      }, kC));
  }, [p, C, x, Rn]);
  (I.useEffect(() => {
    if (
      (p.promise && tt === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let G;
    return (
      E || g || ($ && xs)
        ? (() => {
            if (ys.current < Pn.current) {
              let oe = new Date().getTime() - Pn.current;
              Tt.current = Tt.current - oe;
            }
            ys.current = new Date().getTime();
          })()
        : Tt.current !== 1 / 0 &&
          ((Pn.current = new Date().getTime()),
          (G = setTimeout(() => {
            var oe;
            ((oe = p.onAutoClose) == null || oe.call(p, p), Rt());
          }, Tt.current))),
      () => clearTimeout(G)
    );
  }, [E, g, p, tt, $, xs, Rt]),
    I.useEffect(() => {
      p.delete && Rt();
    }, [Rt, p.delete]));
  function Ol() {
    var G, oe, le;
    return M != null && M.loading
      ? I.createElement(
          "div",
          {
            className: Lt(
              j == null ? void 0 : j.loader,
              (G = p == null ? void 0 : p.classNames) == null
                ? void 0
                : G.loader,
              "sonner-loader",
            ),
            "data-visible": tt === "loading",
          },
          M.loading,
        )
      : V
        ? I.createElement(
            "div",
            {
              className: Lt(
                j == null ? void 0 : j.loader,
                (oe = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : oe.loader,
                "sonner-loader",
              ),
              "data-visible": tt === "loading",
            },
            V,
          )
        : I.createElement(iC, {
            className: Lt(
              j == null ? void 0 : j.loader,
              (le = p == null ? void 0 : p.classNames) == null
                ? void 0
                : le.loader,
            ),
            visible: tt === "loading",
          });
  }
  return I.createElement(
    "li",
    {
      tabIndex: 0,
      ref: jt,
      className: Lt(
        L,
        Pl,
        j == null ? void 0 : j.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        j == null ? void 0 : j.default,
        j == null ? void 0 : j[tt],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[tt],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : k,
      "data-styled": !(p.jsx || p.unstyled || b),
      "data-mounted": q,
      "data-promise": !!p.promise,
      "data-swiped": Pe,
      "data-removed": Oe,
      "data-visible": vs,
      "data-y-position": Rl,
      "data-x-position": Al,
      "data-index": w,
      "data-front": gs,
      "data-swiping": te,
      "data-dismissible": un,
      "data-type": tt,
      "data-invert": ws,
      "data-swipe-out": Z,
      "data-swipe-direction": ae,
      "data-expanded": !!(E || (T && q)),
      style: {
        "--index": w,
        "--toasts-before": w,
        "--z-index": S.length - w,
        "--offset": `${Oe ? lt : Rn.current}px`,
        "--initial-height": T ? "auto" : `${Qe}px`,
        ...R,
        ...p.style,
      },
      onDragEnd: () => {
        (z(!1), Q(null), (An.current = null));
      },
      onPointerDown: (G) => {
        Gr ||
          !un ||
          ((Kr.current = new Date()),
          ct(Rn.current),
          G.target.setPointerCapture(G.pointerId),
          G.target.tagName !== "BUTTON" &&
            (z(!0), (An.current = { x: G.clientX, y: G.clientY })));
      },
      onPointerUp: () => {
        var G, oe, le, At;
        if (Z || !un) return;
        An.current = null;
        let Ot = Number(
            ((G = jt.current) == null
              ? void 0
              : G.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          On = Number(
            ((oe = jt.current) == null
              ? void 0
              : oe.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          yr =
            new Date().getTime() -
            ((le = Kr.current) == null ? void 0 : le.getTime()),
          _t = K === "x" ? Ot : On,
          _n = Math.abs(_t) / yr;
        if (Math.abs(_t) >= CC || _n > 0.11) {
          (ct(Rn.current),
            (At = p.onDismiss) == null || At.call(p, p),
            we(
              K === "x" ? (Ot > 0 ? "right" : "left") : On > 0 ? "down" : "up",
            ),
            Rt(),
            ue(!0),
            Ke(!1));
          return;
        }
        (z(!1), Q(null));
      },
      onPointerMove: (G) => {
        var oe, le, At, Ot;
        if (
          !An.current ||
          !un ||
          ((oe = window.getSelection()) == null
            ? void 0
            : oe.toString().length) > 0
        )
          return;
        let On = G.clientY - An.current.y,
          yr = G.clientX - An.current.x,
          _t = (le = e.swipeDirections) != null ? le : NC(H);
        !K &&
          (Math.abs(yr) > 1 || Math.abs(On) > 1) &&
          Q(Math.abs(yr) > Math.abs(On) ? "x" : "y");
        let _n = { x: 0, y: 0 };
        (K === "y"
          ? (_t.includes("top") || _t.includes("bottom")) &&
            ((_t.includes("top") && On < 0) ||
              (_t.includes("bottom") && On > 0)) &&
            (_n.y = On)
          : K === "x" &&
            (_t.includes("left") || _t.includes("right")) &&
            ((_t.includes("left") && yr < 0) ||
              (_t.includes("right") && yr > 0)) &&
            (_n.x = yr),
          (Math.abs(_n.x) > 0 || Math.abs(_n.y) > 0) && Ke(!0),
          (At = jt.current) == null ||
            At.style.setProperty("--swipe-amount-x", `${_n.x}px`),
          (Ot = jt.current) == null ||
            Ot.style.setProperty("--swipe-amount-y", `${_n.y}px`));
      },
    },
    Jo && !p.jsx
      ? I.createElement(
          "button",
          {
            "aria-label": U,
            "data-disabled": Gr,
            "data-close-button": !0,
            onClick:
              Gr || !un
                ? () => {}
                : () => {
                    var G;
                    (Rt(), (G = p.onDismiss) == null || G.call(p, p));
                  },
            className: Lt(
              j == null ? void 0 : j.closeButton,
              (o = p == null ? void 0 : p.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (i = M == null ? void 0 : M.close) != null ? i : uC,
        )
      : null,
    p.jsx || y.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
          ? p.title()
          : p.title
      : I.createElement(
          I.Fragment,
          null,
          tt || p.icon || p.promise
            ? I.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Lt(
                    j == null ? void 0 : j.icon,
                    (s = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : s.icon,
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || Ol()
                  : null,
                p.type !== "loading"
                  ? p.icon || (M == null ? void 0 : M[tt]) || rC(tt)
                  : null,
              )
            : null,
          I.createElement(
            "div",
            {
              "data-content": "",
              className: Lt(
                j == null ? void 0 : j.content,
                (a = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            I.createElement(
              "div",
              {
                "data-title": "",
                className: Lt(
                  j == null ? void 0 : j.title,
                  (l = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof p.title == "function" ? p.title() : p.title,
            ),
            p.description
              ? I.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Lt(
                      W,
                      Xo,
                      j == null ? void 0 : j.description,
                      (c = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : c.description,
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description,
                )
              : null,
          ),
          y.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && Us(p.cancel)
              ? I.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: p.cancelButtonStyle || A,
                    onClick: (G) => {
                      var oe, le;
                      Us(p.cancel) &&
                        un &&
                        ((le = (oe = p.cancel).onClick) == null ||
                          le.call(oe, G),
                        Rt());
                    },
                    className: Lt(
                      j == null ? void 0 : j.cancelButton,
                      (d = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : d.cancelButton,
                    ),
                  },
                  p.cancel.label,
                )
              : null,
          y.isValidElement(p.action)
            ? p.action
            : p.action && Us(p.action)
              ? I.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: p.actionButtonStyle || D,
                    onClick: (G) => {
                      var oe, le;
                      Us(p.action) &&
                        ((le = (oe = p.action).onClick) == null ||
                          le.call(oe, G),
                        !G.defaultPrevented && Rt());
                    },
                    className: Lt(
                      j == null ? void 0 : j.actionButton,
                      (f = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : f.actionButton,
                    ),
                  },
                  p.action.label,
                )
              : null,
        ),
  );
};
function Jp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function jC(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        a = i ? bC : wC;
      function l(c) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${s}-${d}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((c) => {
              r[c] === void 0
                ? (n[`${s}-${c}`] = a)
                : (n[`${s}-${c}`] =
                    typeof r[c] == "number" ? `${r[c]}px` : r[c]);
            })
          : l(a);
    }),
    n
  );
}
var PC = y.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: c,
      theme: d = "light",
      richColors: f,
      duration: m,
      style: p,
      visibleToasts: b = xC,
      toastOptions: g,
      dir: x = Jp(),
      gap: h = EC,
      loadingIcon: v,
      icons: w,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [C, k] = I.useState([]),
    N = I.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(C.filter(($) => $.position).map(($) => $.position)),
          ),
        ),
      [C, r],
    ),
    [R, A] = I.useState([]),
    [D, L] = I.useState(!1),
    [W, O] = I.useState(!1),
    [H, B] = I.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    V = I.useRef(null),
    T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    j = I.useRef(null),
    M = I.useRef(!1),
    U = I.useCallback(($) => {
      k((K) => {
        var Q;
        return (
          ((Q = K.find((ae) => ae.id === $.id)) != null && Q.delete) ||
            nt.dismiss($.id),
          K.filter(({ id: ae }) => ae !== $.id)
        );
      });
    }, []);
  return (
    I.useEffect(
      () =>
        nt.subscribe(($) => {
          if ($.dismiss) {
            k((K) => K.map((Q) => (Q.id === $.id ? { ...Q, delete: !0 } : Q)));
            return;
          }
          setTimeout(() => {
            lv.flushSync(() => {
              k((K) => {
                let Q = K.findIndex((ae) => ae.id === $.id);
                return Q !== -1
                  ? [...K.slice(0, Q), { ...K[Q], ...$ }, ...K.slice(Q + 1)]
                  : [$, ...K];
              });
            });
          });
        }),
      [],
    ),
    I.useEffect(() => {
      if (d !== "system") {
        B(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? B("dark")
            : B("light")),
        typeof window > "u")
      )
        return;
      let $ = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        $.addEventListener("change", ({ matches: K }) => {
          B(K ? "dark" : "light");
        });
      } catch {
        $.addListener(({ matches: Q }) => {
          try {
            B(Q ? "dark" : "light");
          } catch (ae) {
            console.error(ae);
          }
        });
      }
    }, [d]),
    I.useEffect(() => {
      C.length <= 1 && L(!1);
    }, [C]),
    I.useEffect(() => {
      let $ = (K) => {
        var Q, ae;
        (o.every((we) => K[we] || K.code === we) &&
          (L(!0), (Q = V.current) == null || Q.focus()),
          K.code === "Escape" &&
            (document.activeElement === V.current ||
              ((ae = V.current) != null &&
                ae.contains(document.activeElement))) &&
            L(!1));
      };
      return (
        document.addEventListener("keydown", $),
        () => document.removeEventListener("keydown", $)
      );
    }, [o]),
    I.useEffect(() => {
      if (V.current)
        return () => {
          j.current &&
            (j.current.focus({ preventScroll: !0 }),
            (j.current = null),
            (M.current = !1));
        };
    }, [V.current]),
    I.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      N.map(($, K) => {
        var Q;
        let [ae, we] = $.split("-");
        return C.length
          ? I.createElement(
              "ol",
              {
                key: $,
                dir: x === "auto" ? Jp() : x,
                tabIndex: -1,
                ref: V,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": H,
                "data-y-position": ae,
                "data-lifted": D && C.length > 1 && !i,
                "data-x-position": we,
                style: {
                  "--front-toast-height": `${((Q = R[0]) == null ? void 0 : Q.height) || 0}px`,
                  "--width": `${SC}px`,
                  "--gap": `${h}px`,
                  ...p,
                  ...jC(l, c),
                },
                onBlur: (q) => {
                  M.current &&
                    !q.currentTarget.contains(q.relatedTarget) &&
                    ((M.current = !1),
                    j.current &&
                      (j.current.focus({ preventScroll: !0 }),
                      (j.current = null)));
                },
                onFocus: (q) => {
                  (q.target instanceof HTMLElement &&
                    q.target.dataset.dismissible === "false") ||
                    M.current ||
                    ((M.current = !0), (j.current = q.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  W || L(!1);
                },
                onDragEnd: () => L(!1),
                onPointerDown: (q) => {
                  (q.target instanceof HTMLElement &&
                    q.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              C.filter((q) => (!q.position && K === 0) || q.position === $).map(
                (q, be) => {
                  var Oe, Te;
                  return I.createElement(TC, {
                    key: q.id,
                    icons: w,
                    index: be,
                    toast: q,
                    defaultRichColors: f,
                    duration:
                      (Oe = g == null ? void 0 : g.duration) != null ? Oe : m,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: b,
                    closeButton:
                      (Te = g == null ? void 0 : g.closeButton) != null
                        ? Te
                        : s,
                    interacting: W,
                    position: $,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: U,
                    toasts: C.filter((te) => te.position == q.position),
                    heights: R.filter((te) => te.position == q.position),
                    setHeights: A,
                    expandByDefault: i,
                    gap: h,
                    loadingIcon: v,
                    expanded: D,
                    pauseWhenPageIsHidden: E,
                    swipeDirections: e.swipeDirections,
                  });
                },
              ),
            )
          : null;
      }),
    )
  );
});
const RC = ({ ...e }) => {
  const { theme: t = "system" } = nC();
  return u.jsx(PC, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var AC = Xu[" useId ".trim().toString()] || (() => {}),
  OC = 0;
function pc(e) {
  const [t, n] = y.useState(AC());
  return (
    Cn(() => {
      e || n((r) => r ?? String(OC++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const _C = ["top", "right", "bottom", "left"],
  ur = Math.min,
  dt = Math.max,
  Ba = Math.round,
  Vs = Math.floor,
  dr = (e) => ({ x: e, y: e }),
  IC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  LC = { start: "end", end: "start" };
function Ru(e, t, n) {
  return dt(e, ur(t, n));
}
function kn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nn(e) {
  return e.split("-")[0];
}
function Qo(e) {
  return e.split("-")[1];
}
function Yd(e) {
  return e === "x" ? "y" : "x";
}
function Xd(e) {
  return e === "y" ? "height" : "width";
}
function fr(e) {
  return ["top", "bottom"].includes(Nn(e)) ? "y" : "x";
}
function Jd(e) {
  return Yd(fr(e));
}
function MC(e, t, n) {
  n === void 0 && (n = !1);
  const r = Qo(e),
    o = Jd(e),
    i = Xd(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (s = Ua(s)), [s, Ua(s)]);
}
function DC(e) {
  const t = Ua(e);
  return [Au(e), t, Au(t)];
}
function Au(e) {
  return e.replace(/start|end/g, (t) => LC[t]);
}
function FC(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function zC(e, t, n, r) {
  const o = Qo(e);
  let i = FC(Nn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Au)))),
    i
  );
}
function Ua(e) {
  return e.replace(/left|right|bottom|top/g, (t) => IC[t]);
}
function $C(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function sy(e) {
  return typeof e != "number"
    ? $C(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Va(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Zp(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = fr(t),
    s = Jd(t),
    a = Xd(s),
    l = Nn(t),
    c = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    m = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: f };
      break;
    case "left":
      p = { x: r.x - o.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Qo(t)) {
    case "start":
      p[s] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += m * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const BC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = Zp(c, r, l),
    m = r,
    p = {},
    b = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: x, fn: h } = a[g],
      {
        x: v,
        y: w,
        data: S,
        reset: E,
      } = await h({
        x: d,
        y: f,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: p,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((d = v ?? d),
      (f = w ?? f),
      (p = { ...p, [x]: { ...p[x], ...S } }),
      E &&
        b <= 50 &&
        (b++,
        typeof E == "object" &&
          (E.placement && (m = E.placement),
          E.rects &&
            (c =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: f } = Zp(c, m, l))),
        (g = -1)));
  }
  return { x: d, y: f, placement: m, strategy: o, middlewareData: p };
};
async function Qi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: m = !1,
      padding: p = 0,
    } = kn(t, e),
    b = sy(p),
    x = a[m ? (f === "floating" ? "reference" : "floating") : f],
    h = Va(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    v =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    w = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(w)))
      ? (await (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Va(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: v,
            offsetParent: w,
            strategy: l,
          })
        : v,
    );
  return {
    top: (h.top - E.top + b.top) / S.y,
    bottom: (E.bottom - h.bottom + b.bottom) / S.y,
    left: (h.left - E.left + b.left) / S.x,
    right: (E.right - h.right + b.right) / S.x,
  };
}
const UC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = kn(e, t) || {};
      if (c == null) return {};
      const f = sy(d),
        m = { x: n, y: r },
        p = Jd(o),
        b = Xd(p),
        g = await s.getDimensions(c),
        x = p === "y",
        h = x ? "top" : "left",
        v = x ? "bottom" : "right",
        w = x ? "clientHeight" : "clientWidth",
        S = i.reference[b] + i.reference[p] - m[p] - i.floating[b],
        E = m[p] - i.reference[p],
        C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let k = C ? C[w] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(C)))) &&
        (k = a.floating[w] || i.floating[b]);
      const N = S / 2 - E / 2,
        R = k / 2 - g[b] / 2 - 1,
        A = ur(f[h], R),
        D = ur(f[v], R),
        L = A,
        W = k - g[b] - D,
        O = k / 2 - g[b] / 2 + N,
        H = Ru(L, O, W),
        B =
          !l.arrow &&
          Qo(o) != null &&
          O !== H &&
          i.reference[b] / 2 - (O < L ? A : D) - g[b] / 2 < 0,
        V = B ? (O < L ? O - L : O - W) : 0;
      return {
        [p]: m[p] + V,
        data: {
          [p]: H,
          centerOffset: O - H - V,
          ...(B && { alignmentOffset: V }),
        },
        reset: B,
      };
    },
  }),
  VC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: m,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: g = !0,
              ...x
            } = kn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = Nn(o),
            v = fr(a),
            w = Nn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            E = m || (w || !g ? [Ua(a)] : DC(a)),
            C = b !== "none";
          !m && C && E.push(...zC(a, g, b, S));
          const k = [a, ...E],
            N = await Qi(t, x),
            R = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && R.push(N[h]), f)) {
            const O = MC(o, s, S);
            R.push(N[O[0]], N[O[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: R }]),
            !R.every((O) => O <= 0))
          ) {
            var D, L;
            const O = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1,
              H = k[O];
            if (H)
              return {
                data: { index: O, overflows: A },
                reset: { placement: H },
              };
            let B =
              (L = A.filter((V) => V.overflows[0] <= 0).sort(
                (V, T) => V.overflows[1] - T.overflows[1],
              )[0]) == null
                ? void 0
                : L.placement;
            if (!B)
              switch (p) {
                case "bestFit": {
                  var W;
                  const V =
                    (W = A.filter((T) => {
                      if (C) {
                        const j = fr(T.placement);
                        return j === v || j === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((j) => j > 0)
                          .reduce((j, M) => j + M, 0),
                      ])
                      .sort((T, j) => T[1] - j[1])[0]) == null
                      ? void 0
                      : W[0];
                  V && (B = V);
                  break;
                }
                case "initialPlacement":
                  B = a;
                  break;
              }
            if (o !== B) return { reset: { placement: B } };
          }
          return {};
        },
      }
    );
  };
function em(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function tm(e) {
  return _C.some((t) => e[t] >= 0);
}
const HC = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = kn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Qi(t, { ...o, elementContext: "reference" }),
              s = em(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: tm(s) },
            };
          }
          case "escaped": {
            const i = await Qi(t, { ...o, altBoundary: !0 }),
              s = em(i, n.floating);
            return { data: { escapedOffsets: s, escaped: tm(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function WC(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Nn(n),
    a = Qo(n),
    l = fr(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    d = i && l ? -1 : 1,
    f = kn(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: b,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof b == "number" && (p = a === "end" ? b * -1 : b),
    l ? { x: p * d, y: m * c } : { x: m * c, y: p * d }
  );
}
const KC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await WC(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  QC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: h, y: v } = x;
                  return { x: h, y: v };
                },
              },
              ...l
            } = kn(e, t),
            c = { x: n, y: r },
            d = await Qi(t, l),
            f = fr(Nn(o)),
            m = Yd(f);
          let p = c[m],
            b = c[f];
          if (i) {
            const x = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              v = p + d[x],
              w = p - d[h];
            p = Ru(v, p, w);
          }
          if (s) {
            const x = f === "y" ? "top" : "left",
              h = f === "y" ? "bottom" : "right",
              v = b + d[x],
              w = b - d[h];
            b = Ru(v, b, w);
          }
          const g = a.fn({ ...t, [m]: p, [f]: b });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [m]: i, [f]: s } },
          };
        },
      }
    );
  },
  GC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = kn(e, t),
            d = { x: n, y: r },
            f = fr(o),
            m = Yd(f);
          let p = d[m],
            b = d[f];
          const g = kn(a, t),
            x =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const w = m === "y" ? "height" : "width",
              S = i.reference[m] - i.floating[w] + x.mainAxis,
              E = i.reference[m] + i.reference[w] - x.mainAxis;
            p < S ? (p = S) : p > E && (p = E);
          }
          if (c) {
            var h, v;
            const w = m === "y" ? "width" : "height",
              S = ["top", "left"].includes(Nn(o)),
              E =
                i.reference[f] -
                i.floating[w] +
                ((S && ((h = s.offset) == null ? void 0 : h[f])) || 0) +
                (S ? 0 : x.crossAxis),
              C =
                i.reference[f] +
                i.reference[w] +
                (S ? 0 : ((v = s.offset) == null ? void 0 : v[f]) || 0) -
                (S ? x.crossAxis : 0);
            b < E ? (b = E) : b > C && (b = C);
          }
          return { [m]: p, [f]: b };
        },
      }
    );
  },
  qC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...c } = kn(e, t),
            d = await Qi(t, c),
            f = Nn(o),
            m = Qo(o),
            p = fr(o) === "y",
            { width: b, height: g } = i.floating;
          let x, h;
          f === "top" || f === "bottom"
            ? ((x = f),
              (h =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = f), (x = m === "end" ? "top" : "bottom"));
          const v = g - d.top - d.bottom,
            w = b - d.left - d.right,
            S = ur(g - d[x], v),
            E = ur(b - d[h], w),
            C = !t.middlewareData.shift;
          let k = S,
            N = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (N = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = v),
            C && !m)
          ) {
            const A = dt(d.left, 0),
              D = dt(d.right, 0),
              L = dt(d.top, 0),
              W = dt(d.bottom, 0);
            p
              ? (N = b - 2 * (A !== 0 || D !== 0 ? A + D : dt(d.left, d.right)))
              : (k =
                  g - 2 * (L !== 0 || W !== 0 ? L + W : dt(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: N, availableHeight: k });
          const R = await s.getDimensions(a.floating);
          return b !== R.width || g !== R.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function vl() {
  return typeof window < "u";
}
function Go(e) {
  return ay(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ht(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function cn(e) {
  var t;
  return (t = (ay(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function ay(e) {
  return vl() ? e instanceof Node || e instanceof ht(e).Node : !1;
}
function Qt(e) {
  return vl() ? e instanceof Element || e instanceof ht(e).Element : !1;
}
function ln(e) {
  return vl() ? e instanceof HTMLElement || e instanceof ht(e).HTMLElement : !1;
}
function nm(e) {
  return !vl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ht(e).ShadowRoot;
}
function ps(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Gt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function YC(e) {
  return ["table", "td", "th"].includes(Go(e));
}
function yl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Zd(e) {
  const t = ef(),
    n = Qt(e) ? Gt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function XC(e) {
  let t = pr(e);
  for (; ln(t) && !$o(t); ) {
    if (Zd(t)) return t;
    if (yl(t)) return null;
    t = pr(t);
  }
  return null;
}
function ef() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function $o(e) {
  return ["html", "body", "#document"].includes(Go(e));
}
function Gt(e) {
  return ht(e).getComputedStyle(e);
}
function xl(e) {
  return Qt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function pr(e) {
  if (Go(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (nm(e) && e.host) || cn(e);
  return nm(t) ? t.host : t;
}
function ly(e) {
  const t = pr(e);
  return $o(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ln(t) && ps(t)
      ? t
      : ly(t);
}
function Gi(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = ly(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ht(o);
  if (i) {
    const a = Ou(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ps(o) ? o : [],
      a && n ? Gi(a) : [],
    );
  }
  return t.concat(o, Gi(o, [], n));
}
function Ou(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cy(e) {
  const t = Gt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = ln(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Ba(n) !== i || Ba(r) !== s;
  return (a && ((n = i), (r = s)), { width: n, height: r, $: a });
}
function tf(e) {
  return Qt(e) ? e : e.contextElement;
}
function Eo(e) {
  const t = tf(e);
  if (!ln(t)) return dr(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = cy(t);
  let s = (i ? Ba(n.width) : n.width) / r,
    a = (i ? Ba(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const JC = dr(0);
function uy(e) {
  const t = ht(e);
  return !ef() || !t.visualViewport
    ? JC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ZC(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ht(e)) ? !1 : t);
}
function $r(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    i = tf(e);
  let s = dr(1);
  t && (r ? Qt(r) && (s = Eo(r)) : (s = Eo(e)));
  const a = ZC(i, n, r) ? uy(i) : dr(0);
  let l = (o.left + a.x) / s.x,
    c = (o.top + a.y) / s.y,
    d = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const m = ht(i),
      p = r && Qt(r) ? ht(r) : r;
    let b = m,
      g = Ou(b);
    for (; g && r && p !== b; ) {
      const x = Eo(g),
        h = g.getBoundingClientRect(),
        v = Gt(g),
        w = h.left + (g.clientLeft + parseFloat(v.paddingLeft)) * x.x,
        S = h.top + (g.clientTop + parseFloat(v.paddingTop)) * x.y;
      ((l *= x.x),
        (c *= x.y),
        (d *= x.x),
        (f *= x.y),
        (l += w),
        (c += S),
        (b = ht(g)),
        (g = Ou(b)));
    }
  }
  return Va({ width: d, height: f, x: l, y: c });
}
function ek(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = cn(r),
    a = t ? yl(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = dr(1);
  const d = dr(0),
    f = ln(r);
  if (
    (f || (!f && !i)) &&
    ((Go(r) !== "body" || ps(s)) && (l = xl(r)), ln(r))
  ) {
    const m = $r(r);
    ((c = Eo(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop));
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y,
  };
}
function tk(e) {
  return Array.from(e.getClientRects());
}
function _u(e, t) {
  const n = xl(e).scrollLeft;
  return t ? t.left + n : $r(cn(e)).left + n;
}
function nk(e) {
  const t = cn(e),
    n = xl(e),
    r = e.ownerDocument.body,
    o = dt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = dt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + _u(e);
  const a = -n.scrollTop;
  return (
    Gt(r).direction === "rtl" && (s += dt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function rk(e, t) {
  const n = ht(e),
    r = cn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    const c = ef();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function ok(e, t) {
  const n = $r(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = ln(e) ? Eo(e) : dr(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    c = r * i.y;
  return { width: s, height: a, x: l, y: c };
}
function rm(e, t, n) {
  let r;
  if (t === "viewport") r = rk(e, n);
  else if (t === "document") r = nk(cn(e));
  else if (Qt(t)) r = ok(t, n);
  else {
    const o = uy(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Va(r);
}
function dy(e, t) {
  const n = pr(e);
  return n === t || !Qt(n) || $o(n)
    ? !1
    : Gt(n).position === "fixed" || dy(n, t);
}
function ik(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Gi(e, [], !1).filter((a) => Qt(a) && Go(a) !== "body"),
    o = null;
  const i = Gt(e).position === "fixed";
  let s = i ? pr(e) : e;
  for (; Qt(s) && !$o(s); ) {
    const a = Gt(s),
      l = Zd(s);
    (!l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ps(s) && !l && dy(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = a),
      (s = pr(s)));
  }
  return (t.set(e, r), r);
}
function sk(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? yl(t)
          ? []
          : ik(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (c, d) => {
        const f = rm(t, d, o);
        return (
          (c.top = dt(f.top, c.top)),
          (c.right = ur(f.right, c.right)),
          (c.bottom = ur(f.bottom, c.bottom)),
          (c.left = dt(f.left, c.left)),
          c
        );
      },
      rm(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ak(e) {
  const { width: t, height: n } = cy(e);
  return { width: t, height: n };
}
function lk(e, t, n) {
  const r = ln(t),
    o = cn(t),
    i = n === "fixed",
    s = $r(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = dr(0);
  if (r || (!r && !i))
    if (((Go(t) !== "body" || ps(o)) && (a = xl(t)), r)) {
      const p = $r(t, !0, i, t);
      ((l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop));
    } else o && (l.x = _u(o));
  let c = 0,
    d = 0;
  if (o && !r && !i) {
    const p = o.getBoundingClientRect();
    ((d = p.top + a.scrollTop), (c = p.left + a.scrollLeft - _u(o, p)));
  }
  const f = s.left + a.scrollLeft - l.x - c,
    m = s.top + a.scrollTop - l.y - d;
  return { x: f, y: m, width: s.width, height: s.height };
}
function mc(e) {
  return Gt(e).position === "static";
}
function om(e, t) {
  if (!ln(e) || Gt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (cn(e) === n && (n = n.ownerDocument.body), n);
}
function fy(e, t) {
  const n = ht(e);
  if (yl(e)) return n;
  if (!ln(e)) {
    let o = pr(e);
    for (; o && !$o(o); ) {
      if (Qt(o) && !mc(o)) return o;
      o = pr(o);
    }
    return n;
  }
  let r = om(e, t);
  for (; r && YC(r) && mc(r); ) r = om(r, t);
  return r && $o(r) && mc(r) && !Zd(r) ? n : r || XC(e) || n;
}
const ck = async function (e) {
  const t = this.getOffsetParent || fy,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: lk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function uk(e) {
  return Gt(e).direction === "rtl";
}
const dk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ek,
  getDocumentElement: cn,
  getClippingRect: sk,
  getOffsetParent: fy,
  getElementRects: ck,
  getClientRects: tk,
  getDimensions: ak,
  getScale: Eo,
  isElement: Qt,
  isRTL: uk,
};
function fk(e, t) {
  let n = null,
    r;
  const o = cn(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function s(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const { left: c, top: d, width: f, height: m } = e.getBoundingClientRect();
    if ((a || t(), !f || !m)) return;
    const p = Vs(d),
      b = Vs(o.clientWidth - (c + f)),
      g = Vs(o.clientHeight - (d + m)),
      x = Vs(c),
      v = {
        rootMargin: -p + "px " + -b + "px " + -g + "px " + -x + "px",
        threshold: dt(0, ur(1, l)) || 1,
      };
    let w = !0;
    function S(E) {
      const C = E[0].intersectionRatio;
      if (C !== l) {
        if (!w) return s();
        C
          ? s(!1, C)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, v);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function pk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = tf(e),
    d = o || i ? [...(c ? Gi(c) : []), ...Gi(t)] : [];
  d.forEach((h) => {
    (o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n));
  });
  const f = c && a ? fk(c, n) : null;
  let m = -1,
    p = null;
  s &&
    ((p = new ResizeObserver((h) => {
      let [v] = h;
      (v &&
        v.target === c &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var w;
          (w = p) == null || w.observe(t);
        }))),
        n());
    })),
    c && !l && p.observe(c),
    p.observe(t));
  let b,
    g = l ? $r(e) : null;
  l && x();
  function x() {
    const h = $r(e);
    (g &&
      (h.x !== g.x ||
        h.y !== g.y ||
        h.width !== g.width ||
        h.height !== g.height) &&
      n(),
      (g = h),
      (b = requestAnimationFrame(x)));
  }
  return (
    n(),
    () => {
      var h;
      (d.forEach((v) => {
        (o && v.removeEventListener("scroll", n),
          i && v.removeEventListener("resize", n));
      }),
        f == null || f(),
        (h = p) == null || h.disconnect(),
        (p = null),
        l && cancelAnimationFrame(b));
    }
  );
}
const mk = KC,
  hk = QC,
  gk = VC,
  vk = qC,
  yk = HC,
  im = UC,
  xk = GC,
  wk = (e, t, n) => {
    const r = new Map(),
      o = { platform: dk, ...n },
      i = { ...o.platform, _c: r };
    return BC(e, t, { ...o, platform: i });
  };
var fa = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
function Ha(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ha(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ha(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function py(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sm(e, t) {
  const n = py(e);
  return Math.round(t * n) / n;
}
function hc(e) {
  const t = y.useRef(e);
  return (
    fa(() => {
      t.current = e;
    }),
    t
  );
}
function bk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [d, f] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, p] = y.useState(r);
  Ha(m, r) || p(r);
  const [b, g] = y.useState(null),
    [x, h] = y.useState(null),
    v = y.useCallback((T) => {
      T !== C.current && ((C.current = T), g(T));
    }, []),
    w = y.useCallback((T) => {
      T !== k.current && ((k.current = T), h(T));
    }, []),
    S = i || b,
    E = s || x,
    C = y.useRef(null),
    k = y.useRef(null),
    N = y.useRef(d),
    R = l != null,
    A = hc(l),
    D = hc(o),
    L = hc(c),
    W = y.useCallback(() => {
      if (!C.current || !k.current) return;
      const T = { placement: t, strategy: n, middleware: m };
      (D.current && (T.platform = D.current),
        wk(C.current, k.current, T).then((j) => {
          const M = { ...j, isPositioned: L.current !== !1 };
          O.current &&
            !Ha(N.current, M) &&
            ((N.current = M),
            us.flushSync(() => {
              f(M);
            }));
        }));
    }, [m, t, n, D, L]);
  fa(() => {
    c === !1 &&
      N.current.isPositioned &&
      ((N.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
  }, [c]);
  const O = y.useRef(!1);
  (fa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    fa(() => {
      if ((S && (C.current = S), E && (k.current = E), S && E)) {
        if (A.current) return A.current(S, E, W);
        W();
      }
    }, [S, E, W, A, R]));
  const H = y.useMemo(
      () => ({ reference: C, floating: k, setReference: v, setFloating: w }),
      [v, w],
    ),
    B = y.useMemo(() => ({ reference: S, floating: E }), [S, E]),
    V = y.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!B.floating) return T;
      const j = sm(B.floating, d.x),
        M = sm(B.floating, d.y);
      return a
        ? {
            ...T,
            transform: "translate(" + j + "px, " + M + "px)",
            ...(py(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: j, top: M };
    }, [n, a, B.floating, d.x, d.y]);
  return y.useMemo(
    () => ({ ...d, update: W, refs: H, elements: B, floatingStyles: V }),
    [d, W, H, B, V],
  );
}
const Sk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? im({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? im({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  Ek = (e, t) => ({ ...mk(e), options: [e, t] }),
  Ck = (e, t) => ({ ...hk(e), options: [e, t] }),
  kk = (e, t) => ({ ...xk(e), options: [e, t] }),
  Nk = (e, t) => ({ ...gk(e), options: [e, t] }),
  Tk = (e, t) => ({ ...vk(e), options: [e, t] }),
  jk = (e, t) => ({ ...yk(e), options: [e, t] }),
  Pk = (e, t) => ({ ...Sk(e), options: [e, t] });
var Rk = "Arrow",
  my = y.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return u.jsx(Ne.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
my.displayName = Rk;
var Ak = my;
function Ok(e) {
  const [t, n] = y.useState(void 0);
  return (
    Cn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            ((s = c.inlineSize), (a = c.blockSize));
          } else ((s = e.offsetWidth), (a = e.offsetHeight));
          n({ width: s, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var hy = "Popper",
  [gy, vy] = ds(hy),
  [BP, yy] = gy(hy),
  xy = "PopperAnchor",
  wy = y.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = yy(xy, n),
      s = y.useRef(null),
      a = Je(t, s);
    return (
      y.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : u.jsx(Ne.div, { ...o, ref: a })
    );
  });
wy.displayName = xy;
var nf = "PopperContent",
  [_k, Ik] = gy(nf),
  by = y.forwardRef((e, t) => {
    var q, be, Oe, Te, te, z;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: b,
        ...g
      } = e,
      x = yy(nf, n),
      [h, v] = y.useState(null),
      w = Je(t, (Z) => v(Z)),
      [S, E] = y.useState(null),
      C = Ok(S),
      k = (C == null ? void 0 : C.width) ?? 0,
      N = (C == null ? void 0 : C.height) ?? 0,
      R = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      D = Array.isArray(c) ? c : [c],
      L = D.length > 0,
      W = { padding: A, boundary: D.filter(Mk), altBoundary: L },
      {
        refs: O,
        floatingStyles: H,
        placement: B,
        isPositioned: V,
        middlewareData: T,
      } = bk({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...Z) =>
          pk(...Z, { animationFrame: p === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          Ek({ mainAxis: o + N, alignmentAxis: s }),
          l &&
            Ck({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? kk() : void 0,
              ...W,
            }),
          l && Nk({ ...W }),
          Tk({
            ...W,
            apply: ({
              elements: Z,
              rects: ue,
              availableWidth: Pe,
              availableHeight: Ke,
            }) => {
              const { width: lt, height: ct } = ue.reference,
                Qe = Z.floating.style;
              (Qe.setProperty("--radix-popper-available-width", `${Pe}px`),
                Qe.setProperty("--radix-popper-available-height", `${Ke}px`),
                Qe.setProperty("--radix-popper-anchor-width", `${lt}px`),
                Qe.setProperty("--radix-popper-anchor-height", `${ct}px`));
            },
          }),
          S && Pk({ element: S, padding: a }),
          Dk({ arrowWidth: k, arrowHeight: N }),
          m && jk({ strategy: "referenceHidden", ...W }),
        ],
      }),
      [j, M] = Cy(B),
      U = an(b);
    Cn(() => {
      V && (U == null || U());
    }, [V, U]);
    const $ = (q = T.arrow) == null ? void 0 : q.x,
      K = (be = T.arrow) == null ? void 0 : be.y,
      Q = ((Oe = T.arrow) == null ? void 0 : Oe.centerOffset) !== 0,
      [ae, we] = y.useState();
    return (
      Cn(() => {
        h && we(window.getComputedStyle(h).zIndex);
      }, [h]),
      u.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: V ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ae,
          "--radix-popper-transform-origin": [
            (Te = T.transformOrigin) == null ? void 0 : Te.x,
            (te = T.transformOrigin) == null ? void 0 : te.y,
          ].join(" "),
          ...(((z = T.hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: u.jsx(_k, {
          scope: n,
          placedSide: j,
          onArrowChange: E,
          arrowX: $,
          arrowY: K,
          shouldHideArrow: Q,
          children: u.jsx(Ne.div, {
            "data-side": j,
            "data-align": M,
            ...g,
            ref: w,
            style: { ...g.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
by.displayName = nf;
var Sy = "PopperArrow",
  Lk = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ey = y.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Ik(Sy, r),
      s = Lk[i.placedSide];
    return u.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(Ak, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Ey.displayName = Sy;
function Mk(e) {
  return e !== null;
}
var Dk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, h, v;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [c, d] = Cy(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + a / 2,
      p = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
    let b = "",
      g = "";
    return (
      c === "bottom"
        ? ((b = s ? f : `${m}px`), (g = `${-l}px`))
        : c === "top"
          ? ((b = s ? f : `${m}px`), (g = `${r.floating.height + l}px`))
          : c === "right"
            ? ((b = `${-l}px`), (g = s ? f : `${p}px`))
            : c === "left" &&
              ((b = `${r.floating.width + l}px`), (g = s ? f : `${p}px`)),
      { data: { x: b, y: g } }
    );
  },
});
function Cy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Fk = wy,
  zk = by,
  $k = Ey,
  [wl, UP] = ds("Tooltip", [vy]),
  rf = vy(),
  ky = "TooltipProvider",
  Bk = 700,
  am = "tooltip.open",
  [Uk, Ny] = wl(ky),
  Ty = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Bk,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = y.useRef(!0),
      a = y.useRef(!1),
      l = y.useRef(0);
    return (
      y.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c);
      }, []),
      u.jsx(Uk, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: y.useCallback(() => {
          (window.clearTimeout(l.current), (s.current = !1));
        }, []),
        onClose: y.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: y.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Ty.displayName = ky;
var jy = "Tooltip",
  [VP, bl] = wl(jy),
  Iu = "TooltipTrigger",
  Vk = y.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = bl(Iu, n),
      i = Ny(Iu, n),
      s = rf(n),
      a = y.useRef(null),
      l = Je(t, a, o.onTriggerChange),
      c = y.useRef(!1),
      d = y.useRef(!1),
      f = y.useCallback(() => (c.current = !1), []);
    return (
      y.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      u.jsx(Fk, {
        asChild: !0,
        ...s,
        children: u.jsx(Ne.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: he(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: he(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: he(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", f, { once: !0 }));
          }),
          onFocus: he(e.onFocus, () => {
            c.current || o.onOpen();
          }),
          onBlur: he(e.onBlur, o.onClose),
          onClick: he(e.onClick, o.onClose),
        }),
      })
    );
  });
Vk.displayName = Iu;
var Hk = "TooltipPortal",
  [HP, Wk] = wl(Hk, { forceMount: void 0 }),
  Bo = "TooltipContent",
  Py = y.forwardRef((e, t) => {
    const n = Wk(Bo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = bl(Bo, e.__scopeTooltip);
    return u.jsx(Wo, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? u.jsx(Ry, { side: o, ...i, ref: t })
        : u.jsx(Kk, { side: o, ...i, ref: t }),
    });
  }),
  Kk = y.forwardRef((e, t) => {
    const n = bl(Bo, e.__scopeTooltip),
      r = Ny(Bo, e.__scopeTooltip),
      o = y.useRef(null),
      i = Je(t, o),
      [s, a] = y.useState(null),
      { trigger: l, onClose: c } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      m = y.useCallback(() => {
        (a(null), f(!1));
      }, [f]),
      p = y.useCallback(
        (b, g) => {
          const x = b.currentTarget,
            h = { x: b.clientX, y: b.clientY },
            v = Xk(h, x.getBoundingClientRect()),
            w = Jk(h, v),
            S = Zk(g.getBoundingClientRect()),
            E = t2([...w, ...S]);
          (a(E), f(!0));
        },
        [f],
      );
    return (
      y.useEffect(() => () => m(), [m]),
      y.useEffect(() => {
        if (l && d) {
          const b = (x) => p(x, d),
            g = (x) => p(x, l);
          return (
            l.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", g),
            () => {
              (l.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", g));
            }
          );
        }
      }, [l, d, p, m]),
      y.useEffect(() => {
        if (s) {
          const b = (g) => {
            const x = g.target,
              h = { x: g.clientX, y: g.clientY },
              v =
                (l == null ? void 0 : l.contains(x)) ||
                (d == null ? void 0 : d.contains(x)),
              w = !e2(h, s);
            v ? m() : w && (m(), c());
          };
          return (
            document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
          );
        }
      }, [l, d, s, c, m]),
      u.jsx(Ry, { ...e, ref: i })
    );
  }),
  [Qk, Gk] = wl(jy, { isInside: !1 }),
  qk = Eb("TooltipContent"),
  Ry = y.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = bl(Bo, n),
      c = rf(n),
      { onClose: d } = l;
    return (
      y.useEffect(
        () => (
          document.addEventListener(am, d),
          () => document.removeEventListener(am, d)
        ),
        [d],
      ),
      y.useEffect(() => {
        if (l.trigger) {
          const f = (m) => {
            const p = m.target;
            p != null && p.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      u.jsx(pl, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: u.jsxs(zk, {
          "data-state": l.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            u.jsx(qk, { children: r }),
            u.jsx(Qk, {
              scope: n,
              isInside: !0,
              children: u.jsx(Qb, {
                id: l.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Py.displayName = Bo;
var Ay = "TooltipArrow",
  Yk = y.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = rf(n);
    return Gk(Ay, n).isInside ? null : u.jsx($k, { ...o, ...r, ref: t });
  });
Yk.displayName = Ay;
function Xk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Jk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Zk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function e2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i],
      l = t[s],
      c = a.x,
      d = a.y,
      f = l.x,
      m = l.y;
    d > r != m > r && n < ((f - c) * (r - d)) / (m - d) + c && (o = !o);
  }
  return o;
}
function t2(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    n2(t)
  );
}
function n2(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var r2 = Ty,
  Oy = Py;
const o2 = r2,
  i2 = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    u.jsx(Oy, {
      ref: r,
      sideOffset: t,
      className: se(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
i2.displayName = Oy.displayName;
var Sl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  El = typeof window > "u" || "Deno" in globalThis;
function Dt() {}
function s2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function a2(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function l2(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Lu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function c2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lm(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== of(s, t.options)) return !1;
    } else if (!Yi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function cm(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (qi(t.options.mutationKey) !== qi(i)) return !1;
    } else if (!Yi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function of(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qi)(e);
}
function qi(e) {
  return JSON.stringify(e, (t, n) =>
    Mu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function Yi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Yi(e[n], t[n]))
        : !1;
}
function _y(e, t) {
  if (e === t) return e;
  const n = um(e) && um(t);
  if (n || (Mu(e) && Mu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let c = 0;
    for (let d = 0; d < s; d++) {
      const f = n ? d : i[d];
      ((!n && l.has(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((a[f] = void 0), c++)
        : ((a[f] = _y(e[f], t[f])), a[f] === e[f] && e[f] !== void 0 && c++);
    }
    return o === s && c === o ? e : a;
  }
  return t;
}
function um(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Mu(e) {
  if (!dm(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !dm(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function dm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function u2(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function d2(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? _y(e, t)
      : t;
}
function f2(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function p2(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var sf = Symbol();
function Iy(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === sf
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Tr,
  Vn,
  ko,
  Um,
  m2 =
    ((Um = class extends Sl {
      constructor() {
        super();
        ne(this, Tr);
        ne(this, Vn);
        ne(this, ko);
        Y(this, ko, (t) => {
          if (!El && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Vn) || this.setEventListener(P(this, ko));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Vn)) == null || t.call(this), Y(this, Vn, void 0));
      }
      setEventListener(t) {
        var n;
        (Y(this, ko, t),
          (n = P(this, Vn)) == null || n.call(this),
          Y(
            this,
            Vn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        P(this, Tr) !== t && (Y(this, Tr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, Tr) == "boolean"
          ? P(this, Tr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Tr = new WeakMap()),
    (Vn = new WeakMap()),
    (ko = new WeakMap()),
    Um),
  Ly = new m2(),
  No,
  Hn,
  To,
  Vm,
  h2 =
    ((Vm = class extends Sl {
      constructor() {
        super();
        ne(this, No, !0);
        ne(this, Hn);
        ne(this, To);
        Y(this, To, (t) => {
          if (!El && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Hn) || this.setEventListener(P(this, To));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Hn)) == null || t.call(this), Y(this, Hn, void 0));
      }
      setEventListener(t) {
        var n;
        (Y(this, To, t),
          (n = P(this, Hn)) == null || n.call(this),
          Y(this, Hn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        P(this, No) !== t &&
          (Y(this, No, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, No);
      }
    }),
    (No = new WeakMap()),
    (Hn = new WeakMap()),
    (To = new WeakMap()),
    Vm),
  Wa = new h2();
function g2() {
  let e, t;
  const n = new Promise((o, i) => {
    ((e = o), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function v2(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function My(e) {
  return (e ?? "online") === "online" ? Wa.isOnline() : !0;
}
var Dy = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function gc(e) {
  return e instanceof Dy;
}
function Fy(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = g2(),
    s = (g) => {
      var x;
      r || (m(new Dy(g)), (x = e.abort) == null || x.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      Ly.isFocused() &&
      (e.networkMode === "always" || Wa.isOnline()) &&
      e.canRun(),
    d = () => My(e.networkMode) && e.canRun(),
    f = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onSuccess) == null || x.call(e, g),
        o == null || o(),
        i.resolve(g));
    },
    m = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onError) == null || x.call(e, g),
        o == null || o(),
        i.reject(g));
    },
    p = () =>
      new Promise((g) => {
        var x;
        ((o = (h) => {
          (r || c()) && g(h);
        }),
          (x = e.onPause) == null || x.call(e));
      }).then(() => {
        var g;
        ((o = void 0), r || (g = e.onContinue) == null || g.call(e));
      }),
    b = () => {
      if (r) return;
      let g;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        g = x ?? e.fn();
      } catch (h) {
        g = Promise.reject(h);
      }
      Promise.resolve(g)
        .then(f)
        .catch((h) => {
          var C;
          if (r) return;
          const v = e.retry ?? (El ? 0 : 3),
            w = e.retryDelay ?? v2,
            S = typeof w == "function" ? w(n, h) : w,
            E =
              v === !0 ||
              (typeof v == "number" && n < v) ||
              (typeof v == "function" && v(n, h));
          if (t || !E) {
            m(h);
            return;
          }
          (n++,
            (C = e.onFail) == null || C.call(e, n, h),
            u2(S)
              .then(() => (c() ? void 0 : p()))
              .then(() => {
                t ? m(h) : b();
              }));
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? b() : p().then(b), i),
  };
}
var y2 = (e) => setTimeout(e, 0);
function x2() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = y2;
  const i = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      ((e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || s());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var Ye = x2(),
  jr,
  Hm,
  zy =
    ((Hm = class {
      constructor() {
        ne(this, jr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          a2(this.gcTime) &&
            Y(
              this,
              jr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (El ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        P(this, jr) && (clearTimeout(P(this, jr)), Y(this, jr, void 0));
      }
    }),
    (jr = new WeakMap()),
    Hm),
  jo,
  Pr,
  wt,
  Rr,
  Ue,
  ns,
  Ar,
  Ft,
  pn,
  Wm,
  w2 =
    ((Wm = class extends zy {
      constructor(t) {
        super();
        ne(this, Ft);
        ne(this, jo);
        ne(this, Pr);
        ne(this, wt);
        ne(this, Rr);
        ne(this, Ue);
        ne(this, ns);
        ne(this, Ar);
        (Y(this, Ar, !1),
          Y(this, ns, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Y(this, Rr, t.client),
          Y(this, wt, P(this, Rr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Y(this, jo, S2(this.options)),
          (this.state = t.state ?? P(this, jo)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, Ue)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...P(this, ns), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, wt).remove(this);
      }
      setData(t, n) {
        const r = d2(this.state.data, t, this.options);
        return (
          ze(this, Ft, pn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ze(this, Ft, pn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, Ue)) == null ? void 0 : r.promise;
        return (
          (o = P(this, Ue)) == null || o.cancel(t),
          n ? n.then(Dt).catch(Dt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(P(this, jo)));
      }
      isActive() {
        return this.observers.some((t) => c2(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === sf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Lu(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !l2(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Ue)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Ue)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, wt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, Ue) &&
              (P(this, Ar)
                ? P(this, Ue).cancel({ revert: !0 })
                : P(this, Ue).cancelRetry()),
            this.scheduleGc()),
          P(this, wt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ze(this, Ft, pn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, d, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, Ue))
            return (P(this, Ue).continueRetry(), P(this, Ue).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const m = this.observers.find((p) => p.options.queryFn);
          m && this.setOptions(m.options);
        }
        const r = new AbortController(),
          o = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (Y(this, Ar, !0), r.signal),
            });
          },
          i = () => {
            const m = Iy(this.options, n),
              b = (() => {
                const g = {
                  client: P(this, Rr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(g), g);
              })();
            return (
              Y(this, Ar, !1),
              this.options.persister ? this.options.persister(m, b, this) : m(b)
            );
          },
          a = (() => {
            const m = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, Rr),
              state: this.state,
              fetchFn: i,
            };
            return (o(m), m);
          })();
        ((c = this.options.behavior) == null || c.onFetch(a, this),
          Y(this, Pr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = a.fetchOptions) == null ? void 0 : d.meta)) &&
            ze(this, Ft, pn).call(this, {
              type: "fetch",
              meta: (f = a.fetchOptions) == null ? void 0 : f.meta,
            }));
        const l = (m) => {
          var p, b, g, x;
          ((gc(m) && m.silent) ||
            ze(this, Ft, pn).call(this, { type: "error", error: m }),
            gc(m) ||
              ((b = (p = P(this, wt).config).onError) == null ||
                b.call(p, m, this),
              (x = (g = P(this, wt).config).onSettled) == null ||
                x.call(g, this.state.data, m, this)),
            this.scheduleGc());
        };
        return (
          Y(
            this,
            Ue,
            Fy({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (m) => {
                var p, b, g, x;
                if (m === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(m);
                } catch (h) {
                  l(h);
                  return;
                }
                ((b = (p = P(this, wt).config).onSuccess) == null ||
                  b.call(p, m, this),
                  (x = (g = P(this, wt).config).onSettled) == null ||
                    x.call(g, m, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (m, p) => {
                ze(this, Ft, pn).call(this, {
                  type: "failed",
                  failureCount: m,
                  error: p,
                });
              },
              onPause: () => {
                ze(this, Ft, pn).call(this, { type: "pause" });
              },
              onContinue: () => {
                ze(this, Ft, pn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          P(this, Ue).start()
        );
      }
    }),
    (jo = new WeakMap()),
    (Pr = new WeakMap()),
    (wt = new WeakMap()),
    (Rr = new WeakMap()),
    (Ue = new WeakMap()),
    (ns = new WeakMap()),
    (Ar = new WeakMap()),
    (Ft = new WeakSet()),
    (pn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...b2(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              Y(this, Pr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return gc(o) && o.revert && P(this, Pr)
              ? { ...P(this, Pr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Ye.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, wt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    Wm);
function b2(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: My(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function S2(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Zt,
  Km,
  E2 =
    ((Km = class extends Sl {
      constructor(t = {}) {
        super();
        ne(this, Zt);
        ((this.config = t), Y(this, Zt, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? of(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new w2({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        P(this, Zt).has(t.queryHash) ||
          (P(this, Zt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, Zt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, Zt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ye.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, Zt).get(t);
      }
      getAll() {
        return [...P(this, Zt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => lm(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => lm(t, r)) : n;
      }
      notify(t) {
        Ye.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ye.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ye.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Zt = new WeakMap()),
    Km),
  en,
  Ge,
  Or,
  tn,
  Dn,
  Qm,
  C2 =
    ((Qm = class extends zy {
      constructor(t) {
        super();
        ne(this, tn);
        ne(this, en);
        ne(this, Ge);
        ne(this, Or);
        ((this.mutationId = t.mutationId),
          Y(this, Ge, t.mutationCache),
          Y(this, en, []),
          (this.state = t.state || k2()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, en).includes(t) ||
          (P(this, en).push(t),
          this.clearGcTimeout(),
          P(this, Ge).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (Y(
          this,
          en,
          P(this, en).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          P(this, Ge).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        P(this, en).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Ge).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, Or)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, a, l, c, d, f, m, p, b, g, x, h, v, w, S, E, C, k, N;
        const n = () => {
          ze(this, tn, Dn).call(this, { type: "continue" });
        };
        Y(
          this,
          Or,
          Fy({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, A) => {
              ze(this, tn, Dn).call(this, {
                type: "failed",
                failureCount: R,
                error: A,
              });
            },
            onPause: () => {
              ze(this, tn, Dn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ge).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          o = !P(this, Or).canStart();
        try {
          if (r) n();
          else {
            (ze(this, tn, Dn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = P(this, Ge).config).onMutate) == null
                ? void 0
                : s.call(i, t, this)));
            const A = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            A !== this.state.context &&
              ze(this, tn, Dn).call(this, {
                type: "pending",
                context: A,
                variables: t,
                isPaused: o,
              });
          }
          const R = await P(this, Or).start();
          return (
            await ((d = (c = P(this, Ge).config).onSuccess) == null
              ? void 0
              : d.call(c, R, t, this.state.context, this)),
            await ((m = (f = this.options).onSuccess) == null
              ? void 0
              : m.call(f, R, t, this.state.context)),
            await ((b = (p = P(this, Ge).config).onSettled) == null
              ? void 0
              : b.call(
                  p,
                  R,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((x = (g = this.options).onSettled) == null
              ? void 0
              : x.call(g, R, null, t, this.state.context)),
            ze(this, tn, Dn).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              await ((v = (h = P(this, Ge).config).onError) == null
                ? void 0
                : v.call(h, R, t, this.state.context, this)),
              await ((S = (w = this.options).onError) == null
                ? void 0
                : S.call(w, R, t, this.state.context)),
              await ((C = (E = P(this, Ge).config).onSettled) == null
                ? void 0
                : C.call(
                    E,
                    void 0,
                    R,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((N = (k = this.options).onSettled) == null
                ? void 0
                : N.call(k, void 0, R, t, this.state.context)),
              R
            );
          } finally {
            ze(this, tn, Dn).call(this, { type: "error", error: R });
          }
        } finally {
          P(this, Ge).runNext(this);
        }
      }
    }),
    (en = new WeakMap()),
    (Ge = new WeakMap()),
    (Or = new WeakMap()),
    (tn = new WeakSet()),
    (Dn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Ye.batch(() => {
          (P(this, en).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Ge).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    Qm);
function k2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var gn,
  zt,
  rs,
  Gm,
  N2 =
    ((Gm = class extends Sl {
      constructor(t = {}) {
        super();
        ne(this, gn);
        ne(this, zt);
        ne(this, rs);
        ((this.config = t),
          Y(this, gn, new Set()),
          Y(this, zt, new Map()),
          Y(this, rs, 0));
      }
      build(t, n, r) {
        const o = new C2({
          mutationCache: this,
          mutationId: ++bs(this, rs)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        P(this, gn).add(t);
        const n = Hs(t);
        if (typeof n == "string") {
          const r = P(this, zt).get(n);
          r ? r.push(t) : P(this, zt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, gn).delete(t)) {
          const n = Hs(t);
          if (typeof n == "string") {
            const r = P(this, zt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, zt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Hs(t);
        if (typeof n == "string") {
          const r = P(this, zt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Hs(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, zt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ye.batch(() => {
          (P(this, gn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, gn).clear(),
            P(this, zt).clear());
        });
      }
      getAll() {
        return Array.from(P(this, gn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => cm(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => cm(t, n));
      }
      notify(t) {
        Ye.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ye.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Dt))),
        );
      }
    }),
    (gn = new WeakMap()),
    (zt = new WeakMap()),
    (rs = new WeakMap()),
    Gm);
function Hs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function fm(e) {
  return {
    onFetch: (t, n) => {
      var d, f, m, p, b;
      const r = t.options,
        o =
          (m =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : m.direction,
        i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        s = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let g = !1;
        const x = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          h = Iy(t.options, t.fetchOptions),
          v = async (w, S, E) => {
            if (g) return Promise.reject();
            if (S == null && w.pages.length) return Promise.resolve(w);
            const k = (() => {
                const D = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (x(D), D);
              })(),
              N = await h(k),
              { maxPages: R } = t.options,
              A = E ? p2 : f2;
            return {
              pages: A(w.pages, N, R),
              pageParams: A(w.pageParams, S, R),
            };
          };
        if (o && i.length) {
          const w = o === "backward",
            S = w ? T2 : pm,
            E = { pages: i, pageParams: s },
            C = S(r, E);
          a = await v(E, C, w);
        } else {
          const w = e ?? i.length;
          do {
            const S = l === 0 ? (s[0] ?? r.initialPageParam) : pm(r, a);
            if (l > 0 && S == null) break;
            ((a = await v(a, S)), l++);
          } while (l < w);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, x;
            return (x = (g = t.options).persister) == null
              ? void 0
              : x.call(
                  g,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function pm(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function T2(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Se,
  Wn,
  Kn,
  Po,
  Ro,
  Qn,
  Ao,
  Oo,
  qm,
  j2 =
    ((qm = class {
      constructor(e = {}) {
        ne(this, Se);
        ne(this, Wn);
        ne(this, Kn);
        ne(this, Po);
        ne(this, Ro);
        ne(this, Qn);
        ne(this, Ao);
        ne(this, Oo);
        (Y(this, Se, e.queryCache || new E2()),
          Y(this, Wn, e.mutationCache || new N2()),
          Y(this, Kn, e.defaultOptions || {}),
          Y(this, Po, new Map()),
          Y(this, Ro, new Map()),
          Y(this, Qn, 0));
      }
      mount() {
        (bs(this, Qn)._++,
          P(this, Qn) === 1 &&
            (Y(
              this,
              Ao,
              Ly.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Se).onFocus());
              }),
            ),
            Y(
              this,
              Oo,
              Wa.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Se).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (bs(this, Qn)._--,
          P(this, Qn) === 0 &&
            ((e = P(this, Ao)) == null || e.call(this),
            Y(this, Ao, void 0),
            (t = P(this, Oo)) == null || t.call(this),
            Y(this, Oo, void 0)));
      }
      isFetching(e) {
        return P(this, Se).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, Wn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Se).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, Se).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Lu(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, Se)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, Se).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = s2(t, i);
        if (s !== void 0)
          return P(this, Se)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ye.batch(() =>
          P(this, Se)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Se).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, Se);
        Ye.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, Se);
        return Ye.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ye.batch(() =>
            P(this, Se)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(Dt).catch(Dt);
      }
      invalidateQueries(e, t = {}) {
        return Ye.batch(
          () => (
            P(this, Se)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ye.batch(() =>
            P(this, Se)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Dt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(Dt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, Se).build(this, t);
        return n.isStaleByTime(Lu(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Dt).catch(Dt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = fm(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Dt).catch(Dt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = fm(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Wa.isOnline()
          ? P(this, Wn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, Se);
      }
      getMutationCache() {
        return P(this, Wn);
      }
      getDefaultOptions() {
        return P(this, Kn);
      }
      setDefaultOptions(e) {
        Y(this, Kn, e);
      }
      setQueryDefaults(e, t) {
        P(this, Po).set(qi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, Po).values()],
          n = {};
        return (
          t.forEach((r) => {
            Yi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, Ro).set(qi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, Ro).values()],
          n = {};
        return (
          t.forEach((r) => {
            Yi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, Kn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = of(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === sf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, Kn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (P(this, Se).clear(), P(this, Wn).clear());
      }
    }),
    (Se = new WeakMap()),
    (Wn = new WeakMap()),
    (Kn = new WeakMap()),
    (Po = new WeakMap()),
    (Ro = new WeakMap()),
    (Qn = new WeakMap()),
    (Ao = new WeakMap()),
    (Oo = new WeakMap()),
    qm),
  P2 = y.createContext(void 0),
  R2 = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    u.jsx(P2.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xi() {
  return (
    (Xi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xi.apply(this, arguments)
  );
}
var Yn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Yn || (Yn = {}));
const mm = "popstate";
function A2(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Du(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Ka(o);
  }
  return _2(t, n, null, e);
}
function ke(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function $y(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function O2() {
  return Math.random().toString(36).substr(2, 8);
}
function hm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Du(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Xi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? qo(t) : t,
      { state: n, key: (t && t.key) || r || O2() },
    )
  );
}
function Ka(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function qo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function _2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Yn.Pop,
    l = null,
    c = d();
  c == null && ((c = 0), s.replaceState(Xi({}, s.state, { idx: c }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Yn.Pop;
    let x = d(),
      h = x == null ? null : x - c;
    ((c = x), l && l({ action: a, location: g.location, delta: h }));
  }
  function m(x, h) {
    a = Yn.Push;
    let v = Du(g.location, x, h);
    c = d() + 1;
    let w = hm(v, c),
      S = g.createHref(v);
    try {
      s.pushState(w, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function p(x, h) {
    a = Yn.Replace;
    let v = Du(g.location, x, h);
    c = d();
    let w = hm(v, c),
      S = g.createHref(v);
    (s.replaceState(w, "", S),
      i && l && l({ action: a, location: g.location, delta: 0 }));
  }
  function b(x) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof x == "string" ? x : Ka(x);
    return (
      (v = v.replace(/ $/, "%20")),
      ke(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          v,
      ),
      new URL(v, h)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(mm, f),
        (l = x),
        () => {
          (o.removeEventListener(mm, f), (l = null));
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: b,
    encodeLocation(x) {
      let h = b(x);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: p,
    go(x) {
      return s.go(x);
    },
  };
  return g;
}
var gm;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(gm || (gm = {}));
function I2(e, t, n) {
  return (n === void 0 && (n = "/"), L2(e, t, n, !1));
}
function L2(e, t, n, r) {
  let o = typeof t == "string" ? qo(t) : t,
    i = af(o.pathname || "/", n);
  if (i == null) return null;
  let s = By(e);
  M2(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = Q2(i);
    a = W2(s[l], c, r);
  }
  return a;
}
function By(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (ke(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = ar([r, l.relativePath]),
      d = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (ke(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      By(i.children, t, d, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: V2(c, i.index), routesMeta: d }));
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of Uy(i.path)) o(i, s, l);
    }),
    t
  );
}
function Uy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Uy(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function M2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : H2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const D2 = /^:[\w-]+$/,
  F2 = 3,
  z2 = 2,
  $2 = 1,
  B2 = 10,
  U2 = -2,
  vm = (e) => e === "*";
function V2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(vm) && (r += U2),
    t && (r += z2),
    n
      .filter((o) => !vm(o))
      .reduce((o, i) => o + (D2.test(i) ? F2 : i === "" ? $2 : B2), r)
  );
}
function H2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function W2(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = ym(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d,
      ),
      m = l.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = ym(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d,
        )),
      !f)
    )
      return null;
    (Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: ar([i, f.pathname]),
        pathnameBase: X2(ar([i, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (i = ar([i, f.pathnameBase])));
  }
  return s;
}
function ym(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = K2(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: m, isOptional: p } = d;
      if (m === "*") {
        let g = a[f] || "";
        s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const b = a[f];
      return (
        p && !b ? (c[m] = void 0) : (c[m] = (b || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function K2(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $y(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Q2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      $y(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function af(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function G2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? qo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : q2(n, t)) : t,
    search: J2(r),
    hash: Z2(o),
  };
}
function q2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Y2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function lf(e, t) {
  let n = Y2(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function cf(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = qo(e))
    : ((o = Xi({}, e)),
      ke(
        !o.pathname || !o.pathname.includes("?"),
        vc("?", "pathname", "search", o),
      ),
      ke(
        !o.pathname || !o.pathname.includes("#"),
        vc("#", "pathname", "hash", o),
      ),
      ke(!o.search || !o.search.includes("#"), vc("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; ) (m.shift(), (f -= 1));
      o.pathname = m.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = G2(o, a),
    c = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l);
}
const ar = (e) => e.join("/").replace(/\/\/+/g, "/"),
  X2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  J2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Z2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function eN(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Vy = ["post", "put", "patch", "delete"];
new Set(Vy);
const tN = ["get", ...Vy];
new Set(tN);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ji() {
  return (
    (Ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ji.apply(this, arguments)
  );
}
const uf = y.createContext(null),
  nN = y.createContext(null),
  vr = y.createContext(null),
  Cl = y.createContext(null),
  jn = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Hy = y.createContext(null);
function rN(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Yo() || ke(!1);
  let { basename: r, navigator: o } = y.useContext(vr),
    { hash: i, pathname: s, search: a } = Gy(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : ar([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function Yo() {
  return y.useContext(Cl) != null;
}
function Wr() {
  return (Yo() || ke(!1), y.useContext(Cl).location);
}
function Wy(e) {
  y.useContext(vr).static || y.useLayoutEffect(e);
}
function Ky() {
  let { isDataRoute: e } = y.useContext(jn);
  return e ? gN() : oN();
}
function oN() {
  Yo() || ke(!1);
  let e = y.useContext(uf),
    { basename: t, future: n, navigator: r } = y.useContext(vr),
    { matches: o } = y.useContext(jn),
    { pathname: i } = Wr(),
    s = JSON.stringify(lf(o, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Wy(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = cf(c, JSON.parse(s), i, d.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : ar([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d));
      },
      [t, r, s, i, e],
    )
  );
}
function Qy() {
  let { matches: e } = y.useContext(jn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Gy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(vr),
    { matches: o } = y.useContext(jn),
    { pathname: i } = Wr(),
    s = JSON.stringify(lf(o, r.v7_relativeSplatPath));
  return y.useMemo(() => cf(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function iN(e, t) {
  return sN(e, t);
}
function sN(e, t, n, r) {
  Yo() || ke(!1);
  let { navigator: o } = y.useContext(vr),
    { matches: i } = y.useContext(jn),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Wr(),
    d;
  if (t) {
    var f;
    let x = typeof t == "string" ? qo(t) : t;
    (l === "/" || ((f = x.pathname) != null && f.startsWith(l)) || ke(!1),
      (d = x));
  } else d = c;
  let m = d.pathname || "/",
    p = m;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    p = "/" + m.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let b = I2(e, { pathname: p }),
    g = dN(
      b &&
        b.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: ar([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : ar([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && g
    ? y.createElement(
        Cl.Provider,
        {
          value: {
            location: Ji(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: Yn.Pop,
          },
        },
        g,
      )
    : g;
}
function aN() {
  let e = hN(),
    t = eN(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const lN = y.createElement(aN, null);
class cN extends y.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          jn.Provider,
          { value: this.props.routeContext },
          y.createElement(Hy.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function uN(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(uf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(jn.Provider, { value: t }, r)
  );
}
function dN(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let d = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (d >= 0 || ke(!1), (s = s.slice(0, Math.min(s.length, d + 1))));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: p } = n,
          b =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!p || p[f.route.id] === void 0);
        if (f.route.lazy || b) {
          ((l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((d, f, m) => {
    let p,
      b = !1,
      g = null,
      x = null;
    n &&
      ((p = a && f.route.id ? a[f.route.id] : void 0),
      (g = f.route.errorElement || lN),
      l &&
        (c < 0 && m === 0
          ? ((b = !0), (x = null))
          : c === m &&
            ((b = !0), (x = f.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, m + 1)),
      v = () => {
        let w;
        return (
          p
            ? (w = g)
            : b
              ? (w = x)
              : f.route.Component
                ? (w = y.createElement(f.route.Component, null))
                : f.route.element
                  ? (w = f.route.element)
                  : (w = d),
          y.createElement(uN, {
            match: f,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? y.createElement(cN, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: p,
          children: v(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var qy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(qy || {}),
  Qa = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Qa || {});
function fN(e) {
  let t = y.useContext(uf);
  return (t || ke(!1), t);
}
function pN(e) {
  let t = y.useContext(nN);
  return (t || ke(!1), t);
}
function mN(e) {
  let t = y.useContext(jn);
  return (t || ke(!1), t);
}
function Yy(e) {
  let t = mN(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ke(!1), n.route.id);
}
function hN() {
  var e;
  let t = y.useContext(Hy),
    n = pN(Qa.UseRouteError),
    r = Yy(Qa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gN() {
  let { router: e } = fN(qy.UseNavigateStable),
    t = Yy(Qa.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Wy(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ji({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
function vN(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function yN(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Yo() || ke(!1);
  let { future: i, static: s } = y.useContext(vr),
    { matches: a } = y.useContext(jn),
    { pathname: l } = Wr(),
    c = Ky(),
    d = cf(t, lf(a, i.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(d);
  return (
    y.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: o }),
      [c, f, o, n, r],
    ),
    null
  );
}
function gi(e) {
  ke(!1);
}
function xN(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Yn.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  Yo() && ke(!1);
  let l = t.replace(/^\/*/, "/"),
    c = y.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Ji({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s],
    );
  typeof r == "string" && (r = qo(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: p = null,
      key: b = "default",
    } = r,
    g = y.useMemo(() => {
      let x = af(d, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: m, state: p, key: b },
            navigationType: o,
          };
    }, [l, d, f, m, p, b, o]);
  return g == null
    ? null
    : y.createElement(
        vr.Provider,
        { value: c },
        y.createElement(Cl.Provider, { children: n, value: g }),
      );
}
function wN(e) {
  let { children: t, location: n } = e;
  return iN(Fu(t), n);
}
new Promise(() => {});
function Fu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, Fu(r.props.children, i));
        return;
      }
      (r.type !== gi && ke(!1), !r.props.index || !r.props.children || ke(!1));
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = Fu(r.props.children, i)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zu() {
  return (
    (zu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zu.apply(this, arguments)
  );
}
function bN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    ((o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
function SN(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function EN(e, t) {
  return e.button === 0 && (!t || t === "_self") && !SN(e);
}
const CN = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  kN = "6";
try {
  window.__reactRouterVersion = kN;
} catch {}
const NN = "startTransition",
  xm = Xu[NN];
function TN(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = A2({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = y.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    d = y.useCallback(
      (f) => {
        c && xm ? xm(() => l(f)) : l(f);
      },
      [l, c],
    );
  return (
    y.useLayoutEffect(() => s.listen(d), [s, d]),
    y.useEffect(() => vN(r), [r]),
    y.createElement(xN, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const jN =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  PN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Xn = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      m = bN(t, CN),
      { basename: p } = y.useContext(vr),
      b,
      g = !1;
    if (typeof c == "string" && PN.test(c) && ((b = c), jN))
      try {
        let w = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(w.protocol + c) : new URL(c),
          E = af(S.pathname, p);
        S.origin === w.origin && E != null
          ? (c = E + S.search + S.hash)
          : (g = !0);
      } catch {}
    let x = rN(c, { relative: o }),
      h = RN(c, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: o,
        viewTransition: f,
      });
    function v(w) {
      (r && r(w), w.defaultPrevented || h(w));
    }
    return y.createElement(
      "a",
      zu({}, m, { href: b || x, onClick: g || i ? r : v, ref: n, target: l }),
    );
  });
var wm;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(wm || (wm = {}));
var bm;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(bm || (bm = {}));
function RN(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Ky(),
    c = Wr(),
    d = Gy(e, { relative: s });
  return y.useCallback(
    (f) => {
      if (EN(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : Ka(c) === Ka(d);
        l(e, {
          replace: m,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [c, l, d, r, o, n, e, i, s, a],
  );
}
const Xy = () => {
    const [e, t] = y.useState({ x: 0, y: 0 });
    return (
      y.useEffect(() => {
        const n = (r) => {
          t({ x: r.clientX, y: r.clientY });
        };
        return (
          window.addEventListener("mousemove", n),
          () => window.removeEventListener("mousemove", n)
        );
      }, []),
      u.jsx("div", {
        className:
          "cursor-light fixed pointer-events-none z-0 transition-all duration-200 ease-out",
        style: {
          left: e.x - 150,
          top: e.y - 150,
          background:
            "radial-gradient(circle, hsl(180 100% 50% / 0.15) 0%, hsl(270 100% 65% / 0.1) 50%, transparent 70%)",
          filter: "blur(40px)",
        },
      })
    );
  },
  xr = "https://theunipick.vercel.app";
function df({
  title: e,
  description: t,
  image: n = `${xr}/og-image.webp`,
  type: r = "website",
  canonicalUrl: o,
  keywords: i,
}) {
  const { pathname: s } = Wr(),
    a = o || `${xr}${s}`;
  return u.jsxs(pb, {
    children: [
      u.jsx("title", { children: e }),
      u.jsx("meta", { name: "description", content: t }),
      i && u.jsx("meta", { name: "keywords", content: i }),
      u.jsx("link", { rel: "canonical", href: a }),
      u.jsx("link", {
        rel: "alternate",
        hrefLang: "x-default",
        href: `${xr}/`,
      }),
      u.jsx("link", {
        rel: "alternate",
        hrefLang: "en-in",
        href: `${xr}/hire-web-developer/india`,
      }),
      u.jsx("link", {
        rel: "alternate",
        hrefLang: "en-us",
        href: `${xr}/hire-web-developer/usa`,
      }),
      u.jsx("link", {
        rel: "alternate",
        hrefLang: "en-ae",
        href: `${xr}/hire-web-developer/dubai`,
      }),
      u.jsx("link", {
        rel: "alternate",
        hrefLang: "en-gb",
        href: `${xr}/hire-web-developer/europe`,
      }),
      u.jsx("meta", { property: "og:title", content: e }),
      u.jsx("meta", { property: "og:description", content: t }),
      u.jsx("meta", { property: "og:type", content: r }),
      u.jsx("meta", { property: "og:url", content: a }),
      u.jsx("meta", { property: "og:image", content: n }),
      u.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      u.jsx("meta", { name: "twitter:title", content: e }),
      u.jsx("meta", { name: "twitter:description", content: t }),
      u.jsx("meta", { name: "twitter:image", content: n }),
    ],
  });
}
const AN = gl(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  He = y.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? bb : "button";
      return u.jsx(s, {
        className: se(AN({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
He.displayName = "Button";
var yc = "focusScope.autoFocusOnMount",
  xc = "focusScope.autoFocusOnUnmount",
  Sm = { bubbles: !1, cancelable: !0 },
  ON = "FocusScope",
  Jy = y.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = y.useState(null),
      c = an(o),
      d = an(i),
      f = y.useRef(null),
      m = Je(t, (g) => l(g)),
      p = y.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (y.useEffect(() => {
      if (r) {
        let g = function (w) {
            if (p.paused || !a) return;
            const S = w.target;
            a.contains(S) ? (f.current = S) : Fn(f.current, { select: !0 });
          },
          x = function (w) {
            if (p.paused || !a) return;
            const S = w.relatedTarget;
            S !== null && (a.contains(S) || Fn(f.current, { select: !0 }));
          },
          h = function (w) {
            if (document.activeElement === document.body)
              for (const E of w) E.removedNodes.length > 0 && Fn(a);
          };
        (document.addEventListener("focusin", g),
          document.addEventListener("focusout", x));
        const v = new MutationObserver(h);
        return (
          a && v.observe(a, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", x),
              v.disconnect());
          }
        );
      }
    }, [r, a, p.paused]),
      y.useEffect(() => {
        if (a) {
          Cm.add(p);
          const g = document.activeElement;
          if (!a.contains(g)) {
            const h = new CustomEvent(yc, Sm);
            (a.addEventListener(yc, c),
              a.dispatchEvent(h),
              h.defaultPrevented ||
                (_N(FN(Zy(a)), { select: !0 }),
                document.activeElement === g && Fn(a)));
          }
          return () => {
            (a.removeEventListener(yc, c),
              setTimeout(() => {
                const h = new CustomEvent(xc, Sm);
                (a.addEventListener(xc, d),
                  a.dispatchEvent(h),
                  h.defaultPrevented || Fn(g ?? document.body, { select: !0 }),
                  a.removeEventListener(xc, d),
                  Cm.remove(p));
              }, 0));
          };
        }
      }, [a, c, d, p]));
    const b = y.useCallback(
      (g) => {
        if ((!n && !r) || p.paused) return;
        const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          h = document.activeElement;
        if (x && h) {
          const v = g.currentTarget,
            [w, S] = IN(v);
          w && S
            ? !g.shiftKey && h === S
              ? (g.preventDefault(), n && Fn(w, { select: !0 }))
              : g.shiftKey &&
                h === w &&
                (g.preventDefault(), n && Fn(S, { select: !0 }))
            : h === v && g.preventDefault();
        }
      },
      [n, r, p.paused],
    );
    return u.jsx(Ne.div, { tabIndex: -1, ...s, ref: m, onKeyDown: b });
  });
Jy.displayName = ON;
function _N(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Fn(r, { select: t }), document.activeElement !== n)) return;
}
function IN(e) {
  const t = Zy(e),
    n = Em(t, e),
    r = Em(t.reverse(), e);
  return [n, r];
}
function Zy(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Em(e, t) {
  for (const n of e) if (!LN(n, { upTo: t })) return n;
}
function LN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function MN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Fn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && MN(e) && t && e.select());
  }
}
var Cm = DN();
function DN() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = km(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = km(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function km(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function FN(e) {
  return e.filter((t) => t.tagName !== "A");
}
var wc = 0;
function zN() {
  y.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Nm()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Nm()),
      wc++,
      () => {
        (wc === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          wc--);
      }
    );
  }, []);
}
function Nm() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var rn = function () {
  return (
    (rn =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    rn.apply(this, arguments)
  );
};
function e0(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function $N(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var pa = "right-scroll-bar-position",
  ma = "width-before-scroll-bar",
  BN = "with-scroll-bars-hidden",
  UN = "--removed-body-scroll-bar-size";
function bc(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function VN(e, t) {
  var n = y.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var HN = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  Tm = new WeakMap();
function WN(e, t) {
  var n = VN(null, function (r) {
    return e.forEach(function (o) {
      return bc(o, r);
    });
  });
  return (
    HN(
      function () {
        var r = Tm.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          (o.forEach(function (a) {
            i.has(a) || bc(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || bc(a, s);
            }));
        }
        Tm.set(n, e);
      },
      [e],
    ),
    n
  );
}
function KN(e) {
  return e;
}
function QN(e, t) {
  t === void 0 && (t = KN);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          ((n = []), s.forEach(i));
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          ((n = []), a.forEach(i), (s = n));
        }
        var l = function () {
            var d = s;
            ((s = []), d.forEach(i));
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        (c(),
          (n = {
            push: function (d) {
              (s.push(d), c());
            },
            filter: function (d) {
              return ((s = s.filter(d)), n);
            },
          }));
      },
    };
  return o;
}
function GN(e) {
  e === void 0 && (e = {});
  var t = QN(null);
  return ((t.options = rn({ async: !0, ssr: !1 }, e)), t);
}
var t0 = function (e) {
  var t = e.sideCar,
    n = e0(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return y.createElement(r, rn({}, n));
};
t0.isSideCarExport = !0;
function qN(e, t) {
  return (e.useMedium(t), t0);
}
var n0 = GN(),
  Sc = function () {},
  kl = y.forwardRef(function (e, t) {
    var n = y.useRef(null),
      r = y.useState({
        onScrollCapture: Sc,
        onWheelCapture: Sc,
        onTouchMoveCapture: Sc,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      m = e.sideCar,
      p = e.noRelative,
      b = e.noIsolation,
      g = e.inert,
      x = e.allowPinchZoom,
      h = e.as,
      v = h === void 0 ? "div" : h,
      w = e.gapMode,
      S = e0(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      E = m,
      C = WN([n, t]),
      k = rn(rn({}, S), o);
    return y.createElement(
      y.Fragment,
      null,
      d &&
        y.createElement(E, {
          sideCar: n0,
          removeScrollBar: c,
          shards: f,
          noRelative: p,
          noIsolation: b,
          inert: g,
          setCallbacks: i,
          allowPinchZoom: !!x,
          lockRef: n,
          gapMode: w,
        }),
      s
        ? y.cloneElement(y.Children.only(a), rn(rn({}, k), { ref: C }))
        : y.createElement(v, rn({}, k, { className: l, ref: C }), a),
    );
  });
kl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
kl.classNames = { fullWidth: ma, zeroRight: pa };
var YN = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function XN() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = YN();
  return (t && e.setAttribute("nonce", t), e);
}
function JN(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function ZN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var eT = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = XN()) && (JN(t, n), ZN(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  tT = function () {
    var e = eT();
    return function (t, n) {
      y.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  r0 = function () {
    var e = tT(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  nT = { left: 0, top: 0, right: 0, gap: 0 },
  Ec = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  rT = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ec(n), Ec(r), Ec(o)];
  },
  oT = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return nT;
    var t = rT(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  iT = r0(),
  Co = "data-scroll-locked",
  sT = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          BN,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Co,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          pa,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          ma,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(pa, " .")
        .concat(
          pa,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ma, " .")
        .concat(
          ma,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Co,
          `] {
    `,
        )
        .concat(UN, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  jm = function () {
    var e = parseInt(document.body.getAttribute(Co) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  aT = function () {
    y.useEffect(function () {
      return (
        document.body.setAttribute(Co, (jm() + 1).toString()),
        function () {
          var e = jm() - 1;
          e <= 0
            ? document.body.removeAttribute(Co)
            : document.body.setAttribute(Co, e.toString());
        }
      );
    }, []);
  },
  lT = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    aT();
    var i = y.useMemo(
      function () {
        return oT(o);
      },
      [o],
    );
    return y.createElement(iT, { styles: sT(i, !t, o, n ? "" : "!important") });
  },
  $u = !1;
if (typeof window < "u")
  try {
    var Ws = Object.defineProperty({}, "passive", {
      get: function () {
        return (($u = !0), !0);
      },
    });
    (window.addEventListener("test", Ws, Ws),
      window.removeEventListener("test", Ws, Ws));
  } catch {
    $u = !1;
  }
var Xr = $u ? { passive: !1 } : !1,
  cT = function (e) {
    return e.tagName === "TEXTAREA";
  },
  o0 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !cT(e) && n[t] === "visible")
    );
  },
  uT = function (e) {
    return o0(e, "overflowY");
  },
  dT = function (e) {
    return o0(e, "overflowX");
  },
  Pm = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = i0(e, r);
      if (o) {
        var i = s0(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  fT = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  pT = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  i0 = function (e, t) {
    return e === "v" ? uT(t) : dT(t);
  },
  s0 = function (e, t) {
    return e === "v" ? fT(t) : pT(t);
  },
  mT = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  hT = function (e, t, n, r, o) {
    var i = mT(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      d = s > 0,
      f = 0,
      m = 0;
    do {
      if (!a) break;
      var p = s0(e, a),
        b = p[0],
        g = p[1],
        x = p[2],
        h = g - x - i * b;
      (b || h) && i0(e, a) && ((f += h), (m += b));
      var v = a.parentNode;
      a = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((d && (Math.abs(f) < 1 || !o)) || (!d && (Math.abs(m) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  Ks = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Rm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Am = function (e) {
    return e && "current" in e ? e.current : e;
  },
  gT = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  vT = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  yT = 0,
  Jr = [];
function xT(e) {
  var t = y.useRef([]),
    n = y.useRef([0, 0]),
    r = y.useRef(),
    o = y.useState(yT++)[0],
    i = y.useState(r0)[0],
    s = y.useRef(e);
  (y.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    y.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = $N([e.lockRef.current], (e.shards || []).map(Am), !0).filter(
            Boolean,
          );
          return (
            g.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var a = y.useCallback(function (g, x) {
      if (
        ("touches" in g && g.touches.length === 2) ||
        (g.type === "wheel" && g.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var h = Ks(g),
        v = n.current,
        w = "deltaX" in g ? g.deltaX : v[0] - h[0],
        S = "deltaY" in g ? g.deltaY : v[1] - h[1],
        E,
        C = g.target,
        k = Math.abs(w) > Math.abs(S) ? "h" : "v";
      if ("touches" in g && k === "h" && C.type === "range") return !1;
      var N = Pm(k, C);
      if (!N) return !0;
      if ((N ? (E = k) : ((E = k === "v" ? "h" : "v"), (N = Pm(k, C))), !N))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (w || S) && (r.current = E), !E)
      )
        return !0;
      var R = r.current || E;
      return hT(R, x, g, R === "h" ? w : S, !0);
    }, []),
    l = y.useCallback(function (g) {
      var x = g;
      if (!(!Jr.length || Jr[Jr.length - 1] !== i)) {
        var h = "deltaY" in x ? Rm(x) : Ks(x),
          v = t.current.filter(function (E) {
            return (
              E.name === x.type &&
              (E.target === x.target || x.target === E.shadowParent) &&
              gT(E.delta, h)
            );
          })[0];
        if (v && v.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!v) {
          var w = (s.current.shards || [])
              .map(Am)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(x.target);
              }),
            S = w.length > 0 ? a(x, w[0]) : !s.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    c = y.useCallback(function (g, x, h, v) {
      var w = { name: g, delta: x, target: h, should: v, shadowParent: wT(h) };
      (t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== w;
          });
        }, 1));
    }, []),
    d = y.useCallback(function (g) {
      ((n.current = Ks(g)), (r.current = void 0));
    }, []),
    f = y.useCallback(function (g) {
      c(g.type, Rm(g), g.target, a(g, e.lockRef.current));
    }, []),
    m = y.useCallback(function (g) {
      c(g.type, Ks(g), g.target, a(g, e.lockRef.current));
    }, []);
  y.useEffect(function () {
    return (
      Jr.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", l, Xr),
      document.addEventListener("touchmove", l, Xr),
      document.addEventListener("touchstart", d, Xr),
      function () {
        ((Jr = Jr.filter(function (g) {
          return g !== i;
        })),
          document.removeEventListener("wheel", l, Xr),
          document.removeEventListener("touchmove", l, Xr),
          document.removeEventListener("touchstart", d, Xr));
      }
    );
  }, []);
  var p = e.removeScrollBar,
    b = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    b ? y.createElement(i, { styles: vT(o) }) : null,
    p
      ? y.createElement(lT, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function wT(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const bT = qN(n0, xT);
var a0 = y.forwardRef(function (e, t) {
  return y.createElement(kl, rn({}, e, { ref: t, sideCar: bT }));
});
a0.classNames = kl.classNames;
var ST = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Zr = new WeakMap(),
  Qs = new WeakMap(),
  Gs = {},
  Cc = 0,
  l0 = function (e) {
    return e && (e.host || l0(e.parentNode));
  },
  ET = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = l0(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  CT = function (e, t, n, r) {
    var o = ET(t, Array.isArray(e) ? e : [e]);
    Gs[n] || (Gs[n] = new WeakMap());
    var i = Gs[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      c = function (f) {
        !f || a.has(f) || (a.add(f), c(f.parentNode));
      };
    o.forEach(c);
    var d = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (m) {
          if (a.has(m)) d(m);
          else
            try {
              var p = m.getAttribute(r),
                b = p !== null && p !== "false",
                g = (Zr.get(m) || 0) + 1,
                x = (i.get(m) || 0) + 1;
              (Zr.set(m, g),
                i.set(m, x),
                s.push(m),
                g === 1 && b && Qs.set(m, !0),
                x === 1 && m.setAttribute(n, "true"),
                b || m.setAttribute(r, "true"));
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", m, h);
            }
        });
    };
    return (
      d(t),
      a.clear(),
      Cc++,
      function () {
        (s.forEach(function (f) {
          var m = Zr.get(f) - 1,
            p = i.get(f) - 1;
          (Zr.set(f, m),
            i.set(f, p),
            m || (Qs.has(f) || f.removeAttribute(r), Qs.delete(f)),
            p || f.removeAttribute(n));
        }),
          Cc--,
          Cc ||
            ((Zr = new WeakMap()),
            (Zr = new WeakMap()),
            (Qs = new WeakMap()),
            (Gs = {})));
      }
    );
  },
  kT = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = ST(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        CT(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Nl = "Dialog",
  [c0, WP] = ds(Nl),
  [NT, qt] = c0(Nl),
  u0 = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = y.useRef(null),
      l = y.useRef(null),
      [c, d] = Ev({ prop: r, defaultProp: o ?? !1, onChange: i, caller: Nl });
    return u.jsx(NT, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: pc(),
      titleId: pc(),
      descriptionId: pc(),
      open: c,
      onOpenChange: d,
      onOpenToggle: y.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n,
    });
  };
u0.displayName = Nl;
var d0 = "DialogTrigger",
  f0 = y.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = qt(d0, n),
      i = Je(t, o.triggerRef);
    return u.jsx(Ne.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": mf(o.open),
      ...r,
      ref: i,
      onClick: he(e.onClick, o.onOpenToggle),
    });
  });
f0.displayName = d0;
var ff = "DialogPortal",
  [TT, p0] = c0(ff, { forceMount: void 0 }),
  m0 = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = qt(ff, t);
    return u.jsx(TT, {
      scope: t,
      forceMount: n,
      children: y.Children.map(r, (s) =>
        u.jsx(Wo, {
          present: n || i.open,
          children: u.jsx(Hd, { asChild: !0, container: o, children: s }),
        }),
      ),
    });
  };
m0.displayName = ff;
var Ga = "DialogOverlay",
  h0 = y.forwardRef((e, t) => {
    const n = p0(Ga, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = qt(Ga, e.__scopeDialog);
    return i.modal
      ? u.jsx(Wo, {
          present: r || i.open,
          children: u.jsx(PT, { ...o, ref: t }),
        })
      : null;
  });
h0.displayName = Ga;
var jT = Ki("DialogOverlay.RemoveScroll"),
  PT = y.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = qt(Ga, n);
    return u.jsx(a0, {
      as: jT,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: u.jsx(Ne.div, {
        "data-state": mf(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Br = "DialogContent",
  g0 = y.forwardRef((e, t) => {
    const n = p0(Br, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = qt(Br, e.__scopeDialog);
    return u.jsx(Wo, {
      present: r || i.open,
      children: i.modal
        ? u.jsx(RT, { ...o, ref: t })
        : u.jsx(AT, { ...o, ref: t }),
    });
  });
g0.displayName = Br;
var RT = y.forwardRef((e, t) => {
    const n = qt(Br, e.__scopeDialog),
      r = y.useRef(null),
      o = Je(t, n.contentRef, r);
    return (
      y.useEffect(() => {
        const i = r.current;
        if (i) return kT(i);
      }, []),
      u.jsx(v0, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: he(e.onCloseAutoFocus, (i) => {
          var s;
          (i.preventDefault(), (s = n.triggerRef.current) == null || s.focus());
        }),
        onPointerDownOutside: he(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: he(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  AT = y.forwardRef((e, t) => {
    const n = qt(Br, e.__scopeDialog),
      r = y.useRef(!1),
      o = y.useRef(!1);
    return u.jsx(v0, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, a;
        ((s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1));
      },
      onInteractOutside: (i) => {
        var l, c;
        ((l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0)));
        const s = i.target;
        (((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault());
      },
    });
  }),
  v0 = y.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      a = qt(Br, n),
      l = y.useRef(null),
      c = Je(t, l);
    return (
      zN(),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Jy, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: u.jsx(pl, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": mf(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(OT, { titleId: a.titleId }),
              u.jsx(IT, { contentRef: l, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  pf = "DialogTitle",
  y0 = y.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = qt(pf, n);
    return u.jsx(Ne.h2, { id: o.titleId, ...r, ref: t });
  });
y0.displayName = pf;
var x0 = "DialogDescription",
  w0 = y.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = qt(x0, n);
    return u.jsx(Ne.p, { id: o.descriptionId, ...r, ref: t });
  });
w0.displayName = x0;
var b0 = "DialogClose",
  S0 = y.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = qt(b0, n);
    return u.jsx(Ne.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: he(e.onClick, () => o.onOpenChange(!1)),
    });
  });
S0.displayName = b0;
function mf(e) {
  return e ? "open" : "closed";
}
var E0 = "DialogTitleWarning",
  [KP, C0] = xb(E0, { contentName: Br, titleName: pf, docsSlug: "dialog" }),
  OT = ({ titleId: e }) => {
    const t = C0(E0),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      y.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  _T = "DialogDescriptionWarning",
  IT = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${C0(_T).contentName}}.`;
    return (
      y.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  LT = u0,
  MT = f0,
  DT = m0,
  k0 = h0,
  N0 = g0,
  T0 = y0,
  j0 = w0,
  FT = S0;
const Om = LT,
  _m = MT,
  zT = DT,
  P0 = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(k0, {
      ref: n,
      className: se(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  );
P0.displayName = k0.displayName;
const Bu = y.forwardRef(({ className: e, children: t, ...n }, r) =>
  u.jsxs(zT, {
    children: [
      u.jsx(P0, {}),
      u.jsxs(N0, {
        ref: r,
        className: se(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e,
        ),
        ...n,
        children: [
          t,
          u.jsxs(FT, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [
              u.jsx(Gd, { className: "h-4 w-4" }),
              u.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
Bu.displayName = N0.displayName;
const Uu = ({ className: e, ...t }) =>
  u.jsx("div", {
    className: se("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
Uu.displayName = "DialogHeader";
const Vu = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(T0, {
    ref: n,
    className: se("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
Vu.displayName = T0.displayName;
const $T = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(j0, {
    ref: n,
    className: se("text-sm text-muted-foreground", e),
    ...t,
  }),
);
$T.displayName = j0.displayName;
const Jn = y.forwardRef(({ className: e, type: t, ...n }, r) =>
  u.jsx("input", {
    type: t,
    className: se(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Jn.displayName = "Input";
var BT = "Label",
  R0 = y.forwardRef((e, t) =>
    u.jsx(Ne.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
R0.displayName = BT;
var A0 = R0;
const UT = gl(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Sr = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(A0, { ref: n, className: se(UT(), e), ...t }),
  );
Sr.displayName = A0.displayName;
const qa = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("textarea", {
    className: se(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...t,
  }),
);
qa.displayName = "Textarea";
class ms {
  constructor(t = 0, n = "Network Error") {
    ((this.status = t), (this.text = n));
  }
}
const VT = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  Me = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: VT(),
  },
  hf = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
          ? e
          : {}
      : {},
  HT = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = hf(e);
    ((Me.publicKey = n.publicKey),
      (Me.blockHeadless = n.blockHeadless),
      (Me.storageProvider = n.storageProvider),
      (Me.blockList = n.blockList),
      (Me.limitRate = n.limitRate),
      (Me.origin = n.origin || t));
  },
  O0 = async (e, t, n = {}) => {
    const r = await fetch(Me.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      o = await r.text(),
      i = new ms(r.status, o);
    if (r.ok) return i;
    throw i;
  },
  _0 = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  WT = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  I0 = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  L0 = () => new ms(451, "Unavailable For Headless Browser"),
  KT = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  QT = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  GT = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  M0 = (e, t) => {
    if (QT(e)) return !1;
    KT(e.list, e.watchVariable);
    const n = GT(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  D0 = () => new ms(403, "Forbidden"),
  qT = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  YT = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  F0 = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    qT(t.throttle, t.id);
    const r = t.id || e;
    return (await YT(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  z0 = () => new ms(429, "Too Many Requests"),
  XT = async (e, t, n, r) => {
    const o = hf(r),
      i = o.publicKey || Me.publicKey,
      s = o.blockHeadless || Me.blockHeadless,
      a = o.storageProvider || Me.storageProvider,
      l = { ...Me.blockList, ...o.blockList },
      c = { ...Me.limitRate, ...o.limitRate };
    return s && I0(navigator)
      ? Promise.reject(L0())
      : (_0(i, e, t),
        WT(n),
        n && M0(l, n)
          ? Promise.reject(D0())
          : (await F0(location.pathname, c, a))
            ? Promise.reject(z0())
            : O0(
                "/api/v1.0/email/send",
                JSON.stringify({
                  lib_version: "4.4.1",
                  user_id: i,
                  service_id: e,
                  template_id: t,
                  template_params: n,
                }),
                { "Content-type": "application/json" },
              ));
  },
  JT = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  ZT = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  ej = async (e, t, n, r) => {
    const o = hf(r),
      i = o.publicKey || Me.publicKey,
      s = o.blockHeadless || Me.blockHeadless,
      a = Me.storageProvider || o.storageProvider,
      l = { ...Me.blockList, ...o.blockList },
      c = { ...Me.limitRate, ...o.limitRate };
    if (s && I0(navigator)) return Promise.reject(L0());
    const d = ZT(n);
    (_0(i, e, t), JT(d));
    const f = new FormData(d);
    return M0(l, f)
      ? Promise.reject(D0())
      : (await F0(location.pathname, c, a))
        ? Promise.reject(z0())
        : (f.append("lib_version", "4.4.1"),
          f.append("service_id", e),
          f.append("template_id", t),
          f.append("user_id", i),
          O0("/api/v1.0/email/send-form", f));
  },
  gf = { init: HT, send: XT, sendForm: ej, EmailJSResponseStatus: ms },
  tj = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_EMAILJS_PUBLIC_KEY: "wqo9Czt0-EKt3sjmP",
    VITE_EMAILJS_SERVICE_ID: "service_0418i83",
    VITE_EMAILJS_TEMPLATE_ID: "template_g28mn4m",
    VITE_VERCEL_BRANCH_URL:
      "theunipick-git-master-perpetual-cosmos-projects.vercel.app",
    VITE_VERCEL_DEPLOYMENT_ID: "dpl_7ew1v8ukVGaZ5WYVxJBHgQ9Rnyg6",
    VITE_VERCEL_ENV: "production",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "perpetual-cosmos",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "perpetual-cosmos",
    VITE_VERCEL_GIT_COMMIT_MESSAGE: "updated image with webp",
    VITE_VERCEL_GIT_COMMIT_REF: "master",
    VITE_VERCEL_GIT_COMMIT_SHA: "c95784a43be3159bfcc2b47b4e0b4ab99e4f1dc6",
    VITE_VERCEL_GIT_PREVIOUS_SHA: "",
    VITE_VERCEL_GIT_PROVIDER: "github",
    VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
    VITE_VERCEL_GIT_REPO_ID: "1047997274",
    VITE_VERCEL_GIT_REPO_OWNER: "perpetual-cosmos",
    VITE_VERCEL_GIT_REPO_SLUG: "freelancing_website",
    VITE_VERCEL_OBSERVABILITY_CLIENT_CONFIG:
      '{"analytics":{"scriptSrc":"09905eeb72e819ee/script.js","viewEndpoint":"09905eeb72e819ee/view","eventEndpoint":"09905eeb72e819ee/event","sessionEndpoint":"09905eeb72e819ee/session"},"speedInsights":{"scriptSrc":"c80b0d8619a7378a/script.js","endpoint":"c80b0d8619a7378a/vitals"}}',
    VITE_VERCEL_PROJECT_ID: "prj_qI2hDlBddLRKbWVUKvExACgsPZy3",
    VITE_VERCEL_PROJECT_PRODUCTION_URL: "theunipick.vercel.app",
    VITE_VERCEL_TARGET_ENV: "production",
    VITE_VERCEL_URL:
      "theunipick-am7ilvqhq-perpetual-cosmos-projects.vercel.app",
  };
var kc = {};
function nj() {
  try {
    if (typeof import.meta < "u" && tj)
      return {
        SERVICE_ID: "service_0418i83",
        TEMPLATE_ID: "template_g28mn4m",
        PUBLIC_KEY: "wqo9Czt0-EKt3sjmP",
      };
  } catch {}
  return {
    SERVICE_ID: kc.REACT_APP_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: kc.REACT_APP_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: kc.REACT_APP_EMAILJS_PUBLIC_KEY,
  };
}
const { SERVICE_ID: $0, TEMPLATE_ID: B0, PUBLIC_KEY: Im } = nj();
if (Im)
  try {
    gf.init(Im);
  } catch (e) {
    console.error("EmailJS init failed", e);
  }
const rj = (e, t = $0, n = B0) =>
    !t || !n
      ? Promise.reject(new Error("Missing serviceId or templateId"))
      : gf.send(t, n, e),
  oj = (e, t = $0, n = B0) =>
    !t || !n
      ? Promise.reject(new Error("Missing serviceId or templateId"))
      : gf.sendForm(t, n, e);
function U0() {
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!1),
    [o, i] = y.useState(null),
    s = y.useCallback(() => {
      (t(!1), r(!1), i(null));
    }, []),
    a = y.useCallback(async (c, d = {}) => {
      const { serviceId: f, templateId: m } = d;
      (t(!0), i(null), r(!1));
      try {
        const p = await rj(c, f, m);
        return (r(!0), p);
      } catch (p) {
        throw (i(p), p);
      } finally {
        t(!1);
      }
    }, []),
    l = y.useCallback(async (c, d = {}) => {
      const { serviceId: f, templateId: m } = d;
      (t(!0), i(null), r(!1));
      try {
        const p = await oj(c, f, m);
        return (r(!0), p);
      } catch (p) {
        throw (i(p), p);
      } finally {
        t(!1);
      }
    }, []);
  return { loading: e, success: n, error: o, send: a, sendForm: l, reset: s };
}
const V0 = () => {
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(!1),
      [o, i] = y.useState({ name: "", email: "", message: "" }),
      { send: s, loading: a, success: l, error: c, reset: d } = U0(),
      { toast: f } = Vd(),
      m = [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
      p = (x) => {
        i({ ...o, [x.target.name]: x.target.value });
      },
      b = async (x) => {
        x.preventDefault();
        try {
          (await s({ name: o.name, email: o.email, message: o.message }),
            f({
              title: "Request Sent!",
              description: "Thank you! I'll contact you soon.",
            }),
            i({ name: "", email: "", message: "" }),
            d(),
            r(!1));
        } catch (h) {
          f({
            title: "Error",
            description: h.message || "Something went wrong.",
          });
        }
      },
      g = (x) => {
        const h = document.querySelector(x);
        (h && h.scrollIntoView({ behavior: "smooth" }), t(!1));
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs("header", {
          className:
            "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20",
          children: [
            u.jsx("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: u.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [
                  u.jsx("div", {
                    className: "flex-shrink-0",
                    children: u.jsx("h1", {
                      className: "text-xl font-bold text-gradient",
                      children: "TheUniPick",
                    }),
                  }),
                  u.jsx("nav", {
                    className: "hidden md:block",
                    children: u.jsx("div", {
                      className: "flex items-center space-x-8",
                      children: m.map((x) =>
                        u.jsxs(
                          "button",
                          {
                            onClick: () => g(x.href),
                            className:
                              "text-muted-foreground hover:text-primary transition-colors duration-200 relative group",
                            children: [
                              x.name,
                              u.jsx("span", {
                                className:
                                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                              }),
                            ],
                          },
                          x.name,
                        ),
                      ),
                    }),
                  }),
                  u.jsx("div", {
                    className: "hidden md:block",
                    children: u.jsxs(Om, {
                      open: n,
                      onOpenChange: r,
                      children: [
                        u.jsx(_m, {
                          asChild: !0,
                          children: u.jsx(He, {
                            className:
                              "bg-gradient-primary hover:shadow-glow transition-all duration-300",
                            children: "Book Free Consultation",
                          }),
                        }),
                        u.jsxs(Bu, {
                          className: "sm:max-w-md",
                          children: [
                            u.jsx(Uu, {
                              children: u.jsx(Vu, {
                                className: "text-center",
                                children: "Book Your Free Consultation",
                              }),
                            }),
                            u.jsxs("form", {
                              onSubmit: b,
                              className: "space-y-4",
                              children: [
                                u.jsxs("div", {
                                  children: [
                                    u.jsx(Sr, {
                                      htmlFor: "name",
                                      children: "Name",
                                    }),
                                    u.jsx(Jn, {
                                      id: "name",
                                      name: "name",
                                      required: !0,
                                      className: "mt-1",
                                      value: o.name,
                                      onChange: p,
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx(Sr, {
                                      htmlFor: "email",
                                      children: "Email",
                                    }),
                                    u.jsx(Jn, {
                                      id: "email",
                                      name: "email",
                                      type: "email",
                                      required: !0,
                                      className: "mt-1",
                                      value: o.email,
                                      onChange: p,
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx(Sr, {
                                      htmlFor: "message",
                                      children: "Message",
                                    }),
                                    u.jsx(qa, {
                                      id: "message",
                                      name: "message",
                                      rows: 4,
                                      className: "mt-1",
                                      value: o.message,
                                      onChange: p,
                                    }),
                                  ],
                                }),
                                u.jsx(He, {
                                  type: "submit",
                                  className: "w-full bg-gradient-primary",
                                  children: a
                                    ? "Sending..."
                                    : u.jsxs(u.Fragment, {
                                        children: [
                                          u.jsx(Tu, {
                                            className: "w-4 h-4 mr-2",
                                          }),
                                          " Submit",
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: "md:hidden",
                    children: u.jsx(He, {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => t(!e),
                      className: "text-muted-foreground hover:text-primary",
                      children: e
                        ? u.jsx(Gd, { className: "h-6 w-6" })
                        : u.jsx(XS, { className: "h-6 w-6" }),
                    }),
                  }),
                ],
              }),
            }),
            u.jsx("div", {
              className: `md:hidden transition-all duration-300 ease-in-out ${e ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`,
              children: u.jsxs("div", {
                className:
                  "px-4 pt-2 pb-6 space-y-4 bg-background/95 backdrop-blur-md border-t border-border/20",
                children: [
                  m.map((x) =>
                    u.jsx(
                      "button",
                      {
                        onClick: () => g(x.href),
                        className:
                          "block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors duration-200",
                        children: x.name,
                      },
                      x.name,
                    ),
                  ),
                  u.jsxs(Om, {
                    open: n,
                    onOpenChange: r,
                    children: [
                      u.jsx(_m, {
                        asChild: !0,
                        children: u.jsx(He, {
                          className:
                            "w-full mt-4 bg-gradient-primary hover:shadow-glow transition-all duration-300",
                          children: "Book Free Consultation",
                        }),
                      }),
                      u.jsxs(Bu, {
                        className: "sm:max-w-md",
                        children: [
                          u.jsx(Uu, {
                            children: u.jsx(Vu, {
                              className: "text-center",
                              children: "Book Your Free Consultation",
                            }),
                          }),
                          u.jsxs("form", {
                            onSubmit: b,
                            className: "space-y-4",
                            children: [
                              u.jsxs("div", {
                                children: [
                                  u.jsx(Sr, {
                                    htmlFor: "mobile-name",
                                    children: "Name",
                                  }),
                                  u.jsx(Jn, {
                                    id: "mobile-name",
                                    name: "name",
                                    required: !0,
                                    className: "mt-1",
                                    value: o.name,
                                    onChange: p,
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx(Sr, {
                                    htmlFor: "mobile-email",
                                    children: "Email",
                                  }),
                                  u.jsx(Jn, {
                                    id: "mobile-email",
                                    name: "email",
                                    type: "email",
                                    required: !0,
                                    className: "mt-1",
                                    value: o.email,
                                    onChange: p,
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx(Sr, {
                                    htmlFor: "mobile-message",
                                    children: "Message",
                                  }),
                                  u.jsx(qa, {
                                    id: "mobile-message",
                                    name: "message",
                                    rows: 4,
                                    className: "mt-1",
                                    value: o.message,
                                    onChange: p,
                                  }),
                                ],
                              }),
                              u.jsx(He, {
                                type: "submit",
                                className: "w-full bg-gradient-primary",
                                children: a
                                  ? "Sending..."
                                  : u.jsxs(u.Fragment, {
                                      children: [
                                        u.jsx(Tu, {
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        " Submit",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        u.jsx("div", { className: "h-16" }),
      ],
    });
  },
  ij = () => {
    const e = () => {
      const t = document.getElementById("contact");
      t == null || t.scrollIntoView({ behavior: "smooth" });
    };
    return u.jsxs("section", {
      className:
        "relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden",
      children: [
        u.jsxs("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [
            u.jsx("div", {
              className:
                "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float",
            }),
            u.jsx("div", {
              className:
                "absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float",
              style: { animationDelay: "2s" },
            }),
            u.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse",
            }),
          ],
        }),
        u.jsx("div", {
          className: "relative z-10 text-center max-w-6xl mx-auto",
          children: u.jsxs("div", {
            className: "animate-slide-up",
            children: [
              u.jsxs("h1", {
                className:
                  "font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight",
                children: [
                  "Transforming ",
                  u.jsx("span", {
                    className: "text-gradient",
                    children: "Ideas",
                  }),
                  " into",
                  " ",
                  u.jsx("span", {
                    className: "text-gradient",
                    children: "Digital Experiences",
                  }),
                ],
              }),
              u.jsx("h2", {
                className:
                  "text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-semibold",
                children:
                  "Best Freelance Web Developer in India for Startups & Small Businesses",
              }),
              u.jsx("p", {
                className:
                  "text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light",
                children:
                  "Providing Affordable & SEO-Friendly Website Development Services. Deliver results with high-performance, modern, and scalable websites. 50+ client projects delivered. Let's bring your vision to life.",
              }),
              u.jsx(He, {
                onClick: e,
                size: "lg",
                className:
                  "bg-gradient-primary hover:glow-primary text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg animate-glow",
                children: "Book Free Consultation",
              }),
            ],
          }),
        }),
      ],
    });
  },
  ft = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx("div", {
      ref: n,
      className: se(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e,
      ),
      ...t,
    }),
  );
ft.displayName = "Card";
const H0 = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("div", {
    ref: n,
    className: se("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
H0.displayName = "CardHeader";
const W0 = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("h3", {
    ref: n,
    className: se("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
W0.displayName = "CardTitle";
const K0 = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("p", {
    ref: n,
    className: se("text-sm text-muted-foreground", e),
    ...t,
  }),
);
K0.displayName = "CardDescription";
const vf = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("div", { ref: n, className: se("p-6 pt-0", e), ...t }),
);
vf.displayName = "CardContent";
const sj = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("div", {
    ref: n,
    className: se("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
sj.displayName = "CardFooter";
function aj(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lm(e) {
  return aj(e) || Array.isArray(e);
}
function lj() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function yf(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i
    ? !1
    : n.every((s) => {
        const a = e[s],
          l = t[s];
        return typeof a == "function"
          ? `${a}` == `${l}`
          : !Lm(a) || !Lm(l)
            ? a === l
            : yf(a, l);
      });
}
function Mm(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function cj(e, t) {
  if (e.length !== t.length) return !1;
  const n = Mm(e),
    r = Mm(t);
  return n.every((o, i) => {
    const s = r[i];
    return yf(o, s);
  });
}
function xf(e) {
  return typeof e == "number";
}
function Hu(e) {
  return typeof e == "string";
}
function Tl(e) {
  return typeof e == "boolean";
}
function Dm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ve(e) {
  return Math.abs(e);
}
function wf(e) {
  return Math.sign(e);
}
function ji(e, t) {
  return ve(e - t);
}
function uj(e, t) {
  if (e === 0 || t === 0 || ve(e) <= ve(t)) return 0;
  const n = ji(ve(e), ve(t));
  return ve(n / e);
}
function dj(e) {
  return Math.round(e * 100) / 100;
}
function Zi(e) {
  return es(e).map(Number);
}
function Wt(e) {
  return e[hs(e)];
}
function hs(e) {
  return Math.max(0, e.length - 1);
}
function bf(e, t) {
  return t === hs(e);
}
function Fm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function es(e) {
  return Object.keys(e);
}
function Q0(e, t) {
  return [e, t].reduce(
    (n, r) => (
      es(r).forEach((o) => {
        const i = n[o],
          s = r[o],
          a = Dm(i) && Dm(s);
        n[o] = a ? Q0(i, s) : s;
      }),
      n
    ),
    {},
  );
}
function Wu(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function fj(e, t) {
  const n = { start: r, center: o, end: i };
  function r() {
    return 0;
  }
  function o(l) {
    return i(l) / 2;
  }
  function i(l) {
    return t - l;
  }
  function s(l, c) {
    return Hu(e) ? n[e](l) : e(t, l, c);
  }
  return { measure: s };
}
function ts() {
  let e = [];
  function t(o, i, s, a = { passive: !0 }) {
    let l;
    if ("addEventListener" in o)
      (o.addEventListener(i, s, a), (l = () => o.removeEventListener(i, s, a)));
    else {
      const c = o;
      (c.addListener(s), (l = () => c.removeListener(s)));
    }
    return (e.push(l), r);
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = { add: t, clear: n };
  return r;
}
function pj(e, t, n, r) {
  const o = ts(),
    i = 1e3 / 60;
  let s = null,
    a = 0,
    l = 0;
  function c() {
    o.add(e, "visibilitychange", () => {
      e.hidden && b();
    });
  }
  function d() {
    (p(), o.clear());
  }
  function f(x) {
    if (!l) return;
    s || ((s = x), n(), n());
    const h = x - s;
    for (s = x, a += h; a >= i; ) (n(), (a -= i));
    const v = a / i;
    (r(v), l && (l = t.requestAnimationFrame(f)));
  }
  function m() {
    l || (l = t.requestAnimationFrame(f));
  }
  function p() {
    (t.cancelAnimationFrame(l), (s = null), (a = 0), (l = 0));
  }
  function b() {
    ((s = null), (a = 0));
  }
  return { init: c, destroy: d, start: m, stop: p, update: n, render: r };
}
function mj(e, t) {
  const n = t === "rtl",
    r = e === "y",
    o = r ? "y" : "x",
    i = r ? "x" : "y",
    s = !r && n ? -1 : 1,
    a = d(),
    l = f();
  function c(b) {
    const { height: g, width: x } = b;
    return r ? g : x;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(b) {
    return b * s;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: a,
    endEdge: l,
    measureSize: c,
    direction: m,
  };
}
function Ur(e = 0, t = 0) {
  const n = ve(e - t);
  function r(c) {
    return c < e;
  }
  function o(c) {
    return c > t;
  }
  function i(c) {
    return r(c) || o(c);
  }
  function s(c) {
    return i(c) ? (r(c) ? e : t) : c;
  }
  function a(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: a,
  };
}
function G0(e, t, n) {
  const { constrain: r } = Ur(0, e),
    o = e + 1;
  let i = s(t);
  function s(m) {
    return n ? ve((o + m) % o) : r(m);
  }
  function a() {
    return i;
  }
  function l(m) {
    return ((i = s(m)), f);
  }
  function c(m) {
    return d().set(a() + m);
  }
  function d() {
    return G0(e, a(), n);
  }
  const f = { get: a, set: l, add: c, clone: d };
  return f;
}
function hj(e, t, n, r, o, i, s, a, l, c, d, f, m, p, b, g, x, h, v) {
  const { cross: w, direction: S } = e,
    E = ["INPUT", "SELECT", "TEXTAREA"],
    C = { passive: !1 },
    k = ts(),
    N = ts(),
    R = Ur(50, 225).constrain(p.measure(20)),
    A = { mouse: 300, touch: 400 },
    D = { mouse: 500, touch: 600 },
    L = b ? 43 : 25;
  let W = !1,
    O = 0,
    H = 0,
    B = !1,
    V = !1,
    T = !1,
    j = !1;
  function M(z) {
    if (!v) return;
    function Z(Pe) {
      (Tl(v) || v(z, Pe)) && we(Pe);
    }
    const ue = t;
    k.add(ue, "dragstart", (Pe) => Pe.preventDefault(), C)
      .add(ue, "touchmove", () => {}, C)
      .add(ue, "touchend", () => {})
      .add(ue, "touchstart", Z)
      .add(ue, "mousedown", Z)
      .add(ue, "touchcancel", be)
      .add(ue, "contextmenu", be)
      .add(ue, "click", Oe, !0);
  }
  function U() {
    (k.clear(), N.clear());
  }
  function $() {
    const z = j ? n : t;
    N.add(z, "touchmove", q, C)
      .add(z, "touchend", be)
      .add(z, "mousemove", q, C)
      .add(z, "mouseup", be);
  }
  function K(z) {
    const Z = z.nodeName || "";
    return E.includes(Z);
  }
  function Q() {
    return (b ? D : A)[j ? "mouse" : "touch"];
  }
  function ae(z, Z) {
    const ue = f.add(wf(z) * -1),
      Pe = d.byDistance(z, !b).distance;
    return b || ve(z) < R
      ? Pe
      : x && Z
        ? Pe * 0.5
        : d.byIndex(ue.get(), 0).distance;
  }
  function we(z) {
    const Z = Wu(z, r);
    ((j = Z),
      (T = b && Z && !z.buttons && W),
      (W = ji(o.get(), s.get()) >= 2),
      !(Z && z.button !== 0) &&
        (K(z.target) ||
          ((B = !0),
          i.pointerDown(z),
          c.useFriction(0).useDuration(0),
          o.set(s),
          $(),
          (O = i.readPoint(z)),
          (H = i.readPoint(z, w)),
          m.emit("pointerDown"))));
  }
  function q(z) {
    if (!Wu(z, r) && z.touches.length >= 2) return be(z);
    const ue = i.readPoint(z),
      Pe = i.readPoint(z, w),
      Ke = ji(ue, O),
      lt = ji(Pe, H);
    if (!V && !j && (!z.cancelable || ((V = Ke > lt), !V))) return be(z);
    const ct = i.pointerMove(z);
    (Ke > g && (T = !0),
      c.useFriction(0.3).useDuration(0.75),
      a.start(),
      o.add(S(ct)),
      z.preventDefault());
  }
  function be(z) {
    const ue = d.byDistance(0, !1).index !== f.get(),
      Pe = i.pointerUp(z) * Q(),
      Ke = ae(S(Pe), ue),
      lt = uj(Pe, Ke),
      ct = L - 10 * lt,
      Qe = h + lt / 50;
    ((V = !1),
      (B = !1),
      N.clear(),
      c.useDuration(ct).useFriction(Qe),
      l.distance(Ke, !b),
      (j = !1),
      m.emit("pointerUp"));
  }
  function Oe(z) {
    T && (z.stopPropagation(), z.preventDefault(), (T = !1));
  }
  function Te() {
    return B;
  }
  return { init: M, destroy: U, pointerDown: Te };
}
function gj(e, t) {
  let r, o;
  function i(f) {
    return f.timeStamp;
  }
  function s(f, m) {
    const b = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Wu(f, t) ? f : f.touches[0])[b];
  }
  function a(f) {
    return ((r = f), (o = f), s(f));
  }
  function l(f) {
    const m = s(f) - s(o),
      p = i(f) - i(r) > 170;
    return ((o = f), p && (r = f), m);
  }
  function c(f) {
    if (!r || !o) return 0;
    const m = s(o) - s(r),
      p = i(f) - i(r),
      b = i(f) - i(o) > 170,
      g = m / p;
    return p && !b && ve(g) > 0.1 ? g : 0;
  }
  return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: s };
}
function vj() {
  function e(n) {
    const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: s } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + s,
      left: o,
      width: i,
      height: s,
    };
  }
  return { measure: e };
}
function yj(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function xj(e, t, n, r, o, i, s) {
  const a = [e].concat(r);
  let l,
    c,
    d = [],
    f = !1;
  function m(x) {
    return o.measureSize(s.measure(x));
  }
  function p(x) {
    if (!i) return;
    ((c = m(e)), (d = r.map(m)));
    function h(v) {
      for (const w of v) {
        if (f) return;
        const S = w.target === e,
          E = r.indexOf(w.target),
          C = S ? c : d[E],
          k = m(S ? e : r[E]);
        if (ve(k - C) >= 0.5) {
          (x.reInit(), t.emit("resize"));
          break;
        }
      }
    }
    ((l = new ResizeObserver((v) => {
      (Tl(i) || i(x, v)) && h(v);
    })),
      n.requestAnimationFrame(() => {
        a.forEach((v) => l.observe(v));
      }));
  }
  function b() {
    ((f = !0), l && l.disconnect());
  }
  return { init: p, destroy: b };
}
function wj(e, t, n, r, o, i) {
  let s = 0,
    a = 0,
    l = o,
    c = i,
    d = e.get(),
    f = 0;
  function m() {
    const C = r.get() - e.get(),
      k = !l;
    let N = 0;
    return (
      k
        ? ((s = 0), n.set(r), e.set(r), (N = C))
        : (n.set(e), (s += C / l), (s *= c), (d += s), e.add(s), (N = d - f)),
      (a = wf(N)),
      (f = d),
      E
    );
  }
  function p() {
    const C = r.get() - t.get();
    return ve(C) < 0.001;
  }
  function b() {
    return l;
  }
  function g() {
    return a;
  }
  function x() {
    return s;
  }
  function h() {
    return w(o);
  }
  function v() {
    return S(i);
  }
  function w(C) {
    return ((l = C), E);
  }
  function S(C) {
    return ((c = C), E);
  }
  const E = {
    direction: g,
    duration: b,
    velocity: x,
    seek: m,
    settled: p,
    useBaseFriction: v,
    useBaseDuration: h,
    useFriction: S,
    useDuration: w,
  };
  return E;
}
function bj(e, t, n, r, o) {
  const i = o.measure(10),
    s = o.measure(50),
    a = Ur(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(p) {
    if (!c()) return;
    const b = e.reachedMin(t.get()) ? "min" : "max",
      g = ve(e[b] - t.get()),
      x = n.get() - t.get(),
      h = a.constrain(g / s);
    (n.subtract(x * h),
      !p &&
        ve(x) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction()));
  }
  function f(p) {
    l = !p;
  }
  return { shouldConstrain: c, constrain: d, toggleActive: f };
}
function Sj(e, t, n, r, o) {
  const i = Ur(-t + e, 0),
    s = f(),
    a = d(),
    l = m();
  function c(b, g) {
    return ji(b, g) <= 1;
  }
  function d() {
    const b = s[0],
      g = Wt(s),
      x = s.lastIndexOf(b),
      h = s.indexOf(g) + 1;
    return Ur(x, h);
  }
  function f() {
    return n
      .map((b, g) => {
        const { min: x, max: h } = i,
          v = i.constrain(b),
          w = !g,
          S = bf(n, g);
        return w ? h : S || c(x, v) ? x : c(h, v) ? h : v;
      })
      .map((b) => parseFloat(b.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return s;
    const { min: b, max: g } = a;
    return s.slice(b, g);
  }
  return { snapsContained: l, scrollContainLimit: a };
}
function Ej(e, t, n) {
  const r = t[0],
    o = n ? r - e : Wt(t);
  return { limit: Ur(o, r) };
}
function Cj(e, t, n, r) {
  const i = t.min + 0.1,
    s = t.max + 0.1,
    { reachedMin: a, reachedMax: l } = Ur(i, s);
  function c(m) {
    return m === 1 ? l(n.get()) : m === -1 ? a(n.get()) : !1;
  }
  function d(m) {
    if (!c(m)) return;
    const p = e * (m * -1);
    r.forEach((b) => b.add(p));
  }
  return { loop: d };
}
function kj(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const s = i - t;
    return n ? s / -n : 0;
  }
  return { get: r };
}
function Nj(e, t, n, r, o) {
  const { startEdge: i, endEdge: s } = e,
    { groupSlides: a } = o,
    l = f().map(t.measure),
    c = m(),
    d = p();
  function f() {
    return a(r)
      .map((g) => Wt(g)[s] - g[0][i])
      .map(ve);
  }
  function m() {
    return r.map((g) => n[i] - g[i]).map((g) => -ve(g));
  }
  function p() {
    return a(c)
      .map((g) => g[0])
      .map((g, x) => g + l[x]);
  }
  return { snaps: c, snapsAligned: d };
}
function Tj(e, t, n, r, o, i) {
  const { groupSlides: s } = o,
    { min: a, max: l } = r,
    c = d();
  function d() {
    const m = s(i),
      p = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : p
        ? m
        : m.slice(a, l).map((b, g, x) => {
            const h = !g,
              v = bf(x, g);
            if (h) {
              const w = Wt(x[0]) + 1;
              return Fm(w);
            }
            if (v) {
              const w = hs(i) - Wt(x)[0] + 1;
              return Fm(w, Wt(x)[0]);
            }
            return b;
          });
  }
  return { slideRegistry: c };
}
function jj(e, t, n, r, o) {
  const { reachedAny: i, removeOffset: s, constrain: a } = r;
  function l(b) {
    return b.concat().sort((g, x) => ve(g) - ve(x))[0];
  }
  function c(b) {
    const g = e ? s(b) : a(b),
      x = t
        .map((v, w) => ({ diff: d(v - g, 0), index: w }))
        .sort((v, w) => ve(v.diff) - ve(w.diff)),
      { index: h } = x[0];
    return { index: h, distance: g };
  }
  function d(b, g) {
    const x = [b, b + n, b - n];
    if (!e) return b;
    if (!g) return l(x);
    const h = x.filter((v) => wf(v) === g);
    return h.length ? l(h) : Wt(x) - n;
  }
  function f(b, g) {
    const x = t[b] - o.get(),
      h = d(x, g);
    return { index: b, distance: h };
  }
  function m(b, g) {
    const x = o.get() + b,
      { index: h, distance: v } = c(x),
      w = !e && i(x);
    if (!g || w) return { index: h, distance: b };
    const S = t[h] - v,
      E = b + d(S, 0);
    return { index: h, distance: E };
  }
  return { byDistance: m, byIndex: f, shortcut: d };
}
function Pj(e, t, n, r, o, i, s) {
  function a(f) {
    const m = f.distance,
      p = f.index !== t.get();
    (i.add(m),
      m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      p && (n.set(t.get()), t.set(f.index), s.emit("select")));
  }
  function l(f, m) {
    const p = o.byDistance(f, m);
    a(p);
  }
  function c(f, m) {
    const p = t.clone().set(f),
      b = o.byIndex(p.get(), m);
    a(b);
  }
  return { distance: l, index: c };
}
function Rj(e, t, n, r, o, i, s, a) {
  const l = { passive: !0, capture: !0 };
  let c = 0;
  function d(p) {
    if (!a) return;
    function b(g) {
      if (new Date().getTime() - c > 10) return;
      (s.emit("slideFocusStart"), (e.scrollLeft = 0));
      const v = n.findIndex((w) => w.includes(g));
      xf(v) && (o.useDuration(0), r.index(v, 0), s.emit("slideFocus"));
    }
    (i.add(document, "keydown", f, !1),
      t.forEach((g, x) => {
        i.add(
          g,
          "focus",
          (h) => {
            (Tl(a) || a(p, h)) && b(x);
          },
          l,
        );
      }));
  }
  function f(p) {
    p.code === "Tab" && (c = new Date().getTime());
  }
  return { init: d };
}
function vi(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = s(l);
  }
  function o(l) {
    t += s(l);
  }
  function i(l) {
    t -= s(l);
  }
  function s(l) {
    return xf(l) ? l : l.get();
  }
  return { get: n, set: r, add: o, subtract: i };
}
function q0(e, t) {
  const n = e.scroll === "x" ? s : a,
    r = t.style;
  let o = null,
    i = !1;
  function s(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function a(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function l(m) {
    if (i) return;
    const p = dj(e.direction(m));
    p !== o && ((r.transform = n(p)), (o = p));
  }
  function c(m) {
    i = !m;
  }
  function d() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: d, to: l, toggleActive: c };
}
function Aj(e, t, n, r, o, i, s, a, l) {
  const d = Zi(o),
    f = Zi(o).reverse(),
    m = h().concat(v());
  function p(k, N) {
    return k.reduce((R, A) => R - o[A], N);
  }
  function b(k, N) {
    return k.reduce((R, A) => (p(R, N) > 0 ? R.concat([A]) : R), []);
  }
  function g(k) {
    return i.map((N, R) => ({
      start: N - r[R] + 0.5 + k,
      end: N + t - 0.5 + k,
    }));
  }
  function x(k, N, R) {
    const A = g(N);
    return k.map((D) => {
      const L = R ? 0 : -n,
        W = R ? n : 0,
        O = R ? "end" : "start",
        H = A[D][O];
      return {
        index: D,
        loopPoint: H,
        slideLocation: vi(-1),
        translate: q0(e, l[D]),
        target: () => (a.get() > H ? L : W),
      };
    });
  }
  function h() {
    const k = s[0],
      N = b(f, k);
    return x(N, n, !1);
  }
  function v() {
    const k = t - s[0] - 1,
      N = b(d, k);
    return x(N, -n, !0);
  }
  function w() {
    return m.every(({ index: k }) => {
      const N = d.filter((R) => R !== k);
      return p(N, t) <= 0.1;
    });
  }
  function S() {
    m.forEach((k) => {
      const { target: N, translate: R, slideLocation: A } = k,
        D = N();
      D !== A.get() && (R.to(D), A.set(D));
    });
  }
  function E() {
    m.forEach((k) => k.translate.clear());
  }
  return { canLoop: w, clear: E, loop: S, loopPoints: m };
}
function Oj(e, t, n) {
  let r,
    o = !1;
  function i(l) {
    if (!n) return;
    function c(d) {
      for (const f of d)
        if (f.type === "childList") {
          (l.reInit(), t.emit("slidesChanged"));
          break;
        }
    }
    ((r = new MutationObserver((d) => {
      o || ((Tl(n) || n(l, d)) && c(d));
    })),
      r.observe(e, { childList: !0 }));
  }
  function s() {
    (r && r.disconnect(), (o = !0));
  }
  return { init: i, destroy: s };
}
function _j(e, t, n, r) {
  const o = {};
  let i = null,
    s = null,
    a,
    l = !1;
  function c() {
    ((a = new IntersectionObserver(
      (b) => {
        l ||
          (b.forEach((g) => {
            const x = t.indexOf(g.target);
            o[x] = g;
          }),
          (i = null),
          (s = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r },
    )),
      t.forEach((b) => a.observe(b)));
  }
  function d() {
    (a && a.disconnect(), (l = !0));
  }
  function f(b) {
    return es(o).reduce((g, x) => {
      const h = parseInt(x),
        { isIntersecting: v } = o[h];
      return (((b && v) || (!b && !v)) && g.push(h), g);
    }, []);
  }
  function m(b = !0) {
    if (b && i) return i;
    if (!b && s) return s;
    const g = f(b);
    return (b && (i = g), b || (s = g), g);
  }
  return { init: c, destroy: d, get: m };
}
function Ij(e, t, n, r, o, i) {
  const { measureSize: s, startEdge: a, endEdge: l } = e,
    c = n[0] && o,
    d = b(),
    f = g(),
    m = n.map(s),
    p = x();
  function b() {
    if (!c) return 0;
    const v = n[0];
    return ve(t[a] - v[a]);
  }
  function g() {
    if (!c) return 0;
    const v = i.getComputedStyle(Wt(r));
    return parseFloat(v.getPropertyValue(`margin-${l}`));
  }
  function x() {
    return n
      .map((v, w, S) => {
        const E = !w,
          C = bf(S, w);
        return E ? m[w] + d : C ? m[w] + f : S[w + 1][a] - v[a];
      })
      .map(ve);
  }
  return { slideSizes: m, slideSizesWithGaps: p, startGap: d, endGap: f };
}
function Lj(e, t, n, r, o, i, s, a, l) {
  const { startEdge: c, endEdge: d, direction: f } = e,
    m = xf(n);
  function p(h, v) {
    return Zi(h)
      .filter((w) => w % v === 0)
      .map((w) => h.slice(w, w + v));
  }
  function b(h) {
    return h.length
      ? Zi(h)
          .reduce((v, w, S) => {
            const E = Wt(v) || 0,
              C = E === 0,
              k = w === hs(h),
              N = o[c] - i[E][c],
              R = o[c] - i[w][d],
              A = !r && C ? f(s) : 0,
              D = !r && k ? f(a) : 0,
              L = ve(R - D - (N + A));
            return (S && L > t + l && v.push(w), k && v.push(h.length), v);
          }, [])
          .map((v, w, S) => {
            const E = Math.max(S[w - 1] || 0);
            return h.slice(E, v);
          })
      : [];
  }
  function g(h) {
    return m ? p(h, n) : b(h);
  }
  return { groupSlides: g };
}
function Mj(e, t, n, r, o, i, s) {
  const {
      align: a,
      axis: l,
      direction: c,
      startIndex: d,
      loop: f,
      duration: m,
      dragFree: p,
      dragThreshold: b,
      inViewThreshold: g,
      slidesToScroll: x,
      skipSnaps: h,
      containScroll: v,
      watchResize: w,
      watchSlides: S,
      watchDrag: E,
      watchFocus: C,
    } = i,
    k = 2,
    N = vj(),
    R = N.measure(t),
    A = n.map(N.measure),
    D = mj(l, c),
    L = D.measureSize(R),
    W = yj(L),
    O = fj(a, L),
    H = !f && !!v,
    B = f || !!v,
    {
      slideSizes: V,
      slideSizesWithGaps: T,
      startGap: j,
      endGap: M,
    } = Ij(D, R, A, n, B, o),
    U = Lj(D, L, x, f, R, A, j, M, k),
    { snaps: $, snapsAligned: K } = Nj(D, O, R, A, U),
    Q = -Wt($) + Wt(T),
    { snapsContained: ae, scrollContainLimit: we } = Sj(L, Q, K, v, k),
    q = H ? ae : K,
    { limit: be } = Ej(Q, q, f),
    Oe = G0(hs(q), d, f),
    Te = Oe.clone(),
    te = Zi(n),
    z = ({
      dragHandler: Pt,
      scrollBody: Jo,
      scrollBounds: Qr,
      options: { loop: Pn },
    }) => {
      (Pn || Qr.constrain(Pt.pointerDown()), Jo.seek());
    },
    Z = (
      {
        scrollBody: Pt,
        translate: Jo,
        location: Qr,
        offsetLocation: Pn,
        previousLocation: Rn,
        scrollLooper: ys,
        slideLooper: An,
        dragHandler: Rl,
        animation: Al,
        eventHandler: Zo,
        scrollBounds: xs,
        options: { loop: ws },
      },
      Gr,
    ) => {
      const Rt = Pt.settled(),
        Ol = !xs.shouldConstrain(),
        G = ws ? Rt : Rt && Ol,
        oe = G && !Rl.pointerDown();
      oe && Al.stop();
      const le = Qr.get() * Gr + Rn.get() * (1 - Gr);
      (Pn.set(le),
        ws && (ys.loop(Pt.direction()), An.loop()),
        Jo.to(Pn.get()),
        oe && Zo.emit("settle"),
        G || Zo.emit("scroll"));
    },
    ue = pj(
      r,
      o,
      () => z(Xo),
      (Pt) => Z(Xo, Pt),
    ),
    Pe = 0.68,
    Ke = q[Oe.get()],
    lt = vi(Ke),
    ct = vi(Ke),
    Qe = vi(Ke),
    Yt = vi(Ke),
    Tt = wj(lt, Qe, ct, Yt, m, Pe),
    Kr = jj(f, q, Q, be, Yt),
    jt = Pj(ue, Oe, Te, Tt, Kr, Yt, s),
    gs = kj(be),
    vs = ts(),
    tt = _j(t, n, s, g),
    { slideRegistry: un } = Tj(H, v, q, we, U, te),
    Pl = Rj(e, n, un, jt, Tt, vs, s, C),
    Xo = {
      ownerDocument: r,
      ownerWindow: o,
      eventHandler: s,
      containerRect: R,
      slideRects: A,
      animation: ue,
      axis: D,
      dragHandler: hj(
        D,
        e,
        r,
        o,
        Yt,
        gj(D, o),
        lt,
        ue,
        jt,
        Tt,
        Kr,
        Oe,
        s,
        W,
        p,
        b,
        h,
        Pe,
        E,
      ),
      eventStore: vs,
      percentOfView: W,
      index: Oe,
      indexPrevious: Te,
      limit: be,
      location: lt,
      offsetLocation: Qe,
      previousLocation: ct,
      options: i,
      resizeHandler: xj(t, s, o, n, D, w, N),
      scrollBody: Tt,
      scrollBounds: bj(be, Qe, Yt, Tt, W),
      scrollLooper: Cj(Q, be, Qe, [lt, Qe, ct, Yt]),
      scrollProgress: gs,
      scrollSnapList: q.map(gs.get),
      scrollSnaps: q,
      scrollTarget: Kr,
      scrollTo: jt,
      slideLooper: Aj(D, L, Q, V, T, $, q, Qe, n),
      slideFocus: Pl,
      slidesHandler: Oj(t, s, S),
      slidesInView: tt,
      slideIndexes: te,
      slideRegistry: un,
      slidesToScroll: U,
      target: Yt,
      translate: q0(D, t),
    };
  return Xo;
}
function Dj() {
  let e = {},
    t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return (r(c).forEach((d) => d(t, c)), l);
  }
  function i(c, d) {
    return ((e[c] = r(c).concat([d])), l);
  }
  function s(c, d) {
    return ((e[c] = r(c).filter((f) => f !== d)), l);
  }
  function a() {
    e = {};
  }
  const l = { init: n, emit: o, off: s, on: i, clear: a };
  return l;
}
const Fj = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function zj(e) {
  function t(i, s) {
    return Q0(i, s || {});
  }
  function n(i) {
    const s = i.breakpoints || {},
      a = es(s)
        .filter((l) => e.matchMedia(l).matches)
        .map((l) => s[l])
        .reduce((l, c) => t(l, c), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((s) => es(s.breakpoints || {}))
      .reduce((s, a) => s.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function $j(e) {
  let t = [];
  function n(i, s) {
    return (
      (t = s.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      s.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function Ya(e, t, n) {
  const r = e.ownerDocument,
    o = r.defaultView,
    i = zj(o),
    s = $j(i),
    a = ts(),
    l = Dj(),
    { mergeOptions: c, optionsAtMedia: d, optionsMediaQueries: f } = i,
    { on: m, off: p, emit: b } = l,
    g = D;
  let x = !1,
    h,
    v = c(Fj, Ya.globalOptions),
    w = c(v),
    S = [],
    E,
    C,
    k;
  function N() {
    const { container: te, slides: z } = w;
    C = (Hu(te) ? e.querySelector(te) : te) || e.children[0];
    const ue = Hu(z) ? C.querySelectorAll(z) : z;
    k = [].slice.call(ue || C.children);
  }
  function R(te) {
    const z = Mj(e, C, k, r, o, te, l);
    if (te.loop && !z.slideLooper.canLoop()) {
      const Z = Object.assign({}, te, { loop: !1 });
      return R(Z);
    }
    return z;
  }
  function A(te, z) {
    x ||
      ((v = c(v, te)),
      (w = d(v)),
      (S = z || S),
      N(),
      (h = R(w)),
      f([v, ...S.map(({ options: Z }) => Z)]).forEach((Z) =>
        a.add(Z, "change", D),
      ),
      w.active &&
        (h.translate.to(h.location.get()),
        h.animation.init(),
        h.slidesInView.init(),
        h.slideFocus.init(Te),
        h.eventHandler.init(Te),
        h.resizeHandler.init(Te),
        h.slidesHandler.init(Te),
        h.options.loop && h.slideLooper.loop(),
        C.offsetParent && k.length && h.dragHandler.init(Te),
        (E = s.init(Te, S))));
  }
  function D(te, z) {
    const Z = U();
    (L(), A(c({ startIndex: Z }, te), z), l.emit("reInit"));
  }
  function L() {
    (h.dragHandler.destroy(),
      h.eventStore.clear(),
      h.translate.clear(),
      h.slideLooper.clear(),
      h.resizeHandler.destroy(),
      h.slidesHandler.destroy(),
      h.slidesInView.destroy(),
      h.animation.destroy(),
      s.destroy(),
      a.clear());
  }
  function W() {
    x || ((x = !0), a.clear(), L(), l.emit("destroy"), l.clear());
  }
  function O(te, z, Z) {
    !w.active ||
      x ||
      (h.scrollBody.useBaseFriction().useDuration(z === !0 ? 0 : w.duration),
      h.scrollTo.index(te, Z || 0));
  }
  function H(te) {
    const z = h.index.add(1).get();
    O(z, te, -1);
  }
  function B(te) {
    const z = h.index.add(-1).get();
    O(z, te, 1);
  }
  function V() {
    return h.index.add(1).get() !== U();
  }
  function T() {
    return h.index.add(-1).get() !== U();
  }
  function j() {
    return h.scrollSnapList;
  }
  function M() {
    return h.scrollProgress.get(h.offsetLocation.get());
  }
  function U() {
    return h.index.get();
  }
  function $() {
    return h.indexPrevious.get();
  }
  function K() {
    return h.slidesInView.get();
  }
  function Q() {
    return h.slidesInView.get(!1);
  }
  function ae() {
    return E;
  }
  function we() {
    return h;
  }
  function q() {
    return e;
  }
  function be() {
    return C;
  }
  function Oe() {
    return k;
  }
  const Te = {
    canScrollNext: V,
    canScrollPrev: T,
    containerNode: be,
    internalEngine: we,
    destroy: W,
    off: p,
    on: m,
    emit: b,
    plugins: ae,
    previousScrollSnap: $,
    reInit: g,
    rootNode: q,
    scrollNext: H,
    scrollPrev: B,
    scrollProgress: M,
    scrollSnapList: j,
    scrollTo: O,
    selectedScrollSnap: U,
    slideNodes: Oe,
    slidesInView: K,
    slidesNotInView: Q,
  };
  return (A(t, n), setTimeout(() => l.emit("init"), 0), Te);
}
Ya.globalOptions = void 0;
function Sf(e = {}, t = []) {
  const n = y.useRef(e),
    r = y.useRef(t),
    [o, i] = y.useState(),
    [s, a] = y.useState(),
    l = y.useCallback(() => {
      o && o.reInit(n.current, r.current);
    }, [o]);
  return (
    y.useEffect(() => {
      yf(n.current, e) || ((n.current = e), l());
    }, [e, l]),
    y.useEffect(() => {
      cj(r.current, t) || ((r.current = t), l());
    }, [t, l]),
    y.useEffect(() => {
      if (lj() && s) {
        Ya.globalOptions = Sf.globalOptions;
        const c = Ya(s, n.current, r.current);
        return (i(c), () => c.destroy());
      } else i(void 0);
    }, [s, i]),
    [a, o]
  );
}
Sf.globalOptions = void 0;
const Y0 = y.createContext(null);
function jl() {
  const e = y.useContext(Y0);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const X0 = y.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: r,
      className: o,
      children: i,
      ...s
    },
    a,
  ) => {
    const [l, c] = Sf({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
      [d, f] = y.useState(!1),
      [m, p] = y.useState(!1),
      b = y.useCallback((v) => {
        v && (f(v.canScrollPrev()), p(v.canScrollNext()));
      }, []),
      g = y.useCallback(() => {
        c == null || c.scrollPrev();
      }, [c]),
      x = y.useCallback(() => {
        c == null || c.scrollNext();
      }, [c]),
      h = y.useCallback(
        (v) => {
          v.key === "ArrowLeft"
            ? (v.preventDefault(), g())
            : v.key === "ArrowRight" && (v.preventDefault(), x());
        },
        [g, x],
      );
    return (
      y.useEffect(() => {
        !c || !n || n(c);
      }, [c, n]),
      y.useEffect(() => {
        if (c)
          return (
            b(c),
            c.on("reInit", b),
            c.on("select", b),
            () => {
              c == null || c.off("select", b);
            }
          );
      }, [c, b]),
      u.jsx(Y0.Provider, {
        value: {
          carouselRef: l,
          api: c,
          opts: t,
          orientation:
            e ||
            ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: x,
          canScrollPrev: d,
          canScrollNext: m,
        },
        children: u.jsx("div", {
          ref: a,
          onKeyDownCapture: h,
          className: se("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          ...s,
          children: i,
        }),
      })
    );
  },
);
X0.displayName = "Carousel";
const J0 = y.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = jl();
  return u.jsx("div", {
    ref: r,
    className: "overflow-hidden",
    children: u.jsx("div", {
      ref: n,
      className: se("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
J0.displayName = "CarouselContent";
const Z0 = y.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = jl();
  return u.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: se(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      e,
    ),
    ...t,
  });
});
Z0.displayName = "CarouselItem";
const ex = y.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollPrev: s, canScrollPrev: a } = jl();
    return u.jsxs(He, {
      ref: o,
      variant: t,
      size: n,
      className: se(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e,
      ),
      disabled: !a,
      onClick: s,
      ...r,
      children: [
        u.jsx(Kv, { className: "h-4 w-4" }),
        u.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  },
);
ex.displayName = "CarouselPrevious";
const tx = y.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollNext: s, canScrollNext: a } = jl();
    return u.jsxs(He, {
      ref: o,
      variant: t,
      size: n,
      className: se(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e,
      ),
      disabled: !a,
      onClick: s,
      ...r,
      children: [
        u.jsx(xS, { className: "h-4 w-4" }),
        u.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  },
);
tx.displayName = "CarouselNext";
const Bj = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function Uj(e, t) {
  const n = e.scrollSnapList();
  return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function Vj(e, t) {
  const n = e.rootNode();
  return (t && t(n)) || n;
}
function Ef(e = {}) {
  let t,
    n,
    r,
    o,
    i = null,
    s = 0,
    a = !1,
    l = !1,
    c = !1,
    d = !1;
  function f(O, H) {
    n = O;
    const { mergeOptions: B, optionsAtMedia: V } = H,
      T = B(Bj, Ef.globalOptions),
      j = B(T, e);
    if (((t = V(j)), n.scrollSnapList().length <= 1)) return;
    ((d = t.jump), (r = !1), (o = Uj(n, t.delay)));
    const { eventStore: M, ownerDocument: U } = n.internalEngine(),
      $ = !!n.internalEngine().options.watchDrag,
      K = Vj(n, t.rootNode);
    (M.add(U, "visibilitychange", h),
      $ && n.on("pointerDown", w),
      $ && !t.stopOnInteraction && n.on("pointerUp", S),
      t.stopOnMouseEnter && M.add(K, "mouseenter", E),
      t.stopOnMouseEnter && !t.stopOnInteraction && M.add(K, "mouseleave", C),
      t.stopOnFocusIn && n.on("slideFocusStart", x),
      t.stopOnFocusIn &&
        !t.stopOnInteraction &&
        M.add(n.containerNode(), "focusout", g),
      t.playOnInit && g());
  }
  function m() {
    (n.off("pointerDown", w).off("pointerUp", S).off("slideFocusStart", x),
      x(),
      (r = !0),
      (a = !1));
  }
  function p() {
    const { ownerWindow: O } = n.internalEngine();
    (O.clearTimeout(s),
      (s = O.setTimeout(D, o[n.selectedScrollSnap()])),
      (i = new Date().getTime()),
      n.emit("autoplay:timerset"));
  }
  function b() {
    const { ownerWindow: O } = n.internalEngine();
    (O.clearTimeout(s), (s = 0), (i = null), n.emit("autoplay:timerstopped"));
  }
  function g() {
    if (!r) {
      if (v()) {
        c = !0;
        return;
      }
      (a || n.emit("autoplay:play"), p(), (a = !0));
    }
  }
  function x() {
    r || (a && n.emit("autoplay:stop"), b(), (a = !1));
  }
  function h() {
    if (v()) return ((c = a), x());
    c && g();
  }
  function v() {
    const { ownerDocument: O } = n.internalEngine();
    return O.visibilityState === "hidden";
  }
  function w() {
    l || x();
  }
  function S() {
    l || g();
  }
  function E() {
    ((l = !0), x());
  }
  function C() {
    ((l = !1), g());
  }
  function k(O) {
    (typeof O < "u" && (d = O), g());
  }
  function N() {
    a && x();
  }
  function R() {
    a && g();
  }
  function A() {
    return a;
  }
  function D() {
    const { index: O } = n.internalEngine(),
      H = O.clone().add(1).get(),
      B = n.scrollSnapList().length - 1,
      V = t.stopOnLastSnap && H === B;
    if (
      (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d),
      n.emit("autoplay:select"),
      V)
    )
      return x();
    g();
  }
  function L() {
    if (!i) return null;
    const O = o[n.selectedScrollSnap()],
      H = new Date().getTime() - i;
    return O - H;
  }
  return {
    name: "autoplay",
    options: e,
    init: f,
    destroy: m,
    play: k,
    stop: N,
    reset: R,
    isPlaying: A,
    timeUntilNext: L,
  };
}
Ef.globalOptions = void 0;
const nx = () => {
    const [e, t] = y.useState(),
      [n, r] = y.useState(null),
      [o, i] = y.useState(!1),
      s = [
        {
          id: "biryanibabu-website",
          title: "Biryani Babu",
          industry: "Food & Restaurant",
          value:
            "Ranked #1 for local biryani and kebab searches, driving a 300% increase in online orders",
          device: "laptop",
          color: "from-orange-500 to-red-600",
          image: "biriyanibabu.webp",
        },
        {
          id: "blackart-tattoo-studio",
          title: "BlackArt Tattoo Studio",
          industry: "Retail & Services",
          value:
            "High-performance website with specialized booking flow and hygiene compliance showcase",
          device: "laptop",
          color: "from-gray-900 to-black",
          image: "BlackArtTattoo.webp",
        },
        {
          id: "alexink-tattoo-website",
          title: "Alexink Tattoo Website",
          industry: "Retail & Fashion",
          value:
            "Simple website which show all details, driving 5x user adoption",
          device: "laptop",
          color: "from-blue-500 to-cyan-500",
          image: "TattooWebsite.webp",
        },
        {
          id: "cozycafe-branding-website",
          title: "Cafe branding Website",
          industry: "Cafe & Restaurants",
          value: "Award-winning Website that generated 300% more bookings",
          device: "laptop",
          color: "from-orange-500 to-red-500",
          image: "CozyCafe.webp",
        },
        {
          id: "SaaS-Innovation-Platform",
          title: "SaaS Innovation Platform",
          industry: "Services & Technology",
          value:
            "Secured High funding with a polished, trust-building interface",
          device: "laptop",
          color: "from-indigo-500 to-purple-500",
          image: "innovation.webp",
        },
      ],
      a = [
        { icon: Qv, value: 50, label: "Projects Delivered", suffix: "+" },
        { icon: $S, value: 25, label: "happy Clients", suffix: "+" },
        { icon: $a, value: 100, label: "Custom Solutions", suffix: "%" },
      ];
    y.useEffect(() => {
      const c = new IntersectionObserver(
          (f) => {
            f[0].isIntersecting && i(!0);
          },
          { threshold: 0.5 },
        ),
        d = document.getElementById("stats-strip");
      return (d && c.observe(d), () => c.disconnect());
    }, []);
    const l = ({ end: c, duration: d = 2e3, suffix: f = "" }) => {
      const [m, p] = y.useState(0);
      return (
        y.useEffect(() => {
          if (!o) return;
          let b;
          const g = (x) => {
            b || (b = x);
            const h = Math.min((x - b) / d, 1);
            (p(Math.floor(h * c)), h < 1 && requestAnimationFrame(g));
          };
          requestAnimationFrame(g);
        }, [o, c, d]),
        u.jsxs("span", {
          className: "text-5xl md:text-6xl font-bold text-gradient",
          children: [m, f],
        })
      );
    };
    return u.jsxs("section", {
      className:
        "py-24 px-6 md:px-12 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden",
      children: [
        u.jsx("div", {
          className:
            "absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse",
        }),
        u.jsx("div", {
          className:
            "absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse",
          style: { animationDelay: "1s" },
        }),
        u.jsxs("div", {
          className: "max-w-7xl mx-auto relative z-10",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16 animate-slide-up",
              children: [
                u.jsxs("h2", {
                  className:
                    "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6",
                  children: [
                    "Hire a Website Developer Who",
                    " ",
                    u.jsx("span", {
                      className: "text-gradient",
                      children: "Delivers Results",
                    }),
                    " - Check My Work",
                  ],
                }),
                u.jsx("p", {
                  className:
                    "text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed",
                  children:
                    "Every project is a story of innovation, trust, and results. From sleek websites to powerful apps, here's a glimpse of how we turn ideas into digital experiences that delight users and drive business growth.",
                }),
              ],
            }),
            u.jsxs(X0, {
              setApi: t,
              opts: { align: "center", loop: !0 },
              plugins: [Ef({ delay: 5e3, stopOnInteraction: !0 })],
              className: "w-full max-w-6xl mx-auto mb-20",
              children: [
                u.jsx(J0, {
                  className: "-ml-4",
                  children: s.map((c, d) =>
                    u.jsx(
                      Z0,
                      {
                        className: "pl-4 md:basis-4/5 lg:basis-3/4",
                        children: u.jsxs("div", {
                          className: "relative group",
                          onMouseEnter: () => r(d),
                          onMouseLeave: () => r(null),
                          children: [
                            u.jsx("div", {
                              className: "relative mx-auto",
                              style: {
                                maxWidth:
                                  c.device === "laptop" ? "900px" : "350px",
                              },
                              children:
                                c.device === "laptop"
                                  ? u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx("div", {
                                          className:
                                            "bg-background border-8 border-border/50 rounded-t-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]",
                                          children: u.jsxs("div", {
                                            className: `aspect-video bg-gradient-to-br ${c.color} relative`,
                                            children: [
                                              u.jsx("img", {
                                                src: c.image,
                                                alt: `react-nextjs-${c.id}-example-india-freelancer`,
                                                className:
                                                  "absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:blur-md",
                                              }),
                                              u.jsx("div", {
                                                className:
                                                  "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500",
                                              }),
                                              u.jsxs("div", {
                                                className: `absolute inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${n === d ? "opacity-100" : "opacity-0"}`,
                                                children: [
                                                  u.jsxs("div", {
                                                    className:
                                                      "text-center px-6",
                                                    children: [
                                                      u.jsx("h3", {
                                                        className:
                                                          "text-sm sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 text-gradient drop-shadow-lg",
                                                        children: c.title,
                                                      }),
                                                      u.jsx("p", {
                                                        className:
                                                          "text-xs sm:text-lg uppercase tracking-wide text-white/90 sm:mb-4",
                                                        children: c.industry,
                                                      }),
                                                      u.jsx("p", {
                                                        className:
                                                          "text-xs sm:text-base md:text-lg text-white/80 max-w-md mx-auto leading-relaxed drop-shadow",
                                                        children: c.value,
                                                      }),
                                                    ],
                                                  }),
                                                  u.jsx(Xn, {
                                                    to: `/case-study/${c.id}`,
                                                    children: u.jsxs("button", {
                                                      className:
                                                        "px-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 flex items-center gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-lg hover:scale-110",
                                                      children: [
                                                        u.jsx(za, {
                                                          className:
                                                            "sm:w-6 sm:h-6",
                                                        }),
                                                        "View Case Study",
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className:
                                            "h-6 bg-border/30 rounded-b-2xl mx-auto",
                                          style: { width: "60%" },
                                        }),
                                      ],
                                    })
                                  : u.jsxs("div", {
                                      className: "relative mx-auto",
                                      children: [
                                        u.jsx("div", {
                                          className:
                                            "bg-background border-8 border-border/50 rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105 max-h-[450px] sm:max-h-[500px] mx-auto",
                                          children: u.jsxs("div", {
                                            className: `aspect-[9/19] bg-gradient-to-br ${c.color} relative`,
                                            children: [
                                              u.jsx("img", {
                                                src: c.image,
                                                alt: `react-nextjs-${c.id}-mobile-example-india-freelancer`,
                                                className:
                                                  "absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:blur-md",
                                              }),
                                              u.jsx("div", {
                                                className:
                                                  "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500",
                                              }),
                                              u.jsx("div", {
                                                className:
                                                  "text-8xl opacity-20 flex items-center justify-center h-full",
                                                children: "📱",
                                              }),
                                              u.jsxs("div", {
                                                className: `absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ${n === d ? "opacity-100" : "opacity-0"}`,
                                                children: [
                                                  u.jsxs("div", {
                                                    className:
                                                      "text-center text-white",
                                                    children: [
                                                      u.jsx("h3", {
                                                        className:
                                                          "text-2xl font-bold mb-2",
                                                        children: c.title,
                                                      }),
                                                      u.jsx("p", {
                                                        className:
                                                          "text-sm opacity-90 mb-3",
                                                        children: c.industry,
                                                      }),
                                                      u.jsx("p", {
                                                        className:
                                                          "text-xs opacity-80",
                                                        children: c.value,
                                                      }),
                                                    ],
                                                  }),
                                                  u.jsxs("button", {
                                                    className:
                                                      "px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all flex items-center gap-2 text-white font-semibold hover:scale-110",
                                                    children: [
                                                      u.jsx(za, {
                                                        className: "w-5 h-5",
                                                      }),
                                                      "View Case",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className:
                                            "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-border/50 rounded-full",
                                        }),
                                      ],
                                    }),
                            }),
                            u.jsxs("div", {
                              className:
                                "text-center mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                              children: [
                                u.jsx("div", {
                                  className:
                                    "inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-2",
                                  children: c.industry,
                                }),
                                u.jsx("h3", {
                                  className:
                                    "text-2xl font-bold text-gradient mb-2",
                                  children: c.title,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      d,
                    ),
                  ),
                }),
                u.jsx(ex, { className: "hidden lg:flex -left-16" }),
                u.jsx(tx, { className: "hidden lg:flex -right-16" }),
              ],
            }),
            u.jsx("div", {
              id: "stats-strip",
              className:
                "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in",
              children: a.map((c, d) =>
                u.jsxs(
                  ft,
                  {
                    className:
                      "p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:glow-primary",
                    style: { animationDelay: `${d * 0.05}s` },
                    children: [
                      u.jsx("div", {
                        className: "flex justify-center mb-4",
                        children: u.jsx("div", {
                          className: "p-4 bg-gradient-primary rounded-2xl",
                          children: u.jsx(c.icon, {
                            className: "w-8 h-8 text-white",
                          }),
                        }),
                      }),
                      u.jsx(l, { end: c.value, suffix: c.suffix }),
                      u.jsx("p", {
                        className: "text-muted-foreground mt-2 text-lg",
                        children: c.label,
                      }),
                      c.label === "Projects Delivered" &&
                        u.jsx("p", {
                          className: "text-xs text-muted-foreground/60 mt-1",
                          children:
                            "Including 20+ successful projects for Indian and NRI clients",
                        }),
                    ],
                  },
                  d,
                ),
              ),
            }),
            u.jsxs("div", {
              className: "text-center animate-scale-in",
              children: [
                u.jsxs("p", {
                  className:
                    "text-xl md:text-2xl font-semibold mb-6 max-w-3xl mx-auto",
                  children: [
                    "Your project deserves to",
                    " ",
                    u.jsx("span", {
                      className: "text-gradient",
                      children: "shine like these",
                    }),
                    ". Let's make it happen.",
                  ],
                }),
                u.jsx("button", {
                  onClick: () => {
                    var c;
                    return (c = document.getElementById("contact")) == null
                      ? void 0
                      : c.scrollIntoView({ behavior: "smooth" });
                  },
                  className:
                    "px-10 py-5 bg-gradient-primary text-white rounded-full text-lg font-bold transition-all duration-300 hover:scale-110 hover:glow-primary shadow-xl",
                  children: "Start Your Project",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  rx = () => {
    const e = [
        {
          icon: u.jsx(NS, { className: "w-6 h-6 text-primary" }),
          title: "100% Free",
          description: "No hidden costs or commitments",
        },
        {
          icon: u.jsx(RS, { className: "w-6 h-6 text-primary" }),
          title: "Quick Response",
          description: "Get back to you within 24 hours",
        },
        {
          icon: u.jsx(qv, { className: "w-6 h-6 text-primary" }),
          title: "Personalized Approach",
          description: "Tailored solutions for your needs",
        },
        {
          icon: u.jsx(Qv, { className: "w-6 h-6 text-primary" }),
          title: "Expert Advice",
          description: "Professional insights and recommendations",
        },
      ],
      t = () => {
        const n = document.getElementById("contact");
        n == null || n.scrollIntoView({ behavior: "smooth" });
      };
    return u.jsx("section", {
      className: "py-24 px-6 md:px-12 relative overflow-hidden",
      children: u.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl",
          }),
          u.jsxs("div", {
            className: "relative z-10",
            children: [
              u.jsxs("div", {
                className: "text-center mb-16 animate-slide-up",
                children: [
                  u.jsxs("h2", {
                    className:
                      "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6",
                    children: [
                      u.jsx("span", {
                        className: "text-gradient",
                        children: "Free Consultation",
                      }),
                      " - Let's Discuss Your Project",
                    ],
                  }),
                  u.jsx("p", {
                    className:
                      "text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed",
                    children:
                      "Get expert advice on your project without any cost. We'll analyze your needs, discuss solutions, and provide a clear roadmap to success.",
                  }),
                ],
              }),
              u.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
                children: e.map((n, r) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:glow-primary animate-scale-in",
                      style: { animationDelay: `${r * 0.1}s` },
                      children: [
                        u.jsx("div", {
                          className: "flex justify-center mb-4",
                          children: n.icon,
                        }),
                        u.jsx("h3", {
                          className: "font-semibold text-lg mb-2",
                          children: n.title,
                        }),
                        u.jsx("p", {
                          className: "text-muted-foreground text-sm",
                          children: n.description,
                        }),
                      ],
                    },
                    r,
                  ),
                ),
              }),
              u.jsxs("div", {
                className: "text-center",
                children: [
                  u.jsx(He, {
                    onClick: t,
                    size: "lg",
                    className:
                      "bg-gradient-primary hover:glow-primary text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105",
                    children: "Start Your Free Consultation",
                  }),
                  u.jsx("p", {
                    className: "text-sm text-muted-foreground mt-4",
                    children:
                      "No obligations. No pressure. Just honest advice.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Hj = gl(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  );
function Wj({ className: e, variant: t, ...n }) {
  return u.jsx("div", { className: se(Hj({ variant: t }), e), ...n });
}
const ox = () => {
    const e = [
        {
          icon: da,
          title:
            "Get Your Business Online: Custom & SEO-Optimized Website Development",
          description:
            "Build modern, scalable, and high-performance websites that rank on Google and convert visitors into clients.",
          features: [
            "Responsive design",
            "SEO optimization",
            "Performance optimization",
            "React/Next.js",
            "WordPress customization",
          ],
          cta: "Start Your Project →",
          highlight: !1,
        },
        {
          icon: nE,
          title:
            "Free Website Roadmap: Learn How to Build the Perfect Site for Your Business Goals",
          description:
            "Not sure where to start? Get a free 30-minute consultation to plan your tech stack, workflow, and project roadmap.",
          features: [
            "Tech stack recommendations",
            "Roadmap planning",
            "Best practices guidance",
            "No commitment required",
          ],
          cta: "Book Free Call →",
          highlight: !0,
          badge: "Most Popular",
        },
        {
          icon: HS,
          title: "Full-Stack Solutions",
          description:
            "End-to-end development from authentication to payments & dashboards.",
          features: [
            "User authentication",
            "Payment integration (Stripe)",
            "Admin dashboards",
            "Real-time applications",
          ],
          cta: "Get Quote →",
          highlight: !1,
        },
        {
          icon: MS,
          title: "Open Source Collaboration",
          description: "Support teams with feature development & bug fixes.",
          features: [
            "Feature dev",
            "Code reviews",
            "Bug fixes & maintenance",
            "Documentation & testing",
          ],
          cta: "Collaborate →",
          highlight: !1,
        },
      ],
      t = (n) => {
        const r = document.getElementById("contact");
        r && r.scrollIntoView({ behavior: "smooth" });
      };
    return u.jsxs("section", {
      className: "py-20 px-6 md:px-12 relative overflow-hidden",
      children: [
        u.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16 animate-slide-up",
              children: [
                u.jsxs("h2", {
                  className:
                    "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4",
                  children: [
                    "Services & ",
                    u.jsx("span", {
                      className: "text-gradient",
                      children: "Expertise",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className:
                    "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",
                  children:
                    "From consultation to complete development, I provide end-to-end solutions that drive your business forward.",
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
              children: e.map((n, r) => {
                const o = n.icon;
                return u.jsxs(
                  ft,
                  {
                    className: `relative group cursor-pointer transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl hover:border-primary/30
                  ${n.highlight ? "border-accent/50 glow-accent" : "hover:glow-primary"}
                  bg-card/50 backdrop-blur-sm animate-scale-in`,
                    style: { animationDelay: `${r * 0.1}s` },
                    children: [
                      n.highlight &&
                        u.jsx(Wj, {
                          className:
                            "absolute -top-3 left-6 bg-gradient-primary text-primary-foreground px-3 py-1 font-medium z-10",
                          children: n.badge,
                        }),
                      u.jsxs(H0, {
                        className: "pb-4",
                        children: [
                          u.jsx("div", {
                            className: "flex items-start justify-between",
                            children: u.jsxs("div", {
                              className: "flex items-center space-x-4",
                              children: [
                                u.jsx("div", {
                                  className: `p-3 rounded-xl transition-colors duration-300 
                        ${n.highlight ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary group-hover:bg-primary/30"}`,
                                  children: u.jsx(o, { size: 24 }),
                                }),
                                u.jsx("div", {
                                  children: u.jsx(W0, {
                                    className:
                                      "text-xl font-heading font-semibold text-foreground",
                                    children: n.title,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          u.jsx(K0, {
                            className: "text-muted-foreground mt-2",
                            children: n.description,
                          }),
                        ],
                      }),
                      u.jsxs(vf, {
                        className: "space-y-6",
                        children: [
                          u.jsx("ul", {
                            className: "space-y-3",
                            children: n.features.map((i, s) =>
                              u.jsxs(
                                "li",
                                {
                                  className: "flex items-center space-x-3",
                                  children: [
                                    u.jsx("div", {
                                      className: `p-1 rounded-full transition-colors duration-300
                          ${n.highlight ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"}`,
                                      children: u.jsx(CS, { size: 12 }),
                                    }),
                                    u.jsx("span", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: i,
                                    }),
                                  ],
                                },
                                s,
                              ),
                            ),
                          }),
                          u.jsx(He, {
                            onClick: () => t(n.title),
                            className: `w-full font-medium transition-all duration-300 
                      ${n.highlight ? "bg-accent hover:bg-accent/90 text-accent-foreground glow-accent hover:glow-accent" : "bg-primary hover:bg-primary/90 text-primary-foreground hover:glow-primary"}`,
                            children: n.cta,
                          }),
                        ],
                      }),
                    ],
                  },
                  r,
                );
              }),
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float",
        }),
        u.jsx("div", {
          className:
            "absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float",
          style: { animationDelay: "3s" },
        }),
      ],
    });
  },
  Kj = () => {
    const [e, t] = y.useState(null),
      [n, r] = y.useState(!1),
      o = [
        {
          title: "Biryani Babu",
          description:
            "Kolkata's 1st Biryani QSR - Authentic Barrackpore & Delhi Flavors",
          tech: ["React", "Vite", "Styled-Components", "TypeScript"],
          category: "Full Stack",
          link: "https://biryanibabu.in/",
          image: "/src/assets/biriyanibabu.webp",
          id: "biryanibabu-website",
        },
        {
          title: "BlackArt Tattoo Studio",
          description: "Premier Tattoo & Piercing Studio Website in Udaipur",
          tech: ["React", "Next.js", "Tailwind", "TypeScript"],
          category: "Full Stack",
          link: "https://www.blackarttattoo.in/",
          image: "BlackArtTattoo.webp",
          id: "blackart-tattoo-studio",
        },
        {
          title: "Tattoo Website",
          description: "Sleak Clilent Attractive Website",
          tech: ["react", "Next.js", "Tailwind", "typeScript"],
          category: "Frontend",
          link: "https://demo-tattoo-website.vercel.app/",
          image: "TattooWebsite.webp",
          id: "alexink-tattoo-website",
        },
        {
          title: "Neon Tattoo Website",
          description: "Modern and Stylish Tattoo Website",
          tech: ["react", "Next.js", "Tailwind", "typeScript"],
          category: "Frontend",
          link: "https://demo-tattoo-website2.vercel.app/",
          image: "TattooWebsite2.webp",
          id: "inkmaster-tattoo-website",
        },
        {
          title: "Creative Agency Website",
          description: "Award-winning website with stunning performance",
          tech: ["Wordpress", "PHP", "MySQL"],
          category: "Frontend",
          link: "https://www.innovacient.com/",
          image: "Creative-agency.webp",
        },
        {
          title: "Journal Website",
          description: "professional, responsive WordPress website for UJMRID",
          tech: ["Wordpress", "PHP", "MySQL", "CSS"],
          category: "Full Stack",
          link: "https://ujmrid.com/",
          image: "Journal.webp",
        },
        {
          title: "Spice landing E-com",
          description: "WooCommerce-Wordpress based spice e-commerce site",
          tech: ["Wordpress", "PHP", "MySQL", "CSS"],
          category: "Full Stack",
          link: "https://spicesusa.com/",
          image: "Spice.webp",
        },
        {
          title: "E-commerce Platform",
          description: "Modern React e-commerce with Three.js product viewer",
          tech: ["React", "Three.js", "TypeScript", "Tailwind"],
          category: "Full Stack",
          link: "https://ecommerce-frontend-five-sand.vercel.app/",
          image: "E-commerce.webp",
        },
        {
          title: "Cafe Website",
          description: "highly converting premium website",
          tech: ["React", "Next.js", "Tailwind", "typeScript"],
          category: "Creative",
          link: "https://demo-cafes-website.vercel.app/",
          image: "CozyCafe.webp",
          id: "cozycafe-branding-website",
        },
        {
          title: "SaaS Dashboard",
          description: "Complex data visualization and real-time updates",
          tech: ["React", "D3.js", "Node.js", "MongoDB"],
          category: "Full Stack",
          link: "https://www.figma.com/design/6FROM7yhHMowyjvkKKz3KQ/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=1-3&p=f&t=8B7OeWgEPfxGIAxV-0",
          image: "Saas.png",
        },
        {
          title: "Mobile App Landing",
          description: "High-converting landing page with animations",
          tech: ["React", "GSAP", "Tailwind", "Vercel"],
          category: "Frontend",
          image: "Mobile-landing.png",
        },
        {
          title: "AI-Powered Tool",
          description: "Machine learning integration with modern UI",
          tech: ["React", "Python", "FastAPI", "TensorFlow"],
          category: "Full Stack",
          image: "Ai-tools.png",
        },
      ];
    return u.jsx("section", {
      id: "portfolio",
      className: "py-24 px-6 md:px-12",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16 animate-slide-up",
            children: [
              u.jsxs("h2", {
                className:
                  "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6",
                children: [
                  "Featured ",
                  u.jsx("span", {
                    className: "text-gradient",
                    children: "Projects",
                  }),
                ],
              }),
              u.jsx("p", {
                className:
                  "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto",
                children:
                  "Showcasing my latest work in web development, from simple landing pages to complex full-stack applications with cutting-edge technologies.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-6",
            children: [
              u.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: (n ? o : o.slice(0, 6)).map((i, s) =>
                  u.jsxs(
                    ft,
                    {
                      className:
                        "group cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:glow-primary animate-scale-in",
                      style: { animationDelay: `${s * 0.1}s` },
                      onMouseEnter: () => t(s),
                      onMouseLeave: () => t(null),
                      children: [
                        u.jsxs("div", {
                          className: "relative overflow-hidden",
                          children: [
                            u.jsx("div", {
                              className: `aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center
            bg-cover bg-top bg-no-repeat`,
                              style: { backgroundImage: `url(${i.image})` },
                              children: u.jsx("div", {
                                className: "text-6xl opacity-20",
                                children: "💻",
                              }),
                            }),
                            u.jsx("div", {
                              className: `absolute inset-0 bg-gradient-primary/90 flex items-center justify-center gap-4 transition-all duration-300 ${e === s ? "opacity-100" : "opacity-0"}`,
                              children: i.id
                                ? u.jsxs(Xn, {
                                    to: `/case-study/${i.id}`,
                                    className:
                                      "p-3 bg-background/20 rounded-full hover:bg-background/30 transition-colors flex items-center gap-2 text-white text-sm font-medium",
                                    children: [
                                      u.jsx(US, { className: "w-5 h-5" }),
                                      " View Case Study",
                                    ],
                                  })
                                : u.jsxs("a", {
                                    href: i.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "p-3 bg-background/20 rounded-full hover:bg-background/30 transition-colors flex items-center gap-2 text-white text-sm font-medium",
                                    children: [
                                      u.jsx(za, { className: "w-5 h-5" }),
                                      " Live Demo",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "p-6",
                          children: [
                            u.jsx("div", {
                              className:
                                "flex items-center justify-between mb-3",
                              children: u.jsx("span", {
                                className:
                                  "text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium",
                                children: i.category,
                              }),
                            }),
                            u.jsx("a", {
                              href: `${i.link}`,
                              target: "block",
                              children: u.jsx("h3", {
                                className:
                                  "font-semibold text-xl mb-2 group-hover:text-gradient transition-colors",
                                children: i.title,
                              }),
                            }),
                            u.jsx("p", {
                              className:
                                "text-muted-foreground mb-4 text-sm leading-relaxed",
                              children: i.description,
                            }),
                            u.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: i.tech.map((a, l) =>
                                u.jsx(
                                  "span",
                                  {
                                    className:
                                      "text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md",
                                    children: a,
                                  },
                                  l,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    s,
                  ),
                ),
              }),
              o.length > 6 &&
                u.jsx("div", {
                  className: "flex justify-center",
                  children: u.jsx("button", {
                    onClick: () => r(!n),
                    className: `relative px-6 py-2 rounded-lg border-2 border-primary text-primary font-semibold 
             transition duration-300 hover:text-white  hover:bg-primary/20`,
                    children: n ? "Show Less" : "Show More",
                  }),
                }),
            ],
          }),
          u.jsxs("div", {
            className: "text-center mt-12",
            children: [
              u.jsx("p", {
                className: "text-muted-foreground mb-6",
                children:
                  "Want to see more projects? Let's discuss your next idea!",
              }),
              u.jsx("button", {
                onClick: () => {
                  var i;
                  return (i = document.getElementById("contact")) == null
                    ? void 0
                    : i.scrollIntoView({ behavior: "smooth" });
                },
                className:
                  "text-primary hover:text-accent transition-colors font-medium",
                children: "Get In Touch →",
              }),
            ],
          }),
        ],
      }),
    });
  },
  ix = () => {
    const e = [
      {
        name: "Aditya Joshi",
        role: "Startup Founder, Mumbai, India",
        company: "TechVenture",
        quote:
          "The website exceeded our expectations! Clean, fast, and the interactive animations really wow our customers.",
        rating: 5,
        avatar: null,
      },
      {
        name: "Alka Sharma",
        role: "Small Business Owner, Kanpur, India",
        company: "Local Craft Co.",
        quote:
          "The free consultation helped us clarify our needs. The final product is professional and delivered on time.",
        rating: 5,
        avatar: null,
      },
      {
        name: "Emma Rodriguez",
        role: "Agency Manager, USA",
        company: "Creative Solutions",
        quote:
          "Superb communication, modern design, and smooth user experience. Highly recommended!",
        rating: 4,
        avatar: null,
      },
    ];
    return u.jsxs("section", {
      className: "py-20 px-6 md:px-12 relative overflow-hidden",
      children: [
        u.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16 animate-slide-up",
              children: [
                u.jsx("h2", {
                  className:
                    "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground",
                  children: "What My Clients Say",
                }),
                u.jsx("p", {
                  className:
                    "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",
                  children: "Real experiences from people I've worked with.",
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8",
              children: e.map((t, n) =>
                u.jsx(
                  ft,
                  {
                    className: `group cursor-pointer transition-all duration-300 
                hover:scale-105 hover:shadow-2xl hover:border-primary/30 hover:glow-primary
                bg-card/50 backdrop-blur-sm animate-scale-in`,
                    style: { animationDelay: `${n * 0.1}s` },
                    children: u.jsxs(vf, {
                      className: "p-6 space-y-4",
                      children: [
                        u.jsx("div", {
                          className: "flex space-x-1 mb-4",
                          children: [...Array(5)].map((r, o) =>
                            u.jsx(
                              aE,
                              {
                                size: 16,
                                className: `transition-colors duration-300 ${o < t.rating ? "text-accent fill-accent" : "text-muted-foreground/30"}`,
                              },
                              o,
                            ),
                          ),
                        }),
                        u.jsxs("blockquote", {
                          className:
                            "text-muted-foreground italic leading-relaxed",
                          children: ['"', t.quote, '"'],
                        }),
                        u.jsxs("div", {
                          className:
                            "flex items-center space-x-3 pt-4 border-t border-border/50",
                          children: [
                            u.jsx("div", {
                              className:
                                "p-2 bg-primary/20 text-primary rounded-full group-hover:bg-primary/30 transition-colors duration-300",
                              children: u.jsx(pE, { size: 20 }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h4", {
                                  className:
                                    "font-heading font-semibold text-foreground",
                                  children: t.name,
                                }),
                                u.jsxs("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: [t.role, " at ", t.company],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "absolute top-20 right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float",
        }),
        u.jsx("div", {
          className:
            "absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float",
          style: { animationDelay: "2s" },
        }),
      ],
    });
  },
  Qj = () => {
    const [e, t] = y.useState(null),
      n = [
        {
          name: "React & Next.js",
          level: 95,
          icon: u.jsx(da, { className: "w-5 h-5" }),
        },
        {
          name: "JavaScript/TypeScript",
          level: 90,
          icon: u.jsx($a, { className: "w-5 h-5" }),
        },
        {
          name: "Three.js & WebGL",
          level: 85,
          icon: u.jsx(Qp, { className: "w-5 h-5" }),
        },
        {
          name: "GSAP Animations",
          level: 88,
          icon: u.jsx($a, { className: "w-5 h-5" }),
        },
        {
          name: "Node.js & APIs",
          level: 82,
          icon: u.jsx(da, { className: "w-5 h-5" }),
        },
        {
          name: "UI/UX Design",
          level: 78,
          icon: u.jsx(Qp, { className: "w-5 h-5" }),
        },
      ],
      r = [
        {
          label: "Projects Completed",
          value: "50+",
          icon: u.jsx(dE, { className: "w-6 h-6" }),
        },
        {
          label: "Happy Clients",
          value: "25+",
          icon: u.jsx(qv, { className: "w-6 h-6" }),
        },
        {
          label: "Years Experience",
          value: "5+",
          icon: u.jsx(_S, { className: "w-6 h-6" }),
        },
        {
          label: "Technologies",
          value: "15+",
          icon: u.jsx(da, { className: "w-6 h-6" }),
        },
      ];
    return u.jsxs("section", {
      id: "about",
      className: "py-24 px-6 md:px-12 relative overflow-hidden",
      children: [
        u.jsx("div", {
          className:
            "absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl",
        }),
        u.jsx("div", {
          className:
            "absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl",
        }),
        u.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16 animate-slide-up",
              children: [
                u.jsxs("h2", {
                  className:
                    "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6",
                  children: [
                    "About ",
                    u.jsx("span", {
                      className: "text-gradient",
                      children: "Me",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className:
                    "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto",
                  children:
                    "Passionate developer crafting exceptional digital experiences with modern technologies",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
              children: [
                u.jsxs("div", {
                  className: "animate-slide-up",
                  children: [
                    u.jsxs("h3", {
                      className:
                        "font-heading font-semibold text-2xl md:text-3xl mb-6",
                      children: [
                        "My ",
                        u.jsx("span", {
                          className: "text-gradient",
                          children: "Journey",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "space-y-4 text-muted-foreground leading-relaxed",
                      children: [
                        u.jsx("p", {
                          children:
                            "I’ve spent the past few years working on client projects and open-source contributions, where I gained hands-on experience with React, Node.js, MongoDB, Stripe, and building production-ready features.",
                        }),
                        u.jsx("p", {
                          children:
                            "Through this work, I’ve learned how to create SEO-friendly, responsive, and scalable websites that not only function well but also drive real growth.",
                        }),
                        u.jsx("p", {
                          children:
                            "To stay updated with the future of technology, I’m also learning AI and AI agents, exploring how they can enhance products and solve complex problems. My goal now is to take this mix of experience and continuous learning to build solutions that are practical, impactful, and truly useful for others.",
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "grid grid-cols-2 gap-6 mt-8",
                      children: r.map((o, i) =>
                        u.jsxs(
                          "div",
                          {
                            className:
                              "text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:bg-card/50 transition-all duration-300 animate-scale-in",
                            style: { animationDelay: `${i * 0.1}s` },
                            children: [
                              u.jsx("div", {
                                className:
                                  "flex justify-center mb-2 text-primary",
                                children: o.icon,
                              }),
                              u.jsx("div", {
                                className:
                                  "font-bold text-2xl text-gradient mb-1",
                                children: o.value,
                              }),
                              u.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: o.label,
                              }),
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "animate-slide-up",
                  style: { animationDelay: "0.2s" },
                  children: [
                    u.jsxs("h3", {
                      className:
                        "font-heading font-semibold text-2xl md:text-3xl mb-8 text-center lg:text-left",
                      children: [
                        "Technical ",
                        u.jsx("span", {
                          className: "text-gradient",
                          children: "Skills",
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "space-y-6",
                      children: n.map((o, i) =>
                        u.jsxs(
                          "div",
                          {
                            className: "group",
                            onMouseEnter: () => t(i),
                            onMouseLeave: () => t(null),
                            children: [
                              u.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  u.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      u.jsx("span", {
                                        className:
                                          "text-primary group-hover:text-accent transition-colors",
                                        children: o.icon,
                                      }),
                                      u.jsx("span", {
                                        className: "font-medium",
                                        children: o.name,
                                      }),
                                    ],
                                  }),
                                  u.jsxs("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: [o.level, "%"],
                                  }),
                                ],
                              }),
                              u.jsx("div", {
                                className:
                                  "h-2 bg-secondary/30 rounded-full overflow-hidden",
                                children: u.jsx("div", {
                                  className: `h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${e === i ? "glow-primary" : ""}`,
                                  style: {
                                    width: `${o.level}%`,
                                    transformOrigin: "left",
                                  },
                                }),
                              }),
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                    u.jsxs("div", {
                      className:
                        "mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-border/30",
                      children: [
                        u.jsx("h4", {
                          className: "font-semibold text-lg mb-3",
                          children: "Currently Learning",
                        }),
                        u.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            "WebAssembly",
                            "Rust",
                            "AI/ML Integration",
                            "Web3",
                          ].map((o, i) =>
                            u.jsx(
                              "span",
                              {
                                className:
                                  "px-3 py-1 bg-background/50 text-sm rounded-full border border-border/50",
                                children: o,
                              },
                              i,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  sx = () => {
    const [e, t] = y.useState({
        name: "",
        email: "",
        project: "",
        message: "",
        contactMode: "",
        meetingDate: "",
      }),
      { send: n, loading: r, success: o, error: i, reset: s } = U0(),
      { toast: a } = Vd(),
      l = (f) => {
        t({ ...e, [f.target.name]: f.target.value });
      },
      c = async (f) => {
        f.preventDefault();
        try {
          (await n({
            name: e.name,
            email: e.email,
            title: e.project,
            message: e.message,
            contactMode: e.contactMode,
            meetingDate: e.meetingDate,
          }),
            a({
              title: "Message Sent!",
              description:
                "Thank you for reaching out. I'll get back to you within 24 hours.",
            }),
            t({
              name: "",
              email: "",
              project: "",
              message: "",
              contactMode: "",
              meetingDate: "",
            }),
            s());
        } catch (m) {
          a({
            title: "Error sending message",
            description: m.message || "Something went wrong. Please try again.",
          });
        }
      },
      d = [
        {
          icon: u.jsx(Gv, { className: "w-6 h-6" }),
          title: "Email",
          description: "unipick000@gmail.com",
          action: "mailto:unipick000@gmail.com",
          cta: "Send Email",
        },
        {
          icon: u.jsx(ZS, { className: "w-6 h-6" }),
          title: "WhatsApp",
          description: "+91 94511 72458",
          action: "https://wa.me/+919451172458",
          cta: "Message on WhatsApp",
        },
        {
          icon: u.jsx(oE, { className: "w-6 h-6" }),
          title: "Phone",
          description: "+91 9451172458",
          action: "tel:+919451172458",
          cta: "Call Now",
        },
        {
          icon: u.jsx(qS, { className: "w-6 h-6" }),
          title: "Location",
          description: "TheUniPick, Kanpur, UP",
          action:
            "https://www.google.com/maps/place/TheUniPick+%E2%80%93+Web%2FAI+agents+Development+%26+Software+Solutions/@26.4115302,80.3841878,1023m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399c4190ba3ea23b:0x277a1758c5d3b9c3!8m2!3d26.4115254!4d80.3867627!16s%2Fg%2F11z298tf81",
          cta: "View on Maps",
        },
      ];
    return u.jsxs("section", {
      id: "contact",
      className: "py-24 px-6 md:px-12 relative overflow-hidden",
      children: [
        u.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent",
        }),
        u.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16 animate-slide-up",
              children: [
                u.jsxs("h2", {
                  className:
                    "font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6",
                  children: [
                    "Let's Start Your ",
                    u.jsx("span", {
                      className: "text-gradient",
                      children: "Project",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className:
                    "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto",
                  children:
                    "Ready to transform your ideas into reality? Get in touch for your free consultation.",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
              children: [
                u.jsxs(ft, {
                  className:
                    "p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in",
                  children: [
                    u.jsxs("h3", {
                      className: "font-heading font-semibold text-2xl mb-6",
                      children: [
                        "Send a ",
                        u.jsx("span", {
                          className: "text-gradient",
                          children: "Message",
                        }),
                      ],
                    }),
                    u.jsxs("form", {
                      onSubmit: c,
                      className: "space-y-6",
                      children: [
                        u.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "name",
                                  className: "block text-sm font-medium mb-2",
                                  children: "Your Name",
                                }),
                                u.jsx(Jn, {
                                  id: "name",
                                  name: "name",
                                  value: e.name,
                                  onChange: l,
                                  placeholder: "Tarun Singh",
                                  required: !0,
                                  className:
                                    "bg-background/50 border-border/50 focus:border-primary",
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "email",
                                  className: "block text-sm font-medium mb-2",
                                  children: "Email Address",
                                }),
                                u.jsx(Jn, {
                                  id: "email",
                                  name: "email",
                                  type: "email",
                                  value: e.email,
                                  onChange: l,
                                  placeholder: "tarun@example.com",
                                  required: !0,
                                  className:
                                    "bg-background/50 border-border/50 focus:border-primary",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "project",
                              className: "block text-sm font-medium mb-2",
                              children: "Project Type",
                            }),
                            u.jsx(Jn, {
                              id: "project",
                              name: "project",
                              value: e.project,
                              onChange: l,
                              placeholder:
                                "e.g., E-commerce website, Portfolio, Web app",
                              className:
                                "bg-background/50 border-border/50 focus:border-primary",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "message",
                              className: "block text-sm font-medium mb-2",
                              children: "Project Details",
                            }),
                            u.jsx(qa, {
                              id: "message",
                              name: "message",
                              value: e.message,
                              onChange: l,
                              placeholder:
                                "Tell me about your project, goals, timeline, and budget...",
                              rows: 5,
                              required: !0,
                              className:
                                "bg-background/50 border-border/50 focus:border-primary resize-none",
                            }),
                          ],
                        }),
                        u.jsx(He, {
                          type: "submit",
                          disabled: r,
                          className:
                            "w-full bg-gradient-primary hover:glow-primary text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105",
                          children: r
                            ? "Sending..."
                            : u.jsxs(u.Fragment, {
                                children: [
                                  u.jsx(Tu, { className: "w-4 h-4 mr-2" }),
                                  " Send Message",
                                ],
                              }),
                        }),
                        o &&
                          u.jsx("div", {
                            className: "text-green-500",
                            children: "Sent ✔",
                          }),
                        i &&
                          u.jsx("div", {
                            className: "text-red-500",
                            children: i.message,
                          }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    u.jsxs("div", {
                      className: "animate-scale-in",
                      style: { animationDelay: "0.1s" },
                      children: [
                        u.jsxs("h3", {
                          className: "font-heading font-semibold text-2xl mb-6",
                          children: [
                            "Direct ",
                            u.jsx("span", {
                              className: "text-gradient",
                              children: "Contact",
                            }),
                          ],
                        }),
                        u.jsx("p", {
                          className: "text-muted-foreground mb-8",
                          children:
                            "Prefer a more direct approach? Reach out through any of these methods and I'll respond as quickly as possible.",
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: d.map((f, m) =>
                        u.jsx(
                          ft,
                          {
                            className:
                              "p-6 bg-card/30 backdrop-blur-sm border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:glow-primary cursor-pointer animate-scale-in",
                            style: { animationDelay: `${(m + 2) * 0.1}s` },
                            onClick: () => window.open(f.action, "_blank"),
                            children: u.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                u.jsx("div", {
                                  className:
                                    "p-3 bg-primary/20 rounded-lg text-primary",
                                  children: f.icon,
                                }),
                                u.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    u.jsx("h4", {
                                      className: "font-semibold mb-1",
                                      children: f.title,
                                    }),
                                    u.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground mb-2",
                                      children: f.description,
                                    }),
                                    u.jsxs("span", {
                                      className:
                                        "text-xs text-primary hover:text-accent transition-colors",
                                      children: [f.cta, " →"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          m,
                        ),
                      ),
                    }),
                    u.jsxs(ft, {
                      className:
                        "p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-border/30 animate-scale-in",
                      style: { animationDelay: "0.6s" },
                      children: [
                        u.jsx("h4", {
                          className: "font-semibold text-lg mb-3",
                          children: "⚡ Quick Response Guarantee",
                        }),
                        u.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children:
                            "I typically respond to all inquiries within 24 hours. For urgent projects, I'm available via WhatsApp for immediate consultation.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ax = () => {
    const e = new Date().getFullYear(),
      t = [
        { href: "/#about", label: "About" },
        { href: "/#services", label: "Services" },
        { href: "/#portfolio", label: "Portfolio" },
        { href: "/#contact", label: "Contact" },
      ],
      n = [
        { name: "USA", href: "/hire-web-developer/usa" },
        { name: "UK & Europe", href: "/hire-web-developer/europe" },
        { name: "UAE / Dubai", href: "/hire-web-developer/dubai" },
        { name: "India", href: "/hire-web-developer/india" },
      ],
      r = [
        { name: "Biryani Babu", href: "/case-study/biryanibabu-website" },
        { name: "BlackArt Tattoo", href: "/case-study/blackart-tattoo-studio" },
        { name: "Alexink Studio", href: "/case-study/alexink-tattoo-website" },
      ],
      o = [
        {
          icon: FS,
          href: "https://github.com/perpetual-cosmos",
          label: "GitHub",
        },
        {
          icon: KS,
          href: "https://www.linkedin.com/in/tarunsingh241",
          label: "LinkedIn",
        },
        { icon: Gv, href: "mailto:unipick000@gmail.com", label: "Email" },
      ],
      i = (s) => {
        if (s.startsWith("/#")) {
          const a = s.split("#")[1],
            l = document.getElementById(a);
          if (l) {
            l.scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
        window.location.href = s;
      };
    return u.jsx("footer", {
      className: "bg-background border-t border-border",
      children: u.jsxs("div", {
        className: "container mx-auto px-6 py-16",
        children: [
          u.jsxs("div", {
            className: "grid md:grid-cols-4 gap-10",
            children: [
              u.jsxs("div", {
                className: "md:col-span-2",
                children: [
                  u.jsx("div", {
                    className: "flex items-center gap-2 mb-6",
                    children: u.jsx("span", {
                      className: "text-2xl font-bold",
                      children: "Tarun Singh",
                    }),
                  }),
                  u.jsx("p", {
                    className: "text-foreground/70 mb-8 max-w-md",
                    children:
                      "Full Stack Developer & Software Consultant building modern, scalable, and SEO-optimized websites that convert visitors into customers.",
                  }),
                  u.jsx("div", {
                    className: "flex gap-5",
                    children: o.map((s) => {
                      const a = s.icon;
                      return u.jsx(
                        "a",
                        {
                          href: s.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "p-3 bg-card hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300",
                          "aria-label": s.label,
                          children: u.jsx(a, { className: "w-6 h-6" }),
                        },
                        s.label,
                      );
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h4", {
                    className: "text-lg font-semibold mb-5",
                    children: "Quick Links",
                  }),
                  u.jsx("ul", {
                    className: "space-y-3",
                    children: t.map((s) =>
                      u.jsx(
                        "li",
                        {
                          children: u.jsx("button", {
                            onClick: () => i(s.href),
                            className:
                              "text-foreground/60 hover:text-foreground hover:underline transition-all",
                            children: s.label,
                          }),
                        },
                        s.href,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h4", {
                    className: "text-lg font-semibold mb-5",
                    children: "Locations",
                  }),
                  u.jsx("ul", {
                    className: "space-y-3",
                    children: n.map((s) =>
                      u.jsx(
                        "li",
                        {
                          children: u.jsxs(Xn, {
                            to: s.href,
                            className:
                              "text-foreground/60 hover:text-foreground hover:underline transition-all",
                            children: ["Hire in ", s.name],
                          }),
                        },
                        s.href,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h4", {
                    className: "text-lg font-semibold mb-5",
                    children: "Case Studies",
                  }),
                  u.jsx("ul", {
                    className: "space-y-3",
                    children: r.map((s) =>
                      u.jsx(
                        "li",
                        {
                          children: u.jsx(Xn, {
                            to: s.href,
                            className:
                              "text-foreground/60 hover:text-foreground hover:underline transition-all",
                            children: s.name,
                          }),
                        },
                        s.href,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "border-t border-border mt-10 pt-10",
            children: u.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center gap-5",
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-3 text-foreground/50",
                  children: [
                    u.jsxs("span", {
                      children: ["© ", e, " Tarun Singh. Made with"],
                    }),
                    u.jsx("span", {
                      className: "text-foreground/40",
                      children: "using React & TypeScript",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex gap-8 text-sm text-foreground/50",
                  children: [
                    u.jsx("span", { children: "Available for hire" }),
                    u.jsx("span", {
                      className: "hidden md:inline",
                      children: "•",
                    }),
                    u.jsx("span", { children: "Remote-first" }),
                    u.jsx("span", {
                      className: "hidden md:inline",
                      children: "•",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Gj = () => {
    const e = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://theunipick.vercel.app/#person",
          name: "Tarun Singh",
          jobTitle: "Freelance React & Full Stack Developer",
          url: "https://theunipick.vercel.app/",
          sameAs: [
            "https://github.com/perpetual-cosmos",
            "https://linkedin.com/in/tarun-singh",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            addressCountry: "India",
          },
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://theunipick.vercel.app/#business",
          name: "TheUnipick - Freelance Web Development Services",
          url: "https://theunipick.vercel.app/",
          telephone: "+91-XXXXXXXXXX",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "TheUniPick",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "208001",
            addressCountry: "IN",
          },
          hasMap:
            "https://www.google.com/maps/place/TheUniPick+%E2%80%93+Web%2FAI+agents+Development+%26+Software+Solutions/@26.4115302,80.3841878,1023m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399c4190ba3ea23b:0x277a1758c5d3b9c3!8m2!3d26.4115254!4d80.3867627!16s%2Fg%2F11z298tf81",
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
          ],
          image: "https://theunipick.vercel.app/og-image.webp",
        },
        {
          "@type": "Review",
          itemReviewed: { "@type": "LocalBusiness", name: "TheUnipick" },
          author: { "@type": "Person", name: "Aditya Joshi" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "The website exceeded our expectations! Clean, fast, and the interactive animations really wow our customers.",
        },
      ],
    };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(df, {
          title:
            "Hire Top Freelance Web Developer in India | React & Next.js Expert",
          description:
            "Looking for an expert freelance web developer in India? I build fast, SEO-optimized, and modern React websites for startups and businesses. Get a free consultation today!",
          keywords:
            "freelance web developer India, React developer India, hire web developer, custom website development, affordable web design, TheUnipick",
        }),
        u.jsxs("main", {
          className: "relative min-h-screen bg-gradient-background",
          children: [
            u.jsx("script", {
              type: "application/ld+json",
              children: JSON.stringify(e),
            }),
            u.jsx(Xy, {}),
            u.jsx(V0, {}),
            u.jsx("section", { id: "hero", children: u.jsx(ij, {}) }),
            u.jsx("section", {
              id: "projects-showcase",
              children: u.jsx(nx, {}),
            }),
            u.jsx("section", { id: "services", children: u.jsx(rx, {}) }),
            u.jsx("section", { id: "expertise", children: u.jsx(ox, {}) }),
            u.jsx("section", { id: "portfolio", children: u.jsx(Kj, {}) }),
            u.jsx("section", { id: "testimonials", children: u.jsx(ix, {}) }),
            u.jsx("section", { id: "about", children: u.jsx(Qj, {}) }),
            u.jsx("section", { id: "contact", children: u.jsx(sx, {}) }),
            u.jsx("section", {
              className:
                "py-12 bg-card/30 backdrop-blur-sm border-t border-border/50",
              children: u.jsxs("div", {
                className: "max-w-6xl mx-auto px-6 text-center",
                children: [
                  u.jsx("h3", {
                    className: "text-2xl font-semibold mb-4 text-foreground",
                    children: "Serving Clients Across India & Worldwide",
                  }),
                  u.jsxs("p", {
                    className:
                      "text-muted-foreground leading-relaxed max-w-4xl mx-auto",
                    children: [
                      "Providing expert web development services remotely to clients in",
                      u.jsx("strong", {
                        children:
                          " Delhi NCR, Mumbai, Bangalore, Kanpur, Hyderabad, Pune, ",
                      }),
                      "and throughout India. Also working with global clients across the",
                      u.jsx("strong", {
                        children: " USA, UK, Canada, and Australia",
                      }),
                      ". Distance is no barrier to building high-quality, high-converting digital experiences. Get in touch for a seamless remote collaboration.",
                    ],
                  }),
                ],
              }),
            }),
            u.jsx(ax, {}),
          ],
        }),
      ],
    });
  },
  eo = "/assets/testimonial-Cp3MHniS.gif",
  qj = "/assets/TattooWebsite2-D0LnzfOo.webp",
  Yj = "/assets/TattooWebsite2a-zznwtKwN.webp",
  Xj = "/assets/TattooWebsite2b-sUHHJZOt.webp",
  Jj = "/assets/TattooWebsite2c-BeHlvRw3.webp",
  Zj = "/assets/TattooWebsite-BCwhkFr1.webp",
  zm = "/assets/TattooWebsite1-DWaV4DZc.webp",
  eP = "/assets/TatooWebsitec-BOa8FhS7.webp",
  tP = "/assets/CozyCafe-CBA3aU9L.webp",
  nP = "/assets/Cozycafea-CWs9pQjz.webp",
  rP = "/assets/CozyCafeb-BY2ZsLmu.webp",
  oP = "/assets/CozyCafec-_5AIYppe.webp",
  iP = "/assets/innovation-D_EP4z-1.webp",
  sP = "/assets/innovationa-CHi1-TrY.webp",
  aP = "/assets/innovationb-CbxODil5.webp",
  lP = "/assets/innovationc-B0Jj_VJh.webp",
  $m = "/assets/blackarttattoo-CLnulL0F.webp",
  cP = "/assets/blackarttattoo2-ClIUgKkV.webp",
  uP = "/assets/blackarttattoo3-CnHNr91H.webp",
  dP = "/assets/biriyanibabu-CggFjvPm.webp",
  fP = "/assets/biriyanibabufooter-CNp1aHZH.webp",
  pP = "/assets/biriyanibabumenu-CyXOLQob.webp",
  mP = "/assets/biryanibabufoodmenu-DdVwKquE.webp",
  hP = {
    "biryanibabu-website": {
      id: "biryanibabu-website",
      title: "Biryani Babu",
      client: "Biryani Babu",
      industry: "Food & Restaurant",
      tagline: "Kolkata's 1st Biryani QSR - Local SEO Dominance",
      heroImage: dP,
      stats: [
        { label: "Search Ranking", value: "#1 Local" },
        { label: "Online Orders", value: "+300%" },
        { label: "Mobile Conversion", value: "+180%" },
      ],
      challenge: {
        description:
          "Biryani Babu needed to transform their website into the #1 ranked online destination for biryani and kebab lovers in Kolkata, attracting high-intent local customers and converting them into foot traffic and online orders.",
        painPoints: [
          "Lacked static, powerful titles and indexable menu content",
          "High-quality cinematic images were slowing down mobile load times",
          "Missing critical Restaurant and Menu JSON-LD Schema markup",
          "No natural integration of local 'near me' keywords",
        ],
      },
      approach: [
        {
          phase: "On-Page SEO",
          description:
            "Overhauled titles, meta descriptions, and heading tags to target specific, high-value local keywords in Rajarhat and New Town.",
          duration: "1 week",
        },
        {
          phase: "Content Integration",
          description:
            "Integrated indexable menu content onto the main page with a 'Signature Dishes' section and wove 'near me' keywords into the copy.",
          duration: "2 weeks",
        },
        {
          phase: "Schema Markup",
          description:
            "Implemented advanced Restaurant, Menu, and Review Snippet structured data to enrich search results.",
          duration: "1 week",
        },
        {
          phase: "Performance tuning",
          description:
            "Converted high-quality images to WebP format, optimized scripts, and ensured seamless mobile usability.",
          duration: "1 week",
        },
      ],
      outcomes: [
        "Dominated local search results for 'Best Biryani in Kolkata'",
        "300% increase in online orders and foot traffic",
        "Enhanced social proof through prominent, schema-marked reviews",
        "Lightning-fast mobile load times and seamless booking experience",
      ],
      technologies: [
        "React",
        "Vite",
        "Styled-Components",
        "TypeScript",
        "Advanced SEO Schema",
      ],
      testimonial: {
        quote:
          "The SEO overhaul changed everything. We're now the top result for biryani in Rajarhat, and our online orders have never been higher!",
        author: "Rahul Verma",
        role: "Verified Diner",
        image: eo,
      },
      gallery: [pP, mP, fP],
    },
    "blackart-tattoo-studio": {
      id: "blackart-tattoo-studio",
      title: "BlackArt Tattoo Studio",
      client: "Artist Nirmal",
      industry: "Retail & Services",
      tagline: "Local SEO dominance and high-converting studio presence",
      heroImage: $m,
      stats: [
        { label: "Search Visibility", value: "Top 3" },
        { label: "Page Speed", value: "98/100" },
        { label: "Client Inquiries", value: "+310%" },
      ],
      challenge: {
        description:
          "BlackArt Tattoos needed a digital presence that matched their international hygiene standards and artistic excellence. The goal was to dominate local search in Udaipur and convert tourists into clients.",
        painPoints: [
          "Need for premium, trust-building visual identity",
          "High competition in local tattoo service search",
          "Requirement to showcase hygiene and safety protocols",
          "Mobile-first audience needing quick booking access",
        ],
      },
      approach: [
        {
          phase: "Identity",
          description:
            "Defined a clean, sophisticated brand voice emphasizing safety and custom artistry.",
          duration: "1 week",
        },
        {
          phase: "UX Design",
          description:
            "Created artist-focused layouts with high-impact visuals and streamlined CTAs.",
          duration: "2 weeks",
        },
        {
          phase: "SEO & CRO",
          description:
            "Implemented advanced LocalBusiness schema and optimized content for high-intent keywords.",
          duration: "2 weeks",
        },
        {
          phase: "Launch",
          description:
            "Deployed on high-performance infrastructure with real-time analytics.",
          duration: "1 week",
        },
      ],
      outcomes: [
        "Secured #1 ranking for 'Tattoo Studio in Udaipur' keywords",
        "310% increase in monthly appointment inquiries",
        "Perfect Core Web Vitals score for mobile experience",
        "Enhanced social proof through integrated testimonial system",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "Local SEO",
      ],
      testimonial: {
        quote:
          "My digital presence now perfectly reflects the quality of work we do at the studio. The increase in international clients has been phenomenal.",
        author: "Artist Nirmal",
        role: "Founder, BlackArt Tattoos",
        image: eo,
      },
      gallery: [$m, cP, uP],
    },
    "alexink-tattoo-website": {
      id: "alexink-tattoo-website",
      title: "Alexink Tattoo Website",
      client: "Artishtic Expressions",
      industry: "Arts & Lifestyle",
      tagline: "A bold digital presence that boosted bookings by 240%",
      heroImage: Zj,
      stats: [
        { label: "Conversion Rate", value: "+240%" },
        { label: "Page Load Time", value: "1.2s" },
        { label: "Mobile Traffic", value: "+180%" },
      ],
      challenge: {
        description:
          "Alexink, a boutique tattoo studio, had a dated website that didn’t reflect the artistry or professionalism of their brand. Slow load times and poor mobile usability meant most visitors left before booking a session.",
        painPoints: [
          "Outdated design that didn’t represent the studio’s creative quality",
          "8+ second load times leading to high bounce rates",
          "No online booking or portfolio filtering",
          "Inconsistent experience across devices",
        ],
      },
      approach: [
        {
          phase: "Discovery",
          description:
            "Interviewed artists and clients to understand the booking journey and visual expectations.",
          duration: "2 weeks",
        },
        {
          phase: "Design",
          description:
            "Developed a modern, tattoo-inspired aesthetic with a focus on showcasing artwork and streamlining bookings.",
          duration: "3 weeks",
        },
        {
          phase: "Development",
          description:
            "Built a fully responsive React website with integrated booking and gallery systems, optimized for performance.",
          duration: "8 weeks",
        },
        {
          phase: "Testing & Launch",
          description:
            "Conducted usability testing, optimized SEO, and launched with a marketing campaign targeting local audiences.",
          duration: "2 weeks",
        },
      ],
      outcomes: [
        "Page load time reduced from 8s to 1.2s",
        "Online bookings increased by 240%",
        "Mobile bounce rate dropped by 70%",
        "Customers spent 3x longer exploring artist portfolios",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "Node.js",
        "PostgreSQL",
      ],
      testimonial: {
        quote:
          "The new site captures who we are perfectly. Clients now find us easily, and bookings have skyrocketed. The whole process was smooth and professional.",
        author: "Sarah Mitchell",
        role: "Founder, Alexink Tattoo Studio",
        image: eo,
      },
      gallery: [zm, zm, eP],
    },
    "inkmaster-tattoo-website": {
      id: "inkmaster-tattoo-website",
      title: "Inkmaster Tattoo Website",
      client: "Inkmaster Tattoo",
      industry: "Art & Lifestyle",
      tagline: "Redesigned UX that turned visitors into loyal clients",
      heroImage: qj,
      stats: [
        { label: "Website Performance", value: "96%" },
        { label: "Average Session Time", value: "+180%" },
        { label: "Booking increased", value: "4X" },
      ],
      challenge: {
        description:
          "Inkmaster Tattoo had a strong reputation offline but lacked an online identity. They do not have any site which reflect their artistry, and failed to convert visitors into bookings.",
        painPoints: [
          "Strict demand for a visually rich, artist-focused design",
          "No reference were provided by the client ",
          "Low budget and tight timeline",
          "SEO visibility",
        ],
      },
      approach: [
        {
          phase: "User Research",
          description:
            "Analyzed competitor sites, gathered client feedback, and reviewed analytics to identify key pain points.",
          duration: "2 Days",
        },
        {
          phase: "UX Design",
          description:
            "Created a clean, immersive design that highlighted each artist’s work with intuitive navigation.",
          duration: "2 days",
        },
        {
          phase: "Development",
          description:
            "Built a fast, mobile-optimized site with a real-time booking calendar and easy content management tools.",
          duration: "1 weeks",
        },
        {
          phase: "Testing & Optimization",
          description:
            "Launched a pilot version, monitored engagement metrics, and refined based on feedback.",
          duration: "2 days",
        },
      ],
      outcomes: [
        "Good looking portfolio website within 2 weeks",
        "Bookings increased fivefold within three months",
        "Customer satisfaction rated 4.8/5",
        "Booking increase 4times",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Vercel",
        "MongoDB",
        "Cloudinary",
      ],
      testimonial: {
        quote:
          "We finally have a site that represents our art. Clients now comment on how easy it is to browse and book, it’s been a complete transformation.",
        author: "Aditya Ranjan",
        role: "Owner, Inkmaster Tattoo",
        image: eo,
      },
      gallery: [Yj, Xj, Jj],
    },
    "cozycafe-branding-website": {
      id: "cozycafe-branding-website",
      title: "CozyCafe Branding & Website",
      client: "CozyCafe",
      industry: "Food & Restaurant",
      tagline:
        "From local cafe to community favorite through authentic branding",
      heroImage: tP,
      stats: [
        { label: "Foot Traffic", value: "+220%" },
        { label: "Online Orders", value: "+340%" },
        { label: "Social Engagement", value: "+180%" },
      ],
      challenge: {
        description:
          "CozyCafe, a small family-owned coffee shop, struggled to attract new customers despite great products. Their old branding felt inconsistent and their website wasn’t optimized for local search or online ordering.",
        painPoints: [
          "Outdated logo and color palette",
          "Unclear menu presentation",
          "No online ordering or delivery integration",
          "Low visibility in Google search results",
        ],
      },
      approach: [
        {
          phase: "Brand Discovery",
          description:
            "Worked closely with the owners to define their identity and visual direction.",
          duration: "2 weeks",
        },
        {
          phase: "Design & Branding",
          description:
            "Developed a warm, inviting brand identity and redesigned all digital and print assets.",
          duration: "3 weeks",
        },
        {
          phase: "Website Development",
          description:
            "Built a user-friendly website with integrated online ordering, responsive design, and SEO optimization.",
          duration: "7 weeks",
        },
        {
          phase: "Launch & Marketing",
          description:
            "Introduced the new brand through social campaigns and local SEO improvements.",
          duration: "3 weeks",
        },
      ],
      outcomes: [
        "Local search visibility tripled within two months",
        "Online orders increased by 340%",
        "Customer loyalty program sign-ups up 200%",
        "Monthly revenue increased by 60%",
      ],
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "Stripe",
        "Google Maps API",
      ],
      testimonial: {
        quote:
          "Our cafe finally feels like us — warm, welcoming, and professional. Customers tell us they found us online, which never happened before. We couldn’t be happier.",
        author: "Rahul Verma",
        role: "Owner, Cafe",
        image: eo,
      },
      gallery: [nP, rP, oP],
    },
    "SaaS-Innovation-Platform": {
      id: "SaaS-Innovation-Platform",
      title: "SaaS Innovation Platform",
      client: "TechNova Systems",
      industry: "Technology & Software",
      tagline: "A scalable SaaS platform built for next-generation startups",
      heroImage: iP,
      stats: [
        { label: "Deployment Speed", value: "4x Faster" },
        { label: "Uptime", value: "99.9%" },
        { label: "Customer Growth", value: "+320%" },
      ],
      challenge: {
        description:
          "TechNova Systems wanted to modernize their legacy SaaS infrastructure to better support startups launching data-driven products. Their existing system lacked scalability, intuitive UX, and analytics clarity.",
        painPoints: [
          "Complex onboarding process",
          "Limited scalability under heavy load",
          "Fragmented data visualization tools",
          "High customer churn rate",
        ],
      },
      approach: [
        {
          phase: "Research & Architecture",
          description:
            "Evaluated existing infrastructure, mapped performance bottlenecks, and designed a scalable microservice architecture.",
          duration: "4 weeks",
        },
        {
          phase: "UI/UX Redesign",
          description:
            "Simplified workflows and introduced modular dashboards for better data insights.",
          duration: "5 weeks",
        },
        {
          phase: "Backend Development",
          description:
            "Implemented Node.js and Python-based microservices with Redis caching and WebSocket for real-time updates.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Conducted beta rollout, integrated feedback loops, and set up automated monitoring and deployment pipelines.",
          duration: "3 weeks",
        },
      ],
      outcomes: [
        "Onboarding time reduced from 14 days to 3 days",
        "Platform uptime improved to 99.9%",
        "Customer growth increased by 320%",
        "Support requests decreased by 55%",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Redis",
        "Python",
        "AWS",
      ],
      testimonial: {
        quote:
          "The upgrade completely changed how our platform performs. Our clients now experience faster, smoother service, and we’ve been able to scale without downtime.",
        author: "Amit Patel",
        role: "CTO, TechNova Systems",
        image: eo,
      },
      gallery: [sP, aP, lP],
    },
  },
  gP = () => {
    const { id: e } = Qy(),
      t = e ? hP[e] : null;
    return t
      ? u.jsxs(u.Fragment, {
          children: [
            u.jsx(df, {
              title: `${t.title} - Case Study | TheUnipick`,
              description: `${t.tagline} - ${t.challenge.description.substring(0, 150)}...`,
              keywords: `${t.industry}, ${t.technologies.join(", ")}, case study, portfolio, ${t.title}`,
              image: t.heroImage,
            }),
            u.jsx("script", {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: t.title,
                description: t.tagline,
                image: t.heroImage,
                author: { "@type": "Person", name: "Tarun Singh" },
                about: { "@type": "Thing", name: t.industry },
              }),
            }),
            u.jsxs("div", {
              className: "min-h-screen bg-background",
              children: [
                u.jsx("div", {
                  className: "fixed top-6 left-6 z-50",
                  children: u.jsx(Xn, {
                    to: "/",
                    children: u.jsxs(He, {
                      variant: "outline",
                      className: "gap-2 backdrop-blur-sm bg-background/80",
                      children: [u.jsx(Kv, { className: "w-4 h-4" }), "Back"],
                    }),
                  }),
                }),
                u.jsxs("section", {
                  className:
                    "relative min-h-[80vh] flex items-center justify-center overflow-hidden",
                  children: [
                    u.jsxs("div", {
                      className: "absolute inset-0",
                      children: [
                        u.jsx("img", {
                          src: t.heroImage,
                          alt: t.title,
                          className: "w-full h-full object-cover opacity-30",
                        }),
                        u.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "relative z-10 max-w-5xl mx-auto px-6 text-center py-24",
                      children: [
                        u.jsx("div", {
                          className:
                            "inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-medium mb-6 animate-fade-in",
                          children: t.industry,
                        }),
                        u.jsx("h1", {
                          className:
                            "font-heading text-5xl md:text-7xl font-bold mb-6 animate-slide-up",
                          children: t.title,
                        }),
                        u.jsx("p", {
                          className:
                            "text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in",
                          style: { animationDelay: "0.2s" },
                          children: t.tagline,
                        }),
                        u.jsx("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",
                          children: t.stats.map((n, r) =>
                            u.jsxs(
                              ft,
                              {
                                className:
                                  "p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in",
                                style: { animationDelay: `${0.3 + r * 0.1}s` },
                                children: [
                                  u.jsx("div", {
                                    className:
                                      "text-4xl font-bold text-gradient mb-2",
                                    children: n.value,
                                  }),
                                  u.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: n.label,
                                  }),
                                ],
                              },
                              r,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("section", {
                  className: "py-24 px-6 md:px-12",
                  children: u.jsx("div", {
                    className: "max-w-6xl mx-auto",
                    children: u.jsxs("div", {
                      className: "grid md:grid-cols-2 gap-12 items-center",
                      children: [
                        u.jsxs("div", {
                          className: "animate-slide-up",
                          children: [
                            u.jsxs("h2", {
                              className: "font-heading text-4xl font-bold mb-6",
                              children: [
                                "The ",
                                u.jsx("span", {
                                  className: "text-gradient",
                                  children: "Challenge",
                                }),
                              ],
                            }),
                            u.jsx("p", {
                              className:
                                "text-lg text-muted-foreground mb-8 leading-relaxed",
                              children: t.challenge.description,
                            }),
                            u.jsx("div", {
                              className: "space-y-4",
                              children: t.challenge.painPoints.map((n, r) =>
                                u.jsxs(
                                  "div",
                                  {
                                    className: "flex items-start gap-3",
                                    children: [
                                      u.jsx(cE, {
                                        className:
                                          "w-5 h-5 text-destructive flex-shrink-0 mt-1",
                                      }),
                                      u.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: n,
                                      }),
                                    ],
                                  },
                                  r,
                                ),
                              ),
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "relative animate-fade-in",
                          style: { animationDelay: "0.2s" },
                          children: u.jsx("img", {
                            src: t.heroImage,
                            alt: "Challenge visualization",
                            className:
                              "rounded-2xl shadow-2xl border border-border/50",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                u.jsx("section", {
                  className:
                    "py-24 px-6 md:px-12 bg-gradient-to-b from-background to-background/50",
                  children: u.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                      u.jsxs("h2", {
                        className:
                          "font-heading text-4xl font-bold text-center mb-16",
                        children: [
                          "Our ",
                          u.jsx("span", {
                            className: "text-gradient",
                            children: "Approach",
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: t.approach.map((n, r) =>
                          u.jsxs(
                            ft,
                            {
                              className:
                                "p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:glow-primary transition-all duration-300 animate-scale-in",
                              style: { animationDelay: `${r * 0.1}s` },
                              children: [
                                u.jsxs("div", {
                                  className: "flex items-center gap-3 mb-4",
                                  children: [
                                    u.jsx("div", {
                                      className:
                                        "w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold",
                                      children: r + 1,
                                    }),
                                    u.jsx("h3", {
                                      className: "font-bold text-lg",
                                      children: n.phase,
                                    }),
                                  ],
                                }),
                                u.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground mb-4",
                                  children: n.description,
                                }),
                                u.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 text-xs text-accent",
                                  children: [
                                    u.jsx(SS, { className: "w-4 h-4" }),
                                    n.duration,
                                  ],
                                }),
                              ],
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                u.jsx("section", {
                  className: "py-24 px-6 md:px-12",
                  children: u.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                      u.jsxs("h2", {
                        className:
                          "font-heading text-4xl font-bold text-center mb-16",
                        children: [
                          "The ",
                          u.jsx("span", {
                            className: "text-gradient",
                            children: "Results",
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "grid md:grid-cols-2 gap-8 mb-16",
                        children: t.outcomes.map((n, r) =>
                          u.jsxs(
                            ft,
                            {
                              className:
                                "p-6 bg-card/50 backdrop-blur-sm border-border/50 flex items-start gap-4 animate-slide-up",
                              style: { animationDelay: `${r * 0.1}s` },
                              children: [
                                u.jsx(jS, {
                                  className:
                                    "w-6 h-6 text-accent flex-shrink-0 mt-1",
                                }),
                                u.jsx("p", {
                                  className: "text-lg",
                                  children: n,
                                }),
                              ],
                            },
                            r,
                          ),
                        ),
                      }),
                      u.jsx("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: t.gallery.map((n, r) =>
                          u.jsx(
                            "div",
                            {
                              className:
                                "relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border/50 animate-scale-in",
                              style: { animationDelay: `${r * 0.1}s` },
                              children: u.jsx("img", {
                                src: n,
                                alt: `${t.title} screenshot ${r + 1}`,
                                className:
                                  "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
                              }),
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                u.jsx("section", {
                  className:
                    "py-24 px-6 md:px-12 bg-gradient-to-b from-background/50 to-background",
                  children: u.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: u.jsx(ft, {
                      className:
                        "p-12 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in",
                      children: u.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row gap-8 items-center",
                        children: [
                          u.jsx("img", {
                            src: t.testimonial.image,
                            alt: t.testimonial.author,
                            className:
                              "w-24 h-24 rounded-full object-cover border-4 border-accent/30",
                          }),
                          u.jsxs("div", {
                            className: "flex-1 text-center md:text-left",
                            children: [
                              u.jsxs("p", {
                                className:
                                  "text-xl md:text-2xl font-medium mb-6 leading-relaxed",
                                children: ['"', t.testimonial.quote, '"'],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("div", {
                                    className: "font-bold text-lg",
                                    children: t.testimonial.author,
                                  }),
                                  u.jsx("div", {
                                    className: "text-muted-foreground",
                                    children: t.testimonial.role,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                u.jsx("section", {
                  className: "py-24 px-6 md:px-12",
                  children: u.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                      u.jsxs("h2", {
                        className:
                          "font-heading text-4xl font-bold text-center mb-16",
                        children: [
                          u.jsx("span", {
                            className: "text-gradient",
                            children: "Technologies",
                          }),
                          " & Tools",
                        ],
                      }),
                      u.jsx("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: t.technologies.map((n, r) =>
                          u.jsx(
                            ft,
                            {
                              className:
                                "px-6 py-3 bg-card/50 backdrop-blur-sm border-border/50 hover:glow-primary transition-all duration-300 animate-scale-in",
                              style: { animationDelay: `${r * 0.05}s` },
                              children: u.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  u.jsx($a, {
                                    className: "w-4 h-4 text-accent",
                                  }),
                                  u.jsx("span", {
                                    className: "font-medium",
                                    children: n,
                                  }),
                                ],
                              }),
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                u.jsx("section", {
                  className:
                    "py-24 px-6 md:px-12 bg-gradient-to-b from-background to-background/50",
                  children: u.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                      u.jsxs("h2", {
                        className: "font-heading text-4xl font-bold mb-8",
                        children: [
                          "The ",
                          u.jsx("span", {
                            className: "text-gradient",
                            children: "Transformation",
                          }),
                        ],
                      }),
                      u.jsxs("p", {
                        className:
                          "text-xl text-muted-foreground leading-relaxed mb-12",
                        children: [
                          t.client,
                          " went from struggling with ",
                          t.challenge.painPoints[0].toLowerCase(),
                          " to becoming a leader in their space. This project showcases what's possible when you combine strategic thinking, exceptional design, and cutting-edge technology.",
                        ],
                      }),
                    ],
                  }),
                }),
                u.jsx("section", {
                  className: "py-24 px-6 md:px-12",
                  children: u.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                      u.jsxs("h2", {
                        className:
                          "font-heading text-4xl md:text-5xl font-bold mb-8 animate-slide-up",
                        children: [
                          "Let's Start Something ",
                          u.jsx("span", {
                            className: "text-gradient",
                            children: "Amazing",
                          }),
                          " Together",
                        ],
                      }),
                      u.jsxs("p", {
                        className:
                          "text-xl text-muted-foreground mb-12 animate-fade-in",
                        style: { animationDelay: "0.2s" },
                        children: [
                          "Ready to transform your business like we did for ",
                          t.client,
                          "?",
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row gap-4 justify-center animate-scale-in",
                        style: { animationDelay: "0.3s" },
                        children: [
                          u.jsx(Xn, {
                            to: "/#contact",
                            children: u.jsx(He, {
                              size: "lg",
                              className:
                                "text-lg px-8 py-6 hover:scale-105 transition-transform",
                              children: "Discuss Your Project",
                            }),
                          }),
                          u.jsx(Xn, {
                            to: "/",
                            children: u.jsxs(He, {
                              variant: "outline",
                              size: "lg",
                              className: "text-lg px-8 py-6 gap-2",
                              children: [
                                "View All Case Studies",
                                u.jsx(za, { className: "w-5 h-5" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      : u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsxs("div", {
            className: "text-center",
            children: [
              u.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Case Study Not Found",
              }),
              u.jsx(Xn, {
                to: "/",
                children: u.jsx(He, { children: "Back to Home" }),
              }),
            ],
          }),
        });
  },
  vP = () => {
    const e = Wr();
    return (
      y.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      u.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: u.jsxs("div", {
          className: "text-center",
          children: [
            u.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            u.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            u.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  yP = ["europe", "uae", "dubai", "india", "usa"],
  xP = {
    europe: "Europe",
    uae: "the UAE",
    dubai: "Dubai",
    india: "India",
    usa: "the USA",
  };
function wP() {
  const { location: e } = Qy();
  if (!e || !yP.includes(e.toLowerCase()))
    return u.jsx(yN, { to: "/404", replace: !0 });
  const t = xP[e.toLowerCase()];
  return u.jsxs("div", {
    className:
      "bg-background min-h-screen text-foreground relative selection:bg-primary/30 selection:text-foreground",
    children: [
      u.jsx(Xy, {}),
      u.jsx(df, {
        title: `Hire Top Freelance Web Developer in ${t} | TheUnipick`,
        description: `Looking for an expert freelance web developer in ${t}? I specialize in modern, SEO-optimized React & Next.js websites tailored for your business.`,
        keywords: `freelance web developer ${t}, React developer ${t}, hire web developer ${t}, website development ${t}, custom web development ${t}`,
      }),
      u.jsx(V0, {}),
      u.jsxs("main", {
        children: [
          u.jsxs("div", {
            className:
              "pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10 mt-16",
            children: [
              u.jsxs("div", {
                className:
                  "inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide",
                children: ["Available for exciting projects in ", t],
              }),
              u.jsxs("h1", {
                className:
                  "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6",
                children: [
                  "Hire the Best Freelance",
                  u.jsx("br", { className: "hidden sm:block" }),
                  " Web Developer in ",
                  u.jsx("span", { className: "text-primary", children: t }),
                ],
              }),
              u.jsxs("p", {
                className:
                  "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10",
                children: [
                  "I help businesses in ",
                  t,
                  " build fast, modern, and SEO-friendly websites that convert visitors into customers. Let's elevate your digital presence.",
                ],
              }),
            ],
          }),
          u.jsx(ox, {}),
          u.jsx(nx, {}),
          u.jsx(ix, {}),
          u.jsx(rx, {}),
          u.jsx(sx, {}),
        ],
      }),
      u.jsx(ax, {}),
    ],
  });
}
var Bm = {},
  bP = "@vercel/speed-insights",
  SP = "1.2.0",
  EP = () => {
    window.si ||
      (window.si = function (...t) {
        (window.siq = window.siq || []).push(t);
      });
  };
function CP() {
  return typeof window < "u";
}
function kP() {
  try {
    const e = "production";
  } catch {}
  return "production";
}
function lx() {
  return kP() === "development";
}
function NP(e) {
  return e.scriptSrc
    ? e.scriptSrc
    : lx()
      ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
      : e.dsn
        ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
        : e.basePath
          ? `${e.basePath}/speed-insights/script.js`
          : "/_vercel/speed-insights/script.js";
}
function TP(e = {}) {
  var t;
  if (!CP() || e.route === null) return null;
  EP();
  const n = NP(e);
  if (document.head.querySelector(`script[src*="${n}"]`)) return null;
  e.beforeSend &&
    ((t = window.si) == null || t.call(window, "beforeSend", e.beforeSend));
  const r = document.createElement("script");
  return (
    (r.src = n),
    (r.defer = !0),
    (r.dataset.sdkn = bP + (e.framework ? `/${e.framework}` : "")),
    (r.dataset.sdkv = SP),
    e.sampleRate && (r.dataset.sampleRate = e.sampleRate.toString()),
    e.route && (r.dataset.route = e.route),
    e.endpoint
      ? (r.dataset.endpoint = e.endpoint)
      : e.basePath &&
        (r.dataset.endpoint = `${e.basePath}/speed-insights/vitals`),
    e.dsn && (r.dataset.dsn = e.dsn),
    lx() && e.debug === !1 && (r.dataset.debug = "false"),
    (r.onerror = () => {
      console.log(
        `[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`,
      );
    }),
    document.head.appendChild(r),
    {
      setRoute: (o) => {
        r.dataset.route = o ?? void 0;
      },
    }
  );
}
function jP() {
  if (!(typeof process > "u" || typeof Bm > "u"))
    return Bm.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function PP(e) {
  y.useEffect(() => {
    var n;
    e.beforeSend &&
      ((n = window.si) == null || n.call(window, "beforeSend", e.beforeSend));
  }, [e.beforeSend]);
  const t = y.useRef(null);
  return (
    y.useEffect(() => {
      if (t.current) e.route && t.current(e.route);
      else {
        const n = TP({
          framework: e.framework ?? "react",
          basePath: e.basePath ?? jP(),
          ...e,
        });
        n && (t.current = n.setRoute);
      }
    }, [e.route]),
    null
  );
}
const RP = new j2(),
  AP = () =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(R2, {
          client: RP,
          children: u.jsxs(o2, {
            children: [
              u.jsx(JE, {}),
              u.jsx(RC, {}),
              u.jsx(TN, {
                children: u.jsxs(wN, {
                  children: [
                    u.jsx(gi, { path: "/", element: u.jsx(Gj, {}) }),
                    u.jsx(gi, {
                      path: "/case-study/:id",
                      element: u.jsx(gP, {}),
                    }),
                    u.jsx(gi, {
                      path: "/hire-web-developer/:location",
                      element: u.jsx(wP, {}),
                    }),
                    u.jsx(gi, { path: "*", element: u.jsx(vP, {}) }),
                  ],
                }),
              }),
            ],
          }),
        }),
        u.jsx(PP, {}),
      ],
    });
var OP = "@vercel/analytics",
  _P = "1.6.1",
  IP = () => {
    window.va ||
      (window.va = function (...t) {
        (window.vaq = window.vaq || []).push(t);
      });
  };
function cx() {
  return typeof window < "u";
}
function ux() {
  try {
    const e = "production";
  } catch {}
  return "production";
}
function LP(e = "auto") {
  if (e === "auto") {
    window.vam = ux();
    return;
  }
  window.vam = e;
}
function MP() {
  return (cx() ? window.vam : ux()) || "production";
}
function Ku() {
  return MP() === "development";
}
function DP(e) {
  return e.scriptSrc
    ? e.scriptSrc
    : Ku()
      ? "https://va.vercel-scripts.com/v1/script.debug.js"
      : e.basePath
        ? `${e.basePath}/insights/script.js`
        : "/_vercel/insights/script.js";
}
function FP(e = { debug: !0 }) {
  var t;
  if (!cx()) return;
  (LP(e.mode),
    IP(),
    e.beforeSend &&
      ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend)));
  const n = DP(e);
  if (document.head.querySelector(`script[src*="${n}"]`)) return;
  const r = document.createElement("script");
  ((r.src = n),
    (r.defer = !0),
    (r.dataset.sdkn = OP + (e.framework ? `/${e.framework}` : "")),
    (r.dataset.sdkv = _P),
    e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
    e.endpoint
      ? (r.dataset.endpoint = e.endpoint)
      : e.basePath && (r.dataset.endpoint = `${e.basePath}/insights`),
    e.dsn && (r.dataset.dsn = e.dsn),
    (r.onerror = () => {
      const o = Ku()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${n}. ${o}`,
      );
    }),
    Ku() && e.debug === !1 && (r.dataset.debug = "false"),
    document.head.appendChild(r));
}
FP();
cv(document.getElementById("root")).render(
  u.jsx(gv, { children: u.jsx(AP, {}) }),
);
