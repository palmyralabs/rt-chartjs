import { useState as r, useEffect as o, useLayoutEffect as u } from "react";
const d = (e) => {
  const s = () => ({
    width: e.current ? e.current.offsetWidth : 0,
    height: e.current ? e.current.offsetHeight : 0
  }), [t, i] = r(s), n = () => {
    i(s());
  };
  return o(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), []), u(() => {
    n();
  }, []), t;
};
export {
  d as useDimensions
};
