var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/ebykovskikh/Desktop/web/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  meta: () => meta
});
var import_react2 = __toESM(require("react"));
var import_react3 = require("@remix-run/react");
var import_rsuite = require("rsuite");

// app/styles/global.css
var global_default = "/build/_assets/global-FGCMKSZL.css";

// route:/Users/ebykovskikh/Desktop/web/app/root.tsx
var meta = () => ({ title: "RanaMC" });
var App = () => /* @__PURE__ */ import_react2.default.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ import_react2.default.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ import_react2.default.createElement(import_react3.Meta, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Links, null)), /* @__PURE__ */ import_react2.default.createElement("body", null, /* @__PURE__ */ import_react2.default.createElement(import_react2.default.StrictMode, null, /* @__PURE__ */ import_react2.default.createElement(import_react3.Outlet, null)), /* @__PURE__ */ import_react2.default.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Scripts, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.LiveReload, null)));
var CatchBoundary = () => {
  const navigate = (0, import_react3.useNavigate)();
  const caught = (0, import_react3.useCatch)();
  const handleGoBack = () => {
    navigate("../");
  };
  return /* @__PURE__ */ import_react2.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement("title", null, "Oops!"), /* @__PURE__ */ import_react2.default.createElement(import_react3.Meta, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Links, null)), /* @__PURE__ */ import_react2.default.createElement("body", {
    className: "not-found"
  }, /* @__PURE__ */ import_react2.default.createElement("h1", null, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react2.default.createElement(import_rsuite.Button, {
    appearance: "primary",
    onClick: handleGoBack
  }, "Go Home"), /* @__PURE__ */ import_react2.default.createElement(import_react3.Scripts, null)));
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

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/api/fabricInstallers.ts
var fabricInstallers_exports = {};
__export(fabricInstallers_exports, {
  action: () => action,
  loader: () => loader
});
var import_axios = __toESM(require("axios"));
var import_server_runtime = require("@remix-run/server-runtime");
var loader = () => {
  return (0, import_server_runtime.redirect)("/");
};
var action = async () => {
  try {
    const response = await import_axios.default.get("http://localhost:3001/api/fabric-installers");
    return { success: true, data: response.data };
  } catch (err) {
    return { success: false };
  }
};

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/api/fabricLoaders.ts
var fabricLoaders_exports = {};
__export(fabricLoaders_exports, {
  action: () => action2,
  loader: () => loader2
});
var import_axios2 = __toESM(require("axios"));
var import_server_runtime2 = require("@remix-run/server-runtime");
var loader2 = () => {
  return (0, import_server_runtime2.redirect)("/");
};
var action2 = async () => {
  try {
    const response = await import_axios2.default.get("http://localhost:3001/api/fabric-loaders");
    return { success: true, data: response.data };
  } catch (err) {
    return { success: false };
  }
};

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/api/createServer.ts
var createServer_exports = {};
__export(createServer_exports, {
  action: () => action3,
  loader: () => loader3
});
var import_axios3 = __toESM(require("axios"));
var import_server_runtime3 = require("@remix-run/server-runtime");
var loader3 = () => {
  return (0, import_server_runtime3.redirect)("/");
};
var action3 = async ({ request }) => {
  const body = await request.formData();
  const data = Object.fromEntries(body);
  await import_axios3.default.post("http://localhost:3001/api/servers", data);
  return (0, import_server_runtime3.redirect)(`/servers/${data.id}`);
};

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/api/gameVersions.ts
var gameVersions_exports = {};
__export(gameVersions_exports, {
  action: () => action4,
  loader: () => loader4
});
var import_axios4 = __toESM(require("axios"));
var import_server_runtime4 = require("@remix-run/server-runtime");

// app/constants.ts
var MOBILE_QUREY = "(max-width: 641px)";
var RESTRICTED_TYPES = {
  Java: 2,
  Fabric: 73247,
  Forge: 3,
  Addons: 615,
  Bukkit: 1,
  Modloader: 68441,
  "Minecraft Beta": 17
};
var RESTRICTED_TYPE_IDS = Object.values(RESTRICTED_TYPES);
var RESTRICTED_TYPE_NAMES = Object.keys(RESTRICTED_TYPES);

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/api/gameVersions.ts
var loader4 = () => {
  return (0, import_server_runtime4.redirect)("/");
};
var filterGameVersions = (gameVersions) => {
  return gameVersions.filter((el) => !RESTRICTED_TYPE_IDS.includes(el.type));
};
var fetchGameVersions = async () => {
  const response = await import_axios4.default.get("http://localhost:3001/api/versions");
  return filterGameVersions(response.data);
};
var action4 = async () => {
  return await fetchGameVersions();
};

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/api/forgeCores.ts
var forgeCores_exports = {};
__export(forgeCores_exports, {
  action: () => action5,
  loader: () => loader5
});
var import_axios5 = __toESM(require("axios"));
var import_server_runtime5 = require("@remix-run/server-runtime");
var loader5 = () => {
  return (0, import_server_runtime5.redirect)("/");
};
var action5 = async ({ request }) => {
  const body = await request.formData();
  const data = Object.fromEntries(body);
  const { version } = data;
  try {
    const response = await import_axios5.default.get("http://localhost:3001/api/forge-cores", {
      params: { version }
    });
    return { success: true, data: response.data };
  } catch (err) {
    return { success: false };
  }
};

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/$id/api/remove.ts
var remove_exports = {};
__export(remove_exports, {
  action: () => action6,
  loader: () => loader6
});
var import_axios6 = __toESM(require("axios"));
var import_server_runtime6 = require("@remix-run/server-runtime");
var loader6 = () => {
  return (0, import_server_runtime6.redirect)("/");
};
var action6 = async ({ params }) => {
  const { id } = params;
  await import_axios6.default.delete(`http://localhost:3001/api/servers/${id}`);
  return (0, import_server_runtime6.redirect)(`/servers`);
};

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/index.tsx
var create_exports = {};
__export(create_exports, {
  default: () => create_default,
  links: () => links14,
  loader: () => loader7,
  meta: () => meta2
});
var import_axios7 = __toESM(require("axios"));
var import_react19 = require("react");
var import_react20 = require("@remix-run/react");
var import_rsuite11 = require("rsuite");

// app/components/CreateServerForm/index.tsx
var import_react4 = __toESM(require("react"));
var import_rsuite2 = require("rsuite");
var import_icons = require("@rsuite/icons");
var INITIAL_FORM = {
  id: "",
  name: ""
};
var CreateServerForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = (0, import_react4.useState)(INITIAL_FORM);
  const handleSubmit = () => {
    onSubmit(formValue);
  };
  const handleChange = (formValue2) => {
    setFormValue(formValue2);
  };
  return /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form, {
    layout: "inline",
    formValue,
    onChange: handleChange,
    className: "createServerForm",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.Group, {
    controlId: "id"
  }, /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.ControlLabel, null, /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Stack, {
    spacing: 8
  }, /* @__PURE__ */ import_react4.default.createElement(import_icons.Gear, null), /* @__PURE__ */ import_react4.default.createElement("span", null, "Server Id"))), /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.Control, {
    name: "name",
    style: { maxWidth: 196 }
  })), /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.Group, {
    controlId: "name"
  }, /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.ControlLabel, null, /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Stack, {
    spacing: 8
  }, /* @__PURE__ */ import_react4.default.createElement(import_icons.Gear, null), /* @__PURE__ */ import_react4.default.createElement("span", null, "Server Name"))), /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.Control, {
    name: "id",
    autoComplete: "off",
    style: { maxWidth: 196 }
  })), /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Form.Group, null, /* @__PURE__ */ import_react4.default.createElement(import_rsuite2.Button, {
    type: "submit",
    appearance: "primary"
  }, "Create Server")));
};
var CreateServerForm_default = CreateServerForm;

