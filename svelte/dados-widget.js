typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Tn = !1, $a = !1;
function Oa() {
  Tn = !0;
}
Oa();
const Da = 1, za = 2, La = 16, qa = 2, Fa = 4, Ua = 8, Ha = 1, Va = 2, et = Symbol(), Ba = "http://www.w3.org/1999/xhtml", so = !1;
var Fr = Array.isArray, Xa = Array.prototype.indexOf, uo = Array.from, lr = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, lo = Object.getOwnPropertyDescriptors, Ya = Object.prototype, Wa = Array.prototype, Ur = Object.getPrototypeOf;
function Ga(t) {
  return t();
}
function fr(t) {
  for (var n = 0; n < t.length; n++)
    t[n]();
}
function Ka() {
  var t, n, e = new Promise((r, i) => {
    t = r, n = i;
  });
  return { promise: e, resolve: t, reject: n };
}
const vt = 2, Hr = 4, Be = 8, In = 16, Bt = 32, Rn = 64, fo = 128, xt = 256, xe = 512, rt = 1024, Et = 2048, Xt = 4096, Nt = 8192, fn = 16384, Vr = 32768, Br = 65536, hi = 1 << 17, Za = 1 << 18, Xr = 1 << 19, co = 1 << 20, cr = 1 << 21, Yr = 1 << 22, nn = 1 << 23, en = Symbol("$state"), Ja = Symbol("legacy props"), Wr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Qa() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ho(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ja() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ts(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ns() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function es(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function rs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function is(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function os() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function as() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ss() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let us = !1;
function po(t) {
  return t === this.v;
}
function ls(t, n) {
  return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
function vo(t) {
  return !ls(t, this.v);
}
let K = null;
function Ee(t) {
  K = t;
}
function _o(t, n = !1, e) {
  K = {
    p: K,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Tn && !n ? { s: null, u: null, $: [] } : null
  };
}
function go(t) {
  var n = (
    /** @type {ComponentContext} */
    K
  ), e = n.e;
  if (e !== null) {
    n.e = null;
    for (var r of e)
      No(r);
  }
  return K = n.p, /** @type {T} */
  {};
}
function Pn() {
  return !Tn || K !== null && K.l === null;
}
const fs = /* @__PURE__ */ new WeakMap();
function cs(t) {
  var n = H;
  if (n === null)
    return V.f |= nn, t;
  if ((n.f & Vr) === 0) {
    if ((n.f & fo) === 0)
      throw !n.parent && t instanceof Error && mo(t), t;
    n.b.error(t);
  } else
    Gr(t, n);
}
function Gr(t, n) {
  for (; n !== null; ) {
    if ((n.f & fo) !== 0)
      try {
        n.b.error(t);
        return;
      } catch (e) {
        t = e;
      }
    n = n.parent;
  }
  throw t instanceof Error && mo(t), t;
}
function mo(t) {
  const n = fs.get(t);
  n && (lr(t, "message", {
    value: n.message
  }), lr(t, "stack", {
    value: n.stack
  }));
}
let Se = [];
function hs() {
  var t = Se;
  Se = [], fr(t);
}
function yo(t) {
  Se.length === 0 && queueMicrotask(hs), Se.push(t);
}
function ps() {
  for (var t = (
    /** @type {Effect} */
    H.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && Qa(), t;
}
// @__NO_SIDE_EFFECTS__
function Kr(t) {
  var n = vt | Et, e = V !== null && (V.f & vt) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return H === null || e !== null && (e.f & xt) !== 0 ? n |= xt : H.f |= Xr, {
    ctx: K,
    deps: null,
    effects: null,
    equals: po,
    f: n,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      et
    ),
    wv: 0,
    parent: e ?? H,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function vs(t, n) {
  let e = (
    /** @type {Effect | null} */
    H
  );
  e === null && ja();
  var r = (
    /** @type {Boundary} */
    e.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Xn(
    /** @type {V} */
    et
  ), a = null, s = !V;
  return Ps(() => {
    try {
      var l = t();
    } catch (p) {
      l = Promise.reject(p);
    }
    var f = () => l;
    i = a?.then(f, f) ?? Promise.resolve(l), a = i;
    var u = (
      /** @type {Batch} */
      G
    ), h = r.pending;
    s && (r.update_pending_count(1), h || u.increment());
    const c = (p, d = void 0) => {
      a = null, h || u.activate(), d ? d !== Wr && (o.f |= nn, Me(o, d)) : ((o.f & nn) !== 0 && (o.f ^= nn), Me(o, p)), s && (r.update_pending_count(-1), h || u.decrement()), Eo();
    };
    if (i.then(c, (p) => c(null, p || "unknown")), u)
      return () => {
        queueMicrotask(() => u.neuter());
      };
  }), new Promise((l) => {
    function f(u) {
      function h() {
        u === i ? l(o) : f(i);
      }
      u.then(h, h);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Zr(t) {
  const n = /* @__PURE__ */ Kr(t);
  return n.equals = vo, n;
}
function wo(t) {
  var n = t.effects;
  if (n !== null) {
    t.effects = null;
    for (var e = 0; e < n.length; e += 1)
      cn(
        /** @type {Effect} */
        n[e]
      );
  }
}
function ds(t) {
  for (var n = t.parent; n !== null; ) {
    if ((n.f & vt) === 0)
      return (
        /** @type {Effect} */
        n
      );
    n = n.parent;
  }
  return null;
}
function Jr(t) {
  var n, e = H;
  Jt(ds(t));
  try {
    wo(t), n = Lo(t);
  } finally {
    Jt(e);
  }
  return n;
}
function xo(t) {
  var n = Jr(t);
  if (t.equals(n) || (t.v = n, t.wv = Do()), !hn)
    if (Sn !== null)
      Sn.set(t, t.v);
    else {
      var e = (Kt || (t.f & xt) !== 0) && t.deps !== null ? Xt : rt;
      ut(t, e);
    }
}
function _s(t, n, e) {
  const r = Pn() ? Kr : Zr;
  if (n.length === 0) {
    e(t.map(r));
    return;
  }
  var i = G, o = (
    /** @type {Effect} */
    H
  ), a = gs(), s = ps();
  Promise.all(n.map((l) => /* @__PURE__ */ vs(l))).then((l) => {
    i?.activate(), a();
    try {
      e([...t.map(r), ...l]);
    } catch (f) {
      (o.f & fn) === 0 && Gr(f, o);
    }
    i?.deactivate(), Eo();
  }).catch((l) => {
    s.error(l);
  });
}
function gs() {
  var t = H, n = V, e = K;
  return function() {
    Jt(t), $t(n), Ee(e);
  };
}
function Eo() {
  Jt(null), $t(null), Ee(null);
}
const Cn = /* @__PURE__ */ new Set();
let G = null, de = null, Sn = null, pi = /* @__PURE__ */ new Set(), be = [];
function So() {
  const t = (
    /** @type {() => void} */
    be.shift()
  );
  be.length > 0 && queueMicrotask(So), t();
}
let Vn = [], Qr = null, hr = !1;
class Bn {
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
    Vn = [], de = null;
    var e = null;
    if (Cn.size > 1) {
      e = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map();
      for (const [o, a] of this.current)
        e.set(o, { v: o.v, wv: o.wv }), o.v = a;
      for (const o of Cn)
        if (o !== this)
          for (const [a, s] of o.#i)
            e.has(a) || (e.set(a, { v: a.v, wv: a.wv }), a.v = s);
    }
    for (const o of n)
      this.#v(o);
    if (this.#e.length === 0 && this.#t === 0) {
      this.#p();
      var r = this.#r, i = this.#n;
      this.#r = [], this.#n = [], this.#s = [], de = G, G = null, vi(r), vi(i), G === null ? G = this : Cn.delete(this), this.#l?.resolve();
    } else
      this.#u(this.#r), this.#u(this.#n), this.#u(this.#s);
    if (e) {
      for (const [o, { v: a, wv: s }] of e)
        o.wv <= s && (o.v = a);
      Sn = null;
    }
    for (const o of this.#e)
      on(o);
    for (const o of this.#a)
      on(o);
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
      var r = e.f, i = (r & (Bt | Rn)) !== 0, o = i && (r & rt) !== 0, a = o || (r & Nt) !== 0 || this.skipped_effects.has(e);
      if (!a && e.fn !== null) {
        if (i)
          e.f ^= rt;
        else if ((r & Hr) !== 0)
          this.#n.push(e);
        else if ((r & rt) === 0)
          if ((r & Yr) !== 0) {
            var s = e.b?.pending ? this.#a : this.#e;
            s.push(e);
          } else ee(e) && ((e.f & In) !== 0 && this.#s.push(e), on(e));
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
      ((e.f & Et) !== 0 ? this.#c : this.#h).push(e), ut(e, rt);
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
    G = this;
  }
  deactivate() {
    G = null, de = null;
    for (const n of pi)
      if (pi.delete(n), n(), G !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    Vn.length > 0 ? ms() : this.#p(), G === this && (this.#t === 0 && Cn.delete(this), this.deactivate());
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
        ut(n, Et), bn(n);
      for (const n of this.#h)
        ut(n, Xt), bn(n);
      this.#r = [], this.#n = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(n) {
    this.#o.add(n);
  }
  settled() {
    return (this.#l ??= Ka()).promise;
  }
  static ensure() {
    if (G === null) {
      const n = G = new Bn();
      Cn.add(G), Bn.enqueue(() => {
        G === n && n.flush();
      });
    }
    return G;
  }
  /** @param {() => void} task */
  static enqueue(n) {
    be.length === 0 && queueMicrotask(So), be.unshift(n);
  }
}
function ms() {
  var t = xn;
  hr = !0;
  try {
    var n = 0;
    for (_i(!0); Vn.length > 0; ) {
      var e = Bn.ensure();
      if (n++ > 1e3) {
        var r, i;
        ys();
      }
      e.process(Vn), Zt.clear();
    }
  } finally {
    hr = !1, _i(t), Qr = null;
  }
}
function ys() {
  try {
    rs();
  } catch (t) {
    Gr(t, Qr);
  }
}
let jt = null;
function vi(t) {
  var n = t.length;
  if (n !== 0) {
    for (var e = 0; e < n; ) {
      var r = t[e++];
      if ((r.f & (fn | Nt)) === 0 && ee(r) && (jt = [], on(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ro(r) : r.fn = null), jt.length > 0)) {
        Zt.clear();
        for (const i of jt)
          on(i);
        jt = [];
      }
    }
    jt = null;
  }
}
function bn(t) {
  for (var n = Qr = t; n.parent !== null; ) {
    n = n.parent;
    var e = n.f;
    if (hr && n === H && (e & In) !== 0)
      return;
    if ((e & (Rn | Bt)) !== 0) {
      if ((e & rt) === 0) return;
      n.f ^= rt;
    }
  }
  Vn.push(n);
}
const Zt = /* @__PURE__ */ new Map();
function Xn(t, n) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: po,
    rv: 0,
    wv: 0
  };
  return e;
}
// @__NO_SIDE_EFFECTS__
function Wt(t, n) {
  const e = Xn(t);
  return Os(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ft(t, n = !1, e = !0) {
  const r = Xn(t);
  return n || (r.equals = vo), Tn && e && K !== null && K.l !== null && (K.l.s ??= []).push(r), r;
}
function F(t, n, e = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!It || (V.f & hi) !== 0) && Pn() && (V.f & (vt | In | Yr | hi)) !== 0 && !Ht?.includes(t) && ss();
  let r = e ? mn(n) : n;
  return Me(t, r);
}
function Me(t, n) {
  if (!t.equals(n)) {
    var e = t.v;
    hn ? Zt.set(t, n) : Zt.set(t, e), t.v = n;
    var r = Bn.ensure();
    r.capture(t, e), (t.f & vt) !== 0 && ((t.f & Et) !== 0 && Jr(
      /** @type {Derived} */
      t
    ), ut(t, (t.f & xt) === 0 ? rt : Xt)), t.wv = Do(), bo(t, Et), Pn() && H !== null && (H.f & rt) !== 0 && (H.f & (Bt | Rn)) === 0 && (gt === null ? Ds([t]) : gt.push(t));
  }
  return n;
}
function Qe(t) {
  F(t, t.v + 1);
}
function bo(t, n) {
  var e = t.reactions;
  if (e !== null)
    for (var r = Pn(), i = e.length, o = 0; o < i; o++) {
      var a = e[o], s = a.f;
      if (!(!r && a === H)) {
        var l = (s & Et) === 0;
        l && ut(a, n), (s & vt) !== 0 ? bo(
          /** @type {Derived} */
          a,
          Xt
        ) : l && ((s & In) !== 0 && jt !== null && jt.push(
          /** @type {Effect} */
          a
        ), bn(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function mn(t) {
  if (typeof t != "object" || t === null || en in t)
    return t;
  const n = Ur(t);
  if (n !== Ya && n !== Wa)
    return t;
  var e = /* @__PURE__ */ new Map(), r = Fr(t), i = /* @__PURE__ */ Wt(0), o = rn, a = (s) => {
    if (rn === o)
      return s();
    var l = V, f = rn;
    $t(null), mi(o);
    var u = s();
    return $t(l), mi(f), u;
  };
  return r && e.set("length", /* @__PURE__ */ Wt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && os();
        var u = e.get(l);
        return u === void 0 ? u = a(() => {
          var h = /* @__PURE__ */ Wt(f.value);
          return e.set(l, h), h;
        }) : F(u, f.value, !0), !0;
      },
      deleteProperty(s, l) {
        var f = e.get(l);
        if (f === void 0) {
          if (l in s) {
            const u = a(() => /* @__PURE__ */ Wt(et));
            e.set(l, u), Qe(i);
          }
        } else
          F(f, et), Qe(i);
        return !0;
      },
      get(s, l, f) {
        if (l === en)
          return t;
        var u = e.get(l), h = l in s;
        if (u === void 0 && (!h || ve(s, l)?.writable) && (u = a(() => {
          var p = mn(h ? s[l] : et), d = /* @__PURE__ */ Wt(p);
          return d;
        }), e.set(l, u)), u !== void 0) {
          var c = T(u);
          return c === et ? void 0 : c;
        }
        return Reflect.get(s, l, f);
      },
      getOwnPropertyDescriptor(s, l) {
        var f = Reflect.getOwnPropertyDescriptor(s, l);
        if (f && "value" in f) {
          var u = e.get(l);
          u && (f.value = T(u));
        } else if (f === void 0) {
          var h = e.get(l), c = h?.v;
          if (h !== void 0 && c !== et)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return f;
      },
      has(s, l) {
        if (l === en)
          return !0;
        var f = e.get(l), u = f !== void 0 && f.v !== et || Reflect.has(s, l);
        if (f !== void 0 || H !== null && (!u || ve(s, l)?.writable)) {
          f === void 0 && (f = a(() => {
            var c = u ? mn(s[l]) : et, p = /* @__PURE__ */ Wt(c);
            return p;
          }), e.set(l, f));
          var h = T(f);
          if (h === et)
            return !1;
        }
        return u;
      },
      set(s, l, f, u) {
        var h = e.get(l), c = l in s;
        if (r && l === "length")
          for (var p = f; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var d = e.get(p + "");
            d !== void 0 ? F(d, et) : p in s && (d = a(() => /* @__PURE__ */ Wt(et)), e.set(p + "", d));
          }
        if (h === void 0)
          (!c || ve(s, l)?.writable) && (h = a(() => /* @__PURE__ */ Wt(void 0)), F(h, mn(f)), e.set(l, h));
        else {
          c = h.v !== et;
          var w = a(() => mn(f));
          F(h, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(s, l);
        if (y?.set && y.set.call(u, f), !c) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              e.get("length")
            ), m = Number(l);
            Number.isInteger(m) && m >= x.v && F(x, m + 1);
          }
          Qe(i);
        }
        return !0;
      },
      ownKeys(s) {
        T(i);
        var l = Reflect.ownKeys(s).filter((h) => {
          var c = e.get(h);
          return c === void 0 || c.v !== et;
        });
        for (var [f, u] of e)
          u.v !== et && !(f in s) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        as();
      }
    }
  );
}
var ws, xs, Es;
function ne(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ae(t) {
  return xs.call(t);
}
// @__NO_SIDE_EFFECTS__
function Xe(t) {
  return Es.call(t);
}
function j(t, n) {
  return /* @__PURE__ */ Ae(t);
}
function pr(t, n) {
  {
    var e = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ae(
        /** @type {Node} */
        t
      )
    );
    return e instanceof Comment && e.data === "" ? /* @__PURE__ */ Xe(e) : e;
  }
}
function it(t, n = 1, e = !1) {
  let r = t;
  for (; n--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Xe(r);
  return r;
}
function Ss(t) {
  t.textContent = "";
}
function Mo() {
  return !1;
}
let di = !1;
function bs() {
  di || (di = !0, document.addEventListener(
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
function Ye(t) {
  var n = V, e = H;
  $t(null), Jt(null);
  try {
    return t();
  } finally {
    $t(n), Jt(e);
  }
}
function Ms(t, n, e, r = e) {
  t.addEventListener(n, () => Ye(e));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), bs();
}
function Ao(t) {
  H === null && V === null && es(), V !== null && (V.f & xt) !== 0 && H === null && ns(), hn && ts();
}
function As(t, n) {
  var e = n.last;
  e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t);
}
function Yt(t, n, e, r = !0) {
  var i = H;
  i !== null && (i.f & Nt) !== 0 && (t |= Nt);
  var o = {
    ctx: K,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Et,
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
      on(o), o.f |= Vr;
    } catch (l) {
      throw cn(o), l;
    }
  else n !== null && bn(o);
  var a = e && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & Xr) === 0;
  if (!a && r && (i !== null && As(o, i), V !== null && (V.f & vt) !== 0 && (t & Rn) === 0)) {
    var s = (
      /** @type {Derived} */
      V
    );
    (s.effects ??= []).push(o);
  }
  return o;
}
function Ns(t) {
  const n = Yt(Be, null, !1);
  return ut(n, rt), n.teardown = t, n;
}
function vr(t) {
  Ao();
  var n = (
    /** @type {Effect} */
    H.f
  ), e = !V && (n & Bt) !== 0 && (n & Vr) === 0;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      K
    );
    (r.e ??= []).push(t);
  } else
    return No(t);
}
function No(t) {
  return Yt(Hr | co, t, !1);
}
function ks(t) {
  return Ao(), Yt(Be | co, t, !0);
}
function Ts(t) {
  return Yt(Hr, t, !1);
}
function Is(t, n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    K
  ), r = { effect: null, ran: !1, deps: t };
  e.l.$.push(r), r.effect = We(() => {
    t(), !r.ran && (r.ran = !0, ot(n));
  });
}
function Rs() {
  var t = (
    /** @type {ComponentContextLegacy} */
    K
  );
  We(() => {
    for (var n of t.l.$) {
      n.deps();
      var e = n.effect;
      (e.f & rt) !== 0 && ut(e, Xt), ee(e) && on(e), n.ran = !1;
    }
  });
}
function Ps(t) {
  return Yt(Yr | Xr, t, !0);
}
function We(t, n = 0) {
  return Yt(Be | n, t, !0);
}
function dn(t, n = [], e = []) {
  _s(n, e, (r) => {
    Yt(Be, () => t(...r.map(T)), !0);
  });
}
function ko(t, n = 0) {
  var e = Yt(In | n, t, !0);
  return e;
}
function Ne(t, n = !0) {
  return Yt(Bt, t, !0, n);
}
function To(t) {
  var n = t.teardown;
  if (n !== null) {
    const e = hn, r = V;
    gi(!0), $t(null);
    try {
      n.call(null);
    } finally {
      gi(e), $t(r);
    }
  }
}
function Io(t, n = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    const i = e.ac;
    i !== null && Ye(() => {
      i.abort(Wr);
    });
    var r = e.next;
    (e.f & Rn) !== 0 ? e.parent = null : cn(e, n), e = r;
  }
}
function Cs(t) {
  for (var n = t.first; n !== null; ) {
    var e = n.next;
    (n.f & Bt) === 0 && cn(n), n = e;
  }
}
function cn(t, n = !0) {
  var e = !1;
  (n || (t.f & Za) !== 0) && t.nodes_start !== null && t.nodes_end !== null && ($s(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), e = !0), Io(t, n && !e), ke(t, 0), ut(t, fn);
  var r = t.transitions;
  if (r !== null)
    for (const o of r)
      o.stop();
  To(t);
  var i = t.parent;
  i !== null && i.first !== null && Ro(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function $s(t, n) {
  for (; t !== null; ) {
    var e = t === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Xe(t)
    );
    t.remove(), t = e;
  }
}
function Ro(t) {
  var n = t.parent, e = t.prev, r = t.next;
  e !== null && (e.next = r), r !== null && (r.prev = e), n !== null && (n.first === t && (n.first = r), n.last === t && (n.last = e));
}
function Po(t, n) {
  var e = [];
  jr(t, e, !0), Co(e, () => {
    cn(t), n && n();
  });
}
function Co(t, n) {
  var e = t.length;
  if (e > 0) {
    var r = () => --e || n();
    for (var i of t)
      i.out(r);
  } else
    n();
}
function jr(t, n, e) {
  if ((t.f & Nt) === 0) {
    if (t.f ^= Nt, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && n.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, o = (r.f & Br) !== 0 || (r.f & Bt) !== 0;
      jr(r, n, o ? e : !1), r = i;
    }
  }
}
function ti(t) {
  $o(t, !0);
}
function $o(t, n) {
  if ((t.f & Nt) !== 0) {
    t.f ^= Nt, (t.f & rt) === 0 && (ut(t, Et), bn(t));
    for (var e = t.first; e !== null; ) {
      var r = e.next, i = (e.f & Br) !== 0 || (e.f & Bt) !== 0;
      $o(e, i ? n : !1), e = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && o.in();
  }
}
let xn = !1;
function _i(t) {
  xn = t;
}
let hn = !1;
function gi(t) {
  hn = t;
}
let V = null, It = !1;
function $t(t) {
  V = t;
}
let H = null;
function Jt(t) {
  H = t;
}
let Ht = null;
function Os(t) {
  V !== null && (Ht === null ? Ht = [t] : Ht.push(t));
}
let at = null, ht = 0, gt = null;
function Ds(t) {
  gt = t;
}
let Oo = 1, Yn = 0, rn = Yn;
function mi(t) {
  rn = t;
}
let Kt = !1;
function Do() {
  return ++Oo;
}
function ee(t) {
  var n = t.f;
  if ((n & Et) !== 0)
    return !0;
  if ((n & Xt) !== 0) {
    var e = t.deps, r = (n & xt) !== 0;
    if (e !== null) {
      var i, o, a = (n & xe) !== 0, s = r && H !== null && !Kt, l = e.length;
      if ((a || s) && (H === null || (H.f & fn) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < l; i++)
          o = e[i], (a || !o?.reactions?.includes(f)) && (o.reactions ??= []).push(f);
        a && (f.f ^= xe), s && u !== null && (u.f & xt) === 0 && (f.f ^= xt);
      }
      for (i = 0; i < l; i++)
        if (o = e[i], ee(
          /** @type {Derived} */
          o
        ) && xo(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return !0;
    }
    (!r || H !== null && !Kt) && ut(t, rt);
  }
  return !1;
}
function zo(t, n, e = !0) {
  var r = t.reactions;
  if (r !== null && !Ht?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & vt) !== 0 ? zo(
        /** @type {Derived} */
        o,
        n,
        !1
      ) : n === o && (e ? ut(o, Et) : (o.f & rt) !== 0 && ut(o, Xt), bn(
        /** @type {Effect} */
        o
      ));
    }
}
function Lo(t) {
  var n = at, e = ht, r = gt, i = V, o = Kt, a = Ht, s = K, l = It, f = rn, u = t.f;
  at = /** @type {null | Value[]} */
  null, ht = 0, gt = null, Kt = (u & xt) !== 0 && (It || !xn || V === null), V = (u & (Bt | Rn)) === 0 ? t : null, Ht = null, Ee(t.ctx), It = !1, rn = ++Yn, t.ac !== null && (Ye(() => {
    t.ac.abort(Wr);
  }), t.ac = null);
  try {
    t.f |= cr;
    var h = (
      /** @type {Function} */
      t.fn
    ), c = h(), p = t.deps;
    if (at !== null) {
      var d;
      if (ke(t, ht), p !== null && ht > 0)
        for (p.length = ht + at.length, d = 0; d < at.length; d++)
          p[ht + d] = at[d];
      else
        t.deps = p = at;
      if (!Kt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & vt) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (d = ht; d < p.length; d++)
          (p[d].reactions ??= []).push(t);
    } else p !== null && ht < p.length && (ke(t, ht), p.length = ht);
    if (Pn() && gt !== null && !It && p !== null && (t.f & (vt | Xt | Et)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      gt.length; d++)
        zo(
          gt[d],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Yn++, gt !== null && (r === null ? r = gt : r.push(.../** @type {Source[]} */
    gt))), (t.f & nn) !== 0 && (t.f ^= nn), c;
  } catch (w) {
    return cs(w);
  } finally {
    t.f ^= cr, at = n, ht = e, gt = r, V = i, Kt = o, Ht = a, Ee(s), It = l, rn = f;
  }
}
function zs(t, n) {
  let e = n.reactions;
  if (e !== null) {
    var r = Xa.call(e, t);
    if (r !== -1) {
      var i = e.length - 1;
      i === 0 ? e = n.reactions = null : (e[r] = e[i], e.pop());
    }
  }
  e === null && (n.f & vt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (at === null || !at.includes(n)) && (ut(n, Xt), (n.f & (xt | xe)) === 0 && (n.f ^= xe), wo(
    /** @type {Derived} **/
    n
  ), ke(
    /** @type {Derived} **/
    n,
    0
  ));
}
function ke(t, n) {
  var e = t.deps;
  if (e !== null)
    for (var r = n; r < e.length; r++)
      zs(t, e[r]);
}
function on(t) {
  var n = t.f;
  if ((n & fn) === 0) {
    ut(t, rt);
    var e = H, r = xn;
    H = t, xn = !0;
    try {
      (n & In) !== 0 ? Cs(t) : Io(t), To(t);
      var i = Lo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Oo;
      var o;
      so && $a && (t.f & Et) !== 0 && t.deps;
    } finally {
      xn = r, H = e;
    }
  }
}
function T(t) {
  var n = t.f, e = (n & vt) !== 0;
  if (V !== null && !It) {
    var r = H !== null && (H.f & fn) !== 0;
    if (!r && !Ht?.includes(t)) {
      var i = V.deps;
      if ((V.f & cr) !== 0)
        t.rv < Yn && (t.rv = Yn, at === null && i !== null && i[ht] === t ? ht++ : at === null ? at = [t] : (!Kt || !at.includes(t)) && at.push(t));
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
    s !== null && (s.f & xt) === 0 && (a.f ^= xt);
  }
  if (hn) {
    if (Zt.has(t))
      return Zt.get(t);
    if (e) {
      a = /** @type {Derived} */
      t;
      var l = a.v;
      return ((a.f & rt) === 0 && a.reactions !== null || qo(a)) && (l = Jr(a)), Zt.set(a, l), l;
    }
  } else if (e) {
    if (a = /** @type {Derived} */
    t, Sn?.has(a))
      return Sn.get(a);
    ee(a) && xo(a);
  }
  if ((t.f & nn) !== 0)
    throw t.v;
  return t.v;
}
function qo(t) {
  if (t.v === et) return !0;
  if (t.deps === null) return !1;
  for (const n of t.deps)
    if (Zt.has(n) || (n.f & vt) !== 0 && qo(
      /** @type {Derived} */
      n
    ))
      return !0;
  return !1;
}
function ot(t) {
  var n = It;
  try {
    return It = !0, t();
  } finally {
    It = n;
  }
}
const Ls = -7169;
function ut(t, n) {
  t.f = t.f & Ls | n;
}
function Fo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (en in t)
      dr(t);
    else if (!Array.isArray(t))
      for (let n in t) {
        const e = t[n];
        typeof e == "object" && e && en in e && dr(e);
      }
  }
}
function dr(t, n = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !n.has(t)) {
    n.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        dr(t[r], n);
      } catch {
      }
    const e = Ur(t);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const r = lo(e);
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
function qs(t, n, e, r = {}) {
  function i(o) {
    if (r.capture || Fs.call(n, o), !o.cancelBubble)
      return Ye(() => e?.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? yo(() => {
    n.addEventListener(t, i, r);
  }) : n.addEventListener(t, i, r), i;
}
function Lt(t, n, e, r, i) {
  var o = { capture: r, passive: i }, a = qs(t, n, e, o);
  (n === document.body || // @ts-ignore
  n === window || // @ts-ignore
  n === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  n instanceof HTMLMediaElement) && Ns(() => {
    n.removeEventListener(t, a, o);
  });
}
let yi = null;
function Fs(t) {
  var n = this, e = (
    /** @type {Node} */
    n.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  yi = t;
  var a = 0, s = yi === t && t.__root;
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
    lr(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || e;
      }
    });
    var u = V, h = H;
    $t(null), Jt(null);
    try {
      for (var c, p = []; o !== null; ) {
        var d = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var w = o["__" + r];
          if (w != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (Fr(w)) {
              var [y, ...x] = w;
              y.apply(o, [t, ...x]);
            } else
              w.call(o, t);
        } catch (m) {
          c ? p.push(m) : c = m;
        }
        if (t.cancelBubble || d === n || d === null)
          break;
        o = d;
      }
      if (c) {
        for (let m of p)
          queueMicrotask(() => {
            throw m;
          });
        throw c;
      }
    } finally {
      t.__root = n, delete t.currentTarget, $t(u), Jt(h);
    }
  }
}
function Us(t) {
  var n = document.createElement("template");
  return n.innerHTML = t.replaceAll("<!>", "<!---->"), n.content;
}
function Te(t, n) {
  var e = (
    /** @type {Effect} */
    H
  );
  e.nodes_start === null && (e.nodes_start = t, e.nodes_end = n);
}
// @__NO_SIDE_EFFECTS__
function Ot(t, n) {
  var e = (n & Ha) !== 0, r = (n & Va) !== 0, i, o = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Us(o ? t : "<!>" + t), e || (i = /** @type {Node} */
    /* @__PURE__ */ Ae(i)));
    var a = (
      /** @type {TemplateNode} */
      r || ws ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (e) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Te(s, l);
    } else
      Te(a, a);
    return a;
  };
}
function Hs(t = "") {
  {
    var n = ne(t + "");
    return Te(n, n), n;
  }
}
function Vs() {
  var t = document.createDocumentFragment(), n = document.createComment(""), e = ne();
  return t.append(n, e), Te(n, e), t;
}
function mt(t, n) {
  t !== null && t.before(
    /** @type {Node} */
    n
  );
}
function _n(t, n) {
  var e = n == null ? "" : typeof n == "object" ? n + "" : n;
  e !== (t.__t ??= t.nodeValue) && (t.__t = e, t.nodeValue = e + "");
}
function Bs(t) {
  K === null && ho(), Tn && K.l !== null ? Xs(K).m.push(t) : vr(() => {
    const n = ot(t);
    if (typeof n == "function") return (
      /** @type {() => void} */
      n
    );
  });
}
function Uo(t) {
  K === null && ho(), Bs(() => () => ot(t));
}
function Xs(t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return n.u ??= { a: [], b: [], m: [] };
}
function yn(t, n, e = !1) {
  var r = t, i = null, o = null, a = et, s = e ? Br : 0, l = !1;
  const f = (p, d = !0) => {
    l = !0, c(d, p);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var p = a ? i : o, d = a ? o : i;
    p && ti(p), d && Po(d, () => {
      a ? o = null : i = null;
    });
  }
  const c = (p, d) => {
    if (a !== (a = p)) {
      var w = Mo(), y = r;
      if (w && (u = document.createDocumentFragment(), u.append(y = ne())), a ? i ??= d && Ne(() => d(y)) : o ??= d && Ne(() => d(y)), w) {
        var x = (
          /** @type {Batch} */
          G
        ), m = a ? i : o, S = a ? o : i;
        m && x.skipped_effects.delete(m), S && x.skipped_effects.add(S), x.add_callback(h);
      } else
        h();
    }
  };
  ko(() => {
    l = !1, n(f), l || c(null, null);
  }, s);
}
function Ys(t, n) {
  return n;
}
function Ws(t, n, e) {
  for (var r = t.items, i = [], o = n.length, a = 0; a < o; a++)
    jr(n[a].e, i, !0);
  var s = o > 0 && i.length === 0 && e !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    Ss(l), l.append(
      /** @type {Element} */
      e
    ), r.clear(), Tt(t, n[0].prev, n[o - 1].next);
  }
  Co(i, () => {
    for (var f = 0; f < o; f++) {
      var u = n[f];
      s || (r.delete(u.k), Tt(t, u.prev, u.next)), cn(u.e, !s);
    }
  });
}
function Gs(t, n, e, r, i, o = null) {
  var a = t, s = { flags: n, items: /* @__PURE__ */ new Map(), first: null };
  {
    var l = (
      /** @type {Element} */
      t
    );
    a = l.appendChild(ne());
  }
  var f = null, u = !1, h = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ Zr(() => {
    var y = e();
    return Fr(y) ? y : y == null ? [] : uo(y);
  }), p, d;
  function w() {
    Ks(
      d,
      p,
      s,
      h,
      a,
      i,
      n,
      r,
      e
    ), o !== null && (p.length === 0 ? f ? ti(f) : f = Ne(() => o(a)) : f !== null && Po(f, () => {
      f = null;
    }));
  }
  ko(() => {
    d ??= /** @type {Effect} */
    H, p = /** @type {V[]} */
    T(c);
    var y = p.length;
    if (!(u && y === 0)) {
      u = y === 0;
      var x, m, S, M;
      if (Mo()) {
        var k = /* @__PURE__ */ new Set(), I = (
          /** @type {Batch} */
          G
        );
        for (m = 0; m < y; m += 1) {
          S = p[m], M = r(S, m);
          var z = s.items.get(M) ?? h.get(M);
          z ? Ho(z, S, m) : (x = Vo(
            null,
            s,
            null,
            null,
            S,
            M,
            m,
            i,
            n,
            e,
            !0
          ), h.set(M, x)), k.add(M);
        }
        for (const [D, P] of s.items)
          k.has(D) || I.skipped_effects.add(P.e);
        I.add_callback(w);
      } else
        w();
      T(c);
    }
  });
}
function Ks(t, n, e, r, i, o, a, s, l) {
  var f = n.length, u = e.items, h = e.first, c = h, p, d = null, w = [], y = [], x, m, S, M;
  for (M = 0; M < f; M += 1) {
    if (x = n[M], m = s(x, M), S = u.get(m), S === void 0) {
      var k = r.get(m);
      if (k !== void 0) {
        r.delete(m), u.set(m, k);
        var I = d ? d.next : c;
        Tt(e, d, k), Tt(e, k, I), je(k, I, i), d = k;
      } else {
        var z = c ? (
          /** @type {TemplateNode} */
          c.e.nodes_start
        ) : i;
        d = Vo(
          z,
          e,
          d,
          d === null ? e.first : d.next,
          x,
          m,
          M,
          o,
          a,
          l
        );
      }
      u.set(m, d), w = [], y = [], c = d.next;
      continue;
    }
    if (Ho(S, x, M), (S.e.f & Nt) !== 0 && ti(S.e), S !== c) {
      if (p !== void 0 && p.has(S)) {
        if (w.length < y.length) {
          var D = y[0], P;
          d = D.prev;
          var R = w[0], b = w[w.length - 1];
          for (P = 0; P < w.length; P += 1)
            je(w[P], D, i);
          for (P = 0; P < y.length; P += 1)
            p.delete(y[P]);
          Tt(e, R.prev, b.next), Tt(e, d, R), Tt(e, b, D), c = D, d = b, M -= 1, w = [], y = [];
        } else
          p.delete(S), je(S, c, i), Tt(e, S.prev, S.next), Tt(e, S, d === null ? e.first : d.next), Tt(e, d, S), d = S;
        continue;
      }
      for (w = [], y = []; c !== null && c.k !== m; )
        (c.e.f & Nt) === 0 && (p ??= /* @__PURE__ */ new Set()).add(c), y.push(c), c = c.next;
      if (c === null)
        continue;
      S = c;
    }
    w.push(S), d = S, c = S.next;
  }
  if (c !== null || p !== void 0) {
    for (var O = p === void 0 ? [] : uo(p); c !== null; )
      (c.e.f & Nt) === 0 && O.push(c), c = c.next;
    var $ = O.length;
    if ($ > 0) {
      var v = f === 0 ? i : null;
      Ws(e, O, v);
    }
  }
  t.first = e.first && e.first.e, t.last = d && d.e;
  for (var _ of r.values())
    cn(_.e);
  r.clear();
}
function Ho(t, n, e, r) {
  Me(t.v, n), t.i = e;
}
function Vo(t, n, e, r, i, o, a, s, l, f, u) {
  var h = (l & Da) !== 0, c = (l & La) === 0, p = h ? c ? /* @__PURE__ */ Ft(i, !1, !1) : Xn(i) : i, d = (l & za) === 0 ? a : Xn(a), w = {
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
      y.append(t = ne());
    }
    return w.e = Ne(() => s(
      /** @type {Node} */
      t,
      p,
      d,
      f
    ), us), w.e.prev = e && e.e, w.e.next = r && r.e, e === null ? u || (n.first = w) : (e.next = w, e.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
  } finally {
  }
}
function je(t, n, e) {
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
      /* @__PURE__ */ Xe(o)
    );
    i.before(o), o = a;
  }
}
function Tt(t, n, e) {
  n === null ? t.first = e : (n.next = e, n.e.next = e && e.e), e !== null && (e.prev = n, e.e.prev = n && n.e);
}
const Zs = Symbol("is custom element"), Js = Symbol("is html");
function wi(t, n, e, r) {
  var i = Qs(t);
  i[n] !== (i[n] = e) && (e == null ? t.removeAttribute(n) : typeof e != "string" && js(t).includes(n) ? t[n] = e : t.setAttribute(n, e));
}
function Qs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Zs]: t.nodeName.includes("-"),
      [Js]: t.namespaceURI === Ba
    }
  );
}
var xi = /* @__PURE__ */ new Map();
function js(t) {
  var n = xi.get(t.nodeName);
  if (n) return n;
  xi.set(t.nodeName, n = []);
  for (var e, r = t, i = Element.prototype; i !== r; ) {
    e = lo(r);
    for (var o in e)
      e[o].set && n.push(o);
    r = Ur(r);
  }
  return n;
}
function tu(t, n, e = n) {
  var r = Pn(), i = /* @__PURE__ */ new WeakSet();
  Ms(t, "input", (o) => {
    var a = o ? t.defaultValue : t.value;
    if (a = tr(t) ? nr(a) : a, e(a), G !== null && i.add(G), r && a !== (a = n())) {
      var s = t.selectionStart, l = t.selectionEnd;
      t.value = a ?? "", l !== null && (t.selectionStart = s, t.selectionEnd = Math.min(l, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ot(n) == null && t.value && (e(tr(t) ? nr(t.value) : t.value), G !== null && i.add(G)), We(() => {
    var o = n();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        de ?? G
      );
      if (i.has(a))
        return;
    }
    tr(t) && o === nr(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function tr(t) {
  var n = t.type;
  return n === "number" || n === "range";
}
function nr(t) {
  return t === "" ? null : +t;
}
function Ei(t, n) {
  return t === n || t?.[en] === n;
}
function nu(t = {}, n, e, r) {
  return Ts(() => {
    var i, o;
    return We(() => {
      i = o, o = [], ot(() => {
        t !== e(...o) && (n(t, ...o), i && Ei(e(...i), t) && n(null, ...i));
      });
    }), () => {
      yo(() => {
        o && Ei(e(...o), t) && n(null, ...o);
      });
    };
  }), t;
}
function Bo(t = !1) {
  const n = (
    /** @type {ComponentContextLegacy} */
    K
  ), e = n.l.u;
  if (!e) return;
  let r = () => Fo(n.s);
  if (t) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Kr(() => {
      let s = !1;
      const l = n.s;
      for (const f in l)
        l[f] !== o[f] && (o[f] = l[f], s = !0);
      return s && i++, i;
    });
    r = () => T(a);
  }
  e.b.length && ks(() => {
    Si(n, r), fr(e.b);
  }), vr(() => {
    const i = ot(() => e.m.map(Ga));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), e.a.length && vr(() => {
    Si(n, r), fr(e.a);
  });
}
function Si(t, n) {
  if (t.l.s)
    for (const e of t.l.s) T(e);
  n();
}
let oe = !1;
function eu(t) {
  var n = oe;
  try {
    return oe = !1, [t(), oe];
  } finally {
    oe = n;
  }
}
function ru(t, n, e, r) {
  var i = !Tn || (e & qa) !== 0, o = (e & Ua) !== 0, a = (
    /** @type {V} */
    r
  ), s = !0, l = () => (s && (s = !1, a = /** @type {V} */
  r), a), f;
  {
    var u = en in t || Ja in t;
    f = ve(t, n)?.set ?? (u && n in t ? (m) => t[n] = m : void 0);
  }
  var h, c = !1;
  [h, c] = eu(() => (
    /** @type {V} */
    t[n]
  )), h === void 0 && r !== void 0 && (h = l(), f && (i && is(), f(h)));
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
  }, i && (e & Fa) === 0)
    return p;
  if (f) {
    var d = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, S) {
        return arguments.length > 0 ? ((!i || !S || d || c) && f(S ? p() : m), m) : p();
      })
    );
  }
  var w = !1, y = /* @__PURE__ */ Zr(() => (w = !1, p()));
  T(y);
  var x = (
    /** @type {Effect} */
    H
  );
  return (
    /** @type {() => V} */
    (function(m, S) {
      if (arguments.length > 0) {
        const M = S ? T(y) : i && o ? mn(m) : m;
        return F(y, M), w = !0, a !== void 0 && (a = M), m;
      }
      return hn && w || (x.f & fn) !== 0 ? y.v : T(y);
    })
  );
}
class sn {
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
function* iu(t) {
  for (const n of t)
    yield* n;
}
function Xo(t) {
  return Array.from(iu(t));
}
var ou = { value: () => {
} };
function ni() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new _e(e);
}
function _e(t) {
  this._ = t;
}
function au(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
_e.prototype = ni.prototype = {
  constructor: _e,
  on: function(t, n) {
    var e = this._, r = au(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = su(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = bi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = bi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new _e(t);
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
function su(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function bi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = ou, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var _r = "http://www.w3.org/1999/xhtml";
const Mi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _r,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ge(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Mi.hasOwnProperty(n) ? { space: Mi[n], local: t } : t;
}
function uu(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === _r && n.documentElement.namespaceURI === _r ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function lu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yo(t) {
  var n = Ge(t);
  return (n.local ? lu : uu)(n);
}
function fu() {
}
function ei(t) {
  return t == null ? fu : function() {
    return this.querySelector(t);
  };
}
function cu(t) {
  typeof t != "function" && (t = ei(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, f, u = 0; u < a; ++u)
      (l = o[u]) && (f = t.call(l, l.__data__, u, o)) && ("__data__" in l && (f.__data__ = l.__data__), s[u] = f);
  return new dt(r, this._parents);
}
function hu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function pu() {
  return [];
}
function Wo(t) {
  return t == null ? pu : function() {
    return this.querySelectorAll(t);
  };
}
function vu(t) {
  return function() {
    return hu(t.apply(this, arguments));
  };
}
function du(t) {
  typeof t == "function" ? t = vu(t) : t = Wo(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, f = 0; f < s; ++f)
      (l = a[f]) && (r.push(t.call(l, l.__data__, f, a)), i.push(l));
  return new dt(r, i);
}
function Go(t) {
  return function() {
    return this.matches(t);
  };
}
function Ko(t) {
  return function(n) {
    return n.matches(t);
  };
}
var _u = Array.prototype.find;
function gu(t) {
  return function() {
    return _u.call(this.children, t);
  };
}
function mu() {
  return this.firstElementChild;
}
function yu(t) {
  return this.select(t == null ? mu : gu(typeof t == "function" ? t : Ko(t)));
}
var wu = Array.prototype.filter;
function xu() {
  return Array.from(this.children);
}
function Eu(t) {
  return function() {
    return wu.call(this.children, t);
  };
}
function Su(t) {
  return this.selectAll(t == null ? xu : Eu(typeof t == "function" ? t : Ko(t)));
}
function bu(t) {
  typeof t != "function" && (t = Go(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, f = 0; f < a; ++f)
      (l = o[f]) && t.call(l, l.__data__, f, o) && s.push(l);
  return new dt(r, this._parents);
}
function Zo(t) {
  return new Array(t.length);
}
function Mu() {
  return new dt(this._enter || this._groups.map(Zo), this._parents);
}
function Ie(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Ie.prototype = {
  constructor: Ie,
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
function Au(t) {
  return function() {
    return t;
  };
}
function Nu(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, f = o.length; a < f; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Ie(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function ku(t, n, e, r, i, o, a) {
  var s, l, f = /* @__PURE__ */ new Map(), u = n.length, h = o.length, c = new Array(u), p;
  for (s = 0; s < u; ++s)
    (l = n[s]) && (c[s] = p = a.call(l, l.__data__, s, n) + "", f.has(p) ? i[s] = l : f.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = f.get(p)) ? (r[s] = l, l.__data__ = o[s], f.delete(p)) : e[s] = new Ie(t, o[s]);
  for (s = 0; s < u; ++s)
    (l = n[s]) && f.get(c[s]) === l && (i[s] = l);
}
function Tu(t) {
  return t.__data__;
}
function Iu(t, n) {
  if (!arguments.length) return Array.from(this, Tu);
  var e = n ? ku : Nu, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Au(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), f = 0; f < o; ++f) {
    var u = r[f], h = i[f], c = h.length, p = Ru(t.call(u, u && u.__data__, f, r)), d = p.length, w = s[f] = new Array(d), y = a[f] = new Array(d), x = l[f] = new Array(c);
    e(u, h, w, y, x, p, n);
    for (var m = 0, S = 0, M, k; m < d; ++m)
      if (M = w[m]) {
        for (m >= S && (S = m + 1); !(k = y[S]) && ++S < d; ) ;
        M._next = k || null;
      }
  }
  return a = new dt(a, r), a._enter = s, a._exit = l, a;
}
function Ru(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Pu() {
  return new dt(this._exit || this._groups.map(Zo), this._parents);
}
function Cu(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function $u(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var f = e[l], u = r[l], h = f.length, c = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = f[d] || u[d]) && (c[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new dt(s, this._parents);
}
function Ou() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Du(t) {
  t || (t = zu);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), f, u = 0; u < s; ++u)
      (f = a[u]) && (l[u] = f);
    l.sort(n);
  }
  return new dt(i, this._parents).order();
}
function zu(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Lu() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function qu() {
  return Array.from(this);
}
function Fu() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Uu() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Hu() {
  return !this.node();
}
function Vu(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Bu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Yu(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Wu(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Gu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ku(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Zu(t, n) {
  var e = Ge(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Xu : Bu : typeof n == "function" ? e.local ? Ku : Gu : e.local ? Wu : Yu)(e, n));
}
function Jo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ju(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qu(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ju(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function tl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ju : typeof n == "function" ? ju : Qu)(t, n, e ?? "")) : Mn(this.node(), t);
}
function Mn(t, n) {
  return t.style.getPropertyValue(n) || Jo(t).getComputedStyle(t, null).getPropertyValue(n);
}
function nl(t) {
  return function() {
    delete this[t];
  };
}
function el(t, n) {
  return function() {
    this[t] = n;
  };
}
function rl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function il(t, n) {
  return arguments.length > 1 ? this.each((n == null ? nl : typeof n == "function" ? rl : el)(t, n)) : this.node()[t];
}
function Qo(t) {
  return t.trim().split(/^|\s+/);
}
function ri(t) {
  return t.classList || new jo(t);
}
function jo(t) {
  this._node = t, this._names = Qo(t.getAttribute("class") || "");
}
jo.prototype = {
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
function ta(t, n) {
  for (var e = ri(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function na(t, n) {
  for (var e = ri(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ol(t) {
  return function() {
    ta(this, t);
  };
}
function al(t) {
  return function() {
    na(this, t);
  };
}
function sl(t, n) {
  return function() {
    (n.apply(this, arguments) ? ta : na)(this, t);
  };
}
function ul(t, n) {
  var e = Qo(t + "");
  if (arguments.length < 2) {
    for (var r = ri(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? sl : n ? ol : al)(e, n));
}
function ll() {
  this.textContent = "";
}
function fl(t) {
  return function() {
    this.textContent = t;
  };
}
function cl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function hl(t) {
  return arguments.length ? this.each(t == null ? ll : (typeof t == "function" ? cl : fl)(t)) : this.node().textContent;
}
function pl() {
  this.innerHTML = "";
}
function vl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function dl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function _l(t) {
  return arguments.length ? this.each(t == null ? pl : (typeof t == "function" ? dl : vl)(t)) : this.node().innerHTML;
}
function gl() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ml() {
  return this.each(gl);
}
function yl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wl() {
  return this.each(yl);
}
function xl(t) {
  var n = typeof t == "function" ? t : Yo(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function El() {
  return null;
}
function Sl(t, n) {
  var e = typeof t == "function" ? t : Yo(t), r = n == null ? El : typeof n == "function" ? n : ei(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function bl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ml() {
  return this.each(bl);
}
function Al() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Nl() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function kl(t) {
  return this.select(t ? Nl : Al);
}
function Tl(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Il(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Rl(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Pl(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Cl(t, n, e) {
  return function() {
    var r = this.__on, i, o = Il(n);
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
function $l(t, n, e) {
  var r = Rl(t + ""), i, o = r.length, a;
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
  for (s = n ? Cl : Pl, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ea(t, n, e) {
  var r = Jo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ol(t, n) {
  return function() {
    return ea(this, t, n);
  };
}
function Dl(t, n) {
  return function() {
    return ea(this, t, n.apply(this, arguments));
  };
}
function zl(t, n) {
  return this.each((typeof n == "function" ? Dl : Ol)(t, n));
}
function* Ll() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ra = [null];
function dt(t, n) {
  this._groups = t, this._parents = n;
}
function re() {
  return new dt([[document.documentElement]], ra);
}
function ql() {
  return this;
}
dt.prototype = re.prototype = {
  constructor: dt,
  select: cu,
  selectAll: du,
  selectChild: yu,
  selectChildren: Su,
  filter: bu,
  data: Iu,
  enter: Mu,
  exit: Pu,
  join: Cu,
  merge: $u,
  selection: ql,
  order: Ou,
  sort: Du,
  call: Lu,
  nodes: qu,
  node: Fu,
  size: Uu,
  empty: Hu,
  each: Vu,
  attr: Zu,
  style: tl,
  property: il,
  classed: ul,
  text: hl,
  html: _l,
  raise: ml,
  lower: wl,
  append: xl,
  insert: Sl,
  remove: Ml,
  clone: kl,
  datum: Tl,
  on: $l,
  dispatch: zl,
  [Symbol.iterator]: Ll
};
function st(t) {
  return typeof t == "string" ? new dt([[document.querySelector(t)]], [document.documentElement]) : new dt([[t]], ra);
}
function Fl(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Qt(t, n) {
  if (t = Fl(t), n === void 0 && (n = t.currentTarget), n) {
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
const gr = { capture: !0, passive: !1 };
function mr(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ul(t) {
  var n = t.document.documentElement, e = st(t).on("dragstart.drag", mr, gr);
  "onselectstart" in n ? e.on("selectstart.drag", mr, gr) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Hl(t, n) {
  var e = t.document.documentElement, r = st(t).on("dragstart.drag", null);
  n && (r.on("click.drag", mr, gr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
function ii(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ia(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function ie() {
}
var Wn = 0.7, Re = 1 / Wn, En = "\\s*([+-]?\\d+)\\s*", Gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vl = /^#([0-9a-f]{3,8})$/, Bl = new RegExp(`^rgb\\(${En},${En},${En}\\)$`), Xl = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), Yl = new RegExp(`^rgba\\(${En},${En},${En},${Gn}\\)$`), Wl = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Gn}\\)$`), Gl = new RegExp(`^hsl\\(${Gn},${Ct},${Ct}\\)$`), Kl = new RegExp(`^hsla\\(${Gn},${Ct},${Ct},${Gn}\\)$`), Ai = {
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
ii(ie, Kn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ni,
  // Deprecated! Use color.formatHex.
  formatHex: Ni,
  formatHex8: Zl,
  formatHsl: Jl,
  formatRgb: ki,
  toString: ki
});
function Ni() {
  return this.rgb().formatHex();
}
function Zl() {
  return this.rgb().formatHex8();
}
function Jl() {
  return oa(this).formatHsl();
}
function ki() {
  return this.rgb().formatRgb();
}
function Kn(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Vl.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ti(n) : e === 3 ? new lt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ae(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ae(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Bl.exec(t)) ? new lt(n[1], n[2], n[3], 1) : (n = Xl.exec(t)) ? new lt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Yl.exec(t)) ? ae(n[1], n[2], n[3], n[4]) : (n = Wl.exec(t)) ? ae(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Gl.exec(t)) ? Pi(n[1], n[2] / 100, n[3] / 100, 1) : (n = Kl.exec(t)) ? Pi(n[1], n[2] / 100, n[3] / 100, n[4]) : Ai.hasOwnProperty(t) ? Ti(Ai[t]) : t === "transparent" ? new lt(NaN, NaN, NaN, 0) : null;
}
function Ti(t) {
  return new lt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ae(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new lt(t, n, e, r);
}
function Ql(t) {
  return t instanceof ie || (t = Kn(t)), t ? (t = t.rgb(), new lt(t.r, t.g, t.b, t.opacity)) : new lt();
}
function yr(t, n, e, r) {
  return arguments.length === 1 ? Ql(t) : new lt(t, n, e, r ?? 1);
}
function lt(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ii(lt, yr, ia(ie, {
  brighter(t) {
    return t = t == null ? Re : Math.pow(Re, t), new lt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Wn : Math.pow(Wn, t), new lt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new lt(an(this.r), an(this.g), an(this.b), Pe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ii,
  // Deprecated! Use color.formatHex.
  formatHex: Ii,
  formatHex8: jl,
  formatRgb: Ri,
  toString: Ri
}));
function Ii() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}`;
}
function jl() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}${tn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ri() {
  const t = Pe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${an(this.r)}, ${an(this.g)}, ${an(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Pe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function an(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function tn(t) {
  return t = an(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Pi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new At(t, n, e, r);
}
function oa(t) {
  if (t instanceof At) return new At(t.h, t.s, t.l, t.opacity);
  if (t instanceof ie || (t = Kn(t)), !t) return new At();
  if (t instanceof At) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new At(a, s, l, t.opacity);
}
function tf(t, n, e, r) {
  return arguments.length === 1 ? oa(t) : new At(t, n, e, r ?? 1);
}
function At(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ii(At, tf, ia(ie, {
  brighter(t) {
    return t = t == null ? Re : Math.pow(Re, t), new At(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Wn : Math.pow(Wn, t), new At(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new lt(
      er(t >= 240 ? t - 240 : t + 120, i, r),
      er(t, i, r),
      er(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new At(Ci(this.h), se(this.s), se(this.l), Pe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Pe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ci(this.h)}, ${se(this.s) * 100}%, ${se(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ci(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function se(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function er(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const aa = (t) => () => t;
function nf(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ef(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function rf(t) {
  return (t = +t) == 1 ? sa : function(n, e) {
    return e - n ? ef(n, e, t) : aa(isNaN(n) ? e : n);
  };
}
function sa(t, n) {
  var e = n - t;
  return e ? nf(t, e) : aa(isNaN(t) ? n : t);
}
const $i = (function t(n) {
  var e = rf(n);
  function r(i, o) {
    var a = e((i = yr(i)).r, (o = yr(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), f = sa(i.opacity, o.opacity);
    return function(u) {
      return i.r = a(u), i.g = s(u), i.b = l(u), i.opacity = f(u), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Gt(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
var wr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rr = new RegExp(wr.source, "g");
function of(t) {
  return function() {
    return t;
  };
}
function af(t) {
  return function(n) {
    return t(n) + "";
  };
}
function sf(t, n) {
  var e = wr.lastIndex = rr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = wr.exec(t)) && (i = rr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: Gt(r, i) })), e = rr.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? af(l[0].x) : of(n) : (n = l.length, function(f) {
    for (var u = 0, h; u < n; ++u) s[(h = l[u]).i] = h.x(f);
    return s.join("");
  });
}
var Oi = 180 / Math.PI, xr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ua(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Oi,
    skewX: Math.atan(l) * Oi,
    scaleX: a,
    scaleY: s
  };
}
var ue;
function uf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? xr : ua(n.a, n.b, n.c, n.d, n.e, n.f);
}
function lf(t) {
  return t == null || (ue || (ue = document.createElementNS("http://www.w3.org/2000/svg", "g")), ue.setAttribute("transform", t), !(t = ue.transform.baseVal.consolidate())) ? xr : (t = t.matrix, ua(t.a, t.b, t.c, t.d, t.e, t.f));
}
function la(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, u, h, c, p, d) {
    if (f !== h || u !== c) {
      var w = p.push("translate(", null, n, null, e);
      d.push({ i: w - 4, x: Gt(f, h) }, { i: w - 2, x: Gt(u, c) });
    } else (h || c) && p.push("translate(" + h + n + c + e);
  }
  function a(f, u, h, c) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Gt(f, u) })) : u && h.push(i(h) + "rotate(" + u + r);
  }
  function s(f, u, h, c) {
    f !== u ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Gt(f, u) }) : u && h.push(i(h) + "skewX(" + u + r);
  }
  function l(f, u, h, c, p, d) {
    if (f !== h || u !== c) {
      var w = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: w - 4, x: Gt(f, h) }, { i: w - 2, x: Gt(u, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(f, u) {
    var h = [], c = [];
    return f = t(f), u = t(u), o(f.translateX, f.translateY, u.translateX, u.translateY, h, c), a(f.rotate, u.rotate, h, c), s(f.skewX, u.skewX, h, c), l(f.scaleX, f.scaleY, u.scaleX, u.scaleY, h, c), f = u = null, function(p) {
      for (var d = -1, w = c.length, y; ++d < w; ) h[(y = c[d]).i] = y.x(p);
      return h.join("");
    };
  };
}
var ff = la(uf, "px, ", "px)", "deg)"), cf = la(lf, ", ", ")", ")"), hf = 1e-12;
function Di(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function pf(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function vf(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const df = (function t(n, e, r) {
  function i(o, a) {
    var s = o[0], l = o[1], f = o[2], u = a[0], h = a[1], c = a[2], p = u - s, d = h - l, w = p * p + d * d, y, x;
    if (w < hf)
      x = Math.log(c / f) / n, y = function(z) {
        return [
          s + z * p,
          l + z * d,
          f * Math.exp(n * z * x)
        ];
      };
    else {
      var m = Math.sqrt(w), S = (c * c - f * f + r * w) / (2 * f * e * m), M = (c * c - f * f - r * w) / (2 * c * e * m), k = Math.log(Math.sqrt(S * S + 1) - S), I = Math.log(Math.sqrt(M * M + 1) - M);
      x = (I - k) / n, y = function(z) {
        var D = z * x, P = Di(k), R = f / (e * m) * (P * vf(n * D + k) - pf(k));
        return [
          s + R * p,
          l + R * d,
          f * P / Di(n * D + k)
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
var An = 0, Dn = 0, $n = 0, fa = 1e3, Ce, zn, $e = 0, un = 0, Ke = 0, Zn = typeof performance == "object" && performance.now ? performance : Date, ca = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function oi() {
  return un || (ca(_f), un = Zn.now() + Ke);
}
function _f() {
  un = 0;
}
function Oe() {
  this._call = this._time = this._next = null;
}
Oe.prototype = ha.prototype = {
  constructor: Oe,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? oi() : +e) + (n == null ? 0 : +n), !this._next && zn !== this && (zn ? zn._next = this : Ce = this, zn = this), this._call = t, this._time = e, Er();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Er());
  }
};
function ha(t, n, e) {
  var r = new Oe();
  return r.restart(t, n, e), r;
}
function gf() {
  oi(), ++An;
  for (var t = Ce, n; t; )
    (n = un - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --An;
}
function zi() {
  un = ($e = Zn.now()) + Ke, An = Dn = 0;
  try {
    gf();
  } finally {
    An = 0, yf(), un = 0;
  }
}
function mf() {
  var t = Zn.now(), n = t - $e;
  n > fa && (Ke -= n, $e = t);
}
function yf() {
  for (var t, n = Ce, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Ce = e);
  zn = t, Er(r);
}
function Er(t) {
  if (!An) {
    Dn && (Dn = clearTimeout(Dn));
    var n = t - un;
    n > 24 ? (t < 1 / 0 && (Dn = setTimeout(zi, t - Zn.now() - Ke)), $n && ($n = clearInterval($n))) : ($n || ($e = Zn.now(), $n = setInterval(mf, fa)), An = 1, ca(zi));
  }
}
function Li(t, n, e) {
  var r = new Oe();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var wf = ni("start", "end", "cancel", "interrupt"), xf = [], pa = 0, qi = 1, Sr = 2, ge = 3, Fi = 4, br = 5, me = 6;
function Ze(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ef(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: wf,
    tween: xf,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: pa
  });
}
function ai(t, n) {
  var e = kt(t, n);
  if (e.state > pa) throw new Error("too late; already scheduled");
  return e;
}
function Dt(t, n) {
  var e = kt(t, n);
  if (e.state > ge) throw new Error("too late; already running");
  return e;
}
function kt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ef(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ha(o, 0, e.time);
  function o(f) {
    e.state = qi, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var u, h, c, p;
    if (e.state !== qi) return l();
    for (u in r)
      if (p = r[u], p.name === e.name) {
        if (p.state === ge) return Li(a);
        p.state === Fi ? (p.state = me, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[u]) : +u < n && (p.state = me, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[u]);
      }
    if (Li(function() {
      e.state === ge && (e.state = Fi, e.timer.restart(s, e.delay, e.time), s(f));
    }), e.state = Sr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Sr) {
      for (e.state = ge, i = new Array(c = e.tween.length), u = 0, h = -1; u < c; ++u)
        (p = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(f) {
    for (var u = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(l), e.state = br, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, u);
    e.state === br && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = me, e.timer.stop(), delete r[n];
    for (var f in r) return;
    delete t.__transition;
  }
}
function ye(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Sr && r.state < br, r.state = me, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Sf(t) {
  return this.each(function() {
    ye(this, t);
  });
}
function bf(t, n) {
  var e, r;
  return function() {
    var i = Dt(this, t), o = i.tween;
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
function Mf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Dt(this, t), a = o.tween;
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
function Af(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = kt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? bf : Mf)(e, t, n));
}
function si(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Dt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return kt(i, r).value[n];
  };
}
function va(t, n) {
  var e;
  return (typeof n == "number" ? Gt : n instanceof Kn ? $i : (e = Kn(n)) ? (n = e, $i) : sf)(t, n);
}
function Nf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function kf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Tf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function If(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Rf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Pf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Cf(t, n) {
  var e = Ge(t), r = e === "transform" ? cf : va;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Pf : Rf)(e, r, si(this, "attr." + t, n)) : n == null ? (e.local ? kf : Nf)(e) : (e.local ? If : Tf)(e, r, n));
}
function $f(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Of(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Df(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Of(t, o)), e;
  }
  return i._value = n, i;
}
function zf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && $f(t, o)), e;
  }
  return i._value = n, i;
}
function Lf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ge(t);
  return this.tween(e, (r.local ? Df : zf)(r, n));
}
function qf(t, n) {
  return function() {
    ai(this, t).delay = +n.apply(this, arguments);
  };
}
function Ff(t, n) {
  return n = +n, function() {
    ai(this, t).delay = n;
  };
}
function Uf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? qf : Ff)(n, t)) : kt(this.node(), n).delay;
}
function Hf(t, n) {
  return function() {
    Dt(this, t).duration = +n.apply(this, arguments);
  };
}
function Vf(t, n) {
  return n = +n, function() {
    Dt(this, t).duration = n;
  };
}
function Bf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Hf : Vf)(n, t)) : kt(this.node(), n).duration;
}
function Xf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Dt(this, t).ease = n;
  };
}
function Yf(t) {
  var n = this._id;
  return arguments.length ? this.each(Xf(n, t)) : kt(this.node(), n).ease;
}
function Wf(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Dt(this, t).ease = e;
  };
}
function Gf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Wf(this._id, t));
}
function Kf(t) {
  typeof t != "function" && (t = Go(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, f = 0; f < a; ++f)
      (l = o[f]) && t.call(l, l.__data__, f, o) && s.push(l);
  return new Vt(r, this._parents, this._name, this._id);
}
function Zf(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], f = e[s], u = l.length, h = a[s] = new Array(u), c, p = 0; p < u; ++p)
      (c = l[p] || f[p]) && (h[p] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Vt(a, this._parents, this._name, this._id);
}
function Jf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Qf(t, n, e) {
  var r, i, o = Jf(n) ? ai : Dt;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function jf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? kt(this.node(), e).on.on(t) : this.each(Qf(e, t, n));
}
function tc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function nc() {
  return this.on("end.remove", tc(this._id));
}
function ec(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ei(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, f = o[a] = new Array(l), u, h, c = 0; c < l; ++c)
      (u = s[c]) && (h = t.call(u, u.__data__, c, s)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, Ze(f[c], n, e, c, f, kt(u, e)));
  return new Vt(o, this._parents, n, e);
}
function rc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Wo(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], f = l.length, u, h = 0; h < f; ++h)
      if (u = l[h]) {
        for (var c = t.call(u, u.__data__, h, l), p, d = kt(u, e), w = 0, y = c.length; w < y; ++w)
          (p = c[w]) && Ze(p, n, e, w, c, d);
        o.push(c), a.push(u);
      }
  return new Vt(o, a, n, e);
}
var ic = re.prototype.constructor;
function oc() {
  return new ic(this._groups, this._parents);
}
function ac(t, n) {
  var e, r, i;
  return function() {
    var o = Mn(this, t), a = (this.style.removeProperty(t), Mn(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function da(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function sc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Mn(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function uc(t, n, e) {
  var r, i, o;
  return function() {
    var a = Mn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Mn(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function lc(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = Dt(this, t), f = l.on, u = l.value[o] == null ? s || (s = da(n)) : void 0;
    (f !== e || i !== u) && (r = (e = f).copy()).on(a, i = u), l.on = r;
  };
}
function fc(t, n, e) {
  var r = (t += "") == "transform" ? ff : va;
  return n == null ? this.styleTween(t, ac(t, r)).on("end.style." + t, da(t)) : typeof n == "function" ? this.styleTween(t, uc(t, r, si(this, "style." + t, n))).each(lc(this._id, t)) : this.styleTween(t, sc(t, r, n), e).on("end.style." + t, null);
}
function cc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function hc(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && cc(t, a, e)), r;
  }
  return o._value = n, o;
}
function pc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, hc(t, n, e ?? ""));
}
function vc(t) {
  return function() {
    this.textContent = t;
  };
}
function dc(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function _c(t) {
  return this.tween("text", typeof t == "function" ? dc(si(this, "text", t)) : vc(t == null ? "" : t + ""));
}
function gc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function mc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && gc(i)), n;
  }
  return r._value = t, r;
}
function yc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, mc(t));
}
function wc() {
  for (var t = this._name, n = this._id, e = _a(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, f = 0; f < s; ++f)
      if (l = a[f]) {
        var u = kt(l, n);
        Ze(l, t, e, f, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Vt(r, this._parents, t, e);
}
function xc() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var f = Dt(this, r), u = f.on;
      u !== t && (n = (t = u).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), f.on = n;
    }), i === 0 && o();
  });
}
var Ec = 0;
function Vt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function _a() {
  return ++Ec;
}
var zt = re.prototype;
Vt.prototype = {
  constructor: Vt,
  select: ec,
  selectAll: rc,
  selectChild: zt.selectChild,
  selectChildren: zt.selectChildren,
  filter: Kf,
  merge: Zf,
  selection: oc,
  transition: wc,
  call: zt.call,
  nodes: zt.nodes,
  node: zt.node,
  size: zt.size,
  empty: zt.empty,
  each: zt.each,
  on: jf,
  attr: Cf,
  attrTween: Lf,
  style: fc,
  styleTween: pc,
  text: _c,
  textTween: yc,
  remove: nc,
  tween: Af,
  delay: Uf,
  duration: Bf,
  ease: Yf,
  easeVarying: Gf,
  end: xc,
  [Symbol.iterator]: zt[Symbol.iterator]
};
function Sc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var bc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Sc
};
function Mc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ac(t) {
  var n, e;
  t instanceof Vt ? (n = t._id, t = t._name) : (n = _a(), (e = bc).time = oi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, f = 0; f < s; ++f)
      (l = a[f]) && Ze(l, t, n, f, a, e || Mc(l, n));
  return new Vt(r, this._parents, t, n);
}
re.prototype.interrupt = Sf;
re.prototype.transition = Ac;
var X = 1e-6, U = Math.PI, ft = U / 2, Ui = U / 4, _t = U * 2, pt = 180 / U, tt = U / 180, W = Math.abs, ga = Math.atan, Jn = Math.atan2, Z = Math.cos, Nc = Math.exp, kc = Math.log, J = Math.sin, Tc = Math.sign || function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}, pn = Math.sqrt, Ic = Math.tan;
function Rc(t) {
  return t > 1 ? 0 : t < -1 ? U : Math.acos(t);
}
function Qn(t) {
  return t > 1 ? ft : t < -1 ? -ft : Math.asin(t);
}
function wt() {
}
function De(t, n) {
  t && Vi.hasOwnProperty(t.type) && Vi[t.type](t, n);
}
var Hi = {
  Feature: function(t, n) {
    De(t.geometry, n);
  },
  FeatureCollection: function(t, n) {
    for (var e = t.features, r = -1, i = e.length; ++r < i; ) De(e[r].geometry, n);
  }
}, Vi = {
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
    Mr(t.coordinates, n, 0);
  },
  MultiLineString: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Mr(e[r], n, 0);
  },
  Polygon: function(t, n) {
    Bi(t.coordinates, n);
  },
  MultiPolygon: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Bi(e[r], n);
  },
  GeometryCollection: function(t, n) {
    for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) De(e[r], n);
  }
};
function Mr(t, n, e) {
  var r = -1, i = t.length - e, o;
  for (n.lineStart(); ++r < i; ) o = t[r], n.point(o[0], o[1], o[2]);
  n.lineEnd();
}
function Bi(t, n) {
  var e = -1, r = t.length;
  for (n.polygonStart(); ++e < r; ) Mr(t[e], n, 1);
  n.polygonEnd();
}
function gn(t, n) {
  t && Hi.hasOwnProperty(t.type) ? Hi[t.type](t, n) : De(t, n);
}
function Ar(t) {
  return [Jn(t[1], t[0]), Qn(t[2])];
}
function Nn(t) {
  var n = t[0], e = t[1], r = Z(e);
  return [r * Z(n), r * J(n), J(e)];
}
function le(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function ze(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function ir(t, n) {
  t[0] += n[0], t[1] += n[1], t[2] += n[2];
}
function fe(t, n) {
  return [t[0] * n, t[1] * n, t[2] * n];
}
function Nr(t) {
  var n = pn(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= n, t[1] /= n, t[2] /= n;
}
function kr(t, n) {
  function e(r, i) {
    return r = t(r, i), n(r[0], r[1]);
  }
  return t.invert && n.invert && (e.invert = function(r, i) {
    return r = n.invert(r, i), r && t.invert(r[0], r[1]);
  }), e;
}
function Tr(t, n) {
  return W(t) > U && (t -= Math.round(t / _t) * _t), [t, n];
}
Tr.invert = Tr;
function ma(t, n, e) {
  return (t %= _t) ? n || e ? kr(Yi(t), Wi(n, e)) : Yi(t) : n || e ? Wi(n, e) : Tr;
}
function Xi(t) {
  return function(n, e) {
    return n += t, W(n) > U && (n -= Math.round(n / _t) * _t), [n, e];
  };
}
function Yi(t) {
  var n = Xi(t);
  return n.invert = Xi(-t), n;
}
function Wi(t, n) {
  var e = Z(t), r = J(t), i = Z(n), o = J(n);
  function a(s, l) {
    var f = Z(l), u = Z(s) * f, h = J(s) * f, c = J(l), p = c * e + u * r;
    return [
      Jn(h * i - p * o, u * e - c * r),
      Qn(p * i + h * o)
    ];
  }
  return a.invert = function(s, l) {
    var f = Z(l), u = Z(s) * f, h = J(s) * f, c = J(l), p = c * i - h * o;
    return [
      Jn(h * i + c * o, u * e + p * r),
      Qn(p * e - u * r)
    ];
  }, a;
}
function Pc(t) {
  t = ma(t[0] * tt, t[1] * tt, t.length > 2 ? t[2] * tt : 0);
  function n(e) {
    return e = t(e[0] * tt, e[1] * tt), e[0] *= pt, e[1] *= pt, e;
  }
  return n.invert = function(e) {
    return e = t.invert(e[0] * tt, e[1] * tt), e[0] *= pt, e[1] *= pt, e;
  }, n;
}
function Cc(t, n, e, r, i, o) {
  if (e) {
    var a = Z(n), s = J(n), l = r * e;
    i == null ? (i = n + r * _t, o = n - l / 2) : (i = Gi(a, i), o = Gi(a, o), (r > 0 ? i < o : i > o) && (i += r * _t));
    for (var f, u = i; r > 0 ? u > o : u < o; u -= l)
      f = Ar([a, -s * Z(u), -s * J(u)]), t.point(f[0], f[1]);
  }
}
function Gi(t, n) {
  n = Nn(n), n[0] -= t, Nr(n);
  var e = Rc(-n[1]);
  return ((-n[2] < 0 ? -e : e) + _t - X) % _t;
}
function ya() {
  var t = [], n;
  return {
    point: function(e, r, i) {
      n.push([e, r, i]);
    },
    lineStart: function() {
      t.push(n = []);
    },
    lineEnd: wt,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var e = t;
      return t = [], n = null, e;
    }
  };
}
function we(t, n) {
  return W(t[0] - n[0]) < X && W(t[1] - n[1]) < X;
}
function ce(t, n, e, r) {
  this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function wa(t, n, e, r, i) {
  var o = [], a = [], s, l;
  if (t.forEach(function(d) {
    if (!((w = d.length - 1) <= 0)) {
      var w, y = d[0], x = d[w], m;
      if (we(y, x)) {
        if (!y[2] && !x[2]) {
          for (i.lineStart(), s = 0; s < w; ++s) i.point((y = d[s])[0], y[1]);
          i.lineEnd();
          return;
        }
        x[0] += 2 * X;
      }
      o.push(m = new ce(y, d, null, !0)), a.push(m.o = new ce(y, null, m, !1)), o.push(m = new ce(x, d, null, !1)), a.push(m.o = new ce(x, null, m, !0));
    }
  }), !!o.length) {
    for (a.sort(n), Ki(o), Ki(a), s = 0, l = a.length; s < l; ++s)
      a[s].e = e = !e;
    for (var f = o[0], u, h; ; ) {
      for (var c = f, p = !0; c.v; ) if ((c = c.n) === f) return;
      u = c.z, i.lineStart();
      do {
        if (c.v = c.o.v = !0, c.e) {
          if (p)
            for (s = 0, l = u.length; s < l; ++s) i.point((h = u[s])[0], h[1]);
          else
            r(c.x, c.n.x, 1, i);
          c = c.n;
        } else {
          if (p)
            for (u = c.p.z, s = u.length - 1; s >= 0; --s) i.point((h = u[s])[0], h[1]);
          else
            r(c.x, c.p.x, -1, i);
          c = c.p;
        }
        c = c.o, u = c.z, p = !p;
      } while (!c.v);
      i.lineEnd();
    }
  }
}
function Ki(t) {
  if (n = t.length) {
    for (var n, e = 0, r = t[0], i; ++e < n; )
      r.n = i = t[e], i.p = r, r = i;
    r.n = i = t[0], i.p = r;
  }
}
function or(t) {
  return W(t[0]) <= U ? t[0] : Tc(t[0]) * ((W(t[0]) + U) % _t - U);
}
function $c(t, n) {
  var e = or(n), r = n[1], i = J(r), o = [J(e), -Z(e), 0], a = 0, s = 0, l = new sn();
  i === 1 ? r = ft + X : i === -1 && (r = -ft - X);
  for (var f = 0, u = t.length; f < u; ++f)
    if (c = (h = t[f]).length)
      for (var h, c, p = h[c - 1], d = or(p), w = p[1] / 2 + Ui, y = J(w), x = Z(w), m = 0; m < c; ++m, d = M, y = I, x = z, p = S) {
        var S = h[m], M = or(S), k = S[1] / 2 + Ui, I = J(k), z = Z(k), D = M - d, P = D >= 0 ? 1 : -1, R = P * D, b = R > U, O = y * I;
        if (l.add(Jn(O * P * J(R), x * z + O * Z(R))), a += b ? D + P * _t : D, b ^ d >= e ^ M >= e) {
          var $ = ze(Nn(p), Nn(S));
          Nr($);
          var v = ze(o, $);
          Nr(v);
          var _ = (b ^ D >= 0 ? -1 : 1) * Qn(v[2]);
          (r > _ || r === _ && ($[0] || $[1])) && (s += b ^ D >= 0 ? 1 : -1);
        }
      }
  return (a < -X || a < X && l < -1e-12) ^ s & 1;
}
function xa(t, n, e, r) {
  return function(i) {
    var o = n(i), a = ya(), s = n(a), l = !1, f, u, h, c = {
      point: p,
      lineStart: w,
      lineEnd: y,
      polygonStart: function() {
        c.point = x, c.lineStart = m, c.lineEnd = S, u = [], f = [];
      },
      polygonEnd: function() {
        c.point = p, c.lineStart = w, c.lineEnd = y, u = Xo(u);
        var M = $c(f, r);
        u.length ? (l || (i.polygonStart(), l = !0), wa(u, Dc, M, e, i)) : M && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), u = f = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(M, k) {
      t(M, k) && i.point(M, k);
    }
    function d(M, k) {
      o.point(M, k);
    }
    function w() {
      c.point = d, o.lineStart();
    }
    function y() {
      c.point = p, o.lineEnd();
    }
    function x(M, k) {
      h.push([M, k]), s.point(M, k);
    }
    function m() {
      s.lineStart(), h = [];
    }
    function S() {
      x(h[0][0], h[0][1]), s.lineEnd();
      var M = s.clean(), k = a.result(), I, z = k.length, D, P, R;
      if (h.pop(), f.push(h), h = null, !!z) {
        if (M & 1) {
          if (P = k[0], (D = P.length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), I = 0; I < D; ++I) i.point((R = P[I])[0], R[1]);
            i.lineEnd();
          }
          return;
        }
        z > 1 && M & 2 && k.push(k.pop().concat(k.shift())), u.push(k.filter(Oc));
      }
    }
    return c;
  };
}
function Oc(t) {
  return t.length > 1;
}
function Dc(t, n) {
  return ((t = t.x)[0] < 0 ? t[1] - ft - X : ft - t[1]) - ((n = n.x)[0] < 0 ? n[1] - ft - X : ft - n[1]);
}
const Zi = xa(
  function() {
    return !0;
  },
  zc,
  qc,
  [-U, -ft]
);
function zc(t) {
  var n = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      t.lineStart(), i = 1;
    },
    point: function(o, a) {
      var s = o > 0 ? U : -U, l = W(o - n);
      W(l - U) < X ? (t.point(n, e = (e + a) / 2 > 0 ? ft : -ft), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), t.point(o, e), i = 0) : r !== s && l >= U && (W(n - r) < X && (n -= r * X), W(o - s) < X && (o -= s * X), e = Lc(n, e, o, a), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), i = 0), t.point(n = o, e = a), r = s;
    },
    lineEnd: function() {
      t.lineEnd(), n = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Lc(t, n, e, r) {
  var i, o, a = J(t - e);
  return W(a) > X ? ga((J(n) * (o = Z(r)) * J(e) - J(r) * (i = Z(n)) * J(t)) / (i * o * a)) : (n + r) / 2;
}
function qc(t, n, e, r) {
  var i;
  if (t == null)
    i = e * ft, r.point(-U, i), r.point(0, i), r.point(U, i), r.point(U, 0), r.point(U, -i), r.point(0, -i), r.point(-U, -i), r.point(-U, 0), r.point(-U, i);
  else if (W(t[0] - n[0]) > X) {
    var o = t[0] < n[0] ? U : -U;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(n[0], n[1]);
}
function Fc(t) {
  var n = Z(t), e = 2 * tt, r = n > 0, i = W(n) > X;
  function o(u, h, c, p) {
    Cc(p, t, e, c, u, h);
  }
  function a(u, h) {
    return Z(u) * Z(h) > n;
  }
  function s(u) {
    var h, c, p, d, w;
    return {
      lineStart: function() {
        d = p = !1, w = 1;
      },
      point: function(y, x) {
        var m = [y, x], S, M = a(y, x), k = r ? M ? 0 : f(y, x) : M ? f(y + (y < 0 ? U : -U), x) : 0;
        if (!h && (d = p = M) && u.lineStart(), M !== p && (S = l(h, m), (!S || we(h, S) || we(m, S)) && (m[2] = 1)), M !== p)
          w = 0, M ? (u.lineStart(), S = l(m, h), u.point(S[0], S[1])) : (S = l(h, m), u.point(S[0], S[1], 2), u.lineEnd()), h = S;
        else if (i && h && r ^ M) {
          var I;
          !(k & c) && (I = l(m, h, !0)) && (w = 0, r ? (u.lineStart(), u.point(I[0][0], I[0][1]), u.point(I[1][0], I[1][1]), u.lineEnd()) : (u.point(I[1][0], I[1][1]), u.lineEnd(), u.lineStart(), u.point(I[0][0], I[0][1], 3)));
        }
        M && (!h || !we(h, m)) && u.point(m[0], m[1]), h = m, p = M, c = k;
      },
      lineEnd: function() {
        p && u.lineEnd(), h = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return w | (d && p) << 1;
      }
    };
  }
  function l(u, h, c) {
    var p = Nn(u), d = Nn(h), w = [1, 0, 0], y = ze(p, d), x = le(y, y), m = y[0], S = x - m * m;
    if (!S) return !c && u;
    var M = n * x / S, k = -n * m / S, I = ze(w, y), z = fe(w, M), D = fe(y, k);
    ir(z, D);
    var P = I, R = le(z, P), b = le(P, P), O = R * R - b * (le(z, z) - 1);
    if (!(O < 0)) {
      var $ = pn(O), v = fe(P, (-R - $) / b);
      if (ir(v, z), v = Ar(v), !c) return v;
      var _ = u[0], g = h[0], E = u[1], N = h[1], A;
      g < _ && (A = _, _ = g, g = A);
      var C = g - _, L = W(C - U) < X, q = L || C < X;
      if (!L && N < E && (A = E, E = N, N = A), q ? L ? E + N > 0 ^ v[1] < (W(v[0] - _) < X ? E : N) : E <= v[1] && v[1] <= N : C > U ^ (_ <= v[0] && v[0] <= g)) {
        var B = fe(P, (-R + $) / b);
        return ir(B, z), [v, Ar(B)];
      }
    }
  }
  function f(u, h) {
    var c = r ? t : U - t, p = 0;
    return u < -c ? p |= 1 : u > c && (p |= 2), h < -c ? p |= 4 : h > c && (p |= 8), p;
  }
  return xa(a, s, o, r ? [0, -t] : [-U, t - U]);
}
function Uc(t, n, e, r, i, o) {
  var a = t[0], s = t[1], l = n[0], f = n[1], u = 0, h = 1, c = l - a, p = f - s, d;
  if (d = e - a, !(!c && d > 0)) {
    if (d /= c, c < 0) {
      if (d < u) return;
      d < h && (h = d);
    } else if (c > 0) {
      if (d > h) return;
      d > u && (u = d);
    }
    if (d = i - a, !(!c && d < 0)) {
      if (d /= c, c < 0) {
        if (d > h) return;
        d > u && (u = d);
      } else if (c > 0) {
        if (d < u) return;
        d < h && (h = d);
      }
      if (d = r - s, !(!p && d > 0)) {
        if (d /= p, p < 0) {
          if (d < u) return;
          d < h && (h = d);
        } else if (p > 0) {
          if (d > h) return;
          d > u && (u = d);
        }
        if (d = o - s, !(!p && d < 0)) {
          if (d /= p, p < 0) {
            if (d > h) return;
            d > u && (u = d);
          } else if (p > 0) {
            if (d < u) return;
            d < h && (h = d);
          }
          return u > 0 && (t[0] = a + u * c, t[1] = s + u * p), h < 1 && (n[0] = a + h * c, n[1] = s + h * p), !0;
        }
      }
    }
  }
}
var Ln = 1e9, he = -Ln;
function Hc(t, n, e, r) {
  function i(f, u) {
    return t <= f && f <= e && n <= u && u <= r;
  }
  function o(f, u, h, c) {
    var p = 0, d = 0;
    if (f == null || (p = a(f, h)) !== (d = a(u, h)) || l(f, u) < 0 ^ h > 0)
      do
        c.point(p === 0 || p === 3 ? t : e, p > 1 ? r : n);
      while ((p = (p + h + 4) % 4) !== d);
    else
      c.point(u[0], u[1]);
  }
  function a(f, u) {
    return W(f[0] - t) < X ? u > 0 ? 0 : 3 : W(f[0] - e) < X ? u > 0 ? 2 : 1 : W(f[1] - n) < X ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function s(f, u) {
    return l(f.x, u.x);
  }
  function l(f, u) {
    var h = a(f, 1), c = a(u, 1);
    return h !== c ? h - c : h === 0 ? u[1] - f[1] : h === 1 ? f[0] - u[0] : h === 2 ? f[1] - u[1] : u[0] - f[0];
  }
  return function(f) {
    var u = f, h = ya(), c, p, d, w, y, x, m, S, M, k, I, z = {
      point: D,
      lineStart: O,
      lineEnd: $,
      polygonStart: R,
      polygonEnd: b
    };
    function D(_, g) {
      i(_, g) && u.point(_, g);
    }
    function P() {
      for (var _ = 0, g = 0, E = p.length; g < E; ++g)
        for (var N = p[g], A = 1, C = N.length, L = N[0], q, B, Y = L[0], Q = L[1]; A < C; ++A)
          q = Y, B = Q, L = N[A], Y = L[0], Q = L[1], B <= r ? Q > r && (Y - q) * (r - B) > (Q - B) * (t - q) && ++_ : Q <= r && (Y - q) * (r - B) < (Q - B) * (t - q) && --_;
      return _;
    }
    function R() {
      u = h, c = [], p = [], I = !0;
    }
    function b() {
      var _ = P(), g = I && _, E = (c = Xo(c)).length;
      (g || E) && (f.polygonStart(), g && (f.lineStart(), o(null, null, 1, f), f.lineEnd()), E && wa(c, s, _, o, f), f.polygonEnd()), u = f, c = p = d = null;
    }
    function O() {
      z.point = v, p && p.push(d = []), k = !0, M = !1, m = S = NaN;
    }
    function $() {
      c && (v(w, y), x && M && h.rejoin(), c.push(h.result())), z.point = D, M && u.lineEnd();
    }
    function v(_, g) {
      var E = i(_, g);
      if (p && d.push([_, g]), k)
        w = _, y = g, x = E, k = !1, E && (u.lineStart(), u.point(_, g));
      else if (E && M) u.point(_, g);
      else {
        var N = [m = Math.max(he, Math.min(Ln, m)), S = Math.max(he, Math.min(Ln, S))], A = [_ = Math.max(he, Math.min(Ln, _)), g = Math.max(he, Math.min(Ln, g))];
        Uc(N, A, t, n, e, r) ? (M || (u.lineStart(), u.point(N[0], N[1])), u.point(A[0], A[1]), E || u.lineEnd(), I = !1) : E && (u.lineStart(), u.point(_, g), I = !1);
      }
      m = _, S = g, M = E;
    }
    return z;
  };
}
const Ir = (t) => t;
var ar = new sn(), Rr = new sn(), Ea, Sa, Pr, Cr, qt = {
  point: wt,
  lineStart: wt,
  lineEnd: wt,
  polygonStart: function() {
    qt.lineStart = Vc, qt.lineEnd = Xc;
  },
  polygonEnd: function() {
    qt.lineStart = qt.lineEnd = qt.point = wt, ar.add(W(Rr)), Rr = new sn();
  },
  result: function() {
    var t = ar / 2;
    return ar = new sn(), t;
  }
};
function Vc() {
  qt.point = Bc;
}
function Bc(t, n) {
  qt.point = ba, Ea = Pr = t, Sa = Cr = n;
}
function ba(t, n) {
  Rr.add(Cr * t - Pr * n), Pr = t, Cr = n;
}
function Xc() {
  ba(Ea, Sa);
}
var kn = 1 / 0, Le = kn, jn = -kn, qe = jn, Fe = {
  point: Yc,
  lineStart: wt,
  lineEnd: wt,
  polygonStart: wt,
  polygonEnd: wt,
  result: function() {
    var t = [[kn, Le], [jn, qe]];
    return jn = qe = -(Le = kn = 1 / 0), t;
  }
};
function Yc(t, n) {
  t < kn && (kn = t), t > jn && (jn = t), n < Le && (Le = n), n > qe && (qe = n);
}
var $r = 0, Or = 0, qn = 0, Ue = 0, He = 0, wn = 0, Dr = 0, zr = 0, Fn = 0, Ma, Aa, Rt, Pt, yt = {
  point: ln,
  lineStart: Ji,
  lineEnd: Qi,
  polygonStart: function() {
    yt.lineStart = Kc, yt.lineEnd = Zc;
  },
  polygonEnd: function() {
    yt.point = ln, yt.lineStart = Ji, yt.lineEnd = Qi;
  },
  result: function() {
    var t = Fn ? [Dr / Fn, zr / Fn] : wn ? [Ue / wn, He / wn] : qn ? [$r / qn, Or / qn] : [NaN, NaN];
    return $r = Or = qn = Ue = He = wn = Dr = zr = Fn = 0, t;
  }
};
function ln(t, n) {
  $r += t, Or += n, ++qn;
}
function Ji() {
  yt.point = Wc;
}
function Wc(t, n) {
  yt.point = Gc, ln(Rt = t, Pt = n);
}
function Gc(t, n) {
  var e = t - Rt, r = n - Pt, i = pn(e * e + r * r);
  Ue += i * (Rt + t) / 2, He += i * (Pt + n) / 2, wn += i, ln(Rt = t, Pt = n);
}
function Qi() {
  yt.point = ln;
}
function Kc() {
  yt.point = Jc;
}
function Zc() {
  Na(Ma, Aa);
}
function Jc(t, n) {
  yt.point = Na, ln(Ma = Rt = t, Aa = Pt = n);
}
function Na(t, n) {
  var e = t - Rt, r = n - Pt, i = pn(e * e + r * r);
  Ue += i * (Rt + t) / 2, He += i * (Pt + n) / 2, wn += i, i = Pt * t - Rt * n, Dr += i * (Rt + t), zr += i * (Pt + n), Fn += i * 3, ln(Rt = t, Pt = n);
}
function ka(t) {
  this._context = t;
}
ka.prototype = {
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
        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, _t);
        break;
      }
    }
  },
  result: wt
};
var Lr = new sn(), sr, Ta, Ia, Un, Hn, te = {
  point: wt,
  lineStart: function() {
    te.point = Qc;
  },
  lineEnd: function() {
    sr && Ra(Ta, Ia), te.point = wt;
  },
  polygonStart: function() {
    sr = !0;
  },
  polygonEnd: function() {
    sr = null;
  },
  result: function() {
    var t = +Lr;
    return Lr = new sn(), t;
  }
};
function Qc(t, n) {
  te.point = Ra, Ta = Un = t, Ia = Hn = n;
}
function Ra(t, n) {
  Un -= t, Hn -= n, Lr.add(pn(Un * Un + Hn * Hn)), Un = t, Hn = n;
}
let ji, Ve, to, no;
class eo {
  constructor(n) {
    this._append = n == null ? Pa : jc(n), this._radius = 4.5, this._ = "";
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
        if (this._append`M${n},${e}`, this._radius !== to || this._append !== Ve) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, to = r, Ve = this._append, no = this._, this._ = i;
        }
        this._ += no;
        break;
      }
    }
  }
  result() {
    const n = this._;
    return this._ = "", n.length ? n : null;
  }
}
function Pa(t) {
  let n = 1;
  this._ += t[0];
  for (const e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function jc(t) {
  const n = Math.floor(t);
  if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
  if (n > 15) return Pa;
  if (n !== ji) {
    const e = 10 ** n;
    ji = n, Ve = function(i) {
      let o = 1;
      this._ += i[0];
      for (const a = i.length; o < a; ++o)
        this._ += Math.round(arguments[o] * e) / e + i[o];
    };
  }
  return Ve;
}
function th(t, n) {
  let e = 3, r = 4.5, i, o;
  function a(s) {
    return s && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), gn(s, i(o))), o.result();
  }
  return a.area = function(s) {
    return gn(s, i(qt)), qt.result();
  }, a.measure = function(s) {
    return gn(s, i(te)), te.result();
  }, a.bounds = function(s) {
    return gn(s, i(Fe)), Fe.result();
  }, a.centroid = function(s) {
    return gn(s, i(yt)), yt.result();
  }, a.projection = function(s) {
    return arguments.length ? (i = s == null ? (t = null, Ir) : (t = s).stream, a) : t;
  }, a.context = function(s) {
    return arguments.length ? (o = s == null ? (n = null, new eo(e)) : new ka(n = s), typeof r != "function" && o.pointRadius(r), a) : n;
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
    return n === null && (o = new eo(e)), a;
  }, a.projection(t).digits(e).context(n);
}
function ui(t) {
  return function(n) {
    var e = new qr();
    for (var r in t) e[r] = t[r];
    return e.stream = n, e;
  };
}
function qr() {
}
qr.prototype = {
  constructor: qr,
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
function li(t, n, e) {
  var r = t.clipExtent && t.clipExtent();
  return t.scale(150).translate([0, 0]), r != null && t.clipExtent(null), gn(e, t.stream(Fe)), n(Fe.result()), r != null && t.clipExtent(r), t;
}
function Ca(t, n, e) {
  return li(t, function(r) {
    var i = n[1][0] - n[0][0], o = n[1][1] - n[0][1], a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), s = +n[0][0] + (i - a * (r[1][0] + r[0][0])) / 2, l = +n[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * a).translate([s, l]);
  }, e);
}
function nh(t, n, e) {
  return Ca(t, [[0, 0], n], e);
}
function eh(t, n, e) {
  return li(t, function(r) {
    var i = +n, o = i / (r[1][0] - r[0][0]), a = (i - o * (r[1][0] + r[0][0])) / 2, s = -o * r[0][1];
    t.scale(150 * o).translate([a, s]);
  }, e);
}
function rh(t, n, e) {
  return li(t, function(r) {
    var i = +n, o = i / (r[1][1] - r[0][1]), a = -o * r[0][0], s = (i - o * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * o).translate([a, s]);
  }, e);
}
var ro = 16, ih = Z(30 * tt);
function io(t, n) {
  return +n ? ah(t, n) : oh(t);
}
function oh(t) {
  return ui({
    point: function(n, e) {
      n = t(n, e), this.stream.point(n[0], n[1]);
    }
  });
}
function ah(t, n) {
  function e(r, i, o, a, s, l, f, u, h, c, p, d, w, y) {
    var x = f - r, m = u - i, S = x * x + m * m;
    if (S > 4 * n && w--) {
      var M = a + c, k = s + p, I = l + d, z = pn(M * M + k * k + I * I), D = Qn(I /= z), P = W(W(I) - 1) < X || W(o - h) < X ? (o + h) / 2 : Jn(k, M), R = t(P, D), b = R[0], O = R[1], $ = b - r, v = O - i, _ = m * $ - x * v;
      (_ * _ / S > n || W((x * $ + m * v) / S - 0.5) > 0.3 || a * c + s * p + l * d < ih) && (e(r, i, o, a, s, l, b, O, P, M /= z, k /= z, I, w, y), y.point(b, O), e(b, O, P, M, k, I, f, u, h, c, p, d, w, y));
    }
  }
  return function(r) {
    var i, o, a, s, l, f, u, h, c, p, d, w, y = {
      point: x,
      lineStart: m,
      lineEnd: M,
      polygonStart: function() {
        r.polygonStart(), y.lineStart = k;
      },
      polygonEnd: function() {
        r.polygonEnd(), y.lineStart = m;
      }
    };
    function x(D, P) {
      D = t(D, P), r.point(D[0], D[1]);
    }
    function m() {
      h = NaN, y.point = S, r.lineStart();
    }
    function S(D, P) {
      var R = Nn([D, P]), b = t(D, P);
      e(h, c, u, p, d, w, h = b[0], c = b[1], u = D, p = R[0], d = R[1], w = R[2], ro, r), r.point(h, c);
    }
    function M() {
      y.point = x, r.lineEnd();
    }
    function k() {
      m(), y.point = I, y.lineEnd = z;
    }
    function I(D, P) {
      S(i = D, P), o = h, a = c, s = p, l = d, f = w, y.point = S;
    }
    function z() {
      e(h, c, u, p, d, w, o, a, i, s, l, f, ro, r), y.lineEnd = M, M();
    }
    return y;
  };
}
var sh = ui({
  point: function(t, n) {
    this.stream.point(t * tt, n * tt);
  }
});
function uh(t) {
  return ui({
    point: function(n, e) {
      var r = t(n, e);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function lh(t, n, e, r, i) {
  function o(a, s) {
    return a *= r, s *= i, [n + t * a, e - t * s];
  }
  return o.invert = function(a, s) {
    return [(a - n) / t * r, (e - s) / t * i];
  }, o;
}
function oo(t, n, e, r, i, o) {
  if (!o) return lh(t, n, e, r, i);
  var a = Z(o), s = J(o), l = a * t, f = s * t, u = a / t, h = s / t, c = (s * e - a * n) / t, p = (s * n + a * e) / t;
  function d(w, y) {
    return w *= r, y *= i, [l * w - f * y + n, e - f * w - l * y];
  }
  return d.invert = function(w, y) {
    return [r * (u * w - h * y + c), i * (p - h * w - u * y)];
  }, d;
}
function fh(t) {
  return ch(function() {
    return t;
  })();
}
function ch(t) {
  var n, e = 150, r = 480, i = 250, o = 0, a = 0, s = 0, l = 0, f = 0, u, h = 0, c = 1, p = 1, d = null, w = Zi, y = null, x, m, S, M = Ir, k = 0.5, I, z, D, P, R;
  function b(_) {
    return D(_[0] * tt, _[1] * tt);
  }
  function O(_) {
    return _ = D.invert(_[0], _[1]), _ && [_[0] * pt, _[1] * pt];
  }
  b.stream = function(_) {
    return P && R === _ ? P : P = sh(uh(u)(w(I(M(R = _)))));
  }, b.preclip = function(_) {
    return arguments.length ? (w = _, d = void 0, v()) : w;
  }, b.postclip = function(_) {
    return arguments.length ? (M = _, y = x = m = S = null, v()) : M;
  }, b.clipAngle = function(_) {
    return arguments.length ? (w = +_ ? Fc(d = _ * tt) : (d = null, Zi), v()) : d * pt;
  }, b.clipExtent = function(_) {
    return arguments.length ? (M = _ == null ? (y = x = m = S = null, Ir) : Hc(y = +_[0][0], x = +_[0][1], m = +_[1][0], S = +_[1][1]), v()) : y == null ? null : [[y, x], [m, S]];
  }, b.scale = function(_) {
    return arguments.length ? (e = +_, $()) : e;
  }, b.translate = function(_) {
    return arguments.length ? (r = +_[0], i = +_[1], $()) : [r, i];
  }, b.center = function(_) {
    return arguments.length ? (o = _[0] % 360 * tt, a = _[1] % 360 * tt, $()) : [o * pt, a * pt];
  }, b.rotate = function(_) {
    return arguments.length ? (s = _[0] % 360 * tt, l = _[1] % 360 * tt, f = _.length > 2 ? _[2] % 360 * tt : 0, $()) : [s * pt, l * pt, f * pt];
  }, b.angle = function(_) {
    return arguments.length ? (h = _ % 360 * tt, $()) : h * pt;
  }, b.reflectX = function(_) {
    return arguments.length ? (c = _ ? -1 : 1, $()) : c < 0;
  }, b.reflectY = function(_) {
    return arguments.length ? (p = _ ? -1 : 1, $()) : p < 0;
  }, b.precision = function(_) {
    return arguments.length ? (I = io(z, k = _ * _), v()) : pn(k);
  }, b.fitExtent = function(_, g) {
    return Ca(b, _, g);
  }, b.fitSize = function(_, g) {
    return nh(b, _, g);
  }, b.fitWidth = function(_, g) {
    return eh(b, _, g);
  }, b.fitHeight = function(_, g) {
    return rh(b, _, g);
  };
  function $() {
    var _ = oo(e, 0, 0, c, p, h).apply(null, n(o, a)), g = oo(e, r - _[0], i - _[1], c, p, h);
    return u = ma(s, l, f), z = kr(n, g), D = kr(u, z), I = io(z, k), v();
  }
  function v() {
    return P = R = null, b;
  }
  return function() {
    return n = t.apply(this, arguments), b.invert = n.invert && O, $();
  };
}
function fi(t, n) {
  return [t, kc(Ic((ft + n) / 2))];
}
fi.invert = function(t, n) {
  return [t, 2 * ga(Nc(n)) - ft];
};
function hh() {
  return ph(fi).scale(961 / _t);
}
function ph(t) {
  var n = fh(t), e = n.center, r = n.scale, i = n.translate, o = n.clipExtent, a = null, s, l, f;
  n.scale = function(h) {
    return arguments.length ? (r(h), u()) : r();
  }, n.translate = function(h) {
    return arguments.length ? (i(h), u()) : i();
  }, n.center = function(h) {
    return arguments.length ? (e(h), u()) : e();
  }, n.clipExtent = function(h) {
    return arguments.length ? (h == null ? a = s = l = f = null : (a = +h[0][0], s = +h[0][1], l = +h[1][0], f = +h[1][1]), u()) : a == null ? null : [[a, s], [l, f]];
  };
  function u() {
    var h = U * r(), c = n(Pc(n.rotate()).invert([0, 0]));
    return o(a == null ? [[c[0] - h, c[1] - h], [c[0] + h, c[1] + h]] : t === fi ? [[Math.max(c[0] - h, a), s], [Math.min(c[0] + h, l), f]] : [[a, Math.max(c[1] - h, s)], [l, Math.min(c[1] + h, f)]]);
  }
  return u();
}
const pe = (t) => () => t;
function vh(t, {
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
function Ut(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ut.prototype = {
  constructor: Ut,
  scale: function(t) {
    return t === 1 ? this : new Ut(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ut(this.k, this.x + this.k * t, this.y + this.k * n);
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
var ci = new Ut(1, 0, 0);
Ut.prototype;
function ur(t) {
  t.stopImmediatePropagation();
}
function On(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function dh(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function _h() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function ao() {
  return this.__zoom || ci;
}
function gh(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function mh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function yh(t, n, e) {
  var r = t.invertX(n[0][0]) - e[0][0], i = t.invertX(n[1][0]) - e[1][0], o = t.invertY(n[0][1]) - e[0][1], a = t.invertY(n[1][1]) - e[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function wh() {
  var t = dh, n = _h, e = yh, r = gh, i = mh, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = df, f = ni("start", "zoom", "end"), u, h, c, p = 500, d = 150, w = 0, y = 10;
  function x(v) {
    v.property("__zoom", ao).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", P).on("dblclick.zoom", R).filter(i).on("touchstart.zoom", b).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", $).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(v, _, g, E) {
    var N = v.selection ? v.selection() : v;
    N.property("__zoom", ao), v !== N ? k(v, _, g, E) : N.interrupt().each(function() {
      I(this, arguments).event(E).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, x.scaleBy = function(v, _, g, E) {
    x.scaleTo(v, function() {
      var N = this.__zoom.k, A = typeof _ == "function" ? _.apply(this, arguments) : _;
      return N * A;
    }, g, E);
  }, x.scaleTo = function(v, _, g, E) {
    x.transform(v, function() {
      var N = n.apply(this, arguments), A = this.__zoom, C = g == null ? M(N) : typeof g == "function" ? g.apply(this, arguments) : g, L = A.invert(C), q = typeof _ == "function" ? _.apply(this, arguments) : _;
      return e(S(m(A, q), C, L), N, a);
    }, g, E);
  }, x.translateBy = function(v, _, g, E) {
    x.transform(v, function() {
      return e(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), n.apply(this, arguments), a);
    }, null, E);
  }, x.translateTo = function(v, _, g, E, N) {
    x.transform(v, function() {
      var A = n.apply(this, arguments), C = this.__zoom, L = E == null ? M(A) : typeof E == "function" ? E.apply(this, arguments) : E;
      return e(ci.translate(L[0], L[1]).scale(C.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), A, a);
    }, E, N);
  };
  function m(v, _) {
    return _ = Math.max(o[0], Math.min(o[1], _)), _ === v.k ? v : new Ut(_, v.x, v.y);
  }
  function S(v, _, g) {
    var E = _[0] - g[0] * v.k, N = _[1] - g[1] * v.k;
    return E === v.x && N === v.y ? v : new Ut(v.k, E, N);
  }
  function M(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function k(v, _, g, E) {
    v.on("start.zoom", function() {
      I(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      I(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var N = this, A = arguments, C = I(N, A).event(E), L = n.apply(N, A), q = g == null ? M(L) : typeof g == "function" ? g.apply(N, A) : g, B = Math.max(L[1][0] - L[0][0], L[1][1] - L[0][1]), Y = N.__zoom, Q = typeof _ == "function" ? _.apply(N, A) : _, St = l(Y.invert(q).concat(B / Y.k), Q.invert(q).concat(B / Q.k));
      return function(ct) {
        if (ct === 1) ct = Q;
        else {
          var bt = St(ct), nt = B / bt[2];
          ct = new Ut(nt, q[0] - bt[0] * nt, q[1] - bt[1] * nt);
        }
        C.zoom(null, ct);
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
      var _ = st(this.that).datum();
      f.call(
        v,
        this.that,
        new vh(v, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: f
        }),
        _
      );
    }
  };
  function D(v, ..._) {
    if (!t.apply(this, arguments)) return;
    var g = I(this, _).event(v), E = this.__zoom, N = Math.max(o[0], Math.min(o[1], E.k * Math.pow(2, r.apply(this, arguments)))), A = Qt(v);
    if (g.wheel)
      (g.mouse[0][0] !== A[0] || g.mouse[0][1] !== A[1]) && (g.mouse[1] = E.invert(g.mouse[0] = A)), clearTimeout(g.wheel);
    else {
      if (E.k === N) return;
      g.mouse = [A, E.invert(A)], ye(this), g.start();
    }
    On(v), g.wheel = setTimeout(C, d), g.zoom("mouse", e(S(m(E, N), g.mouse[0], g.mouse[1]), g.extent, a));
    function C() {
      g.wheel = null, g.end();
    }
  }
  function P(v, ..._) {
    if (c || !t.apply(this, arguments)) return;
    var g = v.currentTarget, E = I(this, _, !0).event(v), N = st(v.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", B, !0), A = Qt(v, g), C = v.clientX, L = v.clientY;
    Ul(v.view), ur(v), E.mouse = [A, this.__zoom.invert(A)], ye(this), E.start();
    function q(Y) {
      if (On(Y), !E.moved) {
        var Q = Y.clientX - C, St = Y.clientY - L;
        E.moved = Q * Q + St * St > w;
      }
      E.event(Y).zoom("mouse", e(S(E.that.__zoom, E.mouse[0] = Qt(Y, g), E.mouse[1]), E.extent, a));
    }
    function B(Y) {
      N.on("mousemove.zoom mouseup.zoom", null), Hl(Y.view, E.moved), On(Y), E.event(Y).end();
    }
  }
  function R(v, ..._) {
    if (t.apply(this, arguments)) {
      var g = this.__zoom, E = Qt(v.changedTouches ? v.changedTouches[0] : v, this), N = g.invert(E), A = g.k * (v.shiftKey ? 0.5 : 2), C = e(S(m(g, A), E, N), n.apply(this, _), a);
      On(v), s > 0 ? st(this).transition().duration(s).call(k, C, E, v) : st(this).call(x.transform, C, E, v);
    }
  }
  function b(v, ..._) {
    if (t.apply(this, arguments)) {
      var g = v.touches, E = g.length, N = I(this, _, v.changedTouches.length === E).event(v), A, C, L, q;
      for (ur(v), C = 0; C < E; ++C)
        L = g[C], q = Qt(L, this), q = [q, this.__zoom.invert(q), L.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== q[2] && (N.touch1 = q, N.taps = 0) : (N.touch0 = q, A = !0, N.taps = 1 + !!u);
      u && (u = clearTimeout(u)), A && (N.taps < 2 && (h = q[0], u = setTimeout(function() {
        u = null;
      }, p)), ye(this), N.start());
    }
  }
  function O(v, ..._) {
    if (this.__zooming) {
      var g = I(this, _).event(v), E = v.changedTouches, N = E.length, A, C, L, q;
      for (On(v), A = 0; A < N; ++A)
        C = E[A], L = Qt(C, this), g.touch0 && g.touch0[2] === C.identifier ? g.touch0[0] = L : g.touch1 && g.touch1[2] === C.identifier && (g.touch1[0] = L);
      if (C = g.that.__zoom, g.touch1) {
        var B = g.touch0[0], Y = g.touch0[1], Q = g.touch1[0], St = g.touch1[1], ct = (ct = Q[0] - B[0]) * ct + (ct = Q[1] - B[1]) * ct, bt = (bt = St[0] - Y[0]) * bt + (bt = St[1] - Y[1]) * bt;
        C = m(C, Math.sqrt(ct / bt)), L = [(B[0] + Q[0]) / 2, (B[1] + Q[1]) / 2], q = [(Y[0] + St[0]) / 2, (Y[1] + St[1]) / 2];
      } else if (g.touch0) L = g.touch0[0], q = g.touch0[1];
      else return;
      g.zoom("touch", e(S(C, L, q), g.extent, a));
    }
  }
  function $(v, ..._) {
    if (this.__zooming) {
      var g = I(this, _).event(v), E = v.changedTouches, N = E.length, A, C;
      for (ur(v), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, p), A = 0; A < N; ++A)
        C = E[A], g.touch0 && g.touch0[2] === C.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === C.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (C = Qt(C, this), Math.hypot(h[0] - C[0], h[1] - C[1]) < y)) {
        var L = st(this).on("dblclick.zoom");
        L && L.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : pe(+v), x) : r;
  }, x.filter = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : pe(!!v), x) : t;
  }, x.touchable = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : pe(!!v), x) : i;
  }, x.extent = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : pe([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), x) : n;
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
var xh = /* @__PURE__ */ Ot('<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>'), Eh = /* @__PURE__ */ Ot('<div class="error svelte-gouuy3"><p> </p></div>'), Sh = /* @__PURE__ */ Ot('<div class="interactive-map-container svelte-gouuy3"><!> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>');
function bh(t, n) {
  _o(n, !1);
  let e = /* @__PURE__ */ Ft(), r = [], i = null, o = /* @__PURE__ */ Ft(!0), a = /* @__PURE__ */ Ft(null), s = /* @__PURE__ */ Ft(null), l = null, f = ru(n, "selectedMunicipio", 8, "");
  async function u() {
    try {
      const R = await fetch("/municipios.csv");
      if (!R.ok)
        throw new Error(`Erro ao carregar CSV: ${R.status}`);
      const O = (await R.text()).split(`
`), $ = O[0].split(";");
      r = O.slice(1).map((g) => {
        const E = g.split(";"), N = {};
        return $.forEach((A, C) => {
          N[A] = E[C];
        }), N;
      }).filter((g) => g.MUNICIPIO).reduce(
        (g, E) => (g[E.MUNICIPIO] = E, g),
        {}
      ), console.log("CSV carregado com", Object.keys(r).length, "municípios"), console.log("Exemplos de municípios no CSV:", Object.keys(r).slice(0, 5)), console.log("Primeiros 5 municípios do CSV:", Object.keys(r).slice(0, 5).map((g) => ({ nome: g, dados: r[g] })));
      const _ = await fetch("/PortugalM.geojson");
      if (!_.ok)
        throw new Error(`Erro ao carregar GeoJSON: ${_.status}`);
      i = await _.json(), h(), F(o, !1);
    } catch (R) {
      console.error("Erro ao carregar dados:", R), F(a, R.message), F(o, !1);
    }
  }
  u(), Uo(() => {
  });
  function h() {
    if (!i || !T(e))
      return;
    const R = 800, b = 500;
    st(T(e)).selectAll("*").remove();
    const O = st(T(e)).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${R} ${b}`).style("background", "transparent").style("cursor", "grab"), $ = wh().scaleExtent([1, 8]).on("zoom", (v) => {
      O.selectAll("path").attr("transform", v.transform);
    });
    O.call($), l = $;
    try {
      const v = hh().center([-11, 39.2]).scale(6500).translate([R / 2 - 350, b / 2]), _ = th().projection(v), g = st("body").append("div").attr("id", "map-tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px 12px").style("border-radius", "4px").style("font-size", "12px").style("font-family", "'Bai Jamjuree', sans-serif").style("pointer-events", "none").style("z-index", "1000").style("opacity", "0").style("transition", "opacity 0.2s");
      F(s, O.selectAll("path").data(i.features).enter().append("path").attr("d", _).attr("fill", (E) => {
        const N = E.properties.NAME_2, A = r[N];
        return (E.properties.NAME_2 === "Évora" || E.properties.NAME_2 === "Lisboa" || E.properties.NAME_2 === "Porto") && (console.log("Município:", E.properties.NAME_2, "Dados encontrados:", A), A && console.log("RAI:", A.RAI, "PORTAL:", A.PORTAL)), A && A.RAI?.trim().toUpperCase() === "SIM" && A.PORTAL && A.PORTAL.trim() !== "NAO" && A.PORTAL.trim().startsWith("http") ? "#c44c49" : A && A.RAI?.trim().toUpperCase() === "SIM" ? "rgb(191, 170, 234)" : A && A.PORTAL && A.PORTAL.trim() !== "NAO" && A.PORTAL.trim().startsWith("http") ? "#de866b" : A ? "#f8f1e7" : "#E0E0E0";
      }).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("cursor", "pointer").style("opacity", "1").style("transition", "opacity 0.3s").on("mouseover", function(E, N) {
        st(this).attr("stroke", "#000").attr("stroke-width", "1.5").style("filter", "brightness(1.1)");
        const A = N.properties.NAME_2 || N.properties.name || "Desconhecido", C = r[A];
        let L = `<strong>${A}</strong>`;
        if (C) {
          const q = C.RAI?.trim().toUpperCase() === "SIM" ? "Sim" : "Não";
          L += `<br/>RAI: ${q}`;
          const B = C.PORTAL?.trim();
          B && B !== "NAO" && B.startsWith("http") ? L += `<br/>Portal: <a href="${B}" target="_blank">${B}</a>` : L += "<br/>Portal: Não", C.DISTRITO && (L += `<br/>Distrito: ${C.DISTRITO}`);
        } else
          L += "<br/><em>Sem dados disponíveis</em>";
        g.style("opacity", "1").html(L).style("left", E.pageX + 10 + "px").style("top", E.pageY - 10 + "px");
      }).on("mousemove", function(E) {
        g.style("left", E.pageX + 10 + "px").style("top", E.pageY - 10 + "px");
      }).on("mouseout", function(E, N) {
        const A = r[N.properties.NAME_2 || N.properties.name];
        st(this).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("filter", "none"), g.style("opacity", "0");
      }).on("click", function(E, N) {
        const A = N.properties.NAME_2 || N.properties.name;
        console.log("Clicou em:", A);
      })), console.log("Mapa criado com sucesso!");
    } catch (v) {
      console.error("Erro ao criar mapa:", v), F(a, v.message);
    }
  }
  function c(R) {
    return R.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function p(R) {
    if (!T(s))
      return;
    if (!R || R.trim() === "") {
      T(s).style("opacity", "1");
      return;
    }
    const b = c(R.toLowerCase().trim());
    T(s).style("opacity", (O) => {
      const $ = O.properties.NAME_2 || O.properties.name || "";
      return c($).includes(b) ? "1" : "0.2";
    });
  }
  function d() {
    l && st(T(e)).select("svg").transition().duration(300).call(l.scaleBy, 1.5);
  }
  function w() {
    l && st(T(e)).select("svg").transition().duration(300).call(l.scaleBy, 1 / 1.5);
  }
  function y() {
    l && st(T(e)).select("svg").transition().duration(300).call(l.transform, ci);
  }
  Is(() => (Fo(f()), T(s)), () => {
    f() !== void 0 && T(s) && (console.log("selectedMunicipio mudou:", f()), p(f()));
  }), Rs(), Bo();
  var x = Sh(), m = j(x);
  {
    var S = (R) => {
      var b = xh();
      mt(R, b);
    }, M = (R) => {
      var b = Vs(), O = pr(b);
      {
        var $ = (v) => {
          var _ = Eh(), g = j(_), E = j(g);
          dn(() => _n(E, `Erro ao carregar o mapa: ${T(a) ?? ""}`)), mt(v, _);
        };
        yn(
          O,
          (v) => {
            T(a) && v($);
          },
          !0
        );
      }
      mt(R, b);
    };
    yn(m, (R) => {
      T(o) ? R(S) : R(M, !1);
    });
  }
  var k = it(m, 2);
  nu(k, (R) => F(e, R), () => T(e));
  var I = it(k, 2), z = j(I), D = it(z, 2), P = it(D, 2);
  Lt("click", z, d), Lt("click", D, w), Lt("click", P, y), mt(t, x), go();
}
var Mh = /* @__PURE__ */ Ot('<li class="svelte-1kq6r5w"> </li>'), Ah = /* @__PURE__ */ Ot('<ul class="sugestoes svelte-1kq6r5w"></ul>'), Nh = /* @__PURE__ */ Ot('Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque svelte-1kq6r5w"> </span>', 1), kh = /* @__PURE__ */ Ot('Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a target="_blank"> </a>', 1), Th = /* @__PURE__ */ Ot('<a target="_blank"> </a>'), Ih = /* @__PURE__ */ Ot('<div class="result-container svelte-1kq6r5w"><h3 class="svelte-1kq6r5w"> </h3> <table class="result-table svelte-1kq6r5w"><thead><tr class="svelte-1kq6r5w"><th class="svelte-1kq6r5w">RAI</th><th class="svelte-1kq6r5w">Portal</th><th class="svelte-1kq6r5w">Shapefiles</th></tr></thead><tbody><tr class="svelte-1kq6r5w"><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><button class="download-btn svelte-1kq6r5w"><svg class="download-icon svelte-1kq6r5w" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="50" y1="15" x2="50" y2="55"></line><polyline points="35,40 50,55 65,40"></polyline></g><g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"><path d="M20 65 L20 80 L80 80 L80 65"></path></g></svg> <span class="download-text svelte-1kq6r5w">Download <strong>Shapefile</strong> do Município</span></button> <div class="shapefile-info svelte-1kq6r5w">Shapefile disponível, use para contar histórias locais.</div></td></tr></tbody></table> <button class="clear-btn svelte-1kq6r5w">Selecionar outro município</button></div>'), Rh = /* @__PURE__ */ Ot('<div class="dashboard-container svelte-1kq6r5w"><div class="search-section svelte-1kq6r5w"><h2 class="svelte-1kq6r5w">Dados nos municípios</h2> <div class="search-input-container svelte-1kq6r5w"><input type="text" placeholder="Nome do município..." class="search-input svelte-1kq6r5w"/> <button class="search-btn svelte-1kq6r5w">Pesquisar</button></div> <!> <!></div> <div class="map-section svelte-1kq6r5w"><!></div></div>');
function Ph(t, n) {
  _o(n, !1);
  let e = /* @__PURE__ */ Ft(""), r = [], i = /* @__PURE__ */ Ft(null), o = "", a = /* @__PURE__ */ Ft([]), s = /* @__PURE__ */ Ft("");
  async function l() {
    try {
      const b = await fetch("/municipios.csv");
      if (!b.ok) {
        o = "Erro ao carregar dados dos municípios";
        return;
      }
      const $ = (await b.text()).split(`
`), v = $[0].split(";");
      r = $.slice(1).map((_) => {
        const g = _.split(";"), E = {};
        return v.forEach((N, A) => {
          E[N] = g[A];
        }), E;
      }).filter((_) => _.MUNICIPIO), console.log("Dados carregados:", r.length);
    } catch (b) {
      console.error("Erro ao carregar dados:", b), o = "Erro ao carregar dados";
    }
  }
  l(), Uo(() => {
  });
  function f(b) {
    F(e, b), F(
      i,
      null
      // Limpa resultado anterior
    ), F(a, []), u(), F(s, b);
  }
  function u() {
    if (T(e).trim()) {
      const b = c(T(e));
      F(i, r.find((O) => c(O.MUNICIPIO || "") === b)), T(i) ? F(s, T(i).MUNICIPIO) : F(
        s,
        b
        // Mantém o destaque parcial
      ), F(a, []);
    } else
      F(s, ""), F(i, null), F(a, []);
  }
  function h(b) {
    b.key === "Enter" && u();
  }
  function c(b) {
    return b.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function p(b) {
    return `${b}.zip`;
  }
  function d(b) {
    const O = p(b), $ = `/shapefiles/${O}`, v = document.createElement("a");
    v.href = $, v.download = O, v.target = "_blank", fetch($, { method: "HEAD" }).then((_) => {
      _.ok ? v.click() : alert("Shapefile não disponível para este município.");
    }).catch(() => {
      alert("Shapefile não disponível para este município.");
    });
  }
  function w() {
    if (T(i) && F(i, null), T(e).length > 0 && r.length > 0) {
      const b = c(T(e));
      F(a, r.filter((O) => {
        const $ = O.MUNICIPIO || "";
        return c($).includes(b);
      }).sort((O, $) => {
        const v = c(O.MUNICIPIO || "").startsWith(b), _ = c($.MUNICIPIO || "").startsWith(b);
        return v && !_ ? -1 : !v && _ ? 1 : (O.MUNICIPIO || "").localeCompare($.MUNICIPIO || "");
      }).slice(0, 10)), F(
        s,
        b
        // Usa o termo de busca para destacar
      );
    } else
      F(a, []), F(
        s,
        ""
        // Limpa o destaque no mapa
      );
  }
  Bo();
  var y = Rh(), x = j(y), m = it(j(x), 2), S = j(m), M = it(S, 2), k = it(m, 2);
  {
    var I = (b) => {
      var O = Ah();
      Gs(O, 5, () => T(a), Ys, ($, v) => {
        var _ = Mh(), g = j(_);
        dn(() => _n(g, (T(v), ot(() => T(v).MUNICIPIO)))), Lt("click", _, () => f(T(v).MUNICIPIO)), mt($, _);
      }), mt(b, O);
    };
    yn(k, (b) => {
      T(a), ot(() => T(a).length > 0) && b(I);
    });
  }
  var z = it(k, 2);
  {
    var D = (b) => {
      var O = Ih(), $ = j(O), v = j($), _ = it($, 2), g = it(j(_)), E = j(g), N = j(E), A = j(N);
      {
        var C = (nt) => {
          var Mt = Nh(), vn = it(pr(Mt)), Je = j(vn);
          dn(() => _n(Je, (T(i), ot(() => T(i).RAI_Email)))), mt(nt, Mt);
        }, L = (nt) => {
          var Mt = kh(), vn = it(pr(Mt)), Je = j(vn);
          dn(() => {
            wi(vn, "href", (T(i), ot(() => T(i).Website))), _n(Je, (T(i), ot(() => T(i).Website)));
          }), mt(nt, Mt);
        };
        yn(A, (nt) => {
          T(i), ot(() => T(i).RAI?.toLowerCase() === "sim") ? nt(C) : nt(L, !1);
        });
      }
      var q = it(N), B = j(q);
      {
        var Y = (nt) => {
          var Mt = Th(), vn = j(Mt);
          dn(() => {
            wi(Mt, "href", (T(i), ot(() => T(i).PORTAL))), _n(vn, (T(i), ot(() => T(i).PORTAL)));
          }), mt(nt, Mt);
        }, Q = (nt) => {
          var Mt = Hs("Não há registos de portal de dados abertos no município indicado.");
          mt(nt, Mt);
        };
        yn(B, (nt) => {
          T(i), ot(() => T(i).PORTAL && T(i).PORTAL.toLowerCase() !== "nao" && T(i).PORTAL.toLowerCase() !== "não") ? nt(Y) : nt(Q, !1);
        });
      }
      var St = it(q), ct = j(St), bt = it(_, 2);
      dn(() => _n(v, (T(i), ot(() => T(i).MUNICIPIO)))), Lt("click", ct, () => d(T(i).MUNICIPIO)), Lt("click", bt, () => {
        F(i, null), F(e, ""), F(s, "");
      }), mt(b, O);
    };
    yn(z, (b) => {
      T(i) && b(D);
    });
  }
  var P = it(x, 2), R = j(P);
  bh(R, {
    get selectedMunicipio() {
      return T(s);
    }
  }), tu(S, () => T(e), (b) => F(e, b)), Lt("input", S, w), Lt("keydown", S, h), Lt("click", M, u), mt(t, y), go();
}
class Ch {
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
      }, 200);
    } catch (n) {
      throw console.error("Erro ao inicializar widget:", n), n;
    }
  }
  createApp() {
    try {
      if (!this.options.target || !this.options.target.parentNode)
        throw new Error("Target element não encontrado ou removido");
      this.app = new Ph({
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
typeof window < "u" && (window.DadosWidget = Ch);
export {
  Ch as default
};
//# sourceMappingURL=dados-widget.js.map
