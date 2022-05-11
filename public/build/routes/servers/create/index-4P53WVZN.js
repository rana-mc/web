import {
  require_axios
} from "/build/_shared/chunk-BE4337DZ.js";
import {
  Gear_default,
  Layout_default,
  RESTRICTED_TYPE_IDS,
  links
} from "/build/_shared/chunk-Q7H26KYZ.js";
import {
  Button_default,
  Form_default,
  Panel_default,
  RadioGroup_default,
  Radio_default,
  Stack_default,
  require_classnames
} from "/build/_shared/chunk-AMX763LT.js";
import {
  useFetcher,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-JU46WIKV.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BKLLZ3ZO.js";

// browser-route-module:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/index.tsx?browser
init_react();

// app/routes/servers/create/index.tsx
init_react();
var import_axios = __toESM(require_axios());
var import_react10 = __toESM(require_react());

// app/components/CreateServerForm/index.tsx
init_react();
var import_react = __toESM(require_react());
var INITIAL_FORM = {
  id: "",
  name: ""
};
var CreateServerForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = (0, import_react.useState)(INITIAL_FORM);
  const handleSubmit = () => {
    onSubmit(formValue);
  };
  const handleChange = (formValue2) => {
    setFormValue(formValue2);
  };
  return /* @__PURE__ */ import_react.default.createElement(Form_default, {
    layout: "inline",
    formValue,
    onChange: handleChange,
    className: "createServerForm",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react.default.createElement(Form_default.Group, {
    controlId: "id"
  }, /* @__PURE__ */ import_react.default.createElement(Form_default.ControlLabel, null, /* @__PURE__ */ import_react.default.createElement(Stack_default, {
    spacing: 8
  }, /* @__PURE__ */ import_react.default.createElement(Gear_default, null), /* @__PURE__ */ import_react.default.createElement("span", null, "Server Id"))), /* @__PURE__ */ import_react.default.createElement(Form_default.Control, {
    name: "name",
    style: { maxWidth: 196 }
  })), /* @__PURE__ */ import_react.default.createElement(Form_default.Group, {
    controlId: "name"
  }, /* @__PURE__ */ import_react.default.createElement(Form_default.ControlLabel, null, /* @__PURE__ */ import_react.default.createElement(Stack_default, {
    spacing: 8
  }, /* @__PURE__ */ import_react.default.createElement(Gear_default, null), /* @__PURE__ */ import_react.default.createElement("span", null, "Server Name"))), /* @__PURE__ */ import_react.default.createElement(Form_default.Control, {
    name: "id",
    autoComplete: "off",
    style: { maxWidth: 196 }
  })), /* @__PURE__ */ import_react.default.createElement(Form_default.Group, null, /* @__PURE__ */ import_react.default.createElement(Button_default, {
    type: "submit",
    appearance: "primary"
  }, "Create Server")));
};
var CreateServerForm_default = CreateServerForm;

// app/components/FloatBottom/index.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/components/FloatBottom/index.css
var FloatBottom_default = "/build/_assets/index-PIUJ6HFC.css";

// app/components/FloatBottom/index.tsx
var FloatBottom = ({ children }) => /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "floatBottom"
}, children);
var links2 = () => [{ rel: "stylesheet", href: FloatBottom_default }];
var FloatBottom_default2 = FloatBottom;

// app/components/GameVersionSelect/index.tsx
init_react();

