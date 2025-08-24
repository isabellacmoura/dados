typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Tn = !1, $a = !1;
function Oa() {
  Tn = !0;
}
Oa();
const Da = 1, za = 2, La = 16, qa = 2, Fa = 4, Ua = 8, Ha = 1, Va = 2, nt = Symbol(), Ba = "http://www.w3.org/1999/xhtml", uo = !1;
var Ur = Array.isArray, Xa = Array.prototype.indexOf, lo = Array.from, fr = Object.defineProperty, de = Object.getOwnPropertyDescriptor, fo = Object.getOwnPropertyDescriptors, Ya = Object.prototype, Wa = Array.prototype, Hr = Object.getPrototypeOf;
function Ga(t) {
  return t();
}
function cr(t) {
  for (var n = 0; n < t.length; n++)
    t[n]();
}
function Ka() {
  var t, n, e = new Promise((r, i) => {
    t = r, n = i;
  });
  return { promise: e, resolve: t, reject: n };
}
const vt = 2, Vr = 4, Xe = 8, In = 16, Bt = 32, Rn = 64, co = 128, xt = 256, Ee = 512, et = 1024, Et = 2048, Xt = 4096, Nt = 8192, fn = 16384, Br = 32768, Xr = 65536, pi = 1 << 17, Za = 1 << 18, Yr = 1 << 19, ho = 1 << 20, hr = 1 << 21, Wr = 1 << 22, nn = 1 << 23, en = Symbol("$state"), Ja = Symbol("legacy props"), Gr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Qa() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ja(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ts() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ns(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function es() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function rs(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function is() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function os(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function as() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ss() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function us() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ls = !1;
function po(t) {
  return t === this.v;
}
function fs(t, n) {
  return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
function vo(t) {
  return !fs(t, this.v);
}
let J = null;
function Se(t) {
  J = t;
}
function _o(t, n = !1, e) {
  J = {
    p: J,
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
    J
  ), e = n.e;
  if (e !== null) {
    n.e = null;
    for (var r of e)
      No(r);
  }
  return J = n.p, /** @type {T} */
  {};
}
function Pn() {
  return !Tn || J !== null && J.l === null;
}
const cs = /* @__PURE__ */ new WeakMap();
function hs(t) {
  var n = H;
  if (n === null)
    return V.f |= nn, t;
  if ((n.f & Br) === 0) {
    if ((n.f & co) === 0)
      throw !n.parent && t instanceof Error && mo(t), t;
    n.b.error(t);
  } else
    Kr(t, n);
}
function Kr(t, n) {
  for (; n !== null; ) {
    if ((n.f & co) !== 0)
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
  const n = cs.get(t);
  n && (fr(t, "message", {
    value: n.message
  }), fr(t, "stack", {
    value: n.stack
  }));
}
let be = [];
function ps() {
  var t = be;
  be = [], cr(t);
}
function yo(t) {
  be.length === 0 && queueMicrotask(ps), be.push(t);
}
function vs() {
  for (var t = (
    /** @type {Effect} */
    H.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && Qa(), t;
}
// @__NO_SIDE_EFFECTS__
function Zr(t) {
  var n = vt | Et, e = V !== null && (V.f & vt) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return H === null || e !== null && (e.f & xt) !== 0 ? n |= xt : H.f |= Yr, {
    ctx: J,
    deps: null,
    effects: null,
    equals: po,
    f: n,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      nt
    ),
    wv: 0,
    parent: e ?? H,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ds(t, n) {
  let e = (
    /** @type {Effect | null} */
    H
  );
  e === null && ts();
  var r = (
    /** @type {Boundary} */
    e.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Yn(
    /** @type {V} */
    nt
  ), a = null, s = !V;
  return Cs(() => {
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
    ), c = r.pending;
    s && (r.update_pending_count(1), c || u.increment());
    const h = (p, d = void 0) => {
      a = null, c || u.activate(), d ? d !== Gr && (o.f |= nn, Ae(o, d)) : ((o.f & nn) !== 0 && (o.f ^= nn), Ae(o, p)), s && (r.update_pending_count(-1), c || u.decrement()), Eo();
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
function Jr(t) {
  const n = /* @__PURE__ */ Zr(t);
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
function _s(t) {
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
function Qr(t) {
  var n, e = H;
  Jt(_s(t));
  try {
    wo(t), n = Lo(t);
  } finally {
    Jt(e);
  }
  return n;
}
function xo(t) {
  var n = Qr(t);
  if (t.equals(n) || (t.v = n, t.wv = Do()), !hn)
    if (Sn !== null)
      Sn.set(t, t.v);
    else {
      var e = (Kt || (t.f & xt) !== 0) && t.deps !== null ? Xt : et;
      st(t, e);
    }
}
function gs(t, n, e) {
  const r = Pn() ? Zr : Jr;
  if (n.length === 0) {
    e(t.map(r));
    return;
  }
  var i = G, o = (
    /** @type {Effect} */
    H
  ), a = ms(), s = vs();
  Promise.all(n.map((l) => /* @__PURE__ */ ds(l))).then((l) => {
    i?.activate(), a();
    try {
      e([...t.map(r), ...l]);
    } catch (f) {
      (o.f & fn) === 0 && Kr(f, o);
    }
    i?.deactivate(), Eo();
  }).catch((l) => {
    s.error(l);
  });
}
function ms() {
  var t = H, n = V, e = J;
  return function() {
    Jt(t), $t(n), Se(e);
  };
}
function Eo() {
  Jt(null), $t(null), Se(null);
}
const $n = /* @__PURE__ */ new Set();
let G = null, _e = null, Sn = null, vi = /* @__PURE__ */ new Set(), Me = [];
function So() {
  const t = (
    /** @type {() => void} */
    Me.shift()
  );
  Me.length > 0 && queueMicrotask(So), t();
}
let Bn = [], jr = null, pr = !1;
class Xn {
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
    Bn = [], _e = null;
    var e = null;
    if ($n.size > 1) {
      e = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map();
      for (const [o, a] of this.current)
        e.set(o, { v: o.v, wv: o.wv }), o.v = a;
      for (const o of $n)
        if (o !== this)
          for (const [a, s] of o.#i)
            e.has(a) || (e.set(a, { v: a.v, wv: a.wv }), a.v = s);
    }
    for (const o of n)
      this.#v(o);
    if (this.#e.length === 0 && this.#t === 0) {
      this.#p();
      var r = this.#r, i = this.#n;
      this.#r = [], this.#n = [], this.#s = [], _e = G, G = null, di(r), di(i), G === null ? G = this : $n.delete(this), this.#l?.resolve();
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
    n.f ^= et;
    for (var e = n.first; e !== null; ) {
      var r = e.f, i = (r & (Bt | Rn)) !== 0, o = i && (r & et) !== 0, a = o || (r & Nt) !== 0 || this.skipped_effects.has(e);
      if (!a && e.fn !== null) {
        if (i)
          e.f ^= et;
        else if ((r & Vr) !== 0)
          this.#n.push(e);
        else if ((r & et) === 0)
          if ((r & Wr) !== 0) {
            var s = e.b?.pending ? this.#a : this.#e;
            s.push(e);
          } else re(e) && ((e.f & In) !== 0 && this.#s.push(e), on(e));
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
      ((e.f & Et) !== 0 ? this.#c : this.#h).push(e), st(e, et);
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
    G = null, _e = null;
    for (const n of vi)
      if (vi.delete(n), n(), G !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    Bn.length > 0 ? ys() : this.#p(), G === this && (this.#t === 0 && $n.delete(this), this.deactivate());
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
        st(n, Et), bn(n);
      for (const n of this.#h)
        st(n, Xt), bn(n);
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
      const n = G = new Xn();
      $n.add(G), Xn.enqueue(() => {
        G === n && n.flush();
      });
    }
    return G;
  }
  /** @param {() => void} task */
  static enqueue(n) {
    Me.length === 0 && queueMicrotask(So), Me.unshift(n);
  }
}
function ys() {
  var t = xn;
  pr = !0;
  try {
    var n = 0;
    for (gi(!0); Bn.length > 0; ) {
      var e = Xn.ensure();
      if (n++ > 1e3) {
        var r, i;
        ws();
      }
      e.process(Bn), Zt.clear();
    }
  } finally {
    pr = !1, gi(t), jr = null;
  }
}
function ws() {
  try {
    is();
  } catch (t) {
    Kr(t, jr);
  }
}
let jt = null;
function di(t) {
  var n = t.length;
  if (n !== 0) {
    for (var e = 0; e < n; ) {
      var r = t[e++];
      if ((r.f & (fn | Nt)) === 0 && re(r) && (jt = [], on(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ro(r) : r.fn = null), jt.length > 0)) {
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
  for (var n = jr = t; n.parent !== null; ) {
    n = n.parent;
    var e = n.f;
    if (pr && n === H && (e & In) !== 0)
      return;
    if ((e & (Rn | Bt)) !== 0) {
      if ((e & et) === 0) return;
      n.f ^= et;
    }
  }
  Bn.push(n);
}
const Zt = /* @__PURE__ */ new Map();
function Yn(t, n) {
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
  const e = Yn(t);
  return Ds(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ft(t, n = !1, e = !0) {
  const r = Yn(t);
  return n || (r.equals = vo), Tn && e && J !== null && J.l !== null && (J.l.s ??= []).push(r), r;
}
function F(t, n, e = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!It || (V.f & pi) !== 0) && Pn() && (V.f & (vt | In | Wr | pi)) !== 0 && !Ht?.includes(t) && us();
  let r = e ? mn(n) : n;
  return Ae(t, r);
}
function Ae(t, n) {
  if (!t.equals(n)) {
    var e = t.v;
    hn ? Zt.set(t, n) : Zt.set(t, e), t.v = n;
    var r = Xn.ensure();
    r.capture(t, e), (t.f & vt) !== 0 && ((t.f & Et) !== 0 && Qr(
      /** @type {Derived} */
      t
    ), st(t, (t.f & xt) === 0 ? et : Xt)), t.wv = Do(), bo(t, Et), Pn() && H !== null && (H.f & et) !== 0 && (H.f & (Bt | Rn)) === 0 && (gt === null ? zs([t]) : gt.push(t));
  }
  return n;
}
function je(t) {
  F(t, t.v + 1);
}
function bo(t, n) {
  var e = t.reactions;
  if (e !== null)
    for (var r = Pn(), i = e.length, o = 0; o < i; o++) {
      var a = e[o], s = a.f;
      if (!(!r && a === H)) {
        var l = (s & Et) === 0;
        l && st(a, n), (s & vt) !== 0 ? bo(
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
  const n = Hr(t);
  if (n !== Ya && n !== Wa)
    return t;
  var e = /* @__PURE__ */ new Map(), r = Ur(t), i = /* @__PURE__ */ Wt(0), o = rn, a = (s) => {
    if (rn === o)
      return s();
    var l = V, f = rn;
    $t(null), yi(o);
    var u = s();
    return $t(l), yi(f), u;
  };
  return r && e.set("length", /* @__PURE__ */ Wt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && as();
        var u = e.get(l);
        return u === void 0 ? u = a(() => {
          var c = /* @__PURE__ */ Wt(f.value);
          return e.set(l, c), c;
        }) : F(u, f.value, !0), !0;
      },
      deleteProperty(s, l) {
        var f = e.get(l);
        if (f === void 0) {
          if (l in s) {
            const u = a(() => /* @__PURE__ */ Wt(nt));
            e.set(l, u), je(i);
          }
        } else
          F(f, nt), je(i);
        return !0;
      },
      get(s, l, f) {
        if (l === en)
          return t;
        var u = e.get(l), c = l in s;
        if (u === void 0 && (!c || de(s, l)?.writable) && (u = a(() => {
          var p = mn(c ? s[l] : nt), d = /* @__PURE__ */ Wt(p);
          return d;
        }), e.set(l, u)), u !== void 0) {
          var h = R(u);
          return h === nt ? void 0 : h;
        }
        return Reflect.get(s, l, f);
      },
      getOwnPropertyDescriptor(s, l) {
        var f = Reflect.getOwnPropertyDescriptor(s, l);
        if (f && "value" in f) {
          var u = e.get(l);
          u && (f.value = R(u));
        } else if (f === void 0) {
          var c = e.get(l), h = c?.v;
          if (c !== void 0 && h !== nt)
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
        if (l === en)
          return !0;
        var f = e.get(l), u = f !== void 0 && f.v !== nt || Reflect.has(s, l);
        if (f !== void 0 || H !== null && (!u || de(s, l)?.writable)) {
          f === void 0 && (f = a(() => {
            var h = u ? mn(s[l]) : nt, p = /* @__PURE__ */ Wt(h);
            return p;
          }), e.set(l, f));
          var c = R(f);
          if (c === nt)
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
            d !== void 0 ? F(d, nt) : p in s && (d = a(() => /* @__PURE__ */ Wt(nt)), e.set(p + "", d));
          }
        if (c === void 0)
          (!h || de(s, l)?.writable) && (c = a(() => /* @__PURE__ */ Wt(void 0)), F(c, mn(f)), e.set(l, c));
        else {
          h = c.v !== nt;
          var y = a(() => mn(f));
          F(c, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(s, l);
        if (w?.set && w.set.call(u, f), !h) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              e.get("length")
            ), m = Number(l);
            Number.isInteger(m) && m >= x.v && F(x, m + 1);
          }
          je(i);
        }
        return !0;
      },
      ownKeys(s) {
        R(i);
        var l = Reflect.ownKeys(s).filter((c) => {
          var h = e.get(c);
          return h === void 0 || h.v !== nt;
        });
        for (var [f, u] of e)
          u.v !== nt && !(f in s) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        ss();
      }
    }
  );
}
var xs, Es, Ss;
function ee(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ne(t) {
  return Es.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ye(t) {
  return Ss.call(t);
}
function j(t, n) {
  return /* @__PURE__ */ Ne(t);
}
function vr(t, n) {
  {
    var e = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        t
      )
    );
    return e instanceof Comment && e.data === "" ? /* @__PURE__ */ Ye(e) : e;
  }
}
function rt(t, n = 1, e = !1) {
  let r = t;
  for (; n--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(r);
  return r;
}
function bs(t) {
  t.textContent = "";
}
function Mo() {
  return !1;
}
let _i = !1;
function Ms() {
  _i || (_i = !0, document.addEventListener(
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
function We(t) {
  var n = V, e = H;
  $t(null), Jt(null);
  try {
    return t();
  } finally {
    $t(n), Jt(e);
  }
}
function As(t, n, e, r = e) {
  t.addEventListener(n, () => We(e));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Ms();
}
function Ao(t) {
  H === null && V === null && rs(), V !== null && (V.f & xt) !== 0 && H === null && es(), hn && ns();
}
function Ns(t, n) {
  var e = n.last;
  e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t);
}
function Yt(t, n, e, r = !0) {
  var i = H;
  i !== null && (i.f & Nt) !== 0 && (t |= Nt);
  var o = {
    ctx: J,
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
      on(o), o.f |= Br;
    } catch (l) {
      throw cn(o), l;
    }
  else n !== null && bn(o);
  var a = e && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & Yr) === 0;
  if (!a && r && (i !== null && Ns(o, i), V !== null && (V.f & vt) !== 0 && (t & Rn) === 0)) {
    var s = (
      /** @type {Derived} */
      V
    );
    (s.effects ??= []).push(o);
  }
  return o;
}
function ks(t) {
  const n = Yt(Xe, null, !1);
  return st(n, et), n.teardown = t, n;
}
function dr(t) {
  Ao();
  var n = (
    /** @type {Effect} */
    H.f
  ), e = !V && (n & Bt) !== 0 && (n & Br) === 0;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      J
    );
    (r.e ??= []).push(t);
  } else
    return No(t);
}
function No(t) {
  return Yt(Vr | ho, t, !1);
}
function Ts(t) {
  return Ao(), Yt(Xe | ho, t, !0);
}
function Is(t) {
  return Yt(Vr, t, !1);
}
function Rs(t, n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    J
  ), r = { effect: null, ran: !1, deps: t };
  e.l.$.push(r), r.effect = Ge(() => {
    t(), !r.ran && (r.ran = !0, it(n));
  });
}
function Ps() {
  var t = (
    /** @type {ComponentContextLegacy} */
    J
  );
  Ge(() => {
    for (var n of t.l.$) {
      n.deps();
      var e = n.effect;
      (e.f & et) !== 0 && st(e, Xt), re(e) && on(e), n.ran = !1;
    }
  });
}
function Cs(t) {
  return Yt(Wr | Yr, t, !0);
}
function Ge(t, n = 0) {
  return Yt(Xe | n, t, !0);
}
function dn(t, n = [], e = []) {
  gs(n, e, (r) => {
    Yt(Xe, () => t(...r.map(R)), !0);
  });
}
function ko(t, n = 0) {
  var e = Yt(In | n, t, !0);
  return e;
}
function ke(t, n = !0) {
  return Yt(Bt, t, !0, n);
}
function To(t) {
  var n = t.teardown;
  if (n !== null) {
    const e = hn, r = V;
    mi(!0), $t(null);
    try {
      n.call(null);
    } finally {
      mi(e), $t(r);
    }
  }
}
function Io(t, n = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    const i = e.ac;
    i !== null && We(() => {
      i.abort(Gr);
    });
    var r = e.next;
    (e.f & Rn) !== 0 ? e.parent = null : cn(e, n), e = r;
  }
}
function $s(t) {
  for (var n = t.first; n !== null; ) {
    var e = n.next;
    (n.f & Bt) === 0 && cn(n), n = e;
  }
}
function cn(t, n = !0) {
  var e = !1;
  (n || (t.f & Za) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Os(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), e = !0), Io(t, n && !e), Te(t, 0), st(t, fn);
  var r = t.transitions;
  if (r !== null)
    for (const o of r)
      o.stop();
  To(t);
  var i = t.parent;
  i !== null && i.first !== null && Ro(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Os(t, n) {
  for (; t !== null; ) {
    var e = t === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(t)
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
  ti(t, e, !0), Co(e, () => {
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
function ti(t, n, e) {
  if ((t.f & Nt) === 0) {
    if (t.f ^= Nt, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && n.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, o = (r.f & Xr) !== 0 || (r.f & Bt) !== 0;
      ti(r, n, o ? e : !1), r = i;
    }
  }
}
function ni(t) {
  $o(t, !0);
}
function $o(t, n) {
  if ((t.f & Nt) !== 0) {
    t.f ^= Nt, (t.f & et) === 0 && (st(t, Et), bn(t));
    for (var e = t.first; e !== null; ) {
      var r = e.next, i = (e.f & Xr) !== 0 || (e.f & Bt) !== 0;
      $o(e, i ? n : !1), e = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && o.in();
  }
}
let xn = !1;
function gi(t) {
  xn = t;
}
let hn = !1;
function mi(t) {
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
function Ds(t) {
  V !== null && (Ht === null ? Ht = [t] : Ht.push(t));
}
let ot = null, ht = 0, gt = null;
function zs(t) {
  gt = t;
}
let Oo = 1, Wn = 0, rn = Wn;
function yi(t) {
  rn = t;
}
let Kt = !1;
function Do() {
  return ++Oo;
}
function re(t) {
  var n = t.f;
  if ((n & Et) !== 0)
    return !0;
  if ((n & Xt) !== 0) {
    var e = t.deps, r = (n & xt) !== 0;
    if (e !== null) {
      var i, o, a = (n & Ee) !== 0, s = r && H !== null && !Kt, l = e.length;
      if ((a || s) && (H === null || (H.f & fn) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (i = 0; i < l; i++)
          o = e[i], (a || !o?.reactions?.includes(f)) && (o.reactions ??= []).push(f);
        a && (f.f ^= Ee), s && u !== null && (u.f & xt) === 0 && (f.f ^= xt);
      }
      for (i = 0; i < l; i++)
        if (o = e[i], re(
          /** @type {Derived} */
          o
        ) && xo(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return !0;
    }
    (!r || H !== null && !Kt) && st(t, et);
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
      ) : n === o && (e ? st(o, Et) : (o.f & et) !== 0 && st(o, Xt), bn(
        /** @type {Effect} */
        o
      ));
    }
}
function Lo(t) {
  var n = ot, e = ht, r = gt, i = V, o = Kt, a = Ht, s = J, l = It, f = rn, u = t.f;
  ot = /** @type {null | Value[]} */
  null, ht = 0, gt = null, Kt = (u & xt) !== 0 && (It || !xn || V === null), V = (u & (Bt | Rn)) === 0 ? t : null, Ht = null, Se(t.ctx), It = !1, rn = ++Wn, t.ac !== null && (We(() => {
    t.ac.abort(Gr);
  }), t.ac = null);
  try {
    t.f |= hr;
    var c = (
      /** @type {Function} */
      t.fn
    ), h = c(), p = t.deps;
    if (ot !== null) {
      var d;
      if (Te(t, ht), p !== null && ht > 0)
        for (p.length = ht + ot.length, d = 0; d < ot.length; d++)
          p[ht + d] = ot[d];
      else
        t.deps = p = ot;
      if (!Kt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & vt) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (d = ht; d < p.length; d++)
          (p[d].reactions ??= []).push(t);
    } else p !== null && ht < p.length && (Te(t, ht), p.length = ht);
    if (Pn() && gt !== null && !It && p !== null && (t.f & (vt | Xt | Et)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      gt.length; d++)
        zo(
          gt[d],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Wn++, gt !== null && (r === null ? r = gt : r.push(.../** @type {Source[]} */
    gt))), (t.f & nn) !== 0 && (t.f ^= nn), h;
  } catch (y) {
    return hs(y);
  } finally {
    t.f ^= hr, ot = n, ht = e, gt = r, V = i, Kt = o, Ht = a, Se(s), It = l, rn = f;
  }
}
function Ls(t, n) {
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
  (ot === null || !ot.includes(n)) && (st(n, Xt), (n.f & (xt | Ee)) === 0 && (n.f ^= Ee), wo(
    /** @type {Derived} **/
    n
  ), Te(
    /** @type {Derived} **/
    n,
    0
  ));
}
function Te(t, n) {
  var e = t.deps;
  if (e !== null)
    for (var r = n; r < e.length; r++)
      Ls(t, e[r]);
}
function on(t) {
  var n = t.f;
  if ((n & fn) === 0) {
    st(t, et);
    var e = H, r = xn;
    H = t, xn = !0;
    try {
      (n & In) !== 0 ? $s(t) : Io(t), To(t);
      var i = Lo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Oo;
      var o;
      uo && $a && (t.f & Et) !== 0 && t.deps;
    } finally {
      xn = r, H = e;
    }
  }
}
function R(t) {
  var n = t.f, e = (n & vt) !== 0;
  if (V !== null && !It) {
    var r = H !== null && (H.f & fn) !== 0;
    if (!r && !Ht?.includes(t)) {
      var i = V.deps;
      if ((V.f & hr) !== 0)
        t.rv < Wn && (t.rv = Wn, ot === null && i !== null && i[ht] === t ? ht++ : ot === null ? ot = [t] : (!Kt || !ot.includes(t)) && ot.push(t));
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
      return ((a.f & et) === 0 && a.reactions !== null || qo(a)) && (l = Qr(a)), Zt.set(a, l), l;
    }
  } else if (e) {
    if (a = /** @type {Derived} */
    t, Sn?.has(a))
      return Sn.get(a);
    re(a) && xo(a);
  }
  if ((t.f & nn) !== 0)
    throw t.v;
  return t.v;
}
function qo(t) {
  if (t.v === nt) return !0;
  if (t.deps === null) return !1;
  for (const n of t.deps)
    if (Zt.has(n) || (n.f & vt) !== 0 && qo(
      /** @type {Derived} */
      n
    ))
      return !0;
  return !1;
}
function it(t) {
  var n = It;
  try {
    return It = !0, t();
  } finally {
    It = n;
  }
}
const qs = -7169;
function st(t, n) {
  t.f = t.f & qs | n;
}
function Fo(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (en in t)
      _r(t);
    else if (!Array.isArray(t))
      for (let n in t) {
        const e = t[n];
        typeof e == "object" && e && en in e && _r(e);
      }
  }
}
function _r(t, n = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !n.has(t)) {
    n.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        _r(t[r], n);
      } catch {
      }
    const e = Hr(t);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const r = fo(e);
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
function Fs(t, n, e, r = {}) {
  function i(o) {
    if (r.capture || Us.call(n, o), !o.cancelBubble)
      return We(() => e?.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? yo(() => {
    n.addEventListener(t, i, r);
  }) : n.addEventListener(t, i, r), i;
}
function Lt(t, n, e, r, i) {
  var o = { capture: r, passive: i }, a = Fs(t, n, e, o);
  (n === document.body || // @ts-ignore
  n === window || // @ts-ignore
  n === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  n instanceof HTMLMediaElement) && ks(() => {
    n.removeEventListener(t, a, o);
  });
}
let wi = null;
function Us(t) {
  var n = this, e = (
    /** @type {Node} */
    n.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  wi = t;
  var a = 0, s = wi === t && t.__root;
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
    fr(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || e;
      }
    });
    var u = V, c = H;
    $t(null), Jt(null);
    try {
      for (var h, p = []; o !== null; ) {
        var d = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var y = o["__" + r];
          if (y != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (Ur(y)) {
              var [w, ...x] = y;
              w.apply(o, [t, ...x]);
            } else
              y.call(o, t);
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
      t.__root = n, delete t.currentTarget, $t(u), Jt(c);
    }
  }
}
function Hs(t) {
  var n = document.createElement("template");
  return n.innerHTML = t.replaceAll("<!>", "<!---->"), n.content;
}
function Ie(t, n) {
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
    i === void 0 && (i = Hs(o ? t : "<!>" + t), e || (i = /** @type {Node} */
    /* @__PURE__ */ Ne(i)));
    var a = (
      /** @type {TemplateNode} */
      r || xs ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (e) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ie(s, l);
    } else
      Ie(a, a);
    return a;
  };
}
function Vs(t = "") {
  {
    var n = ee(t + "");
    return Ie(n, n), n;
  }
}
function Bs() {
  var t = document.createDocumentFragment(), n = document.createComment(""), e = ee();
  return t.append(n, e), Ie(n, e), t;
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
function Uo(t) {
  J === null && ja(), Tn && J.l !== null ? Xs(J).m.push(t) : dr(() => {
    const n = it(t);
    if (typeof n == "function") return (
      /** @type {() => void} */
      n
    );
  });
}
function Xs(t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return n.u ??= { a: [], b: [], m: [] };
}
function yn(t, n, e = !1) {
  var r = t, i = null, o = null, a = nt, s = e ? Xr : 0, l = !1;
  const f = (p, d = !0) => {
    l = !0, h(d, p);
  };
  var u = null;
  function c() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var p = a ? i : o, d = a ? o : i;
    p && ni(p), d && Po(d, () => {
      a ? o = null : i = null;
    });
  }
  const h = (p, d) => {
    if (a !== (a = p)) {
      var y = Mo(), w = r;
      if (y && (u = document.createDocumentFragment(), u.append(w = ee())), a ? i ??= d && ke(() => d(w)) : o ??= d && ke(() => d(w)), y) {
        var x = (
          /** @type {Batch} */
          G
        ), m = a ? i : o, S = a ? o : i;
        m && x.skipped_effects.delete(m), S && x.skipped_effects.add(S), x.add_callback(c);
      } else
        c();
    }
  };
  ko(() => {
    l = !1, n(f), l || h(null, null);
  }, s);
}
function Ys(t, n) {
  return n;
}
function Ws(t, n, e) {
  for (var r = t.items, i = [], o = n.length, a = 0; a < o; a++)
    ti(n[a].e, i, !0);
  var s = o > 0 && i.length === 0 && e !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    bs(l), l.append(
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
    a = l.appendChild(ee());
  }
  var f = null, u = !1, c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Jr(() => {
    var w = e();
    return Ur(w) ? w : w == null ? [] : lo(w);
  }), p, d;
  function y() {
    Ks(
      d,
      p,
      s,
      c,
      a,
      i,
      n,
      r,
      e
    ), o !== null && (p.length === 0 ? f ? ni(f) : f = ke(() => o(a)) : f !== null && Po(f, () => {
      f = null;
    }));
  }
  ko(() => {
    d ??= /** @type {Effect} */
    H, p = /** @type {V[]} */
    R(h);
    var w = p.length;
    if (!(u && w === 0)) {
      u = w === 0;
      var x, m, S, b;
      if (Mo()) {
        var I = /* @__PURE__ */ new Set(), P = (
          /** @type {Batch} */
          G
        );
        for (m = 0; m < w; m += 1) {
          S = p[m], b = r(S, m);
          var z = s.items.get(b) ?? c.get(b);
          z ? Ho(z, S, m) : (x = Vo(
            null,
            s,
            null,
            null,
            S,
            b,
            m,
            i,
            n,
            e,
            !0
          ), c.set(b, x)), I.add(b);
        }
        for (const [O, $] of s.items)
          I.has(O) || P.skipped_effects.add($.e);
        P.add_callback(y);
      } else
        y();
      R(h);
    }
  });
}
function Ks(t, n, e, r, i, o, a, s, l) {
  var f = n.length, u = e.items, c = e.first, h = c, p, d = null, y = [], w = [], x, m, S, b;
  for (b = 0; b < f; b += 1) {
    if (x = n[b], m = s(x, b), S = u.get(m), S === void 0) {
      var I = r.get(m);
      if (I !== void 0) {
        r.delete(m), u.set(m, I);
        var P = d ? d.next : h;
        Tt(e, d, I), Tt(e, I, P), tr(I, P, i), d = I;
      } else {
        var z = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        d = Vo(
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
      u.set(m, d), y = [], w = [], h = d.next;
      continue;
    }
    if (Ho(S, x, b), (S.e.f & Nt) !== 0 && ni(S.e), S !== h) {
      if (p !== void 0 && p.has(S)) {
        if (y.length < w.length) {
          var O = w[0], $;
          d = O.prev;
          var q = y[0], A = y[y.length - 1];
          for ($ = 0; $ < y.length; $ += 1)
            tr(y[$], O, i);
          for ($ = 0; $ < w.length; $ += 1)
            p.delete(w[$]);
          Tt(e, q.prev, A.next), Tt(e, d, q), Tt(e, A, O), h = O, d = A, b -= 1, y = [], w = [];
        } else
          p.delete(S), tr(S, h, i), Tt(e, S.prev, S.next), Tt(e, S, d === null ? e.first : d.next), Tt(e, d, S), d = S;
        continue;
      }
      for (y = [], w = []; h !== null && h.k !== m; )
        (h.e.f & Nt) === 0 && (p ??= /* @__PURE__ */ new Set()).add(h), w.push(h), h = h.next;
      if (h === null)
        continue;
      S = h;
    }
    y.push(S), d = S, h = S.next;
  }
  if (h !== null || p !== void 0) {
    for (var T = p === void 0 ? [] : lo(p); h !== null; )
      (h.e.f & Nt) === 0 && T.push(h), h = h.next;
    var C = T.length;
    if (C > 0) {
      var v = f === 0 ? i : null;
      Ws(e, T, v);
    }
  }
  t.first = e.first && e.first.e, t.last = d && d.e;
  for (var _ of r.values())
    cn(_.e);
  r.clear();
}
function Ho(t, n, e, r) {
  Ae(t.v, n), t.i = e;
}
function Vo(t, n, e, r, i, o, a, s, l, f, u) {
  var c = (l & Da) !== 0, h = (l & La) === 0, p = c ? h ? /* @__PURE__ */ Ft(i, !1, !1) : Yn(i) : i, d = (l & za) === 0 ? a : Yn(a), y = {
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
      var w = document.createDocumentFragment();
      w.append(t = ee());
    }
    return y.e = ke(() => s(
      /** @type {Node} */
      t,
      p,
      d,
      f
    ), ls), y.e.prev = e && e.e, y.e.next = r && r.e, e === null ? u || (n.first = y) : (e.next = y, e.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function tr(t, n, e) {
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
      /* @__PURE__ */ Ye(o)
    );
    i.before(o), o = a;
  }
}
function Tt(t, n, e) {
  n === null ? t.first = e : (n.next = e, n.e.next = e && e.e), e !== null && (e.prev = n, e.e.prev = n && n.e);
}
const Zs = Symbol("is custom element"), Js = Symbol("is html");
function xi(t, n, e, r) {
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
var Ei = /* @__PURE__ */ new Map();
function js(t) {
  var n = Ei.get(t.nodeName);
  if (n) return n;
  Ei.set(t.nodeName, n = []);
  for (var e, r = t, i = Element.prototype; i !== r; ) {
    e = fo(r);
    for (var o in e)
      e[o].set && n.push(o);
    r = Hr(r);
  }
  return n;
}
function tu(t, n, e = n) {
  var r = Pn(), i = /* @__PURE__ */ new WeakSet();
  As(t, "input", (o) => {
    var a = o ? t.defaultValue : t.value;
    if (a = nr(t) ? er(a) : a, e(a), G !== null && i.add(G), r && a !== (a = n())) {
      var s = t.selectionStart, l = t.selectionEnd;
      t.value = a ?? "", l !== null && (t.selectionStart = s, t.selectionEnd = Math.min(l, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  it(n) == null && t.value && (e(nr(t) ? er(t.value) : t.value), G !== null && i.add(G)), Ge(() => {
    var o = n();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        _e ?? G
      );
      if (i.has(a))
        return;
    }
    nr(t) && o === er(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function nr(t) {
  var n = t.type;
  return n === "number" || n === "range";
}
function er(t) {
  return t === "" ? null : +t;
}
function Si(t, n) {
  return t === n || t?.[en] === n;
}
function nu(t = {}, n, e, r) {
  return Is(() => {
    var i, o;
    return Ge(() => {
      i = o, o = [], it(() => {
        t !== e(...o) && (n(t, ...o), i && Si(e(...i), t) && n(null, ...i));
      });
    }), () => {
      yo(() => {
        o && Si(e(...o), t) && n(null, ...o);
      });
    };
  }), t;
}
function Bo(t = !1) {
  const n = (
    /** @type {ComponentContextLegacy} */
    J
  ), e = n.l.u;
  if (!e) return;
  let r = () => Fo(n.s);
  if (t) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Zr(() => {
      let s = !1;
      const l = n.s;
      for (const f in l)
        l[f] !== o[f] && (o[f] = l[f], s = !0);
      return s && i++, i;
    });
    r = () => R(a);
  }
  e.b.length && Ts(() => {
    bi(n, r), cr(e.b);
  }), dr(() => {
    const i = it(() => e.m.map(Ga));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), e.a.length && dr(() => {
    bi(n, r), cr(e.a);
  });
}
function bi(t, n) {
  if (t.l.s)
    for (const e of t.l.s) R(e);
  n();
}
let ae = !1;
function eu(t) {
  var n = ae;
  try {
    return ae = !1, [t(), ae];
  } finally {
    ae = n;
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
    f = de(t, n)?.set ?? (u && n in t ? (m) => t[n] = m : void 0);
  }
  var c, h = !1;
  [c, h] = eu(() => (
    /** @type {V} */
    t[n]
  )), c === void 0 && r !== void 0 && (c = l(), f && (i && os(), f(c)));
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
        return arguments.length > 0 ? ((!i || !S || d || h) && f(S ? p() : m), m) : p();
      })
    );
  }
  var y = !1, w = /* @__PURE__ */ Jr(() => (y = !1, p()));
  R(w);
  var x = (
    /** @type {Effect} */
    H
  );
  return (
    /** @type {() => V} */
    (function(m, S) {
      if (arguments.length > 0) {
        const b = S ? R(w) : i && o ? mn(m) : m;
        return F(w, b), y = !0, a !== void 0 && (a = b), m;
      }
      return hn && y || (x.f & fn) !== 0 ? w.v : R(w);
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
function ei() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ge(e);
}
function ge(t) {
  this._ = t;
}
function au(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ge.prototype = ei.prototype = {
  constructor: ge,
  on: function(t, n) {
    var e = this._, r = au(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = su(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Mi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Mi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ge(t);
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
function Mi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = ou, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var gr = "http://www.w3.org/1999/xhtml";
const Ai = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: gr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ke(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ai.hasOwnProperty(n) ? { space: Ai[n], local: t } : t;
}
function uu(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === gr && n.documentElement.namespaceURI === gr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function lu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yo(t) {
  var n = Ke(t);
  return (n.local ? lu : uu)(n);
}
function fu() {
}
function ri(t) {
  return t == null ? fu : function() {
    return this.querySelector(t);
  };
}
function cu(t) {
  typeof t != "function" && (t = ri(t));
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
function Re(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Re.prototype = {
  constructor: Re,
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
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Re(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function ku(t, n, e, r, i, o, a) {
  var s, l, f = /* @__PURE__ */ new Map(), u = n.length, c = o.length, h = new Array(u), p;
  for (s = 0; s < u; ++s)
    (l = n[s]) && (h[s] = p = a.call(l, l.__data__, s, n) + "", f.has(p) ? i[s] = l : f.set(p, l));
  for (s = 0; s < c; ++s)
    p = a.call(t, o[s], s, o) + "", (l = f.get(p)) ? (r[s] = l, l.__data__ = o[s], f.delete(p)) : e[s] = new Re(t, o[s]);
  for (s = 0; s < u; ++s)
    (l = n[s]) && f.get(h[s]) === l && (i[s] = l);
}
function Tu(t) {
  return t.__data__;
}
function Iu(t, n) {
  if (!arguments.length) return Array.from(this, Tu);
  var e = n ? ku : Nu, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Au(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), f = 0; f < o; ++f) {
    var u = r[f], c = i[f], h = c.length, p = Ru(t.call(u, u && u.__data__, f, r)), d = p.length, y = s[f] = new Array(d), w = a[f] = new Array(d), x = l[f] = new Array(h);
    e(u, c, y, w, x, p, n);
    for (var m = 0, S = 0, b, I; m < d; ++m)
      if (b = y[m]) {
        for (m >= S && (S = m + 1); !(I = w[S]) && ++S < d; ) ;
        b._next = I || null;
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
    for (var f = e[l], u = r[l], c = f.length, h = s[l] = new Array(c), p, d = 0; d < c; ++d)
      (p = f[d] || u[d]) && (h[d] = p);
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
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
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
  var e = Ke(t);
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
function ii(t) {
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
  for (var e = ii(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function na(t, n) {
  for (var e = ii(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
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
    for (var r = ii(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
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
  var e = typeof t == "function" ? t : Yo(t), r = n == null ? El : typeof n == "function" ? n : ri(n);
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
function ie() {
  return new dt([[document.documentElement]], ra);
}
function ql() {
  return this;
}
dt.prototype = ie.prototype = {
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
function at(t) {
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
const mr = { capture: !0, passive: !1 };
function yr(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ul(t) {
  var n = t.document.documentElement, e = at(t).on("dragstart.drag", yr, mr);
  "onselectstart" in n ? e.on("selectstart.drag", yr, mr) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Hl(t, n) {
  var e = t.document.documentElement, r = at(t).on("dragstart.drag", null);
  n && (r.on("click.drag", yr, mr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
function oi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ia(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function oe() {
}
var Gn = 0.7, Pe = 1 / Gn, En = "\\s*([+-]?\\d+)\\s*", Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vl = /^#([0-9a-f]{3,8})$/, Bl = new RegExp(`^rgb\\(${En},${En},${En}\\)$`), Xl = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), Yl = new RegExp(`^rgba\\(${En},${En},${En},${Kn}\\)$`), Wl = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Kn}\\)$`), Gl = new RegExp(`^hsl\\(${Kn},${Ct},${Ct}\\)$`), Kl = new RegExp(`^hsla\\(${Kn},${Ct},${Ct},${Kn}\\)$`), Ni = {
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
oi(oe, Zn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ki,
  // Deprecated! Use color.formatHex.
  formatHex: ki,
  formatHex8: Zl,
  formatHsl: Jl,
  formatRgb: Ti,
  toString: Ti
});
function ki() {
  return this.rgb().formatHex();
}
function Zl() {
  return this.rgb().formatHex8();
}
function Jl() {
  return oa(this).formatHsl();
}
function Ti() {
  return this.rgb().formatRgb();
}
function Zn(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Vl.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ii(n) : e === 3 ? new ut(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? se(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? se(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Bl.exec(t)) ? new ut(n[1], n[2], n[3], 1) : (n = Xl.exec(t)) ? new ut(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Yl.exec(t)) ? se(n[1], n[2], n[3], n[4]) : (n = Wl.exec(t)) ? se(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Gl.exec(t)) ? Ci(n[1], n[2] / 100, n[3] / 100, 1) : (n = Kl.exec(t)) ? Ci(n[1], n[2] / 100, n[3] / 100, n[4]) : Ni.hasOwnProperty(t) ? Ii(Ni[t]) : t === "transparent" ? new ut(NaN, NaN, NaN, 0) : null;
}
function Ii(t) {
  return new ut(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function se(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new ut(t, n, e, r);
}
function Ql(t) {
  return t instanceof oe || (t = Zn(t)), t ? (t = t.rgb(), new ut(t.r, t.g, t.b, t.opacity)) : new ut();
}
function wr(t, n, e, r) {
  return arguments.length === 1 ? Ql(t) : new ut(t, n, e, r ?? 1);
}
function ut(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
oi(ut, wr, ia(oe, {
  brighter(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new ut(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Gn : Math.pow(Gn, t), new ut(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ut(an(this.r), an(this.g), an(this.b), Ce(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ri,
  // Deprecated! Use color.formatHex.
  formatHex: Ri,
  formatHex8: jl,
  formatRgb: Pi,
  toString: Pi
}));
function Ri() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}`;
}
function jl() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}${tn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pi() {
  const t = Ce(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${an(this.r)}, ${an(this.g)}, ${an(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ce(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function an(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function tn(t) {
  return t = an(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ci(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new At(t, n, e, r);
}
function oa(t) {
  if (t instanceof At) return new At(t.h, t.s, t.l, t.opacity);
  if (t instanceof oe || (t = Zn(t)), !t) return new At();
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
oi(At, tf, ia(oe, {
  brighter(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new At(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Gn : Math.pow(Gn, t), new At(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new ut(
      rr(t >= 240 ? t - 240 : t + 120, i, r),
      rr(t, i, r),
      rr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new At($i(this.h), ue(this.s), ue(this.l), Ce(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ce(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${$i(this.h)}, ${ue(this.s) * 100}%, ${ue(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function $i(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ue(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function rr(t, n, e) {
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
const Oi = (function t(n) {
  var e = rf(n);
  function r(i, o) {
    var a = e((i = wr(i)).r, (o = wr(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), f = sa(i.opacity, o.opacity);
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
var xr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ir = new RegExp(xr.source, "g");
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
  var e = xr.lastIndex = ir.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = xr.exec(t)) && (i = ir.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: Gt(r, i) })), e = ir.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? af(l[0].x) : of(n) : (n = l.length, function(f) {
    for (var u = 0, c; u < n; ++u) s[(c = l[u]).i] = c.x(f);
    return s.join("");
  });
}
var Di = 180 / Math.PI, Er = {
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
    rotate: Math.atan2(n, t) * Di,
    skewX: Math.atan(l) * Di,
    scaleX: a,
    scaleY: s
  };
}
var le;
function uf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Er : ua(n.a, n.b, n.c, n.d, n.e, n.f);
}
function lf(t) {
  return t == null || (le || (le = document.createElementNS("http://www.w3.org/2000/svg", "g")), le.setAttribute("transform", t), !(t = le.transform.baseVal.consolidate())) ? Er : (t = t.matrix, ua(t.a, t.b, t.c, t.d, t.e, t.f));
}
function la(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, u, c, h, p, d) {
    if (f !== c || u !== h) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: Gt(f, c) }, { i: y - 2, x: Gt(u, h) });
    } else (c || h) && p.push("translate(" + c + n + h + e);
  }
  function a(f, u, c, h) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: Gt(f, u) })) : u && c.push(i(c) + "rotate(" + u + r);
  }
  function s(f, u, c, h) {
    f !== u ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: Gt(f, u) }) : u && c.push(i(c) + "skewX(" + u + r);
  }
  function l(f, u, c, h, p, d) {
    if (f !== c || u !== h) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: Gt(f, c) }, { i: y - 2, x: Gt(u, h) });
    } else (c !== 1 || h !== 1) && p.push(i(p) + "scale(" + c + "," + h + ")");
  }
  return function(f, u) {
    var c = [], h = [];
    return f = t(f), u = t(u), o(f.translateX, f.translateY, u.translateX, u.translateY, c, h), a(f.rotate, u.rotate, c, h), s(f.skewX, u.skewX, c, h), l(f.scaleX, f.scaleY, u.scaleX, u.scaleY, c, h), f = u = null, function(p) {
      for (var d = -1, y = h.length, w; ++d < y; ) c[(w = h[d]).i] = w.x(p);
      return c.join("");
    };
  };
}
var ff = la(uf, "px, ", "px)", "deg)"), cf = la(lf, ", ", ")", ")"), hf = 1e-12;
function zi(t) {
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
    var s = o[0], l = o[1], f = o[2], u = a[0], c = a[1], h = a[2], p = u - s, d = c - l, y = p * p + d * d, w, x;
    if (y < hf)
      x = Math.log(h / f) / n, w = function(z) {
        return [
          s + z * p,
          l + z * d,
          f * Math.exp(n * z * x)
        ];
      };
    else {
      var m = Math.sqrt(y), S = (h * h - f * f + r * y) / (2 * f * e * m), b = (h * h - f * f - r * y) / (2 * h * e * m), I = Math.log(Math.sqrt(S * S + 1) - S), P = Math.log(Math.sqrt(b * b + 1) - b);
      x = (P - I) / n, w = function(z) {
        var O = z * x, $ = zi(I), q = f / (e * m) * ($ * vf(n * O + I) - pf(I));
        return [
          s + q * p,
          l + q * d,
          f * $ / zi(n * O + I)
        ];
      };
    }
    return w.duration = x * 1e3 * n / Math.SQRT2, w;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), s = a * a, l = s * s;
    return t(a, s, l);
  }, i;
})(Math.SQRT2, 2, 4);
var An = 0, zn = 0, On = 0, fa = 1e3, $e, Ln, Oe = 0, un = 0, Ze = 0, Jn = typeof performance == "object" && performance.now ? performance : Date, ca = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ai() {
  return un || (ca(_f), un = Jn.now() + Ze);
}
function _f() {
  un = 0;
}
function De() {
  this._call = this._time = this._next = null;
}
De.prototype = ha.prototype = {
  constructor: De,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? ai() : +e) + (n == null ? 0 : +n), !this._next && Ln !== this && (Ln ? Ln._next = this : $e = this, Ln = this), this._call = t, this._time = e, Sr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Sr());
  }
};
function ha(t, n, e) {
  var r = new De();
  return r.restart(t, n, e), r;
}
function gf() {
  ai(), ++An;
  for (var t = $e, n; t; )
    (n = un - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --An;
}
function Li() {
  un = (Oe = Jn.now()) + Ze, An = zn = 0;
  try {
    gf();
  } finally {
    An = 0, yf(), un = 0;
  }
}
function mf() {
  var t = Jn.now(), n = t - Oe;
  n > fa && (Ze -= n, Oe = t);
}
function yf() {
  for (var t, n = $e, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : $e = e);
  Ln = t, Sr(r);
}
function Sr(t) {
  if (!An) {
    zn && (zn = clearTimeout(zn));
    var n = t - un;
    n > 24 ? (t < 1 / 0 && (zn = setTimeout(Li, t - Jn.now() - Ze)), On && (On = clearInterval(On))) : (On || (Oe = Jn.now(), On = setInterval(mf, fa)), An = 1, ca(Li));
  }
}
function qi(t, n, e) {
  var r = new De();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var wf = ei("start", "end", "cancel", "interrupt"), xf = [], pa = 0, Fi = 1, br = 2, me = 3, Ui = 4, Mr = 5, ye = 6;
function Je(t, n, e, r, i, o) {
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
function si(t, n) {
  var e = kt(t, n);
  if (e.state > pa) throw new Error("too late; already scheduled");
  return e;
}
function Dt(t, n) {
  var e = kt(t, n);
  if (e.state > me) throw new Error("too late; already running");
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
    e.state = Fi, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var u, c, h, p;
    if (e.state !== Fi) return l();
    for (u in r)
      if (p = r[u], p.name === e.name) {
        if (p.state === me) return qi(a);
        p.state === Ui ? (p.state = ye, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[u]) : +u < n && (p.state = ye, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[u]);
      }
    if (qi(function() {
      e.state === me && (e.state = Ui, e.timer.restart(s, e.delay, e.time), s(f));
    }), e.state = br, e.on.call("start", t, t.__data__, e.index, e.group), e.state === br) {
      for (e.state = me, i = new Array(h = e.tween.length), u = 0, c = -1; u < h; ++u)
        (p = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = p);
      i.length = c + 1;
    }
  }
  function s(f) {
    for (var u = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(l), e.state = Mr, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, u);
    e.state === Mr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ye, e.timer.stop(), delete r[n];
    for (var f in r) return;
    delete t.__transition;
  }
}
function we(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > br && r.state < Mr, r.state = ye, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Sf(t) {
  return this.each(function() {
    we(this, t);
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
function ui(t, n, e) {
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
  return (typeof n == "number" ? Gt : n instanceof Zn ? Oi : (e = Zn(n)) ? (n = e, Oi) : sf)(t, n);
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
  var e = Ke(t), r = e === "transform" ? cf : va;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Pf : Rf)(e, r, ui(this, "attr." + t, n)) : n == null ? (e.local ? kf : Nf)(e) : (e.local ? If : Tf)(e, r, n));
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
  var r = Ke(t);
  return this.tween(e, (r.local ? Df : zf)(r, n));
}
function qf(t, n) {
  return function() {
    si(this, t).delay = +n.apply(this, arguments);
  };
}
function Ff(t, n) {
  return n = +n, function() {
    si(this, t).delay = n;
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
    for (var l = n[s], f = e[s], u = l.length, c = a[s] = new Array(u), h, p = 0; p < u; ++p)
      (h = l[p] || f[p]) && (c[p] = h);
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
  var r, i, o = Jf(n) ? si : Dt;
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
  typeof t != "function" && (t = ri(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, f = o[a] = new Array(l), u, c, h = 0; h < l; ++h)
      (u = s[h]) && (c = t.call(u, u.__data__, h, s)) && ("__data__" in u && (c.__data__ = u.__data__), f[h] = c, Je(f[h], n, e, h, f, kt(u, e)));
  return new Vt(o, this._parents, n, e);
}
function rc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Wo(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], f = l.length, u, c = 0; c < f; ++c)
      if (u = l[c]) {
        for (var h = t.call(u, u.__data__, c, l), p, d = kt(u, e), y = 0, w = h.length; y < w; ++y)
          (p = h[y]) && Je(p, n, e, y, h, d);
        o.push(h), a.push(u);
      }
  return new Vt(o, a, n, e);
}
var ic = ie.prototype.constructor;
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
  return n == null ? this.styleTween(t, ac(t, r)).on("end.style." + t, da(t)) : typeof n == "function" ? this.styleTween(t, uc(t, r, ui(this, "style." + t, n))).each(lc(this._id, t)) : this.styleTween(t, sc(t, r, n), e).on("end.style." + t, null);
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
  return this.tween("text", typeof t == "function" ? dc(ui(this, "text", t)) : vc(t == null ? "" : t + ""));
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
        Je(l, t, e, f, a, {
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
var zt = ie.prototype;
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
  t instanceof Vt ? (n = t._id, t = t._name) : (n = _a(), (e = bc).time = ai(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, f = 0; f < s; ++f)
      (l = a[f]) && Je(l, t, n, f, a, e || Mc(l, n));
  return new Vt(r, this._parents, t, n);
}
ie.prototype.interrupt = Sf;
ie.prototype.transition = Ac;
var X = 1e-6, U = Math.PI, lt = U / 2, Hi = U / 4, _t = U * 2, pt = 180 / U, tt = U / 180, W = Math.abs, ga = Math.atan, Qn = Math.atan2, K = Math.cos, Nc = Math.exp, kc = Math.log, Z = Math.sin, Tc = Math.sign || function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}, pn = Math.sqrt, Ic = Math.tan;
function Rc(t) {
  return t > 1 ? 0 : t < -1 ? U : Math.acos(t);
}
function jn(t) {
  return t > 1 ? lt : t < -1 ? -lt : Math.asin(t);
}
function wt() {
}
function ze(t, n) {
  t && Bi.hasOwnProperty(t.type) && Bi[t.type](t, n);
}
var Vi = {
  Feature: function(t, n) {
    ze(t.geometry, n);
  },
  FeatureCollection: function(t, n) {
    for (var e = t.features, r = -1, i = e.length; ++r < i; ) ze(e[r].geometry, n);
  }
}, Bi = {
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
    Ar(t.coordinates, n, 0);
  },
  MultiLineString: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Ar(e[r], n, 0);
  },
  Polygon: function(t, n) {
    Xi(t.coordinates, n);
  },
  MultiPolygon: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Xi(e[r], n);
  },
  GeometryCollection: function(t, n) {
    for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) ze(e[r], n);
  }
};
function Ar(t, n, e) {
  var r = -1, i = t.length - e, o;
  for (n.lineStart(); ++r < i; ) o = t[r], n.point(o[0], o[1], o[2]);
  n.lineEnd();
}
function Xi(t, n) {
  var e = -1, r = t.length;
  for (n.polygonStart(); ++e < r; ) Ar(t[e], n, 1);
  n.polygonEnd();
}
function gn(t, n) {
  t && Vi.hasOwnProperty(t.type) ? Vi[t.type](t, n) : ze(t, n);
}
function Nr(t) {
  return [Qn(t[1], t[0]), jn(t[2])];
}
function Nn(t) {
  var n = t[0], e = t[1], r = K(e);
  return [r * K(n), r * Z(n), Z(e)];
}
function fe(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function Le(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function or(t, n) {
  t[0] += n[0], t[1] += n[1], t[2] += n[2];
}
function ce(t, n) {
  return [t[0] * n, t[1] * n, t[2] * n];
}
function kr(t) {
  var n = pn(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= n, t[1] /= n, t[2] /= n;
}
function Tr(t, n) {
  function e(r, i) {
    return r = t(r, i), n(r[0], r[1]);
  }
  return t.invert && n.invert && (e.invert = function(r, i) {
    return r = n.invert(r, i), r && t.invert(r[0], r[1]);
  }), e;
}
function Ir(t, n) {
  return W(t) > U && (t -= Math.round(t / _t) * _t), [t, n];
}
Ir.invert = Ir;
function ma(t, n, e) {
  return (t %= _t) ? n || e ? Tr(Wi(t), Gi(n, e)) : Wi(t) : n || e ? Gi(n, e) : Ir;
}
function Yi(t) {
  return function(n, e) {
    return n += t, W(n) > U && (n -= Math.round(n / _t) * _t), [n, e];
  };
}
function Wi(t) {
  var n = Yi(t);
  return n.invert = Yi(-t), n;
}
function Gi(t, n) {
  var e = K(t), r = Z(t), i = K(n), o = Z(n);
  function a(s, l) {
    var f = K(l), u = K(s) * f, c = Z(s) * f, h = Z(l), p = h * e + u * r;
    return [
      Qn(c * i - p * o, u * e - h * r),
      jn(p * i + c * o)
    ];
  }
  return a.invert = function(s, l) {
    var f = K(l), u = K(s) * f, c = Z(s) * f, h = Z(l), p = h * i - c * o;
    return [
      Qn(c * i + h * o, u * e + p * r),
      jn(p * e - u * r)
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
    var a = K(n), s = Z(n), l = r * e;
    i == null ? (i = n + r * _t, o = n - l / 2) : (i = Ki(a, i), o = Ki(a, o), (r > 0 ? i < o : i > o) && (i += r * _t));
    for (var f, u = i; r > 0 ? u > o : u < o; u -= l)
      f = Nr([a, -s * K(u), -s * Z(u)]), t.point(f[0], f[1]);
  }
}
function Ki(t, n) {
  n = Nn(n), n[0] -= t, kr(n);
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
function xe(t, n) {
  return W(t[0] - n[0]) < X && W(t[1] - n[1]) < X;
}
function he(t, n, e, r) {
  this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function wa(t, n, e, r, i) {
  var o = [], a = [], s, l;
  if (t.forEach(function(d) {
    if (!((y = d.length - 1) <= 0)) {
      var y, w = d[0], x = d[y], m;
      if (xe(w, x)) {
        if (!w[2] && !x[2]) {
          for (i.lineStart(), s = 0; s < y; ++s) i.point((w = d[s])[0], w[1]);
          i.lineEnd();
          return;
        }
        x[0] += 2 * X;
      }
      o.push(m = new he(w, d, null, !0)), a.push(m.o = new he(w, null, m, !1)), o.push(m = new he(x, d, null, !1)), a.push(m.o = new he(x, null, m, !0));
    }
  }), !!o.length) {
    for (a.sort(n), Zi(o), Zi(a), s = 0, l = a.length; s < l; ++s)
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
function Zi(t) {
  if (n = t.length) {
    for (var n, e = 0, r = t[0], i; ++e < n; )
      r.n = i = t[e], i.p = r, r = i;
    r.n = i = t[0], i.p = r;
  }
}
function ar(t) {
  return W(t[0]) <= U ? t[0] : Tc(t[0]) * ((W(t[0]) + U) % _t - U);
}
function $c(t, n) {
  var e = ar(n), r = n[1], i = Z(r), o = [Z(e), -K(e), 0], a = 0, s = 0, l = new sn();
  i === 1 ? r = lt + X : i === -1 && (r = -lt - X);
  for (var f = 0, u = t.length; f < u; ++f)
    if (h = (c = t[f]).length)
      for (var c, h, p = c[h - 1], d = ar(p), y = p[1] / 2 + Hi, w = Z(y), x = K(y), m = 0; m < h; ++m, d = b, w = P, x = z, p = S) {
        var S = c[m], b = ar(S), I = S[1] / 2 + Hi, P = Z(I), z = K(I), O = b - d, $ = O >= 0 ? 1 : -1, q = $ * O, A = q > U, T = w * P;
        if (l.add(Qn(T * $ * Z(q), x * z + T * K(q))), a += A ? O + $ * _t : O, A ^ d >= e ^ b >= e) {
          var C = Le(Nn(p), Nn(S));
          kr(C);
          var v = Le(o, C);
          kr(v);
          var _ = (A ^ O >= 0 ? -1 : 1) * jn(v[2]);
          (r > _ || r === _ && (C[0] || C[1])) && (s += A ^ O >= 0 ? 1 : -1);
        }
      }
  return (a < -X || a < X && l < -1e-12) ^ s & 1;
}
function xa(t, n, e, r) {
  return function(i) {
    var o = n(i), a = ya(), s = n(a), l = !1, f, u, c, h = {
      point: p,
      lineStart: y,
      lineEnd: w,
      polygonStart: function() {
        h.point = x, h.lineStart = m, h.lineEnd = S, u = [], f = [];
      },
      polygonEnd: function() {
        h.point = p, h.lineStart = y, h.lineEnd = w, u = Xo(u);
        var b = $c(f, r);
        u.length ? (l || (i.polygonStart(), l = !0), wa(u, Dc, b, e, i)) : b && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), u = f = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(b, I) {
      t(b, I) && i.point(b, I);
    }
    function d(b, I) {
      o.point(b, I);
    }
    function y() {
      h.point = d, o.lineStart();
    }
    function w() {
      h.point = p, o.lineEnd();
    }
    function x(b, I) {
      c.push([b, I]), s.point(b, I);
    }
    function m() {
      s.lineStart(), c = [];
    }
    function S() {
      x(c[0][0], c[0][1]), s.lineEnd();
      var b = s.clean(), I = a.result(), P, z = I.length, O, $, q;
      if (c.pop(), f.push(c), c = null, !!z) {
        if (b & 1) {
          if ($ = I[0], (O = $.length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), P = 0; P < O; ++P) i.point((q = $[P])[0], q[1]);
            i.lineEnd();
          }
          return;
        }
        z > 1 && b & 2 && I.push(I.pop().concat(I.shift())), u.push(I.filter(Oc));
      }
    }
    return h;
  };
}
function Oc(t) {
  return t.length > 1;
}
function Dc(t, n) {
  return ((t = t.x)[0] < 0 ? t[1] - lt - X : lt - t[1]) - ((n = n.x)[0] < 0 ? n[1] - lt - X : lt - n[1]);
}
const Ji = xa(
  function() {
    return !0;
  },
  zc,
  qc,
  [-U, -lt]
);
function zc(t) {
  var n = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      t.lineStart(), i = 1;
    },
    point: function(o, a) {
      var s = o > 0 ? U : -U, l = W(o - n);
      W(l - U) < X ? (t.point(n, e = (e + a) / 2 > 0 ? lt : -lt), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), t.point(o, e), i = 0) : r !== s && l >= U && (W(n - r) < X && (n -= r * X), W(o - s) < X && (o -= s * X), e = Lc(n, e, o, a), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), i = 0), t.point(n = o, e = a), r = s;
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
  var i, o, a = Z(t - e);
  return W(a) > X ? ga((Z(n) * (o = K(r)) * Z(e) - Z(r) * (i = K(n)) * Z(t)) / (i * o * a)) : (n + r) / 2;
}
function qc(t, n, e, r) {
  var i;
  if (t == null)
    i = e * lt, r.point(-U, i), r.point(0, i), r.point(U, i), r.point(U, 0), r.point(U, -i), r.point(0, -i), r.point(-U, -i), r.point(-U, 0), r.point(-U, i);
  else if (W(t[0] - n[0]) > X) {
    var o = t[0] < n[0] ? U : -U;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(n[0], n[1]);
}
function Fc(t) {
  var n = K(t), e = 2 * tt, r = n > 0, i = W(n) > X;
  function o(u, c, h, p) {
    Cc(p, t, e, h, u, c);
  }
  function a(u, c) {
    return K(u) * K(c) > n;
  }
  function s(u) {
    var c, h, p, d, y;
    return {
      lineStart: function() {
        d = p = !1, y = 1;
      },
      point: function(w, x) {
        var m = [w, x], S, b = a(w, x), I = r ? b ? 0 : f(w, x) : b ? f(w + (w < 0 ? U : -U), x) : 0;
        if (!c && (d = p = b) && u.lineStart(), b !== p && (S = l(c, m), (!S || xe(c, S) || xe(m, S)) && (m[2] = 1)), b !== p)
          y = 0, b ? (u.lineStart(), S = l(m, c), u.point(S[0], S[1])) : (S = l(c, m), u.point(S[0], S[1], 2), u.lineEnd()), c = S;
        else if (i && c && r ^ b) {
          var P;
          !(I & h) && (P = l(m, c, !0)) && (y = 0, r ? (u.lineStart(), u.point(P[0][0], P[0][1]), u.point(P[1][0], P[1][1]), u.lineEnd()) : (u.point(P[1][0], P[1][1]), u.lineEnd(), u.lineStart(), u.point(P[0][0], P[0][1], 3)));
        }
        b && (!c || !xe(c, m)) && u.point(m[0], m[1]), c = m, p = b, h = I;
      },
      lineEnd: function() {
        p && u.lineEnd(), c = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return y | (d && p) << 1;
      }
    };
  }
  function l(u, c, h) {
    var p = Nn(u), d = Nn(c), y = [1, 0, 0], w = Le(p, d), x = fe(w, w), m = w[0], S = x - m * m;
    if (!S) return !h && u;
    var b = n * x / S, I = -n * m / S, P = Le(y, w), z = ce(y, b), O = ce(w, I);
    or(z, O);
    var $ = P, q = fe(z, $), A = fe($, $), T = q * q - A * (fe(z, z) - 1);
    if (!(T < 0)) {
      var C = pn(T), v = ce($, (-q - C) / A);
      if (or(v, z), v = Nr(v), !h) return v;
      var _ = u[0], g = c[0], E = u[1], M = c[1], k;
      g < _ && (k = _, _ = g, g = k);
      var N = g - _, D = W(N - U) < X, L = D || N < X;
      if (!D && M < E && (k = E, E = M, M = k), L ? D ? E + M > 0 ^ v[1] < (W(v[0] - _) < X ? E : M) : E <= v[1] && v[1] <= M : N > U ^ (_ <= v[0] && v[0] <= g)) {
        var Y = ce($, (-q + C) / A);
        return or(Y, z), [v, Nr(Y)];
      }
    }
  }
  function f(u, c) {
    var h = r ? t : U - t, p = 0;
    return u < -h ? p |= 1 : u > h && (p |= 2), c < -h ? p |= 4 : c > h && (p |= 8), p;
  }
  return xa(a, s, o, r ? [0, -t] : [-U, t - U]);
}
function Uc(t, n, e, r, i, o) {
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
var qn = 1e9, pe = -qn;
function Hc(t, n, e, r) {
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
    return W(f[0] - t) < X ? u > 0 ? 0 : 3 : W(f[0] - e) < X ? u > 0 ? 2 : 1 : W(f[1] - n) < X ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function s(f, u) {
    return l(f.x, u.x);
  }
  function l(f, u) {
    var c = a(f, 1), h = a(u, 1);
    return c !== h ? c - h : c === 0 ? u[1] - f[1] : c === 1 ? f[0] - u[0] : c === 2 ? f[1] - u[1] : u[0] - f[0];
  }
  return function(f) {
    var u = f, c = ya(), h, p, d, y, w, x, m, S, b, I, P, z = {
      point: O,
      lineStart: T,
      lineEnd: C,
      polygonStart: q,
      polygonEnd: A
    };
    function O(_, g) {
      i(_, g) && u.point(_, g);
    }
    function $() {
      for (var _ = 0, g = 0, E = p.length; g < E; ++g)
        for (var M = p[g], k = 1, N = M.length, D = M[0], L, Y, B = D[0], Q = D[1]; k < N; ++k)
          L = B, Y = Q, D = M[k], B = D[0], Q = D[1], Y <= r ? Q > r && (B - L) * (r - Y) > (Q - Y) * (t - L) && ++_ : Q <= r && (B - L) * (r - Y) < (Q - Y) * (t - L) && --_;
      return _;
    }
    function q() {
      u = c, h = [], p = [], P = !0;
    }
    function A() {
      var _ = $(), g = P && _, E = (h = Xo(h)).length;
      (g || E) && (f.polygonStart(), g && (f.lineStart(), o(null, null, 1, f), f.lineEnd()), E && wa(h, s, _, o, f), f.polygonEnd()), u = f, h = p = d = null;
    }
    function T() {
      z.point = v, p && p.push(d = []), I = !0, b = !1, m = S = NaN;
    }
    function C() {
      h && (v(y, w), x && b && c.rejoin(), h.push(c.result())), z.point = O, b && u.lineEnd();
    }
    function v(_, g) {
      var E = i(_, g);
      if (p && d.push([_, g]), I)
        y = _, w = g, x = E, I = !1, E && (u.lineStart(), u.point(_, g));
      else if (E && b) u.point(_, g);
      else {
        var M = [m = Math.max(pe, Math.min(qn, m)), S = Math.max(pe, Math.min(qn, S))], k = [_ = Math.max(pe, Math.min(qn, _)), g = Math.max(pe, Math.min(qn, g))];
        Uc(M, k, t, n, e, r) ? (b || (u.lineStart(), u.point(M[0], M[1])), u.point(k[0], k[1]), E || u.lineEnd(), P = !1) : E && (u.lineStart(), u.point(_, g), P = !1);
      }
      m = _, S = g, b = E;
    }
    return z;
  };
}
const Rr = (t) => t;
var sr = new sn(), Pr = new sn(), Ea, Sa, Cr, $r, qt = {
  point: wt,
  lineStart: wt,
  lineEnd: wt,
  polygonStart: function() {
    qt.lineStart = Vc, qt.lineEnd = Xc;
  },
  polygonEnd: function() {
    qt.lineStart = qt.lineEnd = qt.point = wt, sr.add(W(Pr)), Pr = new sn();
  },
  result: function() {
    var t = sr / 2;
    return sr = new sn(), t;
  }
};
function Vc() {
  qt.point = Bc;
}
function Bc(t, n) {
  qt.point = ba, Ea = Cr = t, Sa = $r = n;
}
function ba(t, n) {
  Pr.add($r * t - Cr * n), Cr = t, $r = n;
}
function Xc() {
  ba(Ea, Sa);
}
var kn = 1 / 0, qe = kn, te = -kn, Fe = te, Ue = {
  point: Yc,
  lineStart: wt,
  lineEnd: wt,
  polygonStart: wt,
  polygonEnd: wt,
  result: function() {
    var t = [[kn, qe], [te, Fe]];
    return te = Fe = -(qe = kn = 1 / 0), t;
  }
};
function Yc(t, n) {
  t < kn && (kn = t), t > te && (te = t), n < qe && (qe = n), n > Fe && (Fe = n);
}
var Or = 0, Dr = 0, Fn = 0, He = 0, Ve = 0, wn = 0, zr = 0, Lr = 0, Un = 0, Ma, Aa, Rt, Pt, yt = {
  point: ln,
  lineStart: Qi,
  lineEnd: ji,
  polygonStart: function() {
    yt.lineStart = Kc, yt.lineEnd = Zc;
  },
  polygonEnd: function() {
    yt.point = ln, yt.lineStart = Qi, yt.lineEnd = ji;
  },
  result: function() {
    var t = Un ? [zr / Un, Lr / Un] : wn ? [He / wn, Ve / wn] : Fn ? [Or / Fn, Dr / Fn] : [NaN, NaN];
    return Or = Dr = Fn = He = Ve = wn = zr = Lr = Un = 0, t;
  }
};
function ln(t, n) {
  Or += t, Dr += n, ++Fn;
}
function Qi() {
  yt.point = Wc;
}
function Wc(t, n) {
  yt.point = Gc, ln(Rt = t, Pt = n);
}
function Gc(t, n) {
  var e = t - Rt, r = n - Pt, i = pn(e * e + r * r);
  He += i * (Rt + t) / 2, Ve += i * (Pt + n) / 2, wn += i, ln(Rt = t, Pt = n);
}
function ji() {
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
  He += i * (Rt + t) / 2, Ve += i * (Pt + n) / 2, wn += i, i = Pt * t - Rt * n, zr += i * (Rt + t), Lr += i * (Pt + n), Un += i * 3, ln(Rt = t, Pt = n);
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
var qr = new sn(), ur, Ta, Ia, Hn, Vn, ne = {
  point: wt,
  lineStart: function() {
    ne.point = Qc;
  },
  lineEnd: function() {
    ur && Ra(Ta, Ia), ne.point = wt;
  },
  polygonStart: function() {
    ur = !0;
  },
  polygonEnd: function() {
    ur = null;
  },
  result: function() {
    var t = +qr;
    return qr = new sn(), t;
  }
};
function Qc(t, n) {
  ne.point = Ra, Ta = Hn = t, Ia = Vn = n;
}
function Ra(t, n) {
  Hn -= t, Vn -= n, qr.add(pn(Hn * Hn + Vn * Vn)), Hn = t, Vn = n;
}
let to, Be, no, eo;
class ro {
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
        if (this._append`M${n},${e}`, this._radius !== no || this._append !== Be) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, no = r, Be = this._append, eo = this._, this._ = i;
        }
        this._ += eo;
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
  if (n !== to) {
    const e = 10 ** n;
    to = n, Be = function(i) {
      let o = 1;
      this._ += i[0];
      for (const a = i.length; o < a; ++o)
        this._ += Math.round(arguments[o] * e) / e + i[o];
    };
  }
  return Be;
}
function th(t, n) {
  let e = 3, r = 4.5, i, o;
  function a(s) {
    return s && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), gn(s, i(o))), o.result();
  }
  return a.area = function(s) {
    return gn(s, i(qt)), qt.result();
  }, a.measure = function(s) {
    return gn(s, i(ne)), ne.result();
  }, a.bounds = function(s) {
    return gn(s, i(Ue)), Ue.result();
  }, a.centroid = function(s) {
    return gn(s, i(yt)), yt.result();
  }, a.projection = function(s) {
    return arguments.length ? (i = s == null ? (t = null, Rr) : (t = s).stream, a) : t;
  }, a.context = function(s) {
    return arguments.length ? (o = s == null ? (n = null, new ro(e)) : new ka(n = s), typeof r != "function" && o.pointRadius(r), a) : n;
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
    return n === null && (o = new ro(e)), a;
  }, a.projection(t).digits(e).context(n);
}
function li(t) {
  return function(n) {
    var e = new Fr();
    for (var r in t) e[r] = t[r];
    return e.stream = n, e;
  };
}
function Fr() {
}
Fr.prototype = {
  constructor: Fr,
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
function fi(t, n, e) {
  var r = t.clipExtent && t.clipExtent();
  return t.scale(150).translate([0, 0]), r != null && t.clipExtent(null), gn(e, t.stream(Ue)), n(Ue.result()), r != null && t.clipExtent(r), t;
}
function Ca(t, n, e) {
  return fi(t, function(r) {
    var i = n[1][0] - n[0][0], o = n[1][1] - n[0][1], a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), s = +n[0][0] + (i - a * (r[1][0] + r[0][0])) / 2, l = +n[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * a).translate([s, l]);
  }, e);
}
function nh(t, n, e) {
  return Ca(t, [[0, 0], n], e);
}
function eh(t, n, e) {
  return fi(t, function(r) {
    var i = +n, o = i / (r[1][0] - r[0][0]), a = (i - o * (r[1][0] + r[0][0])) / 2, s = -o * r[0][1];
    t.scale(150 * o).translate([a, s]);
  }, e);
}
function rh(t, n, e) {
  return fi(t, function(r) {
    var i = +n, o = i / (r[1][1] - r[0][1]), a = -o * r[0][0], s = (i - o * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * o).translate([a, s]);
  }, e);
}
var io = 16, ih = K(30 * tt);
function oo(t, n) {
  return +n ? ah(t, n) : oh(t);
}
function oh(t) {
  return li({
    point: function(n, e) {
      n = t(n, e), this.stream.point(n[0], n[1]);
    }
  });
}
function ah(t, n) {
  function e(r, i, o, a, s, l, f, u, c, h, p, d, y, w) {
    var x = f - r, m = u - i, S = x * x + m * m;
    if (S > 4 * n && y--) {
      var b = a + h, I = s + p, P = l + d, z = pn(b * b + I * I + P * P), O = jn(P /= z), $ = W(W(P) - 1) < X || W(o - c) < X ? (o + c) / 2 : Qn(I, b), q = t($, O), A = q[0], T = q[1], C = A - r, v = T - i, _ = m * C - x * v;
      (_ * _ / S > n || W((x * C + m * v) / S - 0.5) > 0.3 || a * h + s * p + l * d < ih) && (e(r, i, o, a, s, l, A, T, $, b /= z, I /= z, P, y, w), w.point(A, T), e(A, T, $, b, I, P, f, u, c, h, p, d, y, w));
    }
  }
  return function(r) {
    var i, o, a, s, l, f, u, c, h, p, d, y, w = {
      point: x,
      lineStart: m,
      lineEnd: b,
      polygonStart: function() {
        r.polygonStart(), w.lineStart = I;
      },
      polygonEnd: function() {
        r.polygonEnd(), w.lineStart = m;
      }
    };
    function x(O, $) {
      O = t(O, $), r.point(O[0], O[1]);
    }
    function m() {
      c = NaN, w.point = S, r.lineStart();
    }
    function S(O, $) {
      var q = Nn([O, $]), A = t(O, $);
      e(c, h, u, p, d, y, c = A[0], h = A[1], u = O, p = q[0], d = q[1], y = q[2], io, r), r.point(c, h);
    }
    function b() {
      w.point = x, r.lineEnd();
    }
    function I() {
      m(), w.point = P, w.lineEnd = z;
    }
    function P(O, $) {
      S(i = O, $), o = c, a = h, s = p, l = d, f = y, w.point = S;
    }
    function z() {
      e(c, h, u, p, d, y, o, a, i, s, l, f, io, r), w.lineEnd = b, b();
    }
    return w;
  };
}
var sh = li({
  point: function(t, n) {
    this.stream.point(t * tt, n * tt);
  }
});
function uh(t) {
  return li({
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
function ao(t, n, e, r, i, o) {
  if (!o) return lh(t, n, e, r, i);
  var a = K(o), s = Z(o), l = a * t, f = s * t, u = a / t, c = s / t, h = (s * e - a * n) / t, p = (s * n + a * e) / t;
  function d(y, w) {
    return y *= r, w *= i, [l * y - f * w + n, e - f * y - l * w];
  }
  return d.invert = function(y, w) {
    return [r * (u * y - c * w + h), i * (p - c * y - u * w)];
  }, d;
}
function fh(t) {
  return ch(function() {
    return t;
  })();
}
function ch(t) {
  var n, e = 150, r = 480, i = 250, o = 0, a = 0, s = 0, l = 0, f = 0, u, c = 0, h = 1, p = 1, d = null, y = Ji, w = null, x, m, S, b = Rr, I = 0.5, P, z, O, $, q;
  function A(_) {
    return O(_[0] * tt, _[1] * tt);
  }
  function T(_) {
    return _ = O.invert(_[0], _[1]), _ && [_[0] * pt, _[1] * pt];
  }
  A.stream = function(_) {
    return $ && q === _ ? $ : $ = sh(uh(u)(y(P(b(q = _)))));
  }, A.preclip = function(_) {
    return arguments.length ? (y = _, d = void 0, v()) : y;
  }, A.postclip = function(_) {
    return arguments.length ? (b = _, w = x = m = S = null, v()) : b;
  }, A.clipAngle = function(_) {
    return arguments.length ? (y = +_ ? Fc(d = _ * tt) : (d = null, Ji), v()) : d * pt;
  }, A.clipExtent = function(_) {
    return arguments.length ? (b = _ == null ? (w = x = m = S = null, Rr) : Hc(w = +_[0][0], x = +_[0][1], m = +_[1][0], S = +_[1][1]), v()) : w == null ? null : [[w, x], [m, S]];
  }, A.scale = function(_) {
    return arguments.length ? (e = +_, C()) : e;
  }, A.translate = function(_) {
    return arguments.length ? (r = +_[0], i = +_[1], C()) : [r, i];
  }, A.center = function(_) {
    return arguments.length ? (o = _[0] % 360 * tt, a = _[1] % 360 * tt, C()) : [o * pt, a * pt];
  }, A.rotate = function(_) {
    return arguments.length ? (s = _[0] % 360 * tt, l = _[1] % 360 * tt, f = _.length > 2 ? _[2] % 360 * tt : 0, C()) : [s * pt, l * pt, f * pt];
  }, A.angle = function(_) {
    return arguments.length ? (c = _ % 360 * tt, C()) : c * pt;
  }, A.reflectX = function(_) {
    return arguments.length ? (h = _ ? -1 : 1, C()) : h < 0;
  }, A.reflectY = function(_) {
    return arguments.length ? (p = _ ? -1 : 1, C()) : p < 0;
  }, A.precision = function(_) {
    return arguments.length ? (P = oo(z, I = _ * _), v()) : pn(I);
  }, A.fitExtent = function(_, g) {
    return Ca(A, _, g);
  }, A.fitSize = function(_, g) {
    return nh(A, _, g);
  }, A.fitWidth = function(_, g) {
    return eh(A, _, g);
  }, A.fitHeight = function(_, g) {
    return rh(A, _, g);
  };
  function C() {
    var _ = ao(e, 0, 0, h, p, c).apply(null, n(o, a)), g = ao(e, r - _[0], i - _[1], h, p, c);
    return u = ma(s, l, f), z = Tr(n, g), O = Tr(u, z), P = oo(z, I), v();
  }
  function v() {
    return $ = q = null, A;
  }
  return function() {
    return n = t.apply(this, arguments), A.invert = n.invert && T, C();
  };
}
function ci(t, n) {
  return [t, kc(Ic((lt + n) / 2))];
}
ci.invert = function(t, n) {
  return [t, 2 * ga(Nc(n)) - lt];
};
function hh() {
  return ph(ci).scale(961 / _t);
}
function ph(t) {
  var n = fh(t), e = n.center, r = n.scale, i = n.translate, o = n.clipExtent, a = null, s, l, f;
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
    var c = U * r(), h = n(Pc(n.rotate()).invert([0, 0]));
    return o(a == null ? [[h[0] - c, h[1] - c], [h[0] + c, h[1] + c]] : t === ci ? [[Math.max(h[0] - c, a), s], [Math.min(h[0] + c, l), f]] : [[a, Math.max(h[1] - c, s)], [l, Math.min(h[1] + c, f)]]);
  }
  return u();
}
const ve = (t) => () => t;
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
var hi = new Ut(1, 0, 0);
Ut.prototype;
function lr(t) {
  t.stopImmediatePropagation();
}
function Dn(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function dh(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function _h() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function so() {
  return this.__zoom || hi;
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
  var t = dh, n = _h, e = yh, r = gh, i = mh, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = df, f = ei("start", "zoom", "end"), u, c, h, p = 500, d = 150, y = 0, w = 10;
  function x(v) {
    v.property("__zoom", so).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", $).on("dblclick.zoom", q).filter(i).on("touchstart.zoom", A).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", C).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(v, _, g, E) {
    var M = v.selection ? v.selection() : v;
    M.property("__zoom", so), v !== M ? I(v, _, g, E) : M.interrupt().each(function() {
      P(this, arguments).event(E).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, x.scaleBy = function(v, _, g, E) {
    x.scaleTo(v, function() {
      var M = this.__zoom.k, k = typeof _ == "function" ? _.apply(this, arguments) : _;
      return M * k;
    }, g, E);
  }, x.scaleTo = function(v, _, g, E) {
    x.transform(v, function() {
      var M = n.apply(this, arguments), k = this.__zoom, N = g == null ? b(M) : typeof g == "function" ? g.apply(this, arguments) : g, D = k.invert(N), L = typeof _ == "function" ? _.apply(this, arguments) : _;
      return e(S(m(k, L), N, D), M, a);
    }, g, E);
  }, x.translateBy = function(v, _, g, E) {
    x.transform(v, function() {
      return e(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), n.apply(this, arguments), a);
    }, null, E);
  }, x.translateTo = function(v, _, g, E, M) {
    x.transform(v, function() {
      var k = n.apply(this, arguments), N = this.__zoom, D = E == null ? b(k) : typeof E == "function" ? E.apply(this, arguments) : E;
      return e(hi.translate(D[0], D[1]).scale(N.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), k, a);
    }, E, M);
  };
  function m(v, _) {
    return _ = Math.max(o[0], Math.min(o[1], _)), _ === v.k ? v : new Ut(_, v.x, v.y);
  }
  function S(v, _, g) {
    var E = _[0] - g[0] * v.k, M = _[1] - g[1] * v.k;
    return E === v.x && M === v.y ? v : new Ut(v.k, E, M);
  }
  function b(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function I(v, _, g, E) {
    v.on("start.zoom", function() {
      P(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var M = this, k = arguments, N = P(M, k).event(E), D = n.apply(M, k), L = g == null ? b(D) : typeof g == "function" ? g.apply(M, k) : g, Y = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]), B = M.__zoom, Q = typeof _ == "function" ? _.apply(M, k) : _, St = l(B.invert(L).concat(Y / B.k), Q.invert(L).concat(Y / Q.k));
      return function(ft) {
        if (ft === 1) ft = Q;
        else {
          var bt = St(ft), Cn = Y / bt[2];
          ft = new Ut(Cn, L[0] - bt[0] * Cn, L[1] - bt[1] * Cn);
        }
        N.zoom(null, ft);
      };
    });
  }
  function P(v, _, g) {
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
      var _ = at(this.that).datum();
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
  function O(v, ..._) {
    if (!t.apply(this, arguments)) return;
    var g = P(this, _).event(v), E = this.__zoom, M = Math.max(o[0], Math.min(o[1], E.k * Math.pow(2, r.apply(this, arguments)))), k = Qt(v);
    if (g.wheel)
      (g.mouse[0][0] !== k[0] || g.mouse[0][1] !== k[1]) && (g.mouse[1] = E.invert(g.mouse[0] = k)), clearTimeout(g.wheel);
    else {
      if (E.k === M) return;
      g.mouse = [k, E.invert(k)], we(this), g.start();
    }
    Dn(v), g.wheel = setTimeout(N, d), g.zoom("mouse", e(S(m(E, M), g.mouse[0], g.mouse[1]), g.extent, a));
    function N() {
      g.wheel = null, g.end();
    }
  }
  function $(v, ..._) {
    if (h || !t.apply(this, arguments)) return;
    var g = v.currentTarget, E = P(this, _, !0).event(v), M = at(v.view).on("mousemove.zoom", L, !0).on("mouseup.zoom", Y, !0), k = Qt(v, g), N = v.clientX, D = v.clientY;
    Ul(v.view), lr(v), E.mouse = [k, this.__zoom.invert(k)], we(this), E.start();
    function L(B) {
      if (Dn(B), !E.moved) {
        var Q = B.clientX - N, St = B.clientY - D;
        E.moved = Q * Q + St * St > y;
      }
      E.event(B).zoom("mouse", e(S(E.that.__zoom, E.mouse[0] = Qt(B, g), E.mouse[1]), E.extent, a));
    }
    function Y(B) {
      M.on("mousemove.zoom mouseup.zoom", null), Hl(B.view, E.moved), Dn(B), E.event(B).end();
    }
  }
  function q(v, ..._) {
    if (t.apply(this, arguments)) {
      var g = this.__zoom, E = Qt(v.changedTouches ? v.changedTouches[0] : v, this), M = g.invert(E), k = g.k * (v.shiftKey ? 0.5 : 2), N = e(S(m(g, k), E, M), n.apply(this, _), a);
      Dn(v), s > 0 ? at(this).transition().duration(s).call(I, N, E, v) : at(this).call(x.transform, N, E, v);
    }
  }
  function A(v, ..._) {
    if (t.apply(this, arguments)) {
      var g = v.touches, E = g.length, M = P(this, _, v.changedTouches.length === E).event(v), k, N, D, L;
      for (lr(v), N = 0; N < E; ++N)
        D = g[N], L = Qt(D, this), L = [L, this.__zoom.invert(L), D.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== L[2] && (M.touch1 = L, M.taps = 0) : (M.touch0 = L, k = !0, M.taps = 1 + !!u);
      u && (u = clearTimeout(u)), k && (M.taps < 2 && (c = L[0], u = setTimeout(function() {
        u = null;
      }, p)), we(this), M.start());
    }
  }
  function T(v, ..._) {
    if (this.__zooming) {
      var g = P(this, _).event(v), E = v.changedTouches, M = E.length, k, N, D, L;
      for (Dn(v), k = 0; k < M; ++k)
        N = E[k], D = Qt(N, this), g.touch0 && g.touch0[2] === N.identifier ? g.touch0[0] = D : g.touch1 && g.touch1[2] === N.identifier && (g.touch1[0] = D);
      if (N = g.that.__zoom, g.touch1) {
        var Y = g.touch0[0], B = g.touch0[1], Q = g.touch1[0], St = g.touch1[1], ft = (ft = Q[0] - Y[0]) * ft + (ft = Q[1] - Y[1]) * ft, bt = (bt = St[0] - B[0]) * bt + (bt = St[1] - B[1]) * bt;
        N = m(N, Math.sqrt(ft / bt)), D = [(Y[0] + Q[0]) / 2, (Y[1] + Q[1]) / 2], L = [(B[0] + St[0]) / 2, (B[1] + St[1]) / 2];
      } else if (g.touch0) D = g.touch0[0], L = g.touch0[1];
      else return;
      g.zoom("touch", e(S(N, D, L), g.extent, a));
    }
  }
  function C(v, ..._) {
    if (this.__zooming) {
      var g = P(this, _).event(v), E = v.changedTouches, M = E.length, k, N;
      for (lr(v), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, p), k = 0; k < M; ++k)
        N = E[k], g.touch0 && g.touch0[2] === N.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === N.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (N = Qt(N, this), Math.hypot(c[0] - N[0], c[1] - N[1]) < w)) {
        var D = at(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : ve(+v), x) : r;
  }, x.filter = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : ve(!!v), x) : t;
  }, x.touchable = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : ve(!!v), x) : i;
  }, x.extent = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : ve([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), x) : n;
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
    return arguments.length ? (y = (v = +v) * v, x) : Math.sqrt(y);
  }, x.tapDistance = function(v) {
    return arguments.length ? (w = +v, x) : w;
  }, x;
}
var xh = /* @__PURE__ */ Ot('<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>'), Eh = /* @__PURE__ */ Ot('<div class="error svelte-gouuy3"><p> </p></div>'), Sh = /* @__PURE__ */ Ot('<div class="interactive-map-container svelte-gouuy3"><!> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>');
function bh(t, n) {
  _o(n, !1);
  let e = /* @__PURE__ */ Ft(), r = [], i = null, o = /* @__PURE__ */ Ft(!0), a = /* @__PURE__ */ Ft(null), s = /* @__PURE__ */ Ft(null), l = null, f = ru(n, "selectedMunicipio", 8, ""), u = !1;
  Uo(() => {
    u || c();
  });
  async function c() {
    if (!u)
      try {
        const A = await fetch("./static/municipios.csv");
        if (!A.ok)
          throw new Error(`Erro ao carregar CSV: ${A.status}`);
        const C = (await A.text()).split(`
`), v = C[0].split(";");
        r = C.slice(1).map((E) => {
          const M = E.split(";"), k = {};
          return v.forEach((N, D) => {
            k[N] = M[D];
          }), k;
        }).filter((E) => E.MUNICIPIO).reduce(
          (E, M) => (E[M.MUNICIPIO] = M, E),
          {}
        ), console.log("CSV carregado com", Object.keys(r).length, "municípios"), console.log("Exemplos de municípios no CSV:", Object.keys(r).slice(0, 5)), console.log("Primeiros 5 municípios do CSV:", Object.keys(r).slice(0, 5).map((E) => ({ nome: E, dados: r[E] })));
        const g = await fetch("./static/PortugalM.geojson");
        if (!g.ok)
          throw new Error(`Erro ao carregar GeoJSON: ${g.status}`);
        i = await g.json(), h(), F(o, !1), u = !0;
      } catch (A) {
        console.error("Erro ao carregar dados:", A), F(a, A.message), F(o, !1);
      }
  }
  function h() {
    if (!i || !R(e))
      return;
    const A = 800, T = 500;
    at(R(e)).selectAll("*").remove();
    const C = at(R(e)).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${A} ${T}`).style("background", "transparent").style("cursor", "grab"), v = wh().scaleExtent([1, 8]).on("zoom", (_) => {
      C.selectAll("path").attr("transform", _.transform);
    });
    C.call(v), l = v;
    try {
      const _ = hh().center([-11, 39.2]).scale(6500).translate([A / 2 - 350, T / 2]), g = th().projection(_), E = at("body").append("div").attr("id", "map-tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px 12px").style("border-radius", "4px").style("font-size", "12px").style("font-family", "'Bai Jamjuree', sans-serif").style("pointer-events", "none").style("z-index", "1000").style("opacity", "0").style("transition", "opacity 0.2s");
      F(s, C.selectAll("path").data(i.features).enter().append("path").attr("d", g).attr("fill", (M) => {
        const k = M.properties.NAME_2, N = r[k];
        return (M.properties.NAME_2 === "Évora" || M.properties.NAME_2 === "Lisboa" || M.properties.NAME_2 === "Porto") && (console.log("Município:", M.properties.NAME_2, "Dados encontrados:", N), N && console.log("RAI:", N.RAI, "PORTAL:", N.PORTAL)), N && N.RAI?.trim().toUpperCase() === "SIM" && N.PORTAL && N.PORTAL.trim() !== "NAO" && N.PORTAL.trim().startsWith("http") ? "#c44c49" : N && N.RAI?.trim().toUpperCase() === "SIM" ? "rgb(191, 170, 234)" : N && N.PORTAL && N.PORTAL.trim() !== "NAO" && N.PORTAL.trim().startsWith("http") ? "#de866b" : N ? "#f8f1e7" : "#E0E0E0";
      }).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("cursor", "pointer").style("opacity", "1").style("transition", "opacity 0.3s").on("mouseover", function(M, k) {
        at(this).attr("stroke", "#000").attr("stroke-width", "1.5").style("filter", "brightness(1.1)");
        const N = k.properties.NAME_2 || k.properties.name || "Desconhecido", D = r[N];
        let L = `<strong>${N}</strong>`;
        if (D) {
          const Y = D.RAI?.trim().toUpperCase() === "SIM" ? "Sim" : "Não";
          L += `<br/>RAI: ${Y}`;
          const B = D.PORTAL?.trim();
          B && B !== "NAO" && B.startsWith("http") ? L += `<br/>Portal: <a href="${B}" target="_blank">${B}</a>` : L += "<br/>Portal: Não", D.DISTRITO && (L += `<br/>Distrito: ${D.DISTRITO}`);
        } else
          L += "<br/><em>Sem dados disponíveis</em>";
        E.style("opacity", "1").html(L).style("left", M.pageX + 10 + "px").style("top", M.pageY - 10 + "px");
      }).on("mousemove", function(M) {
        E.style("left", M.pageX + 10 + "px").style("top", M.pageY - 10 + "px");
      }).on("mouseout", function(M, k) {
        const N = r[k.properties.NAME_2 || k.properties.name];
        at(this).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("filter", "none"), E.style("opacity", "0");
      }).on("click", function(M, k) {
        const N = k.properties.NAME_2 || k.properties.name;
        console.log("Clicou em:", N);
      })), console.log("Mapa criado com sucesso!");
    } catch (_) {
      console.error("Erro ao criar mapa:", _), F(a, _.message);
    }
  }
  function p(A) {
    return A.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function d(A) {
    if (!R(s))
      return;
    if (!A || A.trim() === "") {
      R(s).style("opacity", "1");
      return;
    }
    const T = p(A.toLowerCase().trim());
    R(s).style("opacity", (C) => {
      const v = C.properties.NAME_2 || C.properties.name || "";
      return p(v).includes(T) ? "1" : "0.2";
    });
  }
  function y() {
    l && at(R(e)).select("svg").transition().duration(300).call(l.scaleBy, 1.5);
  }
  function w() {
    l && at(R(e)).select("svg").transition().duration(300).call(l.scaleBy, 1 / 1.5);
  }
  function x() {
    l && at(R(e)).select("svg").transition().duration(300).call(l.transform, hi);
  }
  Rs(() => (Fo(f()), R(s)), () => {
    f() !== void 0 && R(s) && (console.log("selectedMunicipio mudou:", f()), d(f()));
  }), Ps(), Bo();
  var m = Sh(), S = j(m);
  {
    var b = (A) => {
      var T = xh();
      mt(A, T);
    }, I = (A) => {
      var T = Bs(), C = vr(T);
      {
        var v = (_) => {
          var g = Eh(), E = j(g), M = j(E);
          dn(() => _n(M, `Erro ao carregar o mapa: ${R(a) ?? ""}`)), mt(_, g);
        };
        yn(
          C,
          (_) => {
            R(a) && _(v);
          },
          !0
        );
      }
      mt(A, T);
    };
    yn(S, (A) => {
      R(o) ? A(b) : A(I, !1);
    });
  }
  var P = rt(S, 2);
  nu(P, (A) => F(e, A), () => R(e));
  var z = rt(P, 2), O = j(z), $ = rt(O, 2), q = rt($, 2);
  Lt("click", O, y), Lt("click", $, w), Lt("click", q, x), mt(t, m), go();
}
var Mh = /* @__PURE__ */ Ot('<li class="svelte-1kq6r5w"> </li>'), Ah = /* @__PURE__ */ Ot('<ul class="sugestoes svelte-1kq6r5w"></ul>'), Nh = /* @__PURE__ */ Ot('Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque svelte-1kq6r5w"> </span>', 1), kh = /* @__PURE__ */ Ot('Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a target="_blank"> </a>', 1), Th = /* @__PURE__ */ Ot('<a target="_blank"> </a>'), Ih = /* @__PURE__ */ Ot('<div class="result-container svelte-1kq6r5w"><h3 class="svelte-1kq6r5w"> </h3> <table class="result-table svelte-1kq6r5w"><thead><tr class="svelte-1kq6r5w"><th class="svelte-1kq6r5w">RAI</th><th class="svelte-1kq6r5w">Portal</th><th class="svelte-1kq6r5w">Shapefiles</th></tr></thead><tbody><tr class="svelte-1kq6r5w"><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><button class="download-btn svelte-1kq6r5w"><svg class="download-icon svelte-1kq6r5w" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="50" y1="15" x2="50" y2="55"></line><polyline points="35,40 50,55 65,40"></polyline></g><g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"><path d="M20 65 L20 80 L80 80 L80 65"></path></g></svg> <span class="download-text svelte-1kq6r5w">Download <strong>Shapefile</strong> do Município</span></button> <div class="shapefile-info svelte-1kq6r5w">Shapefile disponível, use para contar histórias locais.</div></td></tr></tbody></table> <button class="clear-btn svelte-1kq6r5w">Selecionar outro município</button></div>'), Rh = /* @__PURE__ */ Ot('<div class="dashboard-container svelte-1kq6r5w"><div class="search-section svelte-1kq6r5w"><h2 class="svelte-1kq6r5w">Dados nos municípios</h2> <div class="search-input-container svelte-1kq6r5w"><input type="text" placeholder="Nome do município..." class="search-input svelte-1kq6r5w"/> <button class="search-btn svelte-1kq6r5w">Pesquisar</button></div> <!> <!></div> <div class="map-section svelte-1kq6r5w"><!></div></div>');
function Ph(t, n) {
  _o(n, !1);
  let e = /* @__PURE__ */ Ft(""), r = [], i = /* @__PURE__ */ Ft(null), o = "", a = /* @__PURE__ */ Ft([]), s = /* @__PURE__ */ Ft(""), l = !1;
  Uo(() => {
    l || f();
  });
  async function f() {
    if (!l)
      try {
        const T = await fetch("./static/municipios.csv");
        if (!T.ok) {
          o = "Erro ao carregar dados dos municípios";
          return;
        }
        const v = (await T.text()).split(`
`), _ = v[0].split(";");
        r = v.slice(1).map((g) => {
          const E = g.split(";"), M = {};
          return _.forEach((k, N) => {
            M[k] = E[N];
          }), M;
        }).filter((g) => g.MUNICIPIO), l = !0, console.log("Dados carregados:", r.length);
      } catch (T) {
        console.error("Erro ao carregar dados:", T), o = "Erro ao carregar dados";
      }
  }
  function u(T) {
    F(e, T), F(
      i,
      null
      // Limpa resultado anterior
    ), F(a, []), c(), F(s, T);
  }
  function c() {
    if (R(e).trim()) {
      const T = p(R(e));
      F(i, r.find((C) => p(C.MUNICIPIO || "") === T)), R(i) ? F(s, R(i).MUNICIPIO) : F(
        s,
        T
        // Mantém o destaque parcial
      ), F(a, []);
    } else
      F(s, ""), F(i, null), F(a, []);
  }
  function h(T) {
    T.key === "Enter" && c();
  }
  function p(T) {
    return T.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function d(T) {
    return `${T}.zip`;
  }
  function y(T) {
    const C = d(T), v = `./static/shapefiles/${C}`, _ = document.createElement("a");
    _.href = v, _.download = C, _.target = "_blank", fetch(v, { method: "HEAD" }).then((g) => {
      g.ok ? _.click() : alert("Shapefile não disponível para este município.");
    }).catch(() => {
      alert("Shapefile não disponível para este município.");
    });
  }
  function w() {
    if (R(i) && F(i, null), R(e).length > 0 && r.length > 0) {
      const T = p(R(e));
      F(a, r.filter((C) => {
        const v = C.MUNICIPIO || "";
        return p(v).includes(T);
      }).sort((C, v) => {
        const _ = p(C.MUNICIPIO || "").startsWith(T), g = p(v.MUNICIPIO || "").startsWith(T);
        return _ && !g ? -1 : !_ && g ? 1 : (C.MUNICIPIO || "").localeCompare(v.MUNICIPIO || "");
      }).slice(0, 10)), F(
        s,
        T
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
  var x = Rh(), m = j(x), S = rt(j(m), 2), b = j(S), I = rt(b, 2), P = rt(S, 2);
  {
    var z = (T) => {
      var C = Ah();
      Gs(C, 5, () => R(a), Ys, (v, _) => {
        var g = Mh(), E = j(g);
        dn(() => _n(E, (R(_), it(() => R(_).MUNICIPIO)))), Lt("click", g, () => u(R(_).MUNICIPIO)), mt(v, g);
      }), mt(T, C);
    };
    yn(P, (T) => {
      R(a), it(() => R(a).length > 0) && T(z);
    });
  }
  var O = rt(P, 2);
  {
    var $ = (T) => {
      var C = Ih(), v = j(C), _ = j(v), g = rt(v, 2), E = rt(j(g)), M = j(E), k = j(M), N = j(k);
      {
        var D = (ct) => {
          var Mt = Nh(), vn = rt(vr(Mt)), Qe = j(vn);
          dn(() => _n(Qe, (R(i), it(() => R(i).RAI_Email)))), mt(ct, Mt);
        }, L = (ct) => {
          var Mt = kh(), vn = rt(vr(Mt)), Qe = j(vn);
          dn(() => {
            xi(vn, "href", (R(i), it(() => R(i).Website))), _n(Qe, (R(i), it(() => R(i).Website)));
          }), mt(ct, Mt);
        };
        yn(N, (ct) => {
          R(i), it(() => R(i).RAI?.toLowerCase() === "sim") ? ct(D) : ct(L, !1);
        });
      }
      var Y = rt(k), B = j(Y);
      {
        var Q = (ct) => {
          var Mt = Th(), vn = j(Mt);
          dn(() => {
            xi(Mt, "href", (R(i), it(() => R(i).PORTAL))), _n(vn, (R(i), it(() => R(i).PORTAL)));
          }), mt(ct, Mt);
        }, St = (ct) => {
          var Mt = Vs("Não há registos de portal de dados abertos no município indicado.");
          mt(ct, Mt);
        };
        yn(B, (ct) => {
          R(i), it(() => R(i).PORTAL && R(i).PORTAL.toLowerCase() !== "nao" && R(i).PORTAL.toLowerCase() !== "não") ? ct(Q) : ct(St, !1);
        });
      }
      var ft = rt(Y), bt = j(ft), Cn = rt(g, 2);
      dn(() => _n(_, (R(i), it(() => R(i).MUNICIPIO)))), Lt("click", bt, () => y(R(i).MUNICIPIO)), Lt("click", Cn, () => {
        F(i, null), F(e, ""), F(s, "");
      }), mt(T, C);
    };
    yn(O, (T) => {
      R(i) && T($);
    });
  }
  var q = rt(m, 2), A = j(q);
  bh(A, {
    get selectedMunicipio() {
      return R(s);
    }
  }), tu(b, () => R(e), (T) => F(e, T)), Lt("input", b, w), Lt("keydown", b, h), Lt("click", I, c), mt(t, x), go();
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
