import {
  require_AppSelect,
  require_Code,
  require_DocPass,
  require_Tools
} from "/build/_shared/chunk-RL4FJXOS.js";
import {
  require_axios
} from "/build/_shared/chunk-BE4337DZ.js";
import {
  Layout_default,
  MOBILE_QUREY,
  links,
  useMediaQuery
} from "/build/_shared/chunk-MM4CHJN6.js";
import {
  Badge_default,
  ButtonToolbar_default,
  Button_default,
  Col_default,
  Divider_default,
  Grid_default,
  PanelGroup_default,
  Panel_default,
  Row_default,
  Stack_default,
  Tag_default,
  Toggle_default
} from "/build/_shared/chunk-ONHQF53P.js";
import {
  ranaSocket
} from "/build/_shared/chunk-V267VHTX.js";
import {
  require_classnames
} from "/build/_shared/chunk-HDFV5ATS.js";
import {
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-57WMN2SD.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BKLLZ3ZO.js";

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    init_react();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce2;
  }
});

// browser-route-module:/Users/ebykovskikh/Desktop/web/app/routes/servers/$id/index.tsx?browser
init_react();

// app/routes/servers/$id/index.tsx
init_react();
var import_axios = __toESM(require_axios());

// app/components/ServerCardLarge/index.tsx
init_react();
var import_Code = __toESM(require_Code());
var import_Tools = __toESM(require_Tools());
var import_AppSelect = __toESM(require_AppSelect());
var import_DocPass = __toESM(require_DocPass());

// app/components/ServerLogs/index.tsx
init_react();
var import_react = __toESM(require_react());
var import_lodash = __toESM(require_lodash());

// app/components/ServerLogs/index.css
var ServerLogs_default = "/build/_assets/index-3YDOVAJF.css";

// app/components/ServerLogs/utils.ts
init_react();
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
  const [logs, setLogs] = (0, import_react.useState)([]);
  const handleLogAppend = (0, import_react.useCallback)((0, import_lodash.default)((logsToUpdate) => setLogs(prepareLines(logsToUpdate.slice(-LAST_LOGS_COUNT))), UPDATE_LOGS_DELAY), []);
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
var links2 = () => [{ rel: "stylesheet", href: ServerLogs_default }];
var ServerLogs_default2 = ServerLogs;

// app/components/ServerCardLarge/index.css
var ServerCardLarge_default = "/build/_assets/index-NSPY25RJ.css";

// app/components/Badge/index.tsx
init_react();
var import_classnames = __toESM(require_classnames());

// app/components/Badge/index.css
var Badge_default2 = "/build/_assets/index-DDNYBECA.css";

