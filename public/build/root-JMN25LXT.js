import {
  Button_default
} from "/build/_shared/chunk-ONHQF53P.js";
import "/build/_shared/chunk-HDFV5ATS.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useNavigate
} from "/build/_shared/chunk-57WMN2SD.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BKLLZ3ZO.js";

// browser-route-module:/Users/ebykovskikh/Desktop/web/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react = __toESM(require_react());

// app/styles/global.css
var global_default = "/build/_assets/global-FGCMKSZL.css";

// app/root.tsx
var meta = () => ({ title: "RanaMC" });
var App = () => /* @__PURE__ */ import_react.default.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ import_react.default.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ import_react.default.createElement(Meta, null), /* @__PURE__ */ import_react.default.createElement(Links, null)), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement(import_react.default.StrictMode, null, /* @__PURE__ */ import_react.default.createElement(Outlet, null)), /* @__PURE__ */ import_react.default.createElement(ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(Scripts, null), /* @__PURE__ */ import_react.default.createElement(LiveReload, null)));
var CatchBoundary = () => {
  const navigate = useNavigate();
  const caught = useCatch();
  const handleGoBack = () => {
    navigate("../");
  };
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("title", null, "Oops!"), /* @__PURE__ */ import_react.default.createElement(Meta, null), /* @__PURE__ */ import_react.default.createElement(Links, null)), /* @__PURE__ */ import_react.default.createElement("body", {
    className: "not-found"
  }, /* @__PURE__ */ import_react.default.createElement("h1", null, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react.default.createElement(Button_default, {
    appearance: "primary",
    onClick: handleGoBack
  }, "Go Home"), /* @__PURE__ */ import_react.default.createElement(Scripts, null)));
};
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "use-credentials"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
  }
];
var root_default = App;
export {
  CatchBoundary,
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-JMN25LXT.js.map