// app/components/FloatBottom/index.tsx
var import_react5 = __toESM(require("react"));

// app/components/FloatBottom/index.css
var FloatBottom_default = "/build/_assets/index-PIUJ6HFC.css";

// app/components/FloatBottom/index.tsx
var FloatBottom = ({ children }) => /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "floatBottom"
}, children);
var links2 = () => [{ rel: "stylesheet", href: FloatBottom_default }];
var FloatBottom_default2 = FloatBottom;

// app/components/GameVersionSelect/index.tsx
var import_rsuite3 = require("rsuite");

// app/components/SelectIcon/index.tsx
var import_react7 = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));

// app/components/Icon/index.tsx
var import_react6 = __toESM(require("react"));
var Icon = ({ name, height = 32, width = 32 }) => /* @__PURE__ */ import_react6.default.createElement("img", {
  src: `/icons/${name}.svg`,
  height,
  width,
  alt: name
});
var Icon_default = Icon;

// app/components/SelectIcon/index.css
var SelectIcon_default = "/build/_assets/index-V6URVYH6.css";

// app/components/SelectIcon/index.tsx
var ICON_COLORS = {
  minecraft: "#F5F5F5",
  forge: "#202C44",
  fabric: "#BADCBA"
};
var SelectIcon = ({ name, size }) => /* @__PURE__ */ import_react7.default.createElement("div", {
  className: (0, import_classnames.default)("selectIcon", `selectIcon_size-${size}`),
  style: { background: ICON_COLORS[name] || "transparent" }
}, /* @__PURE__ */ import_react7.default.createElement(Icon_default, {
  name
}));
var links3 = () => [{ rel: "stylesheet", href: SelectIcon_default }];
var SelectIcon_default2 = SelectIcon;

// app/components/GameVersionSelect/index.css
var GameVersionSelect_default = "/build/_assets/index-EQ7Q4IEC.css";

// app/components/GameVersionSelect/index.tsx
var filterVersions = (versions) => versions.filter((version) => !version.includes("Snapshot"));
var GameVersionSelect = ({ defaultValue, gameVersion, onChange }) => {
  const handleChange = (value) => {
    if (onChange)
      onChange(value);
  };
  return /* @__PURE__ */ React.createElement(import_rsuite3.RadioGroup, {
    defaultValue,
    className: "gameVersionSelect",
    inline: true,
    name: "gameVersionSelect",
    onChange: handleChange
  }, filterVersions(gameVersion.versions).map((version) => /* @__PURE__ */ React.createElement(import_rsuite3.Radio, {
    key: version,
    value: version
  }, /* @__PURE__ */ React.createElement(import_rsuite3.Stack, {
    direction: "column",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), version))));
};
var links4 = () => [{ rel: "stylesheet", href: GameVersionSelect_default }, ...links3()];
var GameVersionSelect_default2 = GameVersionSelect;

// app/components/Layout/index.tsx
var import_react13 = __toESM(require("react"));
var import_rsuite6 = require("rsuite");
var import_Page = __toESM(require("@rsuite/icons/Page"));

// app/components/Sidebar/index.tsx
var import_classnames3 = __toESM(require("classnames"));
var import_rsuite4 = require("rsuite");
var import_icons2 = require("@rsuite/icons");
var import_react11 = require("@remix-run/react");

// app/components/Version/index.tsx
var import_classnames2 = __toESM(require("classnames"));

// app/hooks/useMediaQuery.ts
var import_react8 = require("react");
function useMediaQuery(query) {
  const [matches, setMatches] = (0, import_react8.useState)(false);
  (0, import_react8.useEffect)(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

// app/components/Version/index.css
var Version_default = "/build/_assets/index-673NLF26.css";

// app/components/Version/index.tsx
var Version = () => {
  const isMobile = useMediaQuery(MOBILE_QUREY);
  const prefix = "Rana MC: ";
  const version = "alpha 0.1.0";
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames2.default)("version", { version_mobile: isMobile })
  }, isMobile ? version : `${prefix}${version}`);
};
var links5 = () => [{ rel: "stylesheet", href: Version_default }];
var Version_default2 = Version;

// app/components/Logo/index.tsx
var import_react9 = __toESM(require("react"));

// app/components/Logo/index.css
var Logo_default = "/build/_assets/index-YBJ3DXBG.css";

// app/components/Logo/index.tsx
var Logo = ({ onClick }) => /* @__PURE__ */ import_react9.default.createElement("div", {
  role: "presentation",
  className: "logo",
  onClick
});
var links6 = () => [
  {
    rel: "preload",
    href: "/icons/logo.svg",
    as: "image",
    type: "image/svg+xml"
  },
  { rel: "stylesheet", href: Logo_default }
];
var Logo_default2 = Logo;

// app/components/Sidebar/index.css
var Sidebar_default = "/build/_assets/index-6JMSSL74.css";

// app/components/GithubRepo/index.tsx
var import_react10 = __toESM(require("react"));

// app/components/GithubRepo/index.css
var GithubRepo_default = "/build/_assets/index-5PVJQJQZ.css";

// app/components/GithubRepo/index.tsx
var GithubRepo = () => /* @__PURE__ */ import_react10.default.createElement("a", {
  className: "githubRepo",
  target: "_blank",
  href: "https://github.com/rana-mc",
  rel: "noreferrer"
});
var links7 = () => [
  {
    rel: "preload",
    href: "/icons/github.svg",
    as: "image",
    type: "image/svg+xml"
  },
  { rel: "stylesheet", href: GithubRepo_default }
];
var GithubRepo_default2 = GithubRepo;

// app/components/Sidebar/index.tsx
var Sidebar = () => {
  const { pathname } = (0, import_react11.useLocation)();
  const navigate = (0, import_react11.useNavigate)();
  const isMobile = useMediaQuery(MOBILE_QUREY);
  const handleSelect = (eventKey) => {
    navigate(`..${eventKey}`, { replace: true });
  };
  const handleLogoClick = () => {
    navigate("../", { replace: true });
  };
  return /* @__PURE__ */ React.createElement(import_rsuite4.Sidebar, {
    className: (0, import_classnames3.default)("sidebar", { sidebar_mobile: isMobile })
  }, /* @__PURE__ */ React.createElement(import_rsuite4.Sidenav.Header, {
    className: "sidebar__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__github"
  }, /* @__PURE__ */ React.createElement(GithubRepo_default2, null)), /* @__PURE__ */ React.createElement(import_rsuite4.Stack, {
    direction: "column",
    spacing: isMobile ? 16 : 32
  }, /* @__PURE__ */ React.createElement(Logo_default2, {
    onClick: handleLogoClick
  }), /* @__PURE__ */ React.createElement(Version_default2, null))), /* @__PURE__ */ React.createElement(import_rsuite4.Sidenav, {
    expanded: !isMobile,
    defaultOpenKeys: ["/servers", "/settings"],
    className: "sidebar__nav",
    appearance: "subtle"
  }, /* @__PURE__ */ React.createElement(import_rsuite4.Sidenav.Body, null, /* @__PURE__ */ React.createElement(import_rsuite4.Nav, {
    activeKey: pathname,
    onSelect: handleSelect
  }, /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown, {
    eventKey: "/servers",
    title: "Servers",
    icon: /* @__PURE__ */ React.createElement(import_icons2.Dashboard, null),
    placement: "rightStart"
  }, /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown.Item, {
    eventKey: "/servers/create"
  }, "Create"), /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown.Item, {
    eventKey: "/servers"
  }, "List")), /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown, {
    eventKey: "/mods",
    title: "Mods",
    disabled: true,
    icon: /* @__PURE__ */ React.createElement(import_icons2.AppSelect, null),
    placement: "rightStart"
  }, /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown.Item, {
    eventKey: "/mods/gallery",
    disabled: true
  }, "Gallery"), /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown.Item, {
    eventKey: "/mods/downloaded",
    disabled: true
  }, "Downloads")), /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown, {
    eventKey: "/settings",
    title: "Settings",
    icon: /* @__PURE__ */ React.createElement(import_icons2.Gear, null),
    placement: "rightStart"
  }, /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown.Item, {
    eventKey: "/settings/rana-mc"
  }, "RanaMC"), /* @__PURE__ */ React.createElement(import_rsuite4.Dropdown.Item, {
    eventKey: "/settings/curseforge"
  }, "CurseForge")), /* @__PURE__ */ React.createElement(import_rsuite4.Nav.Item, {
    eventKey: "/about",
    icon: /* @__PURE__ */ React.createElement(import_icons2.HelpOutline, null)
  }, "About")))));
};
var links8 = () => [
  { rel: "stylesheet", href: Sidebar_default },
  ...links5(),
  ...links6(),
  ...links7()
];
var Sidebar_default2 = Sidebar;