// app/components/Badge/index.tsx
var Badge = ({ content, color, altColor }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("badge", `badge_${altColor}`)
  }, /* @__PURE__ */ React.createElement(Badge_default, {
    content,
    color
  }));
};
var links3 = () => [{ rel: "stylesheet", href: Badge_default2 }];
var Badge_default3 = Badge;

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
  return /* @__PURE__ */ React.createElement(PanelGroup_default, {
    style: { backgroundColor: "#fff" },
    accordion: true,
    bordered: true
  }, /* @__PURE__ */ React.createElement(Panel_default, {
    defaultExpanded: true,
    collapsible: false
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "flex-start",
    spacing: 12
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "serverCardLarge__header"
  }, server.name), /* @__PURE__ */ React.createElement(Badge_default3, {
    altColor: "grey",
    content: server.id
  })), /* @__PURE__ */ React.createElement(Tag_default, {
    size: "sm",
    color: "cyan"
  }, server.status))), /* @__PURE__ */ React.createElement(Grid_default, {
    fluid: true
  }, /* @__PURE__ */ React.createElement(Row_default, null, /* @__PURE__ */ React.createElement(Col_default, {
    xs: isMobile ? 24 : 12
  }, /* @__PURE__ */ React.createElement(Panel_default, {
    collapsible: true,
    defaultExpanded: true
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    direction: "column",
    alignItems: "stretch",
    divider: /* @__PURE__ */ React.createElement(Divider_default, {
      className: "serverCardLarge__divider"
    })
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Code.default, null), server.gameVersion), /* @__PURE__ */ React.createElement(Stack_default, null, server.gameVersion)), /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_Tools.default, null), /* @__PURE__ */ React.createElement("span", {
    style: { textTransform: "capitalize" }
  }, server.core.type)), /* @__PURE__ */ React.createElement(Stack_default, null, "...")), /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_AppSelect.default, null), "Mods"), /* @__PURE__ */ React.createElement(Stack_default, null, server.mods.length)), /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Stack_default, {
    alignItems: "center",
    spacing: 8
  }, /* @__PURE__ */ React.createElement(import_DocPass.default, null), "EULA"), /* @__PURE__ */ React.createElement(Stack_default, null, /* @__PURE__ */ React.createElement(Toggle_default, {
    defaultChecked: server.eula,
    onChange: handleEulaChange
  }))))), /* @__PURE__ */ React.createElement(Panel_default, {
    bodyFill: true,
    defaultExpanded: true,
    className: "serverCardLarge__footer"
  }, /* @__PURE__ */ React.createElement(ButtonToolbar_default, null, /* @__PURE__ */ React.createElement(Stack_default, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(Button_default, {
    appearance: "link",
    color: "red",
    size: "md",
    disabled: !(server.status === "created" /* Created */ || server.status === "stopped" /* Stopped */),
    onClick: handleRemove
  }, server.status === "removing" /* Removing */ ? "Removing..." : "Remove"), /* @__PURE__ */ React.createElement(Stack_default, {
    spacing: 12
  }, /* @__PURE__ */ React.createElement(Button_default, {
    appearance: "link",
    color: "cyan",
    disabled: server.status === "coreInstalled" /* CoreInstalled */ || server.status === "coreInstalling" /* CoreInstalling */,
    size: "md",
    onClick: handleInstall
  }, server.status === "coreInstalling" /* CoreInstalling */ ? "Installing..." : "Install"), /* @__PURE__ */ React.createElement(Button_default, {
    appearance: "link",
    color: "orange",
    disabled: server.status === "stopping" /* Stopping */ || server.status === "stopped" /* Stopped */,
    size: "md",
    onClick: handleStop
  }, server.status === "stopping" /* Stopping */ ? "Stopping..." : "Stop"), /* @__PURE__ */ React.createElement(Button_default, {
    appearance: "ghost",
    disabled: server.status === "starting" /* Starting */ || server.status === "started" /* Started */,
    size: "md",
    onClick: handleStart
  }, server.status === "starting" /* Starting */ ? "Starting..." : "Start")))))), /* @__PURE__ */ React.createElement(Col_default, {
    xs: isMobile ? 24 : 12
  }, /* @__PURE__ */ React.createElement(Panel_default, {
    collapsible: true,
    defaultExpanded: true,
    header: "Logs"
  }, /* @__PURE__ */ React.createElement(ServerLogs_default2, null))))));
};
var links4 = () => [
  { rel: "stylesheet", href: ServerCardLarge_default },
  ...links2(),
  ...links3()
];
var ServerCardLarge_default2 = ServerCardLarge;

// app/routes/servers/$id/index.tsx
var import_react3 = __toESM(require_react());
var Server = () => {
  const submit = useSubmit();
  const initialServer = useLoaderData();
  const [server, setServer] = (0, import_react3.useState)();
  (0, import_react3.useEffect)(() => {
    setServer(initialServer.data);
  }, [initialServer.data]);
  (0, import_react3.useEffect)(() => {
    ranaSocket.on("serverUpdate" /* ServerUpdate */, (server2) => {
      setServer(server2);
    });
  }, []);
  if (!server) {
    return /* @__PURE__ */ React.createElement(Layout_default, {
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
  return /* @__PURE__ */ React.createElement(Layout_default, {
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
var meta = () => ({ title: "RanaMC | Server" });
var links5 = () => [...links(), ...links4()];
var id_default = Server;
export {
  id_default as default,
  links5 as links,
  meta
};
//# sourceMappingURL=/build/routes/servers/$id/index-SACR6FWU.js.map
