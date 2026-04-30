var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
        } catch (e2) {
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
              } catch (x2) {
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
        } catch (x2) {
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
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c2) {
            return c2;
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
          for (var i2 = 0; i2 < children.length; i2++)
            nameSoFar = children[i2], type = childKey + getElementKey(nameSoFar, i2), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i2 = getIteratorFn(children), "function" === typeof i2)
          for (i2 === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i2.call(children), i2 = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i2++), invokeCallback += mapIntoArray(
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
          var i2 = 0;
          try {
            for (; i2 < queue.length; i2++) {
              var callback = queue[i2];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i2] = callback;
                    queue.splice(0, i2);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i2 + 1), ReactSharedInternals.thrownErrors.push(error);
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
          var n2 = 0;
          mapChildren(children, function() {
            n2++;
          });
          return n2;
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
      exports.cache = function(fn2) {
        return function() {
          return fn2.apply(null, arguments);
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
          for (var i2 = 0; i2 < propName; i2++)
            JSCompiler_inline_result[i2] = arguments[i2 + 2];
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
        for (var i2 = 2; i2 < arguments.length; i2++)
          validateChildKeys(arguments[i2]);
        i2 = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i2[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i2.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i2 = 0; _i2 < childrenLength; _i2++)
            childArray[_i2] = arguments[_i2 + 2];
          Object.freeze && Object.freeze(childArray);
          i2.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i2[propName] && (i2[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i2,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i2,
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

// node_modules/@mediapipe/tasks-vision/vision_bundle.mjs
var vision_bundle_exports = {};
__export(vision_bundle_exports, {
  DrawingUtils: () => Ka,
  FaceDetector: () => pc,
  FaceLandmarker: () => Sc,
  FilesetResolver: () => Zo,
  GestureRecognizer: () => Fc,
  HandLandmarker: () => Pc,
  HolisticLandmarker: () => Dc,
  ImageClassifier: () => Bc,
  ImageEmbedder: () => Gc,
  ImageSegmenter: () => Wc,
  ImageSegmenterResult: () => jc,
  InteractiveSegmenter: () => Kc,
  InteractiveSegmenterResult: () => zc,
  MPImage: () => nc,
  MPMask: () => Na,
  ObjectDetector: () => Yc,
  PoseLandmarker: () => Zc,
  TaskRunner: () => pa,
  VisionTaskRunner: () => dc
});
function e(e2, n2) {
  t: {
    for (var r2 = ["CLOSURE_FLAGS"], i2 = t, s2 = 0; s2 < r2.length; s2++) if (null == (i2 = i2[r2[s2]])) {
      r2 = null;
      break t;
    }
    r2 = i2;
  }
  return null != (e2 = r2 && r2[e2]) ? e2 : n2;
}
function n() {
  throw Error("Invalid UTF8");
}
function r(t2, e2) {
  return e2 = String.fromCharCode.apply(null, e2), null == t2 ? e2 : t2 + e2;
}
function h(t2) {
  if (c) t2 = (a ||= new TextEncoder()).encode(t2);
  else {
    let n2 = 0;
    const r2 = new Uint8Array(3 * t2.length);
    for (let i2 = 0; i2 < t2.length; i2++) {
      var e2 = t2.charCodeAt(i2);
      if (e2 < 128) r2[n2++] = e2;
      else {
        if (e2 < 2048) r2[n2++] = e2 >> 6 | 192;
        else {
          if (e2 >= 55296 && e2 <= 57343) {
            if (e2 <= 56319 && i2 < t2.length) {
              const s2 = t2.charCodeAt(++i2);
              if (s2 >= 56320 && s2 <= 57343) {
                e2 = 1024 * (e2 - 55296) + s2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                continue;
              }
              i2--;
            }
            e2 = 65533;
          }
          r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
        }
        r2[n2++] = 63 & e2 | 128;
      }
    }
    t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
  }
  return t2;
}
function u(e2) {
  t.setTimeout((() => {
    throw e2;
  }), 0);
}
function p() {
  var e2 = t.navigator;
  return e2 && (e2 = e2.userAgent) ? e2 : "";
}
function m(t2) {
  return m[" "](t2), t2;
}
function v(t2) {
  const e2 = t2.length;
  let n2 = 3 * e2 / 4;
  n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
  const r2 = new Uint8Array(n2);
  let i2 = 0;
  return (function(t3, e3) {
    function n3(e4) {
      for (; r3 < t3.length; ) {
        const e5 = t3.charAt(r3++), n4 = _[e5];
        if (null != n4) return n4;
        if (!/^[\s\xa0]*$/.test(e5)) throw Error("Unknown base64 encoding at char: " + e5);
      }
      return e4;
    }
    E();
    let r3 = 0;
    for (; ; ) {
      const t4 = n3(-1), r4 = n3(0), i3 = n3(64), s2 = n3(64);
      if (64 === s2 && -1 === t4) break;
      e3(t4 << 2 | r4 >> 4), 64 != i3 && (e3(r4 << 4 & 240 | i3 >> 2), 64 != s2 && e3(i3 << 6 & 192 | s2));
    }
  })(t2, (function(t3) {
    r2[i2++] = t3;
  })), i2 !== n2 ? r2.subarray(0, i2) : r2;
}
function E() {
  if (!_) {
    _ = {};
    var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"];
    for (let n2 = 0; n2 < 5; n2++) {
      const r2 = t2.concat(e2[n2].split(""));
      y[n2] = r2;
      for (let t3 = 0; t3 < r2.length; t3++) {
        const e3 = r2[t3];
        void 0 === _[e3] && (_[e3] = t3);
      }
    }
  }
}
function k(t2) {
  return b[t2] || "";
}
function S(t2) {
  if (!T) return v(t2);
  t2 = A.test(t2) ? t2.replace(A, k) : t2, t2 = atob(t2);
  const e2 = new Uint8Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
  return e2;
}
function x(t2) {
  return w && null != t2 && t2 instanceof Uint8Array;
}
function R() {
  return M ||= new F(null, L);
}
function I(t2) {
  C(L);
  var e2 = t2.g;
  return null == (e2 = null == e2 || x(e2) ? e2 : "string" == typeof e2 ? S(e2) : null) ? e2 : t2.g = e2;
}
function C(t2) {
  if (t2 !== L) throw Error("illegal external caller");
}
function O(t2, e2) {
  t2.__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = e2;
}
function N(t2) {
  return O(t2 = Error(t2), "warning"), t2;
}
function U(t2, e2) {
  if (null != t2) {
    var n2 = P ??= {}, r2 = n2[t2] || 0;
    r2 >= e2 || (n2[t2] = r2 + 1, O(t2 = Error(), "incident"), u(t2));
  }
}
function D() {
  return "function" == typeof BigInt;
}
function G(t2, e2, n2 = false) {
  return "function" == typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? n2 && Symbol.for && t2 ? Symbol.for(t2) : null != t2 ? Symbol(t2) : /* @__PURE__ */ Symbol() : e2;
}
function nt(t2, e2) {
  B || Q in t2 || Z(t2, J), t2[Q] |= e2;
}
function rt(t2, e2) {
  B || Q in t2 || Z(t2, J), t2[Q] = e2;
}
function it(t2) {
  return nt(t2, 34), t2;
}
function st(t2) {
  return nt(t2, 8192), t2;
}
function at(t2, e2) {
  return void 0 === e2 ? t2.h !== ct && !!(2 & (0 | t2.v[Q])) : !!(2 & e2) && t2.h !== ct;
}
function ht(t2, e2) {
  if (null != t2) {
    if ("string" == typeof t2) t2 = t2 ? new F(t2, L) : R();
    else if (t2.constructor !== F) if (x(t2)) t2 = t2.length ? new F(new Uint8Array(t2), L) : R();
    else {
      if (!e2) throw Error();
      t2 = void 0;
    }
  }
  return t2;
}
function ft(t2, e2, n2) {
  const r2 = 128 & e2 ? 0 : -1, i2 = t2.length;
  var s2;
  (s2 = !!i2) && (s2 = null != (s2 = t2[i2 - 1]) && "object" == typeof s2 && s2.constructor === Object);
  const o2 = i2 + (s2 ? -1 : 0);
  for (e2 = 128 & e2 ? 1 : 0; e2 < o2; e2++) n2(e2 - r2, t2[e2]);
  if (s2) {
    t2 = t2[i2 - 1];
    for (const e3 in t2) !isNaN(e3) && n2(+e3, t2[e3]);
  }
}
function pt(t2) {
  return 128 & t2 ? dt : void 0;
}
function gt(t2) {
  return t2.Na = true, t2;
}
function Et(t2) {
  var e2 = t2;
  if (yt(e2)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e2)) throw Error(String(e2));
  } else if (mt(e2) && !Number.isSafeInteger(e2)) throw Error(String(e2));
  return vt ? BigInt(t2) : t2 = _t(t2) ? t2 ? "1" : "0" : yt(t2) ? t2.trim() || "0" : String(t2);
}
function St(t2, e2) {
  if (t2.length > e2.length) return false;
  if (t2.length < e2.length || t2 === e2) return true;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const r2 = t2[n2], i2 = e2[n2];
    if (r2 > i2) return false;
    if (r2 < i2) return true;
  }
}
function Ft(t2) {
  const e2 = t2 >>> 0;
  Rt = e2, It = (t2 - e2) / 4294967296 >>> 0;
}
function Mt(t2) {
  if (t2 < 0) {
    Ft(-t2);
    const [e2, n2] = jt(Rt, It);
    Rt = e2 >>> 0, It = n2 >>> 0;
  } else Ft(t2);
}
function Pt(t2) {
  const e2 = Lt ||= new DataView(new ArrayBuffer(8));
  e2.setFloat32(0, +t2, true), It = 0, Rt = e2.getUint32(0, true);
}
function Ct(t2, e2) {
  const n2 = 4294967296 * e2 + (t2 >>> 0);
  return Number.isSafeInteger(n2) ? n2 : Ut(t2, e2);
}
function Ot(t2, e2) {
  return Et(D() ? BigInt.asUintN(64, (BigInt(e2 >>> 0) << BigInt(32)) + BigInt(t2 >>> 0)) : Ut(t2, e2));
}
function Nt(t2, e2) {
  return D() ? Et(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(e2)) << BigInt(32)) + BigInt.asUintN(32, BigInt(t2)))) : Et(Bt(t2, e2));
}
function Ut(t2, e2) {
  if (t2 >>>= 0, (e2 >>>= 0) <= 2097151) var n2 = "" + (4294967296 * e2 + t2);
  else D() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, t2 >= 1e7 && (n2 += t2 / 1e7 >>> 0, t2 %= 1e7), n2 >= 1e7 && (e2 += n2 / 1e7 >>> 0, n2 %= 1e7), n2 = e2 + Dt(n2) + Dt(t2));
  return n2;
}
function Dt(t2) {
  return t2 = String(t2), "0000000".slice(t2.length) + t2;
}
function Bt(t2, e2) {
  if (2147483648 & e2) if (D()) t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
  else {
    const [n2, r2] = jt(t2, e2);
    t2 = "-" + Ut(n2, r2);
  }
  else t2 = Ut(t2, e2);
  return t2;
}
function Gt(t2) {
  if (t2.length < 16) Mt(Number(t2));
  else if (D()) t2 = BigInt(t2), Rt = Number(t2 & BigInt(4294967295)) >>> 0, It = Number(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const e2 = +("-" === t2[0]);
    It = Rt = 0;
    const n2 = t2.length;
    for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
      const e3 = Number(t2.slice(r2, i2));
      It *= 1e6, Rt = 1e6 * Rt + e3, Rt >= 4294967296 && (It += Math.trunc(Rt / 4294967296), It >>>= 0, Rt >>>= 0);
    }
    if (e2) {
      const [t3, e3] = jt(Rt, It);
      Rt = t3, It = e3;
    }
  }
}
function jt(t2, e2) {
  return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
}
function Vt(t2) {
  return Array.prototype.slice.call(t2);
}
function qt(t2) {
  if (null != t2 && "number" != typeof t2) throw Error(`Value of float/double field must be a number, found ${typeof t2}: ${t2}`);
  return t2;
}
function $t(t2) {
  return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
}
function Jt(t2) {
  if (null != t2 && "boolean" != typeof t2) {
    var e2 = typeof t2;
    throw Error(`Expected boolean but got ${"object" != e2 ? e2 : t2 ? Array.isArray(t2) ? "array" : e2 : "null"}: ${t2}`);
  }
  return t2;
}
function Zt(t2) {
  return null == t2 || "boolean" == typeof t2 ? t2 : "number" == typeof t2 ? !!t2 : void 0;
}
function te(t2) {
  switch (typeof t2) {
    case "bigint":
      return true;
    case "number":
      return zt(t2);
    case "string":
      return Qt.test(t2);
    default:
      return false;
  }
}
function ee(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2 && t2) t2 = +t2;
  else if ("number" != typeof t2) return;
  return zt(t2) ? 0 | t2 : void 0;
}
function ne(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2 && t2) t2 = +t2;
  else if ("number" != typeof t2) return;
  return zt(t2) ? t2 >>> 0 : void 0;
}
function re2(t2) {
  const e2 = t2.length;
  return ("-" === t2[0] ? e2 < 20 || 20 === e2 && t2 <= "-9223372036854775808" : e2 < 19 || 19 === e2 && t2 <= "9223372036854775807") ? t2 : (Gt(t2), Bt(Rt, It));
}
function ie(t2) {
  if (t2 = Kt(t2), !Wt(t2)) {
    Mt(t2);
    var e2 = Rt, n2 = It;
    (t2 = 2147483648 & n2) && (n2 = ~n2 >>> 0, 0 == (e2 = 1 + ~e2 >>> 0) && (n2 = n2 + 1 >>> 0)), t2 = "number" == typeof (e2 = Ct(e2, n2)) ? t2 ? -e2 : e2 : t2 ? "-" + e2 : e2;
  }
  return t2;
}
function se(t2) {
  var e2 = Kt(Number(t2));
  return Wt(e2) ? String(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), re2(t2));
}
function oe(t2) {
  var e2 = Kt(Number(t2));
  return Wt(e2) ? Et(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), D() ? Et(Xt(64, BigInt(t2))) : Et(re2(t2)));
}
function ae(t2) {
  return Wt(t2) ? t2 = Et(ie(t2)) : (t2 = Kt(t2), Wt(t2) ? t2 = String(t2) : (Mt(t2), t2 = Bt(Rt, It)), t2 = Et(t2)), t2;
}
function ce(t2) {
  const e2 = typeof t2;
  return null == t2 ? t2 : "bigint" === e2 ? Et(Xt(64, t2)) : te(t2) ? "string" === e2 ? oe(t2) : ae(t2) : void 0;
}
function he(t2) {
  if ("string" != typeof t2) throw Error();
  return t2;
}
function ue(t2) {
  if (null != t2 && "string" != typeof t2) throw Error();
  return t2;
}
function le(t2) {
  return null == t2 || "string" == typeof t2 ? t2 : void 0;
}
function fe(t2, e2, n2, r2) {
  return null != t2 && t2[q] === ot ? t2 : Array.isArray(t2) ? ((r2 = (n2 = 0 | t2[Q]) | 32 & r2 | 2 & r2) !== n2 && rt(t2, r2), new e2(t2)) : (n2 ? 2 & r2 ? ((t2 = e2[V]) || (it((t2 = new e2()).v), t2 = e2[V] = t2), e2 = t2) : e2 = new e2() : e2 = void 0, e2);
}
function de(t2, e2, n2) {
  if (e2) t: {
    if (!te(e2 = t2)) throw N("int64");
    switch (typeof e2) {
      case "string":
        e2 = oe(e2);
        break t;
      case "bigint":
        e2 = Et(Xt(64, e2));
        break t;
      default:
        e2 = ae(e2);
    }
  }
  else e2 = ce(t2);
  return null == (t2 = e2) ? n2 ? Yt : void 0 : t2;
}
function _e(t2) {
  return t2;
}
function ve(t2) {
  if (2 & t2.J) throw Error("Cannot mutate an immutable Map");
}
function we(t2, e2, n2, r2, i2, s2) {
  return t2 = fe(t2, r2, n2, s2), i2 && (t2 = Xe(t2)), t2;
}
function Te(t2) {
  return [t2, this.get(t2)];
}
function be() {
  return Ae ||= new Ee(it([]), void 0, void 0, void 0, pe);
}
function ke(t2) {
  return H ? t2[H] : void 0;
}
function Se(t2, e2) {
  for (const n2 in t2) !isNaN(n2) && e2(t2, +n2, t2[n2]);
}
function Re(t2, e2) {
  e2 < 100 || U(z, 1);
}
function Ie(t2, e2, n2, r2) {
  const i2 = void 0 !== r2;
  r2 = !!r2;
  var s2, o2 = H;
  !i2 && B && o2 && (s2 = t2[o2]) && Se(s2, Re), o2 = [];
  var a2 = t2.length;
  let c2;
  s2 = 4294967295;
  let h2 = false;
  const u2 = !!(64 & e2), l2 = u2 ? 128 & e2 ? 0 : -1 : void 0;
  1 & e2 || (c2 = a2 && t2[a2 - 1], null != c2 && "object" == typeof c2 && c2.constructor === Object ? s2 = --a2 : c2 = void 0, !u2 || 128 & e2 || i2 || (h2 = true, s2 = s2 - l2 + l2)), e2 = void 0;
  for (var f2 = 0; f2 < a2; f2++) {
    let i3 = t2[f2];
    if (null != i3 && null != (i3 = n2(i3, r2))) if (u2 && f2 >= s2) {
      const t3 = f2 - l2;
      (e2 ??= {})[t3] = i3;
    } else o2[f2] = i3;
  }
  if (c2) for (let t3 in c2) {
    if (null == (a2 = c2[t3]) || null == (a2 = n2(a2, r2))) continue;
    let i3;
    f2 = +t3, u2 && !Number.isNaN(f2) && (i3 = f2 + l2) < s2 ? o2[i3] = a2 : (e2 ??= {})[t3] = a2;
  }
  return e2 && (h2 ? o2.push(e2) : o2[s2] = e2), i2 && H && (t2 = ke(t2)) && t2 instanceof xe && (o2[H] = (function(t3) {
    const e3 = new xe();
    return Se(t3, ((t4, n3, r3) => {
      e3[n3] = Vt(r3);
    })), e3.da = t3.da, e3;
  })(t2)), o2;
}
function Fe(t2) {
  return t2[0] = Me(t2[0]), t2[1] = Me(t2[1]), t2;
}
function Me(t2) {
  switch (typeof t2) {
    case "number":
      return Number.isFinite(t2) ? t2 : "" + t2;
    case "bigint":
      return wt(t2) ? Number(t2) : "" + t2;
    case "boolean":
      return t2 ? 1 : 0;
    case "object":
      if (Array.isArray(t2)) {
        var e2 = 0 | t2[Q];
        return 0 === t2.length && 1 & e2 ? void 0 : Ie(t2, e2, Me);
      }
      if (null != t2 && t2[q] === ot) return Oe(t2);
      if (t2 instanceof F) {
        if (null == (e2 = t2.g)) t2 = "";
        else if ("string" == typeof e2) t2 = e2;
        else {
          if (T) {
            for (var n2 = "", r2 = 0, i2 = e2.length - 10240; r2 < i2; ) n2 += String.fromCharCode.apply(null, e2.subarray(r2, r2 += 10240));
            n2 += String.fromCharCode.apply(null, r2 ? e2.subarray(r2) : e2), e2 = btoa(n2);
          } else {
            void 0 === n2 && (n2 = 0), E(), n2 = y[n2], r2 = Array(Math.floor(e2.length / 3)), i2 = n2[64] || "";
            let t3 = 0, h2 = 0;
            for (; t3 < e2.length - 2; t3 += 3) {
              var s2 = e2[t3], o2 = e2[t3 + 1], a2 = e2[t3 + 2], c2 = n2[s2 >> 2];
              s2 = n2[(3 & s2) << 4 | o2 >> 4], o2 = n2[(15 & o2) << 2 | a2 >> 6], a2 = n2[63 & a2], r2[h2++] = c2 + s2 + o2 + a2;
            }
            switch (c2 = 0, a2 = i2, e2.length - t3) {
              case 2:
                a2 = n2[(15 & (c2 = e2[t3 + 1])) << 2] || i2;
              case 1:
                e2 = e2[t3], r2[h2] = n2[e2 >> 2] + n2[(3 & e2) << 4 | c2 >> 4] + a2 + i2;
            }
            e2 = r2.join("");
          }
          t2 = t2.g = e2;
        }
        return t2;
      }
      return t2 instanceof Ee ? t2 = 0 !== t2.size ? t2.V(Fe) : void 0 : void 0;
  }
  return t2;
}
function Oe(t2) {
  return Ie(t2 = t2.v, 0 | t2[Q], Me);
}
function Ne(t2, e2) {
  return Ue(t2, e2[0], e2[1]);
}
function Ue(t2, e2, n2, r2 = 0) {
  if (null == t2) {
    var i2 = 32;
    n2 ? (t2 = [n2], i2 |= 128) : t2 = [], e2 && (i2 = -16760833 & i2 | (1023 & e2) << 14);
  } else {
    if (!Array.isArray(t2)) throw Error("narr");
    if (i2 = 0 | t2[Q], d && 1 & i2) throw Error("rfarr");
    if (2048 & i2 && !(2 & i2) && (function() {
      if (d) throw Error("carr");
      U(Y, 5);
    })(), 256 & i2) throw Error("farr");
    if (64 & i2) return (i2 | r2) !== i2 && rt(t2, i2 | r2), t2;
    if (n2 && (i2 |= 128, n2 !== t2[0])) throw Error("mid");
    t: {
      i2 |= 64;
      var s2 = (n2 = t2).length;
      if (s2) {
        var o2 = s2 - 1;
        const t3 = n2[o2];
        if (null != t3 && "object" == typeof t3 && t3.constructor === Object) {
          if ((o2 -= e2 = 128 & i2 ? 0 : -1) >= 1024) throw Error("pvtlmt");
          for (var a2 in t3) (s2 = +a2) < o2 && (n2[s2 + e2] = t3[a2], delete t3[a2]);
          i2 = -16760833 & i2 | (1023 & o2) << 14;
          break t;
        }
      }
      if (e2) {
        if ((a2 = Math.max(e2, s2 - (128 & i2 ? 0 : -1))) > 1024) throw Error("spvt");
        i2 = -16760833 & i2 | (1023 & a2) << 14;
      }
    }
  }
  return rt(t2, 64 | i2 | r2), t2;
}
function De(t2, e2) {
  if ("object" != typeof t2) return t2;
  if (Array.isArray(t2)) {
    var n2 = 0 | t2[Q];
    return 0 === t2.length && 1 & n2 ? void 0 : Be(t2, n2, e2);
  }
  if (null != t2 && t2[q] === ot) return je(t2);
  if (t2 instanceof Ee) {
    if (2 & (e2 = t2.J)) return t2;
    if (!t2.size) return;
    if (n2 = it(t2.V()), t2.K) for (t2 = 0; t2 < n2.length; t2++) {
      const r2 = n2[t2];
      let i2 = r2[1];
      i2 = null == i2 || "object" != typeof i2 ? void 0 : null != i2 && i2[q] === ot ? je(i2) : Array.isArray(i2) ? Be(i2, 0 | i2[Q], !!(32 & e2)) : void 0, r2[1] = i2;
    }
    return n2;
  }
  return t2 instanceof F ? t2 : void 0;
}
function Be(t2, e2, n2) {
  return 2 & e2 || (!n2 || 4096 & e2 || 16 & e2 ? t2 = Ve(t2, e2, false, n2 && !(16 & e2)) : (nt(t2, 34), 4 & e2 && Object.freeze(t2))), t2;
}
function Ge(t2, e2, n2) {
  return t2 = new t2.constructor(e2), n2 && (t2.h = ct), t2.m = ct, t2;
}
function je(t2) {
  const e2 = t2.v, n2 = 0 | e2[Q];
  return at(t2, n2) ? t2 : Ke(t2, e2, n2) ? Ge(t2, e2) : Ve(e2, n2);
}
function Ve(t2, e2, n2, r2) {
  return r2 ??= !!(34 & e2), t2 = Ie(t2, e2, De, r2), r2 = 32, n2 && (r2 |= 2), rt(t2, e2 = 16769217 & e2 | r2), t2;
}
function Xe(t2) {
  const e2 = t2.v, n2 = 0 | e2[Q];
  return at(t2, n2) ? Ke(t2, e2, n2) ? Ge(t2, e2, true) : new t2.constructor(Ve(e2, n2, false)) : t2;
}
function He(t2) {
  if (t2.h !== ct) return false;
  var e2 = t2.v;
  return nt(e2 = Ve(e2, 0 | e2[Q]), 2048), t2.v = e2, t2.h = void 0, t2.m = void 0, true;
}
function We(t2) {
  if (!He(t2) && at(t2, 0 | t2.v[Q])) throw Error();
}
function ze(t2, e2) {
  void 0 === e2 && (e2 = 0 | t2[Q]), 32 & e2 && !(4096 & e2) && rt(t2, 4096 | e2);
}
function Ke(t2, e2, n2) {
  return !!(2 & n2) || !(!(32 & n2) || 4096 & n2) && (rt(e2, 2 | n2), t2.h = ct, true);
}
function $e(t2, e2, n2, r2, i2) {
  if (null !== (e2 = Je(t2.v, e2, n2, i2)) || r2 && t2.m !== ct) return e2;
}
function Je(t2, e2, n2, r2) {
  if (-1 === e2) return null;
  const i2 = e2 + (n2 ? 0 : -1), s2 = t2.length - 1;
  let o2, a2;
  if (!(s2 < 1 + (n2 ? 0 : -1))) {
    if (i2 >= s2) if (o2 = t2[s2], null != o2 && "object" == typeof o2 && o2.constructor === Object) n2 = o2[e2], a2 = true;
    else {
      if (i2 !== s2) return;
      n2 = o2;
    }
    else n2 = t2[i2];
    if (r2 && null != n2) {
      if (null == (r2 = r2(n2))) return r2;
      if (!Object.is(r2, n2)) return a2 ? o2[e2] = r2 : t2[i2] = r2, r2;
    }
    return n2;
  }
}
function Ze(t2, e2, n2, r2) {
  We(t2), Qe(t2 = t2.v, 0 | t2[Q], e2, n2, r2);
}
function Qe(t2, e2, n2, r2, i2) {
  const s2 = n2 + (i2 ? 0 : -1);
  var o2 = t2.length - 1;
  if (o2 >= 1 + (i2 ? 0 : -1) && s2 >= o2) {
    const i3 = t2[o2];
    if (null != i3 && "object" == typeof i3 && i3.constructor === Object) return i3[n2] = r2, e2;
  }
  return s2 <= o2 ? (t2[s2] = r2, e2) : (void 0 !== r2 && (n2 >= (o2 = (e2 ??= 0 | t2[Q]) >> 14 & 1023 || 536870912) ? null != r2 && (t2[o2 + (i2 ? 0 : -1)] = { [n2]: r2 }) : t2[s2] = r2), e2);
}
function tn() {
  return void 0 === lt ? 2 : 4;
}
function en(t2, e2, n2, r2, i2) {
  let s2 = t2.v, o2 = 0 | s2[Q];
  r2 = at(t2, o2) ? 1 : r2, i2 = !!i2 || 3 === r2, 2 === r2 && He(t2) && (s2 = t2.v, o2 = 0 | s2[Q]);
  let a2 = (t2 = rn(s2, e2)) === tt ? 7 : 0 | t2[Q], c2 = sn(a2, o2);
  var h2 = !(4 & c2);
  if (h2) {
    4 & c2 && (t2 = Vt(t2), a2 = 0, c2 = An(c2, o2), o2 = Qe(s2, o2, e2, t2));
    let r3 = 0, i3 = 0;
    for (; r3 < t2.length; r3++) {
      const e3 = n2(t2[r3]);
      null != e3 && (t2[i3++] = e3);
    }
    i3 < r3 && (t2.length = i3), n2 = -513 & (4 | c2), c2 = n2 &= -1025, c2 &= -4097;
  }
  return c2 !== a2 && (rt(t2, c2), 2 & c2 && Object.freeze(t2)), nn(t2, c2, s2, o2, e2, r2, h2, i2);
}
function nn(t2, e2, n2, r2, i2, s2, o2, a2) {
  let c2 = e2;
  return 1 === s2 || 4 === s2 && (2 & e2 || !(16 & e2) && 32 & r2) ? on2(e2) || ((e2 |= !t2.length || o2 && !(4096 & e2) || 32 & r2 && !(4096 & e2 || 16 & e2) ? 2 : 256) !== c2 && rt(t2, e2), Object.freeze(t2)) : (2 === s2 && on2(e2) && (t2 = Vt(t2), c2 = 0, e2 = An(e2, r2), r2 = Qe(n2, r2, i2, t2)), on2(e2) || (a2 || (e2 |= 16), e2 !== c2 && rt(t2, e2))), 2 & e2 || !(4096 & e2 || 16 & e2) || ze(n2, r2), t2;
}
function rn(t2, e2, n2) {
  return t2 = Je(t2, e2, n2), Array.isArray(t2) ? t2 : tt;
}
function sn(t2, e2) {
  return 2 & e2 && (t2 |= 2), 1 | t2;
}
function on2(t2) {
  return !!(2 & t2) && !!(4 & t2) || !!(256 & t2);
}
function an(t2) {
  return ht(t2, true);
}
function cn(t2) {
  t2 = Vt(t2);
  for (let e2 = 0; e2 < t2.length; e2++) {
    const n2 = t2[e2] = Vt(t2[e2]);
    Array.isArray(n2[1]) && (n2[1] = it(n2[1]));
  }
  return st(t2);
}
function hn(t2, e2, n2, r2) {
  We(t2), Qe(t2 = t2.v, 0 | t2[Q], e2, ("0" === r2 ? 0 === Number(n2) : n2 === r2) ? void 0 : n2);
}
function un(t2, e2, n2) {
  if (2 & e2) throw Error();
  const r2 = pt(e2);
  let i2 = rn(t2, n2, r2), s2 = i2 === tt ? 7 : 0 | i2[Q], o2 = sn(s2, e2);
  return (2 & o2 || on2(o2) || 16 & o2) && (o2 === s2 || on2(o2) || rt(i2, o2), i2 = Vt(i2), s2 = 0, o2 = An(o2, e2), Qe(t2, e2, n2, i2, r2)), o2 &= -13, o2 !== s2 && rt(i2, o2), i2;
}
function ln(t2, e2) {
  var n2 = Cs;
  return pn(fn(t2 = t2.v), t2, void 0, n2) === e2 ? e2 : -1;
}
function fn(t2) {
  if (B) return t2[X] ?? (t2[X] = /* @__PURE__ */ new Map());
  if (X in t2) return t2[X];
  const e2 = /* @__PURE__ */ new Map();
  return Object.defineProperty(t2, X, { value: e2 }), e2;
}
function dn(t2, e2, n2, r2, i2) {
  const s2 = fn(t2), o2 = pn(s2, t2, e2, n2, i2);
  return o2 !== r2 && (o2 && (e2 = Qe(t2, e2, o2, void 0, i2)), s2.set(n2, r2)), e2;
}
function pn(t2, e2, n2, r2, i2) {
  let s2 = t2.get(r2);
  if (null != s2) return s2;
  s2 = 0;
  for (let t3 = 0; t3 < r2.length; t3++) {
    const o2 = r2[t3];
    null != Je(e2, o2, i2) && (0 !== s2 && (n2 = Qe(e2, n2, s2, void 0, i2)), s2 = o2);
  }
  return t2.set(r2, s2), s2;
}
function gn(t2, e2, n2) {
  let r2 = 0 | t2[Q];
  const i2 = pt(r2), s2 = Je(t2, n2, i2);
  let o2;
  if (null != s2 && s2[q] === ot) {
    if (!at(s2)) return He(s2), s2.v;
    o2 = s2.v;
  } else Array.isArray(s2) && (o2 = s2);
  if (o2) {
    const t3 = 0 | o2[Q];
    2 & t3 && (o2 = Ve(o2, t3));
  }
  return o2 = Ne(o2, e2), o2 !== s2 && Qe(t2, r2, n2, o2, i2), o2;
}
function mn(t2, e2, n2, r2, i2) {
  let s2 = false;
  if (null != (r2 = Je(t2, r2, i2, ((t3) => {
    const r3 = fe(t3, n2, false, e2);
    return s2 = r3 !== t3 && null != r3, r3;
  })))) return s2 && !at(r2) && ze(t2, e2), r2;
}
function yn(t2, e2, n2, r2) {
  let i2 = t2.v, s2 = 0 | i2[Q];
  if (null == (e2 = mn(i2, s2, e2, n2, r2))) return e2;
  if (s2 = 0 | i2[Q], !at(t2, s2)) {
    const o2 = Xe(e2);
    o2 !== e2 && (He(t2) && (i2 = t2.v, s2 = 0 | i2[Q]), s2 = Qe(i2, s2, n2, e2 = o2, r2), ze(i2, s2));
  }
  return e2;
}
function _n(t2, e2, n2, r2, i2, s2, o2, a2) {
  var c2 = at(t2, n2);
  s2 = c2 ? 1 : s2, o2 = !!o2 || 3 === s2, c2 = a2 && !c2, (2 === s2 || c2) && He(t2) && (n2 = 0 | (e2 = t2.v)[Q]);
  var h2 = (t2 = rn(e2, i2)) === tt ? 7 : 0 | t2[Q], u2 = sn(h2, n2);
  if (a2 = !(4 & u2)) {
    var l2 = t2, f2 = n2;
    const e3 = !!(2 & u2);
    e3 && (f2 |= 2);
    let i3 = !e3, s3 = true, o3 = 0, a3 = 0;
    for (; o3 < l2.length; o3++) {
      const t3 = fe(l2[o3], r2, false, f2);
      if (t3 instanceof r2) {
        if (!e3) {
          const e4 = at(t3);
          i3 &&= !e4, s3 &&= e4;
        }
        l2[a3++] = t3;
      }
    }
    a3 < o3 && (l2.length = a3), u2 |= 4, u2 = s3 ? -4097 & u2 : 4096 | u2, u2 = i3 ? 8 | u2 : -9 & u2;
  }
  if (u2 !== h2 && (rt(t2, u2), 2 & u2 && Object.freeze(t2)), c2 && !(8 & u2 || !t2.length && (1 === s2 || 4 === s2 && (2 & u2 || !(16 & u2) && 32 & n2)))) {
    for (on2(u2) && (t2 = Vt(t2), u2 = An(u2, n2), n2 = Qe(e2, n2, i2, t2)), r2 = t2, c2 = u2, h2 = 0; h2 < r2.length; h2++) (l2 = r2[h2]) !== (u2 = Xe(l2)) && (r2[h2] = u2);
    c2 |= 8, rt(t2, u2 = c2 = r2.length ? 4096 | c2 : -4097 & c2);
  }
  return nn(t2, u2, e2, n2, i2, s2, a2, o2);
}
function vn(t2, e2, n2) {
  const r2 = t2.v;
  return _n(t2, r2, 0 | r2[Q], e2, n2, tn(), false, true);
}
function En(t2) {
  return null == t2 && (t2 = void 0), t2;
}
function wn(t2, e2, n2, r2, i2) {
  return Ze(t2, n2, r2 = En(r2), i2), r2 && !at(r2) && ze(t2.v), t2;
}
function Tn(t2, e2, n2, r2) {
  t: {
    var i2 = r2 = En(r2);
    We(t2);
    const s2 = t2.v;
    let o2 = 0 | s2[Q];
    if (null == i2) {
      const t3 = fn(s2);
      if (pn(t3, s2, o2, n2) !== e2) break t;
      t3.set(n2, 0);
    } else o2 = dn(s2, o2, n2, e2);
    Qe(s2, o2, e2, i2);
  }
  r2 && !at(r2) && ze(t2.v);
}
function An(t2, e2) {
  return -273 & (2 & e2 ? 2 | t2 : -3 & t2);
}
function bn(t2, e2, n2, r2) {
  var i2 = r2;
  We(t2), t2 = _n(t2, r2 = t2.v, 0 | r2[Q], n2, e2, 2, true), i2 = null != i2 ? i2 : new n2(), t2.push(i2), e2 = n2 = t2 === tt ? 7 : 0 | t2[Q], (i2 = at(i2)) ? (n2 &= -9, 1 === t2.length && (n2 &= -4097)) : n2 |= 4096, n2 !== e2 && rt(t2, n2), i2 || ze(r2);
}
function kn(t2, e2, n2) {
  return ee($e(t2, e2, void 0, n2));
}
function Sn(t2, e2) {
  return $e(t2, e2, void 0, void 0, $t) ?? 0;
}
function xn(t2, e2, n2) {
  if (null != n2) {
    if ("number" != typeof n2) throw N("int32");
    if (!zt(n2)) throw N("int32");
    n2 |= 0;
  }
  Ze(t2, e2, n2);
}
function Ln(t2, e2, n2) {
  Ze(t2, e2, qt(n2));
}
function Rn(t2, e2, n2) {
  hn(t2, e2, ue(n2), "");
}
function In(t2, e2, n2) {
  {
    We(t2);
    const o2 = t2.v;
    let a2 = 0 | o2[Q];
    if (null == n2) Qe(o2, a2, e2);
    else {
      var r2 = t2 = n2 === tt ? 7 : 0 | n2[Q], i2 = on2(t2), s2 = i2 || Object.isFrozen(n2);
      for (i2 || (t2 = 0), s2 || (n2 = Vt(n2), r2 = 0, t2 = An(t2, a2), s2 = false), t2 |= 5, t2 |= (4 & t2 ? 512 & t2 ? 512 : 1024 & t2 ? 1024 : 0 : void 0) ?? 1024, i2 = 0; i2 < n2.length; i2++) {
        const e3 = n2[i2], o3 = he(e3);
        Object.is(e3, o3) || (s2 && (n2 = Vt(n2), r2 = 0, t2 = An(t2, a2), s2 = false), n2[i2] = o3);
      }
      t2 !== r2 && (s2 && (n2 = Vt(n2), t2 = An(t2, a2)), rt(n2, t2)), Qe(o2, a2, e2, n2);
    }
  }
}
function Fn(t2, e2, n2) {
  We(t2), en(t2, e2, le, 2, true).push(he(n2));
}
function Pn(t2, e2) {
  if ("string" == typeof t2) return new Mn(S(t2), e2);
  if (Array.isArray(t2)) return new Mn(new Uint8Array(t2), e2);
  if (t2.constructor === Uint8Array) return new Mn(t2, false);
  if (t2.constructor === ArrayBuffer) return t2 = new Uint8Array(t2), new Mn(t2, false);
  if (t2.constructor === F) return e2 = I(t2) || new Uint8Array(0), new Mn(e2, true, t2);
  if (t2 instanceof Uint8Array) return t2 = t2.constructor === Uint8Array ? t2 : new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), new Mn(t2, false);
  throw Error();
}
function Cn(t2, e2) {
  let n2, r2 = 0, i2 = 0, s2 = 0;
  const o2 = t2.h;
  let a2 = t2.g;
  do {
    n2 = o2[a2++], r2 |= (127 & n2) << s2, s2 += 7;
  } while (s2 < 32 && 128 & n2);
  if (s2 > 32) for (i2 |= (127 & n2) >> 4, s2 = 3; s2 < 32 && 128 & n2; s2 += 7) n2 = o2[a2++], i2 |= (127 & n2) << s2;
  if (Gn(t2, a2), !(128 & n2)) return e2(r2 >>> 0, i2 >>> 0);
  throw Error();
}
function On(t2) {
  let e2 = 0, n2 = t2.g;
  const r2 = n2 + 10, i2 = t2.h;
  for (; n2 < r2; ) {
    const r3 = i2[n2++];
    if (e2 |= r3, 0 == (128 & r3)) return Gn(t2, n2), !!(127 & e2);
  }
  throw Error();
}
function Nn(t2) {
  const e2 = t2.h;
  let n2 = t2.g, r2 = e2[n2++], i2 = 127 & r2;
  if (128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 7, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 14, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 21, 128 & r2 && (r2 = e2[n2++], i2 |= r2 << 28, 128 & r2 && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++]))))) throw Error();
  return Gn(t2, n2), i2;
}
function Un(t2) {
  return Nn(t2) >>> 0;
}
function Dn(t2) {
  var e2 = t2.h;
  const n2 = t2.g;
  var r2 = e2[n2], i2 = e2[n2 + 1];
  const s2 = e2[n2 + 2];
  return e2 = e2[n2 + 3], Gn(t2, t2.g + 4), t2 = 2 * ((i2 = (r2 << 0 | i2 << 8 | s2 << 16 | e2 << 24) >>> 0) >> 31) + 1, r2 = i2 >>> 23 & 255, i2 &= 8388607, 255 == r2 ? i2 ? NaN : t2 * (1 / 0) : 0 == r2 ? 1401298464324817e-60 * t2 * i2 : t2 * Math.pow(2, r2 - 150) * (i2 + 8388608);
}
function Bn(t2) {
  return Nn(t2);
}
function Gn(t2, e2) {
  if (t2.g = e2, e2 > t2.l) throw Error();
}
function jn(t2, e2) {
  if (e2 < 0) throw Error();
  const n2 = t2.g;
  if ((e2 = n2 + e2) > t2.l) throw Error();
  return t2.g = e2, n2;
}
function Vn(t2, e2) {
  if (0 == e2) return R();
  var n2 = jn(t2, e2);
  return t2.Y && t2.j ? n2 = t2.h.subarray(n2, n2 + e2) : (t2 = t2.h, n2 = n2 === (e2 = n2 + e2) ? new Uint8Array(0) : xt ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), 0 == n2.length ? R() : new F(n2, L);
}
function Hn(t2, e2, n2, r2) {
  if (Qn.length) {
    const i2 = Qn.pop();
    return i2.o(r2), i2.g.init(t2, e2, n2, r2), i2;
  }
  return new Zn(t2, e2, n2, r2);
}
function Wn(t2) {
  t2.g.clear(), t2.l = -1, t2.h = -1, Qn.length < 100 && Qn.push(t2);
}
function zn(t2) {
  var e2 = t2.g;
  if (e2.g == e2.l) return false;
  t2.m = t2.g.g;
  var n2 = Un(t2.g);
  if (e2 = n2 >>> 3, !((n2 &= 7) >= 0 && n2 <= 5)) throw Error();
  if (e2 < 1) throw Error();
  return t2.l = e2, t2.h = n2, true;
}
function Kn(t2) {
  switch (t2.h) {
    case 0:
      0 != t2.h ? Kn(t2) : On(t2.g);
      break;
    case 1:
      Gn(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (2 != t2.h) Kn(t2);
      else {
        var e2 = Un(t2.g);
        Gn(t2 = t2.g, t2.g + e2);
      }
      break;
    case 5:
      Gn(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (e2 = t2.l; ; ) {
        if (!zn(t2)) throw Error();
        if (4 == t2.h) {
          if (t2.l != e2) throw Error();
          break;
        }
        Kn(t2);
      }
      break;
    default:
      throw Error();
  }
}
function Yn(t2, e2, n2) {
  const r2 = t2.g.l;
  var i2 = Un(t2.g);
  let s2 = (i2 = t2.g.g + i2) - r2;
  if (s2 <= 0 && (t2.g.l = i2, n2(e2, t2, void 0, void 0, void 0), s2 = i2 - t2.g.g), s2) throw Error();
  return t2.g.g = i2, t2.g.l = r2, e2;
}
function qn(t2) {
  var e2 = Un(t2.g), a2 = jn(t2 = t2.g, e2);
  if (t2 = t2.h, o) {
    var c2, h2 = t2;
    (c2 = s) || (c2 = s = new TextDecoder("utf-8", { fatal: true })), e2 = a2 + e2, h2 = 0 === a2 && e2 === h2.length ? h2 : h2.subarray(a2, e2);
    try {
      var u2 = c2.decode(h2);
    } catch (t3) {
      if (void 0 === i) {
        try {
          c2.decode(new Uint8Array([128]));
        } catch (t4) {
        }
        try {
          c2.decode(new Uint8Array([97])), i = true;
        } catch (t4) {
          i = false;
        }
      }
      throw !i && (s = void 0), t3;
    }
  } else {
    e2 = (u2 = a2) + e2, a2 = [];
    let i2, s2 = null;
    for (; u2 < e2; ) {
      var l2 = t2[u2++];
      l2 < 128 ? a2.push(l2) : l2 < 224 ? u2 >= e2 ? n() : (i2 = t2[u2++], l2 < 194 || 128 != (192 & i2) ? (u2--, n()) : a2.push((31 & l2) << 6 | 63 & i2)) : l2 < 240 ? u2 >= e2 - 1 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 224 === l2 && i2 < 160 || 237 === l2 && i2 >= 160 || 128 != (192 & (c2 = t2[u2++])) ? (u2--, n()) : a2.push((15 & l2) << 12 | (63 & i2) << 6 | 63 & c2)) : l2 <= 244 ? u2 >= e2 - 2 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || i2 - 144 + (l2 << 28) >> 30 != 0 || 128 != (192 & (c2 = t2[u2++])) || 128 != (192 & (h2 = t2[u2++])) ? (u2--, n()) : (l2 = (7 & l2) << 18 | (63 & i2) << 12 | (63 & c2) << 6 | 63 & h2, l2 -= 65536, a2.push(55296 + (l2 >> 10 & 1023), 56320 + (1023 & l2)))) : n(), a2.length >= 8192 && (s2 = r(s2, a2), a2.length = 0);
    }
    u2 = r(s2, a2);
  }
  return u2;
}
function $n(t2) {
  const e2 = Un(t2.g);
  return Vn(t2.g, e2);
}
function Jn(t2, e2, n2) {
  var r2 = Un(t2.g);
  for (r2 = t2.g.g + r2; t2.g.g < r2; ) n2.push(e2(t2.g));
}
function tr(t2) {
  return t2 ? /^\d+$/.test(t2) ? (Gt(t2), new er(Rt, It)) : null : nr ||= new er(0, 0);
}
function rr(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (Gt(t2), new ir(Rt, It)) : null : sr ||= new ir(0, 0);
}
function or(t2, e2, n2) {
  for (; n2 > 0 || e2 > 127; ) t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
  t2.g.push(e2);
}
function ar(t2, e2) {
  for (; e2 > 127; ) t2.g.push(127 & e2 | 128), e2 >>>= 7;
  t2.g.push(e2);
}
function cr(t2, e2) {
  if (e2 >= 0) ar(t2, e2);
  else {
    for (let n2 = 0; n2 < 9; n2++) t2.g.push(127 & e2 | 128), e2 >>= 7;
    t2.g.push(1);
  }
}
function hr(t2) {
  var e2 = Rt;
  t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
}
function ur(t2, e2) {
  0 !== e2.length && (t2.l.push(e2), t2.h += e2.length);
}
function lr(t2, e2, n2) {
  ar(t2.g, 8 * e2 + n2);
}
function fr(t2, e2) {
  return lr(t2, e2, 2), e2 = t2.g.end(), ur(t2, e2), e2.push(t2.h), e2;
}
function dr(t2, e2) {
  var n2 = e2.pop();
  for (n2 = t2.h + t2.g.length() - n2; n2 > 127; ) e2.push(127 & n2 | 128), n2 >>>= 7, t2.h++;
  e2.push(n2), t2.h++;
}
function pr(t2, e2, n2) {
  lr(t2, e2, 2), ar(t2.g, n2.length), ur(t2, t2.g.end()), ur(t2, n2);
}
function gr(t2, e2, n2, r2) {
  null != n2 && (e2 = fr(t2, e2), r2(n2, t2), dr(t2, e2));
}
function mr() {
  const t2 = class {
    constructor() {
      throw Error();
    }
  };
  return Object.setPrototypeOf(t2, t2.prototype), t2;
}
function xr(t2, e2, n2) {
  var r2 = t2.v;
  H && H in r2 && (r2 = r2[H]) && delete r2[e2.g], e2.h ? e2.j(t2, e2.h, e2.g, n2, e2.l) : e2.j(t2, e2.g, n2, e2.l);
}
function Ir(t2, e2) {
  return new Rr(t2, e2, yr);
}
function Fr(t2, e2, n2, r2, i2) {
  gr(t2, n2, Xr(e2, r2), i2);
}
function jr(t2, e2, n2, r2) {
  var i2 = r2[t2];
  if (i2) return i2;
  (i2 = {}).qa = r2, i2.T = (function(t3) {
    switch (typeof t3) {
      case "boolean":
        return Pe ||= [0, void 0, true];
      case "number":
        return t3 > 0 ? void 0 : 0 === t3 ? Ce ||= [0, void 0] : [-t3, void 0];
      case "string":
        return [0, t3];
      case "object":
        return t3;
    }
  })(r2[0]);
  var s2 = r2[1];
  let o2 = 1;
  s2 && s2.constructor === Object && (i2.ba = s2, "function" == typeof (s2 = r2[++o2]) && (i2.ma = true, Br ??= s2, Gr ??= r2[o2 + 1], s2 = r2[o2 += 2]));
  const a2 = {};
  for (; s2 && Array.isArray(s2) && s2.length && "number" == typeof s2[0] && s2[0] > 0; ) {
    for (var c2 = 0; c2 < s2.length; c2++) a2[s2[c2]] = s2;
    s2 = r2[++o2];
  }
  for (c2 = 1; void 0 !== s2; ) {
    let t3;
    "number" == typeof s2 && (c2 += s2, s2 = r2[++o2]);
    var h2 = void 0;
    if (s2 instanceof Rr ? t3 = s2 : (t3 = Mr, o2--), t3?.l) {
      s2 = r2[++o2], h2 = r2;
      var u2 = o2;
      "function" == typeof s2 && (s2 = s2(), h2[u2] = s2), h2 = s2;
    }
    for (u2 = c2 + 1, "number" == typeof (s2 = r2[++o2]) && s2 < 0 && (u2 -= s2, s2 = r2[++o2]); c2 < u2; c2++) {
      const r3 = a2[c2];
      h2 ? n2(i2, c2, t3, h2, r3) : e2(i2, c2, t3, r3);
    }
  }
  return r2[t2] = i2;
}
function Vr(t2) {
  return Array.isArray(t2) ? t2[0] instanceof Rr ? t2 : [Pr, t2] : [t2, void 0];
}
function Xr(t2, e2) {
  return t2 instanceof Lr ? t2.v : Array.isArray(t2) ? Ne(t2, e2) : void 0;
}
function Hr(t2, e2, n2, r2) {
  const i2 = n2.g;
  t2[e2] = r2 ? (t3, e3, n3) => i2(t3, e3, n3, r2) : i2;
}
function Wr(t2, e2, n2, r2, i2) {
  const s2 = n2.g;
  let o2, a2;
  t2[e2] = (t3, e3, n3) => s2(t3, e3, n3, a2 ||= jr(Or, Hr, Wr, r2).T, o2 ||= zr(r2), i2);
}
function zr(t2) {
  let e2 = t2[Nr];
  if (null != e2) return e2;
  const n2 = jr(Or, Hr, Wr, t2);
  return e2 = n2.ma ? (t3, e3) => Br(t3, e3, n2) : (t3, e3) => {
    for (; zn(e3) && 4 != e3.h; ) {
      var r2 = e3.l, i2 = n2[r2];
      if (null == i2) {
        var s2 = n2.ba;
        s2 && (s2 = s2[r2]) && (null != (s2 = Yr(s2)) && (i2 = n2[r2] = s2));
      }
      if (null == i2 || !i2(e3, t3, r2)) {
        if (i2 = (s2 = e3).m, Kn(s2), s2.ha) var o2 = void 0;
        else o2 = s2.g.g - i2, s2.g.g = i2, o2 = Vn(s2.g, o2);
        i2 = void 0, s2 = t3, o2 && ((i2 = s2[H] ?? (s2[H] = new xe()))[r2] ?? (i2[r2] = [])).push(o2);
      }
    }
    return (t3 = ke(t3)) && (t3.da = n2.qa[Dr]), true;
  }, t2[Nr] = e2, t2[Dr] = Kr.bind(t2), e2;
}
function Kr(t2, e2, n2, r2) {
  var i2 = this[Or];
  const s2 = this[Nr], o2 = Ne(void 0, i2.T), a2 = ke(t2);
  if (a2) {
    var c2 = false, h2 = i2.ba;
    if (h2) {
      if (i2 = (e3, n3, i3) => {
        if (0 !== i3.length) if (h2[n3]) for (const t3 of i3) {
          e3 = Hn(t3);
          try {
            c2 = true, s2(o2, e3);
          } finally {
            Wn(e3);
          }
        }
        else r2?.(t2, n3, i3);
      }, null == e2) Se(a2, i2);
      else if (null != a2) {
        const t3 = a2[e2];
        t3 && i2(a2, e2, t3);
      }
      if (c2) {
        let r3 = 0 | t2[Q];
        if (2 & r3 && 2048 & r3 && !n2?.Ka) throw Error();
        const i3 = pt(r3), s3 = (e3, s4) => {
          if (null != Je(t2, e3, i3)) {
            if (1 === n2?.Qa) return;
            throw Error();
          }
          null != s4 && (r3 = Qe(t2, r3, e3, s4, i3)), delete a2[e3];
        };
        null == e2 ? ft(o2, 0 | o2[Q], ((t3, e3) => {
          s3(t3, e3);
        })) : s3(e2, Je(o2, e2, i3));
      }
    }
  }
}
function Yr(t2) {
  const e2 = (t2 = Vr(t2))[0].g;
  if (t2 = t2[1]) {
    const n2 = zr(t2), r2 = jr(Or, Hr, Wr, t2).T;
    return (t3, i2, s2) => e2(t3, i2, s2, r2, n2);
  }
  return e2;
}
function qr(t2, e2, n2) {
  t2[e2] = n2.h;
}
function $r(t2, e2, n2, r2) {
  let i2, s2;
  const o2 = n2.h;
  t2[e2] = (t3, e3, n3) => o2(t3, e3, n3, s2 ||= jr(Cr, qr, $r, r2).T, i2 ||= Jr(r2));
}
function Jr(t2) {
  let e2 = t2[Ur];
  if (!e2) {
    const n2 = jr(Cr, qr, $r, t2);
    e2 = (t3, e3) => Zr(t3, e3, n2), t2[Ur] = e2;
  }
  return e2;
}
function Zr(t2, e2, n2) {
  ft(t2, 0 | t2[Q], ((t3, r2) => {
    if (null != r2) {
      var i2 = (function(t4, e3) {
        var n3 = t4[e3];
        if (n3) return n3;
        if ((n3 = t4.ba) && (n3 = n3[e3])) {
          var r3 = (n3 = Vr(n3))[0].h;
          if (n3 = n3[1]) {
            const e4 = Jr(n3), i3 = jr(Cr, qr, $r, n3).T;
            n3 = t4.ma ? Gr(i3, e4) : (t5, n4, s2) => r3(t5, n4, s2, i3, e4);
          } else n3 = r3;
          return t4[e3] = n3;
        }
      })(n2, t3);
      i2 ? i2(e2, r2, t3) : t3 < 500 || U(K, 3);
    }
  })), (t2 = ke(t2)) && Se(t2, ((t3, n3, r2) => {
    for (ur(e2, e2.g.end()), t3 = 0; t3 < r2.length; t3++) ur(e2, I(r2[t3]) || new Uint8Array(0));
  }));
}
function ti(t2, e2) {
  if (Array.isArray(e2)) {
    var n2 = 0 | e2[Q];
    if (4 & n2) return e2;
    for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
      const n3 = t2(e2[r2]);
      null != n3 && (e2[i2++] = n3);
    }
    return i2 < r2 && (e2.length = i2), (t2 = -1537 & (5 | n2)) !== n2 && rt(e2, t2), 2 & t2 && Object.freeze(e2), e2;
  }
}
function ei(t2, e2, n2) {
  return new Rr(t2, e2, n2);
}
function ni(t2, e2, n2) {
  return new Rr(t2, e2, n2);
}
function ri(t2, e2, n2) {
  Qe(t2, 0 | t2[Q], e2, n2, pt(0 | t2[Q]));
}
function si(t2, e2, n2) {
  null != (e2 = $t(e2)) && (lr(t2, n2, 5), t2 = t2.g, Pt(e2), hr(t2));
}
function oi(t2, e2, n2) {
  if (e2 = (function(t3) {
    if (null == t3) return t3;
    const e3 = typeof t3;
    if ("bigint" === e3) return String(Xt(64, t3));
    if (te(t3)) {
      if ("string" === e3) return se(t3);
      if ("number" === e3) return ie(t3);
    }
  })(e2), null != e2) {
    if ("string" == typeof e2) rr(e2);
    if (null != e2) switch (lr(t2, n2, 0), typeof e2) {
      case "number":
        t2 = t2.g, Mt(e2), or(t2, Rt, It);
        break;
      case "bigint":
        n2 = BigInt.asUintN(64, e2), n2 = new ir(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), or(t2.g, n2.h, n2.g);
        break;
      default:
        n2 = rr(e2), or(t2.g, n2.h, n2.g);
    }
  }
}
function ai(t2, e2, n2) {
  null != (e2 = ee(e2)) && null != e2 && (lr(t2, n2, 0), cr(t2.g, e2));
}
function ci(t2, e2, n2) {
  null != (e2 = Zt(e2)) && (lr(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
}
function hi(t2, e2, n2) {
  null != (e2 = le(e2)) && pr(t2, n2, h(e2));
}
function ui(t2, e2, n2, r2, i2) {
  gr(t2, n2, Xr(e2, r2), i2);
}
function li(t2, e2, n2) {
  null != (e2 = null == e2 || "string" == typeof e2 || e2 instanceof F ? e2 : void 0) && pr(t2, n2, Pn(e2, true).buffer);
}
function fi(t2, e2, n2) {
  null != (e2 = ne(e2)) && null != e2 && (lr(t2, n2, 0), ar(t2.g, e2));
}
function di(t2, e2, n2) {
  return (5 === t2.h || 2 === t2.h) && (e2 = un(e2, 0 | e2[Q], n2), 2 == t2.h ? Jn(t2, Dn, e2) : e2.push(Dn(t2.g)), true);
}
function Ni(t2, e2) {
  return new Oi(t2, e2);
}
function Ui(t2, e2) {
  return (n2, r2) => {
    {
      const s2 = { ea: true };
      r2 && Object.assign(s2, r2), n2 = Hn(n2, void 0, void 0, s2);
      try {
        const r3 = new t2(), s3 = r3.v;
        zr(e2)(s3, n2);
        var i2 = r3;
      } finally {
        Wn(n2);
      }
    }
    return i2;
  };
}
function Di(t2) {
  return function() {
    const e2 = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const t3 = this.g;
            return this.g = [], t3;
          }
        }();
      }
    }();
    Zr(this.v, e2, jr(Cr, qr, $r, t2)), ur(e2, e2.g.end());
    const n2 = new Uint8Array(e2.h), r2 = e2.l, i2 = r2.length;
    let s2 = 0;
    for (let t3 = 0; t3 < i2; t3++) {
      const e3 = r2[t3];
      n2.set(e3, s2), s2 += e3.length;
    }
    return e2.l = [n2], n2;
  };
}
function Xi(t2) {
  var e2;
  return void 0 === ji && (ji = (function() {
    let t3 = null;
    if (!Vi) return t3;
    try {
      const e3 = (t4) => t4;
      t3 = Vi.createPolicy("goog#html", { createHTML: e3, createScript: e3, createScriptURL: e3 });
    } catch (t4) {
    }
    return t3;
  })()), t2 = (e2 = ji) ? e2.createScriptURL(t2) : t2, new class {
    constructor(t3) {
      this.g = t3;
    }
    toString() {
      return this.g + "";
    }
  }(t2);
}
function Hi(t2, ...e2) {
  if (0 === e2.length) return Xi(t2[0]);
  let n2 = t2[0];
  for (let r2 = 0; r2 < e2.length; r2++) n2 += encodeURIComponent(e2[r2]) + t2[r2 + 1];
  return Xi(n2);
}
function ns(t2, e2) {
  Fn(t2, 3, e2);
}
function rs(t2, e2) {
  Fn(t2, 4, e2);
}
function cs(t2, e2) {
  bn(t2, 1, is, e2);
}
function hs(t2, e2) {
  Fn(t2, 10, e2);
}
function us(t2, e2) {
  Fn(t2, 15, e2);
}
function Bo(t2, e2) {
  return e2 = e2 ? e2.clone() : new Ns(), void 0 !== t2.displayNamesLocale ? Ze(e2, 1, ue(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && Ze(e2, 1), void 0 !== t2.maxResults ? xn(e2, 2, t2.maxResults) : "maxResults" in t2 && Ze(e2, 2), void 0 !== t2.scoreThreshold ? Ln(e2, 3, t2.scoreThreshold) : "scoreThreshold" in t2 && Ze(e2, 3), void 0 !== t2.categoryAllowlist ? In(e2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && Ze(e2, 4), void 0 !== t2.categoryDenylist ? In(e2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && Ze(e2, 5), e2;
}
function Go(t2) {
  const e2 = Number(t2);
  return Number.isSafeInteger(e2) ? e2 : String(t2);
}
function jo(t2, e2 = -1, n2 = "") {
  return { categories: t2.map(((t3) => ({ index: kn(t3, 1) ?? 0 ?? -1, score: Sn(t3, 2) ?? 0, categoryName: le($e(t3, 3)) ?? "" ?? "", displayName: le($e(t3, 4)) ?? "" ?? "" }))), headIndex: e2, headName: n2 };
}
function Vo(t2) {
  const e2 = { classifications: vn(t2, Rs, 1).map(((t3) => jo(yn(t3, gs, 4)?.g() ?? [], kn(t3, 2) ?? 0, le($e(t3, 3)) ?? ""))) };
  return null != (function(t3) {
    return null == t3 ? t3 : "bigint" == typeof t3 ? (wt(t3) ? t3 = Number(t3) : (t3 = Xt(64, t3), t3 = wt(t3) ? Number(t3) : String(t3)), t3) : te(t3) ? "number" == typeof t3 ? ie(t3) : se(t3) : void 0;
  })($e(t2, 2, void 0, void 0, ce)) && (e2.timestampMs = Go($e(t2, 2, void 0, void 0, ce) ?? Ye)), e2;
}
function Xo(t2) {
  var e2 = en(t2, 3, $t, tn()), n2 = en(t2, 2, ee, tn()), r2 = en(t2, 1, le, tn()), i2 = en(t2, 9, le, tn());
  const s2 = { categories: [], keypoints: [] };
  for (let t3 = 0; t3 < e2.length; t3++) s2.categories.push({ score: e2[t3], index: n2[t3] ?? -1, categoryName: r2[t3] ?? "", displayName: i2[t3] ?? "" });
  if ((e2 = yn(t2, Es, 4)?.l()) && (s2.boundingBox = { originX: kn(e2, 1, qe) ?? 0, originY: kn(e2, 2, qe) ?? 0, width: kn(e2, 3, qe) ?? 0, height: kn(e2, 4, qe) ?? 0, angle: 0 }), yn(t2, Es, 4)?.g().length) for (const e3 of yn(t2, Es, 4).g()) s2.keypoints.push({ x: $e(e3, 1, void 0, qe, $t) ?? 0, y: $e(e3, 2, void 0, qe, $t) ?? 0, score: $e(e3, 4, void 0, qe, $t) ?? 0, label: le($e(e3, 3, void 0, qe)) ?? "" });
  return s2;
}
function Ho(t2) {
  const e2 = [];
  for (const n2 of vn(t2, bs, 1)) e2.push({ x: Sn(n2, 1) ?? 0, y: Sn(n2, 2) ?? 0, z: Sn(n2, 3) ?? 0, visibility: Sn(n2, 4) ?? 0 });
  return e2;
}
function Wo(t2) {
  const e2 = [];
  for (const n2 of vn(t2, Ts, 1)) e2.push({ x: Sn(n2, 1) ?? 0, y: Sn(n2, 2) ?? 0, z: Sn(n2, 3) ?? 0, visibility: Sn(n2, 4) ?? 0 });
  return e2;
}
function zo(t2) {
  return Array.from(t2, ((t3) => t3 > 127 ? t3 - 256 : t3));
}
function Ko(t2, e2) {
  if (t2.length !== e2.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${e2.length}).`);
  let n2 = 0, r2 = 0, i2 = 0;
  for (let s2 = 0; s2 < t2.length; s2++) n2 += t2[s2] * e2[s2], r2 += t2[s2] * t2[s2], i2 += e2[s2] * e2[s2];
  if (r2 <= 0 || i2 <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return n2 / Math.sqrt(r2 * i2);
}
async function $o(t2) {
  if (t2) return true;
  if (void 0 === Yo) try {
    await WebAssembly.instantiate(qo), Yo = true;
  } catch {
    Yo = false;
  }
  return Yo;
}
async function Jo(t2, e2, n2) {
  return { wasmLoaderPath: `${e2}/${t2}_${n2 = `wasm${n2 ? "_module" : ""}${await $o(n2) ? "" : "_nosimd"}_internal`}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm` };
}
function Qo() {
  var t2 = navigator;
  return "undefined" != typeof OffscreenCanvas && (!(function(t3 = navigator) {
    return (t3 = t3.userAgent).includes("Safari") && !t3.includes("Chrome");
  })(t2) || !!((t2 = t2.userAgent.match(/Version\/([\d]+).*Safari/)) && t2.length >= 1 && Number(t2[1]) >= 17));
}
async function ta(t2) {
  if ("function" != typeof importScripts) {
    const e2 = document.createElement("script");
    return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise(((t3, n2) => {
      e2.addEventListener("load", (() => {
        t3();
      }), false), e2.addEventListener("error", ((t4) => {
        n2(t4);
      }), false), document.body.appendChild(e2);
    }));
  }
  try {
    importScripts(t2.toString());
  } catch (e2) {
    if (!(e2 instanceof TypeError)) throw e2;
    await self.import(t2.toString());
  }
}
function ea(t2) {
  return void 0 !== t2.videoWidth ? [t2.videoWidth, t2.videoHeight] : void 0 !== t2.naturalWidth ? [t2.naturalWidth, t2.naturalHeight] : void 0 !== t2.displayWidth ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
}
function na(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.i.stringToNewUTF8(e2)), t2.i._free(e2);
}
function ra(t2, e2, n2) {
  if (!t2.i.canvas) throw Error("No OpenGL canvas configured.");
  if (n2 ? t2.i._bindTextureToStream(n2) : t2.i._bindTextureToCanvas(), !(n2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, e2), t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, false);
  const [r2, i2] = ea(e2);
  return !t2.l || r2 === t2.i.canvas.width && i2 === t2.i.canvas.height || (t2.i.canvas.width = r2, t2.i.canvas.height = i2), [r2, i2];
}
function ia(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const r2 = new Uint32Array(e2.length);
  for (let n3 = 0; n3 < e2.length; n3++) r2[n3] = t2.i.stringToNewUTF8(e2[n3]);
  e2 = t2.i._malloc(4 * r2.length), t2.i.HEAPU32.set(r2, e2 >> 2), n2(e2);
  for (const e3 of r2) t2.i._free(e3);
  t2.i._free(e2);
}
function sa(t2, e2, n2) {
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = n2;
}
function oa(t2, e2, n2) {
  let r2 = [];
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = (t3, e3, i2) => {
    e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
  };
}
async function aa(t2, e2, n2, r2) {
  return t2 = await (async (t3, e3, n3, r3, i2) => {
    if (e3 && await ta(e3), !self.ModuleFactory) throw Error("ModuleFactory not set.");
    if (n3 && (await ta(n3), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && i2 && ((e3 = self.Module).locateFile = i2.locateFile, i2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = i2.mainScriptUrlOrBlob)), i2 = await self.ModuleFactory(self.Module || i2), self.ModuleFactory = self.Module = void 0, new t3(i2, r3);
  })(t2, n2.wasmLoaderPath, n2.assetLoaderPath, e2, { locateFile: (t3) => t3.endsWith(".wasm") ? n2.wasmBinaryPath.toString() : n2.assetBinaryPath && t3.endsWith(".data") ? n2.assetBinaryPath.toString() : t3 }), await t2.o(r2), t2;
}
function ca(t2, e2) {
  const n2 = yn(t2.baseOptions, Vs, 1) || new Vs();
  "string" == typeof e2 ? (Ze(n2, 2, ue(e2)), Ze(n2, 1)) : e2 instanceof Uint8Array && (Ze(n2, 1, ht(e2, false)), Ze(n2, 2)), wn(t2.baseOptions, 0, 1, n2);
}
function ha(t2) {
  try {
    const e2 = t2.H.length;
    if (1 === e2) throw Error(t2.H[0].message);
    if (e2 > 1) throw Error("Encountered multiple errors: " + t2.H.map(((t3) => t3.message)).join(", "));
  } finally {
    t2.H = [];
  }
}
function ua(t2, e2) {
  t2.C = Math.max(t2.C, e2);
}
function la(t2, e2) {
  t2.B = new is(), Rn(t2.B, 2, "PassThroughCalculator"), ns(t2.B, "free_memory"), rs(t2.B, "free_memory_unused_out"), hs(e2, "free_memory"), cs(e2, t2.B);
}
function fa(t2, e2) {
  ns(t2.B, e2), rs(t2.B, e2 + "_unused_out");
}
function da(t2) {
  t2.g.addBoolToStream(true, "free_memory", t2.C);
}
function ga(t2, e2) {
  if (!t2) throw Error(`Unable to obtain required WebGL resource: ${e2}`);
  return t2;
}
function ya(t2, e2, n2) {
  const r2 = t2.g;
  if (n2 = ga(r2.createShader(n2), "Failed to create WebGL shader"), r2.shaderSource(n2, e2), r2.compileShader(n2), !r2.getShaderParameter(n2, r2.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r2.getShaderInfoLog(n2)}`);
  return r2.attachShader(t2.h, n2), n2;
}
function _a(t2, e2) {
  const n2 = t2.g, r2 = ga(n2.createVertexArray(), "Failed to create vertex array");
  n2.bindVertexArray(r2);
  const i2 = ga(n2.createBuffer(), "Failed to create buffer");
  n2.bindBuffer(n2.ARRAY_BUFFER, i2), n2.enableVertexAttribArray(t2.O), n2.vertexAttribPointer(t2.O, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), n2.STATIC_DRAW);
  const s2 = ga(n2.createBuffer(), "Failed to create buffer");
  return n2.bindBuffer(n2.ARRAY_BUFFER, s2), n2.enableVertexAttribArray(t2.L), n2.vertexAttribPointer(t2.L, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array(e2 ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), n2.STATIC_DRAW), n2.bindBuffer(n2.ARRAY_BUFFER, null), n2.bindVertexArray(null), new ma(n2, r2, i2, s2);
}
function va(t2, e2) {
  if (t2.g) {
    if (e2 !== t2.g) throw Error("Cannot change GL context once initialized");
  } else t2.g = e2;
}
function Ea(t2, e2, n2, r2) {
  return va(t2, e2), t2.h || (t2.m(), t2.D()), n2 ? (t2.u || (t2.u = _a(t2, true)), n2 = t2.u) : (t2.A || (t2.A = _a(t2, false)), n2 = t2.A), e2.useProgram(t2.h), n2.bind(), t2.l(), t2 = r2(), n2.g.bindVertexArray(null), t2;
}
function wa(t2, e2, n2) {
  return va(t2, e2), t2 = ga(e2.createTexture(), "Failed to create texture"), e2.bindTexture(e2.TEXTURE_2D, t2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, n2 ?? e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, n2 ?? e2.LINEAR), e2.bindTexture(e2.TEXTURE_2D, null), t2;
}
function Ta(t2, e2, n2) {
  va(t2, e2), t2.B || (t2.B = ga(e2.createFramebuffer(), "Failed to create framebuffe.")), e2.bindFramebuffer(e2.FRAMEBUFFER, t2.B), e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, n2, 0);
}
function Aa(t2) {
  t2.g?.bindFramebuffer(t2.g.FRAMEBUFFER, null);
}
function xa(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find(((t3) => t3 instanceof Uint8Array));
    case 1:
      return t2.g.find(((t3) => t3 instanceof Float32Array));
    case 2:
      return t2.g.find(((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function La(t2) {
  var e2 = xa(t2, 1);
  if (!e2) {
    if (e2 = xa(t2, 0)) e2 = new Float32Array(e2).map(((t3) => t3 / 255));
    else {
      e2 = new Float32Array(t2.width * t2.height);
      const r2 = Ia(t2);
      var n2 = Ma(t2);
      if (Ta(n2, r2, Ra(t2)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
        n2 = new Float32Array(t2.width * t2.height * 4), r2.readPixels(0, 0, t2.width, t2.height, r2.RGBA, r2.FLOAT, n2);
        for (let t3 = 0, r3 = 0; t3 < e2.length; ++t3, r3 += 4) e2[t3] = n2[r3];
      } else r2.readPixels(0, 0, t2.width, t2.height, r2.RED, r2.FLOAT, e2);
    }
    t2.g.push(e2);
  }
  return e2;
}
function Ra(t2) {
  let e2 = xa(t2, 2);
  if (!e2) {
    const n2 = Ia(t2);
    e2 = Pa(t2);
    const r2 = La(t2), i2 = Fa(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, i2, t2.width, t2.height, 0, n2.RED, n2.FLOAT, r2), Ca(t2);
  }
  return e2;
}
function Ia(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t2.h || (t2.h = ga(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function Fa(t2) {
  if (t2 = Ia(t2), !Oa) if (t2.getExtension("EXT_color_buffer_float") && t2.getExtension("OES_texture_float_linear") && t2.getExtension("EXT_float_blend")) Oa = t2.R32F;
  else {
    if (!t2.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    Oa = t2.R16F;
  }
  return Oa;
}
function Ma(t2) {
  return t2.l || (t2.l = new ba()), t2.l;
}
function Pa(t2) {
  const e2 = Ia(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = xa(t2, 2);
  return n2 || (n2 = wa(Ma(t2), e2, t2.m ? e2.LINEAR : e2.NEAREST), t2.g.push(n2), t2.j = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
}
function Ca(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
function Ba(t2) {
  return { ...Da, fillColor: (t2 = t2 || {}).color, ...t2 };
}
function Ga(t2, e2) {
  return t2 instanceof Function ? t2(e2) : t2;
}
function ja(t2, e2, n2) {
  return Math.max(Math.min(e2, n2), Math.min(Math.max(e2, n2), t2));
}
function Va(t2) {
  if (!t2.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return t2.l;
}
function Xa(t2) {
  if (!t2.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
  return t2.j;
}
function Ha(t2, e2, n2) {
  if (e2.R()) n2(e2.N());
  else {
    const r2 = e2.ka() ? e2.ia() : e2.ja();
    t2.m = t2.m ?? new ba();
    const i2 = Xa(t2);
    n2((t2 = new Na([r2], e2.m, false, i2.canvas, t2.m, e2.width, e2.height)).N()), t2.close();
  }
}
function Wa(t2, e2, n2, r2) {
  const i2 = (function(t3) {
    return t3.g || (t3.g = new ka()), t3.g;
  })(t2), s2 = Xa(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2;
  Ea(i2, s2, true, (() => {
    !(function(t4, e3, n3, r3) {
      const i3 = t4.g;
      if (i3.activeTexture(i3.TEXTURE0), i3.bindTexture(i3.TEXTURE_2D, e3), i3.activeTexture(i3.TEXTURE1), i3.bindTexture(i3.TEXTURE_2D, t4.C), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, i3.RGBA, i3.UNSIGNED_BYTE, n3), t4.I && (function(t5, e4) {
        if (t5 !== e4) return false;
        t5 = t5.entries(), e4 = e4.entries();
        for (const [r4, i4] of t5) {
          t5 = r4;
          const s3 = i4;
          var n4 = e4.next();
          if (n4.done) return false;
          const [o3, a2] = n4.value;
          if (n4 = a2, t5 !== o3 || s3[0] !== n4[0] || s3[1] !== n4[1] || s3[2] !== n4[2] || s3[3] !== n4[3]) return false;
        }
        return !!e4.next().done;
      })(t4.I, r3)) i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j);
      else {
        t4.I = r3;
        const e4 = Array(1024).fill(0);
        r3.forEach(((t5, n4) => {
          if (4 !== t5.length) throw Error(`Color at index ${n4} is not a four-channel value.`);
          e4[4 * n4] = t5[0], e4[4 * n4 + 1] = t5[1], e4[4 * n4 + 2] = t5[2], e4[4 * n4 + 3] = t5[3];
        })), i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, 256, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, new Uint8Array(e4));
      }
    })(i2, e2, o2, r2), s2.clearColor(0, 0, 0, 0), s2.clear(s2.COLOR_BUFFER_BIT), s2.drawArrays(s2.TRIANGLE_FAN, 0, 4);
    const t3 = i2.g;
    t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
  }));
}
function za(t2, e2, n2, r2) {
  const i2 = Xa(t2), s2 = (function(t3) {
    return t3.h || (t3.h = new Sa()), t3.h;
  })(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2, a2 = Array.isArray(r2) ? new ImageData(new Uint8ClampedArray(r2), 1, 1) : r2;
  Ea(s2, i2, true, (() => {
    var t3 = s2.g;
    t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, e2), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, s2.j), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, o2), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, s2.C), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, a2), i2.clearColor(0, 0, 0, 0), i2.clear(i2.COLOR_BUFFER_BIT), i2.drawArrays(i2.TRIANGLE_FAN, 0, 4), i2.bindTexture(i2.TEXTURE_2D, null), (t3 = s2.g).activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
  }));
}
function Ya(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find(((t3) => t3 instanceof ImageData));
    case 1:
      return t2.g.find(((t3) => "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap));
    case 2:
      return t2.g.find(((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function qa(t2) {
  var e2 = Ya(t2, 0);
  if (!e2) {
    e2 = Ja(t2);
    const n2 = Za(t2), r2 = new Uint8Array(t2.width * t2.height * 4);
    Ta(n2, e2, $a(t2)), e2.readPixels(0, 0, t2.width, t2.height, e2.RGBA, e2.UNSIGNED_BYTE, r2), Aa(n2), e2 = new ImageData(new Uint8ClampedArray(r2.buffer), t2.width, t2.height), t2.g.push(e2);
  }
  return e2;
}
function $a(t2) {
  let e2 = Ya(t2, 2);
  if (!e2) {
    const n2 = Ja(t2);
    e2 = Qa(t2);
    const r2 = Ya(t2, 1) || qa(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, r2), tc(t2);
  }
  return e2;
}
function Ja(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t2.h || (t2.h = ga(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function Za(t2) {
  return t2.l || (t2.l = new ba()), t2.l;
}
function Qa(t2) {
  const e2 = Ja(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = Ya(t2, 2);
  return n2 || (n2 = wa(Za(t2), e2), t2.g.push(n2), t2.m = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
}
function tc(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
function ec(t2) {
  const e2 = Ja(t2);
  return Ea(Za(t2), e2, true, (() => (function(t3, e3) {
    const n2 = t3.canvas;
    if (n2.width === t3.width && n2.height === t3.height) return e3();
    const r2 = n2.width, i2 = n2.height;
    return n2.width = t3.width, n2.height = t3.height, t3 = e3(), n2.width = r2, n2.height = i2, t3;
  })(t2, (() => {
    if (e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.clearColor(0, 0, 0, 0), e2.clear(e2.COLOR_BUFFER_BIT), e2.drawArrays(e2.TRIANGLE_FAN, 0, 4), !(t2.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return t2.canvas.transferToImageBitmap();
  }))));
}
function ic(...t2) {
  return t2.map((([t3, e2]) => ({ start: t3, end: e2 })));
}
async function cc(t2, e2, n2) {
  return (async function(t3, e3, n3, r2) {
    return aa(t3, e3, n3, r2);
  })(t2, n2.canvas ?? (Qo() ? void 0 : document.createElement("canvas")), e2, n2);
}
function hc(t2, e2, n2, r2) {
  if (t2.U) {
    const s2 = new Ls();
    if (n2?.regionOfInterest) {
      if (!t2.oa) throw Error("This task doesn't support region-of-interest.");
      var i2 = n2.regionOfInterest;
      if (i2.left >= i2.right || i2.top >= i2.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (i2.left < 0 || i2.top < 0 || i2.right > 1 || i2.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
      Ln(s2, 1, (i2.left + i2.right) / 2), Ln(s2, 2, (i2.top + i2.bottom) / 2), Ln(s2, 4, i2.right - i2.left), Ln(s2, 3, i2.bottom - i2.top);
    } else Ln(s2, 1, 0.5), Ln(s2, 2, 0.5), Ln(s2, 4, 1), Ln(s2, 3, 1);
    if (n2?.rotationDegrees) {
      if (n2?.rotationDegrees % 90 != 0) throw Error("Expected rotation to be a multiple of 90\xB0.");
      if (Ln(s2, 5, -Math.PI * n2.rotationDegrees / 180), n2?.rotationDegrees % 180 != 0) {
        const [t3, r3] = ea(e2);
        n2 = Sn(s2, 3) * r3 / t3, i2 = Sn(s2, 4) * t3 / r3, Ln(s2, 4, n2), Ln(s2, 3, i2);
      }
    }
    t2.g.addProtoToStream(s2.g(), "mediapipe.NormalizedRect", t2.U, r2);
  }
  t2.g.pa(e2, t2.X, r2 ?? performance.now()), t2.finishProcessing();
}
function uc(t2, e2, n2) {
  if (t2.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  hc(t2, e2, n2, t2.C + 1);
}
function lc(t2, e2, n2, r2) {
  if (!t2.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  hc(t2, e2, n2, r2);
}
function fc(t2, e2, n2, r2) {
  var i2 = e2.data;
  const s2 = e2.width, o2 = s2 * (e2 = e2.height);
  if ((i2 instanceof Uint8Array || i2 instanceof Float32Array) && i2.length !== o2) throw Error("Unsupported channel count: " + i2.length / o2);
  return t2 = new Na([i2], n2, false, t2.g.i.canvas, t2.P, s2, e2), r2 ? t2.clone() : t2;
}
function kc(t2) {
  t2.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
function Lc(t2) {
  t2.gestures = [], t2.landmarks = [], t2.worldLandmarks = [], t2.handedness = [];
}
function Rc(t2) {
  return 0 === t2.gestures.length ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t2.gestures, landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handedness: t2.handedness, handednesses: t2.handedness };
}
function Ic(t2, e2 = true) {
  const n2 = [];
  for (const i2 of t2) {
    var r2 = ys(i2);
    t2 = [];
    for (const n3 of r2.g()) r2 = e2 && null != kn(n3, 1) ? kn(n3, 1) ?? 0 : -1, t2.push({ score: Sn(n3, 2) ?? 0, index: r2, categoryName: le($e(n3, 3)) ?? "" ?? "", displayName: le($e(n3, 4)) ?? "" ?? "" });
    n2.push(t2);
  }
  return n2;
}
function Mc(t2) {
  return { landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handednesses: t2.handedness, handedness: t2.handedness };
}
function Oc(t2) {
  t2.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
}
function Nc(t2) {
  try {
    if (!t2.D) return t2.h;
    t2.D(t2.h);
  } finally {
    da(t2);
  }
}
function Uc(t2, e2) {
  t2 = ks(t2), e2.push(Ho(t2));
}
function Vc(t2) {
  const e2 = (function(t3) {
    return vn(t3, is, 1);
  })(t2.ca()).filter(((t3) => (le($e(t3, 1)) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));
  if (t2.u = [], e2.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
  1 === e2.length && (yn(e2[0], Qi, 7)?.j()?.g() ?? /* @__PURE__ */ new Map()).forEach(((e3, n2) => {
    t2.u[Number(n2)] = le($e(e3, 1)) ?? "";
  }));
}
function Xc(t2) {
  t2.categoryMask = void 0, t2.confidenceMasks = void 0, t2.qualityScores = void 0;
}
function Hc(t2) {
  try {
    const e2 = new jc(t2.confidenceMasks, t2.categoryMask, t2.qualityScores);
    if (!t2.j) return e2;
    t2.j(e2);
  } finally {
    da(t2);
  }
}
function $c(t2) {
  t2.landmarks = [], t2.worldLandmarks = [], t2.segmentationMasks = void 0;
}
function Jc(t2) {
  try {
    const e2 = new qc(t2.landmarks, t2.worldLandmarks, t2.segmentationMasks);
    if (!t2.u) return e2;
    t2.u(e2);
  } finally {
    da(t2);
  }
}
var t, i, s, o, a, c, l, f, d, g, y, _, w, T, A, b, L, F, M, P, B, j, V, X, H, W, z, K, Y, q, $, J, Z, Q, tt, et, ot, ct, ut, lt, dt, mt, yt, _t, vt, wt, Tt, At, bt, kt, xt, Lt, Rt, It, Xt, Ht, Wt, zt, Kt, Yt, Qt, pe, ge, me, ye, Ee, Ae, xe, Le, Pe, Ce, Ye, qe, Mn, Xn, Zn, Qn, er, nr, ir, sr, yr, _r, vr, Er, wr, Tr, Ar, br, kr, Sr, Lr, Rr, Mr, Pr, Cr, Or, Nr, Ur, Dr, Br, Gr, Qr, ii, pi, gi, mi, yi, _i, vi, Ei, wi, Ti, Ai, bi, ki, Si, xi, Li, Ri, Ii, Fi, Mi, Pi, Ci, Oi, Bi, Gi, ji, Vi, Wi, zi, Ki, Yi, qi, $i, Ji, Zi, Qi, ts, es, is, ss, os, as, ls, fs, ds, ps, gs, ms, ys, _s, vs, Es, ws, Ts, As, bs, ks, Ss, xs, Ls, Rs, Is, Fs, Ms, Ps, Cs, Os, Ns, Us, Ds, Bs, Gs, js, Vs, Xs, Hs, Ws, zs, Ks, Ys, qs, $s, Js, Zs, Qs, to, eo, no, ro, io, so, oo, ao, co, ho, uo, lo, fo, po, go, mo, yo, _o, vo, Eo, wo, To, Ao, bo, ko, So, xo, Lo, Ro, Io, Fo, Mo, Po, Co, Oo, No, Uo, Do, Yo, qo, Zo, pa, ma, ba, ka, Sa, Oa, Na, Ua, Da, Ka, nc, rc, sc, oc, ac, dc, pc, gc, mc, yc, _c, vc, Ec, wc, Tc, Ac, bc, Sc, xc, Fc, Pc, Cc, Dc, Bc, Gc, jc, Wc, zc, Kc, Yc, qc, Zc;
var init_vision_bundle = __esm({
  "node_modules/@mediapipe/tasks-vision/vision_bundle.mjs"() {
    t = "undefined" != typeof self ? self : {};
    o = "undefined" != typeof TextDecoder;
    c = "undefined" != typeof TextEncoder;
    f = e(610401301, false);
    d = e(748402147, true);
    g = t.navigator;
    l = g && g.userAgentData || null, m[" "] = function() {
    };
    y = {};
    _ = null;
    w = "undefined" != typeof Uint8Array;
    T = !(!(f && l && l.brands.length > 0) && (-1 != p().indexOf("Trident") || -1 != p().indexOf("MSIE"))) && "function" == typeof btoa;
    A = /[-_.]/g;
    b = { "-": "+", _: "/", ".": "=" };
    L = {};
    F = class {
      h() {
        return new Uint8Array(I(this) || 0);
      }
      constructor(t2, e2) {
        if (C(e2), this.g = t2, null != t2 && 0 === t2.length) throw Error("ByteString should be constructed with non-empty values");
      }
    };
    B = "function" == typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol();
    j = G("jas", void 0, true);
    V = G(void 0, "0di");
    X = G(void 0, "1oa");
    H = G(void 0, /* @__PURE__ */ Symbol());
    W = G(void 0, "0ub");
    z = G(void 0, "0ubs");
    K = G(void 0, "0ubsb");
    Y = G(void 0, "0actk");
    q = G("m_m", "Pa", true);
    $ = G();
    J = { Ga: { value: 0, configurable: true, writable: true, enumerable: false } };
    Z = Object.defineProperties;
    Q = B ? j : "Ga";
    et = [];
    rt(et, 7), tt = Object.freeze(et);
    ot = {};
    ct = {};
    ut = class {
      constructor(t2, e2, n2) {
        this.g = t2, this.h = e2, this.l = n2;
      }
      next() {
        const t2 = this.g.next();
        return t2.done || (t2.value = this.h.call(this.l, t2.value)), t2;
      }
      [Symbol.iterator]() {
        return this;
      }
    };
    lt = Object.freeze({});
    dt = {};
    mt = gt(((t2) => "number" == typeof t2));
    yt = gt(((t2) => "string" == typeof t2));
    _t = gt(((t2) => "boolean" == typeof t2));
    vt = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
    wt = gt(((t2) => vt ? t2 >= At && t2 <= kt : "-" === t2[0] ? St(t2, Tt) : St(t2, bt)));
    Tt = Number.MIN_SAFE_INTEGER.toString();
    At = vt ? BigInt(Number.MIN_SAFE_INTEGER) : void 0;
    bt = Number.MAX_SAFE_INTEGER.toString();
    kt = vt ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    xt = "function" == typeof Uint8Array.prototype.slice;
    Rt = 0;
    It = 0;
    Xt = "function" == typeof BigInt ? BigInt.asIntN : void 0;
    Ht = "function" == typeof BigInt ? BigInt.asUintN : void 0;
    Wt = Number.isSafeInteger;
    zt = Number.isFinite;
    Kt = Math.trunc;
    Yt = Et(0);
    Qt = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    pe = {};
    ge = (function() {
      try {
        return m(new class extends Map {
          constructor() {
            super();
          }
        }()), false;
      } catch {
        return true;
      }
    })();
    me = class {
      constructor() {
        this.g = /* @__PURE__ */ new Map();
      }
      get(t2) {
        return this.g.get(t2);
      }
      set(t2, e2) {
        return this.g.set(t2, e2), this.size = this.g.size, this;
      }
      delete(t2) {
        return t2 = this.g.delete(t2), this.size = this.g.size, t2;
      }
      clear() {
        this.g.clear(), this.size = this.g.size;
      }
      has(t2) {
        return this.g.has(t2);
      }
      entries() {
        return this.g.entries();
      }
      keys() {
        return this.g.keys();
      }
      values() {
        return this.g.values();
      }
      forEach(t2, e2) {
        return this.g.forEach(t2, e2);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    ye = ge ? (Object.setPrototypeOf(me.prototype, Map.prototype), Object.defineProperties(me.prototype, { size: { value: 0, configurable: true, enumerable: true, writable: true } }), me) : class extends Map {
      constructor() {
        super();
      }
    };
    Ee = class extends ye {
      constructor(t2, e2, n2 = _e, r2 = _e) {
        super(), this.J = 0 | t2[Q], this.K = e2, this.S = n2, this.fa = this.K ? we : r2;
        for (let i2 = 0; i2 < t2.length; i2++) {
          const s2 = t2[i2], o2 = n2(s2[0], false, true);
          let a2 = s2[1];
          e2 ? void 0 === a2 && (a2 = null) : a2 = r2(s2[1], false, true, void 0, void 0, this.J), super.set(o2, a2);
        }
      }
      V(t2) {
        return st(Array.from(super.entries(), t2));
      }
      clear() {
        ve(this), super.clear();
      }
      delete(t2) {
        return ve(this), super.delete(this.S(t2, true, false));
      }
      entries() {
        if (this.K) {
          var t2 = super.keys();
          t2 = new ut(t2, Te, this);
        } else t2 = super.entries();
        return t2;
      }
      values() {
        if (this.K) {
          var t2 = super.keys();
          t2 = new ut(t2, Ee.prototype.get, this);
        } else t2 = super.values();
        return t2;
      }
      forEach(t2, e2) {
        this.K ? super.forEach(((n2, r2, i2) => {
          t2.call(e2, i2.get(r2), r2, i2);
        })) : super.forEach(t2, e2);
      }
      set(t2, e2) {
        return ve(this), null == (t2 = this.S(t2, true, false)) ? this : null == e2 ? (super.delete(t2), this) : super.set(t2, this.fa(e2, true, true, this.K, false, this.J));
      }
      Ma(t2) {
        const e2 = this.S(t2[0], false, true);
        t2 = t2[1], t2 = this.K ? void 0 === t2 ? null : t2 : this.fa(t2, false, true, void 0, false, this.J), super.set(e2, t2);
      }
      has(t2) {
        return super.has(this.S(t2, false, false));
      }
      get(t2) {
        t2 = this.S(t2, false, false);
        const e2 = super.get(t2);
        if (void 0 !== e2) {
          var n2 = this.K;
          return n2 ? ((n2 = this.fa(e2, false, true, n2, this.ra, this.J)) !== e2 && super.set(t2, n2), n2) : e2;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    Ee.prototype.toJSON = void 0;
    xe = class {
    };
    Le = { Ka: true };
    Ye = Et(0);
    qe = {};
    Mn = class {
      constructor(t2, e2, n2) {
        if (this.buffer = t2, n2 && !e2) throw Error();
        this.g = e2;
      }
    };
    Xn = [];
    Zn = class {
      constructor(t2, e2, n2, r2) {
        if (Xn.length) {
          const i2 = Xn.pop();
          i2.init(t2, e2, n2, r2), t2 = i2;
        } else t2 = new class {
          constructor(t3, e3, n3, r3) {
            this.h = null, this.j = false, this.g = this.l = this.m = 0, this.init(t3, e3, n3, r3);
          }
          init(t3, e3, n3, { Y: r3 = false, ea: i2 = false } = {}) {
            this.Y = r3, this.ea = i2, t3 && (t3 = Pn(t3, this.ea), this.h = t3.buffer, this.j = t3.g, this.m = e3 || 0, this.l = void 0 !== n3 ? this.m + n3 : this.h.length, this.g = this.m);
          }
          clear() {
            this.h = null, this.j = false, this.g = this.l = this.m = 0, this.Y = false;
          }
        }(t2, e2, n2, r2);
        this.g = t2, this.m = this.g.g, this.h = this.l = -1, this.o(r2);
      }
      o({ ha: t2 = false } = {}) {
        this.ha = t2;
      }
    };
    Qn = [];
    er = class {
      constructor(t2, e2) {
        this.h = t2 >>> 0, this.g = e2 >>> 0;
      }
    };
    ir = class {
      constructor(t2, e2) {
        this.h = t2 >>> 0, this.g = e2 >>> 0;
      }
    };
    yr = mr();
    _r = mr();
    vr = mr();
    Er = mr();
    wr = mr();
    Tr = mr();
    Ar = mr();
    br = mr();
    kr = mr();
    Sr = mr();
    Lr = class {
      constructor(t2, e2) {
        this.v = Ue(t2, e2, void 0, 2048);
      }
      toJSON() {
        return Oe(this);
      }
      j() {
        var t2 = xo, e2 = this.v, n2 = t2.g, r2 = H;
        if (B && r2 && null != e2[r2]?.[n2] && U(W, 3), e2 = t2.g, $ && H && void 0 === $ && (r2 = (n2 = this.v)[H]) && (r2 = r2.da)) try {
          r2(n2, e2, Le);
        } catch (t3) {
          u(t3);
        }
        return t2.h ? t2.m(this, t2.h, t2.g, t2.l) : t2.m(this, t2.g, t2.defaultValue, t2.l);
      }
      clone() {
        const t2 = this.v, e2 = 0 | t2[Q];
        return Ke(this, t2, e2) ? Ge(this, t2, true) : new this.constructor(Ve(t2, e2, false));
      }
    };
    Lr.prototype[q] = ot, Lr.prototype.toString = function() {
      return this.v.toString();
    };
    Rr = class {
      constructor(t2, e2, n2) {
        this.g = t2, this.h = e2, t2 = yr, this.l = !!t2 && n2 === t2 || false;
      }
    };
    Mr = Ir((function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (Yn(t2, gn(e2, r2, n2), i2), true);
    }), Fr);
    Pr = Ir((function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (Yn(t2, gn(e2, r2, n2), i2), true);
    }), Fr);
    Cr = /* @__PURE__ */ Symbol();
    Or = /* @__PURE__ */ Symbol();
    Nr = /* @__PURE__ */ Symbol();
    Ur = /* @__PURE__ */ Symbol();
    Dr = /* @__PURE__ */ Symbol();
    Qr = Et(0);
    ii = Ir((function(t2, e2, n2, r2, i2) {
      if (2 !== t2.h) return false;
      if (t2 = Vt(t2 = Yn(t2, Ne([void 0, void 0], r2), i2)), i2 = pt(r2 = 0 | e2[Q]), 2 & r2) throw Error();
      let s2 = Je(e2, n2, i2);
      if (s2 instanceof Ee) 0 != (2 & s2.J) ? (s2 = s2.V(), s2.push(t2), Qe(e2, r2, n2, s2, i2)) : s2.Ma(t2);
      else if (Array.isArray(s2)) {
        var o2 = 0 | s2[Q];
        8192 & o2 || rt(s2, o2 |= 8192), 2 & o2 && (s2 = cn(s2), Qe(e2, r2, n2, s2, i2)), s2.push(t2);
      } else Qe(e2, r2, n2, st([t2]), i2);
      return true;
    }), (function(t2, e2, n2, r2, i2) {
      if (e2 instanceof Ee) e2.forEach(((e3, s2) => {
        gr(t2, n2, Ne([s2, e3], r2), i2);
      }));
      else if (Array.isArray(e2)) {
        for (let s2 = 0; s2 < e2.length; s2++) {
          const o2 = e2[s2];
          Array.isArray(o2) && gr(t2, n2, Ne(o2, r2), i2);
        }
        st(e2);
      }
    }));
    pi = ei((function(t2, e2, n2) {
      return 5 === t2.h && (ri(e2, n2, Dn(t2.g)), true);
    }), si, br);
    gi = ni(di, (function(t2, e2, n2) {
      if (null != (e2 = ti($t, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
        var r2 = t2, i2 = n2, s2 = e2[o2];
        null != s2 && (lr(r2, i2, 5), r2 = r2.g, Pt(s2), hr(r2));
      }
    }), br);
    mi = ni(di, (function(t2, e2, n2) {
      if (null != (e2 = ti($t, e2)) && e2.length) {
        lr(t2, n2, 2), ar(t2.g, 4 * e2.length);
        for (let r2 = 0; r2 < e2.length; r2++) n2 = t2.g, Pt(e2[r2]), hr(n2);
      }
    }), br);
    yi = ei((function(t2, e2, n2) {
      return 5 === t2.h && (ri(e2, n2, 0 === (t2 = Dn(t2.g)) ? void 0 : t2), true);
    }), si, br);
    _i = ei((function(t2, e2, n2) {
      return 0 !== t2.h ? t2 = false : (ri(e2, n2, Cn(t2.g, Nt)), t2 = true), t2;
    }), oi, Tr);
    vi = ei((function(t2, e2, n2) {
      return 0 !== t2.h ? e2 = false : (ri(e2, n2, (t2 = Cn(t2.g, Nt)) === Qr ? void 0 : t2), e2 = true), e2;
    }), oi, Tr);
    Ei = ei((function(t2, e2, n2) {
      return 0 !== t2.h ? t2 = false : (ri(e2, n2, Cn(t2.g, Ot)), t2 = true), t2;
    }), (function(t2, e2, n2) {
      if (e2 = (function(t3) {
        if (null == t3) return t3;
        var e3 = typeof t3;
        if ("bigint" === e3) return String(Ht(64, t3));
        if (te(t3)) {
          if ("string" === e3) return e3 = Kt(Number(t3)), Wt(e3) && e3 >= 0 ? t3 = String(e3) : (-1 !== (e3 = t3.indexOf(".")) && (t3 = t3.substring(0, e3)), (e3 = "-" !== t3[0] && ((e3 = t3.length) < 20 || 20 === e3 && t3 <= "18446744073709551615")) || (Gt(t3), t3 = Ut(Rt, It))), t3;
          if ("number" === e3) return (t3 = Kt(t3)) >= 0 && Wt(t3) || (Mt(t3), t3 = Ct(Rt, It)), t3;
        }
      })(e2), null != e2) {
        if ("string" == typeof e2) tr(e2);
        if (null != e2) switch (lr(t2, n2, 0), typeof e2) {
          case "number":
            t2 = t2.g, Mt(e2), or(t2, Rt, It);
            break;
          case "bigint":
            n2 = BigInt.asUintN(64, e2), n2 = new er(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), or(t2.g, n2.h, n2.g);
            break;
          default:
            n2 = tr(e2), or(t2.g, n2.h, n2.g);
        }
      }
    }), Ar);
    wi = ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, Nn(t2.g)), true);
    }), ai, Er);
    Ti = ni((function(t2, e2, n2) {
      return (0 === t2.h || 2 === t2.h) && (e2 = un(e2, 0 | e2[Q], n2), 2 == t2.h ? Jn(t2, Nn, e2) : e2.push(Nn(t2.g)), true);
    }), (function(t2, e2, n2) {
      if (null != (e2 = ti(ee, e2)) && e2.length) {
        n2 = fr(t2, n2);
        for (let n3 = 0; n3 < e2.length; n3++) cr(t2.g, e2[n3]);
        dr(t2, n2);
      }
    }), Er);
    Ai = ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, 0 === (t2 = Nn(t2.g)) ? void 0 : t2), true);
    }), ai, Er);
    bi = ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, On(t2.g)), true);
    }), ci, _r);
    ki = ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, false === (t2 = On(t2.g)) ? void 0 : t2), true);
    }), ci, _r);
    Si = ni((function(t2, e2, n2) {
      return 2 === t2.h && (t2 = qn(t2), un(e2, 0 | e2[Q], n2).push(t2), true);
    }), (function(t2, e2, n2) {
      if (null != (e2 = ti(le, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
        var r2 = t2, i2 = n2, s2 = e2[o2];
        null != s2 && pr(r2, i2, h(s2));
      }
    }), vr);
    xi = ei((function(t2, e2, n2) {
      return 2 === t2.h && (ri(e2, n2, "" === (t2 = qn(t2)) ? void 0 : t2), true);
    }), hi, vr);
    Li = ei((function(t2, e2, n2) {
      return 2 === t2.h && (ri(e2, n2, qn(t2)), true);
    }), hi, vr);
    Ri = (function(t2, e2, n2 = yr) {
      return new Rr(t2, e2, n2);
    })((function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (r2 = Ne(void 0, r2), un(e2, 0 | e2[Q], n2).push(r2), Yn(t2, r2, i2), true);
    }), (function(t2, e2, n2, r2, i2) {
      if (Array.isArray(e2)) {
        for (let s2 = 0; s2 < e2.length; s2++) ui(t2, e2[s2], n2, r2, i2);
        1 & (t2 = 0 | e2[Q]) || rt(e2, 1 | t2);
      }
    }));
    Ii = Ir((function(t2, e2, n2, r2, i2, s2) {
      if (2 !== t2.h) return false;
      let o2 = 0 | e2[Q];
      return dn(e2, o2, s2, n2, pt(o2)), Yn(t2, e2 = gn(e2, r2, n2), i2), true;
    }), ui);
    Fi = ei((function(t2, e2, n2) {
      return 2 === t2.h && (ri(e2, n2, $n(t2)), true);
    }), li, kr);
    Mi = ni((function(t2, e2, n2) {
      return (0 === t2.h || 2 === t2.h) && (e2 = un(e2, 0 | e2[Q], n2), 2 == t2.h ? Jn(t2, Un, e2) : e2.push(Un(t2.g)), true);
    }), (function(t2, e2, n2) {
      if (null != (e2 = ti(ne, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
        var r2 = t2, i2 = n2, s2 = e2[o2];
        null != s2 && (lr(r2, i2, 0), ar(r2.g, s2));
      }
    }), wr);
    Pi = ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, 0 === (t2 = Un(t2.g)) ? void 0 : t2), true);
    }), fi, wr);
    Ci = ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, Nn(t2.g)), true);
    }), (function(t2, e2, n2) {
      null != (e2 = ee(e2)) && (e2 = parseInt(e2, 10), lr(t2, n2, 0), cr(t2.g, e2));
    }), Sr);
    Oi = class {
      constructor(t2, e2) {
        var n2 = Qi;
        this.g = t2, this.h = e2, this.m = yn, this.j = wn, this.defaultValue = void 0, this.l = null != n2.Oa ? dt : void 0;
      }
      register() {
        m(this);
      }
    };
    Bi = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Gi = [0, xi, ei((function(t2, e2, n2) {
      return 2 === t2.h && (ri(e2, n2, (t2 = $n(t2)) === R() ? void 0 : t2), true);
    }), (function(t2, e2, n2) {
      if (null != e2) {
        if (e2 instanceof Lr) {
          const r2 = e2.Ra;
          return void (r2 ? (e2 = r2(e2), null != e2 && pr(t2, n2, Pn(e2, true).buffer)) : U(K, 3));
        }
        if (Array.isArray(e2)) return void U(K, 3);
      }
      li(t2, e2, n2);
    }), kr)];
    Vi = globalThis.trustedTypes;
    Wi = [0, wi, Ci, bi, -1, Ti, Ci, -1, bi];
    zi = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ki = [0, bi, Li, bi, Ci, -1, ni((function(t2, e2, n2) {
      return (0 === t2.h || 2 === t2.h) && (e2 = un(e2, 0 | e2[Q], n2), 2 == t2.h ? Jn(t2, Bn, e2) : e2.push(Nn(t2.g)), true);
    }), (function(t2, e2, n2) {
      if (null != (e2 = ti(ee, e2)) && e2.length) {
        n2 = fr(t2, n2);
        for (let n3 = 0; n3 < e2.length; n3++) cr(t2.g, e2[n3]);
        dr(t2, n2);
      }
    }), Sr), Li, -1, [0, bi, -1], Ci, bi, -1];
    Yi = [0, 3, bi, -1, 2, [0, [2], wi, Ii, [0, ei((function(t2, e2, n2) {
      return 0 === t2.h && (ri(e2, n2, Un(t2.g)), true);
    }), fi, wr)]], [0, Ci, bi, Ci, bi, Ci, bi, Li, -1], [0, [3, 4], Li, -1, Ii, [0, wi], Ii, [0, Ci]], [0]];
    qi = [0, Li, -2];
    $i = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ji = [0];
    Zi = [0, wi, bi, 1, bi, -4];
    Qi = class extends Lr {
      constructor(t2) {
        super(t2, 2);
      }
    };
    ts = {};
    ts[336783863] = [0, Li, bi, -1, wi, [0, [1, 2, 3, 4, 5, 6, 7, 8, 9], Ii, Ji, Ii, Ki, Ii, qi, Ii, Zi, Ii, Wi, Ii, [0, Li, -2], Ii, [0, Li, Ci], Ii, Yi, Ii, [0, Ci, -1, bi]], [0, Li], bi, [0, [1, 3], [2, 4], Ii, [0, Ti], -1, Ii, [0, Si], -1, Ri, [0, Li, -1]], Li];
    es = [0, vi, -1, ki, -3, vi, Ti, xi, Ai, vi, -1, ki, Ai, ki, -2, xi];
    is = class extends Lr {
      constructor(t2) {
        super(t2, 500);
      }
      o(t2) {
        return wn(this, 0, 7, t2);
      }
    };
    ss = [-1, {}];
    os = [0, Li, 1, ss];
    as = [0, Li, Si, ss];
    ls = class extends Lr {
      constructor(t2) {
        super(t2, 500);
      }
      o(t2) {
        return wn(this, 0, 1001, t2);
      }
    };
    fs = [-500, Ri, [-500, xi, -1, Si, -3, [-2, ts, bi], Ri, Gi, Ai, -1, os, as, Ri, [0, xi, ki], xi, es, Ai, Si, 987, Si], 4, Ri, [-500, Li, -1, [-1, {}], 998, Li], Ri, [-500, Li, Si, -1, [-2, {}, bi], 997, Si, -1], Ai, Ri, [-500, Li, Si, ss, 998, Si], Si, Ai, os, as, Ri, [0, xi, -1, ss], Si, -2, es, xi, -1, ki, [0, ki, Pi], 978, ss, Ri, Gi];
    ls.prototype.g = Di(fs);
    ds = Ui(ls, fs);
    ps = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    gs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
      g() {
        return vn(this, ps, 1);
      }
    };
    ms = [0, Ri, [0, wi, pi, Li, -1]];
    ys = Ui(gs, ms);
    _s = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    vs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Es = class extends Lr {
      constructor(t2) {
        super(t2);
      }
      l() {
        return yn(this, _s, 2);
      }
      g() {
        return vn(this, vs, 5);
      }
    };
    ws = Ui(class extends Lr {
      constructor(t2) {
        super(t2);
      }
    }, [0, Si, Ti, mi, [0, Ci, [0, wi, -3], [0, pi, -3], [0, wi, -1, [0, Ri, [0, wi, -2]]], Ri, [0, pi, -1, Li, pi]], Li, -1, _i, Ri, [0, wi, pi], Si, _i]);
    Ts = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    As = Ui(class extends Lr {
      constructor(t2) {
        super(t2);
      }
    }, [0, Ri, [0, pi, -4]]);
    bs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    ks = Ui(class extends Lr {
      constructor(t2) {
        super(t2);
      }
    }, [0, Ri, [0, pi, -4]]);
    Ss = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    xs = [0, wi, -1, mi, Ci];
    Ls = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ls.prototype.g = Di([0, pi, -4, _i]);
    Rs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Is = Ui(class extends Lr {
      constructor(t2) {
        super(t2);
      }
    }, [0, Ri, [0, 1, wi, Li, ms], _i]);
    Fs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ms = class extends Lr {
      constructor(t2) {
        super(t2);
      }
      na() {
        const t2 = $e(this, 1, void 0, void 0, an);
        return null == t2 ? R() : t2;
      }
    };
    Ps = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Cs = [1, 2];
    Os = Ui(class extends Lr {
      constructor(t2) {
        super(t2);
      }
    }, [0, Ri, [0, Cs, Ii, [0, mi], Ii, [0, Fi], wi, Li], _i]);
    Ns = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Us = [0, Li, wi, pi, Si, -1];
    Ds = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Bs = [0, bi, -1];
    Gs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    js = [1, 2, 3, 4, 5, 6];
    Vs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
      g() {
        return null != $e(this, 1, void 0, void 0, an);
      }
      l() {
        return null != le($e(this, 2));
      }
    };
    Xs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
      g() {
        return Zt($e(this, 2)) ?? false;
      }
    };
    Hs = [0, Fi, Li, [0, wi, _i, -1], [0, Ei, _i]];
    Ws = [0, Hs, bi, [0, js, Ii, Zi, Ii, Ki, Ii, Wi, Ii, Ji, Ii, qi, Ii, Yi], Ci];
    zs = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ks = [0, Ws, pi, -1, wi];
    Ys = Ni(502141897, zs);
    ts[502141897] = Ks;
    qs = Ui(class extends Lr {
      constructor(t2) {
        super(t2);
      }
    }, [0, [0, Ci, -1, gi, Mi], xs]);
    $s = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Js = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Zs = [0, Ws, pi, [0, Ws], bi];
    Qs = Ni(508968150, Js);
    ts[508968150] = [0, Ws, Ks, Zs, pi, [0, [0, Hs]]], ts[508968149] = Zs;
    to = class extends Lr {
      constructor(t2) {
        super(t2);
      }
      l() {
        return yn(this, Ns, 2);
      }
      g() {
        Ze(this, 2);
      }
    };
    eo = [0, Ws, Us];
    ts[478825465] = eo;
    no = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    ro = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    io = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    so = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    oo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    ao = [0, Ws, [0, Ws], eo, -1];
    co = [0, Ws, pi, wi];
    ho = [0, Ws, pi];
    uo = [0, Ws, co, ho, pi];
    lo = Ni(479097054, oo);
    ts[479097054] = [0, Ws, uo, ao], ts[463370452] = ao, ts[464864288] = co;
    fo = Ni(462713202, so);
    ts[462713202] = uo, ts[474472470] = ho;
    po = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    go = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    mo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    yo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    _o = [0, Ws, pi, -1, wi];
    vo = [0, Ws, pi, bi];
    yo.prototype.g = Di([0, Ws, ho, [0, Ws], Ks, Zs, _o, vo]);
    Eo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    wo = Ni(456383383, Eo);
    ts[456383383] = [0, Ws, Us];
    To = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ao = Ni(476348187, To);
    ts[476348187] = [0, Ws, Bs];
    bo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    ko = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    So = [0, Ci, -1];
    xo = Ni(458105876, class extends Lr {
      constructor(t2) {
        super(t2);
      }
      g() {
        let t2;
        var e2 = this.v;
        const n2 = 0 | e2[Q];
        return t2 = at(this, n2), e2 = (function(t3, e3, n3, r2) {
          var i2 = ko;
          !r2 && He(t3) && (n3 = 0 | (e3 = t3.v)[Q]);
          var s2 = Je(e3, 2);
          if (t3 = false, null == s2) {
            if (r2) return be();
            s2 = [];
          } else if (s2.constructor === Ee) {
            if (!(2 & s2.J) || r2) return s2;
            s2 = s2.V();
          } else Array.isArray(s2) ? t3 = !!(2 & (0 | s2[Q])) : s2 = [];
          if (r2) {
            if (!s2.length) return be();
            t3 || (t3 = true, it(s2));
          } else t3 && (t3 = false, st(s2), s2 = cn(s2));
          return !t3 && 32 & n3 && nt(s2, 32), n3 = Qe(e3, n3, 2, r2 = new Ee(s2, i2, de, void 0)), t3 || ze(e3, n3), r2;
        })(this, e2, n2, t2), !t2 && ko && (e2.ra = true), e2;
      }
    });
    ts[458105876] = [0, So, ii, [true, _i, [0, Li, -1, Si]], [0, Ti, bi, Ci]];
    Lo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Ro = Ni(458105758, Lo);
    ts[458105758] = [0, Ws, Li, So];
    Io = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Fo = [0, yi, -1, ki];
    Mo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Po = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Co = [1, 2];
    Po.prototype.g = Di([0, Co, Ii, Fo, Ii, [0, Ri, Fo]]);
    Oo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    No = Ni(443442058, Oo);
    ts[443442058] = [0, Ws, Li, wi, pi, Si, -1, bi, pi], ts[514774813] = _o;
    Uo = class extends Lr {
      constructor(t2) {
        super(t2);
      }
    };
    Do = Ni(516587230, Uo);
    ts[516587230] = [0, Ws, _o, vo, pi], ts[518928384] = vo;
    qo = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
    Zo = class {
    };
    Zo.forVisionTasks = function(t2, e2 = false) {
      return Jo("vision", t2 ?? Hi``, e2);
    }, Zo.forTextTasks = function(t2, e2 = false) {
      return Jo("text", t2 ?? Hi``, e2);
    }, Zo.forGenAiTasks = function(t2, e2 = false) {
      return Jo("genai", t2 ?? Hi``, e2);
    }, Zo.forAudioTasks = function(t2, e2 = false) {
      return Jo("audio", t2 ?? Hi``, e2);
    }, Zo.isSimdSupported = function(t2 = false) {
      return $o(t2);
    };
    pa = class {
      constructor(t2) {
        this.g = t2, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(false);
      }
      l(t2, e2 = true) {
        if (e2) {
          const e3 = t2.baseOptions || {};
          if (t2.baseOptions?.modelAssetBuffer && t2.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
          if (!(yn(this.baseOptions, Vs, 1)?.g() || yn(this.baseOptions, Vs, 1)?.l() || t2.baseOptions?.modelAssetBuffer || t2.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
          if ((function(t3, e4) {
            let n2 = yn(t3.baseOptions, Gs, 3);
            if (!n2) {
              var r2 = n2 = new Gs(), i2 = new $i();
              Tn(r2, 4, js, i2);
            }
            "delegate" in e4 && ("GPU" === e4.delegate ? (e4 = n2, r2 = new zi(), Tn(e4, 2, js, r2)) : (e4 = n2, r2 = new $i(), Tn(e4, 4, js, r2))), wn(t3.baseOptions, 0, 3, n2);
          })(this, e3), e3.modelAssetPath) return fetch(e3.modelAssetPath.toString()).then(((t3) => {
            if (t3.ok) return t3.arrayBuffer();
            throw Error(`Failed to fetch model: ${e3.modelAssetPath} (${t3.status})`);
          })).then(((t3) => {
            try {
              this.g.i.FS_unlink("/model.dat");
            } catch {
            }
            this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), ca(this, "/model.dat"), this.m(), this.L();
          }));
          if (e3.modelAssetBuffer instanceof Uint8Array) ca(this, e3.modelAssetBuffer);
          else if (e3.modelAssetBuffer) return (async function(t3) {
            const e4 = [];
            for (var n2 = 0; ; ) {
              const { done: r2, value: i2 } = await t3.read();
              if (r2) break;
              e4.push(i2), n2 += i2.length;
            }
            if (0 === e4.length) return new Uint8Array(0);
            if (1 === e4.length) return e4[0];
            t3 = new Uint8Array(n2), n2 = 0;
            for (const r2 of e4) t3.set(r2, n2), n2 += r2.length;
            return t3;
          })(e3.modelAssetBuffer).then(((t3) => {
            ca(this, t3), this.m(), this.L();
          }));
        }
        return this.m(), this.L(), Promise.resolve();
      }
      L() {
      }
      ca() {
        let t2;
        if (this.g.ca(((e2) => {
          t2 = ds(e2);
        })), !t2) throw Error("Failed to retrieve CalculatorGraphConfig");
        return t2;
      }
      setGraph(t2, e2) {
        this.g.attachErrorListener(((t3, e3) => {
          this.H.push(Error(e3));
        })), this.g.Ja(), this.g.setGraph(t2, e2), this.B = void 0, ha(this);
      }
      finishProcessing() {
        this.g.finishProcessing(), ha(this);
      }
      close() {
        this.B = void 0, this.g.closeGraph();
      }
    };
    pa.prototype.close = pa.prototype.close;
    ma = class {
      constructor(t2, e2, n2, r2) {
        this.g = t2, this.h = e2, this.m = n2, this.l = r2;
      }
      bind() {
        this.g.bindVertexArray(this.h);
      }
      close() {
        this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
      }
    };
    ba = class {
      H() {
        return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
      }
      m() {
        const t2 = this.g;
        if (this.h = ga(t2.createProgram(), "Failed to create WebGL program"), this.X = ya(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t2.VERTEX_SHADER), this.W = ya(this, this.H(), t2.FRAGMENT_SHADER), t2.linkProgram(this.h), !t2.getProgramParameter(this.h, t2.LINK_STATUS)) throw Error(`Error during program linking: ${t2.getProgramInfoLog(this.h)}`);
        this.O = t2.getAttribLocation(this.h, "aVertex"), this.L = t2.getAttribLocation(this.h, "aTex");
      }
      D() {
      }
      l() {
      }
      close() {
        if (this.h) {
          const t2 = this.g;
          t2.deleteProgram(this.h), t2.deleteShader(this.X), t2.deleteShader(this.W);
        }
        this.B && this.g.deleteFramebuffer(this.B), this.A && this.A.close(), this.u && this.u.close();
      }
    };
    ka = class extends ba {
      H() {
        return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
      }
      D() {
        const t2 = this.g;
        t2.activeTexture(t2.TEXTURE1), this.C = wa(this, t2, t2.LINEAR), t2.activeTexture(t2.TEXTURE2), this.j = wa(this, t2, t2.NEAREST);
      }
      m() {
        super.m();
        const t2 = this.g;
        this.P = ga(t2.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.U = ga(t2.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.M = ga(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
      }
      l() {
        super.l();
        const t2 = this.g;
        t2.uniform1i(this.M, 0), t2.uniform1i(this.P, 1), t2.uniform1i(this.U, 2);
      }
      close() {
        this.C && this.g.deleteTexture(this.C), this.j && this.g.deleteTexture(this.j), super.close();
      }
    };
    Sa = class extends ba {
      H() {
        return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
      }
      D() {
        const t2 = this.g;
        t2.activeTexture(t2.TEXTURE1), this.j = wa(this, t2), t2.activeTexture(t2.TEXTURE2), this.C = wa(this, t2);
      }
      m() {
        super.m();
        const t2 = this.g;
        this.M = ga(t2.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.P = ga(t2.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.I = ga(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
      }
      l() {
        super.l();
        const t2 = this.g;
        t2.uniform1i(this.I, 0), t2.uniform1i(this.M, 1), t2.uniform1i(this.P, 2);
      }
      close() {
        this.j && this.g.deleteTexture(this.j), this.C && this.g.deleteTexture(this.C), super.close();
      }
    };
    Na = class {
      constructor(t2, e2, n2, r2, i2, s2, o2) {
        this.g = t2, this.m = e2, this.j = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, this.j && (0 === --Ua && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."));
      }
      Fa() {
        return !!xa(this, 0);
      }
      ka() {
        return !!xa(this, 1);
      }
      R() {
        return !!xa(this, 2);
      }
      ja() {
        return (e2 = xa(t2 = this, 0)) || (e2 = La(t2), e2 = new Uint8Array(e2.map(((t3) => Math.round(255 * t3)))), t2.g.push(e2)), e2;
        var t2, e2;
      }
      ia() {
        return La(this);
      }
      N() {
        return Ra(this);
      }
      clone() {
        const t2 = [];
        for (const e2 of this.g) {
          let n2;
          if (e2 instanceof Uint8Array) n2 = new Uint8Array(e2);
          else if (e2 instanceof Float32Array) n2 = new Float32Array(e2);
          else {
            if (!(e2 instanceof WebGLTexture)) throw Error(`Type is not supported: ${e2}`);
            {
              const t3 = Ia(this), e3 = Ma(this);
              t3.activeTexture(t3.TEXTURE1), n2 = wa(e3, t3, this.m ? t3.LINEAR : t3.NEAREST), t3.bindTexture(t3.TEXTURE_2D, n2);
              const r2 = Fa(this);
              t3.texImage2D(t3.TEXTURE_2D, 0, r2, this.width, this.height, 0, t3.RED, t3.FLOAT, null), t3.bindTexture(t3.TEXTURE_2D, null), Ta(e3, t3, n2), Ea(e3, t3, false, (() => {
                Pa(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Ca(this);
              })), Aa(e3), Ca(this);
            }
          }
          t2.push(n2);
        }
        return new Na(t2, this.m, this.R(), this.canvas, this.l, this.width, this.height);
      }
      close() {
        this.j && Ia(this).deleteTexture(xa(this, 2)), Ua = -1;
      }
    };
    Na.prototype.close = Na.prototype.close, Na.prototype.clone = Na.prototype.clone, Na.prototype.getAsWebGLTexture = Na.prototype.N, Na.prototype.getAsFloat32Array = Na.prototype.ia, Na.prototype.getAsUint8Array = Na.prototype.ja, Na.prototype.hasWebGLTexture = Na.prototype.R, Na.prototype.hasFloat32Array = Na.prototype.ka, Na.prototype.hasUint8Array = Na.prototype.Fa;
    Ua = 250;
    Da = { color: "white", lineWidth: 4, radius: 6 };
    Ka = class {
      constructor(t2, e2) {
        "undefined" != typeof CanvasRenderingContext2D && t2 instanceof CanvasRenderingContext2D || t2 instanceof OffscreenCanvasRenderingContext2D ? (this.l = t2, this.j = e2) : this.j = t2;
      }
      ya(t2, e2) {
        if (t2) {
          var n2 = Va(this);
          e2 = Ba(e2), n2.save();
          var r2 = n2.canvas, i2 = 0;
          for (const s2 of t2) n2.fillStyle = Ga(e2.fillColor, { index: i2, from: s2 }), n2.strokeStyle = Ga(e2.color, { index: i2, from: s2 }), n2.lineWidth = Ga(e2.lineWidth, { index: i2, from: s2 }), (t2 = new Path2D()).arc(s2.x * r2.width, s2.y * r2.height, Ga(e2.radius, { index: i2, from: s2 }), 0, 2 * Math.PI), n2.fill(t2), n2.stroke(t2), ++i2;
          n2.restore();
        }
      }
      xa(t2, e2, n2) {
        if (t2 && e2) {
          var r2 = Va(this);
          n2 = Ba(n2), r2.save();
          var i2 = r2.canvas, s2 = 0;
          for (const o2 of e2) {
            r2.beginPath(), e2 = t2[o2.start];
            const a2 = t2[o2.end];
            e2 && a2 && (r2.strokeStyle = Ga(n2.color, { index: s2, from: e2, to: a2 }), r2.lineWidth = Ga(n2.lineWidth, { index: s2, from: e2, to: a2 }), r2.moveTo(e2.x * i2.width, e2.y * i2.height), r2.lineTo(a2.x * i2.width, a2.y * i2.height)), ++s2, r2.stroke();
          }
          r2.restore();
        }
      }
      ua(t2, e2) {
        const n2 = Va(this);
        e2 = Ba(e2), n2.save(), n2.beginPath(), n2.lineWidth = Ga(e2.lineWidth, {}), n2.strokeStyle = Ga(e2.color, {}), n2.fillStyle = Ga(e2.fillColor, {}), n2.moveTo(t2.originX, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY), n2.stroke(), n2.fill(), n2.restore();
      }
      va(t2, e2, n2 = [0, 0, 0, 255]) {
        this.l ? (function(t3, e3, n3, r2) {
          const i2 = Xa(t3);
          Ha(t3, e3, ((e4) => {
            Wa(t3, e4, n3, r2), (e4 = Va(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
          }));
        })(this, t2, n2, e2) : Wa(this, t2.N(), n2, e2);
      }
      wa(t2, e2, n2) {
        this.l ? (function(t3, e3, n3, r2) {
          const i2 = Xa(t3);
          Ha(t3, e3, ((e4) => {
            za(t3, e4, n3, r2), (e4 = Va(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
          }));
        })(this, t2, e2, n2) : za(this, t2.N(), e2, n2);
      }
      close() {
        this.g?.close(), this.g = void 0, this.h?.close(), this.h = void 0, this.m?.close(), this.m = void 0;
      }
    };
    Ka.prototype.close = Ka.prototype.close, Ka.prototype.drawConfidenceMask = Ka.prototype.wa, Ka.prototype.drawCategoryMask = Ka.prototype.va, Ka.prototype.drawBoundingBox = Ka.prototype.ua, Ka.prototype.drawConnectors = Ka.prototype.xa, Ka.prototype.drawLandmarks = Ka.prototype.ya, Ka.lerp = function(t2, e2, n2, r2, i2) {
      return ja(r2 * (1 - (t2 - e2) / (n2 - e2)) + i2 * (1 - (n2 - t2) / (n2 - e2)), r2, i2);
    }, Ka.clamp = ja;
    nc = class {
      constructor(t2, e2, n2, r2, i2, s2, o2) {
        this.g = t2, this.j = e2, this.m = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, (this.j || this.m) && (0 === --rc && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."));
      }
      Ea() {
        return !!Ya(this, 0);
      }
      la() {
        return !!Ya(this, 1);
      }
      R() {
        return !!Ya(this, 2);
      }
      Ca() {
        return qa(this);
      }
      Ba() {
        var t2 = Ya(this, 1);
        return t2 || ($a(this), Qa(this), t2 = ec(this), tc(this), this.g.push(t2), this.j = true), t2;
      }
      N() {
        return $a(this);
      }
      clone() {
        const t2 = [];
        for (const e2 of this.g) {
          let n2;
          if (e2 instanceof ImageData) n2 = new ImageData(e2.data, this.width, this.height);
          else if (e2 instanceof WebGLTexture) {
            const t3 = Ja(this), e3 = Za(this);
            t3.activeTexture(t3.TEXTURE1), n2 = wa(e3, t3), t3.bindTexture(t3.TEXTURE_2D, n2), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, this.width, this.height, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.bindTexture(t3.TEXTURE_2D, null), Ta(e3, t3, n2), Ea(e3, t3, false, (() => {
              Qa(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), tc(this);
            })), Aa(e3), tc(this);
          } else {
            if (!(e2 instanceof ImageBitmap)) throw Error(`Type is not supported: ${e2}`);
            $a(this), Qa(this), n2 = ec(this), tc(this);
          }
          t2.push(n2);
        }
        return new nc(t2, this.la(), this.R(), this.canvas, this.l, this.width, this.height);
      }
      close() {
        this.j && Ya(this, 1).close(), this.m && Ja(this).deleteTexture(Ya(this, 2)), rc = -1;
      }
    };
    nc.prototype.close = nc.prototype.close, nc.prototype.clone = nc.prototype.clone, nc.prototype.getAsWebGLTexture = nc.prototype.N, nc.prototype.getAsImageBitmap = nc.prototype.Ba, nc.prototype.getAsImageData = nc.prototype.Ca, nc.prototype.hasWebGLTexture = nc.prototype.R, nc.prototype.hasImageBitmap = nc.prototype.la, nc.prototype.hasImageData = nc.prototype.Ea;
    rc = 250;
    sc = /* @__PURE__ */ (function(t2) {
      return class extends t2 {
        Ja() {
          this.i._registerModelResourcesGraphService();
        }
      };
    })((oc = class {
      constructor(t2, e2) {
        this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e2 ? this.i.canvas = e2 : Qo() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
      }
      async initializeGraph(t2) {
        const e2 = await (await fetch(t2)).arrayBuffer();
        t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
      }
      setGraphFromString(t2) {
        this.setGraph(new TextEncoder().encode(t2), false);
      }
      setGraph(t2, e2) {
        const n2 = t2.length, r2 = this.i._malloc(n2);
        this.i.HEAPU8.set(t2, r2), e2 ? this.i._changeBinaryGraph(n2, r2) : this.i._changeTextGraph(n2, r2), this.i._free(r2);
      }
      configureAudio(t2, e2, n2, r2, i2) {
        this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), na(this, r2 || "input_audio", ((r3) => {
          na(this, i2 = i2 || "audio_header", ((i3) => {
            this.i._configureAudio(r3, i3, t2, e2 ?? 0, n2);
          }));
        }));
      }
      setAutoResizeCanvas(t2) {
        this.l = t2;
      }
      setAutoRenderToScreen(t2) {
        this.i._setAutoRenderToScreen(t2);
      }
      setGpuBufferVerticalFlip(t2) {
        this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
      }
      ca(t2) {
        sa(this, "__graph_config__", ((e2) => {
          t2(e2);
        })), na(this, "__graph_config__", ((t3) => {
          this.i._getGraphConfig(t3, void 0);
        })), delete this.i.simpleListeners.__graph_config__;
      }
      attachErrorListener(t2) {
        this.i.errorListener = t2;
      }
      attachEmptyPacketListener(t2, e2) {
        this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = e2;
      }
      addAudioToStream(t2, e2, n2) {
        this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
      }
      addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
        const s2 = 4 * t2.length;
        this.h !== s2 && (this.g && this.i._free(this.g), this.g = this.i._malloc(s2), this.h = s2), this.i.HEAPF32.set(t2, this.g / 4), na(this, r2, ((t3) => {
          this.i._addAudioToInputStream(this.g, e2, n2, t3, i2);
        }));
      }
      addGpuBufferToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const [r2, i2] = ra(this, t2, e3);
          this.i._addBoundTextureToStream(e3, r2, i2, n2);
        }));
      }
      addBoolToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          this.i._addBoolToInputStream(t2, e3, n2);
        }));
      }
      addDoubleToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          this.i._addDoubleToInputStream(t2, e3, n2);
        }));
      }
      addFloatToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          this.i._addFloatToInputStream(t2, e3, n2);
        }));
      }
      addIntToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          this.i._addIntToInputStream(t2, e3, n2);
        }));
      }
      addUintToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          this.i._addUintToInputStream(t2, e3, n2);
        }));
      }
      addStringToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          na(this, t2, ((t3) => {
            this.i._addStringToInputStream(t3, e3, n2);
          }));
        }));
      }
      addStringRecordToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          ia(this, Object.keys(t2), ((r2) => {
            ia(this, Object.values(t2), ((i2) => {
              this.i._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
            }));
          }));
        }));
      }
      addProtoToStream(t2, e2, n2, r2) {
        na(this, n2, ((n3) => {
          na(this, e2, ((e3) => {
            const i2 = this.i._malloc(t2.length);
            this.i.HEAPU8.set(t2, i2), this.i._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.i._free(i2);
          }));
        }));
      }
      addEmptyPacketToStream(t2, e2) {
        na(this, t2, ((t3) => {
          this.i._addEmptyPacketToInputStream(t3, e2);
        }));
      }
      addBoolVectorToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const r2 = this.i._allocateBoolVector(t2.length);
          if (!r2) throw Error("Unable to allocate new bool vector on heap.");
          for (const e4 of t2) this.i._addBoolVectorEntry(r2, e4);
          this.i._addBoolVectorToInputStream(r2, e3, n2);
        }));
      }
      addDoubleVectorToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const r2 = this.i._allocateDoubleVector(t2.length);
          if (!r2) throw Error("Unable to allocate new double vector on heap.");
          for (const e4 of t2) this.i._addDoubleVectorEntry(r2, e4);
          this.i._addDoubleVectorToInputStream(r2, e3, n2);
        }));
      }
      addFloatVectorToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const r2 = this.i._allocateFloatVector(t2.length);
          if (!r2) throw Error("Unable to allocate new float vector on heap.");
          for (const e4 of t2) this.i._addFloatVectorEntry(r2, e4);
          this.i._addFloatVectorToInputStream(r2, e3, n2);
        }));
      }
      addIntVectorToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const r2 = this.i._allocateIntVector(t2.length);
          if (!r2) throw Error("Unable to allocate new int vector on heap.");
          for (const e4 of t2) this.i._addIntVectorEntry(r2, e4);
          this.i._addIntVectorToInputStream(r2, e3, n2);
        }));
      }
      addUintVectorToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const r2 = this.i._allocateUintVector(t2.length);
          if (!r2) throw Error("Unable to allocate new unsigned int vector on heap.");
          for (const e4 of t2) this.i._addUintVectorEntry(r2, e4);
          this.i._addUintVectorToInputStream(r2, e3, n2);
        }));
      }
      addStringVectorToStream(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const r2 = this.i._allocateStringVector(t2.length);
          if (!r2) throw Error("Unable to allocate new string vector on heap.");
          for (const e4 of t2) na(this, e4, ((t3) => {
            this.i._addStringVectorEntry(r2, t3);
          }));
          this.i._addStringVectorToInputStream(r2, e3, n2);
        }));
      }
      addBoolToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          this.i._addBoolToInputSidePacket(t2, e3);
        }));
      }
      addDoubleToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          this.i._addDoubleToInputSidePacket(t2, e3);
        }));
      }
      addFloatToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          this.i._addFloatToInputSidePacket(t2, e3);
        }));
      }
      addIntToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          this.i._addIntToInputSidePacket(t2, e3);
        }));
      }
      addUintToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          this.i._addUintToInputSidePacket(t2, e3);
        }));
      }
      addStringToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          na(this, t2, ((t3) => {
            this.i._addStringToInputSidePacket(t3, e3);
          }));
        }));
      }
      addProtoToInputSidePacket(t2, e2, n2) {
        na(this, n2, ((n3) => {
          na(this, e2, ((e3) => {
            const r2 = this.i._malloc(t2.length);
            this.i.HEAPU8.set(t2, r2), this.i._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.i._free(r2);
          }));
        }));
      }
      addBoolVectorToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          const n2 = this.i._allocateBoolVector(t2.length);
          if (!n2) throw Error("Unable to allocate new bool vector on heap.");
          for (const e4 of t2) this.i._addBoolVectorEntry(n2, e4);
          this.i._addBoolVectorToInputSidePacket(n2, e3);
        }));
      }
      addDoubleVectorToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          const n2 = this.i._allocateDoubleVector(t2.length);
          if (!n2) throw Error("Unable to allocate new double vector on heap.");
          for (const e4 of t2) this.i._addDoubleVectorEntry(n2, e4);
          this.i._addDoubleVectorToInputSidePacket(n2, e3);
        }));
      }
      addFloatVectorToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          const n2 = this.i._allocateFloatVector(t2.length);
          if (!n2) throw Error("Unable to allocate new float vector on heap.");
          for (const e4 of t2) this.i._addFloatVectorEntry(n2, e4);
          this.i._addFloatVectorToInputSidePacket(n2, e3);
        }));
      }
      addIntVectorToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          const n2 = this.i._allocateIntVector(t2.length);
          if (!n2) throw Error("Unable to allocate new int vector on heap.");
          for (const e4 of t2) this.i._addIntVectorEntry(n2, e4);
          this.i._addIntVectorToInputSidePacket(n2, e3);
        }));
      }
      addUintVectorToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          const n2 = this.i._allocateUintVector(t2.length);
          if (!n2) throw Error("Unable to allocate new unsigned int vector on heap.");
          for (const e4 of t2) this.i._addUintVectorEntry(n2, e4);
          this.i._addUintVectorToInputSidePacket(n2, e3);
        }));
      }
      addStringVectorToInputSidePacket(t2, e2) {
        na(this, e2, ((e3) => {
          const n2 = this.i._allocateStringVector(t2.length);
          if (!n2) throw Error("Unable to allocate new string vector on heap.");
          for (const e4 of t2) na(this, e4, ((t3) => {
            this.i._addStringVectorEntry(n2, t3);
          }));
          this.i._addStringVectorToInputSidePacket(n2, e3);
        }));
      }
      attachBoolListener(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachBoolListener(t3);
        }));
      }
      attachBoolVectorListener(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachBoolVectorListener(t3);
        }));
      }
      attachIntListener(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachIntListener(t3);
        }));
      }
      attachIntVectorListener(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachIntVectorListener(t3);
        }));
      }
      attachUintListener(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachUintListener(t3);
        }));
      }
      attachUintVectorListener(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachUintVectorListener(t3);
        }));
      }
      attachDoubleListener(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachDoubleListener(t3);
        }));
      }
      attachDoubleVectorListener(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachDoubleVectorListener(t3);
        }));
      }
      attachFloatListener(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachFloatListener(t3);
        }));
      }
      attachFloatVectorListener(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachFloatVectorListener(t3);
        }));
      }
      attachStringListener(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachStringListener(t3);
        }));
      }
      attachStringVectorListener(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachStringVectorListener(t3);
        }));
      }
      attachProtoListener(t2, e2, n2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachProtoListener(t3, n2 || false);
        }));
      }
      attachProtoVectorListener(t2, e2, n2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.i._attachProtoVectorListener(t3, n2 || false);
        }));
      }
      attachAudioListener(t2, e2, n2) {
        this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), sa(this, t2, ((t3, n3) => {
          t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
        })), na(this, t2, ((t3) => {
          this.i._attachAudioListener(t3, n2 || false);
        }));
      }
      finishProcessing() {
        this.i._waitUntilIdle();
      }
      closeGraph() {
        this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
      }
    }, class extends oc {
      get ga() {
        return this.i;
      }
      pa(t2, e2, n2) {
        na(this, e2, ((e3) => {
          const [r2, i2] = ra(this, t2, e3);
          this.ga._addBoundTextureAsImageToStream(e3, r2, i2, n2);
        }));
      }
      Z(t2, e2) {
        sa(this, t2, e2), na(this, t2, ((t3) => {
          this.ga._attachImageListener(t3);
        }));
      }
      aa(t2, e2) {
        oa(this, t2, e2), na(this, t2, ((t3) => {
          this.ga._attachImageVectorListener(t3);
        }));
      }
    }));
    ac = class extends sc {
    };
    dc = class extends pa {
      constructor(t2, e2, n2, r2) {
        super(t2), this.g = t2, this.X = e2, this.U = n2, this.oa = r2, this.P = new ba();
      }
      l(t2, e2 = true) {
        if ("runningMode" in t2 && Ze(this.baseOptions, 2, Jt(!!t2.runningMode && "IMAGE" !== t2.runningMode)), void 0 !== t2.canvas && this.g.i.canvas !== t2.canvas) throw Error("You must create a new task to reset the canvas.");
        return super.l(t2, e2);
      }
      close() {
        this.P.close(), super.close();
      }
    };
    dc.prototype.close = dc.prototype.close;
    pc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect_in", false), this.j = { detections: [] }, wn(t2 = this.h = new zs(), 0, 1, e2 = new Xs()), Ln(this.h, 2, 0.5), Ln(this.h, 3, 0.3);
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return "minDetectionConfidence" in t2 && Ln(this.h, 2, t2.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in t2 && Ln(this.h, 3, t2.minSuppressionThreshold ?? 0.3), this.l(t2);
      }
      F(t2, e2) {
        return this.j = { detections: [] }, uc(this, t2, e2), this.j;
      }
      G(t2, e2, n2) {
        return this.j = { detections: [] }, lc(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect_in"), us(t2, "detections");
        const e2 = new Qi();
        xr(e2, Ys, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect_in"), rs(n2, "DETECTIONS:detections"), n2.o(e2), cs(t2, n2), this.g.attachProtoVectorListener("detections", ((t3, e3) => {
          for (const e4 of t3) t3 = ws(e4), this.j.detections.push(Xo(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("detections", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    pc.prototype.detectForVideo = pc.prototype.G, pc.prototype.detect = pc.prototype.F, pc.prototype.setOptions = pc.prototype.o, pc.createFromModelPath = async function(t2, e2) {
      return cc(pc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, pc.createFromModelBuffer = function(t2, e2) {
      return cc(pc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, pc.createFromOptions = function(t2, e2) {
      return cc(pc, t2, e2);
    };
    gc = ic([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
    mc = ic([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
    yc = ic([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
    _c = ic([474, 475], [475, 476], [476, 477], [477, 474]);
    vc = ic([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
    Ec = ic([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
    wc = ic([469, 470], [470, 471], [471, 472], [472, 469]);
    Tc = ic([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
    Ac = [...gc, ...mc, ...yc, ...vc, ...Ec, ...Tc];
    bc = ic([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
    Sc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect", false), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = false, wn(t2 = this.h = new Js(), 0, 1, e2 = new Xs()), this.A = new $s(), wn(this.h, 0, 3, this.A), this.u = new zs(), wn(this.h, 0, 2, this.u), xn(this.u, 4, 1), Ln(this.u, 2, 0.5), Ln(this.A, 2, 0.5), Ln(this.h, 4, 0.5);
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return "numFaces" in t2 && xn(this.u, 4, t2.numFaces ?? 1), "minFaceDetectionConfidence" in t2 && Ln(this.u, 2, t2.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Ln(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in t2 && Ln(this.A, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t2 && (this.outputFacialTransformationMatrixes = !!t2.outputFacialTransformationMatrixes), this.l(t2);
      }
      F(t2, e2) {
        return kc(this), uc(this, t2, e2), this.j;
      }
      G(t2, e2, n2) {
        return kc(this), lc(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect"), us(t2, "face_landmarks");
        const e2 = new Qi();
        xr(e2, Qs, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "NORM_LANDMARKS:face_landmarks"), n2.o(e2), cs(t2, n2), this.g.attachProtoVectorListener("face_landmarks", ((t3, e3) => {
          for (const e4 of t3) t3 = ks(e4), this.j.faceLandmarks.push(Ho(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("face_landmarks", ((t3) => {
          ua(this, t3);
        })), this.outputFaceBlendshapes && (us(t2, "blendshapes"), rs(n2, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", ((t3, e3) => {
          if (this.outputFaceBlendshapes) for (const e4 of t3) t3 = ys(e4), this.j.faceBlendshapes.push(jo(t3.g() ?? []));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("blendshapes", ((t3) => {
          ua(this, t3);
        }))), this.outputFacialTransformationMatrixes && (us(t2, "face_geometry"), rs(n2, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", ((t3, e3) => {
          if (this.outputFacialTransformationMatrixes) for (const e4 of t3) (t3 = yn(t3 = qs(e4), Ss, 2)) && this.j.facialTransformationMatrixes.push({ rows: kn(t3, 1) ?? 0 ?? 0, columns: kn(t3, 2) ?? 0 ?? 0, data: en(t3, 3, $t, tn()).slice() ?? [] });
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("face_geometry", ((t3) => {
          ua(this, t3);
        }))), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Sc.prototype.detectForVideo = Sc.prototype.G, Sc.prototype.detect = Sc.prototype.F, Sc.prototype.setOptions = Sc.prototype.o, Sc.createFromModelPath = function(t2, e2) {
      return cc(Sc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Sc.createFromModelBuffer = function(t2, e2) {
      return cc(Sc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Sc.createFromOptions = function(t2, e2) {
      return cc(Sc, t2, e2);
    }, Sc.FACE_LANDMARKS_LIPS = gc, Sc.FACE_LANDMARKS_LEFT_EYE = mc, Sc.FACE_LANDMARKS_LEFT_EYEBROW = yc, Sc.FACE_LANDMARKS_LEFT_IRIS = _c, Sc.FACE_LANDMARKS_RIGHT_EYE = vc, Sc.FACE_LANDMARKS_RIGHT_EYEBROW = Ec, Sc.FACE_LANDMARKS_RIGHT_IRIS = wc, Sc.FACE_LANDMARKS_FACE_OVAL = Tc, Sc.FACE_LANDMARKS_CONTOURS = Ac, Sc.FACE_LANDMARKS_TESSELATION = bc;
    xc = ic([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
    Fc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect", false), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], wn(t2 = this.j = new oo(), 0, 1, e2 = new Xs()), this.u = new so(), wn(this.j, 0, 2, this.u), this.D = new io(), wn(this.u, 0, 3, this.D), this.A = new ro(), wn(this.u, 0, 2, this.A), this.h = new no(), wn(this.j, 0, 3, this.h), Ln(this.A, 2, 0.5), Ln(this.u, 4, 0.5), Ln(this.D, 2, 0.5);
      }
      get baseOptions() {
        return yn(this.j, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.j, 0, 1, t2);
      }
      o(t2) {
        if (xn(this.A, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && Ln(this.A, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Ln(this.u, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && Ln(this.D, 2, t2.minHandPresenceConfidence ?? 0.5), t2.cannedGesturesClassifierOptions) {
          var e2 = new to(), n2 = e2, r2 = Bo(t2.cannedGesturesClassifierOptions, yn(this.h, to, 3)?.l());
          wn(n2, 0, 2, r2), wn(this.h, 0, 3, e2);
        } else void 0 === t2.cannedGesturesClassifierOptions && yn(this.h, to, 3)?.g();
        return t2.customGesturesClassifierOptions ? (wn(n2 = e2 = new to(), 0, 2, r2 = Bo(t2.customGesturesClassifierOptions, yn(this.h, to, 4)?.l())), wn(this.h, 0, 4, e2)) : void 0 === t2.customGesturesClassifierOptions && yn(this.h, to, 4)?.g(), this.l(t2);
      }
      Ha(t2, e2) {
        return Lc(this), uc(this, t2, e2), Rc(this);
      }
      Ia(t2, e2, n2) {
        return Lc(this), lc(this, t2, n2, e2), Rc(this);
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect"), us(t2, "hand_gestures"), us(t2, "hand_landmarks"), us(t2, "world_hand_landmarks"), us(t2, "handedness");
        const e2 = new Qi();
        xr(e2, lo, this.j);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "HAND_GESTURES:hand_gestures"), rs(n2, "LANDMARKS:hand_landmarks"), rs(n2, "WORLD_LANDMARKS:world_hand_landmarks"), rs(n2, "HANDEDNESS:handedness"), n2.o(e2), cs(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", ((t3, e3) => {
          for (const e4 of t3) {
            t3 = ks(e4);
            const n3 = [];
            for (const e5 of vn(t3, bs, 1)) n3.push({ x: Sn(e5, 1) ?? 0, y: Sn(e5, 2) ?? 0, z: Sn(e5, 3) ?? 0, visibility: Sn(e5, 4) ?? 0 });
            this.landmarks.push(n3);
          }
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("hand_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoVectorListener("world_hand_landmarks", ((t3, e3) => {
          for (const e4 of t3) {
            t3 = As(e4);
            const n3 = [];
            for (const e5 of vn(t3, Ts, 1)) n3.push({ x: Sn(e5, 1) ?? 0, y: Sn(e5, 2) ?? 0, z: Sn(e5, 3) ?? 0, visibility: Sn(e5, 4) ?? 0 });
            this.worldLandmarks.push(n3);
          }
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoVectorListener("hand_gestures", ((t3, e3) => {
          this.gestures.push(...Ic(t3, false)), ua(this, e3);
        })), this.g.attachEmptyPacketListener("hand_gestures", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoVectorListener("handedness", ((t3, e3) => {
          this.handedness.push(...Ic(t3)), ua(this, e3);
        })), this.g.attachEmptyPacketListener("handedness", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Fc.prototype.recognizeForVideo = Fc.prototype.Ia, Fc.prototype.recognize = Fc.prototype.Ha, Fc.prototype.setOptions = Fc.prototype.o, Fc.createFromModelPath = function(t2, e2) {
      return cc(Fc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Fc.createFromModelBuffer = function(t2, e2) {
      return cc(Fc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Fc.createFromOptions = function(t2, e2) {
      return cc(Fc, t2, e2);
    }, Fc.HAND_CONNECTIONS = xc;
    Pc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], wn(t2 = this.h = new so(), 0, 1, e2 = new Xs()), this.u = new io(), wn(this.h, 0, 3, this.u), this.j = new ro(), wn(this.h, 0, 2, this.j), xn(this.j, 3, 1), Ln(this.j, 2, 0.5), Ln(this.u, 2, 0.5), Ln(this.h, 4, 0.5);
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return "numHands" in t2 && xn(this.j, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && Ln(this.j, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Ln(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && Ln(this.u, 2, t2.minHandPresenceConfidence ?? 0.5), this.l(t2);
      }
      F(t2, e2) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], uc(this, t2, e2), Mc(this);
      }
      G(t2, e2, n2) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], lc(this, t2, n2, e2), Mc(this);
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect"), us(t2, "hand_landmarks"), us(t2, "world_hand_landmarks"), us(t2, "handedness");
        const e2 = new Qi();
        xr(e2, fo, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "LANDMARKS:hand_landmarks"), rs(n2, "WORLD_LANDMARKS:world_hand_landmarks"), rs(n2, "HANDEDNESS:handedness"), n2.o(e2), cs(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", ((t3, e3) => {
          for (const e4 of t3) t3 = ks(e4), this.landmarks.push(Ho(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("hand_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoVectorListener("world_hand_landmarks", ((t3, e3) => {
          for (const e4 of t3) t3 = As(e4), this.worldLandmarks.push(Wo(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoVectorListener("handedness", ((t3, e3) => {
          var n3 = this.handedness, r2 = n3.push;
          const i2 = [];
          for (const e4 of t3) {
            t3 = ys(e4);
            const n4 = [];
            for (const e5 of t3.g()) n4.push({ score: Sn(e5, 2) ?? 0, index: kn(e5, 1) ?? 0 ?? -1, categoryName: le($e(e5, 3)) ?? "" ?? "", displayName: le($e(e5, 4)) ?? "" ?? "" });
            i2.push(n4);
          }
          r2.call(n3, ...i2), ua(this, e3);
        })), this.g.attachEmptyPacketListener("handedness", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Pc.prototype.detectForVideo = Pc.prototype.G, Pc.prototype.detect = Pc.prototype.F, Pc.prototype.setOptions = Pc.prototype.o, Pc.createFromModelPath = function(t2, e2) {
      return cc(Pc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Pc.createFromModelBuffer = function(t2, e2) {
      return cc(Pc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Pc.createFromOptions = function(t2, e2) {
      return cc(Pc, t2, e2);
    }, Pc.HAND_CONNECTIONS = xc;
    Cc = ic([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
    Dc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "input_frames_image", null, false), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = false, wn(t2 = this.j = new yo(), 0, 1, e2 = new Xs()), this.I = new io(), wn(this.j, 0, 2, this.I), this.W = new po(), wn(this.j, 0, 3, this.W), this.u = new zs(), wn(this.j, 0, 4, this.u), this.O = new $s(), wn(this.j, 0, 5, this.O), this.A = new go(), wn(this.j, 0, 6, this.A), this.M = new mo(), wn(this.j, 0, 7, this.M), Ln(this.u, 2, 0.5), Ln(this.u, 3, 0.3), Ln(this.O, 2, 0.5), Ln(this.A, 2, 0.5), Ln(this.A, 3, 0.3), Ln(this.M, 2, 0.5), Ln(this.I, 2, 0.5);
      }
      get baseOptions() {
        return yn(this.j, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.j, 0, 1, t2);
      }
      o(t2) {
        return "minFaceDetectionConfidence" in t2 && Ln(this.u, 2, t2.minFaceDetectionConfidence ?? 0.5), "minFaceSuppressionThreshold" in t2 && Ln(this.u, 3, t2.minFaceSuppressionThreshold ?? 0.3), "minFacePresenceConfidence" in t2 && Ln(this.O, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "minPoseDetectionConfidence" in t2 && Ln(this.A, 2, t2.minPoseDetectionConfidence ?? 0.5), "minPoseSuppressionThreshold" in t2 && Ln(this.A, 3, t2.minPoseSuppressionThreshold ?? 0.3), "minPosePresenceConfidence" in t2 && Ln(this.M, 2, t2.minPosePresenceConfidence ?? 0.5), "outputPoseSegmentationMasks" in t2 && (this.outputPoseSegmentationMasks = !!t2.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t2 && Ln(this.I, 2, t2.minHandLandmarksConfidence ?? 0.5), this.l(t2);
      }
      F(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        return this.D = "function" == typeof e2 ? e2 : n2, Oc(this), uc(this, t2, r2), Nc(this);
      }
      G(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        return this.D = "function" == typeof n2 ? n2 : r2, Oc(this), lc(this, t2, i2, e2), Nc(this);
      }
      m() {
        var t2 = new ls();
        hs(t2, "input_frames_image"), us(t2, "pose_landmarks"), us(t2, "pose_world_landmarks"), us(t2, "face_landmarks"), us(t2, "left_hand_landmarks"), us(t2, "left_hand_world_landmarks"), us(t2, "right_hand_landmarks"), us(t2, "right_hand_world_landmarks");
        const e2 = new Qi(), n2 = new Bi();
        Rn(n2, 1, "type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), (function(t3, e3) {
          if (null != e3) if (Array.isArray(e3)) Ze(t3, 2, Ie(e3, 0, Me));
          else {
            if (!("string" == typeof e3 || e3 instanceof F || x(e3))) throw Error("invalid value in Any.value field: " + e3 + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
            hn(t3, 2, ht(e3, false), R());
          }
        })(n2, this.j.g());
        const r2 = new is();
        Rn(r2, 2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), bn(r2, 8, Bi, n2), ns(r2, "IMAGE:input_frames_image"), rs(r2, "POSE_LANDMARKS:pose_landmarks"), rs(r2, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), rs(r2, "FACE_LANDMARKS:face_landmarks"), rs(r2, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), rs(r2, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), rs(r2, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), rs(r2, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), r2.o(e2), cs(t2, r2), la(this, t2), this.g.attachProtoListener("pose_landmarks", ((t3, e3) => {
          Uc(t3, this.h.poseLandmarks), ua(this, e3);
        })), this.g.attachEmptyPacketListener("pose_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoListener("pose_world_landmarks", ((t3, e3) => {
          var n3 = this.h.poseWorldLandmarks;
          t3 = As(t3), n3.push(Wo(t3)), ua(this, e3);
        })), this.g.attachEmptyPacketListener("pose_world_landmarks", ((t3) => {
          ua(this, t3);
        })), this.outputPoseSegmentationMasks && (rs(r2, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), fa(this, "pose_segmentation_mask"), this.g.Z("pose_segmentation_mask", ((t3, e3) => {
          this.h.poseSegmentationMasks = [fc(this, t3, true, !this.D)], ua(this, e3);
        })), this.g.attachEmptyPacketListener("pose_segmentation_mask", ((t3) => {
          this.h.poseSegmentationMasks = [], ua(this, t3);
        }))), this.g.attachProtoListener("face_landmarks", ((t3, e3) => {
          Uc(t3, this.h.faceLandmarks), ua(this, e3);
        })), this.g.attachEmptyPacketListener("face_landmarks", ((t3) => {
          ua(this, t3);
        })), this.outputFaceBlendshapes && (us(t2, "extra_blendshapes"), rs(r2, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", ((t3, e3) => {
          var n3 = this.h.faceBlendshapes;
          this.outputFaceBlendshapes && (t3 = ys(t3), n3.push(jo(t3.g() ?? []))), ua(this, e3);
        })), this.g.attachEmptyPacketListener("extra_blendshapes", ((t3) => {
          ua(this, t3);
        }))), this.g.attachProtoListener("left_hand_landmarks", ((t3, e3) => {
          Uc(t3, this.h.leftHandLandmarks), ua(this, e3);
        })), this.g.attachEmptyPacketListener("left_hand_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoListener("left_hand_world_landmarks", ((t3, e3) => {
          var n3 = this.h.leftHandWorldLandmarks;
          t3 = As(t3), n3.push(Wo(t3)), ua(this, e3);
        })), this.g.attachEmptyPacketListener("left_hand_world_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoListener("right_hand_landmarks", ((t3, e3) => {
          Uc(t3, this.h.rightHandLandmarks), ua(this, e3);
        })), this.g.attachEmptyPacketListener("right_hand_landmarks", ((t3) => {
          ua(this, t3);
        })), this.g.attachProtoListener("right_hand_world_landmarks", ((t3, e3) => {
          var n3 = this.h.rightHandWorldLandmarks;
          t3 = As(t3), n3.push(Wo(t3)), ua(this, e3);
        })), this.g.attachEmptyPacketListener("right_hand_world_landmarks", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Dc.prototype.detectForVideo = Dc.prototype.G, Dc.prototype.detect = Dc.prototype.F, Dc.prototype.setOptions = Dc.prototype.o, Dc.createFromModelPath = function(t2, e2) {
      return cc(Dc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Dc.createFromModelBuffer = function(t2, e2) {
      return cc(Dc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Dc.createFromOptions = function(t2, e2) {
      return cc(Dc, t2, e2);
    }, Dc.HAND_CONNECTIONS = xc, Dc.POSE_CONNECTIONS = Cc, Dc.FACE_LANDMARKS_LIPS = gc, Dc.FACE_LANDMARKS_LEFT_EYE = mc, Dc.FACE_LANDMARKS_LEFT_EYEBROW = yc, Dc.FACE_LANDMARKS_LEFT_IRIS = _c, Dc.FACE_LANDMARKS_RIGHT_EYE = vc, Dc.FACE_LANDMARKS_RIGHT_EYEBROW = Ec, Dc.FACE_LANDMARKS_RIGHT_IRIS = wc, Dc.FACE_LANDMARKS_FACE_OVAL = Tc, Dc.FACE_LANDMARKS_CONTOURS = Ac, Dc.FACE_LANDMARKS_TESSELATION = bc;
    Bc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "input_image", "norm_rect", true), this.j = { classifications: [] }, wn(t2 = this.h = new Eo(), 0, 1, e2 = new Xs());
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return wn(this.h, 0, 2, Bo(t2, yn(this.h, Ns, 2))), this.l(t2);
      }
      sa(t2, e2) {
        return this.j = { classifications: [] }, uc(this, t2, e2), this.j;
      }
      ta(t2, e2, n2) {
        return this.j = { classifications: [] }, lc(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new ls();
        hs(t2, "input_image"), hs(t2, "norm_rect"), us(t2, "classifications");
        const e2 = new Qi();
        xr(e2, wo, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), ns(n2, "IMAGE:input_image"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "CLASSIFICATIONS:classifications"), n2.o(e2), cs(t2, n2), this.g.attachProtoListener("classifications", ((t3, e3) => {
          this.j = Vo(Is(t3)), ua(this, e3);
        })), this.g.attachEmptyPacketListener("classifications", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Bc.prototype.classifyForVideo = Bc.prototype.ta, Bc.prototype.classify = Bc.prototype.sa, Bc.prototype.setOptions = Bc.prototype.o, Bc.createFromModelPath = function(t2, e2) {
      return cc(Bc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Bc.createFromModelBuffer = function(t2, e2) {
      return cc(Bc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Bc.createFromOptions = function(t2, e2) {
      return cc(Bc, t2, e2);
    };
    Gc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect", true), this.h = new To(), this.embeddings = { embeddings: [] }, wn(t2 = this.h, 0, 1, e2 = new Xs());
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        var e2 = this.h, n2 = yn(this.h, Ds, 2);
        return n2 = n2 ? n2.clone() : new Ds(), void 0 !== t2.l2Normalize ? Ze(n2, 1, Jt(t2.l2Normalize)) : "l2Normalize" in t2 && Ze(n2, 1), void 0 !== t2.quantize ? Ze(n2, 2, Jt(t2.quantize)) : "quantize" in t2 && Ze(n2, 2), wn(e2, 0, 2, n2), this.l(t2);
      }
      za(t2, e2) {
        return uc(this, t2, e2), this.embeddings;
      }
      Aa(t2, e2, n2) {
        return lc(this, t2, n2, e2), this.embeddings;
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect"), us(t2, "embeddings_out");
        const e2 = new Qi();
        xr(e2, Ao, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "EMBEDDINGS:embeddings_out"), n2.o(e2), cs(t2, n2), this.g.attachProtoListener("embeddings_out", ((t3, e3) => {
          t3 = Os(t3), this.embeddings = (function(t4) {
            return { embeddings: vn(t4, Ps, 1).map(((t5) => {
              const e4 = { headIndex: kn(t5, 3) ?? 0 ?? -1, headName: le($e(t5, 4)) ?? "" ?? "" };
              var n3 = t5.v;
              return void 0 !== mn(n3, 0 | n3[Q], Fs, ln(t5, 1)) ? (t5 = en(t5 = yn(t5, Fs, ln(t5, 1), void 0), 1, $t, tn()), e4.floatEmbedding = t5.slice()) : (n3 = new Uint8Array(0), e4.quantizedEmbedding = yn(t5, Ms, ln(t5, 2), void 0)?.na()?.h() ?? n3), e4;
            })), timestampMs: Go($e(t4, 2, void 0, void 0, ce) ?? Ye) };
          })(t3), ua(this, e3);
        })), this.g.attachEmptyPacketListener("embeddings_out", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Gc.cosineSimilarity = function(t2, e2) {
      if (t2.floatEmbedding && e2.floatEmbedding) t2 = Ko(t2.floatEmbedding, e2.floatEmbedding);
      else {
        if (!t2.quantizedEmbedding || !e2.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
        t2 = Ko(zo(t2.quantizedEmbedding), zo(e2.quantizedEmbedding));
      }
      return t2;
    }, Gc.prototype.embedForVideo = Gc.prototype.Aa, Gc.prototype.embed = Gc.prototype.za, Gc.prototype.setOptions = Gc.prototype.o, Gc.createFromModelPath = function(t2, e2) {
      return cc(Gc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Gc.createFromModelBuffer = function(t2, e2) {
      return cc(Gc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Gc.createFromOptions = function(t2, e2) {
      return cc(Gc, t2, e2);
    };
    jc = class {
      constructor(t2, e2, n2) {
        this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
      }
      close() {
        this.confidenceMasks?.forEach(((t2) => {
          t2.close();
        })), this.categoryMask?.close();
      }
    };
    jc.prototype.close = jc.prototype.close;
    Wc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect", false), this.u = [], this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new Lo(), this.A = new bo(), wn(this.h, 0, 3, this.A), wn(t2 = this.h, 0, 1, e2 = new Xs());
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return void 0 !== t2.displayNamesLocale ? Ze(this.h, 2, ue(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && Ze(this.h, 2), "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
      }
      L() {
        Vc(this);
      }
      segment(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        return this.j = "function" == typeof e2 ? e2 : n2, Xc(this), uc(this, t2, r2), Hc(this);
      }
      La(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        return this.j = "function" == typeof n2 ? n2 : r2, Xc(this), lc(this, t2, i2, e2), Hc(this);
      }
      Da() {
        return this.u;
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect");
        const e2 = new Qi();
        xr(e2, Ro, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect"), n2.o(e2), cs(t2, n2), la(this, t2), this.outputConfidenceMasks && (us(t2, "confidence_masks"), rs(n2, "CONFIDENCE_MASKS:confidence_masks"), fa(this, "confidence_masks"), this.g.aa("confidence_masks", ((t3, e3) => {
          this.confidenceMasks = t3.map(((t4) => fc(this, t4, true, !this.j))), ua(this, e3);
        })), this.g.attachEmptyPacketListener("confidence_masks", ((t3) => {
          this.confidenceMasks = [], ua(this, t3);
        }))), this.outputCategoryMask && (us(t2, "category_mask"), rs(n2, "CATEGORY_MASK:category_mask"), fa(this, "category_mask"), this.g.Z("category_mask", ((t3, e3) => {
          this.categoryMask = fc(this, t3, false, !this.j), ua(this, e3);
        })), this.g.attachEmptyPacketListener("category_mask", ((t3) => {
          this.categoryMask = void 0, ua(this, t3);
        }))), us(t2, "quality_scores"), rs(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((t3, e3) => {
          this.qualityScores = t3, ua(this, e3);
        })), this.g.attachEmptyPacketListener("quality_scores", ((t3) => {
          this.categoryMask = void 0, ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Wc.prototype.getLabels = Wc.prototype.Da, Wc.prototype.segmentForVideo = Wc.prototype.La, Wc.prototype.segment = Wc.prototype.segment, Wc.prototype.setOptions = Wc.prototype.o, Wc.createFromModelPath = function(t2, e2) {
      return cc(Wc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Wc.createFromModelBuffer = function(t2, e2) {
      return cc(Wc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Wc.createFromOptions = function(t2, e2) {
      return cc(Wc, t2, e2);
    };
    zc = class {
      constructor(t2, e2, n2) {
        this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
      }
      close() {
        this.confidenceMasks?.forEach(((t2) => {
          t2.close();
        })), this.categoryMask?.close();
      }
    };
    zc.prototype.close = zc.prototype.close;
    Kc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect_in", false), this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new Lo(), this.u = new bo(), wn(this.h, 0, 3, this.u), wn(t2 = this.h, 0, 1, e2 = new Xs());
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
      }
      segment(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        if (this.j = "function" == typeof n2 ? n2 : r2, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n2 = this.C + 1, r2 = new Po(), e2.keypoint && e2.scribble) throw Error("Cannot provide both keypoint and scribble.");
        if (e2.keypoint) {
          var s2 = new Io();
          hn(s2, 3, Jt(true), false), hn(s2, 1, qt(e2.keypoint.x), 0), hn(s2, 2, qt(e2.keypoint.y), 0), Tn(r2, 1, Co, s2);
        } else {
          if (!e2.scribble) throw Error("Must provide either a keypoint or a scribble.");
          {
            const t3 = new Mo();
            for (s2 of e2.scribble) hn(e2 = new Io(), 3, Jt(true), false), hn(e2, 1, qt(s2.x), 0), hn(e2, 2, qt(s2.y), 0), bn(t3, 1, Io, e2);
            Tn(r2, 2, Co, t3);
          }
        }
        this.g.addProtoToStream(r2.g(), "mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest", "roi_in", n2), uc(this, t2, i2);
        t: {
          try {
            const t3 = new zc(this.confidenceMasks, this.categoryMask, this.qualityScores);
            if (!this.j) {
              var o2 = t3;
              break t;
            }
            this.j(t3);
          } finally {
            da(this);
          }
          o2 = void 0;
        }
        return o2;
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "roi_in"), hs(t2, "norm_rect_in");
        const e2 = new Qi();
        xr(e2, Ro, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"), ns(n2, "IMAGE:image_in"), ns(n2, "ROI:roi_in"), ns(n2, "NORM_RECT:norm_rect_in"), n2.o(e2), cs(t2, n2), la(this, t2), this.outputConfidenceMasks && (us(t2, "confidence_masks"), rs(n2, "CONFIDENCE_MASKS:confidence_masks"), fa(this, "confidence_masks"), this.g.aa("confidence_masks", ((t3, e3) => {
          this.confidenceMasks = t3.map(((t4) => fc(this, t4, true, !this.j))), ua(this, e3);
        })), this.g.attachEmptyPacketListener("confidence_masks", ((t3) => {
          this.confidenceMasks = [], ua(this, t3);
        }))), this.outputCategoryMask && (us(t2, "category_mask"), rs(n2, "CATEGORY_MASK:category_mask"), fa(this, "category_mask"), this.g.Z("category_mask", ((t3, e3) => {
          this.categoryMask = fc(this, t3, false, !this.j), ua(this, e3);
        })), this.g.attachEmptyPacketListener("category_mask", ((t3) => {
          this.categoryMask = void 0, ua(this, t3);
        }))), us(t2, "quality_scores"), rs(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((t3, e3) => {
          this.qualityScores = t3, ua(this, e3);
        })), this.g.attachEmptyPacketListener("quality_scores", ((t3) => {
          this.categoryMask = void 0, ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Kc.prototype.segment = Kc.prototype.segment, Kc.prototype.setOptions = Kc.prototype.o, Kc.createFromModelPath = function(t2, e2) {
      return cc(Kc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Kc.createFromModelBuffer = function(t2, e2) {
      return cc(Kc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Kc.createFromOptions = function(t2, e2) {
      return cc(Kc, t2, e2);
    };
    Yc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "input_frame_gpu", "norm_rect", false), this.j = { detections: [] }, wn(t2 = this.h = new Oo(), 0, 1, e2 = new Xs());
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return void 0 !== t2.displayNamesLocale ? Ze(this.h, 2, ue(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && Ze(this.h, 2), void 0 !== t2.maxResults ? xn(this.h, 3, t2.maxResults) : "maxResults" in t2 && Ze(this.h, 3), void 0 !== t2.scoreThreshold ? Ln(this.h, 4, t2.scoreThreshold) : "scoreThreshold" in t2 && Ze(this.h, 4), void 0 !== t2.categoryAllowlist ? In(this.h, 5, t2.categoryAllowlist) : "categoryAllowlist" in t2 && Ze(this.h, 5), void 0 !== t2.categoryDenylist ? In(this.h, 6, t2.categoryDenylist) : "categoryDenylist" in t2 && Ze(this.h, 6), this.l(t2);
      }
      F(t2, e2) {
        return this.j = { detections: [] }, uc(this, t2, e2), this.j;
      }
      G(t2, e2, n2) {
        return this.j = { detections: [] }, lc(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new ls();
        hs(t2, "input_frame_gpu"), hs(t2, "norm_rect"), us(t2, "detections");
        const e2 = new Qi();
        xr(e2, No, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.ObjectDetectorGraph"), ns(n2, "IMAGE:input_frame_gpu"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "DETECTIONS:detections"), n2.o(e2), cs(t2, n2), this.g.attachProtoVectorListener("detections", ((t3, e3) => {
          for (const e4 of t3) t3 = ws(e4), this.j.detections.push(Xo(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("detections", ((t3) => {
          ua(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Yc.prototype.detectForVideo = Yc.prototype.G, Yc.prototype.detect = Yc.prototype.F, Yc.prototype.setOptions = Yc.prototype.o, Yc.createFromModelPath = async function(t2, e2) {
      return cc(Yc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Yc.createFromModelBuffer = function(t2, e2) {
      return cc(Yc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Yc.createFromOptions = function(t2, e2) {
      return cc(Yc, t2, e2);
    };
    qc = class {
      constructor(t2, e2, n2) {
        this.landmarks = t2, this.worldLandmarks = e2, this.segmentationMasks = n2;
      }
      close() {
        this.segmentationMasks?.forEach(((t2) => {
          t2.close();
        }));
      }
    };
    qc.prototype.close = qc.prototype.close;
    Zc = class extends dc {
      constructor(t2, e2) {
        super(new ac(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = false, wn(t2 = this.h = new Uo(), 0, 1, e2 = new Xs()), this.A = new mo(), wn(this.h, 0, 3, this.A), this.j = new go(), wn(this.h, 0, 2, this.j), xn(this.j, 4, 1), Ln(this.j, 2, 0.5), Ln(this.A, 2, 0.5), Ln(this.h, 4, 0.5);
      }
      get baseOptions() {
        return yn(this.h, Xs, 1);
      }
      set baseOptions(t2) {
        wn(this.h, 0, 1, t2);
      }
      o(t2) {
        return "numPoses" in t2 && xn(this.j, 4, t2.numPoses ?? 1), "minPoseDetectionConfidence" in t2 && Ln(this.j, 2, t2.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Ln(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in t2 && Ln(this.A, 2, t2.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in t2 && (this.outputSegmentationMasks = t2.outputSegmentationMasks ?? false), this.l(t2);
      }
      F(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        return this.u = "function" == typeof e2 ? e2 : n2, $c(this), uc(this, t2, r2), Jc(this);
      }
      G(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        return this.u = "function" == typeof n2 ? n2 : r2, $c(this), lc(this, t2, i2, e2), Jc(this);
      }
      m() {
        var t2 = new ls();
        hs(t2, "image_in"), hs(t2, "norm_rect"), us(t2, "normalized_landmarks"), us(t2, "world_landmarks"), us(t2, "segmentation_masks");
        const e2 = new Qi();
        xr(e2, Do, this.h);
        const n2 = new is();
        Rn(n2, 2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), ns(n2, "IMAGE:image_in"), ns(n2, "NORM_RECT:norm_rect"), rs(n2, "NORM_LANDMARKS:normalized_landmarks"), rs(n2, "WORLD_LANDMARKS:world_landmarks"), n2.o(e2), cs(t2, n2), la(this, t2), this.g.attachProtoVectorListener("normalized_landmarks", ((t3, e3) => {
          this.landmarks = [];
          for (const e4 of t3) t3 = ks(e4), this.landmarks.push(Ho(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("normalized_landmarks", ((t3) => {
          this.landmarks = [], ua(this, t3);
        })), this.g.attachProtoVectorListener("world_landmarks", ((t3, e3) => {
          this.worldLandmarks = [];
          for (const e4 of t3) t3 = As(e4), this.worldLandmarks.push(Wo(t3));
          ua(this, e3);
        })), this.g.attachEmptyPacketListener("world_landmarks", ((t3) => {
          this.worldLandmarks = [], ua(this, t3);
        })), this.outputSegmentationMasks && (rs(n2, "SEGMENTATION_MASK:segmentation_masks"), fa(this, "segmentation_masks"), this.g.aa("segmentation_masks", ((t3, e3) => {
          this.segmentationMasks = t3.map(((t4) => fc(this, t4, true, !this.u))), ua(this, e3);
        })), this.g.attachEmptyPacketListener("segmentation_masks", ((t3) => {
          this.segmentationMasks = [], ua(this, t3);
        }))), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Zc.prototype.detectForVideo = Zc.prototype.G, Zc.prototype.detect = Zc.prototype.F, Zc.prototype.setOptions = Zc.prototype.o, Zc.createFromModelPath = function(t2, e2) {
      return cc(Zc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Zc.createFromModelBuffer = function(t2, e2) {
      return cc(Zc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Zc.createFromOptions = function(t2, e2) {
      return cc(Zc, t2, e2);
    }, Zc.POSE_CONNECTIONS = Cc;
  }
});

// src/pages/AIInterviewPage.jsx
var import_react6 = __toESM(require_react(), 1);

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
    } catch (e2) {
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
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i2],
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
    (a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(
      a2.routesMeta.map((meta) => meta.childrenIndex),
      b2.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
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
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
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
    return value2.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
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
function resolvePath(to2, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
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
  let to2;
  if (typeof toArg === "string") {
    to2 = parsePath(toArg);
  } else {
    to2 = { ...toArg };
    invariant(
      !to2.pathname || !to2.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to2)
    );
    invariant(
      !to2.pathname || !to2.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to2)
    );
    invariant(
      !to2.search || !to2.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to2)
    );
  }
  let isEmptyPath = toArg === "" || to2.pathname === "";
  let toPathname = isEmptyPath ? "/" : to2.pathname;
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
      to2.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from);
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
  let parts2 = matches.map((m2) => m2.route.path).filter(Boolean);
  return joinPaths(parts2) || "/";
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function parseToInfo(_to, basename) {
  let to2 = _to;
  if (typeof to2 !== "string" || !ABSOLUTE_URL_REGEX.test(to2)) {
    return {
      absoluteURL: void 0,
      isExternal: false,
      to: to2
    };
  }
  let absoluteURL = to2;
  let isExternal = false;
  if (isBrowser) {
    try {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to2.startsWith("//") ? new URL(currentUrl.protocol + to2) : new URL(to2);
      let path = stripBasename(targetUrl.pathname, basename);
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to2 = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    } catch (e2) {
      warning(
        false,
        `<Link to="${to2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  }
  return {
    absoluteURL,
    isExternal,
    to: to2
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
function useHref(to2, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = React22.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to2, { relative });
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
    (to2, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to2 === "number") {
        navigator2.go(to2);
        return;
      }
      let path = resolveTo(
        to2,
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
function useResolvedPath(to2, { relative } = {}) {
  let { matches } = React22.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return React22.useMemo(
    () => resolveTo(
      to2,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to2, routePathnamesJson, locationPathname, relative]
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
      (m2) => m2.route.id && errors?.[m2.route.id] !== void 0
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
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match = renderedMatches[i2];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i2;
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
    () => matches.map((m2) => convertRouteMatchToUiMatch(m2, loaderData)),
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
    async (to2, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to2 === "number") {
        await router.navigate(to2);
      } else {
        await router.navigate(to2, { fromRouteId: id, ...options });
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
    } catch (e2) {
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
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
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
    nextMatches.forEach((m2) => {
      let manifestRoute = manifest.routes[m2.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m22) => m22.route.id === m2.route.id) && m2.route.id in loaderData && routeModules[m2.route.id]?.shouldRevalidate) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m2.route.id);
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
        nextMatches.filter((m2) => routesParams.has(m2.route.id)).map((m2) => m2.route.id).join(",")
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
} catch (e2) {
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
    to: to2,
    preventScrollReset,
    viewTransition,
    unstable_defaultShouldRevalidate,
    ...rest
  }, forwardedRef) {
    let { basename, navigator: navigator2, unstable_useTransitions } = React10.useContext(NavigationContext);
    let isAbsolute = typeof to2 === "string" && ABSOLUTE_URL_REGEX2.test(to2);
    let parsed = parseToInfo(to2, basename);
    to2 = parsed.to;
    let href = useHref(to2, { relative });
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
    let internalOnClick = useLinkClickHandler(to2, {
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
    to: to2,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to2, { relative: rest.relative });
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
        to: to2,
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
function useLinkClickHandler(to2, {
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
  let path = useResolvedPath(to2, { relative });
  return React10.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
        let doNavigate = () => navigate(to2, {
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
      to2,
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
    let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
      let qs2 = params.toString();
      path.search = qs2 ? `?${qs2}` : "";
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
      } catch (e2) {
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
function useViewTransitionState(to2, { relative } = {}) {
  let vtContext = React10.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to2, { relative });
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

// node_modules/lucide-react/dist/esm/icons/bot.js
var __iconNode = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
var Bot = createLucideIcon("bot", __iconNode);

// node_modules/lucide-react/dist/esm/icons/camera.js
var __iconNode2 = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
var Camera = createLucideIcon("camera", __iconNode2);

// node_modules/lucide-react/dist/esm/icons/chevron-left.js
var __iconNode3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
var ChevronLeft = createLucideIcon("chevron-left", __iconNode3);

// node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode4);

// node_modules/lucide-react/dist/esm/icons/eye.js
var __iconNode5 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
var Eye = createLucideIcon("eye", __iconNode5);

// node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode6 = [
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
var FileText = createLucideIcon("file-text", __iconNode6);

// node_modules/lucide-react/dist/esm/icons/leaf.js
var __iconNode7 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
var Leaf = createLucideIcon("leaf", __iconNode7);

// node_modules/lucide-react/dist/esm/icons/loader-circle.js
var __iconNode8 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
var LoaderCircle = createLucideIcon("loader-circle", __iconNode8);

// node_modules/lucide-react/dist/esm/icons/mic.js
var __iconNode9 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
var Mic = createLucideIcon("mic", __iconNode9);

// node_modules/lucide-react/dist/esm/icons/moon.js
var __iconNode10 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
var Moon = createLucideIcon("moon", __iconNode10);

// node_modules/lucide-react/dist/esm/icons/refresh-cw.js
var __iconNode11 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
var RefreshCw = createLucideIcon("refresh-cw", __iconNode11);

// node_modules/lucide-react/dist/esm/icons/shield-alert.js
var __iconNode12 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
var ShieldAlert = createLucideIcon("shield-alert", __iconNode12);

// node_modules/lucide-react/dist/esm/icons/smartphone.js
var __iconNode13 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
var Smartphone = createLucideIcon("smartphone", __iconNode13);

// node_modules/lucide-react/dist/esm/icons/star.js
var __iconNode14 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
var Star = createLucideIcon("star", __iconNode14);

// node_modules/lucide-react/dist/esm/icons/sun.js
var __iconNode15 = [
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
var Sun = createLucideIcon("sun", __iconNode15);

// node_modules/lucide-react/dist/esm/icons/upload.js
var __iconNode16 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
var Upload = createLucideIcon("upload", __iconNode16);

// node_modules/lucide-react/dist/esm/icons/user-x.js
var __iconNode17 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
var UserX = createLucideIcon("user-x", __iconNode17);

// node_modules/lucide-react/dist/esm/icons/user.js
var __iconNode18 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
var User = createLucideIcon("user", __iconNode18);

// node_modules/lucide-react/dist/esm/icons/users.js
var __iconNode19 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
var Users = createLucideIcon("users", __iconNode19);

// node_modules/lucide-react/dist/esm/icons/video-off.js
var __iconNode20 = [
  [
    "path",
    { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196", key: "w8jjjt" }
  ],
  ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2", key: "1xawa7" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
var VideoOff = createLucideIcon("video-off", __iconNode20);

// node_modules/lucide-react/dist/esm/icons/volume-2.js
var __iconNode21 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
var Volume2 = createLucideIcon("volume-2", __iconNode21);

// node_modules/lucide-react/dist/esm/icons/volume-x.js
var __iconNode22 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
var VolumeX = createLucideIcon("volume-x", __iconNode22);

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
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup[chars.charCodeAt(i2)] = i2;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup[base64.charCodeAt(i2)];
    encoded2 = lookup[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup[base64.charCodeAt(i2 + 3)];
    bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
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
  packets.forEach((packet, i2) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
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
  let j2 = 0;
  for (let i2 = 0; i2 < size; i2++) {
    buffer[i2] = chunks[0][j2++];
    if (j2 === chunks[0].length) {
      chunks.shift();
      j2 = 0;
    }
  }
  if (chunks.length && j2 < chunks[0].length) {
    chunks[0] = chunks[0].slice(j2);
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
          const n2 = view.getUint32(0);
          if (n2 > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
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
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn2) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn2);
  return this;
};
Emitter.prototype.once = function(event, fn2) {
  function on3() {
    this.off(event, on3);
    fn2.apply(this, arguments);
  }
  on3.fn = fn2;
  this.on(event, on3);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn2) {
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
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb = callbacks[i2];
    if (cb === fn2 || cb.fn === fn2) {
      callbacks.splice(i2, 1);
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
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
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
  return attr.reduce((acc, k2) => {
    if (obj.hasOwnProperty(k2)) {
      acc[k2] = obj[k2];
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
  let c2 = 0, length = 0;
  for (let i2 = 0, l2 = str.length; i2 < l2; i2++) {
    c2 = str.charCodeAt(i2);
    if (c2 < 128) {
      length += 1;
    } else if (c2 < 2048) {
      length += 2;
    } else if (c2 < 55296 || c2 >= 57344) {
      length += 3;
    } else {
      i2++;
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
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs2) {
  let qry = {};
  let pairs = qs2.split("&");
  for (let i2 = 0, l2 = pairs.length; i2 < l2; i2++) {
    let pair = pairs[i2].split("=");
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
  doWrite(data2, fn2) {
    const req = this.request({
      method: "POST",
      data: data2
    });
    req.on("success", fn2);
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
    var _a2;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this._opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e2) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e2) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e2) {
      }
      (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a3;
        if (xhr.readyState === 3) {
          (_a3 = this._opts.cookieJar) === null || _a3 === void 0 ? void 0 : _a3.parseCookies(
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
    } catch (e2) {
      this.setTimeoutFn(() => {
        this._onError(e2);
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
      } catch (e2) {
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
  for (let i2 in Request2.requests) {
    if (Request2.requests.hasOwnProperty(i2)) {
      Request2.requests[i2].abort();
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
  } catch (e2) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e2) {
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
    this.ws.onerror = (e2) => this.onError("websocket error", e2);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data2) => {
        try {
          this.doWrite(packet, data2);
        } catch (e2) {
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
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
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
    var _a2;
    (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.close();
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
  const src = str, b2 = str.indexOf("["), e2 = str.indexOf("]");
  if (b2 != -1 && e2 != -1) {
    str = str.substring(0, b2) + str.substring(b2, e2).replace(/:/g, ";") + str.substring(e2, str.length);
  }
  let m2 = re.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m2[i2] || "";
  }
  if (b2 != -1 && e2 != -1) {
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
    opts.transports.forEach((t2) => {
      const transportName = t2.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t2;
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
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data2 = this.writeBuffer[i2].data;
      if (data2) {
        payloadSize += byteLength(data2);
      }
      if (i2 > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i2);
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
  write(msg, options, fn2) {
    this._sendPacket("message", msg, options, fn2);
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
  send(msg, options, fn2) {
    this._sendPacket("message", msg, options, fn2);
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
  _sendPacket(type, data2, options, fn2) {
    if ("function" === typeof data2) {
      fn2 = data2;
      data2 = void 0;
    }
    if ("function" === typeof options) {
      fn2 = options;
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
    if (fn2)
      this.once("flush", fn2);
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
          const i2 = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i2 !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i2, 1);
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
      for (let i2 = 0; i2 < this._upgrades.length; i2++) {
        this._probe(this._upgrades[i2]);
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
    function onupgrade(to2) {
      if (transport && to2.name !== transport.name) {
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
    for (let i2 = 0; i2 < upgrades.length; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o2 = typeof uri === "object" ? uri : opts;
    if (!o2.transports || o2.transports && typeof o2.transports[0] === "string") {
      o2.transports = (o2.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t2) => !!t2);
    }
    super(uri, o2);
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
    for (let i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      if (hasBinary(obj[i2])) {
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
    for (let i2 = 0; i2 < data2.length; i2++) {
      newData[i2] = _deconstructPacket(data2[i2], buffers);
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
    for (let i2 = 0; i2 < data2.length; i2++) {
      data2[i2] = _reconstructPacket(data2[i2], buffers);
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
    let i2 = 0;
    const p2 = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p2.type] === void 0) {
      throw new Error("unknown packet type " + p2.type);
    }
    if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      const n2 = Number(buf);
      if (!isInteger(n2) || n2 < 0) {
        throw new Error("Illegal attachments");
      } else if (n2 > this.opts.maxAttachments) {
        throw new Error("too many attachments");
      }
      p2.attachments = n2;
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c2 = str.charAt(i2);
        if ("," === c2)
          break;
        if (i2 === str.length)
          break;
      }
      p2.nsp = str.substring(start, i2);
    } else {
      p2.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c2 = str.charAt(i2);
        if (null == c2 || Number(c2) != c2) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p2.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (_Decoder.isPayloadValid(p2.type, payload)) {
        p2.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p2;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.opts.reviver);
    } catch (e2) {
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
function on(obj, ev, fn2) {
  obj.on(ev, fn2);
  return function subDestroy() {
    obj.off(ev, fn2);
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
  constructor(io2, nsp, opts) {
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
    this.io = io2;
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
    const io2 = this.io;
    this.subs = [
      on(io2, "open", this.onopen.bind(this)),
      on(io2, "packet", this.onpacket.bind(this)),
      on(io2, "error", this.onerror.bind(this)),
      on(io2, "close", this.onclose.bind(this))
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
    var _a2, _b, _c2;
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
    const isTransportWritable = (_b = (_a2 = this.io.engine) === null || _a2 === void 0 ? void 0 : _a2.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c2 = this.io.engine) === null || _c2 === void 0 ? void 0 : _c2._hasPingExpired());
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
    var _a2;
    const timeout = (_a2 = this.flags.timeout) !== null && _a2 !== void 0 ? _a2 : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn2 = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn2.withError = true;
    this.acks[id] = fn2;
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
      const fn2 = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn2.withError = true;
      args.push(fn2);
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
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
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
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
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
  var ms2 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms2);
    ms2 = (Math.floor(rand * 10) & 1) == 0 ? ms2 - deviation : ms2 + deviation;
  }
  return Math.min(ms2, this.max) | 0;
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
    var _a2;
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
    this.randomizationFactor((_a2 = opts.randomizationFactor) !== null && _a2 !== void 0 ? _a2 : 0.5);
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
  reconnection(v2) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v2;
    if (!v2) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v2) {
    if (v2 === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v2;
    return this;
  }
  reconnectionDelay(v2) {
    var _a2;
    if (v2 === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v2;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMin(v2);
    return this;
  }
  randomizationFactor(v2) {
    var _a2;
    if (v2 === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v2;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setJitter(v2);
    return this;
  }
  reconnectionDelayMax(v2) {
    var _a2;
    if (v2 === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v2;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMax(v2);
    return this;
  }
  timeout(v2) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v2;
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
  open(fn2) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn2 && fn2();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn2) {
        fn2(err);
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
  connect(fn2) {
    return this.open(fn2);
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
    } catch (e2) {
      this.onclose("parse error", e2);
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
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
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
    var _a2;
    this.cleanup();
    (_a2 = this.engine) === null || _a2 === void 0 ? void 0 : _a2.close();
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
  let io2;
  if (newConnection) {
    io2 = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io2 = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io2.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// src/config/api.js
var API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
var API_URL = API_BASE_URL;

// src/assets/shnoor-logo.png
var shnoor_logo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAADrmSURBVHhe7X0HlFVVlvbV7um/Z6ano4OCCSVnBCOioCIYyDlHUUBBkGhABSRnClRQMTVqmzDSKqAI2KBIrqICGUQykqHqVdX3r5P3CffVQ+n5w8xZa9d795599tnhO/GedytKJBJbCgsLD+cl8gTluZQrPkN5oXv/FeTW614nI2lnQn9PiOtEgpPHf67yQ/RLy7vE9U0ul+eT61wnn8U8kUhsjfLy8k7gf9J/y5RI5J2MWAtnF3mJPEF5kuT3RIJRQn5Scu/Ra/bdpTjeX0JKTqgOl4/yJJDId/VzyZXxc+h8yqLk6hqqx9zLy8tFQsdSEI95Xt4RAoCEIBl8v9KwcFqxKecqRpVzFf25FJLj1lXUfTcvGd8voZ8p0wpaMn+699R98Z03ZC7L8MYAgAXRr8juCZRgwW/zJiMFEPc+lSlJKawVL4ICPLyuwH2fAvXHkZJHesjUGowiWY8qJ0nlF9WAgvUEbYyzycjzAaANsQOrewUHQQosKl8Ey/BSeZxf309oB1BUumWCDpL59D79VDJ18APOsQIndTZ6+E7WMqn8GLLsUnp59fnlODl8gvwYUDmW3cQXJk623fQ+AUCeAUBerqWQCY4MsgUAXymPFF8y/qDhTr4TEEXUIHFP1KN0VoEw5SVwVXlul+R1bVP8XI4DUpc0L9GZfxKZRGePT/J6ci3ZpNGFyqdABhCkB2DLhTAAXIcoBZQjDTA85WkZGRSfR/GR8jSYsi5Tpwy4Dpopp/ShQRRk1yf41D1jm1vO2Eb0d3WX33WrdwJN5arvtgzqG6GPvm8RuReoX/uIyg6R1QMoAOQeidh6mF0IBSUAZKWWU6QgyyCtvDDA3DOkWo/ICyhtKR8wUjnAbaWugW4P5cpx69XyTMtQTtLBCQFAyaA9hFNvLucL+MOS4fvPumeVo3wqz7bN+FjUYw3HRF9O+QoACTMEBJ1qOcWuSBlPeWmeUib0GaxLG0aMo47wDCU8pDzV1ehP+Dx7lEzfBj8odp3aDulURq7eym6vfMgPFq/zndjn2e/6XgKG2uXyeEOAMdoNiiTiPEquUbaShsx1SG5IHnUE5TH5rkyRF+IJ6WYH37LLAbrhN3VSx9q62PXQ8rYdkle17iApHgoQqnc8GV2MPJpPAJAwPQCtjAaJkbwnBNDvqhLbcDOm2Y7TslRdAWMs5Yk+pi7inACP4lOO4nqRyZyywf6uZu8un62TlifLuforu9zyhp/I0UOM42vJJ3jC9vuyffL8Q8oFAeBWKJRwFAg621TmLwUDivE8G9me4lRGgE/wEKAFnK54rOWZzjcAMTopOb4sVUbI8euh9YV0cfkt+7ltLjk8sTqFyQu+o1MQAHrMcx1PHCi+Sx6CaKOsaxhVKGR4QHEnsIaXyLN4xKfnBEdvAwDjaGtVofgCDtX7BcR2u64U5MjeJcSrA58kPyQrBEYafNoguf58rpJ/bgCwDHfzYoz3yHIAu+caKFsSyffqlA6y5dj52glunkV+PgV3KHA2j11fnA9cOW4+lePdc/ODOhFfUQDIe1QP/ql0igdAoHIlJHCvyHxlGAmuFzirXqq8pCL0OifSrSxMOtBeUGN08Picerz8GDkpUDjwjBydCdCEv30gmmUgAUCso7URqnUFeFxSfKobshxB+VwAMCJllUGp1JkKWXKIoxRAaV3B4cFxpNZdfrqO1gEhPFSXIgBpgUjp6OpEdLd1CgSekAcAW1lDnjHBgNCgucEjDvB4JB+tz3Kyn+9RUY4M1iWdmMR5ikTPJnR3nWh8ZgDgkpZJ9LN8adVHeHm++BQyXPJtMzaIfGuSK/nU9TkDwBVg8ZF8y9mUL5SneRwnWTy2Pr4sUi6Wh8iS341NufzT2OnozD9tHu1kuZJwdfFk6bpMvuefWJ0pny3H1cmr15FJeUSv7wIg4EQjVChlXbtjj2VoMuOIgS6PxRvWySI3n+ht1ePIsu1SgbT5TL4AgCVLkiuH3lM+9X0U0Mn1iyZqV1iOumfXY2SG9itMD5CfBACkG6EVCF6DbrEFShyhu1hXcWKkKu85gJCrj5sfw+M6wujl2mX4rXzLVqOzZbvbIxBZuu6gPg4FbLN4iZ90fdLfvhzxneoVRzFDgO9MZby57ypNnaAUdoOrFJVl3HzHAZYeuWEeXp8rwxv3RJ382uWlOrl5RUyg4gFg8vVqJ9ZHrj42r+tLTwdXH2KXy8vJyQsDIKhUjMKBCg0fVciR55aneYH8XAqAIsg3mnyGZvCOk/V3FVz33KAOrB8UIUvIoMtJChTDEyAKbIuPyjLErx19XBBpHq677SNvDqCFW0oF7nnkOjBQ3pVxDkE9F1IO1w6ICXwikY9EfiHyC2Aov1DcJ8GyyihZcTKT5Av7ZSAlWbpbwDcA8m1Tcuy6DACI3jrwRp7WSe4DJBKJIoaAlMgoZd23gk/yWPD/GQAIoF8YLwwv4CaLVMjtzUPu6ePIPX0UeWdOID8/we+r/PxC83wkFFSPQj2QEzTPR1xv/14IAIZkMAP3+Cep09VFU/xOYAgEcYEN8RFeiy/OeIP+pF29V1cg3xmTGeUXiJCyv6d/2okD6R9i56LR2PpeD+S82hCZs29F5vO1kf1CXWx+rSG2vX8fdn81DocyF+DMsT0aELx3SOZQRm6+HD5ogK2gWd19wDfErjj7KehsORIkro5ENwIAciAkLrhUES2I8hAlCF9IKSMvUI9F5HSSl0d49BKNGSycks/6dG7TWRxI/wBb3r0PmTOrYeOEEkgfVwybJhRH5uTLkTnlSmRNLckpc/IV2DSxODLGX4z0CZchc1ZNbJ3fBwc3fYr8fHGIMr+A2ZlLAiyGDGqXnoTKhy78O/GBtdxUtmkbjb9sf4YBQmMm9BBkDQuWr5w5QCwAaEEr+AYAPh8FUJLgegCJyyfnE0MkedRyThFrtSz8+9a9g8yX78bG8cV5YLOnX42ctLLISSuH7BmE0sohJ628JPM9e1ppDpSN4y9D5quNOZCYXD586OBLAJBAKgfTCSS1y7qvg+baRXzk2u3x0Xoc8FBe+T0AAGcnkAbOUsZU5gVPKWvl0XzbCTZfsvokUZ4Ar3C4GNeO78tA1ry2WD/uYmROuRw5M8shmxELvAxwtqScmeWRPdN86vvkkxHrHTaMvxTZb3XCyQOZojfILzDBdnWhxPzgAkMPD6494l6u6yfXdoufgknkqbpcP1K9vB7ABMWtxCjGhVpK0EooOFi+CnpImYBhRMlYngAvb/ky+PvWv4f1k8tj04SLkTOzrAg8JxZQ2bp5wCtYwWfXPPgzaODZPUrlRI8wrTL2b3yP11dQUOgH1AWARU5wiE3efe1L2nj8hmR8Lsiqj+hF63bmAEmeBdCAuEFwleRlZYV0DLICT2R6smzDlC72bJcNC6rbF3Wxlsi65V3LZmD9+MuQPa2kaPWyxQsyLV4Ev4IAhQaADP70EAjYvQr8Pr+eejXWj70Uu5eniZ6goBD5bKxX430SEnbJwFnjtMtjgun1pBaJsm5j8/YvApQiAIhS7ljl5mueJACwZLh1Ub5AvuShRqjJ3o6vJmH9mIuRM6O01+WbsV5286qrJ10+D7qkHBVodc2/C8pRNK0M1o+5BLuXzxQgyC8QINCTwsCqQPlK+saszW2beL4VBwUa2jhCPjKg8eTJpSW9HwQAL6CFE0S5QSX5dvCpUoEAxpBQVH6PKecaxpzN0p7vXsb6McVN8GnLp8H3SOTlcCqLnOllkDOtFHKmXY2c6aXlfQYIEnhOEhjTy2LD2Euxb/3bAgSJfA4C9qmdXkQglN/cawMQ4lenIaW0N5GEUgMACYqqTKNTodEBhhVAS5bDR5ShfLouPZy4LV+0NJaObP8G6ydcxWf4utXPZGO9IjOho8DgK4FpVyNjfHGkjyuBTZPLIHtWDeTMvgnZz9+AzLSqSJ9YEhvHFsem8ZciZyoDhAi+JtYzTCuNjVMq4MT+TcGewKNA0Ewjsn1g/Ob4kYLElU/lFpEfBICrCCVXgGn5lM9Fa4gnXp6+DoBI5AnHsslX3tmj2PRifb6e9yd7ZMJHe4O0cnztv3F8CWyaXRfbFzyOfWvfwbFd3+P0kR04e/IAzp7Yh1OHt+CnHcvx46pXsfWjh7Hp2Rs4ULImXSmAkCZ7grQKyJx4GbL+2g75BflyUqjmAzYIQjYb2x3fUNu9fNLogrKKCL6cH3gAUMK8gLkCPL5AgIkiVHFTPt4ZdEklNnn8wxgs7fp6EtLHXYzNs9h4Xi6wlJMtXbX6GWU5f/rsutj7/Ws4c/IQl8NbLmsAhWz7V+392enM8R+wf908bH6jOdLHl0D2lJJ6bpAzsxLfK9i39i3OK54ziOHAAoKyX20QOZNG239yWCQNw/gyEPzApM/LJ6sVRix5PYCnDFlqaSSSCiwFrcCRfAcAiiceBDTwcteNk2z9hcCJw1uxYXpl5Mwoxcd9QXI2r7p8PR8oy+cHGZMuw/a/P4azp37ixrP5o7KvoNA8KTh54gT2/LgPu3b/iAMHDsqtH5EKkcC+da8jY9b1yBh7MTbz3qAysqaWQsacO5B79jhfFSgA2KsDaTMFgFqmBYJq+dDxte1vec8BgfGzH3xGLHkAcIPmCqNCNZ/H4xphBzovX/GEAKBk0JZPnSjG/m2LRiJ9fDHkkNZvgm/mAtlsLyCtLNInlsDupVP1Qx4FbkYqvfnh52je92mUbPgA/qNuF/yuTmf85509cHOXIXhi2kv4dl265j178kdsnd8bGeOKYzObD8ysiA3jiuPH1a/zfAEAOR8ggfYBYHYS1fN67hsZMONb4Wvtp0BAvWuXNwQA90gYr4w4xyWjjFFMlyPk8rnKeKDQ39061X3hKNZFnzl1AOnP3Yis6VfJdTzp/t1VANu8mVgCOW9359u4ifwCY18e2zYuxP4DB3Fn96GIyt2LqEoLRNd3QFSrM6KbuyKq1QVRjTaIKjVFVLMVGnQbgoXLVmog7FoyDhvHlkD29LLYNOkKZL3eEgWF7DGz2BsI7g/ks+WrBAG9T33htmbSOxjfmZi4JO5L/wWCz8gDgB9MP/hxRIOu77vBd8s4KwtxP1SndGRCPK49kPkJNky4VK73yUYODbwCwowyyJhSCsd2r+YAoOMsm7TlJxKof99QRFc3QHRLN0S3dBd0q0N1uiOq3Q1R1ZaIqjRD98cm46fjJ7kTdy4Zi/WjL0H2tDJ8l/DEgRzR0ygAxJ4xCAPA5dNjvwwo9Y0tj5Z3GxAhCQgec3cSaE3aQoGXQbMRaT7VWG+UVmByDbIB4JLOl9fKkcyx278YjgzWqvkMX1Eg+GzGP/ly5MxryXuOvIRs/ZJYWpOehahyE0Q3dkRUu2s4+BYQegggVGiKCo16Y0P2Vi5n64LB2DBWPEXc+/1f+T09dIV6gRDJVqp9RvxkYmJ4eJki/KjJyhfADwKACycAsARYwRUoo5W4gaXO1iAgebpsoHtSfOy72GBJIMGWfvlnkf16Q/741gTfaf2E2KPd7X9/lAPH0kcCYF1GFqJKDRHd2EkElvUCOuA9HFK9QzdcwIBQvTUuqt0eqzdmsXBj06tNsWHE77H148HywIkLANMbMJs8mx3bja7G1xQc2kfnFHxJ6kBI7ByAV2rQ5yKNtnZViYtWWrG5n0xp6RQik+YzlU8e2YZNM6vzrp0F2NvooU/9ZkgAfPZ4EACsFRQU5KP9oLGIrr5LAMBq8TYALuDk9AbXtEGJ27tgz8GjOHMwHWtGFUfGy02RKGATQHnEzAk+t0W2Qt8Htg91g/Lyk/nRIcqjJ4QxJ4JEBdRRNKD+xE2h03Wu3zvY+VSWGt+Tk3jOf2jbcmycdJXV+jkAZODdtX/mxBLY8t59AgCOHrm5uSgsKMCZM2fQpv8ziErfjeja9ojq3GdavAZCYDhQIKjWBrfe/yR36Jb5vbFqcjWcOX1UHimL7/5du+3AE/9bPComPjDcepS9br0eANj7ZhUATBcTUEQGlo5DYaUlWauGmPyYGaooR5UXANif8THfdFETP2v2L7eArWFgWilkzKqB0yf28/0Dq/7cXA4ClV566yNcXq8rokrNAr1BEmKAKd8EaW8tAI6uxbeTq+PU0T1y1UFbvwMEx3bPlyQeNk+Y19Rl4kP9R+tl4JMxJ6+JIwWtVu3MzDWfRKfFr77HAYXIocp4zqGKSyextGfDfGxke/P8cS59rMsCbvYC1LyAXWdMKI4di58RiOe6qJNG4tEyI7YiYOnQ4SMYPH42omtaIrqugxPoQPA59UB0fUdcdGcPHDx6EJs/6IPj+7MDACB26a7Ytdf2nx1ECgg7Nlqm5z/BS/3ISAEgOAToiii6YojlW2UsJRWPCr4wjo5DjGhXKNbNIl/LkNcsbVz5IVaPZad8WNAFCASp3b8AsS3gSSVxKPMjiXr2tM4EP1d/N5tCC778Bn+8vjWimm1l4LslAYAcCio2wez3F+LU5o9w5IeNAgCxwVd2+sCnwfd8qfMDwZeyzH3z6dbBiAMgOAlU6JIIcwvGEVXWVVpvSigiAFCtxNo142gVdav7LK1Y/gWWjSqJrXwHkAJAHtyQILCHB3a+rxTSp5TGvtWv8aFEzAnsXkDZzOplaemK7/Hbmi0R3dRJAIBTKPiSrmmNBg+PxdmDm3D84DYCAN9Xca1f+MsHgO3PAACClCQvbhWgBbvdi0N0AmKUkcqqoUG2fKtcjDwr8NQxpIWwtGTFKvxtWEXsmm0C757wCQGA80wvjfQJJZDzt844umO5PjxKg0+JpemvvYeoYuOiAcA+a3XGH+r1wM5d21CQOMN3HY3dJIgxgadk+dLriW1/u2Vp4JP5mwMgNASoAMYKcJclusdwJiYxw4cyzL1PHWPybQCsytqF4X1ux74X5YkdeV6P7cXHgcBeMYiVQfqkK7B1fi+cPLRFLhF93QsKWADzUL7lw4hqtvMD7xLbQ6jeAku+Xcd11ba6ANDk9w6az5ro2TGx5Ab85NfjEJkEegAIKaxbstXqHUU4n9+KXGXU/bg1rDKKG6byufEsIPk4djoPTXr0xLrJ5bGVT/wkANgnBQDZG6DBN1QWmRMvQcaMyjiY8ZHYuAmAgKXHJs9BVJ71AkmWgxwA3fkzg1ff/0w41/WPtCXOduNrYz8FpstrywnMNVxSvGRO5f80jAdNdi8ygAYAdkAtwwhfHAAsOcnApMu71yIgjfqNxqCOFXF4LusFyJNAL/hu0AnNLI/Ns9jZvquwceKVOLz5KwkCpbep7/X5n/EJXpHbxIwqNcPrH3x+TgAw/g74T90LBdOV5Uwo3TL62l0GBgHgKSLIFujkWQZQw305oh4aeFnGQT0l9v5dltJeex+/LX09Vk+vid3Psce99kMhu9tXAackeDbPLI8tMysga/JlyHqtGddFrEjkzFnW98ZHCxFVamKCrCZ97qrg5i74Te1OyNm+yweAZZsJmm+7b7cVPBVsS4aImRUbVY8FAskjJ+BcR28I4IFRClFFbGHCKD+YITK8Sj65H5IVQwwAhYWF2LVnDy6o1hJ1G9+FvXOrYtsssS3sjvu6B1CbRE7wN6fJzxllsOnZ63H6+GG5eycAwOpkaeSzryOqwIYABwBu66/eGnV7PsHLMCDFAkBP4gjFAYAGX8qxgx8GgGiMbiwMj54D+KsAhUhfATfIOnD62ihiPm0+o7ALAj/gLqkfj7LU6bEJiC6/B1261se+F8tj27NlkKXGe2sV4AffAgCbO0y5HNmvNRU68cAJO9icgy0Yb+wyhC/x7NYfmA9UbIo5b3+iHEtsp8E3fjLBVwCgfldk+5/yWfFyAUB43fvWJJADgL4iRgWLVEID5Qqz7us3Zct7clbvK2zzWYarYMeR3Lpdm5GFC2q0QFS1Hdq0vQ07X6iKH56XD4j4PMDt9m0AMKBsnlmRt/6N4y/BgYxPxJKQBIWlRcu+RVS5qXlKGNf6r+uAS++6D8dOHEdhYQGxi9hHgmUCHyAXINpP1O90Q00OWV5sFDDsXUBG7OmqAACbA7gAUMoHlLAqcLsYqZDHR8q68sIAELtzgnxAsPK8FxjKHuA0QFS9E+q2bIXVLzTAobkVkDXlUmRPl2cFZzFiEz4WeAkEBo7ppZE14RJsmlYOe1e/JoNv9GPp7NmzqNqyn2n9yahCE0x75R279dNuPZXAW3wuWNQ18TX9DBCVYQFEljEA8IYAu+uwlZJC6BhD1++6fJxCRLGYcU8F3rR6SfpeLlBYiJ27duP31zdHVLMNohqdUaJeN7ww9RHs//Q+/Pjajciaejk2TboEmZNLIHPyZcicyM74F0PGuIuxaUYlbH3/ARzbs04+u2c6CkexVJCfQMuHR4qjYKEWz08PyV7hmtao2qY/753Y3oGwI2xbyqR9pEhcuz5NRpa/3aHAOhHk9gBaCXccJ4GNC7BjSFAZIsvld4Puvk1EAYCDAMBr73+GqOw9iGp1QnRtO0TXdESDB57Gp5++h2ObF+D0xhex78snsO2DPtj6UT/s+nIM9q//G04e3srPF6hjYgVyTGRpU/ZW3N55kJz4BXb/+LExCYAbOuJX1Zph5boM5dB/Evn+tqiofMpD9gH8VYADANpa1eyTKkYrcAMae34gEHhFKvg68BYAzLDAeJhMlvqNfhZRyfqIbu4kiJ3bq9ketz0wBnPeXYItuw/o4ManQmzM3IyBo2fi32u1FzLo9q86K6gCz4gdGi17D2a+/j6XYP+I9TyTE0w/HoGAk8ArOfyaAsBbBbgVW+QAIElFrkIm8EpxV3ZRwSck7zPeAna4v7AAHdiBjqvuRHRzZ0S3dOVr8qhaK96Kf1OrI67rMAS9RszEpJffxbxPFuOjxd9g3seLMPWlt9Bv1AzU6jQYv7q+LZ/JRzd1lq3dAYA6MsaoVldE5RrjqemviOBL34XsOmcK2czIaqBOY3NjQWKi/G01yBAATAt1K7eDrq/JvMCAw+H1lA7JN8QnecmC7+TzVUFhAT/Z02PYBESl7jYHPBWxI97saHflZoKqNEdUrQU/3ct3+FjQ2USPgUZ39aTrJy3/AvadHRsv1whPp4nfAPA1v6vjz6VkduvGFOB1Ak8bnGqM7hyCxzx4KDQwU1XjhwqoizIDClJeAaSIoFtkGS+e0unZv0fmYAfbIGJp1MzXEVVqjKhqCxHQ2ozYaV9FpBVzcrp3q9VTHvm9cnP8r5qtMefNj89/8IsiFsCQL+nqwAIA5XEAEJoEWsFzyBJOgGIAQHsE9d2Xc+6kDm24902emhuIjRvgsyUrUL5BD0Sl7kJ0fXsR0FgASNKBl0SDz8DAW31j3NDmEXy/QbwiRjg69CjZXsL+EhKHVfz7msgKjcZGg4DEhMYwCAAruF4lRgjlMT9nosoUEfxkeYEWH3akfDOYd18s406cPIkxM1/Fxbd3FU/y2BDAegQNAgIIGnTa9bOeo3orROUaonj9+zFl7rvcVpbMKSIboHoVQ5ayrn5h0NgUX1aS62sCANXlF0WxABBC3IpsFIkKSTCLCrqkpEZxoo5L1oqSO1H9oHPvgYOYMPsNXMM2dKo0QVS2oZgHsL0D9lsABgpFbPLHTgWzn4eVb4Tomlao0ephTJnzJvYfFj8oZb0Mm3fwAKtPj0IBpMNZ2K7UwCPJ9be7ZNcxC7R+RtYkkA4BcRU5AoK8RVCRRqVq/DmQSgWJBJZ/uxZjZ72Gpn1HoEKzh/D7Op1xIZv5X9cGF97QDn+q2xWVWvRDy/5jMP7Z17Hi+w3W/gCTp4Bp1+MH39XD8Dn5ZM5zTgAIEg1+fOwEAOjTQAsAUoASSlo/u+aF3QnGeaSg0XGz4nMgtkNHU+7ZM/hhz16kZ23G2vQsZGRvxd69+5Gfe9biYy3elRXSxwTPz0vKY+1wxvCkSKJh2oG38unQEA+AkGD2qWaWZk3p8qVMyoEBR54reXoo8EonWBslqgz7kSl5HwBNbDnpyfxnEF3KnofgcyINVZALgNhVQH5yACjkpNLyz0NQOaUkh2xw6AmpAYHZBCGbISSfkhv00HVK9v8M8oKfbC8gGVm9tWqwJt8eAgKTQAoAikLqRK/Sfxal5AC6w6WIGUh1JgAOBF6RCyAty5JDeAIyfg65wWe7m35SvVWhXd71UaDbp2QBwF4FFNEDyAK/xHBWnm2anPeNEx0s8t0BrQUM6STawtl3cUBC/GKA/lDFlkF6EEJsfsE2ovjwQX14Dv5SDY79aPSb9Zux4Os1+HJVBtZm78TeQz9hyw8HsHPf4Xj/aX3CMWSUBADJN4IsACgKVCDILHHYp5XkCRt9SSZYFpt6pErqsxL7rb/MdzKMvrLVu8mAwc8/feokTp08Yd0TvYviN/qoLpSlwvwETp86hQSZQLKfmrl+KiqxOpjtC7/LwC09RuOdRSvR/PE5GP7SJ2gybA4mvbmI83k+d0Hp5su4hGz3AUAK8c0OUih5BYKfLmFYOnjoMEZOfxl3dH8c17UZgFodBqHHY5Pw3mdLcPLkSe5I9kqVl/72Kbo8PBrdH52EnT/8yF/apOpj+Qu+WoEu/Z9B90HjkJ61hU/iWKub+dcP0PHBp9H36Rk4eeoUv6f0Zd9Xrt2IHoPHoeejk7CBlzP5LO36cR9GTH0Jt3YZhqsa9sZV9zyAOl2GYtxz83DoiFj7u61ebTsvXv4dl12t5cMo3bAXKjXvixb9nsGbH4tASQfzoYrr+uq76PDgk+j86CR0GjYRHYdORNdHJ+Ppaa9gTUY251cndfpOmcdfTf/US5+g/sPTUPuBiZj7yTdEZqqBN0SDbwPAehikxiKx1qXdZ7KKRNANABiSd+/Zh/J3P4Do8rsRXXYXohL1EF1eH9GVdyEqXhdPTHhOO6rdI+MR/ekWRKXu1c4Q9QlFR6e9iuiPtbiMBUvMO3oa9HwKUbHbEV1aH31GCXmqC2fplXc+RXRRbUSX1sPHX4lyKu+TxctRrFYHRFfdg+jKuxFdwXRrgOjqezhddUd3fLtmI+fVYOTLyUIMGJWGqGwjRFfdi+jyOxFdXg/RVXcjKtsUUbmmaNV/DE4RQLLUpO9oRMVuEzzF6iK66FZExeshKtUYv6reCmOfE28WYeB+7Ll3cfTECcz9aCm6jpyLbqPm4u1Fq4QuIQAEYmKR0/pTAgALJi1QVEV6Fitbf4/HJiO64h78+sZuaDPgGb41O3jSC6jd7VFEpRrg40XLOR9LvUfMRFSqIS64ti3WZW7m96iik2bP4+CIqrXGwm++1+WaPTwWUcUWuOCmbojKN8Nbn34pysqW9MaHC/keflSlJT5bZsp9tyYd/8LO+lViu35NcHPnR/HElLkYOn42rm03CFGl5ogqtMBFtdphx64fRCClzCcmzkZ0WT1EldvgX2/uhi6PTcXIGa/ggaemo9id9yOq1g7R1Y3RduA4zq9+edzh0amISjfGn++4H0Mnv8Tr6/HkDPz5NvaOgbaIyjTEwmXfcd4TJ09xX546fRqnTp/BSflpxaCIeLhUNADkLJ8CgCLHFWiT6fr5ZI/9pKrRQ9wRdXqIlyeYVICV36/jQ4DaaRv93Bui5dVog7UZOfyeBYA5b3IHRVVb4YvloiWw1G7oFB6oC2p1Q1SjPX5/Qzt9Lp+leR98gahsY0SVW+CzpcK5LJi1Ow5BVKYRovJN8cyMVzW/YCjAwFEz+DOAqExjdH18is7asCkHF7DfCFRuheJ1umK1fDCk0q4f9qJG04c4OKLyzfHpl//Qee2HTER0RQOUatLPKvPZl8vx62tacX42JLCk5kfMP+x7IXuhFTtvKf2tGtq5UuoAUNudKQJAgMac1GGKX9OyP6KyTXBR7S74cOEyy2iWmGFsksXSuOffFAC4th227/7RZcWzr8+XAGiBhd8YAHR/ciaiCs1x4c3dEV3bgbfo69sN1mPpvPkSAFVa4HPZulas3iDOAZRvirvlOX42sVTLPHGdj2ta9EVUsTn+49au2LNPnCoaNmGO6OrLNcHcd8QjYT48Sj+w9N2aDfh19daIyrdAq0fGCnkA2g4az4e/ko368odVakLMXkz5hzvYSyaaoUHP4ULm+Vxyk+Vi6gCQcwBdSK6FPeEKjXRnS65lZ73yNh/royqtEVVuiTqdBuPZl9/Gvv3CmWysY85jadTM1xCVbogLb+qCxg89g46DJ6DdwPHoMGQSOj8xHdd2HCYObVRpZgGg6xNpiK5uiKodHkWjPiMQVWyGqEwT9B87h+cLADQSAJA9x5Q5byAqeRcHwCvzv+D39BpfktaJ9RIVmmL+F0v5vTu6DuND1R/q9sCBQ+JVs2rpycrxHq2wANe0H8xbdJkm/ZArVwdtB0/i4LmiYT8cO3acg4wdPp37zgJceE0bDtSuQ8ZrfVw//ywiceHXcl4VAwBTUA8BFDXJUEkr0uf1CvHMzFfxr+xtGyXvEXTVXfjP2h0x5rl5vFtTe/QjZrzKA/Ur1pKvaCAmSRfXRVT8dkHs1A472VO5GRaSIaDL49MRXXkPqrYbhr37D6LkXb0QVWrJnbn4m9X4bMlK3XN8IecOwyfNFq24aissXrFWO9wFwFw2gWTgKdsIL7wlXi5RvXlfPiyUaTaAD3ss2LSs6kGa9h3F+f6zXk8cPnKE32s7ZDKfIP62dndUaN4fVVs9ggqtBvGDpVFV1kiaYfl367U+no89ShIPRe6uYioA0HMAvRJIbRJISc0FWMrash1PT3we1Zo+KCZXLEBXNEDfkTN4PkscAKXv5T1Aq8GTcf9TM3Hf8Ono/sR09Bg+A9ezHoB1q5WbY+FyM5kTALgbpZsP5NdLv10n3vFTtQ2uuPchjJo1DxdUb8kPeSoAjGYtmw03FZvjk69W8Hs6iNJGltLYsFO6IQfTX+eLX/ze3GEgD2yxBn1w7ATbM5DLSmm3ev9evZ7D+Wy/RP0HcPzYUX6vzaCJvNe58MYuXAbrSaLq7RBd2wnlGj2ITxarZV4Kgf25lAoAGInWT1cB5zbrZOVZoo9TWXf36eLlKFm/p5j11myLLTt287yRDABX38ufx7N9ADelvfIeoqvv5l05XQV0lj1AmZaDcVZ2tSPTXhcBvq4Tflu7Ky5gPUdVMwR8+MVS0SuUa4LBE1/k96iNav7Q7OExYslWvTVWrRfHvh94apoYFiq30oDSZdXex+HD+FMd9jLJ5rip4xD94KnNIHZmsSEuadAbi1eswdt/X4Lf3NCBTxiv6/wY52ETVNeX543IstECQJ5eBgpGOgfgLSNFAKhVgGr9uwKBZGn8C2+JllW9Lf6xRryAeeQM1irvRXRd++AycPzsN8UysEpzfEF6AA6AkvegTIuBEgCFvFuu12WomPzdxA56dLEAcPTYcVzKQFixGf7jhg5Yuda8BFqlTxd/g19VacnH8evaDdK92Vcr14gTRpVa4cY2A/kr5tzUf9RM3tLZBHj0c/P0/dYDx3Mbr27aX76gHhjwTJrwRfkWGDlL7APQ8wY/d7YfLE/iFwYAKeSO/xQ9biWmnFk6stSo95O4t9sw3uKyt2zHrt17sGjpStRs1Z878E+39cDBw2J85D0AC/B17bF2k1kGqo0gDgDmqCpmLGepy/A0RCXvRemmA/hPudh+PEs//LgfxW7pzF/kyF/4XK0VFq1Yo8u9/M4C8VuCaq3x+1odMeb5eVj63Tos/XYtRqW9in9nZwmrtuUvkGQvjGJJreeb9X5CbP5Ubo2abQbilff+juXfrcUHXyxBpyETOLCZfZc3uB+Hfzqqdw5bs1VAqYa4ssnD/DeELLG3kl16532IqrTFv17XDtlbd/D7yv+/HADO4RUZPzX5TgIAxegMATEAUKBhn8zgo8eO4Q9sl+0vdcTk7oYO+LfabBLXnLcM5sCxz78hosE2V6bMRXRZfT5Wr05nr161e4Axs17ju3ms21YtmaX2bB+g2O247K7eAgByC5mlvy9ZIdby1dvw8V4BQG3oDBg9C9GVd/KJGR+T2Y9BKrdAVIpN/JpxvVm9LNHdxcOHD+PG5g8iKsmWg4yP7Qs05xtKbAXCZP3lxvZY8b2c0MlyTfqPRVSiPi66oyfvhdTQ8Pr8z8WQdeU9aNDzcT2vcH18PqloADgTwFQUUsBRvB9+/jXu7DIEv7upg+g22Yy6ehuUursXpr4o/ruG6lrZub3iNVqgxG1dsDHLHwLSXn4bl9RsheK3dMayVcKxLA0YMxtX1GiJW7s8agFABXn45Bdw0bWt8edanbDs+w38HtNNnSCeN/8z3NhmAP6FnRGswH4j0Ay/vbYt6rQfhA/k0o+1fOoHltiuHHvGUaFhL1xYvYV4kdQ1rfGX23uiXb9RvMfjdcnxlr2W/uFxc1Cmblf+rOH48RO8t2L2s9VQoz5P4dLbuqNYnS5YuOxbred5p6RzANLy3SEgGQhMGfu+Sjt27saXy1ZiweJlfAuWPbRhiU0Q1RyD7ZsfPXoUx44d4+Bz6z116jR+OnoMR48e44FW90+zbdIT7CneKfncwjWykD+QOnDgEOflNsheTE322JxhU9YWfLl0JZZ8swpbZDfMEn9JtaMLWw6rTRx2tCx9UzaWrViF79amY/8B7kqelMOFTsx3ucg9exZ5jMhMX2yI5XLbjvx0lD+E4vnu8/6fS3QjiH0mAwAjGkjXcE+4W5GqTH6qiqzEd92YTKMQPbPH36Stn8OLTyufA4fcZ8/iWcuXsqhOalkm5Er9naGMrlQ0r3xRhH4YRvXh1yIvdLSMg0zpIMuzT/4PLgvkuQHHd+plFMwWpo/rx59NwX0AFwB5oWWg+KTBTwoAuhHk5lkUcKZLqebL3Um9fldB5Z9MV5KviDjAffztkgAoqdPVIzAvsuojdbl6u3VZlKIf/XsBCsk5FwAwUgZ4gs6ZZFA8R8YE182jPPqaGRQ6qyD0dYOhAyJleI4M8SXRx65T1kuB4eotfWDVRcunFPyfSZZtahKYGx4CgpNApayrNCFWViV2bb6zB0Siu1QTMDexOvzEjmj595kj1fKKzvxZErqYJSS/550eEklNQllStrlJ2W+u6fzBbNzofPI/kVTSOhGA2HmGn9lFl4Fucn2eMpG4JQUAI7N+dAAQQK2a/TNiM2a2pfntugzkFxTg3U+/xFdy+XXs+EnMeetjnDh1iucPH/s8pr/8LsZMm4vJc97i4/nqDVmYPOuvGDHjFYyY/BK27trDwfjCmx/zQyHT576LA/xXOoXYf+gQZv91Pk6dPsVPEC37dg0+/HyJfMOncOa8jxZiOfuBR0EB35IePuEFTH7pXYx7/i1+EofNxtlvAtjDHjXP2L5rDx4fPRNDRqZhg9yUYnkfL1qKz5aKrePTZ85i7tufYPeP+3geo8zN25H2yjv8JA+znd374PNlWPbtev6dtj52/caHi7ByTbo+K3n69Fm8+OZHfAON+VEFf/P2XRg6+lkMHjEd32/MErEIBDUpOXFT/smNBQB/GKQUTiX4YhOIpds6DsXjk17i3+/oPBS/KXsvDh05isPHTuDC6i2Rs3M3ln63Hl0fHosLKzVFreZ98ehEwT9w9LP4c43m/KUPvR6diKxtu3Dg0E+IqjRF20fG4bYOg1G5yUM4ffYssrbuQHTxreg1chYv2/fJKbihRW/+naV9Bw4huuJ21O32KL9ev2kzeg6djItv64ly9z6Ih0bM4gcuJs95E9Ubi3IbM7eg2HVt0LzncHQbOA5/rNESi+S+Q4dHRiO6/DZs2/0jb6W/u74N3xlU6cGRaYh+Wx2r080ZgVvaDsZDTwn9NABk71G50UMYPlW8X4D1JEePn8C/XdtWP+xidaxan4W/1GyNVn1GoU2fp3Fr2wE4feaMOXOYCgACsVM9QDwA4nYCHeEhADTpPRLPzBTbmh2HTMaFV96Fu3qNwOGjx1Hsth5YvUm0KpZqtB6CDxeLVsXSwNGzUKfjYORs24XMrTvFu4D27MNf6nTDoaPHsH3PXkSl78H2Pfv499/V7c73GBYuX81/vFm/u9hTZ2ncnL+hRssBqNSsH7K3mUMiHQZPxii57crStJfexq0dBvHvLR8ciWZ9Ruq8YRNeQPUmffj3h5+Zhd9cfTduaD+En9gp0/AhLF8ttpHZEvX6Vv1Qu8MQPDRS/Edxlhrd/zSGTRDPG7QPJQBubj8Uo2eJzTC2Mjh24iSuqN8bX64UTyhZurPr4+g6bKq+PnL0mB5iQvGwiOZzfjP30D1Abq5/HkAFljInmzEbAAhUcQCkCQc3fmg0Hpk0F9Wa90WbAWP5lu26rG3aoGotB+HV9xfq66emvYw/VG2KWu0G4o7uj/E18cHDP+FPt3RCpaZ98efandF71HO8C12XuQVXN+uPMc/O4xtEbYZNR7P+8hhWfgKVGvXBh199iyb9xuDxqebUT/M+IzB03PP6evrcd3BLewGAmk36YPILf9N5n3+9Ehff3J5/7zpsIh4aOxt1Ow9Dsz4jULnlQPxjrfin0c//dT4/77Dwu40oUa8nTp4Uex2Neg7Ho/KBkz7RI51fuwMDgHpWUIjjJ0/iyga98dVK8bJplso1uB+vvC8OmZpXu7kxiI+NxyeHIPbJkgMAt4DTC8RUROcALDXuNRKjZoi3ZzTo8QQmzH6TP/WLyjfEr2/ohMxt4gkgS5WbDsAr74tDGSz1e3oamvQdpa9Z2rl7L/5Spys++fo7lL2nFya/LN7Js2pDFv5YtzvO5uWh76jnEP35FrQfOonnfc0e2pRriBs7DcNlt/dAxeYD9ISvaZ8RGEIAwHqAWm0f4d8HjHoWFer35DI57wNPoUF3tj0LtOk3CoPHPc83e37N3h5WpSXWZG7heezU8+X1eqJun3H8kffb8mwiawxPTBfbyXx9z3wmAXBzx8cw4cX3+HcOgBMnUfLuB/GN7FVY6jF4PK5t2At57F/mFeTzZxVsCDDzgHBMQiSWywYELPEhIB4ApgfwljAxxFKj+5/EKPnuHPZU7pFnRJc4/dX5fDs4Y4vpjive0wsvv71AXz8++UX8R9UmqNPlMdzQtC/+8f1G3gv8vlZ77Dt0BN+s3oALKzdC1pYd2LR5O/69Vgcc/OkYN65knU5o0F2M940feBKdh07BvgOHsXnbbj5e/+0TGZReT/KhRqUpL7yF65o9yL8fPXYC9To/htK3d8c1Dfugyr0PYtvuvTyvea/h6D5YHPFioGWPhRmY2b+e+8vNHZC1dTcO/XQM/Uek4fqmYk7RedhUFLu2DWo07I32j4znXb3aeKp33whcclMnVL+3D+5/Mo238NKN+qJiw4dw7b19MGH2W3zifGubR1C63n2o2qwfbmo/iD9H4JNK7vPAMjYQF0WqMVuTwETC/mWQas1ugVQ2Mdgry7O37OAzWfYL1PSsrdi8fScvzxC8at0mboCSuWFTNvbuP6Cv2aHKJewkz9ersODLFfhx30G+9ctmy6wcS8u/W4fN23bxrd0VfGv5NL+/Y/cPWJcuZsnfrFqPg4fEk0aWVq/fxGf7TKeszduxdcdu/Yr13Xv2YX1GtnYK2xr++5crMH/BEt7aWGJ8mTnbuG2Kb3V6Np8L7Ni9B2v4/w4U6aefjuLrFWu4P7bu3MPt+XzJt1ixJsP4MZFARs52LF66CgsW/4PnsZ3KNek5WLjseyxY9A+s3yR6FwaYTxZ9g/cXfI0Tp06L4P+CvQIfACn+NMxsnvg8mvR/4RJrWZVYntqWpT9v4pxyLR36XRxrMYpPlZM5Wp7SSSXKoxzl50FvurCJpsrjepK9AV4/OefIEn1FHdeBlnfkuYnumLopZD+TQfdNlD+CRCd6IdKrAQMA53cBgUJuL5BkRfD/P6kfvjjP2M8nnWvL1kFVMQkAgOTTOAoA5B6J8ovoAVzk/JcBoKh6isqnPEXxpUxyf+T/FqL2BSbqFliDAEjy20BTiFSgAUC2hq0K/XuuvJQCkozHMjqQH+Jz8843z7nyufccyk3Yc7Eg0fpigq8BIPnCANBDgBHg7gOY7p9SwOg440K8cVQUTypyUqkvFR6X173/MyhpUM+Fz9Ip3Hgp6UfbqQBAkRt4/Z081IjrDTxl3HsupcKj+FIJSCo854P+q+o5F4qJTQoAcHoBS5As7DweNQ7wAXROFHSkI7Oo4NN8rdMv0Mur5xfIOldK+dFw6jolB0CsIBlouhlkDQOmV/A2izwHCnnePY8vsOdg8bB8dQDDqY/wpbJ3ESRPHyXLv/9/nojPA3obHhErDgDrHUG0BwgIoE5UQLB4aK/gAsBTIrChZLVYw+fJUWAjMlR91qkgh8/Xw6UAD9dF3Xfrc8sLKhog8WVdSi6HEvWjaoguDyEyD/AAIILrFxLKSIe6k0Gaxz6tIPhBDQeezCssPodX66SC4coJBd+xKaCTlR/LE6jPKecdPXPl/jPJnZ+F7CJ8QQDogFpAsIMQBoDhVXmGxwTE5AcCpnj0p8tjSLfEQJ6Wp2R5eSTfcoxLsix1psuj/RPoGSyeJGTJCeSnQpbOxtc03/i9KACElNbBDPQAvEJbEQ8gXhlHYc3r5lM++Wn1Qi4f0yOZHLdOVcblIXK4bSFZQgYFvHVIlMp2guGR9nUSPpcnzo4QET6qbwwAfCTT4InDCCSgnE9tNiT4YQeep65DitADDUpxUodnPCcXRIbPAqUOflFy3PsOxbV6Ur+2k/jKr9eWwzdmdB1hHrteKc/1YUAfXxdXjq17GABuV0QKa0dLRWwHKMMCyliKE+dRPivARHFHjg0CxkNeG691M8R21EJyfAc5QKd1WEtiAm5XriuT3yf20K1ZUtb41JCuL6i34yPqS1UmxEPqSwKAUIVUCA1aiIfcJ3xWK9UK20qZPGWAC0YaHHLt8ZBPqqdLyfK1nBCP1D2oX0CWKh+TFwS+K9uS4+jGyW5Mhlw+cX0OACDCyH1/EkbzXcdQpaksAgJLacUTkEknNHoPgBovZFGeIHl5cbYn4fPy6D1qF/GTy2+VpfWF9HG/h3msxhSQ5fcA1tNAR6gXXFuQ5vGC5QSM5IXWuG7v4M6qbcCJPCpHbwg5PJzc3TQ3X5O7TLUd6OpkBzUkT8pw6wvt8Gke4rsiSfJRWdSPMXI8AKjHwXag4sk4Ihm/EwypkCpLnakU8hWXvNZ9n/iyMFaGozvPp6D0wcbJCZrX03BZFAABSqUn0rxxoDwHor6OkyV1snuAZENAiGKdTO65yjgOF63VBIMGWedrHkEiaIYsILrODtlCjNd1ar2pbdTGkP3OuO3mSx4DtBg5mpfmB3iT1ePxUZscWdKueAC4AkNEAhJ0kLpHeMKODgfEJSrDOJMYp5zj9DSeXrJOJdMNjHVft8aALKuuQB0x9Xl5rjz3Ps8zthn7A3xaTkBfWgfxEZOlAZCXyCsaAK6T4wxz+XjrDOUbPhro0LVVl/705w0WnwYI1YVch4JL8lUPZZzOlm+SXJlEjnsAI1iHU5d3n5ZPxuPIiQMbB49+yyjjEfcMAPJSAACpKNYwlaeNV0Sd7xKRIw0IBpbqQHhNnUovV1+qF9XZ1onvF1h1OPK984CO/YmEzrfW8Fadsi73UTvNp/dDeY4ci9f1icxXv11Ueao3KRoARIhViWu85nED5gfOU9qR4wdf5TmyPJ18WV49lE99d2Wpe8nkxJAFALe8x2MfLNVvZpW8rgz32pXrEWvl+eKfdCgA8B/Nkn+GEQSAdQ6NOilZhSk6SMm3ZFsyHADFyaP3LZDQe06AXRm0bGw+yYvjIbyW72LkKIDYfOalnEn1ceVpHwYagOzm2Y9IVfDZL5bVkJYaAIIUClwKShdFlkExFAp2iDznxMjVQEmSr+S5eS4VxRPQXfk5ub8D5NVF9KfxkHzi5+f27wliAaAoXilaWYzjfg55RhFSGx20ZceQGUL8PItSkKVlFCUrFXLqivevk+9uGHmkAEwBb/OoLp8+tNMASCRcANCxiX1nb7RyK/1/m2KdT96QHqQig2Eoto5UienC39ccyLPIDbh7rYisYkgPkPAB4JIpoD9/YYvwtoJJd5WUVN3Juu3zQanoci5854WKAGdgbyOO1PFwCgD7X2X9T/pvk/LyEicZALYVFhYeYRMC9t+krU9JDCmKQnw03yXOE/huk5FBZft88WT0MTIsmZKsOlQZi4fIpHYG9HLv0zo8HoeP5iWIr8+ZQn7Iy5Vk6qQ+TuQnjrCYJxKJbf8bAikxtD9D/ooAAAAASUVORK5CYII=";

// src/components/ThemeSelector.jsx
var import_react3 = __toESM(require_react(), 1);

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
  const [theme, setTheme] = (0, import_react3.useState)(getSavedTheme);
  const [isOpen, setIsOpen] = (0, import_react3.useState)(false);
  const rootRef = (0, import_react3.useRef)(null);
  const triggerRef = (0, import_react3.useRef)(null);
  const menuRef = (0, import_react3.useRef)(null);
  const [menuPosition, setMenuPosition] = (0, import_react3.useState)({ top: 0, left: 0 });
  (0, import_react3.useEffect)(() => {
    applyTheme(theme);
  }, [theme]);
  (0, import_react3.useEffect)(() => {
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
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ import_react3.default.createElement("div", { ref: rootRef, className: `relative ${className}` }, /* @__PURE__ */ import_react3.default.createElement(
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
    /* @__PURE__ */ import_react3.default.createElement(ActiveIcon, { size: 18 })
  ), isOpen && /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      ref: menuRef,
      style: { top: menuPosition.top, left: menuPosition.left },
      className: "theme-selector-menu fixed z-50 flex gap-1 rounded-2xl p-1.5 shadow-xl"
    },
    THEMES.map(({ id, label, icon: Icon2 }) => {
      const isActive = theme === id;
      return /* @__PURE__ */ import_react3.default.createElement(
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
        /* @__PURE__ */ import_react3.default.createElement(Icon2, { size: 17 })
      );
    })
  ));
};
var ThemeSelector_default = ThemeSelector;

// src/hooks/useAICheatingDetection.jsx
var import_react4 = __toESM(require_react(), 1);
var MEDIAPIPE_TASKS_VISION_VERSION = "0.10.34";
var WASM_BASE_URL = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MEDIAPIPE_TASKS_VISION_VERSION}/wasm`;
var modelLoadPromise = null;
var loadedModels = null;
var createDetectionModels = async () => {
  if (loadedModels) {
    return loadedModels;
  }
  if (modelLoadPromise) {
    return modelLoadPromise;
  }
  modelLoadPromise = (async () => {
    const { FaceDetector, FilesetResolver, ObjectDetector } = await Promise.resolve().then(() => (init_vision_bundle(), vision_bundle_exports));
    const vision = await FilesetResolver.forVisionTasks(WASM_BASE_URL);
    console.log("[AI Detection] Loading face detector...");
    const faceDetector = await FaceDetector.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
        delegate: "CPU"
        // Changed from GPU to CPU for better compatibility
      },
      runningMode: "VIDEO",
      minDetectionConfidence: 0.35
      // Keep detection responsive in imperfect lighting
    });
    console.log("[AI Detection] \xE2\u0153\u2026 Face detector loaded");
    console.log("[AI Detection] Loading object detector...");
    const objectDetector = await ObjectDetector.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite",
        delegate: "CPU"
        // Changed from GPU to CPU for better compatibility
      },
      runningMode: "VIDEO",
      scoreThreshold: 0.3,
      // Increased from 0.2 for fewer false positives
      maxResults: 5
    });
    console.log("[AI Detection] \xE2\u0153\u2026 Object detector loaded");
    loadedModels = { faceDetector, objectDetector };
    return loadedModels;
  })().catch((error) => {
    modelLoadPromise = null;
    loadedModels = null;
    throw error;
  });
  return modelLoadPromise;
};
var useAICheatingDetection = (onViolation) => {
  const [isModelLoaded, setIsModelLoaded] = (0, import_react4.useState)(false);
  const [violations, setViolations] = (0, import_react4.useState)({
    multipleFaces: 0,
    noFace: 0,
    phoneDetected: 0,
    lookingAway: 0
  });
  const faceDetectorRef = (0, import_react4.useRef)(null);
  const objectDetectorRef = (0, import_react4.useRef)(null);
  const videoRef = (0, import_react4.useRef)(null);
  const detectionIntervalRef = (0, import_react4.useRef)(null);
  const noFaceTimerRef = (0, import_react4.useRef)(null);
  const noFaceDurationRef = (0, import_react4.useRef)(0);
  const lastViolationTimeRef = (0, import_react4.useRef)({});
  const lastFrameTimeRef = (0, import_react4.useRef)(0);
  const detectionActiveRef = (0, import_react4.useRef)(false);
  const multipleFaceStreakRef = (0, import_react4.useRef)(0);
  const phoneDetectionStreakRef = (0, import_react4.useRef)(0);
  const objectDetectionStreakRef = (0, import_react4.useRef)(0);
  const DETECTION_INTERVAL = 260;
  const NO_FACE_THRESHOLD = 900;
  const VIOLATION_COOLDOWN = 1800;
  const FACE_CONFIDENCE_THRESHOLD = 0.3;
  const MIN_FACE_AREA_RATIO = 0.015;
  const FACE_OVERLAP_IOU_THRESHOLD = 0.62;
  const FACE_CENTER_DISTANCE_RATIO = 0.18;
  const MULTI_FACE_STREAK_THRESHOLD = 3;
  const loadModels = (0, import_react4.useCallback)(async () => {
    console.log("[AI Detection] \u{1F680} loadModels() called");
    const maxRetries = 3;
    let retryCount = 0;
    while (retryCount < maxRetries) {
      try {
        console.log(`[AI Detection] Loading models... (Attempt ${retryCount + 1}/${maxRetries})`);
        const { faceDetector, objectDetector } = await createDetectionModels();
        faceDetectorRef.current = faceDetector;
        console.log("[AI Detection] \u2705 Face detector loaded");
        objectDetectorRef.current = objectDetector;
        console.log("[AI Detection] \u2705 Object detector loaded");
        console.log("[AI Detection] \u2705\u2705 All models loaded successfully");
        setIsModelLoaded(true);
        return true;
      } catch (error) {
        retryCount++;
        console.error(`[AI Detection] \u274C Failed to load models (Attempt ${retryCount}/${maxRetries}):`, error);
        console.error("[AI Detection] Error details:", {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        if (retryCount < maxRetries) {
          const waitTime = Math.min(1e3 * Math.pow(2, retryCount), 5e3);
          console.log(`[AI Detection] Retrying in ${waitTime}ms...`);
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        } else {
          console.error("[AI Detection] \u274C\u274C Failed to load models after all retries. AI detection disabled.");
          console.error("[AI Detection] Final error:", error);
          setIsModelLoaded(false);
          return false;
        }
      }
    }
  }, []);
  const getFaceBox = (0, import_react4.useCallback)((detection) => {
    const box = detection?.boundingBox;
    if (!box) return null;
    const x2 = Number(box.originX || 0);
    const y2 = Number(box.originY || 0);
    const width = Number(box.width || 0);
    const height = Number(box.height || 0);
    if (width <= 0 || height <= 0) return null;
    return { x: x2, y: y2, width, height };
  }, []);
  const getDistinctFaceDetections = (0, import_react4.useCallback)((detections, videoElement) => {
    const rawDetections = Array.isArray(detections?.detections) ? detections.detections : [];
    const videoWidth = Number(videoElement?.videoWidth || 0);
    const videoHeight = Number(videoElement?.videoHeight || 0);
    const videoArea = videoWidth > 0 && videoHeight > 0 ? videoWidth * videoHeight : 0;
    const filtered = rawDetections.map((detection) => {
      const score = detection?.categories?.[0]?.score || 0;
      const box = getFaceBox(detection);
      if (score < FACE_CONFIDENCE_THRESHOLD || !box) return null;
      const area = box.width * box.height;
      const areaRatio = videoArea > 0 ? area / videoArea : 1;
      if (videoArea > 0 && areaRatio < MIN_FACE_AREA_RATIO) return null;
      return { detection, score, box };
    }).filter(Boolean).sort((a2, b2) => b2.score - a2.score);
    const distinct = [];
    filtered.forEach((candidate) => {
      const isDuplicate = distinct.some((kept) => {
        const intersectLeft = Math.max(candidate.box.x, kept.box.x);
        const intersectTop = Math.max(candidate.box.y, kept.box.y);
        const intersectRight = Math.min(candidate.box.x + candidate.box.width, kept.box.x + kept.box.width);
        const intersectBottom = Math.min(candidate.box.y + candidate.box.height, kept.box.y + kept.box.height);
        const intersectWidth = Math.max(0, intersectRight - intersectLeft);
        const intersectHeight = Math.max(0, intersectBottom - intersectTop);
        const intersection = intersectWidth * intersectHeight;
        const union = candidate.box.width * candidate.box.height + kept.box.width * kept.box.height - intersection;
        const iou = union > 0 ? intersection / union : 0;
        const candidateCenterX = candidate.box.x + candidate.box.width / 2;
        const candidateCenterY = candidate.box.y + candidate.box.height / 2;
        const keptCenterX = kept.box.x + kept.box.width / 2;
        const keptCenterY = kept.box.y + kept.box.height / 2;
        const dx = candidateCenterX - keptCenterX;
        const dy = candidateCenterY - keptCenterY;
        const centerDistance = Math.sqrt(dx * dx + dy * dy);
        const normalizationBase = Math.max(candidate.box.width, candidate.box.height, kept.box.width, kept.box.height, 1);
        const distanceRatio = centerDistance / normalizationBase;
        return iou >= FACE_OVERLAP_IOU_THRESHOLD || distanceRatio <= FACE_CENTER_DISTANCE_RATIO;
      });
      if (!isDuplicate) {
        distinct.push(candidate);
      }
    });
    return distinct.map((item) => item.detection);
  }, [FACE_CONFIDENCE_THRESHOLD, FACE_CENTER_DISTANCE_RATIO, FACE_OVERLAP_IOU_THRESHOLD, MIN_FACE_AREA_RATIO, getFaceBox]);
  const detectMultipleFaces = (0, import_react4.useCallback)((distinctFaces) => {
    const faceCount = distinctFaces.length;
    if (faceCount !== 1) {
      console.log(`[AI] \u{1F465} Face count: ${faceCount}`);
    }
    if (faceCount > 1) {
      multipleFaceStreakRef.current += 1;
      if (multipleFaceStreakRef.current < MULTI_FACE_STREAK_THRESHOLD) {
        return null;
      }
      const now = Date.now();
      const lastTime = lastViolationTimeRef.current["multiple_faces"] || 0;
      if (now - lastTime >= VIOLATION_COOLDOWN) {
        lastViolationTimeRef.current["multiple_faces"] = now;
        console.log(`[AI] \u26A0\uFE0F\u26A0\uFE0F MULTIPLE FACES VIOLATION: ${faceCount} faces detected!`);
        return {
          type: "multiple_faces",
          count: faceCount,
          severity: "high",
          message: `${faceCount} faces detected - Only one person allowed during exam`
        };
      } else {
        const timeLeft = Math.ceil((VIOLATION_COOLDOWN - (now - lastTime)) / 1e3);
        console.log(`[AI] Multiple faces detected but cooldown active (${timeLeft}s remaining)`);
      }
    } else {
      multipleFaceStreakRef.current = 0;
    }
    return null;
  }, [MULTI_FACE_STREAK_THRESHOLD]);
  const detectNoFace = (0, import_react4.useCallback)((distinctFaces) => {
    const faceCount = distinctFaces.length;
    if (faceCount === 0) {
      if (!noFaceTimerRef.current) {
        noFaceTimerRef.current = Date.now();
        console.log("[AI] \u26A0\uFE0F No face detected - timer started");
      }
      noFaceDurationRef.current = Date.now() - noFaceTimerRef.current;
      const durationSeconds = Math.floor(noFaceDurationRef.current / 1e3);
      if (noFaceDurationRef.current >= NO_FACE_THRESHOLD) {
        const now = Date.now();
        const lastTime = lastViolationTimeRef.current["no_face"] || 0;
        if (now - lastTime >= VIOLATION_COOLDOWN) {
          lastViolationTimeRef.current["no_face"] = now;
          console.log("[AI] \u26A0\uFE0F\u26A0\uFE0F NO FACE VIOLATION TRIGGERED");
          noFaceTimerRef.current = now;
          return {
            type: "no_face",
            duration: noFaceDurationRef.current,
            severity: "high",
            message: `No face detected for ${durationSeconds} seconds - Student must be visible`
          };
        } else {
          const timeLeft = Math.ceil((VIOLATION_COOLDOWN - (now - lastTime)) / 1e3);
          console.log(`[AI] No face still detected but cooldown active (${timeLeft}s remaining)`);
        }
      }
    } else {
      if (noFaceTimerRef.current) {
        console.log("[AI] \u2705 Face detected again - timer reset");
        noFaceTimerRef.current = null;
        noFaceDurationRef.current = 0;
      }
    }
    return null;
  }, []);
  const detectPhone = (0, import_react4.useCallback)((objectDetections) => {
    if (!objectDetections || !objectDetections.detections) return null;
    const phoneDetections = objectDetections.detections.filter((det) => {
      const categoryName = det?.categories?.[0]?.categoryName?.toLowerCase() || "";
      const score = det?.categories?.[0]?.score || 0;
      const isPhoneLabel = categoryName.includes("cell phone") || categoryName.includes("mobile phone") || categoryName.includes("phone");
      return isPhoneLabel && score >= 0.6;
    });
    if (phoneDetections.length > 0) {
      phoneDetectionStreakRef.current += 1;
      if (phoneDetectionStreakRef.current < 2) {
        return null;
      }
      const now = Date.now();
      const lastTime = lastViolationTimeRef.current["phone_detected"] || 0;
      if (now - lastTime >= VIOLATION_COOLDOWN) {
        const detection = phoneDetections[0];
        const confidence = Math.round((detection?.categories?.[0]?.score || 0) * 100);
        lastViolationTimeRef.current["phone_detected"] = now;
        console.log(`[AI] \u26A0\uFE0F PHONE DETECTED: ${confidence}%`);
        return {
          type: "phone_detected",
          confidence: detection?.categories?.[0]?.score || 0,
          severity: "high",
          message: `Mobile device detected (${confidence}% confidence) - Not allowed during exam`
        };
      }
    } else {
      phoneDetectionStreakRef.current = 0;
    }
    return null;
  }, []);
  const detectSuspiciousObject = (0, import_react4.useCallback)((objectDetections) => {
    if (!objectDetections || !objectDetections.detections) return null;
    const suspiciousLabels = ["book", "bottle", "remote", "scissors", "notebook", "laptop", "keyboard", "mouse", "cup", "paper"];
    const suspiciousDetections = objectDetections.detections.filter((det) => {
      const categoryName = det?.categories?.[0]?.categoryName?.toLowerCase() || "";
      const score = det?.categories?.[0]?.score || 0;
      return suspiciousLabels.some((label) => categoryName.includes(label)) && score >= 0.55;
    });
    if (suspiciousDetections.length > 0) {
      objectDetectionStreakRef.current += 1;
      if (objectDetectionStreakRef.current < 2) {
        return null;
      }
      const now = Date.now();
      const lastTime = lastViolationTimeRef.current["object_detected"] || 0;
      if (now - lastTime >= VIOLATION_COOLDOWN) {
        const detection = suspiciousDetections[0];
        const confidence = Math.round((detection?.categories?.[0]?.score || 0) * 100);
        const objectName = detection?.categories?.[0]?.categoryName || "Object";
        lastViolationTimeRef.current["object_detected"] = now;
        return {
          type: "object_detected",
          confidence: detection?.categories?.[0]?.score || 0,
          severity: "medium",
          message: `${objectName} detected (${confidence}% confidence) near camera`
        };
      }
    } else {
      objectDetectionStreakRef.current = 0;
    }
    return null;
  }, []);
  const detectLookingDown = (0, import_react4.useCallback)((distinctFaces) => {
    if (distinctFaces.length !== 1) return null;
    const detection = distinctFaces[0];
    const keypoints = detection.keypoints;
    if (keypoints && keypoints.length >= 6) {
      const leftEye = keypoints.find((kp) => kp.category === "leftEye");
      const rightEye = keypoints.find((kp) => kp.category === "rightEye");
      const noseTip = keypoints.find((kp) => kp.category === "noseTip");
      if (leftEye && rightEye && noseTip) {
        const eyeY = (leftEye.y + rightEye.y) / 2;
        const noseY = noseTip.y;
        const lookingDownThreshold = 0.05;
        if (noseY - eyeY > lookingDownThreshold) {
          const now = Date.now();
          const lastTime = lastViolationTimeRef.current["looking_down"] || 0;
          if (now - lastTime >= VIOLATION_COOLDOWN) {
            lastViolationTimeRef.current["looking_down"] = now;
            console.log("[AI] \u26A0\uFE0F LOOKING DOWN");
            return {
              type: "looking_down",
              severity: "medium",
              message: "Student looking down - Possible phone usage or notes"
            };
          }
        }
      }
    }
    return null;
  }, []);
  const runDetection = (0, import_react4.useCallback)(async () => {
    if (!videoRef.current || !detectionActiveRef.current) {
      return;
    }
    if (!faceDetectorRef.current || !objectDetectorRef.current) {
      return;
    }
    const video = videoRef.current;
    if (video.readyState !== video.HAVE_ENOUGH_DATA) {
      return;
    }
    try {
      const now = performance.now();
      const faceDetections = faceDetectorRef.current.detectForVideo(video, now);
      const objectDetections = objectDetectorRef.current.detectForVideo(video, now);
      const distinctFaces = getDistinctFaceDetections(faceDetections, video);
      const faceCount = distinctFaces.length;
      if (faceCount !== 1) {
        console.log(`[AI] \u{1F465} Face count: ${faceCount}`);
        if (distinctFaces.length > 0) {
          distinctFaces.forEach((face, idx) => {
            const confidence = face.categories?.[0]?.score || 0;
            console.log(`[AI]   Face ${idx + 1}: confidence ${(confidence * 100).toFixed(1)}%`);
          });
        }
      }
      lastFrameTimeRef.current = now;
      const violations2 = [
        detectMultipleFaces(distinctFaces),
        detectNoFace(distinctFaces),
        detectPhone(objectDetections),
        detectSuspiciousObject(objectDetections),
        detectLookingDown(distinctFaces)
      ].filter((v2) => v2 !== null);
      if (violations2.length > 0) {
        console.log(`[AI] \u26A0\uFE0F\u26A0\uFE0F ${violations2.length} violation(s):`, violations2.map((v2) => v2.type));
        violations2.forEach((violation) => {
          setViolations((prev) => {
            const newViolations = { ...prev };
            if (violation.type === "multiple_faces") {
              newViolations.multipleFaces += 1;
            } else if (violation.type === "no_face") {
              newViolations.noFace += 1;
            } else if (violation.type === "phone_detected" || violation.type === "looking_down" || violation.type === "object_detected") {
              newViolations.phoneDetected += 1;
            }
            return newViolations;
          });
          if (onViolation) {
            onViolation(violation);
          }
        });
      }
    } catch (error) {
      console.error("[AI Detection] \u274C Error during detection:", error);
    }
  }, [detectMultipleFaces, detectNoFace, detectPhone, detectSuspiciousObject, detectLookingDown, getDistinctFaceDetections, onViolation]);
  const startDetection = (0, import_react4.useCallback)(async (videoElement) => {
    console.log("[AI] startDetection called");
    console.log("[AI] isModelLoaded:", isModelLoaded);
    console.log("[AI] faceDetectorRef:", !!faceDetectorRef.current);
    console.log("[AI] objectDetectorRef:", !!objectDetectorRef.current);
    if (detectionIntervalRef.current && detectionActiveRef.current) {
      videoRef.current = videoElement;
      console.log("[AI] Detection already running");
      return true;
    }
    if (!faceDetectorRef.current || !objectDetectorRef.current) {
      console.log("[AI] Waiting for models to load...");
      let waitCount = 0;
      const maxWait = 30;
      while (!faceDetectorRef.current || !objectDetectorRef.current) {
        if (waitCount >= maxWait) {
          console.error("[AI] \u274C Models not loaded after waiting");
          return false;
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        waitCount++;
        console.log(`[AI] Waiting for models... ${waitCount}/${maxWait}`);
      }
    }
    try {
      videoRef.current = videoElement;
      console.log("[AI] Video element assigned, readyState:", videoElement.readyState);
      if (videoElement.readyState < videoElement.HAVE_ENOUGH_DATA) {
        console.log("[AI] Waiting for video to be ready...");
        await new Promise((resolve) => {
          const checkReady = () => {
            if (videoElement.readyState >= videoElement.HAVE_ENOUGH_DATA) {
              console.log("[AI] Video ready!");
              resolve();
            } else {
              setTimeout(checkReady, 100);
            }
          };
          checkReady();
        });
      }
      detectionActiveRef.current = true;
      detectionIntervalRef.current = setInterval(runDetection, DETECTION_INTERVAL);
      console.log("[AI] \u2705\u2705 Detection started successfully");
      return true;
    } catch (error) {
      console.error("[AI Detection] \u274C Error starting detection:", error);
      return false;
    }
  }, [runDetection, isModelLoaded]);
  const stopDetection = (0, import_react4.useCallback)(() => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    noFaceTimerRef.current = null;
    noFaceDurationRef.current = 0;
    multipleFaceStreakRef.current = 0;
    phoneDetectionStreakRef.current = 0;
    objectDetectionStreakRef.current = 0;
    lastViolationTimeRef.current = {};
    detectionActiveRef.current = false;
  }, []);
  const testViolation = (0, import_react4.useCallback)((type = "multiple_faces") => {
    console.log(`[AI] \u{1F9EA} Testing violation: ${type}`);
    const testViolations = {
      multiple_faces: {
        type: "multiple_faces",
        count: 2,
        severity: "high",
        message: "2 faces detected - Only one person allowed during exam"
      },
      no_face: {
        type: "no_face",
        duration: 3e3,
        severity: "high",
        message: "No face detected for 3 seconds - Student must be visible"
      },
      phone_detected: {
        type: "phone_detected",
        confidence: 0.85,
        severity: "high",
        message: "Mobile device detected (85% confidence) - Not allowed during exam"
      }
    };
    const violation = testViolations[type];
    if (violation && onViolation) {
      onViolation(violation);
    }
  }, [onViolation]);
  (0, import_react4.useEffect)(() => {
    if (typeof window !== "undefined" && !window.testAIViolation) {
      window.testAIViolation = testViolation;
      console.log('[AI] \u{1F9EA} Test function available: window.testAIViolation("multiple_faces")');
    }
  }, [testViolation]);
  (0, import_react4.useEffect)(() => {
    loadModels();
    return () => {
      stopDetection();
    };
  }, [loadModels, stopDetection]);
  return {
    isModelLoaded,
    detectionActive: detectionActiveRef.current,
    violations,
    startDetection,
    stopDetection,
    loadModels,
    testViolation
    // Export test function
  };
};

// src/hooks/useFullscreen.jsx
var import_react5 = __toESM(require_react(), 1);
var useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = (0, import_react5.useState)(false);
  const [showWarning, setShowWarning] = (0, import_react5.useState)(false);
  const enterFullscreen = (0, import_react5.useCallback)(async () => {
    try {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
      return true;
    } catch (err) {
      const message = String(err?.message || "").toLowerCase();
      const name = String(err?.name || "").toLowerCase();
      const isPermissionOrGestureBlock = name.includes("notallowederror") || message.includes("permission") || message.includes("gesture") || message.includes("user activation");
      if (!isPermissionOrGestureBlock) {
        console.error("Fullscreen error:", err);
      }
      setShowWarning(true);
      return false;
    }
  }, [setShowWarning]);
  const exitFullscreen = (0, import_react5.useCallback)(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
    } catch (err) {
      console.error("Exit fullscreen error:", err);
    }
  }, []);
  (0, import_react5.useEffect)(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      setIsFullscreen(!!fullscreenElement);
      if (!fullscreenElement && (window.location.pathname === "/test" || window.location.pathname === "/ai-interview") && !window.__testSubmitting) {
        setShowWarning(true);
      } else if (fullscreenElement) {
        setShowWarning(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, []);
  return {
    isFullscreen,
    showWarning,
    setShowWarning,
    enterFullscreen,
    exitFullscreen
  };
};

// src/components/FullscreenWarning.jsx
var FullscreenWarning = ({ onEnterFullscreen }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-shnoor-navy/80 backdrop-blur-sm flex items-center justify-center z-50" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4 border border-shnoor-mist" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-shnoor-dangerLight rounded-full flex items-center justify-center mx-auto mb-4" }, /* @__PURE__ */ React.createElement("svg", { className: "w-8 h-8 text-shnoor-danger", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }))), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-shnoor-navy mb-2" }, "Fullscreen Mode Required"), /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-indigoMedium mb-6 leading-relaxed" }, "This examination must be taken in fullscreen mode for security purposes. Please click the button below to enter fullscreen."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onEnterFullscreen,
      className: "w-full px-6 py-3 bg-shnoor-indigo hover:bg-[#6b6be5] hover:shadow-[0_0_20px_rgba(107,107,229,0.4)] text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
    },
    "Enter Fullscreen Mode"
  ), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium mt-4 font-medium" }, "Press ESC to exit fullscreen will trigger a warning"))));
};
var FullscreenWarning_default = FullscreenWarning;

// src/components/AIViolationAlert.jsx
var AIViolationAlert = ({ violation, onDismiss }) => {
  const getIcon = () => {
    switch (violation.type) {
      case "multiple_faces":
        return /* @__PURE__ */ React.createElement(Users, { className: "w-6 h-6" });
      case "no_face":
        return /* @__PURE__ */ React.createElement(UserX, { className: "w-6 h-6" });
      case "phone_detected":
      case "object_detected":
      case "looking_down":
        return /* @__PURE__ */ React.createElement(Smartphone, { className: "w-6 h-6" });
      case "loud_noise":
      case "noise_detected":
      case "voice_detected":
        return /* @__PURE__ */ React.createElement(Volume2, { className: "w-6 h-6" });
      case "video_blur":
        return /* @__PURE__ */ React.createElement(VideoOff, { className: "w-6 h-6" });
      case "tab_switch":
        return /* @__PURE__ */ React.createElement(Eye, { className: "w-6 h-6" });
      default:
        return /* @__PURE__ */ React.createElement(Eye, { className: "w-6 h-6" });
    }
  };
  const getSeverityColor = () => {
    switch (violation.severity) {
      case "high":
        return "bg-shnoor-danger border-shnoor-danger";
      case "medium":
        return "bg-shnoor-warning border-shnoor-warning";
      case "low":
        return "bg-shnoor-warning border-shnoor-warning";
      default:
        return "bg-shnoor-danger border-shnoor-danger";
    }
  };
  const getMessage = () => {
    switch (violation.type) {
      case "multiple_faces":
        return "Multiple faces detected";
      case "no_face":
        return "No face detected";
      case "phone_detected":
        return "Mobile detected";
      case "object_detected":
        return "Object detected";
      case "looking_down":
        return "Looking down detected";
      case "loud_noise":
      case "noise_detected":
        return "Sound detected";
      case "voice_detected":
        return "Sound detected";
      case "video_blur":
        return "Blur video";
      case "tab_switch":
        return "Tab switch detected";
      default:
        return "Suspicious activity detected";
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: `fixed top-4 right-4 left-4 sm:left-auto z-50 ${getSeverityColor()} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-2xl border-2 animate-pulse` }, "      ", /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0" }, getIcon()), /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-lg" }, getMessage())), onDismiss && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onDismiss,
      className: "text-white hover:text-shnoor-soft text-2xl leading-none"
    },
    "\xD7"
  )));
};
var AIViolationAlert_default = AIViolationAlert;

// src/pages/AIInterviewPage.jsx
var MAX_INTERVIEW_QUESTIONS = 20;
var ANSWER_WINDOW_SECONDS = 18;
var ANSWER_GRACE_SECONDS = 6;
var isTechnicalQuestionText = (question = "") => {
  const q2 = String(question || "").trim().toLowerCase();
  if (!q2 || !q2.endsWith("?")) return false;
  const blocked = [
    "ready",
    "let us begin",
    "let's begin",
    "how are you",
    "tell me about yourself",
    "resume",
    "document",
    "pdf generation",
    "reportlab"
  ];
  if (blocked.some((phrase) => q2.includes(phrase))) return false;
  const signals = [
    "how ",
    "what ",
    "why ",
    "when ",
    "which ",
    "can ",
    "could ",
    "would ",
    "explain ",
    "describe ",
    "implement",
    "debug",
    "optimize",
    "design",
    "api",
    "database",
    "sql",
    "react",
    "javascript",
    "python",
    "node",
    "express",
    "algorithm",
    "state",
    "cache",
    "webpack",
    "router"
  ];
  return signals.some((signal) => q2.includes(signal));
};
var AIInterviewPage = () => {
  const navigate = useNavigate();
  const studentName = localStorage.getItem("studentName") || "Student";
  const studentId = localStorage.getItem("studentId") || localStorage.getItem("uid") || "";
  const [step, setStep] = (0, import_react6.useState)("upload");
  const [resumeFile, setResumeFile] = (0, import_react6.useState)(null);
  const [isUploading, setIsUploading] = (0, import_react6.useState)(false);
  const [ollamaHistory, setOllamaHistory] = (0, import_react6.useState)([]);
  const [messages, setMessages] = (0, import_react6.useState)([]);
  const [userInput, setUserInput] = (0, import_react6.useState)("");
  const [isSending, setIsSending] = (0, import_react6.useState)(false);
  const [uploadError, setUploadError] = (0, import_react6.useState)("");
  const [chatError, setChatError] = (0, import_react6.useState)("");
  const [isListening, setIsListening] = (0, import_react6.useState)(false);
  const [isTTSActive, setIsTTSActive] = (0, import_react6.useState)(true);
  const isVoiceMode = true;
  const [timeLeft, setTimeLeft] = (0, import_react6.useState)(ANSWER_WINDOW_SECONDS);
  const [timerActive, setTimerActive] = (0, import_react6.useState)(false);
  const [sessionTimeLeft, setSessionTimeLeft] = (0, import_react6.useState)(20 * 60);
  const [silenceCount, setSilenceCount] = (0, import_react6.useState)(0);
  const [questionCount, setQuestionCount] = (0, import_react6.useState)(0);
  const [assessmentResult, setAssessmentResult] = (0, import_react6.useState)(null);
  const [feedbackComment, setFeedbackComment] = (0, import_react6.useState)("");
  const [isSubmittingFeedback, setIsSubmittingFeedback] = (0, import_react6.useState)(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = (0, import_react6.useState)(false);
  const [proctoringError, setProctoringError] = (0, import_react6.useState)("");
  const [isCameraReady, setIsCameraReady] = (0, import_react6.useState)(false);
  const [adminProctorMessage, setAdminProctorMessage] = (0, import_react6.useState)(null);
  const [currentViolation, setCurrentViolation] = (0, import_react6.useState)(null);
  const [speechHints, setSpeechHints] = (0, import_react6.useState)([]);
  const [proctoringCounts, setProctoringCounts] = (0, import_react6.useState)({
    multipleFaces: 0,
    noFace: 0,
    phoneDetected: 0,
    objectDetected: 0,
    voiceDetected: 0,
    tabSwitch: 0,
    responseTimeout: 0
  });
  const resumeTextRef = (0, import_react6.useRef)("");
  const resumeSkillsRef = (0, import_react6.useRef)([]);
  const usedSkillsRef = (0, import_react6.useRef)(/* @__PURE__ */ new Set());
  const messagesEndRef = (0, import_react6.useRef)(null);
  const fileInputRef = (0, import_react6.useRef)(null);
  const recognitionRef = (0, import_react6.useRef)(null);
  const timerRef = (0, import_react6.useRef)(null);
  const askedQuestionsRef = (0, import_react6.useRef)([]);
  const recognitionRunningRef = (0, import_react6.useRef)(false);
  const proctoringVideoRef = (0, import_react6.useRef)(null);
  const previewVideoRef = (0, import_react6.useRef)(null);
  const streamRef = (0, import_react6.useRef)(null);
  const socketRef = (0, import_react6.useRef)(null);
  const frameCanvasRef = (0, import_react6.useRef)(null);
  const frameIntervalRef = (0, import_react6.useRef)(null);
  const audioContextRef = (0, import_react6.useRef)(null);
  const analyserRef = (0, import_react6.useRef)(null);
  const audioMonitorIntervalRef = (0, import_react6.useRef)(null);
  const lastSentRef = (0, import_react6.useRef)({ text: "", at: 0 });
  const lastSpeechResultRef = (0, import_react6.useRef)({ text: "", at: 0 });
  const latestTranscriptRef = (0, import_react6.useRef)("");
  const userInputRef = (0, import_react6.useRef)("");
  const autoSubmitOnStopRef = (0, import_react6.useRef)(false);
  const sendAnswerRef = (0, import_react6.useRef)(null);
  const speakRetryTimeoutRef = (0, import_react6.useRef)(null);
  const keepListeningRef = (0, import_react6.useRef)(false);
  const speechBaseInputRef = (0, import_react6.useRef)("");
  const suppressAudioUntilRef = (0, import_react6.useRef)(0);
  const violationTimeoutRef = (0, import_react6.useRef)(null);
  const adminMessageTimeoutRef = (0, import_react6.useRef)(null);
  const proctoringCountsRef = (0, import_react6.useRef)(proctoringCounts);
  const isListeningRef = (0, import_react6.useRef)(isListening);
  const isSendingRef = (0, import_react6.useRef)(isSending);
  const lastTabViolationRef = (0, import_react6.useRef)(0);
  const voiceCooldownRef = (0, import_react6.useRef)(0);
  const ambientNoiseRef = (0, import_react6.useRef)(0);
  const ambientVoiceEnergyRef = (0, import_react6.useRef)(0);
  const noiseBurstRef = (0, import_react6.useRef)({ startedAt: 0, lastSeenAt: 0 });
  const violationEventsRef = (0, import_react6.useRef)([]);
  const isSpeakingRef = (0, import_react6.useRef)(false);
  const answerWindowPhaseRef = (0, import_react6.useRef)("primary");
  const isSavingInterviewRef = (0, import_react6.useRef)(false);
  const speechPhraseSupportRef = (0, import_react6.useRef)(true);
  const speechPhraseWarningShownRef = (0, import_react6.useRef)(false);
  const proctoringMeta = (0, import_react6.useMemo)(() => ({
    studentId: String(studentId || "unknown-student"),
    studentName,
    testId: -1,
    testTitle: "AI Interview"
  }), [studentId, studentName]);
  const { showWarning, setShowWarning, enterFullscreen } = useFullscreen();
  (0, import_react6.useEffect)(() => {
    proctoringCountsRef.current = proctoringCounts;
  }, [proctoringCounts]);
  (0, import_react6.useEffect)(() => {
    isListeningRef.current = isListening;
  }, [isListening]);
  (0, import_react6.useEffect)(() => {
    isSendingRef.current = isSending;
  }, [isSending]);
  (0, import_react6.useEffect)(() => {
    userInputRef.current = userInput;
  }, [userInput]);
  const levenshteinDistance = (0, import_react6.useCallback)((source = "", target = "") => {
    const a2 = source.toLowerCase();
    const b2 = target.toLowerCase();
    if (!a2) return b2.length;
    if (!b2) return a2.length;
    const matrix = Array.from(
      { length: a2.length + 1 },
      (_2, row) => Array.from({ length: b2.length + 1 }, (_3, col) => row === 0 ? col : col === 0 ? row : 0)
    );
    for (let row = 1; row <= a2.length; row += 1) {
      for (let col = 1; col <= b2.length; col += 1) {
        const cost = a2[row - 1] === b2[col - 1] ? 0 : 1;
        matrix[row][col] = Math.min(
          matrix[row - 1][col] + 1,
          matrix[row][col - 1] + 1,
          matrix[row - 1][col - 1] + cost
        );
      }
    }
    return matrix[a2.length][b2.length];
  }, []);
  const normalizeTranscript = (0, import_react6.useCallback)((text = "") => {
    return text.replace(/\bu\s*m{2,}\b/gi, "umm").replace(/\s+/g, " ").trim();
  }, []);
  const buildSpeechHints = (0, import_react6.useCallback)((skills = [], resumeText = "") => {
    const hints = /* @__PURE__ */ new Set();
    const addHint = (value2 = "") => {
      const normalized = normalizeTranscript(value2);
      if (normalized.length >= 2) hints.add(normalized);
    };
    (Array.isArray(skills) ? skills : []).forEach((skill) => {
      addHint(skill);
      String(skill || "").split(/[\s/()-]+/).forEach(addHint);
    });
    (String(resumeText || "").match(/\b[A-Z][A-Z0-9+#.-]{1,7}\b/g) || []).forEach(addHint);
    return [...hints].filter((hint) => /^[a-z0-9 .+#-]+$/i.test(hint)).slice(0, 40);
  }, [normalizeTranscript]);
  const applySpeechCorrections = (0, import_react6.useCallback)((text = "") => {
    const normalizedText = normalizeTranscript(text);
    if (!normalizedText || speechHints.length === 0) return normalizedText;
    const shortHints = speechHints.map((hint) => normalizeTranscript(hint.toLowerCase())).filter((hint) => hint.length >= 2 && hint.length <= 8 && !hint.includes(" "));
    if (shortHints.length === 0) return normalizedText;
    return normalizedText.split(/\s+/).map((token) => {
      const cleanToken = token.replace(/[^a-z0-9+#.-]/gi, "");
      if (cleanToken.length < 2 || cleanToken.length > 8) return token;
      if (shortHints.includes(cleanToken.toLowerCase())) return token;
      let bestMatch = "";
      let bestDistance = Number.MAX_SAFE_INTEGER;
      shortHints.forEach((hint) => {
        const distance = levenshteinDistance(cleanToken, hint);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestMatch = hint;
        }
      });
      if (!bestMatch) return token;
      const maxDistance = cleanToken.length <= 4 || bestMatch.length <= 4 ? 1 : 2;
      return bestDistance <= maxDistance ? token.replace(cleanToken, bestMatch) : token;
    }).join(" ");
  }, [levenshteinDistance, normalizeTranscript, speechHints]);
  const mergeSpeechSegments = (0, import_react6.useCallback)((segments = []) => {
    return segments.reduce((merged, rawSegment) => {
      const segment = normalizeTranscript(rawSegment);
      if (!segment) return merged;
      if (!merged) return segment;
      const mergedLower = merged.toLowerCase();
      const segmentLower = segment.toLowerCase();
      if (mergedLower === segmentLower || mergedLower.endsWith(` ${segmentLower}`)) return merged;
      if (segmentLower.startsWith(mergedLower)) return segment;
      return normalizeTranscript(`${merged} ${segment}`);
    }, "");
  }, [normalizeTranscript]);
  const sanitizeResumeSkills = (0, import_react6.useCallback)((skills = [], resumeText = "") => {
    const resumeLower = String(resumeText || "").toLowerCase();
    const blocked = /* @__PURE__ */ new Set(["r", "reportlab", "pdf", "library", "resume", "document", "candidate", "student", "frontendresume", "backendresume"]);
    const normalized = (Array.isArray(skills) ? skills : []).map((skill) => String(skill || "").trim().toLowerCase()).map((skill) => {
      if (skill === "nodejs") return "node.js";
      if (skill === "nextjs") return "next.js";
      if (skill === "postgres") return "postgresql";
      return skill;
    }).filter((skill) => skill.length >= 2 && skill.length <= 35).filter((skill) => !blocked.has(skill)).filter((skill) => /^[a-z0-9 .+#-]+$/.test(skill));
    if (/\br programming\b|\br language\b|\bprogramming in r\b/i.test(resumeText)) {
      normalized.push("r programming");
    }
    return [...new Set(normalized)].filter((skill) => skill === "r programming" || resumeLower.includes(skill.split(".")[0])).slice(0, 12);
  }, []);
  const fallbackSkillsFromResume = (0, import_react6.useCallback)((resumeText = "") => {
    const lower = String(resumeText || "").toLowerCase();
    const prioritySkills = [
      "python",
      "javascript",
      "typescript",
      "java",
      "react",
      "node.js",
      "express",
      "django",
      "flask",
      "sql",
      "mysql",
      "postgresql",
      "mongodb",
      "docker",
      "aws",
      "git"
    ];
    const matched = prioritySkills.filter((skill) => lower.includes(skill));
    if (matched.length > 0) return [...new Set(matched)];
    const words = lower.match(/\b[a-z][a-z0-9+.#-]{3,}\b/g) || [];
    const stopWords = /* @__PURE__ */ new Set(["with", "from", "that", "this", "your", "have", "using", "used", "project", "experience", "resume", "document", "frontendresume", "backendresume"]);
    const unique = [...new Set(words.filter((w2) => !stopWords.has(w2)))];
    return unique.slice(0, 8);
  }, []);
  const bumpProctoringCount = (0, import_react6.useCallback)((type) => {
    if (type === "multiple_faces") {
      setProctoringCounts((prev) => ({ ...prev, multipleFaces: prev.multipleFaces + 1 }));
      return;
    }
    if (type === "no_face") {
      setProctoringCounts((prev) => ({ ...prev, noFace: prev.noFace + 1 }));
      return;
    }
    if (type === "phone_detected" || type === "looking_down") {
      setProctoringCounts((prev) => ({ ...prev, phoneDetected: prev.phoneDetected + 1 }));
      return;
    }
    if (type === "object_detected") {
      setProctoringCounts((prev) => ({ ...prev, objectDetected: prev.objectDetected + 1 }));
      return;
    }
    if (type === "tab_switch") {
      setProctoringCounts((prev) => ({ ...prev, tabSwitch: prev.tabSwitch + 1 }));
      return;
    }
    if (type === "response_timeout") {
      setProctoringCounts((prev) => ({ ...prev, responseTimeout: prev.responseTimeout + 1 }));
      return;
    }
    if (type === "voice_detected") {
      setProctoringCounts((prev) => ({ ...prev, voiceDetected: prev.voiceDetected + 1 }));
    }
  }, []);
  const handleProctoringViolation = (0, import_react6.useCallback)((violation) => {
    if (!violation) return;
    const event = {
      type: violation.type || "unknown",
      severity: violation.severity || "medium",
      message: violation.message || "AI interview proctoring event recorded.",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    violationEventsRef.current = [...violationEventsRef.current, event].slice(-200);
    bumpProctoringCount(violation.type);
    if (violationTimeoutRef.current) {
      clearTimeout(violationTimeoutRef.current);
    }
    setCurrentViolation(violation);
    violationTimeoutRef.current = window.setTimeout(() => {
      setCurrentViolation(null);
      violationTimeoutRef.current = null;
    }, violation?.severity === "high" ? 5200 : 3800);
    if (socketRef.current?.connected) {
      socketRef.current.emit("proctoring:ai-violation", {
        studentId: proctoringMeta.studentId,
        testId: proctoringMeta.testId,
        violation: event,
        timestamp: Date.now()
      });
    }
  }, [bumpProctoringCount, proctoringMeta.studentId, proctoringMeta.testId]);
  const { startDetection, stopDetection } = useAICheatingDetection(handleProctoringViolation);
  const ensureCameraAndMic = (0, import_react6.useCallback)(async () => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks?.() || [];
      const audioTracks = streamRef.current.getAudioTracks?.() || [];
      const hasLiveVideo = videoTracks.some((t2) => t2.readyState === "live" && t2.enabled);
      const hasLiveAudio = audioTracks.some((t2) => t2.readyState === "live" && t2.enabled);
      if (hasLiveVideo && hasLiveAudio) return true;
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    try {
      setProctoringError("");
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
        audio: { echoCancellation: true, noiseSuppression: false, autoGainControl: false }
      });
      const videoTracks = mediaStream.getVideoTracks();
      const audioTracks = mediaStream.getAudioTracks();
      if (!videoTracks.length || !audioTracks.length) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setProctoringError("Camera and microphone are mandatory to start AI interview.");
        return false;
      }
      streamRef.current = mediaStream;
      setIsCameraReady(true);
      if (proctoringVideoRef.current) {
        proctoringVideoRef.current.srcObject = mediaStream;
        try {
          await proctoringVideoRef.current.play();
        } catch {
        }
      }
      if (previewVideoRef.current) {
        previewVideoRef.current.srcObject = mediaStream;
        try {
          await previewVideoRef.current.play();
        } catch {
        }
      }
      if (!socketRef.current) {
        socketRef.current = lookup2(API_URL, { transports: ["polling"], reconnection: true, timeout: 2e4 });
        socketRef.current.on("connect", () => {
          socketRef.current.emit("student:join-proctoring", proctoringMeta);
        });
        socketRef.current.on("proctoring:message-received", (messageData) => {
          setAdminProctorMessage({
            id: messageData?.id || Date.now(),
            text: String(messageData?.message || "Admin sent a proctoring message."),
            type: messageData?.messageType || "warning",
            priority: messageData?.priority || "medium"
          });
          if (adminMessageTimeoutRef.current) clearTimeout(adminMessageTimeoutRef.current);
          adminMessageTimeoutRef.current = window.setTimeout(() => {
            setAdminProctorMessage(null);
            adminMessageTimeoutRef.current = null;
          }, 12e3);
        });
      }
      return true;
    } catch (error) {
      console.error("Camera/microphone permission error:", error);
      setProctoringError("Please allow camera and microphone access to continue with AI interview.");
      setIsCameraReady(false);
      return false;
    }
  }, [proctoringMeta]);
  const startFrameRelay = (0, import_react6.useCallback)(() => {
    if (!proctoringVideoRef.current || !socketRef.current?.connected || frameIntervalRef.current) return;
    if (!frameCanvasRef.current) {
      frameCanvasRef.current = document.createElement("canvas");
      frameCanvasRef.current.width = 640;
      frameCanvasRef.current.height = 480;
    }
    const ctx = frameCanvasRef.current.getContext("2d");
    frameIntervalRef.current = setInterval(() => {
      const video = proctoringVideoRef.current;
      if (!video || video.readyState < 2 || !socketRef.current?.connected) return;
      try {
        ctx.drawImage(video, 0, 0, 640, 480);
        const frame = frameCanvasRef.current.toDataURL("image/jpeg", 0.6);
        socketRef.current.emit("proctoring:frame", {
          ...proctoringMeta,
          frame,
          timestamp: Date.now(),
          aiViolations: proctoringCountsRef.current
        });
      } catch (error) {
        console.error("Frame relay error:", error);
      }
    }, 1500);
  }, [proctoringMeta]);
  const startAudioMonitoring = (0, import_react6.useCallback)(async () => {
    if (!streamRef.current || audioMonitorIntervalRef.current) return;
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === "suspended") {
        await audioContext.resume().catch(() => {
        });
      }
      const source = audioContext.createMediaStreamSource(streamRef.current);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.82;
      source.connect(analyser);
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      const timeData = new Uint8Array(analyser.fftSize);
      const frequencyData = new Uint8Array(analyser.frequencyBinCount);
      const speechBandStart = Math.max(1, Math.floor(85 / (audioContext.sampleRate / analyser.fftSize)));
      const speechBandEnd = Math.min(
        analyser.frequencyBinCount - 1,
        Math.floor(2550 / (audioContext.sampleRate / analyser.fftSize))
      );
      audioMonitorIntervalRef.current = setInterval(() => {
        if (!analyserRef.current) return;
        if (audioContextRef.current?.state === "suspended") {
          audioContextRef.current.resume().catch(() => {
          });
        }
        if (isSendingRef.current || isSpeakingRef.current || window.speechSynthesis?.speaking || Date.now() < suppressAudioUntilRef.current) {
          noiseBurstRef.current = { startedAt: 0, lastSeenAt: 0 };
          return;
        }
        const now = Date.now();
        const recentRecognizedSpeech = recognitionRunningRef.current && now - Number(lastSpeechResultRef.current?.at || 0) < 1200;
        if (recentRecognizedSpeech) {
          noiseBurstRef.current = { startedAt: 0, lastSeenAt: 0 };
          return;
        }
        analyserRef.current.getByteTimeDomainData(timeData);
        analyserRef.current.getByteFrequencyData(frequencyData);
        const rms = Math.sqrt(
          timeData.reduce((sum, sample) => {
            const normalized = (sample - 128) / 128;
            return sum + normalized * normalized;
          }, 0) / timeData.length
        );
        const speechBand = frequencyData.slice(speechBandStart, speechBandEnd);
        const speechEnergy = speechBand.length ? speechBand.reduce((sum, value2) => sum + value2, 0) / speechBand.length : 0;
        ambientNoiseRef.current = ambientNoiseRef.current ? ambientNoiseRef.current * 0.94 + rms * 0.06 : rms;
        ambientVoiceEnergyRef.current = ambientVoiceEnergyRef.current ? ambientVoiceEnergyRef.current * 0.92 + speechEnergy * 0.08 : speechEnergy;
        const dynamicThreshold = Math.max(0.016, ambientNoiseRef.current + 0.012);
        const speechThreshold = Math.max(22, ambientVoiceEnergyRef.current + 14);
        const isSpeechLikeAudio = speechEnergy >= speechThreshold && rms >= dynamicThreshold * 0.8;
        const isLoudBurst = rms >= Math.max(dynamicThreshold * 1.65, 0.03);
        if (isSpeechLikeAudio || isLoudBurst) {
          if (!noiseBurstRef.current.startedAt) {
            noiseBurstRef.current.startedAt = now;
          }
          noiseBurstRef.current.lastSeenAt = now;
        } else if (noiseBurstRef.current.lastSeenAt && now - noiseBurstRef.current.lastSeenAt > 250) {
          noiseBurstRef.current = { startedAt: 0, lastSeenAt: 0 };
        }
        if (noiseBurstRef.current.startedAt && now - noiseBurstRef.current.startedAt >= (isLoudBurst ? 420 : 650) && now - voiceCooldownRef.current > 1800) {
          voiceCooldownRef.current = now;
          noiseBurstRef.current = { startedAt: 0, lastSeenAt: 0 };
          handleProctoringViolation({
            type: "voice_detected",
            severity: "medium",
            message: "Sustained extra voice or noise detected. Please continue in a quiet environment."
          });
        }
      }, 220);
    } catch (error) {
      console.error("Audio monitor error:", error);
    }
  }, [handleProctoringViolation]);
  const stopProctoring = (0, import_react6.useCallback)((stopStream = false) => {
    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
      frameIntervalRef.current = null;
    }
    if (audioMonitorIntervalRef.current) {
      clearInterval(audioMonitorIntervalRef.current);
      audioMonitorIntervalRef.current = null;
    }
    stopDetection();
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {
      });
      audioContextRef.current = null;
      analyserRef.current = null;
    }
    ambientNoiseRef.current = 0;
    ambientVoiceEnergyRef.current = 0;
    noiseBurstRef.current = { startedAt: 0, lastSeenAt: 0 };
    if (socketRef.current) {
      socketRef.current.emit("student:leave-proctoring", proctoringMeta);
      socketRef.current.off("proctoring:message-received");
      socketRef.current.disconnect();
      socketRef.current = null;
    }
    if (stopStream && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setIsCameraReady(false);
    }
  }, [proctoringMeta, stopDetection]);
  const armAnswerWindow = (0, import_react6.useCallback)((phase = "primary") => {
    answerWindowPhaseRef.current = phase;
    setTimeLeft(phase === "grace" ? ANSWER_GRACE_SECONDS : ANSWER_WINDOW_SECONDS);
    setTimerActive(true);
  }, []);
  (0, import_react6.useEffect)(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const finalSegments = [];
        const interimSegments = [];
        for (let i2 = 0; i2 < event.results.length; i2 += 1) {
          const transcript2 = normalizeTranscript(event.results[i2]?.[0]?.transcript || "");
          if (!transcript2) continue;
          if (event.results[i2].isFinal) finalSegments.push(transcript2);
          else if (i2 >= event.resultIndex) interimSegments.push(transcript2);
        }
        const transcript = applySpeechCorrections(mergeSpeechSegments([...finalSegments, ...interimSegments]));
        if (transcript) {
          const now = Date.now();
          if (lastSpeechResultRef.current.text === transcript && now - lastSpeechResultRef.current.at < 400) {
            return;
          }
          lastSpeechResultRef.current = { text: transcript, at: now };
          const baseInput = normalizeTranscript(speechBaseInputRef.current || "");
          const combined = baseInput ? normalizeTranscript(`${baseInput} ${transcript}`) : transcript;
          latestTranscriptRef.current = combined;
          setUserInput(combined);
        }
        suppressAudioUntilRef.current = Date.now() + 2500;
      };
      recognition.onerror = (event) => {
        if (event.error === "phrases-not-supported") {
          speechPhraseSupportRef.current = false;
          try {
            if ("phrases" in recognition) recognition.phrases = [];
          } catch {
          }
          speechPhraseWarningShownRef.current = true;
          recognitionRunningRef.current = false;
          if (keepListeningRef.current) {
            window.setTimeout(() => {
              try {
                if (keepListeningRef.current && !recognitionRunningRef.current) {
                  recognition.start();
                }
              } catch {
                setIsListening(false);
                keepListeningRef.current = false;
              }
            }, 200);
          }
          return;
        }
        if (event.error !== "aborted" && event.error !== "no-speech") {
          console.error("Speech recognition error", event.error);
        }
        recognitionRunningRef.current = false;
        if (!keepListeningRef.current) setIsListening(false);
      };
      recognition.onend = () => {
        recognitionRunningRef.current = false;
        suppressAudioUntilRef.current = Date.now() + 2500;
        if (keepListeningRef.current && !isSendingRef.current) {
          window.setTimeout(() => {
            try {
              if (keepListeningRef.current && !recognitionRunningRef.current) {
                recognition.start();
              }
            } catch {
              setIsListening(false);
              keepListeningRef.current = false;
            }
          }, 180);
          return;
        }
        setIsListening(false);
        if (autoSubmitOnStopRef.current) {
          autoSubmitOnStopRef.current = false;
          const textToSubmit = normalizeTranscript(latestTranscriptRef.current || userInputRef.current || "");
          if (textToSubmit) {
            window.setTimeout(() => sendAnswerRef.current?.(textToSubmit), 60);
          }
        }
      };
      recognition.onstart = () => {
        recognitionRunningRef.current = true;
        lastSpeechResultRef.current = { text: "", at: 0 };
        suppressAudioUntilRef.current = Date.now() + 2500;
      };
      recognitionRef.current = recognition;
    }
  }, [applySpeechCorrections, mergeSpeechSegments, normalizeTranscript]);
  (0, import_react6.useEffect)(() => {
    if (!recognitionRef.current || speechHints.length === 0) return;
    const recognition = recognitionRef.current;
    if (speechPhraseSupportRef.current && "phrases" in recognition) {
      try {
        const SpeechRecognitionPhrase = window.SpeechRecognitionPhrase || window.webkitSpeechRecognitionPhrase;
        if (SpeechRecognitionPhrase) {
          const phrases = speechHints.map((value2) => String(value2 || "").trim()).filter(Boolean).map((value2) => new SpeechRecognitionPhrase(value2, 8));
          if (phrases.length > 0) {
            recognition.phrases = phrases;
          }
        }
      } catch (error) {
        console.warn("Speech phrase hints not applied:", error);
      }
    }
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    if (!SpeechGrammarList) return;
    try {
      const grammarTerms = speechHints.map((hint) => hint.replace(/[;=|<>]/g, " ").trim()).filter(Boolean).join(" | ");
      if (!grammarTerms) return;
      const grammarList = new SpeechGrammarList();
      grammarList.addFromString(`#JSGF V1.0; grammar resumeTerms; public <term> = ${grammarTerms} ;`, 1);
      recognition.grammars = grammarList;
    } catch (error) {
      console.warn("Speech grammar hints not applied:", error);
    }
  }, [speechHints]);
  const toggleListening = () => {
    if (isListening) {
      keepListeningRef.current = false;
      autoSubmitOnStopRef.current = true;
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        if (recognitionRunningRef.current) return;
        window.speechSynthesis?.cancel();
        setTimerActive(false);
        keepListeningRef.current = true;
        autoSubmitOnStopRef.current = false;
        speechBaseInputRef.current = normalizeTranscript(userInput || "");
        latestTranscriptRef.current = normalizeTranscript(userInput || "");
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e2) {
        keepListeningRef.current = false;
        if (String(e2?.name || "").toLowerCase() !== "invalidstateerror") {
          console.error("Could not start speech recognition:", e2);
        }
      }
    }
  };
  const speakText = (text) => {
    if (!isTTSActive || !window.speechSynthesis || document.hidden) return;
    if (isListeningRef.current || recognitionRunningRef.current) {
      if (!keepListeningRef.current) {
        if (speakRetryTimeoutRef.current) clearTimeout(speakRetryTimeoutRef.current);
        speakRetryTimeoutRef.current = window.setTimeout(() => {
          speakRetryTimeoutRef.current = null;
          speakText(text);
        }, 220);
      }
      return;
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume?.();
    isSpeakingRef.current = true;
    suppressAudioUntilRef.current = Date.now() + Math.min(12e3, Math.max(3500, text.length * 70));
    setTimerActive(false);
    setTimeLeft(ANSWER_WINDOW_SECONDS);
    answerWindowPhaseRef.current = "primary";
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find((v2) => v2.lang.includes("en-US")) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;
    utterance.rate = 1.03;
    utterance.onend = () => {
      isSpeakingRef.current = false;
      suppressAudioUntilRef.current = Date.now() + 1800;
      if (!isListeningRef.current && !recognitionRunningRef.current) {
        armAnswerWindow("primary");
      }
    };
    utterance.onerror = () => {
      isSpeakingRef.current = false;
      suppressAudioUntilRef.current = Date.now() + 1800;
    };
    window.speechSynthesis.speak(utterance);
  };
  (0, import_react6.useEffect)(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1e3);
    } else if (timeLeft === 0 && !isSending) {
      clearInterval(timerRef.current);
      setTimerActive(false);
      if (answerWindowPhaseRef.current === "primary") {
        answerWindowPhaseRef.current = "grace";
        setSilenceCount((prev) => prev + 1);
        setChatError("No answer detected yet. Final 6 seconds remaining for this question.");
        setTimeLeft(ANSWER_GRACE_SECONDS);
        setTimerActive(true);
        return () => clearInterval(timerRef.current);
      }
      handleProctoringViolation({ type: "response_timeout", severity: "low", message: "No response detected within the answer window." });
      setChatError("Response timeout recorded. Tap the mic to continue answering.");
      setSilenceCount(0);
      setTimeLeft(ANSWER_GRACE_SECONDS);
      setTimerActive(true);
      return () => clearInterval(timerRef.current);
      const newCount = silenceCount + 1;
      setSilenceCount(newCount);
      if (newCount < 2) {
        const lastAiMsg = [...messages].reverse().find((m2) => m2.role === "ai" && !m2.hidden);
        if (lastAiMsg && isTTSActive) {
          speakText(lastAiMsg.content);
        } else {
          setTimeLeft(6);
          setTimerActive(true);
        }
      } else {
        setSilenceCount(0);
        handleProctoringViolation({ type: "response_timeout", severity: "low", message: "No response detected within the answer window." });
        setTimeLeft(6);
        setTimerActive(true);
      }
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive, timeLeft, isSending, handleProctoringViolation]);
  (0, import_react6.useEffect)(() => {
    let interval = null;
    if (step === "interview" && sessionTimeLeft > 0) {
      interval = setInterval(() => {
        setSessionTimeLeft((prev) => prev - 1);
      }, 1e3);
    } else if (sessionTimeLeft === 0) {
      clearInterval(interval);
      setTimerActive(false);
      saveInterviewResult();
      alert("Interview duration (20 minutes) completed. Your interview is being saved.");
    }
    return () => clearInterval(interval);
  }, [step, sessionTimeLeft]);
  (0, import_react6.useEffect)(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.speechSynthesis?.cancel();
        setTimerActive(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  (0, import_react6.useEffect)(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleFileChange = (e2) => {
    const file = e2.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setUploadError("Only PDF files are accepted.");
        setResumeFile(null);
      } else if (file.size > 10 * 1024 * 1024) {
        setUploadError("File size must be less than 10MB.");
        setResumeFile(null);
      } else {
        setUploadError("");
        setResumeFile(file);
      }
    }
  };
  const handleUploadResume = async () => {
    if (!resumeFile) {
      setUploadError("Please select a PDF resume first.");
      return;
    }
    const fullscreenResult = await enterFullscreen();
    if (fullscreenResult) {
      setShowWarning(false);
    }
    const canStart = await ensureCameraAndMic();
    if (!canStart) return;
    setIsUploading(true);
    setUploadError("");
    const formData = new FormData();
    formData.append("resume", resumeFile);
    try {
      const response = await fetch(`${API_URL}/api/ai-interview/upload-resume`, {
        method: "POST",
        body: formData
      });
      const data2 = await response.json();
      if (data2.success) {
        setOllamaHistory([
          { role: "system", content: data2.systemPrompt },
          { role: "assistant", content: data2.message }
        ]);
        resumeTextRef.current = data2.resumeText || "";
        const cleanResumeSkills = sanitizeResumeSkills(data2.resumeSkills, data2.resumeText || "");
        const ensuredSkills = cleanResumeSkills.length > 0 ? cleanResumeSkills : fallbackSkillsFromResume(data2.resumeText || "");
        const shuffled = [...ensuredSkills].sort(() => Math.random() - 0.5);
        resumeSkillsRef.current = shuffled;
        usedSkillsRef.current = /* @__PURE__ */ new Set();
        askedQuestionsRef.current = [];
        setSpeechHints(buildSpeechHints(ensuredSkills, data2.resumeText || ""));
        console.log("Resume skills (shuffled):", shuffled);
        setMessages([
          {
            role: "ai",
            content: data2.message,
            timestamp: /* @__PURE__ */ new Date()
          }
        ]);
        setSessionTimeLeft(20 * 60);
        setQuestionCount(0);
        setAssessmentResult(null);
        setStep("interview");
        if (isTTSActive) {
          speakText(data2.message);
        }
      } else {
        setUploadError(data2.message || "Failed to process resume. Please try again.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setUploadError("Connection error. Make sure backend is running and try again.");
    } finally {
      setIsUploading(false);
    }
  };
  const saveInterviewResult = async (historyOverride = null) => {
    if (isSubmittingFeedback || isSavingInterviewRef.current) return;
    isSavingInterviewRef.current = true;
    setIsSubmittingFeedback(true);
    setTimerActive(false);
    answerWindowPhaseRef.current = "primary";
    window.speechSynthesis?.cancel();
    stopProctoring(true);
    try {
      const chatHistory = (historyOverride || messages.filter((m2) => !m2.hidden)).map((m2) => ({ role: m2.role, content: m2.content }));
      const response = await fetch(`${API_URL}/api/ai-interview/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          studentName,
          resumeText: resumeTextRef.current,
          chatHistory,
          proctoringCounts: proctoringCountsRef.current,
          proctoringEvents: violationEventsRef.current
        })
      });
      const data2 = await response.json();
      if (data2.success) {
        setAssessmentResult(data2.assessment || null);
      }
      setFeedbackSubmitted(true);
      setStep("feedback");
    } catch (e2) {
      console.error("Interview save error:", e2);
      setFeedbackSubmitted(true);
      setStep("feedback");
    } finally {
      isSavingInterviewRef.current = false;
      setIsSubmittingFeedback(false);
    }
  };
  const handleSendAnswer = async (overrideText = null, hideFromUI = false) => {
    const isEventObject = overrideText && typeof overrideText === "object" && (overrideText.type || overrideText.nativeEvent);
    const normalizedOverride = isEventObject ? null : overrideText;
    const textToSend = String(normalizedOverride || userInput || "").trim();
    if (!textToSend || isSending) return;
    if (isListening) {
      keepListeningRef.current = false;
      autoSubmitOnStopRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
    }
    const now = Date.now();
    if (lastSentRef.current.text === textToSend && now - lastSentRef.current.at < 1500) {
      return;
    }
    lastSentRef.current = { text: textToSend, at: now };
    const userMessage = {
      role: "user",
      content: textToSend,
      timestamp: /* @__PURE__ */ new Date(),
      hidden: hideFromUI
      // New flag
    };
    if (!hideFromUI) {
      setMessages((prev) => [...prev, userMessage]);
      setSilenceCount(0);
    }
    setUserInput("");
    latestTranscriptRef.current = "";
    setIsSending(true);
    setChatError("");
    setTimerActive(false);
    answerWindowPhaseRef.current = "primary";
    setTimeLeft(ANSWER_WINDOW_SECONDS);
    try {
      const technicalAskedCount = askedQuestionsRef.current.filter(isTechnicalQuestionText).length;
      if (!hideFromUI && technicalAskedCount >= MAX_INTERVIEW_QUESTIONS) {
        const finalHistory = [...messages.filter((m2) => !m2.hidden), userMessage].map((m2) => ({ role: m2.role, content: m2.content }));
        await saveInterviewResult(finalHistory);
        return;
      }
      const allSkills = resumeSkillsRef.current;
      const used = usedSkillsRef.current;
      let currentSkill = allSkills.find((s2) => !used.has(s2)) || null;
      if (!currentSkill && false) {
        const reshuffled = [...allSkills].sort(() => Math.random() - 0.5);
        resumeSkillsRef.current = reshuffled;
        usedSkillsRef.current = /* @__PURE__ */ new Set();
        currentSkill = reshuffled[0] || null;
      }
      if (currentSkill) usedSkillsRef.current.add(currentSkill);
      console.log("Asking about skill:", currentSkill || "(generic resume topic)", "| Used so far:", [...usedSkillsRef.current]);
      const response = await fetch(`${API_URL}/api/ai-interview/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: ollamaHistory,
          answer: textToSend,
          askedQuestions: askedQuestionsRef.current,
          currentSkill
          // <-- tells backend which skill to ask about
        })
      });
      const data2 = await response.json();
      if (data2.success) {
        if (data2.completed) {
          const finalHistory = [...messages.filter((m2) => !m2.hidden), userMessage].map((m2) => ({ role: m2.role, content: m2.content }));
          await saveInterviewResult(finalHistory);
          return;
        }
        setOllamaHistory(data2.updatedHistory);
        const aiMsg = {
          role: "ai",
          content: data2.message,
          timestamp: /* @__PURE__ */ new Date()
        };
        setMessages((prev) => [...prev, aiMsg]);
        askedQuestionsRef.current.push(data2.message);
        if (!hideFromUI) {
          setQuestionCount(askedQuestionsRef.current.filter(isTechnicalQuestionText).length);
        }
        if (isTTSActive) {
          speakText(data2.message);
        }
      } else {
        setChatError(data2.message || "Failed to get AI response. Please try again.");
      }
    } catch (err) {
      console.error("Chat error:", err);
      setChatError("Connection error. Please check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  };
  (0, import_react6.useEffect)(() => {
    sendAnswerRef.current = handleSendAnswer;
  });
  const handleSubmitFeedback = () => {
    saveInterviewResult();
  };
  const handleRestartInterview = () => {
    stopProctoring(false);
    setStep("upload");
    setResumeFile(null);
    setOllamaHistory([]);
    setMessages([]);
    setUserInput("");
    setUploadError("");
    setChatError("");
    setIsListening(false);
    keepListeningRef.current = false;
    autoSubmitOnStopRef.current = false;
    latestTranscriptRef.current = "";
    answerWindowPhaseRef.current = "primary";
    isSavingInterviewRef.current = false;
    ambientNoiseRef.current = 0;
    ambientVoiceEnergyRef.current = 0;
    noiseBurstRef.current = { startedAt: 0, lastSeenAt: 0 };
    setCurrentViolation(null);
    setAdminProctorMessage(null);
    setSpeechHints([]);
    setQuestionCount(0);
    setAssessmentResult(null);
    setFeedbackSubmitted(false);
    setFeedbackComment("");
    setTimeLeft(ANSWER_WINDOW_SECONDS);
    askedQuestionsRef.current = [];
    setProctoringCounts({
      multipleFaces: 0,
      noFace: 0,
      phoneDetected: 0,
      objectDetected: 0,
      voiceDetected: 0,
      tabSwitch: 0,
      responseTimeout: 0
    });
    violationEventsRef.current = [];
    window.speechSynthesis?.cancel();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  (0, import_react6.useEffect)(() => {
    const setupInterviewProctoring = async () => {
      if (step !== "interview" || !isCameraReady || !proctoringVideoRef.current) return;
      await startDetection(proctoringVideoRef.current);
      startFrameRelay();
      window.setTimeout(() => startFrameRelay(), 1200);
      await startAudioMonitoring();
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!fullscreenElement) {
        setShowWarning(true);
      }
    };
    setupInterviewProctoring();
    if (step !== "interview") {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
      }
      if (audioMonitorIntervalRef.current) {
        clearInterval(audioMonitorIntervalRef.current);
        audioMonitorIntervalRef.current = null;
      }
      stopDetection();
      setShowWarning(false);
    }
  }, [step, isCameraReady, startDetection, stopDetection, startFrameRelay, startAudioMonitoring, setShowWarning]);
  (0, import_react6.useEffect)(() => {
    if (step !== "interview") return;
    const recordTabViolation = (message = "Tab/window focus change detected. Please stay on the interview window.") => {
      const now = Date.now();
      if (now - lastTabViolationRef.current < 3500) return;
      lastTabViolationRef.current = now;
      handleProctoringViolation({
        type: "tab_switch",
        severity: "medium",
        message
      });
    };
    const handleVisibilityChange = () => {
      if (!document.hidden) return;
      recordTabViolation("Tab switch detected. Please stay on the interview window.");
    };
    const handleWindowBlur = () => recordTabViolation("Interview window lost focus.");
    const handlePageHide = () => recordTabViolation("Interview page was hidden or minimized.");
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!fullscreenElement) recordTabViolation("Fullscreen was exited during the AI interview.");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("pagehide", handlePageHide);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("pagehide", handlePageHide);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, [step, handleProctoringViolation]);
  (0, import_react6.useEffect)(() => {
    return () => {
      if (violationTimeoutRef.current) clearTimeout(violationTimeoutRef.current);
      if (adminMessageTimeoutRef.current) clearTimeout(adminMessageTimeoutRef.current);
      if (speakRetryTimeoutRef.current) clearTimeout(speakRetryTimeoutRef.current);
      stopProctoring(true);
    };
  }, [stopProctoring]);
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-theme-page text-theme-text flex flex-col" }, /* @__PURE__ */ React.createElement("header", { className: "bg-shnoor-navy shadow-sm h-auto sm:h-[72px] flex items-center sticky top-0 z-10 w-full py-3 sm:py-0" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => navigate("/dashboard"),
      className: "flex items-center space-x-2 text-white/70 hover:text-white transition-colors mr-2"
    },
    /* @__PURE__ */ React.createElement(ChevronLeft, { size: 20 }),
    /* @__PURE__ */ React.createElement("span", { className: "text-sm hidden sm:inline" }, "Dashboard")
  ), /* @__PURE__ */ React.createElement("div", { className: "site-header-logo w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0" }, /* @__PURE__ */ React.createElement("img", { src: shnoor_logo_default, alt: "Shnoor Logo", className: "w-full h-full object-contain" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-white font-bold text-base sm:text-lg leading-tight" }, "AI Interview"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-white hidden sm:block" }, studentName), step === "interview" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        saveInterviewResult();
      },
      className: "flex items-center space-x-2 px-3 sm:px-4 py-2 text-white bg-red-500/80 hover:bg-red-500 border border-red-400 rounded-lg transition-colors text-xs sm:text-sm font-bold shadow-sm"
    },
    /* @__PURE__ */ React.createElement(CircleCheckBig, { size: 14 }),
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:inline" }, "Finish")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleRestartInterview,
      className: "flex items-center space-x-2 px-3 py-2 text-white bg-transparent border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-xs sm:text-sm font-medium"
    },
    /* @__PURE__ */ React.createElement(RefreshCw, { size: 14 }),
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:inline" }, "Restart")
  )), /* @__PURE__ */ React.createElement(ThemeSelector_default, { variant: "dark" }))))), /* @__PURE__ */ React.createElement("main", { className: "flex-1 w-full max-w-[1500px] mx-auto px-3 sm:px-5 lg:px-6 py-6 flex flex-col" }, /* @__PURE__ */ React.createElement("video", { ref: proctoringVideoRef, autoPlay: true, muted: true, playsInline: true, className: "absolute w-px h-px opacity-0 pointer-events-none" }), step === "interview" && showWarning && /* @__PURE__ */ React.createElement(FullscreenWarning_default, { onEnterFullscreen: enterFullscreen }), currentViolation && /* @__PURE__ */ React.createElement(AIViolationAlert_default, { violation: currentViolation, onDismiss: () => setCurrentViolation(null) }), adminProctorMessage && /* @__PURE__ */ React.createElement("div", { className: "mb-4 rounded-xl border border-shnoor-warning/40 bg-shnoor-warningLight px-4 py-3 flex items-start justify-between gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold uppercase tracking-wide text-shnoor-navy" }, "Admin Message"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-shnoor-navy mt-1" }, adminProctorMessage.text)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setAdminProctorMessage(null),
      className: "text-xs px-2.5 py-1.5 rounded-md bg-shnoor-indigo text-white hover:bg-[#4d4d9c] transition-colors"
    },
    "Close"
  )), step === "upload" && /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-6xl mx-auto flex flex-col gap-6 items-stretch flex-1 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "bg-shnoor-lavender border-2 border-shnoor-mist rounded-xl p-5 sm:p-6 w-full text-center flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0 sm:justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-14 h-14 sm:w-16 sm:h-16 bg-shnoor-indigo rounded-full flex items-center justify-center flex-shrink-0 sm:mx-auto sm:mb-4" }, /* @__PURE__ */ React.createElement(Bot, { size: 28, className: "sm:w-8 sm:h-8 text-white" })), /* @__PURE__ */ React.createElement("div", { className: "text-left sm:text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg sm:text-2xl font-bold text-shnoor-navy mb-1 sm:mb-2" }, "AI Interview"), /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-indigoMedium text-xs sm:text-sm leading-relaxed max-w-md mx-auto" }, "Upload your resume and our AI interviewer will ask you personalized questions based on your skills and experience."))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-6 flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "bg-theme-card border-2 border-theme-border rounded-xl p-6 w-full shadow-[0_8px_30px_rgba(14,14,39,0.06)]" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-shnoor-navy mb-4" }, "Upload Your Resume"), /* @__PURE__ */ React.createElement("div", { className: "mb-4 w-full max-w-md mx-auto border border-theme-border rounded-xl p-3 bg-theme-panel/60" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3 mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(Camera, { size: 16, className: isCameraReady ? "text-shnoor-success" : "text-shnoor-indigo" }), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold text-shnoor-navy" }, isCameraReady ? "Camera and mic are enabled" : "Enable camera and mic to start interview")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: ensureCameraAndMic,
      className: "px-3 py-1.5 text-xs rounded-lg bg-shnoor-indigo text-white hover:bg-[#4d4d9c] transition-colors"
    },
    isCameraReady ? "Re-check" : "Enable"
  )), /* @__PURE__ */ React.createElement("video", { ref: previewVideoRef, autoPlay: true, muted: true, playsInline: true, className: "w-full h-64 object-cover rounded-lg bg-black" })), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${resumeFile ? "border-shnoor-success bg-shnoor-successLight" : "border-shnoor-mist hover:border-shnoor-indigo hover:bg-shnoor-lavender/30"}`,
      onClick: () => fileInputRef.current?.click()
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: ".pdf",
        onChange: handleFileChange,
        className: "hidden"
      }
    ),
    resumeFile ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FileText, { size: 40, className: "mx-auto text-shnoor-success mb-3" }), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-shnoor-navy" }, resumeFile.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium mt-1" }, (resumeFile.size / 1024).toFixed(1), " KB \u2022 Click to change")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Upload, { size: 40, className: "mx-auto text-shnoor-mist mb-3" }), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-shnoor-navy" }, "Click to upload PDF"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium mt-1" }, "Maximum file size: 10MB"))
  ), uploadError && /* @__PURE__ */ React.createElement("div", { className: "mt-3 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm" }, uploadError), proctoringError && /* @__PURE__ */ React.createElement("div", { className: "mt-3 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm" }, proctoringError), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleUploadResume,
      disabled: !resumeFile || isUploading || !isCameraReady,
      className: `mt-4 w-full py-3 px-4 font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center space-x-2 ${!resumeFile || isUploading || !isCameraReady ? "bg-shnoor-mist/50 text-shnoor-navy cursor-not-allowed" : "bg-shnoor-indigo hover:bg-[#4d4d9c] text-white"}`
    },
    isUploading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LoaderCircle, { size: 18, className: "animate-spin" }), /* @__PURE__ */ React.createElement("span", null, "Analyzing Resume...")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Bot, { size: 18 }), /* @__PURE__ */ React.createElement("span", null, "Start AI Interview"))
  )), /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-shnoor-mist rounded-xl p-5 w-full" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-shnoor-navy mb-3 text-sm" }, "Interview requirements"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-2 text-xs text-shnoor-indigoMedium" }, /* @__PURE__ */ React.createElement("li", { className: "flex items-start space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-shnoor-indigo font-bold" }, "\u2022"), /* @__PURE__ */ React.createElement("span", null, "Upload a clear, text-based PDF resume (not scanned image)")), /* @__PURE__ */ React.createElement("li", { className: "flex items-start space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-shnoor-indigo font-bold" }, "\u2022"), /* @__PURE__ */ React.createElement("span", null, "Answer questions in detail as you would in a real interview")), /* @__PURE__ */ React.createElement("li", { className: "flex items-start space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-shnoor-indigo font-bold" }, "\u2022"), /* @__PURE__ */ React.createElement("span", null, "AI will ask questions based on your skills and experience")))))), step === "interview" && /* @__PURE__ */ React.createElement("div", { className: "flex flex-col flex-1 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(30,30,80,0.12)] overflow-hidden min-h-[calc(100vh-200px)] relative" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 py-2 bg-shnoor-warningLight border-b border-shnoor-warning/40 text-xs text-shnoor-navy font-medium flex items-center justify-between gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(ShieldAlert, { size: 14 }), " Proctoring active: camera and microphone enabled."), /* @__PURE__ */ React.createElement("span", null, "Faces: ", proctoringCounts.multipleFaces, " | No face: ", proctoringCounts.noFace, " | Phone: ", proctoringCounts.phoneDetected, " | Object: ", proctoringCounts.objectDetected, " | Voice: ", proctoringCounts.voiceDetected, " | Tab: ", proctoringCounts.tabSwitch, " | Timeout: ", proctoringCounts.responseTimeout)), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-shnoor-navy via-shnoor-indigo to-shnoor-indigoMedium px-6 py-4 flex items-center space-x-3 shadow-md relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" }), /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 bg-white/10 backdrop-blur-sm shadow-inner rounded-full flex items-center justify-center border border-white/20" }, /* @__PURE__ */ React.createElement(Bot, { size: 20, className: "text-white" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-white font-bold" }, "AI Interviewer"), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-3 items-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-white/70 text-[10px] font-bold uppercase tracking-wider" }, "Total Time: ", formatTime(sessionTimeLeft)), /* @__PURE__ */ React.createElement("p", { className: "text-white/70 text-[10px] font-bold uppercase tracking-wider" }, "Q: ", Math.min(questionCount, MAX_INTERVIEW_QUESTIONS), "/", MAX_INTERVIEW_QUESTIONS), /* @__PURE__ */ React.createElement("p", { className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${timeLeft <= 5 ? "bg-red-500 text-white animate-pulse" : "bg-white/20 text-white"}` }, "Ans: ", timeLeft, "s"))), /* @__PURE__ */ React.createElement("div", { className: "ml-auto flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border bg-white text-shnoor-indigo border-white shadow-lg font-bold text-xs" }, /* @__PURE__ */ React.createElement(Mic, { size: 14, className: isListening ? "animate-pulse" : "" }), /* @__PURE__ */ React.createElement("span", null, "Voice Only")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        if (isTTSActive) window.speechSynthesis?.cancel();
        setIsTTSActive(!isTTSActive);
      },
      className: "text-white/80 hover:text-white transition-colors flex items-center space-x-1 border border-white/20 px-2 py-1 rounded bg-white/5",
      title: isTTSActive ? "Mute Voice" : "Enable Voice"
    },
    isTTSActive ? /* @__PURE__ */ React.createElement(Volume2, { size: 16 }) : /* @__PURE__ */ React.createElement(VolumeX, { size: 16 }),
    /* @__PURE__ */ React.createElement("span", { className: "text-xs hidden sm:inline text-white/70" }, isTTSActive ? "On" : "Off")
  ), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }), /* @__PURE__ */ React.createElement("span", { className: "text-white/70 text-xs font-medium" }, "Live")))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-4" }, messages.filter((m2) => !m2.hidden && !(isVoiceMode && m2.role === "user")).map((msg, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: index,
      className: `flex items-start space-x-3 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "ai" ? "bg-shnoor-indigo" : "bg-shnoor-success"}`
      },
      msg.role === "ai" ? /* @__PURE__ */ React.createElement(Bot, { size: 16, className: "text-white" }) : /* @__PURE__ */ React.createElement(User, { size: 16, className: "text-white" })
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `max-w-[80%] px-5 py-3.5 rounded-2xl text-[15px] font-medium leading-relaxed shadow-sm border ${msg.role === "ai" ? "bg-gradient-to-b from-shnoor-mist/50 to-shnoor-lavender/50 text-shnoor-navy rounded-tl-none border-shnoor-mist" : "bg-gradient-to-br from-shnoor-indigo to-[#4A4AA4] text-white rounded-tr-none border-shnoor-indigo relative overflow-hidden"}`
      },
      msg.role !== "ai" && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] opacity-50 pointer-events-none" }),
      msg.content
    )
  )), false, isSending && /* @__PURE__ */ React.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 rounded-full bg-shnoor-indigo flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ React.createElement(Bot, { size: 16, className: "text-white" })), /* @__PURE__ */ React.createElement("div", { className: "bg-shnoor-lavender px-4 py-3 rounded-2xl rounded-tl-none flex space-x-1 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-shnoor-indigo/50 rounded-full animate-bounce", style: { animationDelay: "0ms" } }), /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-shnoor-indigo/50 rounded-full animate-bounce", style: { animationDelay: "150ms" } }), /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-shnoor-indigo/50 rounded-full animate-bounce", style: { animationDelay: "300ms" } }))), /* @__PURE__ */ React.createElement("div", { ref: messagesEndRef })), chatError && /* @__PURE__ */ React.createElement("div", { className: "mx-4 mb-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm" }, chatError), /* @__PURE__ */ React.createElement("div", { className: "border-t border-shnoor-mist/50 p-4 bg-white/80 backdrop-blur-sm z-20" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-2" }, recognitionRef.current && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleListening,
      disabled: isSending,
      className: `relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${isSending ? "bg-shnoor-mist/40 cursor-not-allowed" : isListening ? "bg-red-500 hover:bg-red-600 shadow-[0_0_30px_rgba(239,68,68,0.5)] scale-110" : "bg-gradient-to-br from-shnoor-indigo to-[#4A4AA4] hover:scale-105 hover:shadow-[0_0_25px_rgba(107,107,174,0.5)]"}`,
      title: isListening ? "Listening - tap to stop" : "Tap to speak"
    },
    isListening && /* @__PURE__ */ React.createElement("span", { className: "absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30 pointer-events-none" }),
    isSending ? /* @__PURE__ */ React.createElement(LoaderCircle, { size: 30, className: "animate-spin text-shnoor-navy/40" }) : /* @__PURE__ */ React.createElement(Mic, { size: 30, className: "text-white" })
  ), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium font-semibold text-center" }, isSending ? "AI is thinking..." : isListening ? "Listening - speak your answer" : "Tap the mic and speak. It auto-submits when you stop.")), userInput ? /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-2xl bg-shnoor-lavender border border-shnoor-indigo/20 rounded-2xl px-5 py-3 text-sm text-shnoor-navy font-medium text-center shadow-sm" }, /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-shnoor-indigoMedium font-bold uppercase tracking-widest mb-1" }, "You said"), /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed break-words" }, userInput)) : /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-2xl rounded-2xl border border-dashed border-shnoor-mist bg-white px-5 py-4 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-shnoor-indigoMedium font-bold uppercase tracking-widest mb-1" }, "Voice Preview"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium" }, "Your spoken answer will appear here automatically."))))), step === "feedback" && /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center justify-center flex-1 space-y-6 w-full animate-fadeIn px-4" }, feedbackSubmitted ? /* @__PURE__ */ React.createElement("div", { className: "bg-white border-2 border-shnoor-success/30 rounded-2xl p-10 w-full max-w-md text-center shadow-xl" }, /* @__PURE__ */ React.createElement("div", { className: "w-20 h-20 bg-shnoor-success/20 rounded-full flex items-center justify-center mx-auto mb-6" }, /* @__PURE__ */ React.createElement(CircleCheckBig, { size: 40, className: "text-shnoor-success" })), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-bold text-shnoor-navy mb-3" }, "Thank You!"), /* @__PURE__ */ React.createElement("p", { className: "text-shnoor-indigoMedium text-sm mb-8" }, "Your interview has been saved. The admin will review your performance soon."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => navigate("/dashboard"),
      className: "w-full py-3 px-4 font-bold rounded-xl transition-colors bg-shnoor-indigo hover:bg-[#4d4d9c] text-white shadow-md shadow-indigo-500/30"
    },
    "Return to Dashboard"
  )) : /* @__PURE__ */ React.createElement("div", { className: "bg-white border-2 border-shnoor-mist rounded-2xl p-8 w-full max-w-lg shadow-[0_8px_30px_rgba(14,14,39,0.06)] relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 right-0 w-40 h-40 bg-shnoor-indigo/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" }), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-bold text-shnoor-navy mb-2 relative z-10" }, "Interview Completed! \u{1F389}"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-shnoor-indigoMedium mb-4 relative z-10" }, "Your technical score is calculated automatically (4 correct answers = 1 star, up to 5 stars)."), /* @__PURE__ */ React.createElement("div", { className: "mb-6 bg-shnoor-lavender/50 border border-shnoor-mist rounded-xl p-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium font-semibold" }, "Correct Answers: ", /* @__PURE__ */ React.createElement("span", { className: "text-shnoor-navy font-bold" }, assessmentResult?.correctCount ?? 0, "/", assessmentResult?.totalScoredQuestions ?? 0)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium font-semibold mt-1" }, "Auto Rating: ", /* @__PURE__ */ React.createElement("span", { className: "text-shnoor-navy font-bold" }, assessmentResult?.rating ?? 0, "/5")), /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex items-center gap-1", "aria-label": `Auto rating ${assessmentResult?.rating ?? 0} out of 5` }, [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ React.createElement(
    Star,
    {
      key: star,
      size: 18,
      className: star <= (assessmentResult?.rating ?? 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
    }
  ))), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-shnoor-indigoMedium font-semibold mt-1" }, "Decision: ", /* @__PURE__ */ React.createElement("span", { className: "text-shnoor-navy font-bold" }, assessmentResult?.shortlisted ? "Auto-shortlisted" : "Disqualified"))), /* @__PURE__ */ React.createElement("div", { className: "mb-6 relative z-10" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-bold text-shnoor-navy mb-2" }, "Any comments or feedback? (Optional)"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      value: feedbackComment,
      onChange: (e2) => setFeedbackComment(e2.target.value),
      placeholder: "Tell us what went well or what could be improved...",
      className: "w-full px-4 py-3 border-2 border-shnoor-mist rounded-xl focus:outline-none focus:ring-2 focus:ring-shnoor-indigo text-sm resize-none",
      rows: 4
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleSubmitFeedback,
      disabled: isSubmittingFeedback,
      className: `w-full py-3.5 px-4 font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 relative z-10 ${isSubmittingFeedback ? "bg-shnoor-mist/50 text-shnoor-navy cursor-not-allowed" : "bg-gradient-to-r from-shnoor-indigo to-[#4A4AA4] text-white hover:shadow-lg hover:-translate-y-0.5"}`
    },
    isSubmittingFeedback ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LoaderCircle, { size: 18, className: "animate-spin" }), /* @__PURE__ */ React.createElement("span", null, "Saving Interview...")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Finish"))
  )))));
};
var AIInterviewPage_default = AIInterviewPage;
export {
  AIInterviewPage_default as default
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
lucide-react/dist/esm/icons/bot.js:
lucide-react/dist/esm/icons/camera.js:
lucide-react/dist/esm/icons/chevron-left.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/leaf.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/mic.js:
lucide-react/dist/esm/icons/moon.js:
lucide-react/dist/esm/icons/refresh-cw.js:
lucide-react/dist/esm/icons/shield-alert.js:
lucide-react/dist/esm/icons/smartphone.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/sun.js:
lucide-react/dist/esm/icons/upload.js:
lucide-react/dist/esm/icons/user-x.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/icons/users.js:
lucide-react/dist/esm/icons/video-off.js:
lucide-react/dist/esm/icons/volume-2.js:
lucide-react/dist/esm/icons/volume-x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