// app/components/Layout/index.css
var Layout_default = "/build/_assets/index-XGZHUSPH.css";

// app/components/NavHeader/index.tsx
var import_icons3 = require("@rsuite/icons");
var import_react12 = __toESM(require("react"));
var import_rsuite5 = require("rsuite");

// app/components/NavHeader/index.css
var NavHeader_default = "/build/_assets/index-62YIUKE5.css";

// app/components/NavHeader/index.tsx
var NavHeader = () => {
  const isMobile = useMediaQuery(MOBILE_QUREY);
  const [open, setOpen] = import_react12.default.useState(false);
  const handleNoticeSelect = () => {
    setOpen(true);
  };
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "navHeader"
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Navbar, {
    className: "navHeader__nav"
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Nav, {
    pullRight: true,
    justified: true
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Nav.Item, {
    onSelect: handleNoticeSelect
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Badge, null, /* @__PURE__ */ import_react12.default.createElement(import_icons3.Notice, null))), /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Nav.Item, null, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Stack, {
    spacing: 8
  }, !isMobile && /* @__PURE__ */ import_react12.default.createElement("span", null, "admin@rana.mc"), /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Avatar, {
    circle: true,
    size: "sm"
  }, /* @__PURE__ */ import_react12.default.createElement(import_icons3.Admin, null))))))), /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Drawer, {
    open,
    size: "xs",
    full: isMobile,
    onClose: () => setOpen(false)
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Drawer.Body, null, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.List, null, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.List.Item, null, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Stack, {
    spacing: 8
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Badge, {
    color: "yellow"
  }), "Server stopped")), /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.List.Item, null, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Stack, {
    spacing: 8
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Badge, {
    color: "red"
  }), "Server crashed")), /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.List.Item, null, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Stack, {
    spacing: 8
  }, /* @__PURE__ */ import_react12.default.createElement(import_rsuite5.Badge, {
    color: "green"
  }), "Server started"))))));
};
var links9 = () => [{ rel: "stylesheet", href: NavHeader_default }];
var NavHeader_default2 = NavHeader;

// app/components/Layout/index.tsx
var Layout = ({ children, pageTitle, path }) => /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.CustomProvider, {
  theme: "light"
}, /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.Container, null, /* @__PURE__ */ import_react13.default.createElement(Sidebar_default2, null), /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.Container, {
  className: "layout__container"
}, /* @__PURE__ */ import_react13.default.createElement(NavHeader_default2, null), /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.Header, {
  className: "layout__header"
}, path && /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.Breadcrumb, null, path.map((value) => /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.Breadcrumb.Item, {
  key: value
}, value))), pageTitle && /* @__PURE__ */ import_react13.default.createElement("h3", null, /* @__PURE__ */ import_react13.default.createElement(import_Page.default, {
  style: { fontSize: "0.8em" }
}), pageTitle)), /* @__PURE__ */ import_react13.default.createElement(import_rsuite6.Content, null, children))));
var links10 = () => [
  { rel: "stylesheet", href: Layout_default },
  ...links8(),
  ...links9()
];
var Layout_default2 = Layout;

// app/components/ServerCoreBuilder/Fabric/index.tsx
var import_react14 = require("react");
var import_react15 = require("@remix-run/react");
var import_rsuite7 = require("rsuite");

// app/components/ServerCoreBuilder/utils.ts
var FABRIC_LOADERS_URL = "https://meta.fabricmc.net/v2/versions/loader";
var getFabricServerUrl = (gameVersionId, loaderVersion, installerVersion) => {
  const serverPath = `${gameVersionId}/${loaderVersion}/${installerVersion}/`;
  const serverUrl = `${FABRIC_LOADERS_URL}/${serverPath}server/jar`;
  return serverUrl;
};

