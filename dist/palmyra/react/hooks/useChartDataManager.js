import { s as f } from "../../../chunks/rainbow.js";
import d from "axios";
import { useEffect as v } from "react";
const g = function(e, t) {
  return t ? typeof e == "string" && t instanceof Array ? e.replace(/({\d})/g, function(r) {
    let a = r.replace(/{/, "").replace(/}/, "");
    return t[a];
  }) : typeof e == "string" && t instanceof Object ? Object.keys(t).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let a = r.replace(/{/, "").replace(/}/, "");
    return t[a] ? t[a] : r;
  }) : e : e;
}, m = function(e) {
  return typeof e == "string" && (e.search(/({([^}]+)})/g) > 0 || e.search(/({\d})/g) > 0);
};
var U = Object.defineProperty, P = (e, t, r) => t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, u = (e, t, r) => P(e, typeof t != "symbol" ? t + "" : t, r);
class c {
  constructor(t, r, a) {
    u(this, "options"), u(this, "target"), u(this, "endPoint"), u(this, "axiosInstance"), this.axiosInstance = d.create({
      timeout: 5e3
    });
    const s = a || (() => (n) => {
      const i = n.request.responseURL || n.config.url;
      console.log(n.response.status + ":" + n.code + "-requestUrl:" + i), console.log(n.message + " -- response data:'" + n.response.data + "'");
    });
    d.interceptors.response.use(void 0, function(n) {
      return n.handleGlobally = s(n), Promise.reject(n);
    }), this.options = t, this.target = t.target, this.endPoint = r;
  }
  queryUrl() {
    return typeof this.endPoint == "string" ? this.endPoint : this.endPoint.query;
  }
  getUrl() {
    return typeof this.endPoint == "string" ? this.endPoint : this.endPoint.get;
  }
  postUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.post ? t.post : t.get;
  }
  putUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.put;
  }
  deleteUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.delete ? t.delete : t.put;
  }
  getClient() {
    return d;
  }
  getEndPoint() {
    return this.endPoint;
  }
  getOptions() {
    return this.options;
  }
  getTarget() {
    return this.target;
  }
  formatUrl(t, r) {
    return r ? g(g(t, r.options), r.endPointVars) : t;
  }
  isUrlValid(t) {
    return m(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, r) {
    return r != null && r.errorHandler && r.errorHandler(t) || t.handleGlobally(t), Promise.reject(t);
  }
  convertQueryParams(t, r = 15) {
    const a = (t == null ? void 0 : t.sortOrder) || {}, s = Object.keys(a).map((l) => (a[l] === "asc" ? "+" : "-") + l), n = !!t.total, i = t.filter || {}, h = t.offset || 0, o = t.limit || r;
    return { ...i, _total: n, _orderBy: s.length ? s.join(",") : [], _offset: h, _limit: o };
  }
}
var b = Object.defineProperty, E = (e, t, r) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, q = (e, t, r) => E(e, t + "", r);
class w extends c {
  constructor(t, r, a, s) {
    super(t, r, a), q(this, "idProperty"), this.idProperty = s || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t) };
    return this.getClient().get(a, s).then((n) => {
      var i;
      return (i = n.data) == null ? void 0 : i.result;
    }).catch((n) => this.handleError(n, t));
  }
}
var C = Object.defineProperty, j = (e, t, r) => t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, O = (e, t, r) => j(e, t + "", r);
class p extends c {
  constructor(t, r, a, s) {
    super(t, r, a), O(this, "idProperty"), this.idProperty = s || "id";
  }
  getEndPoint() {
    return this.endPoint;
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t) };
    return this.isUrlValid(a) || this.getClient().get(a, s).then((n) => n.data).catch((n) => this.handleError(n, t));
  }
  export(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = this.convertQueryParams(t);
    s._format = t.format;
    const n = new URLSearchParams(s).toString();
    window.open(a + "?" + n, "_blank");
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    return this.isUrlValid(a) || this.getClient().get(a, {
      headers: {
        action: "schema"
      }
    }).then((s) => s.data).catch((s) => this.handleError(s, t));
  }
  get(t, r) {
    var a = this.target + this.queryUrl(), s = this.formatUrl(a, t);
    return this.isUrlValid(s) || this.getClient().get(s).then((n) => {
      var i;
      return (i = n.data) == null ? void 0 : i.result;
    }).catch((n) => this.handleError(n, t));
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
let $ = class extends p {
  constructor(t, r, a, s) {
    super(t, r, a, s);
  }
  save(t, r) {
    var a = this.target + this.postUrl(), s = this.formatUrl(a, r);
    return this.isUrlValid(s) || this.getClient().post(s, t, { headers: { action: "save" } }).then((n) => {
      var i;
      return (i = n.data) == null ? void 0 : i.result;
    }).catch((n) => this.handleError(n, r));
  }
  post(t, r) {
    var a = this.target + this.postUrl(), s = this.formatUrl(a, r);
    return this.isUrlValid(s) || this.getClient().post(s, t).then((n) => {
      var i;
      return (i = n.data) == null ? void 0 : i.result;
    }).catch((n) => this.handleError(n, r));
  }
  put(t, r) {
    var a = this.target + this.putUrl(), s = this.formatUrl(a, r);
    return this.isUrlValid(s) || this.getClient().put(s, t).then((n) => {
      var i;
      return (i = n.data) == null ? void 0 : i.result;
    }).catch((n) => this.handleError(n, r));
  }
  remove(t, r) {
    var a = this.target + this.deleteUrl(), s = this.formatUrl(a, t);
    return this.isUrlValid(s) || this.getClient().delete(s, { data: {} }).then((n) => {
      var i;
      return (i = n.data) == null ? void 0 : i.result;
    }).catch((n) => this.handleError(n, r));
  }
};
var F = Object.defineProperty, H = (e, t, r) => t in e ? F(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, V = (e, t, r) => H(e, t + "", r);
class x extends c {
  constructor(t, r, a, s) {
    super(t, r, a), V(this, "idProperty"), this.idProperty = s || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t) };
    return this.isUrlValid(a) || this.getClient().get(a, s).then((n) => n.data).catch((n) => this.handleError(n, t));
  }
}
var S = Object.defineProperty, Q = (e, t, r) => t in e ? S(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, D = (e, t, r) => Q(e, t + "", r);
class _ extends c {
  constructor(t, r, a, s) {
    super(t, r, a), D(this, "idProperty"), this.idProperty = s || "id";
  }
  getChildren(t) {
    const r = { filter: { parent: t.parent } };
    return this.query(r);
  }
  getRoot() {
    const t = {};
    return this.query(t);
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t), headers: { action: "nativeQuery" } };
    return this.getClient().get(a, s).then((n) => n.data).catch((n) => {
      this.handleError(n, t);
    });
  }
}
var k = Object.defineProperty, I = (e, t, r) => t in e ? k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, y = (e, t, r) => I(e, typeof t != "symbol" ? t + "" : t, r);
class L {
  constructor(t) {
    y(this, "baseUrl", "/palmyra"), y(this, "errorHandlerFactory"), this.baseUrl = t.baseUrl || "/palmyra", this.errorHandlerFactory = t.errorHandlerFactory;
  }
  getGridStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new p(s, r, this.errorHandlerFactory, a);
  }
  getFormStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new $(s, r, this.errorHandlerFactory, a);
  }
  getChartStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new w(s, r, this.errorHandlerFactory, a);
  }
  getLookupStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new x(s, r, this.errorHandlerFactory, a);
  }
  getTreeStore(t, r) {
    var a = { target: this.baseUrl, ...t };
    return new _(a, r, this.errorHandlerFactory);
  }
}
const A = (e) => {
  const t = new L({ baseUrl: "/api/palmyra" });
  var r = {};
  f(r, e.storeOptions);
  const a = t.getChartStore(r, e.storeOptions.endPoint);
  v(() => {
    h(e.filter);
  }, [e.filter]);
  const s = (o) => e.transformData ? e.transformData(o) : o, n = (o) => {
    e.onData(s(o));
  }, i = (o) => {
    if (e.onError) {
      e.onError(o);
      return;
    }
    e.onData(null);
  }, h = (o) => {
    a.query({ filter: o, limit: 2e3 }).then((l) => n(l)).catch((l) => i(l));
  };
  return { fetchData: h, transform: s };
};
export {
  A as useChartDataManager
};
