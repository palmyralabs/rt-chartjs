import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { Component as t } from "react";
class c extends t {
  state = {
    hasError: !1
  };
  static getDerivedStateFromError(r) {
    return { hasError: !0 };
  }
  componentDidCatch(r, o) {
    console.error("Uncaught error:", r, o);
  }
  render() {
    if (this.state.hasError) {
      console.log(this.props);
      const r = this.props.errorMessage || "An error Occured";
      return /* @__PURE__ */ s("div", { children: [
        r,
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("br", {})
      ] });
    }
    return this.props.children;
  }
}
export {
  c as default
};
