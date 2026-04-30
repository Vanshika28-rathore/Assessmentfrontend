var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component4.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component4(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value2) {
        return "" + value2;
      }
      function checkKeyStringCoercion(value2) {
        try {
          testStringCoercion(value2);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value2[Symbol.toStringTag] || value2.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value2);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement2(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement2(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement2(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement2(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement2(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component4.prototype.isReactComponent = {};
      Component4.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component4.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component4.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component4.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement2(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component4;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement2;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value2, formatterFn) {
        return resolveDispatcher().useDebugValue(value2, formatterFn);
      };
      exports.useDeferredValue = function(value2, initialValue) {
        return resolveDispatcher().useDeferredValue(value2, initialValue);
      };
      exports.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.5";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/pages/admin/AIInterviewResults.jsx
var import_react9 = __toESM(require_react(), 1);

// node_modules/react-router/dist/development/chunk-OE4NN4TA.mjs
var React2 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);
var React3 = __toESM(require_react(), 1);
var React4 = __toESM(require_react(), 1);
var React9 = __toESM(require_react(), 1);
var React8 = __toESM(require_react(), 1);
var React7 = __toESM(require_react(), 1);
var React6 = __toESM(require_react(), 1);
var React5 = __toESM(require_react(), 1);
var React10 = __toESM(require_react(), 1);
var React11 = __toESM(require_react(), 1);
function invariant(value2, message) {
  if (value2 === false || value2 === null || typeof value2 === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var _map;
_map = /* @__PURE__ */ new WeakMap();
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    loaderData: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
  let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
        return;
      }
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(
        route.children,
        branches,
        routesMeta,
        path,
        hasParentOptionalSegments
      );
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    if (route.path === "" || !route.path?.includes("?")) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, true, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value2 = captureGroups[index];
      if (isOptional && !value2) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value2 || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (match, paramName, isOptional, index, str) => {
      params.push({ paramName, isOptional: isOptional != null });
      if (isOptional) {
        let nextChar = str.charAt(index + match.length);
        if (nextChar && nextChar !== "/") {
          return "/([^\\/]*)";
        }
        return "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else {
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value2) {
  try {
    return value2.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value2}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value2;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname;
  if (toPathname) {
    toPathname = removeDoubleSlashes(toPathname);
    if (toPathname.startsWith("/")) {
      pathname = resolvePathname(toPathname.substring(1), "/");
    } else {
      pathname = resolvePathname(toPathname, fromPathname);
    }
  } else {
    pathname = fromPathname;
  }
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = removeTrailingSlash(fromPathname).split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var removeDoubleSlashes = (path) => path.replace(/\/\/+/g, "/");
var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
var removeTrailingSlash = (path) => path.replace(/\/+$/, "");
var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var ErrorResponseImpl = class {
  constructor(status, statusText, data2, internal = false) {
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data2 instanceof Error) {
      this.data = data2.toString();
      this.error = data2;
    } else {
      this.data = data2;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
function getRoutePattern(matches) {
  let parts2 = matches.map((m) => m.route.path).filter(Boolean);
  return joinPaths(parts2) || "/";
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function parseToInfo(_to, basename) {
  let to = _to;
  if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) {
    return {
      absoluteURL: void 0,
      isExternal: false,
      to
    };
  }
  let absoluteURL = to;
  let isExternal = false;
  if (isBrowser) {
    try {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      let path = stripBasename(targetUrl.pathname, basename);
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    } catch (e) {
      warning(
        false,
        `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  }
  return {
    absoluteURL,
    isExternal,
    to
  };
}
var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var validMutationMethods = new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var DataRouterContext = React2.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = React2.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var RSCRouterContext = React2.createContext(false);
function useIsRSCRouterContext() {
  return React2.useContext(RSCRouterContext);
}
var ViewTransitionContext = React2.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = React2.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = React2.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = React2.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = React2.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = React2.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = React2.createContext(null);
RouteErrorContext.displayName = "RouteError";
var ENABLE_DEV_WARNINGS = true;
var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
var ERROR_DIGEST_REDIRECT = "REDIRECT";
var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
function decodeRedirectErrorDigest(digest) {
  if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
    try {
      let parsed = JSON.parse(digest.slice(28));
      if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
        return parsed;
      }
    } catch {
    }
  }
}
function decodeRouteErrorResponseDigest(digest) {
  if (digest.startsWith(
    `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
  )) {
    try {
      let parsed = JSON.parse(digest.slice(40));
      if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
        return new ErrorResponseImpl(
          parsed.status,
          parsed.statusText,
          parsed.data
        );
      }
    } catch {
    }
  }
}
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = React22.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return React22.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return React22.useContext(LocationContext).location;
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = React22.useContext(NavigationContext).static;
  if (!isStatic) {
    React22.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = React22.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = React22.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = React22.useContext(NavigationContext);
  let { matches } = React22.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = React22.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React22.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
var OutletContext = React22.createContext(null);
function useResolvedPath(to, { relative } = {}) {
  let { matches } = React22.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return React22.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutesImpl(routes, locationArg, dataRouterOpts) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2 } = React22.useContext(NavigationContext);
  let { matches: parentMatches } = React22.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (ENABLE_DEV_WARNINGS) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location2;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  if (ENABLE_DEV_WARNINGS) {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location2.pathname}${location2.search}${location2.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location2.pathname}${location2.search}${location2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          navigator2.encodeLocation ? navigator2.encodeLocation(
            match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          navigator2.encodeLocation ? navigator2.encodeLocation(
            match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterOpts
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ React22.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            unstable_mask: void 0,
            ...location2
          },
          navigationType: "POP"
          /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  if (ENABLE_DEV_WARNINGS) {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React22.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React22.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React22.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React22.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React22.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ React22.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends React22.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    } else {
      console.error(
        "React Router caught the following error during render",
        error
      );
    }
  }
  render() {
    let error = this.state.error;
    if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      const decoded = decodeRouteErrorResponseDigest(error.digest);
      if (decoded) error = decoded;
    }
    let result = error !== void 0 ? /* @__PURE__ */ React22.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React22.createElement(
      RouteErrorContext.Provider,
      {
        value: error,
        children: this.props.component
      }
    )) : this.props.children;
    if (this.context) {
      return /* @__PURE__ */ React22.createElement(RSCErrorHandler, { error }, result);
    }
    return result;
  }
};
RenderErrorBoundary.contextType = RSCRouterContext;
var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
function RSCErrorHandler({
  children,
  error
}) {
  let { basename } = React22.useContext(NavigationContext);
  if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
    let redirect2 = decodeRedirectErrorDigest(error.digest);
    if (redirect2) {
      let existingRedirect = errorRedirectHandledMap.get(error);
      if (existingRedirect) throw existingRedirect;
      let parsed = parseToInfo(redirect2.location, basename);
      if (isBrowser && !errorRedirectHandledMap.get(error)) {
        if (parsed.isExternal || redirect2.reloadDocument) {
          window.location.href = parsed.absoluteURL || parsed.to;
        } else {
          const redirectPromise = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(parsed.to, {
              replace: redirect2.replace
            })
          );
          errorRedirectHandledMap.set(error, redirectPromise);
          throw redirectPromise;
        }
      }
      return /* @__PURE__ */ React22.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${parsed.absoluteURL || parsed.to}`
        }
      );
    }
  }
  return children;
}
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = React22.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ React22.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
  let dataRouterState = dataRouterOpts?.state;
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && errors?.[m.route.id] !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterOpts && dataRouterState) {
    renderFallback = dataRouterState.renderFallback;
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          if (dataRouterOpts.isStatic) {
            renderFallback = true;
          }
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  let onErrorHandler = dataRouterOpts?.onError;
  let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
    onErrorHandler(error, {
      location: dataRouterState.location,
      params: dataRouterState.matches?.[0]?.params ?? {},
      unstable_pattern: getRoutePattern(dataRouterState.matches),
      errorInfo
    });
  } : void 0;
  return renderedMatches.reduceRight(
    (outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : void 0;
        errorElement = match.route.errorElement || defaultErrorElement;
        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            warningOnce(
              "route-fallback",
              false,
              "No `HydrateFallback` element provided to render during initial hydration"
            );
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ React22.createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ React22.createElement(
          RenderedRoute,
          {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          }
        );
      };
      return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React22.createElement(
        RenderErrorBoundary,
        {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: { outlet: null, matches: matches2, isDataRoute: true },
          onError
        }
      ) : getChildren();
    },
    null
  );
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = React22.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React22.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = React22.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    "useRouteId"
    /* UseRouteId */
  );
}
function useNavigation() {
  let state = useDataRouterState(
    "useNavigation"
    /* UseNavigation */
  );
  return state.navigation;
}
function useMatches() {
  let { matches, loaderData } = useDataRouterState(
    "useMatches"
    /* UseMatches */
  );
  return React22.useMemo(
    () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
    [matches, loaderData]
  );
}
function useRouteError() {
  let error = React22.useContext(RouteErrorContext);
  let state = useDataRouterState(
    "useRouteError"
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    "useRouteError"
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return state.errors?.[routeId];
}
function useNavigateStable() {
  let { router } = useDataRouterContext(
    "useNavigate"
    /* UseNavigateStable */
  );
  let id = useCurrentRouteId(
    "useNavigate"
    /* UseNavigateStable */
  );
  let activeRef = React22.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React22.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        await router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
var USE_OPTIMISTIC = "useOptimistic";
var useOptimisticImpl = React3[USE_OPTIMISTIC];
var MemoizedDataRoutes = React3.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state,
  isStatic,
  onError
}) {
  return useRoutesImpl(routes, void 0, { state, isStatic, onError, future });
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator: navigator2,
  static: staticProp = false,
  unstable_useTransitions
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React3.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      unstable_useTransitions,
      future: {}
    }),
    [basename, navigator2, staticProp, unstable_useTransitions]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default",
    unstable_mask
  } = locationProp;
  let locationContext = React3.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key,
        unstable_mask
      },
      navigationType
    };
  }, [
    basename,
    pathname,
    search,
    hash,
    state,
    key,
    navigationType,
    unstable_mask
  ]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value: value2 } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value2);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function invariant2(value2, message) {
  if (value2 === false || value2 === null || typeof value2 === "undefined") {
    throw new Error(message);
  }
}
function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
  let url2 = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (trailingSlashAware) {
    if (url2.pathname.endsWith("/")) {
      url2.pathname = `${url2.pathname}_.${extension}`;
    } else {
      url2.pathname = `${url2.pathname}.${extension}`;
    }
  } else {
    if (url2.pathname === "/") {
      url2.pathname = `_root.${extension}`;
    } else if (basename && stripBasename(url2.pathname, basename) === "/") {
      url2.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
    } else {
      url2.pathname = `${removeTrailingSlash(url2.pathname)}.${extension}`;
    }
  }
  return url2;
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    import.meta.hot) {
      throw error;
    }
    window.location.reload();
    return new Promise(() => {
    });
  }
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location2, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location2.pathname + location2.search + location2.hash,
            window.origin
          ),
          currentParams: currentMatches[0]?.params || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.clientActionModule) {
        hrefs = hrefs.concat(route.clientActionModule);
      }
      if (route.clientLoaderModule) {
        hrefs = hrefs.concat(route.clientLoaderModule);
      }
      if (includeHydrateFallback && route.hydrateFallbackModule) {
        hrefs = hrefs.concat(route.hydrateFallbackModule);
      }
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys2 = Object.keys(obj).sort();
  for (let key of keys2) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function useDataRouterContext2() {
  let context = React8.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = React8.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = React8.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = React8.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = React8.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = React8.useRef(null);
  React8.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  React8.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({ page, ...linkProps }) {
  let rsc = useIsRSCRouterContext();
  let { router } = useDataRouterContext2();
  let matches = React8.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    return null;
  }
  if (rsc) {
    return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
  React8.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function RSCPrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location2 = useLocation();
  let { future } = useFrameworkContext();
  let { basename } = useDataRouterContext2();
  let dataHrefs = React8.useMemo(() => {
    if (page === location2.pathname + location2.search + location2.hash) {
      return [];
    }
    let url2 = singleFetchUrl(
      page,
      basename,
      future.unstable_trailingSlashAwareDataRequests,
      "rsc"
    );
    let hasSomeRoutesWithShouldRevalidate = false;
    let targetRoutes = [];
    for (let match of nextMatches) {
      if (typeof match.route.shouldRevalidate === "function") {
        hasSomeRoutesWithShouldRevalidate = true;
      } else {
        targetRoutes.push(match.route.id);
      }
    }
    if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
      url2.searchParams.set("_routes", targetRoutes.join(","));
    }
    return [url2.pathname + url2.search];
  }, [
    basename,
    future.unstable_trailingSlashAwareDataRequests,
    page,
    location2,
    nextMatches
  ]);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location2 = useLocation();
  let { future, manifest, routeModules } = useFrameworkContext();
  let { basename } = useDataRouterContext2();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = React8.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location2,
      "data"
    ),
    [page, nextMatches, matches, manifest, location2]
  );
  let newMatchesForAssets = React8.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location2,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location2]
  );
  let dataHrefs = React8.useMemo(() => {
    if (page === location2.pathname + location2.search + location2.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url2 = singleFetchUrl(
      page,
      basename,
      future.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    if (foundOptOutRoute && routesParams.size > 0) {
      url2.searchParams.set(
        "_routes",
        nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
      );
    }
    return [url2.pathname + url2.search];
  }, [
    basename,
    future.unstable_trailingSlashAwareDataRequests,
    loaderData,
    location2,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = React8.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ React8.createElement(
      "link",
      {
        key,
        nonce: linkProps.nonce,
        ...link,
        crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
      }
    )
  )));
}
function mergeRefs(...refs) {
  return (value2) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value2);
      } else if (ref != null) {
        ref.current = value2;
      }
    });
  };
}
var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser2) {
    window.__reactRouterVersion = // @ts-expect-error
    "7.14.1";
  }
} catch (e) {
}
function HistoryRouter({
  basename,
  children,
  history,
  unstable_useTransitions
}) {
  let [state, setStateImpl] = React10.useState({
    action: history.action,
    location: history.location
  });
  let setState = React10.useCallback(
    (newState) => {
      if (unstable_useTransitions === false) {
        setStateImpl(newState);
      } else {
        React10.startTransition(() => setStateImpl(newState));
      }
    },
    [unstable_useTransitions]
  );
  React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ React10.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history,
      unstable_useTransitions
    }
  );
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = React10.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    unstable_mask,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    unstable_defaultShouldRevalidate,
    ...rest
  }, forwardedRef) {
    let { basename, navigator: navigator2, unstable_useTransitions } = React10.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let parsed = parseToInfo(to, basename);
    to = parsed.to;
    let href = useHref(to, { relative });
    let location2 = useLocation();
    let maskedHref = null;
    if (unstable_mask) {
      let resolved = resolveTo(
        unstable_mask,
        [],
        location2.unstable_mask ? location2.unstable_mask.pathname : "/",
        true
      );
      if (basename !== "/") {
        resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
      }
      maskedHref = navigator2.createHref(resolved);
    }
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      unstable_mask,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition,
      unstable_defaultShouldRevalidate,
      unstable_useTransitions
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let isSpaLink = !(parsed.isExternal || reloadDocument);
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ React10.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
          onClick: isSpaLink ? handleClick : onClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = React10.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to, { relative: rest.relative });
    let location2 = useLocation();
    let routerState = React10.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location2.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ React10.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = React10.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    unstable_defaultShouldRevalidate,
    ...props
  }, forwardedRef) => {
    let { unstable_useTransitions } = React10.useContext(NavigationContext);
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = submitter?.getAttribute("formmethod") || method;
      let doSubmit = () => submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition,
        unstable_defaultShouldRevalidate
      });
      if (unstable_useTransitions && navigate !== false) {
        React10.startTransition(() => doSubmit());
      } else {
        doSubmit();
      }
    };
    return /* @__PURE__ */ React10.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function ScrollRestoration({
  getKey,
  storageKey,
  ...props
}) {
  let remixContext = React10.useContext(FrameworkContext);
  let { basename } = React10.useContext(NavigationContext);
  let location2 = useLocation();
  let matches = useMatches();
  useScrollRestoration({ getKey, storageKey });
  let ssrKey = React10.useMemo(
    () => {
      if (!remixContext || !getKey) return null;
      let userKey = getScrollRestorationKey(
        location2,
        matches,
        basename,
        getKey
      );
      return userKey !== location2.key ? userKey : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (!remixContext || remixContext.isSpaMode) {
    return null;
  }
  let restoreScroll = ((storageKey2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(storageKey2);
    }
  }).toString();
  return /* @__PURE__ */ React10.createElement(
    "script",
    {
      ...props,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: `(${restoreScroll})(${escapeHtml(
          JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
        )}, ${escapeHtml(JSON.stringify(ssrKey))})`
      }
    }
  );
}
ScrollRestoration.displayName = "ScrollRestoration";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = React10.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useDataRouterState2(hookName) {
  let state = React10.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError2(hookName));
  return state;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  unstable_mask,
  state,
  preventScrollReset,
  relative,
  viewTransition,
  unstable_defaultShouldRevalidate,
  unstable_useTransitions
} = {}) {
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to, { relative });
  return React10.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
        let doNavigate = () => navigate(to, {
          replace: replace2,
          unstable_mask,
          state,
          preventScrollReset,
          relative,
          viewTransition,
          unstable_defaultShouldRevalidate
        });
        if (unstable_useTransitions) {
          React10.startTransition(() => doNavigate());
        } else {
          doNavigate();
        }
      }
    },
    [
      location2,
      navigate,
      path,
      replaceProp,
      unstable_mask,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition,
      unstable_defaultShouldRevalidate,
      unstable_useTransitions
    ]
  );
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3(
    "useSubmit"
    /* UseSubmit */
  );
  let { basename } = React10.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  let routerFetch = router.fetch;
  let routerNavigate = router.navigate;
  return React10.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await routerFetch(key, currentRouteId, options.action || action, {
          unstable_defaultShouldRevalidate: options.unstable_defaultShouldRevalidate,
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await routerNavigate(options.action || action, {
          unstable_defaultShouldRevalidate: options.unstable_defaultShouldRevalidate,
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [routerFetch, routerNavigate, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = React10.useContext(NavigationContext);
  let routeContext = React10.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location2 = useLocation();
  if (action == null) {
    path.search = location2.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function getScrollRestorationKey(location2, matches, basename, getKey) {
  let key = null;
  if (getKey) {
    if (basename !== "/") {
      key = getKey(
        {
          ...location2,
          pathname: stripBasename(location2.pathname, basename) || location2.pathname
        },
        matches
      );
    } else {
      key = getKey(location2, matches);
    }
  }
  if (key == null) {
    key = location2.key;
  }
  return key;
}
function useScrollRestoration({
  getKey,
  storageKey
} = {}) {
  let { router } = useDataRouterContext3(
    "useScrollRestoration"
    /* UseScrollRestoration */
  );
  let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
    "useScrollRestoration"
    /* UseScrollRestoration */
  );
  let { basename } = React10.useContext(NavigationContext);
  let location2 = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  React10.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  usePageHide(
    React10.useCallback(() => {
      if (navigation.state === "idle") {
        let key = getScrollRestorationKey(location2, matches, basename, getKey);
        savedScrollPositions[key] = window.scrollY;
      }
      try {
        sessionStorage.setItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY,
          JSON.stringify(savedScrollPositions)
        );
      } catch (error) {
        warning(
          false,
          `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
        );
      }
      window.history.scrollRestoration = "auto";
    }, [navigation.state, getKey, basename, location2, matches, storageKey])
  );
  if (typeof document !== "undefined") {
    React10.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        );
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
      }
    }, [storageKey]);
    React10.useLayoutEffect(() => {
      let disableScrollRestoration = router?.enableScrollRestoration(
        savedScrollPositions,
        () => window.scrollY,
        getKey ? (location22, matches2) => getScrollRestorationKey(location22, matches2, basename, getKey) : void 0
      );
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    React10.useLayoutEffect(() => {
      if (restoreScrollPosition === false) {
        return;
      }
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      try {
        if (location2.hash) {
          let el = document.getElementById(
            decodeURIComponent(location2.hash.slice(1))
          );
          if (el) {
            el.scrollIntoView();
            return;
          }
        }
      } catch {
        warning(
          false,
          `"${location2.hash.slice(
            1
          )}" is not a decodable element ID. The view will not scroll to it.`
        );
      }
      if (preventScrollReset === true) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location2, restoreScrollPosition, preventScrollReset]);
  }
}
function usePageHide(callback, options) {
  let { capture } = options || {};
  React10.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
function useViewTransitionState(to, { relative } = {}) {
  let vtContext = React10.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/Icon.js
var import_react = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0, import_react.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component4 = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component4.displayName = toPascalCase(iconName);
  return Component4;
};

// node_modules/lucide-react/dist/esm/icons/arrow-left.js
var __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
var ArrowLeft = createLucideIcon("arrow-left", __iconNode);

// node_modules/lucide-react/dist/esm/icons/brain-circuit.js
var __iconNode2 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
];
var BrainCircuit = createLucideIcon("brain-circuit", __iconNode2);

// node_modules/lucide-react/dist/esm/icons/calendar.js
var __iconNode3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
var Calendar = createLucideIcon("calendar", __iconNode3);

// node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode4);

// node_modules/lucide-react/dist/esm/icons/circle-x.js
var __iconNode5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
var CircleX = createLucideIcon("circle-x", __iconNode5);

// node_modules/lucide-react/dist/esm/icons/download.js
var __iconNode6 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
var Download = createLucideIcon("download", __iconNode6);

// node_modules/lucide-react/dist/esm/icons/eye.js
var __iconNode7 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
var Eye = createLucideIcon("eye", __iconNode7);

// node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode8 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
var FileText = createLucideIcon("file-text", __iconNode8);

// node_modules/lucide-react/dist/esm/icons/leaf.js
var __iconNode9 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
var Leaf = createLucideIcon("leaf", __iconNode9);

// node_modules/lucide-react/dist/esm/icons/loader-circle.js
var __iconNode10 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
var LoaderCircle = createLucideIcon("loader-circle", __iconNode10);

// node_modules/lucide-react/dist/esm/icons/log-out.js
var __iconNode11 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
var LogOut = createLucideIcon("log-out", __iconNode11);

// node_modules/lucide-react/dist/esm/icons/menu.js
var __iconNode12 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
var Menu = createLucideIcon("menu", __iconNode12);

// node_modules/lucide-react/dist/esm/icons/message-square.js
var __iconNode13 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
var MessageSquare = createLucideIcon("message-square", __iconNode13);

// node_modules/lucide-react/dist/esm/icons/moon.js
var __iconNode14 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
var Moon = createLucideIcon("moon", __iconNode14);

// node_modules/lucide-react/dist/esm/icons/settings.js
var __iconNode15 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
var Settings = createLucideIcon("settings", __iconNode15);

// node_modules/lucide-react/dist/esm/icons/star.js
var __iconNode16 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
var Star = createLucideIcon("star", __iconNode16);

// node_modules/lucide-react/dist/esm/icons/sun.js
var __iconNode17 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
var Sun = createLucideIcon("sun", __iconNode17);

// node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var __iconNode18 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
var TriangleAlert = createLucideIcon("triangle-alert", __iconNode18);

// node_modules/lucide-react/dist/esm/icons/user.js
var __iconNode19 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
var User = createLucideIcon("user", __iconNode19);

// node_modules/lucide-react/dist/esm/icons/video.js
var __iconNode20 = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
var Video = createLucideIcon("video", __iconNode20);

// node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode21 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
var X = createLucideIcon("x", __iconNode21);

// node_modules/xlsx/xlsx.mjs
var XLSX = {};
XLSX.version = "0.18.5";
var current_codepage = 1200;
var current_ansi = 1252;
var VALID_ANSI = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4];
var CS2CP = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
};
var set_ansi = function(cp) {
  if (VALID_ANSI.indexOf(cp) == -1) return;
  current_ansi = CS2CP[0] = cp;
};
function reset_ansi() {
  set_ansi(1252);
}
var set_cp = function(cp) {
  current_codepage = cp;
  set_ansi(cp);
};
function reset_cp() {
  set_cp(1200);
  reset_ansi();
}
function utf16beread(data2) {
  var o = [];
  for (var i = 0; i < data2.length >> 1; ++i) o[i] = String.fromCharCode(data2.charCodeAt(2 * i + 1) + (data2.charCodeAt(2 * i) << 8));
  return o.join("");
}
var _getchar = function _gc1(x) {
  return String.fromCharCode(x);
};
var _getansi = function _ga1(x) {
  return String.fromCharCode(x);
};
var $cptable;
var DENSE = null;
var DIF_XL = true;
var Base64_map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Base64_encode(input) {
  var o = "";
  var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
  for (var i = 0; i < input.length; ) {
    c1 = input.charCodeAt(i++);
    e1 = c1 >> 2;
    c2 = input.charCodeAt(i++);
    e2 = (c1 & 3) << 4 | c2 >> 4;
    c3 = input.charCodeAt(i++);
    e3 = (c2 & 15) << 2 | c3 >> 6;
    e4 = c3 & 63;
    if (isNaN(c2)) {
      e3 = e4 = 64;
    } else if (isNaN(c3)) {
      e4 = 64;
    }
    o += Base64_map.charAt(e1) + Base64_map.charAt(e2) + Base64_map.charAt(e3) + Base64_map.charAt(e4);
  }
  return o;
}
function Base64_decode(input) {
  var o = "";
  var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
  input = input.replace(/[^\w\+\/\=]/g, "");
  for (var i = 0; i < input.length; ) {
    e1 = Base64_map.indexOf(input.charAt(i++));
    e2 = Base64_map.indexOf(input.charAt(i++));
    c1 = e1 << 2 | e2 >> 4;
    o += String.fromCharCode(c1);
    e3 = Base64_map.indexOf(input.charAt(i++));
    c2 = (e2 & 15) << 4 | e3 >> 2;
    if (e3 !== 64) {
      o += String.fromCharCode(c2);
    }
    e4 = Base64_map.indexOf(input.charAt(i++));
    c3 = (e3 & 3) << 6 | e4;
    if (e4 !== 64) {
      o += String.fromCharCode(c3);
    }
  }
  return o;
}
var has_buf = /* @__PURE__ */ (function() {
  return typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;
})();
var Buffer_from = /* @__PURE__ */ (function() {
  if (typeof Buffer !== "undefined") {
    var nbfs = !Buffer.from;
    if (!nbfs) try {
      Buffer.from("foo", "utf8");
    } catch (e) {
      nbfs = true;
    }
    return nbfs ? function(buf, enc) {
      return enc ? new Buffer(buf, enc) : new Buffer(buf);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
})();
function new_raw_buf(len) {
  if (has_buf) return Buffer.alloc ? Buffer.alloc(len) : new Buffer(len);
  return typeof Uint8Array != "undefined" ? new Uint8Array(len) : new Array(len);
}
function new_unsafe_buf(len) {
  if (has_buf) return Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : new Buffer(len);
  return typeof Uint8Array != "undefined" ? new Uint8Array(len) : new Array(len);
}
var s2a = function s2a2(s) {
  if (has_buf) return Buffer_from(s, "binary");
  return s.split("").map(function(x) {
    return x.charCodeAt(0) & 255;
  });
};
function s2ab(s) {
  if (typeof ArrayBuffer === "undefined") return s2a(s);
  var buf = new ArrayBuffer(s.length), view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 255;
  return buf;
}
function a2s(data2) {
  if (Array.isArray(data2)) return data2.map(function(c) {
    return String.fromCharCode(c);
  }).join("");
  var o = [];
  for (var i = 0; i < data2.length; ++i) o[i] = String.fromCharCode(data2[i]);
  return o.join("");
}
function a2u(data2) {
  if (typeof Uint8Array === "undefined") throw new Error("Unsupported");
  return new Uint8Array(data2);
}
var bconcat = has_buf ? function(bufs) {
  return Buffer.concat(bufs.map(function(buf) {
    return Buffer.isBuffer(buf) ? buf : Buffer_from(buf);
  }));
} : function(bufs) {
  if (typeof Uint8Array !== "undefined") {
    var i = 0, maxlen = 0;
    for (i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;
    var o = new Uint8Array(maxlen);
    var len = 0;
    for (i = 0, maxlen = 0; i < bufs.length; maxlen += len, ++i) {
      len = bufs[i].length;
      if (bufs[i] instanceof Uint8Array) o.set(bufs[i], maxlen);
      else if (typeof bufs[i] == "string") {
        throw "wtf";
      } else o.set(new Uint8Array(bufs[i]), maxlen);
    }
    return o;
  }
  return [].concat.apply([], bufs.map(function(buf) {
    return Array.isArray(buf) ? buf : [].slice.call(buf);
  }));
};
function utf8decode(content) {
  var out = [], widx = 0, L = content.length + 250;
  var o = new_raw_buf(content.length + 255);
  for (var ridx = 0; ridx < content.length; ++ridx) {
    var c = content.charCodeAt(ridx);
    if (c < 128) o[widx++] = c;
    else if (c < 2048) {
      o[widx++] = 192 | c >> 6 & 31;
      o[widx++] = 128 | c & 63;
    } else if (c >= 55296 && c < 57344) {
      c = (c & 1023) + 64;
      var d = content.charCodeAt(++ridx) & 1023;
      o[widx++] = 240 | c >> 8 & 7;
      o[widx++] = 128 | c >> 2 & 63;
      o[widx++] = 128 | d >> 6 & 15 | (c & 3) << 4;
      o[widx++] = 128 | d & 63;
    } else {
      o[widx++] = 224 | c >> 12 & 15;
      o[widx++] = 128 | c >> 6 & 63;
      o[widx++] = 128 | c & 63;
    }
    if (widx > L) {
      out.push(o.slice(0, widx));
      widx = 0;
      o = new_raw_buf(65535);
      L = 65530;
    }
  }
  out.push(o.slice(0, widx));
  return bconcat(out);
}
var chr0 = /\u0000/g;
var chr1 = /[\u0001-\u0006]/g;
function _strrev(x) {
  var o = "", i = x.length - 1;
  while (i >= 0) o += x.charAt(i--);
  return o;
}
function pad0(v, d) {
  var t = "" + v;
  return t.length >= d ? t : fill("0", d - t.length) + t;
}
function pad_(v, d) {
  var t = "" + v;
  return t.length >= d ? t : fill(" ", d - t.length) + t;
}
function rpad_(v, d) {
  var t = "" + v;
  return t.length >= d ? t : t + fill(" ", d - t.length);
}
function pad0r1(v, d) {
  var t = "" + Math.round(v);
  return t.length >= d ? t : fill("0", d - t.length) + t;
}
function pad0r2(v, d) {
  var t = "" + v;
  return t.length >= d ? t : fill("0", d - t.length) + t;
}
var p2_32 = /* @__PURE__ */ Math.pow(2, 32);
function pad0r(v, d) {
  if (v > p2_32 || v < -p2_32) return pad0r1(v, d);
  var i = Math.round(v);
  return pad0r2(i, d);
}
function SSF_isgeneral(s, i) {
  i = i || 0;
  return s.length >= 7 + i && (s.charCodeAt(i) | 32) === 103 && (s.charCodeAt(i + 1) | 32) === 101 && (s.charCodeAt(i + 2) | 32) === 110 && (s.charCodeAt(i + 3) | 32) === 101 && (s.charCodeAt(i + 4) | 32) === 114 && (s.charCodeAt(i + 5) | 32) === 97 && (s.charCodeAt(i + 6) | 32) === 108;
}
var days = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
];
var months = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function SSF_init_table(t) {
  if (!t) t = {};
  t[0] = "General";
  t[1] = "0";
  t[2] = "0.00";
  t[3] = "#,##0";
  t[4] = "#,##0.00";
  t[9] = "0%";
  t[10] = "0.00%";
  t[11] = "0.00E+00";
  t[12] = "# ?/?";
  t[13] = "# ??/??";
  t[14] = "m/d/yy";
  t[15] = "d-mmm-yy";
  t[16] = "d-mmm";
  t[17] = "mmm-yy";
  t[18] = "h:mm AM/PM";
  t[19] = "h:mm:ss AM/PM";
  t[20] = "h:mm";
  t[21] = "h:mm:ss";
  t[22] = "m/d/yy h:mm";
  t[37] = "#,##0 ;(#,##0)";
  t[38] = "#,##0 ;[Red](#,##0)";
  t[39] = "#,##0.00;(#,##0.00)";
  t[40] = "#,##0.00;[Red](#,##0.00)";
  t[45] = "mm:ss";
  t[46] = "[h]:mm:ss";
  t[47] = "mmss.0";
  t[48] = "##0.0E+0";
  t[49] = "@";
  t[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "';
  return t;
}
var table_fmt = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'
};
var SSF_default_map = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
};
var SSF_default_str = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function SSF_frac(x, D, mixed) {
  var sgn = x < 0 ? -1 : 1;
  var B = x * sgn;
  var P_2 = 0, P_1 = 1, P = 0;
  var Q_2 = 1, Q_1 = 0, Q = 0;
  var A = Math.floor(B);
  while (Q_1 < D) {
    A = Math.floor(B);
    P = A * P_1 + P_2;
    Q = A * Q_1 + Q_2;
    if (B - A < 5e-8) break;
    B = 1 / (B - A);
    P_2 = P_1;
    P_1 = P;
    Q_2 = Q_1;
    Q_1 = Q;
  }
  if (Q > D) {
    if (Q_1 > D) {
      Q = Q_2;
      P = P_2;
    } else {
      Q = Q_1;
      P = P_1;
    }
  }
  if (!mixed) return [0, sgn * P, Q];
  var q = Math.floor(sgn * P / Q);
  return [q, sgn * P - q * Q, Q];
}
function SSF_parse_date_code(v, opts, b2) {
  if (v > 2958465 || v < 0) return null;
  var date = v | 0, time = Math.floor(86400 * (v - date)), dow = 0;
  var dout = [];
  var out = { D: date, T: time, u: 86400 * (v - date) - time, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(out.u) < 1e-6) out.u = 0;
  if (opts && opts.date1904) date += 1462;
  if (out.u > 0.9999) {
    out.u = 0;
    if (++time == 86400) {
      out.T = time = 0;
      ++date;
      ++out.D;
    }
  }
  if (date === 60) {
    dout = b2 ? [1317, 10, 29] : [1900, 2, 29];
    dow = 3;
  } else if (date === 0) {
    dout = b2 ? [1317, 8, 29] : [1900, 1, 0];
    dow = 6;
  } else {
    if (date > 60) --date;
    var d = new Date(1900, 0, 1);
    d.setDate(d.getDate() + date - 1);
    dout = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
    dow = d.getDay();
    if (date < 60) dow = (dow + 6) % 7;
    if (b2) dow = SSF_fix_hijri(d, dout);
  }
  out.y = dout[0];
  out.m = dout[1];
  out.d = dout[2];
  out.S = time % 60;
  time = Math.floor(time / 60);
  out.M = time % 60;
  time = Math.floor(time / 60);
  out.H = time;
  out.q = dow;
  return out;
}
var SSFbasedate = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0);
var SSFdnthresh = /* @__PURE__ */ SSFbasedate.getTime();
var SSFbase1904 = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function datenum_local(v, date1904) {
  var epoch = /* @__PURE__ */ v.getTime();
  if (date1904) epoch -= 1461 * 24 * 60 * 60 * 1e3;
  else if (v >= SSFbase1904) epoch += 24 * 60 * 60 * 1e3;
  return (epoch - (SSFdnthresh + (/* @__PURE__ */ v.getTimezoneOffset() - /* @__PURE__ */ SSFbasedate.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function SSF_strip_decimal(o) {
  return o.indexOf(".") == -1 ? o : o.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function SSF_normalize_exp(o) {
  if (o.indexOf("E") == -1) return o;
  return o.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function SSF_small_exp(v) {
  var w = v < 0 ? 12 : 11;
  var o = SSF_strip_decimal(v.toFixed(12));
  if (o.length <= w) return o;
  o = v.toPrecision(10);
  if (o.length <= w) return o;
  return v.toExponential(5);
}
function SSF_large_exp(v) {
  var o = SSF_strip_decimal(v.toFixed(11));
  return o.length > (v < 0 ? 12 : 11) || o === "0" || o === "-0" ? v.toPrecision(6) : o;
}
function SSF_general_num(v) {
  var V = Math.floor(Math.log(Math.abs(v)) * Math.LOG10E), o;
  if (V >= -4 && V <= -1) o = v.toPrecision(10 + V);
  else if (Math.abs(V) <= 9) o = SSF_small_exp(v);
  else if (V === 10) o = v.toFixed(10).substr(0, 12);
  else o = SSF_large_exp(v);
  return SSF_strip_decimal(SSF_normalize_exp(o.toUpperCase()));
}
function SSF_general(v, opts) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "TRUE" : "FALSE";
    case "number":
      return (v | 0) === v ? v.toString(10) : SSF_general_num(v);
    case "undefined":
      return "";
    case "object":
      if (v == null) return "";
      if (v instanceof Date) return SSF_format(14, datenum_local(v, opts && opts.date1904), opts);
  }
  throw new Error("unsupported value in General format: " + v);
}
function SSF_fix_hijri(date, o) {
  o[0] -= 581;
  var dow = date.getDay();
  if (date < 60) dow = (dow + 6) % 7;
  return dow;
}
function SSF_write_date(type, fmt, val, ss0) {
  var o = "", ss = 0, tt = 0, y = val.y, out, outl = 0;
  switch (type) {
    case 98:
      y = val.y + 543;
    /* falls through */
    case 121:
      switch (fmt.length) {
        case 1:
        case 2:
          out = y % 100;
          outl = 2;
          break;
        default:
          out = y % 1e4;
          outl = 4;
          break;
      }
      break;
    case 109:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.m;
          outl = fmt.length;
          break;
        case 3:
          return months[val.m - 1][1];
        case 5:
          return months[val.m - 1][0];
        default:
          return months[val.m - 1][2];
      }
      break;
    case 100:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.d;
          outl = fmt.length;
          break;
        case 3:
          return days[val.q][0];
        default:
          return days[val.q][1];
      }
      break;
    case 104:
      switch (fmt.length) {
        case 1:
        case 2:
          out = 1 + (val.H + 11) % 12;
          outl = fmt.length;
          break;
        default:
          throw "bad hour format: " + fmt;
      }
      break;
    case 72:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.H;
          outl = fmt.length;
          break;
        default:
          throw "bad hour format: " + fmt;
      }
      break;
    case 77:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.M;
          outl = fmt.length;
          break;
        default:
          throw "bad minute format: " + fmt;
      }
      break;
    case 115:
      if (fmt != "s" && fmt != "ss" && fmt != ".0" && fmt != ".00" && fmt != ".000") throw "bad second format: " + fmt;
      if (val.u === 0 && (fmt == "s" || fmt == "ss")) return pad0(val.S, fmt.length);
      if (ss0 >= 2) tt = ss0 === 3 ? 1e3 : 100;
      else tt = ss0 === 1 ? 10 : 1;
      ss = Math.round(tt * (val.S + val.u));
      if (ss >= 60 * tt) ss = 0;
      if (fmt === "s") return ss === 0 ? "0" : "" + ss / tt;
      o = pad0(ss, 2 + ss0);
      if (fmt === "ss") return o.substr(0, 2);
      return "." + o.substr(2, fmt.length - 1);
    case 90:
      switch (fmt) {
        case "[h]":
        case "[hh]":
          out = val.D * 24 + val.H;
          break;
        case "[m]":
        case "[mm]":
          out = (val.D * 24 + val.H) * 60 + val.M;
          break;
        case "[s]":
        case "[ss]":
          out = ((val.D * 24 + val.H) * 60 + val.M) * 60 + Math.round(val.S + val.u);
          break;
        default:
          throw "bad abstime format: " + fmt;
      }
      outl = fmt.length === 3 ? 1 : 2;
      break;
    case 101:
      out = y;
      outl = 1;
      break;
  }
  var outstr = outl > 0 ? pad0(out, outl) : "";
  return outstr;
}
function commaify(s) {
  var w = 3;
  if (s.length <= w) return s;
  var j = s.length % w, o = s.substr(0, j);
  for (; j != s.length; j += w) o += (o.length > 0 ? "," : "") + s.substr(j, w);
  return o;
}
var pct1 = /%/g;
function write_num_pct(type, fmt, val) {
  var sfmt = fmt.replace(pct1, ""), mul = fmt.length - sfmt.length;
  return write_num(type, sfmt, val * Math.pow(10, 2 * mul)) + fill("%", mul);
}
function write_num_cm(type, fmt, val) {
  var idx = fmt.length - 1;
  while (fmt.charCodeAt(idx - 1) === 44) --idx;
  return write_num(type, fmt.substr(0, idx), val / Math.pow(10, 3 * (fmt.length - idx)));
}
function write_num_exp(fmt, val) {
  var o;
  var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
  if (fmt.match(/^#+0.0E\+0$/)) {
    if (val == 0) return "0.0E+0";
    else if (val < 0) return "-" + write_num_exp(fmt, -val);
    var period = fmt.indexOf(".");
    if (period === -1) period = fmt.indexOf("E");
    var ee = Math.floor(Math.log(val) * Math.LOG10E) % period;
    if (ee < 0) ee += period;
    o = (val / Math.pow(10, ee)).toPrecision(idx + 1 + (period + ee) % period);
    if (o.indexOf("e") === -1) {
      var fakee = Math.floor(Math.log(val) * Math.LOG10E);
      if (o.indexOf(".") === -1) o = o.charAt(0) + "." + o.substr(1) + "E+" + (fakee - o.length + ee);
      else o += "E+" + (fakee - ee);
      while (o.substr(0, 2) === "0.") {
        o = o.charAt(0) + o.substr(2, period) + "." + o.substr(2 + period);
        o = o.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      }
      o = o.replace(/\+-/, "-");
    }
    o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function($$, $1, $2, $3) {
      return $1 + $2 + $3.substr(0, (period + ee) % period) + "." + $3.substr(ee) + "E";
    });
  } else o = val.toExponential(idx);
  if (fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0, o.length - 1) + "0" + o.charAt(o.length - 1);
  if (fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/, "e");
  return o.replace("e", "E");
}
var frac1 = /# (\?+)( ?)\/( ?)(\d+)/;
function write_num_f1(r, aval, sign) {
  var den = parseInt(r[4], 10), rr = Math.round(aval * den), base = Math.floor(rr / den);
  var myn = rr - base * den, myd = den;
  return sign + (base === 0 ? "" : "" + base) + " " + (myn === 0 ? fill(" ", r[1].length + 1 + r[4].length) : pad_(myn, r[1].length) + r[2] + "/" + r[3] + pad0(myd, r[4].length));
}
function write_num_f2(r, aval, sign) {
  return sign + (aval === 0 ? "" : "" + aval) + fill(" ", r[1].length + 2 + r[4].length);
}
var dec1 = /^#*0*\.([0#]+)/;
var closeparen = /\).*[0#]/;
var phone = /\(###\) ###\\?-####/;
function hashq(str) {
  var o = "", cc;
  for (var i = 0; i != str.length; ++i) switch (cc = str.charCodeAt(i)) {
    case 35:
      break;
    case 63:
      o += " ";
      break;
    case 48:
      o += "0";
      break;
    default:
      o += String.fromCharCode(cc);
  }
  return o;
}
function rnd(val, d) {
  var dd = Math.pow(10, d);
  return "" + Math.round(val * dd) / dd;
}
function dec(val, d) {
  var _frac = val - Math.floor(val), dd = Math.pow(10, d);
  if (d < ("" + Math.round(_frac * dd)).length) return 0;
  return Math.round(_frac * dd);
}
function carry(val, d) {
  if (d < ("" + Math.round((val - Math.floor(val)) * Math.pow(10, d))).length) {
    return 1;
  }
  return 0;
}
function flr(val) {
  if (val < 2147483647 && val > -2147483648) return "" + (val >= 0 ? val | 0 : val - 1 | 0);
  return "" + Math.floor(val);
}
function write_num_flt(type, fmt, val) {
  if (type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
    var ffmt = fmt.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (val >= 0) return write_num_flt("n", ffmt, val);
    return "(" + write_num_flt("n", ffmt, -val) + ")";
  }
  if (fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm(type, fmt, val);
  if (fmt.indexOf("%") !== -1) return write_num_pct(type, fmt, val);
  if (fmt.indexOf("E") !== -1) return write_num_exp(fmt, val);
  if (fmt.charCodeAt(0) === 36) return "$" + write_num_flt(type, fmt.substr(fmt.charAt(1) == " " ? 2 : 1), val);
  var o;
  var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
  if (fmt.match(/^00+$/)) return sign + pad0r(aval, fmt.length);
  if (fmt.match(/^[#?]+$/)) {
    o = pad0r(val, 0);
    if (o === "0") o = "";
    return o.length > fmt.length ? o : hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r = fmt.match(frac1)) return write_num_f1(r, aval, sign);
  if (fmt.match(/^#+0+$/)) return sign + pad0r(aval, fmt.length - fmt.indexOf("0"));
  if (r = fmt.match(dec1)) {
    o = rnd(val, r[1].length).replace(/^([^\.]+)$/, "$1." + hashq(r[1])).replace(/\.$/, "." + hashq(r[1])).replace(/\.(\d*)$/, function($$, $1) {
      return "." + $1 + fill("0", hashq(
        /*::(*/
        r[1]
      ).length - $1.length);
    });
    return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
  }
  fmt = fmt.replace(/^#+([0.])/, "$1");
  if (r = fmt.match(/^(0*)\.(#*)$/)) {
    return sign + rnd(aval, r[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, r[1].length ? "0." : ".");
  }
  if (r = fmt.match(/^#{1,3},##0(\.?)$/)) return sign + commaify(pad0r(aval, 0));
  if (r = fmt.match(/^#,##0\.([#0]*0)$/)) {
    return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify("" + (Math.floor(val) + carry(val, r[1].length))) + "." + pad0(dec(val, r[1].length), r[1].length);
  }
  if (r = fmt.match(/^#,#*,#0/)) return write_num_flt(type, fmt.replace(/^#,#*,/, ""), val);
  if (r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    o = _strrev(write_num_flt(type, fmt.replace(/[\\-]/g, ""), val));
    ri = 0;
    return _strrev(_strrev(fmt.replace(/\\/g, "")).replace(/[0#]/g, function(x2) {
      return ri < o.length ? o.charAt(ri++) : x2 === "0" ? "0" : "";
    }));
  }
  if (fmt.match(phone)) {
    o = write_num_flt(type, "##########", val);
    return "(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
  }
  var oa = "";
  if (r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri = Math.min(
      /*::String(*/
      r[4].length,
      7
    );
    ff = SSF_frac(aval, Math.pow(10, ri) - 1, false);
    o = "" + sign;
    oa = write_num(
      "n",
      /*::String(*/
      r[1],
      ff[1]
    );
    if (oa.charAt(oa.length - 1) == " ") oa = oa.substr(0, oa.length - 1) + "0";
    o += oa + /*::String(*/
    r[2] + "/" + /*::String(*/
    r[3];
    oa = rpad_(ff[2], ri);
    if (oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length - oa.length)) + oa;
    o += oa;
    return o;
  }
  if (r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri = Math.min(Math.max(r[1].length, r[4].length), 7);
    ff = SSF_frac(aval, Math.pow(10, ri) - 1, true);
    return sign + (ff[0] || (ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1], ri) + r[2] + "/" + r[3] + rpad_(ff[2], ri) : fill(" ", 2 * ri + 1 + r[2].length + r[3].length));
  }
  if (r = fmt.match(/^[#0?]+$/)) {
    o = pad0r(val, 0);
    if (fmt.length <= o.length) return o;
    return hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r = fmt.match(/^([#0?]+)\.([#0]+)$/)) {
    o = "" + val.toFixed(Math.min(r[2].length, 10)).replace(/([^0])0+$/, "$1");
    ri = o.indexOf(".");
    var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
    return hashq(fmt.substr(0, lres) + o + fmt.substr(fmt.length - rres));
  }
  if (r = fmt.match(/^00,000\.([#0]*0)$/)) {
    ri = dec(val, r[1].length);
    return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(flr(val)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function($$) {
      return "00," + ($$.length < 3 ? pad0(0, 3 - $$.length) : "") + $$;
    }) + "." + pad0(ri, r[1].length);
  }
  switch (fmt) {
    case "###,##0.00":
      return write_num_flt(type, "#,##0.00", val);
    case "###,###":
    case "##,###":
    case "#,###":
      var x = commaify(pad0r(aval, 0));
      return x !== "0" ? sign + x : "";
    case "###,###.00":
      return write_num_flt(type, "###,##0.00", val).replace(/^0\./, ".");
    case "#,###.00":
      return write_num_flt(type, "#,##0.00", val).replace(/^0\./, ".");
    default:
  }
  throw new Error("unsupported format |" + fmt + "|");
}
function write_num_cm2(type, fmt, val) {
  var idx = fmt.length - 1;
  while (fmt.charCodeAt(idx - 1) === 44) --idx;
  return write_num(type, fmt.substr(0, idx), val / Math.pow(10, 3 * (fmt.length - idx)));
}
function write_num_pct2(type, fmt, val) {
  var sfmt = fmt.replace(pct1, ""), mul = fmt.length - sfmt.length;
  return write_num(type, sfmt, val * Math.pow(10, 2 * mul)) + fill("%", mul);
}
function write_num_exp2(fmt, val) {
  var o;
  var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
  if (fmt.match(/^#+0.0E\+0$/)) {
    if (val == 0) return "0.0E+0";
    else if (val < 0) return "-" + write_num_exp2(fmt, -val);
    var period = fmt.indexOf(".");
    if (period === -1) period = fmt.indexOf("E");
    var ee = Math.floor(Math.log(val) * Math.LOG10E) % period;
    if (ee < 0) ee += period;
    o = (val / Math.pow(10, ee)).toPrecision(idx + 1 + (period + ee) % period);
    if (!o.match(/[Ee]/)) {
      var fakee = Math.floor(Math.log(val) * Math.LOG10E);
      if (o.indexOf(".") === -1) o = o.charAt(0) + "." + o.substr(1) + "E+" + (fakee - o.length + ee);
      else o += "E+" + (fakee - ee);
      o = o.replace(/\+-/, "-");
    }
    o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function($$, $1, $2, $3) {
      return $1 + $2 + $3.substr(0, (period + ee) % period) + "." + $3.substr(ee) + "E";
    });
  } else o = val.toExponential(idx);
  if (fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0, o.length - 1) + "0" + o.charAt(o.length - 1);
  if (fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/, "e");
  return o.replace("e", "E");
}
function write_num_int(type, fmt, val) {
  if (type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
    var ffmt = fmt.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (val >= 0) return write_num_int("n", ffmt, val);
    return "(" + write_num_int("n", ffmt, -val) + ")";
  }
  if (fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm2(type, fmt, val);
  if (fmt.indexOf("%") !== -1) return write_num_pct2(type, fmt, val);
  if (fmt.indexOf("E") !== -1) return write_num_exp2(fmt, val);
  if (fmt.charCodeAt(0) === 36) return "$" + write_num_int(type, fmt.substr(fmt.charAt(1) == " " ? 2 : 1), val);
  var o;
  var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
  if (fmt.match(/^00+$/)) return sign + pad0(aval, fmt.length);
  if (fmt.match(/^[#?]+$/)) {
    o = "" + val;
    if (val === 0) o = "";
    return o.length > fmt.length ? o : hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r = fmt.match(frac1)) return write_num_f2(r, aval, sign);
  if (fmt.match(/^#+0+$/)) return sign + pad0(aval, fmt.length - fmt.indexOf("0"));
  if (r = fmt.match(dec1)) {
    o = ("" + val).replace(/^([^\.]+)$/, "$1." + hashq(r[1])).replace(/\.$/, "." + hashq(r[1]));
    o = o.replace(/\.(\d*)$/, function($$, $1) {
      return "." + $1 + fill("0", hashq(r[1]).length - $1.length);
    });
    return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
  }
  fmt = fmt.replace(/^#+([0.])/, "$1");
  if (r = fmt.match(/^(0*)\.(#*)$/)) {
    return sign + ("" + aval).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, r[1].length ? "0." : ".");
  }
  if (r = fmt.match(/^#{1,3},##0(\.?)$/)) return sign + commaify("" + aval);
  if (r = fmt.match(/^#,##0\.([#0]*0)$/)) {
    return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify("" + val) + "." + fill("0", r[1].length);
  }
  if (r = fmt.match(/^#,#*,#0/)) return write_num_int(type, fmt.replace(/^#,#*,/, ""), val);
  if (r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    o = _strrev(write_num_int(type, fmt.replace(/[\\-]/g, ""), val));
    ri = 0;
    return _strrev(_strrev(fmt.replace(/\\/g, "")).replace(/[0#]/g, function(x2) {
      return ri < o.length ? o.charAt(ri++) : x2 === "0" ? "0" : "";
    }));
  }
  if (fmt.match(phone)) {
    o = write_num_int(type, "##########", val);
    return "(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
  }
  var oa = "";
  if (r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri = Math.min(
      /*::String(*/
      r[4].length,
      7
    );
    ff = SSF_frac(aval, Math.pow(10, ri) - 1, false);
    o = "" + sign;
    oa = write_num(
      "n",
      /*::String(*/
      r[1],
      ff[1]
    );
    if (oa.charAt(oa.length - 1) == " ") oa = oa.substr(0, oa.length - 1) + "0";
    o += oa + /*::String(*/
    r[2] + "/" + /*::String(*/
    r[3];
    oa = rpad_(ff[2], ri);
    if (oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length - oa.length)) + oa;
    o += oa;
    return o;
  }
  if (r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri = Math.min(Math.max(r[1].length, r[4].length), 7);
    ff = SSF_frac(aval, Math.pow(10, ri) - 1, true);
    return sign + (ff[0] || (ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1], ri) + r[2] + "/" + r[3] + rpad_(ff[2], ri) : fill(" ", 2 * ri + 1 + r[2].length + r[3].length));
  }
  if (r = fmt.match(/^[#0?]+$/)) {
    o = "" + val;
    if (fmt.length <= o.length) return o;
    return hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r = fmt.match(/^([#0]+)\.([#0]+)$/)) {
    o = "" + val.toFixed(Math.min(r[2].length, 10)).replace(/([^0])0+$/, "$1");
    ri = o.indexOf(".");
    var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
    return hashq(fmt.substr(0, lres) + o + fmt.substr(fmt.length - rres));
  }
  if (r = fmt.match(/^00,000\.([#0]*0)$/)) {
    return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify("" + val).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function($$) {
      return "00," + ($$.length < 3 ? pad0(0, 3 - $$.length) : "") + $$;
    }) + "." + pad0(0, r[1].length);
  }
  switch (fmt) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x = commaify("" + aval);
      return x !== "0" ? sign + x : "";
    default:
      if (fmt.match(/\.[0#?]*$/)) return write_num_int(type, fmt.slice(0, fmt.lastIndexOf(".")), val) + hashq(fmt.slice(fmt.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + fmt + "|");
}
function write_num(type, fmt, val) {
  return (val | 0) === val ? write_num_int(type, fmt, val) : write_num_flt(type, fmt, val);
}
function SSF_split_fmt(fmt) {
  var out = [];
  var in_str = false;
  for (var i = 0, j = 0; i < fmt.length; ++i) switch (
    /*cc=*/
    fmt.charCodeAt(i)
  ) {
    case 34:
      in_str = !in_str;
      break;
    case 95:
    case 42:
    case 92:
      ++i;
      break;
    case 59:
      out[out.length] = fmt.substr(j, i - j);
      j = i + 1;
  }
  out[out.length] = fmt.substr(j);
  if (in_str === true) throw new Error("Format |" + fmt + "| unterminated string ");
  return out;
}
var SSF_abstime = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function fmt_is_date(fmt) {
  var i = 0, c = "", o = "";
  while (i < fmt.length) {
    switch (c = fmt.charAt(i)) {
      case "G":
        if (SSF_isgeneral(fmt, i)) i += 6;
        i++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          fmt.charCodeAt(++i) !== 34 && i < fmt.length;
        ) {
        }
        ++i;
        break;
      case "\\":
        i += 2;
        break;
      case "_":
        i += 2;
        break;
      case "@":
        ++i;
        break;
      case "B":
      case "b":
        if (fmt.charAt(i + 1) === "1" || fmt.charAt(i + 1) === "2") return true;
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return true;
      case "A":
      case "a":
      case "\u4E0A":
        if (fmt.substr(i, 3).toUpperCase() === "A/P") return true;
        if (fmt.substr(i, 5).toUpperCase() === "AM/PM") return true;
        if (fmt.substr(i, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348") return true;
        ++i;
        break;
      case "[":
        o = c;
        while (fmt.charAt(i++) !== "]" && i < fmt.length) o += fmt.charAt(i);
        if (o.match(SSF_abstime)) return true;
        break;
      case ".":
      /* falls through */
      case "0":
      case "#":
        while (i < fmt.length && ("0#?.,E+-%".indexOf(c = fmt.charAt(++i)) > -1 || c == "\\" && fmt.charAt(i + 1) == "-" && "0#".indexOf(fmt.charAt(i + 2)) > -1)) {
        }
        break;
      case "?":
        while (fmt.charAt(++i) === c) {
        }
        break;
      case "*":
        ++i;
        if (fmt.charAt(i) == " " || fmt.charAt(i) == "*") ++i;
        break;
      case "(":
      case ")":
        ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        while (i < fmt.length && "0123456789".indexOf(fmt.charAt(++i)) > -1) {
        }
        break;
      case " ":
        ++i;
        break;
      default:
        ++i;
        break;
    }
  }
  return false;
}
function eval_fmt(fmt, v, opts, flen) {
  var out = [], o = "", i = 0, c = "", lst = "t", dt, j, cc;
  var hr = "H";
  while (i < fmt.length) {
    switch (c = fmt.charAt(i)) {
      case "G":
        if (!SSF_isgeneral(fmt, i)) throw new Error("unrecognized character " + c + " in " + fmt);
        out[out.length] = { t: "G", v: "General" };
        i += 7;
        break;
      case '"':
        for (o = ""; (cc = fmt.charCodeAt(++i)) !== 34 && i < fmt.length; ) o += String.fromCharCode(cc);
        out[out.length] = { t: "t", v: o };
        ++i;
        break;
      case "\\":
        var w = fmt.charAt(++i), t = w === "(" || w === ")" ? w : "t";
        out[out.length] = { t, v: w };
        ++i;
        break;
      case "_":
        out[out.length] = { t: "t", v: " " };
        i += 2;
        break;
      case "@":
        out[out.length] = { t: "T", v };
        ++i;
        break;
      case "B":
      case "b":
        if (fmt.charAt(i + 1) === "1" || fmt.charAt(i + 1) === "2") {
          if (dt == null) {
            dt = SSF_parse_date_code(v, opts, fmt.charAt(i + 1) === "2");
            if (dt == null) return "";
          }
          out[out.length] = { t: "X", v: fmt.substr(i, 2) };
          lst = c;
          i += 2;
          break;
        }
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (v < 0) return "";
        if (dt == null) {
          dt = SSF_parse_date_code(v, opts);
          if (dt == null) return "";
        }
        o = c;
        while (++i < fmt.length && fmt.charAt(i).toLowerCase() === c) o += c;
        if (c === "m" && lst.toLowerCase() === "h") c = "M";
        if (c === "h") c = hr;
        out[out.length] = { t: c, v: o };
        lst = c;
        break;
      case "A":
      case "a":
      case "\u4E0A":
        var q = { t: c, v: c };
        if (dt == null) dt = SSF_parse_date_code(v, opts);
        if (fmt.substr(i, 3).toUpperCase() === "A/P") {
          if (dt != null) q.v = dt.H >= 12 ? "P" : "A";
          q.t = "T";
          hr = "h";
          i += 3;
        } else if (fmt.substr(i, 5).toUpperCase() === "AM/PM") {
          if (dt != null) q.v = dt.H >= 12 ? "PM" : "AM";
          q.t = "T";
          i += 5;
          hr = "h";
        } else if (fmt.substr(i, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348") {
          if (dt != null) q.v = dt.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348";
          q.t = "T";
          i += 5;
          hr = "h";
        } else {
          q.t = "t";
          ++i;
        }
        if (dt == null && q.t === "T") return "";
        out[out.length] = q;
        lst = c;
        break;
      case "[":
        o = c;
        while (fmt.charAt(i++) !== "]" && i < fmt.length) o += fmt.charAt(i);
        if (o.slice(-1) !== "]") throw 'unterminated "[" block: |' + o + "|";
        if (o.match(SSF_abstime)) {
          if (dt == null) {
            dt = SSF_parse_date_code(v, opts);
            if (dt == null) return "";
          }
          out[out.length] = { t: "Z", v: o.toLowerCase() };
          lst = o.charAt(1);
        } else if (o.indexOf("$") > -1) {
          o = (o.match(/\$([^-\[\]]*)/) || [])[1] || "$";
          if (!fmt_is_date(fmt)) out[out.length] = { t: "t", v: o };
        }
        break;
      /* Numbers */
      case ".":
        if (dt != null) {
          o = c;
          while (++i < fmt.length && (c = fmt.charAt(i)) === "0") o += c;
          out[out.length] = { t: "s", v: o };
          break;
        }
      /* falls through */
      case "0":
      case "#":
        o = c;
        while (++i < fmt.length && "0#?.,E+-%".indexOf(c = fmt.charAt(i)) > -1) o += c;
        out[out.length] = { t: "n", v: o };
        break;
      case "?":
        o = c;
        while (fmt.charAt(++i) === c) o += c;
        out[out.length] = { t: c, v: o };
        lst = c;
        break;
      case "*":
        ++i;
        if (fmt.charAt(i) == " " || fmt.charAt(i) == "*") ++i;
        break;
      // **
      case "(":
      case ")":
        out[out.length] = { t: flen === 1 ? "t" : c, v: c };
        ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        o = c;
        while (i < fmt.length && "0123456789".indexOf(fmt.charAt(++i)) > -1) o += fmt.charAt(i);
        out[out.length] = { t: "D", v: o };
        break;
      case " ":
        out[out.length] = { t: c, v: c };
        ++i;
        break;
      case "$":
        out[out.length] = { t: "t", v: "$" };
        ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + fmt);
        out[out.length] = { t: "t", v: c };
        ++i;
        break;
    }
  }
  var bt = 0, ss0 = 0, ssm;
  for (i = out.length - 1, lst = "t"; i >= 0; --i) {
    switch (out[i].t) {
      case "h":
      case "H":
        out[i].t = hr;
        lst = "h";
        if (bt < 1) bt = 1;
        break;
      case "s":
        if (ssm = out[i].v.match(/\.0+$/)) ss0 = Math.max(ss0, ssm[0].length - 1);
        if (bt < 3) bt = 3;
      /* falls through */
      case "d":
      case "y":
      case "M":
      case "e":
        lst = out[i].t;
        break;
      case "m":
        if (lst === "s") {
          out[i].t = "M";
          if (bt < 2) bt = 2;
        }
        break;
      case "X":
        break;
      case "Z":
        if (bt < 1 && out[i].v.match(/[Hh]/)) bt = 1;
        if (bt < 2 && out[i].v.match(/[Mm]/)) bt = 2;
        if (bt < 3 && out[i].v.match(/[Ss]/)) bt = 3;
    }
  }
  switch (bt) {
    case 0:
      break;
    case 1:
      if (dt.u >= 0.5) {
        dt.u = 0;
        ++dt.S;
      }
      if (dt.S >= 60) {
        dt.S = 0;
        ++dt.M;
      }
      if (dt.M >= 60) {
        dt.M = 0;
        ++dt.H;
      }
      break;
    case 2:
      if (dt.u >= 0.5) {
        dt.u = 0;
        ++dt.S;
      }
      if (dt.S >= 60) {
        dt.S = 0;
        ++dt.M;
      }
      break;
  }
  var nstr = "", jj;
  for (i = 0; i < out.length; ++i) {
    switch (out[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        out[i].v = "";
        out[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        out[i].v = SSF_write_date(out[i].t.charCodeAt(0), out[i].v, dt, ss0);
        out[i].t = "t";
        break;
      case "n":
      case "?":
        jj = i + 1;
        while (out[jj] != null && ((c = out[jj].t) === "?" || c === "D" || (c === " " || c === "t") && out[jj + 1] != null && (out[jj + 1].t === "?" || out[jj + 1].t === "t" && out[jj + 1].v === "/") || out[i].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (out[jj].v === "/" || out[jj].v === " " && out[jj + 1] != null && out[jj + 1].t == "?"))) {
          out[i].v += out[jj].v;
          out[jj] = { v: "", t: ";" };
          ++jj;
        }
        nstr += out[i].v;
        i = jj - 1;
        break;
      case "G":
        out[i].t = "t";
        out[i].v = SSF_general(v, opts);
        break;
    }
  }
  var vv = "", myv, ostr;
  if (nstr.length > 0) {
    if (nstr.charCodeAt(0) == 40) {
      myv = v < 0 && nstr.charCodeAt(0) === 45 ? -v : v;
      ostr = write_num("n", nstr, myv);
    } else {
      myv = v < 0 && flen > 1 ? -v : v;
      ostr = write_num("n", nstr, myv);
      if (myv < 0 && out[0] && out[0].t == "t") {
        ostr = ostr.substr(1);
        out[0].v = "-" + out[0].v;
      }
    }
    jj = ostr.length - 1;
    var decpt = out.length;
    for (i = 0; i < out.length; ++i) if (out[i] != null && out[i].t != "t" && out[i].v.indexOf(".") > -1) {
      decpt = i;
      break;
    }
    var lasti = out.length;
    if (decpt === out.length && ostr.indexOf("E") === -1) {
      for (i = out.length - 1; i >= 0; --i) {
        if (out[i] == null || "n?".indexOf(out[i].t) === -1) continue;
        if (jj >= out[i].v.length - 1) {
          jj -= out[i].v.length;
          out[i].v = ostr.substr(jj + 1, out[i].v.length);
        } else if (jj < 0) out[i].v = "";
        else {
          out[i].v = ostr.substr(0, jj + 1);
          jj = -1;
        }
        out[i].t = "t";
        lasti = i;
      }
      if (jj >= 0 && lasti < out.length) out[lasti].v = ostr.substr(0, jj + 1) + out[lasti].v;
    } else if (decpt !== out.length && ostr.indexOf("E") === -1) {
      jj = ostr.indexOf(".") - 1;
      for (i = decpt; i >= 0; --i) {
        if (out[i] == null || "n?".indexOf(out[i].t) === -1) continue;
        j = out[i].v.indexOf(".") > -1 && i === decpt ? out[i].v.indexOf(".") - 1 : out[i].v.length - 1;
        vv = out[i].v.substr(j + 1);
        for (; j >= 0; --j) {
          if (jj >= 0 && (out[i].v.charAt(j) === "0" || out[i].v.charAt(j) === "#")) vv = ostr.charAt(jj--) + vv;
        }
        out[i].v = vv;
        out[i].t = "t";
        lasti = i;
      }
      if (jj >= 0 && lasti < out.length) out[lasti].v = ostr.substr(0, jj + 1) + out[lasti].v;
      jj = ostr.indexOf(".") + 1;
      for (i = decpt; i < out.length; ++i) {
        if (out[i] == null || "n?(".indexOf(out[i].t) === -1 && i !== decpt) continue;
        j = out[i].v.indexOf(".") > -1 && i === decpt ? out[i].v.indexOf(".") + 1 : 0;
        vv = out[i].v.substr(0, j);
        for (; j < out[i].v.length; ++j) {
          if (jj < ostr.length) vv += ostr.charAt(jj++);
        }
        out[i].v = vv;
        out[i].t = "t";
        lasti = i;
      }
    }
  }
  for (i = 0; i < out.length; ++i) if (out[i] != null && "n?".indexOf(out[i].t) > -1) {
    myv = flen > 1 && v < 0 && i > 0 && out[i - 1].v === "-" ? -v : v;
    out[i].v = write_num(out[i].t, out[i].v, myv);
    out[i].t = "t";
  }
  var retval = "";
  for (i = 0; i !== out.length; ++i) if (out[i] != null) retval += out[i].v;
  return retval;
}
var cfregex2 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function chkcond(v, rr) {
  if (rr == null) return false;
  var thresh = parseFloat(rr[2]);
  switch (rr[1]) {
    case "=":
      if (v == thresh) return true;
      break;
    case ">":
      if (v > thresh) return true;
      break;
    case "<":
      if (v < thresh) return true;
      break;
    case "<>":
      if (v != thresh) return true;
      break;
    case ">=":
      if (v >= thresh) return true;
      break;
    case "<=":
      if (v <= thresh) return true;
      break;
  }
  return false;
}
function choose_fmt(f, v) {
  var fmt = SSF_split_fmt(f);
  var l = fmt.length, lat = fmt[l - 1].indexOf("@");
  if (l < 4 && lat > -1) --l;
  if (fmt.length > 4) throw new Error("cannot find right format for |" + fmt.join("|") + "|");
  if (typeof v !== "number") return [4, fmt.length === 4 || lat > -1 ? fmt[fmt.length - 1] : "@"];
  switch (fmt.length) {
    case 1:
      fmt = lat > -1 ? ["General", "General", "General", fmt[0]] : [fmt[0], fmt[0], fmt[0], "@"];
      break;
    case 2:
      fmt = lat > -1 ? [fmt[0], fmt[0], fmt[0], fmt[1]] : [fmt[0], fmt[1], fmt[0], "@"];
      break;
    case 3:
      fmt = lat > -1 ? [fmt[0], fmt[1], fmt[0], fmt[2]] : [fmt[0], fmt[1], fmt[2], "@"];
      break;
    case 4:
      break;
  }
  var ff = v > 0 ? fmt[0] : v < 0 ? fmt[1] : fmt[2];
  if (fmt[0].indexOf("[") === -1 && fmt[1].indexOf("[") === -1) return [l, ff];
  if (fmt[0].match(/\[[=<>]/) != null || fmt[1].match(/\[[=<>]/) != null) {
    var m1 = fmt[0].match(cfregex2);
    var m2 = fmt[1].match(cfregex2);
    return chkcond(v, m1) ? [l, fmt[0]] : chkcond(v, m2) ? [l, fmt[1]] : [l, fmt[m1 != null && m2 != null ? 2 : 1]];
  }
  return [l, ff];
}
function SSF_format(fmt, v, o) {
  if (o == null) o = {};
  var sfmt = "";
  switch (typeof fmt) {
    case "string":
      if (fmt == "m/d/yy" && o.dateNF) sfmt = o.dateNF;
      else sfmt = fmt;
      break;
    case "number":
      if (fmt == 14 && o.dateNF) sfmt = o.dateNF;
      else sfmt = (o.table != null ? o.table : table_fmt)[fmt];
      if (sfmt == null) sfmt = o.table && o.table[SSF_default_map[fmt]] || table_fmt[SSF_default_map[fmt]];
      if (sfmt == null) sfmt = SSF_default_str[fmt] || "General";
      break;
  }
  if (SSF_isgeneral(sfmt, 0)) return SSF_general(v, o);
  if (v instanceof Date) v = datenum_local(v, o.date1904);
  var f = choose_fmt(sfmt, v);
  if (SSF_isgeneral(f[1])) return SSF_general(v, o);
  if (v === true) v = "TRUE";
  else if (v === false) v = "FALSE";
  else if (v === "" || v == null) return "";
  return eval_fmt(f[1], v, o, f[0]);
}
function SSF_load(fmt, idx) {
  if (typeof idx != "number") {
    idx = +idx || -1;
    for (var i = 0; i < 392; ++i) {
      if (table_fmt[i] == void 0) {
        if (idx < 0) idx = i;
        continue;
      }
      if (table_fmt[i] == fmt) {
        idx = i;
        break;
      }
    }
    if (idx < 0) idx = 391;
  }
  table_fmt[idx] = fmt;
  return idx;
}
function SSF_load_table(tbl) {
  for (var i = 0; i != 392; ++i)
    if (tbl[i] !== void 0) SSF_load(tbl[i], i);
}
function make_ssf() {
  table_fmt = SSF_init_table();
}
var dateNFregex = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function dateNF_regex(dateNF) {
  var fmt = typeof dateNF == "number" ? table_fmt[dateNF] : dateNF;
  fmt = fmt.replace(dateNFregex, "(\\d+)");
  return new RegExp("^" + fmt + "$");
}
function dateNF_fix(str, dateNF, match) {
  var Y = -1, m = -1, d = -1, H = -1, M = -1, S = -1;
  (dateNF.match(dateNFregex) || []).forEach(function(n, i) {
    var v = parseInt(match[i + 1], 10);
    switch (n.toLowerCase().charAt(0)) {
      case "y":
        Y = v;
        break;
      case "d":
        d = v;
        break;
      case "h":
        H = v;
        break;
      case "s":
        S = v;
        break;
      case "m":
        if (H >= 0) M = v;
        else m = v;
        break;
    }
  });
  if (S >= 0 && M == -1 && m >= 0) {
    M = m;
    m = -1;
  }
  var datestr = ("" + (Y >= 0 ? Y : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (m >= 1 ? m : 1)).slice(-2) + "-" + ("00" + (d >= 1 ? d : 1)).slice(-2);
  if (datestr.length == 7) datestr = "0" + datestr;
  if (datestr.length == 8) datestr = "20" + datestr;
  var timestr = ("00" + (H >= 0 ? H : 0)).slice(-2) + ":" + ("00" + (M >= 0 ? M : 0)).slice(-2) + ":" + ("00" + (S >= 0 ? S : 0)).slice(-2);
  if (H == -1 && M == -1 && S == -1) return datestr;
  if (Y == -1 && m == -1 && d == -1) return timestr;
  return datestr + "T" + timestr;
}
var CRC32 = /* @__PURE__ */ (function() {
  var CRC322 = {};
  CRC322.version = "1.2.0";
  function signed_crc_table() {
    var c = 0, table = new Array(256);
    for (var n = 0; n != 256; ++n) {
      c = n;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      table[n] = c;
    }
    return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
  }
  var T0 = signed_crc_table();
  function slice_by_16_tables(T) {
    var c = 0, v = 0, n = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
    for (n = 0; n != 256; ++n) table[n] = T[n];
    for (n = 0; n != 256; ++n) {
      v = T[n];
      for (c = 256 + n; c < 4096; c += 256) v = table[c] = v >>> 8 ^ T[v & 255];
    }
    var out = [];
    for (n = 1; n != 16; ++n) out[n - 1] = typeof Int32Array !== "undefined" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
    return out;
  }
  var TT = slice_by_16_tables(T0);
  var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
  var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
  var Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
  function crc32_bstr(bstr, seed) {
    var C = seed ^ -1;
    for (var i = 0, L = bstr.length; i < L; ) C = C >>> 8 ^ T0[(C ^ bstr.charCodeAt(i++)) & 255];
    return ~C;
  }
  function crc32_buf(B, seed) {
    var C = seed ^ -1, L = B.length - 15, i = 0;
    for (; i < L; ) C = Tf[B[i++] ^ C & 255] ^ Te[B[i++] ^ C >> 8 & 255] ^ Td[B[i++] ^ C >> 16 & 255] ^ Tc[B[i++] ^ C >>> 24] ^ Tb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^ T7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^ T3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];
    L += 15;
    while (i < L) C = C >>> 8 ^ T0[(C ^ B[i++]) & 255];
    return ~C;
  }
  function crc32_str(str, seed) {
    var C = seed ^ -1;
    for (var i = 0, L = str.length, c = 0, d = 0; i < L; ) {
      c = str.charCodeAt(i++);
      if (c < 128) {
        C = C >>> 8 ^ T0[(C ^ c) & 255];
      } else if (c < 2048) {
        C = C >>> 8 ^ T0[(C ^ (192 | c >> 6 & 31)) & 255];
        C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
      } else if (c >= 55296 && c < 57344) {
        c = (c & 1023) + 64;
        d = str.charCodeAt(i++) & 1023;
        C = C >>> 8 ^ T0[(C ^ (240 | c >> 8 & 7)) & 255];
        C = C >>> 8 ^ T0[(C ^ (128 | c >> 2 & 63)) & 255];
        C = C >>> 8 ^ T0[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
        C = C >>> 8 ^ T0[(C ^ (128 | d & 63)) & 255];
      } else {
        C = C >>> 8 ^ T0[(C ^ (224 | c >> 12 & 15)) & 255];
        C = C >>> 8 ^ T0[(C ^ (128 | c >> 6 & 63)) & 255];
        C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
      }
    }
    return ~C;
  }
  CRC322.table = T0;
  CRC322.bstr = crc32_bstr;
  CRC322.buf = crc32_buf;
  CRC322.str = crc32_str;
  return CRC322;
})();
var CFB = /* @__PURE__ */ (function _CFB() {
  var exports = {};
  exports.version = "1.2.1";
  function namecmp(l, r) {
    var L = l.split("/"), R = r.split("/");
    for (var i2 = 0, c = 0, Z = Math.min(L.length, R.length); i2 < Z; ++i2) {
      if (c = L[i2].length - R[i2].length) return c;
      if (L[i2] != R[i2]) return L[i2] < R[i2] ? -1 : 1;
    }
    return L.length - R.length;
  }
  function dirname(p) {
    if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : dirname(p.slice(0, -1));
    var c = p.lastIndexOf("/");
    return c === -1 ? p : p.slice(0, c + 1);
  }
  function filename(p) {
    if (p.charAt(p.length - 1) == "/") return filename(p.slice(0, -1));
    var c = p.lastIndexOf("/");
    return c === -1 ? p : p.slice(c + 1);
  }
  function write_dos_date(buf, date) {
    if (typeof date === "string") date = new Date(date);
    var hms = date.getHours();
    hms = hms << 6 | date.getMinutes();
    hms = hms << 5 | date.getSeconds() >>> 1;
    buf.write_shift(2, hms);
    var ymd = date.getFullYear() - 1980;
    ymd = ymd << 4 | date.getMonth() + 1;
    ymd = ymd << 5 | date.getDate();
    buf.write_shift(2, ymd);
  }
  function parse_dos_date(buf) {
    var hms = buf.read_shift(2) & 65535;
    var ymd = buf.read_shift(2) & 65535;
    var val = /* @__PURE__ */ new Date();
    var d = ymd & 31;
    ymd >>>= 5;
    var m = ymd & 15;
    ymd >>>= 4;
    val.setMilliseconds(0);
    val.setFullYear(ymd + 1980);
    val.setMonth(m - 1);
    val.setDate(d);
    var S = hms & 31;
    hms >>>= 5;
    var M = hms & 63;
    hms >>>= 6;
    val.setHours(hms);
    val.setMinutes(M);
    val.setSeconds(S << 1);
    return val;
  }
  function parse_extra_field(blob) {
    prep_blob(blob, 0);
    var o = (
      /*::(*/
      {}
    );
    var flags = 0;
    while (blob.l <= blob.length - 4) {
      var type = blob.read_shift(2);
      var sz = blob.read_shift(2), tgt = blob.l + sz;
      var p = {};
      switch (type) {
        /* UNIX-style Timestamps */
        case 21589:
          {
            flags = blob.read_shift(1);
            if (flags & 1) p.mtime = blob.read_shift(4);
            if (sz > 5) {
              if (flags & 2) p.atime = blob.read_shift(4);
              if (flags & 4) p.ctime = blob.read_shift(4);
            }
            if (p.mtime) p.mt = new Date(p.mtime * 1e3);
          }
          break;
      }
      blob.l = tgt;
      o[type] = p;
    }
    return o;
  }
  var fs;
  function get_fs() {
    return fs || (fs = {});
  }
  function parse2(file, options) {
    if (file[0] == 80 && file[1] == 75) return parse_zip(file, options);
    if ((file[0] | 32) == 109 && (file[1] | 32) == 105) return parse_mad(file, options);
    if (file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
    var mver = 3;
    var ssz = 512;
    var nmfs = 0;
    var difat_sec_cnt = 0;
    var dir_start = 0;
    var minifat_start = 0;
    var difat_start = 0;
    var fat_addrs = [];
    var blob = (
      /*::(*/
      file.slice(0, 512)
    );
    prep_blob(blob, 0);
    var mv = check_get_mver(blob);
    mver = mv[0];
    switch (mver) {
      case 3:
        ssz = 512;
        break;
      case 4:
        ssz = 4096;
        break;
      case 0:
        if (mv[1] == 0) return parse_zip(file, options);
      /* falls through */
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + mver);
    }
    if (ssz !== 512) {
      blob = /*::(*/
      file.slice(0, ssz);
      prep_blob(
        blob,
        28
        /* blob.l */
      );
    }
    var header = file.slice(0, ssz);
    check_shifts(blob, mver);
    var dir_cnt = blob.read_shift(4, "i");
    if (mver === 3 && dir_cnt !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + dir_cnt);
    blob.l += 4;
    dir_start = blob.read_shift(4, "i");
    blob.l += 4;
    blob.chk("00100000", "Mini Stream Cutoff Size: ");
    minifat_start = blob.read_shift(4, "i");
    nmfs = blob.read_shift(4, "i");
    difat_start = blob.read_shift(4, "i");
    difat_sec_cnt = blob.read_shift(4, "i");
    for (var q2 = -1, j = 0; j < 109; ++j) {
      q2 = blob.read_shift(4, "i");
      if (q2 < 0) break;
      fat_addrs[j] = q2;
    }
    var sectors = sectorify(file, ssz);
    sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);
    var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);
    sector_list[dir_start].name = "!Directory";
    if (nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
    sector_list[fat_addrs[0]].name = "!FAT";
    sector_list.fat_addrs = fat_addrs;
    sector_list.ssz = ssz;
    var files = {}, Paths = [], FileIndex = [], FullPaths = [];
    read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start);
    build_full_paths(FileIndex, FullPaths, Paths);
    Paths.shift();
    var o = {
      FileIndex,
      FullPaths
    };
    if (options && options.raw) o.raw = { header, sectors };
    return o;
  }
  function check_get_mver(blob) {
    if (blob[blob.l] == 80 && blob[blob.l + 1] == 75) return [0, 0];
    blob.chk(HEADER_SIGNATURE, "Header Signature: ");
    blob.l += 16;
    var mver = blob.read_shift(2, "u");
    return [blob.read_shift(2, "u"), mver];
  }
  function check_shifts(blob, mver) {
    var shift = 9;
    blob.l += 2;
    switch (shift = blob.read_shift(2)) {
      case 9:
        if (mver != 3) throw new Error("Sector Shift: Expected 9 saw " + shift);
        break;
      case 12:
        if (mver != 4) throw new Error("Sector Shift: Expected 12 saw " + shift);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + shift);
    }
    blob.chk("0600", "Mini Sector Shift: ");
    blob.chk("000000000000", "Reserved: ");
  }
  function sectorify(file, ssz) {
    var nsectors = Math.ceil(file.length / ssz) - 1;
    var sectors = [];
    for (var i2 = 1; i2 < nsectors; ++i2) sectors[i2 - 1] = file.slice(i2 * ssz, (i2 + 1) * ssz);
    sectors[nsectors - 1] = file.slice(nsectors * ssz);
    return sectors;
  }
  function build_full_paths(FI, FP, Paths) {
    var i2 = 0, L = 0, R = 0, C = 0, j = 0, pl = Paths.length;
    var dad = [], q2 = [];
    for (; i2 < pl; ++i2) {
      dad[i2] = q2[i2] = i2;
      FP[i2] = Paths[i2];
    }
    for (; j < q2.length; ++j) {
      i2 = q2[j];
      L = FI[i2].L;
      R = FI[i2].R;
      C = FI[i2].C;
      if (dad[i2] === i2) {
        if (L !== -1 && dad[L] !== L) dad[i2] = dad[L];
        if (R !== -1 && dad[R] !== R) dad[i2] = dad[R];
      }
      if (C !== -1) dad[C] = i2;
      if (L !== -1 && i2 != dad[i2]) {
        dad[L] = dad[i2];
        if (q2.lastIndexOf(L) < j) q2.push(L);
      }
      if (R !== -1 && i2 != dad[i2]) {
        dad[R] = dad[i2];
        if (q2.lastIndexOf(R) < j) q2.push(R);
      }
    }
    for (i2 = 1; i2 < pl; ++i2) if (dad[i2] === i2) {
      if (R !== -1 && dad[R] !== R) dad[i2] = dad[R];
      else if (L !== -1 && dad[L] !== L) dad[i2] = dad[L];
    }
    for (i2 = 1; i2 < pl; ++i2) {
      if (FI[i2].type === 0) continue;
      j = i2;
      if (j != dad[j]) do {
        j = dad[j];
        FP[i2] = FP[j] + "/" + FP[i2];
      } while (j !== 0 && -1 !== dad[j] && j != dad[j]);
      dad[i2] = -1;
    }
    FP[0] += "/";
    for (i2 = 1; i2 < pl; ++i2) {
      if (FI[i2].type !== 2) FP[i2] += "/";
    }
  }
  function get_mfat_entry(entry, payload, mini) {
    var start = entry.start, size = entry.size;
    var o = [];
    var idx = start;
    while (mini && size > 0 && idx >= 0) {
      o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ));
      size -= MSSZ;
      idx = __readInt32LE(mini, idx * 4);
    }
    if (o.length === 0) return new_buf(0);
    return bconcat(o).slice(0, entry.size);
  }
  function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
    var q2 = ENDOFCHAIN;
    if (idx === ENDOFCHAIN) {
      if (cnt !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (idx !== -1) {
      var sector = sectors[idx], m = (ssz >>> 2) - 1;
      if (!sector) return;
      for (var i2 = 0; i2 < m; ++i2) {
        if ((q2 = __readInt32LE(sector, i2 * 4)) === ENDOFCHAIN) break;
        fat_addrs.push(q2);
      }
      sleuth_fat(__readInt32LE(sector, ssz - 4), cnt - 1, sectors, ssz, fat_addrs);
    }
  }
  function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
    var buf = [], buf_chain = [];
    if (!chkd) chkd = [];
    var modulus = ssz - 1, j = 0, jj = 0;
    for (j = start; j >= 0; ) {
      chkd[j] = true;
      buf[buf.length] = j;
      buf_chain.push(sectors[j]);
      var addr = fat_addrs[Math.floor(j * 4 / ssz)];
      jj = j * 4 & modulus;
      if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
      if (!sectors[addr]) break;
      j = __readInt32LE(sectors[addr], jj);
    }
    return { nodes: buf, data: __toBuffer([buf_chain]) };
  }
  function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
    var sl = sectors.length, sector_list = [];
    var chkd = [], buf = [], buf_chain = [];
    var modulus = ssz - 1, i2 = 0, j = 0, k = 0, jj = 0;
    for (i2 = 0; i2 < sl; ++i2) {
      buf = [];
      k = i2 + dir_start;
      if (k >= sl) k -= sl;
      if (chkd[k]) continue;
      buf_chain = [];
      var seen = [];
      for (j = k; j >= 0; ) {
        seen[j] = true;
        chkd[j] = true;
        buf[buf.length] = j;
        buf_chain.push(sectors[j]);
        var addr = fat_addrs[Math.floor(j * 4 / ssz)];
        jj = j * 4 & modulus;
        if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
        if (!sectors[addr]) break;
        j = __readInt32LE(sectors[addr], jj);
        if (seen[j]) break;
      }
      sector_list[k] = { nodes: buf, data: __toBuffer([buf_chain]) };
    }
    return sector_list;
  }
  function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
    var minifat_store = 0, pl = Paths.length ? 2 : 0;
    var sector = sector_list[dir_start].data;
    var i2 = 0, namelen = 0, name;
    for (; i2 < sector.length; i2 += 128) {
      var blob = (
        /*::(*/
        sector.slice(i2, i2 + 128)
      );
      prep_blob(blob, 64);
      namelen = blob.read_shift(2);
      name = __utf16le(blob, 0, namelen - pl);
      Paths.push(name);
      var o = {
        name,
        type: blob.read_shift(1),
        color: blob.read_shift(1),
        L: blob.read_shift(4, "i"),
        R: blob.read_shift(4, "i"),
        C: blob.read_shift(4, "i"),
        clsid: blob.read_shift(16),
        state: blob.read_shift(4, "i"),
        start: 0,
        size: 0
      };
      var ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
      if (ctime !== 0) o.ct = read_date(blob, blob.l - 8);
      var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
      if (mtime !== 0) o.mt = read_date(blob, blob.l - 8);
      o.start = blob.read_shift(4, "i");
      o.size = blob.read_shift(4, "i");
      if (o.size < 0 && o.start < 0) {
        o.size = o.type = 0;
        o.start = ENDOFCHAIN;
        o.name = "";
      }
      if (o.type === 5) {
        minifat_store = o.start;
        if (nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
      } else if (o.size >= 4096) {
        o.storage = "fat";
        if (sector_list[o.start] === void 0) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
        sector_list[o.start].name = o.name;
        o.content = sector_list[o.start].data.slice(0, o.size);
      } else {
        o.storage = "minifat";
        if (o.size < 0) o.size = 0;
        else if (minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store]) {
          o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini] || {}).data);
        }
      }
      if (o.content) prep_blob(o.content, 0);
      files[name] = o;
      FileIndex.push(o);
    }
  }
  function read_date(blob, offset) {
    return new Date((__readUInt32LE(blob, offset + 4) / 1e7 * Math.pow(2, 32) + __readUInt32LE(blob, offset) / 1e7 - 11644473600) * 1e3);
  }
  function read_file(filename2, options) {
    get_fs();
    return parse2(fs.readFileSync(filename2), options);
  }
  function read(blob, options) {
    var type = options && options.type;
    if (!type) {
      if (has_buf && Buffer.isBuffer(blob)) type = "buffer";
    }
    switch (type || "base64") {
      case "file":
        return read_file(blob, options);
      case "base64":
        return parse2(s2a(Base64_decode(blob)), options);
      case "binary":
        return parse2(s2a(blob), options);
    }
    return parse2(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      blob,
      options
    );
  }
  function init_cfb(cfb, opts) {
    var o = opts || {}, root = o.root || "Root Entry";
    if (!cfb.FullPaths) cfb.FullPaths = [];
    if (!cfb.FileIndex) cfb.FileIndex = [];
    if (cfb.FullPaths.length !== cfb.FileIndex.length) throw new Error("inconsistent CFB structure");
    if (cfb.FullPaths.length === 0) {
      cfb.FullPaths[0] = root + "/";
      cfb.FileIndex[0] = { name: root, type: 5 };
    }
    if (o.CLSID) cfb.FileIndex[0].clsid = o.CLSID;
    seed_cfb(cfb);
  }
  function seed_cfb(cfb) {
    var nm = "Sh33tJ5";
    if (CFB.find(cfb, "/" + nm)) return;
    var p = new_buf(4);
    p[0] = 55;
    p[1] = p[3] = 50;
    p[2] = 54;
    cfb.FileIndex.push({ name: nm, type: 2, content: p, size: 4, L: 69, R: 69, C: 69 });
    cfb.FullPaths.push(cfb.FullPaths[0] + nm);
    rebuild_cfb(cfb);
  }
  function rebuild_cfb(cfb, f) {
    init_cfb(cfb);
    var gc = false, s = false;
    for (var i2 = cfb.FullPaths.length - 1; i2 >= 0; --i2) {
      var _file = cfb.FileIndex[i2];
      switch (_file.type) {
        case 0:
          if (s) gc = true;
          else {
            cfb.FileIndex.pop();
            cfb.FullPaths.pop();
          }
          break;
        case 1:
        case 2:
        case 5:
          s = true;
          if (isNaN(_file.R * _file.L * _file.C)) gc = true;
          if (_file.R > -1 && _file.L > -1 && _file.R == _file.L) gc = true;
          break;
        default:
          gc = true;
          break;
      }
    }
    if (!gc && !f) return;
    var now = new Date(1987, 1, 19), j = 0;
    var fullPaths = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    var data2 = [];
    for (i2 = 0; i2 < cfb.FullPaths.length; ++i2) {
      fullPaths[cfb.FullPaths[i2]] = true;
      if (cfb.FileIndex[i2].type === 0) continue;
      data2.push([cfb.FullPaths[i2], cfb.FileIndex[i2]]);
    }
    for (i2 = 0; i2 < data2.length; ++i2) {
      var dad = dirname(data2[i2][0]);
      s = fullPaths[dad];
      if (!s) {
        data2.push([dad, {
          name: filename(dad).replace("/", ""),
          type: 1,
          clsid: HEADER_CLSID,
          ct: now,
          mt: now,
          content: null
        }]);
        fullPaths[dad] = true;
      }
    }
    data2.sort(function(x, y) {
      return namecmp(x[0], y[0]);
    });
    cfb.FullPaths = [];
    cfb.FileIndex = [];
    for (i2 = 0; i2 < data2.length; ++i2) {
      cfb.FullPaths[i2] = data2[i2][0];
      cfb.FileIndex[i2] = data2[i2][1];
    }
    for (i2 = 0; i2 < data2.length; ++i2) {
      var elt = cfb.FileIndex[i2];
      var nm = cfb.FullPaths[i2];
      elt.name = filename(nm).replace("/", "");
      elt.L = elt.R = elt.C = -(elt.color = 1);
      elt.size = elt.content ? elt.content.length : 0;
      elt.start = 0;
      elt.clsid = elt.clsid || HEADER_CLSID;
      if (i2 === 0) {
        elt.C = data2.length > 1 ? 1 : -1;
        elt.size = 0;
        elt.type = 5;
      } else if (nm.slice(-1) == "/") {
        for (j = i2 + 1; j < data2.length; ++j) if (dirname(cfb.FullPaths[j]) == nm) break;
        elt.C = j >= data2.length ? -1 : j;
        for (j = i2 + 1; j < data2.length; ++j) if (dirname(cfb.FullPaths[j]) == dirname(nm)) break;
        elt.R = j >= data2.length ? -1 : j;
        elt.type = 1;
      } else {
        if (dirname(cfb.FullPaths[i2 + 1] || "") == dirname(nm)) elt.R = i2 + 1;
        elt.type = 2;
      }
    }
  }
  function _write(cfb, options) {
    var _opts = options || {};
    if (_opts.fileType == "mad") return write_mad(cfb, _opts);
    rebuild_cfb(cfb);
    switch (_opts.fileType) {
      case "zip":
        return write_zip2(cfb, _opts);
    }
    var L = (function(cfb2) {
      var mini_size = 0, fat_size = 0;
      for (var i3 = 0; i3 < cfb2.FileIndex.length; ++i3) {
        var file2 = cfb2.FileIndex[i3];
        if (!file2.content) continue;
        var flen2 = file2.content.length;
        if (flen2 > 0) {
          if (flen2 < 4096) mini_size += flen2 + 63 >> 6;
          else fat_size += flen2 + 511 >> 9;
        }
      }
      var dir_cnt = cfb2.FullPaths.length + 3 >> 2;
      var mini_cnt = mini_size + 7 >> 3;
      var mfat_cnt = mini_size + 127 >> 7;
      var fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt;
      var fat_cnt = fat_base + 127 >> 7;
      var difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
      while (fat_base + fat_cnt + difat_cnt + 127 >> 7 > fat_cnt) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
      var L2 = [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
      cfb2.FileIndex[0].size = mini_size << 6;
      L2[7] = (cfb2.FileIndex[0].start = L2[0] + L2[1] + L2[2] + L2[3] + L2[4] + L2[5]) + (L2[6] + 7 >> 3);
      return L2;
    })(cfb);
    var o = new_buf(L[7] << 9);
    var i2 = 0, T = 0;
    {
      for (i2 = 0; i2 < 8; ++i2) o.write_shift(1, HEADER_SIG[i2]);
      for (i2 = 0; i2 < 8; ++i2) o.write_shift(2, 0);
      o.write_shift(2, 62);
      o.write_shift(2, 3);
      o.write_shift(2, 65534);
      o.write_shift(2, 9);
      o.write_shift(2, 6);
      for (i2 = 0; i2 < 3; ++i2) o.write_shift(2, 0);
      o.write_shift(4, 0);
      o.write_shift(4, L[2]);
      o.write_shift(4, L[0] + L[1] + L[2] + L[3] - 1);
      o.write_shift(4, 0);
      o.write_shift(4, 1 << 12);
      o.write_shift(4, L[3] ? L[0] + L[1] + L[2] - 1 : ENDOFCHAIN);
      o.write_shift(4, L[3]);
      o.write_shift(-4, L[1] ? L[0] - 1 : ENDOFCHAIN);
      o.write_shift(4, L[1]);
      for (i2 = 0; i2 < 109; ++i2) o.write_shift(-4, i2 < L[2] ? L[1] + i2 : -1);
    }
    if (L[1]) {
      for (T = 0; T < L[1]; ++T) {
        for (; i2 < 236 + T * 127; ++i2) o.write_shift(-4, i2 < L[2] ? L[1] + i2 : -1);
        o.write_shift(-4, T === L[1] - 1 ? ENDOFCHAIN : T + 1);
      }
    }
    var chainit = function(w) {
      for (T += w; i2 < T - 1; ++i2) o.write_shift(-4, i2 + 1);
      if (w) {
        ++i2;
        o.write_shift(-4, ENDOFCHAIN);
      }
    };
    T = i2 = 0;
    for (T += L[1]; i2 < T; ++i2) o.write_shift(-4, consts.DIFSECT);
    for (T += L[2]; i2 < T; ++i2) o.write_shift(-4, consts.FATSECT);
    chainit(L[3]);
    chainit(L[4]);
    var j = 0, flen = 0;
    var file = cfb.FileIndex[0];
    for (; j < cfb.FileIndex.length; ++j) {
      file = cfb.FileIndex[j];
      if (!file.content) continue;
      flen = file.content.length;
      if (flen < 4096) continue;
      file.start = T;
      chainit(flen + 511 >> 9);
    }
    chainit(L[6] + 7 >> 3);
    while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
    T = i2 = 0;
    for (j = 0; j < cfb.FileIndex.length; ++j) {
      file = cfb.FileIndex[j];
      if (!file.content) continue;
      flen = file.content.length;
      if (!flen || flen >= 4096) continue;
      file.start = T;
      chainit(flen + 63 >> 6);
    }
    while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
    for (i2 = 0; i2 < L[4] << 2; ++i2) {
      var nm = cfb.FullPaths[i2];
      if (!nm || nm.length === 0) {
        for (j = 0; j < 17; ++j) o.write_shift(4, 0);
        for (j = 0; j < 3; ++j) o.write_shift(4, -1);
        for (j = 0; j < 12; ++j) o.write_shift(4, 0);
        continue;
      }
      file = cfb.FileIndex[i2];
      if (i2 === 0) file.start = file.size ? file.start - 1 : ENDOFCHAIN;
      var _nm = i2 === 0 && _opts.root || file.name;
      flen = 2 * (_nm.length + 1);
      o.write_shift(64, _nm, "utf16le");
      o.write_shift(2, flen);
      o.write_shift(1, file.type);
      o.write_shift(1, file.color);
      o.write_shift(-4, file.L);
      o.write_shift(-4, file.R);
      o.write_shift(-4, file.C);
      if (!file.clsid) for (j = 0; j < 4; ++j) o.write_shift(4, 0);
      else o.write_shift(16, file.clsid, "hex");
      o.write_shift(4, file.state || 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, file.start);
      o.write_shift(4, file.size);
      o.write_shift(4, 0);
    }
    for (i2 = 1; i2 < cfb.FileIndex.length; ++i2) {
      file = cfb.FileIndex[i2];
      if (file.size >= 4096) {
        o.l = file.start + 1 << 9;
        if (has_buf && Buffer.isBuffer(file.content)) {
          file.content.copy(o, o.l, 0, file.size);
          o.l += file.size + 511 & -512;
        } else {
          for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
          for (; j & 511; ++j) o.write_shift(1, 0);
        }
      }
    }
    for (i2 = 1; i2 < cfb.FileIndex.length; ++i2) {
      file = cfb.FileIndex[i2];
      if (file.size > 0 && file.size < 4096) {
        if (has_buf && Buffer.isBuffer(file.content)) {
          file.content.copy(o, o.l, 0, file.size);
          o.l += file.size + 63 & -64;
        } else {
          for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
          for (; j & 63; ++j) o.write_shift(1, 0);
        }
      }
    }
    if (has_buf) {
      o.l = o.length;
    } else {
      while (o.l < o.length) o.write_shift(1, 0);
    }
    return o;
  }
  function find(cfb, path) {
    var UCFullPaths = cfb.FullPaths.map(function(x) {
      return x.toUpperCase();
    });
    var UCPaths = UCFullPaths.map(function(x) {
      var y = x.split("/");
      return y[y.length - (x.slice(-1) == "/" ? 2 : 1)];
    });
    var k = false;
    if (path.charCodeAt(0) === 47) {
      k = true;
      path = UCFullPaths[0].slice(0, -1) + path;
    } else k = path.indexOf("/") !== -1;
    var UCPath = path.toUpperCase();
    var w = k === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
    if (w !== -1) return cfb.FileIndex[w];
    var m = !UCPath.match(chr1);
    UCPath = UCPath.replace(chr0, "");
    if (m) UCPath = UCPath.replace(chr1, "!");
    for (w = 0; w < UCFullPaths.length; ++w) {
      if ((m ? UCFullPaths[w].replace(chr1, "!") : UCFullPaths[w]).replace(chr0, "") == UCPath) return cfb.FileIndex[w];
      if ((m ? UCPaths[w].replace(chr1, "!") : UCPaths[w]).replace(chr0, "") == UCPath) return cfb.FileIndex[w];
    }
    return null;
  }
  var MSSZ = 64;
  var ENDOFCHAIN = -2;
  var HEADER_SIGNATURE = "d0cf11e0a1b11ae1";
  var HEADER_SIG = [208, 207, 17, 224, 161, 177, 26, 225];
  var HEADER_CLSID = "00000000000000000000000000000000";
  var consts = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function write_file(cfb, filename2, options) {
    get_fs();
    var o = _write(cfb, options);
    fs.writeFileSync(filename2, o);
  }
  function a2s2(o) {
    var out = new Array(o.length);
    for (var i2 = 0; i2 < o.length; ++i2) out[i2] = String.fromCharCode(o[i2]);
    return out.join("");
  }
  function write(cfb, options) {
    var o = _write(cfb, options);
    switch (options && options.type || "buffer") {
      case "file":
        get_fs();
        fs.writeFileSync(options.filename, o);
        return o;
      case "binary":
        return typeof o == "string" ? o : a2s2(o);
      case "base64":
        return Base64_encode(typeof o == "string" ? o : a2s2(o));
      case "buffer":
        if (has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);
      /* falls through */
      case "array":
        return typeof o == "string" ? s2a(o) : o;
    }
    return o;
  }
  var _zlib;
  function use_zlib(zlib) {
    try {
      var InflateRaw = zlib.InflateRaw;
      var InflRaw = new InflateRaw();
      InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag);
      if (InflRaw.bytesRead) _zlib = zlib;
      else throw new Error("zlib does not expose bytesRead");
    } catch (e) {
      console.error("cannot use native zlib: " + (e.message || e));
    }
  }
  function _inflateRawSync(payload, usz) {
    if (!_zlib) return _inflate(payload, usz);
    var InflateRaw = _zlib.InflateRaw;
    var InflRaw = new InflateRaw();
    var out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);
    payload.l += InflRaw.bytesRead;
    return out;
  }
  function _deflateRawSync(payload) {
    return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
  }
  var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var LEN_LN = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  var DST_LN = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function bit_swap_8(n) {
    var t = (n << 1 | n << 11) & 139536 | (n << 5 | n << 15) & 558144;
    return (t >> 16 | t >> 8 | t) & 255;
  }
  var use_typed_arrays = typeof Uint8Array !== "undefined";
  var bitswap8 = use_typed_arrays ? new Uint8Array(1 << 8) : [];
  for (var q = 0; q < 1 << 8; ++q) bitswap8[q] = bit_swap_8(q);
  function bit_swap_n(n, b) {
    var rev = bitswap8[n & 255];
    if (b <= 8) return rev >>> 8 - b;
    rev = rev << 8 | bitswap8[n >> 8 & 255];
    if (b <= 16) return rev >>> 16 - b;
    rev = rev << 8 | bitswap8[n >> 16 & 255];
    return rev >>> 24 - b;
  }
  function read_bits_2(buf, bl) {
    var w = bl & 7, h = bl >>> 3;
    return (buf[h] | (w <= 6 ? 0 : buf[h + 1] << 8)) >>> w & 3;
  }
  function read_bits_3(buf, bl) {
    var w = bl & 7, h = bl >>> 3;
    return (buf[h] | (w <= 5 ? 0 : buf[h + 1] << 8)) >>> w & 7;
  }
  function read_bits_4(buf, bl) {
    var w = bl & 7, h = bl >>> 3;
    return (buf[h] | (w <= 4 ? 0 : buf[h + 1] << 8)) >>> w & 15;
  }
  function read_bits_5(buf, bl) {
    var w = bl & 7, h = bl >>> 3;
    return (buf[h] | (w <= 3 ? 0 : buf[h + 1] << 8)) >>> w & 31;
  }
  function read_bits_7(buf, bl) {
    var w = bl & 7, h = bl >>> 3;
    return (buf[h] | (w <= 1 ? 0 : buf[h + 1] << 8)) >>> w & 127;
  }
  function read_bits_n(buf, bl, n) {
    var w = bl & 7, h = bl >>> 3, f = (1 << n) - 1;
    var v = buf[h] >>> w;
    if (n < 8 - w) return v & f;
    v |= buf[h + 1] << 8 - w;
    if (n < 16 - w) return v & f;
    v |= buf[h + 2] << 16 - w;
    if (n < 24 - w) return v & f;
    v |= buf[h + 3] << 24 - w;
    return v & f;
  }
  function write_bits_3(buf, bl, v) {
    var w = bl & 7, h = bl >>> 3;
    if (w <= 5) buf[h] |= (v & 7) << w;
    else {
      buf[h] |= v << w & 255;
      buf[h + 1] = (v & 7) >> 8 - w;
    }
    return bl + 3;
  }
  function write_bits_1(buf, bl, v) {
    var w = bl & 7, h = bl >>> 3;
    v = (v & 1) << w;
    buf[h] |= v;
    return bl + 1;
  }
  function write_bits_8(buf, bl, v) {
    var w = bl & 7, h = bl >>> 3;
    v <<= w;
    buf[h] |= v & 255;
    v >>>= 8;
    buf[h + 1] = v;
    return bl + 8;
  }
  function write_bits_16(buf, bl, v) {
    var w = bl & 7, h = bl >>> 3;
    v <<= w;
    buf[h] |= v & 255;
    v >>>= 8;
    buf[h + 1] = v & 255;
    buf[h + 2] = v >>> 8;
    return bl + 16;
  }
  function realloc(b, sz) {
    var L = b.length, M = 2 * L > sz ? 2 * L : sz + 5, i2 = 0;
    if (L >= sz) return b;
    if (has_buf) {
      var o = new_unsafe_buf(M);
      if (b.copy) b.copy(o);
      else for (; i2 < b.length; ++i2) o[i2] = b[i2];
      return o;
    } else if (use_typed_arrays) {
      var a = new Uint8Array(M);
      if (a.set) a.set(b);
      else for (; i2 < L; ++i2) a[i2] = b[i2];
      return a;
    }
    b.length = M;
    return b;
  }
  function zero_fill_array(n) {
    var o = new Array(n);
    for (var i2 = 0; i2 < n; ++i2) o[i2] = 0;
    return o;
  }
  function build_tree(clens, cmap, MAX) {
    var maxlen = 1, w = 0, i2 = 0, j = 0, ccode = 0, L = clens.length;
    var bl_count = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
    for (i2 = 0; i2 < 32; ++i2) bl_count[i2] = 0;
    for (i2 = L; i2 < MAX; ++i2) clens[i2] = 0;
    L = clens.length;
    var ctree = use_typed_arrays ? new Uint16Array(L) : zero_fill_array(L);
    for (i2 = 0; i2 < L; ++i2) {
      bl_count[w = clens[i2]]++;
      if (maxlen < w) maxlen = w;
      ctree[i2] = 0;
    }
    bl_count[0] = 0;
    for (i2 = 1; i2 <= maxlen; ++i2) bl_count[i2 + 16] = ccode = ccode + bl_count[i2 - 1] << 1;
    for (i2 = 0; i2 < L; ++i2) {
      ccode = clens[i2];
      if (ccode != 0) ctree[i2] = bl_count[ccode + 16]++;
    }
    var cleni = 0;
    for (i2 = 0; i2 < L; ++i2) {
      cleni = clens[i2];
      if (cleni != 0) {
        ccode = bit_swap_n(ctree[i2], maxlen) >> maxlen - cleni;
        for (j = (1 << maxlen + 4 - cleni) - 1; j >= 0; --j)
          cmap[ccode | j << cleni] = cleni & 15 | i2 << 4;
      }
    }
    return maxlen;
  }
  var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512);
  var fix_dmap = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
  if (!use_typed_arrays) {
    for (var i = 0; i < 512; ++i) fix_lmap[i] = 0;
    for (i = 0; i < 32; ++i) fix_dmap[i] = 0;
  }
  (function() {
    var dlens = [];
    var i2 = 0;
    for (; i2 < 32; i2++) dlens.push(5);
    build_tree(dlens, fix_dmap, 32);
    var clens = [];
    i2 = 0;
    for (; i2 <= 143; i2++) clens.push(8);
    for (; i2 <= 255; i2++) clens.push(9);
    for (; i2 <= 279; i2++) clens.push(7);
    for (; i2 <= 287; i2++) clens.push(8);
    build_tree(clens, fix_lmap, 288);
  })();
  var _deflateRaw = /* @__PURE__ */ (function _deflateRawIIFE() {
    var DST_LN_RE = use_typed_arrays ? new Uint8Array(32768) : [];
    var j = 0, k = 0;
    for (; j < DST_LN.length - 1; ++j) {
      for (; k < DST_LN[j + 1]; ++k) DST_LN_RE[k] = j;
    }
    for (; k < 32768; ++k) DST_LN_RE[k] = 29;
    var LEN_LN_RE = use_typed_arrays ? new Uint8Array(259) : [];
    for (j = 0, k = 0; j < LEN_LN.length - 1; ++j) {
      for (; k < LEN_LN[j + 1]; ++k) LEN_LN_RE[k] = j;
    }
    function write_stored(data2, out) {
      var boff = 0;
      while (boff < data2.length) {
        var L = Math.min(65535, data2.length - boff);
        var h = boff + L == data2.length;
        out.write_shift(1, +h);
        out.write_shift(2, L);
        out.write_shift(2, ~L & 65535);
        while (L-- > 0) out[out.l++] = data2[boff++];
      }
      return out.l;
    }
    function write_huff_fixed(data2, out) {
      var bl = 0;
      var boff = 0;
      var addrs = use_typed_arrays ? new Uint16Array(32768) : [];
      while (boff < data2.length) {
        var L = (
          /* data.length - boff; */
          Math.min(65535, data2.length - boff)
        );
        if (L < 10) {
          bl = write_bits_3(out, bl, +!!(boff + L == data2.length));
          if (bl & 7) bl += 8 - (bl & 7);
          out.l = bl / 8 | 0;
          out.write_shift(2, L);
          out.write_shift(2, ~L & 65535);
          while (L-- > 0) out[out.l++] = data2[boff++];
          bl = out.l * 8;
          continue;
        }
        bl = write_bits_3(out, bl, +!!(boff + L == data2.length) + 2);
        var hash = 0;
        while (L-- > 0) {
          var d = data2[boff];
          hash = (hash << 5 ^ d) & 32767;
          var match = -1, mlen = 0;
          if (match = addrs[hash]) {
            match |= boff & ~32767;
            if (match > boff) match -= 32768;
            if (match < boff) while (data2[match + mlen] == data2[boff + mlen] && mlen < 250) ++mlen;
          }
          if (mlen > 2) {
            d = LEN_LN_RE[mlen];
            if (d <= 22) bl = write_bits_8(out, bl, bitswap8[d + 1] >> 1) - 1;
            else {
              write_bits_8(out, bl, 3);
              bl += 5;
              write_bits_8(out, bl, bitswap8[d - 23] >> 5);
              bl += 3;
            }
            var len_eb = d < 8 ? 0 : d - 4 >> 2;
            if (len_eb > 0) {
              write_bits_16(out, bl, mlen - LEN_LN[d]);
              bl += len_eb;
            }
            d = DST_LN_RE[boff - match];
            bl = write_bits_8(out, bl, bitswap8[d] >> 3);
            bl -= 3;
            var dst_eb = d < 4 ? 0 : d - 2 >> 1;
            if (dst_eb > 0) {
              write_bits_16(out, bl, boff - match - DST_LN[d]);
              bl += dst_eb;
            }
            for (var q2 = 0; q2 < mlen; ++q2) {
              addrs[hash] = boff & 32767;
              hash = (hash << 5 ^ data2[boff]) & 32767;
              ++boff;
            }
            L -= mlen - 1;
          } else {
            if (d <= 143) d = d + 48;
            else bl = write_bits_1(out, bl, 1);
            bl = write_bits_8(out, bl, bitswap8[d]);
            addrs[hash] = boff & 32767;
            ++boff;
          }
        }
        bl = write_bits_8(out, bl, 0) - 1;
      }
      out.l = (bl + 7) / 8 | 0;
      return out.l;
    }
    return function _deflateRaw2(data2, out) {
      if (data2.length < 8) return write_stored(data2, out);
      return write_huff_fixed(data2, out);
    };
  })();
  function _deflate(data2) {
    var buf = new_buf(50 + Math.floor(data2.length * 1.1));
    var off = _deflateRaw(data2, buf);
    return buf.slice(0, off);
  }
  var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
  var dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
  var dyn_cmap = use_typed_arrays ? new Uint16Array(128) : zero_fill_array(128);
  var dyn_len_1 = 1, dyn_len_2 = 1;
  function dyn(data2, boff) {
    var _HLIT = read_bits_5(data2, boff) + 257;
    boff += 5;
    var _HDIST = read_bits_5(data2, boff) + 1;
    boff += 5;
    var _HCLEN = read_bits_4(data2, boff) + 4;
    boff += 4;
    var w = 0;
    var clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19);
    var ctree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var maxlen = 1;
    var bl_count = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
    var next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
    var L = clens.length;
    for (var i2 = 0; i2 < _HCLEN; ++i2) {
      clens[CLEN_ORDER[i2]] = w = read_bits_3(data2, boff);
      if (maxlen < w) maxlen = w;
      bl_count[w]++;
      boff += 3;
    }
    var ccode = 0;
    bl_count[0] = 0;
    for (i2 = 1; i2 <= maxlen; ++i2) next_code[i2] = ccode = ccode + bl_count[i2 - 1] << 1;
    for (i2 = 0; i2 < L; ++i2) if ((ccode = clens[i2]) != 0) ctree[i2] = next_code[ccode]++;
    var cleni = 0;
    for (i2 = 0; i2 < L; ++i2) {
      cleni = clens[i2];
      if (cleni != 0) {
        ccode = bitswap8[ctree[i2]] >> 8 - cleni;
        for (var j = (1 << 7 - cleni) - 1; j >= 0; --j) dyn_cmap[ccode | j << cleni] = cleni & 7 | i2 << 3;
      }
    }
    var hcodes = [];
    maxlen = 1;
    for (; hcodes.length < _HLIT + _HDIST; ) {
      ccode = dyn_cmap[read_bits_7(data2, boff)];
      boff += ccode & 7;
      switch (ccode >>>= 3) {
        case 16:
          w = 3 + read_bits_2(data2, boff);
          boff += 2;
          ccode = hcodes[hcodes.length - 1];
          while (w-- > 0) hcodes.push(ccode);
          break;
        case 17:
          w = 3 + read_bits_3(data2, boff);
          boff += 3;
          while (w-- > 0) hcodes.push(0);
          break;
        case 18:
          w = 11 + read_bits_7(data2, boff);
          boff += 7;
          while (w-- > 0) hcodes.push(0);
          break;
        default:
          hcodes.push(ccode);
          if (maxlen < ccode) maxlen = ccode;
          break;
      }
    }
    var h1 = hcodes.slice(0, _HLIT), h2 = hcodes.slice(_HLIT);
    for (i2 = _HLIT; i2 < 286; ++i2) h1[i2] = 0;
    for (i2 = _HDIST; i2 < 30; ++i2) h2[i2] = 0;
    dyn_len_1 = build_tree(h1, dyn_lmap, 286);
    dyn_len_2 = build_tree(h2, dyn_dmap, 30);
    return boff;
  }
  function inflate(data2, usz) {
    if (data2[0] == 3 && !(data2[1] & 3)) {
      return [new_raw_buf(usz), 2];
    }
    var boff = 0;
    var header = 0;
    var outbuf = new_unsafe_buf(usz ? usz : 1 << 18);
    var woff = 0;
    var OL = outbuf.length >>> 0;
    var max_len_1 = 0, max_len_2 = 0;
    while ((header & 1) == 0) {
      header = read_bits_3(data2, boff);
      boff += 3;
      if (header >>> 1 == 0) {
        if (boff & 7) boff += 8 - (boff & 7);
        var sz = data2[boff >>> 3] | data2[(boff >>> 3) + 1] << 8;
        boff += 32;
        if (sz > 0) {
          if (!usz && OL < woff + sz) {
            outbuf = realloc(outbuf, woff + sz);
            OL = outbuf.length;
          }
          while (sz-- > 0) {
            outbuf[woff++] = data2[boff >>> 3];
            boff += 8;
          }
        }
        continue;
      } else if (header >> 1 == 1) {
        max_len_1 = 9;
        max_len_2 = 5;
      } else {
        boff = dyn(data2, boff);
        max_len_1 = dyn_len_1;
        max_len_2 = dyn_len_2;
      }
      for (; ; ) {
        if (!usz && OL < woff + 32767) {
          outbuf = realloc(outbuf, woff + 32767);
          OL = outbuf.length;
        }
        var bits = read_bits_n(data2, boff, max_len_1);
        var code = header >>> 1 == 1 ? fix_lmap[bits] : dyn_lmap[bits];
        boff += code & 15;
        code >>>= 4;
        if ((code >>> 8 & 255) === 0) outbuf[woff++] = code;
        else if (code == 256) break;
        else {
          code -= 257;
          var len_eb = code < 8 ? 0 : code - 4 >> 2;
          if (len_eb > 5) len_eb = 0;
          var tgt = woff + LEN_LN[code];
          if (len_eb > 0) {
            tgt += read_bits_n(data2, boff, len_eb);
            boff += len_eb;
          }
          bits = read_bits_n(data2, boff, max_len_2);
          code = header >>> 1 == 1 ? fix_dmap[bits] : dyn_dmap[bits];
          boff += code & 15;
          code >>>= 4;
          var dst_eb = code < 4 ? 0 : code - 2 >> 1;
          var dst = DST_LN[code];
          if (dst_eb > 0) {
            dst += read_bits_n(data2, boff, dst_eb);
            boff += dst_eb;
          }
          if (!usz && OL < tgt) {
            outbuf = realloc(outbuf, tgt + 100);
            OL = outbuf.length;
          }
          while (woff < tgt) {
            outbuf[woff] = outbuf[woff - dst];
            ++woff;
          }
        }
      }
    }
    if (usz) return [outbuf, boff + 7 >>> 3];
    return [outbuf.slice(0, woff), boff + 7 >>> 3];
  }
  function _inflate(payload, usz) {
    var data2 = payload.slice(payload.l || 0);
    var out = inflate(data2, usz);
    payload.l += out[1];
    return out[0];
  }
  function warn_or_throw(wrn, msg) {
    if (wrn) {
      if (typeof console !== "undefined") console.error(msg);
    } else throw new Error(msg);
  }
  function parse_zip(file, options) {
    var blob = (
      /*::(*/
      file
    );
    prep_blob(blob, 0);
    var FileIndex = [], FullPaths = [];
    var o = {
      FileIndex,
      FullPaths
    };
    init_cfb(o, { root: options.root });
    var i2 = blob.length - 4;
    while ((blob[i2] != 80 || blob[i2 + 1] != 75 || blob[i2 + 2] != 5 || blob[i2 + 3] != 6) && i2 >= 0) --i2;
    blob.l = i2 + 4;
    blob.l += 4;
    var fcnt = blob.read_shift(2);
    blob.l += 6;
    var start_cd = blob.read_shift(4);
    blob.l = start_cd;
    for (i2 = 0; i2 < fcnt; ++i2) {
      blob.l += 20;
      var csz = blob.read_shift(4);
      var usz = blob.read_shift(4);
      var namelen = blob.read_shift(2);
      var efsz = blob.read_shift(2);
      var fcsz = blob.read_shift(2);
      blob.l += 8;
      var offset = blob.read_shift(4);
      var EF = parse_extra_field(
        /*::(*/
        blob.slice(blob.l + namelen, blob.l + namelen + efsz)
        /*:: :any)*/
      );
      blob.l += namelen + efsz + fcsz;
      var L = blob.l;
      blob.l = offset + 4;
      parse_local_file(blob, csz, usz, o, EF);
      blob.l = L;
    }
    return o;
  }
  function parse_local_file(blob, csz, usz, o, EF) {
    blob.l += 2;
    var flags = blob.read_shift(2);
    var meth = blob.read_shift(2);
    var date = parse_dos_date(blob);
    if (flags & 8257) throw new Error("Unsupported ZIP encryption");
    var crc32 = blob.read_shift(4);
    var _csz = blob.read_shift(4);
    var _usz = blob.read_shift(4);
    var namelen = blob.read_shift(2);
    var efsz = blob.read_shift(2);
    var name = "";
    for (var i2 = 0; i2 < namelen; ++i2) name += String.fromCharCode(blob[blob.l++]);
    if (efsz) {
      var ef = parse_extra_field(
        /*::(*/
        blob.slice(blob.l, blob.l + efsz)
        /*:: :any)*/
      );
      if ((ef[21589] || {}).mt) date = ef[21589].mt;
      if (((EF || {})[21589] || {}).mt) date = EF[21589].mt;
    }
    blob.l += efsz;
    var data2 = blob.slice(blob.l, blob.l + _csz);
    switch (meth) {
      case 8:
        data2 = _inflateRawSync(blob, _usz);
        break;
      case 0:
        break;
      // TODO: scan for magic number
      default:
        throw new Error("Unsupported ZIP Compression method " + meth);
    }
    var wrn = false;
    if (flags & 8) {
      crc32 = blob.read_shift(4);
      if (crc32 == 134695760) {
        crc32 = blob.read_shift(4);
        wrn = true;
      }
      _csz = blob.read_shift(4);
      _usz = blob.read_shift(4);
    }
    if (_csz != csz) warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz);
    if (_usz != usz) warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);
    cfb_add(o, name, data2, { unsafe: true, mt: date });
  }
  function write_zip2(cfb, options) {
    var _opts = options || {};
    var out = [], cdirs = [];
    var o = new_buf(1);
    var method = _opts.compression ? 8 : 0, flags = 0;
    var desc = false;
    if (desc) flags |= 8;
    var i2 = 0, j = 0;
    var start_cd = 0, fcnt = 0;
    var root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0];
    var crcs = [];
    var sz_cd = 0;
    for (i2 = 1; i2 < cfb.FullPaths.length; ++i2) {
      fp = cfb.FullPaths[i2].slice(root.length);
      fi = cfb.FileIndex[i2];
      if (!fi.size || !fi.content || fp == "Sh33tJ5") continue;
      var start = start_cd;
      var namebuf = new_buf(fp.length);
      for (j = 0; j < fp.length; ++j) namebuf.write_shift(1, fp.charCodeAt(j) & 127);
      namebuf = namebuf.slice(0, namebuf.l);
      crcs[fcnt] = CRC32.buf(
        /*::((*/
        fi.content,
        0
      );
      var outbuf = fi.content;
      if (method == 8) outbuf = _deflateRawSync(outbuf);
      o = new_buf(30);
      o.write_shift(4, 67324752);
      o.write_shift(2, 20);
      o.write_shift(2, flags);
      o.write_shift(2, method);
      if (fi.mt) write_dos_date(o, fi.mt);
      else o.write_shift(4, 0);
      o.write_shift(-4, flags & 8 ? 0 : crcs[fcnt]);
      o.write_shift(4, flags & 8 ? 0 : outbuf.length);
      o.write_shift(4, flags & 8 ? 0 : (
        /*::(*/
        fi.content.length
      ));
      o.write_shift(2, namebuf.length);
      o.write_shift(2, 0);
      start_cd += o.length;
      out.push(o);
      start_cd += namebuf.length;
      out.push(namebuf);
      start_cd += outbuf.length;
      out.push(outbuf);
      if (flags & 8) {
        o = new_buf(12);
        o.write_shift(-4, crcs[fcnt]);
        o.write_shift(4, outbuf.length);
        o.write_shift(
          4,
          /*::(*/
          fi.content.length
        );
        start_cd += o.l;
        out.push(o);
      }
      o = new_buf(46);
      o.write_shift(4, 33639248);
      o.write_shift(2, 0);
      o.write_shift(2, 20);
      o.write_shift(2, flags);
      o.write_shift(2, method);
      o.write_shift(4, 0);
      o.write_shift(-4, crcs[fcnt]);
      o.write_shift(4, outbuf.length);
      o.write_shift(
        4,
        /*::(*/
        fi.content.length
      );
      o.write_shift(2, namebuf.length);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(4, 0);
      o.write_shift(4, start);
      sz_cd += o.l;
      cdirs.push(o);
      sz_cd += namebuf.length;
      cdirs.push(namebuf);
      ++fcnt;
    }
    o = new_buf(22);
    o.write_shift(4, 101010256);
    o.write_shift(2, 0);
    o.write_shift(2, 0);
    o.write_shift(2, fcnt);
    o.write_shift(2, fcnt);
    o.write_shift(4, sz_cd);
    o.write_shift(4, start_cd);
    o.write_shift(2, 0);
    return bconcat([bconcat(out), bconcat(cdirs), o]);
  }
  var ContentTypeMap = {
    "htm": "text/html",
    "xml": "text/xml",
    "gif": "image/gif",
    "jpg": "image/jpeg",
    "png": "image/png",
    "mso": "application/x-mso",
    "thmx": "application/vnd.ms-officetheme",
    "sh33tj5": "application/octet-stream"
  };
  function get_content_type(fi, fp) {
    if (fi.ctype) return fi.ctype;
    var ext = fi.name || "", m = ext.match(/\.([^\.]+)$/);
    if (m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];
    if (fp) {
      m = (ext = fp).match(/[\.\\]([^\.\\])+$/);
      if (m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];
    }
    return "application/octet-stream";
  }
  function write_base64_76(bstr) {
    var data2 = Base64_encode(bstr);
    var o = [];
    for (var i2 = 0; i2 < data2.length; i2 += 76) o.push(data2.slice(i2, i2 + 76));
    return o.join("\r\n") + "\r\n";
  }
  function write_quoted_printable(text) {
    var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(c) {
      var w = c.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (w.length == 1 ? "0" + w : w);
    });
    encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
    if (encoded.charAt(0) == "\n") encoded = "=0D" + encoded.slice(1);
    encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");
    var o = [], split = encoded.split("\r\n");
    for (var si = 0; si < split.length; ++si) {
      var str = split[si];
      if (str.length == 0) {
        o.push("");
        continue;
      }
      for (var i2 = 0; i2 < str.length; ) {
        var end = 76;
        var tmp = str.slice(i2, i2 + end);
        if (tmp.charAt(end - 1) == "=") end--;
        else if (tmp.charAt(end - 2) == "=") end -= 2;
        else if (tmp.charAt(end - 3) == "=") end -= 3;
        tmp = str.slice(i2, i2 + end);
        i2 += end;
        if (i2 < str.length) tmp += "=";
        o.push(tmp);
      }
    }
    return o.join("\r\n");
  }
  function parse_quoted_printable(data2) {
    var o = [];
    for (var di = 0; di < data2.length; ++di) {
      var line = data2[di];
      while (di <= data2.length && line.charAt(line.length - 1) == "=") line = line.slice(0, line.length - 1) + data2[++di];
      o.push(line);
    }
    for (var oi = 0; oi < o.length; ++oi) o[oi] = o[oi].replace(/[=][0-9A-Fa-f]{2}/g, function($$) {
      return String.fromCharCode(parseInt($$.slice(1), 16));
    });
    return s2a(o.join("\r\n"));
  }
  function parse_mime(cfb, data2, root) {
    var fname = "", cte = "", ctype = "", fdata;
    var di = 0;
    for (; di < 10; ++di) {
      var line = data2[di];
      if (!line || line.match(/^\s*$/)) break;
      var m = line.match(/^(.*?):\s*([^\s].*)$/);
      if (m) switch (m[1].toLowerCase()) {
        case "content-location":
          fname = m[2].trim();
          break;
        case "content-type":
          ctype = m[2].trim();
          break;
        case "content-transfer-encoding":
          cte = m[2].trim();
          break;
      }
    }
    ++di;
    switch (cte.toLowerCase()) {
      case "base64":
        fdata = s2a(Base64_decode(data2.slice(di).join("")));
        break;
      case "quoted-printable":
        fdata = parse_quoted_printable(data2.slice(di));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + cte);
    }
    var file = cfb_add(cfb, fname.slice(root.length), fdata, { unsafe: true });
    if (ctype) file.ctype = ctype;
  }
  function parse_mad(file, options) {
    if (a2s2(file.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var root = options && options.root || "";
    var data2 = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s2(file)).split("\r\n");
    var di = 0, row = "";
    for (di = 0; di < data2.length; ++di) {
      row = data2[di];
      if (!/^Content-Location:/i.test(row)) continue;
      row = row.slice(row.indexOf("file"));
      if (!root) root = row.slice(0, row.lastIndexOf("/") + 1);
      if (row.slice(0, root.length) == root) continue;
      while (root.length > 0) {
        root = root.slice(0, root.length - 1);
        root = root.slice(0, root.lastIndexOf("/") + 1);
        if (row.slice(0, root.length) == root) break;
      }
    }
    var mboundary = (data2[1] || "").match(/boundary="(.*?)"/);
    if (!mboundary) throw new Error("MAD cannot find boundary");
    var boundary = "--" + (mboundary[1] || "");
    var FileIndex = [], FullPaths = [];
    var o = {
      FileIndex,
      FullPaths
    };
    init_cfb(o);
    var start_di, fcnt = 0;
    for (di = 0; di < data2.length; ++di) {
      var line = data2[di];
      if (line !== boundary && line !== boundary + "--") continue;
      if (fcnt++) parse_mime(o, data2.slice(start_di, di), root);
      start_di = di;
    }
    return o;
  }
  function write_mad(cfb, options) {
    var opts = options || {};
    var boundary = opts.boundary || "SheetJS";
    boundary = "------=" + boundary;
    var out = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"',
      "",
      "",
      ""
    ];
    var root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0];
    for (var i2 = 1; i2 < cfb.FullPaths.length; ++i2) {
      fp = cfb.FullPaths[i2].slice(root.length);
      fi = cfb.FileIndex[i2];
      if (!fi.size || !fi.content || fp == "Sh33tJ5") continue;
      fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(c) {
        return "_x" + c.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(u) {
        return "_u" + u.charCodeAt(0).toString(16) + "_";
      });
      var ca = fi.content;
      var cstr = has_buf && Buffer.isBuffer(ca) ? ca.toString("binary") : a2s2(ca);
      var dispcnt = 0, L = Math.min(1024, cstr.length), cc = 0;
      for (var csl = 0; csl <= L; ++csl) if ((cc = cstr.charCodeAt(csl)) >= 32 && cc < 128) ++dispcnt;
      var qp = dispcnt >= L * 4 / 5;
      out.push(boundary);
      out.push("Content-Location: " + (opts.root || "file:///C:/SheetJS/") + fp);
      out.push("Content-Transfer-Encoding: " + (qp ? "quoted-printable" : "base64"));
      out.push("Content-Type: " + get_content_type(fi, fp));
      out.push("");
      out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
    }
    out.push(boundary + "--\r\n");
    return out.join("\r\n");
  }
  function cfb_new(opts) {
    var o = {};
    init_cfb(o, opts);
    return o;
  }
  function cfb_add(cfb, name, content, opts) {
    var unsafe = opts && opts.unsafe;
    if (!unsafe) init_cfb(cfb);
    var file = !unsafe && CFB.find(cfb, name);
    if (!file) {
      var fpath = cfb.FullPaths[0];
      if (name.slice(0, fpath.length) == fpath) fpath = name;
      else {
        if (fpath.slice(-1) != "/") fpath += "/";
        fpath = (fpath + name).replace("//", "/");
      }
      file = { name: filename(name), type: 2 };
      cfb.FileIndex.push(file);
      cfb.FullPaths.push(fpath);
      if (!unsafe) CFB.utils.cfb_gc(cfb);
    }
    file.content = content;
    file.size = content ? content.length : 0;
    if (opts) {
      if (opts.CLSID) file.clsid = opts.CLSID;
      if (opts.mt) file.mt = opts.mt;
      if (opts.ct) file.ct = opts.ct;
    }
    return file;
  }
  function cfb_del(cfb, name) {
    init_cfb(cfb);
    var file = CFB.find(cfb, name);
    if (file) {
      for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file) {
        cfb.FileIndex.splice(j, 1);
        cfb.FullPaths.splice(j, 1);
        return true;
      }
    }
    return false;
  }
  function cfb_mov(cfb, old_name, new_name) {
    init_cfb(cfb);
    var file = CFB.find(cfb, old_name);
    if (file) {
      for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file) {
        cfb.FileIndex[j].name = filename(new_name);
        cfb.FullPaths[j] = new_name;
        return true;
      }
    }
    return false;
  }
  function cfb_gc(cfb) {
    rebuild_cfb(cfb, true);
  }
  exports.find = find;
  exports.read = read;
  exports.parse = parse2;
  exports.write = write;
  exports.writeFile = write_file;
  exports.utils = {
    cfb_new,
    cfb_add,
    cfb_del,
    cfb_mov,
    cfb_gc,
    ReadShift,
    CheckField,
    prep_blob,
    bconcat,
    use_zlib,
    _deflateRaw: _deflate,
    _inflateRaw: _inflate,
    consts
  };
  return exports;
})();
var _fs = void 0;
function blobify(data2) {
  if (typeof data2 === "string") return s2ab(data2);
  if (Array.isArray(data2)) return a2u(data2);
  return data2;
}
function write_dl(fname, payload, enc) {
  if (typeof _fs !== "undefined" && _fs.writeFileSync) return enc ? _fs.writeFileSync(fname, payload, enc) : _fs.writeFileSync(fname, payload);
  if (typeof Deno !== "undefined") {
    if (enc && typeof payload == "string") switch (enc) {
      case "utf8":
        payload = new TextEncoder(enc).encode(payload);
        break;
      case "binary":
        payload = s2ab(payload);
        break;
      /* TODO: binary equivalent */
      default:
        throw new Error("Unsupported encoding " + enc);
    }
    return Deno.writeFileSync(fname, payload);
  }
  var data2 = enc == "utf8" ? utf8write(payload) : payload;
  if (typeof IE_SaveFile !== "undefined") return IE_SaveFile(data2, fname);
  if (typeof Blob !== "undefined") {
    var blob = new Blob([blobify(data2)], { type: "application/octet-stream" });
    if (typeof navigator !== "undefined" && navigator.msSaveBlob) return navigator.msSaveBlob(blob, fname);
    if (typeof saveAs !== "undefined") return saveAs(blob, fname);
    if (typeof URL !== "undefined" && typeof document !== "undefined" && document.createElement && URL.createObjectURL) {
      var url2 = URL.createObjectURL(blob);
      if (typeof chrome === "object" && typeof (chrome.downloads || {}).download == "function") {
        if (URL.revokeObjectURL && typeof setTimeout !== "undefined") setTimeout(function() {
          URL.revokeObjectURL(url2);
        }, 6e4);
        return chrome.downloads.download({ url: url2, filename: fname, saveAs: true });
      }
      var a = document.createElement("a");
      if (a.download != null) {
        a.download = fname;
        a.href = url2;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        if (URL.revokeObjectURL && typeof setTimeout !== "undefined") setTimeout(function() {
          URL.revokeObjectURL(url2);
        }, 6e4);
        return url2;
      }
    }
  }
  if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") try {
    var out = File(fname);
    out.open("w");
    out.encoding = "binary";
    if (Array.isArray(payload)) payload = a2s(payload);
    out.write(payload);
    out.close();
    return payload;
  } catch (e) {
    if (!e.message || !e.message.match(/onstruct/)) throw e;
  }
  throw new Error("cannot save file " + fname);
}
function keys(o) {
  var ks = Object.keys(o), o2 = [];
  for (var i = 0; i < ks.length; ++i) if (Object.prototype.hasOwnProperty.call(o, ks[i])) o2.push(ks[i]);
  return o2;
}
function evert_key(obj, key) {
  var o = [], K = keys(obj);
  for (var i = 0; i !== K.length; ++i) if (o[obj[K[i]][key]] == null) o[obj[K[i]][key]] = K[i];
  return o;
}
function evert(obj) {
  var o = [], K = keys(obj);
  for (var i = 0; i !== K.length; ++i) o[obj[K[i]]] = K[i];
  return o;
}
function evert_num(obj) {
  var o = [], K = keys(obj);
  for (var i = 0; i !== K.length; ++i) o[obj[K[i]]] = parseInt(K[i], 10);
  return o;
}
function evert_arr(obj) {
  var o = [], K = keys(obj);
  for (var i = 0; i !== K.length; ++i) {
    if (o[obj[K[i]]] == null) o[obj[K[i]]] = [];
    o[obj[K[i]]].push(K[i]);
  }
  return o;
}
var basedate = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function datenum(v, date1904) {
  var epoch = /* @__PURE__ */ v.getTime();
  if (date1904) epoch -= 1462 * 24 * 60 * 60 * 1e3;
  var dnthresh2 = /* @__PURE__ */ basedate.getTime() + (/* @__PURE__ */ v.getTimezoneOffset() - /* @__PURE__ */ basedate.getTimezoneOffset()) * 6e4;
  return (epoch - dnthresh2) / (24 * 60 * 60 * 1e3);
}
var refdate = /* @__PURE__ */ new Date();
var dnthresh = /* @__PURE__ */ basedate.getTime() + (/* @__PURE__ */ refdate.getTimezoneOffset() - /* @__PURE__ */ basedate.getTimezoneOffset()) * 6e4;
var refoffset = /* @__PURE__ */ refdate.getTimezoneOffset();
function numdate(v) {
  var out = /* @__PURE__ */ new Date();
  out.setTime(v * 24 * 60 * 60 * 1e3 + dnthresh);
  if (out.getTimezoneOffset() !== refoffset) {
    out.setTime(out.getTime() + (out.getTimezoneOffset() - refoffset) * 6e4);
  }
  return out;
}
var good_pd_date_1 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z");
var good_pd_date = /* @__PURE__ */ isNaN(/* @__PURE__ */ good_pd_date_1.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : good_pd_date_1;
var good_pd = /* @__PURE__ */ good_pd_date.getFullYear() == 2017;
function parseDate(str, fixdate) {
  var d = new Date(str);
  if (good_pd) {
    if (fixdate > 0) d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1e3);
    else if (fixdate < 0) d.setTime(d.getTime() - d.getTimezoneOffset() * 60 * 1e3);
    return d;
  }
  if (str instanceof Date) return str;
  if (good_pd_date.getFullYear() == 1917 && !isNaN(d.getFullYear())) {
    var s = d.getFullYear();
    if (str.indexOf("" + s) > -1) return d;
    d.setFullYear(d.getFullYear() + 100);
    return d;
  }
  var n = str.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
  var out = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  if (str.indexOf("Z") > -1) out = new Date(out.getTime() - out.getTimezoneOffset() * 60 * 1e3);
  return out;
}
function cc2str(arr, debomit) {
  if (has_buf && Buffer.isBuffer(arr)) {
    if (debomit) {
      if (arr[0] == 255 && arr[1] == 254) return utf8write(arr.slice(2).toString("utf16le"));
      if (arr[1] == 254 && arr[2] == 255) return utf8write(utf16beread(arr.slice(2).toString("binary")));
    }
    return arr.toString("binary");
  }
  if (typeof TextDecoder !== "undefined") try {
    if (debomit) {
      if (arr[0] == 255 && arr[1] == 254) return utf8write(new TextDecoder("utf-16le").decode(arr.slice(2)));
      if (arr[0] == 254 && arr[1] == 255) return utf8write(new TextDecoder("utf-16be").decode(arr.slice(2)));
    }
    var rev = {
      "\u20AC": "\x80",
      "\u201A": "\x82",
      "\u0192": "\x83",
      "\u201E": "\x84",
      "\u2026": "\x85",
      "\u2020": "\x86",
      "\u2021": "\x87",
      "\u02C6": "\x88",
      "\u2030": "\x89",
      "\u0160": "\x8A",
      "\u2039": "\x8B",
      "\u0152": "\x8C",
      "\u017D": "\x8E",
      "\u2018": "\x91",
      "\u2019": "\x92",
      "\u201C": "\x93",
      "\u201D": "\x94",
      "\u2022": "\x95",
      "\u2013": "\x96",
      "\u2014": "\x97",
      "\u02DC": "\x98",
      "\u2122": "\x99",
      "\u0161": "\x9A",
      "\u203A": "\x9B",
      "\u0153": "\x9C",
      "\u017E": "\x9E",
      "\u0178": "\x9F"
    };
    if (Array.isArray(arr)) arr = new Uint8Array(arr);
    return new TextDecoder("latin1").decode(arr).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(c) {
      return rev[c] || c;
    });
  } catch (e) {
  }
  var o = [];
  for (var i = 0; i != arr.length; ++i) o.push(String.fromCharCode(arr[i]));
  return o.join("");
}
function dup(o) {
  if (typeof JSON != "undefined" && !Array.isArray(o)) return JSON.parse(JSON.stringify(o));
  if (typeof o != "object" || o == null) return o;
  if (o instanceof Date) return new Date(o.getTime());
  var out = {};
  for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) out[k] = dup(o[k]);
  return out;
}
function fill(c, l) {
  var o = "";
  while (o.length < l) o += c;
  return o;
}
function fuzzynum(s) {
  var v = Number(s);
  if (!isNaN(v)) return isFinite(v) ? v : NaN;
  if (!/\d/.test(s)) return v;
  var wt = 1;
  var ss = s.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    wt *= 100;
    return "";
  });
  if (!isNaN(v = Number(ss))) return v / wt;
  ss = ss.replace(/[(](.*)[)]/, function($$, $1) {
    wt = -wt;
    return $1;
  });
  if (!isNaN(v = Number(ss))) return v / wt;
  return v;
}
var lower_months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function fuzzydate(s) {
  var o = new Date(s), n = /* @__PURE__ */ new Date(NaN);
  var y = o.getYear(), m = o.getMonth(), d = o.getDate();
  if (isNaN(d)) return n;
  var lower = s.toLowerCase();
  if (lower.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    lower = lower.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "");
    if (lower.length > 3 && lower_months.indexOf(lower) == -1) return n;
  } else if (lower.match(/[a-z]/)) return n;
  if (y < 0 || y > 8099) return n;
  if ((m > 0 || d > 1) && y != 101) return o;
  if (s.match(/[^-0-9:,\/\\]/)) return n;
  return o;
}
function zip_add_file(zip, path, content) {
  if (zip.FullPaths) {
    if (typeof content == "string") {
      var res;
      if (has_buf) res = Buffer_from(content);
      else res = utf8decode(content);
      return CFB.utils.cfb_add(zip, path, res);
    }
    CFB.utils.cfb_add(zip, path, content);
  } else zip.file(path, content);
}
function zip_new() {
  return CFB.utils.cfb_new();
}
var XML_HEADER = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
var encodings = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
};
var rencoding = /* @__PURE__ */ evert(encodings);
var decregex = /[&<>'"]/g;
var charegex = /[\u0000-\u0008\u000b-\u001f]/g;
function escapexml(text) {
  var s = text + "";
  return s.replace(decregex, function(y) {
    return rencoding[y];
  }).replace(charegex, function(s2) {
    return "_x" + ("000" + s2.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function escapexmltag(text) {
  return escapexml(text).replace(/ /g, "_x0020_");
}
var htmlcharegex = /[\u0000-\u001f]/g;
function escapehtml(text) {
  var s = text + "";
  return s.replace(decregex, function(y) {
    return rencoding[y];
  }).replace(/\n/g, "<br/>").replace(htmlcharegex, function(s2) {
    return "&#x" + ("000" + s2.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function escapexlml(text) {
  var s = text + "";
  return s.replace(decregex, function(y) {
    return rencoding[y];
  }).replace(htmlcharegex, function(s2) {
    return "&#x" + s2.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function xlml_unfixstr(str) {
  return str.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function parsexmlbool(value2) {
  switch (value2) {
    case 1:
    case true:
    case "1":
    case "true":
    case "TRUE":
      return true;
    /* case '0': case 'false': case 'FALSE':*/
    default:
      return false;
  }
}
function utf8reada(orig) {
  var out = "", i = 0, c = 0, d = 0, e = 0, f = 0, w = 0;
  while (i < orig.length) {
    c = orig.charCodeAt(i++);
    if (c < 128) {
      out += String.fromCharCode(c);
      continue;
    }
    d = orig.charCodeAt(i++);
    if (c > 191 && c < 224) {
      f = (c & 31) << 6;
      f |= d & 63;
      out += String.fromCharCode(f);
      continue;
    }
    e = orig.charCodeAt(i++);
    if (c < 240) {
      out += String.fromCharCode((c & 15) << 12 | (d & 63) << 6 | e & 63);
      continue;
    }
    f = orig.charCodeAt(i++);
    w = ((c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63) - 65536;
    out += String.fromCharCode(55296 + (w >>> 10 & 1023));
    out += String.fromCharCode(56320 + (w & 1023));
  }
  return out;
}
function utf8readb(data2) {
  var out = new_raw_buf(2 * data2.length), w, i, j = 1, k = 0, ww = 0, c;
  for (i = 0; i < data2.length; i += j) {
    j = 1;
    if ((c = data2.charCodeAt(i)) < 128) w = c;
    else if (c < 224) {
      w = (c & 31) * 64 + (data2.charCodeAt(i + 1) & 63);
      j = 2;
    } else if (c < 240) {
      w = (c & 15) * 4096 + (data2.charCodeAt(i + 1) & 63) * 64 + (data2.charCodeAt(i + 2) & 63);
      j = 3;
    } else {
      j = 4;
      w = (c & 7) * 262144 + (data2.charCodeAt(i + 1) & 63) * 4096 + (data2.charCodeAt(i + 2) & 63) * 64 + (data2.charCodeAt(i + 3) & 63);
      w -= 65536;
      ww = 55296 + (w >>> 10 & 1023);
      w = 56320 + (w & 1023);
    }
    if (ww !== 0) {
      out[k++] = ww & 255;
      out[k++] = ww >>> 8;
      ww = 0;
    }
    out[k++] = w % 256;
    out[k++] = w >>> 8;
  }
  return out.slice(0, k).toString("ucs2");
}
function utf8readc(data2) {
  return Buffer_from(data2, "binary").toString("utf8");
}
var utf8corpus = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3";
var utf8read = has_buf && (/* @__PURE__ */ utf8readc(utf8corpus) == /* @__PURE__ */ utf8reada(utf8corpus) && utf8readc || /* @__PURE__ */ utf8readb(utf8corpus) == /* @__PURE__ */ utf8reada(utf8corpus) && utf8readb) || utf8reada;
var utf8write = has_buf ? function(data2) {
  return Buffer_from(data2, "utf8").toString("binary");
} : function(orig) {
  var out = [], i = 0, c = 0, d = 0;
  while (i < orig.length) {
    c = orig.charCodeAt(i++);
    switch (true) {
      case c < 128:
        out.push(String.fromCharCode(c));
        break;
      case c < 2048:
        out.push(String.fromCharCode(192 + (c >> 6)));
        out.push(String.fromCharCode(128 + (c & 63)));
        break;
      case (c >= 55296 && c < 57344):
        c -= 55296;
        d = orig.charCodeAt(i++) - 56320 + (c << 10);
        out.push(String.fromCharCode(240 + (d >> 18 & 7)));
        out.push(String.fromCharCode(144 + (d >> 12 & 63)));
        out.push(String.fromCharCode(128 + (d >> 6 & 63)));
        out.push(String.fromCharCode(128 + (d & 63)));
        break;
      default:
        out.push(String.fromCharCode(224 + (c >> 12)));
        out.push(String.fromCharCode(128 + (c >> 6 & 63)));
        out.push(String.fromCharCode(128 + (c & 63)));
    }
  }
  return out.join("");
};
var htmldecode = /* @__PURE__ */ (function() {
  var entities = [
    ["nbsp", " "],
    ["middot", "\xB7"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(x) {
    return [new RegExp("&" + x[0] + ";", "ig"), x[1]];
  });
  return function htmldecode2(str) {
    var o = str.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, "");
    for (var i = 0; i < entities.length; ++i) o = o.replace(entities[i][0], entities[i][1]);
    return o;
  };
})();
var wtregex = /(^\s|\s$|\n)/;
function writetag(f, g) {
  return "<" + f + (g.match(wtregex) ? ' xml:space="preserve"' : "") + ">" + g + "</" + f + ">";
}
function wxt_helper(h) {
  return keys(h).map(function(k) {
    return " " + k + '="' + h[k] + '"';
  }).join("");
}
function writextag(f, g, h) {
  return "<" + f + (h != null ? wxt_helper(h) : "") + (g != null ? (g.match(wtregex) ? ' xml:space="preserve"' : "") + ">" + g + "</" + f : "/") + ">";
}
function write_w3cdtf(d, t) {
  try {
    return d.toISOString().replace(/\.\d*/, "");
  } catch (e) {
    if (t) throw e;
  }
  return "";
}
function write_vt(s, xlsx) {
  switch (typeof s) {
    case "string":
      var o = writextag("vt:lpwstr", escapexml(s));
      if (xlsx) o = o.replace(/&quot;/g, "_x0022_");
      return o;
    case "number":
      return writextag((s | 0) == s ? "vt:i4" : "vt:r8", escapexml(String(s)));
    case "boolean":
      return writextag("vt:bool", s ? "true" : "false");
  }
  if (s instanceof Date) return writextag("vt:filetime", write_w3cdtf(s));
  throw new Error("Unable to serialize " + s);
}
var XMLNS = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  "dc": "http://purl.org/dc/elements/1.1/",
  "dcterms": "http://purl.org/dc/terms/",
  "dcmitype": "http://purl.org/dc/dcmitype/",
  "mx": "http://schemas.microsoft.com/office/mac/excel/2008/main",
  "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  "sjs": "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  "vt": "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  "xsi": "http://www.w3.org/2001/XMLSchema-instance",
  "xsd": "http://www.w3.org/2001/XMLSchema"
};
var XMLNS_main = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
];
var XLMLNS = {
  "o": "urn:schemas-microsoft-com:office:office",
  "x": "urn:schemas-microsoft-com:office:excel",
  "ss": "urn:schemas-microsoft-com:office:spreadsheet",
  "dt": "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  "mv": "http://macVmlSchemaUri",
  "v": "urn:schemas-microsoft-com:vml",
  "html": "http://www.w3.org/TR/REC-html40"
};
function read_double_le(b, idx) {
  var s = 1 - 2 * (b[idx + 7] >>> 7);
  var e = ((b[idx + 7] & 127) << 4) + (b[idx + 6] >>> 4 & 15);
  var m = b[idx + 6] & 15;
  for (var i = 5; i >= 0; --i) m = m * 256 + b[idx + i];
  if (e == 2047) return m == 0 ? s * Infinity : NaN;
  if (e == 0) e = -1022;
  else {
    e -= 1023;
    m += Math.pow(2, 52);
  }
  return s * Math.pow(2, e - 52) * m;
}
function write_double_le(b, v, idx) {
  var bs = (v < 0 || 1 / v == -Infinity ? 1 : 0) << 7, e = 0, m = 0;
  var av = bs ? -v : v;
  if (!isFinite(av)) {
    e = 2047;
    m = isNaN(v) ? 26985 : 0;
  } else if (av == 0) e = m = 0;
  else {
    e = Math.floor(Math.log(av) / Math.LN2);
    m = av * Math.pow(2, 52 - e);
    if (e <= -1023 && (!isFinite(m) || m < Math.pow(2, 52))) {
      e = -1022;
    } else {
      m -= Math.pow(2, 52);
      e += 1023;
    }
  }
  for (var i = 0; i <= 5; ++i, m /= 256) b[idx + i] = m & 255;
  b[idx + 6] = (e & 15) << 4 | m & 15;
  b[idx + 7] = e >> 4 | bs;
}
var ___toBuffer = function(bufs) {
  var x = [], w = 10240;
  for (var i = 0; i < bufs[0].length; ++i) if (bufs[0][i]) for (var j = 0, L = bufs[0][i].length; j < L; j += w) x.push.apply(x, bufs[0][i].slice(j, j + w));
  return x;
};
var __toBuffer = has_buf ? function(bufs) {
  return bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0]) ? Buffer.concat(bufs[0].map(function(x) {
    return Buffer.isBuffer(x) ? x : Buffer_from(x);
  })) : ___toBuffer(bufs);
} : ___toBuffer;
var ___utf16le = function(b, s, e) {
  var ss = [];
  for (var i = s; i < e; i += 2) ss.push(String.fromCharCode(__readUInt16LE(b, i)));
  return ss.join("").replace(chr0, "");
};
var __utf16le = has_buf ? function(b, s, e) {
  if (!Buffer.isBuffer(b)) return ___utf16le(b, s, e);
  return b.toString("utf16le", s, e).replace(chr0, "");
} : ___utf16le;
var ___hexlify = function(b, s, l) {
  var ss = [];
  for (var i = s; i < s + l; ++i) ss.push(("0" + b[i].toString(16)).slice(-2));
  return ss.join("");
};
var __hexlify = has_buf ? function(b, s, l) {
  return Buffer.isBuffer(b) ? b.toString("hex", s, s + l) : ___hexlify(b, s, l);
} : ___hexlify;
var ___utf8 = function(b, s, e) {
  var ss = [];
  for (var i = s; i < e; i++) ss.push(String.fromCharCode(__readUInt8(b, i)));
  return ss.join("");
};
var __utf8 = has_buf ? function utf8_b(b, s, e) {
  return Buffer.isBuffer(b) ? b.toString("utf8", s, e) : ___utf8(b, s, e);
} : ___utf8;
var ___lpstr = function(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len - 1) : "";
};
var __lpstr = ___lpstr;
var ___cpstr = function(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len - 1) : "";
};
var __cpstr = ___cpstr;
var ___lpwstr = function(b, i) {
  var len = 2 * __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len - 1) : "";
};
var __lpwstr = ___lpwstr;
var ___lpp4 = function lpp4_(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf16le(b, i + 4, i + 4 + len) : "";
};
var __lpp4 = ___lpp4;
var ___8lpp4 = function(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len) : "";
};
var __8lpp4 = ___8lpp4;
var ___double = function(b, idx) {
  return read_double_le(b, idx);
};
var __double = ___double;
var is_buf = function is_buf_a(a) {
  return Array.isArray(a) || typeof Uint8Array !== "undefined" && a instanceof Uint8Array;
};
if (has_buf) {
  __lpstr = function lpstr_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___lpstr(b, i);
    var len = b.readUInt32LE(i);
    return len > 0 ? b.toString("utf8", i + 4, i + 4 + len - 1) : "";
  };
  __cpstr = function cpstr_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___cpstr(b, i);
    var len = b.readUInt32LE(i);
    return len > 0 ? b.toString("utf8", i + 4, i + 4 + len - 1) : "";
  };
  __lpwstr = function lpwstr_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___lpwstr(b, i);
    var len = 2 * b.readUInt32LE(i);
    return b.toString("utf16le", i + 4, i + 4 + len - 1);
  };
  __lpp4 = function lpp4_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___lpp4(b, i);
    var len = b.readUInt32LE(i);
    return b.toString("utf16le", i + 4, i + 4 + len);
  };
  __8lpp4 = function lpp4_8b(b, i) {
    if (!Buffer.isBuffer(b)) return ___8lpp4(b, i);
    var len = b.readUInt32LE(i);
    return b.toString("utf8", i + 4, i + 4 + len);
  };
  __double = function double_(b, i) {
    if (Buffer.isBuffer(b)) return b.readDoubleLE(i);
    return ___double(b, i);
  };
  is_buf = function is_buf_b(a) {
    return Buffer.isBuffer(a) || Array.isArray(a) || typeof Uint8Array !== "undefined" && a instanceof Uint8Array;
  };
}
function cpdoit() {
  __utf16le = function(b, s, e) {
    return $cptable.utils.decode(1200, b.slice(s, e)).replace(chr0, "");
  };
  __utf8 = function(b, s, e) {
    return $cptable.utils.decode(65001, b.slice(s, e));
  };
  __lpstr = function(b, i) {
    var len = __readUInt32LE(b, i);
    return len > 0 ? $cptable.utils.decode(current_ansi, b.slice(i + 4, i + 4 + len - 1)) : "";
  };
  __cpstr = function(b, i) {
    var len = __readUInt32LE(b, i);
    return len > 0 ? $cptable.utils.decode(current_codepage, b.slice(i + 4, i + 4 + len - 1)) : "";
  };
  __lpwstr = function(b, i) {
    var len = 2 * __readUInt32LE(b, i);
    return len > 0 ? $cptable.utils.decode(1200, b.slice(i + 4, i + 4 + len - 1)) : "";
  };
  __lpp4 = function(b, i) {
    var len = __readUInt32LE(b, i);
    return len > 0 ? $cptable.utils.decode(1200, b.slice(i + 4, i + 4 + len)) : "";
  };
  __8lpp4 = function(b, i) {
    var len = __readUInt32LE(b, i);
    return len > 0 ? $cptable.utils.decode(65001, b.slice(i + 4, i + 4 + len)) : "";
  };
}
if (typeof $cptable !== "undefined") cpdoit();
var __readUInt8 = function(b, idx) {
  return b[idx];
};
var __readUInt16LE = function(b, idx) {
  return b[idx + 1] * (1 << 8) + b[idx];
};
var __readInt16LE = function(b, idx) {
  var u = b[idx + 1] * (1 << 8) + b[idx];
  return u < 32768 ? u : (65535 - u + 1) * -1;
};
var __readUInt32LE = function(b, idx) {
  return b[idx + 3] * (1 << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
};
var __readInt32LE = function(b, idx) {
  return b[idx + 3] << 24 | b[idx + 2] << 16 | b[idx + 1] << 8 | b[idx];
};
var __readInt32BE = function(b, idx) {
  return b[idx] << 24 | b[idx + 1] << 16 | b[idx + 2] << 8 | b[idx + 3];
};
function ReadShift(size, t) {
  var o = "", oI, oR, oo = [], w, vv, i, loc;
  switch (t) {
    case "dbcs":
      loc = this.l;
      if (has_buf && Buffer.isBuffer(this)) o = this.slice(this.l, this.l + 2 * size).toString("utf16le");
      else for (i = 0; i < size; ++i) {
        o += String.fromCharCode(__readUInt16LE(this, loc));
        loc += 2;
      }
      size *= 2;
      break;
    case "utf8":
      o = __utf8(this, this.l, this.l + size);
      break;
    case "utf16le":
      size *= 2;
      o = __utf16le(this, this.l, this.l + size);
      break;
    case "wstr":
      if (typeof $cptable !== "undefined") o = $cptable.utils.decode(current_codepage, this.slice(this.l, this.l + 2 * size));
      else return ReadShift.call(this, size, "dbcs");
      size = 2 * size;
      break;
    /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
    case "lpstr-ansi":
      o = __lpstr(this, this.l);
      size = 4 + __readUInt32LE(this, this.l);
      break;
    case "lpstr-cp":
      o = __cpstr(this, this.l);
      size = 4 + __readUInt32LE(this, this.l);
      break;
    /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
    case "lpwstr":
      o = __lpwstr(this, this.l);
      size = 4 + 2 * __readUInt32LE(this, this.l);
      break;
    /* [MS-OFFCRYPTO] 2.1.2 Length-Prefixed Padded Unicode String (UNICODE-LP-P4) */
    case "lpp4":
      size = 4 + __readUInt32LE(this, this.l);
      o = __lpp4(this, this.l);
      if (size & 2) size += 2;
      break;
    /* [MS-OFFCRYPTO] 2.1.3 Length-Prefixed UTF-8 String (UTF-8-LP-P4) */
    case "8lpp4":
      size = 4 + __readUInt32LE(this, this.l);
      o = __8lpp4(this, this.l);
      if (size & 3) size += 4 - (size & 3);
      break;
    case "cstr":
      size = 0;
      o = "";
      while ((w = __readUInt8(this, this.l + size++)) !== 0) oo.push(_getchar(w));
      o = oo.join("");
      break;
    case "_wstr":
      size = 0;
      o = "";
      while ((w = __readUInt16LE(this, this.l + size)) !== 0) {
        oo.push(_getchar(w));
        size += 2;
      }
      size += 2;
      o = oo.join("");
      break;
    /* sbcs and dbcs support continue records in the SST way TODO codepages */
    case "dbcs-cont":
      o = "";
      loc = this.l;
      for (i = 0; i < size; ++i) {
        if (this.lens && this.lens.indexOf(loc) !== -1) {
          w = __readUInt8(this, loc);
          this.l = loc + 1;
          vv = ReadShift.call(this, size - i, w ? "dbcs-cont" : "sbcs-cont");
          return oo.join("") + vv;
        }
        oo.push(_getchar(__readUInt16LE(this, loc)));
        loc += 2;
      }
      o = oo.join("");
      size *= 2;
      break;
    case "cpstr":
      if (typeof $cptable !== "undefined") {
        o = $cptable.utils.decode(current_codepage, this.slice(this.l, this.l + size));
        break;
      }
    /* falls through */
    case "sbcs-cont":
      o = "";
      loc = this.l;
      for (i = 0; i != size; ++i) {
        if (this.lens && this.lens.indexOf(loc) !== -1) {
          w = __readUInt8(this, loc);
          this.l = loc + 1;
          vv = ReadShift.call(this, size - i, w ? "dbcs-cont" : "sbcs-cont");
          return oo.join("") + vv;
        }
        oo.push(_getchar(__readUInt8(this, loc)));
        loc += 1;
      }
      o = oo.join("");
      break;
    default:
      switch (size) {
        case 1:
          oI = __readUInt8(this, this.l);
          this.l++;
          return oI;
        case 2:
          oI = (t === "i" ? __readInt16LE : __readUInt16LE)(this, this.l);
          this.l += 2;
          return oI;
        case 4:
        case -4:
          if (t === "i" || (this[this.l + 3] & 128) === 0) {
            oI = (size > 0 ? __readInt32LE : __readInt32BE)(this, this.l);
            this.l += 4;
            return oI;
          } else {
            oR = __readUInt32LE(this, this.l);
            this.l += 4;
          }
          return oR;
        case 8:
        case -8:
          if (t === "f") {
            if (size == 8) oR = __double(this, this.l);
            else oR = __double([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
            this.l += 8;
            return oR;
          } else size = 8;
        /* falls through */
        case 16:
          o = __hexlify(this, this.l, size);
          break;
      }
  }
  this.l += size;
  return o;
}
var __writeUInt32LE = function(b, val, idx) {
  b[idx] = val & 255;
  b[idx + 1] = val >>> 8 & 255;
  b[idx + 2] = val >>> 16 & 255;
  b[idx + 3] = val >>> 24 & 255;
};
var __writeInt32LE = function(b, val, idx) {
  b[idx] = val & 255;
  b[idx + 1] = val >> 8 & 255;
  b[idx + 2] = val >> 16 & 255;
  b[idx + 3] = val >> 24 & 255;
};
var __writeUInt16LE = function(b, val, idx) {
  b[idx] = val & 255;
  b[idx + 1] = val >>> 8 & 255;
};
function WriteShift(t, val, f) {
  var size = 0, i = 0;
  if (f === "dbcs") {
    for (i = 0; i != val.length; ++i) __writeUInt16LE(this, val.charCodeAt(i), this.l + 2 * i);
    size = 2 * val.length;
  } else if (f === "sbcs") {
    if (typeof $cptable !== "undefined" && current_ansi == 874) {
      for (i = 0; i != val.length; ++i) {
        var cppayload = $cptable.utils.encode(current_ansi, val.charAt(i));
        this[this.l + i] = cppayload[0];
      }
    } else {
      val = val.replace(/[^\x00-\x7F]/g, "_");
      for (i = 0; i != val.length; ++i) this[this.l + i] = val.charCodeAt(i) & 255;
    }
    size = val.length;
  } else if (f === "hex") {
    for (; i < t; ++i) {
      this[this.l++] = parseInt(val.slice(2 * i, 2 * i + 2), 16) || 0;
    }
    return this;
  } else if (f === "utf16le") {
    var end = Math.min(this.l + t, this.length);
    for (i = 0; i < Math.min(val.length, t); ++i) {
      var cc = val.charCodeAt(i);
      this[this.l++] = cc & 255;
      this[this.l++] = cc >> 8;
    }
    while (this.l < end) this[this.l++] = 0;
    return this;
  } else switch (t) {
    case 1:
      size = 1;
      this[this.l] = val & 255;
      break;
    case 2:
      size = 2;
      this[this.l] = val & 255;
      val >>>= 8;
      this[this.l + 1] = val & 255;
      break;
    case 3:
      size = 3;
      this[this.l] = val & 255;
      val >>>= 8;
      this[this.l + 1] = val & 255;
      val >>>= 8;
      this[this.l + 2] = val & 255;
      break;
    case 4:
      size = 4;
      __writeUInt32LE(this, val, this.l);
      break;
    case 8:
      size = 8;
      if (f === "f") {
        write_double_le(this, val, this.l);
        break;
      }
    /* falls through */
    case 16:
      break;
    case -4:
      size = 4;
      __writeInt32LE(this, val, this.l);
      break;
  }
  this.l += size;
  return this;
}
function CheckField(hexstr, fld) {
  var m = __hexlify(this, this.l, hexstr.length >> 1);
  if (m !== hexstr) throw new Error(fld + "Expected " + hexstr + " saw " + m);
  this.l += hexstr.length >> 1;
}
function prep_blob(blob, pos) {
  blob.l = pos;
  blob.read_shift = /*::(*/
  ReadShift;
  blob.chk = CheckField;
  blob.write_shift = WriteShift;
}
function parsenoop(blob, length) {
  blob.l += length;
}
function new_buf(sz) {
  var o = new_raw_buf(sz);
  prep_blob(o, 0);
  return o;
}
function buf_array() {
  var bufs = [], blksz = has_buf ? 256 : 2048;
  var newblk = function ba_newblk(sz) {
    var o = new_buf(sz);
    prep_blob(o, 0);
    return o;
  };
  var curbuf = newblk(blksz);
  var endbuf = function ba_endbuf() {
    if (!curbuf) return;
    if (curbuf.length > curbuf.l) {
      curbuf = curbuf.slice(0, curbuf.l);
      curbuf.l = curbuf.length;
    }
    if (curbuf.length > 0) bufs.push(curbuf);
    curbuf = null;
  };
  var next = function ba_next(sz) {
    if (curbuf && sz < curbuf.length - curbuf.l) return curbuf;
    endbuf();
    return curbuf = newblk(Math.max(sz + 1, blksz));
  };
  var end = function ba_end() {
    endbuf();
    return bconcat(bufs);
  };
  var push = function ba_push(buf) {
    endbuf();
    curbuf = buf;
    if (curbuf.l == null) curbuf.l = curbuf.length;
    next(blksz);
  };
  return { next, push, end, _bufs: bufs };
}
function write_record(ba, type, payload, length) {
  var t = +type, l;
  if (isNaN(t)) return;
  if (!length) length = XLSBRecordEnum[t].p || (payload || []).length || 0;
  l = 1 + (t >= 128 ? 1 : 0) + 1;
  if (length >= 128) ++l;
  if (length >= 16384) ++l;
  if (length >= 2097152) ++l;
  var o = ba.next(l);
  if (t <= 127) o.write_shift(1, t);
  else {
    o.write_shift(1, (t & 127) + 128);
    o.write_shift(1, t >> 7);
  }
  for (var i = 0; i != 4; ++i) {
    if (length >= 128) {
      o.write_shift(1, (length & 127) + 128);
      length >>= 7;
    } else {
      o.write_shift(1, length);
      break;
    }
  }
  if (
    /*:: length != null &&*/
    length > 0 && is_buf(payload)
  ) ba.push(payload);
}
function shift_cell_xls(cell, tgt, opts) {
  var out = dup(cell);
  if (tgt.s) {
    if (out.cRel) out.c += tgt.s.c;
    if (out.rRel) out.r += tgt.s.r;
  } else {
    if (out.cRel) out.c += tgt.c;
    if (out.rRel) out.r += tgt.r;
  }
  if (!opts || opts.biff < 12) {
    while (out.c >= 256) out.c -= 256;
    while (out.r >= 65536) out.r -= 65536;
  }
  return out;
}
function shift_range_xls(cell, range, opts) {
  var out = dup(cell);
  out.s = shift_cell_xls(out.s, range.s, opts);
  out.e = shift_cell_xls(out.e, range.s, opts);
  return out;
}
function encode_cell_xls(c, biff) {
  if (c.cRel && c.c < 0) {
    c = dup(c);
    while (c.c < 0) c.c += biff > 8 ? 16384 : 256;
  }
  if (c.rRel && c.r < 0) {
    c = dup(c);
    while (c.r < 0) c.r += biff > 8 ? 1048576 : biff > 5 ? 65536 : 16384;
  }
  var s = encode_cell(c);
  if (!c.cRel && c.cRel != null) s = fix_col(s);
  if (!c.rRel && c.rRel != null) s = fix_row(s);
  return s;
}
function encode_range_xls(r, opts) {
  if (r.s.r == 0 && !r.s.rRel) {
    if (r.e.r == (opts.biff >= 12 ? 1048575 : opts.biff >= 8 ? 65536 : 16384) && !r.e.rRel) {
      return (r.s.cRel ? "" : "$") + encode_col(r.s.c) + ":" + (r.e.cRel ? "" : "$") + encode_col(r.e.c);
    }
  }
  if (r.s.c == 0 && !r.s.cRel) {
    if (r.e.c == (opts.biff >= 12 ? 16383 : 255) && !r.e.cRel) {
      return (r.s.rRel ? "" : "$") + encode_row(r.s.r) + ":" + (r.e.rRel ? "" : "$") + encode_row(r.e.r);
    }
  }
  return encode_cell_xls(r.s, opts.biff) + ":" + encode_cell_xls(r.e, opts.biff);
}
function decode_row(rowstr) {
  return parseInt(unfix_row(rowstr), 10) - 1;
}
function encode_row(row) {
  return "" + (row + 1);
}
function fix_row(cstr) {
  return cstr.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function unfix_row(cstr) {
  return cstr.replace(/\$(\d+)$/, "$1");
}
function decode_col(colstr) {
  var c = unfix_col(colstr), d = 0, i = 0;
  for (; i !== c.length; ++i) d = 26 * d + c.charCodeAt(i) - 64;
  return d - 1;
}
function encode_col(col) {
  if (col < 0) throw new Error("invalid column " + col);
  var s = "";
  for (++col; col; col = Math.floor((col - 1) / 26)) s = String.fromCharCode((col - 1) % 26 + 65) + s;
  return s;
}
function fix_col(cstr) {
  return cstr.replace(/^([A-Z])/, "$$$1");
}
function unfix_col(cstr) {
  return cstr.replace(/^\$([A-Z])/, "$1");
}
function split_cell(cstr) {
  return cstr.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function decode_cell(cstr) {
  var R = 0, C = 0;
  for (var i = 0; i < cstr.length; ++i) {
    var cc = cstr.charCodeAt(i);
    if (cc >= 48 && cc <= 57) R = 10 * R + (cc - 48);
    else if (cc >= 65 && cc <= 90) C = 26 * C + (cc - 64);
  }
  return { c: C - 1, r: R - 1 };
}
function encode_cell(cell) {
  var col = cell.c + 1;
  var s = "";
  for (; col; col = (col - 1) / 26 | 0) s = String.fromCharCode((col - 1) % 26 + 65) + s;
  return s + (cell.r + 1);
}
function decode_range(range) {
  var idx = range.indexOf(":");
  if (idx == -1) return { s: decode_cell(range), e: decode_cell(range) };
  return { s: decode_cell(range.slice(0, idx)), e: decode_cell(range.slice(idx + 1)) };
}
function encode_range(cs, ce) {
  if (typeof ce === "undefined" || typeof ce === "number") {
    return encode_range(cs.s, cs.e);
  }
  if (typeof cs !== "string") cs = encode_cell(cs);
  if (typeof ce !== "string") ce = encode_cell(ce);
  return cs == ce ? cs : cs + ":" + ce;
}
function safe_decode_range(range) {
  var o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
  var idx = 0, i = 0, cc = 0;
  var len = range.length;
  for (idx = 0; i < len; ++i) {
    if ((cc = range.charCodeAt(i) - 64) < 1 || cc > 26) break;
    idx = 26 * idx + cc;
  }
  o.s.c = --idx;
  for (idx = 0; i < len; ++i) {
    if ((cc = range.charCodeAt(i) - 48) < 0 || cc > 9) break;
    idx = 10 * idx + cc;
  }
  o.s.r = --idx;
  if (i === len || cc != 10) {
    o.e.c = o.s.c;
    o.e.r = o.s.r;
    return o;
  }
  ++i;
  for (idx = 0; i != len; ++i) {
    if ((cc = range.charCodeAt(i) - 64) < 1 || cc > 26) break;
    idx = 26 * idx + cc;
  }
  o.e.c = --idx;
  for (idx = 0; i != len; ++i) {
    if ((cc = range.charCodeAt(i) - 48) < 0 || cc > 9) break;
    idx = 10 * idx + cc;
  }
  o.e.r = --idx;
  return o;
}
function safe_format_cell(cell, v) {
  var q = cell.t == "d" && v instanceof Date;
  if (cell.z != null) try {
    return cell.w = SSF_format(cell.z, q ? datenum(v) : v);
  } catch (e) {
  }
  try {
    return cell.w = SSF_format((cell.XF || {}).numFmtId || (q ? 14 : 0), q ? datenum(v) : v);
  } catch (e) {
    return "" + v;
  }
}
function format_cell(cell, v, o) {
  if (cell == null || cell.t == null || cell.t == "z") return "";
  if (cell.w !== void 0) return cell.w;
  if (cell.t == "d" && !cell.z && o && o.dateNF) cell.z = o.dateNF;
  if (cell.t == "e") return BErr[cell.v] || cell.v;
  if (v == void 0) return safe_format_cell(cell, cell.v);
  return safe_format_cell(cell, v);
}
function sheet_to_workbook(sheet, opts) {
  var n = opts && opts.sheet ? opts.sheet : "Sheet1";
  var sheets = {};
  sheets[n] = sheet;
  return { SheetNames: [n], Sheets: sheets };
}
function sheet_add_aoa(_ws, data2, opts) {
  var o = opts || {};
  var dense = _ws ? Array.isArray(_ws) : o.dense;
  if (DENSE != null && dense == null) dense = DENSE;
  var ws = _ws || (dense ? [] : {});
  var _R = 0, _C = 0;
  if (ws && o.origin != null) {
    if (typeof o.origin == "number") _R = o.origin;
    else {
      var _origin = typeof o.origin == "string" ? decode_cell(o.origin) : o.origin;
      _R = _origin.r;
      _C = _origin.c;
    }
    if (!ws["!ref"]) ws["!ref"] = "A1:A1";
  }
  var range = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (ws["!ref"]) {
    var _range = safe_decode_range(ws["!ref"]);
    range.s.c = _range.s.c;
    range.s.r = _range.s.r;
    range.e.c = Math.max(range.e.c, _range.e.c);
    range.e.r = Math.max(range.e.r, _range.e.r);
    if (_R == -1) range.e.r = _R = _range.e.r + 1;
  }
  for (var R = 0; R != data2.length; ++R) {
    if (!data2[R]) continue;
    if (!Array.isArray(data2[R])) throw new Error("aoa_to_sheet expects an array of arrays");
    for (var C = 0; C != data2[R].length; ++C) {
      if (typeof data2[R][C] === "undefined") continue;
      var cell = { v: data2[R][C] };
      var __R = _R + R, __C = _C + C;
      if (range.s.r > __R) range.s.r = __R;
      if (range.s.c > __C) range.s.c = __C;
      if (range.e.r < __R) range.e.r = __R;
      if (range.e.c < __C) range.e.c = __C;
      if (data2[R][C] && typeof data2[R][C] === "object" && !Array.isArray(data2[R][C]) && !(data2[R][C] instanceof Date)) cell = data2[R][C];
      else {
        if (Array.isArray(cell.v)) {
          cell.f = data2[R][C][1];
          cell.v = cell.v[0];
        }
        if (cell.v === null) {
          if (cell.f) cell.t = "n";
          else if (o.nullError) {
            cell.t = "e";
            cell.v = 0;
          } else if (!o.sheetStubs) continue;
          else cell.t = "z";
        } else if (typeof cell.v === "number") cell.t = "n";
        else if (typeof cell.v === "boolean") cell.t = "b";
        else if (cell.v instanceof Date) {
          cell.z = o.dateNF || table_fmt[14];
          if (o.cellDates) {
            cell.t = "d";
            cell.w = SSF_format(cell.z, datenum(cell.v));
          } else {
            cell.t = "n";
            cell.v = datenum(cell.v);
            cell.w = SSF_format(cell.z, cell.v);
          }
        } else cell.t = "s";
      }
      if (dense) {
        if (!ws[__R]) ws[__R] = [];
        if (ws[__R][__C] && ws[__R][__C].z) cell.z = ws[__R][__C].z;
        ws[__R][__C] = cell;
      } else {
        var cell_ref = encode_cell({ c: __C, r: __R });
        if (ws[cell_ref] && ws[cell_ref].z) cell.z = ws[cell_ref].z;
        ws[cell_ref] = cell;
      }
    }
  }
  if (range.s.c < 1e7) ws["!ref"] = encode_range(range);
  return ws;
}
function aoa_to_sheet(data2, opts) {
  return sheet_add_aoa(null, data2, opts);
}
function parse_Int32LE(data2) {
  return data2.read_shift(4, "i");
}
function write_UInt32LE(x, o) {
  if (!o) o = new_buf(4);
  o.write_shift(4, x);
  return o;
}
function parse_XLWideString(data2) {
  var cchCharacters = data2.read_shift(4);
  return cchCharacters === 0 ? "" : data2.read_shift(cchCharacters, "dbcs");
}
function write_XLWideString(data2, o) {
  var _null = false;
  if (o == null) {
    _null = true;
    o = new_buf(4 + 2 * data2.length);
  }
  o.write_shift(4, data2.length);
  if (data2.length > 0) o.write_shift(0, data2, "dbcs");
  return _null ? o.slice(0, o.l) : o;
}
function parse_StrRun(data2) {
  return { ich: data2.read_shift(2), ifnt: data2.read_shift(2) };
}
function write_StrRun(run, o) {
  if (!o) o = new_buf(4);
  o.write_shift(2, run.ich || 0);
  o.write_shift(2, run.ifnt || 0);
  return o;
}
function parse_RichStr(data2, length) {
  var start = data2.l;
  var flags = data2.read_shift(1);
  var str = parse_XLWideString(data2);
  var rgsStrRun = [];
  var z = { t: str, h: str };
  if ((flags & 1) !== 0) {
    var dwSizeStrRun = data2.read_shift(4);
    for (var i = 0; i != dwSizeStrRun; ++i) rgsStrRun.push(parse_StrRun(data2));
    z.r = rgsStrRun;
  } else z.r = [{ ich: 0, ifnt: 0 }];
  data2.l = start + length;
  return z;
}
function write_RichStr(str, o) {
  var _null = false;
  if (o == null) {
    _null = true;
    o = new_buf(15 + 4 * str.t.length);
  }
  o.write_shift(1, 0);
  write_XLWideString(str.t, o);
  return _null ? o.slice(0, o.l) : o;
}
var parse_BrtCommentText = parse_RichStr;
function write_BrtCommentText(str, o) {
  var _null = false;
  if (o == null) {
    _null = true;
    o = new_buf(23 + 4 * str.t.length);
  }
  o.write_shift(1, 1);
  write_XLWideString(str.t, o);
  o.write_shift(4, 1);
  write_StrRun({ ich: 0, ifnt: 0 }, o);
  return _null ? o.slice(0, o.l) : o;
}
function parse_XLSBCell(data2) {
  var col = data2.read_shift(4);
  var iStyleRef = data2.read_shift(2);
  iStyleRef += data2.read_shift(1) << 16;
  data2.l++;
  return { c: col, iStyleRef };
}
function write_XLSBCell(cell, o) {
  if (o == null) o = new_buf(8);
  o.write_shift(-4, cell.c);
  o.write_shift(3, cell.iStyleRef || cell.s);
  o.write_shift(1, 0);
  return o;
}
function parse_XLSBShortCell(data2) {
  var iStyleRef = data2.read_shift(2);
  iStyleRef += data2.read_shift(1) << 16;
  data2.l++;
  return { c: -1, iStyleRef };
}
function write_XLSBShortCell(cell, o) {
  if (o == null) o = new_buf(4);
  o.write_shift(3, cell.iStyleRef || cell.s);
  o.write_shift(1, 0);
  return o;
}
var parse_XLSBCodeName = parse_XLWideString;
var write_XLSBCodeName = write_XLWideString;
function parse_XLNullableWideString(data2) {
  var cchCharacters = data2.read_shift(4);
  return cchCharacters === 0 || cchCharacters === 4294967295 ? "" : data2.read_shift(cchCharacters, "dbcs");
}
function write_XLNullableWideString(data2, o) {
  var _null = false;
  if (o == null) {
    _null = true;
    o = new_buf(127);
  }
  o.write_shift(4, data2.length > 0 ? data2.length : 4294967295);
  if (data2.length > 0) o.write_shift(0, data2, "dbcs");
  return _null ? o.slice(0, o.l) : o;
}
var parse_XLNameWideString = parse_XLWideString;
var parse_RelID = parse_XLNullableWideString;
var write_RelID = write_XLNullableWideString;
function parse_RkNumber(data2) {
  var b = data2.slice(data2.l, data2.l + 4);
  var fX100 = b[0] & 1, fInt = b[0] & 2;
  data2.l += 4;
  var RK = fInt === 0 ? __double([0, 0, 0, 0, b[0] & 252, b[1], b[2], b[3]], 0) : __readInt32LE(b, 0) >> 2;
  return fX100 ? RK / 100 : RK;
}
function write_RkNumber(data2, o) {
  if (o == null) o = new_buf(4);
  var fX100 = 0, fInt = 0, d100 = data2 * 100;
  if (data2 == (data2 | 0) && data2 >= -(1 << 29) && data2 < 1 << 29) {
    fInt = 1;
  } else if (d100 == (d100 | 0) && d100 >= -(1 << 29) && d100 < 1 << 29) {
    fInt = 1;
    fX100 = 1;
  }
  if (fInt) o.write_shift(-4, ((fX100 ? d100 : data2) << 2) + (fX100 + 2));
  else throw new Error("unsupported RkNumber " + data2);
}
function parse_RfX(data2) {
  var cell = { s: {}, e: {} };
  cell.s.r = data2.read_shift(4);
  cell.e.r = data2.read_shift(4);
  cell.s.c = data2.read_shift(4);
  cell.e.c = data2.read_shift(4);
  return cell;
}
function write_RfX(r, o) {
  if (!o) o = new_buf(16);
  o.write_shift(4, r.s.r);
  o.write_shift(4, r.e.r);
  o.write_shift(4, r.s.c);
  o.write_shift(4, r.e.c);
  return o;
}
var parse_UncheckedRfX = parse_RfX;
var write_UncheckedRfX = write_RfX;
function parse_Xnum(data2) {
  if (data2.length - data2.l < 8) throw "XLS Xnum Buffer underflow";
  return data2.read_shift(8, "f");
}
function write_Xnum(data2, o) {
  return (o || new_buf(8)).write_shift(8, data2, "f");
}
function parse_BrtColor(data2) {
  var out = {};
  var d = data2.read_shift(1);
  var xColorType = d >>> 1;
  var index = data2.read_shift(1);
  var nTS = data2.read_shift(2, "i");
  var bR = data2.read_shift(1);
  var bG = data2.read_shift(1);
  var bB = data2.read_shift(1);
  data2.l++;
  switch (xColorType) {
    case 0:
      out.auto = 1;
      break;
    case 1:
      out.index = index;
      var icv = XLSIcv[index];
      if (icv) out.rgb = rgb2Hex(icv);
      break;
    case 2:
      out.rgb = rgb2Hex([bR, bG, bB]);
      break;
    case 3:
      out.theme = index;
      break;
  }
  if (nTS != 0) out.tint = nTS > 0 ? nTS / 32767 : nTS / 32768;
  return out;
}
function write_BrtColor(color, o) {
  if (!o) o = new_buf(8);
  if (!color || color.auto) {
    o.write_shift(4, 0);
    o.write_shift(4, 0);
    return o;
  }
  if (color.index != null) {
    o.write_shift(1, 2);
    o.write_shift(1, color.index);
  } else if (color.theme != null) {
    o.write_shift(1, 6);
    o.write_shift(1, color.theme);
  } else {
    o.write_shift(1, 5);
    o.write_shift(1, 0);
  }
  var nTS = color.tint || 0;
  if (nTS > 0) nTS *= 32767;
  else if (nTS < 0) nTS *= 32768;
  o.write_shift(2, nTS);
  if (!color.rgb || color.theme != null) {
    o.write_shift(2, 0);
    o.write_shift(1, 0);
    o.write_shift(1, 0);
  } else {
    var rgb = color.rgb || "FFFFFF";
    if (typeof rgb == "number") rgb = ("000000" + rgb.toString(16)).slice(-6);
    o.write_shift(1, parseInt(rgb.slice(0, 2), 16));
    o.write_shift(1, parseInt(rgb.slice(2, 4), 16));
    o.write_shift(1, parseInt(rgb.slice(4, 6), 16));
    o.write_shift(1, 255);
  }
  return o;
}
function parse_FontFlags(data2) {
  var d = data2.read_shift(1);
  data2.l++;
  var out = {
    fBold: d & 1,
    fItalic: d & 2,
    fUnderline: d & 4,
    fStrikeout: d & 8,
    fOutline: d & 16,
    fShadow: d & 32,
    fCondense: d & 64,
    fExtend: d & 128
  };
  return out;
}
function write_FontFlags(font, o) {
  if (!o) o = new_buf(2);
  var grbit = (font.italic ? 2 : 0) | (font.strike ? 8 : 0) | (font.outline ? 16 : 0) | (font.shadow ? 32 : 0) | (font.condense ? 64 : 0) | (font.extend ? 128 : 0);
  o.write_shift(1, grbit);
  o.write_shift(1, 0);
  return o;
}
var VT_I2 = 2;
var VT_I4 = 3;
var VT_BOOL = 11;
var VT_UI4 = 19;
var VT_FILETIME = 64;
var VT_BLOB = 65;
var VT_CF = 71;
var VT_VECTOR_VARIANT = 4108;
var VT_VECTOR_LPSTR = 4126;
var VT_STRING = 80;
var DocSummaryPIDDSI = {
  /*::[*/
  1: { n: "CodePage", t: VT_I2 },
  /*::[*/
  2: { n: "Category", t: VT_STRING },
  /*::[*/
  3: { n: "PresentationFormat", t: VT_STRING },
  /*::[*/
  4: { n: "ByteCount", t: VT_I4 },
  /*::[*/
  5: { n: "LineCount", t: VT_I4 },
  /*::[*/
  6: { n: "ParagraphCount", t: VT_I4 },
  /*::[*/
  7: { n: "SlideCount", t: VT_I4 },
  /*::[*/
  8: { n: "NoteCount", t: VT_I4 },
  /*::[*/
  9: { n: "HiddenCount", t: VT_I4 },
  /*::[*/
  10: { n: "MultimediaClipCount", t: VT_I4 },
  /*::[*/
  11: { n: "ScaleCrop", t: VT_BOOL },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: VT_VECTOR_VARIANT
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: VT_VECTOR_LPSTR
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: VT_STRING },
  /*::[*/
  15: { n: "Company", t: VT_STRING },
  /*::[*/
  16: { n: "LinksUpToDate", t: VT_BOOL },
  /*::[*/
  17: { n: "CharacterCount", t: VT_I4 },
  /*::[*/
  19: { n: "SharedDoc", t: VT_BOOL },
  /*::[*/
  22: { n: "HyperlinksChanged", t: VT_BOOL },
  /*::[*/
  23: { n: "AppVersion", t: VT_I4, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: VT_BLOB },
  /*::[*/
  26: { n: "ContentType", t: VT_STRING },
  /*::[*/
  27: { n: "ContentStatus", t: VT_STRING },
  /*::[*/
  28: { n: "Language", t: VT_STRING },
  /*::[*/
  29: { n: "Version", t: VT_STRING },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: VT_UI4 },
  /*::[*/
  2147483651: { n: "Behavior", t: VT_UI4 },
  /*::[*/
  1919054434: {}
};
var SummaryPIDSI = {
  /*::[*/
  1: { n: "CodePage", t: VT_I2 },
  /*::[*/
  2: { n: "Title", t: VT_STRING },
  /*::[*/
  3: { n: "Subject", t: VT_STRING },
  /*::[*/
  4: { n: "Author", t: VT_STRING },
  /*::[*/
  5: { n: "Keywords", t: VT_STRING },
  /*::[*/
  6: { n: "Comments", t: VT_STRING },
  /*::[*/
  7: { n: "Template", t: VT_STRING },
  /*::[*/
  8: { n: "LastAuthor", t: VT_STRING },
  /*::[*/
  9: { n: "RevNumber", t: VT_STRING },
  /*::[*/
  10: { n: "EditTime", t: VT_FILETIME },
  /*::[*/
  11: { n: "LastPrinted", t: VT_FILETIME },
  /*::[*/
  12: { n: "CreatedDate", t: VT_FILETIME },
  /*::[*/
  13: { n: "ModifiedDate", t: VT_FILETIME },
  /*::[*/
  14: { n: "PageCount", t: VT_I4 },
  /*::[*/
  15: { n: "WordCount", t: VT_I4 },
  /*::[*/
  16: { n: "CharCount", t: VT_I4 },
  /*::[*/
  17: { n: "Thumbnail", t: VT_CF },
  /*::[*/
  18: { n: "Application", t: VT_STRING },
  /*::[*/
  19: { n: "DocSecurity", t: VT_I4 },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: VT_UI4 },
  /*::[*/
  2147483651: { n: "Behavior", t: VT_UI4 },
  /*::[*/
  1919054434: {}
};
function rgbify(arr) {
  return arr.map(function(x) {
    return [x >> 16 & 255, x >> 8 & 255, x & 255];
  });
}
var _XLSIcv = /* @__PURE__ */ rgbify([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]);
var XLSIcv = /* @__PURE__ */ dup(_XLSIcv);
var BErr = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
};
var ct2type = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  "sheet": "js"
};
var CT_LIST = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function new_ct() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function write_ct(ct, opts) {
  var type2ct = evert_arr(ct2type);
  var o = [], v;
  o[o.length] = XML_HEADER;
  o[o.length] = writextag("Types", null, {
    "xmlns": XMLNS.CT,
    "xmlns:xsd": XMLNS.xsd,
    "xmlns:xsi": XMLNS.xsi
  });
  o = o.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(x) {
    return writextag("Default", null, { "Extension": x[0], "ContentType": x[1] });
  }));
  var f1 = function(w) {
    if (ct[w] && ct[w].length > 0) {
      v = ct[w][0];
      o[o.length] = writextag("Override", null, {
        "PartName": (v[0] == "/" ? "" : "/") + v,
        "ContentType": CT_LIST[w][opts.bookType] || CT_LIST[w]["xlsx"]
      });
    }
  };
  var f2 = function(w) {
    (ct[w] || []).forEach(function(v2) {
      o[o.length] = writextag("Override", null, {
        "PartName": (v2[0] == "/" ? "" : "/") + v2,
        "ContentType": CT_LIST[w][opts.bookType] || CT_LIST[w]["xlsx"]
      });
    });
  };
  var f3 = function(t) {
    (ct[t] || []).forEach(function(v2) {
      o[o.length] = writextag("Override", null, {
        "PartName": (v2[0] == "/" ? "" : "/") + v2,
        "ContentType": type2ct[t][0]
      });
    });
  };
  f1("workbooks");
  f2("sheets");
  f2("charts");
  f3("themes");
  ["strs", "styles"].forEach(f1);
  ["coreprops", "extprops", "custprops"].forEach(f3);
  f3("vba");
  f3("comments");
  f3("threadedcomments");
  f3("drawings");
  f2("metadata");
  f3("people");
  if (o.length > 2) {
    o[o.length] = "</Types>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
var RELS = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function get_rels_path(file) {
  var n = file.lastIndexOf("/");
  return file.slice(0, n + 1) + "_rels/" + file.slice(n + 1) + ".rels";
}
function write_rels(rels) {
  var o = [XML_HEADER, writextag("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    "xmlns": XMLNS.RELS
  })];
  keys(rels["!id"]).forEach(function(rid) {
    o[o.length] = writextag("Relationship", null, rels["!id"][rid]);
  });
  if (o.length > 2) {
    o[o.length] = "</Relationships>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function add_rels(rels, rId, f, type, relobj, targetmode) {
  if (!relobj) relobj = {};
  if (!rels["!id"]) rels["!id"] = {};
  if (!rels["!idx"]) rels["!idx"] = 1;
  if (rId < 0) for (rId = rels["!idx"]; rels["!id"]["rId" + rId]; ++rId) {
  }
  rels["!idx"] = rId + 1;
  relobj.Id = "rId" + rId;
  relobj.Type = type;
  relobj.Target = f;
  if (targetmode) relobj.TargetMode = targetmode;
  else if ([RELS.HLINK, RELS.XPATH, RELS.XMISS].indexOf(relobj.Type) > -1) relobj.TargetMode = "External";
  if (rels["!id"][relobj.Id]) throw new Error("Cannot rewrite rId " + rId);
  rels["!id"][relobj.Id] = relobj;
  rels[("/" + relobj.Target).replace("//", "/")] = relobj;
  return rId;
}
function write_manifest(manifest) {
  var o = [XML_HEADER];
  o.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n');
  o.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
  for (var i = 0; i < manifest.length; ++i) o.push('  <manifest:file-entry manifest:full-path="' + manifest[i][0] + '" manifest:media-type="' + manifest[i][1] + '"/>\n');
  o.push("</manifest:manifest>");
  return o.join("");
}
function write_rdf_type(file, res, tag) {
  return [
    '  <rdf:Description rdf:about="' + file + '">\n',
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (tag || "odf") + "#" + res + '"/>\n',
    "  </rdf:Description>\n"
  ].join("");
}
function write_rdf_has(base, file) {
  return [
    '  <rdf:Description rdf:about="' + base + '">\n',
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + file + '"/>\n',
    "  </rdf:Description>\n"
  ].join("");
}
function write_rdf(rdf) {
  var o = [XML_HEADER];
  o.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
  for (var i = 0; i != rdf.length; ++i) {
    o.push(write_rdf_type(rdf[i][0], rdf[i][1]));
    o.push(write_rdf_has("", rdf[i][0]));
  }
  o.push(write_rdf_type("", "Document", "pkg"));
  o.push("</rdf:RDF>");
  return o.join("");
}
function write_meta_ods() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + XLSX.version + "</meta:generator></office:meta></office:document-meta>";
}
var CORE_PROPS = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function cp_doit(f, g, h, o, p) {
  if (p[f] != null || g == null || g === "") return;
  p[f] = g;
  g = escapexml(g);
  o[o.length] = h ? writextag(f, g, h) : writetag(f, g);
}
function write_core_props(cp, _opts) {
  var opts = _opts || {};
  var o = [XML_HEADER, writextag("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": XMLNS.CORE_PROPS,
    "xmlns:dc": XMLNS.dc,
    "xmlns:dcterms": XMLNS.dcterms,
    "xmlns:dcmitype": XMLNS.dcmitype,
    "xmlns:xsi": XMLNS.xsi
  })], p = {};
  if (!cp && !opts.Props) return o.join("");
  if (cp) {
    if (cp.CreatedDate != null) cp_doit("dcterms:created", typeof cp.CreatedDate === "string" ? cp.CreatedDate : write_w3cdtf(cp.CreatedDate, opts.WTF), { "xsi:type": "dcterms:W3CDTF" }, o, p);
    if (cp.ModifiedDate != null) cp_doit("dcterms:modified", typeof cp.ModifiedDate === "string" ? cp.ModifiedDate : write_w3cdtf(cp.ModifiedDate, opts.WTF), { "xsi:type": "dcterms:W3CDTF" }, o, p);
  }
  for (var i = 0; i != CORE_PROPS.length; ++i) {
    var f = CORE_PROPS[i];
    var v = opts.Props && opts.Props[f[1]] != null ? opts.Props[f[1]] : cp ? cp[f[1]] : null;
    if (v === true) v = "1";
    else if (v === false) v = "0";
    else if (typeof v == "number") v = String(v);
    if (v != null) cp_doit(f[0], v, null, o, p);
  }
  if (o.length > 2) {
    o[o.length] = "</cp:coreProperties>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
var EXT_PROPS = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
];
var PseudoPropsPairs = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function write_ext_props(cp) {
  var o = [], W = writextag;
  if (!cp) cp = {};
  cp.Application = "SheetJS";
  o[o.length] = XML_HEADER;
  o[o.length] = writextag("Properties", null, {
    "xmlns": XMLNS.EXT_PROPS,
    "xmlns:vt": XMLNS.vt
  });
  EXT_PROPS.forEach(function(f) {
    if (cp[f[1]] === void 0) return;
    var v;
    switch (f[2]) {
      case "string":
        v = escapexml(String(cp[f[1]]));
        break;
      case "bool":
        v = cp[f[1]] ? "true" : "false";
        break;
    }
    if (v !== void 0) o[o.length] = W(f[0], v);
  });
  o[o.length] = W("HeadingPairs", W("vt:vector", W("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + W("vt:variant", W("vt:i4", String(cp.Worksheets))), { size: 2, baseType: "variant" }));
  o[o.length] = W("TitlesOfParts", W("vt:vector", cp.SheetNames.map(function(s) {
    return "<vt:lpstr>" + escapexml(s) + "</vt:lpstr>";
  }).join(""), { size: cp.Worksheets, baseType: "lpstr" }));
  if (o.length > 2) {
    o[o.length] = "</Properties>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function write_cust_props(cp) {
  var o = [XML_HEADER, writextag("Properties", null, {
    "xmlns": XMLNS.CUST_PROPS,
    "xmlns:vt": XMLNS.vt
  })];
  if (!cp) return o.join("");
  var pid = 1;
  keys(cp).forEach(function custprop(k) {
    ++pid;
    o[o.length] = writextag("property", write_vt(cp[k], true), {
      "fmtid": "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      "pid": pid,
      "name": escapexml(k)
    });
  });
  if (o.length > 2) {
    o[o.length] = "</Properties>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
var XLMLDocPropsMap = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
function xlml_write_docprops(Props, opts) {
  var o = [];
  keys(XLMLDocPropsMap).map(function(m) {
    for (var i = 0; i < CORE_PROPS.length; ++i) if (CORE_PROPS[i][1] == m) return CORE_PROPS[i];
    for (i = 0; i < EXT_PROPS.length; ++i) if (EXT_PROPS[i][1] == m) return EXT_PROPS[i];
    throw m;
  }).forEach(function(p) {
    if (Props[p[1]] == null) return;
    var m = opts && opts.Props && opts.Props[p[1]] != null ? opts.Props[p[1]] : Props[p[1]];
    switch (p[2]) {
      case "date":
        m = new Date(m).toISOString().replace(/\.\d*Z/, "Z");
        break;
    }
    if (typeof m == "number") m = String(m);
    else if (m === true || m === false) {
      m = m ? "1" : "0";
    } else if (m instanceof Date) m = new Date(m).toISOString().replace(/\.\d*Z/, "");
    o.push(writetag(XLMLDocPropsMap[p[1]] || p[1], m));
  });
  return writextag("DocumentProperties", o.join(""), { xmlns: XLMLNS.o });
}
function xlml_write_custprops(Props, Custprops) {
  var BLACKLIST = ["Worksheets", "SheetNames"];
  var T = "CustomDocumentProperties";
  var o = [];
  if (Props) keys(Props).forEach(function(k) {
    if (!Object.prototype.hasOwnProperty.call(Props, k)) return;
    for (var i = 0; i < CORE_PROPS.length; ++i) if (k == CORE_PROPS[i][1]) return;
    for (i = 0; i < EXT_PROPS.length; ++i) if (k == EXT_PROPS[i][1]) return;
    for (i = 0; i < BLACKLIST.length; ++i) if (k == BLACKLIST[i]) return;
    var m = Props[k];
    var t = "string";
    if (typeof m == "number") {
      t = "float";
      m = String(m);
    } else if (m === true || m === false) {
      t = "boolean";
      m = m ? "1" : "0";
    } else m = String(m);
    o.push(writextag(escapexmltag(k), m, { "dt:dt": t }));
  });
  if (Custprops) keys(Custprops).forEach(function(k) {
    if (!Object.prototype.hasOwnProperty.call(Custprops, k)) return;
    if (Props && Object.prototype.hasOwnProperty.call(Props, k)) return;
    var m = Custprops[k];
    var t = "string";
    if (typeof m == "number") {
      t = "float";
      m = String(m);
    } else if (m === true || m === false) {
      t = "boolean";
      m = m ? "1" : "0";
    } else if (m instanceof Date) {
      t = "dateTime.tz";
      m = m.toISOString();
    } else m = String(m);
    o.push(writextag(escapexmltag(k), m, { "dt:dt": t }));
  });
  return "<" + T + ' xmlns="' + XLMLNS.o + '">' + o.join("") + "</" + T + ">";
}
function write_FILETIME(time) {
  var date = typeof time == "string" ? new Date(Date.parse(time)) : time;
  var t = date.getTime() / 1e3 + 11644473600;
  var l = t % Math.pow(2, 32), h = (t - l) / Math.pow(2, 32);
  l *= 1e7;
  h *= 1e7;
  var w = l / Math.pow(2, 32) | 0;
  if (w > 0) {
    l = l % Math.pow(2, 32);
    h += w;
  }
  var o = new_buf(8);
  o.write_shift(4, l);
  o.write_shift(4, h);
  return o;
}
function write_TypedPropertyValue(type, value2) {
  var o = new_buf(4), p = new_buf(4);
  o.write_shift(4, type == 80 ? 31 : type);
  switch (type) {
    case 3:
      p.write_shift(-4, value2);
      break;
    case 5:
      p = new_buf(8);
      p.write_shift(8, value2, "f");
      break;
    case 11:
      p.write_shift(4, value2 ? 1 : 0);
      break;
    case 64:
      p = write_FILETIME(value2);
      break;
    case 31:
    case 80:
      p = new_buf(4 + 2 * (value2.length + 1) + (value2.length % 2 ? 0 : 2));
      p.write_shift(4, value2.length + 1);
      p.write_shift(0, value2, "dbcs");
      while (p.l != p.length) p.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + type + " " + value2);
  }
  return bconcat([o, p]);
}
var XLSPSSkip = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function guess_property_type(val) {
  switch (typeof val) {
    case "boolean":
      return 11;
    case "number":
      return (val | 0) == val ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (val instanceof Date) return 64;
      break;
  }
  return -1;
}
function write_PropertySet(entries, RE, PIDSI) {
  var hdr = new_buf(8), piao = [], prop = [];
  var sz = 8, i = 0;
  var pr = new_buf(8), pio = new_buf(8);
  pr.write_shift(4, 2);
  pr.write_shift(4, 1200);
  pio.write_shift(4, 1);
  prop.push(pr);
  piao.push(pio);
  sz += 8 + pr.length;
  if (!RE) {
    pio = new_buf(8);
    pio.write_shift(4, 0);
    piao.unshift(pio);
    var bufs = [new_buf(4)];
    bufs[0].write_shift(4, entries.length);
    for (i = 0; i < entries.length; ++i) {
      var value2 = entries[i][0];
      pr = new_buf(4 + 4 + 2 * (value2.length + 1) + (value2.length % 2 ? 0 : 2));
      pr.write_shift(4, i + 2);
      pr.write_shift(4, value2.length + 1);
      pr.write_shift(0, value2, "dbcs");
      while (pr.l != pr.length) pr.write_shift(1, 0);
      bufs.push(pr);
    }
    pr = bconcat(bufs);
    prop.unshift(pr);
    sz += 8 + pr.length;
  }
  for (i = 0; i < entries.length; ++i) {
    if (RE && !RE[entries[i][0]]) continue;
    if (XLSPSSkip.indexOf(entries[i][0]) > -1 || PseudoPropsPairs.indexOf(entries[i][0]) > -1) continue;
    if (entries[i][1] == null) continue;
    var val = entries[i][1], idx = 0;
    if (RE) {
      idx = +RE[entries[i][0]];
      var pinfo = PIDSI[idx];
      if (pinfo.p == "version" && typeof val == "string") {
        var arr = val.split(".");
        val = (+arr[0] << 16) + (+arr[1] || 0);
      }
      pr = write_TypedPropertyValue(pinfo.t, val);
    } else {
      var T = guess_property_type(val);
      if (T == -1) {
        T = 31;
        val = String(val);
      }
      pr = write_TypedPropertyValue(T, val);
    }
    prop.push(pr);
    pio = new_buf(8);
    pio.write_shift(4, !RE ? 2 + i : idx);
    piao.push(pio);
    sz += 8 + pr.length;
  }
  var w = 8 * (prop.length + 1);
  for (i = 0; i < prop.length; ++i) {
    piao[i].write_shift(4, w);
    w += prop[i].length;
  }
  hdr.write_shift(4, sz);
  hdr.write_shift(4, prop.length);
  return bconcat([hdr].concat(piao).concat(prop));
}
function write_PropertySetStream(entries, clsid, RE, PIDSI, entries2, clsid2) {
  var hdr = new_buf(entries2 ? 68 : 48);
  var bufs = [hdr];
  hdr.write_shift(2, 65534);
  hdr.write_shift(2, 0);
  hdr.write_shift(4, 842412599);
  hdr.write_shift(16, CFB.utils.consts.HEADER_CLSID, "hex");
  hdr.write_shift(4, entries2 ? 2 : 1);
  hdr.write_shift(16, clsid, "hex");
  hdr.write_shift(4, entries2 ? 68 : 48);
  var ps0 = write_PropertySet(entries, RE, PIDSI);
  bufs.push(ps0);
  if (entries2) {
    var ps1 = write_PropertySet(entries2, null, null);
    hdr.write_shift(16, clsid2, "hex");
    hdr.write_shift(4, 68 + ps0.length);
    bufs.push(ps1);
  }
  return bconcat(bufs);
}
function writezeroes(n, o) {
  if (!o) o = new_buf(n);
  for (var j = 0; j < n; ++j) o.write_shift(1, 0);
  return o;
}
function parsebool(blob, length) {
  return blob.read_shift(length) === 1;
}
function writebool(v, o) {
  if (!o) o = new_buf(2);
  o.write_shift(2, +!!v);
  return o;
}
function parseuint16(blob) {
  return blob.read_shift(2, "u");
}
function writeuint16(v, o) {
  if (!o) o = new_buf(2);
  o.write_shift(2, v);
  return o;
}
function write_Bes(v, t, o) {
  if (!o) o = new_buf(2);
  o.write_shift(1, t == "e" ? +v : +!!v);
  o.write_shift(1, t == "e" ? 1 : 0);
  return o;
}
function parse_ShortXLUnicodeString(blob, length, opts) {
  var cch = blob.read_shift(opts && opts.biff >= 12 ? 2 : 1);
  var encoding = "sbcs-cont";
  var cp = current_codepage;
  if (opts && opts.biff >= 8) current_codepage = 1200;
  if (!opts || opts.biff == 8) {
    var fHighByte = blob.read_shift(1);
    if (fHighByte) {
      encoding = "dbcs-cont";
    }
  } else if (opts.biff == 12) {
    encoding = "wstr";
  }
  if (opts.biff >= 2 && opts.biff <= 5) encoding = "cpstr";
  var o = cch ? blob.read_shift(cch, encoding) : "";
  current_codepage = cp;
  return o;
}
function write_XLUnicodeRichExtendedString(xlstr) {
  var str = xlstr.t || "", nfmts = 1;
  var hdr = new_buf(3 + (nfmts > 1 ? 2 : 0));
  hdr.write_shift(2, str.length);
  hdr.write_shift(1, (nfmts > 1 ? 8 : 0) | 1);
  if (nfmts > 1) hdr.write_shift(2, nfmts);
  var otext = new_buf(2 * str.length);
  otext.write_shift(2 * str.length, str, "utf16le");
  var out = [hdr, otext];
  return bconcat(out);
}
function parse_XLUnicodeStringNoCch(blob, cch, opts) {
  var retval;
  if (opts) {
    if (opts.biff >= 2 && opts.biff <= 5) return blob.read_shift(cch, "cpstr");
    if (opts.biff >= 12) return blob.read_shift(cch, "dbcs-cont");
  }
  var fHighByte = blob.read_shift(1);
  if (fHighByte === 0) {
    retval = blob.read_shift(cch, "sbcs-cont");
  } else {
    retval = blob.read_shift(cch, "dbcs-cont");
  }
  return retval;
}
function parse_XLUnicodeString(blob, length, opts) {
  var cch = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  if (cch === 0) {
    blob.l++;
    return "";
  }
  return parse_XLUnicodeStringNoCch(blob, cch, opts);
}
function parse_XLUnicodeString2(blob, length, opts) {
  if (opts.biff > 5) return parse_XLUnicodeString(blob, length, opts);
  var cch = blob.read_shift(1);
  if (cch === 0) {
    blob.l++;
    return "";
  }
  return blob.read_shift(cch, opts.biff <= 4 || !blob.lens ? "cpstr" : "sbcs-cont");
}
function write_XLUnicodeString(str, opts, o) {
  if (!o) o = new_buf(3 + 2 * str.length);
  o.write_shift(2, str.length);
  o.write_shift(1, 1);
  o.write_shift(31, str, "utf16le");
  return o;
}
function write_HyperlinkString(str, o) {
  if (!o) o = new_buf(6 + str.length * 2);
  o.write_shift(4, 1 + str.length);
  for (var i = 0; i < str.length; ++i) o.write_shift(2, str.charCodeAt(i));
  o.write_shift(2, 0);
  return o;
}
function write_Hyperlink(hl) {
  var out = new_buf(512), i = 0;
  var Target = hl.Target;
  if (Target.slice(0, 7) == "file://") Target = Target.slice(7);
  var hashidx = Target.indexOf("#");
  var F = hashidx > -1 ? 31 : 23;
  switch (Target.charAt(0)) {
    case "#":
      F = 28;
      break;
    case ".":
      F &= ~2;
      break;
  }
  out.write_shift(4, 2);
  out.write_shift(4, F);
  var data2 = [8, 6815827, 6619237, 4849780, 83];
  for (i = 0; i < data2.length; ++i) out.write_shift(4, data2[i]);
  if (F == 28) {
    Target = Target.slice(1);
    write_HyperlinkString(Target, out);
  } else if (F & 2) {
    data2 = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
    for (i = 0; i < data2.length; ++i) out.write_shift(1, parseInt(data2[i], 16));
    var Pretarget = hashidx > -1 ? Target.slice(0, hashidx) : Target;
    out.write_shift(4, 2 * (Pretarget.length + 1));
    for (i = 0; i < Pretarget.length; ++i) out.write_shift(2, Pretarget.charCodeAt(i));
    out.write_shift(2, 0);
    if (F & 8) write_HyperlinkString(hashidx > -1 ? Target.slice(hashidx + 1) : "", out);
  } else {
    data2 = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" ");
    for (i = 0; i < data2.length; ++i) out.write_shift(1, parseInt(data2[i], 16));
    var P = 0;
    while (Target.slice(P * 3, P * 3 + 3) == "../" || Target.slice(P * 3, P * 3 + 3) == "..\\") ++P;
    out.write_shift(2, P);
    out.write_shift(4, Target.length - 3 * P + 1);
    for (i = 0; i < Target.length - 3 * P; ++i) out.write_shift(1, Target.charCodeAt(i + 3 * P) & 255);
    out.write_shift(1, 0);
    out.write_shift(2, 65535);
    out.write_shift(2, 57005);
    for (i = 0; i < 6; ++i) out.write_shift(4, 0);
  }
  return out.slice(0, out.l);
}
function write_XLSCell(R, C, ixfe, o) {
  if (!o) o = new_buf(6);
  o.write_shift(2, R);
  o.write_shift(2, C);
  o.write_shift(2, ixfe || 0);
  return o;
}
function parse_XTI(blob, length, opts) {
  var w = opts.biff > 8 ? 4 : 2;
  var iSupBook = blob.read_shift(w), itabFirst = blob.read_shift(w, "i"), itabLast = blob.read_shift(w, "i");
  return [iSupBook, itabFirst, itabLast];
}
function parse_Ref8U(blob) {
  var rwFirst = blob.read_shift(2);
  var rwLast = blob.read_shift(2);
  var colFirst = blob.read_shift(2);
  var colLast = blob.read_shift(2);
  return { s: { c: colFirst, r: rwFirst }, e: { c: colLast, r: rwLast } };
}
function write_Ref8U(r, o) {
  if (!o) o = new_buf(8);
  o.write_shift(2, r.s.r);
  o.write_shift(2, r.e.r);
  o.write_shift(2, r.s.c);
  o.write_shift(2, r.e.c);
  return o;
}
function write_BOF(wb, t, o) {
  var h = 1536, w = 16;
  switch (o.bookType) {
    case "biff8":
      break;
    case "biff5":
      h = 1280;
      w = 8;
      break;
    case "biff4":
      h = 4;
      w = 6;
      break;
    case "biff3":
      h = 3;
      w = 6;
      break;
    case "biff2":
      h = 2;
      w = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var out = new_buf(w);
  out.write_shift(2, h);
  out.write_shift(2, t);
  if (w > 4) out.write_shift(2, 29282);
  if (w > 6) out.write_shift(2, 1997);
  if (w > 8) {
    out.write_shift(2, 49161);
    out.write_shift(2, 1);
    out.write_shift(2, 1798);
    out.write_shift(2, 0);
  }
  return out;
}
function write_WriteAccess(s, opts) {
  var b8 = !opts || opts.biff == 8;
  var o = new_buf(b8 ? 112 : 54);
  o.write_shift(opts.biff == 8 ? 2 : 1, 7);
  if (b8) o.write_shift(1, 0);
  o.write_shift(4, 859007059);
  o.write_shift(4, 5458548 | (b8 ? 0 : 536870912));
  while (o.l < o.length) o.write_shift(1, b8 ? 0 : 32);
  return o;
}
function write_BoundSheet8(data2, opts) {
  var w = !opts || opts.biff >= 8 ? 2 : 1;
  var o = new_buf(8 + w * data2.name.length);
  o.write_shift(4, data2.pos);
  o.write_shift(1, data2.hs || 0);
  o.write_shift(1, data2.dt);
  o.write_shift(1, data2.name.length);
  if (opts.biff >= 8) o.write_shift(1, 1);
  o.write_shift(w * data2.name.length, data2.name, opts.biff < 8 ? "sbcs" : "utf16le");
  var out = o.slice(0, o.l);
  out.l = o.l;
  return out;
}
function write_SST(sst, opts) {
  var header = new_buf(8);
  header.write_shift(4, sst.Count);
  header.write_shift(4, sst.Unique);
  var strs = [];
  for (var j = 0; j < sst.length; ++j) strs[j] = write_XLUnicodeRichExtendedString(sst[j], opts);
  var o = bconcat([header].concat(strs));
  o.parts = [header.length].concat(strs.map(function(str) {
    return str.length;
  }));
  return o;
}
function write_Window1() {
  var o = new_buf(18);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(2, 29280);
  o.write_shift(2, 17600);
  o.write_shift(2, 56);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(2, 1);
  o.write_shift(2, 500);
  return o;
}
function write_Window2(view) {
  var o = new_buf(18), f = 1718;
  if (view && view.RTL) f |= 64;
  o.write_shift(2, f);
  o.write_shift(4, 0);
  o.write_shift(4, 64);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  return o;
}
function write_Font(data2, opts) {
  var name = data2.name || "Arial";
  var b5 = opts && opts.biff == 5, w = b5 ? 15 + name.length : 16 + 2 * name.length;
  var o = new_buf(w);
  o.write_shift(2, (data2.sz || 12) * 20);
  o.write_shift(4, 0);
  o.write_shift(2, 400);
  o.write_shift(4, 0);
  o.write_shift(2, 0);
  o.write_shift(1, name.length);
  if (!b5) o.write_shift(1, 1);
  o.write_shift((b5 ? 1 : 2) * name.length, name, b5 ? "sbcs" : "utf16le");
  return o;
}
function write_LabelSst(R, C, v, os) {
  var o = new_buf(10);
  write_XLSCell(R, C, os, o);
  o.write_shift(4, v);
  return o;
}
function write_Label(R, C, v, os, opts) {
  var b8 = !opts || opts.biff == 8;
  var o = new_buf(6 + 2 + +b8 + (1 + b8) * v.length);
  write_XLSCell(R, C, os, o);
  o.write_shift(2, v.length);
  if (b8) o.write_shift(1, 1);
  o.write_shift((1 + b8) * v.length, v, b8 ? "utf16le" : "sbcs");
  return o;
}
function write_Format(i, f, opts, o) {
  var b5 = opts && opts.biff == 5;
  if (!o) o = new_buf(b5 ? 3 + f.length : 5 + 2 * f.length);
  o.write_shift(2, i);
  o.write_shift(b5 ? 1 : 2, f.length);
  if (!b5) o.write_shift(1, 1);
  o.write_shift((b5 ? 1 : 2) * f.length, f, b5 ? "sbcs" : "utf16le");
  var out = o.length > o.l ? o.slice(0, o.l) : o;
  if (out.l == null) out.l = out.length;
  return out;
}
function write_Dimensions(range, opts) {
  var w = opts.biff == 8 || !opts.biff ? 4 : 2;
  var o = new_buf(2 * w + 6);
  o.write_shift(w, range.s.r);
  o.write_shift(w, range.e.r + 1);
  o.write_shift(2, range.s.c);
  o.write_shift(2, range.e.c + 1);
  o.write_shift(2, 0);
  return o;
}
function write_XF(data2, ixfeP, opts, o) {
  var b5 = opts && opts.biff == 5;
  if (!o) o = new_buf(b5 ? 16 : 20);
  o.write_shift(2, 0);
  if (data2.style) {
    o.write_shift(2, data2.numFmtId || 0);
    o.write_shift(2, 65524);
  } else {
    o.write_shift(2, data2.numFmtId || 0);
    o.write_shift(2, ixfeP << 4);
  }
  var f = 0;
  if (data2.numFmtId > 0 && b5) f |= 1024;
  o.write_shift(4, f);
  o.write_shift(4, 0);
  if (!b5) o.write_shift(4, 0);
  o.write_shift(2, 0);
  return o;
}
function write_Guts(guts) {
  var o = new_buf(8);
  o.write_shift(4, 0);
  o.write_shift(2, guts[0] ? guts[0] + 1 : 0);
  o.write_shift(2, guts[1] ? guts[1] + 1 : 0);
  return o;
}
function write_BoolErr(R, C, v, os, opts, t) {
  var o = new_buf(8);
  write_XLSCell(R, C, os, o);
  write_Bes(v, t, o);
  return o;
}
function write_Number(R, C, v, os) {
  var o = new_buf(14);
  write_XLSCell(R, C, os, o);
  write_Xnum(v, o);
  return o;
}
function parse_ExternSheet(blob, length, opts) {
  if (opts.biff < 8) return parse_BIFF5ExternSheet(blob, length, opts);
  var o = [], target = blob.l + length, len = blob.read_shift(opts.biff > 8 ? 4 : 2);
  while (len-- !== 0) o.push(parse_XTI(blob, opts.biff > 8 ? 12 : 6, opts));
  if (blob.l != target) throw new Error("Bad ExternSheet: " + blob.l + " != " + target);
  return o;
}
function parse_BIFF5ExternSheet(blob, length, opts) {
  if (blob[blob.l + 1] == 3) blob[blob.l]++;
  var o = parse_ShortXLUnicodeString(blob, length, opts);
  return o.charCodeAt(0) == 3 ? o.slice(1) : o;
}
function write_MergeCells(merges) {
  var o = new_buf(2 + merges.length * 8);
  o.write_shift(2, merges.length);
  for (var i = 0; i < merges.length; ++i) write_Ref8U(merges[i], o);
  return o;
}
function write_HLink(hl) {
  var O = new_buf(24);
  var ref = decode_cell(hl[0]);
  O.write_shift(2, ref.r);
  O.write_shift(2, ref.r);
  O.write_shift(2, ref.c);
  O.write_shift(2, ref.c);
  var clsid = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
  for (var i = 0; i < 16; ++i) O.write_shift(1, parseInt(clsid[i], 16));
  return bconcat([O, write_Hyperlink(hl[1])]);
}
function write_HLinkTooltip(hl) {
  var TT = hl[1].Tooltip;
  var O = new_buf(10 + 2 * (TT.length + 1));
  O.write_shift(2, 2048);
  var ref = decode_cell(hl[0]);
  O.write_shift(2, ref.r);
  O.write_shift(2, ref.r);
  O.write_shift(2, ref.c);
  O.write_shift(2, ref.c);
  for (var i = 0; i < TT.length; ++i) O.write_shift(2, TT.charCodeAt(i));
  O.write_shift(2, 0);
  return O;
}
function write_Country(o) {
  if (!o) o = new_buf(4);
  o.write_shift(2, 1);
  o.write_shift(2, 1);
  return o;
}
function parse_ColInfo(blob, length, opts) {
  if (!opts.cellStyles) return parsenoop(blob, length);
  var w = opts && opts.biff >= 12 ? 4 : 2;
  var colFirst = blob.read_shift(w);
  var colLast = blob.read_shift(w);
  var coldx = blob.read_shift(w);
  var ixfe = blob.read_shift(w);
  var flags = blob.read_shift(2);
  if (w == 2) blob.l += 2;
  var o = { s: colFirst, e: colLast, w: coldx, ixfe, flags };
  if (opts.biff >= 5 || !opts.biff) o.level = flags >> 8 & 7;
  return o;
}
function write_ColInfo(col, idx) {
  var o = new_buf(12);
  o.write_shift(2, idx);
  o.write_shift(2, idx);
  o.write_shift(2, col.width * 256);
  o.write_shift(2, 0);
  var f = 0;
  if (col.hidden) f |= 1;
  o.write_shift(1, f);
  f = col.level || 0;
  o.write_shift(1, f);
  o.write_shift(2, 0);
  return o;
}
function write_RRTabId(n) {
  var out = new_buf(2 * n);
  for (var i = 0; i < n; ++i) out.write_shift(2, i + 1);
  return out;
}
function write_BIFF2NUM(r, c, val) {
  var out = new_buf(15);
  write_BIFF2Cell(out, r, c);
  out.write_shift(8, val, "f");
  return out;
}
function write_BIFF2INT(r, c, val) {
  var out = new_buf(9);
  write_BIFF2Cell(out, r, c);
  out.write_shift(2, val);
  return out;
}
var DBF = /* @__PURE__ */ (function() {
  var dbf_codepage_map = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  };
  var dbf_reverse_map = evert({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function dbf_to_aoa(buf, opts) {
    var out = [];
    var d = new_raw_buf(1);
    switch (opts.type) {
      case "base64":
        d = s2a(Base64_decode(buf));
        break;
      case "binary":
        d = s2a(buf);
        break;
      case "buffer":
      case "array":
        d = buf;
        break;
    }
    prep_blob(d, 0);
    var ft = d.read_shift(1);
    var memo2 = !!(ft & 136);
    var vfp = false, l7 = false;
    switch (ft) {
      case 2:
        break;
      // dBASE II
      case 3:
        break;
      // dBASE III
      case 48:
        vfp = true;
        memo2 = true;
        break;
      // VFP
      case 49:
        vfp = true;
        memo2 = true;
        break;
      // VFP with autoincrement
      // 0x43 dBASE IV SQL table files
      // 0x63 dBASE IV SQL system files
      case 131:
        break;
      // dBASE III with memo
      case 139:
        break;
      // dBASE IV with memo
      case 140:
        l7 = true;
        break;
      // dBASE Level 7 with memo
      // case 0xCB dBASE IV SQL table files with memo
      case 245:
        break;
      // FoxPro 2.x with memo
      // case 0xFB FoxBASE
      default:
        throw new Error("DBF Unsupported Version: " + ft.toString(16));
    }
    var nrow = 0, fpos = 521;
    if (ft == 2) nrow = d.read_shift(2);
    d.l += 3;
    if (ft != 2) nrow = d.read_shift(4);
    if (nrow > 1048576) nrow = 1e6;
    if (ft != 2) fpos = d.read_shift(2);
    var rlen = d.read_shift(2);
    var current_cp = opts.codepage || 1252;
    if (ft != 2) {
      d.l += 16;
      d.read_shift(1);
      if (d[d.l] !== 0) current_cp = dbf_codepage_map[d[d.l]];
      d.l += 1;
      d.l += 2;
    }
    if (l7) d.l += 36;
    var fields = [], field = {};
    var hend = Math.min(d.length, ft == 2 ? 521 : fpos - 10 - (vfp ? 264 : 0));
    var ww = l7 ? 32 : 11;
    while (d.l < hend && d[d.l] != 13) {
      field = {};
      field.name = $cptable.utils.decode(current_cp, d.slice(d.l, d.l + ww)).replace(/[\u0000\r\n].*$/g, "");
      d.l += ww;
      field.type = String.fromCharCode(d.read_shift(1));
      if (ft != 2 && !l7) field.offset = d.read_shift(4);
      field.len = d.read_shift(1);
      if (ft == 2) field.offset = d.read_shift(2);
      field.dec = d.read_shift(1);
      if (field.name.length) fields.push(field);
      if (ft != 2) d.l += l7 ? 13 : 14;
      switch (field.type) {
        case "B":
          if ((!vfp || field.len != 8) && opts.WTF) console.log("Skipping " + field.name + ":" + field.type);
          break;
        case "G":
        // General (FoxPro and dBASE L7)
        case "P":
          if (opts.WTF) console.log("Skipping " + field.name + ":" + field.type);
          break;
        case "+":
        // Autoincrement (dBASE L7 only)
        case "0":
        // _NullFlags (VFP only)
        case "@":
        // Timestamp (dBASE L7 only)
        case "C":
        // Character (dBASE II)
        case "D":
        // Date (dBASE III)
        case "F":
        // Float (dBASE IV)
        case "I":
        // Long (VFP and dBASE L7)
        case "L":
        // Logical (dBASE II)
        case "M":
        // Memo (dBASE III)
        case "N":
        // Number (dBASE II)
        case "O":
        // Double (dBASE L7 only)
        case "T":
        // Datetime (VFP only)
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + field.type);
      }
    }
    if (d[d.l] !== 13) d.l = fpos - 1;
    if (d.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + d.l + " " + d[d.l]);
    d.l = fpos;
    var R = 0, C = 0;
    out[0] = [];
    for (C = 0; C != fields.length; ++C) out[0][C] = fields[C].name;
    while (nrow-- > 0) {
      if (d[d.l] === 42) {
        d.l += rlen;
        continue;
      }
      ++d.l;
      out[++R] = [];
      C = 0;
      for (C = 0; C != fields.length; ++C) {
        var dd = d.slice(d.l, d.l + fields[C].len);
        d.l += fields[C].len;
        prep_blob(dd, 0);
        var s = $cptable.utils.decode(current_cp, dd);
        switch (fields[C].type) {
          case "C":
            if (s.trim().length) out[R][C] = s.replace(/\s+$/, "");
            break;
          case "D":
            if (s.length === 8) out[R][C] = new Date(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8));
            else out[R][C] = s;
            break;
          case "F":
            out[R][C] = parseFloat(s.trim());
            break;
          case "+":
          case "I":
            out[R][C] = l7 ? dd.read_shift(-4, "i") ^ 2147483648 : dd.read_shift(4, "i");
            break;
          case "L":
            switch (s.trim().toUpperCase()) {
              case "Y":
              case "T":
                out[R][C] = true;
                break;
              case "N":
              case "F":
                out[R][C] = false;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + s + "|");
            }
            break;
          case "M":
            if (!memo2) throw new Error("DBF Unexpected MEMO for type " + ft.toString(16));
            out[R][C] = "##MEMO##" + (l7 ? parseInt(s.trim(), 10) : dd.read_shift(4));
            break;
          case "N":
            s = s.replace(/\u0000/g, "").trim();
            if (s && s != ".") out[R][C] = +s || 0;
            break;
          case "@":
            out[R][C] = new Date(dd.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            out[R][C] = new Date((dd.read_shift(4) - 2440588) * 864e5 + dd.read_shift(4));
            break;
          case "Y":
            out[R][C] = dd.read_shift(4, "i") / 1e4 + dd.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            out[R][C] = -dd.read_shift(-8, "f");
            break;
          case "B":
            if (vfp && fields[C].len == 8) {
              out[R][C] = dd.read_shift(8, "f");
              break;
            }
          /* falls through */
          case "G":
          case "P":
            dd.l += fields[C].len;
            break;
          case "0":
            if (fields[C].name === "_NullFlags") break;
          /* falls through */
          default:
            throw new Error("DBF Unsupported data type " + fields[C].type);
        }
      }
    }
    if (ft != 2) {
      if (d.l < d.length && d[d.l++] != 26) throw new Error("DBF EOF Marker missing " + (d.l - 1) + " of " + d.length + " " + d[d.l - 1].toString(16));
    }
    if (opts && opts.sheetRows) out = out.slice(0, opts.sheetRows);
    opts.DBF = fields;
    return out;
  }
  function dbf_to_sheet(buf, opts) {
    var o = opts || {};
    if (!o.dateNF) o.dateNF = "yyyymmdd";
    var ws = aoa_to_sheet(dbf_to_aoa(buf, o), o);
    ws["!cols"] = o.DBF.map(function(field) {
      return {
        wch: field.len,
        DBF: field
      };
    });
    delete o.DBF;
    return ws;
  }
  function dbf_to_workbook(buf, opts) {
    try {
      return sheet_to_workbook(dbf_to_sheet(buf, opts), opts);
    } catch (e) {
      if (opts && opts.WTF) throw e;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var _RLEN = { "B": 8, "C": 250, "L": 1, "D": 8, "?": 0, "": 0 };
  function sheet_to_dbf(ws, opts) {
    var o = opts || {};
    if (+o.codepage >= 0) set_cp(+o.codepage);
    if (o.type == "string") throw new Error("Cannot write DBF to JS string");
    var ba = buf_array();
    var aoa = sheet_to_json(ws, { header: 1, raw: true, cellDates: true });
    var headers = aoa[0], data2 = aoa.slice(1), cols = ws["!cols"] || [];
    var i = 0, j = 0, hcnt = 0, rlen = 1;
    for (i = 0; i < headers.length; ++i) {
      if (((cols[i] || {}).DBF || {}).name) {
        headers[i] = cols[i].DBF.name;
        ++hcnt;
        continue;
      }
      if (headers[i] == null) continue;
      ++hcnt;
      if (typeof headers[i] === "number") headers[i] = headers[i].toString(10);
      if (typeof headers[i] !== "string") throw new Error("DBF Invalid column name " + headers[i] + " |" + typeof headers[i] + "|");
      if (headers.indexOf(headers[i]) !== i) {
        for (j = 0; j < 1024; ++j)
          if (headers.indexOf(headers[i] + "_" + j) == -1) {
            headers[i] += "_" + j;
            break;
          }
      }
    }
    var range = safe_decode_range(ws["!ref"]);
    var coltypes = [];
    var colwidths = [];
    var coldecimals = [];
    for (i = 0; i <= range.e.c - range.s.c; ++i) {
      var guess = "", _guess = "", maxlen = 0;
      var col = [];
      for (j = 0; j < data2.length; ++j) {
        if (data2[j][i] != null) col.push(data2[j][i]);
      }
      if (col.length == 0 || headers[i] == null) {
        coltypes[i] = "?";
        continue;
      }
      for (j = 0; j < col.length; ++j) {
        switch (typeof col[j]) {
          /* TODO: check if L2 compat is desired */
          case "number":
            _guess = "B";
            break;
          case "string":
            _guess = "C";
            break;
          case "boolean":
            _guess = "L";
            break;
          case "object":
            _guess = col[j] instanceof Date ? "D" : "C";
            break;
          default:
            _guess = "C";
        }
        maxlen = Math.max(maxlen, String(col[j]).length);
        guess = guess && guess != _guess ? "C" : _guess;
      }
      if (maxlen > 250) maxlen = 250;
      _guess = ((cols[i] || {}).DBF || {}).type;
      if (_guess == "C") {
        if (cols[i].DBF.len > maxlen) maxlen = cols[i].DBF.len;
      }
      if (guess == "B" && _guess == "N") {
        guess = "N";
        coldecimals[i] = cols[i].DBF.dec;
        maxlen = cols[i].DBF.len;
      }
      colwidths[i] = guess == "C" || _guess == "N" ? maxlen : _RLEN[guess] || 0;
      rlen += colwidths[i];
      coltypes[i] = guess;
    }
    var h = ba.next(32);
    h.write_shift(4, 318902576);
    h.write_shift(4, data2.length);
    h.write_shift(2, 296 + 32 * hcnt);
    h.write_shift(2, rlen);
    for (i = 0; i < 4; ++i) h.write_shift(4, 0);
    h.write_shift(4, 0 | (+dbf_reverse_map[
      /*::String(*/
      current_ansi
      /*::)*/
    ] || 3) << 8);
    for (i = 0, j = 0; i < headers.length; ++i) {
      if (headers[i] == null) continue;
      var hf = ba.next(32);
      var _f = (headers[i].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      hf.write_shift(1, _f, "sbcs");
      hf.write_shift(1, coltypes[i] == "?" ? "C" : coltypes[i], "sbcs");
      hf.write_shift(4, j);
      hf.write_shift(1, colwidths[i] || _RLEN[coltypes[i]] || 0);
      hf.write_shift(1, coldecimals[i] || 0);
      hf.write_shift(1, 2);
      hf.write_shift(4, 0);
      hf.write_shift(1, 0);
      hf.write_shift(4, 0);
      hf.write_shift(4, 0);
      j += colwidths[i] || _RLEN[coltypes[i]] || 0;
    }
    var hb = ba.next(264);
    hb.write_shift(4, 13);
    for (i = 0; i < 65; ++i) hb.write_shift(4, 0);
    for (i = 0; i < data2.length; ++i) {
      var rout = ba.next(rlen);
      rout.write_shift(1, 0);
      for (j = 0; j < headers.length; ++j) {
        if (headers[j] == null) continue;
        switch (coltypes[j]) {
          case "L":
            rout.write_shift(1, data2[i][j] == null ? 63 : data2[i][j] ? 84 : 70);
            break;
          case "B":
            rout.write_shift(8, data2[i][j] || 0, "f");
            break;
          case "N":
            var _n = "0";
            if (typeof data2[i][j] == "number") _n = data2[i][j].toFixed(coldecimals[j] || 0);
            for (hcnt = 0; hcnt < colwidths[j] - _n.length; ++hcnt) rout.write_shift(1, 32);
            rout.write_shift(1, _n, "sbcs");
            break;
          case "D":
            if (!data2[i][j]) rout.write_shift(8, "00000000", "sbcs");
            else {
              rout.write_shift(4, ("0000" + data2[i][j].getFullYear()).slice(-4), "sbcs");
              rout.write_shift(2, ("00" + (data2[i][j].getMonth() + 1)).slice(-2), "sbcs");
              rout.write_shift(2, ("00" + data2[i][j].getDate()).slice(-2), "sbcs");
            }
            break;
          case "C":
            var _s = String(data2[i][j] != null ? data2[i][j] : "").slice(0, colwidths[j]);
            rout.write_shift(1, _s, "sbcs");
            for (hcnt = 0; hcnt < colwidths[j] - _s.length; ++hcnt) rout.write_shift(1, 32);
            break;
        }
      }
    }
    ba.next(1).write_shift(1, 26);
    return ba.end();
  }
  return {
    to_workbook: dbf_to_workbook,
    to_sheet: dbf_to_sheet,
    from_sheet: sheet_to_dbf
  };
})();
var SYLK = /* @__PURE__ */ (function() {
  var sylk_escapes = {
    AA: "\xC0",
    BA: "\xC1",
    CA: "\xC2",
    DA: 195,
    HA: "\xC4",
    JA: 197,
    AE: "\xC8",
    BE: "\xC9",
    CE: "\xCA",
    HE: "\xCB",
    AI: "\xCC",
    BI: "\xCD",
    CI: "\xCE",
    HI: "\xCF",
    AO: "\xD2",
    BO: "\xD3",
    CO: "\xD4",
    DO: 213,
    HO: "\xD6",
    AU: "\xD9",
    BU: "\xDA",
    CU: "\xDB",
    HU: "\xDC",
    Aa: "\xE0",
    Ba: "\xE1",
    Ca: "\xE2",
    Da: 227,
    Ha: "\xE4",
    Ja: 229,
    Ae: "\xE8",
    Be: "\xE9",
    Ce: "\xEA",
    He: "\xEB",
    Ai: "\xEC",
    Bi: "\xED",
    Ci: "\xEE",
    Hi: "\xEF",
    Ao: "\xF2",
    Bo: "\xF3",
    Co: "\xF4",
    Do: 245,
    Ho: "\xF6",
    Au: "\xF9",
    Bu: "\xFA",
    Cu: "\xFB",
    Hu: "\xFC",
    KC: "\xC7",
    Kc: "\xE7",
    q: "\xE6",
    z: "\u0153",
    a: "\xC6",
    j: "\u0152",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  };
  var sylk_char_regex = new RegExp("\x1BN(" + keys(sylk_escapes).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  var sylk_char_fn = function(_, $1) {
    var o = sylk_escapes[$1];
    return typeof o == "number" ? _getansi(o) : o;
  };
  var decode_sylk_char = function($$, $1, $2) {
    var newcc = $1.charCodeAt(0) - 32 << 4 | $2.charCodeAt(0) - 48;
    return newcc == 59 ? $$ : _getansi(newcc);
  };
  sylk_escapes["|"] = 254;
  function sylk_to_aoa(d, opts) {
    switch (opts.type) {
      case "base64":
        return sylk_to_aoa_str(Base64_decode(d), opts);
      case "binary":
        return sylk_to_aoa_str(d, opts);
      case "buffer":
        return sylk_to_aoa_str(has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d), opts);
      case "array":
        return sylk_to_aoa_str(cc2str(d), opts);
    }
    throw new Error("Unrecognized type " + opts.type);
  }
  function sylk_to_aoa_str(str, opts) {
    var records = str.split(/[\n\r]+/), R = -1, C = -1, ri = 0, rj = 0, arr = [];
    var formats = [];
    var next_cell_format = null;
    var sht = {}, rowinfo = [], colinfo = [], cw = [];
    var Mval = 0, j;
    if (+opts.codepage >= 0) set_cp(+opts.codepage);
    for (; ri !== records.length; ++ri) {
      Mval = 0;
      var rstr = records[ri].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, decode_sylk_char).replace(sylk_char_regex, sylk_char_fn);
      var record = rstr.replace(/;;/g, "\0").split(";").map(function(x) {
        return x.replace(/\u0000/g, ";");
      });
      var RT = record[0], val;
      if (rstr.length > 0) switch (RT) {
        case "ID":
          break;
        /* header */
        case "E":
          break;
        /* EOF */
        case "B":
          break;
        /* dimensions */
        case "O":
          break;
        /* options? */
        case "W":
          break;
        /* window? */
        case "P":
          if (record[1].charAt(0) == "P")
            formats.push(rstr.slice(3).replace(/;;/g, ";"));
          break;
        case "C":
          var C_seen_K = false, C_seen_X = false, C_seen_S = false, C_seen_E = false, _R = -1, _C = -1;
          for (rj = 1; rj < record.length; ++rj) switch (record[rj].charAt(0)) {
            case "A":
              break;
            // TODO: comment
            case "X":
              C = parseInt(record[rj].slice(1)) - 1;
              C_seen_X = true;
              break;
            case "Y":
              R = parseInt(record[rj].slice(1)) - 1;
              if (!C_seen_X) C = 0;
              for (j = arr.length; j <= R; ++j) arr[j] = [];
              break;
            case "K":
              val = record[rj].slice(1);
              if (val.charAt(0) === '"') val = val.slice(1, val.length - 1);
              else if (val === "TRUE") val = true;
              else if (val === "FALSE") val = false;
              else if (!isNaN(fuzzynum(val))) {
                val = fuzzynum(val);
                if (next_cell_format !== null && fmt_is_date(next_cell_format)) val = numdate(val);
              } else if (!isNaN(fuzzydate(val).getDate())) {
                val = parseDate(val);
              }
              if (typeof $cptable !== "undefined" && typeof val == "string" && (opts || {}).type != "string" && (opts || {}).codepage) val = $cptable.utils.decode(opts.codepage, val);
              C_seen_K = true;
              break;
            case "E":
              C_seen_E = true;
              var formula = rc_to_a1(record[rj].slice(1), { r: R, c: C });
              arr[R][C] = [arr[R][C], formula];
              break;
            case "S":
              C_seen_S = true;
              arr[R][C] = [arr[R][C], "S5S"];
              break;
            case "G":
              break;
            // unknown
            case "R":
              _R = parseInt(record[rj].slice(1)) - 1;
              break;
            case "C":
              _C = parseInt(record[rj].slice(1)) - 1;
              break;
            default:
              if (opts && opts.WTF) throw new Error("SYLK bad record " + rstr);
          }
          if (C_seen_K) {
            if (arr[R][C] && arr[R][C].length == 2) arr[R][C][0] = val;
            else arr[R][C] = val;
            next_cell_format = null;
          }
          if (C_seen_S) {
            if (C_seen_E) throw new Error("SYLK shared formula cannot have own formula");
            var shrbase = _R > -1 && arr[_R][_C];
            if (!shrbase || !shrbase[1]) throw new Error("SYLK shared formula cannot find base");
            arr[R][C][1] = shift_formula_str(shrbase[1], { r: R - _R, c: C - _C });
          }
          break;
        case "F":
          var F_seen = 0;
          for (rj = 1; rj < record.length; ++rj) switch (record[rj].charAt(0)) {
            case "X":
              C = parseInt(record[rj].slice(1)) - 1;
              ++F_seen;
              break;
            case "Y":
              R = parseInt(record[rj].slice(1)) - 1;
              for (j = arr.length; j <= R; ++j) arr[j] = [];
              break;
            case "M":
              Mval = parseInt(record[rj].slice(1)) / 20;
              break;
            case "F":
              break;
            /* ??? */
            case "G":
              break;
            /* hide grid */
            case "P":
              next_cell_format = formats[parseInt(record[rj].slice(1))];
              break;
            case "S":
              break;
            /* cell style */
            case "D":
              break;
            /* column */
            case "N":
              break;
            /* font */
            case "W":
              cw = record[rj].slice(1).split(" ");
              for (j = parseInt(cw[0], 10); j <= parseInt(cw[1], 10); ++j) {
                Mval = parseInt(cw[2], 10);
                colinfo[j - 1] = Mval === 0 ? { hidden: true } : { wch: Mval };
                process_col(colinfo[j - 1]);
              }
              break;
            case "C":
              C = parseInt(record[rj].slice(1)) - 1;
              if (!colinfo[C]) colinfo[C] = {};
              break;
            case "R":
              R = parseInt(record[rj].slice(1)) - 1;
              if (!rowinfo[R]) rowinfo[R] = {};
              if (Mval > 0) {
                rowinfo[R].hpt = Mval;
                rowinfo[R].hpx = pt2px(Mval);
              } else if (Mval === 0) rowinfo[R].hidden = true;
              break;
            default:
              if (opts && opts.WTF) throw new Error("SYLK bad record " + rstr);
          }
          if (F_seen < 1) next_cell_format = null;
          break;
        default:
          if (opts && opts.WTF) throw new Error("SYLK bad record " + rstr);
      }
    }
    if (rowinfo.length > 0) sht["!rows"] = rowinfo;
    if (colinfo.length > 0) sht["!cols"] = colinfo;
    if (opts && opts.sheetRows) arr = arr.slice(0, opts.sheetRows);
    return [arr, sht];
  }
  function sylk_to_sheet(d, opts) {
    var aoasht = sylk_to_aoa(d, opts);
    var aoa = aoasht[0], ws = aoasht[1];
    var o = aoa_to_sheet(aoa, opts);
    keys(ws).forEach(function(k) {
      o[k] = ws[k];
    });
    return o;
  }
  function sylk_to_workbook(d, opts) {
    return sheet_to_workbook(sylk_to_sheet(d, opts), opts);
  }
  function write_ws_cell_sylk(cell, ws, R, C) {
    var o = "C;Y" + (R + 1) + ";X" + (C + 1) + ";K";
    switch (cell.t) {
      case "n":
        o += cell.v || 0;
        if (cell.f && !cell.F) o += ";E" + a1_to_rc(cell.f, { r: R, c: C });
        break;
      case "b":
        o += cell.v ? "TRUE" : "FALSE";
        break;
      case "e":
        o += cell.w || cell.v;
        break;
      case "d":
        o += '"' + (cell.w || cell.v) + '"';
        break;
      case "s":
        o += '"' + cell.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return o;
  }
  function write_ws_cols_sylk(out, cols) {
    cols.forEach(function(col, i) {
      var rec = "F;W" + (i + 1) + " " + (i + 1) + " ";
      if (col.hidden) rec += "0";
      else {
        if (typeof col.width == "number" && !col.wpx) col.wpx = width2px(col.width);
        if (typeof col.wpx == "number" && !col.wch) col.wch = px2char(col.wpx);
        if (typeof col.wch == "number") rec += Math.round(col.wch);
      }
      if (rec.charAt(rec.length - 1) != " ") out.push(rec);
    });
  }
  function write_ws_rows_sylk(out, rows) {
    rows.forEach(function(row, i) {
      var rec = "F;";
      if (row.hidden) rec += "M0;";
      else if (row.hpt) rec += "M" + 20 * row.hpt + ";";
      else if (row.hpx) rec += "M" + 20 * px2pt(row.hpx) + ";";
      if (rec.length > 2) out.push(rec + "R" + (i + 1));
    });
  }
  function sheet_to_sylk(ws, opts) {
    var preamble = ["ID;PWXL;N;E"], o = [];
    var r = safe_decode_range(ws["!ref"]), cell;
    var dense = Array.isArray(ws);
    var RS = "\r\n";
    preamble.push("P;PGeneral");
    preamble.push("F;P0;DG0G8;M255");
    if (ws["!cols"]) write_ws_cols_sylk(preamble, ws["!cols"]);
    if (ws["!rows"]) write_ws_rows_sylk(preamble, ws["!rows"]);
    preamble.push("B;Y" + (r.e.r - r.s.r + 1) + ";X" + (r.e.c - r.s.c + 1) + ";D" + [r.s.c, r.s.r, r.e.c, r.e.r].join(" "));
    for (var R = r.s.r; R <= r.e.r; ++R) {
      for (var C = r.s.c; C <= r.e.c; ++C) {
        var coord = encode_cell({ r: R, c: C });
        cell = dense ? (ws[R] || [])[C] : ws[coord];
        if (!cell || cell.v == null && (!cell.f || cell.F)) continue;
        o.push(write_ws_cell_sylk(cell, ws, R, C, opts));
      }
    }
    return preamble.join(RS) + RS + o.join(RS) + RS + "E" + RS;
  }
  return {
    to_workbook: sylk_to_workbook,
    to_sheet: sylk_to_sheet,
    from_sheet: sheet_to_sylk
  };
})();
var DIF = /* @__PURE__ */ (function() {
  function dif_to_aoa(d, opts) {
    switch (opts.type) {
      case "base64":
        return dif_to_aoa_str(Base64_decode(d), opts);
      case "binary":
        return dif_to_aoa_str(d, opts);
      case "buffer":
        return dif_to_aoa_str(has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d), opts);
      case "array":
        return dif_to_aoa_str(cc2str(d), opts);
    }
    throw new Error("Unrecognized type " + opts.type);
  }
  function dif_to_aoa_str(str, opts) {
    var records = str.split("\n"), R = -1, C = -1, ri = 0, arr = [];
    for (; ri !== records.length; ++ri) {
      if (records[ri].trim() === "BOT") {
        arr[++R] = [];
        C = 0;
        continue;
      }
      if (R < 0) continue;
      var metadata = records[ri].trim().split(",");
      var type = metadata[0], value2 = metadata[1];
      ++ri;
      var data2 = records[ri] || "";
      while ((data2.match(/["]/g) || []).length & 1 && ri < records.length - 1) data2 += "\n" + records[++ri];
      data2 = data2.trim();
      switch (+type) {
        case -1:
          if (data2 === "BOT") {
            arr[++R] = [];
            C = 0;
            continue;
          } else if (data2 !== "EOD") throw new Error("Unrecognized DIF special command " + data2);
          break;
        case 0:
          if (data2 === "TRUE") arr[R][C] = true;
          else if (data2 === "FALSE") arr[R][C] = false;
          else if (!isNaN(fuzzynum(value2))) arr[R][C] = fuzzynum(value2);
          else if (!isNaN(fuzzydate(value2).getDate())) arr[R][C] = parseDate(value2);
          else arr[R][C] = value2;
          ++C;
          break;
        case 1:
          data2 = data2.slice(1, data2.length - 1);
          data2 = data2.replace(/""/g, '"');
          if (DIF_XL && data2 && data2.match(/^=".*"$/)) data2 = data2.slice(2, -1);
          arr[R][C++] = data2 !== "" ? data2 : null;
          break;
      }
      if (data2 === "EOD") break;
    }
    if (opts && opts.sheetRows) arr = arr.slice(0, opts.sheetRows);
    return arr;
  }
  function dif_to_sheet(str, opts) {
    return aoa_to_sheet(dif_to_aoa(str, opts), opts);
  }
  function dif_to_workbook(str, opts) {
    return sheet_to_workbook(dif_to_sheet(str, opts), opts);
  }
  var sheet_to_dif = /* @__PURE__ */ (function() {
    var push_field = function pf(o, topic, v, n, s) {
      o.push(topic);
      o.push(v + "," + n);
      o.push('"' + s.replace(/"/g, '""') + '"');
    };
    var push_value = function po(o, type, v, s) {
      o.push(type + "," + v);
      o.push(type == 1 ? '"' + s.replace(/"/g, '""') + '"' : s);
    };
    return function sheet_to_dif2(ws) {
      var o = [];
      var r = safe_decode_range(ws["!ref"]), cell;
      var dense = Array.isArray(ws);
      push_field(o, "TABLE", 0, 1, "sheetjs");
      push_field(o, "VECTORS", 0, r.e.r - r.s.r + 1, "");
      push_field(o, "TUPLES", 0, r.e.c - r.s.c + 1, "");
      push_field(o, "DATA", 0, 0, "");
      for (var R = r.s.r; R <= r.e.r; ++R) {
        push_value(o, -1, 0, "BOT");
        for (var C = r.s.c; C <= r.e.c; ++C) {
          var coord = encode_cell({ r: R, c: C });
          cell = dense ? (ws[R] || [])[C] : ws[coord];
          if (!cell) {
            push_value(o, 1, 0, "");
            continue;
          }
          switch (cell.t) {
            case "n":
              var val = DIF_XL ? cell.w : cell.v;
              if (!val && cell.v != null) val = cell.v;
              if (val == null) {
                if (DIF_XL && cell.f && !cell.F) push_value(o, 1, 0, "=" + cell.f);
                else push_value(o, 1, 0, "");
              } else push_value(o, 0, val, "V");
              break;
            case "b":
              push_value(o, 0, cell.v ? 1 : 0, cell.v ? "TRUE" : "FALSE");
              break;
            case "s":
              push_value(o, 1, 0, !DIF_XL || isNaN(cell.v) ? cell.v : '="' + cell.v + '"');
              break;
            case "d":
              if (!cell.w) cell.w = SSF_format(cell.z || table_fmt[14], datenum(parseDate(cell.v)));
              if (DIF_XL) push_value(o, 0, cell.w, "V");
              else push_value(o, 1, 0, cell.w);
              break;
            default:
              push_value(o, 1, 0, "");
          }
        }
      }
      push_value(o, -1, 0, "EOD");
      var RS = "\r\n";
      var oo = o.join(RS);
      return oo;
    };
  })();
  return {
    to_workbook: dif_to_workbook,
    to_sheet: dif_to_sheet,
    from_sheet: sheet_to_dif
  };
})();
var ETH = /* @__PURE__ */ (function() {
  function decode3(s) {
    return s.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
  }
  function encode2(s) {
    return s.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function eth_to_aoa(str, opts) {
    var records = str.split("\n"), R = -1, C = -1, ri = 0, arr = [];
    for (; ri !== records.length; ++ri) {
      var record = records[ri].trim().split(":");
      if (record[0] !== "cell") continue;
      var addr = decode_cell(record[1]);
      if (arr.length <= addr.r) {
        for (R = arr.length; R <= addr.r; ++R) if (!arr[R]) arr[R] = [];
      }
      R = addr.r;
      C = addr.c;
      switch (record[2]) {
        case "t":
          arr[R][C] = decode3(record[3]);
          break;
        case "v":
          arr[R][C] = +record[3];
          break;
        case "vtf":
          var _f = record[record.length - 1];
        /* falls through */
        case "vtc":
          switch (record[3]) {
            case "nl":
              arr[R][C] = +record[4] ? true : false;
              break;
            default:
              arr[R][C] = +record[4];
              break;
          }
          if (record[2] == "vtf") arr[R][C] = [arr[R][C], _f];
      }
    }
    if (opts && opts.sheetRows) arr = arr.slice(0, opts.sheetRows);
    return arr;
  }
  function eth_to_sheet(d, opts) {
    return aoa_to_sheet(eth_to_aoa(d, opts), opts);
  }
  function eth_to_workbook(d, opts) {
    return sheet_to_workbook(eth_to_sheet(d, opts), opts);
  }
  var header = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join("\n");
  var sep = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join("\n") + "\n";
  var meta = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join("\n");
  var end = "--SocialCalcSpreadsheetControlSave--";
  function sheet_to_eth_data(ws) {
    if (!ws || !ws["!ref"]) return "";
    var o = [], oo = [], cell, coord = "";
    var r = decode_range(ws["!ref"]);
    var dense = Array.isArray(ws);
    for (var R = r.s.r; R <= r.e.r; ++R) {
      for (var C = r.s.c; C <= r.e.c; ++C) {
        coord = encode_cell({ r: R, c: C });
        cell = dense ? (ws[R] || [])[C] : ws[coord];
        if (!cell || cell.v == null || cell.t === "z") continue;
        oo = ["cell", coord, "t"];
        switch (cell.t) {
          case "s":
          case "str":
            oo.push(encode2(cell.v));
            break;
          case "n":
            if (!cell.f) {
              oo[2] = "v";
              oo[3] = cell.v;
            } else {
              oo[2] = "vtf";
              oo[3] = "n";
              oo[4] = cell.v;
              oo[5] = encode2(cell.f);
            }
            break;
          case "b":
            oo[2] = "vt" + (cell.f ? "f" : "c");
            oo[3] = "nl";
            oo[4] = cell.v ? "1" : "0";
            oo[5] = encode2(cell.f || (cell.v ? "TRUE" : "FALSE"));
            break;
          case "d":
            var t = datenum(parseDate(cell.v));
            oo[2] = "vtc";
            oo[3] = "nd";
            oo[4] = "" + t;
            oo[5] = cell.w || SSF_format(cell.z || table_fmt[14], t);
            break;
          case "e":
            continue;
        }
        o.push(oo.join(":"));
      }
    }
    o.push("sheet:c:" + (r.e.c - r.s.c + 1) + ":r:" + (r.e.r - r.s.r + 1) + ":tvf:1");
    o.push("valueformat:1:text-wiki");
    return o.join("\n");
  }
  function sheet_to_eth(ws) {
    return [header, sep, meta, sep, sheet_to_eth_data(ws), end].join("\n");
  }
  return {
    to_workbook: eth_to_workbook,
    to_sheet: eth_to_sheet,
    from_sheet: sheet_to_eth
  };
})();
var PRN = /* @__PURE__ */ (function() {
  function set_text_arr(data2, arr, R, C, o) {
    if (o.raw) arr[R][C] = data2;
    else if (data2 === "") {
    } else if (data2 === "TRUE") arr[R][C] = true;
    else if (data2 === "FALSE") arr[R][C] = false;
    else if (!isNaN(fuzzynum(data2))) arr[R][C] = fuzzynum(data2);
    else if (!isNaN(fuzzydate(data2).getDate())) arr[R][C] = parseDate(data2);
    else arr[R][C] = data2;
  }
  function prn_to_aoa_str(f, opts) {
    var o = opts || {};
    var arr = [];
    if (!f || f.length === 0) return arr;
    var lines = f.split(/[\r\n]/);
    var L = lines.length - 1;
    while (L >= 0 && lines[L].length === 0) --L;
    var start = 10, idx = 0;
    var R = 0;
    for (; R <= L; ++R) {
      idx = lines[R].indexOf(" ");
      if (idx == -1) idx = lines[R].length;
      else idx++;
      start = Math.max(start, idx);
    }
    for (R = 0; R <= L; ++R) {
      arr[R] = [];
      var C = 0;
      set_text_arr(lines[R].slice(0, start).trim(), arr, R, C, o);
      for (C = 1; C <= (lines[R].length - start) / 10 + 1; ++C)
        set_text_arr(lines[R].slice(start + (C - 1) * 10, start + C * 10).trim(), arr, R, C, o);
    }
    if (o.sheetRows) arr = arr.slice(0, o.sheetRows);
    return arr;
  }
  var guess_seps = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  };
  var guess_sep_weights = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function guess_sep(str) {
    var cnt = {}, instr = false, end = 0, cc = 0;
    for (; end < str.length; ++end) {
      if ((cc = str.charCodeAt(end)) == 34) instr = !instr;
      else if (!instr && cc in guess_seps) cnt[cc] = (cnt[cc] || 0) + 1;
    }
    cc = [];
    for (end in cnt) if (Object.prototype.hasOwnProperty.call(cnt, end)) {
      cc.push([cnt[end], end]);
    }
    if (!cc.length) {
      cnt = guess_sep_weights;
      for (end in cnt) if (Object.prototype.hasOwnProperty.call(cnt, end)) {
        cc.push([cnt[end], end]);
      }
    }
    cc.sort(function(a, b) {
      return a[0] - b[0] || guess_sep_weights[a[1]] - guess_sep_weights[b[1]];
    });
    return guess_seps[cc.pop()[1]] || 44;
  }
  function dsv_to_sheet_str(str, opts) {
    var o = opts || {};
    var sep = "";
    if (DENSE != null && o.dense == null) o.dense = DENSE;
    var ws = o.dense ? [] : {};
    var range = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    if (str.slice(0, 4) == "sep=") {
      if (str.charCodeAt(5) == 13 && str.charCodeAt(6) == 10) {
        sep = str.charAt(4);
        str = str.slice(7);
      } else if (str.charCodeAt(5) == 13 || str.charCodeAt(5) == 10) {
        sep = str.charAt(4);
        str = str.slice(6);
      } else sep = guess_sep(str.slice(0, 1024));
    } else if (o && o.FS) sep = o.FS;
    else sep = guess_sep(str.slice(0, 1024));
    var R = 0, C = 0, v = 0;
    var start = 0, end = 0, sepcc = sep.charCodeAt(0), instr = false, cc = 0, startcc = str.charCodeAt(0);
    str = str.replace(/\r\n/mg, "\n");
    var _re = o.dateNF != null ? dateNF_regex(o.dateNF) : null;
    function finish_cell() {
      var s = str.slice(start, end);
      var cell = {};
      if (s.charAt(0) == '"' && s.charAt(s.length - 1) == '"') s = s.slice(1, -1).replace(/""/g, '"');
      if (s.length === 0) cell.t = "z";
      else if (o.raw) {
        cell.t = "s";
        cell.v = s;
      } else if (s.trim().length === 0) {
        cell.t = "s";
        cell.v = s;
      } else if (s.charCodeAt(0) == 61) {
        if (s.charCodeAt(1) == 34 && s.charCodeAt(s.length - 1) == 34) {
          cell.t = "s";
          cell.v = s.slice(2, -1).replace(/""/g, '"');
        } else if (fuzzyfmla(s)) {
          cell.t = "n";
          cell.f = s.slice(1);
        } else {
          cell.t = "s";
          cell.v = s;
        }
      } else if (s == "TRUE") {
        cell.t = "b";
        cell.v = true;
      } else if (s == "FALSE") {
        cell.t = "b";
        cell.v = false;
      } else if (!isNaN(v = fuzzynum(s))) {
        cell.t = "n";
        if (o.cellText !== false) cell.w = s;
        cell.v = v;
      } else if (!isNaN(fuzzydate(s).getDate()) || _re && s.match(_re)) {
        cell.z = o.dateNF || table_fmt[14];
        var k = 0;
        if (_re && s.match(_re)) {
          s = dateNF_fix(s, o.dateNF, s.match(_re) || []);
          k = 1;
        }
        if (o.cellDates) {
          cell.t = "d";
          cell.v = parseDate(s, k);
        } else {
          cell.t = "n";
          cell.v = datenum(parseDate(s, k));
        }
        if (o.cellText !== false) cell.w = SSF_format(cell.z, cell.v instanceof Date ? datenum(cell.v) : cell.v);
        if (!o.cellNF) delete cell.z;
      } else {
        cell.t = "s";
        cell.v = s;
      }
      if (cell.t == "z") {
      } else if (o.dense) {
        if (!ws[R]) ws[R] = [];
        ws[R][C] = cell;
      } else ws[encode_cell({ c: C, r: R })] = cell;
      start = end + 1;
      startcc = str.charCodeAt(start);
      if (range.e.c < C) range.e.c = C;
      if (range.e.r < R) range.e.r = R;
      if (cc == sepcc) ++C;
      else {
        C = 0;
        ++R;
        if (o.sheetRows && o.sheetRows <= R) return true;
      }
    }
    outer: for (; end < str.length; ++end) switch (cc = str.charCodeAt(end)) {
      case 34:
        if (startcc === 34) instr = !instr;
        break;
      case sepcc:
      case 10:
      case 13:
        if (!instr && finish_cell()) break outer;
        break;
      default:
        break;
    }
    if (end - start > 0) finish_cell();
    ws["!ref"] = encode_range(range);
    return ws;
  }
  function prn_to_sheet_str(str, opts) {
    if (!(opts && opts.PRN)) return dsv_to_sheet_str(str, opts);
    if (opts.FS) return dsv_to_sheet_str(str, opts);
    if (str.slice(0, 4) == "sep=") return dsv_to_sheet_str(str, opts);
    if (str.indexOf("	") >= 0 || str.indexOf(",") >= 0 || str.indexOf(";") >= 0) return dsv_to_sheet_str(str, opts);
    return aoa_to_sheet(prn_to_aoa_str(str, opts), opts);
  }
  function prn_to_sheet(d, opts) {
    var str = "", bytes = opts.type == "string" ? [0, 0, 0, 0] : firstbyte(d, opts);
    switch (opts.type) {
      case "base64":
        str = Base64_decode(d);
        break;
      case "binary":
        str = d;
        break;
      case "buffer":
        if (opts.codepage == 65001) str = d.toString("utf8");
        else if (opts.codepage && typeof $cptable !== "undefined") str = $cptable.utils.decode(opts.codepage, d);
        else str = has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d);
        break;
      case "array":
        str = cc2str(d);
        break;
      case "string":
        str = d;
        break;
      default:
        throw new Error("Unrecognized type " + opts.type);
    }
    if (bytes[0] == 239 && bytes[1] == 187 && bytes[2] == 191) str = utf8read(str.slice(3));
    else if (opts.type != "string" && opts.type != "buffer" && opts.codepage == 65001) str = utf8read(str);
    else if (opts.type == "binary" && typeof $cptable !== "undefined" && opts.codepage) str = $cptable.utils.decode(opts.codepage, $cptable.utils.encode(28591, str));
    if (str.slice(0, 19) == "socialcalc:version:") return ETH.to_sheet(opts.type == "string" ? str : utf8read(str), opts);
    return prn_to_sheet_str(str, opts);
  }
  function prn_to_workbook(d, opts) {
    return sheet_to_workbook(prn_to_sheet(d, opts), opts);
  }
  function sheet_to_prn(ws) {
    var o = [];
    var r = safe_decode_range(ws["!ref"]), cell;
    var dense = Array.isArray(ws);
    for (var R = r.s.r; R <= r.e.r; ++R) {
      var oo = [];
      for (var C = r.s.c; C <= r.e.c; ++C) {
        var coord = encode_cell({ r: R, c: C });
        cell = dense ? (ws[R] || [])[C] : ws[coord];
        if (!cell || cell.v == null) {
          oo.push("          ");
          continue;
        }
        var w = (cell.w || (format_cell(cell), cell.w) || "").slice(0, 10);
        while (w.length < 10) w += " ";
        oo.push(w + (C === 0 ? " " : ""));
      }
      o.push(oo.join(""));
    }
    return o.join("\n");
  }
  return {
    to_workbook: prn_to_workbook,
    to_sheet: prn_to_sheet,
    from_sheet: sheet_to_prn
  };
})();
var WK_ = /* @__PURE__ */ (function() {
  function lotushopper(data2, cb, opts) {
    if (!data2) return;
    prep_blob(data2, data2.l || 0);
    var Enum = opts.Enum || WK1Enum;
    while (data2.l < data2.length) {
      var RT = data2.read_shift(2);
      var R = Enum[RT] || Enum[65535];
      var length = data2.read_shift(2);
      var tgt = data2.l + length;
      var d = R.f && R.f(data2, length, opts);
      data2.l = tgt;
      if (cb(d, R, RT)) return;
    }
  }
  function lotus_to_workbook(d, opts) {
    switch (opts.type) {
      case "base64":
        return lotus_to_workbook_buf(s2a(Base64_decode(d)), opts);
      case "binary":
        return lotus_to_workbook_buf(s2a(d), opts);
      case "buffer":
      case "array":
        return lotus_to_workbook_buf(d, opts);
    }
    throw "Unsupported type " + opts.type;
  }
  function lotus_to_workbook_buf(d, opts) {
    if (!d) return d;
    var o = opts || {};
    if (DENSE != null && o.dense == null) o.dense = DENSE;
    var s = o.dense ? [] : {}, n = "Sheet1", next_n = "", sidx = 0;
    var sheets = {}, snames = [], realnames = [];
    var refguess = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
    var sheetRows = o.sheetRows || 0;
    if (d[2] == 0) {
      if (d[3] == 8 || d[3] == 9) {
        if (d.length >= 16 && d[14] == 5 && d[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
      }
    }
    if (d[2] == 2) {
      o.Enum = WK1Enum;
      lotushopper(d, function(val, R, RT) {
        switch (RT) {
          case 0:
            o.vers = val;
            if (val >= 4096) o.qpro = true;
            break;
          case 6:
            refguess = val;
            break;
          /* RANGE */
          case 204:
            if (val) next_n = val;
            break;
          /* SHEETNAMECS */
          case 222:
            next_n = val;
            break;
          /* SHEETNAMELP */
          case 15:
          /* LABEL */
          case 51:
            if (!o.qpro) val[1].v = val[1].v.slice(1);
          /* falls through */
          case 13:
          /* INTEGER */
          case 14:
          /* NUMBER */
          case 16:
            if (RT == 14 && (val[2] & 112) == 112 && (val[2] & 15) > 1 && (val[2] & 15) < 15) {
              val[1].z = o.dateNF || table_fmt[14];
              if (o.cellDates) {
                val[1].t = "d";
                val[1].v = numdate(val[1].v);
              }
            }
            if (o.qpro) {
              if (val[3] > sidx) {
                s["!ref"] = encode_range(refguess);
                sheets[n] = s;
                snames.push(n);
                s = o.dense ? [] : {};
                refguess = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
                sidx = val[3];
                n = next_n || "Sheet" + (sidx + 1);
                next_n = "";
              }
            }
            var tmpcell = o.dense ? (s[val[0].r] || [])[val[0].c] : s[encode_cell(val[0])];
            if (tmpcell) {
              tmpcell.t = val[1].t;
              tmpcell.v = val[1].v;
              if (val[1].z != null) tmpcell.z = val[1].z;
              if (val[1].f != null) tmpcell.f = val[1].f;
              break;
            }
            if (o.dense) {
              if (!s[val[0].r]) s[val[0].r] = [];
              s[val[0].r][val[0].c] = val[1];
            } else s[encode_cell(val[0])] = val[1];
            break;
          default:
        }
      }, o);
    } else if (d[2] == 26 || d[2] == 14) {
      o.Enum = WK3Enum;
      if (d[2] == 14) {
        o.qpro = true;
        d.l = 0;
      }
      lotushopper(d, function(val, R, RT) {
        switch (RT) {
          case 204:
            n = val;
            break;
          /* SHEETNAMECS */
          case 22:
            val[1].v = val[1].v.slice(1);
          /* falls through */
          case 23:
          /* NUMBER17 */
          case 24:
          /* NUMBER18 */
          case 25:
          /* FORMULA19 */
          case 37:
          /* NUMBER25 */
          case 39:
          /* NUMBER27 */
          case 40:
            if (val[3] > sidx) {
              s["!ref"] = encode_range(refguess);
              sheets[n] = s;
              snames.push(n);
              s = o.dense ? [] : {};
              refguess = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              sidx = val[3];
              n = "Sheet" + (sidx + 1);
            }
            if (sheetRows > 0 && val[0].r >= sheetRows) break;
            if (o.dense) {
              if (!s[val[0].r]) s[val[0].r] = [];
              s[val[0].r][val[0].c] = val[1];
            } else s[encode_cell(val[0])] = val[1];
            if (refguess.e.c < val[0].c) refguess.e.c = val[0].c;
            if (refguess.e.r < val[0].r) refguess.e.r = val[0].r;
            break;
          case 27:
            if (val[14e3]) realnames[val[14e3][0]] = val[14e3][1];
            break;
          case 1537:
            realnames[val[0]] = val[1];
            if (val[0] == sidx) n = val[1];
            break;
          default:
            break;
        }
      }, o);
    } else throw new Error("Unrecognized LOTUS BOF " + d[2]);
    s["!ref"] = encode_range(refguess);
    sheets[next_n || n] = s;
    snames.push(next_n || n);
    if (!realnames.length) return { SheetNames: snames, Sheets: sheets };
    var osheets = {}, rnames = [];
    for (var i = 0; i < realnames.length; ++i) if (sheets[snames[i]]) {
      rnames.push(realnames[i] || snames[i]);
      osheets[realnames[i]] = sheets[realnames[i]] || sheets[snames[i]];
    } else {
      rnames.push(realnames[i]);
      osheets[realnames[i]] = { "!ref": "A1" };
    }
    return { SheetNames: rnames, Sheets: osheets };
  }
  function sheet_to_wk1(ws, opts) {
    var o = opts || {};
    if (+o.codepage >= 0) set_cp(+o.codepage);
    if (o.type == "string") throw new Error("Cannot write WK1 to JS string");
    var ba = buf_array();
    var range = safe_decode_range(ws["!ref"]);
    var dense = Array.isArray(ws);
    var cols = [];
    write_biff_rec(ba, 0, write_BOF_WK1(1030));
    write_biff_rec(ba, 6, write_RANGE(range));
    var max_R = Math.min(range.e.r, 8191);
    for (var R = range.s.r; R <= max_R; ++R) {
      var rr = encode_row(R);
      for (var C = range.s.c; C <= range.e.c; ++C) {
        if (R === range.s.r) cols[C] = encode_col(C);
        var ref = cols[C] + rr;
        var cell = dense ? (ws[R] || [])[C] : ws[ref];
        if (!cell || cell.t == "z") continue;
        if (cell.t == "n") {
          if ((cell.v | 0) == cell.v && cell.v >= -32768 && cell.v <= 32767) write_biff_rec(ba, 13, write_INTEGER(R, C, cell.v));
          else write_biff_rec(ba, 14, write_NUMBER(R, C, cell.v));
        } else {
          var str = format_cell(cell);
          write_biff_rec(ba, 15, write_LABEL(R, C, str.slice(0, 239)));
        }
      }
    }
    write_biff_rec(ba, 1);
    return ba.end();
  }
  function book_to_wk3(wb, opts) {
    var o = opts || {};
    if (+o.codepage >= 0) set_cp(+o.codepage);
    if (o.type == "string") throw new Error("Cannot write WK3 to JS string");
    var ba = buf_array();
    write_biff_rec(ba, 0, write_BOF_WK3(wb));
    for (var i = 0, cnt = 0; i < wb.SheetNames.length; ++i) if ((wb.Sheets[wb.SheetNames[i]] || {})["!ref"]) write_biff_rec(ba, 27, write_XFORMAT_SHEETNAME(wb.SheetNames[i], cnt++));
    var wsidx = 0;
    for (i = 0; i < wb.SheetNames.length; ++i) {
      var ws = wb.Sheets[wb.SheetNames[i]];
      if (!ws || !ws["!ref"]) continue;
      var range = safe_decode_range(ws["!ref"]);
      var dense = Array.isArray(ws);
      var cols = [];
      var max_R = Math.min(range.e.r, 8191);
      for (var R = range.s.r; R <= max_R; ++R) {
        var rr = encode_row(R);
        for (var C = range.s.c; C <= range.e.c; ++C) {
          if (R === range.s.r) cols[C] = encode_col(C);
          var ref = cols[C] + rr;
          var cell = dense ? (ws[R] || [])[C] : ws[ref];
          if (!cell || cell.t == "z") continue;
          if (cell.t == "n") {
            write_biff_rec(ba, 23, write_NUMBER_17(R, C, wsidx, cell.v));
          } else {
            var str = format_cell(cell);
            write_biff_rec(ba, 22, write_LABEL_16(R, C, wsidx, str.slice(0, 239)));
          }
        }
      }
      ++wsidx;
    }
    write_biff_rec(ba, 1);
    return ba.end();
  }
  function write_BOF_WK1(v) {
    var out = new_buf(2);
    out.write_shift(2, v);
    return out;
  }
  function write_BOF_WK3(wb) {
    var out = new_buf(26);
    out.write_shift(2, 4096);
    out.write_shift(2, 4);
    out.write_shift(4, 0);
    var rows = 0, cols = 0, wscnt = 0;
    for (var i = 0; i < wb.SheetNames.length; ++i) {
      var name = wb.SheetNames[i];
      var ws = wb.Sheets[name];
      if (!ws || !ws["!ref"]) continue;
      ++wscnt;
      var range = decode_range(ws["!ref"]);
      if (rows < range.e.r) rows = range.e.r;
      if (cols < range.e.c) cols = range.e.c;
    }
    if (rows > 8191) rows = 8191;
    out.write_shift(2, rows);
    out.write_shift(1, wscnt);
    out.write_shift(1, cols);
    out.write_shift(2, 0);
    out.write_shift(2, 0);
    out.write_shift(1, 1);
    out.write_shift(1, 2);
    out.write_shift(4, 0);
    out.write_shift(4, 0);
    return out;
  }
  function parse_RANGE(blob, length, opts) {
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    if (length == 8 && opts.qpro) {
      o.s.c = blob.read_shift(1);
      blob.l++;
      o.s.r = blob.read_shift(2);
      o.e.c = blob.read_shift(1);
      blob.l++;
      o.e.r = blob.read_shift(2);
      return o;
    }
    o.s.c = blob.read_shift(2);
    o.s.r = blob.read_shift(2);
    if (length == 12 && opts.qpro) blob.l += 2;
    o.e.c = blob.read_shift(2);
    o.e.r = blob.read_shift(2);
    if (length == 12 && opts.qpro) blob.l += 2;
    if (o.s.c == 65535) o.s.c = o.e.c = o.s.r = o.e.r = 0;
    return o;
  }
  function write_RANGE(range) {
    var out = new_buf(8);
    out.write_shift(2, range.s.c);
    out.write_shift(2, range.s.r);
    out.write_shift(2, range.e.c);
    out.write_shift(2, range.e.r);
    return out;
  }
  function parse_cell(blob, length, opts) {
    var o = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    if (opts.qpro && opts.vers != 20768) {
      o[0].c = blob.read_shift(1);
      o[3] = blob.read_shift(1);
      o[0].r = blob.read_shift(2);
      blob.l += 2;
    } else {
      o[2] = blob.read_shift(1);
      o[0].c = blob.read_shift(2);
      o[0].r = blob.read_shift(2);
    }
    return o;
  }
  function parse_LABEL(blob, length, opts) {
    var tgt = blob.l + length;
    var o = parse_cell(blob, length, opts);
    o[1].t = "s";
    if (opts.vers == 20768) {
      blob.l++;
      var len = blob.read_shift(1);
      o[1].v = blob.read_shift(len, "utf8");
      return o;
    }
    if (opts.qpro) blob.l++;
    o[1].v = blob.read_shift(tgt - blob.l, "cstr");
    return o;
  }
  function write_LABEL(R, C, s) {
    var o = new_buf(7 + s.length);
    o.write_shift(1, 255);
    o.write_shift(2, C);
    o.write_shift(2, R);
    o.write_shift(1, 39);
    for (var i = 0; i < o.length; ++i) {
      var cc = s.charCodeAt(i);
      o.write_shift(1, cc >= 128 ? 95 : cc);
    }
    o.write_shift(1, 0);
    return o;
  }
  function parse_INTEGER(blob, length, opts) {
    var o = parse_cell(blob, length, opts);
    o[1].v = blob.read_shift(2, "i");
    return o;
  }
  function write_INTEGER(R, C, v) {
    var o = new_buf(7);
    o.write_shift(1, 255);
    o.write_shift(2, C);
    o.write_shift(2, R);
    o.write_shift(2, v, "i");
    return o;
  }
  function parse_NUMBER(blob, length, opts) {
    var o = parse_cell(blob, length, opts);
    o[1].v = blob.read_shift(8, "f");
    return o;
  }
  function write_NUMBER(R, C, v) {
    var o = new_buf(13);
    o.write_shift(1, 255);
    o.write_shift(2, C);
    o.write_shift(2, R);
    o.write_shift(8, v, "f");
    return o;
  }
  function parse_FORMULA(blob, length, opts) {
    var tgt = blob.l + length;
    var o = parse_cell(blob, length, opts);
    o[1].v = blob.read_shift(8, "f");
    if (opts.qpro) blob.l = tgt;
    else {
      var flen = blob.read_shift(2);
      wk1_fmla_to_csf(blob.slice(blob.l, blob.l + flen), o);
      blob.l += flen;
    }
    return o;
  }
  function wk1_parse_rc(B, V, col) {
    var rel = V & 32768;
    V &= ~32768;
    V = (rel ? B : 0) + (V >= 8192 ? V - 16384 : V);
    return (rel ? "" : "$") + (col ? encode_col(V) : encode_row(V));
  }
  var FuncTab = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  };
  var BinOpTab = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function wk1_fmla_to_csf(blob, o) {
    prep_blob(blob, 0);
    var out = [], argc = 0, R = "", C = "", argL = "", argR = "";
    while (blob.l < blob.length) {
      var cc = blob[blob.l++];
      switch (cc) {
        case 0:
          out.push(blob.read_shift(8, "f"));
          break;
        case 1:
          {
            C = wk1_parse_rc(o[0].c, blob.read_shift(2), true);
            R = wk1_parse_rc(o[0].r, blob.read_shift(2), false);
            out.push(C + R);
          }
          break;
        case 2:
          {
            var c = wk1_parse_rc(o[0].c, blob.read_shift(2), true);
            var r = wk1_parse_rc(o[0].r, blob.read_shift(2), false);
            C = wk1_parse_rc(o[0].c, blob.read_shift(2), true);
            R = wk1_parse_rc(o[0].r, blob.read_shift(2), false);
            out.push(c + r + ":" + C + R);
          }
          break;
        case 3:
          if (blob.l < blob.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          out.push("(" + out.pop() + ")");
          break;
        case 5:
          out.push(blob.read_shift(2));
          break;
        case 6:
          {
            var Z = "";
            while (cc = blob[blob.l++]) Z += String.fromCharCode(cc);
            out.push('"' + Z.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          out.push("-" + out.pop());
          break;
        case 23:
          out.push("+" + out.pop());
          break;
        case 22:
          out.push("NOT(" + out.pop() + ")");
          break;
        case 20:
        case 21:
          {
            argR = out.pop();
            argL = out.pop();
            out.push(["AND", "OR"][cc - 20] + "(" + argL + "," + argR + ")");
          }
          break;
        default:
          if (cc < 32 && BinOpTab[cc]) {
            argR = out.pop();
            argL = out.pop();
            out.push(argL + BinOpTab[cc] + argR);
          } else if (FuncTab[cc]) {
            argc = FuncTab[cc][1];
            if (argc == 69) argc = blob[blob.l++];
            if (argc > out.length) {
              console.error("WK1 bad formula parse 0x" + cc.toString(16) + ":|" + out.join("|") + "|");
              return;
            }
            var args = out.slice(-argc);
            out.length -= argc;
            out.push(FuncTab[cc][0] + "(" + args.join(",") + ")");
          } else if (cc <= 7) return console.error("WK1 invalid opcode " + cc.toString(16));
          else if (cc <= 24) return console.error("WK1 unsupported op " + cc.toString(16));
          else if (cc <= 30) return console.error("WK1 invalid opcode " + cc.toString(16));
          else if (cc <= 115) return console.error("WK1 unsupported function opcode " + cc.toString(16));
          else return console.error("WK1 unrecognized opcode " + cc.toString(16));
      }
    }
    if (out.length == 1) o[1].f = "" + out[0];
    else console.error("WK1 bad formula parse |" + out.join("|") + "|");
  }
  function parse_cell_3(blob) {
    var o = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    o[0].r = blob.read_shift(2);
    o[3] = blob[blob.l++];
    o[0].c = blob[blob.l++];
    return o;
  }
  function parse_LABEL_16(blob, length) {
    var o = parse_cell_3(blob, length);
    o[1].t = "s";
    o[1].v = blob.read_shift(length - 4, "cstr");
    return o;
  }
  function write_LABEL_16(R, C, wsidx, s) {
    var o = new_buf(6 + s.length);
    o.write_shift(2, R);
    o.write_shift(1, wsidx);
    o.write_shift(1, C);
    o.write_shift(1, 39);
    for (var i = 0; i < s.length; ++i) {
      var cc = s.charCodeAt(i);
      o.write_shift(1, cc >= 128 ? 95 : cc);
    }
    o.write_shift(1, 0);
    return o;
  }
  function parse_NUMBER_18(blob, length) {
    var o = parse_cell_3(blob, length);
    o[1].v = blob.read_shift(2);
    var v = o[1].v >> 1;
    if (o[1].v & 1) {
      switch (v & 7) {
        case 0:
          v = (v >> 3) * 5e3;
          break;
        case 1:
          v = (v >> 3) * 500;
          break;
        case 2:
          v = (v >> 3) / 20;
          break;
        case 3:
          v = (v >> 3) / 200;
          break;
        case 4:
          v = (v >> 3) / 2e3;
          break;
        case 5:
          v = (v >> 3) / 2e4;
          break;
        case 6:
          v = (v >> 3) / 16;
          break;
        case 7:
          v = (v >> 3) / 64;
          break;
      }
    }
    o[1].v = v;
    return o;
  }
  function parse_NUMBER_17(blob, length) {
    var o = parse_cell_3(blob, length);
    var v1 = blob.read_shift(4);
    var v2 = blob.read_shift(4);
    var e = blob.read_shift(2);
    if (e == 65535) {
      if (v1 === 0 && v2 === 3221225472) {
        o[1].t = "e";
        o[1].v = 15;
      } else if (v1 === 0 && v2 === 3489660928) {
        o[1].t = "e";
        o[1].v = 42;
      } else o[1].v = 0;
      return o;
    }
    var s = e & 32768;
    e = (e & 32767) - 16446;
    o[1].v = (1 - s * 2) * (v2 * Math.pow(2, e + 32) + v1 * Math.pow(2, e));
    return o;
  }
  function write_NUMBER_17(R, C, wsidx, v) {
    var o = new_buf(14);
    o.write_shift(2, R);
    o.write_shift(1, wsidx);
    o.write_shift(1, C);
    if (v == 0) {
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(2, 65535);
      return o;
    }
    var s = 0, e = 0, v1 = 0, v2 = 0;
    if (v < 0) {
      s = 1;
      v = -v;
    }
    e = Math.log2(v) | 0;
    v /= Math.pow(2, e - 31);
    v2 = v >>> 0;
    if ((v2 & 2147483648) == 0) {
      v /= 2;
      ++e;
      v2 = v >>> 0;
    }
    v -= v2;
    v2 |= 2147483648;
    v2 >>>= 0;
    v *= Math.pow(2, 32);
    v1 = v >>> 0;
    o.write_shift(4, v1);
    o.write_shift(4, v2);
    e += 16383 + (s ? 32768 : 0);
    o.write_shift(2, e);
    return o;
  }
  function parse_FORMULA_19(blob, length) {
    var o = parse_NUMBER_17(blob, 14);
    blob.l += length - 14;
    return o;
  }
  function parse_NUMBER_25(blob, length) {
    var o = parse_cell_3(blob, length);
    var v1 = blob.read_shift(4);
    o[1].v = v1 >> 6;
    return o;
  }
  function parse_NUMBER_27(blob, length) {
    var o = parse_cell_3(blob, length);
    var v1 = blob.read_shift(8, "f");
    o[1].v = v1;
    return o;
  }
  function parse_FORMULA_28(blob, length) {
    var o = parse_NUMBER_27(blob, 14);
    blob.l += length - 10;
    return o;
  }
  function parse_SHEETNAMECS(blob, length) {
    return blob[blob.l + length - 1] == 0 ? blob.read_shift(length, "cstr") : "";
  }
  function parse_SHEETNAMELP(blob, length) {
    var len = blob[blob.l++];
    if (len > length - 1) len = length - 1;
    var o = "";
    while (o.length < len) o += String.fromCharCode(blob[blob.l++]);
    return o;
  }
  function parse_SHEETINFOQP(blob, length, opts) {
    if (!opts.qpro || length < 21) return;
    var id = blob.read_shift(1);
    blob.l += 17;
    blob.l += 1;
    blob.l += 2;
    var nm = blob.read_shift(length - 21, "cstr");
    return [id, nm];
  }
  function parse_XFORMAT(blob, length) {
    var o = {}, tgt = blob.l + length;
    while (blob.l < tgt) {
      var dt = blob.read_shift(2);
      if (dt == 14e3) {
        o[dt] = [0, ""];
        o[dt][0] = blob.read_shift(2);
        while (blob[blob.l]) {
          o[dt][1] += String.fromCharCode(blob[blob.l]);
          blob.l++;
        }
        blob.l++;
      }
    }
    return o;
  }
  function write_XFORMAT_SHEETNAME(name, wsidx) {
    var out = new_buf(5 + name.length);
    out.write_shift(2, 14e3);
    out.write_shift(2, wsidx);
    for (var i = 0; i < name.length; ++i) {
      var cc = name.charCodeAt(i);
      out[out.l++] = cc > 127 ? 95 : cc;
    }
    out[out.l++] = 0;
    return out;
  }
  var WK1Enum = {
    /*::[*/
    0: { n: "BOF", f: parseuint16 },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: parse_RANGE },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: parse_INTEGER },
    /*::[*/
    14: { n: "NUMBER", f: parse_NUMBER },
    /*::[*/
    15: { n: "LABEL", f: parse_LABEL },
    /*::[*/
    16: { n: "FORMULA", f: parse_FORMULA },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: parse_LABEL },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: parse_SHEETNAMECS },
    /*::[*/
    222: { n: "SHEETNAMELP", f: parse_SHEETNAMELP },
    /*::[*/
    65535: { n: "" }
  };
  var WK3Enum = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: parse_LABEL_16 },
    /*::[*/
    23: { n: "NUMBER17", f: parse_NUMBER_17 },
    /*::[*/
    24: { n: "NUMBER18", f: parse_NUMBER_18 },
    /*::[*/
    25: { n: "FORMULA19", f: parse_FORMULA_19 },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: parse_XFORMAT },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: parse_NUMBER_25 },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: parse_NUMBER_27 },
    /*::[*/
    40: { n: "FORMULA28", f: parse_FORMULA_28 },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: parse_SHEETNAMECS },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: parse_SHEETINFOQP },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1,
    book_to_wk3,
    to_workbook: lotus_to_workbook
  };
})();
var straywsregex = /^\s|\s$|[\t\n\r]/;
function write_sst_xml(sst, opts) {
  if (!opts.bookSST) return "";
  var o = [XML_HEADER];
  o[o.length] = writextag("sst", null, {
    xmlns: XMLNS_main[0],
    count: sst.Count,
    uniqueCount: sst.Unique
  });
  for (var i = 0; i != sst.length; ++i) {
    if (sst[i] == null) continue;
    var s = sst[i];
    var sitag = "<si>";
    if (s.r) sitag += s.r;
    else {
      sitag += "<t";
      if (!s.t) s.t = "";
      if (s.t.match(straywsregex)) sitag += ' xml:space="preserve"';
      sitag += ">" + escapexml(s.t) + "</t>";
    }
    sitag += "</si>";
    o[o.length] = sitag;
  }
  if (o.length > 2) {
    o[o.length] = "</sst>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function parse_BrtBeginSst(data2) {
  return [data2.read_shift(4), data2.read_shift(4)];
}
function write_BrtBeginSst(sst, o) {
  if (!o) o = new_buf(8);
  o.write_shift(4, sst.Count);
  o.write_shift(4, sst.Unique);
  return o;
}
var write_BrtSSTItem = write_RichStr;
function write_sst_bin(sst) {
  var ba = buf_array();
  write_record(ba, 159, write_BrtBeginSst(sst));
  for (var i = 0; i < sst.length; ++i) write_record(ba, 19, write_BrtSSTItem(sst[i]));
  write_record(
    ba,
    160
    /* BrtEndSst */
  );
  return ba.end();
}
function _JS2ANSI(str) {
  if (typeof $cptable !== "undefined") return $cptable.utils.encode(current_ansi, str);
  var o = [], oo = str.split("");
  for (var i = 0; i < oo.length; ++i) o[i] = oo[i].charCodeAt(0);
  return o;
}
function crypto_CreatePasswordVerifier_Method1(Password) {
  var Verifier = 0, PasswordArray;
  var PasswordDecoded = _JS2ANSI(Password);
  var len = PasswordDecoded.length + 1, i, PasswordByte;
  var Intermediate1, Intermediate2, Intermediate3;
  PasswordArray = new_raw_buf(len);
  PasswordArray[0] = PasswordDecoded.length;
  for (i = 1; i != len; ++i) PasswordArray[i] = PasswordDecoded[i - 1];
  for (i = len - 1; i >= 0; --i) {
    PasswordByte = PasswordArray[i];
    Intermediate1 = (Verifier & 16384) === 0 ? 0 : 1;
    Intermediate2 = Verifier << 1 & 32767;
    Intermediate3 = Intermediate1 | Intermediate2;
    Verifier = Intermediate3 ^ PasswordByte;
  }
  return Verifier ^ 52811;
}
var RTF = /* @__PURE__ */ (function() {
  function rtf_to_sheet(d, opts) {
    switch (opts.type) {
      case "base64":
        return rtf_to_sheet_str(Base64_decode(d), opts);
      case "binary":
        return rtf_to_sheet_str(d, opts);
      case "buffer":
        return rtf_to_sheet_str(has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d), opts);
      case "array":
        return rtf_to_sheet_str(cc2str(d), opts);
    }
    throw new Error("Unrecognized type " + opts.type);
  }
  function rtf_to_sheet_str(str, opts) {
    var o = opts || {};
    var ws = o.dense ? [] : {};
    var rows = str.match(/\\trowd.*?\\row\b/g);
    if (!rows.length) throw new Error("RTF missing table");
    var range = { s: { c: 0, r: 0 }, e: { c: 0, r: rows.length - 1 } };
    rows.forEach(function(rowtf, R) {
      if (Array.isArray(ws)) ws[R] = [];
      var rtfre = /\\\w+\b/g;
      var last_index = 0;
      var res;
      var C = -1;
      while (res = rtfre.exec(rowtf)) {
        switch (res[0]) {
          case "\\cell":
            var data2 = rowtf.slice(last_index, rtfre.lastIndex - res[0].length);
            if (data2[0] == " ") data2 = data2.slice(1);
            ++C;
            if (data2.length) {
              var cell = { v: data2, t: "s" };
              if (Array.isArray(ws)) ws[R][C] = cell;
              else ws[encode_cell({ r: R, c: C })] = cell;
            }
            break;
        }
        last_index = rtfre.lastIndex;
      }
      if (C > range.e.c) range.e.c = C;
    });
    ws["!ref"] = encode_range(range);
    return ws;
  }
  function rtf_to_workbook(d, opts) {
    return sheet_to_workbook(rtf_to_sheet(d, opts), opts);
  }
  function sheet_to_rtf(ws) {
    var o = ["{\\rtf1\\ansi"];
    var r = safe_decode_range(ws["!ref"]), cell;
    var dense = Array.isArray(ws);
    for (var R = r.s.r; R <= r.e.r; ++R) {
      o.push("\\trowd\\trautofit1");
      for (var C = r.s.c; C <= r.e.c; ++C) o.push("\\cellx" + (C + 1));
      o.push("\\pard\\intbl");
      for (C = r.s.c; C <= r.e.c; ++C) {
        var coord = encode_cell({ r: R, c: C });
        cell = dense ? (ws[R] || [])[C] : ws[coord];
        if (!cell || cell.v == null && (!cell.f || cell.F)) continue;
        o.push(" " + (cell.w || (format_cell(cell), cell.w)));
        o.push("\\cell");
      }
      o.push("\\pard\\intbl\\row");
    }
    return o.join("") + "}";
  }
  return {
    to_workbook: rtf_to_workbook,
    to_sheet: rtf_to_sheet,
    from_sheet: sheet_to_rtf
  };
})();
function rgb2Hex(rgb) {
  for (var i = 0, o = 1; i != 3; ++i) o = o * 256 + (rgb[i] > 255 ? 255 : rgb[i] < 0 ? 0 : rgb[i]);
  return o.toString(16).toUpperCase().slice(1);
}
var DEF_MDW = 6;
var MDW = DEF_MDW;
function width2px(width) {
  return Math.floor((width + Math.round(128 / MDW) / 256) * MDW);
}
function px2char(px) {
  return Math.floor((px - 5) / MDW * 100 + 0.5) / 100;
}
function char2width(chr) {
  return Math.round((chr * MDW + 5) / MDW * 256) / 256;
}
function process_col(coll) {
  if (coll.width) {
    coll.wpx = width2px(coll.width);
    coll.wch = px2char(coll.wpx);
    coll.MDW = MDW;
  } else if (coll.wpx) {
    coll.wch = px2char(coll.wpx);
    coll.width = char2width(coll.wch);
    coll.MDW = MDW;
  } else if (typeof coll.wch == "number") {
    coll.width = char2width(coll.wch);
    coll.wpx = width2px(coll.width);
    coll.MDW = MDW;
  }
  if (coll.customWidth) delete coll.customWidth;
}
var DEF_PPI = 96;
var PPI = DEF_PPI;
function px2pt(px) {
  return px * 96 / PPI;
}
function pt2px(pt) {
  return pt * PPI / 96;
}
function write_numFmts(NF) {
  var o = ["<numFmts>"];
  [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var i = r[0]; i <= r[1]; ++i) if (NF[i] != null) o[o.length] = writextag("numFmt", null, { numFmtId: i, formatCode: escapexml(NF[i]) });
  });
  if (o.length === 1) return "";
  o[o.length] = "</numFmts>";
  o[0] = writextag("numFmts", null, { count: o.length - 2 }).replace("/>", ">");
  return o.join("");
}
function write_cellXfs(cellXfs) {
  var o = [];
  o[o.length] = writextag("cellXfs", null);
  cellXfs.forEach(function(c) {
    o[o.length] = writextag("xf", null, c);
  });
  o[o.length] = "</cellXfs>";
  if (o.length === 2) return "";
  o[0] = writextag("cellXfs", null, { count: o.length - 2 }).replace("/>", ">");
  return o.join("");
}
function write_sty_xml(wb, opts) {
  var o = [XML_HEADER, writextag("styleSheet", null, {
    "xmlns": XMLNS_main[0],
    "xmlns:vt": XMLNS.vt
  })], w;
  if (wb.SSF && (w = write_numFmts(wb.SSF)) != null) o[o.length] = w;
  o[o.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
  o[o.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
  o[o.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
  o[o.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
  if (w = write_cellXfs(opts.cellXfs)) o[o.length] = w;
  o[o.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
  o[o.length] = '<dxfs count="0"/>';
  o[o.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';
  if (o.length > 2) {
    o[o.length] = "</styleSheet>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function parse_BrtFmt(data2, length) {
  var numFmtId = data2.read_shift(2);
  var stFmtCode = parse_XLWideString(data2, length - 2);
  return [numFmtId, stFmtCode];
}
function write_BrtFmt(i, f, o) {
  if (!o) o = new_buf(6 + 4 * f.length);
  o.write_shift(2, i);
  write_XLWideString(f, o);
  var out = o.length > o.l ? o.slice(0, o.l) : o;
  if (o.l == null) o.l = o.length;
  return out;
}
function parse_BrtFont(data2, length, opts) {
  var out = {};
  out.sz = data2.read_shift(2) / 20;
  var grbit = parse_FontFlags(data2, 2, opts);
  if (grbit.fItalic) out.italic = 1;
  if (grbit.fCondense) out.condense = 1;
  if (grbit.fExtend) out.extend = 1;
  if (grbit.fShadow) out.shadow = 1;
  if (grbit.fOutline) out.outline = 1;
  if (grbit.fStrikeout) out.strike = 1;
  var bls = data2.read_shift(2);
  if (bls === 700) out.bold = 1;
  switch (data2.read_shift(2)) {
    /* case 0: out.vertAlign = "baseline"; break; */
    case 1:
      out.vertAlign = "superscript";
      break;
    case 2:
      out.vertAlign = "subscript";
      break;
  }
  var underline = data2.read_shift(1);
  if (underline != 0) out.underline = underline;
  var family = data2.read_shift(1);
  if (family > 0) out.family = family;
  var bCharSet = data2.read_shift(1);
  if (bCharSet > 0) out.charset = bCharSet;
  data2.l++;
  out.color = parse_BrtColor(data2, 8);
  switch (data2.read_shift(1)) {
    /* case 0: out.scheme = "none": break; */
    case 1:
      out.scheme = "major";
      break;
    case 2:
      out.scheme = "minor";
      break;
  }
  out.name = parse_XLWideString(data2, length - 21);
  return out;
}
function write_BrtFont(font, o) {
  if (!o) o = new_buf(25 + 4 * 32);
  o.write_shift(2, font.sz * 20);
  write_FontFlags(font, o);
  o.write_shift(2, font.bold ? 700 : 400);
  var sss = 0;
  if (font.vertAlign == "superscript") sss = 1;
  else if (font.vertAlign == "subscript") sss = 2;
  o.write_shift(2, sss);
  o.write_shift(1, font.underline || 0);
  o.write_shift(1, font.family || 0);
  o.write_shift(1, font.charset || 0);
  o.write_shift(1, 0);
  write_BrtColor(font.color, o);
  var scheme = 0;
  if (font.scheme == "major") scheme = 1;
  if (font.scheme == "minor") scheme = 2;
  o.write_shift(1, scheme);
  write_XLWideString(font.name, o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
var XLSBFillPTNames = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
var rev_XLSBFillPTNames;
var parse_BrtFill = parsenoop;
function write_BrtFill(fill2, o) {
  if (!o) o = new_buf(4 * 3 + 8 * 7 + 16 * 1);
  if (!rev_XLSBFillPTNames) rev_XLSBFillPTNames = evert(XLSBFillPTNames);
  var fls = rev_XLSBFillPTNames[fill2.patternType];
  if (fls == null) fls = 40;
  o.write_shift(4, fls);
  var j = 0;
  if (fls != 40) {
    write_BrtColor({ auto: 1 }, o);
    write_BrtColor({ auto: 1 }, o);
    for (; j < 12; ++j) o.write_shift(4, 0);
  } else {
    for (; j < 4; ++j) o.write_shift(4, 0);
    for (; j < 12; ++j) o.write_shift(4, 0);
  }
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function parse_BrtXF(data2, length) {
  var tgt = data2.l + length;
  var ixfeParent = data2.read_shift(2);
  var ifmt = data2.read_shift(2);
  data2.l = tgt;
  return { ixfe: ixfeParent, numFmtId: ifmt };
}
function write_BrtXF(data2, ixfeP, o) {
  if (!o) o = new_buf(16);
  o.write_shift(2, ixfeP || 0);
  o.write_shift(2, data2.numFmtId || 0);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  var flow = 0;
  o.write_shift(1, flow);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  return o;
}
function write_Blxf(data2, o) {
  if (!o) o = new_buf(10);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  return o;
}
var parse_BrtBorder = parsenoop;
function write_BrtBorder(border, o) {
  if (!o) o = new_buf(51);
  o.write_shift(1, 0);
  write_Blxf(null, o);
  write_Blxf(null, o);
  write_Blxf(null, o);
  write_Blxf(null, o);
  write_Blxf(null, o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function write_BrtStyle(style, o) {
  if (!o) o = new_buf(12 + 4 * 10);
  o.write_shift(4, style.xfId);
  o.write_shift(2, 1);
  o.write_shift(1, +style.builtinId);
  o.write_shift(1, 0);
  write_XLNullableWideString(style.name || "", o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function write_BrtBeginTableStyles(cnt, defTableStyle, defPivotStyle) {
  var o = new_buf(4 + 256 * 2 * 4);
  o.write_shift(4, cnt);
  write_XLNullableWideString(defTableStyle, o);
  write_XLNullableWideString(defPivotStyle, o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function write_FMTS_bin(ba, NF) {
  if (!NF) return;
  var cnt = 0;
  [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var i = r[0]; i <= r[1]; ++i) if (NF[i] != null) ++cnt;
  });
  if (cnt == 0) return;
  write_record(ba, 615, write_UInt32LE(cnt));
  [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var i = r[0]; i <= r[1]; ++i) if (NF[i] != null) write_record(ba, 44, write_BrtFmt(i, NF[i]));
  });
  write_record(
    ba,
    616
    /* BrtEndFmts */
  );
}
function write_FONTS_bin(ba) {
  var cnt = 1;
  if (cnt == 0) return;
  write_record(ba, 611, write_UInt32LE(cnt));
  write_record(ba, 43, write_BrtFont({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  }));
  write_record(
    ba,
    612
    /* BrtEndFonts */
  );
}
function write_FILLS_bin(ba) {
  var cnt = 2;
  if (cnt == 0) return;
  write_record(ba, 603, write_UInt32LE(cnt));
  write_record(ba, 45, write_BrtFill({ patternType: "none" }));
  write_record(ba, 45, write_BrtFill({ patternType: "gray125" }));
  write_record(
    ba,
    604
    /* BrtEndFills */
  );
}
function write_BORDERS_bin(ba) {
  var cnt = 1;
  if (cnt == 0) return;
  write_record(ba, 613, write_UInt32LE(cnt));
  write_record(ba, 46, write_BrtBorder({}));
  write_record(
    ba,
    614
    /* BrtEndBorders */
  );
}
function write_CELLSTYLEXFS_bin(ba) {
  var cnt = 1;
  write_record(ba, 626, write_UInt32LE(cnt));
  write_record(ba, 47, write_BrtXF({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535));
  write_record(
    ba,
    627
    /* BrtEndCellStyleXFs */
  );
}
function write_CELLXFS_bin(ba, data2) {
  write_record(ba, 617, write_UInt32LE(data2.length));
  data2.forEach(function(c) {
    write_record(ba, 47, write_BrtXF(c, 0));
  });
  write_record(
    ba,
    618
    /* BrtEndCellXFs */
  );
}
function write_STYLES_bin(ba) {
  var cnt = 1;
  write_record(ba, 619, write_UInt32LE(cnt));
  write_record(ba, 48, write_BrtStyle({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  }));
  write_record(
    ba,
    620
    /* BrtEndStyles */
  );
}
function write_DXFS_bin(ba) {
  var cnt = 0;
  write_record(ba, 505, write_UInt32LE(cnt));
  write_record(
    ba,
    506
    /* BrtEndDXFs */
  );
}
function write_TABLESTYLES_bin(ba) {
  var cnt = 0;
  write_record(ba, 508, write_BrtBeginTableStyles(cnt, "TableStyleMedium9", "PivotStyleMedium4"));
  write_record(
    ba,
    509
    /* BrtEndTableStyles */
  );
}
function write_COLORPALETTE_bin() {
  return;
}
function write_sty_bin(wb, opts) {
  var ba = buf_array();
  write_record(
    ba,
    278
    /* BrtBeginStyleSheet */
  );
  write_FMTS_bin(ba, wb.SSF);
  write_FONTS_bin(ba, wb);
  write_FILLS_bin(ba, wb);
  write_BORDERS_bin(ba, wb);
  write_CELLSTYLEXFS_bin(ba, wb);
  write_CELLXFS_bin(ba, opts.cellXfs);
  write_STYLES_bin(ba, wb);
  write_DXFS_bin(ba, wb);
  write_TABLESTYLES_bin(ba, wb);
  write_COLORPALETTE_bin(ba, wb);
  write_record(
    ba,
    279
    /* BrtEndStyleSheet */
  );
  return ba.end();
}
function write_theme(Themes, opts) {
  if (opts && opts.themeXLSX) return opts.themeXLSX;
  if (Themes && typeof Themes.raw == "string") return Themes.raw;
  var o = [XML_HEADER];
  o[o.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
  o[o.length] = "<a:themeElements>";
  o[o.length] = '<a:clrScheme name="Office">';
  o[o.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
  o[o.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
  o[o.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
  o[o.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
  o[o.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
  o[o.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
  o[o.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
  o[o.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
  o[o.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
  o[o.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
  o[o.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
  o[o.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
  o[o.length] = "</a:clrScheme>";
  o[o.length] = '<a:fontScheme name="Office">';
  o[o.length] = "<a:majorFont>";
  o[o.length] = '<a:latin typeface="Cambria"/>';
  o[o.length] = '<a:ea typeface=""/>';
  o[o.length] = '<a:cs typeface=""/>';
  o[o.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>';
  o[o.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>';
  o[o.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>';
  o[o.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>';
  o[o.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
  o[o.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
  o[o.length] = '<a:font script="Thai" typeface="Tahoma"/>';
  o[o.length] = '<a:font script="Ethi" typeface="Nyala"/>';
  o[o.length] = '<a:font script="Beng" typeface="Vrinda"/>';
  o[o.length] = '<a:font script="Gujr" typeface="Shruti"/>';
  o[o.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
  o[o.length] = '<a:font script="Knda" typeface="Tunga"/>';
  o[o.length] = '<a:font script="Guru" typeface="Raavi"/>';
  o[o.length] = '<a:font script="Cans" typeface="Euphemia"/>';
  o[o.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
  o[o.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
  o[o.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
  o[o.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
  o[o.length] = '<a:font script="Deva" typeface="Mangal"/>';
  o[o.length] = '<a:font script="Telu" typeface="Gautami"/>';
  o[o.length] = '<a:font script="Taml" typeface="Latha"/>';
  o[o.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
  o[o.length] = '<a:font script="Orya" typeface="Kalinga"/>';
  o[o.length] = '<a:font script="Mlym" typeface="Kartika"/>';
  o[o.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
  o[o.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
  o[o.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
  o[o.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
  o[o.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
  o[o.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
  o[o.length] = "</a:majorFont>";
  o[o.length] = "<a:minorFont>";
  o[o.length] = '<a:latin typeface="Calibri"/>';
  o[o.length] = '<a:ea typeface=""/>';
  o[o.length] = '<a:cs typeface=""/>';
  o[o.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>';
  o[o.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>';
  o[o.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>';
  o[o.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>';
  o[o.length] = '<a:font script="Arab" typeface="Arial"/>';
  o[o.length] = '<a:font script="Hebr" typeface="Arial"/>';
  o[o.length] = '<a:font script="Thai" typeface="Tahoma"/>';
  o[o.length] = '<a:font script="Ethi" typeface="Nyala"/>';
  o[o.length] = '<a:font script="Beng" typeface="Vrinda"/>';
  o[o.length] = '<a:font script="Gujr" typeface="Shruti"/>';
  o[o.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
  o[o.length] = '<a:font script="Knda" typeface="Tunga"/>';
  o[o.length] = '<a:font script="Guru" typeface="Raavi"/>';
  o[o.length] = '<a:font script="Cans" typeface="Euphemia"/>';
  o[o.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
  o[o.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
  o[o.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
  o[o.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
  o[o.length] = '<a:font script="Deva" typeface="Mangal"/>';
  o[o.length] = '<a:font script="Telu" typeface="Gautami"/>';
  o[o.length] = '<a:font script="Taml" typeface="Latha"/>';
  o[o.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
  o[o.length] = '<a:font script="Orya" typeface="Kalinga"/>';
  o[o.length] = '<a:font script="Mlym" typeface="Kartika"/>';
  o[o.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
  o[o.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
  o[o.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
  o[o.length] = '<a:font script="Viet" typeface="Arial"/>';
  o[o.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
  o[o.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
  o[o.length] = "</a:minorFont>";
  o[o.length] = "</a:fontScheme>";
  o[o.length] = '<a:fmtScheme name="Office">';
  o[o.length] = "<a:fillStyleLst>";
  o[o.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:lin ang="16200000" scaled="1"/>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:lin ang="16200000" scaled="0"/>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = "</a:fillStyleLst>";
  o[o.length] = "<a:lnStyleLst>";
  o[o.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
  o[o.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
  o[o.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
  o[o.length] = "</a:lnStyleLst>";
  o[o.length] = "<a:effectStyleLst>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
  o[o.length] = "</a:effectLst>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
  o[o.length] = "</a:effectLst>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
  o[o.length] = "</a:effectLst>";
  o[o.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
  o[o.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "</a:effectStyleLst>";
  o[o.length] = "<a:bgFillStyleLst>";
  o[o.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = "</a:bgFillStyleLst>";
  o[o.length] = "</a:fmtScheme>";
  o[o.length] = "</a:themeElements>";
  o[o.length] = "<a:objectDefaults>";
  o[o.length] = "<a:spDef>";
  o[o.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
  o[o.length] = "</a:spDef>";
  o[o.length] = "<a:lnDef>";
  o[o.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
  o[o.length] = "</a:lnDef>";
  o[o.length] = "</a:objectDefaults>";
  o[o.length] = "<a:extraClrSchemeLst/>";
  o[o.length] = "</a:theme>";
  return o.join("");
}
function parse_BrtMdtinfo(data2, length) {
  return {
    flags: data2.read_shift(4),
    version: data2.read_shift(4),
    name: parse_XLWideString(data2, length - 8)
  };
}
function write_BrtMdtinfo(data2) {
  var o = new_buf(12 + 2 * data2.name.length);
  o.write_shift(4, data2.flags);
  o.write_shift(4, data2.version);
  write_XLWideString(data2.name, o);
  return o.slice(0, o.l);
}
function parse_BrtMdb(data2) {
  var out = [];
  var cnt = data2.read_shift(4);
  while (cnt-- > 0)
    out.push([data2.read_shift(4), data2.read_shift(4)]);
  return out;
}
function write_BrtMdb(mdb) {
  var o = new_buf(4 + 8 * mdb.length);
  o.write_shift(4, mdb.length);
  for (var i = 0; i < mdb.length; ++i) {
    o.write_shift(4, mdb[i][0]);
    o.write_shift(4, mdb[i][1]);
  }
  return o;
}
function write_BrtBeginEsfmd(cnt, name) {
  var o = new_buf(8 + 2 * name.length);
  o.write_shift(4, cnt);
  write_XLWideString(name, o);
  return o.slice(0, o.l);
}
function parse_BrtBeginEsmdb(data2) {
  data2.l += 4;
  return data2.read_shift(4) != 0;
}
function write_BrtBeginEsmdb(cnt, cm) {
  var o = new_buf(8);
  o.write_shift(4, cnt);
  o.write_shift(4, cm ? 1 : 0);
  return o;
}
function write_xlmeta_bin() {
  var ba = buf_array();
  write_record(ba, 332);
  write_record(ba, 334, write_UInt32LE(1));
  write_record(ba, 335, write_BrtMdtinfo({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  }));
  write_record(ba, 336);
  write_record(ba, 339, write_BrtBeginEsfmd(1, "XLDAPR"));
  write_record(ba, 52);
  write_record(ba, 35, write_UInt32LE(514));
  write_record(ba, 4096, write_UInt32LE(0));
  write_record(ba, 4097, writeuint16(1));
  write_record(ba, 36);
  write_record(ba, 53);
  write_record(ba, 340);
  write_record(ba, 337, write_BrtBeginEsmdb(1, true));
  write_record(ba, 51, write_BrtMdb([[1, 0]]));
  write_record(ba, 338);
  write_record(ba, 333);
  return ba.end();
}
function write_xlmeta_xml() {
  var o = [XML_HEADER];
  o.push('<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">\n  <metadataTypes count="1">\n    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>\n  </metadataTypes>\n  <futureMetadata name="XLDAPR" count="1">\n    <bk>\n      <extLst>\n        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">\n          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count="1">\n    <bk>\n      <rc t="1" v="0"/>\n    </bk>\n  </cellMetadata>\n</metadata>');
  return o.join("");
}
function parse_BrtCalcChainItem$(data2) {
  var out = {};
  out.i = data2.read_shift(4);
  var cell = {};
  cell.r = data2.read_shift(4);
  cell.c = data2.read_shift(4);
  out.r = encode_cell(cell);
  var flags = data2.read_shift(1);
  if (flags & 2) out.l = "1";
  if (flags & 8) out.a = "1";
  return out;
}
var _shapeid = 1024;
function write_comments_vml(rId, comments) {
  var csize = [21600, 21600];
  var bbox = ["m0,0l0", csize[1], csize[0], csize[1], csize[0], "0xe"].join(",");
  var o = [
    writextag("xml", null, { "xmlns:v": XLMLNS.v, "xmlns:o": XLMLNS.o, "xmlns:x": XLMLNS.x, "xmlns:mv": XLMLNS.mv }).replace(/\/>/, ">"),
    writextag("o:shapelayout", writextag("o:idmap", null, { "v:ext": "edit", "data": rId }), { "v:ext": "edit" }),
    writextag("v:shapetype", [
      writextag("v:stroke", null, { joinstyle: "miter" }),
      writextag("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: csize.join(","), path: bbox })
  ];
  while (_shapeid < rId * 1e3) _shapeid += 1e3;
  comments.forEach(function(x) {
    var c = decode_cell(x[0]);
    var fillopts = (
      /*::(*/
      { "color2": "#BEFF82", "type": "gradient" }
    );
    if (fillopts.type == "gradient") fillopts.angle = "-180";
    var fillparm = fillopts.type == "gradient" ? writextag("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null;
    var fillxml = writextag("v:fill", fillparm, fillopts);
    var shadata = { on: "t", "obscured": "t" };
    ++_shapeid;
    o = o.concat([
      "<v:shape" + wxt_helper({
        id: "_x0000_s" + _shapeid,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (x[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      fillxml,
      writextag("v:shadow", null, shadata),
      writextag("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      /* Part 4 19.4.2.3 Anchor (Anchor) */
      writetag("x:Anchor", [c.c + 1, 0, c.r + 1, 0, c.c + 3, 20, c.r + 5, 20].join(",")),
      writetag("x:AutoFill", "False"),
      writetag("x:Row", String(c.r)),
      writetag("x:Column", String(c.c)),
      x[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  });
  o.push("</xml>");
  return o.join("");
}
function write_comments_xml(data2) {
  var o = [XML_HEADER, writextag("comments", null, { "xmlns": XMLNS_main[0] })];
  var iauthor = [];
  o.push("<authors>");
  data2.forEach(function(x) {
    x[1].forEach(function(w) {
      var a = escapexml(w.a);
      if (iauthor.indexOf(a) == -1) {
        iauthor.push(a);
        o.push("<author>" + a + "</author>");
      }
      if (w.T && w.ID && iauthor.indexOf("tc=" + w.ID) == -1) {
        iauthor.push("tc=" + w.ID);
        o.push("<author>tc=" + w.ID + "</author>");
      }
    });
  });
  if (iauthor.length == 0) {
    iauthor.push("SheetJ5");
    o.push("<author>SheetJ5</author>");
  }
  o.push("</authors>");
  o.push("<commentList>");
  data2.forEach(function(d) {
    var lastauthor = 0, ts = [];
    if (d[1][0] && d[1][0].T && d[1][0].ID) lastauthor = iauthor.indexOf("tc=" + d[1][0].ID);
    else d[1].forEach(function(c) {
      if (c.a) lastauthor = iauthor.indexOf(escapexml(c.a));
      ts.push(c.t || "");
    });
    o.push('<comment ref="' + d[0] + '" authorId="' + lastauthor + '"><text>');
    if (ts.length <= 1) o.push(writetag("t", escapexml(ts[0] || "")));
    else {
      var t = "Comment:\n    " + ts[0] + "\n";
      for (var i = 1; i < ts.length; ++i) t += "Reply:\n    " + ts[i] + "\n";
      o.push(writetag("t", escapexml(t)));
    }
    o.push("</text></comment>");
  });
  o.push("</commentList>");
  if (o.length > 2) {
    o[o.length] = "</comments>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function write_tcmnt_xml(comments, people, opts) {
  var o = [XML_HEADER, writextag("ThreadedComments", null, { "xmlns": XMLNS.TCMNT }).replace(/[\/]>/, ">")];
  comments.forEach(function(carr) {
    var rootid = "";
    (carr[1] || []).forEach(function(c, idx) {
      if (!c.T) {
        delete c.ID;
        return;
      }
      if (c.a && people.indexOf(c.a) == -1) people.push(c.a);
      var tcopts = {
        ref: carr[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + opts.tcid++).slice(-12) + "}"
      };
      if (idx == 0) rootid = tcopts.id;
      else tcopts.parentId = rootid;
      c.ID = tcopts.id;
      if (c.a) tcopts.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + people.indexOf(c.a)).slice(-12) + "}";
      o.push(writextag("threadedComment", writetag("text", c.t || ""), tcopts));
    });
  });
  o.push("</ThreadedComments>");
  return o.join("");
}
function write_people_xml(people) {
  var o = [XML_HEADER, writextag("personList", null, {
    "xmlns": XMLNS.TCMNT,
    "xmlns:x": XMLNS_main[0]
  }).replace(/[\/]>/, ">")];
  people.forEach(function(person, idx) {
    o.push(writextag("person", null, {
      displayName: person,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + idx).slice(-12) + "}",
      userId: person,
      providerId: "None"
    }));
  });
  o.push("</personList>");
  return o.join("");
}
function parse_BrtBeginComment(data2) {
  var out = {};
  out.iauthor = data2.read_shift(4);
  var rfx = parse_UncheckedRfX(data2, 16);
  out.rfx = rfx.s;
  out.ref = encode_cell(rfx.s);
  data2.l += 16;
  return out;
}
function write_BrtBeginComment(data2, o) {
  if (o == null) o = new_buf(36);
  o.write_shift(4, data2[1].iauthor);
  write_UncheckedRfX(data2[0], o);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  return o;
}
var parse_BrtCommentAuthor = parse_XLWideString;
function write_BrtCommentAuthor(data2) {
  return write_XLWideString(data2.slice(0, 54));
}
function write_comments_bin(data2) {
  var ba = buf_array();
  var iauthor = [];
  write_record(
    ba,
    628
    /* BrtBeginComments */
  );
  write_record(
    ba,
    630
    /* BrtBeginCommentAuthors */
  );
  data2.forEach(function(comment) {
    comment[1].forEach(function(c) {
      if (iauthor.indexOf(c.a) > -1) return;
      iauthor.push(c.a.slice(0, 54));
      write_record(ba, 632, write_BrtCommentAuthor(c.a));
    });
  });
  write_record(
    ba,
    631
    /* BrtEndCommentAuthors */
  );
  write_record(
    ba,
    633
    /* BrtBeginCommentList */
  );
  data2.forEach(function(comment) {
    comment[1].forEach(function(c) {
      c.iauthor = iauthor.indexOf(c.a);
      var range = { s: decode_cell(comment[0]), e: decode_cell(comment[0]) };
      write_record(ba, 635, write_BrtBeginComment([range, c]));
      if (c.t && c.t.length > 0) write_record(ba, 637, write_BrtCommentText(c));
      write_record(
        ba,
        636
        /* BrtEndComment */
      );
      delete c.iauthor;
    });
  });
  write_record(
    ba,
    634
    /* BrtEndCommentList */
  );
  write_record(
    ba,
    629
    /* BrtEndComments */
  );
  return ba.end();
}
function fill_vba_xls(cfb, vba) {
  vba.FullPaths.forEach(function(p, i) {
    if (i == 0)
      return;
    var newpath = p.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
    if (newpath.slice(-1) !== "/")
      CFB.utils.cfb_add(cfb, newpath, vba.FileIndex[i].content);
  });
}
var VBAFMTS = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
var rc_to_a1 = /* @__PURE__ */ (function() {
  var rcregex = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
  var rcbase = { r: 0, c: 0 };
  function rcfunc($$, $1, $2, $3) {
    var cRel = false, rRel = false;
    if ($2.length == 0) rRel = true;
    else if ($2.charAt(0) == "[") {
      rRel = true;
      $2 = $2.slice(1, -1);
    }
    if ($3.length == 0) cRel = true;
    else if ($3.charAt(0) == "[") {
      cRel = true;
      $3 = $3.slice(1, -1);
    }
    var R = $2.length > 0 ? parseInt($2, 10) | 0 : 0, C = $3.length > 0 ? parseInt($3, 10) | 0 : 0;
    if (cRel) C += rcbase.c;
    else --C;
    if (rRel) R += rcbase.r;
    else --R;
    return $1 + (cRel ? "" : "$") + encode_col(C) + (rRel ? "" : "$") + encode_row(R);
  }
  return function rc_to_a12(fstr, base) {
    rcbase = base;
    return fstr.replace(rcregex, rcfunc);
  };
})();
var crefregex = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
var a1_to_rc = /* @__PURE__ */ (function() {
  return function a1_to_rc2(fstr, base) {
    return fstr.replace(crefregex, function($0, $1, $2, $3, $4, $5) {
      var c = decode_col($3) - ($2 ? 0 : base.c);
      var r = decode_row($5) - ($4 ? 0 : base.r);
      var R = r == 0 ? "" : !$4 ? "[" + r + "]" : r + 1;
      var C = c == 0 ? "" : !$2 ? "[" + c + "]" : c + 1;
      return $1 + "R" + R + "C" + C;
    });
  };
})();
function shift_formula_str(f, delta) {
  return f.replace(crefregex, function($0, $1, $2, $3, $4, $5) {
    return $1 + ($2 == "$" ? $2 + $3 : encode_col(decode_col($3) + delta.c)) + ($4 == "$" ? $4 + $5 : encode_row(decode_row($5) + delta.r));
  });
}
function fuzzyfmla(f) {
  if (f.length == 1) return false;
  return true;
}
function parseread1(blob) {
  blob.l += 1;
  return;
}
function parse_ColRelU(blob, length) {
  var c = blob.read_shift(length == 1 ? 1 : 2);
  return [c & 16383, c >> 14 & 1, c >> 15 & 1];
}
function parse_RgceArea(blob, length, opts) {
  var w = 2;
  if (opts) {
    if (opts.biff >= 2 && opts.biff <= 5) return parse_RgceArea_BIFF2(blob, length, opts);
    else if (opts.biff == 12) w = 4;
  }
  var r = blob.read_shift(w), R = blob.read_shift(w);
  var c = parse_ColRelU(blob, 2);
  var C = parse_ColRelU(blob, 2);
  return { s: { r, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: R, c: C[0], cRel: C[1], rRel: C[2] } };
}
function parse_RgceArea_BIFF2(blob) {
  var r = parse_ColRelU(blob, 2), R = parse_ColRelU(blob, 2);
  var c = blob.read_shift(1);
  var C = blob.read_shift(1);
  return { s: { r: r[0], c, cRel: r[1], rRel: r[2] }, e: { r: R[0], c: C, cRel: R[1], rRel: R[2] } };
}
function parse_RgceAreaRel(blob, length, opts) {
  if (opts.biff < 8) return parse_RgceArea_BIFF2(blob, length, opts);
  var r = blob.read_shift(opts.biff == 12 ? 4 : 2), R = blob.read_shift(opts.biff == 12 ? 4 : 2);
  var c = parse_ColRelU(blob, 2);
  var C = parse_ColRelU(blob, 2);
  return { s: { r, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: R, c: C[0], cRel: C[1], rRel: C[2] } };
}
function parse_RgceLoc(blob, length, opts) {
  if (opts && opts.biff >= 2 && opts.biff <= 5) return parse_RgceLoc_BIFF2(blob, length, opts);
  var r = blob.read_shift(opts && opts.biff == 12 ? 4 : 2);
  var c = parse_ColRelU(blob, 2);
  return { r, c: c[0], cRel: c[1], rRel: c[2] };
}
function parse_RgceLoc_BIFF2(blob) {
  var r = parse_ColRelU(blob, 2);
  var c = blob.read_shift(1);
  return { r: r[0], c, cRel: r[1], rRel: r[2] };
}
function parse_RgceElfLoc(blob) {
  var r = blob.read_shift(2);
  var c = blob.read_shift(2);
  return { r, c: c & 255, fQuoted: !!(c & 16384), cRel: c >> 15, rRel: c >> 15 };
}
function parse_RgceLocRel(blob, length, opts) {
  var biff = opts && opts.biff ? opts.biff : 8;
  if (biff >= 2 && biff <= 5) return parse_RgceLocRel_BIFF2(blob, length, opts);
  var r = blob.read_shift(biff >= 12 ? 4 : 2);
  var cl = blob.read_shift(2);
  var cRel = (cl & 16384) >> 14, rRel = (cl & 32768) >> 15;
  cl &= 16383;
  if (rRel == 1) while (r > 524287) r -= 1048576;
  if (cRel == 1) while (cl > 8191) cl = cl - 16384;
  return { r, c: cl, cRel, rRel };
}
function parse_RgceLocRel_BIFF2(blob) {
  var rl = blob.read_shift(2);
  var c = blob.read_shift(1);
  var rRel = (rl & 32768) >> 15, cRel = (rl & 16384) >> 14;
  rl &= 16383;
  if (rRel == 1 && rl >= 8192) rl = rl - 16384;
  if (cRel == 1 && c >= 128) c = c - 256;
  return { r: rl, c, cRel, rRel };
}
function parse_PtgArea(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var area = parse_RgceArea(blob, opts.biff >= 2 && opts.biff <= 5 ? 6 : 8, opts);
  return [type, area];
}
function parse_PtgArea3d(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var ixti = blob.read_shift(2, "i");
  var w = 8;
  if (opts) switch (opts.biff) {
    case 5:
      blob.l += 12;
      w = 6;
      break;
    case 12:
      w = 12;
      break;
  }
  var area = parse_RgceArea(blob, w, opts);
  return [type, ixti, area];
}
function parse_PtgAreaErr(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  blob.l += opts && opts.biff > 8 ? 12 : opts.biff < 8 ? 6 : 8;
  return [type];
}
function parse_PtgAreaErr3d(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var ixti = blob.read_shift(2);
  var w = 8;
  if (opts) switch (opts.biff) {
    case 5:
      blob.l += 12;
      w = 6;
      break;
    case 12:
      w = 12;
      break;
  }
  blob.l += w;
  return [type, ixti];
}
function parse_PtgAreaN(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var area = parse_RgceAreaRel(blob, length - 1, opts);
  return [type, area];
}
function parse_PtgArray(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  blob.l += opts.biff == 2 ? 6 : opts.biff == 12 ? 14 : 7;
  return [type];
}
function parse_PtgAttrBaxcel(blob) {
  var bitSemi = blob[blob.l + 1] & 1;
  var bitBaxcel = 1;
  blob.l += 4;
  return [bitSemi, bitBaxcel];
}
function parse_PtgAttrChoose(blob, length, opts) {
  blob.l += 2;
  var offset = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  var o = [];
  for (var i = 0; i <= offset; ++i) o.push(blob.read_shift(opts && opts.biff == 2 ? 1 : 2));
  return o;
}
function parse_PtgAttrGoto(blob, length, opts) {
  var bitGoto = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += 2;
  return [bitGoto, blob.read_shift(opts && opts.biff == 2 ? 1 : 2)];
}
function parse_PtgAttrIf(blob, length, opts) {
  var bitIf = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += 2;
  return [bitIf, blob.read_shift(opts && opts.biff == 2 ? 1 : 2)];
}
function parse_PtgAttrIfError(blob) {
  var bitIf = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += 2;
  return [bitIf, blob.read_shift(2)];
}
function parse_PtgAttrSemi(blob, length, opts) {
  var bitSemi = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += opts && opts.biff == 2 ? 3 : 4;
  return [bitSemi];
}
function parse_PtgAttrSpaceType(blob) {
  var type = blob.read_shift(1), cch = blob.read_shift(1);
  return [type, cch];
}
function parse_PtgAttrSpace(blob) {
  blob.read_shift(2);
  return parse_PtgAttrSpaceType(blob, 2);
}
function parse_PtgAttrSpaceSemi(blob) {
  blob.read_shift(2);
  return parse_PtgAttrSpaceType(blob, 2);
}
function parse_PtgRef(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var loc = parse_RgceLoc(blob, 0, opts);
  return [type, loc];
}
function parse_PtgRefN(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var loc = parse_RgceLocRel(blob, 0, opts);
  return [type, loc];
}
function parse_PtgRef3d(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var ixti = blob.read_shift(2);
  if (opts && opts.biff == 5) blob.l += 12;
  var loc = parse_RgceLoc(blob, 0, opts);
  return [type, ixti, loc];
}
function parse_PtgFunc(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var iftab = blob.read_shift(opts && opts.biff <= 3 ? 1 : 2);
  return [FtabArgc[iftab], Ftab[iftab], type];
}
function parse_PtgFuncVar(blob, length, opts) {
  var type = blob[blob.l++];
  var cparams = blob.read_shift(1), tab = opts && opts.biff <= 3 ? [type == 88 ? -1 : 0, blob.read_shift(1)] : parsetab(blob);
  return [cparams, (tab[0] === 0 ? Ftab : Cetab)[tab[1]]];
}
function parsetab(blob) {
  return [blob[blob.l + 1] >> 7, blob.read_shift(2) & 32767];
}
function parse_PtgAttrSum(blob, length, opts) {
  blob.l += opts && opts.biff == 2 ? 3 : 4;
  return;
}
function parse_PtgExp(blob, length, opts) {
  blob.l++;
  if (opts && opts.biff == 12) return [blob.read_shift(4, "i"), 0];
  var row = blob.read_shift(2);
  var col = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  return [row, col];
}
function parse_PtgErr(blob) {
  blob.l++;
  return BErr[blob.read_shift(1)];
}
function parse_PtgInt(blob) {
  blob.l++;
  return blob.read_shift(2);
}
function parse_PtgBool(blob) {
  blob.l++;
  return blob.read_shift(1) !== 0;
}
function parse_PtgNum(blob) {
  blob.l++;
  return parse_Xnum(blob, 8);
}
function parse_PtgStr(blob, length, opts) {
  blob.l++;
  return parse_ShortXLUnicodeString(blob, length - 1, opts);
}
function parse_SerAr(blob, biff) {
  var val = [blob.read_shift(1)];
  if (biff == 12) switch (val[0]) {
    case 2:
      val[0] = 4;
      break;
    /* SerBool */
    case 4:
      val[0] = 16;
      break;
    /* SerErr */
    case 0:
      val[0] = 1;
      break;
    /* SerNum */
    case 1:
      val[0] = 2;
      break;
  }
  switch (val[0]) {
    case 4:
      val[1] = parsebool(blob, 1) ? "TRUE" : "FALSE";
      if (biff != 12) blob.l += 7;
      break;
    case 37:
    /* appears to be an alias */
    case 16:
      val[1] = BErr[blob[blob.l]];
      blob.l += biff == 12 ? 4 : 8;
      break;
    case 0:
      blob.l += 8;
      break;
    case 1:
      val[1] = parse_Xnum(blob, 8);
      break;
    case 2:
      val[1] = parse_XLUnicodeString2(blob, 0, { biff: biff > 0 && biff < 8 ? 2 : biff });
      break;
    default:
      throw new Error("Bad SerAr: " + val[0]);
  }
  return val;
}
function parse_PtgExtraMem(blob, cce, opts) {
  var count = blob.read_shift(opts.biff == 12 ? 4 : 2);
  var out = [];
  for (var i = 0; i != count; ++i) out.push((opts.biff == 12 ? parse_UncheckedRfX : parse_Ref8U)(blob, 8));
  return out;
}
function parse_PtgExtraArray(blob, length, opts) {
  var rows = 0, cols = 0;
  if (opts.biff == 12) {
    rows = blob.read_shift(4);
    cols = blob.read_shift(4);
  } else {
    cols = 1 + blob.read_shift(1);
    rows = 1 + blob.read_shift(2);
  }
  if (opts.biff >= 2 && opts.biff < 8) {
    --rows;
    if (--cols == 0) cols = 256;
  }
  for (var i = 0, o = []; i != rows && (o[i] = []); ++i)
    for (var j = 0; j != cols; ++j) o[i][j] = parse_SerAr(blob, opts.biff);
  return o;
}
function parse_PtgName(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var w = !opts || opts.biff >= 8 ? 4 : 2;
  var nameindex = blob.read_shift(w);
  switch (opts.biff) {
    case 2:
      blob.l += 5;
      break;
    case 3:
    case 4:
      blob.l += 8;
      break;
    case 5:
      blob.l += 12;
      break;
  }
  return [type, 0, nameindex];
}
function parse_PtgNameX(blob, length, opts) {
  if (opts.biff == 5) return parse_PtgNameX_BIFF5(blob, length, opts);
  var type = blob.read_shift(1) >>> 5 & 3;
  var ixti = blob.read_shift(2);
  var nameindex = blob.read_shift(4);
  return [type, ixti, nameindex];
}
function parse_PtgNameX_BIFF5(blob) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var ixti = blob.read_shift(2, "i");
  blob.l += 8;
  var nameindex = blob.read_shift(2);
  blob.l += 12;
  return [type, ixti, nameindex];
}
function parse_PtgMemArea(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  blob.l += opts && opts.biff == 2 ? 3 : 4;
  var cce = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  return [type, cce];
}
function parse_PtgMemFunc(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var cce = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  return [type, cce];
}
function parse_PtgRefErr(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  blob.l += 4;
  if (opts.biff < 8) blob.l--;
  if (opts.biff == 12) blob.l += 2;
  return [type];
}
function parse_PtgRefErr3d(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var ixti = blob.read_shift(2);
  var w = 4;
  if (opts) switch (opts.biff) {
    case 5:
      w = 15;
      break;
    case 12:
      w = 6;
      break;
  }
  blob.l += w;
  return [type, ixti];
}
var parse_PtgMemErr = parsenoop;
var parse_PtgMemNoMem = parsenoop;
var parse_PtgTbl = parsenoop;
function parse_PtgElfLoc(blob, length, opts) {
  blob.l += 2;
  return [parse_RgceElfLoc(blob, 4, opts)];
}
function parse_PtgElfNoop(blob) {
  blob.l += 6;
  return [];
}
var parse_PtgElfCol = parse_PtgElfLoc;
var parse_PtgElfColS = parse_PtgElfNoop;
var parse_PtgElfColSV = parse_PtgElfNoop;
var parse_PtgElfColV = parse_PtgElfLoc;
function parse_PtgElfLel(blob) {
  blob.l += 2;
  return [parseuint16(blob), blob.read_shift(2) & 1];
}
var parse_PtgElfRadical = parse_PtgElfLoc;
var parse_PtgElfRadicalLel = parse_PtgElfLel;
var parse_PtgElfRadicalS = parse_PtgElfNoop;
var parse_PtgElfRw = parse_PtgElfLoc;
var parse_PtgElfRwV = parse_PtgElfLoc;
var PtgListRT = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function parse_PtgList(blob) {
  blob.l += 2;
  var ixti = blob.read_shift(2);
  var flags = blob.read_shift(2);
  var idx = blob.read_shift(4);
  var c = blob.read_shift(2);
  var C = blob.read_shift(2);
  var rt = PtgListRT[flags >> 2 & 31];
  return { ixti, coltype: flags & 3, rt, idx, c, C };
}
function parse_PtgSxName(blob) {
  blob.l += 2;
  return [blob.read_shift(4)];
}
function parse_PtgSheet(blob, length, opts) {
  blob.l += 5;
  blob.l += 2;
  blob.l += opts.biff == 2 ? 1 : 4;
  return ["PTGSHEET"];
}
function parse_PtgEndSheet(blob, length, opts) {
  blob.l += opts.biff == 2 ? 4 : 5;
  return ["PTGENDSHEET"];
}
function parse_PtgMemAreaN(blob) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var cce = blob.read_shift(2);
  return [type, cce];
}
function parse_PtgMemNoMemN(blob) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var cce = blob.read_shift(2);
  return [type, cce];
}
function parse_PtgAttrNoop(blob) {
  blob.l += 4;
  return [0, 0];
}
var PtgTypes = {
  /*::[*/
  1: { n: "PtgExp", f: parse_PtgExp },
  /*::[*/
  2: { n: "PtgTbl", f: parse_PtgTbl },
  /*::[*/
  3: { n: "PtgAdd", f: parseread1 },
  /*::[*/
  4: { n: "PtgSub", f: parseread1 },
  /*::[*/
  5: { n: "PtgMul", f: parseread1 },
  /*::[*/
  6: { n: "PtgDiv", f: parseread1 },
  /*::[*/
  7: { n: "PtgPower", f: parseread1 },
  /*::[*/
  8: { n: "PtgConcat", f: parseread1 },
  /*::[*/
  9: { n: "PtgLt", f: parseread1 },
  /*::[*/
  10: { n: "PtgLe", f: parseread1 },
  /*::[*/
  11: { n: "PtgEq", f: parseread1 },
  /*::[*/
  12: { n: "PtgGe", f: parseread1 },
  /*::[*/
  13: { n: "PtgGt", f: parseread1 },
  /*::[*/
  14: { n: "PtgNe", f: parseread1 },
  /*::[*/
  15: { n: "PtgIsect", f: parseread1 },
  /*::[*/
  16: { n: "PtgUnion", f: parseread1 },
  /*::[*/
  17: { n: "PtgRange", f: parseread1 },
  /*::[*/
  18: { n: "PtgUplus", f: parseread1 },
  /*::[*/
  19: { n: "PtgUminus", f: parseread1 },
  /*::[*/
  20: { n: "PtgPercent", f: parseread1 },
  /*::[*/
  21: { n: "PtgParen", f: parseread1 },
  /*::[*/
  22: { n: "PtgMissArg", f: parseread1 },
  /*::[*/
  23: { n: "PtgStr", f: parse_PtgStr },
  /*::[*/
  26: { n: "PtgSheet", f: parse_PtgSheet },
  /*::[*/
  27: { n: "PtgEndSheet", f: parse_PtgEndSheet },
  /*::[*/
  28: { n: "PtgErr", f: parse_PtgErr },
  /*::[*/
  29: { n: "PtgBool", f: parse_PtgBool },
  /*::[*/
  30: { n: "PtgInt", f: parse_PtgInt },
  /*::[*/
  31: { n: "PtgNum", f: parse_PtgNum },
  /*::[*/
  32: { n: "PtgArray", f: parse_PtgArray },
  /*::[*/
  33: { n: "PtgFunc", f: parse_PtgFunc },
  /*::[*/
  34: { n: "PtgFuncVar", f: parse_PtgFuncVar },
  /*::[*/
  35: { n: "PtgName", f: parse_PtgName },
  /*::[*/
  36: { n: "PtgRef", f: parse_PtgRef },
  /*::[*/
  37: { n: "PtgArea", f: parse_PtgArea },
  /*::[*/
  38: { n: "PtgMemArea", f: parse_PtgMemArea },
  /*::[*/
  39: { n: "PtgMemErr", f: parse_PtgMemErr },
  /*::[*/
  40: { n: "PtgMemNoMem", f: parse_PtgMemNoMem },
  /*::[*/
  41: { n: "PtgMemFunc", f: parse_PtgMemFunc },
  /*::[*/
  42: { n: "PtgRefErr", f: parse_PtgRefErr },
  /*::[*/
  43: { n: "PtgAreaErr", f: parse_PtgAreaErr },
  /*::[*/
  44: { n: "PtgRefN", f: parse_PtgRefN },
  /*::[*/
  45: { n: "PtgAreaN", f: parse_PtgAreaN },
  /*::[*/
  46: { n: "PtgMemAreaN", f: parse_PtgMemAreaN },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: parse_PtgMemNoMemN },
  /*::[*/
  57: { n: "PtgNameX", f: parse_PtgNameX },
  /*::[*/
  58: { n: "PtgRef3d", f: parse_PtgRef3d },
  /*::[*/
  59: { n: "PtgArea3d", f: parse_PtgArea3d },
  /*::[*/
  60: { n: "PtgRefErr3d", f: parse_PtgRefErr3d },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: parse_PtgAreaErr3d },
  /*::[*/
  255: {}
};
var PtgDupes = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
};
var Ptg18 = {
  /*::[*/
  1: { n: "PtgElfLel", f: parse_PtgElfLel },
  /*::[*/
  2: { n: "PtgElfRw", f: parse_PtgElfRw },
  /*::[*/
  3: { n: "PtgElfCol", f: parse_PtgElfCol },
  /*::[*/
  6: { n: "PtgElfRwV", f: parse_PtgElfRwV },
  /*::[*/
  7: { n: "PtgElfColV", f: parse_PtgElfColV },
  /*::[*/
  10: { n: "PtgElfRadical", f: parse_PtgElfRadical },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: parse_PtgElfRadicalS },
  /*::[*/
  13: { n: "PtgElfColS", f: parse_PtgElfColS },
  /*::[*/
  15: { n: "PtgElfColSV", f: parse_PtgElfColSV },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: parse_PtgElfRadicalLel },
  /*::[*/
  25: { n: "PtgList", f: parse_PtgList },
  /*::[*/
  29: { n: "PtgSxName", f: parse_PtgSxName },
  /*::[*/
  255: {}
};
var Ptg19 = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: parse_PtgAttrNoop },
  /*::[*/
  1: { n: "PtgAttrSemi", f: parse_PtgAttrSemi },
  /*::[*/
  2: { n: "PtgAttrIf", f: parse_PtgAttrIf },
  /*::[*/
  4: { n: "PtgAttrChoose", f: parse_PtgAttrChoose },
  /*::[*/
  8: { n: "PtgAttrGoto", f: parse_PtgAttrGoto },
  /*::[*/
  16: { n: "PtgAttrSum", f: parse_PtgAttrSum },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: parse_PtgAttrBaxcel },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: parse_PtgAttrBaxcel },
  /*::[*/
  64: { n: "PtgAttrSpace", f: parse_PtgAttrSpace },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: parse_PtgAttrSpaceSemi },
  /*::[*/
  128: { n: "PtgAttrIfError", f: parse_PtgAttrIfError },
  /*::[*/
  255: {}
};
function parse_RgbExtra(blob, length, rgce, opts) {
  if (opts.biff < 8) return parsenoop(blob, length);
  var target = blob.l + length;
  var o = [];
  for (var i = 0; i !== rgce.length; ++i) {
    switch (rgce[i][0]) {
      case "PtgArray":
        rgce[i][1] = parse_PtgExtraArray(blob, 0, opts);
        o.push(rgce[i][1]);
        break;
      case "PtgMemArea":
        rgce[i][2] = parse_PtgExtraMem(blob, rgce[i][1], opts);
        o.push(rgce[i][2]);
        break;
      case "PtgExp":
        if (opts && opts.biff == 12) {
          rgce[i][1][1] = blob.read_shift(4);
          o.push(rgce[i][1]);
        }
        break;
      case "PtgList":
      /* TODO: PtgList -> PtgExtraList */
      case "PtgElfRadicalS":
      /* TODO: PtgElfRadicalS -> PtgExtraElf */
      case "PtgElfColS":
      /* TODO: PtgElfColS -> PtgExtraElf */
      case "PtgElfColSV":
        throw "Unsupported " + rgce[i][0];
      default:
        break;
    }
  }
  length = target - blob.l;
  if (length !== 0) o.push(parsenoop(blob, length));
  return o;
}
function parse_Rgce(blob, length, opts) {
  var target = blob.l + length;
  var R, id, ptgs = [];
  while (target != blob.l) {
    length = target - blob.l;
    id = blob[blob.l];
    R = PtgTypes[id] || PtgTypes[PtgDupes[id]];
    if (id === 24 || id === 25) R = (id === 24 ? Ptg18 : Ptg19)[blob[blob.l + 1]];
    if (!R || !R.f) {
      parsenoop(blob, length);
    } else {
      ptgs.push([R.n, R.f(blob, length, opts)]);
    }
  }
  return ptgs;
}
function stringify_array(f) {
  var o = [];
  for (var i = 0; i < f.length; ++i) {
    var x = f[i], r = [];
    for (var j = 0; j < x.length; ++j) {
      var y = x[j];
      if (y) switch (y[0]) {
        // TODO: handle embedded quotes
        case 2:
          r.push('"' + y[1].replace(/"/g, '""') + '"');
          break;
        default:
          r.push(y[1]);
      }
      else r.push("");
    }
    o.push(r.join(","));
  }
  return o.join(";");
}
var PtgBinOp = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function formula_quote_sheet_name(sname, opts) {
  if (!sname && !(opts && opts.biff <= 5 && opts.biff >= 2)) throw new Error("empty sheet name");
  if (/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(sname)) return "'" + sname + "'";
  return sname;
}
function get_ixti_raw(supbooks, ixti, opts) {
  if (!supbooks) return "SH33TJSERR0";
  if (opts.biff > 8 && (!supbooks.XTI || !supbooks.XTI[ixti])) return supbooks.SheetNames[ixti];
  if (!supbooks.XTI) return "SH33TJSERR6";
  var XTI = supbooks.XTI[ixti];
  if (opts.biff < 8) {
    if (ixti > 1e4) ixti -= 65536;
    if (ixti < 0) ixti = -ixti;
    return ixti == 0 ? "" : supbooks.XTI[ixti - 1];
  }
  if (!XTI) return "SH33TJSERR1";
  var o = "";
  if (opts.biff > 8) switch (supbooks[XTI[0]][0]) {
    case 357:
      o = XTI[1] == -1 ? "#REF" : supbooks.SheetNames[XTI[1]];
      return XTI[1] == XTI[2] ? o : o + ":" + supbooks.SheetNames[XTI[2]];
    case 358:
      if (opts.SID != null) return supbooks.SheetNames[opts.SID];
      return "SH33TJSSAME" + supbooks[XTI[0]][0];
    case 355:
    /* 'BrtSupBookSrc' */
    /* falls through */
    default:
      return "SH33TJSSRC" + supbooks[XTI[0]][0];
  }
  switch (supbooks[XTI[0]][0][0]) {
    case 1025:
      o = XTI[1] == -1 ? "#REF" : supbooks.SheetNames[XTI[1]] || "SH33TJSERR3";
      return XTI[1] == XTI[2] ? o : o + ":" + supbooks.SheetNames[XTI[2]];
    case 14849:
      return supbooks[XTI[0]].slice(1).map(function(name) {
        return name.Name;
      }).join(";;");
    //return "SH33TJSERR8";
    default:
      if (!supbooks[XTI[0]][0][3]) return "SH33TJSERR2";
      o = XTI[1] == -1 ? "#REF" : supbooks[XTI[0]][0][3][XTI[1]] || "SH33TJSERR4";
      return XTI[1] == XTI[2] ? o : o + ":" + supbooks[XTI[0]][0][3][XTI[2]];
  }
}
function get_ixti(supbooks, ixti, opts) {
  var ixtiraw = get_ixti_raw(supbooks, ixti, opts);
  return ixtiraw == "#REF" ? ixtiraw : formula_quote_sheet_name(ixtiraw, opts);
}
function stringify_formula(formula, range, cell, supbooks, opts) {
  var biff = opts && opts.biff || 8;
  var _range = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  );
  var stack = [], e1, e2, c, ixti = 0, nameidx = 0, r, sname = "";
  if (!formula[0] || !formula[0][0]) return "";
  var last_sp = -1, sp = "";
  for (var ff = 0, fflen = formula[0].length; ff < fflen; ++ff) {
    var f = formula[0][ff];
    switch (f[0]) {
      case "PtgUminus":
        stack.push("-" + stack.pop());
        break;
      case "PtgUplus":
        stack.push("+" + stack.pop());
        break;
      case "PtgPercent":
        stack.push(stack.pop() + "%");
        break;
      case "PtgAdd":
      /* [MS-XLS] 2.5.198.26 */
      case "PtgConcat":
      /* [MS-XLS] 2.5.198.43 */
      case "PtgDiv":
      /* [MS-XLS] 2.5.198.45 */
      case "PtgEq":
      /* [MS-XLS] 2.5.198.56 */
      case "PtgGe":
      /* [MS-XLS] 2.5.198.64 */
      case "PtgGt":
      /* [MS-XLS] 2.5.198.65 */
      case "PtgLe":
      /* [MS-XLS] 2.5.198.68 */
      case "PtgLt":
      /* [MS-XLS] 2.5.198.69 */
      case "PtgMul":
      /* [MS-XLS] 2.5.198.75 */
      case "PtgNe":
      /* [MS-XLS] 2.5.198.78 */
      case "PtgPower":
      /* [MS-XLS] 2.5.198.82 */
      case "PtgSub":
        e1 = stack.pop();
        e2 = stack.pop();
        if (last_sp >= 0) {
          switch (formula[0][last_sp][1][0]) {
            case 0:
              sp = fill(" ", formula[0][last_sp][1][1]);
              break;
            case 1:
              sp = fill("\r", formula[0][last_sp][1][1]);
              break;
            default:
              sp = "";
              if (opts.WTF) throw new Error("Unexpected PtgAttrSpaceType " + formula[0][last_sp][1][0]);
          }
          e2 = e2 + sp;
          last_sp = -1;
        }
        stack.push(e2 + PtgBinOp[f[0]] + e1);
        break;
      case "PtgIsect":
        e1 = stack.pop();
        e2 = stack.pop();
        stack.push(e2 + " " + e1);
        break;
      case "PtgUnion":
        e1 = stack.pop();
        e2 = stack.pop();
        stack.push(e2 + "," + e1);
        break;
      case "PtgRange":
        e1 = stack.pop();
        e2 = stack.pop();
        stack.push(e2 + ":" + e1);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = shift_cell_xls(f[1][1], _range, opts);
        stack.push(encode_cell_xls(c, biff));
        break;
      case "PtgRefN":
        c = cell ? shift_cell_xls(f[1][1], cell, opts) : f[1][1];
        stack.push(encode_cell_xls(c, biff));
        break;
      case "PtgRef3d":
        ixti = /*::Number(*/
        f[1][1];
        c = shift_cell_xls(f[1][2], _range, opts);
        sname = get_ixti(supbooks, ixti, opts);
        var w = sname;
        stack.push(sname + "!" + encode_cell_xls(c, biff));
        break;
      case "PtgFunc":
      /* [MS-XLS] 2.5.198.62 */
      case "PtgFuncVar":
        var argc = f[1][0], func = f[1][1];
        if (!argc) argc = 0;
        argc &= 127;
        var args = argc == 0 ? [] : stack.slice(-argc);
        stack.length -= argc;
        if (func === "User") func = args.shift();
        stack.push(func + "(" + args.join(",") + ")");
        break;
      case "PtgBool":
        stack.push(f[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        stack.push(
          /*::String(*/
          f[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        stack.push(String(f[1]));
        break;
      case "PtgStr":
        stack.push('"' + f[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        stack.push(
          /*::String(*/
          f[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        r = shift_range_xls(f[1][1], cell ? { s: cell } : _range, opts);
        stack.push(encode_range_xls(r, opts));
        break;
      case "PtgArea":
        r = shift_range_xls(f[1][1], _range, opts);
        stack.push(encode_range_xls(r, opts));
        break;
      case "PtgArea3d":
        ixti = /*::Number(*/
        f[1][1];
        r = f[1][2];
        sname = get_ixti(supbooks, ixti, opts);
        stack.push(sname + "!" + encode_range_xls(r, opts));
        break;
      case "PtgAttrSum":
        stack.push("SUM(" + stack.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      /* [MS-XLS] 2.5.198.33 */
      case "PtgAttrSemi":
        break;
      case "PtgName":
        nameidx = f[1][2];
        var lbl = (supbooks.names || [])[nameidx - 1] || (supbooks[0] || [])[nameidx];
        var name = lbl ? lbl.Name : "SH33TJSNAME" + String(nameidx);
        if (name && name.slice(0, 6) == "_xlfn." && !opts.xlfn) name = name.slice(6);
        stack.push(name);
        break;
      case "PtgNameX":
        var bookidx = f[1][1];
        nameidx = f[1][2];
        var externbook;
        if (opts.biff <= 5) {
          if (bookidx < 0) bookidx = -bookidx;
          if (supbooks[bookidx]) externbook = supbooks[bookidx][nameidx];
        } else {
          var o = "";
          if (((supbooks[bookidx] || [])[0] || [])[0] == 14849) {
          } else if (((supbooks[bookidx] || [])[0] || [])[0] == 1025) {
            if (supbooks[bookidx][nameidx] && supbooks[bookidx][nameidx].itab > 0) {
              o = supbooks.SheetNames[supbooks[bookidx][nameidx].itab - 1] + "!";
            }
          } else o = supbooks.SheetNames[nameidx - 1] + "!";
          if (supbooks[bookidx] && supbooks[bookidx][nameidx]) o += supbooks[bookidx][nameidx].Name;
          else if (supbooks[0] && supbooks[0][nameidx]) o += supbooks[0][nameidx].Name;
          else {
            var ixtidata = (get_ixti_raw(supbooks, bookidx, opts) || "").split(";;");
            if (ixtidata[nameidx - 1]) o = ixtidata[nameidx - 1];
            else o += "SH33TJSERRX";
          }
          stack.push(o);
          break;
        }
        if (!externbook) externbook = { Name: "SH33TJSERRY" };
        stack.push(externbook.Name);
        break;
      case "PtgParen":
        var lp = "(", rp = ")";
        if (last_sp >= 0) {
          sp = "";
          switch (formula[0][last_sp][1][0]) {
            // $FlowIgnore
            case 2:
              lp = fill(" ", formula[0][last_sp][1][1]) + lp;
              break;
            // $FlowIgnore
            case 3:
              lp = fill("\r", formula[0][last_sp][1][1]) + lp;
              break;
            // $FlowIgnore
            case 4:
              rp = fill(" ", formula[0][last_sp][1][1]) + rp;
              break;
            // $FlowIgnore
            case 5:
              rp = fill("\r", formula[0][last_sp][1][1]) + rp;
              break;
            default:
              if (opts.WTF) throw new Error("Unexpected PtgAttrSpaceType " + formula[0][last_sp][1][0]);
          }
          last_sp = -1;
        }
        stack.push(lp + stack.pop() + rp);
        break;
      case "PtgRefErr":
        stack.push("#REF!");
        break;
      case "PtgRefErr3d":
        stack.push("#REF!");
        break;
      case "PtgExp":
        c = { c: f[1][1], r: f[1][0] };
        var q = { c: cell.c, r: cell.r };
        if (supbooks.sharedf[encode_cell(c)]) {
          var parsedf = supbooks.sharedf[encode_cell(c)];
          stack.push(stringify_formula(parsedf, _range, q, supbooks, opts));
        } else {
          var fnd = false;
          for (e1 = 0; e1 != supbooks.arrayf.length; ++e1) {
            e2 = supbooks.arrayf[e1];
            if (c.c < e2[0].s.c || c.c > e2[0].e.c) continue;
            if (c.r < e2[0].s.r || c.r > e2[0].e.r) continue;
            stack.push(stringify_formula(e2[1], _range, q, supbooks, opts));
            fnd = true;
            break;
          }
          if (!fnd) stack.push(
            /*::String(*/
            f[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        stack.push("{" + stringify_array(
          /*::(*/
          f[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      /* [MS-XLS] 2.5.198.38 */
      case "PtgAttrSpaceSemi":
        last_sp = ff;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        stack.push("");
        break;
      case "PtgAreaErr":
        stack.push("#REF!");
        break;
      case "PtgAreaErr3d":
        stack.push("#REF!");
        break;
      case "PtgList":
        stack.push("Table" + f[1].idx + "[#" + f[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      /* [MS-XLS] 2.5.198.46 */
      case "PtgElfColS":
      /* [MS-XLS] 2.5.198.47 */
      case "PtgElfColSV":
      /* [MS-XLS] 2.5.198.48 */
      case "PtgElfColV":
      /* [MS-XLS] 2.5.198.49 */
      case "PtgElfLel":
      /* [MS-XLS] 2.5.198.50 */
      case "PtgElfRadical":
      /* [MS-XLS] 2.5.198.51 */
      case "PtgElfRadicalLel":
      /* [MS-XLS] 2.5.198.52 */
      case "PtgElfRadicalS":
      /* [MS-XLS] 2.5.198.53 */
      case "PtgElfRw":
      /* [MS-XLS] 2.5.198.54 */
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(f));
      default:
        throw new Error("Unrecognized Formula Token: " + String(f));
    }
    var PtgNonDisp = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (opts.biff != 3) {
      if (last_sp >= 0 && PtgNonDisp.indexOf(formula[0][ff][0]) == -1) {
        f = formula[0][last_sp];
        var _left = true;
        switch (f[1][0]) {
          /* note: some bad XLSB files omit the PtgParen */
          case 4:
            _left = false;
          /* falls through */
          case 0:
            sp = fill(" ", f[1][1]);
            break;
          case 5:
            _left = false;
          /* falls through */
          case 1:
            sp = fill("\r", f[1][1]);
            break;
          default:
            sp = "";
            if (opts.WTF) throw new Error("Unexpected PtgAttrSpaceType " + f[1][0]);
        }
        stack.push((_left ? sp : "") + stack.pop() + (_left ? "" : sp));
        last_sp = -1;
      }
    }
  }
  if (stack.length > 1 && opts.WTF) throw new Error("bad formula stack");
  return stack[0];
}
function write_FormulaValue(value2) {
  if (value2 == null) {
    var o = new_buf(8);
    o.write_shift(1, 3);
    o.write_shift(1, 0);
    o.write_shift(2, 0);
    o.write_shift(2, 0);
    o.write_shift(2, 65535);
    return o;
  } else if (typeof value2 == "number") return write_Xnum(value2);
  return write_Xnum(0);
}
function write_Formula(cell, R, C, opts, os) {
  var o1 = write_XLSCell(R, C, os);
  var o2 = write_FormulaValue(cell.v);
  var o3 = new_buf(6);
  var flags = 1 | 32;
  o3.write_shift(2, flags);
  o3.write_shift(4, 0);
  var bf = new_buf(cell.bf.length);
  for (var i = 0; i < cell.bf.length; ++i) bf[i] = cell.bf[i];
  var out = bconcat([o1, o2, o3, bf]);
  return out;
}
function parse_XLSBParsedFormula(data2, length, opts) {
  var cce = data2.read_shift(4);
  var rgce = parse_Rgce(data2, cce, opts);
  var cb = data2.read_shift(4);
  var rgcb = cb > 0 ? parse_RgbExtra(data2, cb, rgce, opts) : null;
  return [rgce, rgcb];
}
var parse_XLSBArrayParsedFormula = parse_XLSBParsedFormula;
var parse_XLSBCellParsedFormula = parse_XLSBParsedFormula;
var parse_XLSBNameParsedFormula = parse_XLSBParsedFormula;
var parse_XLSBSharedParsedFormula = parse_XLSBParsedFormula;
var Cetab = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
};
var Ftab = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
};
var FtabArgc = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function csf_to_ods_formula(f) {
  var o = "of:=" + f.replace(crefregex, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return o.replace(/;/g, "|").replace(/,/g, ";");
}
function csf_to_ods_3D(r) {
  return r.replace(/\./, "!");
}
var browser_has_Map = typeof Map !== "undefined";
function get_sst_id(sst, str, rev) {
  var i = 0, len = sst.length;
  if (rev) {
    if (browser_has_Map ? rev.has(str) : Object.prototype.hasOwnProperty.call(rev, str)) {
      var revarr = browser_has_Map ? rev.get(str) : rev[str];
      for (; i < revarr.length; ++i) {
        if (sst[revarr[i]].t === str) {
          sst.Count++;
          return revarr[i];
        }
      }
    }
  } else for (; i < len; ++i) {
    if (sst[i].t === str) {
      sst.Count++;
      return i;
    }
  }
  sst[len] = { t: str };
  sst.Count++;
  sst.Unique++;
  if (rev) {
    if (browser_has_Map) {
      if (!rev.has(str)) rev.set(str, []);
      rev.get(str).push(len);
    } else {
      if (!Object.prototype.hasOwnProperty.call(rev, str)) rev[str] = [];
      rev[str].push(len);
    }
  }
  return len;
}
function col_obj_w(C, col) {
  var p = { min: C + 1, max: C + 1 };
  var wch = -1;
  if (col.MDW) MDW = col.MDW;
  if (col.width != null) p.customWidth = 1;
  else if (col.wpx != null) wch = px2char(col.wpx);
  else if (col.wch != null) wch = col.wch;
  if (wch > -1) {
    p.width = char2width(wch);
    p.customWidth = 1;
  } else if (col.width != null) p.width = col.width;
  if (col.hidden) p.hidden = true;
  if (col.level != null) {
    p.outlineLevel = p.level = col.level;
  }
  return p;
}
function default_margins(margins, mode) {
  if (!margins) return;
  var defs = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
  if (mode == "xlml") defs = [1, 1, 1, 1, 0.5, 0.5];
  if (margins.left == null) margins.left = defs[0];
  if (margins.right == null) margins.right = defs[1];
  if (margins.top == null) margins.top = defs[2];
  if (margins.bottom == null) margins.bottom = defs[3];
  if (margins.header == null) margins.header = defs[4];
  if (margins.footer == null) margins.footer = defs[5];
}
function get_cell_style(styles, cell, opts) {
  var z = opts.revssf[cell.z != null ? cell.z : "General"];
  var i = 60, len = styles.length;
  if (z == null && opts.ssf) {
    for (; i < 392; ++i) if (opts.ssf[i] == null) {
      SSF_load(cell.z, i);
      opts.ssf[i] = cell.z;
      opts.revssf[cell.z] = z = i;
      break;
    }
  }
  for (i = 0; i != len; ++i) if (styles[i].numFmtId === z) return i;
  styles[len] = {
    numFmtId: z,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  };
  return len;
}
function check_ws(ws, sname, i) {
  if (ws && ws["!ref"]) {
    var range = safe_decode_range(ws["!ref"]);
    if (range.e.c < range.s.c || range.e.r < range.s.r) throw new Error("Bad range (" + i + "): " + ws["!ref"]);
  }
}
function write_ws_xml_merges(merges) {
  if (merges.length === 0) return "";
  var o = '<mergeCells count="' + merges.length + '">';
  for (var i = 0; i != merges.length; ++i) o += '<mergeCell ref="' + encode_range(merges[i]) + '"/>';
  return o + "</mergeCells>";
}
function write_ws_xml_sheetpr(ws, wb, idx, opts, o) {
  var needed = false;
  var props = {}, payload = null;
  if (opts.bookType !== "xlsx" && wb.vbaraw) {
    var cname = wb.SheetNames[idx];
    try {
      if (wb.Workbook) cname = wb.Workbook.Sheets[idx].CodeName || cname;
    } catch (e) {
    }
    needed = true;
    props.codeName = utf8write(escapexml(cname));
  }
  if (ws && ws["!outline"]) {
    var outlineprops = { summaryBelow: 1, summaryRight: 1 };
    if (ws["!outline"].above) outlineprops.summaryBelow = 0;
    if (ws["!outline"].left) outlineprops.summaryRight = 0;
    payload = (payload || "") + writextag("outlinePr", null, outlineprops);
  }
  if (!needed && !payload) return;
  o[o.length] = writextag("sheetPr", payload, props);
}
var sheetprot_deffalse = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
var sheetprot_deftrue = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function write_ws_xml_protection(sp) {
  var o = { sheet: 1 };
  sheetprot_deffalse.forEach(function(n) {
    if (sp[n] != null && sp[n]) o[n] = "1";
  });
  sheetprot_deftrue.forEach(function(n) {
    if (sp[n] != null && !sp[n]) o[n] = "0";
  });
  if (sp.password) o.password = crypto_CreatePasswordVerifier_Method1(sp.password).toString(16).toUpperCase();
  return writextag("sheetProtection", null, o);
}
function write_ws_xml_margins(margin) {
  default_margins(margin);
  return writextag("pageMargins", null, margin);
}
function write_ws_xml_cols(ws, cols) {
  var o = ["<cols>"], col;
  for (var i = 0; i != cols.length; ++i) {
    if (!(col = cols[i])) continue;
    o[o.length] = writextag("col", null, col_obj_w(i, col));
  }
  o[o.length] = "</cols>";
  return o.join("");
}
function write_ws_xml_autofilter(data2, ws, wb, idx) {
  var ref = typeof data2.ref == "string" ? data2.ref : encode_range(data2.ref);
  if (!wb.Workbook) wb.Workbook = { Sheets: [] };
  if (!wb.Workbook.Names) wb.Workbook.Names = [];
  var names = wb.Workbook.Names;
  var range = decode_range(ref);
  if (range.s.r == range.e.r) {
    range.e.r = decode_range(ws["!ref"]).e.r;
    ref = encode_range(range);
  }
  for (var i = 0; i < names.length; ++i) {
    var name = names[i];
    if (name.Name != "_xlnm._FilterDatabase") continue;
    if (name.Sheet != idx) continue;
    name.Ref = "'" + wb.SheetNames[idx] + "'!" + ref;
    break;
  }
  if (i == names.length) names.push({ Name: "_xlnm._FilterDatabase", Sheet: idx, Ref: "'" + wb.SheetNames[idx] + "'!" + ref });
  return writextag("autoFilter", null, { ref });
}
function write_ws_xml_sheetviews(ws, opts, idx, wb) {
  var sview = { workbookViewId: "0" };
  if ((((wb || {}).Workbook || {}).Views || [])[0]) sview.rightToLeft = wb.Workbook.Views[0].RTL ? "1" : "0";
  return writextag("sheetViews", writextag("sheetView", null, sview), {});
}
function write_ws_xml_cell(cell, ref, ws, opts) {
  if (cell.c) ws["!comments"].push([ref, cell.c]);
  if (cell.v === void 0 && typeof cell.f !== "string" || cell.t === "z" && !cell.f) return "";
  var vv = "";
  var oldt = cell.t, oldv = cell.v;
  if (cell.t !== "z") switch (cell.t) {
    case "b":
      vv = cell.v ? "1" : "0";
      break;
    case "n":
      vv = "" + cell.v;
      break;
    case "e":
      vv = BErr[cell.v];
      break;
    case "d":
      if (opts && opts.cellDates) vv = parseDate(cell.v, -1).toISOString();
      else {
        cell = dup(cell);
        cell.t = "n";
        vv = "" + (cell.v = datenum(parseDate(cell.v)));
      }
      if (typeof cell.z === "undefined") cell.z = table_fmt[14];
      break;
    default:
      vv = cell.v;
      break;
  }
  var v = writetag("v", escapexml(vv)), o = { r: ref };
  var os = get_cell_style(opts.cellXfs, cell, opts);
  if (os !== 0) o.s = os;
  switch (cell.t) {
    case "n":
      break;
    case "d":
      o.t = "d";
      break;
    case "b":
      o.t = "b";
      break;
    case "e":
      o.t = "e";
      break;
    case "z":
      break;
    default:
      if (cell.v == null) {
        delete cell.t;
        break;
      }
      if (cell.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
      if (opts && opts.bookSST) {
        v = writetag("v", "" + get_sst_id(opts.Strings, cell.v, opts.revStrings));
        o.t = "s";
        break;
      }
      o.t = "str";
      break;
  }
  if (cell.t != oldt) {
    cell.t = oldt;
    cell.v = oldv;
  }
  if (typeof cell.f == "string" && cell.f) {
    var ff = cell.F && cell.F.slice(0, ref.length) == ref ? { t: "array", ref: cell.F } : null;
    v = writextag("f", escapexml(cell.f), ff) + (cell.v != null ? v : "");
  }
  if (cell.l) ws["!links"].push([ref, cell.l]);
  if (cell.D) o.cm = 1;
  return writextag("c", v, o);
}
function write_ws_xml_data(ws, opts, idx, wb) {
  var o = [], r = [], range = safe_decode_range(ws["!ref"]), cell = "", ref, rr = "", cols = [], R = 0, C = 0, rows = ws["!rows"];
  var dense = Array.isArray(ws);
  var params = { r: rr }, row, height = -1;
  for (C = range.s.c; C <= range.e.c; ++C) cols[C] = encode_col(C);
  for (R = range.s.r; R <= range.e.r; ++R) {
    r = [];
    rr = encode_row(R);
    for (C = range.s.c; C <= range.e.c; ++C) {
      ref = cols[C] + rr;
      var _cell = dense ? (ws[R] || [])[C] : ws[ref];
      if (_cell === void 0) continue;
      if ((cell = write_ws_xml_cell(_cell, ref, ws, opts, idx, wb)) != null) r.push(cell);
    }
    if (r.length > 0 || rows && rows[R]) {
      params = { r: rr };
      if (rows && rows[R]) {
        row = rows[R];
        if (row.hidden) params.hidden = 1;
        height = -1;
        if (row.hpx) height = px2pt(row.hpx);
        else if (row.hpt) height = row.hpt;
        if (height > -1) {
          params.ht = height;
          params.customHeight = 1;
        }
        if (row.level) {
          params.outlineLevel = row.level;
        }
      }
      o[o.length] = writextag("row", r.join(""), params);
    }
  }
  if (rows) for (; R < rows.length; ++R) {
    if (rows && rows[R]) {
      params = { r: R + 1 };
      row = rows[R];
      if (row.hidden) params.hidden = 1;
      height = -1;
      if (row.hpx) height = px2pt(row.hpx);
      else if (row.hpt) height = row.hpt;
      if (height > -1) {
        params.ht = height;
        params.customHeight = 1;
      }
      if (row.level) {
        params.outlineLevel = row.level;
      }
      o[o.length] = writextag("row", "", params);
    }
  }
  return o.join("");
}
function write_ws_xml(idx, opts, wb, rels) {
  var o = [XML_HEADER, writextag("worksheet", null, {
    "xmlns": XMLNS_main[0],
    "xmlns:r": XMLNS.r
  })];
  var s = wb.SheetNames[idx], sidx = 0, rdata = "";
  var ws = wb.Sheets[s];
  if (ws == null) ws = {};
  var ref = ws["!ref"] || "A1";
  var range = safe_decode_range(ref);
  if (range.e.c > 16383 || range.e.r > 1048575) {
    if (opts.WTF) throw new Error("Range " + ref + " exceeds format limit A1:XFD1048576");
    range.e.c = Math.min(range.e.c, 16383);
    range.e.r = Math.min(range.e.c, 1048575);
    ref = encode_range(range);
  }
  if (!rels) rels = {};
  ws["!comments"] = [];
  var _drawing = [];
  write_ws_xml_sheetpr(ws, wb, idx, opts, o);
  o[o.length] = writextag("dimension", null, { "ref": ref });
  o[o.length] = write_ws_xml_sheetviews(ws, opts, idx, wb);
  if (opts.sheetFormat) o[o.length] = writextag("sheetFormatPr", null, {
    defaultRowHeight: opts.sheetFormat.defaultRowHeight || "16",
    baseColWidth: opts.sheetFormat.baseColWidth || "10",
    outlineLevelRow: opts.sheetFormat.outlineLevelRow || "7"
  });
  if (ws["!cols"] != null && ws["!cols"].length > 0) o[o.length] = write_ws_xml_cols(ws, ws["!cols"]);
  o[sidx = o.length] = "<sheetData/>";
  ws["!links"] = [];
  if (ws["!ref"] != null) {
    rdata = write_ws_xml_data(ws, opts, idx, wb, rels);
    if (rdata.length > 0) o[o.length] = rdata;
  }
  if (o.length > sidx + 1) {
    o[o.length] = "</sheetData>";
    o[sidx] = o[sidx].replace("/>", ">");
  }
  if (ws["!protect"]) o[o.length] = write_ws_xml_protection(ws["!protect"]);
  if (ws["!autofilter"] != null) o[o.length] = write_ws_xml_autofilter(ws["!autofilter"], ws, wb, idx);
  if (ws["!merges"] != null && ws["!merges"].length > 0) o[o.length] = write_ws_xml_merges(ws["!merges"]);
  var relc = -1, rel, rId = -1;
  if (
    /*::(*/
    ws["!links"].length > 0
  ) {
    o[o.length] = "<hyperlinks>";
    ws["!links"].forEach(function(l) {
      if (!l[1].Target) return;
      rel = { "ref": l[0] };
      if (l[1].Target.charAt(0) != "#") {
        rId = add_rels(rels, -1, escapexml(l[1].Target).replace(/#.*$/, ""), RELS.HLINK);
        rel["r:id"] = "rId" + rId;
      }
      if ((relc = l[1].Target.indexOf("#")) > -1) rel.location = escapexml(l[1].Target.slice(relc + 1));
      if (l[1].Tooltip) rel.tooltip = escapexml(l[1].Tooltip);
      o[o.length] = writextag("hyperlink", null, rel);
    });
    o[o.length] = "</hyperlinks>";
  }
  delete ws["!links"];
  if (ws["!margins"] != null) o[o.length] = write_ws_xml_margins(ws["!margins"]);
  if (!opts || opts.ignoreEC || opts.ignoreEC == void 0) o[o.length] = writetag("ignoredErrors", writextag("ignoredError", null, { numberStoredAsText: 1, sqref: ref }));
  if (_drawing.length > 0) {
    rId = add_rels(rels, -1, "../drawings/drawing" + (idx + 1) + ".xml", RELS.DRAW);
    o[o.length] = writextag("drawing", null, { "r:id": "rId" + rId });
    ws["!drawing"] = _drawing;
  }
  if (ws["!comments"].length > 0) {
    rId = add_rels(rels, -1, "../drawings/vmlDrawing" + (idx + 1) + ".vml", RELS.VML);
    o[o.length] = writextag("legacyDrawing", null, { "r:id": "rId" + rId });
    ws["!legacy"] = rId;
  }
  if (o.length > 1) {
    o[o.length] = "</worksheet>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function parse_BrtRowHdr(data2, length) {
  var z = {};
  var tgt = data2.l + length;
  z.r = data2.read_shift(4);
  data2.l += 4;
  var miyRw = data2.read_shift(2);
  data2.l += 1;
  var flags = data2.read_shift(1);
  data2.l = tgt;
  if (flags & 7) z.level = flags & 7;
  if (flags & 16) z.hidden = true;
  if (flags & 32) z.hpt = miyRw / 20;
  return z;
}
function write_BrtRowHdr(R, range, ws) {
  var o = new_buf(17 + 8 * 16);
  var row = (ws["!rows"] || [])[R] || {};
  o.write_shift(4, R);
  o.write_shift(4, 0);
  var miyRw = 320;
  if (row.hpx) miyRw = px2pt(row.hpx) * 20;
  else if (row.hpt) miyRw = row.hpt * 20;
  o.write_shift(2, miyRw);
  o.write_shift(1, 0);
  var flags = 0;
  if (row.level) flags |= row.level;
  if (row.hidden) flags |= 16;
  if (row.hpx || row.hpt) flags |= 32;
  o.write_shift(1, flags);
  o.write_shift(1, 0);
  var ncolspan = 0, lcs = o.l;
  o.l += 4;
  var caddr = { r: R, c: 0 };
  for (var i = 0; i < 16; ++i) {
    if (range.s.c > i + 1 << 10 || range.e.c < i << 10) continue;
    var first = -1, last = -1;
    for (var j = i << 10; j < i + 1 << 10; ++j) {
      caddr.c = j;
      var cell = Array.isArray(ws) ? (ws[caddr.r] || [])[caddr.c] : ws[encode_cell(caddr)];
      if (cell) {
        if (first < 0) first = j;
        last = j;
      }
    }
    if (first < 0) continue;
    ++ncolspan;
    o.write_shift(4, first);
    o.write_shift(4, last);
  }
  var l = o.l;
  o.l = lcs;
  o.write_shift(4, ncolspan);
  o.l = l;
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function write_row_header(ba, ws, range, R) {
  var o = write_BrtRowHdr(R, range, ws);
  if (o.length > 17 || (ws["!rows"] || [])[R]) write_record(ba, 0, o);
}
var parse_BrtWsDim = parse_UncheckedRfX;
var write_BrtWsDim = write_UncheckedRfX;
function parse_BrtWsFmtInfo() {
}
function parse_BrtWsProp(data2, length) {
  var z = {};
  var f = data2[data2.l];
  ++data2.l;
  z.above = !(f & 64);
  z.left = !(f & 128);
  data2.l += 18;
  z.name = parse_XLSBCodeName(data2, length - 19);
  return z;
}
function write_BrtWsProp(str, outl, o) {
  if (o == null) o = new_buf(84 + 4 * str.length);
  var f = 192;
  if (outl) {
    if (outl.above) f &= ~64;
    if (outl.left) f &= ~128;
  }
  o.write_shift(1, f);
  for (var i = 1; i < 3; ++i) o.write_shift(1, 0);
  write_BrtColor({ auto: 1 }, o);
  o.write_shift(-4, -1);
  o.write_shift(-4, -1);
  write_XLSBCodeName(str, o);
  return o.slice(0, o.l);
}
function parse_BrtCellBlank(data2) {
  var cell = parse_XLSBCell(data2);
  return [cell];
}
function write_BrtCellBlank(cell, ncell, o) {
  if (o == null) o = new_buf(8);
  return write_XLSBCell(ncell, o);
}
function parse_BrtShortBlank(data2) {
  var cell = parse_XLSBShortCell(data2);
  return [cell];
}
function write_BrtShortBlank(cell, ncell, o) {
  if (o == null) o = new_buf(4);
  return write_XLSBShortCell(ncell, o);
}
function parse_BrtCellBool(data2) {
  var cell = parse_XLSBCell(data2);
  var fBool = data2.read_shift(1);
  return [cell, fBool, "b"];
}
function write_BrtCellBool(cell, ncell, o) {
  if (o == null) o = new_buf(9);
  write_XLSBCell(ncell, o);
  o.write_shift(1, cell.v ? 1 : 0);
  return o;
}
function parse_BrtShortBool(data2) {
  var cell = parse_XLSBShortCell(data2);
  var fBool = data2.read_shift(1);
  return [cell, fBool, "b"];
}
function write_BrtShortBool(cell, ncell, o) {
  if (o == null) o = new_buf(5);
  write_XLSBShortCell(ncell, o);
  o.write_shift(1, cell.v ? 1 : 0);
  return o;
}
function parse_BrtCellError(data2) {
  var cell = parse_XLSBCell(data2);
  var bError = data2.read_shift(1);
  return [cell, bError, "e"];
}
function write_BrtCellError(cell, ncell, o) {
  if (o == null) o = new_buf(9);
  write_XLSBCell(ncell, o);
  o.write_shift(1, cell.v);
  return o;
}
function parse_BrtShortError(data2) {
  var cell = parse_XLSBShortCell(data2);
  var bError = data2.read_shift(1);
  return [cell, bError, "e"];
}
function write_BrtShortError(cell, ncell, o) {
  if (o == null) o = new_buf(8);
  write_XLSBShortCell(ncell, o);
  o.write_shift(1, cell.v);
  o.write_shift(2, 0);
  o.write_shift(1, 0);
  return o;
}
function parse_BrtCellIsst(data2) {
  var cell = parse_XLSBCell(data2);
  var isst = data2.read_shift(4);
  return [cell, isst, "s"];
}
function write_BrtCellIsst(cell, ncell, o) {
  if (o == null) o = new_buf(12);
  write_XLSBCell(ncell, o);
  o.write_shift(4, ncell.v);
  return o;
}
function parse_BrtShortIsst(data2) {
  var cell = parse_XLSBShortCell(data2);
  var isst = data2.read_shift(4);
  return [cell, isst, "s"];
}
function write_BrtShortIsst(cell, ncell, o) {
  if (o == null) o = new_buf(8);
  write_XLSBShortCell(ncell, o);
  o.write_shift(4, ncell.v);
  return o;
}
function parse_BrtCellReal(data2) {
  var cell = parse_XLSBCell(data2);
  var value2 = parse_Xnum(data2);
  return [cell, value2, "n"];
}
function write_BrtCellReal(cell, ncell, o) {
  if (o == null) o = new_buf(16);
  write_XLSBCell(ncell, o);
  write_Xnum(cell.v, o);
  return o;
}
function parse_BrtShortReal(data2) {
  var cell = parse_XLSBShortCell(data2);
  var value2 = parse_Xnum(data2);
  return [cell, value2, "n"];
}
function write_BrtShortReal(cell, ncell, o) {
  if (o == null) o = new_buf(12);
  write_XLSBShortCell(ncell, o);
  write_Xnum(cell.v, o);
  return o;
}
function parse_BrtCellRk(data2) {
  var cell = parse_XLSBCell(data2);
  var value2 = parse_RkNumber(data2);
  return [cell, value2, "n"];
}
function write_BrtCellRk(cell, ncell, o) {
  if (o == null) o = new_buf(12);
  write_XLSBCell(ncell, o);
  write_RkNumber(cell.v, o);
  return o;
}
function parse_BrtShortRk(data2) {
  var cell = parse_XLSBShortCell(data2);
  var value2 = parse_RkNumber(data2);
  return [cell, value2, "n"];
}
function write_BrtShortRk(cell, ncell, o) {
  if (o == null) o = new_buf(8);
  write_XLSBShortCell(ncell, o);
  write_RkNumber(cell.v, o);
  return o;
}
function parse_BrtCellRString(data2) {
  var cell = parse_XLSBCell(data2);
  var value2 = parse_RichStr(data2);
  return [cell, value2, "is"];
}
function parse_BrtCellSt(data2) {
  var cell = parse_XLSBCell(data2);
  var value2 = parse_XLWideString(data2);
  return [cell, value2, "str"];
}
function write_BrtCellSt(cell, ncell, o) {
  if (o == null) o = new_buf(12 + 4 * cell.v.length);
  write_XLSBCell(ncell, o);
  write_XLWideString(cell.v, o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function parse_BrtShortSt(data2) {
  var cell = parse_XLSBShortCell(data2);
  var value2 = parse_XLWideString(data2);
  return [cell, value2, "str"];
}
function write_BrtShortSt(cell, ncell, o) {
  if (o == null) o = new_buf(8 + 4 * cell.v.length);
  write_XLSBShortCell(ncell, o);
  write_XLWideString(cell.v, o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function parse_BrtFmlaBool(data2, length, opts) {
  var end = data2.l + length;
  var cell = parse_XLSBCell(data2);
  cell.r = opts["!row"];
  var value2 = data2.read_shift(1);
  var o = [cell, value2, "b"];
  if (opts.cellFormula) {
    data2.l += 2;
    var formula = parse_XLSBCellParsedFormula(data2, end - data2.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data2.l = end;
  return o;
}
function parse_BrtFmlaError(data2, length, opts) {
  var end = data2.l + length;
  var cell = parse_XLSBCell(data2);
  cell.r = opts["!row"];
  var value2 = data2.read_shift(1);
  var o = [cell, value2, "e"];
  if (opts.cellFormula) {
    data2.l += 2;
    var formula = parse_XLSBCellParsedFormula(data2, end - data2.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data2.l = end;
  return o;
}
function parse_BrtFmlaNum(data2, length, opts) {
  var end = data2.l + length;
  var cell = parse_XLSBCell(data2);
  cell.r = opts["!row"];
  var value2 = parse_Xnum(data2);
  var o = [cell, value2, "n"];
  if (opts.cellFormula) {
    data2.l += 2;
    var formula = parse_XLSBCellParsedFormula(data2, end - data2.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data2.l = end;
  return o;
}
function parse_BrtFmlaString(data2, length, opts) {
  var end = data2.l + length;
  var cell = parse_XLSBCell(data2);
  cell.r = opts["!row"];
  var value2 = parse_XLWideString(data2);
  var o = [cell, value2, "str"];
  if (opts.cellFormula) {
    data2.l += 2;
    var formula = parse_XLSBCellParsedFormula(data2, end - data2.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data2.l = end;
  return o;
}
var parse_BrtMergeCell = parse_UncheckedRfX;
var write_BrtMergeCell = write_UncheckedRfX;
function write_BrtBeginMergeCells(cnt, o) {
  if (o == null) o = new_buf(4);
  o.write_shift(4, cnt);
  return o;
}
function parse_BrtHLink(data2, length) {
  var end = data2.l + length;
  var rfx = parse_UncheckedRfX(data2, 16);
  var relId = parse_XLNullableWideString(data2);
  var loc = parse_XLWideString(data2);
  var tooltip = parse_XLWideString(data2);
  var display = parse_XLWideString(data2);
  data2.l = end;
  var o = { rfx, relId, loc, display };
  if (tooltip) o.Tooltip = tooltip;
  return o;
}
function write_BrtHLink(l, rId) {
  var o = new_buf(50 + 4 * (l[1].Target.length + (l[1].Tooltip || "").length));
  write_UncheckedRfX({ s: decode_cell(l[0]), e: decode_cell(l[0]) }, o);
  write_RelID("rId" + rId, o);
  var locidx = l[1].Target.indexOf("#");
  var loc = locidx == -1 ? "" : l[1].Target.slice(locidx + 1);
  write_XLWideString(loc || "", o);
  write_XLWideString(l[1].Tooltip || "", o);
  write_XLWideString("", o);
  return o.slice(0, o.l);
}
function parse_BrtPane() {
}
function parse_BrtArrFmla(data2, length, opts) {
  var end = data2.l + length;
  var rfx = parse_RfX(data2, 16);
  var fAlwaysCalc = data2.read_shift(1);
  var o = [rfx];
  o[2] = fAlwaysCalc;
  if (opts.cellFormula) {
    var formula = parse_XLSBArrayParsedFormula(data2, end - data2.l, opts);
    o[1] = formula;
  } else data2.l = end;
  return o;
}
function parse_BrtShrFmla(data2, length, opts) {
  var end = data2.l + length;
  var rfx = parse_UncheckedRfX(data2, 16);
  var o = [rfx];
  if (opts.cellFormula) {
    var formula = parse_XLSBSharedParsedFormula(data2, end - data2.l, opts);
    o[1] = formula;
    data2.l = end;
  } else data2.l = end;
  return o;
}
function write_BrtColInfo(C, col, o) {
  if (o == null) o = new_buf(18);
  var p = col_obj_w(C, col);
  o.write_shift(-4, C);
  o.write_shift(-4, C);
  o.write_shift(4, (p.width || 10) * 256);
  o.write_shift(
    4,
    0
    /*ixfe*/
  );
  var flags = 0;
  if (col.hidden) flags |= 1;
  if (typeof p.width == "number") flags |= 2;
  if (col.level) flags |= col.level << 8;
  o.write_shift(2, flags);
  return o;
}
var BrtMarginKeys = ["left", "right", "top", "bottom", "header", "footer"];
function parse_BrtMargins(data2) {
  var margins = {};
  BrtMarginKeys.forEach(function(k) {
    margins[k] = parse_Xnum(data2, 8);
  });
  return margins;
}
function write_BrtMargins(margins, o) {
  if (o == null) o = new_buf(6 * 8);
  default_margins(margins);
  BrtMarginKeys.forEach(function(k) {
    write_Xnum(margins[k], o);
  });
  return o;
}
function parse_BrtBeginWsView(data2) {
  var f = data2.read_shift(2);
  data2.l += 28;
  return { RTL: f & 32 };
}
function write_BrtBeginWsView(ws, Workbook, o) {
  if (o == null) o = new_buf(30);
  var f = 924;
  if ((((Workbook || {}).Views || [])[0] || {}).RTL) f |= 32;
  o.write_shift(2, f);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  o.write_shift(1, 0);
  o.write_shift(1, 0);
  o.write_shift(2, 0);
  o.write_shift(2, 100);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(2, 0);
  o.write_shift(4, 0);
  return o;
}
function write_BrtCellIgnoreEC(ref) {
  var o = new_buf(24);
  o.write_shift(4, 4);
  o.write_shift(4, 1);
  write_UncheckedRfX(ref, o);
  return o;
}
function write_BrtSheetProtection(sp, o) {
  if (o == null) o = new_buf(16 * 4 + 2);
  o.write_shift(2, sp.password ? crypto_CreatePasswordVerifier_Method1(sp.password) : 0);
  o.write_shift(4, 1);
  [
    ["objects", false],
    // fObjects
    ["scenarios", false],
    // fScenarios
    ["formatCells", true],
    // fFormatCells
    ["formatColumns", true],
    // fFormatColumns
    ["formatRows", true],
    // fFormatRows
    ["insertColumns", true],
    // fInsertColumns
    ["insertRows", true],
    // fInsertRows
    ["insertHyperlinks", true],
    // fInsertHyperlinks
    ["deleteColumns", true],
    // fDeleteColumns
    ["deleteRows", true],
    // fDeleteRows
    ["selectLockedCells", false],
    // fSelLockedCells
    ["sort", true],
    // fSort
    ["autoFilter", true],
    // fAutoFilter
    ["pivotTables", true],
    // fPivotTables
    ["selectUnlockedCells", false]
    // fSelUnlockedCells
  ].forEach(function(n) {
    if (n[1]) o.write_shift(4, sp[n[0]] != null && !sp[n[0]] ? 1 : 0);
    else o.write_shift(4, sp[n[0]] != null && sp[n[0]] ? 0 : 1);
  });
  return o;
}
function parse_BrtDVal() {
}
function parse_BrtDVal14() {
}
function write_ws_bin_cell(ba, cell, R, C, opts, ws, last_seen) {
  if (cell.v === void 0) return false;
  var vv = "";
  switch (cell.t) {
    case "b":
      vv = cell.v ? "1" : "0";
      break;
    case "d":
      cell = dup(cell);
      cell.z = cell.z || table_fmt[14];
      cell.v = datenum(parseDate(cell.v));
      cell.t = "n";
      break;
    /* falls through */
    case "n":
    case "e":
      vv = "" + cell.v;
      break;
    default:
      vv = cell.v;
      break;
  }
  var o = { r: R, c: C };
  o.s = get_cell_style(opts.cellXfs, cell, opts);
  if (cell.l) ws["!links"].push([encode_cell(o), cell.l]);
  if (cell.c) ws["!comments"].push([encode_cell(o), cell.c]);
  switch (cell.t) {
    case "s":
    case "str":
      if (opts.bookSST) {
        vv = get_sst_id(opts.Strings, cell.v, opts.revStrings);
        o.t = "s";
        o.v = vv;
        if (last_seen) write_record(ba, 18, write_BrtShortIsst(cell, o));
        else write_record(ba, 7, write_BrtCellIsst(cell, o));
      } else {
        o.t = "str";
        if (last_seen) write_record(ba, 17, write_BrtShortSt(cell, o));
        else write_record(ba, 6, write_BrtCellSt(cell, o));
      }
      return true;
    case "n":
      if (cell.v == (cell.v | 0) && cell.v > -1e3 && cell.v < 1e3) {
        if (last_seen) write_record(ba, 13, write_BrtShortRk(cell, o));
        else write_record(ba, 2, write_BrtCellRk(cell, o));
      } else {
        if (last_seen) write_record(ba, 16, write_BrtShortReal(cell, o));
        else write_record(ba, 5, write_BrtCellReal(cell, o));
      }
      return true;
    case "b":
      o.t = "b";
      if (last_seen) write_record(ba, 15, write_BrtShortBool(cell, o));
      else write_record(ba, 4, write_BrtCellBool(cell, o));
      return true;
    case "e":
      o.t = "e";
      if (last_seen) write_record(ba, 14, write_BrtShortError(cell, o));
      else write_record(ba, 3, write_BrtCellError(cell, o));
      return true;
  }
  if (last_seen) write_record(ba, 12, write_BrtShortBlank(cell, o));
  else write_record(ba, 1, write_BrtCellBlank(cell, o));
  return true;
}
function write_CELLTABLE(ba, ws, idx, opts) {
  var range = safe_decode_range(ws["!ref"] || "A1"), ref, rr = "", cols = [];
  write_record(
    ba,
    145
    /* BrtBeginSheetData */
  );
  var dense = Array.isArray(ws);
  var cap = range.e.r;
  if (ws["!rows"]) cap = Math.max(range.e.r, ws["!rows"].length - 1);
  for (var R = range.s.r; R <= cap; ++R) {
    rr = encode_row(R);
    write_row_header(ba, ws, range, R);
    var last_seen = false;
    if (R <= range.e.r) for (var C = range.s.c; C <= range.e.c; ++C) {
      if (R === range.s.r) cols[C] = encode_col(C);
      ref = cols[C] + rr;
      var cell = dense ? (ws[R] || [])[C] : ws[ref];
      if (!cell) {
        last_seen = false;
        continue;
      }
      last_seen = write_ws_bin_cell(ba, cell, R, C, opts, ws, last_seen);
    }
  }
  write_record(
    ba,
    146
    /* BrtEndSheetData */
  );
}
function write_MERGECELLS(ba, ws) {
  if (!ws || !ws["!merges"]) return;
  write_record(ba, 177, write_BrtBeginMergeCells(ws["!merges"].length));
  ws["!merges"].forEach(function(m) {
    write_record(ba, 176, write_BrtMergeCell(m));
  });
  write_record(
    ba,
    178
    /* BrtEndMergeCells */
  );
}
function write_COLINFOS(ba, ws) {
  if (!ws || !ws["!cols"]) return;
  write_record(
    ba,
    390
    /* BrtBeginColInfos */
  );
  ws["!cols"].forEach(function(m, i) {
    if (m) write_record(ba, 60, write_BrtColInfo(i, m));
  });
  write_record(
    ba,
    391
    /* BrtEndColInfos */
  );
}
function write_IGNOREECS(ba, ws) {
  if (!ws || !ws["!ref"]) return;
  write_record(
    ba,
    648
    /* BrtBeginCellIgnoreECs */
  );
  write_record(ba, 649, write_BrtCellIgnoreEC(safe_decode_range(ws["!ref"])));
  write_record(
    ba,
    650
    /* BrtEndCellIgnoreECs */
  );
}
function write_HLINKS(ba, ws, rels) {
  ws["!links"].forEach(function(l) {
    if (!l[1].Target) return;
    var rId = add_rels(rels, -1, l[1].Target.replace(/#.*$/, ""), RELS.HLINK);
    write_record(ba, 494, write_BrtHLink(l, rId));
  });
  delete ws["!links"];
}
function write_LEGACYDRAWING(ba, ws, idx, rels) {
  if (ws["!comments"].length > 0) {
    var rId = add_rels(rels, -1, "../drawings/vmlDrawing" + (idx + 1) + ".vml", RELS.VML);
    write_record(ba, 551, write_RelID("rId" + rId));
    ws["!legacy"] = rId;
  }
}
function write_AUTOFILTER(ba, ws, wb, idx) {
  if (!ws["!autofilter"]) return;
  var data2 = ws["!autofilter"];
  var ref = typeof data2.ref === "string" ? data2.ref : encode_range(data2.ref);
  if (!wb.Workbook) wb.Workbook = { Sheets: [] };
  if (!wb.Workbook.Names) wb.Workbook.Names = [];
  var names = wb.Workbook.Names;
  var range = decode_range(ref);
  if (range.s.r == range.e.r) {
    range.e.r = decode_range(ws["!ref"]).e.r;
    ref = encode_range(range);
  }
  for (var i = 0; i < names.length; ++i) {
    var name = names[i];
    if (name.Name != "_xlnm._FilterDatabase") continue;
    if (name.Sheet != idx) continue;
    name.Ref = "'" + wb.SheetNames[idx] + "'!" + ref;
    break;
  }
  if (i == names.length) names.push({ Name: "_xlnm._FilterDatabase", Sheet: idx, Ref: "'" + wb.SheetNames[idx] + "'!" + ref });
  write_record(ba, 161, write_UncheckedRfX(safe_decode_range(ref)));
  write_record(
    ba,
    162
    /* BrtEndAFilter */
  );
}
function write_WSVIEWS2(ba, ws, Workbook) {
  write_record(
    ba,
    133
    /* BrtBeginWsViews */
  );
  {
    write_record(ba, 137, write_BrtBeginWsView(ws, Workbook));
    write_record(
      ba,
      138
      /* BrtEndWsView */
    );
  }
  write_record(
    ba,
    134
    /* BrtEndWsViews */
  );
}
function write_WSFMTINFO() {
}
function write_SHEETPROTECT(ba, ws) {
  if (!ws["!protect"]) return;
  write_record(ba, 535, write_BrtSheetProtection(ws["!protect"]));
}
function write_ws_bin(idx, opts, wb, rels) {
  var ba = buf_array();
  var s = wb.SheetNames[idx], ws = wb.Sheets[s] || {};
  var c = s;
  try {
    if (wb && wb.Workbook) c = wb.Workbook.Sheets[idx].CodeName || c;
  } catch (e) {
  }
  var r = safe_decode_range(ws["!ref"] || "A1");
  if (r.e.c > 16383 || r.e.r > 1048575) {
    if (opts.WTF) throw new Error("Range " + (ws["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    r.e.c = Math.min(r.e.c, 16383);
    r.e.r = Math.min(r.e.c, 1048575);
  }
  ws["!links"] = [];
  ws["!comments"] = [];
  write_record(
    ba,
    129
    /* BrtBeginSheet */
  );
  if (wb.vbaraw || ws["!outline"]) write_record(ba, 147, write_BrtWsProp(c, ws["!outline"]));
  write_record(ba, 148, write_BrtWsDim(r));
  write_WSVIEWS2(ba, ws, wb.Workbook);
  write_WSFMTINFO(ba, ws);
  write_COLINFOS(ba, ws, idx, opts, wb);
  write_CELLTABLE(ba, ws, idx, opts, wb);
  write_SHEETPROTECT(ba, ws);
  write_AUTOFILTER(ba, ws, wb, idx);
  write_MERGECELLS(ba, ws);
  write_HLINKS(ba, ws, rels);
  if (ws["!margins"]) write_record(ba, 476, write_BrtMargins(ws["!margins"]));
  if (!opts || opts.ignoreEC || opts.ignoreEC == void 0) write_IGNOREECS(ba, ws);
  write_LEGACYDRAWING(ba, ws, idx, rels);
  write_record(
    ba,
    130
    /* BrtEndSheet */
  );
  return ba.end();
}
function parse_BrtCsProp(data2, length) {
  data2.l += 10;
  var name = parse_XLWideString(data2, length - 10);
  return { name };
}
var WBPropsDef = [
  ["allowRefreshQuery", false, "bool"],
  ["autoCompressPictures", true, "bool"],
  ["backupFile", false, "bool"],
  ["checkCompatibility", false, "bool"],
  ["CodeName", ""],
  ["date1904", false, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", false, "bool"],
  ["hidePivotFieldList", false, "bool"],
  ["promptedSolutions", false, "bool"],
  ["publishItems", false, "bool"],
  ["refreshAllConnections", false, "bool"],
  ["saveExternalLinkValues", true, "bool"],
  ["showBorderUnselectedTables", true, "bool"],
  ["showInkAnnotation", true, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", false, "bool"],
  ["updateLinks", "userSet"]
];
function safe1904(wb) {
  if (!wb.Workbook) return "false";
  if (!wb.Workbook.WBProps) return "false";
  return parsexmlbool(wb.Workbook.WBProps.date1904) ? "true" : "false";
}
var badchars = /* @__PURE__ */ "][*?/\\".split("");
function check_ws_name(n, safe) {
  if (n.length > 31) {
    if (safe) return false;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var _good = true;
  badchars.forEach(function(c) {
    if (n.indexOf(c) == -1) return;
    if (!safe) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    _good = false;
  });
  return _good;
}
function check_wb_names(N, S, codes) {
  N.forEach(function(n, i) {
    check_ws_name(n);
    for (var j = 0; j < i; ++j) if (n == N[j]) throw new Error("Duplicate Sheet Name: " + n);
    if (codes) {
      var cn = S && S[i] && S[i].CodeName || n;
      if (cn.charCodeAt(0) == 95 && cn.length > 22) throw new Error("Bad Code Name: Worksheet" + cn);
    }
  });
}
function check_wb(wb) {
  if (!wb || !wb.SheetNames || !wb.Sheets) throw new Error("Invalid Workbook");
  if (!wb.SheetNames.length) throw new Error("Workbook is empty");
  var Sheets = wb.Workbook && wb.Workbook.Sheets || [];
  check_wb_names(wb.SheetNames, Sheets, !!wb.vbaraw);
  for (var i = 0; i < wb.SheetNames.length; ++i) check_ws(wb.Sheets[wb.SheetNames[i]], wb.SheetNames[i], i);
}
function write_wb_xml(wb) {
  var o = [XML_HEADER];
  o[o.length] = writextag("workbook", null, {
    "xmlns": XMLNS_main[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": XMLNS.r
  });
  var write_names = wb.Workbook && (wb.Workbook.Names || []).length > 0;
  var workbookPr = { codeName: "ThisWorkbook" };
  if (wb.Workbook && wb.Workbook.WBProps) {
    WBPropsDef.forEach(function(x) {
      if (wb.Workbook.WBProps[x[0]] == null) return;
      if (wb.Workbook.WBProps[x[0]] == x[1]) return;
      workbookPr[x[0]] = wb.Workbook.WBProps[x[0]];
    });
    if (wb.Workbook.WBProps.CodeName) {
      workbookPr.codeName = wb.Workbook.WBProps.CodeName;
      delete workbookPr.CodeName;
    }
  }
  o[o.length] = writextag("workbookPr", null, workbookPr);
  var sheets = wb.Workbook && wb.Workbook.Sheets || [];
  var i = 0;
  if (sheets && sheets[0] && !!sheets[0].Hidden) {
    o[o.length] = "<bookViews>";
    for (i = 0; i != wb.SheetNames.length; ++i) {
      if (!sheets[i]) break;
      if (!sheets[i].Hidden) break;
    }
    if (i == wb.SheetNames.length) i = 0;
    o[o.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>';
    o[o.length] = "</bookViews>";
  }
  o[o.length] = "<sheets>";
  for (i = 0; i != wb.SheetNames.length; ++i) {
    var sht = { name: escapexml(wb.SheetNames[i].slice(0, 31)) };
    sht.sheetId = "" + (i + 1);
    sht["r:id"] = "rId" + (i + 1);
    if (sheets[i]) switch (sheets[i].Hidden) {
      case 1:
        sht.state = "hidden";
        break;
      case 2:
        sht.state = "veryHidden";
        break;
    }
    o[o.length] = writextag("sheet", null, sht);
  }
  o[o.length] = "</sheets>";
  if (write_names) {
    o[o.length] = "<definedNames>";
    if (wb.Workbook && wb.Workbook.Names) wb.Workbook.Names.forEach(function(n) {
      var d = { name: n.Name };
      if (n.Comment) d.comment = n.Comment;
      if (n.Sheet != null) d.localSheetId = "" + n.Sheet;
      if (n.Hidden) d.hidden = "1";
      if (!n.Ref) return;
      o[o.length] = writextag("definedName", escapexml(n.Ref), d);
    });
    o[o.length] = "</definedNames>";
  }
  if (o.length > 2) {
    o[o.length] = "</workbook>";
    o[1] = o[1].replace("/>", ">");
  }
  return o.join("");
}
function parse_BrtBundleSh(data2, length) {
  var z = {};
  z.Hidden = data2.read_shift(4);
  z.iTabID = data2.read_shift(4);
  z.strRelID = parse_RelID(data2, length - 8);
  z.name = parse_XLWideString(data2);
  return z;
}
function write_BrtBundleSh(data2, o) {
  if (!o) o = new_buf(127);
  o.write_shift(4, data2.Hidden);
  o.write_shift(4, data2.iTabID);
  write_RelID(data2.strRelID, o);
  write_XLWideString(data2.name.slice(0, 31), o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function parse_BrtWbProp(data2, length) {
  var o = {};
  var flags = data2.read_shift(4);
  o.defaultThemeVersion = data2.read_shift(4);
  var strName = length > 8 ? parse_XLWideString(data2) : "";
  if (strName.length > 0) o.CodeName = strName;
  o.autoCompressPictures = !!(flags & 65536);
  o.backupFile = !!(flags & 64);
  o.checkCompatibility = !!(flags & 4096);
  o.date1904 = !!(flags & 1);
  o.filterPrivacy = !!(flags & 8);
  o.hidePivotFieldList = !!(flags & 1024);
  o.promptedSolutions = !!(flags & 16);
  o.publishItems = !!(flags & 2048);
  o.refreshAllConnections = !!(flags & 262144);
  o.saveExternalLinkValues = !!(flags & 128);
  o.showBorderUnselectedTables = !!(flags & 4);
  o.showInkAnnotation = !!(flags & 32);
  o.showObjects = ["all", "placeholders", "none"][flags >> 13 & 3];
  o.showPivotChartFilter = !!(flags & 32768);
  o.updateLinks = ["userSet", "never", "always"][flags >> 8 & 3];
  return o;
}
function write_BrtWbProp(data2, o) {
  if (!o) o = new_buf(72);
  var flags = 0;
  if (data2) {
    if (data2.filterPrivacy) flags |= 8;
  }
  o.write_shift(4, flags);
  o.write_shift(4, 0);
  write_XLSBCodeName(data2 && data2.CodeName || "ThisWorkbook", o);
  return o.slice(0, o.l);
}
function parse_BrtName(data2, length, opts) {
  var end = data2.l + length;
  data2.l += 4;
  data2.l += 1;
  var itab = data2.read_shift(4);
  var name = parse_XLNameWideString(data2);
  var formula = parse_XLSBNameParsedFormula(data2, 0, opts);
  var comment = parse_XLNullableWideString(data2);
  data2.l = end;
  var out = { Name: name, Ptg: formula };
  if (itab < 268435455) out.Sheet = itab;
  if (comment) out.Comment = comment;
  return out;
}
function write_BUNDLESHS(ba, wb) {
  write_record(
    ba,
    143
    /* BrtBeginBundleShs */
  );
  for (var idx = 0; idx != wb.SheetNames.length; ++idx) {
    var viz = wb.Workbook && wb.Workbook.Sheets && wb.Workbook.Sheets[idx] && wb.Workbook.Sheets[idx].Hidden || 0;
    var d = { Hidden: viz, iTabID: idx + 1, strRelID: "rId" + (idx + 1), name: wb.SheetNames[idx] };
    write_record(ba, 156, write_BrtBundleSh(d));
  }
  write_record(
    ba,
    144
    /* BrtEndBundleShs */
  );
}
function write_BrtFileVersion(data2, o) {
  if (!o) o = new_buf(127);
  for (var i = 0; i != 4; ++i) o.write_shift(4, 0);
  write_XLWideString("SheetJS", o);
  write_XLWideString(XLSX.version, o);
  write_XLWideString(XLSX.version, o);
  write_XLWideString("7262", o);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function write_BrtBookView(idx, o) {
  if (!o) o = new_buf(29);
  o.write_shift(-4, 0);
  o.write_shift(-4, 460);
  o.write_shift(4, 28800);
  o.write_shift(4, 17600);
  o.write_shift(4, 500);
  o.write_shift(4, idx);
  o.write_shift(4, idx);
  var flags = 120;
  o.write_shift(1, flags);
  return o.length > o.l ? o.slice(0, o.l) : o;
}
function write_BOOKVIEWS(ba, wb) {
  if (!wb.Workbook || !wb.Workbook.Sheets) return;
  var sheets = wb.Workbook.Sheets;
  var i = 0, vistab = -1, hidden = -1;
  for (; i < sheets.length; ++i) {
    if (!sheets[i] || !sheets[i].Hidden && vistab == -1) vistab = i;
    else if (sheets[i].Hidden == 1 && hidden == -1) hidden = i;
  }
  if (hidden > vistab) return;
  write_record(
    ba,
    135
    /* BrtBeginBookViews */
  );
  write_record(ba, 158, write_BrtBookView(vistab));
  write_record(
    ba,
    136
    /* BrtEndBookViews */
  );
}
function write_wb_bin(wb, opts) {
  var ba = buf_array();
  write_record(
    ba,
    131
    /* BrtBeginBook */
  );
  write_record(ba, 128, write_BrtFileVersion());
  write_record(ba, 153, write_BrtWbProp(wb.Workbook && wb.Workbook.WBProps || null));
  write_BOOKVIEWS(ba, wb, opts);
  write_BUNDLESHS(ba, wb, opts);
  write_record(
    ba,
    132
    /* BrtEndBook */
  );
  return ba.end();
}
function write_wb(wb, name, opts) {
  return (name.slice(-4) === ".bin" ? write_wb_bin : write_wb_xml)(wb, opts);
}
function write_ws(data2, name, opts, wb, rels) {
  return (name.slice(-4) === ".bin" ? write_ws_bin : write_ws_xml)(data2, opts, wb, rels);
}
function write_sty(data2, name, opts) {
  return (name.slice(-4) === ".bin" ? write_sty_bin : write_sty_xml)(data2, opts);
}
function write_sst(data2, name, opts) {
  return (name.slice(-4) === ".bin" ? write_sst_bin : write_sst_xml)(data2, opts);
}
function write_cmnt(data2, name, opts) {
  return (name.slice(-4) === ".bin" ? write_comments_bin : write_comments_xml)(data2, opts);
}
function write_xlmeta(name) {
  return (name.slice(-4) === ".bin" ? write_xlmeta_bin : write_xlmeta_xml)();
}
function write_props_xlml(wb, opts) {
  var o = [];
  if (wb.Props) o.push(xlml_write_docprops(wb.Props, opts));
  if (wb.Custprops) o.push(xlml_write_custprops(wb.Props, wb.Custprops, opts));
  return o.join("");
}
function write_wb_xlml() {
  return "";
}
function write_sty_xlml(wb, opts) {
  var styles = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  opts.cellXfs.forEach(function(xf, id) {
    var payload = [];
    payload.push(writextag("NumberFormat", null, { "ss:Format": escapexml(table_fmt[xf.numFmtId]) }));
    var o = (
      /*::(*/
      { "ss:ID": "s" + (21 + id) }
    );
    styles.push(writextag("Style", payload.join(""), o));
  });
  return writextag("Styles", styles.join(""));
}
function write_name_xlml(n) {
  return writextag("NamedRange", null, { "ss:Name": n.Name, "ss:RefersTo": "=" + a1_to_rc(n.Ref, { r: 0, c: 0 }) });
}
function write_names_xlml(wb) {
  if (!((wb || {}).Workbook || {}).Names) return "";
  var names = wb.Workbook.Names;
  var out = [];
  for (var i = 0; i < names.length; ++i) {
    var n = names[i];
    if (n.Sheet != null) continue;
    if (n.Name.match(/^_xlfn\./)) continue;
    out.push(write_name_xlml(n));
  }
  return writextag("Names", out.join(""));
}
function write_ws_xlml_names(ws, opts, idx, wb) {
  if (!ws) return "";
  if (!((wb || {}).Workbook || {}).Names) return "";
  var names = wb.Workbook.Names;
  var out = [];
  for (var i = 0; i < names.length; ++i) {
    var n = names[i];
    if (n.Sheet != idx) continue;
    if (n.Name.match(/^_xlfn\./)) continue;
    out.push(write_name_xlml(n));
  }
  return out.join("");
}
function write_ws_xlml_wsopts(ws, opts, idx, wb) {
  if (!ws) return "";
  var o = [];
  if (ws["!margins"]) {
    o.push("<PageSetup>");
    if (ws["!margins"].header) o.push(writextag("Header", null, { "x:Margin": ws["!margins"].header }));
    if (ws["!margins"].footer) o.push(writextag("Footer", null, { "x:Margin": ws["!margins"].footer }));
    o.push(writextag("PageMargins", null, {
      "x:Bottom": ws["!margins"].bottom || "0.75",
      "x:Left": ws["!margins"].left || "0.7",
      "x:Right": ws["!margins"].right || "0.7",
      "x:Top": ws["!margins"].top || "0.75"
    }));
    o.push("</PageSetup>");
  }
  if (wb && wb.Workbook && wb.Workbook.Sheets && wb.Workbook.Sheets[idx]) {
    if (wb.Workbook.Sheets[idx].Hidden) o.push(writextag("Visible", wb.Workbook.Sheets[idx].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var i = 0; i < idx; ++i) if (wb.Workbook.Sheets[i] && !wb.Workbook.Sheets[i].Hidden) break;
      if (i == idx) o.push("<Selected/>");
    }
  }
  if (((((wb || {}).Workbook || {}).Views || [])[0] || {}).RTL) o.push("<DisplayRightToLeft/>");
  if (ws["!protect"]) {
    o.push(writetag("ProtectContents", "True"));
    if (ws["!protect"].objects) o.push(writetag("ProtectObjects", "True"));
    if (ws["!protect"].scenarios) o.push(writetag("ProtectScenarios", "True"));
    if (ws["!protect"].selectLockedCells != null && !ws["!protect"].selectLockedCells) o.push(writetag("EnableSelection", "NoSelection"));
    else if (ws["!protect"].selectUnlockedCells != null && !ws["!protect"].selectUnlockedCells) o.push(writetag("EnableSelection", "UnlockedCells"));
    [
      ["formatCells", "AllowFormatCells"],
      ["formatColumns", "AllowSizeCols"],
      ["formatRows", "AllowSizeRows"],
      ["insertColumns", "AllowInsertCols"],
      ["insertRows", "AllowInsertRows"],
      ["insertHyperlinks", "AllowInsertHyperlinks"],
      ["deleteColumns", "AllowDeleteCols"],
      ["deleteRows", "AllowDeleteRows"],
      ["sort", "AllowSort"],
      ["autoFilter", "AllowFilter"],
      ["pivotTables", "AllowUsePivotTables"]
    ].forEach(function(x) {
      if (ws["!protect"][x[0]]) o.push("<" + x[1] + "/>");
    });
  }
  if (o.length == 0) return "";
  return writextag("WorksheetOptions", o.join(""), { xmlns: XLMLNS.x });
}
function write_ws_xlml_comment(comments) {
  return comments.map(function(c) {
    var t = xlml_unfixstr(c.t || "");
    var d = writextag("ss:Data", t, { "xmlns": "http://www.w3.org/TR/REC-html40" });
    return writextag("Comment", d, { "ss:Author": c.a });
  }).join("");
}
function write_ws_xlml_cell(cell, ref, ws, opts, idx, wb, addr) {
  if (!cell || cell.v == void 0 && cell.f == void 0) return "";
  var attr = {};
  if (cell.f) attr["ss:Formula"] = "=" + escapexml(a1_to_rc(cell.f, addr));
  if (cell.F && cell.F.slice(0, ref.length) == ref) {
    var end = decode_cell(cell.F.slice(ref.length + 1));
    attr["ss:ArrayRange"] = "RC:R" + (end.r == addr.r ? "" : "[" + (end.r - addr.r) + "]") + "C" + (end.c == addr.c ? "" : "[" + (end.c - addr.c) + "]");
  }
  if (cell.l && cell.l.Target) {
    attr["ss:HRef"] = escapexml(cell.l.Target);
    if (cell.l.Tooltip) attr["x:HRefScreenTip"] = escapexml(cell.l.Tooltip);
  }
  if (ws["!merges"]) {
    var marr = ws["!merges"];
    for (var mi = 0; mi != marr.length; ++mi) {
      if (marr[mi].s.c != addr.c || marr[mi].s.r != addr.r) continue;
      if (marr[mi].e.c > marr[mi].s.c) attr["ss:MergeAcross"] = marr[mi].e.c - marr[mi].s.c;
      if (marr[mi].e.r > marr[mi].s.r) attr["ss:MergeDown"] = marr[mi].e.r - marr[mi].s.r;
    }
  }
  var t = "", p = "";
  switch (cell.t) {
    case "z":
      if (!opts.sheetStubs) return "";
      break;
    case "n":
      t = "Number";
      p = String(cell.v);
      break;
    case "b":
      t = "Boolean";
      p = cell.v ? "1" : "0";
      break;
    case "e":
      t = "Error";
      p = BErr[cell.v];
      break;
    case "d":
      t = "DateTime";
      p = new Date(cell.v).toISOString();
      if (cell.z == null) cell.z = cell.z || table_fmt[14];
      break;
    case "s":
      t = "String";
      p = escapexlml(cell.v || "");
      break;
  }
  var os = get_cell_style(opts.cellXfs, cell, opts);
  attr["ss:StyleID"] = "s" + (21 + os);
  attr["ss:Index"] = addr.c + 1;
  var _v = cell.v != null ? p : "";
  var m = cell.t == "z" ? "" : '<Data ss:Type="' + t + '">' + _v + "</Data>";
  if ((cell.c || []).length > 0) m += write_ws_xlml_comment(cell.c);
  return writextag("Cell", m, attr);
}
function write_ws_xlml_row(R, row) {
  var o = '<Row ss:Index="' + (R + 1) + '"';
  if (row) {
    if (row.hpt && !row.hpx) row.hpx = pt2px(row.hpt);
    if (row.hpx) o += ' ss:AutoFitHeight="0" ss:Height="' + row.hpx + '"';
    if (row.hidden) o += ' ss:Hidden="1"';
  }
  return o + ">";
}
function write_ws_xlml_table(ws, opts, idx, wb) {
  if (!ws["!ref"]) return "";
  var range = safe_decode_range(ws["!ref"]);
  var marr = ws["!merges"] || [], mi = 0;
  var o = [];
  if (ws["!cols"]) ws["!cols"].forEach(function(n, i) {
    process_col(n);
    var w = !!n.width;
    var p = col_obj_w(i, n);
    var k = { "ss:Index": i + 1 };
    if (w) k["ss:Width"] = width2px(p.width);
    if (n.hidden) k["ss:Hidden"] = "1";
    o.push(writextag("Column", null, k));
  });
  var dense = Array.isArray(ws);
  for (var R = range.s.r; R <= range.e.r; ++R) {
    var row = [write_ws_xlml_row(R, (ws["!rows"] || [])[R])];
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var skip = false;
      for (mi = 0; mi != marr.length; ++mi) {
        if (marr[mi].s.c > C) continue;
        if (marr[mi].s.r > R) continue;
        if (marr[mi].e.c < C) continue;
        if (marr[mi].e.r < R) continue;
        if (marr[mi].s.c != C || marr[mi].s.r != R) skip = true;
        break;
      }
      if (skip) continue;
      var addr = { r: R, c: C };
      var ref = encode_cell(addr), cell = dense ? (ws[R] || [])[C] : ws[ref];
      row.push(write_ws_xlml_cell(cell, ref, ws, opts, idx, wb, addr));
    }
    row.push("</Row>");
    if (row.length > 2) o.push(row.join(""));
  }
  return o.join("");
}
function write_ws_xlml(idx, opts, wb) {
  var o = [];
  var s = wb.SheetNames[idx];
  var ws = wb.Sheets[s];
  var t = ws ? write_ws_xlml_names(ws, opts, idx, wb) : "";
  if (t.length > 0) o.push("<Names>" + t + "</Names>");
  t = ws ? write_ws_xlml_table(ws, opts, idx, wb) : "";
  if (t.length > 0) o.push("<Table>" + t + "</Table>");
  o.push(write_ws_xlml_wsopts(ws, opts, idx, wb));
  return o.join("");
}
function write_xlml(wb, opts) {
  if (!opts) opts = {};
  if (!wb.SSF) wb.SSF = dup(table_fmt);
  if (wb.SSF) {
    make_ssf();
    SSF_load_table(wb.SSF);
    opts.revssf = evert_num(wb.SSF);
    opts.revssf[wb.SSF[65535]] = 0;
    opts.ssf = wb.SSF;
    opts.cellXfs = [];
    get_cell_style(opts.cellXfs, {}, { revssf: { "General": 0 } });
  }
  var d = [];
  d.push(write_props_xlml(wb, opts));
  d.push(write_wb_xlml(wb, opts));
  d.push("");
  d.push("");
  for (var i = 0; i < wb.SheetNames.length; ++i)
    d.push(writextag("Worksheet", write_ws_xlml(i, opts, wb), { "ss:Name": escapexml(wb.SheetNames[i]) }));
  d[2] = write_sty_xlml(wb, opts);
  d[3] = write_names_xlml(wb, opts);
  return XML_HEADER + writextag("Workbook", d.join(""), {
    "xmlns": XLMLNS.ss,
    "xmlns:o": XLMLNS.o,
    "xmlns:x": XLMLNS.x,
    "xmlns:ss": XLMLNS.ss,
    "xmlns:dt": XLMLNS.dt,
    "xmlns:html": XLMLNS.html
  });
}
var PSCLSID = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function write_xls_props(wb, cfb) {
  var DSEntries = [], SEntries = [], CEntries = [];
  var i = 0, Keys;
  var DocSummaryRE = evert_key(DocSummaryPIDDSI, "n");
  var SummaryRE = evert_key(SummaryPIDSI, "n");
  if (wb.Props) {
    Keys = keys(wb.Props);
    for (i = 0; i < Keys.length; ++i) (Object.prototype.hasOwnProperty.call(DocSummaryRE, Keys[i]) ? DSEntries : Object.prototype.hasOwnProperty.call(SummaryRE, Keys[i]) ? SEntries : CEntries).push([Keys[i], wb.Props[Keys[i]]]);
  }
  if (wb.Custprops) {
    Keys = keys(wb.Custprops);
    for (i = 0; i < Keys.length; ++i) if (!Object.prototype.hasOwnProperty.call(wb.Props || {}, Keys[i])) (Object.prototype.hasOwnProperty.call(DocSummaryRE, Keys[i]) ? DSEntries : Object.prototype.hasOwnProperty.call(SummaryRE, Keys[i]) ? SEntries : CEntries).push([Keys[i], wb.Custprops[Keys[i]]]);
  }
  var CEntries2 = [];
  for (i = 0; i < CEntries.length; ++i) {
    if (XLSPSSkip.indexOf(CEntries[i][0]) > -1 || PseudoPropsPairs.indexOf(CEntries[i][0]) > -1) continue;
    if (CEntries[i][1] == null) continue;
    CEntries2.push(CEntries[i]);
  }
  if (SEntries.length) CFB.utils.cfb_add(cfb, "/SummaryInformation", write_PropertySetStream(SEntries, PSCLSID.SI, SummaryRE, SummaryPIDSI));
  if (DSEntries.length || CEntries2.length) CFB.utils.cfb_add(cfb, "/DocumentSummaryInformation", write_PropertySetStream(DSEntries, PSCLSID.DSI, DocSummaryRE, DocSummaryPIDDSI, CEntries2.length ? CEntries2 : null, PSCLSID.UDI));
}
function write_xlscfb(wb, opts) {
  var o = opts || {};
  var cfb = CFB.utils.cfb_new({ root: "R" });
  var wbpath = "/Workbook";
  switch (o.bookType || "xls") {
    case "xls":
      o.bookType = "biff8";
    /* falls through */
    case "xla":
      if (!o.bookType) o.bookType = "xla";
    /* falls through */
    case "biff8":
      wbpath = "/Workbook";
      o.biff = 8;
      break;
    case "biff5":
      wbpath = "/Book";
      o.biff = 5;
      break;
    default:
      throw new Error("invalid type " + o.bookType + " for XLS CFB");
  }
  CFB.utils.cfb_add(cfb, wbpath, write_biff_buf(wb, o));
  if (o.biff == 8 && (wb.Props || wb.Custprops)) write_xls_props(wb, cfb);
  if (o.biff == 8 && wb.vbaraw) fill_vba_xls(cfb, CFB.read(wb.vbaraw, { type: typeof wb.vbaraw == "string" ? "binary" : "buffer" }));
  return cfb;
}
var XLSBRecordEnum = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: parse_BrtRowHdr
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: parse_BrtCellBlank
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: parse_BrtCellRk
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: parse_BrtCellError
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: parse_BrtCellBool
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: parse_BrtCellReal
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: parse_BrtCellSt
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: parse_BrtCellIsst
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: parse_BrtFmlaString
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: parse_BrtFmlaNum
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: parse_BrtFmlaBool
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: parse_BrtFmlaError
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: parse_BrtShortBlank
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: parse_BrtShortRk
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: parse_BrtShortError
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: parse_BrtShortBool
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: parse_BrtShortReal
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: parse_BrtShortSt
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: parse_BrtShortIsst
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: parse_RichStr
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: parse_BrtName
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: parse_BrtFont
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: parse_BrtFmt
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: parse_BrtFill
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: parse_BrtBorder
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: parse_BrtXF
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: parse_Int32LE
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: parse_BrtMdb
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: parse_ColInfo
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: parse_BrtCellRString
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: parse_BrtCalcChainItem$
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: parse_BrtDVal
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: parsenoop,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: parse_BrtBeginWsView
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: parse_BrtWsProp
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: parse_BrtWsDim,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: parse_BrtPane
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: parse_BrtWbProp
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: parse_BrtBundleSh
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: parse_BrtBeginSst
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: parse_UncheckedRfX
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: parse_BrtMergeCell
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: parse_BrtMdtinfo
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: parse_BrtBeginEsmdb,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: parse_RelID
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: parse_ExternSheet
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: parse_BrtArrFmla
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: parse_BrtShrFmla
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: parse_BrtMargins
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: parse_BrtWsFmtInfo
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: parse_BrtHLink
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: parse_RelID
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: parse_BrtCommentAuthor
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: parse_BrtBeginComment
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: parse_BrtCommentText
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: parse_BrtCsProp
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: parse_BrtDVal14
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
};
function write_biff_rec(ba, type, payload, length) {
  var t = type;
  if (isNaN(t)) return;
  var len = length || (payload || []).length || 0;
  var o = ba.next(4);
  o.write_shift(2, t);
  o.write_shift(2, len);
  if (
    /*:: len != null &&*/
    len > 0 && is_buf(payload)
  ) ba.push(payload);
}
function write_biff_continue(ba, type, payload, length) {
  var len = length || (payload || []).length || 0;
  if (len <= 8224) return write_biff_rec(ba, type, payload, len);
  var t = type;
  if (isNaN(t)) return;
  var parts2 = payload.parts || [], sidx = 0;
  var i = 0, w = 0;
  while (w + (parts2[sidx] || 8224) <= 8224) {
    w += parts2[sidx] || 8224;
    sidx++;
  }
  var o = ba.next(4);
  o.write_shift(2, t);
  o.write_shift(2, w);
  ba.push(payload.slice(i, i + w));
  i += w;
  while (i < len) {
    o = ba.next(4);
    o.write_shift(2, 60);
    w = 0;
    while (w + (parts2[sidx] || 8224) <= 8224) {
      w += parts2[sidx] || 8224;
      sidx++;
    }
    o.write_shift(2, w);
    ba.push(payload.slice(i, i + w));
    i += w;
  }
}
function write_BIFF2Cell(out, r, c) {
  if (!out) out = new_buf(7);
  out.write_shift(2, r);
  out.write_shift(2, c);
  out.write_shift(2, 0);
  out.write_shift(1, 0);
  return out;
}
function write_BIFF2BERR(r, c, val, t) {
  var out = new_buf(9);
  write_BIFF2Cell(out, r, c);
  write_Bes(val, t || "b", out);
  return out;
}
function write_BIFF2LABEL(r, c, val) {
  var out = new_buf(8 + 2 * val.length);
  write_BIFF2Cell(out, r, c);
  out.write_shift(1, val.length);
  out.write_shift(val.length, val, "sbcs");
  return out.l < out.length ? out.slice(0, out.l) : out;
}
function write_ws_biff2_cell(ba, cell, R, C) {
  if (cell.v != null) switch (cell.t) {
    case "d":
    case "n":
      var v = cell.t == "d" ? datenum(parseDate(cell.v)) : cell.v;
      if (v == (v | 0) && v >= 0 && v < 65536)
        write_biff_rec(ba, 2, write_BIFF2INT(R, C, v));
      else
        write_biff_rec(ba, 3, write_BIFF2NUM(R, C, v));
      return;
    case "b":
    case "e":
      write_biff_rec(ba, 5, write_BIFF2BERR(R, C, cell.v, cell.t));
      return;
    /* TODO: codepage, sst */
    case "s":
    case "str":
      write_biff_rec(ba, 4, write_BIFF2LABEL(R, C, (cell.v || "").slice(0, 255)));
      return;
  }
  write_biff_rec(ba, 1, write_BIFF2Cell(null, R, C));
}
function write_ws_biff2(ba, ws, idx, opts) {
  var dense = Array.isArray(ws);
  var range = safe_decode_range(ws["!ref"] || "A1"), ref, rr = "", cols = [];
  if (range.e.c > 255 || range.e.r > 16383) {
    if (opts.WTF) throw new Error("Range " + (ws["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    range.e.c = Math.min(range.e.c, 255);
    range.e.r = Math.min(range.e.c, 16383);
    ref = encode_range(range);
  }
  for (var R = range.s.r; R <= range.e.r; ++R) {
    rr = encode_row(R);
    for (var C = range.s.c; C <= range.e.c; ++C) {
      if (R === range.s.r) cols[C] = encode_col(C);
      ref = cols[C] + rr;
      var cell = dense ? (ws[R] || [])[C] : ws[ref];
      if (!cell) continue;
      write_ws_biff2_cell(ba, cell, R, C, opts);
    }
  }
}
function write_biff2_buf(wb, opts) {
  var o = opts || {};
  if (DENSE != null && o.dense == null) o.dense = DENSE;
  var ba = buf_array();
  var idx = 0;
  for (var i = 0; i < wb.SheetNames.length; ++i) if (wb.SheetNames[i] == o.sheet) idx = i;
  if (idx == 0 && !!o.sheet && wb.SheetNames[0] != o.sheet) throw new Error("Sheet not found: " + o.sheet);
  write_biff_rec(ba, o.biff == 4 ? 1033 : o.biff == 3 ? 521 : 9, write_BOF(wb, 16, o));
  write_ws_biff2(ba, wb.Sheets[wb.SheetNames[idx]], idx, o, wb);
  write_biff_rec(ba, 10);
  return ba.end();
}
function write_FONTS_biff8(ba, data2, opts) {
  write_biff_rec(ba, 49, write_Font({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, opts));
}
function write_FMTS_biff8(ba, NF, opts) {
  if (!NF) return;
  [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var i = r[0]; i <= r[1]; ++i) if (NF[i] != null) write_biff_rec(ba, 1054, write_Format(i, NF[i], opts));
  });
}
function write_FEAT(ba, ws) {
  var o = new_buf(19);
  o.write_shift(4, 2151);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  o.write_shift(2, 3);
  o.write_shift(1, 1);
  o.write_shift(4, 0);
  write_biff_rec(ba, 2151, o);
  o = new_buf(39);
  o.write_shift(4, 2152);
  o.write_shift(4, 0);
  o.write_shift(4, 0);
  o.write_shift(2, 3);
  o.write_shift(1, 0);
  o.write_shift(4, 0);
  o.write_shift(2, 1);
  o.write_shift(4, 4);
  o.write_shift(2, 0);
  write_Ref8U(safe_decode_range(ws["!ref"] || "A1"), o);
  o.write_shift(4, 4);
  write_biff_rec(ba, 2152, o);
}
function write_CELLXFS_biff8(ba, opts) {
  for (var i = 0; i < 16; ++i) write_biff_rec(ba, 224, write_XF({ numFmtId: 0, style: true }, 0, opts));
  opts.cellXfs.forEach(function(c) {
    write_biff_rec(ba, 224, write_XF(c, 0, opts));
  });
}
function write_ws_biff8_hlinks(ba, ws) {
  for (var R = 0; R < ws["!links"].length; ++R) {
    var HL = ws["!links"][R];
    write_biff_rec(ba, 440, write_HLink(HL));
    if (HL[1].Tooltip) write_biff_rec(ba, 2048, write_HLinkTooltip(HL));
  }
  delete ws["!links"];
}
function write_ws_cols_biff8(ba, cols) {
  if (!cols) return;
  var cnt = 0;
  cols.forEach(function(col, idx) {
    if (++cnt <= 256 && col) {
      write_biff_rec(ba, 125, write_ColInfo(col_obj_w(idx, col), idx));
    }
  });
}
function write_ws_biff8_cell(ba, cell, R, C, opts) {
  var os = 16 + get_cell_style(opts.cellXfs, cell, opts);
  if (cell.v == null && !cell.bf) {
    write_biff_rec(ba, 513, write_XLSCell(R, C, os));
    return;
  }
  if (cell.bf) write_biff_rec(ba, 6, write_Formula(cell, R, C, opts, os));
  else switch (cell.t) {
    case "d":
    case "n":
      var v = cell.t == "d" ? datenum(parseDate(cell.v)) : cell.v;
      write_biff_rec(ba, 515, write_Number(R, C, v, os, opts));
      break;
    case "b":
    case "e":
      write_biff_rec(ba, 517, write_BoolErr(R, C, cell.v, os, opts, cell.t));
      break;
    /* TODO: codepage, sst */
    case "s":
    case "str":
      if (opts.bookSST) {
        var isst = get_sst_id(opts.Strings, cell.v, opts.revStrings);
        write_biff_rec(ba, 253, write_LabelSst(R, C, isst, os, opts));
      } else write_biff_rec(ba, 516, write_Label(R, C, (cell.v || "").slice(0, 255), os, opts));
      break;
    default:
      write_biff_rec(ba, 513, write_XLSCell(R, C, os));
  }
}
function write_ws_biff8(idx, opts, wb) {
  var ba = buf_array();
  var s = wb.SheetNames[idx], ws = wb.Sheets[s] || {};
  var _WB = (wb || {}).Workbook || {};
  var _sheet = (_WB.Sheets || [])[idx] || {};
  var dense = Array.isArray(ws);
  var b8 = opts.biff == 8;
  var ref, rr = "", cols = [];
  var range = safe_decode_range(ws["!ref"] || "A1");
  var MAX_ROWS = b8 ? 65536 : 16384;
  if (range.e.c > 255 || range.e.r >= MAX_ROWS) {
    if (opts.WTF) throw new Error("Range " + (ws["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    range.e.c = Math.min(range.e.c, 255);
    range.e.r = Math.min(range.e.c, MAX_ROWS - 1);
  }
  write_biff_rec(ba, 2057, write_BOF(wb, 16, opts));
  write_biff_rec(ba, 13, writeuint16(1));
  write_biff_rec(ba, 12, writeuint16(100));
  write_biff_rec(ba, 15, writebool(true));
  write_biff_rec(ba, 17, writebool(false));
  write_biff_rec(ba, 16, write_Xnum(1e-3));
  write_biff_rec(ba, 95, writebool(true));
  write_biff_rec(ba, 42, writebool(false));
  write_biff_rec(ba, 43, writebool(false));
  write_biff_rec(ba, 130, writeuint16(1));
  write_biff_rec(ba, 128, write_Guts([0, 0]));
  write_biff_rec(ba, 131, writebool(false));
  write_biff_rec(ba, 132, writebool(false));
  if (b8) write_ws_cols_biff8(ba, ws["!cols"]);
  write_biff_rec(ba, 512, write_Dimensions(range, opts));
  if (b8) ws["!links"] = [];
  for (var R = range.s.r; R <= range.e.r; ++R) {
    rr = encode_row(R);
    for (var C = range.s.c; C <= range.e.c; ++C) {
      if (R === range.s.r) cols[C] = encode_col(C);
      ref = cols[C] + rr;
      var cell = dense ? (ws[R] || [])[C] : ws[ref];
      if (!cell) continue;
      write_ws_biff8_cell(ba, cell, R, C, opts);
      if (b8 && cell.l) ws["!links"].push([ref, cell.l]);
    }
  }
  var cname = _sheet.CodeName || _sheet.name || s;
  if (b8) write_biff_rec(ba, 574, write_Window2((_WB.Views || [])[0]));
  if (b8 && (ws["!merges"] || []).length) write_biff_rec(ba, 229, write_MergeCells(ws["!merges"]));
  if (b8) write_ws_biff8_hlinks(ba, ws);
  write_biff_rec(ba, 442, write_XLUnicodeString(cname, opts));
  if (b8) write_FEAT(ba, ws);
  write_biff_rec(
    ba,
    10
    /* EOF */
  );
  return ba.end();
}
function write_biff8_global(wb, bufs, opts) {
  var A = buf_array();
  var _WB = (wb || {}).Workbook || {};
  var _sheets = _WB.Sheets || [];
  var _wb = (
    /*::((*/
    _WB.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  );
  var b8 = opts.biff == 8, b5 = opts.biff == 5;
  write_biff_rec(A, 2057, write_BOF(wb, 5, opts));
  if (opts.bookType == "xla") write_biff_rec(
    A,
    135
    /* Addin */
  );
  write_biff_rec(A, 225, b8 ? writeuint16(1200) : null);
  write_biff_rec(A, 193, writezeroes(2));
  if (b5) write_biff_rec(
    A,
    191
    /* ToolbarHdr */
  );
  if (b5) write_biff_rec(
    A,
    192
    /* ToolbarEnd */
  );
  write_biff_rec(
    A,
    226
    /* InterfaceEnd */
  );
  write_biff_rec(A, 92, write_WriteAccess("SheetJS", opts));
  write_biff_rec(A, 66, writeuint16(b8 ? 1200 : 1252));
  if (b8) write_biff_rec(A, 353, writeuint16(0));
  if (b8) write_biff_rec(
    A,
    448
    /* Excel9File */
  );
  write_biff_rec(A, 317, write_RRTabId(wb.SheetNames.length));
  if (b8 && wb.vbaraw) write_biff_rec(
    A,
    211
    /* ObProj */
  );
  if (b8 && wb.vbaraw) {
    var cname = _wb.CodeName || "ThisWorkbook";
    write_biff_rec(A, 442, write_XLUnicodeString(cname, opts));
  }
  write_biff_rec(A, 156, writeuint16(17));
  write_biff_rec(A, 25, writebool(false));
  write_biff_rec(A, 18, writebool(false));
  write_biff_rec(A, 19, writeuint16(0));
  if (b8) write_biff_rec(A, 431, writebool(false));
  if (b8) write_biff_rec(A, 444, writeuint16(0));
  write_biff_rec(A, 61, write_Window1(opts));
  write_biff_rec(A, 64, writebool(false));
  write_biff_rec(A, 141, writeuint16(0));
  write_biff_rec(A, 34, writebool(safe1904(wb) == "true"));
  write_biff_rec(A, 14, writebool(true));
  if (b8) write_biff_rec(A, 439, writebool(false));
  write_biff_rec(A, 218, writeuint16(0));
  write_FONTS_biff8(A, wb, opts);
  write_FMTS_biff8(A, wb.SSF, opts);
  write_CELLXFS_biff8(A, opts);
  if (b8) write_biff_rec(A, 352, writebool(false));
  var a = A.end();
  var C = buf_array();
  if (b8) write_biff_rec(C, 140, write_Country());
  if (b8 && opts.Strings) write_biff_continue(C, 252, write_SST(opts.Strings, opts));
  write_biff_rec(
    C,
    10
    /* EOF */
  );
  var c = C.end();
  var B = buf_array();
  var blen = 0, j = 0;
  for (j = 0; j < wb.SheetNames.length; ++j) blen += (b8 ? 12 : 11) + (b8 ? 2 : 1) * wb.SheetNames[j].length;
  var start = a.length + blen + c.length;
  for (j = 0; j < wb.SheetNames.length; ++j) {
    var _sheet = _sheets[j] || {};
    write_biff_rec(B, 133, write_BoundSheet8({ pos: start, hs: _sheet.Hidden || 0, dt: 0, name: wb.SheetNames[j] }, opts));
    start += bufs[j].length;
  }
  var b = B.end();
  if (blen != b.length) throw new Error("BS8 " + blen + " != " + b.length);
  var out = [];
  if (a.length) out.push(a);
  if (b.length) out.push(b);
  if (c.length) out.push(c);
  return bconcat(out);
}
function write_biff8_buf(wb, opts) {
  var o = opts || {};
  var bufs = [];
  if (wb && !wb.SSF) {
    wb.SSF = dup(table_fmt);
  }
  if (wb && wb.SSF) {
    make_ssf();
    SSF_load_table(wb.SSF);
    o.revssf = evert_num(wb.SSF);
    o.revssf[wb.SSF[65535]] = 0;
    o.ssf = wb.SSF;
  }
  o.Strings = /*::((*/
  [];
  o.Strings.Count = 0;
  o.Strings.Unique = 0;
  fix_write_opts(o);
  o.cellXfs = [];
  get_cell_style(o.cellXfs, {}, { revssf: { "General": 0 } });
  if (!wb.Props) wb.Props = {};
  for (var i = 0; i < wb.SheetNames.length; ++i) bufs[bufs.length] = write_ws_biff8(i, o, wb);
  bufs.unshift(write_biff8_global(wb, bufs, o));
  return bconcat(bufs);
}
function write_biff_buf(wb, opts) {
  for (var i = 0; i <= wb.SheetNames.length; ++i) {
    var ws = wb.Sheets[wb.SheetNames[i]];
    if (!ws || !ws["!ref"]) continue;
    var range = decode_range(ws["!ref"]);
    if (range.e.c > 255) {
      if (typeof console != "undefined" && console.error) console.error("Worksheet '" + wb.SheetNames[i] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var o = opts || {};
  switch (o.biff || 2) {
    case 8:
    case 5:
      return write_biff8_buf(wb, opts);
    case 4:
    case 3:
    case 2:
      return write_biff2_buf(wb, opts);
  }
  throw new Error("invalid type " + o.bookType + " for BIFF");
}
function make_html_row(ws, r, R, o) {
  var M = ws["!merges"] || [];
  var oo = [];
  for (var C = r.s.c; C <= r.e.c; ++C) {
    var RS = 0, CS = 0;
    for (var j = 0; j < M.length; ++j) {
      if (M[j].s.r > R || M[j].s.c > C) continue;
      if (M[j].e.r < R || M[j].e.c < C) continue;
      if (M[j].s.r < R || M[j].s.c < C) {
        RS = -1;
        break;
      }
      RS = M[j].e.r - M[j].s.r + 1;
      CS = M[j].e.c - M[j].s.c + 1;
      break;
    }
    if (RS < 0) continue;
    var coord = encode_cell({ r: R, c: C });
    var cell = o.dense ? (ws[R] || [])[C] : ws[coord];
    var w = cell && cell.v != null && (cell.h || escapehtml(cell.w || (format_cell(cell), cell.w) || "")) || "";
    var sp = {};
    if (RS > 1) sp.rowspan = RS;
    if (CS > 1) sp.colspan = CS;
    if (o.editable) w = '<span contenteditable="true">' + w + "</span>";
    else if (cell) {
      sp["data-t"] = cell && cell.t || "z";
      if (cell.v != null) sp["data-v"] = cell.v;
      if (cell.z != null) sp["data-z"] = cell.z;
      if (cell.l && (cell.l.Target || "#").charAt(0) != "#") w = '<a href="' + cell.l.Target + '">' + w + "</a>";
    }
    sp.id = (o.id || "sjs") + "-" + coord;
    oo.push(writextag("td", w, sp));
  }
  var preamble = "<tr>";
  return preamble + oo.join("") + "</tr>";
}
var HTML_BEGIN = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
var HTML_END = "</body></html>";
function make_html_preamble(ws, R, o) {
  var out = [];
  return out.join("") + "<table" + (o && o.id ? ' id="' + o.id + '"' : "") + ">";
}
function sheet_to_html(ws, opts) {
  var o = opts || {};
  var header = o.header != null ? o.header : HTML_BEGIN;
  var footer = o.footer != null ? o.footer : HTML_END;
  var out = [header];
  var r = decode_range(ws["!ref"]);
  o.dense = Array.isArray(ws);
  out.push(make_html_preamble(ws, r, o));
  for (var R = r.s.r; R <= r.e.r; ++R) out.push(make_html_row(ws, r, R, o));
  out.push("</table>" + footer);
  return out.join("");
}
function sheet_add_dom(ws, table, _opts) {
  var opts = _opts || {};
  if (DENSE != null) opts.dense = DENSE;
  var or_R = 0, or_C = 0;
  if (opts.origin != null) {
    if (typeof opts.origin == "number") or_R = opts.origin;
    else {
      var _origin = typeof opts.origin == "string" ? decode_cell(opts.origin) : opts.origin;
      or_R = _origin.r;
      or_C = _origin.c;
    }
  }
  var rows = table.getElementsByTagName("tr");
  var sheetRows = Math.min(opts.sheetRows || 1e7, rows.length);
  var range = { s: { r: 0, c: 0 }, e: { r: or_R, c: or_C } };
  if (ws["!ref"]) {
    var _range = decode_range(ws["!ref"]);
    range.s.r = Math.min(range.s.r, _range.s.r);
    range.s.c = Math.min(range.s.c, _range.s.c);
    range.e.r = Math.max(range.e.r, _range.e.r);
    range.e.c = Math.max(range.e.c, _range.e.c);
    if (or_R == -1) range.e.r = or_R = _range.e.r + 1;
  }
  var merges = [], midx = 0;
  var rowinfo = ws["!rows"] || (ws["!rows"] = []);
  var _R = 0, R = 0, _C = 0, C = 0, RS = 0, CS = 0;
  if (!ws["!cols"]) ws["!cols"] = [];
  for (; _R < rows.length && R < sheetRows; ++_R) {
    var row = rows[_R];
    if (is_dom_element_hidden(row)) {
      if (opts.display) continue;
      rowinfo[R] = { hidden: true };
    }
    var elts = row.children;
    for (_C = C = 0; _C < elts.length; ++_C) {
      var elt = elts[_C];
      if (opts.display && is_dom_element_hidden(elt)) continue;
      var v = elt.hasAttribute("data-v") ? elt.getAttribute("data-v") : elt.hasAttribute("v") ? elt.getAttribute("v") : htmldecode(elt.innerHTML);
      var z = elt.getAttribute("data-z") || elt.getAttribute("z");
      for (midx = 0; midx < merges.length; ++midx) {
        var m = merges[midx];
        if (m.s.c == C + or_C && m.s.r < R + or_R && R + or_R <= m.e.r) {
          C = m.e.c + 1 - or_C;
          midx = -1;
        }
      }
      CS = +elt.getAttribute("colspan") || 1;
      if ((RS = +elt.getAttribute("rowspan") || 1) > 1 || CS > 1) merges.push({ s: { r: R + or_R, c: C + or_C }, e: { r: R + or_R + (RS || 1) - 1, c: C + or_C + (CS || 1) - 1 } });
      var o = { t: "s", v };
      var _t = elt.getAttribute("data-t") || elt.getAttribute("t") || "";
      if (v != null) {
        if (v.length == 0) o.t = _t || "z";
        else if (opts.raw || v.trim().length == 0 || _t == "s") {
        } else if (v === "TRUE") o = { t: "b", v: true };
        else if (v === "FALSE") o = { t: "b", v: false };
        else if (!isNaN(fuzzynum(v))) o = { t: "n", v: fuzzynum(v) };
        else if (!isNaN(fuzzydate(v).getDate())) {
          o = { t: "d", v: parseDate(v) };
          if (!opts.cellDates) o = { t: "n", v: datenum(o.v) };
          o.z = opts.dateNF || table_fmt[14];
        }
      }
      if (o.z === void 0 && z != null) o.z = z;
      var l = "", Aelts = elt.getElementsByTagName("A");
      if (Aelts && Aelts.length) {
        for (var Aelti = 0; Aelti < Aelts.length; ++Aelti) if (Aelts[Aelti].hasAttribute("href")) {
          l = Aelts[Aelti].getAttribute("href");
          if (l.charAt(0) != "#") break;
        }
      }
      if (l && l.charAt(0) != "#") o.l = { Target: l };
      if (opts.dense) {
        if (!ws[R + or_R]) ws[R + or_R] = [];
        ws[R + or_R][C + or_C] = o;
      } else ws[encode_cell({ c: C + or_C, r: R + or_R })] = o;
      if (range.e.c < C + or_C) range.e.c = C + or_C;
      C += CS;
    }
    ++R;
  }
  if (merges.length) ws["!merges"] = (ws["!merges"] || []).concat(merges);
  range.e.r = Math.max(range.e.r, R - 1 + or_R);
  ws["!ref"] = encode_range(range);
  if (R >= sheetRows) ws["!fullref"] = encode_range((range.e.r = rows.length - _R + R - 1 + or_R, range));
  return ws;
}
function parse_dom_table(table, _opts) {
  var opts = _opts || {};
  var ws = opts.dense ? [] : {};
  return sheet_add_dom(ws, table, _opts);
}
function table_to_book(table, opts) {
  return sheet_to_workbook(parse_dom_table(table, opts), opts);
}
function is_dom_element_hidden(element) {
  var display = "";
  var get_computed_style = get_get_computed_style_function(element);
  if (get_computed_style) display = get_computed_style(element).getPropertyValue("display");
  if (!display) display = element.style && element.style.display;
  return display === "none";
}
function get_get_computed_style_function(element) {
  if (element.ownerDocument.defaultView && typeof element.ownerDocument.defaultView.getComputedStyle === "function") return element.ownerDocument.defaultView.getComputedStyle;
  if (typeof getComputedStyle === "function") return getComputedStyle;
  return null;
}
var write_styles_ods = /* @__PURE__ */ (function() {
  var master_styles = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join("");
  var payload = "<office:document-styles " + wxt_helper({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + master_styles + "</office:document-styles>";
  return function wso() {
    return XML_HEADER + payload;
  };
})();
var write_content_ods = /* @__PURE__ */ (function() {
  var write_text_p = function(text) {
    return escapexml(text).replace(/  +/g, function($$) {
      return '<text:s text:c="' + $$.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  };
  var null_cell_xml = "          <table:table-cell />\n";
  var covered_cell_xml = "          <table:covered-table-cell/>\n";
  var write_ws2 = function(ws, wb, i) {
    var o = [];
    o.push('      <table:table table:name="' + escapexml(wb.SheetNames[i]) + '" table:style-name="ta1">\n');
    var R = 0, C = 0, range = decode_range(ws["!ref"] || "A1");
    var marr = ws["!merges"] || [], mi = 0;
    var dense = Array.isArray(ws);
    if (ws["!cols"]) {
      for (C = 0; C <= range.e.c; ++C) o.push("        <table:table-column" + (ws["!cols"][C] ? ' table:style-name="co' + ws["!cols"][C].ods + '"' : "") + "></table:table-column>\n");
    }
    var H = "", ROWS = ws["!rows"] || [];
    for (R = 0; R < range.s.r; ++R) {
      H = ROWS[R] ? ' table:style-name="ro' + ROWS[R].ods + '"' : "";
      o.push("        <table:table-row" + H + "></table:table-row>\n");
    }
    for (; R <= range.e.r; ++R) {
      H = ROWS[R] ? ' table:style-name="ro' + ROWS[R].ods + '"' : "";
      o.push("        <table:table-row" + H + ">\n");
      for (C = 0; C < range.s.c; ++C) o.push(null_cell_xml);
      for (; C <= range.e.c; ++C) {
        var skip = false, ct = {}, textp = "";
        for (mi = 0; mi != marr.length; ++mi) {
          if (marr[mi].s.c > C) continue;
          if (marr[mi].s.r > R) continue;
          if (marr[mi].e.c < C) continue;
          if (marr[mi].e.r < R) continue;
          if (marr[mi].s.c != C || marr[mi].s.r != R) skip = true;
          ct["table:number-columns-spanned"] = marr[mi].e.c - marr[mi].s.c + 1;
          ct["table:number-rows-spanned"] = marr[mi].e.r - marr[mi].s.r + 1;
          break;
        }
        if (skip) {
          o.push(covered_cell_xml);
          continue;
        }
        var ref = encode_cell({ r: R, c: C }), cell = dense ? (ws[R] || [])[C] : ws[ref];
        if (cell && cell.f) {
          ct["table:formula"] = escapexml(csf_to_ods_formula(cell.f));
          if (cell.F) {
            if (cell.F.slice(0, ref.length) == ref) {
              var _Fref = decode_range(cell.F);
              ct["table:number-matrix-columns-spanned"] = _Fref.e.c - _Fref.s.c + 1;
              ct["table:number-matrix-rows-spanned"] = _Fref.e.r - _Fref.s.r + 1;
            }
          }
        }
        if (!cell) {
          o.push(null_cell_xml);
          continue;
        }
        switch (cell.t) {
          case "b":
            textp = cell.v ? "TRUE" : "FALSE";
            ct["office:value-type"] = "boolean";
            ct["office:boolean-value"] = cell.v ? "true" : "false";
            break;
          case "n":
            textp = cell.w || String(cell.v || 0);
            ct["office:value-type"] = "float";
            ct["office:value"] = cell.v || 0;
            break;
          case "s":
          case "str":
            textp = cell.v == null ? "" : cell.v;
            ct["office:value-type"] = "string";
            break;
          case "d":
            textp = cell.w || parseDate(cell.v).toISOString();
            ct["office:value-type"] = "date";
            ct["office:date-value"] = parseDate(cell.v).toISOString();
            ct["table:style-name"] = "ce1";
            break;
          //case 'e':
          default:
            o.push(null_cell_xml);
            continue;
        }
        var text_p = write_text_p(textp);
        if (cell.l && cell.l.Target) {
          var _tgt = cell.l.Target;
          _tgt = _tgt.charAt(0) == "#" ? "#" + csf_to_ods_3D(_tgt.slice(1)) : _tgt;
          if (_tgt.charAt(0) != "#" && !_tgt.match(/^\w+:/)) _tgt = "../" + _tgt;
          text_p = writextag("text:a", text_p, { "xlink:href": _tgt.replace(/&/g, "&amp;") });
        }
        o.push("          " + writextag("table:table-cell", writextag("text:p", text_p, {}), ct) + "\n");
      }
      o.push("        </table:table-row>\n");
    }
    o.push("      </table:table>\n");
    return o.join("");
  };
  var write_automatic_styles_ods = function(o, wb) {
    o.push(" <office:automatic-styles>\n");
    o.push('  <number:date-style style:name="N37" number:automatic-order="true">\n');
    o.push('   <number:month number:style="long"/>\n');
    o.push("   <number:text>/</number:text>\n");
    o.push('   <number:day number:style="long"/>\n');
    o.push("   <number:text>/</number:text>\n");
    o.push("   <number:year/>\n");
    o.push("  </number:date-style>\n");
    var cidx = 0;
    wb.SheetNames.map(function(n) {
      return wb.Sheets[n];
    }).forEach(function(ws) {
      if (!ws) return;
      if (ws["!cols"]) {
        for (var C = 0; C < ws["!cols"].length; ++C) if (ws["!cols"][C]) {
          var colobj = ws["!cols"][C];
          if (colobj.width == null && colobj.wpx == null && colobj.wch == null) continue;
          process_col(colobj);
          colobj.ods = cidx;
          var w = ws["!cols"][C].wpx + "px";
          o.push('  <style:style style:name="co' + cidx + '" style:family="table-column">\n');
          o.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + w + '"/>\n');
          o.push("  </style:style>\n");
          ++cidx;
        }
      }
    });
    var ridx = 0;
    wb.SheetNames.map(function(n) {
      return wb.Sheets[n];
    }).forEach(function(ws) {
      if (!ws) return;
      if (ws["!rows"]) {
        for (var R = 0; R < ws["!rows"].length; ++R) if (ws["!rows"][R]) {
          ws["!rows"][R].ods = ridx;
          var h = ws["!rows"][R].hpx + "px";
          o.push('  <style:style style:name="ro' + ridx + '" style:family="table-row">\n');
          o.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + h + '"/>\n');
          o.push("  </style:style>\n");
          ++ridx;
        }
      }
    });
    o.push('  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">\n');
    o.push('   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n');
    o.push("  </style:style>\n");
    o.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n');
    o.push(" </office:automatic-styles>\n");
  };
  return function wcx(wb, opts) {
    var o = [XML_HEADER];
    var attr = wxt_helper({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    });
    var fods = wxt_helper({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    if (opts.bookType == "fods") {
      o.push("<office:document" + attr + fods + ">\n");
      o.push(write_meta_ods().replace(/office:document-meta/g, "office:meta"));
    } else o.push("<office:document-content" + attr + ">\n");
    write_automatic_styles_ods(o, wb);
    o.push("  <office:body>\n");
    o.push("    <office:spreadsheet>\n");
    for (var i = 0; i != wb.SheetNames.length; ++i) o.push(write_ws2(wb.Sheets[wb.SheetNames[i]], wb, i, opts));
    o.push("    </office:spreadsheet>\n");
    o.push("  </office:body>\n");
    if (opts.bookType == "fods") o.push("</office:document>");
    else o.push("</office:document-content>");
    return o.join("");
  };
})();
function write_ods(wb, opts) {
  if (opts.bookType == "fods") return write_content_ods(wb, opts);
  var zip = zip_new();
  var f = "";
  var manifest = [];
  var rdf = [];
  f = "mimetype";
  zip_add_file(zip, f, "application/vnd.oasis.opendocument.spreadsheet");
  f = "content.xml";
  zip_add_file(zip, f, write_content_ods(wb, opts));
  manifest.push([f, "text/xml"]);
  rdf.push([f, "ContentFile"]);
  f = "styles.xml";
  zip_add_file(zip, f, write_styles_ods(wb, opts));
  manifest.push([f, "text/xml"]);
  rdf.push([f, "StylesFile"]);
  f = "meta.xml";
  zip_add_file(zip, f, XML_HEADER + write_meta_ods(
    /*::wb, opts*/
  ));
  manifest.push([f, "text/xml"]);
  rdf.push([f, "MetadataFile"]);
  f = "manifest.rdf";
  zip_add_file(zip, f, write_rdf(
    rdf
    /*, opts*/
  ));
  manifest.push([f, "application/rdf+xml"]);
  f = "META-INF/manifest.xml";
  zip_add_file(zip, f, write_manifest(
    manifest
    /*, opts*/
  ));
  return zip;
}
function u8_to_dataview(array) {
  return new DataView(array.buffer, array.byteOffset, array.byteLength);
}
function stru8(str) {
  return typeof TextEncoder != "undefined" ? new TextEncoder().encode(str) : s2a(utf8write(str));
}
function u8contains(body, search) {
  outer:
    for (var L = 0; L <= body.length - search.length; ++L) {
      for (var j = 0; j < search.length; ++j)
        if (body[L + j] != search[j])
          continue outer;
      return true;
    }
  return false;
}
function u8concat(u8a) {
  var len = u8a.reduce(function(acc, x) {
    return acc + x.length;
  }, 0);
  var out = new Uint8Array(len);
  var off = 0;
  u8a.forEach(function(u8) {
    out.set(u8, off);
    off += u8.length;
  });
  return out;
}
function writeDecimal128LE(buf, offset, value2) {
  var exp = Math.floor(value2 == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(value2))) + 6176 - 20;
  var mantissa = value2 / Math.pow(10, exp - 6176);
  buf[offset + 15] |= exp >> 7;
  buf[offset + 14] |= (exp & 127) << 1;
  for (var i = 0; mantissa >= 1; ++i, mantissa /= 256)
    buf[offset + i] = mantissa & 255;
  buf[offset + 15] |= value2 >= 0 ? 0 : 128;
}
function parse_varint49(buf, ptr) {
  var l = ptr ? ptr[0] : 0;
  var usz = buf[l] & 127;
  varint:
    if (buf[l++] >= 128) {
      usz |= (buf[l] & 127) << 7;
      if (buf[l++] < 128)
        break varint;
      usz |= (buf[l] & 127) << 14;
      if (buf[l++] < 128)
        break varint;
      usz |= (buf[l] & 127) << 21;
      if (buf[l++] < 128)
        break varint;
      usz += (buf[l] & 127) * Math.pow(2, 28);
      ++l;
      if (buf[l++] < 128)
        break varint;
      usz += (buf[l] & 127) * Math.pow(2, 35);
      ++l;
      if (buf[l++] < 128)
        break varint;
      usz += (buf[l] & 127) * Math.pow(2, 42);
      ++l;
      if (buf[l++] < 128)
        break varint;
    }
  if (ptr)
    ptr[0] = l;
  return usz;
}
function write_varint49(v) {
  var usz = new Uint8Array(7);
  usz[0] = v & 127;
  var L = 1;
  sz:
    if (v > 127) {
      usz[L - 1] |= 128;
      usz[L] = v >> 7 & 127;
      ++L;
      if (v <= 16383)
        break sz;
      usz[L - 1] |= 128;
      usz[L] = v >> 14 & 127;
      ++L;
      if (v <= 2097151)
        break sz;
      usz[L - 1] |= 128;
      usz[L] = v >> 21 & 127;
      ++L;
      if (v <= 268435455)
        break sz;
      usz[L - 1] |= 128;
      usz[L] = v / 256 >>> 21 & 127;
      ++L;
      if (v <= 34359738367)
        break sz;
      usz[L - 1] |= 128;
      usz[L] = v / 65536 >>> 21 & 127;
      ++L;
      if (v <= 4398046511103)
        break sz;
      usz[L - 1] |= 128;
      usz[L] = v / 16777216 >>> 21 & 127;
      ++L;
    }
  return usz.slice(0, L);
}
function varint_to_i32(buf) {
  var l = 0, i32 = buf[l] & 127;
  varint:
    if (buf[l++] >= 128) {
      i32 |= (buf[l] & 127) << 7;
      if (buf[l++] < 128)
        break varint;
      i32 |= (buf[l] & 127) << 14;
      if (buf[l++] < 128)
        break varint;
      i32 |= (buf[l] & 127) << 21;
      if (buf[l++] < 128)
        break varint;
      i32 |= (buf[l] & 127) << 28;
    }
  return i32;
}
function parse_shallow(buf) {
  var out = [], ptr = [0];
  while (ptr[0] < buf.length) {
    var off = ptr[0];
    var num = parse_varint49(buf, ptr);
    var type = num & 7;
    num = Math.floor(num / 8);
    var len = 0;
    var res;
    if (num == 0)
      break;
    switch (type) {
      case 0:
        {
          var l = ptr[0];
          while (buf[ptr[0]++] >= 128)
            ;
          res = buf.slice(l, ptr[0]);
        }
        break;
      case 5:
        len = 4;
        res = buf.slice(ptr[0], ptr[0] + len);
        ptr[0] += len;
        break;
      case 1:
        len = 8;
        res = buf.slice(ptr[0], ptr[0] + len);
        ptr[0] += len;
        break;
      case 2:
        len = parse_varint49(buf, ptr);
        res = buf.slice(ptr[0], ptr[0] + len);
        ptr[0] += len;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(type, " for Field ").concat(num, " at offset ").concat(off));
    }
    var v = { data: res, type };
    if (out[num] == null)
      out[num] = [v];
    else
      out[num].push(v);
  }
  return out;
}
function write_shallow(proto) {
  var out = [];
  proto.forEach(function(field, idx) {
    field.forEach(function(item) {
      if (!item.data)
        return;
      out.push(write_varint49(idx * 8 + item.type));
      if (item.type == 2)
        out.push(write_varint49(item.data.length));
      out.push(item.data);
    });
  });
  return u8concat(out);
}
function parse_iwa_file(buf) {
  var _a;
  var out = [], ptr = [0];
  while (ptr[0] < buf.length) {
    var len = parse_varint49(buf, ptr);
    var ai = parse_shallow(buf.slice(ptr[0], ptr[0] + len));
    ptr[0] += len;
    var res = {
      id: varint_to_i32(ai[1][0].data),
      messages: []
    };
    ai[2].forEach(function(b) {
      var mi = parse_shallow(b.data);
      var fl = varint_to_i32(mi[3][0].data);
      res.messages.push({
        meta: mi,
        data: buf.slice(ptr[0], ptr[0] + fl)
      });
      ptr[0] += fl;
    });
    if ((_a = ai[3]) == null ? void 0 : _a[0])
      res.merge = varint_to_i32(ai[3][0].data) >>> 0 > 0;
    out.push(res);
  }
  return out;
}
function write_iwa_file(ias) {
  var bufs = [];
  ias.forEach(function(ia) {
    var ai = [];
    ai[1] = [{ data: write_varint49(ia.id), type: 0 }];
    ai[2] = [];
    if (ia.merge != null)
      ai[3] = [{ data: write_varint49(+!!ia.merge), type: 0 }];
    var midata = [];
    ia.messages.forEach(function(mi) {
      midata.push(mi.data);
      mi.meta[3] = [{ type: 0, data: write_varint49(mi.data.length) }];
      ai[2].push({ data: write_shallow(mi.meta), type: 2 });
    });
    var aipayload = write_shallow(ai);
    bufs.push(write_varint49(aipayload.length));
    bufs.push(aipayload);
    midata.forEach(function(mid) {
      return bufs.push(mid);
    });
  });
  return u8concat(bufs);
}
function parse_snappy_chunk(type, buf) {
  if (type != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(type));
  var ptr = [0];
  var usz = parse_varint49(buf, ptr);
  var chunks = [];
  while (ptr[0] < buf.length) {
    var tag = buf[ptr[0]] & 3;
    if (tag == 0) {
      var len = buf[ptr[0]++] >> 2;
      if (len < 60)
        ++len;
      else {
        var c = len - 59;
        len = buf[ptr[0]];
        if (c > 1)
          len |= buf[ptr[0] + 1] << 8;
        if (c > 2)
          len |= buf[ptr[0] + 2] << 16;
        if (c > 3)
          len |= buf[ptr[0] + 3] << 24;
        len >>>= 0;
        len++;
        ptr[0] += c;
      }
      chunks.push(buf.slice(ptr[0], ptr[0] + len));
      ptr[0] += len;
      continue;
    } else {
      var offset = 0, length = 0;
      if (tag == 1) {
        length = (buf[ptr[0]] >> 2 & 7) + 4;
        offset = (buf[ptr[0]++] & 224) << 3;
        offset |= buf[ptr[0]++];
      } else {
        length = (buf[ptr[0]++] >> 2) + 1;
        if (tag == 2) {
          offset = buf[ptr[0]] | buf[ptr[0] + 1] << 8;
          ptr[0] += 2;
        } else {
          offset = (buf[ptr[0]] | buf[ptr[0] + 1] << 8 | buf[ptr[0] + 2] << 16 | buf[ptr[0] + 3] << 24) >>> 0;
          ptr[0] += 4;
        }
      }
      chunks = [u8concat(chunks)];
      if (offset == 0)
        throw new Error("Invalid offset 0");
      if (offset > chunks[0].length)
        throw new Error("Invalid offset beyond length");
      if (length >= offset) {
        chunks.push(chunks[0].slice(-offset));
        length -= offset;
        while (length >= chunks[chunks.length - 1].length) {
          chunks.push(chunks[chunks.length - 1]);
          length -= chunks[chunks.length - 1].length;
        }
      }
      chunks.push(chunks[0].slice(-offset, -offset + length));
    }
  }
  var o = u8concat(chunks);
  if (o.length != usz)
    throw new Error("Unexpected length: ".concat(o.length, " != ").concat(usz));
  return o;
}
function decompress_iwa_file(buf) {
  var out = [];
  var l = 0;
  while (l < buf.length) {
    var t = buf[l++];
    var len = buf[l] | buf[l + 1] << 8 | buf[l + 2] << 16;
    l += 3;
    out.push(parse_snappy_chunk(t, buf.slice(l, l + len)));
    l += len;
  }
  if (l !== buf.length)
    throw new Error("data is not a valid framed stream!");
  return u8concat(out);
}
function compress_iwa_file(buf) {
  var out = [];
  var l = 0;
  while (l < buf.length) {
    var c = Math.min(buf.length - l, 268435455);
    var frame = new Uint8Array(4);
    out.push(frame);
    var usz = write_varint49(c);
    var L = usz.length;
    out.push(usz);
    if (c <= 60) {
      L++;
      out.push(new Uint8Array([c - 1 << 2]));
    } else if (c <= 256) {
      L += 2;
      out.push(new Uint8Array([240, c - 1 & 255]));
    } else if (c <= 65536) {
      L += 3;
      out.push(new Uint8Array([244, c - 1 & 255, c - 1 >> 8 & 255]));
    } else if (c <= 16777216) {
      L += 4;
      out.push(new Uint8Array([248, c - 1 & 255, c - 1 >> 8 & 255, c - 1 >> 16 & 255]));
    } else if (c <= 4294967296) {
      L += 5;
      out.push(new Uint8Array([252, c - 1 & 255, c - 1 >> 8 & 255, c - 1 >> 16 & 255, c - 1 >>> 24 & 255]));
    }
    out.push(buf.slice(l, l + c));
    L += c;
    frame[0] = 0;
    frame[1] = L & 255;
    frame[2] = L >> 8 & 255;
    frame[3] = L >> 16 & 255;
    l += c;
  }
  return u8concat(out);
}
function write_new_storage(cell, sst) {
  var out = new Uint8Array(32), dv = u8_to_dataview(out), l = 12, flags = 0;
  out[0] = 5;
  switch (cell.t) {
    case "n":
      out[1] = 2;
      writeDecimal128LE(out, l, cell.v);
      flags |= 1;
      l += 16;
      break;
    case "b":
      out[1] = 6;
      dv.setFloat64(l, cell.v ? 1 : 0, true);
      flags |= 2;
      l += 8;
      break;
    case "s":
      if (sst.indexOf(cell.v) == -1)
        throw new Error("Value ".concat(cell.v, " missing from SST!"));
      out[1] = 3;
      dv.setUint32(l, sst.indexOf(cell.v), true);
      flags |= 8;
      l += 4;
      break;
    default:
      throw "unsupported cell type " + cell.t;
  }
  dv.setUint32(8, flags, true);
  return out.slice(0, l);
}
function write_old_storage(cell, sst) {
  var out = new Uint8Array(32), dv = u8_to_dataview(out), l = 12, flags = 0;
  out[0] = 3;
  switch (cell.t) {
    case "n":
      out[2] = 2;
      dv.setFloat64(l, cell.v, true);
      flags |= 32;
      l += 8;
      break;
    case "b":
      out[2] = 6;
      dv.setFloat64(l, cell.v ? 1 : 0, true);
      flags |= 32;
      l += 8;
      break;
    case "s":
      if (sst.indexOf(cell.v) == -1)
        throw new Error("Value ".concat(cell.v, " missing from SST!"));
      out[2] = 3;
      dv.setUint32(l, sst.indexOf(cell.v), true);
      flags |= 16;
      l += 4;
      break;
    default:
      throw "unsupported cell type " + cell.t;
  }
  dv.setUint32(4, flags, true);
  return out.slice(0, l);
}
function parse_TSP_Reference(buf) {
  var pb = parse_shallow(buf);
  return parse_varint49(pb[1][0].data);
}
function write_tile_row(tri, data2, SST) {
  var _a, _b, _c, _d;
  if (!((_a = tri[6]) == null ? void 0 : _a[0]) || !((_b = tri[7]) == null ? void 0 : _b[0]))
    throw "Mutation only works on post-BNC storages!";
  var wide_offsets = ((_d = (_c = tri[8]) == null ? void 0 : _c[0]) == null ? void 0 : _d.data) && varint_to_i32(tri[8][0].data) > 0 || false;
  if (wide_offsets)
    throw "Math only works with normal offsets";
  var cnt = 0;
  var dv = u8_to_dataview(tri[7][0].data), last_offset = 0, cell_storage = [];
  var _dv = u8_to_dataview(tri[4][0].data), _last_offset = 0, _cell_storage = [];
  for (var C = 0; C < data2.length; ++C) {
    if (data2[C] == null) {
      dv.setUint16(C * 2, 65535, true);
      _dv.setUint16(C * 2, 65535);
      continue;
    }
    dv.setUint16(C * 2, last_offset, true);
    _dv.setUint16(C * 2, _last_offset, true);
    var celload, _celload;
    switch (typeof data2[C]) {
      case "string":
        celload = write_new_storage({ t: "s", v: data2[C] }, SST);
        _celload = write_old_storage({ t: "s", v: data2[C] }, SST);
        break;
      case "number":
        celload = write_new_storage({ t: "n", v: data2[C] }, SST);
        _celload = write_old_storage({ t: "n", v: data2[C] }, SST);
        break;
      case "boolean":
        celload = write_new_storage({ t: "b", v: data2[C] }, SST);
        _celload = write_old_storage({ t: "b", v: data2[C] }, SST);
        break;
      default:
        throw new Error("Unsupported value " + data2[C]);
    }
    cell_storage.push(celload);
    last_offset += celload.length;
    _cell_storage.push(_celload);
    _last_offset += _celload.length;
    ++cnt;
  }
  tri[2][0].data = write_varint49(cnt);
  for (; C < tri[7][0].data.length / 2; ++C) {
    dv.setUint16(C * 2, 65535, true);
    _dv.setUint16(C * 2, 65535, true);
  }
  tri[6][0].data = u8concat(cell_storage);
  tri[3][0].data = u8concat(_cell_storage);
  return cnt;
}
function write_numbers_iwa(wb, opts) {
  if (!opts || !opts.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var ws = wb.Sheets[wb.SheetNames[0]];
  if (wb.SheetNames.length > 1)
    console.error("The Numbers writer currently writes only the first table");
  var range = decode_range(ws["!ref"]);
  range.s.r = range.s.c = 0;
  var trunc = false;
  if (range.e.c > 9) {
    trunc = true;
    range.e.c = 9;
  }
  if (range.e.r > 49) {
    trunc = true;
    range.e.r = 49;
  }
  if (trunc)
    console.error("The Numbers writer is currently limited to ".concat(encode_range(range)));
  var data2 = sheet_to_json(ws, { range, header: 1 });
  var SST = ["~Sh33tJ5~"];
  data2.forEach(function(row) {
    return row.forEach(function(cell) {
      if (typeof cell == "string")
        SST.push(cell);
    });
  });
  var dependents = {};
  var indices = [];
  var cfb = CFB.read(opts.numbers, { type: "base64" });
  cfb.FileIndex.map(function(fi, idx) {
    return [fi, cfb.FullPaths[idx]];
  }).forEach(function(row) {
    var fi = row[0], fp = row[1];
    if (fi.type != 2)
      return;
    if (!fi.name.match(/\.iwa/))
      return;
    var old_content = fi.content;
    var raw1 = decompress_iwa_file(old_content);
    var x2 = parse_iwa_file(raw1);
    x2.forEach(function(packet2) {
      indices.push(packet2.id);
      dependents[packet2.id] = { deps: [], location: fp, type: varint_to_i32(packet2.messages[0].meta[1][0].data) };
    });
  });
  indices.sort(function(x2, y2) {
    return x2 - y2;
  });
  var indices_varint = indices.filter(function(x2) {
    return x2 > 1;
  }).map(function(x2) {
    return [x2, write_varint49(x2)];
  });
  cfb.FileIndex.map(function(fi, idx) {
    return [fi, cfb.FullPaths[idx]];
  }).forEach(function(row) {
    var fi = row[0], fp = row[1];
    if (!fi.name.match(/\.iwa/))
      return;
    var x2 = parse_iwa_file(decompress_iwa_file(fi.content));
    x2.forEach(function(ia) {
      ia.messages.forEach(function(m) {
        indices_varint.forEach(function(ivi) {
          if (ia.messages.some(function(mess) {
            return varint_to_i32(mess.meta[1][0].data) != 11006 && u8contains(mess.data, ivi[1]);
          })) {
            dependents[ivi[0]].deps.push(ia.id);
          }
        });
      });
    });
  });
  function get_unique_msgid() {
    for (var i = 927262; i < 2e6; ++i)
      if (!dependents[i])
        return i;
    throw new Error("Too many messages");
  }
  var entry = CFB.find(cfb, dependents[1].location);
  var x = parse_iwa_file(decompress_iwa_file(entry.content));
  var docroot;
  for (var xi = 0; xi < x.length; ++xi) {
    var packet = x[xi];
    if (packet.id == 1)
      docroot = packet;
  }
  var sheetrootref = parse_TSP_Reference(parse_shallow(docroot.messages[0].data)[1][0].data);
  entry = CFB.find(cfb, dependents[sheetrootref].location);
  x = parse_iwa_file(decompress_iwa_file(entry.content));
  for (xi = 0; xi < x.length; ++xi) {
    packet = x[xi];
    if (packet.id == sheetrootref)
      docroot = packet;
  }
  sheetrootref = parse_TSP_Reference(parse_shallow(docroot.messages[0].data)[2][0].data);
  entry = CFB.find(cfb, dependents[sheetrootref].location);
  x = parse_iwa_file(decompress_iwa_file(entry.content));
  for (xi = 0; xi < x.length; ++xi) {
    packet = x[xi];
    if (packet.id == sheetrootref)
      docroot = packet;
  }
  sheetrootref = parse_TSP_Reference(parse_shallow(docroot.messages[0].data)[2][0].data);
  entry = CFB.find(cfb, dependents[sheetrootref].location);
  x = parse_iwa_file(decompress_iwa_file(entry.content));
  for (xi = 0; xi < x.length; ++xi) {
    packet = x[xi];
    if (packet.id == sheetrootref)
      docroot = packet;
  }
  var pb = parse_shallow(docroot.messages[0].data);
  {
    pb[6][0].data = write_varint49(range.e.r + 1);
    pb[7][0].data = write_varint49(range.e.c + 1);
    var cruidsref = parse_TSP_Reference(pb[46][0].data);
    var oldbucket = CFB.find(cfb, dependents[cruidsref].location);
    var _x = parse_iwa_file(decompress_iwa_file(oldbucket.content));
    {
      for (var j = 0; j < _x.length; ++j) {
        if (_x[j].id == cruidsref)
          break;
      }
      if (_x[j].id != cruidsref)
        throw "Bad ColumnRowUIDMapArchive";
      var cruids = parse_shallow(_x[j].messages[0].data);
      cruids[1] = [];
      cruids[2] = [], cruids[3] = [];
      for (var C = 0; C <= range.e.c; ++C) {
        var uuid = [];
        uuid[1] = uuid[2] = [{ type: 0, data: write_varint49(C + 420690) }];
        cruids[1].push({ type: 2, data: write_shallow(uuid) });
        cruids[2].push({ type: 0, data: write_varint49(C) });
        cruids[3].push({ type: 0, data: write_varint49(C) });
      }
      cruids[4] = [];
      cruids[5] = [], cruids[6] = [];
      for (var R = 0; R <= range.e.r; ++R) {
        uuid = [];
        uuid[1] = uuid[2] = [{ type: 0, data: write_varint49(R + 726270) }];
        cruids[4].push({ type: 2, data: write_shallow(uuid) });
        cruids[5].push({ type: 0, data: write_varint49(R) });
        cruids[6].push({ type: 0, data: write_varint49(R) });
      }
      _x[j].messages[0].data = write_shallow(cruids);
    }
    oldbucket.content = compress_iwa_file(write_iwa_file(_x));
    oldbucket.size = oldbucket.content.length;
    delete pb[46];
    var store = parse_shallow(pb[4][0].data);
    {
      store[7][0].data = write_varint49(range.e.r + 1);
      var row_headers = parse_shallow(store[1][0].data);
      var row_header_ref = parse_TSP_Reference(row_headers[2][0].data);
      oldbucket = CFB.find(cfb, dependents[row_header_ref].location);
      _x = parse_iwa_file(decompress_iwa_file(oldbucket.content));
      {
        if (_x[0].id != row_header_ref)
          throw "Bad HeaderStorageBucket";
        var base_bucket = parse_shallow(_x[0].messages[0].data);
        for (R = 0; R < data2.length; ++R) {
          var _bucket = parse_shallow(base_bucket[2][0].data);
          _bucket[1][0].data = write_varint49(R);
          _bucket[4][0].data = write_varint49(data2[R].length);
          base_bucket[2][R] = { type: base_bucket[2][0].type, data: write_shallow(_bucket) };
        }
        _x[0].messages[0].data = write_shallow(base_bucket);
      }
      oldbucket.content = compress_iwa_file(write_iwa_file(_x));
      oldbucket.size = oldbucket.content.length;
      var col_header_ref = parse_TSP_Reference(store[2][0].data);
      oldbucket = CFB.find(cfb, dependents[col_header_ref].location);
      _x = parse_iwa_file(decompress_iwa_file(oldbucket.content));
      {
        if (_x[0].id != col_header_ref)
          throw "Bad HeaderStorageBucket";
        base_bucket = parse_shallow(_x[0].messages[0].data);
        for (C = 0; C <= range.e.c; ++C) {
          _bucket = parse_shallow(base_bucket[2][0].data);
          _bucket[1][0].data = write_varint49(C);
          _bucket[4][0].data = write_varint49(range.e.r + 1);
          base_bucket[2][C] = { type: base_bucket[2][0].type, data: write_shallow(_bucket) };
        }
        _x[0].messages[0].data = write_shallow(base_bucket);
      }
      oldbucket.content = compress_iwa_file(write_iwa_file(_x));
      oldbucket.size = oldbucket.content.length;
      var sstref = parse_TSP_Reference(store[4][0].data);
      (function() {
        var sentry = CFB.find(cfb, dependents[sstref].location);
        var sx = parse_iwa_file(decompress_iwa_file(sentry.content));
        var sstroot;
        for (var sxi = 0; sxi < sx.length; ++sxi) {
          var packet2 = sx[sxi];
          if (packet2.id == sstref)
            sstroot = packet2;
        }
        var sstdata = parse_shallow(sstroot.messages[0].data);
        {
          sstdata[3] = [];
          var newsst = [];
          SST.forEach(function(str, i) {
            newsst[1] = [{ type: 0, data: write_varint49(i) }];
            newsst[2] = [{ type: 0, data: write_varint49(1) }];
            newsst[3] = [{ type: 2, data: stru8(str) }];
            sstdata[3].push({ type: 2, data: write_shallow(newsst) });
          });
        }
        sstroot.messages[0].data = write_shallow(sstdata);
        var sy = write_iwa_file(sx);
        var raw32 = compress_iwa_file(sy);
        sentry.content = raw32;
        sentry.size = sentry.content.length;
      })();
      var tile = parse_shallow(store[3][0].data);
      {
        var t = tile[1][0];
        delete tile[2];
        var tl = parse_shallow(t.data);
        {
          var tileref = parse_TSP_Reference(tl[2][0].data);
          (function() {
            var tentry = CFB.find(cfb, dependents[tileref].location);
            var tx = parse_iwa_file(decompress_iwa_file(tentry.content));
            var tileroot;
            for (var sxi = 0; sxi < tx.length; ++sxi) {
              var packet2 = tx[sxi];
              if (packet2.id == tileref)
                tileroot = packet2;
            }
            var tiledata = parse_shallow(tileroot.messages[0].data);
            {
              delete tiledata[6];
              delete tile[7];
              var rowload = new Uint8Array(tiledata[5][0].data);
              tiledata[5] = [];
              var cnt = 0;
              for (var R2 = 0; R2 <= range.e.r; ++R2) {
                var tilerow = parse_shallow(rowload);
                cnt += write_tile_row(tilerow, data2[R2], SST);
                tilerow[1][0].data = write_varint49(R2);
                tiledata[5].push({ data: write_shallow(tilerow), type: 2 });
              }
              tiledata[1] = [{ type: 0, data: write_varint49(range.e.c + 1) }];
              tiledata[2] = [{ type: 0, data: write_varint49(range.e.r + 1) }];
              tiledata[3] = [{ type: 0, data: write_varint49(cnt) }];
              tiledata[4] = [{ type: 0, data: write_varint49(range.e.r + 1) }];
            }
            tileroot.messages[0].data = write_shallow(tiledata);
            var ty = write_iwa_file(tx);
            var raw32 = compress_iwa_file(ty);
            tentry.content = raw32;
            tentry.size = tentry.content.length;
          })();
        }
        t.data = write_shallow(tl);
      }
      store[3][0].data = write_shallow(tile);
    }
    pb[4][0].data = write_shallow(store);
  }
  docroot.messages[0].data = write_shallow(pb);
  var y = write_iwa_file(x);
  var raw3 = compress_iwa_file(y);
  entry.content = raw3;
  entry.size = entry.content.length;
  return cfb;
}
function fix_opts_func(defaults) {
  return function fix_opts(opts) {
    for (var i = 0; i != defaults.length; ++i) {
      var d = defaults[i];
      if (opts[d[0]] === void 0) opts[d[0]] = d[1];
      if (d[2] === "n") opts[d[0]] = Number(opts[d[0]]);
    }
  };
}
function fix_write_opts(opts) {
  fix_opts_func([
    ["cellDates", false],
    /* write date cells with type `d` */
    ["bookSST", false],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", false],
    /* Use file compression */
    ["WTF", false]
    /* WTF mode (throws errors) */
  ])(opts);
}
function write_zip(wb, opts) {
  if (opts.bookType == "ods") return write_ods(wb, opts);
  if (opts.bookType == "numbers") return write_numbers_iwa(wb, opts);
  if (opts.bookType == "xlsb") return write_zip_xlsxb(wb, opts);
  return write_zip_xlsx(wb, opts);
}
function write_zip_xlsxb(wb, opts) {
  _shapeid = 1024;
  if (wb && !wb.SSF) {
    wb.SSF = dup(table_fmt);
  }
  if (wb && wb.SSF) {
    make_ssf();
    SSF_load_table(wb.SSF);
    opts.revssf = evert_num(wb.SSF);
    opts.revssf[wb.SSF[65535]] = 0;
    opts.ssf = wb.SSF;
  }
  opts.rels = {};
  opts.wbrels = {};
  opts.Strings = /*::((*/
  [];
  opts.Strings.Count = 0;
  opts.Strings.Unique = 0;
  if (browser_has_Map) opts.revStrings = /* @__PURE__ */ new Map();
  else {
    opts.revStrings = {};
    opts.revStrings.foo = [];
    delete opts.revStrings.foo;
  }
  var wbext = opts.bookType == "xlsb" ? "bin" : "xml";
  var vbafmt = VBAFMTS.indexOf(opts.bookType) > -1;
  var ct = new_ct();
  fix_write_opts(opts = opts || {});
  var zip = zip_new();
  var f = "", rId = 0;
  opts.cellXfs = [];
  get_cell_style(opts.cellXfs, {}, { revssf: { "General": 0 } });
  if (!wb.Props) wb.Props = {};
  f = "docProps/core.xml";
  zip_add_file(zip, f, write_core_props(wb.Props, opts));
  ct.coreprops.push(f);
  add_rels(opts.rels, 2, f, RELS.CORE_PROPS);
  f = "docProps/app.xml";
  if (wb.Props && wb.Props.SheetNames) {
  } else if (!wb.Workbook || !wb.Workbook.Sheets) wb.Props.SheetNames = wb.SheetNames;
  else {
    var _sn = [];
    for (var _i = 0; _i < wb.SheetNames.length; ++_i)
      if ((wb.Workbook.Sheets[_i] || {}).Hidden != 2) _sn.push(wb.SheetNames[_i]);
    wb.Props.SheetNames = _sn;
  }
  wb.Props.Worksheets = wb.Props.SheetNames.length;
  zip_add_file(zip, f, write_ext_props(wb.Props, opts));
  ct.extprops.push(f);
  add_rels(opts.rels, 3, f, RELS.EXT_PROPS);
  if (wb.Custprops !== wb.Props && keys(wb.Custprops || {}).length > 0) {
    f = "docProps/custom.xml";
    zip_add_file(zip, f, write_cust_props(wb.Custprops, opts));
    ct.custprops.push(f);
    add_rels(opts.rels, 4, f, RELS.CUST_PROPS);
  }
  for (rId = 1; rId <= wb.SheetNames.length; ++rId) {
    var wsrels = { "!id": {} };
    var ws = wb.Sheets[wb.SheetNames[rId - 1]];
    var _type = (ws || {})["!type"] || "sheet";
    switch (_type) {
      case "chart":
      /* falls through */
      default:
        f = "xl/worksheets/sheet" + rId + "." + wbext;
        zip_add_file(zip, f, write_ws(rId - 1, f, opts, wb, wsrels));
        ct.sheets.push(f);
        add_rels(opts.wbrels, -1, "worksheets/sheet" + rId + "." + wbext, RELS.WS[0]);
    }
    if (ws) {
      var comments = ws["!comments"];
      var need_vml = false;
      var cf = "";
      if (comments && comments.length > 0) {
        cf = "xl/comments" + rId + "." + wbext;
        zip_add_file(zip, cf, write_cmnt(comments, cf, opts));
        ct.comments.push(cf);
        add_rels(wsrels, -1, "../comments" + rId + "." + wbext, RELS.CMNT);
        need_vml = true;
      }
      if (ws["!legacy"]) {
        if (need_vml) zip_add_file(zip, "xl/drawings/vmlDrawing" + rId + ".vml", write_comments_vml(rId, ws["!comments"]));
      }
      delete ws["!comments"];
      delete ws["!legacy"];
    }
    if (wsrels["!id"].rId1) zip_add_file(zip, get_rels_path(f), write_rels(wsrels));
  }
  if (opts.Strings != null && opts.Strings.length > 0) {
    f = "xl/sharedStrings." + wbext;
    zip_add_file(zip, f, write_sst(opts.Strings, f, opts));
    ct.strs.push(f);
    add_rels(opts.wbrels, -1, "sharedStrings." + wbext, RELS.SST);
  }
  f = "xl/workbook." + wbext;
  zip_add_file(zip, f, write_wb(wb, f, opts));
  ct.workbooks.push(f);
  add_rels(opts.rels, 1, f, RELS.WB);
  f = "xl/theme/theme1.xml";
  zip_add_file(zip, f, write_theme(wb.Themes, opts));
  ct.themes.push(f);
  add_rels(opts.wbrels, -1, "theme/theme1.xml", RELS.THEME);
  f = "xl/styles." + wbext;
  zip_add_file(zip, f, write_sty(wb, f, opts));
  ct.styles.push(f);
  add_rels(opts.wbrels, -1, "styles." + wbext, RELS.STY);
  if (wb.vbaraw && vbafmt) {
    f = "xl/vbaProject.bin";
    zip_add_file(zip, f, wb.vbaraw);
    ct.vba.push(f);
    add_rels(opts.wbrels, -1, "vbaProject.bin", RELS.VBA);
  }
  f = "xl/metadata." + wbext;
  zip_add_file(zip, f, write_xlmeta(f));
  ct.metadata.push(f);
  add_rels(opts.wbrels, -1, "metadata." + wbext, RELS.XLMETA);
  zip_add_file(zip, "[Content_Types].xml", write_ct(ct, opts));
  zip_add_file(zip, "_rels/.rels", write_rels(opts.rels));
  zip_add_file(zip, "xl/_rels/workbook." + wbext + ".rels", write_rels(opts.wbrels));
  delete opts.revssf;
  delete opts.ssf;
  return zip;
}
function write_zip_xlsx(wb, opts) {
  _shapeid = 1024;
  if (wb && !wb.SSF) {
    wb.SSF = dup(table_fmt);
  }
  if (wb && wb.SSF) {
    make_ssf();
    SSF_load_table(wb.SSF);
    opts.revssf = evert_num(wb.SSF);
    opts.revssf[wb.SSF[65535]] = 0;
    opts.ssf = wb.SSF;
  }
  opts.rels = {};
  opts.wbrels = {};
  opts.Strings = /*::((*/
  [];
  opts.Strings.Count = 0;
  opts.Strings.Unique = 0;
  if (browser_has_Map) opts.revStrings = /* @__PURE__ */ new Map();
  else {
    opts.revStrings = {};
    opts.revStrings.foo = [];
    delete opts.revStrings.foo;
  }
  var wbext = "xml";
  var vbafmt = VBAFMTS.indexOf(opts.bookType) > -1;
  var ct = new_ct();
  fix_write_opts(opts = opts || {});
  var zip = zip_new();
  var f = "", rId = 0;
  opts.cellXfs = [];
  get_cell_style(opts.cellXfs, {}, { revssf: { "General": 0 } });
  if (!wb.Props) wb.Props = {};
  f = "docProps/core.xml";
  zip_add_file(zip, f, write_core_props(wb.Props, opts));
  ct.coreprops.push(f);
  add_rels(opts.rels, 2, f, RELS.CORE_PROPS);
  f = "docProps/app.xml";
  if (wb.Props && wb.Props.SheetNames) {
  } else if (!wb.Workbook || !wb.Workbook.Sheets) wb.Props.SheetNames = wb.SheetNames;
  else {
    var _sn = [];
    for (var _i = 0; _i < wb.SheetNames.length; ++_i)
      if ((wb.Workbook.Sheets[_i] || {}).Hidden != 2) _sn.push(wb.SheetNames[_i]);
    wb.Props.SheetNames = _sn;
  }
  wb.Props.Worksheets = wb.Props.SheetNames.length;
  zip_add_file(zip, f, write_ext_props(wb.Props, opts));
  ct.extprops.push(f);
  add_rels(opts.rels, 3, f, RELS.EXT_PROPS);
  if (wb.Custprops !== wb.Props && keys(wb.Custprops || {}).length > 0) {
    f = "docProps/custom.xml";
    zip_add_file(zip, f, write_cust_props(wb.Custprops, opts));
    ct.custprops.push(f);
    add_rels(opts.rels, 4, f, RELS.CUST_PROPS);
  }
  var people = ["SheetJ5"];
  opts.tcid = 0;
  for (rId = 1; rId <= wb.SheetNames.length; ++rId) {
    var wsrels = { "!id": {} };
    var ws = wb.Sheets[wb.SheetNames[rId - 1]];
    var _type = (ws || {})["!type"] || "sheet";
    switch (_type) {
      case "chart":
      /* falls through */
      default:
        f = "xl/worksheets/sheet" + rId + "." + wbext;
        zip_add_file(zip, f, write_ws_xml(rId - 1, opts, wb, wsrels));
        ct.sheets.push(f);
        add_rels(opts.wbrels, -1, "worksheets/sheet" + rId + "." + wbext, RELS.WS[0]);
    }
    if (ws) {
      var comments = ws["!comments"];
      var need_vml = false;
      var cf = "";
      if (comments && comments.length > 0) {
        var needtc = false;
        comments.forEach(function(carr) {
          carr[1].forEach(function(c) {
            if (c.T == true) needtc = true;
          });
        });
        if (needtc) {
          cf = "xl/threadedComments/threadedComment" + rId + "." + wbext;
          zip_add_file(zip, cf, write_tcmnt_xml(comments, people, opts));
          ct.threadedcomments.push(cf);
          add_rels(wsrels, -1, "../threadedComments/threadedComment" + rId + "." + wbext, RELS.TCMNT);
        }
        cf = "xl/comments" + rId + "." + wbext;
        zip_add_file(zip, cf, write_comments_xml(comments, opts));
        ct.comments.push(cf);
        add_rels(wsrels, -1, "../comments" + rId + "." + wbext, RELS.CMNT);
        need_vml = true;
      }
      if (ws["!legacy"]) {
        if (need_vml) zip_add_file(zip, "xl/drawings/vmlDrawing" + rId + ".vml", write_comments_vml(rId, ws["!comments"]));
      }
      delete ws["!comments"];
      delete ws["!legacy"];
    }
    if (wsrels["!id"].rId1) zip_add_file(zip, get_rels_path(f), write_rels(wsrels));
  }
  if (opts.Strings != null && opts.Strings.length > 0) {
    f = "xl/sharedStrings." + wbext;
    zip_add_file(zip, f, write_sst_xml(opts.Strings, opts));
    ct.strs.push(f);
    add_rels(opts.wbrels, -1, "sharedStrings." + wbext, RELS.SST);
  }
  f = "xl/workbook." + wbext;
  zip_add_file(zip, f, write_wb_xml(wb, opts));
  ct.workbooks.push(f);
  add_rels(opts.rels, 1, f, RELS.WB);
  f = "xl/theme/theme1.xml";
  zip_add_file(zip, f, write_theme(wb.Themes, opts));
  ct.themes.push(f);
  add_rels(opts.wbrels, -1, "theme/theme1.xml", RELS.THEME);
  f = "xl/styles." + wbext;
  zip_add_file(zip, f, write_sty_xml(wb, opts));
  ct.styles.push(f);
  add_rels(opts.wbrels, -1, "styles." + wbext, RELS.STY);
  if (wb.vbaraw && vbafmt) {
    f = "xl/vbaProject.bin";
    zip_add_file(zip, f, wb.vbaraw);
    ct.vba.push(f);
    add_rels(opts.wbrels, -1, "vbaProject.bin", RELS.VBA);
  }
  f = "xl/metadata." + wbext;
  zip_add_file(zip, f, write_xlmeta_xml());
  ct.metadata.push(f);
  add_rels(opts.wbrels, -1, "metadata." + wbext, RELS.XLMETA);
  if (people.length > 1) {
    f = "xl/persons/person.xml";
    zip_add_file(zip, f, write_people_xml(people, opts));
    ct.people.push(f);
    add_rels(opts.wbrels, -1, "persons/person.xml", RELS.PEOPLE);
  }
  zip_add_file(zip, "[Content_Types].xml", write_ct(ct, opts));
  zip_add_file(zip, "_rels/.rels", write_rels(opts.rels));
  zip_add_file(zip, "xl/_rels/workbook." + wbext + ".rels", write_rels(opts.wbrels));
  delete opts.revssf;
  delete opts.ssf;
  return zip;
}
function firstbyte(f, o) {
  var x = "";
  switch ((o || {}).type || "base64") {
    case "buffer":
      return [f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]];
    case "base64":
      x = Base64_decode(f.slice(0, 12));
      break;
    case "binary":
      x = f;
      break;
    case "array":
      return [f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]];
    default:
      throw new Error("Unrecognized type " + (o && o.type || "undefined"));
  }
  return [x.charCodeAt(0), x.charCodeAt(1), x.charCodeAt(2), x.charCodeAt(3), x.charCodeAt(4), x.charCodeAt(5), x.charCodeAt(6), x.charCodeAt(7)];
}
function write_cfb_ctr(cfb, o) {
  switch (o.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      o.type = "";
      break;
    case "file":
      return write_dl(o.file, CFB.write(cfb, { type: has_buf ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + o.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + o.type);
  }
  return CFB.write(cfb, o);
}
function write_zip_type(wb, opts) {
  var o = dup(opts || {});
  var z = write_zip(wb, o);
  return write_zip_denouement(z, o);
}
function write_zip_denouement(z, o) {
  var oopts = {};
  var ftype = has_buf ? "nodebuffer" : typeof Uint8Array !== "undefined" ? "array" : "string";
  if (o.compression) oopts.compression = "DEFLATE";
  if (o.password) oopts.type = ftype;
  else switch (o.type) {
    case "base64":
      oopts.type = "base64";
      break;
    case "binary":
      oopts.type = "string";
      break;
    case "string":
      throw new Error("'string' output type invalid for '" + o.bookType + "' files");
    case "buffer":
    case "file":
      oopts.type = ftype;
      break;
    default:
      throw new Error("Unrecognized type " + o.type);
  }
  var out = z.FullPaths ? CFB.write(z, { fileType: "zip", type: (
    /*::(*/
    { "nodebuffer": "buffer", "string": "binary" }[oopts.type] || oopts.type
  ), compression: !!o.compression }) : z.generate(oopts);
  if (typeof Deno !== "undefined") {
    if (typeof out == "string") {
      if (o.type == "binary" || o.type == "base64") return out;
      out = new Uint8Array(s2ab(out));
    }
  }
  if (o.password && typeof encrypt_agile !== "undefined") return write_cfb_ctr(encrypt_agile(out, o.password), o);
  if (o.type === "file") return write_dl(o.file, out);
  return o.type == "string" ? utf8read(
    /*::(*/
    out
    /*:: :any)*/
  ) : out;
}
function write_cfb_type(wb, opts) {
  var o = opts || {};
  var cfb = write_xlscfb(wb, o);
  return write_cfb_ctr(cfb, o);
}
function write_string_type(out, opts, bom) {
  if (!bom) bom = "";
  var o = bom + out;
  switch (opts.type) {
    case "base64":
      return Base64_encode(utf8write(o));
    case "binary":
      return utf8write(o);
    case "string":
      return out;
    case "file":
      return write_dl(opts.file, o, "utf8");
    case "buffer": {
      if (has_buf) return Buffer_from(o, "utf8");
      else if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(o);
      else return write_string_type(o, { type: "binary" }).split("").map(function(c) {
        return c.charCodeAt(0);
      });
    }
  }
  throw new Error("Unrecognized type " + opts.type);
}
function write_stxt_type(out, opts) {
  switch (opts.type) {
    case "base64":
      return Base64_encode(out);
    case "binary":
      return out;
    case "string":
      return out;
    /* override in sheet_to_txt */
    case "file":
      return write_dl(opts.file, out, "binary");
    case "buffer": {
      if (has_buf) return Buffer_from(out, "binary");
      else return out.split("").map(function(c) {
        return c.charCodeAt(0);
      });
    }
  }
  throw new Error("Unrecognized type " + opts.type);
}
function write_binary_type(out, opts) {
  switch (opts.type) {
    case "string":
    case "base64":
    case "binary":
      var bstr = "";
      for (var i = 0; i < out.length; ++i) bstr += String.fromCharCode(out[i]);
      return opts.type == "base64" ? Base64_encode(bstr) : opts.type == "string" ? utf8read(bstr) : bstr;
    case "file":
      return write_dl(opts.file, out);
    case "buffer":
      return out;
    default:
      throw new Error("Unrecognized type " + opts.type);
  }
}
function writeSync(wb, opts) {
  reset_cp();
  check_wb(wb);
  var o = dup(opts || {});
  if (o.cellStyles) {
    o.cellNF = true;
    o.sheetStubs = true;
  }
  if (o.type == "array") {
    o.type = "binary";
    var out = writeSync(wb, o);
    o.type = "array";
    return s2ab(out);
  }
  var idx = 0;
  if (o.sheet) {
    if (typeof o.sheet == "number") idx = o.sheet;
    else idx = wb.SheetNames.indexOf(o.sheet);
    if (!wb.SheetNames[idx]) throw new Error("Sheet not found: " + o.sheet + " : " + typeof o.sheet);
  }
  switch (o.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return write_string_type(write_xlml(wb, o), o);
    case "slk":
    case "sylk":
      return write_string_type(SYLK.from_sheet(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "htm":
    case "html":
      return write_string_type(sheet_to_html(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "txt":
      return write_stxt_type(sheet_to_txt(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "csv":
      return write_string_type(sheet_to_csv(wb.Sheets[wb.SheetNames[idx]], o), o, "\uFEFF");
    case "dif":
      return write_string_type(DIF.from_sheet(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "dbf":
      return write_binary_type(DBF.from_sheet(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "prn":
      return write_string_type(PRN.from_sheet(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "rtf":
      return write_string_type(RTF.from_sheet(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "eth":
      return write_string_type(ETH.from_sheet(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "fods":
      return write_string_type(write_ods(wb, o), o);
    case "wk1":
      return write_binary_type(WK_.sheet_to_wk1(wb.Sheets[wb.SheetNames[idx]], o), o);
    case "wk3":
      return write_binary_type(WK_.book_to_wk3(wb, o), o);
    case "biff2":
      if (!o.biff) o.biff = 2;
    /* falls through */
    case "biff3":
      if (!o.biff) o.biff = 3;
    /* falls through */
    case "biff4":
      if (!o.biff) o.biff = 4;
      return write_binary_type(write_biff_buf(wb, o), o);
    case "biff5":
      if (!o.biff) o.biff = 5;
    /* falls through */
    case "biff8":
    case "xla":
    case "xls":
      if (!o.biff) o.biff = 8;
      return write_cfb_type(wb, o);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return write_zip_type(wb, o);
    default:
      throw new Error("Unrecognized bookType |" + o.bookType + "|");
  }
}
function resolve_book_type(o) {
  if (o.bookType) return;
  var _BT = {
    "xls": "biff8",
    "htm": "html",
    "slk": "sylk",
    "socialcalc": "eth",
    "Sh33tJS": "WTF"
  };
  var ext = o.file.slice(o.file.lastIndexOf(".")).toLowerCase();
  if (ext.match(/^\.[a-z]+$/)) o.bookType = ext.slice(1);
  o.bookType = _BT[o.bookType] || o.bookType;
}
function writeFileSync(wb, filename, opts) {
  var o = opts || {};
  o.type = "file";
  o.file = filename;
  resolve_book_type(o);
  return writeSync(wb, o);
}
function make_json_row(sheet, r, R, cols, header, hdr, dense, o) {
  var rr = encode_row(R);
  var defval = o.defval, raw = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw");
  var isempty = true;
  var row = header === 1 ? [] : {};
  if (header !== 1) {
    if (Object.defineProperty) try {
      Object.defineProperty(row, "__rowNum__", { value: R, enumerable: false });
    } catch (e) {
      row.__rowNum__ = R;
    }
    else row.__rowNum__ = R;
  }
  if (!dense || sheet[R]) for (var C = r.s.c; C <= r.e.c; ++C) {
    var val = dense ? sheet[R][C] : sheet[cols[C] + rr];
    if (val === void 0 || val.t === void 0) {
      if (defval === void 0) continue;
      if (hdr[C] != null) {
        row[hdr[C]] = defval;
      }
      continue;
    }
    var v = val.v;
    switch (val.t) {
      case "z":
        if (v == null) break;
        continue;
      case "e":
        v = v == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + val.t);
    }
    if (hdr[C] != null) {
      if (v == null) {
        if (val.t == "e" && v === null) row[hdr[C]] = null;
        else if (defval !== void 0) row[hdr[C]] = defval;
        else if (raw && v === null) row[hdr[C]] = null;
        else continue;
      } else {
        row[hdr[C]] = raw && (val.t !== "n" || val.t === "n" && o.rawNumbers !== false) ? v : format_cell(val, v, o);
      }
      if (v != null) isempty = false;
    }
  }
  return { row, isempty };
}
function sheet_to_json(sheet, opts) {
  if (sheet == null || sheet["!ref"] == null) return [];
  var val = { t: "n", v: 0 }, header = 0, offset = 1, hdr = [], v = 0, vv = "";
  var r = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  var o = opts || {};
  var range = o.range != null ? o.range : sheet["!ref"];
  if (o.header === 1) header = 1;
  else if (o.header === "A") header = 2;
  else if (Array.isArray(o.header)) header = 3;
  else if (o.header == null) header = 0;
  switch (typeof range) {
    case "string":
      r = safe_decode_range(range);
      break;
    case "number":
      r = safe_decode_range(sheet["!ref"]);
      r.s.r = range;
      break;
    default:
      r = range;
  }
  if (header > 0) offset = 0;
  var rr = encode_row(r.s.r);
  var cols = [];
  var out = [];
  var outi = 0, counter = 0;
  var dense = Array.isArray(sheet);
  var R = r.s.r, C = 0;
  var header_cnt = {};
  if (dense && !sheet[R]) sheet[R] = [];
  var colinfo = o.skipHidden && sheet["!cols"] || [];
  var rowinfo = o.skipHidden && sheet["!rows"] || [];
  for (C = r.s.c; C <= r.e.c; ++C) {
    if ((colinfo[C] || {}).hidden) continue;
    cols[C] = encode_col(C);
    val = dense ? sheet[R][C] : sheet[cols[C] + rr];
    switch (header) {
      case 1:
        hdr[C] = C - r.s.c;
        break;
      case 2:
        hdr[C] = cols[C];
        break;
      case 3:
        hdr[C] = o.header[C - r.s.c];
        break;
      default:
        if (val == null) val = { w: "__EMPTY", t: "s" };
        vv = v = format_cell(val, null, o);
        counter = header_cnt[v] || 0;
        if (!counter) header_cnt[v] = 1;
        else {
          do {
            vv = v + "_" + counter++;
          } while (header_cnt[vv]);
          header_cnt[v] = counter;
          header_cnt[vv] = 1;
        }
        hdr[C] = vv;
    }
  }
  for (R = r.s.r + offset; R <= r.e.r; ++R) {
    if ((rowinfo[R] || {}).hidden) continue;
    var row = make_json_row(sheet, r, R, cols, header, hdr, dense, o);
    if (row.isempty === false || (header === 1 ? o.blankrows !== false : !!o.blankrows)) out[outi++] = row.row;
  }
  out.length = outi;
  return out;
}
var qreg = /"/g;
function make_csv_row(sheet, r, R, cols, fs, rs, FS, o) {
  var isempty = true;
  var row = [], txt = "", rr = encode_row(R);
  for (var C = r.s.c; C <= r.e.c; ++C) {
    if (!cols[C]) continue;
    var val = o.dense ? (sheet[R] || [])[C] : sheet[cols[C] + rr];
    if (val == null) txt = "";
    else if (val.v != null) {
      isempty = false;
      txt = "" + (o.rawNumbers && val.t == "n" ? val.v : format_cell(val, null, o));
      for (var i = 0, cc = 0; i !== txt.length; ++i) if ((cc = txt.charCodeAt(i)) === fs || cc === rs || cc === 34 || o.forceQuotes) {
        txt = '"' + txt.replace(qreg, '""') + '"';
        break;
      }
      if (txt == "ID") txt = '"ID"';
    } else if (val.f != null && !val.F) {
      isempty = false;
      txt = "=" + val.f;
      if (txt.indexOf(",") >= 0) txt = '"' + txt.replace(qreg, '""') + '"';
    } else txt = "";
    row.push(txt);
  }
  if (o.blankrows === false && isempty) return null;
  return row.join(FS);
}
function sheet_to_csv(sheet, opts) {
  var out = [];
  var o = opts == null ? {} : opts;
  if (sheet == null || sheet["!ref"] == null) return "";
  var r = safe_decode_range(sheet["!ref"]);
  var FS = o.FS !== void 0 ? o.FS : ",", fs = FS.charCodeAt(0);
  var RS = o.RS !== void 0 ? o.RS : "\n", rs = RS.charCodeAt(0);
  var endregex = new RegExp((FS == "|" ? "\\|" : FS) + "+$");
  var row = "", cols = [];
  o.dense = Array.isArray(sheet);
  var colinfo = o.skipHidden && sheet["!cols"] || [];
  var rowinfo = o.skipHidden && sheet["!rows"] || [];
  for (var C = r.s.c; C <= r.e.c; ++C) if (!(colinfo[C] || {}).hidden) cols[C] = encode_col(C);
  var w = 0;
  for (var R = r.s.r; R <= r.e.r; ++R) {
    if ((rowinfo[R] || {}).hidden) continue;
    row = make_csv_row(sheet, r, R, cols, fs, rs, FS, o);
    if (row == null) {
      continue;
    }
    if (o.strip) row = row.replace(endregex, "");
    if (row || o.blankrows !== false) out.push((w++ ? RS : "") + row);
  }
  delete o.dense;
  return out.join("");
}
function sheet_to_txt(sheet, opts) {
  if (!opts) opts = {};
  opts.FS = "	";
  opts.RS = "\n";
  var s = sheet_to_csv(sheet, opts);
  if (typeof $cptable == "undefined" || opts.type == "string") return s;
  var o = $cptable.utils.encode(1200, s, "str");
  return String.fromCharCode(255) + String.fromCharCode(254) + o;
}
function sheet_to_formulae(sheet) {
  var y = "", x, val = "";
  if (sheet == null || sheet["!ref"] == null) return [];
  var r = safe_decode_range(sheet["!ref"]), rr = "", cols = [], C;
  var cmds = [];
  var dense = Array.isArray(sheet);
  for (C = r.s.c; C <= r.e.c; ++C) cols[C] = encode_col(C);
  for (var R = r.s.r; R <= r.e.r; ++R) {
    rr = encode_row(R);
    for (C = r.s.c; C <= r.e.c; ++C) {
      y = cols[C] + rr;
      x = dense ? (sheet[R] || [])[C] : sheet[y];
      val = "";
      if (x === void 0) continue;
      else if (x.F != null) {
        y = x.F;
        if (!x.f) continue;
        val = x.f;
        if (y.indexOf(":") == -1) y = y + ":" + y;
      }
      if (x.f != null) val = x.f;
      else if (x.t == "z") continue;
      else if (x.t == "n" && x.v != null) val = "" + x.v;
      else if (x.t == "b") val = x.v ? "TRUE" : "FALSE";
      else if (x.w !== void 0) val = "'" + x.w;
      else if (x.v === void 0) continue;
      else if (x.t == "s") val = "'" + x.v;
      else val = "" + x.v;
      cmds[cmds.length] = y + "=" + val;
    }
  }
  return cmds;
}
function sheet_add_json(_ws, js, opts) {
  var o = opts || {};
  var offset = +!o.skipHeader;
  var ws = _ws || {};
  var _R = 0, _C = 0;
  if (ws && o.origin != null) {
    if (typeof o.origin == "number") _R = o.origin;
    else {
      var _origin = typeof o.origin == "string" ? decode_cell(o.origin) : o.origin;
      _R = _origin.r;
      _C = _origin.c;
    }
  }
  var cell;
  var range = { s: { c: 0, r: 0 }, e: { c: _C, r: _R + js.length - 1 + offset } };
  if (ws["!ref"]) {
    var _range = safe_decode_range(ws["!ref"]);
    range.e.c = Math.max(range.e.c, _range.e.c);
    range.e.r = Math.max(range.e.r, _range.e.r);
    if (_R == -1) {
      _R = _range.e.r + 1;
      range.e.r = _R + js.length - 1 + offset;
    }
  } else {
    if (_R == -1) {
      _R = 0;
      range.e.r = js.length - 1 + offset;
    }
  }
  var hdr = o.header || [], C = 0;
  js.forEach(function(JS, R) {
    keys(JS).forEach(function(k) {
      if ((C = hdr.indexOf(k)) == -1) hdr[C = hdr.length] = k;
      var v = JS[k];
      var t = "z";
      var z = "";
      var ref = encode_cell({ c: _C + C, r: _R + R + offset });
      cell = ws_get_cell_stub(ws, ref);
      if (v && typeof v === "object" && !(v instanceof Date)) {
        ws[ref] = v;
      } else {
        if (typeof v == "number") t = "n";
        else if (typeof v == "boolean") t = "b";
        else if (typeof v == "string") t = "s";
        else if (v instanceof Date) {
          t = "d";
          if (!o.cellDates) {
            t = "n";
            v = datenum(v);
          }
          z = o.dateNF || table_fmt[14];
        } else if (v === null && o.nullError) {
          t = "e";
          v = 0;
        }
        if (!cell) ws[ref] = cell = { t, v };
        else {
          cell.t = t;
          cell.v = v;
          delete cell.w;
          delete cell.R;
          if (z) cell.z = z;
        }
        if (z) cell.z = z;
      }
    });
  });
  range.e.c = Math.max(range.e.c, _C + hdr.length - 1);
  var __R = encode_row(_R);
  if (offset) for (C = 0; C < hdr.length; ++C) ws[encode_col(C + _C) + __R] = { t: "s", v: hdr[C] };
  ws["!ref"] = encode_range(range);
  return ws;
}
function json_to_sheet(js, opts) {
  return sheet_add_json(null, js, opts);
}
function ws_get_cell_stub(ws, R, C) {
  if (typeof R == "string") {
    if (Array.isArray(ws)) {
      var RC = decode_cell(R);
      if (!ws[RC.r]) ws[RC.r] = [];
      return ws[RC.r][RC.c] || (ws[RC.r][RC.c] = { t: "z" });
    }
    return ws[R] || (ws[R] = { t: "z" });
  }
  if (typeof R != "number") return ws_get_cell_stub(ws, encode_cell(R));
  return ws_get_cell_stub(ws, encode_cell({ r: R, c: C || 0 }));
}
function wb_sheet_idx(wb, sh) {
  if (typeof sh == "number") {
    if (sh >= 0 && wb.SheetNames.length > sh) return sh;
    throw new Error("Cannot find sheet # " + sh);
  } else if (typeof sh == "string") {
    var idx = wb.SheetNames.indexOf(sh);
    if (idx > -1) return idx;
    throw new Error("Cannot find sheet name |" + sh + "|");
  } else throw new Error("Cannot find sheet |" + sh + "|");
}
function book_new() {
  return { SheetNames: [], Sheets: {} };
}
function book_append_sheet(wb, ws, name, roll) {
  var i = 1;
  if (!name) {
    for (; i <= 65535; ++i, name = void 0) if (wb.SheetNames.indexOf(name = "Sheet" + i) == -1) break;
  }
  if (!name || wb.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (roll && wb.SheetNames.indexOf(name) >= 0) {
    var m = name.match(/(^.*?)(\d+)$/);
    i = m && +m[2] || 0;
    var root = m && m[1] || name;
    for (++i; i <= 65535; ++i) if (wb.SheetNames.indexOf(name = root + i) == -1) break;
  }
  check_ws_name(name);
  if (wb.SheetNames.indexOf(name) >= 0) throw new Error("Worksheet with name |" + name + "| already exists!");
  wb.SheetNames.push(name);
  wb.Sheets[name] = ws;
  return name;
}
function book_set_sheet_visibility(wb, sh, vis) {
  if (!wb.Workbook) wb.Workbook = {};
  if (!wb.Workbook.Sheets) wb.Workbook.Sheets = [];
  var idx = wb_sheet_idx(wb, sh);
  if (!wb.Workbook.Sheets[idx]) wb.Workbook.Sheets[idx] = {};
  switch (vis) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + vis);
  }
  wb.Workbook.Sheets[idx].Hidden = vis;
}
function cell_set_number_format(cell, fmt) {
  cell.z = fmt;
  return cell;
}
function cell_set_hyperlink(cell, target, tooltip) {
  if (!target) {
    delete cell.l;
  } else {
    cell.l = { Target: target };
    if (tooltip) cell.l.Tooltip = tooltip;
  }
  return cell;
}
function cell_set_internal_link(cell, range, tooltip) {
  return cell_set_hyperlink(cell, "#" + range, tooltip);
}
function cell_add_comment(cell, text, author) {
  if (!cell.c) cell.c = [];
  cell.c.push({ t: text, a: author || "SheetJS" });
}
function sheet_set_array_formula(ws, range, formula, dynamic) {
  var rng = typeof range != "string" ? range : safe_decode_range(range);
  var rngstr = typeof range == "string" ? range : encode_range(range);
  for (var R = rng.s.r; R <= rng.e.r; ++R) for (var C = rng.s.c; C <= rng.e.c; ++C) {
    var cell = ws_get_cell_stub(ws, R, C);
    cell.t = "n";
    cell.F = rngstr;
    delete cell.v;
    if (R == rng.s.r && C == rng.s.c) {
      cell.f = formula;
      if (dynamic) cell.D = true;
    }
  }
  return ws;
}
var utils = {
  encode_col,
  encode_row,
  encode_cell,
  encode_range,
  decode_col,
  decode_row,
  split_cell,
  decode_cell,
  decode_range,
  format_cell,
  sheet_add_aoa,
  sheet_add_json,
  sheet_add_dom,
  aoa_to_sheet,
  json_to_sheet,
  table_to_sheet: parse_dom_table,
  table_to_book,
  sheet_to_csv,
  sheet_to_txt,
  sheet_to_json,
  sheet_to_html,
  sheet_to_formulae,
  sheet_to_row_object_array: sheet_to_json,
  sheet_get_cell: ws_get_cell_stub,
  book_new,
  book_append_sheet,
  book_set_sheet_visibility,
  cell_set_number_format,
  cell_set_hyperlink,
  cell_set_internal_link,
  cell_add_comment,
  sheet_set_array_formula,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
var version = XLSX.version;

// src/pages/admin/InterviewSchedule.jsx
var import_react3 = __toESM(require_react(), 1);

// src/config/api.js
var API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
var API_TIMEOUT = 3e4;
var softNavigate = (path) => {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
var isAuthEndpoint = (endpoint) => {
  const normalized = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return normalized.includes("/api/login") || normalized.includes("/api/register") || normalized.includes("/api/admin/login");
};
var getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};
var API_URL = API_BASE_URL;
var apiFetch = async (endpoint, options = {}) => {
  const controller = new AbortController();
  const shouldHandleGlobalRedirect = !options.skipGlobalErrorRedirect && !isAuthEndpoint(endpoint);
  const isLongRequest = endpoint.includes("/upload") || endpoint.includes("/export") || endpoint.includes("/predict");
  const timeoutDuration = isLongRequest ? 12e4 : API_TIMEOUT;
  if (options.signal) {
    options.signal.addEventListener("abort", () => controller.abort());
  }
  const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);
  try {
    const response = await fetch(getApiUrl(endpoint), {
      ...options,
      signal: controller.signal
    });
    if (shouldHandleGlobalRedirect && response.status === 503 && !endpoint.includes("/settings/public")) {
      try {
        const cloned = response.clone();
        const data2 = await cloned.json();
        if (data2.code === "MAINTENANCE") {
          localStorage.setItem("maintenance_message", data2.message || "");
          if (window.location.pathname !== "/maintenance") {
            if (!window.location.pathname.startsWith("/admin")) {
              sessionStorage.setItem("redirect_after_recovery", window.location.pathname + window.location.search);
              softNavigate("/maintenance");
              return new Promise(() => {
              });
            }
          }
        }
      } catch (e) {
      }
    }
    return response;
  } catch (error) {
    if (shouldHandleGlobalRedirect && (error.name === "TypeError" || error.name === "AbortError")) {
      if (!endpoint.includes("/settings/public") && window.location.pathname !== "/server-down" && window.location.pathname !== "/maintenance") {
        sessionStorage.setItem("redirect_after_recovery", window.location.pathname + window.location.search);
        softNavigate("/server-down");
        return new Promise(() => {
        });
      }
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

// src/pages/admin/InterviewSchedule.jsx
var InterviewSchedule = ({ student, testId, applicationId, onClose, onScheduled }) => {
  const [formData, setFormData] = (0, import_react3.useState)({
    scheduled_time: "",
    duration: 60
  });
  const [availableTests, setAvailableTests] = (0, import_react3.useState)([]);
  const [selectedTestId, setSelectedTestId] = (0, import_react3.useState)(testId ? String(testId) : "");
  const [loadingTests, setLoadingTests] = (0, import_react3.useState)(false);
  const [testError, setTestError] = (0, import_react3.useState)("");
  const [loading, setLoading] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    if (testId) {
      setSelectedTestId(String(testId));
    }
  }, [testId]);
  (0, import_react3.useEffect)(() => {
    if (testId) return;
    let cancelled = false;
    const loadTests = async () => {
      setLoadingTests(true);
      setTestError("");
      try {
        const response = await apiFetch("api/tests", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
          }
        });
        const data2 = await response.json();
        if (!cancelled && data2.success) {
          const tests = Array.isArray(data2.tests) ? data2.tests : [];
          setAvailableTests(tests);
          setSelectedTestId((prev) => prev || (tests.length > 0 ? String(tests[0].id) : ""));
        } else if (!cancelled) {
          setTestError(data2.message || "Failed to load tests");
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Load tests error:", error);
          setTestError("Failed to load tests");
        }
      } finally {
        if (!cancelled) {
          setLoadingTests(false);
        }
      }
    };
    loadTests();
    return () => {
      cancelled = true;
    };
  }, [testId]);
  const convertISTToUTC = (dateTimeString) => {
    if (!dateTimeString) return null;
    const [datePart, timePart] = dateTimeString.split("T");
    const [year, month, day] = datePart.split("-");
    const [hours, minutes] = timePart.split(":");
    const istDateString = `${year}-${month}-${day}T${hours}:${minutes}:00+05:30`;
    const date = new Date(istDateString);
    return date.toISOString();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("=== INTERVIEW SCHEDULE SUBMIT ===");
    console.log("Student:", student);
    console.log("Test ID:", testId || selectedTestId);
    console.log("Form Data (IST):", formData);
    const finalTestId = testId || selectedTestId;
    if (!finalTestId) {
      setTestError("Please select a test first.");
      setLoading(false);
      return;
    }
    try {
      const scheduledTimeUTC = convertISTToUTC(formData.scheduled_time);
      console.log("Scheduled Time (IST input):", formData.scheduled_time);
      console.log("Scheduled Time (UTC ISO):", scheduledTimeUTC);
      const requestBody = {
        student_id: student.id,
        test_id: finalTestId,
        application_id: applicationId || null,
        scheduled_time: scheduledTimeUTC,
        duration: formData.duration
      };
      console.log("Request Body:", requestBody);
      const response = await apiFetch("api/interviews/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
        body: JSON.stringify(requestBody)
      });
      const data2 = await response.json();
      if (data2.success) {
        alert("Interview scheduled successfully!");
        onScheduled();
        onClose();
      } else {
        alert(data2.message || "Failed to schedule interview");
      }
    } catch (error) {
      console.error("Schedule error:", error);
      alert("Error scheduling interview");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg p-6 max-w-md w-full mx-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold text-gray-800" }, "Schedule Interview"), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700" }, /* @__PURE__ */ React.createElement(X, { size: 24 }))), /* @__PURE__ */ React.createElement("div", { className: "mb-4 p-3 bg-gray-50 rounded" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600" }, "Student: ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, student.name)), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600" }, "Email: ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, student.email))), !testId && /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, "Interview Test"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: selectedTestId,
      onChange: (e) => setSelectedTestId(e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
      disabled: loadingTests,
      required: true
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Select a test"),
    availableTests.map((test) => /* @__PURE__ */ React.createElement("option", { key: test.id, value: test.id }, test.title, " ", test.status ? `(${test.status})` : ""))
  ), loadingTests && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500 mt-1" }, "Loading tests..."), testError && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-red-600 mt-1" }, testError)), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, "Interview Date & Time (IST)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "datetime-local",
      value: formData.scheduled_time,
      onChange: (e) => setFormData({ ...formData, scheduled_time: e.target.value }),
      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
      required: true
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500 mt-1" }, "Select time in Indian Standard Time (IST)")), /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, "Duration (minutes)"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: formData.duration,
      onChange: (e) => setFormData({ ...formData, duration: parseInt(e.target.value) }),
      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    },
    /* @__PURE__ */ React.createElement("option", { value: 30 }, "30 minutes"),
    /* @__PURE__ */ React.createElement("option", { value: 45 }, "45 minutes"),
    /* @__PURE__ */ React.createElement("option", { value: 60 }, "60 minutes"),
    /* @__PURE__ */ React.createElement("option", { value: 90 }, "90 minutes")
  )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: onClose,
      className: "flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center"
    },
    "Cancel"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      disabled: loading,
      className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-center"
    },
    loading ? "Scheduling..." : "Schedule"
  )))));
};
var InterviewSchedule_default = InterviewSchedule;

// src/components/AdminLayout.jsx
var import_react8 = __toESM(require_react(), 1);

// src/components/AdminHeader.jsx
var import_react7 = __toESM(require_react(), 1);

// src/components/Button.jsx
var import_react4 = __toESM(require_react(), 1);
var Button = ({
  children,
  variant = "primary",
  // 'primary' | 'secondary' | 'danger'
  type = "button",
  disabled = false,
  className = "",
  onClick
}) => {
  const baseStyles = "h-[50px] min-h-[44px] px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 touch-manipulation";
  const variants = {
    primary: "bg-theme-accent text-white hover:bg-theme-accent2 shadow-[0_4px_14px_rgba(var(--theme-accent),0.3)]",
    secondary: "bg-theme-panel text-theme-text hover:bg-theme-border border border-theme-border",
    danger: "bg-theme-err text-shnoor-danger border border-theme-border hover:brightness-95"
  };
  const disabledStyles = "bg-theme-panel text-theme-muted cursor-not-allowed shadow-none border border-theme-border";
  return /* @__PURE__ */ import_react4.default.createElement(
    "button",
    {
      type,
      disabled,
      onClick,
      className: `${baseStyles} ${disabled ? disabledStyles : variants[variant]} ${className}`
    },
    children
  );
};
var Button_default = Button;

// src/hooks/useSupportSocket.jsx
var import_react5 = __toESM(require_react(), 1);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data: data2 }, supportsBinary, callback) => {
  if (withNativeBlob && data2 instanceof Blob) {
    if (supportsBinary) {
      return callback(data2);
    } else {
      return encodeBlobAsBase64(data2, callback);
    }
  } else if (withNativeArrayBuffer && (data2 instanceof ArrayBuffer || isView(data2))) {
    if (supportsBinary) {
      return callback(data2);
    } else {
      return encodeBlobAsBase64(new Blob([data2]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data2 || ""));
};
var encodeBlobAsBase64 = (data2, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data2);
};
function toArray(data2) {
  if (data2 instanceof Uint8Array) {
    return data2;
  } else if (data2 instanceof ArrayBuffer) {
    return new Uint8Array(data2);
  } else {
    return new Uint8Array(data2.buffer, data2.byteOffset, data2.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data2, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data2);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data: data2 };
  }
};
var mapBinary = (data2, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data2 instanceof Blob) {
        return data2;
      } else {
        return new Blob([data2]);
      }
    case "arraybuffer":
    default:
      if (data2 instanceof ArrayBuffer) {
        return data2;
      } else {
        return data2.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i = 0; i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data2 = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data2 : TEXT_DECODER.decode(data2), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// node_modules/@socket.io/component-emitter/lib/esm/index.js
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// node_modules/engine.io-client/build/esm/globals.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
var defaultBinaryType = "arraybuffer";
function createCookieJar() {
}

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i = 0, l = pairs.length; i < l; i++) {
    let pair = pairs[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data2) {
    const packet = decodePacket(data2, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/transports/polling.js
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data2) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data2, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      } else {
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data2) => {
      this.doWrite(data2, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
function empty() {
}
var BaseXHR = class extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data2, fn) {
    const req = this.request({
      method: "POST",
      data: data2
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request2 = class _Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this._onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = _Request.requestsCount++;
      _Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete _Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data2 = this._xhr.responseText;
    if (data2 !== null) {
      this.emitReserved("data", data2);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Request2.requestsCount = 0;
Request2.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request2.requests) {
    if (Request2.requests.hasOwnProperty(i)) {
      Request2.requests[i].abort();
    }
  }
}
var hasXHR2 = (function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
})();
var XHR = class extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd }, this.opts);
    return new Request2(newRequest, this.uri(), opts);
  }
};
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = class extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data2) => {
        try {
          this.doWrite(packet, data2);
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var WS = class extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data2) {
    this.ws.send(data2);
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch((err) => {
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  if (str.length > 8e3) {
    throw "URI too long";
  }
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri = {}, i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data2 = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data2[$1] = $2;
    }
  });
  return data2;
}

// node_modules/engine.io-client/build/esm/socket.js
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}
var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t) => {
      const transportName = t.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new this._transportsByName[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data2) {
    this.emitReserved("handshake", data2);
    this.id = data2.sid;
    this.transport.query.sid = data2.sid;
    this._pingInterval = data2.pingInterval;
    this._pingTimeout = data2.pingTimeout;
    this._maxPayload = data2.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data2 = this.writeBuffer[i].data;
      if (data2) {
        payloadSize += byteLength(data2);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(type, data2, options, fn) {
    if ("function" === typeof data2) {
      fn = data2;
      data2 = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data: data2,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    _SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
};
SocketWithoutUpgrade.protocol = protocol;
var SocketWithUpgrade = class extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i = 0; i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data2) {
    this._upgrades = this._filterUpgrades(data2.upgrades);
    super.onHandshake(data2);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0; i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o = typeof uri === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t) => !!t);
    }
    super(uri, o);
  }
};

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm/url.js
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  isPacketValid: () => isPacketValid,
  protocol: () => protocol3
});

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data2, buffers) {
  if (!data2)
    return data2;
  if (isBinary(data2)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data2);
    return placeholder;
  } else if (Array.isArray(data2)) {
    const newData = new Array(data2.length);
    for (let i = 0; i < data2.length; i++) {
      newData[i] = _deconstructPacket(data2[i], buffers);
    }
    return newData;
  } else if (typeof data2 === "object" && !(data2 instanceof Date)) {
    const newData = {};
    for (const key in data2) {
      if (Object.prototype.hasOwnProperty.call(data2, key)) {
        newData[key] = _deconstructPacket(data2[key], buffers);
      }
    }
    return newData;
  }
  return data2;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data2, buffers) {
  if (!data2)
    return data2;
  if (data2 && data2._placeholder === true) {
    const isIndexValid = typeof data2.num === "number" && data2.num >= 0 && data2.num < buffers.length;
    if (isIndexValid) {
      return buffers[data2.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data2)) {
    for (let i = 0; i < data2.length; i++) {
      data2[i] = _reconstructPacket(data2[i], buffers);
    }
  } else if (typeof data2 === "object") {
    for (const key in data2) {
      if (Object.prototype.hasOwnProperty.call(data2, key)) {
        data2[key] = _reconstructPacket(data2[key], buffers);
      }
    }
  }
  return data2;
}

// node_modules/socket.io-parser/build/esm/index.js
var RESERVED_EVENTS = [
  "connect",
  // used on the client side
  "connect_error",
  // used on the client side
  "disconnect",
  // used on both sides
  "disconnecting",
  // used on the server side
  "newListener",
  // used by the Node.js EventEmitter
  "removeListener"
  // used by the Node.js EventEmitter
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class _Decoder extends Emitter {
  /**
   * Decoder constructor
   */
  constructor(opts) {
    super();
    this.opts = Object.assign({
      reviver: void 0,
      maxAttachments: 10
    }, typeof opts === "function" ? { reviver: opts } : opts);
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {
      }
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      const n = Number(buf);
      if (!isInteger(n) || n < 0) {
        throw new Error("Illegal attachments");
      } else if (n > this.opts.maxAttachments) {
        throw new Error("too many attachments");
      }
      p.attachments = n;
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c)
          break;
        if (i === str.length)
          break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length)
          break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (_Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.opts.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
function isNamespaceValid(nsp) {
  return typeof nsp === "string";
}
var isInteger = Number.isInteger || function(value2) {
  return typeof value2 === "number" && isFinite(value2) && Math.floor(value2) === value2;
};
function isAckIdValid(id) {
  return id === void 0 || isInteger(id);
}
function isObject(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
function isDataValid(type, payload) {
  switch (type) {
    case PacketType.CONNECT:
      return payload === void 0 || isObject(payload);
    case PacketType.DISCONNECT:
      return payload === void 0;
    case PacketType.EVENT:
      return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
    case PacketType.ACK:
      return Array.isArray(payload);
    case PacketType.CONNECT_ERROR:
      return typeof payload === "string" || isObject(payload);
    default:
      return false;
  }
}
function isPacketValid(packet) {
  return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    var _a, _b, _c;
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {
    } else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn.withError = true;
    this.acks[id] = fn;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn.withError = true;
      args.push(fn);
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data2) => {
        this._sendConnectPacket(data2);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data2) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data2) : data2
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((id) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      return;
    }
    delete this.acks[packet.id];
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this._drainQueue(true);
    this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    if (!v) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(
      on(socket, "ping", this.onping.bind(this)),
      on(socket, "data", this.ondata.bind(this)),
      on(socket, "error", this.onerror.bind(this)),
      on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data2) {
    try {
      this.decoder.add(data2);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(reason, description) {
    var _a;
    this.cleanup();
    (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// src/hooks/useSupportSocket.jsx
var SOCKET_URL = import.meta.env.VITE_SOCKET_URL || import.meta.env.VITE_API_URL || "http://localhost:5000";
var requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.log("[BrowserNotification] Not supported");
    return false;
  }
  if (Notification.permission === "granted") {
    return true;
  }
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
};
var showBrowserNotification = (title, body, options = {}) => {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return null;
  }
  try {
    const notification = new Notification(title, {
      body,
      icon: "/favicon.png",
      badge: "/favicon.png",
      tag: options.tag || "support-message",
      requireInteraction: false,
      silent: false,
      ...options
    });
    notification.onclick = () => {
      window.focus();
      if (options.onClick) options.onClick();
      notification.close();
    };
    setTimeout(() => notification.close(), 8e3);
    return notification;
  } catch (error) {
    console.error("[BrowserNotification] Error:", error);
    return null;
  }
};
var useSupportSocket = ({
  isAdmin = false,
  rollNumber,
  studentName,
  enabled = true,
  enableBrowserNotifications = true
} = {}) => {
  const socketRef = (0, import_react5.useRef)(null);
  const [isConnected, setIsConnected] = (0, import_react5.useState)(false);
  const [notifications, setNotifications] = (0, import_react5.useState)([]);
  const [unreadCount, setUnreadCount] = (0, import_react5.useState)(0);
  const [notificationPermission, setNotificationPermission] = (0, import_react5.useState)(
    typeof window !== "undefined" && "Notification" in window ? Notification.permission : "denied"
  );
  (0, import_react5.useEffect)(() => {
    if (enableBrowserNotifications && enabled) {
      requestNotificationPermission().then((granted) => {
        setNotificationPermission(granted ? "granted" : "denied");
      });
    }
  }, [enableBrowserNotifications, enabled]);
  const addNotification = (0, import_react5.useCallback)((notification, showBrowserNotif = true) => {
    const newNotification = {
      ...notification,
      id: notification.id || Date.now(),
      timestamp: notification.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      read: false
    };
    console.log("[SupportSocket] Adding notification:", newNotification);
    setNotifications((prev) => [newNotification, ...prev].slice(0, 50));
    setUnreadCount((prev) => prev + 1);
    if (showBrowserNotif && enableBrowserNotifications) {
      if (notification.type === "student-message") {
        showBrowserNotification(
          `New message from ${notification.studentName || "Student"}`,
          notification.messagePreview || "You have a new support message",
          { tag: `support-${notification.id}` }
        );
      } else if (notification.type === "admin-reply") {
        showBrowserNotification(
          "New reply from Support",
          notification.messagePreview || "You have a new reply from admin",
          { tag: `support-${notification.id}` }
        );
      }
    }
  }, [enableBrowserNotifications]);
  const clearNotifications = (0, import_react5.useCallback)(() => {
    setNotifications([]);
    setUnreadCount(0);
  }, []);
  const markAllRead = (0, import_react5.useCallback)(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
  }, []);
  const removeNotification = (0, import_react5.useCallback)((notificationId) => {
    setNotifications((prev) => {
      const notification = prev.find((n) => n.id === notificationId);
      if (notification && !notification.read) {
        setUnreadCount((count) => Math.max(0, count - 1));
      }
      return prev.filter((n) => n.id !== notificationId);
    });
  }, []);
  (0, import_react5.useEffect)(() => {
    if (!enabled) {
      return;
    }
    const handleAllRead = () => {
      console.log("[SupportSocket] All messages marked as read, clearing notifications");
      clearNotifications();
    };
    window.addEventListener("admin-messages-all-read", handleAllRead);
    let socket;
    let connectionAttempts = 0;
    const MAX_ATTEMPTS = 3;
    try {
      socket = lookup2(SOCKET_URL, {
        transports: ["polling"],
        reconnection: true,
        reconnectionAttempts: MAX_ATTEMPTS,
        reconnectionDelay: 2e3,
        timeout: 1e4,
        autoConnect: true
      });
      socketRef.current = socket;
      socket.on("connect", () => {
        console.log("[SupportSocket] Connected:", socket.id);
        setIsConnected(true);
        connectionAttempts = 0;
        if (isAdmin) {
          socket.emit("admin:join-support");
          console.log("[SupportSocket] Admin joining support room");
        } else if (rollNumber) {
          socket.emit("student:join-support", { rollNumber, studentName });
          console.log("[SupportSocket] Student joining support room:", `support-student-${rollNumber}`);
        }
      });
      socket.on("disconnect", (reason) => {
        console.log("[SupportSocket] Disconnected:", reason);
        setIsConnected(false);
      });
      socket.on("connect_error", (error) => {
        connectionAttempts++;
        console.warn(`[SupportSocket] Connection error (${connectionAttempts}/${MAX_ATTEMPTS}):`, error.message);
        setIsConnected(false);
        if (connectionAttempts >= MAX_ATTEMPTS) {
          console.warn("[SupportSocket] Max connection attempts reached, stopping reconnection");
          socket.disconnect();
        }
      });
      socket.on("reconnect_failed", () => {
        console.warn("[SupportSocket] Reconnection failed after max attempts");
        setIsConnected(false);
      });
    } catch (error) {
      console.error("[SupportSocket] Failed to initialize socket:", error);
    }
    if (isAdmin && socket) {
      socket.on("support:new-student-message", (data2) => {
        console.log("[SupportSocket] New student message received:", data2);
        addNotification({
          type: "student-message",
          id: data2.id,
          studentName: data2.studentName,
          studentId: data2.studentId,
          college: data2.college,
          messagePreview: data2.messagePreview,
          topic: data2.topic,
          createdAt: data2.createdAt,
          hasImage: data2.hasImage
        }, true);
      });
      socket.on("support:unread-count-update", (data2) => {
        console.log("[SupportSocket] Unread count update:", data2);
        setUnreadCount(data2.count);
        if (data2.count === 0) {
          clearNotifications();
        }
      });
      socket.on("admin:support-joined", (data2) => {
        console.log("[SupportSocket] Admin support room joined:", data2);
      });
    }
    if (!isAdmin && rollNumber) {
      socket.on("support:new-admin-reply", (data2) => {
        console.log("[SupportSocket] New admin reply received:", data2);
        addNotification({
          type: "admin-reply",
          id: data2.id,
          messagePreview: data2.messagePreview,
          createdAt: data2.createdAt,
          hasImage: data2.hasImage
        }, true);
      });
      socket.on("student:support-joined", (data2) => {
        console.log("[SupportSocket] Student support room joined:", data2);
      });
    }
    return () => {
      window.removeEventListener("admin-messages-all-read", handleAllRead);
      if (socket) {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("connect_error");
        socket.off("reconnect_failed");
        socket.off("support:new-student-message");
        socket.off("support:unread-count-update");
        socket.off("support:new-admin-reply");
        socket.off("student:support-joined");
        socket.off("admin:support-joined");
        socket.disconnect();
      }
    };
  }, [enabled, isAdmin, rollNumber, studentName, addNotification, clearNotifications]);
  const getSocket = (0, import_react5.useCallback)(() => socketRef.current, []);
  const requestPermission = (0, import_react5.useCallback)(async () => {
    const granted = await requestNotificationPermission();
    setNotificationPermission(granted ? "granted" : "denied");
    return granted;
  }, []);
  return {
    getSocket,
    isConnected,
    notifications,
    unreadCount,
    markAllRead,
    removeNotification,
    notificationPermission,
    requestPermission
  };
};

// src/assets/shnoor-logo.png
var shnoor_logo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAADrmSURBVHhe7X0HlFVVlvbV7um/Z6ano4OCCSVnBCOioCIYyDlHUUBBkGhABSRnClRQMTVqmzDSKqAI2KBIrqICGUQykqHqVdX3r5P3CffVQ+n5w8xZa9d795599tnhO/GedytKJBJbCgsLD+cl8gTluZQrPkN5oXv/FeTW614nI2lnQn9PiOtEgpPHf67yQ/RLy7vE9U0ul+eT61wnn8U8kUhsjfLy8k7gf9J/y5RI5J2MWAtnF3mJPEF5kuT3RIJRQn5Scu/Ra/bdpTjeX0JKTqgOl4/yJJDId/VzyZXxc+h8yqLk6hqqx9zLy8tFQsdSEI95Xt4RAoCEIBl8v9KwcFqxKecqRpVzFf25FJLj1lXUfTcvGd8voZ8p0wpaMn+699R98Z03ZC7L8MYAgAXRr8juCZRgwW/zJiMFEPc+lSlJKawVL4ICPLyuwH2fAvXHkZJHesjUGowiWY8qJ0nlF9WAgvUEbYyzycjzAaANsQOrewUHQQosKl8Ey/BSeZxf309oB1BUumWCDpL59D79VDJ18APOsQIndTZ6+E7WMqn8GLLsUnp59fnlODl8gvwYUDmW3cQXJk623fQ+AUCeAUBerqWQCY4MsgUAXymPFF8y/qDhTr4TEEXUIHFP1KN0VoEw5SVwVXlul+R1bVP8XI4DUpc0L9GZfxKZRGePT/J6ci3ZpNGFyqdABhCkB2DLhTAAXIcoBZQjDTA85WkZGRSfR/GR8jSYsi5Tpwy4Dpopp/ShQRRk1yf41D1jm1vO2Eb0d3WX33WrdwJN5arvtgzqG6GPvm8RuReoX/uIyg6R1QMoAOQeidh6mF0IBSUAZKWWU6QgyyCtvDDA3DOkWo/ICyhtKR8wUjnAbaWugW4P5cpx69XyTMtQTtLBCQFAyaA9hFNvLucL+MOS4fvPumeVo3wqz7bN+FjUYw3HRF9O+QoACTMEBJ1qOcWuSBlPeWmeUib0GaxLG0aMo47wDCU8pDzV1ehP+Dx7lEzfBj8odp3aDulURq7eym6vfMgPFq/zndjn2e/6XgKG2uXyeEOAMdoNiiTiPEquUbaShsx1SG5IHnUE5TH5rkyRF+IJ6WYH37LLAbrhN3VSx9q62PXQ8rYdkle17iApHgoQqnc8GV2MPJpPAJAwPQCtjAaJkbwnBNDvqhLbcDOm2Y7TslRdAWMs5Yk+pi7inACP4lOO4nqRyZyywf6uZu8un62TlifLuforu9zyhp/I0UOM42vJJ3jC9vuyffL8Q8oFAeBWKJRwFAg621TmLwUDivE8G9me4lRGgE/wEKAFnK54rOWZzjcAMTopOb4sVUbI8euh9YV0cfkt+7ltLjk8sTqFyQu+o1MQAHrMcx1PHCi+Sx6CaKOsaxhVKGR4QHEnsIaXyLN4xKfnBEdvAwDjaGtVofgCDtX7BcR2u64U5MjeJcSrA58kPyQrBEYafNoguf58rpJ/bgCwDHfzYoz3yHIAu+caKFsSyffqlA6y5dj52glunkV+PgV3KHA2j11fnA9cOW4+lePdc/ODOhFfUQDIe1QP/ql0igdAoHIlJHCvyHxlGAmuFzirXqq8pCL0OifSrSxMOtBeUGN08Picerz8GDkpUDjwjBydCdCEv30gmmUgAUCso7URqnUFeFxSfKobshxB+VwAMCJllUGp1JkKWXKIoxRAaV3B4cFxpNZdfrqO1gEhPFSXIgBpgUjp6OpEdLd1CgSekAcAW1lDnjHBgNCgucEjDvB4JB+tz3Kyn+9RUY4M1iWdmMR5ikTPJnR3nWh8ZgDgkpZJ9LN8adVHeHm++BQyXPJtMzaIfGuSK/nU9TkDwBVg8ZF8y9mUL5SneRwnWTy2Pr4sUi6Wh8iS341NufzT2OnozD9tHu1kuZJwdfFk6bpMvuefWJ0pny3H1cmr15FJeUSv7wIg4EQjVChlXbtjj2VoMuOIgS6PxRvWySI3n+ht1ePIsu1SgbT5TL4AgCVLkiuH3lM+9X0U0Mn1iyZqV1iOumfXY2SG9itMD5CfBACkG6EVCF6DbrEFShyhu1hXcWKkKu85gJCrj5sfw+M6wujl2mX4rXzLVqOzZbvbIxBZuu6gPg4FbLN4iZ90fdLfvhzxneoVRzFDgO9MZby57ypNnaAUdoOrFJVl3HzHAZYeuWEeXp8rwxv3RJ382uWlOrl5RUyg4gFg8vVqJ9ZHrj42r+tLTwdXH2KXy8vJyQsDIKhUjMKBCg0fVciR55aneYH8XAqAIsg3mnyGZvCOk/V3FVz33KAOrB8UIUvIoMtJChTDEyAKbIuPyjLErx19XBBpHq677SNvDqCFW0oF7nnkOjBQ3pVxDkE9F1IO1w6ICXwikY9EfiHyC2Aov1DcJ8GyyihZcTKT5Av7ZSAlWbpbwDcA8m1Tcuy6DACI3jrwRp7WSe4DJBKJIoaAlMgoZd23gk/yWPD/GQAIoF8YLwwv4CaLVMjtzUPu6ePIPX0UeWdOID8/we+r/PxC83wkFFSPQj2QEzTPR1xv/14IAIZkMAP3+Cep09VFU/xOYAgEcYEN8RFeiy/OeIP+pF29V1cg3xmTGeUXiJCyv6d/2okD6R9i56LR2PpeD+S82hCZs29F5vO1kf1CXWx+rSG2vX8fdn81DocyF+DMsT0aELx3SOZQRm6+HD5ogK2gWd19wDfErjj7KehsORIkro5ENwIAciAkLrhUES2I8hAlCF9IKSMvUI9F5HSSl0d49BKNGSycks/6dG7TWRxI/wBb3r0PmTOrYeOEEkgfVwybJhRH5uTLkTnlSmRNLckpc/IV2DSxODLGX4z0CZchc1ZNbJ3fBwc3fYr8fHGIMr+A2ZlLAiyGDGqXnoTKhy78O/GBtdxUtmkbjb9sf4YBQmMm9BBkDQuWr5w5QCwAaEEr+AYAPh8FUJLgegCJyyfnE0MkedRyThFrtSz8+9a9g8yX78bG8cV5YLOnX42ctLLISSuH7BmE0sohJ628JPM9e1ppDpSN4y9D5quNOZCYXD586OBLAJBAKgfTCSS1y7qvg+baRXzk2u3x0Xoc8FBe+T0AAGcnkAbOUsZU5gVPKWvl0XzbCTZfsvokUZ4Ar3C4GNeO78tA1ry2WD/uYmROuRw5M8shmxELvAxwtqScmeWRPdN86vvkkxHrHTaMvxTZb3XCyQOZojfILzDBdnWhxPzgAkMPD6494l6u6yfXdoufgknkqbpcP1K9vB7ABMWtxCjGhVpK0EooOFi+CnpImYBhRMlYngAvb/ky+PvWv4f1k8tj04SLkTOzrAg8JxZQ2bp5wCtYwWfXPPgzaODZPUrlRI8wrTL2b3yP11dQUOgH1AWARU5wiE3efe1L2nj8hmR8Lsiqj+hF63bmAEmeBdCAuEFwleRlZYV0DLICT2R6smzDlC72bJcNC6rbF3Wxlsi65V3LZmD9+MuQPa2kaPWyxQsyLV4Ev4IAhQaADP70EAjYvQr8Pr+eejXWj70Uu5eniZ6goBD5bKxX430SEnbJwFnjtMtjgun1pBaJsm5j8/YvApQiAIhS7ljl5mueJACwZLh1Ub5AvuShRqjJ3o6vJmH9mIuRM6O01+WbsV5286qrJ10+D7qkHBVodc2/C8pRNK0M1o+5BLuXzxQgyC8QINCTwsCqQPlK+saszW2beL4VBwUa2jhCPjKg8eTJpSW9HwQAL6CFE0S5QSX5dvCpUoEAxpBQVH6PKecaxpzN0p7vXsb6McVN8GnLp8H3SOTlcCqLnOllkDOtFHKmXY2c6aXlfQYIEnhOEhjTy2LD2Euxb/3bAgSJfA4C9qmdXkQglN/cawMQ4lenIaW0N5GEUgMACYqqTKNTodEBhhVAS5bDR5ShfLouPZy4LV+0NJaObP8G6ydcxWf4utXPZGO9IjOho8DgK4FpVyNjfHGkjyuBTZPLIHtWDeTMvgnZz9+AzLSqSJ9YEhvHFsem8ZciZyoDhAi+JtYzTCuNjVMq4MT+TcGewKNA0Ewjsn1g/Ob4kYLElU/lFpEfBICrCCVXgGn5lM9Fa4gnXp6+DoBI5AnHsslX3tmj2PRifb6e9yd7ZMJHe4O0cnztv3F8CWyaXRfbFzyOfWvfwbFd3+P0kR04e/IAzp7Yh1OHt+CnHcvx46pXsfWjh7Hp2Rs4ULImXSmAkCZ7grQKyJx4GbL+2g75BflyUqjmAzYIQjYb2x3fUNu9fNLogrKKCL6cH3gAUMK8gLkCPL5AgIkiVHFTPt4ZdEklNnn8wxgs7fp6EtLHXYzNs9h4Xi6wlJMtXbX6GWU5f/rsutj7/Ws4c/IQl8NbLmsAhWz7V+392enM8R+wf908bH6jOdLHl0D2lJJ6bpAzsxLfK9i39i3OK54ziOHAAoKyX20QOZNG239yWCQNw/gyEPzApM/LJ6sVRix5PYCnDFlqaSSSCiwFrcCRfAcAiiceBDTwcteNk2z9hcCJw1uxYXpl5Mwoxcd9QXI2r7p8PR8oy+cHGZMuw/a/P4azp37ixrP5o7KvoNA8KTh54gT2/LgPu3b/iAMHDsqtH5EKkcC+da8jY9b1yBh7MTbz3qAysqaWQsacO5B79jhfFSgA2KsDaTMFgFqmBYJq+dDxte1vec8BgfGzH3xGLHkAcIPmCqNCNZ/H4xphBzovX/GEAKBk0JZPnSjG/m2LRiJ9fDHkkNZvgm/mAtlsLyCtLNInlsDupVP1Qx4FbkYqvfnh52je92mUbPgA/qNuF/yuTmf85509cHOXIXhi2kv4dl265j178kdsnd8bGeOKYzObD8ysiA3jiuPH1a/zfAEAOR8ggfYBYHYS1fN67hsZMONb4Wvtp0BAvWuXNwQA90gYr4w4xyWjjFFMlyPk8rnKeKDQ39061X3hKNZFnzl1AOnP3Yis6VfJdTzp/t1VANu8mVgCOW9359u4ifwCY18e2zYuxP4DB3Fn96GIyt2LqEoLRNd3QFSrM6KbuyKq1QVRjTaIKjVFVLMVGnQbgoXLVmog7FoyDhvHlkD29LLYNOkKZL3eEgWF7DGz2BsI7g/ks+WrBAG9T33htmbSOxjfmZi4JO5L/wWCz8gDgB9MP/hxRIOu77vBd8s4KwtxP1SndGRCPK49kPkJNky4VK73yUYODbwCwowyyJhSCsd2r+YAoOMsm7TlJxKof99QRFc3QHRLN0S3dBd0q0N1uiOq3Q1R1ZaIqjRD98cm46fjJ7kTdy4Zi/WjL0H2tDJ8l/DEgRzR0ygAxJ4xCAPA5dNjvwwo9Y0tj5Z3GxAhCQgec3cSaE3aQoGXQbMRaT7VWG+UVmByDbIB4JLOl9fKkcyx278YjgzWqvkMX1Eg+GzGP/ly5MxryXuOvIRs/ZJYWpOehahyE0Q3dkRUu2s4+BYQegggVGiKCo16Y0P2Vi5n64LB2DBWPEXc+/1f+T09dIV6gRDJVqp9RvxkYmJ4eJki/KjJyhfADwKACycAsARYwRUoo5W4gaXO1iAgebpsoHtSfOy72GBJIMGWfvlnkf16Q/741gTfaf2E2KPd7X9/lAPH0kcCYF1GFqJKDRHd2EkElvUCOuA9HFK9QzdcwIBQvTUuqt0eqzdmsXBj06tNsWHE77H148HywIkLANMbMJs8mx3bja7G1xQc2kfnFHxJ6kBI7ByAV2rQ5yKNtnZViYtWWrG5n0xp6RQik+YzlU8e2YZNM6vzrp0F2NvooU/9ZkgAfPZ4EACsFRQU5KP9oLGIrr5LAMBq8TYALuDk9AbXtEGJ27tgz8GjOHMwHWtGFUfGy02RKGATQHnEzAk+t0W2Qt8Htg91g/Lyk/nRIcqjJ4QxJ4JEBdRRNKD+xE2h03Wu3zvY+VSWGt+Tk3jOf2jbcmycdJXV+jkAZODdtX/mxBLY8t59AgCOHrm5uSgsKMCZM2fQpv8ziErfjeja9ojq3GdavAZCYDhQIKjWBrfe/yR36Jb5vbFqcjWcOX1UHimL7/5du+3AE/9bPComPjDcepS9br0eANj7ZhUATBcTUEQGlo5DYaUlWauGmPyYGaooR5UXANif8THfdFETP2v2L7eArWFgWilkzKqB0yf28/0Dq/7cXA4ClV566yNcXq8rokrNAr1BEmKAKd8EaW8tAI6uxbeTq+PU0T1y1UFbvwMEx3bPlyQeNk+Y19Rl4kP9R+tl4JMxJ6+JIwWtVu3MzDWfRKfFr77HAYXIocp4zqGKSyextGfDfGxke/P8cS59rMsCbvYC1LyAXWdMKI4di58RiOe6qJNG4tEyI7YiYOnQ4SMYPH42omtaIrqugxPoQPA59UB0fUdcdGcPHDx6EJs/6IPj+7MDACB26a7Ytdf2nx1ECgg7Nlqm5z/BS/3ISAEgOAToiii6YojlW2UsJRWPCr4wjo5DjGhXKNbNIl/LkNcsbVz5IVaPZad8WNAFCASp3b8AsS3gSSVxKPMjiXr2tM4EP1d/N5tCC778Bn+8vjWimm1l4LslAYAcCio2wez3F+LU5o9w5IeNAgCxwVd2+sCnwfd8qfMDwZeyzH3z6dbBiAMgOAlU6JIIcwvGEVXWVVpvSigiAFCtxNo142gVdav7LK1Y/gWWjSqJrXwHkAJAHtyQILCHB3a+rxTSp5TGvtWv8aFEzAnsXkDZzOplaemK7/Hbmi0R3dRJAIBTKPiSrmmNBg+PxdmDm3D84DYCAN9Xca1f+MsHgO3PAACClCQvbhWgBbvdi0N0AmKUkcqqoUG2fKtcjDwr8NQxpIWwtGTFKvxtWEXsmm0C757wCQGA80wvjfQJJZDzt844umO5PjxKg0+JpemvvYeoYuOiAcA+a3XGH+r1wM5d21CQOMN3HY3dJIgxgadk+dLriW1/u2Vp4JP5mwMgNASoAMYKcJclusdwJiYxw4cyzL1PHWPybQCsytqF4X1ux74X5YkdeV6P7cXHgcBeMYiVQfqkK7B1fi+cPLRFLhF93QsKWADzUL7lw4hqtvMD7xLbQ6jeAku+Xcd11ba6ANDk9w6az5ro2TGx5Ab85NfjEJkEegAIKaxbstXqHUU4n9+KXGXU/bg1rDKKG6byufEsIPk4djoPTXr0xLrJ5bGVT/wkANgnBQDZG6DBN1QWmRMvQcaMyjiY8ZHYuAmAgKXHJs9BVJ71AkmWgxwA3fkzg1ff/0w41/WPtCXOduNrYz8FpstrywnMNVxSvGRO5f80jAdNdi8ygAYAdkAtwwhfHAAsOcnApMu71yIgjfqNxqCOFXF4LusFyJNAL/hu0AnNLI/Ns9jZvquwceKVOLz5KwkCpbep7/X5n/EJXpHbxIwqNcPrH3x+TgAw/g74T90LBdOV5Uwo3TL62l0GBgHgKSLIFujkWQZQw305oh4aeFnGQT0l9v5dltJeex+/LX09Vk+vid3Psce99kMhu9tXAackeDbPLI8tMysga/JlyHqtGddFrEjkzFnW98ZHCxFVamKCrCZ97qrg5i74Te1OyNm+yweAZZsJmm+7b7cVPBVsS4aImRUbVY8FAskjJ+BcR28I4IFRClFFbGHCKD+YITK8Sj65H5IVQwwAhYWF2LVnDy6o1hJ1G9+FvXOrYtsssS3sjvu6B1CbRE7wN6fJzxllsOnZ63H6+GG5eycAwOpkaeSzryOqwIYABwBu66/eGnV7PsHLMCDFAkBP4gjFAYAGX8qxgx8GgGiMbiwMj54D+KsAhUhfATfIOnD62ihiPm0+o7ALAj/gLqkfj7LU6bEJiC6/B1261se+F8tj27NlkKXGe2sV4AffAgCbO0y5HNmvNRU68cAJO9icgy0Yb+wyhC/x7NYfmA9UbIo5b3+iHEtsp8E3fjLBVwCgfldk+5/yWfFyAUB43fvWJJADgL4iRgWLVEID5Qqz7us3Zct7clbvK2zzWYarYMeR3Lpdm5GFC2q0QFS1Hdq0vQ07X6iKH56XD4j4PMDt9m0AMKBsnlmRt/6N4y/BgYxPxJKQBIWlRcu+RVS5qXlKGNf6r+uAS++6D8dOHEdhYQGxi9hHgmUCHyAXINpP1O90Q00OWV5sFDDsXUBG7OmqAACbA7gAUMoHlLAqcLsYqZDHR8q68sIAELtzgnxAsPK8FxjKHuA0QFS9E+q2bIXVLzTAobkVkDXlUmRPl2cFZzFiEz4WeAkEBo7ppZE14RJsmlYOe1e/JoNv9GPp7NmzqNqyn2n9yahCE0x75R279dNuPZXAW3wuWNQ18TX9DBCVYQFEljEA8IYAu+uwlZJC6BhD1++6fJxCRLGYcU8F3rR6SfpeLlBYiJ27duP31zdHVLMNohqdUaJeN7ww9RHs//Q+/Pjajciaejk2TboEmZNLIHPyZcicyM74F0PGuIuxaUYlbH3/ARzbs04+u2c6CkexVJCfQMuHR4qjYKEWz08PyV7hmtao2qY/753Y3oGwI2xbyqR9pEhcuz5NRpa/3aHAOhHk9gBaCXccJ4GNC7BjSFAZIsvld4Puvk1EAYCDAMBr73+GqOw9iGp1QnRtO0TXdESDB57Gp5++h2ObF+D0xhex78snsO2DPtj6UT/s+nIM9q//G04e3srPF6hjYgVyTGRpU/ZW3N55kJz4BXb/+LExCYAbOuJX1Zph5boM5dB/Evn+tqiofMpD9gH8VYADANpa1eyTKkYrcAMae34gEHhFKvg68BYAzLDAeJhMlvqNfhZRyfqIbu4kiJ3bq9ketz0wBnPeXYItuw/o4ManQmzM3IyBo2fi32u1FzLo9q86K6gCz4gdGi17D2a+/j6XYP+I9TyTE0w/HoGAk8ArOfyaAsBbBbgVW+QAIElFrkIm8EpxV3ZRwSck7zPeAna4v7AAHdiBjqvuRHRzZ0S3dOVr8qhaK96Kf1OrI67rMAS9RszEpJffxbxPFuOjxd9g3seLMPWlt9Bv1AzU6jQYv7q+LZ/JRzd1lq3dAYA6MsaoVldE5RrjqemviOBL34XsOmcK2czIaqBOY3NjQWKi/G01yBAATAt1K7eDrq/JvMCAw+H1lA7JN8QnecmC7+TzVUFhAT/Z02PYBESl7jYHPBWxI97saHflZoKqNEdUrQU/3ct3+FjQ2USPgUZ39aTrJy3/AvadHRsv1whPp4nfAPA1v6vjz6VkduvGFOB1Ak8bnGqM7hyCxzx4KDQwU1XjhwqoizIDClJeAaSIoFtkGS+e0unZv0fmYAfbIGJp1MzXEVVqjKhqCxHQ2ozYaV9FpBVzcrp3q9VTHvm9cnP8r5qtMefNj89/8IsiFsCQL+nqwAIA5XEAEJoEWsFzyBJOgGIAQHsE9d2Xc+6kDm24902emhuIjRvgsyUrUL5BD0Sl7kJ0fXsR0FgASNKBl0SDz8DAW31j3NDmEXy/QbwiRjg69CjZXsL+EhKHVfz7msgKjcZGg4DEhMYwCAAruF4lRgjlMT9nosoUEfxkeYEWH3akfDOYd18s406cPIkxM1/Fxbd3FU/y2BDAegQNAgIIGnTa9bOeo3orROUaonj9+zFl7rvcVpbMKSIboHoVQ5ayrn5h0NgUX1aS62sCANXlF0WxABBC3IpsFIkKSTCLCrqkpEZxoo5L1oqSO1H9oHPvgYOYMPsNXMM2dKo0QVS2oZgHsL0D9lsABgpFbPLHTgWzn4eVb4Tomlao0ephTJnzJvYfFj8oZb0Mm3fwAKtPj0IBpMNZ2K7UwCPJ9be7ZNcxC7R+RtYkkA4BcRU5AoK8RVCRRqVq/DmQSgWJBJZ/uxZjZ72Gpn1HoEKzh/D7Op1xIZv5X9cGF97QDn+q2xWVWvRDy/5jMP7Z17Hi+w3W/gCTp4Bp1+MH39XD8Dn5ZM5zTgAIEg1+fOwEAOjTQAsAUoASSlo/u+aF3QnGeaSg0XGz4nMgtkNHU+7ZM/hhz16kZ23G2vQsZGRvxd69+5Gfe9biYy3elRXSxwTPz0vKY+1wxvCkSKJh2oG38unQEA+AkGD2qWaWZk3p8qVMyoEBR54reXoo8EonWBslqgz7kSl5HwBNbDnpyfxnEF3KnofgcyINVZALgNhVQH5yACjkpNLyz0NQOaUkh2xw6AmpAYHZBCGbISSfkhv00HVK9v8M8oKfbC8gGVm9tWqwJt8eAgKTQAoAikLqRK/Sfxal5AC6w6WIGUh1JgAOBF6RCyAty5JDeAIyfg65wWe7m35SvVWhXd71UaDbp2QBwF4FFNEDyAK/xHBWnm2anPeNEx0s8t0BrQUM6STawtl3cUBC/GKA/lDFlkF6EEJsfsE2ovjwQX14Dv5SDY79aPSb9Zux4Os1+HJVBtZm78TeQz9hyw8HsHPf4Xj/aX3CMWSUBADJN4IsACgKVCDILHHYp5XkCRt9SSZYFpt6pErqsxL7rb/MdzKMvrLVu8mAwc8/feokTp08Yd0TvYviN/qoLpSlwvwETp86hQSZQLKfmrl+KiqxOpjtC7/LwC09RuOdRSvR/PE5GP7SJ2gybA4mvbmI83k+d0Hp5su4hGz3AUAK8c0OUih5BYKfLmFYOnjoMEZOfxl3dH8c17UZgFodBqHHY5Pw3mdLcPLkSe5I9kqVl/72Kbo8PBrdH52EnT/8yF/apOpj+Qu+WoEu/Z9B90HjkJ61hU/iWKub+dcP0PHBp9H36Rk4eeoUv6f0Zd9Xrt2IHoPHoeejk7CBlzP5LO36cR9GTH0Jt3YZhqsa9sZV9zyAOl2GYtxz83DoiFj7u61ebTsvXv4dl12t5cMo3bAXKjXvixb9nsGbH4tASQfzoYrr+uq76PDgk+j86CR0GjYRHYdORNdHJ+Ppaa9gTUY251cndfpOmcdfTf/US5+g/sPTUPuBiZj7yTdEZqqBN0SDbwPAehikxiKx1qXdZ7KKRNANABiSd+/Zh/J3P4Do8rsRXXYXohL1EF1eH9GVdyEqXhdPTHhOO6rdI+MR/ekWRKXu1c4Q9QlFR6e9iuiPtbiMBUvMO3oa9HwKUbHbEV1aH31GCXmqC2fplXc+RXRRbUSX1sPHX4lyKu+TxctRrFYHRFfdg+jKuxFdwXRrgOjqezhddUd3fLtmI+fVYOTLyUIMGJWGqGwjRFfdi+jyOxFdXg/RVXcjKtsUUbmmaNV/DE4RQLLUpO9oRMVuEzzF6iK66FZExeshKtUYv6reCmOfE28WYeB+7Ll3cfTECcz9aCm6jpyLbqPm4u1Fq4QuIQAEYmKR0/pTAgALJi1QVEV6Fitbf4/HJiO64h78+sZuaDPgGb41O3jSC6jd7VFEpRrg40XLOR9LvUfMRFSqIS64ti3WZW7m96iik2bP4+CIqrXGwm++1+WaPTwWUcUWuOCmbojKN8Nbn34pysqW9MaHC/keflSlJT5bZsp9tyYd/8LO+lViu35NcHPnR/HElLkYOn42rm03CFGl5ogqtMBFtdphx64fRCClzCcmzkZ0WT1EldvgX2/uhi6PTcXIGa/ggaemo9id9yOq1g7R1Y3RduA4zq9+edzh0amISjfGn++4H0Mnv8Tr6/HkDPz5NvaOgbaIyjTEwmXfcd4TJ09xX546fRqnTp/BSflpxaCIeLhUNADkLJ8CgCLHFWiT6fr5ZI/9pKrRQ9wRdXqIlyeYVICV36/jQ4DaaRv93Bui5dVog7UZOfyeBYA5b3IHRVVb4YvloiWw1G7oFB6oC2p1Q1SjPX5/Qzt9Lp+leR98gahsY0SVW+CzpcK5LJi1Ow5BVKYRovJN8cyMVzW/YCjAwFEz+DOAqExjdH18is7asCkHF7DfCFRuheJ1umK1fDCk0q4f9qJG04c4OKLyzfHpl//Qee2HTER0RQOUatLPKvPZl8vx62tacX42JLCk5kfMP+x7IXuhFTtvKf2tGtq5UuoAUNudKQJAgMac1GGKX9OyP6KyTXBR7S74cOEyy2iWmGFsksXSuOffFAC4th227/7RZcWzr8+XAGiBhd8YAHR/ciaiCs1x4c3dEV3bgbfo69sN1mPpvPkSAFVa4HPZulas3iDOAZRvirvlOX42sVTLPHGdj2ta9EVUsTn+49au2LNPnCoaNmGO6OrLNcHcd8QjYT48Sj+w9N2aDfh19daIyrdAq0fGCnkA2g4az4e/ko368odVakLMXkz5hzvYSyaaoUHP4ULm+Vxyk+Vi6gCQcwBdSK6FPeEKjXRnS65lZ73yNh/royqtEVVuiTqdBuPZl9/Gvv3CmWysY85jadTM1xCVbogLb+qCxg89g46DJ6DdwPHoMGQSOj8xHdd2HCYObVRpZgGg6xNpiK5uiKodHkWjPiMQVWyGqEwT9B87h+cLADQSAJA9x5Q5byAqeRcHwCvzv+D39BpfktaJ9RIVmmL+F0v5vTu6DuND1R/q9sCBQ+JVs2rpycrxHq2wANe0H8xbdJkm/ZArVwdtB0/i4LmiYT8cO3acg4wdPp37zgJceE0bDtSuQ8ZrfVw//ywiceHXcl4VAwBTUA8BFDXJUEkr0uf1CvHMzFfxr+xtGyXvEXTVXfjP2h0x5rl5vFtTe/QjZrzKA/Ur1pKvaCAmSRfXRVT8dkHs1A472VO5GRaSIaDL49MRXXkPqrYbhr37D6LkXb0QVWrJnbn4m9X4bMlK3XN8IecOwyfNFq24aissXrFWO9wFwFw2gWTgKdsIL7wlXi5RvXlfPiyUaTaAD3ss2LSs6kGa9h3F+f6zXk8cPnKE32s7ZDKfIP62dndUaN4fVVs9ggqtBvGDpVFV1kiaYfl367U+no89ShIPRe6uYioA0HMAvRJIbRJISc0FWMrash1PT3we1Zo+KCZXLEBXNEDfkTN4PkscAKXv5T1Aq8GTcf9TM3Hf8Ono/sR09Bg+A9ezHoB1q5WbY+FyM5kTALgbpZsP5NdLv10n3vFTtQ2uuPchjJo1DxdUb8kPeSoAjGYtmw03FZvjk69W8Hs6iNJGltLYsFO6IQfTX+eLX/ze3GEgD2yxBn1w7ATbM5DLSmm3ev9evZ7D+Wy/RP0HcPzYUX6vzaCJvNe58MYuXAbrSaLq7RBd2wnlGj2ITxarZV4Kgf25lAoAGInWT1cB5zbrZOVZoo9TWXf36eLlKFm/p5j11myLLTt287yRDABX38ufx7N9ADelvfIeoqvv5l05XQV0lj1AmZaDcVZ2tSPTXhcBvq4Tflu7Ky5gPUdVMwR8+MVS0SuUa4LBE1/k96iNav7Q7OExYslWvTVWrRfHvh94apoYFiq30oDSZdXex+HD+FMd9jLJ5rip4xD94KnNIHZmsSEuadAbi1eswdt/X4Lf3NCBTxiv6/wY52ETVNeX543IstECQJ5eBgpGOgfgLSNFAKhVgGr9uwKBZGn8C2+JllW9Lf6xRryAeeQM1irvRXRd++AycPzsN8UysEpzfEF6AA6AkvegTIuBEgCFvFuu12WomPzdxA56dLEAcPTYcVzKQFixGf7jhg5Yuda8BFqlTxd/g19VacnH8evaDdK92Vcr14gTRpVa4cY2A/kr5tzUf9RM3tLZBHj0c/P0/dYDx3Mbr27aX76gHhjwTJrwRfkWGDlL7APQ8wY/d7YfLE/iFwYAKeSO/xQ9biWmnFk6stSo95O4t9sw3uKyt2zHrt17sGjpStRs1Z878E+39cDBw2J85D0AC/B17bF2k1kGqo0gDgDmqCpmLGepy/A0RCXvRemmA/hPudh+PEs//LgfxW7pzF/kyF/4XK0VFq1Yo8u9/M4C8VuCaq3x+1odMeb5eVj63Tos/XYtRqW9in9nZwmrtuUvkGQvjGJJreeb9X5CbP5Ubo2abQbilff+juXfrcUHXyxBpyETOLCZfZc3uB+Hfzqqdw5bs1VAqYa4ssnD/DeELLG3kl16532IqrTFv17XDtlbd/D7yv+/HADO4RUZPzX5TgIAxegMATEAUKBhn8zgo8eO4Q9sl+0vdcTk7oYO+LfabBLXnLcM5sCxz78hosE2V6bMRXRZfT5Wr05nr161e4Axs17ju3ms21YtmaX2bB+g2O247K7eAgByC5mlvy9ZIdby1dvw8V4BQG3oDBg9C9GVd/KJGR+T2Y9BKrdAVIpN/JpxvVm9LNHdxcOHD+PG5g8iKsmWg4yP7Qs05xtKbAXCZP3lxvZY8b2c0MlyTfqPRVSiPi66oyfvhdTQ8Pr8z8WQdeU9aNDzcT2vcH18PqloADgTwFQUUsBRvB9+/jXu7DIEv7upg+g22Yy6ehuUursXpr4o/ruG6lrZub3iNVqgxG1dsDHLHwLSXn4bl9RsheK3dMayVcKxLA0YMxtX1GiJW7s8agFABXn45Bdw0bWt8edanbDs+w38HtNNnSCeN/8z3NhmAP6FnRGswH4j0Ay/vbYt6rQfhA/k0o+1fOoHltiuHHvGUaFhL1xYvYV4kdQ1rfGX23uiXb9RvMfjdcnxlr2W/uFxc1Cmblf+rOH48RO8t2L2s9VQoz5P4dLbuqNYnS5YuOxbred5p6RzANLy3SEgGQhMGfu+Sjt27saXy1ZiweJlfAuWPbRhiU0Q1RyD7ZsfPXoUx44d4+Bz6z116jR+OnoMR48e44FW90+zbdIT7CneKfncwjWykD+QOnDgEOflNsheTE322JxhU9YWfLl0JZZ8swpbZDfMEn9JtaMLWw6rTRx2tCx9UzaWrViF79amY/8B7kqelMOFTsx3ucg9exZ5jMhMX2yI5XLbjvx0lD+E4vnu8/6fS3QjiH0mAwAjGkjXcE+4W5GqTH6qiqzEd92YTKMQPbPH36Stn8OLTyufA4fcZ8/iWcuXsqhOalkm5Er9naGMrlQ0r3xRhH4YRvXh1yIvdLSMg0zpIMuzT/4PLgvkuQHHd+plFMwWpo/rx59NwX0AFwB5oWWg+KTBTwoAuhHk5lkUcKZLqebL3Um9fldB5Z9MV5KviDjAffztkgAoqdPVIzAvsuojdbl6u3VZlKIf/XsBCsk5FwAwUgZ4gs6ZZFA8R8YE182jPPqaGRQ6qyD0dYOhAyJleI4M8SXRx65T1kuB4eotfWDVRcunFPyfSZZtahKYGx4CgpNApayrNCFWViV2bb6zB0Siu1QTMDexOvzEjmj595kj1fKKzvxZErqYJSS/550eEklNQllStrlJ2W+u6fzBbNzofPI/kVTSOhGA2HmGn9lFl4Fucn2eMpG4JQUAI7N+dAAQQK2a/TNiM2a2pfntugzkFxTg3U+/xFdy+XXs+EnMeetjnDh1iucPH/s8pr/8LsZMm4vJc97i4/nqDVmYPOuvGDHjFYyY/BK27trDwfjCmx/zQyHT576LA/xXOoXYf+gQZv91Pk6dPsVPEC37dg0+/HyJfMOncOa8jxZiOfuBR0EB35IePuEFTH7pXYx7/i1+EofNxtlvAtjDHjXP2L5rDx4fPRNDRqZhg9yUYnkfL1qKz5aKrePTZ85i7tufYPeP+3geo8zN25H2yjv8JA+znd374PNlWPbtev6dtj52/caHi7ByTbo+K3n69Fm8+OZHfAON+VEFf/P2XRg6+lkMHjEd32/MErEIBDUpOXFT/smNBQB/GKQUTiX4YhOIpds6DsXjk17i3+/oPBS/KXsvDh05isPHTuDC6i2Rs3M3ln63Hl0fHosLKzVFreZ98ehEwT9w9LP4c43m/KUPvR6diKxtu3Dg0E+IqjRF20fG4bYOg1G5yUM4ffYssrbuQHTxreg1chYv2/fJKbihRW/+naV9Bw4huuJ21O32KL9ev2kzeg6djItv64ly9z6Ih0bM4gcuJs95E9Ubi3IbM7eg2HVt0LzncHQbOA5/rNESi+S+Q4dHRiO6/DZs2/0jb6W/u74N3xlU6cGRaYh+Wx2r080ZgVvaDsZDTwn9NABk71G50UMYPlW8X4D1JEePn8C/XdtWP+xidaxan4W/1GyNVn1GoU2fp3Fr2wE4feaMOXOYCgACsVM9QDwA4nYCHeEhADTpPRLPzBTbmh2HTMaFV96Fu3qNwOGjx1Hsth5YvUm0KpZqtB6CDxeLVsXSwNGzUKfjYORs24XMrTvFu4D27MNf6nTDoaPHsH3PXkSl78H2Pfv499/V7c73GBYuX81/vFm/u9hTZ2ncnL+hRssBqNSsH7K3mUMiHQZPxii57crStJfexq0dBvHvLR8ciWZ9Ruq8YRNeQPUmffj3h5+Zhd9cfTduaD+En9gp0/AhLF8ttpHZEvX6Vv1Qu8MQPDRS/Edxlhrd/zSGTRDPG7QPJQBubj8Uo2eJzTC2Mjh24iSuqN8bX64UTyhZurPr4+g6bKq+PnL0mB5iQvGwiOZzfjP30D1Abq5/HkAFljInmzEbAAhUcQCkCQc3fmg0Hpk0F9Wa90WbAWP5lu26rG3aoGotB+HV9xfq66emvYw/VG2KWu0G4o7uj/E18cHDP+FPt3RCpaZ98efandF71HO8C12XuQVXN+uPMc/O4xtEbYZNR7P+8hhWfgKVGvXBh199iyb9xuDxqebUT/M+IzB03PP6evrcd3BLewGAmk36YPILf9N5n3+9Ehff3J5/7zpsIh4aOxt1Ow9Dsz4jULnlQPxjrfin0c//dT4/77Dwu40oUa8nTp4Uex2Neg7Ho/KBkz7RI51fuwMDgHpWUIjjJ0/iyga98dVK8bJplso1uB+vvC8OmZpXu7kxiI+NxyeHIPbJkgMAt4DTC8RUROcALDXuNRKjZoi3ZzTo8QQmzH6TP/WLyjfEr2/ohMxt4gkgS5WbDsAr74tDGSz1e3oamvQdpa9Z2rl7L/5Spys++fo7lL2nFya/LN7Js2pDFv5YtzvO5uWh76jnEP35FrQfOonnfc0e2pRriBs7DcNlt/dAxeYD9ISvaZ8RGEIAwHqAWm0f4d8HjHoWFer35DI57wNPoUF3tj0LtOk3CoPHPc83e37N3h5WpSXWZG7heezU8+X1eqJun3H8kffb8mwiawxPTBfbyXx9z3wmAXBzx8cw4cX3+HcOgBMnUfLuB/GN7FVY6jF4PK5t2At57F/mFeTzZxVsCDDzgHBMQiSWywYELPEhIB4ApgfwljAxxFKj+5/EKPnuHPZU7pFnRJc4/dX5fDs4Y4vpjive0wsvv71AXz8++UX8R9UmqNPlMdzQtC/+8f1G3gv8vlZ77Dt0BN+s3oALKzdC1pYd2LR5O/69Vgcc/OkYN65knU5o0F2M940feBKdh07BvgOHsXnbbj5e/+0TGZReT/KhRqUpL7yF65o9yL8fPXYC9To/htK3d8c1Dfugyr0PYtvuvTyvea/h6D5YHPFioGWPhRmY2b+e+8vNHZC1dTcO/XQM/Uek4fqmYk7RedhUFLu2DWo07I32j4znXb3aeKp33whcclMnVL+3D+5/Mo238NKN+qJiw4dw7b19MGH2W3zifGubR1C63n2o2qwfbmo/iD9H4JNK7vPAMjYQF0WqMVuTwETC/mWQas1ugVQ2Mdgry7O37OAzWfYL1PSsrdi8fScvzxC8at0mboCSuWFTNvbuP6Cv2aHKJewkz9ersODLFfhx30G+9ctmy6wcS8u/W4fN23bxrd0VfGv5NL+/Y/cPWJcuZsnfrFqPg4fEk0aWVq/fxGf7TKeszduxdcdu/Yr13Xv2YX1GtnYK2xr++5crMH/BEt7aWGJ8mTnbuG2Kb3V6Np8L7Ni9B2v4/w4U6aefjuLrFWu4P7bu3MPt+XzJt1ixJsP4MZFARs52LF66CgsW/4PnsZ3KNek5WLjseyxY9A+s3yR6FwaYTxZ9g/cXfI0Tp06L4P+CvQIfACn+NMxsnvg8mvR/4RJrWZVYntqWpT9v4pxyLR36XRxrMYpPlZM5Wp7SSSXKoxzl50FvurCJpsrjepK9AV4/OefIEn1FHdeBlnfkuYnumLopZD+TQfdNlD+CRCd6IdKrAQMA53cBgUJuL5BkRfD/P6kfvjjP2M8nnWvL1kFVMQkAgOTTOAoA5B6J8ovoAVzk/JcBoKh6isqnPEXxpUxyf+T/FqL2BSbqFliDAEjy20BTiFSgAUC2hq0K/XuuvJQCkozHMjqQH+Jz8843z7nyufccyk3Yc7Eg0fpigq8BIPnCANBDgBHg7gOY7p9SwOg440K8cVQUTypyUqkvFR6X173/MyhpUM+Fz9Ip3Hgp6UfbqQBAkRt4/Z081IjrDTxl3HsupcKj+FIJSCo854P+q+o5F4qJTQoAcHoBS5As7DweNQ7wAXROFHSkI7Oo4NN8rdMv0Mur5xfIOldK+dFw6jolB0CsIBlouhlkDQOmV/A2izwHCnnePY8vsOdg8bB8dQDDqY/wpbJ3ESRPHyXLv/9/nojPA3obHhErDgDrHUG0BwgIoE5UQLB4aK/gAsBTIrChZLVYw+fJUWAjMlR91qkgh8/Xw6UAD9dF3Xfrc8sLKhog8WVdSi6HEvWjaoguDyEyD/AAIILrFxLKSIe6k0Gaxz6tIPhBDQeezCssPodX66SC4coJBd+xKaCTlR/LE6jPKecdPXPl/jPJnZ+F7CJ8QQDogFpAsIMQBoDhVXmGxwTE5AcCpnj0p8tjSLfEQJ6Wp2R5eSTfcoxLsix1psuj/RPoGSyeJGTJCeSnQpbOxtc03/i9KACElNbBDPQAvEJbEQ8gXhlHYc3r5lM++Wn1Qi4f0yOZHLdOVcblIXK4bSFZQgYFvHVIlMp2guGR9nUSPpcnzo4QET6qbwwAfCTT4InDCCSgnE9tNiT4YQeep65DitADDUpxUodnPCcXRIbPAqUOflFy3PsOxbV6Ur+2k/jKr9eWwzdmdB1hHrteKc/1YUAfXxdXjq17GABuV0QKa0dLRWwHKMMCyliKE+dRPivARHFHjg0CxkNeG691M8R21EJyfAc5QKd1WEtiAm5XriuT3yf20K1ZUtb41JCuL6i34yPqS1UmxEPqSwKAUIVUCA1aiIfcJ3xWK9UK20qZPGWAC0YaHHLt8ZBPqqdLyfK1nBCP1D2oX0CWKh+TFwS+K9uS4+jGyW5Mhlw+cX0OACDCyH1/EkbzXcdQpaksAgJLacUTkEknNHoPgBovZFGeIHl5cbYn4fPy6D1qF/GTy2+VpfWF9HG/h3msxhSQ5fcA1tNAR6gXXFuQ5vGC5QSM5IXWuG7v4M6qbcCJPCpHbwg5PJzc3TQ3X5O7TLUd6OpkBzUkT8pw6wvt8Gke4rsiSfJRWdSPMXI8AKjHwXag4sk4Ihm/EwypkCpLnakU8hWXvNZ9n/iyMFaGozvPp6D0wcbJCZrX03BZFAABSqUn0rxxoDwHor6OkyV1snuAZENAiGKdTO65yjgOF63VBIMGWedrHkEiaIYsILrODtlCjNd1ar2pbdTGkP3OuO3mSx4DtBg5mpfmB3iT1ePxUZscWdKueAC4AkNEAhJ0kLpHeMKODgfEJSrDOJMYp5zj9DSeXrJOJdMNjHVft8aALKuuQB0x9Xl5rjz3Ps8zthn7A3xaTkBfWgfxEZOlAZCXyCsaAK6T4wxz+XjrDOUbPhro0LVVl/705w0WnwYI1YVch4JL8lUPZZzOlm+SXJlEjnsAI1iHU5d3n5ZPxuPIiQMbB49+yyjjEfcMAPJSAACpKNYwlaeNV0Sd7xKRIw0IBpbqQHhNnUovV1+qF9XZ1onvF1h1OPK984CO/YmEzrfW8Fadsi73UTvNp/dDeY4ci9f1icxXv11Ueao3KRoARIhViWu85nED5gfOU9qR4wdf5TmyPJ18WV49lE99d2Wpe8nkxJAFALe8x2MfLNVvZpW8rgz32pXrEWvl+eKfdCgA8B/Nkn+GEQSAdQ6NOilZhSk6SMm3ZFsyHADFyaP3LZDQe06AXRm0bGw+yYvjIbyW72LkKIDYfOalnEn1ceVpHwYagOzm2Y9IVfDZL5bVkJYaAIIUClwKShdFlkExFAp2iDznxMjVQEmSr+S5eS4VxRPQXfk5ub8D5NVF9KfxkHzi5+f27wliAaAoXilaWYzjfg55RhFSGx20ZceQGUL8PItSkKVlFCUrFXLqivevk+9uGHmkAEwBb/OoLp8+tNMASCRcANCxiX1nb7RyK/1/m2KdT96QHqQig2Eoto5UienC39ccyLPIDbh7rYisYkgPkPAB4JIpoD9/YYvwtoJJd5WUVN3Juu3zQanoci5854WKAGdgbyOO1PFwCgD7X2X9T/pvk/LyEicZALYVFhYeYRMC9t+krU9JDCmKQnw03yXOE/huk5FBZft88WT0MTIsmZKsOlQZi4fIpHYG9HLv0zo8HoeP5iWIr8+ZQn7Iy5Vk6qQ+TuQnjrCYJxKJbf8bAikxtD9D/ooAAAAASUVORK5CYII=";

// src/components/ThemeSelector.jsx
var import_react6 = __toESM(require_react(), 1);

// src/utils/theme.js
var VALID_THEMES = ["default", "dark", "green"];
var getSavedTheme = () => {
  if (typeof window === "undefined") return "default";
  const storedTheme = localStorage.getItem("app-theme") || localStorage.getItem("shnoor-theme") || "default";
  return VALID_THEMES.includes(storedTheme) ? storedTheme : "default";
};
var applyTheme = (requestedTheme) => {
  if (typeof document === "undefined") return "default";
  const theme = VALID_THEMES.includes(requestedTheme) ? requestedTheme : "default";
  if (theme === "default") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("app-theme", theme);
    localStorage.setItem("shnoor-theme", theme);
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
  }
  return theme;
};

// src/components/ThemeSelector.jsx
var THEMES = [
  { id: "default", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "green", label: "Green", icon: Leaf }
];
var ThemeSelector = ({ className = "", variant = "dark" }) => {
  const [theme, setTheme] = (0, import_react6.useState)(getSavedTheme);
  const [isOpen, setIsOpen] = (0, import_react6.useState)(false);
  const rootRef = (0, import_react6.useRef)(null);
  const triggerRef = (0, import_react6.useRef)(null);
  const menuRef = (0, import_react6.useRef)(null);
  const [menuPosition, setMenuPosition] = (0, import_react6.useState)({ top: 0, left: 0 });
  (0, import_react6.useEffect)(() => {
    applyTheme(theme);
  }, [theme]);
  (0, import_react6.useEffect)(() => {
    const handleStorage = (event) => {
      if (event.key === "app-theme" || event.key === "shnoor-theme") {
        setTheme(getSavedTheme());
      }
    };
    const handleOutsideClick = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("storage", handleStorage);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("storage", handleStorage);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  (0, import_react6.useEffect)(() => {
    if (!isOpen) return;
    const updatePosition = () => {
      const trigger = triggerRef.current;
      const menu = menuRef.current;
      if (!trigger || !menu) return;
      const rect = trigger.getBoundingClientRect();
      const menuWidth = menu.offsetWidth;
      const menuHeight = menu.offsetHeight;
      const margin = 8;
      const gap = 8;
      let left = rect.right - menuWidth;
      left = Math.max(margin, Math.min(left, window.innerWidth - menuWidth - margin));
      let top = rect.bottom + gap;
      if (top + menuHeight > window.innerHeight - margin) {
        top = Math.max(margin, rect.top - menuHeight - gap);
      }
      setMenuPosition({ top, left });
    };
    requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);
  const ActiveIcon = theme === "dark" ? Moon : theme === "green" ? Leaf : Sun;
  return /* @__PURE__ */ import_react6.default.createElement("div", { ref: rootRef, className: `relative ${className}` }, /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      ref: triggerRef,
      type: "button",
      onClick: () => setIsOpen((open) => !open),
      className: `theme-selector-trigger theme-selector-trigger--${variant} flex h-10 w-10 items-center justify-center rounded-xl ${className}`,
      "aria-label": "Change theme",
      "aria-haspopup": "menu",
      "aria-expanded": isOpen,
      title: "Change theme"
    },
    /* @__PURE__ */ import_react6.default.createElement(ActiveIcon, { size: 18 })
  ), isOpen && /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      ref: menuRef,
      style: { top: menuPosition.top, left: menuPosition.left },
      className: "theme-selector-menu fixed z-50 flex gap-1 rounded-2xl p-1.5 shadow-xl"
    },
    THEMES.map(({ id, label, icon: Icon2 }) => {
      const isActive = theme === id;
      return /* @__PURE__ */ import_react6.default.createElement(
        "button",
        {
          key: id,
          type: "button",
          onClick: () => {
            setTheme(id);
            setIsOpen(false);
          },
          "aria-label": label,
          title: label,
          className: `theme-selector-option flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${isActive ? "is-active" : ""}`
        },
        /* @__PURE__ */ import_react6.default.createElement(Icon2, { size: 17 })
      );
    })
  ));
};
var ThemeSelector_default = ThemeSelector;

// src/components/AdminHeader.jsx
var API_URL2 = import.meta.env.VITE_API_URL || "http://localhost:5000";
var AdminHeader = ({ title = "Dashboard", userName = "Admin" }) => {
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = (0, import_react7.useState)(0);
  const [toastNotification, setToastNotification] = (0, import_react7.useState)(null);
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react7.useState)(false);
  const shownNotificationsRef = (0, import_react7.useRef)(/* @__PURE__ */ new Set());
  const socketCountReceivedRef = (0, import_react7.useRef)(false);
  const {
    notifications,
    unreadCount: socketUnreadCount,
    notificationPermission,
    requestPermission
  } = useSupportSocket({ isAdmin: true, enabled: true, enableBrowserNotifications: true });
  (0, import_react7.useEffect)(() => {
    if (notificationPermission === "default") {
      const handleClick = () => {
        requestPermission();
        document.removeEventListener("click", handleClick);
      };
      document.addEventListener("click", handleClick, { once: true });
    }
  }, [notificationPermission, requestPermission]);
  (0, import_react7.useEffect)(() => {
    if (notifications.length === 0) return;
    const latest = notifications[0];
    if (!latest.read && !shownNotificationsRef.current.has(latest.id)) {
      shownNotificationsRef.current.add(latest.id);
      setUnreadCount((prev) => prev + 1);
      setToastNotification(latest);
      const timer = setTimeout(() => setToastNotification(null), 5e3);
      return () => clearTimeout(timer);
    }
  }, [notifications]);
  (0, import_react7.useEffect)(() => {
    const handleAllRead = () => setUnreadCount(0);
    window.addEventListener("admin-messages-all-read", handleAllRead);
    return () => window.removeEventListener("admin-messages-all-read", handleAllRead);
  }, []);
  (0, import_react7.useEffect)(() => {
    if (socketCountReceivedRef.current && socketUnreadCount === 0) {
      setUnreadCount(0);
    }
    if (socketUnreadCount > 0) {
      socketCountReceivedRef.current = true;
    }
  }, [socketUnreadCount]);
  (0, import_react7.useEffect)(() => {
    const fetchUnreadCount = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) return;
        const response = await fetch(`${API_URL2}/api/student-messages/unread-count`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (response.status === 401) return;
        const data2 = await response.json();
        if (data2.success) {
          setUnreadCount(data2.count);
        }
      } catch (err) {
        if (!err.message?.includes("401")) {
          console.error("Error fetching unread count:", err);
        }
      }
    };
    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 3e4);
    return () => clearInterval(interval);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("header", { className: "fixed top-0 left-0 right-0 w-full bg-shnoor-navy h-[60px] sm:h-[72px] shadow-md z-50" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-center gap-3 sm:gap-4" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "site-header-logo w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 bg-white" }, /* @__PURE__ */ import_react7.default.createElement(
    "img",
    {
      src: shnoor_logo_default,
      alt: "Shnoor Logo",
      className: "w-full h-full object-contain"
    }
  )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ import_react7.default.createElement("h1", { className: "text-white font-bold text-base sm:text-lg leading-tight truncate" }, "Admin Dashboard"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "site-header-subtitle text-shnoor-light opacity-80 text-[10px] sm:text-xs truncate" }, "MCQ Management System"))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "hidden sm:flex items-center gap-4" }, /* @__PURE__ */ import_react7.default.createElement(ThemeSelector_default, null), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "primary",
      className: "admin-header-action !h-10 !px-5 text-sm hover:shadow-[0_0_15px_rgba(107,107,229,0.4)] hover:-translate-y-0.5 transition-all border-0 relative",
      onClick: () => navigate("/admin/student-messages")
    },
    /* @__PURE__ */ import_react7.default.createElement(MessageSquare, { size: 16, className: "mr-2" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Messages"),
    unreadCount > 0 && /* @__PURE__ */ import_react7.default.createElement("span", { className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center" }, unreadCount > 99 ? "99+" : unreadCount)
  ), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "primary",
      className: "admin-header-action !h-10 !px-5 text-sm hover:shadow-[0_0_15px_rgba(107,107,229,0.4)] hover:-translate-y-0.5 transition-all border-0",
      onClick: () => navigate("/admin/live-proctoring")
    },
    /* @__PURE__ */ import_react7.default.createElement(Video, { size: 16, className: "mr-2" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Live Proctoring")
  ), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "primary",
      className: "admin-header-action !h-10 !px-5 text-sm hover:shadow-[0_0_15px_rgba(107,107,229,0.4)] hover:-translate-y-0.5 transition-all border-0",
      onClick: () => navigate("/admin/settings")
    },
    /* @__PURE__ */ import_react7.default.createElement(Settings, { size: 16, className: "mr-2" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Settings")
  ), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "secondary",
      className: "admin-logout-btn !h-10 !px-5 text-sm bg-transparent hover:bg-white/10 text-white border border-white/20",
      onClick: handleLogout
    },
    /* @__PURE__ */ import_react7.default.createElement(LogOut, { size: 16, className: "mr-2" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Logout")
  )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "sm:hidden flex items-center gap-2" }, /* @__PURE__ */ import_react7.default.createElement(ThemeSelector_default, null), /* @__PURE__ */ import_react7.default.createElement(
    "button",
    {
      onClick: () => setMobileMenuOpen(!mobileMenuOpen),
      className: "text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
    },
    mobileMenuOpen ? /* @__PURE__ */ import_react7.default.createElement(X, { size: 24 }) : /* @__PURE__ */ import_react7.default.createElement(Menu, { size: 24 }),
    !mobileMenuOpen && unreadCount > 0 && /* @__PURE__ */ import_react7.default.createElement("span", { className: "absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border border-shnoor-navy" })
  ))), mobileMenuOpen && /* @__PURE__ */ import_react7.default.createElement("div", { className: "sm:hidden absolute top-[100%] left-0 w-full bg-shnoor-navy border-t border-white/10 shadow-xl z-40 pb-4 px-4 flex flex-col gap-2 pt-2" }, /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "primary",
      className: "admin-header-action w-full justify-start !h-12 !px-4 text-sm border-0 relative",
      onClick: () => {
        navigate("/admin/student-messages");
        setMobileMenuOpen(false);
      }
    },
    /* @__PURE__ */ import_react7.default.createElement(MessageSquare, { size: 18, className: "mr-3" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Messages"),
    unreadCount > 0 && /* @__PURE__ */ import_react7.default.createElement("span", { className: "ml-auto bg-red-500 text-white px-2 py-0.5 text-xs font-bold rounded-full" }, unreadCount > 99 ? "99+" : unreadCount)
  ), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "primary",
      className: "admin-header-action w-full justify-start !h-12 !px-4 text-sm border-0",
      onClick: () => {
        navigate("/admin/live-proctoring");
        setMobileMenuOpen(false);
      }
    },
    /* @__PURE__ */ import_react7.default.createElement(Video, { size: 18, className: "mr-3" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Live Proctoring")
  ), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "primary",
      className: "admin-header-action w-full justify-start !h-12 !px-4 text-sm border-0",
      onClick: () => {
        navigate("/admin/settings");
        setMobileMenuOpen(false);
      }
    },
    /* @__PURE__ */ import_react7.default.createElement(Settings, { size: 18, className: "mr-3" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Settings")
  ), /* @__PURE__ */ import_react7.default.createElement(
    Button_default,
    {
      variant: "secondary",
      className: "w-full justify-start !h-12 !px-4 text-sm bg-transparent hover:bg-white/10 text-white border border-white/20",
      onClick: () => {
        handleLogout();
        setMobileMenuOpen(false);
      }
    },
    /* @__PURE__ */ import_react7.default.createElement(LogOut, { size: 18, className: "mr-3" }),
    /* @__PURE__ */ import_react7.default.createElement("span", null, "Logout")
  ))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "h-[60px] sm:h-[72px]" }), toastNotification && /* @__PURE__ */ import_react7.default.createElement("div", { className: "fixed top-4 right-4 z-50 animate-slide-in-right" }, /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      className: "bg-white rounded-xl shadow-2xl border border-gray-100 p-4 max-w-sm cursor-pointer hover:shadow-xl transition-shadow",
      onClick: () => {
        setToastNotification(null);
        navigate("/admin/student-messages");
      }
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "w-10 h-10 bg-shnoor-indigo/10 rounded-full flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ import_react7.default.createElement(MessageSquare, { size: 18, className: "text-shnoor-indigo" })), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-sm font-semibold text-shnoor-navy" }, "New Message from ", toastNotification.studentName || "Student"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-xs text-gray-600 line-clamp-2 mt-1" }, toastNotification.messagePreview)), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          setToastNotification(null);
        },
        className: "text-gray-400 hover:text-gray-600 flex-shrink-0"
      },
      /* @__PURE__ */ import_react7.default.createElement(X, { size: 16 })
    ))
  )));
};
var AdminHeader_default = AdminHeader;

// src/components/AdminLayout.jsx
var AdminLayout = ({ children, title = "Dashboard" }) => {
  return /* @__PURE__ */ import_react8.default.createElement("div", { className: "min-h-screen bg-shnoor-lavender font-sans" }, /* @__PURE__ */ import_react8.default.createElement(AdminHeader_default, { title }), /* @__PURE__ */ import_react8.default.createElement("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8" }, children));
};
var AdminLayout_default = AdminLayout;

// src/pages/admin/AIInterviewResults.jsx
var isGarbledResumeText = (text = "") => {
  if (!text || text.trim().length < 10) return false;
  const pdfSignatures = [
    /D:\d{10,}\+00'00'/,
    /ReportLab PDF Library/i,
    /endobj|endstream|startxref/i,
    /%%EOF/,
    /<[0-9a-f]{8,}>/i
  ];
  return pdfSignatures.some((rx) => rx.test(text));
};
var SKILL_KEYWORDS = {
  React: ["react", "jsx", "hook", "usestate", "useeffect", "component", "props", "redux", "virtual dom"],
  JavaScript: ["javascript", "js", "promise", "async", "closure", "prototype", "event loop", "es6", "arrow", "webpack", "babel", "state machine", "event-driven", "event driven", "react router", "router", "hooks", "callback", "memoization"],
  Python: ["python", "django", "flask", "pandas", "numpy", "pip", "decorator", "generator"],
  Java: ["java", "spring", "jvm", "oop", "inheritance", "polymorphism", "interface", "exception"],
  "Node.js": ["node", "nodejs", "express", "npm", "middleware", "rest api", "backend", "api route", "endpoint", "jwt", "authentication", "authorization", "websocket", "socket"],
  "SQL / Database": ["sql", "mysql", "postgresql", "mongodb", "database", "query", "join", "index", "schema", "cache", "caching", "redis", "normalization", "transaction"],
  "CSS / HTML": ["css", "html", "flexbox", "grid", "responsive", "tailwind", "bootstrap", "layout", "media query", "web accessibility", "a11y"],
  "Cloud / DevOps": ["aws", "azure", "docker", "kubernetes", "git", "ci/cd", "linux", "deployment", "cdn", "nginx", "load balancer", "monitoring"],
  "Data Structures": ["array", "linked list", "tree", "graph", "stack", "queue", "algorithm", "big o", "sorting"],
  TypeScript: ["typescript", "type", "interface", "generics", "enum", "next.js", "nextjs", "tsconfig"],
  "General / Other": []
};
var detectSkill = (question = "", answer = "") => {
  const questionText = String(question || "").toLowerCase();
  const answerText = String(answer || "").toLowerCase();
  const combined = `${questionText} ${answerText}`;
  let bestSkill = "General / Other";
  let bestScore = 0;
  Object.entries(SKILL_KEYWORDS).forEach(([skill, keywords]) => {
    if (skill === "General / Other") return;
    let score = 0;
    keywords.forEach((keyword) => {
      if (questionText.includes(keyword)) score += 2;
      if (answerText.includes(keyword)) score += 1;
      if (combined.includes(keyword)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      bestSkill = skill;
    }
  });
  if (bestScore >= 2) return bestSkill;
  return "General / Other";
};
var evaluateAnswer = (answer = "") => {
  const lower = answer.toLowerCase().trim();
  const words = lower.split(/\s+/).filter(Boolean).length;
  const skipPhrases = ["not sure", "don't know", "move to next", "next question", "i am not sure", "no idea", "skip"];
  if (skipPhrases.some((p) => lower.includes(p)) || words < 4) return "not_answered";
  if (words < 12) return "partial";
  if (words >= 30) return "detailed";
  return "basic";
};
var parseJsonField = (value2, fallback) => {
  if (typeof value2 !== "string") return value2 || fallback;
  try {
    return JSON.parse(value2);
  } catch {
    return fallback;
  }
};
var getDecisionLabel = (shortlisted) => shortlisted ? "Auto-shortlisted" : "Disqualified";
var EVAL_META = {
  detailed: { label: "Detailed Answer", color: "bg-blue-100 text-blue-700 border-blue-200", dot: "bg-blue-500" },
  basic: { label: "Basic Answer", color: "bg-indigo-100 text-indigo-700 border-indigo-200", dot: "bg-indigo-500" },
  partial: { label: "Partial Answer", color: "bg-amber-100 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  not_answered: { label: "Not Answered / Skipped", color: "bg-red-100 text-red-700 border-red-200", dot: "bg-red-500" }
};
var buildSummary = (chatHistory = [], scoredQuestions = [], ignoredQuestions = []) => {
  const normalizedScored = Array.isArray(scoredQuestions) ? scoredQuestions : [];
  const normalizedIgnored = Array.isArray(ignoredQuestions) ? ignoredQuestions : [];
  if (normalizedScored.length > 0 || normalizedIgnored.length > 0) {
    const pairs2 = normalizedScored.map((item, index) => ({
      question: item?.question || "",
      answer: item?.answer || "",
      skill: detectSkill(item?.question || "", item?.answer || ""),
      eval: item?.verdict === "correct" ? "detailed" : item?.verdict === "partially_correct" ? "partial" : "not_answered",
      number: item?.number || index + 1
    }));
    if (pairs2.length === 0 && normalizedIgnored.length === 0) return null;
    const groups2 = {};
    pairs2.forEach((pair) => {
      if (!groups2[pair.skill]) groups2[pair.skill] = [];
      groups2[pair.skill].push(pair);
    });
    const totalQ2 = normalizedScored.length + normalizedIgnored.length;
    const answeredScored = normalizedScored.filter((item) => item?.verdict !== "incorrect" || (item?.answer || "").trim().length > 0).length;
    const answered2 = Math.min(totalQ2, answeredScored + normalizedIgnored.length);
    const detailed2 = normalizedScored.filter((item) => item?.verdict === "correct").length;
    const notAns2 = Math.max(0, totalQ2 - answered2);
    let overallGrade2 = "Poor";
    let gradeColor2 = "text-red-700 bg-red-50 border-red-200";
    const pct2 = normalizedScored.length > 0 ? answeredScored / normalizedScored.length : 0;
    if (pct2 >= 0.8) {
      overallGrade2 = "Excellent";
      gradeColor2 = "text-green-700 bg-green-50 border-green-200";
    } else if (pct2 >= 0.6) {
      overallGrade2 = "Good";
      gradeColor2 = "text-blue-700 bg-blue-50 border-blue-200";
    } else if (pct2 >= 0.4) {
      overallGrade2 = "Average";
      gradeColor2 = "text-amber-700 bg-amber-50 border-amber-200";
    }
    return {
      pairs: pairs2,
      groups: groups2,
      totalQ: totalQ2,
      answered: answered2,
      detailed: detailed2,
      notAns: notAns2,
      overallGrade: overallGrade2,
      gradeColor: gradeColor2,
      scoredTotal: normalizedScored.length,
      ignoredTotal: normalizedIgnored.length
    };
  }
  if (!Array.isArray(chatHistory) || chatHistory.length === 0) return null;
  const pairs = [];
  for (let i = 0; i < chatHistory.length - 1; i += 1) {
    const cur = chatHistory[i];
    const next = chatHistory[i + 1];
    const role = cur?.role === "assistant" ? "ai" : cur?.role;
    const nextRole = next?.role === "assistant" ? "ai" : next?.role;
    if (role === "ai" && nextRole === "user") {
      pairs.push({
        question: cur.content || "",
        answer: next.content || "",
        skill: detectSkill(cur.content || "", next.content || ""),
        eval: evaluateAnswer(next.content || "")
      });
    }
  }
  if (pairs.length === 0) return null;
  const groups = {};
  pairs.forEach((pair) => {
    if (!groups[pair.skill]) groups[pair.skill] = [];
    groups[pair.skill].push(pair);
  });
  const totalQ = pairs.length;
  const answered = pairs.filter((pair) => pair.eval !== "not_answered").length;
  const detailed = pairs.filter((pair) => pair.eval === "detailed").length;
  const notAns = pairs.filter((pair) => pair.eval === "not_answered").length;
  let overallGrade = "Poor";
  let gradeColor = "text-red-700 bg-red-50 border-red-200";
  const pct = answered / totalQ;
  if (pct >= 0.8) {
    overallGrade = "Excellent";
    gradeColor = "text-green-700 bg-green-50 border-green-200";
  } else if (pct >= 0.6) {
    overallGrade = "Good";
    gradeColor = "text-blue-700 bg-blue-50 border-blue-200";
  } else if (pct >= 0.4) {
    overallGrade = "Average";
    gradeColor = "text-amber-700 bg-amber-50 border-amber-200";
  }
  return {
    pairs,
    groups,
    totalQ,
    answered,
    detailed,
    notAns,
    overallGrade,
    gradeColor,
    scoredTotal: totalQ,
    ignoredTotal: 0
  };
};
var AIInterviewResults = ({ isTab = false }) => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = (0, import_react9.useState)([]);
  const [loading, setLoading] = (0, import_react9.useState)(true);
  const [selectedInterview, setSelectedInterview] = (0, import_react9.useState)(null);
  const [loadingDetail, setLoadingDetail] = (0, import_react9.useState)(false);
  const [showScheduleModal, setShowScheduleModal] = (0, import_react9.useState)(false);
  const [scheduleStudent, setScheduleStudent] = (0, import_react9.useState)(null);
  (0, import_react9.useEffect)(() => {
    fetchResults();
  }, []);
  const fetchResults = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/ai-interview/results`);
      const data2 = await res.json();
      if (data2.success) {
        setInterviews(data2.data);
      }
    } catch (err) {
      console.error("Failed to fetch AI interview results:", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchDetail = async (id) => {
    setLoadingDetail(true);
    try {
      const res = await fetch(`${API_URL}/api/ai-interview/results/${id}`);
      const data2 = await res.json();
      if (data2.success) {
        const interview = data2.data || {};
        let normalizedChatHistory = interview.chat_history;
        if (typeof normalizedChatHistory === "string") {
          try {
            normalizedChatHistory = JSON.parse(normalizedChatHistory);
          } catch {
            normalizedChatHistory = [];
          }
        }
        if (!Array.isArray(normalizedChatHistory)) {
          normalizedChatHistory = [];
        }
        setSelectedInterview({
          ...interview,
          chat_history: normalizedChatHistory,
          assessment_summary: parseJsonField(interview.assessment_summary, {}),
          scored_questions: parseJsonField(interview.scored_questions, []),
          ignored_questions: parseJsonField(interview.ignored_questions, []),
          proctoring_counts: parseJsonField(interview.proctoring_counts, {}),
          proctoring_events: parseJsonField(interview.proctoring_events, [])
        });
      }
    } catch (err) {
      console.error("Failed to fetch interview detail:", err);
    } finally {
      setLoadingDetail(false);
    }
  };
  const downloadReport = async (id, studentName) => {
    try {
      const res = await fetch(`${API_URL}/api/ai-interview/results/${id}/report`);
      if (!res.ok) {
        let message = "Failed to download report.";
        try {
          const data2 = await res.json();
          message = data2.message || message;
        } catch {
        }
        alert(message);
        return;
      }
      const blob = await res.blob();
      const url2 = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url2;
      link.download = `Interview_Report_${String(studentName || "student").replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url2);
    } catch (err) {
      console.error("Failed to download AI interview report:", err);
      alert("Failed to download report.");
    }
  };
  const openScheduleModal = () => {
    if (!selectedInterview) return;
    setScheduleStudent({
      id: selectedInterview.student_id || selectedInterview.roll_number || "",
      name: selectedInterview.full_name || selectedInterview.student_name || "Student",
      email: selectedInterview.email || ""
    });
    setShowScheduleModal(true);
  };
  const renderStars = (rating) => {
    if (!rating) return /* @__PURE__ */ React.createElement("span", { className: "text-gray-400 text-sm" }, "No rating");
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-0.5" }, [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ React.createElement(
      Star,
      {
        key: s,
        size: 14,
        className: s <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }
    )), /* @__PURE__ */ React.createElement("span", { className: "ml-1 text-sm font-semibold text-gray-600" }, rating, "/5"));
  };
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const exportResults = async (type = "all") => {
    try {
      let res = await fetch(`${API_URL}/api/ai-interview/export?type=${type}`);
      if (res.status === 404) {
        res = await fetch(`${API_URL}/api/ai-interview/results/export?type=${type}`);
      }
      const data2 = await res.json();
      if (!data2.success) {
        alert(data2.message || "Failed to export AI interview results.");
        return;
      }
      const rows = (data2.data || []).map((row) => {
        const counts = row.proctoring_counts || {};
        return {
          "Interview ID": row.id,
          "Student ID": row.student_id || "-",
          "Roll Number": row.roll_number || row.student_id || "-",
          "Student Name": row.full_name || row.student_name || "Anonymous",
          "Email": row.email || "-",
          "College/Institute": row.institute || "-",
          "Correct Answers": `${row.correct_count || 0}/${row.total_scored_questions || 0}`,
          "Rating": `${row.rating || 0}/5`,
          "Status": getDecisionLabel(row.shortlisted),
          "No Face": counts.noFace || 0,
          "Multiple Faces": counts.multipleFaces || 0,
          "Phone Detected": counts.phoneDetected || 0,
          "Object Detected": counts.objectDetected || 0,
          "Voice/Noise": counts.voiceDetected || 0,
          "Tab Switch": counts.tabSwitch || 0,
          "Response Timeout": counts.responseTimeout || 0,
          "Summary": row.feedback_comment || "",
          "Completed At": formatDate(row.created_at)
        };
      });
      if (rows.length === 0) {
        alert("No AI interview results found for this export.");
        return;
      }
      const wb = utils.book_new();
      const ws = utils.json_to_sheet(rows);
      ws["!cols"] = [
        { wch: 14 },
        { wch: 14 },
        { wch: 14 },
        { wch: 24 },
        { wch: 30 },
        { wch: 24 },
        { wch: 18 },
        { wch: 10 },
        { wch: 18 },
        { wch: 10 },
        { wch: 14 },
        { wch: 14 },
        { wch: 14 },
        { wch: 12 },
        { wch: 12 },
        { wch: 16 },
        { wch: 70 },
        { wch: 22 }
      ];
      utils.book_append_sheet(wb, ws, "AI Interview Results");
      writeFileSync(wb, `AI_Interview_${type}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`);
    } catch (err) {
      console.error("AI interview export failed:", err);
      alert("Failed to export AI interview results.");
    }
  };
  const renderContent = () => /* @__PURE__ */ React.createElement("div", { className: isTab ? "" : "space-y-6" }, !isTab && /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => navigate("/admin/dashboard"),
      className: "p-2 rounded-lg hover:bg-shnoor-lavender transition-colors text-shnoor-indigoMedium"
    },
    /* @__PURE__ */ React.createElement(ArrowLeft, { size: 20 })
  ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-shnoor-navy flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(BrainCircuit, { size: 24, className: "text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", null, "AI Interview Results")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-shnoor-indigoMedium mt-0.5" }, "Student interview sessions - Resume, Questions, Answers and Ratings"))), /* @__PURE__ */ React.createElement("div", { className: "bg-shnoor-indigo text-white px-4 py-2 rounded-xl font-bold text-sm" }, interviews.length, " Interview", interviews.length !== 1 ? "s" : "")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row flex-wrap gap-3 mb-4" }, /* @__PURE__ */ React.createElement("button", { onClick: () => exportResults("shortlisted"), className: "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-shnoor-success text-white text-sm font-bold hover:opacity-90 w-full sm:w-auto" }, /* @__PURE__ */ React.createElement(Download, { size: 15 }), " Download Shortlisted"), /* @__PURE__ */ React.createElement("button", { onClick: () => exportResults("disqualified"), className: "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-shnoor-danger text-white text-sm font-bold hover:opacity-90 w-full sm:w-auto" }, /* @__PURE__ */ React.createElement(Download, { size: 15 }), " Download Disqualified"), /* @__PURE__ */ React.createElement("button", { onClick: () => exportResults("all"), className: "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-shnoor-indigo text-white text-sm font-bold hover:bg-[#4d4d9c] w-full sm:w-auto" }, /* @__PURE__ */ React.createElement(Download, { size: 15 }), " Download Combined")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-[0_4px_20px_rgba(14,14,39,0.06)] overflow-hidden border border-shnoor-mist/30" }, loading ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center py-24" }, /* @__PURE__ */ React.createElement(LoaderCircle, { size: 32, className: "animate-spin text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", { className: "ml-3 text-shnoor-indigoMedium font-medium" }, "Loading interviews...")) : interviews.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-24" }, /* @__PURE__ */ React.createElement(BrainCircuit, { size: 56, className: "mx-auto mb-4 text-shnoor-mist" }), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-shnoor-navy mb-2" }, "No Interviews Yet"), /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-indigoMedium text-sm" }, "When students complete their AI interview sessions, they will appear here.")) : /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ React.createElement("table", { className: "w-full" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { className: "bg-shnoor-lavender border-b border-shnoor-mist/30" }, /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "#"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Student"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Date"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Rating"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Score"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Status"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Feedback"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium" }, "Action"))), /* @__PURE__ */ React.createElement("tbody", { className: "divide-y divide-shnoor-mist/20" }, interviews.map((interview, idx) => /* @__PURE__ */ React.createElement(
    "tr",
    {
      key: interview.id,
      className: "hover:bg-shnoor-lavender/40 transition-colors"
    },
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4 text-sm font-bold text-shnoor-indigoMedium" }, idx + 1),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-9 h-9 bg-shnoor-indigo/10 rounded-full flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ React.createElement(User, { size: 16, className: "text-shnoor-indigo" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-shnoor-navy text-sm" }, interview.full_name || interview.student_name || "Anonymous"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium" }, interview.roll_number || interview.student_id || "-")))),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2 text-sm text-shnoor-indigoMedium" }, /* @__PURE__ */ React.createElement(Calendar, { size: 13 }), /* @__PURE__ */ React.createElement("span", null, formatDate(interview.created_at)))),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, renderStars(interview.rating)),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4 text-sm font-bold text-shnoor-navy" }, interview.correct_count ?? 0, "/", interview.total_scored_questions ?? 0),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${interview.shortlisted ? "bg-shnoor-successLight text-shnoor-success border-shnoor-success" : "bg-shnoor-lavender text-shnoor-indigoMedium border-shnoor-mist"}` }, interview.shortlisted ? /* @__PURE__ */ React.createElement(CircleCheckBig, { size: 12 }) : /* @__PURE__ */ React.createElement(CircleX, { size: 12 }), interview.shortlisted ? "Shortlisted" : "Disqualified")),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-shnoor-navy max-w-[200px] truncate" }, interview.feedback_comment || /* @__PURE__ */ React.createElement("span", { className: "text-gray-400 italic" }, "No comment"))),
    /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => fetchDetail(interview.id),
        className: "flex items-center space-x-1.5 px-3 py-2 bg-shnoor-indigo hover:bg-[#4d4d9c] text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
      },
      /* @__PURE__ */ React.createElement(Eye, { size: 13 }),
      /* @__PURE__ */ React.createElement("span", null, "View Details")
    ))
  )))))), (selectedInterview || loadingDetail) && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-shnoor-indigo to-shnoor-navy px-6 py-4 flex items-center justify-between flex-shrink-0" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "text-white font-bold text-lg" }, "Interview Detail - ", selectedInterview?.student_name || "..."), /* @__PURE__ */ React.createElement("p", { className: "text-white/70 text-xs mt-0.5" }, formatDate(selectedInterview?.created_at))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 print:hidden" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => downloadReport(selectedInterview?.id, selectedInterview?.student_name),
      className: "inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-colors"
    },
    /* @__PURE__ */ React.createElement(Download, { size: 13 }),
    /* @__PURE__ */ React.createElement("span", null, "Download Report")
  ), selectedInterview?.shortlisted && (selectedInterview.student_id || selectedInterview.roll_number) && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: openScheduleModal,
      className: "inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white text-shnoor-indigo hover:bg-shnoor-lavender text-xs sm:text-sm font-bold transition-colors"
    },
    /* @__PURE__ */ React.createElement(Calendar, { size: 13 }),
    /* @__PURE__ */ React.createElement("span", null, "Schedule Interview")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setSelectedInterview(null),
      className: "text-white hover:bg-white/20 rounded-full p-2 transition-colors"
    },
    /* @__PURE__ */ React.createElement(X, { size: 20 })
  ))), loadingDetail ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center flex-1 py-16" }, /* @__PURE__ */ React.createElement(LoaderCircle, { size: 32, className: "animate-spin text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", { className: "ml-3 text-shnoor-indigoMedium" }, "Loading...")) : selectedInterview && /* @__PURE__ */ React.createElement("div", { className: "overflow-y-auto flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3 px-6 py-3 border-b border-shnoor-mist/30" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 bg-shnoor-lavender rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider" }, "Student ID:"), /* @__PURE__ */ React.createElement("p", { className: "font-bold text-shnoor-navy text-sm" }, selectedInterview.student_id || "-")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 bg-shnoor-lavender rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider mr-1" }, "Rating:"), renderStars(selectedInterview.rating))), (() => {
    const summary = buildSummary(
      selectedInterview.chat_history,
      selectedInterview.scored_questions,
      selectedInterview.ignored_questions
    );
    if (!summary) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "p-6 border-b border-shnoor-mist/30 space-y-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(BrainCircuit, { size: 16, className: "text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", null, "Interview Performance Summary")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3 items-center" }, /* @__PURE__ */ React.createElement("span", { className: `px-4 py-1.5 rounded-full text-sm font-bold border ${summary.gradeColor}` }, "Overall: ", summary.overallGrade), /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-shnoor-lavender text-shnoor-navy rounded-full text-xs font-semibold border border-shnoor-mist" }, summary.totalQ, " Questions Asked"), typeof summary.scoredTotal === "number" && /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-200" }, summary.scoredTotal, " Scored Technical"), typeof summary.ignoredTotal === "number" && /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200" }, summary.ignoredTotal, " Ignored / Non-scored"), /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-200" }, summary.answered, " Answered"), /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-semibold border border-red-200" }, summary.notAns, " Skipped / Not Answered"), /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200" }, summary.detailed, " Detailed Answers")), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, Object.entries(summary.groups).map(([skill, qs]) => {
      const counts = { detailed: 0, basic: 0, partial: 0, not_answered: 0 };
      qs.forEach((q) => {
        counts[q.eval] += 1;
      });
      const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      const meta = EVAL_META[dominant];
      return /* @__PURE__ */ React.createElement("div", { key: skill, className: "bg-shnoor-lavender/40 border border-shnoor-mist/40 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: `w-2.5 h-2.5 rounded-full ${meta.dot}` }), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-shnoor-navy text-sm" }, skill), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-shnoor-indigoMedium" }, "- ", qs.length, " question", qs.length > 1 ? "s" : "")), /* @__PURE__ */ React.createElement("span", { className: `text-[11px] font-bold px-2 py-0.5 rounded-full border ${meta.color}` }, meta.label)), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, qs.map((pair, idx) => /* @__PURE__ */ React.createElement("div", { key: `${skill}-${idx}`, className: "bg-white rounded-lg border border-shnoor-mist/50 p-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between gap-2 mb-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold text-shnoor-indigo leading-relaxed" }, "Q", idx + 1, ". ", pair.question), /* @__PURE__ */ React.createElement("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${EVAL_META[pair.eval].color}` }, EVAL_META[pair.eval].label)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-600 leading-relaxed pl-4 border-l-2 border-shnoor-mist" }, pair.answer || /* @__PURE__ */ React.createElement("span", { className: "italic text-gray-400" }, "No answer recorded"))))));
    })), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-shnoor-mist/40 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold uppercase tracking-wide text-shnoor-indigoMedium" }, "Answer Scoring"), /* @__PURE__ */ React.createElement("div", { className: "mt-3 space-y-2 text-sm text-shnoor-navy" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Content quality"), /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, selectedInterview.assessment_summary?.qualitySummary?.contentQuality ?? "-", "/5")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Clarity"), /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, selectedInterview.assessment_summary?.qualitySummary?.clarity ?? "-", "/5")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Relevance"), /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, selectedInterview.assessment_summary?.qualitySummary?.relevance ?? "-", "/5")))), /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-shnoor-mist/40 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold uppercase tracking-wide text-shnoor-indigoMedium" }, "Communication"), /* @__PURE__ */ React.createElement("div", { className: "mt-3 space-y-2 text-sm text-shnoor-navy" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Confidence"), /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, selectedInterview.assessment_summary?.communicationSummary?.confidence ?? "-", "/5")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Filler words"), /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, selectedInterview.assessment_summary?.communicationSummary?.fillerWords ?? 0)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, "Main tone"), /* @__PURE__ */ React.createElement("span", { className: "font-bold capitalize" }, selectedInterview.assessment_summary?.communicationSummary?.dominantTone || "-")))), /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-shnoor-mist/40 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold uppercase tracking-wide text-shnoor-indigoMedium" }, "Skill Breakdown"), /* @__PURE__ */ React.createElement("div", { className: "mt-3 space-y-2 text-xs text-shnoor-navy max-h-32 overflow-y-auto pr-1" }, Object.entries(selectedInterview.assessment_summary?.skillBreakdown || {}).length > 0 ? Object.entries(selectedInterview.assessment_summary?.skillBreakdown || {}).map(([skill, meta]) => /* @__PURE__ */ React.createElement("div", { key: skill, className: "flex items-center justify-between gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, skill), /* @__PURE__ */ React.createElement("span", null, meta.correct || 0, "/", meta.total || 0, " correct"))) : /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-indigoMedium" }, "Detailed skill split not available.")))));
  })(), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-shnoor-mist/30" }, /* @__PURE__ */ React.createElement("div", { className: "p-6" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(FileText, { size: 16, className: "text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", null, "Resume Text")), isGarbledResumeText(selectedInterview.resume_text) ? /* @__PURE__ */ React.createElement("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3" }, /* @__PURE__ */ React.createElement(TriangleAlert, { size: 16, className: "text-amber-500 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold text-amber-700 mb-1" }, "Resume text could not be extracted cleanly"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-amber-600" }, "The PDF uploaded by this student appears to be a scanned image or a non-text PDF. The raw PDF metadata was stored instead of readable content. Ask the student to re-upload a text-based PDF (e.g. exported from Word)."))) : /* @__PURE__ */ React.createElement("div", { className: "bg-shnoor-lavender/50 rounded-xl p-4 max-h-64 overflow-y-auto text-xs text-shnoor-navy leading-relaxed whitespace-pre-wrap border border-shnoor-mist/30" }, selectedInterview.resume_text || /* @__PURE__ */ React.createElement("span", { className: "text-gray-400 italic" }, "Resume text not captured.")), /* @__PURE__ */ React.createElement("div", { className: "mt-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(BrainCircuit, { size: 16, className: "text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", null, "Interview Summary")), /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-shnoor-mist/40 rounded-xl p-4 text-xs text-shnoor-navy leading-relaxed" }, /* @__PURE__ */ React.createElement("p", null, selectedInterview.assessment_summary?.text || selectedInterview.feedback_comment || "Summary not available for this interview."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3 mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-shnoor-lavender/60 rounded-lg p-3" }, /* @__PURE__ */ React.createElement("p", { className: "uppercase text-[10px] font-bold text-shnoor-indigoMedium" }, "Correct"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-bold" }, selectedInterview.correct_count ?? 0, "/", selectedInterview.total_scored_questions ?? 0)), /* @__PURE__ */ React.createElement("div", { className: "bg-shnoor-lavender/60 rounded-lg p-3" }, /* @__PURE__ */ React.createElement("p", { className: "uppercase text-[10px] font-bold text-shnoor-indigoMedium" }, "Decision"), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-bold" }, getDecisionLabel(selectedInterview.shortlisted)))))), Array.isArray(selectedInterview.ignored_questions) && selectedInterview.ignored_questions.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy mb-3" }, "Ignored / Non-scored Prompts"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 max-h-36 overflow-y-auto" }, selectedInterview.ignored_questions.map((item, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold" }, item.question), /* @__PURE__ */ React.createElement("p", { className: "mt-1" }, item.reason))))), /* @__PURE__ */ React.createElement("div", { className: "mt-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy mb-3" }, "AI Interview Violations"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2 text-xs" }, [
    ["No face", selectedInterview.proctoring_counts?.noFace],
    ["Multiple faces", selectedInterview.proctoring_counts?.multipleFaces],
    ["Phone", selectedInterview.proctoring_counts?.phoneDetected],
    ["Object", selectedInterview.proctoring_counts?.objectDetected],
    ["Voice/noise", selectedInterview.proctoring_counts?.voiceDetected],
    ["Tab switch", selectedInterview.proctoring_counts?.tabSwitch],
    ["Timeout", selectedInterview.proctoring_counts?.responseTimeout]
  ].map(([label, value2]) => /* @__PURE__ */ React.createElement("div", { key: label, className: "bg-shnoor-lavender/60 rounded-lg p-2 border border-shnoor-mist/30" }, /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-indigoMedium font-bold" }, label), /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-navy text-base font-bold" }, value2 || 0)))), Array.isArray(selectedInterview.proctoring_events) && selectedInterview.proctoring_events.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-3 space-y-2 max-h-40 overflow-y-auto" }, selectedInterview.proctoring_events.slice(-8).reverse().map((event, idx) => /* @__PURE__ */ React.createElement("div", { key: `${event.timestamp}-${idx}`, className: "bg-red-50 border border-red-100 rounded-lg p-2 text-xs text-red-700" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold" }, String(event.type || "").replace("_", " "), " - ", event.severity || "medium"), /* @__PURE__ */ React.createElement("p", null, event.message), /* @__PURE__ */ React.createElement("p", { className: "text-red-500 mt-1" }, event.timestamp ? formatDate(event.timestamp) : "-")))))), /* @__PURE__ */ React.createElement("div", { className: "p-6" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(BrainCircuit, { size: 16, className: "text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", null, "Interview Transcript")), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 h-[24rem] md:h-[33rem] overflow-y-auto pr-1" }, Array.isArray(selectedInterview.chat_history) && selectedInterview.chat_history.map((msg, idx) => {
    const role = msg?.role === "assistant" ? "ai" : msg?.role;
    return role === "ai" || role === "user" ? /* @__PURE__ */ React.createElement(
      "div",
      {
        key: idx,
        className: `flex ${role === "user" ? "justify-end" : "justify-start"}`
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `max-w-[85%] px-3 py-2 rounded-xl text-sm ${role === "ai" ? "bg-shnoor-lavender text-shnoor-navy rounded-tl-none" : "bg-shnoor-indigo text-white rounded-tr-none"}`
        },
        /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-bold opacity-60 block mb-0.5" }, role === "ai" ? "AI" : "Student"),
        msg.content
      )
    ) : null;
  }), (!selectedInterview.chat_history || selectedInterview.chat_history.length === 0) && /* @__PURE__ */ React.createElement("p", { className: "text-center text-shnoor-indigoMedium text-sm py-8" }, "No transcript available.")), Array.isArray(selectedInterview.scored_questions) && selectedInterview.scored_questions.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-shnoor-navy mb-3" }, "Scored Technical Questions"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 h-[24rem] md:h-[33rem] overflow-y-auto pr-1" }, selectedInterview.scored_questions.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.number, className: "border border-shnoor-mist/40 rounded-xl p-3 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3 mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold text-shnoor-indigo" }, "Q", item.number), /* @__PURE__ */ React.createElement("span", { className: `text-[10px] px-2 py-1 rounded-full font-bold uppercase ${item.verdict === "correct" ? "bg-shnoor-successLight text-shnoor-success" : item.verdict === "partially_correct" ? "bg-amber-100 text-amber-700" : "bg-shnoor-dangerLight text-shnoor-danger"}` }, String(item.verdict || "").replace("_", " "))), /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold text-shnoor-navy" }, item.question), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mt-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] px-2 py-1 rounded-full bg-shnoor-lavender text-shnoor-navy font-bold border border-shnoor-mist/40" }, item.skillCategory || detectSkill(item.question, item.answer)), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200" }, "Content ", item.quality?.contentQuality ?? "-", " / 5"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200" }, "Clarity ", item.quality?.clarity ?? "-", " / 5"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700 font-bold border border-green-200" }, "Relevance ", item.quality?.relevance ?? "-", " / 5"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 font-bold border border-amber-200" }, "Confidence ", item.communication?.confidenceScore ?? "-", " / 5")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium mt-2" }, item.reason), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-gray-500 mt-2" }, "Tone: ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold capitalize" }, item.communication?.tone || "neutral"), " | Filler words: ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, item.communication?.fillerCount ?? 0))))))))), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-t border-shnoor-mist/30 flex justify-end flex-shrink-0 bg-white print:hidden" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setSelectedInterview(null),
      className: "px-5 py-2.5 bg-shnoor-light hover:bg-shnoor-lavender text-shnoor-navy rounded-xl font-medium text-sm transition-colors"
    },
    "Close"
  )))), showScheduleModal && scheduleStudent && /* @__PURE__ */ React.createElement(
    InterviewSchedule_default,
    {
      student: scheduleStudent,
      onClose: () => {
        setShowScheduleModal(false);
        setScheduleStudent(null);
      },
      onScheduled: () => {
        setShowScheduleModal(false);
        setScheduleStudent(null);
        fetchResults();
        if (selectedInterview?.id) {
          fetchDetail(selectedInterview.id);
        }
      }
    }
  ));
  if (isTab) return renderContent();
  return /* @__PURE__ */ React.createElement(AdminLayout_default, { title: "AI Interview Results" }, renderContent(), /* @__PURE__ */ React.createElement("style", null, `
        @media print {
          body * { visibility: hidden; }
          .fixed.inset-0, .fixed.inset-0 * { visibility: visible; }
          .fixed.inset-0 {
            position: absolute !important;
            inset: 0 !important;
            background: white !important;
            padding: 0 !important;
          }
          .fixed.inset-0 > div {
            max-height: none !important;
            height: auto !important;
            width: 100% !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          .overflow-y-auto, .max-h-64, .max-h-72, .max-h-[90vh] {
            max-height: none !important;
            overflow: visible !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `));
};
var AIInterviewResults_default = AIInterviewResults;
export {
  AIInterviewResults_default as default
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-OE4NN4TA.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.14.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/brain-circuit.js:
lucide-react/dist/esm/icons/calendar.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/circle-x.js:
lucide-react/dist/esm/icons/download.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/leaf.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/log-out.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/message-square.js:
lucide-react/dist/esm/icons/moon.js:
lucide-react/dist/esm/icons/settings.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/sun.js:
lucide-react/dist/esm/icons/triangle-alert.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/icons/video.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

xlsx/xlsx.mjs:
  (*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com *)

xlsx/xlsx.mjs:
  (*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com *)
*/