// app/components/ServerCoreBuilder/Fabric/index.tsx
var FabricCoreBuilder = ({ gameVersionId, onBuild }) => {
  var _a, _b;
  const [installer, setInstaller] = (0, import_react14.useState)();
  const [loader11, setLoader] = (0, import_react14.useState)();
  const fabricInstallers = (0, import_react15.useFetcher)();
  const fabricLoaders = (0, import_react15.useFetcher)();
  (0, import_react14.useEffect)(() => {
    fabricInstallers.submit(null, {
      action: "servers/create/api/fabricInstallers",
      method: "post"
    });
    fabricLoaders.submit(null, {
      action: "servers/create/api/fabricLoaders",
      method: "post"
    });
  }, [gameVersionId]);
  (0, import_react14.useEffect)(() => {
    if (loader11 && installer) {
      const loaderVersion = loader11.version;
      const installerVersion = installer.version;
      const serverInstallerUrl = getFabricServerUrl(gameVersionId, loaderVersion, installerVersion);
      onBuild({
        gameVersion: gameVersionId,
        loader: loader11,
        installer,
        serverInstallerUrl
      });
    }
  }, [installer, loader11]);
  const handleInstallerChange = (installerVersion) => {
    var _a2, _b2;
    const selectedInstaller = (_b2 = (_a2 = fabricInstallers.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.find((el) => el.version === installerVersion);
    setInstaller(selectedInstaller);
  };
  const handleLoaderChange = (loaderVersion) => {
    var _a2, _b2;
    const selectedLoader = (_b2 = (_a2 = fabricLoaders.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.find((el) => el.version === loaderVersion);
    setLoader(selectedLoader);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_rsuite7.Panel, {
    header: "Fabric Installer Version"
  }, /* @__PURE__ */ React.createElement(import_rsuite7.RadioGroup, {
    className: "fabricInstallerSelect",
    inline: true,
    name: "fabricInstallerSelect",
    onChange: handleInstallerChange
  }, ((_a = fabricInstallers.data) == null ? void 0 : _a.success) && fabricInstallers.data.data.map((installer2) => /* @__PURE__ */ React.createElement(import_rsuite7.Radio, {
    key: installer2.version,
    value: installer2.version
  }, /* @__PURE__ */ React.createElement(import_rsuite7.Stack, {
    direction: "row",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), installer2.version))))), /* @__PURE__ */ React.createElement(import_rsuite7.Panel, {
    header: "Fabric Loader Version"
  }, /* @__PURE__ */ React.createElement(import_rsuite7.RadioGroup, {
    className: "fabricLoaderSelect",
    inline: true,
    name: "fabricLoaderSelect",
    onChange: handleLoaderChange
  }, ((_b = fabricLoaders.data) == null ? void 0 : _b.success) && fabricLoaders.data.data.map((loader12) => /* @__PURE__ */ React.createElement(import_rsuite7.Radio, {
    key: loader12.version,
    value: loader12.version
  }, /* @__PURE__ */ React.createElement(import_rsuite7.Stack, {
    direction: "row",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), loader12.version))))));
};
var Fabric_default = FabricCoreBuilder;

// app/components/ServerCoreBuilder/Forge/index.tsx
var import_react16 = require("react");
var import_react17 = require("@remix-run/react");
var import_rsuite8 = require("rsuite");
var ForgeCoreBuilder = ({ gameVersionId, onBuild }) => {
  var _a;
  const forgeCores = (0, import_react17.useFetcher)();
  (0, import_react16.useEffect)(() => {
    forgeCores.submit({ version: gameVersionId }, { action: "servers/create/api/forgeCores", method: "post" });
  }, [gameVersionId]);
  const handleChange = (value) => {
    var _a2;
    const core = (_a2 = forgeCores.data) == null ? void 0 : _a2.data.find((core2) => core2.coreVersion === value);
    if (core)
      onBuild(core);
  };
  return /* @__PURE__ */ React.createElement(import_rsuite8.Panel, {
    header: "Forge Core Version"
  }, /* @__PURE__ */ React.createElement(import_rsuite8.RadioGroup, {
    className: "forgeCoreSelect",
    inline: true,
    name: "forgeCoreSelect",
    onChange: handleChange
  }, ((_a = forgeCores.data) == null ? void 0 : _a.success) && forgeCores.data.data.map((core) => /* @__PURE__ */ React.createElement(import_rsuite8.Radio, {
    key: core.coreVersion,
    value: core.coreVersion
  }, /* @__PURE__ */ React.createElement(import_rsuite8.Stack, {
    direction: "row",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), core.coreVersion)))));
};
var Forge_default = ForgeCoreBuilder;

// app/components/ServerCoreBuilder/index.css
var ServerCoreBuilder_default = "/build/_assets/index-WMG34KZ3.css";

// app/components/ServerCoreBuilder/index.tsx
var ServerCoreBuilder = ({ gameVersionId, coreTypeId, onBuild }) => {
  const handleForgeBuild = (core) => onBuild(__spreadValues({ type: "forge" }, core));
  const handleFabricBuild = (core) => onBuild(__spreadValues({ type: "fabric" }, core));
  if (!gameVersionId) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, coreTypeId === "forge" && /* @__PURE__ */ React.createElement(Forge_default, {
    gameVersionId,
    onBuild: handleForgeBuild
  }), coreTypeId === "fabric" && /* @__PURE__ */ React.createElement(Fabric_default, {
    gameVersionId,
    onBuild: handleFabricBuild
  }));
};
var links11 = () => [{ rel: "stylesheet", href: ServerCoreBuilder_default }];
var ServerCoreBuilder_default2 = ServerCoreBuilder;

// app/components/ServerCoreTypeSelect/index.tsx
var import_react18 = __toESM(require("react"));
var import_classnames4 = __toESM(require("classnames"));
var import_rsuite9 = require("rsuite");

// app/components/ServerCoreTypeSelect/index.css
var ServerCoreTypeSelect_default = "/build/_assets/index-M2RG7MCI.css";

// app/components/ServerCoreTypeSelect/index.tsx
var ServerCoreType = ({
  title,
  description,
  icon,
  onClick,
  active
}) => {
  const handleClick = () => onClick && onClick();
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    role: "presentation",
    className: (0, import_classnames4.default)("serverCoreType", { serverCoreType_active: active }),
    onClick: handleClick
  }, /* @__PURE__ */ import_react18.default.createElement(SelectIcon_default2, {
    name: icon,
    size: "l"
  }), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "serverCoreType__title"
  }, /* @__PURE__ */ import_react18.default.createElement("b", null, title)), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "serverCoreType__description"
  }, /* @__PURE__ */ import_react18.default.createElement("span", null, description)));
};
var SERVER_CORE_TYPES = [
  {
    id: "forge",
    title: "Forge",
    description: "Popular choice",
    icon: "forge"
  },
  {
    id: "fabric",
    title: "Fabric",
    description: "Lightweight alternative",
    icon: "fabric"
  }
];
var ServerCoreTypeSelect = ({ defaultValue, onChange }) => {
  const handleChange = (value) => {
    if (onChange)
      onChange(value);
  };
  return /* @__PURE__ */ import_react18.default.createElement(import_rsuite9.RadioGroup, {
    defaultValue,
    className: "serverCoreSelect",
    inline: true,
    name: "serverCoreSelect",
    onChange: handleChange
  }, SERVER_CORE_TYPES.map((serverCoreType) => /* @__PURE__ */ import_react18.default.createElement(import_rsuite9.Radio, {
    key: serverCoreType.id,
    value: serverCoreType.id
  }, /* @__PURE__ */ import_react18.default.createElement(ServerCoreType, {
    title: serverCoreType.title,
    description: serverCoreType.description,
    icon: serverCoreType.icon
  }))));
};
var links12 = () => [{ rel: "stylesheet", href: ServerCoreTypeSelect_default }];
var ServerCoreTypeSelect_default2 = ServerCoreTypeSelect;

// app/components/VersionTypeSelect/index.tsx
var import_rsuite10 = require("rsuite");

// app/components/VersionTypeSelect/index.css
var VersionTypeSelect_default = "/build/_assets/index-DRA7TEC7.css";

