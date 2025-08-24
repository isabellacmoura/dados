typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let kn = !1, Pa = !1;
function Ca() {
  kn = !0;
}
Ca();
const $a = 1, Oa = 2, za = 16, Da = 2, La = 4, qa = 8, Fa = 1, Ua = 2, et = Symbol(), Ha = "http://www.w3.org/1999/xhtml", ao = !1;
var qr = Array.isArray, Va = Array.prototype.indexOf, so = Array.from, ur = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, uo = Object.getOwnPropertyDescriptors, Ba = Object.prototype, Xa = Array.prototype, Fr = Object.getPrototypeOf;
function Ya(t) {
  return t();
}
function lr(t) {
  for (var n = 0; n < t.length; n++)
    t[n]();
}
function Wa() {
  var t, n, e = new Promise((r, i) => {
    t = r, n = i;
  });
  return { promise: e, resolve: t, reject: n };
}
const dt = 2, Ur = 4, Ve = 8, Tn = 16, Ht = 32, In = 64, lo = 128, Et = 256, we = 512, rt = 1024, St = 2048, Vt = 4096, At = 8192, ln = 16384, Hr = 32768, Vr = 65536, ci = 1 << 17, Ga = 1 << 18, Br = 1 << 19, fo = 1 << 20, fr = 1 << 21, Xr = 1 << 22, tn = 1 << 23, nn = Symbol("$state"), Ka = Symbol("legacy props"), Yr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Za() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ja(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Qa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ja(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ts() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ns(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function es() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rs(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function is() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function os() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function as() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ss = !1;
function co(t) {
  return t === this.v;
}
function us(t, n) {
  return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
function ho(t) {
  return !us(t, this.v);
}
let Q = null;
function xe(t) {
  Q = t;
}
function po(t, n = !1, e) {
  Q = {
    p: Q,
    c: null,
    e: null,
    s: t,
    x: null,
    l: kn && !n ? { s: null, u: null, $: [] } : null
  };
}
function vo(t) {
  var n = (
    /** @type {ComponentContext} */
    Q
  ), e = n.e;
  if (e !== null) {
    n.e = null;
    for (var r of e)
      Mo(r);
  }
  return Q = n.p, /** @type {T} */
  {};
}
function Rn() {
  return !kn || Q !== null && Q.l === null;
}
const ls = /* @__PURE__ */ new WeakMap();
function fs(t) {
  var n = U;
  if (n === null)
    return V.f |= tn, t;
  if ((n.f & Hr) === 0) {
    if ((n.f & lo) === 0)
      throw !n.parent && t instanceof Error && _o(t), t;
    n.b.error(t);
  } else
    Wr(t, n);
}
function Wr(t, n) {
  for (; n !== null; ) {
    if ((n.f & lo) !== 0)
      try {
        n.b.error(t);
        return;
      } catch (e) {
        t = e;
      }
    n = n.parent;
  }
  throw t instanceof Error && _o(t), t;
}
function _o(t) {
  const n = ls.get(t);
  n && (ur(t, "message", {
    value: n.message
  }), ur(t, "stack", {
    value: n.stack
  }));
}
let Ee = [];
function cs() {
  var t = Ee;
  Ee = [], lr(t);
}
function go(t) {
  Ee.length === 0 && queueMicrotask(cs), Ee.push(t);
}
function hs() {
  for (var t = (
    /** @type {Effect} */
    U.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && Za(), t;
}
// @__NO_SIDE_EFFECTS__
function Gr(t) {
  var n = dt | St, e = V !== null && (V.f & dt) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return U === null || e !== null && (e.f & Et) !== 0 ? n |= Et : U.f |= Br, {
    ctx: Q,
    deps: null,
    effects: null,
    equals: co,
    f: n,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      et
    ),
    wv: 0,
    parent: e ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ps(t, n) {
  let e = (
    /** @type {Effect | null} */
    U
  );
  e === null && Qa();
  var r = (
    /** @type {Boundary} */
    e.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Bn(
    /** @type {V} */
    et
  ), a = null, s = !V;
  return Rs(() => {
    try {
      var l = t();
    } catch (p) {
      l = Promise.reject(p);
    }
    var f = () => l;
    i = a?.then(f, f) ?? Promise.resolve(l), a = i;
    var u = (
      /** @type {Batch} */
      K
    ), c = r.pending;
    s && (r.update_pending_count(1), c || u.increment());
    const h = (p, d = void 0) => {
      a = null, c || u.activate(), d ? d !== Yr && (o.f |= tn, be(o, d)) : ((o.f & tn) !== 0 && (o.f ^= tn), be(o, p)), s && (r.update_pending_count(-1), c || u.decrement()), wo();
    };
    if (i.then(h, (p) => h(null, p || "unknown")), u)
      return () => {
        queueMicrotask(() => u.neuter());
      };
  }), new Promise((l) => {
    function f(u) {
      function c() {
        u === i ? l(o) : f(i);
      }
      u.then(c, c);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Kr(t) {
  const n = /* @__PURE__ */ Gr(t);
  return n.equals = ho, n;
}
function mo(t) {
  var n = t.effects;
  if (n !== null) {
    t.effects = null;
    for (var e = 0; e < n.length; e += 1)
      fn(
        /** @type {Effect} */
        n[e]
      );
  }
}
function vs(t) {
  for (var n = t.parent; n !== null; ) {
    if ((n.f & dt) === 0)
      return (
        /** @type {Effect} */
        n
      );
    n = n.parent;
  }
  return null;
}
function Zr(t) {
  var n, e = U;
  Zt(vs(t));
  try {
    mo(t), n = zo(t);
  } finally {
    Zt(e);
  }
  return n;
}
function yo(t) {
  var n = Zr(t);
  if (t.equals(n) || (t.v = n, t.wv = $o()), !cn)
    if (En !== null)
      En.set(t, t.v);
    else {
      var e = (Gt || (t.f & Et) !== 0) && t.deps !== null ? Vt : rt;
      lt(t, e);
    }
}
function ds(t, n, e) {
  const r = Rn() ? Gr : Kr;
  if (n.length === 0) {
    e(t.map(r));
    return;
  }
  var i = K, o = (
    /** @type {Effect} */
    U
  ), a = _s(), s = hs();
  Promise.all(n.map((l) => /* @__PURE__ */ ps(l))).then((l) => {
    i?.activate(), a();
    try {
      e([...t.map(r), ...l]);
    } catch (f) {
      (o.f & ln) === 0 && Wr(f, o);
    }
    i?.deactivate(), wo();
  }).catch((l) => {
    s.error(l);
  });
}
function _s() {
  var t = U, n = V, e = Q;
  return function() {
    Zt(t), Ct(n), xe(e);
  };
}
function wo() {
  Zt(null), Ct(null), xe(null);
}
const Pn = /* @__PURE__ */ new Set();
let K = null, ve = null, En = null, hi = /* @__PURE__ */ new Set(), Se = [];
function xo() {
  const t = (
    /** @type {() => void} */
    Se.shift()
  );
  Se.length > 0 && queueMicrotask(xo), t();
}
let Hn = [], Jr = null, cr = !1;
class Vn {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #i = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #t = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #f = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #e = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #r = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #n = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #h = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(n) {
    Hn = [], ve = null;
    var e = null;
    if (Pn.size > 1) {
      e = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map();
      for (const [o, a] of this.current)
        e.set(o, { v: o.v, wv: o.wv }), o.v = a;
      for (const o of Pn)
        if (o !== this)
          for (const [a, s] of o.#i)
            e.has(a) || (e.set(a, { v: a.v, wv: a.wv }), a.v = s);
    }
    for (const o of n)
      this.#v(o);
    if (this.#e.length === 0 && this.#t === 0) {
      this.#p();
      var r = this.#r, i = this.#n;
      this.#r = [], this.#n = [], this.#s = [], ve = K, K = null, pi(r), pi(i), K === null ? K = this : Pn.delete(this), this.#l?.resolve();
    } else
      this.#u(this.#r), this.#u(this.#n), this.#u(this.#s);
    if (e) {
      for (const [o, { v: a, wv: s }] of e)
        o.wv <= s && (o.v = a);
      En = null;
    }
    for (const o of this.#e)
      rn(o);
    for (const o of this.#a)
      rn(o);
    this.#e = [], this.#a = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(n) {
    n.f ^= rt;
    for (var e = n.first; e !== null; ) {
      var r = e.f, i = (r & (Ht | In)) !== 0, o = i && (r & rt) !== 0, a = o || (r & At) !== 0 || this.skipped_effects.has(e);
      if (!a && e.fn !== null) {
        if (i)
          e.f ^= rt;
        else if ((r & Ur) !== 0)
          this.#n.push(e);
        else if ((r & rt) === 0)
          if ((r & Xr) !== 0) {
            var s = e.b?.pending ? this.#a : this.#e;
            s.push(e);
          } else ne(e) && ((e.f & Tn) !== 0 && this.#s.push(e), rn(e));
        var l = e.first;
        if (l !== null) {
          e = l;
          continue;
        }
      }
      var f = e.parent;
      for (e = e.next; e === null && f !== null; )
        e = f.next, f = f.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(n) {
    for (const e of n)
      ((e.f & St) !== 0 ? this.#c : this.#h).push(e), lt(e, rt);
    n.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(n, e) {
    this.#i.has(n) || this.#i.set(n, e), this.current.set(n, n.v);
  }
  activate() {
    K = this;
  }
  deactivate() {
    K = null, ve = null;
    for (const n of hi)
      if (hi.delete(n), n(), K !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    Hn.length > 0 ? gs() : this.#p(), K === this && (this.#t === 0 && Pn.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #p() {
    if (!this.#f)
      for (const n of this.#o)
        n();
    this.#o.clear();
  }
  increment() {
    this.#t += 1;
  }
  decrement() {
    if (this.#t -= 1, this.#t === 0) {
      for (const n of this.#c)
        lt(n, St), Sn(n);
      for (const n of this.#h)
        lt(n, Vt), Sn(n);
      this.#r = [], this.#n = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(n) {
    this.#o.add(n);
  }
  settled() {
    return (this.#l ??= Wa()).promise;
  }
  static ensure() {
    if (K === null) {
      const n = K = new Vn();
      Pn.add(K), Vn.enqueue(() => {
        K === n && n.flush();
      });
    }
    return K;
  }
  /** @param {() => void} task */
  static enqueue(n) {
    Se.length === 0 && queueMicrotask(xo), Se.unshift(n);
  }
}
function gs() {
  var t = wn;
  cr = !0;
  try {
    var n = 0;
    for (di(!0); Hn.length > 0; ) {
      var e = Vn.ensure();
      if (n++ > 1e3) {
        var r, i;
        ms();
      }
      e.process(Hn), Kt.clear();
    }
  } finally {
    cr = !1, di(t), Jr = null;
  }
}
function ms() {
  try {
    es();
  } catch (t) {
    Wr(t, Jr);
  }
}
let Qt = null;
function pi(t) {
  var n = t.length;
  if (n !== 0) {
    for (var e = 0; e < n; ) {
      var r = t[e++];
      if ((r.f & (ln | At)) === 0 && ne(r) && (Qt = [], rn(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? To(r) : r.fn = null), Qt.length > 0)) {
        Kt.clear();
        for (const i of Qt)
          rn(i);
        Qt = [];
      }
    }
    Qt = null;
  }
}
function Sn(t) {
  for (var n = Jr = t; n.parent !== null; ) {
    n = n.parent;
    var e = n.f;
    if (cr && n === U && (e & Tn) !== 0)
      return;
    if ((e & (In | Ht)) !== 0) {
      if ((e & rt) === 0) return;
      n.f ^= rt;
    }
  }
  Hn.push(n);
}
const Kt = /* @__PURE__ */ new Map();
function Bn(t, n) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: co,
    rv: 0,
    wv: 0
  };
  return e;
}
// @__NO_SIDE_EFFECTS__
function Xt(t, n) {
  const e = Bn(t);
  return $s(e), e;
}
// @__NO_SIDE_EFFECTS__
function Wt(t, n = !1, e = !0) {
  const r = Bn(t);
  return n || (r.equals = ho), kn && e && Q !== null && Q.l !== null && (Q.l.s ??= []).push(r), r;
}
function H(t, n, e = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Tt || (V.f & ci) !== 0) && Rn() && (V.f & (dt | Tn | Xr | ci)) !== 0 && !Ft?.includes(t) && as();
  let r = e ? gn(n) : n;
  return be(t, r);
}
function be(t, n) {
  if (!t.equals(n)) {
    var e = t.v;
    cn ? Kt.set(t, n) : Kt.set(t, e), t.v = n;
    var r = Vn.ensure();
    r.capture(t, e), (t.f & dt) !== 0 && ((t.f & St) !== 0 && Zr(
      /** @type {Derived} */
      t
    ), lt(t, (t.f & Et) === 0 ? rt : Vt)), t.wv = $o(), Eo(t, St), Rn() && U !== null && (U.f & rt) !== 0 && (U.f & (Ht | In)) === 0 && (mt === null ? Os([t]) : mt.push(t));
  }
  return n;
}
function Je(t) {
  H(t, t.v + 1);
}
function Eo(t, n) {
  var e = t.reactions;
  if (e !== null)
    for (var r = Rn(), i = e.length, o = 0; o < i; o++) {
      var a = e[o], s = a.f;
      if (!(!r && a === U)) {
        var l = (s & St) === 0;
        l && lt(a, n), (s & dt) !== 0 ? Eo(
          /** @type {Derived} */
          a,
          Vt
        ) : l && ((s & Tn) !== 0 && Qt !== null && Qt.push(
          /** @type {Effect} */
          a
        ), Sn(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function gn(t) {
  if (typeof t != "object" || t === null || nn in t)
    return t;
  const n = Fr(t);
  if (n !== Ba && n !== Xa)
    return t;
  var e = /* @__PURE__ */ new Map(), r = qr(t), i = /* @__PURE__ */ Xt(0), o = en, a = (s) => {
    if (en === o)
      return s();
    var l = V, f = en;
    Ct(null), gi(o);
    var u = s();
    return Ct(l), gi(f), u;
  };
  return r && e.set("length", /* @__PURE__ */ Xt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && is();
        var u = e.get(l);
        return u === void 0 ? u = a(() => {
          var c = /* @__PURE__ */ Xt(f.value);
          return e.set(l, c), c;
        }) : H(u, f.value, !0), !0;
      },
      deleteProperty(s, l) {
        var f = e.get(l);
        if (f === void 0) {
          if (l in s) {
            const u = a(() => /* @__PURE__ */ Xt(et));
            e.set(l, u), Je(i);
          }
        } else
          H(f, et), Je(i);
        return !0;
      },
      get(s, l, f) {
        if (l === nn)
          return t;
        var u = e.get(l), c = l in s;
        if (u === void 0 && (!c || pe(s, l)?.writable) && (u = a(() => {
          var p = gn(c ? s[l] : et), d = /* @__PURE__ */ Xt(p);
          return d;
        }), e.set(l, u)), u !== void 0) {
          var h = P(u);
          return h === et ? void 0 : h;
        }
        return Reflect.get(s, l, f);
      },
      getOwnPropertyDescriptor(s, l) {
        var f = Reflect.getOwnPropertyDescriptor(s, l);
        if (f && "value" in f) {
          var u = e.get(l);
          u && (f.value = P(u));
        } else if (f === void 0) {
          var c = e.get(l), h = c?.v;
          if (c !== void 0 && h !== et)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return f;
      },
      has(s, l) {
        if (l === nn)
          return !0;
        var f = e.get(l), u = f !== void 0 && f.v !== et || Reflect.has(s, l);
        if (f !== void 0 || U !== null && (!u || pe(s, l)?.writable)) {
          f === void 0 && (f = a(() => {
            var h = u ? gn(s[l]) : et, p = /* @__PURE__ */ Xt(h);
            return p;
          }), e.set(l, f));
          var c = P(f);
          if (c === et)
            return !1;
        }
        return u;
      },
      set(s, l, f, u) {
        var c = e.get(l), h = l in s;
        if (r && l === "length")
          for (var p = f; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var d = e.get(p + "");
            d !== void 0 ? H(d, et) : p in s && (d = a(() => /* @__PURE__ */ Xt(et)), e.set(p + "", d));
          }
        if (c === void 0)
          (!h || pe(s, l)?.writable) && (c = a(() => /* @__PURE__ */ Xt(void 0)), H(c, gn(f)), e.set(l, c));
        else {
          h = c.v !== et;
          var w = a(() => gn(f));
          H(c, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(s, l);
        if (y?.set && y.set.call(u, f), !h) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              e.get("length")
            ), m = Number(l);
            Number.isInteger(m) && m >= x.v && H(x, m + 1);
          }
          Je(i);
        }
        return !0;
      },
      ownKeys(s) {
        P(i);
        var l = Reflect.ownKeys(s).filter((c) => {
          var h = e.get(c);
          return h === void 0 || h.v !== et;
        });
        for (var [f, u] of e)
          u.v !== et && !(f in s) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        os();
      }
    }
  );
}
var ys, ws, xs;
function te(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Me(t) {
  return ws.call(t);
}
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return xs.call(t);
}
function tt(t, n) {
  return /* @__PURE__ */ Me(t);
}
function hr(t, n) {
  {
    var e = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Me(
        /** @type {Node} */
        t
      )
    );
    return e instanceof Comment && e.data === "" ? /* @__PURE__ */ Be(e) : e;
  }
}
function it(t, n = 1, e = !1) {
  let r = t;
  for (; n--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(r);
  return r;
}
function Es(t) {
  t.textContent = "";
}
function So() {
  return !1;
}
let vi = !1;
function Ss() {
  vi || (vi = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            n.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Xe(t) {
  var n = V, e = U;
  Ct(null), Zt(null);
  try {
    return t();
  } finally {
    Ct(n), Zt(e);
  }
}
function bs(t, n, e, r = e) {
  t.addEventListener(n, () => Xe(e));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Ss();
}
function bo(t) {
  U === null && V === null && ns(), V !== null && (V.f & Et) !== 0 && U === null && ts(), cn && ja();
}
function Ms(t, n) {
  var e = n.last;
  e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t);
}
function Bt(t, n, e, r = !0) {
  var i = U;
  i !== null && (i.f & At) !== 0 && (t |= At);
  var o = {
    ctx: Q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | St,
    first: null,
    fn: n,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (e)
    try {
      rn(o), o.f |= Hr;
    } catch (l) {
      throw fn(o), l;
    }
  else n !== null && Sn(o);
  var a = e && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & Br) === 0;
  if (!a && r && (i !== null && Ms(o, i), V !== null && (V.f & dt) !== 0 && (t & In) === 0)) {
    var s = (
      /** @type {Derived} */
      V
    );
    (s.effects ??= []).push(o);
  }
  return o;
}
function As(t) {
  const n = Bt(Ve, null, !1);
  return lt(n, rt), n.teardown = t, n;
}
function pr(t) {
  bo();
  var n = (
    /** @type {Effect} */
    U.f
  ), e = !V && (n & Ht) !== 0 && (n & Hr) === 0;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      Q
    );
    (r.e ??= []).push(t);
  } else
    return Mo(t);
}
function Mo(t) {
  return Bt(Ur | fo, t, !1);
}
function Ns(t) {
  return bo(), Bt(Ve | fo, t, !0);
}
function ks(t) {
  return Bt(Ur, t, !1);
}
function Ts(t, n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    Q
  ), r = { effect: null, ran: !1, deps: t };
  e.l.$.push(r), r.effect = Ye(() => {
    t(), !r.ran && (r.ran = !0, at(n));
  });
}
function Is() {
  var t = (
    /** @type {ComponentContextLegacy} */
    Q
  );
  Ye(() => {
    for (var n of t.l.$) {
      n.deps();
      var e = n.effect;
      (e.f & rt) !== 0 && lt(e, Vt), ne(e) && rn(e), n.ran = !1;
    }
  });
}
function Rs(t) {
  return Bt(Xr | Br, t, !0);
}
function Ye(t, n = 0) {
  return Bt(Ve | n, t, !0);
}
function vn(t, n = [], e = []) {
  ds(n, e, (r) => {
    Bt(Ve, () => t(...r.map(P)), !0);
  });
}
function Ao(t, n = 0) {
  var e = Bt(Tn | n, t, !0);
  return e;
}
function Ae(t, n = !0) {
  return Bt(Ht, t, !0, n);
}
function No(t) {
  var n = t.teardown;
  if (n !== null) {
    const e = cn, r = V;
    _i(!0), Ct(null);
    try {
      n.call(null);
    } finally {
      _i(e), Ct(r);
    }
  }
}
function ko(t, n = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    const i = e.ac;
    i !== null && Xe(() => {
      i.abort(Yr);
    });
    var r = e.next;
    (e.f & In) !== 0 ? e.parent = null : fn(e, n), e = r;
  }
}
function Ps(t) {
  for (var n = t.first; n !== null; ) {
    var e = n.next;
    (n.f & Ht) === 0 && fn(n), n = e;
  }
}
function fn(t, n = !0) {
  var e = !1;
  (n || (t.f & Ga) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Cs(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), e = !0), ko(t, n && !e), Ne(t, 0), lt(t, ln);
  var r = t.transitions;
  if (r !== null)
    for (const o of r)
      o.stop();
  No(t);
  var i = t.parent;
  i !== null && i.first !== null && To(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Cs(t, n) {
  for (; t !== null; ) {
    var e = t === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = e;
  }
}
function To(t) {
  var n = t.parent, e = t.prev, r = t.next;
  e !== null && (e.next = r), r !== null && (r.prev = e), n !== null && (n.first === t && (n.first = r), n.last === t && (n.last = e));
}
function Io(t, n) {
  var e = [];
  Qr(t, e, !0), Ro(e, () => {
    fn(t), n && n();
  });
}
function Ro(t, n) {
  var e = t.length;
  if (e > 0) {
    var r = () => --e || n();
    for (var i of t)
      i.out(r);
  } else
    n();
}
function Qr(t, n, e) {
  if ((t.f & At) === 0) {
    if (t.f ^= At, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && n.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, o = (r.f & Vr) !== 0 || (r.f & Ht) !== 0;
      Qr(r, n, o ? e : !1), r = i;
    }
  }
}
function jr(t) {
  Po(t, !0);
}
function Po(t, n) {
  if ((t.f & At) !== 0) {
    t.f ^= At, (t.f & rt) === 0 && (lt(t, St), Sn(t));
    for (var e = t.first; e !== null; ) {
      var r = e.next, i = (e.f & Vr) !== 0 || (e.f & Ht) !== 0;
      Po(e, i ? n : !1), e = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && o.in();
  }
}
let wn = !1;
function di(t) {
  wn = t;
}
let cn = !1;
function _i(t) {
  cn = t;
}
let V = null, Tt = !1;
function Ct(t) {
  V = t;
}
let U = null;
function Zt(t) {
  U = t;
}
let Ft = null;
function $s(t) {
  V !== null && (Ft === null ? Ft = [t] : Ft.push(t));
}
let st = null, pt = 0, mt = null;
function Os(t) {
  mt = t;
}
let Co = 1, Xn = 0, en = Xn;
function gi(t) {
  en = t;
}
let Gt = !1;
function $o() {
  return ++Co;
}
function ne(t) {
  var n = t.f;
  if ((n & St) !== 0)
    return !0;
  if ((n & Vt) !== 0) {
    var e = t.deps, r = (n & Et) !== 0;
    if (e !== null) {
      var i, o, a = (n & we) !== 0, s = r && U !== null && !Gt, l = e.length;
      if ((a || s) && (U === null || (U.f & ln) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < l; i++)
          o = e[i], (a || !o?.reactions?.includes(f)) && (o.reactions ??= []).push(f);
        a && (f.f ^= we), s && u !== null && (u.f & Et) === 0 && (f.f ^= Et);
      }
      for (i = 0; i < l; i++)
        if (o = e[i], ne(
          /** @type {Derived} */
          o
        ) && yo(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return !0;
    }
    (!r || U !== null && !Gt) && lt(t, rt);
  }
  return !1;
}
function Oo(t, n, e = !0) {
  var r = t.reactions;
  if (r !== null && !Ft?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & dt) !== 0 ? Oo(
        /** @type {Derived} */
        o,
        n,
        !1
      ) : n === o && (e ? lt(o, St) : (o.f & rt) !== 0 && lt(o, Vt), Sn(
        /** @type {Effect} */
        o
      ));
    }
}
function zo(t) {
  var n = st, e = pt, r = mt, i = V, o = Gt, a = Ft, s = Q, l = Tt, f = en, u = t.f;
  st = /** @type {null | Value[]} */
  null, pt = 0, mt = null, Gt = (u & Et) !== 0 && (Tt || !wn || V === null), V = (u & (Ht | In)) === 0 ? t : null, Ft = null, xe(t.ctx), Tt = !1, en = ++Xn, t.ac !== null && (Xe(() => {
    t.ac.abort(Yr);
  }), t.ac = null);
  try {
    t.f |= fr;
    var c = (
      /** @type {Function} */
      t.fn
    ), h = c(), p = t.deps;
    if (st !== null) {
      var d;
      if (Ne(t, pt), p !== null && pt > 0)
        for (p.length = pt + st.length, d = 0; d < st.length; d++)
          p[pt + d] = st[d];
      else
        t.deps = p = st;
      if (!Gt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & dt) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (d = pt; d < p.length; d++)
          (p[d].reactions ??= []).push(t);
    } else p !== null && pt < p.length && (Ne(t, pt), p.length = pt);
    if (Rn() && mt !== null && !Tt && p !== null && (t.f & (dt | Vt | St)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      mt.length; d++)
        Oo(
          mt[d],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Xn++, mt !== null && (r === null ? r = mt : r.push(.../** @type {Source[]} */
    mt))), (t.f & tn) !== 0 && (t.f ^= tn), h;
  } catch (w) {
    return fs(w);
  } finally {
    t.f ^= fr, st = n, pt = e, mt = r, V = i, Gt = o, Ft = a, xe(s), Tt = l, en = f;
  }
}
function zs(t, n) {
  let e = n.reactions;
  if (e !== null) {
    var r = Va.call(e, t);
    if (r !== -1) {
      var i = e.length - 1;
      i === 0 ? e = n.reactions = null : (e[r] = e[i], e.pop());
    }
  }
  e === null && (n.f & dt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (st === null || !st.includes(n)) && (lt(n, Vt), (n.f & (Et | we)) === 0 && (n.f ^= we), mo(
    /** @type {Derived} **/
    n
  ), Ne(
    /** @type {Derived} **/
    n,
    0
  ));
}
function Ne(t, n) {
  var e = t.deps;
  if (e !== null)
    for (var r = n; r < e.length; r++)
      zs(t, e[r]);
}
function rn(t) {
  var n = t.f;
  if ((n & ln) === 0) {
    lt(t, rt);
    var e = U, r = wn;
    U = t, wn = !0;
    try {
      (n & Tn) !== 0 ? Ps(t) : ko(t), No(t);
      var i = zo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Co;
      var o;
      ao && Pa && (t.f & St) !== 0 && t.deps;
    } finally {
      wn = r, U = e;
    }
  }
}
function P(t) {
  var n = t.f, e = (n & dt) !== 0;
  if (V !== null && !Tt) {
    var r = U !== null && (U.f & ln) !== 0;
    if (!r && !Ft?.includes(t)) {
      var i = V.deps;
      if ((V.f & fr) !== 0)
        t.rv < Xn && (t.rv = Xn, st === null && i !== null && i[pt] === t ? pt++ : st === null ? st = [t] : (!Gt || !st.includes(t)) && st.push(t));
      else {
        (V.deps ??= []).push(t);
        var o = t.reactions;
        o === null ? t.reactions = [V] : o.includes(V) || o.push(V);
      }
    }
  } else if (e && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var a = (
      /** @type {Derived} */
      t
    ), s = a.parent;
    s !== null && (s.f & Et) === 0 && (a.f ^= Et);
  }
  if (cn) {
    if (Kt.has(t))
      return Kt.get(t);
    if (e) {
      a = /** @type {Derived} */
      t;
      var l = a.v;
      return ((a.f & rt) === 0 && a.reactions !== null || Do(a)) && (l = Zr(a)), Kt.set(a, l), l;
    }
  } else if (e) {
    if (a = /** @type {Derived} */
    t, En?.has(a))
      return En.get(a);
    ne(a) && yo(a);
  }
  if ((t.f & tn) !== 0)
    throw t.v;
  return t.v;
}
function Do(t) {
  if (t.v === et) return !0;
  if (t.deps === null) return !1;
  for (const n of t.deps)
    if (Kt.has(n) || (n.f & dt) !== 0 && Do(
      /** @type {Derived} */
      n
    ))
      return !0;
  return !1;
}
function at(t) {
  var n = Tt;
  try {
    return Tt = !0, t();
  } finally {
    Tt = n;
  }
}
const Ds = -7169;
function lt(t, n) {
  t.f = t.f & Ds | n;
}
function Lo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (nn in t)
      vr(t);
    else if (!Array.isArray(t))
      for (let n in t) {
        const e = t[n];
        typeof e == "object" && e && nn in e && vr(e);
      }
  }
}
function vr(t, n = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !n.has(t)) {
    n.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        vr(t[r], n);
      } catch {
      }
    const e = Fr(t);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const r = uo(e);
      for (let i in r) {
        const o = r[i].get;
        if (o)
          try {
            o.call(t);
          } catch {
          }
      }
    }
  }
}
function Ls(t, n, e, r = {}) {
  function i(o) {
    if (r.capture || qs.call(n, o), !o.cancelBubble)
      return Xe(() => e?.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? go(() => {
    n.addEventListener(t, i, r);
  }) : n.addEventListener(t, i, r), i;
}
function Dt(t, n, e, r, i) {
  var o = { capture: r, passive: i }, a = Ls(t, n, e, o);
  (n === document.body || // @ts-ignore
  n === window || // @ts-ignore
  n === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  n instanceof HTMLMediaElement) && As(() => {
    n.removeEventListener(t, a, o);
  });
}
let mi = null;
function qs(t) {
  var n = this, e = (
    /** @type {Node} */
    n.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  mi = t;
  var a = 0, s = mi === t && t.__root;
  if (s) {
    var l = i.indexOf(s);
    if (l !== -1 && (n === document || n === /** @type {any} */
    window)) {
      t.__root = n;
      return;
    }
    var f = i.indexOf(n);
    if (f === -1)
      return;
    l <= f && (a = l);
  }
  if (o = /** @type {Element} */
  i[a] || t.target, o !== n) {
    ur(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || e;
      }
    });
    var u = V, c = U;
    Ct(null), Zt(null);
    try {
      for (var h, p = []; o !== null; ) {
        var d = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var w = o["__" + r];
          if (w != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (qr(w)) {
              var [y, ...x] = w;
              y.apply(o, [t, ...x]);
            } else
              w.call(o, t);
        } catch (m) {
          h ? p.push(m) : h = m;
        }
        if (t.cancelBubble || d === n || d === null)
          break;
        o = d;
      }
      if (h) {
        for (let m of p)
          queueMicrotask(() => {
            throw m;
          });
        throw h;
      }
    } finally {
      t.__root = n, delete t.currentTarget, Ct(u), Zt(c);
    }
  }
}
function Fs(t) {
  var n = document.createElement("template");
  return n.innerHTML = t.replaceAll("<!>", "<!---->"), n.content;
}
function ke(t, n) {
  var e = (
    /** @type {Effect} */
    U
  );
  e.nodes_start === null && (e.nodes_start = t, e.nodes_end = n);
}
// @__NO_SIDE_EFFECTS__
function $t(t, n) {
  var e = (n & Fa) !== 0, r = (n & Ua) !== 0, i, o = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Fs(o ? t : "<!>" + t), e || (i = /** @type {Node} */
    /* @__PURE__ */ Me(i)));
    var a = (
      /** @type {TemplateNode} */
      r || ys ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (e) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Me(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ke(s, l);
    } else
      ke(a, a);
    return a;
  };
}
function Us(t = "") {
  {
    var n = te(t + "");
    return ke(n, n), n;
  }
}
function Hs() {
  var t = document.createDocumentFragment(), n = document.createComment(""), e = te();
  return t.append(n, e), ke(n, e), t;
}
function yt(t, n) {
  t !== null && t.before(
    /** @type {Node} */
    n
  );
}
function dn(t, n) {
  var e = n == null ? "" : typeof n == "object" ? n + "" : n;
  e !== (t.__t ??= t.nodeValue) && (t.__t = e, t.nodeValue = e + "");
}
function qo(t) {
  Q === null && Ja(), kn && Q.l !== null ? Vs(Q).m.push(t) : pr(() => {
    const n = at(t);
    if (typeof n == "function") return (
      /** @type {() => void} */
      n
    );
  });
}
function Vs(t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return n.u ??= { a: [], b: [], m: [] };
}
function mn(t, n, e = !1) {
  var r = t, i = null, o = null, a = et, s = e ? Vr : 0, l = !1;
  const f = (p, d = !0) => {
    l = !0, h(d, p);
  };
  var u = null;
  function c() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var p = a ? i : o, d = a ? o : i;
    p && jr(p), d && Io(d, () => {
      a ? o = null : i = null;
    });
  }
  const h = (p, d) => {
    if (a !== (a = p)) {
      var w = So(), y = r;
      if (w && (u = document.createDocumentFragment(), u.append(y = te())), a ? i ??= d && Ae(() => d(y)) : o ??= d && Ae(() => d(y)), w) {
        var x = (
          /** @type {Batch} */
          K
        ), m = a ? i : o, E = a ? o : i;
        m && x.skipped_effects.delete(m), E && x.skipped_effects.add(E), x.add_callback(c);
      } else
        c();
    }
  };
  Ao(() => {
    l = !1, n(f), l || h(null, null);
  }, s);
}
function Bs(t, n) {
  return n;
}
function Xs(t, n, e) {
  for (var r = t.items, i = [], o = n.length, a = 0; a < o; a++)
    Qr(n[a].e, i, !0);
  var s = o > 0 && i.length === 0 && e !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    Es(l), l.append(
      /** @type {Element} */
      e
    ), r.clear(), kt(t, n[0].prev, n[o - 1].next);
  }
  Ro(i, () => {
    for (var f = 0; f < o; f++) {
      var u = n[f];
      s || (r.delete(u.k), kt(t, u.prev, u.next)), fn(u.e, !s);
    }
  });
}
function Ys(t, n, e, r, i, o = null) {
  var a = t, s = { flags: n, items: /* @__PURE__ */ new Map(), first: null };
  {
    var l = (
      /** @type {Element} */
      t
    );
    a = l.appendChild(te());
  }
  var f = null, u = !1, c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Kr(() => {
    var y = e();
    return qr(y) ? y : y == null ? [] : so(y);
  }), p, d;
  function w() {
    Ws(
      d,
      p,
      s,
      c,
      a,
      i,
      n,
      r,
      e
    ), o !== null && (p.length === 0 ? f ? jr(f) : f = Ae(() => o(a)) : f !== null && Io(f, () => {
      f = null;
    }));
  }
  Ao(() => {
    d ??= /** @type {Effect} */
    U, p = /** @type {V[]} */
    P(h);
    var y = p.length;
    if (!(u && y === 0)) {
      u = y === 0;
      var x, m, E, b;
      if (So()) {
        var T = /* @__PURE__ */ new Set(), I = (
          /** @type {Batch} */
          K
        );
        for (m = 0; m < y; m += 1) {
          E = p[m], b = r(E, m);
          var z = s.items.get(b) ?? c.get(b);
          z ? Fo(z, E, m) : (x = Uo(
            null,
            s,
            null,
            null,
            E,
            b,
            m,
            i,
            n,
            e,
            !0
          ), c.set(b, x)), T.add(b);
        }
        for (const [O, k] of s.items)
          T.has(O) || I.skipped_effects.add(k.e);
        I.add_callback(w);
      } else
        w();
      P(h);
    }
  });
}
function Ws(t, n, e, r, i, o, a, s, l) {
  var f = n.length, u = e.items, c = e.first, h = c, p, d = null, w = [], y = [], x, m, E, b;
  for (b = 0; b < f; b += 1) {
    if (x = n[b], m = s(x, b), E = u.get(m), E === void 0) {
      var T = r.get(m);
      if (T !== void 0) {
        r.delete(m), u.set(m, T);
        var I = d ? d.next : h;
        kt(e, d, T), kt(e, T, I), Qe(T, I, i), d = T;
      } else {
        var z = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        d = Uo(
          z,
          e,
          d,
          d === null ? e.first : d.next,
          x,
          m,
          b,
          o,
          a,
          l
        );
      }
      u.set(m, d), w = [], y = [], h = d.next;
      continue;
    }
    if (Fo(E, x, b), (E.e.f & At) !== 0 && jr(E.e), E !== h) {
      if (p !== void 0 && p.has(E)) {
        if (w.length < y.length) {
          var O = y[0], k;
          d = O.prev;
          var A = w[0], N = w[w.length - 1];
          for (k = 0; k < w.length; k += 1)
            Qe(w[k], O, i);
          for (k = 0; k < y.length; k += 1)
            p.delete(y[k]);
          kt(e, A.prev, N.next), kt(e, d, A), kt(e, N, O), h = O, d = N, b -= 1, w = [], y = [];
        } else
          p.delete(E), Qe(E, h, i), kt(e, E.prev, E.next), kt(e, E, d === null ? e.first : d.next), kt(e, d, E), d = E;
        continue;
      }
      for (w = [], y = []; h !== null && h.k !== m; )
        (h.e.f & At) === 0 && (p ??= /* @__PURE__ */ new Set()).add(h), y.push(h), h = h.next;
      if (h === null)
        continue;
      E = h;
    }
    w.push(E), d = E, h = E.next;
  }
  if (h !== null || p !== void 0) {
    for (var D = p === void 0 ? [] : so(p); h !== null; )
      (h.e.f & At) === 0 && D.push(h), h = h.next;
    var C = D.length;
    if (C > 0) {
      var v = f === 0 ? i : null;
      Xs(e, D, v);
    }
  }
  t.first = e.first && e.first.e, t.last = d && d.e;
  for (var _ of r.values())
    fn(_.e);
  r.clear();
}
function Fo(t, n, e, r) {
  be(t.v, n), t.i = e;
}
function Uo(t, n, e, r, i, o, a, s, l, f, u) {
  var c = (l & $a) !== 0, h = (l & za) === 0, p = c ? h ? /* @__PURE__ */ Wt(i, !1, !1) : Bn(i) : i, d = (l & Oa) === 0 ? a : Bn(a), w = {
    i: d,
    v: p,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: e,
    next: r
  };
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = te());
    }
    return w.e = Ae(() => s(
      /** @type {Node} */
      t,
      p,
      d,
      f
    ), ss), w.e.prev = e && e.e, w.e.next = r && r.e, e === null ? u || (n.first = w) : (e.next = w, e.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
  } finally {
  }
}
function Qe(t, n, e) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : e, i = n ? (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ) : e, o = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); o !== null && o !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(o)
    );
    i.before(o), o = a;
  }
}
function kt(t, n, e) {
  n === null ? t.first = e : (n.next = e, n.e.next = e && e.e), e !== null && (e.prev = n, e.e.prev = n && n.e);
}
const Gs = Symbol("is custom element"), Ks = Symbol("is html");
function yi(t, n, e, r) {
  var i = Zs(t);
  i[n] !== (i[n] = e) && (e == null ? t.removeAttribute(n) : typeof e != "string" && Js(t).includes(n) ? t[n] = e : t.setAttribute(n, e));
}
function Zs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Gs]: t.nodeName.includes("-"),
      [Ks]: t.namespaceURI === Ha
    }
  );
}
var wi = /* @__PURE__ */ new Map();
function Js(t) {
  var n = wi.get(t.nodeName);
  if (n) return n;
  wi.set(t.nodeName, n = []);
  for (var e, r = t, i = Element.prototype; i !== r; ) {
    e = uo(r);
    for (var o in e)
      e[o].set && n.push(o);
    r = Fr(r);
  }
  return n;
}
function Qs(t, n, e = n) {
  var r = Rn(), i = /* @__PURE__ */ new WeakSet();
  bs(t, "input", (o) => {
    var a = o ? t.defaultValue : t.value;
    if (a = je(t) ? tr(a) : a, e(a), K !== null && i.add(K), r && a !== (a = n())) {
      var s = t.selectionStart, l = t.selectionEnd;
      t.value = a ?? "", l !== null && (t.selectionStart = s, t.selectionEnd = Math.min(l, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  at(n) == null && t.value && (e(je(t) ? tr(t.value) : t.value), K !== null && i.add(K)), Ye(() => {
    var o = n();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ve ?? K
      );
      if (i.has(a))
        return;
    }
    je(t) && o === tr(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function je(t) {
  var n = t.type;
  return n === "number" || n === "range";
}
function tr(t) {
  return t === "" ? null : +t;
}
function xi(t, n) {
  return t === n || t?.[nn] === n;
}
function js(t = {}, n, e, r) {
  return ks(() => {
    var i, o;
    return Ye(() => {
      i = o, o = [], at(() => {
        t !== e(...o) && (n(t, ...o), i && xi(e(...i), t) && n(null, ...i));
      });
    }), () => {
      go(() => {
        o && xi(e(...o), t) && n(null, ...o);
      });
    };
  }), t;
}
function Ho(t = !1) {
  const n = (
    /** @type {ComponentContextLegacy} */
    Q
  ), e = n.l.u;
  if (!e) return;
  let r = () => Lo(n.s);
  if (t) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Gr(() => {
      let s = !1;
      const l = n.s;
      for (const f in l)
        l[f] !== o[f] && (o[f] = l[f], s = !0);
      return s && i++, i;
    });
    r = () => P(a);
  }
  e.b.length && Ns(() => {
    Ei(n, r), lr(e.b);
  }), pr(() => {
    const i = at(() => e.m.map(Ya));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), e.a.length && pr(() => {
    Ei(n, r), lr(e.a);
  });
}
function Ei(t, n) {
  if (t.l.s)
    for (const e of t.l.s) P(e);
  n();
}
let ie = !1;
function tu(t) {
  var n = ie;
  try {
    return ie = !1, [t(), ie];
  } finally {
    ie = n;
  }
}
function nu(t, n, e, r) {
  var i = !kn || (e & Da) !== 0, o = (e & qa) !== 0, a = (
    /** @type {V} */
    r
  ), s = !0, l = () => (s && (s = !1, a = /** @type {V} */
  r), a), f;
  {
    var u = nn in t || Ka in t;
    f = pe(t, n)?.set ?? (u && n in t ? (m) => t[n] = m : void 0);
  }
  var c, h = !1;
  [c, h] = tu(() => (
    /** @type {V} */
    t[n]
  )), c === void 0 && r !== void 0 && (c = l(), f && (i && rs(), f(c)));
  var p;
  if (i ? p = () => {
    var m = (
      /** @type {V} */
      t[n]
    );
    return m === void 0 ? l() : (s = !0, m);
  } : p = () => {
    var m = (
      /** @type {V} */
      t[n]
    );
    return m !== void 0 && (a = /** @type {V} */
    void 0), m === void 0 ? a : m;
  }, i && (e & La) === 0)
    return p;
  if (f) {
    var d = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, E) {
        return arguments.length > 0 ? ((!i || !E || d || h) && f(E ? p() : m), m) : p();
      })
    );
  }
  var w = !1, y = /* @__PURE__ */ Kr(() => (w = !1, p()));
  P(y);
  var x = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(m, E) {
      if (arguments.length > 0) {
        const b = E ? P(y) : i && o ? gn(m) : m;
        return H(y, b), w = !0, a !== void 0 && (a = b), m;
      }
      return cn && w || (x.f & ln) !== 0 ? y.v : P(y);
    })
  );
}
class an {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(n) {
    const e = this._partials;
    let r = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = e[i], a = n + o, s = Math.abs(n) < Math.abs(o) ? n - (a - o) : o - (a - n);
      s && (e[r++] = s), n = a;
    }
    return e[r] = n, this._n = r + 1, this;
  }
  valueOf() {
    const n = this._partials;
    let e = this._n, r, i, o, a = 0;
    if (e > 0) {
      for (a = n[--e]; e > 0 && (r = a, i = n[--e], a = r + i, o = i - (a - r), !o); )
        ;
      e > 0 && (o < 0 && n[e - 1] < 0 || o > 0 && n[e - 1] > 0) && (i = o * 2, r = a + i, i == r - a && (a = r));
    }
    return a;
  }
}
function* eu(t) {
  for (const n of t)
    yield* n;
}
function Vo(t) {
  return Array.from(eu(t));
}
var ru = { value: () => {
} };
function ti() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new de(e);
}
function de(t) {
  this._ = t;
}
function iu(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
de.prototype = ti.prototype = {
  constructor: de,
  on: function(t, n) {
    var e = this._, r = iu(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = ou(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Si(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Si(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new de(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function ou(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Si(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = ru, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var dr = "http://www.w3.org/1999/xhtml";
const bi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: dr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function We(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), bi.hasOwnProperty(n) ? { space: bi[n], local: t } : t;
}
function au(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === dr && n.documentElement.namespaceURI === dr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function su(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Bo(t) {
  var n = We(t);
  return (n.local ? su : au)(n);
}
function uu() {
}
function ni(t) {
  return t == null ? uu : function() {
    return this.querySelector(t);
  };
}
function lu(t) {
  typeof t != "function" && (t = ni(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, f, u = 0; u < a; ++u)
      (l = o[u]) && (f = t.call(l, l.__data__, u, o)) && ("__data__" in l && (f.__data__ = l.__data__), s[u] = f);
  return new _t(r, this._parents);
}
function fu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function cu() {
  return [];
}
function Xo(t) {
  return t == null ? cu : function() {
    return this.querySelectorAll(t);
  };
}
function hu(t) {
  return function() {
    return fu(t.apply(this, arguments));
  };
}
function pu(t) {
  typeof t == "function" ? t = hu(t) : t = Xo(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, f = 0; f < s; ++f)
      (l = a[f]) && (r.push(t.call(l, l.__data__, f, a)), i.push(l));
  return new _t(r, i);
}
function Yo(t) {
  return function() {
    return this.matches(t);
  };
}
function Wo(t) {
  return function(n) {
    return n.matches(t);
  };
}
var vu = Array.prototype.find;
function du(t) {
  return function() {
    return vu.call(this.children, t);
  };
}
function _u() {
  return this.firstElementChild;
}
function gu(t) {
  return this.select(t == null ? _u : du(typeof t == "function" ? t : Wo(t)));
}
var mu = Array.prototype.filter;
function yu() {
  return Array.from(this.children);
}
function wu(t) {
  return function() {
    return mu.call(this.children, t);
  };
}
function xu(t) {
  return this.selectAll(t == null ? yu : wu(typeof t == "function" ? t : Wo(t)));
}
function Eu(t) {
  typeof t != "function" && (t = Yo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, f = 0; f < a; ++f)
      (l = o[f]) && t.call(l, l.__data__, f, o) && s.push(l);
  return new _t(r, this._parents);
}
function Go(t) {
  return new Array(t.length);
}
function Su() {
  return new _t(this._enter || this._groups.map(Go), this._parents);
}
function Te(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Te.prototype = {
  constructor: Te,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function bu(t) {
  return function() {
    return t;
  };
}
function Mu(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, f = o.length; a < f; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Te(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Au(t, n, e, r, i, o, a) {
  var s, l, f = /* @__PURE__ */ new Map(), u = n.length, c = o.length, h = new Array(u), p;
  for (s = 0; s < u; ++s)
    (l = n[s]) && (h[s] = p = a.call(l, l.__data__, s, n) + "", f.has(p) ? i[s] = l : f.set(p, l));
  for (s = 0; s < c; ++s)
    p = a.call(t, o[s], s, o) + "", (l = f.get(p)) ? (r[s] = l, l.__data__ = o[s], f.delete(p)) : e[s] = new Te(t, o[s]);
  for (s = 0; s < u; ++s)
    (l = n[s]) && f.get(h[s]) === l && (i[s] = l);
}
function Nu(t) {
  return t.__data__;
}
function ku(t, n) {
  if (!arguments.length) return Array.from(this, Nu);
  var e = n ? Au : Mu, r = this._parents, i = this._groups;
  typeof t != "function" && (t = bu(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), f = 0; f < o; ++f) {
    var u = r[f], c = i[f], h = c.length, p = Tu(t.call(u, u && u.__data__, f, r)), d = p.length, w = s[f] = new Array(d), y = a[f] = new Array(d), x = l[f] = new Array(h);
    e(u, c, w, y, x, p, n);
    for (var m = 0, E = 0, b, T; m < d; ++m)
      if (b = w[m]) {
        for (m >= E && (E = m + 1); !(T = y[E]) && ++E < d; ) ;
        b._next = T || null;
      }
  }
  return a = new _t(a, r), a._enter = s, a._exit = l, a;
}
function Tu(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Iu() {
  return new _t(this._exit || this._groups.map(Go), this._parents);
}
function Ru(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Pu(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var f = e[l], u = r[l], c = f.length, h = s[l] = new Array(c), p, d = 0; d < c; ++d)
      (p = f[d] || u[d]) && (h[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new _t(s, this._parents);
}
function Cu() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function $u(t) {
  t || (t = Ou);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), f, u = 0; u < s; ++u)
      (f = a[u]) && (l[u] = f);
    l.sort(n);
  }
  return new _t(i, this._parents).order();
}
function Ou(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function zu() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Du() {
  return Array.from(this);
}
function Lu() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function qu() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Fu() {
  return !this.node();
}
function Uu(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Hu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Bu(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Xu(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Yu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Wu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Gu(t, n) {
  var e = We(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Vu : Hu : typeof n == "function" ? e.local ? Wu : Yu : e.local ? Xu : Bu)(e, n));
}
function Ko(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ku(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zu(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Ju(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Qu(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ku : typeof n == "function" ? Ju : Zu)(t, n, e ?? "")) : bn(this.node(), t);
}
function bn(t, n) {
  return t.style.getPropertyValue(n) || Ko(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ju(t) {
  return function() {
    delete this[t];
  };
}
function tl(t, n) {
  return function() {
    this[t] = n;
  };
}
function nl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function el(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ju : typeof n == "function" ? nl : tl)(t, n)) : this.node()[t];
}
function Zo(t) {
  return t.trim().split(/^|\s+/);
}
function ei(t) {
  return t.classList || new Jo(t);
}
function Jo(t) {
  this._node = t, this._names = Zo(t.getAttribute("class") || "");
}
Jo.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Qo(t, n) {
  for (var e = ei(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function jo(t, n) {
  for (var e = ei(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function rl(t) {
  return function() {
    Qo(this, t);
  };
}
function il(t) {
  return function() {
    jo(this, t);
  };
}
function ol(t, n) {
  return function() {
    (n.apply(this, arguments) ? Qo : jo)(this, t);
  };
}
function al(t, n) {
  var e = Zo(t + "");
  if (arguments.length < 2) {
    for (var r = ei(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ol : n ? rl : il)(e, n));
}
function sl() {
  this.textContent = "";
}
function ul(t) {
  return function() {
    this.textContent = t;
  };
}
function ll(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function fl(t) {
  return arguments.length ? this.each(t == null ? sl : (typeof t == "function" ? ll : ul)(t)) : this.node().textContent;
}
function cl() {
  this.innerHTML = "";
}
function hl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function pl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function vl(t) {
  return arguments.length ? this.each(t == null ? cl : (typeof t == "function" ? pl : hl)(t)) : this.node().innerHTML;
}
function dl() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _l() {
  return this.each(dl);
}
function gl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ml() {
  return this.each(gl);
}
function yl(t) {
  var n = typeof t == "function" ? t : Bo(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function wl() {
  return null;
}
function xl(t, n) {
  var e = typeof t == "function" ? t : Bo(t), r = n == null ? wl : typeof n == "function" ? n : ni(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function El() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Sl() {
  return this.each(El);
}
function bl() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ml() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Al(t) {
  return this.select(t ? Ml : bl);
}
function Nl(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function kl(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Tl(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Il(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Rl(t, n, e) {
  return function() {
    var r = this.__on, i, o = kl(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Pl(t, n, e) {
  var r = Tl(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, f = s.length, u; l < f; ++l)
        for (i = 0, u = s[l]; i < o; ++i)
          if ((a = r[i]).type === u.type && a.name === u.name)
            return u.value;
    }
    return;
  }
  for (s = n ? Rl : Il, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ta(t, n, e) {
  var r = Ko(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Cl(t, n) {
  return function() {
    return ta(this, t, n);
  };
}
function $l(t, n) {
  return function() {
    return ta(this, t, n.apply(this, arguments));
  };
}
function Ol(t, n) {
  return this.each((typeof n == "function" ? $l : Cl)(t, n));
}
function* zl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var na = [null];
function _t(t, n) {
  this._groups = t, this._parents = n;
}
function ee() {
  return new _t([[document.documentElement]], na);
}
function Dl() {
  return this;
}
_t.prototype = ee.prototype = {
  constructor: _t,
  select: lu,
  selectAll: pu,
  selectChild: gu,
  selectChildren: xu,
  filter: Eu,
  data: ku,
  enter: Su,
  exit: Iu,
  join: Ru,
  merge: Pu,
  selection: Dl,
  order: Cu,
  sort: $u,
  call: zu,
  nodes: Du,
  node: Lu,
  size: qu,
  empty: Fu,
  each: Uu,
  attr: Gu,
  style: Qu,
  property: el,
  classed: al,
  text: fl,
  html: vl,
  raise: _l,
  lower: ml,
  append: yl,
  insert: xl,
  remove: Sl,
  clone: Al,
  datum: Nl,
  on: Pl,
  dispatch: Ol,
  [Symbol.iterator]: zl
};
function ut(t) {
  return typeof t == "string" ? new _t([[document.querySelector(t)]], [document.documentElement]) : new _t([[t]], na);
}
function Ll(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Jt(t, n) {
  if (t = Ll(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const _r = { capture: !0, passive: !1 };
function gr(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ql(t) {
  var n = t.document.documentElement, e = ut(t).on("dragstart.drag", gr, _r);
  "onselectstart" in n ? e.on("selectstart.drag", gr, _r) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Fl(t, n) {
  var e = t.document.documentElement, r = ut(t).on("dragstart.drag", null);
  n && (r.on("click.drag", gr, _r), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
function ri(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ea(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function re() {
}
var Yn = 0.7, Ie = 1 / Yn, xn = "\\s*([+-]?\\d+)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ul = /^#([0-9a-f]{3,8})$/, Hl = new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`), Vl = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), Bl = new RegExp(`^rgba\\(${xn},${xn},${xn},${Wn}\\)$`), Xl = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Wn}\\)$`), Yl = new RegExp(`^hsl\\(${Wn},${Pt},${Pt}\\)$`), Wl = new RegExp(`^hsla\\(${Wn},${Pt},${Pt},${Wn}\\)$`), Mi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ri(re, Gn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ai,
  // Deprecated! Use color.formatHex.
  formatHex: Ai,
  formatHex8: Gl,
  formatHsl: Kl,
  formatRgb: Ni,
  toString: Ni
});
function Ai() {
  return this.rgb().formatHex();
}
function Gl() {
  return this.rgb().formatHex8();
}
function Kl() {
  return ra(this).formatHsl();
}
function Ni() {
  return this.rgb().formatRgb();
}
function Gn(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ul.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ki(n) : e === 3 ? new ft(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? oe(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? oe(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Hl.exec(t)) ? new ft(n[1], n[2], n[3], 1) : (n = Vl.exec(t)) ? new ft(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Bl.exec(t)) ? oe(n[1], n[2], n[3], n[4]) : (n = Xl.exec(t)) ? oe(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Yl.exec(t)) ? Ri(n[1], n[2] / 100, n[3] / 100, 1) : (n = Wl.exec(t)) ? Ri(n[1], n[2] / 100, n[3] / 100, n[4]) : Mi.hasOwnProperty(t) ? ki(Mi[t]) : t === "transparent" ? new ft(NaN, NaN, NaN, 0) : null;
}
function ki(t) {
  return new ft(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function oe(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new ft(t, n, e, r);
}
function Zl(t) {
  return t instanceof re || (t = Gn(t)), t ? (t = t.rgb(), new ft(t.r, t.g, t.b, t.opacity)) : new ft();
}
function mr(t, n, e, r) {
  return arguments.length === 1 ? Zl(t) : new ft(t, n, e, r ?? 1);
}
function ft(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ri(ft, mr, ea(re, {
  brighter(t) {
    return t = t == null ? Ie : Math.pow(Ie, t), new ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Yn : Math.pow(Yn, t), new ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ft(on(this.r), on(this.g), on(this.b), Re(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ti,
  // Deprecated! Use color.formatHex.
  formatHex: Ti,
  formatHex8: Jl,
  formatRgb: Ii,
  toString: Ii
}));
function Ti() {
  return `#${jt(this.r)}${jt(this.g)}${jt(this.b)}`;
}
function Jl() {
  return `#${jt(this.r)}${jt(this.g)}${jt(this.b)}${jt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ii() {
  const t = Re(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${on(this.r)}, ${on(this.g)}, ${on(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Re(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function on(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function jt(t) {
  return t = on(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ri(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Mt(t, n, e, r);
}
function ra(t) {
  if (t instanceof Mt) return new Mt(t.h, t.s, t.l, t.opacity);
  if (t instanceof re || (t = Gn(t)), !t) return new Mt();
  if (t instanceof Mt) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Mt(a, s, l, t.opacity);
}
function Ql(t, n, e, r) {
  return arguments.length === 1 ? ra(t) : new Mt(t, n, e, r ?? 1);
}
function Mt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ri(Mt, Ql, ea(re, {
  brighter(t) {
    return t = t == null ? Ie : Math.pow(Ie, t), new Mt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Yn : Math.pow(Yn, t), new Mt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new ft(
      nr(t >= 240 ? t - 240 : t + 120, i, r),
      nr(t, i, r),
      nr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Mt(Pi(this.h), ae(this.s), ae(this.l), Re(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Re(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Pi(this.h)}, ${ae(this.s) * 100}%, ${ae(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Pi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ae(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function nr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ia = (t) => () => t;
function jl(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function tf(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function nf(t) {
  return (t = +t) == 1 ? oa : function(n, e) {
    return e - n ? tf(n, e, t) : ia(isNaN(n) ? e : n);
  };
}
function oa(t, n) {
  var e = n - t;
  return e ? jl(t, e) : ia(isNaN(t) ? n : t);
}
const Ci = (function t(n) {
  var e = nf(n);
  function r(i, o) {
    var a = e((i = mr(i)).r, (o = mr(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), f = oa(i.opacity, o.opacity);
    return function(u) {
      return i.r = a(u), i.g = s(u), i.b = l(u), i.opacity = f(u), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Yt(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
var yr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, er = new RegExp(yr.source, "g");
function ef(t) {
  return function() {
    return t;
  };
}
function rf(t) {
  return function(n) {
    return t(n) + "";
  };
}
function of(t, n) {
  var e = yr.lastIndex = er.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = yr.exec(t)) && (i = er.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: Yt(r, i) })), e = er.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? rf(l[0].x) : ef(n) : (n = l.length, function(f) {
    for (var u = 0, c; u < n; ++u) s[(c = l[u]).i] = c.x(f);
    return s.join("");
  });
}
var $i = 180 / Math.PI, wr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function aa(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * $i,
    skewX: Math.atan(l) * $i,
    scaleX: a,
    scaleY: s
  };
}
var se;
function af(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? wr : aa(n.a, n.b, n.c, n.d, n.e, n.f);
}
function sf(t) {
  return t == null || (se || (se = document.createElementNS("http://www.w3.org/2000/svg", "g")), se.setAttribute("transform", t), !(t = se.transform.baseVal.consolidate())) ? wr : (t = t.matrix, aa(t.a, t.b, t.c, t.d, t.e, t.f));
}
function sa(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, u, c, h, p, d) {
    if (f !== c || u !== h) {
      var w = p.push("translate(", null, n, null, e);
      d.push({ i: w - 4, x: Yt(f, c) }, { i: w - 2, x: Yt(u, h) });
    } else (c || h) && p.push("translate(" + c + n + h + e);
  }
  function a(f, u, c, h) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: Yt(f, u) })) : u && c.push(i(c) + "rotate(" + u + r);
  }
  function s(f, u, c, h) {
    f !== u ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: Yt(f, u) }) : u && c.push(i(c) + "skewX(" + u + r);
  }
  function l(f, u, c, h, p, d) {
    if (f !== c || u !== h) {
      var w = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: w - 4, x: Yt(f, c) }, { i: w - 2, x: Yt(u, h) });
    } else (c !== 1 || h !== 1) && p.push(i(p) + "scale(" + c + "," + h + ")");
  }
  return function(f, u) {
    var c = [], h = [];
    return f = t(f), u = t(u), o(f.translateX, f.translateY, u.translateX, u.translateY, c, h), a(f.rotate, u.rotate, c, h), s(f.skewX, u.skewX, c, h), l(f.scaleX, f.scaleY, u.scaleX, u.scaleY, c, h), f = u = null, function(p) {
      for (var d = -1, w = h.length, y; ++d < w; ) c[(y = h[d]).i] = y.x(p);
      return c.join("");
    };
  };
}
var uf = sa(af, "px, ", "px)", "deg)"), lf = sa(sf, ", ", ")", ")"), ff = 1e-12;
function Oi(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function cf(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function hf(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const pf = (function t(n, e, r) {
  function i(o, a) {
    var s = o[0], l = o[1], f = o[2], u = a[0], c = a[1], h = a[2], p = u - s, d = c - l, w = p * p + d * d, y, x;
    if (w < ff)
      x = Math.log(h / f) / n, y = function(z) {
        return [
          s + z * p,
          l + z * d,
          f * Math.exp(n * z * x)
        ];
      };
    else {
      var m = Math.sqrt(w), E = (h * h - f * f + r * w) / (2 * f * e * m), b = (h * h - f * f - r * w) / (2 * h * e * m), T = Math.log(Math.sqrt(E * E + 1) - E), I = Math.log(Math.sqrt(b * b + 1) - b);
      x = (I - T) / n, y = function(z) {
        var O = z * x, k = Oi(T), A = f / (e * m) * (k * hf(n * O + T) - cf(T));
        return [
          s + A * p,
          l + A * d,
          f * k / Oi(n * O + T)
        ];
      };
    }
    return y.duration = x * 1e3 * n / Math.SQRT2, y;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), s = a * a, l = s * s;
    return t(a, s, l);
  }, i;
})(Math.SQRT2, 2, 4);
var Mn = 0, On = 0, Cn = 0, ua = 1e3, Pe, zn, Ce = 0, sn = 0, Ge = 0, Kn = typeof performance == "object" && performance.now ? performance : Date, la = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ii() {
  return sn || (la(vf), sn = Kn.now() + Ge);
}
function vf() {
  sn = 0;
}
function $e() {
  this._call = this._time = this._next = null;
}
$e.prototype = fa.prototype = {
  constructor: $e,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? ii() : +e) + (n == null ? 0 : +n), !this._next && zn !== this && (zn ? zn._next = this : Pe = this, zn = this), this._call = t, this._time = e, xr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xr());
  }
};
function fa(t, n, e) {
  var r = new $e();
  return r.restart(t, n, e), r;
}
function df() {
  ii(), ++Mn;
  for (var t = Pe, n; t; )
    (n = sn - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Mn;
}
function zi() {
  sn = (Ce = Kn.now()) + Ge, Mn = On = 0;
  try {
    df();
  } finally {
    Mn = 0, gf(), sn = 0;
  }
}
function _f() {
  var t = Kn.now(), n = t - Ce;
  n > ua && (Ge -= n, Ce = t);
}
function gf() {
  for (var t, n = Pe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Pe = e);
  zn = t, xr(r);
}
function xr(t) {
  if (!Mn) {
    On && (On = clearTimeout(On));
    var n = t - sn;
    n > 24 ? (t < 1 / 0 && (On = setTimeout(zi, t - Kn.now() - Ge)), Cn && (Cn = clearInterval(Cn))) : (Cn || (Ce = Kn.now(), Cn = setInterval(_f, ua)), Mn = 1, la(zi));
  }
}
function Di(t, n, e) {
  var r = new $e();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var mf = ti("start", "end", "cancel", "interrupt"), yf = [], ca = 0, Li = 1, Er = 2, _e = 3, qi = 4, Sr = 5, ge = 6;
function Ke(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  wf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: mf,
    tween: yf,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ca
  });
}
function oi(t, n) {
  var e = Nt(t, n);
  if (e.state > ca) throw new Error("too late; already scheduled");
  return e;
}
function Ot(t, n) {
  var e = Nt(t, n);
  if (e.state > _e) throw new Error("too late; already running");
  return e;
}
function Nt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function wf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = fa(o, 0, e.time);
  function o(f) {
    e.state = Li, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var u, c, h, p;
    if (e.state !== Li) return l();
    for (u in r)
      if (p = r[u], p.name === e.name) {
        if (p.state === _e) return Di(a);
        p.state === qi ? (p.state = ge, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[u]) : +u < n && (p.state = ge, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[u]);
      }
    if (Di(function() {
      e.state === _e && (e.state = qi, e.timer.restart(s, e.delay, e.time), s(f));
    }), e.state = Er, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Er) {
      for (e.state = _e, i = new Array(h = e.tween.length), u = 0, c = -1; u < h; ++u)
        (p = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = p);
      i.length = c + 1;
    }
  }
  function s(f) {
    for (var u = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(l), e.state = Sr, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, u);
    e.state === Sr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ge, e.timer.stop(), delete r[n];
    for (var f in r) return;
    delete t.__transition;
  }
}
function me(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Er && r.state < Sr, r.state = ge, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function xf(t) {
  return this.each(function() {
    me(this, t);
  });
}
function Ef(t, n) {
  var e, r;
  return function() {
    var i = Ot(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Sf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Ot(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, f = i.length; l < f; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === f && i.push(s);
    }
    o.tween = i;
  };
}
function bf(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Nt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Ef : Sf)(e, t, n));
}
function ai(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Ot(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Nt(i, r).value[n];
  };
}
function ha(t, n) {
  var e;
  return (typeof n == "number" ? Yt : n instanceof Gn ? Ci : (e = Gn(n)) ? (n = e, Ci) : of)(t, n);
}
function Mf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Af(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Nf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function kf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Tf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function If(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Rf(t, n) {
  var e = We(t), r = e === "transform" ? lf : ha;
  return this.attrTween(t, typeof n == "function" ? (e.local ? If : Tf)(e, r, ai(this, "attr." + t, n)) : n == null ? (e.local ? Af : Mf)(e) : (e.local ? kf : Nf)(e, r, n));
}
function Pf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Cf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function $f(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Cf(t, o)), e;
  }
  return i._value = n, i;
}
function Of(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Pf(t, o)), e;
  }
  return i._value = n, i;
}
function zf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = We(t);
  return this.tween(e, (r.local ? $f : Of)(r, n));
}
function Df(t, n) {
  return function() {
    oi(this, t).delay = +n.apply(this, arguments);
  };
}
function Lf(t, n) {
  return n = +n, function() {
    oi(this, t).delay = n;
  };
}
function qf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Df : Lf)(n, t)) : Nt(this.node(), n).delay;
}
function Ff(t, n) {
  return function() {
    Ot(this, t).duration = +n.apply(this, arguments);
  };
}
function Uf(t, n) {
  return n = +n, function() {
    Ot(this, t).duration = n;
  };
}
function Hf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ff : Uf)(n, t)) : Nt(this.node(), n).duration;
}
function Vf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Ot(this, t).ease = n;
  };
}
function Bf(t) {
  var n = this._id;
  return arguments.length ? this.each(Vf(n, t)) : Nt(this.node(), n).ease;
}
function Xf(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Ot(this, t).ease = e;
  };
}
function Yf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Xf(this._id, t));
}
function Wf(t) {
  typeof t != "function" && (t = Yo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, f = 0; f < a; ++f)
      (l = o[f]) && t.call(l, l.__data__, f, o) && s.push(l);
  return new Ut(r, this._parents, this._name, this._id);
}
function Gf(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], f = e[s], u = l.length, c = a[s] = new Array(u), h, p = 0; p < u; ++p)
      (h = l[p] || f[p]) && (c[p] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Ut(a, this._parents, this._name, this._id);
}
function Kf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Zf(t, n, e) {
  var r, i, o = Kf(n) ? oi : Ot;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Jf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Nt(this.node(), e).on.on(t) : this.each(Zf(e, t, n));
}
function Qf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function jf() {
  return this.on("end.remove", Qf(this._id));
}
function tc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ni(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, f = o[a] = new Array(l), u, c, h = 0; h < l; ++h)
      (u = s[h]) && (c = t.call(u, u.__data__, h, s)) && ("__data__" in u && (c.__data__ = u.__data__), f[h] = c, Ke(f[h], n, e, h, f, Nt(u, e)));
  return new Ut(o, this._parents, n, e);
}
function nc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Xo(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], f = l.length, u, c = 0; c < f; ++c)
      if (u = l[c]) {
        for (var h = t.call(u, u.__data__, c, l), p, d = Nt(u, e), w = 0, y = h.length; w < y; ++w)
          (p = h[w]) && Ke(p, n, e, w, h, d);
        o.push(h), a.push(u);
      }
  return new Ut(o, a, n, e);
}
var ec = ee.prototype.constructor;
function rc() {
  return new ec(this._groups, this._parents);
}
function ic(t, n) {
  var e, r, i;
  return function() {
    var o = bn(this, t), a = (this.style.removeProperty(t), bn(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function pa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function oc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = bn(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ac(t, n, e) {
  var r, i, o;
  return function() {
    var a = bn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), bn(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function sc(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = Ot(this, t), f = l.on, u = l.value[o] == null ? s || (s = pa(n)) : void 0;
    (f !== e || i !== u) && (r = (e = f).copy()).on(a, i = u), l.on = r;
  };
}
function uc(t, n, e) {
  var r = (t += "") == "transform" ? uf : ha;
  return n == null ? this.styleTween(t, ic(t, r)).on("end.style." + t, pa(t)) : typeof n == "function" ? this.styleTween(t, ac(t, r, ai(this, "style." + t, n))).each(sc(this._id, t)) : this.styleTween(t, oc(t, r, n), e).on("end.style." + t, null);
}
function lc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function fc(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && lc(t, a, e)), r;
  }
  return o._value = n, o;
}
function cc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, fc(t, n, e ?? ""));
}
function hc(t) {
  return function() {
    this.textContent = t;
  };
}
function pc(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function vc(t) {
  return this.tween("text", typeof t == "function" ? pc(ai(this, "text", t)) : hc(t == null ? "" : t + ""));
}
function dc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function _c(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && dc(i)), n;
  }
  return r._value = t, r;
}
function gc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, _c(t));
}
function mc() {
  for (var t = this._name, n = this._id, e = va(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, f = 0; f < s; ++f)
      if (l = a[f]) {
        var u = Nt(l, n);
        Ke(l, t, e, f, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Ut(r, this._parents, t, e);
}
function yc() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var f = Ot(this, r), u = f.on;
      u !== t && (n = (t = u).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), f.on = n;
    }), i === 0 && o();
  });
}
var wc = 0;
function Ut(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function va() {
  return ++wc;
}
var zt = ee.prototype;
Ut.prototype = {
  constructor: Ut,
  select: tc,
  selectAll: nc,
  selectChild: zt.selectChild,
  selectChildren: zt.selectChildren,
  filter: Wf,
  merge: Gf,
  selection: rc,
  transition: mc,
  call: zt.call,
  nodes: zt.nodes,
  node: zt.node,
  size: zt.size,
  empty: zt.empty,
  each: zt.each,
  on: Jf,
  attr: Rf,
  attrTween: zf,
  style: uc,
  styleTween: cc,
  text: vc,
  textTween: gc,
  remove: jf,
  tween: bf,
  delay: qf,
  duration: Hf,
  ease: Bf,
  easeVarying: Yf,
  end: yc,
  [Symbol.iterator]: zt[Symbol.iterator]
};
function xc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ec = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: xc
};
function Sc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function bc(t) {
  var n, e;
  t instanceof Ut ? (n = t._id, t = t._name) : (n = va(), (e = Ec).time = ii(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, f = 0; f < s; ++f)
      (l = a[f]) && Ke(l, t, n, f, a, e || Sc(l, n));
  return new Ut(r, this._parents, t, n);
}
ee.prototype.interrupt = xf;
ee.prototype.transition = bc;
var B = 1e-6, F = Math.PI, ct = F / 2, Fi = F / 4, gt = F * 2, vt = 180 / F, nt = F / 180, W = Math.abs, da = Math.atan, Zn = Math.atan2, Z = Math.cos, Mc = Math.exp, Ac = Math.log, J = Math.sin, Nc = Math.sign || function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}, hn = Math.sqrt, kc = Math.tan;
function Tc(t) {
  return t > 1 ? 0 : t < -1 ? F : Math.acos(t);
}
function Jn(t) {
  return t > 1 ? ct : t < -1 ? -ct : Math.asin(t);
}
function xt() {
}
function Oe(t, n) {
  t && Hi.hasOwnProperty(t.type) && Hi[t.type](t, n);
}
var Ui = {
  Feature: function(t, n) {
    Oe(t.geometry, n);
  },
  FeatureCollection: function(t, n) {
    for (var e = t.features, r = -1, i = e.length; ++r < i; ) Oe(e[r].geometry, n);
  }
}, Hi = {
  Sphere: function(t, n) {
    n.sphere();
  },
  Point: function(t, n) {
    t = t.coordinates, n.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) t = e[r], n.point(t[0], t[1], t[2]);
  },
  LineString: function(t, n) {
    br(t.coordinates, n, 0);
  },
  MultiLineString: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) br(e[r], n, 0);
  },
  Polygon: function(t, n) {
    Vi(t.coordinates, n);
  },
  MultiPolygon: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Vi(e[r], n);
  },
  GeometryCollection: function(t, n) {
    for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) Oe(e[r], n);
  }
};
function br(t, n, e) {
  var r = -1, i = t.length - e, o;
  for (n.lineStart(); ++r < i; ) o = t[r], n.point(o[0], o[1], o[2]);
  n.lineEnd();
}
function Vi(t, n) {
  var e = -1, r = t.length;
  for (n.polygonStart(); ++e < r; ) br(t[e], n, 1);
  n.polygonEnd();
}
function _n(t, n) {
  t && Ui.hasOwnProperty(t.type) ? Ui[t.type](t, n) : Oe(t, n);
}
function Mr(t) {
  return [Zn(t[1], t[0]), Jn(t[2])];
}
function An(t) {
  var n = t[0], e = t[1], r = Z(e);
  return [r * Z(n), r * J(n), J(e)];
}
function ue(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function ze(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function rr(t, n) {
  t[0] += n[0], t[1] += n[1], t[2] += n[2];
}
function le(t, n) {
  return [t[0] * n, t[1] * n, t[2] * n];
}
function Ar(t) {
  var n = hn(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= n, t[1] /= n, t[2] /= n;
}
function Nr(t, n) {
  function e(r, i) {
    return r = t(r, i), n(r[0], r[1]);
  }
  return t.invert && n.invert && (e.invert = function(r, i) {
    return r = n.invert(r, i), r && t.invert(r[0], r[1]);
  }), e;
}
function kr(t, n) {
  return W(t) > F && (t -= Math.round(t / gt) * gt), [t, n];
}
kr.invert = kr;
function _a(t, n, e) {
  return (t %= gt) ? n || e ? Nr(Xi(t), Yi(n, e)) : Xi(t) : n || e ? Yi(n, e) : kr;
}
function Bi(t) {
  return function(n, e) {
    return n += t, W(n) > F && (n -= Math.round(n / gt) * gt), [n, e];
  };
}
function Xi(t) {
  var n = Bi(t);
  return n.invert = Bi(-t), n;
}
function Yi(t, n) {
  var e = Z(t), r = J(t), i = Z(n), o = J(n);
  function a(s, l) {
    var f = Z(l), u = Z(s) * f, c = J(s) * f, h = J(l), p = h * e + u * r;
    return [
      Zn(c * i - p * o, u * e - h * r),
      Jn(p * i + c * o)
    ];
  }
  return a.invert = function(s, l) {
    var f = Z(l), u = Z(s) * f, c = J(s) * f, h = J(l), p = h * i - c * o;
    return [
      Zn(c * i + h * o, u * e + p * r),
      Jn(p * e - u * r)
    ];
  }, a;
}
function Ic(t) {
  t = _a(t[0] * nt, t[1] * nt, t.length > 2 ? t[2] * nt : 0);
  function n(e) {
    return e = t(e[0] * nt, e[1] * nt), e[0] *= vt, e[1] *= vt, e;
  }
  return n.invert = function(e) {
    return e = t.invert(e[0] * nt, e[1] * nt), e[0] *= vt, e[1] *= vt, e;
  }, n;
}
function Rc(t, n, e, r, i, o) {
  if (e) {
    var a = Z(n), s = J(n), l = r * e;
    i == null ? (i = n + r * gt, o = n - l / 2) : (i = Wi(a, i), o = Wi(a, o), (r > 0 ? i < o : i > o) && (i += r * gt));
    for (var f, u = i; r > 0 ? u > o : u < o; u -= l)
      f = Mr([a, -s * Z(u), -s * J(u)]), t.point(f[0], f[1]);
  }
}
function Wi(t, n) {
  n = An(n), n[0] -= t, Ar(n);
  var e = Tc(-n[1]);
  return ((-n[2] < 0 ? -e : e) + gt - B) % gt;
}
function ga() {
  var t = [], n;
  return {
    point: function(e, r, i) {
      n.push([e, r, i]);
    },
    lineStart: function() {
      t.push(n = []);
    },
    lineEnd: xt,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var e = t;
      return t = [], n = null, e;
    }
  };
}
function ye(t, n) {
  return W(t[0] - n[0]) < B && W(t[1] - n[1]) < B;
}
function fe(t, n, e, r) {
  this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function ma(t, n, e, r, i) {
  var o = [], a = [], s, l;
  if (t.forEach(function(d) {
    if (!((w = d.length - 1) <= 0)) {
      var w, y = d[0], x = d[w], m;
      if (ye(y, x)) {
        if (!y[2] && !x[2]) {
          for (i.lineStart(), s = 0; s < w; ++s) i.point((y = d[s])[0], y[1]);
          i.lineEnd();
          return;
        }
        x[0] += 2 * B;
      }
      o.push(m = new fe(y, d, null, !0)), a.push(m.o = new fe(y, null, m, !1)), o.push(m = new fe(x, d, null, !1)), a.push(m.o = new fe(x, null, m, !0));
    }
  }), !!o.length) {
    for (a.sort(n), Gi(o), Gi(a), s = 0, l = a.length; s < l; ++s)
      a[s].e = e = !e;
    for (var f = o[0], u, c; ; ) {
      for (var h = f, p = !0; h.v; ) if ((h = h.n) === f) return;
      u = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = !0, h.e) {
          if (p)
            for (s = 0, l = u.length; s < l; ++s) i.point((c = u[s])[0], c[1]);
          else
            r(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (p)
            for (u = h.p.z, s = u.length - 1; s >= 0; --s) i.point((c = u[s])[0], c[1]);
          else
            r(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, u = h.z, p = !p;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function Gi(t) {
  if (n = t.length) {
    for (var n, e = 0, r = t[0], i; ++e < n; )
      r.n = i = t[e], i.p = r, r = i;
    r.n = i = t[0], i.p = r;
  }
}
function ir(t) {
  return W(t[0]) <= F ? t[0] : Nc(t[0]) * ((W(t[0]) + F) % gt - F);
}
function Pc(t, n) {
  var e = ir(n), r = n[1], i = J(r), o = [J(e), -Z(e), 0], a = 0, s = 0, l = new an();
  i === 1 ? r = ct + B : i === -1 && (r = -ct - B);
  for (var f = 0, u = t.length; f < u; ++f)
    if (h = (c = t[f]).length)
      for (var c, h, p = c[h - 1], d = ir(p), w = p[1] / 2 + Fi, y = J(w), x = Z(w), m = 0; m < h; ++m, d = b, y = I, x = z, p = E) {
        var E = c[m], b = ir(E), T = E[1] / 2 + Fi, I = J(T), z = Z(T), O = b - d, k = O >= 0 ? 1 : -1, A = k * O, N = A > F, D = y * I;
        if (l.add(Zn(D * k * J(A), x * z + D * Z(A))), a += N ? O + k * gt : O, N ^ d >= e ^ b >= e) {
          var C = ze(An(p), An(E));
          Ar(C);
          var v = ze(o, C);
          Ar(v);
          var _ = (N ^ O >= 0 ? -1 : 1) * Jn(v[2]);
          (r > _ || r === _ && (C[0] || C[1])) && (s += N ^ O >= 0 ? 1 : -1);
        }
      }
  return (a < -B || a < B && l < -1e-12) ^ s & 1;
}
function ya(t, n, e, r) {
  return function(i) {
    var o = n(i), a = ga(), s = n(a), l = !1, f, u, c, h = {
      point: p,
      lineStart: w,
      lineEnd: y,
      polygonStart: function() {
        h.point = x, h.lineStart = m, h.lineEnd = E, u = [], f = [];
      },
      polygonEnd: function() {
        h.point = p, h.lineStart = w, h.lineEnd = y, u = Vo(u);
        var b = Pc(f, r);
        u.length ? (l || (i.polygonStart(), l = !0), ma(u, $c, b, e, i)) : b && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), u = f = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(b, T) {
      t(b, T) && i.point(b, T);
    }
    function d(b, T) {
      o.point(b, T);
    }
    function w() {
      h.point = d, o.lineStart();
    }
    function y() {
      h.point = p, o.lineEnd();
    }
    function x(b, T) {
      c.push([b, T]), s.point(b, T);
    }
    function m() {
      s.lineStart(), c = [];
    }
    function E() {
      x(c[0][0], c[0][1]), s.lineEnd();
      var b = s.clean(), T = a.result(), I, z = T.length, O, k, A;
      if (c.pop(), f.push(c), c = null, !!z) {
        if (b & 1) {
          if (k = T[0], (O = k.length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), I = 0; I < O; ++I) i.point((A = k[I])[0], A[1]);
            i.lineEnd();
          }
          return;
        }
        z > 1 && b & 2 && T.push(T.pop().concat(T.shift())), u.push(T.filter(Cc));
      }
    }
    return h;
  };
}
function Cc(t) {
  return t.length > 1;
}
function $c(t, n) {
  return ((t = t.x)[0] < 0 ? t[1] - ct - B : ct - t[1]) - ((n = n.x)[0] < 0 ? n[1] - ct - B : ct - n[1]);
}
const Ki = ya(
  function() {
    return !0;
  },
  Oc,
  Dc,
  [-F, -ct]
);
function Oc(t) {
  var n = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      t.lineStart(), i = 1;
    },
    point: function(o, a) {
      var s = o > 0 ? F : -F, l = W(o - n);
      W(l - F) < B ? (t.point(n, e = (e + a) / 2 > 0 ? ct : -ct), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), t.point(o, e), i = 0) : r !== s && l >= F && (W(n - r) < B && (n -= r * B), W(o - s) < B && (o -= s * B), e = zc(n, e, o, a), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), i = 0), t.point(n = o, e = a), r = s;
    },
    lineEnd: function() {
      t.lineEnd(), n = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function zc(t, n, e, r) {
  var i, o, a = J(t - e);
  return W(a) > B ? da((J(n) * (o = Z(r)) * J(e) - J(r) * (i = Z(n)) * J(t)) / (i * o * a)) : (n + r) / 2;
}
function Dc(t, n, e, r) {
  var i;
  if (t == null)
    i = e * ct, r.point(-F, i), r.point(0, i), r.point(F, i), r.point(F, 0), r.point(F, -i), r.point(0, -i), r.point(-F, -i), r.point(-F, 0), r.point(-F, i);
  else if (W(t[0] - n[0]) > B) {
    var o = t[0] < n[0] ? F : -F;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(n[0], n[1]);
}
function Lc(t) {
  var n = Z(t), e = 2 * nt, r = n > 0, i = W(n) > B;
  function o(u, c, h, p) {
    Rc(p, t, e, h, u, c);
  }
  function a(u, c) {
    return Z(u) * Z(c) > n;
  }
  function s(u) {
    var c, h, p, d, w;
    return {
      lineStart: function() {
        d = p = !1, w = 1;
      },
      point: function(y, x) {
        var m = [y, x], E, b = a(y, x), T = r ? b ? 0 : f(y, x) : b ? f(y + (y < 0 ? F : -F), x) : 0;
        if (!c && (d = p = b) && u.lineStart(), b !== p && (E = l(c, m), (!E || ye(c, E) || ye(m, E)) && (m[2] = 1)), b !== p)
          w = 0, b ? (u.lineStart(), E = l(m, c), u.point(E[0], E[1])) : (E = l(c, m), u.point(E[0], E[1], 2), u.lineEnd()), c = E;
        else if (i && c && r ^ b) {
          var I;
          !(T & h) && (I = l(m, c, !0)) && (w = 0, r ? (u.lineStart(), u.point(I[0][0], I[0][1]), u.point(I[1][0], I[1][1]), u.lineEnd()) : (u.point(I[1][0], I[1][1]), u.lineEnd(), u.lineStart(), u.point(I[0][0], I[0][1], 3)));
        }
        b && (!c || !ye(c, m)) && u.point(m[0], m[1]), c = m, p = b, h = T;
      },
      lineEnd: function() {
        p && u.lineEnd(), c = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return w | (d && p) << 1;
      }
    };
  }
  function l(u, c, h) {
    var p = An(u), d = An(c), w = [1, 0, 0], y = ze(p, d), x = ue(y, y), m = y[0], E = x - m * m;
    if (!E) return !h && u;
    var b = n * x / E, T = -n * m / E, I = ze(w, y), z = le(w, b), O = le(y, T);
    rr(z, O);
    var k = I, A = ue(z, k), N = ue(k, k), D = A * A - N * (ue(z, z) - 1);
    if (!(D < 0)) {
      var C = hn(D), v = le(k, (-A - C) / N);
      if (rr(v, z), v = Mr(v), !h) return v;
      var _ = u[0], g = c[0], S = u[1], M = c[1], R;
      g < _ && (R = _, _ = g, g = R);
      var $ = g - _, L = W($ - F) < B, q = L || $ < B;
      if (!L && M < S && (R = S, S = M, M = R), q ? L ? S + M > 0 ^ v[1] < (W(v[0] - _) < B ? S : M) : S <= v[1] && v[1] <= M : $ > F ^ (_ <= v[0] && v[0] <= g)) {
        var G = le(k, (-A + C) / N);
        return rr(G, z), [v, Mr(G)];
      }
    }
  }
  function f(u, c) {
    var h = r ? t : F - t, p = 0;
    return u < -h ? p |= 1 : u > h && (p |= 2), c < -h ? p |= 4 : c > h && (p |= 8), p;
  }
  return ya(a, s, o, r ? [0, -t] : [-F, t - F]);
}
function qc(t, n, e, r, i, o) {
  var a = t[0], s = t[1], l = n[0], f = n[1], u = 0, c = 1, h = l - a, p = f - s, d;
  if (d = e - a, !(!h && d > 0)) {
    if (d /= h, h < 0) {
      if (d < u) return;
      d < c && (c = d);
    } else if (h > 0) {
      if (d > c) return;
      d > u && (u = d);
    }
    if (d = i - a, !(!h && d < 0)) {
      if (d /= h, h < 0) {
        if (d > c) return;
        d > u && (u = d);
      } else if (h > 0) {
        if (d < u) return;
        d < c && (c = d);
      }
      if (d = r - s, !(!p && d > 0)) {
        if (d /= p, p < 0) {
          if (d < u) return;
          d < c && (c = d);
        } else if (p > 0) {
          if (d > c) return;
          d > u && (u = d);
        }
        if (d = o - s, !(!p && d < 0)) {
          if (d /= p, p < 0) {
            if (d > c) return;
            d > u && (u = d);
          } else if (p > 0) {
            if (d < u) return;
            d < c && (c = d);
          }
          return u > 0 && (t[0] = a + u * h, t[1] = s + u * p), c < 1 && (n[0] = a + c * h, n[1] = s + c * p), !0;
        }
      }
    }
  }
}
var Dn = 1e9, ce = -Dn;
function Fc(t, n, e, r) {
  function i(f, u) {
    return t <= f && f <= e && n <= u && u <= r;
  }
  function o(f, u, c, h) {
    var p = 0, d = 0;
    if (f == null || (p = a(f, c)) !== (d = a(u, c)) || l(f, u) < 0 ^ c > 0)
      do
        h.point(p === 0 || p === 3 ? t : e, p > 1 ? r : n);
      while ((p = (p + c + 4) % 4) !== d);
    else
      h.point(u[0], u[1]);
  }
  function a(f, u) {
    return W(f[0] - t) < B ? u > 0 ? 0 : 3 : W(f[0] - e) < B ? u > 0 ? 2 : 1 : W(f[1] - n) < B ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function s(f, u) {
    return l(f.x, u.x);
  }
  function l(f, u) {
    var c = a(f, 1), h = a(u, 1);
    return c !== h ? c - h : c === 0 ? u[1] - f[1] : c === 1 ? f[0] - u[0] : c === 2 ? f[1] - u[1] : u[0] - f[0];
  }
  return function(f) {
    var u = f, c = ga(), h, p, d, w, y, x, m, E, b, T, I, z = {
      point: O,
      lineStart: D,
      lineEnd: C,
      polygonStart: A,
      polygonEnd: N
    };
    function O(_, g) {
      i(_, g) && u.point(_, g);
    }
    function k() {
      for (var _ = 0, g = 0, S = p.length; g < S; ++g)
        for (var M = p[g], R = 1, $ = M.length, L = M[0], q, G, X = L[0], j = L[1]; R < $; ++R)
          q = X, G = j, L = M[R], X = L[0], j = L[1], G <= r ? j > r && (X - q) * (r - G) > (j - G) * (t - q) && ++_ : j <= r && (X - q) * (r - G) < (j - G) * (t - q) && --_;
      return _;
    }
    function A() {
      u = c, h = [], p = [], I = !0;
    }
    function N() {
      var _ = k(), g = I && _, S = (h = Vo(h)).length;
      (g || S) && (f.polygonStart(), g && (f.lineStart(), o(null, null, 1, f), f.lineEnd()), S && ma(h, s, _, o, f), f.polygonEnd()), u = f, h = p = d = null;
    }
    function D() {
      z.point = v, p && p.push(d = []), T = !0, b = !1, m = E = NaN;
    }
    function C() {
      h && (v(w, y), x && b && c.rejoin(), h.push(c.result())), z.point = O, b && u.lineEnd();
    }
    function v(_, g) {
      var S = i(_, g);
      if (p && d.push([_, g]), T)
        w = _, y = g, x = S, T = !1, S && (u.lineStart(), u.point(_, g));
      else if (S && b) u.point(_, g);
      else {
        var M = [m = Math.max(ce, Math.min(Dn, m)), E = Math.max(ce, Math.min(Dn, E))], R = [_ = Math.max(ce, Math.min(Dn, _)), g = Math.max(ce, Math.min(Dn, g))];
        qc(M, R, t, n, e, r) ? (b || (u.lineStart(), u.point(M[0], M[1])), u.point(R[0], R[1]), S || u.lineEnd(), I = !1) : S && (u.lineStart(), u.point(_, g), I = !1);
      }
      m = _, E = g, b = S;
    }
    return z;
  };
}
const Tr = (t) => t;
var or = new an(), Ir = new an(), wa, xa, Rr, Pr, Lt = {
  point: xt,
  lineStart: xt,
  lineEnd: xt,
  polygonStart: function() {
    Lt.lineStart = Uc, Lt.lineEnd = Vc;
  },
  polygonEnd: function() {
    Lt.lineStart = Lt.lineEnd = Lt.point = xt, or.add(W(Ir)), Ir = new an();
  },
  result: function() {
    var t = or / 2;
    return or = new an(), t;
  }
};
function Uc() {
  Lt.point = Hc;
}
function Hc(t, n) {
  Lt.point = Ea, wa = Rr = t, xa = Pr = n;
}
function Ea(t, n) {
  Ir.add(Pr * t - Rr * n), Rr = t, Pr = n;
}
function Vc() {
  Ea(wa, xa);
}
var Nn = 1 / 0, De = Nn, Qn = -Nn, Le = Qn, qe = {
  point: Bc,
  lineStart: xt,
  lineEnd: xt,
  polygonStart: xt,
  polygonEnd: xt,
  result: function() {
    var t = [[Nn, De], [Qn, Le]];
    return Qn = Le = -(De = Nn = 1 / 0), t;
  }
};
function Bc(t, n) {
  t < Nn && (Nn = t), t > Qn && (Qn = t), n < De && (De = n), n > Le && (Le = n);
}
var Cr = 0, $r = 0, Ln = 0, Fe = 0, Ue = 0, yn = 0, Or = 0, zr = 0, qn = 0, Sa, ba, It, Rt, wt = {
  point: un,
  lineStart: Zi,
  lineEnd: Ji,
  polygonStart: function() {
    wt.lineStart = Wc, wt.lineEnd = Gc;
  },
  polygonEnd: function() {
    wt.point = un, wt.lineStart = Zi, wt.lineEnd = Ji;
  },
  result: function() {
    var t = qn ? [Or / qn, zr / qn] : yn ? [Fe / yn, Ue / yn] : Ln ? [Cr / Ln, $r / Ln] : [NaN, NaN];
    return Cr = $r = Ln = Fe = Ue = yn = Or = zr = qn = 0, t;
  }
};
function un(t, n) {
  Cr += t, $r += n, ++Ln;
}
function Zi() {
  wt.point = Xc;
}
function Xc(t, n) {
  wt.point = Yc, un(It = t, Rt = n);
}
function Yc(t, n) {
  var e = t - It, r = n - Rt, i = hn(e * e + r * r);
  Fe += i * (It + t) / 2, Ue += i * (Rt + n) / 2, yn += i, un(It = t, Rt = n);
}
function Ji() {
  wt.point = un;
}
function Wc() {
  wt.point = Kc;
}
function Gc() {
  Ma(Sa, ba);
}
function Kc(t, n) {
  wt.point = Ma, un(Sa = It = t, ba = Rt = n);
}
function Ma(t, n) {
  var e = t - It, r = n - Rt, i = hn(e * e + r * r);
  Fe += i * (It + t) / 2, Ue += i * (Rt + n) / 2, yn += i, i = Rt * t - It * n, Or += i * (It + t), zr += i * (Rt + n), qn += i * 3, un(It = t, Rt = n);
}
function Aa(t) {
  this._context = t;
}
Aa.prototype = {
  _radius: 4.5,
  pointRadius: function(t) {
    return this._radius = t, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(t, n) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(t, n), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(t, n);
        break;
      }
      default: {
        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, gt);
        break;
      }
    }
  },
  result: xt
};
var Dr = new an(), ar, Na, ka, Fn, Un, jn = {
  point: xt,
  lineStart: function() {
    jn.point = Zc;
  },
  lineEnd: function() {
    ar && Ta(Na, ka), jn.point = xt;
  },
  polygonStart: function() {
    ar = !0;
  },
  polygonEnd: function() {
    ar = null;
  },
  result: function() {
    var t = +Dr;
    return Dr = new an(), t;
  }
};
function Zc(t, n) {
  jn.point = Ta, Na = Fn = t, ka = Un = n;
}
function Ta(t, n) {
  Fn -= t, Un -= n, Dr.add(hn(Fn * Fn + Un * Un)), Fn = t, Un = n;
}
let Qi, He, ji, to;
class no {
  constructor(n) {
    this._append = n == null ? Ia : Jc(n), this._radius = 4.5, this._ = "";
  }
  pointRadius(n) {
    return this._radius = +n, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(n, e) {
    switch (this._point) {
      case 0: {
        this._append`M${n},${e}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${n},${e}`;
        break;
      }
      default: {
        if (this._append`M${n},${e}`, this._radius !== ji || this._append !== He) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, ji = r, He = this._append, to = this._, this._ = i;
        }
        this._ += to;
        break;
      }
    }
  }
  result() {
    const n = this._;
    return this._ = "", n.length ? n : null;
  }
}
function Ia(t) {
  let n = 1;
  this._ += t[0];
  for (const e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Jc(t) {
  const n = Math.floor(t);
  if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
  if (n > 15) return Ia;
  if (n !== Qi) {
    const e = 10 ** n;
    Qi = n, He = function(i) {
      let o = 1;
      this._ += i[0];
      for (const a = i.length; o < a; ++o)
        this._ += Math.round(arguments[o] * e) / e + i[o];
    };
  }
  return He;
}
function Qc(t, n) {
  let e = 3, r = 4.5, i, o;
  function a(s) {
    return s && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), _n(s, i(o))), o.result();
  }
  return a.area = function(s) {
    return _n(s, i(Lt)), Lt.result();
  }, a.measure = function(s) {
    return _n(s, i(jn)), jn.result();
  }, a.bounds = function(s) {
    return _n(s, i(qe)), qe.result();
  }, a.centroid = function(s) {
    return _n(s, i(wt)), wt.result();
  }, a.projection = function(s) {
    return arguments.length ? (i = s == null ? (t = null, Tr) : (t = s).stream, a) : t;
  }, a.context = function(s) {
    return arguments.length ? (o = s == null ? (n = null, new no(e)) : new Aa(n = s), typeof r != "function" && o.pointRadius(r), a) : n;
  }, a.pointRadius = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : (o.pointRadius(+s), +s), a) : r;
  }, a.digits = function(s) {
    if (!arguments.length) return e;
    if (s == null) e = null;
    else {
      const l = Math.floor(s);
      if (!(l >= 0)) throw new RangeError(`invalid digits: ${s}`);
      e = l;
    }
    return n === null && (o = new no(e)), a;
  }, a.projection(t).digits(e).context(n);
}
function si(t) {
  return function(n) {
    var e = new Lr();
    for (var r in t) e[r] = t[r];
    return e.stream = n, e;
  };
}
function Lr() {
}
Lr.prototype = {
  constructor: Lr,
  point: function(t, n) {
    this.stream.point(t, n);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function ui(t, n, e) {
  var r = t.clipExtent && t.clipExtent();
  return t.scale(150).translate([0, 0]), r != null && t.clipExtent(null), _n(e, t.stream(qe)), n(qe.result()), r != null && t.clipExtent(r), t;
}
function Ra(t, n, e) {
  return ui(t, function(r) {
    var i = n[1][0] - n[0][0], o = n[1][1] - n[0][1], a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), s = +n[0][0] + (i - a * (r[1][0] + r[0][0])) / 2, l = +n[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * a).translate([s, l]);
  }, e);
}
function jc(t, n, e) {
  return Ra(t, [[0, 0], n], e);
}
function th(t, n, e) {
  return ui(t, function(r) {
    var i = +n, o = i / (r[1][0] - r[0][0]), a = (i - o * (r[1][0] + r[0][0])) / 2, s = -o * r[0][1];
    t.scale(150 * o).translate([a, s]);
  }, e);
}
function nh(t, n, e) {
  return ui(t, function(r) {
    var i = +n, o = i / (r[1][1] - r[0][1]), a = -o * r[0][0], s = (i - o * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * o).translate([a, s]);
  }, e);
}
var eo = 16, eh = Z(30 * nt);
function ro(t, n) {
  return +n ? ih(t, n) : rh(t);
}
function rh(t) {
  return si({
    point: function(n, e) {
      n = t(n, e), this.stream.point(n[0], n[1]);
    }
  });
}
function ih(t, n) {
  function e(r, i, o, a, s, l, f, u, c, h, p, d, w, y) {
    var x = f - r, m = u - i, E = x * x + m * m;
    if (E > 4 * n && w--) {
      var b = a + h, T = s + p, I = l + d, z = hn(b * b + T * T + I * I), O = Jn(I /= z), k = W(W(I) - 1) < B || W(o - c) < B ? (o + c) / 2 : Zn(T, b), A = t(k, O), N = A[0], D = A[1], C = N - r, v = D - i, _ = m * C - x * v;
      (_ * _ / E > n || W((x * C + m * v) / E - 0.5) > 0.3 || a * h + s * p + l * d < eh) && (e(r, i, o, a, s, l, N, D, k, b /= z, T /= z, I, w, y), y.point(N, D), e(N, D, k, b, T, I, f, u, c, h, p, d, w, y));
    }
  }
  return function(r) {
    var i, o, a, s, l, f, u, c, h, p, d, w, y = {
      point: x,
      lineStart: m,
      lineEnd: b,
      polygonStart: function() {
        r.polygonStart(), y.lineStart = T;
      },
      polygonEnd: function() {
        r.polygonEnd(), y.lineStart = m;
      }
    };
    function x(O, k) {
      O = t(O, k), r.point(O[0], O[1]);
    }
    function m() {
      c = NaN, y.point = E, r.lineStart();
    }
    function E(O, k) {
      var A = An([O, k]), N = t(O, k);
      e(c, h, u, p, d, w, c = N[0], h = N[1], u = O, p = A[0], d = A[1], w = A[2], eo, r), r.point(c, h);
    }
    function b() {
      y.point = x, r.lineEnd();
    }
    function T() {
      m(), y.point = I, y.lineEnd = z;
    }
    function I(O, k) {
      E(i = O, k), o = c, a = h, s = p, l = d, f = w, y.point = E;
    }
    function z() {
      e(c, h, u, p, d, w, o, a, i, s, l, f, eo, r), y.lineEnd = b, b();
    }
    return y;
  };
}
var oh = si({
  point: function(t, n) {
    this.stream.point(t * nt, n * nt);
  }
});
function ah(t) {
  return si({
    point: function(n, e) {
      var r = t(n, e);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function sh(t, n, e, r, i) {
  function o(a, s) {
    return a *= r, s *= i, [n + t * a, e - t * s];
  }
  return o.invert = function(a, s) {
    return [(a - n) / t * r, (e - s) / t * i];
  }, o;
}
function io(t, n, e, r, i, o) {
  if (!o) return sh(t, n, e, r, i);
  var a = Z(o), s = J(o), l = a * t, f = s * t, u = a / t, c = s / t, h = (s * e - a * n) / t, p = (s * n + a * e) / t;
  function d(w, y) {
    return w *= r, y *= i, [l * w - f * y + n, e - f * w - l * y];
  }
  return d.invert = function(w, y) {
    return [r * (u * w - c * y + h), i * (p - c * w - u * y)];
  }, d;
}
function uh(t) {
  return lh(function() {
    return t;
  })();
}
function lh(t) {
  var n, e = 150, r = 480, i = 250, o = 0, a = 0, s = 0, l = 0, f = 0, u, c = 0, h = 1, p = 1, d = null, w = Ki, y = null, x, m, E, b = Tr, T = 0.5, I, z, O, k, A;
  function N(_) {
    return O(_[0] * nt, _[1] * nt);
  }
  function D(_) {
    return _ = O.invert(_[0], _[1]), _ && [_[0] * vt, _[1] * vt];
  }
  N.stream = function(_) {
    return k && A === _ ? k : k = oh(ah(u)(w(I(b(A = _)))));
  }, N.preclip = function(_) {
    return arguments.length ? (w = _, d = void 0, v()) : w;
  }, N.postclip = function(_) {
    return arguments.length ? (b = _, y = x = m = E = null, v()) : b;
  }, N.clipAngle = function(_) {
    return arguments.length ? (w = +_ ? Lc(d = _ * nt) : (d = null, Ki), v()) : d * vt;
  }, N.clipExtent = function(_) {
    return arguments.length ? (b = _ == null ? (y = x = m = E = null, Tr) : Fc(y = +_[0][0], x = +_[0][1], m = +_[1][0], E = +_[1][1]), v()) : y == null ? null : [[y, x], [m, E]];
  }, N.scale = function(_) {
    return arguments.length ? (e = +_, C()) : e;
  }, N.translate = function(_) {
    return arguments.length ? (r = +_[0], i = +_[1], C()) : [r, i];
  }, N.center = function(_) {
    return arguments.length ? (o = _[0] % 360 * nt, a = _[1] % 360 * nt, C()) : [o * vt, a * vt];
  }, N.rotate = function(_) {
    return arguments.length ? (s = _[0] % 360 * nt, l = _[1] % 360 * nt, f = _.length > 2 ? _[2] % 360 * nt : 0, C()) : [s * vt, l * vt, f * vt];
  }, N.angle = function(_) {
    return arguments.length ? (c = _ % 360 * nt, C()) : c * vt;
  }, N.reflectX = function(_) {
    return arguments.length ? (h = _ ? -1 : 1, C()) : h < 0;
  }, N.reflectY = function(_) {
    return arguments.length ? (p = _ ? -1 : 1, C()) : p < 0;
  }, N.precision = function(_) {
    return arguments.length ? (I = ro(z, T = _ * _), v()) : hn(T);
  }, N.fitExtent = function(_, g) {
    return Ra(N, _, g);
  }, N.fitSize = function(_, g) {
    return jc(N, _, g);
  }, N.fitWidth = function(_, g) {
    return th(N, _, g);
  }, N.fitHeight = function(_, g) {
    return nh(N, _, g);
  };
  function C() {
    var _ = io(e, 0, 0, h, p, c).apply(null, n(o, a)), g = io(e, r - _[0], i - _[1], h, p, c);
    return u = _a(s, l, f), z = Nr(n, g), O = Nr(u, z), I = ro(z, T), v();
  }
  function v() {
    return k = A = null, N;
  }
  return function() {
    return n = t.apply(this, arguments), N.invert = n.invert && D, C();
  };
}
function li(t, n) {
  return [t, Ac(kc((ct + n) / 2))];
}
li.invert = function(t, n) {
  return [t, 2 * da(Mc(n)) - ct];
};
function fh() {
  return ch(li).scale(961 / gt);
}
function ch(t) {
  var n = uh(t), e = n.center, r = n.scale, i = n.translate, o = n.clipExtent, a = null, s, l, f;
  n.scale = function(c) {
    return arguments.length ? (r(c), u()) : r();
  }, n.translate = function(c) {
    return arguments.length ? (i(c), u()) : i();
  }, n.center = function(c) {
    return arguments.length ? (e(c), u()) : e();
  }, n.clipExtent = function(c) {
    return arguments.length ? (c == null ? a = s = l = f = null : (a = +c[0][0], s = +c[0][1], l = +c[1][0], f = +c[1][1]), u()) : a == null ? null : [[a, s], [l, f]];
  };
  function u() {
    var c = F * r(), h = n(Ic(n.rotate()).invert([0, 0]));
    return o(a == null ? [[h[0] - c, h[1] - c], [h[0] + c, h[1] + c]] : t === li ? [[Math.max(h[0] - c, a), s], [Math.min(h[0] + c, l), f]] : [[a, Math.max(h[1] - c, s)], [l, Math.min(h[1] + c, f)]]);
  }
  return u();
}
const he = (t) => () => t;
function hh(t, {
  sourceEvent: n,
  target: e,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function qt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
qt.prototype = {
  constructor: qt,
  scale: function(t) {
    return t === 1 ? this : new qt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new qt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var fi = new qt(1, 0, 0);
qt.prototype;
function sr(t) {
  t.stopImmediatePropagation();
}
function $n(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ph(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function vh() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function oo() {
  return this.__zoom || fi;
}
function dh(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function _h() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function gh(t, n, e) {
  var r = t.invertX(n[0][0]) - e[0][0], i = t.invertX(n[1][0]) - e[1][0], o = t.invertY(n[0][1]) - e[0][1], a = t.invertY(n[1][1]) - e[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function mh() {
  var t = ph, n = vh, e = gh, r = dh, i = _h, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = pf, f = ti("start", "zoom", "end"), u, c, h, p = 500, d = 150, w = 0, y = 10;
  function x(v) {
    v.property("__zoom", oo).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", k).on("dblclick.zoom", A).filter(i).on("touchstart.zoom", N).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", C).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(v, _, g, S) {
    var M = v.selection ? v.selection() : v;
    M.property("__zoom", oo), v !== M ? T(v, _, g, S) : M.interrupt().each(function() {
      I(this, arguments).event(S).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, x.scaleBy = function(v, _, g, S) {
    x.scaleTo(v, function() {
      var M = this.__zoom.k, R = typeof _ == "function" ? _.apply(this, arguments) : _;
      return M * R;
    }, g, S);
  }, x.scaleTo = function(v, _, g, S) {
    x.transform(v, function() {
      var M = n.apply(this, arguments), R = this.__zoom, $ = g == null ? b(M) : typeof g == "function" ? g.apply(this, arguments) : g, L = R.invert($), q = typeof _ == "function" ? _.apply(this, arguments) : _;
      return e(E(m(R, q), $, L), M, a);
    }, g, S);
  }, x.translateBy = function(v, _, g, S) {
    x.transform(v, function() {
      return e(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), n.apply(this, arguments), a);
    }, null, S);
  }, x.translateTo = function(v, _, g, S, M) {
    x.transform(v, function() {
      var R = n.apply(this, arguments), $ = this.__zoom, L = S == null ? b(R) : typeof S == "function" ? S.apply(this, arguments) : S;
      return e(fi.translate(L[0], L[1]).scale($.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), R, a);
    }, S, M);
  };
  function m(v, _) {
    return _ = Math.max(o[0], Math.min(o[1], _)), _ === v.k ? v : new qt(_, v.x, v.y);
  }
  function E(v, _, g) {
    var S = _[0] - g[0] * v.k, M = _[1] - g[1] * v.k;
    return S === v.x && M === v.y ? v : new qt(v.k, S, M);
  }
  function b(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function T(v, _, g, S) {
    v.on("start.zoom", function() {
      I(this, arguments).event(S).start();
    }).on("interrupt.zoom end.zoom", function() {
      I(this, arguments).event(S).end();
    }).tween("zoom", function() {
      var M = this, R = arguments, $ = I(M, R).event(S), L = n.apply(M, R), q = g == null ? b(L) : typeof g == "function" ? g.apply(M, R) : g, G = Math.max(L[1][0] - L[0][0], L[1][1] - L[0][1]), X = M.__zoom, j = typeof _ == "function" ? _.apply(M, R) : _, bt = l(X.invert(q).concat(G / X.k), j.invert(q).concat(G / j.k));
      return function(ht) {
        if (ht === 1) ht = j;
        else {
          var Y = bt(ht), ot = G / Y[2];
          ht = new qt(ot, q[0] - Y[0] * ot, q[1] - Y[1] * ot);
        }
        $.zoom(null, ht);
      };
    });
  }
  function I(v, _, g) {
    return !g && v.__zooming || new z(v, _);
  }
  function z(v, _) {
    this.that = v, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = n.apply(v, _), this.taps = 0;
  }
  z.prototype = {
    event: function(v) {
      return v && (this.sourceEvent = v), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(v, _) {
      return this.mouse && v !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && v !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && v !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(v) {
      var _ = ut(this.that).datum();
      f.call(
        v,
        this.that,
        new hh(v, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: f
        }),
        _
      );
    }
  };
  function O(v, ..._) {
    if (!t.apply(this, arguments)) return;
    var g = I(this, _).event(v), S = this.__zoom, M = Math.max(o[0], Math.min(o[1], S.k * Math.pow(2, r.apply(this, arguments)))), R = Jt(v);
    if (g.wheel)
      (g.mouse[0][0] !== R[0] || g.mouse[0][1] !== R[1]) && (g.mouse[1] = S.invert(g.mouse[0] = R)), clearTimeout(g.wheel);
    else {
      if (S.k === M) return;
      g.mouse = [R, S.invert(R)], me(this), g.start();
    }
    $n(v), g.wheel = setTimeout($, d), g.zoom("mouse", e(E(m(S, M), g.mouse[0], g.mouse[1]), g.extent, a));
    function $() {
      g.wheel = null, g.end();
    }
  }
  function k(v, ..._) {
    if (h || !t.apply(this, arguments)) return;
    var g = v.currentTarget, S = I(this, _, !0).event(v), M = ut(v.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", G, !0), R = Jt(v, g), $ = v.clientX, L = v.clientY;
    ql(v.view), sr(v), S.mouse = [R, this.__zoom.invert(R)], me(this), S.start();
    function q(X) {
      if ($n(X), !S.moved) {
        var j = X.clientX - $, bt = X.clientY - L;
        S.moved = j * j + bt * bt > w;
      }
      S.event(X).zoom("mouse", e(E(S.that.__zoom, S.mouse[0] = Jt(X, g), S.mouse[1]), S.extent, a));
    }
    function G(X) {
      M.on("mousemove.zoom mouseup.zoom", null), Fl(X.view, S.moved), $n(X), S.event(X).end();
    }
  }
  function A(v, ..._) {
    if (t.apply(this, arguments)) {
      var g = this.__zoom, S = Jt(v.changedTouches ? v.changedTouches[0] : v, this), M = g.invert(S), R = g.k * (v.shiftKey ? 0.5 : 2), $ = e(E(m(g, R), S, M), n.apply(this, _), a);
      $n(v), s > 0 ? ut(this).transition().duration(s).call(T, $, S, v) : ut(this).call(x.transform, $, S, v);
    }
  }
  function N(v, ..._) {
    if (t.apply(this, arguments)) {
      var g = v.touches, S = g.length, M = I(this, _, v.changedTouches.length === S).event(v), R, $, L, q;
      for (sr(v), $ = 0; $ < S; ++$)
        L = g[$], q = Jt(L, this), q = [q, this.__zoom.invert(q), L.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== q[2] && (M.touch1 = q, M.taps = 0) : (M.touch0 = q, R = !0, M.taps = 1 + !!u);
      u && (u = clearTimeout(u)), R && (M.taps < 2 && (c = q[0], u = setTimeout(function() {
        u = null;
      }, p)), me(this), M.start());
    }
  }
  function D(v, ..._) {
    if (this.__zooming) {
      var g = I(this, _).event(v), S = v.changedTouches, M = S.length, R, $, L, q;
      for ($n(v), R = 0; R < M; ++R)
        $ = S[R], L = Jt($, this), g.touch0 && g.touch0[2] === $.identifier ? g.touch0[0] = L : g.touch1 && g.touch1[2] === $.identifier && (g.touch1[0] = L);
      if ($ = g.that.__zoom, g.touch1) {
        var G = g.touch0[0], X = g.touch0[1], j = g.touch1[0], bt = g.touch1[1], ht = (ht = j[0] - G[0]) * ht + (ht = j[1] - G[1]) * ht, Y = (Y = bt[0] - X[0]) * Y + (Y = bt[1] - X[1]) * Y;
        $ = m($, Math.sqrt(ht / Y)), L = [(G[0] + j[0]) / 2, (G[1] + j[1]) / 2], q = [(X[0] + bt[0]) / 2, (X[1] + bt[1]) / 2];
      } else if (g.touch0) L = g.touch0[0], q = g.touch0[1];
      else return;
      g.zoom("touch", e(E($, L, q), g.extent, a));
    }
  }
  function C(v, ..._) {
    if (this.__zooming) {
      var g = I(this, _).event(v), S = v.changedTouches, M = S.length, R, $;
      for (sr(v), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, p), R = 0; R < M; ++R)
        $ = S[R], g.touch0 && g.touch0[2] === $.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === $.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && ($ = Jt($, this), Math.hypot(c[0] - $[0], c[1] - $[1]) < y)) {
        var L = ut(this).on("dblclick.zoom");
        L && L.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : he(+v), x) : r;
  }, x.filter = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : he(!!v), x) : t;
  }, x.touchable = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : he(!!v), x) : i;
  }, x.extent = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : he([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), x) : n;
  }, x.scaleExtent = function(v) {
    return arguments.length ? (o[0] = +v[0], o[1] = +v[1], x) : [o[0], o[1]];
  }, x.translateExtent = function(v) {
    return arguments.length ? (a[0][0] = +v[0][0], a[1][0] = +v[1][0], a[0][1] = +v[0][1], a[1][1] = +v[1][1], x) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, x.constrain = function(v) {
    return arguments.length ? (e = v, x) : e;
  }, x.duration = function(v) {
    return arguments.length ? (s = +v, x) : s;
  }, x.interpolate = function(v) {
    return arguments.length ? (l = v, x) : l;
  }, x.on = function() {
    var v = f.on.apply(f, arguments);
    return v === f ? x : v;
  }, x.clickDistance = function(v) {
    return arguments.length ? (w = (v = +v) * v, x) : Math.sqrt(w);
  }, x.tapDistance = function(v) {
    return arguments.length ? (y = +v, x) : y;
  }, x;
}
var yh = /* @__PURE__ */ $t('<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>'), wh = /* @__PURE__ */ $t('<div class="error svelte-gouuy3"><p> </p></div>'), xh = /* @__PURE__ */ $t('<div class="interactive-map-container svelte-gouuy3"><!> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>');
function Eh(t, n) {
  po(n, !1);
  let e = /* @__PURE__ */ Wt(), r = [], i = null, o = /* @__PURE__ */ Wt(!0), a = /* @__PURE__ */ Wt(null), s = null, l = null, f = nu(n, "selectedMunicipio", 8, "");
  qo(async () => {
    try {
      const k = await fetch("/municipios.csv");
      if (!k.ok)
        throw new Error(`Erro ao carregar CSV: ${k.status}`);
      const N = (await k.text()).split(`
`), D = N[0].split(";");
      r = N.slice(1).map((_) => {
        const g = _.split(";"), S = {};
        return D.forEach((M, R) => {
          S[M] = g[R];
        }), S;
      }).filter((_) => _.MUNICIPIO).reduce(
        (_, g) => (_[g.MUNICIPIO] = g, _),
        {}
      ), console.log("CSV carregado com", Object.keys(r).length, "municípios"), console.log("Exemplos de municípios no CSV:", Object.keys(r).slice(0, 5)), console.log("Primeiros 5 municípios do CSV:", Object.keys(r).slice(0, 5).map((_) => ({ nome: _, dados: r[_] })));
      const v = await fetch("/PortugalM.geojson");
      if (!v.ok)
        throw new Error(`Erro ao carregar GeoJSON: ${v.status}`);
      i = await v.json(), u(), H(o, !1);
    } catch (k) {
      console.error("Erro ao carregar dados:", k), H(a, k.message), H(o, !1);
    }
  });
  function u() {
    if (!i || !P(e))
      return;
    const k = 800, A = 500;
    ut(P(e)).selectAll("*").remove();
    const N = ut(P(e)).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${k} ${A}`).style("background", "transparent").style("cursor", "grab"), D = mh().scaleExtent([1, 8]).on("zoom", (C) => {
      N.selectAll("path").attr("transform", C.transform);
    });
    N.call(D), l = D;
    try {
      const C = fh().center([-11, 39.2]).scale(6500).translate([k / 2 - 350, A / 2]), v = Qc().projection(C), _ = ut("body").append("div").attr("id", "map-tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px 12px").style("border-radius", "4px").style("font-size", "12px").style("font-family", "'Bai Jamjuree', sans-serif").style("pointer-events", "none").style("z-index", "1000").style("opacity", "0").style("transition", "opacity 0.2s");
      s = N.selectAll("path").data(i.features).enter().append("path").attr("d", v).attr("fill", (g) => {
        const S = g.properties.NAME_2, M = r[S];
        return (g.properties.NAME_2 === "Évora" || g.properties.NAME_2 === "Lisboa" || g.properties.NAME_2 === "Porto") && (console.log("Município:", g.properties.NAME_2, "Dados encontrados:", M), M && console.log("RAI:", M.RAI, "PORTAL:", M.PORTAL)), M && M.RAI?.trim().toUpperCase() === "SIM" && M.PORTAL && M.PORTAL.trim() !== "NAO" && M.PORTAL.trim().startsWith("http") ? "#c44c49" : M && M.RAI?.trim().toUpperCase() === "SIM" ? "rgb(191, 170, 234)" : M && M.PORTAL && M.PORTAL.trim() !== "NAO" && M.PORTAL.trim().startsWith("http") ? "#de866b" : M ? "#f8f1e7" : "#E0E0E0";
      }).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("cursor", "pointer").style("opacity", "1").style("transition", "opacity 0.3s").on("mouseover", function(g, S) {
        ut(this).attr("stroke", "#000").attr("stroke-width", "1.5").style("filter", "brightness(1.1)");
        const M = S.properties.NAME_2 || S.properties.name || "Desconhecido", R = r[M];
        let $ = `<strong>${M}</strong>`;
        if (R) {
          const L = R.RAI?.trim().toUpperCase() === "SIM" ? "Sim" : "Não";
          $ += `<br/>RAI: ${L}`;
          const q = R.PORTAL?.trim();
          q && q !== "NAO" && q.startsWith("http") ? $ += `<br/>Portal: <a href="${q}" target="_blank">${q}</a>` : $ += "<br/>Portal: Não", R.DISTRITO && ($ += `<br/>Distrito: ${R.DISTRITO}`);
        } else
          $ += "<br/><em>Sem dados disponíveis</em>";
        _.style("opacity", "1").html($).style("left", g.pageX + 10 + "px").style("top", g.pageY - 10 + "px");
      }).on("mousemove", function(g) {
        _.style("left", g.pageX + 10 + "px").style("top", g.pageY - 10 + "px");
      }).on("mouseout", function(g, S) {
        const M = r[S.properties.NAME_2 || S.properties.name];
        ut(this).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("filter", "none"), _.style("opacity", "0");
      }).on("click", function(g, S) {
        const M = S.properties.NAME_2 || S.properties.name;
        console.log("Clicou em:", M);
      }), console.log("Mapa criado com sucesso!");
    } catch (C) {
      console.error("Erro ao criar mapa:", C), H(a, C.message);
    }
  }
  function c(k) {
    return k.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function h(k) {
    if (!s)
      return;
    if (!k || k.trim() === "") {
      s.style("opacity", "1");
      return;
    }
    const A = c(k.toLowerCase().trim());
    s.style("opacity", (N) => {
      const D = N.properties.NAME_2 || N.properties.name || "";
      return c(D).includes(A) ? "1" : "0.2";
    });
  }
  function p() {
    l && ut(P(e)).select("svg").transition().duration(300).call(l.scaleBy, 1.5);
  }
  function d() {
    l && ut(P(e)).select("svg").transition().duration(300).call(l.scaleBy, 1 / 1.5);
  }
  function w() {
    l && ut(P(e)).select("svg").transition().duration(300).call(l.transform, fi);
  }
  Ts(() => Lo(f()), () => {
    console.log("selectedMunicipio mudou:", f()), f() !== void 0 && h(f());
  }), Is(), Ho();
  var y = xh(), x = tt(y);
  {
    var m = (k) => {
      var A = yh();
      yt(k, A);
    }, E = (k) => {
      var A = Hs(), N = hr(A);
      {
        var D = (C) => {
          var v = wh(), _ = tt(v), g = tt(_);
          vn(() => dn(g, `Erro ao carregar o mapa: ${P(a) ?? ""}`)), yt(C, v);
        };
        mn(
          N,
          (C) => {
            P(a) && C(D);
          },
          !0
        );
      }
      yt(k, A);
    };
    mn(x, (k) => {
      P(o) ? k(m) : k(E, !1);
    });
  }
  var b = it(x, 2);
  js(b, (k) => H(e, k), () => P(e));
  var T = it(b, 2), I = tt(T), z = it(I, 2), O = it(z, 2);
  Dt("click", I, p), Dt("click", z, d), Dt("click", O, w), yt(t, y), vo();
}
var Sh = /* @__PURE__ */ $t('<li class="svelte-1kq6r5w"> </li>'), bh = /* @__PURE__ */ $t('<ul class="sugestoes svelte-1kq6r5w"></ul>'), Mh = /* @__PURE__ */ $t('Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque svelte-1kq6r5w"> </span>', 1), Ah = /* @__PURE__ */ $t('Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a target="_blank"> </a>', 1), Nh = /* @__PURE__ */ $t('<a target="_blank"> </a>'), kh = /* @__PURE__ */ $t('<div class="result-container svelte-1kq6r5w"><h3 class="svelte-1kq6r5w"> </h3> <table class="result-table svelte-1kq6r5w"><thead><tr class="svelte-1kq6r5w"><th class="svelte-1kq6r5w">RAI</th><th class="svelte-1kq6r5w">Portal</th><th class="svelte-1kq6r5w">Shapefiles</th></tr></thead><tbody><tr class="svelte-1kq6r5w"><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><button class="download-btn svelte-1kq6r5w"><svg class="download-icon svelte-1kq6r5w" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="50" y1="15" x2="50" y2="55"></line><polyline points="35,40 50,55 65,40"></polyline></g><g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"><path d="M20 65 L20 80 L80 80 L80 65"></path></g></svg> <span class="download-text svelte-1kq6r5w">Download <strong>Shapefile</strong> do Município</span></button> <div class="shapefile-info svelte-1kq6r5w">Shapefile disponível, use para contar histórias locais.</div></td></tr></tbody></table> <button class="clear-btn svelte-1kq6r5w">Selecionar outro município</button></div>'), Th = /* @__PURE__ */ $t('<div class="dashboard-container svelte-1kq6r5w"><div class="search-section svelte-1kq6r5w"><h2 class="svelte-1kq6r5w">Dados nos municípios</h2> <div class="search-input-container svelte-1kq6r5w"><input type="text" placeholder="Nome do município..." class="search-input svelte-1kq6r5w"/> <button class="search-btn svelte-1kq6r5w">Pesquisar</button></div> <!> <!></div> <div class="map-section svelte-1kq6r5w"><!></div></div>');
function Ih(t, n) {
  po(n, !1);
  let e = /* @__PURE__ */ Wt(""), r = [], i = /* @__PURE__ */ Wt(null), o = "", a = /* @__PURE__ */ Wt([]), s = /* @__PURE__ */ Wt("");
  qo(async () => {
    try {
      const A = await fetch("/municipios.csv");
      if (!A.ok) {
        o = "Erro ao carregar dados dos municípios";
        return;
      }
      const D = (await A.text()).split(`
`), C = D[0].split(";");
      r = D.slice(1).map((v) => {
        const _ = v.split(";"), g = {};
        return C.forEach((S, M) => {
          g[S] = _[M];
        }), g;
      }).filter((v) => v.MUNICIPIO), console.log("Dados carregados:", r.length);
    } catch (A) {
      console.error("Erro ao carregar dados:", A), o = "Erro ao carregar dados";
    }
  });
  function l(A) {
    H(e, A), H(
      i,
      null
      // Limpa resultado anterior
    ), H(a, []), f(), H(s, A);
  }
  function f() {
    if (P(e).trim()) {
      const A = c(P(e));
      H(i, r.find((N) => c(N.MUNICIPIO || "") === A)), P(i) ? H(s, P(i).MUNICIPIO) : H(
        s,
        A
        // Mantém o destaque parcial
      ), H(a, []);
    } else
      H(s, ""), H(i, null), H(a, []);
  }
  function u(A) {
    A.key === "Enter" && f();
  }
  function c(A) {
    return A.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function h(A) {
    return `${A}.zip`;
  }
  function p(A) {
    const N = h(A), D = `/shapefiles/${N}`, C = document.createElement("a");
    C.href = D, C.download = N, C.target = "_blank", fetch(D, { method: "HEAD" }).then((v) => {
      v.ok ? C.click() : alert("Shapefile não disponível para este município.");
    }).catch(() => {
      alert("Shapefile não disponível para este município.");
    });
  }
  function d() {
    if (P(i) && H(i, null), P(e).length > 0 && r.length > 0) {
      const A = c(P(e));
      H(a, r.filter((N) => {
        const D = N.MUNICIPIO || "";
        return c(D).includes(A);
      }).sort((N, D) => {
        const C = c(N.MUNICIPIO || "").startsWith(A), v = c(D.MUNICIPIO || "").startsWith(A);
        return C && !v ? -1 : !C && v ? 1 : (N.MUNICIPIO || "").localeCompare(D.MUNICIPIO || "");
      }).slice(0, 10)), H(
        s,
        A
        // Usa o termo de busca para destacar
      );
    } else
      H(a, []), H(
        s,
        ""
        // Limpa o destaque no mapa
      );
  }
  Ho();
  var w = Th(), y = tt(w), x = it(tt(y), 2), m = tt(x), E = it(m, 2), b = it(x, 2);
  {
    var T = (A) => {
      var N = bh();
      Ys(N, 5, () => P(a), Bs, (D, C) => {
        var v = Sh(), _ = tt(v);
        vn(() => dn(_, (P(C), at(() => P(C).MUNICIPIO)))), Dt("click", v, () => l(P(C).MUNICIPIO)), yt(D, v);
      }), yt(A, N);
    };
    mn(b, (A) => {
      P(a), at(() => P(a).length > 0) && A(T);
    });
  }
  var I = it(b, 2);
  {
    var z = (A) => {
      var N = kh(), D = tt(N), C = tt(D), v = it(D, 2), _ = it(tt(v)), g = tt(_), S = tt(g), M = tt(S);
      {
        var R = (Y) => {
          var ot = Mh(), pn = it(hr(ot)), Ze = tt(pn);
          vn(() => dn(Ze, (P(i), at(() => P(i).RAI_Email)))), yt(Y, ot);
        }, $ = (Y) => {
          var ot = Ah(), pn = it(hr(ot)), Ze = tt(pn);
          vn(() => {
            yi(pn, "href", (P(i), at(() => P(i).Website))), dn(Ze, (P(i), at(() => P(i).Website)));
          }), yt(Y, ot);
        };
        mn(M, (Y) => {
          P(i), at(() => P(i).RAI?.toLowerCase() === "sim") ? Y(R) : Y($, !1);
        });
      }
      var L = it(S), q = tt(L);
      {
        var G = (Y) => {
          var ot = Nh(), pn = tt(ot);
          vn(() => {
            yi(ot, "href", (P(i), at(() => P(i).PORTAL))), dn(pn, (P(i), at(() => P(i).PORTAL)));
          }), yt(Y, ot);
        }, X = (Y) => {
          var ot = Us("Não há registos de portal de dados abertos no município indicado.");
          yt(Y, ot);
        };
        mn(q, (Y) => {
          P(i), at(() => P(i).PORTAL && P(i).PORTAL.toLowerCase() !== "nao" && P(i).PORTAL.toLowerCase() !== "não") ? Y(G) : Y(X, !1);
        });
      }
      var j = it(L), bt = tt(j), ht = it(v, 2);
      vn(() => dn(C, (P(i), at(() => P(i).MUNICIPIO)))), Dt("click", bt, () => p(P(i).MUNICIPIO)), Dt("click", ht, () => {
        H(i, null), H(e, ""), H(s, "");
      }), yt(A, N);
    };
    mn(I, (A) => {
      P(i) && A(z);
    });
  }
  var O = it(y, 2), k = tt(O);
  Eh(k, {
    get selectedMunicipio() {
      return P(s);
    }
  }), Qs(m, () => P(e), (A) => H(e, A)), Dt("input", m, d), Dt("keydown", m, u), Dt("click", E, f), yt(t, w), vo();
}
class Rh {
  constructor(n) {
    this.options = n, this.app = null, this.init();
  }
  init() {
    try {
      if (!this.options.target)
        throw new Error("Target element não encontrado");
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
        this.createApp();
      }) : setTimeout(() => {
        this.createApp();
      }, 50);
    } catch (n) {
      throw console.error("Erro ao inicializar widget:", n), n;
    }
  }
  createApp() {
    try {
      this.app = new Ih({
        target: this.options.target,
        props: this.options.props || {}
      }), console.log("Widget original inicializado com sucesso");
    } catch (n) {
      throw console.error("Erro ao criar app Svelte:", n), n;
    }
  }
  destroy() {
    if (this.app && this.app.$destroy) {
      try {
        this.app.$destroy();
      } catch (n) {
        console.error("Erro ao destruir widget:", n);
      }
      this.app = null;
    }
  }
}
typeof window < "u" && (window.MunicipiosWidget = Rh);
export {
  Rh as default
};
//# sourceMappingURL=municipios-widget.js.map
