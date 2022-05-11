import {
  require_AppSelect,
  require_Code,
  require_DocPass,
  require_Tools
} from "/build/_shared/chunk-OSHXEWHP.js";
import {
  require_axios
} from "/build/_shared/chunk-BE4337DZ.js";
import {
  Layout_default,
  links
} from "/build/_shared/chunk-Q7H26KYZ.js";
import {
  Button_default,
  Divider_default,
  Panel_default,
  Stack_default,
  Tag_default,
  Toggle_default
} from "/build/_shared/chunk-AMX763LT.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-JU46WIKV.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-BKLLZ3ZO.js";

// browser-route-module:/Users/ebykovskikh/Desktop/web/app/routes/servers/index.tsx?browser
init_react();

// app/routes/servers/index.tsx
init_react();
var import_axios = __toESM(require_axios());

// app/components/ServerCard/index.tsx
init_react();
var import_Code = __toESM(require_Code());
var import_Tools = __toESM(require_Tools());
var import_AppSelect = __toESM(require_AppSelect());
var import_DocPass = __toESM(require_DocPass());

// app/components/ServerCard/index.css
var ServerCard_default = "/build/_assets/index-MFVYKEG2.css";

// app/components/ServerCard/index.tsx
var ServerCard = ({ server }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/servers/${server.id}`);
  };
  const handleToggleClick = (event) => event.stopPropagation();
  return /* @__PURE__ */ React.createElement(Panel_default, {
    role: "presentation",
    onClick: handleClick,
    className: "serverCard",
    shaded: true,
    bordered: true,
    bodyFill: true
  }, /* @__PURE__ */ React.createElement(Panel_default, {
    header: /* @__PURE__ */ React.createElement(Stack_default, {
      justifyContent: "space-between",
      alignItems: "center"
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "serverCard__header"
    }, server.name), /* @__PURE__ */ React.createElement(Tag_default, {
      size: "sm",
      color: "cyan"
    }, "Created"))
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    direction: "column",
    alignItems: "stretch",
    divider: /* @__PURE__ */ React.createElement(Divider_default, {
      className: "serverCard__divider"
    })
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Code.default, null), "Game version"), /* @__PURE__ */ React.createElement(Stack_default, null, server.gameVersion)), /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Tools.default, null), "Forge"), /* @__PURE__ */ React.createElement(Stack_default, null, "123")), /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_AppSelect.default, null), "Mods"), /* @__PURE__ */ React.createElement(Stack_default, null, "32")), /* @__PURE__ */ React.createElement("div", {
    onClick: handleToggleClick
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_DocPass.default, null), "EULA"), /* @__PURE__ */ React.createElement(Stack_default, null, /* @__PURE__ */ React.createElement(Toggle_default, null)))))), /* @__PURE__ */ React.createElement(Panel_default, {
    bodyFill: true,
    className: "serverCard__footer"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "stretch"
  }, /* @__PURE__ */ React.createElement(Button_default, {
    appearance: "link",
    size: "sm"
  }, "Go to server"), /* @__PURE__ */ React.createElement(Button_default, {
    color: "red",
    appearance: "link",
    size: "sm"
  }, "Remove"))));
};
var links2 = () => [{ rel: "stylesheet", href: ServerCard_default }];
var ServerCard_default2 = ServerCard;

// app/routes/servers/index.tsx
var Servers = () => {
  const servers = useLoaderData();
  return /* @__PURE__ */ React.createElement(Layout_default, {
    pageTitle: "Servers",
    path: ["Home", "Servers"]
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    wrap: true,
    spacing: 24
  }, servers == null ? void 0 : servers.map((server) => /* @__PURE__ */ React.createElement(ServerCard_default2, {
    key: server.id,
    server
  }))));
};
var ErrorBoundary = ({ error }) => /* @__PURE__ */ React.createElement(Layout_default, {
  pageTitle: "Servers",
  path: ["Servers"]
}, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "The stack trace is:"), /* @__PURE__ */ React.createElement("pre", null, error.stack));
var meta = () => ({
  title: "RanaMC | Servers"
});
var links3 = () => [...links(), ...links2()];
var servers_default = Servers;
export {
  ErrorBoundary,
  servers_default as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/servers/index-3VQTCMXH.js.map