// app/components/VersionTypeSelect/index.tsx
var filterVersionTypes = (versionTypes) => {
  return versionTypes.filter((version) => !RESTRICTED_TYPE_IDS.includes(version.id));
};
var formatVersionTypeName = (name) => name.replace(/Minecraft/gm, "");
var VersionTypeSelect = ({ defaultValue, versionTypes, onChange }) => {
  const handleChange = (value) => {
    if (onChange)
      onChange(value);
  };
  return /* @__PURE__ */ React.createElement(import_rsuite10.RadioGroup, {
    defaultValue,
    className: "versionTypeSelect",
    name: "version",
    inline: true,
    appearance: "picker",
    onChange: handleChange
  }, filterVersionTypes(versionTypes).map((version) => /* @__PURE__ */ React.createElement(import_rsuite10.Radio, {
    key: version.id,
    value: version.id
  }, formatVersionTypeName(version.name))));
};
var links13 = () => [{ rel: "stylesheet", href: VersionTypeSelect_default }];
var VersionTypeSelect_default2 = VersionTypeSelect;

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/index.tsx
var meta2 = () => ({ title: "RanaMC | Servers" });
var loader7 = async () => {
  const response = await import_axios7.default.get("http://localhost:3001/api/version-types");
  return response.data;
};
var findGameVersionByVersionTypeId = (gameVersions = [], versionTypeId = -1) => gameVersions == null ? void 0 : gameVersions.find((el) => el.type === versionTypeId);
var CreateIndexRoute = () => {
  const submit = (0, import_react20.useSubmit)();
  const [versionTypeId, setVersionTypeId] = (0, import_react19.useState)();
  const [gameVersionId, setGameVersionId] = (0, import_react19.useState)();
  const [serverCoreTypeId, setServerCoreTypeId] = (0, import_react19.useState)();
  const [serverCore, setServerCore] = (0, import_react19.useState)();
  const versionTypes = (0, import_react20.useLoaderData)();
  const gameVersions = (0, import_react20.useFetcher)();
  const handleVersionTypeIdChange = (value) => {
    setVersionTypeId(value);
    gameVersions.submit({ version: value.toString() }, { method: "post", action: "/servers/create/api/gameVersions" });
  };
  const handleGameVersionIdChange = (value) => {
    setGameVersionId(value);
  };
  const handleServerCoreTypeIdChange = (value) => {
    setServerCoreTypeId(value);
  };
  const handleServerCoreBuild = (value) => {
    setServerCore(value);
  };
  const handleCreateServerFormSubmit = (value) => {
    const { id, name } = value;
    if (id && name && gameVersionId && versionTypeId && serverCore) {
      const data = {
        id,
        name,
        gameVersionId,
        versionTypeId,
        coreType: serverCore.type
      };
      if (serverCore.type === "forge") {
        const forgeCore = serverCore;
        if (forgeCore == null ? void 0 : forgeCore.installerUrl) {
          window.open(forgeCore == null ? void 0 : forgeCore.installerUrl, "_blank", "noopener,noreferrer");
        }
        data.coreVersion = forgeCore.coreVersion;
      }
      if (serverCore.type === "fabric") {
        const fabricCore = serverCore;
        data.installerVersion = fabricCore.installer.version;
        data.loaderVersion = fabricCore.loader.version;
      }
      submit(data, {
        method: "post",
        action: "servers/create/api/createServer"
      });
    }
  };
  const gameVersion = (0, import_react19.useMemo)(() => findGameVersionByVersionTypeId(gameVersions.data, versionTypeId), [versionTypeId, gameVersions]);
  return /* @__PURE__ */ React.createElement(Layout_default2, {
    pageTitle: "Create Server",
    path: ["Home", "Servers"]
  }, /* @__PURE__ */ React.createElement(import_rsuite11.Panel, {
    style: { backgroundColor: "#fff", marginBottom: 32 },
    header: /* @__PURE__ */ React.createElement("h4", {
      style: { fontWeight: 600 }
    }, "Game Version"),
    bordered: true
  }, /* @__PURE__ */ React.createElement(VersionTypeSelect_default2, {
    defaultValue: versionTypeId,
    versionTypes,
    onChange: handleVersionTypeIdChange
  }), gameVersion && /* @__PURE__ */ React.createElement(GameVersionSelect_default2, {
    gameVersion,
    onChange: handleGameVersionIdChange
  })), /* @__PURE__ */ React.createElement(import_rsuite11.Panel, {
    style: { backgroundColor: "#fff", marginBottom: 32 },
    header: /* @__PURE__ */ React.createElement("h4", {
      style: { fontWeight: 600 }
    }, "Server Type"),
    bordered: true
  }, /* @__PURE__ */ React.createElement(ServerCoreTypeSelect_default2, {
    defaultValue: serverCoreTypeId,
    onChange: handleServerCoreTypeIdChange
  })), /* @__PURE__ */ React.createElement(import_rsuite11.Panel, {
    style: { backgroundColor: "#fff", marginBottom: 32 },
    header: /* @__PURE__ */ React.createElement("h4", {
      style: { fontWeight: 600 }
    }, "Core"),
    bordered: true
  }, serverCoreTypeId && /* @__PURE__ */ React.createElement(ServerCoreBuilder_default2, {
    gameVersionId,
    coreTypeId: serverCoreTypeId,
    onBuild: handleServerCoreBuild
  })), /* @__PURE__ */ React.createElement(FloatBottom_default2, null, /* @__PURE__ */ React.createElement(import_rsuite11.Panel, {
    style: { backgroundColor: "#F5F5F5" },
    bordered: true
  }, /* @__PURE__ */ React.createElement(CreateServerForm_default, {
    onSubmit: handleCreateServerFormSubmit
  }))));
};
var links14 = () => [
  ...links10(),
  ...links2(),
  ...links4(),
  ...links11(),
  ...links12(),
  ...links13()
];
var create_default = CreateIndexRoute;

// route:/Users/ebykovskikh/Desktop/web/app/routes/settings/curseforge.tsx
var curseforge_exports = {};
__export(curseforge_exports, {
  action: () => action7,
  default: () => curseforge_default,
  links: () => links15,
  loader: () => loader8,
  meta: () => meta3
});
var import_react21 = require("react");
var import_rsuite12 = require("rsuite");
var import_react22 = require("@remix-run/react");
var import_axios8 = __toESM(require("axios"));
var SETTINGS_API_URL = "http://localhost:3001/api/settings";
var loader8 = async () => {
  const response = await import_axios8.default.get(SETTINGS_API_URL);
  return response.data;
};
var action7 = async ({ request }) => {
  const body = await request.formData();
  const data = Object.fromEntries(body);
  import_axios8.default.post(SETTINGS_API_URL, data);
  return null;
};
var CurseForgeSettings = () => {
  const submit = (0, import_react22.useSubmit)();
  const transition = (0, import_react22.useTransition)();
  const settings = (0, import_react22.useLoaderData)();
  const [currentSettings, setCurrentSettings] = (0, import_react21.useState)(settings);
  const handleSubmit = (status, event) => {
    submit(event.currentTarget, { replace: true });
  };
  const handleChange = (formValue) => {
    setCurrentSettings(formValue);
  };
  return /* @__PURE__ */ React.createElement(Layout_default2, {
    pageTitle: "CurseForge Settings",
    path: ["Home", "Settings"]
  }, /* @__PURE__ */ React.createElement(import_rsuite12.Panel, {
    style: { backgroundColor: "#fff" },
    bordered: true
  }, /* @__PURE__ */ React.createElement(import_rsuite12.Form, {
    formValue: currentSettings,
    method: "post",
    disabled: transition.state === "submitting",
    onChange: handleChange,
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(import_rsuite12.Form.Group, {
    controlId: "curseApiKey"
  }, /* @__PURE__ */ React.createElement(import_rsuite12.Form.ControlLabel, null, "API Key"), /* @__PURE__ */ React.createElement(import_rsuite12.Form.Control, {
    name: "curseApiKey"
  }), /* @__PURE__ */ React.createElement(import_rsuite12.Form.HelpText, null, "API key for requests to core.curseforge.com")), /* @__PURE__ */ React.createElement(import_rsuite12.Form.Group, null, /* @__PURE__ */ React.createElement(import_rsuite12.ButtonToolbar, null, /* @__PURE__ */ React.createElement(import_rsuite12.Button, {
    disabled: transition.state === "submitting",
    type: "submit",
    appearance: "primary"
  }, "Save"))))));
};
var meta3 = () => ({
  title: "RanaMC | Settings"
});
var links15 = () => [...links10()];
var curseforge_default = CurseForgeSettings;

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/$id/index.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  links: () => links19,
  loader: () => loader9,
  meta: () => meta4
});
var import_react24 = require("@remix-run/react");
var import_axios9 = __toESM(require("axios"));

// app/components/ServerCardLarge/index.tsx
var import_rsuite14 = require("rsuite");
var import_Code = __toESM(require("@rsuite/icons/Code"));
var import_Tools = __toESM(require("@rsuite/icons/Tools"));
var import_AppSelect = __toESM(require("@rsuite/icons/AppSelect"));
var import_DocPass = __toESM(require("@rsuite/icons/DocPass"));

// app/components/ServerLogs/index.tsx
var import_react23 = require("react");
var import_lodash = __toESM(require("lodash.debounce"));

// app/components/ServerLogs/index.css
var ServerLogs_default = "/build/_assets/index-3YDOVAJF.css";

// app/vendors/ranaSocketIo.ts
var import_socket = require("socket.io-client");
var SOCKET_URL = "http://localhost:3001";
var ranaSocket = (0, import_socket.io)(SOCKET_URL);

