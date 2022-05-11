import {
  require_axios
} from "/build/_shared/chunk-BE4337DZ.js";
import {
  Layout_default,
  links
} from "/build/_shared/chunk-Q7H26KYZ.js";
import {
  ButtonToolbar_default,
  Button_default,
  Form_default,
  Panel_default
} from "/build/_shared/chunk-AMX763LT.js";
import {
  useLoaderData,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-JU46WIKV.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BKLLZ3ZO.js";

// browser-route-module:/Users/ebykovskikh/Desktop/web/app/routes/settings/curseforge.tsx?browser
init_react();

// app/routes/settings/curseforge.tsx
init_react();
var import_react = __toESM(require_react());
var import_axios = __toESM(require_axios());
var CurseForgeSettings = () => {
  const submit = useSubmit();
  const transition = useTransition();
  const settings = useLoaderData();
  const [currentSettings, setCurrentSettings] = (0, import_react.useState)(settings);
  const handleSubmit = (status, event) => {
    submit(event.currentTarget, { replace: true });
  };
  const handleChange = (formValue) => {
    setCurrentSettings(formValue);
  };
  return /* @__PURE__ */ React.createElement(Layout_default, {
    pageTitle: "CurseForge Settings",
    path: ["Home", "Settings"]
  }, /* @__PURE__ */ React.createElement(Panel_default, {
    style: { backgroundColor: "#fff" },
    bordered: true
  }, /* @__PURE__ */ React.createElement(Form_default, {
    formValue: currentSettings,
    method: "post",
    disabled: transition.state === "submitting",
    onChange: handleChange,
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(Form_default.Group, {
    controlId: "curseApiKey"
  }, /* @__PURE__ */ React.createElement(Form_default.ControlLabel, null, "API Key"), /* @__PURE__ */ React.createElement(Form_default.Control, {
    name: "curseApiKey"
  }), /* @__PURE__ */ React.createElement(Form_default.HelpText, null, "API key for requests to core.curseforge.com")), /* @__PURE__ */ React.createElement(Form_default.Group, null, /* @__PURE__ */ React.createElement(ButtonToolbar_default, null, /* @__PURE__ */ React.createElement(Button_default, {
    disabled: transition.state === "submitting",
    type: "submit",
    appearance: "primary"
  }, "Save"))))));
};
var meta = () => ({
  title: "RanaMC | Settings"
});
var links2 = () => [...links()];
var curseforge_default = CurseForgeSettings;
export {
  curseforge_default as default,
  links2 as links,
  meta
};
//# sourceMappingURL=/build/routes/settings/curseforge-QNZA5HQM.js.map
