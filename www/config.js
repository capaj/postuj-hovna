System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "blacklist": [],
    "stage": 0,
    "optional": [
      "es7.classProperties",
      "es7.functionBind",
      "runtime"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "postuj-hovna.jsx!npm:jspm-loader-jsx@0.0.7",
      "github:twbs/bootstrap@3.3.5",
      "npm:react@0.13.3",
      "npm:react-router@0.13.3",
      "npm:react-intl@1.2.0",
      "components/add-poo.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/add-bin.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/leaderboards.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/main.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/profile.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/about.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/home.jsx!npm:jspm-loader-jsx@0.0.7",
      "npm:react-router@0.13.3/lib",
      "services/moonridge.js",
      "npm:babel-runtime@5.8.25/helpers/inherits",
      "npm:react@0.13.3/react",
      "npm:babel-runtime@5.8.25/helpers/get",
      "npm:babel-runtime@5.8.25/helpers/class-call-check",
      "npm:react-intl@1.2.0/index",
      "npm:babel-runtime@5.8.25/helpers/create-class",
      "components/img-uploader.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/google-map.jsx!npm:jspm-loader-jsx@0.0.7",
      "github:capaj/moonridge-react-utils@master",
      "stores/profile-store.js",
      "github:twbs/bootstrap@3.3.5/js/bootstrap",
      "components/fb-profile-picture.jsx!npm:jspm-loader-jsx@0.0.7",
      "npm:classnames@2.1.3",
      "github:capaj/react-observe-store@0.2.1",
      "js/gps-distance.js",
      "stores/states-store.js",
      "stores/current-gps-location.js",
      "npm:babel-runtime@5.8.25/core-js/promise",
      "components/map-controls.jsx!npm:jspm-loader-jsx@0.0.7",
      "npm:react-router@0.13.3/lib/index",
      "github:capaj/Moonridge-client@0.9.1",
      "envs/prod.js",
      "npm:babel-runtime@5.8.25/core-js/object/create",
      "npm:babel-runtime@5.8.25/core-js/object/set-prototype-of",
      "npm:react@0.13.3/lib/React",
      "npm:react@0.13.3/lib/ReactCurrentOwner",
      "npm:react@0.13.3/lib/Object.assign",
      "npm:react@0.13.3/lib/ExecutionEnvironment",
      "npm:react@0.13.3/lib/ReactPerf",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.13.3/lib/EventPluginUtils",
      "npm:react@0.13.3/lib/ReactContext",
      "npm:react@0.13.3/lib/ReactElement",
      "npm:react@0.13.3/lib/ReactElementValidator",
      "npm:react@0.13.3/lib/ReactInstanceHandles",
      "npm:react@0.13.3/lib/ReactMount",
      "npm:react@0.13.3/lib/ReactReconciler",
      "npm:react@0.13.3/lib/getIteratorFn",
      "npm:react@0.13.3/lib/ReactRootIndex",
      "npm:react@0.13.3/lib/ReactInstanceMap",
      "npm:react@0.13.3/lib/getReactRootElementInContainer",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.13.3/lib/invariant",
      "npm:react@0.13.3/lib/emptyObject",
      "npm:react@0.13.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.3/lib/EventConstants",
      "npm:react@0.13.3/lib/warning",
      "npm:react@0.13.3/lib/ReactFragment",
      "npm:react@0.13.3/lib/ReactPropTypeLocations",
      "npm:react@0.13.3/lib/ReactNativeComponent",
      "npm:react@0.13.3/lib/DOMProperty",
      "npm:react@0.13.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.3/lib/ReactEmptyComponent",
      "npm:react@0.13.3/lib/ReactMarkupChecksum",
      "npm:react@0.13.3/lib/ReactUpdateQueue",
      "npm:react@0.13.3/lib/ReactUpdates",
      "npm:react@0.13.3/lib/containsNode",
      "npm:react@0.13.3/lib/instantiateReactComponent",
      "npm:react@0.13.3/lib/setInnerHTML",
      "npm:react@0.13.3/lib/shouldUpdateReactComponent",
      "npm:react@0.13.3/lib/ReactRef",
      "npm:process@0.10.1",
      "npm:react@0.13.3/lib/emptyFunction",
      "npm:react@0.13.3/lib/ViewportMetrics",
      "npm:react@0.13.3/lib/adler32",
      "npm:react@0.13.3/lib/ReactLifeCycle",
      "npm:react@0.13.3/lib/keyMirror",
      "npm:react@0.13.3/lib/EventPluginHub",
      "npm:react@0.13.3/lib/EventPluginRegistry",
      "npm:react@0.13.3/lib/ReactEventEmitterMixin",
      "npm:react@0.13.3/lib/isEventSupported",
      "npm:react@0.13.3/lib/CallbackQueue",
      "npm:react@0.13.3/lib/PooledClass",
      "npm:react@0.13.3/lib/Transaction",
      "npm:react@0.13.3/lib/isTextNode",
      "npm:react@0.13.3/lib/ReactCompositeComponent",
      "npm:react@0.13.3/lib/ReactOwner",
      "npm:process@0.10.1/browser",
      "npm:react@0.13.3/lib/forEachAccumulated",
      "npm:react@0.13.3/lib/isNode",
      "npm:react@0.13.3/lib/accumulateInto",
      "npm:react@0.13.3/lib/ReactComponentEnvironment",
      "npm:babel-runtime@5.8.25/core-js/object/get-own-property-descriptor",
      "npm:react-intl@1.2.0/lib/react-intl",
      "npm:babel-runtime@5.8.25/core-js/object/define-property",
      "github:exif-js/exif-js@master",
      "js/downscale-image.js",
      "npm:just-debounce@1.0.0",
      "stores/map-markers.js",
      "npm:babel-runtime@5.8.25/core-js/object/assign",
      "github:capaj/moonridge-react-utils@master/index",
      "github:components/jquery@2.1.4",
      "npm:classnames@2.1.3/index",
      "npm:weakee@0.9.1",
      "github:capaj/react-observe-store@0.2.1/react-observe-store",
      "npm:core-js@1.1.4/library/fn/promise",
      "npm:react-router@0.13.3/lib/components/DefaultRoute",
      "npm:react-router@0.13.3/lib/components/Link",
      "npm:react-router@0.13.3/lib/components/NotFoundRoute",
      "npm:react-router@0.13.3/lib/components/Redirect",
      "npm:react-router@0.13.3/lib/components/Route",
      "npm:react-router@0.13.3/lib/components/RouteHandler",
      "npm:react-router@0.13.3/lib/locations/HashLocation",
      "npm:react-router@0.13.3/lib/locations/HistoryLocation",
      "npm:react-router@0.13.3/lib/locations/RefreshLocation",
      "npm:react-router@0.13.3/lib/locations/StaticLocation",
      "npm:react-router@0.13.3/lib/locations/TestLocation",
      "npm:react-router@0.13.3/lib/behaviors/ImitateBrowserBehavior",
      "npm:react-router@0.13.3/lib/behaviors/ScrollToTopBehavior",
      "npm:react-router@0.13.3/lib/History",
      "npm:react-router@0.13.3/lib/Navigation",
      "npm:react-router@0.13.3/lib/State",
      "npm:react-router@0.13.3/lib/Route",
      "npm:react-router@0.13.3/lib/createRoutesFromReactChildren",
      "npm:react-router@0.13.3/lib/createRouter",
      "npm:react-router@0.13.3/lib/runRouter",
      "github:capaj/Moonridge-client@0.9.1/moonridge-client",
      "npm:core-js@1.1.4/library/fn/object/create",
      "npm:core-js@1.1.4/library/fn/object/set-prototype-of",
      "npm:react@0.13.3/lib/ReactChildren",
      "npm:react@0.13.3/lib/ReactClass",
      "npm:react@0.13.3/lib/ReactComponent",
      "npm:react@0.13.3/lib/ReactDOM",
      "npm:react@0.13.3/lib/ReactDOMTextComponent",
      "npm:react@0.13.3/lib/ReactDefaultInjection",
      "npm:react@0.13.3/lib/ReactPropTypes",
      "npm:react@0.13.3/lib/ReactServerRendering",
      "npm:react@0.13.3/lib/findDOMNode",
      "npm:react@0.13.3/lib/onlyChild",
      "npm:core-js@1.1.4/library/fn/object/get-own-property-descriptor",
      "npm:intl-messageformat@1.1.0",
      "npm:intl-relativeformat@1.1.0",
      "npm:react-intl@1.2.0/lib/en",
      "npm:react-intl@1.2.0/lib/mixin",
      "npm:react-intl@1.2.0/lib/components/date",
      "npm:react-intl@1.2.0/lib/components/time",
      "npm:react-intl@1.2.0/lib/components/relative",
      "npm:react-intl@1.2.0/lib/components/number",
      "npm:react-intl@1.2.0/lib/components/message",
      "npm:react-intl@1.2.0/lib/components/html-message",
      "npm:core-js@1.1.4/library/fn/object/define-property",
      "github:exif-js/exif-js@master/exif",
      "npm:just-debounce@1.0.0/index",
      "npm:lodash@3.10.1",
      "js/ls-backed-store.js",
      "npm:hashset.js@1.1.0",
      "npm:hashset.js@1.1.0/test/object-assign-polyfill",
      "github:capaj/js-info-bubble@master/src/infobubble",
      "npm:core-js@1.1.4/library/fn/object/assign",
      "components/marker-bubble.jsx!npm:jspm-loader-jsx@0.0.7",
      "github:capaj/moonridge-react-utils@master/live-query-component",
      "npm:weakee@0.9.1/weakee",
      "github:Polymer/observe-js@0.5.6",
      "npm:babel-runtime@5.8.25/core-js/object/keys",
      "github:capaj/react-observe-store@0.2.1/util/stripLastPropertyAcessor",
      "npm:core-js@1.1.4/library/modules/es6.object.to-string",
      "npm:core-js@1.1.4/library/modules/es6.string.iterator",
      "npm:core-js@1.1.4/library/modules/web.dom.iterable",
      "npm:core-js@1.1.4/library/modules/es6.promise",
      "npm:core-js@1.1.4/library/modules/$.core",
      "github:components/jquery@2.1.4/jquery",
      "npm:react-router@0.13.3/lib/PropTypes",
      "npm:react-router@0.13.3/lib/PathUtils",
      "npm:react-router@0.13.3/lib/actions/LocationActions",
      "npm:react-router@0.13.3/lib/components/ContextWrapper",
      "npm:react-router@0.13.3/lib/isReactChildren",
      "npm:react-router@0.13.3/lib/Redirect",
      "npm:react-router@0.13.3/lib/Transition",
      "npm:react-router@0.13.3/lib/ScrollHistory",
      "npm:react-router@0.13.3/lib/Cancellation",
      "npm:react-router@0.13.3/lib/Match",
      "npm:react-router@0.13.3/lib/supportsHistory",
      "github:capaj/socket.io-rpc-client@0.9.11",
      "npm:debug@2.2.0",
      "npm:lodash.difference@3.2.2",
      "github:capaj/Moonridge-client@0.9.1/moonridge/query-chainable",
      "npm:core-js@1.1.4/library/modules/$",
      "npm:core-js@1.1.4/library/modules/es6.object.set-prototype-of",
      "npm:react@0.13.3/lib/traverseAllChildren",
      "npm:react@0.13.3/lib/ReactErrorUtils",
      "npm:react@0.13.3/lib/keyOf",
      "npm:react@0.13.3/lib/mapObject",
      "npm:react@0.13.3/lib/DOMPropertyOperations",
      "npm:react@0.13.3/lib/ReactDOMComponent",
      "npm:react@0.13.3/lib/escapeTextContentForBrowser",
      "npm:react@0.13.3/lib/BeforeInputEventPlugin",
      "npm:react@0.13.3/lib/ChangeEventPlugin",
      "npm:react@0.13.3/lib/ClientReactRootIndex",
      "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.3/lib/DefaultEventPluginOrder",
      "npm:react@0.13.3/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.3/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.3/lib/ReactDOMButton",
      "npm:react@0.13.3/lib/ReactDOMForm",
      "npm:react@0.13.3/lib/ReactDOMImg",
      "npm:react@0.13.3/lib/ReactDOMIDOperations",
      "npm:react@0.13.3/lib/ReactDOMInput",
      "npm:react@0.13.3/lib/ReactDOMOption",
      "npm:react@0.13.3/lib/ReactDOMSelect",
      "npm:react@0.13.3/lib/ReactDOMTextarea",
      "npm:react@0.13.3/lib/ReactEventListener",
      "npm:react@0.13.3/lib/ReactDOMIframe",
      "npm:react@0.13.3/lib/ReactInjection",
      "npm:react@0.13.3/lib/ReactReconcileTransaction",
      "npm:react@0.13.3/lib/SelectEventPlugin",
      "npm:react@0.13.3/lib/ServerReactRootIndex",
      "npm:react@0.13.3/lib/SimpleEventPlugin",
      "npm:react@0.13.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.3/lib/createFullPageComponent",
      "npm:react@0.13.3/lib/ReactServerRenderingTransaction",
      "npm:react@0.13.3/lib/ReactDefaultPerf",
      "npm:core-js@1.1.4/library/modules/es6.object.get-own-property-descriptor",
      "npm:intl-messageformat@1.1.0/index",
      "npm:intl-format-cache@2.0.4",
      "npm:intl-relativeformat@1.1.0/index",
      "npm:react-intl@1.2.0/lib/react",
      "npm:react-intl@1.2.0/lib/escape",
      "npm:hashset.js@1.1.0/hashset",
      "npm:core-js@1.1.4/library/modules/es6.object.assign",
      "components/marker-methods/bin-marker-bubble.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/marker-methods/poo-marker-bubble.jsx!npm:jspm-loader-jsx@0.0.7",
      "components/user.jsx!npm:jspm-loader-jsx@0.0.7",
      "npm:lodash@3.10.1/index",
      "npm:babel-runtime@5.8.25/core-js/weak-map",
      "npm:core-js@1.1.4/library/fn/object/keys",
      "github:Polymer/observe-js@0.5.6/src/observe",
      "npm:core-js@1.1.4/library/modules/$.string-at",
      "npm:core-js@1.1.4/library/modules/$.iter-define",
      "npm:core-js@1.1.4/library/modules/es6.array.iterator",
      "npm:core-js@1.1.4/library/modules/$.iterators",
      "npm:core-js@1.1.4/library/modules/$.library",
      "npm:core-js@1.1.4/library/modules/$.global",
      "npm:core-js@1.1.4/library/modules/$.ctx",
      "npm:core-js@1.1.4/library/modules/$.classof",
      "npm:core-js@1.1.4/library/modules/$.def",
      "npm:core-js@1.1.4/library/modules/$.is-object",
      "npm:core-js@1.1.4/library/modules/$.an-object",
      "npm:core-js@1.1.4/library/modules/$.a-function",
      "npm:core-js@1.1.4/library/modules/$.strict-new",
      "npm:core-js@1.1.4/library/modules/$.for-of",
      "npm:core-js@1.1.4/library/modules/$.set-proto",
      "npm:core-js@1.1.4/library/modules/$.same",
      "npm:core-js@1.1.4/library/modules/$.species",
      "npm:core-js@1.1.4/library/modules/$.wks",
      "npm:core-js@1.1.4/library/modules/$.uid",
      "npm:core-js@1.1.4/library/modules/$.microtask",
      "npm:core-js@1.1.4/library/modules/$.support-desc",
      "npm:core-js@1.1.4/library/modules/$.mix",
      "npm:core-js@1.1.4/library/modules/$.tag",
      "npm:core-js@1.1.4/library/modules/$.iter-detect",
      "npm:object-assign@2.1.1",
      "npm:lodash.difference@3.2.2/index",
      "npm:qs@2.4.1",
      "npm:debug@2.2.0/browser",
      "github:capaj/Moonridge-client@0.9.1/moonridge/moonridge-method-validations",
      "npm:react@0.13.3/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.3/lib/ReactMultiChild",
      "npm:react@0.13.3/lib/CSSPropertyOperations",
      "npm:react@0.13.3/lib/EventPropagators",
      "npm:react@0.13.3/lib/FallbackCompositionState",
      "npm:react@0.13.3/lib/SyntheticCompositionEvent",
      "npm:react@0.13.3/lib/SyntheticInputEvent",
      "npm:react@0.13.3/lib/SyntheticEvent",
      "npm:react@0.13.3/lib/isTextInputElement",
      "npm:react@0.13.3/lib/SyntheticMouseEvent",
      "npm:react@0.13.3/lib/AutoFocusMixin",
      "npm:react@0.13.3/lib/LocalEventTrapMixin",
      "npm:react@0.13.3/lib/DOMChildrenOperations",
      "npm:react@0.13.3/lib/LinkedValueUtils",
      "npm:react@0.13.3/lib/EventListener",
      "npm:react@0.13.3/lib/getEventTarget",
      "npm:react@0.13.3/lib/getUnboundedScrollPosition",
      "npm:react@0.13.3/lib/ReactInputSelection",
      "npm:react@0.13.3/lib/ReactPutListenerQueue",
      "npm:react@0.13.3/lib/getActiveElement",
      "npm:react-router@0.13.3/lib/getWindowScrollPosition",
      "github:capaj/socket.io-rpc-client@0.9.11/client",
      "npm:react@0.13.3/lib/shallowEqual",
      "npm:react@0.13.3/lib/SyntheticClipboardEvent",
      "npm:react@0.13.3/lib/SyntheticFocusEvent",
      "npm:react@0.13.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.3/lib/SyntheticDragEvent",
      "npm:react@0.13.3/lib/SyntheticTouchEvent",
      "npm:react@0.13.3/lib/SyntheticUIEvent",
      "npm:react@0.13.3/lib/getEventCharCode",
      "npm:react@0.13.3/lib/SyntheticWheelEvent",
      "npm:react@0.13.3/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.13.3/lib/performanceNow",
      "npm:core-js@1.1.4/library/modules/$.to-iobject",
      "npm:core-js@1.1.4/library/modules/$.object-sap",
      "npm:intl-messageformat@1.1.0/lib/main",
      "npm:intl-format-cache@2.0.4/index",
      "npm:intl-relativeformat@1.1.0/lib/main",
      "npm:core-js@1.1.4/library/fn/weak-map",
      "npm:core-js@1.1.4/library/modules/$.assign",
      "npm:core-js@1.1.4/library/modules/$.defined",
      "npm:core-js@1.1.4/library/modules/$.hide",
      "npm:core-js@1.1.4/library/modules/$.redef",
      "npm:core-js@1.1.4/library/modules/$.has",
      "npm:core-js@1.1.4/library/modules/$.to-integer",
      "npm:core-js@1.1.4/library/modules/$.iter-create",
      "npm:core-js@1.1.4/library/modules/$.unscope",
      "npm:core-js@1.1.4/library/modules/$.iter-step",
      "npm:core-js@1.1.4/library/modules/$.cof",
      "npm:core-js@1.1.4/library/modules/$.iter-call",
      "npm:core-js@1.1.4/library/modules/$.is-array-iter",
      "npm:core-js@1.1.4/library/modules/$.to-length",
      "npm:core-js@1.1.4/library/modules/core.get-iterator-method",
      "npm:core-js@1.1.4/library/modules/$.shared",
      "npm:core-js@1.1.4/library/modules/$.task",
      "npm:core-js@1.1.4/library/modules/$.fails",
      "npm:core-js@1.1.4/library/modules/es6.object.keys",
      "npm:object-assign@2.1.1/index",
      "npm:lodash._baseflatten@3.1.4",
      "npm:lodash._basedifference@3.0.3",
      "npm:lodash.restparam@3.6.1",
      "npm:qs@2.4.1/index",
      "npm:debug@2.2.0/debug",
      "npm:react@0.13.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.3/lib/ReactChildReconciler",
      "npm:react@0.13.3/lib/CSSProperty",
      "npm:react@0.13.3/lib/camelizeStyleName",
      "npm:react@0.13.3/lib/dangerousStyleValue",
      "npm:react@0.13.3/lib/hyphenateStyleName",
      "npm:react@0.13.3/lib/memoizeStringOnly",
      "npm:react@0.13.3/lib/getTextContentAccessor",
      "npm:react@0.13.3/lib/getEventModifierState",
      "npm:react@0.13.3/lib/focusNode",
      "npm:react@0.13.3/lib/Danger",
      "npm:react@0.13.3/lib/setTextContent",
      "npm:react@0.13.3/lib/ReactDOMSelection",
      "npm:error-tojson@0.0.1",
      "npm:o.extend@1.0.0",
      "github:capaj/socket.io-rpc-event-handlers@0.1.3",
      "github:socketio/socket.io-client@1.3.7",
      "npm:react@0.13.3/lib/getEventKey",
      "npm:react@0.13.3/lib/performance",
      "npm:core-js@1.1.4/library/modules/$.iobject",
      "npm:intl-messageformat@1.1.0/lib/core",
      "npm:intl-messageformat@1.1.0/lib/en",
      "npm:intl-format-cache@2.0.4/lib/memoizer",
      "npm:intl-relativeformat@1.1.0/lib/core",
      "npm:intl-relativeformat@1.1.0/lib/en",
      "npm:core-js@1.1.4/library/modules/es6.weak-map",
      "npm:core-js@1.1.4/library/modules/$.to-object",
      "npm:core-js@1.1.4/library/modules/$.enum-keys",
      "npm:core-js@1.1.4/library/modules/$.property-desc",
      "npm:core-js@1.1.4/library/modules/$.invoke",
      "npm:core-js@1.1.4/library/modules/$.html",
      "npm:core-js@1.1.4/library/modules/$.dom-create",
      "npm:qs@2.4.1/lib/index",
      "npm:lodash._basedifference@3.0.3/index",
      "npm:lodash._baseflatten@3.1.4/index",
      "npm:react@0.13.3/lib/camelize",
      "npm:react@0.13.3/lib/flattenChildren",
      "npm:react@0.13.3/lib/hyphenate",
      "npm:react@0.13.3/lib/createNodesFromMarkup",
      "npm:react@0.13.3/lib/getMarkupWrap",
      "npm:react@0.13.3/lib/getNodeForCharacterOffset",
      "npm:o.extend@1.0.0/o.extend",
      "npm:error-tojson@0.0.1/index",
      "npm:ms@0.7.1",
      "github:capaj/socket.io-rpc-event-handlers@0.1.3/socket-event-handlers",
      "npm:intl-messageformat-parser@1.1.0",
      "npm:intl-messageformat@1.1.0/lib/utils",
      "npm:intl-messageformat@1.1.0/lib/es5",
      "npm:intl-format-cache@2.0.4/lib/es5",
      "npm:intl-relativeformat@1.1.0/lib/es5",
      "npm:intl-messageformat@1.1.0/lib/compiler",
      "npm:intl-relativeformat@1.1.0/lib/diff",
      "npm:core-js@1.1.4/library/modules/$.collection-weak",
      "npm:lodash.restparam@3.6.1/index",
      "npm:core-js@1.1.4/library/modules/$.collection",
      "github:socketio/socket.io-client@1.3.7/socket.io",
      "npm:qs@2.4.1/lib/parse",
      "npm:qs@2.4.1/lib/stringify",
      "npm:lodash._baseindexof@3.1.0",
      "npm:lodash.isarguments@3.0.4",
      "npm:react@0.13.3/lib/createArrayFromMixed",
      "npm:lodash._createcache@3.1.2",
      "npm:ms@0.7.1/index",
      "npm:traverse@0.6.6",
      "npm:lodash.isarray@3.0.4",
      "npm:intl-messageformat-parser@1.1.0/index",
      "npm:lodash._cacheindexof@3.0.2",
      "npm:core-js@1.1.4/library/modules/$.array-methods",
      "npm:qs@2.4.1/lib/utils",
      "npm:lodash.isarguments@3.0.4/index",
      "npm:lodash._baseindexof@3.1.0/index",
      "npm:react@0.13.3/lib/toArray",
      "npm:lodash._createcache@3.1.2/index",
      "npm:traverse@0.6.6/index",
      "npm:lodash.isarray@3.0.4/index",
      "npm:lodash._cacheindexof@3.0.2/index",
      "npm:intl-messageformat-parser@1.1.0/lib/parser",
      "npm:lodash._getnative@3.9.1",
      "npm:lodash._getnative@3.9.1/index"
    ]
  },
  trace: true,

  map: {
    "ENV": "envs/prod",
    "babel": "npm:babel-core@5.8.25",
    "babel-core": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "capaj/moonridge-react-utils": "github:capaj/moonridge-react-utils@master",
    "capaj/react-observe-store": "github:capaj/react-observe-store@0.2.1",
    "chai": "npm:chai@3.3.0",
    "classnames": "npm:classnames@2.1.3",
    "core-js": "npm:core-js@1.1.4",
    "exif-js/exif-js": "github:exif-js/exif-js@master",
    "googlemaps/js-info-bubble": "github:capaj/js-info-bubble@master",
    "hashset.js": "npm:hashset.js@1.1.0",
    "jsx": "npm:jspm-loader-jsx@0.0.7",
    "just-debounce": "npm:just-debounce@1.0.0",
    "lodash": "npm:lodash@3.10.1",
    "mocha": "npm:mocha@2.3.3",
    "moonridge-client": "github:capaj/Moonridge-client@0.9.1",
    "react": "npm:react@0.13.3",
    "react-intl": "npm:react-intl@1.2.0",
    "react-router": "npm:react-router@0.13.3",
    "weakee": "npm:weakee@0.9.1",
    "github:capaj/Moonridge-client@0.9.1": {
      "debug": "npm:debug@2.2.0",
      "lodash.difference": "npm:lodash.difference@3.2.2",
      "socket.io-rpc-client": "github:capaj/socket.io-rpc-client@0.9.11"
    },
    "github:capaj/react-observe-store@0.2.1": {
      "observe-js": "github:Polymer/observe-js@0.5.6"
    },
    "github:capaj/socket.io-rpc-client@0.9.11": {
      "debug": "npm:debug@2.2.0",
      "error-tojson": "npm:error-tojson@0.0.1",
      "o.extend": "npm:o.extend@1.0.0",
      "socket.io-client": "github:socketio/socket.io-client@1.3.7",
      "socket.io-rpc-event-handlers": "github:capaj/socket.io-rpc-event-handlers@0.1.3",
      "traverse": "npm:traverse@0.6.6"
    },
    "github:capaj/socket.io-rpc-event-handlers@0.1.3": {
      "debug": "npm:debug@2.2.0",
      "traverse": "npm:traverse@0.6.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:browserify-aes@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:camel-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.2"
    },
    "npm:chai@3.3.0": {
      "assertion-error": "npm:assertion-error@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:classnames@2.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.4",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl-messageformat@1.1.0": {
      "intl-messageformat-parser": "npm:intl-messageformat-parser@1.1.0"
    },
    "npm:intl-relativeformat@1.1.0": {
      "intl-messageformat": "npm:intl-messageformat@1.1.0"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash._basedifference@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._baseflatten@3.1.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._createcache@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash.difference@3.2.2": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mocha@2.3.3": {
      "css": "github:systemjs/plugin-css@0.1.17"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pascal-case@1.1.1": {
      "camel-case": "npm:camel-case@1.1.2",
      "upper-case-first": "npm:upper-case-first@1.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-intl@1.2.0": {
      "intl-format-cache": "npm:intl-format-cache@2.0.4",
      "intl-messageformat": "npm:intl-messageformat@1.1.0",
      "intl-relativeformat": "npm:intl-relativeformat@1.1.0",
      "react": "npm:react@0.13.3"
    },
    "npm:react-router@0.13.3": {
      "object-assign": "npm:object-assign@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "qs": "npm:qs@2.4.1",
      "react": "npm:react@0.13.3"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sentence-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:upper-case-first@1.1.1": {
      "upper-case": "npm:upper-case@1.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:weakee@0.9.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