// app/components/ServerLogs/utils.ts
var NODES = [
  {
    name: "tag",
    regex: /.+(\[.+\])/gm
  },
  {
    name: "classname",
    regex: /((net|org|com)\/.+)(\.class)/gm
  },
  {
    name: "org",
    regex: /((net|org|com).+)( |\$?)/gm
  },
  {
    name: "url",
    regex: /((http).+)( |)/gm
  },
  {
    name: "command",
    regex: /(().+:)/gm
  },
  {
    name: "path",
    regex: /(\/.+)( |)/gm
  }
];
var prepareLines = (logs) => logs.reduce((acc, curr) => [...acc, ...curr.split("\n")], []);
var parseLine = (line) => {
  const light = {
    raw: line,
    groups: []
  };
  const nodes = NODES.reduce((acc, curr) => {
    const node = acc.raw.match(curr.regex);
    if (node && node[0]) {
      const split = acc.raw.split(node[0]);
      acc.groups.push({
        value: split[0]
      });
      acc.groups.push({
        name: curr.name,
        value: node[0]
      });
      acc.groups.push({
        value: split[1]
      });
      acc.raw = acc.raw.replace(node[0], "");
    }
    return acc;
  }, light);
  if (!nodes.groups.length) {
    nodes.groups.push({
      value: nodes.raw
    });
  }
  return nodes;
};

// app/components/ServerLogs/index.tsx
var UPDATE_LOGS_DELAY = 250;
var LAST_LOGS_COUNT = 100;
var ServerLogs = ({ serverId }) => {
  const fullServerLogs = [];
  const [logs, setLogs] = (0, import_react23.useState)([]);
  const handleLogAppend = (0, import_react23.useCallback)((0, import_lodash.default)((logsToUpdate) => setLogs(prepareLines(logsToUpdate.slice(-LAST_LOGS_COUNT))), UPDATE_LOGS_DELAY), []);
  ranaSocket.on("logs", (logsServerId, message) => {
    if (serverId) {
      if (serverId === logsServerId) {
        fullServerLogs.push(message);
        handleLogAppend(fullServerLogs);
      }
      return;
    }
    fullServerLogs.push(message);
    handleLogAppend(fullServerLogs);
  });
  const renderLine = (line) => parseLine(line).groups.map((group, index) => group.name ? /* @__PURE__ */ React.createElement("span", {
    key: `${group.name}_${index}`,
    className: `serverLogs__${group.name}`
  }, group.value) : /* @__PURE__ */ React.createElement("span", {
    key: `${group.name}_${index}`,
    className: "serverLogs__line"
  }, group.value));
  return /* @__PURE__ */ React.createElement("div", {
    className: "serverLogs"
  }, logs.map((log, index) => /* @__PURE__ */ React.createElement("span", {
    key: `${log.length}_${index}`,
    className: "serverLogs__log"
  }, renderLine(log))));
};
var links16 = () => [{ rel: "stylesheet", href: ServerLogs_default }];
var ServerLogs_default2 = ServerLogs;

// app/components/ServerCardLarge/index.css
var ServerCardLarge_default = "/build/_assets/index-NSPY25RJ.css";

// app/components/Badge/index.tsx
var import_rsuite13 = require("rsuite");
var import_classnames5 = __toESM(require("classnames"));

// app/components/Badge/index.css
var Badge_default = "/build/_assets/index-DDNYBECA.css";

// app/components/Badge/index.tsx
var Badge2 = ({ content, color, altColor }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames5.default)("badge", `badge_${altColor}`)
  }, /* @__PURE__ */ React.createElement(import_rsuite13.Badge, {
    content,
    color
  }));
};
var links17 = () => [{ rel: "stylesheet", href: Badge_default }];
var Badge_default2 = Badge2;

// app/components/ServerCardLarge/index.tsx
var ServerCardLarge = ({
  server,
  onInstall,
  onStart,
  onStop,
  onRemove,
  onEulaChange
}) => {
  const isMobile = useMediaQuery(MOBILE_QUREY);
  const handleInstall = () => onInstall();
  const handleStart = () => onStart();
  const handleStop = () => onStop();
  const handleRemove = () => onRemove();
  const handleEulaChange = (value) => onEulaChange(value);
  return /* @__PURE__ */ React.createElement(import_rsuite14.PanelGroup, {
    style: { backgroundColor: "#fff" },
    accordion: true,
    bordered: true
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Panel, {
    defaultExpanded: true,
    collapsible: false
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    alignItems: "flex-start",
    spacing: 12
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "serverCardLarge__header"
  }, server.name), /* @__PURE__ */ React.createElement(Badge_default2, {
    altColor: "grey",
    content: server.id
  })), /* @__PURE__ */ React.createElement(import_rsuite14.Tag, {
    size: "sm",
    color: "cyan"
  }, server.status))), /* @__PURE__ */ React.createElement(import_rsuite14.Grid, {
    fluid: true
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Row, null, /* @__PURE__ */ React.createElement(import_rsuite14.Col, {
    xs: isMobile ? 24 : 12
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Panel, {
    collapsible: true,
    defaultExpanded: true
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    direction: "column",
    alignItems: "stretch",
    divider: /* @__PURE__ */ React.createElement(import_rsuite14.Divider, {
      className: "serverCardLarge__divider"
    })
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Code.default, null), server.gameVersion), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, null, server.gameVersion)), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Tools.default, null), /* @__PURE__ */ React.createElement("span", {
    style: { textTransform: "capitalize" }
  }, server.core.type)), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, null, "...")), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_AppSelect.default, null), "Mods"), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, null, server.mods.length)), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_DocPass.default, null), "EULA"), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, null, /* @__PURE__ */ React.createElement(import_rsuite14.Toggle, {
    defaultChecked: server.eula,
    onChange: handleEulaChange
  }))))), /* @__PURE__ */ React.createElement(import_rsuite14.Panel, {
    bodyFill: true,
    defaultExpanded: true,
    className: "serverCardLarge__footer"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.ButtonToolbar, null, /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Button, {
    appearance: "link",
    color: "red",
    size: "md",
    disabled: !(server.status === "created" /* Created */ || server.status === "stopped" /* Stopped */),
    onClick: handleRemove
  }, server.status === "removing" /* Removing */ ? "Removing..." : "Remove"), /* @__PURE__ */ React.createElement(import_rsuite14.Stack, {
    spacing: 12
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Button, {
    appearance: "link",
    color: "cyan",
    disabled: server.status === "coreInstalled" /* CoreInstalled */ || server.status === "coreInstalling" /* CoreInstalling */,
    size: "md",
    onClick: handleInstall
  }, server.status === "coreInstalling" /* CoreInstalling */ ? "Installing..." : "Install"), /* @__PURE__ */ React.createElement(import_rsuite14.Button, {
    appearance: "link",
    color: "orange",
    disabled: server.status === "stopping" /* Stopping */ || server.status === "stopped" /* Stopped */,
    size: "md",
    onClick: handleStop
  }, server.status === "stopping" /* Stopping */ ? "Stopping..." : "Stop"), /* @__PURE__ */ React.createElement(import_rsuite14.Button, {
    appearance: "ghost",
    disabled: server.status === "starting" /* Starting */ || server.status === "started" /* Started */,
    size: "md",
    onClick: handleStart
  }, server.status === "starting" /* Starting */ ? "Starting..." : "Start")))))), /* @__PURE__ */ React.createElement(import_rsuite14.Col, {
    xs: isMobile ? 24 : 12
  }, /* @__PURE__ */ React.createElement(import_rsuite14.Panel, {
    collapsible: true,
    defaultExpanded: true,
    header: "Logs"
  }, /* @__PURE__ */ React.createElement(ServerLogs_default2, null))))));
};
var links18 = () => [
  { rel: "stylesheet", href: ServerCardLarge_default },
  ...links16(),
  ...links17()
];
var ServerCardLarge_default2 = ServerCardLarge;

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/$id/index.tsx
var import_react25 = require("react");
var loader9 = async ({ params }) => {
  const { id } = params;
  try {
    const response = await import_axios9.default.get(`http://localhost:3001/api/servers/${id}`);
    return { success: true, data: response.data };
  } catch (err) {
    return { success: false };
  }
};
var Server = () => {
  const submit = (0, import_react24.useSubmit)();
  const initialServer = (0, import_react24.useLoaderData)();
  const [server, setServer] = (0, import_react25.useState)();
  (0, import_react25.useEffect)(() => {
    setServer(initialServer.data);
  }, [initialServer.data]);
  (0, import_react25.useEffect)(() => {
    ranaSocket.on("serverUpdate" /* ServerUpdate */, (server2) => {
      setServer(server2);
    });
  }, []);
  if (!server) {
    return /* @__PURE__ */ React.createElement(Layout_default2, {
      pageTitle: "Servers",
      path: ["Servers"]
    }, /* @__PURE__ */ React.createElement("div", null, "Oops, something went wrong..."));
  }
  const handleInstall = () => {
    ranaSocket.emit("installCore" /* InstallCore */, server);
  };
  const handleStart = () => {
    ranaSocket.emit("start" /* Start */, server);
  };
  const handleStop = () => {
    ranaSocket.emit("stop" /* Stop */, server);
  };
  const handleRemove = () => {
    submit(null, {
      method: "delete",
      action: `servers/${server.id}/api/remove`
    });
  };
  const handleEulaChange = (value) => {
    ranaSocket.emit("eula" /* Eula */, server, value);
  };
  return /* @__PURE__ */ React.createElement(Layout_default2, {
    pageTitle: "Servers",
    path: ["Servers"]
  }, /* @__PURE__ */ React.createElement(ServerCardLarge_default2, {
    server,
    onInstall: handleInstall,
    onStart: handleStart,
    onStop: handleStop,
    onRemove: handleRemove,
    onEulaChange: handleEulaChange
  }));
};
var meta4 = () => ({ title: "RanaMC | Server" });
var links19 = () => [...links10(), ...links18()];
var id_default = Server;