// app/components/SelectIcon/index.tsx
init_react();
var import_react4 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// app/components/Icon/index.tsx
init_react();
var import_react3 = __toESM(require_react());
var Icon = ({ name, height = 32, width = 32 }) => /* @__PURE__ */ import_react3.default.createElement("img", {
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
var SelectIcon = ({ name, size }) => /* @__PURE__ */ import_react4.default.createElement("div", {
  className: (0, import_classnames.default)("selectIcon", `selectIcon_size-${size}`),
  style: { background: ICON_COLORS[name] || "transparent" }
}, /* @__PURE__ */ import_react4.default.createElement(Icon_default, {
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
  return /* @__PURE__ */ React.createElement(RadioGroup_default, {
    defaultValue,
    className: "gameVersionSelect",
    inline: true,
    name: "gameVersionSelect",
    onChange: handleChange
  }, filterVersions(gameVersion.versions).map((version) => /* @__PURE__ */ React.createElement(Radio_default, {
    key: version,
    value: version
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    direction: "column",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), version))));
};
var links4 = () => [{ rel: "stylesheet", href: GameVersionSelect_default }, ...links3()];
var GameVersionSelect_default2 = GameVersionSelect;

// app/components/ServerCoreBuilder/index.tsx
init_react();

// app/components/ServerCoreBuilder/Fabric/index.tsx
init_react();
var import_react5 = __toESM(require_react());

// app/components/ServerCoreBuilder/utils.ts
init_react();
var FABRIC_LOADERS_URL = "https://meta.fabricmc.net/v2/versions/loader";
var getFabricServerUrl = (gameVersionId, loaderVersion, installerVersion) => {
  const serverPath = `${gameVersionId}/${loaderVersion}/${installerVersion}/`;
  const serverUrl = `${FABRIC_LOADERS_URL}/${serverPath}server/jar`;
  return serverUrl;
};

// app/components/ServerCoreBuilder/Fabric/index.tsx
var FabricCoreBuilder = ({ gameVersionId, onBuild }) => {
  var _a, _b;
  const [installer, setInstaller] = (0, import_react5.useState)();
  const [loader, setLoader] = (0, import_react5.useState)();
  const fabricInstallers = useFetcher();
  const fabricLoaders = useFetcher();
  (0, import_react5.useEffect)(() => {
    fabricInstallers.submit(null, {
      action: "servers/create/api/fabricInstallers",
      method: "post"
    });
    fabricLoaders.submit(null, {
      action: "servers/create/api/fabricLoaders",
      method: "post"
    });
  }, [gameVersionId]);
  (0, import_react5.useEffect)(() => {
    if (loader && installer) {
      const loaderVersion = loader.version;
      const installerVersion = installer.version;
      const serverInstallerUrl = getFabricServerUrl(gameVersionId, loaderVersion, installerVersion);
      onBuild({
        gameVersion: gameVersionId,
        loader,
        installer,
        serverInstallerUrl
      });
    }
  }, [installer, loader]);
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Panel_default, {
    header: "Fabric Installer Version"
  }, /* @__PURE__ */ React.createElement(RadioGroup_default, {
    className: "fabricInstallerSelect",
    inline: true,
    name: "fabricInstallerSelect",
    onChange: handleInstallerChange
  }, ((_a = fabricInstallers.data) == null ? void 0 : _a.success) && fabricInstallers.data.data.map((installer2) => /* @__PURE__ */ React.createElement(Radio_default, {
    key: installer2.version,
    value: installer2.version
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    direction: "row",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), installer2.version))))), /* @__PURE__ */ React.createElement(Panel_default, {
    header: "Fabric Loader Version"
  }, /* @__PURE__ */ React.createElement(RadioGroup_default, {
    className: "fabricLoaderSelect",
    inline: true,
    name: "fabricLoaderSelect",
    onChange: handleLoaderChange
  }, ((_b = fabricLoaders.data) == null ? void 0 : _b.success) && fabricLoaders.data.data.map((loader2) => /* @__PURE__ */ React.createElement(Radio_default, {
    key: loader2.version,
    value: loader2.version
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    direction: "row",
    spacing: 8,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(SelectIcon_default2, {
    name: "minecraft"
  }), loader2.version))))));
};
var Fabric_default = FabricCoreBuilder;

// app/components/ServerCoreBuilder/Forge/index.tsx
init_react();
var import_react7 = __toESM(require_react());
var ForgeCoreBuilder = ({ gameVersionId, onBuild }) => {
  var _a;
  const forgeCores = useFetcher();
  (0, import_react7.useEffect)(() => {
    forgeCores.submit({ version: gameVersionId }, { action: "servers/create/api/forgeCores", method: "post" });
  }, [gameVersionId]);
  const handleChange = (value) => {
    var _a2;
    const core = (_a2 = forgeCores.data) == null ? void 0 : _a2.data.find((core2) => core2.coreVersion === value);
    if (core)
      onBuild(core);
  };
  return /* @__PURE__ */ React.createElement(Panel_default, {
    header: "Forge Core Version"
  }, /* @__PURE__ */ React.createElement(RadioGroup_default, {
    className: "forgeCoreSelect",
    inline: true,
    name: "forgeCoreSelect",
    onChange: handleChange
  }, ((_a = forgeCores.data) == null ? void 0 : _a.success) && forgeCores.data.data.map((core) => /* @__PURE__ */ React.createElement(Radio_default, {
    key: core.coreVersion,
    value: core.coreVersion
  }, /* @__PURE__ */ React.createElement(Stack_default, {
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
  const handleForgeBuild = (core) => onBuild({ type: "forge", ...core });
  const handleFabricBuild = (core) => onBuild({ type: "fabric", ...core });
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
var links5 = () => [{ rel: "stylesheet", href: ServerCoreBuilder_default }];
var ServerCoreBuilder_default2 = ServerCoreBuilder;

// app/components/ServerCoreTypeSelect/index.tsx
init_react();
var import_react9 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());

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
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    role: "presentation",
    className: (0, import_classnames2.default)("serverCoreType", { serverCoreType_active: active }),
    onClick: handleClick
  }, /* @__PURE__ */ import_react9.default.createElement(SelectIcon_default2, {
    name: icon,
    size: "l"
  }), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "serverCoreType__title"
  }, /* @__PURE__ */ import_react9.default.createElement("b", null, title)), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "serverCoreType__description"
  }, /* @__PURE__ */ import_react9.default.createElement("span", null, description)));
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
  return /* @__PURE__ */ import_react9.default.createElement(RadioGroup_default, {
    defaultValue,
    className: "serverCoreSelect",
    inline: true,
    name: "serverCoreSelect",
    onChange: handleChange
  }, SERVER_CORE_TYPES.map((serverCoreType) => /* @__PURE__ */ import_react9.default.createElement(Radio_default, {
    key: serverCoreType.id,
    value: serverCoreType.id
  }, /* @__PURE__ */ import_react9.default.createElement(ServerCoreType, {
    title: serverCoreType.title,
    description: serverCoreType.description,
    icon: serverCoreType.icon
  }))));
};
var links6 = () => [{ rel: "stylesheet", href: ServerCoreTypeSelect_default }];
var ServerCoreTypeSelect_default2 = ServerCoreTypeSelect;

