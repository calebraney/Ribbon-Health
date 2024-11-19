(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // (disabled):node_modules/paper/dist/node/self.js
  var require_self = __commonJS({
    "(disabled):node_modules/paper/dist/node/self.js"() {
    }
  });

  // (disabled):node_modules/paper/dist/node/extend.js
  var require_extend = __commonJS({
    "(disabled):node_modules/paper/dist/node/extend.js"() {
    }
  });

  // node_modules/paper/dist/paper-full.js
  var require_paper_full = __commonJS({
    "node_modules/paper/dist/paper-full.js"(exports, module) {
      var paper = function(self2, undefined2) {
        self2 = self2 || require_self();
        var window2 = self2.window, document2 = self2.document;
        var Base = new function() {
          var hidden = /^(statics|enumerable|beans|preserve)$/, array = [], slice = array.slice, create = Object.create, describe = Object.getOwnPropertyDescriptor, define2 = Object.defineProperty, forEach = array.forEach || function(iter, bind) {
            for (var i2 = 0, l = this.length; i2 < l; i2++) {
              iter.call(bind, this[i2], i2, this);
            }
          }, forIn = function(iter, bind) {
            for (var i2 in this) {
              if (this.hasOwnProperty(i2))
                iter.call(bind, this[i2], i2, this);
            }
          }, set2 = Object.assign || function(dst) {
            for (var i2 = 1, l = arguments.length; i2 < l; i2++) {
              var src = arguments[i2];
              for (var key in src) {
                if (src.hasOwnProperty(key))
                  dst[key] = src[key];
              }
            }
            return dst;
          }, each = function(obj, iter, bind) {
            if (obj) {
              var desc = describe(obj, "length");
              (desc && typeof desc.value === "number" ? forEach : forIn).call(obj, iter, bind = bind || obj);
            }
            return bind;
          };
          function inject(dest, src, enumerable, beans, preserve) {
            var beansNames = {};
            function field(name2, val) {
              val = val || (val = describe(src, name2)) && (val.get ? val : val.value);
              if (typeof val === "string" && val[0] === "#")
                val = dest[val.substring(1)] || val;
              var isFunc = typeof val === "function", res = val, prev = preserve || isFunc && !val.base ? val && val.get ? name2 in dest : dest[name2] : null, bean;
              if (!preserve || !prev) {
                if (isFunc && prev)
                  val.base = prev;
                if (isFunc && beans !== false && (bean = name2.match(/^([gs]et|is)(([A-Z])(.*))$/)))
                  beansNames[bean[3].toLowerCase() + bean[4]] = bean[2];
                if (!res || isFunc || !res.get || typeof res.get !== "function" || !Base2.isPlainObject(res)) {
                  res = { value: res, writable: true };
                }
                if ((describe(dest, name2) || { configurable: true }).configurable) {
                  res.configurable = true;
                  res.enumerable = enumerable != null ? enumerable : !bean;
                }
                define2(dest, name2, res);
              }
            }
            if (src) {
              for (var name in src) {
                if (src.hasOwnProperty(name) && !hidden.test(name))
                  field(name);
              }
              for (var name in beansNames) {
                var part = beansNames[name], set3 = dest["set" + part], get2 = dest["get" + part] || set3 && dest["is" + part];
                if (get2 && (beans === true || get2.length === 0))
                  field(name, { get: get2, set: set3 });
              }
            }
            return dest;
          }
          function Base2() {
            for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
              var src = arguments[i2];
              if (src)
                set2(this, src);
            }
            return this;
          }
          return inject(Base2, {
            inject: function(src) {
              if (src) {
                var statics = src.statics === true ? src : src.statics, beans = src.beans, preserve = src.preserve;
                if (statics !== src)
                  inject(this.prototype, src, src.enumerable, beans, preserve);
                inject(this, statics, null, beans, preserve);
              }
              for (var i2 = 1, l = arguments.length; i2 < l; i2++)
                this.inject(arguments[i2]);
              return this;
            },
            extend: function() {
              var base = this, ctor, proto;
              for (var i2 = 0, obj, l = arguments.length; i2 < l && !(ctor && proto); i2++) {
                obj = arguments[i2];
                ctor = ctor || obj.initialize;
                proto = proto || obj.prototype;
              }
              ctor = ctor || function() {
                base.apply(this, arguments);
              };
              proto = ctor.prototype = proto || create(this.prototype);
              define2(
                proto,
                "constructor",
                { value: ctor, writable: true, configurable: true }
              );
              inject(ctor, this);
              if (arguments.length)
                this.inject.apply(ctor, arguments);
              ctor.base = base;
              return ctor;
            }
          }).inject({
            enumerable: false,
            initialize: Base2,
            set: Base2,
            inject: function() {
              for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
                var src = arguments[i2];
                if (src) {
                  inject(this, src, src.enumerable, src.beans, src.preserve);
                }
              }
              return this;
            },
            extend: function() {
              var res = create(this);
              return res.inject.apply(res, arguments);
            },
            each: function(iter, bind) {
              return each(this, iter, bind);
            },
            clone: function() {
              return new this.constructor(this);
            },
            statics: {
              set: set2,
              each,
              create,
              define: define2,
              describe,
              clone: function(obj) {
                return set2(new obj.constructor(), obj);
              },
              isPlainObject: function(obj) {
                var ctor = obj != null && obj.constructor;
                return ctor && (ctor === Object || ctor === Base2 || ctor.name === "Object");
              },
              pick: function(a, b) {
                return a !== undefined2 ? a : b;
              },
              slice: function(list, begin, end) {
                return slice.call(list, begin, end);
              }
            }
          });
        }();
        if (typeof module !== "undefined")
          module.exports = Base;
        Base.inject({
          enumerable: false,
          toString: function() {
            return this._id != null ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + Base.each(this, function(value, key) {
              if (!/^_/.test(key)) {
                var type = typeof value;
                this.push(key + ": " + (type === "number" ? Formatter.instance.number(value) : type === "string" ? "'" + value + "'" : value));
              }
            }, []).join(", ") + " }";
          },
          getClassName: function() {
            return this._class || "";
          },
          importJSON: function(json) {
            return Base.importJSON(json, this);
          },
          exportJSON: function(options) {
            return Base.exportJSON(this, options);
          },
          toJSON: function() {
            return Base.serialize(this);
          },
          set: function(props, exclude) {
            if (props)
              Base.filter(this, props, exclude, this._prioritize);
            return this;
          }
        }, {
          beans: false,
          statics: {
            exports: {},
            extend: function extend2() {
              var res = extend2.base.apply(this, arguments), name = res.prototype._class;
              if (name && !Base.exports[name])
                Base.exports[name] = res;
              return res;
            },
            equals: function(obj1, obj2) {
              if (obj1 === obj2)
                return true;
              if (obj1 && obj1.equals)
                return obj1.equals(obj2);
              if (obj2 && obj2.equals)
                return obj2.equals(obj1);
              if (obj1 && obj2 && typeof obj1 === "object" && typeof obj2 === "object") {
                if (Array.isArray(obj1) && Array.isArray(obj2)) {
                  var length = obj1.length;
                  if (length !== obj2.length)
                    return false;
                  while (length--) {
                    if (!Base.equals(obj1[length], obj2[length]))
                      return false;
                  }
                } else {
                  var keys = Object.keys(obj1), length = keys.length;
                  if (length !== Object.keys(obj2).length)
                    return false;
                  while (length--) {
                    var key = keys[length];
                    if (!(obj2.hasOwnProperty(key) && Base.equals(obj1[key], obj2[key])))
                      return false;
                  }
                }
                return true;
              }
              return false;
            },
            read: function(list, start, options, amount) {
              if (this === Base) {
                var value = this.peek(list, start);
                list.__index++;
                return value;
              }
              var proto = this.prototype, readIndex = proto._readIndex, begin = start || readIndex && list.__index || 0, length = list.length, obj = list[begin];
              amount = amount || length - begin;
              if (obj instanceof this || options && options.readNull && obj == null && amount <= 1) {
                if (readIndex)
                  list.__index = begin + 1;
                return obj && options && options.clone ? obj.clone() : obj;
              }
              obj = Base.create(proto);
              if (readIndex)
                obj.__read = true;
              obj = obj.initialize.apply(obj, begin > 0 || begin + amount < length ? Base.slice(list, begin, begin + amount) : list) || obj;
              if (readIndex) {
                list.__index = begin + obj.__read;
                var filtered = obj.__filtered;
                if (filtered) {
                  list.__filtered = filtered;
                  obj.__filtered = undefined2;
                }
                obj.__read = undefined2;
              }
              return obj;
            },
            peek: function(list, start) {
              return list[list.__index = start || list.__index || 0];
            },
            remain: function(list) {
              return list.length - (list.__index || 0);
            },
            readList: function(list, start, options, amount) {
              var res = [], entry, begin = start || 0, end = amount ? begin + amount : list.length;
              for (var i2 = begin; i2 < end; i2++) {
                res.push(Array.isArray(entry = list[i2]) ? this.read(entry, 0, options) : this.read(list, i2, options, 1));
              }
              return res;
            },
            readNamed: function(list, name, start, options, amount) {
              var value = this.getNamed(list, name), hasValue = value !== undefined2;
              if (hasValue) {
                var filtered = list.__filtered;
                if (!filtered) {
                  var source = this.getSource(list);
                  filtered = list.__filtered = Base.create(source);
                  filtered.__unfiltered = source;
                }
                filtered[name] = undefined2;
              }
              return this.read(hasValue ? [value] : list, start, options, amount);
            },
            readSupported: function(list, dest) {
              var source = this.getSource(list), that = this, read = false;
              if (source) {
                Object.keys(source).forEach(function(key) {
                  if (key in dest) {
                    var value = that.readNamed(list, key);
                    if (value !== undefined2) {
                      dest[key] = value;
                    }
                    read = true;
                  }
                });
              }
              return read;
            },
            getSource: function(list) {
              var source = list.__source;
              if (source === undefined2) {
                var arg = list.length === 1 && list[0];
                source = list.__source = arg && Base.isPlainObject(arg) ? arg : null;
              }
              return source;
            },
            getNamed: function(list, name) {
              var source = this.getSource(list);
              if (source) {
                return name ? source[name] : list.__filtered || source;
              }
            },
            hasNamed: function(list, name) {
              return !!this.getNamed(list, name);
            },
            filter: function(dest, source, exclude, prioritize) {
              var processed;
              function handleKey(key2) {
                if (!(exclude && key2 in exclude) && !(processed && key2 in processed)) {
                  var value = source[key2];
                  if (value !== undefined2)
                    dest[key2] = value;
                }
              }
              if (prioritize) {
                var keys = {};
                for (var i2 = 0, key, l = prioritize.length; i2 < l; i2++) {
                  if ((key = prioritize[i2]) in source) {
                    handleKey(key);
                    keys[key] = true;
                  }
                }
                processed = keys;
              }
              Object.keys(source.__unfiltered || source).forEach(handleKey);
              return dest;
            },
            isPlainValue: function(obj, asString) {
              return Base.isPlainObject(obj) || Array.isArray(obj) || asString && typeof obj === "string";
            },
            serialize: function(obj, options, compact, dictionary) {
              options = options || {};
              var isRoot = !dictionary, res;
              if (isRoot) {
                options.formatter = new Formatter(options.precision);
                dictionary = {
                  length: 0,
                  definitions: {},
                  references: {},
                  add: function(item, create) {
                    var id = "#" + item._id, ref = this.references[id];
                    if (!ref) {
                      this.length++;
                      var res2 = create.call(item), name2 = item._class;
                      if (name2 && res2[0] !== name2)
                        res2.unshift(name2);
                      this.definitions[id] = res2;
                      ref = this.references[id] = [id];
                    }
                    return ref;
                  }
                };
              }
              if (obj && obj._serialize) {
                res = obj._serialize(options, dictionary);
                var name = obj._class;
                if (name && !obj._compactSerialize && (isRoot || !compact) && res[0] !== name) {
                  res.unshift(name);
                }
              } else if (Array.isArray(obj)) {
                res = [];
                for (var i2 = 0, l = obj.length; i2 < l; i2++)
                  res[i2] = Base.serialize(obj[i2], options, compact, dictionary);
              } else if (Base.isPlainObject(obj)) {
                res = {};
                var keys = Object.keys(obj);
                for (var i2 = 0, l = keys.length; i2 < l; i2++) {
                  var key = keys[i2];
                  res[key] = Base.serialize(
                    obj[key],
                    options,
                    compact,
                    dictionary
                  );
                }
              } else if (typeof obj === "number") {
                res = options.formatter.number(obj, options.precision);
              } else {
                res = obj;
              }
              return isRoot && dictionary.length > 0 ? [["dictionary", dictionary.definitions], res] : res;
            },
            deserialize: function(json, create, _data, _setDictionary, _isRoot) {
              var res = json, isFirst = !_data, hasDictionary = isFirst && json && json.length && json[0][0] === "dictionary";
              _data = _data || {};
              if (Array.isArray(json)) {
                var type = json[0], isDictionary = type === "dictionary";
                if (json.length == 1 && /^#/.test(type)) {
                  return _data.dictionary[type];
                }
                type = Base.exports[type];
                res = [];
                for (var i2 = type ? 1 : 0, l = json.length; i2 < l; i2++) {
                  res.push(Base.deserialize(
                    json[i2],
                    create,
                    _data,
                    isDictionary,
                    hasDictionary
                  ));
                }
                if (type) {
                  var args = res;
                  if (create) {
                    res = create(type, args, isFirst || _isRoot);
                  } else {
                    res = new type(args);
                  }
                }
              } else if (Base.isPlainObject(json)) {
                res = {};
                if (_setDictionary)
                  _data.dictionary = res;
                for (var key in json)
                  res[key] = Base.deserialize(json[key], create, _data);
              }
              return hasDictionary ? res[1] : res;
            },
            exportJSON: function(obj, options) {
              var json = Base.serialize(obj, options);
              return options && options.asString == false ? json : JSON.stringify(json);
            },
            importJSON: function(json, target) {
              return Base.deserialize(
                typeof json === "string" ? JSON.parse(json) : json,
                function(ctor, args, isRoot) {
                  var useTarget = isRoot && target && target.constructor === ctor, obj = useTarget ? target : Base.create(ctor.prototype);
                  if (args.length === 1 && obj instanceof Item && (useTarget || !(obj instanceof Layer))) {
                    var arg = args[0];
                    if (Base.isPlainObject(arg)) {
                      arg.insert = false;
                      if (useTarget) {
                        args = args.concat([Item.INSERT]);
                      }
                    }
                  }
                  (useTarget ? obj.set : ctor).apply(obj, args);
                  if (useTarget)
                    target = null;
                  return obj;
                }
              );
            },
            push: function(list, items) {
              var itemsLength = items.length;
              if (itemsLength < 4096) {
                list.push.apply(list, items);
              } else {
                var startLength = list.length;
                list.length += itemsLength;
                for (var i2 = 0; i2 < itemsLength; i2++) {
                  list[startLength + i2] = items[i2];
                }
              }
              return list;
            },
            splice: function(list, items, index, remove2) {
              var amount = items && items.length, append = index === undefined2;
              index = append ? list.length : index;
              if (index > list.length)
                index = list.length;
              for (var i2 = 0; i2 < amount; i2++)
                items[i2]._index = index + i2;
              if (append) {
                Base.push(list, items);
                return [];
              } else {
                var args = [index, remove2];
                if (items)
                  Base.push(args, items);
                var removed = list.splice.apply(list, args);
                for (var i2 = 0, l = removed.length; i2 < l; i2++)
                  removed[i2]._index = undefined2;
                for (var i2 = index + amount, l = list.length; i2 < l; i2++)
                  list[i2]._index = i2;
                return removed;
              }
            },
            capitalize: function(str) {
              return str.replace(/\b[a-z]/g, function(match) {
                return match.toUpperCase();
              });
            },
            camelize: function(str) {
              return str.replace(/-(.)/g, function(match, chr) {
                return chr.toUpperCase();
              });
            },
            hyphenate: function(str) {
              return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            }
          }
        });
        var Emitter = {
          on: function(type, func) {
            if (typeof type !== "string") {
              Base.each(type, function(value, key) {
                this.on(key, value);
              }, this);
            } else {
              var types = this._eventTypes, entry = types && types[type], handlers = this._callbacks = this._callbacks || {};
              handlers = handlers[type] = handlers[type] || [];
              if (handlers.indexOf(func) === -1) {
                handlers.push(func);
                if (entry && entry.install && handlers.length === 1)
                  entry.install.call(this, type);
              }
            }
            return this;
          },
          off: function(type, func) {
            if (typeof type !== "string") {
              Base.each(type, function(value, key) {
                this.off(key, value);
              }, this);
              return;
            }
            var types = this._eventTypes, entry = types && types[type], handlers = this._callbacks && this._callbacks[type], index;
            if (handlers) {
              if (!func || (index = handlers.indexOf(func)) !== -1 && handlers.length === 1) {
                if (entry && entry.uninstall)
                  entry.uninstall.call(this, type);
                delete this._callbacks[type];
              } else if (index !== -1) {
                handlers.splice(index, 1);
              }
            }
            return this;
          },
          once: function(type, func) {
            return this.on(type, function handler() {
              func.apply(this, arguments);
              this.off(type, handler);
            });
          },
          emit: function(type, event) {
            var handlers = this._callbacks && this._callbacks[type];
            if (!handlers)
              return false;
            var args = Base.slice(arguments, 1), setTarget = event && event.target && !event.currentTarget;
            handlers = handlers.slice();
            if (setTarget)
              event.currentTarget = this;
            for (var i2 = 0, l = handlers.length; i2 < l; i2++) {
              if (handlers[i2].apply(this, args) == false) {
                if (event && event.stop)
                  event.stop();
                break;
              }
            }
            if (setTarget)
              delete event.currentTarget;
            return true;
          },
          responds: function(type) {
            return !!(this._callbacks && this._callbacks[type]);
          },
          attach: "#on",
          detach: "#off",
          fire: "#emit",
          _installEvents: function(install) {
            var types = this._eventTypes, handlers = this._callbacks, key = install ? "install" : "uninstall";
            if (types) {
              for (var type in handlers) {
                if (handlers[type].length > 0) {
                  var entry = types[type], func = entry && entry[key];
                  if (func)
                    func.call(this, type);
                }
              }
            }
          },
          statics: {
            inject: function inject(src) {
              var events = src._events;
              if (events) {
                var types = {};
                Base.each(events, function(entry, key) {
                  var isString2 = typeof entry === "string", name = isString2 ? entry : key, part = Base.capitalize(name), type = name.substring(2).toLowerCase();
                  types[type] = isString2 ? {} : entry;
                  name = "_" + name;
                  src["get" + part] = function() {
                    return this[name];
                  };
                  src["set" + part] = function(func) {
                    var prev = this[name];
                    if (prev)
                      this.off(type, prev);
                    if (func)
                      this.on(type, func);
                    this[name] = func;
                  };
                });
                src._eventTypes = types;
              }
              return inject.base.apply(this, arguments);
            }
          }
        };
        var PaperScope = Base.extend({
          _class: "PaperScope",
          initialize: function PaperScope2() {
            paper2 = this;
            this.settings = new Base({
              applyMatrix: true,
              insertItems: true,
              handleSize: 4,
              hitTolerance: 0
            });
            this.project = null;
            this.projects = [];
            this.tools = [];
            this._id = PaperScope2._id++;
            PaperScope2._scopes[this._id] = this;
            var proto = PaperScope2.prototype;
            if (!this.support) {
              var ctx = CanvasProvider.getContext(1, 1) || {};
              proto.support = {
                nativeDash: "setLineDash" in ctx || "mozDash" in ctx,
                nativeBlendModes: BlendMode.nativeModes
              };
              CanvasProvider.release(ctx);
            }
            if (!this.agent) {
              var user = self2.navigator.userAgent.toLowerCase(), os = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(user) || [])[0], platform2 = os === "darwin" ? "mac" : os, agent = proto.agent = proto.browser = { platform: platform2 };
              if (platform2)
                agent[platform2] = true;
              user.replace(
                /(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
                function(match, n, v1, v2, rv) {
                  if (!agent.chrome) {
                    var v = n === "opera" ? v2 : /^(node|trident)$/.test(n) ? rv : v1;
                    agent.version = v;
                    agent.versionNumber = parseFloat(v);
                    n = { trident: "msie", jsdom: "node" }[n] || n;
                    agent.name = n;
                    agent[n] = true;
                  }
                }
              );
              if (agent.chrome)
                delete agent.webkit;
              if (agent.atom)
                delete agent.chrome;
            }
          },
          version: "0.12.17",
          getView: function() {
            var project = this.project;
            return project && project._view;
          },
          getPaper: function() {
            return this;
          },
          execute: function(code, options) {
            var exports2 = paper2.PaperScript.execute(code, this, options);
            View.updateFocus();
            return exports2;
          },
          install: function(scope) {
            var that = this;
            Base.each(["project", "view", "tool"], function(key2) {
              Base.define(scope, key2, {
                configurable: true,
                get: function() {
                  return that[key2];
                }
              });
            });
            for (var key in this)
              if (!/^_/.test(key) && this[key])
                scope[key] = this[key];
          },
          setup: function(element) {
            paper2 = this;
            this.project = new Project(element);
            return this;
          },
          createCanvas: function(width, height) {
            return CanvasProvider.getCanvas(width, height);
          },
          activate: function() {
            paper2 = this;
          },
          clear: function() {
            var projects = this.projects, tools = this.tools;
            for (var i2 = projects.length - 1; i2 >= 0; i2--)
              projects[i2].remove();
            for (var i2 = tools.length - 1; i2 >= 0; i2--)
              tools[i2].remove();
          },
          remove: function() {
            this.clear();
            delete PaperScope._scopes[this._id];
          },
          statics: new function() {
            function handleAttribute(name) {
              name += "Attribute";
              return function(el, attr3) {
                return el[name](attr3) || el[name]("data-paper-" + attr3);
              };
            }
            return {
              _scopes: {},
              _id: 0,
              get: function(id) {
                return this._scopes[id] || null;
              },
              getAttribute: handleAttribute("get"),
              hasAttribute: handleAttribute("has")
            };
          }()
        });
        var PaperScopeItem = Base.extend(Emitter, {
          initialize: function(activate) {
            this._scope = paper2;
            this._index = this._scope[this._list].push(this) - 1;
            if (activate || !this._scope[this._reference])
              this.activate();
          },
          activate: function() {
            if (!this._scope)
              return false;
            var prev = this._scope[this._reference];
            if (prev && prev !== this)
              prev.emit("deactivate");
            this._scope[this._reference] = this;
            this.emit("activate", prev);
            return true;
          },
          isActive: function() {
            return this._scope[this._reference] === this;
          },
          remove: function() {
            if (this._index == null)
              return false;
            Base.splice(this._scope[this._list], null, this._index, 1);
            if (this._scope[this._reference] == this)
              this._scope[this._reference] = null;
            this._scope = null;
            return true;
          },
          getView: function() {
            return this._scope.getView();
          }
        });
        var CollisionDetection = {
          findItemBoundsCollisions: function(items1, items2, tolerance) {
            function getBounds(items) {
              var bounds = new Array(items.length);
              for (var i2 = 0; i2 < items.length; i2++) {
                var rect = items[i2].getBounds();
                bounds[i2] = [rect.left, rect.top, rect.right, rect.bottom];
              }
              return bounds;
            }
            var bounds1 = getBounds(items1), bounds2 = !items2 || items2 === items1 ? bounds1 : getBounds(items2);
            return this.findBoundsCollisions(bounds1, bounds2, tolerance || 0);
          },
          findCurveBoundsCollisions: function(curves1, curves2, tolerance, bothAxis) {
            function getBounds(curves) {
              var min = Math.min, max = Math.max, bounds = new Array(curves.length);
              for (var i3 = 0; i3 < curves.length; i3++) {
                var v = curves[i3];
                bounds[i3] = [
                  min(v[0], v[2], v[4], v[6]),
                  min(v[1], v[3], v[5], v[7]),
                  max(v[0], v[2], v[4], v[6]),
                  max(v[1], v[3], v[5], v[7])
                ];
              }
              return bounds;
            }
            var bounds1 = getBounds(curves1), bounds2 = !curves2 || curves2 === curves1 ? bounds1 : getBounds(curves2);
            if (bothAxis) {
              var hor = this.findBoundsCollisions(
                bounds1,
                bounds2,
                tolerance || 0,
                false,
                true
              ), ver = this.findBoundsCollisions(
                bounds1,
                bounds2,
                tolerance || 0,
                true,
                true
              ), list = [];
              for (var i2 = 0, l = hor.length; i2 < l; i2++) {
                list[i2] = { hor: hor[i2], ver: ver[i2] };
              }
              return list;
            }
            return this.findBoundsCollisions(bounds1, bounds2, tolerance || 0);
          },
          findBoundsCollisions: function(boundsA, boundsB, tolerance, sweepVertical, onlySweepAxisCollisions) {
            var self3 = !boundsB || boundsA === boundsB, allBounds = self3 ? boundsA : boundsA.concat(boundsB), lengthA = boundsA.length, lengthAll = allBounds.length;
            function binarySearch(indices, coord, value) {
              var lo = 0, hi = indices.length;
              while (lo < hi) {
                var mid = hi + lo >>> 1;
                if (allBounds[indices[mid]][coord] < value) {
                  lo = mid + 1;
                } else {
                  hi = mid;
                }
              }
              return lo - 1;
            }
            var pri0 = sweepVertical ? 1 : 0, pri1 = pri0 + 2, sec0 = sweepVertical ? 0 : 1, sec1 = sec0 + 2;
            var allIndicesByPri0 = new Array(lengthAll);
            for (var i2 = 0; i2 < lengthAll; i2++) {
              allIndicesByPri0[i2] = i2;
            }
            allIndicesByPri0.sort(function(i1, i22) {
              return allBounds[i1][pri0] - allBounds[i22][pri0];
            });
            var activeIndicesByPri1 = [], allCollisions = new Array(lengthA);
            for (var i2 = 0; i2 < lengthAll; i2++) {
              var curIndex = allIndicesByPri0[i2], curBounds = allBounds[curIndex], origIndex = self3 ? curIndex : curIndex - lengthA, isCurrentA = curIndex < lengthA, isCurrentB = self3 || !isCurrentA, curCollisions = isCurrentA ? [] : null;
              if (activeIndicesByPri1.length) {
                var pruneCount = binarySearch(
                  activeIndicesByPri1,
                  pri1,
                  curBounds[pri0] - tolerance
                ) + 1;
                activeIndicesByPri1.splice(0, pruneCount);
                if (self3 && onlySweepAxisCollisions) {
                  curCollisions = curCollisions.concat(activeIndicesByPri1);
                  for (var j = 0; j < activeIndicesByPri1.length; j++) {
                    var activeIndex = activeIndicesByPri1[j];
                    allCollisions[activeIndex].push(origIndex);
                  }
                } else {
                  var curSec1 = curBounds[sec1], curSec0 = curBounds[sec0];
                  for (var j = 0; j < activeIndicesByPri1.length; j++) {
                    var activeIndex = activeIndicesByPri1[j], activeBounds = allBounds[activeIndex], isActiveA = activeIndex < lengthA, isActiveB = self3 || activeIndex >= lengthA;
                    if (onlySweepAxisCollisions || (isCurrentA && isActiveB || isCurrentB && isActiveA) && (curSec1 >= activeBounds[sec0] - tolerance && curSec0 <= activeBounds[sec1] + tolerance)) {
                      if (isCurrentA && isActiveB) {
                        curCollisions.push(
                          self3 ? activeIndex : activeIndex - lengthA
                        );
                      }
                      if (isCurrentB && isActiveA) {
                        allCollisions[activeIndex].push(origIndex);
                      }
                    }
                  }
                }
              }
              if (isCurrentA) {
                if (boundsA === boundsB) {
                  curCollisions.push(curIndex);
                }
                allCollisions[curIndex] = curCollisions;
              }
              if (activeIndicesByPri1.length) {
                var curPri1 = curBounds[pri1], index = binarySearch(activeIndicesByPri1, pri1, curPri1);
                activeIndicesByPri1.splice(index + 1, 0, curIndex);
              } else {
                activeIndicesByPri1.push(curIndex);
              }
            }
            for (var i2 = 0; i2 < allCollisions.length; i2++) {
              var collisions = allCollisions[i2];
              if (collisions) {
                collisions.sort(function(i1, i22) {
                  return i1 - i22;
                });
              }
            }
            return allCollisions;
          }
        };
        var Formatter = Base.extend({
          initialize: function(precision) {
            this.precision = Base.pick(precision, 5);
            this.multiplier = Math.pow(10, this.precision);
          },
          number: function(val) {
            return this.precision < 16 ? Math.round(val * this.multiplier) / this.multiplier : val;
          },
          pair: function(val1, val2, separator) {
            return this.number(val1) + (separator || ",") + this.number(val2);
          },
          point: function(val, separator) {
            return this.number(val.x) + (separator || ",") + this.number(val.y);
          },
          size: function(val, separator) {
            return this.number(val.width) + (separator || ",") + this.number(val.height);
          },
          rectangle: function(val, separator) {
            return this.point(val, separator) + (separator || ",") + this.size(val, separator);
          }
        });
        Formatter.instance = new Formatter();
        var Numerical = new function() {
          var abscissas = [
            [0.5773502691896257],
            [0, 0.7745966692414834],
            [0.33998104358485626, 0.8611363115940526],
            [0, 0.5384693101056831, 0.906179845938664],
            [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
            [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
            [0.1834346424956498, 0.525532409916329, 0.7966664774136267, 0.9602898564975363],
            [0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358, 0.9681602395076261],
            [0.14887433898163122, 0.4333953941292472, 0.6794095682990244, 0.8650633666889845, 0.9739065285171717],
            [0, 0.26954315595234496, 0.5190961292068118, 0.7301520055740494, 0.8870625997680953, 0.978228658146057],
            [0.1252334085114689, 0.3678314989981802, 0.5873179542866175, 0.7699026741943047, 0.9041172563704749, 0.9815606342467192],
            [0, 0.2304583159551348, 0.44849275103644687, 0.6423493394403402, 0.8015780907333099, 0.9175983992229779, 0.9841830547185881],
            [0.10805494870734367, 0.31911236892788974, 0.5152486363581541, 0.6872929048116855, 0.827201315069765, 0.9284348836635735, 0.9862838086968123],
            [0, 0.20119409399743451, 0.3941513470775634, 0.5709721726085388, 0.7244177313601701, 0.8482065834104272, 0.937273392400706, 0.9879925180204854],
            [0.09501250983763744, 0.2816035507792589, 0.45801677765722737, 0.6178762444026438, 0.755404408355003, 0.8656312023878318, 0.9445750230732326, 0.9894009349916499]
          ];
          var weights = [
            [1],
            [0.8888888888888888, 0.5555555555555556],
            [0.6521451548625461, 0.34785484513745385],
            [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
            [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
            [0.4179591836734694, 0.3818300505051189, 0.27970539148927664, 0.1294849661688697],
            [0.362683783378362, 0.31370664587788727, 0.22238103445337448, 0.10122853629037626],
            [0.3302393550012598, 0.31234707704000286, 0.26061069640293544, 0.1806481606948574, 0.08127438836157441],
            [0.29552422471475287, 0.26926671930999635, 0.21908636251598204, 0.1494513491505806, 0.06667134430868814],
            [0.2729250867779006, 0.26280454451024665, 0.23319376459199048, 0.18629021092773426, 0.1255803694649046, 0.05566856711617366],
            [0.24914704581340277, 0.2334925365383548, 0.20316742672306592, 0.16007832854334622, 0.10693932599531843, 0.04717533638651183],
            [0.2325515532308739, 0.22628318026289723, 0.2078160475368885, 0.17814598076194574, 0.13887351021978725, 0.09212149983772845, 0.04048400476531588],
            [0.2152638534631578, 0.2051984637212956, 0.18553839747793782, 0.15720316715819355, 0.12151857068790319, 0.08015808715976021, 0.03511946033175186],
            [0.2025782419255613, 0.19843148532711158, 0.1861610000155622, 0.16626920581699392, 0.13957067792615432, 0.10715922046717194, 0.07036604748810812, 0.03075324199611727],
            [0.1894506104550685, 0.18260341504492358, 0.16915651939500254, 0.14959598881657674, 0.12462897125553388, 0.09515851168249279, 0.062253523938647894, 0.027152459411754096]
          ];
          var abs = Math.abs, sqrt = Math.sqrt, pow = Math.pow, log2 = Math.log2 || function(x) {
            return Math.log(x) * Math.LOG2E;
          }, EPSILON = 1e-12, MACHINE_EPSILON = 112e-18;
          function clamp(value, min, max) {
            return value < min ? min : value > max ? max : value;
          }
          function getDiscriminant(a, b, c) {
            function split2(v) {
              var x = v * 134217729, y = v - x, hi = y + x, lo = v - hi;
              return [hi, lo];
            }
            var D = b * b - a * c, E = b * b + a * c;
            if (abs(D) * 3 < E) {
              var ad = split2(a), bd = split2(b), cd = split2(c), p = b * b, dp = bd[0] * bd[0] - p + 2 * bd[0] * bd[1] + bd[1] * bd[1], q = a * c, dq = ad[0] * cd[0] - q + ad[0] * cd[1] + ad[1] * cd[0] + ad[1] * cd[1];
              D = p - q + (dp - dq);
            }
            return D;
          }
          function getNormalizationFactor() {
            var norm = Math.max.apply(Math, arguments);
            return norm && (norm < 1e-8 || norm > 1e8) ? pow(2, -Math.round(log2(norm))) : 0;
          }
          return {
            EPSILON,
            MACHINE_EPSILON,
            CURVETIME_EPSILON: 1e-8,
            GEOMETRIC_EPSILON: 1e-7,
            TRIGONOMETRIC_EPSILON: 1e-8,
            ANGULAR_EPSILON: 1e-5,
            KAPPA: 4 * (sqrt(2) - 1) / 3,
            isZero: function(val) {
              return val >= -EPSILON && val <= EPSILON;
            },
            isMachineZero: function(val) {
              return val >= -MACHINE_EPSILON && val <= MACHINE_EPSILON;
            },
            clamp,
            integrate: function(f, a, b, n) {
              var x = abscissas[n - 2], w = weights[n - 2], A = (b - a) * 0.5, B = A + a, i2 = 0, m = n + 1 >> 1, sum = n & 1 ? w[i2++] * f(B) : 0;
              while (i2 < m) {
                var Ax = A * x[i2];
                sum += w[i2++] * (f(B + Ax) + f(B - Ax));
              }
              return A * sum;
            },
            findRoot: function(f, df, x, a, b, n, tolerance) {
              for (var i2 = 0; i2 < n; i2++) {
                var fx = f(x), dx = fx / df(x), nx = x - dx;
                if (abs(dx) < tolerance) {
                  x = nx;
                  break;
                }
                if (fx > 0) {
                  b = x;
                  x = nx <= a ? (a + b) * 0.5 : nx;
                } else {
                  a = x;
                  x = nx >= b ? (a + b) * 0.5 : nx;
                }
              }
              return clamp(x, a, b);
            },
            solveQuadratic: function(a, b, c, roots, min, max) {
              var x1, x2 = Infinity;
              if (abs(a) < EPSILON) {
                if (abs(b) < EPSILON)
                  return abs(c) < EPSILON ? -1 : 0;
                x1 = -c / b;
              } else {
                b *= -0.5;
                var D = getDiscriminant(a, b, c);
                if (D && abs(D) < MACHINE_EPSILON) {
                  var f = getNormalizationFactor(abs(a), abs(b), abs(c));
                  if (f) {
                    a *= f;
                    b *= f;
                    c *= f;
                    D = getDiscriminant(a, b, c);
                  }
                }
                if (D >= -MACHINE_EPSILON) {
                  var Q = D < 0 ? 0 : sqrt(D), R = b + (b < 0 ? -Q : Q);
                  if (R === 0) {
                    x1 = c / a;
                    x2 = -x1;
                  } else {
                    x1 = R / a;
                    x2 = c / R;
                  }
                }
              }
              var count = 0, boundless = min == null, minB = min - EPSILON, maxB = max + EPSILON;
              if (isFinite(x1) && (boundless || x1 > minB && x1 < maxB))
                roots[count++] = boundless ? x1 : clamp(x1, min, max);
              if (x2 !== x1 && isFinite(x2) && (boundless || x2 > minB && x2 < maxB))
                roots[count++] = boundless ? x2 : clamp(x2, min, max);
              return count;
            },
            solveCubic: function(a, b, c, d, roots, min, max) {
              var f = getNormalizationFactor(abs(a), abs(b), abs(c), abs(d)), x, b1, c2, qd, q;
              if (f) {
                a *= f;
                b *= f;
                c *= f;
                d *= f;
              }
              function evaluate(x02) {
                x = x02;
                var tmp = a * x;
                b1 = tmp + b;
                c2 = b1 * x + c;
                qd = (tmp + b1) * x + c2;
                q = c2 * x + d;
              }
              if (abs(a) < EPSILON) {
                a = b;
                b1 = c;
                c2 = d;
                x = Infinity;
              } else if (abs(d) < EPSILON) {
                b1 = b;
                c2 = c;
                x = 0;
              } else {
                evaluate(-(b / a) / 3);
                var t2 = q / a, r = pow(abs(t2), 1 / 3), s = t2 < 0 ? -1 : 1, td = -qd / a, rd = td > 0 ? 1.324717957244746 * Math.max(r, sqrt(td)) : r, x0 = x - s * rd;
                if (x0 !== x) {
                  do {
                    evaluate(x0);
                    x0 = qd === 0 ? x : x - q / qd / (1 + MACHINE_EPSILON);
                  } while (s * x0 > s * x);
                  if (abs(a) * x * x > abs(d / x)) {
                    c2 = -d / x;
                    b1 = (c2 - c) / x;
                  }
                }
              }
              var count = Numerical.solveQuadratic(a, b1, c2, roots, min, max), boundless = min == null;
              if (isFinite(x) && (count === 0 || count > 0 && x !== roots[0] && x !== roots[1]) && (boundless || x > min - EPSILON && x < max + EPSILON))
                roots[count++] = boundless ? x : clamp(x, min, max);
              return count;
            }
          };
        }();
        var UID = {
          _id: 1,
          _pools: {},
          get: function(name) {
            if (name) {
              var pool = this._pools[name];
              if (!pool)
                pool = this._pools[name] = { _id: 1 };
              return pool._id++;
            } else {
              return this._id++;
            }
          }
        };
        var Point = Base.extend({
          _class: "Point",
          _readIndex: true,
          initialize: function Point2(arg0, arg1) {
            var type = typeof arg0, reading = this.__read, read = 0;
            if (type === "number") {
              var hasY = typeof arg1 === "number";
              this._set(arg0, hasY ? arg1 : arg0);
              if (reading)
                read = hasY ? 2 : 1;
            } else if (type === "undefined" || arg0 === null) {
              this._set(0, 0);
              if (reading)
                read = arg0 === null ? 1 : 0;
            } else {
              var obj = type === "string" ? arg0.split(/[\s,]+/) || [] : arg0;
              read = 1;
              if (Array.isArray(obj)) {
                this._set(+obj[0], +(obj.length > 1 ? obj[1] : obj[0]));
              } else if ("x" in obj) {
                this._set(obj.x || 0, obj.y || 0);
              } else if ("width" in obj) {
                this._set(obj.width || 0, obj.height || 0);
              } else if ("angle" in obj) {
                this._set(obj.length || 0, 0);
                this.setAngle(obj.angle || 0);
              } else {
                this._set(0, 0);
                read = 0;
              }
            }
            if (reading)
              this.__read = read;
            return this;
          },
          set: "#initialize",
          _set: function(x, y) {
            this.x = x;
            this.y = y;
            return this;
          },
          equals: function(point) {
            return this === point || point && (this.x === point.x && this.y === point.y || Array.isArray(point) && this.x === point[0] && this.y === point[1]) || false;
          },
          clone: function() {
            return new Point(this.x, this.y);
          },
          toString: function() {
            var f = Formatter.instance;
            return "{ x: " + f.number(this.x) + ", y: " + f.number(this.y) + " }";
          },
          _serialize: function(options) {
            var f = options.formatter;
            return [f.number(this.x), f.number(this.y)];
          },
          getLength: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          },
          setLength: function(length) {
            if (this.isZero()) {
              var angle = this._angle || 0;
              this._set(
                Math.cos(angle) * length,
                Math.sin(angle) * length
              );
            } else {
              var scale = length / this.getLength();
              if (Numerical.isZero(scale))
                this.getAngle();
              this._set(
                this.x * scale,
                this.y * scale
              );
            }
          },
          getAngle: function() {
            return this.getAngleInRadians.apply(this, arguments) * 180 / Math.PI;
          },
          setAngle: function(angle) {
            this.setAngleInRadians.call(this, angle * Math.PI / 180);
          },
          getAngleInDegrees: "#getAngle",
          setAngleInDegrees: "#setAngle",
          getAngleInRadians: function() {
            if (!arguments.length) {
              return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x);
            } else {
              var point = Point.read(arguments), div = this.getLength() * point.getLength();
              if (Numerical.isZero(div)) {
                return NaN;
              } else {
                var a = this.dot(point) / div;
                return Math.acos(a < -1 ? -1 : a > 1 ? 1 : a);
              }
            }
          },
          setAngleInRadians: function(angle) {
            this._angle = angle;
            if (!this.isZero()) {
              var length = this.getLength();
              this._set(
                Math.cos(angle) * length,
                Math.sin(angle) * length
              );
            }
          },
          getQuadrant: function() {
            return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
          }
        }, {
          beans: false,
          getDirectedAngle: function() {
            var point = Point.read(arguments);
            return Math.atan2(this.cross(point), this.dot(point)) * 180 / Math.PI;
          },
          getDistance: function() {
            var args = arguments, point = Point.read(args), x = point.x - this.x, y = point.y - this.y, d = x * x + y * y, squared = Base.read(args);
            return squared ? d : Math.sqrt(d);
          },
          normalize: function(length) {
            if (length === undefined2)
              length = 1;
            var current = this.getLength(), scale = current !== 0 ? length / current : 0, point = new Point(this.x * scale, this.y * scale);
            if (scale >= 0)
              point._angle = this._angle;
            return point;
          },
          rotate: function(angle, center) {
            if (angle === 0)
              return this.clone();
            angle = angle * Math.PI / 180;
            var point = center ? this.subtract(center) : this, sin = Math.sin(angle), cos = Math.cos(angle);
            point = new Point(
              point.x * cos - point.y * sin,
              point.x * sin + point.y * cos
            );
            return center ? point.add(center) : point;
          },
          transform: function(matrix) {
            return matrix ? matrix._transformPoint(this) : this;
          },
          add: function() {
            var point = Point.read(arguments);
            return new Point(this.x + point.x, this.y + point.y);
          },
          subtract: function() {
            var point = Point.read(arguments);
            return new Point(this.x - point.x, this.y - point.y);
          },
          multiply: function() {
            var point = Point.read(arguments);
            return new Point(this.x * point.x, this.y * point.y);
          },
          divide: function() {
            var point = Point.read(arguments);
            return new Point(this.x / point.x, this.y / point.y);
          },
          modulo: function() {
            var point = Point.read(arguments);
            return new Point(this.x % point.x, this.y % point.y);
          },
          negate: function() {
            return new Point(-this.x, -this.y);
          },
          isInside: function() {
            return Rectangle.read(arguments).contains(this);
          },
          isClose: function() {
            var args = arguments, point = Point.read(args), tolerance = Base.read(args);
            return this.getDistance(point) <= tolerance;
          },
          isCollinear: function() {
            var point = Point.read(arguments);
            return Point.isCollinear(this.x, this.y, point.x, point.y);
          },
          isColinear: "#isCollinear",
          isOrthogonal: function() {
            var point = Point.read(arguments);
            return Point.isOrthogonal(this.x, this.y, point.x, point.y);
          },
          isZero: function() {
            var isZero = Numerical.isZero;
            return isZero(this.x) && isZero(this.y);
          },
          isNaN: function() {
            return isNaN(this.x) || isNaN(this.y);
          },
          isInQuadrant: function(q) {
            return this.x * (q > 1 && q < 4 ? -1 : 1) >= 0 && this.y * (q > 2 ? -1 : 1) >= 0;
          },
          dot: function() {
            var point = Point.read(arguments);
            return this.x * point.x + this.y * point.y;
          },
          cross: function() {
            var point = Point.read(arguments);
            return this.x * point.y - this.y * point.x;
          },
          project: function() {
            var point = Point.read(arguments), scale = point.isZero() ? 0 : this.dot(point) / point.dot(point);
            return new Point(
              point.x * scale,
              point.y * scale
            );
          },
          statics: {
            min: function() {
              var args = arguments, point1 = Point.read(args), point2 = Point.read(args);
              return new Point(
                Math.min(point1.x, point2.x),
                Math.min(point1.y, point2.y)
              );
            },
            max: function() {
              var args = arguments, point1 = Point.read(args), point2 = Point.read(args);
              return new Point(
                Math.max(point1.x, point2.x),
                Math.max(point1.y, point2.y)
              );
            },
            random: function() {
              return new Point(Math.random(), Math.random());
            },
            isCollinear: function(x1, y1, x2, y2) {
              return Math.abs(x1 * y2 - y1 * x2) <= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2)) * 1e-8;
            },
            isOrthogonal: function(x1, y1, x2, y2) {
              return Math.abs(x1 * x2 + y1 * y2) <= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2)) * 1e-8;
            }
          }
        }, Base.each(["round", "ceil", "floor", "abs"], function(key) {
          var op = Math[key];
          this[key] = function() {
            return new Point(op(this.x), op(this.y));
          };
        }, {}));
        var LinkedPoint = Point.extend({
          initialize: function Point2(x, y, owner, setter) {
            this._x = x;
            this._y = y;
            this._owner = owner;
            this._setter = setter;
          },
          _set: function(x, y, _dontNotify) {
            this._x = x;
            this._y = y;
            if (!_dontNotify)
              this._owner[this._setter](this);
            return this;
          },
          getX: function() {
            return this._x;
          },
          setX: function(x) {
            this._x = x;
            this._owner[this._setter](this);
          },
          getY: function() {
            return this._y;
          },
          setY: function(y) {
            this._y = y;
            this._owner[this._setter](this);
          },
          isSelected: function() {
            return !!(this._owner._selection & this._getSelection());
          },
          setSelected: function(selected) {
            this._owner._changeSelection(this._getSelection(), selected);
          },
          _getSelection: function() {
            return this._setter === "setPosition" ? 4 : 0;
          }
        });
        var Size = Base.extend({
          _class: "Size",
          _readIndex: true,
          initialize: function Size2(arg0, arg1) {
            var type = typeof arg0, reading = this.__read, read = 0;
            if (type === "number") {
              var hasHeight = typeof arg1 === "number";
              this._set(arg0, hasHeight ? arg1 : arg0);
              if (reading)
                read = hasHeight ? 2 : 1;
            } else if (type === "undefined" || arg0 === null) {
              this._set(0, 0);
              if (reading)
                read = arg0 === null ? 1 : 0;
            } else {
              var obj = type === "string" ? arg0.split(/[\s,]+/) || [] : arg0;
              read = 1;
              if (Array.isArray(obj)) {
                this._set(+obj[0], +(obj.length > 1 ? obj[1] : obj[0]));
              } else if ("width" in obj) {
                this._set(obj.width || 0, obj.height || 0);
              } else if ("x" in obj) {
                this._set(obj.x || 0, obj.y || 0);
              } else {
                this._set(0, 0);
                read = 0;
              }
            }
            if (reading)
              this.__read = read;
            return this;
          },
          set: "#initialize",
          _set: function(width, height) {
            this.width = width;
            this.height = height;
            return this;
          },
          equals: function(size) {
            return size === this || size && (this.width === size.width && this.height === size.height || Array.isArray(size) && this.width === size[0] && this.height === size[1]) || false;
          },
          clone: function() {
            return new Size(this.width, this.height);
          },
          toString: function() {
            var f = Formatter.instance;
            return "{ width: " + f.number(this.width) + ", height: " + f.number(this.height) + " }";
          },
          _serialize: function(options) {
            var f = options.formatter;
            return [
              f.number(this.width),
              f.number(this.height)
            ];
          },
          add: function() {
            var size = Size.read(arguments);
            return new Size(this.width + size.width, this.height + size.height);
          },
          subtract: function() {
            var size = Size.read(arguments);
            return new Size(this.width - size.width, this.height - size.height);
          },
          multiply: function() {
            var size = Size.read(arguments);
            return new Size(this.width * size.width, this.height * size.height);
          },
          divide: function() {
            var size = Size.read(arguments);
            return new Size(this.width / size.width, this.height / size.height);
          },
          modulo: function() {
            var size = Size.read(arguments);
            return new Size(this.width % size.width, this.height % size.height);
          },
          negate: function() {
            return new Size(-this.width, -this.height);
          },
          isZero: function() {
            var isZero = Numerical.isZero;
            return isZero(this.width) && isZero(this.height);
          },
          isNaN: function() {
            return isNaN(this.width) || isNaN(this.height);
          },
          statics: {
            min: function(size1, size2) {
              return new Size(
                Math.min(size1.width, size2.width),
                Math.min(size1.height, size2.height)
              );
            },
            max: function(size1, size2) {
              return new Size(
                Math.max(size1.width, size2.width),
                Math.max(size1.height, size2.height)
              );
            },
            random: function() {
              return new Size(Math.random(), Math.random());
            }
          }
        }, Base.each(["round", "ceil", "floor", "abs"], function(key) {
          var op = Math[key];
          this[key] = function() {
            return new Size(op(this.width), op(this.height));
          };
        }, {}));
        var LinkedSize = Size.extend({
          initialize: function Size2(width, height, owner, setter) {
            this._width = width;
            this._height = height;
            this._owner = owner;
            this._setter = setter;
          },
          _set: function(width, height, _dontNotify) {
            this._width = width;
            this._height = height;
            if (!_dontNotify)
              this._owner[this._setter](this);
            return this;
          },
          getWidth: function() {
            return this._width;
          },
          setWidth: function(width) {
            this._width = width;
            this._owner[this._setter](this);
          },
          getHeight: function() {
            return this._height;
          },
          setHeight: function(height) {
            this._height = height;
            this._owner[this._setter](this);
          }
        });
        var Rectangle = Base.extend({
          _class: "Rectangle",
          _readIndex: true,
          beans: true,
          initialize: function Rectangle2(arg0, arg1, arg2, arg3) {
            var args = arguments, type = typeof arg0, read;
            if (type === "number") {
              this._set(arg0, arg1, arg2, arg3);
              read = 4;
            } else if (type === "undefined" || arg0 === null) {
              this._set(0, 0, 0, 0);
              read = arg0 === null ? 1 : 0;
            } else if (args.length === 1) {
              if (Array.isArray(arg0)) {
                this._set.apply(this, arg0);
                read = 1;
              } else if (arg0.x !== undefined2 || arg0.width !== undefined2) {
                this._set(
                  arg0.x || 0,
                  arg0.y || 0,
                  arg0.width || 0,
                  arg0.height || 0
                );
                read = 1;
              } else if (arg0.from === undefined2 && arg0.to === undefined2) {
                this._set(0, 0, 0, 0);
                if (Base.readSupported(args, this)) {
                  read = 1;
                }
              }
            }
            if (read === undefined2) {
              var frm = Point.readNamed(args, "from"), next = Base.peek(args), x = frm.x, y = frm.y, width, height;
              if (next && next.x !== undefined2 || Base.hasNamed(args, "to")) {
                var to = Point.readNamed(args, "to");
                width = to.x - x;
                height = to.y - y;
                if (width < 0) {
                  x = to.x;
                  width = -width;
                }
                if (height < 0) {
                  y = to.y;
                  height = -height;
                }
              } else {
                var size = Size.read(args);
                width = size.width;
                height = size.height;
              }
              this._set(x, y, width, height);
              read = args.__index;
            }
            var filtered = args.__filtered;
            if (filtered)
              this.__filtered = filtered;
            if (this.__read)
              this.__read = read;
            return this;
          },
          set: "#initialize",
          _set: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            return this;
          },
          clone: function() {
            return new Rectangle(this.x, this.y, this.width, this.height);
          },
          equals: function(rect) {
            var rt = Base.isPlainValue(rect) ? Rectangle.read(arguments) : rect;
            return rt === this || rt && this.x === rt.x && this.y === rt.y && this.width === rt.width && this.height === rt.height || false;
          },
          toString: function() {
            var f = Formatter.instance;
            return "{ x: " + f.number(this.x) + ", y: " + f.number(this.y) + ", width: " + f.number(this.width) + ", height: " + f.number(this.height) + " }";
          },
          _serialize: function(options) {
            var f = options.formatter;
            return [
              f.number(this.x),
              f.number(this.y),
              f.number(this.width),
              f.number(this.height)
            ];
          },
          getPoint: function(_dontLink) {
            var ctor = _dontLink ? Point : LinkedPoint;
            return new ctor(this.x, this.y, this, "setPoint");
          },
          setPoint: function() {
            var point = Point.read(arguments);
            this.x = point.x;
            this.y = point.y;
          },
          getSize: function(_dontLink) {
            var ctor = _dontLink ? Size : LinkedSize;
            return new ctor(this.width, this.height, this, "setSize");
          },
          _fw: 1,
          _fh: 1,
          setSize: function() {
            var size = Size.read(arguments), sx = this._sx, sy = this._sy, w = size.width, h = size.height;
            if (sx) {
              this.x += (this.width - w) * sx;
            }
            if (sy) {
              this.y += (this.height - h) * sy;
            }
            this.width = w;
            this.height = h;
            this._fw = this._fh = 1;
          },
          getLeft: function() {
            return this.x;
          },
          setLeft: function(left) {
            if (!this._fw) {
              var amount = left - this.x;
              this.width -= this._sx === 0.5 ? amount * 2 : amount;
            }
            this.x = left;
            this._sx = this._fw = 0;
          },
          getTop: function() {
            return this.y;
          },
          setTop: function(top) {
            if (!this._fh) {
              var amount = top - this.y;
              this.height -= this._sy === 0.5 ? amount * 2 : amount;
            }
            this.y = top;
            this._sy = this._fh = 0;
          },
          getRight: function() {
            return this.x + this.width;
          },
          setRight: function(right) {
            if (!this._fw) {
              var amount = right - this.x;
              this.width = this._sx === 0.5 ? amount * 2 : amount;
            }
            this.x = right - this.width;
            this._sx = 1;
            this._fw = 0;
          },
          getBottom: function() {
            return this.y + this.height;
          },
          setBottom: function(bottom) {
            if (!this._fh) {
              var amount = bottom - this.y;
              this.height = this._sy === 0.5 ? amount * 2 : amount;
            }
            this.y = bottom - this.height;
            this._sy = 1;
            this._fh = 0;
          },
          getCenterX: function() {
            return this.x + this.width / 2;
          },
          setCenterX: function(x) {
            if (this._fw || this._sx === 0.5) {
              this.x = x - this.width / 2;
            } else {
              if (this._sx) {
                this.x += (x - this.x) * 2 * this._sx;
              }
              this.width = (x - this.x) * 2;
            }
            this._sx = 0.5;
            this._fw = 0;
          },
          getCenterY: function() {
            return this.y + this.height / 2;
          },
          setCenterY: function(y) {
            if (this._fh || this._sy === 0.5) {
              this.y = y - this.height / 2;
            } else {
              if (this._sy) {
                this.y += (y - this.y) * 2 * this._sy;
              }
              this.height = (y - this.y) * 2;
            }
            this._sy = 0.5;
            this._fh = 0;
          },
          getCenter: function(_dontLink) {
            var ctor = _dontLink ? Point : LinkedPoint;
            return new ctor(this.getCenterX(), this.getCenterY(), this, "setCenter");
          },
          setCenter: function() {
            var point = Point.read(arguments);
            this.setCenterX(point.x);
            this.setCenterY(point.y);
            return this;
          },
          getArea: function() {
            return this.width * this.height;
          },
          isEmpty: function() {
            return this.width === 0 || this.height === 0;
          },
          contains: function(arg) {
            return arg && arg.width !== undefined2 || (Array.isArray(arg) ? arg : arguments).length === 4 ? this._containsRectangle(Rectangle.read(arguments)) : this._containsPoint(Point.read(arguments));
          },
          _containsPoint: function(point) {
            var x = point.x, y = point.y;
            return x >= this.x && y >= this.y && x <= this.x + this.width && y <= this.y + this.height;
          },
          _containsRectangle: function(rect) {
            var x = rect.x, y = rect.y;
            return x >= this.x && y >= this.y && x + rect.width <= this.x + this.width && y + rect.height <= this.y + this.height;
          },
          intersects: function() {
            var rect = Rectangle.read(arguments), epsilon = Base.read(arguments) || 0;
            return rect.x + rect.width > this.x - epsilon && rect.y + rect.height > this.y - epsilon && rect.x < this.x + this.width + epsilon && rect.y < this.y + this.height + epsilon;
          },
          intersect: function() {
            var rect = Rectangle.read(arguments), x1 = Math.max(this.x, rect.x), y1 = Math.max(this.y, rect.y), x2 = Math.min(this.x + this.width, rect.x + rect.width), y2 = Math.min(this.y + this.height, rect.y + rect.height);
            return new Rectangle(x1, y1, x2 - x1, y2 - y1);
          },
          unite: function() {
            var rect = Rectangle.read(arguments), x1 = Math.min(this.x, rect.x), y1 = Math.min(this.y, rect.y), x2 = Math.max(this.x + this.width, rect.x + rect.width), y2 = Math.max(this.y + this.height, rect.y + rect.height);
            return new Rectangle(x1, y1, x2 - x1, y2 - y1);
          },
          include: function() {
            var point = Point.read(arguments);
            var x1 = Math.min(this.x, point.x), y1 = Math.min(this.y, point.y), x2 = Math.max(this.x + this.width, point.x), y2 = Math.max(this.y + this.height, point.y);
            return new Rectangle(x1, y1, x2 - x1, y2 - y1);
          },
          expand: function() {
            var amount = Size.read(arguments), hor = amount.width, ver = amount.height;
            return new Rectangle(
              this.x - hor / 2,
              this.y - ver / 2,
              this.width + hor,
              this.height + ver
            );
          },
          scale: function(hor, ver) {
            return this.expand(
              this.width * hor - this.width,
              this.height * (ver === undefined2 ? hor : ver) - this.height
            );
          }
        }, Base.each(
          [
            ["Top", "Left"],
            ["Top", "Right"],
            ["Bottom", "Left"],
            ["Bottom", "Right"],
            ["Left", "Center"],
            ["Top", "Center"],
            ["Right", "Center"],
            ["Bottom", "Center"]
          ],
          function(parts, index) {
            var part = parts.join(""), xFirst = /^[RL]/.test(part);
            if (index >= 4)
              parts[1] += xFirst ? "Y" : "X";
            var x = parts[xFirst ? 0 : 1], y = parts[xFirst ? 1 : 0], getX = "get" + x, getY = "get" + y, setX = "set" + x, setY = "set" + y, get2 = "get" + part, set2 = "set" + part;
            this[get2] = function(_dontLink) {
              var ctor = _dontLink ? Point : LinkedPoint;
              return new ctor(this[getX](), this[getY](), this, set2);
            };
            this[set2] = function() {
              var point = Point.read(arguments);
              this[setX](point.x);
              this[setY](point.y);
            };
          },
          {
            beans: true
          }
        ));
        var LinkedRectangle = Rectangle.extend(
          {
            initialize: function Rectangle2(x, y, width, height, owner, setter) {
              this._set(x, y, width, height, true);
              this._owner = owner;
              this._setter = setter;
            },
            _set: function(x, y, width, height, _dontNotify) {
              this._x = x;
              this._y = y;
              this._width = width;
              this._height = height;
              if (!_dontNotify)
                this._owner[this._setter](this);
              return this;
            }
          },
          new function() {
            var proto = Rectangle.prototype;
            return Base.each(
              ["x", "y", "width", "height"],
              function(key) {
                var part = Base.capitalize(key), internal = "_" + key;
                this["get" + part] = function() {
                  return this[internal];
                };
                this["set" + part] = function(value) {
                  this[internal] = value;
                  if (!this._dontNotify)
                    this._owner[this._setter](this);
                };
              },
              Base.each(
                [
                  "Point",
                  "Size",
                  "Center",
                  "Left",
                  "Top",
                  "Right",
                  "Bottom",
                  "CenterX",
                  "CenterY",
                  "TopLeft",
                  "TopRight",
                  "BottomLeft",
                  "BottomRight",
                  "LeftCenter",
                  "TopCenter",
                  "RightCenter",
                  "BottomCenter"
                ],
                function(key) {
                  var name = "set" + key;
                  this[name] = function() {
                    this._dontNotify = true;
                    proto[name].apply(this, arguments);
                    this._dontNotify = false;
                    this._owner[this._setter](this);
                  };
                },
                {
                  isSelected: function() {
                    return !!(this._owner._selection & 2);
                  },
                  setSelected: function(selected) {
                    var owner = this._owner;
                    if (owner._changeSelection) {
                      owner._changeSelection(2, selected);
                    }
                  }
                }
              )
            );
          }()
        );
        var Matrix = Base.extend({
          _class: "Matrix",
          initialize: function Matrix2(arg, _dontNotify) {
            var args = arguments, count = args.length, ok = true;
            if (count >= 6) {
              this._set.apply(this, args);
            } else if (count === 1 || count === 2) {
              if (arg instanceof Matrix2) {
                this._set(
                  arg._a,
                  arg._b,
                  arg._c,
                  arg._d,
                  arg._tx,
                  arg._ty,
                  _dontNotify
                );
              } else if (Array.isArray(arg)) {
                this._set.apply(
                  this,
                  _dontNotify ? arg.concat([_dontNotify]) : arg
                );
              } else {
                ok = false;
              }
            } else if (!count) {
              this.reset();
            } else {
              ok = false;
            }
            if (!ok) {
              throw new Error("Unsupported matrix parameters");
            }
            return this;
          },
          set: "#initialize",
          _set: function(a, b, c, d, tx, ty, _dontNotify) {
            this._a = a;
            this._b = b;
            this._c = c;
            this._d = d;
            this._tx = tx;
            this._ty = ty;
            if (!_dontNotify)
              this._changed();
            return this;
          },
          _serialize: function(options, dictionary) {
            return Base.serialize(this.getValues(), options, true, dictionary);
          },
          _changed: function() {
            var owner = this._owner;
            if (owner) {
              if (owner._applyMatrix) {
                owner.transform(null, true);
              } else {
                owner._changed(25);
              }
            }
          },
          clone: function() {
            return new Matrix(
              this._a,
              this._b,
              this._c,
              this._d,
              this._tx,
              this._ty
            );
          },
          equals: function(mx) {
            return mx === this || mx && this._a === mx._a && this._b === mx._b && this._c === mx._c && this._d === mx._d && this._tx === mx._tx && this._ty === mx._ty;
          },
          toString: function() {
            var f = Formatter.instance;
            return "[[" + [
              f.number(this._a),
              f.number(this._c),
              f.number(this._tx)
            ].join(", ") + "], [" + [
              f.number(this._b),
              f.number(this._d),
              f.number(this._ty)
            ].join(", ") + "]]";
          },
          reset: function(_dontNotify) {
            this._a = this._d = 1;
            this._b = this._c = this._tx = this._ty = 0;
            if (!_dontNotify)
              this._changed();
            return this;
          },
          apply: function(recursively, _setApplyMatrix) {
            var owner = this._owner;
            if (owner) {
              owner.transform(null, Base.pick(recursively, true), _setApplyMatrix);
              return this.isIdentity();
            }
            return false;
          },
          translate: function() {
            var point = Point.read(arguments), x = point.x, y = point.y;
            this._tx += x * this._a + y * this._c;
            this._ty += x * this._b + y * this._d;
            this._changed();
            return this;
          },
          scale: function() {
            var args = arguments, scale = Point.read(args), center = Point.read(args, 0, { readNull: true });
            if (center)
              this.translate(center);
            this._a *= scale.x;
            this._b *= scale.x;
            this._c *= scale.y;
            this._d *= scale.y;
            if (center)
              this.translate(center.negate());
            this._changed();
            return this;
          },
          rotate: function(angle) {
            angle *= Math.PI / 180;
            var center = Point.read(arguments, 1), x = center.x, y = center.y, cos = Math.cos(angle), sin = Math.sin(angle), tx = x - x * cos + y * sin, ty = y - x * sin - y * cos, a = this._a, b = this._b, c = this._c, d = this._d;
            this._a = cos * a + sin * c;
            this._b = cos * b + sin * d;
            this._c = -sin * a + cos * c;
            this._d = -sin * b + cos * d;
            this._tx += tx * a + ty * c;
            this._ty += tx * b + ty * d;
            this._changed();
            return this;
          },
          shear: function() {
            var args = arguments, shear = Point.read(args), center = Point.read(args, 0, { readNull: true });
            if (center)
              this.translate(center);
            var a = this._a, b = this._b;
            this._a += shear.y * this._c;
            this._b += shear.y * this._d;
            this._c += shear.x * a;
            this._d += shear.x * b;
            if (center)
              this.translate(center.negate());
            this._changed();
            return this;
          },
          skew: function() {
            var args = arguments, skew = Point.read(args), center = Point.read(args, 0, { readNull: true }), toRadians = Math.PI / 180, shear = new Point(
              Math.tan(skew.x * toRadians),
              Math.tan(skew.y * toRadians)
            );
            return this.shear(shear, center);
          },
          append: function(mx, _dontNotify) {
            if (mx) {
              var a1 = this._a, b1 = this._b, c1 = this._c, d1 = this._d, a2 = mx._a, b2 = mx._c, c2 = mx._b, d2 = mx._d, tx2 = mx._tx, ty2 = mx._ty;
              this._a = a2 * a1 + c2 * c1;
              this._c = b2 * a1 + d2 * c1;
              this._b = a2 * b1 + c2 * d1;
              this._d = b2 * b1 + d2 * d1;
              this._tx += tx2 * a1 + ty2 * c1;
              this._ty += tx2 * b1 + ty2 * d1;
              if (!_dontNotify)
                this._changed();
            }
            return this;
          },
          prepend: function(mx, _dontNotify) {
            if (mx) {
              var a1 = this._a, b1 = this._b, c1 = this._c, d1 = this._d, tx1 = this._tx, ty1 = this._ty, a2 = mx._a, b2 = mx._c, c2 = mx._b, d2 = mx._d, tx2 = mx._tx, ty2 = mx._ty;
              this._a = a2 * a1 + b2 * b1;
              this._c = a2 * c1 + b2 * d1;
              this._b = c2 * a1 + d2 * b1;
              this._d = c2 * c1 + d2 * d1;
              this._tx = a2 * tx1 + b2 * ty1 + tx2;
              this._ty = c2 * tx1 + d2 * ty1 + ty2;
              if (!_dontNotify)
                this._changed();
            }
            return this;
          },
          appended: function(mx) {
            return this.clone().append(mx);
          },
          prepended: function(mx) {
            return this.clone().prepend(mx);
          },
          invert: function() {
            var a = this._a, b = this._b, c = this._c, d = this._d, tx = this._tx, ty = this._ty, det = a * d - b * c, res = null;
            if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
              this._a = d / det;
              this._b = -b / det;
              this._c = -c / det;
              this._d = a / det;
              this._tx = (c * ty - d * tx) / det;
              this._ty = (b * tx - a * ty) / det;
              res = this;
            }
            return res;
          },
          inverted: function() {
            return this.clone().invert();
          },
          concatenate: "#append",
          preConcatenate: "#prepend",
          chain: "#appended",
          _shiftless: function() {
            return new Matrix(this._a, this._b, this._c, this._d, 0, 0);
          },
          _orNullIfIdentity: function() {
            return this.isIdentity() ? null : this;
          },
          isIdentity: function() {
            return this._a === 1 && this._b === 0 && this._c === 0 && this._d === 1 && this._tx === 0 && this._ty === 0;
          },
          isInvertible: function() {
            var det = this._a * this._d - this._c * this._b;
            return det && !isNaN(det) && isFinite(this._tx) && isFinite(this._ty);
          },
          isSingular: function() {
            return !this.isInvertible();
          },
          transform: function(src, dst, count) {
            return arguments.length < 3 ? this._transformPoint(Point.read(arguments)) : this._transformCoordinates(src, dst, count);
          },
          _transformPoint: function(point, dest, _dontNotify) {
            var x = point.x, y = point.y;
            if (!dest)
              dest = new Point();
            return dest._set(
              x * this._a + y * this._c + this._tx,
              x * this._b + y * this._d + this._ty,
              _dontNotify
            );
          },
          _transformCoordinates: function(src, dst, count) {
            for (var i2 = 0, max = 2 * count; i2 < max; i2 += 2) {
              var x = src[i2], y = src[i2 + 1];
              dst[i2] = x * this._a + y * this._c + this._tx;
              dst[i2 + 1] = x * this._b + y * this._d + this._ty;
            }
            return dst;
          },
          _transformCorners: function(rect) {
            var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height, coords = [x1, y1, x2, y1, x2, y2, x1, y2];
            return this._transformCoordinates(coords, coords, 4);
          },
          _transformBounds: function(bounds, dest, _dontNotify) {
            var coords = this._transformCorners(bounds), min = coords.slice(0, 2), max = min.slice();
            for (var i2 = 2; i2 < 8; i2++) {
              var val = coords[i2], j = i2 & 1;
              if (val < min[j]) {
                min[j] = val;
              } else if (val > max[j]) {
                max[j] = val;
              }
            }
            if (!dest)
              dest = new Rectangle();
            return dest._set(
              min[0],
              min[1],
              max[0] - min[0],
              max[1] - min[1],
              _dontNotify
            );
          },
          inverseTransform: function() {
            return this._inverseTransform(Point.read(arguments));
          },
          _inverseTransform: function(point, dest, _dontNotify) {
            var a = this._a, b = this._b, c = this._c, d = this._d, tx = this._tx, ty = this._ty, det = a * d - b * c, res = null;
            if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
              var x = point.x - this._tx, y = point.y - this._ty;
              if (!dest)
                dest = new Point();
              res = dest._set(
                (x * d - y * c) / det,
                (y * a - x * b) / det,
                _dontNotify
              );
            }
            return res;
          },
          decompose: function() {
            var a = this._a, b = this._b, c = this._c, d = this._d, det = a * d - b * c, sqrt = Math.sqrt, atan2 = Math.atan2, degrees = 180 / Math.PI, rotate, scale, skew;
            if (a !== 0 || b !== 0) {
              var r = sqrt(a * a + b * b);
              rotate = Math.acos(a / r) * (b > 0 ? 1 : -1);
              scale = [r, det / r];
              skew = [atan2(a * c + b * d, r * r), 0];
            } else if (c !== 0 || d !== 0) {
              var s = sqrt(c * c + d * d);
              rotate = Math.asin(c / s) * (d > 0 ? 1 : -1);
              scale = [det / s, s];
              skew = [0, atan2(a * c + b * d, s * s)];
            } else {
              rotate = 0;
              skew = scale = [0, 0];
            }
            return {
              translation: this.getTranslation(),
              rotation: rotate * degrees,
              scaling: new Point(scale),
              skewing: new Point(skew[0] * degrees, skew[1] * degrees)
            };
          },
          getValues: function() {
            return [this._a, this._b, this._c, this._d, this._tx, this._ty];
          },
          getTranslation: function() {
            return new Point(this._tx, this._ty);
          },
          getScaling: function() {
            return this.decompose().scaling;
          },
          getRotation: function() {
            return this.decompose().rotation;
          },
          applyToContext: function(ctx) {
            if (!this.isIdentity()) {
              ctx.transform(
                this._a,
                this._b,
                this._c,
                this._d,
                this._tx,
                this._ty
              );
            }
          }
        }, Base.each(["a", "b", "c", "d", "tx", "ty"], function(key) {
          var part = Base.capitalize(key), prop = "_" + key;
          this["get" + part] = function() {
            return this[prop];
          };
          this["set" + part] = function(value) {
            this[prop] = value;
            this._changed();
          };
        }, {}));
        var Line = Base.extend({
          _class: "Line",
          initialize: function Line2(arg0, arg1, arg2, arg3, arg4) {
            var asVector = false;
            if (arguments.length >= 4) {
              this._px = arg0;
              this._py = arg1;
              this._vx = arg2;
              this._vy = arg3;
              asVector = arg4;
            } else {
              this._px = arg0.x;
              this._py = arg0.y;
              this._vx = arg1.x;
              this._vy = arg1.y;
              asVector = arg2;
            }
            if (!asVector) {
              this._vx -= this._px;
              this._vy -= this._py;
            }
          },
          getPoint: function() {
            return new Point(this._px, this._py);
          },
          getVector: function() {
            return new Point(this._vx, this._vy);
          },
          getLength: function() {
            return this.getVector().getLength();
          },
          intersect: function(line, isInfinite) {
            return Line.intersect(
              this._px,
              this._py,
              this._vx,
              this._vy,
              line._px,
              line._py,
              line._vx,
              line._vy,
              true,
              isInfinite
            );
          },
          getSide: function(point, isInfinite) {
            return Line.getSide(
              this._px,
              this._py,
              this._vx,
              this._vy,
              point.x,
              point.y,
              true,
              isInfinite
            );
          },
          getDistance: function(point) {
            return Math.abs(this.getSignedDistance(point));
          },
          getSignedDistance: function(point) {
            return Line.getSignedDistance(
              this._px,
              this._py,
              this._vx,
              this._vy,
              point.x,
              point.y,
              true
            );
          },
          isCollinear: function(line) {
            return Point.isCollinear(this._vx, this._vy, line._vx, line._vy);
          },
          isOrthogonal: function(line) {
            return Point.isOrthogonal(this._vx, this._vy, line._vx, line._vy);
          },
          statics: {
            intersect: function(p1x, p1y, v1x, v1y, p2x, p2y, v2x, v2y, asVector, isInfinite) {
              if (!asVector) {
                v1x -= p1x;
                v1y -= p1y;
                v2x -= p2x;
                v2y -= p2y;
              }
              var cross = v1x * v2y - v1y * v2x;
              if (!Numerical.isMachineZero(cross)) {
                var dx = p1x - p2x, dy = p1y - p2y, u1 = (v2x * dy - v2y * dx) / cross, u2 = (v1x * dy - v1y * dx) / cross, epsilon = 1e-12, uMin = -epsilon, uMax = 1 + epsilon;
                if (isInfinite || uMin < u1 && u1 < uMax && uMin < u2 && u2 < uMax) {
                  if (!isInfinite) {
                    u1 = u1 <= 0 ? 0 : u1 >= 1 ? 1 : u1;
                  }
                  return new Point(
                    p1x + u1 * v1x,
                    p1y + u1 * v1y
                  );
                }
              }
            },
            getSide: function(px, py, vx, vy, x, y, asVector, isInfinite) {
              if (!asVector) {
                vx -= px;
                vy -= py;
              }
              var v2x = x - px, v2y = y - py, ccw = v2x * vy - v2y * vx;
              if (!isInfinite && Numerical.isMachineZero(ccw)) {
                ccw = (v2x * vx + v2x * vx) / (vx * vx + vy * vy);
                if (ccw >= 0 && ccw <= 1)
                  ccw = 0;
              }
              return ccw < 0 ? -1 : ccw > 0 ? 1 : 0;
            },
            getSignedDistance: function(px, py, vx, vy, x, y, asVector) {
              if (!asVector) {
                vx -= px;
                vy -= py;
              }
              return vx === 0 ? vy > 0 ? x - px : px - x : vy === 0 ? vx < 0 ? y - py : py - y : ((x - px) * vy - (y - py) * vx) / (vy > vx ? vy * Math.sqrt(1 + vx * vx / (vy * vy)) : vx * Math.sqrt(1 + vy * vy / (vx * vx)));
            },
            getDistance: function(px, py, vx, vy, x, y, asVector) {
              return Math.abs(
                Line.getSignedDistance(px, py, vx, vy, x, y, asVector)
              );
            }
          }
        });
        var Project = PaperScopeItem.extend({
          _class: "Project",
          _list: "projects",
          _reference: "project",
          _compactSerialize: true,
          initialize: function Project2(element) {
            PaperScopeItem.call(this, true);
            this._children = [];
            this._namedChildren = {};
            this._activeLayer = null;
            this._currentStyle = new Style(null, null, this);
            this._view = View.create(
              this,
              element || CanvasProvider.getCanvas(1, 1)
            );
            this._selectionItems = {};
            this._selectionCount = 0;
            this._updateVersion = 0;
          },
          _serialize: function(options, dictionary) {
            return Base.serialize(this._children, options, true, dictionary);
          },
          _changed: function(flags, item) {
            if (flags & 1) {
              var view = this._view;
              if (view) {
                view._needsUpdate = true;
                if (!view._requested && view._autoUpdate)
                  view.requestUpdate();
              }
            }
            var changes = this._changes;
            if (changes && item) {
              var changesById = this._changesById, id = item._id, entry = changesById[id];
              if (entry) {
                entry.flags |= flags;
              } else {
                changes.push(changesById[id] = { item, flags });
              }
            }
          },
          clear: function() {
            var children = this._children;
            for (var i2 = children.length - 1; i2 >= 0; i2--)
              children[i2].remove();
          },
          isEmpty: function() {
            return !this._children.length;
          },
          remove: function remove2() {
            if (!remove2.base.call(this))
              return false;
            if (this._view)
              this._view.remove();
            return true;
          },
          getView: function() {
            return this._view;
          },
          getCurrentStyle: function() {
            return this._currentStyle;
          },
          setCurrentStyle: function(style) {
            this._currentStyle.set(style);
          },
          getIndex: function() {
            return this._index;
          },
          getOptions: function() {
            return this._scope.settings;
          },
          getLayers: function() {
            return this._children;
          },
          getActiveLayer: function() {
            return this._activeLayer || new Layer({ project: this, insert: true });
          },
          getSymbolDefinitions: function() {
            var definitions = [], ids = {};
            this.getItems({
              class: SymbolItem,
              match: function(item) {
                var definition = item._definition, id = definition._id;
                if (!ids[id]) {
                  ids[id] = true;
                  definitions.push(definition);
                }
                return false;
              }
            });
            return definitions;
          },
          getSymbols: "getSymbolDefinitions",
          getSelectedItems: function() {
            var selectionItems = this._selectionItems, items = [];
            for (var id in selectionItems) {
              var item = selectionItems[id], selection = item._selection;
              if (selection & 1 && item.isInserted()) {
                items.push(item);
              } else if (!selection) {
                this._updateSelection(item);
              }
            }
            return items;
          },
          _updateSelection: function(item) {
            var id = item._id, selectionItems = this._selectionItems;
            if (item._selection) {
              if (selectionItems[id] !== item) {
                this._selectionCount++;
                selectionItems[id] = item;
              }
            } else if (selectionItems[id] === item) {
              this._selectionCount--;
              delete selectionItems[id];
            }
          },
          selectAll: function() {
            var children = this._children;
            for (var i2 = 0, l = children.length; i2 < l; i2++)
              children[i2].setFullySelected(true);
          },
          deselectAll: function() {
            var selectionItems = this._selectionItems;
            for (var i2 in selectionItems)
              selectionItems[i2].setFullySelected(false);
          },
          addLayer: function(layer) {
            return this.insertLayer(undefined2, layer);
          },
          insertLayer: function(index, layer) {
            if (layer instanceof Layer) {
              layer._remove(false, true);
              Base.splice(this._children, [layer], index, 0);
              layer._setProject(this, true);
              var name = layer._name;
              if (name)
                layer.setName(name);
              if (this._changes)
                layer._changed(5);
              if (!this._activeLayer)
                this._activeLayer = layer;
            } else {
              layer = null;
            }
            return layer;
          },
          _insertItem: function(index, item, _created) {
            item = this.insertLayer(index, item) || (this._activeLayer || this._insertItem(
              undefined2,
              new Layer(Item.NO_INSERT),
              true
            )).insertChild(index, item);
            if (_created && item.activate)
              item.activate();
            return item;
          },
          getItems: function(options) {
            return Item._getItems(this, options);
          },
          getItem: function(options) {
            return Item._getItems(this, options, null, null, true)[0] || null;
          },
          importJSON: function(json) {
            this.activate();
            var layer = this._activeLayer;
            return Base.importJSON(json, layer && layer.isEmpty() && layer);
          },
          removeOn: function(type) {
            var sets = this._removeSets;
            if (sets) {
              if (type === "mouseup")
                sets.mousedrag = null;
              var set2 = sets[type];
              if (set2) {
                for (var id in set2) {
                  var item = set2[id];
                  for (var key in sets) {
                    var other = sets[key];
                    if (other && other != set2)
                      delete other[item._id];
                  }
                  item.remove();
                }
                sets[type] = null;
              }
            }
          },
          draw: function(ctx, matrix, pixelRatio) {
            this._updateVersion++;
            ctx.save();
            matrix.applyToContext(ctx);
            var children = this._children, param = new Base({
              offset: new Point(0, 0),
              pixelRatio,
              viewMatrix: matrix.isIdentity() ? null : matrix,
              matrices: [new Matrix()],
              updateMatrix: true
            });
            for (var i2 = 0, l = children.length; i2 < l; i2++) {
              children[i2].draw(ctx, param);
            }
            ctx.restore();
            if (this._selectionCount > 0) {
              ctx.save();
              ctx.strokeWidth = 1;
              var items = this._selectionItems, size = this._scope.settings.handleSize, version = this._updateVersion;
              for (var id in items) {
                items[id]._drawSelection(ctx, matrix, size, items, version);
              }
              ctx.restore();
            }
          }
        });
        var Item = Base.extend(
          Emitter,
          {
            statics: {
              extend: function extend2(src) {
                if (src._serializeFields)
                  src._serializeFields = Base.set(
                    {},
                    this.prototype._serializeFields,
                    src._serializeFields
                  );
                return extend2.base.apply(this, arguments);
              },
              INSERT: { insert: true },
              NO_INSERT: { insert: false }
            },
            _class: "Item",
            _name: null,
            _applyMatrix: true,
            _canApplyMatrix: true,
            _canScaleStroke: false,
            _pivot: null,
            _visible: true,
            _blendMode: "normal",
            _opacity: 1,
            _locked: false,
            _guide: false,
            _clipMask: false,
            _selection: 0,
            _selectBounds: true,
            _selectChildren: false,
            _serializeFields: {
              name: null,
              applyMatrix: null,
              matrix: new Matrix(),
              pivot: null,
              visible: true,
              blendMode: "normal",
              opacity: 1,
              locked: false,
              guide: false,
              clipMask: false,
              selected: false,
              data: {}
            },
            _prioritize: ["applyMatrix"]
          },
          new function() {
            var handlers = [
              "onMouseDown",
              "onMouseUp",
              "onMouseDrag",
              "onClick",
              "onDoubleClick",
              "onMouseMove",
              "onMouseEnter",
              "onMouseLeave"
            ];
            return Base.each(
              handlers,
              function(name) {
                this._events[name] = {
                  install: function(type) {
                    this.getView()._countItemEvent(type, 1);
                  },
                  uninstall: function(type) {
                    this.getView()._countItemEvent(type, -1);
                  }
                };
              },
              {
                _events: {
                  onFrame: {
                    install: function() {
                      this.getView()._animateItem(this, true);
                    },
                    uninstall: function() {
                      this.getView()._animateItem(this, false);
                    }
                  },
                  onLoad: {},
                  onError: {}
                },
                statics: {
                  _itemHandlers: handlers
                }
              }
            );
          }(),
          {
            initialize: function Item2() {
            },
            _initialize: function(props, point) {
              var hasProps = props && Base.isPlainObject(props), internal = hasProps && props.internal === true, matrix = this._matrix = new Matrix(), project = hasProps && props.project || paper2.project, settings = paper2.settings;
              this._id = internal ? null : UID.get();
              this._parent = this._index = null;
              this._applyMatrix = this._canApplyMatrix && settings.applyMatrix;
              if (point)
                matrix.translate(point);
              matrix._owner = this;
              this._style = new Style(project._currentStyle, this, project);
              if (internal || hasProps && props.insert == false || !settings.insertItems && !(hasProps && props.insert == true)) {
                this._setProject(project);
              } else {
                (hasProps && props.parent || project)._insertItem(undefined2, this, true);
              }
              if (hasProps && props !== Item.NO_INSERT && props !== Item.INSERT) {
                this.set(props, {
                  internal: true,
                  insert: true,
                  project: true,
                  parent: true
                });
              }
              return hasProps;
            },
            _serialize: function(options, dictionary) {
              var props = {}, that = this;
              function serialize(fields) {
                for (var key in fields) {
                  var value = that[key];
                  if (!Base.equals(value, key === "leading" ? fields.fontSize * 1.2 : fields[key])) {
                    props[key] = Base.serialize(
                      value,
                      options,
                      key !== "data",
                      dictionary
                    );
                  }
                }
              }
              serialize(this._serializeFields);
              if (!(this instanceof Group))
                serialize(this._style._defaults);
              return [this._class, props];
            },
            _changed: function(flags) {
              var symbol = this._symbol, cacheParent = this._parent || symbol, project = this._project;
              if (flags & 8) {
                this._bounds = this._position = this._decomposed = undefined2;
              }
              if (flags & 16) {
                this._globalMatrix = undefined2;
              }
              if (cacheParent && flags & 72) {
                Item._clearBoundsCache(cacheParent);
              }
              if (flags & 2) {
                Item._clearBoundsCache(this);
              }
              if (project)
                project._changed(flags, this);
              if (symbol)
                symbol._changed(flags);
            },
            getId: function() {
              return this._id;
            },
            getName: function() {
              return this._name;
            },
            setName: function(name) {
              if (this._name)
                this._removeNamed();
              if (name === +name + "")
                throw new Error(
                  "Names consisting only of numbers are not supported."
                );
              var owner = this._getOwner();
              if (name && owner) {
                var children = owner._children, namedChildren = owner._namedChildren;
                (namedChildren[name] = namedChildren[name] || []).push(this);
                if (!(name in children))
                  children[name] = this;
              }
              this._name = name || undefined2;
              this._changed(256);
            },
            getStyle: function() {
              return this._style;
            },
            setStyle: function(style) {
              this.getStyle().set(style);
            }
          },
          Base.each(
            ["locked", "visible", "blendMode", "opacity", "guide"],
            function(name) {
              var part = Base.capitalize(name), key = "_" + name, flags = {
                locked: 256,
                visible: 265
              };
              this["get" + part] = function() {
                return this[key];
              };
              this["set" + part] = function(value) {
                if (value != this[key]) {
                  this[key] = value;
                  this._changed(flags[name] || 257);
                }
              };
            },
            {}
          ),
          {
            beans: true,
            getSelection: function() {
              return this._selection;
            },
            setSelection: function(selection) {
              if (selection !== this._selection) {
                this._selection = selection;
                var project = this._project;
                if (project) {
                  project._updateSelection(this);
                  this._changed(257);
                }
              }
            },
            _changeSelection: function(flag, selected) {
              var selection = this._selection;
              this.setSelection(selected ? selection | flag : selection & ~flag);
            },
            isSelected: function() {
              if (this._selectChildren) {
                var children = this._children;
                for (var i2 = 0, l = children.length; i2 < l; i2++)
                  if (children[i2].isSelected())
                    return true;
              }
              return !!(this._selection & 1);
            },
            setSelected: function(selected) {
              if (this._selectChildren) {
                var children = this._children;
                for (var i2 = 0, l = children.length; i2 < l; i2++)
                  children[i2].setSelected(selected);
              }
              this._changeSelection(1, selected);
            },
            isFullySelected: function() {
              var children = this._children, selected = !!(this._selection & 1);
              if (children && selected) {
                for (var i2 = 0, l = children.length; i2 < l; i2++)
                  if (!children[i2].isFullySelected())
                    return false;
                return true;
              }
              return selected;
            },
            setFullySelected: function(selected) {
              var children = this._children;
              if (children) {
                for (var i2 = 0, l = children.length; i2 < l; i2++)
                  children[i2].setFullySelected(selected);
              }
              this._changeSelection(1, selected);
            },
            isClipMask: function() {
              return this._clipMask;
            },
            setClipMask: function(clipMask) {
              if (this._clipMask != (clipMask = !!clipMask)) {
                this._clipMask = clipMask;
                if (clipMask) {
                  this.setFillColor(null);
                  this.setStrokeColor(null);
                }
                this._changed(257);
                if (this._parent)
                  this._parent._changed(2048);
              }
            },
            getData: function() {
              if (!this._data)
                this._data = {};
              return this._data;
            },
            setData: function(data) {
              this._data = data;
            },
            getPosition: function(_dontLink) {
              var ctor = _dontLink ? Point : LinkedPoint;
              var position = this._position || (this._position = this._getPositionFromBounds());
              return new ctor(position.x, position.y, this, "setPosition");
            },
            setPosition: function() {
              this.translate(Point.read(arguments).subtract(this.getPosition(true)));
            },
            _getPositionFromBounds: function(bounds) {
              return this._pivot ? this._matrix._transformPoint(this._pivot) : (bounds || this.getBounds()).getCenter(true);
            },
            getPivot: function() {
              var pivot = this._pivot;
              return pivot ? new LinkedPoint(pivot.x, pivot.y, this, "setPivot") : null;
            },
            setPivot: function() {
              this._pivot = Point.read(arguments, 0, { clone: true, readNull: true });
              this._position = undefined2;
            }
          },
          Base.each(
            {
              getStrokeBounds: { stroke: true },
              getHandleBounds: { handle: true },
              getInternalBounds: { internal: true }
            },
            function(options, key) {
              this[key] = function(matrix) {
                return this.getBounds(matrix, options);
              };
            },
            {
              beans: true,
              getBounds: function(matrix, options) {
                var hasMatrix = options || matrix instanceof Matrix, opts = Base.set(
                  {},
                  hasMatrix ? options : matrix,
                  this._boundsOptions
                );
                if (!opts.stroke || this.getStrokeScaling())
                  opts.cacheItem = this;
                var rect = this._getCachedBounds(hasMatrix && matrix, opts).rect;
                return !arguments.length ? new LinkedRectangle(
                  rect.x,
                  rect.y,
                  rect.width,
                  rect.height,
                  this,
                  "setBounds"
                ) : rect;
              },
              setBounds: function() {
                var rect = Rectangle.read(arguments), bounds = this.getBounds(), _matrix = this._matrix, matrix = new Matrix(), center = rect.getCenter();
                matrix.translate(center);
                if (rect.width != bounds.width || rect.height != bounds.height) {
                  if (!_matrix.isInvertible()) {
                    _matrix.set(_matrix._backup || new Matrix().translate(_matrix.getTranslation()));
                    bounds = this.getBounds();
                  }
                  matrix.scale(
                    bounds.width !== 0 ? rect.width / bounds.width : 0,
                    bounds.height !== 0 ? rect.height / bounds.height : 0
                  );
                }
                center = bounds.getCenter();
                matrix.translate(-center.x, -center.y);
                this.transform(matrix);
              },
              _getBounds: function(matrix, options) {
                var children = this._children;
                if (!children || !children.length)
                  return new Rectangle();
                Item._updateBoundsCache(this, options.cacheItem);
                return Item._getBounds(children, matrix, options);
              },
              _getBoundsCacheKey: function(options, internal) {
                return [
                  options.stroke ? 1 : 0,
                  options.handle ? 1 : 0,
                  internal ? 1 : 0
                ].join("");
              },
              _getCachedBounds: function(matrix, options, noInternal) {
                matrix = matrix && matrix._orNullIfIdentity();
                var internal = options.internal && !noInternal, cacheItem = options.cacheItem, _matrix = internal ? null : this._matrix._orNullIfIdentity(), cacheKey = cacheItem && (!matrix || matrix.equals(_matrix)) && this._getBoundsCacheKey(options, internal), bounds = this._bounds;
                Item._updateBoundsCache(this._parent || this._symbol, cacheItem);
                if (cacheKey && bounds && cacheKey in bounds) {
                  var cached = bounds[cacheKey];
                  return {
                    rect: cached.rect.clone(),
                    nonscaling: cached.nonscaling
                  };
                }
                var res = this._getBounds(matrix || _matrix, options), rect = res.rect || res, style = this._style, nonscaling = res.nonscaling || style.hasStroke() && !style.getStrokeScaling();
                if (cacheKey) {
                  if (!bounds) {
                    this._bounds = bounds = {};
                  }
                  var cached = bounds[cacheKey] = {
                    rect: rect.clone(),
                    nonscaling,
                    internal
                  };
                }
                return {
                  rect,
                  nonscaling
                };
              },
              _getStrokeMatrix: function(matrix, options) {
                var parent = this.getStrokeScaling() ? null : options && options.internal ? this : this._parent || this._symbol && this._symbol._item, mx = parent ? parent.getViewMatrix().invert() : matrix;
                return mx && mx._shiftless();
              },
              statics: {
                _updateBoundsCache: function(parent, item) {
                  if (parent && item) {
                    var id = item._id, ref = parent._boundsCache = parent._boundsCache || {
                      ids: {},
                      list: []
                    };
                    if (!ref.ids[id]) {
                      ref.list.push(item);
                      ref.ids[id] = item;
                    }
                  }
                },
                _clearBoundsCache: function(item) {
                  var cache2 = item._boundsCache;
                  if (cache2) {
                    item._bounds = item._position = item._boundsCache = undefined2;
                    for (var i2 = 0, list = cache2.list, l = list.length; i2 < l; i2++) {
                      var other = list[i2];
                      if (other !== item) {
                        other._bounds = other._position = undefined2;
                        if (other._boundsCache)
                          Item._clearBoundsCache(other);
                      }
                    }
                  }
                },
                _getBounds: function(items, matrix, options) {
                  var x1 = Infinity, x2 = -x1, y1 = x1, y2 = x2, nonscaling = false;
                  options = options || {};
                  for (var i2 = 0, l = items.length; i2 < l; i2++) {
                    var item = items[i2];
                    if (item._visible && !item.isEmpty(true)) {
                      var bounds = item._getCachedBounds(
                        matrix && matrix.appended(item._matrix),
                        options,
                        true
                      ), rect = bounds.rect;
                      x1 = Math.min(rect.x, x1);
                      y1 = Math.min(rect.y, y1);
                      x2 = Math.max(rect.x + rect.width, x2);
                      y2 = Math.max(rect.y + rect.height, y2);
                      if (bounds.nonscaling)
                        nonscaling = true;
                    }
                  }
                  return {
                    rect: isFinite(x1) ? new Rectangle(x1, y1, x2 - x1, y2 - y1) : new Rectangle(),
                    nonscaling
                  };
                }
              }
            }
          ),
          {
            beans: true,
            _decompose: function() {
              return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose());
            },
            getRotation: function() {
              var decomposed = this._decompose();
              return decomposed ? decomposed.rotation : 0;
            },
            setRotation: function(rotation) {
              var current = this.getRotation();
              if (current != null && rotation != null) {
                var decomposed = this._decomposed;
                this.rotate(rotation - current);
                if (decomposed) {
                  decomposed.rotation = rotation;
                  this._decomposed = decomposed;
                }
              }
            },
            getScaling: function() {
              var decomposed = this._decompose(), s = decomposed && decomposed.scaling;
              return new LinkedPoint(s ? s.x : 1, s ? s.y : 1, this, "setScaling");
            },
            setScaling: function() {
              var current = this.getScaling(), scaling = Point.read(arguments, 0, { clone: true, readNull: true });
              if (current && scaling && !current.equals(scaling)) {
                var rotation = this.getRotation(), decomposed = this._decomposed, matrix = new Matrix(), isZero = Numerical.isZero;
                if (isZero(current.x) || isZero(current.y)) {
                  matrix.translate(decomposed.translation);
                  if (rotation) {
                    matrix.rotate(rotation);
                  }
                  matrix.scale(scaling.x, scaling.y);
                  this._matrix.set(matrix);
                } else {
                  var center = this.getPosition(true);
                  matrix.translate(center);
                  if (rotation)
                    matrix.rotate(rotation);
                  matrix.scale(scaling.x / current.x, scaling.y / current.y);
                  if (rotation)
                    matrix.rotate(-rotation);
                  matrix.translate(center.negate());
                  this.transform(matrix);
                }
                if (decomposed) {
                  decomposed.scaling = scaling;
                  this._decomposed = decomposed;
                }
              }
            },
            getMatrix: function() {
              return this._matrix;
            },
            setMatrix: function() {
              var matrix = this._matrix;
              matrix.set.apply(matrix, arguments);
            },
            getGlobalMatrix: function(_dontClone) {
              var matrix = this._globalMatrix;
              if (matrix) {
                var parent = this._parent;
                var parents = [];
                while (parent) {
                  if (!parent._globalMatrix) {
                    matrix = null;
                    for (var i2 = 0, l = parents.length; i2 < l; i2++) {
                      parents[i2]._globalMatrix = null;
                    }
                    break;
                  }
                  parents.push(parent);
                  parent = parent._parent;
                }
              }
              if (!matrix) {
                matrix = this._globalMatrix = this._matrix.clone();
                var parent = this._parent;
                if (parent)
                  matrix.prepend(parent.getGlobalMatrix(true));
              }
              return _dontClone ? matrix : matrix.clone();
            },
            getViewMatrix: function() {
              return this.getGlobalMatrix().prepend(this.getView()._matrix);
            },
            getApplyMatrix: function() {
              return this._applyMatrix;
            },
            setApplyMatrix: function(apply) {
              if (this._applyMatrix = this._canApplyMatrix && !!apply)
                this.transform(null, true);
            },
            getTransformContent: "#getApplyMatrix",
            setTransformContent: "#setApplyMatrix"
          },
          {
            getProject: function() {
              return this._project;
            },
            _setProject: function(project, installEvents) {
              if (this._project !== project) {
                if (this._project)
                  this._installEvents(false);
                this._project = project;
                var children = this._children;
                for (var i2 = 0, l = children && children.length; i2 < l; i2++)
                  children[i2]._setProject(project);
                installEvents = true;
              }
              if (installEvents)
                this._installEvents(true);
            },
            getView: function() {
              return this._project._view;
            },
            _installEvents: function _installEvents(install) {
              _installEvents.base.call(this, install);
              var children = this._children;
              for (var i2 = 0, l = children && children.length; i2 < l; i2++)
                children[i2]._installEvents(install);
            },
            getLayer: function() {
              var parent = this;
              while (parent = parent._parent) {
                if (parent instanceof Layer)
                  return parent;
              }
              return null;
            },
            getParent: function() {
              return this._parent;
            },
            setParent: function(item) {
              return item.addChild(this);
            },
            _getOwner: "#getParent",
            getChildren: function() {
              return this._children;
            },
            setChildren: function(items) {
              this.removeChildren();
              this.addChildren(items);
            },
            getFirstChild: function() {
              return this._children && this._children[0] || null;
            },
            getLastChild: function() {
              return this._children && this._children[this._children.length - 1] || null;
            },
            getNextSibling: function() {
              var owner = this._getOwner();
              return owner && owner._children[this._index + 1] || null;
            },
            getPreviousSibling: function() {
              var owner = this._getOwner();
              return owner && owner._children[this._index - 1] || null;
            },
            getIndex: function() {
              return this._index;
            },
            equals: function(item) {
              return item === this || item && this._class === item._class && this._style.equals(item._style) && this._matrix.equals(item._matrix) && this._locked === item._locked && this._visible === item._visible && this._blendMode === item._blendMode && this._opacity === item._opacity && this._clipMask === item._clipMask && this._guide === item._guide && this._equals(item) || false;
            },
            _equals: function(item) {
              return Base.equals(this._children, item._children);
            },
            clone: function(options) {
              var copy = new this.constructor(Item.NO_INSERT), children = this._children, insert = Base.pick(
                options ? options.insert : undefined2,
                options === undefined2 || options === true
              ), deep = Base.pick(options ? options.deep : undefined2, true);
              if (children)
                copy.copyAttributes(this);
              if (!children || deep)
                copy.copyContent(this);
              if (!children)
                copy.copyAttributes(this);
              if (insert)
                copy.insertAbove(this);
              var name = this._name, parent = this._parent;
              if (name && parent) {
                var children = parent._children, orig = name, i2 = 1;
                while (children[name])
                  name = orig + " " + i2++;
                if (name !== orig)
                  copy.setName(name);
              }
              return copy;
            },
            copyContent: function(source) {
              var children = source._children;
              for (var i2 = 0, l = children && children.length; i2 < l; i2++) {
                this.addChild(children[i2].clone(false), true);
              }
            },
            copyAttributes: function(source, excludeMatrix) {
              this.setStyle(source._style);
              var keys = [
                "_locked",
                "_visible",
                "_blendMode",
                "_opacity",
                "_clipMask",
                "_guide"
              ];
              for (var i2 = 0, l = keys.length; i2 < l; i2++) {
                var key = keys[i2];
                if (source.hasOwnProperty(key))
                  this[key] = source[key];
              }
              if (!excludeMatrix)
                this._matrix.set(source._matrix, true);
              this.setApplyMatrix(source._applyMatrix);
              this.setPivot(source._pivot);
              this.setSelection(source._selection);
              var data = source._data, name = source._name;
              this._data = data ? Base.clone(data) : null;
              if (name)
                this.setName(name);
            },
            rasterize: function(arg0, arg1) {
              var resolution, insert, raster;
              if (Base.isPlainObject(arg0)) {
                resolution = arg0.resolution;
                insert = arg0.insert;
                raster = arg0.raster;
              } else {
                resolution = arg0;
                insert = arg1;
              }
              if (!raster) {
                raster = new Raster(Item.NO_INSERT);
              }
              var bounds = this.getStrokeBounds(), scale = (resolution || this.getView().getResolution()) / 72, topLeft = bounds.getTopLeft().floor(), bottomRight = bounds.getBottomRight().ceil(), boundsSize = new Size(bottomRight.subtract(topLeft)), rasterSize = boundsSize.multiply(scale);
              raster.setSize(rasterSize, true);
              if (!rasterSize.isZero()) {
                var ctx = raster.getContext(true), matrix = new Matrix().scale(scale).translate(topLeft.negate());
                ctx.save();
                matrix.applyToContext(ctx);
                this.draw(ctx, new Base({ matrices: [matrix] }));
                ctx.restore();
              }
              raster._matrix.set(
                new Matrix().translate(topLeft.add(boundsSize.divide(2))).scale(1 / scale)
              );
              if (insert === undefined2 || insert) {
                raster.insertAbove(this);
              }
              return raster;
            },
            contains: function() {
              var matrix = this._matrix;
              return matrix.isInvertible() && !!this._contains(matrix._inverseTransform(Point.read(arguments)));
            },
            _contains: function(point) {
              var children = this._children;
              if (children) {
                for (var i2 = children.length - 1; i2 >= 0; i2--) {
                  if (children[i2].contains(point))
                    return true;
                }
                return false;
              }
              return point.isInside(this.getInternalBounds());
            },
            isInside: function() {
              return Rectangle.read(arguments).contains(this.getBounds());
            },
            _asPathItem: function() {
              return new Path.Rectangle({
                rectangle: this.getInternalBounds(),
                matrix: this._matrix,
                insert: false
              });
            },
            intersects: function(item, _matrix) {
              if (!(item instanceof Item))
                return false;
              return this._asPathItem().getIntersections(
                item._asPathItem(),
                null,
                _matrix,
                true
              ).length > 0;
            }
          },
          new function() {
            function hitTest() {
              var args = arguments;
              return this._hitTest(
                Point.read(args),
                HitResult.getOptions(args)
              );
            }
            function hitTestAll() {
              var args = arguments, point = Point.read(args), options = HitResult.getOptions(args), all = [];
              this._hitTest(point, new Base({ all }, options));
              return all;
            }
            function hitTestChildren(point, options, viewMatrix, _exclude) {
              var children = this._children;
              if (children) {
                for (var i2 = children.length - 1; i2 >= 0; i2--) {
                  var child = children[i2];
                  var res = child !== _exclude && child._hitTest(
                    point,
                    options,
                    viewMatrix
                  );
                  if (res && !options.all)
                    return res;
                }
              }
              return null;
            }
            Project.inject({
              hitTest,
              hitTestAll,
              _hitTest: hitTestChildren
            });
            return {
              hitTest,
              hitTestAll,
              _hitTestChildren: hitTestChildren
            };
          }(),
          {
            _hitTest: function(point, options, parentViewMatrix) {
              if (this._locked || !this._visible || this._guide && !options.guides || this.isEmpty()) {
                return null;
              }
              var matrix = this._matrix, viewMatrix = parentViewMatrix ? parentViewMatrix.appended(matrix) : this.getGlobalMatrix().prepend(this.getView()._matrix), tolerance = Math.max(options.tolerance, 1e-12), tolerancePadding = options._tolerancePadding = new Size(
                Path._getStrokePadding(
                  tolerance,
                  matrix._shiftless().invert()
                )
              );
              point = matrix._inverseTransform(point);
              if (!point || !this._children && !this.getBounds({ internal: true, stroke: true, handle: true }).expand(tolerancePadding.multiply(2))._containsPoint(point)) {
                return null;
              }
              var checkSelf = !(options.guides && !this._guide || options.selected && !this.isSelected() || options.type && options.type !== Base.hyphenate(this._class) || options.class && !(this instanceof options.class)), match = options.match, that = this, bounds, res;
              function filter(hit) {
                if (hit && match && !match(hit))
                  hit = null;
                if (hit && options.all)
                  options.all.push(hit);
                return hit;
              }
              function checkPoint(type, part) {
                var pt = part ? bounds["get" + part]() : that.getPosition();
                if (point.subtract(pt).divide(tolerancePadding).length <= 1) {
                  return new HitResult(type, that, {
                    name: part ? Base.hyphenate(part) : type,
                    point: pt
                  });
                }
              }
              var checkPosition = options.position, checkCenter = options.center, checkBounds = options.bounds;
              if (checkSelf && this._parent && (checkPosition || checkCenter || checkBounds)) {
                if (checkCenter || checkBounds) {
                  bounds = this.getInternalBounds();
                }
                res = checkPosition && checkPoint("position") || checkCenter && checkPoint("center", "Center");
                if (!res && checkBounds) {
                  var points = [
                    "TopLeft",
                    "TopRight",
                    "BottomLeft",
                    "BottomRight",
                    "LeftCenter",
                    "TopCenter",
                    "RightCenter",
                    "BottomCenter"
                  ];
                  for (var i2 = 0; i2 < 8 && !res; i2++) {
                    res = checkPoint("bounds", points[i2]);
                  }
                }
                res = filter(res);
              }
              if (!res) {
                res = this._hitTestChildren(point, options, viewMatrix) || checkSelf && filter(this._hitTestSelf(
                  point,
                  options,
                  viewMatrix,
                  this.getStrokeScaling() ? null : viewMatrix._shiftless().invert()
                )) || null;
              }
              if (res && res.point) {
                res.point = matrix.transform(res.point);
              }
              return res;
            },
            _hitTestSelf: function(point, options) {
              if (options.fill && this.hasFill() && this._contains(point))
                return new HitResult("fill", this);
            },
            matches: function(name, compare) {
              function matchObject(obj1, obj2) {
                for (var i2 in obj1) {
                  if (obj1.hasOwnProperty(i2)) {
                    var val1 = obj1[i2], val2 = obj2[i2];
                    if (Base.isPlainObject(val1) && Base.isPlainObject(val2)) {
                      if (!matchObject(val1, val2))
                        return false;
                    } else if (!Base.equals(val1, val2)) {
                      return false;
                    }
                  }
                }
                return true;
              }
              var type = typeof name;
              if (type === "object") {
                for (var key in name) {
                  if (name.hasOwnProperty(key) && !this.matches(key, name[key]))
                    return false;
                }
                return true;
              } else if (type === "function") {
                return name(this);
              } else if (name === "match") {
                return compare(this);
              } else {
                var value = /^(empty|editable)$/.test(name) ? this["is" + Base.capitalize(name)]() : name === "type" ? Base.hyphenate(this._class) : this[name];
                if (name === "class") {
                  if (typeof compare === "function")
                    return this instanceof compare;
                  value = this._class;
                }
                if (typeof compare === "function") {
                  return !!compare(value);
                } else if (compare) {
                  if (compare.test) {
                    return compare.test(value);
                  } else if (Base.isPlainObject(compare)) {
                    return matchObject(compare, value);
                  }
                }
                return Base.equals(value, compare);
              }
            },
            getItems: function(options) {
              return Item._getItems(this, options, this._matrix);
            },
            getItem: function(options) {
              return Item._getItems(this, options, this._matrix, null, true)[0] || null;
            },
            statics: {
              _getItems: function _getItems(item, options, matrix, param, firstOnly) {
                if (!param) {
                  var obj = typeof options === "object" && options, overlapping = obj && obj.overlapping, inside = obj && obj.inside, bounds = overlapping || inside, rect = bounds && Rectangle.read([bounds]);
                  param = {
                    items: [],
                    recursive: obj && obj.recursive !== false,
                    inside: !!inside,
                    overlapping: !!overlapping,
                    rect,
                    path: overlapping && new Path.Rectangle({
                      rectangle: rect,
                      insert: false
                    })
                  };
                  if (obj) {
                    options = Base.filter({}, options, {
                      recursive: true,
                      inside: true,
                      overlapping: true
                    });
                  }
                }
                var children = item._children, items = param.items, rect = param.rect;
                matrix = rect && (matrix || new Matrix());
                for (var i2 = 0, l = children && children.length; i2 < l; i2++) {
                  var child = children[i2], childMatrix = matrix && matrix.appended(child._matrix), add = true;
                  if (rect) {
                    var bounds = child.getBounds(childMatrix);
                    if (!rect.intersects(bounds))
                      continue;
                    if (!(rect.contains(bounds) || param.overlapping && (bounds.contains(rect) || param.path.intersects(child, childMatrix))))
                      add = false;
                  }
                  if (add && child.matches(options)) {
                    items.push(child);
                    if (firstOnly)
                      break;
                  }
                  if (param.recursive !== false) {
                    _getItems(child, options, childMatrix, param, firstOnly);
                  }
                  if (firstOnly && items.length > 0)
                    break;
                }
                return items;
              }
            }
          },
          {
            importJSON: function(json) {
              var res = Base.importJSON(json, this);
              return res !== this ? this.addChild(res) : res;
            },
            addChild: function(item) {
              return this.insertChild(undefined2, item);
            },
            insertChild: function(index, item) {
              var res = item ? this.insertChildren(index, [item]) : null;
              return res && res[0];
            },
            addChildren: function(items) {
              return this.insertChildren(this._children.length, items);
            },
            insertChildren: function(index, items) {
              var children = this._children;
              if (children && items && items.length > 0) {
                items = Base.slice(items);
                var inserted = {};
                for (var i2 = items.length - 1; i2 >= 0; i2--) {
                  var item = items[i2], id = item && item._id;
                  if (!item || inserted[id]) {
                    items.splice(i2, 1);
                  } else {
                    item._remove(false, true);
                    inserted[id] = true;
                  }
                }
                Base.splice(children, items, index, 0);
                var project = this._project, notifySelf = project._changes;
                for (var i2 = 0, l = items.length; i2 < l; i2++) {
                  var item = items[i2], name = item._name;
                  item._parent = this;
                  item._setProject(project, true);
                  if (name)
                    item.setName(name);
                  if (notifySelf)
                    item._changed(5);
                }
                this._changed(11);
              } else {
                items = null;
              }
              return items;
            },
            _insertItem: "#insertChild",
            _insertAt: function(item, offset) {
              var owner = item && item._getOwner(), res = item !== this && owner ? this : null;
              if (res) {
                res._remove(false, true);
                owner._insertItem(item._index + offset, res);
              }
              return res;
            },
            insertAbove: function(item) {
              return this._insertAt(item, 1);
            },
            insertBelow: function(item) {
              return this._insertAt(item, 0);
            },
            sendToBack: function() {
              var owner = this._getOwner();
              return owner ? owner._insertItem(0, this) : null;
            },
            bringToFront: function() {
              var owner = this._getOwner();
              return owner ? owner._insertItem(undefined2, this) : null;
            },
            appendTop: "#addChild",
            appendBottom: function(item) {
              return this.insertChild(0, item);
            },
            moveAbove: "#insertAbove",
            moveBelow: "#insertBelow",
            addTo: function(owner) {
              return owner._insertItem(undefined2, this);
            },
            copyTo: function(owner) {
              return this.clone(false).addTo(owner);
            },
            reduce: function(options) {
              var children = this._children;
              if (children && children.length === 1) {
                var child = children[0].reduce(options);
                if (this._parent) {
                  child.insertAbove(this);
                  this.remove();
                } else {
                  child.remove();
                }
                return child;
              }
              return this;
            },
            _removeNamed: function() {
              var owner = this._getOwner();
              if (owner) {
                var children = owner._children, namedChildren = owner._namedChildren, name = this._name, namedArray = namedChildren[name], index = namedArray ? namedArray.indexOf(this) : -1;
                if (index !== -1) {
                  if (children[name] == this)
                    delete children[name];
                  namedArray.splice(index, 1);
                  if (namedArray.length) {
                    children[name] = namedArray[0];
                  } else {
                    delete namedChildren[name];
                  }
                }
              }
            },
            _remove: function(notifySelf, notifyParent) {
              var owner = this._getOwner(), project = this._project, index = this._index;
              if (this._style)
                this._style._dispose();
              if (owner) {
                if (this._name)
                  this._removeNamed();
                if (index != null) {
                  if (project._activeLayer === this)
                    project._activeLayer = this.getNextSibling() || this.getPreviousSibling();
                  Base.splice(owner._children, null, index, 1);
                }
                this._installEvents(false);
                if (notifySelf && project._changes)
                  this._changed(5);
                if (notifyParent)
                  owner._changed(11, this);
                this._parent = null;
                return true;
              }
              return false;
            },
            remove: function() {
              return this._remove(true, true);
            },
            replaceWith: function(item) {
              var ok = item && item.insertBelow(this);
              if (ok)
                this.remove();
              return ok;
            },
            removeChildren: function(start, end) {
              if (!this._children)
                return null;
              start = start || 0;
              end = Base.pick(end, this._children.length);
              var removed = Base.splice(this._children, null, start, end - start);
              for (var i2 = removed.length - 1; i2 >= 0; i2--) {
                removed[i2]._remove(true, false);
              }
              if (removed.length > 0)
                this._changed(11);
              return removed;
            },
            clear: "#removeChildren",
            reverseChildren: function() {
              if (this._children) {
                this._children.reverse();
                for (var i2 = 0, l = this._children.length; i2 < l; i2++)
                  this._children[i2]._index = i2;
                this._changed(11);
              }
            },
            isEmpty: function(recursively) {
              var children = this._children;
              var numChildren = children ? children.length : 0;
              if (recursively) {
                for (var i2 = 0; i2 < numChildren; i2++) {
                  if (!children[i2].isEmpty(recursively)) {
                    return false;
                  }
                }
                return true;
              }
              return !numChildren;
            },
            isEditable: function() {
              var item = this;
              while (item) {
                if (!item._visible || item._locked)
                  return false;
                item = item._parent;
              }
              return true;
            },
            hasFill: function() {
              return this.getStyle().hasFill();
            },
            hasStroke: function() {
              return this.getStyle().hasStroke();
            },
            hasShadow: function() {
              return this.getStyle().hasShadow();
            },
            _getOrder: function(item) {
              function getList(item2) {
                var list = [];
                do {
                  list.unshift(item2);
                } while (item2 = item2._parent);
                return list;
              }
              var list1 = getList(this), list2 = getList(item);
              for (var i2 = 0, l = Math.min(list1.length, list2.length); i2 < l; i2++) {
                if (list1[i2] != list2[i2]) {
                  return list1[i2]._index < list2[i2]._index ? 1 : -1;
                }
              }
              return 0;
            },
            hasChildren: function() {
              return this._children && this._children.length > 0;
            },
            isInserted: function() {
              return this._parent ? this._parent.isInserted() : false;
            },
            isAbove: function(item) {
              return this._getOrder(item) === -1;
            },
            isBelow: function(item) {
              return this._getOrder(item) === 1;
            },
            isParent: function(item) {
              return this._parent === item;
            },
            isChild: function(item) {
              return item && item._parent === this;
            },
            isDescendant: function(item) {
              var parent = this;
              while (parent = parent._parent) {
                if (parent === item)
                  return true;
              }
              return false;
            },
            isAncestor: function(item) {
              return item ? item.isDescendant(this) : false;
            },
            isSibling: function(item) {
              return this._parent === item._parent;
            },
            isGroupedWith: function(item) {
              var parent = this._parent;
              while (parent) {
                if (parent._parent && /^(Group|Layer|CompoundPath)$/.test(parent._class) && item.isDescendant(parent))
                  return true;
                parent = parent._parent;
              }
              return false;
            }
          },
          Base.each(["rotate", "scale", "shear", "skew"], function(key) {
            var rotate = key === "rotate";
            this[key] = function() {
              var args = arguments, value = (rotate ? Base : Point).read(args), center = Point.read(args, 0, { readNull: true });
              return this.transform(new Matrix()[key](
                value,
                center || this.getPosition(true)
              ));
            };
          }, {
            translate: function() {
              var mx = new Matrix();
              return this.transform(mx.translate.apply(mx, arguments));
            },
            transform: function(matrix, _applyRecursively, _setApplyMatrix) {
              var _matrix = this._matrix, transformMatrix = matrix && !matrix.isIdentity(), applyMatrix = _setApplyMatrix && this._canApplyMatrix || this._applyMatrix && (transformMatrix || !_matrix.isIdentity() || _applyRecursively && this._children);
              if (!transformMatrix && !applyMatrix)
                return this;
              if (transformMatrix) {
                if (!matrix.isInvertible() && _matrix.isInvertible())
                  _matrix._backup = _matrix.getValues();
                _matrix.prepend(matrix, true);
                var style = this._style, fillColor = style.getFillColor(true), strokeColor = style.getStrokeColor(true);
                if (fillColor)
                  fillColor.transform(matrix);
                if (strokeColor)
                  strokeColor.transform(matrix);
              }
              if (applyMatrix && (applyMatrix = this._transformContent(
                _matrix,
                _applyRecursively,
                _setApplyMatrix
              ))) {
                var pivot = this._pivot;
                if (pivot)
                  _matrix._transformPoint(pivot, pivot, true);
                _matrix.reset(true);
                if (_setApplyMatrix && this._canApplyMatrix)
                  this._applyMatrix = true;
              }
              var bounds = this._bounds, position = this._position;
              if (transformMatrix || applyMatrix) {
                this._changed(25);
              }
              var decomp = transformMatrix && bounds && matrix.decompose();
              if (decomp && decomp.skewing.isZero() && decomp.rotation % 90 === 0) {
                for (var key in bounds) {
                  var cache2 = bounds[key];
                  if (cache2.nonscaling) {
                    delete bounds[key];
                  } else if (applyMatrix || !cache2.internal) {
                    var rect = cache2.rect;
                    matrix._transformBounds(rect, rect);
                  }
                }
                this._bounds = bounds;
                var cached = bounds[this._getBoundsCacheKey(
                  this._boundsOptions || {}
                )];
                if (cached) {
                  this._position = this._getPositionFromBounds(cached.rect);
                }
              } else if (transformMatrix && position && this._pivot) {
                this._position = matrix._transformPoint(position, position);
              }
              return this;
            },
            _transformContent: function(matrix, applyRecursively, setApplyMatrix) {
              var children = this._children;
              if (children) {
                for (var i2 = 0, l = children.length; i2 < l; i2++) {
                  children[i2].transform(matrix, applyRecursively, setApplyMatrix);
                }
                return true;
              }
            },
            globalToLocal: function() {
              return this.getGlobalMatrix(true)._inverseTransform(
                Point.read(arguments)
              );
            },
            localToGlobal: function() {
              return this.getGlobalMatrix(true)._transformPoint(
                Point.read(arguments)
              );
            },
            parentToLocal: function() {
              return this._matrix._inverseTransform(Point.read(arguments));
            },
            localToParent: function() {
              return this._matrix._transformPoint(Point.read(arguments));
            },
            fitBounds: function(rectangle, fill) {
              rectangle = Rectangle.read(arguments);
              var bounds = this.getBounds(), itemRatio = bounds.height / bounds.width, rectRatio = rectangle.height / rectangle.width, scale = (fill ? itemRatio > rectRatio : itemRatio < rectRatio) ? rectangle.width / bounds.width : rectangle.height / bounds.height, newBounds = new Rectangle(
                new Point(),
                new Size(bounds.width * scale, bounds.height * scale)
              );
              newBounds.setCenter(rectangle.getCenter());
              this.setBounds(newBounds);
            }
          }),
          {
            _setStyles: function(ctx, param, viewMatrix) {
              var style = this._style, matrix = this._matrix;
              if (style.hasFill()) {
                ctx.fillStyle = style.getFillColor().toCanvasStyle(ctx, matrix);
              }
              if (style.hasStroke()) {
                ctx.strokeStyle = style.getStrokeColor().toCanvasStyle(ctx, matrix);
                ctx.lineWidth = style.getStrokeWidth();
                var strokeJoin = style.getStrokeJoin(), strokeCap = style.getStrokeCap(), miterLimit = style.getMiterLimit();
                if (strokeJoin)
                  ctx.lineJoin = strokeJoin;
                if (strokeCap)
                  ctx.lineCap = strokeCap;
                if (miterLimit)
                  ctx.miterLimit = miterLimit;
                if (paper2.support.nativeDash) {
                  var dashArray = style.getDashArray(), dashOffset = style.getDashOffset();
                  if (dashArray && dashArray.length) {
                    if ("setLineDash" in ctx) {
                      ctx.setLineDash(dashArray);
                      ctx.lineDashOffset = dashOffset;
                    } else {
                      ctx.mozDash = dashArray;
                      ctx.mozDashOffset = dashOffset;
                    }
                  }
                }
              }
              if (style.hasShadow()) {
                var pixelRatio = param.pixelRatio || 1, mx = viewMatrix._shiftless().prepend(
                  new Matrix().scale(pixelRatio, pixelRatio)
                ), blur = mx.transform(new Point(style.getShadowBlur(), 0)), offset = mx.transform(this.getShadowOffset());
                ctx.shadowColor = style.getShadowColor().toCanvasStyle(ctx);
                ctx.shadowBlur = blur.getLength();
                ctx.shadowOffsetX = offset.x;
                ctx.shadowOffsetY = offset.y;
              }
            },
            draw: function(ctx, param, parentStrokeMatrix) {
              var updateVersion = this._updateVersion = this._project._updateVersion;
              if (!this._visible || this._opacity === 0)
                return;
              var matrices = param.matrices, viewMatrix = param.viewMatrix, matrix = this._matrix, globalMatrix = matrices[matrices.length - 1].appended(matrix);
              if (!globalMatrix.isInvertible())
                return;
              viewMatrix = viewMatrix ? viewMatrix.appended(globalMatrix) : globalMatrix;
              matrices.push(globalMatrix);
              if (param.updateMatrix) {
                this._globalMatrix = globalMatrix;
              }
              var blendMode = this._blendMode, opacity = Numerical.clamp(this._opacity, 0, 1), normalBlend = blendMode === "normal", nativeBlend = BlendMode.nativeModes[blendMode], direct = normalBlend && opacity === 1 || param.dontStart || param.clip || (nativeBlend || normalBlend && opacity < 1) && this._canComposite(), pixelRatio = param.pixelRatio || 1, mainCtx, itemOffset, prevOffset;
              if (!direct) {
                var bounds = this.getStrokeBounds(viewMatrix);
                if (!bounds.width || !bounds.height) {
                  matrices.pop();
                  return;
                }
                prevOffset = param.offset;
                itemOffset = param.offset = bounds.getTopLeft().floor();
                mainCtx = ctx;
                ctx = CanvasProvider.getContext(bounds.getSize().ceil().add(1).multiply(pixelRatio));
                if (pixelRatio !== 1)
                  ctx.scale(pixelRatio, pixelRatio);
              }
              ctx.save();
              var strokeMatrix = parentStrokeMatrix ? parentStrokeMatrix.appended(matrix) : this._canScaleStroke && !this.getStrokeScaling(true) && viewMatrix, clip = !direct && param.clipItem, transform = !strokeMatrix || clip;
              if (direct) {
                ctx.globalAlpha = opacity;
                if (nativeBlend)
                  ctx.globalCompositeOperation = blendMode;
              } else if (transform) {
                ctx.translate(-itemOffset.x, -itemOffset.y);
              }
              if (transform) {
                (direct ? matrix : viewMatrix).applyToContext(ctx);
              }
              if (clip) {
                param.clipItem.draw(ctx, param.extend({ clip: true }));
              }
              if (strokeMatrix) {
                ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
                var offset = param.offset;
                if (offset)
                  ctx.translate(-offset.x, -offset.y);
              }
              this._draw(ctx, param, viewMatrix, strokeMatrix);
              ctx.restore();
              matrices.pop();
              if (param.clip && !param.dontFinish) {
                ctx.clip(this.getFillRule());
              }
              if (!direct) {
                BlendMode.process(
                  blendMode,
                  ctx,
                  mainCtx,
                  opacity,
                  itemOffset.subtract(prevOffset).multiply(pixelRatio)
                );
                CanvasProvider.release(ctx);
                param.offset = prevOffset;
              }
            },
            _isUpdated: function(updateVersion) {
              var parent = this._parent;
              if (parent instanceof CompoundPath)
                return parent._isUpdated(updateVersion);
              var updated = this._updateVersion === updateVersion;
              if (!updated && parent && parent._visible && parent._isUpdated(updateVersion)) {
                this._updateVersion = updateVersion;
                updated = true;
              }
              return updated;
            },
            _drawSelection: function(ctx, matrix, size, selectionItems, updateVersion) {
              var selection = this._selection, itemSelected = selection & 1, boundsSelected = selection & 2 || itemSelected && this._selectBounds, positionSelected = selection & 4;
              if (!this._drawSelected)
                itemSelected = false;
              if ((itemSelected || boundsSelected || positionSelected) && this._isUpdated(updateVersion)) {
                var layer, color = this.getSelectedColor(true) || (layer = this.getLayer()) && layer.getSelectedColor(true), mx = matrix.appended(this.getGlobalMatrix(true)), half = size / 2;
                ctx.strokeStyle = ctx.fillStyle = color ? color.toCanvasStyle(ctx) : "#009dec";
                if (itemSelected)
                  this._drawSelected(ctx, mx, selectionItems);
                if (positionSelected) {
                  var pos = this.getPosition(true), parent = this._parent, point = parent ? parent.localToGlobal(pos) : pos, x = point.x, y = point.y;
                  ctx.beginPath();
                  ctx.arc(x, y, half, 0, Math.PI * 2, true);
                  ctx.stroke();
                  var deltas = [[0, -1], [1, 0], [0, 1], [-1, 0]], start = half, end = size + 1;
                  for (var i2 = 0; i2 < 4; i2++) {
                    var delta = deltas[i2], dx = delta[0], dy = delta[1];
                    ctx.moveTo(x + dx * start, y + dy * start);
                    ctx.lineTo(x + dx * end, y + dy * end);
                    ctx.stroke();
                  }
                }
                if (boundsSelected) {
                  var coords = mx._transformCorners(this.getInternalBounds());
                  ctx.beginPath();
                  for (var i2 = 0; i2 < 8; i2++) {
                    ctx[!i2 ? "moveTo" : "lineTo"](coords[i2], coords[++i2]);
                  }
                  ctx.closePath();
                  ctx.stroke();
                  for (var i2 = 0; i2 < 8; i2++) {
                    ctx.fillRect(
                      coords[i2] - half,
                      coords[++i2] - half,
                      size,
                      size
                    );
                  }
                }
              }
            },
            _canComposite: function() {
              return false;
            }
          },
          Base.each(["down", "drag", "up", "move"], function(key) {
            this["removeOn" + Base.capitalize(key)] = function() {
              var hash = {};
              hash[key] = true;
              return this.removeOn(hash);
            };
          }, {
            removeOn: function(obj) {
              for (var name in obj) {
                if (obj[name]) {
                  var key = "mouse" + name, project = this._project, sets = project._removeSets = project._removeSets || {};
                  sets[key] = sets[key] || {};
                  sets[key][this._id] = this;
                }
              }
              return this;
            }
          }),
          {
            tween: function(from, to, options) {
              if (!options) {
                options = to;
                to = from;
                from = null;
                if (!options) {
                  options = to;
                  to = null;
                }
              }
              var easing = options && options.easing, start = options && options.start, duration = options != null && (typeof options === "number" ? options : options.duration), tween = new Tween(this, from, to, duration, easing, start);
              function onFrame(event) {
                tween._handleFrame(event.time * 1e3);
                if (!tween.running) {
                  this.off("frame", onFrame);
                }
              }
              if (duration) {
                this.on("frame", onFrame);
              }
              return tween;
            },
            tweenTo: function(to, options) {
              return this.tween(null, to, options);
            },
            tweenFrom: function(from, options) {
              return this.tween(from, null, options);
            }
          }
        );
        var Group = Item.extend({
          _class: "Group",
          _selectBounds: false,
          _selectChildren: true,
          _serializeFields: {
            children: []
          },
          initialize: function Group2(arg) {
            this._children = [];
            this._namedChildren = {};
            if (!this._initialize(arg))
              this.addChildren(Array.isArray(arg) ? arg : arguments);
          },
          _changed: function _changed(flags) {
            _changed.base.call(this, flags);
            if (flags & 2050) {
              this._clipItem = undefined2;
            }
          },
          _getClipItem: function() {
            var clipItem = this._clipItem;
            if (clipItem === undefined2) {
              clipItem = null;
              var children = this._children;
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                if (children[i2]._clipMask) {
                  clipItem = children[i2];
                  break;
                }
              }
              this._clipItem = clipItem;
            }
            return clipItem;
          },
          isClipped: function() {
            return !!this._getClipItem();
          },
          setClipped: function(clipped) {
            var child = this.getFirstChild();
            if (child)
              child.setClipMask(clipped);
          },
          _getBounds: function _getBounds(matrix, options) {
            var clipItem = this._getClipItem();
            return clipItem ? clipItem._getCachedBounds(
              clipItem._matrix.prepended(matrix),
              Base.set({}, options, { stroke: false })
            ) : _getBounds.base.call(this, matrix, options);
          },
          _hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
            var clipItem = this._getClipItem();
            return (!clipItem || clipItem.contains(point)) && _hitTestChildren.base.call(
              this,
              point,
              options,
              viewMatrix,
              clipItem
            );
          },
          _draw: function(ctx, param) {
            var clip = param.clip, clipItem = !clip && this._getClipItem();
            param = param.extend({ clipItem, clip: false });
            if (clip) {
              ctx.beginPath();
              param.dontStart = param.dontFinish = true;
            } else if (clipItem) {
              clipItem.draw(ctx, param.extend({ clip: true }));
            }
            var children = this._children;
            for (var i2 = 0, l = children.length; i2 < l; i2++) {
              var item = children[i2];
              if (item !== clipItem)
                item.draw(ctx, param);
            }
          }
        });
        var Layer = Group.extend({
          _class: "Layer",
          initialize: function Layer2() {
            Group.apply(this, arguments);
          },
          _getOwner: function() {
            return this._parent || this._index != null && this._project;
          },
          isInserted: function isInserted() {
            return this._parent ? isInserted.base.call(this) : this._index != null;
          },
          activate: function() {
            this._project._activeLayer = this;
          },
          _hitTestSelf: function() {
          }
        });
        var Shape = Item.extend(
          {
            _class: "Shape",
            _applyMatrix: false,
            _canApplyMatrix: false,
            _canScaleStroke: true,
            _serializeFields: {
              type: null,
              size: null,
              radius: null
            },
            initialize: function Shape2(props, point) {
              this._initialize(props, point);
            },
            _equals: function(item) {
              return this._type === item._type && this._size.equals(item._size) && Base.equals(this._radius, item._radius);
            },
            copyContent: function(source) {
              this.setType(source._type);
              this.setSize(source._size);
              this.setRadius(source._radius);
            },
            getType: function() {
              return this._type;
            },
            setType: function(type) {
              this._type = type;
            },
            getShape: "#getType",
            setShape: "#setType",
            getSize: function() {
              var size = this._size;
              return new LinkedSize(size.width, size.height, this, "setSize");
            },
            setSize: function() {
              var size = Size.read(arguments);
              if (!this._size) {
                this._size = size.clone();
              } else if (!this._size.equals(size)) {
                var type = this._type, width = size.width, height = size.height;
                if (type === "rectangle") {
                  this._radius.set(Size.min(this._radius, size.divide(2).abs()));
                } else if (type === "circle") {
                  width = height = (width + height) / 2;
                  this._radius = width / 2;
                } else if (type === "ellipse") {
                  this._radius._set(width / 2, height / 2);
                }
                this._size._set(width, height);
                this._changed(9);
              }
            },
            getRadius: function() {
              var rad = this._radius;
              return this._type === "circle" ? rad : new LinkedSize(rad.width, rad.height, this, "setRadius");
            },
            setRadius: function(radius) {
              var type = this._type;
              if (type === "circle") {
                if (radius === this._radius)
                  return;
                var size = radius * 2;
                this._radius = radius;
                this._size._set(size, size);
              } else {
                radius = Size.read(arguments);
                if (!this._radius) {
                  this._radius = radius.clone();
                } else {
                  if (this._radius.equals(radius))
                    return;
                  this._radius.set(radius);
                  if (type === "rectangle") {
                    var size = Size.max(this._size, radius.multiply(2));
                    this._size.set(size);
                  } else if (type === "ellipse") {
                    this._size._set(radius.width * 2, radius.height * 2);
                  }
                }
              }
              this._changed(9);
            },
            isEmpty: function() {
              return false;
            },
            toPath: function(insert) {
              var path = new Path[Base.capitalize(this._type)]({
                center: new Point(),
                size: this._size,
                radius: this._radius,
                insert: false
              });
              path.copyAttributes(this);
              if (paper2.settings.applyMatrix)
                path.setApplyMatrix(true);
              if (insert === undefined2 || insert)
                path.insertAbove(this);
              return path;
            },
            toShape: "#clone",
            _asPathItem: function() {
              return this.toPath(false);
            },
            _draw: function(ctx, param, viewMatrix, strokeMatrix) {
              var style = this._style, hasFill = style.hasFill(), hasStroke = style.hasStroke(), dontPaint = param.dontFinish || param.clip, untransformed = !strokeMatrix;
              if (hasFill || hasStroke || dontPaint) {
                var type = this._type, radius = this._radius, isCircle = type === "circle";
                if (!param.dontStart)
                  ctx.beginPath();
                if (untransformed && isCircle) {
                  ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
                } else {
                  var rx = isCircle ? radius : radius.width, ry = isCircle ? radius : radius.height, size = this._size, width = size.width, height = size.height;
                  if (untransformed && type === "rectangle" && rx === 0 && ry === 0) {
                    ctx.rect(-width / 2, -height / 2, width, height);
                  } else {
                    var x = width / 2, y = height / 2, kappa = 1 - 0.5522847498307936, cx = rx * kappa, cy = ry * kappa, c = [
                      -x,
                      -y + ry,
                      -x,
                      -y + cy,
                      -x + cx,
                      -y,
                      -x + rx,
                      -y,
                      x - rx,
                      -y,
                      x - cx,
                      -y,
                      x,
                      -y + cy,
                      x,
                      -y + ry,
                      x,
                      y - ry,
                      x,
                      y - cy,
                      x - cx,
                      y,
                      x - rx,
                      y,
                      -x + rx,
                      y,
                      -x + cx,
                      y,
                      -x,
                      y - cy,
                      -x,
                      y - ry
                    ];
                    if (strokeMatrix)
                      strokeMatrix.transform(c, c, 32);
                    ctx.moveTo(c[0], c[1]);
                    ctx.bezierCurveTo(c[2], c[3], c[4], c[5], c[6], c[7]);
                    if (x !== rx)
                      ctx.lineTo(c[8], c[9]);
                    ctx.bezierCurveTo(c[10], c[11], c[12], c[13], c[14], c[15]);
                    if (y !== ry)
                      ctx.lineTo(c[16], c[17]);
                    ctx.bezierCurveTo(c[18], c[19], c[20], c[21], c[22], c[23]);
                    if (x !== rx)
                      ctx.lineTo(c[24], c[25]);
                    ctx.bezierCurveTo(c[26], c[27], c[28], c[29], c[30], c[31]);
                  }
                }
                ctx.closePath();
              }
              if (!dontPaint && (hasFill || hasStroke)) {
                this._setStyles(ctx, param, viewMatrix);
                if (hasFill) {
                  ctx.fill(style.getFillRule());
                  ctx.shadowColor = "rgba(0,0,0,0)";
                }
                if (hasStroke)
                  ctx.stroke();
              }
            },
            _canComposite: function() {
              return !(this.hasFill() && this.hasStroke());
            },
            _getBounds: function(matrix, options) {
              var rect = new Rectangle(this._size).setCenter(0, 0), style = this._style, strokeWidth = options.stroke && style.hasStroke() && style.getStrokeWidth();
              if (matrix)
                rect = matrix._transformBounds(rect);
              return strokeWidth ? rect.expand(Path._getStrokePadding(
                strokeWidth,
                this._getStrokeMatrix(matrix, options)
              )) : rect;
            }
          },
          new function() {
            function getCornerCenter(that, point, expand) {
              var radius = that._radius;
              if (!radius.isZero()) {
                var halfSize = that._size.divide(2);
                for (var q = 1; q <= 4; q++) {
                  var dir = new Point(q > 1 && q < 4 ? -1 : 1, q > 2 ? -1 : 1), corner = dir.multiply(halfSize), center = corner.subtract(dir.multiply(radius)), rect = new Rectangle(
                    expand ? corner.add(dir.multiply(expand)) : corner,
                    center
                  );
                  if (rect.contains(point))
                    return { point: center, quadrant: q };
                }
              }
            }
            function isOnEllipseStroke(point, radius, padding, quadrant) {
              var vector = point.divide(radius);
              return (!quadrant || vector.isInQuadrant(quadrant)) && vector.subtract(vector.normalize()).multiply(radius).divide(padding).length <= 1;
            }
            return {
              _contains: function _contains(point) {
                if (this._type === "rectangle") {
                  var center = getCornerCenter(this, point);
                  return center ? point.subtract(center.point).divide(this._radius).getLength() <= 1 : _contains.base.call(this, point);
                } else {
                  return point.divide(this.size).getLength() <= 0.5;
                }
              },
              _hitTestSelf: function _hitTestSelf(point, options, viewMatrix, strokeMatrix) {
                var hit = false, style = this._style, hitStroke = options.stroke && style.hasStroke(), hitFill = options.fill && style.hasFill();
                if (hitStroke || hitFill) {
                  var type = this._type, radius = this._radius, strokeRadius = hitStroke ? style.getStrokeWidth() / 2 : 0, strokePadding = options._tolerancePadding.add(
                    Path._getStrokePadding(
                      strokeRadius,
                      !style.getStrokeScaling() && strokeMatrix
                    )
                  );
                  if (type === "rectangle") {
                    var padding = strokePadding.multiply(2), center = getCornerCenter(this, point, padding);
                    if (center) {
                      hit = isOnEllipseStroke(
                        point.subtract(center.point),
                        radius,
                        strokePadding,
                        center.quadrant
                      );
                    } else {
                      var rect = new Rectangle(this._size).setCenter(0, 0), outer = rect.expand(padding), inner = rect.expand(padding.negate());
                      hit = outer._containsPoint(point) && !inner._containsPoint(point);
                    }
                  } else {
                    hit = isOnEllipseStroke(point, radius, strokePadding);
                  }
                }
                return hit ? new HitResult(hitStroke ? "stroke" : "fill", this) : _hitTestSelf.base.apply(this, arguments);
              }
            };
          }(),
          {
            statics: new function() {
              function createShape(type, point, size, radius, args) {
                var item = Base.create(Shape.prototype);
                item._type = type;
                item._size = size;
                item._radius = radius;
                item._initialize(Base.getNamed(args), point);
                return item;
              }
              return {
                Circle: function() {
                  var args = arguments, center = Point.readNamed(args, "center"), radius = Base.readNamed(args, "radius");
                  return createShape(
                    "circle",
                    center,
                    new Size(radius * 2),
                    radius,
                    args
                  );
                },
                Rectangle: function() {
                  var args = arguments, rect = Rectangle.readNamed(args, "rectangle"), radius = Size.min(
                    Size.readNamed(args, "radius"),
                    rect.getSize(true).divide(2)
                  );
                  return createShape(
                    "rectangle",
                    rect.getCenter(true),
                    rect.getSize(true),
                    radius,
                    args
                  );
                },
                Ellipse: function() {
                  var args = arguments, ellipse = Shape._readEllipse(args), radius = ellipse.radius;
                  return createShape(
                    "ellipse",
                    ellipse.center,
                    radius.multiply(2),
                    radius,
                    args
                  );
                },
                _readEllipse: function(args) {
                  var center, radius;
                  if (Base.hasNamed(args, "radius")) {
                    center = Point.readNamed(args, "center");
                    radius = Size.readNamed(args, "radius");
                  } else {
                    var rect = Rectangle.readNamed(args, "rectangle");
                    center = rect.getCenter(true);
                    radius = rect.getSize(true).divide(2);
                  }
                  return { center, radius };
                }
              };
            }()
          }
        );
        var Raster = Item.extend({
          _class: "Raster",
          _applyMatrix: false,
          _canApplyMatrix: false,
          _boundsOptions: { stroke: false, handle: false },
          _serializeFields: {
            crossOrigin: null,
            source: null
          },
          _prioritize: ["crossOrigin"],
          _smoothing: "low",
          beans: true,
          initialize: function Raster2(source, position) {
            if (!this._initialize(
              source,
              position !== undefined2 && Point.read(arguments)
            )) {
              var image, type = typeof source, object = type === "string" ? document2.getElementById(source) : type === "object" ? source : null;
              if (object && object !== Item.NO_INSERT) {
                if (object.getContext || object.naturalHeight != null) {
                  image = object;
                } else if (object) {
                  var size = Size.read(arguments);
                  if (!size.isZero()) {
                    image = CanvasProvider.getCanvas(size);
                  }
                }
              }
              if (image) {
                this.setImage(image);
              } else {
                this.setSource(source);
              }
            }
            if (!this._size) {
              this._size = new Size();
              this._loaded = false;
            }
          },
          _equals: function(item) {
            return this.getSource() === item.getSource();
          },
          copyContent: function(source) {
            var image = source._image, canvas = source._canvas;
            if (image) {
              this._setImage(image);
            } else if (canvas) {
              var copyCanvas = CanvasProvider.getCanvas(source._size);
              copyCanvas.getContext("2d").drawImage(canvas, 0, 0);
              this._setImage(copyCanvas);
            }
            this._crossOrigin = source._crossOrigin;
          },
          getSize: function() {
            var size = this._size;
            return new LinkedSize(
              size ? size.width : 0,
              size ? size.height : 0,
              this,
              "setSize"
            );
          },
          setSize: function(_size, _clear) {
            var size = Size.read(arguments);
            if (!size.equals(this._size)) {
              if (size.width > 0 && size.height > 0) {
                var element = !_clear && this.getElement();
                this._setImage(CanvasProvider.getCanvas(size));
                if (element) {
                  this.getContext(true).drawImage(
                    element,
                    0,
                    0,
                    size.width,
                    size.height
                  );
                }
              } else {
                if (this._canvas)
                  CanvasProvider.release(this._canvas);
                this._size = size.clone();
              }
            } else if (_clear) {
              this.clear();
            }
          },
          getWidth: function() {
            return this._size ? this._size.width : 0;
          },
          setWidth: function(width) {
            this.setSize(width, this.getHeight());
          },
          getHeight: function() {
            return this._size ? this._size.height : 0;
          },
          setHeight: function(height) {
            this.setSize(this.getWidth(), height);
          },
          getLoaded: function() {
            return this._loaded;
          },
          isEmpty: function() {
            var size = this._size;
            return !size || size.width === 0 && size.height === 0;
          },
          getResolution: function() {
            var matrix = this._matrix, orig = new Point(0, 0).transform(matrix), u = new Point(1, 0).transform(matrix).subtract(orig), v = new Point(0, 1).transform(matrix).subtract(orig);
            return new Size(
              72 / u.getLength(),
              72 / v.getLength()
            );
          },
          getPpi: "#getResolution",
          getImage: function() {
            return this._image;
          },
          setImage: function(image) {
            var that = this;
            function emit(event) {
              var view = that.getView(), type = event && event.type || "load";
              if (view && that.responds(type)) {
                paper2 = view._scope;
                that.emit(type, new Event(event));
              }
            }
            this._setImage(image);
            if (this._loaded) {
              setTimeout(emit, 0);
            } else if (image) {
              DomEvent.add(image, {
                load: function(event) {
                  that._setImage(image);
                  emit(event);
                },
                error: emit
              });
            }
          },
          _setImage: function(image) {
            if (this._canvas)
              CanvasProvider.release(this._canvas);
            if (image && image.getContext) {
              this._image = null;
              this._canvas = image;
              this._loaded = true;
            } else {
              this._image = image;
              this._canvas = null;
              this._loaded = !!(image && image.src && image.complete);
            }
            this._size = new Size(
              image ? image.naturalWidth || image.width : 0,
              image ? image.naturalHeight || image.height : 0
            );
            this._context = null;
            this._changed(1033);
          },
          getCanvas: function() {
            if (!this._canvas) {
              var ctx = CanvasProvider.getContext(this._size);
              try {
                if (this._image)
                  ctx.drawImage(this._image, 0, 0);
                this._canvas = ctx.canvas;
              } catch (e) {
                CanvasProvider.release(ctx);
              }
            }
            return this._canvas;
          },
          setCanvas: "#setImage",
          getContext: function(_change) {
            if (!this._context)
              this._context = this.getCanvas().getContext("2d");
            if (_change) {
              this._image = null;
              this._changed(1025);
            }
            return this._context;
          },
          setContext: function(context) {
            this._context = context;
          },
          getSource: function() {
            var image = this._image;
            return image && image.src || this.toDataURL();
          },
          setSource: function(src) {
            var image = new self2.Image(), crossOrigin = this._crossOrigin;
            if (crossOrigin)
              image.crossOrigin = crossOrigin;
            if (src)
              image.src = src;
            this.setImage(image);
          },
          getCrossOrigin: function() {
            var image = this._image;
            return image && image.crossOrigin || this._crossOrigin || "";
          },
          setCrossOrigin: function(crossOrigin) {
            this._crossOrigin = crossOrigin;
            var image = this._image;
            if (image)
              image.crossOrigin = crossOrigin;
          },
          getSmoothing: function() {
            return this._smoothing;
          },
          setSmoothing: function(smoothing) {
            this._smoothing = typeof smoothing === "string" ? smoothing : smoothing ? "low" : "off";
            this._changed(257);
          },
          getElement: function() {
            return this._canvas || this._loaded && this._image;
          }
        }, {
          beans: false,
          getSubCanvas: function() {
            var rect = Rectangle.read(arguments), ctx = CanvasProvider.getContext(rect.getSize());
            ctx.drawImage(
              this.getCanvas(),
              rect.x,
              rect.y,
              rect.width,
              rect.height,
              0,
              0,
              rect.width,
              rect.height
            );
            return ctx.canvas;
          },
          getSubRaster: function() {
            var rect = Rectangle.read(arguments), raster = new Raster(Item.NO_INSERT);
            raster._setImage(this.getSubCanvas(rect));
            raster.translate(rect.getCenter().subtract(this.getSize().divide(2)));
            raster._matrix.prepend(this._matrix);
            raster.insertAbove(this);
            return raster;
          },
          toDataURL: function() {
            var image = this._image, src = image && image.src;
            if (/^data:/.test(src))
              return src;
            var canvas = this.getCanvas();
            return canvas ? canvas.toDataURL.apply(canvas, arguments) : null;
          },
          drawImage: function(image) {
            var point = Point.read(arguments, 1);
            this.getContext(true).drawImage(image, point.x, point.y);
          },
          getAverageColor: function(object) {
            var bounds, path;
            if (!object) {
              bounds = this.getBounds();
            } else if (object instanceof PathItem) {
              path = object;
              bounds = object.getBounds();
            } else if (typeof object === "object") {
              if ("width" in object) {
                bounds = new Rectangle(object);
              } else if ("x" in object) {
                bounds = new Rectangle(object.x - 0.5, object.y - 0.5, 1, 1);
              }
            }
            if (!bounds)
              return null;
            var sampleSize = 32, width = Math.min(bounds.width, sampleSize), height = Math.min(bounds.height, sampleSize);
            var ctx = Raster._sampleContext;
            if (!ctx) {
              ctx = Raster._sampleContext = CanvasProvider.getContext(
                new Size(sampleSize)
              );
            } else {
              ctx.clearRect(0, 0, sampleSize + 1, sampleSize + 1);
            }
            ctx.save();
            var matrix = new Matrix().scale(width / bounds.width, height / bounds.height).translate(-bounds.x, -bounds.y);
            matrix.applyToContext(ctx);
            if (path)
              path.draw(ctx, new Base({ clip: true, matrices: [matrix] }));
            this._matrix.applyToContext(ctx);
            var element = this.getElement(), size = this._size;
            if (element)
              ctx.drawImage(element, -size.width / 2, -size.height / 2);
            ctx.restore();
            var pixels = ctx.getImageData(
              0.5,
              0.5,
              Math.ceil(width),
              Math.ceil(height)
            ).data, channels = [0, 0, 0], total = 0;
            for (var i2 = 0, l = pixels.length; i2 < l; i2 += 4) {
              var alpha = pixels[i2 + 3];
              total += alpha;
              alpha /= 255;
              channels[0] += pixels[i2] * alpha;
              channels[1] += pixels[i2 + 1] * alpha;
              channels[2] += pixels[i2 + 2] * alpha;
            }
            for (var i2 = 0; i2 < 3; i2++)
              channels[i2] /= total;
            return total ? Color.read(channels) : null;
          },
          getPixel: function() {
            var point = Point.read(arguments);
            var data = this.getContext().getImageData(point.x, point.y, 1, 1).data;
            return new Color(
              "rgb",
              [data[0] / 255, data[1] / 255, data[2] / 255],
              data[3] / 255
            );
          },
          setPixel: function() {
            var args = arguments, point = Point.read(args), color = Color.read(args), components = color._convert("rgb"), alpha = color._alpha, ctx = this.getContext(true), imageData = ctx.createImageData(1, 1), data = imageData.data;
            data[0] = components[0] * 255;
            data[1] = components[1] * 255;
            data[2] = components[2] * 255;
            data[3] = alpha != null ? alpha * 255 : 255;
            ctx.putImageData(imageData, point.x, point.y);
          },
          clear: function() {
            var size = this._size;
            this.getContext(true).clearRect(0, 0, size.width + 1, size.height + 1);
          },
          createImageData: function() {
            var size = Size.read(arguments);
            return this.getContext().createImageData(size.width, size.height);
          },
          getImageData: function() {
            var rect = Rectangle.read(arguments);
            if (rect.isEmpty())
              rect = new Rectangle(this._size);
            return this.getContext().getImageData(
              rect.x,
              rect.y,
              rect.width,
              rect.height
            );
          },
          putImageData: function(data) {
            var point = Point.read(arguments, 1);
            this.getContext(true).putImageData(data, point.x, point.y);
          },
          setImageData: function(data) {
            this.setSize(data);
            this.getContext(true).putImageData(data, 0, 0);
          },
          _getBounds: function(matrix, options) {
            var rect = new Rectangle(this._size).setCenter(0, 0);
            return matrix ? matrix._transformBounds(rect) : rect;
          },
          _hitTestSelf: function(point) {
            if (this._contains(point)) {
              var that = this;
              return new HitResult("pixel", that, {
                offset: point.add(that._size.divide(2)).round(),
                color: {
                  get: function() {
                    return that.getPixel(this.offset);
                  }
                }
              });
            }
          },
          _draw: function(ctx, param, viewMatrix) {
            var element = this.getElement();
            if (element && element.width > 0 && element.height > 0) {
              ctx.globalAlpha = Numerical.clamp(this._opacity, 0, 1);
              this._setStyles(ctx, param, viewMatrix);
              var smoothing = this._smoothing, disabled = smoothing === "off";
              DomElement.setPrefixed(
                ctx,
                disabled ? "imageSmoothingEnabled" : "imageSmoothingQuality",
                disabled ? false : smoothing
              );
              ctx.drawImage(
                element,
                -this._size.width / 2,
                -this._size.height / 2
              );
            }
          },
          _canComposite: function() {
            return true;
          }
        });
        var SymbolItem = Item.extend({
          _class: "SymbolItem",
          _applyMatrix: false,
          _canApplyMatrix: false,
          _boundsOptions: { stroke: true },
          _serializeFields: {
            symbol: null
          },
          initialize: function SymbolItem2(arg0, arg1) {
            if (!this._initialize(
              arg0,
              arg1 !== undefined2 && Point.read(arguments, 1)
            ))
              this.setDefinition(arg0 instanceof SymbolDefinition ? arg0 : new SymbolDefinition(arg0));
          },
          _equals: function(item) {
            return this._definition === item._definition;
          },
          copyContent: function(source) {
            this.setDefinition(source._definition);
          },
          getDefinition: function() {
            return this._definition;
          },
          setDefinition: function(definition) {
            this._definition = definition;
            this._changed(9);
          },
          getSymbol: "#getDefinition",
          setSymbol: "#setDefinition",
          isEmpty: function() {
            return this._definition._item.isEmpty();
          },
          _getBounds: function(matrix, options) {
            var item = this._definition._item;
            return item._getCachedBounds(item._matrix.prepended(matrix), options);
          },
          _hitTestSelf: function(point, options, viewMatrix) {
            var opts = options.extend({ all: false });
            var res = this._definition._item._hitTest(point, opts, viewMatrix);
            if (res)
              res.item = this;
            return res;
          },
          _draw: function(ctx, param) {
            this._definition._item.draw(ctx, param);
          }
        });
        var SymbolDefinition = Base.extend({
          _class: "SymbolDefinition",
          initialize: function SymbolDefinition2(item, dontCenter) {
            this._id = UID.get();
            this.project = paper2.project;
            if (item)
              this.setItem(item, dontCenter);
          },
          _serialize: function(options, dictionary) {
            return dictionary.add(this, function() {
              return Base.serialize(
                [this._class, this._item],
                options,
                false,
                dictionary
              );
            });
          },
          _changed: function(flags) {
            if (flags & 8)
              Item._clearBoundsCache(this);
            if (flags & 1)
              this.project._changed(flags);
          },
          getItem: function() {
            return this._item;
          },
          setItem: function(item, _dontCenter) {
            if (item._symbol)
              item = item.clone();
            if (this._item)
              this._item._symbol = null;
            this._item = item;
            item.remove();
            item.setSelected(false);
            if (!_dontCenter)
              item.setPosition(new Point());
            item._symbol = this;
            this._changed(9);
          },
          getDefinition: "#getItem",
          setDefinition: "#setItem",
          place: function(position) {
            return new SymbolItem(this, position);
          },
          clone: function() {
            return new SymbolDefinition(this._item.clone(false));
          },
          equals: function(symbol) {
            return symbol === this || symbol && this._item.equals(symbol._item) || false;
          }
        });
        var HitResult = Base.extend({
          _class: "HitResult",
          initialize: function HitResult2(type, item, values) {
            this.type = type;
            this.item = item;
            if (values)
              this.inject(values);
          },
          statics: {
            getOptions: function(args) {
              var options = args && Base.read(args);
              return new Base({
                type: null,
                tolerance: paper2.settings.hitTolerance,
                fill: !options,
                stroke: !options,
                segments: !options,
                handles: false,
                ends: false,
                position: false,
                center: false,
                bounds: false,
                guides: false,
                selected: false
              }, options);
            }
          }
        });
        var Segment = Base.extend({
          _class: "Segment",
          beans: true,
          _selection: 0,
          initialize: function Segment2(arg0, arg1, arg2, arg3, arg4, arg5) {
            var count = arguments.length, point, handleIn, handleOut, selection;
            if (count > 0) {
              if (arg0 == null || typeof arg0 === "object") {
                if (count === 1 && arg0 && "point" in arg0) {
                  point = arg0.point;
                  handleIn = arg0.handleIn;
                  handleOut = arg0.handleOut;
                  selection = arg0.selection;
                } else {
                  point = arg0;
                  handleIn = arg1;
                  handleOut = arg2;
                  selection = arg3;
                }
              } else {
                point = [arg0, arg1];
                handleIn = arg2 !== undefined2 ? [arg2, arg3] : null;
                handleOut = arg4 !== undefined2 ? [arg4, arg5] : null;
              }
            }
            new SegmentPoint(point, this, "_point");
            new SegmentPoint(handleIn, this, "_handleIn");
            new SegmentPoint(handleOut, this, "_handleOut");
            if (selection)
              this.setSelection(selection);
          },
          _serialize: function(options, dictionary) {
            var point = this._point, selection = this._selection, obj = selection || this.hasHandles() ? [point, this._handleIn, this._handleOut] : point;
            if (selection)
              obj.push(selection);
            return Base.serialize(obj, options, true, dictionary);
          },
          _changed: function(point) {
            var path = this._path;
            if (!path)
              return;
            var curves = path._curves, index = this._index, curve;
            if (curves) {
              if ((!point || point === this._point || point === this._handleIn) && (curve = index > 0 ? curves[index - 1] : path._closed ? curves[curves.length - 1] : null))
                curve._changed();
              if ((!point || point === this._point || point === this._handleOut) && (curve = curves[index]))
                curve._changed();
            }
            path._changed(41);
          },
          getPoint: function() {
            return this._point;
          },
          setPoint: function() {
            this._point.set(Point.read(arguments));
          },
          getHandleIn: function() {
            return this._handleIn;
          },
          setHandleIn: function() {
            this._handleIn.set(Point.read(arguments));
          },
          getHandleOut: function() {
            return this._handleOut;
          },
          setHandleOut: function() {
            this._handleOut.set(Point.read(arguments));
          },
          hasHandles: function() {
            return !this._handleIn.isZero() || !this._handleOut.isZero();
          },
          isSmooth: function() {
            var handleIn = this._handleIn, handleOut = this._handleOut;
            return !handleIn.isZero() && !handleOut.isZero() && handleIn.isCollinear(handleOut);
          },
          clearHandles: function() {
            this._handleIn._set(0, 0);
            this._handleOut._set(0, 0);
          },
          getSelection: function() {
            return this._selection;
          },
          setSelection: function(selection) {
            var oldSelection = this._selection, path = this._path;
            this._selection = selection = selection || 0;
            if (path && selection !== oldSelection) {
              path._updateSelection(this, oldSelection, selection);
              path._changed(257);
            }
          },
          _changeSelection: function(flag, selected) {
            var selection = this._selection;
            this.setSelection(selected ? selection | flag : selection & ~flag);
          },
          isSelected: function() {
            return !!(this._selection & 7);
          },
          setSelected: function(selected) {
            this._changeSelection(7, selected);
          },
          getIndex: function() {
            return this._index !== undefined2 ? this._index : null;
          },
          getPath: function() {
            return this._path || null;
          },
          getCurve: function() {
            var path = this._path, index = this._index;
            if (path) {
              if (index > 0 && !path._closed && index === path._segments.length - 1)
                index--;
              return path.getCurves()[index] || null;
            }
            return null;
          },
          getLocation: function() {
            var curve = this.getCurve();
            return curve ? new CurveLocation(curve, this === curve._segment1 ? 0 : 1) : null;
          },
          getNext: function() {
            var segments = this._path && this._path._segments;
            return segments && (segments[this._index + 1] || this._path._closed && segments[0]) || null;
          },
          smooth: function(options, _first, _last) {
            var opts = options || {}, type = opts.type, factor = opts.factor, prev = this.getPrevious(), next = this.getNext(), p0 = (prev || this)._point, p1 = this._point, p2 = (next || this)._point, d1 = p0.getDistance(p1), d2 = p1.getDistance(p2);
            if (!type || type === "catmull-rom") {
              var a = factor === undefined2 ? 0.5 : factor, d1_a = Math.pow(d1, a), d1_2a = d1_a * d1_a, d2_a = Math.pow(d2, a), d2_2a = d2_a * d2_a;
              if (!_first && prev) {
                var A = 2 * d2_2a + 3 * d2_a * d1_a + d1_2a, N = 3 * d2_a * (d2_a + d1_a);
                this.setHandleIn(N !== 0 ? new Point(
                  (d2_2a * p0._x + A * p1._x - d1_2a * p2._x) / N - p1._x,
                  (d2_2a * p0._y + A * p1._y - d1_2a * p2._y) / N - p1._y
                ) : new Point());
              }
              if (!_last && next) {
                var A = 2 * d1_2a + 3 * d1_a * d2_a + d2_2a, N = 3 * d1_a * (d1_a + d2_a);
                this.setHandleOut(N !== 0 ? new Point(
                  (d1_2a * p2._x + A * p1._x - d2_2a * p0._x) / N - p1._x,
                  (d1_2a * p2._y + A * p1._y - d2_2a * p0._y) / N - p1._y
                ) : new Point());
              }
            } else if (type === "geometric") {
              if (prev && next) {
                var vector = p0.subtract(p2), t2 = factor === undefined2 ? 0.4 : factor, k = t2 * d1 / (d1 + d2);
                if (!_first)
                  this.setHandleIn(vector.multiply(k));
                if (!_last)
                  this.setHandleOut(vector.multiply(k - t2));
              }
            } else {
              throw new Error("Smoothing method '" + type + "' not supported.");
            }
          },
          getPrevious: function() {
            var segments = this._path && this._path._segments;
            return segments && (segments[this._index - 1] || this._path._closed && segments[segments.length - 1]) || null;
          },
          isFirst: function() {
            return !this._index;
          },
          isLast: function() {
            var path = this._path;
            return path && this._index === path._segments.length - 1 || false;
          },
          reverse: function() {
            var handleIn = this._handleIn, handleOut = this._handleOut, tmp = handleIn.clone();
            handleIn.set(handleOut);
            handleOut.set(tmp);
          },
          reversed: function() {
            return new Segment(this._point, this._handleOut, this._handleIn);
          },
          remove: function() {
            return this._path ? !!this._path.removeSegment(this._index) : false;
          },
          clone: function() {
            return new Segment(this._point, this._handleIn, this._handleOut);
          },
          equals: function(segment) {
            return segment === this || segment && this._class === segment._class && this._point.equals(segment._point) && this._handleIn.equals(segment._handleIn) && this._handleOut.equals(segment._handleOut) || false;
          },
          toString: function() {
            var parts = ["point: " + this._point];
            if (!this._handleIn.isZero())
              parts.push("handleIn: " + this._handleIn);
            if (!this._handleOut.isZero())
              parts.push("handleOut: " + this._handleOut);
            return "{ " + parts.join(", ") + " }";
          },
          transform: function(matrix) {
            this._transformCoordinates(matrix, new Array(6), true);
            this._changed();
          },
          interpolate: function(from, to, factor) {
            var u = 1 - factor, v = factor, point1 = from._point, point2 = to._point, handleIn1 = from._handleIn, handleIn2 = to._handleIn, handleOut2 = to._handleOut, handleOut1 = from._handleOut;
            this._point._set(
              u * point1._x + v * point2._x,
              u * point1._y + v * point2._y,
              true
            );
            this._handleIn._set(
              u * handleIn1._x + v * handleIn2._x,
              u * handleIn1._y + v * handleIn2._y,
              true
            );
            this._handleOut._set(
              u * handleOut1._x + v * handleOut2._x,
              u * handleOut1._y + v * handleOut2._y,
              true
            );
            this._changed();
          },
          _transformCoordinates: function(matrix, coords, change) {
            var point = this._point, handleIn = !change || !this._handleIn.isZero() ? this._handleIn : null, handleOut = !change || !this._handleOut.isZero() ? this._handleOut : null, x = point._x, y = point._y, i2 = 2;
            coords[0] = x;
            coords[1] = y;
            if (handleIn) {
              coords[i2++] = handleIn._x + x;
              coords[i2++] = handleIn._y + y;
            }
            if (handleOut) {
              coords[i2++] = handleOut._x + x;
              coords[i2++] = handleOut._y + y;
            }
            if (matrix) {
              matrix._transformCoordinates(coords, coords, i2 / 2);
              x = coords[0];
              y = coords[1];
              if (change) {
                point._x = x;
                point._y = y;
                i2 = 2;
                if (handleIn) {
                  handleIn._x = coords[i2++] - x;
                  handleIn._y = coords[i2++] - y;
                }
                if (handleOut) {
                  handleOut._x = coords[i2++] - x;
                  handleOut._y = coords[i2++] - y;
                }
              } else {
                if (!handleIn) {
                  coords[i2++] = x;
                  coords[i2++] = y;
                }
                if (!handleOut) {
                  coords[i2++] = x;
                  coords[i2++] = y;
                }
              }
            }
            return coords;
          }
        });
        var SegmentPoint = Point.extend({
          initialize: function SegmentPoint2(point, owner, key) {
            var x, y, selected;
            if (!point) {
              x = y = 0;
            } else if ((x = point[0]) !== undefined2) {
              y = point[1];
            } else {
              var pt = point;
              if ((x = pt.x) === undefined2) {
                pt = Point.read(arguments);
                x = pt.x;
              }
              y = pt.y;
              selected = pt.selected;
            }
            this._x = x;
            this._y = y;
            this._owner = owner;
            owner[key] = this;
            if (selected)
              this.setSelected(true);
          },
          _set: function(x, y) {
            this._x = x;
            this._y = y;
            this._owner._changed(this);
            return this;
          },
          getX: function() {
            return this._x;
          },
          setX: function(x) {
            this._x = x;
            this._owner._changed(this);
          },
          getY: function() {
            return this._y;
          },
          setY: function(y) {
            this._y = y;
            this._owner._changed(this);
          },
          isZero: function() {
            var isZero = Numerical.isZero;
            return isZero(this._x) && isZero(this._y);
          },
          isSelected: function() {
            return !!(this._owner._selection & this._getSelection());
          },
          setSelected: function(selected) {
            this._owner._changeSelection(this._getSelection(), selected);
          },
          _getSelection: function() {
            var owner = this._owner;
            return this === owner._point ? 1 : this === owner._handleIn ? 2 : this === owner._handleOut ? 4 : 0;
          }
        });
        var Curve = Base.extend(
          {
            _class: "Curve",
            beans: true,
            initialize: function Curve2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
              var count = arguments.length, seg1, seg2, point1, point2, handle1, handle2;
              if (count === 3) {
                this._path = arg0;
                seg1 = arg1;
                seg2 = arg2;
              } else if (!count) {
                seg1 = new Segment();
                seg2 = new Segment();
              } else if (count === 1) {
                if ("segment1" in arg0) {
                  seg1 = new Segment(arg0.segment1);
                  seg2 = new Segment(arg0.segment2);
                } else if ("point1" in arg0) {
                  point1 = arg0.point1;
                  handle1 = arg0.handle1;
                  handle2 = arg0.handle2;
                  point2 = arg0.point2;
                } else if (Array.isArray(arg0)) {
                  point1 = [arg0[0], arg0[1]];
                  point2 = [arg0[6], arg0[7]];
                  handle1 = [arg0[2] - arg0[0], arg0[3] - arg0[1]];
                  handle2 = [arg0[4] - arg0[6], arg0[5] - arg0[7]];
                }
              } else if (count === 2) {
                seg1 = new Segment(arg0);
                seg2 = new Segment(arg1);
              } else if (count === 4) {
                point1 = arg0;
                handle1 = arg1;
                handle2 = arg2;
                point2 = arg3;
              } else if (count === 8) {
                point1 = [arg0, arg1];
                point2 = [arg6, arg7];
                handle1 = [arg2 - arg0, arg3 - arg1];
                handle2 = [arg4 - arg6, arg5 - arg7];
              }
              this._segment1 = seg1 || new Segment(point1, null, handle1);
              this._segment2 = seg2 || new Segment(point2, handle2, null);
            },
            _serialize: function(options, dictionary) {
              return Base.serialize(
                this.hasHandles() ? [
                  this.getPoint1(),
                  this.getHandle1(),
                  this.getHandle2(),
                  this.getPoint2()
                ] : [this.getPoint1(), this.getPoint2()],
                options,
                true,
                dictionary
              );
            },
            _changed: function() {
              this._length = this._bounds = undefined2;
            },
            clone: function() {
              return new Curve(this._segment1, this._segment2);
            },
            toString: function() {
              var parts = ["point1: " + this._segment1._point];
              if (!this._segment1._handleOut.isZero())
                parts.push("handle1: " + this._segment1._handleOut);
              if (!this._segment2._handleIn.isZero())
                parts.push("handle2: " + this._segment2._handleIn);
              parts.push("point2: " + this._segment2._point);
              return "{ " + parts.join(", ") + " }";
            },
            classify: function() {
              return Curve.classify(this.getValues());
            },
            remove: function() {
              var removed = false;
              if (this._path) {
                var segment2 = this._segment2, handleOut = segment2._handleOut;
                removed = segment2.remove();
                if (removed)
                  this._segment1._handleOut.set(handleOut);
              }
              return removed;
            },
            getPoint1: function() {
              return this._segment1._point;
            },
            setPoint1: function() {
              this._segment1._point.set(Point.read(arguments));
            },
            getPoint2: function() {
              return this._segment2._point;
            },
            setPoint2: function() {
              this._segment2._point.set(Point.read(arguments));
            },
            getHandle1: function() {
              return this._segment1._handleOut;
            },
            setHandle1: function() {
              this._segment1._handleOut.set(Point.read(arguments));
            },
            getHandle2: function() {
              return this._segment2._handleIn;
            },
            setHandle2: function() {
              this._segment2._handleIn.set(Point.read(arguments));
            },
            getSegment1: function() {
              return this._segment1;
            },
            getSegment2: function() {
              return this._segment2;
            },
            getPath: function() {
              return this._path;
            },
            getIndex: function() {
              return this._segment1._index;
            },
            getNext: function() {
              var curves = this._path && this._path._curves;
              return curves && (curves[this._segment1._index + 1] || this._path._closed && curves[0]) || null;
            },
            getPrevious: function() {
              var curves = this._path && this._path._curves;
              return curves && (curves[this._segment1._index - 1] || this._path._closed && curves[curves.length - 1]) || null;
            },
            isFirst: function() {
              return !this._segment1._index;
            },
            isLast: function() {
              var path = this._path;
              return path && this._segment1._index === path._curves.length - 1 || false;
            },
            isSelected: function() {
              return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected();
            },
            setSelected: function(selected) {
              this.getPoint1().setSelected(selected);
              this.getHandle1().setSelected(selected);
              this.getHandle2().setSelected(selected);
              this.getPoint2().setSelected(selected);
            },
            getValues: function(matrix) {
              return Curve.getValues(this._segment1, this._segment2, matrix);
            },
            getPoints: function() {
              var coords = this.getValues(), points = [];
              for (var i2 = 0; i2 < 8; i2 += 2)
                points.push(new Point(coords[i2], coords[i2 + 1]));
              return points;
            }
          },
          {
            getLength: function() {
              if (this._length == null)
                this._length = Curve.getLength(this.getValues(), 0, 1);
              return this._length;
            },
            getArea: function() {
              return Curve.getArea(this.getValues());
            },
            getLine: function() {
              return new Line(this._segment1._point, this._segment2._point);
            },
            getPart: function(from, to) {
              return new Curve(Curve.getPart(this.getValues(), from, to));
            },
            getPartLength: function(from, to) {
              return Curve.getLength(this.getValues(), from, to);
            },
            divideAt: function(location) {
              return this.divideAtTime(location && location.curve === this ? location.time : this.getTimeAt(location));
            },
            divideAtTime: function(time, _setHandles) {
              var tMin = 1e-8, tMax = 1 - tMin, res = null;
              if (time >= tMin && time <= tMax) {
                var parts = Curve.subdivide(this.getValues(), time), left = parts[0], right = parts[1], setHandles = _setHandles || this.hasHandles(), seg1 = this._segment1, seg2 = this._segment2, path = this._path;
                if (setHandles) {
                  seg1._handleOut._set(left[2] - left[0], left[3] - left[1]);
                  seg2._handleIn._set(right[4] - right[6], right[5] - right[7]);
                }
                var x = left[6], y = left[7], segment = new Segment(
                  new Point(x, y),
                  setHandles && new Point(left[4] - x, left[5] - y),
                  setHandles && new Point(right[2] - x, right[3] - y)
                );
                if (path) {
                  path.insert(seg1._index + 1, segment);
                  res = this.getNext();
                } else {
                  this._segment2 = segment;
                  this._changed();
                  res = new Curve(segment, seg2);
                }
              }
              return res;
            },
            splitAt: function(location) {
              var path = this._path;
              return path ? path.splitAt(location) : null;
            },
            splitAtTime: function(time) {
              return this.splitAt(this.getLocationAtTime(time));
            },
            divide: function(offset, isTime) {
              return this.divideAtTime(offset === undefined2 ? 0.5 : isTime ? offset : this.getTimeAt(offset));
            },
            split: function(offset, isTime) {
              return this.splitAtTime(offset === undefined2 ? 0.5 : isTime ? offset : this.getTimeAt(offset));
            },
            reversed: function() {
              return new Curve(this._segment2.reversed(), this._segment1.reversed());
            },
            clearHandles: function() {
              this._segment1._handleOut._set(0, 0);
              this._segment2._handleIn._set(0, 0);
            },
            statics: {
              getValues: function(segment1, segment2, matrix, straight) {
                var p1 = segment1._point, h1 = segment1._handleOut, h2 = segment2._handleIn, p2 = segment2._point, x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, values = straight ? [x1, y1, x1, y1, x2, y2, x2, y2] : [
                  x1,
                  y1,
                  x1 + h1._x,
                  y1 + h1._y,
                  x2 + h2._x,
                  y2 + h2._y,
                  x2,
                  y2
                ];
                if (matrix)
                  matrix._transformCoordinates(values, values, 4);
                return values;
              },
              subdivide: function(v, t2) {
                var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7];
                if (t2 === undefined2)
                  t2 = 0.5;
                var u = 1 - t2, x4 = u * x0 + t2 * x1, y4 = u * y0 + t2 * y1, x5 = u * x1 + t2 * x2, y5 = u * y1 + t2 * y2, x6 = u * x2 + t2 * x3, y6 = u * y2 + t2 * y3, x7 = u * x4 + t2 * x5, y7 = u * y4 + t2 * y5, x8 = u * x5 + t2 * x6, y8 = u * y5 + t2 * y6, x9 = u * x7 + t2 * x8, y9 = u * y7 + t2 * y8;
                return [
                  [x0, y0, x4, y4, x7, y7, x9, y9],
                  [x9, y9, x8, y8, x6, y6, x3, y3]
                ];
              },
              getMonoCurves: function(v, dir) {
                var curves = [], io = dir ? 0 : 1, o0 = v[io + 0], o1 = v[io + 2], o2 = v[io + 4], o3 = v[io + 6];
                if (o0 >= o1 === o1 >= o2 && o1 >= o2 === o2 >= o3 || Curve.isStraight(v)) {
                  curves.push(v);
                } else {
                  var a = 3 * (o1 - o2) - o0 + o3, b = 2 * (o0 + o2) - 4 * o1, c = o1 - o0, tMin = 1e-8, tMax = 1 - tMin, roots = [], n = Numerical.solveQuadratic(a, b, c, roots, tMin, tMax);
                  if (!n) {
                    curves.push(v);
                  } else {
                    roots.sort();
                    var t2 = roots[0], parts = Curve.subdivide(v, t2);
                    curves.push(parts[0]);
                    if (n > 1) {
                      t2 = (roots[1] - t2) / (1 - t2);
                      parts = Curve.subdivide(parts[1], t2);
                      curves.push(parts[0]);
                    }
                    curves.push(parts[1]);
                  }
                }
                return curves;
              },
              solveCubic: function(v, coord, val, roots, min, max) {
                var v0 = v[coord], v1 = v[coord + 2], v2 = v[coord + 4], v3 = v[coord + 6], res = 0;
                if (!(v0 < val && v3 < val && v1 < val && v2 < val || v0 > val && v3 > val && v1 > val && v2 > val)) {
                  var c = 3 * (v1 - v0), b = 3 * (v2 - v1) - c, a = v3 - v0 - c - b;
                  res = Numerical.solveCubic(a, b, c, v0 - val, roots, min, max);
                }
                return res;
              },
              getTimeOf: function(v, point) {
                var p0 = new Point(v[0], v[1]), p3 = new Point(v[6], v[7]), epsilon = 1e-12, geomEpsilon = 1e-7, t2 = point.isClose(p0, epsilon) ? 0 : point.isClose(p3, epsilon) ? 1 : null;
                if (t2 === null) {
                  var coords = [point.x, point.y], roots = [];
                  for (var c = 0; c < 2; c++) {
                    var count = Curve.solveCubic(v, c, coords[c], roots, 0, 1);
                    for (var i2 = 0; i2 < count; i2++) {
                      var u = roots[i2];
                      if (point.isClose(Curve.getPoint(v, u), geomEpsilon))
                        return u;
                    }
                  }
                }
                return point.isClose(p0, geomEpsilon) ? 0 : point.isClose(p3, geomEpsilon) ? 1 : null;
              },
              getNearestTime: function(v, point) {
                if (Curve.isStraight(v)) {
                  var x0 = v[0], y0 = v[1], x3 = v[6], y3 = v[7], vx = x3 - x0, vy = y3 - y0, det = vx * vx + vy * vy;
                  if (det === 0)
                    return 0;
                  var u = ((point.x - x0) * vx + (point.y - y0) * vy) / det;
                  return u < 1e-12 ? 0 : u > 0.999999999999 ? 1 : Curve.getTimeOf(
                    v,
                    new Point(x0 + u * vx, y0 + u * vy)
                  );
                }
                var count = 100, minDist = Infinity, minT = 0;
                function refine(t2) {
                  if (t2 >= 0 && t2 <= 1) {
                    var dist = point.getDistance(Curve.getPoint(v, t2), true);
                    if (dist < minDist) {
                      minDist = dist;
                      minT = t2;
                      return true;
                    }
                  }
                }
                for (var i2 = 0; i2 <= count; i2++)
                  refine(i2 / count);
                var step = 1 / (count * 2);
                while (step > 1e-8) {
                  if (!refine(minT - step) && !refine(minT + step))
                    step /= 2;
                }
                return minT;
              },
              getPart: function(v, from, to) {
                var flip = from > to;
                if (flip) {
                  var tmp = from;
                  from = to;
                  to = tmp;
                }
                if (from > 0)
                  v = Curve.subdivide(v, from)[1];
                if (to < 1)
                  v = Curve.subdivide(v, (to - from) / (1 - from))[0];
                return flip ? [v[6], v[7], v[4], v[5], v[2], v[3], v[0], v[1]] : v;
              },
              isFlatEnough: function(v, flatness) {
                var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7], ux = 3 * x1 - 2 * x0 - x3, uy = 3 * y1 - 2 * y0 - y3, vx = 3 * x2 - 2 * x3 - x0, vy = 3 * y2 - 2 * y3 - y0;
                return Math.max(ux * ux, vx * vx) + Math.max(uy * uy, vy * vy) <= 16 * flatness * flatness;
              },
              getArea: function(v) {
                var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7];
                return 3 * ((y3 - y0) * (x1 + x2) - (x3 - x0) * (y1 + y2) + y1 * (x0 - x2) - x1 * (y0 - y2) + y3 * (x2 + x0 / 3) - x3 * (y2 + y0 / 3)) / 20;
              },
              getBounds: function(v) {
                var min = v.slice(0, 2), max = min.slice(), roots = [0, 0];
                for (var i2 = 0; i2 < 2; i2++)
                  Curve._addBounds(
                    v[i2],
                    v[i2 + 2],
                    v[i2 + 4],
                    v[i2 + 6],
                    i2,
                    0,
                    min,
                    max,
                    roots
                  );
                return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
              },
              _addBounds: function(v0, v1, v2, v3, coord, padding, min, max, roots) {
                function add(value, padding2) {
                  var left = value - padding2, right = value + padding2;
                  if (left < min[coord])
                    min[coord] = left;
                  if (right > max[coord])
                    max[coord] = right;
                }
                padding /= 2;
                var minPad = min[coord] + padding, maxPad = max[coord] - padding;
                if (v0 < minPad || v1 < minPad || v2 < minPad || v3 < minPad || v0 > maxPad || v1 > maxPad || v2 > maxPad || v3 > maxPad) {
                  if (v1 < v0 != v1 < v3 && v2 < v0 != v2 < v3) {
                    add(v0, 0);
                    add(v3, 0);
                  } else {
                    var a = 3 * (v1 - v2) - v0 + v3, b = 2 * (v0 + v2) - 4 * v1, c = v1 - v0, count = Numerical.solveQuadratic(a, b, c, roots), tMin = 1e-8, tMax = 1 - tMin;
                    add(v3, 0);
                    for (var i2 = 0; i2 < count; i2++) {
                      var t2 = roots[i2], u = 1 - t2;
                      if (tMin <= t2 && t2 <= tMax)
                        add(
                          u * u * u * v0 + 3 * u * u * t2 * v1 + 3 * u * t2 * t2 * v2 + t2 * t2 * t2 * v3,
                          padding
                        );
                    }
                  }
                }
              }
            }
          },
          Base.each(
            ["getBounds", "getStrokeBounds", "getHandleBounds"],
            function(name) {
              this[name] = function() {
                if (!this._bounds)
                  this._bounds = {};
                var bounds = this._bounds[name];
                if (!bounds) {
                  bounds = this._bounds[name] = Path[name](
                    [this._segment1, this._segment2],
                    false,
                    this._path
                  );
                }
                return bounds.clone();
              };
            },
            {}
          ),
          Base.each({
            isStraight: function(p1, h1, h2, p2) {
              if (h1.isZero() && h2.isZero()) {
                return true;
              } else {
                var v = p2.subtract(p1);
                if (v.isZero()) {
                  return false;
                } else if (v.isCollinear(h1) && v.isCollinear(h2)) {
                  var l = new Line(p1, p2), epsilon = 1e-7;
                  if (l.getDistance(p1.add(h1)) < epsilon && l.getDistance(p2.add(h2)) < epsilon) {
                    var div = v.dot(v), s1 = v.dot(h1) / div, s2 = v.dot(h2) / div;
                    return s1 >= 0 && s1 <= 1 && s2 <= 0 && s2 >= -1;
                  }
                }
              }
              return false;
            },
            isLinear: function(p1, h1, h2, p2) {
              var third = p2.subtract(p1).divide(3);
              return h1.equals(third) && h2.negate().equals(third);
            }
          }, function(test, name) {
            this[name] = function(epsilon) {
              var seg1 = this._segment1, seg2 = this._segment2;
              return test(
                seg1._point,
                seg1._handleOut,
                seg2._handleIn,
                seg2._point,
                epsilon
              );
            };
            this.statics[name] = function(v, epsilon) {
              var x0 = v[0], y0 = v[1], x3 = v[6], y3 = v[7];
              return test(
                new Point(x0, y0),
                new Point(v[2] - x0, v[3] - y0),
                new Point(v[4] - x3, v[5] - y3),
                new Point(x3, y3),
                epsilon
              );
            };
          }, {
            statics: {},
            hasHandles: function() {
              return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero();
            },
            hasLength: function(epsilon) {
              return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (epsilon || 0);
            },
            isCollinear: function(curve) {
              return curve && this.isStraight() && curve.isStraight() && this.getLine().isCollinear(curve.getLine());
            },
            isHorizontal: function() {
              return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).y) < 1e-8;
            },
            isVertical: function() {
              return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).x) < 1e-8;
            }
          }),
          {
            beans: false,
            getLocationAt: function(offset, _isTime) {
              return this.getLocationAtTime(
                _isTime ? offset : this.getTimeAt(offset)
              );
            },
            getLocationAtTime: function(t2) {
              return t2 != null && t2 >= 0 && t2 <= 1 ? new CurveLocation(this, t2) : null;
            },
            getTimeAt: function(offset, start) {
              return Curve.getTimeAt(this.getValues(), offset, start);
            },
            getParameterAt: "#getTimeAt",
            getTimesWithTangent: function() {
              var tangent = Point.read(arguments);
              return tangent.isZero() ? [] : Curve.getTimesWithTangent(this.getValues(), tangent);
            },
            getOffsetAtTime: function(t2) {
              return this.getPartLength(0, t2);
            },
            getLocationOf: function() {
              return this.getLocationAtTime(this.getTimeOf(Point.read(arguments)));
            },
            getOffsetOf: function() {
              var loc = this.getLocationOf.apply(this, arguments);
              return loc ? loc.getOffset() : null;
            },
            getTimeOf: function() {
              return Curve.getTimeOf(this.getValues(), Point.read(arguments));
            },
            getParameterOf: "#getTimeOf",
            getNearestLocation: function() {
              var point = Point.read(arguments), values = this.getValues(), t2 = Curve.getNearestTime(values, point), pt = Curve.getPoint(values, t2);
              return new CurveLocation(this, t2, pt, null, point.getDistance(pt));
            },
            getNearestPoint: function() {
              var loc = this.getNearestLocation.apply(this, arguments);
              return loc ? loc.getPoint() : loc;
            }
          },
          new function() {
            var methods = [
              "getPoint",
              "getTangent",
              "getNormal",
              "getWeightedTangent",
              "getWeightedNormal",
              "getCurvature"
            ];
            return Base.each(
              methods,
              function(name) {
                this[name + "At"] = function(location, _isTime) {
                  var values = this.getValues();
                  return Curve[name](values, _isTime ? location : Curve.getTimeAt(values, location));
                };
                this[name + "AtTime"] = function(time) {
                  return Curve[name](this.getValues(), time);
                };
              },
              {
                statics: {
                  _evaluateMethods: methods
                }
              }
            );
          }(),
          new function() {
            function getLengthIntegrand(v) {
              var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7], ax = 9 * (x1 - x2) + 3 * (x3 - x0), bx = 6 * (x0 + x2) - 12 * x1, cx = 3 * (x1 - x0), ay = 9 * (y1 - y2) + 3 * (y3 - y0), by = 6 * (y0 + y2) - 12 * y1, cy = 3 * (y1 - y0);
              return function(t2) {
                var dx = (ax * t2 + bx) * t2 + cx, dy = (ay * t2 + by) * t2 + cy;
                return Math.sqrt(dx * dx + dy * dy);
              };
            }
            function getIterations(a, b) {
              return Math.max(2, Math.min(16, Math.ceil(Math.abs(b - a) * 32)));
            }
            function evaluate(v, t2, type, normalized) {
              if (t2 == null || t2 < 0 || t2 > 1)
                return null;
              var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7], isZero = Numerical.isZero;
              if (isZero(x1 - x0) && isZero(y1 - y0)) {
                x1 = x0;
                y1 = y0;
              }
              if (isZero(x2 - x3) && isZero(y2 - y3)) {
                x2 = x3;
                y2 = y3;
              }
              var cx = 3 * (x1 - x0), bx = 3 * (x2 - x1) - cx, ax = x3 - x0 - cx - bx, cy = 3 * (y1 - y0), by = 3 * (y2 - y1) - cy, ay = y3 - y0 - cy - by, x, y;
              if (type === 0) {
                x = t2 === 0 ? x0 : t2 === 1 ? x3 : ((ax * t2 + bx) * t2 + cx) * t2 + x0;
                y = t2 === 0 ? y0 : t2 === 1 ? y3 : ((ay * t2 + by) * t2 + cy) * t2 + y0;
              } else {
                var tMin = 1e-8, tMax = 1 - tMin;
                if (t2 < tMin) {
                  x = cx;
                  y = cy;
                } else if (t2 > tMax) {
                  x = 3 * (x3 - x2);
                  y = 3 * (y3 - y2);
                } else {
                  x = (3 * ax * t2 + 2 * bx) * t2 + cx;
                  y = (3 * ay * t2 + 2 * by) * t2 + cy;
                }
                if (normalized) {
                  if (x === 0 && y === 0 && (t2 < tMin || t2 > tMax)) {
                    x = x2 - x1;
                    y = y2 - y1;
                  }
                  var len = Math.sqrt(x * x + y * y);
                  if (len) {
                    x /= len;
                    y /= len;
                  }
                }
                if (type === 3) {
                  var x2 = 6 * ax * t2 + 2 * bx, y2 = 6 * ay * t2 + 2 * by, d = Math.pow(x * x + y * y, 3 / 2);
                  x = d !== 0 ? (x * y2 - y * x2) / d : 0;
                  y = 0;
                }
              }
              return type === 2 ? new Point(y, -x) : new Point(x, y);
            }
            return { statics: {
              classify: function(v) {
                var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7], a1 = x0 * (y3 - y2) + y0 * (x2 - x3) + x3 * y2 - y3 * x2, a2 = x1 * (y0 - y3) + y1 * (x3 - x0) + x0 * y3 - y0 * x3, a3 = x2 * (y1 - y0) + y2 * (x0 - x1) + x1 * y0 - y1 * x0, d3 = 3 * a3, d2 = d3 - a2, d1 = d2 - a2 + a1, l = Math.sqrt(d1 * d1 + d2 * d2 + d3 * d3), s = l !== 0 ? 1 / l : 0, isZero = Numerical.isZero, serpentine = "serpentine";
                d1 *= s;
                d2 *= s;
                d3 *= s;
                function type(type2, t1, t2) {
                  var hasRoots = t1 !== undefined2, t1Ok = hasRoots && t1 > 0 && t1 < 1, t2Ok = hasRoots && t2 > 0 && t2 < 1;
                  if (hasRoots && (!(t1Ok || t2Ok) || type2 === "loop" && !(t1Ok && t2Ok))) {
                    type2 = "arch";
                    t1Ok = t2Ok = false;
                  }
                  return {
                    type: type2,
                    roots: t1Ok || t2Ok ? t1Ok && t2Ok ? t1 < t2 ? [t1, t2] : [t2, t1] : [t1Ok ? t1 : t2] : null
                  };
                }
                if (isZero(d1)) {
                  return isZero(d2) ? type(isZero(d3) ? "line" : "quadratic") : type(serpentine, d3 / (3 * d2));
                }
                var d = 3 * d2 * d2 - 4 * d1 * d3;
                if (isZero(d)) {
                  return type("cusp", d2 / (2 * d1));
                }
                var f1 = d > 0 ? Math.sqrt(d / 3) : Math.sqrt(-d), f2 = 2 * d1;
                return type(
                  d > 0 ? serpentine : "loop",
                  (d2 + f1) / f2,
                  (d2 - f1) / f2
                );
              },
              getLength: function(v, a, b, ds) {
                if (a === undefined2)
                  a = 0;
                if (b === undefined2)
                  b = 1;
                if (Curve.isStraight(v)) {
                  var c = v;
                  if (b < 1) {
                    c = Curve.subdivide(c, b)[0];
                    a /= b;
                  }
                  if (a > 0) {
                    c = Curve.subdivide(c, a)[1];
                  }
                  var dx = c[6] - c[0], dy = c[7] - c[1];
                  return Math.sqrt(dx * dx + dy * dy);
                }
                return Numerical.integrate(
                  ds || getLengthIntegrand(v),
                  a,
                  b,
                  getIterations(a, b)
                );
              },
              getTimeAt: function(v, offset, start) {
                if (start === undefined2)
                  start = offset < 0 ? 1 : 0;
                if (offset === 0)
                  return start;
                var abs = Math.abs, epsilon = 1e-12, forward = offset > 0, a = forward ? start : 0, b = forward ? 1 : start, ds = getLengthIntegrand(v), rangeLength = Curve.getLength(v, a, b, ds), diff = abs(offset) - rangeLength;
                if (abs(diff) < epsilon) {
                  return forward ? b : a;
                } else if (diff > epsilon) {
                  return null;
                }
                var guess = offset / rangeLength, length = 0;
                function f(t2) {
                  length += Numerical.integrate(
                    ds,
                    start,
                    t2,
                    getIterations(start, t2)
                  );
                  start = t2;
                  return length - offset;
                }
                return Numerical.findRoot(
                  f,
                  ds,
                  start + guess,
                  a,
                  b,
                  32,
                  1e-12
                );
              },
              getPoint: function(v, t2) {
                return evaluate(v, t2, 0, false);
              },
              getTangent: function(v, t2) {
                return evaluate(v, t2, 1, true);
              },
              getWeightedTangent: function(v, t2) {
                return evaluate(v, t2, 1, false);
              },
              getNormal: function(v, t2) {
                return evaluate(v, t2, 2, true);
              },
              getWeightedNormal: function(v, t2) {
                return evaluate(v, t2, 2, false);
              },
              getCurvature: function(v, t2) {
                return evaluate(v, t2, 3, false).x;
              },
              getPeaks: function(v) {
                var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7], ax = -x0 + 3 * x1 - 3 * x2 + x3, bx = 3 * x0 - 6 * x1 + 3 * x2, cx = -3 * x0 + 3 * x1, ay = -y0 + 3 * y1 - 3 * y2 + y3, by = 3 * y0 - 6 * y1 + 3 * y2, cy = -3 * y0 + 3 * y1, tMin = 1e-8, tMax = 1 - tMin, roots = [];
                Numerical.solveCubic(
                  9 * (ax * ax + ay * ay),
                  9 * (ax * bx + by * ay),
                  2 * (bx * bx + by * by) + 3 * (cx * ax + cy * ay),
                  cx * bx + by * cy,
                  roots,
                  tMin,
                  tMax
                );
                return roots.sort();
              }
            } };
          }(),
          new function() {
            function addLocation(locations, include, c1, t1, c2, t2, overlap) {
              var excludeStart = !overlap && c1.getPrevious() === c2, excludeEnd = !overlap && c1 !== c2 && c1.getNext() === c2, tMin = 1e-8, tMax = 1 - tMin;
              if (t1 !== null && t1 >= (excludeStart ? tMin : 0) && t1 <= (excludeEnd ? tMax : 1)) {
                if (t2 !== null && t2 >= (excludeEnd ? tMin : 0) && t2 <= (excludeStart ? tMax : 1)) {
                  var loc1 = new CurveLocation(c1, t1, null, overlap), loc2 = new CurveLocation(c2, t2, null, overlap);
                  loc1._intersection = loc2;
                  loc2._intersection = loc1;
                  if (!include || include(loc1)) {
                    CurveLocation.insert(locations, loc1, true);
                  }
                }
              }
            }
            function addCurveIntersections(v1, v2, c1, c2, locations, include, flip, recursion, calls, tMin, tMax, uMin, uMax) {
              if (++calls >= 4096 || ++recursion >= 40)
                return calls;
              var fatLineEpsilon = 1e-9, q0x = v2[0], q0y = v2[1], q3x = v2[6], q3y = v2[7], getSignedDistance = Line.getSignedDistance, d1 = getSignedDistance(q0x, q0y, q3x, q3y, v2[2], v2[3]), d2 = getSignedDistance(q0x, q0y, q3x, q3y, v2[4], v2[5]), factor = d1 * d2 > 0 ? 3 / 4 : 4 / 9, dMin = factor * Math.min(0, d1, d2), dMax = factor * Math.max(0, d1, d2), dp0 = getSignedDistance(q0x, q0y, q3x, q3y, v1[0], v1[1]), dp1 = getSignedDistance(q0x, q0y, q3x, q3y, v1[2], v1[3]), dp2 = getSignedDistance(q0x, q0y, q3x, q3y, v1[4], v1[5]), dp3 = getSignedDistance(q0x, q0y, q3x, q3y, v1[6], v1[7]), hull = getConvexHull(dp0, dp1, dp2, dp3), top = hull[0], bottom = hull[1], tMinClip, tMaxClip;
              if (d1 === 0 && d2 === 0 && dp0 === 0 && dp1 === 0 && dp2 === 0 && dp3 === 0 || (tMinClip = clipConvexHull(top, bottom, dMin, dMax)) == null || (tMaxClip = clipConvexHull(
                top.reverse(),
                bottom.reverse(),
                dMin,
                dMax
              )) == null)
                return calls;
              var tMinNew = tMin + (tMax - tMin) * tMinClip, tMaxNew = tMin + (tMax - tMin) * tMaxClip;
              if (Math.max(uMax - uMin, tMaxNew - tMinNew) < fatLineEpsilon) {
                var t2 = (tMinNew + tMaxNew) / 2, u = (uMin + uMax) / 2;
                addLocation(
                  locations,
                  include,
                  flip ? c2 : c1,
                  flip ? u : t2,
                  flip ? c1 : c2,
                  flip ? t2 : u
                );
              } else {
                v1 = Curve.getPart(v1, tMinClip, tMaxClip);
                var uDiff = uMax - uMin;
                if (tMaxClip - tMinClip > 0.8) {
                  if (tMaxNew - tMinNew > uDiff) {
                    var parts = Curve.subdivide(v1, 0.5), t2 = (tMinNew + tMaxNew) / 2;
                    calls = addCurveIntersections(
                      v2,
                      parts[0],
                      c2,
                      c1,
                      locations,
                      include,
                      !flip,
                      recursion,
                      calls,
                      uMin,
                      uMax,
                      tMinNew,
                      t2
                    );
                    calls = addCurveIntersections(
                      v2,
                      parts[1],
                      c2,
                      c1,
                      locations,
                      include,
                      !flip,
                      recursion,
                      calls,
                      uMin,
                      uMax,
                      t2,
                      tMaxNew
                    );
                  } else {
                    var parts = Curve.subdivide(v2, 0.5), u = (uMin + uMax) / 2;
                    calls = addCurveIntersections(
                      parts[0],
                      v1,
                      c2,
                      c1,
                      locations,
                      include,
                      !flip,
                      recursion,
                      calls,
                      uMin,
                      u,
                      tMinNew,
                      tMaxNew
                    );
                    calls = addCurveIntersections(
                      parts[1],
                      v1,
                      c2,
                      c1,
                      locations,
                      include,
                      !flip,
                      recursion,
                      calls,
                      u,
                      uMax,
                      tMinNew,
                      tMaxNew
                    );
                  }
                } else {
                  if (uDiff === 0 || uDiff >= fatLineEpsilon) {
                    calls = addCurveIntersections(
                      v2,
                      v1,
                      c2,
                      c1,
                      locations,
                      include,
                      !flip,
                      recursion,
                      calls,
                      uMin,
                      uMax,
                      tMinNew,
                      tMaxNew
                    );
                  } else {
                    calls = addCurveIntersections(
                      v1,
                      v2,
                      c1,
                      c2,
                      locations,
                      include,
                      flip,
                      recursion,
                      calls,
                      tMinNew,
                      tMaxNew,
                      uMin,
                      uMax
                    );
                  }
                }
              }
              return calls;
            }
            function getConvexHull(dq0, dq1, dq2, dq3) {
              var p0 = [0, dq0], p1 = [1 / 3, dq1], p2 = [2 / 3, dq2], p3 = [1, dq3], dist1 = dq1 - (2 * dq0 + dq3) / 3, dist2 = dq2 - (dq0 + 2 * dq3) / 3, hull;
              if (dist1 * dist2 < 0) {
                hull = [[p0, p1, p3], [p0, p2, p3]];
              } else {
                var distRatio = dist1 / dist2;
                hull = [
                  distRatio >= 2 ? [p0, p1, p3] : distRatio <= 0.5 ? [p0, p2, p3] : [p0, p1, p2, p3],
                  [p0, p3]
                ];
              }
              return (dist1 || dist2) < 0 ? hull.reverse() : hull;
            }
            function clipConvexHull(hullTop, hullBottom, dMin, dMax) {
              if (hullTop[0][1] < dMin) {
                return clipConvexHullPart(hullTop, true, dMin);
              } else if (hullBottom[0][1] > dMax) {
                return clipConvexHullPart(hullBottom, false, dMax);
              } else {
                return hullTop[0][0];
              }
            }
            function clipConvexHullPart(part, top, threshold) {
              var px = part[0][0], py = part[0][1];
              for (var i2 = 1, l = part.length; i2 < l; i2++) {
                var qx = part[i2][0], qy = part[i2][1];
                if (top ? qy >= threshold : qy <= threshold) {
                  return qy === threshold ? qx : px + (threshold - py) * (qx - px) / (qy - py);
                }
                px = qx;
                py = qy;
              }
              return null;
            }
            function getCurveLineIntersections(v, px, py, vx, vy) {
              var isZero = Numerical.isZero;
              if (isZero(vx) && isZero(vy)) {
                var t2 = Curve.getTimeOf(v, new Point(px, py));
                return t2 === null ? [] : [t2];
              }
              var angle = Math.atan2(-vy, vx), sin = Math.sin(angle), cos = Math.cos(angle), rv = [], roots = [];
              for (var i2 = 0; i2 < 8; i2 += 2) {
                var x = v[i2] - px, y = v[i2 + 1] - py;
                rv.push(
                  x * cos - y * sin,
                  x * sin + y * cos
                );
              }
              Curve.solveCubic(rv, 1, 0, roots, 0, 1);
              return roots;
            }
            function addCurveLineIntersections(v1, v2, c1, c2, locations, include, flip) {
              var x1 = v2[0], y1 = v2[1], x2 = v2[6], y2 = v2[7], roots = getCurveLineIntersections(v1, x1, y1, x2 - x1, y2 - y1);
              for (var i2 = 0, l = roots.length; i2 < l; i2++) {
                var t1 = roots[i2], p1 = Curve.getPoint(v1, t1), t2 = Curve.getTimeOf(v2, p1);
                if (t2 !== null) {
                  addLocation(
                    locations,
                    include,
                    flip ? c2 : c1,
                    flip ? t2 : t1,
                    flip ? c1 : c2,
                    flip ? t1 : t2
                  );
                }
              }
            }
            function addLineIntersection(v1, v2, c1, c2, locations, include) {
              var pt = Line.intersect(
                v1[0],
                v1[1],
                v1[6],
                v1[7],
                v2[0],
                v2[1],
                v2[6],
                v2[7]
              );
              if (pt) {
                addLocation(
                  locations,
                  include,
                  c1,
                  Curve.getTimeOf(v1, pt),
                  c2,
                  Curve.getTimeOf(v2, pt)
                );
              }
            }
            function getCurveIntersections(v1, v2, c1, c2, locations, include) {
              var epsilon = 1e-12, min = Math.min, max = Math.max;
              if (max(v1[0], v1[2], v1[4], v1[6]) + epsilon > min(v2[0], v2[2], v2[4], v2[6]) && min(v1[0], v1[2], v1[4], v1[6]) - epsilon < max(v2[0], v2[2], v2[4], v2[6]) && max(v1[1], v1[3], v1[5], v1[7]) + epsilon > min(v2[1], v2[3], v2[5], v2[7]) && min(v1[1], v1[3], v1[5], v1[7]) - epsilon < max(v2[1], v2[3], v2[5], v2[7])) {
                var overlaps = getOverlaps(v1, v2);
                if (overlaps) {
                  for (var i2 = 0; i2 < 2; i2++) {
                    var overlap = overlaps[i2];
                    addLocation(
                      locations,
                      include,
                      c1,
                      overlap[0],
                      c2,
                      overlap[1],
                      true
                    );
                  }
                } else {
                  var straight1 = Curve.isStraight(v1), straight2 = Curve.isStraight(v2), straight = straight1 && straight2, flip = straight1 && !straight2, before = locations.length;
                  (straight ? addLineIntersection : straight1 || straight2 ? addCurveLineIntersections : addCurveIntersections)(
                    flip ? v2 : v1,
                    flip ? v1 : v2,
                    flip ? c2 : c1,
                    flip ? c1 : c2,
                    locations,
                    include,
                    flip,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1
                  );
                  if (!straight || locations.length === before) {
                    for (var i2 = 0; i2 < 4; i2++) {
                      var t1 = i2 >> 1, t2 = i2 & 1, i1 = t1 * 6, i22 = t2 * 6, p1 = new Point(v1[i1], v1[i1 + 1]), p2 = new Point(v2[i22], v2[i22 + 1]);
                      if (p1.isClose(p2, epsilon)) {
                        addLocation(
                          locations,
                          include,
                          c1,
                          t1,
                          c2,
                          t2
                        );
                      }
                    }
                  }
                }
              }
              return locations;
            }
            function getSelfIntersection(v1, c1, locations, include) {
              var info = Curve.classify(v1);
              if (info.type === "loop") {
                var roots = info.roots;
                addLocation(
                  locations,
                  include,
                  c1,
                  roots[0],
                  c1,
                  roots[1]
                );
              }
              return locations;
            }
            function getIntersections(curves1, curves2, include, matrix1, matrix2, _returnFirst) {
              var epsilon = 1e-7, self3 = !curves2;
              if (self3)
                curves2 = curves1;
              var length1 = curves1.length, length2 = curves2.length, values1 = new Array(length1), values2 = self3 ? values1 : new Array(length2), locations = [];
              for (var i2 = 0; i2 < length1; i2++) {
                values1[i2] = curves1[i2].getValues(matrix1);
              }
              if (!self3) {
                for (var i2 = 0; i2 < length2; i2++) {
                  values2[i2] = curves2[i2].getValues(matrix2);
                }
              }
              var boundsCollisions = CollisionDetection.findCurveBoundsCollisions(
                values1,
                values2,
                epsilon
              );
              for (var index1 = 0; index1 < length1; index1++) {
                var curve1 = curves1[index1], v1 = values1[index1];
                if (self3) {
                  getSelfIntersection(v1, curve1, locations, include);
                }
                var collisions1 = boundsCollisions[index1];
                if (collisions1) {
                  for (var j = 0; j < collisions1.length; j++) {
                    if (_returnFirst && locations.length)
                      return locations;
                    var index2 = collisions1[j];
                    if (!self3 || index2 > index1) {
                      var curve2 = curves2[index2], v2 = values2[index2];
                      getCurveIntersections(
                        v1,
                        v2,
                        curve1,
                        curve2,
                        locations,
                        include
                      );
                    }
                  }
                }
              }
              return locations;
            }
            function getOverlaps(v1, v2) {
              function getSquaredLineLength(v3) {
                var x = v3[6] - v3[0], y = v3[7] - v3[1];
                return x * x + y * y;
              }
              var abs = Math.abs, getDistance = Line.getDistance, timeEpsilon = 1e-8, geomEpsilon = 1e-7, straight1 = Curve.isStraight(v1), straight2 = Curve.isStraight(v2), straightBoth = straight1 && straight2, flip = getSquaredLineLength(v1) < getSquaredLineLength(v2), l1 = flip ? v2 : v1, l2 = flip ? v1 : v2, px = l1[0], py = l1[1], vx = l1[6] - px, vy = l1[7] - py;
              if (getDistance(px, py, vx, vy, l2[0], l2[1], true) < geomEpsilon && getDistance(px, py, vx, vy, l2[6], l2[7], true) < geomEpsilon) {
                if (!straightBoth && getDistance(px, py, vx, vy, l1[2], l1[3], true) < geomEpsilon && getDistance(px, py, vx, vy, l1[4], l1[5], true) < geomEpsilon && getDistance(px, py, vx, vy, l2[2], l2[3], true) < geomEpsilon && getDistance(px, py, vx, vy, l2[4], l2[5], true) < geomEpsilon) {
                  straight1 = straight2 = straightBoth = true;
                }
              } else if (straightBoth) {
                return null;
              }
              if (straight1 ^ straight2) {
                return null;
              }
              var v = [v1, v2], pairs = [];
              for (var i2 = 0; i2 < 4 && pairs.length < 2; i2++) {
                var i1 = i2 & 1, i22 = i1 ^ 1, t1 = i2 >> 1, t2 = Curve.getTimeOf(v[i1], new Point(
                  v[i22][t1 ? 6 : 0],
                  v[i22][t1 ? 7 : 1]
                ));
                if (t2 != null) {
                  var pair = i1 ? [t1, t2] : [t2, t1];
                  if (!pairs.length || abs(pair[0] - pairs[0][0]) > timeEpsilon && abs(pair[1] - pairs[0][1]) > timeEpsilon) {
                    pairs.push(pair);
                  }
                }
                if (i2 > 2 && !pairs.length)
                  break;
              }
              if (pairs.length !== 2) {
                pairs = null;
              } else if (!straightBoth) {
                var o1 = Curve.getPart(v1, pairs[0][0], pairs[1][0]), o2 = Curve.getPart(v2, pairs[0][1], pairs[1][1]);
                if (abs(o2[2] - o1[2]) > geomEpsilon || abs(o2[3] - o1[3]) > geomEpsilon || abs(o2[4] - o1[4]) > geomEpsilon || abs(o2[5] - o1[5]) > geomEpsilon)
                  pairs = null;
              }
              return pairs;
            }
            function getTimesWithTangent(v, tangent) {
              var x0 = v[0], y0 = v[1], x1 = v[2], y1 = v[3], x2 = v[4], y2 = v[5], x3 = v[6], y3 = v[7], normalized = tangent.normalize(), tx = normalized.x, ty = normalized.y, ax = 3 * x3 - 9 * x2 + 9 * x1 - 3 * x0, ay = 3 * y3 - 9 * y2 + 9 * y1 - 3 * y0, bx = 6 * x2 - 12 * x1 + 6 * x0, by = 6 * y2 - 12 * y1 + 6 * y0, cx = 3 * x1 - 3 * x0, cy = 3 * y1 - 3 * y0, den = 2 * ax * ty - 2 * ay * tx, times = [];
              if (Math.abs(den) < Numerical.CURVETIME_EPSILON) {
                var num = ax * cy - ay * cx, den = ax * by - ay * bx;
                if (den != 0) {
                  var t2 = -num / den;
                  if (t2 >= 0 && t2 <= 1)
                    times.push(t2);
                }
              } else {
                var delta = (bx * bx - 4 * ax * cx) * ty * ty + (-2 * bx * by + 4 * ay * cx + 4 * ax * cy) * tx * ty + (by * by - 4 * ay * cy) * tx * tx, k = bx * ty - by * tx;
                if (delta >= 0 && den != 0) {
                  var d = Math.sqrt(delta), t0 = -(k + d) / den, t1 = (-k + d) / den;
                  if (t0 >= 0 && t0 <= 1)
                    times.push(t0);
                  if (t1 >= 0 && t1 <= 1)
                    times.push(t1);
                }
              }
              return times;
            }
            return {
              getIntersections: function(curve) {
                var v1 = this.getValues(), v2 = curve && curve !== this && curve.getValues();
                return v2 ? getCurveIntersections(v1, v2, this, curve, []) : getSelfIntersection(v1, this, []);
              },
              statics: {
                getOverlaps,
                getIntersections,
                getCurveLineIntersections,
                getTimesWithTangent
              }
            };
          }()
        );
        var CurveLocation = Base.extend(
          {
            _class: "CurveLocation",
            initialize: function CurveLocation2(curve, time, point, _overlap, _distance) {
              if (time >= 0.99999999) {
                var next = curve.getNext();
                if (next) {
                  time = 0;
                  curve = next;
                }
              }
              this._setCurve(curve);
              this._time = time;
              this._point = point || curve.getPointAtTime(time);
              this._overlap = _overlap;
              this._distance = _distance;
              this._intersection = this._next = this._previous = null;
            },
            _setPath: function(path) {
              this._path = path;
              this._version = path ? path._version : 0;
            },
            _setCurve: function(curve) {
              this._setPath(curve._path);
              this._curve = curve;
              this._segment = null;
              this._segment1 = curve._segment1;
              this._segment2 = curve._segment2;
            },
            _setSegment: function(segment) {
              var curve = segment.getCurve();
              if (curve) {
                this._setCurve(curve);
              } else {
                this._setPath(segment._path);
                this._segment1 = segment;
                this._segment2 = null;
              }
              this._segment = segment;
              this._time = segment === this._segment1 ? 0 : 1;
              this._point = segment._point.clone();
            },
            getSegment: function() {
              var segment = this._segment;
              if (!segment) {
                var curve = this.getCurve(), time = this.getTime();
                if (time === 0) {
                  segment = curve._segment1;
                } else if (time === 1) {
                  segment = curve._segment2;
                } else if (time != null) {
                  segment = curve.getPartLength(0, time) < curve.getPartLength(time, 1) ? curve._segment1 : curve._segment2;
                }
                this._segment = segment;
              }
              return segment;
            },
            getCurve: function() {
              var path = this._path, that = this;
              if (path && path._version !== this._version) {
                this._time = this._offset = this._curveOffset = this._curve = null;
              }
              function trySegment(segment) {
                var curve = segment && segment.getCurve();
                if (curve && (that._time = curve.getTimeOf(that._point)) != null) {
                  that._setCurve(curve);
                  return curve;
                }
              }
              return this._curve || trySegment(this._segment) || trySegment(this._segment1) || trySegment(this._segment2.getPrevious());
            },
            getPath: function() {
              var curve = this.getCurve();
              return curve && curve._path;
            },
            getIndex: function() {
              var curve = this.getCurve();
              return curve && curve.getIndex();
            },
            getTime: function() {
              var curve = this.getCurve(), time = this._time;
              return curve && time == null ? this._time = curve.getTimeOf(this._point) : time;
            },
            getParameter: "#getTime",
            getPoint: function() {
              return this._point;
            },
            getOffset: function() {
              var offset = this._offset;
              if (offset == null) {
                offset = 0;
                var path = this.getPath(), index = this.getIndex();
                if (path && index != null) {
                  var curves = path.getCurves();
                  for (var i2 = 0; i2 < index; i2++)
                    offset += curves[i2].getLength();
                }
                this._offset = offset += this.getCurveOffset();
              }
              return offset;
            },
            getCurveOffset: function() {
              var offset = this._curveOffset;
              if (offset == null) {
                var curve = this.getCurve(), time = this.getTime();
                this._curveOffset = offset = time != null && curve && curve.getPartLength(0, time);
              }
              return offset;
            },
            getIntersection: function() {
              return this._intersection;
            },
            getDistance: function() {
              return this._distance;
            },
            divide: function() {
              var curve = this.getCurve(), res = curve && curve.divideAtTime(this.getTime());
              if (res) {
                this._setSegment(res._segment1);
              }
              return res;
            },
            split: function() {
              var curve = this.getCurve(), path = curve._path, res = curve && curve.splitAtTime(this.getTime());
              if (res) {
                this._setSegment(path.getLastSegment());
              }
              return res;
            },
            equals: function(loc, _ignoreOther) {
              var res = this === loc;
              if (!res && loc instanceof CurveLocation) {
                var c1 = this.getCurve(), c2 = loc.getCurve(), p1 = c1._path, p2 = c2._path;
                if (p1 === p2) {
                  var abs = Math.abs, epsilon = 1e-7, diff = abs(this.getOffset() - loc.getOffset()), i1 = !_ignoreOther && this._intersection, i2 = !_ignoreOther && loc._intersection;
                  res = (diff < epsilon || p1 && abs(p1.getLength() - diff) < epsilon) && (!i1 && !i2 || i1 && i2 && i1.equals(i2, true));
                }
              }
              return res;
            },
            toString: function() {
              var parts = [], point = this.getPoint(), f = Formatter.instance;
              if (point)
                parts.push("point: " + point);
              var index = this.getIndex();
              if (index != null)
                parts.push("index: " + index);
              var time = this.getTime();
              if (time != null)
                parts.push("time: " + f.number(time));
              if (this._distance != null)
                parts.push("distance: " + f.number(this._distance));
              return "{ " + parts.join(", ") + " }";
            },
            isTouching: function() {
              var inter = this._intersection;
              if (inter && this.getTangent().isCollinear(inter.getTangent())) {
                var curve1 = this.getCurve(), curve2 = inter.getCurve();
                return !(curve1.isStraight() && curve2.isStraight() && curve1.getLine().intersect(curve2.getLine()));
              }
              return false;
            },
            isCrossing: function() {
              var inter = this._intersection;
              if (!inter)
                return false;
              var t1 = this.getTime(), t2 = inter.getTime(), tMin = 1e-8, tMax = 1 - tMin, t1Inside = t1 >= tMin && t1 <= tMax, t2Inside = t2 >= tMin && t2 <= tMax;
              if (t1Inside && t2Inside)
                return !this.isTouching();
              var c2 = this.getCurve(), c1 = c2 && t1 < tMin ? c2.getPrevious() : c2, c4 = inter.getCurve(), c3 = c4 && t2 < tMin ? c4.getPrevious() : c4;
              if (t1 > tMax)
                c2 = c2.getNext();
              if (t2 > tMax)
                c4 = c4.getNext();
              if (!c1 || !c2 || !c3 || !c4)
                return false;
              var offsets = [];
              function addOffsets(curve, end) {
                var v = curve.getValues(), roots = Curve.classify(v).roots || Curve.getPeaks(v), count = roots.length, offset2 = Curve.getLength(
                  v,
                  end && count ? roots[count - 1] : 0,
                  !end && count ? roots[0] : 1
                );
                offsets.push(count ? offset2 : offset2 / 32);
              }
              function isInRange(angle, min, max) {
                return min < max ? angle > min && angle < max : angle > min || angle < max;
              }
              if (!t1Inside) {
                addOffsets(c1, true);
                addOffsets(c2, false);
              }
              if (!t2Inside) {
                addOffsets(c3, true);
                addOffsets(c4, false);
              }
              var pt = this.getPoint(), offset = Math.min.apply(Math, offsets), v2 = t1Inside ? c2.getTangentAtTime(t1) : c2.getPointAt(offset).subtract(pt), v1 = t1Inside ? v2.negate() : c1.getPointAt(-offset).subtract(pt), v4 = t2Inside ? c4.getTangentAtTime(t2) : c4.getPointAt(offset).subtract(pt), v3 = t2Inside ? v4.negate() : c3.getPointAt(-offset).subtract(pt), a1 = v1.getAngle(), a2 = v2.getAngle(), a3 = v3.getAngle(), a4 = v4.getAngle();
              return !!(t1Inside ? isInRange(a1, a3, a4) ^ isInRange(a2, a3, a4) && isInRange(a1, a4, a3) ^ isInRange(a2, a4, a3) : isInRange(a3, a1, a2) ^ isInRange(a4, a1, a2) && isInRange(a3, a2, a1) ^ isInRange(a4, a2, a1));
            },
            hasOverlap: function() {
              return !!this._overlap;
            }
          },
          Base.each(Curve._evaluateMethods, function(name) {
            var get2 = name + "At";
            this[name] = function() {
              var curve = this.getCurve(), time = this.getTime();
              return time != null && curve && curve[get2](time, true);
            };
          }, {
            preserve: true
          }),
          new function() {
            function insert(locations, loc, merge) {
              var length = locations.length, l = 0, r = length - 1;
              function search(index, dir) {
                for (var i2 = index + dir; i2 >= -1 && i2 <= length; i2 += dir) {
                  var loc22 = locations[(i2 % length + length) % length];
                  if (!loc.getPoint().isClose(
                    loc22.getPoint(),
                    1e-7
                  ))
                    break;
                  if (loc.equals(loc22))
                    return loc22;
                }
                return null;
              }
              while (l <= r) {
                var m = l + r >>> 1, loc2 = locations[m], found;
                if (merge && (found = loc.equals(loc2) ? loc2 : search(m, -1) || search(m, 1))) {
                  if (loc._overlap) {
                    found._overlap = found._intersection._overlap = true;
                  }
                  return found;
                }
                var path1 = loc.getPath(), path2 = loc2.getPath(), diff = path1 !== path2 ? path1._id - path2._id : loc.getIndex() + loc.getTime() - (loc2.getIndex() + loc2.getTime());
                if (diff < 0) {
                  r = m - 1;
                } else {
                  l = m + 1;
                }
              }
              locations.splice(l, 0, loc);
              return loc;
            }
            return { statics: {
              insert,
              expand: function(locations) {
                var expanded = locations.slice();
                for (var i2 = locations.length - 1; i2 >= 0; i2--) {
                  insert(expanded, locations[i2]._intersection, false);
                }
                return expanded;
              }
            } };
          }()
        );
        var PathItem = Item.extend({
          _class: "PathItem",
          _selectBounds: false,
          _canScaleStroke: true,
          beans: true,
          initialize: function PathItem2() {
          },
          statics: {
            create: function(arg) {
              var data, segments, compound;
              if (Base.isPlainObject(arg)) {
                segments = arg.segments;
                data = arg.pathData;
              } else if (Array.isArray(arg)) {
                segments = arg;
              } else if (typeof arg === "string") {
                data = arg;
              }
              if (segments) {
                var first = segments[0];
                compound = first && Array.isArray(first[0]);
              } else if (data) {
                compound = (data.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(data);
              }
              var ctor = compound ? CompoundPath : Path;
              return new ctor(arg);
            }
          },
          _asPathItem: function() {
            return this;
          },
          isClockwise: function() {
            return this.getArea() >= 0;
          },
          setClockwise: function(clockwise) {
            if (this.isClockwise() != (clockwise = !!clockwise))
              this.reverse();
          },
          setPathData: function(data) {
            var parts = data && data.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig), coords, relative = false, previous, control, current = new Point(), start = new Point();
            function getCoord(index, coord2) {
              var val = +coords[index];
              if (relative)
                val += current[coord2];
              return val;
            }
            function getPoint(index) {
              return new Point(
                getCoord(index, "x"),
                getCoord(index + 1, "y")
              );
            }
            this.clear();
            for (var i2 = 0, l = parts && parts.length; i2 < l; i2++) {
              var part = parts[i2], command = part[0], lower = command.toLowerCase();
              coords = part.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
              var length = coords && coords.length;
              relative = command === lower;
              if (previous === "z" && !/[mz]/.test(lower))
                this.moveTo(current);
              switch (lower) {
                case "m":
                case "l":
                  var move = lower === "m";
                  for (var j = 0; j < length; j += 2) {
                    this[move ? "moveTo" : "lineTo"](current = getPoint(j));
                    if (move) {
                      start = current;
                      move = false;
                    }
                  }
                  control = current;
                  break;
                case "h":
                case "v":
                  var coord = lower === "h" ? "x" : "y";
                  current = current.clone();
                  for (var j = 0; j < length; j++) {
                    current[coord] = getCoord(j, coord);
                    this.lineTo(current);
                  }
                  control = current;
                  break;
                case "c":
                  for (var j = 0; j < length; j += 6) {
                    this.cubicCurveTo(
                      getPoint(j),
                      control = getPoint(j + 2),
                      current = getPoint(j + 4)
                    );
                  }
                  break;
                case "s":
                  for (var j = 0; j < length; j += 4) {
                    this.cubicCurveTo(
                      /[cs]/.test(previous) ? current.multiply(2).subtract(control) : current,
                      control = getPoint(j),
                      current = getPoint(j + 2)
                    );
                    previous = lower;
                  }
                  break;
                case "q":
                  for (var j = 0; j < length; j += 4) {
                    this.quadraticCurveTo(
                      control = getPoint(j),
                      current = getPoint(j + 2)
                    );
                  }
                  break;
                case "t":
                  for (var j = 0; j < length; j += 2) {
                    this.quadraticCurveTo(
                      control = /[qt]/.test(previous) ? current.multiply(2).subtract(control) : current,
                      current = getPoint(j)
                    );
                    previous = lower;
                  }
                  break;
                case "a":
                  for (var j = 0; j < length; j += 7) {
                    this.arcTo(
                      current = getPoint(j + 5),
                      new Size(+coords[j], +coords[j + 1]),
                      +coords[j + 2],
                      +coords[j + 4],
                      +coords[j + 3]
                    );
                  }
                  break;
                case "z":
                  this.closePath(1e-12);
                  current = start;
                  break;
              }
              previous = lower;
            }
          },
          _canComposite: function() {
            return !(this.hasFill() && this.hasStroke());
          },
          _contains: function(point) {
            var winding = point.isInside(
              this.getBounds({ internal: true, handle: true })
            ) ? this._getWinding(point) : {};
            return winding.onPath || !!(this.getFillRule() === "evenodd" ? winding.windingL & 1 || winding.windingR & 1 : winding.winding);
          },
          getIntersections: function(path, include, _matrix, _returnFirst) {
            var self3 = this === path || !path, matrix1 = this._matrix._orNullIfIdentity(), matrix2 = self3 ? matrix1 : (_matrix || path._matrix)._orNullIfIdentity();
            return self3 || this.getBounds(matrix1).intersects(
              path.getBounds(matrix2),
              1e-12
            ) ? Curve.getIntersections(
              this.getCurves(),
              !self3 && path.getCurves(),
              include,
              matrix1,
              matrix2,
              _returnFirst
            ) : [];
          },
          getCrossings: function(path) {
            return this.getIntersections(path, function(inter) {
              return inter.isCrossing();
            });
          },
          getNearestLocation: function() {
            var point = Point.read(arguments), curves = this.getCurves(), minDist = Infinity, minLoc = null;
            for (var i2 = 0, l = curves.length; i2 < l; i2++) {
              var loc = curves[i2].getNearestLocation(point);
              if (loc._distance < minDist) {
                minDist = loc._distance;
                minLoc = loc;
              }
            }
            return minLoc;
          },
          getNearestPoint: function() {
            var loc = this.getNearestLocation.apply(this, arguments);
            return loc ? loc.getPoint() : loc;
          },
          interpolate: function(from, to, factor) {
            var isPath = !this._children, name = isPath ? "_segments" : "_children", itemsFrom = from[name], itemsTo = to[name], items = this[name];
            if (!itemsFrom || !itemsTo || itemsFrom.length !== itemsTo.length) {
              throw new Error("Invalid operands in interpolate() call: " + from + ", " + to);
            }
            var current = items.length, length = itemsTo.length;
            if (current < length) {
              var ctor = isPath ? Segment : Path;
              for (var i2 = current; i2 < length; i2++) {
                this.add(new ctor());
              }
            } else if (current > length) {
              this[isPath ? "removeSegments" : "removeChildren"](length, current);
            }
            for (var i2 = 0; i2 < length; i2++) {
              items[i2].interpolate(itemsFrom[i2], itemsTo[i2], factor);
            }
            if (isPath) {
              this.setClosed(from._closed);
              this._changed(9);
            }
          },
          compare: function(path) {
            var ok = false;
            if (path) {
              var paths1 = this._children || [this], paths2 = path._children ? path._children.slice() : [path], length1 = paths1.length, length2 = paths2.length, matched = [], count = 0;
              ok = true;
              var boundsOverlaps = CollisionDetection.findItemBoundsCollisions(paths1, paths2, Numerical.GEOMETRIC_EPSILON);
              for (var i1 = length1 - 1; i1 >= 0 && ok; i1--) {
                var path1 = paths1[i1];
                ok = false;
                var pathBoundsOverlaps = boundsOverlaps[i1];
                if (pathBoundsOverlaps) {
                  for (var i2 = pathBoundsOverlaps.length - 1; i2 >= 0 && !ok; i2--) {
                    if (path1.compare(paths2[pathBoundsOverlaps[i2]])) {
                      if (!matched[pathBoundsOverlaps[i2]]) {
                        matched[pathBoundsOverlaps[i2]] = true;
                        count++;
                      }
                      ok = true;
                    }
                  }
                }
              }
              ok = ok && count === length2;
            }
            return ok;
          }
        });
        var Path = PathItem.extend(
          {
            _class: "Path",
            _serializeFields: {
              segments: [],
              closed: false
            },
            initialize: function Path2(arg) {
              this._closed = false;
              this._segments = [];
              this._version = 0;
              var args = arguments, segments = Array.isArray(arg) ? typeof arg[0] === "object" ? arg : args : arg && (arg.size === undefined2 && (arg.x !== undefined2 || arg.point !== undefined2)) ? args : null;
              if (segments && segments.length > 0) {
                this.setSegments(segments);
              } else {
                this._curves = undefined2;
                this._segmentSelection = 0;
                if (!segments && typeof arg === "string") {
                  this.setPathData(arg);
                  arg = null;
                }
              }
              this._initialize(!segments && arg);
            },
            _equals: function(item) {
              return this._closed === item._closed && Base.equals(this._segments, item._segments);
            },
            copyContent: function(source) {
              this.setSegments(source._segments);
              this._closed = source._closed;
            },
            _changed: function _changed(flags) {
              _changed.base.call(this, flags);
              if (flags & 8) {
                this._length = this._area = undefined2;
                if (flags & 32) {
                  this._version++;
                } else if (this._curves) {
                  for (var i2 = 0, l = this._curves.length; i2 < l; i2++)
                    this._curves[i2]._changed();
                }
              } else if (flags & 64) {
                this._bounds = undefined2;
              }
            },
            getStyle: function() {
              var parent = this._parent;
              return (parent instanceof CompoundPath ? parent : this)._style;
            },
            getSegments: function() {
              return this._segments;
            },
            setSegments: function(segments) {
              var fullySelected = this.isFullySelected(), length = segments && segments.length;
              this._segments.length = 0;
              this._segmentSelection = 0;
              this._curves = undefined2;
              if (length) {
                var last = segments[length - 1];
                if (typeof last === "boolean") {
                  this.setClosed(last);
                  length--;
                }
                this._add(Segment.readList(segments, 0, {}, length));
              }
              if (fullySelected)
                this.setFullySelected(true);
            },
            getFirstSegment: function() {
              return this._segments[0];
            },
            getLastSegment: function() {
              return this._segments[this._segments.length - 1];
            },
            getCurves: function() {
              var curves = this._curves, segments = this._segments;
              if (!curves) {
                var length = this._countCurves();
                curves = this._curves = new Array(length);
                for (var i2 = 0; i2 < length; i2++)
                  curves[i2] = new Curve(
                    this,
                    segments[i2],
                    segments[i2 + 1] || segments[0]
                  );
              }
              return curves;
            },
            getFirstCurve: function() {
              return this.getCurves()[0];
            },
            getLastCurve: function() {
              var curves = this.getCurves();
              return curves[curves.length - 1];
            },
            isClosed: function() {
              return this._closed;
            },
            setClosed: function(closed) {
              if (this._closed != (closed = !!closed)) {
                this._closed = closed;
                if (this._curves) {
                  var length = this._curves.length = this._countCurves();
                  if (closed)
                    this._curves[length - 1] = new Curve(
                      this,
                      this._segments[length - 1],
                      this._segments[0]
                    );
                }
                this._changed(41);
              }
            }
          },
          {
            beans: true,
            getPathData: function(_matrix, _precision) {
              var segments = this._segments, length = segments.length, f = new Formatter(_precision), coords = new Array(6), first = true, curX, curY, prevX, prevY, inX, inY, outX, outY, parts = [];
              function addSegment(segment, skipLine) {
                segment._transformCoordinates(_matrix, coords);
                curX = coords[0];
                curY = coords[1];
                if (first) {
                  parts.push("M" + f.pair(curX, curY));
                  first = false;
                } else {
                  inX = coords[2];
                  inY = coords[3];
                  if (inX === curX && inY === curY && outX === prevX && outY === prevY) {
                    if (!skipLine) {
                      var dx = curX - prevX, dy = curY - prevY;
                      parts.push(
                        dx === 0 ? "v" + f.number(dy) : dy === 0 ? "h" + f.number(dx) : "l" + f.pair(dx, dy)
                      );
                    }
                  } else {
                    parts.push("c" + f.pair(outX - prevX, outY - prevY) + " " + f.pair(inX - prevX, inY - prevY) + " " + f.pair(curX - prevX, curY - prevY));
                  }
                }
                prevX = curX;
                prevY = curY;
                outX = coords[4];
                outY = coords[5];
              }
              if (!length)
                return "";
              for (var i2 = 0; i2 < length; i2++)
                addSegment(segments[i2]);
              if (this._closed && length > 0) {
                addSegment(segments[0], true);
                parts.push("z");
              }
              return parts.join("");
            },
            isEmpty: function() {
              return !this._segments.length;
            },
            _transformContent: function(matrix) {
              var segments = this._segments, coords = new Array(6);
              for (var i2 = 0, l = segments.length; i2 < l; i2++)
                segments[i2]._transformCoordinates(matrix, coords, true);
              return true;
            },
            _add: function(segs, index) {
              var segments = this._segments, curves = this._curves, amount = segs.length, append = index == null, index = append ? segments.length : index;
              for (var i2 = 0; i2 < amount; i2++) {
                var segment = segs[i2];
                if (segment._path)
                  segment = segs[i2] = segment.clone();
                segment._path = this;
                segment._index = index + i2;
                if (segment._selection)
                  this._updateSelection(segment, 0, segment._selection);
              }
              if (append) {
                Base.push(segments, segs);
              } else {
                segments.splice.apply(segments, [index, 0].concat(segs));
                for (var i2 = index + amount, l = segments.length; i2 < l; i2++)
                  segments[i2]._index = i2;
              }
              if (curves) {
                var total = this._countCurves(), start = index > 0 && index + amount - 1 === total ? index - 1 : index, insert = start, end = Math.min(start + amount, total);
                if (segs._curves) {
                  curves.splice.apply(curves, [start, 0].concat(segs._curves));
                  insert += segs._curves.length;
                }
                for (var i2 = insert; i2 < end; i2++)
                  curves.splice(i2, 0, new Curve(this, null, null));
                this._adjustCurves(start, end);
              }
              this._changed(41);
              return segs;
            },
            _adjustCurves: function(start, end) {
              var segments = this._segments, curves = this._curves, curve;
              for (var i2 = start; i2 < end; i2++) {
                curve = curves[i2];
                curve._path = this;
                curve._segment1 = segments[i2];
                curve._segment2 = segments[i2 + 1] || segments[0];
                curve._changed();
              }
              if (curve = curves[this._closed && !start ? segments.length - 1 : start - 1]) {
                curve._segment2 = segments[start] || segments[0];
                curve._changed();
              }
              if (curve = curves[end]) {
                curve._segment1 = segments[end];
                curve._changed();
              }
            },
            _countCurves: function() {
              var length = this._segments.length;
              return !this._closed && length > 0 ? length - 1 : length;
            },
            add: function(segment1) {
              var args = arguments;
              return args.length > 1 && typeof segment1 !== "number" ? this._add(Segment.readList(args)) : this._add([Segment.read(args)])[0];
            },
            insert: function(index, segment1) {
              var args = arguments;
              return args.length > 2 && typeof segment1 !== "number" ? this._add(Segment.readList(args, 1), index) : this._add([Segment.read(args, 1)], index)[0];
            },
            addSegment: function() {
              return this._add([Segment.read(arguments)])[0];
            },
            insertSegment: function(index) {
              return this._add([Segment.read(arguments, 1)], index)[0];
            },
            addSegments: function(segments) {
              return this._add(Segment.readList(segments));
            },
            insertSegments: function(index, segments) {
              return this._add(Segment.readList(segments), index);
            },
            removeSegment: function(index) {
              return this.removeSegments(index, index + 1)[0] || null;
            },
            removeSegments: function(start, end, _includeCurves) {
              start = start || 0;
              end = Base.pick(end, this._segments.length);
              var segments = this._segments, curves = this._curves, count = segments.length, removed = segments.splice(start, end - start), amount = removed.length;
              if (!amount)
                return removed;
              for (var i2 = 0; i2 < amount; i2++) {
                var segment = removed[i2];
                if (segment._selection)
                  this._updateSelection(segment, segment._selection, 0);
                segment._index = segment._path = null;
              }
              for (var i2 = start, l = segments.length; i2 < l; i2++)
                segments[i2]._index = i2;
              if (curves) {
                var index = start > 0 && end === count + (this._closed ? 1 : 0) ? start - 1 : start, curves = curves.splice(index, amount);
                for (var i2 = curves.length - 1; i2 >= 0; i2--)
                  curves[i2]._path = null;
                if (_includeCurves)
                  removed._curves = curves.slice(1);
                this._adjustCurves(index, index);
              }
              this._changed(41);
              return removed;
            },
            clear: "#removeSegments",
            hasHandles: function() {
              var segments = this._segments;
              for (var i2 = 0, l = segments.length; i2 < l; i2++) {
                if (segments[i2].hasHandles())
                  return true;
              }
              return false;
            },
            clearHandles: function() {
              var segments = this._segments;
              for (var i2 = 0, l = segments.length; i2 < l; i2++)
                segments[i2].clearHandles();
            },
            getLength: function() {
              if (this._length == null) {
                var curves = this.getCurves(), length = 0;
                for (var i2 = 0, l = curves.length; i2 < l; i2++)
                  length += curves[i2].getLength();
                this._length = length;
              }
              return this._length;
            },
            getArea: function() {
              var area = this._area;
              if (area == null) {
                var segments = this._segments, closed = this._closed;
                area = 0;
                for (var i2 = 0, l = segments.length; i2 < l; i2++) {
                  var last = i2 + 1 === l;
                  area += Curve.getArea(Curve.getValues(
                    segments[i2],
                    segments[last ? 0 : i2 + 1],
                    null,
                    last && !closed
                  ));
                }
                this._area = area;
              }
              return area;
            },
            isFullySelected: function() {
              var length = this._segments.length;
              return this.isSelected() && length > 0 && this._segmentSelection === length * 7;
            },
            setFullySelected: function(selected) {
              if (selected)
                this._selectSegments(true);
              this.setSelected(selected);
            },
            setSelection: function setSelection(selection) {
              if (!(selection & 1))
                this._selectSegments(false);
              setSelection.base.call(this, selection);
            },
            _selectSegments: function(selected) {
              var segments = this._segments, length = segments.length, selection = selected ? 7 : 0;
              this._segmentSelection = selection * length;
              for (var i2 = 0; i2 < length; i2++)
                segments[i2]._selection = selection;
            },
            _updateSelection: function(segment, oldSelection, newSelection) {
              segment._selection = newSelection;
              var selection = this._segmentSelection += newSelection - oldSelection;
              if (selection > 0)
                this.setSelected(true);
            },
            divideAt: function(location) {
              var loc = this.getLocationAt(location), curve;
              return loc && (curve = loc.getCurve().divideAt(loc.getCurveOffset())) ? curve._segment1 : null;
            },
            splitAt: function(location) {
              var loc = this.getLocationAt(location), index = loc && loc.index, time = loc && loc.time, tMin = 1e-8, tMax = 1 - tMin;
              if (time > tMax) {
                index++;
                time = 0;
              }
              var curves = this.getCurves();
              if (index >= 0 && index < curves.length) {
                if (time >= tMin) {
                  curves[index++].divideAtTime(time);
                }
                var segs = this.removeSegments(index, this._segments.length, true), path;
                if (this._closed) {
                  this.setClosed(false);
                  path = this;
                } else {
                  path = new Path(Item.NO_INSERT);
                  path.insertAbove(this);
                  path.copyAttributes(this);
                }
                path._add(segs, 0);
                this.addSegment(segs[0]);
                return path;
              }
              return null;
            },
            split: function(index, time) {
              var curve, location = time === undefined2 ? index : (curve = this.getCurves()[index]) && curve.getLocationAtTime(time);
              return location != null ? this.splitAt(location) : null;
            },
            join: function(path, tolerance) {
              var epsilon = tolerance || 0;
              if (path && path !== this) {
                var segments = path._segments, last1 = this.getLastSegment(), last2 = path.getLastSegment();
                if (!last2)
                  return this;
                if (last1 && last1._point.isClose(last2._point, epsilon))
                  path.reverse();
                var first2 = path.getFirstSegment();
                if (last1 && last1._point.isClose(first2._point, epsilon)) {
                  last1.setHandleOut(first2._handleOut);
                  this._add(segments.slice(1));
                } else {
                  var first1 = this.getFirstSegment();
                  if (first1 && first1._point.isClose(first2._point, epsilon))
                    path.reverse();
                  last2 = path.getLastSegment();
                  if (first1 && first1._point.isClose(last2._point, epsilon)) {
                    first1.setHandleIn(last2._handleIn);
                    this._add(segments.slice(0, segments.length - 1), 0);
                  } else {
                    this._add(segments.slice());
                  }
                }
                if (path._closed)
                  this._add([segments[0]]);
                path.remove();
              }
              var first = this.getFirstSegment(), last = this.getLastSegment();
              if (first !== last && first._point.isClose(last._point, epsilon)) {
                first.setHandleIn(last._handleIn);
                last.remove();
                this.setClosed(true);
              }
              return this;
            },
            reduce: function(options) {
              var curves = this.getCurves(), simplify = options && options.simplify, tolerance = simplify ? 1e-7 : 0;
              for (var i2 = curves.length - 1; i2 >= 0; i2--) {
                var curve = curves[i2];
                if (!curve.hasHandles() && (!curve.hasLength(tolerance) || simplify && curve.isCollinear(curve.getNext())))
                  curve.remove();
              }
              return this;
            },
            reverse: function() {
              this._segments.reverse();
              for (var i2 = 0, l = this._segments.length; i2 < l; i2++) {
                var segment = this._segments[i2];
                var handleIn = segment._handleIn;
                segment._handleIn = segment._handleOut;
                segment._handleOut = handleIn;
                segment._index = i2;
              }
              this._curves = null;
              this._changed(9);
            },
            flatten: function(flatness) {
              var flattener = new PathFlattener(this, flatness || 0.25, 256, true), parts = flattener.parts, length = parts.length, segments = [];
              for (var i2 = 0; i2 < length; i2++) {
                segments.push(new Segment(parts[i2].curve.slice(0, 2)));
              }
              if (!this._closed && length > 0) {
                segments.push(new Segment(parts[length - 1].curve.slice(6)));
              }
              this.setSegments(segments);
            },
            simplify: function(tolerance) {
              var segments = new PathFitter(this).fit(tolerance || 2.5);
              if (segments)
                this.setSegments(segments);
              return !!segments;
            },
            smooth: function(options) {
              var that = this, opts = options || {}, type = opts.type || "asymmetric", segments = this._segments, length = segments.length, closed = this._closed;
              function getIndex(value, _default) {
                var index = value && value.index;
                if (index != null) {
                  var path = value.path;
                  if (path && path !== that)
                    throw new Error(value._class + " " + index + " of " + path + " is not part of " + that);
                  if (_default && value instanceof Curve)
                    index++;
                } else {
                  index = typeof value === "number" ? value : _default;
                }
                return Math.min(index < 0 && closed ? index % length : index < 0 ? index + length : index, length - 1);
              }
              var loop = closed && opts.from === undefined2 && opts.to === undefined2, from = getIndex(opts.from, 0), to = getIndex(opts.to, length - 1);
              if (from > to) {
                if (closed) {
                  from -= length;
                } else {
                  var tmp = from;
                  from = to;
                  to = tmp;
                }
              }
              if (/^(?:asymmetric|continuous)$/.test(type)) {
                var asymmetric = type === "asymmetric", min = Math.min, amount = to - from + 1, n = amount - 1, padding = loop ? min(amount, 4) : 1, paddingLeft = padding, paddingRight = padding, knots = [];
                if (!closed) {
                  paddingLeft = min(1, from);
                  paddingRight = min(1, length - to - 1);
                }
                n += paddingLeft + paddingRight;
                if (n <= 1)
                  return;
                for (var i2 = 0, j = from - paddingLeft; i2 <= n; i2++, j++) {
                  knots[i2] = segments[(j < 0 ? j + length : j) % length]._point;
                }
                var x = knots[0]._x + 2 * knots[1]._x, y = knots[0]._y + 2 * knots[1]._y, f = 2, n_1 = n - 1, rx = [x], ry = [y], rf = [f], px = [], py = [];
                for (var i2 = 1; i2 < n; i2++) {
                  var internal = i2 < n_1, a = internal ? 1 : asymmetric ? 1 : 2, b = internal ? 4 : asymmetric ? 2 : 7, u = internal ? 4 : asymmetric ? 3 : 8, v = internal ? 2 : asymmetric ? 0 : 1, m = a / f;
                  f = rf[i2] = b - m;
                  x = rx[i2] = u * knots[i2]._x + v * knots[i2 + 1]._x - m * x;
                  y = ry[i2] = u * knots[i2]._y + v * knots[i2 + 1]._y - m * y;
                }
                px[n_1] = rx[n_1] / rf[n_1];
                py[n_1] = ry[n_1] / rf[n_1];
                for (var i2 = n - 2; i2 >= 0; i2--) {
                  px[i2] = (rx[i2] - px[i2 + 1]) / rf[i2];
                  py[i2] = (ry[i2] - py[i2 + 1]) / rf[i2];
                }
                px[n] = (3 * knots[n]._x - px[n_1]) / 2;
                py[n] = (3 * knots[n]._y - py[n_1]) / 2;
                for (var i2 = paddingLeft, max = n - paddingRight, j = from; i2 <= max; i2++, j++) {
                  var segment = segments[j < 0 ? j + length : j], pt = segment._point, hx = px[i2] - pt._x, hy = py[i2] - pt._y;
                  if (loop || i2 < max)
                    segment.setHandleOut(hx, hy);
                  if (loop || i2 > paddingLeft)
                    segment.setHandleIn(-hx, -hy);
                }
              } else {
                for (var i2 = from; i2 <= to; i2++) {
                  segments[i2 < 0 ? i2 + length : i2].smooth(
                    opts,
                    !loop && i2 === from,
                    !loop && i2 === to
                  );
                }
              }
            },
            toShape: function(insert) {
              if (!this._closed)
                return null;
              var segments = this._segments, type, size, radius, topCenter;
              function isCollinear(i2, j) {
                var seg1 = segments[i2], seg2 = seg1.getNext(), seg3 = segments[j], seg4 = seg3.getNext();
                return seg1._handleOut.isZero() && seg2._handleIn.isZero() && seg3._handleOut.isZero() && seg4._handleIn.isZero() && seg2._point.subtract(seg1._point).isCollinear(
                  seg4._point.subtract(seg3._point)
                );
              }
              function isOrthogonal(i2) {
                var seg2 = segments[i2], seg1 = seg2.getPrevious(), seg3 = seg2.getNext();
                return seg1._handleOut.isZero() && seg2._handleIn.isZero() && seg2._handleOut.isZero() && seg3._handleIn.isZero() && seg2._point.subtract(seg1._point).isOrthogonal(
                  seg3._point.subtract(seg2._point)
                );
              }
              function isArc(i2) {
                var seg1 = segments[i2], seg2 = seg1.getNext(), handle1 = seg1._handleOut, handle2 = seg2._handleIn, kappa = 0.5522847498307936;
                if (handle1.isOrthogonal(handle2)) {
                  var pt1 = seg1._point, pt2 = seg2._point, corner = new Line(pt1, handle1, true).intersect(
                    new Line(pt2, handle2, true),
                    true
                  );
                  return corner && Numerical.isZero(handle1.getLength() / corner.subtract(pt1).getLength() - kappa) && Numerical.isZero(handle2.getLength() / corner.subtract(pt2).getLength() - kappa);
                }
                return false;
              }
              function getDistance(i2, j) {
                return segments[i2]._point.getDistance(segments[j]._point);
              }
              if (!this.hasHandles() && segments.length === 4 && isCollinear(0, 2) && isCollinear(1, 3) && isOrthogonal(1)) {
                type = Shape.Rectangle;
                size = new Size(getDistance(0, 3), getDistance(0, 1));
                topCenter = segments[1]._point.add(segments[2]._point).divide(2);
              } else if (segments.length === 8 && isArc(0) && isArc(2) && isArc(4) && isArc(6) && isCollinear(1, 5) && isCollinear(3, 7)) {
                type = Shape.Rectangle;
                size = new Size(getDistance(1, 6), getDistance(0, 3));
                radius = size.subtract(new Size(
                  getDistance(0, 7),
                  getDistance(1, 2)
                )).divide(2);
                topCenter = segments[3]._point.add(segments[4]._point).divide(2);
              } else if (segments.length === 4 && isArc(0) && isArc(1) && isArc(2) && isArc(3)) {
                if (Numerical.isZero(getDistance(0, 2) - getDistance(1, 3))) {
                  type = Shape.Circle;
                  radius = getDistance(0, 2) / 2;
                } else {
                  type = Shape.Ellipse;
                  radius = new Size(getDistance(2, 0) / 2, getDistance(3, 1) / 2);
                }
                topCenter = segments[1]._point;
              }
              if (type) {
                var center = this.getPosition(true), shape = new type({
                  center,
                  size,
                  radius,
                  insert: false
                });
                shape.copyAttributes(this, true);
                shape._matrix.prepend(this._matrix);
                shape.rotate(topCenter.subtract(center).getAngle() + 90);
                if (insert === undefined2 || insert)
                  shape.insertAbove(this);
                return shape;
              }
              return null;
            },
            toPath: "#clone",
            compare: function compare(path) {
              if (!path || path instanceof CompoundPath)
                return compare.base.call(this, path);
              var curves1 = this.getCurves(), curves2 = path.getCurves(), length1 = curves1.length, length2 = curves2.length;
              if (!length1 || !length2) {
                return length1 == length2;
              }
              var v1 = curves1[0].getValues(), values2 = [], pos1 = 0, pos2, end1 = 0, end2;
              for (var i2 = 0; i2 < length2; i2++) {
                var v2 = curves2[i2].getValues();
                values2.push(v2);
                var overlaps = Curve.getOverlaps(v1, v2);
                if (overlaps) {
                  pos2 = !i2 && overlaps[0][0] > 0 ? length2 - 1 : i2;
                  end2 = overlaps[0][1];
                  break;
                }
              }
              var abs = Math.abs, epsilon = 1e-8, v2 = values2[pos2], start2;
              while (v1 && v2) {
                var overlaps = Curve.getOverlaps(v1, v2);
                if (overlaps) {
                  var t1 = overlaps[0][0];
                  if (abs(t1 - end1) < epsilon) {
                    end1 = overlaps[1][0];
                    if (end1 === 1) {
                      v1 = ++pos1 < length1 ? curves1[pos1].getValues() : null;
                      end1 = 0;
                    }
                    var t2 = overlaps[0][1];
                    if (abs(t2 - end2) < epsilon) {
                      if (!start2)
                        start2 = [pos2, t2];
                      end2 = overlaps[1][1];
                      if (end2 === 1) {
                        if (++pos2 >= length2)
                          pos2 = 0;
                        v2 = values2[pos2] || curves2[pos2].getValues();
                        end2 = 0;
                      }
                      if (!v1) {
                        return start2[0] === pos2 && start2[1] === end2;
                      }
                      continue;
                    }
                  }
                }
                break;
              }
              return false;
            },
            _hitTestSelf: function(point, options, viewMatrix, strokeMatrix) {
              var that = this, style = this.getStyle(), segments = this._segments, numSegments = segments.length, closed = this._closed, tolerancePadding = options._tolerancePadding, strokePadding = tolerancePadding, join, cap, miterLimit, area, loc, res, hitStroke = options.stroke && style.hasStroke(), hitFill = options.fill && style.hasFill(), hitCurves = options.curves, strokeRadius = hitStroke ? style.getStrokeWidth() / 2 : hitFill && options.tolerance > 0 || hitCurves ? 0 : null;
              if (strokeRadius !== null) {
                if (strokeRadius > 0) {
                  join = style.getStrokeJoin();
                  cap = style.getStrokeCap();
                  miterLimit = style.getMiterLimit();
                  strokePadding = strokePadding.add(
                    Path._getStrokePadding(strokeRadius, strokeMatrix)
                  );
                } else {
                  join = cap = "round";
                }
              }
              function isCloseEnough(pt, padding) {
                return point.subtract(pt).divide(padding).length <= 1;
              }
              function checkSegmentPoint(seg, pt, name) {
                if (!options.selected || pt.isSelected()) {
                  var anchor = seg._point;
                  if (pt !== anchor)
                    pt = pt.add(anchor);
                  if (isCloseEnough(pt, strokePadding)) {
                    return new HitResult(name, that, {
                      segment: seg,
                      point: pt
                    });
                  }
                }
              }
              function checkSegmentPoints(seg, ends) {
                return (ends || options.segments) && checkSegmentPoint(seg, seg._point, "segment") || !ends && options.handles && (checkSegmentPoint(seg, seg._handleIn, "handle-in") || checkSegmentPoint(seg, seg._handleOut, "handle-out"));
              }
              function addToArea(point2) {
                area.add(point2);
              }
              function checkSegmentStroke(segment2) {
                var isJoin = closed || segment2._index > 0 && segment2._index < numSegments - 1;
                if ((isJoin ? join : cap) === "round") {
                  return isCloseEnough(segment2._point, strokePadding);
                } else {
                  area = new Path({ internal: true, closed: true });
                  if (isJoin) {
                    if (!segment2.isSmooth()) {
                      Path._addBevelJoin(
                        segment2,
                        join,
                        strokeRadius,
                        miterLimit,
                        null,
                        strokeMatrix,
                        addToArea,
                        true
                      );
                    }
                  } else if (cap === "square") {
                    Path._addSquareCap(
                      segment2,
                      cap,
                      strokeRadius,
                      null,
                      strokeMatrix,
                      addToArea,
                      true
                    );
                  }
                  if (!area.isEmpty()) {
                    var loc2;
                    return area.contains(point) || (loc2 = area.getNearestLocation(point)) && isCloseEnough(loc2.getPoint(), tolerancePadding);
                  }
                }
              }
              if (options.ends && !options.segments && !closed) {
                if (res = checkSegmentPoints(segments[0], true) || checkSegmentPoints(segments[numSegments - 1], true))
                  return res;
              } else if (options.segments || options.handles) {
                for (var i2 = 0; i2 < numSegments; i2++)
                  if (res = checkSegmentPoints(segments[i2]))
                    return res;
              }
              if (strokeRadius !== null) {
                loc = this.getNearestLocation(point);
                if (loc) {
                  var time = loc.getTime();
                  if (time === 0 || time === 1 && numSegments > 1) {
                    if (!checkSegmentStroke(loc.getSegment()))
                      loc = null;
                  } else if (!isCloseEnough(loc.getPoint(), strokePadding)) {
                    loc = null;
                  }
                }
                if (!loc && join === "miter" && numSegments > 1) {
                  for (var i2 = 0; i2 < numSegments; i2++) {
                    var segment = segments[i2];
                    if (point.getDistance(segment._point) <= miterLimit * strokeRadius && checkSegmentStroke(segment)) {
                      loc = segment.getLocation();
                      break;
                    }
                  }
                }
              }
              return !loc && hitFill && this._contains(point) || loc && !hitStroke && !hitCurves ? new HitResult("fill", this) : loc ? new HitResult(hitStroke ? "stroke" : "curve", this, {
                location: loc,
                point: loc.getPoint()
              }) : null;
            }
          },
          Base.each(
            Curve._evaluateMethods,
            function(name) {
              this[name + "At"] = function(offset) {
                var loc = this.getLocationAt(offset);
                return loc && loc[name]();
              };
            },
            {
              beans: false,
              getLocationOf: function() {
                var point = Point.read(arguments), curves = this.getCurves();
                for (var i2 = 0, l = curves.length; i2 < l; i2++) {
                  var loc = curves[i2].getLocationOf(point);
                  if (loc)
                    return loc;
                }
                return null;
              },
              getOffsetOf: function() {
                var loc = this.getLocationOf.apply(this, arguments);
                return loc ? loc.getOffset() : null;
              },
              getLocationAt: function(offset) {
                if (typeof offset === "number") {
                  var curves = this.getCurves(), length = 0;
                  for (var i2 = 0, l = curves.length; i2 < l; i2++) {
                    var start = length, curve = curves[i2];
                    length += curve.getLength();
                    if (length > offset) {
                      return curve.getLocationAt(offset - start);
                    }
                  }
                  if (curves.length > 0 && offset <= this.getLength()) {
                    return new CurveLocation(curves[curves.length - 1], 1);
                  }
                } else if (offset && offset.getPath && offset.getPath() === this) {
                  return offset;
                }
                return null;
              },
              getOffsetsWithTangent: function() {
                var tangent = Point.read(arguments);
                if (tangent.isZero()) {
                  return [];
                }
                var offsets = [];
                var curveStart = 0;
                var curves = this.getCurves();
                for (var i2 = 0, l = curves.length; i2 < l; i2++) {
                  var curve = curves[i2];
                  var curveTimes = curve.getTimesWithTangent(tangent);
                  for (var j = 0, m = curveTimes.length; j < m; j++) {
                    var offset = curveStart + curve.getOffsetAtTime(curveTimes[j]);
                    if (offsets.indexOf(offset) < 0) {
                      offsets.push(offset);
                    }
                  }
                  curveStart += curve.length;
                }
                return offsets;
              }
            }
          ),
          new function() {
            function drawHandles(ctx, segments, matrix, size) {
              if (size <= 0)
                return;
              var half = size / 2, miniSize = size - 2, miniHalf = half - 1, coords = new Array(6), pX, pY;
              function drawHandle(index) {
                var hX = coords[index], hY = coords[index + 1];
                if (pX != hX || pY != hY) {
                  ctx.beginPath();
                  ctx.moveTo(pX, pY);
                  ctx.lineTo(hX, hY);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.arc(hX, hY, half, 0, Math.PI * 2, true);
                  ctx.fill();
                }
              }
              for (var i2 = 0, l = segments.length; i2 < l; i2++) {
                var segment = segments[i2], selection = segment._selection;
                segment._transformCoordinates(matrix, coords);
                pX = coords[0];
                pY = coords[1];
                if (selection & 2)
                  drawHandle(2);
                if (selection & 4)
                  drawHandle(4);
                ctx.fillRect(pX - half, pY - half, size, size);
                if (miniSize > 0 && !(selection & 1)) {
                  var fillStyle = ctx.fillStyle;
                  ctx.fillStyle = "#ffffff";
                  ctx.fillRect(pX - miniHalf, pY - miniHalf, miniSize, miniSize);
                  ctx.fillStyle = fillStyle;
                }
              }
            }
            function drawSegments(ctx, path, matrix) {
              var segments = path._segments, length = segments.length, coords = new Array(6), first = true, curX, curY, prevX, prevY, inX, inY, outX, outY;
              function drawSegment(segment) {
                if (matrix) {
                  segment._transformCoordinates(matrix, coords);
                  curX = coords[0];
                  curY = coords[1];
                } else {
                  var point = segment._point;
                  curX = point._x;
                  curY = point._y;
                }
                if (first) {
                  ctx.moveTo(curX, curY);
                  first = false;
                } else {
                  if (matrix) {
                    inX = coords[2];
                    inY = coords[3];
                  } else {
                    var handle = segment._handleIn;
                    inX = curX + handle._x;
                    inY = curY + handle._y;
                  }
                  if (inX === curX && inY === curY && outX === prevX && outY === prevY) {
                    ctx.lineTo(curX, curY);
                  } else {
                    ctx.bezierCurveTo(outX, outY, inX, inY, curX, curY);
                  }
                }
                prevX = curX;
                prevY = curY;
                if (matrix) {
                  outX = coords[4];
                  outY = coords[5];
                } else {
                  var handle = segment._handleOut;
                  outX = prevX + handle._x;
                  outY = prevY + handle._y;
                }
              }
              for (var i2 = 0; i2 < length; i2++)
                drawSegment(segments[i2]);
              if (path._closed && length > 0)
                drawSegment(segments[0]);
            }
            return {
              _draw: function(ctx, param, viewMatrix, strokeMatrix) {
                var dontStart = param.dontStart, dontPaint = param.dontFinish || param.clip, style = this.getStyle(), hasFill = style.hasFill(), hasStroke = style.hasStroke(), dashArray = style.getDashArray(), dashLength = !paper2.support.nativeDash && hasStroke && dashArray && dashArray.length;
                if (!dontStart)
                  ctx.beginPath();
                if (hasFill || hasStroke && !dashLength || dontPaint) {
                  drawSegments(ctx, this, strokeMatrix);
                  if (this._closed)
                    ctx.closePath();
                }
                function getOffset(i3) {
                  return dashArray[(i3 % dashLength + dashLength) % dashLength];
                }
                if (!dontPaint && (hasFill || hasStroke)) {
                  this._setStyles(ctx, param, viewMatrix);
                  if (hasFill) {
                    ctx.fill(style.getFillRule());
                    ctx.shadowColor = "rgba(0,0,0,0)";
                  }
                  if (hasStroke) {
                    if (dashLength) {
                      if (!dontStart)
                        ctx.beginPath();
                      var flattener = new PathFlattener(
                        this,
                        0.25,
                        32,
                        false,
                        strokeMatrix
                      ), length = flattener.length, from = -style.getDashOffset(), to, i2 = 0;
                      while (from > 0) {
                        from -= getOffset(i2--) + getOffset(i2--);
                      }
                      while (from < length) {
                        to = from + getOffset(i2++);
                        if (from > 0 || to > 0)
                          flattener.drawPart(
                            ctx,
                            Math.max(from, 0),
                            Math.max(to, 0)
                          );
                        from = to + getOffset(i2++);
                      }
                    }
                    ctx.stroke();
                  }
                }
              },
              _drawSelected: function(ctx, matrix) {
                ctx.beginPath();
                drawSegments(ctx, this, matrix);
                ctx.stroke();
                drawHandles(ctx, this._segments, matrix, paper2.settings.handleSize);
              }
            };
          }(),
          new function() {
            function getCurrentSegment(that) {
              var segments = that._segments;
              if (!segments.length)
                throw new Error("Use a moveTo() command first");
              return segments[segments.length - 1];
            }
            return {
              moveTo: function() {
                var segments = this._segments;
                if (segments.length === 1)
                  this.removeSegment(0);
                if (!segments.length)
                  this._add([new Segment(Point.read(arguments))]);
              },
              moveBy: function() {
                throw new Error("moveBy() is unsupported on Path items.");
              },
              lineTo: function() {
                this._add([new Segment(Point.read(arguments))]);
              },
              cubicCurveTo: function() {
                var args = arguments, handle1 = Point.read(args), handle2 = Point.read(args), to = Point.read(args), current = getCurrentSegment(this);
                current.setHandleOut(handle1.subtract(current._point));
                this._add([new Segment(to, handle2.subtract(to))]);
              },
              quadraticCurveTo: function() {
                var args = arguments, handle = Point.read(args), to = Point.read(args), current = getCurrentSegment(this)._point;
                this.cubicCurveTo(
                  handle.add(current.subtract(handle).multiply(1 / 3)),
                  handle.add(to.subtract(handle).multiply(1 / 3)),
                  to
                );
              },
              curveTo: function() {
                var args = arguments, through = Point.read(args), to = Point.read(args), t2 = Base.pick(Base.read(args), 0.5), t1 = 1 - t2, current = getCurrentSegment(this)._point, handle = through.subtract(current.multiply(t1 * t1)).subtract(to.multiply(t2 * t2)).divide(2 * t2 * t1);
                if (handle.isNaN())
                  throw new Error(
                    "Cannot put a curve through points with parameter = " + t2
                  );
                this.quadraticCurveTo(handle, to);
              },
              arcTo: function() {
                var args = arguments, abs = Math.abs, sqrt = Math.sqrt, current = getCurrentSegment(this), from = current._point, to = Point.read(args), through, peek = Base.peek(args), clockwise = Base.pick(peek, true), center, extent, vector, matrix;
                if (typeof clockwise === "boolean") {
                  var middle = from.add(to).divide(2), through = middle.add(middle.subtract(from).rotate(
                    clockwise ? -90 : 90
                  ));
                } else if (Base.remain(args) <= 2) {
                  through = to;
                  to = Point.read(args);
                } else if (!from.equals(to)) {
                  var radius = Size.read(args), isZero = Numerical.isZero;
                  if (isZero(radius.width) || isZero(radius.height))
                    return this.lineTo(to);
                  var rotation = Base.read(args), clockwise = !!Base.read(args), large = !!Base.read(args), middle = from.add(to).divide(2), pt = from.subtract(middle).rotate(-rotation), x = pt.x, y = pt.y, rx = abs(radius.width), ry = abs(radius.height), rxSq = rx * rx, rySq = ry * ry, xSq = x * x, ySq = y * y;
                  var factor = sqrt(xSq / rxSq + ySq / rySq);
                  if (factor > 1) {
                    rx *= factor;
                    ry *= factor;
                    rxSq = rx * rx;
                    rySq = ry * ry;
                  }
                  factor = (rxSq * rySq - rxSq * ySq - rySq * xSq) / (rxSq * ySq + rySq * xSq);
                  if (abs(factor) < 1e-12)
                    factor = 0;
                  if (factor < 0)
                    throw new Error(
                      "Cannot create an arc with the given arguments"
                    );
                  center = new Point(rx * y / ry, -ry * x / rx).multiply((large === clockwise ? -1 : 1) * sqrt(factor)).rotate(rotation).add(middle);
                  matrix = new Matrix().translate(center).rotate(rotation).scale(rx, ry);
                  vector = matrix._inverseTransform(from);
                  extent = vector.getDirectedAngle(matrix._inverseTransform(to));
                  if (!clockwise && extent > 0)
                    extent -= 360;
                  else if (clockwise && extent < 0)
                    extent += 360;
                }
                if (through) {
                  var l1 = new Line(
                    from.add(through).divide(2),
                    through.subtract(from).rotate(90),
                    true
                  ), l2 = new Line(
                    through.add(to).divide(2),
                    to.subtract(through).rotate(90),
                    true
                  ), line = new Line(from, to), throughSide = line.getSide(through);
                  center = l1.intersect(l2, true);
                  if (!center) {
                    if (!throughSide)
                      return this.lineTo(to);
                    throw new Error(
                      "Cannot create an arc with the given arguments"
                    );
                  }
                  vector = from.subtract(center);
                  extent = vector.getDirectedAngle(to.subtract(center));
                  var centerSide = line.getSide(center, true);
                  if (centerSide === 0) {
                    extent = throughSide * abs(extent);
                  } else if (throughSide === centerSide) {
                    extent += extent < 0 ? 360 : -360;
                  }
                }
                if (extent) {
                  var epsilon = 1e-5, ext = abs(extent), count = ext >= 360 ? 4 : Math.ceil((ext - epsilon) / 90), inc = extent / count, half = inc * Math.PI / 360, z = 4 / 3 * Math.sin(half) / (1 + Math.cos(half)), segments = [];
                  for (var i2 = 0; i2 <= count; i2++) {
                    var pt = to, out = null;
                    if (i2 < count) {
                      out = vector.rotate(90).multiply(z);
                      if (matrix) {
                        pt = matrix._transformPoint(vector);
                        out = matrix._transformPoint(vector.add(out)).subtract(pt);
                      } else {
                        pt = center.add(vector);
                      }
                    }
                    if (!i2) {
                      current.setHandleOut(out);
                    } else {
                      var _in = vector.rotate(-90).multiply(z);
                      if (matrix) {
                        _in = matrix._transformPoint(vector.add(_in)).subtract(pt);
                      }
                      segments.push(new Segment(pt, _in, out));
                    }
                    vector = vector.rotate(inc);
                  }
                  this._add(segments);
                }
              },
              lineBy: function() {
                var to = Point.read(arguments), current = getCurrentSegment(this)._point;
                this.lineTo(current.add(to));
              },
              curveBy: function() {
                var args = arguments, through = Point.read(args), to = Point.read(args), parameter = Base.read(args), current = getCurrentSegment(this)._point;
                this.curveTo(current.add(through), current.add(to), parameter);
              },
              cubicCurveBy: function() {
                var args = arguments, handle1 = Point.read(args), handle2 = Point.read(args), to = Point.read(args), current = getCurrentSegment(this)._point;
                this.cubicCurveTo(
                  current.add(handle1),
                  current.add(handle2),
                  current.add(to)
                );
              },
              quadraticCurveBy: function() {
                var args = arguments, handle = Point.read(args), to = Point.read(args), current = getCurrentSegment(this)._point;
                this.quadraticCurveTo(current.add(handle), current.add(to));
              },
              arcBy: function() {
                var args = arguments, current = getCurrentSegment(this)._point, point = current.add(Point.read(args)), clockwise = Base.pick(Base.peek(args), true);
                if (typeof clockwise === "boolean") {
                  this.arcTo(point, clockwise);
                } else {
                  this.arcTo(point, current.add(Point.read(args)));
                }
              },
              closePath: function(tolerance) {
                this.setClosed(true);
                this.join(this, tolerance);
              }
            };
          }(),
          {
            _getBounds: function(matrix, options) {
              var method = options.handle ? "getHandleBounds" : options.stroke ? "getStrokeBounds" : "getBounds";
              return Path[method](this._segments, this._closed, this, matrix, options);
            },
            statics: {
              getBounds: function(segments, closed, path, matrix, options, strokePadding) {
                var first = segments[0];
                if (!first)
                  return new Rectangle();
                var coords = new Array(6), prevCoords = first._transformCoordinates(matrix, new Array(6)), min = prevCoords.slice(0, 2), max = min.slice(), roots = new Array(2);
                function processSegment(segment) {
                  segment._transformCoordinates(matrix, coords);
                  for (var i3 = 0; i3 < 2; i3++) {
                    Curve._addBounds(
                      prevCoords[i3],
                      prevCoords[i3 + 4],
                      coords[i3 + 2],
                      coords[i3],
                      i3,
                      strokePadding ? strokePadding[i3] : 0,
                      min,
                      max,
                      roots
                    );
                  }
                  var tmp = prevCoords;
                  prevCoords = coords;
                  coords = tmp;
                }
                for (var i2 = 1, l = segments.length; i2 < l; i2++)
                  processSegment(segments[i2]);
                if (closed)
                  processSegment(first);
                return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
              },
              getStrokeBounds: function(segments, closed, path, matrix, options) {
                var style = path.getStyle(), stroke = style.hasStroke(), strokeWidth = style.getStrokeWidth(), strokeMatrix = stroke && path._getStrokeMatrix(matrix, options), strokePadding = stroke && Path._getStrokePadding(
                  strokeWidth,
                  strokeMatrix
                ), bounds = Path.getBounds(
                  segments,
                  closed,
                  path,
                  matrix,
                  options,
                  strokePadding
                );
                if (!stroke)
                  return bounds;
                var strokeRadius = strokeWidth / 2, join = style.getStrokeJoin(), cap = style.getStrokeCap(), miterLimit = style.getMiterLimit(), joinBounds = new Rectangle(new Size(strokePadding));
                function addPoint(point) {
                  bounds = bounds.include(point);
                }
                function addRound(segment) {
                  bounds = bounds.unite(
                    joinBounds.setCenter(segment._point.transform(matrix))
                  );
                }
                function addJoin(segment, join2) {
                  if (join2 === "round" || segment.isSmooth()) {
                    addRound(segment);
                  } else {
                    Path._addBevelJoin(
                      segment,
                      join2,
                      strokeRadius,
                      miterLimit,
                      matrix,
                      strokeMatrix,
                      addPoint
                    );
                  }
                }
                function addCap(segment, cap2) {
                  if (cap2 === "round") {
                    addRound(segment);
                  } else {
                    Path._addSquareCap(
                      segment,
                      cap2,
                      strokeRadius,
                      matrix,
                      strokeMatrix,
                      addPoint
                    );
                  }
                }
                var length = segments.length - (closed ? 0 : 1);
                if (length > 0) {
                  for (var i2 = 1; i2 < length; i2++) {
                    addJoin(segments[i2], join);
                  }
                  if (closed) {
                    addJoin(segments[0], join);
                  } else {
                    addCap(segments[0], cap);
                    addCap(segments[segments.length - 1], cap);
                  }
                }
                return bounds;
              },
              _getStrokePadding: function(radius, matrix) {
                if (!matrix)
                  return [radius, radius];
                var hor = new Point(radius, 0).transform(matrix), ver = new Point(0, radius).transform(matrix), phi = hor.getAngleInRadians(), a = hor.getLength(), b = ver.getLength();
                var sin = Math.sin(phi), cos = Math.cos(phi), tan = Math.tan(phi), tx = Math.atan2(b * tan, a), ty = Math.atan2(b, tan * a);
                return [
                  Math.abs(a * Math.cos(tx) * cos + b * Math.sin(tx) * sin),
                  Math.abs(b * Math.sin(ty) * cos + a * Math.cos(ty) * sin)
                ];
              },
              _addBevelJoin: function(segment, join, radius, miterLimit, matrix, strokeMatrix, addPoint, isArea) {
                var curve2 = segment.getCurve(), curve1 = curve2.getPrevious(), point = curve2.getPoint1().transform(matrix), normal1 = curve1.getNormalAtTime(1).multiply(radius).transform(strokeMatrix), normal2 = curve2.getNormalAtTime(0).multiply(radius).transform(strokeMatrix), angle = normal1.getDirectedAngle(normal2);
                if (angle < 0 || angle >= 180) {
                  normal1 = normal1.negate();
                  normal2 = normal2.negate();
                }
                if (isArea)
                  addPoint(point);
                addPoint(point.add(normal1));
                if (join === "miter") {
                  var corner = new Line(
                    point.add(normal1),
                    new Point(-normal1.y, normal1.x),
                    true
                  ).intersect(new Line(
                    point.add(normal2),
                    new Point(-normal2.y, normal2.x),
                    true
                  ), true);
                  if (corner && point.getDistance(corner) <= miterLimit * radius) {
                    addPoint(corner);
                  }
                }
                addPoint(point.add(normal2));
              },
              _addSquareCap: function(segment, cap, radius, matrix, strokeMatrix, addPoint, isArea) {
                var point = segment._point.transform(matrix), loc = segment.getLocation(), normal = loc.getNormal().multiply(loc.getTime() === 0 ? radius : -radius).transform(strokeMatrix);
                if (cap === "square") {
                  if (isArea) {
                    addPoint(point.subtract(normal));
                    addPoint(point.add(normal));
                  }
                  point = point.add(normal.rotate(-90));
                }
                addPoint(point.add(normal));
                addPoint(point.subtract(normal));
              },
              getHandleBounds: function(segments, closed, path, matrix, options) {
                var style = path.getStyle(), stroke = options.stroke && style.hasStroke(), strokePadding, joinPadding;
                if (stroke) {
                  var strokeMatrix = path._getStrokeMatrix(matrix, options), strokeRadius = style.getStrokeWidth() / 2, joinRadius = strokeRadius;
                  if (style.getStrokeJoin() === "miter")
                    joinRadius = strokeRadius * style.getMiterLimit();
                  if (style.getStrokeCap() === "square")
                    joinRadius = Math.max(joinRadius, strokeRadius * Math.SQRT2);
                  strokePadding = Path._getStrokePadding(strokeRadius, strokeMatrix);
                  joinPadding = Path._getStrokePadding(joinRadius, strokeMatrix);
                }
                var coords = new Array(6), x1 = Infinity, x2 = -x1, y1 = x1, y2 = x2;
                for (var i2 = 0, l = segments.length; i2 < l; i2++) {
                  var segment = segments[i2];
                  segment._transformCoordinates(matrix, coords);
                  for (var j = 0; j < 6; j += 2) {
                    var padding = !j ? joinPadding : strokePadding, paddingX = padding ? padding[0] : 0, paddingY = padding ? padding[1] : 0, x = coords[j], y = coords[j + 1], xn = x - paddingX, xx = x + paddingX, yn = y - paddingY, yx = y + paddingY;
                    if (xn < x1)
                      x1 = xn;
                    if (xx > x2)
                      x2 = xx;
                    if (yn < y1)
                      y1 = yn;
                    if (yx > y2)
                      y2 = yx;
                  }
                }
                return new Rectangle(x1, y1, x2 - x1, y2 - y1);
              }
            }
          }
        );
        Path.inject({ statics: new function() {
          var kappa = 0.5522847498307936, ellipseSegments = [
            new Segment([-1, 0], [0, kappa], [0, -kappa]),
            new Segment([0, -1], [-kappa, 0], [kappa, 0]),
            new Segment([1, 0], [0, -kappa], [0, kappa]),
            new Segment([0, 1], [kappa, 0], [-kappa, 0])
          ];
          function createPath(segments, closed, args) {
            var props = Base.getNamed(args), path = new Path(props && (props.insert == true ? Item.INSERT : props.insert == false ? Item.NO_INSERT : null));
            path._add(segments);
            path._closed = closed;
            return path.set(props, Item.INSERT);
          }
          function createEllipse(center, radius, args) {
            var segments = new Array(4);
            for (var i2 = 0; i2 < 4; i2++) {
              var segment = ellipseSegments[i2];
              segments[i2] = new Segment(
                segment._point.multiply(radius).add(center),
                segment._handleIn.multiply(radius),
                segment._handleOut.multiply(radius)
              );
            }
            return createPath(segments, true, args);
          }
          return {
            Line: function() {
              var args = arguments;
              return createPath([
                new Segment(Point.readNamed(args, "from")),
                new Segment(Point.readNamed(args, "to"))
              ], false, args);
            },
            Circle: function() {
              var args = arguments, center = Point.readNamed(args, "center"), radius = Base.readNamed(args, "radius");
              return createEllipse(center, new Size(radius), args);
            },
            Rectangle: function() {
              var args = arguments, rect = Rectangle.readNamed(args, "rectangle"), radius = Size.readNamed(
                args,
                "radius",
                0,
                { readNull: true }
              ), bl = rect.getBottomLeft(true), tl2 = rect.getTopLeft(true), tr = rect.getTopRight(true), br = rect.getBottomRight(true), segments;
              if (!radius || radius.isZero()) {
                segments = [
                  new Segment(bl),
                  new Segment(tl2),
                  new Segment(tr),
                  new Segment(br)
                ];
              } else {
                radius = Size.min(radius, rect.getSize(true).divide(2));
                var rx = radius.width, ry = radius.height, hx = rx * kappa, hy = ry * kappa;
                segments = [
                  new Segment(bl.add(rx, 0), null, [-hx, 0]),
                  new Segment(bl.subtract(0, ry), [0, hy]),
                  new Segment(tl2.add(0, ry), null, [0, -hy]),
                  new Segment(tl2.add(rx, 0), [-hx, 0], null),
                  new Segment(tr.subtract(rx, 0), null, [hx, 0]),
                  new Segment(tr.add(0, ry), [0, -hy], null),
                  new Segment(br.subtract(0, ry), null, [0, hy]),
                  new Segment(br.subtract(rx, 0), [hx, 0])
                ];
              }
              return createPath(segments, true, args);
            },
            RoundRectangle: "#Rectangle",
            Ellipse: function() {
              var args = arguments, ellipse = Shape._readEllipse(args);
              return createEllipse(ellipse.center, ellipse.radius, args);
            },
            Oval: "#Ellipse",
            Arc: function() {
              var args = arguments, from = Point.readNamed(args, "from"), through = Point.readNamed(args, "through"), to = Point.readNamed(args, "to"), props = Base.getNamed(args), path = new Path(props && props.insert == false && Item.NO_INSERT);
              path.moveTo(from);
              path.arcTo(through, to);
              return path.set(props);
            },
            RegularPolygon: function() {
              var args = arguments, center = Point.readNamed(args, "center"), sides = Base.readNamed(args, "sides"), radius = Base.readNamed(args, "radius"), step = 360 / sides, three = sides % 3 === 0, vector = new Point(0, three ? -radius : radius), offset = three ? -1 : 0.5, segments = new Array(sides);
              for (var i2 = 0; i2 < sides; i2++)
                segments[i2] = new Segment(center.add(
                  vector.rotate((i2 + offset) * step)
                ));
              return createPath(segments, true, args);
            },
            Star: function() {
              var args = arguments, center = Point.readNamed(args, "center"), points = Base.readNamed(args, "points") * 2, radius1 = Base.readNamed(args, "radius1"), radius2 = Base.readNamed(args, "radius2"), step = 360 / points, vector = new Point(0, -1), segments = new Array(points);
              for (var i2 = 0; i2 < points; i2++)
                segments[i2] = new Segment(center.add(vector.rotate(step * i2).multiply(i2 % 2 ? radius2 : radius1)));
              return createPath(segments, true, args);
            }
          };
        }() });
        var CompoundPath = PathItem.extend(
          {
            _class: "CompoundPath",
            _serializeFields: {
              children: []
            },
            beans: true,
            initialize: function CompoundPath2(arg) {
              this._children = [];
              this._namedChildren = {};
              if (!this._initialize(arg)) {
                if (typeof arg === "string") {
                  this.setPathData(arg);
                } else {
                  this.addChildren(Array.isArray(arg) ? arg : arguments);
                }
              }
            },
            insertChildren: function insertChildren(index, items) {
              var list = items, first = list[0];
              if (first && typeof first[0] === "number")
                list = [list];
              for (var i2 = items.length - 1; i2 >= 0; i2--) {
                var item = list[i2];
                if (list === items && !(item instanceof Path))
                  list = Base.slice(list);
                if (Array.isArray(item)) {
                  list[i2] = new Path({ segments: item, insert: false });
                } else if (item instanceof CompoundPath) {
                  list.splice.apply(list, [i2, 1].concat(item.removeChildren()));
                  item.remove();
                }
              }
              return insertChildren.base.call(this, index, list);
            },
            reduce: function reduce(options) {
              var children = this._children;
              for (var i2 = children.length - 1; i2 >= 0; i2--) {
                var path = children[i2].reduce(options);
                if (path.isEmpty())
                  path.remove();
              }
              if (!children.length) {
                var path = new Path(Item.NO_INSERT);
                path.copyAttributes(this);
                path.insertAbove(this);
                this.remove();
                return path;
              }
              return reduce.base.call(this);
            },
            isClosed: function() {
              var children = this._children;
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                if (!children[i2]._closed)
                  return false;
              }
              return true;
            },
            setClosed: function(closed) {
              var children = this._children;
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                children[i2].setClosed(closed);
              }
            },
            getFirstSegment: function() {
              var first = this.getFirstChild();
              return first && first.getFirstSegment();
            },
            getLastSegment: function() {
              var last = this.getLastChild();
              return last && last.getLastSegment();
            },
            getCurves: function() {
              var children = this._children, curves = [];
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                Base.push(curves, children[i2].getCurves());
              }
              return curves;
            },
            getFirstCurve: function() {
              var first = this.getFirstChild();
              return first && first.getFirstCurve();
            },
            getLastCurve: function() {
              var last = this.getLastChild();
              return last && last.getLastCurve();
            },
            getArea: function() {
              var children = this._children, area = 0;
              for (var i2 = 0, l = children.length; i2 < l; i2++)
                area += children[i2].getArea();
              return area;
            },
            getLength: function() {
              var children = this._children, length = 0;
              for (var i2 = 0, l = children.length; i2 < l; i2++)
                length += children[i2].getLength();
              return length;
            },
            getPathData: function(_matrix, _precision) {
              var children = this._children, paths = [];
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                var child = children[i2], mx = child._matrix;
                paths.push(child.getPathData(_matrix && !mx.isIdentity() ? _matrix.appended(mx) : _matrix, _precision));
              }
              return paths.join("");
            },
            _hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
              return _hitTestChildren.base.call(
                this,
                point,
                options.class === Path || options.type === "path" ? options : Base.set({}, options, { fill: false }),
                viewMatrix
              );
            },
            _draw: function(ctx, param, viewMatrix, strokeMatrix) {
              var children = this._children;
              if (!children.length)
                return;
              param = param.extend({ dontStart: true, dontFinish: true });
              ctx.beginPath();
              for (var i2 = 0, l = children.length; i2 < l; i2++)
                children[i2].draw(ctx, param, strokeMatrix);
              if (!param.clip) {
                this._setStyles(ctx, param, viewMatrix);
                var style = this._style;
                if (style.hasFill()) {
                  ctx.fill(style.getFillRule());
                  ctx.shadowColor = "rgba(0,0,0,0)";
                }
                if (style.hasStroke())
                  ctx.stroke();
              }
            },
            _drawSelected: function(ctx, matrix, selectionItems) {
              var children = this._children;
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                var child = children[i2], mx = child._matrix;
                if (!selectionItems[child._id]) {
                  child._drawSelected(ctx, mx.isIdentity() ? matrix : matrix.appended(mx));
                }
              }
            }
          },
          new function() {
            function getCurrentPath(that, check) {
              var children = that._children;
              if (check && !children.length)
                throw new Error("Use a moveTo() command first");
              return children[children.length - 1];
            }
            return Base.each(
              [
                "lineTo",
                "cubicCurveTo",
                "quadraticCurveTo",
                "curveTo",
                "arcTo",
                "lineBy",
                "cubicCurveBy",
                "quadraticCurveBy",
                "curveBy",
                "arcBy"
              ],
              function(key) {
                this[key] = function() {
                  var path = getCurrentPath(this, true);
                  path[key].apply(path, arguments);
                };
              },
              {
                moveTo: function() {
                  var current = getCurrentPath(this), path = current && current.isEmpty() ? current : new Path(Item.NO_INSERT);
                  if (path !== current)
                    this.addChild(path);
                  path.moveTo.apply(path, arguments);
                },
                moveBy: function() {
                  var current = getCurrentPath(this, true), last = current && current.getLastSegment(), point = Point.read(arguments);
                  this.moveTo(last ? point.add(last._point) : point);
                },
                closePath: function(tolerance) {
                  getCurrentPath(this, true).closePath(tolerance);
                }
              }
            );
          }(),
          Base.each(["reverse", "flatten", "simplify", "smooth"], function(key) {
            this[key] = function(param) {
              var children = this._children, res;
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                res = children[i2][key](param) || res;
              }
              return res;
            };
          }, {})
        );
        PathItem.inject(new function() {
          var min = Math.min, max = Math.max, abs = Math.abs, operators = {
            unite: { "1": true, "2": true },
            intersect: { "2": true },
            subtract: { "1": true },
            exclude: { "1": true, "-1": true }
          };
          function getPaths(path) {
            return path._children || [path];
          }
          function preparePath(path, resolve) {
            var res = path.clone(false).reduce({ simplify: true }).transform(null, true, true);
            if (resolve) {
              var paths = getPaths(res);
              for (var i2 = 0, l = paths.length; i2 < l; i2++) {
                var path = paths[i2];
                if (!path._closed && !path.isEmpty()) {
                  path.closePath(1e-12);
                  path.getFirstSegment().setHandleIn(0, 0);
                  path.getLastSegment().setHandleOut(0, 0);
                }
              }
              res = res.resolveCrossings().reorient(res.getFillRule() === "nonzero", true);
            }
            return res;
          }
          function createResult(paths, simplify, path1, path2, options) {
            var result = new CompoundPath(Item.NO_INSERT);
            result.addChildren(paths, true);
            result = result.reduce({ simplify });
            if (!(options && options.insert == false)) {
              result.insertAbove(path2 && path1.isSibling(path2) && path1.getIndex() < path2.getIndex() ? path2 : path1);
            }
            result.copyAttributes(path1, true);
            return result;
          }
          function filterIntersection(inter) {
            return inter.hasOverlap() || inter.isCrossing();
          }
          function traceBoolean(path1, path2, operation, options) {
            if (options && (options.trace == false || options.stroke) && /^(subtract|intersect)$/.test(operation))
              return splitBoolean(path1, path2, operation);
            var _path1 = preparePath(path1, true), _path2 = path2 && path1 !== path2 && preparePath(path2, true), operator = operators[operation];
            operator[operation] = true;
            if (_path2 && (operator.subtract || operator.exclude) ^ (_path2.isClockwise() ^ _path1.isClockwise()))
              _path2.reverse();
            var crossings = divideLocations(CurveLocation.expand(
              _path1.getIntersections(_path2, filterIntersection)
            )), paths1 = getPaths(_path1), paths2 = _path2 && getPaths(_path2), segments = [], curves = [], paths;
            function collectPaths(paths3) {
              for (var i3 = 0, l2 = paths3.length; i3 < l2; i3++) {
                var path = paths3[i3];
                Base.push(segments, path._segments);
                Base.push(curves, path.getCurves());
                path._overlapsOnly = true;
              }
            }
            function getCurves(indices) {
              var list = [];
              for (var i3 = 0, l2 = indices && indices.length; i3 < l2; i3++) {
                list.push(curves[indices[i3]]);
              }
              return list;
            }
            if (crossings.length) {
              collectPaths(paths1);
              if (paths2)
                collectPaths(paths2);
              var curvesValues = new Array(curves.length);
              for (var i2 = 0, l = curves.length; i2 < l; i2++) {
                curvesValues[i2] = curves[i2].getValues();
              }
              var curveCollisions = CollisionDetection.findCurveBoundsCollisions(
                curvesValues,
                curvesValues,
                0,
                true
              );
              var curveCollisionsMap = {};
              for (var i2 = 0; i2 < curves.length; i2++) {
                var curve = curves[i2], id = curve._path._id, map = curveCollisionsMap[id] = curveCollisionsMap[id] || {};
                map[curve.getIndex()] = {
                  hor: getCurves(curveCollisions[i2].hor),
                  ver: getCurves(curveCollisions[i2].ver)
                };
              }
              for (var i2 = 0, l = crossings.length; i2 < l; i2++) {
                propagateWinding(
                  crossings[i2]._segment,
                  _path1,
                  _path2,
                  curveCollisionsMap,
                  operator
                );
              }
              for (var i2 = 0, l = segments.length; i2 < l; i2++) {
                var segment = segments[i2], inter = segment._intersection;
                if (!segment._winding) {
                  propagateWinding(
                    segment,
                    _path1,
                    _path2,
                    curveCollisionsMap,
                    operator
                  );
                }
                if (!(inter && inter._overlap))
                  segment._path._overlapsOnly = false;
              }
              paths = tracePaths(segments, operator);
            } else {
              paths = reorientPaths(
                paths2 ? paths1.concat(paths2) : paths1.slice(),
                function(w) {
                  return !!operator[w];
                }
              );
            }
            return createResult(paths, true, path1, path2, options);
          }
          function splitBoolean(path1, path2, operation) {
            var _path1 = preparePath(path1), _path2 = preparePath(path2), crossings = _path1.getIntersections(_path2, filterIntersection), subtract = operation === "subtract", divide = operation === "divide", added = {}, paths = [];
            function addPath(path3) {
              if (!added[path3._id] && (divide || _path2.contains(path3.getPointAt(path3.getLength() / 2)) ^ subtract)) {
                paths.unshift(path3);
                return added[path3._id] = true;
              }
            }
            for (var i2 = crossings.length - 1; i2 >= 0; i2--) {
              var path = crossings[i2].split();
              if (path) {
                if (addPath(path))
                  path.getFirstSegment().setHandleIn(0, 0);
                _path1.getLastSegment().setHandleOut(0, 0);
              }
            }
            addPath(_path1);
            return createResult(paths, false, path1, path2);
          }
          function linkIntersections(from, to) {
            var prev = from;
            while (prev) {
              if (prev === to)
                return;
              prev = prev._previous;
            }
            while (from._next && from._next !== to)
              from = from._next;
            if (!from._next) {
              while (to._previous)
                to = to._previous;
              from._next = to;
              to._previous = from;
            }
          }
          function clearCurveHandles(curves) {
            for (var i2 = curves.length - 1; i2 >= 0; i2--)
              curves[i2].clearHandles();
          }
          function reorientPaths(paths, isInside, clockwise) {
            var length = paths && paths.length;
            if (length) {
              var lookup = Base.each(paths, function(path, i3) {
                this[path._id] = {
                  container: null,
                  winding: path.isClockwise() ? 1 : -1,
                  index: i3
                };
              }, {}), sorted = paths.slice().sort(function(a, b) {
                return abs(b.getArea()) - abs(a.getArea());
              }), first = sorted[0];
              var collisions = CollisionDetection.findItemBoundsCollisions(
                sorted,
                null,
                Numerical.GEOMETRIC_EPSILON
              );
              if (clockwise == null)
                clockwise = first.isClockwise();
              for (var i2 = 0; i2 < length; i2++) {
                var path1 = sorted[i2], entry1 = lookup[path1._id], containerWinding = 0, indices = collisions[i2];
                if (indices) {
                  var point = null;
                  for (var j = indices.length - 1; j >= 0; j--) {
                    if (indices[j] < i2) {
                      point = point || path1.getInteriorPoint();
                      var path2 = sorted[indices[j]];
                      if (path2.contains(point)) {
                        var entry2 = lookup[path2._id];
                        containerWinding = entry2.winding;
                        entry1.winding += containerWinding;
                        entry1.container = entry2.exclude ? entry2.container : path2;
                        break;
                      }
                    }
                  }
                }
                if (isInside(entry1.winding) === isInside(containerWinding)) {
                  entry1.exclude = true;
                  paths[entry1.index] = null;
                } else {
                  var container = entry1.container;
                  path1.setClockwise(
                    container ? !container.isClockwise() : clockwise
                  );
                }
              }
            }
            return paths;
          }
          function divideLocations(locations, include, clearLater) {
            var results = include && [], tMin = 1e-8, tMax = 1 - tMin, clearHandles = false, clearCurves = clearLater || [], clearLookup = clearLater && {}, renormalizeLocs, prevCurve, prevTime;
            function getId(curve2) {
              return curve2._path._id + "." + curve2._segment1._index;
            }
            for (var i2 = (clearLater && clearLater.length) - 1; i2 >= 0; i2--) {
              var curve = clearLater[i2];
              if (curve._path)
                clearLookup[getId(curve)] = true;
            }
            for (var i2 = locations.length - 1; i2 >= 0; i2--) {
              var loc = locations[i2], time = loc._time, origTime = time, exclude = include && !include(loc), curve = loc._curve, segment;
              if (curve) {
                if (curve !== prevCurve) {
                  clearHandles = !curve.hasHandles() || clearLookup && clearLookup[getId(curve)];
                  renormalizeLocs = [];
                  prevTime = null;
                  prevCurve = curve;
                } else if (prevTime >= tMin) {
                  time /= prevTime;
                }
              }
              if (exclude) {
                if (renormalizeLocs)
                  renormalizeLocs.push(loc);
                continue;
              } else if (include) {
                results.unshift(loc);
              }
              prevTime = origTime;
              if (time < tMin) {
                segment = curve._segment1;
              } else if (time > tMax) {
                segment = curve._segment2;
              } else {
                var newCurve = curve.divideAtTime(time, true);
                if (clearHandles)
                  clearCurves.push(curve, newCurve);
                segment = newCurve._segment1;
                for (var j = renormalizeLocs.length - 1; j >= 0; j--) {
                  var l = renormalizeLocs[j];
                  l._time = (l._time - time) / (1 - time);
                }
              }
              loc._setSegment(segment);
              var inter = segment._intersection, dest = loc._intersection;
              if (inter) {
                linkIntersections(inter, dest);
                var other = inter;
                while (other) {
                  linkIntersections(other._intersection, inter);
                  other = other._next;
                }
              } else {
                segment._intersection = dest;
              }
            }
            if (!clearLater)
              clearCurveHandles(clearCurves);
            return results || locations;
          }
          function getWinding(point, curves, dir, closed, dontFlip) {
            var curvesList = Array.isArray(curves) ? curves : curves[dir ? "hor" : "ver"];
            var ia = dir ? 1 : 0, io = ia ^ 1, pv = [point.x, point.y], pa = pv[ia], po = pv[io], windingEpsilon = 1e-9, qualityEpsilon = 1e-6, paL = pa - windingEpsilon, paR = pa + windingEpsilon, windingL = 0, windingR = 0, pathWindingL = 0, pathWindingR = 0, onPath = false, onAnyPath = false, quality = 1, roots = [], vPrev, vClose;
            function addWinding(v3) {
              var o0 = v3[io + 0], o3 = v3[io + 6];
              if (po < min(o0, o3) || po > max(o0, o3)) {
                return;
              }
              var a0 = v3[ia + 0], a1 = v3[ia + 2], a2 = v3[ia + 4], a3 = v3[ia + 6];
              if (o0 === o3) {
                if (a0 < paR && a3 > paL || a3 < paR && a0 > paL) {
                  onPath = true;
                }
                return;
              }
              var t2 = po === o0 ? 0 : po === o3 ? 1 : paL > max(a0, a1, a2, a3) || paR < min(a0, a1, a2, a3) ? 1 : Curve.solveCubic(v3, io, po, roots, 0, 1) > 0 ? roots[0] : 1, a = t2 === 0 ? a0 : t2 === 1 ? a3 : Curve.getPoint(v3, t2)[dir ? "y" : "x"], winding = o0 > o3 ? 1 : -1, windingPrev = vPrev[io] > vPrev[io + 6] ? 1 : -1, a3Prev = vPrev[ia + 6];
              if (po !== o0) {
                if (a < paL) {
                  pathWindingL += winding;
                } else if (a > paR) {
                  pathWindingR += winding;
                } else {
                  onPath = true;
                }
                if (a > pa - qualityEpsilon && a < pa + qualityEpsilon)
                  quality /= 2;
              } else {
                if (winding !== windingPrev) {
                  if (a0 < paL) {
                    pathWindingL += winding;
                  } else if (a0 > paR) {
                    pathWindingR += winding;
                  }
                } else if (a0 != a3Prev) {
                  if (a3Prev < paR && a > paR) {
                    pathWindingR += winding;
                    onPath = true;
                  } else if (a3Prev > paL && a < paL) {
                    pathWindingL += winding;
                    onPath = true;
                  }
                }
                quality /= 4;
              }
              vPrev = v3;
              return !dontFlip && a > paL && a < paR && Curve.getTangent(v3, t2)[dir ? "x" : "y"] === 0 && getWinding(point, curves, !dir, closed, true);
            }
            function handleCurve(v3) {
              var o0 = v3[io + 0], o1 = v3[io + 2], o2 = v3[io + 4], o3 = v3[io + 6];
              if (po <= max(o0, o1, o2, o3) && po >= min(o0, o1, o2, o3)) {
                var a0 = v3[ia + 0], a1 = v3[ia + 2], a2 = v3[ia + 4], a3 = v3[ia + 6], monoCurves = paL > max(a0, a1, a2, a3) || paR < min(a0, a1, a2, a3) ? [v3] : Curve.getMonoCurves(v3, dir), res2;
                for (var i3 = 0, l2 = monoCurves.length; i3 < l2; i3++) {
                  if (res2 = addWinding(monoCurves[i3]))
                    return res2;
                }
              }
            }
            for (var i2 = 0, l = curvesList.length; i2 < l; i2++) {
              var curve = curvesList[i2], path = curve._path, v = curve.getValues(), res;
              if (!i2 || curvesList[i2 - 1]._path !== path) {
                vPrev = null;
                if (!path._closed) {
                  vClose = Curve.getValues(
                    path.getLastCurve().getSegment2(),
                    curve.getSegment1(),
                    null,
                    !closed
                  );
                  if (vClose[io] !== vClose[io + 6]) {
                    vPrev = vClose;
                  }
                }
                if (!vPrev) {
                  vPrev = v;
                  var prev = path.getLastCurve();
                  while (prev && prev !== curve) {
                    var v2 = prev.getValues();
                    if (v2[io] !== v2[io + 6]) {
                      vPrev = v2;
                      break;
                    }
                    prev = prev.getPrevious();
                  }
                }
              }
              if (res = handleCurve(v))
                return res;
              if (i2 + 1 === l || curvesList[i2 + 1]._path !== path) {
                if (vClose && (res = handleCurve(vClose)))
                  return res;
                if (onPath && !pathWindingL && !pathWindingR) {
                  pathWindingL = pathWindingR = path.isClockwise(closed) ^ dir ? 1 : -1;
                }
                windingL += pathWindingL;
                windingR += pathWindingR;
                pathWindingL = pathWindingR = 0;
                if (onPath) {
                  onAnyPath = true;
                  onPath = false;
                }
                vClose = null;
              }
            }
            windingL = abs(windingL);
            windingR = abs(windingR);
            return {
              winding: max(windingL, windingR),
              windingL,
              windingR,
              quality,
              onPath: onAnyPath
            };
          }
          function propagateWinding(segment, path1, path2, curveCollisionsMap, operator) {
            var chain = [], start = segment, totalLength = 0, winding;
            do {
              var curve = segment.getCurve();
              if (curve) {
                var length = curve.getLength();
                chain.push({ segment, curve, length });
                totalLength += length;
              }
              segment = segment.getNext();
            } while (segment && !segment._intersection && segment !== start);
            var offsets = [0.5, 0.25, 0.75], winding = { winding: 0, quality: -1 }, tMin = 1e-3, tMax = 1 - tMin;
            for (var i2 = 0; i2 < offsets.length && winding.quality < 0.5; i2++) {
              var length = totalLength * offsets[i2];
              for (var j = 0, l = chain.length; j < l; j++) {
                var entry = chain[j], curveLength = entry.length;
                if (length <= curveLength) {
                  var curve = entry.curve, path = curve._path, parent = path._parent, operand = parent instanceof CompoundPath ? parent : path, t2 = Numerical.clamp(curve.getTimeAt(length), tMin, tMax), pt = curve.getPointAtTime(t2), dir = abs(curve.getTangentAtTime(t2).y) < Math.SQRT1_2;
                  var wind = null;
                  if (operator.subtract && path2) {
                    var otherPath = operand === path1 ? path2 : path1, pathWinding = otherPath._getWinding(pt, dir, true);
                    if (operand === path1 && pathWinding.winding || operand === path2 && !pathWinding.winding) {
                      if (pathWinding.quality < 1) {
                        continue;
                      } else {
                        wind = { winding: 0, quality: 1 };
                      }
                    }
                  }
                  wind = wind || getWinding(
                    pt,
                    curveCollisionsMap[path._id][curve.getIndex()],
                    dir,
                    true
                  );
                  if (wind.quality > winding.quality)
                    winding = wind;
                  break;
                }
                length -= curveLength;
              }
            }
            for (var j = chain.length - 1; j >= 0; j--) {
              chain[j].segment._winding = winding;
            }
          }
          function tracePaths(segments, operator) {
            var paths = [], starts;
            function isValid(seg2) {
              var winding;
              return !!(seg2 && !seg2._visited && (!operator || operator[(winding = seg2._winding || {}).winding] && !(operator.unite && winding.winding === 2 && winding.windingL && winding.windingR)));
            }
            function isStart(seg2) {
              if (seg2) {
                for (var i3 = 0, l2 = starts.length; i3 < l2; i3++) {
                  if (seg2 === starts[i3])
                    return true;
                }
              }
              return false;
            }
            function visitPath(path3) {
              var segments2 = path3._segments;
              for (var i3 = 0, l2 = segments2.length; i3 < l2; i3++) {
                segments2[i3]._visited = true;
              }
            }
            function getCrossingSegments(segment, collectStarts) {
              var inter = segment._intersection, start = inter, crossings2 = [];
              if (collectStarts)
                starts = [segment];
              function collect(inter2, end) {
                while (inter2 && inter2 !== end) {
                  var other2 = inter2._segment, path3 = other2 && other2._path;
                  if (path3) {
                    var next2 = other2.getNext() || path3.getFirstSegment(), nextInter = next2._intersection;
                    if (other2 !== segment && (isStart(other2) || isStart(next2) || next2 && (isValid(other2) && (isValid(next2) || nextInter && isValid(nextInter._segment))))) {
                      crossings2.push(other2);
                    }
                    if (collectStarts)
                      starts.push(other2);
                  }
                  inter2 = inter2._next;
                }
              }
              if (inter) {
                collect(inter);
                while (inter && inter._previous)
                  inter = inter._previous;
                collect(inter, start);
              }
              return crossings2;
            }
            segments.sort(function(seg1, seg2) {
              var inter1 = seg1._intersection, inter2 = seg2._intersection, over1 = !!(inter1 && inter1._overlap), over2 = !!(inter2 && inter2._overlap), path12 = seg1._path, path22 = seg2._path;
              return over1 ^ over2 ? over1 ? 1 : -1 : !inter1 ^ !inter2 ? inter1 ? 1 : -1 : path12 !== path22 ? path12._id - path22._id : seg1._index - seg2._index;
            });
            for (var i2 = 0, l = segments.length; i2 < l; i2++) {
              var seg = segments[i2], valid = isValid(seg), path = null, finished = false, closed = true, branches = [], branch, visited, handleIn;
              if (valid && seg._path._overlapsOnly) {
                var path1 = seg._path, path2 = seg._intersection._segment._path;
                if (path1.compare(path2)) {
                  if (path1.getArea())
                    paths.push(path1.clone(false));
                  visitPath(path1);
                  visitPath(path2);
                  valid = false;
                }
              }
              while (valid) {
                var first = !path, crossings = getCrossingSegments(seg, first), other = crossings.shift(), finished = !first && (isStart(seg) || isStart(other)), cross = !finished && other;
                if (first) {
                  path = new Path(Item.NO_INSERT);
                  branch = null;
                }
                if (finished) {
                  if (seg.isFirst() || seg.isLast())
                    closed = seg._path._closed;
                  seg._visited = true;
                  break;
                }
                if (cross && branch) {
                  branches.push(branch);
                  branch = null;
                }
                if (!branch) {
                  if (cross)
                    crossings.push(seg);
                  branch = {
                    start: path._segments.length,
                    crossings,
                    visited: visited = [],
                    handleIn
                  };
                }
                if (cross)
                  seg = other;
                if (!isValid(seg)) {
                  path.removeSegments(branch.start);
                  for (var j = 0, k = visited.length; j < k; j++) {
                    visited[j]._visited = false;
                  }
                  visited.length = 0;
                  do {
                    seg = branch && branch.crossings.shift();
                    if (!seg || !seg._path) {
                      seg = null;
                      branch = branches.pop();
                      if (branch) {
                        visited = branch.visited;
                        handleIn = branch.handleIn;
                      }
                    }
                  } while (branch && !isValid(seg));
                  if (!seg)
                    break;
                }
                var next = seg.getNext();
                path.add(new Segment(
                  seg._point,
                  handleIn,
                  next && seg._handleOut
                ));
                seg._visited = true;
                visited.push(seg);
                seg = next || seg._path.getFirstSegment();
                handleIn = next && next._handleIn;
              }
              if (finished) {
                if (closed) {
                  path.getFirstSegment().setHandleIn(handleIn);
                  path.setClosed(closed);
                }
                if (path.getArea() !== 0) {
                  paths.push(path);
                }
              }
            }
            return paths;
          }
          return {
            _getWinding: function(point, dir, closed) {
              return getWinding(point, this.getCurves(), dir, closed);
            },
            unite: function(path, options) {
              return traceBoolean(this, path, "unite", options);
            },
            intersect: function(path, options) {
              return traceBoolean(this, path, "intersect", options);
            },
            subtract: function(path, options) {
              return traceBoolean(this, path, "subtract", options);
            },
            exclude: function(path, options) {
              return traceBoolean(this, path, "exclude", options);
            },
            divide: function(path, options) {
              return options && (options.trace == false || options.stroke) ? splitBoolean(this, path, "divide") : createResult([
                this.subtract(path, options),
                this.intersect(path, options)
              ], true, this, path, options);
            },
            resolveCrossings: function() {
              var children = this._children, paths = children || [this];
              function hasOverlap(seg2, path2) {
                var inter = seg2 && seg2._intersection;
                return inter && inter._overlap && inter._path === path2;
              }
              var hasOverlaps = false, hasCrossings = false, intersections = this.getIntersections(null, function(inter) {
                return inter.hasOverlap() && (hasOverlaps = true) || inter.isCrossing() && (hasCrossings = true);
              }), clearCurves = hasOverlaps && hasCrossings && [];
              intersections = CurveLocation.expand(intersections);
              if (hasOverlaps) {
                var overlaps = divideLocations(intersections, function(inter) {
                  return inter.hasOverlap();
                }, clearCurves);
                for (var i2 = overlaps.length - 1; i2 >= 0; i2--) {
                  var overlap = overlaps[i2], path = overlap._path, seg = overlap._segment, prev = seg.getPrevious(), next = seg.getNext();
                  if (hasOverlap(prev, path) && hasOverlap(next, path)) {
                    seg.remove();
                    prev._handleOut._set(0, 0);
                    next._handleIn._set(0, 0);
                    if (prev !== seg && !prev.getCurve().hasLength()) {
                      next._handleIn.set(prev._handleIn);
                      prev.remove();
                    }
                  }
                }
              }
              if (hasCrossings) {
                divideLocations(intersections, hasOverlaps && function(inter) {
                  var curve1 = inter.getCurve(), seg1 = inter.getSegment(), other = inter._intersection, curve2 = other._curve, seg2 = other._segment;
                  if (curve1 && curve2 && curve1._path && curve2._path)
                    return true;
                  if (seg1)
                    seg1._intersection = null;
                  if (seg2)
                    seg2._intersection = null;
                }, clearCurves);
                if (clearCurves)
                  clearCurveHandles(clearCurves);
                paths = tracePaths(Base.each(paths, function(path2) {
                  Base.push(this, path2._segments);
                }, []));
              }
              var length = paths.length, item;
              if (length > 1 && children) {
                if (paths !== children)
                  this.setChildren(paths);
                item = this;
              } else if (length === 1 && !children) {
                if (paths[0] !== this)
                  this.setSegments(paths[0].removeSegments());
                item = this;
              }
              if (!item) {
                item = new CompoundPath(Item.NO_INSERT);
                item.addChildren(paths);
                item = item.reduce();
                item.copyAttributes(this);
                this.replaceWith(item);
              }
              return item;
            },
            reorient: function(nonZero, clockwise) {
              var children = this._children;
              if (children && children.length) {
                this.setChildren(reorientPaths(
                  this.removeChildren(),
                  function(w) {
                    return !!(nonZero ? w : w & 1);
                  },
                  clockwise
                ));
              } else if (clockwise !== undefined2) {
                this.setClockwise(clockwise);
              }
              return this;
            },
            getInteriorPoint: function() {
              var bounds = this.getBounds(), point = bounds.getCenter(true);
              if (!this.contains(point)) {
                var curves = this.getCurves(), y = point.y, intercepts = [], roots = [];
                for (var i2 = 0, l = curves.length; i2 < l; i2++) {
                  var v = curves[i2].getValues(), o0 = v[1], o1 = v[3], o2 = v[5], o3 = v[7];
                  if (y >= min(o0, o1, o2, o3) && y <= max(o0, o1, o2, o3)) {
                    var monoCurves = Curve.getMonoCurves(v);
                    for (var j = 0, m = monoCurves.length; j < m; j++) {
                      var mv = monoCurves[j], mo0 = mv[1], mo3 = mv[7];
                      if (mo0 !== mo3 && (y >= mo0 && y <= mo3 || y >= mo3 && y <= mo0)) {
                        var x = y === mo0 ? mv[0] : y === mo3 ? mv[6] : Curve.solveCubic(mv, 1, y, roots, 0, 1) === 1 ? Curve.getPoint(mv, roots[0]).x : (mv[0] + mv[6]) / 2;
                        intercepts.push(x);
                      }
                    }
                  }
                }
                if (intercepts.length > 1) {
                  intercepts.sort(function(a, b) {
                    return a - b;
                  });
                  point.x = (intercepts[0] + intercepts[1]) / 2;
                }
              }
              return point;
            }
          };
        }());
        var PathFlattener = Base.extend(
          {
            _class: "PathFlattener",
            initialize: function(path, flatness, maxRecursion, ignoreStraight, matrix) {
              var curves = [], parts = [], length = 0, minSpan = 1 / (maxRecursion || 32), segments = path._segments, segment1 = segments[0], segment2;
              function addCurve(segment12, segment22) {
                var curve = Curve.getValues(segment12, segment22, matrix);
                curves.push(curve);
                computeParts(curve, segment12._index, 0, 1);
              }
              function computeParts(curve, index, t1, t2) {
                if (t2 - t1 > minSpan && !(ignoreStraight && Curve.isStraight(curve)) && !Curve.isFlatEnough(curve, flatness || 0.25)) {
                  var halves = Curve.subdivide(curve, 0.5), tMid = (t1 + t2) / 2;
                  computeParts(halves[0], index, t1, tMid);
                  computeParts(halves[1], index, tMid, t2);
                } else {
                  var dx = curve[6] - curve[0], dy = curve[7] - curve[1], dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist > 0) {
                    length += dist;
                    parts.push({
                      offset: length,
                      curve,
                      index,
                      time: t2
                    });
                  }
                }
              }
              for (var i2 = 1, l = segments.length; i2 < l; i2++) {
                segment2 = segments[i2];
                addCurve(segment1, segment2);
                segment1 = segment2;
              }
              if (path._closed)
                addCurve(segment2 || segment1, segments[0]);
              this.curves = curves;
              this.parts = parts;
              this.length = length;
              this.index = 0;
            },
            _get: function(offset) {
              var parts = this.parts, length = parts.length, start, i2, j = this.index;
              for (; ; ) {
                i2 = j;
                if (!j || parts[--j].offset < offset)
                  break;
              }
              for (; i2 < length; i2++) {
                var part = parts[i2];
                if (part.offset >= offset) {
                  this.index = i2;
                  var prev = parts[i2 - 1], prevTime = prev && prev.index === part.index ? prev.time : 0, prevOffset = prev ? prev.offset : 0;
                  return {
                    index: part.index,
                    time: prevTime + (part.time - prevTime) * (offset - prevOffset) / (part.offset - prevOffset)
                  };
                }
              }
              return {
                index: parts[length - 1].index,
                time: 1
              };
            },
            drawPart: function(ctx, from, to) {
              var start = this._get(from), end = this._get(to);
              for (var i2 = start.index, l = end.index; i2 <= l; i2++) {
                var curve = Curve.getPart(
                  this.curves[i2],
                  i2 === start.index ? start.time : 0,
                  i2 === end.index ? end.time : 1
                );
                if (i2 === start.index)
                  ctx.moveTo(curve[0], curve[1]);
                ctx.bezierCurveTo.apply(ctx, curve.slice(2));
              }
            }
          },
          Base.each(
            Curve._evaluateMethods,
            function(name) {
              this[name + "At"] = function(offset) {
                var param = this._get(offset);
                return Curve[name](this.curves[param.index], param.time);
              };
            },
            {}
          )
        );
        var PathFitter = Base.extend({
          initialize: function(path) {
            var points = this.points = [], segments = path._segments, closed = path._closed;
            for (var i2 = 0, prev, l = segments.length; i2 < l; i2++) {
              var point = segments[i2].point;
              if (!prev || !prev.equals(point)) {
                points.push(prev = point.clone());
              }
            }
            if (closed) {
              points.unshift(points[points.length - 1]);
              points.push(points[1]);
            }
            this.closed = closed;
          },
          fit: function(error) {
            var points = this.points, length = points.length, segments = null;
            if (length > 0) {
              segments = [new Segment(points[0])];
              if (length > 1) {
                this.fitCubic(
                  segments,
                  error,
                  0,
                  length - 1,
                  points[1].subtract(points[0]),
                  points[length - 2].subtract(points[length - 1])
                );
                if (this.closed) {
                  segments.shift();
                  segments.pop();
                }
              }
            }
            return segments;
          },
          fitCubic: function(segments, error, first, last, tan1, tan2) {
            var points = this.points;
            if (last - first === 1) {
              var pt1 = points[first], pt2 = points[last], dist = pt1.getDistance(pt2) / 3;
              this.addCurve(segments, [
                pt1,
                pt1.add(tan1.normalize(dist)),
                pt2.add(tan2.normalize(dist)),
                pt2
              ]);
              return;
            }
            var uPrime = this.chordLengthParameterize(first, last), maxError = Math.max(error, error * error), split2, parametersInOrder = true;
            for (var i2 = 0; i2 <= 4; i2++) {
              var curve = this.generateBezier(first, last, uPrime, tan1, tan2);
              var max = this.findMaxError(first, last, curve, uPrime);
              if (max.error < error && parametersInOrder) {
                this.addCurve(segments, curve);
                return;
              }
              split2 = max.index;
              if (max.error >= maxError)
                break;
              parametersInOrder = this.reparameterize(first, last, uPrime, curve);
              maxError = max.error;
            }
            var tanCenter = points[split2 - 1].subtract(points[split2 + 1]);
            this.fitCubic(segments, error, first, split2, tan1, tanCenter);
            this.fitCubic(segments, error, split2, last, tanCenter.negate(), tan2);
          },
          addCurve: function(segments, curve) {
            var prev = segments[segments.length - 1];
            prev.setHandleOut(curve[1].subtract(curve[0]));
            segments.push(new Segment(curve[3], curve[2].subtract(curve[3])));
          },
          generateBezier: function(first, last, uPrime, tan1, tan2) {
            var epsilon = 1e-12, abs = Math.abs, points = this.points, pt1 = points[first], pt2 = points[last], C = [[0, 0], [0, 0]], X = [0, 0];
            for (var i2 = 0, l = last - first + 1; i2 < l; i2++) {
              var u = uPrime[i2], t2 = 1 - u, b = 3 * u * t2, b0 = t2 * t2 * t2, b1 = b * t2, b2 = b * u, b3 = u * u * u, a1 = tan1.normalize(b1), a2 = tan2.normalize(b2), tmp = points[first + i2].subtract(pt1.multiply(b0 + b1)).subtract(pt2.multiply(b2 + b3));
              C[0][0] += a1.dot(a1);
              C[0][1] += a1.dot(a2);
              C[1][0] = C[0][1];
              C[1][1] += a2.dot(a2);
              X[0] += a1.dot(tmp);
              X[1] += a2.dot(tmp);
            }
            var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1], alpha1, alpha2;
            if (abs(detC0C1) > epsilon) {
              var detC0X = C[0][0] * X[1] - C[1][0] * X[0], detXC1 = X[0] * C[1][1] - X[1] * C[0][1];
              alpha1 = detXC1 / detC0C1;
              alpha2 = detC0X / detC0C1;
            } else {
              var c0 = C[0][0] + C[0][1], c1 = C[1][0] + C[1][1];
              alpha1 = alpha2 = abs(c0) > epsilon ? X[0] / c0 : abs(c1) > epsilon ? X[1] / c1 : 0;
            }
            var segLength = pt2.getDistance(pt1), eps = epsilon * segLength, handle1, handle2;
            if (alpha1 < eps || alpha2 < eps) {
              alpha1 = alpha2 = segLength / 3;
            } else {
              var line = pt2.subtract(pt1);
              handle1 = tan1.normalize(alpha1);
              handle2 = tan2.normalize(alpha2);
              if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
                alpha1 = alpha2 = segLength / 3;
                handle1 = handle2 = null;
              }
            }
            return [
              pt1,
              pt1.add(handle1 || tan1.normalize(alpha1)),
              pt2.add(handle2 || tan2.normalize(alpha2)),
              pt2
            ];
          },
          reparameterize: function(first, last, u, curve) {
            for (var i2 = first; i2 <= last; i2++) {
              u[i2 - first] = this.findRoot(curve, this.points[i2], u[i2 - first]);
            }
            for (var i2 = 1, l = u.length; i2 < l; i2++) {
              if (u[i2] <= u[i2 - 1])
                return false;
            }
            return true;
          },
          findRoot: function(curve, point, u) {
            var curve1 = [], curve2 = [];
            for (var i2 = 0; i2 <= 2; i2++) {
              curve1[i2] = curve[i2 + 1].subtract(curve[i2]).multiply(3);
            }
            for (var i2 = 0; i2 <= 1; i2++) {
              curve2[i2] = curve1[i2 + 1].subtract(curve1[i2]).multiply(2);
            }
            var pt = this.evaluate(3, curve, u), pt1 = this.evaluate(2, curve1, u), pt2 = this.evaluate(1, curve2, u), diff = pt.subtract(point), df = pt1.dot(pt1) + diff.dot(pt2);
            return Numerical.isMachineZero(df) ? u : u - diff.dot(pt1) / df;
          },
          evaluate: function(degree, curve, t2) {
            var tmp = curve.slice();
            for (var i2 = 1; i2 <= degree; i2++) {
              for (var j = 0; j <= degree - i2; j++) {
                tmp[j] = tmp[j].multiply(1 - t2).add(tmp[j + 1].multiply(t2));
              }
            }
            return tmp[0];
          },
          chordLengthParameterize: function(first, last) {
            var u = [0];
            for (var i2 = first + 1; i2 <= last; i2++) {
              u[i2 - first] = u[i2 - first - 1] + this.points[i2].getDistance(this.points[i2 - 1]);
            }
            for (var i2 = 1, m = last - first; i2 <= m; i2++) {
              u[i2] /= u[m];
            }
            return u;
          },
          findMaxError: function(first, last, curve, u) {
            var index = Math.floor((last - first + 1) / 2), maxDist = 0;
            for (var i2 = first + 1; i2 < last; i2++) {
              var P = this.evaluate(3, curve, u[i2 - first]);
              var v = P.subtract(this.points[i2]);
              var dist = v.x * v.x + v.y * v.y;
              if (dist >= maxDist) {
                maxDist = dist;
                index = i2;
              }
            }
            return {
              error: maxDist,
              index
            };
          }
        });
        var TextItem = Item.extend({
          _class: "TextItem",
          _applyMatrix: false,
          _canApplyMatrix: false,
          _serializeFields: {
            content: null
          },
          _boundsOptions: { stroke: false, handle: false },
          initialize: function TextItem2(arg) {
            this._content = "";
            this._lines = [];
            var hasProps = arg && Base.isPlainObject(arg) && arg.x === undefined2 && arg.y === undefined2;
            this._initialize(hasProps && arg, !hasProps && Point.read(arguments));
          },
          _equals: function(item) {
            return this._content === item._content;
          },
          copyContent: function(source) {
            this.setContent(source._content);
          },
          getContent: function() {
            return this._content;
          },
          setContent: function(content) {
            this._content = "" + content;
            this._lines = this._content.split(/\r\n|\n|\r/mg);
            this._changed(521);
          },
          isEmpty: function() {
            return !this._content;
          },
          getCharacterStyle: "#getStyle",
          setCharacterStyle: "#setStyle",
          getParagraphStyle: "#getStyle",
          setParagraphStyle: "#setStyle"
        });
        var PointText = TextItem.extend({
          _class: "PointText",
          initialize: function PointText2() {
            TextItem.apply(this, arguments);
          },
          getPoint: function() {
            var point = this._matrix.getTranslation();
            return new LinkedPoint(point.x, point.y, this, "setPoint");
          },
          setPoint: function() {
            var point = Point.read(arguments);
            this.translate(point.subtract(this._matrix.getTranslation()));
          },
          _draw: function(ctx, param, viewMatrix) {
            if (!this._content)
              return;
            this._setStyles(ctx, param, viewMatrix);
            var lines = this._lines, style = this._style, hasFill = style.hasFill(), hasStroke = style.hasStroke(), leading = style.getLeading(), shadowColor = ctx.shadowColor;
            ctx.font = style.getFontStyle();
            ctx.textAlign = style.getJustification();
            for (var i2 = 0, l = lines.length; i2 < l; i2++) {
              ctx.shadowColor = shadowColor;
              var line = lines[i2];
              if (hasFill) {
                ctx.fillText(line, 0, 0);
                ctx.shadowColor = "rgba(0,0,0,0)";
              }
              if (hasStroke)
                ctx.strokeText(line, 0, 0);
              ctx.translate(0, leading);
            }
          },
          _getBounds: function(matrix, options) {
            var style = this._style, lines = this._lines, numLines = lines.length, justification = style.getJustification(), leading = style.getLeading(), width = this.getView().getTextWidth(style.getFontStyle(), lines), x = 0;
            if (justification !== "left")
              x -= width / (justification === "center" ? 2 : 1);
            var rect = new Rectangle(
              x,
              numLines ? -0.75 * leading : 0,
              width,
              numLines * leading
            );
            return matrix ? matrix._transformBounds(rect, rect) : rect;
          }
        });
        var Color = Base.extend(
          new function() {
            var types = {
              gray: ["gray"],
              rgb: ["red", "green", "blue"],
              hsb: ["hue", "saturation", "brightness"],
              hsl: ["hue", "saturation", "lightness"],
              gradient: ["gradient", "origin", "destination", "highlight"]
            };
            var componentParsers = {}, namedColors = {
              transparent: [0, 0, 0, 0]
            }, colorCtx;
            function fromCSS(string) {
              var match = string.match(
                /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i
              ) || string.match(
                /^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i
              ), type = "rgb", components;
              if (match) {
                var amount = match[4] ? 4 : 3;
                components = new Array(amount);
                for (var i2 = 0; i2 < amount; i2++) {
                  var value = match[i2 + 1];
                  components[i2] = parseInt(value.length == 1 ? value + value : value, 16) / 255;
                }
              } else if (match = string.match(/^(rgb|hsl)a?\((.*)\)$/)) {
                type = match[1];
                components = match[2].trim().split(/[,\s]+/g);
                var isHSL = type === "hsl";
                for (var i2 = 0, l = Math.min(components.length, 4); i2 < l; i2++) {
                  var component = components[i2];
                  var value = parseFloat(component);
                  if (isHSL) {
                    if (i2 === 0) {
                      var unit = component.match(/([a-z]*)$/)[1];
                      value *= {
                        turn: 360,
                        rad: 180 / Math.PI,
                        grad: 0.9
                      }[unit] || 1;
                    } else if (i2 < 3) {
                      value /= 100;
                    }
                  } else if (i2 < 3) {
                    value /= /%$/.test(component) ? 100 : 255;
                  }
                  components[i2] = value;
                }
              } else {
                var color = namedColors[string];
                if (!color) {
                  if (window2) {
                    if (!colorCtx) {
                      colorCtx = CanvasProvider.getContext(1, 1, {
                        willReadFrequently: true
                      });
                      colorCtx.globalCompositeOperation = "copy";
                    }
                    colorCtx.fillStyle = "rgba(0,0,0,0)";
                    colorCtx.fillStyle = string;
                    colorCtx.fillRect(0, 0, 1, 1);
                    var data = colorCtx.getImageData(0, 0, 1, 1).data;
                    color = namedColors[string] = [
                      data[0] / 255,
                      data[1] / 255,
                      data[2] / 255
                    ];
                  } else {
                    color = [0, 0, 0];
                  }
                }
                components = color.slice();
              }
              return [type, components];
            }
            var hsbIndices = [
              [0, 3, 1],
              [2, 0, 1],
              [1, 0, 3],
              [1, 2, 0],
              [3, 1, 0],
              [0, 1, 2]
            ];
            var converters = {
              "rgb-hsb": function(r, g, b) {
                var max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min, h = delta === 0 ? 0 : (max == r ? (g - b) / delta + (g < b ? 6 : 0) : max == g ? (b - r) / delta + 2 : (r - g) / delta + 4) * 60;
                return [h, max === 0 ? 0 : delta / max, max];
              },
              "hsb-rgb": function(h, s, b) {
                h = (h / 60 % 6 + 6) % 6;
                var i2 = Math.floor(h), f = h - i2, i2 = hsbIndices[i2], v = [
                  b,
                  b * (1 - s),
                  b * (1 - s * f),
                  b * (1 - s * (1 - f))
                ];
                return [v[i2[0]], v[i2[1]], v[i2[2]]];
              },
              "rgb-hsl": function(r, g, b) {
                var max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min, achromatic = delta === 0, h = achromatic ? 0 : (max == r ? (g - b) / delta + (g < b ? 6 : 0) : max == g ? (b - r) / delta + 2 : (r - g) / delta + 4) * 60, l = (max + min) / 2, s = achromatic ? 0 : l < 0.5 ? delta / (max + min) : delta / (2 - max - min);
                return [h, s, l];
              },
              "hsl-rgb": function(h, s, l) {
                h = (h / 360 % 1 + 1) % 1;
                if (s === 0)
                  return [l, l, l];
                var t3s = [h + 1 / 3, h, h - 1 / 3], t2 = l < 0.5 ? l * (1 + s) : l + s - l * s, t1 = 2 * l - t2, c = [];
                for (var i2 = 0; i2 < 3; i2++) {
                  var t3 = t3s[i2];
                  if (t3 < 0)
                    t3 += 1;
                  if (t3 > 1)
                    t3 -= 1;
                  c[i2] = 6 * t3 < 1 ? t1 + (t2 - t1) * 6 * t3 : 2 * t3 < 1 ? t2 : 3 * t3 < 2 ? t1 + (t2 - t1) * (2 / 3 - t3) * 6 : t1;
                }
                return c;
              },
              "rgb-gray": function(r, g, b) {
                return [r * 0.2989 + g * 0.587 + b * 0.114];
              },
              "gray-rgb": function(g) {
                return [g, g, g];
              },
              "gray-hsb": function(g) {
                return [0, 0, g];
              },
              "gray-hsl": function(g) {
                return [0, 0, g];
              },
              "gradient-rgb": function() {
                return [];
              },
              "rgb-gradient": function() {
                return [];
              }
            };
            return Base.each(types, function(properties, type) {
              componentParsers[type] = [];
              Base.each(properties, function(name, index) {
                var part = Base.capitalize(name), hasOverlap = /^(hue|saturation)$/.test(name), parser = componentParsers[type][index] = type === "gradient" ? name === "gradient" ? function(value) {
                  var current = this._components[0];
                  value = Gradient.read(
                    Array.isArray(value) ? value : arguments,
                    0,
                    { readNull: true }
                  );
                  if (current !== value) {
                    if (current)
                      current._removeOwner(this);
                    if (value)
                      value._addOwner(this);
                  }
                  return value;
                } : function() {
                  return Point.read(arguments, 0, {
                    readNull: name === "highlight",
                    clone: true
                  });
                } : function(value) {
                  return value == null || isNaN(value) ? 0 : +value;
                };
                this["get" + part] = function() {
                  return this._type === type || hasOverlap && /^hs[bl]$/.test(this._type) ? this._components[index] : this._convert(type)[index];
                };
                this["set" + part] = function(value) {
                  if (this._type !== type && !(hasOverlap && /^hs[bl]$/.test(this._type))) {
                    this._components = this._convert(type);
                    this._properties = types[type];
                    this._type = type;
                  }
                  this._components[index] = parser.call(this, value);
                  this._changed();
                };
              }, this);
            }, {
              _class: "Color",
              _readIndex: true,
              initialize: function Color2(arg) {
                var args = arguments, reading = this.__read, read = 0, type, components, alpha, values;
                if (Array.isArray(arg)) {
                  args = arg;
                  arg = args[0];
                }
                var argType = arg != null && typeof arg;
                if (argType === "string" && arg in types) {
                  type = arg;
                  arg = args[1];
                  if (Array.isArray(arg)) {
                    components = arg;
                    alpha = args[2];
                  } else {
                    if (reading)
                      read = 1;
                    args = Base.slice(args, 1);
                    argType = typeof arg;
                  }
                }
                if (!components) {
                  values = argType === "number" ? args : argType === "object" && arg.length != null ? arg : null;
                  if (values) {
                    if (!type)
                      type = values.length >= 3 ? "rgb" : "gray";
                    var length = types[type].length;
                    alpha = values[length];
                    if (reading) {
                      read += values === arguments ? length + (alpha != null ? 1 : 0) : 1;
                    }
                    if (values.length > length)
                      values = Base.slice(values, 0, length);
                  } else if (argType === "string") {
                    var converted = fromCSS(arg);
                    type = converted[0];
                    components = converted[1];
                    if (components.length === 4) {
                      alpha = components[3];
                      components.length--;
                    }
                  } else if (argType === "object") {
                    if (arg.constructor === Color2) {
                      type = arg._type;
                      components = arg._components.slice();
                      alpha = arg._alpha;
                      if (type === "gradient") {
                        for (var i2 = 1, l = components.length; i2 < l; i2++) {
                          var point = components[i2];
                          if (point)
                            components[i2] = point.clone();
                        }
                      }
                    } else if (arg.constructor === Gradient) {
                      type = "gradient";
                      values = args;
                    } else {
                      type = "hue" in arg ? "lightness" in arg ? "hsl" : "hsb" : "gradient" in arg || "stops" in arg || "radial" in arg ? "gradient" : "gray" in arg ? "gray" : "rgb";
                      var properties = types[type], parsers = componentParsers[type];
                      this._components = components = [];
                      for (var i2 = 0, l = properties.length; i2 < l; i2++) {
                        var value = arg[properties[i2]];
                        if (value == null && !i2 && type === "gradient" && "stops" in arg) {
                          value = {
                            stops: arg.stops,
                            radial: arg.radial
                          };
                        }
                        value = parsers[i2].call(this, value);
                        if (value != null)
                          components[i2] = value;
                      }
                      alpha = arg.alpha;
                    }
                  }
                  if (reading && type)
                    read = 1;
                }
                this._type = type || "rgb";
                if (!components) {
                  this._components = components = [];
                  var parsers = componentParsers[this._type];
                  for (var i2 = 0, l = parsers.length; i2 < l; i2++) {
                    var value = parsers[i2].call(this, values && values[i2]);
                    if (value != null)
                      components[i2] = value;
                  }
                }
                this._components = components;
                this._properties = types[this._type];
                this._alpha = alpha;
                if (reading)
                  this.__read = read;
                return this;
              },
              set: "#initialize",
              _serialize: function(options, dictionary) {
                var components = this.getComponents();
                return Base.serialize(
                  /^(gray|rgb)$/.test(this._type) ? components : [this._type].concat(components),
                  options,
                  true,
                  dictionary
                );
              },
              _changed: function() {
                this._canvasStyle = null;
                if (this._owner) {
                  if (this._setter) {
                    this._owner[this._setter](this);
                  } else {
                    this._owner._changed(129);
                  }
                }
              },
              _convert: function(type) {
                var converter;
                return this._type === type ? this._components.slice() : (converter = converters[this._type + "-" + type]) ? converter.apply(this, this._components) : converters["rgb-" + type].apply(
                  this,
                  converters[this._type + "-rgb"].apply(
                    this,
                    this._components
                  )
                );
              },
              convert: function(type) {
                return new Color(type, this._convert(type), this._alpha);
              },
              getType: function() {
                return this._type;
              },
              setType: function(type) {
                this._components = this._convert(type);
                this._properties = types[type];
                this._type = type;
              },
              getComponents: function() {
                var components = this._components.slice();
                if (this._alpha != null)
                  components.push(this._alpha);
                return components;
              },
              getAlpha: function() {
                return this._alpha != null ? this._alpha : 1;
              },
              setAlpha: function(alpha) {
                this._alpha = alpha == null ? null : Math.min(Math.max(alpha, 0), 1);
                this._changed();
              },
              hasAlpha: function() {
                return this._alpha != null;
              },
              equals: function(color) {
                var col = Base.isPlainValue(color, true) ? Color.read(arguments) : color;
                return col === this || col && this._class === col._class && this._type === col._type && this.getAlpha() === col.getAlpha() && Base.equals(this._components, col._components) || false;
              },
              toString: function() {
                var properties = this._properties, parts = [], isGradient = this._type === "gradient", f = Formatter.instance;
                for (var i2 = 0, l = properties.length; i2 < l; i2++) {
                  var value = this._components[i2];
                  if (value != null)
                    parts.push(properties[i2] + ": " + (isGradient ? value : f.number(value)));
                }
                if (this._alpha != null)
                  parts.push("alpha: " + f.number(this._alpha));
                return "{ " + parts.join(", ") + " }";
              },
              toCSS: function(hex) {
                var components = this._convert("rgb"), alpha = hex || this._alpha == null ? 1 : this._alpha;
                function convert(val) {
                  return Math.round((val < 0 ? 0 : val > 1 ? 1 : val) * 255);
                }
                components = [
                  convert(components[0]),
                  convert(components[1]),
                  convert(components[2])
                ];
                if (alpha < 1)
                  components.push(alpha < 0 ? 0 : alpha);
                return hex ? "#" + ((1 << 24) + (components[0] << 16) + (components[1] << 8) + components[2]).toString(16).slice(1) : (components.length == 4 ? "rgba(" : "rgb(") + components.join(",") + ")";
              },
              toCanvasStyle: function(ctx, matrix) {
                if (this._canvasStyle)
                  return this._canvasStyle;
                if (this._type !== "gradient")
                  return this._canvasStyle = this.toCSS();
                var components = this._components, gradient = components[0], stops = gradient._stops, origin = components[1], destination = components[2], highlight = components[3], inverse = matrix && matrix.inverted(), canvasGradient;
                if (inverse) {
                  origin = inverse._transformPoint(origin);
                  destination = inverse._transformPoint(destination);
                  if (highlight)
                    highlight = inverse._transformPoint(highlight);
                }
                if (gradient._radial) {
                  var radius = destination.getDistance(origin);
                  if (highlight) {
                    var vector = highlight.subtract(origin);
                    if (vector.getLength() > radius)
                      highlight = origin.add(vector.normalize(radius - 0.1));
                  }
                  var start = highlight || origin;
                  canvasGradient = ctx.createRadialGradient(
                    start.x,
                    start.y,
                    0,
                    origin.x,
                    origin.y,
                    radius
                  );
                } else {
                  canvasGradient = ctx.createLinearGradient(
                    origin.x,
                    origin.y,
                    destination.x,
                    destination.y
                  );
                }
                for (var i2 = 0, l = stops.length; i2 < l; i2++) {
                  var stop = stops[i2], offset = stop._offset;
                  canvasGradient.addColorStop(
                    offset == null ? i2 / (l - 1) : offset,
                    stop._color.toCanvasStyle()
                  );
                }
                return this._canvasStyle = canvasGradient;
              },
              transform: function(matrix) {
                if (this._type === "gradient") {
                  var components = this._components;
                  for (var i2 = 1, l = components.length; i2 < l; i2++) {
                    var point = components[i2];
                    matrix._transformPoint(point, point, true);
                  }
                  this._changed();
                }
              },
              statics: {
                _types: types,
                random: function() {
                  var random = Math.random;
                  return new Color(random(), random(), random());
                },
                _setOwner: function(color, owner, setter) {
                  if (color) {
                    if (color._owner && owner && color._owner !== owner) {
                      color = color.clone();
                    }
                    if (!color._owner ^ !owner) {
                      color._owner = owner || null;
                      color._setter = setter || null;
                    }
                  }
                  return color;
                }
              }
            });
          }(),
          new function() {
            var operators = {
              add: function(a, b) {
                return a + b;
              },
              subtract: function(a, b) {
                return a - b;
              },
              multiply: function(a, b) {
                return a * b;
              },
              divide: function(a, b) {
                return a / b;
              }
            };
            return Base.each(operators, function(operator, name) {
              this[name] = function(color) {
                color = Color.read(arguments);
                var type = this._type, components1 = this._components, components2 = color._convert(type);
                for (var i2 = 0, l = components1.length; i2 < l; i2++)
                  components2[i2] = operator(components1[i2], components2[i2]);
                return new Color(
                  type,
                  components2,
                  this._alpha != null ? operator(this._alpha, color.getAlpha()) : null
                );
              };
            }, {});
          }()
        );
        var Gradient = Base.extend({
          _class: "Gradient",
          initialize: function Gradient2(stops, radial) {
            this._id = UID.get();
            if (stops && Base.isPlainObject(stops)) {
              this.set(stops);
              stops = radial = null;
            }
            if (this._stops == null) {
              this.setStops(stops || ["white", "black"]);
            }
            if (this._radial == null) {
              this.setRadial(typeof radial === "string" && radial === "radial" || radial || false);
            }
          },
          _serialize: function(options, dictionary) {
            return dictionary.add(this, function() {
              return Base.serialize(
                [this._stops, this._radial],
                options,
                true,
                dictionary
              );
            });
          },
          _changed: function() {
            for (var i2 = 0, l = this._owners && this._owners.length; i2 < l; i2++) {
              this._owners[i2]._changed();
            }
          },
          _addOwner: function(color) {
            if (!this._owners)
              this._owners = [];
            this._owners.push(color);
          },
          _removeOwner: function(color) {
            var index = this._owners ? this._owners.indexOf(color) : -1;
            if (index != -1) {
              this._owners.splice(index, 1);
              if (!this._owners.length)
                this._owners = undefined2;
            }
          },
          clone: function() {
            var stops = [];
            for (var i2 = 0, l = this._stops.length; i2 < l; i2++) {
              stops[i2] = this._stops[i2].clone();
            }
            return new Gradient(stops, this._radial);
          },
          getStops: function() {
            return this._stops;
          },
          setStops: function(stops) {
            if (stops.length < 2) {
              throw new Error(
                "Gradient stop list needs to contain at least two stops."
              );
            }
            var _stops = this._stops;
            if (_stops) {
              for (var i2 = 0, l = _stops.length; i2 < l; i2++)
                _stops[i2]._owner = undefined2;
            }
            _stops = this._stops = GradientStop.readList(stops, 0, { clone: true });
            for (var i2 = 0, l = _stops.length; i2 < l; i2++)
              _stops[i2]._owner = this;
            this._changed();
          },
          getRadial: function() {
            return this._radial;
          },
          setRadial: function(radial) {
            this._radial = radial;
            this._changed();
          },
          equals: function(gradient) {
            if (gradient === this)
              return true;
            if (gradient && this._class === gradient._class) {
              var stops1 = this._stops, stops2 = gradient._stops, length = stops1.length;
              if (length === stops2.length) {
                for (var i2 = 0; i2 < length; i2++) {
                  if (!stops1[i2].equals(stops2[i2]))
                    return false;
                }
                return true;
              }
            }
            return false;
          }
        });
        var GradientStop = Base.extend({
          _class: "GradientStop",
          initialize: function GradientStop2(arg0, arg1) {
            var color = arg0, offset = arg1;
            if (typeof arg0 === "object" && arg1 === undefined2) {
              if (Array.isArray(arg0) && typeof arg0[0] !== "number") {
                color = arg0[0];
                offset = arg0[1];
              } else if ("color" in arg0 || "offset" in arg0 || "rampPoint" in arg0) {
                color = arg0.color;
                offset = arg0.offset || arg0.rampPoint || 0;
              }
            }
            this.setColor(color);
            this.setOffset(offset);
          },
          clone: function() {
            return new GradientStop(this._color.clone(), this._offset);
          },
          _serialize: function(options, dictionary) {
            var color = this._color, offset = this._offset;
            return Base.serialize(
              offset == null ? [color] : [color, offset],
              options,
              true,
              dictionary
            );
          },
          _changed: function() {
            if (this._owner)
              this._owner._changed(129);
          },
          getOffset: function() {
            return this._offset;
          },
          setOffset: function(offset) {
            this._offset = offset;
            this._changed();
          },
          getRampPoint: "#getOffset",
          setRampPoint: "#setOffset",
          getColor: function() {
            return this._color;
          },
          setColor: function() {
            Color._setOwner(this._color, null);
            this._color = Color._setOwner(
              Color.read(arguments, 0),
              this,
              "setColor"
            );
            this._changed();
          },
          equals: function(stop) {
            return stop === this || stop && this._class === stop._class && this._color.equals(stop._color) && this._offset == stop._offset || false;
          }
        });
        var Style = Base.extend(new function() {
          var itemDefaults = {
            fillColor: null,
            fillRule: "nonzero",
            strokeColor: null,
            strokeWidth: 1,
            strokeCap: "butt",
            strokeJoin: "miter",
            strokeScaling: true,
            miterLimit: 10,
            dashOffset: 0,
            dashArray: [],
            shadowColor: null,
            shadowBlur: 0,
            shadowOffset: new Point(),
            selectedColor: null
          }, groupDefaults = Base.set({}, itemDefaults, {
            fontFamily: "sans-serif",
            fontWeight: "normal",
            fontSize: 12,
            leading: null,
            justification: "left"
          }), textDefaults = Base.set({}, groupDefaults, {
            fillColor: new Color()
          }), flags = {
            strokeWidth: 193,
            strokeCap: 193,
            strokeJoin: 193,
            strokeScaling: 201,
            miterLimit: 193,
            fontFamily: 9,
            fontWeight: 9,
            fontSize: 9,
            font: 9,
            leading: 9,
            justification: 9
          }, item = {
            beans: true
          }, fields = {
            _class: "Style",
            beans: true,
            initialize: function Style2(style, _owner, _project) {
              this._values = {};
              this._owner = _owner;
              this._project = _owner && _owner._project || _project || paper2.project;
              this._defaults = !_owner || _owner instanceof Group ? groupDefaults : _owner instanceof TextItem ? textDefaults : itemDefaults;
              if (style)
                this.set(style);
            }
          };
          Base.each(groupDefaults, function(value, key) {
            var isColor = /Color$/.test(key), isPoint = key === "shadowOffset", part = Base.capitalize(key), flag = flags[key], set2 = "set" + part, get2 = "get" + part;
            fields[set2] = function(value2) {
              var owner = this._owner, children = owner && owner._children, applyToChildren = children && children.length > 0 && !(owner instanceof CompoundPath);
              if (applyToChildren) {
                for (var i2 = 0, l = children.length; i2 < l; i2++)
                  children[i2]._style[set2](value2);
              }
              if ((key === "selectedColor" || !applyToChildren) && key in this._defaults) {
                var old = this._values[key];
                if (old !== value2) {
                  if (isColor) {
                    if (old) {
                      Color._setOwner(old, null);
                      old._canvasStyle = null;
                    }
                    if (value2 && value2.constructor === Color) {
                      value2 = Color._setOwner(
                        value2,
                        owner,
                        applyToChildren && set2
                      );
                    }
                  }
                  this._values[key] = value2;
                  if (owner)
                    owner._changed(flag || 129);
                }
              }
            };
            fields[get2] = function(_dontMerge) {
              var owner = this._owner, children = owner && owner._children, applyToChildren = children && children.length > 0 && !(owner instanceof CompoundPath), value2;
              if (applyToChildren && !_dontMerge) {
                for (var i2 = 0, l = children.length; i2 < l; i2++) {
                  var childValue = children[i2]._style[get2]();
                  if (!i2) {
                    value2 = childValue;
                  } else if (!Base.equals(value2, childValue)) {
                    return undefined2;
                  }
                }
              } else if (key in this._defaults) {
                var value2 = this._values[key];
                if (value2 === undefined2) {
                  value2 = this._defaults[key];
                  if (value2 && value2.clone) {
                    value2 = value2.clone();
                  }
                } else {
                  var ctor = isColor ? Color : isPoint ? Point : null;
                  if (ctor && !(value2 && value2.constructor === ctor)) {
                    this._values[key] = value2 = ctor.read(
                      [value2],
                      0,
                      { readNull: true, clone: true }
                    );
                  }
                }
              }
              if (value2 && isColor) {
                value2 = Color._setOwner(value2, owner, applyToChildren && set2);
              }
              return value2;
            };
            item[get2] = function(_dontMerge) {
              return this._style[get2](_dontMerge);
            };
            item[set2] = function(value2) {
              this._style[set2](value2);
            };
          });
          Base.each({
            Font: "FontFamily",
            WindingRule: "FillRule"
          }, function(value, key) {
            var get2 = "get" + key, set2 = "set" + key;
            fields[get2] = item[get2] = "#get" + value;
            fields[set2] = item[set2] = "#set" + value;
          });
          Item.inject(item);
          return fields;
        }(), {
          set: function(style) {
            var isStyle = style instanceof Style, values = isStyle ? style._values : style;
            if (values) {
              for (var key in values) {
                if (key in this._defaults) {
                  var value = values[key];
                  this[key] = value && isStyle && value.clone ? value.clone() : value;
                }
              }
            }
          },
          equals: function(style) {
            function compare(style1, style2, secondary) {
              var values1 = style1._values, values2 = style2._values, defaults2 = style2._defaults;
              for (var key in values1) {
                var value1 = values1[key], value2 = values2[key];
                if (!(secondary && key in values2) && !Base.equals(
                  value1,
                  value2 === undefined2 ? defaults2[key] : value2
                ))
                  return false;
              }
              return true;
            }
            return style === this || style && this._class === style._class && compare(this, style) && compare(style, this, true) || false;
          },
          _dispose: function() {
            var color;
            color = this.getFillColor();
            if (color)
              color._canvasStyle = null;
            color = this.getStrokeColor();
            if (color)
              color._canvasStyle = null;
            color = this.getShadowColor();
            if (color)
              color._canvasStyle = null;
          },
          hasFill: function() {
            var color = this.getFillColor();
            return !!color && color.alpha > 0;
          },
          hasStroke: function() {
            var color = this.getStrokeColor();
            return !!color && color.alpha > 0 && this.getStrokeWidth() > 0;
          },
          hasShadow: function() {
            var color = this.getShadowColor();
            return !!color && color.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero());
          },
          getView: function() {
            return this._project._view;
          },
          getFontStyle: function() {
            var fontSize = this.getFontSize();
            return this.getFontWeight() + " " + fontSize + (/[a-z]/i.test(fontSize + "") ? " " : "px ") + this.getFontFamily();
          },
          getFont: "#getFontFamily",
          setFont: "#setFontFamily",
          getLeading: function getLeading() {
            var leading = getLeading.base.call(this), fontSize = this.getFontSize();
            if (/pt|em|%|px/.test(fontSize))
              fontSize = this.getView().getPixelSize(fontSize);
            return leading != null ? leading : fontSize * 1.2;
          }
        });
        var DomElement = new function() {
          function handlePrefix(el, name, set2, value) {
            var prefixes = ["", "webkit", "moz", "Moz", "ms", "o"], suffix = name[0].toUpperCase() + name.substring(1);
            for (var i2 = 0; i2 < 6; i2++) {
              var prefix = prefixes[i2], key = prefix ? prefix + suffix : name;
              if (key in el) {
                if (set2) {
                  el[key] = value;
                } else {
                  return el[key];
                }
                break;
              }
            }
          }
          return {
            getStyles: function(el) {
              var doc = el && el.nodeType !== 9 ? el.ownerDocument : el, view = doc && doc.defaultView;
              return view && view.getComputedStyle(el, "");
            },
            getBounds: function(el, viewport) {
              var doc = el.ownerDocument, body = doc.body, html = doc.documentElement, rect;
              try {
                rect = el.getBoundingClientRect();
              } catch (e) {
                rect = { left: 0, top: 0, width: 0, height: 0 };
              }
              var x = rect.left - (html.clientLeft || body.clientLeft || 0), y = rect.top - (html.clientTop || body.clientTop || 0);
              if (!viewport) {
                var view = doc.defaultView;
                x += view.pageXOffset || html.scrollLeft || body.scrollLeft;
                y += view.pageYOffset || html.scrollTop || body.scrollTop;
              }
              return new Rectangle(x, y, rect.width, rect.height);
            },
            getViewportBounds: function(el) {
              var doc = el.ownerDocument, view = doc.defaultView, html = doc.documentElement;
              return new Rectangle(
                0,
                0,
                view.innerWidth || html.clientWidth,
                view.innerHeight || html.clientHeight
              );
            },
            getOffset: function(el, viewport) {
              return DomElement.getBounds(el, viewport).getPoint();
            },
            getSize: function(el) {
              return DomElement.getBounds(el, true).getSize();
            },
            isInvisible: function(el) {
              return DomElement.getSize(el).equals(new Size(0, 0));
            },
            isInView: function(el) {
              return !DomElement.isInvisible(el) && DomElement.getViewportBounds(el).intersects(
                DomElement.getBounds(el, true)
              );
            },
            isInserted: function(el) {
              return document2.body.contains(el);
            },
            getPrefixed: function(el, name) {
              return el && handlePrefix(el, name);
            },
            setPrefixed: function(el, name, value) {
              if (typeof name === "object") {
                for (var key in name)
                  handlePrefix(el, key, true, name[key]);
              } else {
                handlePrefix(el, name, true, value);
              }
            }
          };
        }();
        var DomEvent = {
          add: function(el, events) {
            if (el) {
              for (var type in events) {
                var func = events[type], parts = type.split(/[\s,]+/g);
                for (var i2 = 0, l = parts.length; i2 < l; i2++) {
                  var name = parts[i2];
                  var options = el === document2 && (name === "touchstart" || name === "touchmove") ? { passive: false } : false;
                  el.addEventListener(name, func, options);
                }
              }
            }
          },
          remove: function(el, events) {
            if (el) {
              for (var type in events) {
                var func = events[type], parts = type.split(/[\s,]+/g);
                for (var i2 = 0, l = parts.length; i2 < l; i2++)
                  el.removeEventListener(parts[i2], func, false);
              }
            }
          },
          getPoint: function(event) {
            var pos = event.targetTouches ? event.targetTouches.length ? event.targetTouches[0] : event.changedTouches[0] : event;
            return new Point(
              pos.pageX || pos.clientX + document2.documentElement.scrollLeft,
              pos.pageY || pos.clientY + document2.documentElement.scrollTop
            );
          },
          getTarget: function(event) {
            return event.target || event.srcElement;
          },
          getRelatedTarget: function(event) {
            return event.relatedTarget || event.toElement;
          },
          getOffset: function(event, target) {
            return DomEvent.getPoint(event).subtract(DomElement.getOffset(
              target || DomEvent.getTarget(event)
            ));
          }
        };
        DomEvent.requestAnimationFrame = new function() {
          var nativeRequest = DomElement.getPrefixed(window2, "requestAnimationFrame"), requested = false, callbacks = [], timer;
          function handleCallbacks() {
            var functions = callbacks;
            callbacks = [];
            for (var i2 = 0, l = functions.length; i2 < l; i2++)
              functions[i2]();
            requested = nativeRequest && callbacks.length;
            if (requested)
              nativeRequest(handleCallbacks);
          }
          return function(callback) {
            callbacks.push(callback);
            if (nativeRequest) {
              if (!requested) {
                nativeRequest(handleCallbacks);
                requested = true;
              }
            } else if (!timer) {
              timer = setInterval(handleCallbacks, 1e3 / 60);
            }
          };
        }();
        var View = Base.extend(
          Emitter,
          {
            _class: "View",
            initialize: function View2(project, element) {
              function getSize(name) {
                return element[name] || parseInt(element.getAttribute(name), 10);
              }
              function getCanvasSize() {
                var size2 = DomElement.getSize(element);
                return size2.isNaN() || size2.isZero() ? new Size(getSize("width"), getSize("height")) : size2;
              }
              var size;
              if (window2 && element) {
                this._id = element.getAttribute("id");
                if (this._id == null)
                  element.setAttribute("id", this._id = "paper-view-" + View2._id++);
                DomEvent.add(element, this._viewEvents);
                var none = "none";
                DomElement.setPrefixed(element.style, {
                  userDrag: none,
                  userSelect: none,
                  touchCallout: none,
                  contentZooming: none,
                  tapHighlightColor: "rgba(0,0,0,0)"
                });
                if (PaperScope.hasAttribute(element, "resize")) {
                  var that = this;
                  DomEvent.add(window2, this._windowEvents = {
                    resize: function() {
                      that.setViewSize(getCanvasSize());
                    }
                  });
                }
                size = getCanvasSize();
                if (PaperScope.hasAttribute(element, "stats") && typeof Stats !== "undefined") {
                  this._stats = new Stats();
                  var stats = this._stats.domElement, style = stats.style, offset = DomElement.getOffset(element);
                  style.position = "absolute";
                  style.left = offset.x + "px";
                  style.top = offset.y + "px";
                  document2.body.appendChild(stats);
                }
              } else {
                size = new Size(element);
                element = null;
              }
              this._project = project;
              this._scope = project._scope;
              this._element = element;
              if (!this._pixelRatio)
                this._pixelRatio = window2 && window2.devicePixelRatio || 1;
              this._setElementSize(size.width, size.height);
              this._viewSize = size;
              View2._views.push(this);
              View2._viewsById[this._id] = this;
              (this._matrix = new Matrix())._owner = this;
              if (!View2._focused)
                View2._focused = this;
              this._frameItems = {};
              this._frameItemCount = 0;
              this._itemEvents = { native: {}, virtual: {} };
              this._autoUpdate = !paper2.agent.node;
              this._needsUpdate = false;
            },
            remove: function() {
              if (!this._project)
                return false;
              if (View._focused === this)
                View._focused = null;
              View._views.splice(View._views.indexOf(this), 1);
              delete View._viewsById[this._id];
              var project = this._project;
              if (project._view === this)
                project._view = null;
              DomEvent.remove(this._element, this._viewEvents);
              DomEvent.remove(window2, this._windowEvents);
              this._element = this._project = null;
              this.off("frame");
              this._animate = false;
              this._frameItems = {};
              return true;
            },
            _events: Base.each(
              Item._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]),
              function(name) {
                this[name] = {};
              },
              {
                onFrame: {
                  install: function() {
                    this.play();
                  },
                  uninstall: function() {
                    this.pause();
                  }
                }
              }
            ),
            _animate: false,
            _time: 0,
            _count: 0,
            getAutoUpdate: function() {
              return this._autoUpdate;
            },
            setAutoUpdate: function(autoUpdate) {
              this._autoUpdate = autoUpdate;
              if (autoUpdate)
                this.requestUpdate();
            },
            update: function() {
            },
            draw: function() {
              this.update();
            },
            requestUpdate: function() {
              if (!this._requested) {
                var that = this;
                DomEvent.requestAnimationFrame(function() {
                  that._requested = false;
                  if (that._animate) {
                    that.requestUpdate();
                    var element = that._element;
                    if ((!DomElement.getPrefixed(document2, "hidden") || PaperScope.getAttribute(element, "keepalive") === "true") && DomElement.isInView(element)) {
                      that._handleFrame();
                    }
                  }
                  if (that._autoUpdate)
                    that.update();
                });
                this._requested = true;
              }
            },
            play: function() {
              this._animate = true;
              this.requestUpdate();
            },
            pause: function() {
              this._animate = false;
            },
            _handleFrame: function() {
              paper2 = this._scope;
              var now = Date.now() / 1e3, delta = this._last ? now - this._last : 0;
              this._last = now;
              this.emit("frame", new Base({
                delta,
                time: this._time += delta,
                count: this._count++
              }));
              if (this._stats)
                this._stats.update();
            },
            _animateItem: function(item, animate) {
              var items = this._frameItems;
              if (animate) {
                items[item._id] = {
                  item,
                  time: 0,
                  count: 0
                };
                if (++this._frameItemCount === 1)
                  this.on("frame", this._handleFrameItems);
              } else {
                delete items[item._id];
                if (--this._frameItemCount === 0) {
                  this.off("frame", this._handleFrameItems);
                }
              }
            },
            _handleFrameItems: function(event) {
              for (var i2 in this._frameItems) {
                var entry = this._frameItems[i2];
                entry.item.emit("frame", new Base(event, {
                  time: entry.time += event.delta,
                  count: entry.count++
                }));
              }
            },
            _changed: function() {
              this._project._changed(4097);
              this._bounds = this._decomposed = undefined2;
            },
            getElement: function() {
              return this._element;
            },
            getPixelRatio: function() {
              return this._pixelRatio;
            },
            getResolution: function() {
              return this._pixelRatio * 72;
            },
            getViewSize: function() {
              var size = this._viewSize;
              return new LinkedSize(size.width, size.height, this, "setViewSize");
            },
            setViewSize: function() {
              var size = Size.read(arguments), delta = size.subtract(this._viewSize);
              if (delta.isZero())
                return;
              this._setElementSize(size.width, size.height);
              this._viewSize.set(size);
              this._changed();
              this.emit("resize", { size, delta });
              if (this._autoUpdate) {
                this.update();
              }
            },
            _setElementSize: function(width, height) {
              var element = this._element;
              if (element) {
                if (element.width !== width)
                  element.width = width;
                if (element.height !== height)
                  element.height = height;
              }
            },
            getBounds: function() {
              if (!this._bounds)
                this._bounds = this._matrix.inverted()._transformBounds(
                  new Rectangle(new Point(), this._viewSize)
                );
              return this._bounds;
            },
            getSize: function() {
              return this.getBounds().getSize();
            },
            isVisible: function() {
              return DomElement.isInView(this._element);
            },
            isInserted: function() {
              return DomElement.isInserted(this._element);
            },
            getPixelSize: function(size) {
              var element = this._element, pixels;
              if (element) {
                var parent = element.parentNode, temp = document2.createElement("div");
                temp.style.fontSize = size;
                parent.appendChild(temp);
                pixels = parseFloat(DomElement.getStyles(temp).fontSize);
                parent.removeChild(temp);
              } else {
                pixels = parseFloat(pixels);
              }
              return pixels;
            },
            getTextWidth: function(font, lines) {
              return 0;
            }
          },
          Base.each(["rotate", "scale", "shear", "skew"], function(key) {
            var rotate = key === "rotate";
            this[key] = function() {
              var args = arguments, value = (rotate ? Base : Point).read(args), center = Point.read(args, 0, { readNull: true });
              return this.transform(new Matrix()[key](
                value,
                center || this.getCenter(true)
              ));
            };
          }, {
            _decompose: function() {
              return this._decomposed || (this._decomposed = this._matrix.decompose());
            },
            translate: function() {
              var mx = new Matrix();
              return this.transform(mx.translate.apply(mx, arguments));
            },
            getCenter: function() {
              return this.getBounds().getCenter();
            },
            setCenter: function() {
              var center = Point.read(arguments);
              this.translate(this.getCenter().subtract(center));
            },
            getZoom: function() {
              var scaling = this._decompose().scaling;
              return (scaling.x + scaling.y) / 2;
            },
            setZoom: function(zoom) {
              this.transform(new Matrix().scale(
                zoom / this.getZoom(),
                this.getCenter()
              ));
            },
            getRotation: function() {
              return this._decompose().rotation;
            },
            setRotation: function(rotation) {
              var current = this.getRotation();
              if (current != null && rotation != null) {
                this.rotate(rotation - current);
              }
            },
            getScaling: function() {
              var scaling = this._decompose().scaling;
              return new LinkedPoint(scaling.x, scaling.y, this, "setScaling");
            },
            setScaling: function() {
              var current = this.getScaling(), scaling = Point.read(arguments, 0, { clone: true, readNull: true });
              if (current && scaling) {
                this.scale(scaling.x / current.x, scaling.y / current.y);
              }
            },
            getMatrix: function() {
              return this._matrix;
            },
            setMatrix: function() {
              var matrix = this._matrix;
              matrix.set.apply(matrix, arguments);
            },
            transform: function(matrix) {
              this._matrix.append(matrix);
            },
            scrollBy: function() {
              this.translate(Point.read(arguments).negate());
            }
          }),
          {
            projectToView: function() {
              return this._matrix._transformPoint(Point.read(arguments));
            },
            viewToProject: function() {
              return this._matrix._inverseTransform(Point.read(arguments));
            },
            getEventPoint: function(event) {
              return this.viewToProject(DomEvent.getOffset(event, this._element));
            }
          },
          {
            statics: {
              _views: [],
              _viewsById: {},
              _id: 0,
              create: function(project, element) {
                if (document2 && typeof element === "string")
                  element = document2.getElementById(element);
                var ctor = window2 ? CanvasView : View;
                return new ctor(project, element);
              }
            }
          },
          new function() {
            if (!window2)
              return;
            var prevFocus, tempFocus, dragging = false, mouseDown = false;
            function getView(event) {
              var target = DomEvent.getTarget(event);
              return target.getAttribute && View._viewsById[target.getAttribute("id")];
            }
            function updateFocus() {
              var view = View._focused;
              if (!view || !view.isVisible()) {
                for (var i2 = 0, l = View._views.length; i2 < l; i2++) {
                  if ((view = View._views[i2]).isVisible()) {
                    View._focused = tempFocus = view;
                    break;
                  }
                }
              }
            }
            function handleMouseMove(view, event, point) {
              view._handleMouseEvent("mousemove", event, point);
            }
            var navigator2 = window2.navigator, mousedown, mousemove, mouseup;
            if (navigator2.pointerEnabled || navigator2.msPointerEnabled) {
              mousedown = "pointerdown MSPointerDown";
              mousemove = "pointermove MSPointerMove";
              mouseup = "pointerup pointercancel MSPointerUp MSPointerCancel";
            } else {
              mousedown = "touchstart";
              mousemove = "touchmove";
              mouseup = "touchend touchcancel";
              if (!("ontouchstart" in window2 && navigator2.userAgent.match(
                /mobile|tablet|ip(ad|hone|od)|android|silk/i
              ))) {
                mousedown += " mousedown";
                mousemove += " mousemove";
                mouseup += " mouseup";
              }
            }
            var viewEvents = {}, docEvents = {
              mouseout: function(event) {
                var view = View._focused, target = DomEvent.getRelatedTarget(event);
                if (view && (!target || target.nodeName === "HTML")) {
                  var offset = DomEvent.getOffset(event, view._element), x = offset.x, abs = Math.abs, ax = abs(x), max = 1 << 25, diff = ax - max;
                  offset.x = abs(diff) < ax ? diff * (x < 0 ? -1 : 1) : x;
                  handleMouseMove(view, event, view.viewToProject(offset));
                }
              },
              scroll: updateFocus
            };
            viewEvents[mousedown] = function(event) {
              var view = View._focused = getView(event);
              if (!dragging) {
                dragging = true;
                view._handleMouseEvent("mousedown", event);
              }
            };
            docEvents[mousemove] = function(event) {
              var view = View._focused;
              if (!mouseDown) {
                var target = getView(event);
                if (target) {
                  if (view !== target) {
                    if (view)
                      handleMouseMove(view, event);
                    if (!prevFocus)
                      prevFocus = view;
                    view = View._focused = tempFocus = target;
                  }
                } else if (tempFocus && tempFocus === view) {
                  if (prevFocus && !prevFocus.isInserted())
                    prevFocus = null;
                  view = View._focused = prevFocus;
                  prevFocus = null;
                  updateFocus();
                }
              }
              if (view)
                handleMouseMove(view, event);
            };
            docEvents[mousedown] = function() {
              mouseDown = true;
            };
            docEvents[mouseup] = function(event) {
              var view = View._focused;
              if (view && dragging)
                view._handleMouseEvent("mouseup", event);
              mouseDown = dragging = false;
            };
            DomEvent.add(document2, docEvents);
            DomEvent.add(window2, {
              load: updateFocus
            });
            var called = false, prevented = false, fallbacks = {
              doubleclick: "click",
              mousedrag: "mousemove"
            }, wasInView = false, overView, downPoint, lastPoint, downItem, overItem, dragItem, clickItem, clickTime, dblClick;
            function emitMouseEvent(obj, target, type, event, point, prevPoint, stopItem) {
              var stopped = false, mouseEvent;
              function emit(obj2, type2) {
                if (obj2.responds(type2)) {
                  if (!mouseEvent) {
                    mouseEvent = new MouseEvent2(
                      type2,
                      event,
                      point,
                      target || obj2,
                      prevPoint ? point.subtract(prevPoint) : null
                    );
                  }
                  if (obj2.emit(type2, mouseEvent)) {
                    called = true;
                    if (mouseEvent.prevented)
                      prevented = true;
                    if (mouseEvent.stopped)
                      return stopped = true;
                  }
                } else {
                  var fallback = fallbacks[type2];
                  if (fallback)
                    return emit(obj2, fallback);
                }
              }
              while (obj && obj !== stopItem) {
                if (emit(obj, type))
                  break;
                obj = obj._parent;
              }
              return stopped;
            }
            function emitMouseEvents(view, hitItem, type, event, point, prevPoint) {
              view._project.removeOn(type);
              prevented = called = false;
              return dragItem && emitMouseEvent(
                dragItem,
                null,
                type,
                event,
                point,
                prevPoint
              ) || hitItem && hitItem !== dragItem && !hitItem.isDescendant(dragItem) && emitMouseEvent(hitItem, null, type === "mousedrag" ? "mousemove" : type, event, point, prevPoint, dragItem) || emitMouseEvent(
                view,
                dragItem || hitItem || view,
                type,
                event,
                point,
                prevPoint
              );
            }
            var itemEventsMap = {
              mousedown: {
                mousedown: 1,
                mousedrag: 1,
                click: 1,
                doubleclick: 1
              },
              mouseup: {
                mouseup: 1,
                mousedrag: 1,
                click: 1,
                doubleclick: 1
              },
              mousemove: {
                mousedrag: 1,
                mousemove: 1,
                mouseenter: 1,
                mouseleave: 1
              }
            };
            return {
              _viewEvents: viewEvents,
              _handleMouseEvent: function(type, event, point) {
                var itemEvents = this._itemEvents, hitItems = itemEvents.native[type], nativeMove = type === "mousemove", tool = this._scope.tool, view = this;
                function responds(type2) {
                  return itemEvents.virtual[type2] || view.responds(type2) || tool && tool.responds(type2);
                }
                if (nativeMove && dragging && responds("mousedrag"))
                  type = "mousedrag";
                if (!point)
                  point = this.getEventPoint(event);
                var inView = this.getBounds().contains(point), hit = hitItems && inView && view._project.hitTest(point, {
                  tolerance: 0,
                  fill: true,
                  stroke: true
                }), hitItem = hit && hit.item || null, handle = false, mouse = {};
                mouse[type.substr(5)] = true;
                if (hitItems && hitItem !== overItem) {
                  if (overItem) {
                    emitMouseEvent(overItem, null, "mouseleave", event, point);
                  }
                  if (hitItem) {
                    emitMouseEvent(hitItem, null, "mouseenter", event, point);
                  }
                  overItem = hitItem;
                }
                if (wasInView ^ inView) {
                  emitMouseEvent(
                    this,
                    null,
                    inView ? "mouseenter" : "mouseleave",
                    event,
                    point
                  );
                  overView = inView ? this : null;
                  handle = true;
                }
                if ((inView || mouse.drag) && !point.equals(lastPoint)) {
                  emitMouseEvents(
                    this,
                    hitItem,
                    nativeMove ? type : "mousemove",
                    event,
                    point,
                    lastPoint
                  );
                  handle = true;
                }
                wasInView = inView;
                if (mouse.down && inView || mouse.up && downPoint) {
                  emitMouseEvents(this, hitItem, type, event, point, downPoint);
                  if (mouse.down) {
                    dblClick = hitItem === clickItem && Date.now() - clickTime < 300;
                    downItem = clickItem = hitItem;
                    if (!prevented && hitItem) {
                      var item = hitItem;
                      while (item && !item.responds("mousedrag"))
                        item = item._parent;
                      if (item)
                        dragItem = hitItem;
                    }
                    downPoint = point;
                  } else if (mouse.up) {
                    if (!prevented && hitItem === downItem) {
                      clickTime = Date.now();
                      emitMouseEvents(this, hitItem, dblClick ? "doubleclick" : "click", event, point, downPoint);
                      dblClick = false;
                    }
                    downItem = dragItem = null;
                  }
                  wasInView = false;
                  handle = true;
                }
                lastPoint = point;
                if (handle && tool) {
                  called = tool._handleMouseEvent(type, event, point, mouse) || called;
                }
                if (event.cancelable !== false && (called && !mouse.move || mouse.down && responds("mouseup"))) {
                  event.preventDefault();
                }
              },
              _handleKeyEvent: function(type, event, key, character) {
                var scope = this._scope, tool = scope.tool, keyEvent;
                function emit(obj) {
                  if (obj.responds(type)) {
                    paper2 = scope;
                    obj.emit(type, keyEvent = keyEvent || new KeyEvent(type, event, key, character));
                  }
                }
                if (this.isVisible()) {
                  emit(this);
                  if (tool && tool.responds(type))
                    emit(tool);
                }
              },
              _countItemEvent: function(type, sign) {
                var itemEvents = this._itemEvents, native = itemEvents.native, virtual = itemEvents.virtual;
                for (var key in itemEventsMap) {
                  native[key] = (native[key] || 0) + (itemEventsMap[key][type] || 0) * sign;
                }
                virtual[type] = (virtual[type] || 0) + sign;
              },
              statics: {
                updateFocus,
                _resetState: function() {
                  dragging = mouseDown = called = wasInView = false;
                  prevFocus = tempFocus = overView = downPoint = lastPoint = downItem = overItem = dragItem = clickItem = clickTime = dblClick = null;
                }
              }
            };
          }()
        );
        var CanvasView = View.extend({
          _class: "CanvasView",
          initialize: function CanvasView2(project, canvas) {
            if (!(canvas instanceof window2.HTMLCanvasElement)) {
              var size = Size.read(arguments, 1);
              if (size.isZero())
                throw new Error(
                  "Cannot create CanvasView with the provided argument: " + Base.slice(arguments, 1)
                );
              canvas = CanvasProvider.getCanvas(size);
            }
            var ctx = this._context = canvas.getContext("2d");
            ctx.save();
            this._pixelRatio = 1;
            if (!/^off|false$/.test(PaperScope.getAttribute(canvas, "hidpi"))) {
              var deviceRatio = window2.devicePixelRatio || 1, backingStoreRatio = DomElement.getPrefixed(
                ctx,
                "backingStorePixelRatio"
              ) || 1;
              this._pixelRatio = deviceRatio / backingStoreRatio;
            }
            View.call(this, project, canvas);
            this._needsUpdate = true;
          },
          remove: function remove2() {
            this._context.restore();
            return remove2.base.call(this);
          },
          _setElementSize: function _setElementSize(width, height) {
            var pixelRatio = this._pixelRatio;
            _setElementSize.base.call(this, width * pixelRatio, height * pixelRatio);
            if (pixelRatio !== 1) {
              var element = this._element, ctx = this._context;
              if (!PaperScope.hasAttribute(element, "resize")) {
                var style = element.style;
                style.width = width + "px";
                style.height = height + "px";
              }
              ctx.restore();
              ctx.save();
              ctx.scale(pixelRatio, pixelRatio);
            }
          },
          getContext: function() {
            return this._context;
          },
          getPixelSize: function getPixelSize(size) {
            var agent = paper2.agent, pixels;
            if (agent && agent.firefox) {
              pixels = getPixelSize.base.call(this, size);
            } else {
              var ctx = this._context, prevFont = ctx.font;
              ctx.font = size + " serif";
              pixels = parseFloat(ctx.font);
              ctx.font = prevFont;
            }
            return pixels;
          },
          getTextWidth: function(font, lines) {
            var ctx = this._context, prevFont = ctx.font, width = 0;
            ctx.font = font;
            for (var i2 = 0, l = lines.length; i2 < l; i2++)
              width = Math.max(width, ctx.measureText(lines[i2]).width);
            ctx.font = prevFont;
            return width;
          },
          update: function() {
            if (!this._needsUpdate)
              return false;
            var project = this._project, ctx = this._context, size = this._viewSize;
            ctx.clearRect(0, 0, size.width + 1, size.height + 1);
            if (project)
              project.draw(ctx, this._matrix, this._pixelRatio);
            this._needsUpdate = false;
            return true;
          }
        });
        var Event = Base.extend({
          _class: "Event",
          initialize: function Event2(event) {
            this.event = event;
            this.type = event && event.type;
          },
          prevented: false,
          stopped: false,
          preventDefault: function() {
            this.prevented = true;
            this.event.preventDefault();
          },
          stopPropagation: function() {
            this.stopped = true;
            this.event.stopPropagation();
          },
          stop: function() {
            this.stopPropagation();
            this.preventDefault();
          },
          getTimeStamp: function() {
            return this.event.timeStamp;
          },
          getModifiers: function() {
            return Key.modifiers;
          }
        });
        var KeyEvent = Event.extend({
          _class: "KeyEvent",
          initialize: function KeyEvent2(type, event, key, character) {
            this.type = type;
            this.event = event;
            this.key = key;
            this.character = character;
          },
          toString: function() {
            return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }";
          }
        });
        var Key = new function() {
          var keyLookup = {
            "	": "tab",
            " ": "space",
            "\b": "backspace",
            "\x7F": "delete",
            "Spacebar": "space",
            "Del": "delete",
            "Win": "meta",
            "Esc": "escape"
          }, charLookup = {
            "tab": "	",
            "space": " ",
            "enter": "\r"
          }, keyMap = {}, charMap = {}, metaFixMap, downKey, modifiers = new Base({
            shift: false,
            control: false,
            alt: false,
            meta: false,
            capsLock: false,
            space: false
          }).inject({
            option: {
              get: function() {
                return this.alt;
              }
            },
            command: {
              get: function() {
                var agent = paper2 && paper2.agent;
                return agent && agent.mac ? this.meta : this.control;
              }
            }
          });
          function getKey(event) {
            var key = event.key || event.keyIdentifier;
            key = /^U\+/.test(key) ? String.fromCharCode(parseInt(key.substr(2), 16)) : /^Arrow[A-Z]/.test(key) ? key.substr(5) : key === "Unidentified" || key === undefined2 ? String.fromCharCode(event.keyCode) : key;
            return keyLookup[key] || (key.length > 1 ? Base.hyphenate(key) : key.toLowerCase());
          }
          function handleKey(down, key, character, event) {
            var type = down ? "keydown" : "keyup", view = View._focused, name;
            keyMap[key] = down;
            if (down) {
              charMap[key] = character;
            } else {
              delete charMap[key];
            }
            if (key.length > 1 && (name = Base.camelize(key)) in modifiers) {
              modifiers[name] = down;
              var agent = paper2 && paper2.agent;
              if (name === "meta" && agent && agent.mac) {
                if (down) {
                  metaFixMap = {};
                } else {
                  for (var k in metaFixMap) {
                    if (k in charMap)
                      handleKey(false, k, metaFixMap[k], event);
                  }
                  metaFixMap = null;
                }
              }
            } else if (down && metaFixMap) {
              metaFixMap[key] = character;
            }
            if (view) {
              view._handleKeyEvent(
                down ? "keydown" : "keyup",
                event,
                key,
                character
              );
            }
          }
          DomEvent.add(document2, {
            keydown: function(event) {
              var key = getKey(event), agent = paper2 && paper2.agent;
              if (key.length > 1 || agent && (agent.chrome && (event.altKey || agent.mac && event.metaKey || !agent.mac && event.ctrlKey))) {
                handleKey(
                  true,
                  key,
                  charLookup[key] || (key.length > 1 ? "" : key),
                  event
                );
              } else {
                downKey = key;
              }
            },
            keypress: function(event) {
              if (downKey) {
                var key = getKey(event), code = event.charCode, character = code >= 32 ? String.fromCharCode(code) : key.length > 1 ? "" : key;
                if (key !== downKey) {
                  key = character.toLowerCase();
                }
                handleKey(true, key, character, event);
                downKey = null;
              }
            },
            keyup: function(event) {
              var key = getKey(event);
              if (key in charMap)
                handleKey(false, key, charMap[key], event);
            }
          });
          DomEvent.add(window2, {
            blur: function(event) {
              for (var key in charMap)
                handleKey(false, key, charMap[key], event);
            }
          });
          return {
            modifiers,
            isDown: function(key) {
              return !!keyMap[key];
            }
          };
        }();
        var MouseEvent2 = Event.extend({
          _class: "MouseEvent",
          initialize: function MouseEvent3(type, event, point, target, delta) {
            this.type = type;
            this.event = event;
            this.point = point;
            this.target = target;
            this.delta = delta;
          },
          toString: function() {
            return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }";
          }
        });
        var ToolEvent = Event.extend({
          _class: "ToolEvent",
          _item: null,
          initialize: function ToolEvent2(tool, type, event) {
            this.tool = tool;
            this.type = type;
            this.event = event;
          },
          _choosePoint: function(point, toolPoint) {
            return point ? point : toolPoint ? toolPoint.clone() : null;
          },
          getPoint: function() {
            return this._choosePoint(this._point, this.tool._point);
          },
          setPoint: function(point) {
            this._point = point;
          },
          getLastPoint: function() {
            return this._choosePoint(this._lastPoint, this.tool._lastPoint);
          },
          setLastPoint: function(lastPoint) {
            this._lastPoint = lastPoint;
          },
          getDownPoint: function() {
            return this._choosePoint(this._downPoint, this.tool._downPoint);
          },
          setDownPoint: function(downPoint) {
            this._downPoint = downPoint;
          },
          getMiddlePoint: function() {
            if (!this._middlePoint && this.tool._lastPoint) {
              return this.tool._point.add(this.tool._lastPoint).divide(2);
            }
            return this._middlePoint;
          },
          setMiddlePoint: function(middlePoint) {
            this._middlePoint = middlePoint;
          },
          getDelta: function() {
            return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta;
          },
          setDelta: function(delta) {
            this._delta = delta;
          },
          getCount: function() {
            return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"];
          },
          setCount: function(count) {
            this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = count;
          },
          getItem: function() {
            if (!this._item) {
              var result = this.tool._scope.project.hitTest(this.getPoint());
              if (result) {
                var item = result.item, parent = item._parent;
                while (/^(Group|CompoundPath)$/.test(parent._class)) {
                  item = parent;
                  parent = parent._parent;
                }
                this._item = item;
              }
            }
            return this._item;
          },
          setItem: function(item) {
            this._item = item;
          },
          toString: function() {
            return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }";
          }
        });
        var Tool = PaperScopeItem.extend({
          _class: "Tool",
          _list: "tools",
          _reference: "tool",
          _events: [
            "onMouseDown",
            "onMouseUp",
            "onMouseDrag",
            "onMouseMove",
            "onActivate",
            "onDeactivate",
            "onEditOptions",
            "onKeyDown",
            "onKeyUp"
          ],
          initialize: function Tool2(props) {
            PaperScopeItem.call(this);
            this._moveCount = -1;
            this._downCount = -1;
            this.set(props);
          },
          getMinDistance: function() {
            return this._minDistance;
          },
          setMinDistance: function(minDistance) {
            this._minDistance = minDistance;
            if (minDistance != null && this._maxDistance != null && minDistance > this._maxDistance) {
              this._maxDistance = minDistance;
            }
          },
          getMaxDistance: function() {
            return this._maxDistance;
          },
          setMaxDistance: function(maxDistance) {
            this._maxDistance = maxDistance;
            if (this._minDistance != null && maxDistance != null && maxDistance < this._minDistance) {
              this._minDistance = maxDistance;
            }
          },
          getFixedDistance: function() {
            return this._minDistance == this._maxDistance ? this._minDistance : null;
          },
          setFixedDistance: function(distance) {
            this._minDistance = this._maxDistance = distance;
          },
          _handleMouseEvent: function(type, event, point, mouse) {
            paper2 = this._scope;
            if (mouse.drag && !this.responds(type))
              type = "mousemove";
            var move = mouse.move || mouse.drag, responds = this.responds(type), minDistance = this.minDistance, maxDistance = this.maxDistance, called = false, tool = this;
            function update(minDistance2, maxDistance2) {
              var pt = point, toolPoint = move ? tool._point : tool._downPoint || pt;
              if (move) {
                if (tool._moveCount >= 0 && pt.equals(toolPoint)) {
                  return false;
                }
                if (toolPoint && (minDistance2 != null || maxDistance2 != null)) {
                  var vector = pt.subtract(toolPoint), distance = vector.getLength();
                  if (distance < (minDistance2 || 0))
                    return false;
                  if (maxDistance2) {
                    pt = toolPoint.add(vector.normalize(
                      Math.min(distance, maxDistance2)
                    ));
                  }
                }
                tool._moveCount++;
              }
              tool._point = pt;
              tool._lastPoint = toolPoint || pt;
              if (mouse.down) {
                tool._moveCount = -1;
                tool._downPoint = pt;
                tool._downCount++;
              }
              return true;
            }
            function emit() {
              if (responds) {
                called = tool.emit(type, new ToolEvent(tool, type, event)) || called;
              }
            }
            if (mouse.down) {
              update();
              emit();
            } else if (mouse.up) {
              update(null, maxDistance);
              emit();
            } else if (responds) {
              while (update(minDistance, maxDistance))
                emit();
            }
            return called;
          }
        });
        var Tween = Base.extend(Emitter, {
          _class: "Tween",
          statics: {
            easings: new Base({
              linear: function(t2) {
                return t2;
              },
              easeInQuad: function(t2) {
                return t2 * t2;
              },
              easeOutQuad: function(t2) {
                return t2 * (2 - t2);
              },
              easeInOutQuad: function(t2) {
                return t2 < 0.5 ? 2 * t2 * t2 : -1 + 2 * (2 - t2) * t2;
              },
              easeInCubic: function(t2) {
                return t2 * t2 * t2;
              },
              easeOutCubic: function(t2) {
                return --t2 * t2 * t2 + 1;
              },
              easeInOutCubic: function(t2) {
                return t2 < 0.5 ? 4 * t2 * t2 * t2 : (t2 - 1) * (2 * t2 - 2) * (2 * t2 - 2) + 1;
              },
              easeInQuart: function(t2) {
                return t2 * t2 * t2 * t2;
              },
              easeOutQuart: function(t2) {
                return 1 - --t2 * t2 * t2 * t2;
              },
              easeInOutQuart: function(t2) {
                return t2 < 0.5 ? 8 * t2 * t2 * t2 * t2 : 1 - 8 * --t2 * t2 * t2 * t2;
              },
              easeInQuint: function(t2) {
                return t2 * t2 * t2 * t2 * t2;
              },
              easeOutQuint: function(t2) {
                return 1 + --t2 * t2 * t2 * t2 * t2;
              },
              easeInOutQuint: function(t2) {
                return t2 < 0.5 ? 16 * t2 * t2 * t2 * t2 * t2 : 1 + 16 * --t2 * t2 * t2 * t2 * t2;
              }
            })
          },
          initialize: function Tween2(object, from, to, duration, easing, start) {
            this.object = object;
            var type = typeof easing;
            var isFunction = type === "function";
            this.type = isFunction ? type : type === "string" ? easing : "linear";
            this.easing = isFunction ? easing : Tween2.easings[this.type];
            this.duration = duration;
            this.running = false;
            this._then = null;
            this._startTime = null;
            var state = from || to;
            this._keys = state ? Object.keys(state) : [];
            this._parsedKeys = this._parseKeys(this._keys);
            this._from = state && this._getState(from);
            this._to = state && this._getState(to);
            if (start !== false) {
              this.start();
            }
          },
          then: function(then) {
            this._then = then;
            return this;
          },
          start: function() {
            this._startTime = null;
            this.running = true;
            return this;
          },
          stop: function() {
            this.running = false;
            return this;
          },
          update: function(progress2) {
            if (this.running) {
              if (progress2 >= 1) {
                progress2 = 1;
                this.running = false;
              }
              var factor = this.easing(progress2), keys = this._keys, getValue = function(value2) {
                return typeof value2 === "function" ? value2(factor, progress2) : value2;
              };
              for (var i2 = 0, l = keys && keys.length; i2 < l; i2++) {
                var key = keys[i2], from = getValue(this._from[key]), to = getValue(this._to[key]), value = from && to && from.__add && to.__add ? to.__subtract(from).__multiply(factor).__add(from) : (to - from) * factor + from;
                this._setProperty(this._parsedKeys[key], value);
              }
              if (this.responds("update")) {
                this.emit("update", new Base({
                  progress: progress2,
                  factor
                }));
              }
              if (!this.running && this._then) {
                this._then(this.object);
              }
            }
            return this;
          },
          _events: {
            onUpdate: {}
          },
          _handleFrame: function(time) {
            var startTime = this._startTime, progress2 = startTime ? (time - startTime) / this.duration : 0;
            if (!startTime) {
              this._startTime = time;
            }
            this.update(progress2);
          },
          _getState: function(state) {
            var keys = this._keys, result = {};
            for (var i2 = 0, l = keys.length; i2 < l; i2++) {
              var key = keys[i2], path = this._parsedKeys[key], current = this._getProperty(path), value;
              if (state) {
                var resolved = this._resolveValue(current, state[key]);
                this._setProperty(path, resolved);
                value = this._getProperty(path);
                value = value && value.clone ? value.clone() : value;
                this._setProperty(path, current);
              } else {
                value = current && current.clone ? current.clone() : current;
              }
              result[key] = value;
            }
            return result;
          },
          _resolveValue: function(current, value) {
            if (value) {
              if (Array.isArray(value) && value.length === 2) {
                var operator = value[0];
                return operator && operator.match && operator.match(/^[+\-\*\/]=/) ? this._calculate(current, operator[0], value[1]) : value;
              } else if (typeof value === "string") {
                var match = value.match(/^[+\-*/]=(.*)/);
                if (match) {
                  var parsed = JSON.parse(match[1].replace(
                    /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
                    '"$2": '
                  ));
                  return this._calculate(current, value[0], parsed);
                }
              }
            }
            return value;
          },
          _calculate: function(left, operator, right) {
            return paper2.PaperScript.calculateBinary(left, operator, right);
          },
          _parseKeys: function(keys) {
            var parsed = {};
            for (var i2 = 0, l = keys.length; i2 < l; i2++) {
              var key = keys[i2], path = key.replace(/\.([^.]*)/g, "/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
              parsed[key] = path.split("/");
            }
            return parsed;
          },
          _getProperty: function(path, offset) {
            var obj = this.object;
            for (var i2 = 0, l = path.length - (offset || 0); i2 < l && obj; i2++) {
              obj = obj[path[i2]];
            }
            return obj;
          },
          _setProperty: function(path, value) {
            var dest = this._getProperty(path, 1);
            if (dest) {
              dest[path[path.length - 1]] = value;
            }
          }
        });
        var Http = {
          request: function(options) {
            var xhr = new self2.XMLHttpRequest();
            xhr.open(
              (options.method || "get").toUpperCase(),
              options.url,
              Base.pick(options.async, true)
            );
            if (options.mimeType)
              xhr.overrideMimeType(options.mimeType);
            xhr.onload = function() {
              var status = xhr.status;
              if (status === 0 || status === 200) {
                if (options.onLoad) {
                  options.onLoad.call(xhr, xhr.responseText);
                }
              } else {
                xhr.onerror();
              }
            };
            xhr.onerror = function() {
              var status = xhr.status, message = 'Could not load "' + options.url + '" (Status: ' + status + ")";
              if (options.onError) {
                options.onError(message, status);
              } else {
                throw new Error(message);
              }
            };
            return xhr.send(null);
          }
        };
        var CanvasProvider = Base.exports.CanvasProvider = {
          canvases: [],
          getCanvas: function(width, height, options) {
            if (!window2)
              return null;
            var canvas, clear2 = true;
            if (typeof width === "object") {
              height = width.height;
              width = width.width;
            }
            if (this.canvases.length) {
              canvas = this.canvases.pop();
            } else {
              canvas = document2.createElement("canvas");
              clear2 = false;
            }
            var ctx = canvas.getContext("2d", options || {});
            if (!ctx) {
              throw new Error("Canvas " + canvas + " is unable to provide a 2D context.");
            }
            if (canvas.width === width && canvas.height === height) {
              if (clear2)
                ctx.clearRect(0, 0, width + 1, height + 1);
            } else {
              canvas.width = width;
              canvas.height = height;
            }
            ctx.save();
            return canvas;
          },
          getContext: function(width, height, options) {
            var canvas = this.getCanvas(width, height, options);
            return canvas ? canvas.getContext("2d", options || {}) : null;
          },
          release: function(obj) {
            var canvas = obj && obj.canvas ? obj.canvas : obj;
            if (canvas && canvas.getContext) {
              canvas.getContext("2d").restore();
              this.canvases.push(canvas);
            }
          }
        };
        var BlendMode = new function() {
          var min = Math.min, max = Math.max, abs = Math.abs, sr, sg, sb, sa, br, bg, bb, ba, dr, dg, db;
          function getLum(r, g, b) {
            return 0.2989 * r + 0.587 * g + 0.114 * b;
          }
          function setLum(r, g, b, l) {
            var d = l - getLum(r, g, b);
            dr = r + d;
            dg = g + d;
            db = b + d;
            var l = getLum(dr, dg, db), mn = min(dr, dg, db), mx = max(dr, dg, db);
            if (mn < 0) {
              var lmn = l - mn;
              dr = l + (dr - l) * l / lmn;
              dg = l + (dg - l) * l / lmn;
              db = l + (db - l) * l / lmn;
            }
            if (mx > 255) {
              var ln = 255 - l, mxl = mx - l;
              dr = l + (dr - l) * ln / mxl;
              dg = l + (dg - l) * ln / mxl;
              db = l + (db - l) * ln / mxl;
            }
          }
          function getSat(r, g, b) {
            return max(r, g, b) - min(r, g, b);
          }
          function setSat(r, g, b, s) {
            var col = [r, g, b], mx = max(r, g, b), mn = min(r, g, b), md;
            mn = mn === r ? 0 : mn === g ? 1 : 2;
            mx = mx === r ? 0 : mx === g ? 1 : 2;
            md = min(mn, mx) === 0 ? max(mn, mx) === 1 ? 2 : 1 : 0;
            if (col[mx] > col[mn]) {
              col[md] = (col[md] - col[mn]) * s / (col[mx] - col[mn]);
              col[mx] = s;
            } else {
              col[md] = col[mx] = 0;
            }
            col[mn] = 0;
            dr = col[0];
            dg = col[1];
            db = col[2];
          }
          var modes = {
            multiply: function() {
              dr = br * sr / 255;
              dg = bg * sg / 255;
              db = bb * sb / 255;
            },
            screen: function() {
              dr = br + sr - br * sr / 255;
              dg = bg + sg - bg * sg / 255;
              db = bb + sb - bb * sb / 255;
            },
            overlay: function() {
              dr = br < 128 ? 2 * br * sr / 255 : 255 - 2 * (255 - br) * (255 - sr) / 255;
              dg = bg < 128 ? 2 * bg * sg / 255 : 255 - 2 * (255 - bg) * (255 - sg) / 255;
              db = bb < 128 ? 2 * bb * sb / 255 : 255 - 2 * (255 - bb) * (255 - sb) / 255;
            },
            "soft-light": function() {
              var t2 = sr * br / 255;
              dr = t2 + br * (255 - (255 - br) * (255 - sr) / 255 - t2) / 255;
              t2 = sg * bg / 255;
              dg = t2 + bg * (255 - (255 - bg) * (255 - sg) / 255 - t2) / 255;
              t2 = sb * bb / 255;
              db = t2 + bb * (255 - (255 - bb) * (255 - sb) / 255 - t2) / 255;
            },
            "hard-light": function() {
              dr = sr < 128 ? 2 * sr * br / 255 : 255 - 2 * (255 - sr) * (255 - br) / 255;
              dg = sg < 128 ? 2 * sg * bg / 255 : 255 - 2 * (255 - sg) * (255 - bg) / 255;
              db = sb < 128 ? 2 * sb * bb / 255 : 255 - 2 * (255 - sb) * (255 - bb) / 255;
            },
            "color-dodge": function() {
              dr = br === 0 ? 0 : sr === 255 ? 255 : min(255, 255 * br / (255 - sr));
              dg = bg === 0 ? 0 : sg === 255 ? 255 : min(255, 255 * bg / (255 - sg));
              db = bb === 0 ? 0 : sb === 255 ? 255 : min(255, 255 * bb / (255 - sb));
            },
            "color-burn": function() {
              dr = br === 255 ? 255 : sr === 0 ? 0 : max(0, 255 - (255 - br) * 255 / sr);
              dg = bg === 255 ? 255 : sg === 0 ? 0 : max(0, 255 - (255 - bg) * 255 / sg);
              db = bb === 255 ? 255 : sb === 0 ? 0 : max(0, 255 - (255 - bb) * 255 / sb);
            },
            darken: function() {
              dr = br < sr ? br : sr;
              dg = bg < sg ? bg : sg;
              db = bb < sb ? bb : sb;
            },
            lighten: function() {
              dr = br > sr ? br : sr;
              dg = bg > sg ? bg : sg;
              db = bb > sb ? bb : sb;
            },
            difference: function() {
              dr = br - sr;
              if (dr < 0)
                dr = -dr;
              dg = bg - sg;
              if (dg < 0)
                dg = -dg;
              db = bb - sb;
              if (db < 0)
                db = -db;
            },
            exclusion: function() {
              dr = br + sr * (255 - br - br) / 255;
              dg = bg + sg * (255 - bg - bg) / 255;
              db = bb + sb * (255 - bb - bb) / 255;
            },
            hue: function() {
              setSat(sr, sg, sb, getSat(br, bg, bb));
              setLum(dr, dg, db, getLum(br, bg, bb));
            },
            saturation: function() {
              setSat(br, bg, bb, getSat(sr, sg, sb));
              setLum(dr, dg, db, getLum(br, bg, bb));
            },
            luminosity: function() {
              setLum(br, bg, bb, getLum(sr, sg, sb));
            },
            color: function() {
              setLum(sr, sg, sb, getLum(br, bg, bb));
            },
            add: function() {
              dr = min(br + sr, 255);
              dg = min(bg + sg, 255);
              db = min(bb + sb, 255);
            },
            subtract: function() {
              dr = max(br - sr, 0);
              dg = max(bg - sg, 0);
              db = max(bb - sb, 0);
            },
            average: function() {
              dr = (br + sr) / 2;
              dg = (bg + sg) / 2;
              db = (bb + sb) / 2;
            },
            negation: function() {
              dr = 255 - abs(255 - sr - br);
              dg = 255 - abs(255 - sg - bg);
              db = 255 - abs(255 - sb - bb);
            }
          };
          var nativeModes = this.nativeModes = Base.each([
            "source-over",
            "source-in",
            "source-out",
            "source-atop",
            "destination-over",
            "destination-in",
            "destination-out",
            "destination-atop",
            "lighter",
            "darker",
            "copy",
            "xor"
          ], function(mode) {
            this[mode] = true;
          }, {});
          var ctx = CanvasProvider.getContext(1, 1, { willReadFrequently: true });
          if (ctx) {
            Base.each(modes, function(func, mode) {
              var darken = mode === "darken", ok = false;
              ctx.save();
              try {
                ctx.fillStyle = darken ? "#300" : "#a00";
                ctx.fillRect(0, 0, 1, 1);
                ctx.globalCompositeOperation = mode;
                if (ctx.globalCompositeOperation === mode) {
                  ctx.fillStyle = darken ? "#a00" : "#300";
                  ctx.fillRect(0, 0, 1, 1);
                  ok = ctx.getImageData(0, 0, 1, 1).data[0] !== darken ? 170 : 51;
                }
              } catch (e) {
              }
              ctx.restore();
              nativeModes[mode] = ok;
            });
            CanvasProvider.release(ctx);
          }
          this.process = function(mode, srcContext, dstContext, alpha, offset) {
            var srcCanvas = srcContext.canvas, normal = mode === "normal";
            if (normal || nativeModes[mode]) {
              dstContext.save();
              dstContext.setTransform(1, 0, 0, 1, 0, 0);
              dstContext.globalAlpha = alpha;
              if (!normal)
                dstContext.globalCompositeOperation = mode;
              dstContext.drawImage(srcCanvas, offset.x, offset.y);
              dstContext.restore();
            } else {
              var process2 = modes[mode];
              if (!process2)
                return;
              var dstData = dstContext.getImageData(
                offset.x,
                offset.y,
                srcCanvas.width,
                srcCanvas.height
              ), dst = dstData.data, src = srcContext.getImageData(
                0,
                0,
                srcCanvas.width,
                srcCanvas.height
              ).data;
              for (var i2 = 0, l = dst.length; i2 < l; i2 += 4) {
                sr = src[i2];
                br = dst[i2];
                sg = src[i2 + 1];
                bg = dst[i2 + 1];
                sb = src[i2 + 2];
                bb = dst[i2 + 2];
                sa = src[i2 + 3];
                ba = dst[i2 + 3];
                process2();
                var a1 = sa * alpha / 255, a2 = 1 - a1;
                dst[i2] = a1 * dr + a2 * br;
                dst[i2 + 1] = a1 * dg + a2 * bg;
                dst[i2 + 2] = a1 * db + a2 * bb;
                dst[i2 + 3] = sa * alpha + a2 * ba;
              }
              dstContext.putImageData(dstData, offset.x, offset.y);
            }
          };
        }();
        var SvgElement = new function() {
          var svg = "http://www.w3.org/2000/svg", xmlns = "http://www.w3.org/2000/xmlns", xlink = "http://www.w3.org/1999/xlink", attributeNamespace = {
            href: xlink,
            xlink: xmlns,
            xmlns: xmlns + "/",
            "xmlns:xlink": xmlns + "/"
          };
          function create(tag, attributes, formatter) {
            return set2(document2.createElementNS(svg, tag), attributes, formatter);
          }
          function get2(node, name) {
            var namespace = attributeNamespace[name], value = namespace ? node.getAttributeNS(namespace, name) : node.getAttribute(name);
            return value === "null" ? null : value;
          }
          function set2(node, attributes, formatter) {
            for (var name in attributes) {
              var value = attributes[name], namespace = attributeNamespace[name];
              if (typeof value === "number" && formatter)
                value = formatter.number(value);
              if (namespace) {
                node.setAttributeNS(namespace, name, value);
              } else {
                node.setAttribute(name, value);
              }
            }
            return node;
          }
          return {
            svg,
            xmlns,
            xlink,
            create,
            get: get2,
            set: set2
          };
        }();
        var SvgStyles = Base.each({
          fillColor: ["fill", "color"],
          fillRule: ["fill-rule", "string"],
          strokeColor: ["stroke", "color"],
          strokeWidth: ["stroke-width", "number"],
          strokeCap: ["stroke-linecap", "string"],
          strokeJoin: ["stroke-linejoin", "string"],
          strokeScaling: ["vector-effect", "lookup", {
            true: "none",
            false: "non-scaling-stroke"
          }, function(item, value) {
            return !value && (item instanceof PathItem || item instanceof Shape || item instanceof TextItem);
          }],
          miterLimit: ["stroke-miterlimit", "number"],
          dashArray: ["stroke-dasharray", "array"],
          dashOffset: ["stroke-dashoffset", "number"],
          fontFamily: ["font-family", "string"],
          fontWeight: ["font-weight", "string"],
          fontSize: ["font-size", "number"],
          justification: ["text-anchor", "lookup", {
            left: "start",
            center: "middle",
            right: "end"
          }],
          opacity: ["opacity", "number"],
          blendMode: ["mix-blend-mode", "style"]
        }, function(entry, key) {
          var part = Base.capitalize(key), lookup = entry[2];
          this[key] = {
            type: entry[1],
            property: key,
            attribute: entry[0],
            toSVG: lookup,
            fromSVG: lookup && Base.each(lookup, function(value, name) {
              this[value] = name;
            }, {}),
            exportFilter: entry[3],
            get: "get" + part,
            set: "set" + part
          };
        }, {});
        new function() {
          var formatter;
          function getTransform(matrix, coordinates, center) {
            var attrs = new Base(), trans = matrix.getTranslation();
            if (coordinates) {
              var point;
              if (matrix.isInvertible()) {
                matrix = matrix._shiftless();
                point = matrix._inverseTransform(trans);
                trans = null;
              } else {
                point = new Point();
              }
              attrs[center ? "cx" : "x"] = point.x;
              attrs[center ? "cy" : "y"] = point.y;
            }
            if (!matrix.isIdentity()) {
              var decomposed = matrix.decompose();
              if (decomposed) {
                var parts = [], angle = decomposed.rotation, scale = decomposed.scaling, skew = decomposed.skewing;
                if (trans && !trans.isZero())
                  parts.push("translate(" + formatter.point(trans) + ")");
                if (angle)
                  parts.push("rotate(" + formatter.number(angle) + ")");
                if (!Numerical.isZero(scale.x - 1) || !Numerical.isZero(scale.y - 1))
                  parts.push("scale(" + formatter.point(scale) + ")");
                if (skew.x)
                  parts.push("skewX(" + formatter.number(skew.x) + ")");
                if (skew.y)
                  parts.push("skewY(" + formatter.number(skew.y) + ")");
                attrs.transform = parts.join(" ");
              } else {
                attrs.transform = "matrix(" + matrix.getValues().join(",") + ")";
              }
            }
            return attrs;
          }
          function exportGroup(item, options) {
            var attrs = getTransform(item._matrix), children = item._children;
            var node = SvgElement.create("g", attrs, formatter);
            for (var i2 = 0, l = children.length; i2 < l; i2++) {
              var child = children[i2];
              var childNode = exportSVG(child, options);
              if (childNode) {
                if (child.isClipMask()) {
                  var clip = SvgElement.create("clipPath");
                  clip.appendChild(childNode);
                  setDefinition(child, clip, "clip");
                  SvgElement.set(node, {
                    "clip-path": "url(#" + clip.id + ")"
                  });
                } else {
                  node.appendChild(childNode);
                }
              }
            }
            return node;
          }
          function exportRaster(item, options) {
            var attrs = getTransform(item._matrix, true), size = item.getSize(), image = item.getImage();
            attrs.x -= size.width / 2;
            attrs.y -= size.height / 2;
            attrs.width = size.width;
            attrs.height = size.height;
            attrs.href = options.embedImages == false && image && image.src || item.toDataURL();
            return SvgElement.create("image", attrs, formatter);
          }
          function exportPath(item, options) {
            var matchShapes = options.matchShapes;
            if (matchShapes) {
              var shape = item.toShape(false);
              if (shape)
                return exportShape(shape, options);
            }
            var segments = item._segments, length = segments.length, type, attrs = getTransform(item._matrix);
            if (matchShapes && length >= 2 && !item.hasHandles()) {
              if (length > 2) {
                type = item._closed ? "polygon" : "polyline";
                var parts = [];
                for (var i2 = 0; i2 < length; i2++) {
                  parts.push(formatter.point(segments[i2]._point));
                }
                attrs.points = parts.join(" ");
              } else {
                type = "line";
                var start = segments[0]._point, end = segments[1]._point;
                attrs.set({
                  x1: start.x,
                  y1: start.y,
                  x2: end.x,
                  y2: end.y
                });
              }
            } else {
              type = "path";
              attrs.d = item.getPathData(null, options.precision);
            }
            return SvgElement.create(type, attrs, formatter);
          }
          function exportShape(item) {
            var type = item._type, radius = item._radius, attrs = getTransform(item._matrix, true, type !== "rectangle");
            if (type === "rectangle") {
              type = "rect";
              var size = item._size, width = size.width, height = size.height;
              attrs.x -= width / 2;
              attrs.y -= height / 2;
              attrs.width = width;
              attrs.height = height;
              if (radius.isZero())
                radius = null;
            }
            if (radius) {
              if (type === "circle") {
                attrs.r = radius;
              } else {
                attrs.rx = radius.width;
                attrs.ry = radius.height;
              }
            }
            return SvgElement.create(type, attrs, formatter);
          }
          function exportCompoundPath(item, options) {
            var attrs = getTransform(item._matrix);
            var data = item.getPathData(null, options.precision);
            if (data)
              attrs.d = data;
            return SvgElement.create("path", attrs, formatter);
          }
          function exportSymbolItem(item, options) {
            var attrs = getTransform(item._matrix, true), definition = item._definition, node = getDefinition(definition, "symbol"), definitionItem = definition._item, bounds = definitionItem.getStrokeBounds();
            if (!node) {
              node = SvgElement.create("symbol", {
                viewBox: formatter.rectangle(bounds)
              });
              node.appendChild(exportSVG(definitionItem, options));
              setDefinition(definition, node, "symbol");
            }
            attrs.href = "#" + node.id;
            attrs.x += bounds.x;
            attrs.y += bounds.y;
            attrs.width = bounds.width;
            attrs.height = bounds.height;
            attrs.overflow = "visible";
            return SvgElement.create("use", attrs, formatter);
          }
          function exportGradient(color) {
            var gradientNode = getDefinition(color, "color");
            if (!gradientNode) {
              var gradient = color.getGradient(), radial = gradient._radial, origin = color.getOrigin(), destination = color.getDestination(), attrs;
              if (radial) {
                attrs = {
                  cx: origin.x,
                  cy: origin.y,
                  r: origin.getDistance(destination)
                };
                var highlight = color.getHighlight();
                if (highlight) {
                  attrs.fx = highlight.x;
                  attrs.fy = highlight.y;
                }
              } else {
                attrs = {
                  x1: origin.x,
                  y1: origin.y,
                  x2: destination.x,
                  y2: destination.y
                };
              }
              attrs.gradientUnits = "userSpaceOnUse";
              gradientNode = SvgElement.create((radial ? "radial" : "linear") + "Gradient", attrs, formatter);
              var stops = gradient._stops;
              for (var i2 = 0, l = stops.length; i2 < l; i2++) {
                var stop = stops[i2], stopColor = stop._color, alpha = stopColor.getAlpha(), offset = stop._offset;
                attrs = {
                  offset: offset == null ? i2 / (l - 1) : offset
                };
                if (stopColor)
                  attrs["stop-color"] = stopColor.toCSS(true);
                if (alpha < 1)
                  attrs["stop-opacity"] = alpha;
                gradientNode.appendChild(
                  SvgElement.create("stop", attrs, formatter)
                );
              }
              setDefinition(color, gradientNode, "color");
            }
            return "url(#" + gradientNode.id + ")";
          }
          function exportText(item) {
            var node = SvgElement.create(
              "text",
              getTransform(item._matrix, true),
              formatter
            );
            node.textContent = item._content;
            return node;
          }
          var exporters = {
            Group: exportGroup,
            Layer: exportGroup,
            Raster: exportRaster,
            Path: exportPath,
            Shape: exportShape,
            CompoundPath: exportCompoundPath,
            SymbolItem: exportSymbolItem,
            PointText: exportText
          };
          function applyStyle(item, node, isRoot) {
            var attrs = {}, parent = !isRoot && item.getParent(), style = [];
            if (item._name != null)
              attrs.id = item._name;
            Base.each(SvgStyles, function(entry) {
              var get2 = entry.get, type = entry.type, value = item[get2]();
              if (entry.exportFilter ? entry.exportFilter(item, value) : !parent || !Base.equals(parent[get2](), value)) {
                if (type === "color" && value != null) {
                  var alpha = value.getAlpha();
                  if (alpha < 1)
                    attrs[entry.attribute + "-opacity"] = alpha;
                }
                if (type === "style") {
                  style.push(entry.attribute + ": " + value);
                } else {
                  attrs[entry.attribute] = value == null ? "none" : type === "color" ? value.gradient ? exportGradient(value, item) : value.toCSS(true) : type === "array" ? value.join(",") : type === "lookup" ? entry.toSVG[value] : value;
                }
              }
            });
            if (style.length)
              attrs.style = style.join(";");
            if (attrs.opacity === 1)
              delete attrs.opacity;
            if (!item._visible)
              attrs.visibility = "hidden";
            return SvgElement.set(node, attrs, formatter);
          }
          var definitions;
          function getDefinition(item, type) {
            if (!definitions)
              definitions = { ids: {}, svgs: {} };
            return item && definitions.svgs[type + "-" + (item._id || item.__id || (item.__id = UID.get("svg")))];
          }
          function setDefinition(item, node, type) {
            if (!definitions)
              getDefinition();
            var typeId = definitions.ids[type] = (definitions.ids[type] || 0) + 1;
            node.id = type + "-" + typeId;
            definitions.svgs[type + "-" + (item._id || item.__id)] = node;
          }
          function exportDefinitions(node, options) {
            var svg = node, defs = null;
            if (definitions) {
              svg = node.nodeName.toLowerCase() === "svg" && node;
              for (var i2 in definitions.svgs) {
                if (!defs) {
                  if (!svg) {
                    svg = SvgElement.create("svg");
                    svg.appendChild(node);
                  }
                  defs = svg.insertBefore(
                    SvgElement.create("defs"),
                    svg.firstChild
                  );
                }
                defs.appendChild(definitions.svgs[i2]);
              }
              definitions = null;
            }
            return options.asString ? new self2.XMLSerializer().serializeToString(svg) : svg;
          }
          function exportSVG(item, options, isRoot) {
            var exporter = exporters[item._class], node = exporter && exporter(item, options);
            if (node) {
              var onExport = options.onExport;
              if (onExport)
                node = onExport(item, node, options) || node;
              var data = JSON.stringify(item._data);
              if (data && data !== "{}" && data !== "null")
                node.setAttribute("data-paper-data", data);
            }
            return node && applyStyle(item, node, isRoot);
          }
          function setOptions(options) {
            if (!options)
              options = {};
            formatter = new Formatter(options.precision);
            return options;
          }
          Item.inject({
            exportSVG: function(options) {
              options = setOptions(options);
              return exportDefinitions(exportSVG(this, options, true), options);
            }
          });
          Project.inject({
            exportSVG: function(options) {
              options = setOptions(options);
              var children = this._children, view = this.getView(), bounds = Base.pick(options.bounds, "view"), mx = options.matrix || bounds === "view" && view._matrix, matrix = mx && Matrix.read([mx]), rect = bounds === "view" ? new Rectangle([0, 0], view.getViewSize()) : bounds === "content" ? Item._getBounds(children, matrix, { stroke: true }).rect : Rectangle.read([bounds], 0, { readNull: true }), attrs = {
                version: "1.1",
                xmlns: SvgElement.svg,
                "xmlns:xlink": SvgElement.xlink
              };
              if (rect) {
                attrs.width = rect.width;
                attrs.height = rect.height;
                if (rect.x || rect.x === 0 || rect.y || rect.y === 0)
                  attrs.viewBox = formatter.rectangle(rect);
              }
              var node = SvgElement.create("svg", attrs, formatter), parent = node;
              if (matrix && !matrix.isIdentity()) {
                parent = node.appendChild(SvgElement.create(
                  "g",
                  getTransform(matrix),
                  formatter
                ));
              }
              for (var i2 = 0, l = children.length; i2 < l; i2++) {
                parent.appendChild(exportSVG(children[i2], options, true));
              }
              return exportDefinitions(node, options);
            }
          });
        }();
        new function() {
          var definitions = {}, rootSize;
          function getValue(node, name, isString2, allowNull, allowPercent, defaultValue) {
            var value = SvgElement.get(node, name) || defaultValue, res = value == null ? allowNull ? null : isString2 ? "" : 0 : isString2 ? value : parseFloat(value);
            return /%\s*$/.test(value) ? res / 100 * (allowPercent ? 1 : rootSize[/x|^width/.test(name) ? "width" : "height"]) : res;
          }
          function getPoint(node, x, y, allowNull, allowPercent, defaultX, defaultY) {
            x = getValue(node, x || "x", false, allowNull, allowPercent, defaultX);
            y = getValue(node, y || "y", false, allowNull, allowPercent, defaultY);
            return allowNull && (x == null || y == null) ? null : new Point(x, y);
          }
          function getSize(node, w, h, allowNull, allowPercent) {
            w = getValue(node, w || "width", false, allowNull, allowPercent);
            h = getValue(node, h || "height", false, allowNull, allowPercent);
            return allowNull && (w == null || h == null) ? null : new Size(w, h);
          }
          function convertValue(value, type, lookup) {
            return value === "none" ? null : type === "number" ? parseFloat(value) : type === "array" ? value ? value.split(/[\s,]+/g).map(parseFloat) : [] : type === "color" ? getDefinition(value) || value : type === "lookup" ? lookup[value] : value;
          }
          function importGroup(node, type, options, isRoot) {
            var nodes = node.childNodes, isClip = type === "clippath", isDefs = type === "defs", item = new Group(), project = item._project, currentStyle = project._currentStyle, children = [];
            if (!isClip && !isDefs) {
              item = applyAttributes(item, node, isRoot);
              project._currentStyle = item._style.clone();
            }
            if (isRoot) {
              var defs = node.querySelectorAll("defs");
              for (var i2 = 0, l = defs.length; i2 < l; i2++) {
                importNode(defs[i2], options, false);
              }
            }
            for (var i2 = 0, l = nodes.length; i2 < l; i2++) {
              var childNode = nodes[i2], child;
              if (childNode.nodeType === 1 && !/^defs$/i.test(childNode.nodeName) && (child = importNode(childNode, options, false)) && !(child instanceof SymbolDefinition))
                children.push(child);
            }
            item.addChildren(children);
            if (isClip)
              item = applyAttributes(item.reduce(), node, isRoot);
            project._currentStyle = currentStyle;
            if (isClip || isDefs) {
              item.remove();
              item = null;
            }
            return item;
          }
          function importPoly(node, type) {
            var coords = node.getAttribute("points").match(
              /[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g
            ), points = [];
            for (var i2 = 0, l = coords.length; i2 < l; i2 += 2)
              points.push(new Point(
                parseFloat(coords[i2]),
                parseFloat(coords[i2 + 1])
              ));
            var path = new Path(points);
            if (type === "polygon")
              path.closePath();
            return path;
          }
          function importPath(node) {
            return PathItem.create(node.getAttribute("d"));
          }
          function importGradient(node, type) {
            var id = (getValue(node, "href", true) || "").substring(1), radial = type === "radialgradient", gradient;
            if (id) {
              gradient = definitions[id].getGradient();
              if (gradient._radial ^ radial) {
                gradient = gradient.clone();
                gradient._radial = radial;
              }
            } else {
              var nodes = node.childNodes, stops = [];
              for (var i2 = 0, l = nodes.length; i2 < l; i2++) {
                var child = nodes[i2];
                if (child.nodeType === 1)
                  stops.push(applyAttributes(new GradientStop(), child));
              }
              gradient = new Gradient(stops, radial);
            }
            var origin, destination, highlight, scaleToBounds = getValue(node, "gradientUnits", true) !== "userSpaceOnUse";
            if (radial) {
              origin = getPoint(
                node,
                "cx",
                "cy",
                false,
                scaleToBounds,
                "50%",
                "50%"
              );
              destination = origin.add(
                getValue(node, "r", false, false, scaleToBounds, "50%"),
                0
              );
              highlight = getPoint(node, "fx", "fy", true, scaleToBounds);
            } else {
              origin = getPoint(
                node,
                "x1",
                "y1",
                false,
                scaleToBounds,
                "0%",
                "0%"
              );
              destination = getPoint(
                node,
                "x2",
                "y2",
                false,
                scaleToBounds,
                "100%",
                "0%"
              );
            }
            var color = applyAttributes(
              new Color(gradient, origin, destination, highlight),
              node
            );
            color._scaleToBounds = scaleToBounds;
            return null;
          }
          var importers = {
            "#document": function(node, type, options, isRoot) {
              var nodes = node.childNodes;
              for (var i2 = 0, l = nodes.length; i2 < l; i2++) {
                var child = nodes[i2];
                if (child.nodeType === 1)
                  return importNode(child, options, isRoot);
              }
            },
            g: importGroup,
            svg: importGroup,
            clippath: importGroup,
            polygon: importPoly,
            polyline: importPoly,
            path: importPath,
            lineargradient: importGradient,
            radialgradient: importGradient,
            image: function(node) {
              var raster = new Raster(getValue(node, "href", true));
              raster.on("load", function() {
                var size = getSize(node);
                this.setSize(size);
                var center = getPoint(node).add(size.divide(2));
                this._matrix.append(new Matrix().translate(center));
              });
              return raster;
            },
            symbol: function(node, type, options, isRoot) {
              return new SymbolDefinition(
                importGroup(node, type, options, isRoot),
                true
              );
            },
            defs: importGroup,
            use: function(node) {
              var id = (getValue(node, "href", true) || "").substring(1), definition = definitions[id], point = getPoint(node);
              return definition ? definition instanceof SymbolDefinition ? definition.place(point) : definition.clone().translate(point) : null;
            },
            circle: function(node) {
              return new Shape.Circle(
                getPoint(node, "cx", "cy"),
                getValue(node, "r")
              );
            },
            ellipse: function(node) {
              return new Shape.Ellipse({
                center: getPoint(node, "cx", "cy"),
                radius: getSize(node, "rx", "ry")
              });
            },
            rect: function(node) {
              return new Shape.Rectangle(new Rectangle(
                getPoint(node),
                getSize(node)
              ), getSize(node, "rx", "ry"));
            },
            line: function(node) {
              return new Path.Line(
                getPoint(node, "x1", "y1"),
                getPoint(node, "x2", "y2")
              );
            },
            text: function(node) {
              var text = new PointText(getPoint(node).add(
                getPoint(node, "dx", "dy")
              ));
              text.setContent(node.textContent.trim() || "");
              return text;
            },
            switch: importGroup
          };
          function applyTransform(item, value, name, node) {
            if (item.transform) {
              var transforms = (node.getAttribute(name) || "").split(/\)\s*/g), matrix = new Matrix();
              for (var i2 = 0, l = transforms.length; i2 < l; i2++) {
                var transform = transforms[i2];
                if (!transform)
                  break;
                var parts = transform.split(/\(\s*/), command = parts[0], v = parts[1].split(/[\s,]+/g);
                for (var j = 0, m = v.length; j < m; j++)
                  v[j] = parseFloat(v[j]);
                switch (command) {
                  case "matrix":
                    matrix.append(
                      new Matrix(v[0], v[1], v[2], v[3], v[4], v[5])
                    );
                    break;
                  case "rotate":
                    matrix.rotate(v[0], v[1] || 0, v[2] || 0);
                    break;
                  case "translate":
                    matrix.translate(v[0], v[1] || 0);
                    break;
                  case "scale":
                    matrix.scale(v);
                    break;
                  case "skewX":
                    matrix.skew(v[0], 0);
                    break;
                  case "skewY":
                    matrix.skew(0, v[0]);
                    break;
                }
              }
              item.transform(matrix);
            }
          }
          function applyOpacity(item, value, name) {
            var key = name === "fill-opacity" ? "getFillColor" : "getStrokeColor", color = item[key] && item[key]();
            if (color)
              color.setAlpha(parseFloat(value));
          }
          var attributes = Base.set(Base.each(SvgStyles, function(entry) {
            this[entry.attribute] = function(item, value) {
              if (item[entry.set]) {
                item[entry.set](convertValue(value, entry.type, entry.fromSVG));
                if (entry.type === "color") {
                  var color = item[entry.get]();
                  if (color) {
                    if (color._scaleToBounds) {
                      var bounds = item.getBounds();
                      color.transform(new Matrix().translate(bounds.getPoint()).scale(bounds.getSize()));
                    }
                  }
                }
              }
            };
          }, {}), {
            id: function(item, value) {
              definitions[value] = item;
              if (item.setName)
                item.setName(value);
            },
            "clip-path": function(item, value) {
              var clip = getDefinition(value);
              if (clip) {
                clip = clip.clone();
                clip.setClipMask(true);
                if (item instanceof Group) {
                  item.insertChild(0, clip);
                } else {
                  return new Group(clip, item);
                }
              }
            },
            gradientTransform: applyTransform,
            transform: applyTransform,
            "fill-opacity": applyOpacity,
            "stroke-opacity": applyOpacity,
            visibility: function(item, value) {
              if (item.setVisible)
                item.setVisible(value === "visible");
            },
            display: function(item, value) {
              if (item.setVisible)
                item.setVisible(value !== null);
            },
            "stop-color": function(item, value) {
              if (item.setColor)
                item.setColor(value);
            },
            "stop-opacity": function(item, value) {
              if (item._color)
                item._color.setAlpha(parseFloat(value));
            },
            offset: function(item, value) {
              if (item.setOffset) {
                var percent = value.match(/(.*)%$/);
                item.setOffset(percent ? percent[1] / 100 : parseFloat(value));
              }
            },
            viewBox: function(item, value, name, node, styles) {
              var rect = new Rectangle(convertValue(value, "array")), size = getSize(node, null, null, true), group, matrix;
              if (item instanceof Group) {
                var scale = size ? size.divide(rect.getSize()) : 1, matrix = new Matrix().scale(scale).translate(rect.getPoint().negate());
                group = item;
              } else if (item instanceof SymbolDefinition) {
                if (size)
                  rect.setSize(size);
                group = item._item;
              }
              if (group) {
                if (getAttribute(node, "overflow", styles) !== "visible") {
                  var clip = new Shape.Rectangle(rect);
                  clip.setClipMask(true);
                  group.addChild(clip);
                }
                if (matrix)
                  group.transform(matrix);
              }
            }
          });
          function getAttribute(node, name, styles) {
            var attr3 = node.attributes[name], value = attr3 && attr3.value;
            if (!value && node.style) {
              var style = Base.camelize(name);
              value = node.style[style];
              if (!value && styles.node[style] !== styles.parent[style])
                value = styles.node[style];
            }
            return !value ? undefined2 : value === "none" ? null : value;
          }
          function applyAttributes(item, node, isRoot) {
            var parent = node.parentNode, styles = {
              node: DomElement.getStyles(node) || {},
              parent: !isRoot && !/^defs$/i.test(parent.tagName) && DomElement.getStyles(parent) || {}
            };
            Base.each(attributes, function(apply, name) {
              var value = getAttribute(node, name, styles);
              item = value !== undefined2 && apply(item, value, name, node, styles) || item;
            });
            return item;
          }
          function getDefinition(value) {
            var match = value && value.match(/\((?:["'#]*)([^"')]+)/), name = match && match[1], res = name && definitions[window2 ? name.replace(window2.location.href.split("#")[0] + "#", "") : name];
            if (res && res._scaleToBounds) {
              res = res.clone();
              res._scaleToBounds = true;
            }
            return res;
          }
          function importNode(node, options, isRoot) {
            var type = node.nodeName.toLowerCase(), isElement = type !== "#document", body = document2.body, container, parent, next;
            if (isRoot && isElement) {
              rootSize = paper2.getView().getSize();
              rootSize = getSize(node, null, null, true) || rootSize;
              container = SvgElement.create("svg", {
                style: "stroke-width: 1px; stroke-miterlimit: 10"
              });
              parent = node.parentNode;
              next = node.nextSibling;
              container.appendChild(node);
              body.appendChild(container);
            }
            var settings = paper2.settings, applyMatrix = settings.applyMatrix, insertItems = settings.insertItems;
            settings.applyMatrix = false;
            settings.insertItems = false;
            var importer = importers[type], item = importer && importer(node, type, options, isRoot) || null;
            settings.insertItems = insertItems;
            settings.applyMatrix = applyMatrix;
            if (item) {
              if (isElement && !(item instanceof Group))
                item = applyAttributes(item, node, isRoot);
              var onImport = options.onImport, data = isElement && node.getAttribute("data-paper-data");
              if (onImport)
                item = onImport(node, item, options) || item;
              if (options.expandShapes && item instanceof Shape) {
                item.remove();
                item = item.toPath();
              }
              if (data)
                item._data = JSON.parse(data);
            }
            if (container) {
              body.removeChild(container);
              if (parent) {
                if (next) {
                  parent.insertBefore(node, next);
                } else {
                  parent.appendChild(node);
                }
              }
            }
            if (isRoot) {
              definitions = {};
              if (item && Base.pick(options.applyMatrix, applyMatrix))
                item.matrix.apply(true, true);
            }
            return item;
          }
          function importSVG(source, options, owner) {
            if (!source)
              return null;
            options = typeof options === "function" ? { onLoad: options } : options || {};
            var scope = paper2, item = null;
            function onLoad(svg) {
              try {
                var node2 = typeof svg === "object" ? svg : new self2.DOMParser().parseFromString(
                  svg.trim(),
                  "image/svg+xml"
                );
                if (!node2.nodeName) {
                  node2 = null;
                  throw new Error("Unsupported SVG source: " + source);
                }
                paper2 = scope;
                item = importNode(node2, options, true);
                if (!options || options.insert !== false) {
                  owner._insertItem(undefined2, item);
                }
                var onLoad2 = options.onLoad;
                if (onLoad2)
                  onLoad2(item, svg);
              } catch (e) {
                onError(e);
              }
            }
            function onError(message, status) {
              var onError2 = options.onError;
              if (onError2) {
                onError2(message, status);
              } else {
                throw new Error(message);
              }
            }
            if (typeof source === "string" && !/^[\s\S]*</.test(source)) {
              var node = document2.getElementById(source);
              if (node) {
                onLoad(node);
              } else {
                Http.request({
                  url: source,
                  async: true,
                  onLoad,
                  onError
                });
              }
            } else if (typeof File !== "undefined" && source instanceof File) {
              var reader = new FileReader();
              reader.onload = function() {
                onLoad(reader.result);
              };
              reader.onerror = function() {
                onError(reader.error);
              };
              return reader.readAsText(source);
            } else {
              onLoad(source);
            }
            return item;
          }
          Item.inject({
            importSVG: function(node, options) {
              return importSVG(node, options, this);
            }
          });
          Project.inject({
            importSVG: function(node, options) {
              this.activate();
              return importSVG(node, options, this);
            }
          });
        }();
        Base.exports.PaperScript = function() {
          var global = this, acorn = global.acorn;
          if (!acorn && typeof __require !== "undefined") {
            try {
              acorn = __require("acorn");
            } catch (e) {
            }
          }
          if (!acorn) {
            var exports2, module2;
            acorn = exports2 = module2 = {};
            (function(root, mod) {
              if (typeof exports2 == "object" && typeof module2 == "object")
                return mod(exports2);
              if (typeof define == "function" && define.amd)
                return define(["exports"], mod);
              mod(root.acorn || (root.acorn = {}));
            })(this, function(exports3) {
              "use strict";
              exports3.version = "0.5.0";
              var options, input2, inputLen, sourceFile;
              exports3.parse = function(inpt, opts) {
                input2 = String(inpt);
                inputLen = input2.length;
                setOptions(opts);
                initTokenState();
                return parseTopLevel(options.program);
              };
              var defaultOptions = exports3.defaultOptions = {
                ecmaVersion: 5,
                strictSemicolons: false,
                allowTrailingCommas: true,
                forbidReserved: false,
                allowReturnOutsideFunction: false,
                locations: false,
                onComment: null,
                ranges: false,
                program: null,
                sourceFile: null,
                directSourceFile: null
              };
              function setOptions(opts) {
                options = opts || {};
                for (var opt in defaultOptions)
                  if (!Object.prototype.hasOwnProperty.call(options, opt))
                    options[opt] = defaultOptions[opt];
                sourceFile = options.sourceFile || null;
              }
              var getLineInfo = exports3.getLineInfo = function(input3, offset) {
                for (var line = 1, cur = 0; ; ) {
                  lineBreak.lastIndex = cur;
                  var match = lineBreak.exec(input3);
                  if (match && match.index < offset) {
                    ++line;
                    cur = match.index + match[0].length;
                  } else
                    break;
                }
                return { line, column: offset - cur };
              };
              exports3.tokenize = function(inpt, opts) {
                input2 = String(inpt);
                inputLen = input2.length;
                setOptions(opts);
                initTokenState();
                var t2 = {};
                function getToken(forceRegexp) {
                  lastEnd = tokEnd;
                  readToken(forceRegexp);
                  t2.start = tokStart;
                  t2.end = tokEnd;
                  t2.startLoc = tokStartLoc;
                  t2.endLoc = tokEndLoc;
                  t2.type = tokType;
                  t2.value = tokVal;
                  return t2;
                }
                getToken.jumpTo = function(pos, reAllowed) {
                  tokPos = pos;
                  if (options.locations) {
                    tokCurLine = 1;
                    tokLineStart = lineBreak.lastIndex = 0;
                    var match;
                    while ((match = lineBreak.exec(input2)) && match.index < pos) {
                      ++tokCurLine;
                      tokLineStart = match.index + match[0].length;
                    }
                  }
                  tokRegexpAllowed = reAllowed;
                  skipSpace();
                };
                return getToken;
              };
              var tokPos;
              var tokStart, tokEnd;
              var tokStartLoc, tokEndLoc;
              var tokType, tokVal;
              var tokRegexpAllowed;
              var tokCurLine, tokLineStart;
              var lastStart, lastEnd, lastEndLoc;
              var inFunction, labels, strict;
              function raise(pos, message) {
                var loc = getLineInfo(input2, pos);
                message += " (" + loc.line + ":" + loc.column + ")";
                var err = new SyntaxError(message);
                err.pos = pos;
                err.loc = loc;
                err.raisedAt = tokPos;
                throw err;
              }
              var empty = [];
              var _num = { type: "num" }, _regexp = { type: "regexp" }, _string = { type: "string" };
              var _name = { type: "name" }, _eof = { type: "eof" };
              var _break = { keyword: "break" }, _case = { keyword: "case", beforeExpr: true }, _catch = { keyword: "catch" };
              var _continue = { keyword: "continue" }, _debugger = { keyword: "debugger" }, _default = { keyword: "default" };
              var _do = { keyword: "do", isLoop: true }, _else = { keyword: "else", beforeExpr: true };
              var _finally = { keyword: "finally" }, _for = { keyword: "for", isLoop: true }, _function = { keyword: "function" };
              var _if = { keyword: "if" }, _return = { keyword: "return", beforeExpr: true }, _switch = { keyword: "switch" };
              var _throw = { keyword: "throw", beforeExpr: true }, _try = { keyword: "try" }, _var = { keyword: "var" };
              var _while = { keyword: "while", isLoop: true }, _with = { keyword: "with" }, _new = { keyword: "new", beforeExpr: true };
              var _this = { keyword: "this" };
              var _null = { keyword: "null", atomValue: null }, _true = { keyword: "true", atomValue: true };
              var _false = { keyword: "false", atomValue: false };
              var _in = { keyword: "in", binop: 7, beforeExpr: true };
              var keywordTypes = {
                "break": _break,
                "case": _case,
                "catch": _catch,
                "continue": _continue,
                "debugger": _debugger,
                "default": _default,
                "do": _do,
                "else": _else,
                "finally": _finally,
                "for": _for,
                "function": _function,
                "if": _if,
                "return": _return,
                "switch": _switch,
                "throw": _throw,
                "try": _try,
                "var": _var,
                "while": _while,
                "with": _with,
                "null": _null,
                "true": _true,
                "false": _false,
                "new": _new,
                "in": _in,
                "instanceof": { keyword: "instanceof", binop: 7, beforeExpr: true },
                "this": _this,
                "typeof": { keyword: "typeof", prefix: true, beforeExpr: true },
                "void": { keyword: "void", prefix: true, beforeExpr: true },
                "delete": { keyword: "delete", prefix: true, beforeExpr: true }
              };
              var _bracketL = { type: "[", beforeExpr: true }, _bracketR = { type: "]" }, _braceL = { type: "{", beforeExpr: true };
              var _braceR = { type: "}" }, _parenL = { type: "(", beforeExpr: true }, _parenR = { type: ")" };
              var _comma = { type: ",", beforeExpr: true }, _semi = { type: ";", beforeExpr: true };
              var _colon = { type: ":", beforeExpr: true }, _dot = { type: "." }, _question = { type: "?", beforeExpr: true };
              var _slash = { binop: 10, beforeExpr: true }, _eq = { isAssign: true, beforeExpr: true };
              var _assign = { isAssign: true, beforeExpr: true };
              var _incDec = { postfix: true, prefix: true, isUpdate: true }, _prefix = { prefix: true, beforeExpr: true };
              var _logicalOR = { binop: 1, beforeExpr: true };
              var _logicalAND = { binop: 2, beforeExpr: true };
              var _bitwiseOR = { binop: 3, beforeExpr: true };
              var _bitwiseXOR = { binop: 4, beforeExpr: true };
              var _bitwiseAND = { binop: 5, beforeExpr: true };
              var _equality = { binop: 6, beforeExpr: true };
              var _relational = { binop: 7, beforeExpr: true };
              var _bitShift = { binop: 8, beforeExpr: true };
              var _plusMin = { binop: 9, prefix: true, beforeExpr: true };
              var _multiplyModulo = { binop: 10, beforeExpr: true };
              exports3.tokTypes = {
                bracketL: _bracketL,
                bracketR: _bracketR,
                braceL: _braceL,
                braceR: _braceR,
                parenL: _parenL,
                parenR: _parenR,
                comma: _comma,
                semi: _semi,
                colon: _colon,
                dot: _dot,
                question: _question,
                slash: _slash,
                eq: _eq,
                name: _name,
                eof: _eof,
                num: _num,
                regexp: _regexp,
                string: _string
              };
              for (var kw in keywordTypes)
                exports3.tokTypes["_" + kw] = keywordTypes[kw];
              function makePredicate(words) {
                words = words.split(" ");
                var f = "", cats = [];
                out:
                  for (var i2 = 0; i2 < words.length; ++i2) {
                    for (var j = 0; j < cats.length; ++j)
                      if (cats[j][0].length == words[i2].length) {
                        cats[j].push(words[i2]);
                        continue out;
                      }
                    cats.push([words[i2]]);
                  }
                function compareTo(arr) {
                  if (arr.length == 1)
                    return f += "return str === " + JSON.stringify(arr[0]) + ";";
                  f += "switch(str){";
                  for (var i3 = 0; i3 < arr.length; ++i3)
                    f += "case " + JSON.stringify(arr[i3]) + ":";
                  f += "return true}return false;";
                }
                if (cats.length > 3) {
                  cats.sort(function(a, b) {
                    return b.length - a.length;
                  });
                  f += "switch(str.length){";
                  for (var i2 = 0; i2 < cats.length; ++i2) {
                    var cat = cats[i2];
                    f += "case " + cat[0].length + ":";
                    compareTo(cat);
                  }
                  f += "}";
                } else {
                  compareTo(words);
                }
                return new Function("str", f);
              }
              var isReservedWord3 = makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");
              var isReservedWord5 = makePredicate("class enum extends super const export import");
              var isStrictReservedWord = makePredicate("implements interface let package private protected public static yield");
              var isStrictBadIdWord = makePredicate("eval arguments");
              var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");
              var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
              var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
              var nonASCIIidentifierChars = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
              var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
              var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
              var newline = /[\n\r\u2028\u2029]/;
              var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;
              var isIdentifierStart = exports3.isIdentifierStart = function(code) {
                if (code < 65)
                  return code === 36;
                if (code < 91)
                  return true;
                if (code < 97)
                  return code === 95;
                if (code < 123)
                  return true;
                return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
              };
              var isIdentifierChar = exports3.isIdentifierChar = function(code) {
                if (code < 48)
                  return code === 36;
                if (code < 58)
                  return true;
                if (code < 65)
                  return false;
                if (code < 91)
                  return true;
                if (code < 97)
                  return code === 95;
                if (code < 123)
                  return true;
                return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
              };
              function line_loc_t() {
                this.line = tokCurLine;
                this.column = tokPos - tokLineStart;
              }
              function initTokenState() {
                tokCurLine = 1;
                tokPos = tokLineStart = 0;
                tokRegexpAllowed = true;
                skipSpace();
              }
              function finishToken(type, val) {
                tokEnd = tokPos;
                if (options.locations)
                  tokEndLoc = new line_loc_t();
                tokType = type;
                skipSpace();
                tokVal = val;
                tokRegexpAllowed = type.beforeExpr;
              }
              function skipBlockComment() {
                var startLoc = options.onComment && options.locations && new line_loc_t();
                var start = tokPos, end = input2.indexOf("*/", tokPos += 2);
                if (end === -1)
                  raise(tokPos - 2, "Unterminated comment");
                tokPos = end + 2;
                if (options.locations) {
                  lineBreak.lastIndex = start;
                  var match;
                  while ((match = lineBreak.exec(input2)) && match.index < tokPos) {
                    ++tokCurLine;
                    tokLineStart = match.index + match[0].length;
                  }
                }
                if (options.onComment)
                  options.onComment(
                    true,
                    input2.slice(start + 2, end),
                    start,
                    tokPos,
                    startLoc,
                    options.locations && new line_loc_t()
                  );
              }
              function skipLineComment() {
                var start = tokPos;
                var startLoc = options.onComment && options.locations && new line_loc_t();
                var ch = input2.charCodeAt(tokPos += 2);
                while (tokPos < inputLen && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
                  ++tokPos;
                  ch = input2.charCodeAt(tokPos);
                }
                if (options.onComment)
                  options.onComment(
                    false,
                    input2.slice(start + 2, tokPos),
                    start,
                    tokPos,
                    startLoc,
                    options.locations && new line_loc_t()
                  );
              }
              function skipSpace() {
                while (tokPos < inputLen) {
                  var ch = input2.charCodeAt(tokPos);
                  if (ch === 32) {
                    ++tokPos;
                  } else if (ch === 13) {
                    ++tokPos;
                    var next2 = input2.charCodeAt(tokPos);
                    if (next2 === 10) {
                      ++tokPos;
                    }
                    if (options.locations) {
                      ++tokCurLine;
                      tokLineStart = tokPos;
                    }
                  } else if (ch === 10 || ch === 8232 || ch === 8233) {
                    ++tokPos;
                    if (options.locations) {
                      ++tokCurLine;
                      tokLineStart = tokPos;
                    }
                  } else if (ch > 8 && ch < 14) {
                    ++tokPos;
                  } else if (ch === 47) {
                    var next2 = input2.charCodeAt(tokPos + 1);
                    if (next2 === 42) {
                      skipBlockComment();
                    } else if (next2 === 47) {
                      skipLineComment();
                    } else
                      break;
                  } else if (ch === 160) {
                    ++tokPos;
                  } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                    ++tokPos;
                  } else {
                    break;
                  }
                }
              }
              function readToken_dot() {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (next2 >= 48 && next2 <= 57)
                  return readNumber(true);
                ++tokPos;
                return finishToken(_dot);
              }
              function readToken_slash() {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (tokRegexpAllowed) {
                  ++tokPos;
                  return readRegexp();
                }
                if (next2 === 61)
                  return finishOp(_assign, 2);
                return finishOp(_slash, 1);
              }
              function readToken_mult_modulo() {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (next2 === 61)
                  return finishOp(_assign, 2);
                return finishOp(_multiplyModulo, 1);
              }
              function readToken_pipe_amp(code) {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (next2 === code)
                  return finishOp(code === 124 ? _logicalOR : _logicalAND, 2);
                if (next2 === 61)
                  return finishOp(_assign, 2);
                return finishOp(code === 124 ? _bitwiseOR : _bitwiseAND, 1);
              }
              function readToken_caret() {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (next2 === 61)
                  return finishOp(_assign, 2);
                return finishOp(_bitwiseXOR, 1);
              }
              function readToken_plus_min(code) {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (next2 === code) {
                  if (next2 == 45 && input2.charCodeAt(tokPos + 2) == 62 && newline.test(input2.slice(lastEnd, tokPos))) {
                    tokPos += 3;
                    skipLineComment();
                    skipSpace();
                    return readToken();
                  }
                  return finishOp(_incDec, 2);
                }
                if (next2 === 61)
                  return finishOp(_assign, 2);
                return finishOp(_plusMin, 1);
              }
              function readToken_lt_gt(code) {
                var next2 = input2.charCodeAt(tokPos + 1);
                var size = 1;
                if (next2 === code) {
                  size = code === 62 && input2.charCodeAt(tokPos + 2) === 62 ? 3 : 2;
                  if (input2.charCodeAt(tokPos + size) === 61)
                    return finishOp(_assign, size + 1);
                  return finishOp(_bitShift, size);
                }
                if (next2 == 33 && code == 60 && input2.charCodeAt(tokPos + 2) == 45 && input2.charCodeAt(tokPos + 3) == 45) {
                  tokPos += 4;
                  skipLineComment();
                  skipSpace();
                  return readToken();
                }
                if (next2 === 61)
                  size = input2.charCodeAt(tokPos + 2) === 61 ? 3 : 2;
                return finishOp(_relational, size);
              }
              function readToken_eq_excl(code) {
                var next2 = input2.charCodeAt(tokPos + 1);
                if (next2 === 61)
                  return finishOp(_equality, input2.charCodeAt(tokPos + 2) === 61 ? 3 : 2);
                return finishOp(code === 61 ? _eq : _prefix, 1);
              }
              function getTokenFromCode(code) {
                switch (code) {
                  case 46:
                    return readToken_dot();
                  case 40:
                    ++tokPos;
                    return finishToken(_parenL);
                  case 41:
                    ++tokPos;
                    return finishToken(_parenR);
                  case 59:
                    ++tokPos;
                    return finishToken(_semi);
                  case 44:
                    ++tokPos;
                    return finishToken(_comma);
                  case 91:
                    ++tokPos;
                    return finishToken(_bracketL);
                  case 93:
                    ++tokPos;
                    return finishToken(_bracketR);
                  case 123:
                    ++tokPos;
                    return finishToken(_braceL);
                  case 125:
                    ++tokPos;
                    return finishToken(_braceR);
                  case 58:
                    ++tokPos;
                    return finishToken(_colon);
                  case 63:
                    ++tokPos;
                    return finishToken(_question);
                  case 48:
                    var next2 = input2.charCodeAt(tokPos + 1);
                    if (next2 === 120 || next2 === 88)
                      return readHexNumber();
                  case 49:
                  case 50:
                  case 51:
                  case 52:
                  case 53:
                  case 54:
                  case 55:
                  case 56:
                  case 57:
                    return readNumber(false);
                  case 34:
                  case 39:
                    return readString(code);
                  case 47:
                    return readToken_slash(code);
                  case 37:
                  case 42:
                    return readToken_mult_modulo();
                  case 124:
                  case 38:
                    return readToken_pipe_amp(code);
                  case 94:
                    return readToken_caret();
                  case 43:
                  case 45:
                    return readToken_plus_min(code);
                  case 60:
                  case 62:
                    return readToken_lt_gt(code);
                  case 61:
                  case 33:
                    return readToken_eq_excl(code);
                  case 126:
                    return finishOp(_prefix, 1);
                }
                return false;
              }
              function readToken(forceRegexp) {
                if (!forceRegexp)
                  tokStart = tokPos;
                else
                  tokPos = tokStart + 1;
                if (options.locations)
                  tokStartLoc = new line_loc_t();
                if (forceRegexp)
                  return readRegexp();
                if (tokPos >= inputLen)
                  return finishToken(_eof);
                var code = input2.charCodeAt(tokPos);
                if (isIdentifierStart(code) || code === 92)
                  return readWord();
                var tok = getTokenFromCode(code);
                if (tok === false) {
                  var ch = String.fromCharCode(code);
                  if (ch === "\\" || nonASCIIidentifierStart.test(ch))
                    return readWord();
                  raise(tokPos, "Unexpected character '" + ch + "'");
                }
                return tok;
              }
              function finishOp(type, size) {
                var str = input2.slice(tokPos, tokPos + size);
                tokPos += size;
                finishToken(type, str);
              }
              function readRegexp() {
                var content = "", escaped, inClass, start = tokPos;
                for (; ; ) {
                  if (tokPos >= inputLen)
                    raise(start, "Unterminated regular expression");
                  var ch = input2.charAt(tokPos);
                  if (newline.test(ch))
                    raise(start, "Unterminated regular expression");
                  if (!escaped) {
                    if (ch === "[")
                      inClass = true;
                    else if (ch === "]" && inClass)
                      inClass = false;
                    else if (ch === "/" && !inClass)
                      break;
                    escaped = ch === "\\";
                  } else
                    escaped = false;
                  ++tokPos;
                }
                var content = input2.slice(start, tokPos);
                ++tokPos;
                var mods = readWord1();
                if (mods && !/^[gmsiy]*$/.test(mods))
                  raise(start, "Invalid regexp flag");
                try {
                  var value = new RegExp(content, mods);
                } catch (e) {
                  if (e instanceof SyntaxError)
                    raise(start, e.message);
                  raise(e);
                }
                return finishToken(_regexp, value);
              }
              function readInt(radix, len) {
                var start = tokPos, total = 0;
                for (var i2 = 0, e = len == null ? Infinity : len; i2 < e; ++i2) {
                  var code = input2.charCodeAt(tokPos), val;
                  if (code >= 97)
                    val = code - 97 + 10;
                  else if (code >= 65)
                    val = code - 65 + 10;
                  else if (code >= 48 && code <= 57)
                    val = code - 48;
                  else
                    val = Infinity;
                  if (val >= radix)
                    break;
                  ++tokPos;
                  total = total * radix + val;
                }
                if (tokPos === start || len != null && tokPos - start !== len)
                  return null;
                return total;
              }
              function readHexNumber() {
                tokPos += 2;
                var val = readInt(16);
                if (val == null)
                  raise(tokStart + 2, "Expected hexadecimal number");
                if (isIdentifierStart(input2.charCodeAt(tokPos)))
                  raise(tokPos, "Identifier directly after number");
                return finishToken(_num, val);
              }
              function readNumber(startsWithDot) {
                var start = tokPos, isFloat = false, octal = input2.charCodeAt(tokPos) === 48;
                if (!startsWithDot && readInt(10) === null)
                  raise(start, "Invalid number");
                if (input2.charCodeAt(tokPos) === 46) {
                  ++tokPos;
                  readInt(10);
                  isFloat = true;
                }
                var next2 = input2.charCodeAt(tokPos);
                if (next2 === 69 || next2 === 101) {
                  next2 = input2.charCodeAt(++tokPos);
                  if (next2 === 43 || next2 === 45)
                    ++tokPos;
                  if (readInt(10) === null)
                    raise(start, "Invalid number");
                  isFloat = true;
                }
                if (isIdentifierStart(input2.charCodeAt(tokPos)))
                  raise(tokPos, "Identifier directly after number");
                var str = input2.slice(start, tokPos), val;
                if (isFloat)
                  val = parseFloat(str);
                else if (!octal || str.length === 1)
                  val = parseInt(str, 10);
                else if (/[89]/.test(str) || strict)
                  raise(start, "Invalid number");
                else
                  val = parseInt(str, 8);
                return finishToken(_num, val);
              }
              function readString(quote) {
                tokPos++;
                var out = "";
                for (; ; ) {
                  if (tokPos >= inputLen)
                    raise(tokStart, "Unterminated string constant");
                  var ch = input2.charCodeAt(tokPos);
                  if (ch === quote) {
                    ++tokPos;
                    return finishToken(_string, out);
                  }
                  if (ch === 92) {
                    ch = input2.charCodeAt(++tokPos);
                    var octal = /^[0-7]+/.exec(input2.slice(tokPos, tokPos + 3));
                    if (octal)
                      octal = octal[0];
                    while (octal && parseInt(octal, 8) > 255)
                      octal = octal.slice(0, -1);
                    if (octal === "0")
                      octal = null;
                    ++tokPos;
                    if (octal) {
                      if (strict)
                        raise(tokPos - 2, "Octal literal in strict mode");
                      out += String.fromCharCode(parseInt(octal, 8));
                      tokPos += octal.length - 1;
                    } else {
                      switch (ch) {
                        case 110:
                          out += "\n";
                          break;
                        case 114:
                          out += "\r";
                          break;
                        case 120:
                          out += String.fromCharCode(readHexChar(2));
                          break;
                        case 117:
                          out += String.fromCharCode(readHexChar(4));
                          break;
                        case 85:
                          out += String.fromCharCode(readHexChar(8));
                          break;
                        case 116:
                          out += "	";
                          break;
                        case 98:
                          out += "\b";
                          break;
                        case 118:
                          out += "\v";
                          break;
                        case 102:
                          out += "\f";
                          break;
                        case 48:
                          out += "\0";
                          break;
                        case 13:
                          if (input2.charCodeAt(tokPos) === 10)
                            ++tokPos;
                        case 10:
                          if (options.locations) {
                            tokLineStart = tokPos;
                            ++tokCurLine;
                          }
                          break;
                        default:
                          out += String.fromCharCode(ch);
                          break;
                      }
                    }
                  } else {
                    if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233)
                      raise(tokStart, "Unterminated string constant");
                    out += String.fromCharCode(ch);
                    ++tokPos;
                  }
                }
              }
              function readHexChar(len) {
                var n = readInt(16, len);
                if (n === null)
                  raise(tokStart, "Bad character escape sequence");
                return n;
              }
              var containsEsc;
              function readWord1() {
                containsEsc = false;
                var word, first = true, start = tokPos;
                for (; ; ) {
                  var ch = input2.charCodeAt(tokPos);
                  if (isIdentifierChar(ch)) {
                    if (containsEsc)
                      word += input2.charAt(tokPos);
                    ++tokPos;
                  } else if (ch === 92) {
                    if (!containsEsc)
                      word = input2.slice(start, tokPos);
                    containsEsc = true;
                    if (input2.charCodeAt(++tokPos) != 117)
                      raise(tokPos, "Expecting Unicode escape sequence \\uXXXX");
                    ++tokPos;
                    var esc = readHexChar(4);
                    var escStr = String.fromCharCode(esc);
                    if (!escStr)
                      raise(tokPos - 1, "Invalid Unicode escape");
                    if (!(first ? isIdentifierStart(esc) : isIdentifierChar(esc)))
                      raise(tokPos - 4, "Invalid Unicode escape");
                    word += escStr;
                  } else {
                    break;
                  }
                  first = false;
                }
                return containsEsc ? word : input2.slice(start, tokPos);
              }
              function readWord() {
                var word = readWord1();
                var type = _name;
                if (!containsEsc && isKeyword(word))
                  type = keywordTypes[word];
                return finishToken(type, word);
              }
              function next() {
                lastStart = tokStart;
                lastEnd = tokEnd;
                lastEndLoc = tokEndLoc;
                readToken();
              }
              function setStrict(strct) {
                strict = strct;
                tokPos = tokStart;
                if (options.locations) {
                  while (tokPos < tokLineStart) {
                    tokLineStart = input2.lastIndexOf("\n", tokLineStart - 2) + 1;
                    --tokCurLine;
                  }
                }
                skipSpace();
                readToken();
              }
              function node_t() {
                this.type = null;
                this.start = tokStart;
                this.end = null;
              }
              function node_loc_t() {
                this.start = tokStartLoc;
                this.end = null;
                if (sourceFile !== null)
                  this.source = sourceFile;
              }
              function startNode() {
                var node = new node_t();
                if (options.locations)
                  node.loc = new node_loc_t();
                if (options.directSourceFile)
                  node.sourceFile = options.directSourceFile;
                if (options.ranges)
                  node.range = [tokStart, 0];
                return node;
              }
              function startNodeFrom(other) {
                var node = new node_t();
                node.start = other.start;
                if (options.locations) {
                  node.loc = new node_loc_t();
                  node.loc.start = other.loc.start;
                }
                if (options.ranges)
                  node.range = [other.range[0], 0];
                return node;
              }
              function finishNode(node, type) {
                node.type = type;
                node.end = lastEnd;
                if (options.locations)
                  node.loc.end = lastEndLoc;
                if (options.ranges)
                  node.range[1] = lastEnd;
                return node;
              }
              function isUseStrict(stmt) {
                return options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
              }
              function eat(type) {
                if (tokType === type) {
                  next();
                  return true;
                }
              }
              function canInsertSemicolon() {
                return !options.strictSemicolons && (tokType === _eof || tokType === _braceR || newline.test(input2.slice(lastEnd, tokStart)));
              }
              function semicolon() {
                if (!eat(_semi) && !canInsertSemicolon())
                  unexpected();
              }
              function expect(type) {
                if (tokType === type)
                  next();
                else
                  unexpected();
              }
              function unexpected() {
                raise(tokStart, "Unexpected token");
              }
              function checkLVal(expr) {
                if (expr.type !== "Identifier" && expr.type !== "MemberExpression")
                  raise(expr.start, "Assigning to rvalue");
                if (strict && expr.type === "Identifier" && isStrictBadIdWord(expr.name))
                  raise(expr.start, "Assigning to " + expr.name + " in strict mode");
              }
              function parseTopLevel(program) {
                lastStart = lastEnd = tokPos;
                if (options.locations)
                  lastEndLoc = new line_loc_t();
                inFunction = strict = null;
                labels = [];
                readToken();
                var node = program || startNode(), first = true;
                if (!program)
                  node.body = [];
                while (tokType !== _eof) {
                  var stmt = parseStatement();
                  node.body.push(stmt);
                  if (first && isUseStrict(stmt))
                    setStrict(true);
                  first = false;
                }
                return finishNode(node, "Program");
              }
              var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
              function parseStatement() {
                if (tokType === _slash || tokType === _assign && tokVal == "/=")
                  readToken(true);
                var starttype = tokType, node = startNode();
                switch (starttype) {
                  case _break:
                  case _continue:
                    next();
                    var isBreak = starttype === _break;
                    if (eat(_semi) || canInsertSemicolon())
                      node.label = null;
                    else if (tokType !== _name)
                      unexpected();
                    else {
                      node.label = parseIdent();
                      semicolon();
                    }
                    for (var i2 = 0; i2 < labels.length; ++i2) {
                      var lab = labels[i2];
                      if (node.label == null || lab.name === node.label.name) {
                        if (lab.kind != null && (isBreak || lab.kind === "loop"))
                          break;
                        if (node.label && isBreak)
                          break;
                      }
                    }
                    if (i2 === labels.length)
                      raise(node.start, "Unsyntactic " + starttype.keyword);
                    return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
                  case _debugger:
                    next();
                    semicolon();
                    return finishNode(node, "DebuggerStatement");
                  case _do:
                    next();
                    labels.push(loopLabel);
                    node.body = parseStatement();
                    labels.pop();
                    expect(_while);
                    node.test = parseParenExpression();
                    semicolon();
                    return finishNode(node, "DoWhileStatement");
                  case _for:
                    next();
                    labels.push(loopLabel);
                    expect(_parenL);
                    if (tokType === _semi)
                      return parseFor(node, null);
                    if (tokType === _var) {
                      var init = startNode();
                      next();
                      parseVar(init, true);
                      finishNode(init, "VariableDeclaration");
                      if (init.declarations.length === 1 && eat(_in))
                        return parseForIn(node, init);
                      return parseFor(node, init);
                    }
                    var init = parseExpression(false, true);
                    if (eat(_in)) {
                      checkLVal(init);
                      return parseForIn(node, init);
                    }
                    return parseFor(node, init);
                  case _function:
                    next();
                    return parseFunction(node, true);
                  case _if:
                    next();
                    node.test = parseParenExpression();
                    node.consequent = parseStatement();
                    node.alternate = eat(_else) ? parseStatement() : null;
                    return finishNode(node, "IfStatement");
                  case _return:
                    if (!inFunction && !options.allowReturnOutsideFunction)
                      raise(tokStart, "'return' outside of function");
                    next();
                    if (eat(_semi) || canInsertSemicolon())
                      node.argument = null;
                    else {
                      node.argument = parseExpression();
                      semicolon();
                    }
                    return finishNode(node, "ReturnStatement");
                  case _switch:
                    next();
                    node.discriminant = parseParenExpression();
                    node.cases = [];
                    expect(_braceL);
                    labels.push(switchLabel);
                    for (var cur, sawDefault; tokType != _braceR; ) {
                      if (tokType === _case || tokType === _default) {
                        var isCase = tokType === _case;
                        if (cur)
                          finishNode(cur, "SwitchCase");
                        node.cases.push(cur = startNode());
                        cur.consequent = [];
                        next();
                        if (isCase)
                          cur.test = parseExpression();
                        else {
                          if (sawDefault)
                            raise(lastStart, "Multiple default clauses");
                          sawDefault = true;
                          cur.test = null;
                        }
                        expect(_colon);
                      } else {
                        if (!cur)
                          unexpected();
                        cur.consequent.push(parseStatement());
                      }
                    }
                    if (cur)
                      finishNode(cur, "SwitchCase");
                    next();
                    labels.pop();
                    return finishNode(node, "SwitchStatement");
                  case _throw:
                    next();
                    if (newline.test(input2.slice(lastEnd, tokStart)))
                      raise(lastEnd, "Illegal newline after throw");
                    node.argument = parseExpression();
                    semicolon();
                    return finishNode(node, "ThrowStatement");
                  case _try:
                    next();
                    node.block = parseBlock();
                    node.handler = null;
                    if (tokType === _catch) {
                      var clause = startNode();
                      next();
                      expect(_parenL);
                      clause.param = parseIdent();
                      if (strict && isStrictBadIdWord(clause.param.name))
                        raise(clause.param.start, "Binding " + clause.param.name + " in strict mode");
                      expect(_parenR);
                      clause.guard = null;
                      clause.body = parseBlock();
                      node.handler = finishNode(clause, "CatchClause");
                    }
                    node.guardedHandlers = empty;
                    node.finalizer = eat(_finally) ? parseBlock() : null;
                    if (!node.handler && !node.finalizer)
                      raise(node.start, "Missing catch or finally clause");
                    return finishNode(node, "TryStatement");
                  case _var:
                    next();
                    parseVar(node);
                    semicolon();
                    return finishNode(node, "VariableDeclaration");
                  case _while:
                    next();
                    node.test = parseParenExpression();
                    labels.push(loopLabel);
                    node.body = parseStatement();
                    labels.pop();
                    return finishNode(node, "WhileStatement");
                  case _with:
                    if (strict)
                      raise(tokStart, "'with' in strict mode");
                    next();
                    node.object = parseParenExpression();
                    node.body = parseStatement();
                    return finishNode(node, "WithStatement");
                  case _braceL:
                    return parseBlock();
                  case _semi:
                    next();
                    return finishNode(node, "EmptyStatement");
                  default:
                    var maybeName = tokVal, expr = parseExpression();
                    if (starttype === _name && expr.type === "Identifier" && eat(_colon)) {
                      for (var i2 = 0; i2 < labels.length; ++i2)
                        if (labels[i2].name === maybeName)
                          raise(expr.start, "Label '" + maybeName + "' is already declared");
                      var kind = tokType.isLoop ? "loop" : tokType === _switch ? "switch" : null;
                      labels.push({ name: maybeName, kind });
                      node.body = parseStatement();
                      labels.pop();
                      node.label = expr;
                      return finishNode(node, "LabeledStatement");
                    } else {
                      node.expression = expr;
                      semicolon();
                      return finishNode(node, "ExpressionStatement");
                    }
                }
              }
              function parseParenExpression() {
                expect(_parenL);
                var val = parseExpression();
                expect(_parenR);
                return val;
              }
              function parseBlock(allowStrict) {
                var node = startNode(), first = true, strict2 = false, oldStrict;
                node.body = [];
                expect(_braceL);
                while (!eat(_braceR)) {
                  var stmt = parseStatement();
                  node.body.push(stmt);
                  if (first && allowStrict && isUseStrict(stmt)) {
                    oldStrict = strict2;
                    setStrict(strict2 = true);
                  }
                  first = false;
                }
                if (strict2 && !oldStrict)
                  setStrict(false);
                return finishNode(node, "BlockStatement");
              }
              function parseFor(node, init) {
                node.init = init;
                expect(_semi);
                node.test = tokType === _semi ? null : parseExpression();
                expect(_semi);
                node.update = tokType === _parenR ? null : parseExpression();
                expect(_parenR);
                node.body = parseStatement();
                labels.pop();
                return finishNode(node, "ForStatement");
              }
              function parseForIn(node, init) {
                node.left = init;
                node.right = parseExpression();
                expect(_parenR);
                node.body = parseStatement();
                labels.pop();
                return finishNode(node, "ForInStatement");
              }
              function parseVar(node, noIn) {
                node.declarations = [];
                node.kind = "var";
                for (; ; ) {
                  var decl = startNode();
                  decl.id = parseIdent();
                  if (strict && isStrictBadIdWord(decl.id.name))
                    raise(decl.id.start, "Binding " + decl.id.name + " in strict mode");
                  decl.init = eat(_eq) ? parseExpression(true, noIn) : null;
                  node.declarations.push(finishNode(decl, "VariableDeclarator"));
                  if (!eat(_comma))
                    break;
                }
                return node;
              }
              function parseExpression(noComma, noIn) {
                var expr = parseMaybeAssign(noIn);
                if (!noComma && tokType === _comma) {
                  var node = startNodeFrom(expr);
                  node.expressions = [expr];
                  while (eat(_comma))
                    node.expressions.push(parseMaybeAssign(noIn));
                  return finishNode(node, "SequenceExpression");
                }
                return expr;
              }
              function parseMaybeAssign(noIn) {
                var left = parseMaybeConditional(noIn);
                if (tokType.isAssign) {
                  var node = startNodeFrom(left);
                  node.operator = tokVal;
                  node.left = left;
                  next();
                  node.right = parseMaybeAssign(noIn);
                  checkLVal(left);
                  return finishNode(node, "AssignmentExpression");
                }
                return left;
              }
              function parseMaybeConditional(noIn) {
                var expr = parseExprOps(noIn);
                if (eat(_question)) {
                  var node = startNodeFrom(expr);
                  node.test = expr;
                  node.consequent = parseExpression(true);
                  expect(_colon);
                  node.alternate = parseExpression(true, noIn);
                  return finishNode(node, "ConditionalExpression");
                }
                return expr;
              }
              function parseExprOps(noIn) {
                return parseExprOp(parseMaybeUnary(), -1, noIn);
              }
              function parseExprOp(left, minPrec, noIn) {
                var prec = tokType.binop;
                if (prec != null && (!noIn || tokType !== _in)) {
                  if (prec > minPrec) {
                    var node = startNodeFrom(left);
                    node.left = left;
                    node.operator = tokVal;
                    var op = tokType;
                    next();
                    node.right = parseExprOp(parseMaybeUnary(), prec, noIn);
                    var exprNode = finishNode(node, op === _logicalOR || op === _logicalAND ? "LogicalExpression" : "BinaryExpression");
                    return parseExprOp(exprNode, minPrec, noIn);
                  }
                }
                return left;
              }
              function parseMaybeUnary() {
                if (tokType.prefix) {
                  var node = startNode(), update = tokType.isUpdate;
                  node.operator = tokVal;
                  node.prefix = true;
                  tokRegexpAllowed = true;
                  next();
                  node.argument = parseMaybeUnary();
                  if (update)
                    checkLVal(node.argument);
                  else if (strict && node.operator === "delete" && node.argument.type === "Identifier")
                    raise(node.start, "Deleting local variable in strict mode");
                  return finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
                }
                var expr = parseExprSubscripts();
                while (tokType.postfix && !canInsertSemicolon()) {
                  var node = startNodeFrom(expr);
                  node.operator = tokVal;
                  node.prefix = false;
                  node.argument = expr;
                  checkLVal(expr);
                  next();
                  expr = finishNode(node, "UpdateExpression");
                }
                return expr;
              }
              function parseExprSubscripts() {
                return parseSubscripts(parseExprAtom());
              }
              function parseSubscripts(base, noCalls) {
                if (eat(_dot)) {
                  var node = startNodeFrom(base);
                  node.object = base;
                  node.property = parseIdent(true);
                  node.computed = false;
                  return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
                } else if (eat(_bracketL)) {
                  var node = startNodeFrom(base);
                  node.object = base;
                  node.property = parseExpression();
                  node.computed = true;
                  expect(_bracketR);
                  return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
                } else if (!noCalls && eat(_parenL)) {
                  var node = startNodeFrom(base);
                  node.callee = base;
                  node.arguments = parseExprList(_parenR, false);
                  return parseSubscripts(finishNode(node, "CallExpression"), noCalls);
                } else
                  return base;
              }
              function parseExprAtom() {
                switch (tokType) {
                  case _this:
                    var node = startNode();
                    next();
                    return finishNode(node, "ThisExpression");
                  case _name:
                    return parseIdent();
                  case _num:
                  case _string:
                  case _regexp:
                    var node = startNode();
                    node.value = tokVal;
                    node.raw = input2.slice(tokStart, tokEnd);
                    next();
                    return finishNode(node, "Literal");
                  case _null:
                  case _true:
                  case _false:
                    var node = startNode();
                    node.value = tokType.atomValue;
                    node.raw = tokType.keyword;
                    next();
                    return finishNode(node, "Literal");
                  case _parenL:
                    var tokStartLoc1 = tokStartLoc, tokStart1 = tokStart;
                    next();
                    var val = parseExpression();
                    val.start = tokStart1;
                    val.end = tokEnd;
                    if (options.locations) {
                      val.loc.start = tokStartLoc1;
                      val.loc.end = tokEndLoc;
                    }
                    if (options.ranges)
                      val.range = [tokStart1, tokEnd];
                    expect(_parenR);
                    return val;
                  case _bracketL:
                    var node = startNode();
                    next();
                    node.elements = parseExprList(_bracketR, true, true);
                    return finishNode(node, "ArrayExpression");
                  case _braceL:
                    return parseObj();
                  case _function:
                    var node = startNode();
                    next();
                    return parseFunction(node, false);
                  case _new:
                    return parseNew();
                  default:
                    unexpected();
                }
              }
              function parseNew() {
                var node = startNode();
                next();
                node.callee = parseSubscripts(parseExprAtom(), true);
                if (eat(_parenL))
                  node.arguments = parseExprList(_parenR, false);
                else
                  node.arguments = empty;
                return finishNode(node, "NewExpression");
              }
              function parseObj() {
                var node = startNode(), first = true, sawGetSet = false;
                node.properties = [];
                next();
                while (!eat(_braceR)) {
                  if (!first) {
                    expect(_comma);
                    if (options.allowTrailingCommas && eat(_braceR))
                      break;
                  } else
                    first = false;
                  var prop = { key: parsePropertyName() }, isGetSet = false, kind;
                  if (eat(_colon)) {
                    prop.value = parseExpression(true);
                    kind = prop.kind = "init";
                  } else if (options.ecmaVersion >= 5 && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set")) {
                    isGetSet = sawGetSet = true;
                    kind = prop.kind = prop.key.name;
                    prop.key = parsePropertyName();
                    if (tokType !== _parenL)
                      unexpected();
                    prop.value = parseFunction(startNode(), false);
                  } else
                    unexpected();
                  if (prop.key.type === "Identifier" && (strict || sawGetSet)) {
                    for (var i2 = 0; i2 < node.properties.length; ++i2) {
                      var other = node.properties[i2];
                      if (other.key.name === prop.key.name) {
                        var conflict = kind == other.kind || isGetSet && other.kind === "init" || kind === "init" && (other.kind === "get" || other.kind === "set");
                        if (conflict && !strict && kind === "init" && other.kind === "init")
                          conflict = false;
                        if (conflict)
                          raise(prop.key.start, "Redefinition of property");
                      }
                    }
                  }
                  node.properties.push(prop);
                }
                return finishNode(node, "ObjectExpression");
              }
              function parsePropertyName() {
                if (tokType === _num || tokType === _string)
                  return parseExprAtom();
                return parseIdent(true);
              }
              function parseFunction(node, isStatement) {
                if (tokType === _name)
                  node.id = parseIdent();
                else if (isStatement)
                  unexpected();
                else
                  node.id = null;
                node.params = [];
                var first = true;
                expect(_parenL);
                while (!eat(_parenR)) {
                  if (!first)
                    expect(_comma);
                  else
                    first = false;
                  node.params.push(parseIdent());
                }
                var oldInFunc = inFunction, oldLabels = labels;
                inFunction = true;
                labels = [];
                node.body = parseBlock(true);
                inFunction = oldInFunc;
                labels = oldLabels;
                if (strict || node.body.body.length && isUseStrict(node.body.body[0])) {
                  for (var i2 = node.id ? -1 : 0; i2 < node.params.length; ++i2) {
                    var id = i2 < 0 ? node.id : node.params[i2];
                    if (isStrictReservedWord(id.name) || isStrictBadIdWord(id.name))
                      raise(id.start, "Defining '" + id.name + "' in strict mode");
                    if (i2 >= 0) {
                      for (var j = 0; j < i2; ++j)
                        if (id.name === node.params[j].name)
                          raise(id.start, "Argument name clash in strict mode");
                    }
                  }
                }
                return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
              }
              function parseExprList(close, allowTrailingComma, allowEmpty) {
                var elts = [], first = true;
                while (!eat(close)) {
                  if (!first) {
                    expect(_comma);
                    if (allowTrailingComma && options.allowTrailingCommas && eat(close))
                      break;
                  } else
                    first = false;
                  if (allowEmpty && tokType === _comma)
                    elts.push(null);
                  else
                    elts.push(parseExpression(true));
                }
                return elts;
              }
              function parseIdent(liberal) {
                var node = startNode();
                if (liberal && options.forbidReserved == "everywhere")
                  liberal = false;
                if (tokType === _name) {
                  if (!liberal && (options.forbidReserved && (options.ecmaVersion === 3 ? isReservedWord3 : isReservedWord5)(tokVal) || strict && isStrictReservedWord(tokVal)) && input2.slice(tokStart, tokEnd).indexOf("\\") == -1)
                    raise(tokStart, "The keyword '" + tokVal + "' is reserved");
                  node.name = tokVal;
                } else if (liberal && tokType.keyword) {
                  node.name = tokType.keyword;
                } else {
                  unexpected();
                }
                tokRegexpAllowed = false;
                next();
                return finishNode(node, "Identifier");
              }
            });
            if (!acorn.version)
              acorn = null;
          }
          function parse(code, options) {
            return (global.acorn || acorn).parse(code, options);
          }
          var binaryOperators = {
            "+": "__add",
            "-": "__subtract",
            "*": "__multiply",
            "/": "__divide",
            "%": "__modulo",
            "==": "__equals",
            "!=": "__equals"
          };
          var unaryOperators = {
            "-": "__negate",
            "+": "__self"
          };
          var fields = Base.each(
            ["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"],
            function(name) {
              this["__" + name] = "#" + name;
            },
            {
              __self: function() {
                return this;
              }
            }
          );
          Point.inject(fields);
          Size.inject(fields);
          Color.inject(fields);
          function __$__(left, operator, right) {
            var handler = binaryOperators[operator];
            if (left && left[handler]) {
              var res = left[handler](right);
              return operator === "!=" ? !res : res;
            }
            switch (operator) {
              case "+":
                return left + right;
              case "-":
                return left - right;
              case "*":
                return left * right;
              case "/":
                return left / right;
              case "%":
                return left % right;
              case "==":
                return left == right;
              case "!=":
                return left != right;
            }
          }
          function $__(operator, value) {
            var handler = unaryOperators[operator];
            if (value && value[handler])
              return value[handler]();
            switch (operator) {
              case "+":
                return +value;
              case "-":
                return -value;
            }
          }
          function compile(code, options) {
            if (!code)
              return "";
            options = options || {};
            var insertions = [];
            function getOffset(offset2) {
              for (var i2 = 0, l = insertions.length; i2 < l; i2++) {
                var insertion = insertions[i2];
                if (insertion[0] >= offset2)
                  break;
                offset2 += insertion[1];
              }
              return offset2;
            }
            function getCode(node) {
              return code.substring(
                getOffset(node.range[0]),
                getOffset(node.range[1])
              );
            }
            function getBetween(left, right) {
              return code.substring(
                getOffset(left.range[1]),
                getOffset(right.range[0])
              );
            }
            function replaceCode(node, str) {
              var start = getOffset(node.range[0]), end = getOffset(node.range[1]), insert = 0;
              for (var i2 = insertions.length - 1; i2 >= 0; i2--) {
                if (start > insertions[i2][0]) {
                  insert = i2 + 1;
                  break;
                }
              }
              insertions.splice(insert, 0, [start, str.length - end + start]);
              code = code.substring(0, start) + str + code.substring(end);
            }
            function handleOverloading(node, parent) {
              switch (node.type) {
                case "UnaryExpression":
                  if (node.operator in unaryOperators && node.argument.type !== "Literal") {
                    var arg = getCode(node.argument);
                    replaceCode(node, '$__("' + node.operator + '", ' + arg + ")");
                  }
                  break;
                case "BinaryExpression":
                  if (node.operator in binaryOperators && node.left.type !== "Literal") {
                    var left = getCode(node.left), right = getCode(node.right), between = getBetween(node.left, node.right), operator = node.operator;
                    replaceCode(node, "__$__(" + left + "," + between.replace(
                      new RegExp("\\" + operator),
                      '"' + operator + '"'
                    ) + ", " + right + ")");
                  }
                  break;
                case "UpdateExpression":
                case "AssignmentExpression":
                  var parentType = parent && parent.type;
                  if (!(parentType === "ForStatement" || parentType === "BinaryExpression" && /^[=!<>]/.test(parent.operator) || parentType === "MemberExpression" && parent.computed)) {
                    if (node.type === "UpdateExpression") {
                      var arg = getCode(node.argument), exp = "__$__(" + arg + ', "' + node.operator[0] + '", 1)', str = arg + " = " + exp;
                      if (node.prefix) {
                        str = "(" + str + ")";
                      } else if (parentType === "AssignmentExpression" || parentType === "VariableDeclarator" || parentType === "BinaryExpression") {
                        if (getCode(parent.left || parent.id) === arg)
                          str = exp;
                        str = arg + "; " + str;
                      }
                      replaceCode(node, str);
                    } else {
                      if (/^.=$/.test(node.operator) && node.left.type !== "Literal") {
                        var left = getCode(node.left), right = getCode(node.right), exp = left + " = __$__(" + left + ', "' + node.operator[0] + '", ' + right + ")";
                        replaceCode(node, /^\(.*\)$/.test(getCode(node)) ? "(" + exp + ")" : exp);
                      }
                    }
                  }
                  break;
              }
            }
            function handleExports(node) {
              switch (node.type) {
                case "ExportDefaultDeclaration":
                  replaceCode({
                    range: [node.start, node.declaration.start]
                  }, "module.exports = ");
                  break;
                case "ExportNamedDeclaration":
                  var declaration = node.declaration;
                  var specifiers = node.specifiers;
                  if (declaration) {
                    var declarations = declaration.declarations;
                    if (declarations) {
                      declarations.forEach(function(dec) {
                        replaceCode(dec, "module.exports." + getCode(dec));
                      });
                      replaceCode({
                        range: [
                          node.start,
                          declaration.start + declaration.kind.length
                        ]
                      }, "");
                    }
                  } else if (specifiers) {
                    var exports3 = specifiers.map(function(specifier) {
                      var name = getCode(specifier);
                      return "module.exports." + name + " = " + name + "; ";
                    }).join("");
                    if (exports3) {
                      replaceCode(node, exports3);
                    }
                  }
                  break;
              }
            }
            function walkAST(node, parent, paperFeatures2) {
              if (node) {
                for (var key in node) {
                  if (key !== "range" && key !== "loc") {
                    var value = node[key];
                    if (Array.isArray(value)) {
                      for (var i2 = 0, l = value.length; i2 < l; i2++) {
                        walkAST(value[i2], node, paperFeatures2);
                      }
                    } else if (value && typeof value === "object") {
                      walkAST(value, node, paperFeatures2);
                    }
                  }
                }
                if (paperFeatures2.operatorOverloading !== false) {
                  handleOverloading(node, parent);
                }
                if (paperFeatures2.moduleExports !== false) {
                  handleExports(node);
                }
              }
            }
            function encodeVLQ(value) {
              var res = "", base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              value = (Math.abs(value) << 1) + (value < 0 ? 1 : 0);
              while (value || !res) {
                var next = value & 32 - 1;
                value >>= 5;
                if (value)
                  next |= 32;
                res += base64[next];
              }
              return res;
            }
            var url = options.url || "", sourceMaps = options.sourceMaps, paperFeatures = options.paperFeatures || {}, source = options.source || code, offset = options.offset || 0, agent = paper2.agent, version = agent.versionNumber, offsetCode = false, lineBreaks = /\r\n|\n|\r/mg, map;
            if (sourceMaps && (agent.chrome && version >= 30 || agent.webkit && version >= 537.76 || agent.firefox && version >= 23 || agent.node)) {
              if (agent.node) {
                offset -= 2;
              } else if (window2 && url && !window2.location.href.indexOf(url)) {
                var html = document2.getElementsByTagName("html")[0].innerHTML;
                offset = html.substr(0, html.indexOf(code) + 1).match(
                  lineBreaks
                ).length + 1;
              }
              offsetCode = offset > 0 && !(agent.chrome && version >= 36 || agent.safari && version >= 600 || agent.firefox && version >= 40 || agent.node);
              var mappings = ["AA" + encodeVLQ(offsetCode ? 0 : offset) + "A"];
              mappings.length = (code.match(lineBreaks) || []).length + 1 + (offsetCode ? offset : 0);
              map = {
                version: 3,
                file: url,
                names: [],
                mappings: mappings.join(";AACA"),
                sourceRoot: "",
                sources: [url],
                sourcesContent: [source]
              };
            }
            if (paperFeatures.operatorOverloading !== false || paperFeatures.moduleExports !== false) {
              walkAST(parse(code, {
                ranges: true,
                preserveParens: true,
                sourceType: "module"
              }), null, paperFeatures);
            }
            if (map) {
              if (offsetCode) {
                code = new Array(offset + 1).join("\n") + code;
              }
              if (/^(inline|both)$/.test(sourceMaps)) {
                code += "\n//# sourceMappingURL=data:application/json;base64," + self2.btoa(unescape(encodeURIComponent(
                  JSON.stringify(map)
                )));
              }
              code += "\n//# sourceURL=" + (url || "paperscript");
            }
            return {
              url,
              source,
              code,
              map
            };
          }
          function execute(code, scope, options) {
            paper2 = scope;
            var view = scope.getView(), tool = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(code) && !/\bnew\s+Tool\b/.test(code) ? new Tool() : null, toolHandlers = tool ? tool._events : [], handlers = ["onFrame", "onResize"].concat(toolHandlers), params = [], args = [], func, compiled = typeof code === "object" ? code : compile(code, options);
            code = compiled.code;
            function expose(scope2, hidden) {
              for (var key in scope2) {
                if ((hidden || !/^_/.test(key)) && new RegExp("([\\b\\s\\W]|^)" + key.replace(/\$/g, "\\$") + "\\b").test(code)) {
                  params.push(key);
                  args.push(scope2[key]);
                }
              }
            }
            expose(
              { __$__, $__, paper: scope, tool },
              true
            );
            expose(scope);
            code = "var module = { exports: {} }; " + code;
            var exports3 = Base.each(handlers, function(key) {
              if (new RegExp("\\s+" + key + "\\b").test(code)) {
                params.push(key);
                this.push("module.exports." + key + " = " + key + ";");
              }
            }, []).join("\n");
            if (exports3) {
              code += "\n" + exports3;
            }
            code += "\nreturn module.exports;";
            var agent = paper2.agent;
            if (document2 && (agent.chrome || agent.firefox && agent.versionNumber < 40)) {
              var script = document2.createElement("script"), head = document2.head || document2.getElementsByTagName("head")[0];
              if (agent.firefox)
                code = "\n" + code;
              script.appendChild(document2.createTextNode(
                "document.__paperscript__ = function(" + params + ") {" + code + "\n}"
              ));
              head.appendChild(script);
              func = document2.__paperscript__;
              delete document2.__paperscript__;
              head.removeChild(script);
            } else {
              func = Function(params, code);
            }
            var exports3 = func && func.apply(scope, args);
            var obj = exports3 || {};
            Base.each(toolHandlers, function(key) {
              var value = obj[key];
              if (value)
                tool[key] = value;
            });
            if (view) {
              if (obj.onResize)
                view.setOnResize(obj.onResize);
              view.emit("resize", {
                size: view.size,
                delta: new Point()
              });
              if (obj.onFrame)
                view.setOnFrame(obj.onFrame);
              view.requestUpdate();
            }
            return exports3;
          }
          function loadScript(script) {
            if (/^text\/(?:x-|)paperscript$/.test(script.type) && PaperScope.getAttribute(script, "ignore") !== "true") {
              var canvasId = PaperScope.getAttribute(script, "canvas"), canvas = document2.getElementById(canvasId), src = script.src || script.getAttribute("data-src"), async = PaperScope.hasAttribute(script, "async"), scopeAttribute = "data-paper-scope";
              if (!canvas)
                throw new Error('Unable to find canvas with id "' + canvasId + '"');
              var scope = PaperScope.get(canvas.getAttribute(scopeAttribute)) || new PaperScope().setup(canvas);
              canvas.setAttribute(scopeAttribute, scope._id);
              if (src) {
                Http.request({
                  url: src,
                  async,
                  mimeType: "text/plain",
                  onLoad: function(code) {
                    execute(code, scope, src);
                  }
                });
              } else {
                execute(script.innerHTML, scope, script.baseURI);
              }
              script.setAttribute("data-paper-ignore", "true");
              return scope;
            }
          }
          function loadAll() {
            Base.each(
              document2 && document2.getElementsByTagName("script"),
              loadScript
            );
          }
          function load(script) {
            return script ? loadScript(script) : loadAll();
          }
          if (window2) {
            if (document2.readyState === "complete") {
              setTimeout(loadAll);
            } else {
              DomEvent.add(window2, { load: loadAll });
            }
          }
          return {
            compile,
            execute,
            load,
            parse,
            calculateBinary: __$__,
            calculateUnary: $__
          };
        }.call(this);
        var paper2 = new (PaperScope.inject(Base.exports, {
          Base,
          Numerical,
          Key,
          DomEvent,
          DomElement,
          document: document2,
          window: window2,
          Symbol: SymbolDefinition,
          PlacedSymbol: SymbolItem
        }))();
        if (paper2.agent.node) {
          require_extend()(paper2);
        }
        if (typeof define === "function" && define.amd) {
          define("paper", paper2);
        } else if (typeof module === "object" && module) {
          module.exports = paper2;
        }
        return paper2;
      }.call(exports, typeof self === "object" ? self : null);
    }
  });

  // node_modules/@rive-app/canvas/rive.js
  var require_rive = __commonJS({
    "node_modules/@rive-app/canvas/rive.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["rive"] = factory();
        else
          root["rive"] = factory();
      })(exports, () => {
        return (() => {
          "use strict";
          var __webpack_modules__ = [
            ,
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                "default": () => __WEBPACK_DEFAULT_EXPORT__
              });
              var Rive2 = (() => {
                var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
                return function(moduleArg = {}) {
                  var m = moduleArg, aa, ea;
                  m.ready = new Promise((a, b) => {
                    aa = a;
                    ea = b;
                  });
                  function fa() {
                    function a(g) {
                      const n = d;
                      c = b = 0;
                      d = /* @__PURE__ */ new Map();
                      n.forEach((p) => {
                        try {
                          p(g);
                        } catch (l) {
                          console.error(l);
                        }
                      });
                      this.ob();
                      e && e.Tb();
                    }
                    let b = 0, c = 0, d = /* @__PURE__ */ new Map(), e = null, f = null;
                    this.requestAnimationFrame = function(g) {
                      b || (b = requestAnimationFrame(a.bind(this)));
                      const n = ++c;
                      d.set(n, g);
                      return n;
                    };
                    this.cancelAnimationFrame = function(g) {
                      d.delete(g);
                      b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
                    };
                    this.Rb = function(g) {
                      f && (document.body.remove(f), f = null);
                      g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(n) {
                        f.innerHTML = "RIVE FPS " + n.toFixed(1);
                      }, document.body.appendChild(f));
                      e = new function() {
                        let n = 0, p = 0;
                        this.Tb = function() {
                          var l = performance.now();
                          p ? (++n, l -= p, 1e3 < l && (g(1e3 * n / l), n = p = 0)) : (p = l, n = 0);
                        };
                      }();
                    };
                    this.Ob = function() {
                      f && (document.body.remove(f), f = null);
                      e = null;
                    };
                    this.ob = function() {
                    };
                  }
                  function ha(a) {
                    console.assert(true);
                    const b = /* @__PURE__ */ new Map();
                    let c = -Infinity;
                    this.push = function(d) {
                      d = d + ((1 << a) - 1) >> a;
                      b.has(d) && clearTimeout(b.get(d));
                      b.set(d, setTimeout(function() {
                        b.delete(d);
                        0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                      }, 1e3));
                      c = Math.max(d, c);
                      return c << a;
                    };
                  }
                  const ia = m.onRuntimeInitialized;
                  m.onRuntimeInitialized = function() {
                    ia && ia();
                    let a = m.decodeAudio;
                    m.decodeAudio = function(e, f) {
                      e = a(e);
                      f(e);
                    };
                    let b = m.decodeFont;
                    m.decodeFont = function(e, f) {
                      e = b(e);
                      f(e);
                    };
                    const c = m.FileAssetLoader;
                    m.ptrToAsset = (e) => {
                      let f = m.ptrToFileAsset(e);
                      return f.isImage ? m.ptrToImageAsset(e) : f.isFont ? m.ptrToFontAsset(e) : f.isAudio ? m.ptrToAudioAsset(e) : f;
                    };
                    m.CustomFileAssetLoader = c.extend("CustomFileAssetLoader", { __construct: function({ loadContents: e }) {
                      this.__parent.__construct.call(this);
                      this.Gb = e;
                    }, loadContents: function(e, f) {
                      e = m.ptrToAsset(e);
                      return this.Gb(e, f);
                    } });
                    m.CDNFileAssetLoader = c.extend("CDNFileAssetLoader", { __construct: function() {
                      this.__parent.__construct.call(this);
                    }, loadContents: function(e) {
                      let f = m.ptrToAsset(e);
                      e = f.cdnUuid;
                      if ("" === e) {
                        return false;
                      }
                      (function(g, n) {
                        var p = new XMLHttpRequest();
                        p.responseType = "arraybuffer";
                        p.onreadystatechange = function() {
                          4 == p.readyState && 200 == p.status && n(p);
                        };
                        p.open("GET", g, true);
                        p.send(null);
                      })(f.cdnBaseUrl + "/" + e, (g) => {
                        f.decode(new Uint8Array(g.response));
                      });
                      return true;
                    } });
                    m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", { __construct: function() {
                      this.__parent.__construct.call(this);
                      this.kb = [];
                    }, addLoader: function(e) {
                      this.kb.push(e);
                    }, loadContents: function(e, f) {
                      for (let g of this.kb) {
                        if (g.loadContents(e, f)) {
                          return true;
                        }
                      }
                      return false;
                    } });
                    let d = m.computeAlignment;
                    m.computeAlignment = function(e, f, g, n, p = 1) {
                      return d.call(this, e, f, g, n, p);
                    };
                  };
                  const ja = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), ka = new function() {
                    function a() {
                      if (!b) {
                        let B = function(D, w, M) {
                          w = r.createShader(w);
                          r.shaderSource(w, M);
                          r.compileShader(w);
                          M = r.getShaderInfoLog(w);
                          if (0 < (M || "").length) {
                            throw M;
                          }
                          r.attachShader(D, w);
                        };
                        var k = document.createElement("canvas"), t2 = { alpha: 1, depth: 0, stencil: 0, antialias: 0, premultipliedAlpha: 1, preserveDrawingBuffer: 0, preferLowPowerToHighPerformance: 0, failIfMajorPerformanceCaveat: 0, enableExtensionsByDefault: 1, explicitSwapControl: 1, renderViaOffscreenBackBuffer: 1 };
                        let r;
                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                          if (r = k.getContext("webgl", t2), c = 1, !r) {
                            return console.log("No WebGL support. Image mesh will not be drawn."), false;
                          }
                        } else {
                          if (r = k.getContext("webgl2", t2)) {
                            c = 2;
                          } else {
                            if (r = k.getContext("webgl", t2)) {
                              c = 1;
                            } else {
                              return console.log("No WebGL support. Image mesh will not be drawn."), false;
                            }
                          }
                        }
                        r = new Proxy(r, { get(D, w) {
                          if (D.isContextLost()) {
                            if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = true), "function" === typeof D[w]) {
                              return function() {
                              };
                            }
                          } else {
                            return "function" === typeof D[w] ? function(...M) {
                              return D[w].apply(D, M);
                            } : D[w];
                          }
                        }, set(D, w, M) {
                          if (D.isContextLost()) {
                            p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = true);
                          } else {
                            return D[w] = M, true;
                          }
                        } });
                        d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                        k = r.createProgram();
                        B(k, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                        B(k, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                        r.bindAttribLocation(k, 0, "vertex");
                        r.bindAttribLocation(k, 1, "uv");
                        r.linkProgram(k);
                        t2 = r.getProgramInfoLog(k);
                        if (0 < (t2 || "").trim().length) {
                          throw t2;
                        }
                        e = r.getUniformLocation(k, "mat");
                        f = r.getUniformLocation(k, "translate");
                        r.useProgram(k);
                        r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                        r.enableVertexAttribArray(0);
                        r.enableVertexAttribArray(1);
                        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                        r.uniform1i(r.getUniformLocation(k, "image"), 0);
                        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
                        b = r;
                      }
                      return true;
                    }
                    let b = null, c = 0, d = 0, e = null, f = null, g = 0, n = 0, p = false;
                    a();
                    this.hc = function() {
                      a();
                      return d;
                    };
                    this.Mb = function(k) {
                      b.deleteTexture && b.deleteTexture(k);
                    };
                    this.Lb = function(k) {
                      if (!a()) {
                        return null;
                      }
                      const t2 = b.createTexture();
                      if (!t2) {
                        return null;
                      }
                      b.bindTexture(b.TEXTURE_2D, t2);
                      b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, k);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                      2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                      return t2;
                    };
                    const l = new ha(8), u = new ha(8), v = new ha(10), x = new ha(10);
                    this.Qb = function(k, t2, r, B, D) {
                      if (a()) {
                        var w = l.push(k), M = u.push(t2);
                        if (b.canvas) {
                          if (b.canvas.width != w || b.canvas.height != M) {
                            b.canvas.width = w, b.canvas.height = M;
                          }
                          b.viewport(0, M - t2, k, t2);
                          b.disable(b.SCISSOR_TEST);
                          b.clearColor(0, 0, 0, 0);
                          b.clear(b.COLOR_BUFFER_BIT);
                          b.enable(b.SCISSOR_TEST);
                          r.sort((H, ba) => ba.wb - H.wb);
                          w = v.push(B);
                          g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                          w = 0;
                          for (var T of r) {
                            b.bufferSubData(b.ARRAY_BUFFER, w, T.Ta), w += 4 * T.Ta.length;
                          }
                          console.assert(w == 4 * B);
                          for (var ca of r) {
                            b.bufferSubData(b.ARRAY_BUFFER, w, ca.Db), w += 4 * ca.Db.length;
                          }
                          console.assert(w == 8 * B);
                          w = x.push(D);
                          n != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), n = w);
                          T = 0;
                          for (var ra of r) {
                            b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, T, ra.indices), T += 2 * ra.indices.length;
                          }
                          console.assert(T == 2 * D);
                          ra = 0;
                          ca = true;
                          w = T = 0;
                          for (const H of r) {
                            H.image.Ka != ra && (b.bindTexture(b.TEXTURE_2D, H.image.Ja || null), ra = H.image.Ka);
                            H.mc ? (b.scissor(H.Ya, M - H.Za - H.jb, H.Ac, H.jb), ca = true) : ca && (b.scissor(0, M - t2, k, t2), ca = false);
                            r = 2 / k;
                            const ba = -2 / t2;
                            b.uniform4f(e, H.ha[0] * r * H.Ba, H.ha[1] * ba * H.Ca, H.ha[2] * r * H.Ba, H.ha[3] * ba * H.Ca);
                            b.uniform2f(f, H.ha[4] * r * H.Ba + r * (H.Ya - H.ic * H.Ba) - 1, H.ha[5] * ba * H.Ca + ba * (H.Za - H.jc * H.Ca) + 1);
                            b.vertexAttribPointer(0, 2, b.FLOAT, false, 0, w);
                            b.vertexAttribPointer(1, 2, b.FLOAT, false, 0, w + 4 * B);
                            b.drawElements(b.TRIANGLES, H.indices.length, b.UNSIGNED_SHORT, T);
                            w += 4 * H.Ta.length;
                            T += 2 * H.indices.length;
                          }
                          console.assert(w == 4 * B);
                          console.assert(T == 2 * D);
                        }
                      }
                    };
                    this.canvas = function() {
                      return a() && b.canvas;
                    };
                  }(), la = m.onRuntimeInitialized;
                  m.onRuntimeInitialized = function() {
                    function a(q) {
                      switch (q) {
                        case l.srcOver:
                          return "source-over";
                        case l.screen:
                          return "screen";
                        case l.overlay:
                          return "overlay";
                        case l.darken:
                          return "darken";
                        case l.lighten:
                          return "lighten";
                        case l.colorDodge:
                          return "color-dodge";
                        case l.colorBurn:
                          return "color-burn";
                        case l.hardLight:
                          return "hard-light";
                        case l.softLight:
                          return "soft-light";
                        case l.difference:
                          return "difference";
                        case l.exclusion:
                          return "exclusion";
                        case l.multiply:
                          return "multiply";
                        case l.hue:
                          return "hue";
                        case l.saturation:
                          return "saturation";
                        case l.color:
                          return "color";
                        case l.luminosity:
                          return "luminosity";
                      }
                    }
                    function b(q) {
                      return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
                    }
                    function c() {
                      0 < M.length && (ka.Qb(w.drawWidth(), w.drawHeight(), M, T, ca), M = [], ca = T = 0, w.reset(512, 512));
                      for (const q of D) {
                        for (const y of q.H) {
                          y();
                        }
                        q.H = [];
                      }
                      D.clear();
                    }
                    la && la();
                    var d = m.RenderPaintStyle;
                    const e = m.RenderPath, f = m.RenderPaint, g = m.Renderer, n = m.StrokeCap, p = m.StrokeJoin, l = m.BlendMode, u = d.fill, v = d.stroke, x = m.FillRule.evenOdd;
                    let k = 1;
                    var t2 = m.RenderImage.extend("CanvasRenderImage", { __construct: function({ la: q, xa: y } = {}) {
                      this.__parent.__construct.call(this);
                      this.Ka = k;
                      k = k + 1 & 2147483647 || 1;
                      this.la = q;
                      this.xa = y;
                    }, __destruct: function() {
                      this.Ja && (ka.Mb(this.Ja), URL.revokeObjectURL(this.Wa));
                      this.__parent.__destruct.call(this);
                    }, decode: function(q) {
                      var y = this;
                      y.xa && y.xa(y);
                      var F = new Image();
                      y.Wa = URL.createObjectURL(new Blob([q], { type: "image/png" }));
                      F.onload = function() {
                        y.Fb = F;
                        y.Ja = ka.Lb(F);
                        y.size(F.width, F.height);
                        y.la && y.la(y);
                      };
                      F.src = y.Wa;
                    } }), r = e.extend("CanvasRenderPath", { __construct: function() {
                      this.__parent.__construct.call(this);
                      this.T = new Path2D();
                    }, rewind: function() {
                      this.T = new Path2D();
                    }, addPath: function(q, y, F, G, A, I, J) {
                      var K = this.T, X = K.addPath;
                      q = q.T;
                      const Q = new DOMMatrix();
                      Q.a = y;
                      Q.b = F;
                      Q.c = G;
                      Q.d = A;
                      Q.e = I;
                      Q.f = J;
                      X.call(K, q, Q);
                    }, fillRule: function(q) {
                      this.Va = q;
                    }, moveTo: function(q, y) {
                      this.T.moveTo(q, y);
                    }, lineTo: function(q, y) {
                      this.T.lineTo(q, y);
                    }, cubicTo: function(q, y, F, G, A, I) {
                      this.T.bezierCurveTo(q, y, F, G, A, I);
                    }, close: function() {
                      this.T.closePath();
                    } }), B = f.extend("CanvasRenderPaint", { color: function(q) {
                      this.Xa = b(q);
                    }, thickness: function(q) {
                      this.Ib = q;
                    }, join: function(q) {
                      switch (q) {
                        case p.miter:
                          this.Ia = "miter";
                          break;
                        case p.round:
                          this.Ia = "round";
                          break;
                        case p.bevel:
                          this.Ia = "bevel";
                      }
                    }, cap: function(q) {
                      switch (q) {
                        case n.butt:
                          this.Ha = "butt";
                          break;
                        case n.round:
                          this.Ha = "round";
                          break;
                        case n.square:
                          this.Ha = "square";
                      }
                    }, style: function(q) {
                      this.Hb = q;
                    }, blendMode: function(q) {
                      this.Eb = a(q);
                    }, clearGradient: function() {
                      this.ja = null;
                    }, linearGradient: function(q, y, F, G) {
                      this.ja = { yb: q, zb: y, bb: F, cb: G, Ra: [] };
                    }, radialGradient: function(q, y, F, G) {
                      this.ja = { yb: q, zb: y, bb: F, cb: G, Ra: [], ec: true };
                    }, addStop: function(q, y) {
                      this.ja.Ra.push({ color: q, stop: y });
                    }, completeGradient: function() {
                    }, draw: function(q, y, F) {
                      let G = this.Hb;
                      var A = this.Xa, I = this.ja;
                      q.globalCompositeOperation = this.Eb;
                      if (null != I) {
                        A = I.yb;
                        var J = I.zb;
                        const X = I.bb;
                        var K = I.cb;
                        const Q = I.Ra;
                        I.ec ? (I = X - A, K -= J, A = q.createRadialGradient(A, J, 0, A, J, Math.sqrt(I * I + K * K))) : A = q.createLinearGradient(A, J, X, K);
                        for (let da = 0, R = Q.length; da < R; da++) {
                          J = Q[da], A.addColorStop(J.stop, b(J.color));
                        }
                        this.Xa = A;
                        this.ja = null;
                      }
                      switch (G) {
                        case v:
                          q.strokeStyle = A;
                          q.lineWidth = this.Ib;
                          q.lineCap = this.Ha;
                          q.lineJoin = this.Ia;
                          q.stroke(y);
                          break;
                        case u:
                          q.fillStyle = A, q.fill(y, F);
                      }
                    } });
                    const D = /* @__PURE__ */ new Set();
                    let w = null, M = [], T = 0, ca = 0;
                    var ra = m.CanvasRenderer = g.extend("Renderer", { __construct: function(q) {
                      this.__parent.__construct.call(this);
                      this.S = [1, 0, 0, 1, 0, 0];
                      this.C = q.getContext("2d");
                      this.Ua = q;
                      this.H = [];
                    }, save: function() {
                      this.S.push(...this.S.slice(this.S.length - 6));
                      this.H.push(this.C.save.bind(this.C));
                    }, restore: function() {
                      const q = this.S.length - 6;
                      if (6 > q) {
                        throw "restore() called without matching save().";
                      }
                      this.S.splice(q);
                      this.H.push(this.C.restore.bind(this.C));
                    }, transform: function(q, y, F, G, A, I) {
                      const J = this.S, K = J.length - 6;
                      J.splice(K, 6, J[K] * q + J[K + 2] * y, J[K + 1] * q + J[K + 3] * y, J[K] * F + J[K + 2] * G, J[K + 1] * F + J[K + 3] * G, J[K] * A + J[K + 2] * I + J[K + 4], J[K + 1] * A + J[K + 3] * I + J[K + 5]);
                      this.H.push(this.C.transform.bind(this.C, q, y, F, G, A, I));
                    }, rotate: function(q) {
                      const y = Math.sin(q);
                      q = Math.cos(q);
                      this.transform(q, y, -y, q, 0, 0);
                    }, _drawPath: function(q, y) {
                      this.H.push(y.draw.bind(y, this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                    }, _drawRiveImage: function(q, y, F) {
                      var G = q.Fb;
                      if (G) {
                        var A = this.C, I = a(y);
                        this.H.push(function() {
                          A.globalCompositeOperation = I;
                          A.globalAlpha = F;
                          A.drawImage(G, 0, 0);
                          A.globalAlpha = 1;
                        });
                      }
                    }, _getMatrix: function(q) {
                      const y = this.S, F = y.length - 6;
                      for (let G = 0; 6 > G; ++G) {
                        q[G] = y[F + G];
                      }
                    }, _drawImageMesh: function(q, y, F, G, A, I, J, K, X, Q) {
                      var da = this.C.canvas.width, R = this.C.canvas.height;
                      const Yb = X - J, Zb = Q - K;
                      J = Math.max(J, 0);
                      K = Math.max(K, 0);
                      X = Math.min(X, da);
                      Q = Math.min(Q, R);
                      const Ga = X - J, Ha = Q - K;
                      console.assert(Ga <= Math.min(Yb, da));
                      console.assert(Ha <= Math.min(Zb, R));
                      if (!(0 >= Ga || 0 >= Ha)) {
                        X = Ga < Yb || Ha < Zb;
                        da = Q = 1;
                        var sa = Math.ceil(Ga * Q), ta = Math.ceil(Ha * da);
                        R = ka.hc();
                        sa > R && (Q *= R / sa, sa = R);
                        ta > R && (da *= R / ta, ta = R);
                        w || (w = new m.DynamicRectanizer(R), w.reset(512, 512));
                        R = w.addRect(sa, ta);
                        0 > R && (c(), D.add(this), R = w.addRect(sa, ta), console.assert(0 <= R));
                        var $b = R & 65535, ac = R >> 16;
                        M.push({ ha: this.S.slice(this.S.length - 6), image: q, Ya: $b, Za: ac, ic: J, jc: K, Ac: sa, jb: ta, Ba: Q, Ca: da, Ta: new Float32Array(G), Db: new Float32Array(A), indices: new Uint16Array(I), mc: X, wb: q.Ka << 1 | (X ? 1 : 0) });
                        T += G.length;
                        ca += I.length;
                        var za = this.C, qd = a(y);
                        this.H.push(function() {
                          za.save();
                          za.resetTransform();
                          za.globalCompositeOperation = qd;
                          za.globalAlpha = F;
                          const bc = ka.canvas();
                          bc && za.drawImage(bc, $b, ac, sa, ta, J, K, Ga, Ha);
                          za.restore();
                        });
                      }
                    }, _clipPath: function(q) {
                      this.H.push(this.C.clip.bind(this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                    }, clear: function() {
                      D.add(this);
                      this.H.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
                    }, flush: function() {
                    }, translate: function(q, y) {
                      this.transform(1, 0, 0, 1, q, y);
                    } });
                    m.makeRenderer = function(q) {
                      const y = new ra(q), F = y.C;
                      return new Proxy(y, { get(G, A) {
                        if ("function" === typeof G[A]) {
                          return function(...I) {
                            return G[A].apply(G, I);
                          };
                        }
                        if ("function" === typeof F[A]) {
                          if (-1 < ja.indexOf(A)) {
                            throw Error("RiveException: Method call to '" + A + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                          }
                          return function(...I) {
                            y.H.push(F[A].bind(F, ...I));
                          };
                        }
                        return G[A];
                      }, set(G, A, I) {
                        if (A in F) {
                          return y.H.push(() => {
                            F[A] = I;
                          }), true;
                        }
                      } });
                    };
                    m.decodeImage = function(q, y) {
                      new t2({ la: y }).decode(q);
                    };
                    m.renderFactory = { makeRenderPaint: function() {
                      return new B();
                    }, makeRenderPath: function() {
                      return new r();
                    }, makeRenderImage: function() {
                      let q = ba;
                      return new t2({ xa: () => {
                        q.total++;
                      }, la: () => {
                        q.loaded++;
                        if (q.loaded === q.total) {
                          const y = q.ready;
                          y && (y(), q.ready = null);
                        }
                      } });
                    } };
                    let H = m.load, ba = null;
                    m.load = function(q, y, F = true) {
                      const G = new m.FallbackFileAssetLoader();
                      void 0 !== y && G.addLoader(y);
                      F && (y = new m.CDNFileAssetLoader(), G.addLoader(y));
                      return new Promise(function(A) {
                        let I = null;
                        ba = { total: 0, loaded: 0, ready: function() {
                          A(I);
                        } };
                        I = H(q, G);
                        0 == ba.total && A(I);
                      });
                    };
                    let rd = m.RendererWrapper.prototype.align;
                    m.RendererWrapper.prototype.align = function(q, y, F, G, A = 1) {
                      rd.call(this, q, y, F, G, A);
                    };
                    d = new fa();
                    m.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                    m.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                    m.enableFPSCounter = d.Rb.bind(d);
                    m.disableFPSCounter = d.Ob;
                    d.ob = c;
                    m.resolveAnimationFrame = c;
                    m.cleanup = function() {
                      w && w.delete();
                    };
                  };
                  var ma = Object.assign({}, m), na = "./this.program", oa = "object" == typeof window, pa = "function" == typeof importScripts, qa = "", ua, va;
                  if (oa || pa) {
                    pa ? qa = self.location.href : "undefined" != typeof document && document.currentScript && (qa = document.currentScript.src), _scriptDir && (qa = _scriptDir), 0 !== qa.indexOf("blob:") ? qa = qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : qa = "", pa && (va = (a) => {
                      var b = new XMLHttpRequest();
                      b.open("GET", a, false);
                      b.responseType = "arraybuffer";
                      b.send(null);
                      return new Uint8Array(b.response);
                    }), ua = (a, b, c) => {
                      var d = new XMLHttpRequest();
                      d.open("GET", a, true);
                      d.responseType = "arraybuffer";
                      d.onload = () => {
                        200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
                      };
                      d.onerror = c;
                      d.send(null);
                    };
                  }
                  var wa = m.print || console.log.bind(console), xa = m.printErr || console.error.bind(console);
                  Object.assign(m, ma);
                  ma = null;
                  m.thisProgram && (na = m.thisProgram);
                  var ya;
                  m.wasmBinary && (ya = m.wasmBinary);
                  var noExitRuntime = m.noExitRuntime || true;
                  "object" != typeof WebAssembly && Aa("no native wasm support detected");
                  var Ba, z, Ca = false, C, E, Da, Ea, L, N, Fa, Ia;
                  function Ja() {
                    var a = Ba.buffer;
                    m.HEAP8 = C = new Int8Array(a);
                    m.HEAP16 = Da = new Int16Array(a);
                    m.HEAP32 = L = new Int32Array(a);
                    m.HEAPU8 = E = new Uint8Array(a);
                    m.HEAPU16 = Ea = new Uint16Array(a);
                    m.HEAPU32 = N = new Uint32Array(a);
                    m.HEAPF32 = Fa = new Float32Array(a);
                    m.HEAPF64 = Ia = new Float64Array(a);
                  }
                  var Ka, La = [], Ma = [], Na = [];
                  function Oa() {
                    var a = m.preRun.shift();
                    La.unshift(a);
                  }
                  var Pa = 0, Qa = null, Ra = null;
                  function Aa(a) {
                    if (m.onAbort) {
                      m.onAbort(a);
                    }
                    a = "Aborted(" + a + ")";
                    xa(a);
                    Ca = true;
                    a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                    ea(a);
                    throw a;
                  }
                  function Sa(a) {
                    return a.startsWith("data:application/octet-stream;base64,");
                  }
                  var Ta;
                  Ta = "canvas_advanced.wasm";
                  if (!Sa(Ta)) {
                    var Ua = Ta;
                    Ta = m.locateFile ? m.locateFile(Ua, qa) : qa + Ua;
                  }
                  function Va(a) {
                    if (a == Ta && ya) {
                      return new Uint8Array(ya);
                    }
                    if (va) {
                      return va(a);
                    }
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function Wa(a) {
                    if (!ya && (oa || pa)) {
                      if ("function" == typeof fetch && !a.startsWith("file://")) {
                        return fetch(a, { credentials: "same-origin" }).then((b) => {
                          if (!b.ok) {
                            throw "failed to load wasm binary file at '" + a + "'";
                          }
                          return b.arrayBuffer();
                        }).catch(() => Va(a));
                      }
                      if (ua) {
                        return new Promise((b, c) => {
                          ua(a, (d) => b(new Uint8Array(d)), c);
                        });
                      }
                    }
                    return Promise.resolve().then(() => Va(a));
                  }
                  function Xa(a, b, c) {
                    return Wa(a).then((d) => WebAssembly.instantiate(d, b)).then((d) => d).then(c, (d) => {
                      xa("failed to asynchronously prepare wasm: " + d);
                      Aa(d);
                    });
                  }
                  function Ya(a, b) {
                    var c = Ta;
                    return ya || "function" != typeof WebAssembly.instantiateStreaming || Sa(c) || c.startsWith("file://") || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, { credentials: "same-origin" }).then((d) => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                      xa("wasm streaming compile failed: " + e);
                      xa("falling back to ArrayBuffer instantiation");
                      return Xa(c, a, b);
                    }));
                  }
                  var Za, $a, db = { 443372: (a, b, c, d, e) => {
                    if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) {
                      return 0;
                    }
                    if ("undefined" === typeof window.h) {
                      window.h = { Aa: 0 };
                      window.h.I = {};
                      window.h.I.ya = a;
                      window.h.I.capture = b;
                      window.h.I.La = c;
                      window.h.ga = {};
                      window.h.ga.stopped = d;
                      window.h.ga.xb = e;
                      let f = window.h;
                      f.D = [];
                      f.yc = function(g) {
                        for (var n = 0; n < f.D.length; ++n) {
                          if (null == f.D[n]) {
                            return f.D[n] = g, n;
                          }
                        }
                        f.D.push(g);
                        return f.D.length - 1;
                      };
                      f.Cb = function(g) {
                        for (f.D[g] = null; 0 < f.D.length; ) {
                          if (null == f.D[f.D.length - 1]) {
                            f.D.pop();
                          } else {
                            break;
                          }
                        }
                      };
                      f.Sc = function(g) {
                        for (var n = 0; n < f.D.length; ++n) {
                          if (f.D[n] == g) {
                            return f.Cb(n);
                          }
                        }
                      };
                      f.ra = function(g) {
                        return f.D[g];
                      };
                      f.Bb = ["touchend", "click"];
                      f.unlock = function() {
                        for (var g = 0; g < f.D.length; ++g) {
                          var n = f.D[g];
                          null != n && null != n.J && n.state === f.ga.xb && n.J.resume().then(() => {
                            ab(n.pb);
                          }, (p) => {
                            console.error("Failed to resume audiocontext", p);
                          });
                        }
                        f.Bb.map(function(p) {
                          document.removeEventListener(p, f.unlock, true);
                        });
                      };
                      f.Bb.map(function(g) {
                        document.addEventListener(g, f.unlock, true);
                      });
                    }
                    window.h.Aa += 1;
                    return 1;
                  }, 445550: () => {
                    "undefined" !== typeof window.h && (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                  }, 445714: () => void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia, 445818: () => {
                    try {
                      var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                      a.close();
                      return b;
                    } catch (c) {
                      return 0;
                    }
                  }, 445989: (a, b, c, d, e, f) => {
                    if ("undefined" === typeof window.h) {
                      return -1;
                    }
                    var g = {}, n = {};
                    a == window.h.I.ya && 0 != c && (n.sampleRate = c);
                    g.J = new (window.AudioContext || window.webkitAudioContext)(n);
                    g.J.suspend();
                    g.state = window.h.ga.stopped;
                    c = 0;
                    a != window.h.I.ya && (c = b);
                    g.Z = g.J.createScriptProcessor(d, c, b);
                    g.Z.onaudioprocess = function(p) {
                      if (null == g.sa || 0 == g.sa.length) {
                        g.sa = new Float32Array(Fa.buffer, e, d * b);
                      }
                      if (a == window.h.I.capture || a == window.h.I.La) {
                        for (var l = 0; l < b; l += 1) {
                          for (var u = p.inputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1) {
                            v[x * b + l] = u[x];
                          }
                        }
                        bb(f, d, e);
                      }
                      if (a == window.h.I.ya || a == window.h.I.La) {
                        for (cb(f, d, e), l = 0; l < p.outputBuffer.numberOfChannels; ++l) {
                          for (u = p.outputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1) {
                            u[x] = v[x * b + l];
                          }
                        }
                      } else {
                        for (l = 0; l < p.outputBuffer.numberOfChannels; ++l) {
                          p.outputBuffer.getChannelData(l).fill(0);
                        }
                      }
                    };
                    a != window.h.I.capture && a != window.h.I.La || navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(p) {
                      g.Da = g.J.createMediaStreamSource(p);
                      g.Da.connect(g.Z);
                      g.Z.connect(g.J.destination);
                    }).catch(function(p) {
                      console.log("Failed to get user media: " + p);
                    });
                    a == window.h.I.ya && g.Z.connect(g.J.destination);
                    g.pb = f;
                    return window.h.yc(g);
                  }, 448866: (a) => window.h.ra(a).J.sampleRate, 448939: (a) => {
                    a = window.h.ra(a);
                    void 0 !== a.Z && (a.Z.onaudioprocess = function() {
                    }, a.Z.disconnect(), a.Z = void 0);
                    void 0 !== a.Da && (a.Da.disconnect(), a.Da = void 0);
                    a.J.close();
                    a.J = void 0;
                    a.pb = void 0;
                  }, 449339: (a) => {
                    window.h.Cb(a);
                  }, 449389: (a) => {
                    a = window.h.ra(a);
                    a.J.resume();
                    a.state = window.h.ga.xb;
                  }, 449528: (a) => {
                    a = window.h.ra(a);
                    a.J.suspend();
                    a.state = window.h.ga.stopped;
                  } }, eb = (a) => {
                    for (; 0 < a.length; ) {
                      a.shift()(m);
                    }
                  }, fb = (a, b) => {
                    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                      var e = a[d];
                      "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
                    }
                    if (b) {
                      for (; c; c--) {
                        a.unshift("..");
                      }
                    }
                    return a;
                  }, gb = (a) => {
                    var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
                    (a = fb(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
                    a && c && (a += "/");
                    return (b ? "/" : "") + a;
                  }, hb = (a) => {
                    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                    a = b[0];
                    b = b[1];
                    if (!a && !b) {
                      return ".";
                    }
                    b && (b = b.substr(0, b.length - 1));
                    return a + b;
                  }, ib = (a) => {
                    if ("/" === a) {
                      return "/";
                    }
                    a = gb(a);
                    a = a.replace(/\/$/, "");
                    var b = a.lastIndexOf("/");
                    return -1 === b ? a : a.substr(b + 1);
                  }, jb = () => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                      return (a) => crypto.getRandomValues(a);
                    }
                    Aa("initRandomDevice");
                  }, kb = (a) => (kb = jb())(a);
                  function lb() {
                    for (var a = "", b = false, c = arguments.length - 1; -1 <= c && !b; c--) {
                      b = 0 <= c ? arguments[c] : "/";
                      if ("string" != typeof b) {
                        throw new TypeError("Arguments to path.resolve must be strings");
                      }
                      if (!b) {
                        return "";
                      }
                      a = b + "/" + a;
                      b = "/" === b.charAt(0);
                    }
                    a = fb(a.split("/").filter((d) => !!d), !b).join("/");
                    return (b ? "/" : "") + a || ".";
                  }
                  var mb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, nb = (a, b, c) => {
                    var d = b + c;
                    for (c = b; a[c] && !(c >= d); ) {
                      ++c;
                    }
                    if (16 < c - b && a.buffer && mb) {
                      return mb.decode(a.subarray(b, c));
                    }
                    for (d = ""; b < c; ) {
                      var e = a[b++];
                      if (e & 128) {
                        var f = a[b++] & 63;
                        if (192 == (e & 224)) {
                          d += String.fromCharCode((e & 31) << 6 | f);
                        } else {
                          var g = a[b++] & 63;
                          e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                          65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                        }
                      } else {
                        d += String.fromCharCode(e);
                      }
                    }
                    return d;
                  }, ob = [], pb = (a) => {
                    for (var b = 0, c = 0; c < a.length; ++c) {
                      var d = a.charCodeAt(c);
                      127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
                    }
                    return b;
                  }, qb = (a, b, c, d) => {
                    if (!(0 < d)) {
                      return 0;
                    }
                    var e = c;
                    d = c + d - 1;
                    for (var f = 0; f < a.length; ++f) {
                      var g = a.charCodeAt(f);
                      if (55296 <= g && 57343 >= g) {
                        var n = a.charCodeAt(++f);
                        g = 65536 + ((g & 1023) << 10) | n & 1023;
                      }
                      if (127 >= g) {
                        if (c >= d) {
                          break;
                        }
                        b[c++] = g;
                      } else {
                        if (2047 >= g) {
                          if (c + 1 >= d) {
                            break;
                          }
                          b[c++] = 192 | g >> 6;
                        } else {
                          if (65535 >= g) {
                            if (c + 2 >= d) {
                              break;
                            }
                            b[c++] = 224 | g >> 12;
                          } else {
                            if (c + 3 >= d) {
                              break;
                            }
                            b[c++] = 240 | g >> 18;
                            b[c++] = 128 | g >> 12 & 63;
                          }
                          b[c++] = 128 | g >> 6 & 63;
                        }
                        b[c++] = 128 | g & 63;
                      }
                    }
                    b[c] = 0;
                    return c - e;
                  };
                  function rb(a, b) {
                    var c = Array(pb(a) + 1);
                    a = qb(a, c, 0, c.length);
                    b && (c.length = a);
                    return c;
                  }
                  var sb = [];
                  function tb(a, b) {
                    sb[a] = { input: [], F: [], V: b };
                    ub(a, vb);
                  }
                  var vb = { open: function(a) {
                    var b = sb[a.node.za];
                    if (!b) {
                      throw new O(43);
                    }
                    a.s = b;
                    a.seekable = false;
                  }, close: function(a) {
                    a.s.V.qa(a.s);
                  }, qa: function(a) {
                    a.s.V.qa(a.s);
                  }, read: function(a, b, c, d) {
                    if (!a.s || !a.s.V.ib) {
                      throw new O(60);
                    }
                    for (var e = 0, f = 0; f < d; f++) {
                      try {
                        var g = a.s.V.ib(a.s);
                      } catch (n) {
                        throw new O(29);
                      }
                      if (void 0 === g && 0 === e) {
                        throw new O(6);
                      }
                      if (null === g || void 0 === g) {
                        break;
                      }
                      e++;
                      b[c + f] = g;
                    }
                    e && (a.node.timestamp = Date.now());
                    return e;
                  }, write: function(a, b, c, d) {
                    if (!a.s || !a.s.V.Oa) {
                      throw new O(60);
                    }
                    try {
                      for (var e = 0; e < d; e++) {
                        a.s.V.Oa(a.s, b[c + e]);
                      }
                    } catch (f) {
                      throw new O(29);
                    }
                    d && (a.node.timestamp = Date.now());
                    return e;
                  } }, wb = { ib: function() {
                    a: {
                      if (!ob.length) {
                        var a = null;
                        "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                        if (!a) {
                          a = null;
                          break a;
                        }
                        ob = rb(a, true);
                      }
                      a = ob.shift();
                    }
                    return a;
                  }, Oa: function(a, b) {
                    null === b || 10 === b ? (wa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                  }, qa: function(a) {
                    a.F && 0 < a.F.length && (wa(nb(a.F, 0)), a.F = []);
                  }, bc: function() {
                    return { Fc: 25856, Hc: 5, Ec: 191, Gc: 35387, Dc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
                  }, cc: function() {
                    return 0;
                  }, dc: function() {
                    return [24, 80];
                  } }, xb = { Oa: function(a, b) {
                    null === b || 10 === b ? (xa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                  }, qa: function(a) {
                    a.F && 0 < a.F.length && (xa(nb(a.F, 0)), a.F = []);
                  } };
                  function yb(a, b) {
                    var c = a.j ? a.j.length : 0;
                    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.v && a.j.set(c.subarray(0, a.v), 0));
                  }
                  var P = { O: null, U() {
                    return P.createNode(null, "/", 16895, 0);
                  }, createNode(a, b, c, d) {
                    if (24576 === (c & 61440) || 4096 === (c & 61440)) {
                      throw new O(63);
                    }
                    P.O || (P.O = { dir: { node: { Y: P.l.Y, P: P.l.P, ka: P.l.ka, va: P.l.va, ub: P.l.ub, Ab: P.l.Ab, vb: P.l.vb, sb: P.l.sb, Ea: P.l.Ea }, stream: { ba: P.m.ba } }, file: { node: { Y: P.l.Y, P: P.l.P }, stream: { ba: P.m.ba, read: P.m.read, write: P.m.write, pa: P.m.pa, lb: P.m.lb, nb: P.m.nb } }, link: { node: { Y: P.l.Y, P: P.l.P, ma: P.l.ma }, stream: {} }, $a: { node: { Y: P.l.Y, P: P.l.P }, stream: zb } });
                    c = Ab(a, b, c, d);
                    16384 === (c.mode & 61440) ? (c.l = P.O.dir.node, c.m = P.O.dir.stream, c.j = {}) : 32768 === (c.mode & 61440) ? (c.l = P.O.file.node, c.m = P.O.file.stream, c.v = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.l = P.O.link.node, c.m = P.O.link.stream) : 8192 === (c.mode & 61440) && (c.l = P.O.$a.node, c.m = P.O.$a.stream);
                    c.timestamp = Date.now();
                    a && (a.j[b] = c, a.timestamp = c.timestamp);
                    return c;
                  }, Kc(a) {
                    return a.j ? a.j.subarray ? a.j.subarray(0, a.v) : new Uint8Array(a.j) : new Uint8Array(0);
                  }, l: { Y(a) {
                    var b = {};
                    b.Jc = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.Mc = a.id;
                    b.mode = a.mode;
                    b.Oc = 1;
                    b.uid = 0;
                    b.Lc = 0;
                    b.za = a.za;
                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.Bc = new Date(a.timestamp);
                    b.Nc = new Date(a.timestamp);
                    b.Ic = new Date(a.timestamp);
                    b.Jb = 4096;
                    b.Cc = Math.ceil(b.size / b.Jb);
                    return b;
                  }, P(a, b) {
                    void 0 !== b.mode && (a.mode = b.mode);
                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                    if (void 0 !== b.size && (b = b.size, a.v != b)) {
                      if (0 == b) {
                        a.j = null, a.v = 0;
                      } else {
                        var c = a.j;
                        a.j = new Uint8Array(b);
                        c && a.j.set(c.subarray(0, Math.min(b, a.v)));
                        a.v = b;
                      }
                    }
                  }, ka() {
                    throw Bb[44];
                  }, va(a, b, c, d) {
                    return P.createNode(a, b, c, d);
                  }, ub(a, b, c) {
                    if (16384 === (a.mode & 61440)) {
                      try {
                        var d = Cb(b, c);
                      } catch (f) {
                      }
                      if (d) {
                        for (var e in d.j) {
                          throw new O(55);
                        }
                      }
                    }
                    delete a.parent.j[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.j[c] = a;
                    b.timestamp = a.parent.timestamp;
                    a.parent = b;
                  }, Ab(a, b) {
                    delete a.j[b];
                    a.timestamp = Date.now();
                  }, vb(a, b) {
                    var c = Cb(a, b), d;
                    for (d in c.j) {
                      throw new O(55);
                    }
                    delete a.j[b];
                    a.timestamp = Date.now();
                  }, sb(a) {
                    var b = [".", ".."], c;
                    for (c in a.j) {
                      a.j.hasOwnProperty(c) && b.push(c);
                    }
                    return b;
                  }, Ea(a, b, c) {
                    a = P.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a;
                  }, ma(a) {
                    if (40960 !== (a.mode & 61440)) {
                      throw new O(28);
                    }
                    return a.link;
                  } }, m: { read(a, b, c, d, e) {
                    var f = a.node.j;
                    if (e >= a.node.v) {
                      return 0;
                    }
                    a = Math.min(a.node.v - e, d);
                    if (8 < a && f.subarray) {
                      b.set(f.subarray(e, e + a), c);
                    } else {
                      for (d = 0; d < a; d++) {
                        b[c + d] = f[e + d];
                      }
                    }
                    return a;
                  }, write(a, b, c, d, e, f) {
                    b.buffer === C.buffer && (f = false);
                    if (!d) {
                      return 0;
                    }
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.j || a.j.subarray)) {
                      if (f) {
                        return a.j = b.subarray(c, c + d), a.v = d;
                      }
                      if (0 === a.v && 0 === e) {
                        return a.j = b.slice(c, c + d), a.v = d;
                      }
                      if (e + d <= a.v) {
                        return a.j.set(b.subarray(c, c + d), e), d;
                      }
                    }
                    yb(a, e + d);
                    if (a.j.subarray && b.subarray) {
                      a.j.set(b.subarray(c, c + d), e);
                    } else {
                      for (f = 0; f < d; f++) {
                        a.j[e + f] = b[c + f];
                      }
                    }
                    a.v = Math.max(a.v, e + d);
                    return d;
                  }, ba(a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                    if (0 > b) {
                      throw new O(28);
                    }
                    return b;
                  }, pa(a, b, c) {
                    yb(a.node, b + c);
                    a.node.v = Math.max(a.node.v, b + c);
                  }, lb(a, b, c, d, e) {
                    if (32768 !== (a.node.mode & 61440)) {
                      throw new O(43);
                    }
                    a = a.node.j;
                    if (e & 2 || a.buffer !== C.buffer) {
                      if (0 < c || c + b < a.length) {
                        a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                      }
                      c = true;
                      Aa();
                      b = void 0;
                      if (!b) {
                        throw new O(48);
                      }
                      C.set(a, b);
                    } else {
                      c = false, b = a.byteOffset;
                    }
                    return { o: b, M: c };
                  }, nb(a, b, c, d) {
                    P.m.write(a, b, 0, d, c, false);
                    return 0;
                  } } };
                  function Db(a, b) {
                    var c = 0;
                    a && (c |= 365);
                    b && (c |= 146);
                    return c;
                  }
                  var Eb = null, Fb = {}, Gb = [], Hb = 1, Ib = null, Jb = true, O = null, Bb = {}, Lb = (a, b = {}) => {
                    a = lb(a);
                    if (!a) {
                      return { path: "", node: null };
                    }
                    b = Object.assign({ gb: true, Qa: 0 }, b);
                    if (8 < b.Qa) {
                      throw new O(32);
                    }
                    a = a.split("/").filter((g) => !!g);
                    for (var c = Eb, d = "/", e = 0; e < a.length; e++) {
                      var f = e === a.length - 1;
                      if (f && b.parent) {
                        break;
                      }
                      c = Cb(c, a[e]);
                      d = gb(d + "/" + a[e]);
                      c.wa && (!f || f && b.gb) && (c = c.wa.root);
                      if (!f || b.fb) {
                        for (f = 0; 40960 === (c.mode & 61440); ) {
                          if (c = Kb(d), d = lb(hb(d), c), c = Lb(d, { Qa: b.Qa + 1 }).node, 40 < f++) {
                            throw new O(32);
                          }
                        }
                      }
                    }
                    return { path: d, node: c };
                  }, Mb = (a) => {
                    for (var b; ; ) {
                      if (a === a.parent) {
                        return a = a.U.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                      }
                      b = b ? `${a.name}/${b}` : a.name;
                      a = a.parent;
                    }
                  }, Nb = (a, b) => {
                    for (var c = 0, d = 0; d < b.length; d++) {
                      c = (c << 5) - c + b.charCodeAt(d) | 0;
                    }
                    return (a + c >>> 0) % Ib.length;
                  }, Cb = (a, b) => {
                    var c;
                    if (c = (c = Ob(a, "x")) ? c : a.l.ka ? 0 : 2) {
                      throw new O(c, a);
                    }
                    for (c = Ib[Nb(a.id, b)]; c; c = c.lc) {
                      var d = c.name;
                      if (c.parent.id === a.id && d === b) {
                        return c;
                      }
                    }
                    return a.l.ka(a, b);
                  }, Ab = (a, b, c, d) => {
                    a = new Pb(a, b, c, d);
                    b = Nb(a.parent.id, a.name);
                    a.lc = Ib[b];
                    return Ib[b] = a;
                  }, Qb = (a) => {
                    var b = ["r", "w", "rw"][a & 3];
                    a & 512 && (b += "w");
                    return b;
                  }, Ob = (a, b) => {
                    if (Jb) {
                      return 0;
                    }
                    if (!b.includes("r") || a.mode & 292) {
                      if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
                        return 2;
                      }
                    } else {
                      return 2;
                    }
                    return 0;
                  }, Rb = (a, b) => {
                    try {
                      return Cb(a, b), 20;
                    } catch (c) {
                    }
                    return Ob(a, "wx");
                  }, Sb = () => {
                    for (var a = 0; 4096 >= a; a++) {
                      if (!Gb[a]) {
                        return a;
                      }
                    }
                    throw new O(33);
                  }, Tb = (a) => {
                    a = Gb[a];
                    if (!a) {
                      throw new O(8);
                    }
                    return a;
                  }, Vb = (a, b = -1) => {
                    Ub || (Ub = function() {
                      this.h = {};
                    }, Ub.prototype = {}, Object.defineProperties(Ub.prototype, { object: { get() {
                      return this.node;
                    }, set(c) {
                      this.node = c;
                    } }, flags: { get() {
                      return this.h.flags;
                    }, set(c) {
                      this.h.flags = c;
                    } }, position: { get() {
                      return this.h.position;
                    }, set(c) {
                      this.h.position = c;
                    } } }));
                    a = Object.assign(new Ub(), a);
                    -1 == b && (b = Sb());
                    a.X = b;
                    return Gb[b] = a;
                  }, zb = { open: (a) => {
                    a.m = Fb[a.node.za].m;
                    a.m.open && a.m.open(a);
                  }, ba: () => {
                    throw new O(70);
                  } }, ub = (a, b) => {
                    Fb[a] = { m: b };
                  }, Wb = (a, b) => {
                    var c = "/" === b, d = !b;
                    if (c && Eb) {
                      throw new O(10);
                    }
                    if (!c && !d) {
                      var e = Lb(b, { gb: false });
                      b = e.path;
                      e = e.node;
                      if (e.wa) {
                        throw new O(10);
                      }
                      if (16384 !== (e.mode & 61440)) {
                        throw new O(54);
                      }
                    }
                    b = { type: a, Qc: {}, mb: b, kc: [] };
                    a = a.U(b);
                    a.U = b;
                    b.root = a;
                    c ? Eb = a : e && (e.wa = b, e.U && e.U.kc.push(b));
                  }, S = (a, b, c) => {
                    var d = Lb(a, { parent: true }).node;
                    a = ib(a);
                    if (!a || "." === a || ".." === a) {
                      throw new O(28);
                    }
                    var e = Rb(d, a);
                    if (e) {
                      throw new O(e);
                    }
                    if (!d.l.va) {
                      throw new O(63);
                    }
                    return d.l.va(d, a, b, c);
                  }, Xb = (a, b, c) => {
                    "undefined" == typeof c && (c = b, b = 438);
                    S(a, b | 8192, c);
                  }, cc = (a, b) => {
                    if (!lb(a)) {
                      throw new O(44);
                    }
                    var c = Lb(b, { parent: true }).node;
                    if (!c) {
                      throw new O(44);
                    }
                    b = ib(b);
                    var d = Rb(c, b);
                    if (d) {
                      throw new O(d);
                    }
                    if (!c.l.Ea) {
                      throw new O(63);
                    }
                    c.l.Ea(c, b, a);
                  }, Kb = (a) => {
                    a = Lb(a).node;
                    if (!a) {
                      throw new O(44);
                    }
                    if (!a.l.ma) {
                      throw new O(28);
                    }
                    return lb(Mb(a.parent), a.l.ma(a));
                  }, ec = (a, b, c) => {
                    if ("" === a) {
                      throw new O(44);
                    }
                    if ("string" == typeof b) {
                      var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
                      if ("undefined" == typeof d) {
                        throw Error(`Unknown file open mode: ${b}`);
                      }
                      b = d;
                    }
                    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                    if ("object" == typeof a) {
                      var e = a;
                    } else {
                      a = gb(a);
                      try {
                        e = Lb(a, { fb: !(b & 131072) }).node;
                      } catch (f) {
                      }
                    }
                    d = false;
                    if (b & 64) {
                      if (e) {
                        if (b & 128) {
                          throw new O(20);
                        }
                      } else {
                        e = S(a, c, 0), d = true;
                      }
                    }
                    if (!e) {
                      throw new O(44);
                    }
                    8192 === (e.mode & 61440) && (b &= -513);
                    if (b & 65536 && 16384 !== (e.mode & 61440)) {
                      throw new O(54);
                    }
                    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Qb(b) || b & 512) ? 31 : Ob(e, Qb(b)) : 44)) {
                      throw new O(c);
                    }
                    if (b & 512 && !d) {
                      c = e;
                      c = "string" == typeof c ? Lb(c, { fb: true }).node : c;
                      if (!c.l.P) {
                        throw new O(63);
                      }
                      if (16384 === (c.mode & 61440)) {
                        throw new O(31);
                      }
                      if (32768 !== (c.mode & 61440)) {
                        throw new O(28);
                      }
                      if (d = Ob(c, "w")) {
                        throw new O(d);
                      }
                      c.l.P(c, { size: 0, timestamp: Date.now() });
                    }
                    b &= -131713;
                    e = Vb({ node: e, path: Mb(e), flags: b, seekable: true, position: 0, m: e.m, zc: [], error: false });
                    e.m.open && e.m.open(e);
                    !m.logReadFiles || b & 1 || (dc || (dc = {}), a in dc || (dc[a] = 1));
                    return e;
                  }, fc = (a, b, c) => {
                    if (null === a.X) {
                      throw new O(8);
                    }
                    if (!a.seekable || !a.m.ba) {
                      throw new O(70);
                    }
                    if (0 != c && 1 != c && 2 != c) {
                      throw new O(28);
                    }
                    a.position = a.m.ba(a, b, c);
                    a.zc = [];
                  }, gc = () => {
                    O || (O = function(a, b) {
                      this.name = "ErrnoError";
                      this.node = b;
                      this.pc = function(c) {
                        this.aa = c;
                      };
                      this.pc(a);
                      this.message = "FS error";
                    }, O.prototype = Error(), O.prototype.constructor = O, [44].forEach((a) => {
                      Bb[a] = new O(a);
                      Bb[a].stack = "<generic error, no stack>";
                    }));
                  }, hc, jc = (a, b, c) => {
                    a = gb("/dev/" + a);
                    var d = Db(!!b, !!c);
                    ic || (ic = 64);
                    var e = ic++ << 8 | 0;
                    ub(e, { open: (f) => {
                      f.seekable = false;
                    }, close: () => {
                      c && c.buffer && c.buffer.length && c(10);
                    }, read: (f, g, n, p) => {
                      for (var l = 0, u = 0; u < p; u++) {
                        try {
                          var v = b();
                        } catch (x) {
                          throw new O(29);
                        }
                        if (void 0 === v && 0 === l) {
                          throw new O(6);
                        }
                        if (null === v || void 0 === v) {
                          break;
                        }
                        l++;
                        g[n + u] = v;
                      }
                      l && (f.node.timestamp = Date.now());
                      return l;
                    }, write: (f, g, n, p) => {
                      for (var l = 0; l < p; l++) {
                        try {
                          c(g[n + l]);
                        } catch (u) {
                          throw new O(29);
                        }
                      }
                      p && (f.node.timestamp = Date.now());
                      return l;
                    } });
                    Xb(a, d, e);
                  }, ic, kc = {}, Ub, dc, lc = void 0;
                  function mc() {
                    lc += 4;
                    return L[lc - 4 >> 2];
                  }
                  function nc(a) {
                    if (void 0 === a) {
                      return "_unknown";
                    }
                    a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                    var b = a.charCodeAt(0);
                    return 48 <= b && 57 >= b ? `_${a}` : a;
                  }
                  function oc(a, b) {
                    a = nc(a);
                    return { [a]: function() {
                      return b.apply(this, arguments);
                    } }[a];
                  }
                  function pc() {
                    this.M = [void 0];
                    this.hb = [];
                  }
                  var U = new pc(), qc = void 0;
                  function V(a) {
                    throw new qc(a);
                  }
                  var rc = (a) => {
                    a || V("Cannot use deleted val. handle = " + a);
                    return U.get(a).value;
                  }, sc = (a) => {
                    switch (a) {
                      case void 0:
                        return 1;
                      case null:
                        return 2;
                      case true:
                        return 3;
                      case false:
                        return 4;
                      default:
                        return U.pa({ tb: 1, value: a });
                    }
                  };
                  function tc(a) {
                    var b = Error, c = oc(a, function(d) {
                      this.name = a;
                      this.message = d;
                      d = Error(d).stack;
                      void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                    });
                    c.prototype = Object.create(b.prototype);
                    c.prototype.constructor = c;
                    c.prototype.toString = function() {
                      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                    };
                    return c;
                  }
                  var uc = void 0, vc = void 0;
                  function W(a) {
                    for (var b = ""; E[a]; ) {
                      b += vc[E[a++]];
                    }
                    return b;
                  }
                  var wc = [];
                  function xc() {
                    for (; wc.length; ) {
                      var a = wc.pop();
                      a.g.fa = false;
                      a["delete"]();
                    }
                  }
                  var yc = void 0, zc = {};
                  function Ac(a, b) {
                    for (void 0 === b && V("ptr should not be undefined"); a.A; ) {
                      b = a.na(b), a = a.A;
                    }
                    return b;
                  }
                  var Bc = {};
                  function Cc(a) {
                    a = Dc(a);
                    var b = W(a);
                    Ec(a);
                    return b;
                  }
                  function Fc(a, b) {
                    var c = Bc[a];
                    void 0 === c && V(b + " has unknown type " + Cc(a));
                    return c;
                  }
                  function Gc() {
                  }
                  var Hc = false;
                  function Ic(a) {
                    --a.count.value;
                    0 === a.count.value && (a.G ? a.L.W(a.G) : a.u.i.W(a.o));
                  }
                  function Jc(a, b, c) {
                    if (b === c) {
                      return a;
                    }
                    if (void 0 === c.A) {
                      return null;
                    }
                    a = Jc(a, b, c.A);
                    return null === a ? null : c.Pb(a);
                  }
                  var Kc = {};
                  function Lc(a, b) {
                    b = Ac(a, b);
                    return zc[b];
                  }
                  var Mc = void 0;
                  function Nc(a) {
                    throw new Mc(a);
                  }
                  function Oc(a, b) {
                    b.u && b.o || Nc("makeClassHandle requires ptr and ptrType");
                    !!b.L !== !!b.G && Nc("Both smartPtrType and smartPtr must be specified");
                    b.count = { value: 1 };
                    return Pc(Object.create(a, { g: { value: b } }));
                  }
                  function Pc(a) {
                    if ("undefined" === typeof FinalizationRegistry) {
                      return Pc = (b) => b, a;
                    }
                    Hc = new FinalizationRegistry((b) => {
                      Ic(b.g);
                    });
                    Pc = (b) => {
                      var c = b.g;
                      c.G && Hc.register(b, { g: c }, b);
                      return b;
                    };
                    Gc = (b) => {
                      Hc.unregister(b);
                    };
                    return Pc(a);
                  }
                  var Qc = {};
                  function Rc(a) {
                    for (; a.length; ) {
                      var b = a.pop();
                      a.pop()(b);
                    }
                  }
                  function Sc(a) {
                    return this.fromWireType(L[a >> 2]);
                  }
                  var Tc = {}, Uc = {};
                  function Y(a, b, c) {
                    function d(n) {
                      n = c(n);
                      n.length !== a.length && Nc("Mismatched type converter count");
                      for (var p = 0; p < a.length; ++p) {
                        Vc(a[p], n[p]);
                      }
                    }
                    a.forEach(function(n) {
                      Uc[n] = b;
                    });
                    var e = Array(b.length), f = [], g = 0;
                    b.forEach((n, p) => {
                      Bc.hasOwnProperty(n) ? e[p] = Bc[n] : (f.push(n), Tc.hasOwnProperty(n) || (Tc[n] = []), Tc[n].push(() => {
                        e[p] = Bc[n];
                        ++g;
                        g === f.length && d(e);
                      }));
                    });
                    0 === f.length && d(e);
                  }
                  function Wc(a) {
                    switch (a) {
                      case 1:
                        return 0;
                      case 2:
                        return 1;
                      case 4:
                        return 2;
                      case 8:
                        return 3;
                      default:
                        throw new TypeError(`Unknown type size: ${a}`);
                    }
                  }
                  function Xc(a, b, c = {}) {
                    var d = b.name;
                    a || V(`type "${d}" must have a positive integer typeid pointer`);
                    if (Bc.hasOwnProperty(a)) {
                      if (c.$b) {
                        return;
                      }
                      V(`Cannot register type '${d}' twice`);
                    }
                    Bc[a] = b;
                    delete Uc[a];
                    Tc.hasOwnProperty(a) && (b = Tc[a], delete Tc[a], b.forEach((e) => e()));
                  }
                  function Vc(a, b, c = {}) {
                    if (!("argPackAdvance" in b)) {
                      throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    }
                    Xc(a, b, c);
                  }
                  function Yc(a) {
                    V(a.g.u.i.name + " instance already deleted");
                  }
                  function Zc() {
                  }
                  function $c(a, b, c) {
                    if (void 0 === a[b].B) {
                      var d = a[b];
                      a[b] = function() {
                        a[b].B.hasOwnProperty(arguments.length) || V(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].B})!`);
                        return a[b].B[arguments.length].apply(this, arguments);
                      };
                      a[b].B = [];
                      a[b].B[d.ea] = d;
                    }
                  }
                  function ad(a, b, c) {
                    m.hasOwnProperty(a) ? ((void 0 === c || void 0 !== m[a].B && void 0 !== m[a].B[c]) && V(`Cannot register public name '${a}' twice`), $c(m, a, a), m.hasOwnProperty(c) && V(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`), m[a].B[c] = b) : (m[a] = b, void 0 !== c && (m[a].Pc = c));
                  }
                  function bd(a, b, c, d, e, f, g, n) {
                    this.name = a;
                    this.constructor = b;
                    this.N = c;
                    this.W = d;
                    this.A = e;
                    this.Ub = f;
                    this.na = g;
                    this.Pb = n;
                    this.qb = [];
                  }
                  function cd(a, b, c) {
                    for (; b !== c; ) {
                      b.na || V(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.na(a), b = b.A;
                    }
                    return a;
                  }
                  function dd(a, b) {
                    if (null === b) {
                      return this.Na && V(`null is not a valid ${this.name}`), 0;
                    }
                    b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                    b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    return cd(b.g.o, b.g.u.i, this.i);
                  }
                  function fd(a, b) {
                    if (null === b) {
                      this.Na && V(`null is not a valid ${this.name}`);
                      if (this.ua) {
                        var c = this.Pa();
                        null !== a && a.push(this.W, c);
                        return c;
                      }
                      return 0;
                    }
                    b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                    b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    !this.ta && b.g.u.ta && V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                    c = cd(b.g.o, b.g.u.i, this.i);
                    if (this.ua) {
                      switch (void 0 === b.g.G && V("Passing raw pointer to smart pointer is illegal"), this.tc) {
                        case 0:
                          b.g.L === this ? c = b.g.G : V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                          break;
                        case 1:
                          c = b.g.G;
                          break;
                        case 2:
                          if (b.g.L === this) {
                            c = b.g.G;
                          } else {
                            var d = b.clone();
                            c = this.oc(c, sc(function() {
                              d["delete"]();
                            }));
                            null !== a && a.push(this.W, c);
                          }
                          break;
                        default:
                          V("Unsupporting sharing policy");
                      }
                    }
                    return c;
                  }
                  function gd(a, b) {
                    if (null === b) {
                      return this.Na && V(`null is not a valid ${this.name}`), 0;
                    }
                    b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                    b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    b.g.u.ta && V(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
                    return cd(b.g.o, b.g.u.i, this.i);
                  }
                  function hd(a, b, c, d) {
                    this.name = a;
                    this.i = b;
                    this.Na = c;
                    this.ta = d;
                    this.ua = false;
                    this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0;
                    void 0 !== b.A ? this.toWireType = fd : (this.toWireType = d ? dd : gd, this.K = null);
                  }
                  function jd(a, b, c) {
                    m.hasOwnProperty(a) || Nc("Replacing nonexistant public symbol");
                    void 0 !== m[a].B && void 0 !== c ? m[a].B[c] = b : (m[a] = b, m[a].ea = c);
                  }
                  var kd = [], ld = (a) => {
                    var b = kd[a];
                    b || (a >= kd.length && (kd.length = a + 1), kd[a] = b = Ka.get(a));
                    return b;
                  }, md = (a, b) => {
                    var c = [];
                    return function() {
                      c.length = 0;
                      Object.assign(c, arguments);
                      if (a.includes("j")) {
                        var d = m["dynCall_" + a];
                        d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
                      } else {
                        d = ld(b).apply(null, c);
                      }
                      return d;
                    };
                  };
                  function Z(a, b) {
                    a = W(a);
                    var c = a.includes("j") ? md(a, b) : ld(b);
                    "function" != typeof c && V(`unknown function pointer with signature ${a}: ${b}`);
                    return c;
                  }
                  var nd = void 0;
                  function od(a, b) {
                    function c(f) {
                      e[f] || Bc[f] || (Uc[f] ? Uc[f].forEach(c) : (d.push(f), e[f] = true));
                    }
                    var d = [], e = {};
                    b.forEach(c);
                    throw new nd(`${a}: ` + d.map(Cc).join([", "]));
                  }
                  function pd(a, b, c, d, e) {
                    var f = b.length;
                    2 > f && V("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    var g = null !== b[1] && null !== c, n = false;
                    for (c = 1; c < b.length; ++c) {
                      if (null !== b[c] && void 0 === b[c].K) {
                        n = true;
                        break;
                      }
                    }
                    var p = "void" !== b[0].name, l = f - 2, u = Array(l), v = [], x = [];
                    return function() {
                      arguments.length !== l && V(`function ${a} called with ${arguments.length} arguments, expected ${l} args!`);
                      x.length = 0;
                      v.length = g ? 2 : 1;
                      v[0] = e;
                      if (g) {
                        var k = b[1].toWireType(x, this);
                        v[1] = k;
                      }
                      for (var t2 = 0; t2 < l; ++t2) {
                        u[t2] = b[t2 + 2].toWireType(x, arguments[t2]), v.push(u[t2]);
                      }
                      t2 = d.apply(null, v);
                      if (n) {
                        Rc(x);
                      } else {
                        for (var r = g ? 1 : 2; r < b.length; r++) {
                          var B = 1 === r ? k : u[r - 2];
                          null !== b[r].K && b[r].K(B);
                        }
                      }
                      k = p ? b[0].fromWireType(t2) : void 0;
                      return k;
                    };
                  }
                  function sd(a, b) {
                    for (var c = [], d = 0; d < a; d++) {
                      c.push(N[b + 4 * d >> 2]);
                    }
                    return c;
                  }
                  function td(a, b, c) {
                    a instanceof Object || V(`${c} with invalid "this": ${a}`);
                    a instanceof b.i.constructor || V(`${c} incompatible with "this" of type ${a.constructor.name}`);
                    a.g.o || V(`cannot call emscripten binding method ${c} on deleted object`);
                    return cd(a.g.o, a.g.u.i, b.i);
                  }
                  function ud(a) {
                    a >= U.h && 0 === --U.get(a).tb && U.Zb(a);
                  }
                  function vd(a, b, c) {
                    switch (b) {
                      case 0:
                        return function(d) {
                          return this.fromWireType((c ? C : E)[d]);
                        };
                      case 1:
                        return function(d) {
                          return this.fromWireType((c ? Da : Ea)[d >> 1]);
                        };
                      case 2:
                        return function(d) {
                          return this.fromWireType((c ? L : N)[d >> 2]);
                        };
                      default:
                        throw new TypeError("Unknown integer type: " + a);
                    }
                  }
                  function ed(a) {
                    if (null === a) {
                      return "null";
                    }
                    var b = typeof a;
                    return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                  }
                  function wd(a, b) {
                    switch (b) {
                      case 2:
                        return function(c) {
                          return this.fromWireType(Fa[c >> 2]);
                        };
                      case 3:
                        return function(c) {
                          return this.fromWireType(Ia[c >> 3]);
                        };
                      default:
                        throw new TypeError("Unknown float type: " + a);
                    }
                  }
                  function xd(a, b, c) {
                    switch (b) {
                      case 0:
                        return c ? function(d) {
                          return C[d];
                        } : function(d) {
                          return E[d];
                        };
                      case 1:
                        return c ? function(d) {
                          return Da[d >> 1];
                        } : function(d) {
                          return Ea[d >> 1];
                        };
                      case 2:
                        return c ? function(d) {
                          return L[d >> 2];
                        } : function(d) {
                          return N[d >> 2];
                        };
                      default:
                        throw new TypeError("Unknown integer type: " + a);
                    }
                  }
                  var yd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, zd = (a, b) => {
                    var c = a >> 1;
                    for (var d = c + b / 2; !(c >= d) && Ea[c]; ) {
                      ++c;
                    }
                    c <<= 1;
                    if (32 < c - a && yd) {
                      return yd.decode(E.subarray(a, c));
                    }
                    c = "";
                    for (d = 0; !(d >= b / 2); ++d) {
                      var e = Da[a + 2 * d >> 1];
                      if (0 == e) {
                        break;
                      }
                      c += String.fromCharCode(e);
                    }
                    return c;
                  }, Ad = (a, b, c) => {
                    void 0 === c && (c = 2147483647);
                    if (2 > c) {
                      return 0;
                    }
                    c -= 2;
                    var d = b;
                    c = c < 2 * a.length ? c / 2 : a.length;
                    for (var e = 0; e < c; ++e) {
                      Da[b >> 1] = a.charCodeAt(e), b += 2;
                    }
                    Da[b >> 1] = 0;
                    return b - d;
                  }, Bd = (a) => 2 * a.length, Cd = (a, b) => {
                    for (var c = 0, d = ""; !(c >= b / 4); ) {
                      var e = L[a + 4 * c >> 2];
                      if (0 == e) {
                        break;
                      }
                      ++c;
                      65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
                    }
                    return d;
                  }, Dd = (a, b, c) => {
                    void 0 === c && (c = 2147483647);
                    if (4 > c) {
                      return 0;
                    }
                    var d = b;
                    c = d + c - 4;
                    for (var e = 0; e < a.length; ++e) {
                      var f = a.charCodeAt(e);
                      if (55296 <= f && 57343 >= f) {
                        var g = a.charCodeAt(++e);
                        f = 65536 + ((f & 1023) << 10) | g & 1023;
                      }
                      L[b >> 2] = f;
                      b += 4;
                      if (b + 4 > c) {
                        break;
                      }
                    }
                    L[b >> 2] = 0;
                    return b - d;
                  }, Ed = (a) => {
                    for (var b = 0, c = 0; c < a.length; ++c) {
                      var d = a.charCodeAt(c);
                      55296 <= d && 57343 >= d && ++c;
                      b += 4;
                    }
                    return b;
                  }, Fd = {};
                  function Gd(a) {
                    var b = Fd[a];
                    return void 0 === b ? W(a) : b;
                  }
                  var Hd = [];
                  function Id(a) {
                    var b = Hd.length;
                    Hd.push(a);
                    return b;
                  }
                  function Jd(a, b) {
                    for (var c = Array(a), d = 0; d < a; ++d) {
                      c[d] = Fc(N[b + 4 * d >> 2], "parameter " + d);
                    }
                    return c;
                  }
                  var Kd = [], Ld = [], Md = {}, Od = () => {
                    if (!Nd) {
                      var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: na || "./this.program" }, b;
                      for (b in Md) {
                        void 0 === Md[b] ? delete a[b] : a[b] = Md[b];
                      }
                      var c = [];
                      for (b in a) {
                        c.push(`${b}=${a[b]}`);
                      }
                      Nd = c;
                    }
                    return Nd;
                  }, Nd, Pd = (a) => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Qd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Rd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Sd = (a, b, c, d) => {
                    function e(k, t2, r) {
                      for (k = "number" == typeof k ? k.toString() : k || ""; k.length < t2; ) {
                        k = r[0] + k;
                      }
                      return k;
                    }
                    function f(k, t2) {
                      return e(k, t2, "0");
                    }
                    function g(k, t2) {
                      function r(D) {
                        return 0 > D ? -1 : 0 < D ? 1 : 0;
                      }
                      var B;
                      0 === (B = r(k.getFullYear() - t2.getFullYear())) && 0 === (B = r(k.getMonth() - t2.getMonth())) && (B = r(k.getDate() - t2.getDate()));
                      return B;
                    }
                    function n(k) {
                      switch (k.getDay()) {
                        case 0:
                          return new Date(k.getFullYear() - 1, 11, 29);
                        case 1:
                          return k;
                        case 2:
                          return new Date(k.getFullYear(), 0, 3);
                        case 3:
                          return new Date(k.getFullYear(), 0, 2);
                        case 4:
                          return new Date(k.getFullYear(), 0, 1);
                        case 5:
                          return new Date(k.getFullYear() - 1, 11, 31);
                        case 6:
                          return new Date(k.getFullYear() - 1, 11, 30);
                      }
                    }
                    function p(k) {
                      var t2 = k.ca;
                      for (k = new Date(new Date(k.da + 1900, 0, 1).getTime()); 0 < t2; ) {
                        var r = k.getMonth(), B = (Pd(k.getFullYear()) ? Qd : Rd)[r];
                        if (t2 > B - k.getDate()) {
                          t2 -= B - k.getDate() + 1, k.setDate(1), 11 > r ? k.setMonth(r + 1) : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
                        } else {
                          k.setDate(k.getDate() + t2);
                          break;
                        }
                      }
                      r = new Date(k.getFullYear() + 1, 0, 4);
                      t2 = n(new Date(k.getFullYear(), 0, 4));
                      r = n(r);
                      return 0 >= g(t2, k) ? 0 >= g(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
                    }
                    var l = L[d + 40 >> 2];
                    d = { wc: L[d >> 2], vc: L[d + 4 >> 2], Fa: L[d + 8 >> 2], Sa: L[d + 12 >> 2], Ga: L[d + 16 >> 2], da: L[d + 20 >> 2], R: L[d + 24 >> 2], ca: L[d + 28 >> 2], Rc: L[d + 32 >> 2], uc: L[d + 36 >> 2], xc: l ? l ? nb(E, l) : "" : "" };
                    c = c ? nb(E, c) : "";
                    l = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
                    for (var u in l) {
                      c = c.replace(new RegExp(u, "g"), l[u]);
                    }
                    var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
                    l = { "%a": (k) => v[k.R].substring(0, 3), "%A": (k) => v[k.R], "%b": (k) => x[k.Ga].substring(0, 3), "%B": (k) => x[k.Ga], "%C": (k) => f((k.da + 1900) / 100 | 0, 2), "%d": (k) => f(k.Sa, 2), "%e": (k) => e(k.Sa, 2, " "), "%g": (k) => p(k).toString().substring(2), "%G": (k) => p(k), "%H": (k) => f(k.Fa, 2), "%I": (k) => {
                      k = k.Fa;
                      0 == k ? k = 12 : 12 < k && (k -= 12);
                      return f(k, 2);
                    }, "%j": (k) => {
                      for (var t2 = 0, r = 0; r <= k.Ga - 1; t2 += (Pd(k.da + 1900) ? Qd : Rd)[r++]) {
                      }
                      return f(k.Sa + t2, 3);
                    }, "%m": (k) => f(k.Ga + 1, 2), "%M": (k) => f(k.vc, 2), "%n": () => "\n", "%p": (k) => 0 <= k.Fa && 12 > k.Fa ? "AM" : "PM", "%S": (k) => f(k.wc, 2), "%t": () => "	", "%u": (k) => k.R || 7, "%U": (k) => f(Math.floor((k.ca + 7 - k.R) / 7), 2), "%V": (k) => {
                      var t2 = Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7);
                      2 >= (k.R + 371 - k.ca - 2) % 7 && t2++;
                      if (t2) {
                        53 == t2 && (r = (k.R + 371 - k.ca) % 7, 4 == r || 3 == r && Pd(k.da) || (t2 = 1));
                      } else {
                        t2 = 52;
                        var r = (k.R + 7 - k.ca - 1) % 7;
                        (4 == r || 5 == r && Pd(k.da % 400 - 1)) && t2++;
                      }
                      return f(t2, 2);
                    }, "%w": (k) => k.R, "%W": (k) => f(Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7), 2), "%y": (k) => (k.da + 1900).toString().substring(2), "%Y": (k) => k.da + 1900, "%z": (k) => {
                      k = k.uc;
                      var t2 = 0 <= k;
                      k = Math.abs(k) / 60;
                      return (t2 ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
                    }, "%Z": (k) => k.xc, "%%": () => "%" };
                    c = c.replace(/%%/g, "\0\0");
                    for (u in l) {
                      c.includes(u) && (c = c.replace(new RegExp(u, "g"), l[u](d)));
                    }
                    c = c.replace(/\0\0/g, "%");
                    u = rb(c, false);
                    if (u.length > b) {
                      return 0;
                    }
                    C.set(u, a);
                    return u.length - 1;
                  };
                  function Pb(a, b, c, d) {
                    a || (a = this);
                    this.parent = a;
                    this.U = a.U;
                    this.wa = null;
                    this.id = Hb++;
                    this.name = b;
                    this.mode = c;
                    this.l = {};
                    this.m = {};
                    this.za = d;
                  }
                  Object.defineProperties(Pb.prototype, { read: { get: function() {
                    return 365 === (this.mode & 365);
                  }, set: function(a) {
                    a ? this.mode |= 365 : this.mode &= -366;
                  } }, write: { get: function() {
                    return 146 === (this.mode & 146);
                  }, set: function(a) {
                    a ? this.mode |= 146 : this.mode &= -147;
                  } } });
                  gc();
                  Ib = Array(4096);
                  Wb(P, "/");
                  S("/tmp", 16895, 0);
                  S("/home", 16895, 0);
                  S("/home/web_user", 16895, 0);
                  (() => {
                    S("/dev", 16895, 0);
                    ub(259, { read: () => 0, write: (d, e, f, g) => g });
                    Xb("/dev/null", 259);
                    tb(1280, wb);
                    tb(1536, xb);
                    Xb("/dev/tty", 1280);
                    Xb("/dev/tty1", 1536);
                    var a = new Uint8Array(1024), b = 0, c = () => {
                      0 === b && (b = kb(a).byteLength);
                      return a[--b];
                    };
                    jc("random", c);
                    jc("urandom", c);
                    S("/dev/shm", 16895, 0);
                    S("/dev/shm/tmp", 16895, 0);
                  })();
                  (() => {
                    S("/proc", 16895, 0);
                    var a = S("/proc/self", 16895, 0);
                    S("/proc/self/fd", 16895, 0);
                    Wb({ U: () => {
                      var b = Ab(a, "fd", 16895, 73);
                      b.l = { ka: (c, d) => {
                        var e = Tb(+d);
                        c = { parent: null, U: { mb: "fake" }, l: { ma: () => e.path } };
                        return c.parent = c;
                      } };
                      return b;
                    } }, "/proc/self/fd");
                  })();
                  Object.assign(pc.prototype, { get(a) {
                    return this.M[a];
                  }, has(a) {
                    return void 0 !== this.M[a];
                  }, pa(a) {
                    var b = this.hb.pop() || this.M.length;
                    this.M[b] = a;
                    return b;
                  }, Zb(a) {
                    this.M[a] = void 0;
                    this.hb.push(a);
                  } });
                  qc = m.BindingError = class extends Error {
                    constructor(a) {
                      super(a);
                      this.name = "BindingError";
                    }
                  };
                  U.M.push({ value: void 0 }, { value: null }, { value: true }, { value: false });
                  U.h = U.M.length;
                  m.count_emval_handles = function() {
                    for (var a = 0, b = U.h; b < U.M.length; ++b) {
                      void 0 !== U.M[b] && ++a;
                    }
                    return a;
                  };
                  uc = m.PureVirtualError = tc("PureVirtualError");
                  for (var Td = Array(256), Ud = 0; 256 > Ud; ++Ud) {
                    Td[Ud] = String.fromCharCode(Ud);
                  }
                  vc = Td;
                  m.getInheritedInstanceCount = function() {
                    return Object.keys(zc).length;
                  };
                  m.getLiveInheritedInstances = function() {
                    var a = [], b;
                    for (b in zc) {
                      zc.hasOwnProperty(b) && a.push(zc[b]);
                    }
                    return a;
                  };
                  m.flushPendingDeletes = xc;
                  m.setDelayFunction = function(a) {
                    yc = a;
                    wc.length && yc && yc(xc);
                  };
                  Mc = m.InternalError = class extends Error {
                    constructor(a) {
                      super(a);
                      this.name = "InternalError";
                    }
                  };
                  Zc.prototype.isAliasOf = function(a) {
                    if (!(this instanceof Zc && a instanceof Zc)) {
                      return false;
                    }
                    var b = this.g.u.i, c = this.g.o, d = a.g.u.i;
                    for (a = a.g.o; b.A; ) {
                      c = b.na(c), b = b.A;
                    }
                    for (; d.A; ) {
                      a = d.na(a), d = d.A;
                    }
                    return b === d && c === a;
                  };
                  Zc.prototype.clone = function() {
                    this.g.o || Yc(this);
                    if (this.g.ia) {
                      return this.g.count.value += 1, this;
                    }
                    var a = Pc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
                    a = a(c.call(b, d, { g: { value: { count: e.count, fa: e.fa, ia: e.ia, o: e.o, u: e.u, G: e.G, L: e.L } } }));
                    a.g.count.value += 1;
                    a.g.fa = false;
                    return a;
                  };
                  Zc.prototype["delete"] = function() {
                    this.g.o || Yc(this);
                    this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                    Gc(this);
                    Ic(this.g);
                    this.g.ia || (this.g.G = void 0, this.g.o = void 0);
                  };
                  Zc.prototype.isDeleted = function() {
                    return !this.g.o;
                  };
                  Zc.prototype.deleteLater = function() {
                    this.g.o || Yc(this);
                    this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                    wc.push(this);
                    1 === wc.length && yc && yc(xc);
                    this.g.fa = true;
                    return this;
                  };
                  hd.prototype.Vb = function(a) {
                    this.rb && (a = this.rb(a));
                    return a;
                  };
                  hd.prototype.ab = function(a) {
                    this.W && this.W(a);
                  };
                  hd.prototype.argPackAdvance = 8;
                  hd.prototype.readValueFromPointer = Sc;
                  hd.prototype.deleteObject = function(a) {
                    if (null !== a) {
                      a["delete"]();
                    }
                  };
                  hd.prototype.fromWireType = function(a) {
                    function b() {
                      return this.ua ? Oc(this.i.N, { u: this.nc, o: c, L: this, G: a }) : Oc(this.i.N, { u: this, o: a });
                    }
                    var c = this.Vb(a);
                    if (!c) {
                      return this.ab(a), null;
                    }
                    var d = Lc(this.i, c);
                    if (void 0 !== d) {
                      if (0 === d.g.count.value) {
                        return d.g.o = c, d.g.G = a, d.clone();
                      }
                      d = d.clone();
                      this.ab(a);
                      return d;
                    }
                    d = this.i.Ub(c);
                    d = Kc[d];
                    if (!d) {
                      return b.call(this);
                    }
                    d = this.ta ? d.Kb : d.pointerType;
                    var e = Jc(c, this.i, d.i);
                    return null === e ? b.call(this) : this.ua ? Oc(d.i.N, { u: d, o: e, L: this, G: a }) : Oc(d.i.N, { u: d, o: e });
                  };
                  nd = m.UnboundTypeError = tc("UnboundTypeError");
                  var Xd = { __syscall_fcntl64: function(a, b, c) {
                    lc = c;
                    try {
                      var d = Tb(a);
                      switch (b) {
                        case 0:
                          var e = mc();
                          return 0 > e ? -28 : Vb(d, e).X;
                        case 1:
                        case 2:
                          return 0;
                        case 3:
                          return d.flags;
                        case 4:
                          return e = mc(), d.flags |= e, 0;
                        case 5:
                          return e = mc(), Da[e + 0 >> 1] = 2, 0;
                        case 6:
                        case 7:
                          return 0;
                        case 16:
                        case 8:
                          return -28;
                        case 9:
                          return L[Vd() >> 2] = 28, -1;
                        default:
                          return -28;
                      }
                    } catch (f) {
                      if ("undefined" == typeof kc || "ErrnoError" !== f.name) {
                        throw f;
                      }
                      return -f.aa;
                    }
                  }, __syscall_ioctl: function(a, b, c) {
                    lc = c;
                    try {
                      var d = Tb(a);
                      switch (b) {
                        case 21509:
                          return d.s ? 0 : -59;
                        case 21505:
                          if (!d.s) {
                            return -59;
                          }
                          if (d.s.V.bc) {
                            b = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var e = mc();
                            L[e >> 2] = 25856;
                            L[e + 4 >> 2] = 5;
                            L[e + 8 >> 2] = 191;
                            L[e + 12 >> 2] = 35387;
                            for (var f = 0; 32 > f; f++) {
                              C[e + f + 17 >> 0] = b[f] || 0;
                            }
                          }
                          return 0;
                        case 21510:
                        case 21511:
                        case 21512:
                          return d.s ? 0 : -59;
                        case 21506:
                        case 21507:
                        case 21508:
                          if (!d.s) {
                            return -59;
                          }
                          if (d.s.V.cc) {
                            for (e = mc(), b = [], f = 0; 32 > f; f++) {
                              b.push(C[e + f + 17 >> 0]);
                            }
                          }
                          return 0;
                        case 21519:
                          if (!d.s) {
                            return -59;
                          }
                          e = mc();
                          return L[e >> 2] = 0;
                        case 21520:
                          return d.s ? -28 : -59;
                        case 21531:
                          e = mc();
                          if (!d.m.ac) {
                            throw new O(59);
                          }
                          return d.m.ac(d, b, e);
                        case 21523:
                          if (!d.s) {
                            return -59;
                          }
                          d.s.V.dc && (f = [24, 80], e = mc(), Da[e >> 1] = f[0], Da[e + 2 >> 1] = f[1]);
                          return 0;
                        case 21524:
                          return d.s ? 0 : -59;
                        case 21515:
                          return d.s ? 0 : -59;
                        default:
                          return -28;
                      }
                    } catch (g) {
                      if ("undefined" == typeof kc || "ErrnoError" !== g.name) {
                        throw g;
                      }
                      return -g.aa;
                    }
                  }, __syscall_openat: function(a, b, c, d) {
                    lc = d;
                    try {
                      b = b ? nb(E, b) : "";
                      var e = b;
                      if ("/" === e.charAt(0)) {
                        b = e;
                      } else {
                        var f = -100 === a ? "/" : Tb(a).path;
                        if (0 == e.length) {
                          throw new O(44);
                        }
                        b = gb(f + "/" + e);
                      }
                      var g = d ? mc() : 0;
                      return ec(b, c, g).X;
                    } catch (n) {
                      if ("undefined" == typeof kc || "ErrnoError" !== n.name) {
                        throw n;
                      }
                      return -n.aa;
                    }
                  }, _embind_create_inheriting_constructor: function(a, b, c) {
                    a = W(a);
                    b = Fc(b, "wrapper");
                    c = rc(c);
                    var d = [].slice, e = b.i, f = e.N, g = e.A.N, n = e.A.constructor;
                    a = oc(a, function() {
                      e.A.qb.forEach(function(l) {
                        if (this[l] === g[l]) {
                          throw new uc(`Pure virtual function ${l} must be implemented in JavaScript`);
                        }
                      }.bind(this));
                      Object.defineProperty(this, "__parent", { value: f });
                      this.__construct.apply(this, d.call(arguments));
                    });
                    f.__construct = function() {
                      this === f && V("Pass correct 'this' to __construct");
                      var l = n.implement.apply(void 0, [this].concat(d.call(arguments)));
                      Gc(l);
                      var u = l.g;
                      l.notifyOnDestruction();
                      u.ia = true;
                      Object.defineProperties(this, { g: { value: u } });
                      Pc(this);
                      l = u.o;
                      l = Ac(e, l);
                      zc.hasOwnProperty(l) ? V(`Tried to register registered instance: ${l}`) : zc[l] = this;
                    };
                    f.__destruct = function() {
                      this === f && V("Pass correct 'this' to __destruct");
                      Gc(this);
                      var l = this.g.o;
                      l = Ac(e, l);
                      zc.hasOwnProperty(l) ? delete zc[l] : V(`Tried to unregister unregistered instance: ${l}`);
                    };
                    a.prototype = Object.create(f);
                    for (var p in c) {
                      a.prototype[p] = c[p];
                    }
                    return sc(a);
                  }, _embind_finalize_value_object: function(a) {
                    var b = Qc[a];
                    delete Qc[a];
                    var c = b.Pa, d = b.W, e = b.eb, f = e.map((g) => g.Yb).concat(e.map((g) => g.rc));
                    Y([a], f, (g) => {
                      var n = {};
                      e.forEach((p, l) => {
                        var u = g[l], v = p.Wb, x = p.Xb, k = g[l + e.length], t2 = p.qc, r = p.sc;
                        n[p.Sb] = { read: (B) => u.fromWireType(v(x, B)), write: (B, D) => {
                          var w = [];
                          t2(r, B, k.toWireType(w, D));
                          Rc(w);
                        } };
                      });
                      return [{ name: b.name, fromWireType: function(p) {
                        var l = {}, u;
                        for (u in n) {
                          l[u] = n[u].read(p);
                        }
                        d(p);
                        return l;
                      }, toWireType: function(p, l) {
                        for (var u in n) {
                          if (!(u in l)) {
                            throw new TypeError(`Missing field: "${u}"`);
                          }
                        }
                        var v = c();
                        for (u in n) {
                          n[u].write(v, l[u]);
                        }
                        null !== p && p.push(d, v);
                        return v;
                      }, argPackAdvance: 8, readValueFromPointer: Sc, K: d }];
                    });
                  }, _embind_register_bigint: function() {
                  }, _embind_register_bool: function(a, b, c, d, e) {
                    var f = Wc(c);
                    b = W(b);
                    Vc(a, { name: b, fromWireType: function(g) {
                      return !!g;
                    }, toWireType: function(g, n) {
                      return n ? d : e;
                    }, argPackAdvance: 8, readValueFromPointer: function(g) {
                      if (1 === c) {
                        var n = C;
                      } else if (2 === c) {
                        n = Da;
                      } else if (4 === c) {
                        n = L;
                      } else {
                        throw new TypeError("Unknown boolean type size: " + b);
                      }
                      return this.fromWireType(n[g >> f]);
                    }, K: null });
                  }, _embind_register_class: function(a, b, c, d, e, f, g, n, p, l, u, v, x) {
                    u = W(u);
                    f = Z(e, f);
                    n && (n = Z(g, n));
                    l && (l = Z(p, l));
                    x = Z(v, x);
                    var k = nc(u);
                    ad(k, function() {
                      od(`Cannot construct ${u} due to unbound types`, [d]);
                    });
                    Y([a, b, c], d ? [d] : [], function(t2) {
                      t2 = t2[0];
                      if (d) {
                        var r = t2.i;
                        var B = r.N;
                      } else {
                        B = Zc.prototype;
                      }
                      t2 = oc(k, function() {
                        if (Object.getPrototypeOf(this) !== D) {
                          throw new qc("Use 'new' to construct " + u);
                        }
                        if (void 0 === w.$) {
                          throw new qc(u + " has no accessible constructor");
                        }
                        var T = w.$[arguments.length];
                        if (void 0 === T) {
                          throw new qc(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                        }
                        return T.apply(this, arguments);
                      });
                      var D = Object.create(B, { constructor: { value: t2 } });
                      t2.prototype = D;
                      var w = new bd(u, t2, D, x, r, f, n, l);
                      w.A && (void 0 === w.A.oa && (w.A.oa = []), w.A.oa.push(w));
                      r = new hd(u, w, true, false);
                      B = new hd(u + "*", w, false, false);
                      var M = new hd(u + " const*", w, false, true);
                      Kc[a] = { pointerType: B, Kb: M };
                      jd(k, t2);
                      return [r, B, M];
                    });
                  }, _embind_register_class_class_function: function(a, b, c, d, e, f, g) {
                    var n = sd(c, d);
                    b = W(b);
                    f = Z(e, f);
                    Y([], [a], function(p) {
                      function l() {
                        od(`Cannot call ${u} due to unbound types`, n);
                      }
                      p = p[0];
                      var u = `${p.name}.${b}`;
                      b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                      var v = p.i.constructor;
                      void 0 === v[b] ? (l.ea = c - 1, v[b] = l) : ($c(v, b, u), v[b].B[c - 1] = l);
                      Y([], n, function(x) {
                        x = pd(u, [x[0], null].concat(x.slice(1)), null, f, g);
                        void 0 === v[b].B ? (x.ea = c - 1, v[b] = x) : v[b].B[c - 1] = x;
                        if (p.i.oa) {
                          for (const k of p.i.oa) {
                            k.constructor.hasOwnProperty(b) || (k.constructor[b] = x);
                          }
                        }
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_class_property: function(a, b, c, d, e, f, g, n) {
                    b = W(b);
                    f = Z(e, f);
                    Y([], [a], function(p) {
                      p = p[0];
                      var l = `${p.name}.${b}`, u = { get() {
                        od(`Cannot access ${l} due to unbound types`, [c]);
                      }, enumerable: true, configurable: true };
                      u.set = n ? () => {
                        od(`Cannot access ${l} due to unbound types`, [c]);
                      } : () => {
                        V(`${l} is a read-only property`);
                      };
                      Object.defineProperty(p.i.constructor, b, u);
                      Y([], [c], function(v) {
                        v = v[0];
                        var x = { get() {
                          return v.fromWireType(f(d));
                        }, enumerable: true };
                        n && (n = Z(g, n), x.set = (k) => {
                          var t2 = [];
                          n(d, v.toWireType(t2, k));
                          Rc(t2);
                        });
                        Object.defineProperty(p.i.constructor, b, x);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_constructor: function(a, b, c, d, e, f) {
                    var g = sd(b, c);
                    e = Z(d, e);
                    Y([], [a], function(n) {
                      n = n[0];
                      var p = `constructor ${n.name}`;
                      void 0 === n.i.$ && (n.i.$ = []);
                      if (void 0 !== n.i.$[b - 1]) {
                        throw new qc(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${n.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                      }
                      n.i.$[b - 1] = () => {
                        od(`Cannot construct ${n.name} due to unbound types`, g);
                      };
                      Y([], g, function(l) {
                        l.splice(1, 0, null);
                        n.i.$[b - 1] = pd(p, l, null, e, f);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_function: function(a, b, c, d, e, f, g, n) {
                    var p = sd(c, d);
                    b = W(b);
                    f = Z(e, f);
                    Y([], [a], function(l) {
                      function u() {
                        od(`Cannot call ${v} due to unbound types`, p);
                      }
                      l = l[0];
                      var v = `${l.name}.${b}`;
                      b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                      n && l.i.qb.push(b);
                      var x = l.i.N, k = x[b];
                      void 0 === k || void 0 === k.B && k.className !== l.name && k.ea === c - 2 ? (u.ea = c - 2, u.className = l.name, x[b] = u) : ($c(x, b, v), x[b].B[c - 2] = u);
                      Y([], p, function(t2) {
                        t2 = pd(v, t2, l, f, g);
                        void 0 === x[b].B ? (t2.ea = c - 2, x[b] = t2) : x[b].B[c - 2] = t2;
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_property: function(a, b, c, d, e, f, g, n, p, l) {
                    b = W(b);
                    e = Z(d, e);
                    Y([], [a], function(u) {
                      u = u[0];
                      var v = `${u.name}.${b}`, x = { get() {
                        od(`Cannot access ${v} due to unbound types`, [c, g]);
                      }, enumerable: true, configurable: true };
                      x.set = p ? () => {
                        od(`Cannot access ${v} due to unbound types`, [c, g]);
                      } : () => {
                        V(v + " is a read-only property");
                      };
                      Object.defineProperty(u.i.N, b, x);
                      Y([], p ? [c, g] : [c], function(k) {
                        var t2 = k[0], r = { get() {
                          var D = td(this, u, v + " getter");
                          return t2.fromWireType(e(f, D));
                        }, enumerable: true };
                        if (p) {
                          p = Z(n, p);
                          var B = k[1];
                          r.set = function(D) {
                            var w = td(this, u, v + " setter"), M = [];
                            p(l, w, B.toWireType(M, D));
                            Rc(M);
                          };
                        }
                        Object.defineProperty(u.i.N, b, r);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_emval: function(a, b) {
                    b = W(b);
                    Vc(a, { name: b, fromWireType: function(c) {
                      var d = rc(c);
                      ud(c);
                      return d;
                    }, toWireType: function(c, d) {
                      return sc(d);
                    }, argPackAdvance: 8, readValueFromPointer: Sc, K: null });
                  }, _embind_register_enum: function(a, b, c, d) {
                    function e() {
                    }
                    c = Wc(c);
                    b = W(b);
                    e.values = {};
                    Vc(a, { name: b, constructor: e, fromWireType: function(f) {
                      return this.constructor.values[f];
                    }, toWireType: function(f, g) {
                      return g.value;
                    }, argPackAdvance: 8, readValueFromPointer: vd(b, c, d), K: null });
                    ad(b, e);
                  }, _embind_register_enum_value: function(a, b, c) {
                    var d = Fc(a, "enum");
                    b = W(b);
                    a = d.constructor;
                    d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: oc(`${d.name}_${b}`, function() {
                    }) } });
                    a.values[c] = d;
                    a[b] = d;
                  }, _embind_register_float: function(a, b, c) {
                    c = Wc(c);
                    b = W(b);
                    Vc(a, { name: b, fromWireType: function(d) {
                      return d;
                    }, toWireType: function(d, e) {
                      return e;
                    }, argPackAdvance: 8, readValueFromPointer: wd(b, c), K: null });
                  }, _embind_register_function: function(a, b, c, d, e, f) {
                    var g = sd(b, c);
                    a = W(a);
                    e = Z(d, e);
                    ad(a, function() {
                      od(`Cannot call ${a} due to unbound types`, g);
                    }, b - 1);
                    Y([], g, function(n) {
                      jd(a, pd(a, [n[0], null].concat(n.slice(1)), null, e, f), b - 1);
                      return [];
                    });
                  }, _embind_register_integer: function(a, b, c, d, e) {
                    b = W(b);
                    -1 === e && (e = 4294967295);
                    e = Wc(c);
                    var f = (n) => n;
                    if (0 === d) {
                      var g = 32 - 8 * c;
                      f = (n) => n << g >>> g;
                    }
                    c = b.includes("unsigned") ? function(n, p) {
                      return p >>> 0;
                    } : function(n, p) {
                      return p;
                    };
                    Vc(a, { name: b, fromWireType: f, toWireType: c, argPackAdvance: 8, readValueFromPointer: xd(b, e, 0 !== d), K: null });
                  }, _embind_register_memory_view: function(a, b, c) {
                    function d(f) {
                      f >>= 2;
                      var g = N;
                      return new e(g.buffer, g[f + 1], g[f]);
                    }
                    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
                    c = W(c);
                    Vc(a, { name: c, fromWireType: d, argPackAdvance: 8, readValueFromPointer: d }, { $b: true });
                  }, _embind_register_std_string: function(a, b) {
                    b = W(b);
                    var c = "std::string" === b;
                    Vc(a, { name: b, fromWireType: function(d) {
                      var e = N[d >> 2], f = d + 4;
                      if (c) {
                        for (var g = f, n = 0; n <= e; ++n) {
                          var p = f + n;
                          if (n == e || 0 == E[p]) {
                            g = g ? nb(E, g, p - g) : "";
                            if (void 0 === l) {
                              var l = g;
                            } else {
                              l += String.fromCharCode(0), l += g;
                            }
                            g = p + 1;
                          }
                        }
                      } else {
                        l = Array(e);
                        for (n = 0; n < e; ++n) {
                          l[n] = String.fromCharCode(E[f + n]);
                        }
                        l = l.join("");
                      }
                      Ec(d);
                      return l;
                    }, toWireType: function(d, e) {
                      e instanceof ArrayBuffer && (e = new Uint8Array(e));
                      var f = "string" == typeof e;
                      f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || V("Cannot pass non-string to std::string");
                      var g = c && f ? pb(e) : e.length;
                      var n = Wd(4 + g + 1), p = n + 4;
                      N[n >> 2] = g;
                      if (c && f) {
                        qb(e, E, p, g + 1);
                      } else {
                        if (f) {
                          for (f = 0; f < g; ++f) {
                            var l = e.charCodeAt(f);
                            255 < l && (Ec(p), V("String has UTF-16 code units that do not fit in 8 bits"));
                            E[p + f] = l;
                          }
                        } else {
                          for (f = 0; f < g; ++f) {
                            E[p + f] = e[f];
                          }
                        }
                      }
                      null !== d && d.push(Ec, n);
                      return n;
                    }, argPackAdvance: 8, readValueFromPointer: Sc, K: function(d) {
                      Ec(d);
                    } });
                  }, _embind_register_std_wstring: function(a, b, c) {
                    c = W(c);
                    if (2 === b) {
                      var d = zd;
                      var e = Ad;
                      var f = Bd;
                      var g = () => Ea;
                      var n = 1;
                    } else {
                      4 === b && (d = Cd, e = Dd, f = Ed, g = () => N, n = 2);
                    }
                    Vc(a, { name: c, fromWireType: function(p) {
                      for (var l = N[p >> 2], u = g(), v, x = p + 4, k = 0; k <= l; ++k) {
                        var t2 = p + 4 + k * b;
                        if (k == l || 0 == u[t2 >> n]) {
                          x = d(x, t2 - x), void 0 === v ? v = x : (v += String.fromCharCode(0), v += x), x = t2 + b;
                        }
                      }
                      Ec(p);
                      return v;
                    }, toWireType: function(p, l) {
                      "string" != typeof l && V(`Cannot pass non-string to C++ string type ${c}`);
                      var u = f(l), v = Wd(4 + u + b);
                      N[v >> 2] = u >> n;
                      e(l, v + 4, u + b);
                      null !== p && p.push(Ec, v);
                      return v;
                    }, argPackAdvance: 8, readValueFromPointer: Sc, K: function(p) {
                      Ec(p);
                    } });
                  }, _embind_register_value_object: function(a, b, c, d, e, f) {
                    Qc[a] = { name: W(b), Pa: Z(c, d), W: Z(e, f), eb: [] };
                  }, _embind_register_value_object_field: function(a, b, c, d, e, f, g, n, p, l) {
                    Qc[a].eb.push({ Sb: W(b), Yb: c, Wb: Z(d, e), Xb: f, rc: g, qc: Z(n, p), sc: l });
                  }, _embind_register_void: function(a, b) {
                    b = W(b);
                    Vc(a, { fc: true, name: b, argPackAdvance: 0, fromWireType: function() {
                    }, toWireType: function() {
                    } });
                  }, _emscripten_get_now_is_monotonic: () => true, _emval_as: function(a, b, c) {
                    a = rc(a);
                    b = Fc(b, "emval::as");
                    var d = [], e = sc(d);
                    N[c >> 2] = e;
                    return b.toWireType(d, a);
                  }, _emval_call_method: function(a, b, c, d, e) {
                    a = Hd[a];
                    b = rc(b);
                    c = Gd(c);
                    var f = [];
                    N[d >> 2] = sc(f);
                    return a(b, c, f, e);
                  }, _emval_call_void_method: function(a, b, c, d) {
                    a = Hd[a];
                    b = rc(b);
                    c = Gd(c);
                    a(b, c, null, d);
                  }, _emval_decref: ud, _emval_get_method_caller: function(a, b) {
                    var c = Jd(a, b), d = c[0];
                    b = d.name + "_$" + c.slice(1).map(function(g) {
                      return g.name;
                    }).join("_") + "$";
                    var e = Kd[b];
                    if (void 0 !== e) {
                      return e;
                    }
                    var f = Array(a - 1);
                    e = Id((g, n, p, l) => {
                      for (var u = 0, v = 0; v < a - 1; ++v) {
                        f[v] = c[v + 1].readValueFromPointer(l + u), u += c[v + 1].argPackAdvance;
                      }
                      g = g[n].apply(g, f);
                      for (v = 0; v < a - 1; ++v) {
                        c[v + 1].Nb && c[v + 1].Nb(f[v]);
                      }
                      if (!d.fc) {
                        return d.toWireType(p, g);
                      }
                    });
                    return Kd[b] = e;
                  }, _emval_get_module_property: function(a) {
                    a = Gd(a);
                    return sc(m[a]);
                  }, _emval_get_property: function(a, b) {
                    a = rc(a);
                    b = rc(b);
                    return sc(a[b]);
                  }, _emval_incref: function(a) {
                    4 < a && (U.get(a).tb += 1);
                  }, _emval_new_cstring: function(a) {
                    return sc(Gd(a));
                  }, _emval_new_object: function() {
                    return sc({});
                  }, _emval_run_destructors: function(a) {
                    var b = rc(a);
                    Rc(b);
                    ud(a);
                  }, _emval_set_property: function(a, b, c) {
                    a = rc(a);
                    b = rc(b);
                    c = rc(c);
                    a[b] = c;
                  }, _emval_take_value: function(a, b) {
                    a = Fc(a, "_emval_take_value");
                    a = a.readValueFromPointer(b);
                    return sc(a);
                  }, abort: () => {
                    Aa("");
                  }, emscripten_asm_const_int: (a, b, c) => {
                    Ld.length = 0;
                    var d;
                    for (c >>= 2; d = E[b++]; ) {
                      c += 105 != d & c, Ld.push(105 == d ? L[c] : Ia[c++ >> 1]), ++c;
                    }
                    return db[a].apply(null, Ld);
                  }, emscripten_date_now: function() {
                    return Date.now();
                  }, emscripten_get_now: () => performance.now(), emscripten_memcpy_big: (a, b, c) => E.copyWithin(a, b, b + c), emscripten_resize_heap: (a) => {
                    var b = E.length;
                    a >>>= 0;
                    if (2147483648 < a) {
                      return false;
                    }
                    for (var c = 1; 4 >= c; c *= 2) {
                      var d = b * (1 + 0.2 / c);
                      d = Math.min(d, a + 100663296);
                      var e = Math;
                      d = Math.max(a, d);
                      a: {
                        e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Ba.buffer.byteLength + 65535 >>> 16;
                        try {
                          Ba.grow(e);
                          Ja();
                          var f = 1;
                          break a;
                        } catch (g) {
                        }
                        f = void 0;
                      }
                      if (f) {
                        return true;
                      }
                    }
                    return false;
                  }, environ_get: (a, b) => {
                    var c = 0;
                    Od().forEach(function(d, e) {
                      var f = b + c;
                      e = N[a + 4 * e >> 2] = f;
                      for (f = 0; f < d.length; ++f) {
                        C[e++ >> 0] = d.charCodeAt(f);
                      }
                      C[e >> 0] = 0;
                      c += d.length + 1;
                    });
                    return 0;
                  }, environ_sizes_get: (a, b) => {
                    var c = Od();
                    N[a >> 2] = c.length;
                    var d = 0;
                    c.forEach(function(e) {
                      d += e.length + 1;
                    });
                    N[b >> 2] = d;
                    return 0;
                  }, fd_close: function(a) {
                    try {
                      var b = Tb(a);
                      if (null === b.X) {
                        throw new O(8);
                      }
                      b.Ma && (b.Ma = null);
                      try {
                        b.m.close && b.m.close(b);
                      } catch (c) {
                        throw c;
                      } finally {
                        Gb[b.X] = null;
                      }
                      b.X = null;
                      return 0;
                    } catch (c) {
                      if ("undefined" == typeof kc || "ErrnoError" !== c.name) {
                        throw c;
                      }
                      return c.aa;
                    }
                  }, fd_read: function(a, b, c, d) {
                    try {
                      a: {
                        var e = Tb(a);
                        a = b;
                        for (var f, g = b = 0; g < c; g++) {
                          var n = N[a >> 2], p = N[a + 4 >> 2];
                          a += 8;
                          var l = e, u = n, v = p, x = f, k = C;
                          if (0 > v || 0 > x) {
                            throw new O(28);
                          }
                          if (null === l.X) {
                            throw new O(8);
                          }
                          if (1 === (l.flags & 2097155)) {
                            throw new O(8);
                          }
                          if (16384 === (l.node.mode & 61440)) {
                            throw new O(31);
                          }
                          if (!l.m.read) {
                            throw new O(28);
                          }
                          var t2 = "undefined" != typeof x;
                          if (!t2) {
                            x = l.position;
                          } else if (!l.seekable) {
                            throw new O(70);
                          }
                          var r = l.m.read(l, k, u, v, x);
                          t2 || (l.position += r);
                          var B = r;
                          if (0 > B) {
                            var D = -1;
                            break a;
                          }
                          b += B;
                          if (B < p) {
                            break;
                          }
                          "undefined" !== typeof f && (f += B);
                        }
                        D = b;
                      }
                      N[d >> 2] = D;
                      return 0;
                    } catch (w) {
                      if ("undefined" == typeof kc || "ErrnoError" !== w.name) {
                        throw w;
                      }
                      return w.aa;
                    }
                  }, fd_seek: function(a, b, c, d, e) {
                    b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                    try {
                      if (isNaN(b)) {
                        return 61;
                      }
                      var f = Tb(a);
                      fc(f, b, d);
                      $a = [f.position >>> 0, (Za = f.position, 1 <= +Math.abs(Za) ? 0 < Za ? +Math.floor(Za / 4294967296) >>> 0 : ~~+Math.ceil((Za - +(~~Za >>> 0)) / 4294967296) >>> 0 : 0)];
                      L[e >> 2] = $a[0];
                      L[e + 4 >> 2] = $a[1];
                      f.Ma && 0 === b && 0 === d && (f.Ma = null);
                      return 0;
                    } catch (g) {
                      if ("undefined" == typeof kc || "ErrnoError" !== g.name) {
                        throw g;
                      }
                      return g.aa;
                    }
                  }, fd_write: function(a, b, c, d) {
                    try {
                      a: {
                        var e = Tb(a);
                        a = b;
                        for (var f, g = b = 0; g < c; g++) {
                          var n = N[a >> 2], p = N[a + 4 >> 2];
                          a += 8;
                          var l = e, u = n, v = p, x = f, k = C;
                          if (0 > v || 0 > x) {
                            throw new O(28);
                          }
                          if (null === l.X) {
                            throw new O(8);
                          }
                          if (0 === (l.flags & 2097155)) {
                            throw new O(8);
                          }
                          if (16384 === (l.node.mode & 61440)) {
                            throw new O(31);
                          }
                          if (!l.m.write) {
                            throw new O(28);
                          }
                          l.seekable && l.flags & 1024 && fc(l, 0, 2);
                          var t2 = "undefined" != typeof x;
                          if (!t2) {
                            x = l.position;
                          } else if (!l.seekable) {
                            throw new O(70);
                          }
                          var r = l.m.write(l, k, u, v, x, void 0);
                          t2 || (l.position += r);
                          var B = r;
                          if (0 > B) {
                            var D = -1;
                            break a;
                          }
                          b += B;
                          "undefined" !== typeof f && (f += B);
                        }
                        D = b;
                      }
                      N[d >> 2] = D;
                      return 0;
                    } catch (w) {
                      if ("undefined" == typeof kc || "ErrnoError" !== w.name) {
                        throw w;
                      }
                      return w.aa;
                    }
                  }, strftime_l: (a, b, c, d) => Sd(a, b, c, d) };
                  (function() {
                    function a(c) {
                      z = c = c.exports;
                      Ba = z.memory;
                      Ja();
                      Ka = z.__indirect_function_table;
                      Ma.unshift(z.__wasm_call_ctors);
                      Pa--;
                      m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                      if (0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra)) {
                        var d = Ra;
                        Ra = null;
                        d();
                      }
                      return c;
                    }
                    var b = { env: Xd, wasi_snapshot_preview1: Xd };
                    Pa++;
                    m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                    if (m.instantiateWasm) {
                      try {
                        return m.instantiateWasm(b, a);
                      } catch (c) {
                        xa("Module.instantiateWasm callback failed with error: " + c), ea(c);
                      }
                    }
                    Ya(b, function(c) {
                      a(c.instance);
                    }).catch(ea);
                    return {};
                  })();
                  var Ec = (a) => (Ec = z.free)(a), Wd = (a) => (Wd = z.malloc)(a), ab = m._ma_device__on_notification_unlocked = (a) => (ab = m._ma_device__on_notification_unlocked = z.ma_device__on_notification_unlocked)(a);
                  m._ma_malloc_emscripten = (a, b) => (m._ma_malloc_emscripten = z.ma_malloc_emscripten)(a, b);
                  m._ma_free_emscripten = (a, b) => (m._ma_free_emscripten = z.ma_free_emscripten)(a, b);
                  var bb = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c) => (bb = m._ma_device_process_pcm_frames_capture__webaudio = z.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), cb = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c) => (cb = m._ma_device_process_pcm_frames_playback__webaudio = z.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), Vd = () => (Vd = z.__errno_location)(), Dc = (a) => (Dc = z.__getTypeName)(a);
                  m.__embind_initialize_bindings = () => (m.__embind_initialize_bindings = z._embind_initialize_bindings)();
                  m.dynCall_iiji = (a, b, c, d, e) => (m.dynCall_iiji = z.dynCall_iiji)(a, b, c, d, e);
                  m.dynCall_jiji = (a, b, c, d, e) => (m.dynCall_jiji = z.dynCall_jiji)(a, b, c, d, e);
                  m.dynCall_iiiji = (a, b, c, d, e, f) => (m.dynCall_iiiji = z.dynCall_iiiji)(a, b, c, d, e, f);
                  m.dynCall_iij = (a, b, c, d) => (m.dynCall_iij = z.dynCall_iij)(a, b, c, d);
                  m.dynCall_jii = (a, b, c) => (m.dynCall_jii = z.dynCall_jii)(a, b, c);
                  m.dynCall_viijii = (a, b, c, d, e, f, g) => (m.dynCall_viijii = z.dynCall_viijii)(a, b, c, d, e, f, g);
                  m.dynCall_iiiiij = (a, b, c, d, e, f, g) => (m.dynCall_iiiiij = z.dynCall_iiiiij)(a, b, c, d, e, f, g);
                  m.dynCall_iiiiijj = (a, b, c, d, e, f, g, n, p) => (m.dynCall_iiiiijj = z.dynCall_iiiiijj)(a, b, c, d, e, f, g, n, p);
                  m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, n, p, l) => (m.dynCall_iiiiiijj = z.dynCall_iiiiiijj)(a, b, c, d, e, f, g, n, p, l);
                  var Yd;
                  Ra = function Zd() {
                    Yd || $d();
                    Yd || (Ra = Zd);
                  };
                  function $d() {
                    function a() {
                      if (!Yd && (Yd = true, m.calledRun = true, !Ca)) {
                        m.noFSInit || hc || (hc = true, gc(), m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? jc("stdin", m.stdin) : cc("/dev/tty", "/dev/stdin"), m.stdout ? jc("stdout", null, m.stdout) : cc("/dev/tty", "/dev/stdout"), m.stderr ? jc("stderr", null, m.stderr) : cc("/dev/tty1", "/dev/stderr"), ec("/dev/stdin", 0), ec("/dev/stdout", 1), ec("/dev/stderr", 1));
                        Jb = false;
                        eb(Ma);
                        aa(m);
                        if (m.onRuntimeInitialized) {
                          m.onRuntimeInitialized();
                        }
                        if (m.postRun) {
                          for ("function" == typeof m.postRun && (m.postRun = [m.postRun]); m.postRun.length; ) {
                            var b = m.postRun.shift();
                            Na.unshift(b);
                          }
                        }
                        eb(Na);
                      }
                    }
                    if (!(0 < Pa)) {
                      if (m.preRun) {
                        for ("function" == typeof m.preRun && (m.preRun = [m.preRun]); m.preRun.length; ) {
                          Oa();
                        }
                      }
                      eb(La);
                      0 < Pa || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
                        setTimeout(function() {
                          m.setStatus("");
                        }, 1);
                        a();
                      }, 1)) : a());
                    }
                  }
                  if (m.preInit) {
                    for ("function" == typeof m.preInit && (m.preInit = [m.preInit]); 0 < m.preInit.length; ) {
                      m.preInit.pop()();
                    }
                  }
                  $d();
                  return moduleArg.ready;
                };
              })();
              const __WEBPACK_DEFAULT_EXPORT__ = Rive2;
            },
            (module2) => {
              module2.exports = JSON.parse(`{"name":"@rive-app/canvas","version":"2.23.8","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`);
            },
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                Animation: () => _Animation__WEBPACK_IMPORTED_MODULE_0__.Animation
              });
              var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(4);
            },
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                Animation: () => Animation
              });
              var Animation = function() {
                function Animation2(animation, artboard, runtime, playing) {
                  this.animation = animation;
                  this.artboard = artboard;
                  this.playing = playing;
                  this.loopCount = 0;
                  this.scrubTo = null;
                  this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                }
                Object.defineProperty(Animation2.prototype, "name", {
                  get: function() {
                    return this.animation.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animation2.prototype, "time", {
                  get: function() {
                    return this.instance.time;
                  },
                  set: function(value) {
                    this.instance.time = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animation2.prototype, "loopValue", {
                  get: function() {
                    return this.animation.loopValue;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animation2.prototype, "needsScrub", {
                  get: function() {
                    return this.scrubTo !== null;
                  },
                  enumerable: false,
                  configurable: true
                });
                Animation2.prototype.advance = function(time) {
                  if (this.scrubTo === null) {
                    this.instance.advance(time);
                  } else {
                    this.instance.time = 0;
                    this.instance.advance(this.scrubTo);
                    this.scrubTo = null;
                  }
                };
                Animation2.prototype.apply = function(mix) {
                  this.instance.apply(mix);
                };
                Animation2.prototype.cleanup = function() {
                  this.instance.delete();
                };
                return Animation2;
              }();
            },
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                BLANK_URL: () => _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.BLANK_URL,
                registerTouchInteractions: () => _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions,
                sanitizeUrl: () => _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.sanitizeUrl
              });
              var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(6);
              var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(7);
            },
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                registerTouchInteractions: () => registerTouchInteractions
              });
              var _this = void 0;
              var getClientCoordinates = function(event, isTouchScrollEnabled) {
                var _a, _b;
                if (["touchstart", "touchmove"].indexOf(event.type) > -1 && ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length)) {
                  if (!isTouchScrollEnabled) {
                    event.preventDefault();
                  }
                  return {
                    clientX: event.touches[0].clientX,
                    clientY: event.touches[0].clientY
                  };
                } else if (event.type === "touchend" && ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) {
                  return {
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY
                  };
                } else {
                  return {
                    clientX: event.clientX,
                    clientY: event.clientY
                  };
                }
              };
              var registerTouchInteractions = function(_a) {
                var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive2 = _a.rive, fit = _a.fit, alignment = _a.alignment, _c = _a.isTouchScrollEnabled, isTouchScrollEnabled = _c === void 0 ? false : _c, _d = _a.layoutScaleFactor, layoutScaleFactor = _d === void 0 ? 1 : _d;
                if (!canvas || !stateMachines.length || !renderer || !rive2 || !artboard || typeof window === "undefined") {
                  return null;
                }
                var _prevEventType = null;
                var _syntheticEventsActive = false;
                var processEventCallback = function(event) {
                  if (_syntheticEventsActive && event instanceof MouseEvent) {
                    if (event.type == "mouseup") {
                      _syntheticEventsActive = false;
                    }
                    return;
                  }
                  _syntheticEventsActive = isTouchScrollEnabled && event.type === "touchend" && _prevEventType === "touchstart";
                  _prevEventType = event.type;
                  var boundingRect = event.currentTarget.getBoundingClientRect();
                  var _a2 = getClientCoordinates(event, isTouchScrollEnabled), clientX = _a2.clientX, clientY = _a2.clientY;
                  if (!clientX && !clientY) {
                    return;
                  }
                  var canvasX = clientX - boundingRect.left;
                  var canvasY = clientY - boundingRect.top;
                  var forwardMatrix = rive2.computeAlignment(fit, alignment, {
                    minX: 0,
                    minY: 0,
                    maxX: boundingRect.width,
                    maxY: boundingRect.height
                  }, artboard.bounds, layoutScaleFactor);
                  var invertedMatrix = new rive2.Mat2D();
                  forwardMatrix.invert(invertedMatrix);
                  var canvasCoordinatesVector = new rive2.Vec2D(canvasX, canvasY);
                  var transformedVector = rive2.mapXY(invertedMatrix, canvasCoordinatesVector);
                  var transformedX = transformedVector.x();
                  var transformedY = transformedVector.y();
                  transformedVector.delete();
                  invertedMatrix.delete();
                  canvasCoordinatesVector.delete();
                  forwardMatrix.delete();
                  switch (event.type) {
                    case "mouseout":
                      for (var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++) {
                        var stateMachine = stateMachines_1[_i];
                        stateMachine.pointerMove(transformedX < 0 ? transformedX - 1e4 : transformedX + 1e4, transformedY < 0 ? transformedY - 1e4 : transformedY + 1e4);
                      }
                      break;
                    case "touchmove":
                    case "mouseover":
                    case "mousemove": {
                      for (var _b2 = 0, stateMachines_2 = stateMachines; _b2 < stateMachines_2.length; _b2++) {
                        var stateMachine = stateMachines_2[_b2];
                        stateMachine.pointerMove(transformedX, transformedY);
                      }
                      break;
                    }
                    case "touchstart":
                    case "mousedown": {
                      for (var _c2 = 0, stateMachines_3 = stateMachines; _c2 < stateMachines_3.length; _c2++) {
                        var stateMachine = stateMachines_3[_c2];
                        stateMachine.pointerDown(transformedX, transformedY);
                      }
                      break;
                    }
                    case "touchend":
                    case "mouseup": {
                      for (var _d2 = 0, stateMachines_4 = stateMachines; _d2 < stateMachines_4.length; _d2++) {
                        var stateMachine = stateMachines_4[_d2];
                        stateMachine.pointerUp(transformedX, transformedY);
                      }
                      break;
                    }
                    default:
                  }
                };
                var callback = processEventCallback.bind(_this);
                canvas.addEventListener("mouseover", callback);
                canvas.addEventListener("mouseout", callback);
                canvas.addEventListener("mousemove", callback);
                canvas.addEventListener("mousedown", callback);
                canvas.addEventListener("mouseup", callback);
                canvas.addEventListener("touchmove", callback, {
                  passive: isTouchScrollEnabled
                });
                canvas.addEventListener("touchstart", callback, {
                  passive: isTouchScrollEnabled
                });
                canvas.addEventListener("touchend", callback);
                return function() {
                  canvas.removeEventListener("mouseover", callback);
                  canvas.removeEventListener("mouseout", callback);
                  canvas.removeEventListener("mousemove", callback);
                  canvas.removeEventListener("mousedown", callback);
                  canvas.removeEventListener("mouseup", callback);
                  canvas.removeEventListener("touchmove", callback);
                  canvas.removeEventListener("touchstart", callback);
                  canvas.removeEventListener("touchend", callback);
                };
              };
            },
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                BLANK_URL: () => BLANK_URL,
                sanitizeUrl: () => sanitizeUrl
              });
              var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
              var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
              var htmlCtrlEntityRegex = /&(newline|tab);/gi;
              var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
              var urlSchemeRegex = /^.+(:|&colon;)/gim;
              var relativeFirstCharacters = [".", "/"];
              var BLANK_URL = "about:blank";
              function isRelativeUrlWithoutProtocol(url) {
                return relativeFirstCharacters.indexOf(url[0]) > -1;
              }
              function decodeHtmlCharacters(str) {
                var removedNullByte = str.replace(ctrlCharactersRegex, "");
                return removedNullByte.replace(htmlEntitiesRegex, function(match, dec) {
                  return String.fromCharCode(dec);
                });
              }
              function sanitizeUrl(url) {
                if (!url) {
                  return BLANK_URL;
                }
                var sanitizedUrl = decodeHtmlCharacters(url).replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
                if (!sanitizedUrl) {
                  return BLANK_URL;
                }
                if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
                  return sanitizedUrl;
                }
                var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
                if (!urlSchemeParseResults) {
                  return sanitizedUrl;
                }
                var urlScheme = urlSchemeParseResults[0];
                if (invalidProtocolRegex.test(urlScheme)) {
                  return BLANK_URL;
                }
                return sanitizedUrl;
              }
            }
          ];
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              exports: {}
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              Alignment: () => Alignment,
              EventType: () => EventType,
              Fit: () => Fit,
              Layout: () => Layout,
              LoopType: () => LoopType,
              Rive: () => Rive2,
              RiveEventType: () => RiveEventType,
              RiveFile: () => RiveFile,
              RuntimeLoader: () => RuntimeLoader,
              StateMachineInput: () => StateMachineInput,
              StateMachineInputType: () => StateMachineInputType,
              Testing: () => Testing,
              decodeAudio: () => decodeAudio,
              decodeFont: () => decodeFont,
              decodeImage: () => decodeImage
            });
            var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
            var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
            var __extends = function() {
              var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                  d2.__proto__ = b2;
                } || function(d2, b2) {
                  for (var p in b2)
                    if (Object.prototype.hasOwnProperty.call(b2, p))
                      d2[p] = b2[p];
                };
                return extendStatics(d, b);
              };
              return function(d, b) {
                if (typeof b !== "function" && b !== null)
                  throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            var __awaiter = function(thisArg, _arguments, P, generator) {
              function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                  resolve(value);
                });
              }
              return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            };
            var __generator = function(thisArg, body) {
              var _ = { label: 0, sent: function() {
                if (t2[0] & 1)
                  throw t2[1];
                return t2[1];
              }, trys: [], ops: [] }, f, y, t2, g;
              return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
              }), g;
              function verb(n) {
                return function(v) {
                  return step([n, v]);
                };
              }
              function step(op) {
                if (f)
                  throw new TypeError("Generator is already executing.");
                while (g && (g = 0, op[0] && (_ = 0)), _)
                  try {
                    if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
                      return t2;
                    if (y = 0, t2)
                      op = [op[0] & 2, t2.value];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t2 = op;
                        break;
                      case 4:
                        _.label++;
                        return { value: op[1], done: false };
                      case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                      default:
                        if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                        }
                        if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                          _.label = op[1];
                          break;
                        }
                        if (op[0] === 6 && _.label < t2[1]) {
                          _.label = t2[1];
                          t2 = op;
                          break;
                        }
                        if (t2 && _.label < t2[2]) {
                          _.label = t2[2];
                          _.ops.push(op);
                          break;
                        }
                        if (t2[2])
                          _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                  } catch (e) {
                    op = [6, e];
                    y = 0;
                  } finally {
                    f = t2 = 0;
                  }
                if (op[0] & 5)
                  throw op[1];
                return { value: op[0] ? op[1] : void 0, done: true };
              }
            };
            var Fit;
            (function(Fit2) {
              Fit2["Cover"] = "cover";
              Fit2["Contain"] = "contain";
              Fit2["Fill"] = "fill";
              Fit2["FitWidth"] = "fitWidth";
              Fit2["FitHeight"] = "fitHeight";
              Fit2["None"] = "none";
              Fit2["ScaleDown"] = "scaleDown";
              Fit2["Layout"] = "layout";
            })(Fit || (Fit = {}));
            var Alignment;
            (function(Alignment2) {
              Alignment2["Center"] = "center";
              Alignment2["TopLeft"] = "topLeft";
              Alignment2["TopCenter"] = "topCenter";
              Alignment2["TopRight"] = "topRight";
              Alignment2["CenterLeft"] = "centerLeft";
              Alignment2["CenterRight"] = "centerRight";
              Alignment2["BottomLeft"] = "bottomLeft";
              Alignment2["BottomCenter"] = "bottomCenter";
              Alignment2["BottomRight"] = "bottomRight";
            })(Alignment || (Alignment = {}));
            var Layout = function() {
              function Layout2(params) {
                var _a, _b, _c, _d, _e, _f, _g;
                this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
                this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
                this.layoutScaleFactor = (_c = params === null || params === void 0 ? void 0 : params.layoutScaleFactor) !== null && _c !== void 0 ? _c : 1;
                this.minX = (_d = params === null || params === void 0 ? void 0 : params.minX) !== null && _d !== void 0 ? _d : 0;
                this.minY = (_e = params === null || params === void 0 ? void 0 : params.minY) !== null && _e !== void 0 ? _e : 0;
                this.maxX = (_f = params === null || params === void 0 ? void 0 : params.maxX) !== null && _f !== void 0 ? _f : 0;
                this.maxY = (_g = params === null || params === void 0 ? void 0 : params.maxY) !== null && _g !== void 0 ? _g : 0;
              }
              Layout2.new = function(_a) {
                var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                console.warn("This function is deprecated: please use `new Layout({})` instead");
                return new Layout2({ fit, alignment, minX, minY, maxX, maxY });
              };
              Layout2.prototype.copyWith = function(_a) {
                var fit = _a.fit, alignment = _a.alignment, layoutScaleFactor = _a.layoutScaleFactor, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                return new Layout2({
                  fit: fit !== null && fit !== void 0 ? fit : this.fit,
                  alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
                  layoutScaleFactor: layoutScaleFactor !== null && layoutScaleFactor !== void 0 ? layoutScaleFactor : this.layoutScaleFactor,
                  minX: minX !== null && minX !== void 0 ? minX : this.minX,
                  minY: minY !== null && minY !== void 0 ? minY : this.minY,
                  maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
                  maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
                });
              };
              Layout2.prototype.runtimeFit = function(rive2) {
                if (this.cachedRuntimeFit)
                  return this.cachedRuntimeFit;
                var fit;
                if (this.fit === Fit.Cover)
                  fit = rive2.Fit.cover;
                else if (this.fit === Fit.Contain)
                  fit = rive2.Fit.contain;
                else if (this.fit === Fit.Fill)
                  fit = rive2.Fit.fill;
                else if (this.fit === Fit.FitWidth)
                  fit = rive2.Fit.fitWidth;
                else if (this.fit === Fit.FitHeight)
                  fit = rive2.Fit.fitHeight;
                else if (this.fit === Fit.ScaleDown)
                  fit = rive2.Fit.scaleDown;
                else if (this.fit === Fit.Layout)
                  fit = rive2.Fit.layout;
                else
                  fit = rive2.Fit.none;
                this.cachedRuntimeFit = fit;
                return fit;
              };
              Layout2.prototype.runtimeAlignment = function(rive2) {
                if (this.cachedRuntimeAlignment)
                  return this.cachedRuntimeAlignment;
                var alignment;
                if (this.alignment === Alignment.TopLeft)
                  alignment = rive2.Alignment.topLeft;
                else if (this.alignment === Alignment.TopCenter)
                  alignment = rive2.Alignment.topCenter;
                else if (this.alignment === Alignment.TopRight)
                  alignment = rive2.Alignment.topRight;
                else if (this.alignment === Alignment.CenterLeft)
                  alignment = rive2.Alignment.centerLeft;
                else if (this.alignment === Alignment.CenterRight)
                  alignment = rive2.Alignment.centerRight;
                else if (this.alignment === Alignment.BottomLeft)
                  alignment = rive2.Alignment.bottomLeft;
                else if (this.alignment === Alignment.BottomCenter)
                  alignment = rive2.Alignment.bottomCenter;
                else if (this.alignment === Alignment.BottomRight)
                  alignment = rive2.Alignment.bottomRight;
                else
                  alignment = rive2.Alignment.center;
                this.cachedRuntimeAlignment = alignment;
                return alignment;
              };
              return Layout2;
            }();
            var RuntimeLoader = function() {
              function RuntimeLoader2() {
              }
              RuntimeLoader2.loadRuntime = function() {
                _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
                  locateFile: function() {
                    return RuntimeLoader2.wasmURL;
                  }
                }).then(function(rive2) {
                  var _a;
                  RuntimeLoader2.runtime = rive2;
                  while (RuntimeLoader2.callBackQueue.length > 0) {
                    (_a = RuntimeLoader2.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader2.runtime);
                  }
                }).catch(function(error) {
                  var errorDetails = {
                    message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error",
                    type: (error === null || error === void 0 ? void 0 : error.name) || "Error",
                    wasmError: error instanceof WebAssembly.CompileError || error instanceof WebAssembly.RuntimeError,
                    originalError: error
                  };
                  console.debug("Rive WASM load error details:", errorDetails);
                  var backupJsdelivrUrl = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive_fallback.wasm");
                  if (RuntimeLoader2.wasmURL.toLowerCase() !== backupJsdelivrUrl) {
                    console.warn("Failed to load WASM from ".concat(RuntimeLoader2.wasmURL, " (").concat(errorDetails.message, "), trying jsdelivr as a backup"));
                    RuntimeLoader2.setWasmUrl(backupJsdelivrUrl);
                    RuntimeLoader2.loadRuntime();
                  } else {
                    var errorMessage = [
                      "Could not load Rive WASM file from ".concat(RuntimeLoader2.wasmURL, " or ").concat(backupJsdelivrUrl, "."),
                      "Possible reasons:",
                      "- Network connection is down",
                      "- WebAssembly is not supported in this environment",
                      "- The WASM file is corrupted or incompatible",
                      "\nError details:",
                      "- Type: ".concat(errorDetails.type),
                      "- Message: ".concat(errorDetails.message),
                      "- WebAssembly-specific error: ".concat(errorDetails.wasmError),
                      "\nTo resolve, you may need to:",
                      "1. Check your network connection",
                      "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                      "3. Call RuntimeLoader.loadRuntime() again"
                    ].join("\n");
                    console.error(errorMessage);
                  }
                });
              };
              RuntimeLoader2.getInstance = function(callback) {
                if (!RuntimeLoader2.isLoading) {
                  RuntimeLoader2.isLoading = true;
                  RuntimeLoader2.loadRuntime();
                }
                if (!RuntimeLoader2.runtime) {
                  RuntimeLoader2.callBackQueue.push(callback);
                } else {
                  callback(RuntimeLoader2.runtime);
                }
              };
              RuntimeLoader2.awaitInstance = function() {
                return new Promise(function(resolve) {
                  return RuntimeLoader2.getInstance(function(rive2) {
                    return resolve(rive2);
                  });
                });
              };
              RuntimeLoader2.setWasmUrl = function(url) {
                RuntimeLoader2.wasmURL = url;
              };
              RuntimeLoader2.getWasmUrl = function() {
                return RuntimeLoader2.wasmURL;
              };
              RuntimeLoader2.isLoading = false;
              RuntimeLoader2.callBackQueue = [];
              RuntimeLoader2.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
              return RuntimeLoader2;
            }();
            var StateMachineInputType;
            (function(StateMachineInputType2) {
              StateMachineInputType2[StateMachineInputType2["Number"] = 56] = "Number";
              StateMachineInputType2[StateMachineInputType2["Trigger"] = 58] = "Trigger";
              StateMachineInputType2[StateMachineInputType2["Boolean"] = 59] = "Boolean";
            })(StateMachineInputType || (StateMachineInputType = {}));
            var StateMachineInput = function() {
              function StateMachineInput2(type, runtimeInput) {
                this.type = type;
                this.runtimeInput = runtimeInput;
              }
              Object.defineProperty(StateMachineInput2.prototype, "name", {
                get: function() {
                  return this.runtimeInput.name;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(StateMachineInput2.prototype, "value", {
                get: function() {
                  return this.runtimeInput.value;
                },
                set: function(value) {
                  this.runtimeInput.value = value;
                },
                enumerable: false,
                configurable: true
              });
              StateMachineInput2.prototype.fire = function() {
                if (this.type === StateMachineInputType.Trigger) {
                  this.runtimeInput.fire();
                }
              };
              return StateMachineInput2;
            }();
            var RiveEventType;
            (function(RiveEventType2) {
              RiveEventType2[RiveEventType2["General"] = 128] = "General";
              RiveEventType2[RiveEventType2["OpenUrl"] = 131] = "OpenUrl";
            })(RiveEventType || (RiveEventType = {}));
            var StateMachine = function() {
              function StateMachine2(stateMachine, runtime, playing, artboard) {
                this.stateMachine = stateMachine;
                this.playing = playing;
                this.artboard = artboard;
                this.inputs = [];
                this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                this.initInputs(runtime);
              }
              Object.defineProperty(StateMachine2.prototype, "name", {
                get: function() {
                  return this.stateMachine.name;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(StateMachine2.prototype, "statesChanged", {
                get: function() {
                  var names = [];
                  for (var i2 = 0; i2 < this.instance.stateChangedCount(); i2++) {
                    names.push(this.instance.stateChangedNameByIndex(i2));
                  }
                  return names;
                },
                enumerable: false,
                configurable: true
              });
              StateMachine2.prototype.advance = function(time) {
                this.instance.advance(time);
              };
              StateMachine2.prototype.reportedEventCount = function() {
                return this.instance.reportedEventCount();
              };
              StateMachine2.prototype.reportedEventAt = function(i2) {
                return this.instance.reportedEventAt(i2);
              };
              StateMachine2.prototype.initInputs = function(runtime) {
                for (var i2 = 0; i2 < this.instance.inputCount(); i2++) {
                  var input2 = this.instance.input(i2);
                  this.inputs.push(this.mapRuntimeInput(input2, runtime));
                }
              };
              StateMachine2.prototype.mapRuntimeInput = function(input2, runtime) {
                if (input2.type === runtime.SMIInput.bool) {
                  return new StateMachineInput(StateMachineInputType.Boolean, input2.asBool());
                } else if (input2.type === runtime.SMIInput.number) {
                  return new StateMachineInput(StateMachineInputType.Number, input2.asNumber());
                } else if (input2.type === runtime.SMIInput.trigger) {
                  return new StateMachineInput(StateMachineInputType.Trigger, input2.asTrigger());
                }
              };
              StateMachine2.prototype.cleanup = function() {
                this.instance.delete();
              };
              return StateMachine2;
            }();
            var Animator = function() {
              function Animator2(runtime, artboard, eventManager, animations, stateMachines) {
                if (animations === void 0) {
                  animations = [];
                }
                if (stateMachines === void 0) {
                  stateMachines = [];
                }
                this.runtime = runtime;
                this.artboard = artboard;
                this.eventManager = eventManager;
                this.animations = animations;
                this.stateMachines = stateMachines;
              }
              Animator2.prototype.add = function(animatables, playing, fireEvent) {
                if (fireEvent === void 0) {
                  fireEvent = true;
                }
                animatables = mapToStringArray(animatables);
                if (animatables.length === 0) {
                  this.animations.forEach(function(a) {
                    return a.playing = playing;
                  });
                  this.stateMachines.forEach(function(m) {
                    return m.playing = playing;
                  });
                } else {
                  var instancedAnimationNames = this.animations.map(function(a) {
                    return a.name;
                  });
                  var instancedMachineNames = this.stateMachines.map(function(m) {
                    return m.name;
                  });
                  for (var i2 = 0; i2 < animatables.length; i2++) {
                    var aIndex = instancedAnimationNames.indexOf(animatables[i2]);
                    var mIndex = instancedMachineNames.indexOf(animatables[i2]);
                    if (aIndex >= 0 || mIndex >= 0) {
                      if (aIndex >= 0) {
                        this.animations[aIndex].playing = playing;
                      } else {
                        this.stateMachines[mIndex].playing = playing;
                      }
                    } else {
                      var anim = this.artboard.animationByName(animatables[i2]);
                      if (anim) {
                        var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                        newAnimation.advance(0);
                        newAnimation.apply(1);
                        this.animations.push(newAnimation);
                      } else {
                        var sm = this.artboard.stateMachineByName(animatables[i2]);
                        if (sm) {
                          var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                          this.stateMachines.push(newStateMachine);
                        }
                      }
                    }
                  }
                }
                if (fireEvent) {
                  if (playing) {
                    this.eventManager.fire({
                      type: EventType.Play,
                      data: this.playing
                    });
                  } else {
                    this.eventManager.fire({
                      type: EventType.Pause,
                      data: this.paused
                    });
                  }
                }
                return playing ? this.playing : this.paused;
              };
              Animator2.prototype.initLinearAnimations = function(animatables, playing) {
                var instancedAnimationNames = this.animations.map(function(a) {
                  return a.name;
                });
                for (var i2 = 0; i2 < animatables.length; i2++) {
                  var aIndex = instancedAnimationNames.indexOf(animatables[i2]);
                  if (aIndex >= 0) {
                    this.animations[aIndex].playing = playing;
                  } else {
                    var anim = this.artboard.animationByName(animatables[i2]);
                    if (anim) {
                      var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                      newAnimation.advance(0);
                      newAnimation.apply(1);
                      this.animations.push(newAnimation);
                    }
                  }
                }
              };
              Animator2.prototype.initStateMachines = function(animatables, playing) {
                var instancedStateMachineNames = this.stateMachines.map(function(a) {
                  return a.name;
                });
                for (var i2 = 0; i2 < animatables.length; i2++) {
                  var aIndex = instancedStateMachineNames.indexOf(animatables[i2]);
                  if (aIndex >= 0) {
                    this.stateMachines[aIndex].playing = playing;
                  } else {
                    var sm = this.artboard.stateMachineByName(animatables[i2]);
                    if (sm) {
                      var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                      this.stateMachines.push(newStateMachine);
                    } else {
                      this.initLinearAnimations([animatables[i2]], playing);
                    }
                  }
                }
              };
              Animator2.prototype.play = function(animatables) {
                return this.add(animatables, true);
              };
              Animator2.prototype.pause = function(animatables) {
                return this.add(animatables, false);
              };
              Animator2.prototype.scrub = function(animatables, value) {
                var forScrubbing = this.animations.filter(function(a) {
                  return animatables.includes(a.name);
                });
                forScrubbing.forEach(function(a) {
                  return a.scrubTo = value;
                });
                return forScrubbing.map(function(a) {
                  return a.name;
                });
              };
              Object.defineProperty(Animator2.prototype, "playing", {
                get: function() {
                  return this.animations.filter(function(a) {
                    return a.playing;
                  }).map(function(a) {
                    return a.name;
                  }).concat(this.stateMachines.filter(function(m) {
                    return m.playing;
                  }).map(function(m) {
                    return m.name;
                  }));
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Animator2.prototype, "paused", {
                get: function() {
                  return this.animations.filter(function(a) {
                    return !a.playing;
                  }).map(function(a) {
                    return a.name;
                  }).concat(this.stateMachines.filter(function(m) {
                    return !m.playing;
                  }).map(function(m) {
                    return m.name;
                  }));
                },
                enumerable: false,
                configurable: true
              });
              Animator2.prototype.stop = function(animatables) {
                var _this = this;
                animatables = mapToStringArray(animatables);
                var removedNames = [];
                if (animatables.length === 0) {
                  removedNames = this.animations.map(function(a) {
                    return a.name;
                  }).concat(this.stateMachines.map(function(m) {
                    return m.name;
                  }));
                  this.animations.forEach(function(a) {
                    return a.cleanup();
                  });
                  this.stateMachines.forEach(function(m) {
                    return m.cleanup();
                  });
                  this.animations.splice(0, this.animations.length);
                  this.stateMachines.splice(0, this.stateMachines.length);
                } else {
                  var animationsToRemove = this.animations.filter(function(a) {
                    return animatables.includes(a.name);
                  });
                  animationsToRemove.forEach(function(a) {
                    a.cleanup();
                    _this.animations.splice(_this.animations.indexOf(a), 1);
                  });
                  var machinesToRemove = this.stateMachines.filter(function(m) {
                    return animatables.includes(m.name);
                  });
                  machinesToRemove.forEach(function(m) {
                    m.cleanup();
                    _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                  });
                  removedNames = animationsToRemove.map(function(a) {
                    return a.name;
                  }).concat(machinesToRemove.map(function(m) {
                    return m.name;
                  }));
                }
                this.eventManager.fire({
                  type: EventType.Stop,
                  data: removedNames
                });
                return removedNames;
              };
              Object.defineProperty(Animator2.prototype, "isPlaying", {
                get: function() {
                  return this.animations.reduce(function(acc, curr) {
                    return acc || curr.playing;
                  }, false) || this.stateMachines.reduce(function(acc, curr) {
                    return acc || curr.playing;
                  }, false);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Animator2.prototype, "isPaused", {
                get: function() {
                  return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Animator2.prototype, "isStopped", {
                get: function() {
                  return this.animations.length === 0 && this.stateMachines.length === 0;
                },
                enumerable: false,
                configurable: true
              });
              Animator2.prototype.atLeastOne = function(playing, fireEvent) {
                if (fireEvent === void 0) {
                  fireEvent = true;
                }
                var instancedName;
                if (this.animations.length === 0 && this.stateMachines.length === 0) {
                  if (this.artboard.animationCount() > 0) {
                    this.add([instancedName = this.artboard.animationByIndex(0).name], playing, fireEvent);
                  } else if (this.artboard.stateMachineCount() > 0) {
                    this.add([instancedName = this.artboard.stateMachineByIndex(0).name], playing, fireEvent);
                  }
                }
                return instancedName;
              };
              Animator2.prototype.handleLooping = function() {
                for (var _i = 0, _a = this.animations.filter(function(a) {
                  return a.playing;
                }); _i < _a.length; _i++) {
                  var animation = _a[_i];
                  if (animation.loopValue === 0 && animation.loopCount) {
                    animation.loopCount = 0;
                    this.stop(animation.name);
                  } else if (animation.loopValue === 1 && animation.loopCount) {
                    this.eventManager.fire({
                      type: EventType.Loop,
                      data: { animation: animation.name, type: LoopType.Loop }
                    });
                    animation.loopCount = 0;
                  } else if (animation.loopValue === 2 && animation.loopCount > 1) {
                    this.eventManager.fire({
                      type: EventType.Loop,
                      data: { animation: animation.name, type: LoopType.PingPong }
                    });
                    animation.loopCount = 0;
                  }
                }
              };
              Animator2.prototype.handleStateChanges = function() {
                var statesChanged = [];
                for (var _i = 0, _a = this.stateMachines.filter(function(sm) {
                  return sm.playing;
                }); _i < _a.length; _i++) {
                  var stateMachine = _a[_i];
                  statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                }
                if (statesChanged.length > 0) {
                  this.eventManager.fire({
                    type: EventType.StateChange,
                    data: statesChanged
                  });
                }
              };
              Animator2.prototype.handleAdvancing = function(time) {
                this.eventManager.fire({
                  type: EventType.Advance,
                  data: time
                });
              };
              return Animator2;
            }();
            var EventType;
            (function(EventType2) {
              EventType2["Load"] = "load";
              EventType2["LoadError"] = "loaderror";
              EventType2["Play"] = "play";
              EventType2["Pause"] = "pause";
              EventType2["Stop"] = "stop";
              EventType2["Loop"] = "loop";
              EventType2["Draw"] = "draw";
              EventType2["Advance"] = "advance";
              EventType2["StateChange"] = "statechange";
              EventType2["RiveEvent"] = "riveevent";
              EventType2["AudioStatusChange"] = "audiostatuschange";
            })(EventType || (EventType = {}));
            var LoopType;
            (function(LoopType2) {
              LoopType2["OneShot"] = "oneshot";
              LoopType2["Loop"] = "loop";
              LoopType2["PingPong"] = "pingpong";
            })(LoopType || (LoopType = {}));
            var EventManager = function() {
              function EventManager2(listeners) {
                if (listeners === void 0) {
                  listeners = [];
                }
                this.listeners = listeners;
              }
              EventManager2.prototype.getListeners = function(type) {
                return this.listeners.filter(function(e) {
                  return e.type === type;
                });
              };
              EventManager2.prototype.add = function(listener) {
                if (!this.listeners.includes(listener)) {
                  this.listeners.push(listener);
                }
              };
              EventManager2.prototype.remove = function(listener) {
                for (var i2 = 0; i2 < this.listeners.length; i2++) {
                  var currentListener = this.listeners[i2];
                  if (currentListener.type === listener.type) {
                    if (currentListener.callback === listener.callback) {
                      this.listeners.splice(i2, 1);
                      break;
                    }
                  }
                }
              };
              EventManager2.prototype.removeAll = function(type) {
                var _this = this;
                if (!type) {
                  this.listeners.splice(0, this.listeners.length);
                } else {
                  this.listeners.filter(function(l) {
                    return l.type === type;
                  }).forEach(function(l) {
                    return _this.remove(l);
                  });
                }
              };
              EventManager2.prototype.fire = function(event) {
                var eventListeners = this.getListeners(event.type);
                eventListeners.forEach(function(listener) {
                  return listener.callback(event);
                });
              };
              return EventManager2;
            }();
            var TaskQueueManager = function() {
              function TaskQueueManager2(eventManager) {
                this.eventManager = eventManager;
                this.queue = [];
              }
              TaskQueueManager2.prototype.add = function(task) {
                this.queue.push(task);
              };
              TaskQueueManager2.prototype.process = function() {
                while (this.queue.length > 0) {
                  var task = this.queue.shift();
                  if (task === null || task === void 0 ? void 0 : task.action) {
                    task.action();
                  }
                  if (task === null || task === void 0 ? void 0 : task.event) {
                    this.eventManager.fire(task.event);
                  }
                }
              };
              return TaskQueueManager2;
            }();
            var SystemAudioStatus;
            (function(SystemAudioStatus2) {
              SystemAudioStatus2[SystemAudioStatus2["AVAILABLE"] = 0] = "AVAILABLE";
              SystemAudioStatus2[SystemAudioStatus2["UNAVAILABLE"] = 1] = "UNAVAILABLE";
            })(SystemAudioStatus || (SystemAudioStatus = {}));
            var AudioManager = function(_super) {
              __extends(AudioManager2, _super);
              function AudioManager2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._started = false;
                _this._enabled = false;
                _this._status = SystemAudioStatus.UNAVAILABLE;
                return _this;
              }
              AudioManager2.prototype.delay = function(time) {
                return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    return [2, new Promise(function(resolve) {
                      return setTimeout(resolve, time);
                    })];
                  });
                });
              };
              AudioManager2.prototype.timeout = function() {
                return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    return [2, new Promise(function(_, reject) {
                      return setTimeout(reject, 50);
                    })];
                  });
                });
              };
              AudioManager2.prototype.reportToListeners = function() {
                this.fire({ type: EventType.AudioStatusChange });
                this.removeAll();
              };
              AudioManager2.prototype.enableAudio = function() {
                return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    if (!this._enabled) {
                      this._enabled = true;
                      this._status = SystemAudioStatus.AVAILABLE;
                      this.reportToListeners();
                    }
                    return [2];
                  });
                });
              };
              AudioManager2.prototype.testAudio = function() {
                return __awaiter(this, void 0, void 0, function() {
                  var _a;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        if (!(this._status === SystemAudioStatus.UNAVAILABLE && this._audioContext !== null))
                          return [3, 4];
                        _b.label = 1;
                      case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                      case 2:
                        _b.sent();
                        this.enableAudio();
                        return [3, 4];
                      case 3:
                        _a = _b.sent();
                        return [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              };
              AudioManager2.prototype._establishAudio = function() {
                return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        if (!!this._started)
                          return [3, 5];
                        this._started = true;
                        if (!(typeof window == "undefined"))
                          return [3, 1];
                        this.enableAudio();
                        return [3, 5];
                      case 1:
                        this._audioContext = new AudioContext();
                        this.listenForUserAction();
                        _a.label = 2;
                      case 2:
                        if (!(this._status === SystemAudioStatus.UNAVAILABLE))
                          return [3, 5];
                        return [4, this.testAudio()];
                      case 3:
                        _a.sent();
                        return [4, this.delay(1e3)];
                      case 4:
                        _a.sent();
                        return [3, 2];
                      case 5:
                        return [2];
                    }
                  });
                });
              };
              AudioManager2.prototype.listenForUserAction = function() {
                var _this = this;
                var _clickListener = function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      this.enableAudio();
                      return [2];
                    });
                  });
                };
                document.addEventListener("pointerdown", _clickListener, {
                  once: true
                });
              };
              AudioManager2.prototype.establishAudio = function() {
                return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    this._establishAudio();
                    return [2];
                  });
                });
              };
              Object.defineProperty(AudioManager2.prototype, "systemVolume", {
                get: function() {
                  if (this._status === SystemAudioStatus.UNAVAILABLE) {
                    this.testAudio();
                    return 0;
                  }
                  return 1;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(AudioManager2.prototype, "status", {
                get: function() {
                  return this._status;
                },
                enumerable: false,
                configurable: true
              });
              return AudioManager2;
            }(EventManager);
            var audioManager = new AudioManager();
            var FakeResizeObserver = function() {
              function FakeResizeObserver2() {
              }
              FakeResizeObserver2.prototype.observe = function() {
              };
              FakeResizeObserver2.prototype.unobserve = function() {
              };
              FakeResizeObserver2.prototype.disconnect = function() {
              };
              return FakeResizeObserver2;
            }();
            var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
            var ObjectObservers = function() {
              function ObjectObservers2() {
                var _this = this;
                this._elementsMap = /* @__PURE__ */ new Map();
                this._onObservedEntry = function(entry) {
                  var observed = _this._elementsMap.get(entry.target);
                  if (observed !== null) {
                    observed.onResize(entry.target.clientWidth == 0 || entry.target.clientHeight == 0);
                  } else {
                    _this._resizeObserver.unobserve(entry.target);
                  }
                };
                this._onObserved = function(entries2) {
                  entries2.forEach(_this._onObservedEntry);
                };
                this._resizeObserver = new MyResizeObserver(this._onObserved);
              }
              ObjectObservers2.prototype.add = function(element, onResize) {
                var observed = {
                  onResize,
                  element
                };
                this._elementsMap.set(element, observed);
                this._resizeObserver.observe(element);
                return observed;
              };
              ObjectObservers2.prototype.remove = function(observed) {
                this._resizeObserver.unobserve(observed.element);
                this._elementsMap.delete(observed.element);
              };
              return ObjectObservers2;
            }();
            var observers = new ObjectObservers();
            var RiveFile = function() {
              function RiveFile2(params) {
                this.enableRiveAssetCDN = true;
                this.referenceCount = 0;
                this.src = params.src;
                this.buffer = params.buffer;
                if (params.assetLoader)
                  this.assetLoader = params.assetLoader;
                this.enableRiveAssetCDN = typeof params.enableRiveAssetCDN == "boolean" ? params.enableRiveAssetCDN : true;
                this.eventManager = new EventManager();
                if (params.onLoad)
                  this.on(EventType.Load, params.onLoad);
                if (params.onLoadError)
                  this.on(EventType.LoadError, params.onLoadError);
              }
              RiveFile2.prototype.initData = function() {
                return __awaiter(this, void 0, void 0, function() {
                  var _a, loader, _b;
                  return __generator(this, function(_c) {
                    switch (_c.label) {
                      case 0:
                        if (!this.src)
                          return [3, 2];
                        _a = this;
                        return [4, loadRiveFile(this.src)];
                      case 1:
                        _a.buffer = _c.sent();
                        _c.label = 2;
                      case 2:
                        if (this.assetLoader) {
                          loader = new this.runtime.CustomFileAssetLoader({
                            loadContents: this.assetLoader
                          });
                        }
                        _b = this;
                        return [4, this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)];
                      case 3:
                        _b.file = _c.sent();
                        if (this.file !== null) {
                          this.eventManager.fire({
                            type: EventType.Load,
                            data: this
                          });
                        } else {
                          this.eventManager.fire({
                            type: EventType.LoadError,
                            data: null
                          });
                          throw new Error(RiveFile2.fileLoadErrorMessage);
                        }
                        return [2];
                    }
                  });
                });
              };
              RiveFile2.prototype.init = function() {
                return __awaiter(this, void 0, void 0, function() {
                  var _a;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        if (!this.src && !this.buffer) {
                          throw new Error(RiveFile2.missingErrorMessage);
                        }
                        _a = this;
                        return [4, RuntimeLoader.awaitInstance()];
                      case 1:
                        _a.runtime = _b.sent();
                        return [4, this.initData()];
                      case 2:
                        _b.sent();
                        return [2];
                    }
                  });
                });
              };
              RiveFile2.prototype.on = function(type, callback) {
                this.eventManager.add({
                  type,
                  callback
                });
              };
              RiveFile2.prototype.off = function(type, callback) {
                this.eventManager.remove({
                  type,
                  callback
                });
              };
              RiveFile2.prototype.cleanup = function() {
                var _a;
                this.referenceCount -= 1;
                if (this.referenceCount <= 0) {
                  this.removeAllRiveEventListeners();
                  (_a = this.file) === null || _a === void 0 ? void 0 : _a.delete();
                }
              };
              RiveFile2.prototype.removeAllRiveEventListeners = function(type) {
                this.eventManager.removeAll(type);
              };
              RiveFile2.prototype.getInstance = function() {
                if (this.file !== null) {
                  this.referenceCount += 1;
                  return this.file;
                }
              };
              RiveFile2.missingErrorMessage = "Rive source file or data buffer required";
              RiveFile2.fileLoadErrorMessage = "The file failed to load";
              return RiveFile2;
            }();
            var Rive2 = function() {
              function Rive3(params) {
                var _this = this;
                var _a;
                this.loaded = false;
                this.readyForPlaying = false;
                this.artboard = null;
                this.eventCleanup = null;
                this.shouldDisableRiveListeners = false;
                this.automaticallyHandleEvents = false;
                this.enableRiveAssetCDN = true;
                this._volume = 1;
                this._artboardWidth = void 0;
                this._artboardHeight = void 0;
                this._devicePixelRatioUsed = 1;
                this._hasZeroSize = false;
                this.durations = [];
                this.frameTimes = [];
                this.frameCount = 0;
                this.isTouchScrollEnabled = false;
                this.onCanvasResize = function(hasZeroSize) {
                  _this._hasZeroSize = hasZeroSize;
                  if (!_this._layout.maxX || !_this._layout.maxY) {
                    _this.resizeToCanvas();
                  }
                };
                this.renderSecondTimer = 0;
                this.canvas = params.canvas;
                if (params.canvas.constructor === HTMLCanvasElement) {
                  this._observed = observers.add(this.canvas, this.onCanvasResize);
                }
                this.src = params.src;
                this.buffer = params.buffer;
                this.riveFile = params.riveFile;
                this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
                this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
                this.isTouchScrollEnabled = !!params.isTouchScrollEnabled;
                this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
                this.enableRiveAssetCDN = params.enableRiveAssetCDN === void 0 ? true : params.enableRiveAssetCDN;
                this.eventManager = new EventManager();
                if (params.onLoad)
                  this.on(EventType.Load, params.onLoad);
                if (params.onLoadError)
                  this.on(EventType.LoadError, params.onLoadError);
                if (params.onPlay)
                  this.on(EventType.Play, params.onPlay);
                if (params.onPause)
                  this.on(EventType.Pause, params.onPause);
                if (params.onStop)
                  this.on(EventType.Stop, params.onStop);
                if (params.onLoop)
                  this.on(EventType.Loop, params.onLoop);
                if (params.onStateChange)
                  this.on(EventType.StateChange, params.onStateChange);
                if (params.onAdvance)
                  this.on(EventType.Advance, params.onAdvance);
                if (params.onload && !params.onLoad)
                  this.on(EventType.Load, params.onload);
                if (params.onloaderror && !params.onLoadError)
                  this.on(EventType.LoadError, params.onloaderror);
                if (params.onplay && !params.onPlay)
                  this.on(EventType.Play, params.onplay);
                if (params.onpause && !params.onPause)
                  this.on(EventType.Pause, params.onpause);
                if (params.onstop && !params.onStop)
                  this.on(EventType.Stop, params.onstop);
                if (params.onloop && !params.onLoop)
                  this.on(EventType.Loop, params.onloop);
                if (params.onstatechange && !params.onStateChange)
                  this.on(EventType.StateChange, params.onstatechange);
                if (params.assetLoader)
                  this.assetLoader = params.assetLoader;
                this.taskQueue = new TaskQueueManager(this.eventManager);
                this.init({
                  src: this.src,
                  buffer: this.buffer,
                  riveFile: this.riveFile,
                  autoplay: params.autoplay,
                  animations: params.animations,
                  stateMachines: params.stateMachines,
                  artboard: params.artboard,
                  useOffscreenRenderer: params.useOffscreenRenderer
                });
              }
              Rive3.new = function(params) {
                console.warn("This function is deprecated: please use `new Rive({})` instead");
                return new Rive3(params);
              };
              Rive3.prototype.onSystemAudioChanged = function() {
                this.volume = this._volume;
              };
              Rive3.prototype.init = function(_a) {
                var _this = this;
                var src = _a.src, buffer = _a.buffer, riveFile = _a.riveFile, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c;
                this.src = src;
                this.buffer = buffer;
                this.riveFile = riveFile;
                if (!this.src && !this.buffer && !this.riveFile) {
                  throw new Error(Rive3.missingErrorMessage);
                }
                var startingAnimationNames = mapToStringArray(animations);
                var startingStateMachineNames = mapToStringArray(stateMachines);
                this.loaded = false;
                this.readyForPlaying = false;
                RuntimeLoader.awaitInstance().then(function(runtime) {
                  _this.runtime = runtime;
                  _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                  if (!(_this.canvas.width || _this.canvas.height)) {
                    _this.resizeDrawingSurfaceToCanvas();
                  }
                  _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay).then(function() {
                    return _this.setupRiveListeners();
                  }).catch(function(e) {
                    console.error(e);
                  });
                }).catch(function(e) {
                  console.error(e);
                });
              };
              Rive3.prototype.setupRiveListeners = function(riveListenerOptions) {
                var _this = this;
                if (!this.shouldDisableRiveListeners) {
                  var activeStateMachines = (this.animator.stateMachines || []).filter(function(sm) {
                    return sm.playing && _this.runtime.hasListeners(sm.instance);
                  }).map(function(sm) {
                    return sm.instance;
                  });
                  var touchScrollEnabledOption = this.isTouchScrollEnabled;
                  if (riveListenerOptions && "isTouchScrollEnabled" in riveListenerOptions) {
                    touchScrollEnabledOption = riveListenerOptions.isTouchScrollEnabled;
                  }
                  this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.registerTouchInteractions)({
                    canvas: this.canvas,
                    artboard: this.artboard,
                    stateMachines: activeStateMachines,
                    renderer: this.renderer,
                    rive: this.runtime,
                    fit: this._layout.runtimeFit(this.runtime),
                    alignment: this._layout.runtimeAlignment(this.runtime),
                    isTouchScrollEnabled: touchScrollEnabledOption,
                    layoutScaleFactor: this._layout.layoutScaleFactor
                  });
                }
              };
              Rive3.prototype.removeRiveListeners = function() {
                if (this.eventCleanup) {
                  this.eventCleanup();
                }
              };
              Rive3.prototype.initializeAudio = function() {
                var _this = this;
                var _a;
                if (audioManager.status == SystemAudioStatus.UNAVAILABLE) {
                  if ((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.hasAudio) {
                    audioManager.add({
                      type: EventType.AudioStatusChange,
                      callback: function() {
                        return _this.onSystemAudioChanged();
                      }
                    });
                    audioManager.establishAudio();
                  }
                }
              };
              Rive3.prototype.initArtboardSize = function() {
                if (!this.artboard)
                  return;
                this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width;
                this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height;
              };
              Rive3.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay) {
                var _a;
                return __awaiter(this, void 0, void 0, function() {
                  var error_1, msg;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        _b.trys.push([0, 3, , 4]);
                        if (!(this.riveFile == null))
                          return [3, 2];
                        this.riveFile = new RiveFile({
                          src: this.src,
                          buffer: this.buffer,
                          enableRiveAssetCDN: this.enableRiveAssetCDN,
                          assetLoader: this.assetLoader
                        });
                        return [4, this.riveFile.init()];
                      case 1:
                        _b.sent();
                        _b.label = 2;
                      case 2:
                        this.file = this.riveFile.getInstance();
                        this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                        this.initArtboardSize();
                        this.initializeAudio();
                        this.loaded = true;
                        this.eventManager.fire({
                          type: EventType.Load,
                          data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer"
                        });
                        this.readyForPlaying = true;
                        this.taskQueue.process();
                        this.drawFrame();
                        return [2, Promise.resolve()];
                      case 3:
                        error_1 = _b.sent();
                        msg = "Problem loading file; may be corrupt!";
                        console.warn(msg);
                        this.eventManager.fire({ type: EventType.LoadError, data: msg });
                        return [2, Promise.reject(msg)];
                      case 4:
                        return [2];
                    }
                  });
                });
              };
              Rive3.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay) {
                if (!this.file) {
                  return;
                }
                var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                if (!rootArtboard) {
                  var msg = "Invalid artboard name or no default artboard";
                  console.warn(msg);
                  this.eventManager.fire({ type: EventType.LoadError, data: msg });
                  return;
                }
                this.artboard = rootArtboard;
                rootArtboard.volume = this._volume * audioManager.systemVolume;
                if (this.artboard.animationCount() < 1) {
                  var msg = "Artboard has no animations";
                  this.eventManager.fire({ type: EventType.LoadError, data: msg });
                  throw msg;
                }
                this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                var instanceNames;
                if (animationNames.length > 0 || stateMachineNames.length > 0) {
                  instanceNames = animationNames.concat(stateMachineNames);
                  this.animator.initLinearAnimations(animationNames, autoplay);
                  this.animator.initStateMachines(stateMachineNames, autoplay);
                } else {
                  instanceNames = [this.animator.atLeastOne(autoplay, false)];
                }
                this.taskQueue.add({
                  event: {
                    type: autoplay ? EventType.Play : EventType.Pause,
                    data: instanceNames
                  }
                });
              };
              Rive3.prototype.drawFrame = function() {
                this.startRendering();
              };
              Rive3.prototype.draw = function(time, onSecond) {
                this.frameRequestId = null;
                var before = performance.now();
                if (!this.lastRenderTime) {
                  this.lastRenderTime = time;
                }
                this.renderSecondTimer += time - this.lastRenderTime;
                if (this.renderSecondTimer > 5e3) {
                  this.renderSecondTimer = 0;
                  onSecond === null || onSecond === void 0 ? void 0 : onSecond();
                }
                var elapsedTime = (time - this.lastRenderTime) / 1e3;
                this.lastRenderTime = time;
                var activeAnimations = this.animator.animations.filter(function(a) {
                  return a.playing || a.needsScrub;
                }).sort(function(first) {
                  return first.needsScrub ? -1 : 1;
                });
                for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
                  var animation = activeAnimations_1[_i];
                  animation.advance(elapsedTime);
                  if (animation.instance.didLoop) {
                    animation.loopCount += 1;
                  }
                  animation.apply(1);
                }
                var activeStateMachines = this.animator.stateMachines.filter(function(a) {
                  return a.playing;
                });
                for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
                  var stateMachine = activeStateMachines_1[_a];
                  var numEventsReported = stateMachine.reportedEventCount();
                  if (numEventsReported) {
                    for (var i2 = 0; i2 < numEventsReported; i2++) {
                      var event_1 = stateMachine.reportedEventAt(i2);
                      if (event_1) {
                        if (event_1.type === RiveEventType.OpenUrl) {
                          this.eventManager.fire({
                            type: EventType.RiveEvent,
                            data: event_1
                          });
                          if (this.automaticallyHandleEvents) {
                            var newAnchorTag = document.createElement("a");
                            var _b = event_1, url = _b.url, target = _b.target;
                            var sanitizedUrl = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(url);
                            url && newAnchorTag.setAttribute("href", sanitizedUrl);
                            target && newAnchorTag.setAttribute("target", target);
                            if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_3__.BLANK_URL) {
                              newAnchorTag.click();
                            }
                          }
                        } else {
                          this.eventManager.fire({
                            type: EventType.RiveEvent,
                            data: event_1
                          });
                        }
                      }
                    }
                  }
                  stateMachine.advance(elapsedTime);
                }
                this.artboard.advance(elapsedTime);
                var renderer = this.renderer;
                renderer.clear();
                renderer.save();
                this.alignRenderer();
                if (!this._hasZeroSize) {
                  this.artboard.draw(renderer);
                }
                renderer.restore();
                renderer.flush();
                this.animator.handleLooping();
                this.animator.handleStateChanges();
                this.animator.handleAdvancing(elapsedTime);
                this.frameCount++;
                var after = performance.now();
                this.frameTimes.push(after);
                this.durations.push(after - before);
                while (this.frameTimes[0] <= after - 1e3) {
                  this.frameTimes.shift();
                  this.durations.shift();
                }
                if (this.animator.isPlaying) {
                  this.startRendering();
                } else if (this.animator.isPaused) {
                  this.lastRenderTime = 0;
                } else if (this.animator.isStopped) {
                  this.lastRenderTime = 0;
                }
              };
              Rive3.prototype.alignRenderer = function() {
                var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                  minX: _layout.minX,
                  minY: _layout.minY,
                  maxX: _layout.maxX,
                  maxY: _layout.maxY
                }, artboard.bounds, this._devicePixelRatioUsed * _layout.layoutScaleFactor);
              };
              Object.defineProperty(Rive3.prototype, "fps", {
                get: function() {
                  return this.durations.length;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "frameTime", {
                get: function() {
                  if (this.durations.length === 0) {
                    return 0;
                  }
                  return (this.durations.reduce(function(a, b) {
                    return a + b;
                  }, 0) / this.durations.length).toFixed(4);
                },
                enumerable: false,
                configurable: true
              });
              Rive3.prototype.cleanup = function() {
                var _a;
                this.stopRendering();
                this.cleanupInstances();
                if (this._observed !== null) {
                  observers.remove(this._observed);
                }
                (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.cleanup();
                this.riveFile = null;
                this.file = null;
              };
              Rive3.prototype.deleteRiveRenderer = function() {
                var _a;
                (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.delete();
                this.renderer = null;
              };
              Rive3.prototype.cleanupInstances = function() {
                if (this.eventCleanup !== null) {
                  this.eventCleanup();
                }
                this.stop();
                if (this.artboard) {
                  this.artboard.delete();
                  this.artboard = null;
                }
              };
              Rive3.prototype.retrieveTextRun = function(textRunName) {
                var _a;
                if (!textRunName) {
                  console.warn("No text run name provided");
                  return;
                }
                if (!this.artboard) {
                  console.warn("Tried to access text run, but the Artboard is null");
                  return;
                }
                var textRun = this.artboard.textRun(textRunName);
                if (!textRun) {
                  console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                  return;
                }
                return textRun;
              };
              Rive3.prototype.getTextRunValue = function(textRunName) {
                var textRun = this.retrieveTextRun(textRunName);
                return textRun ? textRun.text : void 0;
              };
              Rive3.prototype.setTextRunValue = function(textRunName, textRunValue) {
                var textRun = this.retrieveTextRun(textRunName);
                if (textRun) {
                  textRun.text = textRunValue;
                }
              };
              Rive3.prototype.play = function(animationNames, autoplay) {
                var _this = this;
                animationNames = mapToStringArray(animationNames);
                if (!this.readyForPlaying) {
                  this.taskQueue.add({
                    action: function() {
                      return _this.play(animationNames, autoplay);
                    }
                  });
                  return;
                }
                this.animator.play(animationNames);
                if (this.eventCleanup) {
                  this.eventCleanup();
                }
                this.setupRiveListeners();
                this.startRendering();
              };
              Rive3.prototype.pause = function(animationNames) {
                var _this = this;
                animationNames = mapToStringArray(animationNames);
                if (!this.readyForPlaying) {
                  this.taskQueue.add({
                    action: function() {
                      return _this.pause(animationNames);
                    }
                  });
                  return;
                }
                if (this.eventCleanup) {
                  this.eventCleanup();
                }
                this.animator.pause(animationNames);
              };
              Rive3.prototype.scrub = function(animationNames, value) {
                var _this = this;
                animationNames = mapToStringArray(animationNames);
                if (!this.readyForPlaying) {
                  this.taskQueue.add({
                    action: function() {
                      return _this.scrub(animationNames, value);
                    }
                  });
                  return;
                }
                this.animator.scrub(animationNames, value || 0);
                this.drawFrame();
              };
              Rive3.prototype.stop = function(animationNames) {
                var _this = this;
                animationNames = mapToStringArray(animationNames);
                if (!this.readyForPlaying) {
                  this.taskQueue.add({
                    action: function() {
                      return _this.stop(animationNames);
                    }
                  });
                  return;
                }
                this.animator.stop(animationNames);
                if (this.eventCleanup) {
                  this.eventCleanup();
                }
              };
              Rive3.prototype.reset = function(params) {
                var _a;
                var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
                var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
                var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
                var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
                this.cleanupInstances();
                this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
                this.taskQueue.process();
              };
              Rive3.prototype.load = function(params) {
                this.file = null;
                this.stop();
                this.init(params);
              };
              Object.defineProperty(Rive3.prototype, "layout", {
                get: function() {
                  return this._layout;
                },
                set: function(layout) {
                  this._layout = layout;
                  if (!layout.maxX || !layout.maxY) {
                    this.resizeToCanvas();
                  }
                  if (this.loaded && !this.animator.isPlaying) {
                    this.drawFrame();
                  }
                },
                enumerable: false,
                configurable: true
              });
              Rive3.prototype.resizeToCanvas = function() {
                this._layout = this.layout.copyWith({
                  minX: 0,
                  minY: 0,
                  maxX: this.canvas.width,
                  maxY: this.canvas.height
                });
              };
              Rive3.prototype.resizeDrawingSurfaceToCanvas = function(customDevicePixelRatio) {
                if (this.canvas instanceof HTMLCanvasElement && !!window) {
                  var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                  var dpr = customDevicePixelRatio || window.devicePixelRatio || 1;
                  this.devicePixelRatioUsed = dpr;
                  this.canvas.width = dpr * width;
                  this.canvas.height = dpr * height;
                  this.startRendering();
                  this.resizeToCanvas();
                  if (this.layout.fit === Fit.Layout) {
                    var scaleFactor = this._layout.layoutScaleFactor;
                    this.artboard.width = width / scaleFactor;
                    this.artboard.height = height / scaleFactor;
                  }
                }
              };
              Object.defineProperty(Rive3.prototype, "source", {
                get: function() {
                  return this.src;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "activeArtboard", {
                get: function() {
                  return this.artboard ? this.artboard.name : "";
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "animationNames", {
                get: function() {
                  if (!this.loaded || !this.artboard) {
                    return [];
                  }
                  var animationNames = [];
                  for (var i2 = 0; i2 < this.artboard.animationCount(); i2++) {
                    animationNames.push(this.artboard.animationByIndex(i2).name);
                  }
                  return animationNames;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "stateMachineNames", {
                get: function() {
                  if (!this.loaded || !this.artboard) {
                    return [];
                  }
                  var stateMachineNames = [];
                  for (var i2 = 0; i2 < this.artboard.stateMachineCount(); i2++) {
                    stateMachineNames.push(this.artboard.stateMachineByIndex(i2).name);
                  }
                  return stateMachineNames;
                },
                enumerable: false,
                configurable: true
              });
              Rive3.prototype.stateMachineInputs = function(name) {
                if (!this.loaded) {
                  return;
                }
                var stateMachine = this.animator.stateMachines.find(function(m) {
                  return m.name === name;
                });
                return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
              };
              Rive3.prototype.retrieveInputAtPath = function(name, path) {
                if (!name) {
                  console.warn("No input name provided for path '".concat(path, "'"));
                  return;
                }
                if (!this.artboard) {
                  console.warn("Tried to access input: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                  return;
                }
                var input2 = this.artboard.inputByPath(name, path);
                if (!input2) {
                  console.warn("Could not access an input with name: '".concat(name, "', at path:'").concat(path, "'"));
                  return;
                }
                return input2;
              };
              Rive3.prototype.setBooleanStateAtPath = function(inputName, value, path) {
                var input2 = this.retrieveInputAtPath(inputName, path);
                if (!input2)
                  return;
                if (input2.type === StateMachineInputType.Boolean) {
                  input2.asBool().value = value;
                } else {
                  console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a boolean"));
                }
              };
              Rive3.prototype.setNumberStateAtPath = function(inputName, value, path) {
                var input2 = this.retrieveInputAtPath(inputName, path);
                if (!input2)
                  return;
                if (input2.type === StateMachineInputType.Number) {
                  input2.asNumber().value = value;
                } else {
                  console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a number"));
                }
              };
              Rive3.prototype.fireStateAtPath = function(inputName, path) {
                var input2 = this.retrieveInputAtPath(inputName, path);
                if (!input2)
                  return;
                if (input2.type === StateMachineInputType.Trigger) {
                  input2.asTrigger().fire();
                } else {
                  console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a trigger"));
                }
              };
              Rive3.prototype.retrieveTextAtPath = function(name, path) {
                if (!name) {
                  console.warn("No text name provided for path '".concat(path, "'"));
                  return;
                }
                if (!path) {
                  console.warn("No path provided for text '".concat(name, "'"));
                  return;
                }
                if (!this.artboard) {
                  console.warn("Tried to access text: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                  return;
                }
                var text = this.artboard.textByPath(name, path);
                if (!text) {
                  console.warn("Could not access text with name: '".concat(name, "', at path:'").concat(path, "'"));
                  return;
                }
                return text;
              };
              Rive3.prototype.getTextRunValueAtPath = function(textName, path) {
                var run = this.retrieveTextAtPath(textName, path);
                if (!run) {
                  console.warn("Could not get text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                  return;
                }
                return run.text;
              };
              Rive3.prototype.setTextRunValueAtPath = function(textName, value, path) {
                var run = this.retrieveTextAtPath(textName, path);
                if (!run) {
                  console.warn("Could not set text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                  return;
                }
                run.text = value;
              };
              Object.defineProperty(Rive3.prototype, "playingStateMachineNames", {
                get: function() {
                  if (!this.loaded) {
                    return [];
                  }
                  return this.animator.stateMachines.filter(function(m) {
                    return m.playing;
                  }).map(function(m) {
                    return m.name;
                  });
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "playingAnimationNames", {
                get: function() {
                  if (!this.loaded) {
                    return [];
                  }
                  return this.animator.animations.filter(function(a) {
                    return a.playing;
                  }).map(function(a) {
                    return a.name;
                  });
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "pausedAnimationNames", {
                get: function() {
                  if (!this.loaded) {
                    return [];
                  }
                  return this.animator.animations.filter(function(a) {
                    return !a.playing;
                  }).map(function(a) {
                    return a.name;
                  });
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "pausedStateMachineNames", {
                get: function() {
                  if (!this.loaded) {
                    return [];
                  }
                  return this.animator.stateMachines.filter(function(m) {
                    return !m.playing;
                  }).map(function(m) {
                    return m.name;
                  });
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "isPlaying", {
                get: function() {
                  return this.animator.isPlaying;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "isPaused", {
                get: function() {
                  return this.animator.isPaused;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "isStopped", {
                get: function() {
                  return this.animator.isStopped;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "bounds", {
                get: function() {
                  return this.artboard ? this.artboard.bounds : void 0;
                },
                enumerable: false,
                configurable: true
              });
              Rive3.prototype.on = function(type, callback) {
                this.eventManager.add({
                  type,
                  callback
                });
              };
              Rive3.prototype.off = function(type, callback) {
                this.eventManager.remove({
                  type,
                  callback
                });
              };
              Rive3.prototype.unsubscribe = function(type, callback) {
                console.warn("This function is deprecated: please use `off()` instead.");
                this.off(type, callback);
              };
              Rive3.prototype.removeAllRiveEventListeners = function(type) {
                this.eventManager.removeAll(type);
              };
              Rive3.prototype.unsubscribeAll = function(type) {
                console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
                this.removeAllRiveEventListeners(type);
              };
              Rive3.prototype.stopRendering = function() {
                if (this.loaded && this.frameRequestId) {
                  if (this.runtime.cancelAnimationFrame) {
                    this.runtime.cancelAnimationFrame(this.frameRequestId);
                  } else {
                    cancelAnimationFrame(this.frameRequestId);
                  }
                  this.frameRequestId = null;
                }
              };
              Rive3.prototype.startRendering = function() {
                if (this.loaded && this.artboard && !this.frameRequestId) {
                  if (this.runtime.requestAnimationFrame) {
                    this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this));
                  } else {
                    this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
                  }
                }
              };
              Rive3.prototype.enableFPSCounter = function(fpsCallback) {
                this.runtime.enableFPSCounter(fpsCallback);
              };
              Rive3.prototype.disableFPSCounter = function() {
                this.runtime.disableFPSCounter();
              };
              Object.defineProperty(Rive3.prototype, "contents", {
                get: function() {
                  if (!this.loaded) {
                    return void 0;
                  }
                  var riveContents = {
                    artboards: []
                  };
                  for (var i2 = 0; i2 < this.file.artboardCount(); i2++) {
                    var artboard = this.file.artboardByIndex(i2);
                    var artboardContents = {
                      name: artboard.name,
                      animations: [],
                      stateMachines: []
                    };
                    for (var j = 0; j < artboard.animationCount(); j++) {
                      var animation = artboard.animationByIndex(j);
                      artboardContents.animations.push(animation.name);
                    }
                    for (var k = 0; k < artboard.stateMachineCount(); k++) {
                      var stateMachine = artboard.stateMachineByIndex(k);
                      var name_1 = stateMachine.name;
                      var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                      var inputContents = [];
                      for (var l = 0; l < instance.inputCount(); l++) {
                        var input2 = instance.input(l);
                        inputContents.push({ name: input2.name, type: input2.type });
                      }
                      artboardContents.stateMachines.push({
                        name: name_1,
                        inputs: inputContents
                      });
                    }
                    riveContents.artboards.push(artboardContents);
                  }
                  return riveContents;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "volume", {
                get: function() {
                  if (this.artboard && this.artboard.volume !== this._volume) {
                    this._volume = this.artboard.volume;
                  }
                  return this._volume;
                },
                set: function(value) {
                  this._volume = value;
                  if (this.artboard) {
                    this.artboard.volume = value * audioManager.systemVolume;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "artboardWidth", {
                get: function() {
                  var _a;
                  if (this.artboard) {
                    return this.artboard.width;
                  }
                  return (_a = this._artboardWidth) !== null && _a !== void 0 ? _a : 0;
                },
                set: function(value) {
                  this._artboardWidth = value;
                  if (this.artboard) {
                    this.artboard.width = value;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(Rive3.prototype, "artboardHeight", {
                get: function() {
                  var _a;
                  if (this.artboard) {
                    return this.artboard.height;
                  }
                  return (_a = this._artboardHeight) !== null && _a !== void 0 ? _a : 0;
                },
                set: function(value) {
                  this._artboardHeight = value;
                  if (this.artboard) {
                    this.artboard.height = value;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Rive3.prototype.resetArtboardSize = function() {
                if (this.artboard) {
                  this.artboard.resetArtboardSize();
                  this._artboardWidth = this.artboard.width;
                  this._artboardHeight = this.artboard.height;
                } else {
                  this._artboardWidth = void 0;
                  this._artboardHeight = void 0;
                }
              };
              Object.defineProperty(Rive3.prototype, "devicePixelRatioUsed", {
                get: function() {
                  return this._devicePixelRatioUsed;
                },
                set: function(value) {
                  this._devicePixelRatioUsed = value;
                },
                enumerable: false,
                configurable: true
              });
              Rive3.missingErrorMessage = "Rive source file or data buffer required";
              return Rive3;
            }();
            var loadRiveFile = function(src) {
              return __awaiter(void 0, void 0, void 0, function() {
                var req, res, buffer;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      req = new Request(src);
                      return [4, fetch(req)];
                    case 1:
                      res = _a.sent();
                      return [4, res.arrayBuffer()];
                    case 2:
                      buffer = _a.sent();
                      return [2, buffer];
                  }
                });
              });
            };
            var mapToStringArray = function(obj) {
              if (typeof obj === "string") {
                return [obj];
              } else if (obj instanceof Array) {
                return obj;
              }
              return [];
            };
            var Testing = {
              EventManager,
              TaskQueueManager
            };
            var decodeAudio = function(bytes) {
              return new Promise(function(resolve) {
                return RuntimeLoader.getInstance(function(rive2) {
                  rive2.decodeAudio(bytes, resolve);
                });
              });
            };
            var decodeImage = function(bytes) {
              return new Promise(function(resolve) {
                return RuntimeLoader.getInstance(function(rive2) {
                  rive2.decodeImage(bytes, resolve);
                });
              });
            };
            var decodeFont = function(bytes) {
              return new Promise(function(resolve) {
                return RuntimeLoader.getInstance(function(rive2) {
                  rive2.decodeFont(bytes, resolve);
                });
              });
            };
          })();
          return __webpack_exports__;
        })();
      });
    }
  });

  // src/index.js
  var import_paper2 = __toESM(require_paper_full(), 1);

  // src/interactions/attributes.js
  var attr = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "")
      return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean")
      return true;
    if (attrVal === "false" && defaultValType === "boolean")
      return false;
    if (isNaN(attrVal) && defaultValType === "string")
      return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number")
      return +attrVal;
    return defaultVal;
  };

  // src/interactions/line.js
  var scrollLines = function(trigger2, mobile = false) {
    let scrollStart = attr("top 90%", trigger2.getAttribute("scroll-start"));
    let scrollEnd = attr("bottom 90%", trigger2.getAttribute("scroll-end"));
    const lineTL = gsap.timeline({
      scrollTrigger: {
        trigger: trigger2,
        start: scrollStart,
        end: scrollEnd,
        scrub: 0.5
      },
      defaults: {
        duration: 1,
        ease: "none"
      }
    });
    const plusElements = trigger2.querySelectorAll(".plus_component");
    plusElements.forEach((plus) => {
      lineTL.from(
        plus,
        {
          scale: 0
        },
        0
      );
    });
    const lines = trigger2.querySelectorAll(".line-fill");
    lines.forEach((line) => {
      if (line.hasAttribute("scroll-false") || line.offsetParent === null) {
        return;
      }
      let horizontal = true;
      if (!mobile && line.hasAttribute("scroll-desktop-v")) {
        horizontal = false;
      }
      if (mobile && line.hasAttribute("scroll-mobile-v")) {
        horizontal = false;
      }
      lineTL.from(
        line,
        {
          width: horizontal ? "0%" : "100%",
          height: horizontal ? "100%" : "0%"
        },
        0
      );
    });
  };

  // node_modules/split-type/dist/index.js
  (function() {
    function append() {
      var length = arguments.length;
      for (var i2 = 0; i2 < length; i2++) {
        var node = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
        if (node.nodeType === 1 || node.nodeType === 11)
          this.appendChild(node);
        else
          this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (arguments.length)
        this.append.apply(this, arguments);
    }
    function replaceWith() {
      var parent = this.parentNode;
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }
      var i2 = nodes.length;
      if (!parent)
        return;
      if (!i2)
        parent.removeChild(this);
      while (i2--) {
        var node = nodes[i2];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i2) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
      var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var object = extend(settings);
    var types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map(function(type) {
        return String(type).trim();
      }).filter(function(type) {
        return /((line)|(word)|(char))/i.test(type);
      });
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input2) {
    return isObject(input2) && /^(1|3|11)$/.test(input2.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray(value) {
    if (isArray(value))
      return value;
    if (value == null)
      return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    var elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray(elements).reduce(function(result, element) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(toArray(element).filter(isNode)));
    }, []);
  }
  var entries = Object.entries;
  var expando = "_splittype";
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = _objectSpread2(_objectSpread2({}, data), key);
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    var id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function clear() {
    Object.keys(cache).forEach(function(key) {
      delete cache[key];
    });
  }
  function cleanup() {
    entries(cache).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
    var string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[".concat(rsAstralRange, "]");
  var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
  var rsNonAstral = "[^".concat(rsAstralRange, "]");
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = "".concat(rsModifier, "?");
  var rsOptVar = "[".concat(rsVarRange, "]?");
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:".concat(["".concat(rsNonAstral).concat(rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), "\n)");
  var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp("[".concat(unicodeRange.join(""), "]"));
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
      var rawValue = attributes[attribute];
      var value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "")
        return;
      if (attribute === "children") {
        element.append.apply(element, _toConsumableArray(toArray(value)));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings);
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var VALUE = textNode.nodeValue;
    var splitText = document.createDocumentFragment();
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
      var wordElement;
      var characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
          var characterElement = createElement(TAG_NAME, {
            "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [].concat(_toConsumableArray(chars), [characterElement]);
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
          style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ""),
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach(function(characterElement) {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    var type = node.nodeType;
    var wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    var childNodes = toArray(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        var nextSibling = node.nextSibling;
        var prevSibling = node.previousSibling;
        var text = node.textContent || "";
        var textAfter = nextSibling ? nextSibling.textContent : " ";
        var textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce(function(result, child) {
      var _split = split(child, settings), words = _split.words, chars = _split.chars;
      return {
        words: [].concat(_toConsumableArray(result.words), _toConsumableArray(words)),
        chars: [].concat(_toConsumableArray(result.chars), _toConsumableArray(chars))
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x = _node$getBoundingClie.x, y = _node$getBoundingClie.y;
    var top = y + scrollY - parentY;
    var left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray(element.children).forEach(function(child) {
        return unSplitWords(child);
      });
    } else {
      remove(element);
      element.replaceWith.apply(element, _toConsumableArray(element.childNodes));
    }
  }
  var createFragment = function createFragment2() {
    return document.createDocumentFragment();
  };
  function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName("*");
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling;
    var splitText = createFragment();
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray(nodes).forEach(function(node) {
      var isWordLike = node.parentElement === element;
      var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left;
      if (/^br$/i.test(node.nodeName))
        return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map(function(wordsInThisLine) {
        var lineElement = createElement(TAG_NAME, {
          "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
          style: "display: block; text-align: ".concat(align, "; width: 100%;")
        });
        set(lineElement, "isLine", true);
        var lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
          var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
          var next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = "".concat(element.style.width || elementWidth, "px");
      element.style.height = "".concat(elementHeight, "px");
      toArray(nodes).forEach(function(node) {
        var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
        var parentData = get(node.parentElement);
        var isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px");
        node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px");
        node.style.height = "".concat(height, "px");
        node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px");
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling)
        parent.insertBefore(element, nextSibling);
      else
        parent.appendChild(element);
    }
    return lines;
  }
  var _defaults = extend(defaults, {});
  var SplitType = /* @__PURE__ */ function() {
    _createClass(SplitType2, null, [{
      key: "clearData",
      value: function clearData() {
        clear();
      }
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        _defaults = extend(_defaults, parseSettings(options));
        return defaults;
      }
    }, {
      key: "revert",
      value: function revert(elements) {
        getTargetElements(elements).forEach(function(element) {
          var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
          if (isSplit) {
            element.innerHTML = html;
            element.style.width = cssWidth || "";
            element.style.height = cssHeight || "";
            remove(element);
          }
        });
      }
    }, {
      key: "create",
      value: function create(target, options) {
        return new SplitType2(target, options);
      }
    }, {
      key: "data",
      get: function get2() {
        return cache;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return _defaults;
      },
      set: function set2(options) {
        _defaults = extend(_defaults, parseSettings(options));
      }
    }]);
    function SplitType2(elements, options) {
      _classCallCheck(this, SplitType2);
      this.isSplit = false;
      this.settings = extend(_defaults, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    _createClass(SplitType2, [{
      key: "split",
      value: function split$1(options) {
        var _this = this;
        this.revert();
        this.elements.forEach(function(element) {
          set(element, "html", element.innerHTML);
        });
        this.lines = [];
        this.words = [];
        this.chars = [];
        var scrollPos = [window.pageXOffset, window.pageYOffset];
        if (options !== void 0) {
          this.settings = extend(this.settings, parseSettings(options));
        }
        var types = parseTypes(this.settings.types);
        if (types.none) {
          return;
        }
        this.elements.forEach(function(element) {
          set(element, "isRoot", true);
          var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
          _this.words = [].concat(_toConsumableArray(_this.words), _toConsumableArray(words));
          _this.chars = [].concat(_toConsumableArray(_this.chars), _toConsumableArray(chars));
        });
        this.elements.forEach(function(element) {
          if (types.lines || _this.settings.absolute) {
            var lines = repositionAfterSplit(element, _this.settings, scrollPos);
            _this.lines = [].concat(_toConsumableArray(_this.lines), _toConsumableArray(lines));
          }
        });
        this.isSplit = true;
        window.scrollTo(scrollPos[0], scrollPos[1]);
        cleanup();
      }
    }, {
      key: "revert",
      value: function revert() {
        if (this.isSplit) {
          this.lines = null;
          this.words = null;
          this.chars = null;
          this.isSplit = false;
        }
        SplitType2.revert(this.elements);
      }
    }]);
    return SplitType2;
  }();

  // src/utilities.js
  var attr2 = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "")
      return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean")
      return true;
    if (attrVal === "false" && defaultValType === "boolean")
      return false;
    if (isNaN(attrVal) && defaultValType === "string")
      return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number")
      return +attrVal;
    return defaultVal;
  };
  var runSplit = function(text, types = "lines, words") {
    if (!text)
      return;
    typeSplit = new SplitType(text, {
      types
    });
    return typeSplit;
  };
  var ClassWatcher = class {
    constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
      this.targetNode = targetNode;
      this.classToWatch = classToWatch;
      this.classAddedCallback = classAddedCallback;
      this.classRemovedCallback = classRemovedCallback;
      this.observer = null;
      this.lastClassState = targetNode.classList.contains(this.classToWatch);
      this.init();
    }
    init() {
      this.observer = new MutationObserver(this.mutationCallback);
      this.observe();
    }
    observe() {
      this.observer.observe(this.targetNode, { attributes: true });
    }
    disconnect() {
      this.observer.disconnect();
    }
    mutationCallback = (mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          let currentClassState = mutation.target.classList.contains(this.classToWatch);
          if (this.lastClassState !== currentClassState) {
            this.lastClassState = currentClassState;
            if (currentClassState) {
              this.classAddedCallback();
            } else {
              this.classRemovedCallback();
            }
          }
        }
      }
    };
  };

  // src/interactions/scrollIn.js
  var scrollIn = function(gsapContext) {
    const ANIMATION_ID = "scrollin";
    const ELEMENT = "data-ix-scrollin";
    const HEADING = "heading";
    const ITEM = "item";
    const CONTAINER = "container";
    const STAGGER = "stagger";
    const RICH_TEXT = "rich-text";
    const IMAGE_WRAP = "image-wrap";
    const IMAGE = "image";
    const LINE = "line";
    const SCROLL_TOGGLE_ACTIONS = "data-ix-scrollin-toggle-actions";
    const SCROLL_SCRUB = "data-ix-scrollin-scrub";
    const SCROLL_START = "data-ix-scrollin-start";
    const SCROLL_END = "data-ix-scrollin-end";
    const CLIP_DIRECTION = "data-ix-scrollin-direction";
    const scrollInTL = function(item) {
      const settings = {
        scrub: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "top 75%"
      };
      settings.toggleActions = attr2(settings.toggleActions, item.getAttribute(SCROLL_TOGGLE_ACTIONS));
      settings.scrub = attr2(settings.scrub, item.getAttribute(SCROLL_SCRUB));
      settings.start = attr2(settings.start, item.getAttribute(SCROLL_START));
      settings.end = attr2(settings.end, item.getAttribute(SCROLL_END));
      const tl2 = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power1.out"
        },
        scrollTrigger: {
          trigger: item,
          start: settings.start,
          end: settings.end,
          toggleActions: settings.toggleActions,
          scrub: settings.scrub
        }
      });
      return tl2;
    };
    const defaultTween = function(item, tl2, options = {}) {
      const varsFrom = {
        opacity: 0,
        y: "2rem"
      };
      const varsTo = {
        opacity: 1,
        y: "0rem"
      };
      if (options.stagger === true) {
        varsTo.stagger = { each: 0.1, from: "start" };
      }
      const tween = tl2.fromTo(item, varsFrom, varsTo);
      return tween;
    };
    const scrollInHeading = function(item) {
      const splitText = runSplit(item);
      if (!splitText)
        return;
      const tl2 = scrollInTL(item);
      const tween = defaultTween(splitText.words, tl2, { stagger: true });
      tl2.eventCallback("onComplete", () => {
      });
    };
    const scrollInItem = function(item) {
      if (!item)
        return;
      if (item.classList.contains("w-richtext")) {
        const children = gsap.utils.toArray(item.children);
        if (children.length === 0)
          return;
        children.forEach((child) => {
          const tl2 = scrollInTL(child);
          const tween = defaultTween(child, tl2);
        });
      } else {
        const tl2 = scrollInTL(item);
        const tween = defaultTween(item, tl2);
      }
    };
    const getCLipStart = function(item) {
      let defaultDirection = "right";
      let clipStart;
      const direction = attr2(defaultDirection, item.getAttribute(CLIP_DIRECTION));
      const clipDirections = {
        left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      };
      if (direction === "left") {
        clipStart = clipDirections.left;
      }
      if (direction === "right") {
        clipStart = clipDirections.right;
      }
      if (direction === "top") {
        clipStart = clipDirections.top;
      }
      if (direction === "bottom") {
        clipStart = clipDirections.bottom;
      }
      return clipStart;
    };
    const scrollInImage = function(item) {
      if (!item)
        return;
      const clipStart = getCLipStart(item);
      const clipEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const tl2 = scrollInTL(item);
      tl2.fromTo(
        item,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd,
          duration: 1
        }
      );
    };
    const scrollInLine = function(item) {
      if (!item)
        return;
      const clipStart = getCLipStart(item);
      const clipEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const tl2 = scrollInTL(item);
      tl2.fromTo(
        item,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd
        }
      );
    };
    const scrollInContainer = function(item) {
      if (!item)
        return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0)
        return;
      children.forEach((child) => {
        const tl2 = scrollInTL(child);
        const tween = defaultTween(child, tl2);
      });
    };
    const scrollInStagger = function(item) {
      if (!item)
        return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0)
        return;
      const tl2 = scrollInTL(item);
      const tween = defaultTween(children, tl2, { stagger: true });
    };
    const scrollInRichText = function(item) {
      if (!item)
        return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0)
        return;
      children.forEach((child) => {
        const childTag = child.tagName;
        if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(childTag)) {
          scrollInHeading(child);
        }
        if (childTag === "FIGURE") {
          scrollInImage(child);
        } else {
          scrollInItem(child);
        }
      });
    };
    const items = gsap.utils.toArray(`[${ELEMENT}]`);
    items.forEach((item) => {
      if (!item)
        return;
      const scrollInType = item.getAttribute(ELEMENT);
      if (scrollInType === HEADING) {
        scrollInHeading(item);
      }
      if (scrollInType === ITEM) {
        scrollInItem(item);
      }
      if (scrollInType === IMAGE) {
        scrollInImage(item);
      }
      if (scrollInType === LINE) {
        scrollInLine(item);
      }
      if (scrollInType === CONTAINER) {
        scrollInContainer(item);
      }
      if (scrollInType === STAGGER) {
        scrollInStagger(item);
      }
      if (scrollInType === RICH_TEXT) {
        scrollInRichText(item);
      }
    });
  };

  // src/interactions/accordion.js
  var accordionAnimation = function() {
    const accordionLists = gsap.utils.toArray('[cr-accordion="list"]');
    const ACCORDION_ITEM = '[cr-accordion="item"]';
    const ACCORDION_TOP = '[cr-accordion="top"]';
    const ACCORDION_OPEN = '[cr-accordion="open"]';
    const ACCORDION_CLOSE = '[cr-accordion="close"]';
    const OPTION_FIRST_OPEN = "cr-accordion-first-open";
    const OPTION_ONE_ACTIVE = "cr-accordion-one-active";
    const OPTION_KEEP_ONE_OPEN = "cr-accordion-keep-one-open";
    const OPTION_HOVER_OPEN = "cr-accordion-hover";
    const OPTION_SCROLL_OPEN = "cr-accordion-scroll";
    const ACTIVE_CLASS3 = "is-active";
    if (accordionLists.length === 0 || accordionLists === void 0)
      return;
    accordionLists.forEach((list) => {
      let firstOpen = attr(false, list.getAttribute(OPTION_FIRST_OPEN));
      let oneActive = attr(false, list.getAttribute(OPTION_ONE_ACTIVE));
      let keepOneOpen = attr(false, list.getAttribute(OPTION_KEEP_ONE_OPEN));
      let hoverOnly = attr(false, list.getAttribute(OPTION_HOVER_OPEN));
      let scrollOnly = attr(false, list.getAttribute(OPTION_SCROLL_OPEN));
      const firstItem = list.firstElementChild;
      if (!hoverOnly && !scrollOnly) {
        if (firstOpen && firstItem) {
          firstItem.classList.add(ACTIVE_CLASS3);
          firstItem.querySelector(ACCORDION_OPEN).click();
        }
        list.addEventListener("click", function(e) {
          const clickedEl = e.target.closest(ACCORDION_TOP);
          if (!clickedEl)
            return;
          const clickedItem = clickedEl.closest(ACCORDION_ITEM);
          const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
          let clickedItemAlreadyActive = clickedItem.classList.contains(ACTIVE_CLASS3);
          if (!clickedItemAlreadyActive) {
            if (oneActive) {
              accordionItems.forEach((item) => {
                if (item === clickedItem) {
                  item.classList.add(ACTIVE_CLASS3);
                  item.querySelector(ACCORDION_OPEN).click();
                } else {
                  item.classList.remove(ACTIVE_CLASS3);
                  item.querySelector(ACCORDION_CLOSE).click();
                }
              });
            }
            if (!oneActive) {
              clickedItem.classList.add(ACTIVE_CLASS3);
              clickedItem.querySelector(ACCORDION_OPEN).click();
            }
          }
          if (clickedItemAlreadyActive && !keepOneOpen) {
            clickedItem.classList.remove(ACTIVE_CLASS3);
            clickedItem.querySelector(ACCORDION_CLOSE).click();
          }
        });
      }
      if (hoverOnly) {
        const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
        accordionItems.forEach((item) => {
          item.addEventListener("mouseover", function() {
            this.classList.add(ACTIVE_CLASS3);
            item.querySelector(ACCORDION_OPEN).click();
          });
          item.addEventListener("mouseout", function() {
            this.classList.remove(ACTIVE_CLASS3);
            item.querySelector(ACCORDION_CLOSE).click();
          });
        });
      }
      if (scrollOnly) {
        const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
        const listArray = gsap.utils.toArray(accordionItems);
        accordionItems.forEach((item, index) => {
          firstItem.classList.add(ACTIVE_CLASS3);
          firstItem.querySelector(ACCORDION_OPEN).click();
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top center",
              end: "bottom center",
              scrub: 0,
              onEnter: () => {
                item.classList.add(ACTIVE_CLASS3);
                item.querySelector(ACCORDION_OPEN).click();
              },
              onLeave: () => {
                if (index !== listArray.length - 1) {
                  item.classList.remove(ACTIVE_CLASS3);
                  item.querySelector(ACCORDION_CLOSE).click();
                }
              },
              onEnterBack: () => {
                item.classList.add(ACTIVE_CLASS3);
                item.querySelector(ACCORDION_OPEN).click();
              },
              onLeaveBack: () => {
                if (index !== 0) {
                  item.classList.remove(ACTIVE_CLASS3);
                  item.querySelector(ACCORDION_CLOSE).click();
                }
              }
            }
          });
        });
      }
    });
  };

  // node_modules/countup.js/dist/countUp.min.js
  var t = function() {
    return t = Object.assign || function(t2) {
      for (var i2, n = 1, s = arguments.length; n < s; n++)
        for (var a in i2 = arguments[n])
          Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
      return t2;
    }, t.apply(this, arguments);
  };
  var i = function() {
    function i2(i3, n, s) {
      var a = this;
      this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
        a.startTime || (a.startTime = t2);
        var i4 = t2 - a.startTime;
        a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
        var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
        a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
      }, this.formatNumber = function(t2) {
        var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
        i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
        var r = (i4 += "").split(".");
        if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
            a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
          n2 = e;
        }
        return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        }), s2 = s2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        })), o + a.options.prefix + n2 + s2 + a.options.suffix;
      }, this.easeOutExpo = function(t2, i4, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
      }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return a.handleScroll(a);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t2) {
          return t2();
        });
      }, this.handleScroll(this)));
    }
    return i2.prototype.handleScroll = function(t2) {
      if (t2 && window && !t2.once) {
        var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
          return t2.start();
        }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
      }
    }, i2.prototype.determineDirectionAndSmartEasing = function() {
      var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t2;
      var i3 = t2 - this.startVal;
      if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t2;
        var n = this.countDown ? 1 : -1;
        this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else
        this.endVal = t2, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, i2.prototype.start = function(t2) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i2.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i2.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i2.prototype.update = function(t2) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i2.prototype.printValue = function(t2) {
      var i3;
      if (this.el) {
        var n = this.formattingFn(t2);
        if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render)
          this.options.plugin.render(this.el, n);
        else if ("INPUT" === this.el.tagName)
          this.el.value = n;
        else
          "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, i2.prototype.ensureNumber = function(t2) {
      return "number" == typeof t2 && !isNaN(t2);
    }, i2.prototype.validateValue = function(t2) {
      var i3 = Number(t2);
      return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
    }, i2.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i2;
  }();

  // src/interactions/count.js
  var countUp = function(data) {
    const items = document.querySelectorAll("[cr-count-number]");
    items.forEach((item) => {
      const number = +item.textContent;
      if (!number || Number.isNaN(number))
        return;
      decimalPoints = countDecimalPoints(number);
      const countUp2 = new i(item, number, {
        useGrouping: false,
        decimalPlaces: decimalPoints,
        duration: 2.5
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top 10%",
          scrub: 1,
          onEnter: () => {
            countUp2.start();
          },
          onEnterBack: () => {
            countUp2.reset();
            countUp2.start();
          }
        }
      });
    });
  };
  function countDecimalPoints(number) {
    const numberString = number.toString();
    const parts = numberString.split(".");
    if (parts.length === 1) {
      return 0;
    }
    return parts[1].length;
  }

  // src/interactions/hoverActive.js
  var hoverActive = function() {
    const ANIMATION_ID = "hoveractive";
    const WRAP = '[cr-hoveractive="wrap"]';
    const ITEM = '[cr-hoveractive="item"]';
    const OPTION_ACTIVE_CLASS = "cr-hoveractive-class";
    const OPTION_KEEP_ACTIVE = "cr-hoveractive-keep-active";
    const ACTIVE_CLASS3 = "is-active";
    const wraps = gsap.utils.toArray(WRAP);
    const activateOnHover = function(parent) {
      const children = parent.querySelectorAll(ITEM);
      let activeClass = attr2(ACTIVE_CLASS3, parent.getAttribute(OPTION_ACTIVE_CLASS));
      let keepActive = attr2(false, parent.getAttribute(OPTION_KEEP_ACTIVE));
      children.forEach((currentItem) => {
        currentItem.addEventListener("mouseover", function(e) {
          children.forEach((child) => {
            if (child === currentItem) {
              child.classList.add(activeClass);
            } else {
              child.classList.remove(activeClass);
            }
          });
        });
        currentItem.addEventListener("mouseleave", function(e) {
          if (!keepActive) {
            currentItem.classList.remove(activeClass);
          }
        });
      });
    };
    if (wraps.length >= 0) {
      wraps.forEach((wrap) => {
        activateOnHover(wrap);
      });
    } else {
      const body = document.querySelector(body);
      activateOnHover(body);
    }
  };

  // src/interactions/tabs.js
  var tabsAnimation = function() {
    const ANIMATION_ID = "cr-tabs";
    const WRAP = '[cr-tabs="wrap"]';
    const TAB_LINK = ".w-tab-link";
    const LINK_ACTIVE_CLASS = "w--current";
    const TAB_ITEM = ".w-tab-pane";
    const ITEM_ACTIVE_CLASS = "w--tab-active";
    const TAB_EL = "[cr-tabs-el]";
    const wraps = [...document.querySelectorAll(WRAP)];
    if (wraps.length === 0)
      return;
    wraps.forEach((wrap) => {
      const items = [...wrap.querySelectorAll(TAB_ITEM)];
      const links = [...wrap.querySelectorAll(TAB_LINK)];
      if (items.length === 0)
        return;
      items.forEach((item, index) => {
        const link = links[index];
        let elements = [...item.querySelectorAll(TAB_EL)];
        if (elements.length === 0) {
          elements = [...item.children];
        }
        const tl2 = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.4,
            ease: "power2.out"
          }
        });
        tl2.fromTo(
          elements,
          { opacity: 0, y: "2rem" },
          {
            opacity: 1,
            y: "0rem",
            stagger: { each: 0.2, from: "start" }
          }
        );
        tl2.progress(1);
        function tabActivated() {
          tl2.progress(0);
          tl2.restart();
        }
        function tabDeactivated() {
        }
        let classWatcher = new ClassWatcher(item, ITEM_ACTIVE_CLASS, tabActivated, tabDeactivated);
      });
    });
  };

  // src/interactions/riveTabs.js
  var rive = __toESM(require_rive(), 1);
  var riveTabs = function() {
    const ANIMATION_ID = "cr-tabs";
    const WRAP = '[cr-rive-tabs="wrap"]';
    const RIVE_SELECTOR = '[cr-rive-tabs="rive"]';
    const TAB_LINK = ".w-tab-link";
    const TAB_ITEM = ".w-tab-pane";
    const ITEM_ACTIVE_CLASS = "w--tab-active";
    const RIVE_URL = "data-rive-url";
    const RIVE_ARTBOARD = "data-rive-artboard";
    const RIVE_STATE_MACHINE = "data-rive-state-machine";
    const STATE_MACHINE_NAME = "State Machine 1";
    const INPUT_BOOLEAN = "active";
    const INPUT_TRIGGER = "trigger";
    const INPUT_NUMBER = "number";
    const wraps = [...document.querySelectorAll(WRAP)];
    if (wraps.length === 0)
      return;
    wraps.forEach((wrap) => {
      const items = [...wrap.querySelectorAll(TAB_ITEM)];
      const links = [...wrap.querySelectorAll(TAB_LINK)];
      if (items.length === 0)
        return;
      items.forEach((item, index) => {
        const riveEl = item.querySelector(RIVE_SELECTOR);
        if (!riveEl)
          return;
        const riveURL = riveEl.getAttribute(RIVE_URL);
        const riveArtboard = riveEl.getAttribute(RIVE_ARTBOARD);
        const riveStateMachine = riveEl.getAttribute(RIVE_STATE_MACHINE);
        const riveCanvas = riveEl.firstChild;
        const riveInstance = new rive.Rive({
          src: riveURL,
          canvas: riveCanvas,
          autoplay: true,
          artboard: riveArtboard,
          stateMachines: riveStateMachine,
          onLoad: () => {
            riveInstance.resizeDrawingSurfaceToCanvas();
            const input2 = useStateMachineInput(riveInstance, riveStateMachine, INPUT_BOOLEAN);
          }
        });
        function useStateMachineInput(riveInstance2, stateMachineName, inputName, initialValue) {
          const inputs = riveInstance2.stateMachineInputs(stateMachineName).find((input2) => input2.name === inputName);
          if (input) {
            input.value = initialValue;
          }
          return input;
        }
        function tabActivated() {
        }
        function tabDeactivated() {
        }
        let classWatcher = new ClassWatcher(item, ITEM_ACTIVE_CLASS, tabActivated, tabDeactivated);
      });
    });
  };

  // src/pages/home.js
  var homeHeader = function() {
    const images = document.querySelectorAll("[header-main-image]");
    const tl2 = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 0.8,
        ease: "none"
      }
    });
    images.forEach((image, index) => {
      tl2.to(image, {
        opacity: 1
      });
    });
  };
  var homeSplitScroll = function() {
    const triggerEl = document.querySelector('[cr-home-split="component"]');
    const allItems = document.querySelectorAll('[cr-home-split="item"]');
    const allImages = document.querySelectorAll('[cr-home-split="image"]');
    if (!triggerEl || allItems.length === 0 || allImages.length === 0)
      return;
    let scrollEnd = "bottom bottom";
    let scrollStart = "top top";
    if (triggerEl.hasAttribute("cr-home-split-start")) {
      scrollStart = trigger.getAttribute("cr-home-split-start");
    }
    if (triggerEl.hasAttribute("cr-home-split-end")) {
      scrollEnd = trigger.getAttribute("cr-home-split-end");
    }
    const updateClass = function(currentItem, currentIndex, allItems2) {
      allItems2.forEach((item, index) => {
        let state = Flip.getState(item);
        if (item === currentItem) {
          item.classList.add(ACTIVE_CLASS2);
        } else {
          item.classList.remove(ACTIVE_CLASS2);
        }
        Flip.from(state, {
          duration: 0.3,
          ease: "power1.out"
        });
      });
    };
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: scrollStart,
        end: scrollEnd,
        scrub: true
      },
      defaults: {
        duration: 0.5,
        delay: 1,
        ease: "none"
      }
    });
    allItems.forEach((currentItem, currentIndex) => {
      currentImage = allImages[currentIndex];
      tl2.to(currentImage, {
        opacity: 1
      });
      tl2.call(updateClass, [currentItem, currentIndex, allItems], "<");
    });
  };
  var homeSplitScrollMobile = function() {
    const splitItems = document.querySelectorAll('[cr-home-split="item"]');
    const splitImages = document.querySelectorAll('[cr-home-split="image"]');
    if (splitItems.length === 0 || splitImages.length === 0)
      return;
    splitItems.forEach((item, itemIndex) => {
      item.addEventListener("click", () => {
        if (!item)
          return;
        splitItems.forEach((item2) => item2.classList.remove(ACTIVE_CLASS2));
        splitImages.forEach((image) => image.classList.remove(ACTIVE_CLASS2));
        item.classList.add(ACTIVE_CLASS2);
        splitImages[itemIndex].classList.add(ACTIVE_CLASS2);
      });
    });
  };

  // src/pages/product.js
  var import_paper = __toESM(require_paper_full(), 1);
  var productHeader = function(reduceMotion = false, isMobile = false) {
    const { Path, Point, Group, Color } = import_paper.default;
    const canvas = document.querySelector("#paper-canvas");
    const headerComponent = document.querySelector("#process-header");
    if (import_paper.default.project) {
      import_paper.default.project.clear();
    }
    if (!canvas || !headerComponent)
      return;
    import_paper.default.setup(canvas);
    let NUM_COLS = 80;
    if (isMobile) {
      NUM_COLS = 40;
    }
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const FILL_COLORS = ["#00585c", "#008484", "#91c9c5", "#d3efed", "#cde200", "#e4ea7d", "#f9f9d7"];
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
    const createSquares = function(w2, h2, numCols) {
      let squares = [];
      let space = w2 / numCols;
      for (let x = 0; x < w2; x += space) {
        for (let y = 0; y < h2; y += space) {
          let seed = randomInt(0, 20);
          if (seed < 3) {
            let color = FILL_COLORS[randomInt(0, 7) - 1];
            const square = new Path.Rectangle({
              point: new Point(x, y),
              size: [space, space],
              applyMatrix: false
            });
            square.fillColor = color;
            squares.push(square);
          }
        }
      }
      return squares;
    };
    const squarePaths = createSquares(w, h, NUM_COLS);
    if (reduceMotion)
      return;
    let start = "top 6rem";
    if (isMobile) {
      start = "top 4rem";
    }
    headerFadeTL = gsap.timeline({
      defaults: {
        duration: 0.2,
        ease: "power2.out"
      }
    });
    headerFadeTL.fromTo(
      squarePaths,
      {
        opacity: 0
      },
      {
        opacity: 1,
        stagger: { each: 5e-3, from: "random" }
      },
      0
    );
    headerScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: headerComponent,
        start: "top 6rem",
        end: "bottom 10rem",
        scrub: 0.5
      },
      defaults: {
        duration: 1,
        ease: "none"
      }
    });
    headerScrollTL.fromTo(
      squarePaths,
      {
        scaling: 1
      },
      {
        scaling: 1e-3,
        stagger: { each: 0.02, from: "random" }
      },
      0
    );
    headerScrollTL.progress(progress);
  };
  var process = function() {
    const processItems = document.querySelectorAll('[cr-process="item"]');
    const processImages = document.querySelectorAll('[cr-process="image"]');
    processItems.forEach((item, index) => {
      if (!item)
        return;
      const image = processImages[index];
      const imageTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          scrub: 0,
          onEnter: () => {
            image.classList.add(ACTIVE_CLASS2);
          },
          onLeave: () => {
            if (index !== processImages.length - 1) {
              image.classList.remove(ACTIVE_CLASS2);
            }
          },
          onEnterBack: () => {
            image.classList.add(ACTIVE_CLASS2);
          },
          onLeaveBack: () => {
            if (index !== 0) {
              image.classList.remove(ACTIVE_CLASS2);
            }
          }
        }
      });
      const itemSquare = item.querySelector('[cr-process="square"]');
      const itemContents = item.querySelectorAll("h2, h3, p, .button");
      const fadeTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 10%",
          scrub: 0.5
        }
      });
      fadeTL.fromTo(
        itemContents,
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      );
      fadeTL.from(
        itemSquare,
        {
          backgroundColor: "#f9f9d7"
        },
        "<"
      );
    });
  };
  var iconHighlight = function(start = "top 1%", end = "bottom 99%") {
    const iconSection = document.querySelector('[cr-icon-highlight="section"]');
    const iconItems = document.querySelectorAll('[cr-icon-highlight="item"]');
    const iconTL = gsap.timeline({
      scrollTrigger: {
        trigger: iconSection,
        start,
        end,
        scrub: 0.5
      },
      defaults: {
        duration: 0.5,
        ease: "power1.out"
      }
    });
    iconItems.forEach((item, index) => {
      const itemIcon = item.querySelector('[cr-icon-highlight="icon"]');
      const itemText = item.querySelector('[cr-icon-highlight="span"]');
      if (!itemIcon) {
        return;
      }
      if (index === 0) {
        iconTL.set(
          itemIcon,
          {
            opacity: 0
          },
          "<"
        );
        iconTL.set(itemIcon, {
          opacity: 1,
          delay: 1
        });
      }
      if (index !== 0) {
        iconTL.set(itemIcon, {
          opacity: 1
        });
      }
      if (itemText) {
        iconTL.set(
          itemText,
          {
            fontWeight: 600
          },
          "<"
        );
      }
      iconTL.set(itemIcon, {
        opacity: 0,
        delay: 1
      });
      if (itemText) {
        iconTL.set(
          itemText,
          {
            fontWeight: 300
          },
          "<"
        );
      }
      if (index === iconItems.length - 1) {
        iconTL.to(itemIcon, {
          delay: 0.5
        });
      }
    });
  };
  var productData = function(start = "top 1%", end = "bottom 99%") {
    const items = document.querySelectorAll("[cr-produducts-data-item]");
    if (!items)
      return;
    items.forEach((item) => {
      const itemSquare = item.querySelector("[cr-produducts-data-square]");
      const itemContents = item.querySelectorAll("h2, h3, p, .button");
      const fadeTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top center",
          scrub: 0.5
        },
        defaults: {
          ease: "none",
          duration: 1
        }
      });
      fadeTL.from(itemContents, {
        opacity: 0.1
      });
      fadeTL.from(
        itemSquare,
        {
          backgroundColor: "#d3efed"
        },
        "<"
      );
    });
  };
  var platform = function() {
    const ANIMATION_ID = "cr-platform";
    const PLATFORM_NUMBER = "cr-platform-number";
    const WRAP = '[cr-platform="wrap"]';
    const ITEM = '[cr-platform="item"]';
    const NAV_ITEM = '[cr-platform="nav-item"]';
    const NAV_BG = '[cr-platform="nav-bg"]';
    const components = gsap.utils.toArray(WRAP);
    if (components.length === 0)
      return;
    components.forEach((component) => {
      const items = component.querySelectorAll(ITEM);
      const navItems = component.querySelectorAll(NAV_ITEM);
      if (items.length === 0 || navItems.length === 0)
        return;
      items.forEach((item) => {
        const itemNumber = attr(0, item.getAttribute(PLATFORM_NUMBER));
        let matchingNavItem, matchingNavBg;
        if (itemNumber === 0)
          return;
        navItems.forEach((navItem) => {
          const navNumber = attr(0, navItem.getAttribute(PLATFORM_NUMBER));
          if (navNumber === itemNumber) {
            matchingNavItem = navItem;
            matchingNavBg = navItem.querySelector(NAV_BG);
          }
        });
        if (!matchingNavItem || !matchingNavBg)
          return;
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "bottom center",
            scrub: true
          },
          defaults: {
            duration: 1,
            ease: "none"
          }
        });
        tl.fromTo(
          matchingNavBg,
          {
            width: "0%"
          },
          { width: "100%" }
        );
        tl.fromTo(
          matchingNavItem,
          {
            color: "#fff"
          },
          { color: "#000", duration: 0.5 },
          "<.25"
        );
      });
    });
  };

  // src/pages/use-cases.js
  var scrollTable = function(mobile = false) {
    HIGHLIGHT_COLOR = "#f9f9d7";
    ACTIVE_CLASS = "is-active";
    const rows = document.querySelectorAll(".case-table_row");
    rows.forEach((row) => {
      if (row.hasAttribute("scroll-false")) {
        return;
      }
      const icon = row.querySelector(".case-table_icon");
      const cells = row.querySelectorAll(".case-table_cell");
      const setIconToActive = function(setToActive = true) {
        if (!icon || mobile)
          return;
        let state = Flip.getState(icon);
        if (setToActive) {
          icon.classList.add(ACTIVE_CLASS);
        } else {
          icon.classList.remove(ACTIVE_CLASS);
        }
        Flip.from(state, {
          duration: 0.3,
          ease: "power2.out"
        });
      };
      const setRowToActive = function(setToActive = true) {
        if (setToActive) {
          row.classList.add(ACTIVE_CLASS);
        } else {
          row.classList.remove(ACTIVE_CLASS);
        }
      };
      const rowTL = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top center",
          end: "bottom center",
          toggleActions: "restart reverse restart reverse",
          onEnter: () => {
            setIconToActive();
            setRowToActive();
          },
          onLeave: () => {
            setIconToActive(false);
            setRowToActive(false);
          },
          onEnterBack: () => {
            setIconToActive();
            setRowToActive();
          },
          onLeaveBack: () => {
            setIconToActive(false);
            setRowToActive(false);
          }
        }
      });
    });
  };

  // src/index.js
  var ACTIVE_CLASS2 = "is-active";
  var headerTL;
  var progress = 0;
  document.addEventListener("DOMContentLoaded", function(e) {
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== void 0) {
      gsap.registerPlugin(Flip);
    }
    const lineSections = document.querySelectorAll("[scroll-section]");
    let mm = gsap.matchMedia();
    const gsapInit = function() {
      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px)  and (max-width: 991px)",
          isDesktop: "(min-width: 992px)",
          reduceMotion: "(prefers-reduced-motion: reduce)"
        },
        (context) => {
          let { isMobile, isTablet, isDesktop, reduceMotion } = context.conditions;
          accordionAnimation();
          scrollIn();
          tabsAnimation();
          riveTabs();
          countUp();
          hoverActive();
          productHeader(reduceMotion, isMobile);
          if (!reduceMotion) {
            homeHeader();
            lineSections.forEach((section) => {
              scrollLines(section, isMobile);
            });
            scrollTable(isMobile);
          }
          if (isDesktop || isTablet) {
            homeSplitScroll();
            process();
            iconHighlight();
            productData();
            platform();
            window.addEventListener("resize", function() {
              if (headerTL) {
                progress = headerTL.progress;
                headerTL.kill();
                productHeader(reduceMotion, isMobile);
              }
            });
          }
          if (isMobile) {
            homeSplitScrollMobile();
            iconHighlight("top 40%", "bottom 40%");
          }
        }
      );
    };
    gsapInit();
  });
})();
/*!
 * Paper.js v0.12.17 - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
 * http://juerglehni.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Thu Nov 3 21:15:36 2022 +0100
 *
 ***
 *
 * Straps.js - Class inheritance library with support for bean-style accessors
 *
 * Copyright (c) 2006 - 2020 Jürg Lehni
 * http://juerglehni.com/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Acorn.js
 * https://marijnhaverbeke.nl/acorn/
 *
 * Acorn is a tiny, fast JavaScript parser written in JavaScript,
 * created by Marijn Haverbeke and released under an MIT license.
 *
 */