// route:/Users/ebykovskikh/Desktop/web/app/routes/settings/rana-mc.tsx
var rana_mc_exports = {};
__export(rana_mc_exports, {
  default: () => rana_mc_default,
  links: () => links20,
  meta: () => meta5
});
var RanaMCSettings = () => /* @__PURE__ */ React.createElement(Layout_default2, {
  pageTitle: "RanaMC Settings",
  path: ["Home", "Settings"]
});
var meta5 = () => ({ title: "RanaMC | Settings" });
var links20 = () => [...links10()];
var rana_mc_default = RanaMCSettings;

// route:/Users/ebykovskikh/Desktop/web/app/routes/mods/downloaded.tsx
var downloaded_exports = {};
__export(downloaded_exports, {
  default: () => downloaded_default,
  links: () => links21,
  meta: () => meta6
});
var DownloadedMods = () => /* @__PURE__ */ React.createElement(Layout_default2, {
  pageTitle: "Downloaded",
  path: ["Home", "Mods"]
});
var meta6 = () => ({ title: "RanaMC | Mods" });
var links21 = () => [...links10()];
var downloaded_default = DownloadedMods;

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/index.tsx
var servers_exports = {};
__export(servers_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => servers_default,
  links: () => links23,
  loader: () => loader10,
  meta: () => meta7
});
var import_react27 = require("@remix-run/react");
var import_axios10 = __toESM(require("axios"));
var import_rsuite16 = require("rsuite");

// app/components/ServerCard/index.tsx
var import_rsuite15 = require("rsuite");
var import_Code2 = __toESM(require("@rsuite/icons/Code"));
var import_Tools2 = __toESM(require("@rsuite/icons/Tools"));
var import_AppSelect2 = __toESM(require("@rsuite/icons/AppSelect"));
var import_DocPass2 = __toESM(require("@rsuite/icons/DocPass"));

// app/components/ServerCard/index.css
var ServerCard_default = "/build/_assets/index-MFVYKEG2.css";

// app/components/ServerCard/index.tsx
var import_react26 = require("@remix-run/react");
var ServerCard = ({ server }) => {
  const navigate = (0, import_react26.useNavigate)();
  const handleClick = () => {
    navigate(`/servers/${server.id}`);
  };
  const handleToggleClick = (event) => event.stopPropagation();
  return /* @__PURE__ */ React.createElement(import_rsuite15.Panel, {
    role: "presentation",
    onClick: handleClick,
    className: "serverCard",
    shaded: true,
    bordered: true,
    bodyFill: true
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Panel, {
    header: /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
      justifyContent: "space-between",
      alignItems: "center"
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "serverCard__header"
    }, server.name), /* @__PURE__ */ React.createElement(import_rsuite15.Tag, {
      size: "sm",
      color: "cyan"
    }, "Created"))
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    direction: "column",
    alignItems: "stretch",
    divider: /* @__PURE__ */ React.createElement(import_rsuite15.Divider, {
      className: "serverCard__divider"
    })
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Code2.default, null), "Game version"), /* @__PURE__ */ React.createElement(import_rsuite15.Stack, null, server.gameVersion)), /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Tools2.default, null), "Forge"), /* @__PURE__ */ React.createElement(import_rsuite15.Stack, null, "123")), /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_AppSelect2.default, null), "Mods"), /* @__PURE__ */ React.createElement(import_rsuite15.Stack, null, "32")), /* @__PURE__ */ React.createElement("div", {
    onClick: handleToggleClick
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_DocPass2.default, null), "EULA"), /* @__PURE__ */ React.createElement(import_rsuite15.Stack, null, /* @__PURE__ */ React.createElement(import_rsuite15.Toggle, null)))))), /* @__PURE__ */ React.createElement(import_rsuite15.Panel, {
    bodyFill: true,
    className: "serverCard__footer"
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Stack, {
    justifyContent: "space-between",
    alignItems: "stretch"
  }, /* @__PURE__ */ React.createElement(import_rsuite15.Button, {
    appearance: "link",
    size: "sm"
  }, "Go to server"), /* @__PURE__ */ React.createElement(import_rsuite15.Button, {
    color: "red",
    appearance: "link",
    size: "sm"
  }, "Remove"))));
};
var links22 = () => [{ rel: "stylesheet", href: ServerCard_default }];
var ServerCard_default2 = ServerCard;

// route:/Users/ebykovskikh/Desktop/web/app/routes/servers/index.tsx
var loader10 = async () => {
  try {
    const response = await import_axios10.default.get("http://localhost:3001/api/servers");
    return response.data;
  } catch (err) {
    if (import_axios10.default.isAxiosError(err))
      throw new Response(err.message, err.response);
    else
      throw new Response("Test", { status: 500 });
  }
};
var Servers = () => {
  const servers = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout_default2, {
    pageTitle: "Servers",
    path: ["Home", "Servers"]
  }, /* @__PURE__ */ React.createElement(import_rsuite16.Stack, {
    wrap: true,
    spacing: 24
  }, servers == null ? void 0 : servers.map((server) => /* @__PURE__ */ React.createElement(ServerCard_default2, {
    key: server.id,
    server
  }))));
};
var ErrorBoundary = ({ error }) => /* @__PURE__ */ React.createElement(Layout_default2, {
  pageTitle: "Servers",
  path: ["Servers"]
}, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "The stack trace is:"), /* @__PURE__ */ React.createElement("pre", null, error.stack));
var meta7 = () => ({
  title: "RanaMC | Servers"
});
var links23 = () => [...links10(), ...links22()];
var servers_default = Servers;

