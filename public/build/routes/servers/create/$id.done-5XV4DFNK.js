import {
  ranaSocket
} from "/build/_shared/chunk-V267VHTX.js";
import {
  Loader_default
} from "/build/_shared/chunk-HDFV5ATS.js";
import {
  useParams,
  useSubmit
} from "/build/_shared/chunk-57WMN2SD.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BKLLZ3ZO.js";

// browser-route-module:/Users/ebykovskikh/Desktop/web/app/routes/servers/create/$id.done.tsx?browser
init_react();

// app/routes/servers/create/$id.done.tsx
init_react();
var import_react2 = __toESM(require_react());
var Done = () => {
  const submit = useSubmit();
  const params = useParams();
  (0, import_react2.useEffect)(() => {
    ranaSocket.emit("flushServers" /* FlushServers */);
    submit(null, { action: `/servers/${params == null ? void 0 : params.id}` });
  }, []);
  return /* @__PURE__ */ React.createElement(Loader_default, null);
};
var id_done_default = Done;
export {
  id_done_default as default
};
//# sourceMappingURL=/build/routes/servers/create/$id.done-5XV4DFNK.js.map
