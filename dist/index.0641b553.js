// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hklly":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _country = require("./Country");
var _countryDefault = parcelHelpers.interopDefault(_country);
var _data = require("./data");
"use strict";
// afficher toutes les données
console.log((0, _data.countries));
const getCountry = function(country) {
    // element input
    const inputText = document.querySelector("input");
    // bouton search
    const buttonSearch = document.querySelector("button");
    buttonSearch.addEventListener("click", ()=>{
        console.log("click");
    });
    // element container pour afficher les pays
    const container = document.querySelector(".results");
    // aller chercher les données // j'ai pris la suisse car je n'arrivais pas a afficher tous els pays
    // si je mets un pays à la place de "country" ca marche
    // afficher les donn
    // j'arrivais pas a prendre country
    // j'aurai mis fetch  -> fetch("https://restcountries.com/v3.1/name/${country}")
    fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((data)=>{
        const dataCleaned = data;
        console.log(dataCleaned); // affiche la ligne name - donc utiliser que ca
        // prendre du
        //   const country = new Country(
        //     country.flag,
        //     country.name.comon,
        //     country.population,
        //     country.subregion,
        //     country.picture.large,
        //     country.maps.openStreetMaps
        //   );
        // pour chaque pays
        data.forEach(function(country) {
            const nomPays = dataCleaned.name;
            const container = document.querySelector(".results");
            const population = country.population;
            // console.log(population);
            const subregion = country.subregion;
            // console.log(subregion);
            const html = `<div class="country--card">
		<p class="country--flag">${country.flag}</p>
		<div class="country--info">
				<h1>${country.name.common}</h1>
				<p>population: ${country.population}</p>
				<p>region: ${country.subregion}</p>
		</div>
		<a class="country--map" href=${country.maps.openStreetMaps} target="_blank">
				<span class="map">📍</span>
		</a>
</div>`;
            container.insertAdjacentHTML("beforeend", html);
        });
        // BOUTON CLICK NORMAL
        buttonSearch.addEventListener("click", ()=>{
            const inputText = document.querySelector("input");
            const country = inputText.value;
            console.log(inputText.value);
        // si le pays est dedans la liste on va l'afficher - prendre le pays
        });
        // BOUTON AVEC CLAVIER
        buttonSearch.addEventListener("keyup", function(e) {
            if (e.key === "enter") {
                alert("pressed");
                const message = document.querySelector(".results");
                console.log(message);
                const country = inputText.value;
                // message "pas de pays dipso "
                // Si la recherche ne correspond a aucun pays, l’app affiche un message d’erreur à l’utilisateur.trice.
                if (country.name.common === "South africa ") message.textContent = "Couldn’t find country";
            }
        });
        // TRIER PAR ORDRE DE POPULATION
        buttonSearch.addEventListener("click", ()=>{
            const countriesArray = Array.from((0, _data.countries));
            countriesArray.sort((a, b)=>{
                const populationA = parseInt(a.querySelector(".user--info p").textContent[0]);
                const populationB = parseInt(b.querySelector(".user--info p").textContent[0]);
                console.log(populationA);
                return populationA - populationB;
            });
            container.innerHTML = " ";
            countriesArray.forEach((country)=>{
                container.appendChild(country);
            });
        //
        });
    });
};
getCountry("");

},{"./Country":"f22xG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./data":"9kapS"}],"f22xG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Country {
    constructor(nomPays, drapeau, population, region, lien){
        this.nomPays = nomPays;
        this.drapeau = drapeau;
        this.population = population;
        this.region = region;
        this.lien = lien;
    }
}
exports.default = Country;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9kapS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countries", ()=>countries);
const countries = [
    {
        name: {
            common: "Saudi Arabia",
            official: "Kingdom of Saudi Arabia",
            nativeName: {
                ara: {
                    official: "المملكة العربية السعودية",
                    common: "العربية السعودية"
                }
            }
        },
        tld: [
            ".sa",
            ".السعودية"
        ],
        cca2: "SA",
        ccn3: "682",
        cca3: "SAU",
        cioc: "KSA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            SAR: {
                name: "Saudi riyal",
                symbol: "ر.س"
            }
        },
        idd: {
            root: "+9",
            suffixes: [
                "66"
            ]
        },
        capital: [
            "Riyadh"
        ],
        altSpellings: [
            "Saudi",
            "SA",
            "Kingdom of Saudi Arabia",
            "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
        ],
        region: "Asia",
        subregion: "Western Asia",
        languages: {
            ara: "Arabic"
        },
        translations: {
            ara: {
                official: "المملكة العربية السعودية",
                common: "السعودية"
            },
            bre: {
                official: "Rouantelezh Arabia Saoudat",
                common: "Arabia Saoudat"
            },
            ces: {
                official: "Sa\xfadskoarabsk\xe9 kr\xe1lovstv\xed",
                common: "Sa\xfadsk\xe1 Ar\xe1bie"
            },
            cym: {
                official: "Kingdom of Saudi Arabia",
                common: "Saudi Arabia"
            },
            deu: {
                official: "K\xf6nigreich Saudi-Arabien",
                common: "Saudi-Arabien"
            },
            est: {
                official: "Saudi Araabia Kuningriik",
                common: "Saudi Araabia"
            },
            fin: {
                official: "Saudi-Arabian kuningaskunta",
                common: "Saudi-Arabia"
            },
            fra: {
                official: "Royaume d'Arabie Saoudite",
                common: "Arabie Saoudite"
            },
            hrv: {
                official: "Kraljevina Saudijska Arabija",
                common: "Saudijska Arabija"
            },
            hun: {
                official: "Sza\xfad-Ar\xe1bia",
                common: "Sza\xfad-Ar\xe1bia"
            },
            ita: {
                official: "Arabia Saudita",
                common: "Arabia Saudita"
            },
            jpn: {
                official: "サウジアラビア王国",
                common: "サウジアラビア"
            },
            kor: {
                official: "사우디아라비아 왕국",
                common: "사우디아라비아"
            },
            nld: {
                official: "Koninkrijk van Saoedi-Arabi\xeb",
                common: "Saoedi-Arabi\xeb"
            },
            per: {
                official: "پادشاهی عربی سَعودی",
                common: "عربستان سعودی"
            },
            pol: {
                official: "Kr\xf3lestwo Arabii Saudyjskiej",
                common: "Arabia Saudyjska"
            },
            por: {
                official: "Reino da Ar\xe1bia Saudita",
                common: "Ar\xe1bia Saudita"
            },
            rus: {
                official: "Королевство Саудовская Аравия",
                common: "Саудовская Аравия"
            },
            slk: {
                official: "Saudskoarabsk\xe9 kr\xe1ľovstvo",
                common: "Saudsk\xe1 Ar\xe1bia"
            },
            spa: {
                official: "Reino de Arabia Saudita",
                common: "Arabia Saud\xed"
            },
            srp: {
                official: "Краљевина Саудијска Арабија",
                common: "Саудијска Арабија"
            },
            swe: {
                official: "Kungad\xf6met Saudiarabien",
                common: "Saudiarabien"
            },
            tur: {
                official: "Suudi Arabistan Krallığı",
                common: "Suudi Arabistan"
            },
            urd: {
                official: "مملکتِ سعودی عرب",
                common: "سعودی عرب"
            },
            zho: {
                official: "沙特阿拉伯王国",
                common: "沙特阿拉伯"
            }
        },
        latlng: [
            25,
            45
        ],
        landlocked: false,
        borders: [
            "IRQ",
            "JOR",
            "KWT",
            "OMN",
            "QAT",
            "ARE",
            "YEM"
        ],
        area: 2149690,
        demonyms: {
            eng: {
                f: "Saudi Arabian",
                m: "Saudi Arabian"
            },
            fra: {
                f: "Saoudienne",
                m: "Saoudien"
            }
        },
        flag: "\uD83C\uDDF8\uD83C\uDDE6",
        maps: {
            googleMaps: "https://goo.gl/maps/5PSjvdJ1AyaLFRrG9",
            openStreetMaps: "https://www.openstreetmap.org/relation/307584"
        },
        population: 34813867,
        fifa: "KSA",
        car: {
            signs: [
                "SA"
            ],
            side: "right"
        },
        timezones: [
            "UTC+03:00"
        ],
        continents: [
            "Asia"
        ],
        flags: {
            png: "https://flagcdn.com/w320/sa.png",
            svg: "https://flagcdn.com/sa.svg",
            alt: "The flag of Saudi Arabia has a green field, at the center of which is an Arabic inscription — the Shahada — in white above a white horizontal sabre with its tip pointed to the hoist side of the field."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/sa.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/sa.svg"
        },
        startOfWeek: "sunday",
        capitalInfo: {
            latlng: [
                24.65,
                46.7
            ]
        },
        postalCode: {
            format: "#####",
            regex: "^(\\d{5})$"
        }
    },
    {
        name: {
            common: "El Salvador",
            official: "Republic of El Salvador",
            nativeName: {
                spa: {
                    official: "Rep\xfablica de El Salvador",
                    common: "El Salvador"
                }
            }
        },
        tld: [
            ".sv"
        ],
        cca2: "SV",
        ccn3: "222",
        cca3: "SLV",
        cioc: "ESA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "03"
            ]
        },
        capital: [
            "San Salvador"
        ],
        altSpellings: [
            "SV",
            "Republic of El Salvador",
            "Rep\xfablica de El Salvador"
        ],
        region: "Americas",
        subregion: "Central America",
        languages: {
            spa: "Spanish"
        },
        translations: {
            ara: {
                official: "جمهورية السلفادور",
                common: "السلفادور"
            },
            bre: {
                official: "Republik El Salvador",
                common: "El Salvador"
            },
            ces: {
                official: "Salvadorsk\xe1 republika",
                common: "Salvador"
            },
            cym: {
                official: "Gweriniaeth El Salfador",
                common: "El Salfador"
            },
            deu: {
                official: "Republik El Salvador",
                common: "El Salvador"
            },
            est: {
                official: "El Salvadori Vabariik",
                common: "El Salvador"
            },
            fin: {
                official: "El Salvadorin tasavalta",
                common: "El Salvador"
            },
            fra: {
                official: "R\xe9publique du Salvador",
                common: "Salvador"
            },
            hrv: {
                official: "Republika El Salvador",
                common: "Salvador"
            },
            hun: {
                official: "Salvadori K\xf6zt\xe1rsas\xe1g",
                common: "Salvador"
            },
            ita: {
                official: "Repubblica di El Salvador",
                common: "El Salvador"
            },
            jpn: {
                official: "エルサルバドル共和国",
                common: "エルサルバドル"
            },
            kor: {
                official: "엘살바도르 공화국",
                common: "엘살바도르"
            },
            nld: {
                official: "Republiek El Salvador",
                common: "El Salvador"
            },
            per: {
                official: "جمهوری السالوادور",
                common: "السالوادور"
            },
            pol: {
                official: "Republika Salwadoru",
                common: "Salwador"
            },
            por: {
                official: "Rep\xfablica de El Salvador",
                common: "El Salvador"
            },
            rus: {
                official: "Республика Эль-Сальвадор",
                common: "Сальвадор"
            },
            slk: {
                official: "Salv\xe1dorsk\xe1 republika",
                common: "Salv\xe1dor"
            },
            spa: {
                official: "Rep\xfablica de El Salvador",
                common: "El Salvador"
            },
            srp: {
                official: "Република Ел Салвадор",
                common: "Салвадор"
            },
            swe: {
                official: "Republiken El Salvador",
                common: "El Salvador"
            },
            tur: {
                official: "El Salvador Cumhuriyeti",
                common: "El Salvador"
            },
            urd: {
                official: "جمہوریہ ایل سیلواڈور",
                common: "ایل سیلواڈور"
            },
            zho: {
                official: "萨尔瓦多共和国",
                common: "萨尔瓦多"
            }
        },
        latlng: [
            13.83333333,
            -88.91666666
        ],
        landlocked: false,
        borders: [
            "GTM",
            "HND"
        ],
        area: 21041,
        demonyms: {
            eng: {
                f: "Salvadoran",
                m: "Salvadoran"
            },
            fra: {
                f: "Salvadorienne",
                m: "Salvadorien"
            }
        },
        flag: "\uD83C\uDDF8\uD83C\uDDFB",
        maps: {
            googleMaps: "https://goo.gl/maps/cZnCEi5sEMQtKKcB7",
            openStreetMaps: "https://www.openstreetmap.org/relation/1520612"
        },
        population: 6486201,
        gini: {
            2019: 38.8
        },
        fifa: "SLV",
        car: {
            signs: [
                "ES"
            ],
            side: "right"
        },
        timezones: [
            "UTC-06:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/sv.png",
            svg: "https://flagcdn.com/sv.svg",
            alt: "The flag of El Salvador is composed of three equal horizontal bands of cobalt blue, white and cobalt blue, with the national coat of arms centered in the white band."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/sv.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/sv.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                13.7,
                -89.2
            ]
        },
        postalCode: {
            format: "CP ####",
            regex: "^(?:CP)*(\\d{4})$"
        }
    },
    {
        name: {
            common: "Timor-Leste",
            official: "Democratic Republic of Timor-Leste",
            nativeName: {
                por: {
                    official: "Rep\xfablica Democr\xe1tica de Timor-Leste",
                    common: "Timor-Leste"
                },
                tet: {
                    official: "Rep\xfablika Demokr\xe1tika Tim\xf3r-Leste",
                    common: "Tim\xf3r-Leste"
                }
            }
        },
        tld: [
            ".tl"
        ],
        cca2: "TL",
        ccn3: "626",
        cca3: "TLS",
        cioc: "TLS",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+6",
            suffixes: [
                "70"
            ]
        },
        capital: [
            "Dili"
        ],
        altSpellings: [
            "TL",
            "East Timor",
            "Democratic Republic of Timor-Leste",
            "Rep\xfablica Democr\xe1tica de Timor-Leste",
            "Rep\xfablika Demokr\xe1tika Tim\xf3r-Leste",
            "Tim\xf3r Lorosa'e",
            "Timor Lorosae"
        ],
        region: "Asia",
        subregion: "South-Eastern Asia",
        languages: {
            por: "Portuguese",
            tet: "Tetum"
        },
        translations: {
            ara: {
                official: "جمهورية تيمور الشرقية الديمقراطية",
                common: "تيمور الشرقية"
            },
            bre: {
                official: "Republik demakratel Timor ar Reter",
                common: "Timor ar Reter"
            },
            ces: {
                official: "Demokratick\xe1 republika V\xfdchodn\xed Timor",
                common: "V\xfdchodn\xed Timor"
            },
            cym: {
                official: "Democratic Republic of Timor-Leste",
                common: "Timor-Leste"
            },
            deu: {
                official: "Demokratische Republik Timor-Leste",
                common: "Osttimor"
            },
            est: {
                official: "Timor-Leste Demokraatlik Vabariik",
                common: "Ida-Timor"
            },
            fin: {
                official: "It\xe4-Timorin demokraattinen tasavalta",
                common: "It\xe4-Timor"
            },
            fra: {
                official: "R\xe9publique d\xe9mocratique du Timor oriental",
                common: "Timor oriental"
            },
            hrv: {
                official: "Demokratska Republika Timor-Leste",
                common: "Istočni Timor"
            },
            hun: {
                official: "Kelet-timori Demokratikus K\xf6zt\xe1rsas\xe1g",
                common: "Kelet-Timor"
            },
            ita: {
                official: "Repubblica Democratica di Timor Est",
                common: "Timor Est"
            },
            jpn: {
                official: "東ティモール民主共和国",
                common: "東ティモール"
            },
            kor: {
                official: "동티모르 민주 공화국",
                common: "동티모르"
            },
            nld: {
                official: "Democratische Republiek Oost-Timor",
                common: "Oost-Timor"
            },
            per: {
                official: "جمهوری دموکراتیک تیمور شرقی",
                common: "تیمور شرقی"
            },
            pol: {
                official: "Demokratyczna Republika Timoru Wschodniego",
                common: "Timor Wschodni"
            },
            por: {
                official: "Rep\xfablica Democr\xe1tica de Timor-Leste",
                common: "Timor-Leste"
            },
            rus: {
                official: "Демократическая Республика Тимор -Лешти",
                common: "Восточный Тимор"
            },
            slk: {
                official: "V\xfdchodotimorsk\xe1 demokratick\xe1 republika",
                common: "V\xfdchodn\xfd Timor"
            },
            spa: {
                official: "Rep\xfablica Democr\xe1tica de Timor-Leste",
                common: "Timor Oriental"
            },
            srp: {
                official: "Демократска Република Источни Тимор",
                common: "Источни Тимор"
            },
            swe: {
                official: "Demokratiska republiken \xd6sttimor",
                common: "\xd6sttimor"
            },
            tur: {
                official: "Doğu Timor Demokratik Cumhuriyeti",
                common: "Doğu Timor"
            },
            urd: {
                official: "جمہوری جمہوریہ مشرقی تیمور",
                common: "مشرقی تیمور"
            },
            zho: {
                official: "东帝汶民主共和国",
                common: "东帝汶"
            }
        },
        latlng: [
            -8.83333333,
            125.91666666
        ],
        landlocked: false,
        borders: [
            "IDN"
        ],
        area: 14874,
        demonyms: {
            eng: {
                f: "East Timorese",
                m: "East Timorese"
            },
            fra: {
                f: "Est-timoraise",
                m: "Est-timorais"
            }
        },
        flag: "\uD83C\uDDF9\uD83C\uDDF1",
        maps: {
            googleMaps: "https://goo.gl/maps/sFqBC9zjgUXPR1iTA",
            openStreetMaps: "https://www.openstreetmap.org/relation/305142"
        },
        population: 1318442,
        gini: {
            2014: 28.7
        },
        fifa: "TLS",
        car: {
            signs: [
                "TL"
            ],
            side: "left"
        },
        timezones: [
            "UTC+09:00"
        ],
        continents: [
            "Oceania"
        ],
        flags: {
            png: "https://flagcdn.com/w320/tl.png",
            svg: "https://flagcdn.com/tl.svg",
            alt: "The flag of Timor-Leste has a red field with two isosceles triangles which share a common base on the hoist end. The smaller black triangle, which bears a five-pointed white star at its center and spans one-third the width of the field, is superimposed on the larger yellow triangle that extends to the center of the field."
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -8.58,
                125.6
            ]
        }
    },
    {
        name: {
            common: "Saint Kitts and Nevis",
            official: "Federation of Saint Christopher and Nevis",
            nativeName: {
                eng: {
                    official: "Federation of Saint Christopher and Nevis",
                    common: "Saint Kitts and Nevis"
                }
            }
        },
        tld: [
            ".kn"
        ],
        cca2: "KN",
        ccn3: "659",
        cca3: "KNA",
        cioc: "SKN",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+1",
            suffixes: [
                "869"
            ]
        },
        capital: [
            "Basseterre"
        ],
        altSpellings: [
            "KN",
            "Federation of Saint Christopher and Nevis"
        ],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            eng: "English"
        },
        translations: {
            ara: {
                official: "اتحاد القديس كريستوفر ونيفيس",
                common: "سانت كيتس ونيفيس"
            },
            bre: {
                official: "Kevread Saint Kitts ha Nevis",
                common: "Saint Kitts ha Nevis"
            },
            ces: {
                official: "Federace Sv. Kryštof a Nevis",
                common: "Svat\xfd Kryštof a Nevis"
            },
            cym: {
                official: "Federation of Saint Christopher and Nevis",
                common: "Saint Kitts and Nevis"
            },
            deu: {
                official: "F\xf6deration von St. Kitts und Nevis",
                common: "St. Kitts und Nevis"
            },
            est: {
                official: "Saint Kittsi ja Nevise F\xf6deratsioon",
                common: "Saint Kitts ja Nevis"
            },
            fin: {
                official: "Saint Christopherin ja Nevisin federaatio",
                common: "Saint Kitts ja Nevis"
            },
            fra: {
                official: "F\xe9d\xe9ration de Saint-Christophe-et-Ni\xe9v\xe8s",
                common: "Saint-Christophe-et-Ni\xe9v\xe8s"
            },
            hrv: {
                official: "Federacija Sv.Kristofora i Nevisa",
                common: "Sveti Kristof i Nevis"
            },
            hun: {
                official: "Saint Christopher \xe9s Nevis \xc1llamsz\xf6vets\xe9g",
                common: "Saint Kitts \xe9s Nevis"
            },
            ita: {
                official: "Federazione di Saint Christopher e Nevis",
                common: "Saint Kitts e Nevis"
            },
            jpn: {
                official: "セントクリストファーNevis連盟",
                common: "セントクリストファー・ネイビス"
            },
            kor: {
                official: "세인트키츠 네비스 연방",
                common: "세인트키츠 네비스"
            },
            nld: {
                official: "Federatie van Saint Kitts en Nevis",
                common: "Saint Kitts en Nevis"
            },
            per: {
                official: "فدراسیون سنت کیتس و نویس",
                common: "سنت کیتس و نویس"
            },
            pol: {
                official: "Federacja Saint Kitts i Nevis",
                common: "Saint Kitts i Nevis"
            },
            por: {
                official: "Federa\xe7\xe3o de S\xe3o Crist\xf3v\xe3o e Nevis",
                common: "S\xe3o Crist\xf3v\xe3o e Nevis"
            },
            rus: {
                official: "Федерация Сент-Кристофер и Н е в и с",
                common: "Сент-Китс и Невис"
            },
            slk: {
                official: "Feder໡cia Sv\xe4t\xe9ho Krištofa a Nevisu",
                common: "Sv\xe4t\xfd Krištof a Nevis"
            },
            spa: {
                official: "Federaci\xf3n de San Crist\xf3bal y Nevis",
                common: "San Crist\xf3bal y Nieves"
            },
            srp: {
                official: "Федерација Свети Кристофер и Невис",
                common: "Сент Китс и Невис"
            },
            swe: {
                official: "Federationen Saint Kitts och Nevis",
                common: "Saint Kitts och Nevis"
            },
            tur: {
                official: "Saint Kitts ve Nevis Federasyonu",
                common: "Saint Kitts ve Nevis"
            },
            urd: {
                official: "وفاقِ سینٹ کیٹز و ناویس",
                common: "سینٹ کیٹز و ناویس"
            },
            zho: {
                official: "圣克里斯托弗和尼维斯联邦",
                common: "圣基茨和尼维斯"
            }
        },
        latlng: [
            17.33333333,
            -62.75
        ],
        landlocked: false,
        area: 261,
        demonyms: {
            eng: {
                f: "Kittitian or Nevisian",
                m: "Kittitian or Nevisian"
            },
            fra: {
                f: "Kittitienne-et-nevicienne",
                m: "Kittitien-et-nevicien"
            }
        },
        flag: "\uD83C\uDDF0\uD83C\uDDF3",
        maps: {
            googleMaps: "https://goo.gl/maps/qiaVwcLVTXX3eoTNA",
            openStreetMaps: "https://www.openstreetmap.org/relation/536899"
        },
        population: 53192,
        fifa: "SKN",
        car: {
            signs: [
                "KN"
            ],
            side: "left"
        },
        timezones: [
            "UTC-04:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/kn.png",
            svg: "https://flagcdn.com/kn.svg",
            alt: "The flag of Saint Kitts and Nevis features two large five-pointed white stars within a yellow-edged black diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and red triangle respectively."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/kn.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/kn.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                17.3,
                -62.72
            ]
        }
    },
    {
        name: {
            common: "Finland",
            official: "Republic of Finland",
            nativeName: {
                fin: {
                    official: "Suomen tasavalta",
                    common: "Suomi"
                },
                swe: {
                    official: "Republiken Finland",
                    common: "Finland"
                }
            }
        },
        tld: [
            ".fi"
        ],
        cca2: "FI",
        ccn3: "246",
        cca3: "FIN",
        cioc: "FIN",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        idd: {
            root: "+3",
            suffixes: [
                "58"
            ]
        },
        capital: [
            "Helsinki"
        ],
        altSpellings: [
            "FI",
            "Suomi",
            "Republic of Finland",
            "Suomen tasavalta",
            "Republiken Finland"
        ],
        region: "Europe",
        subregion: "Northern Europe",
        languages: {
            fin: "Finnish",
            swe: "Swedish"
        },
        translations: {
            ara: {
                official: "جمهورية فنلندا",
                common: "فنلندا"
            },
            bre: {
                official: "Republik Finland",
                common: "Finland"
            },
            ces: {
                official: "Finsk\xe1 republika",
                common: "Finsko"
            },
            cym: {
                official: "Republic of Finland",
                common: "Finland"
            },
            deu: {
                official: "Republik Finnland",
                common: "Finnland"
            },
            est: {
                official: "Soome Vabariik",
                common: "Soome"
            },
            fin: {
                official: "Suomen tasavalta",
                common: "Suomi"
            },
            fra: {
                official: "R\xe9publique de Finlande",
                common: "Finlande"
            },
            hrv: {
                official: "Republika Finska",
                common: "Finska"
            },
            hun: {
                official: "Finn K\xf6zt\xe1rsas\xe1g",
                common: "Finnorsz\xe1g"
            },
            ita: {
                official: "Repubblica di Finlandia",
                common: "Finlandia"
            },
            jpn: {
                official: "フィンランド共和国",
                common: "フィンランド"
            },
            kor: {
                official: "핀란드 공화국",
                common: "핀란드"
            },
            nld: {
                official: "Republiek Finland",
                common: "Finland"
            },
            per: {
                official: "جمهوری فنلاند",
                common: "فنلاند"
            },
            pol: {
                official: "Republika Finlandii",
                common: "Finlandia"
            },
            por: {
                official: "Rep\xfablica da Finl\xe2ndia",
                common: "Finl\xe2ndia"
            },
            rus: {
                official: "Финляндская Республика",
                common: "Финляндия"
            },
            slk: {
                official: "F\xednska republika",
                common: "F\xednsko"
            },
            spa: {
                official: "Rep\xfablica de Finlandia",
                common: "Finlandia"
            },
            srp: {
                official: "Република Финска",
                common: "Финска"
            },
            swe: {
                official: "Republiken Finland",
                common: "Finland"
            },
            tur: {
                official: "Finlandiya Cumhuriyeti",
                common: "Finlandiya"
            },
            urd: {
                official: "جمہوریہ فن لینڈ",
                common: "فن لینڈ"
            },
            zho: {
                official: "芬兰共和国",
                common: "芬兰"
            }
        },
        latlng: [
            64,
            26
        ],
        landlocked: false,
        borders: [
            "NOR",
            "SWE",
            "RUS"
        ],
        area: 338424,
        demonyms: {
            eng: {
                f: "Finnish",
                m: "Finnish"
            },
            fra: {
                f: "Finlandaise",
                m: "Finlandais"
            }
        },
        flag: "\uD83C\uDDEB\uD83C\uDDEE",
        maps: {
            googleMaps: "https://goo.gl/maps/HjgWDCNKRAYHrkMn8",
            openStreetMaps: "openstreetmap.org/relation/54224"
        },
        population: 5530719,
        gini: {
            2018: 27.3
        },
        fifa: "FIN",
        car: {
            signs: [
                "FIN"
            ],
            side: "right"
        },
        timezones: [
            "UTC+02:00"
        ],
        continents: [
            "Europe"
        ],
        flags: {
            png: "https://flagcdn.com/w320/fi.png",
            svg: "https://flagcdn.com/fi.svg",
            alt: "The flag of Finland has a white field with a large blue cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/fi.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/fi.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                60.17,
                24.93
            ]
        },
        postalCode: {
            format: "#####",
            regex: "^(?:FI)*(\\d{5})$"
        }
    },
    {
        name: {
            common: "San Marino",
            official: "Republic of San Marino",
            nativeName: {
                ita: {
                    official: "Repubblica di San Marino",
                    common: "San Marino"
                }
            }
        },
        tld: [
            ".sm"
        ],
        cca2: "SM",
        ccn3: "674",
        cca3: "SMR",
        cioc: "SMR",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        idd: {
            root: "+3",
            suffixes: [
                "78"
            ]
        },
        capital: [
            "City of San Marino"
        ],
        altSpellings: [
            "SM",
            "Republic of San Marino",
            "Repubblica di San Marino"
        ],
        region: "Europe",
        subregion: "Southern Europe",
        languages: {
            ita: "Italian"
        },
        translations: {
            ara: {
                official: "جمهورية سان مارينو",
                common: "سان مارينو"
            },
            bre: {
                official: "Republik San Marino",
                common: "San Marino"
            },
            ces: {
                official: "Republika San Marino",
                common: "San Marino"
            },
            cym: {
                official: "Republic of San Marino",
                common: "San Marino"
            },
            deu: {
                official: "Republik San Marino",
                common: "San Marino"
            },
            est: {
                official: "San Marino Vabariik",
                common: "San Marino"
            },
            fin: {
                official: "San Marinon seesteinen tasavalta",
                common: "San Marino"
            },
            fra: {
                official: "R\xe9publique de Saint-Marin",
                common: "Saint-Marin"
            },
            hrv: {
                official: "Većina Serene Republika San Marino",
                common: "San Marino"
            },
            hun: {
                official: "San Marino K\xf6zt\xe1rsas\xe1g",
                common: "San Marino"
            },
            ita: {
                official: "Serenissima Repubblica di San Marino",
                common: "San Marino"
            },
            jpn: {
                official: "サンマリノのほとんどセリーヌ共和国",
                common: "サンマリノ"
            },
            kor: {
                official: "산마리노 공화국",
                common: "산마리노"
            },
            nld: {
                official: "Meest Serene Republiek San Marino",
                common: "San Marino"
            },
            per: {
                official: "جمهوری سان مارینو",
                common: "سان مارینو"
            },
            pol: {
                official: "Republika San Marino",
                common: "San Marino"
            },
            por: {
                official: "Seren\xedssima Rep\xfablica de San Marino",
                common: "San Marino"
            },
            rus: {
                official: "Большинство Serene Республика Сан-Марино",
                common: "Сан-Марино"
            },
            slk: {
                official: "Sanmar\xednska republika",
                common: "San Mar\xedno"
            },
            spa: {
                official: "Seren\xedsima Rep\xfablica de San Marino",
                common: "San Marino"
            },
            srp: {
                official: "Најузвишенија Република Сан Марино",
                common: "Сан Марино"
            },
            swe: {
                official: "Republiken San Marino",
                common: "San Marino"
            },
            tur: {
                official: "San Marino Cumhuriyeti",
                common: "San Marino"
            },
            urd: {
                official: "جمہوریہ سان مارینو",
                common: "سان مارینو"
            },
            zho: {
                official: "圣马力诺共和国",
                common: "圣马力诺"
            }
        },
        latlng: [
            43.76666666,
            12.41666666
        ],
        landlocked: true,
        borders: [
            "ITA"
        ],
        area: 61,
        demonyms: {
            eng: {
                f: "Sammarinese",
                m: "Sammarinese"
            },
            fra: {
                f: "Saint-Marinaise",
                m: "Saint-Marinais"
            }
        },
        flag: "\uD83C\uDDF8\uD83C\uDDF2",
        maps: {
            googleMaps: "https://goo.gl/maps/rxCVJjm8dVY93RPY8",
            openStreetMaps: "https://www.openstreetmap.org/relation/54624"
        },
        population: 33938,
        fifa: "SMR",
        car: {
            signs: [
                "RSM"
            ],
            side: "right"
        },
        timezones: [
            "UTC+01:00"
        ],
        continents: [
            "Europe"
        ],
        flags: {
            png: "https://flagcdn.com/w320/sm.png",
            svg: "https://flagcdn.com/sm.svg",
            alt: "The flag of San Marino is composed of two equal horizontal bands of white and light blue, with the national coat of arms superimposed in the center."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/sm.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/sm.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                43.94,
                12.45
            ]
        },
        postalCode: {
            format: "4789#",
            regex: "^(4789\\d)$"
        }
    },
    {
        name: {
            common: "Oman",
            official: "Sultanate of Oman",
            nativeName: {
                ara: {
                    official: "سلطنة عمان",
                    common: "عمان"
                }
            }
        },
        tld: [
            ".om"
        ],
        cca2: "OM",
        ccn3: "512",
        cca3: "OMN",
        cioc: "OMA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            OMR: {
                name: "Omani rial",
                symbol: "ر.ع."
            }
        },
        idd: {
            root: "+9",
            suffixes: [
                "68"
            ]
        },
        capital: [
            "Muscat"
        ],
        altSpellings: [
            "OM",
            "Sultanate of Oman",
            "Salṭanat ʻUmān"
        ],
        region: "Asia",
        subregion: "Western Asia",
        languages: {
            ara: "Arabic"
        },
        translations: {
            ara: {
                official: "سلطنة عمان",
                common: "عمان"
            },
            bre: {
                official: "Sultanelezh Oman",
                common: "Oman"
            },
            ces: {
                official: "Sultan\xe1t Om\xe1n",
                common: "Om\xe1n"
            },
            cym: {
                official: "Sultanate of Oman",
                common: "Oman"
            },
            deu: {
                official: "Sultanat Oman",
                common: "Oman"
            },
            est: {
                official: "Omaani Sultaniriik",
                common: "Omaan"
            },
            fin: {
                official: "Omanin sulttaanikunta",
                common: "Oman"
            },
            fra: {
                official: "Sultanat d'Oman",
                common: "Oman"
            },
            hrv: {
                official: "Sultanat Oman",
                common: "Oman"
            },
            hun: {
                official: "Om\xe1ni Szultan\xe1tus",
                common: "Om\xe1n"
            },
            ita: {
                official: "Sultanato dell'Oman",
                common: "oman"
            },
            jpn: {
                official: "オマーン\xb7スルタン国",
                common: "オマーン"
            },
            kor: {
                official: "오만 술탄국",
                common: "오만"
            },
            nld: {
                official: "Sultanaat van Oman",
                common: "Oman"
            },
            per: {
                official: "سلطان‌نشین عُمان",
                common: "عمان"
            },
            pol: {
                official: "Sułtanat Omanu",
                common: "Oman"
            },
            por: {
                official: "Sultanato de Om\xe3",
                common: "Om\xe3"
            },
            rus: {
                official: "Султанат Оман",
                common: "Оман"
            },
            slk: {
                official: "Om\xe1nsky sultan\xe1t",
                common: "Om\xe1n"
            },
            spa: {
                official: "Sultanato de Om\xe1n",
                common: "Om\xe1n"
            },
            srp: {
                official: "Султанат Оман",
                common: "Оман"
            },
            swe: {
                official: "Sultanatet Oman",
                common: "Oman"
            },
            tur: {
                official: "Umman Sultanlığı",
                common: "Umman"
            },
            urd: {
                official: "سلطنت عمان",
                common: "عمان"
            },
            zho: {
                official: "阿曼苏丹国",
                common: "阿曼"
            }
        },
        latlng: [
            21,
            57
        ],
        landlocked: false,
        borders: [
            "SAU",
            "ARE",
            "YEM"
        ],
        area: 309500,
        demonyms: {
            eng: {
                f: "Omani",
                m: "Omani"
            },
            fra: {
                f: "Omanaise",
                m: "Omanais"
            }
        },
        flag: "\uD83C\uDDF4\uD83C\uDDF2",
        maps: {
            googleMaps: "https://goo.gl/maps/L2BoXoAwDDwWecnw5",
            openStreetMaps: "https://www.openstreetmap.org/relation/305138"
        },
        population: 5106622,
        fifa: "OMA",
        car: {
            signs: [
                "OM"
            ],
            side: "right"
        },
        timezones: [
            "UTC+04:00"
        ],
        continents: [
            "Asia"
        ],
        flags: {
            png: "https://flagcdn.com/w320/om.png",
            svg: "https://flagcdn.com/om.svg",
            alt: "The flag of Oman features a red vertical band on the hoist side that takes up about one-fourth the width of the field, and three equal horizontal bands of white, red and green adjoining the vertical band. At the top of the vertical band is the white emblem of Oman."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/om.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/om.svg"
        },
        startOfWeek: "sunday",
        capitalInfo: {
            latlng: [
                23.62,
                58.58
            ]
        },
        postalCode: {
            format: "###",
            regex: "^(\\d{3})$"
        }
    },
    {
        name: {
            common: "Saint Vincent and the Grenadines",
            official: "Saint Vincent and the Grenadines",
            nativeName: {
                eng: {
                    official: "Saint Vincent and the Grenadines",
                    common: "Saint Vincent and the Grenadines"
                }
            }
        },
        tld: [
            ".vc"
        ],
        cca2: "VC",
        ccn3: "670",
        cca3: "VCT",
        cioc: "VIN",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+1",
            suffixes: [
                "784"
            ]
        },
        capital: [
            "Kingstown"
        ],
        altSpellings: [
            "VC"
        ],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            eng: "English"
        },
        translations: {
            ara: {
                official: "سانت فينسنت والغرينادين",
                common: "سانت فينسنت والغرينادين"
            },
            bre: {
                official: "Sant-Visant hag ar Grenadinez",
                common: "Sant-Visant hag ar Grenadinez"
            },
            ces: {
                official: "Svat\xfd Vincenc a Grenadiny",
                common: "Svat\xfd Vincenc a Grenadiny"
            },
            cym: {
                official: "Saint Vincent and the Grenadines",
                common: "Saint Vincent and the Grenadines"
            },
            deu: {
                official: "St. Vincent und die Grenadinen",
                common: "St. Vincent und die Grenadinen"
            },
            est: {
                official: "Saint Vincent ja Grenadiinid",
                common: "Saint Vincent"
            },
            fin: {
                official: "Saint Vincent ja Grenadiinit",
                common: "Saint Vincent ja Grenadiinit"
            },
            fra: {
                official: "Saint-Vincent-et-les Grenadines",
                common: "Saint-Vincent-et-les-Grenadines"
            },
            hrv: {
                official: "Sveti Vincent i Grenadini",
                common: "Sveti Vincent i Grenadini"
            },
            hun: {
                official: "Saint Vincent \xe9s a Grenadine-szigetek",
                common: "Saint Vincent \xe9s a Grenadine-szigetek"
            },
            ita: {
                official: "Saint Vincent e Grenadine",
                common: "Saint Vincent e Grenadine"
            },
            jpn: {
                official: "セントビンセントおよびグレナディーン諸島",
                common: "セントビンセントおよびグレナディーン諸島"
            },
            kor: {
                official: "세인트빈센트 그레나딘",
                common: "세인트빈센트 그레나딘"
            },
            nld: {
                official: "Saint Vincent en de Grenadines",
                common: "Saint Vincent en de Grenadines"
            },
            per: {
                official: "سنت وینسنت و گرنادین‌ها",
                common: "سنت وینسنت و گرنادین‌ها"
            },
            pol: {
                official: "Saint Vincent i Grenadyny",
                common: "Saint Vincent i Grenadyny"
            },
            por: {
                official: "S\xe3o Vicente e Granadinas",
                common: "S\xe3o Vincente e Granadinas"
            },
            rus: {
                official: "Сент-Винсент и Гренадины",
                common: "Сент-Винсент и Гренадины"
            },
            slk: {
                official: "Sv\xe4t\xfd Vincent a Grenad\xedny",
                common: "Sv\xe4t\xfd Vincent a Grenad\xedny"
            },
            spa: {
                official: "San Vicente y las Granadinas",
                common: "San Vicente y Granadinas"
            },
            srp: {
                official: "Свети Винсент и Гренадини",
                common: "Свети Винсент и Гренадини"
            },
            swe: {
                official: "Saint Vincent och Grenadinerna",
                common: "Saint Vincent och Grenadinerna"
            },
            tur: {
                official: "Saint Vincent ve Grenadinler",
                common: "Saint Vincent ve Grenadinler"
            },
            urd: {
                official: "سینٹ وینسینٹ و گریناڈائنز",
                common: "سینٹ وینسینٹ و گریناڈائنز"
            },
            zho: {
                official: "圣文森特和格林纳丁斯",
                common: "圣文森特和格林纳丁斯"
            }
        },
        latlng: [
            13.25,
            -61.2
        ],
        landlocked: false,
        area: 389,
        demonyms: {
            eng: {
                f: "Saint Vincentian",
                m: "Saint Vincentian"
            },
            fra: {
                f: "Vincentaise",
                m: "Vincentais"
            }
        },
        flag: "\uD83C\uDDFB\uD83C\uDDE8",
        maps: {
            googleMaps: "https://goo.gl/maps/wMbnMqjG37FMnrwf7",
            openStreetMaps: "https://www.openstreetmap.org/relation/550725"
        },
        population: 110947,
        fifa: "VIN",
        car: {
            signs: [
                "WV"
            ],
            side: "left"
        },
        timezones: [
            "UTC-04:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/vc.png",
            svg: "https://flagcdn.com/vc.svg",
            alt: "The flag of Saint Vincent and the Grenadines is composed of three vertical bands of blue, gold and green. The gold band is twice as wide as the other two bands and bears three green diamonds arranged to form the letter V at its center."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/vc.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/vc.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                13.13,
                -61.22
            ]
        }
    },
    {
        name: {
            common: "Saint Helena, Ascension and Tristan da Cunha",
            official: "Saint Helena, Ascension and Tristan da Cunha",
            nativeName: {
                eng: {
                    official: "Saint Helena, Ascension and Tristan da Cunha",
                    common: "Saint Helena, Ascension and Tristan da Cunha"
                }
            }
        },
        tld: [
            ".sh",
            ".ac"
        ],
        cca2: "SH",
        ccn3: "654",
        cca3: "SHN",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            GBP: {
                name: "Pound sterling",
                symbol: "\xa3"
            },
            SHP: {
                name: "Saint Helena pound",
                symbol: "\xa3"
            }
        },
        idd: {
            root: "+2",
            suffixes: [
                "90",
                "47"
            ]
        },
        capital: [
            "Jamestown"
        ],
        altSpellings: [
            "Saint Helena",
            "St. Helena, Ascension and Tristan da Cunha"
        ],
        region: "Africa",
        subregion: "Western Africa",
        languages: {
            eng: "English"
        },
        translations: {
            ara: {
                official: "سانت هيلينا وأسينشين وتريستان دا كونا",
                common: "سانت هيلينا وأسينشين وتريستان دا كونا"
            },
            bre: {
                official: "Saint Helena, Ascension ha Tristan da Cunha",
                common: "Saint Helena, Ascension ha Tristan da Cunha"
            },
            ces: {
                official: "Svat\xe1 Helena, Ascension a Tristan da Cunha",
                common: "Svat\xe1 Helena, Ascension a Tristan da Cunha"
            },
            cym: {
                official: "Saint Helena, Ascension and Tristan da Cunha",
                common: "Saint Helena, Ascension and Tristan da Cunha"
            },
            deu: {
                official: "Sankt Helena, Ascension und Tristan da Cunha",
                common: "St. Helena, Ascension und Tristan da Cunha"
            },
            est: {
                official: "Saint Helena, Ascension ja Tristan da Cunha",
                common: "Saint Helena, Ascension ja Tristan da Cunha"
            },
            fin: {
                official: "Saint Helena, Ascension ja Tristan da Cunha",
                common: "Saint Helena, Ascension ja Tristan da Cunha"
            },
            fra: {
                official: "Sainte-H\xe9l\xe8ne, Ascension et Tristan da Cunha",
                common: "Sainte-H\xe9l\xe8ne, Ascension et Tristan da Cunha"
            },
            hrv: {
                official: "Sveta Helena",
                common: "Sveta Helena"
            },
            hun: {
                official: "Szent Ilona",
                common: "Szent Ilona-sziget"
            },
            ita: {
                official: "Sant'Elena, Ascensione e Tristan da Cunha",
                common: "Sant'Elena, Ascensione e Tristan da Cunha"
            },
            jpn: {
                official: "セントヘレナ・アセンションおよびトリスタンダクーニャ",
                common: "セントヘレナ・アセンションおよびトリスタンダクーニャ"
            },
            kor: {
                official: "세인트헬레나",
                common: "세인트헬레나"
            },
            nld: {
                official: "Sint-Helena, Ascension en Tristan da Cunha",
                common: "Sint-Helena, Ascension en Tristan da Cunha"
            },
            per: {
                official: "سنت هلن",
                common: "سنت هلن"
            },
            pol: {
                official: "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha",
                common: "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha"
            },
            por: {
                official: "Santa Helena, Ascens\xe3o e Trist\xe3o da Cunha",
                common: "Santa Helena, Ascens\xe3o e Trist\xe3o da Cunha"
            },
            rus: {
                official: "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
                common: "Острова Святой Елены, Вознесения и Тристан-да-Кунья"
            },
            slk: {
                official: "Sv\xe4t\xe1 Helena (z\xe1morsk\xe9 \xfazemie)",
                common: "Sv\xe4t\xe1 Helena (z\xe1morsk\xe9 \xfazemie)"
            },
            spa: {
                official: "Santa Elena, Ascensi\xf3n y Trist\xe1n de Acu\xf1a",
                common: "Santa Elena, Ascensi\xf3n y Trist\xe1n de Acu\xf1a"
            },
            srp: {
                official: "Света Јелена, Асенсион и Тристан да Куња",
                common: "Света Јелена"
            },
            swe: {
                official: "Sankta Helena",
                common: "Sankta Helena"
            },
            tur: {
                official: "Saint Helena",
                common: "Saint Helena"
            },
            urd: {
                official: "سینٹ ہلینا، اسینشن و ترسٹان دا کونیا",
                common: "سینٹ ہلینا، اسینشن و ترسٹان دا کونیا"
            },
            zho: {
                official: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
                common: "圣赫勒拿、阿森松和特里斯坦-达库尼亚"
            }
        },
        latlng: [
            -15.95,
            -5.72
        ],
        landlocked: false,
        area: 394,
        demonyms: {
            eng: {
                f: "Saint Helenian",
                m: "Saint Helenian"
            },
            fra: {
                f: "Sainte-H\xe9l\xe9noise",
                m: "Sainte-H\xe9l\xe8nois"
            }
        },
        flag: "\uD83C\uDDF8\uD83C\uDDED",
        maps: {
            googleMaps: "https://goo.gl/maps/iv4VxnPzHkjLCJuc6",
            openStreetMaps: "https://www.openstreetmap.org/relation/4868269#map=13/-15.9657/-5.7120"
        },
        population: 53192,
        car: {
            signs: [
                "GB"
            ],
            side: "left"
        },
        timezones: [
            "UTC+00:00"
        ],
        continents: [
            "Africa"
        ],
        flags: {
            png: "https://flagcdn.com/w320/sh.png",
            svg: "https://flagcdn.com/sh.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -15.93,
                -5.72
            ]
        },
        postalCode: {
            format: "STHL 1ZZ",
            regex: "^(STHL1ZZ)$"
        }
    },
    {
        name: {
            common: "Saint Barth\xe9lemy",
            official: "Collectivity of Saint Barth\xe9lemy",
            nativeName: {
                fra: {
                    official: "Collectivit\xe9 de Saint-Barth\xe9lemy",
                    common: "Saint-Barth\xe9lemy"
                }
            }
        },
        tld: [
            ".bl"
        ],
        cca2: "BL",
        ccn3: "652",
        cca3: "BLM",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "90"
            ]
        },
        capital: [
            "Gustavia"
        ],
        altSpellings: [
            "BL",
            "St. Barthelemy",
            "Collectivity of Saint Barth\xe9lemy",
            "Collectivit\xe9 de Saint-Barth\xe9lemy"
        ],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            fra: "French"
        },
        translations: {
            ara: {
                official: "التجمع الإقليمي لسانت بارتيليمي",
                common: "سان بارتليمي"
            },
            bre: {
                official: "Saint-Barth\xe9lemy",
                common: "Saint-Barth\xe9lemy"
            },
            ces: {
                official: "Svat\xfd Bartoloměj",
                common: "Svat\xfd Bartoloměj"
            },
            cym: {
                official: "Collectivity of Saint Barth\xe9lemy",
                common: "Saint Barth\xe9lemy"
            },
            deu: {
                official: "Gebietsk\xf6rperschaft Saint-Barth\xe9lemy",
                common: "Saint-Barth\xe9lemy"
            },
            est: {
                official: "Saint-Barth\xe9lemy territoriaal\xfchendus",
                common: "Saint-Barth\xe9lemy"
            },
            fin: {
                official: "Saint-Barth\xe9lemyn yhteis\xf6",
                common: "Saint-Barth\xe9lemy"
            },
            fra: {
                official: "Collectivit\xe9 de Saint-Barth\xe9lemy",
                common: "Saint-Barth\xe9lemy"
            },
            hrv: {
                official: "Kolektivnost sv Barth\xe9lemy",
                common: "Saint Barth\xe9lemy"
            },
            hun: {
                official: "Saint-Barth\xe9lemy",
                common: "Saint-Barth\xe9lemy"
            },
            ita: {
                official: "Collettivit\xe0 di Saint Barth\xe9lemy",
                common: "Antille Francesi"
            },
            jpn: {
                official: "サン\xb7バルテルミー島の集合体",
                common: "サン・バルテルミー"
            },
            kor: {
                official: "생바르텔레미",
                common: "생바르텔레미"
            },
            nld: {
                official: "Gemeenschap Saint Barth\xe9lemy",
                common: "Saint Barth\xe9lemy"
            },
            per: {
                official: "سن بارتلمی",
                common: "سن بارتلمی"
            },
            pol: {
                official: "Saint-Barth\xe9lemy",
                common: "Saint-Barth\xe9lemy"
            },
            por: {
                official: "Coletividade de Saint Barth\xe9lemy",
                common: "S\xe3o Bartolomeu"
            },
            rus: {
                official: "Коллективность Санкт -Бартельми",
                common: "Сен-Бартелеми"
            },
            slk: {
                official: "Sv\xe4t\xfd Bartolomej",
                common: "Sv\xe4t\xfd Bartolomej"
            },
            spa: {
                official: "Colectividad de San Barth\xe9lemy",
                common: "San Bartolom\xe9"
            },
            srp: {
                official: "Сен Бартелеми",
                common: "Територијални Kолектив Сен Бартелеми"
            },
            swe: {
                official: "Saint-Barth\xe9lemy",
                common: "Saint-Barth\xe9lemy"
            },
            tur: {
                official: "Saint Barth\xe9lemy",
                common: "Saint Barth\xe9lemy"
            },
            urd: {
                official: "سینٹ بارتھیملے",
                common: "سینٹ بارتھیملے"
            },
            zho: {
                official: "圣巴泰勒米集体",
                common: "圣巴泰勒米"
            }
        },
        latlng: [
            18.5,
            -63.41666666
        ],
        landlocked: false,
        area: 21,
        demonyms: {
            eng: {
                f: "Saint Barth\xe9lemy Islander",
                m: "Saint Barth\xe9lemy Islander"
            },
            fra: {
                f: "Barth\xe9lom\xe9enne",
                m: "Barth\xe9lom\xe9en"
            }
        },
        flag: "\uD83C\uDDE7\uD83C\uDDF1",
        maps: {
            googleMaps: "https://goo.gl/maps/Mc7GqH466S7AAk297",
            openStreetMaps: "https://www.openstreetmap.org/relation/7552779"
        },
        population: 4255,
        car: {
            signs: [
                "F"
            ],
            side: "right"
        },
        timezones: [
            "UTC-04:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/bl.png",
            svg: "https://flagcdn.com/bl.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                17.88,
                -62.85
            ]
        },
        postalCode: {
            format: "### ###"
        }
    },
    {
        name: {
            common: "Brunei",
            official: "Nation of Brunei, Abode of Peace",
            nativeName: {
                msa: {
                    official: "Nation of Brunei, Abode Damai",
                    common: "Negara Brunei Darussalam"
                }
            }
        },
        tld: [
            ".bn"
        ],
        cca2: "BN",
        ccn3: "096",
        cca3: "BRN",
        cioc: "BRU",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            BND: {
                name: "Brunei dollar",
                symbol: "$"
            },
            SGD: {
                name: "Singapore dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+6",
            suffixes: [
                "73"
            ]
        },
        capital: [
            "Bandar Seri Begawan"
        ],
        altSpellings: [
            "BN",
            "Brunei Darussalam",
            "Nation of Brunei",
            "the Abode of Peace"
        ],
        region: "Asia",
        subregion: "South-Eastern Asia",
        languages: {
            msa: "Malay"
        },
        translations: {
            ara: {
                official: "بروناي دار السلام",
                common: "بروناي"
            },
            bre: {
                official: "Stad Brunei Darussalam",
                common: "Brunei"
            },
            ces: {
                official: "Sultan\xe1t Brunej",
                common: "Brunej"
            },
            cym: {
                official: "Teyrnas Brwnei",
                common: "Brunei"
            },
            deu: {
                official: "Sultanat Brunei Darussalam",
                common: "Brunei"
            },
            est: {
                official: "Brunei Darussalami Riik",
                common: "Brunei"
            },
            fin: {
                official: "Brunei Darussalamin valtio",
                common: "Brunei"
            },
            fra: {
                official: "\xc9tat de Brunei Darussalam",
                common: "Brunei"
            },
            hrv: {
                official: "Nacija od Bruneja, Kuću Mira",
                common: "Brunej"
            },
            hun: {
                official: "Brunei Szultan\xe1tus",
                common: "Brunei"
            },
            ita: {
                official: "Nazione di Brunei, Dimora della Pace",
                common: "Brunei"
            },
            jpn: {
                official: "ブルネイ、平和の精舎の国家",
                common: "ブルネイ・ダルサラーム"
            },
            kor: {
                official: "브루나이 다루살람국",
                common: "브루나이"
            },
            nld: {
                official: "Natie van Brunei, de verblijfplaats van de Vrede",
                common: "Brunei"
            },
            per: {
                official: "برونئی سرای صلح",
                common: "برونئی"
            },
            pol: {
                official: "Państwo Brunei Darussalam",
                common: "Brunei"
            },
            por: {
                official: "Na\xe7\xe3o do Brunei, Morada da Paz",
                common: "Brunei"
            },
            rus: {
                official: "Нация Бруней, обитель мира",
                common: "Бруней"
            },
            slk: {
                official: "Brunejsk\xfd sultan\xe2t",
                common: "Brunej"
            },
            spa: {
                official: "Naci\xf3n de Brunei, Morada de la Paz",
                common: "Brunei"
            },
            srp: {
                official: "Султанат Брунеј, боравиште мира",
                common: "Брунеј"
            },
            swe: {
                official: "Brunei Darussalam",
                common: "Brunei"
            },
            tur: {
                official: "Brunei Barış \xdclkesi Devleti",
                common: "Brunei"
            },
            urd: {
                official: "ریاستِ برونائی دارالسلام",
                common: "برونائی"
            },
            zho: {
                official: "文莱和平之国",
                common: "文莱"
            }
        },
        latlng: [
            4.5,
            114.66666666
        ],
        landlocked: false,
        borders: [
            "MYS"
        ],
        area: 5765,
        demonyms: {
            eng: {
                f: "Bruneian",
                m: "Bruneian"
            },
            fra: {
                f: "Brun\xe9ienne",
                m: "Brun\xe9ien"
            }
        },
        flag: "\uD83C\uDDE7\uD83C\uDDF3",
        maps: {
            googleMaps: "https://goo.gl/maps/4jb4CqBXhr8vNh579",
            openStreetMaps: "https://www.openstreetmap.org/relation/2103120"
        },
        population: 437483,
        fifa: "BRU",
        car: {
            signs: [
                "BRU"
            ],
            side: "left"
        },
        timezones: [
            "UTC+08:00"
        ],
        continents: [
            "Asia"
        ],
        flags: {
            png: "https://flagcdn.com/w320/bn.png",
            svg: "https://flagcdn.com/bn.svg",
            alt: "The flag of Brunei has a yellow field with two adjoining diagonal bands of white and black that extend from the upper hoist side of the field to the lower fly side. The red emblem of Brunei is centered on the field."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/bn.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/bn.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                4.88,
                114.93
            ]
        },
        postalCode: {
            format: "@@####",
            regex: "^([A-Z]{2}\\d{4})$"
        }
    },
    {
        name: {
            common: "United States",
            official: "United States of America",
            nativeName: {
                eng: {
                    official: "United States of America",
                    common: "United States"
                }
            }
        },
        tld: [
            ".us"
        ],
        cca2: "US",
        ccn3: "840",
        cca3: "USA",
        cioc: "USA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+1",
            suffixes: [
                "201",
                "202",
                "203",
                "205",
                "206",
                "207",
                "208",
                "209",
                "210",
                "212",
                "213",
                "214",
                "215",
                "216",
                "217",
                "218",
                "219",
                "220",
                "224",
                "225",
                "227",
                "228",
                "229",
                "231",
                "234",
                "239",
                "240",
                "248",
                "251",
                "252",
                "253",
                "254",
                "256",
                "260",
                "262",
                "267",
                "269",
                "270",
                "272",
                "274",
                "276",
                "281",
                "283",
                "301",
                "302",
                "303",
                "304",
                "305",
                "307",
                "308",
                "309",
                "310",
                "312",
                "313",
                "314",
                "315",
                "316",
                "317",
                "318",
                "319",
                "320",
                "321",
                "323",
                "325",
                "327",
                "330",
                "331",
                "334",
                "336",
                "337",
                "339",
                "346",
                "347",
                "351",
                "352",
                "360",
                "361",
                "364",
                "380",
                "385",
                "386",
                "401",
                "402",
                "404",
                "405",
                "406",
                "407",
                "408",
                "409",
                "410",
                "412",
                "413",
                "414",
                "415",
                "417",
                "419",
                "423",
                "424",
                "425",
                "430",
                "432",
                "434",
                "435",
                "440",
                "442",
                "443",
                "447",
                "458",
                "463",
                "464",
                "469",
                "470",
                "475",
                "478",
                "479",
                "480",
                "484",
                "501",
                "502",
                "503",
                "504",
                "505",
                "507",
                "508",
                "509",
                "510",
                "512",
                "513",
                "515",
                "516",
                "517",
                "518",
                "520",
                "530",
                "531",
                "534",
                "539",
                "540",
                "541",
                "551",
                "559",
                "561",
                "562",
                "563",
                "564",
                "567",
                "570",
                "571",
                "573",
                "574",
                "575",
                "580",
                "585",
                "586",
                "601",
                "602",
                "603",
                "605",
                "606",
                "607",
                "608",
                "609",
                "610",
                "612",
                "614",
                "615",
                "616",
                "617",
                "618",
                "619",
                "620",
                "623",
                "626",
                "628",
                "629",
                "630",
                "631",
                "636",
                "641",
                "646",
                "650",
                "651",
                "657",
                "660",
                "661",
                "662",
                "667",
                "669",
                "678",
                "681",
                "682",
                "701",
                "702",
                "703",
                "704",
                "706",
                "707",
                "708",
                "712",
                "713",
                "714",
                "715",
                "716",
                "717",
                "718",
                "719",
                "720",
                "724",
                "725",
                "727",
                "730",
                "731",
                "732",
                "734",
                "737",
                "740",
                "743",
                "747",
                "754",
                "757",
                "760",
                "762",
                "763",
                "765",
                "769",
                "770",
                "772",
                "773",
                "774",
                "775",
                "779",
                "781",
                "785",
                "786",
                "801",
                "802",
                "803",
                "804",
                "805",
                "806",
                "808",
                "810",
                "812",
                "813",
                "814",
                "815",
                "816",
                "817",
                "818",
                "828",
                "830",
                "831",
                "832",
                "843",
                "845",
                "847",
                "848",
                "850",
                "854",
                "856",
                "857",
                "858",
                "859",
                "860",
                "862",
                "863",
                "864",
                "865",
                "870",
                "872",
                "878",
                "901",
                "903",
                "904",
                "906",
                "907",
                "908",
                "909",
                "910",
                "912",
                "913",
                "914",
                "915",
                "916",
                "917",
                "918",
                "919",
                "920",
                "925",
                "928",
                "929",
                "930",
                "931",
                "934",
                "936",
                "937",
                "938",
                "940",
                "941",
                "947",
                "949",
                "951",
                "952",
                "954",
                "956",
                "959",
                "970",
                "971",
                "972",
                "973",
                "975",
                "978",
                "979",
                "980",
                "984",
                "985",
                "989"
            ]
        },
        capital: [
            "Washington, D.C."
        ],
        altSpellings: [
            "US",
            "USA",
            "United States of America"
        ],
        region: "Americas",
        subregion: "North America",
        languages: {
            eng: "English"
        },
        translations: {
            ara: {
                official: "الولايات المتحدة الامريكية",
                common: "الولايات المتحدة"
            },
            bre: {
                official: "Stado\xf9-Unanet Amerika",
                common: "Stado\xf9-Unanet"
            },
            ces: {
                official: "Spojen\xe9 st\xe1ty americk\xe9",
                common: "Spojen\xe9 st\xe1ty"
            },
            cym: {
                official: "United States of America",
                common: "United States"
            },
            deu: {
                official: "Vereinigte Staaten von Amerika",
                common: "Vereinigte Staaten"
            },
            est: {
                official: "Ameerika \xdchendriigid",
                common: "Ameerika \xdchendriigid"
            },
            fin: {
                official: "Amerikan yhdysvallat",
                common: "Yhdysvallat"
            },
            fra: {
                official: "Les \xe9tats-unis d'Am\xe9rique",
                common: "\xc9tats-Unis"
            },
            hrv: {
                official: "Sjedinjene Države Amerike",
                common: "Sjedinjene Američke Države"
            },
            hun: {
                official: "Amerikai Egyes\xfclt \xc1llamok",
                common: "Amerikai Egyes\xfclt \xc1llamok"
            },
            ita: {
                official: "Stati Uniti d'America",
                common: "Stati Uniti d'America"
            },
            jpn: {
                official: "アメリカ合衆国",
                common: "アメリカ合衆国"
            },
            kor: {
                official: "아메리카 합중국",
                common: "미국"
            },
            nld: {
                official: "Verenigde Staten van Amerika",
                common: "Verenigde Staten"
            },
            per: {
                official: "ایالات متحده آمریکا",
                common: "ایالات متحده آمریکا"
            },
            pol: {
                official: "Stany Zjednoczone Ameryki",
                common: "Stany Zjednoczone"
            },
            por: {
                official: "Estados Unidos da Am\xe9rica",
                common: "Estados Unidos"
            },
            rus: {
                official: "Соединенные Штаты Америки",
                common: "Соединённые Штаты Америки"
            },
            slk: {
                official: "Spojen\xe9 št\xe1ty Americk\xe9",
                common: "Spojen\xe9 št\xe1ty americk\xe9"
            },
            spa: {
                official: "Estados Unidos de Am\xe9rica",
                common: "Estados Unidos"
            },
            srp: {
                official: "Сједињене Америчке Државе",
                common: "Сједињене Америчке Државе"
            },
            swe: {
                official: "Amerikas f\xf6renta stater",
                common: "USA"
            },
            tur: {
                official: "Amerika Birleşik Devletleri",
                common: "Amerika Birleşik Devletleri"
            },
            urd: {
                official: "ریاستہائے متحدہ امریکا",
                common: "ریاستہائے متحدہ"
            },
            zho: {
                official: "美利坚合众国",
                common: "美国"
            }
        },
        latlng: [
            38,
            -97
        ],
        landlocked: false,
        borders: [
            "CAN",
            "MEX"
        ],
        area: 9372610,
        demonyms: {
            eng: {
                f: "American",
                m: "American"
            },
            fra: {
                f: "Am\xe9ricaine",
                m: "Am\xe9ricain"
            }
        },
        flag: "\uD83C\uDDFA\uD83C\uDDF8",
        maps: {
            googleMaps: "https://goo.gl/maps/e8M246zY4BSjkjAv6",
            openStreetMaps: "https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8"
        },
        population: 329484123,
        gini: {
            2018: 41.4
        },
        fifa: "USA",
        car: {
            signs: [
                "USA"
            ],
            side: "right"
        },
        timezones: [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/us.png",
            svg: "https://flagcdn.com/us.svg",
            alt: "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/us.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/us.svg"
        },
        startOfWeek: "sunday",
        capitalInfo: {
            latlng: [
                38.89,
                -77.05
            ]
        },
        postalCode: {
            format: "#####-####",
            regex: "^\\d{5}(-\\d{4})?$"
        }
    },
    {
        name: {
            common: "Guinea-Bissau",
            official: "Republic of Guinea-Bissau",
            nativeName: {
                por: {
                    official: "Rep\xfablica da Guin\xe9-Bissau",
                    common: "Guin\xe9-Bissau"
                },
                pov: {
                    official: "Rep\xfablica da Guin\xe9-Bissau",
                    common: "Guin\xe9-Bissau"
                }
            }
        },
        tld: [
            ".gw"
        ],
        cca2: "GW",
        ccn3: "624",
        cca3: "GNB",
        cioc: "GBS",
        independent: true,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr"
            }
        },
        idd: {
            root: "+2",
            suffixes: [
                "45"
            ]
        },
        capital: [
            "Bissau"
        ],
        altSpellings: [
            "GW",
            "Republic of Guinea-Bissau",
            "Rep\xfablica da Guin\xe9-Bissau"
        ],
        region: "Africa",
        subregion: "Western Africa",
        languages: {
            por: "Portuguese",
            pov: "Upper Guinea Creole"
        },
        translations: {
            ara: {
                official: "جمهورية غينيا بيساو",
                common: "غينيا بيساو"
            },
            bre: {
                official: "Republik Ginea-Bissau",
                common: "Ginea-Bissau"
            },
            ces: {
                official: "Republika Guinea-Bissau",
                common: "Guinea-Bissau"
            },
            cym: {
                official: "Republic of Guinea-Bissau",
                common: "Guinea-Bissau"
            },
            deu: {
                official: "Republik Guinea-Bissau",
                common: "Guinea-Bissau"
            },
            est: {
                official: "Guinea-Bissau Vabariik",
                common: "Guinea-Bissau"
            },
            fin: {
                official: "Guinea-Bissaun tasavalta",
                common: "Guinea-Bissau"
            },
            fra: {
                official: "R\xe9publique de Guin\xe9e-Bissau",
                common: "Guin\xe9e-Bissau"
            },
            hrv: {
                official: "Republika Gvineja Bisau",
                common: "Gvineja Bisau"
            },
            hun: {
                official: "Bissau-Guineai K\xf6zt\xe1rsas\xe1g",
                common: "Bissau-Guinea"
            },
            ita: {
                official: "Repubblica di Guinea-Bissau",
                common: "Guinea-Bissau"
            },
            jpn: {
                official: "ギニアビサウ共和国",
                common: "ギニアビサウ"
            },
            kor: {
                official: "기니비사우 공화국",
                common: "기니비사우"
            },
            nld: {
                official: "Republiek Guinee-Bissau",
                common: "Guinee-Bissau"
            },
            per: {
                official: "جمهوری گینه بیسائو",
                common: "گینه بیسائو"
            },
            pol: {
                official: "Republika Gwinei Bissau",
                common: "Gwinea Bissau"
            },
            por: {
                official: "Rep\xfablica da Guin\xe9-Bissau",
                common: "Guin\xe9-Bissau"
            },
            rus: {
                official: "Республика Гвинея -Бисау",
                common: "Гвинея-Бисау"
            },
            slk: {
                official: "Guinejsko-bissausk\xe1 republika",
                common: "Guinea-Bissau"
            },
            spa: {
                official: "Rep\xfablica de Guinea-Bissau",
                common: "Guinea-Bis\xe1u"
            },
            srp: {
                official: "Република Гвинеја Бисао",
                common: "Гвинеја Бисао"
            },
            swe: {
                official: "Republiken Guinea-Bissau",
                common: "Guinea-Bissau"
            },
            tur: {
                official: "Gine-Bissau Cumhuriyeti",
                common: "Gine-Bissau"
            },
            urd: {
                official: "جمہوریہ گنی بساؤ",
                common: "گنی بساؤ"
            },
            zho: {
                official: "几内亚比绍共和国",
                common: "几内亚比绍"
            }
        },
        latlng: [
            12,
            -15
        ],
        landlocked: false,
        borders: [
            "GIN",
            "SEN"
        ],
        area: 36125,
        demonyms: {
            eng: {
                f: "Guinea-Bissauan",
                m: "Guinea-Bissauan"
            },
            fra: {
                f: "Bissau-Guin\xe9enne",
                m: "Bissau-Guin\xe9en"
            }
        },
        flag: "\uD83C\uDDEC\uD83C\uDDFC",
        maps: {
            googleMaps: "https://goo.gl/maps/5Wyaz17miUc1zLc67",
            openStreetMaps: "https://www.openstreetmap.org/relation/192776"
        },
        population: 1967998,
        gini: {
            2010: 50.7
        },
        fifa: "GNB",
        car: {
            signs: [
                "RGB"
            ],
            side: "right"
        },
        timezones: [
            "UTC"
        ],
        continents: [
            "Africa"
        ],
        flags: {
            png: "https://flagcdn.com/w320/gw.png",
            svg: "https://flagcdn.com/gw.svg",
            alt: "The flag of Guinea-Bissau features a red vertical band on its hoist side that takes up about two-fifth the width of the field, and two equal horizontal bands of yellow and green adjoining the vertical band. A five-pointed black star is centered in the vertical band."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/gw.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/gw.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                11.85,
                -15.58
            ]
        },
        postalCode: {
            format: "####",
            regex: "^(\\d{4})$"
        }
    },
    {
        name: {
            common: "Saint Martin",
            official: "Saint Martin",
            nativeName: {
                fra: {
                    official: "Saint-Martin",
                    common: "Saint-Martin"
                }
            }
        },
        tld: [
            ".fr",
            ".gp"
        ],
        cca2: "MF",
        ccn3: "663",
        cca3: "MAF",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "90"
            ]
        },
        capital: [
            "Marigot"
        ],
        altSpellings: [
            "MF",
            "Collectivity of Saint Martin",
            "Collectivit\xe9 de Saint-Martin",
            "Saint Martin (French part)"
        ],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            fra: "French"
        },
        translations: {
            ara: {
                official: "سانت مارتن",
                common: "سانت مارتن"
            },
            bre: {
                official: "Saint-Martin",
                common: "Saint-Martin"
            },
            ces: {
                official: "Svat\xfd Martin",
                common: "Svat\xfd Martin (Francie)"
            },
            cym: {
                official: "Saint Martin",
                common: "Saint Martin"
            },
            deu: {
                official: "Saint-Martin",
                common: "Saint-Martin"
            },
            est: {
                official: "Saint-Martini \xfchendus",
                common: "Saint-Martin"
            },
            fin: {
                official: "Saint-Martin",
                common: "Saint-Martin"
            },
            fra: {
                official: "Saint-Martin",
                common: "Saint-Martin"
            },
            hrv: {
                official: "Saint Martin",
                common: "Sveti Martin"
            },
            hun: {
                official: "Saint-Martin K\xf6z\xf6ss\xe9g",
                common: "Saint-Martin"
            },
            ita: {
                official: "saint Martin",
                common: "Saint Martin"
            },
            jpn: {
                official: "サンマルタン島",
                common: "サン・マルタン（フランス領）"
            },
            kor: {
                official: "생마르탱",
                common: "생마르탱"
            },
            nld: {
                official: "Saint Martin",
                common: "Saint-Martin"
            },
            per: {
                official: "سن مارتن",
                common: "سن مارتن"
            },
            pol: {
                official: "Wsp\xf3lnota Saint-Martin",
                common: "Saint-Martin"
            },
            por: {
                official: "saint Martin",
                common: "S\xe3o Martinho"
            },
            rus: {
                official: "Сен-Мартен",
                common: "Сен-Мартен"
            },
            slk: {
                official: "Saint-Martin",
                common: "Saint-Martin"
            },
            spa: {
                official: "Saint Martin",
                common: "Saint Martin"
            },
            srp: {
                official: "Свети Мартин",
                common: "Свети Мартин"
            },
            swe: {
                official: "F\xf6rvaltningsomr\xe5det Saint-Martin",
                common: "Saint-Martin"
            },
            tur: {
                official: "Saint Martin",
                common: "Saint Martin"
            },
            urd: {
                official: "سینٹ مارٹن",
                common: "سینٹ مارٹن"
            },
            zho: {
                official: "圣马丁",
                common: "圣马丁"
            }
        },
        latlng: [
            18.0708,
            63.0501
        ],
        landlocked: false,
        borders: [
            "SXM"
        ],
        area: 53,
        demonyms: {
            eng: {
                f: "Saint Martin Islander",
                m: "Saint Martin Islander"
            },
            fra: {
                f: "Saint-Martinoise",
                m: "Saint-Martinois"
            }
        },
        flag: "\uD83C\uDDF2\uD83C\uDDEB",
        maps: {
            googleMaps: "https://goo.gl/maps/P9ho9QuJ9EAR28JEA",
            openStreetMaps: "https://www.openstreetmap.org/relation/63064"
        },
        population: 38659,
        car: {
            signs: [
                "F"
            ],
            side: "right"
        },
        timezones: [
            "UTC-04:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/mf.png",
            svg: "https://flagcdn.com/mf.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                18.07,
                -63.08
            ]
        },
        postalCode: {
            format: "### ###"
        }
    },
    {
        name: {
            common: "Western Sahara",
            official: "Sahrawi Arab Democratic Republic",
            nativeName: {
                ber: {
                    official: "Sahrawi Arab Democratic Republic",
                    common: "Western Sahara"
                },
                mey: {
                    official: "الجمهورية العربية الصحراوية الديمقراطية",
                    common: "الصحراء الغربية"
                },
                spa: {
                    official: "Rep\xfablica \xc1rabe Saharaui Democr\xe1tica",
                    common: "Sahara Occidental"
                }
            }
        },
        tld: [
            ".eh"
        ],
        cca2: "EH",
        ccn3: "732",
        cca3: "ESH",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            DZD: {
                name: "Algerian dinar",
                symbol: "دج"
            },
            MAD: {
                name: "Moroccan dirham",
                symbol: "DH"
            },
            MRU: {
                name: "Mauritanian ouguiya",
                symbol: "UM"
            }
        },
        idd: {
            root: "+2",
            suffixes: [
                "125288",
                "125289"
            ]
        },
        capital: [
            "El Aai\xfan"
        ],
        altSpellings: [
            "EH",
            "Taneẓroft Tutrimt"
        ],
        region: "Africa",
        subregion: "Northern Africa",
        languages: {
            ber: "Berber",
            mey: "Hassaniya",
            spa: "Spanish"
        },
        translations: {
            ara: {
                official: "الجمهورية العربية الصحراوية الديمقراطية",
                common: "الصحراء الغربية"
            },
            bre: {
                official: "Republik Arab Saharaoui Demokratel",
                common: "Sahara ar C'horn\xf4g"
            },
            ces: {
                official: "Z\xe1padn\xed Sahara",
                common: "Z\xe1padn\xed Sahara"
            },
            cym: {
                official: "Sahrawi Arab Democratic Republic",
                common: "Western Sahara"
            },
            deu: {
                official: "Demokratische Arabische Republik Sahara",
                common: "Westsahara"
            },
            est: {
                official: "L\xe4\xe4ne-Sahara",
                common: "L\xe4\xe4ne-Sahara"
            },
            fin: {
                official: "L\xe4nsi-Sahara",
                common: "L\xe4nsi-Sahara"
            },
            fra: {
                official: "R\xe9publique arabe sahraouie d\xe9mocratique",
                common: "Sahara Occidental"
            },
            hrv: {
                official: "Sahrawi Arab Demokratska Republika",
                common: "Zapadna Sahara"
            },
            hun: {
                official: "Nyugat-Szahara",
                common: "Nyugat-Szahara"
            },
            ita: {
                official: "Repubblica Araba Saharawi Democratica",
                common: "Sahara Occidentale"
            },
            jpn: {
                official: "サハラアラブ民主共和国",
                common: "西サハラ"
            },
            kor: {
                official: "사하라 아랍 민주 공화국",
                common: "서사하라"
            },
            nld: {
                official: "Sahrawi Arabische Democratische Republiek",
                common: "Westelijke Sahara"
            },
            per: {
                official: "صحرای غربی",
                common: "صحرای غربی"
            },
            pol: {
                official: "Saharyjska Arabska Republika Demokratyczna",
                common: "Sahara Zachodnia"
            },
            por: {
                official: "Rep\xfablica \xc1rabe Saharaui Democr\xe1tica",
                common: "Saara Ocidental"
            },
            rus: {
                official: "Sahrawi Арабская Демократическая Республика",
                common: "Западная Сахара"
            },
            slk: {
                official: "Z\xe1padn\xe1 Sahara",
                common: "Z\xe1padn\xe1 Sahara"
            },
            spa: {
                official: "Rep\xfablica \xc1rabe Saharaui Democr\xe1tica",
                common: "Sahara Occidental"
            },
            srp: {
                official: "Сахарска Арапска Демократска Република",
                common: "Сахарска Република"
            },
            swe: {
                official: "V\xe4stsahara",
                common: "V\xe4stsahara"
            },
            tur: {
                official: "Sahra Demokratik Arap Cumhuriyeti",
                common: "Sahra Demokratik Arap Cumhuriyeti"
            },
            urd: {
                official: "صحراوی عرب عوامی جمہوریہ",
                common: "مغربی صحارا"
            },
            zho: {
                official: "阿拉伯撒哈拉民主共和国",
                common: "西撒哈拉"
            }
        },
        latlng: [
            24.5,
            -13
        ],
        landlocked: false,
        borders: [
            "DZA",
            "MRT",
            "MAR"
        ],
        area: 266000,
        demonyms: {
            eng: {
                f: "Sahrawi",
                m: "Sahrawi"
            }
        },
        flag: "\uD83C\uDDEA\uD83C\uDDED",
        maps: {
            googleMaps: "https://goo.gl/maps/7nU3mB69vP6zQp7A8",
            openStreetMaps: "https://www.openstreetmap.org/relation/5441968"
        },
        population: 510713,
        car: {
            signs: [
                ""
            ],
            side: "right"
        },
        timezones: [
            "UTC+00:00"
        ],
        continents: [
            "Africa"
        ],
        flags: {
            png: "https://flagcdn.com/w320/eh.png",
            svg: "https://flagcdn.com/eh.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -13.28,
                27.14
            ]
        }
    },
    {
        name: {
            common: "Nauru",
            official: "Republic of Nauru",
            nativeName: {
                eng: {
                    official: "Republic of Nauru",
                    common: "Nauru"
                },
                nau: {
                    official: "Republic of Nauru",
                    common: "Nauru"
                }
            }
        },
        tld: [
            ".nr"
        ],
        cca2: "NR",
        ccn3: "520",
        cca3: "NRU",
        cioc: "NRU",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+6",
            suffixes: [
                "74"
            ]
        },
        capital: [
            "Yaren"
        ],
        altSpellings: [
            "NR",
            "Naoero",
            "Pleasant Island",
            "Republic of Nauru",
            "Ripublik Naoero"
        ],
        region: "Oceania",
        subregion: "Micronesia",
        languages: {
            eng: "English",
            nau: "Nauru"
        },
        translations: {
            ara: {
                official: "جمهورية ناورو",
                common: "ناورو"
            },
            bre: {
                official: "Republik Nauru",
                common: "Nauru"
            },
            ces: {
                official: "Republika Nauru",
                common: "Nauru"
            },
            cym: {
                official: "Republic of Nauru",
                common: "Nauru"
            },
            deu: {
                official: "Republik Nauru",
                common: "Nauru"
            },
            est: {
                official: "Nauru Vabariik",
                common: "Nauru"
            },
            fin: {
                official: "Naurun tasavalta",
                common: "Nauru"
            },
            fra: {
                official: "R\xe9publique de Nauru",
                common: "Nauru"
            },
            hrv: {
                official: "Republika Nauru",
                common: "Nauru"
            },
            hun: {
                official: "Naurui K\xf6zt\xe1rsas\xe1g",
                common: "Nauru"
            },
            ita: {
                official: "Repubblica di Nauru",
                common: "Nauru"
            },
            jpn: {
                official: "ナウル共和国",
                common: "ナウル"
            },
            kor: {
                official: "나우루 공화국",
                common: "나우루"
            },
            nld: {
                official: "Republiek Nauru",
                common: "Nauru"
            },
            per: {
                official: "جمهوری نائورو",
                common: "نائورو"
            },
            pol: {
                official: "Republika Nauru",
                common: "Nauru"
            },
            por: {
                official: "Rep\xfablica de Nauru",
                common: "Nauru"
            },
            rus: {
                official: "Республика Науру",
                common: "Науру"
            },
            slk: {
                official: "Naursk\xe1 republika",
                common: "Nauru"
            },
            spa: {
                official: "Rep\xfablica de Nauru",
                common: "Nauru"
            },
            srp: {
                official: "Република Науру",
                common: "Науру"
            },
            swe: {
                official: "Republiken Nauru",
                common: "Nauru"
            },
            tur: {
                official: "Nauru Cumhuriyeti",
                common: "Nauru"
            },
            urd: {
                official: "جمہوریہ ناورو",
                common: "ناورو"
            },
            zho: {
                official: "瑙鲁共和国",
                common: "瑙鲁"
            }
        },
        latlng: [
            -0.53333333,
            166.91666666
        ],
        landlocked: false,
        area: 21,
        demonyms: {
            eng: {
                f: "Nauruan",
                m: "Nauruan"
            },
            fra: {
                f: "Nauruane",
                m: "Nauruan"
            }
        },
        flag: "\uD83C\uDDF3\uD83C\uDDF7",
        maps: {
            googleMaps: "https://goo.gl/maps/kyAGw6XEJgjSMsTK7",
            openStreetMaps: "https://www.openstreetmap.org/relation/571804"
        },
        population: 10834,
        gini: {
            2012: 34.8
        },
        car: {
            signs: [
                "NAU"
            ],
            side: "left"
        },
        timezones: [
            "UTC+12:00"
        ],
        continents: [
            "Oceania"
        ],
        flags: {
            png: "https://flagcdn.com/w320/nr.png",
            svg: "https://flagcdn.com/nr.svg",
            alt: "The flag of Nauru has a dark blue field with a thin yellow horizontal band across the center and a large white twelve-pointed star beneath the horizontal band on the hoist side of the field."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/nr.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/nr.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -0.55,
                166.92
            ]
        }
    },
    {
        name: {
            common: "Portugal",
            official: "Portuguese Republic",
            nativeName: {
                por: {
                    official: "Rep\xfablica portugu\xeas",
                    common: "Portugal"
                }
            }
        },
        tld: [
            ".pt"
        ],
        cca2: "PT",
        ccn3: "620",
        cca3: "PRT",
        cioc: "POR",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        idd: {
            root: "+3",
            suffixes: [
                "51"
            ]
        },
        capital: [
            "Lisbon"
        ],
        altSpellings: [
            "PT",
            "Portuguesa",
            "Portuguese Republic",
            "Rep\xfablica Portuguesa"
        ],
        region: "Europe",
        subregion: "Southern Europe",
        languages: {
            por: "Portuguese"
        },
        translations: {
            ara: {
                official: "الجمهورية البرتغالية",
                common: "البرتغال"
            },
            bre: {
                official: "Republik Portugalat",
                common: "Portugal"
            },
            ces: {
                official: "Portugalsk\xe1 republika",
                common: "Portugalsko"
            },
            cym: {
                official: "Portuguese Republic",
                common: "Portugal"
            },
            deu: {
                official: "Portugiesische Republik",
                common: "Portugal"
            },
            est: {
                official: "Portugali Vabariik",
                common: "Portugal"
            },
            fin: {
                official: "Portugalin tasavalta",
                common: "Portugali"
            },
            fra: {
                official: "R\xe9publique portugaise",
                common: "Portugal"
            },
            hrv: {
                official: "Portugalska Republika",
                common: "Portugal"
            },
            hun: {
                official: "Portug\xe1l K\xf6zt\xe1rsas\xe1g",
                common: "Portug\xe1lia"
            },
            ita: {
                official: "Repubblica portoghese",
                common: "Portogallo"
            },
            jpn: {
                official: "ポルトガル共和国",
                common: "ポルトガル"
            },
            kor: {
                official: "포르투갈 공화국",
                common: "포르투갈"
            },
            nld: {
                official: "Portugese Republiek",
                common: "Portugal"
            },
            per: {
                official: "جمهوری پرتغال",
                common: "پرتغال"
            },
            pol: {
                official: "Republika Portugalska",
                common: "Portugalia"
            },
            por: {
                official: "Rep\xfablica portugu\xeas",
                common: "Portugal"
            },
            rus: {
                official: "Португальская Республика",
                common: "Португалия"
            },
            slk: {
                official: "Portugalsk\xe1 republika",
                common: "Portugalsko"
            },
            spa: {
                official: "Rep\xfablica Portuguesa",
                common: "Portugal"
            },
            srp: {
                official: "Португалска Република",
                common: "Португал"
            },
            swe: {
                official: "Republiken Portugal",
                common: "Portugal"
            },
            tur: {
                official: "Portekiz Cumhuriyeti",
                common: "Portekiz"
            },
            urd: {
                official: "جمہوریہ پرتگال",
                common: "پرتگال"
            },
            zho: {
                official: "葡萄牙共和国",
                common: "葡萄牙"
            }
        },
        latlng: [
            39.5,
            -8
        ],
        landlocked: false,
        borders: [
            "ESP"
        ],
        area: 92090,
        demonyms: {
            eng: {
                f: "Portuguese",
                m: "Portuguese"
            },
            fra: {
                f: "Portugaise",
                m: "Portugais"
            }
        },
        flag: "\uD83C\uDDF5\uD83C\uDDF9",
        maps: {
            googleMaps: "https://goo.gl/maps/BaTBSyc4GWMmbAKB8",
            openStreetMaps: "https://www.openstreetmap.org/relation/295480"
        },
        population: 10305564,
        gini: {
            2018: 33.5
        },
        fifa: "POR",
        car: {
            signs: [
                "P"
            ],
            side: "right"
        },
        timezones: [
            "UTC-01:00",
            "UTC"
        ],
        continents: [
            "Europe"
        ],
        flags: {
            png: "https://flagcdn.com/w320/pt.png",
            svg: "https://flagcdn.com/pt.svg",
            alt: "The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/pt.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/pt.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                38.72,
                -9.13
            ]
        },
        postalCode: {
            format: "####-###",
            regex: "^(\\d{7})$"
        }
    },
    {
        name: {
            common: "Laos",
            official: "Lao People's Democratic Republic",
            nativeName: {
                lao: {
                    official: "ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ",
                    common: "ສປປລາວ"
                }
            }
        },
        tld: [
            ".la"
        ],
        cca2: "LA",
        ccn3: "418",
        cca3: "LAO",
        cioc: "LAO",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            LAK: {
                name: "Lao kip",
                symbol: "₭"
            }
        },
        idd: {
            root: "+8",
            suffixes: [
                "56"
            ]
        },
        capital: [
            "Vientiane"
        ],
        altSpellings: [
            "LA",
            "Lao",
            "Lao People's Democratic Republic",
            "Sathalanalat Paxathipatai Paxaxon Lao"
        ],
        region: "Asia",
        subregion: "South-Eastern Asia",
        languages: {
            lao: "Lao"
        },
        translations: {
            ara: {
                official: "جمهورية لاوس الديمقراطية الشعبية",
                common: "لاوس"
            },
            bre: {
                official: "Republik Demokratel ar Bobl Lao",
                common: "Laos"
            },
            ces: {
                official: "Laosk\xe1 lidově demokratick\xe1 republika",
                common: "Laos"
            },
            cym: {
                official: "Lao People's Democratic Republic",
                common: "Laos"
            },
            deu: {
                official: "Demokratische Volksrepublik Laos",
                common: "Laos"
            },
            est: {
                official: "Laose Demokraatlik Rahvavabariik",
                common: "Laos"
            },
            fin: {
                official: "Laosin demokraattinen kansantasavalta",
                common: "Laos"
            },
            fra: {
                official: "R\xe9publique d\xe9mocratique populaire lao",
                common: "Laos"
            },
            hrv: {
                official: "Narodna Demokratska Republika",
                common: "Laos"
            },
            hun: {
                official: "Laoszi N\xe9pi Demokratikus K\xf6zt\xe1rsas\xe1g",
                common: "Laosz"
            },
            ita: {
                official: "Repubblica democratica popolare del Laos",
                common: "Laos"
            },
            jpn: {
                official: "ラオス人民民主共和国",
                common: "ラオス人民民主共和国"
            },
            kor: {
                official: "라오 인민 민주 공화국",
                common: "라오스"
            },
            nld: {
                official: "Lao Democratische Volksrepubliek",
                common: "Laos"
            },
            per: {
                official: "جمهوری دموکراتیک خلق لائوس",
                common: "لائوس"
            },
            pol: {
                official: "Laotańska Republika Ludowo-Demokratyczna",
                common: "Laos"
            },
            por: {
                official: "Laos, Rep\xfablica Democr\xe1tica",
                common: "Laos"
            },
            rus: {
                official: "Лаосская Народно-Демократическая Республика",
                common: "Лаос"
            },
            slk: {
                official: "Laosk\xe1 ľudovodemokratick\xe1 republika",
                common: "Laos"
            },
            spa: {
                official: "Rep\xfablica Democr\xe1tica Popular Lao",
                common: "Laos"
            },
            srp: {
                official: "Лаошка Народна Демократска Република",
                common: "Лаос"
            },
            swe: {
                official: "Demokratiska folkrepubliken Laos",
                common: "Laos"
            },
            tur: {
                official: "Laos Demokratik Halk Cumhuriyeti",
                common: "Laos"
            },
            urd: {
                official: "عوامی جمہوری جمہوریہ لاؤ",
                common: "لاؤس"
            },
            zho: {
                official: "老挝人民民主共和国",
                common: "老挝"
            }
        },
        latlng: [
            18,
            105
        ],
        landlocked: true,
        borders: [
            "MMR",
            "KHM",
            "CHN",
            "THA",
            "VNM"
        ],
        area: 236800,
        demonyms: {
            eng: {
                f: "Laotian",
                m: "Laotian"
            },
            fra: {
                f: "Laotienne",
                m: "Laotien"
            }
        },
        flag: "\uD83C\uDDF1\uD83C\uDDE6",
        maps: {
            googleMaps: "https://goo.gl/maps/F3asVB7sRKgSnwbE7",
            openStreetMaps: "https://www.openstreetmap.org/relation/49903"
        },
        population: 7275556,
        gini: {
            2018: 38.8
        },
        fifa: "LAO",
        car: {
            signs: [
                "LAO"
            ],
            side: "right"
        },
        timezones: [
            "UTC+07:00"
        ],
        continents: [
            "Asia"
        ],
        flags: {
            png: "https://flagcdn.com/w320/la.png",
            svg: "https://flagcdn.com/la.svg",
            alt: "The flag of Laos is composed of three horizontal bands of red, blue and red. The blue band is twice the height of the red bands and bears a white circle at its center."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/la.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/la.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                17.97,
                102.6
            ]
        },
        postalCode: {
            format: "#####",
            regex: "^(\\d{5})$"
        }
    },
    {
        name: {
            common: "Saint Pierre and Miquelon",
            official: "Saint Pierre and Miquelon",
            nativeName: {
                fra: {
                    official: "Collectivit\xe9 territoriale de Saint-Pierre-et-Miquelon",
                    common: "Saint-Pierre-et-Miquelon"
                }
            }
        },
        tld: [
            ".pm"
        ],
        cca2: "PM",
        ccn3: "666",
        cca3: "SPM",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "08"
            ]
        },
        capital: [
            "Saint-Pierre"
        ],
        altSpellings: [
            "PM",
            "Collectivit\xe9 territoriale de Saint-Pierre-et-Miquelon"
        ],
        region: "Americas",
        subregion: "North America",
        languages: {
            fra: "French"
        },
        translations: {
            ara: {
                official: "سان بيير وميكلون",
                common: "سان بيير وميكلون"
            },
            bre: {
                official: "Sant-P\xear-ha-Mikelon",
                common: "Sant-P\xear-ha-Mikelon"
            },
            ces: {
                official: "Saint-Pierre a Miquelon",
                common: "Saint-Pierre a Miquelon"
            },
            cym: {
                official: "Saint Pierre and Miquelon",
                common: "Saint Pierre and Miquelon"
            },
            deu: {
                official: "St. Pierre und Miquelon",
                common: "St. Pierre und Miquelon"
            },
            est: {
                official: "Saint-Pierre’i ja Miqueloni territoriaal\xfchendus",
                common: "Saint-Pierre ja Miquelon"
            },
            fin: {
                official: "Saint-Pierre ja Miquelon",
                common: "Saint-Pierre ja Miquelon"
            },
            fra: {
                official: "Saint-Pierre-et-Miquelon",
                common: "Saint-Pierre-et-Miquelon"
            },
            hrv: {
                official: "Saint Pierre i Miquelon",
                common: "Sveti Petar i Mikelon"
            },
            hun: {
                official: "Saint-Pierre \xe9s Miquelon",
                common: "Saint-Pierre \xe9s Miquelon"
            },
            ita: {
                official: "Saint Pierre e Miquelon",
                common: "Saint-Pierre e Miquelon"
            },
            jpn: {
                official: "サンピエール島\xb7ミクロン島",
                common: "サンピエール島・ミクロン島"
            },
            kor: {
                official: "생피에르 미클롱",
                common: "생피에르 미클롱"
            },
            nld: {
                official: "Saint-Pierre en Miquelon",
                common: "Saint Pierre en Miquelon"
            },
            per: {
                official: "سن-پیر-ا-میکلون",
                common: "سن-پیِر و میکلُن"
            },
            pol: {
                official: "Saint-Pierre i Miquelon",
                common: "Saint-Pierre i Miquelon"
            },
            por: {
                official: "Saint Pierre e Miquelon",
                common: "Saint-Pierre e Miquelon"
            },
            rus: {
                official: "Сен-Пьер и Микелон",
                common: "Сен-Пьер и Микелон"
            },
            slk: {
                official: "Ostrovy Saint Pierre a Miquelon",
                common: "Saint Pierre a Miquelon"
            },
            spa: {
                official: "San Pedro y Miquel\xf3n",
                common: "San Pedro y Miquel\xf3n"
            },
            srp: {
                official: "Сен Пјер и Микелон",
                common: "Сен Пјер и Микелон"
            },
            swe: {
                official: "Saint-Pierre och Miquelon",
                common: "Saint-Pierre och Miquelon"
            },
            tur: {
                official: "Saint Pierre ve Miquelon",
                common: "Saint Pierre ve Miquelon"
            },
            urd: {
                official: "سینٹ پیئر و میکیلون",
                common: "سینٹ پیئر و میکیلون"
            },
            zho: {
                official: "圣皮埃尔和密克隆",
                common: "圣皮埃尔和密克隆"
            }
        },
        latlng: [
            46.83333333,
            -56.33333333
        ],
        landlocked: false,
        area: 242,
        demonyms: {
            eng: {
                f: "Saint-Pierrais, Miquelonnais",
                m: "Saint-Pierrais, Miquelonnais"
            },
            fra: {
                f: "Saint-Pierraise, Miquelonaise",
                m: "Saint-Pierrais, Miquelonais"
            }
        },
        flag: "\uD83C\uDDF5\uD83C\uDDF2",
        maps: {
            googleMaps: "https://goo.gl/maps/bUM8Yc8pA8ghyhmt6",
            openStreetMaps: "https://www.openstreetmap.org/relation/3406826"
        },
        population: 6069,
        car: {
            signs: [
                "F"
            ],
            side: "right"
        },
        timezones: [
            "UTC-03:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/pm.png",
            svg: "https://flagcdn.com/pm.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                46.77,
                -56.18
            ]
        },
        postalCode: {
            format: "#####",
            regex: "^(97500)$"
        }
    },
    {
        name: {
            common: "Caribbean Netherlands",
            official: "Bonaire, Sint Eustatius and Saba",
            nativeName: {
                nld: {
                    official: "Bonaire, Sint Eustatius en Saba",
                    common: "Caribisch Nederland"
                },
                pap: {
                    official: "Boneiru, Sint Eustatius y Saba",
                    common: "Boneiru, Sint Eustatius y Saba"
                }
            }
        },
        tld: [
            ".bq",
            ".nl"
        ],
        cca2: "BQ",
        ccn3: "535",
        cca3: "BES",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "99"
            ]
        },
        capital: [
            "Kralendijk"
        ],
        altSpellings: [
            "BES islands"
        ],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            eng: "English",
            nld: "Dutch",
            pap: "Papiamento"
        },
        translations: {
            ara: {
                official: "بونير وسينت أوستاتيوس وسابا",
                common: "الجزر الكاريبية الهولندية"
            },
            bre: {
                official: "Bonaire, Sint Eustatius ha Saba",
                common: "Bonaire, Sint Eustatius ha Saba"
            },
            ces: {
                official: "Karibsk\xe9 Nizozemsko",
                common: "Karibsk\xe9 Nizozemsko"
            },
            cym: {
                official: "Bonaire, Sint Eustatius and Saba",
                common: "Caribbean Netherlands"
            },
            deu: {
                official: "Bonaire, Sint Eustatius und Saba",
                common: "Karibische Niederlande"
            },
            est: {
                official: "Bonaire, Sint Eustatius ja Saba",
                common: "Bonaire, Sint Eustatius ja Saba"
            },
            fin: {
                official: "Bonaire, Sint Eustatius ja Saba",
                common: "Bonaire, Sint Eustatius ja Saba"
            },
            fra: {
                official: "Bonaire, Saint-Eustache et Saba",
                common: "Pays-Bas carib\xe9ens"
            },
            hrv: {
                official: "Bonaire, Sint Eustatius i Saba",
                common: "Bonaire, Sint Eustatius i Saba"
            },
            hun: {
                official: "Bonaire",
                common: "Bonaire"
            },
            ita: {
                official: "Bonaire, Sint Eustatius e Saba",
                common: "Paesi Bassi caraibici"
            },
            jpn: {
                official: "ボネール、シント・ユースタティウスおよびサバ",
                common: "ボネール、シント・ユースタティウスおよびサバ"
            },
            kor: {
                official: "보네르, 신트외스타티위스, 사바",
                common: "카리브 네덜란드"
            },
            nld: {
                official: "Bonaire, Sint Eustatius en Saba",
                common: "Caribisch Nederland"
            },
            per: {
                official: "جزایر کارائیب هلند",
                common: "جزایر کارائیب هلند"
            },
            pol: {
                official: "Bonaire, Sint Eustatius i Saba",
                common: "Antyle Holenderskie"
            },
            por: {
                official: "Bonaire, Saba e Santo Eust\xe1quio",
                common: "Pa\xedses Baixos Caribenhos"
            },
            rus: {
                official: "Бонэйр, Синт-Эстатиус и Саба",
                common: "Карибские Нидерланды"
            },
            slk: {
                official: "Bonaire, Sint Eustatius a Saba",
                common: "Bonaire, Sint Eustatius a Saba"
            },
            spa: {
                official: "Bonaire, San Eustaquio y Saba",
                common: "Caribe Neerland\xe9s"
            },
            srp: {
                official: "Бонер, Свети Еустахије и Саба",
                common: "Карипска Холандија"
            },
            swe: {
                official: "Bonaire, Sint Eustatius and Saba",
                common: "Karibiska Nederl\xe4nderna"
            },
            tur: {
                official: "Karayip Hollandası",
                common: "Karayip Hollandası"
            },
            urd: {
                official: "بونایر، سینٹ ایوسٹائیس اور سابا",
                common: "کیریبین نیدرلینڈز"
            },
            zho: {
                official: "荷蘭加勒比區",
                common: "荷蘭加勒比區"
            }
        },
        latlng: [
            12.18,
            -68.25
        ],
        landlocked: false,
        area: 328,
        demonyms: {
            eng: {
                f: "Dutch",
                m: "Dutch"
            },
            fra: {
                f: "N\xe9erlandaise",
                m: "N\xe9erlandais"
            }
        },
        flag: "\uD83C\uDDE7\uD83C\uDDF6",
        maps: {
            googleMaps: "https://goo.gl/maps/4XVes1P6uEDTz77WA",
            openStreetMaps: "https://www.openstreetmap.org/relation/1216720"
        },
        population: 25987,
        car: {
            signs: [
                ""
            ],
            side: "right"
        },
        timezones: [
            "UTC-04:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/bq.png",
            svg: "https://flagcdn.com/bq.svg"
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/bq.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/bq.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                12.14,
                -68.27
            ]
        }
    },
    {
        name: {
            common: "Saint Lucia",
            official: "Saint Lucia",
            nativeName: {
                eng: {
                    official: "Saint Lucia",
                    common: "Saint Lucia"
                }
            }
        },
        tld: [
            ".lc"
        ],
        cca2: "LC",
        ccn3: "662",
        cca3: "LCA",
        cioc: "LCA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+1",
            suffixes: [
                "758"
            ]
        },
        capital: [
            "Castries"
        ],
        altSpellings: [
            "LC"
        ],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            eng: "English"
        },
        translations: {
            ara: {
                official: "سانت لوسيا",
                common: "سانت لوسيا"
            },
            bre: {
                official: "Santez-Lusia",
                common: "Santez-Lusia"
            },
            ces: {
                official: "Svat\xe1 Lucie",
                common: "Svat\xe1 Lucie"
            },
            cym: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            deu: {
                official: "St. Lucia",
                common: "St. Lucia"
            },
            est: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            fin: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            fra: {
                official: "Sainte-Lucie",
                common: "Sainte-Lucie"
            },
            hrv: {
                official: "Sveta Lucija",
                common: "Sveta Lucija"
            },
            hun: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            ita: {
                official: "Santa Lucia",
                common: "Santa Lucia"
            },
            jpn: {
                official: "セントルシア",
                common: "セントルシア"
            },
            kor: {
                official: "세인트루시아",
                common: "세인트루시아"
            },
            nld: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            per: {
                official: "سنت لوسیا",
                common: "سنت لوسیا"
            },
            pol: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            por: {
                official: "Santa L\xfacia",
                common: "Santa L\xfacia"
            },
            rus: {
                official: "Сент-Люсия",
                common: "Сент-Люсия"
            },
            slk: {
                official: "Sv\xe4t\xe1 Lucia",
                common: "Sv\xe4t\xe1 Lucia"
            },
            spa: {
                official: "Santa Luc\xeda",
                common: "Santa Luc\xeda"
            },
            srp: {
                official: "Света Луција",
                common: "Света Луција"
            },
            swe: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            tur: {
                official: "Saint Lucia",
                common: "Saint Lucia"
            },
            urd: {
                official: "سینٹ لوسیا",
                common: "سینٹ لوسیا"
            },
            zho: {
                official: "圣卢西亚",
                common: "圣卢西亚"
            }
        },
        latlng: [
            13.88333333,
            -60.96666666
        ],
        landlocked: false,
        area: 616,
        demonyms: {
            eng: {
                f: "Saint Lucian",
                m: "Saint Lucian"
            },
            fra: {
                f: "Saint-Lucienne",
                m: "Saint-Lucien"
            }
        },
        flag: "\uD83C\uDDF1\uD83C\uDDE8",
        maps: {
            googleMaps: "https://goo.gl/maps/4HhJ2jkPdSL9BPRcA",
            openStreetMaps: "https://www.openstreetmap.org/relation/550728"
        },
        population: 183629,
        gini: {
            2016: 51.2
        },
        fifa: "LCA",
        car: {
            signs: [
                "WL"
            ],
            side: "left"
        },
        timezones: [
            "UTC-04:00"
        ],
        continents: [
            "North America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/lc.png",
            svg: "https://flagcdn.com/lc.svg",
            alt: "The flag of Saint Lucia has a light blue field, at the center of which are two triangles which share a common base — a small golden-yellow isosceles triangle superimposed on a large white-edged black isosceles triangle."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/lc.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/lc.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                14,
                -61
            ]
        }
    },
    {
        name: {
            common: "S\xe3o Tom\xe9 and Pr\xedncipe",
            official: "Democratic Republic of S\xe3o Tom\xe9 and Pr\xedncipe",
            nativeName: {
                por: {
                    official: "Rep\xfablica Democr\xe1tica do S\xe3o Tom\xe9 e Pr\xedncipe",
                    common: "S\xe3o Tom\xe9 e Pr\xedncipe"
                }
            }
        },
        tld: [
            ".st"
        ],
        cca2: "ST",
        ccn3: "678",
        cca3: "STP",
        cioc: "STP",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            STN: {
                name: "S\xe3o Tom\xe9 and Pr\xedncipe dobra",
                symbol: "Db"
            }
        },
        idd: {
            root: "+2",
            suffixes: [
                "39"
            ]
        },
        capital: [
            "S\xe3o Tom\xe9"
        ],
        altSpellings: [
            "ST",
            "Democratic Republic of S\xe3o Tom\xe9 and Pr\xedncipe",
            "Sao Tome and Principe",
            "Rep\xfablica Democr\xe1tica de S\xe3o Tom\xe9 e Pr\xedncipe"
        ],
        region: "Africa",
        subregion: "Middle Africa",
        languages: {
            por: "Portuguese"
        },
        translations: {
            ara: {
                official: "جمهورية ساو تومي وبرينسيب الديمقراطية",
                common: "ساو تومي وبرينسيب"
            },
            bre: {
                official: "Republik Demokratel S\xe3o Tom\xe9 ha Pr\xedncipe",
                common: "S\xe3o Tom\xe9 ha Pr\xedncipe"
            },
            ces: {
                official: "Demokratick\xe1 republika Svat\xfd Tom\xe1š a Princův ostrov",
                common: "Svat\xfd Tom\xe1š a Princův ostrov"
            },
            cym: {
                official: "Democratic Republic of S\xe3o Tom\xe9 and Pr\xedncipe",
                common: "S\xe3o Tom\xe9 and Pr\xedncipe"
            },
            deu: {
                official: "Demokratische Republik S\xe3o Tom\xe9 und Pr\xedncipe",
                common: "S\xe3o Tom\xe9 und Pr\xedncipe"
            },
            est: {
                official: "S\xe3o Tom\xe9 ja Pr\xedncipe Demokraatlik Vabariik",
                common: "S\xe3o Tom\xe9 ja Pr\xedncipe"
            },
            fin: {
                official: "S\xe3o Tom\xe9 ja Pr\xedncipen demokraattinen tasavalta",
                common: "S\xe3o T\xe9me ja Pr\xedncipe"
            },
            fra: {
                official: "R\xe9publique d\xe9mocratique de S\xe3o Tom\xe9 et Pr\xedncipe",
                common: "S\xe3o Tom\xe9 et Pr\xedncipe"
            },
            hrv: {
                official: "Demokratska Republika S\xe3o Tome i Principe",
                common: "Sveti Toma i Princip"
            },
            hun: {
                official: "S\xe3o Tom\xe9 \xe9s Pr\xedncipe Demokratikus K\xf6zt\xe1rsas\xe1g",
                common: "S\xe3o Tom\xe9 \xe9s Pr\xedncipe"
            },
            ita: {
                official: "Repubblica democratica di S\xe3o Tom\xe9 e Pr\xedncipe",
                common: "S\xe3o Tom\xe9 e Pr\xedncipe"
            },
            jpn: {
                official: "サントメ\xb7プリンシペ民主共和国",
                common: "サントメ・プリンシペ"
            },
            kor: {
                official: "상투메 프린시페 민주 공화국",
                common: "상투메 프린시페"
            },
            nld: {
                official: "Democratische Republiek Sao Tom\xe9 en Principe",
                common: "Sao Tom\xe9 en Principe"
            },
            per: {
                official: "جمهوری دموکراتیک سائوتومه و پرنسیپ",
                common: "سائوتومه و پرنسیپ"
            },
            pol: {
                official: "Demokratyczna Republika Wysp Świętego Tomasza i Książęcej",
                common: "Wyspy Świętego Tomasza i Książęca"
            },
            por: {
                official: "Rep\xfablica Democr\xe1tica de S\xe3o Tom\xe9 e Pr\xedncipe",
                common: "S\xe3o Tom\xe9 e Pr\xedncipe"
            },
            rus: {
                official: "Демократическая Республика Сан-Томе и Принсипи",
                common: "Сан-Томе и Принсипи"
            },
            slk: {
                official: "Demokratick\xe1 republika Sv\xe4t\xe9ho Tom\xe1ša A princovho ostrova",
                common: "Sv\xe4t\xfd Tom\xe1š a Princov ostrov"
            },
            spa: {
                official: "Rep\xfablica Democr\xe1tica de Santo Tom\xe9 y Pr\xedncipe",
                common: "Santo Tom\xe9 y Pr\xedncipe"
            },
            srp: {
                official: "Демократска Република Сао Томе и Принсипе",
                common: "Сао Томе и Принсипе"
            },
            swe: {
                official: "Demokratiska republiken S\xe3o Tom\xe9 och Pr\xedncipe",
                common: "S\xe3o Tom\xe9 och Pr\xedncipe"
            },
            tur: {
                official: "S\xe3o Tom\xe9 ve Pr\xedncipe Demokratik Cumhuriyeti",
                common: "S\xe3o Tom\xe9 ve Pr\xedncipe"
            },
            urd: {
                official: "جمہوریہ ساؤ ٹومے و پرنسپے",
                common: "ساؤ ٹومے و پرنسپے"
            },
            zho: {
                official: "圣多美和普林西比民主共和国",
                common: "圣多美和普林西比"
            }
        },
        latlng: [
            1,
            7
        ],
        landlocked: false,
        area: 964,
        demonyms: {
            eng: {
                f: "Sao Tomean",
                m: "Sao Tomean"
            },
            fra: {
                f: "Santom\xe9enne",
                m: "Santom\xe9en"
            }
        },
        flag: "\uD83C\uDDF8\uD83C\uDDF9",
        maps: {
            googleMaps: "https://goo.gl/maps/9EUppm13RtPX9oF46",
            openStreetMaps: "https://www.openstreetmap.org/relation/535880"
        },
        population: 219161,
        gini: {
            2017: 56.3
        },
        fifa: "STP",
        car: {
            signs: [
                "STP"
            ],
            side: "right"
        },
        timezones: [
            "UTC"
        ],
        continents: [
            "Africa"
        ],
        flags: {
            png: "https://flagcdn.com/w320/st.png",
            svg: "https://flagcdn.com/st.svg",
            alt: "The flag of South Sudan is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. A blue equilateral triangle which spans about two-fifth the width of the field is superimposed on the hoist side with its base on the hoist end of the field. At the center of this triangle is a five-pointed yellow star."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/st.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/st.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                0.34,
                6.73
            ]
        }
    },
    {
        name: {
            common: "South Africa",
            official: "Republic of South Africa",
            nativeName: {
                afr: {
                    official: "Republiek van Suid-Afrika",
                    common: "South Africa"
                },
                eng: {
                    official: "Republic of South Africa",
                    common: "South Africa"
                },
                nbl: {
                    official: "IRiphabliki yeSewula Afrika",
                    common: "Sewula Afrika"
                },
                nso: {
                    official: "Rephaboliki ya Afrika-Borwa ",
                    common: "Afrika-Borwa"
                },
                sot: {
                    official: "Rephaboliki ya Afrika Borwa",
                    common: "Afrika Borwa"
                },
                ssw: {
                    official: "IRiphabhulikhi yeNingizimu Afrika",
                    common: "Ningizimu Afrika"
                },
                tsn: {
                    official: "Rephaboliki ya Aforika Borwa",
                    common: "Aforika Borwa"
                },
                tso: {
                    official: "Riphabliki ra Afrika Dzonga",
                    common: "Afrika Dzonga"
                },
                ven: {
                    official: "Riphabuḽiki ya Afurika Tshipembe",
                    common: "Afurika Tshipembe"
                },
                xho: {
                    official: "IRiphabliki yaseMzantsi Afrika",
                    common: "Mzantsi Afrika"
                },
                zul: {
                    official: "IRiphabliki yaseNingizimu Afrika",
                    common: "Ningizimu Afrika"
                }
            }
        },
        tld: [
            ".za"
        ],
        cca2: "ZA",
        ccn3: "710",
        cca3: "ZAF",
        cioc: "RSA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            ZAR: {
                name: "South African rand",
                symbol: "R"
            }
        },
        idd: {
            root: "+2",
            suffixes: [
                "7"
            ]
        },
        capital: [
            "Pretoria",
            "Bloemfontein",
            "Cape Town"
        ],
        altSpellings: [
            "ZA",
            "RSA",
            "Suid-Afrika",
            "Republic of South Africa"
        ],
        region: "Africa",
        subregion: "Southern Africa",
        languages: {
            afr: "Afrikaans",
            eng: "English",
            nbl: "Southern Ndebele",
            nso: "Northern Sotho",
            sot: "Southern Sotho",
            ssw: "Swazi",
            tsn: "Tswana",
            tso: "Tsonga",
            ven: "Venda",
            xho: "Xhosa",
            zul: "Zulu"
        },
        translations: {
            ara: {
                official: "جمهورية جنوب أفريقيا",
                common: "جنوب أفريقيا"
            },
            bre: {
                official: "Republik Suafrika",
                common: "Suafrika"
            },
            ces: {
                official: "Jihoafrick\xe1 republika",
                common: "Jihoafrick\xe1 republika"
            },
            cym: {
                official: "Republic of South Africa",
                common: "South Africa"
            },
            deu: {
                official: "Republik S\xfcdafrika",
                common: "S\xfcdafrika"
            },
            est: {
                official: "L\xf5una-Aafrika Vabariik",
                common: "L\xf5una-Aafrika Vabariik"
            },
            fin: {
                official: "Etel\xe4-Afrikan tasavalta",
                common: "Etel\xe4-Afrikka"
            },
            fra: {
                official: "R\xe9publique d'Afrique du Sud",
                common: "Afrique du Sud"
            },
            hrv: {
                official: "Južnoafrička Republika",
                common: "Južna Afrika"
            },
            hun: {
                official: "D\xe9l-afrikai K\xf6zt\xe1rsas\xe1g",
                common: "D\xe9l-afrikai K\xf6zt\xe1rsas\xe1g"
            },
            ita: {
                official: "Repubblica del Sud Africa",
                common: "Sud Africa"
            },
            jpn: {
                official: "南アフリカ共和国",
                common: "南アフリカ"
            },
            kor: {
                official: "남아프리카 공화국",
                common: "남아프리카"
            },
            nld: {
                official: "Republiek Zuid-Afrika",
                common: "Zuid-Afrika"
            },
            per: {
                official: "جمهوری آفریقای جنوبی",
                common: "آفریقای جنوبی"
            },
            pol: {
                official: "Republika Południowej Afryki",
                common: "Południowa Afryka"
            },
            por: {
                official: "Rep\xfablica da \xc1frica do Sul",
                common: "\xc1frica do Sul"
            },
            rus: {
                official: "Южно-Африканская Республика",
                common: "Южная Африка"
            },
            slk: {
                official: "Juhoafrick\xe1 republika",
                common: "Južn\xe1 Afrika"
            },
            spa: {
                official: "Rep\xfablica de Sud\xe1frica",
                common: "Sud\xe1frica"
            },
            srp: {
                official: "Република Јужна Африка",
                common: "Јужноафричка Република"
            },
            swe: {
                official: "Republiken Sydafrika",
                common: "Sydafrika"
            },
            tur: {
                official: "G\xfcney Afrika Cumhuriyeti",
                common: "G\xfcney Afrika"
            },
            urd: {
                official: "جمہوریہ جنوبی افریقا",
                common: "جنوبی افریقا"
            },
            zho: {
                official: "南非共和国",
                common: "南非"
            }
        },
        latlng: [
            -29,
            24
        ],
        landlocked: false,
        borders: [
            "BWA",
            "LSO",
            "MOZ",
            "NAM",
            "SWZ",
            "ZWE"
        ],
        area: 1221037,
        demonyms: {
            eng: {
                f: "South African",
                m: "South African"
            },
            fra: {
                f: "Sud-africaine",
                m: "Sud-africain"
            }
        },
        flag: "\uD83C\uDDFF\uD83C\uDDE6",
        maps: {
            googleMaps: "https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6",
            openStreetMaps: "https://www.openstreetmap.org/relation/87565"
        },
        population: 59308690,
        gini: {
            2014: 63
        },
        fifa: "RSA",
        car: {
            signs: [
                "ZA"
            ],
            side: "left"
        },
        timezones: [
            "UTC+02:00"
        ],
        continents: [
            "Africa"
        ],
        flags: {
            png: "https://flagcdn.com/w320/za.png",
            svg: "https://flagcdn.com/za.svg",
            alt: "The flag of South Africa is composed of two equal horizontal bands of red and blue, with a yellow-edged black isosceles triangle superimposed on the hoist side of the field. This triangle has its base centered on the hoist end, spans about two-fifth the width and two-third the height of the field, and is enclosed on its sides by the arms of a white-edged green horizontally oriented Y-shaped band which extends along the boundary of the red and blue bands to the fly end of the field."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/za.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/za.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -25.7,
                28.22
            ]
        },
        postalCode: {
            format: "####",
            regex: "^(\\d{4})$"
        }
    },
    {
        name: {
            common: "Suriname",
            official: "Republic of Suriname",
            nativeName: {
                nld: {
                    official: "Republiek Suriname",
                    common: "Suriname"
                }
            }
        },
        tld: [
            ".sr"
        ],
        cca2: "SR",
        ccn3: "740",
        cca3: "SUR",
        cioc: "SUR",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            SRD: {
                name: "Surinamese dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "97"
            ]
        },
        capital: [
            "Paramaribo"
        ],
        altSpellings: [
            "SR",
            "Sarnam",
            "Sranangron",
            "Republic of Suriname",
            "Republiek Suriname"
        ],
        region: "Americas",
        subregion: "South America",
        languages: {
            nld: "Dutch"
        },
        translations: {
            ara: {
                official: "جمهورية سورينام",
                common: "سورينام"
            },
            bre: {
                official: "Republik Surinam",
                common: "Surinam"
            },
            ces: {
                official: "Republika Surinam",
                common: "Surinam"
            },
            cym: {
                official: "Republic of Suriname",
                common: "Suriname"
            },
            deu: {
                official: "Republik Suriname",
                common: "Suriname"
            },
            est: {
                official: "Suriname Vabariik",
                common: "Suriname"
            },
            fin: {
                official: "Surinamen tasavalta",
                common: "Suriname"
            },
            fra: {
                official: "R\xe9publique du Suriname",
                common: "Surinam"
            },
            hrv: {
                official: "Republika Surinam",
                common: "Surinam"
            },
            hun: {
                official: "Suriname K\xf6zt\xe1rsas\xe1g",
                common: "Suriname"
            },
            ita: {
                official: "Repubblica del Suriname",
                common: "Suriname"
            },
            jpn: {
                official: "スリナム共和国",
                common: "スリナム"
            },
            kor: {
                official: "수리남 공화국",
                common: "수리남"
            },
            nld: {
                official: "Republiek Suriname",
                common: "Suriname"
            },
            per: {
                official: "جمهوری سورینام",
                common: "سورینام"
            },
            pol: {
                official: "Republika Surinamu",
                common: "Surinam"
            },
            por: {
                official: "Rep\xfablica do Suriname",
                common: "Suriname"
            },
            rus: {
                official: "Республика Суринам",
                common: "Суринам"
            },
            slk: {
                official: "Surinamsk\xe1 republika",
                common: "Surinam"
            },
            spa: {
                official: "Rep\xfablica de Suriname",
                common: "Surinam"
            },
            srp: {
                official: "Република Суринам",
                common: "Суринам"
            },
            swe: {
                official: "Republiken Surinam",
                common: "Surinam"
            },
            tur: {
                official: "Surinam Cumhuriyeti",
                common: "Surinam"
            },
            urd: {
                official: "جمہوریہ سرینام",
                common: "سرینام"
            },
            zho: {
                official: "苏里南共和国",
                common: "苏里南"
            }
        },
        latlng: [
            4,
            -56
        ],
        landlocked: false,
        borders: [
            "BRA",
            "GUF",
            "GUY"
        ],
        area: 163820,
        demonyms: {
            eng: {
                f: "Surinamer",
                m: "Surinamer"
            },
            fra: {
                f: "Surinamaise",
                m: "Surinamais"
            }
        },
        flag: "\uD83C\uDDF8\uD83C\uDDF7",
        maps: {
            googleMaps: "https://goo.gl/maps/iy7TuQLSi4qgoBoG7",
            openStreetMaps: "https://www.openstreetmap.org/relation/287082"
        },
        population: 586634,
        gini: {
            1999: 57.9
        },
        fifa: "SUR",
        car: {
            signs: [
                "SME"
            ],
            side: "left"
        },
        timezones: [
            "UTC-03:00"
        ],
        continents: [
            "South America"
        ],
        flags: {
            png: "https://flagcdn.com/w320/sr.png",
            svg: "https://flagcdn.com/sr.svg",
            alt: "The flag of Suriname is composed of five horizontal bands of green, white, red, white and green in the ratio of 2:1:4:1:2. A large five-pointed yellow star is centered in the red band."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/sr.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/sr.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                5.83,
                -55.17
            ]
        }
    },
    {
        name: {
            common: "DR Congo",
            official: "Democratic Republic of the Congo",
            nativeName: {
                fra: {
                    official: "R\xe9publique d\xe9mocratique du Congo",
                    common: "RD Congo"
                },
                kon: {
                    official: "Repubilika ya Kongo Demokratiki",
                    common: "Repubilika ya Kongo Demokratiki"
                },
                lin: {
                    official: "Republiki ya Kong\xf3 Demokratiki",
                    common: "Republiki ya Kong\xf3 Demokratiki"
                },
                lua: {
                    official: "Ditunga dia Kongu wa Mungalaata",
                    common: "Ditunga dia Kongu wa Mungalaata"
                },
                swa: {
                    official: "Jamhuri ya Kidemokrasia ya Kongo",
                    common: "Jamhuri ya Kidemokrasia ya Kongo"
                }
            }
        },
        tld: [
            ".cd"
        ],
        cca2: "CD",
        ccn3: "180",
        cca3: "COD",
        cioc: "COD",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            CDF: {
                name: "Congolese franc",
                symbol: "FC"
            }
        },
        idd: {
            root: "+2",
            suffixes: [
                "43"
            ]
        },
        capital: [
            "Kinshasa"
        ],
        altSpellings: [
            "CD",
            "DR Congo",
            "Congo-Kinshasa",
            "Congo, the Democratic Republic of the",
            "DRC"
        ],
        region: "Africa",
        subregion: "Middle Africa",
        languages: {
            fra: "French",
            kon: "Kikongo",
            lin: "Lingala",
            lua: "Tshiluba",
            swa: "Swahili"
        },
        translations: {
            ara: {
                official: "جمهورية الكونغو الديمقراطية",
                common: "الكونغو"
            },
            bre: {
                official: "Republik Demokratel Kongo",
                common: "Kongo-Kinshasa"
            },
            ces: {
                official: "Demokratick\xe1 republika Kongo",
                common: "DR Kongo"
            },
            cym: {
                official: "Gweriniaeth Ddemocrataidd Congo",
                common: "Gweriniaeth Ddemocrataidd Congo"
            },
            deu: {
                official: "Demokratische Republik Kongo",
                common: "Kongo (Dem. Rep.)"
            },
            est: {
                official: "Kongo Demokraatlik Vabariik",
                common: "Kongo DV"
            },
            fin: {
                official: "Kongon demokraattinen tasavalta",
                common: "Kongon demokraattinen tasavalta"
            },
            fra: {
                official: "R\xe9publique d\xe9mocratique du Congo",
                common: "Congo (R\xe9p. d\xe9m.)"
            },
            hrv: {
                official: "Demokratska Republika Kongo",
                common: "Kongo, Demokratska Republika"
            },
            hun: {
                official: "Kong\xf3i Demokratikus K\xf6zt\xe1rsas\xe1g",
                common: "Kong\xf3i Demokratikus K\xf6zt\xe1rsas\xe1g"
            },
            ita: {
                official: "Repubblica Democratica del Congo",
                common: "Congo (Rep. Dem.)"
            },
            jpn: {
                official: "コンゴ民主共和国",
                common: "コンゴ民主共和国"
            },
            kor: {
                official: "콩고 민주 공화국",
                common: "콩고 민주 공화국"
            },
            nld: {
                official: "Democratische Republiek Congo",
                common: "Congo (DRC)"
            },
            per: {
                official: "جمهوری دموکراتیک کنگو",
                common: "کنگو دموکراتیک"
            },
            pol: {
                official: "Demokratyczna Republika Konga",
                common: "Demokratyczna Republika Konga"
            },
            por: {
                official: "Rep\xfablica Democr\xe1tica do Congo",
                common: "Rep\xfablica Democr\xe1tica do Congo"
            },
            rus: {
                official: "Демократическая Республика Конго",
                common: "Демократическая Республика Конго"
            },
            slk: {
                official: "Konžsk\xe1 demokratick\xe1 republika",
                common: "Kongo"
            },
            spa: {
                official: "Rep\xfablica Democr\xe1tica del Congo",
                common: "Congo (Rep. Dem.)"
            },
            srp: {
                official: "Демократска Република Конго",
                common: "ДР Конго"
            },
            swe: {
                official: "Demokratiska republiken Kongo",
                common: "Kongo-Kinshasa"
            },
            tur: {
                official: "Kongo Demokratik Cumhuriyeti",
                common: "Kongo Demokratik Cumhuriyeti"
            },
            urd: {
                official: "جمہوری جمہوریہ کانگو",
                common: "کانگو"
            },
            zho: {
                official: "刚果民主共和国",
                common: "民主刚果"
            }
        },
        latlng: [
            0,
            25
        ],
        landlocked: false,
        borders: [
            "AGO",
            "BDI",
            "CAF",
            "COG",
            "RWA",
            "SSD",
            "TZA",
            "UGA",
            "ZMB"
        ],
        area: 2344858,
        demonyms: {
            eng: {
                f: "Congolese",
                m: "Congolese"
            },
            fra: {
                f: "Congolaise",
                m: "Congolais"
            }
        },
        flag: "\uD83C\uDDE8\uD83C\uDDE9",
        maps: {
            googleMaps: "https://goo.gl/maps/KfhNVn6VqdZXWu8n9",
            openStreetMaps: "https://www.openstreetmap.org/relation/192795"
        },
        population: 108407721,
        gini: {
            2012: 42.1
        },
        fifa: "COD",
        car: {
            signs: [
                "CGO"
            ],
            side: "right"
        },
        timezones: [
            "UTC+01:00",
            "UTC+02:00"
        ],
        continents: [
            "Africa"
        ],
        flags: {
            png: "https://flagcdn.com/w320/cd.png",
            svg: "https://flagcdn.com/cd.svg",
            alt: "The flag of the Democratic Republic of the Congo has a sky-blue field with a yellow-edged red diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. A large five-pointed yellow star is situated above the diagonal band on the upper hoist side of the field."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/cd.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/cd.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -4.32,
                15.3
            ]
        }
    },
    {
        name: {
            common: "South Georgia",
            official: "South Georgia and the South Sandwich Islands",
            nativeName: {
                eng: {
                    official: "South Georgia and the South Sandwich Islands",
                    common: "South Georgia"
                }
            }
        },
        tld: [
            ".gs"
        ],
        cca2: "GS",
        ccn3: "239",
        cca3: "SGS",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            SHP: {
                name: "Saint Helena pound",
                symbol: "\xa3"
            }
        },
        idd: {
            root: "+5",
            suffixes: [
                "00"
            ]
        },
        capital: [
            "King Edward Point"
        ],
        altSpellings: [
            "GS",
            "South Georgia and the South Sandwich Islands"
        ],
        region: "Antarctic",
        languages: {
            eng: "English"
        },
        translations: {
            ara: {
                official: "جورجيا الجنوبية وجزر ساندوتش الجنوبية",
                common: "جورجيا الجنوبية"
            },
            bre: {
                official: "Georgia ar Su hag Inizi Sandwich ar Su",
                common: "Georgia ar Su hag Inizi Sandwich ar Su"
            },
            ces: {
                official: "Jižn\xed Georgie a Jižn\xed Sandwichovy ostrovy",
                common: "Jižn\xed Georgie a Jižn\xed Sandwichovy ostrovy"
            },
            cym: {
                official: "South Georgia and the South Sandwich Islands",
                common: "South Georgia"
            },
            deu: {
                official: "S\xfcdgeorgien und die S\xfcdlichen Sandwichinseln",
                common: "S\xfcdgeorgien und die S\xfcdlichen Sandwichinseln"
            },
            est: {
                official: "L\xf5una-Georgia ja L\xf5una-Sandwichi saared",
                common: "L\xf5una-Georgia ja L\xf5una-Sandwichi saared"
            },
            fin: {
                official: "Etel\xe4-Georgia ja Etel\xe4iset Sandwichsaaret",
                common: "Etel\xe4-Georgia ja Etel\xe4iset Sandwichsaaret"
            },
            fra: {
                official: "G\xe9orgie du Sud et les \xeeles Sandwich du Sud",
                common: "G\xe9orgie du Sud-et-les \xceles Sandwich du Sud"
            },
            hrv: {
                official: "Južna Džordžija i Otoci Južni Sendvič",
                common: "Južna Georgija i otočje Južni Sandwich"
            },
            hun: {
                official: "D\xe9li-Georgia \xe9s D\xe9li-Sandwich-szigetek",
                common: "D\xe9li-Georgia \xe9s D\xe9li-Sandwich-szigetek"
            },
            ita: {
                official: "Georgia del Sud e isole Sandwich del Sud",
                common: "Georgia del Sud e Isole Sandwich Meridionali"
            },
            jpn: {
                official: "サウスジョージア\xb7サウスサンドウィッチ諸島",
                common: "サウスジョージア・サウスサンドウィッチ諸島"
            },
            kor: {
                official: "조지아",
                common: "조지아"
            },
            nld: {
                official: "Zuid-Georgi\xeb en de Zuidelijke Sandwich-eilanden",
                common: "Zuid-Georgia en Zuidelijke Sandwicheilanden"
            },
            per: {
                official: "جزایر جورجیای جنوبی و ساندویچ جنوبی",
                common: "جزایر جورجیای جنوبی و ساندویچ جنوبی"
            },
            pol: {
                official: "Georgia Południowa i Sandwich Południowy",
                common: "Georgia Południowa i Sandwich Południowy"
            },
            por: {
                official: "Ge\xf3rgia do Sul e Sandwich do Sul",
                common: "Ilhas Ge\xf3rgia do Sul e Sandwich do Sul"
            },
            rus: {
                official: "Южная Георгия и Южные Сандвичевы острова",
                common: "Южная Георгия и Южные Сандвичевы острова"
            },
            slk: {
                official: "Južn\xe1 Georgia a Južn\xe9 Sandwichove ostrovy",
                common: "Južn\xe1 Georgia a Južn\xe9 Sandwichove ostrovy"
            },
            spa: {
                official: "Georgia del Sur y las Islas Sandwich del Sur",
                common: "Islas Georgias del Sur y Sandwich del Sur"
            },
            srp: {
                official: "Јужна Џорџија и Јужна Сендвичка Острва",
                common: "Јужна Џорџија и Јужна Сендвичка Острва"
            },
            swe: {
                official: "Sydgeorgien",
                common: "Sydgeorgien"
            },
            tur: {
                official: "G\xfcney Georgia ve G\xfcney Sandwich Adaları",
                common: "G\xfcney Georgia ve G\xfcney Sandwich Adaları"
            },
            urd: {
                official: "جنوبی جارجیا و جزائر جنوبی سینڈوچ",
                common: "جنوبی جارجیا"
            },
            zho: {
                official: "南乔治亚岛和南桑威奇群岛",
                common: "南乔治亚"
            }
        },
        latlng: [
            -54.5,
            -37
        ],
        landlocked: false,
        area: 3903,
        demonyms: {
            eng: {
                f: "South Georgian South Sandwich Islander",
                m: "South Georgian South Sandwich Islander"
            }
        },
        flag: "\uD83C\uDDEC\uD83C\uDDF8",
        maps: {
            googleMaps: "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
            openStreetMaps: "https://www.openstreetmap.org/relation/1983629"
        },
        population: 30,
        car: {
            signs: [
                ""
            ],
            side: "right"
        },
        timezones: [
            "UTC-02:00"
        ],
        continents: [
            "Antarctica"
        ],
        flags: {
            png: "https://flagcdn.com/w320/gs.png",
            svg: "https://flagcdn.com/gs.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -54.28,
                -36.5
            ]
        }
    },
    {
        name: {
            common: "Georgia",
            official: "Georgia",
            nativeName: {
                kat: {
                    official: "საქართველო",
                    common: "საქართველო"
                }
            }
        },
        tld: [
            ".ge"
        ],
        cca2: "GE",
        ccn3: "268",
        cca3: "GEO",
        cioc: "GEO",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            GEL: {
                name: "lari",
                symbol: "₾"
            }
        },
        idd: {
            root: "+9",
            suffixes: [
                "95"
            ]
        },
        capital: [
            "Tbilisi"
        ],
        altSpellings: [
            "GE",
            "Sakartvelo"
        ],
        region: "Asia",
        subregion: "Western Asia",
        languages: {
            kat: "Georgian"
        },
        translations: {
            ara: {
                official: "جورجيا",
                common: "جورجيا"
            },
            bre: {
                official: "Republik Jorjia",
                common: "Jorjia"
            },
            ces: {
                official: "Gruzie",
                common: "Gruzie"
            },
            cym: {
                official: "Georgia",
                common: "Georgia"
            },
            deu: {
                official: "Georgien",
                common: "Georgien"
            },
            est: {
                official: "Gruusia",
                common: "Gruusia"
            },
            fin: {
                official: "Georgia",
                common: "Georgia"
            },
            fra: {
                official: "R\xe9publique de G\xe9orgie",
                common: "G\xe9orgie"
            },
            hrv: {
                official: "Gruzija",
                common: "Gruzija"
            },
            hun: {
                official: "Gr\xfazia",
                common: "Gr\xfazia"
            },
            ita: {
                official: "Georgia",
                common: "Georgia"
            },
            jpn: {
                official: "グルジア",
                common: "グルジア"
            },
            kor: {
                official: "조지아",
                common: "조지아"
            },
            nld: {
                official: "Georgia",
                common: "Georgi\xeb"
            },
            per: {
                official: "گرجستان",
                common: "گرجستان"
            },
            pol: {
                official: "Gruzja",
                common: "Gruzja"
            },
            por: {
                official: "Georgia",
                common: "Ge\xf3rgia"
            },
            rus: {
                official: "Грузия",
                common: "Грузия"
            },
            slk: {
                official: "Gruz\xednsko",
                common: "Gruz\xednsko"
            },
            spa: {
                official: "Georgia",
                common: "Georgia"
            },
            srp: {
                official: "Грузија",
                common: "Грузија"
            },
            swe: {
                official: "Georgien",
                common: "Georgien"
            },
            tur: {
                official: "G\xfcrcistan",
                common: "G\xfcrcistan"
            },
            urd: {
                official: "جارجیا",
                common: "جارجیا"
            },
            zho: {
                official: "格鲁吉亚",
                common: "格鲁吉亚"
            }
        },
        latlng: [
            42,
            43.5
        ],
        landlocked: false,
        borders: [
            "ARM",
            "AZE",
            "RUS",
            "TUR"
        ],
        area: 69700,
        demonyms: {
            eng: {
                f: "Georgian",
                m: "Georgian"
            },
            fra: {
                f: "G\xe9orgienne",
                m: "G\xe9orgien"
            }
        },
        flag: "\uD83C\uDDEC\uD83C\uDDEA",
        maps: {
            googleMaps: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
            openStreetMaps: "https://www.openstreetmap.org/relation/28699"
        },
        population: 3714000,
        gini: {
            2019: 35.9
        },
        fifa: "GEO",
        car: {
            signs: [
                "GE"
            ],
            side: "right"
        },
        timezones: [
            "UTC+04:00"
        ],
        continents: [
            "Asia"
        ],
        flags: {
            png: "https://flagcdn.com/w320/ge.png",
            svg: "https://flagcdn.com/ge.svg",
            alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/ge.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/ge.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                41.68,
                44.83
            ]
        },
        postalCode: {
            format: "####",
            regex: "^(\\d{4})$"
        }
    },
    {
        name: {
            common: "Samoa",
            official: "Independent State of Samoa",
            nativeName: {
                eng: {
                    official: "Independent State of Samoa",
                    common: "Samoa"
                },
                smo: {
                    official: "Malo Saʻoloto Tutoʻatasi o Sāmoa",
                    common: "Sāmoa"
                }
            }
        },
        tld: [
            ".ws"
        ],
        cca2: "WS",
        ccn3: "882",
        cca3: "WSM",
        cioc: "SAM",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            WST: {
                name: "Samoan tālā",
                symbol: "T"
            }
        },
        idd: {
            root: "+6",
            suffixes: [
                "85"
            ]
        },
        capital: [
            "Apia"
        ],
        altSpellings: [
            "WS",
            "Independent State of Samoa",
            "Malo Saʻoloto Tutoʻatasi o Sāmoa"
        ],
        region: "Oceania",
        subregion: "Polynesia",
        languages: {
            eng: "English",
            smo: "Samoan"
        },
        translations: {
            ara: {
                official: "دولة ساموا المستقلة",
                common: "ساموا"
            },
            bre: {
                official: "Stad Dizalc'h Samoa",
                common: "Samoa"
            },
            ces: {
                official: "Nez\xe1visl\xfd st\xe1t Samoa",
                common: "Samoa"
            },
            cym: {
                official: "Independent State of Samoa",
                common: "Samoa"
            },
            deu: {
                official: "Unabh\xe4ngige Staat Samoa",
                common: "Samoa"
            },
            est: {
                official: "Samoa Iseseisvusriik",
                common: "Samoa"
            },
            fin: {
                official: "Samoan itsen\xe4inen valtio",
                common: "Samoa"
            },
            fra: {
                official: "Samoa",
                common: "Samoa"
            },
            hrv: {
                official: "Nezavisna Država Samoa",
                common: "Samoa"
            },
            hun: {
                official: "Szamoai F\xfcggetlen \xc1llam",
                common: "Szamoa"
            },
            ita: {
                official: "Stato indipendente di Samoa",
                common: "Samoa"
            },
            jpn: {
                official: "サモア独立国",
                common: "サモア"
            },
            kor: {
                official: "사모아 독립국",
                common: "사모아"
            },
            nld: {
                official: "Onafhankelijke Staat Samoa",
                common: "Samoa"
            },
            per: {
                official: "ایالت مستقل ساموآ",
                common: "ساموآ"
            },
            pol: {
                official: "Niezależne Państwo Samoa",
                common: "Samoa"
            },
            por: {
                official: "Estado Independente de Samoa",
                common: "Samoa"
            },
            rus: {
                official: "Независимое Государство Самоа",
                common: "Самоа"
            },
            slk: {
                official: "Nez\xe1visl\xfd št\xe1tSamoa",
                common: "Samoa"
            },
            spa: {
                official: "Estado Independiente de Samoa",
                common: "Samoa"
            },
            srp: {
                official: "Независна Држава Самоа",
                common: "Самоа"
            },
            swe: {
                official: "Sj\xe4lvst\xe4ndiga staten Samoa",
                common: "Samoa"
            },
            tur: {
                official: "Bağımsız Samoa Devleti",
                common: "Bağımsız Samoa Devleti"
            },
            urd: {
                official: "آزاد سلطنتِ ساموا",
                common: "سامووا"
            },
            zho: {
                official: "萨摩亚独立国",
                common: "萨摩亚"
            }
        },
        latlng: [
            -13.58333333,
            -172.33333333
        ],
        landlocked: false,
        area: 2842,
        demonyms: {
            eng: {
                f: "Samoan",
                m: "Samoan"
            },
            fra: {
                f: "Samoane",
                m: "Samoan"
            }
        },
        flag: "\uD83C\uDDFC\uD83C\uDDF8",
        maps: {
            googleMaps: "https://goo.gl/maps/CFC9fEFP9cfkYUBF9",
            openStreetMaps: "https://www.openstreetmap.org/relation/1872673"
        },
        population: 198410,
        gini: {
            2013: 38.7
        },
        fifa: "SAM",
        car: {
            signs: [
                "WS"
            ],
            side: "left"
        },
        timezones: [
            "UTC+13:00"
        ],
        continents: [
            "Oceania"
        ],
        flags: {
            png: "https://flagcdn.com/w320/ws.png",
            svg: "https://flagcdn.com/ws.svg",
            alt: "The flag of Samoa has a red field. A blue rectangle, bearing a representation of the Southern Cross made up of five large and one smaller five-pointed white stars, is superimposed in the canton."
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/ws.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/ws.svg"
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -13.82,
                -171.77
            ]
        }
    },
    {
        name: {
            common: "American Samoa",
            official: "American Samoa",
            nativeName: {
                eng: {
                    official: "American Samoa",
                    common: "American Samoa"
                },
                smo: {
                    official: "Sāmoa Amelika",
                    common: "Sāmoa Amelika"
                }
            }
        },
        tld: [
            ".as"
        ],
        cca2: "AS",
        ccn3: "016",
        cca3: "ASM",
        cioc: "ASA",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+1",
            suffixes: [
                "684"
            ]
        },
        capital: [
            "Pago Pago"
        ],
        altSpellings: [
            "AS",
            "Amerika Sāmoa",
            "Amelika Sāmoa",
            "Sāmoa Amelika"
        ],
        region: "Oceania",
        subregion: "Polynesia",
        languages: {
            eng: "English",
            smo: "Samoan"
        },
        translations: {
            ara: {
                official: "ساموا الأمريكية",
                common: "ساموا الأمريكية"
            },
            bre: {
                official: "Samoa Amerikan",
                common: "Samoa Amerikan"
            },
            ces: {
                official: "Americk\xe1 Samoa",
                common: "Americk\xe1 Samoa"
            },
            cym: {
                official: "American Samoa",
                common: "American Samoa"
            },
            deu: {
                official: "Amerikanisch-Samoa",
                common: "Amerikanisch-Samoa"
            },
            est: {
                official: "Ameerika Samoa",
                common: "Ameerika Samoa"
            },
            fin: {
                official: "Amerikan Samoa",
                common: "Amerikan Samoa"
            },
            fra: {
                official: "Samoa am\xe9ricaines",
                common: "Samoa am\xe9ricaines"
            },
            hrv: {
                official: "američka Samoa",
                common: "Američka Samoa"
            },
            hun: {
                official: "Szamoa",
                common: "Szamoa"
            },
            ita: {
                official: "Samoa americane",
                common: "Samoa Americane"
            },
            jpn: {
                official: "米サモア",
                common: "アメリカ領サモア"
            },
            kor: {
                official: "아메리칸사모아",
                common: "아메리칸사모아"
            },
            nld: {
                official: "Amerikaans Samoa",
                common: "Amerikaans Samoa"
            },
            per: {
                official: "ساموآی آمریکا",
                common: "ساموآی آمریکا"
            },
            pol: {
                official: "Samoa Amerykańskie",
                common: "Samoa Amerykańskie"
            },
            por: {
                official: "Samoa americana",
                common: "Samoa Americana"
            },
            rus: {
                official: "американское Самоа",
                common: "Американское Самоа"
            },
            slk: {
                official: "Americk\xe1 Samoa",
                common: "Americk\xe1 Samoa"
            },
            spa: {
                official: "Samoa Americana",
                common: "Samoa Americana"
            },
            srp: {
                official: "Америчка Самоа",
                common: "Америчка Самоа"
            },
            swe: {
                official: "Amerikanska Samoa",
                common: "Amerikanska Samoa"
            },
            tur: {
                official: "Amerikan Samoası",
                common: "Amerikan Samoası"
            },
            urd: {
                official: "امریکی سمووا",
                common: "امریکی سمووا"
            },
            zho: {
                official: "美属萨摩亚",
                common: "美属萨摩亚"
            }
        },
        latlng: [
            -14.33333333,
            -170
        ],
        landlocked: false,
        area: 199,
        demonyms: {
            eng: {
                f: "American Samoan",
                m: "American Samoan"
            },
            fra: {
                f: "Samoane",
                m: "Samoan"
            }
        },
        flag: "\uD83C\uDDE6\uD83C\uDDF8",
        maps: {
            googleMaps: "https://goo.gl/maps/Re9ePMjwP1sFCBFA6",
            openStreetMaps: "https://www.openstreetmap.org/relation/2177187"
        },
        population: 55197,
        fifa: "ASA",
        car: {
            signs: [
                "USA"
            ],
            side: "right"
        },
        timezones: [
            "UTC-11:00"
        ],
        continents: [
            "Oceania"
        ],
        flags: {
            png: "https://flagcdn.com/w320/as.png",
            svg: "https://flagcdn.com/as.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                -14.27,
                -170.7
            ]
        }
    },
    {
        name: {
            common: "Northern Mariana Islands",
            official: "Commonwealth of the Northern Mariana Islands",
            nativeName: {
                cal: {
                    official: "Commonwealth of the Northern Mariana Islands",
                    common: "Northern Mariana Islands"
                },
                cha: {
                    official: "Sankattan Siha Na Islas Mari\xe5nas",
                    common: "Na Islas Mari\xe5nas"
                },
                eng: {
                    official: "Commonwealth of the Northern Mariana Islands",
                    common: "Northern Mariana Islands"
                }
            }
        },
        tld: [
            ".mp"
        ],
        cca2: "MP",
        ccn3: "580",
        cca3: "MNP",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        idd: {
            root: "+1",
            suffixes: [
                "670"
            ]
        },
        capital: [
            "Saipan"
        ],
        altSpellings: [
            "MP",
            "Commonwealth of the Northern Mariana Islands",
            "Sankattan Siha Na Islas Mari\xe5nas"
        ],
        region: "Oceania",
        subregion: "Micronesia",
        languages: {
            cal: "Carolinian",
            cha: "Chamorro",
            eng: "English"
        },
        translations: {
            ara: {
                official: "كومونولث جزر ماريانا الشمالية",
                common: "جزر ماريانا الشمالية"
            },
            bre: {
                official: "Kenglad Inizi Mariana an Norzh",
                common: "Inizi Mariana an Norzh"
            },
            ces: {
                official: "Společenstv\xed Severn\xedch Marian",
                common: "Severn\xed Mariany"
            },
            cym: {
                official: "Commonwealth of the Northern Mariana Islands",
                common: "Northern Mariana Islands"
            },
            deu: {
                official: "Commonwealth der N\xf6rdlichen Marianen",
                common: "N\xf6rdliche Marianen"
            },
            est: {
                official: "P\xf5hja-Mariaani \xdchendus",
                common: "P\xf5hja-Mariaanid"
            },
            fin: {
                official: "Pohjois-Mariaanit",
                common: "Pohjois-Mariaanit"
            },
            fra: {
                official: "Commonwealth des \xeeles Mariannes du Nord",
                common: "\xceles Mariannes du Nord"
            },
            hrv: {
                official: "Zajednica je Sjeverni Marijanski otoci",
                common: "Sjevernomarijanski otoci"
            },
            hun: {
                official: "\xc9szaki-Mariana-szigetek",
                common: "\xc9szaki-Mariana-szigetek"
            },
            ita: {
                official: "Commonwealth delle Isole Marianne Settentrionali",
                common: "Isole Marianne Settentrionali"
            },
            jpn: {
                official: "北マリアナ諸島",
                common: "北マリアナ諸島"
            },
            kor: {
                official: "북마리아나 제도",
                common: "북마리아나 제도"
            },
            nld: {
                official: "Commonwealth van de Noordelijke Marianen",
                common: "Noordelijke Marianeneilanden"
            },
            per: {
                official: "جزایر ماریانای شمالی",
                common: "جزایر ماریانای شمالی"
            },
            pol: {
                official: "Wsp\xf3lnota Marian\xf3w P\xf3łnocnych",
                common: "Mariany P\xf3łnocne"
            },
            por: {
                official: "Comunidade das Ilhas Marianas do Norte",
                common: "Marianas Setentrionais"
            },
            rus: {
                official: "Содружество Северных Марианских островов",
                common: "Северные Марианские острова"
            },
            slk: {
                official: "Spoločenstvo ostrovov Severn\xe9 Mari\xe1ny",
                common: "Severn\xe9 Mari\xe1ny"
            },
            spa: {
                official: "Mancomunidad de las Islas Marianas del Norte",
                common: "Islas Marianas del Norte"
            },
            srp: {
                official: "Комонвелт Северна Маријанска Острва",
                common: "Северна Маријанска Острва"
            },
            swe: {
                official: "Nordmarianerna",
                common: "Nordmarianerna"
            },
            tur: {
                official: "Kuzey Mariana Adaları Milletler Topluluğu",
                common: "Kuzey Mariana Adaları"
            },
            urd: {
                official: "دولتِ مشترکہ جزائر شمالی ماریانا",
                common: "جزائر شمالی ماریانا"
            },
            zho: {
                official: "北马里亚纳群岛",
                common: "北马里亚纳群岛"
            }
        },
        latlng: [
            15.2,
            145.75
        ],
        landlocked: false,
        area: 464,
        demonyms: {
            eng: {
                f: "American",
                m: "American"
            },
            fra: {
                f: "Am\xe9ricaine",
                m: "Am\xe9rican"
            }
        },
        flag: "\uD83C\uDDF2\uD83C\uDDF5",
        maps: {
            googleMaps: "https://goo.gl/maps/cpZ67knoRAcfu1417",
            openStreetMaps: "https://www.openstreetmap.org/relation/306004"
        },
        population: 57557,
        car: {
            signs: [
                "USA"
            ],
            side: "right"
        },
        timezones: [
            "UTC+10:00"
        ],
        continents: [
            "Oceania"
        ],
        flags: {
            png: "https://flagcdn.com/w320/mp.png",
            svg: "https://flagcdn.com/mp.svg"
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [
                15.2,
                145.75
            ]
        }
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hklly","bNKaB"], "bNKaB", "parcelRequire6952")

//# sourceMappingURL=index.0641b553.js.map
