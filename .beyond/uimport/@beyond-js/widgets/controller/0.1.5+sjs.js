{"code":"System.register([\"@beyond-js/kernel@0.1.9/bundle\",\"@beyond-js/kernel@0.1.9/core\",\"@beyond-js/widgets@0.1.5/render\",\"@beyond-js/kernel@0.1.9/styles\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.9\"],[\"@beyond-js/widgets\",\"0.1.5\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/widgets/controller.0.1.5.js\nvar controller_0_1_5_exports = {};\n__export(controller_0_1_5_exports, {\n  IWidgetRendered: () => IWidgetRendered,\n  IWidgetStore: () => IWidgetStore,\n  WidgetAttributes: () => WidgetAttributes,\n  WidgetClientController: () => WidgetClientController,\n  WidgetControllerBase: () => WidgetControllerBase,\n  WidgetServerController: () => WidgetServerController,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(controller_0_1_5_exports);\n\n// node_modules/@beyond-js/widgets/controller/controller.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.9/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/kernel@0.1.9/core\"), 0);\nvar dependency_2 = __toESM(require(\"@beyond-js/widgets@0.1.5/render\"), 0);\nvar dependency_3 = __toESM(require(\"@beyond-js/kernel@0.1.9/styles\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/widgets@0.1.5/controller\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/kernel/core\", dependency_1], [\"@beyond-js/widgets/render\", dependency_2], [\"@beyond-js/kernel/styles\", dependency_3]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./attributes\", {\n  hash: 3176328789,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetAttributes = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    class WidgetAttributes2 extends Map {\n      #widget;\n      #events = new _core.Events();\n      on = (event, listener) => this.#events.on(event, listener);\n      off = (event, listener) => this.#events.off(event, listener);\n      constructor(widget) {\n        super();\n        this.#widget = widget;\n        let attrs = widget.specs.attrs;\n        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));\n      }\n      change(name, old, value) {\n        this.set(name, value);\n        this.#events.trigger(\"change\");\n        this.#events.trigger(`${name}:change`, value);\n      }\n    }\n    exports.WidgetAttributes = WidgetAttributes2;\n  }\n});\nims.set(\"./client\", {\n  hash: 2102509577,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetClientController = void 0;\n    var _controller = require2(\"./controller\");\n    var _attributes = require2(\"./attributes\");\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    var _styles = require2(\"@beyond-js/kernel/styles\");\n    class WidgetClientController2 extends _controller.WidgetControllerBase {\n      #widget;\n      get widget() {\n        return this.#widget;\n      }\n      #store;\n      get store() {\n        return this.#store;\n      }\n      #attributes;\n      get attributes() {\n        return this.#attributes;\n      }\n      attributeChanged(name, old, value) {\n        this.#attributes.change(name, old, value);\n      }\n      get styles() {\n        const styles = this.#widget.styles;\n        return styles;\n      }\n      constructor(widget) {\n        super({\n          widget\n        });\n        this.#widget = widget;\n        this.#attributes = new _attributes.WidgetAttributes(widget);\n        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);\n        const links = () => [...styles.elements].map(style => style.href);\n        !this.styles.initialised && this.styles.initialise(links());\n        styles.on(\"change\", () => this.styles.update(links()));\n      }\n      render() {\n        try {\n          this.mount();\n        } catch (exc) {\n          console.log(`Error mounting widget controller \"${this.#widget.localName}\":`);\n          console.log(exc.stack);\n        }\n      }\n      refresh() {\n        this.unmount();\n        this.render();\n      }\n      #refresh = () => this.refresh();\n      disconnect() {\n        this.unmount();\n      }\n      async initialise() {\n        if (!this.Widget) {\n          throw new Error(`The return value of the Widget property is undefined. \"${this.#widget.localName}\" widget`);\n        }\n        this.#store = this.createStore?.();\n        const prerender = this.#widget.ssr.prerender;\n        if (prerender) {\n          const cached = prerender?.store;\n          await this.#store?.hydrate(cached);\n        }\n        this.#store?.fetch?.();\n        this.render();\n        if (!_bundle.instances.has(this.specs.vspecifier)) {\n          console.log(`Bundle id \"${this.specs.vspecifier}\" not found. Try refreshing the page.\nIf the problem still persist, delete the BeyondJS cache and try again.`);\n          return;\n        }\n        const pkg = _bundle.instances.get(this.specs.vspecifier).package();\n        pkg.hmr.on(\"change\", this.#refresh);\n      }\n    }\n    exports.WidgetClientController = WidgetClientController2;\n  }\n});\nims.set(\"./controller\", {\n  hash: 3835813087,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetControllerBase = void 0;\n    var _render = require2(\"@beyond-js/widgets/render\");\n    class WidgetControllerBase2 {\n      #specs;\n      get specs() {\n        return this.#specs;\n      }\n      get element() {\n        return this.#specs.name;\n      }\n      get is() {\n        return this.#specs.is;\n      }\n      get route() {\n        return this.#specs.route;\n      }\n      get layout() {\n        return this.#specs.layout;\n      }\n      #pkg;\n      get pkg() {\n        return this.#pkg;\n      }\n      get Widget() {\n        return;\n      }\n      createStore(language) {\n        return void 0;\n      }\n      constructor({\n        specs,\n        widget\n      }) {\n        if (!specs) {\n          const {\n            localName\n          } = widget;\n          if (!_render.widgets.has(localName)) throw new Error(`Widget name \"${localName}\" is not registered`);\n          specs = _render.widgets.get(localName);\n        }\n        this.#pkg = (() => {\n          const split = specs.vspecifier.split(\"/\");\n          const scope = split[0].startsWith(\"@\") ? split.shift() : void 0;\n          const [name] = split.shift().split(\"@\");\n          return scope ? `${scope}/${name}` : name;\n        })();\n        this.#specs = specs;\n      }\n    }\n    exports.WidgetControllerBase = WidgetControllerBase2;\n  }\n});\nims.set(\"./ssr\", {\n  hash: 1515978368,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetServerController = void 0;\n    var _controller = require2(\"./controller\");\n    var _styles = require2(\"@beyond-js/kernel/styles\");\n    class WidgetServerController2 extends _controller.WidgetControllerBase {\n      #styles = [];\n      get styles() {\n        return this.#styles;\n      }\n      constructor(params) {\n        super(params);\n        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);\n        styles.elements.forEach(({\n          href\n        }) => this.#styles.push(href));\n        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);\n      }\n    }\n    exports.WidgetServerController = WidgetServerController2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./attributes\",\n  \"from\": \"WidgetAttributes\",\n  \"name\": \"WidgetAttributes\"\n}, {\n  \"im\": \"./client\",\n  \"from\": \"WidgetClientController\",\n  \"name\": \"WidgetClientController\"\n}, {\n  \"im\": \"./controller\",\n  \"from\": \"IWidgetStore\",\n  \"name\": \"IWidgetStore\"\n}, {\n  \"im\": \"./controller\",\n  \"from\": \"WidgetControllerBase\",\n  \"name\": \"WidgetControllerBase\"\n}, {\n  \"im\": \"./ssr\",\n  \"from\": \"IWidgetRendered\",\n  \"name\": \"IWidgetRendered\"\n}, {\n  \"im\": \"./ssr\",\n  \"from\": \"WidgetServerController\",\n  \"name\": \"WidgetServerController\"\n}];\nvar WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"WidgetAttributes\") && (WidgetAttributes = require2 ? require2(\"./attributes\").WidgetAttributes : value);\n  (require2 || prop === \"WidgetClientController\") && (WidgetClientController = require2 ? require2(\"./client\").WidgetClientController : value);\n  (require2 || prop === \"IWidgetStore\") && (IWidgetStore = require2 ? require2(\"./controller\").IWidgetStore : value);\n  (require2 || prop === \"WidgetControllerBase\") && (WidgetControllerBase = require2 ? require2(\"./controller\").WidgetControllerBase : value);\n  (require2 || prop === \"IWidgetRendered\") && (IWidgetRendered = require2 ? require2(\"./ssr\").IWidgetRendered : value);\n  (require2 || prop === \"WidgetServerController\") && (WidgetServerController = require2 ? require2(\"./ssr\").WidgetServerController : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4wLjEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NsaWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJjb250cm9sbGVyXzBfMV81X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJXaWRnZXRBdHRyaWJ1dGVzMiIsIk1hcCIsIndpZGdldCIsImV2ZW50cyIsIkV2ZW50cyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsIl9jb250cm9sbGVyIiwiX2F0dHJpYnV0ZXMiLCJfYnVuZGxlIiwiX3N0eWxlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIyIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsIiNyZWZyZXNoIiwiZGlzY29ubmVjdCIsIldpZGdldCIsIkVycm9yIiwiY3JlYXRlU3RvcmUiLCJwcmVyZW5kZXIiLCJzc3IiLCJjYWNoZWQiLCJoeWRyYXRlIiwiZmV0Y2giLCJpbnN0YW5jZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiX3JlbmRlciIsIldpZGdldENvbnRyb2xsZXJCYXNlMiIsImVsZW1lbnQiLCJpcyIsInJvdXRlIiwibGF5b3V0IiwibGFuZ3VhZ2UiLCJ3aWRnZXRzIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIyIiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWix3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBYSxLQUFBLEdBQUFDLFFBQUE7SUFFaUIsTUFDWEMsaUJBQUEsU0FBeUJDLEdBQUEsQ0FBRztNQUU5QixDQUFBQyxNQUFBO01BRUEsQ0FBQUMsTUFBQSxHQUFVLElBQUlMLEtBQUEsQ0FBQU0sTUFBQSxDQUFNO01BQ3BCQyxFQUFBLEdBQUtBLENBQUNDLEtBQUEsRUFBZUMsUUFBQSxLQUFrQixLQUFLLENBQUFKLE1BQUEsQ0FBUUUsRUFBQSxDQUFHQyxLQUFBLEVBQU9DLFFBQVE7TUFDdEVDLEdBQUEsR0FBTUEsQ0FBQ0YsS0FBQSxFQUFlQyxRQUFBLEtBQWtCLEtBQUssQ0FBQUosTUFBQSxDQUFRSyxHQUFBLENBQUlGLEtBQUEsRUFBT0MsUUFBUTtNQUV4RUUsWUFBWVAsTUFBQSxFQUFtQjtRQUMzQixNQUFLO1FBQ0wsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7UUFFZixJQUFJUSxLQUFBLEdBQXdCUixNQUFBLENBQVFTLEtBQUEsQ0FBTUQsS0FBQTtRQUMxQ0EsS0FBQSxFQUFPRSxPQUFBLENBQVFDLElBQUEsSUFBUSxLQUFLQyxHQUFBLENBQUlELElBQUEsRUFBTVgsTUFBQSxDQUFPYSxZQUFBLENBQWFGLElBQUksQ0FBQyxDQUFDO01BQ3BFO01BRUFHLE9BQU9DLElBQUEsRUFBY0MsR0FBQSxFQUFhQyxLQUFBLEVBQWE7UUFDM0MsS0FBS0wsR0FBQSxDQUFJRyxJQUFBLEVBQU1FLEtBQUs7UUFDcEIsS0FBSyxDQUFBaEIsTUFBQSxDQUFRaUIsT0FBQSxDQUFRLFFBQVE7UUFDN0IsS0FBSyxDQUFBakIsTUFBQSxDQUFRaUIsT0FBQSxDQUFRLEdBQUdILElBQUEsV0FBZUUsS0FBSztNQUNoRDs7SUFDSHZCLE9BQUEsQ0FBQVAsZ0JBQUEsR0FBQVcsaUJBQUE7Ozs7Ozs7Ozs7OztJQ3hCRCxJQUFBcUIsV0FBQSxHQUFBdEIsUUFBQTtJQUNBLElBQUF1QixXQUFBLEdBQUF2QixRQUFBO0lBQ0EsSUFBQXdCLE9BQUEsR0FBQXhCLFFBQUE7SUFFQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQUtpQixNQUNGMEIsdUJBQUEsU0FBK0JKLFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9CO01BUXJELENBQUFXLE1BQUE7TUFDVCxJQUFJQSxPQUFBLEVBQU07UUFDTixPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNoQjtNQUVBLENBQUF3QixLQUFBO01BQ0EsSUFBSUEsTUFBQSxFQUFLO1FBQ0wsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDaEI7TUFFUyxDQUFBQyxVQUFBO01BQ1QsSUFBSUEsV0FBQSxFQUFVO1FBQ1YsT0FBTyxLQUFLLENBQUFBLFVBQUE7TUFDaEI7TUFFQUMsaUJBQWlCWCxJQUFBLEVBQWNDLEdBQUEsRUFBYUMsS0FBQSxFQUFhO1FBQ3JELEtBQUssQ0FBQVEsVUFBQSxDQUFZWCxNQUFBLENBQU9DLElBQUEsRUFBTUMsR0FBQSxFQUFLQyxLQUFLO01BQzVDO01BRUEsSUFBSVUsT0FBQSxFQUFNO1FBQ04sTUFBTUEsTUFBQSxHQUE4QixLQUFLLENBQUEzQixNQUFBLENBQVMyQixNQUFBO1FBQ2xELE9BQU9BLE1BQUE7TUFDWDtNQUVBcEIsWUFBc0JQLE1BQUEsRUFBbUI7UUFDckMsTUFBTTtVQUFDQTtRQUFNLENBQUM7UUFDZCxLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtRQUNmLEtBQUssQ0FBQXlCLFVBQUEsR0FBYyxJQUFJTCxXQUFBLENBQUFqQyxnQkFBQSxDQUFpQmEsTUFBTTtRQUU5QyxNQUFNMkIsTUFBQSxHQUFTLElBQUlMLE9BQUEsQ0FBQU0sa0JBQUEsQ0FBbUIsS0FBS25CLEtBQUEsQ0FBTW9CLFVBQVU7UUFDM0QsTUFBTUMsS0FBQSxHQUFRQSxDQUFBLEtBQU0sQ0FBQyxHQUFHSCxNQUFBLENBQU9JLFFBQVEsRUFBRUMsR0FBQSxDQUFJQyxLQUFBLElBQVNBLEtBQUEsQ0FBTUMsSUFBSTtRQUVoRSxDQUFDLEtBQUtQLE1BQUEsQ0FBT1EsV0FBQSxJQUFlLEtBQUtSLE1BQUEsQ0FBT1MsVUFBQSxDQUFXTixLQUFBLENBQUssQ0FBRTtRQUMxREgsTUFBQSxDQUFPeEIsRUFBQSxDQUFHLFVBQVUsTUFBTSxLQUFLd0IsTUFBQSxDQUFPVSxNQUFBLENBQU9QLEtBQUEsQ0FBSyxDQUFFLENBQUM7TUFDekQ7TUFNQVEsT0FBQSxFQUFNO1FBQ0YsSUFBSTtVQUNBLEtBQUtDLEtBQUEsQ0FBSztpQkFDTEMsR0FBQSxFQUFQO1VBQ0VDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJLHFDQUFxQyxLQUFLLENBQUExQyxNQUFBLENBQVEyQyxTQUFBLElBQWE7VUFDM0VGLE9BQUEsQ0FBUUMsR0FBQSxDQUFJRixHQUFBLENBQUlJLEtBQUs7O01BRTdCO01BRUFDLFFBQUEsRUFBTztRQUNILEtBQUtDLE9BQUEsQ0FBTztRQUNaLEtBQUtSLE1BQUEsQ0FBTTtNQUNmO01BRUEsQ0FBQU8sT0FBQSxHQUFXRSxDQUFBLEtBQU0sS0FBS0YsT0FBQSxDQUFPO01BSzdCRyxXQUFBLEVBQVU7UUFDTixLQUFLRixPQUFBLENBQU87TUFDaEI7TUFFQSxNQUFNVixXQUFBLEVBQVU7UUFDWixJQUFJLENBQUMsS0FBS2EsTUFBQSxFQUFRO1VBQ2QsTUFBTSxJQUFJQyxLQUFBLENBQU0sMERBQTBELEtBQUssQ0FBQWxELE1BQUEsQ0FBUTJDLFNBQUEsVUFBbUI7O1FBRzlHLEtBQUssQ0FBQW5CLEtBQUEsR0FBUyxLQUFLMkIsV0FBQSxHQUFhO1FBR2hDLE1BQU1DLFNBQUEsR0FBdUIsS0FBSyxDQUFBcEQsTUFBQSxDQUFTcUQsR0FBQSxDQUFJRCxTQUFBO1FBQy9DLElBQUlBLFNBQUEsRUFBVztVQUNYLE1BQU1FLE1BQUEsR0FBU0YsU0FBQSxFQUFXNUIsS0FBQTtVQUMxQixNQUFNLEtBQUssQ0FBQUEsS0FBQSxFQUFRK0IsT0FBQSxDQUFRRCxNQUFNOztRQUdyQyxLQUFLLENBQUE5QixLQUFBLEVBQVFnQyxLQUFBLEdBQU87UUFFcEIsS0FBS2xCLE1BQUEsQ0FBTTtRQUdYLElBQUksQ0FBQ2pCLE9BQUEsQ0FBQW9DLFNBQUEsQ0FBUUMsR0FBQSxDQUFJLEtBQUtqRCxLQUFBLENBQU1vQixVQUFVLEdBQUc7VUFDckNZLE9BQUEsQ0FBUUMsR0FBQSxDQUFJLGNBQWMsS0FBS2pDLEtBQUEsQ0FBTW9CLFVBQUE7dUVBQ3VDO1VBQzVFOztRQUVKLE1BQU04QixHQUFBLEdBQU10QyxPQUFBLENBQUFvQyxTQUFBLENBQVFHLEdBQUEsQ0FBSSxLQUFLbkQsS0FBQSxDQUFNb0IsVUFBVSxFQUFFZ0MsT0FBQSxDQUFPO1FBQ3RERixHQUFBLENBQUluRSxHQUFBLENBQUlXLEVBQUEsQ0FBRyxVQUFVLEtBQUssQ0FBQTBDLE9BQVE7TUFDdEM7O0lBQ0huRCxPQUFBLENBQUFOLHNCQUFBLEdBQUFtQyx1QkFBQTs7Ozs7Ozs7Ozs7O0lDNUdELElBQUF1QyxPQUFBLEdBQUFqRSxRQUFBO0lBV2lCLE1BQ0ZrRSxxQkFBQSxDQUFvQjtNQUN6QixDQUFBdEQsS0FBQTtNQUNULElBQUlBLE1BQUEsRUFBSztRQUNSLE9BQU8sS0FBSyxDQUFBQSxLQUFBO01BQ2I7TUFFQSxJQUFJdUQsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUF2RCxLQUFBLENBQU9NLElBQUE7TUFDcEI7TUFFQSxJQUFJa0QsR0FBQSxFQUFFO1FBQ0wsT0FBTyxLQUFLLENBQUF4RCxLQUFBLENBQU93RCxFQUFBO01BQ3BCO01BRUEsSUFBSUMsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUF6RCxLQUFBLENBQU95RCxLQUFBO01BQ3BCO01BRUEsSUFBSUMsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUExRCxLQUFBLENBQU8wRCxNQUFBO01BQ3BCO01BRVMsQ0FBQVIsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFJQSxJQUFJVixPQUFBLEVBQU07UUFDVDtNQUNEO01BRUFFLFlBQVlpQixRQUFBLEVBQWlCO1FBQzVCLE9BQU87TUFDUjtNQVVBN0QsWUFBc0I7UUFBRUUsS0FBQTtRQUFPVDtNQUFNLEdBQWtEO1FBQ3RGLElBQUksQ0FBQ1MsS0FBQSxFQUFPO1VBQ1gsTUFBTTtZQUFFa0M7VUFBUyxJQUFLM0MsTUFBQTtVQUN0QixJQUFJLENBQUM4RCxPQUFBLENBQUFPLE9BQUEsQ0FBUVgsR0FBQSxDQUFJZixTQUFTLEdBQUcsTUFBTSxJQUFJTyxLQUFBLENBQU0sZ0JBQWdCUCxTQUFBLHFCQUE4QjtVQUMzRmxDLEtBQUEsR0FBUXFELE9BQUEsQ0FBQU8sT0FBQSxDQUFRVCxHQUFBLENBQUlqQixTQUFTOztRQUc5QixLQUFLLENBQUFnQixHQUFBLElBQVEsTUFBSztVQUNqQixNQUFNVyxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsQ0FBSyxJQUFLO1VBQ3pELE1BQU0sQ0FBQzFELElBQUksSUFBSXVELEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEVBQUdILEtBQUEsQ0FBTSxHQUFHO1VBQ3RDLE9BQU9DLEtBQUEsR0FBUSxHQUFHQSxLQUFBLElBQVN4RCxJQUFBLEtBQVNBLElBQUE7UUFDckMsR0FBRTtRQUVGLEtBQUssQ0FBQU4sS0FBQSxHQUFTQSxLQUFBO01BQ2Y7O0lBQ0FmLE9BQUEsQ0FBQUwsb0JBQUEsR0FBQTBFLHFCQUFBOzs7Ozs7Ozs7Ozs7SUN6RUQsSUFBQTVDLFdBQUEsR0FBQXRCLFFBQUE7SUFDQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQWdCaUIsTUFDRjZFLHVCQUFBLFNBQStCdkQsV0FBQSxDQUFBOUIsb0JBQUEsQ0FBb0I7TUFDckQsQ0FBQXNDLE1BQUEsR0FBb0I7TUFDN0IsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7TUFFQXBCLFlBQXNCb0UsTUFBQSxFQUFzRDtRQUN4RSxNQUFNQSxNQUFNO1FBQ1osTUFBTWhELE1BQUEsR0FBUyxJQUFJTCxPQUFBLENBQUFNLGtCQUFBLENBQW1CLEtBQUtuQixLQUFBLENBQU1vQixVQUFVO1FBQzNERixNQUFBLENBQU9JLFFBQUEsQ0FBU3JCLE9BQUEsQ0FBUSxDQUFDO1VBQUN3QjtRQUFJLE1BQXdCLEtBQUssQ0FBQVAsTUFBQSxDQUFRaUQsSUFBQSxDQUFLMUMsSUFBSSxDQUFDO1FBRTdFLEtBQUssQ0FBQVAsTUFBQSxDQUFRa0QsT0FBQSxDQUFRLE9BQU8sS0FBS2xCLEdBQUEsZ0JBQW1CO01BQ3hEOztJQUdIakUsT0FBQSxDQUFBSixzQkFBQSxHQUFBb0YsdUJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii93ZWIvb3V0In0=","dependencies":[{"id":"@beyond-js/kernel@0.1.9/bundle","path":"C:\\Users\\gaboj\\OneDrive\\Documentos\\workspaces\\side-projects\\converter-measure-web\\web\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/kernel@0.1.9/core","path":"C:\\Users\\gaboj\\OneDrive\\Documentos\\workspaces\\side-projects\\converter-measure-web\\web\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.5/render","path":"C:\\Users\\gaboj\\OneDrive\\Documentos\\workspaces\\side-projects\\converter-measure-web\\web\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/kernel@0.1.9/styles","path":"C:\\Users\\gaboj\\OneDrive\\Documentos\\workspaces\\side-projects\\converter-measure-web\\web\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}