// app/components/VersionTypeSelect/index.tsx
init_react();

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
  return /* @__PURE__ */ React.createElement(RadioGroup_default, {
    defaultValue,
    className: "versionTypeSelect",
    name: "version",
    inline: true,
    appearance: "picker",
    onChange: handleChange
  }, filterVersionTypes(versionTypes).map((version) => /* @__PURE__ */ React.createElement(Radio_default, {
    key: version.id,
    value: version.id
  }, formatVersionTypeName(version.name))));
};
var links7 = () => [{ rel: "stylesheet", href: VersionTypeSelect_default }];
var VersionTypeSelect_default2 = VersionTypeSelect;

// app/routes/servers/create/index.tsx
var meta = () => ({ title: "RanaMC | Servers" });
var findGameVersionByVersionTypeId = (gameVersions = [], versionTypeId = -1) => gameVersions == null ? void 0 : gameVersions.find((el) => el.type === versionTypeId);
var CreateIndexRoute = () => {
  const submit = useSubmit();
  const [versionTypeId, setVersionTypeId] = (0, import_react10.useState)();
  const [gameVersionId, setGameVersionId] = (0, import_react10.useState)();
  const [serverCoreTypeId, setServerCoreTypeId] = (0, import_react10.useState)();
  const [serverCore, setServerCore] = (0, import_react10.useState)();
  const versionTypes = useLoaderData();
  const gameVersions = useFetcher();
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
  const gameVersion = (0, import_react10.useMemo)(() => findGameVersionByVersionTypeId(gameVersions.data, versionTypeId), [versionTypeId, gameVersions]);
  return /* @__PURE__ */ React.createElement(Layout_default, {
    pageTitle: "Create Server",
    path: ["Home", "Servers"]
  }, /* @__PURE__ */ React.createElement(Panel_default, {
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
  })), /* @__PURE__ */ React.createElement(Panel_default, {
    style: { backgroundColor: "#fff", marginBottom: 32 },
    header: /* @__PURE__ */ React.createElement("h4", {
      style: { fontWeight: 600 }
    }, "Server Type"),
    bordered: true
  }, /* @__PURE__ */ React.createElement(ServerCoreTypeSelect_default2, {
    defaultValue: serverCoreTypeId,
    onChange: handleServerCoreTypeIdChange
  })), /* @__PURE__ */ React.createElement(Panel_default, {
    style: { backgroundColor: "#fff", marginBottom: 32 },
    header: /* @__PURE__ */ React.createElement("h4", {
      style: { fontWeight: 600 }
    }, "Core"),
    bordered: true
  }, serverCoreTypeId && /* @__PURE__ */ React.createElement(ServerCoreBuilder_default2, {
    gameVersionId,
    coreTypeId: serverCoreTypeId,
    onBuild: handleServerCoreBuild
  })), /* @__PURE__ */ React.createElement(FloatBottom_default2, null, /* @__PURE__ */ React.createElement(Panel_default, {
    style: { backgroundColor: "#F5F5F5" },
    bordered: true
  }, /* @__PURE__ */ React.createElement(CreateServerForm_default, {
    onSubmit: handleCreateServerFormSubmit
  }))));
};
var links8 = () => [
  ...links(),
  ...links2(),
  ...links4(),
  ...links5(),
  ...links6(),
  ...links7()
];
var create_default = CreateIndexRoute;
export {
  create_default as default,
  links8 as links,
  meta
};
//# sourceMappingURL=/build/routes/servers/create/index-4P53WVZN.js.map
