import { u as m } from "../../../chunks/rainbow.js";
import f from "axios";
import { useEffect as y } from "react";
const h = (a) => a, d = function(a, t) {
  return t ? typeof a == "string" && t instanceof Array ? a.replace(/({\d})/g, function(r) {
    let e = r.replace(/{/, "").replace(/}/, "");
    return t[e];
  }) : typeof a == "string" && t instanceof Object ? Object.keys(t).length === 0 ? a : a.replace(/({([^}]+)})/g, function(r) {
    let e = r.replace(/{/, "").replace(/}/, "");
    return t[e] ? t[e] : r;
  }) : a : a;
}, U = function(a) {
  return typeof a == "string" && (a.search(/({([^}]+)})/g) > 0 || a.search(/({\d})/g) > 0);
}, P = () => f.create({
  timeout: 5e3
});
class u {
  options;
  target;
  endPoint;
  axiosInstance;
  constructor(t, r, e, s) {
    const o = P();
    e.axiosCustomizer && e.axiosCustomizer(o);
    const n = s || (() => (i) => {
      const l = i.request.responseURL || i.config.url;
      console.log(i.response.status + ":" + i.code + "-requestUrl:" + l), console.log(i.message + " -- response data:'" + i.response.data + "'");
    });
    o.interceptors.response.use(void 0, function(i) {
      return i.handleGlobally = n(i), Promise.reject(i);
    }), this.axiosInstance = o, this.options = e, this.target = t, this.endPoint = r;
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
    return this.axiosInstance;
  }
  getEndPoint() {
    return this.endPoint;
  }
  getOptions() {
    return this.options?.endPointOptions || {};
  }
  getTarget() {
    return this.target;
  }
  formatUrl(t, r) {
    return r ? d(d(t, r.options), r.endPointVars) : t;
  }
  isUrlValid(t) {
    return U(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, r) {
    return r?.errorHandler && r.errorHandler(t) || t.handleGlobally && t.handleGlobally(t), Promise.reject(t);
  }
  convertQueryParams(t, r = 15) {
    const e = t?.sortOrder || {}, s = Object.keys(e).map((c) => (e[c] === "asc" ? "+" : "-") + c), o = !!t.total, n = v(t.filter), i = t.offset || 0, l = t.limit || r;
    return { ...n, _total: o, _orderBy: s.length ? s.join(",") : [], _offset: i, _limit: l };
  }
}
function v(a) {
  const t = {};
  return a && Object.entries(a).map(([r, e]) => {
    g(r, t, e);
  }), t;
}
function g(a, t, r) {
  typeof r == "object" ? Object.entries(r).map(([e, s]) => {
    g(a + "." + e, t, s);
  }) : r && r != "" && (t[a] = r);
}
class E extends u {
  idProperty;
  constructor(t, r, e, s, o) {
    super(t, r, e, s), this.idProperty = o || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl();
    const e = t?.transformResult || h;
    var s = this.formatUrl(r, t);
    const o = { params: this.convertQueryParams(t) };
    return this.getClient().get(s, o).then((n) => e(n.data?.result)).catch((n) => this.handleError(n, t));
  }
}
class p extends u {
  idProperty;
  constructor(t, r, e, s, o) {
    super(t, r, e, s), this.idProperty = o || "id";
  }
  getEndPoint() {
    return this.endPoint;
  }
  query(t) {
    var r = this.target + this.queryUrl();
    const e = t?.transformResult || h;
    var s = this.formatUrl(r, t);
    const o = { params: this.convertQueryParams(t) };
    return this.isUrlValid(s) || this.getClient().get(s, o).then((n) => e(n.data)).catch((n) => this.handleError(n, t));
  }
  export(t) {
    var r = this.target + this.queryUrl(), e = this.formatUrl(r, t);
    const s = this.convertQueryParams(t);
    s._format = t.format;
    const o = new URLSearchParams(s).toString();
    window.open(e + "?" + o, "_blank");
  }
  queryLayout(t) {
    const r = t?.transformResult || h;
    var e = this.target + this.queryUrl(), s = this.formatUrl(e, t);
    return this.isUrlValid(s) || this.getClient().get(s, {
      headers: {
        action: "schema"
      }
    }).then((o) => r(o.data)).catch((o) => this.handleError(o, t));
  }
  get(t, r) {
    var e = this.target + this.getUrl();
    const s = t?.transformResult || h;
    var o = this.formatUrl(e, t);
    return this.isUrlValid(o) || this.getClient().get(o).then((n) => s(n.data?.result)).catch((n) => this.handleError(n, t));
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
class b extends p {
  constructor(t, r, e, s, o) {
    super(t, r, e, s);
  }
  save(t, r) {
    var e = this.target + this.postUrl(), s = this.formatUrl(e, r);
    const o = r?.transformResult || h;
    return this.isUrlValid(s) || this.getClient().post(s, t, { headers: { action: "save" } }).then((n) => o(n.data?.result)).catch((n) => this.handleError(n, r));
  }
  post(t, r) {
    var e = this.target + this.postUrl();
    const s = r?.transformResult || h;
    var o = this.formatUrl(e, r);
    return this.isUrlValid(o) || this.getClient().post(o, t).then((n) => s(n.data?.result)).catch((n) => this.handleError(n, r));
  }
  put(t, r) {
    var e = this.target + this.putUrl();
    const s = r?.transformResult || h;
    var o = this.formatUrl(e, r);
    return this.isUrlValid(o) || this.getClient().put(o, t).then((n) => s(n.data?.result)).catch((n) => this.handleError(n, r));
  }
  remove(t, r) {
    var e = this.target + this.deleteUrl();
    const s = r?.transformResult || h;
    var o = this.formatUrl(e, t);
    return this.isUrlValid(o) || this.getClient().delete(o, { data: {} }).then((n) => s(n.data?.result)).catch((n) => this.handleError(n, r));
  }
}
class q extends u {
  idProperty;
  constructor(t, r, e, s, o) {
    super(t, r, e, s), this.idProperty = o || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl();
    const e = t?.transformResult || h;
    var s = this.formatUrl(r, t);
    const o = { params: this.convertQueryParams(t) };
    return this.isUrlValid(s) || this.getClient().get(s, o).then((n) => e(n.data)).catch((n) => this.handleError(n, t));
  }
}
class O extends u {
  idProperty;
  constructor(t, r, e, s, o) {
    super(t, r, e, s), this.idProperty = o || "id";
  }
  getChildren(t, r) {
    const e = { ...r || {}, filter: { parent: t.parent } };
    return this.query(e);
  }
  getRoot(t) {
    return this.query(t || {});
  }
  query(t) {
    var r = this.target + this.queryUrl();
    const e = t?.transformResult || h;
    var s = this.formatUrl(r, t);
    const o = { params: this.convertQueryParams(t), headers: { action: "nativeQuery" } };
    return this.getClient().get(s, o).then((n) => e(n.data)).catch((n) => this.handleError(n, t));
  }
}
class C {
  baseUrl = "/palmyra";
  errorHandlerFactory;
  storeOptions = {};
  constructor(t) {
    this.baseUrl = t.baseUrl || "/palmyra", this.errorHandlerFactory = t.errorHandlerFactory, t.storeOptions && (this.storeOptions = t.storeOptions);
  }
  getGridStore(t, r, e) {
    const s = t || {}, o = { ...this.storeOptions, ...s };
    return new p(this.baseUrl, r, o, this.errorHandlerFactory, e);
  }
  getFormStore(t, r, e) {
    const s = t || {}, o = { ...this.storeOptions, ...s };
    return new b(this.baseUrl, r, o, this.errorHandlerFactory, e);
  }
  getChartStore(t, r, e) {
    const s = t || {}, o = { ...this.storeOptions, ...s };
    return new E(this.baseUrl, r, o, this.errorHandlerFactory, e);
  }
  getLookupStore(t, r, e) {
    const s = t || {}, o = { ...this.storeOptions, ...s };
    return new q(this.baseUrl, r, o, this.errorHandlerFactory, e);
  }
  getTreeStore(t, r) {
    const e = t || {}, s = { ...this.storeOptions, ...e };
    return new O(this.baseUrl, r, s, this.errorHandlerFactory);
  }
}
const w = (a) => {
  const t = new C({ baseUrl: "/api/palmyra" });
  var r = {};
  m(r, a.storeOptions);
  const e = t.getChartStore(r, a.storeOptions.endPoint);
  y(() => {
    i(a.filter);
  }, [a.filter]);
  const s = (l) => a.transformData ? a.transformData(l) : l, o = (l) => {
    a.onData(s(l));
  }, n = (l) => {
    if (a.onError) {
      a.onError(l);
      return;
    }
    a.onData(null);
  }, i = (l) => {
    e.query({ filter: l, limit: 2e3 }).then((c) => o(c)).catch((c) => n(c));
  };
  return { fetchData: i, transform: s };
};
export {
  w as useChartDataManager
};