// route:/Users/ebykovskikh/Desktop/web/app/routes/mods/gallery.tsx
var gallery_exports = {};
__export(gallery_exports, {
  default: () => gallery_default,
  links: () => links24,
  meta: () => meta8
});
var ModsGallery = () => /* @__PURE__ */ React.createElement(Layout_default2, {
  pageTitle: "Gallery",
  path: ["Home", "Mods"]
});
var meta8 = () => ({ title: "RanaMC | Mods" });
var links24 = () => [...links10()];
var gallery_default = ModsGallery;

// route:/Users/ebykovskikh/Desktop/web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  links: () => links25,
  meta: () => meta9
});
var About = () => /* @__PURE__ */ React.createElement(Layout_default2, {
  pageTitle: "About",
  path: ["Home", "About"]
});
var meta9 = () => ({ title: "RanaMC | About" });
var links25 = () => [...links10()];
var about_default = About;

// route:/Users/ebykovskikh/Desktop/web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links26,
  meta: () => meta10
});
var Index = () => /* @__PURE__ */ React.createElement(Layout_default2, {
  path: ["Home"]
}, /* @__PURE__ */ React.createElement("h3", null, "Welcome to RanaMC!"));
var meta10 = () => ({
  title: "RanaMC | Home"
});
var links26 = () => [...links10()];
var routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "53d489a0", "entry": { "module": "/build/entry.client-SDTGFAPB.js", "imports": ["/build/_shared/chunk-JU46WIKV.js", "/build/_shared/chunk-BKLLZ3ZO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FI567LOC.js", "imports": ["/build/_shared/chunk-AMX763LT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-UCQAIHRG.js", "imports": ["/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HQGGGRR5.js", "imports": ["/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/mods/downloaded": { "id": "routes/mods/downloaded", "parentId": "root", "path": "mods/downloaded", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/mods/downloaded-ZEXMA6A6.js", "imports": ["/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/mods/gallery": { "id": "routes/mods/gallery", "parentId": "root", "path": "mods/gallery", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/mods/gallery-GYIJ74LI.js", "imports": ["/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/$id/api/remove": { "id": "routes/servers/$id/api/remove", "parentId": "root", "path": "servers/:id/api/remove", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/servers/$id/api/remove-3GRL5MGG.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/$id/index": { "id": "routes/servers/$id/index", "parentId": "root", "path": "servers/:id", "index": true, "caseSensitive": void 0, "module": "/build/routes/servers/$id/index-LOV6H76T.js", "imports": ["/build/_shared/chunk-OSHXEWHP.js", "/build/_shared/chunk-BE4337DZ.js", "/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/create/api/createServer": { "id": "routes/servers/create/api/createServer", "parentId": "root", "path": "servers/create/api/createServer", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/servers/create/api/createServer-DIJK4R7A.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/create/api/fabricInstallers": { "id": "routes/servers/create/api/fabricInstallers", "parentId": "root", "path": "servers/create/api/fabricInstallers", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/servers/create/api/fabricInstallers-6PNHCDIV.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/create/api/fabricLoaders": { "id": "routes/servers/create/api/fabricLoaders", "parentId": "root", "path": "servers/create/api/fabricLoaders", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/servers/create/api/fabricLoaders-6KTYPVCV.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/create/api/forgeCores": { "id": "routes/servers/create/api/forgeCores", "parentId": "root", "path": "servers/create/api/forgeCores", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/servers/create/api/forgeCores-AOLKZV4F.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/create/api/gameVersions": { "id": "routes/servers/create/api/gameVersions", "parentId": "root", "path": "servers/create/api/gameVersions", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/servers/create/api/gameVersions-TCZ753JL.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/create/index": { "id": "routes/servers/create/index", "parentId": "root", "path": "servers/create", "index": true, "caseSensitive": void 0, "module": "/build/routes/servers/create/index-4P53WVZN.js", "imports": ["/build/_shared/chunk-BE4337DZ.js", "/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/servers/index": { "id": "routes/servers/index", "parentId": "root", "path": "servers", "index": true, "caseSensitive": void 0, "module": "/build/routes/servers/index-3VQTCMXH.js", "imports": ["/build/_shared/chunk-OSHXEWHP.js", "/build/_shared/chunk-BE4337DZ.js", "/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/settings/curseforge": { "id": "routes/settings/curseforge", "parentId": "root", "path": "settings/curseforge", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings/curseforge-QNZA5HQM.js", "imports": ["/build/_shared/chunk-BE4337DZ.js", "/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings/rana-mc": { "id": "routes/settings/rana-mc", "parentId": "root", "path": "settings/rana-mc", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings/rana-mc-UYSOTVPT.js", "imports": ["/build/_shared/chunk-Q7H26KYZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-53D489A0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/servers/create/api/fabricInstallers": {
    id: "routes/servers/create/api/fabricInstallers",
    parentId: "root",
    path: "servers/create/api/fabricInstallers",
    index: void 0,
    caseSensitive: void 0,
    module: fabricInstallers_exports
  },
  "routes/servers/create/api/fabricLoaders": {
    id: "routes/servers/create/api/fabricLoaders",
    parentId: "root",
    path: "servers/create/api/fabricLoaders",
    index: void 0,
    caseSensitive: void 0,
    module: fabricLoaders_exports
  },
  "routes/servers/create/api/createServer": {
    id: "routes/servers/create/api/createServer",
    parentId: "root",
    path: "servers/create/api/createServer",
    index: void 0,
    caseSensitive: void 0,
    module: createServer_exports
  },
  "routes/servers/create/api/gameVersions": {
    id: "routes/servers/create/api/gameVersions",
    parentId: "root",
    path: "servers/create/api/gameVersions",
    index: void 0,
    caseSensitive: void 0,
    module: gameVersions_exports
  },
  "routes/servers/create/api/forgeCores": {
    id: "routes/servers/create/api/forgeCores",
    parentId: "root",
    path: "servers/create/api/forgeCores",
    index: void 0,
    caseSensitive: void 0,
    module: forgeCores_exports
  },
  "routes/servers/$id/api/remove": {
    id: "routes/servers/$id/api/remove",
    parentId: "root",
    path: "servers/:id/api/remove",
    index: void 0,
    caseSensitive: void 0,
    module: remove_exports
  },
  "routes/servers/create/index": {
    id: "routes/servers/create/index",
    parentId: "root",
    path: "servers/create",
    index: true,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/settings/curseforge": {
    id: "routes/settings/curseforge",
    parentId: "root",
    path: "settings/curseforge",
    index: void 0,
    caseSensitive: void 0,
    module: curseforge_exports
  },
  "routes/servers/$id/index": {
    id: "routes/servers/$id/index",
    parentId: "root",
    path: "servers/:id",
    index: true,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/settings/rana-mc": {
    id: "routes/settings/rana-mc",
    parentId: "root",
    path: "settings/rana-mc",
    index: void 0,
    caseSensitive: void 0,
    module: rana_mc_exports
  },
  "routes/mods/downloaded": {
    id: "routes/mods/downloaded",
    parentId: "root",
    path: "mods/downloaded",
    index: void 0,
    caseSensitive: void 0,
    module: downloaded_exports
  },
  "routes/servers/index": {
    id: "routes/servers/index",
    parentId: "root",
    path: "servers",
    index: true,
    caseSensitive: void 0,
    module: servers_exports
  },
  "routes/mods/gallery": {
    id: "routes/mods/gallery",
    parentId: "root",
    path: "mods/gallery",
    index: void 0,
    caseSensitive: void 0,
    module: gallery_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
