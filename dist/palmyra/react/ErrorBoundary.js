var a = Object.defineProperty;
var i = (o, e, r) => e in o ? a(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var s = (o, e, r) => i(o, typeof e != "symbol" ? e + "" : e, r);
import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { Component as h } from "react";
class m extends h {
  constructor() {
    super(...arguments);
    s(this, "state", {
      hasError: !1
    });
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0 };
  }
  componentDidCatch(r, n) {
    console.error("Uncaught error:", r, n);
  }
  render() {
    if (this.state.hasError) {
      console.log(this.props);
      const r = this.props.errorMessage || "An error Occured";
      return /* @__PURE__ */ c("div", { children: [
        r,
        /* @__PURE__ */ t("br", {}),
        /* @__PURE__ */ t("br", {})
      ] });
    }
    return this.props.children;
  }
}
export {
  m as default
};
